import { computed, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
const _sfc_main = {
  __name: "order-show",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    notifications: Object,
    ids: Object,
    statuses: Object,
    prices: Object,
    companies: Object,
    descriptions: Object
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
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="content-header"><div>`);
      if (props.descriptions) {
        _push(`<h2 class="content-title card-title">${ssrInterpolate(props.descriptions.subject)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (props.descriptions) {
        _push(`<p>${ssrInterpolate(props.descriptions.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.orders.total > 0) {
        _push(`<div class="card mb-4"><div class="card-body">`);
        if (props.orders.total > 0) {
          _push(`<table class="table table-responsive"><thead><tr class="col"><th scope="col">شناسه خرید</th><th scope="col">فروشنده</th><th scope="col">محصول</th><th scope="col">قیمت</th><th scope="col">تعداد</th><th scope="col">تخفیف</th><th scope="col">خالص</th><th scope="col">درآمد</th><th scope="col">مالیات</th><th scope="col">کل</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.orders.data, (order, index) => {
            _push(`<tr><td>${ssrInterpolate(order.order_id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.user.user_name)}-${ssrInterpolate(order.user.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.orderable.name)}</td><td>${ssrInterpolate(order.price.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.count.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.discount.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate((order.price * order.count - order.discount).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.comison.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate((order.tax + order.complications).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(order.total.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(unref(moment)(order.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td>`);
            if (order.t_id > 0) {
              _push(`<td>${ssrInterpolate(order.t_id)}</td>`);
            } else {
              _push(`<td>پرداخت از کیف پول </td>`);
            }
            _push(`</tr>`);
          });
          _push(`<!--]-->`);
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
          _push(`</tbody></table>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div><p>گزینه ای یافت نشد.</p></div>`);
      }
      _push(`</section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Seller/Order/order-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
