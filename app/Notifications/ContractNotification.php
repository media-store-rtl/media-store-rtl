<?php

namespace App\Notifications;

use App\Models\User;
use App\Models\Contract;
use App\Channels\SmsChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContractNotification extends Notification
{
    use Queueable;
    public $contract;
    public $message;
    public $route;
    public $user;
    /**
     * Create a new notification instance.
     */
    public function __construct(Contract $contract,$message,$route,$user)
    {
        $this->contract = $contract;
        $this->message = $message;
        $this->route = $route;
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        if(User::find($this->user->id)->profile->email == 1 &&
        User::find($this->user->id)->profile->mobile == 1 &&
        User::find($this->user->id)->profile->notification == 1)
        {
            return ['mail','database',SmsChannel::class];
        }

        else if(User::find($this->user->id)->profile->email == 1 &&
        User::find($this->user->id)->profile->mobile == 1 &&
        User::find($this->user->id)->profile->notification !== 1 )
        {
            return ['mail',SmsChannel::class];
        }

        else if(User::find($this->user->id)->profile->email == 1 &&
        User::find($this->user->id)->profile->mobile !== 1 &&
        User::find($this->user->id)->profile->notification == 1 )
        {
            return ['mail','database'];
        }

        else if(User::find($this->user->id)->profile->email !== 1 &&
        User::find($this->user->id)->profile->mobile == 1 &&
        User::find($this->user->id)->profile->notification == 1 )
        {
            return ['database',SmsChannel::class];
        }
        else if(User::find($this->user->id)->profile->email == 1)
        {
            return ['mail'];
        }
        else if(User::find($this->user->id)->profile->mobile == 1)
        {
            return [SmsChannel::class];
        }
        else if(User::find($this->user->id)->profile->notification == 1 )
        {
            return ['database'];
        }
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->line($this->message)
                    ->action('Notification Action', route($this->route))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'message'=> $this->message,
            'route' => $this->route,
            'id'=> '',
        ];
    }
    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toSms($notifiable)
    {
        return [
            'message'=> $this->message,
            'route' => $this->route,
            'id'=> '',
        ];
    }
}
