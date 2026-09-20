import { computed, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
    cart: Object,
    notifications: Object,
    ids: Object,
    statuses: Object,
    prices: Object,
    companies: Object,
    descriptions: Object,
    wallet: Number
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
        cart: props.cart,
        wallet: props.wallet,
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
      _push(`</div></div><div class="card"><header class="card-header"><div class="row align-items-center"><div class="col-lg-6 col-md-6 mb-lg-0 mb-15"><span><i class="material-icons md-calendar_today"></i> <b><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(unref(moment)(order.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span>`);
      });
      _push(`<!--]--></span></b></span> <br><small class="text-muted"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"> شناسه سفارش: ${ssrInterpolate(order.id.toLocaleString("fa-IR"))}</span>`);
      });
      _push(`<!--]--></span></small></div><div class="col-lg-6 col-md-6 ms-auto text-md-start"><a class="btn btn-secondary print me-auto" href="javascript:window.print()"><i class="icon material-icons md-print"></i></a></div></div></header><div class="card-body"><div class="row mb-50 mt-20 order-info-wrap"><div class="col-md-4"><article class="icontext align-items-start"><span class="icon icon-sm rounded-circle bg-primary-light"><i class="text-primary material-icons md-person"></i></span><div class="text"><h6 class="mb-1"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">فروشنده/طراح</span></span></h6><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(`<p class="mb-1"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.user.user_name)}</span></span><br><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.user.email)}</span>`);
        if (order.user.tel !== null) {
          _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.user.tel.toLocaleString("fa-IR"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span> <br><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"></span></p>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(ssrRenderComponent(unref(link_default), {
          key: index,
          href: _ctx.route("profile.show", order.user.user_name)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>مشاهده نمایه</span></span>`);
            } else {
              return [
                createVNode("span", { style: { "vertical-align": "inherit" } }, [
                  createVNode("span", { style: { "vertical-align": "inherit" } }, "مشاهده نمایه")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></article></div><div class="col-md-4"><article class="icontext align-items-start"></article></div><div class="col-md-4"><article class="icontext align-items-start"><span class="icon icon-sm rounded-circle bg-primary-light"><i class="text-primary material-icons md-person"></i></span><div class="text"><h6 class="mb-1"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">خریدار/کارفرما</span></span></h6><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(`<p class="mb-1"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.order.user.user_name)}</span></span><br><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.order.user.email)}</span>`);
        if (order.order.user.tel !== null) {
          _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.order.user.tel.toLocaleString("fa-IR"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span> <br><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"></span></p>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(ssrRenderComponent(unref(link_default), {
          key: index,
          href: _ctx.route("profile.show", order.order.user.user_name)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>مشاهده نمایه</span></span>`);
            } else {
              return [
                createVNode("span", { style: { "vertical-align": "inherit" } }, [
                  createVNode("span", { style: { "vertical-align": "inherit" } }, "مشاهده نمایه")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></article></div></div><div class="row"><div class="col-lg-12"><div class="table-responsive"><table class="table"><thead><tr><th width="40%"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">خدمات - محصول</span></span></th><th width="10%"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">قیمت واحد</span></span></th><th width="10%"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">تعداد</span></span></th><th width="10%"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">تخفیف</span></span></th><th width="10%"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ناخالص</span></span></th><th width="10%"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">درآمد</span></span></th><th width="10%"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">مالیات</span></span></th><th width="20%" class="text-end"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">پرداخت</span></span></th></tr></thead><tbody><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(`<tr><td><a class="itemside" href="#"><div class="left">`);
        if (order.orderable.image) {
          _push(`<img${ssrRenderAttr("src", "/storage/" + order.orderable.image.url)} width="40" height="40" class="img-xs"${ssrRenderAttr("alt", order.orderable.name)}>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="info"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">`);
        if (order.orderable.name) {
          _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.orderable.name)}</span>`);
        } else {
          _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.orderable.title)}</span>`);
        }
        _push(`</span></div></a></td><td><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.price.toLocaleString("fa-IR"))}</span></span></td><td><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.count.toLocaleString("fa-IR"))}</span></span></td><td><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.discount.toLocaleString("fa-IR"))}</span></span></td><td><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate((order.price * order.count - order.discount).toLocaleString("fa-IR"))}</span></span></td><td><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.comison.toLocaleString("fa-IR"))}</span></span></td><td><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.tax.toLocaleString("fa-IR"))}</span></span></td><td class="text-end"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.total.toLocaleString("fa-IR"))}</span></span></td></tr>`);
      });
      _push(`<!--]--><tr><td colspan="7"><article class="float-end"><dl class="dlist"><dt><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">جمع :</span></span></dt><dd><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.order.price.toLocaleString("fa-IR"))}</span>`);
      });
      _push(`<!--]--></span></dd></dl><dl class="dlist"><dt><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">تخفیف :</span></span></dt><dd><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.order.discount.toLocaleString("fa-IR"))}</span>`);
      });
      _push(`<!--]--></span></dd></dl><dl class="dlist"><dt><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">بن تخفیف :</span></span></dt><dd><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.order.coupon.toLocaleString("fa-IR"))}</span>`);
      });
      _push(`<!--]--></span></dd></dl><dl class="dlist"><dt><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">کل :</span></span></dt><dd><b class="h5"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><!--[-->`);
      ssrRenderList(props.orders.data, (order, index) => {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.order.total.toLocaleString("fa-IR"))}</span>`);
      });
      _push(`<!--]--></span></b></dd></dl><dl class="dlist"><dt class="text-muted"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">وضعیت:</span></span></dt><dd><span class="badge rounded-pill alert-success text-success"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">پرداخت انجام شد</span></span></span></dd></dl></article></td></tr></tbody></table></div></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Modir/Order/order-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
