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
  __name: "about",
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
        _push(`<p class="mb-25">${ssrInterpolate(props.companies.name_show)}یک پلتفرم تخصصی در حوزه محصولات دیجیتال است که با هدف ساده‌سازی مسیر طراحی سایت، حسابداری ،فروش قالب‌های آماده و اجرای پروژه‌های سفارشی راه‌اندازی شده است.</p>`);
      } else {
        _push(`<!---->`);
      }
      if (props.companies) {
        _push(`<p class="mb-25"> در ${ssrInterpolate(props.companies.name_show)} تلاش کرده‌ایم بستری ایجاد کنیم که کارفرمایان، طراحان،فروشندگان و مجریان پروژه بتوانند در یک محیط حرفه‌ای و شفاف با هم همکاری کنند. از فروش فایل‌های دیجیتال مانند قالب‌های وب‌سایت و ابزارهای آماده گرفته تا تعریف پروژه‌های اختصاصی و انتخاب مجری مناسب، همه چیز در ${ssrInterpolate(props.companies.name_show)} به‌صورت ساختارمند انجام می‌شود.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="mb-25">خدمات ما شامل:</h3><div class="mb-25"><li> طراحی و توسعه وب‌سایت‌های اختصاصی</li><li> سیستم حسابداری حرفه ای</li><li> فروش قالب‌های آماده سایت و محصولات دیجیتال فایل‌محور</li><li> امکان تعریف پروژه توسط کارفرما</li><li> ایجاد بستری برای استخدام فروشنده و مجری پروژه</li><li> اتصال کارفرمایان به فریلنسرها و متخصصان حوزه دیجیتال</li></div><h3 class="mb-25">چرا ما؟</h3>`);
      if (props.companies) {
        _push(`<p class="mb-25"> ما باور داریم کیفیت، شفافیت و تحویل به‌موقع سه اصل اصلی هر پروژه موفق هستند. به همین دلیل، چه پروژه توسط تیم ${ssrInterpolate(props.companies.name_show)} اجرا شود و چه توسط فریلنسرها، تعهد به زمان‌بندی و کیفیت برای ما اولویت دارد و عملکرد مجریان به‌صورت مستمر بررسی می‌شود. </p>`);
      } else {
        _push(`<!---->`);
      }
      if (props.companies) {
        _push(`<p class="mb-25">${ssrInterpolate(props.companies.name_show)} یک اکوسیستم دیجیتال برای رشد کسب‌وکارها، اجرای ایده‌ها و ارائه محصولات دیجیتال باکیفیت است. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="carausel-3-columns-cover position-relative"><div id="carausel-3-columns-arrows"></div><div class="carausel-3-columns" id="carausel-3-columns"></div></div></div></div></section><section class="text-center mb-50"><h2 class="title style-3 mb-40">چه چیزی ارائه می کنیم؟</h2><div class="row"><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-1.svg" alt=""><h4>بهترین قیمت و شرایط همکاری</h4><p>ما تلاش می‌کنیم محصولات و خدمات را با قیمت منصفانه، کیفیت بالا و شرایط شفاف ارائه دهیم.</p></div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-2.svg" alt=""><h4>تنوع کامل محصولات دیجیتال</h4><p>از قالب‌های آماده سایت و فایل‌های دیجیتال تا پروژه‌های سفارشی و خدمات طراحی وب، همه در دسترس شماست.</p></div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-3.svg" alt=""><h4>دریافت آنی فایل‌ها</h4><p>پس از خرید، محصولات دیجیتال بلافاصله در اختیار شما قرار می‌گیرند و بدون نیاز به ارسال فیزیکی قابل دانلود هستند.</p></div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-4.svg" alt=""><h4>پشتیبانی و اصلاحات شفاف</h4>`);
      if (props.companies) {
        _push(`<p>در صورت وجود مشکل در فایل‌های دیجیتال یا اجرای پروژه، پشتیبانی ${ssrInterpolate(props.companies.name_show)} تا رفع مشکل همراه شماست.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-5.svg" alt=""><h4>رضایت و اعتماد کاربران</h4>`);
      if (props.companies) {
        _push(`<p>هدف ${ssrInterpolate(props.companies.name_show)} ارائه محصولات دیجیتال باکیفیت و اجرای پروژه‌ها طبق توافق و زمان‌بندی مشخص است.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-lg-4 col-md-6 mb-24"><div class="featured-card"><img src="assets/imgs/theme/icons/icon-6.svg" alt=""><h4>پیشنهادهای ویژه روزانه</h4>`);
      if (props.companies) {
        _push(`<p> تخفیف‌های محدود روی قالب‌های سایت، محصولات دیجیتال و خدمات منتخب ${ssrInterpolate(props.companies.name_show)} .</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></section><section class="row align-items-center mb-50"><div class="row mb-50 align-items-center"><div class="col-lg-7 pr-30"><img src="assets/imgs/page/about-5.png" alt="" class="mb-md-3 mb-lg-0 mb-sm-4"></div><div class="col-lg-5"><h4 class="mb-20 text-muted">عملکرد و تجربه ما</h4><h1 class="heading-1 mb-40">همراه شما در طراحی سایت و محصولات دیجیتال</h1>`);
      if (props.companies) {
        _push(`<p class="mb-30">${ssrInterpolate(props.companies.name_show)} یک پلتفرم تخصصی برای فروش محصولات دیجیتال، قالب‌های سایت و اجرای پروژه‌های سفارشی است که با هدف ایجاد همکاری شفاف بین کارفرمایان و مجریان راه‌اندازی شده است. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p> از خرید فایل‌های دیجیتال آماده تا تعریف پروژه و انتخاب مجری مناسب، ${ssrInterpolate(props.companies.name_show)} بستری امن و حرفه‌ای برای رشد کسب‌وکارهای آنلاین فراهم می‌کند. </p></div></div><div class="row"><div class="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5"><h3 class="mb-30">ما که هستیم</h3>`);
      if (props.companies) {
        _push(`<p>${ssrInterpolate(props.companies.name_show)} یک پلتفرم تخصصی در حوزه محصولات دیجیتال است که با تمرکز بر طراحی سایت، حسابداری ،فروش قالب‌های آماده و اجرای پروژه‌های سفارشی فعالیت می‌کند. ما بستری فراهم کرده‌ایم تا کارفرمایان، طراحان و مجریان پروژه بتوانند به‌صورت شفاف و حرفه‌ای با یکدیگر همکاری کنند. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-4 pr-30 mb-md-5 mb-lg-0 mb-sm-5"><h3 class="mb-30">تاریخچه ما</h3>`);
      if (props.companies) {
        _push(`<p>${ssrInterpolate(props.companies.name_show)} فعالیت خود را با هدف ارائه محصولات دیجیتال و خدمات طراحی سایت آغاز کرد. از فروش قالب‌های آماده تا پشتیبانی پروژه‌های سفارشی، در زمان تلاش کرده‌ایم بستری مطمئن و حرفه‌ای برای کارفرمایان و مجریان پروژه فراهم کنیم. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-4"><h3 class="mb-30">ماموریت ما</h3>`);
      if (props.companies) {
        _push(`<p> ماموریت ${ssrInterpolate(props.companies.name_show)} ارائه بستری حرفه‌ای و مطمئن برای خرید و فروش محصولات دیجیتال، قالب‌های آماده سایت و اجرای پروژه‌های سفارشی است. هدف ما ایجاد تجربه‌ای شفاف و باکیفیت برای کارفرمایان و مجریان پروژه است. </p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
