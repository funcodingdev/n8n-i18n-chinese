import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
//#region ../@n8n/design-system/src/components/N8nBadge/Badge.vue?vue&type=script&setup=true&lang.ts
var Badge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nBadge",
	__name: "Badge",
	props: {
		theme: { default: "default" },
		size: { default: "small" },
		bold: {
			type: Boolean,
			default: false
		},
		showBorder: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(["n8n-badge", {
				[_ctx.$style[__props.theme]]: true,
				[_ctx.$style.border]: __props.showBorder
			}]) }, [createVNode(unref(N8nText_default), {
				size: __props.size,
				bold: __props.bold,
				compact: true
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["size", "bold"])], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nBadge/Badge.vue?vue&type=style&index=0&lang.module.scss
var badge = "_badge_kkggk_388";
var border = "_border_kkggk_395";
var success = "_success_kkggk_406 _badge_kkggk_388";
var warning = "_warning_kkggk_413 _badge_kkggk_388";
var danger = "_danger_kkggk_420 _badge_kkggk_388";
var primary = "_primary_kkggk_427 _badge_kkggk_388";
var secondary = "_secondary_kkggk_436 _badge_kkggk_388";
var tertiary = "_tertiary_kkggk_443 _badge_kkggk_388";
var shimmer = "_shimmer_kkggk_1";
var spin = "_spin_kkggk_1";
var opacityPulse = "_opacityPulse_kkggk_1";
var popoverIn = "_popoverIn_kkggk_1";
var fadeIn = "_fadeIn_kkggk_1";
var collapsibleSlideDown = "_collapsibleSlideDown_kkggk_1";
var collapsibleSlideUp = "_collapsibleSlideUp_kkggk_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_kkggk_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_kkggk_1";
var blurSwapIn = "_blurSwapIn_kkggk_1";
var blurSwapOut = "_blurSwapOut_kkggk_1";
var pulseGlow = "_pulseGlow_kkggk_1";
var pulseGlowDelayed = "_pulseGlowDelayed_kkggk_1";
var fade = "_fade_kkggk_1";
var fadeInUp = "_fadeInUp_kkggk_1";
var fadeInDown = "_fadeInDown_kkggk_1";
var fadeInLeft = "_fadeInLeft_kkggk_1";
var fadeInRight = "_fadeInRight_kkggk_1";
var fadeOut = "_fadeOut_kkggk_1";
var fadeOutDown = "_fadeOutDown_kkggk_1";
var fadeOutUp = "_fadeOutUp_kkggk_1";
var fadeOutLeft = "_fadeOutLeft_kkggk_1";
var fadeOutRight = "_fadeOutRight_kkggk_1";
var ping = "_ping_kkggk_1";
var blinkBackground = "_blinkBackground_kkggk_1";
var typingBlink = "_typingBlink_kkggk_1";
var Badge_vue_vue_type_style_index_0_lang_module_default = {
	badge,
	border,
	"default": "_default_kkggk_399 _badge_kkggk_388",
	success,
	warning,
	danger,
	primary,
	secondary,
	tertiary,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_kkggk_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nBadge/index.ts
var N8nBadge_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Badge_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Badge_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nBadge_default as t };
