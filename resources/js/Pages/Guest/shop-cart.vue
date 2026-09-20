<script setup>

import Header from '@/Pages/Guest/Header2.vue';
import Footer from '@/Pages/Guest/Footer2.vue';
import {Link, useForm} from '@inertiajs/vue3';

const props = defineProps({
    auth: Object,alert: Object,random_coupon: Object,companies:Object,path:String,cart:Object,
    menus: Object,socials: Object,time:String,menu: Object,namads:Object
});

const form = useForm({
    id: null, count: null, coupon: null, cartPrice: props.cartPrice, cartCount: props.cartCount,
    cartDiscount: props.cartDiscount, cartTotal: props.cartTotal, edit: null, type: null,model:null,
});


const submitRemove = (id,model) => {
    form.id = id,
    form.model = model,
    form.type = 'del',
    form.post(route('cart.store'))
};



const submitRemoveAll = (id) => {
    form.id = id
    form.delete(route('cart.destroy','all'))

};


</script>
<template>

<body >
   
     <Head title="shop-cart" /> 
     <Header  :companies="props.companies" :results="props.results" :menus="props.menus" :cart="props.cart" :menu="props.menu" />
    <main class="main">
        <div class="page-header breadcrumb-wrap">
            <div class="container">
                <div class="breadcrumb">
                    <a href='/' rel='nofollow'>صفحه اصلی<i class="fi-rs-home mr-5"></i></a>
                    <span></span> خرید
                    <span></span> سبد خرید
                </div>
            </div>
        </div>
        <div class="container mb-80 mt-50">
            <div class="row">
                <div class="col-lg-8 mb-40">
                    <h1 class="heading-2 mb-10">سبد خرید شما</h1>
                    <div class="d-flex justify-content-between" v-if="props.cart.count > 0">
                        <h6 class="text-body">تعداد<span class="text-brand">{{props.cartCount}}</span> محصول در سبد خرید شما وجود دارد</h6>
                        <h6 class="text-body" ><a href="#" class="text-muted" @click="submitRemoveAll"><i class="fi-rs-trash mr-5"></i>حذف سبد</a></h6>
                    </div>
                    <div class="d-flex justify-content-between" v-else>
                        <h6 class="text-body">محصولی<span class="text-brand"></span>  در سبد خرید شما وجود ندارد</h6>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8" >
                    <div class="table-responsive shopping-summery" v-if="props.cart.count > 0">
                        <table class="table table-wishlist">
                            <thead>
                                <tr class="main-heading">
                                    <th class="custome-checkbox start pl-30">
                                        <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="">
                                        <label class="form-check-label" for="exampleCheckbox11"></label>
                                    </th>
                                    <th scope="col" colspan="2">محصول</th>
                                    <th scope="col">قیمت واحد</th>
                                    <th scope="col">تعداد</th>
                                    <th scope="col">تخفیف</th>
                                    <th scope="col">مالیات</th>
                                    <th scope="col">پرداختی</th>
                                    <th scope="col" class="end">حذف</th>
                                </tr>
                            </thead>
                            <tbody v-if="props.cart.count > 0">
                                <tr class="pt-30" v-for="(product,index ) in props.cart.products" :key="index">
                                    <td class="custome-checkbox pl-30">
                                        <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="">
                                        <label class="form-check-label" for="exampleCheckbox1"></label>
                                    </td>
                                    <td class="image product-thumbnail pt-40">
                                        <img v-if="product['product'].image" :src="$page.props.ziggy.url+'/storage/'+product['product'].image.url" alt="#">
                                        <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" alt="#">
                                    </td>
                                    <td class="product-des product-name">
                                        <h6 class="mb-5">
                                            <Link class='product-name mb-10 text-heading' v-if="product['model'] == 'App\\Models\\Product'" href="">{{  product['product'].name }}</Link>
                                            <Link class='product-name mb-10 text-heading' v-if="product['model'] == 'App\\Models\\WebDesign'" href="">{{ product['product'].name }}</Link>
                                            <Link class='product-name mb-10 text-heading' v-if="product['model'] == 'App\\Models\\Tarahi'" href="">{{ 'پروژه ' + product['product'].title }}</Link>
                                            <Link class='product-name mb-10 text-heading' v-if="product['model'] == 'App\\Models\\ReqDesigner'" href="">{{  'ضمانت پروژه ' + product['product'].tarahi_register.title }}</Link>
                                        </h6>
                                        <!-- <div class="product-rate-cover">
                                            <div class="product-rate d-inline-block">
                                                <div class="product-rating" style="width:0%">
                                                </div>
                                            </div>
                                            <span class="font-small ml-5 text-muted"> (0)</span>
                                        </div> -->
                                    </td>
                                    <td class="price" data-title="قیمت واحد">
                                        <h5 class="text-body" v-if="product['product'].price">{{ Number(product['product'].price).toLocaleString("fa-IR") }}  </h5>
                                        <h5 class="text-body" v-else>{{ (product['total']/product['count']).toLocaleString("fa-IR") }}  </h5>
                                    </td>
                                    <td class="price" data-title="تعداد">
                                        <h5 class="text-body">{{ (product['count']).toLocaleString("fa-IR") }}  </h5>
                                    </td>
                                    <td class="price" data-title="تخفیف">
                                        <h5 class="text-body">{{ (product['discount']).toLocaleString("fa-IR") }}   </h5>
                                    </td>
                                    <td class="price" data-title="مالیات">
                                        <h5 class="text-body">{{ (product['tax']).toLocaleString("fa-IR") }}   </h5>
                                    </td>
                                    <td class="price" data-title="پرداختی">
                                        <h5 class="text-brand">{{ (product['col']).toLocaleString("fa-IR") }}   </h5>
                                    </td>
                                    <td class="action text-center" data-title="حذف"><a href="#" class="text-body" @click.prevent="submitRemove(index,product.model)"><i class="fi-rs-trash"></i></a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="divider-2 mb-30"></div>
                </div>
                <div class="col-lg-4" v-if="props.cart.count > 0">
                    <div class="border p-md-4 cart-totals ml-30">
                        <div class="table-responsive">
                            <table class="table no-border">
                                <tbody>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">تعداد</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.count).toLocaleString("fa-IR") }}  </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">جمع</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.total).toLocaleString("fa-IR") }} ریال </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">تخفیف</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.discount).toLocaleString("fa-IR") }} ریال </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" colspan="2">
                                            <div class="divider-2 mt-10 mb-10"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">مالیات</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.tax).toLocaleString("fa-IR") }} ریال  </h5></td> </tr>
                                        <tr>

                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">جمع کل</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.col).toLocaleString("fa-IR") }} ریال </h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="col" colspan="2">
                                            <div class="divider-2 mt-10 mb-10"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">قابل پرداخت</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-brand text-end">{{ (props.cart.payment).toLocaleString("fa-IR") }} ریال  </h5></td> </tr>
                                        <tr>

                                    </tr>
                                    <tr>
                                        <td class="cart_total_label">
                                            <h6 class="text-muted">مانده</h6>
                                        </td>
                                        <td class="cart_total_amount">
                                            <h5 class="text-heading text-end">{{ (props.cart.balance).toLocaleString("fa-IR") }} ریال  </h5></td> </tr>
                                        <tr>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Link :href="route('shop-checkout.index')" class="btn mb-20 w-100">پرداخت<i class="fi-rs-sign-out ml-15"></i></Link>
                    </div>
                </div>
            </div>
        </div>

    </main>
    <Footer :companies="props.companies"  :namads="props.namads" :socials="props.socials" :time="props.time" :menus="props.menus" :path="props.path" />
</body>
</template>
