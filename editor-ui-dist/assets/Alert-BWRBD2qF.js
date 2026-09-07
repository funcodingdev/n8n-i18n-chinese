import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, c as useCssModule, it as renderSlot, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
//#region ../@n8n/design-system/src/components/N8nAlert/Alert.vue?vue&type=script&setup=true&lang.ts
var Alert_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Alert",
	props: {
		title: {},
		type: { default: "info" },
		description: {},
		center: { type: Boolean },
		showIcon: {
			type: Boolean,
			default: true
		},
		effect: { default: "light" },
		background: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const icon = computed(() => {
			switch (props.type) {
				case "success": return "circle-check";
				case "warning": return "triangle-alert";
				case "error": return "circle-x";
				default: return "info";
			}
		});
		const $style = useCssModule();
		const alertBoxClassNames = computed(() => {
			const classNames = ["n8n-alert", $style.alert];
			if (props.type) classNames.push($style[props.type]);
			if (props.effect) classNames.push($style[props.effect]);
			if (props.center) classNames.push($style.center);
			if (props.background) classNames.push($style.background);
			return classNames;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(alertBoxClassNames.value),
				role: "alert"
			}, [createBaseVNode("div", { class: normalizeClass(unref($style).content) }, [__props.showIcon || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(unref($style).icon)
			}, [__props.showIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: icon.value
			}, null, 8, ["icon"])) : _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(unref($style).text) }, [_ctx.$slots.title || __props.title ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).title)
			}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(__props.title), 1)])], 2)) : createCommentVNode("", true), _ctx.$slots.default || __props.description ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass({
					[unref($style).description]: true,
					[unref($style).hasTitle]: _ctx.$slots.title || __props.title
				})
			}, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.description), 1)])], 2)) : createCommentVNode("", true)], 2)], 2), _ctx.$slots.aside ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref($style).aside)
			}, [renderSlot(_ctx.$slots, "aside")], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAlert/Alert.vue?vue&type=style&index=0&lang.module.scss
var alert = "_alert_136rj_388";
var center = "_center_136rj_397";
var success = "_success_136rj_400";
var light = "_light_136rj_400";
var background = "_background_136rj_403";
var dark = "_dark_136rj_410";
var info = "_info_136rj_420";
var warning = "_warning_136rj_440";
var error = "_error_136rj_460";
var content = "_content_136rj_481";
var icon = "_icon_136rj_486";
var text = "_text_136rj_494";
var title = "_title_136rj_500";
var description = "_description_136rj_506";
var hasTitle = "_hasTitle_136rj_509";
var aside = "_aside_136rj_513";
var shimmer = "_shimmer_136rj_1";
var spin = "_spin_136rj_1";
var opacityPulse = "_opacityPulse_136rj_1";
var popoverIn = "_popoverIn_136rj_1";
var fadeIn = "_fadeIn_136rj_1";
var collapsibleSlideDown = "_collapsibleSlideDown_136rj_1";
var collapsibleSlideUp = "_collapsibleSlideUp_136rj_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_136rj_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_136rj_1";
var blurSwapIn = "_blurSwapIn_136rj_1";
var blurSwapOut = "_blurSwapOut_136rj_1";
var pulseGlow = "_pulseGlow_136rj_1";
var pulseGlowDelayed = "_pulseGlowDelayed_136rj_1";
var fade = "_fade_136rj_1";
var fadeInUp = "_fadeInUp_136rj_1";
var fadeInDown = "_fadeInDown_136rj_1";
var fadeInLeft = "_fadeInLeft_136rj_1";
var fadeInRight = "_fadeInRight_136rj_1";
var fadeOut = "_fadeOut_136rj_1";
var fadeOutDown = "_fadeOutDown_136rj_1";
var fadeOutUp = "_fadeOutUp_136rj_1";
var fadeOutLeft = "_fadeOutLeft_136rj_1";
var fadeOutRight = "_fadeOutRight_136rj_1";
var ping = "_ping_136rj_1";
var blinkBackground = "_blinkBackground_136rj_1";
var typingBlink = "_typingBlink_136rj_1";
var Alert_vue_vue_type_style_index_0_lang_module_default = {
	alert,
	center,
	success,
	light,
	background,
	"el-alert__description": "_el-alert__description_136rj_407",
	dark,
	info,
	warning,
	error,
	content,
	icon,
	text,
	title,
	description,
	hasTitle,
	aside,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_136rj_1",
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
var Alert_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Alert_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Alert_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Alert_default as t };
