<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountingSubscriptionPlan extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'duration_days',
        'max_users',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'integer',
            'duration_days' => 'integer',
            'max_users' => 'integer',
            'status' => 'integer',
        ];
    }
}
