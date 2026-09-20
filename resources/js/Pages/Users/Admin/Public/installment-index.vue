<script setup>

import { computed,ref} from 'vue';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import { Head, Link, useForm ,usePage} from '@inertiajs/vue3';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
import Aside from '@/Components/AsideAdmin.vue';

const errors = computed(() => usePage().props.errors);

const props = defineProps({
    users:Object,installments:Object,ids:Object,statuses:Object,subjects:Object,wallet:Number,
    cartNumber:Number,cartPrice:Number,cartCount:Number,cartDiscount:Number,cartCoupon:Number,
    cartTotal:Number,notifications:Object,companies:Object,descriptions:Object,alert:Object,cart:Object
});

const form = useForm({
    subject: null,
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

</script>
<template>
    <Header :cart="props.cart"  :roles="props.roles" :alert="props.alert" :users="props.users" :wallet="props.wallet"
        :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
        <div class="screen-overlay"></div>
        <main class="main-wrap rtl" >
            <section class="content-main">
                <div class="row content-header">
                    <div class="d-flex col-sm-12">
                        <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                        <td class="me-auto">
                            <Link :href="route('installment.create')" class="btn btn-primary btn-sm rounded font-sm">ایجاد</Link>
                        </td>
                    </div>
                    <div class="col-sm-12">
                        <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                    </div>
                </div>
                <div class="card mb-4" >
                    <div class="card-body" >
                        <div class="row gx-5">
                        <Aside class="col-lg-3 border-end" />
                            <div class="col-lg-9">
                                <section class="content-body p-xl-4">
                                    <div class="table-responsive" v-if="props.installments.total > 0">
                                        <div v-if="props.installments.total > 0" class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">شناسه</th>
                                                    <th scope="col">ایجاد کننده</th>
                                                    <th scope="col">تعداد</th>
                                                    <th scope="col">تاریخ</th>
                                                    <th scope="col">عملیات</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr v-for="section in props.installments.data" :key="section.id">
                                                    <td>{{(section.id).toLocaleString("fa-IR")}}</td>
                                                    <td>{{section.user.user_name}}</td>
                                                    <td>{{section.count}}</td>
                                                    <td>
                                                        {{ moment(section.created_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                                    </td>
                                                    <td class="text-end">
                                                        <div class="dropdown">
                                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"> <i class="material-icons md-more_horiz"></i> </a>
                                                            <div class="dropdown-menu">
                                                                <Link :href="route('installment.show',[section.id])" class="dropdown-item">نمایش جزئیات</Link>
                                                                <Link class="dropdown-item text-danger" :href="route('installment.destroy',[section.id])" method="delete" as="button" :on-finish="submitTime">حذف</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </div>
                                        <!-- <div class="mt-5" v-if="props.installments.total > 9 ">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination justify-content-start">
                                                    <li :class="['page-item',link.url == null ? 'disable' :'',link.active ? 'active' : '']"
                                                    v-for="link in props.installments.links" :key="link.id" >
                                                    <Link class="page-link" :href="link.url == null ? '#' : link.url"
                                                    v-html="link.label" ></Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div> -->
                                        <div class="pagination-area mb-20 mt-20" v-if="props.installments && props.installments.total > 9">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination justify-content-start">
                                                    <li class="page-item" :class="{ disabled: !props.installments.prev_page_url || props.installments.current_page === 1 }" >
                                                        <Link class="page-link" :href=" props.installments.prev_page_url && props.installments.current_page > 1 ? props.installments.prev_page_url : ''" preserve-scroll preserve-state :aria-disabled="props.installments.current_page === 1">
                                                            <i class="material-icons md-chevron_right"></i>
                                                        </Link>
                                                    </li>
                                                    <li class="page-item" :class="{ active: props.installments.current_page === 1 }">
                                                        <Link class="page-link" :href="getPageUrl(props.installments.first_page_url, 1)" preserve-scroll preserve-state >1</Link>
                                                    </li>
                                                    <li class="page-item" v-if="props.installments.current_page > 4">
                                                        <span class="page-link dot">...</span>
                                                    </li>
                                                    <template v-for="i in 5" :key="i">
                                                        <li class="page-item" v-if=" props.installments.current_page - 3 + i > 1 && props.installments.current_page - 3 + i < props.installments.last_page" :class="{ active: props.installments.current_page === props.installments.current_page - 3 + i }">
                                                            <Link class="page-link" :href="getPageUrl(props.installments.path, props.installments.current_page - 3 + i)" preserve-scroll preserve-state >
                                                                {{ props.installments.current_page - 3 + i }}
                                                            </Link>
                                                        </li>
                                                    </template>

                                                    <li class="page-item" v-if="props.installments.current_page < props.installments.last_page - 3">
                                                        <span class="page-link dot">...</span>
                                                    </li>
                                                    <li class="page-item" v-if="props.installments.last_page !== 1" :class="{ active: props.installments.current_page === props.installments.last_page }">
                                                        <Link class="page-link" :href="getPageUrl(props.installments.path, props.installments.last_page)" preserve-scroll preserve-state>
                                                            {{ props.installments.last_page }}
                                                        </Link>
                                                    </li>
                                                    <li class="page-item" :class="{ disabled:!props.installments.next_page_url || props.installments.current_page === props.installments.last_page,}">
                                                        <Link class="page-link" :href="props.installments.next_page_url && props.installments.current_page < props.installments.last_page
                                                                    ? props.installments.next_page_url: ''"preserve-scroll preserve-state :aria-disabled="props.installments.current_page === props.installments.last_page">
                                                            <i class="material-icons md-chevron_left"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <p>گزینه ای یافت نشد.</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer :companies="props.companies" />
</main>
</template>

