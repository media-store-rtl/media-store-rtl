<script setup>

import { computed,watch,ref} from 'vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import swal from 'sweetalert2';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';

const errors = computed(() => usePage().props.errors);
const props = defineProps({products:Object,users:Object,notifications:Object,statuses:Object,alert: Object,
    names:Object,companies:Object,descriptions:Object,userPrice:Number,cart:Object
});

const form = useForm({
    id: null,
    type:null
});

const submitRemove = (id,type) => {
    form.id = id
    form.type = type
    form.post(route('favorite.store'));

};

watch(() => props.alert, (val) => {
  if (val) {
    if (val.title) {
      swal.fire(val.title, val.text, val.icon);
    } else {
      swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', swal.stopTimer);
          toast.addEventListener('mouseleave', swal.resumeTimer);
        }
      }).fire({
        title: val.text,
        icon: val.icon,
      });
    }
  }
});

watch(() => errors.value, (val) => {
  if (val && Object.keys(val).length > 0) {
    Object.values(val).forEach((errMsg) => {
      swal
        .mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
          },
        })
        .fire({
          title: errMsg,
          icon: "error",
        });
    });
  }
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
const pagination = ref(props.products);
</script>
<template>
<Header :cart="props.cart" :cartPrice="props.cartPrice" :cartCount="props.cartCount" :cartDiscount="props.cartDiscount" :userPrice="props.userPrice"
        :cartCoupon="props.cartCoupon" :cartTotal="props.cartTotal" :alert="props.alert" :users="props.users"
        :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
<main class="main-wrap rtl">
        <section class="content-main" >
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
                <!-- <BreezeValidationErrors class="col-sm-4 fixed-bottom alert alert-warning alert-dismissible fade show mt-3 ms-auto" /> -->
                <div class="card mb-4" v-if="props.products.total > 0">
                    <div class="card-body">
                        <div class="row" >
                            <div class="col-xl-3 col-lg-6 col-md-6" v-for="(product,index) in props.products.data" :key="index">
                                <div class="card card-product-grid">
                                    
                                    <Link v-if="product.favoritable_type == 'App\\Models\\Product' && product.favoritable.group.name == 'فرم'" :href="route('form.show',product.favoritable.slug)" class="img-wrap">
                                        <img v-if="product.favoritable.image && product.favoritable.image.status == 4 || product.favoritable.image.status == 5" :src="$page.props.ziggy.url+'/storage/'+product.favoritable.image.url" class="card-img h-100" :alt="product.favoritable.name">
                                        <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="card-img h-100" :alt="product.name">
                                    </Link>
                                    <Link v-else-if="product.favoritable_type == 'App\\Models\\Product'" :href="route('website-templates.show',product.favoritable.slug)" class="img-wrap">
                                        <img v-if="product.favoritable.image && product.favoritable.image.status == 4 || product.favoritable.image.status == 5" :src="$page.props.ziggy.url+'/storage/'+product.favoritable.image.url" class="card-img h-100" :alt="product.favoritable.name">
                                        <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="card-img h-100" :alt="product.name">
                                    </Link>
                                    <Link v-else-if="product.favoritable_type == 'App\\Models\\WebDesign' && product.favoritable.group.name == 'کافی نت'" :href="route('cafe-net.show',product.favoritable.slug)" class="img-wrap">
                                        <img v-if="product.favoritable.image && product.favoritable.image.status == 4" :src="$page.props.ziggy.url+'/storage/'+product.favoritable.image.url" class="card-img h-100" :alt="product.favoritable.name">
                                        <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="card-img h-100" :alt="product.name">
                                    </Link>
                                    <Link v-else-if="product.favoritable_type == 'App\\Models\\WebDesign'" :href="route('website-design.show',product.favoritable.slug)" class="img-wrap">
                                        <img v-if="product.favoritable.image && product.favoritable.image.status == 4" :src="$page.props.ziggy.url+'/storage/'+product.favoritable.image.url" class="card-img h-100" :alt="product.favoritable.name">
                                        <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="card-img h-100" :alt="product.name">
                                    </Link>
                                    <Link v-else-if="product.favoritable_type == 'App\\Models\\Tarahi'" :href="route('project.show',product.favoritable.slug)" class="img-wrap">
                                        <img v-if="product.favoritable.image && product.favoritable.image.status == 4 " :src="$page.props.ziggy.url+'/storage/'+product.favoritable.image.url" class="card-img h-100" :alt="product.favoritable.title">
                                        <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="card-img h-100" :alt="product.title">
                                    </Link>
                                    <div class="info-wrap">
                                        <a href="" class="title" v-if="product.favoritable_type == 'App\\Models\\Product'">نام محصول:</a>
                                        <a href="" class="title" v-else-if="product.favoritable_type == 'App\\Models\\WebDesign'">نام پلن:</a>
                                        <a href="" class="title" v-else-if="product.favoritable_type == 'App\\Models\\Tarahi'">نام پروژه:</a>
                                        <div class="price mt-1 text-start text-nofull" v-if="product.favoritable_type == 'App\\Models\\Product'">{{ product.favoritable.name }}</div>
                                        <div class="price mt-1 text-start text-nofull" v-else-if="product.favoritable_type == 'App\\Models\\WebDesign'">{{ product.favoritable.name }}</div>
                                        <div class="price mt-1 text-start text-nofull" v-else-if="product.favoritable_type == 'App\\Models\\Tarahi'">{{ product.favoritable.title }}</div>
                                    </div>
                                    <div class="price mt-1 text-start mb-1 ms-1">
                                        <button href="#" @click.prevent="submitRemove(product.favoritable_id,product.favoritable_type)" class="btn btn-sm font-sm btn-light rounded"> <i class="material-icons md-delete_forever"></i>
                                            <span v-if="form.processing && form.id == product.favoritable_id && form.type == product.favoritable_type">پردازش...</span>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
                                            v-if="form.processing && form.id == product.favoritable_id && form.type == product.favoritable_type"></span>
                                            <span v-else>حذف</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination-area mb-20 mt-20" v-if="pagination && pagination.total > 8">
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
                <div v-else>
                    <p>گزینه ای یافت نشد.</p>
                </div>
        </section>

            <Footer :companies="props.companies" />
    </main>
</template>
