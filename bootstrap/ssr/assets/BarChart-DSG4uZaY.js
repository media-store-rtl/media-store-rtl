import { Bar as Bar$1 } from "vue-chartjs";
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Filler } from "chart.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Filler);
const _sfc_main = {
  name: "BarChart",
  components: { Bar: Bar$1 },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }]
      },
      chartOptions: {
        responsive: true
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Bar = resolveComponent("Bar");
  _push(ssrRenderComponent(_component_Bar, mergeProps({
    id: "myChart",
    options: $data.chartOptions,
    data: $data.chartData
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BarChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Bar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Bar as B
};
