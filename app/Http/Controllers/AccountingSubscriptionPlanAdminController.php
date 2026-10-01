<?php

namespace App\Http\Controllers;

use App\Models\AccountingSubscriptionPlan;
use App\Models\Cart;
use App\Models\User;
use App\Models\Route;
use App\Models\Company;
use App\Models\Page;
use App\Models\Menu;
use App\Models\Image;
use App\Http\Utilities\Wallet;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AccountingSubscriptionPlanAdminController extends Controller
{
    public function index(Request $request, User $user, AccountingSubscriptionPlan $plan, Company $company, Route $route, Page $page)
    {
        Gate::authorize('create', $plan);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert') : null;
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])
            ->with('file')->with('profile')->with('roles')
            ->find(auth()->user()->id);
        $plans = $plan->with('group')->with('type')->with('category')->with('image')
            ->orderBy('created_at', 'desc')->paginate(9);
        $companies = $user->with('image')->first();
        $currentRoute = $route->where('name', $request->path())->first();
        $descriptions = $currentRoute && $currentRoute->descriptions
            ? $currentRoute->descriptions->first()
            : null;
        $wallet = Wallet::all($users);

        return $plans ? Inertia::render('Users/Admin/AccountingSubscription/Index', [
            'cart' => [
                'products' => $cart->products,
                'count' => $cart->count,
                'price' => $cart->price,
                'discount' => $cart->discount,
                'coupon' => $cart->coupon,
                'total' => $cart->total,
                'tax' => $cart->tax,
                'col' => $cart->col,
                'payment' => $cart->payment,
                'balance' => $cart->balance
            ],
            'plans' => $plans,
            'alert' => $alert,
            'users' => $users,
            'companies' => $companies,
            'descriptions' => $descriptions,
            'wallet' => $wallet
        ]) : abort(404);
    }

    public function create(Request $request, User $user, AccountingSubscriptionPlan $plan, Company $company, Route $route, Page $page)
    {
        Gate::authorize('create', $plan);

        return $this->formData($request, $user, $route, 'Users/Admin/AccountingSubscription/Create', [
            'path' => $request->path(),
        ]);
    }

    public function edit(Request $request, AccountingSubscriptionPlan $plan, User $user, Route $route)
    {
        Gate::authorize('update', $plan);

        $data = $this->formData($request, $user, $route, 'Users/Admin/AccountingSubscription/Edit', [
            'plan' => $plan->load('image', 'group', 'type', 'category'),
            'path' => $request->path(),
        ]);

        return $data;
    }

    private function formData(Request $request, User $user, Route $route, string $view, array $extra = []): Response
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert') : null;
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])
            ->with('file')->with('profile')
            ->with('roles')
            ->find(auth()->user()->id);
        $companies = $user->with('image')->first();
        $currentRoute = $route->where('name', $request->path())->first();
        $descriptions = $currentRoute && $currentRoute->descriptions
            ? $currentRoute->descriptions->first()
            : null;
        $menus = $currentRoute && $currentRoute->menus
            ? $currentRoute->menus
            : collect();
        $wallet = Wallet::all($users);

        return Inertia::render($view, array_merge([
            'cart' => [
                'products' => $cart->products,
                'count' => $cart->count,
                'price' => $cart->price,
                'discount' => $cart->discount,
                'coupon' => $cart->coupon,
                'total' => $cart->total,
                'tax' => $cart->tax,
                'col' => $cart->col,
                'payment' => $cart->payment,
                'balance' => $cart->balance,
            ],
            'alert' => $alert,
            'users' => $users,
            'companies' => $companies,
            'descriptions' => $descriptions,
            'menus' => $menus,
            'wallet' => $wallet,
        ], $extra));
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'name_en' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:accounting_subscription_plans,slug'],
            'tag' => ['required', 'string', 'min:120', 'max:160'],
            'description' => ['required', 'string'],
            'price' => ['required', 'integer', 'min:0'],
            'duration_days' => ['required', 'integer', 'min:1'],
            'max_users' => ['required', 'integer', 'min:1'],
            'status' => ['required', 'integer', 'in:4,5'],
            'group' => ['required', 'array'],
            'group.id' => ['required', 'integer', 'exists:menus,id'],
            'type' => ['required', 'array'],
            'type.id' => ['required', 'integer', 'exists:menus,id'],
            'category' => ['nullable', 'array'],
            'category.id' => ['nullable', 'integer', 'exists:menus,id'],
            'image' => ['required', 'image', 'max:5120'],
        ]);

        $slug = $data['slug'] ?: Str::slug($data['name']);
        $baseSlug = $slug;
        $counter = 2;
        while (AccountingSubscriptionPlan::where('slug', $slug)->exists()) {
            $slug = $baseSlug . '-' . $counter++;
        }

        $plan = AccountingSubscriptionPlan::create([
            'name' => $data['name'],
            'name_en' => $data['name_en'],
            'slug' => $slug,
            'tag' => $data['tag'],
            'description' => $data['description'] ?? null,
            'price' => $data['price'],
            'duration_days' => $data['duration_days'],
            'max_users' => $data['max_users'],
            'status' => $data['status'],
            'group' => $data['group']['id'],
            'type' => $data['type']['id'],
            'category' => $data['category']['id'] ?? null,
        ]);

        $menuIds = array_filter([$data['group']['id'], $data['type']['id'], $data['category']['id'] ?? null]);
        $plan->menus()->sync(Menu::whereIn('id', $menuIds)->get());

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images');
            Image::create([
                'user_id' => auth()->user()->id,
                'url' => $imagePath,
                'imageable_type' => AccountingSubscriptionPlan::class,
                'imageable_id' => $plan->id,
                'status' => 4,
            ]);
        }

        return back()->with('success', 'پلن اشتراک حسابداری با موفقیت ساخته شد.');
    }

    public function update(Request $request, AccountingSubscriptionPlan $plan): RedirectResponse
    {
        Gate::authorize('update', $plan);

        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'name_en' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:accounting_subscription_plans,slug,' . $plan->id],
            'tag' => ['required', 'string', 'min:120', 'max:160'],
            'description' => ['required', 'string'],
            'price' => ['required', 'integer', 'min:0'],
            'duration_days' => ['required', 'integer', 'min:1'],
            'max_users' => ['required', 'integer', 'min:1'],
            'status' => ['required', 'integer', 'in:4,5'],
            'group' => ['required', 'array'],
            'group.id' => ['required', 'integer', 'exists:menus,id'],
            'type' => ['required', 'array'],
            'type.id' => ['required', 'integer', 'exists:menus,id'],
            'category' => ['nullable', 'array'],
            'category.id' => ['nullable', 'integer', 'exists:menus,id'],
            'image' => ['nullable', 'image', 'max:5120'],
        ]);

        $plan->update([
            'name' => $data['name'],
            'name_en' => $data['name_en'],
            'slug' => $data['slug'],
            'tag' => $data['tag'],
            'description' => $data['description'],
            'price' => $data['price'],
            'duration_days' => $data['duration_days'],
            'max_users' => $data['max_users'],
            'status' => $data['status'],
            'group' => $data['group']['id'],
            'type' => $data['type']['id'],
            'category' => $data['category']['id'] ?? null,
        ]);

        $menuIds = array_filter([$data['group']['id'], $data['type']['id'], $data['category']['id'] ?? null]);
        $plan->menus()->sync(Menu::whereIn('id', $menuIds)->get());

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images');
            $image = $plan->image;
            if ($image) {
                $image->update([
                    'user_id' => auth()->user()->id,
                    'url' => $imagePath,
                    'status' => 4,
                ]);
            } else {
                Image::create([
                    'user_id' => auth()->user()->id,
                    'url' => $imagePath,
                    'imageable_type' => AccountingSubscriptionPlan::class,
                    'imageable_id' => $plan->id,
                    'status' => 4,
                ]);
            }
        }

        return redirect()->route('accountingSubscriptionAdmin.index')->with('success', 'پلن اشتراک حسابداری با موفقیت ویرایش شد.');
    }
}
