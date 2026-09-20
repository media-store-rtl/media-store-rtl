<?php

namespace App\Http\Controllers;


use Carbon\Carbon;
use App\Models\Bank;
use App\Models\Cart;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Route;
use App\Models\Company;
use App\Models\Deposit;
use App\Models\Payment;
use App\Models\Profile;
use App\Jobs\PaymentJob;
use App\Models\Description;
use Illuminate\Http\Request;
use App\Http\Utilities\Wallet;
use Shetabit\Multipay\Invoice;
use Illuminate\Support\Facades\Gate;
use App\Http\Utilities\PaymentCreate;
use App\Notifications\PaymentNotification;
use Illuminate\Support\Facades\Notification;
use Shetabit\Multipay\Exceptions\InvalidPaymentException;
use Shetabit\Payment\Facade\Payment as ShetabitPayment;
use Illuminate\Support\Facades\Http;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, User $user, Payment $payment, Company $company, Route $route, Deposit $deposit)
    {
        // Gate::authorize('viewAny', $payment);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
        $notifications = $users->unreadnotifications;
        $transaction = $request->session()->has('transaction') ? $request->session()->get('transaction') : null;
        $statuses = $request->session()->has('statuses') ? $request->session()->get('statuses') : null;
        $ids = $request->session()->has('ids') ? $request->session()->get('ids') : null;
        $prices = $request->session()->has('prices') ? $request->session()->get('prices') : null;
        $payments = $payment->where('user_id', auth()->user()->id);
        $transactions = $deposit->where('user_id', auth()->user()->id)->union($payments)->orderBy('created_at', 'desc')->paginate(9);
        $id = $request->query();
        $users->notifications->find($id)->MarkAsRead();
        $companies = $user->with('image')->first();
        $descriptions = $route->where('name', $request->path())->first() && $route->where('name', $request->path())->first()->descriptions ?
            $route->where('name', $request->path())->first()->descriptions->first() : null;
        $wallet = Wallet::all($users);
        // dd($wallet );
        return Inertia::render('Users/Buyer/Mali/payment-index', [
            'cart' => [
                'products' => $cart->products,
                'count' => $cart->count,
                'price' => $cart->price,
                'discount' => $cart->discount,
                'coupon' => $cart->coupon,
                'total' => $cart->total,
                'tax' => $cart->tax,
                'col' => $cart->col,
                'payment' => $cart->payment,
                'balance' => $cart->balance
            ],
            'transactions' => $transactions,
            'transaction' => $transaction,
            'statuses' => $statuses,
            'ids' => $ids,
            'prices' => $prices,
            'users' => $users,
            'notifications' => $notifications,
            'companies' => $companies,
            'descriptions' => $descriptions,
            'wallet' => $wallet
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, User $user, Bank $bank, Company $company, Route $route)
    {

        // Gate::authorize('viewAny', $payment);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
        $notifications = $users->unreadnotifications;
        $banks = $bank->with('menu')->where('user_id', auth()->user()->id)->where('status', 4)->get();
        $alert = $request->session()->has('alert') ? $request->session()->get('alert') : null;
        $time = Carbon::now();
        $companies = $user->with('image')->first();
        $descriptions = $route->where('name', $request->path())->first() && $route->where('name', $request->path())->first()->descriptions ?
            $route->where('name', $request->path())->first()->descriptions->first() : null;
        $menus = $route->where('name', $request->path())->first() && $route->where('name', $request->path())->first()->menus ?
            $route->where('name', $request->path())->first()->menus : null;
        $wallet = Wallet::all($users);
        // dd($wallet );
        return Inertia::render('Users/Buyer/Mali/payment-create', [
            'cart' => [
                'products' => $cart->products,
                'count' => $cart->count,
                'price' => $cart->price,
                'discount' => $cart->discount,
                'coupon' => $cart->coupon,
                'total' => $cart->total,
                'tax' => $cart->tax,
                'col' => $cart->col,
                'payment' => $cart->payment,
                'balance' => $cart->balance
            ],
            'banks' => $banks,
            'alert' => $alert,
            'path' => $request->path(),
            'users' => $users,
            'notifications' => $notifications,
            'now' => $time,
            'companies' => $companies,
            'menus' => $menus,
            'descriptions' => $descriptions,
            'wallet' => $wallet
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user, Payment $payment, Company $company)
    {
        // Gate::authorize('viewAny', $payment);
        $companies = $company->first();
        $users = $user->with('file')->with('profile')->with('roles')->find(auth()->user()->id);
        $wallet = Wallet::all($users);

        // dd($request);
        if ($request->id) {
            // Gate::authorize('viewAny', $payment);
            $users = $user->with('file')->with('profile')->find(auth()->user()->id);
            if ($users->profile->wallet >= $request->wallet) {

                if ($users->profile->wallet + $payment->price >= $request->price) {

                    // $users->profile->update([
                    //     'wallet'=> $users->profile->wallet + ($payment->price - $request->price)
                    // ]);

                    $payment->update([
                        'transaction' => $request->transaction,
                        'price' => $request->price,
                        'bank_name' => $request->bank,
                        'account_name' => $request->accountName,
                        'cart_number' => 0,
                        'code_p' => 0,
                        'code_e' => 0,
                        'date' => $request->date,
                        'financialable_type' => User::class,
                        'financialable_id' => auth()->user()->id,
                    ]);

                    PaymentJob::dispatch($payment->find($request->id))->delay(now()->addMinute((int)$companies->job));
                    $request->session()->flash(
                        'alert',
                        [
                            'title' => 'برداشت!',
                            'text' => 'باموفقیت بروز شد.',
                            'icon' => 'success',
                            'button' => 'ok'
                        ]
                    );

                    return redirect()->back();
                } else {
                    $request->session()->flash(
                        'alert',
                        [
                            'title' => 'برداشت!',
                            'text' => 'موجودی کافی نمی باشد.',
                            'icon' => 'error',
                            'button' => 'ok'
                        ]
                    );
                    return redirect()->back();
                }
            } else {
                $request->session()->flash(
                    'alert',
                    [
                        'title' => 'برداشت!',
                        'text' => 'موجودی کافی نمی باشد.',
                        'icon' => 'error',
                        'button' => 'ok'
                    ]
                );

                return redirect()->back();
            }
        }
        if ($request->transaction['name'] == 'برداشت') {

            if ($wallet >= $request->price) {

                $payments = PaymentCreate::all($request);

                PaymentJob::dispatch($payments)->delay(now()->addMinute((int)$companies->job));
                $request->session()->flash(
                    'alert',
                    [
                        'title' => 'برداشت!',
                        'text' => 'باموفقیت ثبت شد.',
                        'icon' => 'success',
                        'button' => 'ok'
                    ]
                );
                return redirect()->back();
            } else {
                $request->session()->flash(
                    'alert',
                    [
                        'title' => 'برداشت!',
                        'text' => 'ثبت نشد، موجوی کیف پول کافی نمی باشد.',
                        'icon' => 'error',
                        'button' => 'ok'
                    ]
                );
                return redirect()->back();
            }
        } else {
            abort(404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        return abort(404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment, User $user, Bank $bank, Request $request, Company $company, Route $route)
    {
        Gate::authorize('viewAny', $payment);
        $oldCart = $request->session()->has('cart') ? $request->session()->get('cart') : null;
        $cart = new Cart($oldCart);
        $users = $user->with(['image' => fn ($q) => $q->where('status', 4)])->with('file')->with('profile')->with('roles')->findOrfail(auth()->user()->id);
        $notifications = $users->unreadnotifications;
        $time = new Carbon;
        $companies = $company->with('image')->first();
        $banks = $bank->where('user_id', auth()->user()->id)->get();
        $alert = $request->session()->has('alert') ? $request->session()->get('alert') : null;
        $descriptions = $route->where('name', 'route(payment.edit)')->first() && $route->where('name', 'route(payment.edit)')->first()->descriptions ?
            $route->where('name', 'route(payment.edit)')->first()->descriptions->first() : null;
        $menus = $route->where('name', 'route(payment.edit)')->first() && $route->where('name', 'route(payment.edit)')->first()->menus ?
            $route->where('name', 'route(payment.edit)')->first()->menus : null;
        $wallet = Wallet::all($users);

        if ($payment->status == 0) {

            return Inertia::render('Users/Buyer/Mali/payment-edit', [
                'cart' => [
                    'products' => $cart->products,
                    'count' => $cart->count,
                    'price' => $cart->price,
                    'discount' => $cart->discount,
                    'coupon' => $cart->coupon,
                    'total' => $cart->total,
                    'tax' => $cart->tax,
                    'col' => $cart->col,
                    'payment' => $cart->payment,
                    'balance' => $cart->balance
                ],
                'banks' => $banks,
                'alert' => $alert,
                'users' => $users,
                'notifications' => $notifications,
                'payment' => $payment,
                'companies' => $companies,
                'descriptions' => $descriptions,
                'path' => 'route(payment.edit)',
                'menus' => $menus,
                'now' => $time,
                'payment' => $payment,
                'wallet' => $wallet
            ]);
        } else {
            abort(401);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment, User $user, Profile $profile)
    {
        return abort(404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Payment $payment, User $user)
    {
        Gate::authorize('viewAny', $payment);
        $users = $user->with('file')->with('profile')->findOrfail(auth()->user()->id);

        if ($payment->status == 0 && $payment->user_id == $users->id) {
            // $payment->delete();
            $payment->update([
                'status' => 3
            ]);

            $users->profile->update([
                'wallet' => $users->profile->wallet + $payment->price
            ]);

            $request->session()->flash(
                'alert',
                [
                    'title' => 'درخواست!',
                    'text' => 'باموفقیت حذف شد.',
                    'icon' => 'success',
                    'button' => 'ok'
                ]
            );

            return redirect()->back();
        } else {
            return abort(401);
        }
    }

    /**
     * verify the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function verify(Request $request, Payment $payment)
    {

        if ($request->ResCode == '0') {
            $uuid = $request->input('RefId');
            $transactions = Deposit::where('transactionId', $uuid)->first();
            $errors = [
                0   => 'تراکنش با موفقیت انجام شد',
                11  => 'شماره کارت نامعتبر است',
                12  => 'موجودی کافی نیست',
                13  => 'رمز نادرست است',
                14  => 'تعداد دفعات وارد کردن رمز بیش از حد مجاز است',
                15  => 'کارت نامعتبر است',
                16  => 'دفعات برداشت وجه بیش از حد مجاز است',
                17  => 'کاربر از انجام تراکنش منصرف شده است',
                18  => 'تاریخ انقضای کارت گذشته است',
                19  => 'مبلغ برداشت وجه بیش از حد مجاز است',
                21  => 'پذیرنده نامعتبر است',
                23  => 'خطای امنیتی رخ داده است',
                24  => 'اطلاعات کاربری پذیرنده نامعتبر است',
                25  => 'مبلغ نامعتبر است',
                31  => 'پاسخ نامعتبر است',
                32  => 'فرمت اطلاعات وارد شده صحیح نمی‌باشد',
                33  => 'حساب نامعتبر است',
                34  => 'خطای سیستمی',
                35  => 'تاریخ نامعتبر است',
                41  => 'شماره درخواست تکراری است',
                42  => 'تراکنش Sale یافت نشد',
                43  => 'قبال درخواست Verify داده شده است',
                44  => 'درخواست Verify یافت نشد',
                45  => 'تراکنش Settle شده است',
                46  => 'تراکنش Settle نشده است',
                47  => 'تراکنش Settle یافت نشد',
                48  => 'تراکنش Reverse شده است',
                51  => 'تراکنش تکراری است',
                54  => 'تراکنش مرجع موجود نیست',
                55  => 'تراکنش نامعتبر است',
                61  => 'خطا در واریز',
                62  => 'مسیر back call می‌بایست در دامنه ثبت شده باشد',
                98  => 'سقف استفاده از رمز ایستا به پایان رسیده است',
                995 => 'تعلق کارت بانکی به مشتری احراز نشد',
                111 => 'صادر کننده کارت نامعتبر است',
                112 => 'خطای سوئیچ صادر کننده کارت',
                113 => 'پاسخی از صادر کننده کارت دریافت نشد',
                114 => 'دارنده کارت مجاز به انجام این تراکنش نیست',
                412 => 'شناسه قبض نادرست است',
                413 => 'شناسه پرداخت نادرست است',
                414 => 'سازمان صادر کننده قبض نامعتبر است',
                415 => 'زمان جلسه کاری به پایان رسیده است',
                416 => 'خطا در ثبت اطلاعات',
                417 => 'شناسه پرداخت کننده نامعتبر است',
                418 => 'اشکال در تعریف اطلاعات مشتری',
                419 => 'تعداد دفعات ورود اطلاعات از حد مجاز گذشته است',
                421 => 'IP نامعتبر است',
            ];

            if ($transactions) {
                try {
                    // مقداردهی SoapClient
                    $soap = new \SoapClient('https://bpm.shaparak.ir/pgwchannel/services/pgw?wsdl', [
                        'encoding'   => 'UTF-8',
                        'trace'      => true,
                        'exceptions' => true,
                    ]);

                    $params = [
                        'terminalId'      => config('payment.drivers.behpardakht.terminalId'), // رشته
                        'userName'        => config('payment.drivers.behpardakht.username'),   // رشته
                        'userPassword'    => config('payment.drivers.behpardakht.password'),   // رشته
                        'orderId'         => (int) $request->SaleOrderId,
                        'saleOrderId'     => (int) $request->SaleOrderId,
                        'saleReferenceId' => (int) $request->SaleReferenceId,
                    ];
                    $result = $soap->__soapCall('bpVerifyRequest', [$params]);
                    $statusCode = (int) $result->return;
                    $transactions->update([
                        'status' => 4,
                        // 'transaction' => $errors[$statusCode] ?? 'خطای نامشخص',
                        'price' => $request->FinalAmount,
                        'cart_number' => $request->CardHolderPan,
                        'code_p' => $request->SaleReferenceId,
                        'code_e' => $request->SaleReferenceId,
                    ]);

                    $request->session()->flash('alert', [
                        'title'  => 'تراکنش موفق',
                        // 'text'   => "تراکنش با موفقیت انجام شد. شماره مرجع: {$request->SaleReferenceId}",
                        'text' => 'تراکنش باموفقیت انجام و کیف پول شما شارژ شد،اکنون با کیف پول خرید نمایید.',
                        'icon'   => 'success',
                        'button' => 'ok',
                    ]);
                } catch (\Shetabit\Multipay\Exceptions\InvalidPaymentException $exception) {
                    // ❌ خطا
                    $transactions->update([
                        'status' => 3,
                        'transaction' => $errors[$statusCode] ?? 'خطای نامشخص',
                    ]);

                    $request->session()->flash('alert', [
                        'title'  => 'خطا',
                        'text'   => "تراکنش تأیید نشد: {$exception->getMessage()}",
                        'icon'   => 'error',
                        'button' => 'ok',
                    ]);
                }
            }

            return Inertia::location(route('shop-checkout.index'));
        } else if ($request->Status == '2') {
            $uuid = $request->input('ResNum');
            $transactions = Deposit::where('uuid', $uuid)->first();
            if ($transactions) {
                $response = Http::post('https://sep.shaparak.ir/verifyTxnRandomSessionkey/ipg/VerifyTransaction', [
                    'RefNum' => $request->RefNum,
                    'TerminalNumber' => $request->TerminalId,
                ]);
                // dd($response->json(),$response->json()['ResultCode'] == '0' );
                if ($response->json()['ResultCode'] == '0') {



                    $financial = $transactions->update([
                        'status' => 4,
                        'price' => $response->json()['TransactionDetail']['AffectiveAmount'],
                        'cart_number' => $response->json()['TransactionDetail']['MaskedPan'],
                        'code_p' => $response->json()['TransactionDetail']['StraceNo'],
                        'code_e' => $response->json()['TransactionDetail']['RefNum'],
                        'date' => $response->json()['TransactionDetail']['StraceDate'],
                    ]);
                    $request->session()->flash(
                        'alert',
                        [
                            'title' => '!تراکنش',
                            'text' => 'تراکنش باموفقیت انجام و کیف پول شما شارژ شد،اکنون با کیف پول خرید نمایید.',
                            'icon' => 'success',
                            'button' => 'ok'
                        ]
                    );
                }
                // $request->session()->remove('cart');
            } else {
                $request->session()->flash(
                    'alert',
                    [
                        'title' => '!تراکنش',
                        'text' => 'انجام نشد مجدد تلاش نمایید.',
                        'icon' => 'error',
                        'button' => 'ok'
                    ]
                );
            }

            return Inertia::location(route('shop-checkout.index'));
        } else if ($request->respcode == '0') {
            $uuid = $request->input('invoiceid');
            $transactions = Deposit::where('uuid', $uuid)->first();
            $errors = [
                0   => 'تراکنش موفق – پرداخت انجام شده',
                -1  => 'کاربر از ادامه پرداخت انصراف داده است',
                3   => 'پذیرنده یا پارامترهای ارسالی نامعتبر است',
                12  => 'خطا در فرمت درخواست یا پارامتر نامعتبر',
                13  => 'خطا در فرمت درخواست یا پارامتر نامعتبر',
                14  => 'خطا در فرمت درخواست یا پارامتر نامعتبر',
                15  => 'خطا در فرمت درخواست یا پارامتر نامعتبر',
                21  => 'تراکنش نامعتبر یا انجام نشده', // ← اضافه شد
                51  => 'موجودی کافی نیست',
                54  => 'تاریخ انقضای کارت گذشته است',
                55  => 'رمز یا CVV2 اشتباه وارد شده است',
                42  => 'تراکنش مشکوک یا مشکوک به تقلب تشخیص داده شد',
                91  => 'اختلال در شبکه بانکی (خطای ارتباط)',
                96  => 'خطای داخلی سیستم بانکی',
                -2  => 'خطای دریافت توکن یا احراز هویت پذیرنده',
                100 => 'خطای ورود OTP یا غیرفعال شدن دسترسی کاربر به دلیل تکرار رمز اشتباه',
            ];

            if ($transactions) {
                try {
                    $soap = new \SoapClient('https://bpm.shaparak.ir/pgwchannel/services/pgw?wsdl', [
                        'encoding'   => 'UTF-8',
                        'trace'      => true,
                        'exceptions' => true,
                    ]);

                    $params = [
                        'terminalId'      => config('payment.drivers.sepehr.terminalId'),
                        'userName'        => config('payment.drivers.sepehr.username'),
                        'userPassword'    => config('payment.drivers.sepehr.password'),
                        'orderId'         => (int)  $transactions->id,
                        'saleOrderId'     => (int)  $transactions->id,
                        'saleReferenceId' => (int) $request->input('rrn'),
                    ];

                    $result = $soap->__soapCall('bpVerifyRequest', [$params]);
                    $statusCode = (int) $result->return;
                    $transactions->update([
                        'status' => 4,
                        // 'transaction' => $errors[$statusCode] ?? 'خطای نامشخص',
                        'price' => (int) $request->input('amount'),
                        'cart_number' => $request->input('cardnumber'),
                        'code_p' => $request->input('rrn'),
                        'code_e' => $request->input('tracenumber'),
                    ]);

                    $request->session()->flash('alert', [
                        'title'  => 'تراکنش موفق',
                        // 'text'   => "تراکنش با موفقیت انجام شد. شماره مرجع: {$request->SaleReferenceId}",
                        'text' => 'تراکنش باموفقیت انجام و کیف پول شما شارژ شد،اکنون با کیف پول خرید نمایید.',
                        'icon'   => 'success',
                        'button' => 'ok',
                    ]);
                } catch (\Shetabit\Multipay\Exceptions\InvalidPaymentException $exception) {
                    // ❌ خطا
                    $transactions->update([
                        'status' => 3,
                        'transaction' => $errors[$statusCode] ?? 'خطای نامشخص',
                    ]);

                    $request->session()->flash('alert', [
                        'title'  => 'خطا',
                        'text'   => "تراکنش تأیید نشد: {$exception->getMessage()}",
                        'icon'   => 'error',
                        'button' => 'ok',
                    ]);
                }
            }
            return Inertia::location(route('shop-checkout.index'));
        } else {
            if ($request->ResCode) {

                $uuid = $request->input('RefId');
                $transactions = Deposit::where('transactionId', $uuid)->first();
                $errors = [
                    0   => 'تراکنش با موفقیت انجام شد',
                    11  => 'شماره کارت نامعتبر است',
                    12  => 'موجودی کافی نیست',
                    13  => 'رمز نادرست است',
                    14  => 'تعداد دفعات وارد کردن رمز بیش از حد مجاز است',
                    15  => 'کارت نامعتبر است',
                    16  => 'دفعات برداشت وجه بیش از حد مجاز است',
                    17  => 'کاربر از انجام تراکنش منصرف شده است',
                    18  => 'تاریخ انقضای کارت گذشته است',
                    19  => 'مبلغ برداشت وجه بیش از حد مجاز است',
                    21  => 'پذیرنده نامعتبر است',
                    23  => 'خطای امنیتی رخ داده است',
                    24  => 'اطلاعات کاربری پذیرنده نامعتبر است',
                    25  => 'مبلغ نامعتبر است',
                    31  => 'پاسخ نامعتبر است',
                    32  => 'فرمت اطلاعات وارد شده صحیح نمی‌باشد',
                    33  => 'حساب نامعتبر است',
                    34  => 'خطای سیستمی',
                    35  => 'تاریخ نامعتبر است',
                    41  => 'شماره درخواست تکراری است',
                    42  => 'تراکنش Sale یافت نشد',
                    43  => 'قبال درخواست Verify داده شده است',
                    44  => 'درخواست Verify یافت نشد',
                    45  => 'تراکنش Settle شده است',
                    46  => 'تراکنش Settle نشده است',
                    47  => 'تراکنش Settle یافت نشد',
                    48  => 'تراکنش Reverse شده است',
                    51  => 'تراکنش تکراری است',
                    54  => 'تراکنش مرجع موجود نیست',
                    55  => 'تراکنش نامعتبر است',
                    61  => 'خطا در واریز',
                    62  => 'مسیر back call می‌بایست در دامنه ثبت شده باشد',
                    98  => 'سقف استفاده از رمز ایستا به پایان رسیده است',
                    995 => 'تعلق کارت بانکی به مشتری احراز نشد',
                    111 => 'صادر کننده کارت نامعتبر است',
                    112 => 'خطای سوئیچ صادر کننده کارت',
                    113 => 'پاسخی از صادر کننده کارت دریافت نشد',
                    114 => 'دارنده کارت مجاز به انجام این تراکنش نیست',
                    412 => 'شناسه قبض نادرست است',
                    413 => 'شناسه پرداخت نادرست است',
                    414 => 'سازمان صادر کننده قبض نامعتبر است',
                    415 => 'زمان جلسه کاری به پایان رسیده است',
                    416 => 'خطا در ثبت اطلاعات',
                    417 => 'شناسه پرداخت کننده نامعتبر است',
                    418 => 'اشکال در تعریف اطلاعات مشتری',
                    419 => 'تعداد دفعات ورود اطلاعات از حد مجاز گذشته است',
                    421 => 'IP نامعتبر است',
                ];
                $statusCode = (int) $request->ResCode;
                $financial = $transactions->update([
                    'status' => 3,
                    'transaction' => $errors[$statusCode] ?? 'خطای نامشخص'
                ]);

                $request->session()->flash(
                    'alert',
                    [
                        'title' => '!تراکنش',
                        'text' => "تراکنش تأیید نشد: {$errors[$statusCode]}",
                        'icon' => 'error',
                        'button' => 'ok'
                    ]
                );
            } else if ($request->Status) {
                $uuid = $request->input('ResNum');
                $transactions = Deposit::where('uuid', $uuid)->first();
                $errors = [
                    1  => 'کاربر انصراف داده است',
                    2  => 'پرداخت با موفقیت انجام شد',
                    3  => 'پرداخت انجام نشد',
                    4  => 'کاربر در بازه زمانی تعیین شده پاسخی ارسال نکرده است',
                    5  => 'پارامترهای ارسالی نامعتبر است',
                    8  => 'آدرس سرور پذیرنده نامعتبر است (در پرداخت های بر پایه توکن)',
                    10 => 'توکن ارسال شده یافت نشد',
                    11 => 'با این شماره ترمینال فقط تراکنش های توکنی قابل پرداخت هستند',
                    12 => 'شماره ترمینال ارسال شده یافت نشد',
                    21 => 'محدودیت های مدل چند حسابی رعایت نشده',
                ];
                $statusCode = (int) $request->Status;
                $financial = $transactions->update([
                    'status' => 3,
                    'transaction' => $errors[$statusCode] ?? 'خطای نامشخص'
                ]);

                $request->session()->flash(
                    'alert',
                    [
                        'title' => '!تراکنش',
                        'text' => "تراکنش تأیید نشد: {$errors[$statusCode]}",
                        'icon' => 'error',
                        'button' => 'ok'
                    ]
                );
            } else if ($request->respcode) {
                $uuid = $request->input('invoiceid');
                $transactions = Deposit::where('uuid', $uuid)->first();
                // dd($request, $uuid, $transactions);
                $errors = [
                    0   => 'تراکنش موفق – پرداخت انجام شده',
                    -1  => 'کاربر از ادامه پرداخت انصراف داده است',
                    3   => 'پذیرنده یا پارامترهای ارسالی نامعتبر است',
                    12  => 'خطا در فرمت درخواست یا پارامتر نامعتبر',
                    13  => 'خطا در فرمت درخواست یا پارامتر نامعتبر',
                    14  => 'خطا در فرمت درخواست یا پارامتر نامعتبر',
                    15  => 'خطا در فرمت درخواست یا پارامتر نامعتبر',
                    21  => 'تراکنش نامعتبر یا انجام نشده', // ← اضافه شد
                    51  => 'موجودی کافی نیست',
                    54  => 'تاریخ انقضای کارت گذشته است',
                    55  => 'رمز یا CVV2 اشتباه وارد شده است',
                    42  => 'تراکنش مشکوک یا مشکوک به تقلب تشخیص داده شد',
                    91  => 'اختلال در شبکه بانکی (خطای ارتباط)',
                    96  => 'خطای داخلی سیستم بانکی',
                    -2  => 'خطای دریافت توکن یا احراز هویت پذیرنده',
                    100 => 'خطای ورود OTP یا غیرفعال شدن دسترسی کاربر به دلیل تکرار رمز اشتباه',
                ];

                $statusCode = (int) $request->respcode;
                $financial = $transactions->update([
                    'status' => 3,
                    'transaction' => $errors[$statusCode] ?? 'خطای نامشخص'
                ]);

                $request->session()->flash(
                    'alert',
                    [
                        'title' => '!تراکنش',
                        'text' => "تراکنش تأیید نشد: {$errors[$statusCode]}",
                        'icon' => 'error',
                        'button' => 'ok'
                    ]
                );
            }
            return Inertia::location(route('shop-checkout.index'));
        }
    }
}
