import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, c as useCssModule, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nCard/Card.vue?vue&type=script&setup=true&lang.ts
var Card_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nCard",
	__name: "Card",
	props: { hoverable: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => ({
			card: true,
			[$style.card]: true,
			[$style.hoverable]: props.hoverable
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: classes.value }, _ctx.$attrs), [
				_ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "card-prepend",
					class: normalizeClass(unref($style).icon)
				}, [renderSlot(_ctx.$slots, "prepend")], 2)) : createCommentVNode("", true),
				createBaseVNode("div", {
					class: normalizeClass(unref($style).content),
					"data-test-id": "card-content"
				}, [
					_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(unref($style).header)
					}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true),
					_ctx.$slots.default ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(unref($style).body)
					}, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("", true),
					_ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(unref($style).footer)
					}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)
				], 2),
				_ctx.$slots.append ? (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "card-append",
					class: normalizeClass([unref($style).append, "n8n-card-append"])
				}, [renderSlot(_ctx.$slots, "append")], 2)) : createCommentVNode("", true)
			], 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nCard/Card.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_tumvc_388";
var header = "_header_tumvc_399";
var footer = "_footer_tumvc_400";
var content = "_content_tumvc_407";
var body = "_body_tumvc_415";
var icon = "_icon_tumvc_424";
var hoverable = "_hoverable_tumvc_432";
var append = "_append_tumvc_443";
var shimmer = "_shimmer_tumvc_1";
var spin = "_spin_tumvc_1";
var opacityPulse = "_opacityPulse_tumvc_1";
var popoverIn = "_popoverIn_tumvc_1";
var fadeIn = "_fadeIn_tumvc_1";
var collapsibleSlideDown = "_collapsibleSlideDown_tumvc_1";
var collapsibleSlideUp = "_collapsibleSlideUp_tumvc_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_tumvc_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_tumvc_1";
var blurSwapIn = "_blurSwapIn_tumvc_1";
var blurSwapOut = "_blurSwapOut_tumvc_1";
var pulseGlow = "_pulseGlow_tumvc_1";
var pulseGlowDelayed = "_pulseGlowDelayed_tumvc_1";
var fade = "_fade_tumvc_1";
var fadeInUp = "_fadeInUp_tumvc_1";
var fadeInDown = "_fadeInDown_tumvc_1";
var fadeInLeft = "_fadeInLeft_tumvc_1";
var fadeInRight = "_fadeInRight_tumvc_1";
var fadeOut = "_fadeOut_tumvc_1";
var fadeOutDown = "_fadeOutDown_tumvc_1";
var fadeOutUp = "_fadeOutUp_tumvc_1";
var fadeOutLeft = "_fadeOutLeft_tumvc_1";
var fadeOutRight = "_fadeOutRight_tumvc_1";
var ping = "_ping_tumvc_1";
var blinkBackground = "_blinkBackground_tumvc_1";
var typingBlink = "_typingBlink_tumvc_1";
var Card_vue_vue_type_style_index_0_lang_module_default = {
	card,
	header,
	footer,
	content,
	body,
	icon,
	hoverable,
	append,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_tumvc_1",
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
//#region ../@n8n/design-system/src/components/N8nCard/index.ts
var N8nCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Card_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Card_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nCard_default as t };
