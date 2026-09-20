import { ref, onMounted, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import { u as useForm, l as link_default } from "../ssr.js";
import "sweetalert2";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import { router } from "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "Dashboard",
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
    useForm({
      id: null
    });
    ref([props.asidemini]);
    ref([props.dark]);
    ref([]);
    ref([]);
    onMounted(() => {
      setInterval(() => {
        router.reload({
          only: ["notifications"]
        });
      }, 5e4);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<body${ssrRenderAttrs(_attrs)}><div class="screen-overlay"></div>`);
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
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="content-header"><div>`);
      if (props.descriptions) {
        _push(`<h2 class="content-title card-title">${props.descriptions.subject ?? ""}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (props.descriptions) {
        _push(`<p>${props.descriptions.text ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.notifications.length > 0) {
        _push(`<div class="col-lg-12"><div class="card mb-4"><article class="card-body"><h5 class="card-title">فعالیت های اخیر</h5><ul class="verti-timeline list-unstyled font-sm"><!--[-->`);
        ssrRenderList(props.notifications, (notification) => {
          _push(`<li class="${ssrRenderClass([{ active: notification === props.notifications[0] }, "event-list"])}"><div class="event-timeline-dot"><i class="${ssrRenderClass([{ "animation-fade-right": notification === props.notifications[0] }, "material-icons md-play_circle_outline font-xxl"])}"></i></div><div class="media"><div class="me-3"><h6><span>${ssrInterpolate(unref(moment)(notification.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span><i class="material-icons md-trending_flat text-brand ml-15 d-inline-block"></i></h6></div>`);
          if (notification.data.id) {
            _push(`<div class="media-body">`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route(notification.data.route, [notification.data.id]) + "?id=" + notification.id
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(notification.data.message)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(notification.data.message), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("dashboard.create") + "?id=" + notification.id,
              class: "me-2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` حذف `);
                } else {
                  return [
                    createTextVNode(" حذف ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<div class="media-body">`);
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route(notification.data.route) + "?id=" + notification.id
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(notification.data.message)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(notification.data.message), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(ssrRenderComponent(unref(link_default), {
              href: _ctx.route("dashboard.create") + "?id=" + notification.id,
              class: "me-2"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` حذف `);
                } else {
                  return [
                    createTextVNode(" حذف ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          }
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul></article></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies
      }, null, _parent));
      _push(`</main></body>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
