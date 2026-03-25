import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-BLQlsGfT.js";
import "./src-C3dDmkfF.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DGi4Ph71.js";
import "./users.store-YX3xGXV-.js";
import "./ParameterInputList-PPsSOaVk.js";
import "./constants-sixw52iU.js";
import "./merge-k3cP0hku.js";
import { r as useRootStore } from "./_baseOrderBy-BrADeb8X.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-C7GCj9g0.js";
import "./dataTable.store-DBEBTPNK.js";
import "./useClipboard-BoJ-UiuZ.js";
import "./executions.store-BOXiu41e.js";
import "./assistant.store-L5qjcTMR.js";
import "./chatPanel.store-BKYmXTx_.js";
import "./RunData-DQY4gZ-Y.js";
import "./NDVEmptyState-DNwEDTZR.js";
import "./externalSecrets.ee.store-C7xHEDBd.js";
import "./uniqBy-CW5DnRCK.js";
import "./communityNodes.store-CBokylD9.js";
import "./usePinnedData-Bs9REe2E.js";
import "./nodeIcon-DD8Nq4ie.js";
import "./canvas.utils-NT0VdpQR.js";
import "./canvas.eventBus-BzEuwcnY.js";
import "./useCanvasOperations-XFvid-gM.js";
import "./setupPanel.store-DHVkFp1_.js";
import "./nodeTransforms-CgrY1VoY.js";
import "./templateTransforms-DAUIusCv.js";
import "./ContactAdministratorToInstall-Dg71v0C5.js";
import "./useQuickConnect-DCYw_zpn.js";
import "./semver-jqIWlhtB.js";
import "./CredentialIcon-jEXVrifg.js";
import "./useDynamicCredentials-FGxy9Qgz.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-CcKFrSaI.js";
import "./NodeIcon-E2eKe-jx.js";
import "./VirtualSchema-D7U4dC5I.js";
import "./useCalloutHelpers-B2vFqKg7.js";
import "./useTelemetryContext-CX0ppOn2.js";
import "./useRunWorkflow-GiBQIQS_.js";
import "./pushConnection.store-DI9FsxN3.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-8nZnC0dR.js";
import "./dateFormatter-B2XPNznj.js";
import "./useExecutionHelpers-C_Mdy6ht.js";
import "./useFreeAiCredits-OAhH5Z9G.js";
import "./NodeSettings-DTD1IN7V.js";
import "./CommunityNodeUpdateInfo-CtfM9-4h.js";
import "./KeyboardShortcutTooltip-QKY_4PlZ.js";
import "./vue-K5kPXnPp.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BoA8TUHC.js";
import "./useCanvasMapping-D1fB_Clo.js";
import "./useKeybindings-DV-CkP0X.js";
import "./useNodeCreatorShortcutCoachmark-5-Hj8kB7.js";
import "./useActions-DBsYSGKR.js";
import "./chatHubPanel.store-C9nVDBiu.js";
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
