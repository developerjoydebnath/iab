<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;
use Illuminate\Support\Facades\Validator;
use OpenApi\Attributes as OA;

class ProfileController extends Controller
{
    #[OA\Get(
        path: "/api/profiles",
        summary: "List all profiles",
        tags: ["Profiles"],
        responses: [
            new OA\Response(response: 200, description: "Successful operation")
        ]
    )]
    public function index()
    {
        return response()->json(Profile::with(['user'])->get());
    }

    #[OA\Post(
        path: "/api/profiles",
        summary: "Create a new profile",
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(
                required: ["user_id", "name", "mobile", "seat_id", "division_id", "district_id", "upazila_id", "union_id"],
                properties: [
                    new OA\Property(property: "user_id", type: "integer"),
                    new OA\Property(property: "name", type: "string"),
                    new OA\Property(property: "mobile", type: "string"),
                    new OA\Property(property: "email", type: "string", format: "email"),
                    new OA\Property(property: "seat_id", type: "integer"),
                    new OA\Property(property: "division_id", type: "integer"),
                    new OA\Property(property: "district_id", type: "integer"),
                    new OA\Property(property: "upazila_id", type: "integer"),
                    new OA\Property(property: "union_id", type: "integer"),
                    new OA\Property(property: "message", type: "string")
                ]
            )
        ),
        tags: ["Profiles"],
        responses: [
            new OA\Response(response: 201, description: "Profile created successfully")
        ]
    )]
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id|unique:profiles,user_id',
            'name' => 'required|string',
            'mobile' => 'required|string',
            'email' => 'nullable|email',
            'seat_id' => 'required|exists:seats,id',
            'division_id' => 'required|exists:geo_divisions,id',
            'district_id' => 'required|exists:geo_districts,id',
            'upazila_id' => 'required|exists:geo_upazilas,id',
            'union_id' => 'required|exists:geo_union_pouroshovas,id',
            'message' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $profile = Profile::create($request->all());
        return response()->json($profile, 201);
    }

    #[OA\Get(
        path: "/api/profiles/{id}",
        summary: "Get profile details",
        tags: ["Profiles"],
        parameters: [
            new OA\Parameter(name: "id", in: "path", description: "Profile ID", required: true)
        ],
        responses: [
            new OA\Response(response: 200, description: "Profile details"),
            new OA\Response(response: 404, description: "Not found")
        ]
    )]
    public function show($id)
    {
        $profile = Profile::with(['user'])->find($id);
        if (!$profile) return response()->json(['error' => 'Not found'], 404);
        return response()->json($profile);
    }

    #[OA\Put(
        path: "/api/profiles/{id}",
        summary: "Update profile",
        tags: ["Profiles"],
        parameters: [
            new OA\Parameter(name: "id", in: "path", description: "Profile ID", required: true)
        ],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "user_id", type: "integer"),
                    new OA\Property(property: "name", type: "string"),
                    new OA\Property(property: "mobile", type: "string"),
                    new OA\Property(property: "email", type: "string", format: "email"),
                    new OA\Property(property: "seat_id", type: "integer"),
                    new OA\Property(property: "division_id", type: "integer"),
                    new OA\Property(property: "district_id", type: "integer"),
                    new OA\Property(property: "upazila_id", type: "integer"),
                    new OA\Property(property: "union_id", type: "integer"),
                    new OA\Property(property: "message", type: "string")
                ]
            )
        ),
        responses: [
            new OA\Response(response: 200, description: "Profile updated successfully")
        ]
    )]
    public function update(Request $request, $id)
    {
        $profile = Profile::find($id);
        if (!$profile) return response()->json(['error' => 'Not found'], 404);

        $validator = Validator::make($request->all(), [
            'user_id' => 'exists:users,id|unique:profiles,user_id,' . $id,
            'name' => 'string',
            'mobile' => 'string',
            'email' => 'nullable|email',
            'seat_id' => 'exists:seats,id',
            'division_id' => 'exists:geo_divisions,id',
            'district_id' => 'exists:geo_districts,id',
            'upazila_id' => 'exists:geo_upazilas,id',
            'union_id' => 'exists:geo_union_pouroshovas,id',
            'message' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $profile->update($request->all());
        return response()->json($profile);
    }

    #[OA\Delete(
        path: "/api/profiles/{id}",
        summary: "Delete profile",
        tags: ["Profiles"],
        parameters: [
            new OA\Parameter(name: "id", in: "path", description: "Profile ID", required: true)
        ],
        responses: [
            new OA\Response(response: 200, description: "Deleted successfully")
        ]
    )]
    public function destroy($id)
    {
        $profile = Profile::find($id);
        if (!$profile) return response()->json(['error' => 'Not found'], 404);
        $profile->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
