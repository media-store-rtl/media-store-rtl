<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use willvincent\Rateable\Rateable;
use App\Models\Favorite;

class AccountingSubscriptionPlan extends Model
{
    use HasFactory, Rateable;
    protected $fillable = [
        'user_id',
        'name',
        'name_en',
        'slug',
        'tag',
        'description',
        'price',
        'duration_days',
        'max_users',
        'status',
        'group',
        'type',
        'category',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'integer',
            'duration_days' => 'integer',
            'max_users' => 'integer',
            'status' => 'integer',
            'group' => 'integer',
            'type' => 'integer',
            'category' => 'integer',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function menus()
    {
        return $this->morphToMany(Menu::class, 'menuable')
            ->with('routes')
            ->with('sections');
    }

    public function group()
    {
        return $this->belongsTo(Menu::class, 'group', 'id');
    }

    public function type()
    {
        return $this->belongsTo(Menu::class, 'type', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Menu::class, 'category', 'id');
    }

    public function favorite()
    {
        return $this->morphMany(Favorite::class, 'favoritable');
    }
}
