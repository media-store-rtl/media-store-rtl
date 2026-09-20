<?php

namespace App\Http\Controllers\Auth;

use Carbon\Carbon;
use App\Models\Cart;
use App\Models\User;
use App\Models\Social;
use App\Models\Menu;
use App\Models\Namad;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class NewPasswordController extends Controller
{
    /**
     * Show the password reset page.
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

        return Inertia::render('Auth/ResetPassword', ['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
                'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
                'payment'=>$cart->payment,'balance'=>$cart->balance],'email' => $request->email,'token' => $request->route('token'),
                'alert' => $alert,'companies'=>$companies,'menus' => $menus, 'menu' => $menu,'path' => $request->path(),'time' => $time,
                'socials'=> $socials,'namads'=> $namads
        ]);
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // dd($request->only('email', 'password', 'password_confirmation', 'token'));
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // Here we will attempt to reset the user's password. If it is successful we
        // will update the password on an actual user model and persist it to the
        // database. Otherwise we will parse the error and return the response.
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        // If the password was successfully reset, we will redirect the user back to
        // the application's home authenticated view. If there is an error we can
        // redirect them back to where they came from with their error message.
        if ($status == Password::PasswordReset) {
            return to_route('login')->with('status', __($status));
        }

        throw ValidationException::withMessages([
            'email' => [__($status)],
        ]);
    }

    public function edit(Request $request)
    {
        
        $request->validate([
            'token' => 'required',
            'user_name' => 'required|string',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        
        $status = User::find(auth()->user()->id)->update([
            'password' => Hash::make($request->password),
        ]);

        if ($status) {
            $request->session()->flash(
                'alert' ,[
                    'title'=>'رمز عبور!',
                    'text'=> 'باموفقیت تغییر یافت.',
                    'icon'=> 'success',
                    'button' => 'ok']
                );
            return redirect()->back();
        }
        else
        {
            $request->session()->flash(
                'alert' ,[
                    'title'=>'رمز عبور!',
                    'text'=> 'تغییر نیافت، مجدد تلاش نمایید.',
                    'icon'=> 'error',
                    'button' => 'ok']
                );
            return redirect()->back();
        }

    }
}
