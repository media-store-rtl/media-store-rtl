import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { computed, useSSRContext } from "vue";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const _sfc_main = {
  __name: "Session-index",
  __ssrInlineRender: true,
  props: {
    users: Object,
    all: Number,
    second: Number,
    minute: Number,
    hour: Number,
    day: Number,
    week: Number,
    month: Number,
    year: Number,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    names: Object,
    ids: Object,
    statuses: Object,
    companies: Object,
    descriptions: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    useForm({
      name: null,
      status: null,
      id: null
    });
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
      _push(`<td class="me-auto"></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card mb-4"><div class="card-body"><div class="table-responsive"><div class="table table-hover"><thead><tr class="col"><th scope="col"> ردیف</th><th scope="col">بازدید</th><th scope="col">تعداد</th></tr></thead><tbody><tr><td>${ssrInterpolate(1 .toLocaleString("fa-IR"))}</td><td>لحظه</td><td>${ssrInterpolate(props.second)}</td></tr><tr><td>${ssrInterpolate(2 .toLocaleString("fa-IR"))}</td><td>دقیقه</td><td>${ssrInterpolate(props.minute)}</td></tr><tr><td>${ssrInterpolate(3 .toLocaleString("fa-IR"))}</td><td>ساعت</td><td>${ssrInterpolate(props.hour)}</td></tr><tr><td>${ssrInterpolate(4 .toLocaleString("fa-IR"))}</td><td>روز</td><td>${ssrInterpolate(props.day)}</td></tr><tr><td>${ssrInterpolate(5 .toLocaleString("fa-IR"))}</td><td>هفته</td><td>${ssrInterpolate(props.week)}</td></tr><tr><td>${ssrInterpolate(6 .toLocaleString("fa-IR"))}</td><td>ماه</td><td>${ssrInterpolate(props.month)}</td></tr><tr><td>${ssrInterpolate(7 .toLocaleString("fa-IR"))}</td><td>سال</td><td>${ssrInterpolate(props.year)}</td></tr><tr><td>${ssrInterpolate(8 .toLocaleString("fa-IR"))}</td><td>کل</td><td>${ssrInterpolate(props.all)}</td></tr></tbody></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Session/Session-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
