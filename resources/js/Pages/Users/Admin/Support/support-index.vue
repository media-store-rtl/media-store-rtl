<script setup>

import { computed,ref} from 'vue';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import { Head, Link, useForm,usePage } from '@inertiajs/vue3';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
import swal from 'sweetalert2';
import DatePicker from 'vue3-persian-datetime-picker';

const errors = computed(() => usePage().props.errors);
const props = defineProps({
    users:Object,tickets:Object,times:Object|String,statuses:Object|String,subjects:Object|String,
    menus:Object,notifications:Object,companies:Object,descriptions:Object,wallet:Number,cart:Object,
    namads:Object,path:String,alert:Object
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
        form.get(route('supportAdmin.index'));
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
    <Header :cart="props.cart" :roles="props.roles" :wallet="props.wallet" :alert="props.alert" :users="props.users"
            :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
        <div class="screen-overlay"></div>
        <main class="main-wrap rtl" >
            <section class="content-main">
                <div class="row content-header">
                    <div class="d-flex col-sm-12">
                        <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                        <td class="me-auto">
                            <Link :href="route('supportAdmin.create')" class="btn btn-primary btn-sm rounded font-sm">ایجاد</Link>
                        </td>
                    </div>
                    <div class="col-sm-12">
                        <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
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
                        <div class="table-responsive">
                            <div v-if="props.tickets.total > 0" class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">شناسه</th>
                                        <th scope="col">عنوان</th>
                                        <th scope="col">تاریخ</th>
                                        <th scope="col">وضعیت</th>
                                        <th scope="col">عملیات</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr v-for="ticket in props.tickets.data" :key="ticket.id">
                                        <td>{{(ticket.id).toLocaleString("fa-IR")}}</td>
                                        <td>{{ticket.subject.name}}</td>
                                        <td>
                                            {{ moment(ticket.created_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                        </td>
                                        <td>
                                            <span v-if="ticket.status == 0" class="badge badge-pill badge-soft-info">ثبت شده</span>
                                            <span v-if="ticket.status == 1" class="badge badge-pill badge-soft-warning"> در انتظار پاسخ</span>
                                            <span v-if="ticket.status == 2"  class="badge badge-pill badge-soft-secondary">مشاهده شده</span>
                                            <span v-if="ticket.status == 3" class="badge badge-pill badge-soft-danger">بسته شده</span>
                                            <span v-if="ticket.status == 4" class="badge badge-pill badge-soft-success">پاسخ داده شده</span>

                                        </td>
                                        <td class="text-end">
                                            <Link :href="route('supportAdmin.show',[ticket.id])" class="btn btn-primary btn-sm rounded font-sm">نمایش</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </div>
                            <!-- <div class="mt-5" v-if="props.tickets.total > 9 ">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-start">
                                        <li :class="['page-item',link.url == null ? 'disable' :'',link.active ? 'active' : '']"
                                        v-for="link in props.tickets.links" :key="link.id" >
                                        <Link class="page-link" :href="link.url == null ? '#' : link.url"
                                        v-html="link.label" ></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div> -->
                            <div class="pagination-area mb-20 mt-20" v-if="props.tickets && props.tickets.total > 9">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-start">
                                        <li class="page-item" :class="{ disabled: !props.tickets.prev_page_url || props.tickets.current_page === 1 }" >
                                            <Link class="page-link" :href=" props.tickets.prev_page_url && props.tickets.current_page > 1 ? props.tickets.prev_page_url : ''" preserve-scroll preserve-state :aria-disabled="props.tickets.current_page === 1">
                                                <i class="material-icons md-chevron_right"></i>
                                            </Link>
                                        </li>
                                        <li class="page-item" :class="{ active: props.tickets.current_page === 1 }">
                                            <Link class="page-link" :href="getPageUrl(props.tickets.first_page_url, 1)" preserve-scroll preserve-state >1</Link>
                                        </li>
                                        <li class="page-item" v-if="props.tickets.current_page > 4">
                                            <span class="page-link dot">...</span>
                                        </li>
                                        <template v-for="i in 5" :key="i">
                                            <li class="page-item" v-if=" props.tickets.current_page - 3 + i > 1 && props.tickets.current_page - 3 + i < props.tickets.last_page" :class="{ active: props.tickets.current_page === props.tickets.current_page - 3 + i }">
                                                <Link class="page-link" :href="getPageUrl(props.tickets.path, props.tickets.current_page - 3 + i)" preserve-scroll preserve-state >
                                                    {{ props.tickets.current_page - 3 + i }}
                                                </Link>
                                            </li>
                                        </template>

                                        <li class="page-item" v-if="props.tickets.current_page < props.tickets.last_page - 3">
                                            <span class="page-link dot">...</span>
                                        </li>
                                        <li class="page-item" v-if="props.tickets.last_page !== 1" :class="{ active: props.tickets.current_page === props.tickets.last_page }">
                                            <Link class="page-link" :href="getPageUrl(props.tickets.path, props.tickets.last_page)" preserve-scroll preserve-state>
                                                {{ props.tickets.last_page }}
                                            </Link>
                                        </li>
                                        <li class="page-item" :class="{ disabled:!props.tickets.next_page_url || props.tickets.current_page === props.tickets.last_page,}">
                                            <Link class="page-link" :href="props.tickets.next_page_url && props.tickets.current_page < props.tickets.last_page
                                                        ? props.tickets.next_page_url: ''"preserve-scroll preserve-state :aria-disabled="props.tickets.current_page === props.tickets.last_page">
                                                <i class="material-icons md-chevron_left"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
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

