import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, gt as watch, q as onBeforeUnmount, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-DTYzu2mo.js";
import { fo as N8nButton_default } from "./src-CH7oGKAF.js";
import { g as useRoute } from "./htmlUtils-BvbMD63z.js";
import { R as useNodeTypesStore, k as doesNodeHaveAllCredentialsFilled, w as injectWorkflowDocumentStore } from "./workflows.store-By74034z.js";
import { t as usePostHog } from "./posthog.store-BjJmKYGV.js";
import { gi as SETUP_CREDENTIALS_MODAL_KEY, ro as TEMPLATE_SETUP_EXPERIENCE } from "./constants-CV_3h7tS.js";
import { n as useUIStore } from "./ui.store-BEr2moWO.js";
import { t as useFocusPanelStore } from "./focusPanel.store-C9MPfOVL.js";
import { t as useSetupPanelStore } from "./setupPanel.store-D8nDg12F.js";
import { t as useReadyToRunStore } from "./readyToRun.store-C-HKF3U-.js";
//#endregion
//#region src/features/workflows/templates/components/SetupWorkflowCredentialsButton.vue
var SetupWorkflowCredentialsButton_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowCredentialsButton",
	setup(__props) {
		const readyToRunStore = useReadyToRunStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const nodeTypesStore = useNodeTypesStore();
		const posthogStore = usePostHog();
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const setupPanelStore = useSetupPanelStore();
		const i18n = useI18n();
		const route = useRoute();
		const isTemplateImportRoute = computed(() => {
			return route.query.templateId !== void 0;
		});
		const isTemplateSetupCompleted = computed(() => {
			return !!workflowDocumentStore?.value?.meta?.templateCredsSetupCompleted;
		});
		const allCredentialsFilled = computed(() => {
			if (isTemplateSetupCompleted.value) return true;
			const nodes = (workflowDocumentStore?.value?.allNodes ?? []).filter((node) => !node.disabled);
			if (!nodes.length) return true;
			return nodes.every((node) => doesNodeHaveAllCredentialsFilled(nodeTypesStore, node));
		});
		const isNewTemplatesSetupEnabled = computed(() => {
			return posthogStore.getVariant(TEMPLATE_SETUP_EXPERIENCE.name) === TEMPLATE_SETUP_EXPERIENCE.variant;
		});
		const isSetupPanelFeatureEnabled = computed(() => {
			return setupPanelStore.isFeatureEnabled;
		});
		const showButton = computed(() => {
			if (!!!workflowDocumentStore?.value?.meta?.templateId) return false;
			if (isSetupPanelFeatureEnabled.value) return (workflowDocumentStore?.value?.allNodes ?? []).length > 0 && !allCredentialsFilled.value;
			if (isTemplateSetupCompleted.value) return false;
			return !allCredentialsFilled.value;
		});
		const isButtonDisabled = computed(() => {
			return isSetupPanelFeatureEnabled.value && focusPanelStore.focusPanelActive && focusPanelStore.selectedTab === "setup";
		});
		const unsubscribe = watch(allCredentialsFilled, (newValue) => {
			if (newValue) {
				workflowDocumentStore?.value?.addToMeta({ templateCredsSetupCompleted: true });
				unsubscribe();
			}
		});
		const openSetupPanel = () => {
			focusPanelStore.setSelectedTab("setup");
			focusPanelStore.openFocusPanel();
		};
		const openSetupModal = () => {
			uiStore.openModal(SETUP_CREDENTIALS_MODAL_KEY);
		};
		const handleTemplateSetup = () => {
			if (isSetupPanelFeatureEnabled.value) openSetupPanel();
			else openSetupModal();
		};
		onBeforeUnmount(() => {
			uiStore.closeModal(SETUP_CREDENTIALS_MODAL_KEY);
		});
		const shouldAutoOpenSetup = computed(() => {
			const templateId = workflowDocumentStore?.value?.meta?.templateId;
			return isNewTemplatesSetupEnabled.value && !readyToRunStore.isReadyToRunTemplateId(templateId) && showButton.value && isTemplateImportRoute.value;
		});
		let hasAutoOpened = false;
		watch(shouldAutoOpenSetup, (shouldOpen) => {
			if (hasAutoOpened || !shouldOpen) return;
			hasAutoOpened = true;
			handleTemplateSetup();
		}, { immediate: true });
		return (_ctx, _cache) => {
			return showButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				variant: "subtle",
				label: unref(i18n).baseText("nodeView.setupTemplate"),
				disabled: isButtonDisabled.value,
				"data-test-id": "setup-credentials-button",
				size: "large",
				icon: "package-open",
				onClick: _cache[0] || (_cache[0] = ($event) => handleTemplateSetup())
			}, null, 8, ["label", "disabled"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { SetupWorkflowCredentialsButton_default as default };
