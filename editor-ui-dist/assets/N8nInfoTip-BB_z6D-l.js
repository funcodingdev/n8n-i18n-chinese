import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
//#region ../@n8n/design-system/src/components/N8nInfoTip/InfoTip.vue?vue&type=script&setup=true&lang.ts
var InfoTip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nInfoTip",
	__name: "InfoTip",
	props: {
		theme: { default: "info" },
		type: { default: "note" },
		bold: {
			type: Boolean,
			default: true
		},
		tooltipPlacement: { default: "top" },
		enterable: {
			type: Boolean,
			default: true
		},
		size: { default: void 0 }
	},
	setup(__props) {
		const ICON_MAP = {
			info: "info",
			"info-light": "info",
			warning: "triangle-alert",
			"warning-light": "triangle",
			danger: "triangle-alert",
			success: "circle-check"
		};
		const COLOR_MAP = {
			info: "text-base",
			"info-light": "text-base",
			warning: "warning",
			"warning-light": "warning",
			danger: "danger",
			success: "success"
		};
		const props = __props;
		const iconData = computed(() => {
			return {
				icon: ICON_MAP[props.theme],
				color: COLOR_MAP[props.theme]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				"n8n-info-tip": true,
				[_ctx.$style.infoTip]: true,
				[_ctx.$style[__props.theme]]: true,
				[_ctx.$style[__props.type]]: true,
				[_ctx.$style.bold]: __props.bold
			}) }, [__props.type === "tooltip" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: __props.tooltipPlacement,
				"content-class": _ctx.$style.tooltipContent,
				disabled: __props.type !== "tooltip",
				enterable: __props.enterable
			}, {
				content: withCtx(() => [createBaseVNode("span", null, [renderSlot(_ctx.$slots, "default")])]),
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconText) }, [createVNode(unref(N8nIcon_default), {
					icon: iconData.value.icon,
					color: iconData.value.color,
					size: __props.size
				}, null, 8, [
					"icon",
					"color",
					"size"
				])], 2)]),
				_: 3
			}, 8, [
				"placement",
				"content-class",
				"disabled",
				"enterable"
			])) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.iconText)
			}, [createVNode(unref(N8nIcon_default), {
				icon: iconData.value.icon,
				color: iconData.value.color,
				size: __props.size
			}, null, 8, [
				"icon",
				"color",
				"size"
			]), createBaseVNode("span", null, [renderSlot(_ctx.$slots, "default")])], 2))], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nInfoTip/InfoTip.vue?vue&type=style&index=0&lang.module.scss
var infoTip = "_infoTip_hbzxy_388";
var base = "_base_hbzxy_392";
var bold = "_bold_hbzxy_403";
var note = "_note_hbzxy_407 _base_hbzxy_392";
var tooltipContent = "_tooltipContent_hbzxy_414 _base_hbzxy_392";
var iconText = "_iconText_hbzxy_419";
var shimmer = "_shimmer_hbzxy_1";
var spin = "_spin_hbzxy_1";
var opacityPulse = "_opacityPulse_hbzxy_1";
var popoverIn = "_popoverIn_hbzxy_1";
var fadeIn = "_fadeIn_hbzxy_1";
var collapsibleSlideDown = "_collapsibleSlideDown_hbzxy_1";
var collapsibleSlideUp = "_collapsibleSlideUp_hbzxy_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_hbzxy_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_hbzxy_1";
var blurSwapIn = "_blurSwapIn_hbzxy_1";
var blurSwapOut = "_blurSwapOut_hbzxy_1";
var pulseGlow = "_pulseGlow_hbzxy_1";
var pulseGlowDelayed = "_pulseGlowDelayed_hbzxy_1";
var fade = "_fade_hbzxy_1";
var fadeInUp = "_fadeInUp_hbzxy_1";
var fadeInDown = "_fadeInDown_hbzxy_1";
var fadeInLeft = "_fadeInLeft_hbzxy_1";
var fadeInRight = "_fadeInRight_hbzxy_1";
var fadeOut = "_fadeOut_hbzxy_1";
var fadeOutDown = "_fadeOutDown_hbzxy_1";
var fadeOutUp = "_fadeOutUp_hbzxy_1";
var fadeOutLeft = "_fadeOutLeft_hbzxy_1";
var fadeOutRight = "_fadeOutRight_hbzxy_1";
var ping = "_ping_hbzxy_1";
var blinkBackground = "_blinkBackground_hbzxy_1";
var typingBlink = "_typingBlink_hbzxy_1";
var InfoTip_vue_vue_type_style_index_0_lang_module_default = {
	infoTip,
	base,
	bold,
	note,
	tooltipContent,
	iconText,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_hbzxy_1",
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
//#region ../@n8n/design-system/src/components/N8nInfoTip/index.ts
var N8nInfoTip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InfoTip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InfoTip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nInfoTip_default as t };
