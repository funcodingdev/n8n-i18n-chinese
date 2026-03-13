import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B254lxCP.js";
import "./src-i9Rem1HJ.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-pjk3GVP4.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-NfpEUugO.js";
import "./merge-QGykZl3H.js";
import "./_baseOrderBy-WW5xCbr3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-VbLgPqZj.js";
import "./versions.store-DBHWOzd4.js";
import "./usePageRedirectionHelper-4B8pRc9a.js";
import "./useClipboard-Bl4fvLOl.js";
import "./executions.store-D__r2Ug5.js";
import "./assistant.store-B-efES5b.js";
import "./chatPanel.store-BkI3AGvs.js";
import "./RunData-DcZCTGDt.js";
import "./NDVEmptyState-De1_PuhZ.js";
import "./externalSecrets.ee.store-DKoieFDY.js";
import "./uniqBy-DIPdRUfK.js";
import "./usePinnedData-DwevAqbC.js";
import "./nodeIcon-BXVqUawk.js";
import "./canvas.utils-Fh6fe87k.js";
import "./canvas.eventBus-im-no4xr.js";
import "./useCanvasOperations-CjHYoIbe.js";
import "./folders.store-eP-CiqUf.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-zR4ljV2G.js";
import "./useRunWorkflow-C2SzF0cK.js";
import "./pushConnection.store-hwqf9I1l.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BakB84IQ.js";
import "./dateFormatter-Dk94ifWB.js";
import "./useExecutionHelpers-CG7D8PEl.js";
import "./KeyboardShortcutTooltip-BWva8bcA.js";
import "./useKeybindings-C56kkQg_.js";
import "./useLogsTreeExpand-Dh-vtoTk.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-pDQ7kh2H.js";
import "./AnimatedSpinner-DYFB_QLN.js";
import "./useResizablePanel-CigObafB.js";
import "./aiTemplatesStarterCollection.store-pctJAmZ4.js";
import "./readyToRunWorkflows.store-DNUdkj5x.js";
import "./useExecutionDebugging-Ck_awwwU.js";
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
