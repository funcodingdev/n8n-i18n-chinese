import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, p as vShow, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { V as useDebounceFn } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nInlineTextEdit_default } from "./N8nInlineTextEdit-CPP1fNIO.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as ElSwitch } from "./switch-VgJfpBOv.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { G as filterAndSearchNodes, V as useNodeTypesStore, bt as stripToolSuffix, et as isNodePreviewKey, it as removePreviewToken } from "./workflows.store-Bo6ZgF_O.js";
import { A as CHAT_USER_BLOCKED_CHAT_HUB_TOOL_TYPES, di as NodeConnectionTypes, k as ALWAYS_BLOCKED_CHAT_HUB_TOOL_TYPES, oa as v4 } from "./src-C3aqUyDp.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import "./constants-DPRLSskW.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { c as hasRole } from "./permissions-DkZpSVVu.js";
import { t as Modal_default } from "./Modal-BrJJYGMr.js";
import { i as _virtual_node_popularity_data_default } from "./canvas.eventBus-CiFl0H6a.js";
import { t as useInstallNode } from "./useInstallNode-B_EX3buj.js";
import { t as NodeIcon_default } from "./NodeIcon-IZ0wyAnH.js";
import { t as useChatStore } from "./chat.store-DoBcmeo2.js";
import { t as shield_alt_default } from "./shield-alt-DK8armLv.js";
import { t as NodeToolSettingsContent_default } from "./NodeToolSettingsContent-CT3m1KH7.js";
//#region src/features/ai/chatHub/components/ToolListItem.vue?vue&type=script&setup=true&lang.ts
var ToolListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolListItem",
	props: {
		nodeType: {},
		configuredNode: {},
		enabled: { type: Boolean },
		mode: {},
		communityPreview: { type: Boolean },
		installing: { type: Boolean },
		installDisabled: { type: Boolean }
	},
	emits: [
		"toggle",
		"configure",
		"remove",
		"add"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const description = computed(() => {
			if (props.configuredNode && props.configuredNode.name !== props.nodeType.displayName) return props.nodeType.displayName;
			return props.nodeType.description;
		});
		const displayName = computed(() => {
			if (props.configuredNode) return props.configuredNode.name;
			return props.nodeType.displayName;
		});
		const actionLabel = computed(() => props.communityPreview ? i18n.baseText("communityNodeDetails.install") : i18n.baseText("chatHub.toolsManager.add"));
		const actionDisabled = computed(() => props.communityPreview && (props.installing || props.installDisabled));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.item, { [_ctx.$style.configured]: __props.mode === "configured" }]) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconWrapper) }, [createVNode(NodeIcon_default, {
					"node-type": __props.nodeType,
					size: 32
				}, null, 8, ["node-type"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.nameRow) }, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.name),
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(displayName.value), 1)]),
					_: 1
				}, 8, ["class"]), __props.communityPreview ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("communityNodeInfo.approved"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(shield_alt_default), {
						class: normalizeClass(_ctx.$style.verifiedIcon),
						"data-test-id": "chat-tool-verified-badge"
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.description),
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [__props.mode === "configured" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("chatHub.toolsManager.configure") }, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "settings",
							variant: "ghost",
							text: "",
							class: normalizeClass(_ctx.$style.actionButton),
							onClick: _cache[0] || (_cache[0] = ($event) => emit("configure"))
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"]),
					createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("chatHub.toolsManager.remove") }, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "trash-2",
							variant: "ghost",
							text: "",
							class: normalizeClass(_ctx.$style.actionButton),
							onClick: _cache[1] || (_cache[1] = ($event) => emit("remove"))
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"]),
					createVNode(unref(N8nTooltip_default), { content: __props.enabled ? unref(i18n).baseText("chatHub.toolsManager.disableTool") : unref(i18n).baseText("chatHub.toolsManager.enableTool") }, {
						default: withCtx(() => [createVNode(unref(ElSwitch), {
							"model-value": __props.enabled,
							class: normalizeClass(_ctx.$style.toggle),
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => emit("toggle", Boolean($event)))
						}, null, 8, ["model-value", "class"])]),
						_: 1
					}, 8, ["content"])
				], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.communityPreview && __props.installDisabled && !__props.installing ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("communityNodeInfo.contact.admin"),
					placement: "top"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						icon: "plus",
						loading: __props.installing,
						disabled: true,
						"data-test-id": "chat-tool-install-button"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(actionLabel.value), 1)]),
						_: 1
					}, 8, ["loading"])])]),
					_: 1
				}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "subtle",
					size: "small",
					icon: "plus",
					loading: __props.installing,
					disabled: actionDisabled.value,
					"data-test-id": __props.communityPreview ? "chat-tool-install-button" : "chat-tool-add-button",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("add"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(actionLabel.value), 1)]),
					_: 1
				}, 8, [
					"loading",
					"disabled",
					"data-test-id"
				]))], 64))], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ToolListItem.vue?vue&type=style&index=0&lang.module.scss
var item = "_item_qio6m_388";
var configured = "_configured_qio6m_395";
var actionButton = "_actionButton_qio6m_395";
var iconWrapper = "_iconWrapper_qio6m_402";
var content = "_content_qio6m_410";
var nameRow = "_nameRow_qio6m_418";
var verifiedIcon = "_verifiedIcon_qio6m_425";
var name = "_name_qio6m_418";
var description = "_description_qio6m_439";
var actions = "_actions_qio6m_446";
var toggle = "_toggle_qio6m_453";
var shimmer$1 = "_shimmer_qio6m_1";
var spin$1 = "_spin_qio6m_1";
var opacityPulse$1 = "_opacityPulse_qio6m_1";
var popoverIn$1 = "_popoverIn_qio6m_1";
var fadeIn$1 = "_fadeIn_qio6m_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_qio6m_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_qio6m_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_qio6m_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_qio6m_1";
var blurSwapIn$1 = "_blurSwapIn_qio6m_1";
var blurSwapOut$1 = "_blurSwapOut_qio6m_1";
var pulseGlow$1 = "_pulseGlow_qio6m_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_qio6m_1";
var fade$1 = "_fade_qio6m_1";
var fadeInUp$1 = "_fadeInUp_qio6m_1";
var fadeInDown$1 = "_fadeInDown_qio6m_1";
var fadeInLeft$1 = "_fadeInLeft_qio6m_1";
var fadeInRight$1 = "_fadeInRight_qio6m_1";
var fadeOut$1 = "_fadeOut_qio6m_1";
var fadeOutDown$1 = "_fadeOutDown_qio6m_1";
var fadeOutUp$1 = "_fadeOutUp_qio6m_1";
var fadeOutLeft$1 = "_fadeOutLeft_qio6m_1";
var fadeOutRight$1 = "_fadeOutRight_qio6m_1";
var ping$1 = "_ping_qio6m_1";
var blinkBackground$1 = "_blinkBackground_qio6m_1";
var typingBlink$1 = "_typingBlink_qio6m_1";
var ToolListItem_vue_vue_type_style_index_0_lang_module_default = {
	item,
	configured,
	actionButton,
	iconWrapper,
	content,
	nameRow,
	verifiedIcon,
	name,
	description,
	actions,
	toggle,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_qio6m_1",
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
var ToolListItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolListItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ToolsManagerModal.vue?vue&type=script&setup=true&lang.ts
var ToolsManagerModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolsManagerModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const agentId = computed(() => props.data.customAgentId);
		const agentToolIds = computed(() => {
			if (!agentId.value) return null;
			return chatStore.customAgents[agentId.value]?.toolIds ?? [];
		});
		const modalTitle = computed(() => {
			const baseTitle = i18n.baseText("chatHub.toolsManager.title");
			if (!agentId.value) return baseTitle;
			const agentName = chatStore.customAgents[agentId.value]?.name;
			return agentName ? `${baseTitle} (${agentName})` : baseTitle;
		});
		function hasInputs(nodeType) {
			const { inputs } = nodeType;
			if (Array.isArray(inputs)) return inputs.length > 0;
			return true;
		}
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const chatStore = useChatStore();
		const toast = useToast();
		const message = useMessage();
		const usersStore = useUsersStore();
		const { installNode: installCommunityNode } = useInstallNode();
		const isAdminOrOwner = computed(() => usersStore.isAdminOrOwner);
		const nodePopularityMap = new Map(_virtual_node_popularity_data_default.map((node) => [node.id, node.popularity]));
		const searchQuery = ref("");
		const debouncedSearchQuery = ref("");
		const installingToolName = ref(null);
		const setDebouncedSearchQuery = useDebounceFn((value) => {
			debouncedSearchQuery.value = value;
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		watch(searchQuery, (newValue) => {
			setDebouncedSearchQuery(newValue);
		});
		const currentView = ref("list");
		const settingsNode = ref(null);
		const settingsExistingToolNames = ref([]);
		const settingsOnConfirm = ref(null);
		const settingsContentRef = ref(null);
		const settingsNodeName = ref("");
		const settingsIsValid = ref(false);
		const tools = computed(() => chatStore.configuredTools);
		const excludedToolTypes = computed(() => {
			const blocked = [...ALWAYS_BLOCKED_CHAT_HUB_TOOL_TYPES];
			if (hasRole(["global:chatUser"])) blocked.push(...CHAT_USER_BLOCKED_CHAT_HUB_TOOL_TYPES);
			return blocked;
		});
		function resolveToolNodeType(name) {
			return nodeTypesStore.getNodeType(name) ?? nodeTypesStore.communityNodeType(name)?.nodeDescription ?? null;
		}
		function isCommunityPreviewTool(nodeType) {
			if (!isNodePreviewKey(nodeType.name)) return false;
			const baseName = stripToolSuffix(nodeType.name);
			return !!nodeTypesStore.communityNodeType(baseName);
		}
		function communityPackageNameFor(nodeType) {
			const baseName = stripToolSuffix(nodeType.name);
			return nodeTypesStore.communityNodeType(baseName)?.packageName ?? removePreviewToken(nodeType.name.split(".")[0] ?? nodeType.name);
		}
		const availableToolTypes = computed(() => {
			return (nodeTypesStore.visibleNodeTypesByOutputConnectionTypeNames[NodeConnectionTypes.AiTool] ?? []).map((name) => resolveToolNodeType(name)).filter((nodeType) => nodeType !== null && !excludedToolTypes.value.includes(nodeType.name) && !hasInputs(nodeType)).sort((a, b) => {
				const popA = nodePopularityMap.get(a.name) ?? 0;
				return (nodePopularityMap.get(b.name) ?? 0) - popA;
			});
		});
		onMounted(() => {
			nodeTypesStore.fetchCommunityNodePreviews();
		});
		const filteredConfiguredTools = computed(() => {
			if (!debouncedSearchQuery.value) return tools.value;
			const query = debouncedSearchQuery.value.toLowerCase();
			return tools.value.filter((tool) => {
				const def = tool.definition;
				const nodeType = nodeTypesStore.getNodeType(def.type, def.typeVersion);
				const nameMatch = def.name.toLowerCase().includes(query);
				const typeMatch = nodeType?.displayName.toLowerCase().includes(query);
				return nameMatch || typeMatch;
			});
		});
		const filteredAvailableTools = computed(() => {
			const base = !debouncedSearchQuery.value ? availableToolTypes.value : availableToolTypes.value.filter((nodeType) => {
				const query = debouncedSearchQuery.value.toLowerCase();
				const nameMatch = nodeType.displayName.toLowerCase().includes(query);
				const descMatch = nodeType.description?.toLowerCase().includes(query);
				return nameMatch || descMatch;
			});
			if (!debouncedSearchQuery.value) return base;
			const communitySearchHits = filterAndSearchNodes(nodeTypesStore.communityNodesAndActions.mergedNodes, debouncedSearchQuery.value, {
				isAiSubcategory: true,
				aiConnectionType: NodeConnectionTypes.AiTool
			});
			const seen = new Set(base.map((nt) => nt.name));
			const previews = [];
			for (const hit of communitySearchHits) {
				if (hit.type !== "node") continue;
				const resolved = resolveToolNodeType(hit.key) ?? resolveToolNodeType(hit.properties.name);
				if (!resolved || seen.has(resolved.name) || excludedToolTypes.value.includes(resolved.name) || hasInputs(resolved)) continue;
				seen.add(resolved.name);
				previews.push(resolved);
			}
			return [...base, ...previews];
		});
		function getNodeType(tool) {
			return nodeTypesStore.getNodeType(tool.definition.type, tool.definition.typeVersion);
		}
		function openSettings(node, existingNames, onConfirm) {
			settingsNode.value = node;
			settingsExistingToolNames.value = existingNames;
			settingsOnConfirm.value = onConfirm;
			settingsNodeName.value = node.name;
			settingsIsValid.value = false;
			currentView.value = "settings";
		}
		function handleConfigureTool(tool) {
			const otherToolNames = tools.value.filter((t) => t.definition.id !== tool.definition.id).map((t) => t.definition.name);
			openSettings({ ...tool.definition }, otherToolNames, async (configuredNode) => {
				try {
					await chatStore.updateConfiguredTool(tool.definition.id, configuredNode);
				} catch (error) {
					toast.showError(error, i18n.baseText("chatHub.error.updateToolsFailed"));
				}
			});
		}
		async function handleRemoveTool(toolId) {
			if (await message.confirm(i18n.baseText("chatHub.toolsManager.confirmRemove.message"), i18n.baseText("chatHub.toolsManager.confirmRemove.title"), {
				confirmButtonText: i18n.baseText("chatHub.toolsManager.remove"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm") return;
			try {
				await chatStore.removeConfiguredTool(toolId);
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.error.updateToolsFailed"));
			}
		}
		async function handleToggleTool(tool, enabled) {
			try {
				if (agentId.value) await chatStore.toggleCustomAgentTool(agentId.value, tool.definition.id);
				else await chatStore.toggleToolEnabled(tool.definition.id, enabled);
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.error.updateToolsFailed"));
			}
		}
		function openSettingsFor(nodeType) {
			const typeVersion = typeof nodeType.version === "number" ? nodeType.version : nodeType.version.toSorted((a, b) => b - a)?.[0];
			if (!typeVersion) return;
			const newToolId = v4();
			const existingNames = tools.value.map((t) => t.definition.name);
			openSettings({
				type: nodeType.name,
				typeVersion,
				parameters: {},
				id: newToolId,
				name: nodeType.displayName,
				position: [0, 0]
			}, existingNames, async (configuredNode) => {
				try {
					await chatStore.addConfiguredTool(configuredNode);
				} catch (error) {
					toast.showError(error, i18n.baseText("chatHub.error.updateToolsFailed"));
				}
			});
		}
		async function handleAddTool(nodeType) {
			if (isCommunityPreviewTool(nodeType)) {
				const packageName = communityPackageNameFor(nodeType);
				const baseName = stripToolSuffix(nodeType.name);
				installingToolName.value = nodeType.name;
				try {
					if (!(await installCommunityNode({
						type: "verified",
						packageName,
						nodeType: baseName,
						telemetry: {
							source: "chat hub tools manager",
							hasQuickConnect: false
						}
					})).success) return;
					const installedName = removePreviewToken(nodeType.name);
					openSettingsFor(nodeTypesStore.getNodeType(installedName) ?? nodeType);
				} finally {
					installingToolName.value = null;
				}
				return;
			}
			openSettingsFor(nodeType);
		}
		function handleBack() {
			currentView.value = "list";
			settingsNode.value = null;
			settingsExistingToolNames.value = [];
			settingsOnConfirm.value = null;
			settingsNodeName.value = "";
			settingsIsValid.value = false;
		}
		function handleSave() {
			const currentNode = settingsContentRef.value?.node;
			if (!currentNode || !settingsOnConfirm.value) return;
			settingsOnConfirm.value(currentNode);
			handleBack();
		}
		function handleSettingsChangeName(name) {
			settingsContentRef.value?.handleChangeName(name);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				width: "780px",
				"show-close": currentView.value === "list",
				"custom-class": _ctx.$style.modal
			}, {
				header: withCtx(() => [currentView.value === "list" ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					tag: "h2",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(modalTitle.value), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.settingsHeader)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsHeaderLeft) }, [createVNode(unref(N8nIconButton_default), {
					icon: "arrow-left",
					text: "",
					size: "large",
					variant: "ghost",
					class: normalizeClass(_ctx.$style.backButton),
					onClick: handleBack
				}, null, 8, ["class"]), createVNode(unref(N8nInlineTextEdit_default), {
					"model-value": settingsNodeName.value,
					"max-width": 350,
					class: normalizeClass(_ctx.$style.title),
					"onUpdate:modelValue": handleSettingsChangeName
				}, null, 8, ["model-value", "class"])], 2), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					disabled: !settingsIsValid.value,
					onClick: handleSave
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2))]),
				content: withCtx(() => [
					withDirectives(createVNode(unref(Input_default), {
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
						placeholder: unref(i18n).baseText("chatHub.toolsManager.searchPlaceholder"),
						clearable: "",
						class: normalizeClass(_ctx.$style.searchInput)
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						_: 1
					}, 8, [
						"modelValue",
						"placeholder",
						"class"
					]), [[vShow, currentView.value === "list"]]),
					withDirectives(createBaseVNode("div", {
						"data-tools-manager-modal": "",
						class: normalizeClass(_ctx.$style.listWrapper)
					}, [
						filteredConfiguredTools.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.section)
						}, [createVNode(unref(N8nHeading_default), {
							size: "small",
							color: "text-light",
							tag: "h3"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolsManager.configuredTools", { interpolate: { count: tools.value.length } })), 1)]),
							_: 1
						}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredConfiguredTools.value, (tool) => {
							return openBlock(), createBlock(ToolListItem_default, {
								key: tool.definition.id,
								"node-type": getNodeType(tool),
								"configured-node": tool.definition,
								enabled: agentToolIds.value ? agentToolIds.value.includes(tool.definition.id) : tool.enabled,
								mode: "configured",
								onConfigure: ($event) => handleConfigureTool(tool),
								onRemove: ($event) => handleRemoveTool(tool.definition.id),
								onToggle: ($event) => handleToggleTool(tool, $event)
							}, null, 8, [
								"node-type",
								"configured-node",
								"enabled",
								"onConfigure",
								"onRemove",
								"onToggle"
							]);
						}), 128))], 2)], 2)) : createCommentVNode("", true),
						filteredAvailableTools.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.section)
						}, [createVNode(unref(N8nHeading_default), {
							size: "small",
							color: "text-light",
							tag: "h3"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolsManager.availableTools", { interpolate: { count: availableToolTypes.value.length } })), 1)]),
							_: 1
						}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolsList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredAvailableTools.value, (nodeType) => {
							return openBlock(), createBlock(ToolListItem_default, {
								key: nodeType.name,
								"node-type": nodeType,
								"community-preview": isCommunityPreviewTool(nodeType),
								installing: installingToolName.value === nodeType.name,
								"install-disabled": !isAdminOrOwner.value,
								mode: "available",
								onAdd: ($event) => handleAddTool(nodeType)
							}, null, 8, [
								"node-type",
								"community-preview",
								"installing",
								"install-disabled",
								"onAdd"
							]);
						}), 128))], 2)], 2)) : createCommentVNode("", true),
						filteredConfiguredTools.value.length === 0 && filteredAvailableTools.value.length === 0 ? (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.emptyState)
						}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolsManager.noResults")), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true)
					], 2), [[vShow, currentView.value === "list"]]),
					currentView.value === "settings" && settingsNode.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.settingsWrapper)
					}, [createVNode(NodeToolSettingsContent_default, {
						ref_key: "settingsContentRef",
						ref: settingsContentRef,
						"initial-node": settingsNode.value,
						"existing-tool-names": settingsExistingToolNames.value,
						"onUpdate:valid": _cache[1] || (_cache[1] = ($event) => settingsIsValid.value = $event),
						"onUpdate:nodeName": _cache[2] || (_cache[2] = ($event) => settingsNodeName.value = $event)
					}, null, 8, ["initial-node", "existing-tool-names"])], 2)) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, [
				"name",
				"show-close",
				"custom-class"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ToolsManagerModal.vue?vue&type=style&index=0&lang.module.scss
var modal = "_modal_xxcwg_388";
var settingsHeader = "_settingsHeader_xxcwg_392";
var settingsHeaderLeft = "_settingsHeaderLeft_xxcwg_399";
var icon = "_icon_xxcwg_407";
var title = "_title_xxcwg_412";
var listWrapper = "_listWrapper_xxcwg_421";
var settingsWrapper = "_settingsWrapper_xxcwg_432";
var searchInput = "_searchInput_xxcwg_441";
var section = "_section_xxcwg_446";
var toolsList = "_toolsList_xxcwg_452";
var emptyState = "_emptyState_xxcwg_457";
var shimmer = "_shimmer_xxcwg_1";
var spin = "_spin_xxcwg_1";
var opacityPulse = "_opacityPulse_xxcwg_1";
var popoverIn = "_popoverIn_xxcwg_1";
var fadeIn = "_fadeIn_xxcwg_1";
var collapsibleSlideDown = "_collapsibleSlideDown_xxcwg_1";
var collapsibleSlideUp = "_collapsibleSlideUp_xxcwg_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_xxcwg_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_xxcwg_1";
var blurSwapIn = "_blurSwapIn_xxcwg_1";
var blurSwapOut = "_blurSwapOut_xxcwg_1";
var pulseGlow = "_pulseGlow_xxcwg_1";
var pulseGlowDelayed = "_pulseGlowDelayed_xxcwg_1";
var fade = "_fade_xxcwg_1";
var fadeInUp = "_fadeInUp_xxcwg_1";
var fadeInDown = "_fadeInDown_xxcwg_1";
var fadeInLeft = "_fadeInLeft_xxcwg_1";
var fadeInRight = "_fadeInRight_xxcwg_1";
var fadeOut = "_fadeOut_xxcwg_1";
var fadeOutDown = "_fadeOutDown_xxcwg_1";
var fadeOutUp = "_fadeOutUp_xxcwg_1";
var fadeOutLeft = "_fadeOutLeft_xxcwg_1";
var fadeOutRight = "_fadeOutRight_xxcwg_1";
var ping = "_ping_xxcwg_1";
var blinkBackground = "_blinkBackground_xxcwg_1";
var typingBlink = "_typingBlink_xxcwg_1";
var ToolsManagerModal_vue_vue_type_style_index_0_lang_module_default = {
	modal,
	settingsHeader,
	settingsHeaderLeft,
	icon,
	title,
	listWrapper,
	settingsWrapper,
	searchInput,
	section,
	toolsList,
	emptyState,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_xxcwg_1",
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
var ToolsManagerModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolsManagerModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolsManagerModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ToolsManagerModal_default as default };
