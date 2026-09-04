import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, U as mergeProps, Vt as toRef, W as nextTick, _ as Fragment, gt as watch, rt as renderList, w as createBlock, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { A as useVirtualList, U as useThrottleFn } from "./dist-BKkqSB6h.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { D as injectWorkflowDocumentStore, V as useNodeTypesStore, t as useWorkflowsStore, v as injectWorkflowExecutionStateStore } from "./workflows.store-qP-dtzSs.js";
import { Vt as Workflow } from "./src-B255AdRt.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import "./constants-CMdL1Kzl.js";
import { a as LOGS_EXECUTION_DATA_THROTTLE_DURATION } from "./durations-xVQWCRRO.js";
import { t as useNodeHelpers } from "./useNodeHelpers-CzG1RIp-.js";
import { d as isChatNode } from "./useCanvasOperations-LJDHn9ZZ.js";
import { t as useRunWorkflow } from "./useRunWorkflow-6FPsp1cY.js";
import { t as useChatHubPanelStore } from "./chatHubPanel.store-D-Dzdden.js";
import { a as copyExecutionData, d as flattenLogEntries, o as createLogTree, p as getDefaultCollapsedEntries, t as LogsOverviewRow_default, u as findSubExecutionLocator, v as hasSubExecution, w as isNodeLog, x as mergeStartData } from "./LogsOverviewRow-DZNGzlNB.js";
//#region src/features/execution/logs/components/LogsOverviewRows.vue?vue&type=script&setup=true&lang.ts
var LogsOverviewRows_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsOverviewRows",
	props: {
		selected: {},
		isReadOnly: { type: Boolean },
		isCompact: { type: Boolean },
		shouldShowTokenCountColumn: { type: Boolean },
		canOpenNdv: { type: Boolean },
		flatLogEntries: {},
		latestNodeInfo: {},
		execution: {}
	},
	emits: [
		"select",
		"openNdv",
		"toggleExpanded"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const runWorkflow = useRunWorkflow({ router: useRouter() });
		const isExpanded = computed(() => __props.flatLogEntries.reduce((acc, entry, index, arr) => {
			acc[entry.id] = arr[index + 1]?.parent?.id === entry.id;
			return acc;
		}, {}));
		const virtualList = useVirtualList(toRef(() => __props.flatLogEntries), { itemHeight: 32 });
		function getLatestInfo(entry) {
			return isNodeLog(entry) ? __props.latestNodeInfo[entry.node.id] : void 0;
		}
		async function handleTriggerPartialExecution(treeNode) {
			if (!isNodeLog(treeNode)) return;
			const latestName = __props.latestNodeInfo[treeNode.node.id]?.name ?? treeNode.node.name;
			if (latestName) await runWorkflow.runWorkflow({ destinationNode: {
				nodeName: latestName,
				mode: "inclusive"
			} });
		}
		watch([() => __props.execution?.status === "running", () => __props.flatLogEntries.length], async ([isRunning, flatEntryCount], [wasRunning]) => {
			await nextTick(() => {
				if (__props.selected === void 0 && (isRunning || wasRunning)) virtualList.scrollTo(flatEntryCount - 1);
			});
		}, { immediate: true });
		watch(() => __props.selected?.id, async (selectedId) => {
			await nextTick(() => {
				if (selectedId === void 0) return;
				const index = virtualList.list.value.some((e) => e.data.id === selectedId) ? -1 : __props.flatLogEntries.findIndex((e) => e.id === selectedId);
				if (index >= 0) virtualList.scrollTo(index);
			});
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: _ctx.$style.tree }, unref(virtualList).containerProps), [createBaseVNode("div", mergeProps({ role: "tree" }, unref(virtualList).wrapperProps.value), [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(virtualList).list.value, ({ data, index }) => {
				return openBlock(), createBlock(LogsOverviewRow_default, {
					key: index,
					data,
					"is-read-only": __props.isReadOnly,
					"is-selected": data.id === __props.selected?.id,
					"is-compact": __props.isCompact,
					"should-show-token-count-column": __props.shouldShowTokenCountColumn,
					"latest-info": getLatestInfo(data),
					expanded: isExpanded.value[data.id],
					"can-open-ndv": __props.canOpenNdv,
					onToggleExpanded: ($event) => emit("toggleExpanded", data),
					onOpenNdv: ($event) => emit("openNdv", data),
					onTriggerPartialExecution: ($event) => handleTriggerPartialExecution(data),
					onToggleSelected: ($event) => emit("select", __props.selected?.id === data.id ? void 0 : data)
				}, null, 8, [
					"data",
					"is-read-only",
					"is-selected",
					"is-compact",
					"should-show-token-count-column",
					"latest-info",
					"expanded",
					"can-open-ndv",
					"onToggleExpanded",
					"onOpenNdv",
					"onTriggerPartialExecution",
					"onToggleSelected"
				]);
			}), 128))], 16)], 16);
		};
	}
});
//#endregion
//#region src/features/execution/logs/components/LogsOverviewRows.vue?vue&type=style&index=0&lang.module.scss
var tree = "_tree_dxyec_388";
var container = "_container_dxyec_393";
var staticScrollBar = "_staticScrollBar_dxyec_393";
var shimmer = "_shimmer_dxyec_1";
var spin = "_spin_dxyec_1";
var opacityPulse = "_opacityPulse_dxyec_1";
var popoverIn = "_popoverIn_dxyec_1";
var fadeIn = "_fadeIn_dxyec_1";
var collapsibleSlideDown = "_collapsibleSlideDown_dxyec_1";
var collapsibleSlideUp = "_collapsibleSlideUp_dxyec_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_dxyec_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_dxyec_1";
var blurSwapIn = "_blurSwapIn_dxyec_1";
var blurSwapOut = "_blurSwapOut_dxyec_1";
var pulseGlow = "_pulseGlow_dxyec_1";
var pulseGlowDelayed = "_pulseGlowDelayed_dxyec_1";
var fade = "_fade_dxyec_1";
var fadeInUp = "_fadeInUp_dxyec_1";
var fadeInDown = "_fadeInDown_dxyec_1";
var fadeInLeft = "_fadeInLeft_dxyec_1";
var fadeInRight = "_fadeInRight_dxyec_1";
var fadeOut = "_fadeOut_dxyec_1";
var fadeOutDown = "_fadeOutDown_dxyec_1";
var fadeOutUp = "_fadeOutUp_dxyec_1";
var fadeOutLeft = "_fadeOutLeft_dxyec_1";
var fadeOutRight = "_fadeOutRight_dxyec_1";
var ping = "_ping_dxyec_1";
var blinkBackground = "_blinkBackground_dxyec_1";
var typingBlink = "_typingBlink_dxyec_1";
var LogsOverviewRows_vue_vue_type_style_index_0_lang_module_default = {
	tree,
	container,
	staticScrollBar,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_dxyec_1",
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
var LogsOverviewRows_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LogsOverviewRows_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsOverviewRows_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/composables/src/useThrottleWithReactiveDelay.ts
/**
* Similar to `useThrottle` from @vueuse/core, but with changeable delay
*/
function useThrottleWithReactiveDelay(state, delay) {
	const throttled = shallowRef(state.value);
	watch(state, useThrottleFn((latest) => {
		throttled.value = latest;
	}, delay, true, true), { immediate: true });
	return throttled;
}
//#endregion
//#region src/features/execution/logs/composables/useLogsExecutionData.ts
function useLogsExecutionData({ isEnabled, filter } = {}) {
	const nodeHelpers = useNodeHelpers();
	const workflowsStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
	const currentExecution = computed(() => workflowExecutionStateStore.value.activeExecution);
	const toast = useToast();
	const state = ref();
	const updateInterval = computed(() => currentExecution.value?.status === "running" && Object.keys(currentExecution.value.data?.resultData.runData ?? {}).length > 1 ? LOGS_EXECUTION_DATA_THROTTLE_DURATION : 0);
	const throttledState = useThrottleWithReactiveDelay(state, updateInterval);
	const throttledWorkflowData = computed(() => throttledState.value?.response.workflowData);
	const subWorkflowExecData = ref({});
	const subWorkflows = ref({});
	const subWorkflowNodeGroups = ref({});
	const workflow = ref();
	const latestNodeNameById = computed(() => Object.values(workflow.value?.nodes ?? {}).reduce((acc, node) => {
		const nodeInStore = workflowDocumentStore.value.getNodeById(node.id) ?? null;
		acc[node.id] = {
			deleted: !nodeInStore,
			disabled: nodeInStore?.disabled ?? false,
			name: nodeInStore?.name ?? node.name
		};
		return acc;
	}, {}));
	const chatHubPanelStore = useChatHubPanelStore();
	const hasChat = computed(() => {
		if (chatHubPanelStore.isFloatingChatEnabled) {
			if (workflowDocumentStore.value.allNodes.some((node) => node.type === "@n8n/n8n-nodes-langchain.chatTrigger" && node.parameters?.availableInChat === true)) return false;
		}
		return [Object.values(workflow.value?.nodes ?? {}), workflowDocumentStore.value.allNodes].some((nodes) => nodes.some(isChatNode));
	});
	const entries = computed(() => {
		if (isEnabled !== void 0 && !isEnabled.value || !throttledState.value || !workflow.value) return [];
		const mergedExecutionData = mergeStartData(throttledState.value.startData, throttledState.value.response);
		const nodeGroups = mergedExecutionData.workflowData.nodeGroups ?? [];
		return createLogTree(workflow.value, mergedExecutionData, subWorkflows.value, subWorkflowExecData.value, filter?.value, nodeGroups, subWorkflowNodeGroups.value);
	});
	function resetExecutionData() {
		state.value = void 0;
		workflowExecutionStateStore.value.setWorkflowExecutionData(null);
		nodeHelpers.updateNodesExecutionIssues();
		workflowExecutionStateStore.value.setChatPartialExecutionDestinationNode(null);
		workflowsStore.fetchLastSuccessfulExecution();
	}
	async function loadSubExecution(logEntry) {
		const locator = findSubExecutionLocator(logEntry);
		if (!state.value || locator === void 0) return;
		try {
			const subExecution = await workflowsStore.fetchExecutionDataById(locator.executionId);
			const data = subExecution?.data ?? void 0;
			if (!data || !subExecution) throw Error("Data is missing");
			subWorkflowExecData.value[locator.executionId] = data;
			subWorkflows.value[locator.workflowId] = new Workflow({
				...subExecution.workflowData,
				nodeTypes: nodeTypesStore.getAllNodeTypes()
			});
			subWorkflowNodeGroups.value[locator.workflowId] = subExecution.workflowData.nodeGroups ?? [];
		} catch (e) {
			toast.showError(e, "Unable to load sub execution");
		}
	}
	watch([
		() => currentExecution.value?.id,
		() => currentExecution.value?.workflowData.id,
		() => currentExecution.value?.status,
		() => workflowExecutionStateStore.value.activeExecutionResultDataLastUpdate,
		() => workflowExecutionStateStore.value.activeExecutionStartedData
	], useThrottleFn(([executionId], [previousExecutionId]) => {
		state.value = currentExecution.value === null ? void 0 : {
			response: copyExecutionData(currentExecution.value),
			startData: workflowExecutionStateStore.value.activeExecutionStartedData?.[1] ?? {}
		};
		if (executionId !== previousExecutionId) {
			subWorkflowExecData.value = {};
			subWorkflows.value = {};
			subWorkflowNodeGroups.value = {};
		}
	}, updateInterval, true, true), { immediate: true });
	watch(() => workflowDocumentStore.value.workflowId, () => {
		resetExecutionData();
	});
	watch(throttledWorkflowData, (data) => {
		workflow.value = data ? new Workflow({
			...data,
			nodeTypes: nodeTypesStore.getAllNodeTypes()
		}) : void 0;
	}, { immediate: true });
	return {
		execution: computed(() => throttledState.value?.response),
		entries,
		hasChat,
		latestNodeNameById,
		resetExecutionData,
		loadSubExecution
	};
}
//#endregion
//#region src/features/execution/logs/composables/useLogsTreeExpand.ts
function useLogsTreeExpand(entries, loadSubExecution) {
	const userToggledCollapse = shallowRef({});
	const collapsedEntries = computed(() => ({
		...getDefaultCollapsedEntries(entries.value),
		...userToggledCollapse.value
	}));
	const flatLogEntries = computed(() => flattenLogEntries(entries.value, collapsedEntries.value));
	function toggleExpanded(treeNode, expand) {
		if (hasSubExecution(treeNode) && treeNode.children.length === 0) {
			loadSubExecution(treeNode);
			return;
		}
		userToggledCollapse.value = {
			...userToggledCollapse.value,
			[treeNode.id]: expand === void 0 ? !collapsedEntries.value[treeNode.id] : !expand
		};
	}
	return {
		flatLogEntries,
		toggleExpanded
	};
}
//#endregion
export { useLogsExecutionData as n, LogsOverviewRows_default as r, useLogsTreeExpand as t };
