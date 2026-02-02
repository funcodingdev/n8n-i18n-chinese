import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BRoeWkyP.js";
import "./src-BNc_2bHf.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-Xk7McM6o.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-B-_GdCoL.js";
import "./merge-Dbz2MpYT.js";
import "./_baseOrderBy-Bs_4IhiB.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BLKt5VoA.js";
import "./useClipboard-d-QUy4zu.js";
import "./executions.store-WRuNPJGt.js";
import "./assistant.store-Bmu2PYJv.js";
import "./chatPanel.store-BJVMZ7at.js";
import "./RunData-BrFjwHwr.js";
import "./NDVEmptyState-DdkiKHaf.js";
import "./externalSecrets.ee.store-CL0vZ1z_.js";
import "./uniqBy-Cp_MDjQ7.js";
import "./usePinnedData-Djdw53o9.js";
import "./nodeIcon-CxQoZIGq.js";
import "./canvas.utils-akH8haRX.js";
import "./nodeCreator.store-BpqWtl4Y.js";
import "./useCanvasOperations-DDjyXV4r.js";
import "./folders.store-qinaeGKi.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-lhWSdDBz.js";
import "./useRunWorkflow-Bevrz6WB.js";
import "./pushConnection.store-Ceiyt_wy.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-CjnrUw8m.js";
import "./dateFormatter-CQDz4yfT.js";
import "./useExecutionHelpers-BA9QMsei.js";
import "./KeyboardShortcutTooltip-C7NzTLc7.js";
import "./useKeybindings-DYuGYFP7.js";
import "./useLogsTreeExpand-CYR5SCnw.js";
import { t as LogsPanel_default } from "./LogsPanel-RZkYxkhy.js";
import "./AnimatedSpinner-BHDG51rn.js";
import "./ChatFile-D7N9M2uo.js";
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
