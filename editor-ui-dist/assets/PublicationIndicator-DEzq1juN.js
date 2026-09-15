import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, U as mergeProps, bt as withCtx, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-B3IH6E0U.js";
import { t as N8nStatusDot_default } from "./N8nStatusDot-RUznpDAG.js";
//#region src/app/components/PublicationIndicator.vue?vue&type=script&setup=true&lang.ts
/**
* "Published" chip shown on list cards. Attributes such as `data-test-id`
* and `data-state` land on the chip element itself, also inside the tooltip.
*/
var PublicationIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PublicationIndicator",
	props: {
		label: {},
		variant: { default: "success" },
		tooltip: { default: null }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.tooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: "top",
				"as-child": ""
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.tooltip), 1)]),
				default: withCtx(() => [createBaseVNode("div", mergeProps(_ctx.$attrs, {
					class: _ctx.$style.indicator,
					tabindex: "0"
				}), [createVNode(unref(N8nStatusDot_default), { variant: __props.variant }, null, 8, ["variant"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
					_: 1
				})], 16)]),
				_: 1
			})) : (openBlock(), createElementBlock("div", mergeProps({ key: 1 }, _ctx.$attrs, { class: _ctx.$style.indicator }), [createVNode(unref(N8nStatusDot_default), { variant: __props.variant }, null, 8, ["variant"]), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
				_: 1
			})], 16));
		};
	}
});
//#endregion
//#region src/app/components/PublicationIndicator.vue?vue&type=style&index=0&lang.module.scss
var indicator = "_indicator_1vmeb_388";
var shimmer = "_shimmer_1vmeb_1";
var spin = "_spin_1vmeb_1";
var opacityPulse = "_opacityPulse_1vmeb_1";
var popoverIn = "_popoverIn_1vmeb_1";
var fadeIn = "_fadeIn_1vmeb_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1vmeb_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1vmeb_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1vmeb_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1vmeb_1";
var blurSwapIn = "_blurSwapIn_1vmeb_1";
var blurSwapOut = "_blurSwapOut_1vmeb_1";
var pulseGlow = "_pulseGlow_1vmeb_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1vmeb_1";
var fade = "_fade_1vmeb_1";
var fadeInUp = "_fadeInUp_1vmeb_1";
var fadeInDown = "_fadeInDown_1vmeb_1";
var fadeInLeft = "_fadeInLeft_1vmeb_1";
var fadeInRight = "_fadeInRight_1vmeb_1";
var fadeOut = "_fadeOut_1vmeb_1";
var fadeOutDown = "_fadeOutDown_1vmeb_1";
var fadeOutUp = "_fadeOutUp_1vmeb_1";
var fadeOutLeft = "_fadeOutLeft_1vmeb_1";
var fadeOutRight = "_fadeOutRight_1vmeb_1";
var ping = "_ping_1vmeb_1";
var blinkBackground = "_blinkBackground_1vmeb_1";
var typingBlink = "_typingBlink_1vmeb_1";
var PublicationIndicator_vue_vue_type_style_index_0_lang_module_default = {
	indicator,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1vmeb_1",
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
var PublicationIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PublicationIndicator_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PublicationIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PublicationIndicator_default as t };
