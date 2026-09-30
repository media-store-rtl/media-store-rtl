<?php

namespace App\Http\Controllers;

use App\Models\AccountingSubscriptionPlan;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class AccountingSubscriptionPlanAdminController extends Controller
{
    public function index(): Response
    {
        $plans = AccountingSubscriptionPlan::with('product')
            ->orderByDesc('id')
            ->get();

        return Inertia::render('Users/Admin/AccountingSubscription/Index', [
            'plans' => $plans,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:accounting_subscription_plans,slug'],
            'description' => ['nullable', 'string'],
            'price' => ['required', 'integer', 'min:0'],
            'duration_days' => ['required', 'integer', 'min:1'],
            'max_users' => ['required', 'integer', 'min:1'],
            'is_active' => ['required', 'boolean'],
        ]);

        DB::transaction(function () use ($data) {
            $slug = $data['slug'] ?: Str::slug($data['name']);

            $baseSlug = $slug;
            $counter = 2;
            while (Product::where('slug', $slug)->exists() || AccountingSubscriptionPlan::where('slug', $slug)->exists()) {
                $slug = $baseSlug . '-' . $counter++;
            }

            $product = Product::create([
                'user_id' => auth()->id(),
                'slug' => $slug,
                'tag' => 'accounting-subscription',
                'name' => $data['name'],
                'name_en' => 'Accounting Subscription - ' . $data['name'],
                'group' => null,
                'type' => null,
                'category' => null,
                'text' => $data['description'] ?: 'اشتراک سامانه حسابداری صنعتی',
                'demo_link' => 'https://mymedimo.ir',
                'price' => $data['price'],
                'version' => '1.0',
                'status' => $data['is_active'] ? 4 : 5,
            ]);

            AccountingSubscriptionPlan::create([
                'product_id' => $product->id,
                'name' => $data['name'],
                'slug' => $slug,
                'description' => $data['description'],
                'price' => $data['price'],
                'duration_days' => $data['duration_days'],
                'max_users' => $data['max_users'],
                'is_active' => $data['is_active'],
            ]);
        });

        return back()->with('success', 'پلن اشتراک حسابداری با موفقیت ساخته شد.');
    }
}
