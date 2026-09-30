<?php

namespace App\Http\Controllers;

use App\Models\AccountingSubscriptionPlan;
use Inertia\Inertia;
use Inertia\Response;

class AccountingSubscriptionPlanController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Guest/accounting-plan', [
            'plans' => AccountingSubscriptionPlan::where('status', 4)
                ->orderBy('price')
                ->get(),
        ]);
    }
}
