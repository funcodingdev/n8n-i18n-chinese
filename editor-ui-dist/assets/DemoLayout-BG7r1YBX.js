import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BhiJVBN1.js";
import { Ci as useRoute } from "./src-fKjZmfjv.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-V01ymwEk.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Tc as WorkflowIdKey } from "./constants-dxedTdnr.js";
import "./merge-Ch7EvJB5.js";
import "./_baseOrderBy-D9ro0sYB.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DRfCRtqt.js";
import "./useClipboard-C5Le13oQ.js";
import "./executions.store-CjIRy-YK.js";
import "./assistant.store-1WQmSFts.js";
import "./chatPanel.store-BXZRxA86.js";
import "./RunData-D7CbJzq7.js";
import "./NDVEmptyState-BVApZ8qi.js";
import "./useEnvFeatureFlag-B2u1Bjgc.js";
import "./externalSecrets.ee.store-C50GolIR.js";
import "./uniqBy-D9t4MGKO.js";
import "./usePinnedData-CpMEgjvP.js";
import "./nodeIcon-Bi4E81FS.js";
import "./canvas.utils-Df6_R1uh.js";
import "./nodeCreator.store-C5mN1XoH.js";
import "./useCanvasOperations-BFyU6Gvq.js";
import "./folders.store-B_rpgfRe.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./NodeIcon-BRciE0jp.js";
import "./useRunWorkflow-T2Mb3HKI.js";
import "./pushConnection.store-m4OODaB3.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-BvwvY5wW.js";
import "./dateFormatter-jGhDtpFs.js";
import "./useExecutionHelpers-DwNxmRxs.js";
import "./KeyboardShortcutTooltip-ky7f2v05.js";
import "./useKeybindings-B8dWavhW.js";
import "./useLogsTreeExpand-K9KB_nbl.js";
import { t as LogsPanel_default } from "./LogsPanel-CGZ05OZd.js";
import "./AnimatedSpinner-DxjSO1-I.js";
import "./useResizablePanel-DouLg8Jd.js";
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
