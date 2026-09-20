import { computed, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
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
  __name: "Tarahi-show",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    users: Object,
    tarahis: Object,
    notifications: Object,
    wallet: Number,
    companies: Object,
    descriptions: Object,
    reqDesigner: Object,
    registerDesigner: Object,
    alert: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      expired: null,
      id: null,
      file: null,
      tarahi: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cartPrice: props.cartPrice,
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
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title">${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto">`);
      if (props.tarahis.reqdesigner_id == null) {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (props.tarahis.status == 5 && props.registerDesigner || props.tarahis.status == 8 && props.registerDesigner) {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="row"><div class="col-lg-12"><div class="bg-white"><div class="card-header"><h4>اطلاعات پروژه</h4></div><div class="card-body"><div class="row gx-2"><div class="col-lg-6"><label class="form-label">دسته بندی<span class="text-danger">*</span></label></div><div class="col-lg-6 d-flex"><!--[-->`);
      ssrRenderList(props.tarahis.menus, (menu, index) => {
        _push(`<p>${ssrInterpolate(menu.name + "")}</p>`);
      });
      _push(`<!--]--></div></div><div class="row gx-2"><div class="col-lg-6 mt-4"><label class="form-label">عنوان<span class="text-danger">*</span></label><p>${ssrInterpolate(props.tarahis.title)}</p></div><div class="col-lg-6 mt-4"><label class="form-label">مبلغ پروژه<span class="text-danger">*</span></label>`);
      if (props.tarahis && props.tarahis.total) {
        _push(`<p>${ssrInterpolate(Number(props.tarahis.total).toLocaleString("fa-IR"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row gx-2"><div class="col-lg-6 mt-4"><label class="form-label">زمان تحویل پروژه <span class="text-danger">*</span></label>`);
      if (props.tarahis) {
        _push(`<div class="row gx-2">${ssrInterpolate(unref(moment)(props.tarahis.date).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-6 mt-4"><label class="form-label">فایل پیوست<span class="text-danger">*</span></label>`);
      if (props.tarahis.file) {
        _push(`<p><a${ssrRenderAttr("href", _ctx.route("download.edit", props.tarahis.file.id))} method="put">نمایش</a></p>`);
      } else {
        _push(`<p>ندارد</p>`);
      }
      _push(`</div></div><div class="mt-4"><label class="form-label">توضیحات کامل درباره سفارش <span class="text-danger">*</span></label><div>${props.tarahis.text ?? ""}</div></div></div></div></div>`);
      if (props.reqDesigner && props.reqDesigner.file) {
        _push(`<div class="col-lg-6 mt-2">`);
        if (props.tarahis.reqdesigner_id == null) {
          _push(`<div class="bg-white"><div class="card-header"><h4> ارسال پیشنهاد</h4></div><div class="card-body"><div class="row gx-2"><div class="col-lg-12"><div class="mt-4"><label class="form-label">تحویل پروژه<span class="text-danger">*</span></label><input type="text"${ssrRenderAttr("value", unref(form).expired)} class="form-control" placeholder="تعداد روز را وارد نمایید مثال : 10"></div></div></div></div></div>`);
        } else {
          _push(`<div class="card-body"><p>شما قبلا درخواست فرستاده اید.</p></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.tarahis.status == 5 && props.registerDesigner || props.tarahis.status == 8 && props.registerDesigner) {
        _push(`<div class="col-lg-6 mt-2"><div class="bg-white"><div class="card-header"><h4> بارگذاری فایل پروژه</h4></div><div class="card-body"><div class="row gx-2"><div class="col-lg-12"><label for="file">لطفا فایل پروژه را که جهت ارائه آماده کرده اید را بارگذاری نمایید.</label><input class="form-control" type="file" id="file" accept="zip/rar/*">`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}%</progress>`);
        } else {
          _push(`<!---->`);
        }
        if (props.reqDesigner && props.reqDesigner.file && unref(form).progress == null) {
          _push(`<a${ssrRenderAttr("href", _ctx.route("download.edit", props.reqDesigner.file.id))} method="put">نمایش فایل پیوست</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Designer/Tarahi/Tarahi-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
