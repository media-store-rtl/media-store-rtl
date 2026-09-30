<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';

const props = defineProps({
    users: Object, plans: Object, wallet: Number, companies: Object, descriptions: Object, alert: Object, cart: Object,
    cartNumber: Number, cartPrice: Number, cartCount: Number, cartDiscount: Number, cartCoupon: Number, cartTotal: Number,
    notifications: Object, orders: Object, dark: String,
});

const openMenu = ref(null);
const toggleMenu = (id) => { openMenu.value = openMenu.value === id ? null : id; };

const getPageUrl = (baseUrl, pageNumber) => {
    if (typeof window !== 'undefined') {
        let queryString = window.location.search;
        queryString = queryString.replace(/(\?|&)page=\d+/, '');
        return 'function raw() { [native code] }';
    }
    return `${baseUrl}?page=${pageNumber}`;
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
                    <div class="content-title card-title"><span v-if="props.descriptions" v-html="props.descriptions.subject"></span><span v-else>پلن‌های اشتراک حسابداری</span></div>
                    <div style="margin-right:auto; text-align:left;"><Link :href="route('accountingSubscriptionAdmin.create')" class="btn btn-primary btn-sm rounded font-sm">ایجاد پلن</Link></div>
                </div>
                <div class="col-sm-12"><div v-if="props.descriptions" v-html="props.descriptions.text"></div></div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h5 class="mb-4">پلن‌های ساخته‌شده</h5>

                    <div v-if="props.plans && props.plans.total > 0" class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>شناسه</th>
                                    <th>نام</th>
                                    <th>قیمت</th>
                                    <th>مدت</th>
                                    <th>کاربر</th>
                                    <th>وضعیت</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="plan in props.plans.data" :key="plan.id">
                                    <td>{{ Number(plan.id).toLocaleString('fa-IR') }}</td>
                                    <td>{{ plan.name }}</td>
                                    <td>{{ Number(plan.price).toLocaleString('fa-IR') }}</td>
                                    <td>{{ plan.duration_days }} روز</td>
                                    <td>{{ plan.max_users }} نفر</td>
                                    <td>
                                        <span v-if="plan.status === 4" class="badge badge-pill badge-soft-success">فعال</span>
                                        <span v-else class="badge badge-pill badge-soft-secondary">غیرفعال</span>
                                    </td>
                                    <td class="text-end">
                                        <div class="dropdown">
                                            <a href="#" @click.prevent.stop="toggleMenu(plan.id)" class="btn btn-light rounded btn-sm font-sm">
                                                <i class="material-icons md-more_horiz"></i>
                                            </a>
                                            <div v-if="openMenu === plan.id" class="dropdown-menu show" @click.stop>
                                                <Link :href="route('accountingSubscriptionAdmin.show', [plan.id])" class="dropdown-item">
                                                    نمایش جزئیات
                                                </Link>
                                                <Link :href="route('accountingSubscriptionAdmin.edit', [plan.id])" class="dropdown-item">
                                                    ویرایش
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p v-else class="mb-0">هنوز پلنی ساخته نشده است.</p>

                    <div class="pagination-area mb-20 mt-20" v-if="props.plans && props.plans.total > 9">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                                <li class="page-item" :class="{ disabled: !props.plans.prev_page_url || props.plans.current_page === 1 }">
                                    <Link
                                        class="page-link"
                                        :href="props.plans.prev_page_url && props.plans.current_page > 1 ? props.plans.prev_page_url : ''"
                                        preserve-scroll
                                        preserve-state
                                        :aria-disabled="props.plans.current_page === 1"
                                    >
                                        <i class="material-icons md-chevron_right"></i>
                                    </Link>
                                </li>

                                <li class="page-item" :class="{ active: props.plans.current_page === 1 }">
                                    <Link class="page-link" :href="getPageUrl(props.plans.first_page_url, 1)" preserve-scroll preserve-state>1</Link>
                                </li>

                                <li class="page-item" v-if="props.plans.current_page > 4">
                                    <span class="page-link dot">...</span>
                                </li>

                                <template v-for="i in 5" :key="i">
                                    <li
                                        class="page-item"
                                        v-if="props.plans.current_page - 3 + i > 1 && props.plans.current_page - 3 + i < props.plans.last_page"
                                        :class="{ active: props.plans.current_page === props.plans.current_page - 3 + i }"
                                    >
                                        <Link
                                            class="page-link"
                                            :href="getPageUrl(props.plans.path, props.plans.current_page - 3 + i)"
                                            preserve-scroll
                                            preserve-state
                                        >
                                            {{ props.plans.current_page - 3 + i }}
                                        </Link>
                                    </li>
                                </template>

                                <li class="page-item" v-if="props.plans.current_page < props.plans.last_page - 3">
                                    <span class="page-link dot">...</span>
                                </li>

                                <li class="page-item" v-if="props.plans.last_page !== 1" :class="{ active: props.plans.current_page === props.plans.last_page }">
                                    <Link
                                        class="page-link"
                                        :href="getPageUrl(props.plans.path, props.plans.last_page)"
                                        preserve-scroll
                                        preserve-state
                                    >
                                        {{ props.plans.last_page }}
                                    </Link>
                                </li>

                                <li class="page-item" :class="{ disabled: !props.plans.next_page_url || props.plans.current_page === props.plans.last_page }">
                                    <Link
                                        class="page-link"
                                        :href="props.plans.next_page_url && props.plans.current_page < props.plans.last_page ? props.plans.next_page_url : ''"
                                        preserve-scroll
                                        preserve-state
                                        :aria-disabled="props.plans.current_page === props.plans.last_page"
                                    >
                                        <i class="material-icons md-chevron_left"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>


        </section>
        <Footer :companies="props.companies" />
    </main>
</template>