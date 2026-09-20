import { computed, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "sweetalert2";
import "./Editor-CocwfA7J.js";
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
    companies: Object,
    descriptions: Object,
    alert: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: props.tarahis.id,
      user_id: props.tarahis.user_id,
      designer: props.tarahis.designer_id,
      group: props.tarahis.group,
      type: props.tarahis.type,
      category: props.tarahis.category,
      date: props.tarahis.date,
      text: props.tarahis.text,
      title: props.tarahis.title,
      price: props.tarahis.price,
      discount: props.tarahis.discount,
      total: props.tarahis.total,
      status: props.tarahis.status,
      entekhab: props.tarahis.company_id,
      slug: props.tarahis.slug
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        wallet: props.wallet,
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
      _push(`<table><thead><td class="d-flex me-auto"><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>بررسی</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}> منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option><option value="5"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "5") : ssrLooseEqual(unref(form).status, "5")) ? " selected" : ""}>واگذار شده</option><option value="6"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "6") : ssrLooseEqual(unref(form).status, "6")) ? " selected" : ""}>تمام شده</option><option value="7"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "7") : ssrLooseEqual(unref(form).status, "7")) ? " selected" : ""}>ثبت نظر</option><option value="8"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "8") : ssrLooseEqual(unref(form).status, "8")) ? " selected" : ""}>بارگذاری فایل</option></select><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<span>ویرایش</span>`);
      }
      _push(`</button></td></thead></table></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="row"><div class="col-lg-12"><div class="bg-white"><div class="card-body"><div class="row gx-2"><div class="col-lg-6"><label class="form-label">دسته بندی<span class="text-danger">*</span></label></div><div class="col-lg-6 d-flex"><!--[-->`);
      ssrRenderList(props.tarahis.menus, (menu, index) => {
        _push(`<p>${ssrInterpolate(menu.name + "")}</p>`);
      });
      _push(`<!--]--></div></div><div class="row gx-2"><div class="col-lg-6 mt-4"><label class="form-label">لغو کننده<span class="text-danger">*</span></label>`);
      if (props.tarahis.user_canceller) {
        _push(`<div class="row gx-2">${ssrInterpolate(props.tarahis.user_canceller.user_name)}</div>`);
      } else {
        _push(`<p>تعیین نشده</p>`);
      }
      _push(`</div><div class="col-lg-6 mt-4"><label class="form-label">طراح<span class="text-danger">*</span></label>`);
      if (props.tarahis.register_designer) {
        _push(`<div class="row gx-2">`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("profile.show", [props.tarahis.register_designer.user.user_name])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.tarahis.register_designer.user.name_show)}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.tarahis.register_designer.user.name_show), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (props.tarahis.company) {
        _push(`<div class="row gx-2"><p>${ssrInterpolate(props.companies.name_show)}</p></div>`);
      } else {
        _push(`<p>تعیین نشده</p>`);
      }
      _push(`</div></div><div class="row gx-2"><div class="col-lg-6 mt-4"><label class="form-label">زمان تحویل پروژه <span class="text-danger">*</span></label>`);
      if (unref(form).date) {
        _push(`<div class="row gx-2">${ssrInterpolate(unref(moment)(unref(form).date).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</div>`);
      } else {
        _push(`<p class="row gx-2">تعیین نشده</p>`);
      }
      _push(`</div><div class="col-lg-6 mt-4"><label class="form-label">مبلغ<span class="text-danger">*</span></label>`);
      if (unref(form).total !== null) {
        _push(`<p>${ssrInterpolate(unref(form).total.toLocaleString("fa-IR"))}</p>`);
      } else {
        _push(`<p>تعیین نشده</p>`);
      }
      _push(`</div></div><div class="row gx-2"><div class="col-lg-6 mt-4"><label class="form-label">عنوان<span class="text-danger">*</span></label><p>${ssrInterpolate(unref(form).title)}</p></div><div class="col-lg-6 mt-4"><label class="form-label">فایل پیوست </label>`);
      if (props.tarahis.file) {
        _push(`<p><a${ssrRenderAttr("href", _ctx.route("download.edit", props.tarahis.file.id))} method="put">نمایش فایل پیوست</a></p>`);
      } else {
        _push(`<p> ندارد</p>`);
      }
      _push(`</div></div><div class="mt-4"><label class="form-label">تگ سئو: طول کارکتر بین ۱۲۰ تا ۱۶۰ کاراکتر و شامل کلمه کلیدی اصلی</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name"></div><div class="mt-4"><label class="form-label">توضیحات کامل درباره سفارش <span class="text-danger">*</span></label><div>${unref(form).text ?? ""}</div></div></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Tarahi/Tarahi-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
