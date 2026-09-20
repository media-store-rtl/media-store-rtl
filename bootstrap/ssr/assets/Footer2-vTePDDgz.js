import { mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "Footer2",
  __ssrInlineRender: true,
  props: {
    companies: Object,
    socials: Object,
    time: String,
    menus: Object,
    path: String,
    namads: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}><section class="newsletter mb-15"><div class="container"><div class="row"><div class="col-lg-12"><div class="position-relative newsletter-inner"><div class="newsletter-content"><h2 class="mb-20"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">وب سایت خود</span></span><br><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"> را از فروشگاه ما دریافت کنید</span></span></h2></div></div></div></div></div></section><section class="featured section-padding"><div class="container"><div class="row"><div class="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0"><div class="banner-left-icon d-flex align-items-center wow fadeIn animated" style="${ssrRenderStyle({ "visibility": "hidden", "animation-name": "none" })}"><div class="banner-icon"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-1.svg")} alt=""></div><div class="banner-text"><h3 class="icon-box-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">بهترین قیمت ها </span></span></h3><p><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">اصلی و اورجینال</span></span></p></div></div></div><div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="banner-left-icon d-flex align-items-center wow fadeIn animated" style="${ssrRenderStyle({ "visibility": "hidden", "animation-name": "none" })}"><div class="banner-icon"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-2.svg")} alt=""></div><div class="banner-text"><h3 class="icon-box-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">فرصت های شغلی</span></span></h3><p><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">همکاری با ما</span></span></p></div></div></div><div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="banner-left-icon d-flex align-items-center wow fadeIn animated" style="${ssrRenderStyle({ "visibility": "hidden", "animation-name": "none" })}"><div class="banner-icon"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-3.svg")} alt=""></div><div class="banner-text"><h3 class="icon-box-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">محصولات شگفت انگیز</span></span></h3><p><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">خرید بصرفه</span></span></p></div></div></div><div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="banner-left-icon d-flex align-items-center wow fadeIn animated" style="${ssrRenderStyle({ "visibility": "hidden", "animation-name": "none" })}"><div class="banner-icon"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-4.svg")} alt=""></div><div class="banner-text"><h3 class="icon-box-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">انتخاب متنوع</span></span></h3><p><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"> مگا منو</span></span></p></div></div></div><div class="col-lg-1-5 col-md-4 col-12 col-sm-6"><div class="banner-left-icon d-flex align-items-center wow fadeIn animated" style="${ssrRenderStyle({ "visibility": "hidden", "animation-name": "none" })}"><div class="banner-icon"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-5.svg")} alt=""></div><div class="banner-text"><h3 class="icon-box-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">بازگشت وجه</span></span></h3><p><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">طی 14 روز کاری</span></span></p></div></div></div></div></div></section><section class="section-padding footer-mid"><div class="container pt-15 pb-20"><div class="row"><div class="col"><div class="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0"><div class="logo mb-30">`);
      if (props.companies && props.companies.image && props.companies.image.status == 4) {
        _push(ssrRenderComponent(unref(link_default), {
          href: "",
          class: "mb-15"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/images/logo-2.png")} class="" height="40" width="60"${ssrRenderAttr("alt", props.companies.name_show)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _ctx.$page.props.ziggy.url + "/storage/images/logo-2.png",
                  class: "",
                  height: "40",
                  width: "60",
                  alt: props.companies.name_show
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="font-lg text-heading">`);
      if (props.companies) {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"> وب سایت ${ssrInterpolate(props.companies.name_show)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><ul class="contact-infor"><li><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-location.svg")} alt=""><strong><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">آدرس: </span></span></strong> <span>`);
      if (props.companies && props.companies.profile) {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(props.companies.profile.ostan)},${ssrInterpolate(props.companies.profile.shahr)}, ${ssrInterpolate(props.companies.profile.address)}</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></li>`);
      if (props.companies) {
        _push(`<li><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-contact.svg")} alt=""><strong><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">با ما تماس بگیرید: </span></span></strong><span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate("0" + props.companies.phone)} `);
        if (props.companies && props.companies.tel !== null) {
          _push(`<!--[--> -${ssrInterpolate("0" + props.companies.tel)}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span></span></span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (props.companies) {
        _push(`<li><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-email-2.svg")} alt=""><strong><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ایمیل: </span></span></strong><span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(props.companies.email)}</span></span></span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/icon-clock.svg")} alt=""><strong><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ساعت کاری: </span></span></strong><span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">07:00 - 17:00، شنبه الی چهار شنبه</span></span></span></li></ul></div></div><div class="footer-link-widget col"><h4 class="widget-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">`);
      if (props.companies) {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate(props.companies.name_show)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></h4><ul class="footer-list mb-sm-5 mb-md-0"><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("about.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>درباره ما</span></span>`);
          } else {
            return [
              createVNode("span", { style: { "vertical-align": "inherit" } }, [
                createVNode("span", { style: { "vertical-align": "inherit" } }, "درباره ما")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("faq.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>سوالات متداول</span></span>`);
          } else {
            return [
              createVNode("span", { style: { "vertical-align": "inherit" } }, [
                createVNode("span", { style: { "vertical-align": "inherit" } }, "سوالات متداول")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("privacy.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>سیاست حفظ حریم خصوصی</span></span>`);
          } else {
            return [
              createVNode("span", { style: { "vertical-align": "inherit" } }, [
                createVNode("span", { style: { "vertical-align": "inherit" } }, "سیاست حفظ حریم خصوصی")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("terms-conditions.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>شرایط و ضوابط</span></span>`);
          } else {
            return [
              createVNode("span", { style: { "vertical-align": "inherit" } }, [
                createVNode("span", { style: { "vertical-align": "inherit" } }, "شرایط و ضوابط")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="footer-link-widget col"><h4 class="widget-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">حساب</span></span></h4><ul class="footer-list mb-sm-5 mb-md-0">`);
      if (_ctx.$page.props.auth.user == null) {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("register")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>ایجاد</span></span>`);
            } else {
              return [
                createVNode("span", { style: { "vertical-align": "inherit" } }, [
                  createVNode("span", { style: { "vertical-align": "inherit" } }, "ایجاد")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>ورود</span></span>`);
            } else {
              return [
                createVNode("span", { style: { "vertical-align": "inherit" } }, [
                  createVNode("span", { style: { "vertical-align": "inherit" } }, "ورود")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.auth.user !== null) {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("dashboard.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>داشبورد</span></span>`);
            } else {
              return [
                createVNode("span", { style: { "vertical-align": "inherit" } }, [
                  createVNode("span", { style: { "vertical-align": "inherit" } }, "داشبورد")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li>`);
      if (_ctx.$page.props.auth.user !== null) {
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("favorite.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>علاقه مندی های من</span></span>`);
            } else {
              return [
                createVNode("span", { style: { "vertical-align": "inherit" } }, [
                  createVNode("span", { style: { "vertical-align": "inherit" } }, "علاقه مندی های من")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li>`);
      if (_ctx.$page.props.auth.user !== null) {
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("support.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"${_scopeId}>پشتیبانی</span></span>`);
            } else {
              return [
                createVNode("span", { style: { "vertical-align": "inherit" } }, [
                  createVNode("span", { style: { "vertical-align": "inherit" } }, "پشتیبانی")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></div><div class="footer-link-widget widget-install-app col"><h4 class="widget-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">درگاه های پرداخت امن</span></span></h4><img class="wow fadeIn animated"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/payment-method.png")} alt="" style="${ssrRenderStyle({ "visibility": "hidden", "animation-name": "none" })}"></div><div class="footer-link-widget widget-install-app col"><h4 class="widget-title"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">نماد ها</span></span></h4><p class="wow fadeIn animated" style="${ssrRenderStyle({ "visibility": "hidden", "animation-name": "none" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><!--[-->`);
      ssrRenderList(props.namads, (namad) => {
        _push(`<div>${namad.tag ?? ""}</div>`);
      });
      _push(`<!--]--></span></p></div></div></div></section><div class="container pb-30"><div class="row align-items-center"><div class="col-12 mb-30"><div class="footer-bottom"></div></div><div class="col-xl-4 col-lg-6 col-md-6"><p class="span-sm mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"></span><strong class="text-brand"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"></span></span></strong>`);
      if (props.companies) {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"> - ${ssrInterpolate(unref(moment)(__props.time).locale("fa", unref(fa)).format("jYYYY"))} `);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("website-design.index", "q") + "all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`طراحی`);
            } else {
              return [
                createTextVNode("طراحی")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` توسط `);
        _push(ssrRenderComponent(unref(link_default), {
          href: _ctx.route("guest-profile.show", props.companies.user_name)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.companies.name + " " + props.companies.lasst_name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.companies.name + " " + props.companies.lasst_name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<br>`);
      if (props.companies) {
        _push(`<span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"> ©کلیه حقوق مادی و معنوی ${ssrInterpolate(props.companies.name_show)} محفوظ است.</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></div><div class="col-xl-4 col-lg-6 text-center d-none d-xl-block"><div class="hotline d-lg-inline-flex mr-30"><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/assets/imgs/theme/icons/phone-call.svg")} alt="خط تلفن">`);
      if (props.companies && props.companies.phone !== null) {
        _push(`<p>${ssrInterpolate("0" + props.companies.phone)} `);
        if (props.companies && props.companies.tel !== null) {
          _push(`<!--[--> -${ssrInterpolate("0" + props.companies.tel)}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ساعت کاری 7:00 الی 17:00</span></span></span></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block"><div class="mobile-social-icon">`);
      if (props.socials && props.socials.length > 0) {
        _push(`<h6><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">شبکه های اجتماعی</span></span></h6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(props.socials, (social) => {
        _push(`<!--[-->`);
        if (social.link && social.menu) {
          _push(`<a${ssrRenderAttr("href", social.link.link)}${ssrRenderAttr("title", social.menu.name)}>${social.tag ?? ""}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><p class="font-sm"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ما رو در شبکه های اجتماعی دنبال کنید</span></span></p></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/Footer2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
