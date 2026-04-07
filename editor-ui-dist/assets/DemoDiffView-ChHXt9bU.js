import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-C80pWp05.js";
import "./src-DXhOkTfb.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-b-su1XNy.js";
import "./users.store-bYJP9NEL.js";
import "./ParameterInputList-CquLPExM.js";
import "./constants-neq36s1h.js";
import "./merge-CyZj1oIp.js";
import { r as useRootStore } from "./_baseOrderBy-2EL3KkTw.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-CnJGc_VC.js";
import "./dataTable.store-K6b88Qa-.js";
import "./useClipboard-B1HjyDZ5.js";
import "./executions.store-CXfJa1PO.js";
import "./assistant.store-Hv2aiFHq.js";
import "./chatPanel.store-CNq_-Rf2.js";
import "./RunData-DdcHm1OG.js";
import "./NDVEmptyState-CVg1Bg2x.js";
import "./externalSecrets.ee.store-_S24qRr8.js";
import "./uniqBy-DJ2emvPb.js";
import "./communityNodes.store-BcR-yJAU.js";
import "./usePinnedData-D6iG-vVW.js";
import "./nodeIcon-DVYiuXDq.js";
import "./canvas.utils-I742fAt-.js";
import "./canvas.eventBus-CHyag3df.js";
import "./useCanvasOperations-Cc3fbdBt.js";
import "./setupPanel.store-CAfS8IPe.js";
import "./nodeTransforms-BQzHSoiA.js";
import "./templateTransforms-Bl0C8A0m.js";
import "./ContactAdministratorToInstall-BJbp5MNw.js";
import "./useQuickConnect-qKJEJ615.js";
import "./semver-BsC5uf7T.js";
import "./CredentialIcon-BkypOquL.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-DRUKdpnL.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-CPyRg6w8.js";
import "./NodeIcon-Df-cIZ1j.js";
import "./VirtualSchema-D-WHMgJQ.js";
import "./useCalloutHelpers-wkfPx7eZ.js";
import "./useTelemetryContext-CMsal0ao.js";
import "./useRunWorkflow-BgxUvcZG.js";
import "./pushConnection.store-CVCuUA8u.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-BHVxfZAc.js";
import "./dateFormatter-ChtiEljD.js";
import "./useExecutionHelpers-CORCJaOn.js";
import "./useFreeAiCredits-DwoRtroG.js";
import "./NodeSettings-DxccuMUV.js";
import "./CommunityNodeUpdateInfo-oyoqOrxw.js";
import "./KeyboardShortcutTooltip-B8YykjpW.js";
import "./vue-DTCBCWxb.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-Cg-MGQ4X.js";
import "./useCanvasMapping-CbnV0i4U.js";
import "./useKeybindings-D6ZApcVM.js";
import "./useNodeCreatorShortcutCoachmark-CTjg1BZJ.js";
import "./useActions-BjI7CSHU.js";
import "./chatHubPanel.store-Dzn9QQx1.js";
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
