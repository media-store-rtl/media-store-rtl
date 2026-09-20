import { computed, ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import "@inertiajs/inertia";
import { a as usePage, u as useForm } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
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
  __name: "cart-index",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    products: Object,
    tarahis: Object,
    cartNumber: Number,
    wallet: Number,
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    codes: Object,
    alert: Object,
    flash: String,
    users: Object,
    notifications: Object,
    cart: Object,
    random_coupon: Object,
    cartTax: Number,
    cartComplications: Number,
    companies: Object,
    cartComison: Number,
    descriptions: Object,
    dark: String,
    token: String,
    path: String
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      id: null,
      count: null,
      coupon: null,
      cartPrice: null,
      cartCount: null,
      cartDiscount: null,
      cartTotal: null,
      cartWallet: props.auth.user.wallet,
      dargah: null,
      text: null,
      date: null,
      type: null,
      model: null
    });
    const alert = ref(props.alert);
    if (alert.value) {
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
        title: props.alert.title + props.alert.text,
        icon: props.alert.icon
      });
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
        title: [
          errors.value.coupon ? errors.value.coupon + "<br>" : "",
          errors.value.count ? errors.value.count + "<br>" : "",
          errors.value.cartPrice ? errors.value.cartPrice + "<br>" : "",
          errors.value.cartCount ? errors.value.cartCount + "<br>" : "",
          errors.value.cartDiscount ? errors.value.cartDiscount + "<br>" : "",
          errors.value.cartTotal ? errors.value.cartTotal + "<br>" : "",
          errors.value.cartWallet ? errors.value.cartWallet + "<br>" : "",
          errors.value.dargah ? errors.value.dargah + "<br>" : "",
          errors.value.text ? errors.value.text + "<br>" : "",
          errors.value.date ? errors.value.date + "<br>" : "",
          errors.value.type ? errors.value.type + "<br>" : ""
        ],
        icon: "error"
      });
    }
    ref([props.products]);
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
        companies: props.companies,
        path: props.path
      }, null, _parent));
      _push(`<body class="${ssrRenderClass({ dark: __props.dark })}"><div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="row content-header"><div class="d-flex col-sm-12">`);
      if (props.descriptions) {
        _push(`<h2 class="content-title card-title">${props.descriptions.subject ?? ""}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto"></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<p>${props.descriptions.text ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="container"><div class="row"><div class="col-sm-12"><form><div class="card"><header class="card-header"><form><div class="row gx-3"><svg xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "display": "none" })}"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></symbol></svg>`);
      if (props.random_coupon) {
        _push(`<div class="alert alert-info d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 ms-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"></use></svg> بن تخفیف شما:<p>${ssrInterpolate(props.random_coupon.code)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></header><div class="card-body">`);
      if (props.cartCount > 0) {
        _push(`<article class="itemlist"><!--[-->`);
        ssrRenderList(props.products, (product, index) => {
          _push(`<div class="row align-items-center"><div class="col-lg-4 col-sm-4 col-8 flex-grow-1 col-name"><a class="itemside" href="#"><div class="left">`);
          if (product["product"].image) {
            _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product["product"].image.url)} class="img-sm img-thumbnail" alt="مورد">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="info"><h6 class="mb-0">${ssrInterpolate(product["product"].name)}</h6></div></a></div><div class="col-lg-2 col-sm-2 col-4 col-price"><span>${ssrInterpolate(product["product"].price.toLocaleString("fa-IR"))} ریال</span></div><div class="col-lg-2 col-sm-2 col-4 col-action text-end"><a href="#" class="btn btn-sm font-sm btn-light rounded"><i class="material-icons md-delete_forever"></i>حذف</a></div></div>`);
        });
        _push(`<!--]--></article>`);
      } else {
        _push(`<article>سبد خرید شما خالی است.</article>`);
      }
      _push(`</div><div class="row d-flex"><div class="col-sm-6 me-1" style="${ssrRenderStyle({ "width": "18rem" })}"><div class="card"><ul class="list-group list-group-flush m-2"><li class="list-group-item">بن تخفیف</li><p class="mt-4"> چنانچه بن تخفیفی دارید پس از وارد نمودن کد دکمه ثبت را فشار دهید.</p><input name="coupon"${ssrRenderAttr("value", unref(form).coupon)} class="form-control" placeholder="بن تخفیف را اینجا وارد نمایید"></ul><div class="card-footer mt-4"><button class="form-control btn btn-sm btn-primary col-sm-4">ثبت </button></div></div></div><div class="col-sm-6 ms-1 me-auto" style="${ssrRenderStyle({ "width": "18rem" })}"><div class="card"><ul class="list-group list-group-flush"><li class="list-group-item">سفارش شما</li><div class="m-2"><div class="d-flex">تعداد:<h5 class="me-auto">${ssrInterpolate(__props.cartCount.toLocaleString("fa-IR"))}</h5></div><div class="d-flex">جمع:<h5 class="me-auto">${ssrInterpolate(__props.cartPrice.toLocaleString("fa-IR"))}</h5></div><div class="d-flex">تخفیف:<h5 class="me-auto">${ssrInterpolate(__props.cartDiscount.toLocaleString("fa-IR"))}</h5></div>`);
      if (__props.cartCoupon) {
        _push(`<div class="d-flex">بن تخفیف:<h5 class="me-auto">${ssrInterpolate(__props.cartCoupon.toLocaleString("fa-IR"))}</h5></div>`);
      } else {
        _push(`<div class="d-flex">بن تخفیف:<h5 class="me-auto">${ssrInterpolate(0 .toLocaleString("fa-IR"))}</h5></div>`);
      }
      _push(`<div class="d-flex">قابل پرداخت:<h5 class="me-auto" style="${ssrRenderStyle({ "font-size": "1.3rem" })}">${ssrInterpolate(__props.cartTotal.toLocaleString("fa-IR"))}</h5></div><div class="d-flex"><label class="form-check-label" for="flexRadioDefault1"> کیف پول</label><input class="form-check-input me-auto"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "wallet")) ? " checked" : ""} type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="wallet"></div><div class="d-flex"><label class="form-check-label" for="flexRadioDefault1">درگاه ملت</label><input class="form-check-input me-auto"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "behpardakht")) ? " checked" : ""} type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="behpardakht"></div><div class="d-flex"><label class="form-check-label" for="flexRadioDefault1">درگاه صادرات</label><input class="form-check-input me-auto"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "sepehr")) ? " checked" : ""} type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="sepehr"></div></div></ul><div class="card-footer">`);
      if (unref(form).dargah == "wallet" || unref(form).dargah == null) {
        _push(`<button class="form-control btn btn-sm btn-primary col-sm-4">`);
        if (unref(form).processing) {
          _push(`<span>پردازش...</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).processing) {
          _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
        } else {
          _push(`<span>پرداخت</span>`);
        }
        _push(`</button>`);
      } else if (unref(form).dargah == "behpardakht") {
        _push(`<form${ssrRenderAttr("action", _ctx.route("order.store"))} method="POST"><input type="hidden" name="_token"${ssrRenderAttr("value", __props.token)}><input type="hidden" name="wallet" value="behpardakht"><input type="hidden" name="cartCount"${ssrRenderAttr("value", props.cartCount)}><input type="hidden" name="cartPrice"${ssrRenderAttr("value", props.cartPrice)}><input type="hidden" name="cartTotal"${ssrRenderAttr("value", props.cartTotal)}><button type="submit" class="form-control btn btn-sm btn-primary col-sm-4">پرداخت</button></form>`);
      } else if (unref(form).dargah == "sepehr") {
        _push(`<form${ssrRenderAttr("action", _ctx.route("order.store"))} method="POST"><input type="hidden" name="_token"${ssrRenderAttr("value", __props.token)}><input type="hidden" name="wallet" value="sepehr"><input type="hidden" name="cartCount"${ssrRenderAttr("value", props.cartCount)}><input type="hidden" name="cartPrice"${ssrRenderAttr("value", props.cartPrice)}><input type="hidden" name="cartTotal"${ssrRenderAttr("value", props.cartTotal)}><button type="submit" class="form-control btn btn-sm btn-primary col-sm-4">پرداخت</button></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></form></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies
      }, null, _parent));
      _push(`</main></body><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Cart/cart-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
