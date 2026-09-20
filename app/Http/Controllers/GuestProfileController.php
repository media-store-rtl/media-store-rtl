<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Tarahi;
use App\Models\Menu;
use App\Models\Product;
use App\Models\WebDesign;
use Carbon\Carbon;
use App\Models\Route;
use App\Models\Namad;
use App\Models\Social;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Pagination\LengthAwarePaginator;

class GuestProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return abort(404);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return abort(404);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return abort(404);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,User $user,Product $product,Tarahi $tarahi,Role $role,Social $social,Route $route,Namad $namad,WebDesign $webDesign,Blog $blog,$id)
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $time = Carbon::now();
        $alert = $request->session()->has('alert') ? $request->session()->get('alert') : null;
        $menus = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()?
            $route->where('name',$request->path())->first()->menus:null;
        $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
        $companies = $user->with('image')->with('profile')->first();
        $socials = $social->with(['link' => fn ($q) => $q->where(['user_id' => 1,'status' => 4]),'menu'])->where('status',4)->get();
        $users = auth() && auth()->user();
        $namads = $namad->with('menu')->orderBy('created_at','desc')->get();
        if(Auth::check())
        {
            return redirect()->route('profile.show',$id);
        }
        else
        {

            $user = $user->with(['links','siklls','orders','image','profile','socials'])->where('user_name',$id)->first();
            if (!$user) {
                abort(404);
            }
            $role = $user->roles->max();
            // $products =  $product->with('image')->where('user_id',$id)->where('status',4)->paginate(9);
            // $tarahis =  $tarahi->where('user_id',$id)->where('status',4)->paginate(9);
            $products = $product
                ->with(['discount', 'image', 'group', 'type', 'category','menus'])
                ->where('user_id', $user->id)
                ->where('status', 4)
                ->get();

            $tarahis = $tarahi
                ->with(['discount', 'image', 'group', 'type', 'category','menus'])
                ->where('user_id', $user->id)
                ->where('status', 4)
                ->get();
            $webDesigns = $webDesign
                ->with(['discount', 'image', 'group', 'type', 'category','menus'])
                ->where('user_id', $user->id)
                ->where('status', 4)
                ->get();
            $blogs = $blog
                ->with(['image', 'group', 'type','menus'])
                ->where('user_id', $user->id)
                ->where('status', 4)
                ->get();
            $merged = collect()
                ->merge($products)
                ->merge($tarahis)
                ->merge($webDesigns)
                ->merge($blogs);

            $page = (int) request()->query('page', 1);
            $perPage = (int) 9;

            $userResults = new LengthAwarePaginator(
                $merged->forPage($page, $perPage),
                $merged->count(),
                $perPage,
                $page,
                ['path' => request()->url(), 'query' => request()->query()]
            );
            // dd( $userResults);
            return Inertia::render('Guest/guest-Profile-show',['user'=> $user,'products'=> $products, 'alert' => $alert,'socials'=> $socials,
            'tarahis' => $tarahis,'orders_count'=> $user->orders->count(),'companies' => $companies,'time' => $time, 'menus' => $menus, 'menu' => $menu,
            'role'=> $role,'users' => $users,'cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
                'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
                'payment'=>$cart->payment,'balance'=>$cart->balance],'namads'=> $namads,'path' => $request->path(),'userResults' =>$userResults]);
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return abort(404);
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
        return abort(404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return abort(404);
    }
}
