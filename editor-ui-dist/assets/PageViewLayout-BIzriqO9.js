import { $ as openBlock, C as createBaseVNode, E as createElementBlock, N as defineComponent, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region src/app/components/layouts/PageViewLayout.vue?vue&type=script&setup=true&lang.ts
var PageViewLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PageViewLayout",
	props: { fullWidth: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.wrapper, __props.fullWidth ? _ctx.$style.fullWidth : ""]) }, [renderSlot(_ctx.$slots, "header"), createBaseVNode("main", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
});
//#endregion
//#region src/app/components/layouts/PageViewLayout.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_144ft_388";
var fullWidth = "_fullWidth_144ft_404";
var content = "_content_144ft_409";
var shimmer = "_shimmer_144ft_1";
var spin = "_spin_144ft_1";
var opacityPulse = "_opacityPulse_144ft_1";
var popoverIn = "_popoverIn_144ft_1";
var fadeIn = "_fadeIn_144ft_1";
var collapsibleSlideDown = "_collapsibleSlideDown_144ft_1";
var collapsibleSlideUp = "_collapsibleSlideUp_144ft_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_144ft_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_144ft_1";
var blurSwapIn = "_blurSwapIn_144ft_1";
var blurSwapOut = "_blurSwapOut_144ft_1";
var pulseGlow = "_pulseGlow_144ft_1";
var pulseGlowDelayed = "_pulseGlowDelayed_144ft_1";
var fade = "_fade_144ft_1";
var fadeInUp = "_fadeInUp_144ft_1";
var fadeInDown = "_fadeInDown_144ft_1";
var fadeInLeft = "_fadeInLeft_144ft_1";
var fadeInRight = "_fadeInRight_144ft_1";
var fadeOut = "_fadeOut_144ft_1";
var fadeOutDown = "_fadeOutDown_144ft_1";
var fadeOutUp = "_fadeOutUp_144ft_1";
var fadeOutLeft = "_fadeOutLeft_144ft_1";
var fadeOutRight = "_fadeOutRight_144ft_1";
var ping = "_ping_144ft_1";
var blinkBackground = "_blinkBackground_144ft_1";
var typingBlink = "_typingBlink_144ft_1";
var PageViewLayout_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	fullWidth,
	content,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_144ft_1",
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
var PageViewLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PageViewLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PageViewLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PageViewLayout_default as t };
