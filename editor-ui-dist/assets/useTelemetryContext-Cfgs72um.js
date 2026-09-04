import { $ as openBlock, E as createElementBlock, N as defineComponent, R as inject, ot as resolveDirective, tt as provide, vn as normalizeClass, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { pa as TelemetryContextSymbol } from "./constants-CMdL1Kzl.js";
//#region src/features/ndv/runData/components/MappingPill.vue?vue&type=script&setup=true&lang.ts
var MappingPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MappingPill",
	props: {
		html: {},
		canDrop: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return withDirectives((openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.dragPill, __props.canDrop ? _ctx.$style.droppablePill : _ctx.$style.defaultPill]) }, null, 2)), [[_directive_n8n_html, __props.html]]);
		};
	}
});
//#endregion
//#region src/features/ndv/runData/components/MappingPill.vue?vue&type=style&index=0&lang.module.scss
var dragPill = "_dragPill_dd5be_388";
var droppablePill = "_droppablePill_dd5be_406";
var defaultPill = "_defaultPill_dd5be_413";
var shimmer = "_shimmer_dd5be_1";
var spin = "_spin_dd5be_1";
var opacityPulse = "_opacityPulse_dd5be_1";
var popoverIn = "_popoverIn_dd5be_1";
var fadeIn = "_fadeIn_dd5be_1";
var collapsibleSlideDown = "_collapsibleSlideDown_dd5be_1";
var collapsibleSlideUp = "_collapsibleSlideUp_dd5be_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_dd5be_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_dd5be_1";
var blurSwapIn = "_blurSwapIn_dd5be_1";
var blurSwapOut = "_blurSwapOut_dd5be_1";
var pulseGlow = "_pulseGlow_dd5be_1";
var pulseGlowDelayed = "_pulseGlowDelayed_dd5be_1";
var fade = "_fade_dd5be_1";
var fadeInUp = "_fadeInUp_dd5be_1";
var fadeInDown = "_fadeInDown_dd5be_1";
var fadeInLeft = "_fadeInLeft_dd5be_1";
var fadeInRight = "_fadeInRight_dd5be_1";
var fadeOut = "_fadeOut_dd5be_1";
var fadeOutDown = "_fadeOutDown_dd5be_1";
var fadeOutUp = "_fadeOutUp_dd5be_1";
var fadeOutLeft = "_fadeOutLeft_dd5be_1";
var fadeOutRight = "_fadeOutRight_dd5be_1";
var ping = "_ping_dd5be_1";
var blinkBackground = "_blinkBackground_dd5be_1";
var typingBlink = "_typingBlink_dd5be_1";
var MappingPill_vue_vue_type_style_index_0_lang_module_default = {
	dragPill,
	droppablePill,
	defaultPill,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_dd5be_1",
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
var MappingPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MappingPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MappingPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/composables/useTelemetryContext.ts
/**
* Composable that injects/provides data for telemetry payload.
*
* Intended for populating telemetry payload in reusable components to include
* contextual information that depends on which part of UI it is used.
*/
function useTelemetryContext(overrides = {}) {
	const merged = {
		...inject(TelemetryContextSymbol, {}),
		...overrides
	};
	provide(TelemetryContextSymbol, merged);
	return merged;
}
//#endregion
export { MappingPill_default as n, useTelemetryContext as t };
