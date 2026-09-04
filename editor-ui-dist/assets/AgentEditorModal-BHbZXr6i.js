import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, at as resolveComponent, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { O as useTimeoutPoll, d as useDocumentVisibility } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BmYlbe2o.js";
import { wt as useCredentialsStore } from "./workflows.store-qP-dtzSs.js";
import { t as N8nIconPicker_default } from "./N8nIconPicker-DW5oXkK8.js";
import { z as emptyChatModelsResponse } from "./src-B255AdRt.js";
import { t as useRootStore } from "./useRootStore-CLEJA2KF.js";
import { t as assert } from "./assert-BgZvUjbv.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useUsersStore } from "./users.store-BBpeiveu.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePostHog } from "./posthog.store-DkF9cXA_.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { xa as CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT } from "./constants-CMdL1Kzl.js";
import { t as require_dateformat } from "./dateformat-DxkxG_VE.js";
import { n as useUIStore } from "./ui.store-xzfQIfPK.js";
import { t as Modal_default } from "./Modal-DYw1gJ5H.js";
import { h as providerDisplayNames, s as CHAT_SETTINGS_VIEW } from "./constants-zeVT1Ciq.js";
import { c as fetchChatModelsApi, s as fetchAgentApi, t as useChatStore } from "./chat.store-BOzBynwr.js";
import { S as personalAgentDefaultIcon, v as isLlmProviderModel } from "./chat.utils-yr8r7OPi.js";
import { n as useFileDrop, t as ToolsSelector_default } from "./ToolsSelector-E4zum1zq.js";
import { n as ModelSelector_default, t as useCustomAgent } from "./useCustomAgent-7Xv58GPp.js";
//#region src/features/ai/chatHub/components/SuggestedPromptsEditor.vue?vue&type=script&setup=true&lang.ts
var MAX_PROMPTS = 6;
var SuggestedPromptsEditor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SuggestedPromptsEditor",
	props: {
		"modelValue": { required: true },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const DEFAULT_PROMPT_ICON = {
			type: "icon",
			value: "comment"
		};
		const i18n = useI18n();
		const prompts = useModel(__props, "modelValue");
		const inputRefs = ref([]);
		function addPrompt() {
			if (prompts.value.length >= MAX_PROMPTS) return;
			prompts.value = [...prompts.value, {
				text: "",
				icon: DEFAULT_PROMPT_ICON
			}];
			nextTick(() => {
				inputRefs.value[prompts.value.length - 1]?.focus();
			});
		}
		function removePrompt(index) {
			prompts.value = prompts.value.filter((_, i) => i !== index);
		}
		function updateText(index, text) {
			prompts.value = prompts.value.map((p, i) => i === index ? {
				...p,
				text
			} : p);
		}
		function updateIcon(index, icon) {
			prompts.value = prompts.value.map((p, i) => i === index ? {
				...p,
				icon
			} : p);
		}
		function onInputKeydown(event, index) {
			if (event.key === "Enter") {
				event.preventDefault();
				if (prompts.value[index].text.trim().length > 0) addPrompt();
			} else if (event.key === "Backspace" && prompts.value[index].text === "") {
				event.preventDefault();
				removePrompt(index);
				if (index > 0) nextTick(() => {
					inputRefs.value[index - 1]?.focus();
				});
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.container, "suggested-prompts-editor"]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(prompts.value, (prompt, index) => {
				return openBlock(), createElementBlock("div", {
					key: index,
					class: normalizeClass(_ctx.$style.row)
				}, [
					createVNode(unref(N8nIconPicker_default), {
						"model-value": prompt.icon ?? DEFAULT_PROMPT_ICON,
						"button-tooltip": unref(i18n).baseText("chatHub.agent.editor.iconPicker.button.tooltip"),
						"onUpdate:modelValue": ($event) => updateIcon(index, $event)
					}, null, 8, [
						"model-value",
						"button-tooltip",
						"onUpdate:modelValue"
					]),
					createVNode(unref(Input_default), {
						ref_for: true,
						ref: (el) => {
							inputRefs.value[index] = el;
						},
						"model-value": prompt.text,
						placeholder: unref(i18n).baseText("chatHub.agent.editor.suggestedPrompts.placeholder"),
						maxlength: 256,
						class: normalizeClass(_ctx.$style.input),
						"onUpdate:modelValue": ($event) => updateText(index, $event),
						onKeydown: ($event) => onInputKeydown($event, index)
					}, null, 8, [
						"model-value",
						"placeholder",
						"class",
						"onUpdate:modelValue",
						"onKeydown"
					]),
					createVNode(unref(N8nButton_default), {
						variant: "ghost",
						icon: "x",
						size: "small",
						"data-testid": "remove-prompt-button",
						onClick: ($event) => removePrompt(index)
					}, null, 8, ["onClick"])
				], 2);
			}), 128)), createVNode(unref(N8nButton_default), {
				variant: "subtle",
				icon: "plus",
				size: "small",
				disabled: prompts.value.length >= MAX_PROMPTS,
				"data-testid": "add-prompt-button",
				onClick: addPrompt
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.suggestedPrompts.addButton")), 1)]),
				_: 1
			}, 8, ["disabled"])], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/SuggestedPromptsEditor.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_7t1ft_388";
var row$1 = "_row_7t1ft_394";
var input$1 = "_input_7t1ft_400";
var shimmer$2 = "_shimmer_7t1ft_1";
var spin$2 = "_spin_7t1ft_1";
var opacityPulse$2 = "_opacityPulse_7t1ft_1";
var popoverIn$2 = "_popoverIn_7t1ft_1";
var fadeIn$2 = "_fadeIn_7t1ft_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_7t1ft_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_7t1ft_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_7t1ft_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_7t1ft_1";
var blurSwapIn$2 = "_blurSwapIn_7t1ft_1";
var blurSwapOut$2 = "_blurSwapOut_7t1ft_1";
var pulseGlow$2 = "_pulseGlow_7t1ft_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_7t1ft_1";
var fade$2 = "_fade_7t1ft_1";
var fadeInUp$2 = "_fadeInUp_7t1ft_1";
var fadeInDown$2 = "_fadeInDown_7t1ft_1";
var fadeInLeft$2 = "_fadeInLeft_7t1ft_1";
var fadeInRight$2 = "_fadeInRight_7t1ft_1";
var fadeOut$2 = "_fadeOut_7t1ft_1";
var fadeOutDown$2 = "_fadeOutDown_7t1ft_1";
var fadeOutUp$2 = "_fadeOutUp_7t1ft_1";
var fadeOutLeft$2 = "_fadeOutLeft_7t1ft_1";
var fadeOutRight$2 = "_fadeOutRight_7t1ft_1";
var ping$2 = "_ping_7t1ft_1";
var blinkBackground$2 = "_blinkBackground_7t1ft_1";
var typingBlink$2 = "_typingBlink_7t1ft_1";
var SuggestedPromptsEditor_vue_vue_type_style_index_0_lang_module_default = {
	container,
	row: row$1,
	input: input$1,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_7t1ft_1",
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
var SuggestedPromptsEditor_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SuggestedPromptsEditor_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SuggestedPromptsEditor_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/AgentEditorModalFileRow.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var AgentEditorModalFileRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentEditorModalFileRow",
	props: {
		item: {},
		semanticSearchReady: { type: Boolean },
		currentEmbeddingProvider: {}
	},
	emits: ["remove"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const formattedCreatedAt = computed(() => {
			const createdAt = props.item.createdAt ?? (/* @__PURE__ */ new Date()).toISOString();
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			const date = (0, import_dateformat.default)(createdAt, `mmmm d${createdAt.startsWith(currentYear) ? "" : ", yyyy"}`);
			return i18n.baseText("chatHub.agent.editor.files.createdAt", { interpolate: { date } });
		});
		const warningTooltip = computed(() => {
			if (props.item.isNew || props.item.status !== "indexed") return void 0;
			if (!props.semanticSearchReady) return i18n.baseText("chatHub.agent.editor.files.semanticSearchNotReady.tooltip");
			if (props.item.provider && props.item.provider !== props.currentEmbeddingProvider) return i18n.baseText("chatHub.agent.editor.files.embeddingMismatch.tooltip", { interpolate: {
				fileProvider: providerDisplayNames[props.item.provider],
				currentProvider: props.currentEmbeddingProvider ? providerDisplayNames[props.currentEmbeddingProvider] : "unknown"
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.fileRow) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.fileName) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileNameText) }, toDisplayString(__props.item.fileName), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.createdAt) }, toDisplayString(formattedCreatedAt.value), 3)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.indexedCell) }, [warningTooltip.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: warningTooltip.value
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.statusText)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "triangle-alert",
							size: "medium",
							class: normalizeClass(_ctx.$style.iconWarning)
						}, null, 8, ["class"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("chatHub.agent.editor.files.unavailable")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["content"])) : __props.item.status === "indexing" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), {
					icon: "loader",
					class: normalizeClass(_ctx.$style.iconIndexing),
					size: "medium"
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.files.indexing")), 1)]),
					_: 1
				})], 64)) : __props.item.status === "error" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					content: unref(i18n).baseText("chatHub.agent.editor.files.indexingError.tooltip", { interpolate: { error: __props.item.error ?? "Unknown error" } })
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "danger",
						class: normalizeClass(_ctx.$style.statusText)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "circle-x",
							size: "medium"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("chatHub.agent.editor.files.failed")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2),
				__props.item.status !== "indexing" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "trash-2",
					size: "small",
					variant: "subtle",
					onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("remove"), ["stop"]))
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/AgentEditorModalFileRow.vue?vue&type=style&index=0&lang.module.scss
var fileRow = "_fileRow_t80q2_388";
var fileName = "_fileName_t80q2_400";
var fileNameText = "_fileNameText_t80q2_407";
var createdAt = "_createdAt_t80q2_415";
var indexedCell = "_indexedCell_t80q2_421";
var iconWarning = "_iconWarning_t80q2_428";
var iconIndexing = "_iconIndexing_t80q2_432";
var spin$1 = "_spin_t80q2_1";
var statusText = "_statusText_t80q2_443";
var shimmer$1 = "_shimmer_t80q2_1";
var opacityPulse$1 = "_opacityPulse_t80q2_1";
var popoverIn$1 = "_popoverIn_t80q2_1";
var fadeIn$1 = "_fadeIn_t80q2_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_t80q2_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_t80q2_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_t80q2_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_t80q2_1";
var blurSwapIn$1 = "_blurSwapIn_t80q2_1";
var blurSwapOut$1 = "_blurSwapOut_t80q2_1";
var pulseGlow$1 = "_pulseGlow_t80q2_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_t80q2_1";
var fade$1 = "_fade_t80q2_1";
var fadeInUp$1 = "_fadeInUp_t80q2_1";
var fadeInDown$1 = "_fadeInDown_t80q2_1";
var fadeInLeft$1 = "_fadeInLeft_t80q2_1";
var fadeInRight$1 = "_fadeInRight_t80q2_1";
var fadeOut$1 = "_fadeOut_t80q2_1";
var fadeOutDown$1 = "_fadeOutDown_t80q2_1";
var fadeOutUp$1 = "_fadeOutUp_t80q2_1";
var fadeOutLeft$1 = "_fadeOutLeft_t80q2_1";
var fadeOutRight$1 = "_fadeOutRight_t80q2_1";
var ping$1 = "_ping_t80q2_1";
var blinkBackground$1 = "_blinkBackground_t80q2_1";
var typingBlink$1 = "_typingBlink_t80q2_1";
var AgentEditorModalFileRow_vue_vue_type_style_index_0_lang_module_default = {
	fileRow,
	fileName,
	fileNameText,
	createdAt,
	indexedCell,
	iconWarning,
	iconIndexing,
	spin: spin$1,
	statusText,
	shimmer: shimmer$1,
	"skeleton-pulse": "_skeleton-pulse_t80q2_1",
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
var AgentEditorModalFileRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentEditorModalFileRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentEditorModalFileRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/AgentEditorModal.vue?vue&type=script&setup=true&lang.ts
var AgentEditorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentEditorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const chatStore = useChatStore();
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const credentialsStore = useCredentialsStore();
		const i18n = useI18n();
		const canConfigureVectorStore = computed(() => usersStore.isInstanceOwner);
		const canUploadFiles = computed(() => chatStore.semanticSearchReadiness.isReadyForCurrentUser);
		const toast = useToast();
		const message = useMessage();
		const uiStore = useUIStore();
		const documentVisibility = useDocumentVisibility();
		const { customAgent, isLoading: isLoadingCustomAgent } = useCustomAgent(props.data.agentId);
		const name = ref("");
		const description = ref("");
		const systemPrompt = ref("");
		const selectedModel = ref(null);
		const isSaving = ref(false);
		const isDeleting = ref(false);
		const toolIds = ref([]);
		const agents = ref(emptyChatModelsResponse);
		const isLoadingAgents = ref(false);
		const nameInputRef = useTemplateRef("nameInput");
		const icon = ref(personalAgentDefaultIcon);
		const savedFiles = ref([]);
		const newFiles = ref([]);
		const removedFileKnowledgeIds = ref([]);
		const fileInputRef = useTemplateRef("fileInput");
		const currentEmbeddingProvider = computed(() => settingsStore.moduleSettings["chat-hub"]?.semanticSearch.embeddingModel.provider ?? null);
		const agentUploadMaxSizeMb = computed(() => settingsStore.moduleSettings["chat-hub"]?.agentUploadMaxSizeMb ?? 20);
		const allFiles = computed(() => [...savedFiles.value.map((file) => ({
			...file,
			isNew: false
		})), ...newFiles.value.map((file, index) => ({
			id: `new-${index}`,
			type: "embedding",
			provider: currentEmbeddingProvider.value,
			fileName: file.name,
			mimeType: file.type,
			isNew: true
		}))]);
		const suggestedPrompts = ref([]);
		const agentSelectedCredentials = ref({});
		const credentialIdForSelectedModelProvider = computed(() => selectedModel.value && agentMergedCredentials.value[selectedModel.value.provider]);
		const selectedAgent = computed(() => selectedModel.value && chatStore.getAgent(selectedModel.value, { name: selectedModel.value.model }));
		const isEditMode = computed(() => !!props.data.agentId);
		const isLoadingAgent = computed(() => isEditMode.value && isLoadingCustomAgent.value);
		const title = computed(() => isEditMode.value ? i18n.baseText("chatHub.agent.editor.title.edit") : i18n.baseText("chatHub.agent.editor.title.new"));
		const saveButtonLabel = computed(() => isSaving.value ? i18n.baseText("chatHub.agent.editor.saving") : i18n.baseText("chatHub.agent.editor.save"));
		const isValid = computed(() => name.value.trim().length > 0 && selectedModel.value !== null && !!credentialIdForSelectedModelProvider.value);
		const agentMergedCredentials = computed(() => {
			return {
				...props.data.credentials,
				...agentSelectedCredentials.value
			};
		});
		const canSelectTools = computed(() => selectedAgent.value?.metadata.capabilities.functionCalling ?? false);
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		watch(selectedAgent, (agent) => {
			if (agent && !agent.metadata.capabilities.functionCalling) toolIds.value = [];
		}, { immediate: true });
		watch(customAgent, (agent) => {
			if (!agent) return;
			icon.value = agent.icon ?? personalAgentDefaultIcon;
			name.value = agent.name;
			description.value = agent.description ?? "";
			systemPrompt.value = agent.systemPrompt;
			selectedModel.value = {
				provider: agent.provider,
				model: agent.model
			};
			savedFiles.value = agent.files;
			newFiles.value = [];
			removedFileKnowledgeIds.value = [];
			suggestedPrompts.value = agent.suggestedPrompts;
			toolIds.value = agent.toolIds ?? [];
			if (agent.credentialId) agentSelectedCredentials.value[agent.provider] = agent.credentialId;
		}, { immediate: true });
		onMounted(() => {
			watch([isLoadingAgent, nameInputRef], ([isLoading, nameInput]) => {
				if (!isLoading) nameInput?.focus();
			}, {
				immediate: true,
				flush: "post"
			});
		});
		watch(agentMergedCredentials, async (credentials) => {
			if (credentials) {
				isLoadingAgents.value = true;
				try {
					agents.value = await fetchChatModelsApi(useRootStore().restApiContext, { credentials });
				} finally {
					isLoadingAgents.value = false;
				}
			}
		}, { immediate: true });
		function onCredentialSelected(provider, credentialId) {
			agentSelectedCredentials.value = {
				...agentSelectedCredentials.value,
				[provider]: credentialId
			};
		}
		function handleToggleAgentTool(toolId) {
			if (toolIds.value.includes(toolId)) toolIds.value = toolIds.value.filter((id) => id !== toolId);
			else toolIds.value = [...toolIds.value, toolId];
		}
		function onModelChange(model) {
			assert(isLlmProviderModel(model));
			selectedModel.value = model;
		}
		async function onSave() {
			if (!isValid.value || isSaving.value) return;
			isSaving.value = true;
			try {
				assert(selectedModel.value);
				assert(credentialIdForSelectedModelProvider.value);
				const filteredPrompts = suggestedPrompts.value.filter((p) => p.text.trim().length > 0);
				const payload = {
					name: name.value.trim(),
					description: description.value.trim() || void 0,
					systemPrompt: systemPrompt.value.trim(),
					...selectedModel.value,
					credentialId: credentialIdForSelectedModelProvider.value,
					toolIds: toolIds.value,
					icon: icon.value,
					suggestedPrompts: filteredPrompts.length > 0 ? filteredPrompts : void 0
				};
				const hasNewFiles = newFiles.value.length > 0;
				const addedFiles = [...newFiles.value];
				if (isEditMode.value && props.data.agentId) {
					await chatStore.updateCustomAgent(props.data.agentId, payload, addedFiles, removedFileKnowledgeIds.value, props.data.credentials);
					if (addedFiles.length > 0) {
						const totalSizeMb = addedFiles.reduce((sum, f) => sum + f.size, 0) / (1024 * 1024);
						telemetry.track("User added files to personal agent", {
							count: addedFiles.length,
							total_size_mb: totalSizeMb,
							agent_id: props.data.agentId
						});
					}
					toast.showMessage({
						title: i18n.baseText("chatHub.agent.editor.success.update"),
						message: hasNewFiles ? i18n.baseText("chatHub.agent.editor.success.withFiles") : void 0,
						type: "success"
					});
				} else {
					const agent = await chatStore.createCustomAgent(payload, addedFiles, props.data.credentials);
					if (addedFiles.length > 0) {
						const totalSizeMb = addedFiles.reduce((sum, f) => sum + f.size, 0) / (1024 * 1024);
						telemetry.track("User added files to personal agent", {
							count: addedFiles.length,
							total_size_mb: totalSizeMb,
							agent_id: agent.model.provider === "custom-agent" ? agent.model.agentId : void 0
						});
					}
					props.data.onCreateCustomAgent?.(agent);
					toast.showMessage({
						title: i18n.baseText("chatHub.agent.editor.success.create"),
						message: hasNewFiles ? i18n.baseText("chatHub.agent.editor.success.withFiles") : void 0,
						type: "success"
					});
				}
				closeDialog();
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : "";
				toast.showError(error, i18n.baseText("chatHub.agent.editor.error.save"), { message: errorMessage });
			} finally {
				isSaving.value = false;
			}
		}
		async function onDelete() {
			if (!isEditMode.value || !props.data.agentId || isDeleting.value) return;
			if (await message.confirm(i18n.baseText("chatHub.agent.editor.delete.confirm.message"), i18n.baseText("chatHub.agent.editor.delete.confirm.title"), {
				confirmButtonText: i18n.baseText("chatHub.agent.editor.delete.confirm.button"),
				cancelButtonText: i18n.baseText("chatHub.agent.editor.delete.cancel.button"),
				type: "warning"
			}) !== "confirm") return;
			isDeleting.value = true;
			try {
				await chatStore.deleteCustomAgent(props.data.agentId, props.data.credentials);
				toast.showMessage({
					title: i18n.baseText("chatHub.agent.editor.success.delete"),
					type: "success"
				});
				props.data.onClose?.();
				closeDialog();
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : "";
				toast.showError(error, i18n.baseText("chatHub.agent.editor.error.delete"), { message: errorMessage });
			} finally {
				isDeleting.value = false;
			}
		}
		function isFileTypeAccepted(file) {
			return file.type === "application/pdf";
		}
		function validateFileSizes(files) {
			const maxSizeBytes = agentUploadMaxSizeMb.value * 1024 * 1024;
			for (const file of files) if (file.size > maxSizeBytes) {
				toast.showMessage({
					title: i18n.baseText("chatHub.agent.editor.files.tooLarge", { interpolate: {
						fileName: file.name,
						maxSizeMb: agentUploadMaxSizeMb.value
					} }),
					type: "error"
				});
				return false;
			}
			return true;
		}
		function onFilesDropped(droppedFiles) {
			const acceptedFiles = droppedFiles.filter((file) => isFileTypeAccepted(file));
			if (acceptedFiles.length === 0) return;
			if (!validateFileSizes(acceptedFiles)) return;
			newFiles.value = [...newFiles.value, ...acceptedFiles];
		}
		function handleFileSelect(event) {
			const target = event.target;
			if (!target.files) return;
			const acceptedFiles = Array.from(target.files).filter((file) => isFileTypeAccepted(file));
			if (acceptedFiles.length === 0) {
				target.value = "";
				return;
			}
			if (!validateFileSizes(acceptedFiles)) {
				target.value = "";
				return;
			}
			newFiles.value = [...newFiles.value, ...acceptedFiles];
			target.value = "";
		}
		function handleClickUploadArea() {
			fileInputRef.value?.click();
		}
		function removeFile(row) {
			if (row.isNew) newFiles.value = newFiles.value.filter((_, i) => `new-${i}` !== row.id);
			else {
				removedFileKnowledgeIds.value = [...removedFileKnowledgeIds.value, row.id];
				savedFiles.value = savedFiles.value.filter((f) => f.id !== row.id);
			}
		}
		const posthogStore = usePostHog();
		const telemetry = useTelemetry();
		const isSemanticSearchEnabled = computed(() => posthogStore.isVariantEnabled(CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT.name, CHAT_HUB_SEMANTIC_SEARCH_EXPERIMENT.variant));
		const fileDrop = useFileDrop(true, onFilesDropped, ["application/pdf"]);
		const hasIndexingFiles = computed(() => savedFiles.value.some((f) => f.status === "indexing"));
		const { pause, resume } = useTimeoutPoll(async () => {
			if (!props.data.agentId) return;
			try {
				savedFiles.value = (await fetchAgentApi(useRootStore().restApiContext, props.data.agentId)).files;
			} catch {}
		}, 5e3);
		watch(hasIndexingFiles, (hasIndexing) => {
			if (hasIndexing && props.data.agentId) resume();
			else pause();
		}, { immediate: true });
		watch(documentVisibility, (visibility) => {
			if (visibility === "visible" && !canUploadFiles.value) {
				settingsStore.getModuleSettings();
				credentialsStore.fetchAllCredentials();
			}
		});
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				width: "640px",
				loading: isLoadingAgent.value
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
					_: 1
				}), isEditMode.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					icon: "trash-2",
					class: normalizeClass(_ctx.$style.deleteButton),
					disabled: isDeleting.value,
					loading: isDeleting.value,
					onClick: onDelete
				}, null, 8, [
					"class",
					"disabled",
					"loading"
				])) : createCommentVNode("", true)], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [isSemanticSearchEnabled.value && unref(fileDrop).isDragging.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.dropOverlay)
				}, [unref(fileDrop).isDraggingUnsupported.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.dropOverlay.unsupportedFileType")), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.dropOverlay.addFile")), 1)]),
					_: 1
				}))], 2)) : createCommentVNode("", true), createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.content, { [_ctx.$style.isDraggingFile]: isSemanticSearchEnabled.value && unref(fileDrop).isDragging.value }]),
					onDragenter: _cache[5] || (_cache[5] = ($event) => isSemanticSearchEnabled.value && canUploadFiles.value ? unref(fileDrop).handleDragEnter($event) : void 0),
					onDragleave: _cache[6] || (_cache[6] = ($event) => isSemanticSearchEnabled.value && canUploadFiles.value ? unref(fileDrop).handleDragLeave($event) : void 0),
					onDragover: _cache[7] || (_cache[7] = ($event) => isSemanticSearchEnabled.value && canUploadFiles.value ? unref(fileDrop).handleDragOver($event) : void 0),
					onDrop: _cache[8] || (_cache[8] = ($event) => isSemanticSearchEnabled.value && canUploadFiles.value ? unref(fileDrop).handleDrop($event) : void 0)
				}, [
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-name",
						label: unref(i18n).baseText("chatHub.agent.editor.name.label"),
						required: true
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.agentName) }, [createVNode(unref(N8nIconPicker_default), {
							modelValue: icon.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => icon.value = $event),
							"button-tooltip": unref(i18n).baseText("chatHub.agent.editor.iconPicker.button.tooltip")
						}, null, 8, ["modelValue", "button-tooltip"]), createVNode(unref(Input_default), {
							id: "agent-name",
							ref: "nameInput",
							modelValue: name.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => name.value = $event),
							placeholder: unref(i18n).baseText("chatHub.agent.editor.name.placeholder"),
							maxlength: 128,
							class: normalizeClass(_ctx.$style.agentNameInput)
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class"
						])], 2)]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-description",
						label: unref(i18n).baseText("chatHub.agent.editor.description.label")
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "agent-description",
							modelValue: description.value,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => description.value = $event),
							type: "textarea",
							placeholder: unref(i18n).baseText("chatHub.agent.editor.description.placeholder"),
							maxlength: 512,
							rows: 3,
							class: normalizeClass(_ctx.$style.input)
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class"
						])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-system-prompt",
						label: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.label")
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "agent-system-prompt",
							modelValue: systemPrompt.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => systemPrompt.value = $event),
							type: "textarea",
							placeholder: unref(i18n).baseText("chatHub.agent.editor.systemPrompt.placeholder"),
							rows: 6,
							class: normalizeClass(_ctx.$style.input)
						}, null, 8, [
							"modelValue",
							"placeholder",
							"class"
						])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-suggested-prompts",
						label: unref(i18n).baseText("chatHub.agent.editor.suggestedPrompts.label"),
						"tooltip-text": unref(i18n).baseText("chatHub.agent.editor.suggestedPrompts.tooltip"),
						"show-tooltip": true
					}, {
						default: withCtx(() => [createVNode(SuggestedPromptsEditor_default, {
							modelValue: suggestedPrompts.value,
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => suggestedPrompts.value = $event)
						}, null, 8, ["modelValue"])]),
						_: 1
					}, 8, ["label", "tooltip-text"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.row) }, [createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-model",
						class: normalizeClass(_ctx.$style.input),
						label: unref(i18n).baseText("chatHub.agent.editor.model.label"),
						required: true
					}, {
						default: withCtx(() => [createVNode(ModelSelector_default, {
							"selected-agent": selectedAgent.value,
							"include-custom-agents": false,
							credentials: agentMergedCredentials.value,
							agents: agents.value,
							"is-loading": isLoadingAgents.value,
							class: normalizeClass(_ctx.$style.modelSelector),
							"warn-missing-credentials": "",
							onChange: onModelChange,
							onSelectCredential: onCredentialSelected
						}, null, 8, [
							"selected-agent",
							"credentials",
							"agents",
							"is-loading",
							"class"
						])]),
						_: 1
					}, 8, ["class", "label"]), createVNode(unref(N8nInputLabel_default), {
						"input-name": "agent-tool",
						class: normalizeClass(_ctx.$style.input),
						label: unref(i18n).baseText("chatHub.agent.editor.tools.label"),
						required: false
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(ToolsSelector_default, {
							disabled: !canSelectTools.value,
							"disabled-tooltip": canSelectTools.value ? void 0 : selectedModel.value ? unref(i18n).baseText("chatHub.tools.selector.disabled.tooltip") : unref(i18n).baseText("chatHub.tools.selector.disabled.noModel.tooltip"),
							"checked-tool-ids": toolIds.value,
							onToggle: handleToggleAgentTool
						}, null, 8, [
							"disabled",
							"disabled-tooltip",
							"checked-tool-ids"
						])])]),
						_: 1
					}, 8, ["class", "label"])], 2),
					isSemanticSearchEnabled.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
						key: 0,
						"input-name": "agent-files",
						label: unref(i18n).baseText("chatHub.agent.editor.files.label"),
						required: false
					}, {
						default: withCtx(() => [
							createBaseVNode("input", {
								ref: "fileInput",
								type: "file",
								class: normalizeClass(_ctx.$style.fileInput),
								accept: "application/pdf",
								multiple: "",
								onChange: handleFileSelect
							}, null, 34),
							!canUploadFiles.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
								key: 0,
								theme: "info",
								icon: "info",
								class: normalizeClass(_ctx.$style.vectorStoreCallout)
							}, {
								default: withCtx(() => [createVNode(unref(I18nT), {
									keypath: canConfigureVectorStore.value ? "chatHub.agent.editor.semanticSearch.notReady.canConfigure" : "chatHub.agent.editor.semanticSearch.notReady",
									tag: "span",
									scope: "global"
								}, {
									settingsLink: withCtx(() => [createVNode(_component_RouterLink, {
										to: { name: unref(CHAT_SETTINGS_VIEW) },
										target: "_blank",
										class: normalizeClass(_ctx.$style.settingsLink)
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agent.editor.semanticSearch.settingsLink")), 1)]),
										_: 1
									}, 8, ["to", "class"])]),
									_: 1
								}, 8, ["keypath"])]),
								_: 1
							}, 8, ["class"])) : createCommentVNode("", true),
							allFiles.value.length > 0 ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.fileList)
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(allFiles.value, (item) => {
								return openBlock(), createBlock(AgentEditorModalFileRow_default, {
									key: item.id,
									item,
									"semantic-search-ready": canUploadFiles.value,
									"current-embedding-provider": currentEmbeddingProvider.value,
									onRemove: ($event) => removeFile(item)
								}, null, 8, [
									"item",
									"semantic-search-ready",
									"current-embedding-provider",
									"onRemove"
								]);
							}), 128))], 2)) : createCommentVNode("", true),
							createVNode(unref(N8nButton_default), {
								icon: "plus",
								variant: "subtle",
								class: normalizeClass(_ctx.$style.addFileButton),
								disabled: !canUploadFiles.value,
								onClick: handleClickUploadArea
							}, {
								default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode(" Add file ", -1)])]),
								_: 1
							}, 8, ["class", "disabled"])
						]),
						_: 1
					}, 8, ["label"])) : createCommentVNode("", true)
				], 34)], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: closeDialog
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.tools.editor.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !isValid.value || isSaving.value,
					onClick: onSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(saveButtonLabel.value), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name", "loading"]);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/AgentEditorModal.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_157yx_388";
var deleteButton = "_deleteButton_157yx_396";
var contentWrapper = "_contentWrapper_157yx_400";
var content = "_content_157yx_400";
var vectorStoreCallout = "_vectorStoreCallout_157yx_415";
var settingsLink = "_settingsLink_157yx_419";
var isDraggingFile = "_isDraggingFile_157yx_424";
var dropOverlay = "_dropOverlay_157yx_428";
var input = "_input_157yx_442";
var agentName = "_agentName_157yx_446";
var agentNameInput = "_agentNameInput_157yx_452";
var row = "_row_157yx_456";
var modelSelector = "_modelSelector_157yx_462";
var footer = "_footer_157yx_466";
var fileInput = "_fileInput_157yx_472";
var addFileButton = "_addFileButton_157yx_476";
var fileList = "_fileList_157yx_481";
var credentialPickerRow = "_credentialPickerRow_157yx_487";
var credentialPicker = "_credentialPicker_157yx_487";
var shimmer = "_shimmer_157yx_1";
var spin = "_spin_157yx_1";
var opacityPulse = "_opacityPulse_157yx_1";
var popoverIn = "_popoverIn_157yx_1";
var fadeIn = "_fadeIn_157yx_1";
var collapsibleSlideDown = "_collapsibleSlideDown_157yx_1";
var collapsibleSlideUp = "_collapsibleSlideUp_157yx_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_157yx_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_157yx_1";
var blurSwapIn = "_blurSwapIn_157yx_1";
var blurSwapOut = "_blurSwapOut_157yx_1";
var pulseGlow = "_pulseGlow_157yx_1";
var pulseGlowDelayed = "_pulseGlowDelayed_157yx_1";
var fade = "_fade_157yx_1";
var fadeInUp = "_fadeInUp_157yx_1";
var fadeInDown = "_fadeInDown_157yx_1";
var fadeInLeft = "_fadeInLeft_157yx_1";
var fadeInRight = "_fadeInRight_157yx_1";
var fadeOut = "_fadeOut_157yx_1";
var fadeOutDown = "_fadeOutDown_157yx_1";
var fadeOutUp = "_fadeOutUp_157yx_1";
var fadeOutLeft = "_fadeOutLeft_157yx_1";
var fadeOutRight = "_fadeOutRight_157yx_1";
var ping = "_ping_157yx_1";
var blinkBackground = "_blinkBackground_157yx_1";
var typingBlink = "_typingBlink_157yx_1";
var AgentEditorModal_vue_vue_type_style_index_0_lang_module_default = {
	header,
	deleteButton,
	contentWrapper,
	content,
	vectorStoreCallout,
	settingsLink,
	isDraggingFile,
	dropOverlay,
	input,
	agentName,
	agentNameInput,
	row,
	modelSelector,
	footer,
	fileInput,
	addFileButton,
	fileList,
	credentialPickerRow,
	credentialPicker,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_157yx_1",
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
var AgentEditorModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentEditorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentEditorModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentEditorModal_default as default };
