<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    // Update existing users with a unique mobile based on their id if empty
    DB::table('users')->whereNull('mobile')->orWhere('mobile', '')->update([
      'mobile' => DB::raw("CONCAT('temp_', id)")
    ]);

    // Now make mobile unique and not nullable
    Schema::table('users', function (Blueprint $table) {
      $table->string('mobile')->nullable(false)->unique()->change();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::table('users', function (Blueprint $table) {
      $table->dropUnique(['mobile']);
      $table->string('mobile')->nullable()->change();
    });
  }
};
