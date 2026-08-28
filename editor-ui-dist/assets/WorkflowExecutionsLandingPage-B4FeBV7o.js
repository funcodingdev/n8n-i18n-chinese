import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-CcR38nth.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nHeading_default } from "./N8nHeading-BWV9gsOh.js";
import { c as useRouter, s as useRoute } from "./vue-router-Dl3cOHxO.js";
import { v as injectWorkflowExecutionStateStore, w as injectWorkflowDocumentStore } from "./workflows.store-Dju5360D.js";
import { t as VIEWS } from "./views-o5a97N_l.js";
import "./constants-BP1FOJvU.js";
import { n as useUIStore } from "./ui.store-TEDcozpu.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-B9BiIPA1.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-BbH2pe1m.js";
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
var WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_81587_125",
	messageContainer: "_messageContainer_81587_135",
	icon: "_icon_81587_146"
};
var WorkflowExecutionsLandingPage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionsLandingPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsLandingPage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowExecutionsLandingPage_default as default };
