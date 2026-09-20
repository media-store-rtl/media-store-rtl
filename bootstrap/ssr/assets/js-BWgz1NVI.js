import { createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[-->`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/jquery-3.5.0.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/popper.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/bootstrap.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/jquery.magnific-popup.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/jquery.easing.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/jquery.mb.YTPlayer.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/wow.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/owl.carousel.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/jquery.countdown.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/validator.min.js"
  }, null), _parent);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
    src: _ctx.$page.props.ziggy.url + "/js/scripts.js"
  }, null), _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/js.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const js = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  js as default
};
