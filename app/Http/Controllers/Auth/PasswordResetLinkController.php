<?php

namespace App\Http\Controllers\Auth;

use Carbon\Carbon;
use App\Models\Cart;
use App\Models\User;
use App\Models\Social;
use App\Models\Menu;
use App\Models\Namad;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    /**
     * Show the password reset link request page.
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

        return Inertia::render('Auth/ForgotPassword', ['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
                'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
                'payment'=>$cart->payment,'balance'=>$cart->balance],'status' => $request->session()->get('status'),'alert' => $alert,
                'companies'=>$companies,'menus' => $menus, 'menu' => $menu,'path' => $request->path(),'time' => $time,'socials'=> $socials,
                'namads'=> $namads
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        Password::sendResetLink(
            $request->only('email')
        );

        return back()->with('status', __('A reset link will be sent if the account exists.'));
    }
}
