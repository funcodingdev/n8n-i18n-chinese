import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-Yj8N6E8I.js";
import "./src-BElBUbx7.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-BE376beJ.js";
import "./icon-DWED0Ply.js";
import "./overlay-RkybHYcZ.js";
import "./empty-C2SrrehM.js";
import "./useMessage-Bsq4eS__.js";
import { o as useWorkflowsStore } from "./useTelemetry-3MMgvAsT.js";
import "./useToast-dRBi8k5x.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-DiFLTnfN.js";
import "./merge-BxuOQkcT.js";
import "./assistant.store-CFaSSFck.js";
import "./_baseOrderBy-DYfm-2b2.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-COwwFHrZ.js";
import "./useExternalHooks-nZMP18nx.js";
import "./useStyles-DhM0cpS7.js";
import "./chatPanel.store-DBeFH_fc.js";
import "./npsSurvey.store-Cu0UVT9O.js";
import "./cloudPlan.store-C6z_c_jO.js";
import "./templates.store-BiV9HpXp.js";
import "./focusPanel.store-DK9DU_36.js";
import "./useWorkflowSaving-C4Xhu9Gi.js";
import "./retry-CalJieID.js";
import "./executions.store-BYZFGy5s.js";
import "./useRunWorkflow-DIZE8akL.js";
import "./usePinnedData-DdTi3Fj9.js";
import "./nodeCreator.store-BK1EGdAK.js";
import "./nodeIcon-ByDOxr1n.js";
import "./useClipboard-Dkxl42Zm.js";
import "./useCanvasOperations-B2kGwoRF.js";
import { t as LogsPanel_default } from "./LogsPanel-BIJlrDvm.js";
import "./folders.store-CiUqZFBT.js";
import "./NodeIcon-CLwSq_GL.js";
import "./KeyboardShortcutTooltip-BkJINibd.js";
import "./isEmpty-BIX8b77h.js";
import "./NDVEmptyState-UO80k8sd.js";
import "./externalSecrets.ee.store-Deb21dTk.js";
import "./uniqBy-g3cPf1Po.js";
import "./RunDataHtml-CWUzYFMz.js";
import "./VueMarkdown-DkLZx57j.js";
import "./schemaPreview.store-DyuxESbH.js";
import "./FileSaver.min-BZ3jw69B.js";
import "./vue-json-pretty-DsYkKELy.js";
import "./dateFormatter-CVAGjxq-.js";
import "./useExecutionHelpers-DxMu3knP.js";
import "./fileUtils-BIVczUdz.js";
import "./useKeybindings-UF7SxjRZ.js";
import "./core-B834MECE.js";
import "./ChatFile-BbL40HHy.js";
import "./xml-BP5i5VLm.js";
import "./AnimatedSpinner-BKvs0-tV.js";
import "./useLogsTreeExpand-CKAaB_k3.js";
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
