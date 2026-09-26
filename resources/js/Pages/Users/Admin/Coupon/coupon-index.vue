<script setup>

import {computed, ref} from 'vue';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import { Link, useForm ,usePage } from '@inertiajs/vue3';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";

const errors = computed(() => usePage().props.errors);
const props = defineProps({
    users:Object,coupons:Object,ids:Object,statuses:Object,prices:Object,notifications:Object,
    companies:Object,descriptions:Object,wallet:Number,cart:Object
});

const form = useForm({
    coupon: null,
    status:null,
    id:null,
    price:null,
});

const openMenu = ref(null);

const toggleMenu = (id) => {
    openMenu.value = openMenu.value === id ? null : id;
};
</script>
<template>
 <Header :cart="props.cart" :cartCount="props.cartCount" :cartDiscount="props.cartDiscount" :wallet="props.wallet"
         :cartCoupon="props.cartCoupon" :cartTotal="props.cartTotal" :alert="props.alert" :users="props.users"
         :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
        <div class="screen-overlay"></div>
        <main class="main-wrap rtl">
            <section class="content-main">
                <div class="row content-header">
                    <div class="d-flex col-sm-12 align-items-center">
                        <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                        <div style="margin-right:auto; text-align:left;">
                            <Link :href="route('coupon.create')" class="btn btn-primary btn-sm rounded font-sm">ایجاد</Link>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                    </div>
                </div>
                <div class="card mb-4" v-if="props.coupons.total > 0">
                     <div class="card-body">
                        <div class="table-responsive">
                            <div v-if="props.coupons.total > 0" class="table table-hover">
                                <thead >
                                    <tr>
                                        <th scope="col">شناسه</th>
                                        <th scope="col">کد</th>
                                        <th scope="col">مبلغ</th>
                                        <th scope="col">کاربر</th>
                                        <th scope="col">شناسه سفارش</th>
                                        <th scope="col">تاریخ</th>
                                        <th scope="col">وضعیت</th>
                                        <th scope="col">عملیات</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr v-for="(coupon,index) in props.coupons.data" :key="index">
                                        <td>{{(coupon.id).toLocaleString("fa-IR")}}</td>
                                        <td>{{coupon.code}}</td>
                                        <td>{{(coupon.price).toLocaleString("fa-IR")}}</td>
                                        <td v-if="coupon.user">{{ coupon.user.user_name }}</td>
                                        <td v-else> استفاده نشده</td>
                                        <td v-if="coupon.order">{{ coupon.order.id }}</td>
                                        <td v-else> استفاده نشده</td>
                                        <td>
                                            {{ moment(coupon.created_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                        </td>
                                        <td>
                                            <span v-if="coupon.expired_at" class="badge badge-pill badge-soft-success">استفاده شده</span>
                                            <span v-else class="badge badge-pill badge-soft-warning" >استفاده نشده</span>
                                        </td>
                                        <td class="text-end">
                                            <div class="dropdown">
                                                <a href="#" @click.prevent.stop="toggleMenu(coupon.id)" class="btn btn-light rounded btn-sm font-sm"> <i class="material-icons md-more_horiz"></i> </a>
                                                <div v-if="openMenu === coupon.id" class="dropdown-menu show" @click.stop>
                                                    <Link :href="route('coupon.destroy',[coupon.id])" method="delete" class="dropdown-item text-danger" as="button">حذف</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                        <div class="mt-5" v-if="props.coupons.total > 9">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-start">
                                                <li :class="['page-item',link.url == null ? 'disable' :'',link.active ? 'active' : '']"
                                                v-for="link in props.coupons.links" :key="link.id" >
                                                <Link class="page-link" :href="link.url == null ? '#' : link.url"
                                                v-html="link.label" ></Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </tbody>
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

