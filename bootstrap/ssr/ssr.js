import { createHeadManager, router, mergeDataIntoQueryString, shouldIntercept, setupProgress } from "@inertiajs/core";
import { ref, shallowRef, defineComponent, markRaw, h as h$1, computed, onMounted, onUnmounted, createSSRApp, reactive, watch } from "vue";
import { escape as escape$1, cloneDeep, isEqual } from "es-toolkit";
import { has, set, get } from "es-toolkit/compat";
import createServer from "@inertiajs/core/server";
import { renderToString } from "@vue/server-renderer";
import { createHead as createHead$1 } from "@unhead/vue";
import { polyfillAsVueUseHead } from "@unhead/vue/polyfill";
var remember = {
  created() {
    if (!this.$options.remember) {
      return;
    }
    if (Array.isArray(this.$options.remember)) {
      this.$options.remember = { data: this.$options.remember };
    }
    if (typeof this.$options.remember === "string") {
      this.$options.remember = { data: [this.$options.remember] };
    }
    if (typeof this.$options.remember.data === "string") {
      this.$options.remember = { data: [this.$options.remember.data] };
    }
    const rememberKey = this.$options.remember.key instanceof Function ? this.$options.remember.key.call(this) : this.$options.remember.key;
    const restored = router.restore(rememberKey);
    const rememberable = this.$options.remember.data.filter((key2) => {
      return !(this[key2] !== null && typeof this[key2] === "object" && this[key2].__rememberable === false);
    });
    const hasCallbacks = (key2) => {
      return this[key2] !== null && typeof this[key2] === "object" && typeof this[key2].__remember === "function" && typeof this[key2].__restore === "function";
    };
    rememberable.forEach((key2) => {
      if (this[key2] !== void 0 && restored !== void 0 && restored[key2] !== void 0) {
        hasCallbacks(key2) ? this[key2].__restore(restored[key2]) : this[key2] = restored[key2];
      }
      this.$watch(
        key2,
        () => {
          router.remember(
            rememberable.reduce(
              (data, key3) => ({
                ...data,
                [key3]: cloneDeep(hasCallbacks(key3) ? this[key3].__remember() : this[key3])
              }),
              {}
            ),
            rememberKey
          );
        },
        { immediate: true, deep: true }
      );
    });
  }
};
var remember_default = remember;
function useForm(rememberKeyOrData, maybeData) {
  const rememberKey = typeof rememberKeyOrData === "string" ? rememberKeyOrData : null;
  const data = (typeof rememberKeyOrData === "string" ? maybeData : rememberKeyOrData) ?? {};
  const restored = rememberKey ? router.restore(rememberKey) : null;
  let defaults = typeof data === "function" ? cloneDeep(data()) : cloneDeep(data);
  let cancelToken = null;
  let recentlySuccessfulTimeoutId = null;
  let transform = (data2) => data2;
  const form = reactive({
    ...restored ? restored.data : cloneDeep(defaults),
    isDirty: false,
    errors: restored ? restored.errors : {},
    hasErrors: false,
    processing: false,
    progress: null,
    wasSuccessful: false,
    recentlySuccessful: false,
    data() {
      return Object.keys(defaults).reduce((carry, key2) => {
        return set(carry, key2, get(this, key2));
      }, {});
    },
    transform(callback) {
      transform = callback;
      return this;
    },
    defaults(fieldOrFields, maybeValue) {
      if (typeof data === "function") {
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      }
      if (typeof fieldOrFields === "undefined") {
        defaults = cloneDeep(this.data());
        this.isDirty = false;
      } else {
        defaults = typeof fieldOrFields === "string" ? set(cloneDeep(defaults), fieldOrFields, maybeValue) : Object.assign({}, cloneDeep(defaults), fieldOrFields);
      }
      return this;
    },
    reset(...fields) {
      const resolvedData = typeof data === "function" ? cloneDeep(data()) : cloneDeep(defaults);
      const clonedData = cloneDeep(resolvedData);
      if (fields.length === 0) {
        defaults = clonedData;
        Object.assign(this, resolvedData);
      } else {
        fields.filter((key2) => has(clonedData, key2)).forEach((key2) => {
          set(defaults, key2, get(clonedData, key2));
          set(this, key2, get(resolvedData, key2));
        });
      }
      return this;
    },
    setError(fieldOrFields, maybeValue) {
      Object.assign(this.errors, typeof fieldOrFields === "string" ? { [fieldOrFields]: maybeValue } : fieldOrFields);
      this.hasErrors = Object.keys(this.errors).length > 0;
      return this;
    },
    clearErrors(...fields) {
      this.errors = Object.keys(this.errors).reduce(
        (carry, field) => ({
          ...carry,
          ...fields.length > 0 && !fields.includes(field) ? { [field]: this.errors[field] } : {}
        }),
        {}
      );
      this.hasErrors = Object.keys(this.errors).length > 0;
      return this;
    },
    resetAndClearErrors(...fields) {
      this.reset(...fields);
      this.clearErrors(...fields);
      return this;
    },
    submit(...args) {
      const objectPassed = typeof args[0] === "object";
      const method = objectPassed ? args[0].method : args[0];
      const url = objectPassed ? args[0].url : args[1];
      const options = (objectPassed ? args[1] : args[2]) ?? {};
      const data2 = transform(this.data());
      const _options = {
        ...options,
        onCancelToken: (token) => {
          cancelToken = token;
          if (options.onCancelToken) {
            return options.onCancelToken(token);
          }
        },
        onBefore: (visit) => {
          this.wasSuccessful = false;
          this.recentlySuccessful = false;
          clearTimeout(recentlySuccessfulTimeoutId);
          if (options.onBefore) {
            return options.onBefore(visit);
          }
        },
        onStart: (visit) => {
          this.processing = true;
          if (options.onStart) {
            return options.onStart(visit);
          }
        },
        onProgress: (event) => {
          this.progress = event;
          if (options.onProgress) {
            return options.onProgress(event);
          }
        },
        onSuccess: async (page2) => {
          this.processing = false;
          this.progress = null;
          this.clearErrors();
          this.wasSuccessful = true;
          this.recentlySuccessful = true;
          recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2e3);
          const onSuccess = options.onSuccess ? await options.onSuccess(page2) : null;
          defaults = cloneDeep(this.data());
          this.isDirty = false;
          return onSuccess;
        },
        onError: (errors) => {
          this.processing = false;
          this.progress = null;
          this.clearErrors().setError(errors);
          if (options.onError) {
            return options.onError(errors);
          }
        },
        onCancel: () => {
          this.processing = false;
          this.progress = null;
          if (options.onCancel) {
            return options.onCancel();
          }
        },
        onFinish: (visit) => {
          this.processing = false;
          this.progress = null;
          cancelToken = null;
          if (options.onFinish) {
            return options.onFinish(visit);
          }
        }
      };
      if (method === "delete") {
        router.delete(url, { ..._options, data: data2 });
      } else {
        router[method](url, data2, _options);
      }
    },
    get(url, options) {
      this.submit("get", url, options);
    },
    post(url, options) {
      this.submit("post", url, options);
    },
    put(url, options) {
      this.submit("put", url, options);
    },
    patch(url, options) {
      this.submit("patch", url, options);
    },
    delete(url, options) {
      this.submit("delete", url, options);
    },
    cancel() {
      if (cancelToken) {
        cancelToken.cancel();
      }
    },
    __rememberable: rememberKey === null,
    __remember() {
      return { data: this.data(), errors: this.errors };
    },
    __restore(restored2) {
      Object.assign(this, restored2.data);
      this.setError(restored2.errors);
    }
  });
  watch(
    form,
    (newValue) => {
      form.isDirty = !isEqual(form.data(), defaults);
      if (rememberKey) {
        router.remember(cloneDeep(newValue.__remember()), rememberKey);
      }
    },
    { immediate: true, deep: true }
  );
  return form;
}
var component = ref(null);
var page = ref(null);
var layout = shallowRef(null);
var key = ref(null);
var headManager = null;
var App = defineComponent({
  name: "Inertia",
  props: {
    initialPage: {
      type: Object,
      required: true
    },
    initialComponent: {
      type: Object,
      required: false
    },
    resolveComponent: {
      type: Function,
      required: false
    },
    titleCallback: {
      type: Function,
      required: false,
      default: (title) => title
    },
    onHeadUpdate: {
      type: Function,
      required: false,
      default: () => () => {
      }
    }
  },
  setup({ initialPage, initialComponent, resolveComponent, titleCallback, onHeadUpdate }) {
    component.value = initialComponent ? markRaw(initialComponent) : null;
    page.value = initialPage;
    key.value = null;
    const isServer = typeof window === "undefined";
    headManager = createHeadManager(isServer, titleCallback, onHeadUpdate);
    if (!isServer) {
      router.init({
        initialPage,
        resolveComponent,
        swapComponent: async (args) => {
          component.value = markRaw(args.component);
          page.value = args.page;
          key.value = args.preserveState ? key.value : Date.now();
        }
      });
      router.on("navigate", () => headManager.forceUpdate());
    }
    return () => {
      if (component.value) {
        component.value.inheritAttrs = !!component.value.inheritAttrs;
        const child = h$1(component.value, {
          ...page.value.props,
          key: key.value
        });
        if (layout.value) {
          component.value.layout = layout.value;
          layout.value = null;
        }
        if (component.value.layout) {
          if (typeof component.value.layout === "function") {
            return component.value.layout(h$1, child);
          }
          return (Array.isArray(component.value.layout) ? component.value.layout : [component.value.layout]).concat(child).reverse().reduce((child2, layout2) => {
            layout2.inheritAttrs = !!layout2.inheritAttrs;
            return h$1(layout2, { ...page.value.props }, () => child2);
          });
        }
        return child;
      }
    };
  }
});
var app_default = App;
var plugin = {
  install(app) {
    router.form = useForm;
    Object.defineProperty(app.config.globalProperties, "$inertia", { get: () => router });
    Object.defineProperty(app.config.globalProperties, "$page", { get: () => page.value });
    Object.defineProperty(app.config.globalProperties, "$headManager", { get: () => headManager });
    app.mixin(remember_default);
  }
};
function usePage() {
  return reactive({
    props: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.props;
    }),
    url: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.url;
    }),
    component: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.component;
    }),
    version: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.version;
    }),
    clearHistory: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.clearHistory;
    }),
    deferredProps: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.deferredProps;
    }),
    mergeProps: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.mergeProps;
    }),
    deepMergeProps: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.deepMergeProps;
    }),
    matchPropsOn: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.matchPropsOn;
    }),
    rememberedState: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.rememberedState;
    }),
    encryptHistory: computed(() => {
      var _a;
      return (_a = page.value) == null ? void 0 : _a.encryptHistory;
    })
  });
}
async function createInertiaApp({
  id = "app",
  resolve,
  setup,
  title,
  progress = {},
  page: page2,
  render
}) {
  const isServer = typeof window === "undefined";
  const el = isServer ? null : document.getElementById(id);
  const initialPage = page2 || JSON.parse(el.dataset.page);
  const resolveComponent = (name) => Promise.resolve(resolve(name)).then((module) => module.default || module);
  let head = [];
  const vueApp = await Promise.all([
    resolveComponent(initialPage.component),
    router.decryptHistory().catch(() => {
    })
  ]).then(([initialComponent]) => {
    return setup({
      el,
      App: app_default,
      props: {
        initialPage,
        initialComponent,
        resolveComponent,
        titleCallback: title,
        onHeadUpdate: isServer ? (elements) => head = elements : null
      },
      plugin
    });
  });
  if (!isServer && progress) {
    setupProgress(progress);
  }
  if (isServer) {
    const body = await render(
      createSSRApp({
        render: () => h$1("div", {
          id,
          "data-page": JSON.stringify(initialPage),
          innerHTML: vueApp ? render(vueApp) : ""
        })
      })
    );
    return { head, body };
  }
}
defineComponent({
  name: "Deferred",
  props: {
    data: {
      type: [String, Array],
      required: true
    }
  },
  render() {
    const keys = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
    if (!this.$slots.fallback) {
      throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
    }
    return keys.every((key2) => this.$page.props[key2] !== void 0) ? this.$slots.default() : this.$slots.fallback();
  }
});
var Head = defineComponent({
  props: {
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      provider: this.$headManager.createProvider()
    };
  },
  beforeUnmount() {
    this.provider.disconnect();
  },
  methods: {
    isUnaryTag(node) {
      return [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ].indexOf(node.type) > -1;
    },
    renderTagStart(node) {
      node.props = node.props || {};
      node.props.inertia = node.props["head-key"] !== void 0 ? node.props["head-key"] : "";
      const attrs = Object.keys(node.props).reduce((carry, name) => {
        const value = node.props[name];
        if (["key", "head-key"].includes(name)) {
          return carry;
        } else if (value === "") {
          return carry + ` ${name}`;
        } else {
          return carry + ` ${name}="${escape$1(value)}"`;
        }
      }, "");
      return `<${node.type}${attrs}>`;
    },
    renderTagChildren(node) {
      return typeof node.children === "string" ? node.children : node.children.reduce((html, child) => html + this.renderTag(child), "");
    },
    isFunctionNode(node) {
      return typeof node.type === "function";
    },
    isComponentNode(node) {
      return typeof node.type === "object";
    },
    isCommentNode(node) {
      return /(comment|cmt)/i.test(node.type.toString());
    },
    isFragmentNode(node) {
      return /(fragment|fgt|symbol\(\))/i.test(node.type.toString());
    },
    isTextNode(node) {
      return /(text|txt)/i.test(node.type.toString());
    },
    renderTag(node) {
      if (this.isTextNode(node)) {
        return node.children;
      } else if (this.isFragmentNode(node)) {
        return "";
      } else if (this.isCommentNode(node)) {
        return "";
      }
      let html = this.renderTagStart(node);
      if (node.children) {
        html += this.renderTagChildren(node);
      }
      if (!this.isUnaryTag(node)) {
        html += `</${node.type}>`;
      }
      return html;
    },
    addTitleElement(elements) {
      if (this.title && !elements.find((tag) => tag.startsWith("<title"))) {
        elements.push(`<title inertia>${this.title}</title>`);
      }
      return elements;
    },
    renderNodes(nodes) {
      return this.addTitleElement(
        nodes.flatMap((node) => this.resolveNode(node)).map((node) => this.renderTag(node)).filter((node) => node)
      );
    },
    resolveNode(node) {
      if (this.isFunctionNode(node)) {
        return this.resolveNode(node.type());
      } else if (this.isComponentNode(node)) {
        console.warn(`Using components in the <Head> component is not supported.`);
        return [];
      } else if (this.isTextNode(node) && node.children) {
        return node;
      } else if (this.isFragmentNode(node) && node.children) {
        return node.children.flatMap((child) => this.resolveNode(child));
      } else if (this.isCommentNode(node)) {
        return [];
      } else {
        return node;
      }
    }
  },
  render() {
    this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
  }
});
var head_default = Head;
var Link = defineComponent({
  name: "Link",
  props: {
    as: {
      type: String,
      default: "a"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    href: {
      type: [String, Object],
      required: true
    },
    method: {
      type: String,
      default: "get"
    },
    replace: {
      type: Boolean,
      default: false
    },
    preserveScroll: {
      type: Boolean,
      default: false
    },
    preserveState: {
      type: Boolean,
      default: null
    },
    only: {
      type: Array,
      default: () => []
    },
    except: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    async: {
      type: Boolean,
      default: false
    },
    prefetch: {
      type: [Boolean, String, Array],
      default: false
    },
    cacheFor: {
      type: [Number, String, Array],
      default: 0
    },
    onStart: {
      type: Function,
      default: (_visit) => {
      }
    },
    onProgress: {
      type: Function,
      default: () => {
      }
    },
    onFinish: {
      type: Function,
      default: () => {
      }
    },
    onBefore: {
      type: Function,
      default: () => {
      }
    },
    onCancel: {
      type: Function,
      default: () => {
      }
    },
    onSuccess: {
      type: Function,
      default: () => {
      }
    },
    onError: {
      type: Function,
      default: () => {
      }
    },
    onCancelToken: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(props, { slots, attrs }) {
    const inFlightCount = ref(0);
    const hoverTimeout = ref(null);
    const prefetchModes = computed(() => {
      if (props.prefetch === true) {
        return ["hover"];
      }
      if (props.prefetch === false) {
        return [];
      }
      if (Array.isArray(props.prefetch)) {
        return props.prefetch;
      }
      return [props.prefetch];
    });
    const cacheForValue = computed(() => {
      if (props.cacheFor !== 0) {
        return props.cacheFor;
      }
      if (prefetchModes.value.length === 1 && prefetchModes.value[0] === "click") {
        return 0;
      }
      return 3e4;
    });
    onMounted(() => {
      if (prefetchModes.value.includes("mount")) {
        prefetch();
      }
    });
    onUnmounted(() => {
      clearTimeout(hoverTimeout.value);
    });
    const method = computed(
      () => typeof props.href === "object" ? props.href.method : props.method.toLowerCase()
    );
    const as = computed(() => method.value !== "get" ? "button" : props.as.toLowerCase());
    const mergeDataArray = computed(
      () => mergeDataIntoQueryString(
        method.value,
        typeof props.href === "object" ? props.href.url : props.href || "",
        props.data,
        props.queryStringArrayFormat
      )
    );
    const href = computed(() => mergeDataArray.value[0]);
    const data = computed(() => mergeDataArray.value[1]);
    const elProps = computed(() => ({
      a: { href: href.value },
      button: { type: "button" }
    }));
    const baseParams = computed(() => ({
      data: data.value,
      method: method.value,
      replace: props.replace,
      preserveScroll: props.preserveScroll,
      preserveState: props.preserveState ?? method.value !== "get",
      only: props.only,
      except: props.except,
      headers: props.headers,
      async: props.async
    }));
    const visitParams = computed(() => ({
      ...baseParams.value,
      onCancelToken: props.onCancelToken,
      onBefore: props.onBefore,
      onStart: (event) => {
        inFlightCount.value++;
        props.onStart(event);
      },
      onProgress: props.onProgress,
      onFinish: (event) => {
        inFlightCount.value--;
        props.onFinish(event);
      },
      onCancel: props.onCancel,
      onSuccess: props.onSuccess,
      onError: props.onError
    }));
    const prefetch = () => {
      router.prefetch(href.value, baseParams.value, { cacheFor: cacheForValue.value });
    };
    const regularEvents = {
      onClick: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          router.visit(href.value, visitParams.value);
        }
      }
    };
    const prefetchHoverEvents = {
      onMouseenter: () => {
        hoverTimeout.value = setTimeout(() => {
          prefetch();
        }, 75);
      },
      onMouseleave: () => {
        clearTimeout(hoverTimeout.value);
      },
      onClick: regularEvents.onClick
    };
    const prefetchClickEvents = {
      onMousedown: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          prefetch();
        }
      },
      onMouseup: (event) => {
        event.preventDefault();
        router.visit(href.value, visitParams.value);
      },
      onClick: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
        }
      }
    };
    return () => {
      return h$1(
        as.value,
        {
          ...attrs,
          ...elProps.value[as.value] || {},
          "data-loading": inFlightCount.value > 0 ? "" : void 0,
          ...(() => {
            if (prefetchModes.value.includes("hover")) {
              return prefetchHoverEvents;
            }
            if (prefetchModes.value.includes("click")) {
              return prefetchClickEvents;
            }
            return regularEvents;
          })()
        },
        slots
      );
    };
  }
});
var link_default = Link;
defineComponent({
  name: "WhenVisible",
  props: {
    data: {
      type: [String, Array]
    },
    params: {
      type: Object
    },
    buffer: {
      type: Number,
      default: 0
    },
    as: {
      type: String,
      default: "div"
    },
    always: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loaded: false,
      fetching: false,
      observer: null
    };
  },
  unmounted() {
    var _a;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          return;
        }
        if (!this.$props.always) {
          this.observer.disconnect();
        }
        if (this.fetching) {
          return;
        }
        this.fetching = true;
        const reloadParams = this.getReloadParams();
        router.reload({
          ...reloadParams,
          onStart: (e2) => {
            var _a;
            this.fetching = true;
            (_a = reloadParams.onStart) == null ? void 0 : _a.call(reloadParams, e2);
          },
          onFinish: (e2) => {
            var _a;
            this.loaded = true;
            this.fetching = false;
            (_a = reloadParams.onFinish) == null ? void 0 : _a.call(reloadParams, e2);
          }
        });
      },
      {
        rootMargin: `${this.$props.buffer}px`
      }
    );
    this.observer.observe(this.$el.nextSibling);
  },
  methods: {
    getReloadParams() {
      if (this.$props.data) {
        return {
          only: Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data]
        };
      }
      if (!this.$props.params) {
        throw new Error("You must provide either a `data` or `params` prop.");
      }
      return this.$props.params;
    }
  },
  render() {
    const els = [];
    if (this.$props.always || !this.loaded) {
      els.push(h$1(this.$props.as));
    }
    if (!this.loaded) {
      els.push(this.$slots.fallback ? this.$slots.fallback() : null);
    } else if (this.$slots.default) {
      els.push(this.$slots.default());
    }
    return els;
  }
});
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page2 = pages[p2];
    if (typeof page2 === "undefined") {
      continue;
    }
    return typeof page2 === "function" ? page2() : page2;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) ({}).hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(null, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738" }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, g = Date.prototype.toISOString, b = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: b, formatter: o.formatters[b], indices: false, serializeDate: function(t4) {
  return g.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !b2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = b2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && b2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", R2 = 0; R2 < O2.length; ++R2) E2 += (0 === R2 ? "" : ",") + g2(u2(O2[R2], v.encoder, m2, "value", y2));
        return [g2($2) + "=" + E2];
      }
      return [g2($2) + "=" + g2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [g2(r2) + "=" + g2(String(w2))];
  }
  var S2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) S2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) S2 = a2;
  else {
    var N2 = Object.keys(w2);
    S2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < S2.length; ++T2) {
    var k = S2[T2], C = "object" == typeof k && void 0 !== k.value ? k.value : w2[k];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k) : r2 : r2 + (c2 ? "." + k : "[" + k + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, g2, b2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, R = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = R(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    var e2;
    if (!this.definition.methods.includes("GET")) return false;
    const r2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i3 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, o2] = t4.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${r2}/?$`).exec(n2)) ? e2 : new RegExp(`^${r2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t5 in i2.groups) i2.groups[t5] = "string" == typeof i2.groups[t5] ? decodeURIComponent(i2.groups[t5]) : i2.groups[t5];
      return { params: i2.groups, query: S(o2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return this.t.routes.hasOwnProperty(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
function createHead(initHeadObject, options) {
  const unhead = createHead$1({});
  const legacyHead = polyfillAsVueUseHead(unhead);
  return legacyHead;
}
const appName = "فروشگاه مدیا | قالب سایت، محصولات دیجیتال، طراحی سایت ،حسابداری،استخدام، فریلنسر حرفه‌ای";
createServer(
  (page2) => createInertiaApp({
    page: page2,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-VFTDh05N.js"), "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-CouwZXxb.js"), "./Pages/Auth/Login2.vue": () => import("./assets/Login2-Di2RKf-L.js"), "./Pages/Auth/Register2.vue": () => import("./assets/Register2-BItv5lIS.js"), "./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-JmNrtu4L.js"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-DMBULb-R.js"), "./Pages/Guest/Blog-index.vue": () => import("./assets/Blog-index-CctaU9lz.js"), "./Pages/Guest/Blog-show.vue": () => import("./assets/Blog-show-B5dyER_4.js"), "./Pages/Guest/Cafe-index.vue": () => import("./assets/Cafe-index-DEllcBZB.js"), "./Pages/Guest/Cafe-show.vue": () => import("./assets/Cafe-show-B_fuYKps.js"), "./Pages/Guest/Faq.vue": () => import("./assets/Faq-CNDW1qKx.js"), "./Pages/Guest/Footer2.vue": () => import("./assets/Footer2-vTePDDgz.js"), "./Pages/Guest/Header2.vue": () => import("./assets/Header2-F5OjGsRQ.js"), "./Pages/Guest/Privacy.vue": () => import("./assets/Privacy-Dpesdzmi.js"), "./Pages/Guest/Terms-Conditions.vue": () => import("./assets/Terms-Conditions-BnEbtsxy.js"), "./Pages/Guest/Terms-Seller.vue": () => import("./assets/Terms-Seller-8arOuClL.js"), "./Pages/Guest/about-hesabdari.vue": () => import("./assets/about-hesabdari-Dl9k6q8_.js"), "./Pages/Guest/about.vue": () => import("./assets/about-Dh33Yvp4.js"), "./Pages/Guest/accounting-index.vue": () => import("./assets/accounting-index-DONVUX2l.js"), "./Pages/Guest/charts.vue": () => import("./assets/charts-DbDad6W4.js"), "./Pages/Guest/form-create.vue": () => import("./assets/form-create-BCcTe-sB.js"), "./Pages/Guest/form-index.vue": () => import("./assets/form-index-DL3Gs4rg.js"), "./Pages/Guest/form-show.vue": () => import("./assets/form-show-CRRs0EqV.js"), "./Pages/Guest/guest-Profile-show.vue": () => import("./assets/guest-Profile-show-CKuXIJdz.js"), "./Pages/Guest/index.vue": () => import("./assets/index-CCMRlBw3.js"), "./Pages/Guest/js.vue": () => import("./assets/js-BWgz1NVI.js"), "./Pages/Guest/project-index.vue": () => import("./assets/project-index-D_t8l70I.js"), "./Pages/Guest/project-show.vue": () => import("./assets/project-show-BHX-91RV.js"), "./Pages/Guest/shop-cart.vue": () => import("./assets/shop-cart-pGRRjqSL.js"), "./Pages/Guest/shop-checkout.vue": () => import("./assets/shop-checkout-D-hRUMar.js"), "./Pages/Guest/website-design-index.vue": () => import("./assets/website-design-index-BMv9Q8bn.js"), "./Pages/Guest/website-design-show.vue": () => import("./assets/website-design-show-Cct61ziT.js"), "./Pages/Guest/website-templates-create.vue": () => import("./assets/website-templates-create-D8n7qxf0.js"), "./Pages/Guest/website-templates-index.vue": () => import("./assets/website-templates-index-DUG8WYYf.js"), "./Pages/Guest/website-templates-show.vue": () => import("./assets/website-templates-show-Cj9pol8Y.js"), "./Pages/Users/Admin/Cafe-Net/cafe-net-create.vue": () => import("./assets/cafe-net-create-DXrCKDcO.js"), "./Pages/Users/Admin/Cafe-Net/cafe-net-index.vue": () => import("./assets/cafe-net-index-B13yDdvj.js"), "./Pages/Users/Admin/Cafe-Net/cafe-net-show.vue": () => import("./assets/cafe-net-show-CAxanUpY.js"), "./Pages/Users/Admin/Comment/comment-edit.vue": () => import("./assets/comment-edit-Csy2IBCR.js"), "./Pages/Users/Admin/Comment/comment-index.vue": () => import("./assets/comment-index-Bx8HXaO6.js"), "./Pages/Users/Admin/Company/company-create.vue": () => import("./assets/company-create-DlGA_UEk.js"), "./Pages/Users/Admin/Company/company-edit.vue": () => import("./assets/company-edit-DgIXUPSv.js"), "./Pages/Users/Admin/Company/company-index.vue": () => import("./assets/company-index-CJnlXjpv.js"), "./Pages/Users/Admin/Contract/Contract-index.vue": () => import("./assets/Contract-index-D_OOWQud.js"), "./Pages/Users/Admin/Contract/Contract-show.vue": () => import("./assets/Contract-show-BCEVqPBY.js"), "./Pages/Users/Admin/Coupon/coupon-create.vue": () => import("./assets/coupon-create-2_r_MXo0.js"), "./Pages/Users/Admin/Coupon/coupon-index.vue": () => import("./assets/coupon-index-CfFsD2HM.js"), "./Pages/Users/Admin/Deposit/Deposit-create.vue": () => import("./assets/Deposit-create-BiZeUewj.js"), "./Pages/Users/Admin/Deposit/Deposit-edit.vue": () => import("./assets/Deposit-edit-CajXhUZZ.js"), "./Pages/Users/Admin/Deposit/Deposit-index.vue": () => import("./assets/Deposit-index-DzFMQffI.js"), "./Pages/Users/Admin/Discount/discount-create.vue": () => import("./assets/discount-create-BE842KMo.js"), "./Pages/Users/Admin/Discount/discount-index.vue": () => import("./assets/discount-index-BUnvu1T3.js"), "./Pages/Users/Admin/Discount/discount-show.vue": () => import("./assets/discount-show-BbXroKdL.js"), "./Pages/Users/Admin/Network/network-show.vue": () => import("./assets/network-show-DQBEABCF.js"), "./Pages/Users/Admin/Newsletter/Newsletter-create.vue": () => import("./assets/Newsletter-create-CoYT_9Sv.js"), "./Pages/Users/Admin/Newsletter/Newsletter-edit.vue": () => import("./assets/Newsletter-edit-B-gVGXGG.js"), "./Pages/Users/Admin/Newsletter/Newsletter-index.vue": () => import("./assets/Newsletter-index-CurrFE1z.js"), "./Pages/Users/Admin/Payment/Payment-create.vue": () => import("./assets/Payment-create-BDWu7lg9.js"), "./Pages/Users/Admin/Payment/Payment-edit.vue": () => import("./assets/Payment-edit-CA9ZZu0Z.js"), "./Pages/Users/Admin/Payment/Payment-index.vue": () => import("./assets/Payment-index-udwuuG1K.js"), "./Pages/Users/Admin/Payment/bank-index.vue": () => import("./assets/bank-index-Bd0-Ylg1.js"), "./Pages/Users/Admin/Payment/bank-show.vue": () => import("./assets/bank-show-BQ7sBWbr.js"), "./Pages/Users/Admin/Product/Product-edit.vue": () => import("./assets/Product-edit-C3fbDgRT.js"), "./Pages/Users/Admin/Product/Product-index.vue": () => import("./assets/Product-index-4YV3xq8I.js"), "./Pages/Users/Admin/Profile/Identityuser-show.vue": () => import("./assets/Identityuser-show-DAPQxr23.js"), "./Pages/Users/Admin/Profile/Profile-edit.vue": () => import("./assets/Profile-edit-CffaXzVS.js"), "./Pages/Users/Admin/Profile/Profile-index.vue": () => import("./assets/Profile-index-tJApxxSH.js"), "./Pages/Users/Admin/Profile/Profile-show.vue": () => import("./assets/Profile-show-ChHU3Ry0.js"), "./Pages/Users/Admin/Profile/sikll-show.vue": () => import("./assets/sikll-show-DCZHOcZf.js"), "./Pages/Users/Admin/Profile/user-edit.vue": () => import("./assets/user-edit-Ch5xbiqY.js"), "./Pages/Users/Admin/Public/Bankname-create.vue": () => import("./assets/Bankname-create-20spXeMM.js"), "./Pages/Users/Admin/Public/Bankname-edit.vue": () => import("./assets/Bankname-edit-C3o4PuLj.js"), "./Pages/Users/Admin/Public/Bankname-index.vue": () => import("./assets/Bankname-index-CxLwV8yR.js"), "./Pages/Users/Admin/Public/Blog-create.vue": () => import("./assets/Blog-create-Z86ywSAH.js"), "./Pages/Users/Admin/Public/Blog-index.vue": () => import("./assets/Blog-index-g-ty2FBV.js"), "./Pages/Users/Admin/Public/Blog-show.vue": () => import("./assets/Blog-show-B2dftNOx.js"), "./Pages/Users/Admin/Public/Page-create.vue": () => import("./assets/Page-create-DE77TRKY.js"), "./Pages/Users/Admin/Public/Page-index.vue": () => import("./assets/Page-index-Bj6wUu9o.js"), "./Pages/Users/Admin/Public/Page-show.vue": () => import("./assets/Page-show-Cz8r2Oqg.js"), "./Pages/Users/Admin/Public/description-create.vue": () => import("./assets/description-create-Dw9Eup4Y.js"), "./Pages/Users/Admin/Public/description-index.vue": () => import("./assets/description-index-B2YnbqGW.js"), "./Pages/Users/Admin/Public/description-show.vue": () => import("./assets/description-show-pYccEA1_.js"), "./Pages/Users/Admin/Public/installment-create.vue": () => import("./assets/installment-create-HM6I3bKa.js"), "./Pages/Users/Admin/Public/installment-index.vue": () => import("./assets/installment-index-BtYK5ykd.js"), "./Pages/Users/Admin/Public/installment-show.vue": () => import("./assets/installment-show-DQmWYNr0.js"), "./Pages/Users/Admin/Public/menu-create.vue": () => import("./assets/menu-create-BRHuRHg2.js"), "./Pages/Users/Admin/Public/menu-index.vue": () => import("./assets/menu-index-CKLvbcme.js"), "./Pages/Users/Admin/Public/menu-show.vue": () => import("./assets/menu-show-CUz4xzqE.js"), "./Pages/Users/Admin/Public/namad-create.vue": () => import("./assets/namad-create-D6vO2FgY.js"), "./Pages/Users/Admin/Public/namad-index.vue": () => import("./assets/namad-index-CLsOCNE1.js"), "./Pages/Users/Admin/Public/namad-show.vue": () => import("./assets/namad-show-B_yY5joH.js"), "./Pages/Users/Admin/Public/route-create.vue": () => import("./assets/route-create-DVy9JcEI.js"), "./Pages/Users/Admin/Public/route-index.vue": () => import("./assets/route-index-Bv06bH6K.js"), "./Pages/Users/Admin/Public/route-show.vue": () => import("./assets/route-show-Bx1TSUcP.js"), "./Pages/Users/Admin/Public/section-create.vue": () => import("./assets/section-create-C5q_k1MP.js"), "./Pages/Users/Admin/Public/section-index.vue": () => import("./assets/section-index-BQrWU47w.js"), "./Pages/Users/Admin/Public/section-show.vue": () => import("./assets/section-show-Btrnmx43.js"), "./Pages/Users/Admin/Public/social-create.vue": () => import("./assets/social-create-BxwawlNC.js"), "./Pages/Users/Admin/Public/social-edit.vue": () => import("./assets/social-edit-DA-08GzG.js"), "./Pages/Users/Admin/Public/social-index.vue": () => import("./assets/social-index-CklqOTA1.js"), "./Pages/Users/Admin/Public/social-show.vue": () => import("./assets/social-show-ojITXqyh.js"), "./Pages/Users/Admin/Session/Session-index.vue": () => import("./assets/Session-index-CsKFzumR.js"), "./Pages/Users/Admin/Support/support-create.vue": () => import("./assets/support-create-CDzjby71.js"), "./Pages/Users/Admin/Support/support-index.vue": () => import("./assets/support-index-BzAPfNaH.js"), "./Pages/Users/Admin/Support/support-reply.vue": () => import("./assets/support-reply-DqUh5-As.js"), "./Pages/Users/Admin/Support/support-show.vue": () => import("./assets/support-show-BKd-8kAj.js"), "./Pages/Users/Admin/Tarahi/Tarahi-create.vue": () => import("./assets/Tarahi-create-BxL4cAvH.js"), "./Pages/Users/Admin/Tarahi/Tarahi-index.vue": () => import("./assets/Tarahi-index-DSMwt9hn.js"), "./Pages/Users/Admin/Tarahi/Tarahi-show.vue": () => import("./assets/Tarahi-show-DCrsC1lx.js"), "./Pages/Users/Admin/Web/web-create.vue": () => import("./assets/web-create-CtOSxaHL.js"), "./Pages/Users/Admin/Web/web-index.vue": () => import("./assets/web-index-Bn-iz6fO.js"), "./Pages/Users/Admin/Web/web-show.vue": () => import("./assets/web-show-CIKO-m32.js"), "./Pages/Users/Buyer/Bank/bank-create.vue": () => import("./assets/bank-create-C7b5O6Cp.js"), "./Pages/Users/Buyer/Bank/bank-index.vue": () => import("./assets/bank-index-BhS5iL-n.js"), "./Pages/Users/Buyer/Cart/cart-index.vue": () => import("./assets/cart-index-VXwUN1gv.js"), "./Pages/Users/Buyer/Comment/comment-index.vue": () => import("./assets/comment-index-BwCFRStp.js"), "./Pages/Users/Buyer/Dashboard.vue": () => import("./assets/Dashboard-CjuawJl-.js"), "./Pages/Users/Buyer/Download/Link-create.vue": () => import("./assets/Link-create-BWIteB4q.js"), "./Pages/Users/Buyer/Download/download-show.vue": () => import("./assets/download-show-B44TtUgh.js"), "./Pages/Users/Buyer/Factor/factor-show2.vue": () => import("./assets/factor-show2-DUnf6BwL.js"), "./Pages/Users/Buyer/Favorite/favorite-index.vue": () => import("./assets/favorite-index-D-HyFrcw.js"), "./Pages/Users/Buyer/Mali/payment-create.vue": () => import("./assets/payment-create-WXOPM5kR.js"), "./Pages/Users/Buyer/Mali/payment-edit.vue": () => import("./assets/payment-edit-Ba1l03vE.js"), "./Pages/Users/Buyer/Mali/payment-index.vue": () => import("./assets/payment-index-Dxri2kO6.js"), "./Pages/Users/Buyer/Network/network-index.vue": () => import("./assets/network-index-CtUxIc_W.js"), "./Pages/Users/Buyer/Order/order-index.vue": () => import("./assets/order-index-BCUaBpY7.js"), "./Pages/Users/Buyer/Products/Products-edit.vue": () => import("./assets/Products-edit-BGVd6WTb.js"), "./Pages/Users/Buyer/Profile/Identityuser-index.vue": () => import("./assets/Identityuser-index-uU1mObQw.js"), "./Pages/Users/Buyer/Profile/Profileuser-show.vue": () => import("./assets/Profileuser-show-BBhEw8MQ.js"), "./Pages/Users/Buyer/Profile/profile-index.vue": () => import("./assets/profile-index-CSE8xPsy.js"), "./Pages/Users/Buyer/Profile/sikll-index.vue": () => import("./assets/sikll-index-UPlJp5lG.js"), "./Pages/Users/Buyer/Profile/social-index.vue": () => import("./assets/social-index-CZT8HE6c.js"), "./Pages/Users/Buyer/Support/support-create.vue": () => import("./assets/support-create-fvyyuh-U.js"), "./Pages/Users/Buyer/Support/support-index.vue": () => import("./assets/support-index-CFFi4bT0.js"), "./Pages/Users/Buyer/Support/support-reply.vue": () => import("./assets/support-reply-V_oIEuS2.js"), "./Pages/Users/Buyer/Support/support-show.vue": () => import("./assets/support-show-BBZ2MMGy.js"), "./Pages/Users/Buyer/Tarahi/Req-Tarahi-show.vue": () => import("./assets/Req-Tarahi-show-Qg6OxUJE.js"), "./Pages/Users/Buyer/Tarahi/Tarahi-index.vue": () => import("./assets/Tarahi-index-DsXYOANX.js"), "./Pages/Users/Buyer/Tarahi/Tarahi-show.vue": () => import("./assets/Tarahi-show-Bw4Uj_w0.js"), "./Pages/Users/Buyer/Web/web-show.vue": () => import("./assets/web-show-Cyzou6LD.js"), "./Pages/Users/Buyer/footer.vue": () => import("./assets/footer-BmA7fAd4.js"), "./Pages/Users/Buyer/header.vue": () => import("./assets/header-BJVl8Wou.js"), "./Pages/Users/Designer/Tarahi/Tarahi-edit.vue": () => import("./assets/Tarahi-edit-CFwz0aY_.js"), "./Pages/Users/Designer/Tarahi/Tarahi-index.vue": () => import("./assets/Tarahi-index-JEp3S2ay.js"), "./Pages/Users/Designer/Tarahi/Tarahi-show.vue": () => import("./assets/Tarahi-show-DMADmaKj.js"), "./Pages/Users/Designer/Tarahi/reqDesignerTarahi-edit.vue": () => import("./assets/reqDesignerTarahi-edit-C1KpfCtc.js"), "./Pages/Users/Designer/Tarahi/reqDesignerTarahi-index.vue": () => import("./assets/reqDesignerTarahi-index-C25h7UDH.js"), "./Pages/Users/Modir/Order/order-index.vue": () => import("./assets/order-index-BnFGlNma.js"), "./Pages/Users/Modir/Order/order-show.vue": () => import("./assets/order-show-CKLl7JIT.js"), "./Pages/Users/Modir/Public/dataBase-index.vue": () => import("./assets/dataBase-index-BVid7bwk.js"), "./Pages/Users/Modir/Public/dataBase-show.vue": () => import("./assets/dataBase-show-BaTs073w.js"), "./Pages/Users/Modir/User/user-index.vue": () => import("./assets/user-index-zAv9VFTg.js"), "./Pages/Users/Modir/User/user-show.vue": () => import("./assets/user-show-DnVDtl-0.js"), "./Pages/Users/Seller/Discount/discount-create.vue": () => import("./assets/discount-create-BtVw54AG.js"), "./Pages/Users/Seller/Discount/discount-index.vue": () => import("./assets/discount-index-DJ1vKz3W.js"), "./Pages/Users/Seller/Discount/discount-show.vue": () => import("./assets/discount-show-trmWz0KQ.js"), "./Pages/Users/Seller/Order/order-index.vue": () => import("./assets/order-index-D_bbF6kj.js"), "./Pages/Users/Seller/Order/order-show.vue": () => import("./assets/order-show-gM7YnOZI.js"), "./Pages/Users/Seller/Product/product-create.vue": () => import("./assets/product-create-Dd7y4fOl.js"), "./Pages/Users/Seller/Product/product-edit.vue": () => import("./assets/product-edit-D-2WzT7W.js"), "./Pages/Users/Seller/Product/product-index.vue": () => import("./assets/product-index-GH-2PhXf.js"), "./Pages/Users/Seller/Product/product-show.vue": () => import("./assets/product-show-BtBLUXY6.js"), "./Pages/Users/Seller/Product/product-update.vue": () => import("./assets/product-update-DXK31kXX.js"), "./Pages/Users/Seller/Support/support-index.vue": () => import("./assets/support-index-yvWKakp3.js"), "./Pages/Users/Seller/Support/support-reply.vue": () => import("./assets/support-reply-CW62fbpT.js"), "./Pages/Users/Seller/Support/support-show.vue": () => import("./assets/support-show-BJJcqq1m.js"), "./Pages/accounting/index.vue": () => import("./assets/index-DkCyB51B.js") })),
    setup({ App: App2, props, plugin: plugin2 }) {
      const head = createHead();
      const app = createSSRApp({ render: () => h$1(App2, props) });
      const ziggyConfig = {
        ...page2.props.ziggy,
        location: new URL(page2.props.ziggy.location)
      };
      const route = (name, params, absolute) => T(name, params, absolute, ziggyConfig);
      app.config.globalProperties.route = route;
      if (typeof window === "undefined") {
        global.route = route;
      }
      app.use(plugin2);
      app.use(head);
      return app;
    }
  })
);
export {
  usePage as a,
  head_default as h,
  link_default as l,
  useForm as u
};
