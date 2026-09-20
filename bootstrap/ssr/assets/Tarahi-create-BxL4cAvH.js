import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import "sweetalert2";
import { _ as _sfc_main$2 } from "./Editor-CocwfA7J.js";
import "@inertiajs/inertia";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
  __name: "Tarahi-create",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    menus: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    children: Object,
    path: String,
    alert: Object,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      name: null,
      name_en: null,
      group: null,
      type: null,
      category: null,
      text: null,
      browser_compatibility: [],
      demo_link: null,
      price: null,
      version: null,
      file: null,
      image: null,
      prerequisites: null,
      prerequisite_version: null,
      additional_facilities: null,
      test: null,
      sub_test: null
    });
    ref("cfw3yx4hh06riwl1qwbq3fwcmjr80c5v0z2ki1fid7agx2ow");
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "products") {
                  menus.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const menu = ref([]);
    const sections = ref([]);
    const step = ref("step");
    const prerequisites = ref([]);
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              if (element.sections.length > 0) {
                element.sections.forEach((section) => {
                  if (section.name == "prerequisites") {
                    prerequisites.value.push(element);
                  }
                });
              }
            }
          });
        }
      });
    }
    const prerequisite_version = ref([]);
    const additional_facilities = ref([]);
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              if (element.sections.length > 0) {
                element.sections.forEach((section) => {
                  if (section.name == "additional_facilities") {
                    additional_facilities.value.push(element);
                  }
                });
              }
            }
          });
        }
      });
    }
    const browsers = ref([]);
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "browsers") {
                  browsers.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const tests = ref([]);
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "tests") {
                  tests.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const test_version = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
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
      _push(`<main class="main-wrap rtl" data-v-f5a9a02c><section class="content-main" data-v-f5a9a02c><div class="row content-header" data-v-f5a9a02c><div class="d-flex col-sm-12" data-v-f5a9a02c>`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title" data-v-f5a9a02c>${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto" data-v-f5a9a02c>`);
      if (step.value !== "step") {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up ms-1"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-f5a9a02c>قبلی</button>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up me-auto"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-f5a9a02c>`);
        if (unref(form).processing) {
          _push(`<span data-v-f5a9a02c>پردازش...</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).processing) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-f5a9a02c></span>`);
        } else {
          _push(`<span data-v-f5a9a02c>ایجاد</span>`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value !== "step3") {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up me-auto"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-f5a9a02c>بعدی</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td></div><div class="col-sm-12" data-v-f5a9a02c>`);
      if (props.descriptions) {
        _push(`<div data-v-f5a9a02c>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row" data-v-f5a9a02c><form class="row" data-v-f5a9a02c><div class="col-lg-12" data-v-f5a9a02c>`);
      if (step.value == "step") {
        _push(`<div class="card" data-v-f5a9a02c><div class="card-header" data-v-f5a9a02c><h4 data-v-f5a9a02c>اطلاعات پایه</h4></div><div class="card-body" data-v-f5a9a02c><div class="row" data-v-f5a9a02c><div class="mt-1 col-sm-6" data-v-f5a9a02c><label for="product_name" class="form-label" data-v-f5a9a02c>نام محصول <span class="text-danger" data-v-f5a9a02c>*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name" data-v-f5a9a02c></div><div class="mt-1 col-sm-6" data-v-f5a9a02c><label for="product_name" class="form-label" data-v-f5a9a02c>نام انگلیسی محصول <span class="text-danger" data-v-f5a9a02c>*</span></label><input${ssrRenderAttr("value", unref(form).name_en)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name" data-v-f5a9a02c></div></div><div class="mt-4" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>توضیحات کامل درباره محصول <span class="text-danger" data-v-f5a9a02c>*</span></label>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          modelValue: unref(form).text,
          "onUpdate:modelValue": ($event) => unref(form).text = $event
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step2") {
        _push(`<div class="card mt-4" data-v-f5a9a02c><div class="card-header" data-v-f5a9a02c><h4 data-v-f5a9a02c>اطلاعات تکمیلی</h4></div><div class="card-body" data-v-f5a9a02c><div class="row" data-v-f5a9a02c><div class="col-sm-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>قیمت پیشنهادی محصول <span class="text-danger" data-v-f5a9a02c>*</span></label><input${ssrRenderAttr("value", unref(form).price)} placeholder="اینجا تایپ کنید" type="text" class="form-control" data-v-f5a9a02c></div><div class="col-sm-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c> گروه محصول <span class="text-danger" data-v-f5a9a02c>*</span></label><select class="form-select" data-v-f5a9a02c>`);
        if (menus.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(menus.value, (menu2, index) => {
            _push(`<option${ssrRenderAttr("value", menu2)} data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, menu2) : ssrLooseEqual(unref(form).group, menu2)) ? " selected" : ""}>${ssrInterpolate(menu2.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, null) : ssrLooseEqual(unref(form).group, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div></div><div class="row" data-v-f5a9a02c><div class="col-sm-6 mt-4" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>نوع محصول <span class="text-danger" data-v-f5a9a02c>*</span></label><select class="form-select" data-v-f5a9a02c>`);
        if (menu.value.length > 0 && unref(form).group) {
          _push(`<!--[-->`);
          ssrRenderList(menu.value, (type, index) => {
            _push(`<option${ssrRenderAttr("value", type)} data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, type) : ssrLooseEqual(unref(form).type, type)) ? " selected" : ""}>${ssrInterpolate(type.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, null) : ssrLooseEqual(unref(form).type, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div><div class="col-sm-6 mt-4" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c> دسته بندی محصول <span class="text-danger" data-v-f5a9a02c>*</span></label><select class="form-select" data-v-f5a9a02c>`);
        if (sections.value.length > 0 && unref(form).type) {
          _push(`<!--[-->`);
          ssrRenderList(sections.value, (category, index) => {
            _push(`<option${ssrRenderAttr("value", category)} data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, category) : ssrLooseEqual(unref(form).category, category)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, null) : ssrLooseEqual(unref(form).category, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div></div><div class="row" data-v-f5a9a02c><div class="mt-4 col-sm-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>لینک دمو <span class="text-danger" data-v-f5a9a02c>*</span></label><input${ssrRenderAttr("value", unref(form).demo_link)} placeholder="اینجا تایپ کنید" type="text" class="form-control" data-v-f5a9a02c></div><div class="mt-4 col-sm-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>نسخه محصول <span class="text-danger" data-v-f5a9a02c>*</span></label><div class="row gx-2" data-v-f5a9a02c><input${ssrRenderAttr("value", unref(form).version)} placeholder="اینجا تایپ کنید" type="text" class="form-control" data-v-f5a9a02c></div></div></div><div class="row" data-v-f5a9a02c><div class="card-body col-sm-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>فایل <span class="text-danger" data-v-f5a9a02c>*</span></label><div class="input-upload" data-v-f5a9a02c><input class="form-control" type="file" id="file" accept="zip/rar/*" data-v-f5a9a02c>`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5" data-v-f5a9a02c>${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="card-body col-sm-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>تصویر کاور <span class="text-danger" data-v-f5a9a02c>*</span></label><div class="input-upload" data-v-f5a9a02c><input class="form-control" type="file" id="image" accept="image/*" data-v-f5a9a02c>`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5" data-v-f5a9a02c>${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<div class="card" data-v-f5a9a02c><div class="row gx-2" data-v-f5a9a02c><div class="card-header" data-v-f5a9a02c><h4 data-v-f5a9a02c>اطلاعات اضافی</h4></div></div><div class="mt-4" data-v-f5a9a02c><div class="card-body" data-v-f5a9a02c><div class="row gx-2" data-v-f5a9a02c><div class="col-lg-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>پیش نیازها</label><select class="form-select" data-v-f5a9a02c>`);
        if (prerequisites.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(prerequisites.value, (prerequisite, index) => {
            _push(`<option${ssrRenderAttr("value", prerequisite)} data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).prerequisites) ? ssrLooseContain(unref(form).prerequisites, prerequisite) : ssrLooseEqual(unref(form).prerequisites, prerequisite)) ? " selected" : ""}>${ssrInterpolate(prerequisite.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).prerequisites) ? ssrLooseContain(unref(form).prerequisites, null) : ssrLooseEqual(unref(form).prerequisites, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div><div class="col-lg-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c> نسخه پیش نیاز</label><select class="form-select" data-v-f5a9a02c>`);
        if (prerequisite_version.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(prerequisite_version.value, (child, index) => {
            _push(`<option${ssrRenderAttr("value", child)} data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).prerequisite_version) ? ssrLooseContain(unref(form).prerequisite_version, child) : ssrLooseEqual(unref(form).prerequisite_version, child)) ? " selected" : ""}>${ssrInterpolate(child.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).prerequisite_version) ? ssrLooseContain(unref(form).prerequisite_version, null) : ssrLooseEqual(unref(form).prerequisite_version, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div></div><div class="row gx-2" data-v-f5a9a02c><div class="col-lg-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>امکانات اضافی</label><select class="form-select" data-v-f5a9a02c>`);
        if (additional_facilities.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(additional_facilities.value, (additional_facilitie, index) => {
            _push(`<option${ssrRenderAttr("value", additional_facilitie)} data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).additional_facilities) ? ssrLooseContain(unref(form).additional_facilities, additional_facilitie) : ssrLooseEqual(unref(form).additional_facilities, additional_facilitie)) ? " selected" : ""}>${ssrInterpolate(additional_facilitie.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).additional_facilities) ? ssrLooseContain(unref(form).additional_facilities, null) : ssrLooseEqual(unref(form).additional_facilities, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div><div class="col-lg-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>سازگار با مرورگر </label><div class="row gx-2" data-v-f5a9a02c><div class="d-flex" data-v-f5a9a02c>`);
        if (browsers.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(browsers.value, (browser, index) => {
            _push(`<div class="form-check" data-v-f5a9a02c>${ssrInterpolate(browser.name)} <input class="form-check-input" type="checkbox"${ssrRenderAttr("value", browser)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).browser_compatibility) ? ssrLooseContain(unref(form).browser_compatibility, browser) : unref(form).browser_compatibility) ? " checked" : ""} data-v-f5a9a02c></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option data-v-f5a9a02c>گزینه ای یافت نشد.</option>`);
        }
        _push(`</div></div></div></div><div class="row gx-2" data-v-f5a9a02c><div class="col-lg-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c>تست</label><select class="form-select" data-v-f5a9a02c>`);
        if (tests.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(tests.value, (test, index) => {
            _push(`<option${ssrRenderAttr("value", test)} data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).test) ? ssrLooseContain(unref(form).test, test) : ssrLooseEqual(unref(form).test, test)) ? " selected" : ""}>${ssrInterpolate(test.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).test) ? ssrLooseContain(unref(form).test, null) : ssrLooseEqual(unref(form).test, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div><div class="col-lg-6" data-v-f5a9a02c><label class="form-label" data-v-f5a9a02c> نسخه تست</label><select class="form-select" data-v-f5a9a02c>`);
        if (unref(form).test) {
          _push(`<!--[-->`);
          ssrRenderList(test_version.value, (version, index) => {
            _push(`<option${ssrRenderAttr("value", version)} data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).sub_test) ? ssrLooseContain(unref(form).sub_test, version) : ssrLooseEqual(unref(form).sub_test, version)) ? " selected" : ""}>${ssrInterpolate(version.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-f5a9a02c${ssrIncludeBooleanAttr(Array.isArray(unref(form).sub_test) ? ssrLooseContain(unref(form).sub_test, null) : ssrLooseEqual(unref(form).sub_test, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Tarahi/Tarahi-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TarahiCreate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5a9a02c"]]);
export {
  TarahiCreate as default
};
