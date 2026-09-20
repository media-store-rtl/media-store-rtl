import { computed, ref, resolveComponent, unref, withCtx, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import DatePicker from "vue3-persian-datetime-picker";
import swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";
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
  __name: "discount-create",
  __ssrInlineRender: true,
  props: {
    users: Object,
    cartPrice: Object,
    cartCount: Object,
    cartDiscount: Object,
    cartCoupon: Object,
    cartTotal: Object,
    notifications: Object,
    results: Object,
    companies: Object,
    descriptions: Object,
    subjects: Object | String,
    menus: Object,
    alert: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const alert = ref(props.alert);
    if (alert.value) {
      if (alert.value.title) {
        swal.fire(
          props.alert.title,
          props.alert.text,
          props.alert.icon
        );
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
          title: props.alert.text,
          icon: props.alert.icon
        });
      }
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
          errors.value.expired ? errors.value.expired + "<br>" : "",
          errors.value.percent_min ? errors.value.percent_min + "<br>" : "",
          errors.value.subject ? errors.value.subject + "<br>" : "",
          errors.value.percent_max ? errors.value.percent_max + "<br>" : "",
          errors.value.results ? errors.value.results + "<br>" : ""
        ],
        icon: "error"
      });
    }
    const form = useForm({
      expired: null,
      percent_min: null,
      percent_max: null,
      results: [],
      subject: props.subjects ? props.subjects : null
    });
    const submitTime = () => {
      Inertia.visit(route("discountVisitor.create"), { only: [errors.value, hasErrors.value, props.alert] });
    };
    const submitStore = () => {
      form.post(route("discountVisitor.store"), {
        onFinish: () => submitTime()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font = resolveComponent("font");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cartPrice: props.cartPrice,
        cartCount: props.cartCount,
        cartDiscount: props.cartDiscount,
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
      _push(`<td class="me-auto">`);
      _push(ssrRenderComponent(unref(link_default), {
        onClick: submitStore,
        class: "btn btn-primary btn-sm rounded font-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(form).processing) {
              _push2(`<span${_scopeId}>پردازش...</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(form).processing) {
              _push2(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"${_scopeId}></span>`);
            } else {
              _push2(`<span${_scopeId}>ایجاد</span>`);
            }
          } else {
            return [
              unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "پردازش...")) : createCommentVNode("", true),
              unref(form).processing ? (openBlock(), createBlock("span", {
                key: 1,
                class: "spinner-border spinner-border-sm",
                role: "status",
                "aria-hidden": "true"
              })) : (openBlock(), createBlock("span", { key: 2 }, "ایجاد"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="row"><div class="col-lg-6"><div class="mt-4 bg-white"><div class="card-header d-flex"><h4>تخفیف</h4><div class="me-auto"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "All") : ssrLooseEqual(unref(form).subject, "All")) ? " selected" : ""}> همه محصولات</option><!--[-->`);
      ssrRenderList(props.menus, (menu, index) => {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(menu.children, (child, index2) => {
          _push(`<option${ssrRenderAttr("value", child.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, child.id) : ssrLooseEqual(unref(form).subject, child.id)) ? " selected" : ""}>${ssrInterpolate(child.name)}</option>`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]--></select></div></div><div class="card-body">`);
      if (props.results.total > 0) {
        _push(`<div class="table-responsive"><article class="itemlist"><table class="table table-hover"><thead><tr class="col"><th scope="col"> انتخاب </th><th scope="col">نام</th><th scope="col">دسته بندی</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(props.results.data, (result, index) => {
          _push(`<tr><td class="text-center"><div class="form-check"><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).results) ? ssrLooseContain(unref(form).results, result.id) : unref(form).results) ? " checked" : ""}${ssrRenderAttr("value", result.id)}></div></td><td><div class="left">`);
          if (result.image) {
            _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + result.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", result.name)}>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="info"><h6 class="mb-0">`);
          _push(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(result.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(result.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_font, { style: { "vertical-align": "inherit" } }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(result.name), 1)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</h6></div></td><td>${ssrInterpolate(result.type.name)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></article></div>`);
      } else {
        _push(`<p>محصولی یافت نشد.</p>`);
      }
      _push(`</div></div></div><div class="col-lg-6"><div class="mt-4 bg-white"><div class="card-header"><h4>تخفیف رندومی</h4></div><div class="card-body"><div class="col-lg-12"><div class="row gx-2"><div class="col-lg-6"><div class="mt-4"><label class="form-label">کمترین درصد<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).percent_min)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">بیشترین درصد<span class="text-danger">*</span></label><input${ssrRenderAttr("value", unref(form).percent_max)} placeholder="اینجا تایپ کنید" type="text" class="form-control"></div></div><div class="col-lg-6"><div class="mt-4"><label class="form-label">تاریخ انقضا<span class="text-danger">*</span></label>`);
      _push(ssrRenderComponent(unref(DatePicker), {
        modelValue: unref(form).expired,
        "onUpdate:modelValue": ($event) => unref(form).expired = $event,
        format: "YYYY-MM-DD HH:mm:ss",
        "display-format": "dddd jDD jMMMM jYYYY",
        color: "#1ABC9C",
        type: "datetime"
      }, null, _parent));
      _push(`</div></div></div></div></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Seller/Discount/discount-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
