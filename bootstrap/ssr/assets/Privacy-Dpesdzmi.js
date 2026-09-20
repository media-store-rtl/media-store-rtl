import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$1 from "./Header2-F5OjGsRQ.js";
import _sfc_main$2 from "./Footer2-vTePDDgz.js";
import { u as useForm, h as head_default, l as link_default } from "../ssr.js";
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
  __name: "Privacy",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    pages: Object,
    alert: Object,
    cart: Object,
    namads: Object,
    socials: Object,
    path: String,
    companies: Object,
    menus: Object,
    menu: Object
  },
  setup(__props) {
    const props = __props;
    useForm({ name: null, lasst_name: null, email: null, tel: null, date: null, text: null });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(head_default), { title: "حریم خصوصی" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        companies: props.companies,
        results: props.results,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(`<main class="main pages" style="${ssrRenderStyle({ "transform": "none" })}"><div class="page-content pt-50" style="${ssrRenderStyle({ "transform": "none" })}"><div class="container" style="${ssrRenderStyle({ "transform": "none" })}"><div class="row" style="${ssrRenderStyle({ "transform": "none" })}"><div class="col-xl-10 col-lg-12 m-auto" style="${ssrRenderStyle({ "transform": "none" })}"><div class="row" style="${ssrRenderStyle({ "transform": "none" })}"><div class="col-lg-9"><div class="single-page pr-30 mb-lg-0 mb-sm-5"><div class="single-header style-2"><h2>${ssrInterpolate(props.pages.title)}</h2><div class="entry-meta meta-1 meta-3 font-xs mt-15 mb-15"><span class="post-by">توسط `);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("profile.show", [props.pages.user.user_name])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.pages.user.name_show)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.pages.user.name_show), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span class="post-on has-dot">تاریخ ${ssrInterpolate(unref(moment)(props.pages.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD"))}</span><span class="post-on has-dot">بروزرسانی ${ssrInterpolate(unref(moment)(props.pages.updated_at).locale("fa", unref(fa)).format("jYYYY/jM/jD"))}</span></div></div><div class="single-content mb-50"><h4>خوش آمدید به ${ssrInterpolate(props.pages.title)} <span>${ssrInterpolate(props.companies.name_show)}</span></h4><ol start="1"><span>${props.pages.data ?? ""}</span></ol></div></div></div></div></div></div></div></div></main>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        socials: props.socials,
        time: props.time,
        menus: props.menus,
        path: props.path,
        namads: props.namads
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/Privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
