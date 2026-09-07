import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, Gt as unref, N as defineComponent, T as createCommentVNode, U as mergeProps, bt as withCtx, it as renderSlot, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nKeyboardShortcut_default } from "./N8nKeyboardShortcut-DZFKzw3w.js";
//#region src/app/components/KeyboardShortcutTooltip.vue?vue&type=script&setup=true&lang.ts
var KeyboardShortcutTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "KeyboardShortcutTooltip",
	props: {
		label: {},
		shortcut: { default: void 0 },
		placement: { default: "top" },
		disabled: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: __props.placement,
				"show-after": 500,
				disabled: __props.disabled
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.shortcut) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(__props.label), 3), __props.shortcut ? (openBlock(), createBlock(unref(N8nKeyboardShortcut_default), normalizeProps(mergeProps({ key: 0 }, __props.shortcut)), null, 16)) : createCommentVNode("", true)], 2)]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["placement", "disabled"]);
		};
	}
});
//#endregion
//#region src/app/components/KeyboardShortcutTooltip.vue?vue&type=style&index=0&lang.module.scss
var shortcut = "_shortcut_n4ryy_388";
var label = "_label_n4ryy_398";
var shimmer = "_shimmer_n4ryy_1";
var spin = "_spin_n4ryy_1";
var opacityPulse = "_opacityPulse_n4ryy_1";
var popoverIn = "_popoverIn_n4ryy_1";
var fadeIn = "_fadeIn_n4ryy_1";
var collapsibleSlideDown = "_collapsibleSlideDown_n4ryy_1";
var collapsibleSlideUp = "_collapsibleSlideUp_n4ryy_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_n4ryy_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_n4ryy_1";
var blurSwapIn = "_blurSwapIn_n4ryy_1";
var blurSwapOut = "_blurSwapOut_n4ryy_1";
var pulseGlow = "_pulseGlow_n4ryy_1";
var pulseGlowDelayed = "_pulseGlowDelayed_n4ryy_1";
var fade = "_fade_n4ryy_1";
var fadeInUp = "_fadeInUp_n4ryy_1";
var fadeInDown = "_fadeInDown_n4ryy_1";
var fadeInLeft = "_fadeInLeft_n4ryy_1";
var fadeInRight = "_fadeInRight_n4ryy_1";
var fadeOut = "_fadeOut_n4ryy_1";
var fadeOutDown = "_fadeOutDown_n4ryy_1";
var fadeOutUp = "_fadeOutUp_n4ryy_1";
var fadeOutLeft = "_fadeOutLeft_n4ryy_1";
var fadeOutRight = "_fadeOutRight_n4ryy_1";
var ping = "_ping_n4ryy_1";
var blinkBackground = "_blinkBackground_n4ryy_1";
var typingBlink = "_typingBlink_n4ryy_1";
var KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default = {
	shortcut,
	label,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_n4ryy_1",
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
var KeyboardShortcutTooltip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(KeyboardShortcutTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { KeyboardShortcutTooltip_default as t };
