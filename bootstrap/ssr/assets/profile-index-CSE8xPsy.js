import { computed, watch, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$5 from "./footer-BmA7fAd4.js";
import { _ as _sfc_main$4 } from "./Input-fb2thAme.js";
import { _ as _sfc_main$3 } from "./Label-CSDQjSTl.js";
import { _ as _sfc_main$2 } from "./Aside-B3hnHcJa.js";
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
  __name: "profile-index",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    canResetPassword: Boolean,
    status: String,
    users: Object,
    ostans: Object,
    shahrs: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    alert: Object,
    token: String,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      // national_code:props.users.national_code,
      user_name: props.users.user_name,
      // name:props.users.name,
      // lasst_name:props.users.lasst_name,
      name_show: props.users.name_show,
      tel: props.users.tel,
      phone: props.users.phone,
      // shahr:props.users.profile?props.users.profile.shahr:null,
      // address:props.users.profile?props.users.profile.address:null,
      // birth:props.users.profile?props.users.profile.birth:null,
      // gender:props.users.profile?props.users.profile.gender:null,
      // email: props.users.email,
      image: props.users.profile && props.users.profile.image ? props.users.profile.image.url : null,
      biography: props.users.profile ? props.users.profile.biography : null,
      password: null,
      password_confirmation: null,
      token: props.token ? props.token : null
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
    ref(props.ostans);
    ref();
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
      _push(`<td class="me-auto"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</div></div><div class=""><div class="card-body bg-white"><div class="row gx-5">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="col-lg-9"><div class="col-lg-2 me-auto"><h6 class="text-danger">وضعیت پروفایل</h6>`);
      if (props.users.profile && props.users.profile.status == 0) {
        _push(`<p>ثبت شده</p>`);
      } else if (props.users.profile && props.users.profile.status == 1) {
        _push(`<p> درانتظار</p>`);
      } else if (props.users.profile && props.users.profile.status == 2) {
        _push(`<p>مسدود شده</p>`);
      } else if (props.users.profile && props.users.profile.status == 3) {
        _push(`<p>رد شده</p>`);
      } else if (props.users.profile && props.users.profile.status == 4) {
        _push(`<p>تایید شده</p>`);
      } else {
        _push(`<p>نامشخص</p>`);
      }
      _push(`</div><section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-8"><div class="row gx-3"><div class="col-6 mb-3"><label class="form-label">نام کاربری<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).user_name)} readonly="readonly" class="form-control" type="text" placeholder="اینجا تایپ کنید"></div><div class="col-6 mb-3"><label class="form-label">نام نمایشی <span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).name_show)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name_show" autocomplete="name_show"></div><div class="col-12 mb-3"><label class="form-label">تلفن </label><input${ssrRenderAttr("value", unref(form).phone)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name_show" autocomplete="name_show"></div><div class="col-lg-12 mb-3"><label for="biography" class="form-label">بیوگرافی</label><textarea class="form-control" name="" id="" rows="4" placeholder="اینجا تایپ کنید">${ssrInterpolate(unref(form).biography)}</textarea></div></div></div><aside class="col-lg-4"><figure class="text-lg-center">`);
      if (props.users.image && props.users.image.url) {
        _push(`<img class="img-lg mb-3 img-avatar"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.users.image.url)}${ssrRenderAttr("alt", props.users.name_show)}>`);
      } else {
        _push(`<img class="img-lg mb-3 img-avatar"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")}${ssrRenderAttr("alt", props.companies ? props.companies.name : null)}>`);
      }
      _push(`<input class="form-control" type="file" id="image" accept="image/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure></aside></div><br></form><hr><div class="row" style="${ssrRenderStyle({ "max-width": "920px" })}"><div class="col-md"><article class="box mb-3 bg-light"><h6>تغییر رمز عبور</h6><button type="button" class="btn btn-light btn-sm rounded font-md" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">تغییر</button></article></div><div class="col-md"><article class="box mb-3 bg-light"><h6>تغییر شماره تلفن همراه</h6><button type="button" class="btn btn-light btn-sm rounded font-md" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">تغییر</button></article></div></div></section><div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="staticBackdropLabel">تغییر رمز عبور</h5><button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="form-group">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        for: "password",
        value: "رمز عبور",
        class: "pb-1"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        id: "password",
        type: "password",
        class: "form-control",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        autocomplete: "new-password"
      }, null, _parent));
      _push(`</div><div class="form-group">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        for: "password_confirmation",
        value: "تکرار رمز عبور",
        class: "pb-1"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        id: "password_confirmation",
        type: "password",
        class: "form-control",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        required: "",
        autocomplete: "new-password"
      }, null, _parent));
      _push(`</div></div><div class="modal-footer"><button data-bs-dismiss="modal" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-sm btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>تایید `);
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">انصراف</button></div></div></div></div><div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="staticBackdropLabel">تغییر شماره تلفن همراه</h5><button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="form-group">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        class: "pb-1",
        for: "tel",
        value: "تلفن همراه"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        id: "tel",
        type: "tel",
        class: "form-control",
        modelValue: unref(form).tel,
        "onUpdate:modelValue": ($event) => unref(form).tel = $event,
        autocomplete: "tel",
        placeholder: "مثال 09120123456"
      }, null, _parent));
      _push(`</div></div><div class="modal-footer"><button data-bs-dismiss="modal" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-sm btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>تایید `);
      if (unref(form).processing) {
        _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button><button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">انصراف</button></div></div></div></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Profile/profile-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
