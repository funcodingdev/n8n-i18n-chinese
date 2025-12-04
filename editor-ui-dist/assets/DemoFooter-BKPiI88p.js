import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-Blne6VeP.js";
import "./src-K-ysFfvA.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-B6V3BCxD.js";
import "./icon-Bwxqkz6b.js";
import "./overlay-C944dmbO.js";
import "./empty-C2SrrehM.js";
import "./useMessage-CPDVYydD.js";
import { o as useWorkflowsStore } from "./useTelemetry-BptP8y2R.js";
import "./useToast-CgdJyGuK.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-C1tPaXRr.js";
import "./merge-BMIIWfjy.js";
import "./assistant.store-B502mEci.js";
import "./_baseOrderBy-LtFDYziM.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-B5py4jN5.js";
import "./useExternalHooks-BhreC2H_.js";
import "./useStyles-DhM0cpS7.js";
import "./chatPanel.store-CwEHYw1b.js";
import "./npsSurvey.store-BzdFCZKC.js";
import "./cloudPlan.store-BW3QNVfR.js";
import "./templates.store-CAPLISh_.js";
import "./focusPanel.store-D2c95gYT.js";
import "./useWorkflowSaving-Cu9nuUYP.js";
import "./retry-CalJieID.js";
import "./executions.store-DS6_EM_0.js";
import "./useRunWorkflow-CY8R_-Sq.js";
import "./usePinnedData-wJzUkDWs.js";
import "./nodeCreator.store-DP8K6669.js";
import "./nodeIcon-B2-ppY7G.js";
import "./useClipboard-ByJ4nBbg.js";
import "./useCanvasOperations-BEOM4taW.js";
import { t as LogsPanel_default } from "./LogsPanel-DR97oSrV.js";
import "./folders.store-uz6hm1Vg.js";
import "./NodeIcon-Bzi8M5zn.js";
import "./KeyboardShortcutTooltip-DpeYjjZi.js";
import "./isEmpty-DglKKpUC.js";
import "./NDVEmptyState-D0IKIqES.js";
import "./externalSecrets.ee.store-DN06UfaI.js";
import "./uniqBy-BiTnLAnv.js";
import "./RunDataHtml-CWUzYFMz.js";
import "./VueMarkdown-BAxMqXTk.js";
import "./schemaPreview.store-CDh90hWy.js";
import "./FileSaver.min-BZ3jw69B.js";
import "./vue-json-pretty-DsYkKELy.js";
import "./dateFormatter-C8TiVaID.js";
import "./useExecutionHelpers-BjXBk09Z.js";
import "./fileUtils-BIVczUdz.js";
import "./useKeybindings-DpjNA9HG.js";
import "./core-DntzLlqD.js";
import "./ChatFile-CMXjuFjq.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-DcWTkIDk.js";
import "./core-CHHLv5cF.js";
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
