<?php

namespace App\Jobs;

use App\Models\Role;
use App\Models\Support;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use App\Notifications\SupportNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Notification;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class SupportJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $support;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Support $support)
    {
        return $this->support = $support;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(Role $role,User $user)
    {
         $supports = Support::findOrfail($this->support->id);
         $users = $user->findOrfail($supports->user_id);
        if($users->roles->find(3))
        {    
            
             if($supports->status == 4)
            {
                if ($supports->parent_id !== null) 
                {
                        $supportsParent = Support::find($supports->parent_id);
                        $supportsParent->update([
                        'status'=>4,
                        ]);

                        $message = 'یک پیام جدید برای شما ارسال شده است.';
                        $route = 'support.index';
                        $user = $user->find($supportsParent->user_id);
                        Notification::send($user , new SupportNotification($supports,$message,$route,$user));
                    
                }
            }
        }

        else
        {
            if($supports->destination !== null)
            {
                if ($supports->parent_id !== null) 
                {
                        $support = Support::find($supports->parent_id);
                        if($users->roles->find(1) || $users->roles->find(2))
                        {
                            $support->update([
                            'status'=>4,
                        ]);
                        
                        }
                        else
                        {
                            $support->update([
                            'status'=>1,
                            ]);
                        }
                        


                        $message = 'یک پیام جدید برای شما ارسال شده است.';
                        $route = 'support.index';
                        $user = $user->find($supports->destination);
                        Notification::send($user , new SupportNotification($supports,$message,$route,$user));
                                        
                }
                else 
                {
                    $supports->update([
                        'status'=>1,
                        ]);
                    
                        $message = 'یک پیام جدید برای شما ارسال شده است.';
                        $route = 'support.index';
                        $user = $user->find($supports->destination);
                        Notification::send($user , new SupportNotification($supports,$message,$route,$user));
                  
                }
            }
             else if($supports->status == 0)
            {
                if ($this->support->parent_id !== null) 
                {
                        Support::find($this->support->parent_id)->update([
                        'status'=>1,
                        ]);


                        $message = 'یک پیام ارسال شده است.';
                        $route = 'supportAdmin.index';
                        $users = $role->find(3);
                        foreach ($users->users as $key => $user)
                        {
                            Notification::send($user , new SupportNotification($supports,$message,$route,$user));

                        }
                                        
                }
                else 
                {
                    $supports->update([
                        'status'=>1,
                        ]);
                    
                        $message = 'یک پیام ارسال شده است.';
                        $route = 'supportAdmin.index';
                        $users = $role->find(3);
                        foreach ($users->users as $key => $user)
                        {
                            Notification::send($user , new SupportNotification($supports,$message,$route,$user));

                        }
                  
                }
                
            }
            else if($supports->status == 4)
            {
                if ($this->support->parent_id !== null) 
                {
                     Support::find($this->support->parent_id)->update([
                        'status'=>1,
                        ]);


                        $message = 'یک پیام ارسال شده است.';
                        $route = 'supportAdmin.index';
                        $users = $role->find(3);
                        foreach ($users->users as $key => $user)
                        {
                            Notification::send($user , new SupportNotification($supports,$message,$route,$user));

                        }
                           
                }
            }
        }
    }
}
