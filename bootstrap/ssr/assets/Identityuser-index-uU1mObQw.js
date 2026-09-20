import { ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import DatePicker from "vue3-persian-datetime-picker";
import { _ as _sfc_main$2 } from "./Aside-B3hnHcJa.js";
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
  __name: "Identityuser-index",
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
    now: String,
    wallet: Number,
    cart: Object
  },
  setup(__props) {
    var _a, _b, _c;
    const props = __props;
    var now = props.now;
    const form = useForm({
      id: props.users ? props.users.id : null,
      national_code: props.users.identity ? props.users.identity.national_code : null,
      name: props.users ? props.users.name : null,
      lasst_name: props.users ? props.users.lasst_name : null,
      birth: props.users.profile ? props.users.profile.birth : null,
      gender: props.users.profile ? props.users.profile.gender : null,
      ostan: props.users.profile ? props.users.profile.ostan : null,
      shahr: props.users.profile ? props.users.profile.shahr : null,
      biography: props.users.profile ? props.users.profile.biography : null,
      file: ((_c = (_b = (_a = props.users) == null ? void 0 : _a.identity) == null ? void 0 : _b.file) == null ? void 0 : _c.url) ?? null,
      identity: props.users.identity ? props.users.identity.id : null,
      national_id: props.users.identity ? props.users.identity.national_id : null,
      economical_number: props.users.identity ? props.users.identity.economical_number : null,
      address: props.users.profile ? props.users.profile.address : null
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
      if (props.users.identity && props.users.identity.status !== 4) {
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
        _push(`</button></td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class=""><div class="card-body bg-white"><div class="row gx-5">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="col-lg-9"><div class="col-lg-2 me-auto"><h6 class="text-danger">وضعیت هویتی</h6>`);
      if (props.users.identity && props.users.identity.status == 0) {
        _push(`<p>ثبت شده</p>`);
      } else if (props.users.identity && props.users.identity.status == 1) {
        _push(`<p> درانتظار</p>`);
      } else if (props.users.identity && props.users.identity.status == 2) {
        _push(`<p>مسدود شده</p>`);
      } else if (props.users.identity && props.users.identity.status == 3) {
        _push(`<p>رد شده</p>`);
      } else if (props.users.identity && props.users.identity.status == 4) {
        _push(`<p>تایید شده</p>`);
      } else {
        _push(`<p>نامشخص</p>`);
      }
      _push(`</div>`);
      if (props.users.identity && props.users.identity.status !== 4) {
        _push(`<section class="content-body p-xl-4"><form><div class="row"><div class="col-lg-8">`);
        if (props.users.person == 0) {
          _push(`<div class="row gx-3"><div class="col-12 mb-3"><label class="form-label">کد ملی<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).national_code)} class="form-control" type="text" placeholder="اینجا تایپ کنید"></div><div class="col-lg-6 mb-3"><label class="form-label">نام<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).name)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name" autocomplete="name"></div><div class="col-lg-6 mb-3"><label class="form-label">نام خانوادگی<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).lasst_name)} class="form-control" type="text" placeholder="اینجا تایپ کنید" name="name" autocomplete="name"></div><div class="col-lg-6 mb-3"><label class="form-label">تولد<span class="text-danger">*</span></label>`);
          _push(ssrRenderComponent(unref(DatePicker), {
            modelValue: unref(form).birth,
            "onUpdate:modelValue": ($event) => unref(form).birth = $event,
            modelModifiers: { lazy: true },
            color: "#1ABC9C",
            max: unref(now),
            type: "date"
          }, null, _parent));
          _push(`</div><div class="col-lg-6 mb-3"><label for="gender" class="form-label">جنسیت<span class="text-danger">*</span></label><select class="form-select" name="gender" id="gender"><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, null) : ssrLooseEqual(unref(form).gender, null)) ? " selected" : ""}>خانم</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, null) : ssrLooseEqual(unref(form).gender, null)) ? " selected" : ""}>آقا</option></select></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label for="" class="form-label">استان</label><select class="form-select" name="" id="">`);
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
        } else if (props.users.person == 1) {
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
          if (props.users.person == 0) {
            _push(`<div class="col-lg-6 mb-3"><label for="gender" class="form-label">جنسیت</label><select class="form-select" name="gender" id="gender"><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, null) : ssrLooseEqual(unref(form).gender, null)) ? " selected" : ""}>خانم</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, null) : ssrLooseEqual(unref(form).gender, null)) ? " selected" : ""}>آقا</option></select></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><aside class="col-lg-4"><figure class="text-lg-center"><label class="form-label">فایل<span class="text-danger">*</span></label>`);
        if (props.users && props.users.identity && props.users.identity.file) {
          _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.users.identity.file.url)} alt="national code Photo">`);
        } else {
          _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/backend/assets/imgs/theme/upload.svg")} alt="national code Photo">`);
        }
        _push(`<input class="form-control" type="file" id="file" accept="zip/rar/*">`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</figure></aside></div><br></form><hr></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Profile/Identityuser-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
