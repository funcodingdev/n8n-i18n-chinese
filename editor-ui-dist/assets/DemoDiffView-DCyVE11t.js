import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-CWW28IIa.js";
import "./src-KhoUjpIZ.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DE4-n4WM.js";
import "./users.store-_5IHF4E9.js";
import "./ParameterInputList-DT-8OAxj.js";
import "./constants-BvvNYkkp.js";
import "./merge-DwOwVsNY.js";
import { r as useRootStore } from "./_baseOrderBy-FLsk2_E-.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-_1izN00A.js";
import "./dataTable.store-qoFT0hwI.js";
import "./useClipboard-CZFaJ5QF.js";
import "./executions.store-B5rY8GHB.js";
import "./assistant.store-Bs42ylN0.js";
import "./chatPanel.store-D3y40Onh.js";
import "./RunData-C6Yx5DS4.js";
import "./NDVEmptyState-B4BPz70N.js";
import "./externalSecrets.ee.store-CcuB3vzX.js";
import "./uniqBy-yeSyos6F.js";
import "./communityNodes.store-B5wue4aW.js";
import "./usePinnedData-C7Q4Z_NJ.js";
import "./nodeIcon-CFAW5yKM.js";
import "./canvas.utils-CGnqcSax.js";
import "./nodeCreator.store-B6bthFSQ.js";
import "./useCanvasOperations-CRPdYHEV.js";
import "./folders.store-CXDRqrH6.js";
import "./ContactAdministratorToInstall-B9SFL-TC.js";
import "./useQuickConnect-D8Se24Ug.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-DYVLPYXh.js";
import "./useDynamicCredentials-Djp3afZl.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-DzLyahCI.js";
import "./NodeIcon-DOySjPRL.js";
import "./VirtualSchema-CTdm_TVf.js";
import "./useCalloutHelpers-D-g5L4ru.js";
import "./useTelemetryContext-DhNAv3aU.js";
import "./useRunWorkflow-BxwaZ91A.js";
import "./pushConnection.store-Bt2xErnB.js";
import "./nodeTransforms-BQzzaIhv.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-D1SRWsY-.js";
import "./dateFormatter-CqQ_s-tG.js";
import "./useExecutionHelpers-NeFf9BDX.js";
import "./useFreeAiCredits-CqON7WcS.js";
import "./NodeSettings-0KeP6St_.js";
import "./KeyboardShortcutTooltip-4wNXDHqQ.js";
import "./vue-BFCEDk8Q.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-0rhlwtjE.js";
import "./useCanvasMapping-DXOKlk2S.js";
import "./useKeybindings-DOW_IPWG.js";
import "./QuickConnectBanner-CB6X4cjZ.js";
import "./useActions-BFzkTfW4.js";
import "./setupPanel.store-BOBtveln.js";
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
