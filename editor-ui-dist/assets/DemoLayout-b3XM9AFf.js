import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Dai8_t5K.js";
import "./src-CWDygSR1.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-w97vXh5N.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Dqd5rpvc.js";
import "./merge-Bihz6yfm.js";
import "./_baseOrderBy-Docd1orE.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BDilYlES.js";
import "./useClipboard-BEaRHkw_.js";
import "./executions.store-AeyWwmo4.js";
import "./assistant.store-DCM4PsFO.js";
import "./chatPanel.store-DFHOZ7tw.js";
import "./RunData-GtdTs0GS.js";
import "./NDVEmptyState-BotZFNaa.js";
import "./externalSecrets.ee.store-D94BUsgl.js";
import "./uniqBy-BXMUpP6_.js";
import "./usePinnedData-CPnFoeXO.js";
import "./nodeIcon-DbPvo_Sy.js";
import "./canvas.utils-DY0w3_Dr.js";
import "./nodeCreator.store-BB96RZCn.js";
import "./useCanvasOperations-CCnJByHp.js";
import "./folders.store-8pwdG93Q.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-CLHp8bez.js";
import "./useRunWorkflow-DKqT5wox.js";
import "./pushConnection.store-DSiQQ4DB.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-C1szTD9s.js";
import "./dateFormatter-DLY7UExu.js";
import "./useExecutionHelpers-HfgZztDK.js";
import "./KeyboardShortcutTooltip-CBN9pr_a.js";
import "./useKeybindings-DN0uNVBL.js";
import "./useLogsTreeExpand-BrOZ8ehp.js";
import { t as LogsPanel_default } from "./LogsPanel-8PGUui9V.js";
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
