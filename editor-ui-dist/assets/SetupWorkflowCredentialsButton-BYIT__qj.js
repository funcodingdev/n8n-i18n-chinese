import { C as computed, E as createCommentVNode, G as nextTick, Gt as unref, J as onBeforeUnmount, P as defineComponent, T as createBlock, Z as onMounted, _t as watch, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-bZK-mH1x.js";
import { Bi as N8nButton_default, bi as useRoute } from "./src-Bv1Pmwk0.js";
import "./sanitize-html-DjneYy0u.js";
import { Ar as usePostHog, C as useNodeTypesStore, Lt as injectWorkflowState, r as useUIStore, s as useWorkflowsStore } from "./users.store-m21ecfQE.js";
import { Ts as SETUP_CREDENTIALS_MODAL_KEY, Wc as TEMPLATE_SETUP_EXPERIENCE } from "./constants-DyCBvby_.js";
import "./merge-KW8DRp15.js";
import "./_baseOrderBy-pei3qMdR.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BqsT-emR.js";
import "./folders.store-C7BxTlZm.js";
import { n as doesNodeHaveAllCredentialsFilled } from "./nodeTransforms-GA4FTxF2.js";
import { t as useReadyToRunStore } from "./readyToRun.store-Bo1L4w6W.js";
var SetupWorkflowCredentialsButton_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowCredentialsButton",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const readyToRunStore = useReadyToRunStore();
		const workflowState = injectWorkflowState();
		const nodeTypesStore = useNodeTypesStore();
		const posthogStore = usePostHog();
		const uiStore = useUIStore();
		const i18n = useI18n();
		const route = useRoute();
		const isTemplateImportRoute = computed(() => {
			return route.query.templateId !== void 0;
		});
		const isTemplateSetupCompleted = computed(() => {
			return !!workflowsStore.workflow?.meta?.templateCredsSetupCompleted;
		});
		const allCredentialsFilled = computed(() => {
			if (isTemplateSetupCompleted.value) return true;
			const nodes = workflowsStore.getNodes();
			if (!nodes.length) return true;
			return nodes.every((node) => doesNodeHaveAllCredentialsFilled(nodeTypesStore, node));
		});
		const showButton = computed(() => {
			if (!!!workflowsStore.workflow?.meta?.templateId || isTemplateSetupCompleted.value) return false;
			return !allCredentialsFilled.value;
		});
		const isNewTemplatesSetupEnabled = computed(() => {
			return posthogStore.getVariant(TEMPLATE_SETUP_EXPERIENCE.name) === TEMPLATE_SETUP_EXPERIENCE.variant;
		});
		const unsubscribe = watch(allCredentialsFilled, (newValue) => {
			if (newValue) {
				workflowState.addToWorkflowMetadata({ templateCredsSetupCompleted: true });
				unsubscribe();
			}
		});
		const openSetupModal = () => {
			uiStore.openModal(SETUP_CREDENTIALS_MODAL_KEY);
		};
		onBeforeUnmount(() => {
			uiStore.closeModal(SETUP_CREDENTIALS_MODAL_KEY);
		});
		onMounted(async () => {
			await nextTick();
			const templateId = workflowsStore.workflow?.meta?.templateId;
			const isReadyToRunWorkflow = readyToRunStore.isReadyToRunTemplateId(templateId);
			if (isNewTemplatesSetupEnabled.value && showButton.value && !isReadyToRunWorkflow && isTemplateImportRoute.value) openSetupModal();
		});
		return (_ctx, _cache) => {
			return showButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				label: unref(i18n).baseText("nodeView.setupTemplate"),
				"data-test-id": "setup-credentials-button",
				size: "large",
				icon: "package-open",
				type: "secondary",
				onClick: _cache[0] || (_cache[0] = ($event) => openSetupModal())
			}, null, 8, ["label"])) : createCommentVNode("", true);
		};
	}
});
export { SetupWorkflowCredentialsButton_default as default };
