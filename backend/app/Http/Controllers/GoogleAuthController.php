<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Google\Client as GoogleClient;
use Google\Service\Oauth2;

class GoogleAuthController extends Controller
{
    public function login(Request $request)
    {
        if (!$request->token) {
            return response()->json(['error' => 'Token required'], 400);
        }

        // 🔹 Create Google client & set access token
        $client = new GoogleClient();
        $client->setAccessToken($request->token);

        // 🔹 Fetch user info from Google
        $oauth = new Oauth2($client);
        $googleUser = $oauth->userinfo->get();

        if (!$googleUser || !$googleUser->email) {
            return response()->json(['error' => 'Invalid Google token'], 401);
        }

        $email = $googleUser->email;
        $name = $googleUser->name;
        $avatar = $googleUser->picture;
        $googleId = $googleUser->id;

        // 🔹 Find or create user
        $user = User::where('email', $email)->first();

        if (!$user) {
            $user = User::create([
                'name'      => $name,
                'email'     => $email,
                'password'  => Hash::make(uniqid()),
                'google_id' => $googleId,
                'avatar'    => $avatar,
                'role'      => 'volunteer',
            ]);
        }

        // 🔹 Generate JWT
        $token = Auth::guard('api')->login($user);

        return $this->respondWithToken($token);
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
}
