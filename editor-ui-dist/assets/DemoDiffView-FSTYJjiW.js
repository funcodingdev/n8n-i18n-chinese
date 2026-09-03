import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, X as onMounted, Z as onUnmounted, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as useRootStore } from "./useRootStore-Bapf3biO.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-B8bDBJQB.js";
import { t as isPostMessageOriginAllowed } from "./postMessageUtils-DPjgE09I.js";
//#region src/app/views/DemoDiffView.vue?vue&type=script&setup=true&lang.ts
var DemoDiffView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DemoDiffView",
	setup(__props) {
		const rootStore = useRootStore();
		const i18n = useI18n();
		const sourceWorkflow = ref(void 0);
		const targetWorkflow = ref(void 0);
		const tidyUpEnabled = ref(false);
		/**
		* Validates that an object has the minimum required workflow structure.
		* Allows undefined (for partial diffs) but rejects malformed objects.
		*/
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
			if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"") || !isPostMessageOriginAllowed(messageEvent.origin)) return;
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
//#endregion
//#region src/app/views/DemoDiffView.vue?vue&type=style&index=0&lang.module.scss
var demoDiffView = "_demoDiffView_149w6_388";
var waitingState = "_waitingState_149w6_395";
var shimmer = "_shimmer_149w6_1";
var spin = "_spin_149w6_1";
var opacityPulse = "_opacityPulse_149w6_1";
var popoverIn = "_popoverIn_149w6_1";
var fadeIn = "_fadeIn_149w6_1";
var collapsibleSlideDown = "_collapsibleSlideDown_149w6_1";
var collapsibleSlideUp = "_collapsibleSlideUp_149w6_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_149w6_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_149w6_1";
var blurSwapIn = "_blurSwapIn_149w6_1";
var blurSwapOut = "_blurSwapOut_149w6_1";
var pulseGlow = "_pulseGlow_149w6_1";
var pulseGlowDelayed = "_pulseGlowDelayed_149w6_1";
var fade = "_fade_149w6_1";
var fadeInUp = "_fadeInUp_149w6_1";
var fadeInDown = "_fadeInDown_149w6_1";
var fadeInLeft = "_fadeInLeft_149w6_1";
var fadeInRight = "_fadeInRight_149w6_1";
var fadeOut = "_fadeOut_149w6_1";
var fadeOutDown = "_fadeOutDown_149w6_1";
var fadeOutUp = "_fadeOutUp_149w6_1";
var fadeOutLeft = "_fadeOutLeft_149w6_1";
var fadeOutRight = "_fadeOutRight_149w6_1";
var ping = "_ping_149w6_1";
var blinkBackground = "_blinkBackground_149w6_1";
var typingBlink = "_typingBlink_149w6_1";
var DemoDiffView_vue_vue_type_style_index_0_lang_module_default = {
	demoDiffView,
	waitingState,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_149w6_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var DemoDiffView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DemoDiffView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DemoDiffView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DemoDiffView_default as default };
