<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->foreignId('user_id')->nullable()->after('id')->constrained('users')->nullOnDelete();
        });

        DB::statement("
            UPDATE accounting_subscription_plans AS plans
            INNER JOIN images
                ON images.imageable_type = 'App\\Models\\AccountingSubscriptionPlan'
                AND images.imageable_id = plans.id
                AND images.status = 4
            SET plans.user_id = images.user_id
            WHERE plans.user_id IS NULL
        ");
    }

    public function down(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');
        });
    }
};
