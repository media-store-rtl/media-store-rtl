import { computed, watch, ref, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, h as head_default, l as link_default } from "../ssr.js";
import { _ as _sfc_main$3 } from "./Input-fb2thAme.js";
import { _ as _sfc_main$2 } from "./Label-CSDQjSTl.js";
import _sfc_main$1 from "./Header2-F5OjGsRQ.js";
import _sfc_main$4 from "./Footer2-vTePDDgz.js";
import swal from "sweetalert2";
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
  __name: "Register2",
  __ssrInlineRender: true,
  props: {
    alert: Object,
    companies: Object,
    cart: Object,
    menus: Object,
    socials: Object,
    time: String,
    menu: Object,
    namads: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      name_show: null,
      name: null,
      lasst_name: null,
      tel: null,
      email: null,
      password: null,
      password_confirmation: null,
      terms: false,
      person: 0
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
    watch(() => errors.value, (val) => {
      if (val && Object.keys(val).length > 0) {
        Object.values(val).forEach((errMsg) => {
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
            title: errMsg,
            icon: "error"
          });
        });
      }
    });
    const step = ref("step");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(head_default), { title: "Register" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        companies: props.companies,
        results: props.results,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(`<main class="main pages"><div class="page-content pt-150 pb-150"><div class="container"><div class="row"><div class="col-xl-8 col-lg-10 col-md-12 m-auto"><div class="row"><div class="col-lg-6 col-md-8"><div class="login_wrap widget-taber-content background-white"><div class="padding_eight_all bg-white"><div class="heading_s1"><h1 class="mb-5">ایجاد حساب کاربری</h1><p class="mb-30">قبلا حساب کاربری ساختی? `);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("login")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ورود`);
          } else {
            return [
              createTextVNode("ورود")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><form method="post"><div class="form-group"><div class="d-flex">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "pb-1",
        for: "name_show",
        value: "انتخاب اشخاص"
      }, null, _parent));
      _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-user color-primary"></span></div><select class="form-control ltr"><option class="rtl" value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).person) ? ssrLooseContain(unref(form).person, "0") : ssrLooseEqual(unref(form).person, "0")) ? " selected" : ""}>شخص</option><option class="rtl" value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).person) ? ssrLooseContain(unref(form).person, "1") : ssrLooseEqual(unref(form).person, "1")) ? " selected" : ""}>شرکت</option></select></div></div>`);
      if (step.value == "step") {
        _push(`<div class="form-group"><div class="d-flex">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "pb-1",
          for: "name_show",
          value: "نام نمایشی"
        }, null, _parent));
        _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-user color-primary"></span></div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          id: "name_show",
          type: "text",
          class: "form-control",
          modelValue: unref(form).name_show,
          "onUpdate:modelValue": ($event) => unref(form).name_show = $event,
          autocomplete: "name_show",
          placeholder: "مثال فروشگاه مدیا"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step") {
        _push(`<div class="form-group"><div class="d-flex">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "pb-1",
          for: "name",
          value: "نام"
        }, null, _parent));
        _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-user color-primary"></span></div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          id: "name",
          type: "text",
          class: "form-control",
          modelValue: unref(form).name,
          "onUpdate:modelValue": ($event) => unref(form).name = $event,
          autocomplete: "name",
          placeholder: "اینجا تایپ کنید "
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step") {
        _push(`<div class="form-group"><div class="d-flex">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "pb-1",
          for: "lasst_name",
          value: "نام خانوادگی"
        }, null, _parent));
        _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-user color-primary"></span></div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          id: "lasst_name",
          type: "text",
          class: "form-control",
          modelValue: unref(form).lasst_name,
          "onUpdate:modelValue": ($event) => unref(form).lasst_name = $event,
          autocomplete: "lasst_name",
          placeholder: "اینجا تایپ کنید"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step2") {
        _push(`<div class="form-group"><div class="d-flex">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "pb-1",
          for: "name_show",
          value: "نام نمایشی(شرکت)"
        }, null, _parent));
        _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-user color-primary"></span></div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          id: "name_show",
          type: "text",
          class: "form-control",
          modelValue: unref(form).name_show,
          "onUpdate:modelValue": ($event) => unref(form).name_show = $event,
          autocomplete: "name_show",
          placeholder: "مثال فروشگاه مدیا"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step2") {
        _push(`<div class="form-group"><div class="d-flex">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "pb-1",
          for: "name",
          value: "نام مدیرعامل"
        }, null, _parent));
        _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-user color-primary"></span></div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          id: "name",
          type: "text",
          class: "form-control",
          modelValue: unref(form).name,
          "onUpdate:modelValue": ($event) => unref(form).name = $event,
          autocomplete: "name",
          placeholder: "اینجا تایپ کنید "
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step2") {
        _push(`<div class="form-group"><div class="d-flex">`);
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "pb-1",
          for: "lasst_name",
          value: "نام خانوادگی مدیرعامل"
        }, null, _parent));
        _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-user color-primary"></span></div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          id: "lasst_name",
          type: "text",
          class: "form-control",
          modelValue: unref(form).lasst_name,
          "onUpdate:modelValue": ($event) => unref(form).lasst_name = $event,
          autocomplete: "lasst_name",
          placeholder: "اینجا تایپ کنید"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="form-group"><div class="d-flex">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "pb-1",
        for: "email",
        value: "پست الکترونیک"
      }, null, _parent));
      _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-email color-primary"></span></div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "email",
        type: "email",
        class: "form-control",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        autocomplete: "email",
        placeholder: ""
      }, null, _parent));
      _push(`</div></div><div class="form-group"><div class="d-flex">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "pb-1",
        for: "password",
        value: "کلمه عبور"
      }, null, _parent));
      _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-lock color-primary"></span></div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "password",
        type: "password",
        class: "form-control",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        autocomplete: "new-password",
        placeholder: "رمز ورود خود را وارد نمایید"
      }, null, _parent));
      _push(`</div></div><div class="form-group"><div class="d-flex">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "pb-1",
        for: "password_confirmation",
        value: "تکرار کلمه عبور"
      }, null, _parent));
      _push(`<span class="text-danger me-1">*</span></div><div class="input-group input-group-merge"><div class="input-icon"><span class="ti-lock color-primary"></span></div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "password_confirmation",
        type: "password",
        class: "form-control",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        autocomplete: "new-password",
        placeholder: "تکرار رمز ورود خود را وارد نمایید "
      }, null, _parent));
      _push(`</div></div><div class="login_footer form-group mb-50"><div class="chek-form"><div class="custome-checkbox"><input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12"${ssrIncludeBooleanAttr(Array.isArray(unref(form).terms) ? ssrLooseContain(unref(form).terms, null) : unref(form).terms) ? " checked" : ""}><label class="form-check-label" for="exampleCheckbox12"><span>من با قوانین موافقم.</span></label></div></div>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("terms-conditions.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fi-rs-book-alt mr-5 text-muted"${_scopeId}></i>مطالعه قوانین`);
          } else {
            return [
              createVNode("i", { class: "fi-rs-book-alt mr-5 text-muted" }),
              createTextVNode("مطالعه قوانین")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="form-group mb-30"><button type="submit" name="login" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-fill-out btn-block hover-up font-weight-bold"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
      if (unref(form).processing) {
        _push(`<span>پردازش...</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).processing) {
        _push(`<div class="spinner-border spinner-border-sm" role="status"></div>`);
      } else {
        _push(`<span>ثبت نام</span>`);
      }
      _push(`</button></div><p class="font-xs text-muted"><strong>توجه داشته باشید:</strong>اطلاعات شخصی شما برای پشتیبانی از تجربه شما در سراسر این وب‌سایت، مدیریت دسترسی به حساب کاربری شما و سایر اهدافی که در سیاست حفظ حریم خصوصی ما شرح داده شده است، استفاده خواهد شد.</p></form></div></div></div></div></div></div></div></div></main>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        companies: props.companies,
        namads: props.namads,
        socials: props.socials,
        time: props.time,
        menus: props.menus,
        path: props.path
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
