import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-QsspBGu3.js";
import { yi as useRoute } from "./src-BEm78MRO.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-DL0zLgIY.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { xc as WorkflowIdKey } from "./constants-DHjkuIny.js";
import "./merge-DbYy2v29.js";
import "./_baseOrderBy-DJiV7OMR.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BOxncLS8.js";
import "./useClipboard-BDcqZvq8.js";
import "./executions.store-CNXJjQR3.js";
import "./assistant.store-DEYh81yU.js";
import "./chatPanel.store-DwhBKsBk.js";
import "./RunData-BgFxWoF9.js";
import "./NDVEmptyState-CgFnFW8u.js";
import "./useEnvFeatureFlag-D9ihcKzw.js";
import "./externalSecrets.ee.store-CTsNS0Gu.js";
import "./uniqBy-DwbbXFb-.js";
import "./usePinnedData-C4-QbumM.js";
import "./nodeIcon-BubRMeQF.js";
import "./canvas.utils-CNSSOCqc.js";
import "./nodeCreator.store-Drqk1vCE.js";
import "./useCanvasOperations-Ba_BdWL2.js";
import "./folders.store-7FWLVs_Q.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-BvN6XX4R.js";
import "./useRunWorkflow-BoEbaUrG.js";
import "./pushConnection.store-BegovlW1.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-DZOfMoVU.js";
import "./dateFormatter-9uXPLYZ3.js";
import "./useExecutionHelpers-BZ-7pz0q.js";
import "./KeyboardShortcutTooltip-Czu0Hhz4.js";
import "./useKeybindings-CWjGJY6q.js";
import "./useLogsTreeExpand-DDyEHcKb.js";
import { t as LogsPanel_default } from "./LogsPanel-ChnJ64bT.js";
import "./AnimatedSpinner--2Ek9VrF.js";
import "./ChatFile-BrXecLHH.js";
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
		const route = useRoute();
		provide(WorkflowIdKey, computed(() => {
			const name = route.params.name;
			return Array.isArray(name) ? name[0] : name;
		}));
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
