import { computed, ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import DatePicker from "vue3-persian-datetime-picker";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import { B as Bar } from "./BarChart-DSG4uZaY.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
import "sweetalert2";
import "vue-chartjs";
import "chart.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "order-index",
  __ssrInlineRender: true,
  props: {
    orders: Object,
    users: Object,
    wallet: Number,
    notifications: Object,
    ids: Object,
    statuses: Object,
    prices: Object,
    companies: Object,
    descriptions: Object,
    farvardin: Object,
    ordibehesht: Object,
    khordad: Object,
    tir: Object,
    mordad: Object,
    shahriver: Object,
    mehr: Object,
    aban: Object,
    azar: Object,
    dey: Object,
    bahman: Object,
    esfand: Object,
    order_counts: Object,
    product_counts: Number,
    order_product: Object,
    order_tarahi: Object,
    cart: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const order_farvardin = ref([]);
    var a_farvardin = [];
    var b_farvardin = [];
    props.farvardin.data.forEach((element) => {
      order_farvardin.value = element + +order_farvardin.value;
      a_farvardin.push(element.orderable_id);
      b_farvardin.push(element.user.id);
    });
    const products_farvardin = a_farvardin.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_farvardin = b_farvardin.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_ordibehesht = ref([]);
    var a_ordibehesht = [];
    var b_ordibehesht = [];
    props.ordibehesht.data.forEach((element) => {
      order_ordibehesht.value = element + +order_ordibehesht.value;
      a_ordibehesht.push(element.orderable_id);
      b_ordibehesht.push(element.user.id);
    });
    const products_ordibehesht = a_ordibehesht.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_ordibehesht = b_ordibehesht.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_khordad = ref([]);
    var a_khordad = [];
    var b_khordad = [];
    props.khordad.data.forEach((element) => {
      order_khordad.value = element + +order_khordad.value;
      a_khordad.push(element.orderable_id);
      b_khordad.push(element.user.id);
    });
    const products_khordad = a_khordad.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_khordad = b_khordad.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_tir = ref([]);
    var a_tir = [];
    var b_tir = [];
    props.tir.data.forEach((element) => {
      order_tir.value = element + +order_tir.value;
      a_tir.push(element.orderable_id);
      b_tir.push(element.user.id);
    });
    const products_tir = a_tir.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_tir = b_tir.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_mordad = ref([]);
    var a_mordad = [];
    var b_mordad = [];
    props.mordad.data.forEach((element) => {
      order_mordad.value = element + +order_mordad.value;
      a_mordad.push(element.orderable_id);
      b_mordad.push(element.user.id);
    });
    const products_mordad = a_mordad.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_mordad = b_mordad.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_shahrivar = ref([]);
    var a_shahrivar = [];
    var b_shahrivar = [];
    props.shahriver.data.forEach((element) => {
      order_shahrivar.value = element + +order_shahrivar.value;
      a_shahrivar.push(element.orderable_id);
      b_shahrivar.push(element.user.id);
    });
    const products_shahrivar = a_shahrivar.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_shahrivar = b_shahrivar.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_mehr = ref([]);
    var a_mehr = [];
    var b_mehr = [];
    props.mehr.data.forEach((element) => {
      order_mehr.value = element + +order_mehr.value;
      a_mehr.push(element.orderable_id);
      b_mehr.push(element.user.id);
    });
    const products_mehr = a_mehr.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_mehr = b_mehr.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_aban = ref([]);
    var a_aban = [];
    var b_aban = [];
    props.aban.data.forEach((element) => {
      order_aban.value = element + +order_aban.value;
      a_aban.push(element.orderable_id);
      b_aban.push(element.user.id);
    });
    const products_aban = a_aban.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_aban = b_aban.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_azar = ref([]);
    var a_azar = [];
    var b_azar = [];
    props.azar.data.forEach((element) => {
      order_azar.value = element + +order_azar.value;
      a_azar.push(element.orderable_id);
      b_azar.push(element.user.id);
    });
    const products_azar = a_azar.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_azar = b_azar.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_dey = ref([]);
    var a_dey = [];
    var b_dey = [];
    props.dey.data.forEach((element) => {
      order_dey.value = element + +order_dey.value;
      a_dey.push(element.orderable_id);
      b_dey.push(element.user.id);
    });
    const products_dey = a_dey.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_dey = b_dey.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_bahman = ref([]);
    var a_bahman = [];
    var b_bahman = [];
    props.bahman.data.forEach((element) => {
      order_bahman.value = element + +order_bahman.value;
      a_bahman.push(element.orderable_id);
      b_bahman.push(element.user.id);
    });
    const products_bahman = a_bahman.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_bahman = b_bahman.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const order_esfand = ref([]);
    var a_esfand = [];
    var b_esfand = [];
    props.esfand.data.forEach((element) => {
      order_esfand.value = element + +order_esfand.value;
      a_esfand.push(element.orderable_id);
      b_esfand.push(element.user.id);
    });
    const products_esfand = a_esfand.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const users_esfand = b_esfand.filter((value, index, array) => {
      return array.indexOf(value) == index;
    });
    const BarChart = {
      data: {
        labels: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند"
        ],
        datasets: [
          {
            label: "فروش",
            tension: 0.3,
            fill: true,
            backgroundColor: "rgba(44, 120, 220, 0.2)",
            borderColor: "rgba(44, 120, 220)",
            data: [
              props.farvardin.data.length,
              props.ordibehesht.data.length,
              props.khordad.data.length,
              props.tir.data.length,
              props.mordad.data.length,
              props.shahriver.data.length,
              props.mehr.data.length,
              props.aban.data.length,
              props.azar.data.length,
              props.dey.data.length,
              props.bahman.data.length,
              props.esfand.data.length
            ]
          },
          {
            label: "فروشنده",
            tension: 0.3,
            fill: true,
            backgroundColor: "rgba(4, 209, 130, 0.2)",
            borderColor: "rgb(4, 209, 130)",
            data: [
              users_farvardin.length,
              users_ordibehesht.length,
              users_khordad.length,
              users_tir.length,
              users_mordad.length,
              users_shahrivar.length,
              users_mehr.length,
              users_aban.length,
              users_azar.length,
              users_dey.length,
              users_bahman.length,
              users_esfand.length
            ]
          },
          {
            label: "محصول",
            tension: 0.3,
            fill: true,
            backgroundColor: "rgba(380, 200, 230, 0.2)",
            borderColor: "rgb(380, 200, 230)",
            data: [
              products_farvardin.length,
              products_ordibehesht.length,
              products_khordad.length,
              products_tir.length,
              products_mordad.length,
              products_shahrivar.length,
              products_mehr.length,
              products_aban.length,
              products_azar.length,
              products_dey.length,
              products_bahman.length,
              products_esfand.length
            ]
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true
            }
          }
        }
      }
    };
    const form = useForm({
      date: null,
      date2: null
    });
    let order_count = 0;
    props.order_counts.forEach((element) => {
      order_count += Number(element);
    });
    let order_product = 0;
    props.order_product.forEach((element) => {
      order_product += Number(element.comison);
    });
    let order_tarahi = 0;
    props.order_tarahi.forEach((element) => {
      order_tarahi += Number(
        element.comison > 0 ? element.comison : element.total
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        cart: props.cart,
        wallet: props.wallet,
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
      if (unref(order_count) > 0) {
        _push(`<a class="btn btn-sm btn-primary"${ssrRenderAttr("href", _ctx.route("orderModir.create"))}>فایل اکسل</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row"><div class="col-lg-3"><div class="card card-body mb-4"><article class="icontext"><span class="icon icon-sm rounded-circle bg-primary-light"><i class="text-primary material-icons md-monetization_on"></i></span><div class="text"><h6 class="mb-1 card-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">درآمد کل</span></span></h6>`);
      if (unref(order_count) > 1) {
        _push(`<span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(unref(order_count).toLocaleString("fa-IR"))}</span></span></span>`);
      } else {
        _push(`<span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(0 .toLocaleString("fa-IR"))}</span></span></span>`);
      }
      _push(`<span class="text-sm"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ریال</span></span></span></div></article></div></div><div class="col-lg-3"><div class="card card-body mb-4"><article class="icontext"><span class="icon icon-sm rounded-circle bg-success-light"><i class="text-success material-icons md-local_shipping"></i></span><div class="text"><h6 class="mb-1 card-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">در آمد خدمات</span></span></h6>`);
      if (props.order_tarahi.length > 0) {
        _push(`<span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(unref(order_tarahi).toLocaleString("fa-IR"))}</span></span></span>`);
      } else {
        _push(`<span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(0 .toLocaleString("fa-IR"))}</span></span></span>`);
      }
      _push(`<span class="text-sm"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ریال</span></span></span></div></article></div></div><div class="col-lg-3"><div class="card card-body mb-4"><article class="icontext"><span class="icon icon-sm rounded-circle bg-info-light"><i class="text-info material-icons md-shopping_basket"></i></span><div class="text"><h6 class="mb-1 card-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">درآمد محصولات</span></span></h6>`);
      if (props.order_product.length > 0) {
        _push(`<span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(unref(order_product).toLocaleString("fa-IR"))}</span></span></span>`);
      } else {
        _push(`<span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(0 .toLocaleString("fa-IR"))}</span></span></span>`);
      }
      _push(`<span class="text-sm"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ریال</span></span></span></div></article></div></div><div class="col-lg-3"><div class="card card-body mb-4"><article class="icontext"><span class="icon icon-sm rounded-circle bg-warning-light"><i class="text-warning material-icons md-qr_code"></i></span><div class="text"><h6 class="mb-1 card-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">محصولات</span></span></h6>`);
      if (props.product_counts > 0) {
        _push(`<span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(props.product_counts.toLocaleString("fa-IR"))}</span></span></span>`);
      } else {
        _push(`<span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(0 .toLocaleString("fa-IR"))}</span></span></span>`);
      }
      _push(`<span class="text-sm"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">عدد</span></span></span></div></article></div></div></div><div class="row"><div class="col-xl-12 col-lg-12"><div class="card mb-4">`);
      if (unref(order_count) > 0) {
        _push(`<article class="card-body"><div class="d-flex"><h5 class="card-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">آمار فروش</span></span></h5><div class="d-flex me-auto"><div class="ms-1">`);
        _push(ssrRenderComponent(unref(DatePicker), {
          modelValue: unref(form).date,
          "onUpdate:modelValue": ($event) => unref(form).date = $event,
          type: "year",
          format: "YYYY",
          "display-format": "jYYYY",
          color: "#1ABC9C"
        }, null, _parent));
        _push(`</div><div class="me-1">`);
        _push(ssrRenderComponent(unref(DatePicker), {
          modelValue: unref(form).date2,
          "onUpdate:modelValue": ($event) => unref(form).date2 = $event,
          type: "year",
          format: "YYYY",
          "display-format": "jYYYY",
          color: "#1ABC9C"
        }, null, _parent));
        _push(`</div><button class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-primary btn-sm rounded font-sm me-1"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>فیلتر </button></div></div>`);
        _push(ssrRenderComponent(Bar, {
          data: BarChart.data,
          options: BarChart.options,
          id: "myChart",
          height: "331",
          width: "827",
          style: { "display": "block", "box-sizing": "border-box", "height": "331px", "width": "827.8px" }
        }, null, _parent));
        _push(`</article>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      if (props.orders.total > 0) {
        _push(`<div class="card mb-4"><header class="card-header"><div class="row gx-3"><div class="col-lg-4 col-md-6 me-auto"><input type="text" placeholder="Search..." class="form-control"></div><div class="col-lg-2 col-6 col-md-3"><select class="form-select"><option>Status</option><option>Active</option><option>Disabled</option><option>Show all</option></select></div><div class="col-lg-2 col-6 col-md-3"><select class="form-select"><option>Show 20</option><option>Show 30</option><option>Show 40</option></select></div></div></header><div class="card-body">`);
        if (props.orders.total > 0) {
          _push(`<div class="table table-responsive"><div class="table table-hover"><thead><tr class="col"><th scope="col">شناسه خرید</th><th scope="col"> خریدار</th><th scope="col">قیمت</th><th scope="col">تعداد</th><th scope="col">تخفیف</th><th scope="col">بن تخفیف</th><th scope="col">جمع</th><th scope="col">وضعیت پرداخت</th><th scope="col">تاریخ</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.orders.data, (order, index) => {
            _push(`<tr><td>${ssrInterpolate(Number(order.id).toLocaleString("fa-IR"))}</td>`);
            if (order.user) {
              _push(`<td>${ssrInterpolate(order.user.user_name)}</td>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<td>${ssrInterpolate(Number(order.price).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(Number(order.count).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(Number(order.discount).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(Number(order.coupon).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(Number(order.total).toLocaleString("fa-IR"))}</td>`);
            if (order.t_id > 0) {
              _push(`<td>${ssrInterpolate(order.t_id)}</td>`);
            } else {
              _push(`<td>کیف پول</td>`);
            }
            _push(`<td>${ssrInterpolate(unref(moment)(order.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
            _push(ssrRenderComponent(unref(link_default), {
              class: "btn btn-sm btn-primary",
              href: _ctx.route("orderModir.show", order.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` نمایش`);
                } else {
                  return [
                    createTextVNode(" نمایش")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</td></tr>`);
          });
          _push(`<!--]--></tbody></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (props.orders.total > 9) {
          _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
          ssrRenderList(props.orders.links, (link) => {
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Modir/Order/order-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
