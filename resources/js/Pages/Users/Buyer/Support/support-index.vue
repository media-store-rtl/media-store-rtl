<script setup>
    
import { computed ,watch ,ref} from 'vue';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
import swal from 'sweetalert2';



const errors = computed(() => usePage().props.errors);

const props = defineProps({
    users:Object,tickets:Object,times:Object|String,statuses:Object|String,subjects:Object|String,
    cartNumber:Number,cartPrice:Number,cartCount:Number,cartDiscount:Number,cartCoupon:Number,
    cartTotal:Number,notifications:Object,companies:Object,descriptions:Object,menus:Object,path:String,
    wallet:Number,cart:Object
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


const form = useForm({
    subject:props.subjects?props.subjects:null,
    status:props.statuses?props.statuses:null,
    time:props.times !== 'All'? props.times:null,
});



const submit = () => {

    if(form.subject == null && form.status == null && form.time == null)
    {
        let text
        text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
    else
    {
        form.get(route('support.index'));
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

const pagination = ref(props.tickets);
</script>
<template>
<Header :cart="props.cart" :cartCount="props.cartCount" :cartDiscount="props.cartDiscount" :wallet="props.wallet"
            :cartCoupon="props.cartCoupon" :cartTotal="props.cartTotal" :alert="props.alert" :users="props.users"
            :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
        <div class="screen-overlay"></div>
        <main class="main-wrap rtl" >
            <section class="content-main">
                <div class="row content-header">
                    <div class="d-flex col-sm-12 align-items-center">
                        <h2 class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></h2>
                        <div style="margin-right:auto; text-align:left;">
                            <Link :href="route('support.create')" class="btn btn-primary btn-sm rounded font-sm">ایجاد</Link>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <p v-if="props.descriptions" v-html="props.descriptions.text"></p>
                    </div>
                </div>

                <div class="mb-4 bg-white" v-if="props.tickets && props.tickets.total > 0">
                    <header class="card-header">
                        <div class="row align-items-center">
                            <div class="col col-check flex-grow-0">
                                <div class="form-check ms-2">
                                    <input class="form-check-input" type="checkbox" value="">
                                </div>
                            </div>
                            <div class="col-md-3 col-12 ms-auto mb-md-0 mb-3">

                                <select class="form-select" v-model.lazy="form.subject" @change="submit">
                                    <option value="All"> همه عنوان ها</option>
                                    <option v-for="menu,index in props.menus" :key="index" :value="menu.id">{{ menu.name }}</option>
                                </select>
                            </div>
                            <div class="col-md-2 col-6">
                                <!-- <input type="date" v-model.lazy="form.time" class="form-control" @change="submit"> -->
                                <date-picker v-model="form.time" format="YYYY-MM-DD" display-format="dddd jDD jMMMM jYYYY"  color="#1ABC9C" type="date" @change="submit"></date-picker>
                            </div>

                            <div class="col-md-2 col-6">
                                <select class="form-select" v-model.lazy="form.status" @change="submit">
                                    <option value="All">همه وضعیت ها</option>
                                    <option value="0">ثبت شده</option>
                                    <option value="1">در انتظار پاسخ</option>
                                    <option value="2"> مشاهده شده</option>
                                    <option value="3">بسته شده</option>
                                    <option value="4">پاسخ داده شده</option>

                                </select>
                            </div>
                        </div>
                    </header>
                    <div class="card-body" >
                          <div class="row gx-5">
                            <div class="col-lg-9">
                                <section class="content-body p-xl-4">
                                    <div class="table-responsive">
                                        <div v-if="props.tickets.total > 0" class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">شناسه</th>
                                                    <th scope="col">بخش</th>
                                                    <th scope="col">عنوان</th>
                                                    <th scope="col">تاریخ</th>
                                                    <th scope="col">وضعیت</th>
                                                    <th scope="col">عملیات</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr v-for="ticket in props.tickets.data" :key="ticket.id">
                                                    <td>{{(ticket.id).toLocaleString("fa-IR")}}</td>
                                                    <td>{{ticket.recepiant.name}}</td>
                                                    <td>{{ticket.subject.name}}</td>
                                                    <td>
                                                        {{ moment(ticket.created_at).utc().locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                                    </td>
                                                    <td>
                                                    
                                                        <span v-if="ticket.status == 0" class="badge badge-pill badge-soft-info">ثبت شده</span>
                                                        <span v-if="ticket.status == 1" class="badge badge-pill badge-soft-warning"> در انتظار پاسخ</span>
                                                        <span v-if="ticket.status == 2"  class="badge badge-pill badge-soft-secondary">مشاهده شده</span>
                                                        <span v-if="ticket.status == 3" class="badge badge-pill badge-soft-danger">بسته شده</span>
                                                        <span v-if="ticket.status == 4" class="badge badge-pill badge-soft-success">پاسخ داده شده</span>
                                                    </td>
                                                    <td class="text-end">
                                                        <Link :href="route('support.show',[ticket.id])" class="btn btn-primary btn-sm rounded font-sm">نمایش</Link>
                                                    </td>
                                                </tr>
                                                    <div class="mt-5" v-if="props.tickets.total > 9 ">
                                                        <nav aria-label="Page navigation example">
                                                            <ul class="pagination justify-content-start">
                                                                <li :class="['page-item',link.url == null ? 'disable' :'',link.active ? 'active' : '']"
                                                                v-for="link in props.tickets.links" :key="link.id" >
                                                                <Link class="page-link" :href="link.url == null ? '#' : link.url"
                                                                v-html="link.label" ></Link>
                                                                </li>
                                                            </ul>
                                                        </nav>
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
                                            </tbody>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <p>گزینه ای یافت نشد.</p>
                </div>
            </section>
        <Footer :companies="props.companies" />
</main>
</template>

