<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AccountingSubscription extends Model
{
    protected $fillable = [
        'user_id',
        'accounting_subscription_plan_id',
        'external_subscription_id',
        'status',
        'starts_at',
        'expires_at',
    ];

    protected function casts(): array
    {
        return [
            'user_id' => 'integer',
            'accounting_subscription_plan_id' => 'integer',
            'starts_at' => 'datetime',
            'expires_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function plan(): BelongsTo
    {
        return $this->belongsTo(
            AccountingSubscriptionPlan::class,
            'accounting_subscription_plan_id'
        );
    }
}
