import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, bt as withCtx, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
//#region src/features/collaboration/projects/components/ProjectIcon.vue?vue&type=script&setup=true&lang.ts
var ProjectIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectIcon",
	props: {
		icon: {},
		size: { default: "medium" },
		round: {
			type: Boolean,
			default: false
		},
		borderLess: {
			type: Boolean,
			default: false
		},
		color: { default: "text-base" }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				_ctx.$style.container,
				_ctx.$style[props.size],
				{
					[_ctx.$style.round]: props.round,
					[_ctx.$style.borderless]: props.borderLess
				}
			]) }, [__props.icon.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: __props.icon.value,
				class: normalizeClass(_ctx.$style.icon),
				color: __props.icon.color ?? __props.color
			}, null, 8, [
				"icon",
				"class",
				"color"
			])) : __props.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				color: "text-light",
				class: normalizeClass(_ctx.$style.emoji)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.icon.value), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/collaboration/projects/components/ProjectIcon.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_ofnq7_388";
var round = "_round_ofnq7_395";
var borderless = "_borderless_ofnq7_398";
var mini = "_mini_ofnq7_402";
var icon = "_icon_ofnq7_406";
var emoji = "_emoji_ofnq7_409";
var small = "_small_ofnq7_413";
var medium = "_medium_ofnq7_421";
var large = "_large_ofnq7_429";
var shimmer = "_shimmer_ofnq7_1";
var spin = "_spin_ofnq7_1";
var opacityPulse = "_opacityPulse_ofnq7_1";
var popoverIn = "_popoverIn_ofnq7_1";
var fadeIn = "_fadeIn_ofnq7_1";
var collapsibleSlideDown = "_collapsibleSlideDown_ofnq7_1";
var collapsibleSlideUp = "_collapsibleSlideUp_ofnq7_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_ofnq7_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_ofnq7_1";
var blurSwapIn = "_blurSwapIn_ofnq7_1";
var blurSwapOut = "_blurSwapOut_ofnq7_1";
var pulseGlow = "_pulseGlow_ofnq7_1";
var pulseGlowDelayed = "_pulseGlowDelayed_ofnq7_1";
var fade = "_fade_ofnq7_1";
var fadeInUp = "_fadeInUp_ofnq7_1";
var fadeInDown = "_fadeInDown_ofnq7_1";
var fadeInLeft = "_fadeInLeft_ofnq7_1";
var fadeInRight = "_fadeInRight_ofnq7_1";
var fadeOut = "_fadeOut_ofnq7_1";
var fadeOutDown = "_fadeOutDown_ofnq7_1";
var fadeOutUp = "_fadeOutUp_ofnq7_1";
var fadeOutLeft = "_fadeOutLeft_ofnq7_1";
var fadeOutRight = "_fadeOutRight_ofnq7_1";
var ping = "_ping_ofnq7_1";
var blinkBackground = "_blinkBackground_ofnq7_1";
var typingBlink = "_typingBlink_ofnq7_1";
var ProjectIcon_vue_vue_type_style_index_0_lang_module_default = {
	container,
	round,
	borderless,
	mini,
	icon,
	emoji,
	small,
	medium,
	large,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_ofnq7_1",
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
var ProjectIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ProjectIcon_default as t };
