import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-7s9WlDJz.js";
import "./src-BmkbTfty.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Ck4DJj2_.js";
import "./users.store-BuTOTUJu.js";
import "./ParameterInputList-TJky5Q9K.js";
import "./constants-4mYM-BCx.js";
import "./merge-DIySfLBl.js";
import { r as useRootStore } from "./_baseOrderBy-C9x_k_9m.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-q3EZxFLd.js";
import "./dataTable.store-BRjrE_Tf.js";
import "./useClipboard-De4Pc5kX.js";
import "./executions.store-rI--m9dR.js";
import "./assistant.store-DqNt79Az.js";
import "./chatPanel.store-CptX1KKU.js";
import "./RunData-CNJYelOf.js";
import "./NDVEmptyState-CEgrBtsb.js";
import "./externalSecrets.ee.store-C08G8-MG.js";
import "./uniqBy-ICYm5Bnn.js";
import "./communityNodes.store-HvZXJXDA.js";
import "./usePinnedData-B25BjKte.js";
import "./nodeIcon-DXpX28qV.js";
import "./canvas.utils-DDNpbd20.js";
import "./nodeCreator.store-BkvRFjbm.js";
import "./useCanvasOperations-COiTkqAi.js";
import "./folders.store-PpGQTRLC.js";
import "./ContactAdministratorToInstall-BMs0OvzJ.js";
import "./useQuickConnect-BiJ9MA11.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-DFqw8oSx.js";
import "./useDynamicCredentials-DiQwHyaB.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-CcZQhUfZ.js";
import "./NodeIcon-BWZ3CJAT.js";
import "./VirtualSchema-T2LJ6df-.js";
import "./useCalloutHelpers-Bsd5uWfv.js";
import "./useTelemetryContext-FbTWTDTy.js";
import "./useRunWorkflow-DhXStslV.js";
import "./pushConnection.store-DUVlJlAs.js";
import "./nodeTransforms-zi1kjYAO.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-ByrR_him.js";
import "./dateFormatter-Cv7TTA8K.js";
import "./useExecutionHelpers-Dxhi1bGm.js";
import "./useFreeAiCredits-B9eXBbtf.js";
import "./NodeSettings-CNgHRKCw.js";
import "./KeyboardShortcutTooltip-BE5OR9r9.js";
import "./vue-BFCEDk8Q.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-ISh15NR2.js";
import "./useCanvasMapping-Dgl823J2.js";
import "./useKeybindings-1aYOI4UR.js";
import "./QuickConnectBanner-D8tBm2jA.js";
import "./useActions-D5SLU-nt.js";
import "./setupPanel.store-trpzcPzq.js";
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
