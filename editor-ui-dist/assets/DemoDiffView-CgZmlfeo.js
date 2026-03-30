import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-COzuLMdL.js";
import "./src-BvUzUaLE.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-dyHeUo1r.js";
import "./users.store-Qyayth1w.js";
import "./ParameterInputList-brxFRKkw.js";
import "./constants-CbM6Kczw.js";
import "./merge-Bt9d3GSb.js";
import { r as useRootStore } from "./_baseOrderBy-DWejZi4o.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-DzkgMLTI.js";
import "./dataTable.store-mjgRytsX.js";
import "./useClipboard-BWqYzY1b.js";
import "./executions.store-CZVSqgkG.js";
import "./assistant.store-n7YbUFsH.js";
import "./chatPanel.store-CeY6_pL_.js";
import "./RunData-DtcbVOMq.js";
import "./NDVEmptyState-CnRh5qxJ.js";
import "./externalSecrets.ee.store-BUP4UyQ6.js";
import "./uniqBy-4EqtcIN9.js";
import "./communityNodes.store-DzK_5GQj.js";
import "./usePinnedData-D0I3IPdg.js";
import "./nodeIcon-B4FMjHPj.js";
import "./canvas.utils-wNLuSy5w.js";
import "./canvas.eventBus-BeMGLVv1.js";
import "./useCanvasOperations-DK2z0FQ_.js";
import "./setupPanel.store-6vkDnRUS.js";
import "./nodeTransforms-fyYeHICA.js";
import "./templateTransforms-D_S2oYHe.js";
import "./ContactAdministratorToInstall-D9fGYYur.js";
import "./useQuickConnect-DVxmyy9h.js";
import "./semver-BsC5uf7T.js";
import "./CredentialIcon-CKYXcAcv.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-NDpndVkW.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-8CP1cO35.js";
import "./NodeIcon-KIuAUrWX.js";
import "./VirtualSchema-CtwbPSA2.js";
import "./useCalloutHelpers-62UFNsl1.js";
import "./useTelemetryContext-BW9qfXcG.js";
import "./useRunWorkflow-CeRLv-a6.js";
import "./pushConnection.store-DzbGSScq.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-slU7leRI.js";
import "./dateFormatter-Bej0iQ6f.js";
import "./useExecutionHelpers-DWnDw3K7.js";
import "./useFreeAiCredits-DSDY9V04.js";
import "./NodeSettings-DfQuMilK.js";
import "./CommunityNodeUpdateInfo-CRDBjMfp.js";
import "./KeyboardShortcutTooltip-GKmWBYWd.js";
import "./vue-DTCBCWxb.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-D4o2hy-u.js";
import "./useCanvasMapping-WjkRk7Qn.js";
import "./useKeybindings-CvSgOTGT.js";
import "./useNodeCreatorShortcutCoachmark-BzY7m91_.js";
import "./useActions-DVSNuxYh.js";
import "./chatHubPanel.store-CeWcnbsR.js";
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
