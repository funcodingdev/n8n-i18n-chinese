import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-BRSIFZ-8.js";
import "./src-CKCAtrpy.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-D86YL4LK.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import { Fc as WorkflowStateKey, Nc as WorkflowDocumentStoreKey, Pc as WorkflowIdKey } from "./constants-bR1gDMyV.js";
import "./merge-CIGhcbPZ.js";
import "./_baseOrderBy-Bnq6lF9G.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B60IEvx_.js";
import "./versions.store-BbCEI1wT.js";
import "./usePageRedirectionHelper-CLbDtOGF.js";
import "./useClipboard-CUjSehMX.js";
import "./executions.store-M_BkPQP7.js";
import "./assistant.store-VgdEjZtb.js";
import "./chatPanel.store-Cbb_CAVO.js";
import "./RunData-DoHMWJJ_.js";
import "./NDVEmptyState-C1odqkYI.js";
import "./externalSecrets.ee.store-SKJfGM55.js";
import "./uniqBy-B1jOEEhZ.js";
import "./usePinnedData-Nwk6oEMR.js";
import "./nodeIcon-CZIVoFoF.js";
import "./canvas.utils-BFvfHyWG.js";
import "./canvas.eventBus-Bf5MePgH.js";
import "./useCanvasOperations-3hHIPvfQ.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./NodeIcon-0TqcYO8t.js";
import "./useRunWorkflow-sKQnjkCu.js";
import "./pushConnection.store-gdbooWqZ.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-DkO5PHzQ.js";
import "./dateFormatter-B_EjvE2C.js";
import "./useExecutionHelpers-BDJdGZvb.js";
import "./KeyboardShortcutTooltip-B5-_tsGh.js";
import "./folders.store-CkWuaok6.js";
import "./useKeybindings-CtJyddQn.js";
import "./useLogsTreeExpand-CSP1qVfo.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-W2uaSFaW.js";
import "./AnimatedSpinner-13fEQWHd.js";
import "./useResizablePanel-CpaVY484.js";
import "./aiTemplatesStarterCollection.store-BTDu3ZYA.js";
import "./readyToRunWorkflows.store-UQgmu_ds.js";
import "./useExecutionDebugging-CFGxV8gy.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		const workflowState = useWorkflowState();
		provide(WorkflowStateKey, workflowState);
		const { workflowId, initializeData, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		provide(WorkflowIdKey, workflowId);
		provide(WorkflowDocumentStoreKey, currentWorkflowDocumentStore);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore
		});
		onBeforeMount(() => {
			setupPostMessages();
		});
		onMounted(async () => {
			await initializeData();
		});
		onBeforeUnmount(() => {
			cleanupPostMessages();
			cleanupInitialization();
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DemoLayout_default as default };
