import { computed, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import "sweetalert2";
import { _ as _sfc_main$2 } from "./Editor-CocwfA7J.js";
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
  __name: "product-update",
  __ssrInlineRender: true,
  props: {
    product: Object,
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    children: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    alert: Object,
    companies: Object,
    menus: Object,
    descriptions: Object,
    path: String,
    wallet: Number
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({ update: props.product.id, text: null, version: null, file: null, price: null });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
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
      _push(`<td class="me-auto"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up me-auto"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</div></div><div class="row"><form class="row"><div class="col-lg-12"><div class="card"><div class="card-header"><h4>اطلاعات پایه</h4></div><div class="card-body"><div class="row"><div class="card-body col-sm-6"><label class="form-label">فایل <span class="text-danger">*</span></label><div class="input-upload"><input class="form-control" type="file" id="file" accept="zip/rar/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card-body col-sm-6"><label class="form-label">نسخه محصول <span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).version)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-sm-6"><label class="form-label">قیمت پیشنهادی محصول <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).price)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div><div class="mt-4"><label class="form-label">توضیحات تغیرات بروز رسانی محصول <span class="text-danger">*</span></label>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).text,
        "onUpdate:modelValue": ($event) => unref(form).text = $event
      }, null, _parent));
      _push(`</div></div></div></div></form></div></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Seller/Product/product-update.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
