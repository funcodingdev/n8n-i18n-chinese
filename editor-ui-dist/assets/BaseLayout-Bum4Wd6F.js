import { $ as openBlock, C as createBaseVNode, E as createElementBlock, N as defineComponent, T as createCommentVNode, X as onMounted, it as renderSlot, pt as useTemplateRef, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region src/app/layouts/BaseLayout.vue?vue&type=script&setup=true&lang.ts
var BaseLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BaseLayout",
	emits: ["mounted"],
	setup(__props, { emit: __emit }) {
		const layoutRef = useTemplateRef("layout");
		const emit = __emit;
		onMounted(() => {
			if (layoutRef.value) emit("mounted", layoutRef.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref: "layout",
				class: normalizeClass(["app-grid", _ctx.$style.appGrid])
			}, [
				!!_ctx.$slots.banners ? (openBlock(), createElementBlock("div", {
					key: 0,
					id: "banners",
					class: normalizeClass(_ctx.$style.banners)
				}, [renderSlot(_ctx.$slots, "banners")], 2)) : createCommentVNode("", true),
				!!_ctx.$slots.header ? (openBlock(), createElementBlock("header", {
					key: 1,
					id: "header",
					class: normalizeClass(_ctx.$style.header)
				}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true),
				!!_ctx.$slots.sidebar ? (openBlock(), createElementBlock("aside", {
					key: 2,
					id: "sidebar",
					class: normalizeClass(_ctx.$style.sidebar)
				}, [renderSlot(_ctx.$slots, "sidebar")], 2)) : createCommentVNode("", true),
				createBaseVNode("main", {
					id: "content",
					class: normalizeClass(_ctx.$style.content)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [renderSlot(_ctx.$slots, "default")], 2), !!_ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.contentFooter)
				}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)], 2),
				!!_ctx.$slots.aside ? (openBlock(), createElementBlock("aside", {
					key: 3,
					id: "aside",
					class: normalizeClass(_ctx.$style.aside)
				}, [renderSlot(_ctx.$slots, "aside")], 2)) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "overlays")
			], 2);
		};
	}
});
//#endregion
//#region src/app/layouts/BaseLayout.vue?vue&type=style&index=0&lang.module.scss
var appGrid = "_appGrid_1kla7_388";
var banners = "_banners_1kla7_399";
var header = "_header_1kla7_405";
var sidebar = "_sidebar_1kla7_411";
var aside = "_aside_1kla7_415";
var content = "_content_1kla7_423";
var contentWrapper = "_contentWrapper_1kla7_435";
var contentFooter = "_contentFooter_1kla7_449";
var shimmer = "_shimmer_1kla7_1";
var spin = "_spin_1kla7_1";
var opacityPulse = "_opacityPulse_1kla7_1";
var popoverIn = "_popoverIn_1kla7_1";
var fadeIn = "_fadeIn_1kla7_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1kla7_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1kla7_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1kla7_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1kla7_1";
var blurSwapIn = "_blurSwapIn_1kla7_1";
var blurSwapOut = "_blurSwapOut_1kla7_1";
var pulseGlow = "_pulseGlow_1kla7_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1kla7_1";
var fade = "_fade_1kla7_1";
var fadeInUp = "_fadeInUp_1kla7_1";
var fadeInDown = "_fadeInDown_1kla7_1";
var fadeInLeft = "_fadeInLeft_1kla7_1";
var fadeInRight = "_fadeInRight_1kla7_1";
var fadeOut = "_fadeOut_1kla7_1";
var fadeOutDown = "_fadeOutDown_1kla7_1";
var fadeOutUp = "_fadeOutUp_1kla7_1";
var fadeOutLeft = "_fadeOutLeft_1kla7_1";
var fadeOutRight = "_fadeOutRight_1kla7_1";
var ping = "_ping_1kla7_1";
var blinkBackground = "_blinkBackground_1kla7_1";
var typingBlink = "_typingBlink_1kla7_1";
var BaseLayout_vue_vue_type_style_index_0_lang_module_default = {
	appGrid,
	banners,
	header,
	sidebar,
	aside,
	content,
	contentWrapper,
	contentFooter,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1kla7_1",
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
var BaseLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BaseLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BaseLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { BaseLayout_default as t };
