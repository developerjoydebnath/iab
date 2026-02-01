<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Profile;
use App\Models\GeoDivision;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use OpenApi\Attributes as OA;

class AdminController extends Controller
{
  /**
   * Get Users List with Filters and Pagination
   */
  #[OA\Get(
    path: "/api/admin/users",
    summary: "Get list of users",
    tags: ["Admin"],
    security: [["bearerAuth" => []]],
    parameters: [
      new OA\Parameter(name: "role", in: "query", schema: new OA\Schema(type: "string", enum: ["all", "user", "volunteer"])),
      new OA\Parameter(name: "division_id", in: "query", schema: new OA\Schema(type: "integer")),
      new OA\Parameter(name: "district_id", in: "query", schema: new OA\Schema(type: "integer")),
      new OA\Parameter(name: "upazila_id", in: "query", schema: new OA\Schema(type: "integer")),
      new OA\Parameter(name: "union_id", in: "query", schema: new OA\Schema(type: "integer")),
      new OA\Parameter(name: "seat_id", in: "query", schema: new OA\Schema(type: "integer")),
      new OA\Parameter(name: "seat_id", in: "query", schema: new OA\Schema(type: "integer")),
      new OA\Parameter(name: "volunteer_id", in: "query", schema: new OA\Schema(type: "integer")),
      new OA\Parameter(name: "search", in: "query", schema: new OA\Schema(type: "string"))
    ],
    responses: [
      new OA\Response(response: 200, description: "Success")
    ]
  )]
  public function getUsers(Request $request)
  {
    // Optimized query: Select only specific User fields
    $query = User::select('id', 'name', 'mobile', 'email', 'created_at', 'role', 'referral_id')
      ->with([
        'profile' => function ($q) {
          $q->select('id', 'user_id', 'is_volunteer');
        },
        'referrer:id,name,mobile'
      ])
      ->withCount('referrals');

    // Filter by Tab (Role)
    // 'all': everyone who is not admin? Or just role=user including volunteers?
    // Let's assume 'all' means all registered supporters (role=user).
    // 'user': role=user AND is_volunteer=false
    // 'volunteer': role=user AND is_volunteer=true
    // Admin users are excluded usually from this list unless specified.

    $query->where('role', '!=', 'admin'); // Exclude admins by default

    if ($request->has('role_filter')) {
      $roleFilter = $request->input('role_filter');
      if ($roleFilter === 'volunteer') {
        $query->where('role', 'volunteer');
      } elseif ($roleFilter === 'user') {
        $query->where('role', 'user');
      }
    }

    // Volunteer Scoping
    $currentUser = Auth::user();
    if ($currentUser->role === 'volunteer') {
      $query->where('referral_id', $currentUser->id);
    }


    // Search Filter
    if ($request->filled('search')) {
      $search = $request->input('search');
      $query->where(function ($q) use ($search) {
        $q->where('name', 'LIKE', "%{$search}%")
          ->orWhere('mobile', 'LIKE', "%{$search}%")
          ->orWhere('email', 'LIKE', "%{$search}%");
      });
    }

    // Geo Filters (Applied on Profile)
    if ($request->filled('division_id')) {
      $query->whereHas('profile', function ($q) use ($request) {
        $q->where('division_id', $request->division_id);
      });
    }
    if ($request->filled('district_id')) {
      $query->whereHas('profile', function ($q) use ($request) {
        $q->where('district_id', $request->district_id);
      });
    }
    if ($request->filled('upazila_id')) {
      $query->whereHas('profile', function ($q) use ($request) {
        $q->where('upazila_id', $request->upazila_id);
      });
    }
    if ($request->filled('union_id')) {
      $query->whereHas('profile', function ($q) use ($request) {
        $q->where('union_id', $request->union_id);
      });
    }
    if ($request->filled('seat_id')) {
      $query->whereHas('profile', function ($q) use ($request) {
        $q->where('seat_id', $request->seat_id);
      });
    }

    // Volunteer Filter
    if ($request->filled('volunteer_id')) {
      $query->where('referral_id', $request->volunteer_id);
    }

    $users = $query->orderBy('created_at', 'desc')->paginate(10);
    return response()->json($users);
  }

  /**
   * Get Single User Details
   */
  #[OA\Get(
    path: "/api/admin/users/{id}",
    summary: "Get user details",
    tags: ["Admin"],
    security: [["bearerAuth" => []]],
    responses: [
      new OA\Response(response: 200, description: "Success")
    ]
  )]
  public function show($id)
  {
    $user = User::with([
      'profile.seat',
      'profile.division',
      'profile.district',
      'profile.upazila',
      'profile.union'
    ])->findOrFail($id);

    // Volunteer Scoping
    $currentUser = Auth::user();
    if ($currentUser->role === 'volunteer' && $user->referral_id !== $currentUser->id) {
      return response()->json(['error' => 'Unauthorized'], 403);
    }


    return response()->json($user);
  }

  /**
   * Update User Info
   */
  #[OA\Put(
    path: "/api/admin/users/{id}",
    summary: "Update user details",
    tags: ["Admin"],
    security: [["bearerAuth" => []]],
    responses: [
      new OA\Response(response: 200, description: "Updated")
    ]
  )]
  public function update(Request $request, $id)
  {
    $user = User::findOrFail($id);

    // Volunteer Scoping
    $currentUser = Auth::user();
    if ($currentUser->role === 'volunteer' && $user->referral_id !== $currentUser->id) {
      return response()->json(['error' => 'Unauthorized'], 403);
    }


    $validated = $request->validate([
      'name' => 'required|string',
      // 'mobile' => 'required|string|unique:users,mobile,'.$id, // Mobile update might be tricky if unique constraint
      // Profile fields
      'seat_id' => 'required',
      'division_id' => 'required',
      'district_id' => 'required',
      'upazila_id' => 'required',
      'union_id' => 'required',
      'is_volunteer' => 'boolean', // or string 'true'/'false'
      'message' => 'nullable|string'
    ]);

    $user->update([
      'name' => $validated['name'],
      // 'mobile' => $validated['mobile'] 
    ]);

    $profileData = [
      'seat_id' => $validated['seat_id'],
      'division_id' => $validated['division_id'],
      'district_id' => $validated['district_id'],
      'upazila_id' => $validated['upazila_id'],
      'union_id' => $validated['union_id'],
      'is_volunteer' => filter_var($request->input('is_volunteer'), FILTER_VALIDATE_BOOLEAN),
    ];

    if ($request->has('message')) {
      $profileData['message'] = $request->input('message');
    }

    $user->profile()->update($profileData);

    return response()->json(['message' => 'User updated successfully']);
  }

  /**
   * Delete User
   */
  #[OA\Delete(
    path: "/api/admin/users/{id}",
    summary: "Delete user",
    tags: ["Admin"],
    security: [["bearerAuth" => []]],
    responses: [
      new OA\Response(response: 200, description: "Deleted")
    ]
  )]
  public function destroy($id)
  {
    $user = User::findOrFail($id);

    // Volunteer Scoping
    $currentUser = Auth::user();
    if ($currentUser->role === 'volunteer' && $user->referral_id !== $currentUser->id) {
      return response()->json(['error' => 'Unauthorized'], 403);
    }

    $user->delete(); // This will cascade delete profile if defined in DB or model event
    return response()->json(['message' => 'User deleted successfully']);
  }

  /**
   * Dashboard Stats
   */
  #[OA\Get(
    path: "/api/admin/stats",
    summary: "Dashboard Stats",
    tags: ["Admin"],
    security: [["bearerAuth" => []]],
    responses: [
      new OA\Response(response: 200, description: "Success")
    ]
  )]
  public function stats()
  {
    if (Auth::user()->role === 'volunteer') {
      return $this->getVolunteerStats(Auth::id());
    }

    $totalUsers = User::where('role', 'user')->count();
    $todayUsers = User::where('role', 'user')->whereDate('created_at', now()->today())->count();
    $weekUsers = User::where('role', 'user')->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count();
    $weekUsers = User::where('role', 'user')->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->count();
    $monthUsers = User::where('role', 'user')->whereMonth('created_at', now()->month)->whereYear('created_at', now()->year)->count();
    $totalVolunteers = User::where('role', 'volunteer')->count();
    $todayVolunteers = User::where('role', 'volunteer')->whereDate('created_at', now()->today())->count();

    $divisionStats = DB::table('users')
      ->join('profiles', 'users.id', '=', 'profiles.user_id')
      ->join('geo_divisions', 'profiles.division_id', '=', 'geo_divisions.id')
      ->select('geo_divisions.bn_name as division_name', DB::raw('count(users.id) as count'))
      ->where('users.role', 'user')
      ->groupBy('geo_divisions.bn_name')
      ->get();

    return response()->json([
      'total_users' => $totalUsers,
      'today_users' => $todayUsers,
      'this_week_users' => $weekUsers,
      'this_month_users' => $monthUsers,
      'total_volunteers' => $totalVolunteers,
      'today_volunteers' => $todayVolunteers,
      'division_stats' => $divisionStats
    ]);
  }

  /**
   * Volunteer Dashboard Stats
   */
  private function getVolunteerStats($volunteerId)
  {
    $totalRefs = User::where('referral_id', $volunteerId)->count();
    $todayRefs = User::where('referral_id', $volunteerId)->whereDate('created_at', now()->today())->count();

    // Maybe verify if they are users or volunteers? Assuming volunteers register users.
    // If they register other volunteers, we count them too? For now just count all referrals.

    return response()->json([
      'total_users' => $totalRefs,
      'today_users' => $todayRefs,
      'this_week_users' => 0, // Placeholder or implement
      'this_month_users' => 0, // Placeholder
      'total_volunteers' => 0,
      'today_volunteers' => 0,
      'division_stats' => [] // Volunteers probably don't need global division stats, or we can show stats of THEIR users by division
    ]);
  }


  /**
   * Get the count of volunteers.
   */
  public function volunteerCount()
  {
    $count = User::where('role', 'volunteer')->count();
    return response()->json(['volunteer_count' => $count]);
  }

  /**
   * Get Simple List of Volunteers for Dropdown
   */
  #[OA\Get(
    path: "/api/admin/volunteers-list",
    summary: "Get list of volunteers (id, name, mobile)",
    tags: ["Admin"],
    security: [["bearerAuth" => []]],
    responses: [
      new OA\Response(response: 200, description: "Success")
    ]
  )]
  public function getVolunteersList()
  {
    $volunteers = User::where('role', 'volunteer')
      ->select('id', 'name', 'mobile')
      ->orderBy('name')
      ->get();

    return response()->json($volunteers);
  }
}
