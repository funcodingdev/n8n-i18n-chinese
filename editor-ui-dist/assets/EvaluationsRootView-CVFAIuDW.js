import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, at as resolveComponent, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { c as useAsyncState } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { D as injectWorkflowDocumentStore, t as useWorkflowsStore, yn as useSourceControlStore } from "./workflows.store-qP-dtzSs.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjOArG71.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { v as EVALUATIONS_DOCS_URL } from "./constants-CMdL1Kzl.js";
import { t as useEvaluationStore } from "./evaluation.store-TsSui26m.js";
import { t as useUsageStore } from "./usage.store-Dxdb2GpZ.js";
import { t as useWorkflowEvaluationState } from "./useWorkflowEvaluationState-CR-5utF7.js";
import { n as useEvaluationsWizardSidepanelExperiment, t as EvaluationsPaywall_default } from "./EvaluationsPaywall-o77G_tMA.js";
import { t as useEvaluationsLicense } from "./useEvaluationsLicense-BHjb_k5J.js";
//#region src/features/ai/evaluation.ee/components/shared/StepIndicator.vue?vue&type=script&setup=true&lang.ts
var StepIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "StepIndicator",
	props: {
		stepNumber: {},
		isCompleted: { type: Boolean },
		isActive: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				_ctx.$style.stepIndicator,
				__props.isCompleted && _ctx.$style.completed,
				__props.isActive && _ctx.$style.active,
				!__props.isActive && !__props.isCompleted && _ctx.$style.inactive
			]) }, [__props.isCompleted ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "check",
				size: "xsmall"
			})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(__props.stepNumber), 1)], 64))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/StepIndicator.vue?vue&type=style&index=0&lang.module.scss
var stepIndicator = "_stepIndicator_13map_388";
var active = "_active_13map_402";
var completed = "_completed_13map_406";
var inactive = "_inactive_13map_411";
var shimmer$4 = "_shimmer_13map_1";
var spin$4 = "_spin_13map_1";
var opacityPulse$4 = "_opacityPulse_13map_1";
var popoverIn$4 = "_popoverIn_13map_1";
var fadeIn$4 = "_fadeIn_13map_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_13map_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_13map_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_13map_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_13map_1";
var blurSwapIn$4 = "_blurSwapIn_13map_1";
var blurSwapOut$4 = "_blurSwapOut_13map_1";
var pulseGlow$4 = "_pulseGlow_13map_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_13map_1";
var fade$4 = "_fade_13map_1";
var fadeInUp$4 = "_fadeInUp_13map_1";
var fadeInDown$4 = "_fadeInDown_13map_1";
var fadeInLeft$4 = "_fadeInLeft_13map_1";
var fadeInRight$4 = "_fadeInRight_13map_1";
var fadeOut$4 = "_fadeOut_13map_1";
var fadeOutDown$4 = "_fadeOutDown_13map_1";
var fadeOutUp$4 = "_fadeOutUp_13map_1";
var fadeOutLeft$4 = "_fadeOutLeft_13map_1";
var fadeOutRight$4 = "_fadeOutRight_13map_1";
var ping$4 = "_ping_13map_1";
var blinkBackground$4 = "_blinkBackground_13map_1";
var typingBlink$4 = "_typingBlink_13map_1";
var StepIndicator_vue_vue_type_style_index_0_lang_module_default = {
	stepIndicator,
	active,
	completed,
	inactive,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_13map_1",
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
var StepIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(StepIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StepIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/StepHeader.vue?vue&type=script&setup=true&lang.ts
var StepHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "StepHeader",
	props: {
		stepNumber: {},
		title: {},
		isCompleted: { type: Boolean },
		isActive: { type: Boolean },
		isOptional: { type: Boolean }
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const locale = useI18n();
		const handleClick = (event) => {
			if (!event.target.closest("button") && !event.target.closest("a") && !event.target.closest("input") && !event.target.closest("select")) emit("click");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.stepHeader),
				onClick: handleClick
			}, [
				createVNode(StepIndicator_default, {
					"step-number": __props.stepNumber,
					"is-completed": __props.isCompleted,
					"is-active": __props.isActive
				}, null, 8, [
					"step-number",
					"is-completed",
					"is-active"
				]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.titleSlot) }, [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(unref(N8nText_default), {
					size: "medium",
					color: __props.isActive || __props.isCompleted ? "text-dark" : "text-light",
					tag: "span",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}, 8, ["color"])])], 2),
				__props.isOptional ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 0,
					style: {
						"background-color": "var(--color--background)",
						"border": "none"
					}
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.stepHeader.optional")), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/shared/StepHeader.vue?vue&type=style&index=0&lang.module.scss
var stepHeader = "_stepHeader_1m1gm_388";
var shimmer$3 = "_shimmer_1m1gm_1";
var spin$3 = "_spin_1m1gm_1";
var opacityPulse$3 = "_opacityPulse_1m1gm_1";
var popoverIn$3 = "_popoverIn_1m1gm_1";
var fadeIn$3 = "_fadeIn_1m1gm_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_1m1gm_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_1m1gm_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_1m1gm_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_1m1gm_1";
var blurSwapIn$3 = "_blurSwapIn_1m1gm_1";
var blurSwapOut$3 = "_blurSwapOut_1m1gm_1";
var pulseGlow$3 = "_pulseGlow_1m1gm_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_1m1gm_1";
var fade$3 = "_fade_1m1gm_1";
var fadeInUp$3 = "_fadeInUp_1m1gm_1";
var fadeInDown$3 = "_fadeInDown_1m1gm_1";
var fadeInLeft$3 = "_fadeInLeft_1m1gm_1";
var fadeInRight$3 = "_fadeInRight_1m1gm_1";
var fadeOut$3 = "_fadeOut_1m1gm_1";
var fadeOutDown$3 = "_fadeOutDown_1m1gm_1";
var fadeOutUp$3 = "_fadeOutUp_1m1gm_1";
var fadeOutLeft$3 = "_fadeOutLeft_1m1gm_1";
var fadeOutRight$3 = "_fadeOutRight_1m1gm_1";
var ping$3 = "_ping_1m1gm_1";
var blinkBackground$3 = "_blinkBackground_1m1gm_1";
var typingBlink$3 = "_typingBlink_1m1gm_1";
var StepHeader_vue_vue_type_style_index_0_lang_module_default = {
	stepHeader,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_1m1gm_1",
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
var StepHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(StepHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StepHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupWizard/SetupWizard.vue?vue&type=script&setup=true&lang.ts
var SetupWizard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWizard",
	emits: ["runTest"],
	setup(__props) {
		const router = useRouter();
		const locale = useI18n();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const evaluationStore = useEvaluationStore();
		const evaluationState = useWorkflowEvaluationState();
		const usageStore = useUsageStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const hasRuns = computed(() => {
			return evaluationStore.testRunsByWorkflowId[workflowDocumentStore.value.workflowId]?.length > 0;
		});
		const evaluationsAvailable = computed(() => {
			return usageStore.workflowsWithEvaluationsLimit === -1 || usageStore.workflowsWithEvaluationsCount < usageStore.workflowsWithEvaluationsLimit;
		});
		const evaluationsQuotaExceeded = computed(() => {
			return usageStore.workflowsWithEvaluationsLimit !== -1 && usageStore.workflowsWithEvaluationsCount >= usageStore.workflowsWithEvaluationsLimit && !hasRuns.value;
		});
		const activeStepIndex = ref(0);
		const initializeActiveStep = () => {
			if (evaluationsQuotaExceeded.value) {
				activeStepIndex.value = 2;
				return;
			}
			if (evaluationState.evaluationTriggerExists.value && evaluationState.evaluationSetMetricsNodeExist.value) activeStepIndex.value = 3;
			else if (evaluationState.evaluationTriggerExists.value && evaluationState.evaluationSetOutputsNodeExist.value) activeStepIndex.value = 2;
			else if (evaluationState.evaluationTriggerExists.value) activeStepIndex.value = 1;
			else activeStepIndex.value = 0;
		};
		initializeActiveStep();
		const toggleStep = (index) => {
			activeStepIndex.value = index;
		};
		function navigateToWorkflow(action) {
			const routeWorkflowId = workflowDocumentStore.value.workflowId || "new";
			router.push({
				name: VIEWS.WORKFLOW,
				params: { workflowId: routeWorkflowId },
				query: action ? { action } : void 0
			});
		}
		function onSeePlans() {
			pageRedirectionHelper.goToUpgrade("evaluations", "upgrade-evaluations");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "evaluation-setup-wizard"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.steps) }, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.step, _ctx.$style.completed]) }, [createVNode(StepHeader_default, {
					"step-number": 1,
					title: unref(locale).baseText("evaluations.setupWizard.step1.title"),
					"is-completed": unref(evaluationState).evaluationTriggerExists.value,
					"is-active": activeStepIndex.value === 0,
					onClick: _cache[0] || (_cache[0] = ($event) => toggleStep(0))
				}, null, 8, [
					"title",
					"is-completed",
					"is-active"
				]), activeStepIndex.value === 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stepContent)
				}, [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.bulletPoints) }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.item1")), 1)]),
					_: 1
				})]), createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.item2")), 1)]),
					_: 1
				})])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionButton) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					onClick: _cache[1] || (_cache[1] = ($event) => navigateToWorkflow("addEvaluationTrigger"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step1.button")), 1)]),
					_: 1
				})], 2)], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.step, activeStepIndex.value === 1 ? _ctx.$style.active : ""]) }, [createVNode(StepHeader_default, {
					"step-number": 2,
					title: unref(locale).baseText("evaluations.setupWizard.step2.title"),
					"is-completed": unref(evaluationState).evaluationSetOutputsNodeExist.value,
					"is-active": activeStepIndex.value === 1,
					onClick: _cache[2] || (_cache[2] = ($event) => toggleStep(1))
				}, null, 8, [
					"title",
					"is-completed",
					"is-active"
				]), activeStepIndex.value === 1 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stepContent)
				}, [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.bulletPoints) }, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step2.item1")), 1)]),
					_: 1
				})])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionButton) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					onClick: _cache[3] || (_cache[3] = ($event) => navigateToWorkflow("addEvaluationNode"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step2.button")), 1)]),
					_: 1
				})], 2)], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.step) }, [createVNode(StepHeader_default, {
					"step-number": 3,
					title: unref(locale).baseText("evaluations.setupWizard.step3.title"),
					"is-completed": unref(evaluationState).evaluationSetMetricsNodeExist.value,
					"is-active": activeStepIndex.value === 2,
					"is-optional": true,
					onClick: _cache[4] || (_cache[4] = ($event) => toggleStep(2))
				}, null, 8, [
					"title",
					"is-completed",
					"is-active"
				]), activeStepIndex.value === 2 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stepContent)
				}, [
					!evaluationsQuotaExceeded.value ? (openBlock(), createElementBlock("ul", {
						key: 0,
						class: normalizeClass(_ctx.$style.bulletPoints)
					}, [createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.item1")), 1)]),
						_: 1
					})]), createBaseVNode("li", null, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.item2")), 1)]),
						_: 1
					})])], 2)) : (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 1,
						theme: "warning",
						iconless: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.limitReached")), 1)]),
						_: 1
					})),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionButton) }, [!evaluationsQuotaExceeded.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "subtle",
						size: "small",
						onClick: _cache[5] || (_cache[5] = ($event) => navigateToWorkflow("addEvaluationNode"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.button")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						size: "small",
						onClick: onSeePlans
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.seePlans")), 1)]),
						_: 1
					})), createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						style: { "color": "var(--color--text--tint-1)" },
						onClick: _cache[6] || (_cache[6] = ($event) => toggleStep(3))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.skip")), 1)]),
						_: 1
					})], 2),
					unref(usageStore).workflowsWithEvaluationsLimit !== -1 && evaluationsAvailable.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.quotaNote)
					}, [createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-base"
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "evaluations.setupWizard.step3.notice",
							scope: "global"
						}, {
							link: withCtx(() => [createBaseVNode("a", {
								style: {
									"text-decoration": "underline",
									"color": "inherit"
								},
								onClick: onSeePlans
							}, toDisplayString(unref(locale).baseText("evaluations.setupWizard.step3.notice.link")), 1)]),
							_: 1
						})]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.step) }, [createVNode(StepHeader_default, {
					"step-number": 4,
					title: unref(locale).baseText("evaluations.setupWizard.step4.title"),
					"is-completed": false,
					"is-active": activeStepIndex.value === 3,
					onClick: _cache[9] || (_cache[9] = ($event) => toggleStep(3))
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.actionButton, _ctx.$style.actionButtonInline]) }, [unref(evaluationState).evaluationSetMetricsNodeExist.value && !evaluationsQuotaExceeded.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "subtle",
						size: "medium",
						disabled: !unref(evaluationState).evaluationTriggerExists.value || !unref(evaluationState).evaluationSetOutputsNodeExist.value && !unref(evaluationState).evaluationSetMetricsNodeExist.value,
						onClick: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("runTest"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step4.button")), 1)]),
						_: 1
					}, 8, ["disabled"])) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						variant: "subtle",
						size: "medium",
						disabled: !unref(evaluationState).evaluationTriggerExists.value || !unref(evaluationState).evaluationSetOutputsNodeExist.value && !unref(evaluationState).evaluationSetMetricsNodeExist.value,
						onClick: _cache[8] || (_cache[8] = ($event) => navigateToWorkflow("executeEvaluation"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.step4.altButton")), 1)]),
						_: 1
					}, 8, ["disabled"]))], 2)]),
					_: 1
				}, 8, ["title", "is-active"])], 2)
			], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/SetupWizard/SetupWizard.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1yyk3_388";
var steps = "_steps_1yyk3_392";
var step = "_step_1yyk3_392";
var stepContent = "_stepContent_1yyk3_402";
var slideDown = "_slideDown_1yyk3_1";
var bulletPoints = "_bulletPoints_1yyk3_407";
var actionButton = "_actionButton_1yyk3_414";
var actionButtonInline = "_actionButtonInline_1yyk3_423";
var quotaNote = "_quotaNote_1yyk3_427";
var shimmer$2 = "_shimmer_1yyk3_1";
var spin$2 = "_spin_1yyk3_1";
var opacityPulse$2 = "_opacityPulse_1yyk3_1";
var popoverIn$2 = "_popoverIn_1yyk3_1";
var fadeIn$2 = "_fadeIn_1yyk3_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1yyk3_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1yyk3_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1yyk3_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1yyk3_1";
var blurSwapIn$2 = "_blurSwapIn_1yyk3_1";
var blurSwapOut$2 = "_blurSwapOut_1yyk3_1";
var pulseGlow$2 = "_pulseGlow_1yyk3_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1yyk3_1";
var fade$2 = "_fade_1yyk3_1";
var fadeInUp$2 = "_fadeInUp_1yyk3_1";
var fadeInDown$2 = "_fadeInDown_1yyk3_1";
var fadeInLeft$2 = "_fadeInLeft_1yyk3_1";
var fadeInRight$2 = "_fadeInRight_1yyk3_1";
var fadeOut$2 = "_fadeOut_1yyk3_1";
var fadeOutDown$2 = "_fadeOutDown_1yyk3_1";
var fadeOutUp$2 = "_fadeOutUp_1yyk3_1";
var fadeOutLeft$2 = "_fadeOutLeft_1yyk3_1";
var fadeOutRight$2 = "_fadeOutRight_1yyk3_1";
var ping$2 = "_ping_1yyk3_1";
var blinkBackground$2 = "_blinkBackground_1yyk3_1";
var typingBlink$2 = "_typingBlink_1yyk3_1";
var SetupWizard_vue_vue_type_style_index_0_lang_module_default = {
	container,
	steps,
	step,
	stepContent,
	slideDown,
	bulletPoints,
	actionButton,
	actionButtonInline,
	quotaNote,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1yyk3_1",
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
var SetupWizard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupWizard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupWizard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/components/EvaluationsEmptyState/EvaluationsEmptyState.vue?vue&type=script&setup=true&lang.ts
var EvaluationsEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsEmptyState",
	props: { disabled: { type: Boolean } },
	emits: ["getStarted"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const locale = useI18n();
		const features = [
			{
				icon: "bug",
				titleKey: "evaluations.emptyState.catchIssues.title",
				descriptionKey: "evaluations.emptyState.catchIssues.description"
			},
			{
				icon: "blocks",
				titleKey: "evaluations.emptyState.buildConfidence.title",
				descriptionKey: "evaluations.emptyState.buildConfidence.description"
			},
			{
				icon: "gauge",
				titleKey: "evaluations.emptyState.measurePerformance.title",
				descriptionKey: "evaluations.emptyState.measurePerformance.description"
			}
		];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "evaluations-empty-state"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
					tag: "h2",
					size: "xlarge",
					color: "text-dark",
					bold: "",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.emptyState.title")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-base",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.emptyState.description")), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.featuresCard) }, [(openBlock(), createElementBlock(Fragment, null, renderList(features, (feature) => {
					return createBaseVNode("div", {
						key: feature.titleKey,
						class: normalizeClass(_ctx.$style.feature)
					}, [
						createVNode(unref(N8nIcon_default), {
							icon: feature.icon,
							size: 24,
							class: normalizeClass(_ctx.$style.featureIcon)
						}, null, 8, ["icon", "class"]),
						createVNode(unref(N8nText_default), {
							size: "medium",
							bold: "",
							color: "text-dark",
							class: normalizeClass(_ctx.$style.featureTitle)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(feature.titleKey)), 1)]),
							_: 2
						}, 1032, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "medium",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(feature.descriptionKey)), 1)]),
							_: 2
						}, 1024)
					], 2);
				}), 64))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "medium",
					type: "button",
					disabled: __props.disabled,
					"data-test-id": "evaluations-empty-state-get-started",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("getStarted"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.emptyState.getStarted")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/components/EvaluationsEmptyState/EvaluationsEmptyState.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_15uur_388";
var header = "_header_15uur_401";
var title = "_title_15uur_409";
var description$1 = "_description_15uur_414";
var featuresCard = "_featuresCard_15uur_419";
var feature = "_feature_15uur_419";
var featureIcon = "_featureIcon_15uur_445";
var featureTitle = "_featureTitle_15uur_450";
var footer = "_footer_15uur_454";
var shimmer$1 = "_shimmer_15uur_1";
var spin$1 = "_spin_15uur_1";
var opacityPulse$1 = "_opacityPulse_15uur_1";
var popoverIn$1 = "_popoverIn_15uur_1";
var fadeIn$1 = "_fadeIn_15uur_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_15uur_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_15uur_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_15uur_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_15uur_1";
var blurSwapIn$1 = "_blurSwapIn_15uur_1";
var blurSwapOut$1 = "_blurSwapOut_15uur_1";
var pulseGlow$1 = "_pulseGlow_15uur_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_15uur_1";
var fade$1 = "_fade_15uur_1";
var fadeInUp$1 = "_fadeInUp_15uur_1";
var fadeInDown$1 = "_fadeInDown_15uur_1";
var fadeInLeft$1 = "_fadeInLeft_15uur_1";
var fadeInRight$1 = "_fadeInRight_15uur_1";
var fadeOut$1 = "_fadeOut_15uur_1";
var fadeOutDown$1 = "_fadeOutDown_15uur_1";
var fadeOutUp$1 = "_fadeOutUp_15uur_1";
var fadeOutLeft$1 = "_fadeOutLeft_15uur_1";
var fadeOutRight$1 = "_fadeOutRight_15uur_1";
var ping$1 = "_ping_15uur_1";
var blinkBackground$1 = "_blinkBackground_15uur_1";
var typingBlink$1 = "_typingBlink_15uur_1";
var EvaluationsEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	header,
	title,
	description: description$1,
	featuresCard,
	feature,
	featureIcon,
	featureTitle,
	footer,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_15uur_1",
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
var EvaluationsEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EvaluationsEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EvaluationsEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/evaluation.ee/views/EvaluationsRootView.vue?vue&type=script&setup=true&lang.ts
var EvaluationsRootView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsRootView",
	props: { workflowId: {} },
	setup(__props) {
		const props = __props;
		const usageStore = useUsageStore();
		const evaluationStore = useEvaluationStore();
		const evaluationState = useWorkflowEvaluationState();
		const workflowsStore = useWorkflowsStore();
		const telemetry = useTelemetry();
		const toast = useToast();
		const locale = useI18n();
		const sourceControlStore = useSourceControlStore();
		const router = useRouter();
		const { isFeatureEnabled: isEvaluationsWizardSidepanelEnabled } = useEvaluationsWizardSidepanelExperiment();
		const { isLicensed } = useEvaluationsLicense();
		const isProtectedEnvironment = computed(() => {
			return sourceControlStore.preferences.branchReadOnly;
		});
		const workflowIsSaved = computed(() => workflowsStore.isWorkflowSaved[props.workflowId] === true);
		const runs = computed(() => {
			return Object.values(evaluationStore.testRunsById ?? {}).filter(({ workflowId }) => workflowId === props.workflowId);
		});
		const hasRuns = computed(() => {
			return runs.value.length > 0;
		});
		const showWizard = computed(() => !hasRuns.value);
		async function runTest() {
			if (!workflowIsSaved.value) return;
			try {
				await evaluationStore.startTestRun(props.workflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
				return;
			}
			try {
				await evaluationStore.fetchTestRuns(props.workflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
		}
		const evaluationsQuotaExceeded = computed(() => {
			return usageStore.workflowsWithEvaluationsLimit !== -1 && usageStore.workflowsWithEvaluationsCount >= usageStore.workflowsWithEvaluationsLimit && !hasRuns.value;
		});
		function openWizardOnCanvas() {
			router.push({
				name: VIEWS.WORKFLOW,
				params: { workflowId: props.workflowId },
				query: { action: "openEvaluationsWizard" }
			});
		}
		async function fetchTestRuns() {
			if (!workflowIsSaved.value) return;
			try {
				await evaluationStore.fetchTestRuns(props.workflowId);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
		}
		const { isReady } = useAsyncState(async () => {
			try {
				await usageStore.getLicenseInfo();
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
			await fetchTestRuns();
		}, void 0);
		watch(workflowIsSaved, async (isSaved) => {
			if (isSaved) await fetchTestRuns();
		});
		watch(isReady, (ready) => {
			if (ready) if (showWizard.value) telemetry.track("User viewed tests tab", {
				workflow_id: props.workflowId,
				test_type: "evaluation",
				view: "setup",
				trigger_set_up: evaluationState.evaluationTriggerExists.value,
				output_set_up: evaluationState.evaluationSetOutputsNodeExist.value,
				metrics_set_up: evaluationState.evaluationSetMetricsNodeExist.value,
				quota_reached: evaluationsQuotaExceeded.value
			});
			else telemetry.track("User viewed tests tab", {
				workflow_id: props.workflowId,
				test_type: "evaluation",
				view: "overview",
				run_count: runs.value.length
			});
		}, { immediate: true });
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.evaluationsView) }, [unref(isReady) && showWizard.value && unref(isEvaluationsWizardSidepanelEnabled) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!unref(isLicensed) ? (openBlock(), createBlock(EvaluationsPaywall_default, { key: 0 })) : (openBlock(), createBlock(EvaluationsEmptyState_default, {
				key: 1,
				disabled: isProtectedEnvironment.value,
				onGetStarted: openWizardOnCanvas
			}, null, 8, ["disabled"]))], 64)) : unref(isReady) && showWizard.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.setupContent)
			}, [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
				size: "large",
				color: "text-dark",
				tag: "h3",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.title")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				tag: "p",
				size: "small",
				color: "text-base",
				class: normalizeClass(_ctx.$style.description)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.description")) + " ", 1), createVNode(unref(N8nLink_default), {
					size: "small",
					href: unref(EVALUATIONS_DOCS_URL)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.setupWizard.moreInfo")), 1)]),
					_: 1
				}, 8, ["href"])]),
				_: 1
			}, 8, ["class"])]), isProtectedEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "info",
				icon: "info"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluations.readOnlyNotice")), 1)]),
				_: 1
			})) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.config)
			}, [_cache[0] || (_cache[0] = createBaseVNode("iframe", {
				style: { "min-width": "500px" },
				width: "500",
				height: "280",
				src: "https://www.youtube.com/embed/5LlF196PKaE",
				title: "n8n Evaluation quickstart",
				frameborder: "0",
				allow: "\n							accelerometer;\n							autoplay;\n							clipboard-write;\n							encrypted-media;\n							gyroscope;\n							picture-in-picture;\n							web-share;\n						",
				referrerpolicy: "strict-origin-when-cross-origin",
				allowfullscreen: ""
			}, null, -1)), unref(isLicensed) ? (openBlock(), createBlock(SetupWizard_default, {
				key: 0,
				onRunTest: runTest
			})) : (openBlock(), createBlock(EvaluationsPaywall_default, { key: 1 }))], 2))], 2)) : unref(isReady) ? (openBlock(), createBlock(_component_RouterView, { key: 2 })) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/ai/evaluation.ee/views/EvaluationsRootView.vue?vue&type=style&index=0&lang.module.scss
var evaluationsView = "_evaluationsView_1uebx_388";
var setupContent = "_setupContent_1uebx_396";
var description = "_description_1uebx_405";
var config = "_config_1uebx_410";
var setupDescription = "_setupDescription_1uebx_416";
var shimmer = "_shimmer_1uebx_1";
var spin = "_spin_1uebx_1";
var opacityPulse = "_opacityPulse_1uebx_1";
var popoverIn = "_popoverIn_1uebx_1";
var fadeIn = "_fadeIn_1uebx_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1uebx_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1uebx_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1uebx_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1uebx_1";
var blurSwapIn = "_blurSwapIn_1uebx_1";
var blurSwapOut = "_blurSwapOut_1uebx_1";
var pulseGlow = "_pulseGlow_1uebx_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1uebx_1";
var fade = "_fade_1uebx_1";
var fadeInUp = "_fadeInUp_1uebx_1";
var fadeInDown = "_fadeInDown_1uebx_1";
var fadeInLeft = "_fadeInLeft_1uebx_1";
var fadeInRight = "_fadeInRight_1uebx_1";
var fadeOut = "_fadeOut_1uebx_1";
var fadeOutDown = "_fadeOutDown_1uebx_1";
var fadeOutUp = "_fadeOutUp_1uebx_1";
var fadeOutLeft = "_fadeOutLeft_1uebx_1";
var fadeOutRight = "_fadeOutRight_1uebx_1";
var ping = "_ping_1uebx_1";
var blinkBackground = "_blinkBackground_1uebx_1";
var typingBlink = "_typingBlink_1uebx_1";
var EvaluationsRootView_vue_vue_type_style_index_0_lang_module_default = {
	evaluationsView,
	setupContent,
	description,
	config,
	setupDescription,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1uebx_1",
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
var EvaluationsRootView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EvaluationsRootView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EvaluationsRootView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { EvaluationsRootView_default as default };
