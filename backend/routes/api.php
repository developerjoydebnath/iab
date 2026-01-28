<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GeoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SeatController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public Geo Routes
Route::get('/divisions', [GeoController::class, 'getDivisions']);
Route::get('/districts', [GeoController::class, 'getDistricts']);
Route::get('/upazilas', [GeoController::class, 'getUpazilas']);
Route::get('/unions', [GeoController::class, 'getUnions']);

// Auth Routes
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
  Route::post('login', [AuthController::class, 'login']);
  Route::post('register', [AuthController::class, 'register']);
  Route::post('logout', [AuthController::class, 'logout']);
  Route::post('refresh', [AuthController::class, 'refresh']);
  Route::post('me', [AuthController::class, 'me']);
  Route::post('update-profile', [AuthController::class, 'updateProfile']);

  // Password Reset
  Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
  Route::post('reset-password', [AuthController::class, 'resetPassword']);
});

// CRUD for Seats
Route::apiResource('seats', SeatController::class);

// CRUD for Profiles
Route::apiResource('profiles', ProfileController::class);
