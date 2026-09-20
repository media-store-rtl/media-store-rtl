<?php

namespace App\Jobs;
use App\Models\Role;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use App\Notifications\ProfileNotification;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProfileAdminJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $profile;
    /**
     * Create a new job instance.
     */
    public function __construct(Profile $profile)
    {
        return $this->profile = $profile;
    }

    /**
     * Execute the job.
     */
    public function handle(User $user , Role $role,Profile $profile)
    {
        $profiles = $profile::find($this->profile->id);
        if($profiles->status == 4)
        {
            $message = 'عکس پروفایل شما تایید شد.';
            $route = 'profile.index';
            $user = $user->find($profiles->id);
            Notification::send($user , new ProfileNotification($profiles,$message,$route,$user));
        }
    }
}
