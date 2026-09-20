import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import swal from "sweetalert2";
import "@inertiajs/inertia";
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
  __name: "reqDesignerTarahi-edit",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    users: Object,
    tarahis: Object,
    notifications: Object,
    menus: Object,
    companies: Object,
    descriptions: Object,
    reqDesigner: Object,
    alert: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      expired: props.reqDesigner.expired,
      price: props.reqDesigner.price,
      id: props.reqDesigner.id
    });
    const alert = ref(props.alert);
    if (alert.value) {
      swal.fire({
        title: props.alert.title,
        text: props.alert.text,
        icon: props.alert.icon
      });
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
          errors.value.price ? errors.value.price + "<br>" : "",
          errors.value.expired ? errors.value.expired + "<br>" : ""
        ],
        icon: "error"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cartPrice: props.cartPrice,
        cartCount: props.cartCount,
        cartDiscount: props.cartDiscount,
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
        _push(`<span>ویرایش</span>`);
      }
      _push(`</button></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="row"><div class="col-lg-12"><div class="bg-white"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="row gx-2"><div class="col-sm-6 col-6"><div class="mt-4"><label class="form-label">تعداد روز<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).expired)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-sm-6 col-6"><div class="mt-4"><label class="form-label">مبلغ<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).price)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div>`);
      if (unref(form).price > 0) {
        _push(`<label class="form-label mt-2">ضمانت اجرایی مبلغ پیشنهادی</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.companies && unref(form).price > 0) {
        _push(`<p class="mt-2">${ssrInterpolate((unref(form).price * props.companies.design_damage).toLocaleString("fa-IR"))}ریال </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></div></form></section>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Designer/Tarahi/reqDesignerTarahi-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
