<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Cart;
use App\Models\File;
use App\Models\Menu;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Route;
use App\Models\Tarahi;
use App\Jobs\TarahiJob;
use App\Models\Company;
use App\Models\Profile;
use App\Models\Session;
use App\Models\Social;
use App\Http\Utilities\TarahiCreate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use App\Notifications\UserRegisterNotification;
use App\Models\Namad;
use App\Models\Rate;
use App\Models\Order;
use App\Models\Support;
use App\Jobs\DepositJob;
use App\Jobs\PaymentJob;
use App\Models\ReqDesigner;
use App\Jobs\TarahiAdminJob;
use App\Http\Utilities\Wallet;
use App\Jobs\TarahiDesignerJob;
use App\Http\Utilities\FileCreate;
use App\Http\Utilities\RateCreate;
use Illuminate\Support\Facades\Gate;
use App\Http\Utilities\DepositCreate;
use App\Http\Utilities\PaymentCreate;
use Illuminate\Support\Facades\Storage;
class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,Route $route,Tarahi $tarahi,Namad $namad,User $user,Role $role,Social $social)
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        $results = null;
        $search =  $request->query->get('q');
        $type = $request->get('type');
        $category = $request->get('category');
        $sort = $request->get('sort');
        $updated = $request->get('updated');
        $time = new Carbon;
        $sessions = Session::updateCurrent();
        $flash = $request->session()->get('message');
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $menus = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->menus?
            $route->where('name',$request->path())->first()->menus:null;
        $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
        $companies = $user->with('image')->with('profile')->first();
        $orders = $role->where('id',2)->with('users')->first()? $role->where('id',2)->with('users')->first():null;
        $webDesigns = $tarahi->with('image')->where(['status' => 4 , ])->orderBy('created_at','asc')->paginate(9)->WithQueryString();
        $namads = $namad->with('menu')->orderBy('created_at','desc')->get();
        $socials = $social->with(['link' => fn ($q) => $q->where(['user_id' => 1,'status' => 4]),'menu'])->where('status',4)->get();
        // dd($search,$request,$menus);
        if($companies)
        {

            if ($orders)
            {
                $usersRating = [];
                foreach ($orders->users as $key => $value) {
                    array_push($usersRating,["user" => $value->id , "rate" => $value->averageRating ? round($value->averageRating):null  ,
                    "count" => $value->timesRated() > 0 ? $value->timesRated():null]) ;
                }
            }
            else
            {
                $usersRating=null;
            }

            // dd($search,$type,$category,$sort,$updated);
            if(Auth::check())
            {
                $users = $user->with('image')->with('profile')->with('roles')->find(auth()->user()->id);
            }
            else
            {
                $users=null;
            }
            // dd($search,$search == null && $type == null && $category == null && $sort == null && $updated == null);
            // if($search == '' && $type == '' && $sort == ''&& $updated == '' && $category == ''){$request->validate([
            //     'search' => 'required',
            //     ]);
            // }
            if($search == 'all' || $search == null && $type == null && $category == null && $sort == null && $updated == null)
            {
                $results = $tarahi->with('discount')->with('image')->with('group')->with('type')->with('category')->with('menus')
                 ->with('user')->withCount('comments')->where([['status',4],['company_id',null]])->OrWhere('status',6)->OrWhere('status',3)->paginate(9)->WithQueryString();

                 $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });
                // dd($results);
                return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,'users'=> $users,
                'path'=>$request->path(),'orders'=>$orders,'time'=>$time,'usersRating' => $usersRating,'menu' => $menu,'namads'=> $namads,'socials'=> $socials,
                'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString(),
                'cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
                'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
                'payment'=>$cart->payment,'balance'=>$cart->balance]]);
            }
            else if($type)
            {
                // $results = $tarahi->with('discount')->with('user')->with('menus')->orderBy('type','asc')->withCount('offers')->withCount('comments')
                // ->where('type',$type)->where([['status',4],['company_id',null]])->OrWhere('status',6)->OrWhere('status',3)->paginate(9)->WithQueryString();

                // $results->getCollection()->transform(function ($item) {
                //     $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                //     $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                //     return $item;
                // });
                $results = $tarahi
                    ->with(['discount', 'user', 'menus'])
                    ->withCount(['offers', 'comments'])
                    ->where('type', $type)
                    ->where(function ($query) {
                        $query->where([
                                ['status', 4],
                                ['company_id', null]
                            ])
                            ->orWhere('status', 6)
                            ->orWhere('status', 3);
                    })
                    ->orderBy('type', 'asc')
                    ->paginate(9)
                    ->withQueryString();

                $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });
                // dd($results,$type);
                return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'menu' => $menu,
                    'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
            }
            else if($category)
            {
                $results = $tarahi->with('user')->with('menus')->orderBy('category','asc')->withCount('offers')->withCount('comments')
                ->where('category',$category)->where('status',4)->OrWhere('status',6)->paginate(9)->WithQueryString();

                $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });

                return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
            }
            else if($sort == 'DESC')
            {
                $results = $tarahi->with('user')->with('menus')->withCount('offers')->withCount('comments')->orderBy('id','desc')
                    ->where('status',4)->OrWhere('status',6)->paginate(9)->WithQueryString();

                $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });

                    return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
            }
            else if($sort == 'cheapest')
            {
                $results = $tarahi->with('user')->with('menus')->withCount('offers')->withCount('comments')->orderBy('price','asc')
                ->where('status',4)->OrWhere('status',6)->paginate(9)->WithQueryString();

                $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });

                return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
            }
            else if($sort == 'expensive')
            {
                $results = $tarahi->with('user')->with('menus')->withCount('offers')->withCount('comments')->orderBy('price','desc')
                ->where('status',4)->OrWhere('status',6)->paginate(9)->WithQueryString();

                $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });

                return Inertia::render('Guest/projectindex',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
            }
            else if($updated == 'updateDate')
            {
                $results = $tarahi->with('user')->with('menus')->withCount('offers')->withCount('comments')->orderBy('updated_at','desc')
                    ->where('status',4)->OrWhere('status',6)->paginate(9)->WithQueryString();

                $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });

                return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
            }
            else if($sort == 'Bestselling')
            {

                $results = $tarahi->with('user')->with('menus')->where('status',4)->OrWhere('status',6)->withCount('offers')->withCount('comments')
                ->orderBy('offers_count' ,'desc')->paginate(9)->WithQueryString();

                $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });
                // dd($results,$tarahi->withCount('offers')offers_count);
                return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
            }
            else if($sort == 'open')
            {

                $results = $tarahi->with('user')->with('menus')->withCount('offers')->withCount('comments')->where('status',4)->where('expired_at','>',$time)->paginate(9)->WithQueryString();
                // dd($results);

                $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });

                return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
            }
            if($search !== '')
            {
                $searchResults = Tarahi::search($search)->get();

                $ids = $searchResults->pluck('id')->toArray();

                $results = Tarahi::whereIn('id', $ids)
                    ->with('user', 'menus')
                    ->withCount('offers')
                    ->withCount('comments')
                    ->whereIn('status', ['4', '6'])
                    ->paginate(9)
                    ->withQueryString();

                $results->getCollection()->transform(function ($item) {
                    $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                    $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                    return $item;
                });
                // $results = $tarahi->search($search)->with('user')->with('menus')->withCount('offers')->withCount('comments')
                // ->whereIn('status', ['4', '6'])->paginate(9)->WithQueryString();
                // dd($results);
                if( $results->total() > 1)
                {

                    return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
                }
                elseif( $results->total() == 1)
                {
                    $results = $tarahi->with('user')->with('menus')->withCount('offers')->withCount('comments')
                    ->where('id',$results[0]->id)->with('file')->paginate(9)->WithQueryString();

                    $results->getCollection()->transform(function ($item) {
                        $item->RatingsAvgRating = $item->averageRating ? round($item->averageRating) : null;
                        $item->TimesRated = $item->timesRated() ? round($item->timesRated()) : null;
                        return $item;
                    });

                    return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
                }
                else
                {
                    $results = null;
                    return Inertia::render('Guest/project-index',['menus' => $menus,'results'=> $results,
                    'cartTarahis'=>$cart->tarahis,'cartCount' =>$cart->count,'cartPrice'=> $cart->price,'namads'=> $namads,'socials'=> $socials,
                    'cartDiscount'=>$cart->discount,'cartCoupon'=>$cart->coupon,'cartTotal'=>$cart->total,'menu' => $menu,
                    'alert'=> $alert,'flash'=> $flash,'companies'=>$companies,'orders'=>$orders,'querystring' =>$request->getQueryString() == 'q=all'? '':$request->getQueryString()]);
                }

            }
        }
        else
        {
            return abort(503);
        }
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
    public function store(Request $request,Tarahi $tarahi,Role $role,User $user,File $file,Rate $rate,Company $company)
    {
        if(Auth::check())
        {
              $time = Carbon::now();
            $companies = $company->first();
            
            if($request->rate)
            {
                $request->validate([
                    'name' => 'required',
                    'id' => 'required',
                    'text' => 'required',
                    'price' => 'required',
                    'rate' => 'required',
                ]);

                $tarahis = $tarahi->find($request->id);

                    if($tarahis->registerDesigner->file)
                    {
                        // dd($request->name == 'karfarma' && $tarahis->user_id == auth()->user()->id);
                        if($request->name == 'karfarma' && $tarahis->user_id == auth()->user()->id)
                        {
                            if($request->price == $tarahis->total)
                            {
                                if($tarahis->status == 8)
                                {
                                    $tarahi = $tarahis->update([
                                        'status' => 7
                                    ]);

                                    if($tarahi)
                                    {
                                        $rates = RateCreate::create(auth()->user()->id,$request->rate,$request->text,User::class,$tarahis->registerDesigner->user_id);

                                        if($rates)
                                        {
                                            $reqDesigner = $tarahis->registerDesigner;
                                            $message = 'کارفرما اتمام پروژه را اعلام نموده است.';
                                            TarahiDesignerJob::dispatch($reqDesigner,$message)->delay(now()->addMinute((int)$companies->job));

                                            $request->session()->flash(
                                                'alert',[
                                                    'title'=>'رای و نظر!',
                                                    'text'=> 'شما با موفقیت ثبت شد.',
                                                    'icon'=> 'success',
                                                    'button' => 'ok'
                                                ]
                                            );

                                            return redirect()->back();
                                        }
                                        else
                                        {
                                            $request->session()->flash(
                                                'alert',[
                                                    'title'=>'رای و نظر!',
                                                    'text'=> 'شما ثبت نشد، مشکلی پیش آمده لطفا مجدد تلاش نمایید.',
                                                    'icon'=> 'error',
                                                    'button' => 'ok'
                                                ]
                                            );

                                            return redirect()->back();
                                        }

                                    }
                                    else
                                    {
                                        $request->session()->flash(
                                            'alert',[
                                                'title'=>'رای و نظر!',
                                                'text'=> 'شما ثبت نشد، مشکلی پیش آمده لطفا مجدد تلاش نمایید.',
                                                'icon'=> 'error',
                                                'button' => 'ok'
                                            ]
                                        );

                                        return redirect()->back();
                                    }
                                }
                                else
                                {
                                    $request->session()->flash(
                                        'alert',[
                                            'title'=>'رای و نظر!',
                                            'text'=> 'در این مرحله امکان ثبت وجود ندارد.',
                                            'icon'=> 'error',
                                            'button' => 'ok'
                                        ]
                                    );

                                    return redirect()->back();
                                }

                            }
                            else
                            {
                                $request->session()->flash(
                                    'alert',[
                                        'title'=>'پروژه!',
                                        'text'=> 'مبلغ پروژه با مبلغ ثبتی توسط شما مطابقت ندارد.چنانچه با فری لنسر به اختلاف و یا مشکلی برخورد کردید، از منو پشتبانی اقدام نمایید. ',
                                        'icon'=> 'error',
                                        'button' => 'ok'
                                    ]
                                );

                                return redirect()->back();
                            }
                        }
                        else
                        {
                            $request->session()->flash(
                                'alert',[
                                    'title'=>'پروژه!',
                                    'text'=> 'فقط کارفرما، امکان اعلام اتمام پروژه را دارد.',
                                    'icon'=> 'error',
                                    'button' => 'ok'
                                ]
                            );

                            return redirect()->back();
                        }
                    }
                    else
                    {
                        $request->session()->flash(
                            'alert',[
                                'title'=>'پروژه!',
                                'text'=> 'فایل پروژه بار گذاری نشده، امکان اعلام اتمام آن وجود ندارد.',
                                'icon'=> 'error',
                                'button' => 'ok'
                            ]
                        );

                        return redirect()->back();
                    }



            }
            else if($request->expired)
            {
                $tarahi = $tarahi->find($request->id);

                if($request->name == 'karfarma' && auth()->user()->id == $tarahi->user_id)
                {
                    $request->validate([
                        'id' => 'required',
                        'expired'=> 'required|numeric|integer',
                    ]);
                    if($tarahi->status == 8 || $tarahi->status == 5 )
                    {

                        if($time->createFromFormat('Y-m-d H:i:s.u',$tarahi->find($request->id)->date) <
                        $time->createFromFormat('Y-m-d H:i:s.u',$tarahi->find($request->id)->date)->addDay($request->expired))
                        {
                            $tarahis = $tarahi->update([
                                'date'=> $time->createFromFormat('Y-m-d H:i:s.u',$tarahi->find($request->id)->date)->addDay($request->expired),
                            ]);

                            if($tarahis)
                            {
                                $tarahi = $tarahi->find($request->id)->registerDesigner;

                                $message = 'پروژه شما توسط کارفرما تمدید شد.';

                                TarahiDesignerJob::dispatch($tarahi,$message)->delay(now()->addMinute((int)$companies->job));

                                $request->session()->flash(
                                    'alert' ,[
                                        'title'=>'پروژه!',
                                        'text'=> 'زمان انقضا پروژه با موفقیت تمدید شد.',
                                        'icon'=> 'success',
                                        'button' => 'ok']
                                );

                                return redirect()->back();
                            }
                            else
                            {
                                $request->session()->flash(
                                    'alert' ,[
                                        'title'=>'درخواست!',
                                        'text'=> 'انجام نشد ، مجدد تلاش نمایید.',
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
                                    'title'=>'پروژه!',
                                    'text'=> 'زمان انقضا پروژه نمی تواند کمتر از زمان قبلی پروژه باشد.',
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
                                'title'=>'پروژه!',
                                'text'=> 'در این مرحله امکان تمدید زمان وجود ندارد.',
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
                            'title'=>'پروژه!',
                            'text'=> 'امکان تمدید زمان پروژه توسط شما وجود ندارد.',
                            'icon'=> 'error',
                            'button' => 'ok']
                    );

                    return redirect()->back();
                }
            }
            else if($request->id)
            {

                $tarahi = $tarahi->find($request->id);

                if($tarahi->status == 0)
                {
                    $tarahis = TarahiCreate::all($request);

                    if($tarahis)
                    {
                        $tarahis = $tarahi->find($request->id);
                        $categories = Menu::whereIn('id', [$request->group['id'], $request->type['id'], $request->category['id']])->get();
                        $tarahis->menus()->sync($categories);

                        $files = $request->file('file')?$request->file('file')->store('files'):null;

                        if($files && $tarahi->find($request->id)->file && $files !== $tarahi->find($request->id)->file->url)
                        {
                            Storage::delete( $tarahi->find($request->id)->file);
                            $tarahi->find($request->id)->file()->update([
                                'url'=>  $files,
                                'fileable_type'=>Tarahi::class,
                                'fileable_id'=> $tarahi->find($request->id)->id,
                                'status'=> 0,
                            ]);
                        }

                        $request->session()->flash(
                            'alert' ,[
                                'title'=>'پروژه!',
                                'text'=> 'با موفقیت بروز رسانی شد.',
                                'icon'=> 'success',
                                'button' => 'ok'
                                ]
                        );

                        return redirect()->back();
                    }
                    else
                    {
                        $request->session()->flash(
                            'alert' ,[
                                'title'=>'پروژه!',
                                'text'=> 'بروز رسانی نشد،مشکلی پیش آمده با پشتیبانی تماس حاصل فرمایید.',
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
                            'title'=>'پروژه!',
                            'text'=> 'در این مرحله مجوز ویرایش را ندارید.',
                            'icon'=> 'error',
                            'button' => 'ok']
                    );

                    return redirect()->back();
                }
            }
            else
            {


                if(

                    $tarahi->where('slug',$request->group['name'] .'-'. $request->type['name'] .'-'. $request->category['name'] .'-'. $request->title)->pluck('slug')->first() == $request->group['name'].'-'. $request->type['name'].'-'.$request->category['name'].'-'. $request->title
                )
                {
                    $request->session()->flash(
                        'alert' ,[
                            'title'=>'پروژه!',
                            'text'=> 'بااین مشخصات قبلا ثبت شده است و امکان ثبت مجدد وجود ندارد ، عنوان دیگری برای پروژه خود انتخاب کنید.',
                            'icon'=> 'error',
                            'button' => 'ok']
                    );
                    return redirect()->back();
                }
                else
                {

                    $tarahis = TarahiCreate::all($request);
                    if($tarahis)
                    {

                        if(count($tarahis->menus) > 0)
                        {
                            $categories = Menu::whereIn('id', [$request->group['id'], $request->type['id'], $request->category['id']])->get();
                            $tarahis->menus()->sync($categories);
                        }
                        else
                        {
                            $categories = Menu::whereIn('id', [$request->group['id'], $request->type['id'], $request->category['id']])->get();
                            $tarahis->menus()->attach($categories);
                        }


                        $message = ' پروژه شما در وضعیت انتظار قرار گرفت.';

                        TarahiJob::dispatch($tarahis,$message)->delay(now()->addMinute((int)$companies->job));

                        $message = ' پروژه نیاز به تایید دارد.';

                        TarahiAdminJob::dispatch($tarahis,$message)->delay(now()->addMinute((int)$companies->job));

                        $file = $request->file('file')?$request->file('file')->store('files'):null;
                        if($file)
                        {
                            $files = FileCreate::all($request,$tarahis,Tarahi::class);
                        }



                        $request->session()->flash(
                            'alert' ,[
                                'title'=>'پروژه!',
                                'text'=> 'با موفقیت ثبت شد.',
                                'icon'=> 'success',
                                'button' => 'ok']
                        );

                        return redirect()->back();
                    }
                    else
                    {
                        $request->session()->flash(
                            'alert' ,[
                                'title'=>'پروژه!',
                                'text'=> 'ثبت نشد،مشکلی پیش آمده مجدد تلاش نمایید.',
                                'icon'=> 'error',
                                'button' => 'ok']
                        );

                        return redirect()->back();
                    }
                }
            }
        }
        else
        {
            $time = new Carbon;

            $request->validate([

                'name' => 'required|string|max:255',
                'lasst_name' => 'required|string|max:255',
                'email'=> 'required|string|email|max:255|unique:users',
                'text'=> 'required|string|max:65535',
                'group'=> 'required|max:255',
                'type'=> 'required|max:255',
                'title'=> 'required|string|max:255',
                'category'=> 'required|max:255',
                // 'price' => 'numeric',

            ]);

            $password =  substr( str_shuffle(md5(time())), 6, 20 );

            $users = User::create([

                'user_name' => $request->name . '_'. $request->lasst_name,
                'name' => $request->name,
                'lasst_name' => $request->lasst_name,
                'name_show'=> $request->name . '_'. $request->lasst_name,
                'email' => $request->email,
                'tel'=> $request->tel?$request->tel:null,
                'password' => Hash::make($password),
                'status' => 0,
                'person' => 0,
            ]);

            if($users)
            {

                $message = 'حساب کاربری شما با موفقیت ساخته شد.';
                $route = 'login';
                Notification::send($users , new UserRegisterNotification($users,$message,$route,$password));

               $profiles = Profile::create([
                    'user_id'=>$users->id,
                    'notification'=> 1,
                ]);
                if($profiles)
                {
                    if(

                        $tarahi->where('slug',$request->group['name'] .'_'. $request->type['name'] .'_'. $request->category['name'] .'_'. $request->title)->pluck('slug')->first() == $request->group['name'].'_'. $request->type['name'].'_'.$request->category['name'].'_'. $request->title
                    )
                    {
                        $request->session()->flash(
                            'alert' ,[
                                'title'=>'پروژه!',
                                'text'=> 'بااین مشخصات قبلا ثبت شده است و امکان ثبت مجدد وجود ندارد ، عنوان دیگری برای پروژه خود انتخاب کنید.',
                                'icon'=> 'error',
                                'button' => 'ok']
                        );
                        return redirect()->back();
                    }
                    else
                    {
                        $tarahis = $tarahi->create([

                            'slug'=>$request->group['name'].'_'. $request->type['name'] .'_'.$request->category['name'] .'_'. $request->title,
                            'title'=> $request->title,
                            'text'=> $request->text,
                            'price'=>$request->price,
                            'user_id' => $users->id,
                            'group'=>$request->group['id'],
                            'type'=> $request->type['id'],
                            'category'=> $request->category['id'],
                            'expired_at' => $time->addDay(15),
                            'company_id' => $request->entekhab >0 ? $request->entekhab : null,
                        ]);

                        if($tarahis)
                        {

                            $categories = Menu::whereIn('id', [$request->group['id'], $request->type['id'], $request->category['id']])->get();
                            $tarahis->menus()->sync($categories);

                            TarahiJob::dispatch($tarahis)->delay(now()->addMinute(5));

                            $files = $request->file('file')?$request->file('file')->store('files'):null;

                            if($files)
                            {

                                File::create([
                                    'url'=>  $files,
                                    'fileable_type'=>Tarahi::class,
                                    'fileable_id'=> $tarahis->id,
                                    'status'=> 0,
                                ]);
                            }

                            // $massage = 'مشاهده پروژه شما.';
                            // $route = 'tarahi.index';
                            // $user = $user->find($users->id);
                            // Notification::send($user , new TarahiNotification($tarahis,$massage,$route,$user));

                            // $roles = $role->findOrfail(3);

                            // foreach ($roles->users as $key => $value)
                            // {
                            //     $message = 'یک پروژه جدید ارسال شده است.';
                            //     $route = 'tarahiAdmin.index';
                            //     $user = $user->find($value->id);
                            //     Notification::send($user , new TarahiNotification($tarahis,$message,$route,$user));
                            // }
                            $files = $request->file('file')?$request->file('file')->store('files'):null;
                            if($files)
                            {
                                $file->create([
                                    'url'=>  $files,
                                    'fileable_type'=>Tarahi::class,
                                    'fileable_id'=> $tarahis->id
                                ]);
                            }

                            $request->session()->flash(
                                'alert' ,[
                                    'title'=>'پروژه!',
                                    'text'=> 'با موفقیت ثبت شد، جهت پی گیری پروژه وارد حساب کاربری خود شوید.',
                                    'icon'=> 'success',
                                    'button' => 'ok']
                            );

                            return redirect()->back();
                        }
                        else
                        {
                            $request->session()->flash(
                                'alert' ,[
                                    'title'=>'پروژه!',
                                    'text'=> 'با موفقیت ثبت نشد، حتما مشکلی پیش آمده باپشتیبانی حاصل نمایید.',
                                    'icon'=> 'success',
                                    'button' => 'ok']
                            );
                            return redirect()->back();
                        }
                    }
                }
                else
                {
                    $request->session()->flash(
                        'alert' ,[
                            'title'=>'پروفایل کاربری!',
                            'text'=> 'با موفقیت ثبت نشد، حتما مشکلی پیش آمده باپشتیبانی حاصل نمایید.',
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
                        'title'=>'حساب کاربری!',
                        'text'=> 'با موفقیت ثبت نشد، حتما مشکلی پیش آمده مجدد تلاش نمایید.',
                        'icon'=> 'success',
                        'button' => 'ok']
                );
                return redirect()->back();
            }
        }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id,Request $request,Tarahi $tarahi,User $user,Namad $namad,Menu $menu,ReqDesigner $reqdesigner,Social $social)
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        $flash = $request->session()->has('message')?$request->session()->get('message'):null;
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $users = auth()->user()?$user->with('image')->with('profile')->with('roles')->with('favorites')->findOrFail(auth()->user()->id):null;
        $tarahis =  $tarahi->with('image')->with('file')->with('discount')->with('comments')->with('menus')->with('user')->with('favorite')->with('group')->with('type')
            ->with('category')->where('slug',$id)->first();
        
                //  dd($tarahis);
        $RatingsAvgRating = $tarahis->averageRating ? round($tarahis->averageRating) : null;
        $TimesRated = $tarahis->timesRated() ? round($tarahis->timesRated()) : null;
        // dd($tarahi_averageRating,$tarahi_timesRated);
        if($tarahis && $tarahis->status == 3 || $tarahis &&  $tarahis->status == 4 || $tarahis &&  $tarahis->status == 6)
        {
            $tarahi_count = $tarahis->views()->count();
            $tarahi_order = $tarahis->orders->count();
            $time = new Carbon;
            views($tarahis)->cooldown($time->addDays(1))->record();
            $user_id = $tarahis->user->id;
            $count = $tarahi->where('user_id',$user_id)->get()->count();
            $companies = $user->with('image')->with('profile')->first();
            $companies2 = Company::with('user')->with('image')->first();
            $reqdesigners =  $reqdesigner->with('user')->where('tarahi_id',$tarahis->id)->where('status','>',3)->paginate(9);
            $menus = $menu->where('parent_id',null)->where('status','>',3)->with('children')->get();
            $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
            $namads = $namad->with('menu')->orderBy('created_at','desc')->get();
            $carousels = $tarahi->with('menus')->withCount('comments')->orderBy('price','asc')->where('status',4)->where('id','<>',$tarahis->id)->paginate(10)->WithQueryString();
            $socials = $social->with(['link' => fn ($q) => $q->where(['user_id' => 1,'status' => 4]),'menu'])->where('status',4)->get();
            $averageRating = [];
            foreach ($reqdesigners as $key => $value) {
                array_push($averageRating,["user" => $value->user->id , "rate" => $value->user->averageRating ? round($value->user->averageRating):null  ,
                "count" => $value->user->timesRated() > 0 ? $value->user->timesRated():null]) ;
            }

            // dd($tarahi_averageRating,$tarahi_timesRated);
            return Inertia::render('Guest/project-show',['tarahis'=>$tarahis,'count' => $count,'menus'=>$menus,
            'time'=>$time,'alert'=>$alert,'flash'=>$flash,'tarahi_count'=>$tarahi_count, 'menu' => $menu,'namads'=> $namads,'socials'=> $socials,
            'tarahi_order'=> $tarahi_order,'companies'=>$companies,'reqdesigners'=>$reqdesigners,'carousels' => $carousels,
            'users' => $users,'RatingsAvgRating'=> $RatingsAvgRating , 'TimesRated' => $TimesRated ,
            'tarahi_usersRated'=> $averageRating,'companies2'=>$companies2,'cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,
                'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,'tax'=> $cart->tax,'col'=>$cart->col,
                'payment'=>$cart->payment,'balance'=>$cart->balance]]);
        }
        else
        {
            return abort(404);
        }
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
