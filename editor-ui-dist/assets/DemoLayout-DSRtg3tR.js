import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Dq2XPUGI.js";
import "./src-caSpAzoz.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-2EsruVYR.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import { Fc as WorkflowStateKey, Nc as WorkflowDocumentStoreKey, Pc as WorkflowIdKey } from "./constants-_O8nYJwx.js";
import "./merge-DC9T2n_q.js";
import "./_baseOrderBy-V792pLeL.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BZgy_zf7.js";
import "./versions.store-DnAfcr7U.js";
import "./usePageRedirectionHelper-Codao5gm.js";
import "./useClipboard-CVpuSQWa.js";
import "./executions.store-sPE3-_WQ.js";
import "./assistant.store-DpCnQbxG.js";
import "./chatPanel.store-fi0sPEKh.js";
import "./RunData-l6UC6PUo.js";
import "./NDVEmptyState-Wx7cJ4DQ.js";
import "./externalSecrets.ee.store-sBSKEi6X.js";
import "./uniqBy-9zkEjrL3.js";
import "./usePinnedData-DqWABxxE.js";
import "./nodeIcon-c7bgB_oY.js";
import "./canvas.utils-BvUu3pSa.js";
import "./canvas.eventBus-CtIScaLg.js";
import "./useCanvasOperations-D_arrNY7.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./NodeIcon-BFUZ9PMM.js";
import "./useRunWorkflow-D5H3LTDC.js";
import "./pushConnection.store-BszLNG-V.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-HDkKzYvC.js";
import "./dateFormatter-CoVxa8zs.js";
import "./useExecutionHelpers-BCv0GW7d.js";
import "./KeyboardShortcutTooltip-LxsSi8Y_.js";
import "./folders.store-Ch8fVRoP.js";
import "./useKeybindings-Bl0CQOt2.js";
import "./useLogsTreeExpand-Dw3PxHa1.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-BUHQMv8A.js";
import "./AnimatedSpinner-13fEQWHd.js";
import "./useResizablePanel-BNdt91Ej.js";
import "./aiTemplatesStarterCollection.store-B4mPHgPa.js";
import "./readyToRunWorkflows.store-DkMxggMR.js";
import "./useExecutionDebugging-C5abR4rx.js";
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
