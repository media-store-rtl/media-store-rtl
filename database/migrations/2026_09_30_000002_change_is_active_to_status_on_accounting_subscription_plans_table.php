<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->unsignedInteger('status')->default(5)->index()->after('max_users');
        });

        DB::table('accounting_subscription_plans')
            ->where('is_active', true)
            ->update(['status' => 4]);

        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->dropColumn('is_active');
        });
    }

    public function down(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->boolean('is_active')->default(false)->index();
        });

        DB::table('accounting_subscription_plans')
            ->where('status', 4)
            ->update(['is_active' => true]);

        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
