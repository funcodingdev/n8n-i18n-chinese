import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Bl0j8A0i.js";
import "./src-DNuWeQoI.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-CgsgTstk.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-DEPRN4fc.js";
import "./merge-Ce71GKIY.js";
import "./_baseOrderBy-DCYhjK32.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-s8cKxpSe.js";
import "./versions.store-Do3StdTZ.js";
import "./usePageRedirectionHelper-z-UqKyIw.js";
import "./useClipboard-DQU-cx8i.js";
import "./executions.store-CdHUUuMM.js";
import "./assistant.store-CAphqpQE.js";
import "./chatPanel.store-2G5HkLDr.js";
import "./RunData-BYQf9WgV.js";
import "./NDVEmptyState-B70MfVqc.js";
import "./externalSecrets.ee.store-CNUtZy9l.js";
import "./uniqBy-m6aiwzH4.js";
import "./usePinnedData-DslSYmNn.js";
import "./nodeIcon-CApkz_zp.js";
import "./canvas.utils-BwcAweXC.js";
import "./nodeCreator.store-DWRgYYgl.js";
import "./useCanvasOperations-CP7_bkqF.js";
import "./folders.store-Bmhcjh89.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-DZAR6pbL.js";
import "./useRunWorkflow-BChFNGS3.js";
import "./pushConnection.store-CVjprSAB.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-DgnmUfo8.js";
import "./dateFormatter-BaFwcrv2.js";
import "./useExecutionHelpers-dtDHGr5F.js";
import "./KeyboardShortcutTooltip-DsRUp4Db.js";
import "./useKeybindings-DMkPq03z.js";
import "./useLogsTreeExpand-DZDA04jS.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-Da3xOBUZ.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-D236l_y-.js";
import "./aiTemplatesStarterCollection.store-ioKPXgtU.js";
import "./readyToRunWorkflows.store-Cg-KSDz5.js";
import "./useExecutionDebugging-SK4KCIgU.js";
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
		const { workflowId, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		provide(WorkflowIdKey, workflowId);
		provide(WorkflowDocumentStoreKey, currentWorkflowDocumentStore);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore
		});
		onBeforeMount(() => {
			setupPostMessages();
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
