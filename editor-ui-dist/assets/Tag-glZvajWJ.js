import { $ as openBlock, Cn as toDisplayString, E as createElementBlock, N as defineComponent, U as mergeProps, it as renderSlot } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nTag/Tag.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 1 };
var Tag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nTag",
	__name: "Tag",
	props: {
		text: {},
		clickable: {
			type: Boolean,
			default: true
		},
		size: { default: "sm" }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", mergeProps({ class: [
				"n8n-tag",
				_ctx.$style.tag,
				_ctx.$style[__props.size],
				{ [_ctx.$style.clickable]: __props.clickable }
			] }, _ctx.$attrs), [_ctx.$slots["tag"] ? renderSlot(_ctx.$slots, "tag", { key: 0 }) : (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(__props.text), 1))], 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nTag/Tag.vue?vue&type=style&index=0&lang.module.scss
var tag = "_tag_p5c7s_388";
var clickable = "_clickable_p5c7s_403";
var sm = "_sm_p5c7s_411";
var md = "_md_p5c7s_417";
var lg = "_lg_p5c7s_423";
var shimmer = "_shimmer_p5c7s_1";
var spin = "_spin_p5c7s_1";
var opacityPulse = "_opacityPulse_p5c7s_1";
var popoverIn = "_popoverIn_p5c7s_1";
var fadeIn = "_fadeIn_p5c7s_1";
var collapsibleSlideDown = "_collapsibleSlideDown_p5c7s_1";
var collapsibleSlideUp = "_collapsibleSlideUp_p5c7s_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_p5c7s_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_p5c7s_1";
var blurSwapIn = "_blurSwapIn_p5c7s_1";
var blurSwapOut = "_blurSwapOut_p5c7s_1";
var pulseGlow = "_pulseGlow_p5c7s_1";
var pulseGlowDelayed = "_pulseGlowDelayed_p5c7s_1";
var fade = "_fade_p5c7s_1";
var fadeInUp = "_fadeInUp_p5c7s_1";
var fadeInDown = "_fadeInDown_p5c7s_1";
var fadeInLeft = "_fadeInLeft_p5c7s_1";
var fadeInRight = "_fadeInRight_p5c7s_1";
var fadeOut = "_fadeOut_p5c7s_1";
var fadeOutDown = "_fadeOutDown_p5c7s_1";
var fadeOutUp = "_fadeOutUp_p5c7s_1";
var fadeOutLeft = "_fadeOutLeft_p5c7s_1";
var fadeOutRight = "_fadeOutRight_p5c7s_1";
var ping = "_ping_p5c7s_1";
var blinkBackground = "_blinkBackground_p5c7s_1";
var typingBlink = "_typingBlink_p5c7s_1";
var Tag_vue_vue_type_style_index_0_lang_module_default = {
	tag,
	clickable,
	sm,
	md,
	lg,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_p5c7s_1",
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
var Tag_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Tag_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Tag_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Tag_default as t };
