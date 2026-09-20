import { computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
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
  __name: "bank-index",
  __ssrInlineRender: true,
  props: {
    users: Object,
    banks: Object,
    transaction: Object,
    notifications: Object,
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
      transaction: null,
      status: null,
      id: null,
      price: null
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
      _push(`<table><thead><td class="me-auto"></td></thead></table></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.banks && props.banks.total > 0) {
        _push(`<div class="card mb-4"><div class="card-body"><div class="table-responsive"><table class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">نام</th><th scope="col">نام کاربر</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(props.banks.data, (bank, index) => {
          _push(`<tr><td>${ssrInterpolate(bank.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(bank.menu.name)}</td><td>${ssrInterpolate(bank.user.user_name)}</td><td>${ssrInterpolate(unref(moment)(bank.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
          if (bank.status == 0) {
            _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
          } else {
            _push(`<!---->`);
          }
          if (bank.status == 1) {
            _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
          } else {
            _push(`<!---->`);
          }
          if (bank.status == 2) {
            _push(`<span class="badge badge-pill badge-soft-secondary">بررسی</span>`);
          } else {
            _push(`<!---->`);
          }
          if (bank.status == 3) {
            _push(`<span class="badge badge-pill badge-soft-danger"> منقضی</span>`);
          } else {
            _push(`<!---->`);
          }
          if (bank.status == 4) {
            _push(`<span class="badge badge-pill badge-soft-success">انجام</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td>`);
          _push(ssrRenderComponent(unref(link_default), {
            class: "btn btn-sm btn-primary",
            href: _ctx.route("bankAdmin.show", [bank.id])
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
        _push(`<!--]--></tbody></table>`);
        if (props.banks.total > 9) {
          _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
          ssrRenderList(props.banks.links, (link) => {
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
        _push(`</div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Payment/bank-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
