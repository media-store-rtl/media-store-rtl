import { computed, ref, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "Tarahi-edit",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    cartPrice: Number,
    cartCount: Number,
    wallet: Number,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Number,
    notifications: Object,
    ids: Object,
    statuses: Object,
    prices: Object,
    companies: Object,
    descriptions: Object,
    dark: String,
    asidemini: String,
    path: String
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    useForm({
      price: null,
      status: null,
      id: null
    });
    ref([props.asidemini]);
    ref([props.dark]);
    ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head2 = resolveComponent("Head2");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head2, null, null, _parent));
      _push(`<body><div class="screen-overlay"></div>`);
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
      _push(`<td class="me-auto"></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.orders.total > 0) {
        _push(`<div class="card mb-4">`);
        if (props.orders) {
          _push(`<div class="card-body">`);
          if (props.orders.total > 0) {
            _push(`<table class="table table-responsive"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">قیمت</th><th scope="col">تعداد</th><th scope="col">تخفیف</th><th scope="col">بن تخفیف</th><th scope="col">جمع</th><th scope="col">کمیسیون</th><th scope="col">مالیات</th><th scope="col">در آمد</th><th scope="col">تاریخ</th></tr></thead><tbody><!--[-->`);
            ssrRenderList(props.orders.data, (order, index) => {
              _push(`<tr><td>${ssrInterpolate(order.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.price.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.count.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.discount.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.coupon.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate((order.price * order.count - (order.discount + order.coupon)).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.comison.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate((order.tax + order.complications).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.total.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(unref(moment)(order.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td></tr>`);
            });
            _push(`<!--]--></tbody></table>`);
          } else {
            _push(`<!---->`);
          }
          if (props.orders.total > 9) {
            _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
            ssrRenderList(props.orders.links, (link) => {
              _push(`<li class="${ssrRenderClass(["page-item", link.url == null ? "disable" : "", link.active ? "active" : ""])}">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "page-link",
                href: link.url == null ? "#" : link.url
              }, null, _parent));
              _push(`</li>`);
            });
            _push(`<!--]--></ul></nav></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div><p>گزینه ای یافت نشد.</p></div>`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies
      }, null, _parent));
      _push(`</main></body><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Designer/Tarahi/Tarahi-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
