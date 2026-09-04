import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, it as renderSlot, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
//#region src/app/components/GoBackButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["textContent"];
var GoBackButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GoBackButton",
	setup(__props) {
		const router = useRouter();
		const i18n = useI18n();
		const navigateTo = () => {
			router.back();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				onClick: navigateTo
			}, [createVNode(unref(N8nIcon_default), {
				class: normalizeClass(_ctx.$style.icon),
				icon: "arrow-left"
			}, null, 8, ["class"]), createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.text),
				textContent: toDisplayString(unref(i18n).baseText("template.buttons.goBackButton"))
			}, null, 10, _hoisted_1)], 2);
		};
	}
});
//#endregion
//#region src/app/components/GoBackButton.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_105gk_388";
var icon = "_icon_105gk_393";
var text = "_text_105gk_394";
var shimmer$1 = "_shimmer_105gk_1";
var spin$1 = "_spin_105gk_1";
var opacityPulse$1 = "_opacityPulse_105gk_1";
var popoverIn$1 = "_popoverIn_105gk_1";
var fadeIn$1 = "_fadeIn_105gk_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_105gk_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_105gk_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_105gk_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_105gk_1";
var blurSwapIn$1 = "_blurSwapIn_105gk_1";
var blurSwapOut$1 = "_blurSwapOut_105gk_1";
var pulseGlow$1 = "_pulseGlow_105gk_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_105gk_1";
var fade$1 = "_fade_105gk_1";
var fadeInUp$1 = "_fadeInUp_105gk_1";
var fadeInDown$1 = "_fadeInDown_105gk_1";
var fadeInLeft$1 = "_fadeInLeft_105gk_1";
var fadeInRight$1 = "_fadeInRight_105gk_1";
var fadeOut$1 = "_fadeOut_105gk_1";
var fadeOutDown$1 = "_fadeOutDown_105gk_1";
var fadeOutUp$1 = "_fadeOutUp_105gk_1";
var fadeOutLeft$1 = "_fadeOutLeft_105gk_1";
var fadeOutRight$1 = "_fadeOutRight_105gk_1";
var ping$1 = "_ping_105gk_1";
var blinkBackground$1 = "_blinkBackground_105gk_1";
var typingBlink$1 = "_typingBlink_105gk_1";
var GoBackButton_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	icon,
	text,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_105gk_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var GoBackButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GoBackButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GoBackButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/views/TemplatesView.vue?vue&type=script&setup=true&lang.ts
var TemplatesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesView",
	props: {
		goBackEnabled: {
			type: Boolean,
			default: false
		},
		fullWidth: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.template, { [_ctx.$style.fullWidth]: __props.fullWidth }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [__props.goBackEnabled ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.goBack) }, [createVNode(GoBackButton_default)], 2), renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true), createBaseVNode("div", null, [renderSlot(_ctx.$slots, "content")])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/workflows/templates/views/TemplatesView.vue?vue&type=style&index=0&lang.module.scss
var template = "_template_1bhch_388";
var fullWidth = "_fullWidth_1bhch_400";
var container = "_container_1bhch_405";
var header = "_header_1bhch_409";
var goBack = "_goBack_1bhch_415";
var shimmer = "_shimmer_1bhch_1";
var spin = "_spin_1bhch_1";
var opacityPulse = "_opacityPulse_1bhch_1";
var popoverIn = "_popoverIn_1bhch_1";
var fadeIn = "_fadeIn_1bhch_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1bhch_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1bhch_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1bhch_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1bhch_1";
var blurSwapIn = "_blurSwapIn_1bhch_1";
var blurSwapOut = "_blurSwapOut_1bhch_1";
var pulseGlow = "_pulseGlow_1bhch_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1bhch_1";
var fade = "_fade_1bhch_1";
var fadeInUp = "_fadeInUp_1bhch_1";
var fadeInDown = "_fadeInDown_1bhch_1";
var fadeInLeft = "_fadeInLeft_1bhch_1";
var fadeInRight = "_fadeInRight_1bhch_1";
var fadeOut = "_fadeOut_1bhch_1";
var fadeOutDown = "_fadeOutDown_1bhch_1";
var fadeOutUp = "_fadeOutUp_1bhch_1";
var fadeOutLeft = "_fadeOutLeft_1bhch_1";
var fadeOutRight = "_fadeOutRight_1bhch_1";
var ping = "_ping_1bhch_1";
var blinkBackground = "_blinkBackground_1bhch_1";
var typingBlink = "_typingBlink_1bhch_1";
var TemplatesView_vue_vue_type_style_index_0_lang_module_default = {
	template,
	fullWidth,
	container,
	header,
	goBack,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1bhch_1",
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
var TemplatesView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplatesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TemplatesView_default as t };
