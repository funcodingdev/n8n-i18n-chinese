import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-COzuLMdL.js";
import "./src-BvUzUaLE.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ot as useWorkflowState, s as useWorkflowsStore } from "./users.store-Qyayth1w.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import { Vc as WorkflowStateKey, zc as WorkflowDocumentStoreKey } from "./constants-CbM6Kczw.js";
import "./merge-Bt9d3GSb.js";
import "./_baseOrderBy-DWejZi4o.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-DzkgMLTI.js";
import "./versions.store-C8C8jOK6.js";
import "./usePageRedirectionHelper-BHOLpoNq.js";
import "./useClipboard-BWqYzY1b.js";
import "./executions.store-CZVSqgkG.js";
import "./assistant.store-n7YbUFsH.js";
import "./chatPanel.store-CeY6_pL_.js";
import "./RunData-DtcbVOMq.js";
import "./NDVEmptyState-CnRh5qxJ.js";
import "./externalSecrets.ee.store-BUP4UyQ6.js";
import "./uniqBy-4EqtcIN9.js";
import "./usePinnedData-D0I3IPdg.js";
import "./nodeIcon-B4FMjHPj.js";
import "./canvas.utils-wNLuSy5w.js";
import "./canvas.eventBus-BeMGLVv1.js";
import "./useCanvasOperations-DK2z0FQ_.js";
import "./setupPanel.store-6vkDnRUS.js";
import "./nodeTransforms-fyYeHICA.js";
import "./templateTransforms-D_S2oYHe.js";
import "./RunDataHtml-BTVImKhi.js";
import "./NodeIcon-KIuAUrWX.js";
import "./useRunWorkflow-CeRLv-a6.js";
import "./pushConnection.store-DzbGSScq.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-slU7leRI.js";
import "./dateFormatter-Bej0iQ6f.js";
import "./useExecutionHelpers-DWnDw3K7.js";
import "./KeyboardShortcutTooltip-GKmWBYWd.js";
import "./folders.store-ulNNntFh.js";
import "./useKeybindings-CvSgOTGT.js";
import "./chatHubPanel.store-CeWcnbsR.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-1om9V3Eg.js";
import "./useLogsTreeExpand-Badtz_Vi.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-Dxxeanyr.js";
import "./AnimatedSpinner-CXuCLAoO.js";
import "./useResizablePanel-BMxfX1YK.js";
import "./aiTemplatesStarterCollection.store-C_EEfQ9s.js";
import "./readyToRunWorkflows.store-7gLKVL9f.js";
import "./useExecutionDebugging-zsR14r_G.js";
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
