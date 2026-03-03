import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Bl0j8A0i.js";
import "./src-DNuWeQoI.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-ChCvgTva.js";
import "./users.store-CgsgTstk.js";
import "./ParameterInputList-ChKGa8OX.js";
import "./constants-DEPRN4fc.js";
import "./merge-Ce71GKIY.js";
import { r as useRootStore } from "./_baseOrderBy-DCYhjK32.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-s8cKxpSe.js";
import "./dataTable.store-ZMAEoa2a.js";
import "./useClipboard-DQU-cx8i.js";
import "./executions.store-CdHUUuMM.js";
import "./assistant.store-CAphqpQE.js";
import "./chatPanel.store-2G5HkLDr.js";
import "./RunData-BYQf9WgV.js";
import "./NDVEmptyState-B70MfVqc.js";
import "./externalSecrets.ee.store-CNUtZy9l.js";
import "./uniqBy-m6aiwzH4.js";
import "./communityNodes.store-BpZb00fm.js";
import "./usePinnedData-DslSYmNn.js";
import "./nodeIcon-CApkz_zp.js";
import "./canvas.utils-BwcAweXC.js";
import "./nodeCreator.store-DWRgYYgl.js";
import "./useCanvasOperations-CP7_bkqF.js";
import "./folders.store-Bmhcjh89.js";
import "./ContactAdministratorToInstall-Dq3QFSIe.js";
import "./useQuickConnect-BVhPED0z.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-CsTqtVjA.js";
import "./useDynamicCredentials-C4a9afsK.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-CpzFP2eK.js";
import "./NodeIcon-DZAR6pbL.js";
import "./VirtualSchema-DHJOfPAz.js";
import "./useCalloutHelpers-0DWq74W7.js";
import "./useTelemetryContext-DFduxt4f.js";
import "./useRunWorkflow-BChFNGS3.js";
import "./pushConnection.store-CVjprSAB.js";
import "./nodeTransforms-DhsHKeP9.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-DgnmUfo8.js";
import "./dateFormatter-BaFwcrv2.js";
import "./useExecutionHelpers-dtDHGr5F.js";
import "./useFreeAiCredits-44zKxME7.js";
import "./NodeSettings-aotUiJKA.js";
import "./KeyboardShortcutTooltip-DsRUp4Db.js";
import "./vue-BFCEDk8Q.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-DJmkqo_j.js";
import "./useCanvasMapping-DnvDKHCW.js";
import "./useKeybindings-DMkPq03z.js";
import "./QuickConnectBanner-CEZ1071A.js";
import "./useActions-BVA0Cys4.js";
import "./setupPanel.store-D4B7Lz3B.js";
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
