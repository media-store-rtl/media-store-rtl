<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->foreignId('user_id')->nullable()->after('id');
        });

        DB::table('accounting_subscription_plans')
            ->whereNull('user_id')
            ->update(['user_id' => 1]);

        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->cascadeOnDelete();
        });

        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->foreignId('user_id')->nullable(false)->change();
        });
    }

    public function down(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');
        });
    }
};
