import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import "sweetalert2";
import { _ as _sfc_main$2 } from "./Editor-CocwfA7J.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const _sfc_main = {
  __name: "Blog-show",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    menus: Object,
    blog: Object,
    path: String,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: props.blog.id,
      title_en: props.blog.title_en,
      title: props.blog.title,
      text: props.blog.text,
      image: props.blog.image ? props.blog.image.url : null,
      type: null,
      group: null,
      category: null,
      status: props.blog.status,
      tag: props.blog.tag,
      slug: props.blog.slug
    });
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((ruote) => {
            if (ruote.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "blogs") {
                  menus.value.push(element), form.group = element;
                }
              });
            }
          });
        }
      });
    }
    const menu = ref([]);
    if (menus.value.length > 0) {
      menus.value.forEach((element) => {
        if (form.group == element) {
          element.children.forEach((child) => {
            if (child.routes.length > 0) {
              child.routes.forEach((route) => {
                if (route.name == props.path) {
                  if (child.sections.length > 0) {
                    child.sections.forEach((section) => {
                      if (section.name == "blogs") {
                        menu.value.push(child);
                        form.type = child;
                      }
                    });
                  }
                }
              });
            }
          });
        }
      });
    }
    ref([]);
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
      _push(`<main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title">${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="d-flex me-auto"><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>بررسی</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}> منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option></select><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</button></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="row"><div class="col-lg-12"><div class="card mt-4"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">عنوان<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).title)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4 me-1"><label class="form-label">عنوان انگلیسی<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).title_en)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-12"><div class="mt-4"><label class="form-label">اسلاگ<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).slug)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><label class="form-label">گروه مقاله<span class="text-danger">*</span></label><select class="form-select">`);
      if (menus.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu2, index) => {
          _push(`<option${ssrRenderAttr("value", menu2)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, menu2) : ssrLooseEqual(unref(form).group, menu2)) ? " selected" : ""}>${ssrInterpolate(menu2.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, null) : ssrLooseEqual(unref(form).group, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div><div class="col-lg-6"><label class="form-label"> نوع مقاله<span class="text-danger">*</span></label><select class="form-select">`);
      if (menu.value.length > 0 && unref(form).group) {
        _push(`<!--[-->`);
        ssrRenderList(menu.value, (type, index) => {
          _push(`<option${ssrRenderAttr("value", type)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, type) : ssrLooseEqual(unref(form).type, type)) ? " selected" : ""}>${ssrInterpolate(type.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, null) : ssrLooseEqual(unref(form).type, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div><div class="col-lg-12"><div class="mt-4">`);
      if (unref(form).image) {
        _push(`<img class="card-img h-100"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + unref(form).image)}${ssrRenderAttr("alt", unref(form).title)}>`);
      } else {
        _push(`<img class="card-img h-100"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)}${ssrRenderAttr("alt", unref(form).title)}>`);
      }
      _push(`<label class="form-label">تصویر کاور <span class="text-danger">*</span></label><div class="input-upload"><input class="form-control" type="file" id="image" accept="image/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-4"><label class="form-label">تگ سئو: طول کارکتر بین ۱۲۰ تا ۱۶۰ کاراکتر و شامل کلمه کلیدی اصلی<span class="text-danger">*</span></label><div class="row gx-2"><textarea class="form-control" cols="30" rows="10" placeholder="اینجا تایپ کنید">${ssrInterpolate(unref(form).tag)}</textarea></div></div><div class="mt-4"><label class="form-label">کد<span class="text-danger">*</span></label><div class="row gx-2">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(form).text,
        "onUpdate:modelValue": ($event) => unref(form).text = $event,
        modelModifiers: { lazy: true, trim: true }
      }, null, _parent));
      _push(`</div></div></div></div></div></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Public/Blog-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
