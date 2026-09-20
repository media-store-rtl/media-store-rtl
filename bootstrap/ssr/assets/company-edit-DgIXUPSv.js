import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
const _sfc_main = {
  __name: "company-edit",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Number,
    cartCount: Number,
    ostans: Object,
    shahrs: Object,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    wallet: Number
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      id: props.companies.id ? props.companies.id : null,
      name: props.companies.name ? props.companies.name : null,
      economical_number: props.companies.economical_number ? props.companies.economical_number : null,
      national_number: props.companies.national_number ? props.companies.national_number : null,
      postal_code: props.companies.postal_code ? props.companies.postal_code : null,
      phone: props.companies.phone ? props.companies.phone : null,
      mobile: props.companies.mobile ? props.companies.mobile : null,
      ostan: props.companies.ostan ? props.companies.ostan : null,
      shahr: props.companies.shahr ? props.companies.shahr : null,
      address: props.companies.address ? props.companies.address : null,
      image: props.companies.image ? props.companies.image.url : null,
      tax: props.companies.tax ? props.companies.tax : null,
      complications: props.companies.complications ? props.companies.complications : null,
      comison: props.companies.comison ? props.companies.comison : null,
      email: props.companies.email ? props.companies.email : null,
      telegram: props.companies.telegram ? props.companies.telegram : null,
      instagram: props.companies.instagram ? props.companies.instagram : null,
      link: props.companies.link ? props.companies.link : null,
      comison_designer: props.companies.comison_designer ? props.companies.comison_designer : null,
      design_damage: props.companies.design_damage ? props.companies.design_damage : null
    });
    const ostans = ref(props.ostans);
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cartPrice: props.cartPrice,
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
      _push(`<main class="main-wrap rtl"><section class="content-main"><form><div class="row"><div class="col-12"><div class="content-header"><div>`);
      if (props.descriptions) {
        _push(`<h2 class="content-title card-title">${ssrInterpolate(props.descriptions.subject)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      if (props.descriptions) {
        _push(`<p>${ssrInterpolate(props.descriptions.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>ثبت</button></div></div><div class="col-lg-6"><div class="card mt-4"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">نام<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).name)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">شماره اقتصادی<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).economical_number)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">شماره ثبت / شماره ملی:<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).national_number)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">کد پستی:<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).postal_code)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">تلفن:<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).phone)} class="form-control" type="phone" placeholder="09123456789" name="tel" autocomplete="tel"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">همراه:<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).mobile)} class="form-control" type="tel" placeholder="09123456789" name="tel" autocomplete="tel"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label for="" class="form-label">استان<span class="text-danger">*</span></label><select class="form-select" name="" id="">`);
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
        _push(`<div class="col-lg-6"><div class="mt-4"><label for="" class="form-label">شهر<span class="text-danger">*</span></label><select class="form-select" name="" id=""><!--[-->`);
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
      _push(`<div class="mt-4"><label class="form-label">آدرس<span class="text-danger">*</span></label><textarea placeholder="اینجا تایپ کنید" class="form-control" rows="4">${ssrInterpolate(unref(form).address)}</textarea></div></div></div></div></div></div><div class="col-lg-6"><div class="card mt-4"><div class="card-header"><h4>اطلاعات</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">مالیات<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).tax)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">عوارض<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).complications)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">کمیسیون<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).comison)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">تلگرام<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).telegram)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">اینستاگرام<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).instagram)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">ایمیل<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).email)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">آدرس دامنه<span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).link)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">کمیسیون طراح<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).comison_designer)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">ضمانت پروژه<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).design_damage)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div></div></div></div></div><div class="card mt-4"><div class="card-header"><h4>تصویر<span class="text-danger">*</span></h4></div><div class="card-body"><div class="input-upload"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + unref(form).image)} alt=""><input class="form-control" type="file" id="image" accept="image/*">`);
      if (unref(form).progress) {
        _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Admin/Company/company-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
