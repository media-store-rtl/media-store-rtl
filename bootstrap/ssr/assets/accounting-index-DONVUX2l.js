import { defineComponent, resolveComponent, unref, withCtx, createTextVNode, createVNode, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { h as head_default, l as link_default } from "../ssr.js";
/* empty css                  */
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accounting-index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_el_dialog_panel = resolveComponent("el-dialog-panel");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(head_default), { title: "accounting" }, null, _parent));
      _push(`<div class="bg-white"><header class="absolute inset-x-0 top-0 z-50"><nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8"><div class="flex lg:flex-1"><a href="#" class="-m-1.5 p-1.5"><span class="sr-only">Your Company</span></a></div><div class="flex lg:hidden"><button type="button" command="show-modal" commandfor="mobile-menu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"><span class="sr-only">منوی اصلی را باز کنید</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div class="hidden lg:flex lg:gap-x-12"></div><div class="hidden lg:flex lg:flex-1 lg:justify-end">`);
      _push(ssrRenderComponent(unref(link_default), {
        href: _ctx.route("login"),
        class: "text-sm/6 font-semibold text-gray-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ورود <span aria-hidden="true"${_scopeId}></span>`);
          } else {
            return [
              createTextVNode("ورود "),
              createVNode("span", { "aria-hidden": "true" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
      _push(ssrRenderComponent(_component_el_dialog, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden"${_scopeId}><div tabindex="0" class="fixed inset-0 focus:outline-none"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_dialog_panel, { class: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><a href="#" class="-m-1.5 p-1.5"${_scopeId2}><span class="sr-only"${_scopeId2}>نرم افزار حسابداری</span><img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" class="h-8 w-auto"${_scopeId2}></a><button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 text-gray-700"${_scopeId2}><span class="sr-only"${_scopeId2}>بستن منو</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6"${_scopeId2}><path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg></button></div><div class="mt-6 flow-root"${_scopeId2}><div class="-my-6 divide-y divide-gray-500/10"${_scopeId2}><div class="space-y-2 py-6"${_scopeId2}></div><div class="py-6"${_scopeId2}><a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"${_scopeId2}>ورود</a></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("a", {
                        href: "#",
                        class: "-m-1.5 p-1.5"
                      }, [
                        createVNode("span", { class: "sr-only" }, "نرم افزار حسابداری"),
                        createVNode("img", {
                          src: "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
                          alt: "",
                          class: "h-8 w-auto"
                        })
                      ]),
                      createVNode("button", {
                        type: "button",
                        command: "close",
                        commandfor: "mobile-menu",
                        class: "-m-2.5 rounded-md p-2.5 text-gray-700"
                      }, [
                        createVNode("span", { class: "sr-only" }, "بستن منو"),
                        (openBlock(), createBlock("svg", {
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "1.5",
                          "data-slot": "icon",
                          "aria-hidden": "true",
                          class: "size-6"
                        }, [
                          createVNode("path", {
                            d: "M6 18 18 6M6 6l12 12",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("div", { class: "mt-6 flow-root" }, [
                      createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                        createVNode("div", { class: "space-y-2 py-6" }),
                        createVNode("div", { class: "py-6" }, [
                          createVNode("a", {
                            href: "#",
                            class: "-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                          }, "ورود")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></dialog>`);
          } else {
            return [
              createVNode("dialog", {
                id: "mobile-menu",
                class: "backdrop:bg-transparent lg:hidden"
              }, [
                createVNode("div", {
                  tabindex: "0",
                  class: "fixed inset-0 focus:outline-none"
                }, [
                  createVNode(_component_el_dialog_panel, { class: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("a", {
                          href: "#",
                          class: "-m-1.5 p-1.5"
                        }, [
                          createVNode("span", { class: "sr-only" }, "نرم افزار حسابداری"),
                          createVNode("img", {
                            src: "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
                            alt: "",
                            class: "h-8 w-auto"
                          })
                        ]),
                        createVNode("button", {
                          type: "button",
                          command: "close",
                          commandfor: "mobile-menu",
                          class: "-m-2.5 rounded-md p-2.5 text-gray-700"
                        }, [
                          createVNode("span", { class: "sr-only" }, "بستن منو"),
                          (openBlock(), createBlock("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "1.5",
                            "data-slot": "icon",
                            "aria-hidden": "true",
                            class: "size-6"
                          }, [
                            createVNode("path", {
                              d: "M6 18 18 6M6 6l12 12",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ]))
                        ])
                      ]),
                      createVNode("div", { class: "mt-6 flow-root" }, [
                        createVNode("div", { class: "-my-6 divide-y divide-gray-500/10" }, [
                          createVNode("div", { class: "space-y-2 py-6" }),
                          createVNode("div", { class: "py-6" }, [
                            createVNode("a", {
                              href: "#",
                              class: "-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            }, "ورود")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><div class="relative isolate px-6 pt-14 lg:px-8"><div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"><div style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}" class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div></div><div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"><div class="hidden sm:mb-8 sm:flex sm:justify-center"></div><div class="text-center"><h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">نرم افزار حسابداری تحت وب</h1><p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">لطفا برای استفاده از خدمات وارد حساب کاربری خود شوید.</p><div class="mt-10 flex items-center justify-center gap-x-6"></div></div></div><div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"><div style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}" class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Guest/accounting-index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
