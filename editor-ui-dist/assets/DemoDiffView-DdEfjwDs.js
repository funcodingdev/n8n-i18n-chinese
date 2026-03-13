import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B254lxCP.js";
import "./src-i9Rem1HJ.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-C9VDMVVT.js";
import "./users.store-pjk3GVP4.js";
import "./ParameterInputList-B8cB_68v.js";
import "./constants-NfpEUugO.js";
import "./merge-QGykZl3H.js";
import { r as useRootStore } from "./_baseOrderBy-WW5xCbr3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-VbLgPqZj.js";
import "./dataTable.store-MeKgCeMH.js";
import "./useClipboard-Bl4fvLOl.js";
import "./executions.store-D__r2Ug5.js";
import "./assistant.store-B-efES5b.js";
import "./chatPanel.store-BkI3AGvs.js";
import "./RunData-DcZCTGDt.js";
import "./NDVEmptyState-De1_PuhZ.js";
import "./externalSecrets.ee.store-DKoieFDY.js";
import "./uniqBy-DIPdRUfK.js";
import "./communityNodes.store-DoDSrdFa.js";
import "./usePinnedData-DwevAqbC.js";
import "./nodeIcon-BXVqUawk.js";
import "./canvas.utils-Fh6fe87k.js";
import "./canvas.eventBus-im-no4xr.js";
import "./useCanvasOperations-CjHYoIbe.js";
import "./folders.store-eP-CiqUf.js";
import "./ContactAdministratorToInstall-COySWEGt.js";
import "./useQuickConnect-DrgWKKHB.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-Z4fjwQ7B.js";
import "./useDynamicCredentials-wUc9U3bG.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-CY5L0IfH.js";
import "./NodeIcon-zR4ljV2G.js";
import "./VirtualSchema-pctWKjF8.js";
import "./useCalloutHelpers-DDXPm6Ll.js";
import "./useTelemetryContext-CjN7OpeD.js";
import "./useRunWorkflow-C2SzF0cK.js";
import "./pushConnection.store-hwqf9I1l.js";
import "./nodeTransforms-CLAyV_Ei.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BakB84IQ.js";
import "./dateFormatter-Dk94ifWB.js";
import "./useExecutionHelpers-CG7D8PEl.js";
import "./useFreeAiCredits-CcBT3fxi.js";
import "./NodeSettings-DSj9Q69O.js";
import "./CommunityNodeUpdateInfo-Bb9ZmL6k.js";
import "./KeyboardShortcutTooltip-BWva8bcA.js";
import "./vue-D9RoU6zv.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-99bcM6rq.js";
import "./useCanvasMapping-DvFVr7-g.js";
import "./useKeybindings-C56kkQg_.js";
import "./useNodeCreatorShortcutCoachmark-BBO9AeWZ.js";
import "./useActions-JMyx9OEt.js";
import "./setupPanel.store-BfQMpbA-.js";
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
