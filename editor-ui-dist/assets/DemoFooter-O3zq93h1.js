import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-2ioEvZYA.js";
import "./src-BVN6Mf06.js";
import "./truncate-CUYRcmyX.js";
import { s as useWorkflowsStore } from "./users.store-ulQ70fBG.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import "./constants-nQXbHNhY.js";
import "./merge-CVfWtail.js";
import "./_baseOrderBy-BPGTiuJr.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-CT56Eqsh.js";
import "./useClipboard-BFWrhX4b.js";
import "./executions.store-f0oUSItF.js";
import "./assistant.store-B53r6LQr.js";
import "./chatPanel.store-k9lB5nbu.js";
import "./RunData-CsP025oW.js";
import "./NDVEmptyState-CqfYnqLu.js";
import "./externalSecrets.ee.store-BbiiQQX5.js";
import "./usePinnedData-Bp6IBaLH.js";
import "./nodeCreator.store-Cp425dHp.js";
import "./canvas.utils-BC3WMYlS.js";
import "./nodeIcon-BjwxSXwH.js";
import "./useCanvasOperations-DYYbYmNl.js";
import { t as LogsPanel_default } from "./LogsPanel-CwpU7u5G.js";
import "./folders.store-Gd-gTVOb.js";
import "./pushConnection.store-BGWjwCjR.js";
import "./RunDataHtml-BMxc-zRm.js";
import "./NodeIcon-DcHHfABy.js";
import "./useRunWorkflow-DlvZETaP.js";
import "./vue-json-pretty-CTqCbq0T.js";
import "./collaboration.store-CCEwZBGb.js";
import "./dateFormatter-D0y2OSYN.js";
import "./useExecutionHelpers-D5ToU8i0.js";
import "./KeyboardShortcutTooltip-CP2lWcJW.js";
import "./useKeybindings-S1n1gDFL.js";
import "./ChatFile-DGN9Z6P_.js";
import "./AnimatedSpinner-B25lpnvb.js";
import "./useLogsTreeExpand-B--lZJID.js";
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
export { DemoFooter_default as default };
