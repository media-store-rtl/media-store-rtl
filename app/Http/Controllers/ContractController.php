<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Contract;
use App\Models\Cart;
use App\Models\User;
use App\Models\Route;
use App\Models\Company;
use App\Http\Utilities\Wallet;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Utilities\ContractCreate;
use App\Http\Utilities\FileCreate;
use App\Jobs\ContractJob;

class ContractController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,Contract $contract,User $user,Company $company,Route $route)
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        $names = $request->session()->has('names') ? $request->session()->get('names'):null;
        $statuses = $request->session()->has('statuses') ? $request->session()->get('statuses'):null;
        $ids = $request->session()->has('ids') ? $request->session()->get('ids'):null;
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
        $notifications = $users->unreadnotifications;
        $contracts = $contract->with('user')->with('file')->with('plan')->with('order')->where('id','>',0)->orderBy('created_at','desc')->paginate(9);
        $id=$request->query();
        $users->notifications->find($id)->MarkAsRead();
        $companies = $user->with('image')->first();
        $descriptions = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()->descriptions?
            $route->where('name',$request->path())->first()->descriptions->first():null;
        $wallet = Wallet::all($users);
        // dd($contracts);
        return Inertia::render('Users/Admin/Contract/Contract-index',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
            'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'contracts'=> $contracts,'users' => $users,
            'names'=> $names,'ids'=> $ids,'statuses'=> $statuses,'notifications'=> $notifications,'companies'=>$companies,'descriptions'=>$descriptions,
            'wallet'=>$wallet]);
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
    public function store(Request $request,Company $company)
    {
        $companies = $company->first();
        if ($request->id) {
                // dd($request);
                
                $contracts = ContractCreate::admin($request);
                // dd($contracts );
                if($contracts)
                {
                    // $request->merge([
                    //     'id' => null
                    // ]);
                    // dd($request->id);
                    $files = FileCreate::all($request,$contracts,Contract::class);

                    if($files)
                    {

                        ContractJob::dispatch($contracts)->delay(now()->addMinute((int)$companies->job));
                         $request->session()->flash(
                                'alert',
                                [
                                    'title' => 'عملیات!',
                                    'text' => 'با موفقیت انجام شد.',
                                    'icon' => 'success',
                                    'button' => 'ok'
                                ]
                            );
                
                    }
                    else
                    {

                    }
                    
                }
                else
                {

                }
                return redirect()->back();
            } 
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,Contract $contract, User $user, Company $company, Route $route, $ids)
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $time = new Carbon;
        $alert = $request->session()->has('alert') ? $request->session()->get('alert') : null;
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
        $notifications = $users->unreadnotifications;
        $id = $request->query();
        $users->notifications->find($id)->MarkAsRead();
        $companies = $user->with('image')->first();
        $descriptions = $route->where('name', 'route(contract.show)')->first() && $route->where('name', 'route(contract.show)')->first()->descriptions ?
            $route->where('name', 'route(contract.show)')->first()->descriptions->first() : null;
        $menus = $route->where('name', 'route(contract.show)')->first() && $route->where('name', 'route(contract.show)')->first()->menus ?
            $route->where('name', 'route(contract.show)')->first()->menus : null;
        $contracts = $contract->with('file')->find($ids);
        $wallet = Wallet::all($users);
        // dd($webDesigns);
        return Inertia::render('Users/Admin/Contract/Contract-show', [
            'alert' => $alert,
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
                'balance' => $cart->balance
            ],
            'users' => $users,
            'notifications' => $notifications,
            'menus' => $menus,
            'time' => $time,
            'wallet' => $wallet,
            'companies' => $companies,
            'descriptions' => $descriptions,
            'path' => 'route(contract.show)',
            'contract' => $contracts
        ]);
        dd($request);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contract $contract)
    {
        return abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contract $contract)
    {
        return abort(404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contract $contract)
    {
        return abort(404);
    }
}
