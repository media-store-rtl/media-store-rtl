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
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: String,
    token: String,
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
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
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
        Quickview: _ctx.Quickview,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(ssrRenderComponent(unref(head_default), { title: "Reset Password" }, null, _parent));
      _push(`<main class="main pages"><div class="page-content pt-150 pb-150"><div class="container"><div class="row"><div class="col-xl-6 col-lg-8 col-md-12 m-auto"><div class="row"><div class="heading_s1"><img class="border-radius-15" src="assets/imgs/page/reset_password.svg" alt=""><h2 class="mb-15 mt-15">رمز عبور جدید</h2><p class="mb-30">لطفا یک رمز عبور جدید وارد نمایید.</p></div><div class="col-lg-6 col-md-8"><div class="login_wrap widget-taber-content background-white"><div class="padding_eight_all bg-white"><form method="post"><div class="form-group"><input type="password" required="" name="email"${ssrRenderAttr("value", unref(form).password)} placeholder="کلمه عبور جدید خود را اینجا وارد نمایید. *"></div><div class="form-group"><input type="password" required="" name="email"${ssrRenderAttr("value", unref(form).password_confirmation)} placeholder="تکرار کلمه عبور جدید خود را اینجا وارد نمایید."></div><div class="form-group"><button type="submit" name="login" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-heading btn-block hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<div class="spinner-border spinner-border-sm" role="status"></div>`);
      } else {
        _push(`<span> بازنشانی رمز عبور</span>`);
      }
      _push(`</button></div></form></div></div></div><div class="col-lg-6 pl-50"><h6 class="mb-15">رمز عبور باید:</h6><p>بین ۹ تا ۶۴ کاراکتر باشد</p><p>حداقل دو مورد از موارد زیر را وارد کنید:</p><ol class="list-insider"><li>یک کاراکتر بزرگ</li><li>یک کاراکتر کوچک</li><li>یک عدد</li><li>یک کاراکتر ویژه</li></ol></div></div></div></div></div></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
