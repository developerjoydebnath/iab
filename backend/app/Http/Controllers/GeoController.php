<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GeoDivision;
use App\Models\GeoDistrict;
use App\Models\GeoUpazila;
use App\Models\GeoUnionPouroshova;
use App\Models\User;
use OpenApi\Attributes as OA;

class GeoController extends Controller
{
    #[OA\Get(
        path: "/api/divisions",
        summary: "Get all divisions",
        tags: ["Geo"],
        responses: [
            new OA\Response(response: 200, description: "List of divisions")
        ]
    )]
    public function getDivisions()
    {
        return response()->json(GeoDivision::all());
    }

    #[OA\Get(
        path: "/api/districts",
        summary: "Get districts",
        tags: ["Geo"],
        parameters: [
            new OA\Parameter(name: "pid", in: "query", description: "Division ID", required: false)
        ],
        responses: [
            new OA\Response(response: 200, description: "List of districts")
        ]
    )]
    public function getDistricts(Request $request)
    {
        $query = GeoDistrict::query();
        if ($request->has('pid')) {
            $query->where('pid', $request->pid);
        }
        return response()->json($query->get());
    }

    #[OA\Get(
        path: "/api/upazilas",
        summary: "Get upazilas",
        tags: ["Geo"],
        parameters: [
            new OA\Parameter(name: "pid", in: "query", description: "District ID", required: false)
        ],
        responses: [
            new OA\Response(response: 200, description: "List of upazilas")
        ]
    )]
    public function getUpazilas(Request $request)
    {
        $query = GeoUpazila::query();
        if ($request->has('pid')) {
            $query->where('pid', $request->pid);
        }
        return response()->json($query->get());
    }

    #[OA\Get(
        path: "/api/unions",
        summary: "Get unions",
        tags: ["Geo"],
        parameters: [
            new OA\Parameter(name: "pid", in: "query", description: "Upazila ID", required: false)
        ],
        responses: [
            new OA\Response(response: 200, description: "List of unions")
        ]
    )]
    public function getUnions(Request $request)
    {
        $query = GeoUnionPouroshova::query();
        if ($request->has('pid')) {
            $query->where('pid', $request->pid);
        }
        return response()->json($query->get());
    }

    #[OA\Get(
        path: "/api/total-users",
        summary: "Get total users",
        tags: ["Geo"],
        responses: [
            new OA\Response(response: 200, description: "Total users count")
        ]
    )]
    public function totalUsers()
    {
        $totalUsers = User::where('role', 'user')->count();
        return response()->json(['totalUsers' => $totalUsers]);
    }
}
