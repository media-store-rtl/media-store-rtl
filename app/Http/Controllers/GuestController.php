<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Blog;
use App\Models\Cart;
use App\Models\Menu;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Route;
use App\Models\Coupon;
use App\Models\Social;
use App\Models\Tarahi;
use App\Jobs\TarahiJob;
use App\Models\Company;
use App\Models\Product;
use App\Models\Profile;
use App\Models\Session;
use App\Models\Support;
use App\Jobs\DepositJob;
use App\Models\Discount;
use App\Models\Orderable;
// use Illuminate\Support\Facades\Route;
use App\Models\WebDesign;
use App\Models\RouteModel;
use Illuminate\Http\Request;
use Shetabit\Multipay\Invoice;
use App\Notifications\SupportNotif;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Shetabit\Payment\Facade\Payment;
use App\Http\Utilities\DepositCreate;
use Illuminate\Foundation\Application;
use App\Notifications\SupportNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Cache;
use App\Notifications\UserRegisterNotification;
use App\Models\Namad;

class GuestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,Coupon $coupon,User $user,Discount $discount,Social $social,Route $route,Product $product,Orderable $orderable,Blog $blog,Namad $namad,WebDesign $webDesign)
    {
        $oldCart = $request->session()->get('cart');
        $cart = new Cart($oldCart);
        $time = now();
        $alert = $request->session()->get('alert');
        $path = $request->path();

        $menus = Cache::store('file')->flexible('home.route_menus.' . $path, [600, 1800], function () use ($route, $path) {
            $currentRoute = $route->where('name', $path)->first();
            if (!$currentRoute) {
                return collect();
            }
            return Menu::whereNull('parent_id')
                ->whereHas('routes', fn ($query) => $query->where('routes.id', $currentRoute->id))
                ->with('sections', 'routes')
                ->get();
        });

        $menu = Cache::store('file')->flexible('home.menus.v2', [600, 1800], function () {
            $parents = Menu::whereNull('parent_id')
                ->where('status', 4)
                ->with('sections')
                ->get(['id', 'name', 'status']);

            $children = Menu::whereIn('parent_id', $parents->pluck('id'))
                ->where('status', 4)
                ->with('sections')
                ->get(['id', 'parent_id', 'name', 'status'])
                ->groupBy('parent_id');

            return $parents->each(function ($menu) use ($children) {
                $menu->setRelation('children', $children->get($menu->id, collect())->values());
            });
        });

        Session::updateCurrent();

        $coupon_count = Cache::store('file')->flexible('home.coupon_count', [60, 300], function () use ($coupon) {
            return $coupon->whereNull('user_id')->count();
        });

        $companies = Cache::store('file')->flexible('home.company', [600, 1800], function () use ($user) {
            return $user->with('image', 'profile')->first();
        });

        $socials = Cache::store('file')->flexible('home.socials', [600, 1800], function () use ($social) {
            return $social->with([
                'link' => fn ($q) => $q->where(['user_id' => 1, 'status' => 4]),
                'menu',
            ])->where('status', 4)->get();
        });

        $users = auth()->user();

        $results = Cache::store('file')->flexible('home.products.templates', [120, 600], function () use ($product) {
            return $product->with(['discount', 'image', 'user', 'menus'])
                ->whereIn('status', [4, 5])
                ->whereHas('group', fn ($query) => $query->where('name', 'قالب'))
                ->withCount(['orders', 'comments'])
                ->withAvg('ratings', 'rating')
                ->latest()
                ->limit(5)
                ->get();
        });

        $forms = Cache::store('file')->flexible('home.products.forms', [120, 600], function () use ($product) {
            return $product->with(['discount', 'image', 'user', 'menus'])
                ->whereIn('status', [4, 5])
                ->whereHas('group', fn ($query) => $query->where('name', 'فرم'))
                ->withCount(['orders', 'comments'])
                ->withAvg('ratings', 'rating')
                ->latest()
                ->limit(5)
                ->get();
        });

        $discounts = Cache::store('file')->flexible('home.discounts', [60, 300], function () use ($discount) {
            return $discount->where('expired', '>', now())
                ->where('discountable_type', Product::class)
                ->with('discountable')
                ->paginate(9)
                ->withQueryString();
        });

        $orders = Cache::store('file')->flexible('home.orders', [60, 300], function () use ($orderable) {
            return $orderable->with('product')
                ->where('orderable_type', Product::class)
                ->whereBetween('created_at', [now()->startOfMonth(), now()->endOfMonth()])
                ->select('orderable_id')
                ->selectRaw('count(orderable_id) as occurences')
                ->groupBy('orderable_id')
                ->orderByDesc('occurences')
                ->limit(5)
                ->get();
        });

        $webDesigns = Cache::store('file')->flexible('home.web_designs', [120, 600], function () use ($webDesign) {
            return $webDesign->with(['discount', 'user', 'image', 'menus', 'group', 'type', 'category'])
                ->where('status', 4)
                ->whereHas('group', fn ($query) => $query->where('name', 'پلن طراحی سایت'))
                ->latest()
                ->limit(5)
                ->get();
        });

        $blogs = Cache::store('file')->flexible('home.blogs', [120, 600], function () use ($blog) {
            return $blog->with('image', 'group', 'type', 'category', 'user', 'menus')
                ->withCount(['comments', 'views'])
                ->where('status', 4)
                ->latest()
                ->limit(5)
                ->get();
        });

        $namads = Cache::store('file')->flexible('home.namads', [600, 1800], function () use ($namad) {
            return $namad->with('menu')->latest()->get();
        });

        $cafes = Cache::store('file')->flexible('home.cafes', [120, 600], function () use ($webDesign) {
            return $webDesign->with(['discount', 'user', 'image', 'menus', 'group', 'type', 'category'])
                ->where('status', 4)
                ->whereHas('group', fn ($query) => $query->where('name', 'کافی نت'))
                ->latest()
                ->limit(5)
                ->get();
        });

        if (!$companies) {
            return abort(503);
        }

        return Inertia::render('Guest/index', [
            'canLogin' => 'Illuminate\\Support\\Facades\\Route'::has('login'),
            'canRegister' => 'Illuminate\\Support\\Facades\\Route'::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'alert' => $alert,
            'discounts' => $discounts,
            'time' => $time,
            'menus' => $menus,
            'menu' => $menu,
            'coupon_count' => $coupon_count,
            'results' => $results,
            'forms' => $forms,
            'companies' => $companies,
            'socials' => $socials,
            'path' => $path,
            'users' => $users,
            'cart' => [
                'products' => $cart->products,
                'count' => $cart->count,
                'price' => $cart->price,
                'discount' => $cart->discount,
                'coupon' => $cart->coupon,
                'total' => $cart->total,
                'tax' => $cart->tax,
                'col' => $cart->col,
                'payment' => $cart->payment,
                'balance' => $cart->balance,
            ],
            'namads' => $namads,
            'orders' => $orders,
            'webDesigns' => $webDesigns,
            'blogs' => $blogs,
            'cafes' => $cafes,
        ]);
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
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Support $support, Role $role, User $user)
    {
        if(Auth::check())
        {
            $request->validate([
                'recepiant'=> 'required',
                'subject'=>'required',
                'text'=>'required',
            ]);

            $supports = $support->create([
                'user_id' => auth()->user()->id,
                'parent_id' => 0,
                'destination'=> 0,
                'menu' => $request->menu,
                'recepiant' => $request->recepiant,
                'subject' => $request->subject,
                'text' => $request->text,
                'status' => 0,
            ]);

            if($supports)
            {


                $message = 'یک پیام ارسال شده است.';
                $route = 'supportAdmin.index';
                $users = $role->find(3);
                foreach ($users->users as $key => $user)
                {
                    Notification::send($user , new SupportNotification($supports,$message,$route,$user));
                }

                $request->session()->flash(
                    'alert' ,[
                        'title'=>'!پیام',
                        'text'=> '.باموفقیت ارسال شد',
                        'icon'=> 'success',
                        'button' => 'ok']
                    );
                return redirect()->route('dashboard.index');
            }
            else
            {
                $request->session()->flash(
                    'alert' ,[
                        'title'=>'!پیام',
                        'text'=> '.ارسال نشد،مشکلی پیش آمده با پشتیبانی تماس تلفنی برقرار نمایید',
                        'icon'=> 'error',
                        'button' => 'ok']
                );

                return redirect()->route('dashboard.index');
            }
        }
        else
        {
            $request->validate([
                'name' => 'required|string|max:255',
                'lasst_name' => 'required|string|max:255',
                'email'=> 'required|string|email|max:255|unique:users',
                'menu' => 'required',
                'recepiant'=> 'required',
                'subject'=>'required',
                'text'=>'required|string|max:255',

            ]);

            $password =  substr( str_shuffle(md5(time())), 6, 20 );
            $users = User::create([
                'user_name' => $request->name . ' '. $request->lasst_name,
                'name' => $request->name,
                'lasst_name' => $request->lasst_name,
                'email' => $request->email,
                'tel'=> $request->tel?$request->tel:null,
                'password' => Hash::make($password),
                'status' => 0
            ]);

            $message = 'حساب کاربری شما با موفقیت ساخته شد.';
            $route = 'login';
            Notification::send($users , new UserRegisterNotification($users,$message,$route,$password));

            Profile::create([
                'user_id'=>$users->id,
                'notification'=> 1,
            ]);

            $supports = $support->create([
                'user_id' => auth()->user()->id,
                'parent_id' => 0,
                'destination'=> 0,
                'menu' => $request->menu,
                'recepiant' => $request->recepiant,
                'subject' => $request->subject,
                'text' => $request->text,
                'status' => 0,
            ]);

            if($supports)
            {


                $message = 'یک پیام ارسال شده است.';
                $route = 'supportAdmin.index';
                $users = $role->find(3);
                foreach ($users->users as $key => $user)
                {
                    Notification::send($user , new SupportNotification($supports,$message,$route,$user));
                }

                $request->session()->flash(
                    'alert' ,[
                        'title'=>'!پیام',
                        'text'=> '.باموفقیت ارسال شد',
                        'icon'=> 'success',
                        'button' => 'ok']
                    );
                return redirect()->route('dashboard.index');
            }
            else
            {
                $request->session()->flash(
                    'alert' ,[
                        'title'=>'!پیام',
                        'text'=> '.ارسال نشد،مشکلی پیش آمده با پشتیبانی تماس تلفنی برقرار نمایید',
                        'icon'=> 'error',
                        'button' => 'ok']
                );

                return redirect()->route('dashboard.index');
            }

        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return abort(404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return abort(404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return abort(404);
    }
}
