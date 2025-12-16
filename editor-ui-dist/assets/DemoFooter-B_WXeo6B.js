import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-Bkr0M48W.js";
import "./src-Cz8bdsWg.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-Br6bKSnz.js";
import "./icon-CFf5tU6n.js";
import "./overlay-C2Gm6yaw.js";
import "./empty-C2SrrehM.js";
import "./useMessage-XnLM-iYa.js";
import { o as useWorkflowsStore } from "./useTelemetry-F1cLDt40.js";
import "./useToast-DwhNu6O6.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-D65dAEd5.js";
import "./merge-CqRJC8Rq.js";
import "./assistant.store-Ch4XKv59.js";
import "./_baseOrderBy-zPjeknZ0.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-CxR5wG0F.js";
import "./useExternalHooks-BdLzYczL.js";
import "./useStyles-DhM0cpS7.js";
import "./chatPanel.store-Gcvw20yf.js";
import "./npsSurvey.store-DhfxsMNl.js";
import "./cloudPlan.store-BS_8dmdr.js";
import "./templates.store-4TAH8TVr.js";
import "./focusPanel.store-DEfjQxia.js";
import "./useWorkflowSaving-bTSiCacy.js";
import "./retry-CalJieID.js";
import "./executions.store-jNz2c6jB.js";
import "./useRunWorkflow-DaaNkFM7.js";
import "./usePinnedData-CvEZMYoN.js";
import "./nodeCreator.store-CEAUOQuw.js";
import "./nodeIcon-CQLPBK6W.js";
import "./useClipboard-BglU_iyn.js";
import "./useCanvasOperations-FLUJJojp.js";
import { t as LogsPanel_default } from "./LogsPanel-BYJgiKuc.js";
import "./folders.store-CgYefTmm.js";
import "./NodeIcon-B44kEKBt.js";
import "./KeyboardShortcutTooltip-DEZmdQB0.js";
import "./isEmpty-C5Fn6_d5.js";
import "./NDVEmptyState-WWLfjcwd.js";
import "./externalSecrets.ee.store-i7PVB_dI.js";
import "./uniqBy-DB3S5TUX.js";
import "./RunDataHtml-CWUzYFMz.js";
import "./VueMarkdown-D56AUcfC.js";
import "./schemaPreview.store-DEPltXQA.js";
import "./FileSaver.min-BZ3jw69B.js";
import "./vue-json-pretty-DsYkKELy.js";
import "./dateFormatter-bgHaEILb.js";
import "./useExecutionHelpers-DERCjS29.js";
import "./fileUtils-BIVczUdz.js";
import "./useKeybindings-hVCU5Rr1.js";
import "./core-B834MECE.js";
import "./ChatFile-BbL40HHy.js";
import "./xml-BP5i5VLm.js";
import "./AnimatedSpinner-BKvs0-tV.js";
import "./useLogsTreeExpand-CFIyJW4a.js";
import "./core-DNyEixOf.js";
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
