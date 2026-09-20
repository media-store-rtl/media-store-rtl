import { resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import _sfc_main$1 from "./Header2-F5OjGsRQ.js";
import _sfc_main$2 from "./Footer2-vTePDDgz.js";
import { u as useForm, l as link_default } from "../ssr.js";
import "moment-jalaali";
import "./fa-BkogAtM6.js";
import "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "shop-cart",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    alert: Object,
    random_coupon: Object,
    companies: Object,
    path: String,
    cart: Object,
    menus: Object,
    socials: Object,
    time: String,
    menu: Object,
    namads: Object
  },
  setup(__props) {
    const props = __props;
    useForm({
      id: null,
      count: null,
      coupon: null,
      cartPrice: props.cartPrice,
      cartCount: props.cartCount,
      cartDiscount: props.cartDiscount,
      cartTotal: props.cartTotal,
      edit: null,
      type: null,
      model: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<body${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "shop-cart" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        companies: props.companies,
        results: props.results,
        menus: props.menus,
        cart: props.cart,
        menu: props.menu
      }, null, _parent));
      _push(`<main class="main"><div class="page-header breadcrumb-wrap"><div class="container"><div class="breadcrumb"><a href="/" rel="nofollow">صفحه اصلی<i class="fi-rs-home mr-5"></i></a><span></span> خرید <span></span> سبد خرید </div></div></div><div class="container mb-80 mt-50"><div class="row"><div class="col-lg-8 mb-40"><h1 class="heading-2 mb-10">سبد خرید شما</h1>`);
      if (props.cart.count > 0) {
        _push(`<div class="d-flex justify-content-between"><h6 class="text-body">تعداد<span class="text-brand">${ssrInterpolate(props.cartCount)}</span> محصول در سبد خرید شما وجود دارد</h6><h6 class="text-body"><a href="#" class="text-muted"><i class="fi-rs-trash mr-5"></i>حذف سبد</a></h6></div>`);
      } else {
        _push(`<div class="d-flex justify-content-between"><h6 class="text-body">محصولی<span class="text-brand"></span> در سبد خرید شما وجود ندارد</h6></div>`);
      }
      _push(`</div></div><div class="row"><div class="col-lg-8">`);
      if (props.cart.count > 0) {
        _push(`<div class="table-responsive shopping-summery"><table class="table table-wishlist"><thead><tr class="main-heading"><th class="custome-checkbox start pl-30"><input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value=""><label class="form-check-label" for="exampleCheckbox11"></label></th><th scope="col" colspan="2">محصول</th><th scope="col">قیمت واحد</th><th scope="col">تعداد</th><th scope="col">تخفیف</th><th scope="col">مالیات</th><th scope="col">پرداختی</th><th scope="col" class="end">حذف</th></tr></thead>`);
        if (props.cart.count > 0) {
          _push(`<tbody><!--[-->`);
          ssrRenderList(props.cart.products, (product, index) => {
            _push(`<tr class="pt-30"><td class="custome-checkbox pl-30"><input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value=""><label class="form-check-label" for="exampleCheckbox1"></label></td><td class="image product-thumbnail pt-40">`);
            if (product["product"].image) {
              _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + product["product"].image.url)} alt="#">`);
            } else {
              _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} alt="#">`);
            }
            _push(`</td><td class="product-des product-name"><h6 class="mb-5">`);
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
            _push(`</h6></td><td class="price" data-title="قیمت واحد">`);
            if (product["product"].price) {
              _push(`<h5 class="text-body">${ssrInterpolate(Number(product["product"].price).toLocaleString("fa-IR"))}</h5>`);
            } else {
              _push(`<h5 class="text-body">${ssrInterpolate((product["total"] / product["count"]).toLocaleString("fa-IR"))}</h5>`);
            }
            _push(`</td><td class="price" data-title="تعداد"><h5 class="text-body">${ssrInterpolate(product["count"].toLocaleString("fa-IR"))}</h5></td><td class="price" data-title="تخفیف"><h5 class="text-body">${ssrInterpolate(product["discount"].toLocaleString("fa-IR"))}</h5></td><td class="price" data-title="مالیات"><h5 class="text-body">${ssrInterpolate(product["tax"].toLocaleString("fa-IR"))}</h5></td><td class="price" data-title="پرداختی"><h5 class="text-brand">${ssrInterpolate(product["col"].toLocaleString("fa-IR"))}</h5></td><td class="action text-center" data-title="حذف"><a href="#" class="text-body"><i class="fi-rs-trash"></i></a></td></tr>`);
          });
          _push(`<!--]--></tbody>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="divider-2 mb-30"></div></div>`);
      if (props.cart.count > 0) {
        _push(`<div class="col-lg-4"><div class="border p-md-4 cart-totals ml-30"><div class="table-responsive"><table class="table no-border"><tbody><tr><td class="cart_total_label"><h6 class="text-muted">تعداد</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.count.toLocaleString("fa-IR"))}</h5></td></tr><tr><td class="cart_total_label"><h6 class="text-muted">جمع</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.total.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr><td class="cart_total_label"><h6 class="text-muted">تخفیف</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.discount.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr><td scope="col" colspan="2"><div class="divider-2 mt-10 mb-10"></div></td></tr><tr><td class="cart_total_label"><h6 class="text-muted">مالیات</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.tax.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr></tr><tr><td class="cart_total_label"><h6 class="text-muted">جمع کل</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.col.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr><td scope="col" colspan="2"><div class="divider-2 mt-10 mb-10"></div></td></tr><tr><td class="cart_total_label"><h6 class="text-muted">قابل پرداخت</h6></td><td class="cart_total_amount"><h5 class="text-brand text-end">${ssrInterpolate(props.cart.payment.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr></tr><tr><td class="cart_total_label"><h6 class="text-muted">مانده</h6></td><td class="cart_total_amount"><h5 class="text-heading text-end">${ssrInterpolate(props.cart.balance.toLocaleString("fa-IR"))} ریال </h5></td></tr><tr></tr></tbody></table></div>`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("shop-checkout.index"),
          class: "btn mb-20 w-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`پرداخت<i class="fi-rs-sign-out ml-15"${_scopeId}></i>`);
            } else {
              return [
                createTextVNode("پرداخت"),
                createVNode("i", { class: "fi-rs-sign-out ml-15" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/shop-cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
