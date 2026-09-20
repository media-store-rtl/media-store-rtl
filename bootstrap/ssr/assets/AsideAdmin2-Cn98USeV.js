import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useForm, l as link_default } from "../ssr.js";
const _sfc_main = {
  __name: "AsideAdmin2",
  __ssrInlineRender: true,
  props: {
    id: Number
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      id: props.id
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "col-lg-3 border-end" }, _attrs))}><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/profileAdmin/" + unref(form).id ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("profileAdmin.show", [unref(form).id])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`اطلاعات کاربران`);
          } else {
            return [
              createTextVNode("اطلاعات کاربران")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/identityAdmin/" + unref(form).id ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("identityAdmin.show", [unref(form).id])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`اطلاعات هویتی کاربران`);
          } else {
            return [
              createTextVNode("اطلاعات هویتی کاربران")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><nav class="nav nav-pills flex-lg-column mb-4">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: ["nav-link", [_ctx.$page.url == "/users/sikllAdmin/" + unref(form).id ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("sikllAdmin.show", [unref(form).id])
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
        class: ["nav-link", [_ctx.$page.url == "/users/networkAdmin/" + unref(form).id ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("networkAdmin.show", [unref(form).id])
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
        class: ["nav-link", [_ctx.$page.url == "/users/socialAdmin/" + unref(form).id ? "active" : ""]],
        "aria-current": "page",
        href: _ctx.route("socialAdmin.show", [unref(form).id])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AsideAdmin2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
