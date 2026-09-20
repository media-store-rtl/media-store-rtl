import { ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import DatePicker from "vue3-persian-datetime-picker";
import { _ as _sfc_main$2 } from "./AsideAdmin2-Cn98USeV.js";
import "sweetalert2";
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
  __name: "Identityuser-show",
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
    user: Object,
    time: String,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    const props = __props;
    var now = props.time;
    const form = useForm({
      id: props.user ? props.user.id : null,
      national_code: props.user.identity ? props.user.identity.national_code : null,
      name: props.user ? props.user.name : null,
      lasst_name: props.user ? props.user.lasst_name : null,
      birth: props.user.profile ? props.user.profile.birth : null,
      gender: props.user.profile ? props.user.profile.gender : null,
      ostan: props.user.profile ? props.user.profile.ostan : null,
      shahr: props.user.profile ? props.user.profile.shahr : null,
      biography: props.user.profile ? props.user.profile.biography : null,
      file: props.user.identity.file ? props.user.identity.file.url : null,
      identity: props.user.identity ? props.user.identity.id : null,
      national_id: props.user.identity ? props.user.identity.national_id : null,
      economical_number: props.user.identity ? props.user.identity.economical_number : null,
      status: props.user.identity ? props.user.identity.status : null,
      address: props.user.profile ? props.user.profile.address : null
    });
    const ostans = ref(props.ostans);
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
        _push(`<span>ارسال</span>`);
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
      _push(`<div class="col-lg-9"><div class="col-lg-2 me-auto"><h6 class="text-danger">وضعیت هویتی</h6>`);
      if (props.user.identity.status == 0) {
        _push(`<p>ثبت شده</p>`);
      } else if (props.user.identity.status == 1) {
        _push(`<p> درانتظار</p>`);
      } else if (props.user.identity.status == 2) {
        _push(`<p>مسدود شده</p>`);
      } else if (props.user.identity.status == 3) {
        _push(`<p>رد شده</p>`);
      } else if (props.user.identity.status == 4) {
        _push(`<p>تایید شده</p>`);
      } else {
        _push(`<p>نامشخص</p>`);
      }
      _push(`</div><section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-8">`);
      if (props.user.person == 0) {
        _push(`<div class="row gx-3"><div class="col-12 mb-3"><label class="form-label">کد ملی</label><input${ssrRenderAttr("value", unref(form).national_code)} class="form-control" type="text" placeholder="اینجا تایپ کنید"></div><div class="col-lg-6 mb-3"><label class="form-label">نام</label><input${ssrRenderAttr("value", unref(form).name)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name" autocomplete="name"></div><div class="col-lg-6 mb-3"><label class="form-label">نام خانوادگی</label><input${ssrRenderAttr("value", unref(form).lasst_name)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name" autocomplete="name"></div><div class="col-lg-6 mb-3"><label class="form-label">تولد</label>`);
        _push(ssrRenderComponent(unref(DatePicker), {
          modelValue: unref(form).birth,
          "onUpdate:modelValue": ($event) => unref(form).birth = $event,
          modelModifiers: { lazy: true },
          color: "#1ABC9C",
          max: unref(now),
          type: "date"
        }, null, _parent));
        _push(`</div><div class="col-lg-6 mb-3"><label for="gender" class="form-label">جنسیت</label><select class="form-select" name="gender" id="gender"><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, null) : ssrLooseEqual(unref(form).gender, null)) ? " selected" : ""}>خانم</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, null) : ssrLooseEqual(unref(form).gender, null)) ? " selected" : ""}>آقا</option></select></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label for="" class="form-label">استان</label><select class="form-select" name="" id="">`);
        if (ostans.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(ostans.value, (ostan, index) => {
            _push(`<option${ssrIncludeBooleanAttr(Array.isArray(unref(form).ostan) ? ssrLooseContain(unref(form).ostan, null) : ssrLooseEqual(unref(form).ostan, null)) ? " selected" : ""}>${ssrInterpolate(ostan)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).ostan) ? ssrLooseContain(unref(form).ostan, null) : ssrLooseEqual(unref(form).ostan, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div></div>`);
        if (unref(form).ostan) {
          _push(`<div class="col-lg-6"><div class="mt-4"><label for="" class="form-label">شهر</label><select class="form-select" name="" id=""><!--[-->`);
          ssrRenderList(props.shahrs, (shahr, index1) => {
            _push(`<!--[-->`);
            if (index1 == unref(form).ostan) {
              _push(`<!--[-->`);
              ssrRenderList(shahr, (shahrs, index) => {
                _push(`<option${ssrIncludeBooleanAttr(Array.isArray(unref(form).shahr) ? ssrLooseContain(unref(form).shahr, null) : ssrLooseEqual(unref(form).shahr, null)) ? " selected" : ""}>${ssrInterpolate(shahrs)}</option>`);
              });
              _push(`<!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></select></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="col-lg-12 mb-3"><label class="form-label">نشانی</label><textarea placeholder="اینجا تایپ کنید" class="form-control" rows="4">${ssrInterpolate(unref(form).address)}</textarea></div></div>`);
      } else if (props.user.person == 1) {
        _push(`<div class="row gx-3"><div class="col-6 mb-3"><label class="form-label">شناسه ملی</label><input${ssrRenderAttr("value", unref(form).national_id)} class="form-control" type="text" placeholder="اینجا تایپ کنید"></div><div class="col-6 mb-3"><label class="form-label">کد اقتصادی</label><input${ssrRenderAttr("value", unref(form).economical_number)} class="form-control" type="text" placeholder="اینجا تایپ کنید"></div><div class="col-lg-6 mb-3"><label class="form-label">نام مدیرعامل</label><input${ssrRenderAttr("value", unref(form).name)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name" autocomplete="name"></div><div class="col-lg-6 mb-3"><label class="form-label">نام خانوادگی مدیرعامل</label><input${ssrRenderAttr("value", unref(form).lasst_name)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name" autocomplete="name"></div><div class="col-lg-6 mb-3"><label class="form-label">تاریخ تاسیس</label>`);
        _push(ssrRenderComponent(unref(DatePicker), {
          modelValue: unref(form).birth,
          "onUpdate:modelValue": ($event) => unref(form).birth = $event,
          modelModifiers: { lazy: true },
          color: "#1ABC9C",
          max: unref(now),
          type: "date"
        }, null, _parent));
        _push(`</div>`);
        if (props.user.person == 0) {
          _push(`<div class="col-lg-6 mb-3"><label for="gender" class="form-label">جنسیت</label><select class="form-select" name="gender" id="gender"><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, null) : ssrLooseEqual(unref(form).gender, null)) ? " selected" : ""}>خانم</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, null) : ssrLooseEqual(unref(form).gender, null)) ? " selected" : ""}>آقا</option></select></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><aside class="col-lg-4"><figure class="text-lg-center"><label class="form-label">فایل<span class="text-danger">*</span></label>`);
      if (props.user && props.user.identity && props.user.identity.file) {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.user.identity.file.url)} alt="national code Photo">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/backend/assets/imgs/theme/upload.svg")} alt="national code Photo">`);
      }
      _push(`<input class="form-control" type="file" id="file" accept="zip/rar/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure></aside></div><br></form><hr></section></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Profile/Identityuser-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
