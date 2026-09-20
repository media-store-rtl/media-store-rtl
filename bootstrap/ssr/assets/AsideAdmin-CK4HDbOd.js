import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { l as link_default } from "../ssr.js";
const _sfc_main = {
  __name: "AsideAdmin",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "col-lg-3 border-end" }, _attrs))}><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/company" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("company.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`مشخصات`);
          } else {
            return [
              createTextVNode("مشخصات")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/menu" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("menu.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`منو`);
          } else {
            return [
              createTextVNode("منو")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/section" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("section.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`قسمت`);
          } else {
            return [
              createTextVNode("قسمت")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/route" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("route.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`روت`);
          } else {
            return [
              createTextVNode("روت")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/installment" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("installment.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`قسط`);
          } else {
            return [
              createTextVNode("قسط")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/description" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("description.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`توضیحات`);
          } else {
            return [
              createTextVNode("توضیحات")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/page" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("page.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`صفحات`);
          } else {
            return [
              createTextVNode("صفحات")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/newsletterAdmin" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("newsletterAdmin.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`خبر نامه`);
          } else {
            return [
              createTextVNode("خبر نامه")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/socialAdmin" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("socialAdmin.index")
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
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/namadAdmin" ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("namadAdmin.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`نماد ها`);
          } else {
            return [
              createTextVNode("نماد ها")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AsideAdmin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
