<script setup>
import { computed,ref} from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";

const errors = computed(() => usePage().props.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);
const props = defineProps({users:Object,orders:Object,notifications:Object,companies:Object,companies2:Object});
</script>
<template>

    <head>
        <link :href="$page.props.ziggy.url+'/assets/css/main.css'" rel="stylesheet" type="text/css"/>
    </head>
    <div class="invoice invoice-content invoice-6">
        <div class="back-top-home hover-up mt-30 ml-30">
            <a class="hover-up" href="javascript:history.back()"><i class="fi-rs-home mr-5"></i> برگشت</a>
        </div>

        <div class="invoice-center" style="padding: 30px; line-height: 2;">
    <h3 class="text-brand mb-20 text-center">بسمه تعالی</h3>
    <h3 class="text-brand mb-30 text-center">قرارداد طراحی سایت</h3>

    <p>
        این قراردادبین <template v-if="props.orders.user.profile.gender == 'آقا'">آقای</template> 
        <template v-else>{{ props.orders.user.profile.gender  }}</template> 
        {{ props.orders.user.name + ' ' + props.orders.user.lasst_name  }}
         با شماره ثبت/ شماره ملی{{ props.orders.user.identity.national_code }}
          به نشانی: {{ props.orders.user.profile.address }} که از این پس به عنوان کارفرما(سفارش دهنده) شناخته می شود
          و از طرف دیگر آقای {{ props.companies.name + ' ' + props.companies.lasst_name }}
           با شماره ثبت/ شماره ملی {{ props.companies.identity.national_code }}
            به نشانی: {{ props.companies.profile.address }} به عنوان مجری پروژه  طراحی وب منعقد می گردد
            و طرفین با امضاء این قرارداد خود را ملزم و متعهد به رعایت اجرای کامل و تمام مفاد آن می دانند.
    </p>

    <h5 class="mt-30">ماده ۱ – موضوع قرارداد</h5>
    <p>
       موضوع قرارداد عبارت است از طراحی و پیاده‌سازی وب‌سایت فروشگاهی بر اساس نیازهای اعلام‌شده توسط کارفرما، شامل صفحات و امکانات زیر:
    </p>

    <h5 class="mt-30">صفحاتی که باید طراحی شود</h5>
    <p>
        <template v-for="(item, index) in props.orders.sub_order" :key="item.id">
            <template v-if="item.orderable_type == 'App\\Models\\WebDesign'">
                {{ item.orderable.pages }}
            </template>
        </template> 
    </p>

    <h5 class="mt-30">امکاناتی که باید در سایت ایجاد شود</h5>
    <p>
        <template v-for="(item, index) in props.orders.sub_order" :key="item.id">
            <template v-if="item.orderable_type == 'App\\Models\\WebDesign'">
                {{ item.orderable.basic }}
            </template>
        </template> 
    </p>

    <h5 class="mt-30">ماده ۲ – مدت انجام قرارداد</h5>
    <p>
        مدت زمان انجام پروژه 
        <template v-for="(item, index) in props.orders.sub_order" :key="item.id">
            <template v-if="item.orderable_type == 'App\\Models\\WebDesign'">
                {{ Number(item.orderable.rouzekari).toLocaleString('fa-IR') }}
            </template>
        </template> 
        روز کاری و شروع آن 
        <template v-for="(item, index) in props.orders.sub_order" :key="item.id">
        <template v-if="item.orderable.status == '4'">
            بعد از تاریخ تایید کارشناس {{ props.companies.name_show }} می باشد.
        </template>
        <template v-else>
            در تاریخ
        {{ moment(props.orders.created_at).locale("fa", fa).format('jYYYY/jM/jD') }} 
        می‌باشد.
        </template>
        </template>
    </p>

    <h5 class="mt-30">ماده ۳ – تعهدات مجری</h5>
    <ul>
        <li>انجام فعالیت‌های طراحی مرتبط با موضوع قرارداد و رعایت کیفیت و زمان‌بندی.</li>
        <li>حفظ امانت و نگهداری صحیح مدارک کارفرما.</li>
        <li>عدم ارائه اطلاعات و اسناد کارفرما به اشخاص دیگر.</li>
        <li>انتخاب نام دامنه صرفاً با نظر کارفرما امکان‌پذیر است و پس از تایید قابل تغییر نیست.</li>
        <li>مجری نسبت به دامنه‌های مشابه یا رزروشده توسط اشخاص دیگر مسئولیتی ندارد.</li>
    </ul>

    <h5 class="mt-30">ماده ۴ – تعهدات کارفرما</h5>
    <ul>
        <li>ارائه مدارک و محتوای لازم جهت طراحی سایت.</li>
        <li>پرداخت هزینه‌های قرارداد طبق توافق.</li>
        <li>عدم واگذاری پروژه به شخص ثالث در مدت اجرای قرارداد.</li>
        <li>مسئولیت تمامی محتوای سایت و مسائل قوانین کسب‌وکار اینترنتی با کارفرما است.</li>
        <li>مسئولیت فروش، قیمت‌گذاری و هرگونه امور مالی سایت بر عهده کارفرما می‌باشد.</li>
    </ul>

    <h5 class="mt-30">ماده ۵ – مبلغ قرارداد</h5>
    <p>
        ارزش کل این قرارداد: {{ Number(props.orders.col).toLocaleString('fa-IR') }} ریال  
        می‌باشد.  مبلغ  {{ Number(props.orders.payment).toLocaleString('fa-IR') }} ریال  در هنگام عقد قرارداد و مبلغ {{ Number(props.orders.balance).toLocaleString('fa-IR') }}ریال پس از تحویل نهایی پروژه تسویه می‌گردد.
    </p>

    <h5 class="mt-30">ماده ۶ – حل اختلاف</h5>
    <p>
        در صورت بروز اختلاف، ابتدا ۲ نفر کارشناس منتخب طرفین موضوع را بررسی می‌کنند.  
        در صورت عدم توافق، طرفین حق مراجعه به مراجع قضایی را دارند.
    </p>

    <h5 class="mt-30">ماده ۷ – فسخ قرارداد</h5>
    <p>
        فسخ یک‌طرفه قرارداد بدون دلیل موجه قابل قبول نیست.  
        در صورت فسخ خارج از چارچوب قرارداد، طرف فسخ‌کننده ملزم به پرداخت  
        <template v-for="(item, index) in props.orders.sub_order" :key="item.id">
            <template v-if="item.orderable_type == 'App\\Models\\WebDesign'">
                {{ Number((props.orders.col)* item.orderable.damage/100).toLocaleString('fa-IR')}}
            </template>
        </template> 
         ریال ( <template v-for="(item, index) in props.orders.sub_order" :key="item.id">
            <template v-if="item.orderable_type == 'App\\Models\\WebDesign'">
                {{ Number(item.orderable.damage).toLocaleString('fa-IR')}}
            </template>
        </template> %) خسارت می‌باشد.
    </p>

    <h5 class="mt-30">ماده ۸ – پشتیبانی</h5>
    <p>
        وب‌سایت تحویل‌شده به مدت ۶۰ روز گارانتی رفع خطا دارد.  
        جهت ادامه پشتیبانی پس از پایان گارانتی، قرارداد جداگانه لازم است.
    </p>

    <p class="mt-40">
        این قرارداد در ۹ ماده و به صورت الکترونیکی، با همان اعتبار قرارداد کاغذی، تنظیم گردیده و در تاریخ 
        {{ moment(props.orders.update_at).locale("fa", fa).format('jYYYY/jM/jD') }}
          به امضای طرفین رسیده است. تأیید و اعتبار آن منوط به امضای طرفین می‌باشد.
    </p>

    <div class="row mt-40">
        <div class="col-6 text-center">
            <strong>امضاء کارفرما</strong><br><br>
            
        </div>
        <div class="col-6 text-center">
            <strong>امضاء مجری</strong><br><br>
            
        </div>
    </div>
</div>

    </div>

        <component :is="'script'" :src="$page.props.ziggy.url+'/assets/js/invoice/invoice.js'"></component>
        <component :is="'script'" :src="$page.props.ziggy.url+'/assets/js/vendor/modernizr-3.6.0.min.js'"></component>
        <component :is="'script'" :src="$page.props.ziggy.url+'/assets/js/vendor/jquery-3.6.0.min.js'"></component>

        <component :is="'script'" :src="$page.props.ziggy.url+'/assets/js/invoice/jspdf.min.js'"></component>

</template>
<style>

</style>
