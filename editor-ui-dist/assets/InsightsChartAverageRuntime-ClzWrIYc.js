import { Af as init_reactivity_esm_bundler, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, l as index, qd as defineComponent, uf as openBlock, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { UD as useI18n } from "./app-CfhiRDif.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-DroZbZ2b.js";
import { o as transformInsightsAverageRunTime } from "./insights.utils-DLiSCtiE.js";
import { t as smartDecimal } from "./smart-decimal-EivKoUgC.js";
import { r as Line } from "./dist-cPn5udnh.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-CoKoeSsy.js";
//#region ../../modules/insights/frontend/src/components/charts/InsightsChartAverageRuntime.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region ../../modules/insights/frontend/src/components/charts/InsightsChartAverageRuntime.vue
var InsightsChartAverageRuntime_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartAverageRuntime",
	props: {
		data: {},
		type: {},
		granularity: {},
		startDate: {},
		endDate: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const chartOptions = computed(() => generateLineChartOptions({ plugins: { tooltip: { callbacks: { label: (context) => {
			return `${context.dataset.label ?? ""} ${smartDecimal(context.parsed.y)}${INSIGHTS_UNIT_MAPPING[props.type](context.parsed.y)}`;
		} } } } }));
		const chartData = computed(() => {
			const labels = [];
			const data = [];
			for (const entry of props.data) {
				labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
				const value = transformInsightsAverageRunTime(entry.values.averageRunTime);
				data.push(value);
			}
			return {
				labels,
				datasets: [{
					label: i18n.baseText("insights.banner.title.averageRunTime"),
					data,
					cubicInterpolationMode: "monotone",
					fill: "origin",
					backgroundColor: (ctx) => generateLinearGradient(ctx.chart.ctx, 292),
					borderColor: "rgba(255, 64, 39, 1)"
				}]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Line), {
				"data-test-id": "insights-chart-average-runtime",
				data: chartData.value,
				options: chartOptions.value,
				plugins: [unref(index)]
			}, null, 8, [
				"data",
				"options",
				"plugins"
			]);
		};
	}
});
//#endregion
export { InsightsChartAverageRuntime_default as default };
