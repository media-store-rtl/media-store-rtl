import { computed, ref, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { a as usePage, u as useForm, l as link_default } from "../ssr.js";
import _sfc_main$1 from "./header-BJVl8Wou.js";
import _sfc_main$2 from "./footer-BmA7fAd4.js";
import moment from "moment-jalaali";
import { f as fa } from "./fa-BkogAtM6.js";
import swal from "sweetalert2";
import StarRating from "vue-star-rating";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "Tarahi-index",
  __ssrInlineRender: true,
  props: {
    tarahis: Object,
    users: Object,
    cart: Object,
    wallet: Number,
    notifications: Object,
    names: Object,
    ids: Object,
    statuses: Object,
    notifications: Object,
    companies: Object,
    descriptions: Object,
    menus: Object,
    orders: Object,
    time: String,
    token: String,
    alert: Object,
    companies2: Object
  },
  setup(__props) {
    computed(() => usePage().props.errors);
    const props = __props;
    const form = useForm({
      name: null,
      status: null,
      id: null,
      dargah: null,
      menu: null,
      recepiant: null,
      subject: null,
      text: null,
      product: null,
      designer: null,
      file: null,
      price: null,
      rate: null,
      discount: null,
      model: null
    });
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
    const tarahi = ref();
    ref();
    const submitDestroy = () => {
      form.id = tarahi.value;
      if (form.id) {
        form.delete(
          route("tarahiDesigner.destroy", form.id)
          //  {
          //         onFinish:()=> submitTimer()
          //     }
        );
      } else {
        let text = "موارد ستاره دار الزامی است.";
        validate(text);
      }
    };
    const submitFinal = () => {
      if (form.id && form.price && form.rate && form.text) {
        form.post(route("tarahiDesigner.store"));
      } else {
        let text = "موارد ستاره دار الزامی است.";
        validate(text);
      }
    };
    const subTarahi = ref();
    props.tarahis.data.forEach((element) => {
      if (element.tarahi_register && element.tarahi_register.reqdesigner_id == element.id) {
        subTarahi.value = element.tarahi_register;
      }
    });
    if (props.menus) {
      props.menus.forEach((element) => {
        if (element.section == "tickets") ;
      });
    }
    ref([]);
    ref([]);
    ref(props.tarahis.data);
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
      if (props.tarahis.total > 0 && subTarahi.value) {
        _push(`<div class="bg-white mb-4"><div class="card-body"><div class="row gx-5"><div class="col-lg-9"><section class="content-body p-xl-4"><article class="itemlist"><div class="table-responsive">`);
        if (props.tarahis.total > 0) {
          _push(`<div class="table table-hover"><thead><tr class="col"><th scope="col">شناسه</th><th scope="col">پروژه</th><th scope="col">مبلغ</th><th scope="col">تاریخ</th><th scope="col">انقضا</th><th scope="col">بازدید</th><th scope="col">وضعیت</th><th scope="col">عملیات</th></tr></thead><tbody><!--[-->`);
          ssrRenderList(props.tarahis.data, (reqDesigner, index) => {
            _push(`<!--[-->`);
            if (reqDesigner.tarahi_register) {
              _push(`<tr><td>${ssrInterpolate(reqDesigner.tarahi_register.id.toLocaleString("fa-IR"))}</td>`);
              if (reqDesigner.tarahi_register.status == 4 || reqDesigner.tarahi_register.status == 6) {
                _push(`<td>`);
                _push(ssrRenderComponent(unref(link_default), {
                  href: _ctx.route("project.show", [reqDesigner.tarahi_register.slug])
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<div class="left"${_scopeId}>`);
                      if (reqDesigner.tarahi_register.image) {
                        _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.tarahi_register.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.tarahi_register.title)}${_scopeId}>`);
                      } else if (props.companies) {
                        _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.tarahi_register.title)}${_scopeId}>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div><div class="info"${_scopeId}><h6 class="mb-0 text-nofull"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>${ssrInterpolate(reqDesigner.tarahi_register.title)}</span></span></h6></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "left" }, [
                          reqDesigner.tarahi_register.image ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.tarahi_register.image.url,
                            class: "img-sm img-thumbnail",
                            alt: reqDesigner.tarahi_register.title
                          }, null, 8, ["src", "alt"])) : props.companies ? (openBlock(), createBlock("img", {
                            key: 1,
                            src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                            class: "img-sm img-thumbnail",
                            alt: reqDesigner.tarahi_register.title
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "info" }, [
                          createVNode("h6", { class: "mb-0 text-nofull" }, [
                            createVNode("span", { style: { "vertical-align": "inherit" } }, [
                              createVNode("span", { style: { "vertical-align": "inherit" } }, toDisplayString(reqDesigner.tarahi_register.title), 1)
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`</td>`);
              } else {
                _push(`<td>`);
                _push(ssrRenderComponent(unref(link_default), { href: "#" }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<div class="left"${_scopeId}>`);
                      if (reqDesigner.tarahi_register.image) {
                        _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.tarahi_register.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.tarahi_register.title)}${_scopeId}>`);
                      } else if (props.companies) {
                        _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} class="img-sm img-thumbnail"${ssrRenderAttr("alt", reqDesigner.tarahi_register.title)}${_scopeId}>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div><div class="info"${_scopeId}><h6 class="mb-0 text-nofull"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>${ssrInterpolate(reqDesigner.tarahi_register.title)}</span></span></h6></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "left" }, [
                          reqDesigner.tarahi_register.image ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: _ctx.$page.props.ziggy.url + "/storage/" + reqDesigner.tarahi_register.image.url,
                            class: "img-sm img-thumbnail",
                            alt: reqDesigner.tarahi_register.title
                          }, null, 8, ["src", "alt"])) : props.companies ? (openBlock(), createBlock("img", {
                            key: 1,
                            src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                            class: "img-sm img-thumbnail",
                            alt: reqDesigner.tarahi_register.title
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "info" }, [
                          createVNode("h6", { class: "mb-0 text-nofull" }, [
                            createVNode("span", { style: { "vertical-align": "inherit" } }, [
                              createVNode("span", { style: { "vertical-align": "inherit" } }, toDisplayString(reqDesigner.tarahi_register.title), 1)
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`</td>`);
              }
              _push(`<td>${ssrInterpolate(Number(reqDesigner.tarahi_register.price_block).toLocaleString("fa-IR"))}</td><td>${ssrInterpolate(unref(moment)(reqDesigner.tarahi_register.created_at).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td>`);
              if (reqDesigner.tarahi_register.status > 4) {
                _push(`<td>${ssrInterpolate(unref(moment)(reqDesigner.tarahi_register.date).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm"))}</td>`);
              } else {
                _push(`<td>نامشخص</td>`);
              }
              _push(`<td>${ssrInterpolate(reqDesigner.tarahi_register.views_count)}</td><td>`);
              if (reqDesigner.tarahi_register.status == 0) {
                _push(`<span class="badge badge-pill badge-soft-info">ثبت</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.tarahi_register.status == 1) {
                _push(`<span class="badge badge-pill badge-soft-warning">انتظار</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.tarahi_register.status == 2) {
                _push(`<span class="badge badge-pill badge-soft-secondary">در حال واگذاری</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.tarahi_register.status == 3) {
                _push(`<span class="badge badge-pill badge-soft-danger"> منقضی</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.tarahi_register.status == 4) {
                _push(`<span class="badge badge-pill badge-soft-success">منتشر</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.tarahi_register.status == 5) {
                _push(`<span class="badge badge-pill badge-soft-pink">واگذار شده</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.tarahi_register.status == 6) {
                _push(`<span class="badge badge-pill badge-soft-dark">انجام شده</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.tarahi_register.status == 7) {
                _push(`<span class="badge badge-pill badge-soft-info">ثبت نظر</span>`);
              } else {
                _push(`<!---->`);
              }
              if (reqDesigner.tarahi_register.status == 8) {
                _push(`<span class="badge badge-pill badge-soft-warning">بارگذاری فایل</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</td>`);
              if (reqDesigner.tarahi_register.status == 2 && reqDesigner.status !== 3 || reqDesigner.tarahi_register.status == 5 && reqDesigner.status !== 3 || reqDesigner.tarahi_register.status == 7 && reqDesigner.status !== 3 || reqDesigner.tarahi_register.status == 8 && reqDesigner.status !== 3 || reqDesigner.tarahi_register.status == 6 && reqDesigner.status !== 3) {
                _push(`<td class="text-end"><div class="dropdown"><a href="" data-bs-toggle="dropdown" class="btn btn-light rounded btn-sm font-sm"><i class="material-icons md-more_horiz"></i></a><div class="dropdown-menu">`);
                if (reqDesigner.tarahi_register.status == 4 || reqDesigner.tarahi_register.status == 6) {
                  _push(ssrRenderComponent(unref(link_default), {
                    class: "dropdown-item",
                    href: _ctx.route("project.show", [reqDesigner.tarahi_register.slug])
                  }, {
                    default: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        _push2(`نمایش جزئیات`);
                      } else {
                        return [
                          createTextVNode("نمایش جزئیات")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent));
                } else {
                  _push(`<!---->`);
                }
                if (reqDesigner.tarahi_register.status == 5 && unref(moment)(reqDesigner.tarahi_register.date).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm") > unref(moment)(props.time).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm") || reqDesigner.tarahi_register.status == 8 && unref(moment)(reqDesigner.tarahi_register.date).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm") > unref(moment)(props.time).locale("fa", unref(fa)).format("jYYYY/jM/jD HH:mm")) {
                  _push(ssrRenderComponent(unref(link_default), {
                    class: "dropdown-item",
                    href: _ctx.route("tarahiDesigner.show", [reqDesigner.tarahi_register.slug])
                  }, {
                    default: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        _push2(`بارگذاری فایل`);
                      } else {
                        return [
                          createTextVNode("بارگذاری فایل")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent));
                } else {
                  _push(`<!---->`);
                }
                if (reqDesigner.tarahi_register.status == 2) {
                  _push(`<button type="button" class="dropdown-item">پرداخت</button>`);
                } else {
                  _push(`<!---->`);
                }
                if (reqDesigner.tarahi_register.status == 7) {
                  _push(`<button type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">اتمام پروژه</button>`);
                } else {
                  _push(`<!---->`);
                }
                if (reqDesigner.tarahi_register.status == 5 || reqDesigner.tarahi_register.status == 8) {
                  _push(`<button type="button" class="dropdown-item text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">لغو</button>`);
                } else {
                  _push(`<!---->`);
                }
                if (reqDesigner.tarahi_register.status == 6) {
                  _push(ssrRenderComponent(unref(link_default), {
                    href: "",
                    class: "dropdown-item"
                  }, {
                    default: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        _push2(`فروش`);
                      } else {
                        return [
                          createTextVNode("فروش")
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
              _push(`<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="staticBackdropLabel1">انصراف پروژه</h5><button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p> آیا میخواهید از انجام پروژه `);
              if (tarahi.value) {
                _push(`<strong style="${ssrRenderStyle({ "font-size": "large" })}">${ssrInterpolate(tarahi.value.title)}</strong>`);
              } else {
                _push(`<!---->`);
              }
              _push(` انصراف دهید؟ </p><p><p> در صورت تایید، مبلغ `);
              if (tarahi.value) {
                _push(`<strong style="${ssrRenderStyle({ "font-size": "large" })}">${ssrInterpolate((tarahi.value.total * props.companies2.design_damage).toLocaleString("fa-ir"))}</strong>`);
              } else {
                _push(`<!---->`);
              }
              _push(` ریال ضمانت اجرای پروژه شما بابت خسارت به حساب کارفرمای پروژه پرداخت خواهد شد که این مبلغ تحت هیچ عنوان قابل بازگشت نخواهد بود. </p></p></div><div class="modal-footer">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: ["btn btn-sm btn-primary", { "opacity-25": unref(form).processing }],
                "data-bs-dismiss": "modal",
                href: "",
                onClick: submitDestroy,
                disabled: unref(form).processing
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`تایید `);
                    if (unref(form).processing) {
                      _push2(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"${_scopeId}></span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                  } else {
                    return [
                      createTextVNode("تایید "),
                      unref(form).processing ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "spinner-border spinner-border-sm",
                        role: "status",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">انصراف</button></div></div></div></div><div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="staticBackdropLabel2">اتمام پروژه</h5><button type="button" class="btn-close ms-0" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p> کارفرمای پروژه `);
              if (reqDesigner) {
                _push(`<strong style="${ssrRenderStyle({ "font-size": "large" })}">${ssrInterpolate(reqDesigner.tarahi_register.title)}</strong>`);
              } else {
                _push(`<!---->`);
              }
              _push(` ،اتمام پروژه را اعلام نموده است. </p><p> لازم به ذکراست پس از ثبت اتمام پروژه تحت هیچ عنوان قابل بازگشت نبوده و جای هیچ گونه اعتراضی نسبت عملکرد کارفرما پروژه نمی باشد. درصورت داشتن اعتراض، فرم گزارش را ارسال نمایید و از اعلام اتمام پروژه خود داری نمایید. </p><p> لطفا میزان رضایت و نظر خود را از کارفرما پروژه اعلام نمایید. </p><div class="cart-bod"><div class="mt-4"><label class="form-label">مبلغ پروژه <span class="text-danger">*</span></label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).price)} placeholder="مبلغ پروژه یا مبلغ توافق با کارفرما را وارد نمایید:مثال 100000 ریال" type="text" class="form-control"></div></div><div class="mt-4"><label class="form-label">درصد تخفیف </label><div class="row gx-2"><input${ssrRenderAttr("value", unref(form).discount)} placeholder="در صورت نیاز میتوانید به کارفرما تخفیف دهید:مثال 10" type="text" class="form-control"></div></div><div class="mt-4"><label class="form-label">میزان رای <span class="text-danger">*</span></label><div class="row gx-2">`);
              _push(ssrRenderComponent(unref(StarRating), {
                class: "ml-auto",
                "star-size": 30,
                "max-rating": 7,
                rating: unref(form).rate,
                "onUpdate:rating": ($event) => unref(form).rate = $event
              }, null, _parent));
              _push(`</div></div><div class="mt-4"><label class="form-label">نظر <span class="text-danger">*</span></label><textarea placeholder="لطفا نظر خود را راجع به کارفرمای پروژه بصورت یک جمله کوتاه بیان کنید." class="form-control" rows="4">${ssrInterpolate(unref(form).text)}</textarea></div></div></div><div class="modal-footer">`);
              _push(ssrRenderComponent(unref(link_default), {
                class: ["btn btn-sm btn-primary", { "opacity-25": unref(form).processing }],
                "data-bs-dismiss": "modal",
                href: "",
                onClick: submitFinal,
                disabled: unref(form).processing
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`تایید `);
                    if (unref(form).processing) {
                      _push2(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"${_scopeId}></span>`);
                    } else {
                      _push2(`<!---->`);
                    }
                  } else {
                    return [
                      createTextVNode("تایید "),
                      unref(form).processing ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "spinner-border spinner-border-sm",
                        role: "status",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">انصراف</button></div></div></div></div></tr>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></tbody></div>`);
        } else {
          _push(`<!---->`);
        }
        if (props.tarahis.total > 9) {
          _push(`<div class="mt-5"><nav aria-label="Page navigation example"><ul class="pagination justify-content-start"><!--[-->`);
          ssrRenderList(props.tarahis.links, (link) => {
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
        _push(`</div></article></section></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Designer/Tarahi/Tarahi-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
