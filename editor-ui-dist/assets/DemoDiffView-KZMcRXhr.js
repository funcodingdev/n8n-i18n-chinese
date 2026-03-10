import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-DwkzWRqU.js";
import "./src-GXsra_I5.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-B6GxK5zW.js";
import "./users.store-DSeNCs16.js";
import "./ParameterInputList-D6aOXwqi.js";
import "./constants-DFXtU1Pw.js";
import "./merge-CKdiHidc.js";
import { r as useRootStore } from "./_baseOrderBy-COGSHfpp.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-q-aewVnG.js";
import "./dataTable.store-B9_69u3-.js";
import "./useClipboard-CGjjqaqQ.js";
import "./executions.store-30t4F5WB.js";
import "./assistant.store-D4G-iVGk.js";
import "./chatPanel.store-BT_ynfe0.js";
import "./RunData-CfhKkpLl.js";
import "./NDVEmptyState-DBcaOHDZ.js";
import "./externalSecrets.ee.store-BWPCsq3Z.js";
import "./uniqBy-DIMlDJ3D.js";
import "./communityNodes.store-C6UVZzMk.js";
import "./usePinnedData-BF1rKVo9.js";
import "./nodeIcon-BMRXYoUK.js";
import "./canvas.utils-CEDTlx4N.js";
import "./canvas.eventBus-B9SGSxxt.js";
import "./useCanvasOperations-CednDKIa.js";
import "./folders.store-DKweL38s.js";
import "./ContactAdministratorToInstall-ZurrAhfX.js";
import "./useQuickConnect-DsWgI8tM.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-BaLI24S0.js";
import "./useDynamicCredentials-9ugcNyTx.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-ClEDgCgp.js";
import "./NodeIcon-ARAzHKT2.js";
import "./VirtualSchema-C4KHTUGN.js";
import "./useCalloutHelpers-CCKtBG3s.js";
import "./useTelemetryContext-Crb1oPM1.js";
import "./useRunWorkflow-DjJ0mX2w.js";
import "./pushConnection.store-CwvPFQVx.js";
import "./nodeTransforms-CCNM4SLN.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BsG87CXt.js";
import "./dateFormatter-D5c8u43g.js";
import "./useExecutionHelpers-labeYe8w.js";
import "./useFreeAiCredits-De8FVpWm.js";
import "./NodeSettings-CV49HQxV.js";
import "./CommunityNodeUpdateInfo-DL1Vot6f.js";
import "./KeyboardShortcutTooltip-vazuCnnx.js";
import "./vue-D9RoU6zv.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-D_j_oKsq.js";
import "./useCanvasMapping-BBSA-6HB.js";
import "./useKeybindings-BYqiw-Cj.js";
import "./useNodeCreatorShortcutCoachmark-yAzobVlF.js";
import "./useActions-bO6xEcix.js";
import "./setupPanel.store-BFgL0dUd.js";
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
