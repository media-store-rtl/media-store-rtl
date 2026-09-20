import { computed, watch, resolveComponent, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import _sfc_main$1 from "./Header2-F5OjGsRQ.js";
import _sfc_main$2 from "./Footer2-vTePDDgz.js";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import swal from "sweetalert2";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "shop-checkout",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    wallet: Number,
    alert: Object,
    random_coupon: Object,
    companies: Object,
    path: String,
    token: String,
    menus: Object,
    socials: Object,
    menu: Object,
    cart: Object,
    namads: Object,
    time: String
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      id: null,
      count: null,
      coupon: null,
      cartPrice: null,
      cartCount: null,
      cartDiscount: null,
      cartTotal: null,
      cartWallet: props.auth.user && props.auth.user.wallet,
      dargah: null,
      text: null,
      date: null,
      type: null,
      model: null
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<body${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "shop-checkout" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        companies: props.companies,
        results: props.results,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(`<main class="main"><div class="page-header breadcrumb-wrap"><div class="container"><div class="breadcrumb">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("index"),
        rel: "nofollow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`صفحه اصلی<i class="fi-rs-home mr-5"${_scopeId}></i>`);
          } else {
            return [
              createTextVNode("صفحه اصلی"),
              createVNode("i", { class: "fi-rs-home mr-5" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span></span> خرید <span></span> تسویه حساب </div></div></div><div class="container mb-80 mt-50"><div class="row"><div class="col-lg-8 mb-40"><h1 class="heading-2 mb-10">تسویه حساب</h1><div class="d-flex justify-content-between"><h6 class="text-body">تعداد <span class="text-brand">${ssrInterpolate(props.cart.count)}</span> محصول در سفارش شما وجود دارد</h6></div></div></div><div class="row"><div class="col-lg-7"><div class="row mb-50"><div class="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">`);
      if (props.random_coupon) {
        _push(`<div class="alert alert-info d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 ms-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"></use></svg> بن تخفیف شما:<p>${ssrInterpolate(props.random_coupon.code)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-lg-6"><form method="post" class="apply-coupon"><input type="text" placeholder="کد را اینجا وارد نمایید"><button class="btn btn-md" name="login">تخفیف</button></form></div></div><div class="row"><h4 class="mb-30">جزئیات صورتحساب</h4>`);
      if (props.auth == null) {
        _push(`<form method="post"><div class="row"><div class="form-group col-lg-6"><input type="text" required="" name="fname" placeholder="First name *"></div><div class="form-group col-lg-6"><input type="text" required="" name="lname" placeholder="Last name *"></div></div><div class="row"><div class="form-group col-lg-6"><input type="text" name="billing_address" required="" placeholder="Address *"></div><div class="form-group col-lg-6"><input type="text" name="billing_address2" required="" placeholder="Address line2"></div></div><div class="row shipping_calculator"><div class="form-group col-lg-6"><div class="custom_select"></div></div><div class="form-group col-lg-6"><input required="" type="text" name="city" placeholder="City / Town *"></div></div><div class="row"><div class="form-group col-lg-6"><input required="" type="text" name="zipcode" placeholder="Postcode / ZIP *"></div><div class="form-group col-lg-6"><input required="" type="text" name="phone" placeholder="Phone *"></div></div><div class="row"><div class="form-group col-lg-6"><input required="" type="text" name="cname" placeholder="Company Name"></div><div class="form-group col-lg-6"><input required="" type="text" name="email" placeholder="Email address *"></div></div><div class="form-group mb-30"><textarea rows="5" placeholder="Additional information"></textarea></div><div class="form-group"><div class="checkbox"><div class="custome-checkbox"><input class="form-check-input" type="checkbox" name="checkbox" id="createaccount"><label class="form-check-label label_info" data-bs-toggle="collapse" href="#collapsePassword" data-target="#collapsePassword" aria-controls="collapsePassword" for="createaccount"><span>Create an account?</span></label></div></div></div><div id="collapsePassword" class="form-group create-account collapse in"><div class="row"><div class="col-lg-6"><input required="" type="password" placeholder="Password" name="password"></div></div></div><div class="ship_detail"><div class="form-group"><div class="chek-form"><div class="custome-checkbox"><input class="form-check-input" type="checkbox" name="checkbox" id="differentaddress"><label class="form-check-label label_info" data-bs-toggle="collapse" data-target="#collapseAddress" href="#collapseAddress" aria-controls="collapseAddress" for="differentaddress"><span>Ship to a different address?</span></label></div></div></div><div id="collapseAddress" class="different_address collapse in"><div class="row"><div class="form-group col-lg-6"><input type="text" required="" name="fname" placeholder="First name *"></div><div class="form-group col-lg-6"><input type="text" required="" name="lname" placeholder="Last name *"></div></div><div class="row shipping_calculator"><div class="form-group col-lg-6"><input required="" type="text" name="cname" placeholder="Company Name"></div><div class="form-group col-lg-6"><div class="custom_select w-100"></div></div></div><div class="row"><div class="form-group col-lg-6"><input type="text" name="billing_address" required="" placeholder="Address *"></div><div class="form-group col-lg-6"><input type="text" name="billing_address2" required="" placeholder="Address line2"></div></div><div class="row"><div class="form-group col-lg-6"><input required="" type="text" name="state" placeholder="State / County *"></div><div class="form-group col-lg-6"><input required="" type="text" name="city" placeholder="City / Town *"></div></div><div class="row"><div class="form-group col-lg-6"><input required="" type="text" name="zipcode" placeholder="Postcode / ZIP *"></div></div></div></div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="table-responsive shopping-summery" velse><table class="table table-wishlist"><thead><tr class="main-heading"><th scope="col" colspan="2">محصول</th><th scope="col">قیمت واحد</th><th scope="col">تعداد</th><th scope="col">تخفیف</th><th scope="col">مالیات</th><th scope="col">پرداختی</th></tr></thead>`);
      if (props.cart.count > 0) {
        _push(`<tbody><!--[-->`);
        ssrRenderList(props.cart.products, (product, index) => {
          _push(`<tr class="pt-30"><td class="image product-thumbnail pt-40">`);
          if (product["product"].image) {
            _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product["product"].image.url)} alt="#">`);
          } else {
            _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} alt="#">`);
          }
          _push(`</td><td class="product-des product-name">`);
          if (product["model"] == "App\\Models\\Product") {
            _push(ssrRenderComponent(unref(link_default), {
              class: "product-name mb-10 text-heading",
              href: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(product["product"].name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(product["product"].name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (product["model"] == "App\\Models\\WebDesign") {
            _push(ssrRenderComponent(unref(link_default), {
              class: "product-name mb-10 text-heading",
              href: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(product["product"].name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(product["product"].name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (product["model"] == "App\\Models\\Tarahi") {
            _push(ssrRenderComponent(unref(link_default), {
              class: "product-name mb-10 text-heading",
              href: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate("پروژه " + product["product"].title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString("پروژه " + product["product"].title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (product["model"] == "App\\Models\\ReqDesigner") {
            _push(ssrRenderComponent(unref(link_default), {
              class: "product-name mb-10 text-heading",
              href: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate("ضمانت پروژه " + product["product"].tarahi_register.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString("ضمانت پروژه " + product["product"].tarahi_register.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="price" data-title="قیمت واحد">`);
          if (product["product"].price) {
            _push(`<h5 class="text-body">${ssrInterpolate(Number(product["product"].price).toLocaleString("fa-IR"))}</h5>`);
          } else {
            _push(`<h5 class="text-body">${ssrInterpolate((product["total"] / product["count"]).toLocaleString("fa-IR"))}</h5>`);
          }
          _push(`</td><td class="price" data-title="تعداد"><h5 class="text-body">${ssrInterpolate(product["count"].toLocaleString("fa-IR"))}</h5></td><td class="price" data-title="تخفیف"><h5 class="text-body">${ssrInterpolate(product["discount"].toLocaleString("fa-IR"))}</h5></td><td class="price" data-title="مالیات"><h5 class="text-body">${ssrInterpolate(product["tax"].toLocaleString("fa-IR"))}</h5></td><td class="price" data-title="پرداختی"><h4 class="text-brand">${ssrInterpolate(product["col"].toLocaleString("fa-IR"))}</h4></td></tr>`);
        });
        _push(`<!--]--></tbody>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</table></div></div></div><div class="col-lg-5"><div class="border p-40 cart-totals ml-30 mb-50"><div class="table-responsive"><table class="table no-border"><tbody><tr><td class="cart_total_label"><h6 class="text-muted">تعداد</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.count.toLocaleString("fa-IR"))}</h5></td></tr><tr><td class="cart_total_label"><h6 class="text-muted">جمع</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.total.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr><td scope="col" colspan="2"><div class="divider-2 mt-10 mb-10"></div></td></tr><tr><td class="cart_total_label"><h6 class="text-muted">مالیات</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.tax.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr></tr><tr><td class="cart_total_label"><h6 class="text-muted">جمع کل</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.col.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr><td class="cart_total_label"><h6 class="text-muted">قابل پرداخت</h6></td><td class="cart_total_amount"><h5 class="text-brand text-end">${ssrInterpolate(props.cart.payment.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr></tr><tr><td class="cart_total_label"><h6 class="text-muted">مانده</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.balance.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr></tr></tbody></table></div></div><div class="payment ml-30"><h4 class="mb-30">انتخاب روش پرداخت</h4><div class="payment_option"><div class="custome-radio"><input class="form-check-input"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "wallet")) ? " checked" : ""} type="radio" name="payment_option" id="exampleRadios3" value="wallet"><label class="form-check-label" for="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">کیف پول</label></div><div class="custome-radio"><input class="form-check-input"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "behpardakht")) ? " checked" : ""} type="radio" name="payment_option" id="exampleRadios4" value="behpardakht"><label class="form-check-label" for="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">درگاه به پرداخت ملت</label></div><div class="custome-radio"><input class="form-check-input"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "sepehr")) ? " checked" : ""} type="radio" name="payment_option" id="exampleRadios5" value="sepehr"><label class="form-check-label" for="exampleRadios5" data-bs-toggle="collapse" data-target="#paypal" aria-controls="paypal">درگاه سپهر صادرات</label></div><div class="custome-radio"><input class="form-check-input"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "saman")) ? " checked" : ""} type="radio" name="payment_option" id="exampleRadios6" value="saman"><label class="form-check-label" for="exampleRadios6" data-bs-toggle="collapse" data-target="#paypal" aria-controls="paypal">درگاه سپ سامان</label></div></div>`);
      if (unref(form).dargah == "wallet" || unref(form).dargah == null) {
        _push(`<button class="btn btn-fill-out btn-block mt-30">`);
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
        _push(`<form${ssrRenderAttr("action", _ctx.route("order.store"))} method="POST"><input type="hidden" name="_token"${ssrRenderAttr("value", __props.token)}><input type="hidden" name="wallet" value="behpardakht"><input type="hidden" name="cartCount"${ssrRenderAttr("value", props.cart.count)}><input type="hidden" name="cartPrice"${ssrRenderAttr("value", props.cart.price)}><input type="hidden" name="cartTotal"${ssrRenderAttr("value", props.cart.total)}><button type="submit" class="btn btn-fill-out btn-block mt-30">پرداخت</button></form>`);
      } else if (unref(form).dargah == "sepehr") {
        _push(`<form${ssrRenderAttr("action", _ctx.route("order.store"))} method="POST"><input type="hidden" name="_token"${ssrRenderAttr("value", __props.token)}><input type="hidden" name="wallet" value="sepehr"><input type="hidden" name="cartCount"${ssrRenderAttr("value", props.cart.count)}><input type="hidden" name="cartPrice"${ssrRenderAttr("value", props.cart.price)}><input type="hidden" name="cartTotal"${ssrRenderAttr("value", props.cart.total)}><button type="submit" class="btn btn-fill-out btn-block mt-30">پرداخت</button></form>`);
      } else if (unref(form).dargah == "saman") {
        _push(`<form${ssrRenderAttr("action", _ctx.route("order.store"))} method="POST"><input type="hidden" name="_token"${ssrRenderAttr("value", __props.token)}><input type="hidden" name="wallet" value="saman"><input type="hidden" name="cartCount"${ssrRenderAttr("value", props.cart.count)}><input type="hidden" name="cartPrice"${ssrRenderAttr("value", props.cart.price)}><input type="hidden" name="cartTotal"${ssrRenderAttr("value", props.cart.total)}><button type="submit" class="btn btn-fill-out btn-block mt-30">پرداخت</button></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></main>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        companies: props.companies,
        namads: props.namads,
        socials: props.socials,
        time: props.time,
        menus: props.menus,
        path: props.path
      }, null, _parent));
      _push(`</body>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/shop-checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
