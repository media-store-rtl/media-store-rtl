<?php

namespace App\Http\Controllers;

use App\Models\AccountingSubscriptionPlan;
use App\Models\Cart;
use App\Models\Company;
use App\Models\Menu;
use App\Models\Namad;
use App\Models\Route;
use App\Models\Social;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AccountingSubscriptionPlanController extends Controller
{
    public function show(
        Request $request,
        string $slug,
        Route $route,
        User $user,
        Namad $namad,
        Social $social
    ): Response {
        $plan = AccountingSubscriptionPlan::with(['image', 'user.image', 'user.profile'])
            ->where('slug', $slug)
            ->where('status', 4)
            ->firstOrFail();

        $oldCart = $request->session()->has('cart')
            ? $request->session()->get('cart')
            : null;

        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert')
            ? $request->session()->get('alert')
            : null;

        $currentRoute = $route->where('name', $request->path())->first();

        $menus = $currentRoute && $currentRoute->menus
            ? $currentRoute->menus
            : null;

        $menu = Menu::where('parent_id', null)
            ->where('status', 4)
            ->with('children', 'sections', 'routes')
            ->get();

        $companies = $user->with('image')->with('profile')->first();

        $users = Auth::check()
            ? $user->with('image')->with('profile')->with('roles')->find(auth()->user()->id)
            : null;

        $namads = $namad->with('menu')
            ->orderBy('created_at', 'desc')
            ->get();

        $socials = $social->where('status', 4)->get();

        return Inertia::render('Guest/accounting-plan-show', [
            'plan' => $plan,
            'menus' => $menus,
            'menu' => $menu,
            'path' => $request->path(),
            'alert' => $alert,
            'users' => $users,
            'companies' => $companies,
            'namads' => $namads,
            'socials' => $socials,
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
        ]);
    }

    public function index(
        Request $request,
        Route $route,
        User $user,
        Namad $namad,
        Social $social
    ): Response {
        $oldCart = $request->session()->has('cart')
            ? $request->session()->get('cart')
            : null;

        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert')
            ? $request->session()->get('alert')
            : null;

        $currentRoute = $route->where('name', $request->path())->first();

        $menus = $currentRoute && $currentRoute->menus
            ? $currentRoute->menus
            : null;

        $menu = Menu::where('parent_id', null)
            ->where('status', 4)
            ->with('children', 'sections', 'routes')
            ->get();

        $companies = $user->with('image')->with('profile')->first();

        $users = Auth::check()
            ? $user->with('image')->with('profile')->with('roles')->find(auth()->user()->id)
            : null;

        $namads = $namad->with('menu')
            ->orderBy('created_at', 'desc')
            ->get();

        $socials = $social->where('status', 4)->get();

        $plans = AccountingSubscriptionPlan::with('image')
            ->where('status', 4)
            ->orderBy('price')
            ->get();

        return Inertia::render('Guest/accounting-plan', [
            'plans' => $plans,
            'menus' => $menus,
            'menu' => $menu,
            'path' => $request->path(),
            'alert' => $alert,
            'users' => $users,
            'companies' => $companies,
            'namads' => $namads,
            'socials' => $socials,
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
        ]);
    }
}
