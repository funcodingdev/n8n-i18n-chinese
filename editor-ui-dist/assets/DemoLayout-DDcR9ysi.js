import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-UZ2WMbsO.js";
import { bi as useRoute } from "./src-DZTtiFxe.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-C9ftYS5u.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Cc as WorkflowIdKey } from "./constants-B_yD81Xq.js";
import "./merge-05YB9VDi.js";
import "./_baseOrderBy-CFaMwZa0.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-72hE04FI.js";
import "./useClipboard-Cdx8vqKu.js";
import "./executions.store-BS7hmV-N.js";
import "./assistant.store-CpLGX-tA.js";
import "./chatPanel.store-BZDJ_-rl.js";
import "./RunData-Cii8CQnP.js";
import "./NDVEmptyState-72xwWZeR.js";
import "./useEnvFeatureFlag-BW8IVa75.js";
import "./externalSecrets.ee.store-DSGMjbyl.js";
import "./uniqBy-DmTyJH4G.js";
import "./usePinnedData-B5_NdQsP.js";
import "./nodeIcon-CLBpMhM7.js";
import "./canvas.utils-DuefRZOC.js";
import "./nodeCreator.store-DbERHrUd.js";
import "./useCanvasOperations-BATCgmlZ.js";
import "./folders.store-CdB9Kg8u.js";
import "./RunDataHtml-Dprg2oeh.js";
import "./NodeIcon-CknMJCrs.js";
import "./useRunWorkflow-DUkmCjI3.js";
import "./pushConnection.store-0OLv-w-P.js";
import "./vue-json-pretty-BB5lIPuK.js";
import "./collaboration.store-3F0vSZtU.js";
import "./dateFormatter-CIU4fClh.js";
import "./useExecutionHelpers-DYvafuBL.js";
import "./KeyboardShortcutTooltip-u9fw5oK3.js";
import "./useKeybindings-Bad-8WWm.js";
import "./useLogsTreeExpand-DizGaQ6h.js";
import { t as LogsPanel_default } from "./LogsPanel-BRGDyrmN.js";
import "./AnimatedSpinner-DnSOf2rO.js";
import "./useResizablePanel-kUlwXQK3.js";
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
