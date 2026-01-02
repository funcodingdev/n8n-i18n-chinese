import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-DFZ_JX2a.js";
import "./src-BaYuGLCE.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-B3RPRa4f.js";
import "./overlay-DdG-I6mF.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-Baz9riJe.js";
import { v as useWorkflowsStore } from "./builder.store-CP4jnu3M.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import "./constants-zofUzLiq.js";
import "./merge-BqMZYmTl.js";
import "./_baseOrderBy-DpwiDLPC.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-7q50lKke.js";
import "./assistant.store-PpDOEEHu.js";
import "./chatPanel.store-DbUMUKve.js";
import "./npsSurvey.store-PvFDvUSE.js";
import "./cloudPlan.store-CLEES0cv.js";
import "./templates.store-DsKWgS1v.js";
import "./focusPanel.store-C_9x_E6g.js";
import "./useWorkflowSaving-Bq5eKK6w.js";
import "./retry-CMAFrhVi.js";
import "./executions.store-tXEdnit9.js";
import "./useRunWorkflow-BDcmS92t.js";
import "./usePinnedData-CbVXrGE5.js";
import "./nodeCreator.store-Mce9bWL_.js";
import "./nodeIcon-BJCsOWcE.js";
import "./useClipboard-CrOWRAcs.js";
import "./useCanvasOperations-0wl8s82J.js";
import { t as LogsPanel_default } from "./LogsPanel-DUtjqW_1.js";
import "./folders.store-Cm8U5Tnv.js";
import "./NodeIcon-CilRwBIe.js";
import "./KeyboardShortcutTooltip-Bt3iHo-5.js";
import "./isEmpty-CxWD36fQ.js";
import "./NDVEmptyState-DbgeWAKR.js";
import "./externalSecrets.ee.store-veYJC57G.js";
import "./uniqBy-D8IgXFBV.js";
import "./RunDataHtml-_b8v7-9v.js";
import "./VueMarkdown-CzbDuklm.js";
import "./schemaPreview.store-BIsDCw2R.js";
import "./FileSaver.min--9uV1QmK.js";
import "./vue-json-pretty-B9qWbmOF.js";
import "./dateFormatter-DNloS558.js";
import "./useExecutionHelpers-kZwfgRp4.js";
import "./useKeybindings-BWvGz94c.js";
import "./fileUtils-D3GQ2UWQ.js";
import "./core-CXk6RNMV.js";
import "./ChatFile-8ik4bOn3.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-xOfTLfvN.js";
import "./core-CiWhevuy.js";
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
