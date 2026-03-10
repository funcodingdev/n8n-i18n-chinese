import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-DwkzWRqU.js";
import "./src-GXsra_I5.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-DSeNCs16.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-DFXtU1Pw.js";
import "./merge-CKdiHidc.js";
import "./_baseOrderBy-COGSHfpp.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-q-aewVnG.js";
import "./versions.store-0KhR93TZ.js";
import "./usePageRedirectionHelper-CeCcUN8g.js";
import "./useClipboard-CGjjqaqQ.js";
import "./executions.store-30t4F5WB.js";
import "./assistant.store-D4G-iVGk.js";
import "./chatPanel.store-BT_ynfe0.js";
import "./RunData-CfhKkpLl.js";
import "./NDVEmptyState-DBcaOHDZ.js";
import "./externalSecrets.ee.store-BWPCsq3Z.js";
import "./uniqBy-DIMlDJ3D.js";
import "./usePinnedData-BF1rKVo9.js";
import "./nodeIcon-BMRXYoUK.js";
import "./canvas.utils-CEDTlx4N.js";
import "./canvas.eventBus-B9SGSxxt.js";
import "./useCanvasOperations-CednDKIa.js";
import "./folders.store-DKweL38s.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-ARAzHKT2.js";
import "./useRunWorkflow-DjJ0mX2w.js";
import "./pushConnection.store-CwvPFQVx.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BsG87CXt.js";
import "./dateFormatter-D5c8u43g.js";
import "./useExecutionHelpers-labeYe8w.js";
import "./KeyboardShortcutTooltip-vazuCnnx.js";
import "./useKeybindings-BYqiw-Cj.js";
import "./useLogsTreeExpand-DDKQp4jP.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-Do5vLURq.js";
import "./AnimatedSpinner-DYFB_QLN.js";
import "./useResizablePanel-DYBTMQNZ.js";
import "./aiTemplatesStarterCollection.store-DLghvtX1.js";
import "./readyToRunWorkflows.store-CKtqphBi.js";
import "./useExecutionDebugging-BOo52dgs.js";
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
