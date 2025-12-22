import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-Ds7clyru.js";
import "./src-CoGT5IcV.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-6F0Ti6Sn.js";
import "./overlay-BMi_8ILe.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-CPXmDJPa.js";
import { v as useWorkflowsStore } from "./builder.store-DCWSVZoF.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import "./constants-BBSiouwN.js";
import "./merge-CW3rCtOe.js";
import "./_baseOrderBy-CSTePWDd.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-CTd0bHCG.js";
import "./assistant.store-DHlIYRx0.js";
import "./chatPanel.store-Bo1QwbRN.js";
import "./npsSurvey.store-78HgJLeR.js";
import "./cloudPlan.store-D-CGizMk.js";
import "./templates.store-0hKG4cE0.js";
import "./focusPanel.store-ANeXS09p.js";
import "./useWorkflowSaving-BchXAiYu.js";
import "./retry-CMAFrhVi.js";
import "./executions.store-Be1Xp1Et.js";
import "./useRunWorkflow-oUlfXIiN.js";
import "./usePinnedData-Ccm8488z.js";
import "./nodeCreator.store-BdUvppHE.js";
import "./nodeIcon-BfZFokGq.js";
import "./useClipboard-BMVqb7pK.js";
import "./useCanvasOperations-BVkU0_sy.js";
import { t as LogsPanel_default } from "./LogsPanel-Do1z-knb.js";
import "./folders.store-CX9FELqS.js";
import "./NodeIcon-BCa257gb.js";
import "./KeyboardShortcutTooltip-_hCBjudO.js";
import "./isEmpty-CdqFEf5O.js";
import "./NDVEmptyState-tljD-ajY.js";
import "./externalSecrets.ee.store-CoAbUbyC.js";
import "./uniqBy-B5--5diw.js";
import "./RunDataHtml-_b8v7-9v.js";
import "./VueMarkdown-kqWSXstZ.js";
import "./schemaPreview.store-DBVjoxk_.js";
import "./FileSaver.min--9uV1QmK.js";
import "./vue-json-pretty-B9qWbmOF.js";
import "./dateFormatter-DQSrYbEN.js";
import "./useExecutionHelpers-CnlJaBsG.js";
import "./useKeybindings-CryhXsOQ.js";
import "./fileUtils-D3GQ2UWQ.js";
import "./core-CXk6RNMV.js";
import "./ChatFile-8ik4bOn3.js";
import "./xml-DSIt30t0.js";
import "./AnimatedSpinner-g6zev3_N.js";
import "./useLogsTreeExpand-DM0lhOrG.js";
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
