import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, bt as withCtx, it as renderSlot, j as createVNode, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
//#region ../@n8n/design-system/src/components/N8nSettingsLayout/SettingsLayout.vue?vue&type=script&setup=true&lang.ts
var SettingsLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsLayout",
	__name: "SettingsLayout",
	props: {
		tag: { default: "div" },
		showBack: {
			type: Boolean,
			default: false
		},
		backLabel: { default: "Back" },
		fullWidth: {
			type: Boolean,
			default: false
		}
	},
	emits: ["back"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), { class: normalizeClass(_ctx.$style.layout) }, {
				default: withCtx(() => [__props.showBack || _ctx.$slots.back ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.backRow)
				}, [renderSlot(_ctx.$slots, "back", {}, () => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					class: normalizeClass(_ctx.$style.backButton),
					"data-test-id": "settings-back-button",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("back"))
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "arrow-left" })]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(__props.backLabel), 1)]),
					_: 1
				}, 8, ["class"])])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.fullWidth]: __props.fullWidth }]) }, [renderSlot(_ctx.$slots, "default")], 2)]),
				_: 3
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSettingsLayout/SettingsLayout.vue?vue&type=style&index=0&lang.module.scss
var layout = "_layout_diuti_389";
var backRow = "_backRow_diuti_401";
var backButton = "_backButton_diuti_406";
var content = "_content_diuti_411";
var fullWidth = "_fullWidth_diuti_445";
var shimmer = "_shimmer_diuti_1";
var spin = "_spin_diuti_1";
var opacityPulse = "_opacityPulse_diuti_1";
var popoverIn = "_popoverIn_diuti_1";
var fadeIn = "_fadeIn_diuti_1";
var collapsibleSlideDown = "_collapsibleSlideDown_diuti_1";
var collapsibleSlideUp = "_collapsibleSlideUp_diuti_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_diuti_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_diuti_1";
var blurSwapIn = "_blurSwapIn_diuti_1";
var blurSwapOut = "_blurSwapOut_diuti_1";
var pulseGlow = "_pulseGlow_diuti_1";
var pulseGlowDelayed = "_pulseGlowDelayed_diuti_1";
var fade = "_fade_diuti_1";
var fadeInUp = "_fadeInUp_diuti_1";
var fadeInDown = "_fadeInDown_diuti_1";
var fadeInLeft = "_fadeInLeft_diuti_1";
var fadeInRight = "_fadeInRight_diuti_1";
var fadeOut = "_fadeOut_diuti_1";
var fadeOutDown = "_fadeOutDown_diuti_1";
var fadeOutUp = "_fadeOutUp_diuti_1";
var fadeOutLeft = "_fadeOutLeft_diuti_1";
var fadeOutRight = "_fadeOutRight_diuti_1";
var ping = "_ping_diuti_1";
var blinkBackground = "_blinkBackground_diuti_1";
var typingBlink = "_typingBlink_diuti_1";
var SettingsLayout_vue_vue_type_style_index_0_lang_module_default = {
	layout,
	backRow,
	backButton,
	content,
	fullWidth,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_diuti_1",
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
var SettingsLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsLayout_default as t };
