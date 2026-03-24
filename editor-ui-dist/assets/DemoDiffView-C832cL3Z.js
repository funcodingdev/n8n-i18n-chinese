import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache--L8adXi_.js";
import "./src-DWsTOZiq.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CTiwYXdt.js";
import "./users.store-Sw4oHdJA.js";
import "./ParameterInputList-Cre0giuw.js";
import "./constants-C3KfTTly.js";
import "./merge-DjxP3JHE.js";
import { r as useRootStore } from "./_baseOrderBy-BACeL77R.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DyfAlHJb.js";
import "./dataTable.store-BUbNFzKc.js";
import "./useClipboard-DUVW12aX.js";
import "./executions.store-_7d9ev4e.js";
import "./assistant.store-0KmEXlD7.js";
import "./chatPanel.store-CDCIr--i.js";
import "./RunData-DYgvwsEH.js";
import "./NDVEmptyState-CCQIUWsT.js";
import "./externalSecrets.ee.store-DGI6OZ1I.js";
import "./uniqBy-jlKsgmiA.js";
import "./communityNodes.store-ofnqYMkj.js";
import "./usePinnedData-CXtPmhAX.js";
import "./nodeIcon-IyeWTxCP.js";
import "./canvas.utils-CkJ5V5RF.js";
import "./canvas.eventBus-BydD8zVz.js";
import "./useCanvasOperations-CJRh2Vr3.js";
import "./setupPanel.store-BiMbfKDK.js";
import "./nodeTransforms-CUcky-fs.js";
import "./templateTransforms-CdXuJb6D.js";
import "./ContactAdministratorToInstall-gU_jBhqI.js";
import "./useQuickConnect-BceEeD4x.js";
import "./semver-jqIWlhtB.js";
import "./CredentialIcon-DaEmcCJ7.js";
import "./useDynamicCredentials-D0w9yakQ.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-CTx1h02o.js";
import "./NodeIcon-Ckjj4qv-.js";
import "./VirtualSchema--L4Hn3CV.js";
import "./useCalloutHelpers-l-O6YzBz.js";
import "./useTelemetryContext-BMn0C1Yo.js";
import "./useRunWorkflow-C1jL9RFq.js";
import "./pushConnection.store-_XKDoJMI.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-BX8zAbnn.js";
import "./dateFormatter-CTl59i2g.js";
import "./useExecutionHelpers-D_VqlLp-.js";
import "./useFreeAiCredits-Ct-DzxuA.js";
import "./NodeSettings-Bet_JWbL.js";
import "./CommunityNodeUpdateInfo-DSt9yTXP.js";
import "./KeyboardShortcutTooltip-DNxAB_ov.js";
import "./vue-K5kPXnPp.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BRyWDHXm.js";
import "./useCanvasMapping-CqiXBJc4.js";
import "./useKeybindings-YLfeG_AN.js";
import "./useNodeCreatorShortcutCoachmark-D0l2yiHU.js";
import "./useActions-JI3Z1p5Q.js";
import "./chatHubPanel.store-DrbhstQR.js";
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
