import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-ChH4gKEU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nIconButton_default } from "./N8nIconButton-CMP0ih80.js";
import { V as useDebounceFn } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as DropdownMenu_default } from "./DropdownMenu-DPWQUABM.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { t as MarkdownEditor_default } from "./MarkdownEditor-BLoHOXEC.js";
import { t as N8nCallout_default } from "./N8nCallout-DqmF6S4S.js";
import { a as sanitizeModelId, c as useAgentProjectId, n as modelToString, o as useModelCatalog, r as parseModelString, s as useAgentModelCredentials, t as AgentModelSelector_default } from "./AgentModelSelector-BfaqLlLx.js";
import { t as createEventBus } from "./event-bus-CWhIcyjm.js";
import { R as useNodeTypesStore } from "./workflows.store-BSTkwdxQ.js";
import { $a as AGENT_MODEL_PROVIDERS, J as NATIVE_WEB_SEARCH_PROVIDER_TOOLS, K as ANTHROPIC_NATIVE_WEB_SEARCH_PROVIDER_TOOLS, X as resolvePromptCaching, Y as PROVIDER_CAPABILITIES, no as isAgentModelProvider, q as NATIVE_WEB_SEARCH_DEFAULTS_BY_PROVIDER } from "./src-JwBmTNgK.js";
import { t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as useUsersStore } from "./users.store-De0JUnse.js";
import { n as useToast } from "./useToast-D3cREU6j.js";
import { Cr as AGENT_SKILL_MODAL_KEY, Dr as AGENT_TOOL_CONFIG_MODAL_KEY, Er as AGENT_TOOLS_MODAL_KEY, Tr as AGENT_TASK_MODAL_KEY, wr as AGENT_SUB_AGENTS_MODAL_KEY } from "./constants-BP1FOJvU.js";
import { t as DEBOUNCE_TIME } from "./durations-nXrTS7zD.js";
import { t as getDebounceTime } from "./useDebounce-Bcd_ZnT1.js";
import { n as useUIStore } from "./ui.store-CNq-Lj0o.js";
import { t as NodeIcon_default } from "./NodeIcon-y7OztT20.js";
import { a as createAgentSkill, h as getAgentTasks } from "./useAgentApi-sdUpTCk-.js";
import "./menuItemId-DMD7ilsF.js";
import { r as useProjectAgentsList } from "./useProjectAgentsList-DGESl4Ch.js";
import { n as mcpServerToNode, s as toolRefToNode } from "./useMcpServerAdapter-CEAW--2-.js";
import { t as formatToolNameForDisplay } from "./toolDisplayName-Bc8yUCGO.js";
import { n as AgentChipButton_default, t as normalizeAgentSkillForSave } from "./agentSkill-C1_WbW_3.js";
var agent_panel_module_default = {
	disabled: "_disabled_r7uic_125",
	dataEntryLabel: "_dataEntryLabel_r7uic_130",
	dataEntrySubLabel: "_dataEntrySubLabel_r7uic_136"
};
//#endregion
//#region src/features/agents/utils/nativeWebSearch.ts
function isFallbackWebSearchProvider(provider) {
	return provider === "brave" || provider === "searxng";
}
function stripNativeWebSearchProviderTools(providerTools) {
	if (!providerTools) return void 0;
	const next = { ...providerTools };
	for (const key of NATIVE_WEB_SEARCH_PROVIDER_TOOLS) delete next[key];
	return next;
}
function getWebSearchMethod(config, hasNativeWebSearch) {
	const configuredProvider = config?.config?.webSearch?.provider;
	if (isFallbackWebSearchProvider(configuredProvider)) return configuredProvider;
	return hasNativeWebSearch ? "native" : "brave";
}
function getNativeWebSearchArgs(config, providerTool) {
	if (!providerTool) return {};
	if (providerTool === "anthropic.web_search") {
		const matchingTool = ANTHROPIC_NATIVE_WEB_SEARCH_PROVIDER_TOOLS.find((tool) => config?.providerTools?.[tool]);
		return { ...matchingTool ? config?.providerTools?.[matchingTool] : {} };
	}
	return { ...config?.providerTools?.[providerTool] ?? {} };
}
function getDefaultNativeWebSearchArgs(providerTool) {
	const defaults = Object.values(NATIVE_WEB_SEARCH_DEFAULTS_BY_PROVIDER).find((defaultsByProvider) => defaultsByProvider.toolName === providerTool);
	return defaults ? { ...defaults.args } : {};
}
function withNativeWebSearchConfig(config, enabled, providerTool, args = {}) {
	const providerTools = { ...stripNativeWebSearchProviderTools(config?.providerTools) ?? {} };
	const changes = { config: {
		...config?.config ?? {},
		webSearch: enabled ? {
			enabled: true,
			provider: "native"
		} : { enabled: false }
	} };
	if (enabled && providerTool) providerTools[providerTool] = {
		...getDefaultNativeWebSearchArgs(providerTool),
		...args
	};
	if (config?.providerTools || enabled && providerTool) changes.providerTools = providerTools;
	return changes;
}
function withWebSearchConfig(config, enabled, method, providerTool, args = {}, credential = "") {
	if (!enabled) return {
		config: {
			...config?.config ?? {},
			webSearch: { enabled: false }
		},
		...config?.providerTools && { providerTools: stripNativeWebSearchProviderTools(config.providerTools) ?? {} }
	};
	if (method === "native" && providerTool) return withNativeWebSearchConfig(config, true, providerTool, args);
	const webSearch = method === "native" ? { enabled: false } : {
		enabled: true,
		provider: method,
		...credential && { credential }
	};
	return {
		config: {
			...config?.config ?? {},
			webSearch
		},
		...config?.providerTools && { providerTools: stripNativeWebSearchProviderTools(config.providerTools) ?? {} }
	};
}
function normalizeWebSearchForModelChange(config, nextProviderTool) {
	const webSearch = config?.config?.webSearch;
	if (!webSearch) return config?.providerTools ? { providerTools: stripNativeWebSearchProviderTools(config.providerTools) ?? {} } : {};
	const method = getWebSearchMethod(config, Boolean(nextProviderTool));
	if (isFallbackWebSearchProvider(webSearch.provider)) return withWebSearchConfig(config, webSearch.enabled, method, nextProviderTool, {}, webSearch.credential);
	if (!webSearch.enabled) return withWebSearchConfig(config, false, "native", nextProviderTool);
	return nextProviderTool ? withNativeWebSearchConfig(config, true, nextProviderTool) : withWebSearchConfig(config, false, "native", nextProviderTool);
}
//#endregion
//#region src/features/agents/utils/promptCaching.ts
/**
* Prompt caching is mandatory for supported providers (OpenAI/Anthropic): it
* always resolves to `{ enabled: true }` for a newly selected supported
* provider (the user cannot disable it), preserves an explicit Anthropic TTL
* across the switch, and strips the field entirely when the newly selected
* provider doesn't support it.
*
* `currentSubConfig` should be the agent's `config.config`, already merged
* with any other in-flight normalization (e.g. web search) for the same
* model change, so this composes without one normalizer clobbering another.
*/
function normalizePromptCachingForModelChange(currentSubConfig, nextPromptCachingCapability) {
	const current = currentSubConfig?.promptCaching;
	const resolved = resolvePromptCaching(current, nextPromptCachingCapability);
	if (!resolved) {
		if (!current) return {};
		const { promptCaching: _promptCaching, ...restConfig } = currentSubConfig ?? {};
		return { config: Object.keys(restConfig).length > 0 ? restConfig : void 0 };
	}
	return { config: {
		...currentSubConfig ?? {},
		promptCaching: resolved
	} };
}
//#endregion
//#region src/features/agents/utils/reasoning.ts
function normalizeReasoningForModelChange(currentSubConfig, supportsReasoning) {
	if (supportsReasoning !== false || currentSubConfig?.reasoning === void 0) return {};
	const { reasoning: _reasoning, ...restConfig } = currentSubConfig;
	return { config: Object.keys(restConfig).length > 0 ? restConfig : void 0 };
}
//#endregion
//#region src/features/agents/components/AgentPanelHeader.vue?vue&type=script&setup=true&lang.ts
var AgentPanelHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPanelHeader",
	props: {
		title: {},
		description: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.text) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.copy) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "xlarge",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			}), __props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 2), _ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.actions)
			}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var AgentPanelHeader_vue_vue_type_style_index_0_lang_module_default = {
	text: "_text_1gwsm_125",
	row: "_row_1gwsm_133",
	copy: "_copy_1gwsm_139",
	actions: "_actions_1gwsm_147"
};
var AgentPanelHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPanelHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPanelHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentInfoPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-testid"];
var AgentInfoPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentInfoPanel",
	props: {
		config: {},
		disabled: {
			type: Boolean,
			default: false
		},
		embedded: {
			type: Boolean,
			default: false
		},
		projectId: {},
		instructionsMaxHeight: { default: "360px" },
		showModel: {
			type: Boolean,
			default: true
		},
		showInstructions: {
			type: Boolean,
			default: true
		},
		showInstructionsToolbar: {
			type: Boolean,
			default: false
		},
		immediateUpdates: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:config"],
	setup(__props, { emit: __emit }) {
		/**
		* Combined editor for the core agent fields: name, model, and instructions.
		* Credential selection is handled inside the model picker — no separate
		* credential field.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const { showError } = useToast();
		const { catalog, ensureLoaded, getModelsForPicker, getDefaultModelForPicker, isLoading } = useModelCatalog();
		const projectId = useAgentProjectId(() => props.projectId);
		const { credentialsByProvider, selectCredential } = useAgentModelCredentials(usersStore.currentUserId ?? "anonymous", projectId);
		watch(projectId, (id) => {
			if (id) ensureLoaded(id);
		}, { immediate: true });
		const configProvider = computed(() => {
			const parsed = parseModelString(modelToString(props.config?.model));
			return parsed && isAgentModelProvider(parsed.provider) ? parsed.provider : null;
		});
		const effectiveCredentials = computed(() => {
			const base = credentialsByProvider.value;
			if (!base) return base;
			const provider = configProvider.value;
			const credential = props.config?.credential;
			if (!provider || !credential) return base;
			return {
				...base,
				[provider]: credential
			};
		});
		const pendingDefaultProvider = ref(null);
		const defaultModelHint = ref(false);
		const filteredAgents = computed(() => getModelsForPicker(effectiveCredentials.value));
		const selectedAgent = computed(() => {
			const modelStr = modelToString(props.config?.model);
			if (!modelStr) return null;
			const parsed = parseModelString(modelStr);
			if (!parsed || !isAgentModelProvider(parsed.provider)) return null;
			const registryEntry = filteredAgents.value[parsed.provider]?.models.find((m) => m.model === parsed.name);
			if (registryEntry) return registryEntry;
			return {
				provider: parsed.provider,
				model: parsed.name,
				name: parsed.name,
				description: null,
				createdAt: null,
				metadata: {
					functionCalling: false,
					available: true
				}
			};
		});
		const panelTestId = computed(() => {
			if (props.showModel && !props.showInstructions) return "agent-model-panel";
			if (!props.showModel && props.showInstructions) return "agent-instructions-panel";
			return "agent-info-panel";
		});
		const instructionsToolbarMode = computed(() => props.showInstructionsToolbar ? "always" : "never");
		function onModelChange(selection, source = "user") {
			const credentialId = effectiveCredentials.value?.[selection.provider];
			if (!credentialId) {
				showError(new Error(i18n.baseText("credentials.noResults")), i18n.baseText("error"));
				return;
			}
			const modelName = sanitizeModelId(selection.provider, selection.model);
			const model = `${selection.provider}/${modelName}`;
			const capabilities = PROVIDER_CAPABILITIES[selection.provider];
			const webSearchChanges = normalizeWebSearchForModelChange(props.config, capabilities?.webSearch ?? false);
			const webSearchConfig = "config" in webSearchChanges ? webSearchChanges.config : props.config?.config;
			const promptCachingChanges = normalizePromptCachingForModelChange(webSearchConfig, capabilities?.promptCaching ?? false);
			const reasoningChanges = normalizeReasoningForModelChange("config" in promptCachingChanges ? promptCachingChanges.config : webSearchConfig, catalog.value[selection.provider]?.models[modelName]?.reasoning);
			defaultModelHint.value = source === "auto";
			emit("update:config", {
				model,
				credential: credentialId,
				...webSearchChanges,
				...promptCachingChanges,
				...reasoningChanges
			});
		}
		watch(() => pendingDefaultProvider.value ? getDefaultModelForPicker(effectiveCredentials.value, pendingDefaultProvider.value) : null, (defaultModel) => {
			if (!defaultModel || props.disabled || modelToString(props.config?.model)) return;
			pendingDefaultProvider.value = null;
			onModelChange(defaultModel, "auto");
		});
		const initialDefaultSeeded = ref(false);
		watch([effectiveCredentials, () => props.config], ([credentials, config]) => {
			if (initialDefaultSeeded.value || props.disabled) return;
			if (!credentials || !config || modelToString(config.model)) return;
			const provider = AGENT_MODEL_PROVIDERS.find((candidate) => credentials[candidate] && credentials[candidate] !== "__AI_GATEWAY_MANAGED__") ?? (credentials.openai === "__AI_GATEWAY_MANAGED__" ? "openai" : void 0);
			if (!provider) return;
			initialDefaultSeeded.value = true;
			pendingDefaultProvider.value = provider;
		}, { immediate: true });
		function onSelectCredential(provider, credentialId) {
			selectCredential(provider, credentialId);
			if (credentialId && !modelToString(props.config?.model)) pendingDefaultProvider.value = provider;
			if (parseModelString(modelToString(props.config?.model))?.provider === provider && credentialId) emit("update:config", { credential: credentialId });
		}
		function onConfigureCredential(provider) {
			if (!modelToString(props.config?.model)) pendingDefaultProvider.value = provider;
		}
		const instructions = ref(props.config?.instructions ?? "");
		watch(() => props.config?.instructions ?? "", (value) => {
			if (value !== instructions.value) instructions.value = value;
		});
		const emitInstructionsDebounced = useDebounceFn(() => {
			emit("update:config", { instructions: instructions.value });
		}, getDebounceTime(DEBOUNCE_TIME.API.HEAVY_OPERATION));
		function onInstructionsInput(value) {
			instructions.value = value;
			if (props.immediateUpdates) {
				emit("update:config", { instructions: value });
				return;
			}
			emitInstructionsDebounced();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.panel),
				"data-testid": panelTestId.value
			}, [
				!props.embedded ? (openBlock(), createBlock(AgentPanelHeader_default, {
					key: 0,
					title: unref(i18n).baseText("agents.builder.agent.title"),
					description: unref(i18n).baseText("agents.builder.agent.description")
				}, null, 8, ["title", "description"])) : createCommentVNode("", true),
				props.showModel ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.field])
				}, [
					createBaseVNode("label", { class: normalizeClass([_ctx.$style.label, props.disabled && unref(agent_panel_module_default).disabled]) }, [createVNode(unref(N8nText_default), {
						step: "sm",
						bold: "",
						class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.model.label")), 1)]),
						_: 1
					}, 8, ["class"])], 2),
					createVNode(AgentModelSelector_default, {
						disabled: props.disabled,
						"selected-model": selectedAgent.value,
						credentials: effectiveCredentials.value,
						"models-by-provider": filteredAgents.value,
						"is-loading": unref(isLoading),
						"project-id": unref(projectId),
						"warn-missing-credentials": true,
						"bound-credential-id": props.config?.credential ?? null,
						"data-testid": "agent-model-selector",
						onChange: onModelChange,
						onSelectCredential,
						onConfigureCredential
					}, null, 8, [
						"disabled",
						"selected-model",
						"credentials",
						"models-by-provider",
						"is-loading",
						"project-id",
						"bound-credential-id"
					]),
					defaultModelHint.value && !props.disabled ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 0,
						theme: "info",
						slim: "",
						class: normalizeClass(_ctx.$style.defaultHint),
						"data-testid": "agent-default-model-hint"
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.defaultHintBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.defaultHintText) }, [createBaseVNode("strong", null, toDisplayString(unref(i18n).baseText("agents.builder.agent.model.defaultSelected.title")), 1), createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.agent.model.defaultSelected.description")), 1)], 2), createVNode(unref(N8nIconButton_default), {
							icon: "x",
							variant: "ghost",
							size: "small",
							title: unref(i18n).baseText("agents.builder.agent.model.defaultSelected.dismiss"),
							"data-testid": "agent-default-model-hint-dismiss",
							onClick: _cache[0] || (_cache[0] = ($event) => defaultModelHint.value = false)
						}, null, 8, ["title"])], 2)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true),
				props.showInstructions ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass([_ctx.$style.field])
				}, [createBaseVNode("label", { class: normalizeClass([_ctx.$style.label, props.disabled && unref(agent_panel_module_default).disabled]) }, [createVNode(unref(N8nText_default), {
					step: "sm",
					bold: "",
					class: normalizeClass(unref(agent_panel_module_default).dataEntryLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.agent.instructions.label")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createVNode(unref(MarkdownEditor_default), {
					class: normalizeClass(_ctx.$style.instructionsDocument),
					"model-value": instructions.value,
					disabled: props.disabled,
					"show-toolbar": instructionsToolbarMode.value,
					"max-height": props.instructionsMaxHeight,
					variant: "contained",
					"data-testid": "agent-instructions-document",
					"onUpdate:modelValue": onInstructionsInput
				}, null, 8, [
					"class",
					"model-value",
					"disabled",
					"show-toolbar",
					"max-height"
				])], 2)) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
var AgentInfoPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1bwag_2",
	instructionsDocument: "_instructionsDocument_1bwag_11",
	field: "_field_1bwag_27",
	label: "_label_1bwag_33",
	defaultHint: "_defaultHint_1bwag_37",
	defaultHintBody: "_defaultHintBody_1bwag_41",
	defaultHintText: "_defaultHintText_1bwag_48"
};
var AgentInfoPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentInfoPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentInfoPanel_vue_vue_type_style_index_0_lang_module_default }]]);
function toUngroupedToolRow(row) {
	const item = {
		index: row.index,
		label: row.label,
		nodeType: row.nodeType,
		openTarget: row.openTarget,
		invalid: row.invalid,
		invalidReasons: row.invalidReasons
	};
	return {
		index: row.index,
		label: row.label,
		typeLabel: row.typeLabel,
		nodeType: row.nodeType,
		fallbackIcon: row.fallbackIcon,
		invalid: row.invalid,
		invalidReasons: row.invalidReasons,
		isGrouped: false,
		tool: item
	};
}
function toGroupedToolRow(group) {
	const [first] = group;
	return {
		index: first.index,
		label: `${group.length} ${first.typeLabel}`,
		typeLabel: first.typeLabel,
		nodeType: first.nodeType,
		fallbackIcon: first.fallbackIcon,
		invalid: group.some((row) => row.invalid),
		invalidReasons: [...new Set(group.flatMap((row) => row.invalidReasons))],
		isGrouped: true,
		tools: group.map((row) => ({
			index: row.index,
			label: row.label,
			nodeType: row.nodeType,
			openTarget: row.openTarget,
			invalid: row.invalid,
			invalidReasons: row.invalidReasons
		}))
	};
}
function buildToolRows(rows) {
	const groupedRows = [];
	const nodeGroups = /* @__PURE__ */ new Map();
	for (const row of rows) {
		/**
		* Only node tools with a resolved node type are eligible for grouping.
		* Workflow tools, custom tools, and unresolved node tools stay ungrouped
		* because this grouping logic relies on nodeType.name as the canonical key
		* and on the resolved node type for the grouped label/icon.
		*/
		if (row.toolType !== "node" || !row.nodeType) {
			groupedRows.push(toUngroupedToolRow(row));
			continue;
		}
		const group = nodeGroups.get(row.nodeType.name);
		if (group) {
			group.push(row);
			continue;
		}
		nodeGroups.set(row.nodeType.name, [row]);
	}
	for (const group of nodeGroups.values()) {
		if (group.length >= 2) {
			groupedRows.push(toGroupedToolRow(group));
			continue;
		}
		groupedRows.push(...group.map(toUngroupedToolRow));
	}
	return groupedRows.sort((left, right) => left.index - right.index);
}
//#endregion
//#region src/features/agents/components/AgentCapabilitiesSection.vue?vue&type=script&setup=true&lang.ts
var AgentCapabilitiesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCapabilitiesSection",
	props: {
		config: {},
		tools: {},
		customTools: {},
		skills: {},
		disabled: {
			type: Boolean,
			default: false
		},
		projectId: {},
		agentId: {},
		isPublished: { type: Boolean },
		taskRefs: { default: () => [] },
		reloadKey: {},
		agentUnsaved: { type: Boolean },
		validationIssues: { default: () => [] },
		sections: { default: () => [
			"tools",
			"skills",
			"subAgents",
			"tasks"
		] }
	},
	emits: [
		"open-tool",
		"open-skill",
		"add-tool",
		"add-skill",
		"remove-tool",
		"remove-skill",
		"toggle-task",
		"tasks-changed",
		"update:config"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const visibleSections = computed(() => new Set(props.sections));
		function showSection(section) {
			return visibleSections.value.has(section);
		}
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const nodeTypesStore = useNodeTypesStore();
		const { list: projectAgents, ensureLoaded: ensureProjectAgentsLoaded } = useProjectAgentsList(computed(() => props.projectId));
		const mcpServers = computed(() => props.config?.mcpServers ?? []);
		const selectedSubAgentRefs = computed(() => props.config?.subAgents?.agents ?? []);
		const selectedSubAgentIds = computed(() => selectedSubAgentRefs.value.map(({ agentId }) => agentId));
		const selectedSubAgentIdSet = computed(() => new Set(selectedSubAgentIds.value));
		const availableSubAgents = computed(() => (projectAgents.value ?? []).filter((agent) => agent.id !== props.agentId && Boolean(agent.activeVersionId) && !selectedSubAgentIdSet.value.has(agent.id)));
		const selectedSubAgents = computed(() => selectedSubAgentRefs.value.map(({ agentId, useWhen }) => {
			const agent = projectAgents.value?.find((candidate) => candidate.id === agentId);
			const reasons = subAgentIssueMessages.value.get(agentId) ?? [];
			return {
				id: agentId,
				name: agent?.name ?? agentId,
				useWhen: useWhen ?? "",
				invalid: reasons.length > 0,
				invalidReasons: reasons
			};
		}));
		const taskBodies = ref([]);
		const taskErrorMessage = ref("");
		const taskRows = computed(() => {
			const bodiesById = new Map(taskBodies.value.map((body) => [body.id, body]));
			return props.taskRefs.map((taskRef) => {
				const body = bodiesById.get(taskRef.id);
				if (!body) return null;
				const reasons = taskIssueMessages.value.get(taskRef.id) ?? [];
				return {
					...body,
					enabled: taskRef.enabled,
					invalid: reasons.length > 0,
					invalidReasons: reasons
				};
			}).filter((task) => task !== null);
		});
		const GENERIC_ISSUE_KEYS = {
			missing_required: "agents.builder.validation.issue.missingRequired",
			invalid_value: "agents.builder.validation.issue.invalidValue",
			missing_credential: "agents.builder.validation.issue.missingCredential",
			invalid_credential: "agents.builder.validation.issue.invalidCredential",
			incompatible_credential: "agents.builder.validation.issue.incompatibleCredential",
			missing_reference: "agents.builder.validation.issue.missingReference",
			incompatible_reference: "agents.builder.validation.issue.incompatibleReference"
		};
		/** Kind-specific overrides, keyed `<kind>.<code>` or `tool.<toolType>.<code>`. */
		const SPECIFIC_ISSUE_KEYS = {
			"subAgent.missing_reference": "agents.builder.validation.issue.subAgent.missingReference",
			"subAgent.incompatible_reference": "agents.builder.validation.issue.subAgent.incompatibleReference",
			"skill.missing_reference": "agents.builder.validation.issue.skill.missingReference",
			"task.invalid_value": "agents.builder.validation.issue.task.invalidValue",
			"tool.workflow.missing_reference": "agents.builder.validation.issue.tool.workflow.missingReference",
			"tool.workflow.incompatible_reference": "agents.builder.validation.issue.tool.workflow.incompatibleReference",
			"tool.custom.missing_reference": "agents.builder.validation.issue.tool.custom.missingReference",
			"tool.node.missing_reference": "agents.builder.validation.issue.tool.node.missingReference",
			"mcpServer.incompatible_credential": "agents.builder.validation.issue.mcpServer.incompatibleCredential"
		};
		function issueMessage(issue) {
			const { kind, toolType, id } = issue.capability;
			const key = (kind === "tool" && toolType ? SPECIFIC_ISSUE_KEYS[`tool.${toolType}.${issue.code}`] : void 0) ?? SPECIFIC_ISSUE_KEYS[`${kind}.${issue.code}`] ?? GENERIC_ISSUE_KEYS[issue.code];
			return i18n.baseText(key, { interpolate: { id: id ?? "" } });
		}
		function issueMessages(issues) {
			return [...new Set(issues.map(issueMessage))];
		}
		function issuesFor(kind) {
			return props.validationIssues.filter((issue) => issue.capability.kind === kind);
		}
		/** Group a capability kind's issues into per-key message lists, keyed by `keyOf`. */
		function groupIssueMessages(kind, keyOf) {
			const byKey = /* @__PURE__ */ new Map();
			for (const issue of issuesFor(kind)) {
				const key = keyOf(issue);
				if (key === void 0) continue;
				const existing = byKey.get(key);
				if (existing) existing.push(issue);
				else byKey.set(key, [issue]);
			}
			return new Map([...byKey].map(([key, issues]) => [key, issueMessages(issues)]));
		}
		const toolIssueMessages = computed(() => groupIssueMessages("tool", (issue) => issue.capability.index));
		const mcpServerIssueMessages = computed(() => groupIssueMessages("mcpServer", (issue) => issue.capability.id));
		const skillIssueMessages = computed(() => groupIssueMessages("skill", (issue) => issue.capability.id));
		const taskIssueMessages = computed(() => groupIssueMessages("task", (issue) => issue.capability.id));
		const subAgentIssueMessages = computed(() => groupIssueMessages("subAgent", (issue) => issue.capability.id));
		async function reloadTasks() {
			taskErrorMessage.value = "";
			if (props.agentUnsaved) {
				taskBodies.value = [];
				return;
			}
			try {
				taskBodies.value = await getAgentTasks(rootStore.restApiContext, props.projectId, props.agentId);
			} catch (error) {
				taskErrorMessage.value = error instanceof Error && error.message ? error.message : i18n.baseText("agents.builder.tasks.loadError");
			}
		}
		onMounted(() => {
			if (showSection("tasks")) reloadTasks();
			if (showSection("subAgents")) ensureProjectAgentsLoaded().catch(() => {});
		});
		watch([
			() => props.reloadKey,
			() => props.projectId,
			() => props.agentId
		], () => {
			if (showSection("tasks")) reloadTasks();
		});
		function openTaskModal(task) {
			uiStore.openModalWithData({
				name: AGENT_TASK_MODAL_KEY,
				data: {
					projectId: props.projectId,
					agentId: props.agentId,
					task,
					isPublished: props.isPublished,
					taskState: task ? { enabled: task.enabled } : void 0,
					onToggle: (payload) => emit("toggle-task", payload),
					onSaved: () => emit("tasks-changed")
				}
			});
		}
		function toToolOpenTarget(tool) {
			if (tool.type === "custom") return {
				kind: "tool",
				toolType: "custom",
				id: tool.id
			};
			if (tool.type === "workflow") return {
				kind: "tool",
				toolType: "workflow",
				id: tool.workflow
			};
			return {
				kind: "tool",
				toolType: "node",
				id: tool.name
			};
		}
		const capabilityTools = computed(() => [...props.tools.map((tool, index) => ({
			kind: "tool",
			index,
			tool,
			openTarget: toToolOpenTarget(tool)
		})), ...mcpServers.value.map((server, index) => ({
			kind: "mcpServer",
			index: props.tools.length + index,
			server,
			openTarget: {
				kind: "mcpServer",
				serverName: server.name
			}
		}))]);
		function toolLabel(entry) {
			if (entry.kind === "mcpServer") return formatToolNameForDisplay(entry.server.name);
			const { tool, index } = entry;
			if (tool.type === "custom") return formatToolNameForDisplay((tool.id ? props.customTools?.[tool.id]?.descriptor.name : void 0) ?? tool.id ?? `${tool.type}-${index + 1}`);
			if (tool.type === "workflow") return formatToolNameForDisplay(tool.name ?? tool.workflow ?? `${tool.type}-${index + 1}`);
			return formatToolNameForDisplay(tool.name ?? `${tool.type}-${index + 1}`);
		}
		function toolIcon(entry) {
			if (entry.kind === "mcpServer") return "mcp";
			const { tool } = entry;
			if (tool.type === "workflow") return "workflow";
			if (tool.type === "custom") return "code";
			return "globe";
		}
		function toolNodeType(entry) {
			if (entry.kind === "mcpServer") {
				const preferredTypeName = entry.server.metadata?.nodeTypeName ?? "@n8n/n8n-nodes-langchain.mcpClientTool";
				return nodeTypesStore.getNodeType(preferredTypeName) ?? nodeTypesStore.getNodeType("@n8n/n8n-nodes-langchain.mcpClientTool") ?? null;
			}
			const { tool } = entry;
			const node = toolRefToNode(tool);
			if (!node) return null;
			return nodeTypesStore.getNodeType(node.type, node.typeVersion) ?? null;
		}
		function toolTypeLabel(entry, nodeType = toolNodeType(entry)) {
			if (entry.kind === "mcpServer") return nodeType?.displayName ?? toolLabel(entry);
			const { tool } = entry;
			if (tool.type === "node") return nodeType?.displayName.replace(/ Tool$/, "") ?? toolLabel(entry);
			if (tool.type === "workflow") return i18n.baseText("agents.builder.tools.type.workflow");
			if (tool.type === "custom") return i18n.baseText("agents.builder.tools.type.custom");
			return toolLabel(entry);
		}
		function toolEntryReasons(entry) {
			if (entry.kind === "mcpServer") return mcpServerIssueMessages.value.get(entry.server.name) ?? [];
			return toolIssueMessages.value.get(entry.index) ?? [];
		}
		const toolRows = computed(() => {
			return buildToolRows(capabilityTools.value.map((entry) => {
				const nodeType = toolNodeType(entry);
				const reasons = toolEntryReasons(entry);
				return {
					index: entry.index,
					label: toolLabel(entry),
					typeLabel: toolTypeLabel(entry, nodeType),
					nodeType,
					fallbackIcon: toolIcon(entry),
					toolType: entry.kind === "tool" ? entry.tool.type : "mcpServer",
					openTarget: entry.openTarget,
					invalid: reasons.length > 0,
					invalidReasons: reasons
				};
			}));
		});
		function toTargetKey(target) {
			if (target.kind === "mcpServer") return `mcpServer:${encodeURIComponent(target.serverName)}`;
			return `tool:${target.toolType}:${encodeURIComponent(target.id)}`;
		}
		function fromTargetKey(key) {
			const [scope, toolType, ...rest] = key.split(":");
			if (scope === "mcpServer") {
				const encodedServerName = toolType;
				if (!encodedServerName) return null;
				return {
					kind: "mcpServer",
					serverName: decodeURIComponent(encodedServerName)
				};
			}
			if (scope !== "tool") return null;
			if (toolType !== "node" && toolType !== "workflow" && toolType !== "custom") return null;
			const encodedId = rest.join(":");
			if (!encodedId) return null;
			return {
				kind: "tool",
				toolType,
				id: decodeURIComponent(encodedId)
			};
		}
		function toolMenuItems(tool) {
			if (!tool.isGrouped) return [];
			return tool.tools.map((item) => ({
				id: toTargetKey(item.openTarget),
				label: item.label,
				data: {
					nodeType: item.nodeType,
					openTarget: item.openTarget,
					invalid: item.invalid,
					invalidReasons: item.invalidReasons
				}
			}));
		}
		function onToolMenuSelect(key) {
			const target = fromTargetKey(key);
			if (!target) return;
			emit("open-tool", target);
		}
		function emitSubAgentRefs(agents) {
			emit("update:config", { subAgents: {
				...props.config?.subAgents ?? {},
				agents
			} });
		}
		function toSubAgentRef(agentId, useWhen) {
			return {
				agentId,
				...useWhen ? { useWhen } : {}
			};
		}
		async function openSubAgentsModal() {
			try {
				await ensureProjectAgentsLoaded();
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.builder.subAgents.loadError"));
				return;
			}
			uiStore.openModalWithData({
				name: AGENT_SUB_AGENTS_MODAL_KEY,
				data: {
					agents: availableSubAgents.value.map(({ id, name }) => ({
						id,
						name
					})),
					onConfirm: ({ agentId, useWhen }) => {
						if (selectedSubAgentIdSet.value.has(agentId)) return;
						emitSubAgentRefs([...selectedSubAgentRefs.value, toSubAgentRef(agentId, useWhen)]);
					}
				}
			});
		}
		function openExistingSubAgentModal(subAgent) {
			uiStore.openModalWithData({
				name: AGENT_SUB_AGENTS_MODAL_KEY,
				data: {
					selectedAgent: {
						id: subAgent.id,
						name: subAgent.name
					},
					useWhen: subAgent.useWhen,
					invalidReasons: subAgent.invalidReasons,
					onConfirm: ({ agentId, useWhen }) => {
						emitSubAgentRefs(selectedSubAgentRefs.value.map((ref) => ref.agentId === agentId ? toSubAgentRef(agentId, useWhen) : ref));
					},
					onRemove: (agentId) => {
						emitSubAgentRefs(selectedSubAgentRefs.value.filter((ref) => ref.agentId !== agentId));
					}
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.section),
				"data-testid": "agent-capabilities-section"
			}, [
				showSection("tools") ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.capabilityRow)
				}, [toolRows.value.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: "",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tools.title")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(toolRows.value, (tool, toolIndex) => {
					return openBlock(), createElementBlock("div", {
						key: `tool-${tool.index}`,
						class: normalizeClass(_ctx.$style.chipGroup)
					}, [tool.isGrouped ? (openBlock(), createBlock(unref(DropdownMenu_default), {
						key: 0,
						items: toolMenuItems(tool),
						disabled: props.disabled,
						placement: "bottom-start",
						"data-testid": "agent-capabilities-tool-group",
						onSelect: onToolMenuSelect
					}, {
						trigger: withCtx(() => [createVNode(AgentChipButton_default, {
							invalid: tool.invalid,
							"invalid-reasons": tool.invalidReasons,
							disabled: props.disabled,
							class: normalizeClass(_ctx.$style.capabilityChip),
							"data-testid": "agent-capabilities-tool-row"
						}, {
							icon: withCtx(() => [createVNode(NodeIcon_default, {
								"node-type": tool.nodeType,
								size: 16
							}, null, 8, ["node-type"])]),
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.groupChipLabel) }, [createTextVNode(toDisplayString(tool.label) + " ", 1), createVNode(unref(N8nIcon_default), {
								icon: "chevron-down",
								size: 12,
								color: "text-light"
							})], 2)]),
							_: 2
						}, 1032, [
							"invalid",
							"invalid-reasons",
							"disabled",
							"class"
						])]),
						"item-leading": withCtx(({ item, ui }) => [item.data?.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
							key: 0,
							"node-type": item.data.nodeType,
							size: 16,
							class: normalizeClass(ui.class)
						}, null, 8, ["node-type", "class"])) : createCommentVNode("", true)]),
						"item-trailing": withCtx(({ item }) => [item.data?.invalid ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							disabled: (item.data.invalidReasons ?? []).length === 0,
							placement: "top"
						}, {
							content: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(item.data.invalidReasons, (reason) => {
								return openBlock(), createElementBlock("div", { key: reason }, toDisplayString(reason), 1);
							}), 128))]),
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "triangle-alert",
								size: 14,
								"data-testid": "agent-capabilities-tool-menu-invalid-icon"
							})]),
							_: 2
						}, 1032, ["disabled"])) : createCommentVNode("", true)]),
						_: 2
					}, 1032, ["items", "disabled"])) : tool.nodeType ? (openBlock(), createBlock(AgentChipButton_default, {
						key: 1,
						invalid: tool.invalid,
						"invalid-reasons": tool.invalidReasons,
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.capabilityChip),
						"data-testid": "agent-capabilities-tool-row",
						onClick: ($event) => emit("open-tool", tool.tool.openTarget)
					}, {
						icon: withCtx(() => [createVNode(NodeIcon_default, {
							"node-type": tool.nodeType,
							size: 16
						}, null, 8, ["node-type"])]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(tool.label), 1)]),
						_: 2
					}, 1032, [
						"invalid",
						"invalid-reasons",
						"disabled",
						"class",
						"onClick"
					])) : (openBlock(), createBlock(AgentChipButton_default, {
						key: 2,
						icon: tool.fallbackIcon,
						invalid: tool.invalid,
						"invalid-reasons": tool.invalidReasons,
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.capabilityChip),
						"data-testid": "agent-capabilities-tool-row",
						onClick: ($event) => emit("open-tool", tool.tool.openTarget)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(tool.label), 1)]),
						_: 2
					}, 1032, [
						"icon",
						"invalid",
						"invalid-reasons",
						"disabled",
						"class",
						"onClick"
					])), toolIndex === toolRows.value.length - 1 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 3,
						content: unref(i18n).baseText("agents.builder.tools.add"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "medium",
							"icon-only": "",
							disabled: props.disabled,
							"data-testid": "agent-capabilities-add-tool",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("add-tool"))
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "plus",
								size: 16,
								color: "text-light"
							})]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)], 2);
				}), 128)), toolRows.value.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.chipGroup)
				}, [createVNode(unref(N8nTooltip_default), {
					disabled: "",
					content: unref(i18n).baseText("agents.builder.tools.add"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.addButtonEmpty),
						variant: "ghost",
						size: "medium",
						disabled: props.disabled,
						"data-testid": "agent-capabilities-add-tool",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("add-tool"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tools.add")), 1)]),
						_: 1
					}, 8, ["class", "disabled"])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true),
				showSection("skills") ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.capabilityRow)
				}, [__props.skills.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: "",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.title")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.skills, ({ id, skill }, skillIndex) => {
					return openBlock(), createElementBlock("div", {
						key: id,
						class: normalizeClass(_ctx.$style.chipGroup)
					}, [createVNode(AgentChipButton_default, {
						icon: "sparkles",
						invalid: (skillIssueMessages.value.get(id) ?? []).length > 0,
						"invalid-reasons": skillIssueMessages.value.get(id) ?? [],
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.capabilityChip),
						"data-testid": "agent-capabilities-skill-row",
						onClick: ($event) => emit("open-skill", id)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(skill.name || id), 1)]),
						_: 2
					}, 1032, [
						"invalid",
						"invalid-reasons",
						"disabled",
						"class",
						"onClick"
					]), skillIndex === __props.skills.length - 1 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("agents.builder.skills.add"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "medium",
							"icon-only": "",
							disabled: props.disabled,
							"data-testid": "agent-capabilities-add-skill",
							onClick: _cache[2] || (_cache[2] = ($event) => emit("add-skill"))
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "plus",
								size: 16,
								color: "text-light"
							})]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)], 2);
				}), 128)), __props.skills.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.chipGroup)
				}, [createVNode(unref(N8nTooltip_default), {
					disabled: "",
					content: unref(i18n).baseText("agents.builder.skills.add"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.addButtonEmpty),
						variant: "ghost",
						size: "medium",
						disabled: props.disabled,
						"data-testid": "agent-capabilities-add-skill",
						onClick: _cache[3] || (_cache[3] = ($event) => emit("add-skill"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.skills.add")), 1)]),
						_: 1
					}, 8, ["class", "disabled"])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true),
				showSection("subAgents") ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.capabilityRow)
				}, [selectedSubAgents.value.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: "",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.title")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(selectedSubAgents.value, (subAgent, subAgentIndex) => {
					return openBlock(), createElementBlock("div", {
						key: subAgent.id,
						class: normalizeClass(_ctx.$style.chipGroup)
					}, [createVNode(AgentChipButton_default, {
						icon: "bot",
						invalid: subAgent.invalid,
						"invalid-reasons": subAgent.invalidReasons,
						disabled: props.disabled,
						class: normalizeClass(_ctx.$style.capabilityChip),
						"data-testid": "agent-capabilities-sub-agent-row",
						onClick: ($event) => openExistingSubAgentModal(subAgent)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(subAgent.name), 1)]),
						_: 2
					}, 1032, [
						"invalid",
						"invalid-reasons",
						"disabled",
						"class",
						"onClick"
					]), subAgentIndex === selectedSubAgents.value.length - 1 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("agents.builder.subAgents.modal.title"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "ghost",
							size: "medium",
							"icon-only": "",
							disabled: props.disabled,
							"data-testid": "agent-capabilities-add-sub-agent",
							onClick: openSubAgentsModal
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "plus",
								size: 16,
								color: "text-light"
							})]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)], 2);
				}), 128)), selectedSubAgents.value.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.chipGroup)
				}, [createVNode(unref(N8nTooltip_default), {
					disabled: "",
					content: unref(i18n).baseText("agents.builder.subAgents.modal.title"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.addButtonEmpty),
						variant: "ghost",
						size: "medium",
						disabled: props.disabled,
						"data-testid": "agent-capabilities-add-sub-agent",
						onClick: openSubAgentsModal
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.subAgents.add")), 1)]),
						_: 1
					}, 8, ["class", "disabled"])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true)], 2)], 2)) : createCommentVNode("", true),
				showSection("tasks") ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.capabilityRow)
				}, [taskRows.value.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: "",
					class: normalizeClass(_ctx.$style.rowLabel)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.title")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chips) }, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(taskRows.value, (task, taskIndex) => {
						return openBlock(), createElementBlock("div", {
							key: task.id,
							class: normalizeClass(_ctx.$style.chipGroup)
						}, [createVNode(AgentChipButton_default, {
							icon: "clipboard-list",
							invalid: task.invalid,
							"invalid-reasons": task.invalidReasons,
							disabled: props.disabled,
							class: normalizeClass(_ctx.$style.capabilityChip),
							"data-testid": "agent-capabilities-task-row",
							onClick: ($event) => openTaskModal(task)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(task.name), 1)]),
							_: 2
						}, 1032, [
							"invalid",
							"invalid-reasons",
							"disabled",
							"class",
							"onClick"
						]), taskIndex === taskRows.value.length - 1 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							content: unref(i18n).baseText("agents.builder.tasks.add"),
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "ghost",
								size: "medium",
								"icon-only": "",
								disabled: props.disabled,
								"data-testid": "agent-capabilities-add-task",
								onClick: _cache[4] || (_cache[4] = ($event) => openTaskModal(null))
							}, {
								icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: "plus",
									size: 16,
									color: "text-light"
								})]),
								_: 1
							}, 8, ["disabled"])]),
							_: 1
						}, 8, ["content"])) : createCommentVNode("", true)], 2);
					}), 128)),
					taskRows.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.chipGroup)
					}, [createVNode(unref(N8nTooltip_default), {
						disabled: "",
						content: unref(i18n).baseText("agents.builder.tasks.add"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							class: normalizeClass(_ctx.$style.addButtonEmpty),
							variant: "ghost",
							size: "medium",
							disabled: props.disabled,
							"data-testid": "agent-capabilities-add-task",
							onClick: _cache[5] || (_cache[5] = ($event) => openTaskModal(null))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.tasks.add")), 1)]),
							_: 1
						}, 8, ["class", "disabled"])]),
						_: 1
					}, 8, ["content"])], 2)) : createCommentVNode("", true),
					taskErrorMessage.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						class: normalizeClass(_ctx.$style.error)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(taskErrorMessage.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2)) : createCommentVNode("", true)
			], 2)]);
		};
	}
});
var AgentCapabilitiesSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_1s1pt_125",
	capabilityRow: "_capabilityRow_1s1pt_132",
	rowLabel: "_rowLabel_1s1pt_138",
	chips: "_chips_1s1pt_145",
	chipGroup: "_chipGroup_1s1pt_153",
	capabilityChip: "_capabilityChip_1s1pt_162",
	addButtonEmpty: "_addButtonEmpty_1s1pt_166",
	groupChipLabel: "_groupChipLabel_1s1pt_172",
	error: "_error_1s1pt_178"
};
var AgentCapabilitiesSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCapabilitiesSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCapabilitiesSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentCapabilitiesActions.ts
/**
* The set of capability-action handlers wired to `AgentCapabilitiesSection`
* (tools, skills, tasks, triggers). Extracted from `AgentBuilderView` so a
* second surface (the agent node's NDV) can reuse them with its own
* config-update funnel + telemetry adapter.
*/
function useAgentCapabilitiesActions(deps) {
	const { localConfig, agent, projectId, agentId, connectedTriggers, scheduleConfigUpdate, scheduleSkillSave, localSkills, supportsToolApproval, ensureAgentPersisted, validationIssues, telemetry } = deps;
	const locale = useI18n();
	const rootStore = useRootStore();
	const uiStore = useUIStore();
	const nodeTypesStore = useNodeTypesStore();
	const { showError, showMessage } = useToast();
	function onOpenAddToolModal() {
		const targetAgentId = agentId.value;
		uiStore.openModalWithData({
			name: AGENT_TOOLS_MODAL_KEY,
			data: {
				tools: localConfig.value?.tools ?? [],
				mcpServers: localConfig.value?.mcpServers ?? [],
				projectId: projectId.value,
				agentId: targetAgentId,
				supportsToolApproval,
				onConfirm: (payload) => {
					if (agentId.value !== targetAgentId) return;
					scheduleConfigUpdate({
						...payload.tools && { tools: payload.tools },
						...payload.mcpServers && { mcpServers: payload.mcpServers }
					});
				}
			}
		});
	}
	function onOpenToolFromList(target) {
		const tools = localConfig.value?.tools ?? [];
		const toolIndex = typeof target === "number" ? target : tools.findIndex((tool) => {
			if (target.kind !== "tool") return false;
			if (tool.type !== target.toolType) return false;
			if (tool.type === "node") return tool.name === target.id;
			if (tool.type === "workflow") return tool.workflow === target.id;
			return tool.id === target.id;
		});
		const tool = toolIndex >= 0 ? tools[toolIndex] : void 0;
		if (tool) {
			const customTool = tool.type === "custom" && tool.id ? agent.value?.tools?.[tool.id] : void 0;
			telemetry?.trackOpenedToolFromList?.(tool.type);
			uiStore.openModalWithData({
				name: AGENT_TOOL_CONFIG_MODAL_KEY,
				data: {
					toolRef: tool,
					customTool,
					projectId: projectId.value,
					agentId: agentId.value,
					supportsToolApproval,
					validationIssues: validationIssues?.value.filter((issue) => issue.capability.kind === "tool" && issue.capability.index === toolIndex),
					existingToolNames: tools.map((toolRef, i) => i === toolIndex || toolRef.type === "custom" ? null : toolRef.name).filter((name) => !!name),
					onConfirm: (updatedTool) => {
						const nextTools = [...localConfig.value?.tools ?? []];
						nextTools[toolIndex] = updatedTool;
						scheduleConfigUpdate({ tools: nextTools });
					},
					onRemove: () => onRemoveTool(toolIndex)
				}
			});
			return;
		}
		const mcpServers = localConfig.value?.mcpServers ?? [];
		const mcpServerIndex = typeof target === "number" ? target - tools.length : target.kind === "mcpServer" ? mcpServers.findIndex((server) => server.name === target.serverName) : -1;
		const mcpServer = mcpServers[mcpServerIndex];
		if (!mcpServer) return;
		const preferredNodeTypeName = mcpServer.metadata?.nodeTypeName ?? "@n8n/n8n-nodes-langchain.mcpClientTool";
		const nodeType = nodeTypesStore.getNodeType(preferredNodeTypeName) ?? nodeTypesStore.getNodeType("@n8n/n8n-nodes-langchain.mcpClientTool");
		if (!nodeType) return;
		telemetry?.trackOpenedToolFromList?.("mcpServer");
		uiStore.openModalWithData({
			name: AGENT_TOOL_CONFIG_MODAL_KEY,
			data: {
				kind: "mcpServer",
				mcpServer,
				initialNode: mcpServerToNode(mcpServer, nodeType),
				projectId: projectId.value,
				agentId: agentId.value,
				supportsToolApproval,
				existingToolNames: mcpServers.filter((_, i) => i !== mcpServerIndex).map((server) => server.name),
				onConfirm: (updatedServer) => {
					const nextMcpServers = [...localConfig.value?.mcpServers ?? []];
					nextMcpServers[mcpServerIndex] = updatedServer;
					scheduleConfigUpdate({ mcpServers: nextMcpServers });
				},
				onRemove: () => {
					scheduleConfigUpdate({ mcpServers: (localConfig.value?.mcpServers ?? []).filter((_, i) => i !== mcpServerIndex) });
				}
			}
		});
	}
	const appliedSkills = computed(() => {
		const rawRefs = localConfig.value?.skills;
		const refs = Array.isArray(rawRefs) ? rawRefs : [];
		const bodies = localSkills?.bodies.value ?? agent.value?.skills ?? {};
		const seen = /* @__PURE__ */ new Set();
		const out = [];
		for (const skillRef of refs) {
			if (typeof skillRef?.id !== "string" || !skillRef.id || seen.has(skillRef.id)) continue;
			seen.add(skillRef.id);
			out.push({
				id: skillRef.id,
				skill: (Object.hasOwn(bodies, skillRef.id) ? bodies[skillRef.id] : void 0) ?? {
					name: skillRef.id,
					description: "",
					instructions: ""
				}
			});
		}
		return out;
	});
	function onOpenSkillFromList(id) {
		const skill = appliedSkills.value.find((s) => s.id === id)?.skill;
		if (!skill) return;
		telemetry?.trackOpenedSkillFromList?.(id);
		const targetAgentId = agentId.value;
		uiStore.openModalWithData({
			name: AGENT_SKILL_MODAL_KEY,
			data: {
				projectId: projectId.value,
				agentId: targetAgentId,
				skill,
				skillId: id,
				availableTools: configuredToolOptions(),
				existingSkillNames: appliedSkillNames(id),
				onRemove: (skillId) => {
					if (agentId.value !== targetAgentId) return;
					onRemoveSkill(skillId);
				},
				onConfirm: ({ id: skillId, skill: updatedSkill }) => {
					if (!skillId) return;
					if (agentId.value !== targetAgentId) return;
					const sanitizedSkill = filterSkillAllowedTools(updatedSkill);
					if (localSkills) {
						if (hasDuplicateSkillName(sanitizedSkill.name, skillId)) {
							showDuplicateSkillNameError(sanitizedSkill.name);
							return;
						}
						localSkills.updateSkill(skillId, sanitizedSkill);
						return;
					}
					if (agent.value?.id !== targetAgentId) return;
					agent.value = {
						...agent.value,
						skills: {
							...agent.value.skills ?? {},
							[skillId]: sanitizedSkill
						}
					};
					scheduleSkillSave({
						skillId,
						skill: sanitizedSkill
					});
				}
			}
		});
	}
	function configuredToolOptions() {
		const tools = [];
		for (const tool of localConfig.value?.tools ?? []) if (tool.type === "custom") {
			const name = agent.value?.tools?.[tool.id]?.descriptor.name ?? tool.id;
			if (name) tools.push({
				name,
				label: formatToolNameForDisplay(name) || name,
				icon: "code"
			});
		} else if (tool.type === "workflow") {
			const name = tool.name ?? tool.workflow;
			tools.push({
				name,
				label: formatToolNameForDisplay(name) || name,
				icon: "workflow"
			});
		} else tools.push({
			name: tool.name,
			label: formatToolNameForDisplay(tool.name) || tool.name,
			icon: "globe"
		});
		for (const server of localConfig.value?.mcpServers ?? []) {
			if (!server.name) continue;
			tools.push({
				name: server.name,
				label: formatToolNameForDisplay(server.name) || server.name,
				icon: "mcp"
			});
		}
		return tools;
	}
	function configuredToolNames() {
		return new Set(configuredToolOptions().map((tool) => tool.name));
	}
	function filterSkillAllowedTools(skill) {
		return normalizeAgentSkillForSave(skill, configuredToolNames());
	}
	/** Names the skill modal validates against: every applied skill except the one being edited. */
	function appliedSkillNames(excludeId) {
		return appliedSkills.value.filter(({ id }) => id !== excludeId).map(({ skill }) => skill.name);
	}
	/**
	* Authoring-time mirror of the backend's `assertSkillNameIsUnique` for
	* local-skill hosts. The modal validates against `existingSkillNames` before closing
	*/
	function hasDuplicateSkillName(name, excludeId) {
		const normalized = name.trim().toLowerCase();
		return appliedSkillNames(excludeId).some((existing) => existing.trim().toLowerCase() === normalized);
	}
	function showDuplicateSkillNameError(name) {
		showMessage({
			title: locale.baseText("agents.builder.skills.duplicateName.error", { interpolate: { name: name.trim() } }),
			type: "error"
		});
	}
	function onRemoveTool(index) {
		const currentTools = localConfig.value?.tools ?? [];
		if (index < 0 || index >= currentTools.length) return;
		scheduleConfigUpdate({ tools: currentTools.filter((_, i) => i !== index) });
	}
	function onRemoveSkill(id) {
		scheduleConfigUpdate({ skills: (localConfig.value?.skills ?? []).filter((skillRef) => skillRef.id !== id) });
	}
	function onToggleTask(payload) {
		scheduleConfigUpdate({ tasks: (localConfig.value?.tasks ?? []).map((taskRef) => taskRef.id === payload.id ? {
			...taskRef,
			enabled: payload.enabled
		} : taskRef) });
	}
	function onOpenAddSkillModal() {
		telemetry?.trackOpenedAddSkillModal?.();
		const targetProjectId = projectId.value;
		const targetAgentId = agentId.value;
		uiStore.openModalWithData({
			name: AGENT_SKILL_MODAL_KEY,
			data: {
				projectId: targetProjectId,
				agentId: targetAgentId,
				availableTools: configuredToolOptions(),
				existingSkillNames: appliedSkillNames(),
				onConfirm: ({ skill }) => {
					if (localSkills) {
						if (agentId.value !== targetAgentId) return;
						const sanitizedSkill = filterSkillAllowedTools(skill);
						if (hasDuplicateSkillName(sanitizedSkill.name)) {
							showDuplicateSkillNameError(sanitizedSkill.name);
							return;
						}
						localSkills.createSkill(sanitizedSkill);
						showMessage({
							title: locale.baseText("agents.builder.skills.added"),
							type: "success"
						});
						return;
					}
					(async () => {
						const sanitizedSkill = filterSkillAllowedTools(skill);
						let created;
						let versionId;
						let skillId;
						try {
							await ensureAgentPersisted?.();
							const result = await createAgentSkill(rootStore.restApiContext, targetProjectId, targetAgentId, sanitizedSkill);
							skillId = result.id;
							created = result.skill;
							versionId = result.versionId;
						} catch (error) {
							showError(error, locale.baseText("agents.builder.skills.create.error"));
							return;
						}
						if (agent.value?.id !== targetAgentId) return;
						agent.value = {
							...agent.value,
							versionId,
							skills: {
								...agent.value.skills ?? {},
								[skillId]: created
							}
						};
						scheduleConfigUpdate({ skills: [...localConfig.value?.skills ?? [], {
							type: "skill",
							id: skillId
						}] });
						showMessage({
							title: locale.baseText("agents.builder.skills.added"),
							type: "success"
						});
					})();
				}
			}
		});
	}
	function onConnectedTriggersUpdate(triggers) {
		connectedTriggers.value = triggers;
	}
	function onTriggerAdded(payload) {
		connectedTriggers.value = payload.triggers;
		telemetry?.trackTriggerAdded?.(payload);
	}
	return {
		appliedSkills,
		onOpenAddToolModal,
		onOpenToolFromList,
		onRemoveTool,
		onOpenAddSkillModal,
		onOpenSkillFromList,
		onRemoveSkill,
		onToggleTask,
		onConnectedTriggersUpdate,
		onTriggerAdded
	};
}
//#endregion
//#region src/features/agents/agents.eventBus.ts
var agentsEventBus = createEventBus();
//#endregion
export { getNativeWebSearchArgs as a, agent_panel_module_default as c, AgentInfoPanel_default as i, useAgentCapabilitiesActions as n, getWebSearchMethod as o, AgentCapabilitiesSection_default as r, withWebSearchConfig as s, agentsEventBus as t };
