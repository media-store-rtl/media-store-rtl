import { ref, onMounted, onBeforeUnmount, unref, withCtx, createBlock, createCommentVNode, openBlock, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { u as useForm, l as link_default } from "../ssr.js";
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = {
  __name: "form-create",
  __ssrInlineRender: true,
  props: { products: Object, companies: Object },
  setup(__props) {
    const props = __props;
    useForm({
      id: null
    });
    const style = ref("desktop");
    onMounted(() => {
      const saveHandler = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
          e.preventDefault();
          const content = `
        <!DOCTYPE html>
        <html lang="fa">
        <head>
          <meta charset="UTF-8">
          <title>فایل سفارشی</title>
        </head>
        <body>
         <h1> کاربرگرامی لطفا قالب را خریداری نمایید.</h1>
        </body>
        </html>
      `;
          const blob = new Blob([content], { type: "text/html" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "download-page.html";
          a.click();
          URL.revokeObjectURL(url);
        }
      };
      document.addEventListener("contextmenu", (event) => event.preventDefault());
      document.addEventListener("keydown", saveHandler);
      onBeforeUnmount(() => {
        document.removeEventListener("keydown", saveHandler);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/bootstrap.min.css")} type="text/css"><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/magnific-popup.css")}><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/themify-icons.css")}><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/animate.min.css")}><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/jquery.mb.YTPlayer.min.css")}><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/owl.carousel.min.css")}><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/owl.theme.default.min.css")}><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/style.css")}><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/style-rtl.css")}><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/responsive.css")}><link rel="stylesheet"${ssrRenderAttr("href", _ctx.$page.props.ziggy.url + "/css/mohi.css")}></head><section class="hero-section" style="${ssrRenderStyle({ "background": "url('../img/hero-bg-shape-2.png')no-repeat center center / cover" })}"><header class="header"><nav class="navbar navbar-expand-lg fixed-top custom-nav white-bg"><div class="container">`);
      if (props.companies) {
        _push(ssrRenderComponent(unref(link_default), {
          class: "navbar-brand",
          href: _ctx.route("index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (props.companies.image) {
                _push2(`<img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url)} width="70" height="40"${ssrRenderAttr("alt", props.companies.name_show)} class=""${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                props.companies.image ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: _ctx.$page.props.ziggy.url + "/storage/" + props.companies.image.url,
                  width: "70",
                  height: "40",
                  alt: props.companies.name_show,
                  class: ""
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="ti-menu"></span></button>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<div class="collapse navbar-collapse main-menu" id="navbarSupportedContent"><ul class="navbar-nav ml-auto"><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "nav-link page-scroll",
          href: _ctx.route("form.show", [props.products.slug])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`خرید و دانلود`);
            } else {
              return [
                createTextVNode("خرید و دانلود")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="nav-item dropdown"><a href="#" id="navbarBlogPage" class="nav-link page-scroll dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"> ریسپانسیو </a><div class="dropdown-menu" aria-labelledby="navbarBlogPage"><a class="dropdown-item"><img src="https://img.icons8.com/material/24/null/monitor--v1.png"></a><a class="dropdown-item"><img src="https://img.icons8.com/material/24/null/windows8-tablet--v1.png"></a><a class="dropdown-item"><img src="https://img.icons8.com/material/24/null/iphone.png"></a></div></li></ul></div>`);
      } else {
        _push(`<div class="collapse navbar-collapse main-menu" id="navbarSupportedContent"><ul class="navbar-nav ml-auto"><li class="nav-item">`);
        _push(ssrRenderComponent(unref(link_default), {
          class: "nav-link page-scroll",
          href: _ctx.route("index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`خرید و دانلود`);
            } else {
              return [
                createTextVNode("خرید و دانلود")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div>`);
      }
      _push(`</div></nav></header><div class="${ssrRenderClass([[style.value], "preview"])}"><iframe${ssrRenderAttr("src", props.products.demo_link)}></iframe></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/form-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
