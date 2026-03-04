import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CWW28IIa.js";
import "./src-KhoUjpIZ.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-_5IHF4E9.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-BvvNYkkp.js";
import "./merge-DwOwVsNY.js";
import "./_baseOrderBy-FLsk2_E-.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-_1izN00A.js";
import "./versions.store-CATNXynl.js";
import "./usePageRedirectionHelper-D2mJVEny.js";
import "./useClipboard-CZFaJ5QF.js";
import "./executions.store-B5rY8GHB.js";
import "./assistant.store-Bs42ylN0.js";
import "./chatPanel.store-D3y40Onh.js";
import "./RunData-C6Yx5DS4.js";
import "./NDVEmptyState-B4BPz70N.js";
import "./externalSecrets.ee.store-CcuB3vzX.js";
import "./uniqBy-yeSyos6F.js";
import "./usePinnedData-C7Q4Z_NJ.js";
import "./nodeIcon-CFAW5yKM.js";
import "./canvas.utils-CGnqcSax.js";
import "./nodeCreator.store-B6bthFSQ.js";
import "./useCanvasOperations-CRPdYHEV.js";
import "./folders.store-CXDRqrH6.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-DOySjPRL.js";
import "./useRunWorkflow-BxwaZ91A.js";
import "./pushConnection.store-Bt2xErnB.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-D1SRWsY-.js";
import "./dateFormatter-CqQ_s-tG.js";
import "./useExecutionHelpers-NeFf9BDX.js";
import "./KeyboardShortcutTooltip-4wNXDHqQ.js";
import "./useKeybindings-DOW_IPWG.js";
import "./useLogsTreeExpand-CW_f8tdb.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-4NoptUqO.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-C1rBnxdG.js";
import "./aiTemplatesStarterCollection.store-B9YWaicA.js";
import "./readyToRunWorkflows.store-C1bPZ7E_.js";
import "./useExecutionDebugging-BxJqp2Wi.js";
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
