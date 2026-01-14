import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-CyjHlXwr.js";
import "./src-D62n_vyH.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-DbuDKYwY.js";
import { N as useWorkflowsStore } from "./builder.store-BfgdrEL0.js";
import "./empty-BUjCyq3U.js";
import "./sanitize-html-BkT1y0bJ.js";
import "./CalendarDate-zWqgZMlk.js";
import "./constants-DH_amLxq.js";
import "./merge-DKb8C8ij.js";
import "./_baseOrderBy-BdyONbUJ.js";
import "./dateformat-BlfbK1ki.js";
import "./useDebounce-DLU5ASh2.js";
import "./assistant.store-B-Dx_DdP.js";
import "./chatPanel.store-BOO-Kang.js";
import "./retry-B-tGcWte.js";
import "./executions.store-D1r92Dn3.js";
import "./useRunWorkflow-CDvBdJWu.js";
import "./usePinnedData-CuoDzmr_.js";
import "./nodeCreator.store-tLtZiume.js";
import "./nodeIcon-CZ9aSAq4.js";
import "./useCanvasOperations-CWMR_J0m.js";
import { t as LogsPanel_default } from "./LogsPanel-BiC1MMFJ.js";
import "./folders.store-o8aeJ9Wl.js";
import "./NodeIcon-CZ-6L10c.js";
import "./KeyboardShortcutTooltip-0bZXXsrY.js";
import "./useClipboard-C9PaDm1r.js";
import "./RunData-ClCI6pix.js";
import "./NDVEmptyState-CAOKnYWb.js";
import "./externalSecrets.ee.store-C0-1gbAZ.js";
import "./uniqBy-qGwVc1IP.js";
import "./RunDataHtml-S_j2pLRX.js";
import "./VueMarkdown-wYeyYsn5.js";
import "./schemaPreview.store-BqIOPqBP.js";
import "./vue-json-pretty-DF-vJpHf.js";
import "./dateFormatter-Cp3ETkDK.js";
import "./useExecutionHelpers-GrefhTb-.js";
import "./useKeybindings-Cams33ua.js";
import "./fileUtils-Bt1vr1SC.js";
import "./core-BMwklDiH.js";
import "./ChatFile-B6hcldJk.js";
import "./xml-DDfXMqo8.js";
import "./AnimatedSpinner-DBPcagVq.js";
import "./useLogsTreeExpand-CnaJWiQg.js";
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
