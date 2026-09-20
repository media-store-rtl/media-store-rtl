<?php

namespace App\Http\Controllers\Auth;

use Carbon\Carbon;
use App\Models\Cart;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Company;
use App\Models\Social;
use App\Models\Menu;
use App\Models\Namad;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(Request $request,User $user,\App\Models\Route $route,Social $social,Namad $namad): Response
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $time = Carbon::now();
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $menus = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()?
            $route->where('name',$request->path())->first()->menus:null;
        $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
        $socials = $social->with(['link' => fn ($q) => $q->where(['user_id' => 1,'status' => 4]),'menu'])->where('status',4)->get();
        $companies = $user->with('image')->with('profile')->first();
        $namads = $namad->with('menu')->orderBy('created_at','desc')->get();
        // dd($namads);
        return Inertia::render('Auth/Login2', ['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
                'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
                'payment'=>$cart->payment,'balance'=>$cart->balance],'canResetPassword' => Route::has('password.request'),
                'status' => session('status'),'alert' => $alert,'companies'=>$companies,'menus' => $menus, 'menu' => $menu,
                'path' => $request->path(),'time' => $time,'socials'=> $socials,'namads'=> $namads,
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request,User $user): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();
        $user->find(auth()->user()->id)->update(['status'=> 4]);

        $request->session()->regenerate();
        
        return redirect()->back();//->intended(route('dashboard.index', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request,User $user): RedirectResponse
    {
        $user->where('id', auth()->id())->update(['status' => 2]);

        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        $request->session()->flash('alert', [
            'title'  => 'خروج!',
            'text'   => 'با موفقیت انجام شد.',
            'icon'   => 'success',
            'button' => 'ok',
        ]);
        return redirect('/');
    }
}
