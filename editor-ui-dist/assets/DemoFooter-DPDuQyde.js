import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-CypagPiB.js";
import "./src-CnPJwRBo.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-hc9N0ofO.js";
import "./overlay--j0yRO5w.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-BnYh00qe.js";
import { v as useWorkflowsStore } from "./builder.store-DrOEyFgP.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import "./constants-Ckbz_jtC.js";
import "./merge-B6GP2hGS.js";
import "./_baseOrderBy-C1FCNuty.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-By6O3iF6.js";
import "./assistant.store-CWKIL0ro.js";
import "./chatPanel.store-GmFsLyxE.js";
import "./npsSurvey.store-BhZRGiC-.js";
import "./cloudPlan.store-CuTa36wd.js";
import "./templates.store-DFqD6L1D.js";
import "./focusPanel.store-CulRvve8.js";
import "./useWorkflowSaving-BhyvSJZj.js";
import "./retry-CMAFrhVi.js";
import "./executions.store-BqRjLuTk.js";
import "./useRunWorkflow-DnHp2YYj.js";
import "./usePinnedData-D5WvdJLn.js";
import "./nodeCreator.store-BSQMH5aO.js";
import "./nodeIcon-C193-9X1.js";
import "./useClipboard-BopZQm-F.js";
import "./useCanvasOperations-BaTh57Pd.js";
import { t as LogsPanel_default } from "./LogsPanel-pkjddLth.js";
import "./folders.store-g0q5r6OV.js";
import "./NodeIcon-Cam8EyrA.js";
import "./KeyboardShortcutTooltip-BLl0sePW.js";
import "./isEmpty-Cn2u2J9w.js";
import "./NDVEmptyState-XIDKCugI.js";
import "./externalSecrets.ee.store-tT3K9yAj.js";
import "./uniqBy-CsetIW2-.js";
import "./RunDataHtml-_b8v7-9v.js";
import "./VueMarkdown-F0e0sp9r.js";
import "./schemaPreview.store-D-AyDdZt.js";
import "./FileSaver.min--9uV1QmK.js";
import "./vue-json-pretty-B9qWbmOF.js";
import "./dateFormatter-PMeC7Te6.js";
import "./useExecutionHelpers-CuV9GBJR.js";
import "./useKeybindings-FkaxEJzP.js";
import "./fileUtils-D3GQ2UWQ.js";
import "./core-CXk6RNMV.js";
import "./ChatFile-8ik4bOn3.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-CTcZ-SZB.js";
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
