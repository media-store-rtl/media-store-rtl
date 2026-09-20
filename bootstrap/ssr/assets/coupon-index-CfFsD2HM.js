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
  __name: "coupon-index",
  __ssrInlineRender: true,
  props: {
    users: Object,
    coupons: Object,
    ids: Object,
    statuses: Object,
    prices: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    useForm({
      coupon: null,
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
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title">${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("coupon.create"),
        class: "btn btn-primary btn-sm rounded font-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ایجاد`);
          } else {
            return [
              createTextVNode("ایجاد")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.coupons.total > 0) {
        _push(`<div class="card mb-4"><div class="card-body"><div class="table-responsive">`);
        if (props.coupons.total > 0) {
          _push(`<div class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">کد</th><th scope="col">مبلغ</th><th scope="col">کاربر</th><th scope="col">شناسه سفارش</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.coupons.data, (coupon, index) => {
            _push(`<tr><td>${ssrInterpolate(coupon.id.toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(coupon.code)}</td><td>${ssrInterpolate(coupon.price.toLocaleString("fa-IR"))}</td>`);
            if (coupon.user) {
              _push(`<td>${ssrInterpolate(coupon.user.user_name)}</td>`);
            } else {
              _push(`<td> استفاده نشده</td>`);
            }
            if (coupon.order) {
              _push(`<td>${ssrInterpolate(coupon.order.id)}</td>`);
            } else {
              _push(`<td> استفاده نشده</td>`);
            }
            _push(`<td>${ssrInterpolate(unref(moment)(coupon.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
            if (coupon.expired_at) {
              _push(`<span class="badge badge-pill badge-soft-success">استفاده شده</span>`);
            } else {
              _push(`<span class="badge badge-pill badge-soft-warning">استفاده نشده</span>`);
            }
            _push(`</td><td class="text-end"><div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("coupon.destroy", [coupon.id]),
              method: "delete",
              class: "dropdown-item text-danger",
              as: "button"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`حذف`);
                } else {
                  return [
                    createTextVNode("حذف")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></td></tr>`);
          });
          _push(`<!--]-->`);
          if (props.coupons.total > 9) {
            _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
            ssrRenderList(props.coupons.links, (link) => {
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
          _push(`</tbody></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Coupon/coupon-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
