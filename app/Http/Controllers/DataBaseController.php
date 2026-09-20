<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use App\Models\Route;
use App\Models\notifications;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;

class DataBaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,User $user,Route $route)
    {
        Gate::authorize('update', $user);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
        $notifications = $users->unreadnotifications;
        $companies = $user->with('image')->first();
        $descriptions =  $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->descriptions?
            $route->where('name',$request->path())->first()->descriptions->first():null;
        $subject = $request->query->get('subject') == null?'All':$request->query->get('subject');
        $status = $request->query->get('status') == null? 'All' : $request->query->get('status');
        $results = collect(Schema::getTables())->pluck('name');
        $tables = null;

        if ($subject !== 'All' && $results->contains($subject)) {
            $tables = [
                'name' => $subject,
                'columns' => Schema::getColumnListing($subject),
                'rows' => DB::table($subject)->paginate(9),
            ];
        }
        
        // dd( $tables );
         if($status == 'All' &&  $subject == 'All')
        {

             return Inertia::render('Users/Modir/Public/dataBase-index',['cart'=>[ 'results' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                    'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'notifications'=>$notifications,'alert'=>$alert,'companies'=>$companies,'descriptions'=>$descriptions,
                    'results'=>$results,'users' => $users,'subjects'=>$subject,'tables'=>$tables
                    ]);
        }
        elseif($status !== 'All' &&  $subject == 'All')
        {

            $roles = $user->with('image')->with('roles')->where('status',$status)->orderBy('created_at','desc')->paginate(9);
            // dd($roles);
             return Inertia::render('Users/Modir/Public/dataBase-index',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                    'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'notifications'=>$notifications,'alert'=>$alert,'companies'=>$companies,'descriptions'=>$descriptions,
                    'results'=>$results,'users' => $users,'subjects'=>$subject,'tables'=>$tables
                    ]);
        }
        elseif($subject !== 'All' && $status == 'All')
        {

                $roles = $user->with('image')->with('roles')->where('user_name',$subject)->orderBy('created_at','desc')->paginate(9);
                // dd($roles);
               return Inertia::render('Users/Modir/Public/dataBase-index',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                    'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'notifications'=>$notifications,'alert'=>$alert,'companies'=>$companies,'descriptions'=>$descriptions,
                    'results'=>$results,'users' => $users,'subjects'=>$subject,'tables'=>$tables
                    ]);
        }
        else
        {
            if($subject !== 'All' && $status !== 'All')
            {
                // $tarahis = $tarahi->with('user')->with('type')->with('reqDesigner')->with('registerDesigner')
                // ->where('user_id',$users->id)->where([
                //     ['created_at','>=',$time->createFromFormat('Y-m-d H:i:s',$times.'00:00:00')],
                //     ['created_at','<',$time->createFromFormat('Y-m-d H:i:s',$times.'23:59:60')]
                //     ])->where('status',$status)->where('type',$subject)->orderBy('created_at','desc')->paginate(9);

                // return Inertia::render('Users/Buyer/Tarahi/Tarahi-index',['tarahis'=> $tarahis,'time'=>$time,
                // 'users' => $users,'names'=> $names,'menus' => $menus,'notifications'=> $notifications,
                // 'companies'=>$companies,'descriptions'=>$descriptions,'alert'=> $alert,'subjects'=> $subject,
                // 'times'=> $times,'statuses'=> $status,'path'=>$request->path()]);
            }
            else if($subject !== 'All' && $status !== 'All')
            {
                // $tarahis = $tarahi->with('user')->with('type')->with('reqDesigner')->with('registerDesigner')
                // ->where('user_id',$users->id)->where('status',$status)->where('type',$subject)->orderBy('created_at','desc')->paginate(9);

                // return Inertia::render('Users/Buyer/Tarahi/Tarahi-index',['tarahis'=> $tarahis,'time'=>$time,
                // 'users' => $users,'names'=> $names,'menus' => $menus,'notifications'=> $notifications,
                // 'companies'=>$companies,'descriptions'=>$descriptions,'alert'=> $alert,'subjects'=> $subject,
                // 'times'=> $times,'statuses'=> $status,'path'=>$request->path()]);
            }
            else
            {
                return Inertia::render('Users/Modir/Public/dataBase-index',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                    'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'notifications'=>$notifications,'alert'=>$alert,'companies'=>$companies,'descriptions'=>$descriptions,
                    'results'=>$results,'users' => $users,'subjects'=>$subject,'tables'=>$tables
                    ]);
            }


        }

        // dd($results,$subject);
        
     
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return abort(404);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request,User $user,)
    {
        
        Gate::authorize('update', $user);
        // $models =  'App\\Models\\' . Str::studly(Str::singular($request->subject));
        //$model = $request->model::findOrFail($request->product['id']);

        //$results = $model->update($request->product);
            // dd($request,DB::table($request->subject)->find($request->table['id']));
        $results = DB::table($request->subject)->where('id', $request->table['id'])->update($request->table);
        
        if($results)
                {
                    $request->session()->flash(
                        'alert' ,[
                            'title'=>'درخواست!',
                            'text'=> 'باموفقیت انجام شد.',
                            'icon'=> 'success',
                            'button' => 'ok']
                    );
                   
                }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,User $user,Route $route,string $id)
    {
        Gate::authorize('update', $user);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
        $notifications = $users->unreadnotifications;
        $companies = $user->with('image')->first();
        $descriptions =  $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->descriptions?
            $route->where('name',$request->path())->first()->descriptions->first():null;
            //'App\\Models\\' .
        
        
        $tables = DB::table($request->subject)->find($request->table);
        //  dd($request,$results);

        return Inertia::render('Users/Modir/Public/dataBase-show',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                    'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'notifications'=>$notifications,'alert'=>$alert,'companies'=>$companies,'descriptions'=>$descriptions,
                    'table'=>$tables,'users' => $users, 'subject' => $request->subject,
                    ]);
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
    public function destroy(Request $request,User $user,string $id)
    {
        

         Gate::authorize('update', $user);
        // $models =  'App\\Models\\' . Str::studly(Str::singular($request->subject));
        // $model = $request->subject::findOrFail($request->table['id']);
        //  dd();
        //$results = $model->delete($request->table);
        
        $results = DB::table($request->subject)->where('id', $request->table)->delete();
        if($results)
                {
                    $request->session()->flash(
                        'alert' ,[
                            'title'=>'درخواست!',
                            'text'=> 'باموفقیت انجام شد.',
                            'icon'=> 'success',
                            'button' => 'ok']
                    );
                   
                }
        return redirect()->back();
    }
}
