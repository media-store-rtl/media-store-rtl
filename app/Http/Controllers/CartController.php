<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Cart;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Route;
use App\Models\Coupon;
use App\Models\Tarahi;
use App\Models\Company;
use App\Models\Product;
use App\Models\Social;
use App\Models\Menu;
use App\Models\Namad;
use Illuminate\Http\Request;
use App\Http\Utilities\Wallet;
use Illuminate\Support\Facades\Auth;


class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,Coupon $coupon,User $user,Route $route,Social $social,Namad $namad)
    {
        
        if(Auth::check())
        {
            $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
            $time = Carbon::now();
            $cart = new Cart($oldCart);
            $asidemini = $request->query->has('asidemini') ? $request->query->get('asidemini') :null;
            $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
            $dark = $request->query->has('dark') ? $request->query->get('dark') :null;
            $codes = $coupon->all();
            $users = $user->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
            $notifications = $users->unreadnotifications;
            $random_coupon = $codes->where('user_id',0)->first();
            $companies = $user->with('image')->with('profile')->first();
            $descriptions = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->descriptions?
            $route->where('name',$request->path())->first()->descriptions->first():null;// $description->where('route',$request->path())->first();
            $token = $request->session()->token();
            $wallet = Wallet::all($users);
            $menus = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->menus ?
                $route->where('name',$request->path())->first()->menus:null;
            $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
            $socials = $social->where('status',4)->get();
            $namads = $namad->with('menu')->orderBy('created_at','desc')->get();
            // dd($cart);
            return Inertia::render('Guest/shop-cart',['path' => $request->path(),'random_coupon'=>$random_coupon,
            'alert'=> $alert,'codes'=> $codes,'users' => $users,'notifications'=> $notifications,'companies' => $companies,
            'wallet'=>$wallet,'descriptions'=>$descriptions,'dark'=>$dark,'asidemini'=> $asidemini,'token'=>$token,
            'menus'=>$menus,'cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
            'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
            'payment'=>$cart->payment,'balance'=>$cart->balance],'menu' => $menu,'time' => $time,'socials'=> $socials,
            'namads'=> $namads
            ]);
        }
        else
        {
            return redirect()->route('guest-cart.index');
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return abort(404);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,Product $product,Tarahi $tarahi,Company $company,User $user,Role $role)
    {

        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        // dd($request);

        if($request->type)
        {

            $product = $request;

            $cart->removeFormCart($product,$cart,$oldCart);
            // dd($cart,$oldCart, $request,$product->id);
            $request->session()->put('cart',$cart);

            $request->session()->flash(
                'alert' ,[
                    'title'=>'!',
                    'text'=> 'سبد خرید بروز زسانی شد.',
                    'icon'=> 'success',
                    'button' => 'ok']
            );
            return redirect()->back();


        }
        else
        {
            $users = auth()->user() ? $user->with('image')->with('profile')->with('roles')->with('identity')->find(auth()->user()->id):null;

            $product = $request->model == 'App\\Models\\ReqDesigner' ? 
            $request->model::with('image')->with('installments')->with('discount')->with('user')->with('tarahiRegister')->findOrfail($request->id) :
                $request->model::with('image')->with('installments')->with('discount')->with('user')->with('group')->with('type')->with('category')->findOrfail($request->id);
            // dd(count($cart->products) > 0 );
            if($product->status == 4 && $product->user->roles->max('id') > 2 )
            {
                if($users == null)
                {
                    $request->session()->flash(
                        'alert' ,[
                            'text'=> 'برای خرید باید وارد حساب کاربری خود شوید.',
                            'icon'=> 'error',
                            'button' => 'ok']
                    );
                }
                else if ($users && $users->identity && $users->identity->status == 4)
                {
                    if(count($cart->products) > 0)
                    {
                        foreach ($cart->products as $key => $value)
                        {
                            $a = [];
                            foreach ($cart->products as $key => $value)
                            {

                                if($value['model']  == $request->model && $value['product']->id == $request->id )
                                {
                                    array_push($a,$value['product']->id);

                                }

                            }

                            if(count($a) > 0)
                            {
                                $request->session()->flash(
                                    'alert' ,[
                                        'text'=> 'این محصول در سبد خرید وجود دارد.',
                                        'icon'=> 'error',
                                        'button' => 'ok']
                                );
                                return redirect()->back();
                            }
                            else
                            {

                                $cart->addToCart($product,$request->model,$request);
                                // dd($cart);
                                $request->session()->put('cart',$cart);

                                $request->session()->flash(
                                    'alert' ,[
                                        'text'=> 'به سبد خرید اضافه شد.',
                                        'icon'=> 'success',
                                        'button' => 'ok']
                                );
                                return redirect()->back();
                            }

                        }
                    }
                    else
                    {
                        $cart->addToCart($product,$request->model,$request);
                        // dd($cart);
                        $request->session()->put('cart',$cart);

                        $request->session()->flash(
                            'alert' ,[
                                'text'=> 'به سبد خرید اضافه شد.',
                                'icon'=> 'success',
                                'button' => 'ok']
                        );
                        return redirect()->back();
                    }


                } else {
                    $request->session()->flash(
                        'alert' ,[
                            'text'=> 'برای خرید این محصول نیاز به احراز هویت دارید.',
                            'icon'=> 'error',
                            'button' => 'ok']
                    );


                }

                return redirect()->back();
            }
            else if($product->status == 4 && $product->user->roles->max('id') < 3)
            {

                if(count($cart->products) > 0)
                {
                    $a = [];
                    foreach ($cart->products as $key => $value)
                    {

                        if($value['model']  == $request->model && $value['product']->id == $request->id )
                        {
                            array_push($a,$value['product']->id);

                        }

                    }

                    if(count($a) > 0)
                    {
                        $request->session()->flash(
                            'alert' ,[
                                'text'=> 'این محصول در سبد خرید وجود دارد.',
                                'icon'=> 'error',
                                'button' => 'ok']
                        );
                        return redirect()->back();
                    }
                    else
                    {

                        $cart->addToCart($product,$request->model,$request);
                        // dd($cart);
                        $request->session()->put('cart',$cart);

                        $request->session()->flash(
                            'alert' ,[
                                'text'=> 'به سبد خرید اضافه شد.',
                                'icon'=> 'success',
                                'button' => 'ok']
                        );
                        return redirect()->back();
                    }

                }
                else
                {
                    $cart->addToCart($product,$request->model,$request);
                    // dd($cart);
                    $request->session()->put('cart',$cart);

                    $request->session()->flash(
                        'alert' ,[
                            'text'=> 'به سبد خرید اضافه شد.',
                            'icon'=> 'success',
                            'button' => 'ok']
                    );
                    return redirect()->back();
                }


            }
            else
            {
                $request->session()->flash(
                    'alert' ,[
                        'text'=> 'به سبد خرید اضافه نشد.',
                        'icon'=> 'error',
                        'button' => 'ok']
                );


            }
            return redirect()->back();
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return abort(404);
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
    public function update(Request $request,Product $product,$id)
    {

        $product = $product->with('image')->find($id);

        if($request->type == 'Decrease')
        {
            $count=$request->count;

            if($count > 1){
                $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
                $cart = new Cart($oldCart);
                $count=$count-1;
                $cart->updateCart($product,$count,$cart);
                $request->session()->put('cart',$cart);
            }
            else
            {
                $request->session()->flash(
                    'message' , '.مقدار حداقلی یک می باشد'
                );
                return redirect()->back();
            }

            $request->session()->flash(
                'alert' ,[
                    'title'=>'سبدخرید!',
                    'text'=> 'باموفقیت تغیر یافت.',
                    'icon'=> 'success',
                    'button' => 'ok']
            );
            return redirect()->back();
        }
        else if($request->type == 'Increase')
        {
            $count=$request->count;

            if($count>0){
                $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
                $cart = new Cart($oldCart);
                $count=$count+1;
                $cart->updateCart($product,$count,$cart);
                $request->session()->put('cart',$cart);
            }
            $request->session()->flash(
                'alert' ,[
                    'title'=>'سبدخرید!',
                    'text'=> 'باموفقیت تغیر یافت.',
                    'icon'=> 'success',
                    'button' => 'ok']
            );

            return redirect()->back();
        }
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product, Tarahi $tarahi,Request $request,$id)
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);

        if($id == 'all')
        {
            $cart->removeFormAllCart($cart);
            // dd($cart);
            $request->session()->put('cart',$cart);

            $request->session()->flash(
                'alert' ,[
                    'title'=>'!',
                    'text'=> 'سبد خرید پاک شد.',
                    'icon'=> 'success',
                    'button' => 'ok']
            );

            return redirect()->back();
        }
        else
        {


            $request->session()->flash(
                'alert' ,[
                    'title'=>'!',
                    'text'=> 'سبد خرید پاک نشد.',
                    'icon'=> 'error',
                    'button' => 'ok']
            );
            return redirect()->back();
        }
    }

}
