import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BBTLzXgM.js";
import "./src-BITqouBc.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-BPj3XTmq.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-CBEYCjLn.js";
import "./merge-BaEehfYj.js";
import "./_baseOrderBy-5iurxHHF.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-B5Huo4lB.js";
import "./versions.store-BMPHshwX.js";
import "./usePageRedirectionHelper-VUXvWB8V.js";
import "./useClipboard-se9rRdHV.js";
import "./executions.store-DQOq1HdD.js";
import "./assistant.store-LdlH3WUn.js";
import "./chatPanel.store-D1ORbh3l.js";
import "./RunData-BsJH6Rde.js";
import "./NDVEmptyState-BHSzNbFI.js";
import "./externalSecrets.ee.store-CdmPzvyQ.js";
import "./uniqBy-CoNpzoVk.js";
import "./usePinnedData-DQ8vywD3.js";
import "./nodeIcon-CzAlSpGu.js";
import "./canvas.utils-CjCJ8R_v.js";
import "./canvas.eventBus-kPSHTKdE.js";
import "./useCanvasOperations-DASum_XI.js";
import "./folders.store-CL7P5e6m.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-DrhsB4EO.js";
import "./useRunWorkflow-gqN-Mw6J.js";
import "./pushConnection.store-Dllbaq_T.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-KWYjj5lF.js";
import "./dateFormatter-CIZC2udK.js";
import "./useExecutionHelpers-CeN1ATdm.js";
import "./KeyboardShortcutTooltip-Cu5GWZL2.js";
import "./useKeybindings-B5HJkh3O.js";
import "./useLogsTreeExpand-CTkkpzz6.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-Be3UG6MH.js";
import "./AnimatedSpinner-DYFB_QLN.js";
import "./useResizablePanel-CsVEjupJ.js";
import "./aiTemplatesStarterCollection.store-C1s8Fw9m.js";
import "./readyToRunWorkflows.store-BupKOUik.js";
import "./useExecutionDebugging-BPq80RuO.js";
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
