import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { l as link_default } from "../ssr.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "footer",
  __ssrInlineRender: true,
  props: {
    companies: Object
  },
  setup(__props) {
    const props = __props;
    var now = /* @__PURE__ */ new Date();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "main-footer font-xs" }, _attrs))}><div class="row pb-30 pt-15 rtl">`);
      if (props.companies) {
        _push(`<div class="col-sm-6">${ssrInterpolate(unref(moment)(unref(now)).locale("fa", unref(fa)).format("jYYYY").toLocaleString("fa-IR"))}-${ssrInterpolate(1400 .toLocaleString("fa-IR"))} © طراحی توسط `);
        if (props.companies) {
          _push(ssrRenderComponent(unref(link_default), {
            href: _ctx.route("website-design.index", "q") + "all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(props.companies.name + " " + props.companies.lasst_name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(props.companies.name + " " + props.companies.lasst_name), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-sm-6">`);
      if (props.companies) {
        _push(`<div class="text-sm-start">کلیه حقوق مادی و معنوی ${ssrInterpolate(props.companies.name_show)} محفوظ است.</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
