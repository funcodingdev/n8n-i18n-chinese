import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-7s9WlDJz.js";
import "./src-BmkbTfty.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-BuTOTUJu.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-4mYM-BCx.js";
import "./merge-DIySfLBl.js";
import "./_baseOrderBy-C9x_k_9m.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-q3EZxFLd.js";
import "./versions.store-BSeJNXsx.js";
import "./usePageRedirectionHelper-CrRYpHck.js";
import "./useClipboard-De4Pc5kX.js";
import "./executions.store-rI--m9dR.js";
import "./assistant.store-DqNt79Az.js";
import "./chatPanel.store-CptX1KKU.js";
import "./RunData-CNJYelOf.js";
import "./NDVEmptyState-CEgrBtsb.js";
import "./externalSecrets.ee.store-C08G8-MG.js";
import "./uniqBy-ICYm5Bnn.js";
import "./usePinnedData-B25BjKte.js";
import "./nodeIcon-DXpX28qV.js";
import "./canvas.utils-DDNpbd20.js";
import "./nodeCreator.store-BkvRFjbm.js";
import "./useCanvasOperations-COiTkqAi.js";
import "./folders.store-PpGQTRLC.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-BWZ3CJAT.js";
import "./useRunWorkflow-DhXStslV.js";
import "./pushConnection.store-DUVlJlAs.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-ByrR_him.js";
import "./dateFormatter-Cv7TTA8K.js";
import "./useExecutionHelpers-Dxhi1bGm.js";
import "./KeyboardShortcutTooltip-BE5OR9r9.js";
import "./useKeybindings-1aYOI4UR.js";
import "./useLogsTreeExpand-DoXFh4yL.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-z61sDwOP.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-lvSBEVda.js";
import "./aiTemplatesStarterCollection.store-BjgIGIkY.js";
import "./readyToRunWorkflows.store-BpT3PZ-R.js";
import "./useExecutionDebugging-D3YW16aZ.js";
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
