import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-BLQlsGfT.js";
import "./src-C3dDmkfF.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-YX3xGXV-.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-sixw52iU.js";
import "./merge-k3cP0hku.js";
import "./_baseOrderBy-BrADeb8X.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-C7GCj9g0.js";
import "./versions.store-D2KkYDJw.js";
import "./usePageRedirectionHelper-s_DBFOnw.js";
import "./useClipboard-BoJ-UiuZ.js";
import "./executions.store-BOXiu41e.js";
import "./assistant.store-L5qjcTMR.js";
import "./chatPanel.store-BKYmXTx_.js";
import "./RunData-DQY4gZ-Y.js";
import "./NDVEmptyState-DNwEDTZR.js";
import "./externalSecrets.ee.store-C7xHEDBd.js";
import "./uniqBy-CW5DnRCK.js";
import "./usePinnedData-Bs9REe2E.js";
import "./nodeIcon-DD8Nq4ie.js";
import "./canvas.utils-NT0VdpQR.js";
import "./canvas.eventBus-BzEuwcnY.js";
import "./useCanvasOperations-XFvid-gM.js";
import "./setupPanel.store-DHVkFp1_.js";
import "./nodeTransforms-CgrY1VoY.js";
import "./templateTransforms-DAUIusCv.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./NodeIcon-E2eKe-jx.js";
import "./useRunWorkflow-GiBQIQS_.js";
import "./pushConnection.store-DI9FsxN3.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-8nZnC0dR.js";
import "./dateFormatter-B2XPNznj.js";
import "./useExecutionHelpers-C_Mdy6ht.js";
import "./KeyboardShortcutTooltip-QKY_4PlZ.js";
import "./folders.store-CbB4N3_K.js";
import "./useKeybindings-DV-CkP0X.js";
import "./chatHubPanel.store-C9nVDBiu.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-COhVwF0u.js";
import "./useLogsTreeExpand-BGuVun3G.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-Bwqb7VK6.js";
import "./AnimatedSpinner-39OaIjP3.js";
import "./useResizablePanel-CpDc54nE.js";
import "./aiTemplatesStarterCollection.store-Bzlzz7ok.js";
import "./readyToRunWorkflows.store-B9CMI7kq.js";
import "./useExecutionDebugging-D7E71rFU.js";
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
		const { initializeData, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		useProvideWorkflowId();
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
