import { $ as openBlock, E as createElementBlock, N as defineComponent, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nStatusDot/StatusDot.vue?vue&type=script&setup=true&lang.ts
var StatusDot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nStatusDot",
	__name: "StatusDot",
	props: {
		variant: { default: "success" },
		pulse: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass([_ctx.$style[__props.variant], { [_ctx.$style.pulse]: __props.pulse }]),
				"aria-hidden": "true"
			}, null, 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nStatusDot/StatusDot.vue?vue&type=style&index=0&lang.module.scss
var dot = "_dot_179yw_388";
var success = "_success_179yw_398 _dot_179yw_388";
var warning = "_warning_179yw_402 _dot_179yw_388";
var danger = "_danger_179yw_407 _dot_179yw_388";
var pulse = "_pulse_179yw_412";
var statusDotPulse = "_statusDotPulse_179yw_1";
var shimmer = "_shimmer_179yw_1";
var spin = "_spin_179yw_1";
var opacityPulse = "_opacityPulse_179yw_1";
var popoverIn = "_popoverIn_179yw_1";
var fadeIn = "_fadeIn_179yw_1";
var collapsibleSlideDown = "_collapsibleSlideDown_179yw_1";
var collapsibleSlideUp = "_collapsibleSlideUp_179yw_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_179yw_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_179yw_1";
var blurSwapIn = "_blurSwapIn_179yw_1";
var blurSwapOut = "_blurSwapOut_179yw_1";
var pulseGlow = "_pulseGlow_179yw_1";
var pulseGlowDelayed = "_pulseGlowDelayed_179yw_1";
var fade = "_fade_179yw_1";
var fadeInUp = "_fadeInUp_179yw_1";
var fadeInDown = "_fadeInDown_179yw_1";
var fadeInLeft = "_fadeInLeft_179yw_1";
var fadeInRight = "_fadeInRight_179yw_1";
var fadeOut = "_fadeOut_179yw_1";
var fadeOutDown = "_fadeOutDown_179yw_1";
var fadeOutUp = "_fadeOutUp_179yw_1";
var fadeOutLeft = "_fadeOutLeft_179yw_1";
var fadeOutRight = "_fadeOutRight_179yw_1";
var ping = "_ping_179yw_1";
var blinkBackground = "_blinkBackground_179yw_1";
var typingBlink = "_typingBlink_179yw_1";
var StatusDot_vue_vue_type_style_index_0_lang_module_default = {
	dot,
	success,
	warning,
	danger,
	pulse,
	statusDotPulse,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_179yw_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nStatusDot/index.ts
var N8nStatusDot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(StatusDot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StatusDot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nStatusDot_default as t };
