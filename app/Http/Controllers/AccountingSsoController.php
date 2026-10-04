<?php

namespace App\Http\Controllers;

use App\Models\AccountingSubscription;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class AccountingSsoController extends Controller
{
    public function start(Request $request): RedirectResponse
    {
        $accountingUrl = rtrim((string) config('services.accounting.url'), '/');
        $secret = (string) config('services.accounting.sso_secret');

        if ($accountingUrl === '' || $secret === '') {
            abort(503, 'Accounting SSO is not configured.');
        }

        $subscription = AccountingSubscription::query()
            ->with('plan')
            ->where('user_id', $request->user()->id)
            ->where('status', 'active')
            ->where('starts_at', '<=', now())
            ->where('expires_at', '>', now())
            ->latest('expires_at')
            ->first();

        if (! $subscription) {
            return redirect()->route('accounting.plan')
                ->with('alert', [
                    'title' => 'اشتراک حسابداری',
                    'text' => 'برای ورود به حسابداری، ابتدا یک اشتراک فعال تهیه کنید.',
                    'icon' => 'info',
                ]);
        }

        $token = Str::random(64);

        Cache::put(
            'accounting_sso:' . hash('sha256', $token),
            [
                'user_id' => (int) $request->user()->id,
                'name' => (string) $request->user()->name_show,
                'email' => (string) $request->user()->email,
                'subscription_id' => (string) $subscription->external_subscription_id,
                'plan_id' => (int) $subscription->accounting_subscription_plan_id,
                'max_users' => (int) $subscription->plan->max_users,
                'expires_at' => $subscription->expires_at->toIso8601String(),
            ],
            now()->addMinutes(2)
        );

        return redirect()->away(
            $accountingUrl . '/sso/callback?token=' . rawurlencode($token)
        );
    }

    public function exchange(Request $request)
    {
        $secret = (string) config('services.accounting.sso_secret');
        $providedSecret = (string) $request->header('X-Accounting-SSO-Secret');

        if ($secret === '' || $providedSecret === '' || ! hash_equals($secret, $providedSecret)) {
            abort(403);
        }

        $token = (string) $request->input('token');

        if ($token === '' || strlen($token) < 32) {
            return response()->json(['message' => 'Invalid SSO token.'], 422);
        }

        $payload = Cache::pull('accounting_sso:' . hash('sha256', $token));

        if (! $payload) {
            return response()->json(['message' => 'SSO token is invalid or expired.'], 401);
        }

        return response()->json($payload);
    }
}
