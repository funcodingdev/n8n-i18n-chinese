import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, at as resolveComponent, bt as withCtx, c as useCssModule, j as createVNode, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { c as useRoute } from "./vue-router-DPnGeMd9.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DxozP3cY.js";
import { i as INSIGHTS_UNIT_IMPACT_MAPPING, o as INSIGHT_IMPACT_TYPES } from "./insights.constants-BMEd2uez.js";
import { i as getTimeRangeLabels, r as getMatchingPreset, t as formatDateRange } from "./insights.utils-WcAFH5jJ.js";
import { t as smartDecimal } from "./smart-decimal-DrPf7l5p.js";
//#region src/features/execution/insights/components/InsightsSummary.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "insights-summary-tabs" };
var _hoisted_2 = ["data-test-id"];
var _hoisted_3 = ["href"];
var _hoisted_4 = { key: 1 };
var InsightsSummary_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsSummary",
	props: {
		summary: {},
		startDate: {},
		endDate: {},
		loading: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const route = useRoute();
		const $style = useCssModule();
		const telemetry = useTelemetry();
		const timeRangeLabels = getTimeRangeLabels();
		const displayDateRangeLabel = computed(() => {
			const timeRangeKey = getMatchingPreset({
				start: props.startDate,
				end: props.endDate
			});
			if (timeRangeKey) return timeRangeLabels[timeRangeKey];
			return formatDateRange({
				start: props.startDate,
				end: props.endDate
			});
		});
		const summaryTitles = computed(() => ({
			total: i18n.baseText("insights.banner.title.total"),
			failed: i18n.baseText("insights.banner.title.failed"),
			failureRate: i18n.baseText("insights.banner.title.failureRate"),
			timeSaved: i18n.baseText("insights.banner.title.timeSaved"),
			averageRunTime: i18n.baseText("insights.banner.title.averageRunTime")
		}));
		const summaryHasNoData = computed(() => {
			const summaryValues = Object.values(props.summary);
			return summaryValues.length > 0 && summaryValues.every((summary) => !summary.value);
		});
		const summaryWithRouteLocations = computed(() => props.summary.map((s) => ({
			...s,
			to: {
				name: VIEWS.INSIGHTS,
				params: { insightType: s.id },
				query: route.query
			}
		})));
		const getImpactStyle = (id, value) => {
			const impact = INSIGHTS_UNIT_IMPACT_MAPPING[id];
			if (value === 0 || impact === INSIGHT_IMPACT_TYPES.NEUTRAL) return $style.neutral;
			if (impact === INSIGHT_IMPACT_TYPES.POSITIVE) return value > 0 ? $style.positive : $style.negative;
			if (impact === INSIGHT_IMPACT_TYPES.NEGATIVE) return value < 0 ? $style.positive : $style.negative;
			return $style.neutral;
		};
		const trackTabClick = (insightType) => {
			telemetry.track(`User clicked ${summaryTitles.value[insightType]}`, { referrer: route.name === VIEWS.INSIGHTS ? "Dashboard" : "Overview" });
		};
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref($style).insightsWrapper) }, [createBaseVNode("div", { class: normalizeClass(unref($style).insights) }, [createBaseVNode("ul", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(summaryWithRouteLocations.value, ({ id, value, deviation, deviationUnit, unit, to }) => {
				return openBlock(), createElementBlock("li", {
					key: id,
					"data-test-id": `insights-summary-tab-${id}`
				}, [createVNode(unref(N8nTooltip_default), {
					placement: unref(route).name === unref(VIEWS).INSIGHTS ? "bottom" : "top",
					disabled: !(summaryHasNoData.value && id === "total"),
					"show-after": 500
				}, {
					content: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "insights.banner.noData.tooltip",
						scope: "global"
					}, {
						link: withCtx(() => [createBaseVNode("a", {
							href: unref(i18n).baseText("insights.banner.noData.tooltip.link.url"),
							target: "_blank"
						}, toDisplayString(unref(i18n).baseText("insights.banner.noData.tooltip.link")), 9, _hoisted_3)]),
						_: 1
					})]),
					default: withCtx(() => [createVNode(_component_RouterLink, {
						to,
						"exact-active-class": unref($style).activeTab,
						onClick: ($event) => trackTabClick(id)
					}, {
						default: withCtx(() => [
							createBaseVNode("strong", null, [createVNode(unref(N8nTooltip_default), {
								placement: "bottom",
								disabled: id !== "timeSaved"
							}, {
								content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.title.timeSaved.tooltip")), 1)]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(summaryTitles.value[id]), 1)]),
								_: 2
							}, 1032, ["disabled"])]),
							createBaseVNode("small", { class: normalizeClass(unref($style).days) }, toDisplayString(displayDateRangeLabel.value), 3),
							value === 0 && id === "timeSaved" ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(unref($style).empty)
							}, [_cache[0] || (_cache[0] = createBaseVNode("em", null, "--", -1)), createBaseVNode("small", null, [createVNode(unref(N8nTooltip_default), { placement: "bottom" }, {
								content: withCtx(() => [createVNode(unref(I18nT), {
									keypath: "insights.banner.timeSaved.tooltip",
									scope: "global"
								}, {
									link: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.timeSaved.tooltip.link.text")), 1)]),
									_: 1
								})]),
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									class: normalizeClass(unref($style).icon),
									icon: "info",
									size: "medium"
								}, null, 8, ["class"])]),
								_: 1
							})])], 2)) : (openBlock(), createElementBlock("span", _hoisted_4, [createBaseVNode("em", null, [createTextVNode(toDisplayString(unref(smartDecimal)(value).toLocaleString("en-US")) + " ", 1), createBaseVNode("i", null, toDisplayString(unit), 1)]), deviation !== null ? (openBlock(), createElementBlock("small", {
								key: 0,
								class: normalizeClass(getImpactStyle(id, deviation))
							}, [createVNode(unref(N8nIcon_default), {
								class: normalizeClass([unref($style).icon, getImpactStyle(id, deviation)]),
								icon: deviation === 0 ? "chevron-right" : deviation > 0 ? "chevron-up" : "chevron-down"
							}, null, 8, ["class", "icon"]), createVNode(unref(N8nTooltip_default), {
								placement: "bottom",
								disabled: id !== "failureRate"
							}, {
								content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.failureRate.deviation.tooltip")), 1)]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(smartDecimal)(Math.abs(deviation)).toLocaleString("en-US")) + toDisplayString(deviationUnit), 1)]),
								_: 2
							}, 1032, ["disabled"])], 2)) : createCommentVNode("", true)]))
						]),
						_: 2
					}, 1032, [
						"to",
						"exact-active-class",
						"onClick"
					])]),
					_: 2
				}, 1032, ["placement", "disabled"])], 8, _hoisted_2);
			}), 128))])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/execution/insights/components/InsightsSummary.vue?vue&type=style&index=0&lang.module.scss
var insightsWrapper = "_insightsWrapper_3ixsa_388";
var insights = "_insights_3ixsa_388";
var activeTab = "_activeTab_3ixsa_436";
var days = "_days_3ixsa_449";
var empty = "_empty_3ixsa_460";
var icon = "_icon_3ixsa_471";
var noData = "_noData_3ixsa_501";
var positive = "_positive_3ixsa_506";
var negative = "_negative_3ixsa_510";
var neutral = "_neutral_3ixsa_514";
var loading = "_loading_3ixsa_529";
var queueModeWarning = "_queueModeWarning_3ixsa_540";
var underlined = "_underlined_3ixsa_546";
var shimmer = "_shimmer_3ixsa_1";
var spin = "_spin_3ixsa_1";
var opacityPulse = "_opacityPulse_3ixsa_1";
var popoverIn = "_popoverIn_3ixsa_1";
var fadeIn = "_fadeIn_3ixsa_1";
var collapsibleSlideDown = "_collapsibleSlideDown_3ixsa_1";
var collapsibleSlideUp = "_collapsibleSlideUp_3ixsa_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_3ixsa_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_3ixsa_1";
var blurSwapIn = "_blurSwapIn_3ixsa_1";
var blurSwapOut = "_blurSwapOut_3ixsa_1";
var pulseGlow = "_pulseGlow_3ixsa_1";
var pulseGlowDelayed = "_pulseGlowDelayed_3ixsa_1";
var fade = "_fade_3ixsa_1";
var fadeInUp = "_fadeInUp_3ixsa_1";
var fadeInDown = "_fadeInDown_3ixsa_1";
var fadeInLeft = "_fadeInLeft_3ixsa_1";
var fadeInRight = "_fadeInRight_3ixsa_1";
var fadeOut = "_fadeOut_3ixsa_1";
var fadeOutDown = "_fadeOutDown_3ixsa_1";
var fadeOutUp = "_fadeOutUp_3ixsa_1";
var fadeOutLeft = "_fadeOutLeft_3ixsa_1";
var fadeOutRight = "_fadeOutRight_3ixsa_1";
var ping = "_ping_3ixsa_1";
var blinkBackground = "_blinkBackground_3ixsa_1";
var typingBlink = "_typingBlink_3ixsa_1";
var InsightsSummary_vue_vue_type_style_index_0_lang_module_default = {
	insightsWrapper,
	insights,
	activeTab,
	days,
	empty,
	icon,
	noData,
	positive,
	negative,
	neutral,
	loading,
	queueModeWarning,
	underlined,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_3ixsa_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var InsightsSummary_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InsightsSummary_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsSummary_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InsightsSummary_default as t };
