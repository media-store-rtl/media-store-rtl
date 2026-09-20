<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Namad;
use App\Models\Social;
use App\Models\Route;
use Carbon\Carbon;
use App\Models\Cart;
use App\Models\Menu;
use App\Models\User;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,User $user,Social $social,Route $route,Namad $namad)
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $time = Carbon::now();
        $menus = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()?
            $route->where('name',$request->path())->first()->menus:null;
        $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
        $companies = $user->with('image')->with('profile')->first();
        $socials = $social->with(['link' => fn ($q) => $q->where(['user_id' => 1,'status' => 4]),'menu'])->where('status',4)->get();
        $namads = $namad->with('menu')->orderBy('created_at','desc')->get();
        // dd($request,$socials);
        return Inertia::render('Guest/about',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
                'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
                'payment'=>$cart->payment,'balance'=>$cart->balance],'time' => $time, 'menus' => $menus, 'menu' => $menu,'companies'=>$companies,
                'socials'=> $socials,'path' => $request->path(),'namads'=> $namads]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return abort(404);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return abort(404);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return abort(404);
    }
}
