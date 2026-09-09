import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, It as ref, N as defineComponent, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nActionPill/ActionPill.vue?vue&type=script&setup=true&lang.ts
var ActionPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nActionPill",
	__name: "ActionPill",
	props: {
		text: { default: void 0 },
		hoverText: { default: void 0 },
		clickable: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" },
		type: { default: "default" }
	},
	emits: ["click"],
	setup(__props) {
		/**
		* A small pill-shaped label that can optionally act as a button.
		* Use for inline status indicators, counts, or any short contextual label
		*/
		const hovered = ref(false);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass([
					_ctx.$style.root,
					__props.size === "small" && _ctx.$style.small,
					__props.type === "danger" && _ctx.$style.danger,
					__props.type === "info" && _ctx.$style.info,
					__props.clickable && _ctx.$style.clickable,
					__props.hoverText && hovered.value && _ctx.$style.pressed
				]),
				onMouseenter: _cache[0] || (_cache[0] = ($event) => __props.hoverText && (hovered.value = true)),
				onMouseleave: _cache[1] || (_cache[1] = ($event) => __props.hoverText && (hovered.value = false)),
				onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("click", $event))
			}, [__props.hoverText ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.labelGrid)
			}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.label, hovered.value && _ctx.$style.labelHidden]) }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.text), 1)])], 2), createBaseVNode("span", { class: normalizeClass([_ctx.$style.label, !hovered.value && _ctx.$style.labelHidden]) }, toDisplayString(__props.hoverText), 3)], 2)) : renderSlot(_ctx.$slots, "default", { key: 1 }, () => [createTextVNode(toDisplayString(__props.text), 1)])], 34);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nActionPill/ActionPill.vue?vue&type=style&index=0&lang.module.scss
var root = "_root_hxjjw_388";
var small = "_small_hxjjw_404";
var danger = "_danger_hxjjw_409";
var clickable = "_clickable_hxjjw_413";
var info = "_info_hxjjw_418";
var pressed = "_pressed_hxjjw_436";
var labelGrid = "_labelGrid_hxjjw_441";
var label = "_label_hxjjw_441";
var labelHidden = "_labelHidden_hxjjw_451";
var shimmer = "_shimmer_hxjjw_1";
var spin = "_spin_hxjjw_1";
var opacityPulse = "_opacityPulse_hxjjw_1";
var popoverIn = "_popoverIn_hxjjw_1";
var fadeIn = "_fadeIn_hxjjw_1";
var collapsibleSlideDown = "_collapsibleSlideDown_hxjjw_1";
var collapsibleSlideUp = "_collapsibleSlideUp_hxjjw_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_hxjjw_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_hxjjw_1";
var blurSwapIn = "_blurSwapIn_hxjjw_1";
var blurSwapOut = "_blurSwapOut_hxjjw_1";
var pulseGlow = "_pulseGlow_hxjjw_1";
var pulseGlowDelayed = "_pulseGlowDelayed_hxjjw_1";
var fade = "_fade_hxjjw_1";
var fadeInUp = "_fadeInUp_hxjjw_1";
var fadeInDown = "_fadeInDown_hxjjw_1";
var fadeInLeft = "_fadeInLeft_hxjjw_1";
var fadeInRight = "_fadeInRight_hxjjw_1";
var fadeOut = "_fadeOut_hxjjw_1";
var fadeOutDown = "_fadeOutDown_hxjjw_1";
var fadeOutUp = "_fadeOutUp_hxjjw_1";
var fadeOutLeft = "_fadeOutLeft_hxjjw_1";
var fadeOutRight = "_fadeOutRight_hxjjw_1";
var ping = "_ping_hxjjw_1";
var blinkBackground = "_blinkBackground_hxjjw_1";
var typingBlink = "_typingBlink_hxjjw_1";
var ActionPill_vue_vue_type_style_index_0_lang_module_default = {
	root,
	small,
	danger,
	clickable,
	info,
	pressed,
	labelGrid,
	label,
	labelHidden,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_hxjjw_1",
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
var ActionPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ActionPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ActionPill_default as t };
