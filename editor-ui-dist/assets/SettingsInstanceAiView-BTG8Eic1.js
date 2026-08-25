import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, O as createSlots, Pt as reactive, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-a4RL4cTS.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as DropdownMenu_default } from "./DropdownMenu-DPWQUABM.js";
import { t as N8nBadge_default } from "./N8nBadge-DOliSzFF.js";
import { t as useMessage } from "./useMessage-B2KuXuge.js";
import { t as N8nLoading_default } from "./N8nLoading-COb2kWGg.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-CKqMFO_n.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-BdRvt-eY.js";
import { c as useRouter } from "./vue-router-Dl3cOHxO.js";
import { t as PreviewTag_default } from "./PreviewTag-CNtczTvi.js";
import { t as SettingsLayout_default } from "./SettingsLayout-DFIItUy1.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-IxxsCxGu.js";
import { n as SettingsRow_default, t as SettingsRowGroup_default } from "./SettingsRowGroup-_rTMIgRk.js";
import { t as SettingsRowConfigure_default } from "./SettingsRowConfigure-X8AHmw4d.js";
import { t as SettingsSection_default } from "./SettingsSection-BXvzzu85.js";
import { xt as useCredentialsStore } from "./workflows.store-DHQ2sN1t.js";
import { t as N8nSwitch_default } from "./N8nSwitch-Bx-l9SD4.js";
import { t as useSettingsStore } from "./settings.store-BA62mVzQ.js";
import { t as VIEWS } from "./views-o5a97N_l.js";
import "./constants-BP1FOJvU.js";
import { n as useDocumentTitle } from "./useDocumentTitle-BpL3Z-FC.js";
import { b as SANDBOX_PROVIDER_LABELS } from "./constants-BLqhkQAv.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-XbiEWCcC.js";
import { n as useInstanceAiMcpConnectionsExperiment, t as useInstanceAiComputerUseExperiment } from "./instanceAiComputerUse-qJChubD5.js";
import { n as useInstanceAiBrowserUseExperiment } from "./instanceAiBrowserUse-bF9CJxFH.js";
import { n as useInstanceCredentialTest, o as useInstanceAiConfiguration, r as useSetupPageViewTelemetry, t as InstanceAiOnboardingWizard_default } from "./InstanceAiOnboardingWizard-Clj4eKB0.js";
//#endregion
//#region src/features/ai/instanceAi/components/settings/ConnectionDialog.vue
var ConnectionDialog_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionDialog",
	props: /* @__PURE__ */ mergeModels({
		kind: {},
		setup: {
			type: Boolean,
			default: false
		}
	}, {
		"open": {
			type: Boolean,
			required: true
		},
		"openModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["saved"], ["update:open"]),
	setup(__props, { emit: __emit }) {
		const open = useModel(__props, "open");
		const props = __props;
		const emit = __emit;
		const setupSequence = [
			"model",
			"sandbox",
			"search",
			"done"
		];
		function handleAdvance() {
			emit("saved");
			if (!props.setup) open.value = false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(InstanceAiOnboardingWizard_default, {
				open: open.value,
				step: __props.kind,
				"edit-mode": true,
				"allow-unchanged": __props.setup,
				sequence: setupSequence,
				"model-value": "",
				"sandbox-value": "",
				"search-value": "",
				"compose-fast-path": false,
				surface: "settings",
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => open.value = $event),
				onAdvance: handleAdvance
			}, null, 8, [
				"open",
				"step",
				"allow-unchanged"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/views/SettingsInstanceAiView.vue?vue&type=script&setup=true&lang.ts
var DOCS_URL = "https://docs.n8n.io/deploy/host-n8n/configure-n8n/set-up-ai-assistant";
var SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsInstanceAiView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const message = useMessage();
		const router = useRouter();
		const settingsStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const store = useInstanceAiSettingsStore();
		const { isTestingCredential, testSavedCredential } = useInstanceCredentialTest();
		const { modelCredential, modelConfigured: isModelConfigured, sandboxCredentialId, sandboxConfigured: isSandboxConfigured, searchCredential, searchState } = useInstanceAiConfiguration();
		const { isFeatureEnabled: isMcpConnectionsExperimentEnabled } = useInstanceAiMcpConnectionsExperiment();
		const { isFeatureEnabled: isBrowserUseEnabled } = useInstanceAiBrowserUseExperiment();
		const { isFeatureEnabled: isComputerUseExperimentEnabled } = useInstanceAiComputerUseExperiment();
		const isAdmin = computed(() => store.canManage);
		const isEnabled = computed(() => store.settings?.enabled ?? settingsStore.moduleSettings?.["instance-ai"]?.enabled ?? false);
		const isOff = computed(() => !isEnabled.value);
		const isMcpAccessEnabled = computed(() => store.settings?.mcpAccessEnabled ?? true);
		const isSelfManaged = computed(() => !store.isProxyEnabled && !store.isCloudManaged);
		const showCredentialsRows = computed(() => isAdmin.value && isSelfManaged.value);
		const showSandboxRow = computed(() => isAdmin.value && !store.isCloudManaged);
		const isModelConnectionEnvManaged = computed(() => isSelfManaged.value && (store.settings?.envManaged?.model.provider ?? store.settings?.modelEnvConfigured ?? false));
		const isModelNameEnvManaged = computed(() => isSelfManaged.value && (store.settings?.envManaged?.model.model ?? false));
		const isModelReadOnly = computed(() => isModelConnectionEnvManaged.value && isModelNameEnvManaged.value);
		const isSandboxEnvManaged = computed(() => isSelfManaged.value && (store.settings?.sandboxEnvConfigured ?? false));
		const isSearchEnvManaged = computed(() => isSelfManaged.value && (store.settings?.searchEnvConfigured ?? false));
		const modelValue = computed(() => {
			if (isModelConnectionEnvManaged.value) return i18n.baseText("instanceAi.onboarding.foundOnServer");
			if (store.settings?.modelCredentialId) return [modelCredential.value ? credentialTypeLabel(modelCredential.value.type) : "", store.settings.modelName ?? ""].filter(Boolean).join(" · ");
			return i18n.baseText("settings.n8nAgent.modelCredential.env.value");
		});
		const modelDescription = computed(() => {
			if (isModelConnectionEnvManaged.value) return {
				key: "settings.n8nAgent.modelCredential.env.description",
				warning: false
			};
			if (store.settings?.modelCredentialId && store.settings.modelName) return null;
			return {
				key: "settings.n8nAgent.modelCredential.missing.description",
				warning: !isOff.value
			};
		});
		const sandboxValue = computed(() => {
			if (isSandboxEnvManaged.value) return i18n.baseText("instanceAi.onboarding.foundOnServer");
			if (sandboxCredentialId.value) return store.settings?.sandboxProvider === "daytona" ? SANDBOX_PROVIDER_LABELS.daytona : SANDBOX_PROVIDER_LABELS["n8n-sandbox"];
			return i18n.baseText("settings.n8nAgent.sandbox.env.value");
		});
		const sandboxDescription = computed(() => {
			if (isSandboxEnvManaged.value) return {
				key: "settings.n8nAgent.sandbox.env.description",
				warning: false
			};
			if (sandboxCredentialId.value) return {
				key: "settings.n8nAgent.sandbox.set.description",
				warning: false
			};
			return {
				key: "settings.n8nAgent.sandbox.missing.description",
				warning: !isOff.value
			};
		});
		const searchValue = computed(() => {
			if (isSearchEnvManaged.value) return i18n.baseText("instanceAi.onboarding.foundOnServer");
			if (searchState.value === "disabled") return i18n.baseText("instanceAi.onboarding.disabled");
			return searchCredential.value ? credentialTypeLabel(searchCredential.value.type) : "";
		});
		const isSetupRequired = computed(() => isEnabled.value && (showCredentialsRows.value && !isModelConfigured.value || showSandboxRow.value && !isSandboxConfigured.value || showCredentialsRows.value && searchState.value === "notset"));
		const neverConfigured = computed(() => {
			if (isEnabled.value) return false;
			if (!isSelfManaged.value || !store.settings) return true;
			return !isModelConfigured.value && !isSandboxConfigured.value && searchState.value === "notset";
		});
		const emptyStateIcon = {
			type: "cards",
			center: "sparkles",
			sides: [
				"workflow",
				"message-square",
				"search",
				"bot"
			]
		};
		const disableMenuItems = [{
			id: "disable",
			label: i18n.baseText("settings.n8nAgent.status.disable"),
			icon: {
				type: "icon",
				value: "power"
			}
		}];
		const PERMISSION_OPTIONS = [
			"require_approval",
			"always_allow",
			"blocked"
		];
		const MCP_TOOL_PERMISSION_OPTIONS = ["require_approval", "always_allow"];
		const PERMISSION_OPTION_LABEL = {
			require_approval: "settings.n8nAgent.permissions.needsApproval",
			always_allow: "settings.n8nAgent.permissions.alwaysAllow",
			blocked: "settings.n8nAgent.permissions.blocked"
		};
		const PERMISSION_GROUPS = [
			{
				id: "workflows",
				labelKey: "settings.n8nAgent.permissions.group.workflows",
				keys: [
					"createWorkflow",
					"updateWorkflow",
					"runWorkflow",
					"publishWorkflow",
					"deleteWorkflow",
					"restoreWorkflowVersion",
					"tagWorkflow",
					"moveWorkflowToFolder"
				]
			},
			{
				id: "folders",
				labelKey: "settings.n8nAgent.permissions.group.folders",
				keys: ["createFolder", "deleteFolder"]
			},
			{
				id: "dataTables",
				labelKey: "settings.n8nAgent.permissions.group.dataTables",
				keys: [
					"createDataTable",
					"mutateDataTableSchema",
					"mutateDataTableRows"
				]
			},
			{
				id: "credentials",
				labelKey: "settings.n8nAgent.permissions.group.credentials",
				keys: ["deleteCredential"]
			},
			{
				id: "system",
				labelKey: "settings.n8nAgent.permissions.group.system",
				keys: ["readFilesystem", "cleanupTestExecutions"]
			},
			{
				id: "web",
				labelKey: "settings.n8nAgent.permissions.group.web",
				keys: ["fetchUrl", "webSearch"]
			}
		];
		const MCP_PERMISSION_GROUP = {
			id: "mcp",
			labelKey: "settings.n8nAgent.permissions.group.mcp",
			keys: ["executeMcpTool"]
		};
		const permissionGroups = computed(() => isMcpConnectionsExperimentEnabled.value ? [...PERMISSION_GROUPS, MCP_PERMISSION_GROUP] : PERMISSION_GROUPS);
		const expandedGroups = reactive({});
		function isGroupLocked(group) {
			return isOff.value || group.id === "mcp" && !isMcpAccessEnabled.value;
		}
		function groupSummary(group) {
			if (group.id === "mcp" && !isMcpAccessEnabled.value) return i18n.baseText("settings.n8nAgent.permissions.group.mcpDisabled");
			const exceptions = group.keys.filter((key) => store.getPermission(key) !== "require_approval").length;
			if (exceptions === 0) return i18n.baseText("settings.n8nAgent.permissions.group.default");
			if (exceptions === 1) return i18n.baseText("settings.n8nAgent.permissions.group.exception");
			return i18n.baseText("settings.n8nAgent.permissions.group.exceptions", { interpolate: { count: exceptions } });
		}
		function permissionOptionsFor(key) {
			return key === "executeMcpTool" ? MCP_TOOL_PERMISSION_OPTIONS : PERMISSION_OPTIONS;
		}
		/** Exactly one dialog can be active; transitions between steps never observe an all-closed state. */
		const activeDialog = ref(null);
		const setupChain = ref(false);
		const enableAfterSetup = ref(false);
		watch(activeDialog, (dialog) => {
			if (dialog !== null) return;
			setupChain.value = false;
			enableAfterSetup.value = false;
		});
		function setDialogOpen(kind, isOpen) {
			if (isOpen) activeDialog.value = kind;
			else if (activeDialog.value === kind) activeDialog.value = null;
		}
		function openModelDialog() {
			if (isModelReadOnly.value) return;
			setupChain.value = false;
			activeDialog.value = "model";
		}
		function openModelSetup() {
			setupChain.value = !isSandboxConfigured.value && !isSandboxEnvManaged.value || searchState.value === "notset";
			activeDialog.value = "model";
		}
		function openSandboxDialog() {
			if (isSandboxEnvManaged.value) return;
			setupChain.value = false;
			activeDialog.value = "sandbox";
		}
		function openSearchDialog() {
			if (isSearchEnvManaged.value) return;
			setupChain.value = false;
			activeDialog.value = "search";
		}
		function openSearchSetup() {
			activeDialog.value = "search";
		}
		/** Returns whether the chain may continue (false only when enabling failed). */
		async function finishSetup() {
			setupChain.value = false;
			if (!enableAfterSetup.value) {
				activeDialog.value = null;
				return true;
			}
			enableAfterSetup.value = false;
			const enabled = await store.persistEnabled(true);
			if (enabled) activeDialog.value = null;
			return enabled;
		}
		async function handleModelSaved() {
			if ((setupChain.value || enableAfterSetup.value) && !await enableEnvironmentSandboxIfNeeded()) return;
			if (setupChain.value) {
				if (isSandboxConfigured.value || isSandboxEnvManaged.value) openSearchSetup();
				else activeDialog.value = "sandbox";
				return;
			}
			await finishSetup();
		}
		async function handleSandboxSaved() {
			if (setupChain.value && searchState.value === "notset") {
				openSearchSetup();
				return;
			}
			await finishSetup();
		}
		async function handleSearchSaved() {
			await finishSetup();
		}
		function credentialTypeLabel(type) {
			return credentialsStore.getCredentialTypeByName(type)?.displayName ?? type;
		}
		async function enableEnvironmentSandboxIfNeeded() {
			if (!isSandboxEnvManaged.value || isSandboxConfigured.value) return true;
			store.setField("sandboxEnabled", true);
			return await store.save();
		}
		useSetupPageViewTelemetry("settings");
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.n8nAgent"));
			store.fetch();
			credentialsStore.fetchCredentialTypes(false);
		});
		async function handleEnable() {
			if (!showCredentialsRows.value && (!showSandboxRow.value || isSandboxConfigured.value)) {
				await store.persistEnabled(true);
				return;
			}
			enableAfterSetup.value = true;
			if (showCredentialsRows.value && !isModelConfigured.value) {
				openModelSetup();
				return;
			}
			const modelCredentialId = store.settings?.modelCredentialId;
			if (showCredentialsRows.value && modelCredentialId && store.canManageInstanceCredentials && (!modelCredential.value || !await testSavedCredential(modelCredentialId, modelCredential.value.name, modelCredential.value.type))) {
				openModelSetup();
				return;
			}
			if (!await enableEnvironmentSandboxIfNeeded()) return;
			if (showSandboxRow.value && !isSandboxConfigured.value && !isSandboxEnvManaged.value) {
				openSandboxDialog();
				return;
			}
			if (showSandboxRow.value && sandboxCredentialId.value && store.canManageInstanceCredentials) {
				const isDaytona = store.settings?.sandboxProvider === "daytona";
				if (!await testSavedCredential(sandboxCredentialId.value, "AI Assistant sandbox", isDaytona ? "daytonaApi" : "httpHeaderAuth")) {
					openSandboxDialog();
					return;
				}
			}
			if (showCredentialsRows.value && searchState.value === "notset") {
				setupChain.value = true;
				openSearchSetup();
				return;
			}
			await finishSetup();
		}
		async function handleStatusAction(action) {
			if (action !== "disable") return;
			if (await message.confirm(i18n.baseText("settings.n8nAgent.status.disable.description"), {
				title: i18n.baseText("settings.n8nAgent.status.disable.title"),
				confirmButtonText: i18n.baseText("settings.n8nAgent.status.disable"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) === "confirm") await store.persistEnabled(false);
		}
		function handleComputerUseToggle(value) {
			store.setField("localGatewayDisabled", !value);
			store.save();
		}
		function handleBrowserUseToggle(value) {
			store.setField("browserUseEnabled", value);
			store.save();
		}
		function handleMcpAccessToggle(value) {
			store.setField("mcpAccessEnabled", value);
			store.save();
		}
		function handlePermissionChange(key, value) {
			store.setPermission(key, value);
			store.save();
		}
		function openAiUsageSettings() {
			router.push({ name: VIEWS.AI_SETTINGS });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), { "data-test-id": "n8n-agent-settings" }, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.n8nAgent"),
						description: unref(i18n).baseText("settings.n8nAgent.description"),
						"docs-url": DOCS_URL,
						"docs-label": unref(i18n).baseText("settings.n8nAgent.docsLabel")
					}, {
						titleTrailing: withCtx(() => [createVNode(unref(PreviewTag_default), { size: "medium" })]),
						_: 1
					}, 8, [
						"title",
						"description",
						"docs-label"
					]),
					unref(store).isLoading ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 0,
						rows: 3,
						"shrink-last": false
					})) : neverConfigured.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
						key: 1,
						icon: emptyStateIcon,
						heading: unref(i18n).baseText("settings.n8nAgent.empty.title"),
						description: unref(i18n).baseText("settings.n8nAgent.empty.description"),
						"button-text": isAdmin.value ? unref(i18n).baseText("settings.n8nAgent.empty.enable") : void 0,
						"button-disabled": unref(store).isSaving || unref(isTestingCredential),
						"button-variant": "solid",
						"onClick:button": handleEnable
					}, createSlots({ _: 2 }, [isAdmin.value ? {
						name: "additionalContent",
						fn: withCtx(() => [createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.empty.footnote")), 1)]),
							_: 1
						})]),
						key: "0"
					} : void 0]), 1032, [
						"heading",
						"description",
						"button-text",
						"button-disabled"
					])) : isAdmin.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
						createVNode(unref(SettingsSection_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									createVNode(unref(SettingsRow_default), {
										title: unref(i18n).baseText("settings.n8nAgent.enable.label"),
										description: unref(i18n).baseText("settings.n8nAgent.enable.description")
									}, {
										action: withCtx(() => [isOff.value ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "solid",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.status.enable"),
											disabled: unref(store).isSaving || unref(isTestingCredential),
											"data-test-id": "n8n-agent-enable-button",
											onClick: handleEnable
										}, null, 8, ["label", "disabled"])) : (openBlock(), createBlock(unref(DropdownMenu_default), {
											key: 1,
											items: disableMenuItems,
											placement: "bottom-end",
											"data-test-id": "n8n-agent-status-menu",
											onSelect: handleStatusAction
										}, {
											trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
												variant: "outline",
												size: "medium",
												disabled: unref(store).isSaving,
												"aria-label": unref(i18n).baseText("settings.n8nAgent.status.manage")
											}, {
												default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.statusLabel) }, [
													createBaseVNode("span", {
														class: normalizeClass([_ctx.$style.statusDot, isSetupRequired.value ? _ctx.$style.statusDotWarning : _ctx.$style.statusDotSuccess]),
														"aria-hidden": "true"
													}, null, 2),
													createTextVNode(" " + toDisplayString(isSetupRequired.value ? unref(i18n).baseText("settings.n8nAgent.status.setupRequired") : unref(i18n).baseText("settings.n8nAgent.status.enabled")) + " ", 1),
													createVNode(unref(N8nIcon_default), {
														icon: "chevron-down",
														size: "small"
													})
												], 2)]),
												_: 1
											}, 8, ["disabled", "aria-label"])]),
											"item-leading": withCtx(({ item }) => [item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
												key: 0,
												class: normalizeClass(_ctx.$style.danger),
												icon: item.icon.value,
												size: "small"
											}, null, 8, ["class", "icon"])) : createCommentVNode("", true)]),
											"item-label": withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.danger) }, toDisplayString(item.label), 3)]),
											_: 1
										}))]),
										_: 1
									}, 8, ["title", "description"]),
									showCredentialsRows.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 0,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										clickable: !isOff.value && unref(isModelConfigured) && !isModelReadOnly.value,
										"data-test-id": "n8n-agent-model-row",
										onClick: openModelDialog
									}, createSlots({
										info: withCtx(() => [createVNode(unref(N8nText_default), {
											bold: "",
											size: "medium",
											color: "text-dark"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.modelCredential.label")), 1)]),
											_: 1
										}), modelDescription.value ? (openBlock(), createBlock(unref(N8nText_default), {
											key: 0,
											size: "small",
											color: modelDescription.value.warning ? "warning" : "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(modelDescription.value.key)), 1)]),
											_: 1
										}, 8, ["color"])) : createCommentVNode("", true)]),
										_: 2
									}, [!isOff.value ? {
										name: "action",
										fn: withCtx(() => [!unref(isModelConfigured) ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "solid",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.modelCredential.add"),
											disabled: unref(store).isSaving,
											"data-test-id": "n8n-agent-model-add",
											onClick: openModelSetup
										}, null, 8, ["label", "disabled"])) : isModelReadOnly.value ? (openBlock(), createBlock(unref(N8nText_default), {
											key: 1,
											size: "small",
											color: "text-light",
											"data-test-id": "n8n-agent-model-env-value"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(modelValue.value), 1)]),
											_: 1
										})) : (openBlock(), createBlock(unref(SettingsRowConfigure_default), {
											key: 2,
											value: modelValue.value
										}, null, 8, ["value"]))]),
										key: "0"
									} : void 0]), 1032, ["class", "clickable"])) : createCommentVNode("", true),
									showSandboxRow.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 1,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										clickable: !isOff.value && unref(isSandboxConfigured) && !isSandboxEnvManaged.value,
										"data-test-id": "n8n-agent-sandbox-row",
										onClick: openSandboxDialog
									}, createSlots({
										info: withCtx(() => [createVNode(unref(N8nText_default), {
											bold: "",
											size: "medium",
											color: "text-dark"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.sandbox.label")), 1)]),
											_: 1
										}), createVNode(unref(N8nText_default), {
											size: "small",
											color: sandboxDescription.value.warning ? "warning" : "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(sandboxDescription.value.key)), 1)]),
											_: 1
										}, 8, ["color"])]),
										_: 2
									}, [!isOff.value ? {
										name: "action",
										fn: withCtx(() => [isSandboxEnvManaged.value && !unref(isSandboxConfigured) ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "solid",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.sandbox.enable"),
											disabled: unref(store).isSaving,
											"data-test-id": "n8n-agent-sandbox-enable",
											onClick: enableEnvironmentSandboxIfNeeded
										}, null, 8, ["label", "disabled"])) : isSandboxEnvManaged.value ? (openBlock(), createBlock(unref(N8nText_default), {
											key: 1,
											size: "small",
											color: "text-light",
											"data-test-id": "n8n-agent-sandbox-env-value"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(sandboxValue.value), 1)]),
											_: 1
										})) : !unref(isSandboxConfigured) ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 2,
											variant: "solid",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.sandbox.add"),
											disabled: unref(store).isSaving,
											"data-test-id": "n8n-agent-sandbox-add",
											onClick: openSandboxDialog
										}, null, 8, ["label", "disabled"])) : (openBlock(), createBlock(unref(SettingsRowConfigure_default), {
											key: 3,
											value: sandboxValue.value
										}, null, 8, ["value"]))]),
										key: "0"
									} : void 0]), 1032, ["class", "clickable"])) : createCommentVNode("", true)
								]),
								_: 1
							})]),
							_: 1
						}),
						showCredentialsRows.value || unref(isComputerUseExperimentEnabled) || unref(isBrowserUseEnabled) ? (openBlock(), createBlock(unref(SettingsSection_default), {
							key: 0,
							title: unref(i18n).baseText("settings.n8nAgent.capabilities.title"),
							description: unref(i18n).baseText("settings.n8nAgent.capabilities.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [
									showCredentialsRows.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 0,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										clickable: !isOff.value && unref(searchState) !== "notset" && !isSearchEnvManaged.value,
										"data-test-id": "n8n-agent-search-row",
										onClick: openSearchDialog
									}, createSlots({
										info: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.titleWithTag) }, [createVNode(unref(N8nText_default), {
											bold: "",
											size: "medium",
											color: "text-dark"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.search.label")), 1)]),
											_: 1
										}), createVNode(unref(N8nBadge_default), {
											theme: "success",
											size: "xsmall"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.n8nAgent.search.recommended")), 1)]),
											_: 1
										})], 2), createVNode(unref(N8nText_default), {
											size: "small",
											color: "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(searchState) === "env" ? unref(i18n).baseText("settings.n8nAgent.search.env.description") : unref(i18n).baseText("settings.n8nAgent.search.description")), 1)]),
											_: 1
										})]),
										_: 2
									}, [!isOff.value ? {
										name: "action",
										fn: withCtx(() => [unref(searchState) === "notset" ? (openBlock(), createBlock(unref(N8nButton_default), {
											key: 0,
											variant: "outline",
											size: "medium",
											label: unref(i18n).baseText("settings.n8nAgent.search.setup"),
											disabled: unref(store).isSaving,
											"data-test-id": "n8n-agent-search-setup",
											onClick: openSearchDialog
										}, null, 8, ["label", "disabled"])) : isSearchEnvManaged.value ? (openBlock(), createBlock(unref(N8nText_default), {
											key: 1,
											size: "small",
											color: "text-light",
											"data-test-id": "n8n-agent-search-env-value"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(searchValue.value), 1)]),
											_: 1
										})) : (openBlock(), createBlock(unref(SettingsRowConfigure_default), {
											key: 2,
											value: searchValue.value
										}, null, 8, ["value"]))]),
										key: "0"
									} : void 0]), 1032, ["class", "clickable"])) : createCommentVNode("", true),
									unref(isComputerUseExperimentEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 1,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										title: unref(i18n).baseText("settings.n8nAgent.computerUse.label"),
										description: unref(i18n).baseText("settings.n8nAgent.computerUse.description")
									}, {
										action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
											"model-value": !(unref(store).settings?.localGatewayDisabled ?? false),
											disabled: unref(store).isSaving || isOff.value,
											"aria-label": unref(i18n).baseText("settings.n8nAgent.computerUse.label"),
											"data-test-id": "n8n-agent-computer-use-toggle",
											"onUpdate:modelValue": handleComputerUseToggle
										}, null, 8, [
											"model-value",
											"disabled",
											"aria-label"
										])]),
										_: 1
									}, 8, [
										"class",
										"title",
										"description"
									])) : createCommentVNode("", true),
									unref(isBrowserUseEnabled) ? (openBlock(), createBlock(unref(SettingsRow_default), {
										key: 2,
										class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
										title: unref(i18n).baseText("settings.n8nAgent.browserUse.label"),
										description: unref(i18n).baseText("settings.n8nAgent.browserUse.description")
									}, {
										action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
											"model-value": unref(store).settings?.browserUseEnabled ?? true,
											disabled: unref(store).isSaving || isOff.value,
											"aria-label": unref(i18n).baseText("settings.n8nAgent.browserUse.label"),
											"data-test-id": "n8n-agent-browser-use-toggle",
											"onUpdate:modelValue": handleBrowserUseToggle
										}, null, 8, [
											"model-value",
											"disabled",
											"aria-label"
										])]),
										_: 1
									}, 8, [
										"class",
										"title",
										"description"
									])) : createCommentVNode("", true)
								]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"])) : createCommentVNode("", true),
						unref(isMcpConnectionsExperimentEnabled) ? (openBlock(), createBlock(unref(SettingsSection_default), {
							key: 1,
							title: unref(i18n).baseText("settings.n8nAgent.mcp.title"),
							description: unref(i18n).baseText("settings.n8nAgent.mcp.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
									title: unref(i18n).baseText("settings.n8nAgent.mcpAccess.label"),
									description: unref(i18n).baseText("settings.n8nAgent.mcpAccess.description")
								}, {
									action: withCtx(() => [createVNode(unref(N8nSwitch_default), {
										"model-value": isMcpAccessEnabled.value,
										disabled: unref(store).isSaving || isOff.value,
										"aria-label": unref(i18n).baseText("settings.n8nAgent.mcpAccess.label"),
										"data-test-id": "n8n-agent-mcp-access-toggle",
										"onUpdate:modelValue": handleMcpAccessToggle
									}, null, 8, [
										"model-value",
										"disabled",
										"aria-label"
									])]),
									_: 1
								}, 8, [
									"class",
									"title",
									"description"
								])]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"])) : createCommentVNode("", true),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.n8nAgent.permissions.title"),
							description: unref(i18n).baseText("settings.n8nAgent.permissions.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(permissionGroups.value, (group) => {
									return openBlock(), createBlock(unref(SettingsRow_default), {
										key: group.id,
										modelValue: expandedGroups[group.id],
										"onUpdate:modelValue": ($event) => expandedGroups[group.id] = $event,
										class: normalizeClass({ [_ctx.$style.dim]: isGroupLocked(group) }),
										title: unref(i18n).baseText(group.labelKey),
										expandable: !isGroupLocked(group),
										"expand-label": groupSummary(group),
										"collapse-label": groupSummary(group),
										"data-test-id": `n8n-agent-permission-group-${group.id}`
									}, createSlots({
										expanded: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.permissionList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.keys, (key) => {
											return openBlock(), createElementBlock("div", {
												key,
												class: normalizeClass(_ctx.$style.permissionRow)
											}, [createVNode(unref(N8nText_default), {
												size: "small",
												color: "text-dark"
											}, {
												default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`settings.n8nAgent.permissions.${key}`)), 1)]),
												_: 2
											}, 1024), createVNode(unref(N8nSelect_default), {
												class: normalizeClass(_ctx.$style.permissionSelect),
												"model-value": unref(store).getPermission(key),
												size: "small",
												disabled: unref(store).isSaving || isGroupLocked(group),
												"data-test-id": `n8n-agent-permission-${key}`,
												"onUpdate:modelValue": ($event) => handlePermissionChange(key, $event)
											}, {
												default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(permissionOptionsFor(key), (option) => {
													return openBlock(), createBlock(unref(N8nOption_default), {
														key: option,
														value: option,
														label: unref(i18n).baseText(PERMISSION_OPTION_LABEL[option])
													}, null, 8, ["value", "label"]);
												}), 128))]),
												_: 2
											}, 1032, [
												"class",
												"model-value",
												"disabled",
												"data-test-id",
												"onUpdate:modelValue"
											])], 2);
										}), 128))], 2)]),
										_: 2
									}, [isGroupLocked(group) ? {
										name: "action",
										fn: withCtx(() => [createVNode(unref(N8nText_default), {
											size: "small",
											color: "text-light"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(groupSummary(group)), 1)]),
											_: 2
										}, 1024)]),
										key: "0"
									} : void 0]), 1032, [
										"modelValue",
										"onUpdate:modelValue",
										"class",
										"title",
										"expandable",
										"expand-label",
										"collapse-label",
										"data-test-id"
									]);
								}), 128))]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"]),
						createVNode(unref(SettingsSection_default), {
							title: unref(i18n).baseText("settings.n8nAgent.dataSharing.title"),
							description: unref(i18n).baseText("settings.n8nAgent.dataSharing.description")
						}, {
							default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									class: normalizeClass({ [_ctx.$style.dim]: isOff.value }),
									title: unref(i18n).baseText("settings.n8nAgent.dataSharing.manage.label"),
									description: unref(i18n).baseText("settings.n8nAgent.dataSharing.manage.description"),
									clickable: !isOff.value && unref(store).canManageAiUsage,
									"data-test-id": "n8n-agent-data-sharing-row",
									onClick: openAiUsageSettings
								}, createSlots({ _: 2 }, [!isOff.value && unref(store).canManageAiUsage ? {
									name: "action",
									fn: withCtx(() => [createVNode(unref(SettingsRowConfigure_default))]),
									key: "0"
								} : void 0]), 1032, [
									"class",
									"title",
									"description",
									"clickable"
								])]),
								_: 1
							})]),
							_: 1
						}, 8, ["title", "description"])
					], 64)) : createCommentVNode("", true),
					showCredentialsRows.value && !isModelReadOnly.value ? (openBlock(), createBlock(ConnectionDialog_default, {
						key: 3,
						kind: "model",
						open: activeDialog.value === "model",
						setup: setupChain.value,
						"onUpdate:open": _cache[0] || (_cache[0] = ($event) => setDialogOpen("model", $event)),
						onSaved: handleModelSaved
					}, null, 8, ["open", "setup"])) : createCommentVNode("", true),
					showSandboxRow.value && !isSandboxEnvManaged.value ? (openBlock(), createBlock(ConnectionDialog_default, {
						key: 4,
						kind: "sandbox",
						open: activeDialog.value === "sandbox",
						setup: showCredentialsRows.value && setupChain.value,
						"onUpdate:open": _cache[1] || (_cache[1] = ($event) => setDialogOpen("sandbox", $event)),
						onSaved: handleSandboxSaved
					}, null, 8, ["open", "setup"])) : createCommentVNode("", true),
					showCredentialsRows.value && !isSearchEnvManaged.value ? (openBlock(), createBlock(ConnectionDialog_default, {
						key: 5,
						kind: "search",
						open: activeDialog.value === "search",
						setup: setupChain.value,
						"onUpdate:open": _cache[2] || (_cache[2] = ($event) => setDialogOpen("search", $event)),
						onSaved: handleSearchSaved
					}, null, 8, ["open", "setup"])) : createCommentVNode("", true)
				]),
				_: 1
			});
		};
	}
});
var SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default = {
	statusLabel: "_statusLabel_zlooe_125",
	statusDot: "_statusDot_zlooe_131",
	statusDotSuccess: "_statusDotSuccess_zlooe_137",
	statusDotWarning: "_statusDotWarning_zlooe_141",
	danger: "_danger_zlooe_145",
	titleWithTag: "_titleWithTag_zlooe_149",
	dim: "_dim_zlooe_155",
	permissionList: "_permissionList_zlooe_160",
	permissionRow: "_permissionRow_zlooe_167",
	permissionSelect: "_permissionSelect_zlooe_174"
};
var SettingsInstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsInstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsInstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsInstanceAiView_default as default };
