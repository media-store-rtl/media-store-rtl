<?php

namespace App\Http\Controllers;

use App\Models\AccountingSubscriptionPlan;
use App\Models\Cart;
use App\Models\User;
use App\Models\Route;
use App\Models\Company;
use App\Models\Page;
use App\Http\Utilities\Wallet;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class AccountingSubscriptionPlanAdminController extends Controller
{
    public function index(Request $request,User $user,AccountingSubscriptionPlan $plan,Company $company,Route $route,Page $page)
    {
        Gate::authorize('create', $plan);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
        $plans = $plan->orderBy('created_at','desc')->paginate(9);
        $companies = $user->with('image')->first();
        $descriptions = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->descriptions?
            $route->where('name',$request->path())->first()->descriptions->first():null;
        $wallet = Wallet::all($users);

        return $plans ? Inertia::render('Users/Admin/AccountingSubscription/Index',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
            'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'plans'=>$plans,'alert' => $alert,'users'=>$users,
            'companies' => $companies,'descriptions'=>$descriptions,'wallet'=>$wallet]) : abort(404);
    }

    public function create(Request $request, User $user, AccountingSubscriptionPlan $plan, Company $company, Route $route, Page $page)
    {
        Gate::authorize('create', $plan);

        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert') : null;
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])
            ->with('file')
            ->with('profile')
            ->with('roles')
            ->find(auth()->user()->id);
        $companies = $user->with('image')->first();
        $descriptions = $route->where('name', $request->path())->first() && $route->where('name', $request->path())->first()->descriptions
            ? $route->where('name', $request->path())->first()->descriptions->first()
            : null;
        $wallet = Wallet::all($users);

        return Inertia::render('Users/Admin/AccountingSubscription/Create', [
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
            'wallet' => $wallet,
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
            'status' => ['required', 'integer', 'in:4,5'],
        ]);

        $slug = $data['slug'] ?: \Illuminate\Support\Str::slug($data['name']);

        $baseSlug = $slug;
        $counter = 2;
        while (AccountingSubscriptionPlan::where('slug', $slug)->exists()) {
            $slug = $baseSlug . '-' . $counter++;
        }

        AccountingSubscriptionPlan::create([
            'name' => $data['name'],
            'slug' => $slug,
            'description' => $data['description'],
            'price' => $data['price'],
            'duration_days' => $data['duration_days'],
            'max_users' => $data['max_users'],
            'status' => $data['status'],
        ]);

        return back()->with('success', 'پلن اشتراک حسابداری با موفقیت ساخته شد.');
    }
}
