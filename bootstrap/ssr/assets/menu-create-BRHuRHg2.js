import { computed, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "sweetalert2";
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
  __name: "menu-create",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    path: String,
    alert: Object,
    menus: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({ section: null, parent_id: null, name: [""] });
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
      _push(`</div></div><form><div class="row"><div class="col-lg-6"><div class="card mt-4"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام<span class="text-danger">*</span></label><div class="row gx-2"><!--[-->`);
      ssrRenderList(unref(form).name, (item, index) => {
        _push(`<div class="d-flex mb-2"><input${ssrRenderAttr("value", unref(form).name[index])} placeholder="اینجا تایپ کنید" type="text" class="form-control"><button type="button" class="btn btn-success ms-2"> + </button>`);
        if (unref(form).name.length > 1) {
          _push(`<button type="button" class="btn btn-danger ms-2"> - </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">شناسه والد</label><select class="form-select">`);
      if (props.menus && props.menus.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(props.menus, (menu, index) => {
          _push(`<option${ssrRenderAttr("value", menu.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).parent_id) ? ssrLooseContain(unref(form).parent_id, menu.id) : ssrLooseEqual(unref(form).parent_id, menu.id)) ? " selected" : ""}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"></span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(menu.name)} ( `);
          if (menu.sections) {
            _push(`<!--[-->`);
            ssrRenderList(menu.sections, (section, index2) => {
              _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"> قسمت:${ssrInterpolate(section.name)}</span>`);
            });
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(` ) </span></option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).parent_id) ? ssrLooseContain(unref(form).parent_id, null) : ssrLooseEqual(unref(form).parent_id, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div></div></div></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Public/menu-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
