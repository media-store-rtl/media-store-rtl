import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "@inertiajs/inertia";
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
  __name: "Newsletter-create",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({ subject: null, route: null, p_route: null, text: null });
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
          errors.value.text ? errors.value.text + "<br>" : "",
          errors.value.subject ? errors.value.subject + "<br>" : "",
          errors.value.route ? errors.value.route + "<br>" : ""
        ],
        icon: "error"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        cartPrice: props.cartPrice,
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
        _push(`<span>ایجاد</span>`);
      }
      _push(`</button></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row"><form class="row"><div class="col-lg-6"><div class="card"><div class="card-header"><h4>اطلاعات پایه</h4></div><div class="card-body"><div class="mt-1"><label for="product_name" class="form-label">عنوان<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).subject)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name"></div><div class="mt-1"><label for="product_name" class="form-label">نام روت<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).route)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name"></div><div class="mt-1"><label for="product_name" class="form-label">پسوند روت</label><input${ssrRenderAttr("value", unref(form).p_route)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name"></div><div class="mt-4"><label class="form-label">توضیحات <span class="text-danger">*</span></label><textarea placeholder="اینجا تایپ کنید" class="form-control" rows="4">${ssrInterpolate(unref(form).text)}</textarea></div></div></div></div></form></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Newsletter/Newsletter-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
