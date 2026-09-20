import { computed, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import _sfc_main$2 from "./support-reply-CW62fbpT.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
const _sfc_main = {
  __name: "support-show",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    users: Object,
    tickets: Object,
    replies: Object,
    notification: Object,
    companies: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
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
        cartPrice: props.cartPrice,
        cartCount: props.cartCount,
        cartDiscount: props.cartDiscount,
        cartCoupon: props.cartCoupon,
        cartTotal: props.cartTotal,
        alert: props.alert,
        users: props.users,
        orders: props.orders,
        notifications: props.notifications,
        dark: props.dark,
        companies: props.companies
      }, null, _parent));
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><form><div class="content-header"><h2 class="content-title">جزییات پیام</h2></div><div class="card mb-4"><div class="card-body"><div class="card mb-4"><div class="card-header"><h4>تاریخچه مکالمات</h4></div><div class="col-sm-12 mt-3"><div class="d-flex me-2">`);
      if (props.tickets.userimage[0] && props.tickets.userimage[0].status == 4) {
        _push(`<img style="${ssrRenderStyle({ "height": "40px" })}" class="img-xs rounded-circle"${ssrRenderAttr("src", "/../storage/" + props.tickets.userimage[0].url)} alt="User">`);
      } else {
        _push(`<img style="${ssrRenderStyle({ "height": "40px" })}" class="img-xs rounded-circle" src="/../storage/files/default-user.png" alt="User">`);
      }
      _push(`<span class="font-xs text-muted me-1">${ssrInterpolate(props.tickets.user.user_name)}| ${ssrInterpolate(unref(moment)(props.tickets.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</span></div><div class="mb-4 me-5"><p>${ssrInterpolate(props.tickets.text)} `);
      if (props.tickets.user.id !== props.users.id) {
        _push(`<a${ssrRenderAttr("href", "#CollapseExample" + props.tickets.id)} class="reply" data-bs-toggle="collapse" aria-expanded="false"${ssrRenderAttr("aria-controls", "CollapseExample" + props.tickets.id)}>پاسخ</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><div class="submenu text-a-r collapse"${ssrRenderAttr("id", "CollapseExample" + props.tickets.id)}><div class="card-body"><div class="mb-4"><label class="form-label">پاسخ:</label><textarea name="text" placeholder="اینجا تایپ کنید" class="form-control" rows="4">${ssrInterpolate(unref(form).text)}</textarea></div></div><div class="card-body"><label class="form-label"> آپلودفایل<span class="text-danger me-1"></span></label><div class="input-upload"><input name="file" class="form-control" type="file" id="file">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary me-4"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>ثبت</button></div>`);
      if (props.tickets.file) {
        _push(`<div class="mb-4 me-5"><p> جهت مشاهده فایل های ضمیه را دانلود نمایید.</p><a${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + props.tickets.file.url)} class="btn btn-sm btn-primary">دانلود</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<hr></div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        tickets: props.tickets,
        replies: props.replies,
        users: props.users,
        auth: props.auth
      }, null, _parent));
      _push(`</div></div></div></form></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Seller/Support/support-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
