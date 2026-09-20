<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Blog;
use App\Models\Cart;
use App\Models\Menu;
use App\Models\Social;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Route;
use App\Models\Comment;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Auth\Access\Gate;
use App\Models\Namad;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,Blog $blog,Company $company,Route $route,Social $social,User $user,Namad $namad)
    {
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $time = new Carbon;
        $menus = $route->where('name',$request->path())->first() && $route->where('name',$request->path())->first()?
            $route->where('name',$request->path())->first()->menus:null;
        $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
        $namads = $namad->with('menu')->orderBy('created_at','desc')->get();
        $search =  $request->query->get('type');
        $blogs = $blog->with('image')->with('group')->with('type')->with('category')->withCount('comments')->withCount('views')->where('status',4)->paginate(9)->withQueryString();
        $companies = $user->with('image')->with('profile')->first();
        $socials = $social->with(['link' => fn ($q) => $q->where(['user_id' => 1,'status' => 4]),'menu'])->where('status',4)->get();
        $results = $blog->where('id',0)->paginate(9)->WithQueryString();
        // dd($blogs,$results );
        if($companies)
        {
            if($search == null)
            {
                return  $blogs ? Inertia::render('Guest/Blog-index',[
                    'cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                            'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'alert' => $alert,'time'=>$time,'socials'=> $socials,
                            'blogs'=>$blogs,'companies'=>$companies,'results'=>$results,'q'=>$search,'path'=>$request->path(),
                    'menus' => $menus, 'menu' => $menu ,'namads'=> $namads]) : abort(404);
            }
            else if($search !== null)
            {
                if($search == null)
                {
                    $request->validate([
                    'search' => 'required',
                    ]);
                }

                // $searchResults = $blog->search($search)->get();

                // $ids = $searchResults->pluck('id')->toArray();

                $results = $blog->where('group', $search)
                    ->with('user', 'image','group','type','category')
                    ->withCount('comments','views')
                    ->whereIn('status', ['4'])
                    ->paginate(9)
                    ->withQueryString();
                // $results = $blog->search($search)->with('image')->with('group')->with('type')->with('category')->withCount('comments')->withCount('views')->paginate(9)->WithQueryString();
                // dd($results,$search);
                if( $results->total() > 1)
                {
                    return Inertia::render('Guest/Blog-index',[
                        'cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                            'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'alert' => $alert,'time'=>$time,'socials'=> $socials,
                        'blogs'=> $blog->where('id',0)->paginate(9)->WithQueryString(),'results'=>$results,'companies'=>$companies,
                    'q'=>$search,'path'=>$request->path(),'menus' => $menus, 'menu' => $menu,'namads'=> $namads]);
                }
                elseif( $results->total() == 1)
                {
                    $results = $blog->with('image')->with('group')->with('type')->with('category')->withCount('comments')->withCount('views')->where('id',$results[0]->id)->paginate(9)->WithQueryString();
                    // dd($results);
                    return  Inertia::render('Guest/Blog-index',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                        'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'alert' => $alert,'time'=>$time,'socials'=> $socials,
                        'blogs'=> $blog->where('id',0)->paginate(9)->WithQueryString(),'results'=>$results,'companies'=>$companies,
                    'q'=>$search,'path'=>$request->path(),'menus' => $menus, 'menu' => $menu,'namads'=> $namads]);
                }
                else
                {
                    $results = $blog->where('id',0)->paginate(9)->WithQueryString();
                    return Inertia::render('Guest/Blog-index',['cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                    'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'alert' => $alert,'time'=>$time,'socials'=> $socials,
                    'blogs'=> $blog->where('id',0)->paginate(9)->WithQueryString() ,'results'=>$results,'companies'=>$companies,
                    'q'=>$search,'path'=>$request->path(),'menus' => $menus, 'menu' => $menu,'namads'=> $namads]);
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
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,$id,Company $company,Route $route,Comment $comment,User $user,Social $social,Namad $namad)
    {
        // Gate::authorize('create', $blog);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart'):null;
        $cart = new Cart($oldCart);
        $alert = $request->session()->has('alert') ? $request->session()->get('alert'):null;
        $blogs = Blog::with('comments')->with('user')->with('group')->with('favorite')->with('image')->withCount('comments')->where('slug',$id)->where('status',4)->first();
        $menus = $route->where('name','route(blog.show)')->first() && $route->where('name','route(blog.show)')->first()?
            $route->where('name','route(blog.show)')->first()->menus:null;
        $menu = Menu::where('parent_id',null)->where('status',4)->with('children','sections','routes')->get();
        $namads = $namad->with('menu')->orderBy('created_at','desc')->get();
        $companies = $user->with('image')->with('profile')->first();
        $socials = $social->with(['link' => fn ($q) => $q->where(['user_id' => 1,'status' => 4]),'menu'])->where('status',4)->get();
        if($blogs)
        {
            // dd($blogs);
            $comments = $comment->with('user')->where('commentable_id',$blogs->id)
                ->where('commentable_type',Blog::class)->where('parent_id',null)->where('status',4)->get();

            $replies = $comment->with('user')->where('commentable_id',$blogs->id)
                ->where('commentable_type',Blog::class)->where('parent_id','>',0)->where('status',4)->get();

            $product_count = $blogs->views()->count();
            $time = new Carbon;
            views($blogs)->cooldown($time->addDays(1))->record();
            $descriptions = $route->where('name','route(blog.show)')->first() && $route->where('name','route(blog.show)')->first()->descriptions?
                $route->where('name','route(blog.show)')->first()->descriptions->first():null;
            $latestBlogs = Blog::with('image')->latest()->take(3)->where([['id','<>',$blogs->id],['type',$blogs->type]])->get();
            // dd($menu);
            return Inertia::render('Guest/Blog-show',[
                'cart'=>[ 'products' => $cart->products,'count' => $cart->count,'price' => $cart->price,'discount'=> $cart->discount,'coupon' => $cart->coupon,'total' => $cart->total,
                    'tax'=> $cart->tax,'col'=>$cart->col,'payment'=>$cart->payment,'balance'=>$cart->balance],'socials'=> $socials,
                 'path'=>'route(blog.show)','time'=>$time,'product'=>$blogs,'alert' => $alert,'product_count' => $product_count,'comments' => $comments,
                  'replies'=>$replies,'companies' => $companies,'descriptions'=>$descriptions,'latestBlogs'=>$latestBlogs,'menus' => $menus, 'menu' => $menu,
                'namads'=> $namads]);
        }
        else {
            return abort(404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        return abort(404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        return abort(404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        return abort(404);
    }
}
