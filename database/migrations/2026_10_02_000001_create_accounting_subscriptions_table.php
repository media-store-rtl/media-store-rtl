<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('accounting_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('accounting_subscription_plan_id')
                ->constrained('accounting_subscription_plans')
                ->restrictOnDelete();
            $table->uuid('external_subscription_id')->unique();
            $table->string('status', 30)->default('active')->index();
            $table->timestamp('starts_at');
            $table->timestamp('expires_at')->index();
            $table->timestamps();

            $table->index(['user_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('accounting_subscriptions');
    }
};
