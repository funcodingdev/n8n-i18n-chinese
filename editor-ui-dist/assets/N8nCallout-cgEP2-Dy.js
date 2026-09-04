import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
//#region ../@n8n/design-system/src/components/N8nCallout/Callout.vue?vue&type=script&setup=true&lang.ts
var Callout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nCallout",
	__name: "Callout",
	props: {
		theme: {},
		icon: {},
		iconTooltip: { default: void 0 },
		iconSize: { default: "medium" },
		iconless: { type: Boolean },
		slim: { type: Boolean },
		roundCorners: {
			type: Boolean,
			default: true
		},
		onlyBottomBorder: { type: Boolean }
	},
	setup(__props) {
		const CALLOUT_DEFAULT_ICONS = {
			info: "info",
			success: "circle-check",
			warning: "triangle-alert",
			danger: "triangle-alert"
		};
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => [
			"n8n-callout",
			$style.callout,
			$style[props.theme],
			props.slim ? $style.slim : "",
			props.roundCorners ? $style.round : "",
			props.onlyBottomBorder ? $style.onlyBottomBorder : ""
		]);
		const getIcon = computed(() => props.icon ?? CALLOUT_DEFAULT_ICONS?.[props.theme] ?? CALLOUT_DEFAULT_ICONS.info);
		const getIconSize = computed(() => {
			if (props.iconSize) return props.iconSize;
			if (props.theme === "secondary") return "medium";
			return "large";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(classes.value),
				role: "alert"
			}, [createBaseVNode("div", { class: normalizeClass(unref($style).messageSection) }, [
				!__props.iconless ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref($style).icon)
				}, [__props.iconTooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: __props.iconTooltip
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: getIcon.value,
						size: getIconSize.value
					}, null, 8, ["icon", "size"])]),
					_: 1
				}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: getIcon.value,
					size: getIconSize.value
				}, null, 8, ["icon", "size"]))], 2)) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}),
				_cache[0] || (_cache[0] = createTextVNode(" \xA0 ", -1)),
				renderSlot(_ctx.$slots, "actions")
			], 2), renderSlot(_ctx.$slots, "trailingContent")], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nCallout/Callout.vue?vue&type=style&index=0&lang.module.scss
var callout = "_callout_1oq41_388";
var slim = "_slim_1oq41_400";
var round = "_round_1oq41_415";
var onlyBottomBorder = "_onlyBottomBorder_1oq41_419";
var messageSection = "_messageSection_1oq41_425";
var info = "_info_1oq41_430";
var custom = "_custom_1oq41_431";
var icon = "_icon_1oq41_436";
var success = "_success_1oq41_441";
var warning = "_warning_1oq41_450";
var danger = "_danger_1oq41_459";
var secondary = "_secondary_1oq41_473";
var shimmer = "_shimmer_1oq41_1";
var spin = "_spin_1oq41_1";
var opacityPulse = "_opacityPulse_1oq41_1";
var popoverIn = "_popoverIn_1oq41_1";
var fadeIn = "_fadeIn_1oq41_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1oq41_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1oq41_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1oq41_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1oq41_1";
var blurSwapIn = "_blurSwapIn_1oq41_1";
var blurSwapOut = "_blurSwapOut_1oq41_1";
var pulseGlow = "_pulseGlow_1oq41_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1oq41_1";
var fade = "_fade_1oq41_1";
var fadeInUp = "_fadeInUp_1oq41_1";
var fadeInDown = "_fadeInDown_1oq41_1";
var fadeInLeft = "_fadeInLeft_1oq41_1";
var fadeInRight = "_fadeInRight_1oq41_1";
var fadeOut = "_fadeOut_1oq41_1";
var fadeOutDown = "_fadeOutDown_1oq41_1";
var fadeOutUp = "_fadeOutUp_1oq41_1";
var fadeOutLeft = "_fadeOutLeft_1oq41_1";
var fadeOutRight = "_fadeOutRight_1oq41_1";
var ping = "_ping_1oq41_1";
var blinkBackground = "_blinkBackground_1oq41_1";
var typingBlink = "_typingBlink_1oq41_1";
var Callout_vue_vue_type_style_index_0_lang_module_default = {
	callout,
	slim,
	round,
	onlyBottomBorder,
	messageSection,
	info,
	custom,
	icon,
	success,
	warning,
	danger,
	secondary,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1oq41_1",
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
var Callout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Callout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Callout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nCallout/index.ts
var N8nCallout_default = Callout_default;
//#endregion
export { Callout_default as n, N8nCallout_default as t };
