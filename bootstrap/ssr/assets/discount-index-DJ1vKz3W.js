import { computed, ref, resolveComponent, unref, withCtx, createTextVNode, createBlock, openBlock, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import DatePicker from "vue3-persian-datetime-picker";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "discount-index",
  __ssrInlineRender: true,
  props: {
    cartPrice: Number,
    cartCount: Number,
    cartDiscount: Number,
    cartCoupon: Number,
    cartTotal: Number,
    alert: Object,
    users: Object,
    orders: Object,
    notifications: Object,
    time: String,
    dark: String,
    companies: Object,
    descriptions: Object,
    asidemini: String,
    path: String,
    discounts: Object,
    menus: Object,
    times: Object | String,
    statuses: Object | String,
    subjects: Object | String
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const validate = (text) => {
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
        title: text,
        icon: "error"
      });
    };
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
          errors.value.menu ? errors.value.menu + "<br>" : "",
          errors.value.recepiant ? errors.value.recepiant + "<br>" : "",
          errors.value.subject ? errors.value.subject + "<br>" : "",
          errors.value.text ? errors.value.text + "<br>" : "",
          errors.value.email ? errors.value.email + "<br>" : "",
          errors.value.name ? errors.value.name + "<br>" : "",
          errors.value.lasst_name ? errors.value.lasst_name + "<br>" : ""
        ],
        icon: "error"
      });
    }
    const form = useForm({
      subject: props.subjects ? props.subjects : null,
      status: props.statuses ? props.statuses : null,
      time: props.times !== "All" ? props.times : null
    });
    const submitTime = () => {
      Inertia.visit(route("discountVisitor.index"), { only: [errors.value, hasErrors.value, props.alert] });
    };
    const submit = () => {
      if (form.subject == null && form.status == null && form.time == null) {
        let text;
        text = "موارد ستاره دار الزامی است.";
        validate(text);
      } else {
        form.get(route("discountVisitor.index"), {
          onFinish: () => submitTime()
        });
      }
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
        _push(`<h2 class="content-title card-title">${props.descriptions.subject ?? ""}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<td class="me-auto">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("discountVisitor.create"),
        class: "btn btn-primary btn-sm rounded font-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ایجاد`);
          } else {
            return [
              createTextVNode("ایجاد")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<p>${props.descriptions.text ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.discounts.total > 0) {
        _push(`<div class="mb-4 bg-white"><header class="card-header"><div class="row align-items-center"><div class="col col-check flex-grow-0"><div class="form-check ms-2"><input class="form-check-input" type="checkbox" value=""></div></div><div class="col-md-3 col-12 ms-auto mb-md-0 mb-3"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, "All") : ssrLooseEqual(unref(form).subject, "All")) ? " selected" : ""}> همه محصولات</option><!--[-->`);
        ssrRenderList(props.menus, (menu, index) => {
          _push(`<option${ssrRenderAttr("value", menu.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).subject) ? ssrLooseContain(unref(form).subject, menu.id) : ssrLooseEqual(unref(form).subject, menu.id)) ? " selected" : ""}>${ssrInterpolate(menu.name)}</option>`);
        });
        _push(`<!--]--></select></div><div class="col-md-2 col-6">`);
        _push(ssrRenderComponent(unref(DatePicker), {
          modelValue: unref(form).time,
          "onUpdate:modelValue": ($event) => unref(form).time = $event,
          format: "YYYY-MM-DD",
          "display-format": "dddd jDD jMMMM jYYYY",
          color: "#1ABC9C",
          type: "date",
          onChange: submit
        }, null, _parent));
        _push(`</div><div class="col-md-2 col-6"><select class="form-select"><option value="All"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "All") : ssrLooseEqual(unref(form).status, "All")) ? " selected" : ""}>همه وضعیت ها</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "3") : ssrLooseEqual(unref(form).status, "3")) ? " selected" : ""}>منقضی</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "4") : ssrLooseEqual(unref(form).status, "4")) ? " selected" : ""}>فعال</option></select></div></div></header><div class="card-body"><div class="table-responsive"><article class="itemlist"><table class="table table-hover"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">محصول/خدمات</th><th scope="col">تاریخ</th><th scope="col">انقضا</th><th scope="col">درصد تخفیف</th><th scope="col">وضعیت</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(props.discounts.data, (discount, index) => {
          _push(`<tr><td>${ssrInterpolate(discount.id.toLocaleString("fa-IR"))}</td>`);
          if (discount.discountable) {
            _push(`<td><div class="left">`);
            if (discount.discountable_type == "App\\Models\\Product") {
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("website_templates.show", discount.discountable.slug),
                class: "img-sm img-thumbnail"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (discount.discountable.image && discount.discountable.image.status == 4) {
                      _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + discount.discountable.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", discount.discountable.name)}${_scopeId}>`);
                    } else {
                      _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", discount.discountable.name)}${_scopeId}>`);
                    }
                  } else {
                    return [
                      discount.discountable.image && discount.discountable.image.status == 4 ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: _ctx.$page.props.ziggy.url + "/storage/" + discount.discountable.image.url,
                        class: "img-sm img-thumbnail",
                        alt: discount.discountable.name
                      }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                        key: 1,
                        src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                        class: "img-sm img-thumbnail",
                        alt: discount.discountable.name
                      }, null, 8, ["src", "alt"]))
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else if (discount.discountable_type == "App\\Models\\Tarahi") {
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("website_design.show", discount.discountable.slug),
                class: "img-sm img-thumbnail"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (discount.discountable.image && discount.discountable.image.status == 4) {
                      _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + discount.discountable.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", discount.discountable.name)}${_scopeId}>`);
                    } else {
                      _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", discount.discountable.name)}${_scopeId}>`);
                    }
                  } else {
                    return [
                      discount.discountable.image && discount.discountable.image.status == 4 ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: _ctx.$page.props.ziggy.url + "/storage/" + discount.discountable.image.url,
                        class: "img-sm img-thumbnail",
                        alt: discount.discountable.name
                      }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                        key: 1,
                        src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                        class: "img-sm img-thumbnail",
                        alt: discount.discountable.name
                      }, null, 8, ["src", "alt"]))
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
            if (discount.discountable_type == "App\\Models\\Product") {
              _push(`<div class="info"><h6 class="mb-0">`);
              _push(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(discount.discountable.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(discount.discountable.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(_component_font, { style: { "vertical-align": "inherit" } }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(discount.discountable.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</h6></div>`);
            } else if (discount.discountable_type == "App\\Models\\Tarahi") {
              _push(`<div class="info"><h6 class="mb-0">`);
              _push(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(discount.discountable.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(discount.discountable.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(_component_font, { style: { "vertical-align": "inherit" } }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(discount.discountable.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</h6></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</td>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<td>${ssrInterpolate(unref(moment)(discount.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>${ssrInterpolate(unref(moment)(discount.expired).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>${ssrInterpolate(discount.percent.toLocaleString("fa-IR"))}</td><td>`);
          if (props.time > discount.expired) {
            _push(`<span class="badge badge-pill badge-soft-danger">منقضی</span>`);
          } else {
            _push(`<span class="badge badge-pill badge-soft-success">فعال</span>`);
          }
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
        if (props.discounts.total > 9) {
          _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-end ltr"><!--[-->`);
          ssrRenderList(props.discounts.links, (link) => {
            _push(`<li class="${ssrRenderClass(["page-item", link.url == null ? "disable" : "", link.active ? "active" : ""])}">`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "page-link",
              href: link.url == null ? "#" : link.url
            }, null, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul></nav></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article></div></div></div>`);
      } else {
        _push(`<p>گزینه ای یافت نشد.</p>`);
      }
      _push(`</section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Seller/Discount/discount-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
