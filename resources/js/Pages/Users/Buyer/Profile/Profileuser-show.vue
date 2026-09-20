<script setup>
import { computed,ref} from 'vue';
import { Head, Link, useForm,usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';


const errors = computed(() => usePage().props.errors);

const props = defineProps({
    users:Object,user:Object,companies:Object,orders_count:Number,userPrice:Number,
    user_products:Object,descriptions:Object,user_tarahis:Object,user_designers:Object,
    cart:Object,userResults:Object
});

const orders = ref([]);

props.user.orders.forEach(order => {

    orders.value = +orders.value + ((order.price*order.count)-order.discount)
});
const orders_products = ref([]);

if (props.user.orders_product) {
    props.user.orders_product.forEach(element => {
        orders_products.value.push(element.price*element.count-element.comison-
        element.tax - element.complications)
    });
}
const orders_counts = ref([]);
if (props.user.orders_product) {

        orders_counts.value = props.user.orders_product.length

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
</script>
<template>
<Header :cart="props.cart" :alert="props.alert" :users="props.users"
        :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />
    <main class="main-wrap rtl">
            <section class="content-main">
                <div class="content-header">
                    <div>
                        <h2 class="content-title card-title" v-if="props.descriptions">{{ props.descriptions.subject }}</h2>
                        <p v-if="props.descriptions" >{{ props.descriptions.text }}</p>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-header bg-brand-2" style="height: 150px"></div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl col-lg flex-grow-0" style="flex-basis: 230px">
                                <div class="img-thumbnail shadow w-100 bg-white position-relative text-center" style="height: 190px; width: 200px; margin-top: -120px">
                                    <img v-if="props.user.image && props.user.image.status == 4 " :src="$page.props.ziggy.url+'/storage/'+props.user.image.url" class="center-xy img-fluid" :alt="props.user.user_name" />
                                    <img v-else :src="$page.props.ziggy.url+'/storage/images/default-user.png'" class="center-xy img-fluid" :alt="props.user.user_name" />
                                </div>
                            </div>

                            <div class="col-xl col-lg">
                                <h3 v-if="props.user">{{props.user.name_show}}</h3>
                                <p v-if="props.user.profile && props.user.profile.status == 4">{{props.user.profile.biography}}</p>
                            </div>
                        </div>
                        <hr class="my-4" />
                        <div class="row g-4">
                            <div class="col-md-12 col-lg-4 col-xl-2">
                                <article class="box">
                                    <p class="mb-0 text-muted">تعداد فروش:</p>
                                    <h5 class="text-success text-start">{{ (orders_counts).toLocaleString("fa-IR") }}</h5>
                                    <p class="mb-0 text-muted">درآمد خالص:</p>
                                    <h5 class="text-success mb-0 text-start" v-if="orders_products > 0">
                                        {{ (orders_products).toLocaleString("fa-IR") }}
                                    </h5>
                                    <h5 class="text-success mb-0 text-start" v-else >
                                        {{(0).toLocaleString("fa-IR")}}
                                    </h5>
                                </article>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="card mb-4" v-if="props.userResults.total > 0" >
                    <div class="card-body">
                        <h3 class="card-title">محصولات</h3>
                        <div class="row" >
                            <div class="col-xl-2 col-lg-3 col-md-6" v-for="(result,index) in props.userResults.data" :key="index">
                                <div class="card card-product-grid" v-if="result.image.imageable_type == 'App\\Models\\Product'">
                                    <Link :href="route('website-templates.show',result.slug)" class="img-wrap">
                                        <img v-if="result.image && result.image.status == 4" :src="$page.props.ziggy.url+'/storage/'+result.image.url" class="card-img h-100" :alt="result.name">
                                        <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="card-img h-100" :alt="result.name">
                                    </Link>
                                    <div class="info-wrap">
                                        <a href="" class="title">نام محصول:</a>
                                        <div class="price mt-1 text-start">{{ result.name }}</div>
                                    </div>
                                </div>
                                <div class="card card-product-grid" v-if="result.image.imageable_type == 'App\\Models\\WebDesign'">
                                    <Link :href="route('website-design.show',result.slug)" class="img-wrap">
                                        <img v-if="result.image && result.image.status == 4" :src="$page.props.ziggy.url+'/storage/'+result.image.url" class="card-img h-100" :alt="result.name">
                                        <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="card-img h-100" :alt="result.name">
                                    </Link>
                                    <div class="info-wrap">
                                        <a href="" class="title">عنوان خدمت:</a>
                                        <div class="price mt-1 text-start">{{ result.name }}</div>
                                    </div>
                                </div>
                                <div class="card card-product-grid" v-if="result.image.imageable_type == 'App\\Models\\Blog'">
                                    <Link :href="route('blog.show',result.slug)" class="img-wrap">
                                        <img v-if="result.image && result.image.status == 4" :src="$page.props.ziggy.url+'/storage/'+result.image.url" class="card-img h-100" :alt="result.name">
                                        <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="card-img h-100" :alt="result.name">
                                    </Link>
                                    <div class="info-wrap">
                                        <a href="" class="title">عنوان مقاله :</a>
                                        <div class="price mt-1 text-start">{{ result.title }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="mt-5" v-if="props.userResults.total > 9">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                                <li :class="['page-item',link.url == null ? 'disable' :'',link.active ? 'active' : '']"
                                v-for="link in props.userResults.links" :key="link.id" >
                                <Link class="page-link" :href="link.url == null ? '#' : link.url"
                                v-html="link.label" ></Link>
                                </li>
                            </ul>
                        </nav>
                    </div> -->
                    <div class="pagination-area mb-20 mt-20" v-if="props.userResults && props.userResults.total > 9">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                                <li class="page-item" :class="{ disabled: !props.userResults.prev_page_url || props.userResults.current_page === 1 }" >
                                    <Link class="page-link" :href=" props.userResults.prev_page_url && props.userResults.current_page > 1 ? props.userResults.prev_page_url : ''" preserve-scroll preserve-state :aria-disabled="props.userResults.current_page === 1">
                                        <i class="material-icons md-chevron_right"></i>
                                    </Link>
                                </li>
                                <li class="page-item" :class="{ active: props.userResults.current_page === 1 }">
                                    <Link class="page-link" :href="getPageUrl(props.userResults.first_page_url, 1)" preserve-scroll preserve-state >1</Link>
                                </li>
                                <li class="page-item" v-if="props.userResults.current_page > 4">
                                    <span class="page-link dot">...</span>
                                </li>
                                <template v-for="i in 5" :key="i">
                                    <li class="page-item" v-if=" props.userResults.current_page - 3 + i > 1 && props.userResults.current_page - 3 + i < props.userResults.last_page" :class="{ active: props.userResults.current_page === props.userResults.current_page - 3 + i }">
                                        <Link class="page-link" :href="getPageUrl(props.userResults.path, props.userResults.current_page - 3 + i)" preserve-scroll preserve-state >
                                            {{ props.userResults.current_page - 3 + i }}
                                        </Link>
                                    </li>
                                </template>

                                <li class="page-item" v-if="props.userResults.current_page < props.userResults.last_page - 3">
                                    <span class="page-link dot">...</span>
                                </li>
                                <li class="page-item" v-if="props.userResults.last_page !== 1" :class="{ active: props.userResults.current_page === props.userResults.last_page }">
                                    <Link class="page-link" :href="getPageUrl(props.userResults.path, props.userResults.last_page)" preserve-scroll preserve-state>
                                        {{ props.userResults.last_page }}
                                    </Link>
                                </li>
                                <li class="page-item" :class="{ disabled:!props.userResults.next_page_url || props.userResults.current_page === props.userResults.last_page,}">
                                    <Link class="page-link" :href="props.userResults.next_page_url && props.userResults.current_page < props.userResults.last_page
                                                ? props.userResults.next_page_url: ''"preserve-scroll preserve-state :aria-disabled="props.userResults.current_page === props.userResults.last_page">
                                        <i class="material-icons md-chevron_left"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <Footer :companies="props.companies"/>
    </main>
</template>
