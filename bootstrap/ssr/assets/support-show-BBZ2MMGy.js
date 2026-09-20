import { computed, ref, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$4 from "./footer-BmA7fAd4.js";
import _sfc_main$3 from "./support-reply-V_oIEuS2.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import { _ as _sfc_main$2 } from "./Editor-CocwfA7J.js";
import "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "support-show",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    users: Object,
    tickets: Object,
    replies: Object,
    wallet: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    ref("cfw3yx4hh06riwl1qwbq3fwcmjr80c5v0z2ki1fid7agx2ow");
    const form = useForm({
      parent_id: props.tickets.id,
      menu: props.tickets.menu,
      recepiant: props.tickets.recepiant,
      subject: props.tickets.subject,
      file: null,
      text: null,
      user: null,
      destination: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
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
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
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
      _push(`</div></div><form><div class="card mb-4"><div class="card-body"><div class="card mb-4"><div class="card-header"><h4>تاریخچه مکالمات</h4></div><div class="col-sm-12 mt-3"><div class="d-flex me-2">`);
      if (props.tickets.user && props.tickets.user.image && props.tickets.user.image.status == 4) {
        _push(`<img class="img-sm img-thumbnail"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.tickets.user.image.url)}${ssrRenderAttr("alt", props.tickets.user.name_show)}>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")} class="img-sm img-thumbnail"${ssrRenderAttr("alt", props.tickets.user.name_show)}>`);
      }
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("profile.show", [props.tickets.user.user_name])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-xs text-muted me-1"${_scopeId}>${ssrInterpolate(props.tickets.user.name_show)}| ${ssrInterpolate(unref(moment)(props.tickets.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "font-xs text-muted me-1" }, toDisplayString(props.tickets.user.name_show) + "| " + toDisplayString(unref(moment)(props.tickets.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4 me-5"><div class="d-flex"><div>${props.tickets.text ?? ""}</div>`);
      if (props.tickets.user.id !== props.users.id && props.tickets.status !== 3) {
        _push(`<a${ssrRenderAttr("href", "#CollapseExample" + props.tickets.id)} class="reply" data-bs-toggle="collapse" aria-expanded="false"${ssrRenderAttr("aria-controls", "CollapseExample" + props.tickets.id)}>پاسخ</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="submenu text-a-r collapse"${ssrRenderAttr("id", "CollapseExample" + props.tickets.id)}><div class="card-body"><div class="mb-4"><label class="form-label">شرح<span class="text-danger me-1">*</span></label>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).text,
        "onUpdate:modelValue": ($event) => unref(form).text = $event,
        placeholder: "اینجا تایپ کنید"
      }, null, _parent));
      _push(`</div></div><div class="card-body"><label class="form-label"> آپلودفایل<span class="text-danger me-1"></span></label><div class="input-upload"><input name="file" class="form-control" type="file" id="file">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary me-4"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ارسال</span>`);
      }
      _push(`</button></div>`);
      if (props.tickets.file) {
        _push(`<div class="mb-4 me-5"><p> جهت مشاهده فایل های ضمیه را دانلود نمایید.</p><a${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + props.tickets.file.url)} class="btn btn-sm btn-primary">دانلود</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<hr></div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        tickets: props.tickets,
        replies: props.tickets.replies,
        users: props.users,
        auth: props.auth,
        alert: props.alert
      }, null, _parent));
      _push(`</div></div></div></form></section>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Support/support-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
