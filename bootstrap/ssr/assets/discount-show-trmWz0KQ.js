import { computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$4 from "./footer-BmA7fAd4.js";
import { a as usePage, u as useForm } from "../ssr.js";
import DatePicker from "vue3-persian-datetime-picker";
import { _ as _sfc_main$2 } from "./Button-CWpf-Vei.js";
import { _ as _sfc_main$3 } from "./Input-fb2thAme.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "sweetalert2";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "discount-show",
  __ssrInlineRender: true,
  props: {
    users: Object,
    discounts: Object,
    ids: Object,
    statuses: Object,
    prices: Object,
    notifications: Object,
    time: String,
    companies: Object,
    descriptions: Object
  },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    const form = useForm({
      expired: props.discounts.expired,
      percent: props.discounts.percent,
      id: props.discounts.id
    });
    const submit = () => {
      if (form.expired == null && form.percent == null && form.id == null) {
        errors.value.errors = "لطفا یکی از موارد را انتخاب نمایید.";
      } else {
        form.put(route("discountVisitor.update", form.id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
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
      _push(`<div class="screen-overlay"></div><main class="main-wrap rtl"><section class="content-main"><div class="content-header"><div>`);
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
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        onClick: submit,
        class: [{ "opacity-25": unref(form).processing }, "btn btn-md rounded font-sm hover-up"],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ثبت`);
          } else {
            return [
              createTextVNode("ثبت")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (props.discounts) {
        _push(`<div class="mb-4"><div class="card-body bg-white"><div class="table-responsive"><table class="table table-hover"><thead><tr><th scope="col">شناسه</th><th scope="col">منقضی</th><th scope="col">درصد</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th></tr></thead><tbody><tr><td>${ssrInterpolate(props.discounts.id.toLocaleString("fa-IR"))}</td><td>`);
        _push(ssrRenderComponent(unref(DatePicker), {
          modelValue: unref(form).expired,
          "onUpdate:modelValue": ($event) => unref(form).expired = $event,
          format: "YYYY-MM-DD HH:mm:ss",
          "display-format": "dddd jDD jMMMM jYYYY mm:ss",
          color: "#1ABC9C",
          type: "datetime"
        }, null, _parent));
        _push(`</td><td>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          type: "text",
          class: "form-control",
          modelValue: unref(form).percent,
          "onUpdate:modelValue": ($event) => unref(form).percent = $event
        }, null, _parent));
        _push(`</td><td>${ssrInterpolate(unref(moment)(props.discounts.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
        if (props.discounts.expired > props.time) {
          _push(`<span class="badge badge-pill badge-soft-success"> فعال</span>`);
        } else {
          _push(`<span class="badge badge-pill badge-soft-danger">منقضی</span>`);
        }
        _push(`</td></tr></tbody></table></div></div></div>`);
      } else {
        _push(`<div><p>گزینه ای یافت نشد.</p></div>`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        companies: props.companies
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Seller/Discount/discount-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
