import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, U as mergeProps, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as RouterLink } from "./vue-router-DPnGeMd9.js";
//#region ../@n8n/design-system/src/components/N8nRoute/Route.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"href",
	"target",
	"title",
	"data-test-id"
];
//#endregion
//#region ../@n8n/design-system/src/components/N8nRoute/index.ts
var N8nRoute_default = /* @__PURE__ */ defineComponent({
	name: "N8nRoute",
	__name: "Route",
	props: {
		to: {},
		newWindow: { type: Boolean },
		title: {},
		dataTestId: {}
	},
	setup(__props) {
		const props = __props;
		const useRouterLink = computed(() => {
			if (props.newWindow) return false;
			if (typeof props.to === "string") return props.to.startsWith("/");
			return props.to !== void 0;
		});
		const openNewWindow = computed(() => !useRouterLink.value);
		return (_ctx, _cache) => {
			return useRouterLink.value && __props.to ? (openBlock(), createBlock(unref(RouterLink), mergeProps({
				key: 0,
				to: __props.to,
				role: "link"
			}, _ctx.$attrs, { "data-test-id": __props.dataTestId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["to", "data-test-id"])) : (openBlock(), createElementBlock("a", mergeProps({
				key: 1,
				href: __props.to ? `${__props.to}` : void 0,
				target: openNewWindow.value ? "_blank" : "_self"
			}, _ctx.$attrs, {
				title: __props.title,
				"data-test-id": __props.dataTestId
			}), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1));
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nLink/Link.vue?vue&type=script&setup=true&lang.ts
var Link_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nLink",
	__name: "Link",
	props: {
		to: { default: void 0 },
		size: { default: void 0 },
		newWindow: { type: Boolean },
		bold: {
			type: Boolean,
			default: false
		},
		underline: {
			type: Boolean,
			default: false
		},
		theme: { default: "primary" },
		title: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nRoute_default), mergeProps({
				to: __props.to,
				title: __props.title,
				"new-window": __props.newWindow
			}, _ctx.$attrs, { class: "n8n-link" }), {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style[`${__props.underline ? `${__props.theme}-underline` : __props.theme}`]) }, [createVNode(unref(N8nText_default), {
					size: __props.size,
					bold: __props.bold
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, ["size", "bold"])], 2)]),
				_: 3
			}, 16, [
				"to",
				"title",
				"new-window"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nLink/Link.vue?vue&type=style&index=0&lang.module.scss
var primary = "_primary_100n5_388";
var text = "_text_100n5_395";
var danger = "_danger_100n5_405";
var secondary = "_secondary_100n5_412";
var shimmer = "_shimmer_100n5_1";
var spin = "_spin_100n5_1";
var opacityPulse = "_opacityPulse_100n5_1";
var popoverIn = "_popoverIn_100n5_1";
var fadeIn = "_fadeIn_100n5_1";
var collapsibleSlideDown = "_collapsibleSlideDown_100n5_1";
var collapsibleSlideUp = "_collapsibleSlideUp_100n5_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_100n5_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_100n5_1";
var blurSwapIn = "_blurSwapIn_100n5_1";
var blurSwapOut = "_blurSwapOut_100n5_1";
var pulseGlow = "_pulseGlow_100n5_1";
var pulseGlowDelayed = "_pulseGlowDelayed_100n5_1";
var fade = "_fade_100n5_1";
var fadeInUp = "_fadeInUp_100n5_1";
var fadeInDown = "_fadeInDown_100n5_1";
var fadeInLeft = "_fadeInLeft_100n5_1";
var fadeInRight = "_fadeInRight_100n5_1";
var fadeOut = "_fadeOut_100n5_1";
var fadeOutDown = "_fadeOutDown_100n5_1";
var fadeOutUp = "_fadeOutUp_100n5_1";
var fadeOutLeft = "_fadeOutLeft_100n5_1";
var fadeOutRight = "_fadeOutRight_100n5_1";
var ping = "_ping_100n5_1";
var blinkBackground = "_blinkBackground_100n5_1";
var typingBlink = "_typingBlink_100n5_1";
var Link_vue_vue_type_style_index_0_lang_module_default = {
	primary,
	text,
	danger,
	secondary,
	"primary-underline": "_primary-underline_100n5_419 _primary_100n5_388",
	"text-underline": "_text-underline_100n5_424 _text_100n5_395",
	"danger-underline": "_danger-underline_100n5_429 _danger_100n5_405",
	"secondary-underline": "_secondary-underline_100n5_434 _secondary_100n5_412",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_100n5_1",
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
//#region ../@n8n/design-system/src/components/N8nLink/index.ts
var N8nLink_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Link_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Link_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nRoute_default as n, N8nLink_default as t };
