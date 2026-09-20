<?php

namespace App\Jobs;

use App\Models\Role;
use App\Models\User;
use App\Models\Contract;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use App\Notifications\ContractNotification;
use Illuminate\Support\Facades\Notification;


class ContractJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $contract;
    /**
     * Create a new job instance.
     */
    public function __construct(Contract  $contract)
    {
        return $this->contract = $contract;
    }

    /**
     * Execute the job.
     */
    public function handle(User $user , Role $role)
    {
        $contracts = Contract::find($this->contract->id);
        // dd($contacts);
        if($contracts->status == 0)
        {
            $contracts->update(['status' => 1]);

            $message = 'قرارداد شما در وضیعت انتظار قرار گرفت.';
            $route = 'order.index';
            $user = $user->find($contracts->user_id);
            Notification::send($user , new ContractNotification($contracts,$message,$route,$user));

            $message = 'یک قرارداد نیاز به تایید دارد.';
            $route = 'contractAdmin.index';
            $users = $role->find(3);
            foreach ($users->users as $key => $user)
            {
                Notification::send($user , new ContractNotification($contracts,$message,$route,$user));
            }
        }
        else if($contracts->status == 4)
        {
            // $comments = $comment->find($request->id);
            // dd($comments);
            $message = 'قرارداد شما در وضعیت تایید قرار گرفت.';
            $route = 'order.index';
            $user = $user->find($contracts->user_id);
            Notification::send($user , new ContractNotification($contracts,$message,$route,$user));
            
        }
    }
}
