import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-B3wBxKdj.js";
import "./src-C0PfBnSv.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-5E8n_f_n.js";
import "./icon-DjIleTpX.js";
import "./overlay-B543wnZg.js";
import "./empty-C2SrrehM.js";
import "./useMessage-DeRB80ZY.js";
import { o as useWorkflowsStore } from "./useTelemetry-DNwFBRX7.js";
import "./useToast-CyeeQKoz.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-ASQneu7i.js";
import "./merge-D31ghcsp.js";
import "./assistant.store-jCKFL1BA.js";
import "./_baseOrderBy-Um45iusw.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-B6sO5jq1.js";
import "./useExternalHooks-CpxhaYt5.js";
import "./useStyles-DhM0cpS7.js";
import "./chatPanel.store-Dmu6-UkQ.js";
import "./npsSurvey.store-BcZTndze.js";
import "./cloudPlan.store-Bjqyl74W.js";
import "./templates.store-BPoIF67b.js";
import "./focusPanel.store-Cv6jo_B7.js";
import "./useWorkflowSaving-DTbC8DRV.js";
import "./retry-CalJieID.js";
import "./executions.store-CLEf8zUD.js";
import "./useRunWorkflow-C9IpVLPp.js";
import "./usePinnedData-CkMYa6uj.js";
import "./nodeCreator.store-Dpj0w5xX.js";
import "./nodeIcon-CG_CaIAh.js";
import "./useClipboard-DRFnsd5e.js";
import "./useCanvasOperations-Dyrqcrnm.js";
import { t as LogsPanel_default } from "./LogsPanel-DD-s0AOl.js";
import "./folders.store-Csl5oYv1.js";
import "./NodeIcon-DzJDWS6j.js";
import "./KeyboardShortcutTooltip-aSFa8VJa.js";
import "./isEmpty-CFq4EPiB.js";
import "./NDVEmptyState-sNIZRxNi.js";
import "./externalSecrets.ee.store-CMJLkZKQ.js";
import "./uniqBy-EN1z9tiz.js";
import "./RunDataHtml-CWUzYFMz.js";
import "./VueMarkdown-Qh0Jp_T4.js";
import "./schemaPreview.store-DZ2rXUA4.js";
import "./FileSaver.min-BZ3jw69B.js";
import "./vue-json-pretty-DsYkKELy.js";
import "./dateFormatter-BgxauX--.js";
import "./useExecutionHelpers-DBGJcrQv.js";
import "./fileUtils-BIVczUdz.js";
import "./useKeybindings-MkhErd4w.js";
import "./core-CKCNqU8h.js";
import "./ChatFile-D4bsjVxx.js";
import "./xml-ByhzxXn2.js";
import "./AnimatedSpinner-D6Q37maL.js";
import "./useLogsTreeExpand-tVN9wlOz.js";
import "./core-C5Tnrk_H.js";
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
