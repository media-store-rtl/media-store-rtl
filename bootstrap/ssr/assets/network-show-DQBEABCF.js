import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$4 from "./footer-BmA7fAd4.js";
import { _ as _sfc_main$3 } from "./Checkbox-COCNy1T4.js";
import swal from "sweetalert2";
import "@inertiajs/inertia";
import { _ as _sfc_main$2 } from "./AsideAdmin2-Cn98USeV.js";
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
  __name: "network-show",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    canResetPassword: Boolean,
    status: String,
    users: Object,
    ostans: Object,
    shahrs: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    user: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      id: props.user.id,
      notification: props.user.profile ? props.user.profile.notification == 1 : null,
      mobile: props.user.profile ? props.user.profile.mobile == 1 : null,
      email: props.user.profile ? props.user.profile.email == 1 : null
    });
    const alert = ref(props.alert);
    if (alert.value) {
      swal.fire(
        alert.value.title,
        alert.value.text,
        alert.value.icon
      );
      alert.value = null;
    }
    if (hasErrors.value == true) {
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
        title: [
          errors.value.user_name ? errors.value.user_name + "<br>" : "",
          errors.value.name ? errors.value.name + "<br>" : "",
          errors.value.lasst_name ? errors.value.lasst_name + "<br>" : "",
          errors.value.name_show ? errors.value.name_show + "<br>" : "",
          errors.value.tel ? errors.value.tel + "<br>" : "",
          errors.value.birth ? errors.value.birth + "<br>" : "",
          errors.value.gender ? errors.value.gender + "<br>" : "",
          errors.value.biography ? errors.value.biography + "<br>" : ""
        ],
        icon: "error"
      });
    }
    ref(props.ostans);
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        cartCount: props.cartCount,
        cartDiscount: props.cartDiscount,
        wallet: props.wallet,
        cartCoupon: props.cartCoupon,
        cartTotal: props.cartTotal,
        alert: props.alert,
        users: props.users,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title">${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ارسال</span>`);
      }
      _push(`</button></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class=""><div class="card-body bg-white"><div class="row gx-5">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: unref(form).id
      }, null, _parent));
      _push(`<div class="col-lg-9"><section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-8"><div class="row gx-3"><label class="form-label">دریافت وقایع از طریق:</label><div class="col-6 mb-3"><label class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "notification",
        checked: unref(form).notification,
        "onUpdate:checked": ($event) => unref(form).notification = $event
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-600"> نتیفیکیشن</span></label></div><div class="col-lg-6 mb-3"><label class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "email",
        checked: unref(form).email,
        "onUpdate:checked": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-600"> ایمیل</span></label></div><div class="col-lg-6"><label class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        name: "mobile",
        checked: unref(form).mobile,
        "onUpdate:checked": ($event) => unref(form).mobile = $event
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-600"> تلفن همراه</span></label></div></div></div></div><br></form><hr class="my-5"></section></div></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Network/network-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
