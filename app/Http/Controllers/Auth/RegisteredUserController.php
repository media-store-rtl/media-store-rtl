<?php

namespace App\Http\Controllers\Auth;

use App\Models\Cart;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;
use App\Models\Social;
use App\Models\Menu;
use App\Models\Namad;
use App\Models\Identity;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Utilities\ProfileCreate;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
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

        return Inertia::render('Auth/Register2',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
                'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
                'payment'=>$cart->payment,'balance'=>$cart->balance],'alert'=> $alert, 'companies'=>$companies,'menus' => $menus, 'menu' => $menu,
                'path' => $request->path(),'time' => $time,'socials'=> $socials,'namads'=> $namads
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request,User $user): RedirectResponse
    {
        $request->validate([
            'name_show' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'lasst_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'person' => 'required'
        ]);

        if($user->where('user_name',$request->name.'_'.$request->lasst_name)->first())
        {
            $request->session()->flash(
                'alert' ,[
                    'title'=>'ثبت نام!',
                    'text'=> 'انجام نشد، این کاربری وجود دارد لطفا نام دیگری وارد نمایید.',
                    'icon'=> 'error',
                    'button' => 'ok']
            );

            return redirect()->back();
        }
        else
        {
            $users = User::create([
                'user_name' => $request->name.'_'.$request->lasst_name,
                'name' => $request->name,
                'lasst_name' => $request->lasst_name,
                'name_show'=>$request->name_show,
                'national_code' => $request->national_code,
                'tel' => $request->tel,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'status' => 0,
                'person' => $request->person
            ]);

            if ($users)
            {
                $identitys = Identity::create([
                    'user_id'=>$users->id,
                ]);

                // $response = Http::asForm()->post(route('identity.store'), [
                //     'user_id'=>$users->id,
                // ]);

                    if ($users && $identitys) {

                        $profiles = ProfileCreate::create($users);
                        if ($profiles) {

                            event(new Registered($users));

                            Auth::login($users);

                            return to_route('dashboard.index');
                        }
                        else
                        {
                            $request->session()->flash(
                                'alert' ,[
                                    'title'=>'پروفایل!',
                                    'text'=> 'ثبت نشد، مجدد تلاش نمایید.',
                                    'icon'=> 'error',
                                    'button' => 'ok']
                            );

                            return redirect()->back();
                        }

                    }
                    else
                    {
                        $user->find($users->id)->delete();
                        $request->session()->flash(
                            'alert' ,[
                                'title'=>'ثبت نام!',
                                'text'=> 'انجام نشد، مجدد تلاش نمایید.',
                                'icon'=> 'error',
                                'button' => 'ok']
                        );

                        return redirect()->back();
                    }

            }
            else
            {
                $request->session()->flash(
                    'alert' ,[
                        'title'=>'ثبت نام!',
                        'text'=> 'انجام نشد، مجدد تلاش نمایید.',
                        'icon'=> 'error',
                        'button' => 'ok']
                );

                return redirect()->back();
            }
        }

        // return to_route('dashboard');
    }
}
