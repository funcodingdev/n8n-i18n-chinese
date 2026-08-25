import { $ as openBlock, Gt as unref, N as defineComponent, bt as withCtx, it as renderSlot, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { n as CollapsibleContent_default } from "./CollapsibleTrigger-BXwADwHH.js";
//#region ../@n8n/design-system/src/components/N8nAnimatedCollapsibleContent/AnimatedCollapsibleContent.vue?vue&type=script&setup=true&lang.ts
/**
* When set, the height slide is paired with an opacity fade and a subtle blur
* that mimics motion blur — the same motion as N8nSettingsRow's expand region.
*/
var AnimatedCollapsibleContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AnimatedCollapsibleContent",
	props: { blur: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleContent_default), { class: normalizeClass([_ctx.$style.content, __props.blur && _ctx.$style.blurred]) }, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAnimatedCollapsibleContent/AnimatedCollapsibleContent.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_epr5f_391";
var collapsibleSlideDown = "_collapsibleSlideDown_epr5f_1";
var collapsibleSlideUp = "_collapsibleSlideUp_epr5f_1";
var blurred = "_blurred_epr5f_416";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_epr5f_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_epr5f_1";
var shimmer = "_shimmer_epr5f_1";
var spin = "_spin_epr5f_1";
var opacityPulse = "_opacityPulse_epr5f_1";
var popoverIn = "_popoverIn_epr5f_1";
var fadeIn = "_fadeIn_epr5f_1";
var blurSwapIn = "_blurSwapIn_epr5f_1";
var blurSwapOut = "_blurSwapOut_epr5f_1";
var pulseGlow = "_pulseGlow_epr5f_1";
var pulseGlowDelayed = "_pulseGlowDelayed_epr5f_1";
var fade = "_fade_epr5f_1";
var fadeInUp = "_fadeInUp_epr5f_1";
var fadeInDown = "_fadeInDown_epr5f_1";
var fadeInLeft = "_fadeInLeft_epr5f_1";
var fadeInRight = "_fadeInRight_epr5f_1";
var fadeOut = "_fadeOut_epr5f_1";
var fadeOutDown = "_fadeOutDown_epr5f_1";
var fadeOutUp = "_fadeOutUp_epr5f_1";
var fadeOutLeft = "_fadeOutLeft_epr5f_1";
var fadeOutRight = "_fadeOutRight_epr5f_1";
var ping = "_ping_epr5f_1";
var blinkBackground = "_blinkBackground_epr5f_1";
var typingBlink = "_typingBlink_epr5f_1";
var AnimatedCollapsibleContent_vue_vue_type_style_index_0_lang_module_default = {
	content,
	collapsibleSlideDown,
	collapsibleSlideUp,
	blurred,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_epr5f_1",
	opacityPulse,
	popoverIn,
	fadeIn,
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
var AnimatedCollapsibleContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AnimatedCollapsibleContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AnimatedCollapsibleContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AnimatedCollapsibleContent_default as t };
