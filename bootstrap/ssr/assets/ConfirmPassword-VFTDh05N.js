import { unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useForm, h as head_default } from "../ssr.js";
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
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  props: {
    cart: Object,
    wallet: Number,
    alert: Object,
    users: Object,
    orders: Object,
    notifications: Object,
    dark: String,
    companies: Object,
    descriptions: Object,
    asidemini: String,
    path: String,
    roles: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        roles: props.roles,
        alert: props.alert,
        users: props.users,
        wallet: props.wallet,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(ssrRenderComponent(unref(head_default), { title: "Confirm Password" }, null, _parent));
      _push(`<section class="content-main mt-80 mb-80"><div class="card mx-auto card-login"><div class="card-body"><h4 class="card-title mb-4">تایید کلمه عبور</h4><form><div class="mb-3"><input class="form-control" placeholder="کلمه عبور خود را اینجا وارد نمایید." type="password"${ssrRenderAttr("value", unref(form).password)} autocomplete="current-password"></div><div class="mb-4"><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<div class="spinner-border spinner-border-sm" role="status"></div>`);
      } else {
        _push(`<span>تایید</span>`);
      }
      _push(`</button></div></form></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        socials: props.socials,
        time: props.time,
        menus: props.menus,
        path: props.path
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
