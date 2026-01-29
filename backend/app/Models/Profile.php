<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $guarded = [];

    protected $casts = [
        'is_volunteer' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function seat()
    {
        return $this->belongsTo(Seat::class, 'seat_id');
    }

    public function division()
    {
        return $this->belongsTo(GeoDivision::class, 'division_id');
    }

    public function district()
    {
        return $this->belongsTo(GeoDistrict::class, 'district_id');
    }

    public function upazila()
    {
        return $this->belongsTo(GeoUpazila::class, 'upazila_id');
    }

    public function union()
    {
        return $this->belongsTo(GeoUnionPouroshova::class, 'union_id');
    }
}
