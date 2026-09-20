import { computed, watch, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import swal from "sweetalert2";
import "@inertiajs/inertia";
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
  __name: "cafe-net-show",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    wallet: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    path: String,
    alert: Object,
    menus: Object,
    webDesign: Object,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      name: props.webDesign.name,
      name_en: props.webDesign.name_en,
      group: null,
      type: null,
      slug: props.webDesign.slug,
      category: null,
      id: props.webDesign.id,
      status: props.webDesign.status,
      price: props.webDesign.price,
      tag: props.webDesign.tag,
      text: props.webDesign.text,
      image: props.webDesign.image,
      basic: props.webDesign.basic,
      damage: props.webDesign.damage,
      rouzekari: props.webDesign.rouzekari,
      pages: props.webDesign.pages
    });
    watch(() => props.alert, (val) => {
      if (val) {
        if (val.title) {
          swal.fire(val.title, val.text, val.icon);
        } else {
          swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3e3,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", swal.stopTimer);
              toast.addEventListener("mouseleave", swal.resumeTimer);
            }
          }).fire({
            title: val.text,
            icon: val.icon
          });
        }
      }
    });
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "cafes" && props.webDesign.group.id == element.id) {
                  menus.value.push(element);
                  form.group = element;
                }
              });
            }
          });
        }
      });
    }
    const menu = ref([]);
    menus.value.forEach((element) => {
      if (form.group == element && element.children.length > 0) {
        element.children.forEach((child) => {
          if (child.routes.length > 0) {
            child.routes.forEach((route) => {
              if (route.name == props.path) {
                if (child.sections.length > 0) {
                  child.sections.forEach((section) => {
                    if (section.name == "cafes" && props.webDesign.type.id == child.id) {
                      menu.value.push(child);
                      form.type = child;
                    } else {
                      menu.value.push(child);
                    }
                  });
                }
              }
            });
          }
        });
      }
    });
    const sections = ref([]);
    if (menu.value.length > 0) {
      menu.value.forEach((element) => {
        if (form.type == element && element.children.length > 0) {
          element.children.forEach((child) => {
            if (child.routes.length > 0) {
              child.routes.forEach((route) => {
                if (route.name == props.path) {
                  if (child.sections.length > 0) {
                    child.sections.forEach((section) => {
                      if (section.name == "cafes" && props.webDesign.category.id == child.id) {
                        sections.value.push(child);
                        form.category = child;
                      } else {
                        sections.value.push(child);
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
      _push(`<td class="d-flex me-auto"><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>مسدود</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>منتشر</option><option value="5"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "5") : ssrLooseEqual(unref(form).status, "5")) ? " selected" : ""}>متوقف</option></select><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</button></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="row"><div class="col-lg-12"><div class="card mt-4"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-3"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).name)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام انگلیسی<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).name_en)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">اسلاگ <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).slug)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">تگ <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).tag)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">بیسیک <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).basic)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">صفحات <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).pages)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">درصد ضمانت <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).damage)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">تعداد روز کاری <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).rouzekari)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label"> گروه <span class="text-danger">*</span></label><select class="form-select">`);
      if (menus.value.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(menus.value, (menu2, index) => {
          _push(`<option${ssrRenderAttr("value", menu2)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, menu2) : ssrLooseEqual(unref(form).group, menu2)) ? " selected" : ""}>${ssrInterpolate(menu2.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, null) : ssrLooseEqual(unref(form).group, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">نوع <span class="text-danger">*</span></label><select class="form-select">`);
      if (menu.value.length > 0 && unref(form).group) {
        _push(`<!--[-->`);
        ssrRenderList(menu.value, (type, index) => {
          _push(`<option${ssrRenderAttr("value", type)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, type) : ssrLooseEqual(unref(form).type, type)) ? " selected" : ""}>${ssrInterpolate(type.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, null) : ssrLooseEqual(unref(form).type, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label"> دسته بندی <span class="text-danger">*</span></label><select class="form-select">`);
      if (sections.value.length > 0 && unref(form).type) {
        _push(`<!--[-->`);
        ssrRenderList(sections.value, (category, index) => {
          _push(`<option${ssrRenderAttr("value", category)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, category) : ssrLooseEqual(unref(form).category, category)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, null) : ssrLooseEqual(unref(form).category, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
      }
      _push(`</select></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">قیمت <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).price)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="row"><div class="col-lg-6"><div class="mt-4"><label class="form-label">تصویر کاور <span class="text-danger">*</span></label><div class="input-upload">`);
      if (unref(form).image && unref(form).image.url) {
        _push(`<img class="img mb-3"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + unref(form).image.url)}${ssrRenderAttr("alt", unref(form).name)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input class="form-control" type="file" id="image" accept="image/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="col-lg-12"><div class="mt-4"><label class="form-label">توضیحات <span class="text-danger">*</span></label>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        "api-key": "0jyg8kag8oi7nb67i513jba26ynnauhhfpwlqckgygf32ly5",
        init: { menubar: false },
        modelValue: unref(form).text,
        "onUpdate:modelValue": ($event) => unref(form).text = $event
      }, null, _parent));
      _push(`</div></div></div></div></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Cafe-Net/cafe-net-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
