import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import { _ as _sfc_main$2 } from "./AsideAdmin2-Cn98USeV.js";
import swal from "sweetalert2";
import "@inertiajs/inertia";
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
  __name: "Profile-edit",
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
    user: Object,
    alert: Object,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      id: props.user.id,
      user_name: props.user.user_name,
      name: props.user.name,
      lasst_name: props.user.lasst_name,
      name_show: props.user.name_show,
      tel: props.user.tel,
      birth: props.user.profile ? props.user.profile.birth : null,
      gender: props.user.profile ? props.user.profile.gender : null,
      email: props.user.email,
      image: props.user.profile.image ? props.user.profile.image.url : null,
      biography: props.user.profile ? props.user.profile.biography : null,
      password: null,
      password_confirmation: null,
      status: props.user.profile.status
    });
    const alert = ref(props.alert);
    if (alert.value) {
      swal.fire(
        alert.value.title,
        alert.value.text,
        alert.value.icon
      );
      alert.value = null;
    }
    if (hasErrors.value == true) {
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
        title: [errors.value.link ? errors.value.link + "<br>" : ""],
        icon: "error"
      });
    }
    ref(props.ostans);
    ref();
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
      _push(`<td class="d-flex me-auto"><select class="form-select"><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "0") : ssrLooseEqual(unref(form).status, "0")) ? " selected" : ""}>ثبت شده</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "1") : ssrLooseEqual(unref(form).status, "1")) ? " selected" : ""}>در انتظار</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "2") : ssrLooseEqual(unref(form).status, "2")) ? " selected" : ""}>مسدود</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>رد</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>تایید</option></select><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
      _push(`</div></div><div class=""><div class="card-body bg-white"><div class="row gx-5">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: unref(form).id
      }, null, _parent));
      _push(`<div class="col-lg-9"><div class="col-lg-2 me-auto"><h6 class="text-danger">وضعیت پروفایل</h6>`);
      if (props.user.profile.status == 0) {
        _push(`<p>ثبت شده</p>`);
      } else if (props.user.profile.status == 1) {
        _push(`<p> درانتظار</p>`);
      } else if (props.user.profile.status == 2) {
        _push(`<p>مسدود شده</p>`);
      } else if (props.user.profile.status == 3) {
        _push(`<p>رد شده</p>`);
      } else {
        _push(`<p>تایید شده</p>`);
      }
      _push(`</div><section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-8"><div class="row gx-3"><div class="col-6 mb-3"><label class="form-label">نام کاربری</label><input${ssrRenderAttr("value", unref(form).user_name)} readonly="readonly" class="form-control" type="text" placeholder="اینجا تایپ کنید"></div><div class="col-lg-6 mb-3"><label class="form-label">نام نمایشی</label><input${ssrRenderAttr("value", unref(form).name_show)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name_show" autocomplete="name_show"></div><div class="col-lg-6"><label for="biography" class="form-label">بیوگرافی</label><textarea class="bg-light" name="" id="" cols="55" rows="7" placeholder="اینجا تایپ کنید">${ssrInterpolate(unref(form).biography)}</textarea></div></div></div><aside class="col-lg-4"><figure class="text-lg-center">`);
      if (props.user.profile.image && props.user.profile.image.url) {
        _push(`<img class="img-lg mb-3 img-avatar"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.user.profile.image.url)}${ssrRenderAttr("alt", props.user.show_name)}>`);
      } else {
        _push(`<img class="img-lg mb-3 img-avatar"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")}${ssrRenderAttr("alt", props.user.show_name)}>`);
      }
      _push(`<input class="form-control" type="file" id="image" accept="image/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<figcaption class="mt-4"><button class="btn btn-light rounded font-md" href="#"><i class="icons material-icons md-backup font-md"></i> بارگذاری </button></figcaption></figure></aside></div><br></form><hr></section></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Profile/Profile-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
