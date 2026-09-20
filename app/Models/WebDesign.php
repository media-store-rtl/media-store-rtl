<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\Menu;
use App\Models\User;
use App\Models\Image;
use App\Models\File;
use App\Models\Discount;
use App\Models\Installment;
use willvincent\Rateable\Rateable;
use Illuminate\Database\Eloquent\Model;
use CyrildeWit\EloquentViewable\Contracts\Viewable;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WebDesign extends Model implements Viewable
{
    use HasFactory, InteractsWithViews,Rateable;
    protected $fillable = [
        'user_id',
        'slug',
        'name',
        'name_en',
        'group',
        'type',
        'category',
        'text',
        'price',
        'status',
        'tag',
        'basic',
        'damage',
        'rouzekari',
        'pages'

    ];

    public function image()
    {
        return $this->morphOne(Image::class,'imageable');
    }
    public function user()
    {
        return $this->belongsTo(User::class)->with('image')->with('roles')->with('socials');
    }
    public function discount()
    {
        return $this->morphOne(Discount::class,'discountable')->where('expired','>',new Carbon);
    }
    public function menus()
    {
        return $this->morphToMany(Menu::class,'menuable')->with('routes')->with('sections');
    }
    public function group()
    {
        return $this->belongsTo(Menu::class, 'group','id');
    }
    public function type()
    {
        return $this->belongsTo(Menu::class, 'type','id');
    }
    public function category()
    {
        return $this->belongsTo(Menu::class, 'category','id');
    }
    public function orders()
    {
        return $this->morphMany(Orderable::class, 'orderable');
    }
    public function sections()
    {
        return $this->morphToMany(section::class, 'sectionable');
    }
    public function installments()
    {
        return $this->morphToMany(Installment::class, 'installmentable');
    }
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable')->where('status' , 4 )->whereNull('parent_id')->with('replies')->with('user');
    }
    public function favorite()
    {
        return $this->morphMany(Favorite::class, 'favoritable');
    }
    public function registerDesigner()
    {
        return $this->hasMany(Contract::class, 'web_design_id','id')
            ->with('user')->with('file');
    }
    public function file()
    {
        return $this->morphOne(File::class, 'fileable');
    }
}
