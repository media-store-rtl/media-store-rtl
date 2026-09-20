<script setup>
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import { computed,ref} from 'vue';
import { Link, useForm, usePage} from '@inertiajs/vue3';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";

const errors = computed(() => usePage().props.errors);
const props = defineProps({
    orders:Object,users:Object,cartPrice:Number,cartCount:Number,
    cartDiscount:Object,cartCoupon:Object,cartTotal:Number,notifications:Object,ids:Object,
    statuses:Object,prices:Object,companies:Object,descriptions:Object,dark: String,asidemini:String,
    path:String,wallet:Number,cart:Object
});

const form = useForm({
    price: null,
    status:null,
    id:null,
});

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

const pagination = ref(props.orders);
</script>
<template>
    <Head2 />
    <body>
        <div class="screen-overlay"></div>
        <Header :cart="props.cart" :cartPrice="props.cartPrice" :cartCount="props.cartCount" :cartDiscount="props.cartDiscount" :wallet="props.wallet"
            :cartCoupon="props.cartCoupon" :cartTotal="props.cartTotal" :alert="props.alert" :users="props.users"
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
                <div class="bg-white mb-4"  v-if="props.orders.total > 0">
                    <div class="card-body" v-if="props.orders">
                            <div class="row gx-5">
                            <div class="col-lg-12">
                                <section class="content-body p-xl-4">
                                    <div class="table-responsive">
                                        <article class="itemlist">
                                            <div v-if="props.orders.total > 0 " class="table table-hover">
                                                <thead>
                                                    <tr class="col">
                                                        <th scope="col">شناسه</th>
                                                        <th scope="col">قیمت</th>
                                                        <th scope="col">تعداد</th>
                                                        <th scope="col">تخفیف</th>
                                                        <th scope="col">بن تخفیف</th>
                                                        <th scope="col">مالیات</th>
                                                        <th scope="col">کل</th>
                                                        <th scope="col">پرداخت</th>
                                                        <th scope="col">مانده</th>
                                                        <th scope="col">تاریخ</th>
                                                        <th scope="col">وضعیت</th>
                                                        <th scope="col">جزییات</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                    <tr v-for="(order,index) in props.orders.data" :key="index">
                                                        <td>{{Number(order.id).toLocaleString("fa-IR")}}</td>
                                                        <td>{{Number(order.price).toLocaleString("fa-IR")}}</td>
                                                        <td>{{Number(order.count).toLocaleString("fa-IR")}}</td>
                                                        <td>{{Number(order.discount).toLocaleString("fa-IR")}}</td>
                                                        <td>{{Number(order.coupon).toLocaleString("fa-IR")}}</td>
                                                        <td>{{Number(order.tax).toLocaleString("fa-IR")}}</td>
                                                        <td>{{Number(order.col).toLocaleString("fa-IR")}}</td>
                                                        <td>{{Number(order.payment).toLocaleString("fa-IR")}}</td>
                                                        <td>{{Number(order.balance).toLocaleString("fa-IR")}}</td>
                                                        <td>
                                                            {{ moment(order.created_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                                        </td>
                                                        <td v-if="order.t_id > 0">{{order.t_id}}</td>
                                                        <td v-else>پرداخت از کیف پول </td>
                                                        <Link class="btn btn-sm btn-primary mt-2" :href="route('download.show',order.id)"> نمایش</Link>

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
                </div>
                <div v-else>
                        <p>گزینه ای یافت نشد.</p>
                    </div>
            </section >
            <Footer :companies="props.companies" />
        </main>
    </body>
</template>
