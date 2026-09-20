<script setup>

import { computed,ref} from 'vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import swal from 'sweetalert2';

const errors = computed(() => usePage().props.errors);

const props = defineProps({
    auth:Object,time:String,products:Object,alert:Object,link:Object,dark: String,wallet:Number,
    id:Object,newfilename:Object,filename:Object,orders:Object,users:Object,cart:Object,request:Object,token:String,notifications: Object,
    companies:Object,descriptions:Object,
});

const form =  useForm({id:null,link:null,order:null,model:null,contract:null,file:null,order_id:null,web_design_id:null});
const contract = ref([]);



const validate = (text)=>{
    swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
    }}).fire({
        title: text,
        icon:'error',
    })
}


const submitLink = (id,order_id) =>{
    if(form.Link !== null)
    {
        form.id = id
        form.order = order_id
        form.post(route('link.store'))
    }
    else
    {
        let text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
    
};

const submitContract = (order,contract) =>{
    
    if(form.file !== null)
    {
        form.contract = contract && contract.id ? contract.id : null
        form.id = contract && contract.file ? contract.file.id : null
        form.order_id = order.order_id
        form.web_design_id = order.orderable.id
        form.model = order.orderable_type
        form.post(route('download.store'))
    }
    else
    {
        let text = 'موارد ستاره دار الزامی است.'
        validate(text)
    }
    
};

const type = ref();
const rouzekari = ref(0);
if (props.orders && props.orders.sub_order) {
    
    props.orders.sub_order.forEach(element => {
        
        if (element.orderable_type == 'App\\Models\\WebDesign') {
            type.value = true
            rouzekari.value += Number(element.orderable.rouzekari)
        }
    });
}

const submitIdentity = () =>{
    if (props.orders.user && props.orders.user.identity.status == 4) {
        form.get(route('webdesign.edit',[props.orders.id]))
    }
    else
    {
        let text = 'اطلاعات هویتی تایید نشده است لطفا برای تایید اطلاعات هویتی اقدام نمایید.'
        validate(text)
    }
}

const submitCart =(id,order_id) => {

    // console.log(id);
    form.order_id = order_id,
    form.id = id,
    form.model = 'App\\Models\\WebDesign';
    form.post(route('cart.store'))

}

if (props.orders && props.orders.sub_order) {
    
    props.orders.sub_order.forEach(element => {
           
            
        if (element && element.orderable && element.orderable.register_designer ) {
             
            if (element.orderable.register_designer.length > 0) {
                
                element.orderable.register_designer.forEach(element_register_designer =>{
                    // console.log(element_register_designer);
                    contract.value.push( element_register_designer)
                    
                })
            }
            // else
            // {
            //     contract.value = null
            // }  
        }
    });
}

// console.log(contract.value);
// console.log(type.value);
// console.log(rouzekari.value);
</script>
<template>
<Header :cart="props.cart"  :wallet="props.wallet" :alert="props.alert" :users="props.users"
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
                <form>
                   <div class="card">
                        <header class="card-header">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6 mb-lg-0 mb-15">
                                    <br />
                                    <small class="text-muted">شناسه سفارش: {{props.orders.id}}</small>
                                </div>
                                <div class="col-lg-6 col-md-6 ms-auto text-md-start" v-for="(contrac,index) in contract" :key="index">
                                    <Link class="btn btn-primary ms-3" v-if="type == false || rouzekari < 2 || contrac && contrac.status == 4 " :href="route('factor.show',[props.orders.id])">فاکتور</Link>
                                    <button class="btn btn-primary" v-if="type == true && rouzekari > '1' && contrac  == null  || contrac && contrac.file && contrac.file.status !== '4' || contrac && contrac.status !== '4' " @click.prevent="submitIdentity" >قرار داد خام</button>
                                </div>
                            </div>
                        </header>
                        <div class="card-body">
                            <div class="row gx-5">
                                <div class="col-lg-12">
                                    <section class="content-body p-xl-4">
                                        <div class="table-responsive ">
                                            <div class="table table-hover">
                                                <thead>
                                                    <tr >
                                                        <th scope="col"> خدمات / محصول</th>
                                                        <th scope="col">دامنه</th>
                                                        <th scope="col">عملیات</th>
                                                    </tr>
                                                </thead>
                                                <tbody v-if="props.orders">                                            
                                                    <tr v-for="(order,index ) in props.orders.sub_order" :key="index" >
                                                        <template v-if="order.orderable_type == 'App\\Models\\WebDesign'">
                                                            <td >
                                                                <div class="left">
                                                                    <img v-if="order.orderable && order.orderable.image && order.orderable.image.status == 4" :src="$page.props.ziggy.url +'/storage/' +order.orderable.image.url" class="img-sm img-thumbnail" :alt="order.orderable.name">
                                                                    <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="img-sm img-thumbnail" :alt="order.orderable.name">
                                                                </div>
                                                                <div class="info">
                                                                    <h6 class="mb-0">
                                                                        <span style="vertical-align: inherit;">
                                                                            <span style="vertical-align: inherit;" v-if="order.orderable_type == 'App\\Models\\Product'">{{order.orderable.name}}</span>
                                                                            <span style="vertical-align: inherit;" v-else-if="order.orderable_type == 'App\\Models\\Tarahi'">{{order.orderable.title}}</span>
                                                                            <span style="vertical-align: inherit;" v-if="order.orderable_type == 'App\\Models\\WebDesign'">{{ order.orderable.name}}</span>
                                                                        </span>
                                                                    </h6>
                                                                </div>
                                                            </td>
                                                            
                                                            <td>
                                                                <div class="col-sm-6" v-if="order.orderable.rouzekari > 1">
                                                                    <label class="form-label">فایل <span class="text-danger">*</span></label>
                                                                    
                                                                    <div class="input-upload" v-for="(contrac,index) in contract" :key="index">
                                                                        <div class="mt-2">
                                                                            <a v-if="contrac && contrac.file" :href="$page.props.ziggy.url+'/storage/'+contrac.file.url">قرار داد</a> 
                                                                        </div>
                                                                    
                                                                        <input v-if="contract == null || contrac &&  contrac.status < 1 " class="form-control" type="file" @input="form.file = $event.target.files[0]" id="file" accept="zip/rar/*" />
                                                                        <progress v-if="form.progress" :value="form.progress.percentage" max="5">
                                                                            {{ form.progress.percentage }}%
                                                                        </progress>
                                                                    </div>
                                                                </div>
                                                                
                                                            </td>
                                                            <td class="d-flex ">
                                                                <template v-for="(contrac,index) in contract" :key="index">
                                                                    <button v-if="contrac == null && order.orderable.rouzekari > 1 || contrac &&  contrac.status < 1 && order.orderable.rouzekari > 1 " class="btn btn-primary me-auto" @click.prevent="submitContract(order,contrac)">بارگزاری قرار داد</button>
                                                                    <p v-else>  
                                                                        <span v-if="contrac && contrac.status == 0" class="badge badge-pill badge-soft-info">ثبت</span>
                                                                        <span v-if="contrac && contrac.status == 1" class="badge badge-pill badge-soft-warning">انتظار</span>
                                                                        <span v-if="contrac && contrac.status == 2" class="badge badge-pill badge-soft-secondary">در حال بررسی</span>
                                                                        <span v-if="contrac && contrac.status == 3" class="badge badge-pill badge-soft-danger"> منقضی</span>
                                                                        <span v-if="contrac && contrac.status == 4" class="badge badge-pill badge-soft-success">تایید</span>
                                                                        <span v-if="contrac && contrac.status == 5" class="badge badge-pill badge-soft-pink">واگذار شده</span>
                                                                        <span v-if="contrac && contrac.status == 6" class="badge badge-pill badge-soft-dark">تمام شده</span>
                                                                        <span v-if="contrac && contrac.status == 7" class="badge badge-pill badge-soft-info">ثبت نظر</span>
                                                                    </p>
                                                                
                                                                <button v-if="contrac && contrac.status == 4 && props.orders.col !== props.orders.payment " type="button" class="form-control btn btn-sm btn-primary"   @click="submitCart(contrac.id,order.order_id)">پرداخت</button>
                                                                <form v-if="order.orderable.registerDesigner" class="col-lg-4 col-md-4 me-auto" :action="route('download.store')" method="POST" >
                                                                    <input type="hidden" name="_token" :value="token" />
                                                                    <input type="hidden" name="id" :value="order.order_id">
                                                                    <input type="hidden" name="model" :value="order.orderable_type">
                                                                    <button type="submit" class="form-control btn btn-sm btn-primary">دانلود</button>
                                                                </form>
                                                                </template>
                                                            </td>
                                                        </template>
                                                        <template v-else>
                                                            <td >
                                                                <div class="left">
                                                                    <img v-if="order.orderable && order.orderable.image" :src="$page.props.ziggy.url +'/storage/' +order.orderable.image.url" class="img-sm img-thumbnail" :alt="order.orderable.name">
                                                                    <img v-else :src="$page.props.ziggy.url+'/storage/'+props.companies.image.url" class="img-sm img-thumbnail" :alt="order.orderable.name">
                                                                </div>
                                                                <div class="info">
                                                                    <h6 class="mb-0">
                                                                        <span style="vertical-align: inherit;">
                                                                            <span style="vertical-align: inherit;" v-if="order.orderable_type == 'App\\Models\\Product'">{{order.orderable.name}}</span>
                                                                            <span style="vertical-align: inherit;" v-else-if="order.orderable_type == 'App\\Models\\Tarahi'">{{order.orderable.title}}</span>
                                                                            <span style="vertical-align: inherit;" v-else-if="order.orderable_type == 'App\\Models\\WebDesign' ">{{ order.orderable.name}}</span>
                                                                        </span>
                                                                    </h6>
                                                                </div>
                                                            </td>
                                                            <td v-if="order.link !== null">{{order.link.link}}</td>
                                                            <td v-if="order.link == null && order.orderable.group.name !== 'فرم' && order.orderable_type !== 'App\\Models\\Tarahi'">
                                                                <input type="text" v-model.lazy.trim="form.link" style="width: 100%;" :placeholder="'لطفا آدرس دامنه وب سایت خود را وارد نمایید.مثال : '+route('index')">
                                                            </td>
                                                            <td class="d-flex ">
                                                                <Link v-if="order.link == null && order.orderable_type !== 'App\\Models\\Tarahi' && order.orderable.group.name !== 'فرم'" class="btn btn-primary" @click.prevent="submitLink(order.id,order.order_id)"> ثبت دامنه</Link>
                                                                <form  v-else class="col-lg-4 col-md-4 me-auto" :action="route('download.store')" method="POST" >
                                                                    <input type="hidden" name="_token" :value="token" />
                                                                    <input type="hidden" name="id" :value="order.orderable_id">
                                                                    <input type="hidden" name="model" :value="order.orderable_type">
                                                                    <button type="submit" class="form-control btn btn-sm btn-primary">دانلود</button>
                                                                </form>
                                                            </td>
                                                        </template>
                                                    </tr>
                                                </tbody>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                   </div>
                   </form>
            </section>
            <Footer :companies="props.companies" />
    </main>
</template>
