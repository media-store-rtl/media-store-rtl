import { computed, watch, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import swal from "sweetalert2";
import { _ as _sfc_main$2 } from "./Editor-CocwfA7J.js";
import VueMultiselect from "vue-multiselect";
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
  __name: "product-create",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    menus: Object,
    wallet: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    children: Object,
    path: String,
    alert: Object,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
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
      prerequisites: [],
      prerequisite_version: {},
      additional_facilities: [],
      test: [],
      sub_test: {},
      tag: null,
      slug: null,
      keywords: null
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
                if (section.name == "products" || section.name == "forms") {
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
    const sub_prerequisites = () => {
      if (prerequisite_version.value.length > 0) {
        prerequisite_version.value.splice(0);
      }
      props.menus.forEach((element) => {
        form.prerequisites.forEach((child1) => {
          if (element == child1) {
            element.children.forEach((child) => {
              if (child.routes.length > 0) {
                child.routes.forEach((route) => {
                  if (route.name == props.path) {
                    if (child.sections.length > 0) {
                      child.sections.forEach((section) => {
                        if (section.name == "prerequisites") {
                          if (child.parent_id == element.id) {
                            prerequisite_version.value.push(child);
                          }
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        });
      });
    };
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
              if (element.sections.length > 0) {
                element.sections.forEach((section) => {
                  if (section.name == "tests") {
                    tests.value.push(element);
                  }
                });
              }
            }
          });
        }
      });
    }
    const test_version = ref([]);
    const sub_test = () => {
      if (test_version.value.length > 0) {
        test_version.value.splice(0);
      }
      props.menus.forEach((element) => {
        form.test.forEach((child1) => {
          if (element == child1) {
            element.children.forEach((child) => {
              if (child.routes.length > 0) {
                child.routes.forEach((route) => {
                  if (route.name == props.path) {
                    if (child.sections.length > 0) {
                      child.sections.forEach((section) => {
                        if (section.name == "tests") {
                          if (child.parent_id == element.id) {
                            test_version.value.push(child);
                          }
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        });
      });
    };
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
      _push(`<main class="main-wrap rtl" data-v-7ab85189><section class="content-main" data-v-7ab85189><div class="row content-header" data-v-7ab85189><div class="d-flex col-sm-12" data-v-7ab85189>`);
      if (props.descriptions) {
        _push(`<div class="content-title card-title" data-v-7ab85189>${props.descriptions.subject ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<table class="me-auto" data-v-7ab85189><thead data-v-7ab85189><tr data-v-7ab85189>`);
      if (step.value !== "step") {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up ms-1"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-7ab85189>قبلی</button>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up me-auto"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-7ab85189>`);
        if (unref(form).processing) {
          _push(`<span data-v-7ab85189>پردازش...</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).processing) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-7ab85189></span>`);
        } else {
          _push(`<span data-v-7ab85189>ایجاد</span>`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value !== "step3") {
        _push(`<button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up me-auto"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-7ab85189>بعدی</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tr></thead></table></div><div class="col-sm-12" data-v-7ab85189>`);
      if (props.descriptions) {
        _push(`<div data-v-7ab85189>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row" data-v-7ab85189><form class="row" data-v-7ab85189><div class="col-lg-12" data-v-7ab85189>`);
      if (step.value == "step") {
        _push(`<div class="card" data-v-7ab85189><div class="card-header" data-v-7ab85189><h4 data-v-7ab85189>اطلاعات پایه</h4></div><div class="card-body" data-v-7ab85189><div class="row" data-v-7ab85189><div class="mt-1 col-sm-6" data-v-7ab85189><label for="product_name" class="form-label" data-v-7ab85189>نام محصول <span class="text-danger" data-v-7ab85189>*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name" data-v-7ab85189></div><div class="mt-1 col-sm-6" data-v-7ab85189><label for="product_name" class="form-label" data-v-7ab85189>نام انگلیسی محصول <span class="text-danger" data-v-7ab85189>*</span></label><input${ssrRenderAttr("value", unref(form).name_en)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name" data-v-7ab85189></div></div><div class="row" data-v-7ab85189><div class="mt-1 col-sm-6" data-v-7ab85189><label for="product_name" class="form-label" data-v-7ab85189>اسلاگ<span class="text-danger" data-v-7ab85189>*</span></label><input${ssrRenderAttr("value", unref(form).slug)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name" data-v-7ab85189></div><div class="mt-1 col-sm-6" data-v-7ab85189><label for="product_name" class="form-label" data-v-7ab85189>کلمات کلیدی</label><input${ssrRenderAttr("value", unref(form).keywords)} type="text" placeholder="اینجا تایپ کنید" class="form-control" id="product_name" data-v-7ab85189></div></div><div class="mt-4" data-v-7ab85189><label class="form-label" data-v-7ab85189>توضیحات کامل درباره محصول <span class="text-danger" data-v-7ab85189>*</span></label>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          modelValue: unref(form).text,
          "onUpdate:modelValue": ($event) => unref(form).text = $event,
          modelModifiers: { lazy: true, trim: true }
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step2") {
        _push(`<div class="card mt-4" data-v-7ab85189><div class="card-header" data-v-7ab85189><h4 data-v-7ab85189>اطلاعات تکمیلی</h4></div><div class="card-body" data-v-7ab85189><div class="row" data-v-7ab85189><div class="col-sm-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>قیمت پیشنهادی محصول <span class="text-danger" data-v-7ab85189>*</span></label><input${ssrRenderAttr("value", unref(form).price)} placeholder="اینجا تایپ کنید" type="text" class="form-control" data-v-7ab85189></div><div class="col-sm-6" data-v-7ab85189><label class="form-label" data-v-7ab85189> گروه محصول <span class="text-danger" data-v-7ab85189>*</span></label><select class="form-select" data-v-7ab85189>`);
        if (menus.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(menus.value, (menu2, index) => {
            _push(`<option${ssrRenderAttr("value", menu2)} data-v-7ab85189${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, menu2) : ssrLooseEqual(unref(form).group, menu2)) ? " selected" : ""}>${ssrInterpolate(menu2.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-7ab85189${ssrIncludeBooleanAttr(Array.isArray(unref(form).group) ? ssrLooseContain(unref(form).group, null) : ssrLooseEqual(unref(form).group, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div></div><div class="row" data-v-7ab85189><div class="col-sm-6 mt-4" data-v-7ab85189><label class="form-label" data-v-7ab85189>نوع محصول <span class="text-danger" data-v-7ab85189>*</span></label><select class="form-select" data-v-7ab85189>`);
        if (menu.value.length > 0 && unref(form).group) {
          _push(`<!--[-->`);
          ssrRenderList(menu.value, (type, index) => {
            _push(`<option${ssrRenderAttr("value", type)} data-v-7ab85189${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, type) : ssrLooseEqual(unref(form).type, type)) ? " selected" : ""}>${ssrInterpolate(type.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-7ab85189${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, null) : ssrLooseEqual(unref(form).type, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div><div class="col-sm-6 mt-4" data-v-7ab85189><label class="form-label" data-v-7ab85189> دسته بندی محصول <span class="text-danger" data-v-7ab85189>*</span></label><select class="form-select" data-v-7ab85189>`);
        if (sections.value.length > 0 && unref(form).type) {
          _push(`<!--[-->`);
          ssrRenderList(sections.value, (category, index) => {
            _push(`<option${ssrRenderAttr("value", category)} data-v-7ab85189${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, category) : ssrLooseEqual(unref(form).category, category)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled data-v-7ab85189${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, null) : ssrLooseEqual(unref(form).category, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div></div><div class="row" data-v-7ab85189><div class="mt-4 col-sm-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>لینک دمو <span class="text-danger" data-v-7ab85189>*</span></label><input${ssrRenderAttr("value", unref(form).demo_link)} placeholder="اینجا تایپ کنید" type="text" class="form-control" data-v-7ab85189></div><div class="mt-4 col-sm-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>نسخه محصول <span class="text-danger" data-v-7ab85189>*</span></label><div class="row gx-2" data-v-7ab85189><input${ssrRenderAttr("value", unref(form).version)} placeholder="اینجا تایپ کنید" type="text" class="form-control" data-v-7ab85189></div></div></div><div class="row" data-v-7ab85189><div class="card-body col-sm-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>فایل <span class="text-danger" data-v-7ab85189>*</span></label><div class="input-upload" data-v-7ab85189><input class="form-control" type="file" id="file" accept="zip/rar/*" data-v-7ab85189>`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5" data-v-7ab85189>${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="card-body col-sm-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>تصویر کاور <span class="text-danger" data-v-7ab85189>*</span></label><div class="input-upload" data-v-7ab85189><input class="form-control" type="file" id="image" accept="image/*" data-v-7ab85189>`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5" data-v-7ab85189>${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<div class="card" data-v-7ab85189><div class="row gx-2" data-v-7ab85189><div class="card-header" data-v-7ab85189><h4 data-v-7ab85189>اطلاعات اضافی</h4></div></div><div class="mt-4" data-v-7ab85189><div class="card-body" data-v-7ab85189><div class="row gx-2" data-v-7ab85189><div class="col-lg-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>پیش نیازها</label>`);
        _push(ssrRenderComponent(unref(VueMultiselect), {
          modelValue: unref(form).prerequisites,
          "onUpdate:modelValue": ($event) => unref(form).prerequisites = $event,
          multiple: true,
          options: prerequisites.value,
          label: "name",
          "close-on-select": true,
          "track-by": "name",
          placeholder: "انتخاب نمایید",
          onSelect: sub_prerequisites
        }, null, _parent));
        _push(`</div>`);
        if (unref(form).prerequisites) {
          _push(`<!--[-->`);
          ssrRenderList(unref(form).prerequisites, (prerequisite, index) => {
            _push(`<div class="col-lg-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>نسخه پیش نیازها محصول (${ssrInterpolate(prerequisite.name)})</label>`);
            _push(ssrRenderComponent(unref(VueMultiselect), {
              modelValue: unref(form).prerequisite_version[prerequisite.id],
              "onUpdate:modelValue": ($event) => unref(form).prerequisite_version[prerequisite.id] = $event,
              multiple: true,
              options: prerequisite_version.value.filter(
                (item) => item.parent_id == prerequisite.id
              ),
              label: "name",
              "close-on-select": true,
              "track-by": "name",
              placeholder: "انتخاب نمایید"
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="row gx-2" data-v-7ab85189><div class="col-lg-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>امکانات اضافی</label>`);
        _push(ssrRenderComponent(unref(VueMultiselect), {
          modelValue: unref(form).additional_facilities,
          "onUpdate:modelValue": ($event) => unref(form).additional_facilities = $event,
          options: additional_facilities.value,
          multiple: true,
          "close-on-select": true,
          label: "name",
          placeholder: "انتخاب نمایید",
          "track-by": "name"
        }, null, _parent));
        _push(`</div><div class="col-lg-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>سازگار با مرورگر </label><div class="row gx-2" data-v-7ab85189>`);
        _push(ssrRenderComponent(unref(VueMultiselect), {
          modelValue: unref(form).browser_compatibility,
          "onUpdate:modelValue": ($event) => unref(form).browser_compatibility = $event,
          multiple: true,
          options: browsers.value,
          label: "name",
          "close-on-select": true,
          "track-by": "name",
          placeholder: "انتخاب نمایید"
        }, null, _parent));
        _push(`</div></div></div><div class="row gx-2" data-v-7ab85189><div class="col-lg-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>تست</label>`);
        _push(ssrRenderComponent(unref(VueMultiselect), {
          modelValue: unref(form).test,
          "onUpdate:modelValue": ($event) => unref(form).test = $event,
          multiple: true,
          options: tests.value,
          label: "name",
          "close-on-select": true,
          "track-by": "name",
          placeholder: "انتخاب نمایید",
          onSelect: sub_test
        }, null, _parent));
        _push(`</div>`);
        if (unref(form).test) {
          _push(`<!--[-->`);
          ssrRenderList(unref(form).test, (tes, index) => {
            _push(`<div class="col-lg-6" data-v-7ab85189><label class="form-label" data-v-7ab85189>نسخه تست محصول (${ssrInterpolate(tes.name)})</label>`);
            _push(ssrRenderComponent(unref(VueMultiselect), {
              modelValue: unref(form).sub_test[tes.id],
              "onUpdate:modelValue": ($event) => unref(form).sub_test[tes.id] = $event,
              multiple: true,
              options: test_version.value.filter(
                (item) => item.parent_id == tes.id
              ),
              label: "name",
              "track-by": "id",
              "close-on-select": false,
              placeholder: "انتخاب نمایید"
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="row gx-2" data-v-7ab85189><label class="form-label" data-v-7ab85189>تگ سئو: طول کارکتر بین ۱۲۰ تا ۱۶۰ کاراکتر و شامل کلمه کلیدی اصلی</label><textarea class="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="اینجا تایپ کنید" data-v-7ab85189>${ssrInterpolate(unref(form).tag)}</textarea></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Seller/Product/product-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const productCreate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ab85189"]]);
export {
  productCreate as default
};
