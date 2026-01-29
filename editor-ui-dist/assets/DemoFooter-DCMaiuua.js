import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Banis3EH.js";
import "./src-CgIot9tE.js";
import "./truncate-BqCVbASU.js";
import { s as useWorkflowsStore } from "./users.store-DJMeXEOS.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import "./constants-D1Zk0Rfs.js";
import "./merge-pMO1haKT.js";
import "./_baseOrderBy-DkS43jOk.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DvbBkL8g.js";
import "./useClipboard-DCrsFn-y.js";
import "./executions.store-4Hkmqy4W.js";
import "./assistant.store-D1yMU0TP.js";
import "./chatPanel.store-DmFrk5Ml.js";
import "./RunData-CpNegDyI.js";
import "./NDVEmptyState-DNiffSRc.js";
import "./externalSecrets.ee.store-DGTwpJ-9.js";
import "./usePinnedData-l8m0FUN3.js";
import "./nodeCreator.store-COlkWaoN.js";
import "./canvas.utils-BhH2Jmtz.js";
import "./nodeIcon-Cs2CELSF.js";
import "./useCanvasOperations-DULxPsfB.js";
import { t as LogsPanel_default } from "./LogsPanel-DTmua6Xn.js";
import "./folders.store-D8dpBXtT.js";
import "./pushConnection.store-DSUdgSd6.js";
import "./RunDataHtml-BMxc-zRm.js";
import "./NodeIcon-RapIWdlJ.js";
import "./useRunWorkflow-CwICzlT4.js";
import "./vue-json-pretty-CTqCbq0T.js";
import "./collaboration.store-BmApRKTu.js";
import "./dateFormatter-CZnWPiGQ.js";
import "./useExecutionHelpers-BbVNz-aC.js";
import "./KeyboardShortcutTooltip-cjbzIJEc.js";
import "./useKeybindings-CKyOw6hv.js";
import "./ChatFile-DGN9Z6P_.js";
import "./AnimatedSpinner-B25lpnvb.js";
import "./useLogsTreeExpand-BCj7Kuro.js";
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
