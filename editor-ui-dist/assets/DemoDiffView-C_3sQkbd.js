import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-BRSIFZ-8.js";
import "./src-CKCAtrpy.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-B6IBAAaa.js";
import "./users.store-D86YL4LK.js";
import "./ParameterInputList-D2jDIpu7.js";
import "./constants-bR1gDMyV.js";
import "./merge-CIGhcbPZ.js";
import { r as useRootStore } from "./_baseOrderBy-Bnq6lF9G.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-B60IEvx_.js";
import "./dataTable.store-BlDF0bc6.js";
import "./useClipboard-CUjSehMX.js";
import "./executions.store-M_BkPQP7.js";
import "./assistant.store-VgdEjZtb.js";
import "./chatPanel.store-Cbb_CAVO.js";
import "./RunData-DoHMWJJ_.js";
import "./NDVEmptyState-C1odqkYI.js";
import "./externalSecrets.ee.store-SKJfGM55.js";
import "./uniqBy-B1jOEEhZ.js";
import "./communityNodes.store-C0d1_kld.js";
import "./usePinnedData-Nwk6oEMR.js";
import "./nodeIcon-CZIVoFoF.js";
import "./canvas.utils-BFvfHyWG.js";
import "./canvas.eventBus-Bf5MePgH.js";
import "./useCanvasOperations-3hHIPvfQ.js";
import "./ContactAdministratorToInstall-pepewjME.js";
import "./useQuickConnect-KXZTrc0g.js";
import "./semver-l-8UtjEn.js";
import "./CredentialIcon-DqbW_Uia.js";
import "./useDynamicCredentials-qSLmK8kH.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-mqKgnAoj.js";
import "./NodeIcon-0TqcYO8t.js";
import "./VirtualSchema-BcdK-Usk.js";
import "./useCalloutHelpers-B4VxyxdJ.js";
import "./useTelemetryContext-DR2ErcyQ.js";
import "./useRunWorkflow-sKQnjkCu.js";
import "./pushConnection.store-gdbooWqZ.js";
import "./nodeTransforms-cxYNq6D5.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-DkO5PHzQ.js";
import "./dateFormatter-B_EjvE2C.js";
import "./useExecutionHelpers-BDJdGZvb.js";
import "./useFreeAiCredits-BFs_RG25.js";
import "./NodeSettings-CiVU_rRj.js";
import "./CommunityNodeUpdateInfo-DPVeZgzl.js";
import "./KeyboardShortcutTooltip-B5-_tsGh.js";
import "./vue-C5mU5rBa.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-B_8Eu5KQ.js";
import "./useCanvasMapping-y4AripaL.js";
import "./useKeybindings-CtJyddQn.js";
import "./useNodeCreatorShortcutCoachmark-De0wYFgO.js";
import "./useActions-DKeHG5c8.js";
import "./setupPanel.store-DFQ9pBHk.js";
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
