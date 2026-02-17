import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-bZK-mH1x.js";
import { bi as useRoute } from "./src-Bv1Pmwk0.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-m21ecfQE.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Cc as WorkflowIdKey } from "./constants-DyCBvby_.js";
import "./merge-KW8DRp15.js";
import "./_baseOrderBy-pei3qMdR.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BqsT-emR.js";
import "./useClipboard-DN0svLs7.js";
import "./executions.store-c6yugqYs.js";
import "./assistant.store-D-g4O39l.js";
import "./chatPanel.store-BqLB9-zs.js";
import "./RunData-BPzRYYyw.js";
import "./NDVEmptyState-BVMAG_tE.js";
import "./useEnvFeatureFlag-CLgWaXkz.js";
import "./externalSecrets.ee.store-D5saY0mM.js";
import "./uniqBy-_hM7lFnt.js";
import "./usePinnedData-VT6ATACB.js";
import "./nodeIcon-CsHpojQP.js";
import "./canvas.utils-pgZ5Bbxb.js";
import "./nodeCreator.store-CHGzVaPf.js";
import "./useCanvasOperations-arQ9BrAQ.js";
import "./folders.store-C7BxTlZm.js";
import "./RunDataHtml-Dprg2oeh.js";
import "./NodeIcon-B4vkW-fU.js";
import "./useRunWorkflow-BNVUAcu7.js";
import "./pushConnection.store-BjMlZW50.js";
import "./vue-json-pretty-BB5lIPuK.js";
import "./collaboration.store-CgEA00nm.js";
import "./dateFormatter-B-v1MUuj.js";
import "./useExecutionHelpers-Dw7Fpn64.js";
import "./KeyboardShortcutTooltip-L_R2A2dh.js";
import "./useKeybindings-DAj1EUIU.js";
import "./useLogsTreeExpand-F6bJM6BP.js";
import { t as LogsPanel_default } from "./LogsPanel-uhtz_x99.js";
import "./AnimatedSpinner-DnSOf2rO.js";
import "./useResizablePanel-BqoARLrC.js";
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
