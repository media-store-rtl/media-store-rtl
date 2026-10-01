<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->string('name_en')->after('name');
            $table->string('tag', 160)->after('slug');
        });
    }

    public function down(): void
    {
        Schema::table('accounting_subscription_plans', function (Blueprint $table) {
            $table->dropColumn(['name_en', 'tag']);
        });
    }
};
