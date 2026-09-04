import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, p as vShow, q as onBeforeUnmount, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { D as NodeCredentials_default, f as collectParametersByTab, m as createCommonNodeSettings, t as ParameterInputList_default, x as setParameterValue } from "./ParameterInputList-BCiUTEIs.js";
import { E as disposeWorkflowDocumentStore, T as createWorkflowDocumentId, V as useNodeTypesStore, fn as useEnvironmentsStore, k as useWorkflowDocumentStore, sn as disposeNDVStore, un as useNDVStore, vn as useProjectsStore, wt as useCredentialsStore } from "./workflows.store-qP-dtzSs.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
import { $r as makeNodeName, Br as getNodeParameters, Ei as deepCopy, Vr as getNodeParametersIssues, mi as isINodePropertyOptions, qr as isDefaultNodeName } from "./src-B255AdRt.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { ha as WorkflowDocumentStoreKey, la as ExpressionLocalResolveContextSymbol, ma as ToolConfigCredentialSelectedKey, sa as ChatHubToolContextKey } from "./constants-CMdL1Kzl.js";
import { t as useNodeHelpers } from "./useNodeHelpers-CzG1RIp-.js";
//#region src/features/shared/toolConfig/toolConfig.utils.ts
/**
* Returns a copy of the description with the given operation option values
* removed from every `operation` property. Defaults pointing at a removed
* operation are remapped to the first remaining option.
*/
function omitOperationOptions(description, operations) {
	const copy = deepCopy(description);
	for (const property of copy.properties) {
		if (property.name !== "operation" || !Array.isArray(property.options)) continue;
		property.options = property.options.filter((option) => !isINodePropertyOptions(option) || typeof option.value !== "string" || !operations.includes(option.value));
		if (typeof property.default !== "string" || !operations.includes(property.default)) continue;
		const firstRemainingOption = property.options.find(isINodePropertyOptions);
		if (firstRemainingOption) property.default = firstRemainingOption.value;
	}
	return copy;
}
//#endregion
//#region src/features/shared/toolConfig/NodeToolSettingsContent.vue?vue&type=script&setup=true&lang.ts
var NodeToolSettingsContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeToolSettingsContent",
	props: {
		initialNode: {},
		existingToolNames: {},
		hideAskAssistant: { type: Boolean },
		projectId: {},
		hiddenOperations: {},
		parameterIssues: {},
		fromAiDisabledParameters: {},
		syncNodeToNdv: { type: Boolean }
	},
	emits: [
		"update:valid",
		"update:node-name",
		"update:node"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		/**
		* Shared "configure a node-as-tool" form.
		*
		* Renders a two-sub-tab view (Parameters + node Settings) over an `INode`,
		* wired to `ParameterInputList` + `NodeCredentials`. Emits validity and name
		* changes so any container (Chat Hub modal, Agents modal, etc.) can drive a
		* Save/Cancel footer.
		*
		* Context marker: we provide `ChatHubToolContextKey` here so the parameter
		* form suppresses features that don't apply when a node is being configured
		* as an LLM tool outside a workflow canvas (see `ParameterOptions`,
		* `ParameterInputFull`). The key name is historical — treat it as the
		* "node-as-tool config" marker; it applies equally to Chat Hub and Agents.
		*/
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const nodeHelpers = useNodeHelpers();
		const environmentsStore = useEnvironmentsStore();
		const settingsStore = useSettingsStore();
		const node = shallowRef(props.initialNode);
		const userEditedName = ref(false);
		const existingToolNames = computed(() => props.existingToolNames ?? []);
		const credentialProjectId = computed(() => props.projectId || projectsStore.personalProject?.id);
		const nodeTypeDescription = computed(() => {
			if (!props.initialNode) return null;
			const description = nodeTypesStore.getNodeType(props.initialNode.type);
			if (!description || !props.hiddenOperations?.length) return description;
			return omitOperationOptions(description, props.hiddenOperations);
		});
		const activeTab = ref("params");
		const parametersByTab = computed(() => collectParametersByTab(nodeTypeDescription.value?.properties ?? [], false));
		const hasSettings = computed(() => nodeSettings.value.length > 0 || parametersByTab.value.settings.length > 0);
		const tabOptions = computed(() => {
			const tabs = [{
				label: i18n.baseText("nodeSettings.parameters"),
				value: "params"
			}];
			if (hasSettings.value) tabs.push({
				label: i18n.baseText("nodeSettings.settings"),
				value: "settings"
			});
			return tabs;
		});
		const nodeSettings = computed(() => createCommonNodeSettings(true, i18n.baseText.bind(i18n), settingsStore.isOtelCustomSpanAttributesEnabled).filter((s) => s.name !== "notes" && s.name !== "notesInFlow"));
		const settingsNodeValues = computed(() => {
			if (!node.value) return { parameters: {} };
			return {
				parameters: deepCopy(node.value.parameters),
				customTelemetryTags: deepCopy(node.value.customTelemetryTags ?? {})
			};
		});
		const showNoParametersNotice = computed(() => parametersByTab.value.params.filter((item) => item.type !== "notice").length === 0);
		const hasParameterIssues = computed(() => {
			if (!nodeTypeDescription.value || !node.value) return false;
			const parameterIssues = getNodeParametersIssues(nodeTypeDescription.value.properties, node.value, nodeTypeDescription.value);
			return parameterIssues !== null && Object.keys(parameterIssues.parameters ?? {}).length > 0;
		});
		const hasCredentialIssues = computed(() => {
			if (!nodeTypeDescription.value || !node.value) return false;
			const credentialIssues = nodeHelpers.getNodeIssues(nodeTypeDescription.value, node.value, { getNode: () => node.value }, [
				"parameters",
				"execution",
				"typeUnknown",
				"input"
			]);
			return Object.keys(credentialIssues?.credentials ?? {}).length > 0;
		});
		const toolWorkflowDocumentId = createWorkflowDocumentId("node-tool-workflow");
		const toolWorkflowStore = useWorkflowDocumentStore(toolWorkflowDocumentId);
		const toolNdvStore = useNDVStore(toolWorkflowDocumentId);
		const workflowDocumentStore = computed(() => toolWorkflowStore);
		watch(node, (currentNode) => {
			if (currentNode) {
				toolWorkflowStore.setNodes([currentNode]);
				if (props.syncNodeToNdv) toolNdvStore.setActiveNodeName(currentNode.name, "other");
			}
		}, { immediate: true });
		const expressionResolveCtx = computed(() => {
			if (!node.value) return void 0;
			return {
				localResolve: true,
				envVars: environmentsStore.variablesAsObject,
				nodeName: node.value.name,
				additionalKeys: {},
				inputNode: void 0
			};
		});
		const isValid = computed(() => {
			return node.value?.name && !hasParameterIssues.value && !hasCredentialIssues.value;
		});
		provide(ExpressionLocalResolveContextSymbol, expressionResolveCtx);
		provide(WorkflowDocumentStoreKey, workflowDocumentStore);
		provide(ChatHubToolContextKey, true);
		function makeUniqueName(baseName, existingNames) {
			if (!existingNames.includes(baseName)) return baseName;
			let counter = 1;
			while (existingNames.includes(`${baseName} (${counter})`)) counter++;
			return `${baseName} (${counter})`;
		}
		function handleChangeParameter(updateData) {
			if (!node.value) return;
			const newParameters = deepCopy(node.value.parameters);
			setParameterValue(newParameters, updateData.name, updateData.value);
			node.value = {
				...node.value,
				parameters: newParameters
			};
		}
		function handleChangeSettingsValue(updateData) {
			if (!node.value) return;
			if (updateData.name.startsWith("parameters.")) {
				const paramName = updateData.name.slice(11);
				const newParameters = deepCopy(node.value.parameters);
				setParameterValue(newParameters, paramName, updateData.value);
				node.value = {
					...node.value,
					parameters: newParameters
				};
			} else if (updateData.name.includes(".") || updateData.name.includes("[")) {
				const newNode = deepCopy(node.value);
				setParameterValue(newNode, updateData.name, updateData.value);
				if (newNode.customTelemetryTags?.tag?.length === 0) newNode.customTelemetryTags = {};
				node.value = newNode;
			} else node.value = {
				...node.value,
				[updateData.name]: updateData.value
			};
		}
		function handleChangeCredential(updateData) {
			if (node.value) node.value = {
				...node.value,
				...updateData.properties
			};
		}
		provide(ToolConfigCredentialSelectedKey, handleChangeCredential);
		function handleChangeName(name) {
			if (node.value) {
				userEditedName.value = true;
				node.value = {
					...node.value,
					name
				};
			}
		}
		watch(() => props.initialNode, (initialNode) => {
			if (initialNode) {
				const uniqueName = makeUniqueName(initialNode.name, existingToolNames.value);
				let nodeData = uniqueName !== initialNode.name ? {
					...initialNode,
					name: uniqueName
				} : initialNode;
				if (nodeTypeDescription.value) {
					const defaultParameters = getNodeParameters(nodeTypeDescription.value.properties ?? [], nodeData.parameters ?? {}, true, false, nodeData, nodeTypeDescription.value);
					nodeData = {
						...nodeData,
						parameters: defaultParameters ?? {}
					};
					const nameForCheck = nodeData.name.replace(/ \(\d+\)$/, "");
					userEditedName.value = !(isDefaultNodeName(nameForCheck, nodeTypeDescription.value, nodeData.parameters) || nameForCheck === nodeTypeDescription.value.displayName);
					if (!userEditedName.value) {
						const newName = makeNodeName(nodeData.parameters ?? {}, nodeTypeDescription.value);
						if (newName && newName !== nameForCheck) nodeData = {
							...nodeData,
							name: makeUniqueName(newName, existingToolNames.value)
						};
					}
				}
				node.value = nodeData;
			} else {
				node.value = initialNode;
				userEditedName.value = false;
			}
		}, { immediate: true });
		watch(() => [node.value?.parameters?.resource, node.value?.parameters?.operation], () => {
			if (userEditedName.value || !node.value || !nodeTypeDescription.value) return;
			const newName = makeNodeName(node.value.parameters, nodeTypeDescription.value);
			if (newName) {
				const uniqueName = makeUniqueName(newName, existingToolNames.value);
				if (uniqueName !== node.value.name) node.value = {
					...node.value,
					name: uniqueName
				};
			}
		});
		watch(isValid, (val) => {
			emit("update:valid", !!val);
		});
		watch(node, (updatedNode) => {
			if (updatedNode) emit("update:node", updatedNode);
		}, { immediate: true });
		watch(() => node.value?.name, (name) => {
			if (name) emit("update:node-name", name);
		});
		onMounted(async () => {
			emit("update:valid", !!isValid.value);
			if (node.value?.name) emit("update:node-name", node.value.name);
			if (props.projectId) await projectsStore.fetchAndSetProject(props.projectId);
			else {
				if (!projectsStore.personalProject) await projectsStore.getPersonalProject();
				if (projectsStore.personalProject) projectsStore.setCurrentProject(projectsStore.personalProject);
			}
			const projectId = credentialProjectId.value;
			if (projectId) await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchUsableCredentials({ projectId })]);
		});
		onBeforeUnmount(() => {
			projectsStore.setCurrentProject(null);
			const documentStore = workflowDocumentStore.value;
			disposeNDVStore(toolNdvStore);
			disposeWorkflowDocumentStore(documentStore);
		});
		__expose({
			node,
			isValid,
			nodeTypeDescription,
			handleChangeName
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [tabOptions.value.length > 1 ? (openBlock(), createBlock(unref(N8nTabs_default), {
				key: 0,
				"model-value": activeTab.value,
				options: tabOptions.value,
				class: normalizeClass(_ctx.$style.tabs),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event)
			}, null, 8, [
				"model-value",
				"options",
				"class"
			])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabContent) }, [withDirectives(createBaseVNode("div", null, [node.value ? (openBlock(), createBlock(ParameterInputList_default, {
				key: 0,
				parameters: parametersByTab.value.params,
				"hide-delete": true,
				"node-values": node.value.parameters,
				"is-read-only": false,
				node: node.value,
				"parameter-issues": props.parameterIssues,
				"from-ai-disabled-parameters": props.fromAiDisabledParameters,
				onValueChanged: handleChangeParameter
			}, {
				default: withCtx(() => [createVNode(NodeCredentials_default, {
					node: node.value,
					readonly: false,
					"show-all": true,
					"project-id": credentialProjectId.value,
					"hide-issues": false,
					"hide-ask-assistant": props.hideAskAssistant,
					"skip-credentials-fetch": true,
					onCredentialSelected: handleChangeCredential,
					onValueChanged: handleChangeParameter
				}, null, 8, [
					"node",
					"project-id",
					"hide-ask-assistant"
				]), _ctx.$slots.commonSettings ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.commonSettings)
				}, [renderSlot(_ctx.$slots, "commonSettings")], 2)) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"parameters",
				"node-values",
				"node",
				"parameter-issues",
				"from-ai-disabled-parameters"
			])) : createCommentVNode("", true), showNoParametersNotice.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.noParameters)
			}, [createVNode(unref(N8nText_default), null, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.thisNodeDoesNotHaveAnyParameters")), 1)]),
				_: 1
			})], 2)) : createCommentVNode("", true)], 512), [[vShow, activeTab.value === "params"]]), withDirectives(createBaseVNode("div", null, [node.value && parametersByTab.value.settings.length > 0 ? (openBlock(), createBlock(ParameterInputList_default, {
				key: 0,
				parameters: parametersByTab.value.settings,
				"node-values": settingsNodeValues.value,
				"is-read-only": false,
				"hide-delete": true,
				path: "parameters",
				node: node.value,
				onValueChanged: handleChangeSettingsValue
			}, null, 8, [
				"parameters",
				"node-values",
				"node"
			])) : createCommentVNode("", true), node.value ? (openBlock(), createBlock(ParameterInputList_default, {
				key: 1,
				parameters: nodeSettings.value,
				"hide-delete": true,
				"node-values": settingsNodeValues.value,
				"is-read-only": false,
				path: "",
				node: node.value,
				onValueChanged: handleChangeSettingsValue
			}, null, 8, [
				"parameters",
				"node-values",
				"node"
			])) : createCommentVNode("", true)], 512), [[vShow, activeTab.value === "settings"]])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/shared/toolConfig/NodeToolSettingsContent.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_3q7na_388";
var tabs = "_tabs_3q7na_396";
var tabContent = "_tabContent_3q7na_402";
var noParameters = "_noParameters_3q7na_409";
var commonSettings = "_commonSettings_3q7na_413";
var shimmer = "_shimmer_3q7na_1";
var spin = "_spin_3q7na_1";
var opacityPulse = "_opacityPulse_3q7na_1";
var popoverIn = "_popoverIn_3q7na_1";
var fadeIn = "_fadeIn_3q7na_1";
var collapsibleSlideDown = "_collapsibleSlideDown_3q7na_1";
var collapsibleSlideUp = "_collapsibleSlideUp_3q7na_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_3q7na_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_3q7na_1";
var blurSwapIn = "_blurSwapIn_3q7na_1";
var blurSwapOut = "_blurSwapOut_3q7na_1";
var pulseGlow = "_pulseGlow_3q7na_1";
var pulseGlowDelayed = "_pulseGlowDelayed_3q7na_1";
var fade = "_fade_3q7na_1";
var fadeInUp = "_fadeInUp_3q7na_1";
var fadeInDown = "_fadeInDown_3q7na_1";
var fadeInLeft = "_fadeInLeft_3q7na_1";
var fadeInRight = "_fadeInRight_3q7na_1";
var fadeOut = "_fadeOut_3q7na_1";
var fadeOutDown = "_fadeOutDown_3q7na_1";
var fadeOutUp = "_fadeOutUp_3q7na_1";
var fadeOutLeft = "_fadeOutLeft_3q7na_1";
var fadeOutRight = "_fadeOutRight_3q7na_1";
var ping = "_ping_3q7na_1";
var blinkBackground = "_blinkBackground_3q7na_1";
var typingBlink = "_typingBlink_3q7na_1";
var NodeToolSettingsContent_vue_vue_type_style_index_0_lang_module_default = {
	container,
	tabs,
	tabContent,
	noParameters,
	commonSettings,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_3q7na_1",
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
var NodeToolSettingsContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeToolSettingsContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeToolSettingsContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { NodeToolSettingsContent_default as t };
