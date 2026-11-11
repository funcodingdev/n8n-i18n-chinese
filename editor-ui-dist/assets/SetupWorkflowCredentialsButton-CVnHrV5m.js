import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, Vd as createCommentVNode, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, of as onBeforeUnmount, ts as useRoute, wf as watch } from "./vendor-AGzaQJYe.js";
import { HO as _plugin_vue_export_helper_default, MO as N8nTooltip_default, RO as N8nButton_default, _y as SETUP_CREDENTIALS_MODAL_KEY, dm as useNodeTypesStore, kb as TEMPLATE_SETUP_EXPERIENCE, kd as useSetupPanelStore, om as doesNodeHaveAllCredentialsFilled, pp as useFocusPanelStore, qO as useI18n, q_ as usePostHog, s_ as useUIStore, tm as injectWorkflowDocumentStore } from "./app-MbtXRI_F.js";
import { t as useReadyToRunStore } from "./readyToRun.store-C41y_mQz.js";
//#region src/features/workflows/templates/components/SetupWorkflowCredentialsButton.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SetupWorkflowCredentialsButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowCredentialsButton",
	props: { collapsible: {
		type: Boolean,
		default: false
	} },
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
		const label = computed(() => i18n.baseText("nodeView.setupTemplate"));
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
			return showButton.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container)
			}, [createVNode(unref(N8nButton_default), {
				variant: "outline",
				label: label.value,
				disabled: isButtonDisabled.value,
				class: normalizeClass({ [_ctx.$style.full]: __props.collapsible }),
				"data-test-id": "setup-credentials-button",
				size: "large",
				icon: "package-open",
				onClick: _cache[0] || (_cache[0] = ($event) => handleTemplateSetup())
			}, null, 8, [
				"label",
				"disabled",
				"class"
			]), __props.collapsible ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				content: label.value,
				placement: "bottom"
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					"icon-only": "",
					"aria-label": label.value,
					disabled: isButtonDisabled.value,
					class: normalizeClass(_ctx.$style.compact),
					"data-test-id": "setup-credentials-button-compact",
					size: "large",
					icon: "package-open",
					onClick: _cache[1] || (_cache[1] = ($event) => handleTemplateSetup())
				}, null, 8, [
					"aria-label",
					"disabled",
					"class"
				])]),
				_: 1
			}, 8, ["content"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
}), [["__cssModules", { "$style": {
	container: "_container_q8v89_1",
	compact: "_compact_q8v89_5",
	full: "_full_q8v89_10"
} }]]);
//#endregion
export { SetupWorkflowCredentialsButton_default as default };
