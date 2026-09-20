<script setup>

import { computed,ref } from 'vue';
import { Link, useForm, usePage} from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
import DatePicker from 'vue3-persian-datetime-picker';
import swal from 'sweetalert2';

const errors = computed(() => usePage().props.errors);

const props = defineProps({
    orders:Object,users:Object,products:Object,wallet:Number,menus:Object,times:{type: [Object, String],default: () => ({})},
    statuses:{type: [Object, String],default: () => ({})},alert:Object,subjects:{type: [Object, String],default: () => ({})},
    notifications:Object,companies:Object,descriptions:Object,path:String,cart:Object
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
        form.get(route('productAdmin.index'));
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

</script>
<template>
<Header :cart="props.cart"  :wallet="props.wallet" :alert="props.alert" :users="props.users"
        :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />

<main class="main-wrap rtl">
        <section class="content-main">
            <div class="row content-header">
                    <div class="d-flex col-sm-12">
                        <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                        <td class="me-auto">

                        </td>
                    </div>
                    <div class="col-sm-12">
                        <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                    </div>
                </div>
                <div class="mb-4 bg-white" v-if="props.products.total > 0">
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
                                    <option value="5">متوقف</option>
                                </select>
                            </div>
                        </div>
                    </header>
                    <div class="card-body" >
                        <div class="table-responsive">
                            <div v-if="props.products.total > 0" class="table table-hover">
                                <thead>
                                    <tr class="col">
                                        <th scope="col"> شناسه</th>
                                        <th scope="col">نام</th>
                                        <th scope="col">دسته بندی</th>
                                        <th scope="col">فروشنده</th>
                                        <th scope="col">تاریخ</th>
                                        <th scope="col">بروزرسانی</th>
                                        <th scope="col">وضعیت</th>
                                        <th scope="col">عملیات</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr v-for="(product,index) in props.products.data" :key="index">
                                        <td >{{(product.id).toLocaleString("fa-IR")}}</td>
                                        <td >
                                            <div class="left">
                                            <img v-if="product.image" :src="$page.props.ziggy.url +'/storage/' +product.image.url" class="img-sm img-thumbnail" :alt="product.name">
                                            </div>
                                            <div class="info">
                                                <h6 class="mb-0"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">{{product.name}}</span></span></h6>
                                            </div>
                                        </td>
                                        <td>
                                            {{ product.type.name }}
                                        </td>
                                        <td >
                                            <Link  :href="route('profile.show',[product.user.user_name])"> {{product.user.user_name}}</Link>
                                        </td>
                                        <td>
                                            {{ moment(product.created_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                        </td>
                                        <td>
                                            {{ moment(product.updated_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                        </td>
                                        <td>
                                            <span v-if="product.status == 0" class="badge badge-pill badge-soft-info">ثبت</span>
                                            <span v-if="product.status == 1" class="badge badge-pill badge-soft-warning">انتظار</span>
                                            <span v-if="product.status == 2"  class="badge badge-pill badge-soft-secondary"> بررسی</span>
                                            <span v-if="product.status == 3" class="badge badge-pill badge-soft-danger"> منقضی</span>
                                            <span v-if="product.status == 4" class="badge badge-pill badge-soft-success">منتشر</span>
                                            <span v-if="product.status == 5" class="badge badge-pill badge-soft-warning">متوقف</span>
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"> <i class="material-icons md-more_horiz"></i> </a>
                                                <div class="dropdown-menu">
                                                    <Link class="dropdown-item" :href="route('productAdmin.edit',[product.id])"> ویرایش</Link>
                                                    <Link v-if="product.status == 4 && product.group.name == 'قالب'" class="dropdown-item" :href="route('website-templates.show',[product.slug])">نمایش</Link>
                                                    <Link v-if="product.status == 4 && product.group.name == 'فرم'" class="dropdown-item" :href="route('form.show',[product.slug])">نمایش</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </div>
                            <div class="pagination-area mb-20 mt-20" v-if="props.products && props.products.total > 9">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-start">
                                        <li class="page-item" :class="{ disabled: !props.products.prev_page_url || props.products.current_page === 1 }" >
                                            <Link class="page-link" :href=" props.products.prev_page_url && props.products.current_page > 1 ? props.products.prev_page_url : ''" preserve-scroll preserve-state :aria-disabled="props.products.current_page === 1">
                                                <i class="material-icons md-chevron_right"></i>
                                            </Link>
                                        </li>
                                        <li class="page-item" :class="{ active: props.products.current_page === 1 }">
                                            <Link class="page-link" :href="getPageUrl(props.products.first_page_url, 1)" preserve-scroll preserve-state >1</Link>
                                        </li>
                                        <li class="page-item" v-if="props.products.current_page > 4">
                                            <span class="page-link dot">...</span>
                                        </li>
                                        <template v-for="i in 5" :key="i">
                                            <li class="page-item" v-if=" props.products.current_page - 3 + i > 1 && props.products.current_page - 3 + i < props.products.last_page" :class="{ active: props.products.current_page === props.products.current_page - 3 + i }">
                                                <Link class="page-link" :href="getPageUrl(props.products.path, props.products.current_page - 3 + i)" preserve-scroll preserve-state >
                                                    {{ props.products.current_page - 3 + i }}
                                                </Link>
                                            </li>
                                        </template>

                                        <li class="page-item" v-if="props.products.current_page < props.products.last_page - 3">
                                            <span class="page-link dot">...</span>
                                        </li>
                                        <li class="page-item" v-if="props.products.last_page !== 1" :class="{ active: props.products.current_page === props.products.last_page }">
                                            <Link class="page-link" :href="getPageUrl(props.products.path, props.products.last_page)" preserve-scroll preserve-state>
                                                {{ props.products.last_page }}
                                            </Link>
                                        </li>
                                        <li class="page-item" :class="{ disabled:!props.products.next_page_url || props.products.current_page === props.products.last_page,}">
                                            <Link class="page-link" :href="props.products.next_page_url && props.products.current_page < props.products.last_page
                                                        ? props.products.next_page_url: ''"preserve-scroll preserve-state :aria-disabled="props.products.current_page === props.products.last_page">
                                                <i class="material-icons md-chevron_left"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                   <p v-else>گزینه ای یافت نشد.</p>
            </section >
            <Footer :companies="props.companies" />
    </main>
</template>
