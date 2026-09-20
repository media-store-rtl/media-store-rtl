import { computed, watch, ref, resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$3 from "./Footer2-vTePDDgz.js";
import _sfc_main$2 from "./Header2-F5OjGsRQ.js";
import { _ as _sfc_main$1 } from "./Seo-DBSnrFlc.js";
import { a as usePage } from "../ssr.js";
import swal from "sweetalert2";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "@unhead/vue";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "about-hesabdari",
  __ssrInlineRender: true,
  props: {
    menus: Object,
    socials: Object,
    path: String,
    time: String,
    companies: Object,
    menu: Object,
    cart: Object,
    namads: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    watch(() => props.alert, (val) => {
      if (val) {
        if (val.title) {
          swal.fire(val.title, val.text, val.icon);
        } else {
          swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3e3,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", swal.stopTimer);
              toast.addEventListener("mouseleave", swal.resumeTimer);
            }
          }).fire({
            title: val.text,
            icon: val.icon
          });
        }
      }
    });
    watch(() => errors.value, (val) => {
      if (val && Object.keys(val).length > 0) {
        Object.values(val).forEach((errMsg) => {
          swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3e3,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", swal.stopTimer);
              toast.addEventListener("mouseleave", swal.resumeTimer);
            }
          }).fire({
            title: errMsg,
            icon: "error"
          });
        });
      }
    });
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "supports") {
                  menus.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const Quickview = ref(null);
    const submitQuickview = (result) => {
      Quickview.value = result;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { noIndex: false }, null, _parent));
      _push(ssrRenderComponent(_component_Head, { title: "index" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        Quickview: Quickview.value,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu,
        onEventSubmitQuickview: submitQuickview
      }, null, _parent));
      _push(`<main class="main pages"><div class="page-content pt-50"><div class="container"><div class="row"><div class="col-xl-10 col-lg-12 m-auto"><section class="row align-items-center mb-50"><div class="col-lg-6">`);
      if (props.companies) {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} alt="" class="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-6"><div class="pr-25">`);
      if (props.companies) {
        _push(`<h2 class="mb-30"> به ${ssrInterpolate(props.companies.name_show)} خوش آمدید </h2>`);
      } else {
        _push(`<!---->`);
      }
      if (props.companies) {
        _push(`<p class="mb-25">${ssrInterpolate(props.companies.name_show)} یک مجموعه تخصصی در حوزه خدمات حسابداری و حسابرسی است که با هدف ارتقای شفافیت مالی، نظم‌بخشی به امور مالی و بهبود فرآیندهای مدیریتی راه‌اندازی شده است. </p>`);
      } else {
        _push(`<!---->`);
      }
      if (props.companies) {
        _push(`<p class="mb-25"> در ${ssrInterpolate(props.companies.name_show)} تلاش کرده‌ایم بستری حرفه‌ای فراهم کنیم تا کسب‌وکارها، مدیران و صاحبان مشاغل بتوانند با اطمینان کامل امور مالی خود را مدیریت کنند. از ثبت و تنظیم اسناد حسابداری و تهیه صورت‌های مالی گرفته تا حسابرسی، مشاوره مالیاتی و بهینه‌سازی ساختار مالی، تمامی خدمات در ${ssrInterpolate(props.companies.name_show)} به‌صورت دقیق، شفاف و مطابق با استانداردهای مالی ارائه می‌شود. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="mb-25">خدمات ما شامل:</h3><div class="mb-25"><li> انجام کلیه امور حسابداری مالی و مدیریتی</li><li> تهیه و تنظیم صورت‌های مالی مطابق با استانداردهای حسابداری</li><li> انجام خدمات حسابرسی داخلی و مستقل</li><li> مشاوره و برنامه‌ریزی مالیاتی و تنظیم اظهارنامه‌های مالیاتی</li><li> راه‌اندازی و بهینه‌سازی سیستم‌های مالی و نرم‌افزارهای حسابداری</li><li> ارائه گزارش‌های تحلیلی مالی جهت تصمیم‌گیری مدیران</li></div><h3 class="mb-25">چرا ما؟</h3>`);
      if (props.companies) {
        _push(`<p class="mb-25"> ما باور داریم دقت، شفافیت و تعهد حرفه‌ای سه اصل اساسی در ارائه خدمات مالی و حسابرسی هستند. به همین دلیل در ${ssrInterpolate(props.companies.name_show)} تمامی خدمات با رعایت کامل استانداردهای حسابداری و قوانین مالیاتی انجام می‌شود. پایبندی به زمان‌بندی، حفظ محرمانگی اطلاعات مالی و ارائه گزارش‌های دقیق و قابل اتکا، از اولویت‌های اصلی ماست و کیفیت خدمات به‌صورت مستمر ارزیابی و بهبود داده می‌شود. </p>`);
      } else {
        _push(`<!---->`);
      }
      if (props.companies) {
        _push(`<p class="mb-25">${ssrInterpolate(props.companies.name_show)} یک مجموعه تخصصی خدمات حسابداری و حسابرسی است که با هدف ایجاد شفافیت مالی، ارتقای انضباط مالی و کمک به رشد پایدار کسب‌وکارها فعالیت می‌کند. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="carausel-3-columns-cover position-relative"><div id="carausel-3-columns-arrows"></div><div class="carausel-3-columns" id="carausel-3-columns"></div></div></div></div></section><section class="text-center mb-50"><h2 class="title style-3 mb-40">چه خدماتی ارائه می‌کنیم؟</h2><div class="row"><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-1.svg" alt=""><h4>تعرفه منصفانه و شفاف</h4><p>ارائه خدمات حسابداری و حسابرسی با هزینه‌های منطقی، قراردادهای شفاف و بدون هزینه‌های پنهان.</p></div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-2.svg" alt=""><h4>خدمات جامع مالی و مالیاتی</h4><p>از ثبت اسناد حسابداری و تهیه صورت‌های مالی تا تنظیم اظهارنامه مالیاتی و مشاوره تخصصی، همه خدمات به‌صورت یکپارچه ارائه می‌شود.</p></div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-3.svg" alt=""><h4>گزارش‌های دقیق و قابل اتکا</h4><p>ارائه گزارش‌های مالی شفاف و تحلیلی برای کمک به تصمیم‌گیری بهتر مدیران و کاهش ریسک‌های مالی.</p></div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-4.svg" alt=""><h4>پشتیبانی تخصصی و مستمر</h4>`);
      if (props.companies) {
        _push(`<p>تیم ${ssrInterpolate(props.companies.name_show)} در تمامی مراحل امور مالی و مالیاتی همراه شماست و پاسخگوی سوالات و نیازهای کسب‌وکار شما خواهد بود.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-5.svg" alt=""><h4>حفظ محرمانگی اطلاعات</h4><p>اطلاعات مالی و اسناد شما با رعایت اصول حرفه‌ای و امنیت کامل نگهداری و پردازش می‌شود.</p></div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-6.svg" alt=""><h4>کاهش ریسک و جرائم مالیاتی</h4>`);
      if (props.companies) {
        _push(`<p>با خدمات تخصصی ${ssrInterpolate(props.companies.name_show)}، ریسک خطاهای مالی و جرائم مالیاتی به حداقل می‌رسد و کسب‌وکار شما با اطمینان بیشتری فعالیت می‌کند.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section class="row align-items-center mb-50"><div class="row mb-50 align-items-center"><div class="col-lg-7 pr-30"><img src="assets/imgs/page/about-5.png" alt="" class="mb-md-3 mb-lg-0 mb-sm-4"></div><div class="col-lg-5"><h4 class="mb-20 text-muted">عملکرد و تجربه ما</h4><h1 class="heading-1 mb-40">همراه مطمئن شما در امور مالی و حسابرسی</h1>`);
      if (props.companies) {
        _push(`<p class="mb-30">${ssrInterpolate(props.companies.name_show)} مجموعه‌ای تخصصی در زمینه خدمات حسابداری، حسابرسی و مشاوره مالیاتی است که با هدف ایجاد شفافیت مالی و ارتقای سلامت اقتصادی کسب‌وکارها فعالیت می‌کند. </p>`);
      } else {
        _push(`<!---->`);
      }
      if (props.companies) {
        _push(`<p> از ثبت و ساماندهی اسناد مالی تا تهیه صورت‌های مالی، حسابرسی و ارائه راهکارهای مالیاتی، ${ssrInterpolate(props.companies.name_show)} بستری حرفه‌ای و قابل اعتماد برای مدیریت صحیح امور مالی فراهم کرده است. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row"><div class="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5"><h3 class="mb-30">ما که هستیم</h3>`);
      if (props.companies) {
        _push(`<p>${ssrInterpolate(props.companies.name_show)} یک مجموعه تخصصی خدمات مالی است که با بهره‌گیری از کارشناسان مجرب، به کسب‌وکارها در مدیریت، ساماندهی و بهینه‌سازی امور مالی کمک می‌کند. ما با تکیه بر دانش به‌روز و رعایت استانداردهای حرفه‌ای، خدماتی دقیق و قابل اتکا ارائه می‌دهیم. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5"><h3 class="mb-30">تجربه ما</h3>`);
      if (props.companies) {
        _push(`<p>${ssrInterpolate(props.companies.name_show)} فعالیت خود را با هدف ارائه خدمات مالی شفاف و قانون‌مند آغاز کرده و در طول زمان با همکاری شرکت‌ها و کسب‌وکارهای مختلف، تجربه ارزشمندی در حوزه حسابداری، حسابرسی و مشاوره مالیاتی کسب کرده است. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-4"><h3 class="mb-30">ماموریت ما</h3>`);
      if (props.companies) {
        _push(`<p> ماموریت ${ssrInterpolate(props.companies.name_show)} ارتقای انضباط مالی، کاهش ریسک‌های مالیاتی و کمک به رشد پایدار کسب‌وکارها از طریق ارائه خدمات دقیق، شفاف و مسئولانه است. هدف ما ایجاد اعتماد و آرامش خاطر برای مدیران در تصمیم‌گیری‌های مالی است. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section></div></div></div></div></main>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        companies: props.companies,
        socials: props.socials,
        time: props.time,
        menus: props.menus,
        path: props.path,
        namads: props.namads
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/about-hesabdari.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
