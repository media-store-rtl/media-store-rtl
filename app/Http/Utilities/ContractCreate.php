<?php
namespace App\Http\Utilities;

use Carbon\Carbon;
use App\Models\Contract;


class ContractCreate
{
    public static function all($request)
    {
        // dd($request);
        $time = Carbon::now();
        $request->validate([
            'web_design_id'=> 'required',
            'order_id'=> 'required',
        ]);

        if ($request->contract)
        {

            $contracts = Contract::find($request->contract)->update([
                'user_id' => auth()->user()->id,
                'web_design_id' => $request->web_design_id,
                'order_id' => $request->order_id,
                'staus' => 0,
            ]);
            return Contract::find($request->contract);
        }
        else
        {

            
            $contracts = Contract::create([
               
                'user_id' => auth()->user()->id,
                'web_design_id' => $request->web_design_id,
                'order_id' => $request->order_id,
                'staus' => 0,
            ]);
            return $contracts;
        }

        

    }

    public static function admin($request)
    {
        // dd($request);
        $time = Carbon::now();
        $request->validate([
            'id'=> 'required',
            'status'=> 'required',
        ]);

        if ($request->id)
        {

            $contracts = Contract::find($request->id)->update([

                'status' => $request->status,
            ]);
            return Contract::find($request->id);
        }
        

        

    }
}
