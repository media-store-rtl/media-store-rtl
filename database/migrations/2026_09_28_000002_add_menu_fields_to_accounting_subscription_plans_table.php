<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->unsignedBigInteger('group')->nullable()->index()->after('status');
            $table->unsignedBigInteger('type')->nullable()->index()->after('group');
            $table->unsignedBigInteger('category')->nullable()->index()->after('type');
        });
    }

    public function down(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->dropColumn(['group', 'type', 'category']);
        });
    }
};
