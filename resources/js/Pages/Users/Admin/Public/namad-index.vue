<script setup>

import { computed,ref} from 'vue';

import { Head, Link, useForm,usePage } from '@inertiajs/vue3';
import Header from '@/Pages/Users/Buyer/header.vue';
import Footer from '@/Pages/Users/Buyer/footer.vue';
import moment from "moment-jalaali";
import fa from "moment/src/locale/fa";
import Aside from '@/Components/AsideAdmin.vue';

const errors = computed(() => usePage().props.errors);

const props = defineProps({
    auth:Object,canResetPassword: Boolean,status: String,users:Object,ostans:Object,wallet:Number,
    shahrs:Object,notifications:Object,companies:Object,descriptions:Object,namads:Object,menus:Object,
    path:String,alert:Object,cart:Object
});

var now =  new Date();

const form =  useForm({
    id:props.users.id,
    user_name:props.users.user_name,
    name:props.users.name,
    lasst_name:props.users.lasst_name,
    name_show:props.users.name_show,
    tel:props.users.tel,
    birth:props.users.profile?props.users.profile.birth:null,
    gender:props.users.profile?props.users.profile.gender:null,
    email: props.users.email,
    image:props.users.image? props.users.image.url:null,
    biography:props.users.profile?props.users.profile.biography:null,
    password: null,
    password_confirmation: null,
    namads:[],

});


const menus = ref([]);

if (props.menus && props.menus.length > 0) {

    props.menus.forEach(element => {
        if (element.sections.length > 0 && element.routes.length > 0) {
            element.routes.forEach(route => {
                if(route.name == props.path)
                {
                    element.sections.forEach(section => {
                        if(section.name == 'namads')
                        {
                            menus.value.push(element)
                        }
                    });
                }
            });
        }
    });
}

const menu = ref([]);

    menus.value.forEach(element => {

        if(element.children.length > 0) {
            element.children.forEach(child => {
                if(child.routes.length > 0){
                    child.routes.forEach(route => {
                        if (route.name == props.path)
                        {
                            if (child.sections.length > 0)
                            {
                                child.sections.forEach(section =>
                                {
                                    if(section.name == 'namads')
                                    {
                                        menu.value.push(child)
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
    });


menu.value.forEach(social => {

    props.namads.data.forEach(element => {

        if(social.id == element.title )
        {

            if (element.link) {

                form.namads.push({link : element.link.user_id == props.users.id ? element.link.link : null ,
                    id: element.link.linkable_id ? element.link.id :null,
                social_id:element.link.linkable_id ,name:social.name,status:element.link.status})
            }
            else
            {
                form.namads.push({link : null ,id:null,social_id:element.id ,name:social.name})
            }

        }
    });

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

const openMenu = ref(null);

const toggleMenu = (id) => {
    openMenu.value = openMenu.value === id ? null : id;
};
</script>
<template>
<Header :cart="props.cart"  :roles="props.roles" :alert="props.alert" :users="props.users" :wallet="props.wallet"
        :orders="props.orders" :notifications="props.notifications" :dark="props.dark" :companies="props.companies" />

        <main class="main-wrap rtl">
            <section class="content-main">
                <div class="row content-header">
                    <div class="d-flex col-sm-12">
                        <div class="content-title card-title" v-if="props.descriptions" v-html="props.descriptions.subject"></div>
                        <td class="me-auto">
                            <Link :href="route('namadAdmin.create')" class="btn btn-primary btn-sm rounded font-sm">ایجاد</Link>
                        </td>
                    </div>
                    <div class="col-sm-12">
                        <div v-if="props.descriptions" v-html="props.descriptions.text"></div>
                    </div>
                </div>
                <div class="">
                    <div class="card-body bg-white">
                        <div class="row gx-5">
                            <Aside class="col-lg-3 border-end" />
                            <div class="col-lg-9">
                                    <section class="content-body p-xl-4">
                                            <div class="table-responsive" v-if="props.namads.total > 0">
                                                <div v-if="props.namads.total > 0" class="table table-hover">
                                                    <thead>
                                                        <tr class="col">
                                                            <th scope="col"> شناسه</th>
                                                            <th scope="col">نام</th>
                                                            <th scope="col">تاریخ</th>
                                                            <th scope="col">بروزرسانی</th>
                                                            <th scope="col">وضعیت</th>
                                                            <th scope="col">عملیات</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody >
                                                        <tr v-for="(social,index) in props.namads.data" :key="index">
                                                            <td >{{(social.id).toLocaleString("fa-IR")}}</td>
                                                            <td >{{social.menu.name}}</td>
                                                            <td>
                                                                {{ moment(social.created_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                                            </td>
                                                            <td>
                                                                {{ moment(social.updated_at).locale("fa", fa).format('jYYYY/jM/jD HH:mm') }}
                                                            </td>
                                                            <td>
                                                                <span v-if="social.status == 0" class="badge badge-pill badge-soft-info">ثبت</span>
                                                                <span v-if="social.status == 1" class="badge badge-pill badge-soft-warning">انتظار</span>
                                                                <span v-if="social.status == 2"  class="badge badge-pill badge-soft-secondary"> بررسی</span>
                                                                <span v-if="social.status == 3" class="badge badge-pill badge-soft-danger"> منقضی</span>
                                                                <span v-if="social.status == 4" class="badge badge-pill badge-soft-success">منتشر</span>
                                                            </td>
                                                            <td class="text-end">
                                                                <div class="dropdown">
                                                                    <a href="#" @click.prevent.stop="toggleMenu(social.id)" class="btn btn-light rounded btn-sm font-sm"> <i class="material-icons md-more_horiz"></i> </a>
                                                                    <div v-if="openMenu === social.id" class="dropdown-menu show" @click.stop>
                                                                        <Link class="dropdown-item" :href="route('namadAdmin.show',[social.id])">ویرایش اطلاعات</Link>
                                                                        <Link class="dropdown-item text-danger" :href="route('namadAdmin.destroy',[social.id])" method="delete" as="button" >حذف</Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </div>
                                                <!-- <div class="mt-5" v-if="props.namads.total > 9">
                                                    <nav aria-label="Page navigation example">
                                                        <ul class="pagination justify-content-start">
                                                            <li :class="['page-item',link.url == null ? 'disable' :'',link.active ? 'active' : '']"
                                                            v-for="link in props.namads.links" :key="link.id" >
                                                            <Link class="page-link" :href="link.url == null ? '#' : link.url"
                                                            v-html="link.label" ></Link>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div> -->
                                                <div class="pagination-area mb-20 mt-20" v-if="props.namads && props.namads.total > 9">
                                                    <nav aria-label="Page navigation example">
                                                        <ul class="pagination justify-content-start">
                                                            <li class="page-item" :class="{ disabled: !props.namads.prev_page_url || props.namads.current_page === 1 }" >
                                                                <Link class="page-link" :href=" props.namads.prev_page_url && props.namads.current_page > 1 ? props.namads.prev_page_url : ''" preserve-scroll preserve-state :aria-disabled="props.namads.current_page === 1">
                                                                    <i class="material-icons md-chevron_right"></i>
                                                                </Link>
                                                            </li>
                                                            <li class="page-item" :class="{ active: props.namads.current_page === 1 }">
                                                                <Link class="page-link" :href="getPageUrl(props.namads.first_page_url, 1)" preserve-scroll preserve-state >1</Link>
                                                            </li>
                                                            <li class="page-item" v-if="props.namads.current_page > 4">
                                                                <span class="page-link dot">...</span>
                                                            </li>
                                                            <template v-for="i in 5" :key="i">
                                                                <li class="page-item" v-if=" props.namads.current_page - 3 + i > 1 && props.namads.current_page - 3 + i < props.namads.last_page" :class="{ active: props.namads.current_page === props.namads.current_page - 3 + i }">
                                                                    <Link class="page-link" :href="getPageUrl(props.namads.path, props.namads.current_page - 3 + i)" preserve-scroll preserve-state >
                                                                        {{ props.namads.current_page - 3 + i }}
                                                                    </Link>
                                                                </li>
                                                            </template>

                                                            <li class="page-item" v-if="props.namads.current_page < props.namads.last_page - 3">
                                                                <span class="page-link dot">...</span>
                                                            </li>
                                                            <li class="page-item" v-if="props.namads.last_page !== 1" :class="{ active: props.namads.current_page === props.namads.last_page }">
                                                                <Link class="page-link" :href="getPageUrl(props.namads.path, props.namads.last_page)" preserve-scroll preserve-state>
                                                                    {{ props.namads.last_page }}
                                                                </Link>
                                                            </li>
                                                            <li class="page-item" :class="{ disabled:!props.namads.next_page_url || props.namads.current_page === props.namads.last_page,}">
                                                                <Link class="page-link" :href="props.namads.next_page_url && props.namads.current_page < props.namads.last_page
                                                                            ? props.namads.next_page_url: ''"preserve-scroll preserve-state :aria-disabled="props.namads.current_page === props.namads.last_page">
                                                                    <i class="material-icons md-chevron_left"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                            <p v-else>گزینه ای یافت نشد.</p>
                                    </section>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer :companies="props.companies" />
        </main>
</template>
