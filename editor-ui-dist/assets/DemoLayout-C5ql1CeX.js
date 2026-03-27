import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-BFpNgXhv.js";
import "./src-C1Fv__jy.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-Bu2w-Rub.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-B8dhY4J-.js";
import "./merge-B2S5Sbon.js";
import "./_baseOrderBy-BvZrFzTC.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BlJA7mcw.js";
import "./versions.store-BV4ECOMQ.js";
import "./usePageRedirectionHelper-Dgke26Ay.js";
import "./useClipboard-tJYXwz0E.js";
import "./executions.store-Aq_QFXqV.js";
import "./assistant.store-3Tres37h.js";
import "./chatPanel.store-QcR0P27J.js";
import "./RunData-BrynoUeU.js";
import "./NDVEmptyState-RunpiqdS.js";
import "./externalSecrets.ee.store-WUogAmwT.js";
import "./uniqBy-CvKYYNJG.js";
import "./usePinnedData-r8Zix2RN.js";
import "./nodeIcon-DeauzqEi.js";
import "./canvas.utils-BbjPIdL6.js";
import "./canvas.eventBus-DI4LH7au.js";
import "./useCanvasOperations-kxEveOgN.js";
import "./setupPanel.store-DPLYkTKY.js";
import "./nodeTransforms-D-iV-JfI.js";
import "./templateTransforms-CY79NPsp.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./NodeIcon-DJtG-u9g.js";
import "./useRunWorkflow-DngvZa95.js";
import "./pushConnection.store-CQ3MEvdF.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-CJp70iQu.js";
import "./dateFormatter-CpP8aweo.js";
import "./useExecutionHelpers-BwUr0SMH.js";
import "./KeyboardShortcutTooltip-CG9nHdEi.js";
import "./folders.store-Dm1uSNVe.js";
import "./useKeybindings-BFaq2cuM.js";
import "./chatHubPanel.store-DC1Qavvq.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-BGMJU7-v.js";
import "./useLogsTreeExpand-lbDEI4QG.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-BHWo30Wj.js";
import "./AnimatedSpinner-39OaIjP3.js";
import "./useResizablePanel-pb4mL1eK.js";
import "./aiTemplatesStarterCollection.store-BuPtXnnT.js";
import "./readyToRunWorkflows.store-Di1J21rf.js";
import "./useExecutionDebugging-QrhmHmzS.js";
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
