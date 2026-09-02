import { $ as openBlock, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/PreviewTag/PreviewTag.vue?vue&type=script&setup=true&lang.ts
var PreviewTag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PreviewTag",
	props: {
		size: { default: "small" },
		text: { default: void 0 }
	},
	setup(__props) {
		const { t } = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.preview, _ctx.$style[__props.size]]) }, toDisplayString(__props.text ?? unref(t)("previewTag.preview")), 3);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/PreviewTag/PreviewTag.vue?vue&type=style&index=0&lang.module.scss
var preview = "_preview_15d3k_388";
var small = "_small_15d3k_396";
var medium = "_medium_15d3k_401";
var shimmer = "_shimmer_15d3k_1";
var spin = "_spin_15d3k_1";
var opacityPulse = "_opacityPulse_15d3k_1";
var popoverIn = "_popoverIn_15d3k_1";
var fadeIn = "_fadeIn_15d3k_1";
var collapsibleSlideDown = "_collapsibleSlideDown_15d3k_1";
var collapsibleSlideUp = "_collapsibleSlideUp_15d3k_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_15d3k_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_15d3k_1";
var blurSwapIn = "_blurSwapIn_15d3k_1";
var blurSwapOut = "_blurSwapOut_15d3k_1";
var pulseGlow = "_pulseGlow_15d3k_1";
var pulseGlowDelayed = "_pulseGlowDelayed_15d3k_1";
var fade = "_fade_15d3k_1";
var fadeInUp = "_fadeInUp_15d3k_1";
var fadeInDown = "_fadeInDown_15d3k_1";
var fadeInLeft = "_fadeInLeft_15d3k_1";
var fadeInRight = "_fadeInRight_15d3k_1";
var fadeOut = "_fadeOut_15d3k_1";
var fadeOutDown = "_fadeOutDown_15d3k_1";
var fadeOutUp = "_fadeOutUp_15d3k_1";
var fadeOutLeft = "_fadeOutLeft_15d3k_1";
var fadeOutRight = "_fadeOutRight_15d3k_1";
var ping = "_ping_15d3k_1";
var blinkBackground = "_blinkBackground_15d3k_1";
var typingBlink = "_typingBlink_15d3k_1";
var PreviewTag_vue_vue_type_style_index_0_lang_module_default = {
	preview,
	small,
	medium,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_15d3k_1",
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
var PreviewTag_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PreviewTag_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PreviewTag_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PreviewTag_default as t };
