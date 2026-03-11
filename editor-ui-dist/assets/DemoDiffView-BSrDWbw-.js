import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-BBTLzXgM.js";
import "./src-BITqouBc.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CtHxSEVr.js";
import "./users.store-BPj3XTmq.js";
import "./ParameterInputList-DM1D7R4G.js";
import "./constants-CBEYCjLn.js";
import "./merge-BaEehfYj.js";
import { r as useRootStore } from "./_baseOrderBy-5iurxHHF.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-B5Huo4lB.js";
import "./dataTable.store-RUdV8HAc.js";
import "./useClipboard-se9rRdHV.js";
import "./executions.store-DQOq1HdD.js";
import "./assistant.store-LdlH3WUn.js";
import "./chatPanel.store-D1ORbh3l.js";
import "./RunData-BsJH6Rde.js";
import "./NDVEmptyState-BHSzNbFI.js";
import "./externalSecrets.ee.store-CdmPzvyQ.js";
import "./uniqBy-CoNpzoVk.js";
import "./communityNodes.store-l5IHCeYG.js";
import "./usePinnedData-DQ8vywD3.js";
import "./nodeIcon-CzAlSpGu.js";
import "./canvas.utils-CjCJ8R_v.js";
import "./canvas.eventBus-kPSHTKdE.js";
import "./useCanvasOperations-DASum_XI.js";
import "./folders.store-CL7P5e6m.js";
import "./ContactAdministratorToInstall-vyJvf6Z3.js";
import "./useQuickConnect-Cl5VaPlb.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-3ie_lGjo.js";
import "./useDynamicCredentials-C3lV3plD.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-D69lvv3g.js";
import "./NodeIcon-DrhsB4EO.js";
import "./VirtualSchema-Dn89E6h_.js";
import "./useCalloutHelpers-Cb5r45AD.js";
import "./useTelemetryContext-BpvofxtY.js";
import "./useRunWorkflow-gqN-Mw6J.js";
import "./pushConnection.store-Dllbaq_T.js";
import "./nodeTransforms-cEEwfJoU.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-KWYjj5lF.js";
import "./dateFormatter-CIZC2udK.js";
import "./useExecutionHelpers-CeN1ATdm.js";
import "./useFreeAiCredits-DTaMJePW.js";
import "./NodeSettings-edCVBIMs.js";
import "./CommunityNodeUpdateInfo-uRQOxhXT.js";
import "./KeyboardShortcutTooltip-Cu5GWZL2.js";
import "./vue-D9RoU6zv.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-CXY0DMno.js";
import "./useCanvasMapping-GSNi3Epw.js";
import "./useKeybindings-B5HJkh3O.js";
import "./useNodeCreatorShortcutCoachmark-nHpSNDJQ.js";
import "./useActions-B03cekYb.js";
import "./setupPanel.store-DeJF9HXF.js";
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
