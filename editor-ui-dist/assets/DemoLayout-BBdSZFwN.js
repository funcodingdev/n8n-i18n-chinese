import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache--L8adXi_.js";
import "./src-DWsTOZiq.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-Sw4oHdJA.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-C3KfTTly.js";
import "./merge-DjxP3JHE.js";
import "./_baseOrderBy-BACeL77R.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DyfAlHJb.js";
import "./versions.store-DQTr37Y7.js";
import "./usePageRedirectionHelper-B_JO0oEg.js";
import "./useClipboard-DUVW12aX.js";
import "./executions.store-_7d9ev4e.js";
import "./assistant.store-0KmEXlD7.js";
import "./chatPanel.store-CDCIr--i.js";
import "./RunData-DYgvwsEH.js";
import "./NDVEmptyState-CCQIUWsT.js";
import "./externalSecrets.ee.store-DGI6OZ1I.js";
import "./uniqBy-jlKsgmiA.js";
import "./usePinnedData-CXtPmhAX.js";
import "./nodeIcon-IyeWTxCP.js";
import "./canvas.utils-CkJ5V5RF.js";
import "./canvas.eventBus-BydD8zVz.js";
import "./useCanvasOperations-CJRh2Vr3.js";
import "./setupPanel.store-BiMbfKDK.js";
import "./nodeTransforms-CUcky-fs.js";
import "./templateTransforms-CdXuJb6D.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./NodeIcon-Ckjj4qv-.js";
import "./useRunWorkflow-C1jL9RFq.js";
import "./pushConnection.store-_XKDoJMI.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-BX8zAbnn.js";
import "./dateFormatter-CTl59i2g.js";
import "./useExecutionHelpers-D_VqlLp-.js";
import "./KeyboardShortcutTooltip-DNxAB_ov.js";
import "./folders.store-CwawaN0b.js";
import "./useKeybindings-YLfeG_AN.js";
import "./chatHubPanel.store-DrbhstQR.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-BvMsklSG.js";
import "./useLogsTreeExpand-D9nWP01l.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-CIDFvutq.js";
import "./AnimatedSpinner-39OaIjP3.js";
import "./useResizablePanel-CIamssN5.js";
import "./aiTemplatesStarterCollection.store-CjP4jToG.js";
import "./readyToRunWorkflows.store-DNE6QSul.js";
import "./useExecutionDebugging-DJIyLd_H.js";
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
