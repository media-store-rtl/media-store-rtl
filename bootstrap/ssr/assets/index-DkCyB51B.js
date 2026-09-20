import { defineComponent, resolveComponent, unref, withCtx, createVNode, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { h as head_default } from "../ssr.js";
/* empty css                  */
import "@inertiajs/core";
import "es-toolkit";
import "es-toolkit/compat";
import "@inertiajs/core/server";
import "@vue/server-renderer";
import "@unhead/vue";
import "@unhead/vue/polyfill";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_el_menu = resolveComponent("el-menu");
      const _component_el_disclosure = resolveComponent("el-disclosure");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(head_default), { title: "Dashboard" }, null, _parent));
      _push(`<div class="min-h-full"><nav class="bg-gray-800"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 items-center justify-between"><div class="flex items-center"><div class="shrink-0"></div><div class="hidden md:block"><div class="ml-10 flex items-baseline space-x-4"><a href="#" aria-current="page" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">اطلاعات پایه</a><a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">فاکتور</a><a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">حسابداری</a><a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">دریافت و پرداخت</a><a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">امکانات</a></div></div></div><div class="hidden md:block"><div class="ml-4 flex items-center md:ml-6"><button type="button" class="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"><span class="absolute -inset-1.5"></span><span class="sr-only">View notifications</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6"><path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
      _push(ssrRenderComponent(_component_el_dropdown, { class: "relative ml-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"${_scopeId}><span class="absolute -inset-1.5"${_scopeId}></span><span class="sr-only"${_scopeId}>Open user menu</span><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="size-8 rounded-full outline -outline-offset-1 outline-white/10"${_scopeId}></button>`);
            _push2(ssrRenderComponent(_component_el_menu, {
              anchor: "bottom end",
              popover: "",
              class: "w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"${_scopeId2}>Your profile</a><a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"${_scopeId2}>Settings</a><a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"${_scopeId2}>Sign out</a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "#",
                      class: "block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"
                    }, "Your profile"),
                    createVNode("a", {
                      href: "#",
                      class: "block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"
                    }, "Settings"),
                    createVNode("a", {
                      href: "#",
                      class: "block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"
                    }, "Sign out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("button", { class: "relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" }, [
                createVNode("span", { class: "absolute -inset-1.5" }),
                createVNode("span", { class: "sr-only" }, "Open user menu"),
                createVNode("img", {
                  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  alt: "",
                  class: "size-8 rounded-full outline -outline-offset-1 outline-white/10"
                })
              ]),
              createVNode(_component_el_menu, {
                anchor: "bottom end",
                popover: "",
                class: "w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              }, {
                default: withCtx(() => [
                  createVNode("a", {
                    href: "#",
                    class: "block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"
                  }, "Your profile"),
                  createVNode("a", {
                    href: "#",
                    class: "block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"
                  }, "Settings"),
                  createVNode("a", {
                    href: "#",
                    class: "block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden"
                  }, "Sign out")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-mr-2 flex md:hidden"><button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"><span class="absolute -inset-0.5"></span><span class="sr-only">Open main menu</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden"><path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></div></div>`);
      _push(ssrRenderComponent(_component_el_disclosure, {
        id: "mobile-menu",
        hidden: "",
        class: "block md:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-1 px-2 pt-2 pb-3 sm:px-3"${_scopeId}><a href="#" aria-current="page" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"${_scopeId}>Dashboard</a><a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"${_scopeId}>Team</a><a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"${_scopeId}>Projects</a><a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"${_scopeId}>Calendar</a><a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"${_scopeId}>Reports</a></div><div class="border-t border-white/10 pt-4 pb-3"${_scopeId}><div class="flex items-center px-5"${_scopeId}><div class="shrink-0"${_scopeId}><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="size-10 rounded-full outline -outline-offset-1 outline-white/10"${_scopeId}></div><div class="ml-3"${_scopeId}><div class="text-base/5 font-medium text-white"${_scopeId}>Tom Cook</div><div class="text-sm font-medium text-gray-400"${_scopeId}>tom@example.com</div></div><button type="button" class="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"${_scopeId}><span class="absolute -inset-1.5"${_scopeId}></span><span class="sr-only"${_scopeId}>View notifications</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6"${_scopeId}><path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></button></div><div class="mt-3 space-y-1 px-2"${_scopeId}><a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"${_scopeId}>Your profile</a><a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"${_scopeId}>Settings</a><a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"${_scopeId}>Sign out</a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-1 px-2 pt-2 pb-3 sm:px-3" }, [
                createVNode("a", {
                  href: "#",
                  "aria-current": "page",
                  class: "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                }, "Dashboard"),
                createVNode("a", {
                  href: "#",
                  class: "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                }, "Team"),
                createVNode("a", {
                  href: "#",
                  class: "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                }, "Projects"),
                createVNode("a", {
                  href: "#",
                  class: "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                }, "Calendar"),
                createVNode("a", {
                  href: "#",
                  class: "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                }, "Reports")
              ]),
              createVNode("div", { class: "border-t border-white/10 pt-4 pb-3" }, [
                createVNode("div", { class: "flex items-center px-5" }, [
                  createVNode("div", { class: "shrink-0" }, [
                    createVNode("img", {
                      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                      alt: "",
                      class: "size-10 rounded-full outline -outline-offset-1 outline-white/10"
                    })
                  ]),
                  createVNode("div", { class: "ml-3" }, [
                    createVNode("div", { class: "text-base/5 font-medium text-white" }, "Tom Cook"),
                    createVNode("div", { class: "text-sm font-medium text-gray-400" }, "tom@example.com")
                  ]),
                  createVNode("button", {
                    type: "button",
                    class: "relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                  }, [
                    createVNode("span", { class: "absolute -inset-1.5" }),
                    createVNode("span", { class: "sr-only" }, "View notifications"),
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
                        d: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ])
                ]),
                createVNode("div", { class: "mt-3 space-y-1 px-2" }, [
                  createVNode("a", {
                    href: "#",
                    class: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                  }, "Your profile"),
                  createVNode("a", {
                    href: "#",
                    class: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                  }, "Settings"),
                  createVNode("a", {
                    href: "#",
                    class: "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                  }, "Sign out")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><header class="relative bg-white shadow-sm"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><h1 class="text-3xl font-bold tracking-tight text-gray-900">داشبورت</h1></div></header><main><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div></main></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/accounting/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
