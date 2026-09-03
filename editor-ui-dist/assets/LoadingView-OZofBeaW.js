import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
//#region src/app/views/LoadingView.vue?vue&type=script&setup=true&lang.ts
var LoadingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LoadingView",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "node-view-loader"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.spinner) }, [createVNode(unref(N8nSpinner_default))], 2)], 2);
		};
	}
});
//#endregion
//#region src/app/views/LoadingView.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_1j039_388";
var spinner = "_spinner_1j039_400";
var shimmer = "_shimmer_1j039_1";
var spin = "_spin_1j039_400";
var opacityPulse = "_opacityPulse_1j039_1";
var popoverIn = "_popoverIn_1j039_1";
var fadeIn = "_fadeIn_1j039_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1j039_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1j039_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1j039_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1j039_1";
var blurSwapIn = "_blurSwapIn_1j039_1";
var blurSwapOut = "_blurSwapOut_1j039_1";
var pulseGlow = "_pulseGlow_1j039_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1j039_1";
var fade = "_fade_1j039_1";
var fadeInUp = "_fadeInUp_1j039_1";
var fadeInDown = "_fadeInDown_1j039_1";
var fadeInLeft = "_fadeInLeft_1j039_1";
var fadeInRight = "_fadeInRight_1j039_1";
var fadeOut = "_fadeOut_1j039_1";
var fadeOutDown = "_fadeOutDown_1j039_1";
var fadeOutUp = "_fadeOutUp_1j039_1";
var fadeOutLeft = "_fadeOutLeft_1j039_1";
var fadeOutRight = "_fadeOutRight_1j039_1";
var ping = "_ping_1j039_1";
var blinkBackground = "_blinkBackground_1j039_1";
var typingBlink = "_typingBlink_1j039_1";
var LoadingView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	spinner,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1j039_1",
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
var LoadingView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LoadingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LoadingView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { LoadingView_default as t };
