import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-DusWbG7h.js";
import "./src-BWMK0Q4H.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-jOkHoXqp.js";
import { N as useWorkflowsStore } from "./builder.store-CDNWj6sj.js";
import "./empty-BUjCyq3U.js";
import "./sanitize-html-BkT1y0bJ.js";
import "./CalendarDate-zWqgZMlk.js";
import "./constants-BNL5AX-V.js";
import "./merge-yX5iBHH2.js";
import "./_baseOrderBy-B3tKhkT-.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-DOH2YHyv.js";
import "./assistant.store-CmSX9DYK.js";
import "./chatPanel.store-C9zoBp0e.js";
import "./retry-B-tGcWte.js";
import "./executions.store-KUlszeg1.js";
import "./useRunWorkflow-B-7WCA_B.js";
import "./usePinnedData-lSjgshWr.js";
import "./nodeCreator.store-DBkY2K42.js";
import "./nodeIcon-Bg-PRJcY.js";
import "./useCanvasOperations-BIX6CsFl.js";
import { t as LogsPanel_default } from "./LogsPanel-CRuJNExe.js";
import "./folders.store-CLRxF4Hx.js";
import "./NodeIcon-DjBvUCjG.js";
import "./KeyboardShortcutTooltip-TazabqTx.js";
import "./useClipboard-C3kia0F5.js";
import "./RunData-D99HIxMT.js";
import "./NDVEmptyState-ByDLeZd8.js";
import "./externalSecrets.ee.store-DvySGXBo.js";
import "./uniqBy-CgXQFKwm.js";
import "./RunDataHtml-S_j2pLRX.js";
import "./VueMarkdown-BrGr60mJ.js";
import "./schemaPreview.store-yTzIMESw.js";
import "./vue-json-pretty-DF-vJpHf.js";
import "./dateFormatter-C_pCVtmm.js";
import "./useExecutionHelpers-Cm3DTzEl.js";
import "./useKeybindings-BI_I8KZP.js";
import "./fileUtils-Bt1vr1SC.js";
import "./core-BMwklDiH.js";
import "./ChatFile-B6hcldJk.js";
import "./xml-DDfXMqo8.js";
import "./AnimatedSpinner-DBPcagVq.js";
import "./useLogsTreeExpand-lrpWSjOz.js";
import "./core-DeR-PV8K.js";
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
