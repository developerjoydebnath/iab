<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('geo_union_pouroshovas', function (Blueprint $table) {
            $table->id();
            $table->integer('pid');
            $table->text('area_type')->nullable();
            $table->text('bn_name');
            $table->text('en_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('geo_union_pouroshovas');
    }
};
