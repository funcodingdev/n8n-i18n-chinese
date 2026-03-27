import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-BFpNgXhv.js";
import "./src-C1Fv__jy.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CdH7pTly.js";
import "./users.store-Bu2w-Rub.js";
import "./ParameterInputList-DrctfieG.js";
import "./constants-B8dhY4J-.js";
import "./merge-B2S5Sbon.js";
import { r as useRootStore } from "./_baseOrderBy-BvZrFzTC.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BlJA7mcw.js";
import "./dataTable.store-BZr8n-Iq.js";
import "./useClipboard-tJYXwz0E.js";
import "./executions.store-Aq_QFXqV.js";
import "./assistant.store-3Tres37h.js";
import "./chatPanel.store-QcR0P27J.js";
import "./RunData-BrynoUeU.js";
import "./NDVEmptyState-RunpiqdS.js";
import "./externalSecrets.ee.store-WUogAmwT.js";
import "./uniqBy-CvKYYNJG.js";
import "./communityNodes.store-CLrYHyW5.js";
import "./usePinnedData-r8Zix2RN.js";
import "./nodeIcon-DeauzqEi.js";
import "./canvas.utils-BbjPIdL6.js";
import "./canvas.eventBus-DI4LH7au.js";
import "./useCanvasOperations-kxEveOgN.js";
import "./setupPanel.store-DPLYkTKY.js";
import "./nodeTransforms-D-iV-JfI.js";
import "./templateTransforms-CY79NPsp.js";
import "./ContactAdministratorToInstall-DlaOjGCa.js";
import "./useQuickConnect-DowWRE1U.js";
import "./semver-jqIWlhtB.js";
import "./CredentialIcon-DpgJHaFE.js";
import "./useDynamicCredentials-B-IQqBMO.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-BHtDJQA8.js";
import "./NodeIcon-DJtG-u9g.js";
import "./VirtualSchema-BWYhLzo_.js";
import "./useCalloutHelpers-C3614Y19.js";
import "./useTelemetryContext-CPIYhJvU.js";
import "./useRunWorkflow-DngvZa95.js";
import "./pushConnection.store-CQ3MEvdF.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-CJp70iQu.js";
import "./dateFormatter-CpP8aweo.js";
import "./useExecutionHelpers-BwUr0SMH.js";
import "./useFreeAiCredits-DDOu0-tc.js";
import "./NodeSettings-BCKnF22l.js";
import "./CommunityNodeUpdateInfo-BdacX81Y.js";
import "./KeyboardShortcutTooltip-CG9nHdEi.js";
import "./vue-K5kPXnPp.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-DBynIP3q.js";
import "./useCanvasMapping-rL8yaZnp.js";
import "./useKeybindings-BFaq2cuM.js";
import "./useNodeCreatorShortcutCoachmark-B6aeE-Vi.js";
import "./useActions-mlozO9i_.js";
import "./chatHubPanel.store-DC1Qavvq.js";
var DemoDiffView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DemoDiffView",
	setup(__props) {
		const rootStore = useRootStore();
		const i18n = useI18n();
		const sourceWorkflow = ref(void 0);
		const targetWorkflow = ref(void 0);
		const tidyUpEnabled = ref(false);
		function isValidWorkflow(obj) {
			if (obj === void 0 || obj === null) return true;
			return typeof obj === "object" && "nodes" in obj && "connections" in obj;
		}
		function emitPostMessageReady() {
			if (window.parent) window.parent.postMessage(JSON.stringify({
				command: "n8nReady",
				version: rootStore.versionCli
			}), "*");
		}
		async function onPostMessageReceived(messageEvent) {
			if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"")) return;
			try {
				const json = JSON.parse(messageEvent.data);
				if (json && json.command === "openDiff") {
					if (!isValidWorkflow(json.oldWorkflow) || !isValidWorkflow(json.newWorkflow)) return;
					sourceWorkflow.value = json.oldWorkflow ?? void 0;
					targetWorkflow.value = json.newWorkflow ?? void 0;
					tidyUpEnabled.value = json.tidyUp === true;
				}
			} catch (e) {}
		}
		onMounted(() => {
			window.addEventListener("message", onPostMessageReceived);
			emitPostMessageReady();
		});
		onUnmounted(() => {
			window.removeEventListener("message", onPostMessageReceived);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.demoDiffView) }, [sourceWorkflow.value || targetWorkflow.value ? (openBlock(), createBlock(WorkflowDiffView_default, {
				key: 0,
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": unref(i18n).baseText("workflowDiff.label.before"),
				"target-label": unref(i18n).baseText("workflowDiff.label.after"),
				"tidy-up": tidyUpEnabled.value
			}, null, 8, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label",
				"tidy-up"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.waitingState)
			}, [createBaseVNode("p", null, toDisplayString(unref(i18n).baseText("workflowDiff.waitingForData")), 1)], 2))], 2);
		};
	}
});
var DemoDiffView_vue_vue_type_style_index_0_lang_module_default = {
	demoDiffView: "_demoDiffView_t8kr6_125",
	waitingState: "_waitingState_t8kr6_132"
};
var DemoDiffView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DemoDiffView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DemoDiffView_vue_vue_type_style_index_0_lang_module_default }]]);
export { DemoDiffView_default as default };
