<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Seat;
use Illuminate\Support\Facades\Validator;
use OpenApi\Attributes as OA;

class SeatController extends Controller
{
    #[OA\Get(
        path: "/api/seats",
        summary: "List all seats",
        tags: ["Seats"],
        responses: [
            new OA\Response(response: 200, description: "Successful operation")
        ]
    )]
    public function index()
    {
        return response()->json(Seat::all());
    }

    #[OA\Post(
        path: "/api/seats",
        summary: "Create a new seat",
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(
                required: ["seat_no", "seat_name", "candidate_name", "area"],
                properties: [
                    new OA\Property(property: "seat_no", type: "string"),
                    new OA\Property(property: "seat_name", type: "string"),
                    new OA\Property(property: "candidate_name", type: "string"),
                    new OA\Property(property: "area", type: "array", items: new OA\Items(type: "string"))
                ]
            )
        ),
        tags: ["Seats"],
        responses: [
            new OA\Response(response: 201, description: "Seat created successfully")
        ]
    )]
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'seat_no' => 'required|string|unique:seats',
            'seat_name' => 'required|string',
            'candidate_name' => 'required|string',
            'area' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $seat = Seat::create($request->all());
        return response()->json($seat, 201);
    }

    #[OA\Get(
        path: "/api/seats/{id}",
        summary: "Get seat details",
        tags: ["Seats"],
        parameters: [
            new OA\Parameter(name: "id", in: "path", description: "Seat ID", required: true)
        ],
        responses: [
            new OA\Response(response: 200, description: "Seat details"),
            new OA\Response(response: 404, description: "Not found")
        ]
    )]
    public function show($id)
    {
        $seat = Seat::find($id);
        if (!$seat) return response()->json(['error' => 'Not found'], 404);
        return response()->json($seat);
    }

    #[OA\Put(
        path: "/api/seats/{id}",
        summary: "Update seat",
        tags: ["Seats"],
        parameters: [
            new OA\Parameter(name: "id", in: "path", description: "Seat ID", required: true)
        ],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                properties: [
                    new OA\Property(property: "seat_no", type: "string"),
                    new OA\Property(property: "seat_name", type: "string"),
                    new OA\Property(property: "candidate_name", type: "string"),
                    new OA\Property(property: "area", type: "array", items: new OA\Items(type: "string"))
                ]
            )
        ),
        responses: [
            new OA\Response(response: 200, description: "Seat updated successfully")
        ]
    )]
    public function update(Request $request, $id)
    {
        $seat = Seat::find($id);
        if (!$seat) return response()->json(['error' => 'Not found'], 404);

        $validator = Validator::make($request->all(), [
            'seat_no' => 'string|unique:seats,seat_no,' . $id,
            'seat_name' => 'string',
            'candidate_name' => 'string',
            'area' => 'array',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $seat->update($request->all());
        return response()->json($seat);
    }

    #[OA\Delete(
        path: "/api/seats/{id}",
        summary: "Delete seat",
        tags: ["Seats"],
        parameters: [
            new OA\Parameter(name: "id", in: "path", description: "Seat ID", required: true)
        ],
        responses: [
            new OA\Response(response: 200, description: "Deleted successfully")
        ]
    )]
    public function destroy($id)
    {
        $seat = Seat::find($id);
        if (!$seat) return response()->json(['error' => 'Not found'], 404);
        $seat->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
