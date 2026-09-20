<script setup>
import Footer from '@/Pages/Users/Buyer/footer.vue';
import Header from '@/Pages/Users/Buyer/header.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import swal from 'sweetalert2';
import { computed, ref } from 'vue';

const errors = computed(() => usePage().props.errors);


const props = defineProps({
    users: Object,
    cartPrice: Object,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    menus: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    subs: Object,
    wallet: Number,
    cart: Object,
});

const form = useForm({
    id: props.menus.id,
    parent_id: props.menus.parent_id,
    name: props.menus.name,
    status: props.menus.status,
    items: [
        {
            routeable_type: '',
            routeable_id: ''
        }
    ],
    subs: [],
    type: null,
    del: null,
});

const validate = (text) => {
    swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', swal.stopTimer);
            toast.addEventListener('mouseleave', swal.resumeTimer);
        },
    }).fire({
        title: text,
        icon: 'error',
    });
};




const submit = () => {
    if (form.name == null) {
        let text;
        text = 'موارد ستاره دار الزامی است.';
        validate(text);
    } else {
        form.post(route('route.store'),
        // {
        //     onFinish: () => submitTime(),
        // }
        );
    }
};

if (props.subs) {
    props.subs.data.forEach((element) => {
        form.subs.push(element);
    });
}

const submitSub = () => {
    // if (form.name == null) {
    //     let text;
    //     text = 'موارد ستاره دار الزامی است.';
    //     validate(text);
    // } else {
    //     form.put(route('route.update', form.id), 
        
    //     );
    // }

        const items = form.items.filter(item =>
        item.routeable_type.trim() !== '' &&
        item.routeable__id !== ''
        )

        if (items.length === 0) {
            validate('موارد ستاره دار الزامی است.')
            return
        }

        form.transform(data => ({
            ...data,
            items
        })).put(route('route.update', form.id))
};

const submitDel = (routeable_type, routeable_id) => {
    (form.type = routeable_type), (form.del = routeable_id);

    if (form.name == null) {
        let text;
        text = 'موارد ستاره دار الزامی است.';
        validate(text);
    } else {
        form.put(route('route.update', form.id)
        );
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

const pagination = ref(props.subs);
</script>
<template>
    <Header
        :cart="props.cart"
        :wallet="props.wallet"
        :alert="props.alert"
        :users="props.users"
        :orders="props.orders"
        :notifications="props.notifications"
        :dark="props.dark"
        :companies="props.companies"
    />
    <main class="main-wrap rtl">
        <section class="content-main">
            <div class="row content-header">
                <div class="d-flex col-sm-12">
                    <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                    <table class="d-flex me-auto">
                        <tbody>
                            <tr>
                                <td >
                                    <button
                                        @click.prevent="submit"
                                        :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing"
                                        class="btn btn-md font-sm hover-up rounded"
                                    >
                                        <span v-if="form.processing">پردازش...</span>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="form.processing"></span>
                                        <span v-else>ارسال</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-sm-12">
                    <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                </div>
            </div>
            <form>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card mt-4">
                            <div class="card-header">
                                <h4>اطلاعات</h4>
                            </div>
                            <div class="card-body">
                                <div class="col-lg-12">
                                    <div class="row gx-2">
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">نام<span class="text-danger">*</span></label>
                                                <div class="row gx-2">
                                                    <input v-model.lazy="form.name" placeholder="اینجا تایپ کنید" type="text" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="row gx-2">
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">نام مدل<span class="text-danger">*</span></label>
                                                <input
                                                    v-model.lazy="form.routeable_type"
                                                    placeholder="اینجا تایپ کنید"
                                                    type="text"
                                                    class="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">آیدی<span class="text-danger">*</span></label>
                                                <div class="d-flex">
                                                    <input
                                                        v-model.lazy="form.routeable_id"
                                                        placeholder="اینجا تایپ کنید"
                                                        type="text"
                                                        class="form-control"
                                                    />

                                                    <button
                                                        @click.prevent="submitSub"
                                                        :class="{ 'opacity-25': form.processing }"
                                                        :disabled="form.processing"
                                                        class="btn btn-md font-sm hover-up rounded"
                                                    >
                                                        <span v-if="form.processing">پردازش...</span>
                                                        <span
                                                            class="spinner-border spinner-border-sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                            v-if="form.processing"
                                                        ></span>
                                                        <span v-else>ایجاد</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div v-for="(item, index) in form.items" :key="index" class="row gx-2">

                                    <div class="col-lg-6">
                                        <div class="mt-4">
                                            <label class="form-label">نام مدل</label>

                                            <input
                                                v-model.lazy="item.routeable_type"
                                                type="text"
                                                class="form-control"
                                                placeholder="App\\Models\\Product"
                                            >
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="mt-4">
                                            <label class="form-label">آیدی</label>

                                            <div class="d-flex">

                                                <input
                                                    v-model.lazy="item.routeable_id"
                                                    type="number"
                                                    class="form-control"
                                                    placeholder="آیدی"
                                                >

                                                <button
                                                    v-if="index === form.items.length - 1"
                                                    type="button"
                                                    class="btn btn-success ms-2"
                                                    @click="form.items.push({
                                                        routeable_type: '',
                                                        routeable_id: ''
                                                    })"
                                                >
                                                    +
                                                </button>

                                                <button
                                                    v-if="form.items.length > 1"
                                                    type="button"
                                                    class="btn btn-danger ms-2"
                                                    @click="form.items.splice(index,1)"
                                                >
                                                    -
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="mt-4">
                                    <button
                                        @click.prevent="submitSub"
                                        :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing"
                                        class="btn btn-md rounded font-sm hover-up"
                                    >
                                        <span v-if="form.processing">پردازش...</span>
                                        <span
                                            class="spinner-border spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                            v-if="form.processing"
                                        ></span>
                                        <span v-else>ایجاد</span>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6" v-if="props.subs.total > 0">
                        <div class="card mt-4">
                            <div class="card-header">
                                <h4>زیر مجموع</h4>
                            </div>
                            <div class="card-body">
                                <div class="col-lg-12">
                                    <div class="row gx-2" v-for="(menu, index) in props.subs.data" :key="index">
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">نام مدل</label>
                                                <input
                                                    v-model.lazy="menu.routeable_type"
                                                    placeholder="اینجا تایپ کنید"
                                                    type="text"
                                                    class="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mt-4">
                                                <label class="form-label">آیدی</label>
                                                <div class="d-flex">
                                                    <input
                                                        v-model.lazy="menu.routeable_id"
                                                        placeholder="اینجا تایپ کنید"
                                                        type="text"
                                                        class="form-control"
                                                    />

                                                    <button
                                                        @click.prevent="submitDel(menu.routeable_type, menu.routeable_id)"
                                                        :class="{ 'opacity-25': form.processing }"
                                                        :disabled="form.processing"
                                                        class="btn btn-md font-sm hover-up rounded"
                                                    >
                                                        <span v-if="form.processing">پردازش...</span>
                                                        <span
                                                            class="spinner-border spinner-border-sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                            v-if="form.processing"
                                                        ></span>
                                                        <span v-else>حذف</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        <Footer :companies="props.companies" />
    </main>
</template>
