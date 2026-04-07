import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-C80pWp05.js";
import "./src-DXhOkTfb.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ot as useWorkflowState, s as useWorkflowsStore } from "./users.store-bYJP9NEL.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import { Vc as WorkflowStateKey, zc as WorkflowDocumentStoreKey } from "./constants-neq36s1h.js";
import "./merge-CyZj1oIp.js";
import "./_baseOrderBy-2EL3KkTw.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-CnJGc_VC.js";
import "./versions.store-DRn-fBav.js";
import "./usePageRedirectionHelper-r_VQqP2d.js";
import "./useClipboard-B1HjyDZ5.js";
import "./executions.store-CXfJa1PO.js";
import "./assistant.store-Hv2aiFHq.js";
import "./chatPanel.store-CNq_-Rf2.js";
import "./RunData-DdcHm1OG.js";
import "./NDVEmptyState-CVg1Bg2x.js";
import "./externalSecrets.ee.store-_S24qRr8.js";
import "./uniqBy-DJ2emvPb.js";
import "./usePinnedData-D6iG-vVW.js";
import "./nodeIcon-DVYiuXDq.js";
import "./canvas.utils-I742fAt-.js";
import "./canvas.eventBus-CHyag3df.js";
import "./useCanvasOperations-Cc3fbdBt.js";
import "./setupPanel.store-CAfS8IPe.js";
import "./nodeTransforms-BQzHSoiA.js";
import "./templateTransforms-Bl0C8A0m.js";
import "./RunDataHtml-BTVImKhi.js";
import "./NodeIcon-Df-cIZ1j.js";
import "./useRunWorkflow-BgxUvcZG.js";
import "./pushConnection.store-CVCuUA8u.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-BHVxfZAc.js";
import "./dateFormatter-ChtiEljD.js";
import "./useExecutionHelpers-CORCJaOn.js";
import "./KeyboardShortcutTooltip-B8YykjpW.js";
import "./folders.store-9rCuieqg.js";
import "./useKeybindings-D6ZApcVM.js";
import "./chatHubPanel.store-Dzn9QQx1.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-CfXLn9zy.js";
import "./useLogsTreeExpand-Dck0Z1Y_.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DR_K49oj.js";
import "./AnimatedSpinner-CXuCLAoO.js";
import "./useResizablePanel-DMngwO3h.js";
import "./aiTemplatesStarterCollection.store-slvsF2bb.js";
import "./readyToRunWorkflows.store-B9Onn6Qi.js";
import "./useExecutionDebugging-BApHqR0r.js";
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
