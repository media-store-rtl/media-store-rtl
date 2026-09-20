import { ref, onMounted, watch, onBeforeUnmount, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Editor",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: String, default: "" },
    placeholder: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editorId = `tiny-${Math.random().toString(36).slice(2)}`;
    let tinymce;
    const editorRef = ref(null);
    onMounted(async () => {
      const tinymceModule = await import("tinymce");
      tinymce = tinymceModule.default;
      await import("tinymce/icons/default/index.js");
      await import("tinymce/themes/silver/index.js");
      await import("tinymce/models/dom/index.js");
      await Promise.resolve({         });
      await import("tinymce/plugins/link/index.js");
      await import("tinymce/plugins/table/index.js");
      await import("tinymce/plugins/code/index.js");
      tinymce.init({
        selector: `#${editorId}`,
        plugins: "link table code",
        toolbar: "undo redo | styles | bold italic | link table | code | ltr rtl",
        skin: false,
        content_css: false,
        branding: false,
        promotion: false,
        menubar: false,
        // استایل محتوا
        content_style: `
      body { direction: rtl; text-align: right; font-family: 'Vazir', sans-serif; }
    `,
        setup(editor) {
          editorRef.value = editor;
          editor.on("init", () => {
            editor.setContent(props.modelValue || "");
          });
          const updateParent = () => {
            const html = editor.getContent();
            emit("update:modelValue", html);
          };
          editor.on("input", updateParent);
          editor.on("change", updateParent);
          editor.on("keyup", updateParent);
        }
      });
    });
    watch(
      () => props.modelValue,
      (val) => {
        const ed = editorRef.value;
        if (ed) {
          const current = ed.getContent();
          if ((val || "") !== current) {
            ed.setContent(val || "");
          }
        }
      }
    );
    onBeforeUnmount(() => {
      if (tinymce && editorRef.value) {
        tinymce.remove(editorRef.value);
        editorRef.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
        id: editorId,
        placeholder: __props.placeholder
      }, _attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
