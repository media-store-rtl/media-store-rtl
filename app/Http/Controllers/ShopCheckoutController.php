<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Cart;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Route;
use App\Models\Coupon;
use App\Models\Company;
use App\Models\Social;
use App\Models\Menu;
use App\Models\Namad;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Auth;
use SweetAlert2\Laravel\Swal;

class ShopCheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,Coupon $coupon,User $user,Company $company,Route $route,Social $social,Namad $namad)
    {
        
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $time = Carbon::now();
        $cart = new Cart($oldCart);
        $asidemini = $request->query->has('asidemini') ? $request->query->get('asidemini') :null;
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $dark = $request->query->has('dark') ? $request->query->get('dark') :null;
        $codes = $coupon->all();
        $users = Auth::check()?$user->with('file')->with('profile')->with('roles')->find(auth()->user()->id):null;
        $notifications = Auth::check()? $users->unreadnotifications:null;
        $random_coupon = $codes->where('user_id',0)->first();
        $companies = $user->with('image')->with('profile')->first();
        $descriptions = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->descriptions?
            $route->where('name',$request->path())->first()->descriptions->first():null;
        $token = $request->session()->token();
        $menus = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->menus ?
                $route->where('name',$request->path())->first()->menus:null;
        $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
        $socials = $social->where('status',4)->get();
        $namads = $namad->with('menu')->orderBy('created_at','desc')->get();
        if($alert)
        {
            // Swal::fire([
            //     'title' => 'Laravel + SweetAlert2 = <3',
            //     'text' => 'This is a simple alert using SweetAlert2',
            //     'icon' => 'success',
            //     'confirmButtonText' => 'Cool'
            // ]);
            // dd($alert['title']);
            Swal::fire([
            'title'=> $alert['title'],
            'text' => $alert['text'],
            'icon'=> $alert['icon'],
            'button' => $alert['button'],
            ]);
        }
        
        
        return Inertia::render('Guest/shop-checkout',['random_coupon'=>$random_coupon,'alert'=> $alert,'codes'=> $codes,'users' => $users,
        'notifications'=> $notifications,'companies' => $companies,'descriptions'=>$descriptions,'dark'=>$dark,'asidemini'=> $asidemini,
        'path'=>$request->path(),'token'=>$token,'cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
        'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
        'payment'=>$cart->payment,'balance'=>$cart->balance],'menu' => $menu,'time' => $time,'socials'=> $socials,'menus'=>$menus,
        'namads'=> $namads
        
        ]);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
