<script setup>

import { computed,ref,watch} from 'vue';
import { Head, Link, useForm , usePage} from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
import DatePicker from 'vue3-persian-datetime-picker';
import swal from 'sweetalert2';
import StarRating from 'vue-star-rating';

const errors = computed(() => usePage().props.errors);

const props = defineProps({tarahis:Object,users:Object,notifications:Object,names:Object,
    ids:Object,companies:Object,descriptions:Object,menus:Object,time:String,path:String,
    alert:Object,times:{type: [Object, String],default: () => ({})},statuses:{type: [Object, String],default: () => ({})}
    ,subjects:{type: [Object, String],default: () => ({})},wallet:Number,cart:Object,companies2:Object
});

const form = useForm({
    name: null,
    status:props.statuses?props.statuses:null,
    id:null,
    dargah: null,
    menu : null,
    recepiant:null,
    subject:props.subjects?props.subjects:null,
    text:null,
    product:null,
    tarahi:null,
    file: null,
    price:null,
    rate:null,
    expired:null,
    time:props.times !== 'All'? props.times:null,
});

const validate = (text)=>{
    swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
    }}).fire({
        title: text,
        icon:'error',
    })
}


watch(() => props.alert, (val) => {
  if (val) {
    if (val.title) {
      swal.fire(val.title, val.text, val.icon);
    } else {
      swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', swal.stopTimer);
          toast.addEventListener('mouseleave', swal.resumeTimer);
        }
      }).fire({
        title: val.text,
        icon: val.icon,
      });
    }
  }
});

watch(() => errors.value, (val) => {
  if (val && Object.keys(val).length > 0) {
    Object.values(val).forEach((errMsg) => {
      swal
        .mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
          },
        })
        .fire({
          title: errMsg,
          icon: "error",
        });
    });
  }
});
const designer = ref();
const submitDestroy = () => {
    form.id = designer.value.id
    if( form.id)
     {
        form.delete(route('tarahi.destroy',form.id));
    }
    else
    {
        let text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
};

const submitDesigner = (id) => {
    designer.value = id
}
const submitFinal = () => {

    form.id = designer.value
    form.name = 'karfarma'
    if(form.id && form.price && form.rate && form.text)
    {
        form.post(route('tarahi.store'),
       
        )

        designer.value = null
    }
    else
    {
        let text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
};

const submitExpired = () => {
    form.id = designer.value.id
    form.name = 'karfarma'
    if(form.id && form.expired)
    {
        form.post(route('tarahi.store'))
    }
    else
    {
        let text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
}

const submit = () => {

    if(form.subject == null && form.status == null && form.time == null)
    {
        let text
        text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
    else
    {
        form.get(route('tarahi.index')
        );
    }

};

const getPageUrl = (baseUrl, page) => {
    if (typeof window !== 'undefined') {
        let queryString = window.location.search;

        // حذف پارامتر page از URL قبلی
        queryString = queryString.replace(/(\?|&)page=\d+/, '');

        // ساخت URL جدید با پارامتر page جدید
        let newUrl = `${baseUrl}?page=${page}${queryString ? '&' + queryString.substring(1) : ''}`;
        return newUrl;
    }
    return `${baseUrl}?page=${page}`; // در محیط سرور فقط این URL بدون query string
};

const pagination = ref(props.tarahis);
</script>
<template>
    <body >
        <div class="screen-overlay" ></div>
        <Header :cart="props.cart"  :wallet="props.wallet" :alert="props.alert" :users="props.users"
                    :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
        <main class="main-wrap rtl">
                <section class="content-main">
                    <div class="row content-header">
                        <div class="d-flex col-sm-12">
                            <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                            <td class="me-auto">
                                <!-- <Link :href="route('product.create')" class="btn btn-primary btn-sm rounded font-sm">ایجاد</Link> -->
                            </td>
                        </div>
                        <div class="col-sm-12">
                            <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                        </div>
                    </div>
                    <div class="mb-4 bg-white"  v-if="props.tarahis.total > 0">
                        <header class="card-header">
                            <div class="row align-items-center">
                                <div class="col col-check flex-grow-0">
                                    <div class="form-check ms-2">
                                        <input class="form-check-input" type="checkbox" value="">
                                    </div>
                                </div>
                                <div class="col-md-3 col-12 ms-auto mb-md-0 mb-3">

                                    <select class="form-select" v-model.lazy="form.subject" @change="submit">
                                        <option value="All"> همه دسته بندی ها</option>
                                        <template v-for="menu,index in props.menus" :key="index">
                                            <option v-for="child,index in menu.children" :key="index" :value="child.id">{{ child.name }}</option>
                                        </template>
                                    </select>
                                </div>
                                <div class="col-md-2 col-6">
                                    <!-- <input type="date" v-model.lazy="form.time" class="form-control" @change="submit"> -->
                                    <date-picker v-model="form.time" format="YYYY-MM-DD" display-format="dddd jDD jMMMM jYYYY"  color="#1ABC9C" type="date" @change="submit"></date-picker>
                                </div>

                                <div class="col-md-2 col-6">
                                    <select class="form-select" v-model.lazy="form.status" @change="submit">
                                        <option value="All">همه وضعیت ها</option>
                                        <option value="0">ثبت</option>
                                        <option value="1">انتظار</option>
                                        <option value="2">بررسی</option>
                                        <option value="3">منقضی</option>
                                        <option value="4">منتشر</option>
                                        <option value="6">تمام شده</option>
                                    </select>
                                </div>
                            </div>
                        </header>
                        <div class="card-body" v-if="props.tarahis">
                            <div class="row gx-5">
                                <div class="col-lg-9">
                                    <section class="content-body p-xl-4">
                                        <div class="table-responsive">
                                            <article class="itemlist">
                                                <div v-if="props.tarahis.total > 0 " class="table table-hover">
                                                    <thead>
                                                        <tr class="col">
                                                            <th scope="col">شناسه</th>
                                                            <th scope="col">عنوان</th>
                                                            <th scope="col">دسته بندی</th>
                                                            <th scope="col">مبلغ</th>
                                                            <th scope="col">تاریخ</th>
                                                            <th scope="col">انقضا</th>
                                                            <th scope="col">وضعیت</th>
                                                            <th scope="col">عملیات</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody >
                                                        <tr v-for="(tarahi,index) in props.tarahis.data" :key="index">
                                                            <td >{{(tarahi.id).toLocaleString("fa-IR")}}</td>
                                                            <td v-if="tarahi.status == 4 || tarahi.status == 6">
                                                                <Link :href="route('website-design.show',[tarahi.slug])">
                                                                    <div class="left">
                                                                        <img v-if="tarahi.image" :src="$page.props.ziggy.url +'/storage/' +tarahi.image.url" class="img-sm img-thumbnail" :alt="tarahi.title">
                                                                        <img v-else-if="props.companies && props.companies.image" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="img-sm img-thumbnail" :alt="tarahi.title">
                                                                    </div>
                                                                    <div class="info">
                                                                        <h6 class="mb-0 text-nofull"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">{{tarahi.title}}</span></span></h6>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td v-else>
                                                                <Link href="#">
                                                                    <div class="left">
                                                                        <img v-if="tarahi.image" :src="$page.props.ziggy.url +'/storage/' +tarahi.image.url" class="img-sm img-thumbnail" :alt="tarahi.title">
                                                                        <img v-else-if="props.companies && props.companies.image" :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="img-sm img-thumbnail" :alt="tarahi.title">
                                                                    </div>
                                                                    <div class="info">
                                                                        <h6 class="mb-0 text-nofull"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">{{tarahi.title}}</span></span></h6>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td>{{tarahi.type.name}}</td>

                                                            <td v-if="tarahi.total !== null">{{Number(tarahi.total).toLocaleString("fa-IR")}}</td>
                                                            <td v-else-if="tarahi.price > 0">{{Number(tarahi.price).toLocaleString("fa-IR")}}</td>
                                                            <td v-else>تعیین نشده</td>
                                                            <td >
                                                                {{ moment(tarahi.created_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                                            </td>
                                                            <td v-if="tarahi.status < 5">
                                                                {{ moment(tarahi.expired_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                                            </td>
                                                            <td v-else>
                                                                {{ moment(tarahi.date).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                                            </td>
                                                            <td>
                                                                <span v-if="tarahi.status == 0" class="badge badge-pill badge-soft-info">ثبت</span>
                                                                <span v-if="tarahi.status == 1" class="badge badge-pill badge-soft-warning">انتظار</span>
                                                                <span v-if="tarahi.status == 2"  class="badge badge-pill badge-soft-secondary">در حال واگذاری</span>
                                                                <span v-if="tarahi.status == 3" class="badge badge-pill badge-soft-danger"> منقضی</span>
                                                                <span v-if="tarahi.status == 4" class="badge badge-pill badge-soft-success">منتشر</span>
                                                                <span v-if="tarahi.status == 5" class="badge badge-pill badge-soft-pink">واگذار شده</span>
                                                                <span v-if="tarahi.status == 6" class="badge badge-pill badge-soft-dark">تمام شده</span>
                                                                <span v-if="tarahi.status == 7" class="badge badge-pill badge-soft-info">ثبت نظر</span>
                                                                <span v-if="tarahi.status == 8" class="badge badge-pill badge-soft-warning">بارگذاری فایل</span>
                                                            </td>
                                                            <td class="text-end" v-if="tarahi.status > 3 || tarahi.status < 3">
                                                                <div class="dropdown">
                                                                    <a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"> <i class="material-icons md-more_horiz"></i> </a>
                                                                    <div class="dropdown-menu">
                                                                        <Link v-if="tarahi.status == 0" class="dropdown-item" :href="route('tarahi.show',[tarahi.id])">ویرایش جزئیات</Link>
                                                                        <Link v-if="tarahi.status == 4 || tarahi.status == 2" class="dropdown-item" :href="route('reqTarahi.show',[tarahi.id])">پیشنهادات</Link>
                                                                        <Link v-if="tarahi.status == 4 || tarahi.status == 6" class="dropdown-item" :href="route('project.show',[tarahi.slug])">نمایش جزئیات</Link>
                                                                        <button v-if="tarahi.status == 8 && moment(tarahi.date).locale('fa', fa).format('jYYYY/jM/jD HH:mm') < moment(props.time).locale('fa', fa).format('jYYYY/jM/jD HH:mm') || tarahi.status == 5 && moment(tarahi.date).locale('fa', fa).format('jYYYY/jM/jD HH:mm') < moment(props.time).locale('fa', fa).format('jYYYY/jM/jD HH:mm')" type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop5" @click="submitDesigner(tarahi)">تمدید انقضا</button>
                                                                        <Link v-if="tarahi.status == 5 && tarahi.register_designer.file || tarahi.status == 7 && tarahi.register_designer.file || tarahi.status == 8 && tarahi.register_designer.file"  class="dropdown-item" :href="route('reqTarahi.show',[tarahi.id])">نمایش فایل</Link>
                                                                        <button v-if="tarahi.status == 8" type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop3" @click="submitDesigner(tarahi)">اتمام پروژه</button>
                                                                        <Link v-if="tarahi.status !== 3 && tarahi.status == 0 || tarahi.status !== 3 && tarahi.status == 1 ||tarahi.status !== 3 && tarahi.status == 4" class="dropdown-item text-danger" :href="route('tarahi.destroy',[tarahi.id])" method="delete" as="button">لغو</Link>
                                                                        <!-- <Link v-if="tarahi.status !== 3 && tarahi.status == 5 || tarahi.status !== 3 && tarahi.status == 8" class="dropdown-item text-danger" :href="route('tarahi.destroy',[tarahi.id])" method="delete" as="button" >لغو</Link> -->
                                                                        <button v-if="tarahi.status !== 3 && tarahi.status == 5 || tarahi.status !== 3 && tarahi.status == 8" type="button" class="dropdown-item text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" @click="submitDesigner(tarahi)">لغو</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <div class="modal fade " id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="staticBackdropLabel1">لغو پروژه</h5>
                                                                        <button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <p>
                                                                            آیا میخواهید پروژه <strong style="font-size: large;" v-if="designer">{{designer.title}}</strong> را لغو نمایید؟
                                                                        </p>
                                                                        <p>
                                                                            <p>
                                                                                در صورت تایید، مبلغ <strong style="font-size: large;" v-if="props.companies2 && designer && designer.total !== null || 
                                                                                props.companies2 && designer && designer.total > 0 ">{{ Number(designer.total * props.companies2.design_damage).toLocaleString("fa-ir") }}</strong>
                                                                                <strong style="font-size: large;" v-else-if="props.companies2 && designer">{{ Number(designer.price * props.companies2.design_damage).toLocaleString("fa-ir") }}</strong> ریال
                                                                                ضمانت اجرای پروژه شما بابت خسارت به طراح پروژه پرداخت خواهد شد
                                                                                که تحت هیچ عنوان قابل بازگشت نخواهد بود.
                                                                            </p>
                                                                        </p>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <Link class="btn btn-sm btn-primary" data-bs-dismiss="modal" href=""
                                                                        @click.pervent="submitDestroy" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" >تایید
                                                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                                                                        </Link>
                                                                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">انصراف</button>

                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="modal fade " id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="staticBackdropLabel1">اتمام پروژه</h5>
                                                                        <button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <p>
                                                                            آیا میخواهید اتمام پروژه <strong style="font-size: large;" v-if="tarahi">{{tarahi.title}}</strong> را اعلام نمایید؟
                                                                        </p>
                                                                        <p>
                                                                        لازم به ذکراست پس از ثبت اتمام پروژه تحت هیچ عنوان قابل بازگشت نبوده و جای هیچ گونه اعتراضی نسبت عملکرد طراح پروژه نمی باشد.
                                                                        درصورت داشتن اعتراض، فرم گزارش را ارسال نمایید و از اعلام اتمام پروژه خود داری نمایید.

                                                                        </p>
                                                                        <p>
                                                                            لطفا میزان رضایت و نظر خود را از طراح پروژه اعلام نمایید.
                                                                        </p>
                                                                        <div class="cart-bod">
                                                                            <div class="mt-4">
                                                                                <label class="form-label">مبلغ پروژه <span class="text-danger">*</span></label>
                                                                                <div class="row gx-2">
                                                                                    <input v-model.lazy="form.price" placeholder="مبلغ پروژه یا مبلغ توافق با طراح را وارد نمایید:مثال 100000 ریال" type="text" class="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="mt-4">
                                                                                <label class="form-label">میزان رای <span class="text-danger">*</span></label>
                                                                                <div class="row gx-2">
                                                                                    <star-rating class="ml-auto" v-bind:star-size="30"  v-bind:max-rating="7"  v-model:rating="form.rate" ></star-rating>
                                                                                    <!-- <input v-model.lazy="form.rate" placeholder="میزان رای خود را از 1 تا 7 وارد نمایید.مثال:4" type="text" class="form-control" /> -->
                                                                                </div>
                                                                            </div>
                                                                            <div class="mt-4">
                                                                                <label class="form-label">نظر <span class="text-danger">*</span></label>
                                                                                <textarea  v-model.lazy="form.text" placeholder="لطفا نظر خود را راجع به طراح پروژه بصورت یک جمله کوتاه بیان کنید." class="form-control" rows="4"></textarea>

                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <Link class="btn btn-sm btn-primary" data-bs-dismiss="modal"  href=""
                                                                        @click.pervent="submitFinal" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" >تایید
                                                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                                                                        </Link>
                                                                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">انصراف</button>

                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="modal fade " id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="staticBackdropLabel1">تمدید تاریخ انقضا پروژه</h5>
                                                                        <button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <p>
                                                                            آیا میخواهید زمان انقضا پروژه <strong style="font-size: large;" v-if="designer">{{designer.title}}</strong> را تمدید نمایید؟
                                                                        </p>
                                                                        <div class="cart-bod">
                                                                            <div class="mt-4">
                                                                                <form >
                                                                                    <label class="form-label">انقضا پروژه<span class="text-danger">*</span></label>
                                                                                    <input type="text" v-model="form.expired" class="form-control mt-2" placeholder="تعداد روز را وارد نمایید مثال : 10">
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <Link class="btn btn-sm btn-primary" data-bs-dismiss="modal"  href=""
                                                                        @click.pervent="submitExpired" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" >تایید
                                                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                                                                        </Link>
                                                                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">انصراف</button>

                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </tr>
                                                    </tbody>
                                                </div>
                                                <div class="pagination-area mb-20 mt-20" v-if="pagination && pagination.total > 9">
                                                    <nav aria-label="Page navigation example">
                                                        <ul class="pagination justify-content-start">
                                                            <li class="page-item" :class="{ disabled: !pagination.prev_page_url || pagination.current_page === 1 }" >
                                                                <Link class="page-link" :href=" pagination.prev_page_url && pagination.current_page > 1 ? pagination.prev_page_url : ''" preserve-scroll preserve-state :aria-disabled="pagination.current_page === 1">
                                                                    <i class="material-icons md-chevron_right"></i>
                                                                </Link>
                                                            </li>
                                                            <li class="page-item" :class="{ active: pagination.current_page === 1 }">
                                                                <Link class="page-link" :href="getPageUrl(pagination.first_page_url, 1)" preserve-scroll preserve-state >1</Link>
                                                            </li>
                                                            <li class="page-item" v-if="pagination.current_page > 4">
                                                                <span class="page-link dot">...</span>
                                                            </li>
                                                            <template v-for="i in 5" :key="i">
                                                                <li class="page-item" v-if=" pagination.current_page - 3 + i > 1 && pagination.current_page - 3 + i < pagination.last_page" :class="{ active: pagination.current_page === pagination.current_page - 3 + i }">
                                                                    <Link class="page-link" :href="getPageUrl(pagination.path, pagination.current_page - 3 + i)" preserve-scroll preserve-state >
                                                                        {{ pagination.current_page - 3 + i }}
                                                                    </Link>
                                                                </li>
                                                            </template>

                                                            <li class="page-item" v-if="pagination.current_page < pagination.last_page - 3">
                                                                <span class="page-link dot">...</span>
                                                            </li>
                                                            <li class="page-item" v-if="pagination.last_page !== 1" :class="{ active: pagination.current_page === pagination.last_page }">
                                                                <Link class="page-link" :href="getPageUrl(pagination.path, pagination.last_page)" preserve-scroll preserve-state>
                                                                    {{ pagination.last_page }}
                                                                </Link>
                                                            </li>
                                                            <li class="page-item" :class="{ disabled:!pagination.next_page_url || pagination.current_page === pagination.last_page,}">
                                                                <Link class="page-link" :href="pagination.next_page_url && pagination.current_page < pagination.last_page
                                                                            ? pagination.next_page_url: ''"preserve-scroll preserve-state :aria-disabled="pagination.current_page === pagination.last_page">
                                                                    <i class="material-icons md-chevron_left"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </article>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <p v-else>گزینه ای یافت نشد.</p>
                    </div>
                </section >
            <Footer :companies="props.companies" />
        </main>
    </body>
</template>
