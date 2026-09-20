<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contract extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'web_design_id', 'order_id', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function plan()
    {
        return $this->belongsTo(WebDesign::class, 'web_design_id');
    }

    public function file()
    {
        return $this->morphOne(File::class, 'fileable');
    }
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
