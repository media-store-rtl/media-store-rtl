import { computed, ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$3 from "./footer-BmA7fAd4.js";
import "sweetalert2";
import { _ as _sfc_main$2 } from "./Editor-CocwfA7J.js";
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
  __name: "support-create",
  __ssrInlineRender: true,
  props: {
    menus: Object,
    orders: Object,
    users: Object,
    notifications: Object,
    wallet: Number,
    companies: Object,
    descriptions: Object,
    tarahis: Object,
    path: String,
    alert: Object,
    cart: Object,
    companies2: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      menu: null,
      recepiant: null,
      subject: null,
      text: null,
      product: null,
      tarahi: null,
      file: null,
      destination: null
    });
    const menus = ref([]);
    if (props.menus && props.menus.length > 0) {
      props.menus.forEach((element) => {
        if (element.sections.length > 0 && element.routes.length > 0) {
          element.routes.forEach((route) => {
            if (route.name == props.path) {
              element.sections.forEach((section) => {
                if (section.name == "supports") {
                  menus.value.push(element);
                }
              });
            }
          });
        }
      });
    }
    const menu = ref([]);
    const descriptions = ref([]);
    ref([]);
    const subs = ref();
    const step = ref("step");
    const orders = ref([]);
    if (props.orders) {
      props.orders.forEach((order) => {
        order.sub_order.forEach((product) => {
          if (product.link && product.link.link) {
            orders.value.push(product.orderable);
          }
        });
      });
    }
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
      _push(`<td class="me-auto"></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="card mb-4"><header class="card-header"><h4>اطلاعات تیکت</h4></header>`);
      if (step.value == "step2") {
        _push(`<div class="card-body"><form><div class="mb-4"><div class="d-flex"><div class="col-sm-4" id="recepiant"><label class="form-label">انتخاب بخش<span class="text-danger me-1">*</span></label><select name="recepiant" class="form-select" required aria-label="select example">`);
        if (menus.value.length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(menus.value, (menu2, index) => {
            _push(`<option${ssrRenderAttr("value", menu2)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).recepiant) ? ssrLooseContain(unref(form).recepiant, menu2) : ssrLooseEqual(unref(form).recepiant, menu2)) ? " selected" : ""}>${ssrInterpolate(menu2.name)}</option>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).recepiant) ? ssrLooseContain(unref(form).recepiant, null) : ssrLooseEqual(unref(form).recepiant, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
        }
        _push(`</select></div>`);
        if (menu.value.length > 0) {
          _push(`<div class="col-sm-4 me-1" id="subject"><label class="form-label">موضوع<span class="text-danger me-1">*</span></label><select name="subject" class="form-select" required aria-label="select example">`);
          if (menu.value.length > 0) {
            _push(`<!--[-->`);
            ssrRenderList(menu.value, (section, index) => {
              _push(`<option${ssrRenderAttr("value", section)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, section) : ssrLooseEqual(unref(form).subject, section)) ? " selected" : ""}>${ssrInterpolate(section.name)}</option>`);
            });
            _push(`<!--]-->`);
          } else {
            _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, null) : ssrLooseEqual(unref(form).subject, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
          }
          _push(`</select></div>`);
        } else {
          _push(`<!---->`);
        }
        if (subs.value == true) {
          _push(`<div class="col-sm-4 me-1" id="product"><label class="form-label">محصول / خدمات<span class="text-danger me-1">*</span></label><select name="product" class="form-select" aria-label="select example"><!--[-->`);
          ssrRenderList(orders.value, (order, index) => {
            _push(`<option${ssrRenderAttr("value", order)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).product) ? ssrLooseContain(unref(form).product, order) : ssrLooseEqual(unref(form).product, order)) ? " selected" : ""}>`);
            if (order.title) {
              _push(`<!--[-->${ssrInterpolate(order.title)}<!--]-->`);
            } else {
              _push(`<!---->`);
            }
            if (order.name) {
              _push(`<!--[-->${ssrInterpolate(order.name)}<!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`</option>`);
          });
          _push(`<!--]-->`);
          if (orders.value == "") {
            _push(`<option disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).product) ? ssrLooseContain(unref(form).product, null) : ssrLooseEqual(unref(form).product, null)) ? " selected" : ""}>گزینه ای یافت نشد.</option>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</select></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step2") {
        _push(`<div class="card-footer"><div class="accordion" id="accordionExample"><!--[-->`);
        ssrRenderList(descriptions.value, (description, index) => {
          _push(`<div class="accordion-item"><h2 class="accordion-header"${ssrRenderAttr("id", "heading" + index)}><button class="${ssrRenderClass([index > 0 ? "collapsed" : "", "accordion-button"])}" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", "#collapse" + index)}${ssrRenderAttr("aria-expanded", index > 0 ? false : true)}${ssrRenderAttr("aria-controls", "collapse" + index)}>${description.subject ?? ""}</button></h2><div${ssrRenderAttr("id", "collapse" + index)} class="${ssrRenderClass([index > 0 ? "collapse" : "collapse show", "accordion-collapse"])}"${ssrRenderAttr("aria-labelledby", "heading" + index)} data-bs-parent="#accordionExample"><div class="accordion-body">${description.text ?? ""}</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step" || subs.value == true && unref(form).product || subs.value == false) {
        _push(`<div class="card-body"><div class="text-center"><strong>آیا مایل به ارسال تیکت هستید؟</strong><div class="col"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>بله</button>`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("dashboard.index"),
          class: "btn btn-secondary btn-sm me-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`انصراف`);
            } else {
              return [
                createTextVNode("انصراف")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<div class="card-body mb-4" id="text"><label class="form-label">شرح<span class="text-danger me-1">*</span></label>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          modelValue: unref(form).text,
          "onUpdate:modelValue": ($event) => unref(form).text = $event,
          placeholder: "اینجا تایپ کنید"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<div class="card-body"><label class="form-label"> آپلودفایل<span class="text-danger me-1"></span></label><div class="input-upload"><input name="file" class="form-control" type="file" id="file">`);
        if (unref(form).progress) {
          _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (step.value == "step3") {
        _push(`<div class="card-body"><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Support/support-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
