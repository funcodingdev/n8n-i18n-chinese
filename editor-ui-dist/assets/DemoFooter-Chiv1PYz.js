import { C as computed, E as createCommentVNode, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import "./_MapCache-DusWbG7h.js";
import "./src-Cx0DUVAZ.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-jOkHoXqp.js";
import { N as useWorkflowsStore } from "./builder.store-CVU0urSe.js";
import "./empty-DUjwPfU3.js";
import "./sanitize-html-fRP2gWb9.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-CJwRhuT8.js";
import "./constants-DoicWdWM.js";
import "./merge-BZDfnXRQ.js";
import "./_baseOrderBy-D59Lwb9y.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-BiJlY84n.js";
import "./assistant.store-RelgydML.js";
import "./chatPanel.store-DWiTny4M.js";
import "./retry-dP46utx2.js";
import "./executions.store-DD5P8x0M.js";
import "./useRunWorkflow-CSjiw2u3.js";
import "./usePinnedData-GkQi80qm.js";
import "./nodeCreator.store-AOfYtfAp.js";
import "./nodeIcon-TKsX5k6r.js";
import "./useCanvasOperations-Bk7p0DMD.js";
import { t as LogsPanel_default } from "./LogsPanel-BiERUW9y.js";
import "./folders.store-C3-9zDx1.js";
import "./NodeIcon-DwAjjf-5.js";
import "./KeyboardShortcutTooltip-Cuip5dQ3.js";
import "./useClipboard-CNNCmepT.js";
import "./RunData-CqNkedZa.js";
import "./NDVEmptyState-HaaAcwWt.js";
import "./externalSecrets.ee.store-D-ONaOGd.js";
import "./uniqBy-En_RyyuJ.js";
import "./RunDataHtml-CS6G8R8Z.js";
import "./VueMarkdown-DlHoPinA.js";
import "./schemaPreview.store-B9jLFsfi.js";
import "./vue-json-pretty-DGKuDe33.js";
import "./dateFormatter-lwzMzLMw.js";
import "./useExecutionHelpers-Ds_jAR0J.js";
import "./useKeybindings-DuTRx3ks.js";
import "./fileUtils-D_SiS8no.js";
import "./core-6W4wWNc1.js";
import "./ChatFile-Dtf_b24Y.js";
import "./xml-B6veOr9z.js";
import "./AnimatedSpinner-wiGFgffA.js";
import "./useLogsTreeExpand-CuJB2WCd.js";
import "./core-BbiIkN91.js";
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
