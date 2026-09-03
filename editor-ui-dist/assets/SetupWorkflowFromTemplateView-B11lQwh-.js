import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { V as useNodeTypesStore, t as useWorkflowsStore, wt as useCredentialsStore } from "./workflows.store-Bo6ZgF_O.js";
import { fr as defineStore, t as useRootStore } from "./useRootStore-Bapf3biO.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DPRLSskW.js";
import { _ as tryToParseNumber } from "./typesUtils-D4N0bsbb.js";
import { t as useExternalHooks } from "./useExternalHooks-3NU1HG1V.js";
import { t as useTemplatesStore } from "./templates.store-CPTN09Ar.js";
import { t as useFocusPanelStore } from "./focusPanel.store-l6GfQ7sJ.js";
import { t as useSetupPanelStore } from "./setupPanel.store-1bwZI1LT.js";
import { n as AppsRequiringCredsNotice_default, r as useCredentialSetupState, t as SetupTemplateFormStep_default } from "./SetupTemplateFormStep-Brpw9ULM.js";
import { t as createWorkflowFromTemplate } from "./templateActions-0v6TKnaw.js";
import { t as TemplatesView_default } from "./TemplatesView-LiwzyAFS.js";
//#region src/features/workflows/templates/setupTemplate.store.ts
/**
* Store for managing the state of the SetupWorkflowFromTemplateView
*/
var useSetupTemplateStore = defineStore("setupTemplate", () => {
	const templateId = ref("");
	const isLoading = ref(true);
	const isSaving = ref(false);
	const templatesStore = useTemplatesStore();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const template = computed(() => {
		return templateId.value ? templatesStore.getFullTemplateById(templateId.value) : null;
	});
	const { appCredentials, credentialOverrides, credentialUsages, credentialsByKey, nodesRequiringCredentialsSorted, numFilledCredentials, selectedCredentialIdByKey, setSelectedCredentialId, unsetSelectedCredential } = useCredentialSetupState(computed(() => {
		return template.value?.workflow.nodes ?? [];
	}));
	const setTemplateId = (id) => {
		templateId.value = id;
	};
	const ignoredAutoFillCredentialTypes = new Set([
		"httpBasicAuth",
		"httpCustomAuth",
		"httpDigestAuth",
		"httpHeaderAuth",
		"oAuth1Api",
		"oAuth2Api",
		"httpQueryAuth"
	]);
	/**
	* Selects initial credentials for the template. Credentials
	* need to be loaded before this.
	*/
	const setInitialCredentialSelection = () => {
		for (const credUsage of credentialUsages.value) {
			if (ignoredAutoFillCredentialTypes.has(credUsage.credentialType)) continue;
			const availableCreds = credentialsStore.getCredentialsByType(credUsage.credentialType);
			if (availableCreds.length === 1) selectedCredentialIdByKey.value[credUsage.key] = availableCreds[0].id;
		}
	};
	/**
	* Loads the template if it hasn't been loaded yet.
	*/
	const loadTemplateIfNeeded = async () => {
		if (!!template.value || !templateId.value) return;
		await templatesStore.fetchTemplateById(templateId.value);
		setInitialCredentialSelection();
	};
	/**
	* Initializes the store for a specific template.
	*/
	const init = async () => {
		isLoading.value = true;
		try {
			selectedCredentialIdByKey.value = {};
			await Promise.all([
				credentialsStore.fetchAllCredentials(),
				credentialsStore.fetchCredentialTypes(false),
				nodeTypesStore.loadNodeTypesIfNotLoaded(),
				loadTemplateIfNeeded()
			]);
			setInitialCredentialSelection();
		} finally {
			isLoading.value = false;
		}
	};
	/**
	* Skips the setup and goes directly to the workflow view.
	*/
	const skipSetup = async ({ router }) => {
		const externalHooks = useExternalHooks();
		const telemetry = useTelemetry();
		await externalHooks.run("templatesWorkflowView.openWorkflow", {
			source: "workflow",
			template_id: templateId.value,
			wf_template_repo_session_id: templatesStore.currentSessionId
		});
		telemetry.track("User closed cred setup", {
			completed: false,
			creds_filled: 0,
			creds_needed: credentialUsages.value.length,
			workflow_id: null
		});
		await router.replace({
			name: VIEWS.TEMPLATE_IMPORT,
			params: { id: templateId.value }
		});
	};
	/**
	* Creates a workflow from the template and navigates to the workflow view.
	*/
	const createWorkflow = async (opts) => {
		const { router } = opts;
		const telemetry = useTelemetry();
		if (!template.value) return;
		try {
			isSaving.value = true;
			const createdWorkflow = await createWorkflowFromTemplate({
				template: template.value,
				credentialOverrides: credentialOverrides.value,
				rootStore,
				workflowsStore,
				nodeTypeProvider: nodeTypesStore,
				clearResourceLocators: useSetupPanelStore().isFeatureEnabled
			});
			telemetry.track("User closed cred setup", {
				completed: true,
				creds_filled: numFilledCredentials.value,
				creds_needed: credentialUsages.value.length,
				workflow_id: createdWorkflow.id
			});
			telemetry.track("User inserted workflow template", {
				source: "workflow",
				template_id: tryToParseNumber(templateId.value),
				wf_template_repo_session_id: templatesStore.currentSessionId
			});
			telemetry.track("User saved new workflow from template", {
				template_id: tryToParseNumber(templateId.value),
				workflow_id: createdWorkflow.id,
				wf_template_repo_session_id: templatesStore.currentSessionId
			});
			if (useSetupPanelStore().isFeatureEnabled) {
				const focusPanelStore = useFocusPanelStore();
				focusPanelStore.openFocusPanelForWorkflow(createdWorkflow.id);
				focusPanelStore.setSelectedTab("setup");
			}
			await router.replace({
				name: VIEWS.WORKFLOW,
				params: { workflowId: createdWorkflow.id }
			});
		} finally {
			isSaving.value = false;
		}
	};
	return {
		credentialsByKey,
		isLoading,
		isSaving,
		appCredentials,
		nodesRequiringCredentialsSorted,
		template,
		credentialUsages,
		selectedCredentialIdByKey,
		credentialOverrides,
		numFilledCredentials,
		createWorkflow,
		skipSetup,
		init,
		loadTemplateIfNeeded,
		setInitialCredentialSelection,
		setTemplateId,
		setSelectedCredentialId,
		unsetSelectedCredential
	};
});
//#endregion
//#region src/features/workflows/templates/views/SetupWorkflowFromTemplateView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 1 };
var SetupWorkflowFromTemplateView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SetupWorkflowFromTemplateView",
	setup(__props) {
		const setupTemplateStore = useSetupTemplateStore();
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const templateId = computed(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
		const title = computed(() => setupTemplateStore.template?.name ?? "unknown");
		const isReady = computed(() => !setupTemplateStore.isLoading);
		const skipSetupUrl = computed(() => {
			return router.resolve({
				name: VIEWS.TEMPLATE_IMPORT,
				params: { id: templateId.value }
			}).fullPath;
		});
		watch(templateId, async (newTemplateId) => {
			setupTemplateStore.setTemplateId(newTemplateId);
			await setupTemplateStore.loadTemplateIfNeeded();
		});
		const onSkipSetup = async (event) => {
			event.preventDefault();
			await setupTemplateStore.skipSetup({ router });
		};
		const skipIfTemplateHasNoCreds = async () => {
			if (!!!setupTemplateStore.template) return false;
			if (setupTemplateStore.credentialUsages.length === 0) {
				await setupTemplateStore.skipSetup({ router });
				return true;
			}
			return false;
		};
		setupTemplateStore.setTemplateId(templateId.value);
		onMounted(async () => {
			await setupTemplateStore.init();
			await skipIfTemplateHasNoCreds();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TemplatesView_default, { "go-back-enabled": true }, {
				header: withCtx(() => [isReady.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templateSetup.title", { interpolate: { name: title.value } })), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 1,
					variant: "h1"
				}))]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.grid) }, [
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.notice),
						"data-test-id": "info-callout"
					}, [isReady.value ? (openBlock(), createBlock(AppsRequiringCredsNotice_default, {
						key: 0,
						"app-credentials": unref(setupTemplateStore).appCredentials
					}, null, 8, ["app-credentials"])) : (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 1,
						variant: "p"
					}))], 2),
					createBaseVNode("div", null, [isReady.value ? (openBlock(), createElementBlock("ol", {
						key: 0,
						class: normalizeClass(_ctx.$style.appCredentialsContainer)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(setupTemplateStore).credentialUsages, (credentials, index) => {
						return openBlock(), createBlock(SetupTemplateFormStep_default, {
							key: credentials.key,
							class: normalizeClass(_ctx.$style.appCredential),
							order: index + 1,
							credentials,
							"selected-credential-id": unref(setupTemplateStore).selectedCredentialIdByKey[credentials.key],
							onCredentialSelected: _cache[0] || (_cache[0] = ($event) => unref(setupTemplateStore).setSelectedCredentialId($event.credentialUsageKey, $event.credentialId)),
							onCredentialDeselected: _cache[1] || (_cache[1] = ($event) => unref(setupTemplateStore).unsetSelectedCredential($event.credentialUsageKey))
						}, null, 8, [
							"class",
							"order",
							"credentials",
							"selected-credential-id"
						]);
					}), 128))], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.appCredentialsContainer)
					}, [createVNode(unref(N8nLoading_default), {
						class: normalizeClass(_ctx.$style.appCredential),
						variant: "p",
						rows: 3
					}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
						class: normalizeClass(_ctx.$style.appCredential),
						variant: "p",
						rows: 3
					}, null, 8, ["class"])], 2))]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nLink_default), {
						href: skipSetupUrl.value,
						"new-window": false,
						onClick: _cache[2] || (_cache[2] = ($event) => onSkipSetup($event))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templateSetup.skip")), 1)]),
						_: 1
					}, 8, ["href"]), isReady.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("templateSetup.continue.button.fillRemaining"),
						disabled: unref(setupTemplateStore).numFilledCredentials > 0
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							size: "large",
							label: unref(i18n).baseText("templateSetup.continue.button"),
							disabled: unref(setupTemplateStore).isSaving || unref(setupTemplateStore).numFilledCredentials === 0,
							"data-test-id": "continue-button",
							onClick: _cache[3] || (_cache[3] = ($event) => unref(setupTemplateStore).createWorkflow({ router: unref(router) }))
						}, null, 8, ["label", "disabled"])]),
						_: 1
					}, 8, ["content", "disabled"])) : (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), { variant: "button" })]))], 2)
				], 2)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/workflows/templates/views/SetupWorkflowFromTemplateView.vue?vue&type=style&index=0&lang.module.scss
var grid = "_grid_1ueqb_388";
var notice = "_notice_1ueqb_396";
var appCredentialsContainer = "_appCredentialsContainer_1ueqb_400";
var appCredential = "_appCredential_1ueqb_400";
var actions = "_actions_1ueqb_411";
var shimmer = "_shimmer_1ueqb_1";
var spin = "_spin_1ueqb_1";
var opacityPulse = "_opacityPulse_1ueqb_1";
var popoverIn = "_popoverIn_1ueqb_1";
var fadeIn = "_fadeIn_1ueqb_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ueqb_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ueqb_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ueqb_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ueqb_1";
var blurSwapIn = "_blurSwapIn_1ueqb_1";
var blurSwapOut = "_blurSwapOut_1ueqb_1";
var pulseGlow = "_pulseGlow_1ueqb_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ueqb_1";
var fade = "_fade_1ueqb_1";
var fadeInUp = "_fadeInUp_1ueqb_1";
var fadeInDown = "_fadeInDown_1ueqb_1";
var fadeInLeft = "_fadeInLeft_1ueqb_1";
var fadeInRight = "_fadeInRight_1ueqb_1";
var fadeOut = "_fadeOut_1ueqb_1";
var fadeOutDown = "_fadeOutDown_1ueqb_1";
var fadeOutUp = "_fadeOutUp_1ueqb_1";
var fadeOutLeft = "_fadeOutLeft_1ueqb_1";
var fadeOutRight = "_fadeOutRight_1ueqb_1";
var ping = "_ping_1ueqb_1";
var blinkBackground = "_blinkBackground_1ueqb_1";
var typingBlink = "_typingBlink_1ueqb_1";
var SetupWorkflowFromTemplateView_vue_vue_type_style_index_0_lang_module_default = {
	grid,
	notice,
	appCredentialsContainer,
	appCredential,
	actions,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ueqb_1",
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
var SetupWorkflowFromTemplateView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SetupWorkflowFromTemplateView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SetupWorkflowFromTemplateView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SetupWorkflowFromTemplateView_default as default };
