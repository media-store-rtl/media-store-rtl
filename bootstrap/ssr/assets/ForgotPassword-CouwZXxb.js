import { computed, watch, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as usePage, u as useForm, h as head_default } from "../ssr.js";
import _sfc_main$1 from "./Header2-F5OjGsRQ.js";
import _sfc_main$2 from "./Footer2-vTePDDgz.js";
import swal from "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String,
    companies: Object,
    alert: Object,
    menus: Object,
    socials: Object,
    path: String,
    time: String,
    menu: Object,
    cart: Object,
    namads: Object
  },
  setup(__props) {
    const props = __props;
    const errors = computed(() => usePage().props.errors);
    const form = useForm({
      email: ""
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
    watch(() => props.status, (val) => {
      if (val) {
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
          title: val,
          icon: "success"
          // چون پیام موفقیته
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        companies: props.companies,
        results: props.results,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(ssrRenderComponent(unref(head_default), { title: "Forgot Password" }, null, _parent));
      _push(`<main class="main pages"><div class="page-content pt-150 pb-150"><div class="container"><div class="row"><div class="col-xl-4 col-lg-6 col-md-12 m-auto"><div class="login_wrap widget-taber-content background-white"><div class="padding_eight_all bg-white"><div class="heading_s1"><img class="border-radius-15" src="assets/imgs/page/forgot_password.svg" alt=""><h2 class="mb-15 mt-15">کلمه عبور فراموش کردی؟</h2><p class="mb-30">نگران نباش ما کمکت میکنیم بازیابیش کنی.</p></div><form method="post"><div class="form-group"><input type="text" name="email" placeholder="ایمیل یا تلفن همراه یا نام کاربری"${ssrRenderAttr("value", unref(form).email)}></div><div class="login_footer form-group mb-50"><div class="chek-form"><div class="custome-checkbox"></div></div></div><div class="form-group"><button type="submit" name="login" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-heading btn-block hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<div class="spinner-border spinner-border-sm" role="status"></div>`);
      } else {
        _push(`<span> بازیابی</span>`);
      }
      _push(`</button></div></form></div></div></div></div></div></div></main>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        namads: props.namads,
        socials: props.socials,
        time: props.time,
        menus: props.menus,
        path: props.path
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
