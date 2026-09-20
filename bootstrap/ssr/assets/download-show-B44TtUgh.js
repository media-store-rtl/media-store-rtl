import { computed, ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
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
  __name: "download-show",
  __ssrInlineRender: true,
  props: {
    auth: Object,
    time: String,
    products: Object,
    alert: Object,
    link: Object,
    dark: String,
    wallet: Number,
    id: Object,
    newfilename: Object,
    filename: Object,
    orders: Object,
    users: Object,
    cart: Object,
    request: Object,
    token: String,
    notifications: Object,
    companies: Object,
    descriptions: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({ id: null, link: null, order: null, model: null, contract: null, file: null, order_id: null, web_design_id: null });
    const contract = ref([]);
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
    const submitLink = (id, order_id) => {
      if (form.Link !== null) {
        form.id = id;
        form.order = order_id;
        form.post(route("link.store"));
      } else {
        let text = "موارد ستاره دار الزامی است.";
        validate(text);
      }
    };
    const type = ref();
    const rouzekari = ref(0);
    if (props.orders && props.orders.sub_order) {
      props.orders.sub_order.forEach((element) => {
        if (element.orderable_type == "App\\Models\\WebDesign") {
          type.value = true;
          rouzekari.value += Number(element.orderable.rouzekari);
        }
      });
    }
    if (props.orders && props.orders.sub_order) {
      props.orders.sub_order.forEach((element) => {
        if (element && element.orderable && element.orderable.register_designer) {
          if (element.orderable.register_designer.length > 0) {
            element.orderable.register_designer.forEach((element_register_designer) => {
              contract.value.push(element_register_designer);
            });
          }
        }
      });
    }
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
      _push(`<td class="me-auto"></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form><div class="card"><header class="card-header"><div class="row align-items-center"><div class="col-lg-6 col-md-6 mb-lg-0 mb-15"><br><small class="text-muted">شناسه سفارش: ${ssrInterpolate(props.orders.id)}</small></div><!--[-->`);
      ssrRenderList(contract.value, (contrac, index) => {
        _push(`<div class="col-lg-6 col-md-6 ms-auto text-md-start">`);
        if (type.value == false || rouzekari.value < 2 || contrac && contrac.status == 4) {
          _push(ssrRenderComponent(unref(link_default), {
            class: "btn btn-primary ms-3",
            href: _ctx.route("factor.show", [props.orders.id])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`فاکتور`);
              } else {
                return [
                  createTextVNode("فاکتور")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (type.value == true && rouzekari.value > "1" && contrac == null || contrac && contrac.file && contrac.file.status !== "4" || contrac && contrac.status !== "4") {
          _push(`<button class="btn btn-primary">قرار داد خام</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></header><div class="card-body"><div class="row gx-5"><div class="col-lg-12"><section class="content-body p-xl-4"><div class="table-responsive"><div class="table table-hover"><thead><tr><th scope="col"> خدمات / محصول</th><th scope="col">دامنه</th><th scope="col">عملیات</th></tr></thead>`);
      if (props.orders) {
        _push(`<tbody><!--[-->`);
        ssrRenderList(props.orders.sub_order, (order, index) => {
          _push(`<tr>`);
          if (order.orderable_type == "App\\Models\\WebDesign") {
            _push(`<!--[--><td><div class="left">`);
            if (order.orderable && order.orderable.image && order.orderable.image.status == 4) {
              _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + order.orderable.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", order.orderable.name)}>`);
            } else {
              _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", order.orderable.name)}>`);
            }
            _push(`</div><div class="info"><h6 class="mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">`);
            if (order.orderable_type == "App\\Models\\Product") {
              _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.orderable.name)}</span>`);
            } else if (order.orderable_type == "App\\Models\\Tarahi") {
              _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.orderable.title)}</span>`);
            } else {
              _push(`<!---->`);
            }
            if (order.orderable_type == "App\\Models\\WebDesign") {
              _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.orderable.name)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span></h6></div></td><td>`);
            if (order.orderable.rouzekari > 1) {
              _push(`<div class="col-sm-6"><label class="form-label">فایل <span class="text-danger">*</span></label><!--[-->`);
              ssrRenderList(contract.value, (contrac, index2) => {
                _push(`<div class="input-upload"><div class="mt-2">`);
                if (contrac && contrac.file) {
                  _push(`<a${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/storage/" + contrac.file.url)}>قرار داد</a>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
                if (contract.value == null || contrac && contrac.status < 1) {
                  _push(`<input class="form-control" type="file" id="file" accept="zip/rar/*">`);
                } else {
                  _push(`<!---->`);
                }
                if (unref(form).progress) {
                  _push(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="5">${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</td><td class="d-flex"><!--[-->`);
            ssrRenderList(contract.value, (contrac, index2) => {
              _push(`<!--[-->`);
              if (contrac == null && order.orderable.rouzekari > 1 || contrac && contrac.status < 1 && order.orderable.rouzekari > 1) {
                _push(`<button class="btn btn-primary me-auto">بارگزاری قرار داد</button>`);
              } else {
                _push(`<p>`);
                if (contrac && contrac.status == 0) {
                  _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
                } else {
                  _push(`<!---->`);
                }
                if (contrac && contrac.status == 1) {
                  _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
                } else {
                  _push(`<!---->`);
                }
                if (contrac && contrac.status == 2) {
                  _push(`<span class="badge badge-pill badge-soft-secondary">در حال بررسی</span>`);
                } else {
                  _push(`<!---->`);
                }
                if (contrac && contrac.status == 3) {
                  _push(`<span class="badge badge-pill badge-soft-danger"> منقضی</span>`);
                } else {
                  _push(`<!---->`);
                }
                if (contrac && contrac.status == 4) {
                  _push(`<span class="badge badge-pill badge-soft-success">تایید</span>`);
                } else {
                  _push(`<!---->`);
                }
                if (contrac && contrac.status == 5) {
                  _push(`<span class="badge badge-pill badge-soft-pink">واگذار شده</span>`);
                } else {
                  _push(`<!---->`);
                }
                if (contrac && contrac.status == 6) {
                  _push(`<span class="badge badge-pill badge-soft-dark">تمام شده</span>`);
                } else {
                  _push(`<!---->`);
                }
                if (contrac && contrac.status == 7) {
                  _push(`<span class="badge badge-pill badge-soft-info">ثبت نظر</span>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</p>`);
              }
              if (contrac && contrac.status == 4 && props.orders.col !== props.orders.payment) {
                _push(`<button type="button" class="form-control btn btn-sm btn-primary">پرداخت</button>`);
              } else {
                _push(`<!---->`);
              }
              if (order.orderable.registerDesigner) {
                _push(`<form class="col-lg-4 col-md-4 me-auto"${ssrRenderAttr("action", _ctx.route("download.store"))} method="POST"><input type="hidden" name="_token"${ssrRenderAttr("value", __props.token)}><input type="hidden" name="id"${ssrRenderAttr("value", order.order_id)}><input type="hidden" name="model"${ssrRenderAttr("value", order.orderable_type)}><button type="submit" class="form-control btn btn-sm btn-primary">دانلود</button></form>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></td><!--]-->`);
          } else {
            _push(`<!--[--><td><div class="left">`);
            if (order.orderable && order.orderable.image) {
              _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + order.orderable.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", order.orderable.name)}>`);
            } else {
              _push(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", order.orderable.name)}>`);
            }
            _push(`</div><div class="info"><h6 class="mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">`);
            if (order.orderable_type == "App\\Models\\Product") {
              _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.orderable.name)}</span>`);
            } else if (order.orderable_type == "App\\Models\\Tarahi") {
              _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.orderable.title)}</span>`);
            } else if (order.orderable_type == "App\\Models\\WebDesign") {
              _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(order.orderable.name)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span></h6></div></td>`);
            if (order.link !== null) {
              _push(`<td>${ssrInterpolate(order.link.link)}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (order.link == null && order.orderable.group.name !== "فرم" && order.orderable_type !== "App\\Models\\Tarahi") {
              _push(`<td><input type="text"${ssrRenderAttr("value", unref(form).link)} style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("placeholder", "لطفا آدرس دامنه وب سایت خود را وارد نمایید.مثال : " + _ctx.route("index"))}></td>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<td class="d-flex">`);
            if (order.link == null && order.orderable_type !== "App\\Models\\Tarahi" && order.orderable.group.name !== "فرم") {
              _push(ssrRenderComponent(unref(link_default), {
                class: "btn btn-primary",
                onClick: ($event) => submitLink(order.id, order.order_id)
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(` ثبت دامنه`);
                  } else {
                    return [
                      createTextVNode(" ثبت دامنه")
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<form class="col-lg-4 col-md-4 me-auto"${ssrRenderAttr("action", _ctx.route("download.store"))} method="POST"><input type="hidden" name="_token"${ssrRenderAttr("value", __props.token)}><input type="hidden" name="id"${ssrRenderAttr("value", order.orderable_id)}><input type="hidden" name="model"${ssrRenderAttr("value", order.orderable_type)}><button type="submit" class="form-control btn btn-sm btn-primary">دانلود</button></form>`);
            }
            _push(`</td><!--]-->`);
          }
          _push(`</tr>`);
        });
        _push(`<!--]--></tbody>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section></div></div></div></div></form></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Download/download-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
