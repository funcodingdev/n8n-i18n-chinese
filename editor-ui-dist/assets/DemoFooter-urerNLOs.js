import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-WB-ZLHq4.js";
import "./src-aOeokM-B.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-D51dJrpW.js";
import "./icon-DbRNM3BY.js";
import "./overlay-Dzv2Wqg2.js";
import "./empty-C2SrrehM.js";
import "./useMessage-9sD6hUU0.js";
import { o as useWorkflowsStore } from "./useTelemetry-fX8cvQe2.js";
import "./useToast-DhtBVxde.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-0OA-5Cg4.js";
import "./merge-DVRhUwJL.js";
import "./assistant.store-CvUPU_Dw.js";
import "./_baseOrderBy-CmlQEDFB.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-C59RSHk-.js";
import "./useExternalHooks-CStf1glV.js";
import "./useStyles-DhM0cpS7.js";
import "./chatPanel.store-D90XLg9I.js";
import "./npsSurvey.store-BSw0qIoL.js";
import "./cloudPlan.store-CGLk5JMm.js";
import "./templates.store-BGBUfU11.js";
import "./focusPanel.store-Cp5gZh4j.js";
import "./useWorkflowSaving-DVHiEN1P.js";
import "./retry-CalJieID.js";
import "./executions.store-jq3zf1Mj.js";
import "./useRunWorkflow-CuS_q4Fe.js";
import "./usePinnedData-DMOnPYse.js";
import "./nodeCreator.store-DfAjRvxz.js";
import "./nodeIcon-CMJv_dmQ.js";
import "./useClipboard-Bbamfefe.js";
import "./useCanvasOperations-YULAapmT.js";
import { t as LogsPanel_default } from "./LogsPanel-_275L9qp.js";
import "./folders.store-DAzrxKi8.js";
import "./NodeIcon-kidSdOPV.js";
import "./KeyboardShortcutTooltip-Fhv9KfTl.js";
import "./isEmpty-ClDJOWLE.js";
import "./NDVEmptyState-D8_p7lys.js";
import "./externalSecrets.ee.store-DbG3nsyX.js";
import "./uniqBy-DYX7sRqO.js";
import "./RunDataHtml-CWUzYFMz.js";
import "./VueMarkdown-Bki7lPnC.js";
import "./schemaPreview.store-Cbff0Zd3.js";
import "./FileSaver.min-BZ3jw69B.js";
import "./vue-json-pretty-DsYkKELy.js";
import "./dateFormatter-DpdWRYG2.js";
import "./useExecutionHelpers-CjDkFdWt.js";
import "./fileUtils-BIVczUdz.js";
import "./useKeybindings-czmMf3GR.js";
import "./core-DntzLlqD.js";
import "./ChatFile-CMXjuFjq.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-Gn5Ln3vY.js";
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
