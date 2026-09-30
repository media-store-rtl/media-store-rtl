<?php

namespace App\Policies;

use App\Models\AccountingSubscriptionPlan;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AccountingSubscriptionPlanPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        $users = $user->findOrFail(auth()->user()->id);

        return $users->roles->where('id', 3)->first();
    }

    public function view(User $user, AccountingSubscriptionPlan $plan)
    {
        $users = $user->findOrFail(auth()->user()->id);

        return $users->roles->where('id', 3)->first();
    }

    public function create(User $user)
    {
        $users = $user->findOrFail(auth()->user()->id);

        return $users->roles->where('id', 3)->first();
    }

    public function update(User $user, AccountingSubscriptionPlan $plan)
    {
        $users = $user->findOrFail(auth()->user()->id);

        return $users->roles->where('id', 3)->first();
    }

    public function delete(User $user, AccountingSubscriptionPlan $plan)
    {
        $users = $user->findOrFail(auth()->user()->id);

        return $users->roles->where('id', 3)->first();
    }
}
