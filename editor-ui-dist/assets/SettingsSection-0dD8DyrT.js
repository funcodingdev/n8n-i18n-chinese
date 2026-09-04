import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, ft as useSlots, it as renderSlot, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
//#region ../@n8n/design-system/src/components/N8nSettingsSection/SettingsSection.vue?vue&type=script&setup=true&lang.ts
var SettingsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsSection",
	__name: "SettingsSection",
	props: {
		title: { default: void 0 },
		description: { default: void 0 },
		headingTag: { default: "h2" }
	},
	setup(__props) {
		const props = __props;
		const slots = useSlots();
		const hasHeader = computed(() => Boolean(props.title || props.description || slots.title || slots.description));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", { class: normalizeClass(_ctx.$style.section) }, [hasHeader.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [renderSlot(_ctx.$slots, "title", {}, () => [__props.title ? (openBlock(), createBlock(unref(N8nHeading_default), {
				key: 0,
				tag: __props.headingTag,
				step: "md",
				color: "text-dark"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			}, 8, ["tag"])) : createCommentVNode("", true)]), renderSlot(_ctx.$slots, "description", {}, () => [__props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			})) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.groups) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSettingsSection/SettingsSection.vue?vue&type=style&index=0&lang.module.scss
var section = "_section_hbs9s_389";
var header = "_header_hbs9s_406";
var groups = "_groups_hbs9s_412";
var shimmer = "_shimmer_hbs9s_1";
var spin = "_spin_hbs9s_1";
var opacityPulse = "_opacityPulse_hbs9s_1";
var popoverIn = "_popoverIn_hbs9s_1";
var fadeIn = "_fadeIn_hbs9s_1";
var collapsibleSlideDown = "_collapsibleSlideDown_hbs9s_1";
var collapsibleSlideUp = "_collapsibleSlideUp_hbs9s_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_hbs9s_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_hbs9s_1";
var blurSwapIn = "_blurSwapIn_hbs9s_1";
var blurSwapOut = "_blurSwapOut_hbs9s_1";
var pulseGlow = "_pulseGlow_hbs9s_1";
var pulseGlowDelayed = "_pulseGlowDelayed_hbs9s_1";
var fade = "_fade_hbs9s_1";
var fadeInUp = "_fadeInUp_hbs9s_1";
var fadeInDown = "_fadeInDown_hbs9s_1";
var fadeInLeft = "_fadeInLeft_hbs9s_1";
var fadeInRight = "_fadeInRight_hbs9s_1";
var fadeOut = "_fadeOut_hbs9s_1";
var fadeOutDown = "_fadeOutDown_hbs9s_1";
var fadeOutUp = "_fadeOutUp_hbs9s_1";
var fadeOutLeft = "_fadeOutLeft_hbs9s_1";
var fadeOutRight = "_fadeOutRight_hbs9s_1";
var ping = "_ping_hbs9s_1";
var blinkBackground = "_blinkBackground_hbs9s_1";
var typingBlink = "_typingBlink_hbs9s_1";
var SettingsSection_vue_vue_type_style_index_0_lang_module_default = {
	section,
	header,
	groups,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_hbs9s_1",
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
var SettingsSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsSection_default as t };
