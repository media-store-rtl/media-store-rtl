import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { l as link_default } from "../ssr.js";
const _sfc_main = {
  __name: "Aside",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "col-lg-3 border-end" }, _attrs))}><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/profile" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("profile.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`اطلاعات کاربری`);
          } else {
            return [
              createTextVNode("اطلاعات کاربری")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/identity" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("identity.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`اطلاعات هویتی`);
          } else {
            return [
              createTextVNode("اطلاعات هویتی")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/sikll" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("sikll.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`مهارت ها`);
          } else {
            return [
              createTextVNode("مهارت ها")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/network" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("network.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`اعلان ها`);
          } else {
            return [
              createTextVNode("اعلان ها")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/social" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("social.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`شبکه های اجتماعی`);
          } else {
            return [
              createTextVNode("شبکه های اجتماعی")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></aside>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Aside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
