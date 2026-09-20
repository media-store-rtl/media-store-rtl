<?php
namespace App\Http\Utilities;

use App\Models\Support;

class SupportCreate
{
    public static function all($request)
    {
        // dd($request->parent_id);
        if($request->parent_id)
        {
            $support = Support::find($request->parent_id);

            $support->update([
                'status'=>0,
            ]);

            $supports = Support::create([
                'user_id' => auth()->user()->id,
                'parent_id' => $request->parent_id,
                'destination'=> $support->destination ? $request->destination : null,
                'recepiant' => $request->recepiant,
                'subject' => $request->subject,
                'text' => $request->text,
                'status' => 4,
            ]);
        }
        else
        {

          
            $supports = Support::create([
                'user_id' => auth()->user()->id,
                'parent_id' => $request->parent_id,
                'destination'=> $request->product ? $request->product['user_id'] : null ,
                'recepiant' => $request->recepiant['id'],
                'subject' => $request->subject['id'],
                'text' => $request->text,
                'status' => 0,
                ]);
        }
        return $supports;

    }

    public static function Admin($request)
    {

        if ($request->parent_id) {

            $support = Support::find($request->parent_id);

            $support->update([
                'status'=>0,
            ]);
            
            $supports = Support::create([
                'user_id' => auth()->user()->id,
                'parent_id' => $request->parent_id,
                // 'destination'=> $request->destination ,
                // 'menu' => $request->menu,
                'recepiant' => $request->recepiant,
                'subject' => $request->subject,
                'text' => $request->text,
                'status' => 4,
            ]);
        }
        else
        {

            $supports = Support::create([
                'user_id' => auth()->user()->id,
                'recepiant' => $request->recepiant['id'],
                'subject' => $request->subject['id'],
                'text' => $request->text,

            ]);

            
        }
        
        return $supports;

    }

}
