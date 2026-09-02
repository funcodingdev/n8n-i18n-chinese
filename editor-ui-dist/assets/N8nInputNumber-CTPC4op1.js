import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, U as mergeProps, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as ElInputNumber } from "./input-number-CPjLF3x3.js";
//#region ../@n8n/design-system/src/components/N8nInputNumber/InputNumber.vue?vue&type=script&setup=true&lang.ts
var InputNumber_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InputNumber",
	props: {
		size: { default: void 0 },
		min: { default: -Infinity },
		max: { default: Infinity },
		step: { default: 1 },
		precision: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const sizeMap = {
			mini: "small",
			small: "small",
			medium: "default",
			large: "large",
			xlarge: "large"
		};
		const resolvedSize = computed(() => props.size ? sizeMap[props.size] : void 0);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElInputNumber), mergeProps({
				size: resolvedSize.value,
				min: __props.min,
				max: __props.max,
				step: __props.step,
				precision: __props.precision,
				class: _ctx.$style.inputNumber
			}, _ctx.$attrs), null, 16, [
				"size",
				"min",
				"max",
				"step",
				"precision",
				"class"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nInputNumber/InputNumber.vue?vue&type=style&index=0&lang.module.scss
var inputNumber = "_inputNumber_132t7_388";
var shimmer = "_shimmer_132t7_1";
var spin = "_spin_132t7_1";
var opacityPulse = "_opacityPulse_132t7_1";
var popoverIn = "_popoverIn_132t7_1";
var fadeIn = "_fadeIn_132t7_1";
var collapsibleSlideDown = "_collapsibleSlideDown_132t7_1";
var collapsibleSlideUp = "_collapsibleSlideUp_132t7_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_132t7_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_132t7_1";
var blurSwapIn = "_blurSwapIn_132t7_1";
var blurSwapOut = "_blurSwapOut_132t7_1";
var pulseGlow = "_pulseGlow_132t7_1";
var pulseGlowDelayed = "_pulseGlowDelayed_132t7_1";
var fade = "_fade_132t7_1";
var fadeInUp = "_fadeInUp_132t7_1";
var fadeInDown = "_fadeInDown_132t7_1";
var fadeInLeft = "_fadeInLeft_132t7_1";
var fadeInRight = "_fadeInRight_132t7_1";
var fadeOut = "_fadeOut_132t7_1";
var fadeOutDown = "_fadeOutDown_132t7_1";
var fadeOutUp = "_fadeOutUp_132t7_1";
var fadeOutLeft = "_fadeOutLeft_132t7_1";
var fadeOutRight = "_fadeOutRight_132t7_1";
var ping = "_ping_132t7_1";
var blinkBackground = "_blinkBackground_132t7_1";
var typingBlink = "_typingBlink_132t7_1";
var InputNumber_vue_vue_type_style_index_0_lang_module_default = {
	inputNumber,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_132t7_1",
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
//#region ../@n8n/design-system/src/components/N8nInputNumber/index.ts
var N8nInputNumber_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InputNumber_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InputNumber_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nInputNumber_default as t };
