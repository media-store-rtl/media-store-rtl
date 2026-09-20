import { computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
const _sfc_main = {
  __name: "Profile-index",
  __ssrInlineRender: true,
  props: {
    user: Object,
    orders: Object,
    users: Object,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    ids: Object,
    statuses: Object,
    user_names: Object,
    companies: Object,
    descriptions: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    useForm({
      id: null,
      wallet: null,
      cartWallet: null,
      cartCount: null,
      cartPrice: null,
      cartDiscount: null,
      cartCoupon: null,
      cartTotal: null,
      status: null,
      user_name: null
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
      _push(`</div></div>`);
      if (props.user.total > 0) {
        _push(`<div class="card mb-4"><div class="card-body"><div class="row gx-5"><div class="col-lg-12"><section class="content-body p-xl-4"><div class="table-responsive">`);
        if (props.user.total > 0) {
          _push(`<div class="table table-hover"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">نام کاربری</th><th scope="col">وضعیت</th><th scope="col">اعمال</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.user.data, (use, index) => {
            _push(`<tr><td>${ssrInterpolate(use.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(use.user_name)}</td><td>`);
            if (use.session) {
              _push(`<span class="badge badge-pill badge-soft-success">آنلاین</span>`);
            } else if (use.status == 0) {
              _push(`<span class="badge badge-pill badge-soft-info">ثبت شده </span>`);
            } else if (use.status == 1) {
              _push(`<span class="badge badge-pill badge-soft-warning">مسدود شده</span>`);
            } else if (use.status == 2) {
              _push(`<span class="badge badge-pill badge-soft-secondary">اخیرا</span>`);
            } else if (use.status == 3) {
              _push(`<span class="badge badge-pill badge-soft-danger">غیر فعال</span>`);
            } else {
              _push(`<span class="badge badge-pill badge-soft-danger">${ssrInterpolate(use.status)}</span>`);
            }
            _push(`</td><td>`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "btn btn-sm btn-primary",
              href: _ctx.route("profileAdmin.show", [use.id])
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`نمایش`);
                } else {
                  return [
                    createTextVNode("نمایش")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td></tr>`);
          });
          _push(`<!--]--></tbody></div>`);
        } else {
          _push(`<!---->`);
        }
        if (props.user.total > 9) {
          _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
          ssrRenderList(props.user.links, (link) => {
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
        _push(`</div></section></div></div></div></div>`);
      } else {
        _push(`<p>گزینه ای یافت نشد.</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Profile/Profile-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
