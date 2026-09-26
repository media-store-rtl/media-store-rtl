<script setup>
import { computed,ref } from 'vue';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import { usePage } from '@inertiajs/vue3';
import { Head, Link, useForm } from '@inertiajs/vue3';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";

const errors = computed(() => usePage().props.errors);
const props = defineProps({
    users:Object,transactions:Object,ids:Object,statuses:Object,transaction:Object,
    prices:Object,notifications:Object,companies:Object,descriptions:Object,wallet:Number,
    cart:Object
});

const form = useForm({
    transaction: null,
    status:null,
    id:null,
    price:null,
});
const submitFilter = () => {
     if(form.transaction == null && form.status == null && form.id == null && form.price == null){
         errors.value.errors = 'لطفا یکی از موارد را جهت فیلتر انتخاب نمایید.'
    }else{
        form.get(route('payment.search'));
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
const pagination = ref(props.transactions);
const openMenu = ref(null);

const toggleMenu = (id) => {
    openMenu.value = openMenu.value === id ? null : id;
};
</script>
<template>
    <Header :cart="props.cart"  :wallet="props.wallet" :alert="props.alert" :users="props.users"
            :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
        <div class="screen-overlay"></div>
        <main class="main-wrap rtl">
            <section class="content-main">
                <div class="row content-header">
                    <div class="d-flex col-sm-12">
                        <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                        <td class="me-auto">
                            <!-- <button v-if="form.transaction == 'برداشت' " class="btn btn-primary" @click.prevent="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">ثبت</button> -->
                        </td>
                    </div>
                    <div class="col-sm-12">
                        <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                    </div>
                </div>
                <div class="card mb-4" v-if="props.transactions.total > 0">
                    <div class="card-body" >
                        <div class="row gx-5">
                            <div class="col-lg-9">
                                <section class="content-body p-xl-4">
                                    <div class="table-responsive">
                                        <div v-if="props.transactions.total > 0" class="table table-hover">
                                            <thead >
                                                <tr>
                                                    <th scope="col">شناسه</th>
                                                    <th scope="col">نوع تراکنش</th>
                                                    <th scope="col">مبلغ</th>
                                                    <th scope="col">تاریخ</th>
                                                    <th scope="col">وضعیت</th>
                                                    <th scope="col" class="text-center">عملیات</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr v-for="(transaction,index) in props.transactions.data" :key="index">
                                                    <td>{{Number(transaction.id).toLocaleString("fa-IR")}}</td>
                                                    <td>{{transaction.transaction}}</td>
                                                    <td>{{Number(transaction.price).toLocaleString("fa-IR")}}</td>
                                                    <td>
                                                        <!-- <date-picker v-model="transaction.created_at" :disabled="true" format="YYYY-MM-DD HH:mm:ss" display-format="dddd jDD jMMMM jYYYY"  color="#1ABC9C"  type="datetime" ></date-picker> -->
                                                        {{ moment(transaction.created_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                                    </td>
                                                    <td>
                                                        <span v-if="transaction.status == 0" class="badge badge-pill badge-soft-info">ثبت</span>
                                                        <span v-if="transaction.status == 1" class="badge badge-pill badge-soft-warning">انتظار</span>
                                                        <span v-if="transaction.status == 2"  class="badge badge-pill badge-soft-secondary">برسی</span>
                                                        <span v-if="transaction.status == 3" class="badge badge-pill badge-soft-danger">منقضی</span>
                                                        <span v-if="transaction.status == 4" class="badge badge-pill badge-soft-success">انجام</span>
                                                    </td>
                                                    <td class="text-end" v-if="transaction.status == 0">
                                                        <div class="dropdown">
                                                            <a href="#" @click.prevent.stop="toggleMenu(transaction.id)" class="btn btn-light rounded btn-sm font-sm"> <i class="material-icons md-more_horiz"></i> </a>
                                                            <div v-if="openMenu === transaction.id" class="dropdown-menu show" @click.stop>
                                                                <Link class="dropdown-item" :href="route('payment.edit',[transaction.id])">ویرایش</Link>
                                                                <Link type="button" class="dropdown-item text-danger" :href="route('payment.destroy',[transaction.id])" method="delete" as="delete">لغو</Link>
                                                            </div>
                                                        </div>
                                                    </td>
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

