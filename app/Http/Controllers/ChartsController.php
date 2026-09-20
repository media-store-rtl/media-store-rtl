<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use App\Models\Cart;
use App\Models\Menu;
use App\Models\Page;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Route;
use App\Models\Social;
use App\Models\Namad;
use Illuminate\Http\Request;

class ChartsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,Page $page,User $user,Route $route,Social $social,Namad $namad)
    {
       $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $time = Carbon::now();
        $cart = new Cart($oldCart);
        $menus = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()?
            $route->where('name',$request->path())->first()->menus:null;
        $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
        $pages = $page->where('route','charts-xauusd')->with('user')->first();
        $companies = $user->with('image')->with('profile')->first();
        $socials = $social->with(['link' => fn ($q) => $q->where(['user_id' => 1,'status' => 4]),'menu'])->where('status',4)->get();
        $namads = $namad->with('menu')->orderBy('created_at','desc')->get();

        return  $pages ? Inertia::render('Guest/charts',['companies' => $companies,'pages'=>$pages,
            'cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
            'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
            'payment'=>$cart->payment,'balance'=>$cart->balance],'socials'=> $socials,'menus' => $menus, 'menu' => $menu,
            'namads'=> $namads,'time' => $time
        ]) : abort(404);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    
    public function xauusd(Request $request)
    {
        dd($request);
    }
}
