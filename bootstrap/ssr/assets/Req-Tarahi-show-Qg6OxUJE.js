import { computed, unref, withCtx, createBlock, openBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
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
  __name: "Req-Tarahi-show",
  __ssrInlineRender: true,
  props: {
    tarahi: Object,
    users: Object,
    cart: Object,
    notifications: Object,
    names: Object,
    ids: Object,
    statuses: Object,
    companies: Object,
    descriptions: Object,
    reqDesigners: Object,
    token: String,
    alert: Object,
    wallet: Number
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      name: null,
      status: null,
      id: null,
      reqDesigner_id: null,
      dargah: null,
      model: null
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
      _push(`<td class="me-auto"></td></div><div class="col-sm-12">`);
      if (props.descriptions) {
        _push(`<div>${props.descriptions.text ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (props.reqDesigners.total > 0) {
        _push(`<div class="bg-white mb-4">`);
        if (props.reqDesigners) {
          _push(`<div class="card-body"><div class="table-responsive"><article class="itemlist">`);
          if (props.reqDesigners.total > 0) {
            _push(`<table class="table table-hover"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">کاربر</th><th scope="col">مدت زمان</th><th scope="col">مبلغ پیشنهادی</th><th scope="col">تاریخ</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
            ssrRenderList(props.reqDesigners.data, (reqDesigner, index) => {
              _push(`<tr><td>${ssrInterpolate(reqDesigner.id.toLocaleString("fa-IR"))}</td><td>`);
              _push(ssrRenderComponent(unref(link_default), {
                class: "img-wrap",
                href: _ctx.route("profile.show", [reqDesigner.user.user_name])
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    if (reqDesigner.user.image) {
                      _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.user.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.user.name_show)}${_scopeId}>`);
                    } else {
                      _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/default-user.png")} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.user.name_show)}${_scopeId}>`);
                    }
                  } else {
                    return [
                      reqDesigner.user.image ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.user.image.url,
                        class: "img-sm img-thumbnail",
                        alt: reqDesigner.user.name_show
                      }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                        key: 1,
                        src: _ctx.$page.props.ziggy.url + "/storage/images/default-user.png",
                        class: "img-sm img-thumbnail",
                        alt: reqDesigner.user.name_show
                      }, null, 8, ["src", "alt"]))
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<div class="info"><h6 class="mb-0 text-nofull"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(reqDesigner.user.name_show)}</span></span></h6></div></td><td> در ${ssrInterpolate(reqDesigner.expired)} روز </td><td>${ssrInterpolate(Number(reqDesigner.price).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(unref(moment)(reqDesigner.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td><td>`);
              if (reqDesigner.status == 0) {
                _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.status == 1) {
                _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.status == 2) {
                _push(`<span class="badge badge-pill badge-soft-secondary">بررسی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.status == 3) {
                _push(`<span class="badge badge-pill badge-soft-danger"> منقضی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.status == 4) {
                _push(`<span class="badge badge-pill badge-soft-success">منتشر</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.status == 5) {
                _push(`<span class="badge badge-pill badge-soft-pink">انتخاب شده</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</td>`);
              if (reqDesigner.file || props.tarahi.reqdesigner_id == null && reqDesigner.status !== 3 || props.tarahi.reqdesigner_id == reqDesigner.id && reqDesigner.file == null) {
                _push(`<td class="text-end"><div class="dropdown"><a href="#" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
                if (reqDesigner.file) {
                  _push(`<a class="dropdown-item"${ssrRenderAttr("href", _ctx.route("download.edit", reqDesigner.file.id))} method="put">دانلود فایل</a>`);
                } else {
                  _push(`<!---->`);
                }
                if (props.tarahi.reqdesigner_id == null && reqDesigner.status !== 3) {
                  _push(`<button class="dropdown-item">واگذاری پروژه</button>`);
                } else {
                  _push(`<!---->`);
                }
                if (props.tarahi.reqdesigner_id == reqDesigner.id && reqDesigner.file == null) {
                  _push(ssrRenderComponent(unref(link_default), {
                    class: "dropdown-item text-danger",
                    href: _ctx.route("reqTarahi.destroy", [props.tarahi.id]),
                    onFinish: _ctx.submitTimer,
                    method: "delete"
                  }, {
                    default: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        _push2(`لغو واگذاری`);
                      } else {
                        return [
                          createTextVNode("لغو واگذاری")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent));
                } else {
                  _push(`<!---->`);
                }
                _push(`</div></div></td>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<div class="modal fade"${ssrRenderAttr("id", "staticBackdrop" + reqDesigner.id)} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="staticBackdropLabel">انتخاب طراح پروژه</h5><button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p> آیا میخواهید پروژه خود را به مبلغ پیشنهادی ${ssrInterpolate(reqDesigner.price.toLocaleString("fa-ir"))} ریال به طراح ${ssrInterpolate(reqDesigner.user.name_show)} بسپارید؟ </p>`);
              if (props.tarahi.price < reqDesigner.price) {
                _push(`<p> ضمنا مبلغ پیشنهادی طراح بیشتر از مبلغ پروژه شما می باشد. </p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<h5>توجه <span class="text-danger">*</span></h5><p>در نظر داشته باشید که پس از واریز مبلغ پروژه، درصورت لغو پروژه بعد از پذیرش پروژه توسط طراح،از جانب شما مبلغ `);
              if (props.companies) {
                _push(`<strong style="${ssrRenderStyle({ "font-size": "large" })}">${ssrInterpolate((reqDesigner.price * props.companies.design_damage).toLocaleString("fa-ir"))}</strong>`);
              } else {
                _push(`<!---->`);
              }
              _push(` ریال بابت ضمانت حسن انجام کار از مبلغ بودجه پروژه کسر شده که به عنوان خسارت به طراح داده خواهد شد و مابقی مبلغ آن به کیف پولتان واریز میگردد.این `);
              _push(ssrRenderComponent(unref(link_default), {
                href: _ctx.route("terms-conditions.index")
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`قوانین`);
                  } else {
                    return [
                      createTextVNode("قوانین")
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(` در مورد طرف مقابل(طراح)نیز صدق می کند.</p><p>لطفا مبلغ پروژه را از یکی طریق روشهای موجود واریز نمایید.</p><div class="m-2 col-6"><div class="d-flex"><label class="form-check-label" for="flexRadioDefault1"> کیف پول</label><input class="form-check-input me-auto"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "wallet")) ? " checked" : ""} type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="wallet"></div><div class="d-flex"><label class="form-check-label" for="flexRadioDefault1">درگاه ملت</label><input class="form-check-input me-auto"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "behpardakht")) ? " checked" : ""} type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="behpardakht"></div><div class="d-flex"><label class="form-check-label" for="flexRadioDefault1">درگاه صادرات</label><input class="form-check-input me-auto"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).dargah, "sepehr")) ? " checked" : ""} type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="sepehr"></div></div></div><div class="modal-footer">`);
              if (unref(form).dargah == "wallet" || unref(form).dargah == null) {
                _push(`<button type="button" data-bs-dismiss="modal" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-sm btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}> تایید `);
                if (unref(form).processing) {
                  _push(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</button>`);
              } else if (unref(form).dargah == "behpardakht") {
                _push(`<form${ssrRenderAttr("action", _ctx.route("cart.store"))} method="POST"><input type="hidden" name="_token"${ssrRenderAttr("value", __props.token)}><input type="hidden" name="dargah" value="behpardakht"><input type="hidden" name="id"${ssrRenderAttr("value", props.tarahi.id)}><input type="hidden" name="name"${ssrRenderAttr("value", "karfarma")}><input type="hidden" name="reqDesigner_id"${ssrRenderAttr("value", reqDesigner.id)}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-sm btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>تایید</button></form>`);
              } else if (unref(form).dargah == "sepehr") {
                _push(`<form${ssrRenderAttr("action", _ctx.route("cart.store"))} method="POST"><input type="hidden" name="_token"${ssrRenderAttr("value", __props.token)}><input type="hidden" name="dargah" value="sepehr"><input type="hidden" name="id"${ssrRenderAttr("value", props.tarahi.id)}><input type="hidden" name="name"${ssrRenderAttr("value", "karfarma")}><input type="hidden" name="reqDesigner_id"${ssrRenderAttr("value", reqDesigner.id)}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "btn btn-sm btn-primary"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>تایید</button></form>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">انصراف</button></div></div></div></div></tr>`);
            });
            _push(`<!--]-->`);
            if (props.reqDesigners.total > 9) {
              _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
              ssrRenderList(props.reqDesigners.links, (link) => {
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
            _push(`</tbody></table>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</article></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Buyer/Tarahi/Req-Tarahi-show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
