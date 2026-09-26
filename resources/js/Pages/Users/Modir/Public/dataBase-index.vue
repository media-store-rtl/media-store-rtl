<script setup>

import { computed,ref} from 'vue';
import { Head, Link, useForm,usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
import swal from 'sweetalert2';

const errors = computed(() => usePage().props.errors);
const props = defineProps({
    results:Object,users:Object,tables:Object,wallet:Number,alert:Object,notifications:Object,
    companies:Object,descriptions:Object,menus:Object,times:{type: [Object, String],default: () => ({})},
    statuses:{type: [Object, String],default: () => ({})},subjects:{type: [Object, String],default: () => ({})},cart:Object
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
    table : null,
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
        form.get(route('dataBase.index'));
    }

};

const submitEdit = (a) => {
    
    form.table = a,
    //users/dataBase/store
    form.get(route('dataBase.show',[a]));
}

const submitDel = (a) => {
    
    form.table = a,
    //users/dataBase/store
    form.delete(route('dataBase.destroy',[a]));
}

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
const tables = props.tables?props.tables.rows:null;
const pagination = ref(tables);


const openMenu = ref(null);

const toggleMenu = (id) => {
    openMenu.value = openMenu.value === id ? null : id;
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
                        <table class="me-auto">
                            <thead>
                            <tr >
                                <!-- <Link :href="route('product.create')" class="btn btn-primary btn-sm rounded font-sm">ایجاد</Link> -->
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="col-sm-12">
                        <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                    </div>
                </div>
                <div class="mb-4 bg-white"  v-if="props.results">
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
                                    <template v-for="result,index in props.results" :key="index">
                                        <option :value="result">{{ result }}</option>
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
                    <div class="card-body">
                        <div class="table-responsive">
                            <article class="itemlist" v-if="props.tables">
                                <div class="table table-hover">
                                    <thead>
                                        <tr class="col">
                                            <th scope="col" v-for="(value,index) in props.tables.columns" :key="index">{{ value }}</th>
                                            <th scope="col" >عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody  v-if="props.tables && props.tables.rows">
                                            <tr v-for="(product,index) in props.tables.rows.data" :key="index">
                                                <td v-for="value in product"  class="" >
                                                         {{value}}
                                                </td>
                                                <td>
                                                    <div class="dropdown" v-if="product">
                                                        <a href="#" @click.prevent.stop="toggleMenu(product.id)" class="btn btn-light rounded btn-sm font-sm"> <i class="material-icons md-more_horiz"></i> </a>
                                                        <div v-if="openMenu === product.id" class="dropdown-menu show" @click.stop>
                                                            <button  class="dropdown-item" @click.prevent="submitEdit(product.id)"> ویرایش</button>
                                                            <button  class="dropdown-item" @click.prevent="submitDel(product.id)"> حذف</button>
                                                            <!-- <button  class="dropdown-item" :href="route('dataBase.show',[product.id])"  @click.prevent="submitEdit(product.id)"> ویرایش</button> -->
                                                            <!-- <Link v-if="product.status == 4" class="dropdown-item" method="PUT" as="button" :href="route('product.update',[product.id])">بروزرسانی</Link> -->
                                                            <!-- <Link v-if="product.status == 4" class="dropdown-item" :href="route('website-templates.show',[product.slug])">نمایش</Link> -->
                                                            <!-- <Link  class="dropdown-item" :href="route('product.show',[product.id])">فروش</Link> -->
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                    </tbody>
                                </div>
                            </article>
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
                        </div>
                    </div>
                </div>
                <p v-else>گزینه ای یافت نشد.</p>
        </section >
        <Footer :companies="props.companies" />
    </main>
</template>
<style scoped>
.ellipsis {
    display: inline-block;
    max-width: 120px; /* عرض دلخواه */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>