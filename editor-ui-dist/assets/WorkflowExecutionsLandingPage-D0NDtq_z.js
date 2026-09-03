import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { D as injectWorkflowDocumentStore, v as injectWorkflowExecutionStateStore } from "./workflows.store-Bo6ZgF_O.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DPRLSskW.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-DhMrSyt3.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-cKzJUZbj.js";
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsLandingPage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	"data-test-id": "workflow-execution-no-trigger-content"
};
var _hoisted_2 = {
	key: 1,
	"data-test-id": "workflow-execution-no-content"
};
var WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsLandingPage",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const locale = useI18n();
		const workflowId = useInjectWorkflowId();
		const uiStore = useUIStore();
		const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const executionCount = computed(() => workflowExecutionStateStore.value.currentWorkflowExecutions.length);
		const containsTrigger = computed(() => workflowDocumentStore.value.workflowTriggerNodes.length > 0);
		function onSetupFirstStep() {
			const resolvedWorkflowId = workflowId.value || route.params.workflowId;
			uiStore.addFirstStepOnLoad = true;
			router.push({
				name: VIEWS.WORKFLOW,
				params: { workflowId: resolvedWorkflowId },
				query: { ...route.query }
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["workflow-executions-container", _ctx.$style.container]) }, [executionCount.value === 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.messageContainer, _ctx.$style.noExecutionsMessage])
			}, [!containsTrigger.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
				createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "xlarge",
					color: "text-dark",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.heading")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.message")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nButton_default), {
					variant: "subtle",
					class: "mt-l",
					size: "large",
					onClick: onSetupFirstStep
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.noTrigger.buttonText")), 1)]),
					_: 1
				})
			])) : (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "xlarge",
				color: "text-dark",
				class: "mb-2xs"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionsLandingPage.emptyState.heading")), 1)]),
				_: 1
			}), createVNode(WorkflowExecutionsInfoAccordion_default)]))], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsLandingPage.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1odmj_388";
var messageContainer = "_messageContainer_1odmj_398";
var icon = "_icon_1odmj_409";
var shimmer = "_shimmer_1odmj_1";
var spin = "_spin_1odmj_1";
var opacityPulse = "_opacityPulse_1odmj_1";
var popoverIn = "_popoverIn_1odmj_1";
var fadeIn = "_fadeIn_1odmj_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1odmj_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1odmj_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1odmj_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1odmj_1";
var blurSwapIn = "_blurSwapIn_1odmj_1";
var blurSwapOut = "_blurSwapOut_1odmj_1";
var pulseGlow = "_pulseGlow_1odmj_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1odmj_1";
var fade = "_fade_1odmj_1";
var fadeInUp = "_fadeInUp_1odmj_1";
var fadeInDown = "_fadeInDown_1odmj_1";
var fadeInLeft = "_fadeInLeft_1odmj_1";
var fadeInRight = "_fadeInRight_1odmj_1";
var fadeOut = "_fadeOut_1odmj_1";
var fadeOutDown = "_fadeOutDown_1odmj_1";
var fadeOutUp = "_fadeOutUp_1odmj_1";
var fadeOutLeft = "_fadeOutLeft_1odmj_1";
var fadeOutRight = "_fadeOutRight_1odmj_1";
var ping = "_ping_1odmj_1";
var blinkBackground = "_blinkBackground_1odmj_1";
var typingBlink = "_typingBlink_1odmj_1";
var WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default = {
	container,
	messageContainer,
	icon,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1odmj_1",
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
var WorkflowExecutionsLandingPage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowExecutionsLandingPage_default as default };
