import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-DTYzu2mo.js";
import { Fa as FocusScope_default, Jt as N8nCallout_default, Lt as N8nSelect_default, U as Switch_default, _ as Dialog_default, do as N8nIconButton_default, fo as N8nButton_default, g as DialogFooter_default, oa as N8nTooltip_default, oo as N8nText_default, po as N8nIcon_default, uo as Input_default, w as N8nInlineTextEdit_default, y as DialogHeader_default, zt as N8nOption_default } from "./src-CH7oGKAF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useRouter } from "./htmlUtils-BvbMD63z.js";
import { R as useNodeTypesStore } from "./workflows.store-By74034z.js";
import { $ as UNSUPPORTED_AGENT_NODE_TOOL_OPERATIONS } from "./src-DjpOA2sH.js";
import { t as VIEWS } from "./views-Cm6YRZ1u.js";
import "./constants-CV_3h7tS.js";
import { t as require_dateformat } from "./dateformat-BSuB1FAy.js";
import { Jt as CREDENTIAL_EDIT_MODAL_KEY, n as useUIStore } from "./ui.store-BEr2moWO.js";
import { an as EditorView, kn as EditorState, r as javascript, vn as lineNumbers } from "./expressions-DumkJ4h2.js";
import { l as codeEditorTheme } from "./RunData-DDTMW22G.js";
import { t as NodeIcon_default } from "./NodeIcon-CdvqgQhh.js";
import { c as updateToolRefFromNode, l as updateWorkflowToolRef, r as nodeToMcpServer, s as toolRefToNode } from "./useMcpServerAdapter-BMXIa9Ce.js";
import { t as NodeToolSettingsContent_default } from "./NodeToolSettingsContent-Bq3aHptC.js";
import { r as useAgentToolCatalog } from "./useAgentToolCatalog-YpM1Ij8a.js";
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
var AgentToolConfigApprovalSetting_vue_vue_type_style_index_0_lang_module_default = {
	approvalRow: "_approvalRow_jwzkr_125",
	approvalText: "_approvalText_jwzkr_133"
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
var AgentCustomToolViewer_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_ihzea_125",
	editor: "_editor_ihzea_132"
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
var AgentToolConfigMcpApprovalSetting_vue_vue_type_style_index_0_lang_module_default = {
	approvalRow: "_approvalRow_190nc_125",
	approvalText: "_approvalText_190nc_133",
	controls: "_controls_190nc_140",
	modeSelect: "_modeSelect_190nc_146"
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
var AgentToolConfigModalHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1h3th_125",
	icon: "_icon_1h3th_132",
	workflowHeaderIcon: "_workflowHeaderIcon_1h3th_137",
	customHeaderIcon: "_customHeaderIcon_1h3th_143",
	title: "_title_1h3th_149"
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
		contentTestId: {}
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
				"data-test-id": props.contentTestId,
				"onUpdate:valid": _cache[0] || (_cache[0] = ($event) => emit("update:valid", $event)),
				"onUpdate:nodeName": _cache[1] || (_cache[1] = ($event) => emit("update:node-name", $event)),
				"onUpdate:node": _cache[2] || (_cache[2] = ($event) => emit("update:node", $event))
			}, null, 8, [
				"initial-node",
				"existing-tool-names",
				"project-id",
				"hidden-operations",
				"data-test-id"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/WorkflowToolConfigContent.vue?vue&type=script&setup=true&lang.ts
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
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
		*
		* The underlying workflow's runtime input schema is inferred by
		* `WorkflowToolFactory.inferInputSchema` at invocation time based on the
		* trigger type — we don't configure it here.
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
		__expose({
			name,
			description,
			allOutputs,
			getWorkflow,
			getWorkflowId,
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
var WorkflowToolConfigContent_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_6gjmw_125",
	field: "_field_6gjmw_132",
	label: "_label_6gjmw_138",
	toggleRow: "_toggleRow_6gjmw_144",
	toggleText: "_toggleText_6gjmw_152",
	targetRow: "_targetRow_6gjmw_159",
	modeSelector: "_modeSelector_6gjmw_165",
	targetInput: "_targetInput_6gjmw_170",
	openTarget: "_openTarget_6gjmw_175",
	popper: "_popper_6gjmw_179",
	option: "_option_6gjmw_186",
	optionMeta: "_optionMeta_6gjmw_193"
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
		__expose({
			getName,
			getDescription,
			getAllOutputs,
			getWorkflow,
			getWorkflowId,
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
		const canSave = computed(() => {
			if (isCustomTool.value) return true;
			if (isMcpTool.value) return isValid.value && mcpApprovalValid.value;
			return isValid.value;
		});
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
					...workflowId !== void 0 ? { workflowId } : {}
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
							"content-test-id": "node-tool-settings-content",
							"onUpdate:valid": handleValidUpdate,
							"onUpdate:nodeName": handleNodeNameUpdate,
							"onUpdate:node": handleNodeUpdate
						}, null, 8, [
							"initial-node",
							"existing-tool-names",
							"project-id"
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
var AgentToolConfigModal_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_1sbmd_125",
	footer: "_footer_1sbmd_133",
	footerActions: "_footerActions_1sbmd_139",
	contentWrapper: "_contentWrapper_1sbmd_145",
	codeContentWrapper: "_codeContentWrapper_1sbmd_163",
	configureTab: "_configureTab_1sbmd_170",
	customToolViewer: "_customToolViewer_1sbmd_177"
};
var AgentToolConfigModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentToolConfigModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentToolConfigModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentToolConfigModal_default as default };
