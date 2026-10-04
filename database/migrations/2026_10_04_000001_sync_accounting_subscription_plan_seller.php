<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasColumn('accounting_subscription_plans', 'user_id')) {
            Schema::table('accounting_subscription_plans', function (Blueprint $table) {
                $table->foreignId('user_id')
                    ->nullable()
                    ->after('id')
                    ->constrained('users')
                    ->cascadeOnDelete();
            });
        }

        DB::statement("
            UPDATE accounting_subscription_plans AS plans
            INNER JOIN images
                ON images.imageable_type = 'App\\Models\\AccountingSubscriptionPlan'
                AND images.imageable_id = plans.id
                AND images.status = 4
                AND images.user_id IS NOT NULL
            SET plans.user_id = images.user_id
            WHERE plans.user_id IS NULL
        ");
    }

    public function down(): void
    {
        // The seller column is part of the base accounting plan schema.
        // Keep it intact when rolling back this data-sync migration.
    }
};
