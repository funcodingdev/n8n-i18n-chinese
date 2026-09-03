import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, N as defineComponent, S as computed, _ as Fragment, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as useDeviceSupport } from "./useDeviceSupport-CZosAKtc.js";
//#region ../@n8n/design-system/src/components/N8nKeyboardShortcut/N8nKeyboardShortcut.vue?vue&type=script&setup=true&lang.ts
var N8nKeyboardShortcut_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nKeyboardShortcut",
	props: {
		metaKey: { type: Boolean },
		altKey: { type: Boolean },
		shiftKey: { type: Boolean },
		keys: {}
	},
	setup(__props) {
		const props = __props;
		const { isMacOs, controlKeyText } = useDeviceSupport();
		const keys = computed(() => {
			const allKeys = [];
			if (props.metaKey) allKeys.push(controlKeyText.value);
			if (props.shiftKey) allKeys.push("⇧");
			if (props.altKey) allKeys.push(isMacOs ? "⌥" : "Alt");
			allKeys.push(...props.keys.map((key) => key.charAt(0).toUpperCase() + key.slice(1)));
			return allKeys;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.shortcut) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(keys.value, (key) => {
				return openBlock(), createElementBlock("div", {
					key,
					class: normalizeClass(_ctx.$style.keyWrapper)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.key) }, toDisplayString(key), 3)], 2);
			}), 128))], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nKeyboardShortcut/N8nKeyboardShortcut.vue?vue&type=style&index=0&lang.module.scss
var shortcut = "_shortcut_1ldb2_388";
var keyWrapper = "_keyWrapper_1ldb2_394";
var key = "_key_1ldb2_394";
var shimmer = "_shimmer_1ldb2_1";
var spin = "_spin_1ldb2_1";
var opacityPulse = "_opacityPulse_1ldb2_1";
var popoverIn = "_popoverIn_1ldb2_1";
var fadeIn = "_fadeIn_1ldb2_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ldb2_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ldb2_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ldb2_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ldb2_1";
var blurSwapIn = "_blurSwapIn_1ldb2_1";
var blurSwapOut = "_blurSwapOut_1ldb2_1";
var pulseGlow = "_pulseGlow_1ldb2_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ldb2_1";
var fade = "_fade_1ldb2_1";
var fadeInUp = "_fadeInUp_1ldb2_1";
var fadeInDown = "_fadeInDown_1ldb2_1";
var fadeInLeft = "_fadeInLeft_1ldb2_1";
var fadeInRight = "_fadeInRight_1ldb2_1";
var fadeOut = "_fadeOut_1ldb2_1";
var fadeOutDown = "_fadeOutDown_1ldb2_1";
var fadeOutUp = "_fadeOutUp_1ldb2_1";
var fadeOutLeft = "_fadeOutLeft_1ldb2_1";
var fadeOutRight = "_fadeOutRight_1ldb2_1";
var ping = "_ping_1ldb2_1";
var blinkBackground = "_blinkBackground_1ldb2_1";
var typingBlink = "_typingBlink_1ldb2_1";
var N8nKeyboardShortcut_vue_vue_type_style_index_0_lang_module_default = {
	shortcut,
	keyWrapper,
	key,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ldb2_1",
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
var N8nKeyboardShortcut_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nKeyboardShortcut_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nKeyboardShortcut_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nKeyboardShortcut_default as t };
