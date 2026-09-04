import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, Mt as markRaw, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, at as resolveComponent, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, m as withKeys, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { r as DialogHeader_default, t as DialogTitle_default } from "./DialogTitle-vvfpWO6w.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { c as useWorkflowHistoryStore } from "./builder.store-DisrfU0l.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { Hn as N8nSegmentControl_default } from "./expressions-D0CrLSIZ.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
import { Ei as deepCopy, d as normalizeMetricScore, u as averageNormalizedScore } from "./src-B255AdRt.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePostHog } from "./posthog.store-DkF9cXA_.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import "./constants-CMdL1Kzl.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-y-0nsqzo.js";
import { t as useEvaluationStore } from "./evaluation.store-TsSui26m.js";
import { t as require_orderBy } from "./orderBy-B3RMZl-q.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-Dv3DrAtH.js";
import { S as indexOfMax, a as countSettledRuns, d as formatMetricLabel, f as formatMetricPercent, l as formatDeltaPercent, o as deriveRunsStatus, r as computeDelta, s as extractAnswerText, t as buildScoreShapedMetricGroups, w as stringifyValue, x as getUserDefinedMetricNames, y as getMetricDescriptionKey } from "./evaluation.utils-CwKNdSqS.js";
import { t as useEvaluationsLicense } from "./useEvaluationsLicense-BHjb_k5J.js";
import { a as RunningIndicator_default, i as versionLetter, n as VersionAvatar_default, o as useEvalCollectionsStore, r as versionColorVar, t as GroupedMetricChart_default } from "./GroupedMetricChart-DRrM8S_c.js";
import { t as require_omit } from "./omit-bx9YGMg2.js";
import { t as useEvalCollectionsFlag } from "./useEvalCollectionsFlag-Dbyu7rMI.js";
//#region src/features/ai/evaluation.ee/components/Compare/CompareHeader.vue?vue&type=script&setup=true&lang.ts
var CompareHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CompareHeader",
	props: {
		collectionName: {},
		versions: {},
		bestVersionIndex: {},
		workflowId: {},
		collectionId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const store = useEvalCollectionsStore();
		const status = computed(() => deriveRunsStatus(props.versions));
		const isRunning = computed(() => status.value === "running");
		const completedCount = computed(() => countSettledRuns(props.versions));
		const canRerun = computed(() => !isRunning.value && props.versions.length > 0);
		const rerunning = ref(false);
		async function onRerun() {
			if (rerunning.value || !canRerun.value) return;
			rerunning.value = true;
			try {
				await store.rerunCollection(props.workflowId, props.collectionId);
			} catch (error) {
				toast.showError(error, i18n.baseText("evaluation.compare.errors.rerunFailed"));
			} finally {
				rerunning.value = false;
			}
		}
		const statusBadge = computed(() => status.value === "error" ? {
			theme: "warning",
			label: i18n.baseText("evaluation.collections.card.failed")
		} : {
			theme: "success",
			label: i18n.baseText("evaluation.collections.card.done")
		});
		const legend = computed(() => props.versions.map((version) => ({
			...version,
			scorePercent: version.avgScore !== null ? Math.round(version.avgScore * 100) : null,
			isBest: version.index === props.bestVersionIndex,
			isRunning: version.status === "new" || version.status === "running"
		})));
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("header", {
				class: normalizeClass(_ctx.$style.header),
				"data-test-id": "compare-header"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleGroup) }, [createVNode(unref(N8nText_default), {
					tag: "h2",
					size: "xlarge",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.collectionName), 1)]),
					_: 1
				}), isRunning.value ? (openBlock(), createBlock(RunningIndicator_default, {
					key: 0,
					completed: completedCount.value,
					total: __props.versions.length
				}, null, 8, ["completed", "total"])) : (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 1,
					theme: statusBadge.value.theme,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(statusBadge.value.label), 1)]),
					_: 1
				}, 8, ["theme"]))], 2), canRerun.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "outline",
					size: "small",
					icon: "refresh-cw",
					label: unref(i18n).baseText("evaluation.compare.rerun"),
					loading: rerunning.value,
					disabled: rerunning.value,
					"data-test-id": "compare-rerun",
					onClick: onRerun
				}, null, 8, [
					"label",
					"loading",
					"disabled"
				])) : createCommentVNode("", true)], 2),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.collections.card.meta.versions", { adjustToNumber: __props.versions.length })), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.legend) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(legend.value, (version) => {
					return openBlock(), createBlock(_component_RouterLink, {
						key: version.testRunId,
						to: {
							name: unref(VIEWS).EVALUATION_RUNS_DETAIL,
							params: {
								workflowId: __props.workflowId,
								runId: version.testRunId
							}
						},
						class: normalizeClass(_ctx.$style.chip),
						title: unref(i18n).baseText("evaluation.compare.versionsLegend.inspectRun"),
						"data-test-id": "compare-header-version"
					}, {
						default: withCtx(() => [
							createVNode(VersionAvatar_default, {
								index: version.index,
								variant: "square",
								size: "small"
							}, null, 8, ["index"]),
							createVNode(unref(N8nText_default), {
								size: "xsmall",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(version.label), 1)]),
								_: 2
							}, 1024),
							version.isRunning ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 0,
								icon: "spinner",
								size: "xsmall",
								spin: "",
								title: unref(i18n).baseText("evaluation.compare.versionsLegend.running")
							}, null, 8, ["title"])) : version.scorePercent !== null ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 1,
								size: "xsmall",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(version.scorePercent) + "% ", 1)]),
								_: 2
							}, 1024)) : createCommentVNode("", true),
							version.isBest ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 2,
								size: "xsmall",
								bold: "",
								color: "success"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.versionsLegend.best")), 1)]),
								_: 1
							})) : createCommentVNode("", true)
						]),
						_: 2
					}, 1032, [
						"to",
						"class",
						"title"
					]);
				}), 128))], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/CompareHeader.vue?vue&type=style&index=0&lang.module.scss
var header$2 = "_header_1q5sm_388";
var titleRow = "_titleRow_1q5sm_394";
var titleGroup = "_titleGroup_1q5sm_401";
var legend = "_legend_1q5sm_408";
var chip$1 = "_chip_1q5sm_415";
var shimmer$9 = "_shimmer_1q5sm_1";
var spin$9 = "_spin_1q5sm_1";
var opacityPulse$9 = "_opacityPulse_1q5sm_1";
var popoverIn$9 = "_popoverIn_1q5sm_1";
var fadeIn$9 = "_fadeIn_1q5sm_1";
var collapsibleSlideDown$9 = "_collapsibleSlideDown_1q5sm_1";
var collapsibleSlideUp$9 = "_collapsibleSlideUp_1q5sm_1";
var collapsibleSlideDownBlurred$9 = "_collapsibleSlideDownBlurred_1q5sm_1";
var collapsibleSlideUpBlurred$9 = "_collapsibleSlideUpBlurred_1q5sm_1";
var blurSwapIn$9 = "_blurSwapIn_1q5sm_1";
var blurSwapOut$9 = "_blurSwapOut_1q5sm_1";
var pulseGlow$9 = "_pulseGlow_1q5sm_1";
var pulseGlowDelayed$9 = "_pulseGlowDelayed_1q5sm_1";
var fade$9 = "_fade_1q5sm_1";
var fadeInUp$9 = "_fadeInUp_1q5sm_1";
var fadeInDown$9 = "_fadeInDown_1q5sm_1";
var fadeInLeft$9 = "_fadeInLeft_1q5sm_1";
var fadeInRight$9 = "_fadeInRight_1q5sm_1";
var fadeOut$9 = "_fadeOut_1q5sm_1";
var fadeOutDown$9 = "_fadeOutDown_1q5sm_1";
var fadeOutUp$9 = "_fadeOutUp_1q5sm_1";
var fadeOutLeft$9 = "_fadeOutLeft_1q5sm_1";
var fadeOutRight$9 = "_fadeOutRight_1q5sm_1";
var ping$9 = "_ping_1q5sm_1";
var blinkBackground$9 = "_blinkBackground_1q5sm_1";
var typingBlink$9 = "_typingBlink_1q5sm_1";
var CompareHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: header$2,
	titleRow,
	titleGroup,
	legend,
	chip: chip$1,
	shimmer: shimmer$9,
	spin: spin$9,
	"skeleton-pulse": "_skeleton-pulse_1q5sm_1",
	opacityPulse: opacityPulse$9,
	popoverIn: popoverIn$9,
	fadeIn: fadeIn$9,
	collapsibleSlideDown: collapsibleSlideDown$9,
	collapsibleSlideUp: collapsibleSlideUp$9,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$9,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$9,
	blurSwapIn: blurSwapIn$9,
	blurSwapOut: blurSwapOut$9,
	pulseGlow: pulseGlow$9,
	pulseGlowDelayed: pulseGlowDelayed$9,
	fade: fade$9,
	fadeInUp: fadeInUp$9,
	fadeInDown: fadeInDown$9,
	fadeInLeft: fadeInLeft$9,
	fadeInRight: fadeInRight$9,
	fadeOut: fadeOut$9,
	fadeOutDown: fadeOutDown$9,
	fadeOutUp: fadeOutUp$9,
	fadeOutLeft: fadeOutLeft$9,
	fadeOutRight: fadeOutRight$9,
	ping: ping$9,
	blinkBackground: blinkBackground$9,
	typingBlink: typingBlink$9
};
var CompareHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CompareHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CompareHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/MetricCriteria.vue?vue&type=script&setup=true&lang.ts
var PREVIEW_CHARS = 120;
var MetricCriteria_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricCriteria",
	props: {
		metricKey: {},
		prompt: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isModalOpen = ref(false);
		const description = computed(() => {
			const key = getMetricDescriptionKey(props.metricKey);
			return key ? i18n.baseText(key) : "";
		});
		const isLong = computed(() => (props.prompt?.length ?? 0) > PREVIEW_CHARS);
		const previewText = computed(() => {
			if (!props.prompt) return "";
			if (!isLong.value) return props.prompt;
			return `${props.prompt.slice(0, PREVIEW_CHARS).trimEnd()}…`;
		});
		const modalTitle = computed(() => formatMetricLabel(props.metricKey));
		const promptParagraphs = computed(() => (props.prompt ?? "").split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter((paragraph) => paragraph.length > 0));
		return (_ctx, _cache) => {
			return description.value || __props.prompt ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.wrap),
				"data-test-id": "metric-criteria"
			}, [
				description.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "text-light",
					class: normalizeClass(_ctx.$style.text)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				__props.prompt ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "xsmall",
					color: "text-light",
					class: normalizeClass(_ctx.$style.text)
				}, {
					default: withCtx(() => [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("evaluation.metric.criteria.label")), 3),
						createTextVNode(" " + toDisplayString(previewText.value) + " ", 1),
						isLong.value ? (openBlock(), createElementBlock("button", {
							key: 0,
							type: "button",
							class: normalizeClass(_ctx.$style.toggle),
							"data-test-id": "metric-criteria-toggle",
							onClick: _cache[0] || (_cache[0] = withModifiers(($event) => isModalOpen.value = true, ["stop"]))
						}, toDisplayString(unref(i18n).baseText("evaluation.metric.criteria.showMore")), 3)) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createVNode(unref(Dialog_default), {
					open: isModalOpen.value,
					size: "large",
					"onUpdate:open": _cache[1] || (_cache[1] = (value) => isModalOpen.value = value)
				}, {
					default: withCtx(() => [createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(modalTitle.value), 1)]),
							_: 1
						})]),
						_: 1
					}), createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.modalBody),
						"data-test-id": "metric-criteria-modal"
					}, [description.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-base",
						class: normalizeClass(_ctx.$style.paragraph)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.criteria) }, [createVNode(unref(N8nText_default), {
						size: "xsmall",
						bold: "",
						color: "text-light",
						class: normalizeClass(_ctx.$style.criteriaLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.metric.criteria.label")), 1)]),
						_: 1
					}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(promptParagraphs.value, (paragraph, index) => {
						return openBlock(), createBlock(unref(N8nText_default), {
							key: index,
							tag: "p",
							size: "small",
							color: "text-base",
							class: normalizeClass(_ctx.$style.paragraph)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(paragraph), 1)]),
							_: 2
						}, 1032, ["class"]);
					}), 128))], 2)], 2)]),
					_: 1
				}, 8, ["open"])
			], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/MetricCriteria.vue?vue&type=style&index=0&lang.module.scss
var wrap = "_wrap_1i96x_388";
var text = "_text_1i96x_395";
var label = "_label_1i96x_399";
var toggle = "_toggle_1i96x_403";
var modalBody = "_modalBody_1i96x_413";
var criteria = "_criteria_1i96x_422";
var criteriaLabel = "_criteriaLabel_1i96x_428";
var paragraph = "_paragraph_1i96x_433";
var shimmer$8 = "_shimmer_1i96x_1";
var spin$8 = "_spin_1i96x_1";
var opacityPulse$8 = "_opacityPulse_1i96x_1";
var popoverIn$8 = "_popoverIn_1i96x_1";
var fadeIn$8 = "_fadeIn_1i96x_1";
var collapsibleSlideDown$8 = "_collapsibleSlideDown_1i96x_1";
var collapsibleSlideUp$8 = "_collapsibleSlideUp_1i96x_1";
var collapsibleSlideDownBlurred$8 = "_collapsibleSlideDownBlurred_1i96x_1";
var collapsibleSlideUpBlurred$8 = "_collapsibleSlideUpBlurred_1i96x_1";
var blurSwapIn$8 = "_blurSwapIn_1i96x_1";
var blurSwapOut$8 = "_blurSwapOut_1i96x_1";
var pulseGlow$8 = "_pulseGlow_1i96x_1";
var pulseGlowDelayed$8 = "_pulseGlowDelayed_1i96x_1";
var fade$8 = "_fade_1i96x_1";
var fadeInUp$8 = "_fadeInUp_1i96x_1";
var fadeInDown$8 = "_fadeInDown_1i96x_1";
var fadeInLeft$8 = "_fadeInLeft_1i96x_1";
var fadeInRight$8 = "_fadeInRight_1i96x_1";
var fadeOut$8 = "_fadeOut_1i96x_1";
var fadeOutDown$8 = "_fadeOutDown_1i96x_1";
var fadeOutUp$8 = "_fadeOutUp_1i96x_1";
var fadeOutLeft$8 = "_fadeOutLeft_1i96x_1";
var fadeOutRight$8 = "_fadeOutRight_1i96x_1";
var ping$8 = "_ping_1i96x_1";
var blinkBackground$8 = "_blinkBackground_1i96x_1";
var typingBlink$8 = "_typingBlink_1i96x_1";
var MetricCriteria_vue_vue_type_style_index_0_lang_module_default = {
	wrap,
	text,
	label,
	toggle,
	modalBody,
	criteria,
	criteriaLabel,
	paragraph,
	shimmer: shimmer$8,
	spin: spin$8,
	"skeleton-pulse": "_skeleton-pulse_1i96x_1",
	opacityPulse: opacityPulse$8,
	popoverIn: popoverIn$8,
	fadeIn: fadeIn$8,
	collapsibleSlideDown: collapsibleSlideDown$8,
	collapsibleSlideUp: collapsibleSlideUp$8,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$8,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$8,
	blurSwapIn: blurSwapIn$8,
	blurSwapOut: blurSwapOut$8,
	pulseGlow: pulseGlow$8,
	pulseGlowDelayed: pulseGlowDelayed$8,
	fade: fade$8,
	fadeInUp: fadeInUp$8,
	fadeInDown: fadeInDown$8,
	fadeInLeft: fadeInLeft$8,
	fadeInRight: fadeInRight$8,
	fadeOut: fadeOut$8,
	fadeOutDown: fadeOutDown$8,
	fadeOutUp: fadeOutUp$8,
	fadeOutLeft: fadeOutLeft$8,
	fadeOutRight: fadeOutRight$8,
	ping: ping$8,
	blinkBackground: blinkBackground$8,
	typingBlink: typingBlink$8
};
var MetricCriteria_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MetricCriteria_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricCriteria_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/ScoreChart.vue?vue&type=script&setup=true&lang.ts
var CRITICAL_THRESHOLD$1 = .6;
var ScoreChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ScoreChart",
	props: {
		metricGroups: {},
		versions: {},
		metricPrompts: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const mode = ref("average");
		const modeOptions = computed(() => [{
			label: i18n.baseText("evaluation.compare.scoreChart.toggle.average"),
			value: "average"
		}, {
			label: i18n.baseText("evaluation.compare.scoreChart.toggle.perCase"),
			value: "perCase",
			disabled: true
		}]);
		const letters = computed(() => props.versions.map((version) => version.letter));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "compare-score-chart"
			}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "medium",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.scoreChart.heading")), 1)]),
				_: 1
			}), createVNode(unref(N8nTooltip_default), {
				placement: "top",
				content: unref(i18n).baseText("evaluation.compare.scoreChart.toggle.perCaseComingSoon")
			}, {
				default: withCtx(() => [createVNode(unref(N8nSegmentControl_default), {
					modelValue: mode.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mode.value = $event),
					size: "small",
					options: modeOptions.value
				}, null, 8, ["modelValue", "options"])]),
				_: 1
			}, 8, ["content"])], 2), __props.metricGroups.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.panels)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.metricGroups, (group) => {
				return openBlock(), createElementBlock("div", {
					key: group.key,
					class: normalizeClass(_ctx.$style.panel),
					"data-test-id": "compare-score-chart-panel"
				}, [
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: "",
						color: "text-base",
						class: normalizeClass(_ctx.$style.panelHeading)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
						_: 2
					}, 1032, ["class"]),
					createVNode(MetricCriteria_default, {
						"metric-key": group.key,
						prompt: __props.metricPrompts?.[group.key]
					}, null, 8, ["metric-key", "prompt"]),
					createVNode(GroupedMetricChart_default, {
						variant: "detailed",
						groups: [{
							label: group.label,
							values: group.values,
							letters: letters.value
						}],
						max: 1,
						"critical-threshold": CRITICAL_THRESHOLD$1
					}, null, 8, ["groups"])
				], 2);
			}), 128))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.scoreChart.empty")), 1)]),
				_: 1
			})], 2))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/ScoreChart.vue?vue&type=style&index=0&lang.module.scss
var card$1 = "_card_1wsus_388";
var header$1 = "_header_1wsus_398";
var panels = "_panels_1wsus_405";
var panel$1 = "_panel_1wsus_405";
var panelHeading = "_panelHeading_1wsus_417";
var empty$1 = "_empty_1wsus_424";
var shimmer$7 = "_shimmer_1wsus_1";
var spin$7 = "_spin_1wsus_1";
var opacityPulse$7 = "_opacityPulse_1wsus_1";
var popoverIn$7 = "_popoverIn_1wsus_1";
var fadeIn$7 = "_fadeIn_1wsus_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_1wsus_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_1wsus_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_1wsus_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_1wsus_1";
var blurSwapIn$7 = "_blurSwapIn_1wsus_1";
var blurSwapOut$7 = "_blurSwapOut_1wsus_1";
var pulseGlow$7 = "_pulseGlow_1wsus_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_1wsus_1";
var fade$7 = "_fade_1wsus_1";
var fadeInUp$7 = "_fadeInUp_1wsus_1";
var fadeInDown$7 = "_fadeInDown_1wsus_1";
var fadeInLeft$7 = "_fadeInLeft_1wsus_1";
var fadeInRight$7 = "_fadeInRight_1wsus_1";
var fadeOut$7 = "_fadeOut_1wsus_1";
var fadeOutDown$7 = "_fadeOutDown_1wsus_1";
var fadeOutUp$7 = "_fadeOutUp_1wsus_1";
var fadeOutLeft$7 = "_fadeOutLeft_1wsus_1";
var fadeOutRight$7 = "_fadeOutRight_1wsus_1";
var ping$7 = "_ping_1wsus_1";
var blinkBackground$7 = "_blinkBackground_1wsus_1";
var typingBlink$7 = "_typingBlink_1wsus_1";
var ScoreChart_vue_vue_type_style_index_0_lang_module_default = {
	card: card$1,
	header: header$1,
	panels,
	panel: panel$1,
	panelHeading,
	empty: empty$1,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_1wsus_1",
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
var ScoreChart_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ScoreChart_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ScoreChart_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/AiInsightsCard.vue?vue&type=script&setup=true&lang.ts
var AiInsightsCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiInsightsCard",
	props: {
		workflowId: {},
		collectionId: {},
		ready: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const store = useEvalCollectionsStore();
		const license = useEvaluationsLicense();
		const errored = ref(false);
		const licenseChecked = ref(false);
		const insights = computed(() => store.getInsights(props.collectionId));
		const loading = computed(() => store.loadingInsights[props.collectionId] ?? false);
		const hidden = computed(() => !licenseChecked.value || !license.isLicensed.value);
		const showCard = computed(() => !hidden.value && (props.ready || !!insights.value || loading.value || errored.value));
		const generatedTime = computed(() => {
			const iso = insights.value?.generatedAt;
			if (!iso) return "";
			const date = new Date(iso);
			if (Number.isNaN(date.getTime())) return "";
			return date.toLocaleTimeString(void 0, {
				hour: "2-digit",
				minute: "2-digit"
			});
		});
		const primaryRegression = computed(() => insights.value?.insights.regressions[0] ?? null);
		async function load(forceRegenerate) {
			errored.value = false;
			try {
				await store.generateInsights(props.workflowId, props.collectionId, forceRegenerate);
			} catch {
				errored.value = true;
			}
		}
		async function maybeGenerate() {
			if (!licenseChecked.value || !license.isLicensed.value) return;
			if (!props.ready) return;
			if (store.getInsights(props.collectionId) || loading.value) return;
			await load(false);
		}
		onMounted(async () => {
			await license.ensureLicenseLoaded();
			licenseChecked.value = true;
			await maybeGenerate();
		});
		watch(() => props.ready, () => {
			maybeGenerate();
		});
		return (_ctx, _cache) => {
			return showCard.value ? (openBlock(), createElementBlock("section", {
				key: 0,
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "compare-ai-insights"
			}, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
				createVNode(unref(N8nIcon_default), {
					icon: "wand-sparkles",
					size: "small"
				}),
				createVNode(unref(N8nText_default), {
					size: "medium",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.title")), 1)]),
					_: 1
				}),
				generatedTime.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.generatedAt", { interpolate: { time: generatedTime.value } })), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2)], 2), loading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.takeaways),
				"data-test-id": "compare-ai-insights-loading"
			}, [(openBlock(), createElementBlock(Fragment, null, renderList(3, (n) => {
				return createBaseVNode("div", {
					key: n,
					class: normalizeClass([_ctx.$style.takeaway, _ctx.$style.skeleton])
				}, null, 2);
			}), 64))], 2)) : errored.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.errorCard),
				"data-test-id": "compare-ai-insights-error"
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.error")), 1)]),
				_: 1
			}), createVNode(unref(N8nButton_default), {
				variant: "outline",
				size: "small",
				label: unref(i18n).baseText("evaluation.compare.insights.retry"),
				onClick: _cache[0] || (_cache[0] = ($event) => load(true))
			}, null, 8, ["label"])], 2)) : insights.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.takeaways) }, [
				createBaseVNode("article", { class: normalizeClass([_ctx.$style.takeaway, _ctx.$style.winner]) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.badge, _ctx.$style.badgeSuccess]) }, [createVNode(unref(N8nIcon_default), {
						icon: "circle-check",
						size: "small"
					})], 2),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						bold: "",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.winner")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(insights.value.insights.winner.headline), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(insights.value.insights.winner.body), 1)]),
						_: 1
					})
				], 2),
				createBaseVNode("article", { class: normalizeClass([_ctx.$style.takeaway, primaryRegression.value ? _ctx.$style.regression : _ctx.$style.neutral]) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.badge, primaryRegression.value ? _ctx.$style.badgeDanger : _ctx.$style.badgeSuccess]) }, [createVNode(unref(N8nIcon_default), {
						icon: primaryRegression.value ? "triangle-alert" : "circle-check",
						size: "small"
					}, null, 8, ["icon"])], 2),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						bold: "",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.regression")), 1)]),
						_: 1
					}),
					primaryRegression.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(primaryRegression.value.headline), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(primaryRegression.value.body), 1)]),
						_: 1
					})], 64)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.noRegressions")), 1)]),
						_: 1
					}))
				], 2),
				createBaseVNode("article", { class: normalizeClass([_ctx.$style.takeaway, _ctx.$style.next]) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.badge, _ctx.$style.badgeInfo]) }, [createVNode(unref(N8nIcon_default), {
						icon: "arrow-right",
						size: "small"
					})], 2),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						bold: "",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.suggestedNext")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(insights.value.insights.suggestedNext.headline), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(insights.value.insights.suggestedNext.body), 1)]),
						_: 1
					})
				], 2)
			], 2), insights.value.status === "fallback" ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "xsmall",
				color: "text-light",
				class: normalizeClass(_ctx.$style.fallbackNote)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.insights.fallbackNote")), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/AiInsightsCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_7nuq1_388";
var header = "_header_7nuq1_398";
var title = "_title_7nuq1_405";
var takeaways = "_takeaways_7nuq1_411";
var takeaway = "_takeaway_7nuq1_411";
var winner = "_winner_7nuq1_426";
var regression = "_regression_7nuq1_430";
var next = "_next_7nuq1_434";
var neutral = "_neutral_7nuq1_438";
var badge = "_badge_7nuq1_442";
var badgeSuccess = "_badgeSuccess_7nuq1_453";
var badgeDanger = "_badgeDanger_7nuq1_457";
var badgeInfo = "_badgeInfo_7nuq1_461";
var skeleton$1 = "_skeleton_7nuq1_465";
var errorCard = "_errorCard_7nuq1_471";
var fallbackNote = "_fallbackNote_7nuq1_482";
var shimmer$6 = "_shimmer_7nuq1_1";
var spin$6 = "_spin_7nuq1_1";
var opacityPulse$6 = "_opacityPulse_7nuq1_1";
var popoverIn$6 = "_popoverIn_7nuq1_1";
var fadeIn$6 = "_fadeIn_7nuq1_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_7nuq1_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_7nuq1_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_7nuq1_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_7nuq1_1";
var blurSwapIn$6 = "_blurSwapIn_7nuq1_1";
var blurSwapOut$6 = "_blurSwapOut_7nuq1_1";
var pulseGlow$6 = "_pulseGlow_7nuq1_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_7nuq1_1";
var fade$6 = "_fade_7nuq1_1";
var fadeInUp$6 = "_fadeInUp_7nuq1_1";
var fadeInDown$6 = "_fadeInDown_7nuq1_1";
var fadeInLeft$6 = "_fadeInLeft_7nuq1_1";
var fadeInRight$6 = "_fadeInRight_7nuq1_1";
var fadeOut$6 = "_fadeOut_7nuq1_1";
var fadeOutDown$6 = "_fadeOutDown_7nuq1_1";
var fadeOutUp$6 = "_fadeOutUp_7nuq1_1";
var fadeOutLeft$6 = "_fadeOutLeft_7nuq1_1";
var fadeOutRight$6 = "_fadeOutRight_7nuq1_1";
var ping$6 = "_ping_7nuq1_1";
var blinkBackground$6 = "_blinkBackground_7nuq1_1";
var typingBlink$6 = "_typingBlink_7nuq1_1";
var AiInsightsCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	header,
	title,
	takeaways,
	takeaway,
	winner,
	regression,
	next,
	neutral,
	badge,
	badgeSuccess,
	badgeDanger,
	badgeInfo,
	skeleton: skeleton$1,
	errorCard,
	fallbackNote,
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_7nuq1_1",
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
var AiInsightsCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiInsightsCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiInsightsCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/CasesTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["aria-sort"];
var _hoisted_2$1 = ["aria-sort"];
var _hoisted_3 = ["aria-sort"];
var _hoisted_4 = ["onClick", "onKeydown"];
var _hoisted_5 = ["title"];
var _hoisted_6 = { key: 0 };
var CRITICAL_THRESHOLD = .6;
var CasesTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CasesTable",
	props: {
		versions: {},
		caseRows: {},
		isRunning: { type: Boolean }
	},
	emits: ["drilldown"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const sort = ref({
			key: "spread",
			dir: "desc"
		});
		function toggleSort(key) {
			if (sort.value.key === key) sort.value = {
				key,
				dir: sort.value.dir === "asc" ? "desc" : "asc"
			};
			else sort.value = {
				key,
				dir: key === "index" ? "asc" : "desc"
			};
		}
		function ariaSort(key) {
			if (sort.value.key !== key) return "none";
			return sort.value.dir === "asc" ? "ascending" : "descending";
		}
		function bestScore(row) {
			if (row.bestVersionIndex === null) return null;
			return row.cells[row.bestVersionIndex].score;
		}
		function scoreSpread(row) {
			const scores = row.cells.map((cell) => cell.score).filter((s) => s !== null);
			if (scores.length < 2) return 0;
			return Math.max(...scores) - Math.min(...scores);
		}
		const sortedRows = computed(() => {
			const rows = [...props.caseRows];
			const dir = sort.value.dir === "asc" ? 1 : -1;
			const value = (row) => {
				if (sort.value.key === "index") return row.index;
				if (sort.value.key === "best") return bestScore(row) ?? -1;
				return scoreSpread(row);
			};
			return rows.sort((a, b) => (value(a) - value(b)) * dir);
		});
		function isCritical(score) {
			return score !== null && score < CRITICAL_THRESHOLD;
		}
		function scoreLabel(cell) {
			if (cell.score !== null) return formatMetricPercent(cell.score);
			return cell.testCaseId !== null ? "–" : "⊘";
		}
		function deltas(row) {
			const best = bestScore(row);
			if (best === null || row.bestVersionIndex === null) return [];
			return row.cells.filter((cell) => cell.versionIndex !== row.bestVersionIndex && cell.score !== null).map((cell) => ({
				versionIndex: cell.versionIndex,
				letter: props.versions[cell.versionIndex]?.letter ?? "",
				delta: formatDeltaPercent(computeDelta(cell.score ?? void 0, best))
			}));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("table", {
				class: normalizeClass(_ctx.$style.table),
				"data-test-id": "compare-cases-table"
			}, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [
				createBaseVNode("th", {
					class: normalizeClass(_ctx.$style.num),
					role: "button",
					tabindex: "0",
					"aria-sort": ariaSort("index"),
					onClick: _cache[0] || (_cache[0] = ($event) => toggleSort("index")),
					onKeydown: [_cache[1] || (_cache[1] = withKeys(($event) => toggleSort("index"), ["enter"])), _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => toggleSort("index"), ["prevent"]), ["space"]))]
				}, toDisplayString(unref(i18n).baseText("evaluation.compare.cases.col.index")), 43, _hoisted_1$3),
				createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("evaluation.compare.cases.col.input")), 1),
				(openBlock(true), createElementBlock(Fragment, null, renderList(__props.versions, (version) => {
					return openBlock(), createElementBlock("th", {
						key: version.testRunId,
						class: normalizeClass(_ctx.$style.score)
					}, toDisplayString(version.letter), 3);
				}), 128)),
				createBaseVNode("th", {
					role: "button",
					tabindex: "0",
					"aria-sort": ariaSort("best"),
					onClick: _cache[3] || (_cache[3] = ($event) => toggleSort("best")),
					onKeydown: [_cache[4] || (_cache[4] = withKeys(($event) => toggleSort("best"), ["enter"])), _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => toggleSort("best"), ["prevent"]), ["space"]))]
				}, toDisplayString(unref(i18n).baseText("evaluation.compare.cases.col.best")), 41, _hoisted_2$1),
				createBaseVNode("th", {
					role: "button",
					tabindex: "0",
					"aria-sort": ariaSort("spread"),
					onClick: _cache[6] || (_cache[6] = ($event) => toggleSort("spread")),
					onKeydown: [_cache[7] || (_cache[7] = withKeys(($event) => toggleSort("spread"), ["enter"])), _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => toggleSort("spread"), ["prevent"]), ["space"]))]
				}, toDisplayString(unref(i18n).baseText("evaluation.compare.cases.col.deltaVsBest")), 41, _hoisted_3),
				createBaseVNode("th", { class: normalizeClass(_ctx.$style.chevronCol) }, null, 2)
			])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedRows.value, (row) => {
				return openBlock(), createElementBlock("tr", {
					key: row.index,
					class: normalizeClass(_ctx.$style.row),
					tabindex: "0",
					"data-test-id": "compare-cases-row",
					onClick: ($event) => emit("drilldown", row.index),
					onKeydown: withKeys(($event) => emit("drilldown", row.index), ["enter"])
				}, [
					createBaseVNode("td", { class: normalizeClass(_ctx.$style.num) }, toDisplayString(row.displayIndex), 3),
					createBaseVNode("td", {
						class: normalizeClass(_ctx.$style.input),
						title: row.inputPreview
					}, [row.inputPreview ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(row.inputPreview), 1)) : __props.isRunning ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.inputSkeleton),
						"data-test-id": "compare-cases-input-skeleton",
						"aria-hidden": "true"
					}, null, 2)) : createCommentVNode("", true)], 10, _hoisted_5),
					(openBlock(true), createElementBlock(Fragment, null, renderList(row.cells, (cell) => {
						return openBlock(), createElementBlock("td", {
							key: cell.versionIndex,
							class: normalizeClass(_ctx.$style.score)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.chip) }, [createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.dot),
							style: normalizeStyle({ background: unref(versionColorVar)(cell.versionIndex) })
						}, null, 6), createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: isCritical(cell.score) ? "danger" : "text-base",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(scoreLabel(cell)), 1)]),
							_: 2
						}, 1032, ["color"])], 2)], 2);
					}), 128)),
					createBaseVNode("td", null, [row.bestVersionIndex !== null ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.bestPill)
					}, [createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "success",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.bestPill", { interpolate: { letter: __props.versions[row.bestVersionIndex]?.letter ?? "" } })), 1)]),
						_: 2
					}, 1024)], 2)) : createCommentVNode("", true)]),
					createBaseVNode("td", null, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.deltas) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(deltas(row), (d) => {
						return openBlock(), createBlock(unref(N8nText_default), {
							key: d.versionIndex,
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(d.letter) + " " + toDisplayString(d.delta), 1)]),
							_: 2
						}, 1024);
					}), 128))], 2)]),
					createBaseVNode("td", { class: normalizeClass(_ctx.$style.chevronCol) }, [createVNode(unref(N8nIcon_default), {
						icon: "chevron-right",
						size: "small",
						color: "text-light"
					})], 2)
				], 42, _hoisted_4);
			}), 128))])], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/CasesTable.vue?vue&type=style&index=0&lang.module.scss
var table$1 = "_table_16lud_388";
var row = "_row_16lud_411";
var num = "_num_16lud_418";
var input = "_input_16lud_423";
var inputSkeleton = "_inputSkeleton_16lud_430";
var score = "_score_16lud_446";
var chip = "_chip_16lud_451";
var dot$1 = "_dot_16lud_457";
var bestPill = "_bestPill_16lud_464";
var deltas = "_deltas_16lud_473";
var chevronCol = "_chevronCol_16lud_479";
var shimmer$5 = "_shimmer_16lud_1";
var spin$5 = "_spin_16lud_1";
var opacityPulse$5 = "_opacityPulse_16lud_1";
var popoverIn$5 = "_popoverIn_16lud_1";
var fadeIn$5 = "_fadeIn_16lud_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_16lud_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_16lud_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_16lud_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_16lud_1";
var blurSwapIn$5 = "_blurSwapIn_16lud_1";
var blurSwapOut$5 = "_blurSwapOut_16lud_1";
var pulseGlow$5 = "_pulseGlow_16lud_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_16lud_1";
var fade$5 = "_fade_16lud_1";
var fadeInUp$5 = "_fadeInUp_16lud_1";
var fadeInDown$5 = "_fadeInDown_16lud_1";
var fadeInLeft$5 = "_fadeInLeft_16lud_1";
var fadeInRight$5 = "_fadeInRight_16lud_1";
var fadeOut$5 = "_fadeOut_16lud_1";
var fadeOutDown$5 = "_fadeOutDown_16lud_1";
var fadeOutUp$5 = "_fadeOutUp_16lud_1";
var fadeOutLeft$5 = "_fadeOutLeft_16lud_1";
var fadeOutRight$5 = "_fadeOutRight_16lud_1";
var ping$5 = "_ping_16lud_1";
var blinkBackground$5 = "_blinkBackground_16lud_1";
var typingBlink$5 = "_typingBlink_16lud_1";
var CasesTable_vue_vue_type_style_index_0_lang_module_default = {
	table: table$1,
	row,
	num,
	input,
	inputSkeleton,
	"skeleton-pulse": "_skeleton-pulse_16lud_1",
	score,
	chip,
	dot: dot$1,
	bestPill,
	deltas,
	chevronCol,
	shimmer: shimmer$5,
	spin: spin$5,
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
var CasesTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CasesTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CasesTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/OutputsTab.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["onClick"];
var _hoisted_2 = ["onClick"];
var OutputsTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OutputsTab",
	props: {
		versions: {},
		caseRows: {},
		selectedIndex: {},
		workflowId: {},
		metricScales: {}
	},
	emits: ["update:selectedIndex"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const router = useRouter();
		function openExecution(executionId) {
			if (!executionId) return;
			const { href } = router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: props.workflowId,
					executionId
				}
			});
			window.open(href, "_blank");
		}
		const emit = __emit;
		const i18n = useI18n();
		const selectedRow = computed(() => props.caseRows.find((row) => row.index === props.selectedIndex) ?? props.caseRows[0]);
		function metricEntries(metrics, scales) {
			if (!metrics) return [];
			return getUserDefinedMetricNames(metrics).map((key) => {
				const normalized = normalizeMetricScore(key, metrics[key], scales?.[key]);
				return {
					key,
					label: formatMetricLabel(key),
					value: formatMetricPercent(normalized ?? void 0)
				};
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.outputs),
				"data-test-id": "compare-outputs-tab"
			}, [createBaseVNode("aside", { class: normalizeClass(_ctx.$style.sidebar) }, [createVNode(unref(N8nText_default), {
				size: "xsmall",
				bold: "",
				color: "text-light",
				class: normalizeClass(_ctx.$style.sidebarTitle)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.outputs.casesSidebarTitle")), 1)]),
				_: 1
			}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.caseRows, (row) => {
				return openBlock(), createElementBlock("button", {
					key: row.index,
					type: "button",
					class: normalizeClass([_ctx.$style.caseItem, { [_ctx.$style.caseItemActive]: row.index === selectedRow.value?.index }]),
					"data-test-id": "compare-outputs-case",
					onClick: ($event) => emit("update:selectedIndex", row.index)
				}, [createVNode(unref(N8nText_default), {
					size: "xsmall",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode("#" + toDisplayString(row.displayIndex), 1)]),
					_: 2
				}, 1024), createVNode(unref(N8nText_default), {
					size: "xsmall",
					color: "text-light",
					class: normalizeClass(_ctx.$style.caseItemInput)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(row.inputPreview), 1)]),
					_: 2
				}, 1032, ["class"])], 10, _hoisted_1$2);
			}), 128))], 2), selectedRow.value ? (openBlock(), createElementBlock("section", {
				key: 0,
				class: normalizeClass(_ctx.$style.main)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputRow) }, [createVNode(unref(N8nText_default), {
				size: "xsmall",
				bold: "",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.outputs.input")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), { size: "small" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(selectedRow.value.inputPreview), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.columns) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(selectedRow.value.cells, (cell) => {
				return openBlock(), createElementBlock("article", {
					key: cell.versionIndex,
					class: normalizeClass(_ctx.$style.column),
					"data-test-id": "compare-outputs-column"
				}, [
					createBaseVNode("header", { class: normalizeClass(_ctx.$style.columnHeader) }, [
						createVNode(VersionAvatar_default, {
							index: cell.versionIndex,
							variant: "square",
							size: "small"
						}, null, 8, ["index"]),
						createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.versions[cell.versionIndex]?.label), 1)]),
							_: 2
						}, 1024),
						cell.executionId ? (openBlock(), createElementBlock("button", {
							key: 0,
							type: "button",
							class: normalizeClass(_ctx.$style.inspect),
							"data-test-id": "compare-outputs-inspect",
							onClick: ($event) => openExecution(cell.executionId)
						}, [createVNode(unref(N8nText_default), { size: "xsmall" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.outputs.inspectRun")), 1)]),
							_: 1
						}), createVNode(unref(N8nIcon_default), {
							icon: "external-link",
							size: "xsmall"
						})], 10, _hoisted_2)) : createCommentVNode("", true)
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.answer) }, [cell.outputs !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(extractAnswerText)(cell.outputs)), 1)]),
						_: 2
					}, 1024)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.outputs.noOutput")), 1)]),
						_: 1
					}))], 2),
					createBaseVNode("footer", { class: normalizeClass(_ctx.$style.metrics) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(metricEntries(cell.metrics, __props.versions[cell.versionIndex]?.metricScales ?? __props.metricScales), (metric) => {
						return openBlock(), createElementBlock("span", {
							key: metric.key,
							class: normalizeClass(_ctx.$style.metric)
						}, [createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(metric.label), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), {
							size: "xsmall",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(metric.value), 1)]),
							_: 2
						}, 1024)], 2);
					}), 128))], 2)
				], 2);
			}), 128))], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/OutputsTab.vue?vue&type=style&index=0&lang.module.scss
var outputs = "_outputs_1q66c_388";
var sidebar = "_sidebar_1q66c_394";
var sidebarTitle = "_sidebarTitle_1q66c_404";
var caseItem = "_caseItem_1q66c_408";
var caseItemActive = "_caseItemActive_1q66c_424";
var caseItemInput = "_caseItemInput_1q66c_430";
var main = "_main_1q66c_437";
var inputRow = "_inputRow_1q66c_445";
var columns = "_columns_1q66c_454";
var column = "_column_1q66c_454";
var columnHeader = "_columnHeader_1q66c_471";
var inspect = "_inspect_1q66c_477";
var answer = "_answer_1q66c_493";
var metrics = "_metrics_1q66c_500";
var metric$1 = "_metric_1q66c_500";
var shimmer$4 = "_shimmer_1q66c_1";
var spin$4 = "_spin_1q66c_1";
var opacityPulse$4 = "_opacityPulse_1q66c_1";
var popoverIn$4 = "_popoverIn_1q66c_1";
var fadeIn$4 = "_fadeIn_1q66c_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_1q66c_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_1q66c_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_1q66c_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_1q66c_1";
var blurSwapIn$4 = "_blurSwapIn_1q66c_1";
var blurSwapOut$4 = "_blurSwapOut_1q66c_1";
var pulseGlow$4 = "_pulseGlow_1q66c_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_1q66c_1";
var fade$4 = "_fade_1q66c_1";
var fadeInUp$4 = "_fadeInUp_1q66c_1";
var fadeInDown$4 = "_fadeInDown_1q66c_1";
var fadeInLeft$4 = "_fadeInLeft_1q66c_1";
var fadeInRight$4 = "_fadeInRight_1q66c_1";
var fadeOut$4 = "_fadeOut_1q66c_1";
var fadeOutDown$4 = "_fadeOutDown_1q66c_1";
var fadeOutUp$4 = "_fadeOutUp_1q66c_1";
var fadeOutLeft$4 = "_fadeOutLeft_1q66c_1";
var fadeOutRight$4 = "_fadeOutRight_1q66c_1";
var ping$4 = "_ping_1q66c_1";
var blinkBackground$4 = "_blinkBackground_1q66c_1";
var typingBlink$4 = "_typingBlink_1q66c_1";
var OutputsTab_vue_vue_type_style_index_0_lang_module_default = {
	outputs,
	sidebar,
	sidebarTitle,
	caseItem,
	caseItemActive,
	caseItemInput,
	main,
	inputRow,
	columns,
	column,
	columnHeader,
	inspect,
	answer,
	metrics,
	metric: metric$1,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_1q66c_1",
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
var OutputsTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(OutputsTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OutputsTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/MetricsTab.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "compare-metrics-tab" };
var MetricsTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricsTab",
	props: {
		versions: {},
		metricGroups: {},
		metricPrompts: {}
	},
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [__props.metricGroups.length > 0 ? (openBlock(), createElementBlock("table", {
				key: 0,
				class: normalizeClass(_ctx.$style.table)
			}, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("evaluation.compare.metrics.col.metric")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.versions, (version) => {
				return openBlock(), createElementBlock("th", {
					key: version.testRunId,
					class: normalizeClass(_ctx.$style.value)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.head) }, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.dot),
					style: normalizeStyle({ background: unref(versionColorVar)(version.index) })
				}, null, 6), createTextVNode(" " + toDisplayString(version.letter), 1)], 2)], 2);
			}), 128))])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.metricGroups, (group) => {
				return openBlock(), createElementBlock("tr", {
					key: group.key,
					"data-test-id": "compare-metrics-row"
				}, [createBaseVNode("td", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.metric) }, [createVNode(unref(N8nText_default), { size: "xsmall" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
					_: 2
				}, 1024), createVNode(MetricCriteria_default, {
					"metric-key": group.key,
					prompt: __props.metricPrompts?.[group.key]
				}, null, 8, ["metric-key", "prompt"])], 2)]), (openBlock(true), createElementBlock(Fragment, null, renderList(group.values, (value, versionIndex) => {
					return openBlock(), createElementBlock("td", {
						key: versionIndex,
						class: normalizeClass(_ctx.$style.value)
					}, [createVNode(unref(N8nText_default), {
						size: "xsmall",
						bold: versionIndex === group.bestIndex
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(formatMetricPercent)(value ?? void 0)), 1)]),
						_: 2
					}, 1032, ["bold"])], 2);
				}), 128))]);
			}), 128))])], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.metrics.empty")), 1)]),
				_: 1
			}))]);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/MetricsTab.vue?vue&type=style&index=0&lang.module.scss
var table = "_table_zjf05_388";
var value = "_value_zjf05_404";
var metric = "_metric_zjf05_409";
var head = "_head_zjf05_416";
var dot = "_dot_zjf05_422";
var shimmer$3 = "_shimmer_zjf05_1";
var spin$3 = "_spin_zjf05_1";
var opacityPulse$3 = "_opacityPulse_zjf05_1";
var popoverIn$3 = "_popoverIn_zjf05_1";
var fadeIn$3 = "_fadeIn_zjf05_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_zjf05_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_zjf05_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_zjf05_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_zjf05_1";
var blurSwapIn$3 = "_blurSwapIn_zjf05_1";
var blurSwapOut$3 = "_blurSwapOut_zjf05_1";
var pulseGlow$3 = "_pulseGlow_zjf05_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_zjf05_1";
var fade$3 = "_fade_zjf05_1";
var fadeInUp$3 = "_fadeInUp_zjf05_1";
var fadeInDown$3 = "_fadeInDown_zjf05_1";
var fadeInLeft$3 = "_fadeInLeft_zjf05_1";
var fadeInRight$3 = "_fadeInRight_zjf05_1";
var fadeOut$3 = "_fadeOut_zjf05_1";
var fadeOutDown$3 = "_fadeOutDown_zjf05_1";
var fadeOutUp$3 = "_fadeOutUp_zjf05_1";
var fadeOutLeft$3 = "_fadeOutLeft_zjf05_1";
var fadeOutRight$3 = "_fadeOutRight_zjf05_1";
var ping$3 = "_ping_zjf05_1";
var blinkBackground$3 = "_blinkBackground_zjf05_1";
var typingBlink$3 = "_typingBlink_zjf05_1";
var MetricsTab_vue_vue_type_style_index_0_lang_module_default = {
	table,
	value,
	metric,
	head,
	dot,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_zjf05_1",
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
var MetricsTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MetricsTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricsTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/WorkflowDiffTab.vue?vue&type=script&setup=true&lang.ts
var import_omit = /* @__PURE__ */ __toESM(require_omit(), 1);
var _hoisted_1 = { "data-test-id": "compare-workflow-diff-tab" };
var WorkflowDiffTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowDiffTab",
	props: {
		versions: {},
		workflowId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const workflowsListStore = useWorkflowsListStore();
		const workflowHistoryStore = useWorkflowHistoryStore();
		const sourceIndex = ref(props.versions[0]?.index ?? 0);
		const targetIndex = ref(props.versions[1]?.index ?? props.versions[0]?.index ?? 0);
		const sourceWorkflow = ref();
		const targetWorkflow = ref();
		const isLoading = ref(false);
		const canDiff = computed(() => props.versions.length >= 2);
		const versionOptions = computed(() => props.versions.map((version) => ({
			value: version.index,
			label: `${version.letter} · ${version.label}`
		})));
		const versionByIndex = (index) => props.versions.find((version) => version.index === index);
		const labelFor = (index) => {
			const version = versionByIndex(index);
			return version ? `${version.letter} · ${version.label}` : "";
		};
		let loadRequestId = 0;
		const detach = (workflow) => markRaw(deepCopy(workflow));
		const resolveWorkflow = async (base, version) => {
			const bare = (0, import_omit.default)(base, "pinData");
			if (version.workflowVersionId === null) return bare;
			const snapshot = await workflowHistoryStore.getWorkflowVersion(props.workflowId, version.workflowVersionId);
			return {
				...bare,
				versionId: snapshot.versionId,
				nodes: snapshot.nodes,
				connections: snapshot.connections,
				nodeGroups: snapshot.nodeGroups ?? []
			};
		};
		const load = async () => {
			if (!canDiff.value) return;
			const source = versionByIndex(sourceIndex.value);
			const target = versionByIndex(targetIndex.value);
			if (!source || !target) return;
			const requestId = ++loadRequestId;
			isLoading.value = true;
			try {
				const base = await workflowsListStore.fetchWorkflow(props.workflowId);
				const [resolvedSource, resolvedTarget] = await Promise.all([resolveWorkflow(base, source), resolveWorkflow(base, target)]);
				if (requestId !== loadRequestId) return;
				sourceWorkflow.value = detach(resolvedSource);
				targetWorkflow.value = detach(resolvedTarget);
			} catch (error) {
				toast.showError(error, i18n.baseText("evaluation.compare.workflowDiff.loadError"));
			} finally {
				if (requestId === loadRequestId) isLoading.value = false;
			}
		};
		const onSourceChange = (next) => {
			if (next === targetIndex.value) targetIndex.value = sourceIndex.value;
			sourceIndex.value = next;
		};
		const onTargetChange = (next) => {
			if (next === sourceIndex.value) sourceIndex.value = targetIndex.value;
			targetIndex.value = next;
		};
		watch([sourceIndex, targetIndex], load, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [!canDiff.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.placeholder)
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.workflowDiff.needTwo")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.controls) }, [createBaseVNode("label", { class: normalizeClass(_ctx.$style.control) }, [createVNode(unref(N8nText_default), {
				size: "xsmall",
				color: "text-light",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.workflowDiff.base")), 1)]),
				_: 1
			}), createVNode(unref(N8nSelect_default), {
				"model-value": sourceIndex.value,
				size: "small",
				"data-test-id": "workflow-diff-source-select",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => onSourceChange(Number($event)))
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(versionOptions.value, (opt) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: opt.value,
						value: opt.value,
						label: opt.label
					}, null, 8, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, ["model-value"])], 2), createBaseVNode("label", { class: normalizeClass(_ctx.$style.control) }, [createVNode(unref(N8nText_default), {
				size: "xsmall",
				color: "text-light",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.workflowDiff.compare")), 1)]),
				_: 1
			}), createVNode(unref(N8nSelect_default), {
				"model-value": targetIndex.value,
				size: "small",
				"data-test-id": "workflow-diff-target-select",
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => onTargetChange(Number($event)))
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(versionOptions.value, (opt) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: opt.value,
						value: opt.value,
						label: opt.label
					}, null, 8, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, ["model-value"])], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.diff) }, [isLoading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.state)
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.loading")), 1)]),
				_: 1
			})], 2)) : sourceWorkflow.value && targetWorkflow.value ? (openBlock(), createBlock(WorkflowDiffView_default, {
				key: 1,
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": labelFor(sourceIndex.value),
				"target-label": labelFor(targetIndex.value)
			}, null, 8, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label"
			])) : createCommentVNode("", true)], 2)], 64))]);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/WorkflowDiffTab.vue?vue&type=style&index=0&lang.module.scss
var placeholder = "_placeholder_1uimr_388";
var controls = "_controls_1uimr_397";
var control = "_control_1uimr_397";
var diff = "_diff_1uimr_410";
var state = "_state_1uimr_418";
var shimmer$2 = "_shimmer_1uimr_1";
var spin$2 = "_spin_1uimr_1";
var opacityPulse$2 = "_opacityPulse_1uimr_1";
var popoverIn$2 = "_popoverIn_1uimr_1";
var fadeIn$2 = "_fadeIn_1uimr_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1uimr_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1uimr_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1uimr_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1uimr_1";
var blurSwapIn$2 = "_blurSwapIn_1uimr_1";
var blurSwapOut$2 = "_blurSwapOut_1uimr_1";
var pulseGlow$2 = "_pulseGlow_1uimr_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1uimr_1";
var fade$2 = "_fade_1uimr_1";
var fadeInUp$2 = "_fadeInUp_1uimr_1";
var fadeInDown$2 = "_fadeInDown_1uimr_1";
var fadeInLeft$2 = "_fadeInLeft_1uimr_1";
var fadeInRight$2 = "_fadeInRight_1uimr_1";
var fadeOut$2 = "_fadeOut_1uimr_1";
var fadeOutDown$2 = "_fadeOutDown_1uimr_1";
var fadeOutUp$2 = "_fadeOutUp_1uimr_1";
var fadeOutLeft$2 = "_fadeOutLeft_1uimr_1";
var fadeOutRight$2 = "_fadeOutRight_1uimr_1";
var ping$2 = "_ping_1uimr_1";
var blinkBackground$2 = "_blinkBackground_1uimr_1";
var typingBlink$2 = "_typingBlink_1uimr_1";
var WorkflowDiffTab_vue_vue_type_style_index_0_lang_module_default = {
	placeholder,
	controls,
	control,
	diff,
	state,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1uimr_1",
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
var WorkflowDiffTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowDiffTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowDiffTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/CompareTabs.vue?vue&type=script&setup=true&lang.ts
var CompareTabs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CompareTabs",
	props: {
		versions: {},
		metricGroups: {},
		caseRows: {},
		casesLoading: { type: Boolean },
		casesError: { type: Boolean },
		workflowId: {},
		metricPrompts: {},
		metricScales: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const activeTab = ref("cases");
		const selectedCaseIndex = ref(0);
		const tabs = computed(() => [
			{
				value: "cases",
				label: i18n.baseText("evaluation.compare.tabs.cases")
			},
			{
				value: "outputs",
				label: i18n.baseText("evaluation.compare.tabs.outputs")
			},
			{
				value: "metrics",
				label: i18n.baseText("evaluation.compare.tabs.metrics")
			},
			{
				value: "workflowDiff",
				label: i18n.baseText("evaluation.compare.tabs.workflowDiff")
			}
		]);
		const hasCases = computed(() => props.caseRows.length > 0);
		const isRunning = computed(() => deriveRunsStatus(props.versions) === "running");
		function onDrilldown(caseIndex) {
			selectedCaseIndex.value = caseIndex;
			activeTab.value = "outputs";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", {
				class: normalizeClass(_ctx.$style.tabs),
				"data-test-id": "compare-tabs"
			}, [
				createVNode(unref(N8nTabs_default), {
					modelValue: activeTab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
					options: tabs.value
				}, null, 8, ["modelValue", "options"]),
				__props.casesError ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "danger",
					"data-test-id": "compare-cases-error"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.loadError")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.panel) }, [activeTab.value === "cases" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.casesLoading ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.loading")), 1)]),
					_: 1
				})) : !hasCases.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.empty")), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [isRunning.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "xsmall",
					color: "text-light",
					class: normalizeClass(_ctx.$style.runningNote),
					"data-test-id": "compare-cases-running"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.running")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createVNode(CasesTable_default, {
					versions: __props.versions,
					"case-rows": __props.caseRows,
					"is-running": isRunning.value,
					onDrilldown
				}, null, 8, [
					"versions",
					"case-rows",
					"is-running"
				])], 64))], 64)) : activeTab.value === "outputs" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.casesLoading ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.cases.loading")), 1)]),
					_: 1
				})) : (openBlock(), createBlock(OutputsTab_default, {
					key: 1,
					versions: __props.versions,
					"case-rows": __props.caseRows,
					"selected-index": selectedCaseIndex.value,
					"workflow-id": __props.workflowId,
					"metric-scales": __props.metricScales,
					"onUpdate:selectedIndex": _cache[1] || (_cache[1] = ($event) => selectedCaseIndex.value = $event)
				}, null, 8, [
					"versions",
					"case-rows",
					"selected-index",
					"workflow-id",
					"metric-scales"
				]))], 64)) : activeTab.value === "metrics" ? (openBlock(), createBlock(MetricsTab_default, {
					key: 2,
					versions: __props.versions,
					"metric-groups": __props.metricGroups,
					"metric-prompts": __props.metricPrompts
				}, null, 8, [
					"versions",
					"metric-groups",
					"metric-prompts"
				])) : (openBlock(), createBlock(WorkflowDiffTab_default, {
					key: 3,
					versions: __props.versions,
					"workflow-id": __props.workflowId
				}, null, 8, ["versions", "workflow-id"]))], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/CompareTabs.vue?vue&type=style&index=0&lang.module.scss
var tabs = "_tabs_1pmmm_388";
var panel = "_panel_1pmmm_394";
var runningNote = "_runningNote_1pmmm_398";
var shimmer$1 = "_shimmer_1pmmm_1";
var spin$1 = "_spin_1pmmm_1";
var opacityPulse$1 = "_opacityPulse_1pmmm_1";
var popoverIn$1 = "_popoverIn_1pmmm_1";
var fadeIn$1 = "_fadeIn_1pmmm_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1pmmm_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1pmmm_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1pmmm_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1pmmm_1";
var blurSwapIn$1 = "_blurSwapIn_1pmmm_1";
var blurSwapOut$1 = "_blurSwapOut_1pmmm_1";
var pulseGlow$1 = "_pulseGlow_1pmmm_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1pmmm_1";
var fade$1 = "_fade_1pmmm_1";
var fadeInUp$1 = "_fadeInUp_1pmmm_1";
var fadeInDown$1 = "_fadeInDown_1pmmm_1";
var fadeInLeft$1 = "_fadeInLeft_1pmmm_1";
var fadeInRight$1 = "_fadeInRight_1pmmm_1";
var fadeOut$1 = "_fadeOut_1pmmm_1";
var fadeOutDown$1 = "_fadeOutDown_1pmmm_1";
var fadeOutUp$1 = "_fadeOutUp_1pmmm_1";
var fadeOutLeft$1 = "_fadeOutLeft_1pmmm_1";
var fadeOutRight$1 = "_fadeOutRight_1pmmm_1";
var ping$1 = "_ping_1pmmm_1";
var blinkBackground$1 = "_blinkBackground_1pmmm_1";
var typingBlink$1 = "_typingBlink_1pmmm_1";
var CompareTabs_vue_vue_type_style_index_0_lang_module_default = {
	tabs,
	panel,
	runningNote,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1pmmm_1",
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
	typingBlink: typingBlink$1
};
var CompareTabs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CompareTabs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CompareTabs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/Compare/DatasetMismatchBanner.vue
var DatasetMismatchBanner_default = /* @__PURE__ */ defineComponent({
	__name: "DatasetMismatchBanner",
	props: { mismatch: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const countsLabel = computed(() => props.mismatch.counts.join(", "));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				theme: "warning",
				icon: "triangle-alert",
				"data-test-id": "compare-dataset-mismatch"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.datasetMismatch", { interpolate: { counts: countsLabel.value } })), 1)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/composables/useCompareData.ts
/**
* Shapes a collection's aggregate detail into the compare view's model: one
* `CompareVersion` per run and one `CompareMetricGroup` per score-shaped metric.
* Only aggregate per-version metrics are read here — per-case data is fetched
* separately by the Cases/Outputs components.
*/
function useCompareData(detail) {
	const i18n = useI18n();
	const versions = computed(() => {
		return (detail.value?.runs ?? []).map((run, index) => ({
			index,
			testRunId: run.testRunId,
			workflowVersionId: run.workflowVersionId,
			letter: versionLetter(index),
			label: run.workflowVersionId === null ? i18n.baseText("evaluation.collections.card.currentDraft") : run.workflowVersionId.slice(0, 7),
			status: run.status,
			avgScore: run.avgScore,
			metricScales: run.metricScales
		}));
	});
	const metricGroups = computed(() => buildScoreShapedMetricGroups(detail.value?.runs ?? [], detail.value?.metricScales).map(({ key, values }) => ({
		key,
		label: formatMetricLabel(key),
		values,
		bestIndex: indexOfMax(values)
	})));
	const bestVersionIndex = computed(() => indexOfMax(versions.value.map((version) => version.avgScore)));
	return { compareData: computed(() => detail.value === null ? null : {
		versions: versions.value,
		metricGroups: metricGroups.value,
		bestVersionIndex: bestVersionIndex.value
	}) };
}
//#endregion
//#region src/features/ai/evaluation.ee/composables/useCompareCases.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
function inputPreview(inputs) {
	if (!inputs) return "";
	return Object.values(inputs).map((value) => stringifyValue(value)).filter((text) => text.length > 0).join(" · ");
}
/**
* Loads per-case executions for every run and aligns them into one row per test
* case. Cells align by `runIndex` (the seeded per-case sequence), not list
* position, so a version missing a case leaves a null cell instead of shifting
* later cases into the wrong row; divergent counts surface as a `mismatch`.
*/
function useCompareCases(detail, workflowId) {
	const evaluationStore = useEvaluationStore();
	const loading = ref(false);
	const casesLoaded = ref(false);
	const casesError = ref(false);
	let loadToken = 0;
	async function load({ silent = false, runs } = {}) {
		const allRuns = detail.value?.runs ?? [];
		const runsToFetch = runs ?? allRuns;
		const token = ++loadToken;
		if (allRuns.length === 0) {
			if (!silent) {
				loading.value = false;
				casesError.value = false;
				casesLoaded.value = true;
			}
			return;
		}
		if (!silent) {
			loading.value = true;
			casesLoaded.value = false;
			casesError.value = false;
		}
		if (runsToFetch.length === 0) return;
		try {
			const results = await Promise.allSettled(runsToFetch.map(async (run) => await evaluationStore.fetchTestCaseExecutions({
				workflowId: workflowId.value,
				runId: run.testRunId
			})));
			if (token !== loadToken) return;
			if (!silent) casesError.value = results.some((result) => result.status === "rejected");
			casesLoaded.value = true;
		} finally {
			if (token === loadToken && !silent) loading.value = false;
		}
	}
	const casesByVersion = computed(() => {
		const runs = detail.value?.runs ?? [];
		const byRunId = new Map(runs.map((run) => [run.testRunId, []]));
		for (const record of Object.values(evaluationStore.testCaseExecutionsById)) {
			const bucket = record.testRunId ? byRunId.get(record.testRunId) : void 0;
			if (bucket) bucket.push(record);
		}
		return runs.map((run) => (0, import_orderBy.default)(byRunId.get(run.testRunId) ?? [], [(record) => record.runIndex ?? Number.MAX_SAFE_INTEGER, (record) => record.runAt ?? ""], ["asc", "asc"]));
	});
	const mismatch = computed(() => {
		const runs = detail.value?.runs ?? [];
		const counts = casesByVersion.value.filter((_cases, index) => runs[index]?.status === "completed").map((cases) => cases.length);
		const maxCount = counts.length ? Math.max(...counts) : 0;
		return {
			counts,
			maxCount,
			hasMismatch: counts.some((count) => count !== maxCount)
		};
	});
	const caseRows = computed(() => {
		const byIndex = casesByVersion.value.map((cases) => {
			const map = /* @__PURE__ */ new Map();
			cases.forEach((record, position) => map.set(record.runIndex ?? position, record));
			return map;
		});
		return [...new Set(byIndex.flatMap((map) => [...map.keys()]))].sort((a, b) => a - b).map((runIndex, rowIndex) => {
			const cells = byIndex.map((map, versionIndex) => {
				const record = map.get(runIndex);
				return {
					versionIndex,
					testCaseId: record?.id ?? null,
					executionId: record?.executionId ?? null,
					inputs: record?.inputs,
					outputs: record?.outputs,
					metrics: record?.metrics,
					score: averageNormalizedScore(record?.metrics, detail.value?.runs[versionIndex]?.metricScales ?? detail.value?.metricScales)
				};
			});
			const firstWithInputs = cells.find((cell) => cell.inputs !== void 0);
			return {
				index: rowIndex,
				displayIndex: rowIndex + 1,
				inputPreview: inputPreview(firstWithInputs?.inputs),
				cells,
				bestVersionIndex: indexOfMax(cells.map((cell) => cell.score))
			};
		});
	});
	const isInFlight = (status) => status === "new" || status === "running";
	let wasRunning = false;
	const terminalFetched = /* @__PURE__ */ new Set();
	watch(() => detail.value ? (detail.value.runs ?? []).map((run) => run.testRunId).join(",") : null, async (key) => {
		if (key === null) return;
		terminalFetched.clear();
		await load();
		for (const run of detail.value?.runs ?? []) if (!isInFlight(run.status)) terminalFetched.add(run.testRunId);
		wasRunning = (detail.value?.runs ?? []).some((run) => isInFlight(run.status));
	}, { immediate: true });
	watch(() => detail.value, async () => {
		if (!casesLoaded.value) return;
		const runs = detail.value?.runs ?? [];
		const running = runs.some((run) => isInFlight(run.status));
		if (!running && !wasRunning) return;
		wasRunning = running;
		const toFetch = runs.filter((run) => isInFlight(run.status) || !terminalFetched.has(run.testRunId));
		if (toFetch.length === 0) return;
		await load({
			silent: true,
			runs: toFetch
		});
		for (const run of toFetch) if (!isInFlight(run.status)) terminalFetched.add(run.testRunId);
	});
	return {
		caseRows,
		mismatch,
		loading,
		casesLoaded,
		casesError,
		load
	};
}
//#endregion
//#region src/features/ai/evaluation.ee/views/CompareCollectionView.vue?vue&type=script&setup=true&lang.ts
var CompareCollectionView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CompareCollectionView",
	props: {
		workflowId: {},
		collectionId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		const telemetry = useTelemetry();
		const store = useEvalCollectionsStore();
		const evaluationStore = useEvaluationStore();
		const postHog = usePostHog();
		const isEvalCollectionsEnabled = useEvalCollectionsFlag();
		const detail = computed(() => store.getDetail(props.collectionId));
		const metricPrompts = computed(() => {
			const configId = detail.value?.evaluationConfigId;
			if (!configId) return {};
			const config = (evaluationStore.evaluationConfigsByWorkflowId[props.workflowId] ?? []).find((candidate) => candidate.id === configId);
			if (!config) return {};
			const prompts = {};
			for (const metric of config.metrics) if (metric.type === "llm_judge" && metric.config.prompt) prompts[metric.name] = metric.config.prompt;
			return prompts;
		});
		const { compareData } = useCompareData(detail);
		const { caseRows, mismatch, loading: casesLoading, casesLoaded, casesError } = useCompareCases(detail, computed(() => props.workflowId));
		const tracked = ref(false);
		watch(() => compareData.value !== null && casesLoaded.value, (ready) => {
			if (!ready || tracked.value) return;
			tracked.value = true;
			telemetry.track("Eval collection compared opened", {
				workflow_id: props.workflowId,
				collection_id: props.collectionId,
				version_count: compareData.value?.versions.length ?? 0,
				case_count: mismatch.value.maxCount
			});
		}, { immediate: true });
		const insightsReady = computed(() => {
			const versions = compareData.value?.versions ?? [];
			if (deriveRunsStatus(versions) === "running") return false;
			return versions.filter((version) => version.status === "completed").length >= 2;
		});
		const loading = computed(() => store.loadingDetail[props.collectionId] ?? false);
		const notFound = ref(false);
		const isEmpty = computed(() => notFound.value || !loading.value && compareData.value === null);
		function isNotFoundError(error) {
			return typeof error === "object" && error !== null && "httpStatusCode" in error && error.httpStatusCode === 404;
		}
		let unmounted = false;
		async function load(workflowId, collectionId) {
			notFound.value = false;
			try {
				await store.fetchCollectionDetail(workflowId, collectionId);
				await evaluationStore.fetchEvaluationConfigs(workflowId).catch(() => null);
				if (unmounted || collectionId !== props.collectionId) store.stopPolling(collectionId);
			} catch (error) {
				if (isNotFoundError(error)) notFound.value = true;
				else toast.showError(error, i18n.baseText("evaluation.compare.errors.loadFailed"));
			}
		}
		function backToList() {
			router.push({
				name: VIEWS.EVALUATION_EDIT,
				params: { workflowId: props.workflowId }
			});
		}
		onMounted(async () => {
			await postHog.waitForFeatureFlags();
			if (!isEvalCollectionsEnabled.value) {
				router.replace({
					name: VIEWS.EVALUATION_EDIT,
					params: { workflowId: props.workflowId }
				});
				return;
			}
			await load(props.workflowId, props.collectionId);
		});
		watch([() => props.workflowId, () => props.collectionId], ([, collectionId], [, prevCollectionId]) => {
			store.stopPolling(prevCollectionId);
			tracked.value = false;
			load(props.workflowId, collectionId);
		});
		onBeforeUnmount(() => {
			unmounted = true;
			store.stopPolling(props.collectionId);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.view),
				"data-test-id": "compare-collection-view"
			}, [createVNode(unref(N8nButton_default), {
				variant: "ghost",
				size: "small",
				icon: "arrow-left",
				label: unref(i18n).baseText("evaluation.compare.backToList"),
				"data-test-id": "compare-back",
				onClick: backToList
			}, null, 8, ["label"]), loading.value && unref(compareData) === null ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.skeleton),
				"data-test-id": "compare-loading"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skelHeader) }, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.skelChart) }, null, 2)], 2)) : isEmpty.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty),
				"data-test-id": "compare-empty"
			}, [createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("evaluation.compare.errors.notFound")), 1)]),
				_: 1
			})], 2)) : unref(compareData) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
				unref(casesLoaded) && !unref(casesError) && unref(mismatch).hasMismatch ? (openBlock(), createBlock(DatasetMismatchBanner_default, {
					key: 0,
					mismatch: unref(mismatch)
				}, null, 8, ["mismatch"])) : createCommentVNode("", true),
				createVNode(CompareHeader_default, {
					"collection-name": detail.value?.name ?? "",
					versions: unref(compareData).versions,
					"best-version-index": unref(compareData).bestVersionIndex,
					"workflow-id": __props.workflowId,
					"collection-id": __props.collectionId
				}, null, 8, [
					"collection-name",
					"versions",
					"best-version-index",
					"workflow-id",
					"collection-id"
				]),
				createVNode(ScoreChart_default, {
					"metric-groups": unref(compareData).metricGroups,
					versions: unref(compareData).versions,
					"metric-prompts": metricPrompts.value
				}, null, 8, [
					"metric-groups",
					"versions",
					"metric-prompts"
				]),
				(openBlock(), createBlock(AiInsightsCard_default, {
					key: __props.collectionId,
					"workflow-id": __props.workflowId,
					"collection-id": __props.collectionId,
					ready: insightsReady.value
				}, null, 8, [
					"workflow-id",
					"collection-id",
					"ready"
				])),
				createVNode(CompareTabs_default, {
					versions: unref(compareData).versions,
					"metric-groups": unref(compareData).metricGroups,
					"case-rows": unref(caseRows),
					"cases-loading": unref(casesLoading),
					"cases-error": unref(casesError),
					"workflow-id": __props.workflowId,
					"metric-prompts": metricPrompts.value,
					"metric-scales": detail.value?.metricScales
				}, null, 8, [
					"versions",
					"metric-groups",
					"case-rows",
					"cases-loading",
					"cases-error",
					"workflow-id",
					"metric-prompts",
					"metric-scales"
				])
			], 64)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/views/CompareCollectionView.vue?vue&type=style&index=0&lang.module.scss
var view = "_view_1a6a0_388";
var skeleton = "_skeleton_1a6a0_398";
var skelHeader = "_skelHeader_1a6a0_404";
var skelChart = "_skelChart_1a6a0_410";
var empty = "_empty_1a6a0_416";
var shimmer = "_shimmer_1a6a0_1";
var spin = "_spin_1a6a0_1";
var opacityPulse = "_opacityPulse_1a6a0_1";
var popoverIn = "_popoverIn_1a6a0_1";
var fadeIn = "_fadeIn_1a6a0_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1a6a0_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1a6a0_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1a6a0_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1a6a0_1";
var blurSwapIn = "_blurSwapIn_1a6a0_1";
var blurSwapOut = "_blurSwapOut_1a6a0_1";
var pulseGlow = "_pulseGlow_1a6a0_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1a6a0_1";
var fade = "_fade_1a6a0_1";
var fadeInUp = "_fadeInUp_1a6a0_1";
var fadeInDown = "_fadeInDown_1a6a0_1";
var fadeInLeft = "_fadeInLeft_1a6a0_1";
var fadeInRight = "_fadeInRight_1a6a0_1";
var fadeOut = "_fadeOut_1a6a0_1";
var fadeOutDown = "_fadeOutDown_1a6a0_1";
var fadeOutUp = "_fadeOutUp_1a6a0_1";
var fadeOutLeft = "_fadeOutLeft_1a6a0_1";
var fadeOutRight = "_fadeOutRight_1a6a0_1";
var ping = "_ping_1a6a0_1";
var blinkBackground = "_blinkBackground_1a6a0_1";
var typingBlink = "_typingBlink_1a6a0_1";
var CompareCollectionView_vue_vue_type_style_index_0_lang_module_default = {
	view,
	skeleton,
	skelHeader,
	skelChart,
	empty,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1a6a0_1",
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
var CompareCollectionView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CompareCollectionView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CompareCollectionView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CompareCollectionView_default as default };
