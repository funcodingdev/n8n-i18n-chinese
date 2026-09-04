import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, q as onBeforeUnmount, rt as renderList, tt as provide, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { s as codeEditorTheme } from "./RunData-BRcIIW4s.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as FocusScope_default } from "./FocusScope-DAXHH9RF.js";
import { r as DialogHeader_default } from "./DialogTitle-vvfpWO6w.js";
import { t as N8nInlineTextEdit_default } from "./N8nInlineTextEdit-CPP1fNIO.js";
import { t as Switch_default } from "./Switch-BdrS1cje.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { an as EditorView, kn as EditorState, r as javascript, vn as lineNumbers } from "./expressions-D0CrLSIZ.js";
import { V as useNodeTypesStore } from "./workflows.store-qP-dtzSs.js";
import { W as SUPPORTED_WORKFLOW_TOOL_TRIGGERS, it as UNSUPPORTED_AGENT_NODE_TOOL_OPERATIONS, xi as extractFromAICalls } from "./src-B255AdRt.js";
import { t as Dialog_default } from "./Dialog-DrlytcGB.js";
import { t as DialogFooter_default } from "./DialogFooter-AKzGUZKF.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { da as ResourceMapperRefreshEmptySchemaKey, fa as ResourceMapperSchemaAutoRefreshKey } from "./constants-CMdL1Kzl.js";
import { t as require_dateformat } from "./dateformat-DxkxG_VE.js";
import { n as useUIStore, on as CREDENTIAL_EDIT_MODAL_KEY } from "./ui.store-xzfQIfPK.js";
import { t as NodeIcon_default } from "./NodeIcon-BEjbYzbB.js";
import { c as updateToolRefFromNode, l as updateWorkflowToolRef, r as nodeToMcpServer, s as toolRefToNode } from "./useMcpServerAdapter-D6It4Jdv.js";
import { t as NodeToolSettingsContent_default } from "./NodeToolSettingsContent-Cd0Fs3UC.js";
import { r as useAgentToolCatalog } from "./useAgentToolCatalog-5dMCFlhs.js";
//#region src/features/agents/components/AgentToolConfigApprovalSetting.vue?vue&type=script&setup=true&lang.ts
var AgentToolConfigApprovalSetting_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigApprovalSetting",
	props: { modelValue: { type: Boolean } },
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.approvalRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalText) }, [createVNode(unref(N8nText_default), {
				size: "small",
				bold: true
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.approval.label")), 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.approval.hint")), 1)]),
				_: 1
			})], 2), createVNode(unref(Switch_default), {
				"model-value": __props.modelValue,
				"data-test-id": "agent-tool-approval-toggle",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event))
			}, null, 8, ["model-value"])], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigApprovalSetting.vue?vue&type=style&index=0&lang.module.scss
var approvalRow$1 = "_approvalRow_1ycc9_388";
var approvalText$1 = "_approvalText_1ycc9_396";
var shimmer$5 = "_shimmer_1ycc9_1";
var spin$5 = "_spin_1ycc9_1";
var opacityPulse$5 = "_opacityPulse_1ycc9_1";
var popoverIn$5 = "_popoverIn_1ycc9_1";
var fadeIn$5 = "_fadeIn_1ycc9_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_1ycc9_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_1ycc9_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_1ycc9_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_1ycc9_1";
var blurSwapIn$5 = "_blurSwapIn_1ycc9_1";
var blurSwapOut$5 = "_blurSwapOut_1ycc9_1";
var pulseGlow$5 = "_pulseGlow_1ycc9_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_1ycc9_1";
var fade$5 = "_fade_1ycc9_1";
var fadeInUp$5 = "_fadeInUp_1ycc9_1";
var fadeInDown$5 = "_fadeInDown_1ycc9_1";
var fadeInLeft$5 = "_fadeInLeft_1ycc9_1";
var fadeInRight$5 = "_fadeInRight_1ycc9_1";
var fadeOut$5 = "_fadeOut_1ycc9_1";
var fadeOutDown$5 = "_fadeOutDown_1ycc9_1";
var fadeOutUp$5 = "_fadeOutUp_1ycc9_1";
var fadeOutLeft$5 = "_fadeOutLeft_1ycc9_1";
var fadeOutRight$5 = "_fadeOutRight_1ycc9_1";
var ping$5 = "_ping_1ycc9_1";
var blinkBackground$5 = "_blinkBackground_1ycc9_1";
var typingBlink$5 = "_typingBlink_1ycc9_1";
var AgentToolConfigApprovalSetting_vue_vue_type_style_index_0_lang_module_default = {
	approvalRow: approvalRow$1,
	approvalText: approvalText$1,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_1ycc9_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInUp: fadeInUp$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var AgentToolConfigApprovalSetting_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigApprovalSetting_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigApprovalSetting_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentCustomToolViewer.vue?vue&type=script&setup=true&lang.ts
var AgentCustomToolViewer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCustomToolViewer",
	props: { code: {} },
	setup(__props) {
		/**
		* Read-only TypeScript viewer for a custom tool's compiled source.
		* Shown in the editor column when the tree selects a `type: 'custom'` tool.
		*/
		const props = __props;
		const container = ref();
		let view = null;
		function createEditor(doc) {
			if (!container.value) return;
			view = new EditorView({
				state: EditorState.create({
					doc,
					extensions: [
						javascript({ typescript: true }),
						lineNumbers(),
						EditorView.lineWrapping,
						EditorState.readOnly.of(true),
						EditorView.editable.of(false),
						codeEditorTheme({
							isReadOnly: true,
							maxHeight: "100%"
						})
					]
				}),
				parent: container.value
			});
		}
		onMounted(() => createEditor(props.code ?? ""));
		onBeforeUnmount(() => {
			view?.destroy();
			view = null;
		});
		watch(() => props.code, (next) => {
			if (!view) return;
			const nextDoc = next ?? "";
			if (view.state.doc.toString() === nextDoc) return;
			view.dispatch({ changes: {
				from: 0,
				to: view.state.doc.length,
				insert: nextDoc
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "agent-custom-tool-viewer"
			}, [createBaseVNode("div", {
				ref_key: "container",
				ref: container,
				class: normalizeClass(_ctx.$style.editor)
			}, null, 2)], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentCustomToolViewer.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_15aoo_388";
var editor = "_editor_15aoo_395";
var shimmer$4 = "_shimmer_15aoo_1";
var spin$4 = "_spin_15aoo_1";
var opacityPulse$4 = "_opacityPulse_15aoo_1";
var popoverIn$4 = "_popoverIn_15aoo_1";
var fadeIn$4 = "_fadeIn_15aoo_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_15aoo_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_15aoo_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_15aoo_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_15aoo_1";
var blurSwapIn$4 = "_blurSwapIn_15aoo_1";
var blurSwapOut$4 = "_blurSwapOut_15aoo_1";
var pulseGlow$4 = "_pulseGlow_15aoo_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_15aoo_1";
var fade$4 = "_fade_15aoo_1";
var fadeInUp$4 = "_fadeInUp_15aoo_1";
var fadeInDown$4 = "_fadeInDown_15aoo_1";
var fadeInLeft$4 = "_fadeInLeft_15aoo_1";
var fadeInRight$4 = "_fadeInRight_15aoo_1";
var fadeOut$4 = "_fadeOut_15aoo_1";
var fadeOutDown$4 = "_fadeOutDown_15aoo_1";
var fadeOutUp$4 = "_fadeOutUp_15aoo_1";
var fadeOutLeft$4 = "_fadeOutLeft_15aoo_1";
var fadeOutRight$4 = "_fadeOutRight_15aoo_1";
var ping$4 = "_ping_15aoo_1";
var blinkBackground$4 = "_blinkBackground_15aoo_1";
var typingBlink$4 = "_typingBlink_15aoo_1";
var AgentCustomToolViewer_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	editor,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_15aoo_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var AgentCustomToolViewer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCustomToolViewer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCustomToolViewer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolConfigCustomContent.vue
var AgentToolConfigCustomContent_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigCustomContent",
	props: { code: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentCustomToolViewer_default, { code: __props.code }, null, 8, ["code"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigMcpApprovalSetting.vue?vue&type=script&setup=true&lang.ts
var AgentToolConfigMcpApprovalSetting_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigMcpApprovalSetting",
	props: {
		modelValue: {},
		node: {},
		projectId: {}
	},
	emits: ["update:modelValue", "update:valid"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const approvalMode = ref("disabled");
		const selectedTools = ref([]);
		const tools = ref([]);
		const isLoadingTools = ref(false);
		const loadingError = ref(null);
		const modeOptions = computed(() => [
			{
				label: i18n.baseText("agents.toolConfig.mcpApproval.disabled"),
				value: "disabled"
			},
			{
				label: i18n.baseText("agents.toolConfig.mcpApproval.askAll"),
				value: "global"
			},
			{
				label: i18n.baseText("agents.toolConfig.mcpApproval.askSelected"),
				value: "selected"
			}
		]);
		const exposedToolNames = computed(() => {
			const names = tools.value.map((tool) => String(tool.value));
			const includeMode = props.node.parameters.include;
			const includeTools = toStringArray(props.node.parameters.includeTools);
			const excludeTools = new Set(toStringArray(props.node.parameters.excludeTools));
			if (includeMode === "selected" && includeTools.length > 0) {
				const allowedTools = new Set(includeTools);
				return names.filter((name) => allowedTools.has(name));
			}
			if (includeMode === "except") return names.filter((name) => !excludeTools.has(name));
			return names;
		});
		const exposedToolOptions = computed(() => {
			const exposed = new Set(exposedToolNames.value);
			return tools.value.filter((tool) => exposed.has(String(tool.value))).map((tool) => ({
				label: tool.name,
				value: String(tool.value)
			}));
		});
		const isValid = computed(() => approvalMode.value !== "selected" || selectedTools.value.length > 0);
		watch(() => props.modelValue, (approval) => {
			if (!approval) {
				approvalMode.value = "disabled";
				selectedTools.value = [];
				return;
			}
			approvalMode.value = approval.mode;
			selectedTools.value = approval.mode === "selected" ? approval.tools : [];
		}, { immediate: true });
		watch(isValid, (valid) => emit("update:valid", valid), { immediate: true });
		watch(exposedToolNames, (names) => {
			if (approvalMode.value !== "selected" || names.length === 0) return;
			const exposed = new Set(names);
			const prunedTools = selectedTools.value.filter((tool) => exposed.has(tool));
			if (prunedTools.length !== selectedTools.value.length) {
				selectedTools.value = prunedTools;
				emitApproval();
			}
		});
		onMounted(() => {
			if (props.node.parameters.endpointUrl || props.node.parameters.sseEndpoint) refreshTools();
		});
		function toStringArray(value) {
			return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
		}
		function toApprovalMode(value) {
			return value === "global" || value === "selected" ? value : "disabled";
		}
		function emitApproval() {
			if (approvalMode.value === "global") {
				emit("update:modelValue", { mode: "global" });
				return;
			}
			if (approvalMode.value === "selected") {
				emit("update:modelValue", {
					mode: "selected",
					tools: selectedTools.value
				});
				return;
			}
			emit("update:modelValue", void 0);
		}
		function handleModeUpdate(value) {
			approvalMode.value = toApprovalMode(value);
			emitApproval();
			if (approvalMode.value === "selected" && tools.value.length === 0 && !isLoadingTools.value) refreshTools();
		}
		function handleSelectedToolsUpdate(value) {
			selectedTools.value = toStringArray(value);
			emitApproval();
		}
		async function refreshTools() {
			isLoadingTools.value = true;
			loadingError.value = null;
			try {
				tools.value = await nodeTypesStore.getNodeParameterOptions({
					nodeTypeAndVersion: {
						name: props.node.type,
						version: props.node.typeVersion
					},
					path: "parameters.includeTools",
					methodName: "getTools",
					currentNodeParameters: props.node.parameters,
					credentials: props.node.credentials,
					projectId: props.projectId
				});
			} catch (error) {
				loadingError.value = error instanceof Error ? error.message : String(error);
			} finally {
				isLoadingTools.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.approvalRow) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalText) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.mcpApproval.label")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.mcpApproval.hint")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.controls) }, [createVNode(unref(N8nSelect_default), {
					"model-value": approvalMode.value,
					size: "small",
					"data-test-id": "agent-mcp-approval-mode",
					class: normalizeClass(_ctx.$style.modeSelect),
					"onUpdate:modelValue": handleModeUpdate
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(modeOptions.value, (option) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: option.value,
							value: option.value,
							label: option.label
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, ["model-value", "class"]), approvalMode.value === "selected" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("agents.toolConfig.mcpApproval.refresh.hint")
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "small",
						"icon-only": "",
						loading: isLoadingTools.value,
						"aria-label": unref(i18n).baseText("agents.toolConfig.mcpApproval.refresh"),
						"data-test-id": "agent-mcp-approval-refresh",
						onClick: refreshTools
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "refresh-cw",
							size: 14
						})]),
						_: 1
					}, 8, ["loading", "aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2),
				approvalMode.value === "selected" ? (openBlock(), createBlock(unref(N8nSelect_default), {
					key: 0,
					"model-value": selectedTools.value,
					multiple: "",
					filterable: "",
					size: "small",
					loading: isLoadingTools.value,
					placeholder: unref(i18n).baseText("agents.toolConfig.mcpApproval.tools.placeholder"),
					"data-test-id": "agent-mcp-approval-tools",
					"onUpdate:modelValue": handleSelectedToolsUpdate
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(exposedToolOptions.value, (tool) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: tool.value,
							value: tool.value,
							label: tool.label
						}, null, 8, ["value", "label"]);
					}), 128))]),
					_: 1
				}, 8, [
					"model-value",
					"loading",
					"placeholder"
				])) : createCommentVNode("", true),
				loadingError.value && approvalMode.value === "selected" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "xsmall",
					color: "danger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.mcpApproval.loadError")), 1)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigMcpApprovalSetting.vue?vue&type=style&index=0&lang.module.scss
var approvalRow = "_approvalRow_7759p_388";
var approvalText = "_approvalText_7759p_396";
var controls = "_controls_7759p_403";
var modeSelect = "_modeSelect_7759p_409";
var shimmer$3 = "_shimmer_7759p_1";
var spin$3 = "_spin_7759p_1";
var opacityPulse$3 = "_opacityPulse_7759p_1";
var popoverIn$3 = "_popoverIn_7759p_1";
var fadeIn$3 = "_fadeIn_7759p_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_7759p_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_7759p_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_7759p_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_7759p_1";
var blurSwapIn$3 = "_blurSwapIn_7759p_1";
var blurSwapOut$3 = "_blurSwapOut_7759p_1";
var pulseGlow$3 = "_pulseGlow_7759p_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_7759p_1";
var fade$3 = "_fade_7759p_1";
var fadeInUp$3 = "_fadeInUp_7759p_1";
var fadeInDown$3 = "_fadeInDown_7759p_1";
var fadeInLeft$3 = "_fadeInLeft_7759p_1";
var fadeInRight$3 = "_fadeInRight_7759p_1";
var fadeOut$3 = "_fadeOut_7759p_1";
var fadeOutDown$3 = "_fadeOutDown_7759p_1";
var fadeOutUp$3 = "_fadeOutUp_7759p_1";
var fadeOutLeft$3 = "_fadeOutLeft_7759p_1";
var fadeOutRight$3 = "_fadeOutRight_7759p_1";
var ping$3 = "_ping_7759p_1";
var blinkBackground$3 = "_blinkBackground_7759p_1";
var typingBlink$3 = "_typingBlink_7759p_1";
var AgentToolConfigMcpApprovalSetting_vue_vue_type_style_index_0_lang_module_default = {
	approvalRow,
	approvalText,
	controls,
	modeSelect,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_7759p_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var AgentToolConfigMcpApprovalSetting_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigMcpApprovalSetting_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigMcpApprovalSetting_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolConfigModalHeader.vue?vue&type=script&setup=true&lang.ts
var AgentToolConfigModalHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigModalHeader",
	props: {
		kind: {},
		title: {},
		nodeTypeDescription: { default: null },
		editable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["update:title"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [(__props.kind === "node" || __props.kind === "mcp") && __props.nodeTypeDescription ? (openBlock(), createBlock(NodeIcon_default, {
				key: 0,
				"node-type": __props.nodeTypeDescription,
				size: 24,
				circle: true,
				class: normalizeClass(_ctx.$style.icon)
			}, null, 8, ["node-type", "class"])) : __props.kind === "workflow" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "workflow",
				size: 20,
				class: normalizeClass(_ctx.$style.workflowHeaderIcon)
			}, null, 8, ["class"])) : __props.kind === "custom" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 2,
				icon: "code",
				size: 20,
				class: normalizeClass(_ctx.$style.customHeaderIcon)
			}, null, 8, ["class"])) : createCommentVNode("", true), __props.editable && __props.kind !== "custom" ? (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
				key: 3,
				"model-value": __props.title,
				"max-width": 400,
				class: normalizeClass(_ctx.$style.title),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:title", $event))
			}, null, 8, ["model-value", "class"])) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 4,
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			}, 8, ["class"]))], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigModalHeader.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_djrdz_388";
var icon = "_icon_djrdz_395";
var workflowHeaderIcon = "_workflowHeaderIcon_djrdz_400";
var customHeaderIcon = "_customHeaderIcon_djrdz_406";
var title = "_title_djrdz_412";
var shimmer$2 = "_shimmer_djrdz_1";
var spin$2 = "_spin_djrdz_1";
var opacityPulse$2 = "_opacityPulse_djrdz_1";
var popoverIn$2 = "_popoverIn_djrdz_1";
var fadeIn$2 = "_fadeIn_djrdz_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_djrdz_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_djrdz_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_djrdz_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_djrdz_1";
var blurSwapIn$2 = "_blurSwapIn_djrdz_1";
var blurSwapOut$2 = "_blurSwapOut_djrdz_1";
var pulseGlow$2 = "_pulseGlow_djrdz_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_djrdz_1";
var fade$2 = "_fade_djrdz_1";
var fadeInUp$2 = "_fadeInUp_djrdz_1";
var fadeInDown$2 = "_fadeInDown_djrdz_1";
var fadeInLeft$2 = "_fadeInLeft_djrdz_1";
var fadeInRight$2 = "_fadeInRight_djrdz_1";
var fadeOut$2 = "_fadeOut_djrdz_1";
var fadeOutDown$2 = "_fadeOutDown_djrdz_1";
var fadeOutUp$2 = "_fadeOutUp_djrdz_1";
var fadeOutLeft$2 = "_fadeOutLeft_djrdz_1";
var fadeOutRight$2 = "_fadeOutRight_djrdz_1";
var ping$2 = "_ping_djrdz_1";
var blinkBackground$2 = "_blinkBackground_djrdz_1";
var typingBlink$2 = "_typingBlink_djrdz_1";
var AgentToolConfigModalHeader_vue_vue_type_style_index_0_lang_module_default = {
	header,
	icon,
	workflowHeaderIcon,
	customHeaderIcon,
	title,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_djrdz_1",
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
var AgentToolConfigModalHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigModalHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigModalHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolConfigNodeContent.vue
var AgentToolConfigNodeContent_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigNodeContent",
	props: {
		initialNode: {},
		existingToolNames: {},
		projectId: {},
		contentTestId: {},
		parameterIssues: {},
		fromAiDisabledParameters: {}
	},
	emits: [
		"update:valid",
		"update:node-name",
		"update:node"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const contentRef = ref(null);
		provide(ResourceMapperSchemaAutoRefreshKey, false);
		provide(ResourceMapperRefreshEmptySchemaKey, true);
		function handleChangeName(name) {
			contentRef.value?.handleChangeName(name);
		}
		function getNode() {
			return contentRef.value?.node ?? null;
		}
		function getNodeTypeDescription() {
			return contentRef.value?.nodeTypeDescription ?? null;
		}
		__expose({
			getNode,
			getNodeTypeDescription,
			handleChangeName
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(NodeToolSettingsContent_default, {
				ref_key: "contentRef",
				ref: contentRef,
				"initial-node": props.initialNode,
				"existing-tool-names": props.existingToolNames,
				"project-id": props.projectId,
				"hidden-operations": unref(UNSUPPORTED_AGENT_NODE_TOOL_OPERATIONS),
				"parameter-issues": props.parameterIssues,
				"from-ai-disabled-parameters": props.fromAiDisabledParameters,
				"sync-node-to-ndv": true,
				"data-test-id": props.contentTestId,
				"onUpdate:valid": _cache[0] || (_cache[0] = ($event) => emit("update:valid", $event)),
				"onUpdate:nodeName": _cache[1] || (_cache[1] = ($event) => emit("update:node-name", $event)),
				"onUpdate:node": _cache[2] || (_cache[2] = ($event) => emit("update:node", $event))
			}, null, 8, [
				"initial-node",
				"existing-tool-names",
				"project-id",
				"hidden-operations",
				"parameter-issues",
				"from-ai-disabled-parameters",
				"data-test-id"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/utils/workflowToolInputFields.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var SUPPORTED_TRIGGER_TYPES = new Set(SUPPORTED_WORKFLOW_TOOL_TRIGGERS);
/**
* Mirror of the backend `detectTriggerNode` rule: the first node in workflow
* order whose type is in `SUPPORTED_WORKFLOW_TOOL_TRIGGERS`. Keeping this in
* sync prevents the UI from offering bindings for a trigger the runtime
* ignores (e.g. an Execute Workflow Trigger placed after a Chat Trigger).
*/
function detectWorkflowToolTrigger(workflow) {
	if (!workflow) return void 0;
	return (workflow.nodes ?? []).find((node) => SUPPORTED_TRIGGER_TYPES.has(node.type));
}
/**
* Read declared Execute Workflow Trigger input fields from a project workflow.
* Returns an empty list unless the runtime-selected trigger is the Execute
* Workflow Trigger and it is not in passthrough mode.
*/
function listWorkflowToolInputFields(workflow) {
	if (!workflow) return [];
	const trigger = detectWorkflowToolTrigger(workflow);
	if (!trigger || trigger.type !== "n8n-nodes-base.executeWorkflowTrigger") return [];
	const params = trigger.parameters ?? {};
	const inputSource = params.inputSource ?? "passthrough";
	if (inputSource === "passthrough") return [];
	if (inputSource === "jsonExample") {
		const jsonExample = params.jsonExample;
		if (!jsonExample) return [];
		let parsed;
		try {
			parsed = JSON.parse(jsonExample);
		} catch {
			return [];
		}
		if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return [];
		return Object.entries(parsed).map(([name, value]) => ({
			name,
			type: value === null ? "any" : Array.isArray(value) ? "array" : typeof value
		}));
	}
	return (params.workflowInputs?.values ?? []).filter((field) => typeof field.name === "string" && field.name.length > 0);
}
/** Format a stored fixed binding for the text input. */
function formatWorkflowToolFixedValue(value) {
	if (value === null || value === void 0) return "";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean") return String(value);
	try {
		return JSON.stringify(value);
	} catch {
		return String(value);
	}
}
/**
* Type guard for a recursive JSON value. Used to safely narrow `JSON.parse`
* output before storing it as a fixed binding value typed `JsonValue`.
*/
function isJsonValue(value) {
	if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") return true;
	if (Array.isArray(value)) return value.every(isJsonValue);
	if (typeof value === "object") return Object.values(value).every(isJsonValue);
	return false;
}
/**
* Convert a typed text-input value into the Execute Workflow Trigger field type.
* Incomplete JSON / numbers stay as the raw string so the user can keep typing.
*/
function parseWorkflowToolFixedValue(raw, type) {
	if (type === "string" || type === void 0) return raw;
	const trimmed = raw.trim();
	if (trimmed === "") return null;
	switch (type) {
		case "number": {
			const parsed = Number(trimmed);
			return Number.isFinite(parsed) ? parsed : raw;
		}
		case "boolean": {
			const lower = trimmed.toLowerCase();
			if (lower === "true") return true;
			if (lower === "false") return false;
			return raw;
		}
		case "array":
		case "object":
			try {
				const parsed = JSON.parse(trimmed);
				if (!isJsonValue(parsed)) return raw;
				if (type === "array" && Array.isArray(parsed)) return parsed;
				if (type === "object" && typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)) return parsed;
			} catch {}
			return raw;
		case "any":
			try {
				const parsed = JSON.parse(trimmed);
				if (isJsonValue(parsed)) return parsed;
			} catch {}
			return raw;
		default: return raw;
	}
}
//#endregion
//#region src/features/agents/components/WorkflowToolConfigContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var WorkflowToolConfigContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowToolConfigContent",
	props: {
		initialRef: {},
		projectId: {}
	},
	emits: ["update:valid", "update:node-name"],
	setup(__props, { expose: __expose, emit: __emit }) {
		/**
		* Configure a workflow-type tool on an agent.
		*
		* Workflow tools have a very different shape from node tools — no node
		* parameters, no credentials — so we render a small dedicated form instead
		* of reusing `NodeToolSettingsContent`. The LLM-facing fields are:
		*   - workflowId (the target workflow's stable lookup key)
		*   - workflow (the target workflow's display name and legacy lookup key)
		*   - name (edited in the modal header's inline-text widget)
		*   - description (what the LLM reads to understand when to use the tool)
		*   - allOutputs (`true` returns every node output; `false` = last node only)
		*   - inputs (optional AI vs fixed bindings for Execute Workflow Trigger fields)
		*
		* The underlying workflow's runtime input schema is inferred by
		* `WorkflowToolFactory.inferInputSchema` at invocation time; this form only
		* lets the user pin fixed values so the LLM is not asked for them.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const { availableWorkflows, projectWorkflows, loadWorkflows } = useAgentToolCatalog();
		const name = ref(props.initialRef.name ?? props.initialRef.workflow ?? "");
		const description = ref(props.initialRef.description ?? "");
		const allOutputs = ref(props.initialRef.allOutputs ?? false);
		const workflow = ref(props.initialRef.workflow ?? "");
		const workflowId = ref(props.initialRef.workflowId);
		const inputs = ref({ ...props.initialRef.inputs ?? {} });
		const isLoadingWorkflows = ref(true);
		const mode = ref("list");
		const enteredId = ref("");
		const isIdUnresolvable = ref(false);
		onMounted(async () => {
			await loadWorkflows(props.projectId);
			isLoadingWorkflows.value = false;
		});
		watch(() => props.initialRef, (updated) => {
			name.value = updated.name ?? updated.workflow ?? "";
			description.value = updated.description ?? "";
			allOutputs.value = updated.allOutputs ?? false;
			workflow.value = updated.workflow ?? "";
			workflowId.value = updated.workflowId;
			inputs.value = { ...updated.inputs ?? {} };
			mode.value = "list";
			enteredId.value = "";
			isIdUnresolvable.value = false;
		});
		watch([
			name,
			description,
			workflow
		], ([nameValue, descriptionValue, workflowValue]) => {
			emit("update:valid", nameValue.trim().length > 0 && descriptionValue.trim().length > 0 && workflowValue.trim().length > 0);
			emit("update:node-name", nameValue);
		}, { immediate: true });
		function matchesReference(candidate) {
			return workflowId.value !== void 0 ? candidate.id === workflowId.value : candidate.name === workflow.value;
		}
		const matchingProjectWorkflows = computed(() => projectWorkflows.value.filter(matchesReference));
		const matchingAvailableWorkflows = computed(() => availableWorkflows.value.filter(matchesReference));
		/** Resolve an exact id, or a unique legacy name. */
		const targetWorkflow = computed(() => {
			if (workflowId.value !== void 0) return matchingProjectWorkflows.value[0];
			return matchingProjectWorkflows.value.length === 1 ? matchingProjectWorkflows.value[0] : void 0;
		});
		/** Target is gone from the project entirely — deleted, moved, or inaccessible. */
		const isMissing = computed(() => !isLoadingWorkflows.value && workflow.value.length > 0 && matchingProjectWorkflows.value.length === 0);
		/** Target still exists but is archived or holds a node that can't run as a tool. */
		const isUnusable = computed(() => !isLoadingWorkflows.value && !isMissing.value && workflow.value.length > 0 && matchingAvailableWorkflows.value.length === 0);
		/** Only legacy name-based refs can be ambiguous. */
		const isAmbiguous = computed(() => workflowId.value === void 0 && matchingProjectWorkflows.value.length > 1);
		/**
		* Options are keyed by id so same-named workflows remain individually
		* selectable.
		*/
		const workflowOptions = computed(() => [...availableWorkflows.value].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).map((candidate) => ({
			id: candidate.id,
			name: candidate.name,
			meta: [(0, import_dateformat.default)(candidate.updatedAt, "d mmm yyyy, HH:MM"), candidate.description].filter(Boolean).join(" · ")
		})));
		const targetWorkflowId = computed(() => targetWorkflow.value?.id ?? workflowId.value);
		/** Falls back to the raw stored name so an unresolved target still displays. */
		const selectedOptionId = computed(() => targetWorkflowId.value ?? workflowId.value ?? workflow.value);
		const declaredInputFields = computed(() => listWorkflowToolInputFields(targetWorkflow.value));
		function fieldBinding(fieldName) {
			return inputs.value[fieldName] ?? { mode: "ai" };
		}
		function fieldMode(fieldName) {
			return fieldBinding(fieldName).mode;
		}
		function fieldType(fieldName) {
			return declaredInputFields.value.find((field) => field.name === fieldName)?.type;
		}
		function fieldFixedValue(fieldName) {
			const binding = fieldBinding(fieldName);
			if (binding.mode !== "fixed") return "";
			return formatWorkflowToolFixedValue(binding.value);
		}
		const fieldInputText = ref({});
		function fieldInputDisplay(fieldName) {
			return fieldInputText.value[fieldName] ?? fieldFixedValue(fieldName);
		}
		function handleFieldInput(fieldName, value) {
			fieldInputText.value = {
				...fieldInputText.value,
				[fieldName]: String(value)
			};
		}
		function commitFieldFixedValue(fieldName) {
			const raw = fieldInputText.value[fieldName];
			if (raw === void 0) return;
			setFieldFixedValue(fieldName, raw);
			const next = { ...fieldInputText.value };
			delete next[fieldName];
			fieldInputText.value = next;
		}
		function setFieldMode(fieldName, nextMode) {
			if (nextMode !== "ai" && nextMode !== "fixed") return;
			const nextText = { ...fieldInputText.value };
			delete nextText[fieldName];
			fieldInputText.value = nextText;
			if (nextMode === "ai") {
				const next = { ...inputs.value };
				delete next[fieldName];
				inputs.value = next;
				return;
			}
			setFieldFixedValue(fieldName, fieldFixedValue(fieldName));
		}
		function setFieldFixedValue(fieldName, value) {
			inputs.value = {
				...inputs.value,
				[fieldName]: {
					mode: "fixed",
					value: parseWorkflowToolFixedValue(String(value), fieldType(fieldName))
				}
			};
		}
		function handleChangeName(newName) {
			name.value = newName;
		}
		function applyTarget(next) {
			if (next.id === workflowId.value || workflowId.value === void 0 && next.name === workflow.value) {
				workflowId.value = next.id;
				return;
			}
			if (name.value === workflow.value) name.value = next.name;
			workflowId.value = next.id;
			workflow.value = next.name;
			description.value = "";
			inputs.value = {};
		}
		function handleSelectWorkflow(optionId) {
			const selected = workflowOptions.value.find((option) => option.id === optionId);
			if (selected) applyTarget(selected);
		}
		function openTargetWorkflow() {
			if (!targetWorkflowId.value) return;
			const { href } = router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: targetWorkflowId.value }
			});
			window.open(href, "_blank");
		}
		function handleModeSwitch(next) {
			mode.value = next;
			isIdUnresolvable.value = false;
			enteredId.value = targetWorkflowId.value ?? "";
		}
		/** Only IDs offered in list mode can be used as workflow tools here. */
		function handleEnterWorkflowId(id) {
			const trimmed = id.trim();
			if (!trimmed) return;
			const known = availableWorkflows.value.find((candidate) => candidate.id === trimmed);
			isIdUnresolvable.value = !known;
			if (known) applyTarget(known);
		}
		function getWorkflow() {
			return targetWorkflow.value?.name ?? workflow.value;
		}
		function getWorkflowId() {
			return targetWorkflowId.value;
		}
		function getInputs() {
			for (const fieldName of Object.keys(fieldInputText.value)) commitFieldFixedValue(fieldName);
			if (Object.keys(inputs.value).length === 0) return void 0;
			const allowed = new Set(declaredInputFields.value.map((field) => field.name));
			const pruned = {};
			for (const [key, binding] of Object.entries(inputs.value)) if (allowed.has(key)) pruned[key] = binding;
			return Object.keys(pruned).length > 0 ? pruned : void 0;
		}
		__expose({
			name,
			description,
			allOutputs,
			getWorkflow,
			getWorkflowId,
			getInputs,
			handleChangeName,
			nodeTypeDescription: null
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
					createBaseVNode("label", {
						class: normalizeClass(_ctx.$style.label),
						for: "workflow-tool-description"
					}, [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.description")) + " ", 1), createVNode(unref(N8nText_default), {
						color: "primary",
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("*", -1)])]),
						_: 1
					})], 2),
					createVNode(unref(Input_default), {
						id: "workflow-tool-description",
						modelValue: description.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => description.value = $event),
						type: "textarea",
						rows: 4,
						placeholder: unref(i18n).baseText("agents.toolConfig.workflow.description.placeholder"),
						"data-test-id": "agent-workflow-tool-description"
					}, null, 8, ["modelValue", "placeholder"]),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.description.hint")), 1)]),
						_: 1
					})
				], 2),
				createVNode(unref(N8nCallout_default), {
					theme: "warning",
					"data-test-id": "agent-workflow-tool-target-notice"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target.notice")), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.field) }, [
					createBaseVNode("label", {
						class: normalizeClass(_ctx.$style.label),
						for: "workflow-tool-target"
					}, [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target")) + " ", 1), createVNode(unref(N8nText_default), {
						color: "primary",
						size: "small",
						bold: ""
					}, {
						default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("*", -1)])]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.targetRow) }, [
						createVNode(unref(N8nSelect_default), {
							"model-value": mode.value,
							class: normalizeClass(_ctx.$style.modeSelector),
							"data-test-id": "agent-workflow-tool-target-mode",
							"onUpdate:modelValue": handleModeSwitch
						}, {
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "list",
								label: unref(i18n).baseText("resourceLocator.mode.list")
							}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
								value: "id",
								label: unref(i18n).baseText("resourceLocator.mode.id")
							}, null, 8, ["label"])]),
							_: 1
						}, 8, ["model-value", "class"]),
						mode.value === "list" ? (openBlock(), createBlock(unref(N8nSelect_default), {
							key: 0,
							id: "workflow-tool-target",
							"model-value": selectedOptionId.value,
							class: normalizeClass(_ctx.$style.targetInput),
							filterable: "",
							loading: isLoadingWorkflows.value,
							placeholder: unref(i18n).baseText("agents.toolConfig.workflow.target.placeholder"),
							"popper-class": _ctx.$style.popper,
							"data-test-id": "agent-workflow-tool-target",
							"onUpdate:modelValue": handleSelectWorkflow
						}, {
							default: withCtx(() => [isMissing.value || isUnusable.value || isAmbiguous.value ? (openBlock(), createBlock(unref(N8nOption_default), {
								key: workflowId.value ?? workflow.value,
								value: workflowId.value ?? workflow.value,
								label: workflow.value
							}, null, 8, ["value", "label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(workflowOptions.value, (option) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: option.id,
									value: option.id,
									label: option.name
								}, {
									default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.option) }, [createVNode(unref(N8nText_default), {
										size: "small",
										bold: ""
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(option.name), 1)]),
										_: 2
									}, 1024), createVNode(unref(N8nText_default), {
										size: "xsmall",
										color: "text-light",
										class: normalizeClass(_ctx.$style.optionMeta)
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(option.meta), 1)]),
										_: 2
									}, 1032, ["class"])], 2)]),
									_: 2
								}, 1032, ["value", "label"]);
							}), 128))]),
							_: 1
						}, 8, [
							"model-value",
							"class",
							"loading",
							"placeholder",
							"popper-class"
						])) : (openBlock(), createBlock(unref(Input_default), {
							key: 1,
							id: "workflow-tool-target",
							modelValue: enteredId.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => enteredId.value = $event),
							class: normalizeClass(_ctx.$style.targetInput),
							placeholder: unref(i18n).baseText("resourceLocator.id.placeholder"),
							"data-test-id": "agent-workflow-tool-target-id",
							onBlur: _cache[2] || (_cache[2] = ($event) => handleEnterWorkflowId(enteredId.value)),
							onKeyup: _cache[3] || (_cache[3] = withKeys(($event) => handleEnterWorkflowId(enteredId.value), ["enter"]))
						}, null, 8, [
							"modelValue",
							"class",
							"placeholder"
						])),
						targetWorkflowId.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 2,
							icon: "external-link",
							variant: "ghost",
							size: "small",
							class: normalizeClass(_ctx.$style.openTarget),
							title: unref(i18n).baseText("agents.toolConfig.workflow.target.open"),
							"aria-label": unref(i18n).baseText("agents.toolConfig.workflow.target.open"),
							"data-test-id": "agent-workflow-tool-target-open",
							onClick: openTargetWorkflow
						}, null, 8, [
							"class",
							"title",
							"aria-label"
						])) : createCommentVNode("", true)
					], 2),
					isIdUnresolvable.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "xsmall",
						color: "danger",
						"data-test-id": "agent-workflow-tool-target-id-unresolvable"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target.idNotFound")), 1)]),
						_: 1
					})) : isMissing.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "xsmall",
						color: "danger",
						"data-test-id": "agent-workflow-tool-target-missing"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target.unavailable", { interpolate: { name: workflow.value } })), 1)]),
						_: 1
					})) : isUnusable.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						size: "xsmall",
						color: "danger",
						"data-test-id": "agent-workflow-tool-target-unusable"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.validation.issue.tool.workflow.incompatibleReference", { interpolate: { id: workflow.value } })), 1)]),
						_: 1
					})) : isAmbiguous.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 3,
						size: "xsmall",
						color: "warning",
						"data-test-id": "agent-workflow-tool-target-duplicate"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.target.duplicateName", { interpolate: { name: workflow.value } })), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2),
				declaredInputFields.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.field),
					"data-test-id": "agent-workflow-tool-inputs"
				}, [
					createBaseVNode("label", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.inputs")), 3),
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.inputs.hint")), 1)]),
						_: 1
					}),
					(openBlock(true), createElementBlock(Fragment, null, renderList(declaredInputFields.value, (field) => {
						return openBlock(), createElementBlock("div", {
							key: field.name,
							class: normalizeClass(_ctx.$style.inputRow),
							"data-test-id": `agent-workflow-tool-input-${field.name}`
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputFieldOption) }, [createVNode(unref(N8nText_default), {
							size: "small",
							bold: true,
							class: normalizeClass(_ctx.$style.inputName)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.name), 1)]),
							_: 2
						}, 1032, ["class"]), createVNode(unref(N8nSelect_default), {
							"model-value": fieldMode(field.name),
							class: normalizeClass(_ctx.$style.inputMode),
							"data-test-id": `agent-workflow-tool-input-mode-${field.name}`,
							"onUpdate:modelValue": ($event) => setFieldMode(field.name, $event)
						}, {
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "ai",
								label: unref(i18n).baseText("agents.toolConfig.workflow.inputs.mode.ai")
							}, null, 8, ["label"]), createVNode(unref(N8nOption_default), {
								value: "fixed",
								label: unref(i18n).baseText("agents.toolConfig.workflow.inputs.mode.fixed")
							}, null, 8, ["label"])]),
							_: 1
						}, 8, [
							"model-value",
							"class",
							"data-test-id",
							"onUpdate:modelValue"
						])], 2), fieldMode(field.name) === "fixed" ? (openBlock(), createBlock(unref(Input_default), {
							key: 0,
							"model-value": fieldInputDisplay(field.name),
							class: normalizeClass(_ctx.$style.inputValue),
							placeholder: unref(i18n).baseText("agents.toolConfig.workflow.inputs.value.placeholder"),
							"data-test-id": `agent-workflow-tool-input-value-${field.name}`,
							"onUpdate:modelValue": ($event) => handleFieldInput(field.name, $event),
							onBlur: ($event) => commitFieldFixedValue(field.name)
						}, null, 8, [
							"model-value",
							"class",
							"placeholder",
							"data-test-id",
							"onUpdate:modelValue",
							"onBlur"
						])) : createCommentVNode("", true)], 10, _hoisted_1);
					}), 128))
				], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toggleText) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.allOutputs")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.workflow.allOutputs.hint")), 1)]),
					_: 1
				})], 2), createVNode(unref(Switch_default), {
					"model-value": allOutputs.value,
					"data-test-id": "agent-workflow-tool-all-outputs",
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => allOutputs.value = $event)
				}, null, 8, ["model-value"])], 2),
				renderSlot(_ctx.$slots, "commonSettings")
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/WorkflowToolConfigContent.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1aesc_388";
var field = "_field_1aesc_395";
var label = "_label_1aesc_401";
var toggleRow = "_toggleRow_1aesc_407";
var toggleText = "_toggleText_1aesc_415";
var targetRow = "_targetRow_1aesc_422";
var modeSelector = "_modeSelector_1aesc_428";
var targetInput = "_targetInput_1aesc_433";
var openTarget = "_openTarget_1aesc_438";
var popper = "_popper_1aesc_442";
var option = "_option_1aesc_449";
var optionMeta = "_optionMeta_1aesc_456";
var inputRow = "_inputRow_1aesc_462";
var inputName = "_inputName_1aesc_470";
var inputFieldOption = "_inputFieldOption_1aesc_477";
var inputMode = "_inputMode_1aesc_485";
var inputValue = "_inputValue_1aesc_489";
var shimmer$1 = "_shimmer_1aesc_1";
var spin$1 = "_spin_1aesc_1";
var opacityPulse$1 = "_opacityPulse_1aesc_1";
var popoverIn$1 = "_popoverIn_1aesc_1";
var fadeIn$1 = "_fadeIn_1aesc_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1aesc_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1aesc_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1aesc_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1aesc_1";
var blurSwapIn$1 = "_blurSwapIn_1aesc_1";
var blurSwapOut$1 = "_blurSwapOut_1aesc_1";
var pulseGlow$1 = "_pulseGlow_1aesc_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1aesc_1";
var fade$1 = "_fade_1aesc_1";
var fadeInUp$1 = "_fadeInUp_1aesc_1";
var fadeInDown$1 = "_fadeInDown_1aesc_1";
var fadeInLeft$1 = "_fadeInLeft_1aesc_1";
var fadeInRight$1 = "_fadeInRight_1aesc_1";
var fadeOut$1 = "_fadeOut_1aesc_1";
var fadeOutDown$1 = "_fadeOutDown_1aesc_1";
var fadeOutUp$1 = "_fadeOutUp_1aesc_1";
var fadeOutLeft$1 = "_fadeOutLeft_1aesc_1";
var fadeOutRight$1 = "_fadeOutRight_1aesc_1";
var ping$1 = "_ping_1aesc_1";
var blinkBackground$1 = "_blinkBackground_1aesc_1";
var typingBlink$1 = "_typingBlink_1aesc_1";
var WorkflowToolConfigContent_vue_vue_type_style_index_0_lang_module_default = {
	container,
	field,
	label,
	toggleRow,
	toggleText,
	targetRow,
	modeSelector,
	targetInput,
	openTarget,
	popper,
	option,
	optionMeta,
	inputRow,
	inputName,
	inputFieldOption,
	inputMode,
	inputValue,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1aesc_1",
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
var WorkflowToolConfigContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowToolConfigContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowToolConfigContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentToolConfigWorkflowContent.vue
var AgentToolConfigWorkflowContent_default = /* @__PURE__ */ defineComponent({
	__name: "AgentToolConfigWorkflowContent",
	props: {
		initialRef: {},
		projectId: {},
		showApprovalSetting: { type: Boolean },
		approvalRequired: { type: Boolean }
	},
	emits: [
		"update:valid",
		"update:node-name",
		"update:approvalRequired"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const contentRef = ref(null);
		function handleChangeName(value) {
			contentRef.value?.handleChangeName(value);
		}
		function getName() {
			return contentRef.value?.name ?? "";
		}
		function getDescription() {
			return contentRef.value?.description ?? "";
		}
		function getAllOutputs() {
			return contentRef.value?.allOutputs ?? false;
		}
		function getWorkflow() {
			return contentRef.value?.getWorkflow() ?? "";
		}
		function getWorkflowId() {
			return contentRef.value?.getWorkflowId();
		}
		function getInputs() {
			return contentRef.value?.getInputs();
		}
		__expose({
			getName,
			getDescription,
			getAllOutputs,
			getWorkflow,
			getWorkflowId,
			getInputs,
			handleChangeName
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkflowToolConfigContent_default, {
				ref_key: "contentRef",
				ref: contentRef,
				"initial-ref": props.initialRef,
				"project-id": props.projectId,
				"onUpdate:valid": _cache[1] || (_cache[1] = ($event) => emit("update:valid", $event)),
				"onUpdate:nodeName": _cache[2] || (_cache[2] = ($event) => emit("update:node-name", $event))
			}, {
				commonSettings: withCtx(() => [props.showApprovalSetting ? (openBlock(), createBlock(AgentToolConfigApprovalSetting_default, {
					key: 0,
					"model-value": props.approvalRequired ?? false,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:approvalRequired", $event))
				}, null, 8, ["model-value"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["initial-ref", "project-id"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigModal.vue?vue&type=script&setup=true&lang.ts
var httpRequestUrlErrorKey = "agents.builder.validation.issue.httpRequestUrlFromAi";
var AgentToolConfigModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "AgentToolConfigModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		/**
		* Configure one agent tool entry (node/workflow/custom) or one MCP server.
		*/
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const isCredentialModalOpen = computed(() => uiStore.modalsById[CREDENTIAL_EDIT_MODAL_KEY]?.open === true);
		const isOpen = computed({
			get: () => uiStore.modalsById[props.modalName]?.open === true,
			set: (value) => {
				if (!value) uiStore.closeModal(props.modalName);
			}
		});
		function isMcpServerModalData(data) {
			return data.kind === "mcpServer";
		}
		function containsFromAiCall(value) {
			if (typeof value !== "string") return false;
			try {
				return extractFromAICalls(value).length > 0;
			} catch {
				return false;
			}
		}
		const isMcpTool = computed(() => isMcpServerModalData(props.data));
		const mcpModalData = computed(() => isMcpServerModalData(props.data) ? props.data : null);
		const toolModalData = computed(() => isMcpServerModalData(props.data) ? null : props.data);
		const isWorkflowTool = computed(() => toolModalData.value?.toolRef.type === "workflow");
		const isCustomTool = computed(() => toolModalData.value?.toolRef.type === "custom");
		const nodeContentRef = ref(null);
		const mcpContentRef = ref(null);
		const workflowContentRef = ref(null);
		const isValid = ref(false);
		const approvalRequired = ref(false);
		const mcpApproval = ref();
		const mcpApprovalValid = ref(true);
		const draftNode = ref(null);
		const initialNode = computed(() => isMcpTool.value ? mcpModalData.value?.initialNode ?? null : isWorkflowTool.value || isCustomTool.value ? null : toolModalData.value ? toolRefToNode(toolModalData.value.toolRef) : null);
		const workflowInitialRef = computed(() => isWorkflowTool.value && toolModalData.value?.toolRef.type === "workflow" ? toolModalData.value.toolRef : null);
		const nodeName = ref(computed(() => {
			if (isMcpTool.value) return mcpModalData.value?.mcpServer.name ?? "";
			return (toolModalData.value?.toolRef.type === "node" ? toolModalData.value.toolRef.name : void 0) ?? initialNode.value?.name ?? "";
		}).value);
		const customToolCode = computed(() => !isMcpTool.value ? toolModalData.value?.customTool?.code ?? "" : "");
		const customToolTitle = computed(() => {
			const toolRef = toolModalData.value?.toolRef;
			const fallbackName = toolRef?.type === "custom" ? toolRef.id : toolRef?.type === "workflow" || toolRef?.type === "node" ? toolRef.name : void 0;
			return toolModalData.value?.customTool?.descriptor.name ?? fallbackName ?? i18n.baseText("agents.builder.tree.customBadge");
		});
		const canRender = computed(() => isCustomTool.value || isWorkflowTool.value || initialNode.value !== null);
		const supportsApproval = computed(() => props.data.supportsToolApproval !== false);
		const showApprovalSetting = computed(() => supportsApproval.value && !isMcpTool.value && toolModalData.value !== null);
		watch(() => toolModalData.value?.toolRef, (toolRef) => {
			approvalRequired.value = Boolean(toolRef?.requireApproval);
		}, { immediate: true });
		watch(() => mcpModalData.value?.mcpServer.approval, (approval) => {
			mcpApproval.value = approval;
		}, { immediate: true });
		watch(initialNode, (node) => {
			draftNode.value = node;
		}, { immediate: true });
		const currentNode = computed(() => draftNode.value ?? initialNode.value);
		const hasHttpRequestUrlIssue = computed(() => {
			const data = toolModalData.value;
			if (data?.toolRef.type !== "node") return false;
			if (!data.validationIssues?.some((issue) => issue.code === "invalid_value" && issue.path.endsWith(".node.nodeParameters.url"))) return false;
			const url = currentNode.value?.parameters.url;
			return containsFromAiCall(url);
		});
		const canSave = computed(() => {
			if (isCustomTool.value) return true;
			if (isMcpTool.value) return isValid.value && mcpApprovalValid.value;
			return isValid.value && !hasHttpRequestUrlIssue.value;
		});
		const fromAiDisabledParameters = computed(() => {
			const toolRef = toolModalData.value?.toolRef;
			if (toolRef?.type === "node" && (toolRef.node.nodeType === "n8n-nodes-base.httpRequest" || toolRef.node.nodeType === "n8n-nodes-base.httpRequestTool")) return ["url"];
			return [];
		});
		const nodeParameterIssues = computed(() => {
			const issues = {};
			if (hasHttpRequestUrlIssue.value) issues.url = [i18n.baseText(httpRequestUrlErrorKey)];
			return issues;
		});
		const headerKind = computed(() => {
			if (isCustomTool.value) return "custom";
			if (isWorkflowTool.value) return "workflow";
			if (isMcpTool.value) return "mcp";
			return "node";
		});
		const headerNodeTypeDescription = computed(() => {
			if (isMcpTool.value) return mcpContentRef.value?.getNodeTypeDescription() ?? null;
			if (isWorkflowTool.value || isCustomTool.value) return null;
			return nodeContentRef.value?.getNodeTypeDescription() ?? null;
		});
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		function handleInteractOutside(event) {
			if (isCredentialModalOpen.value) event.preventDefault();
		}
		function withApprovalRequirement(ref) {
			if (!supportsApproval.value) {
				const { requireApproval: _requireApproval, ...rest } = ref;
				return rest;
			}
			const updatedRef = { ...ref };
			if (approvalRequired.value) updatedRef.requireApproval = true;
			else delete updatedRef.requireApproval;
			return updatedRef;
		}
		function withMcpApproval(server) {
			const updatedServer = { ...server };
			if (supportsApproval.value && mcpApproval.value) updatedServer.approval = mcpApproval.value;
			else delete updatedServer.approval;
			return updatedServer;
		}
		function handleConfirm() {
			if (isCustomTool.value) {
				const toolData = toolModalData.value;
				if (!toolData) return;
				toolData.onConfirm(withApprovalRequirement(toolData.toolRef));
				closeDialog();
				return;
			}
			if (isMcpTool.value) {
				const currentNode = mcpContentRef.value?.getNode();
				const mcpData = mcpModalData.value;
				if (!currentNode) return;
				if (!mcpData) return;
				const updatedServer = nodeToMcpServer(currentNode, mcpData.mcpServer);
				mcpData.onConfirm(withMcpApproval(updatedServer));
				closeDialog();
				return;
			}
			if (isWorkflowTool.value) {
				const wc = workflowContentRef.value;
				const toolData = toolModalData.value;
				if (!toolData) return;
				if (!wc) return;
				const workflowId = wc.getWorkflowId();
				const updatedRef = updateWorkflowToolRef(toolData.toolRef, {
					name: wc.getName(),
					description: wc.getDescription(),
					allOutputs: wc.getAllOutputs(),
					workflow: wc.getWorkflow(),
					...workflowId !== void 0 ? { workflowId } : {},
					inputs: wc.getInputs()
				});
				toolData.onConfirm(withApprovalRequirement(updatedRef));
				closeDialog();
				return;
			}
			const currentNode = nodeContentRef.value?.getNode();
			const toolData = toolModalData.value;
			if (!currentNode) return;
			if (!toolData) return;
			const updatedRef = updateToolRefFromNode(toolData.toolRef, currentNode);
			toolData.onConfirm(withApprovalRequirement(updatedRef));
			closeDialog();
		}
		function handleCancel() {
			closeDialog();
		}
		function handleRemove() {
			props.data.onRemove?.();
			closeDialog();
		}
		function handleChangeName(name) {
			if (isCustomTool.value) return;
			if (isMcpTool.value) mcpContentRef.value?.handleChangeName(name);
			else if (isWorkflowTool.value) workflowContentRef.value?.handleChangeName(name);
			else nodeContentRef.value?.handleChangeName(name);
		}
		function handleValidUpdate(valid) {
			isValid.value = valid;
		}
		function handleNodeNameUpdate(name) {
			nodeName.value = name;
		}
		function handleNodeUpdate(node) {
			draftNode.value = node;
		}
		return (_ctx, _cache) => {
			return canRender.value ? (openBlock(), createBlock(unref(Dialog_default), {
				key: 0,
				open: isOpen.value,
				"onUpdate:open": _cache[7] || (_cache[7] = ($event) => isOpen.value = $event),
				size: "2xlarge",
				"trap-focus": !isCredentialModalOpen.value,
				"disable-outside-pointer-events": !isCredentialModalOpen.value,
				"show-close-button": false,
				"data-test-id": "agent-tool-config-modal",
				onInteractOutside: handleInteractOutside
			}, {
				default: withCtx(() => [
					isCredentialModalOpen.value ? (openBlock(), createBlock(unref(FocusScope_default), {
						key: 0,
						"as-child": "",
						onMountAutoFocus: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"])),
						onUnmountAutoFocus: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"]))
					}, {
						default: withCtx(() => [..._cache[8] || (_cache[8] = [createBaseVNode("span", {
							hidden: "",
							"aria-hidden": "true"
						}, null, -1)])]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(AgentToolConfigModalHeader_default, {
							kind: headerKind.value,
							title: isCustomTool.value ? customToolTitle.value : nodeName.value,
							"node-type-description": headerNodeTypeDescription.value,
							"onUpdate:title": handleChangeName
						}, null, 8, [
							"kind",
							"title",
							"node-type-description"
						])]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.contentWrapper, isCustomTool.value && _ctx.$style.codeContentWrapper]) }, [isCustomTool.value ? (openBlock(), createBlock(AgentToolConfigCustomContent_default, {
						key: 0,
						code: customToolCode.value,
						class: normalizeClass(_ctx.$style.customToolViewer)
					}, null, 8, ["code", "class"])) : createCommentVNode("", true), isCustomTool.value && showApprovalSetting.value ? (openBlock(), createBlock(AgentToolConfigApprovalSetting_default, {
						key: 1,
						modelValue: approvalRequired.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => approvalRequired.value = $event)
					}, null, 8, ["modelValue"])) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.configureTab)
					}, [
						workflowInitialRef.value ? (openBlock(), createBlock(AgentToolConfigWorkflowContent_default, {
							key: 0,
							ref_key: "workflowContentRef",
							ref: workflowContentRef,
							"initial-ref": workflowInitialRef.value,
							"project-id": __props.data.projectId,
							"show-approval-setting": showApprovalSetting.value,
							"approval-required": approvalRequired.value,
							"onUpdate:valid": handleValidUpdate,
							"onUpdate:nodeName": handleNodeNameUpdate,
							"onUpdate:approvalRequired": _cache[3] || (_cache[3] = ($event) => approvalRequired.value = $event)
						}, null, 8, [
							"initial-ref",
							"project-id",
							"show-approval-setting",
							"approval-required"
						])) : isMcpTool.value && initialNode.value ? (openBlock(), createBlock(AgentToolConfigNodeContent_default, {
							key: 1,
							ref_key: "mcpContentRef",
							ref: mcpContentRef,
							"initial-node": initialNode.value,
							"existing-tool-names": __props.data.existingToolNames,
							"project-id": __props.data.projectId,
							"content-test-id": "agent-tool-config-mcp-content",
							"onUpdate:valid": handleValidUpdate,
							"onUpdate:nodeName": handleNodeNameUpdate,
							"onUpdate:node": handleNodeUpdate
						}, null, 8, [
							"initial-node",
							"existing-tool-names",
							"project-id"
						])) : initialNode.value ? (openBlock(), createBlock(AgentToolConfigNodeContent_default, {
							key: 2,
							ref_key: "nodeContentRef",
							ref: nodeContentRef,
							"initial-node": initialNode.value,
							"existing-tool-names": __props.data.existingToolNames,
							"project-id": __props.data.projectId,
							"from-ai-disabled-parameters": fromAiDisabledParameters.value,
							"parameter-issues": nodeParameterIssues.value,
							"content-test-id": "node-tool-settings-content",
							"onUpdate:valid": handleValidUpdate,
							"onUpdate:nodeName": handleNodeNameUpdate,
							"onUpdate:node": handleNodeUpdate
						}, null, 8, [
							"initial-node",
							"existing-tool-names",
							"project-id",
							"from-ai-disabled-parameters",
							"parameter-issues"
						])) : createCommentVNode("", true),
						!isMcpTool.value && initialNode.value && showApprovalSetting.value ? (openBlock(), createBlock(AgentToolConfigApprovalSetting_default, {
							key: 3,
							modelValue: approvalRequired.value,
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => approvalRequired.value = $event)
						}, null, 8, ["modelValue"])) : createCommentVNode("", true),
						isMcpTool.value && currentNode.value && supportsApproval.value ? (openBlock(), createBlock(AgentToolConfigMcpApprovalSetting_default, {
							key: 4,
							modelValue: mcpApproval.value,
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => mcpApproval.value = $event),
							node: currentNode.value,
							"project-id": __props.data.projectId,
							"onUpdate:valid": _cache[6] || (_cache[6] = ($event) => mcpApprovalValid.value = $event)
						}, null, 8, [
							"modelValue",
							"node",
							"project-id"
						])) : createCommentVNode("", true)
					], 2))], 2)], 2),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [__props.data.onRemove ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "subtle",
							"data-test-id": "agent-tool-config-remove",
							onClick: handleRemove
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "trash-2",
								size: 16
							})]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.tools.remove")), 1)]),
							_: 1
						})) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							onClick: handleCancel
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.cancel")), 1)]),
							_: 1
						}), createVNode(unref(N8nButton_default), {
							variant: "solid",
							disabled: !canSave.value,
							"data-test-id": "agent-tool-config-save",
							onClick: handleConfirm
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.toolConfig.save")), 1)]),
							_: 1
						}, 8, ["disabled"])], 2)], 2)]),
						_: 1
					})
				]),
				_: 1
			}, 8, [
				"open",
				"trap-focus",
				"disable-outside-pointer-events"
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentToolConfigModal.vue?vue&type=style&index=0&lang.module.scss
var body = "_body_xguev_388";
var footer = "_footer_xguev_396";
var footerActions = "_footerActions_xguev_402";
var contentWrapper = "_contentWrapper_xguev_408";
var codeContentWrapper = "_codeContentWrapper_xguev_426";
var configureTab = "_configureTab_xguev_433";
var customToolViewer = "_customToolViewer_xguev_440";
var shimmer = "_shimmer_xguev_1";
var spin = "_spin_xguev_1";
var opacityPulse = "_opacityPulse_xguev_1";
var popoverIn = "_popoverIn_xguev_1";
var fadeIn = "_fadeIn_xguev_1";
var collapsibleSlideDown = "_collapsibleSlideDown_xguev_1";
var collapsibleSlideUp = "_collapsibleSlideUp_xguev_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_xguev_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_xguev_1";
var blurSwapIn = "_blurSwapIn_xguev_1";
var blurSwapOut = "_blurSwapOut_xguev_1";
var pulseGlow = "_pulseGlow_xguev_1";
var pulseGlowDelayed = "_pulseGlowDelayed_xguev_1";
var fade = "_fade_xguev_1";
var fadeInUp = "_fadeInUp_xguev_1";
var fadeInDown = "_fadeInDown_xguev_1";
var fadeInLeft = "_fadeInLeft_xguev_1";
var fadeInRight = "_fadeInRight_xguev_1";
var fadeOut = "_fadeOut_xguev_1";
var fadeOutDown = "_fadeOutDown_xguev_1";
var fadeOutUp = "_fadeOutUp_xguev_1";
var fadeOutLeft = "_fadeOutLeft_xguev_1";
var fadeOutRight = "_fadeOutRight_xguev_1";
var ping = "_ping_xguev_1";
var blinkBackground = "_blinkBackground_xguev_1";
var typingBlink = "_typingBlink_xguev_1";
var AgentToolConfigModal_vue_vue_type_style_index_0_lang_module_default = {
	body,
	footer,
	footerActions,
	contentWrapper,
	codeContentWrapper,
	configureTab,
	customToolViewer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_xguev_1",
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
var AgentToolConfigModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentToolConfigModal_default as default };
