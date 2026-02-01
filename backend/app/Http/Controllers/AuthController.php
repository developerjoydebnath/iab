<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use OpenApi\Attributes as OA;

#[OA\Tag(name: "Auth", description: "Authentication APIs")]
class AuthController extends Controller
{
    public function __construct()
    {
        // Middleware usually handled in routes
    }

    #[OA\Post(
        path: "/api/auth/login",
        summary: "Login",
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(
                required: ["mobile", "password"],
                properties: [
                    new OA\Property(property: "mobile", type: "string", example: "01712345678"),
                    new OA\Property(property: "password", type: "string", format: "password", example: "password")
                ]
            )
        ),
        tags: ["Auth"],
        responses: [
            new OA\Response(response: 200, description: "Successful"),
            new OA\Response(response: 401, description: "Unauthorized")
        ]
    )]
    public function login(Request $request)
    {
        $credentials = $request->only('mobile', 'password');

        // Find user with mobile and admin/volunteer role
        $user = User::where('mobile', $credentials['mobile'])
            ->whereIn('role', ['admin', 'volunteer'])
            ->first();

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $token = Auth::guard('api')->login($user);

        return $this->respondWithToken($token);
    }

    #[OA\Post(
        path: "/api/auth/register",
        summary: "Register",
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(
                required: ["name", "mobile", "password", "password_confirmation", "seat_id", "division_id", "district_id", "upazila_id", "union_id"],
                properties: [
                    new OA\Property(property: "name", type: "string", example: "John Doe"),
                    new OA\Property(property: "mobile", type: "string", example: "01712345678"),
                    new OA\Property(property: "password", type: "string", format: "password", example: "password"),
                    new OA\Property(property: "password_confirmation", type: "string", format: "password", example: "password"),
                    new OA\Property(property: "seat_id", type: "integer", example: 1),
                    new OA\Property(property: "division_id", type: "integer", example: 1),
                    new OA\Property(property: "district_id", type: "integer", example: 1),
                    new OA\Property(property: "upazila_id", type: "integer", example: 1),
                    new OA\Property(property: "union_id", type: "integer", example: 1),
                    new OA\Property(property: "message", type: "string", example: "Optional message")
                ]
            )
        ),
        tags: ["Auth"],
        responses: [
            new OA\Response(response: 201, description: "User successfully registered"),
            new OA\Response(response: 400, description: "Validation Error")
        ]
    )]
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'mobile' => 'required|string|max:20',
            'role' => 'nullable|in:admin,user,volunteer',
            'password' => 'nullable|string|min:6|confirmed',
            'referral_id' => 'nullable|exists:users,id',
            'referral_mobile' => 'nullable|string',
            'seat_id' => 'required|exists:seats,id',
            'division_id' => 'required|exists:geo_divisions,id',
            'district_id' => 'required|exists:geo_districts,id',
            'upazila_id' => 'required|exists:geo_upazilas,id',
            'union_id' => 'required|exists:geo_union_pouroshovas,id',
            'is_volunteer' => 'nullable|boolean',
            'message' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        DB::beginTransaction();
        try {
            $plainPassword = $request->filled('password') ? $request->input('password') : Str::random(8);

            $inputRole = $request->get('role', 'user');
            $isVolunteer = $inputRole === 'volunteer' || $request->boolean('is_volunteer');
            $finalRole = $inputRole === 'volunteer' ? 'volunteer' : $inputRole;

            // Enforce conditional uniqueness for admin and volunteer
            if (in_array($finalRole, ['admin', 'volunteer'])) {
                $exists = User::where('mobile', $request->get('mobile'))
                    ->whereIn('role', ['admin', 'volunteer'])
                    ->exists();
                if ($exists) {
                    return response()->json(['mobile' => ['The mobile number is already taken by another volunteer or admin.']], 400);
                }
            }
            $user = User::create([
                'name' => $request->get('name'),
                'mobile' => $request->get('mobile'),
                'password' => Hash::make($plainPassword),
                'role' => $finalRole,
                'referral_id' => $request->get('referral_id'),
                'referral_mobile' => $request->get('referral_mobile'),
            ]);

            // Auto-assign referral if logged in as volunteer
            if (Auth::guard('api')->check()) {
                $loggedInUser = Auth::guard('api')->user();
                if ($loggedInUser && $loggedInUser->role === 'volunteer') {
                    $user->referral_id = $loggedInUser->id;
                    $user->save();
                }
            }


            Profile::create([
                'user_id' => $user->id,
                'name' => $request->get('name'),
                'mobile' => $request->get('mobile'),
                'seat_id' => $request->get('seat_id'),
                'division_id' => $request->get('division_id'),
                'district_id' => $request->get('district_id'),
                'upazila_id' => $request->get('upazila_id'),
                'union_id' => $request->get('union_id'),
                'message' => $request->get('message'),
                'is_volunteer' => $isVolunteer ? 1 : 0,
            ]);

            DB::commit();

            $token = Auth::guard('api')->login($user);

            return response()->json([
                'message' => 'User successfully registered',
                'user' => $user->load('profile'),
                'token' => $token
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Registration failed', 'message' => $e->getMessage()], 500);
        }
    }



    #[OA\Post(
        path: "/api/auth/me",
        summary: "Get Current User",
        security: [["apiAuth" => []]],
        tags: ["Auth"],
        responses: [
            new OA\Response(response: 200, description: "User details")
        ]
    )]
    public function me()
    {
        return response()->json(Auth::guard('api')->user());
    }

    #[OA\Post(
        path: "/api/auth/logout",
        summary: "Logout",
        security: [["apiAuth" => []]],
        tags: ["Auth"],
        responses: [
            new OA\Response(response: 200, description: "Successfully logged out")
        ]
    )]
    public function logout()
    {
        Auth::guard('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    #[OA\Post(
        path: "/api/auth/refresh",
        summary: "Refresh Token",
        security: [["apiAuth" => []]],
        tags: ["Auth"],
        responses: [
            new OA\Response(response: 200, description: "New Token")
        ]
    )]
    public function refresh()
    {
        /** @var \Tymon\JWTAuth\JWTGuard $guard */
        $guard = Auth::guard('api');

        return $this->respondWithToken($guard->refresh());
    }

    protected function respondWithToken($token)
    {
        /** @var \Tymon\JWTAuth\JWTGuard $guard */
        $guard = Auth::guard('api');

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $guard->factory()->getTTL() * 60,
            'user' => $guard->user()
        ]);
    }

    public function updateProfile(Request $request)
    {
        /** @var \App\Models\User|null $user */
        $user = Auth::guard('api')->user();

        if (!$user) return response()->json(['error' => 'Unauthorized'], 401);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user->update($request->only(['name']));

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user
        ]);
    }

    public function forgotPassword(Request $request)
    {
        $validator = Validator::make($request->all(), ['email' => 'required|email']);
        if ($validator->fails()) return response()->json($validator->errors(), 422);

        $status = Password::sendResetLink($request->only('email'));

        return $status === Password::RESET_LINK_SENT
            ? response()->json(['status' => __($status)])
            : response()->json(['email' => __($status)], 400);
    }

    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6',
        ]);

        if ($validator->fails()) return response()->json($validator->errors(), 422);

        $status = Password::reset($request->only(
            'email',
            'password',
            'password_confirmation',
            'token'
        ), function ($user, $password) {
            $user->forceFill([
                'password' => Hash::make($password)
            ])->setRememberToken(Str::random(60));

            $user->save();
        });

        return $status === Password::PASSWORD_RESET
            ? response()->json(['status' => __($status)])
            : response()->json(['email' => __($status)], 400);
    }
}
