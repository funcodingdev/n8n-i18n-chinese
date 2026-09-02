import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, n as Transition, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as ElScrollbar } from "./scrollbar-XVVlQ2p1.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
import { d as normalizeMetricScore } from "./src-DAIlllTg.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import "./constants-DxozP3cY.js";
import { t as useEvaluationStore } from "./evaluation.store-3EoneqA3.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-CkFJ0QvW.js";
import { t as require_orderBy } from "./orderBy-Dx03ab2O.js";
import { C as normalizeMetricValue, _ as getDeltaTone, d as formatMetricLabel, f as formatMetricPercent, g as formatTokens, i as computeDurationMs, l as formatDeltaPercent, m as formatMetricRawScoreSum, p as formatMetricRawScore, u as formatDuration, x as getUserDefinedMetricNames } from "./evaluation.utils-DnW27H-x.js";
import { t as useWorkflowEvaluationState } from "./useWorkflowEvaluationState-6X7OhNsF.js";
import { l as getErrorBaseKey } from "./evaluation.constants-PLo98j_f.js";
//#region src/features/ai/evaluation.ee/components/RunDetail/TrendDeltaBadge.vue?vue&type=script&setup=true&lang.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
var TrendDeltaBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TrendDeltaBadge",
	props: { delta: {} },
	setup(__props) {
		const props = __props;
		const tone = computed(() => getDeltaTone(props.delta));
		const label = computed(() => formatDeltaPercent(props.delta));
		const icon = computed(() => tone.value === "negative" ? "trending-down" : "trending-up");
		return (_ctx, _cache) => {
			return tone.value !== "default" ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass([_ctx.$style.badge, _ctx.$style[tone.value]]),
				"data-test-id": "trend-delta-badge"
			}, [createVNode(unref(N8nIcon_default), {
				icon: icon.value,
				size: "large"
			}, null, 8, ["icon"]), createVNode(unref(N8nText_default), {
				size: "small",
				class: normalizeClass(_ctx.$style.label)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(label.value), 1)]),
				_: 1
			}, 8, ["class"])], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TrendDeltaBadge.vue?vue&type=style&index=0&lang.module.scss
var badge = "_badge_wpt2h_388";
var label = "_label_wpt2h_398";
var positive = "_positive_wpt2h_402";
var negative = "_negative_wpt2h_407";
var shimmer$7 = "_shimmer_wpt2h_1";
var spin$7 = "_spin_wpt2h_1";
var opacityPulse$7 = "_opacityPulse_wpt2h_1";
var popoverIn$7 = "_popoverIn_wpt2h_1";
var fadeIn$7 = "_fadeIn_wpt2h_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_wpt2h_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_wpt2h_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_wpt2h_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_wpt2h_1";
var blurSwapIn$7 = "_blurSwapIn_wpt2h_1";
var blurSwapOut$7 = "_blurSwapOut_wpt2h_1";
var pulseGlow$7 = "_pulseGlow_wpt2h_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_wpt2h_1";
var fade$7 = "_fade_wpt2h_1";
var fadeInUp$7 = "_fadeInUp_wpt2h_1";
var fadeInDown$7 = "_fadeInDown_wpt2h_1";
var fadeInLeft$7 = "_fadeInLeft_wpt2h_1";
var fadeInRight$7 = "_fadeInRight_wpt2h_1";
var fadeOut$7 = "_fadeOut_wpt2h_1";
var fadeOutDown$7 = "_fadeOutDown_wpt2h_1";
var fadeOutUp$7 = "_fadeOutUp_wpt2h_1";
var fadeOutLeft$7 = "_fadeOutLeft_wpt2h_1";
var fadeOutRight$7 = "_fadeOutRight_wpt2h_1";
var ping$7 = "_ping_wpt2h_1";
var blinkBackground$7 = "_blinkBackground_wpt2h_1";
var typingBlink$7 = "_typingBlink_wpt2h_1";
var TrendDeltaBadge_vue_vue_type_style_index_0_lang_module_default = {
	badge,
	label,
	positive,
	negative,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_wpt2h_1",
	opacityPulse: opacityPulse$7,
	popoverIn: popoverIn$7,
	fadeIn: fadeIn$7,
	collapsibleSlideDown: collapsibleSlideDown$7,
	collapsibleSlideUp: collapsibleSlideUp$7,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$7,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$7,
	blurSwapIn: blurSwapIn$7,
	blurSwapOut: blurSwapOut$7,
	pulseGlow: pulseGlow$7,
	pulseGlowDelayed: pulseGlowDelayed$7,
	fade: fade$7,
	fadeInUp: fadeInUp$7,
	fadeInDown: fadeInDown$7,
	fadeInLeft: fadeInLeft$7,
	fadeInRight: fadeInRight$7,
	fadeOut: fadeOut$7,
	fadeOutDown: fadeOutDown$7,
	fadeOutUp: fadeOutUp$7,
	fadeOutLeft: fadeOutLeft$7,
	fadeOutRight: fadeOutRight$7,
	ping: ping$7,
	blinkBackground: blinkBackground$7,
	typingBlink: typingBlink$7
};
var TrendDeltaBadge_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TrendDeltaBadge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TrendDeltaBadge_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/MetricSummaryCard.vue?vue&type=script&setup=true&lang.ts
var MetricSummaryCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricSummaryCard",
	props: {
		name: {},
		currentValue: {},
		delta: {},
		category: {},
		scale: {},
		sourceNodeName: {},
		caseValues: {}
	},
	setup(__props) {
		const props = __props;
		const tone = computed(() => getDeltaTone(props.delta));
		const formattedValue = computed(() => formatMetricPercent(props.currentValue, {
			key: props.name,
			category: props.category,
			scale: props.scale
		}));
		const formattedLabel = computed(() => formatMetricLabel(props.name));
		const formattedSumScore = computed(() => formatMetricRawScoreSum(props.caseValues ?? [], {
			category: props.category,
			scale: props.scale
		}));
		const valueTooltip = computed(() => formattedSumScore.value ? `${formattedValue.value} • ${formattedSumScore.value}` : "");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "metric-summary-card"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleRow) }, [createVNode(unref(N8nTooltip_default), {
				content: __props.sourceNodeName ? `${__props.name} · ${__props.sourceNodeName}` : __props.name,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedLabel.value), 1)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["content"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.valueRow) }, [valueTooltip.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: valueTooltip.value,
				placement: "top",
				"show-after": 0
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass([_ctx.$style.value, _ctx.$style[`tone-${tone.value}`]]) }, toDisplayString(formattedValue.value), 3)]),
				_: 1
			}, 8, ["content"])) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass([_ctx.$style.value, _ctx.$style[`tone-${tone.value}`]])
			}, toDisplayString(formattedValue.value), 3)), createVNode(TrendDeltaBadge_default, { delta: __props.delta }, null, 8, ["delta"])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/MetricSummaryCard.vue?vue&type=style&index=0&lang.module.scss
var card$1 = "_card_wns0d_388";
var titleRow = "_titleRow_wns0d_401";
var title = "_title_wns0d_401";
var valueRow = "_valueRow_wns0d_417";
var value$1 = "_value_wns0d_417";
var shimmer$6 = "_shimmer_wns0d_1";
var spin$6 = "_spin_wns0d_1";
var opacityPulse$6 = "_opacityPulse_wns0d_1";
var popoverIn$6 = "_popoverIn_wns0d_1";
var fadeIn$6 = "_fadeIn_wns0d_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_wns0d_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_wns0d_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_wns0d_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_wns0d_1";
var blurSwapIn$6 = "_blurSwapIn_wns0d_1";
var blurSwapOut$6 = "_blurSwapOut_wns0d_1";
var pulseGlow$6 = "_pulseGlow_wns0d_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_wns0d_1";
var fade$6 = "_fade_wns0d_1";
var fadeInUp$6 = "_fadeInUp_wns0d_1";
var fadeInDown$6 = "_fadeInDown_wns0d_1";
var fadeInLeft$6 = "_fadeInLeft_wns0d_1";
var fadeInRight$6 = "_fadeInRight_wns0d_1";
var fadeOut$6 = "_fadeOut_wns0d_1";
var fadeOutDown$6 = "_fadeOutDown_wns0d_1";
var fadeOutUp$6 = "_fadeOutUp_wns0d_1";
var fadeOutLeft$6 = "_fadeOutLeft_wns0d_1";
var fadeOutRight$6 = "_fadeOutRight_wns0d_1";
var ping$6 = "_ping_wns0d_1";
var blinkBackground$6 = "_blinkBackground_wns0d_1";
var typingBlink$6 = "_typingBlink_wns0d_1";
var MetricSummaryCard_vue_vue_type_style_index_0_lang_module_default = {
	card: card$1,
	titleRow,
	title,
	valueRow,
	value: value$1,
	"tone-default": "_tone-default_wns0d_431",
	"tone-positive": "_tone-positive_wns0d_435",
	"tone-negative": "_tone-negative_wns0d_439",
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_wns0d_1",
	opacityPulse: opacityPulse$6,
	popoverIn: popoverIn$6,
	fadeIn: fadeIn$6,
	collapsibleSlideDown: collapsibleSlideDown$6,
	collapsibleSlideUp: collapsibleSlideUp$6,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$6,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$6,
	blurSwapIn: blurSwapIn$6,
	blurSwapOut: blurSwapOut$6,
	pulseGlow: pulseGlow$6,
	pulseGlowDelayed: pulseGlowDelayed$6,
	fade: fade$6,
	fadeInUp: fadeInUp$6,
	fadeInDown: fadeInDown$6,
	fadeInLeft: fadeInLeft$6,
	fadeInRight: fadeInRight$6,
	fadeOut: fadeOut$6,
	fadeOutDown: fadeOutDown$6,
	fadeOutUp: fadeOutUp$6,
	fadeOutLeft: fadeOutLeft$6,
	fadeOutRight: fadeOutRight$6,
	ping: ping$6,
	blinkBackground: blinkBackground$6,
	typingBlink: typingBlink$6
};
var MetricSummaryCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MetricSummaryCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricSummaryCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/MetricSummaryStrip.vue?vue&type=script&setup=true&lang.ts
var MetricSummaryStrip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricSummaryStrip",
	props: {
		currentMetrics: {},
		previousMetrics: {},
		metricSources: {},
		metricScales: {},
		previousMetricScales: {},
		caseValuesByKey: {}
	},
	setup(__props) {
		const props = __props;
		const metricNames = computed(() => getUserDefinedMetricNames(props.currentMetrics));
		function scoreDelta(name) {
			const current = normalizeMetricValue(props.currentMetrics?.[name]);
			const previous = normalizeMetricValue(props.previousMetrics?.[name]);
			if (current === void 0 || previous === void 0) return void 0;
			const currentScore = normalizeMetricScore(name, current, props.metricScales?.[name]);
			const previousScore = normalizeMetricScore(name, previous, props.previousMetricScales?.[name]);
			if (currentScore === null || previousScore === null) return void 0;
			return currentScore - previousScore;
		}
		const cards = computed(() => metricNames.value.map((name) => {
			const source = props.metricSources?.[name];
			return {
				name,
				currentValue: normalizeMetricValue(props.currentMetrics?.[name]),
				delta: scoreDelta(name),
				category: source?.category,
				scale: props.metricScales?.[name],
				sourceNodeName: source?.nodeName,
				caseValues: props.caseValuesByKey?.[name] ?? []
			};
		}));
		return (_ctx, _cache) => {
			return cards.value.length > 0 ? (openBlock(), createBlock(unref(ElScrollbar), {
				key: 0,
				always: "",
				class: normalizeClass(_ctx.$style.scroll),
				"data-test-id": "metric-summary-strip"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(cards.value, (card) => {
					return openBlock(), createBlock(MetricSummaryCard_default, {
						key: card.name,
						name: card.name,
						"current-value": card.currentValue,
						delta: card.delta,
						category: card.category,
						scale: card.scale,
						"source-node-name": card.sourceNodeName,
						"case-values": card.caseValues
					}, null, 8, [
						"name",
						"current-value",
						"delta",
						"category",
						"scale",
						"source-node-name",
						"case-values"
					]);
				}), 128))], 2)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/MetricSummaryStrip.vue?vue&type=style&index=0&lang.module.scss
var scroll = "_scroll_lr7ca_388";
var row$1 = "_row_lr7ca_403";
var shimmer$5 = "_shimmer_lr7ca_1";
var spin$5 = "_spin_lr7ca_1";
var opacityPulse$5 = "_opacityPulse_lr7ca_1";
var popoverIn$5 = "_popoverIn_lr7ca_1";
var fadeIn$5 = "_fadeIn_lr7ca_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_lr7ca_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_lr7ca_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_lr7ca_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_lr7ca_1";
var blurSwapIn$5 = "_blurSwapIn_lr7ca_1";
var blurSwapOut$5 = "_blurSwapOut_lr7ca_1";
var pulseGlow$5 = "_pulseGlow_lr7ca_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_lr7ca_1";
var fade$5 = "_fade_lr7ca_1";
var fadeInUp$5 = "_fadeInUp_lr7ca_1";
var fadeInDown$5 = "_fadeInDown_lr7ca_1";
var fadeInLeft$5 = "_fadeInLeft_lr7ca_1";
var fadeInRight$5 = "_fadeInRight_lr7ca_1";
var fadeOut$5 = "_fadeOut_lr7ca_1";
var fadeOutDown$5 = "_fadeOutDown_lr7ca_1";
var fadeOutUp$5 = "_fadeOutUp_lr7ca_1";
var fadeOutLeft$5 = "_fadeOutLeft_lr7ca_1";
var fadeOutRight$5 = "_fadeOutRight_lr7ca_1";
var ping$5 = "_ping_lr7ca_1";
var blinkBackground$5 = "_blinkBackground_lr7ca_1";
var typingBlink$5 = "_typingBlink_lr7ca_1";
var MetricSummaryStrip_vue_vue_type_style_index_0_lang_module_default = {
	scroll,
	row: row$1,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_lr7ca_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInUp: fadeInUp$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var MetricSummaryStrip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MetricSummaryStrip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricSummaryStrip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/RunStatusPill.vue?vue&type=script&setup=true&lang.ts
var RunStatusPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunStatusPill",
	props: { status: {} },
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const tone = computed(() => {
			switch (props.status) {
				case "new":
				case "running": return "running";
				case "completed":
				case "success": return "done";
				case "error":
				case "warning": return "failed";
				case "cancelled": return "cancelled";
				default: return "failed";
			}
		});
		const labelKey = computed(() => {
			switch (tone.value) {
				case "running": return "evaluation.runDetail.runStatus.running";
				case "done": return "evaluation.runDetail.runStatus.done";
				case "failed": return "evaluation.runDetail.runStatus.failed";
				case "cancelled": return "evaluation.runDetail.runStatus.cancelled";
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass([_ctx.$style.pill, _ctx.$style[tone.value]]),
				"data-test-id": "run-status-pill"
			}, [tone.value === "running" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
				key: 0,
				size: "small"
			})) : tone.value === "done" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "circle-check",
				size: "small"
			})) : tone.value === "failed" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 2,
				icon: "triangle-alert",
				size: "small"
			})) : tone.value === "cancelled" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 3,
				icon: "status-canceled",
				size: "small"
			})) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
				size: "small",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(labelKey.value)), 1)]),
				_: 1
			})], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/RunStatusPill.vue?vue&type=style&index=0&lang.module.scss
var pill = "_pill_jb9lx_388";
var running = "_running_jb9lx_399";
var done = "_done_jb9lx_403";
var failed = "_failed_jb9lx_408";
var cancelled = "_cancelled_jb9lx_413";
var shimmer$4 = "_shimmer_jb9lx_1";
var spin$4 = "_spin_jb9lx_1";
var opacityPulse$4 = "_opacityPulse_jb9lx_1";
var popoverIn$4 = "_popoverIn_jb9lx_1";
var fadeIn$4 = "_fadeIn_jb9lx_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_jb9lx_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_jb9lx_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_jb9lx_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_jb9lx_1";
var blurSwapIn$4 = "_blurSwapIn_jb9lx_1";
var blurSwapOut$4 = "_blurSwapOut_jb9lx_1";
var pulseGlow$4 = "_pulseGlow_jb9lx_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_jb9lx_1";
var fade$4 = "_fade_jb9lx_1";
var fadeInUp$4 = "_fadeInUp_jb9lx_1";
var fadeInDown$4 = "_fadeInDown_jb9lx_1";
var fadeInLeft$4 = "_fadeInLeft_jb9lx_1";
var fadeInRight$4 = "_fadeInRight_jb9lx_1";
var fadeOut$4 = "_fadeOut_jb9lx_1";
var fadeOutDown$4 = "_fadeOutDown_jb9lx_1";
var fadeOutUp$4 = "_fadeOutUp_jb9lx_1";
var fadeOutLeft$4 = "_fadeOutLeft_jb9lx_1";
var fadeOutRight$4 = "_fadeOutRight_jb9lx_1";
var ping$4 = "_ping_jb9lx_1";
var blinkBackground$4 = "_blinkBackground_jb9lx_1";
var typingBlink$4 = "_typingBlink_jb9lx_1";
var RunStatusPill_vue_vue_type_style_index_0_lang_module_default = {
	pill,
	running,
	done,
	failed,
	cancelled,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_jb9lx_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var RunStatusPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunStatusPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunStatusPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/composables/useCyclingVerb.ts
/**
* Pool of i18n keys for the progress verbs we cycle through while a test
* case is running. The composable returns a key (not the translated value)
* so the render site translates at use time and respects the active locale.
* Lifted from the TRUST-70 spec so the running state feels alive instead of
* just showing a static "Running…".
*/
var PROGRESS_VERB_KEYS = [
	"evaluation.runDetail.testCase.progress.accomplishing",
	"evaluation.runDetail.testCase.progress.actioning",
	"evaluation.runDetail.testCase.progress.actualizing",
	"evaluation.runDetail.testCase.progress.architecting",
	"evaluation.runDetail.testCase.progress.baking",
	"evaluation.runDetail.testCase.progress.beaming",
	"evaluation.runDetail.testCase.progress.beboppin",
	"evaluation.runDetail.testCase.progress.befuddling",
	"evaluation.runDetail.testCase.progress.billowing",
	"evaluation.runDetail.testCase.progress.blanching",
	"evaluation.runDetail.testCase.progress.bloviating",
	"evaluation.runDetail.testCase.progress.boogieing",
	"evaluation.runDetail.testCase.progress.boondoggling",
	"evaluation.runDetail.testCase.progress.booping",
	"evaluation.runDetail.testCase.progress.bootstrapping",
	"evaluation.runDetail.testCase.progress.brewing",
	"evaluation.runDetail.testCase.progress.bunning",
	"evaluation.runDetail.testCase.progress.burrowing",
	"evaluation.runDetail.testCase.progress.calculating",
	"evaluation.runDetail.testCase.progress.canoodling",
	"evaluation.runDetail.testCase.progress.caramelizing",
	"evaluation.runDetail.testCase.progress.cascading",
	"evaluation.runDetail.testCase.progress.catapulting",
	"evaluation.runDetail.testCase.progress.cerebrating",
	"evaluation.runDetail.testCase.progress.channeling",
	"evaluation.runDetail.testCase.progress.choreographing",
	"evaluation.runDetail.testCase.progress.churning",
	"evaluation.runDetail.testCase.progress.clauding",
	"evaluation.runDetail.testCase.progress.coalescing",
	"evaluation.runDetail.testCase.progress.cogitating",
	"evaluation.runDetail.testCase.progress.combobulating",
	"evaluation.runDetail.testCase.progress.composing",
	"evaluation.runDetail.testCase.progress.computing",
	"evaluation.runDetail.testCase.progress.concocting",
	"evaluation.runDetail.testCase.progress.considering",
	"evaluation.runDetail.testCase.progress.contemplating",
	"evaluation.runDetail.testCase.progress.cooking",
	"evaluation.runDetail.testCase.progress.crafting",
	"evaluation.runDetail.testCase.progress.creating",
	"evaluation.runDetail.testCase.progress.crunching",
	"evaluation.runDetail.testCase.progress.crystallizing",
	"evaluation.runDetail.testCase.progress.cultivating",
	"evaluation.runDetail.testCase.progress.deciphering",
	"evaluation.runDetail.testCase.progress.deliberating",
	"evaluation.runDetail.testCase.progress.determining",
	"evaluation.runDetail.testCase.progress.dillyDallying",
	"evaluation.runDetail.testCase.progress.discombobulating",
	"evaluation.runDetail.testCase.progress.doing",
	"evaluation.runDetail.testCase.progress.doodling"
];
var DEFAULT_INTERVAL_MS = 2500;
/**
* Picks a fresh progress-verb i18n key every `intervalMs` while `enabled` is
* truthy and returns it as a reactive ref. The render site is responsible
* for translating the key (via `useI18n().baseText(...)`), so locale
* changes take effect without re-mounting the composable. The first key is
* randomized so two cards starting at the same time aren't synced. The
* interval is paused while `enabled` is false to avoid burning timers on
* idle headers.
*/
function useCyclingVerb(enabled, intervalMs = DEFAULT_INTERVAL_MS) {
	const pickRandom = () => PROGRESS_VERB_KEYS[Math.floor(Math.random() * PROGRESS_VERB_KEYS.length)];
	const verbKey = ref(pickRandom());
	let timer = null;
	const stop = () => {
		if (timer !== null) {
			clearInterval(timer);
			timer = null;
		}
	};
	const start = () => {
		if (timer !== null) return;
		verbKey.value = pickRandom();
		timer = setInterval(() => {
			verbKey.value = pickRandom();
		}, intervalMs);
	};
	watch(enabled, (value) => {
		if (value) start();
		else stop();
	}, { immediate: true });
	onBeforeUnmount(stop);
	return verbKey;
}
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseHeader.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var TestCaseHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestCaseHeader",
	props: {
		index: {},
		status: {},
		tokens: {},
		durationMs: {},
		executionId: {},
		cancelDisabled: { type: Boolean }
	},
	emits: [
		"view",
		"cancel",
		"rerun"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const tokensLabel = computed(() => formatTokens(props.tokens));
		const durationLabel = computed(() => formatDuration(props.durationMs));
		const isFinished = computed(() => props.status === "success" || props.status === "error" || props.status === "warning");
		const isPending = computed(() => props.status === "new");
		const isRunning = computed(() => props.status === "running" || props.status === "evaluation_running");
		const isCancelled = computed(() => props.status === "cancelled");
		const isFailed = computed(() => props.status === "error" || props.status === "warning");
		const hasMetadata = computed(() => isFinished.value && (props.tokens !== void 0 || props.durationMs !== void 0));
		const cyclingVerbKey = useCyclingVerb(isRunning);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.header),
				"data-test-id": "test-case-header"
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.leftGroup, { [_ctx.$style.shimmering]: isRunning.value }]) }, [
				isRunning.value ? (openBlock(), createBlock(unref(N8nSpinner_default), {
					key: 0,
					size: "small",
					class: normalizeClass(_ctx.$style.leadingSpinner)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					size: "medium",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.testCase.title", { interpolate: { index: __props.index } })), 1)]),
					_: 1
				}),
				hasMetadata.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					__props.tokens !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						class: normalizeClass(_ctx.$style.meta)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(tokensLabel.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					__props.tokens !== void 0 && __props.durationMs !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						class: normalizeClass(_ctx.$style.dot)
					}, {
						default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" · ", -1)])]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					__props.durationMs !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						size: "small",
						class: normalizeClass(_ctx.$style.meta)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(durationLabel.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rightGroup) }, [isPending.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), {
				icon: "circle",
				size: "small",
				class: normalizeClass(_ctx.$style.pendingIcon)
			}, null, 8, ["class"]), createVNode(unref(N8nButton_default), {
				variant: "ghost",
				size: "mini",
				label: unref(locale).baseText("evaluation.runDetail.testCase.cancel"),
				disabled: __props.cancelDisabled,
				"data-test-id": "test-case-cancel-button",
				onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("cancel"), ["stop"]))
			}, null, 8, ["label", "disabled"])], 64)) : isRunning.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				size: "small",
				class: normalizeClass(_ctx.$style.runningVerb)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(unref(cyclingVerbKey))) + "… ", 1)]),
				_: 1
			}, 8, ["class"])) : isCancelled.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 2,
				size: "small",
				class: normalizeClass(_ctx.$style.meta)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.testCase.cancelled")), 1)]),
				_: 1
			}, 8, ["class"])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [__props.executionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: unref(locale).baseText("evaluation.runDetail.testCase.viewLink"),
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("button", {
					type: "button",
					class: normalizeClass(["open-execution-link", _ctx.$style.viewIcon]),
					"data-test-id": "test-case-view-link",
					"aria-label": unref(locale).baseText("evaluation.runDetail.testCase.viewLink"),
					onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("view"), ["stop"]))
				}, [createVNode(unref(N8nIcon_default), {
					icon: "external-link",
					size: "small"
				})], 10, _hoisted_1)]),
				_: 1
			}, 8, ["content"])) : createCommentVNode("", true), isFailed.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: "outline",
				size: "mini",
				label: unref(locale).baseText("evaluation.runDetail.testCase.rerun"),
				"data-test-id": "test-case-rerun-button",
				onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("rerun"), ["stop"]))
			}, null, 8, ["label"])) : createCommentVNode("", true)], 64))], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseHeader.vue?vue&type=style&index=0&lang.module.scss
var header$1 = "_header_13dte_388";
var leftGroup = "_leftGroup_13dte_398";
var shimmering = "_shimmering_13dte_405";
var shimmer$3 = "_shimmer_13dte_405";
var leadingSpinner = "_leadingSpinner_13dte_419";
var rightGroup = "_rightGroup_13dte_423";
var meta = "_meta_13dte_430";
var dot = "_dot_13dte_434";
var pendingIcon = "_pendingIcon_13dte_438";
var runningVerb = "_runningVerb_13dte_442";
var viewIcon = "_viewIcon_13dte_456";
var spin$3 = "_spin_13dte_1";
var opacityPulse$3 = "_opacityPulse_13dte_1";
var popoverIn$3 = "_popoverIn_13dte_1";
var fadeIn$3 = "_fadeIn_13dte_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_13dte_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_13dte_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_13dte_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_13dte_1";
var blurSwapIn$3 = "_blurSwapIn_13dte_1";
var blurSwapOut$3 = "_blurSwapOut_13dte_1";
var pulseGlow$3 = "_pulseGlow_13dte_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_13dte_1";
var fade$3 = "_fade_13dte_1";
var fadeInUp$3 = "_fadeInUp_13dte_1";
var fadeInDown$3 = "_fadeInDown_13dte_1";
var fadeInLeft$3 = "_fadeInLeft_13dte_1";
var fadeInRight$3 = "_fadeInRight_13dte_1";
var fadeOut$3 = "_fadeOut_13dte_1";
var fadeOutDown$3 = "_fadeOutDown_13dte_1";
var fadeOutUp$3 = "_fadeOutUp_13dte_1";
var fadeOutLeft$3 = "_fadeOutLeft_13dte_1";
var fadeOutRight$3 = "_fadeOutRight_13dte_1";
var ping$3 = "_ping_13dte_1";
var blinkBackground$3 = "_blinkBackground_13dte_1";
var typingBlink$3 = "_typingBlink_13dte_1";
var TestCaseHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: header$1,
	leftGroup,
	shimmering,
	shimmer: shimmer$3,
	leadingSpinner,
	rightGroup,
	meta,
	dot,
	pendingIcon,
	runningVerb,
	viewIcon,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_13dte_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var TestCaseHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TestCaseHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestCaseHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseMetricRow.vue?vue&type=script&setup=true&lang.ts
var TestCaseMetricRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestCaseMetricRow",
	props: {
		name: {},
		value: {},
		category: {},
		scale: {},
		sourceNodeName: {},
		errored: { type: Boolean },
		errorMessage: {}
	},
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const formattedLabel = computed(() => formatMetricLabel(props.name));
		const formattedPercent = computed(() => formatMetricPercent(props.value, {
			key: props.name,
			category: props.category,
			scale: props.scale
		}));
		const formattedRawScore = computed(() => formatMetricRawScore(props.value, {
			category: props.category,
			scale: props.scale
		}));
		const tooltipContent = computed(() => formattedRawScore.value ? `${formattedPercent.value} • ${formattedRawScore.value}` : "");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.row),
				"data-test-id": "test-case-metric-row"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.leading) }, [
				createVNode(unref(N8nIcon_default), {
					icon: __props.errored ? "circle-x" : "circle-check",
					size: "small",
					class: normalizeClass(__props.errored ? _ctx.$style.errorIcon : _ctx.$style.successIcon)
				}, null, 8, ["icon", "class"]),
				createVNode(unref(N8nText_default), {
					size: "medium",
					bold: "",
					class: normalizeClass(_ctx.$style.name)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedLabel.value), 1)]),
					_: 1
				}, 8, ["class"]),
				__props.sourceNodeName ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					class: normalizeClass(_ctx.$style.subtitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.sourceNodeName), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.trailing) }, [__props.errored ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "small",
				class: normalizeClass(_ctx.$style.errorMessage)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.errorMessage ?? unref(locale).baseText("evaluation.runDetail.testCase.failed")), 1)]),
				_: 1
			}, 8, ["class"])) : tooltipContent.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 1,
				content: tooltipContent.value,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "medium",
					class: normalizeClass(_ctx.$style.value)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedPercent.value), 1)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 2,
				size: "medium",
				class: normalizeClass(_ctx.$style.value)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(formattedPercent.value), 1)]),
				_: 1
			}, 8, ["class"]))], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseMetricRow.vue?vue&type=style&index=0&lang.module.scss
var row = "_row_1gl1d_388";
var leading = "_leading_1gl1d_397";
var trailing = "_trailing_1gl1d_405";
var successIcon = "_successIcon_1gl1d_411";
var errorIcon = "_errorIcon_1gl1d_415";
var name = "_name_1gl1d_419";
var subtitle = "_subtitle_1gl1d_426";
var value = "_value_1gl1d_430";
var errorMessage = "_errorMessage_1gl1d_436";
var shimmer$2 = "_shimmer_1gl1d_1";
var spin$2 = "_spin_1gl1d_1";
var opacityPulse$2 = "_opacityPulse_1gl1d_1";
var popoverIn$2 = "_popoverIn_1gl1d_1";
var fadeIn$2 = "_fadeIn_1gl1d_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1gl1d_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1gl1d_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1gl1d_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1gl1d_1";
var blurSwapIn$2 = "_blurSwapIn_1gl1d_1";
var blurSwapOut$2 = "_blurSwapOut_1gl1d_1";
var pulseGlow$2 = "_pulseGlow_1gl1d_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1gl1d_1";
var fade$2 = "_fade_1gl1d_1";
var fadeInUp$2 = "_fadeInUp_1gl1d_1";
var fadeInDown$2 = "_fadeInDown_1gl1d_1";
var fadeInLeft$2 = "_fadeInLeft_1gl1d_1";
var fadeInRight$2 = "_fadeInRight_1gl1d_1";
var fadeOut$2 = "_fadeOut_1gl1d_1";
var fadeOutDown$2 = "_fadeOutDown_1gl1d_1";
var fadeOutUp$2 = "_fadeOutUp_1gl1d_1";
var fadeOutLeft$2 = "_fadeOutLeft_1gl1d_1";
var fadeOutRight$2 = "_fadeOutRight_1gl1d_1";
var ping$2 = "_ping_1gl1d_1";
var blinkBackground$2 = "_blinkBackground_1gl1d_1";
var typingBlink$2 = "_typingBlink_1gl1d_1";
var TestCaseMetricRow_vue_vue_type_style_index_0_lang_module_default = {
	row,
	leading,
	trailing,
	successIcon,
	errorIcon,
	name,
	subtitle,
	value,
	errorMessage,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1gl1d_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var TestCaseMetricRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TestCaseMetricRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestCaseMetricRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseCard.vue?vue&type=script&setup=true&lang.ts
var TestCaseCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestCaseCard",
	props: {
		testCase: {},
		index: {},
		metricSources: {},
		metricScales: {}
	},
	emits: [
		"view",
		"cancel",
		"rerun"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const status = computed(() => props.testCase.status);
		const tokens = computed(() => {
			const value = props.testCase.metrics?.totalTokens;
			return typeof value === "number" ? value : void 0;
		});
		const durationMs = computed(() => {
			const fromMetric = props.testCase.metrics?.executionTime;
			if (typeof fromMetric === "number") return fromMetric;
			return computeDurationMs(props.testCase.runAt ?? void 0, props.testCase.updatedAt);
		});
		const isOpaque = computed(() => status.value === "new" || status.value === "cancelled");
		const isErrored = computed(() => status.value === "error" || status.value === "warning");
		const showRows = computed(() => status.value === "success" || isErrored.value);
		const errorMessage = computed(() => {
			const code = props.testCase.errorCode;
			const key = code ? getErrorBaseKey(code) : "";
			if (key) return locale.baseText(key);
			return locale.baseText("evaluation.runDetail.error.unknownError");
		});
		const errorTitle = computed(() => locale.baseText("evaluation.runDetail.testCase.failed"));
		const rows = computed(() => {
			if (status.value !== "success") return [];
			return getUserDefinedMetricNames(props.testCase.metrics).map((name) => {
				const source = props.metricSources?.[name];
				return {
					name,
					value: normalizeMetricValue(props.testCase.metrics?.[name]),
					category: source?.category,
					scale: props.metricScales?.[name],
					sourceNodeName: source?.nodeName
				};
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, { [_ctx.$style.opaque]: isOpaque.value }]),
				style: { "--card--padding": "var(--spacing--md)" },
				"data-test-id": "test-case-card",
				"data-status": status.value
			}, {
				header: withCtx(() => [createVNode(TestCaseHeader_default, {
					index: __props.index,
					status: status.value,
					tokens: tokens.value,
					"duration-ms": durationMs.value,
					"execution-id": __props.testCase.executionId,
					onView: _cache[0] || (_cache[0] = ($event) => emit("view", __props.testCase)),
					onCancel: _cache[1] || (_cache[1] = ($event) => emit("cancel", __props.testCase)),
					onRerun: _cache[2] || (_cache[2] = ($event) => emit("rerun", __props.testCase))
				}, null, 8, [
					"index",
					"status",
					"tokens",
					"duration-ms",
					"execution-id"
				])]),
				default: withCtx(() => [createVNode(Transition, {
					name: "tc-rows-fade-in",
					appear: ""
				}, {
					default: withCtx(() => [showRows.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.rowList)
					}, [isErrored.value ? (openBlock(), createBlock(TestCaseMetricRow_default, {
						key: "__error__",
						name: errorTitle.value,
						value: void 0,
						errored: "",
						"error-message": errorMessage.value
					}, null, 8, ["name", "error-message"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(rows.value, (row) => {
						return openBlock(), createBlock(TestCaseMetricRow_default, {
							key: row.name,
							name: row.name,
							value: row.value,
							category: row.category,
							scale: row.scale,
							"source-node-name": row.sourceNodeName
						}, null, 8, [
							"name",
							"value",
							"category",
							"scale",
							"source-node-name"
						]);
					}), 128))], 2)) : createCommentVNode("", true)]),
					_: 1
				})]),
				_: 1
			}, 8, ["class", "data-status"]);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/RunDetail/TestCaseCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_175vl_388";
var opaque = "_opaque_175vl_395";
var rowList = "_rowList_175vl_399";
var shimmer$1 = "_shimmer_175vl_1";
var spin$1 = "_spin_175vl_1";
var opacityPulse$1 = "_opacityPulse_175vl_1";
var popoverIn$1 = "_popoverIn_175vl_1";
var fadeIn$1 = "_fadeIn_175vl_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_175vl_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_175vl_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_175vl_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_175vl_1";
var blurSwapIn$1 = "_blurSwapIn_175vl_1";
var blurSwapOut$1 = "_blurSwapOut_175vl_1";
var pulseGlow$1 = "_pulseGlow_175vl_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_175vl_1";
var fade$1 = "_fade_175vl_1";
var fadeInUp$1 = "_fadeInUp_175vl_1";
var fadeInDown$1 = "_fadeInDown_175vl_1";
var fadeInLeft$1 = "_fadeInLeft_175vl_1";
var fadeInRight$1 = "_fadeInRight_175vl_1";
var fadeOut$1 = "_fadeOut_175vl_1";
var fadeOutDown$1 = "_fadeOutDown_175vl_1";
var fadeOutUp$1 = "_fadeOutUp_175vl_1";
var fadeOutLeft$1 = "_fadeOutLeft_175vl_1";
var fadeOutRight$1 = "_fadeOutRight_175vl_1";
var ping$1 = "_ping_175vl_1";
var blinkBackground$1 = "_blinkBackground_175vl_1";
var typingBlink$1 = "_typingBlink_175vl_1";
var TestCaseCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	opaque,
	rowList,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_175vl_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1,
	"tc-rows-fade-in": "_tc-rows-fade-in_175vl_405"
};
var TestCaseCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TestCaseCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestCaseCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/views/TestRunDetailView.vue?vue&type=script&setup=true&lang.ts
var TestRunDetailView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestRunDetailView",
	setup(__props) {
		const router = useRouter();
		const toast = useToast();
		const evaluationStore = useEvaluationStore();
		const evaluationState = useWorkflowEvaluationState();
		const locale = useI18n();
		const telemetry = useTelemetry();
		const isLoading = ref(true);
		const testCases = computed(() => Object.values(evaluationStore.testCaseExecutionsById).filter((record) => record.testRunId === runId.value));
		const runId = computed(() => router.currentRoute.value.params.runId);
		const workflowId = useInjectWorkflowId();
		const run = computed(() => evaluationStore.testRunsById[runId.value]);
		const orderedRuns = computed(() => (0, import_orderBy.default)(Object.values(evaluationStore.testRunsById).filter((record) => record.workflowId === workflowId.value), (record) => new Date(record.runAt), ["asc"]));
		const testRunIndex = computed(() => orderedRuns.value.findIndex((record) => record.id === runId.value));
		const previousRun = computed(() => {
			const index = testRunIndex.value;
			if (index <= 0) return null;
			for (let i = index - 1; i >= 0; i--) {
				const candidate = orderedRuns.value[i];
				if (candidate?.status === "completed") return candidate;
			}
			return null;
		});
		const orderedTestCases = computed(() => (0, import_orderBy.default)(testCases.value, [(record) => record.runIndex ?? Number.MAX_SAFE_INTEGER, (record) => record.runAt ?? ""], ["asc", "asc"]));
		const metricSources = computed(() => evaluationState.metricSourceByKey.value);
		const caseValuesByKey = computed(() => {
			const result = {};
			for (const name of getUserDefinedMetricNames(run.value?.metrics)) result[name] = orderedTestCases.value.map((testCase) => testCase.metrics?.[name]);
			return result;
		});
		const rerunRun = async () => {
			if (!workflowId.value) return;
			try {
				const configId = run.value?.evaluationConfigId;
				const options = configId ? {
					evaluationConfigId: configId,
					compileFromConfig: true
				} : void 0;
				const { testRunId } = await evaluationStore.startTestRun(workflowId.value, options);
				telemetry.track("User ran evaluation", {
					workflow_id: workflowId.value,
					run_id: testRunId,
					run_type: configId ? "config" : "direct"
				});
				await evaluationStore.fetchTestRuns(workflowId.value);
				await router.push({
					name: VIEWS.EVALUATION_RUNS_DETAIL,
					params: {
						workflowId: workflowId.value,
						runId: testRunId
					}
				});
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
			}
		};
		const cancelPendingCase = async (testCase) => {
			if (!workflowId.value) return;
			try {
				await evaluationStore.cancelTestCase({
					workflowId: workflowId.value,
					runId: runId.value,
					caseId: testCase.id
				});
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.runDetail.testCase.cancelError"));
			}
		};
		const openRelatedExecution = (testCase) => {
			const executionId = testCase.executionId;
			if (!executionId) return;
			telemetry.track("User opened execution from run detail", {
				run_id: runId.value,
				workflow_id: workflowId.value,
				test_case_id: testCase.id
			});
			const { href } = router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: workflowId.value,
					executionId
				}
			});
			window.open(href, "_blank");
		};
		const fetchExecutionTestCases = async () => {
			if (!runId.value || !workflowId.value) return false;
			isLoading.value = true;
			try {
				const testRun = await evaluationStore.getTestRun({
					workflowId: workflowId.value,
					runId: runId.value
				});
				await evaluationStore.fetchTestCaseExecutions({
					workflowId: workflowId.value,
					runId: testRun.id
				});
				await evaluationStore.fetchTestRuns(run.value.workflowId);
				return true;
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.toast.error.fetchTestCases"));
				return false;
			} finally {
				isLoading.value = false;
			}
		};
		const trackViewedRunDetail = () => {
			telemetry.track("User viewed run detail", {
				run_id: runId.value,
				workflow_id: workflowId.value,
				has_previous_run: previousRun.value !== null,
				metric_count: getUserDefinedMetricNames(run.value?.metrics).length,
				test_case_count: testCases.value.length,
				failed_test_case_count: testCases.value.filter((c) => c.status === "error").length
			});
		};
		const navigateBackToRuns = async () => {
			if (!workflowId.value) return;
			await router.push({
				name: VIEWS.EVALUATION_EDIT,
				params: { workflowId: workflowId.value }
			});
		};
		onMounted(async () => await fetchExecutionTestCases() && trackViewedRunDetail());
		onBeforeUnmount(() => evaluationStore.cleanupPolling());
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "test-definition-run-detail"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.backButton),
					onClick: navigateBackToRuns
				}, [createVNode(unref(N8nIcon_default), {
					icon: "arrow-left",
					size: "small"
				}), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.backToRuns")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headingRow) }, [createBaseVNode("h1", { class: normalizeClass(_ctx.$style.runHeading) }, toDisplayString(unref(locale).baseText("evaluation.listRuns.testCasesListHeader", { interpolate: { index: testRunIndex.value + 1 } })), 3), run.value ? (openBlock(), createBlock(RunStatusPill_default, {
					key: 0,
					status: run.value.status
				}, null, 8, ["status"])) : createCommentVNode("", true)], 2)], 2),
				createVNode(MetricSummaryStrip_default, {
					"current-metrics": run.value?.metrics,
					"previous-metrics": previousRun.value?.metrics,
					"metric-sources": metricSources.value,
					"metric-scales": run.value?.metricScales,
					"previous-metric-scales": previousRun.value?.metricScales,
					"case-values-by-key": caseValuesByKey.value,
					class: "mb-m"
				}, null, 8, [
					"current-metrics",
					"previous-metrics",
					"metric-sources",
					"metric-scales",
					"previous-metric-scales",
					"case-values-by-key"
				]),
				isLoading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nLoading_default), {
					loading: true,
					rows: 5
				})], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.caseList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(orderedTestCases.value, (testCase, index) => {
					return openBlock(), createBlock(TestCaseCard_default, {
						key: testCase.id,
						"test-case": testCase,
						index: index + 1,
						"metric-sources": metricSources.value,
						"metric-scales": run.value?.metricScales,
						onView: openRelatedExecution,
						onCancel: cancelPendingCase,
						onRerun: rerunRun
					}, null, 8, [
						"test-case",
						"index",
						"metric-sources",
						"metric-scales"
					]);
				}), 128))], 2))
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/views/TestRunDetailView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1taee_388";
var header = "_header_1taee_395";
var headingRow = "_headingRow_1taee_402";
var backButton = "_backButton_1taee_409";
var runHeading = "_runHeading_1taee_425";
var capitalized = "_capitalized_1taee_434";
var loading = "_loading_1taee_442";
var caseList = "_caseList_1taee_449";
var shimmer = "_shimmer_1taee_1";
var spin = "_spin_1taee_1";
var opacityPulse = "_opacityPulse_1taee_1";
var popoverIn = "_popoverIn_1taee_1";
var fadeIn = "_fadeIn_1taee_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1taee_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1taee_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1taee_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1taee_1";
var blurSwapIn = "_blurSwapIn_1taee_1";
var blurSwapOut = "_blurSwapOut_1taee_1";
var pulseGlow = "_pulseGlow_1taee_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1taee_1";
var fade = "_fade_1taee_1";
var fadeInUp = "_fadeInUp_1taee_1";
var fadeInDown = "_fadeInDown_1taee_1";
var fadeInLeft = "_fadeInLeft_1taee_1";
var fadeInRight = "_fadeInRight_1taee_1";
var fadeOut = "_fadeOut_1taee_1";
var fadeOutDown = "_fadeOutDown_1taee_1";
var fadeOutUp = "_fadeOutUp_1taee_1";
var fadeOutLeft = "_fadeOutLeft_1taee_1";
var fadeOutRight = "_fadeOutRight_1taee_1";
var ping = "_ping_1taee_1";
var blinkBackground = "_blinkBackground_1taee_1";
var typingBlink = "_typingBlink_1taee_1";
var TestRunDetailView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	header,
	headingRow,
	backButton,
	runHeading,
	capitalized,
	loading,
	caseList,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1taee_1",
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
var TestRunDetailView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TestRunDetailView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestRunDetailView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TestRunDetailView_default as default };
