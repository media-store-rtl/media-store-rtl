import { computed, unref, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { l as link_default } from "../ssr.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "factor-show2",
  __ssrInlineRender: true,
  props: { users: Object, orders: Object, notifications: Object, companies: Object },
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    computed(() => Object.keys(errors.value).length > 0);
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><link${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/assets/css/main.css")} rel="stylesheet" type="text/css"></head><div class="invoice invoice-content invoice-6"><div class="back-top-home hover-up mt-30 ml-30">`);
      _push(ssrRenderComponent(unref(link_default), {
        class: "hover-up",
        href: _ctx.route("dashboard.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fi-rs-home mr-5"${_scopeId}></i> داشبورت`);
          } else {
            return [
              createVNode("i", { class: "fi-rs-home mr-5" }),
              createTextVNode(" داشبورت")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="container"><div class="row"><div class="col-lg-12"><div class="invoice-inner"><div class="invoice-info" id="invoice_wrapper"><div class="invoice-header"><div class="invoice-icon"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-invoice.svg")} class="img-fluid" alt=""></div><div class="row align-items-center"><div class="col-md-6"><div class="logo">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("index"),
        class: "mr-20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.companies && props.companies.image) {
              _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} alt="logo" style="${ssrRenderStyle({ "height": "5rem" })}"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.companies && props.companies.image ? (openBlock(), createBlock("img", {
                key: 0,
                src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                alt: "logo",
                style: { "height": "5rem" }
              }, null, 8, ["src"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-md-6 text-end"><h2 class="mb-0">صورت حساب</h2></div></div><div class="row align-items-center"><div class="col-md-6">`);
      if (props.companies) {
        _push(`<div class="text">${ssrInterpolate(props.companies.name_show)}<br><abbr title="Phone">تلفن:</abbr> ${ssrInterpolate(props.companies.phone)}<br><abbr title="Phone">پست الکترونیک:</abbr> ${ssrInterpolate(props.companies.email)}<br></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-md-6 text-end">`);
      if (props.orders.user.profile.gender == "آقا") {
        _push(`<strong>${ssrInterpolate(props.orders.user.profile.gender)}</strong>`);
      } else if (props.orders.user.profile.gender == "خانم") {
        _push(`<strong>${ssrInterpolate(props.orders.user.profile.gender)}</strong>`);
      } else {
        _push(`<!---->`);
      }
      if (props.orders) {
        _push(`<strong class="text-brand">${ssrInterpolate(props.orders.user.name_show)}</strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br><abbr title="Email">پست الکترونیک: </abbr><a href="#" class="__cf_email__" data-cfemail="442a222b043321263e6a272b296a3428">${ssrInterpolate(props.orders.user.email)}</a><br>`);
      if (props.orders.user && props.orders.user.tel) {
        _push(`<abbr title="Email">تلفن : </abbr>`);
      } else {
        _push(`<!---->`);
      }
      if (props.orders.user && props.orders.user.tel) {
        _push(`<a href="#" class="__cf_email__" data-cfemail="442a222b043321263e6a272b296a3428">${ssrInterpolate(props.orders.user.tel)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br></div></div><div class="row mt-20"><div class="col-12"><div class="hr mb-10"></div></div><div class="col-lg-4">`);
      if (props.orders) {
        _push(`<strong class="text-brand"> شماره فاکتور:</strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(props.orders.id)}</div><div class="col-lg-4">`);
      if (props.orders) {
        _push(`<strong class="text-brand"> تاریخ صدور:</strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(moment)(props.orders.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</div><div class="col-lg-4"><strong class="text-brand"> روش پرداخت:</strong> کیف پول </div><div class="col-12"><div class="hr mt-10"></div></div></div></div><div class="invoice-center"><div class="table-responsive"><table class="table table-striped invoice-table"><thead class="bg-active"><tr><th>محصول / خدمات</th><th class="text-center">فروشنده / طراح</th><th class="text-center">قیمت واحد</th><th class="text-center">تعداد</th><th class="text-center">جمع</th><th class="text-center">تخفیف</th><th class="text-center">مالیات</th><th class="text-right">کل</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(props.orders.sub_order, (item, index) => {
        _push(`<tr><td>`);
        if (item.orderable_type == "App\\Models\\Product") {
          _push(`<span>${ssrInterpolate(item.orderable.name)}</span>`);
        } else if (item.orderable_type == "App\\Models\\Tarahi") {
          _push(`<span>${ssrInterpolate(item.orderable.title)}</span>`);
        } else if (item.orderable_type == "App\\Models\\WebDesign") {
          _push(`<span>${ssrInterpolate(item.orderable.name)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td>`);
        if (item.orderable_type == "App\\Models\\Product") {
          _push(`<td class="text-center">${ssrInterpolate(item.orderable.user.name_show)}</td>`);
        } else if (item.orderable_type == "App\\Models\\Tarahi") {
          _push(`<td class="text-center">${ssrInterpolate(item.orderable.register_designer.user.name_show)}</td>`);
        } else {
          _push(`<!---->`);
        }
        if (item.orderable_type == "App\\Models\\WebDesign") {
          _push(`<td class="text-center">${ssrInterpolate(item.orderable.user.name_show)}</td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<td class="text-center">${ssrInterpolate(Number(item.price).toLocaleString("fa-IR"))} ریال</td><td class="text-center">${ssrInterpolate(Number(item.count).toLocaleString("fa-IR"))} عدد</td><td class="text-center">${ssrInterpolate(Number(item.total).toLocaleString("fa-IR"))} ریال</td><td class="text-center">${ssrInterpolate(Number(item.discount).toLocaleString("fa-IR"))} ریال</td><td class="text-center">`);
        if (item.comison == 0) {
          _push(`<span>${ssrInterpolate(Number(item.tax).toLocaleString("fa-IR"))} ریال</span>`);
        } else {
          _push(`<span>${ssrInterpolate(Number(0).toLocaleString("fa-IR"))} ریال</span>`);
        }
        _push(`</td><td class="text-right">`);
        if (item.comison == 0) {
          _push(`<span>${ssrInterpolate(Number(item.col).toLocaleString("fa-IR"))} ریال</span>`);
        } else {
          _push(`<!---->`);
        }
        if (item.comison > 0) {
          _push(`<span>${ssrInterpolate((Number(item.col) + Number(item.comison) + Number(item.tax)).toLocaleString("fa-IR"))} ریال</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--><tr><td colspan="7" class="text-end f-w-600">جمع</td><td class="text-right">${ssrInterpolate(Number(props.orders.price).toLocaleString("fa-IR"))} ریال</td></tr><tr><td colspan="7" class="text-end f-w-600">تخفیف</td><td class="text-right">${ssrInterpolate(Number(props.orders.discount).toLocaleString("fa-IR"))} ریال</td></tr><tr><td colspan="7" class="text-end f-w-600">بن تخفیف</td><td class="text-right">${ssrInterpolate(Number(props.orders.coupon).toLocaleString("fa-IR"))} ریال</td></tr><tr><td colspan="7" class="text-end f-w-600">جمع کل</td><td class="text-right f-w-600">${ssrInterpolate(Number(props.orders.col).toLocaleString("fa-IR"))} ریال</td></tr><tr><td colspan="7" class="text-end f-w-600"> پرداخت شده</td><td class="text-right f-w-600">${ssrInterpolate(Number(props.orders.payment).toLocaleString("fa-IR"))} ریال</td></tr><tr><td colspan="7" class="text-end f-w-600">مانده</td><td class="text-right f-w-600">${ssrInterpolate(Number(props.orders.col - props.orders.payment).toLocaleString("fa-IR"))} ریال</td></tr></tbody></table></div></div><div class="invoice-bottom pb-80"><div class="row"><div class="col-md-6"><h6 class="mb-15">اطلاعات فاکتور</h6><p class="font-sm"><strong>تاریخ چاپ:</strong> ${ssrInterpolate(unref(moment)(/* @__PURE__ */ new Date()).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}<br></p></div><div class="col-md-6 text-end"><h6 class="mb-15">مبلغ قابل پرداخت</h6><h3 class="mt-0 mb-0 text-brand">${ssrInterpolate(Number(props.orders.col - props.orders.payment).toLocaleString("fa-IR"))} ریال</h3>`);
      if (props.orders.col == 0) {
        _push(`<p class="mb-0 text-muted">بدون مالیات</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="row text-center"><div class="col-12"><div class="hr mt-30 mb-30"></div><p class="mb-0 text-muted"><strong>توجه:</strong>این فاکتور بصورت اینترنتی صادر شده است.</p></div></div></div></div><div class="invoice-btn-section clearfix d-print-none"><a href="javascript:window.print()" class="btn btn-lg btn-custom btn-print hover-up"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-print.svg")} alt=""> چاپ </a><a id="invoice_download_btn" class="btn btn-lg btn-custom btn-download hover-up"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-download.svg")} alt=""> دانلود </a></div></div></div></div></div></div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
        src: _ctx.$page.props.ziggy.url + "/assets/js/invoice/invoice.js"
      }, null), _parent);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
        src: _ctx.$page.props.ziggy.url + "/assets/js/vendor/modernizr-3.6.0.min.js"
      }, null), _parent);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
        src: _ctx.$page.props.ziggy.url + "/assets/js/vendor/jquery-3.6.0.min.js"
      }, null), _parent);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), {
        src: _ctx.$page.props.ziggy.url + "/assets/js/invoice/jspdf.min.js"
      }, null), _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Factor/factor-show2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
