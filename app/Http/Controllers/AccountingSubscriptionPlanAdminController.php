<?php

namespace App\Http\Controllers;

use App\Models\AccountingSubscriptionPlan;
use App\Models\Product;
use App\Models\Cart;
use App\Models\User;
use App\Models\Route;
use App\Models\Company;
use App\Models\Page;
use App\Http\Utilities\Wallet;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class AccountingSubscriptionPlanAdminController extends Controller
{
    public function index(Request $request,User $user,AccountingSubscriptionPlan $plan,Company $company,Route $route,Page $page)
    {
        Gate::authorize('create', $plan);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
        $plans = $plan->with('product')->orderBy('created_at','desc')->paginate(9);
        $companies = $user->with('image')->first();
        $descriptions = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->descriptions?
            $route->where('name',$request->path())->first()->descriptions->first():null;
        $wallet = Wallet::all($users);

        return $plans ? Inertia::render('Users/Admin/AccountingSubscription/Index',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
            'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'plans'=>$plans,'alert' => $alert,'users'=>$users,
            'companies' => $companies,'descriptions'=>$descriptions,'wallet'=>$wallet]) : abort(404);
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
