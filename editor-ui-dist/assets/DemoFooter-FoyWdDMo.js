import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-BFta_wF2.js";
import "./src-Dgw1jSNG.js";
import "./truncate-BVvZEb44.js";
import { s as useWorkflowsStore } from "./users.store-BX4SQRjF.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import "./constants-Cq5ZtHYb.js";
import "./merge-BL_GGzIR.js";
import "./_baseOrderBy-DFuB-K4e.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-BlrbJyx5.js";
import "./useClipboard-Bh6hCppS.js";
import "./executions.store-QUoJBI29.js";
import "./assistant.store-F3YAM4Tw.js";
import "./chatPanel.store-CLL_68op.js";
import "./RunData-DC6Fs_Il.js";
import "./NDVEmptyState-CiwMR3IY.js";
import "./externalSecrets.ee.store-CCrcnq12.js";
import "./usePinnedData-C5xI-e4Y.js";
import "./nodeCreator.store-yQnFUBX1.js";
import "./canvas.utils-C2h2OPdL.js";
import "./nodeIcon-DOOBEaOy.js";
import "./useCanvasOperations-Bzd_VbnF.js";
import { t as LogsPanel_default } from "./LogsPanel-Cfgee_JF.js";
import "./folders.store-oj5I07kC.js";
import "./pushConnection.store-B0xI2d21.js";
import "./RunDataHtml-BMxc-zRm.js";
import "./NodeIcon-DjXcZAZY.js";
import "./useRunWorkflow-BOnfz51x.js";
import "./vue-json-pretty-CTqCbq0T.js";
import "./collaboration.store-B2RZAmqe.js";
import "./dateFormatter-CWkAkB-j.js";
import "./useExecutionHelpers-D8nV0Ymx.js";
import "./KeyboardShortcutTooltip-DI-mWeS8.js";
import "./useKeybindings-HZKbNVRs.js";
import "./ChatFile-DGN9Z6P_.js";
import "./AnimatedSpinner-B25lpnvb.js";
import "./useLogsTreeExpand--LYTLd00.js";
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
