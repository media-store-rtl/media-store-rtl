<script setup>
import { computed, ref } from 'vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';

const props = defineProps({
    users: Object,
    plans: Object,
    wallet: Number,
    companies: Object,
    descriptions: Object,
    alert: Object,
    cart: Object,
});

const page = usePage();
const errorBag = computed(() => page.props.errors || {});
const success = computed(() => page.props.flash?.success || null);

const form = useForm({
    name: '',
    slug: '',
    description: '',
    price: '',
    duration_days: 365,
    max_users: 5,
    is_active: true,
});

const openMenu = ref(null);

const toggleMenu = (id) => {
    openMenu.value = openMenu.value === id ? null : id;
};

const getPageUrl = (baseUrl, pageNumber) => {
    if (typeof window !== 'undefined') {
        let queryString = window.location.search;
        queryString = queryString.replace(/(\?|&)page=\d+/, '');
        return \`${baseUrl}?page=${pageNumber}${queryString ? '&' + queryString.substring(1) : ''}\`;
    }

    return \`${baseUrl}?page=${pageNumber}\`;
};

const submit = () => {
    form.post(route('accountingSubscriptionAdmin.store'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset('name', 'slug', 'description', 'price');
            form.duration_days = 365;
            form.max_users = 5;
            form.is_active = true;
        },
    });
};
</script>

<template>
    <Header
        :cart="props.cart"
        :wallet="props.wallet"
        :alert="props.alert"
        :users="props.users"
        :companies="props.companies"
    />

    <div class="screen-overlay"></div>

    <main class="main-wrap rtl">
        <section class="content-main">
            <div class="row content-header">
                <div class="col-sm-12">
                    <div class="content-title card-title">
                        <span v-if="props.descriptions" v-html="props.descriptions.subject"></span>
                        <span v-else>پلن‌های اشتراک حسابداری</span>
                    </div>

                    <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                    <p v-else>ساخت و مدیریت پلن‌های اشتراک حسابداری از این بخش انجام می‌شود.</p>
                </div>
            </div>

            <div v-if="success" class="alert alert-success mb-4">{{ success }}</div>

            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="mb-4">ساخت پلن جدید</h5>

                    <form @submit.prevent="submit">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">نام پلن</label>
                                <input v-model="form.name" class="form-control" placeholder="مثلاً اشتراک یک‌ساله حسابداری">
                                <small v-if="errorBag.name" class="text-danger">{{ errorBag.name }}</small>
                            </div>

                            <div class="col-md-6 mb-3">
                                <label class="form-label">Slug اختیاری</label>
                                <input v-model="form.slug" class="form-control" placeholder="accounting-annual">
                                <small v-if="errorBag.slug" class="text-danger">{{ errorBag.slug }}</small>
                            </div>

                            <div class="col-12 mb-3">
                                <label class="form-label">توضیحات</label>
                                <textarea v-model="form.description" class="form-control" rows="3"></textarea>
                                <small v-if="errorBag.description" class="text-danger">{{ errorBag.description }}</small>
                            </div>

                            <div class="col-md-4 mb-3">
                                <label class="form-label">قیمت (تومان)</label>
                                <input v-model="form.price" type="number" min="0" class="form-control">
                                <small v-if="errorBag.price" class="text-danger">{{ errorBag.price }}</small>
                            </div>

                            <div class="col-md-4 mb-3">
                                <label class="form-label">مدت اشتراک (روز)</label>
                                <input v-model="form.duration_days" type="number" min="1" class="form-control">
                                <small v-if="errorBag.duration_days" class="text-danger">{{ errorBag.duration_days }}</small>
                            </div>

                            <div class="col-md-4 mb-3">
                                <label class="form-label">حداکثر کاربر</label>
                                <input v-model="form.max_users" type="number" min="1" class="form-control">
                                <small v-if="errorBag.max_users" class="text-danger">{{ errorBag.max_users }}</small>
                            </div>

                            <div class="col-12 mb-3">
                                <label class="form-check">
                                    <input v-model="form.is_active" type="checkbox" class="form-check-input">
                                    <span class="form-check-label">فعال و قابل خرید باشد</span>
                                </label>
                                <small v-if="errorBag.is_active" class="text-danger d-block">{{ errorBag.is_active }}</small>
                            </div>
                        </div>

                        <button class="btn btn-primary" :disabled="form.processing">
                            {{ form.processing ? 'در حال ثبت...' : 'ساخت پلن' }}
                        </button>
                    </form>
                </div>
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
                                    <th>محصول فروش</th>
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
                                        <span v-if="plan.is_active" class="badge badge-pill badge-soft-success">فعال</span>
                                        <span v-else class="badge badge-pill badge-soft-secondary">غیرفعال</span>
                                    </td>
                                    <td>#{{ plan.product_id }}</td>
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

        <Footer :companies="props.companies" />
    </main>
</template>
