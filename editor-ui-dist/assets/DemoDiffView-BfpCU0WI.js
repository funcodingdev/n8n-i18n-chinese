import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-Dq2XPUGI.js";
import "./src-caSpAzoz.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-MahmdV1L.js";
import "./users.store-2EsruVYR.js";
import "./ParameterInputList-CLI0w28f.js";
import "./constants-_O8nYJwx.js";
import "./merge-DC9T2n_q.js";
import { r as useRootStore } from "./_baseOrderBy-V792pLeL.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BZgy_zf7.js";
import "./dataTable.store-CcNLCt6L.js";
import "./useClipboard-CVpuSQWa.js";
import "./executions.store-sPE3-_WQ.js";
import "./assistant.store-DpCnQbxG.js";
import "./chatPanel.store-fi0sPEKh.js";
import "./RunData-l6UC6PUo.js";
import "./NDVEmptyState-Wx7cJ4DQ.js";
import "./externalSecrets.ee.store-sBSKEi6X.js";
import "./uniqBy-9zkEjrL3.js";
import "./communityNodes.store-nbd-c7fq.js";
import "./usePinnedData-DqWABxxE.js";
import "./nodeIcon-c7bgB_oY.js";
import "./canvas.utils-BvUu3pSa.js";
import "./canvas.eventBus-CtIScaLg.js";
import "./useCanvasOperations-D_arrNY7.js";
import "./ContactAdministratorToInstall-Cqq37DSx.js";
import "./useQuickConnect-CkCsNI-2.js";
import "./semver-l-8UtjEn.js";
import "./CredentialIcon-0k4ZpOmq.js";
import "./useDynamicCredentials-Di4NBrDm.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-BlzfLrPg.js";
import "./NodeIcon-BFUZ9PMM.js";
import "./VirtualSchema-Ca0EzonE.js";
import "./useCalloutHelpers--nBNmi0j.js";
import "./useTelemetryContext-Df13Vw0I.js";
import "./useRunWorkflow-D5H3LTDC.js";
import "./pushConnection.store-BszLNG-V.js";
import "./nodeTransforms-DlOb0JCo.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-HDkKzYvC.js";
import "./dateFormatter-CoVxa8zs.js";
import "./useExecutionHelpers-BCv0GW7d.js";
import "./useFreeAiCredits-C7aZYVdV.js";
import "./NodeSettings-EZ3F2h1P.js";
import "./CommunityNodeUpdateInfo-CLo3utLZ.js";
import "./KeyboardShortcutTooltip-LxsSi8Y_.js";
import "./vue-C5mU5rBa.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-cGSppsZm.js";
import "./useCanvasMapping-BSn2Jzbv.js";
import "./useKeybindings-Bl0CQOt2.js";
import "./useNodeCreatorShortcutCoachmark-DNUjF34z.js";
import "./useActions-Ca79PuBi.js";
import "./setupPanel.store-C017c6L-.js";
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
