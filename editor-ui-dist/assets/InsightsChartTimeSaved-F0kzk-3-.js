import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Jd as defineComponent, Jf as unref, Rd as computed, df as openBlock, jf as init_reactivity_esm_bundler, l as index } from "./vendor-AGzaQJYe.js";
import { qO as useI18n } from "./app-MbtXRI_F.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-QV-IYBp8.js";
import { l as transformInsightsTimeSaved } from "./insights.utils-D1leSME7.js";
import { r as Line } from "./dist-wXiGDNcn.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-z4BfV_Sd.js";
//#region ../../modules/insights/frontend/src/components/charts/InsightsChartTimeSaved.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region ../../modules/insights/frontend/src/components/charts/InsightsChartTimeSaved.vue
var InsightsChartTimeSaved_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartTimeSaved",
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
		const chartOptions = computed(() => generateLineChartOptions({
			plugins: { tooltip: { callbacks: { label: (context) => {
				const label = context.dataset.label ?? "";
				const value = Number(context.parsed.y);
				return `${label} ${transformInsightsTimeSaved(value).toLocaleString("en-US")}${INSIGHTS_UNIT_MAPPING[props.type](value)}`;
			} } } },
			scales: { y: { ticks: { callback(tickValue) {
				return transformInsightsTimeSaved(Number(tickValue));
			} } } }
		}));
		const chartData = computed(() => {
			const labels = [];
			const data = [];
			for (const entry of props.data) {
				labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
				data.push(entry.values.timeSaved);
			}
			return {
				labels,
				datasets: [{
					label: i18n.baseText("insights.banner.title.timeSaved"),
					data,
					fill: "origin",
					cubicInterpolationMode: "monotone",
					backgroundColor: (ctx) => generateLinearGradient(ctx.chart.ctx, 292),
					borderColor: "rgba(255, 64, 39, 1)"
				}]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Line), {
				"data-test-id": "insights-chart-time-saved",
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
export { InsightsChartTimeSaved_default as default };
