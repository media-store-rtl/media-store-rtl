<?php
namespace App\Http\Utilities;


use App\Models\Orderable;
use App\Models\Order;
class OrderableCreate
{

    public static function create($order_id,$user_id,$price,$count,$discount,$coupon,$total,$comison,$tax,$col,$orderable_type,$orderable_id)
    {
        
        // dd(Order::find($order_id)->balance,$order_id,$user_id,$price,$count,$discount,$coupon,$total,$comison,$tax,$col,$orderable_type,$orderable_id);
        $orderables = Orderable::create([
            'order_id'=> $order_id,
            'user_id'=> $user_id,
            'price'=>$price,
            'count'=> $count,
            'discount' =>$discount,
            'coupon'=> $coupon,
            'total' => $total,
            'comison' => $comison ,
            'tax' => $tax,
            'col'=> $col, // -Order::find($order_id)->balance
            'orderable_type'=>$orderable_type,
            'orderable_id'=> $orderable_id,
        ]);

        return $orderables;
    }

}
