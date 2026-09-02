import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, S as computed, X as onMounted, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { r as useWorkflowSaving, s as useNpsSurveyStore } from "./builder.store-DAnaSlhw.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nInfoAccordion_default } from "./N8nInfoAccordion-C7EqVXpq.js";
import { D as injectWorkflowDocumentStore, t as useWorkflowsStore } from "./workflows.store-QD0eo9S6.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { Si as WORKFLOW_SETTINGS_MODAL_KEY } from "./constants-DxozP3cY.js";
import { n as useUIStore } from "./ui.store-Bnte4owf.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-CkFJ0QvW.js";
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsInfoAccordion.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mt-2xs" };
var WorkflowExecutionsInfoAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsInfoAccordion",
	props: { initiallyExpanded: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const workflowSaving = useWorkflowSaving({ router });
		const locale = useI18n();
		const workflowId = useInjectWorkflowId();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const npsSurveyStore = useNpsSurveyStore();
		const defaultValues = ref({
			saveFailedExecutions: "all",
			saveSuccessfulExecutions: "all",
			saveManualExecutions: false
		});
		const workflowSaveSettings = ref({
			saveFailedExecutions: false,
			saveSuccessfulExecutions: false,
			saveTestExecutions: false
		});
		const accordionItems = computed(() => [{
			id: "productionExecutions",
			label: locale.baseText("executionsLandingPage.emptyState.accordion.productionExecutions"),
			icon: productionExecutionsIcon.value.icon,
			iconColor: productionExecutionsIcon.value.color,
			tooltip: productionExecutionsStatus.value === "unknown" ? locale.baseText("executionsLandingPage.emptyState.accordion.productionExecutionsWarningTooltip") : null
		}, {
			id: "manualExecutions",
			label: locale.baseText("executionsLandingPage.emptyState.accordion.testExecutions"),
			icon: workflowSaveSettings.value.saveTestExecutions ? "check" : "x",
			iconColor: workflowSaveSettings.value.saveTestExecutions ? "success" : "danger"
		}]);
		const shouldExpandAccordion = computed(() => {
			if (!props.initiallyExpanded) return false;
			return !workflowSaveSettings.value.saveFailedExecutions || !workflowSaveSettings.value.saveSuccessfulExecutions || !workflowSaveSettings.value.saveTestExecutions;
		});
		const productionExecutionsIcon = computed(() => {
			if (productionExecutionsStatus.value === "saving") return {
				icon: "check",
				color: "success"
			};
			else if (productionExecutionsStatus.value === "not-saving") return {
				icon: "x",
				color: "danger"
			};
			return {
				icon: "triangle-alert",
				color: "warning"
			};
		});
		const productionExecutionsStatus = computed(() => {
			if (workflowSaveSettings.value.saveSuccessfulExecutions === workflowSaveSettings.value.saveFailedExecutions) {
				if (workflowSaveSettings.value.saveSuccessfulExecutions) return "saving";
				return "not-saving";
			} else return "unknown";
		});
		const workflowSettings = computed(() => workflowDocumentStore?.value?.getSettingsSnapshot() ?? {});
		const accordionIcon = computed(() => {
			if (!workflowSaveSettings.value.saveTestExecutions || productionExecutionsStatus.value !== "saving") return {
				icon: "triangle-alert",
				color: "warning"
			};
		});
		watch(workflowSettings, (newSettings) => {
			updateSettings(newSettings);
		});
		onMounted(() => {
			defaultValues.value.saveFailedExecutions = settingsStore.saveDataErrorExecution;
			defaultValues.value.saveSuccessfulExecutions = settingsStore.saveDataSuccessExecution;
			defaultValues.value.saveManualExecutions = settingsStore.saveManualExecutions;
			updateSettings(workflowSettings.value);
		});
		function updateSettings(wfSettings) {
			workflowSaveSettings.value.saveFailedExecutions = wfSettings.saveDataErrorExecution === void 0 ? defaultValues.value.saveFailedExecutions === "all" : wfSettings.saveDataErrorExecution === "all";
			workflowSaveSettings.value.saveSuccessfulExecutions = wfSettings.saveDataSuccessExecution === void 0 ? defaultValues.value.saveSuccessfulExecutions === "all" : wfSettings.saveDataSuccessExecution === "all";
			workflowSaveSettings.value.saveTestExecutions = wfSettings.saveManualExecutions === void 0 ? defaultValues.value.saveManualExecutions : wfSettings.saveManualExecutions;
		}
		function onAccordionClick(event) {
			if (event.target instanceof HTMLAnchorElement) {
				event.preventDefault();
				uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
			}
		}
		function onItemTooltipClick(item, event) {
			if (item === "productionExecutions" && event.target instanceof HTMLAnchorElement) {
				event.preventDefault();
				uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
			}
		}
		function openWorkflowSettings() {
			uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
		}
		async function onSaveWorkflowClick() {
			let currentId = void 0;
			if (workflowId.value) currentId = workflowId.value;
			else if (route.params.workflowId) {
				const routeName = route.params.workflowId;
				currentId = Array.isArray(routeName) ? routeName[0] : routeName;
			}
			if (!currentId) return;
			if (await workflowSaving.saveCurrentWorkflow({ id: currentId })) await npsSurveyStore.showNpsSurveyIfPossible();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nInfoAccordion_default), {
				class: normalizeClass([_ctx.$style.accordion, "mt-2xl"]),
				title: unref(i18n).baseText("executionsLandingPage.emptyState.accordion.title"),
				items: accordionItems.value,
				"initially-expanded": shouldExpandAccordion.value,
				"header-icon": accordionIcon.value,
				"onClick:body": onAccordionClick,
				onTooltipClick: onItemTooltipClick
			}, {
				customContent: withCtx(() => [createBaseVNode("footer", _hoisted_1, [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer")) + " ", 1), createVNode(unref(N8nTooltip_default), { disabled: unref(workflowsStore).isWorkflowSaved[unref(workflowId)] }, {
					content: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nLink_default), { onClick: withModifiers(onSaveWorkflowClick, ["prevent"]) }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.tooltipLink")), 1)]),
						_: 1
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.tooltipText")), 1)])]),
					default: withCtx(() => [createVNode(unref(N8nLink_default), {
						class: normalizeClass({ [_ctx.$style.disabled]: !unref(workflowsStore).isWorkflowSaved[unref(workflowId)] }),
						size: "small",
						onClick: withModifiers(openWorkflowSettings, ["prevent"])
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.emptyState.accordion.footer.settingsLink")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["disabled"])])]),
				_: 1
			}, 8, [
				"class",
				"title",
				"items",
				"initially-expanded",
				"header-icon"
			]);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsInfoAccordion.vue?vue&type=style&index=0&lang.module.scss
var accordion = "_accordion_df1c2_388";
var disabled = "_disabled_df1c2_416";
var shimmer = "_shimmer_df1c2_1";
var spin = "_spin_df1c2_1";
var opacityPulse = "_opacityPulse_df1c2_1";
var popoverIn = "_popoverIn_df1c2_1";
var fadeIn = "_fadeIn_df1c2_1";
var collapsibleSlideDown = "_collapsibleSlideDown_df1c2_1";
var collapsibleSlideUp = "_collapsibleSlideUp_df1c2_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_df1c2_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_df1c2_1";
var blurSwapIn = "_blurSwapIn_df1c2_1";
var blurSwapOut = "_blurSwapOut_df1c2_1";
var pulseGlow = "_pulseGlow_df1c2_1";
var pulseGlowDelayed = "_pulseGlowDelayed_df1c2_1";
var fade = "_fade_df1c2_1";
var fadeInUp = "_fadeInUp_df1c2_1";
var fadeInDown = "_fadeInDown_df1c2_1";
var fadeInLeft = "_fadeInLeft_df1c2_1";
var fadeInRight = "_fadeInRight_df1c2_1";
var fadeOut = "_fadeOut_df1c2_1";
var fadeOutDown = "_fadeOutDown_df1c2_1";
var fadeOutUp = "_fadeOutUp_df1c2_1";
var fadeOutLeft = "_fadeOutLeft_df1c2_1";
var fadeOutRight = "_fadeOutRight_df1c2_1";
var ping = "_ping_df1c2_1";
var blinkBackground = "_blinkBackground_df1c2_1";
var typingBlink = "_typingBlink_df1c2_1";
var WorkflowExecutionsInfoAccordion_vue_vue_type_style_index_0_lang_module_default = {
	accordion,
	disabled,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_df1c2_1",
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
var WorkflowExecutionsInfoAccordion_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionsInfoAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsInfoAccordion_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowExecutionsInfoAccordion_default as t };
