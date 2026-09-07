import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, bt as withCtx, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
//#region ../@n8n/design-system/src/components/N8nSettingsRowConfigure/SettingsRowConfigure.vue?vue&type=script&setup=true&lang.ts
var SettingsRowConfigure_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsRowConfigure",
	__name: "SettingsRowConfigure",
	props: { value: { default: "Configure" } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(_ctx.$style.configure),
				"data-test-id": "settings-row-configure"
			}, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.value),
				size: "small",
				color: "text-dark"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.value), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nIcon_default), {
				class: normalizeClass(_ctx.$style.chevron),
				icon: "chevron-right",
				size: "small"
			}, null, 8, ["class"])], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSettingsRowConfigure/SettingsRowConfigure.vue?vue&type=style&index=0&lang.module.scss
var configure = "_configure_1sqrq_388";
var value = "_value_1sqrq_395";
var chevron = "_chevron_1sqrq_402";
var shimmer = "_shimmer_1sqrq_1";
var spin = "_spin_1sqrq_1";
var opacityPulse = "_opacityPulse_1sqrq_1";
var popoverIn = "_popoverIn_1sqrq_1";
var fadeIn = "_fadeIn_1sqrq_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1sqrq_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1sqrq_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1sqrq_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1sqrq_1";
var blurSwapIn = "_blurSwapIn_1sqrq_1";
var blurSwapOut = "_blurSwapOut_1sqrq_1";
var pulseGlow = "_pulseGlow_1sqrq_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1sqrq_1";
var fade = "_fade_1sqrq_1";
var fadeInUp = "_fadeInUp_1sqrq_1";
var fadeInDown = "_fadeInDown_1sqrq_1";
var fadeInLeft = "_fadeInLeft_1sqrq_1";
var fadeInRight = "_fadeInRight_1sqrq_1";
var fadeOut = "_fadeOut_1sqrq_1";
var fadeOutDown = "_fadeOutDown_1sqrq_1";
var fadeOutUp = "_fadeOutUp_1sqrq_1";
var fadeOutLeft = "_fadeOutLeft_1sqrq_1";
var fadeOutRight = "_fadeOutRight_1sqrq_1";
var ping = "_ping_1sqrq_1";
var blinkBackground = "_blinkBackground_1sqrq_1";
var typingBlink = "_typingBlink_1sqrq_1";
var SettingsRowConfigure_vue_vue_type_style_index_0_lang_module_default = {
	configure,
	value,
	chevron,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1sqrq_1",
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
var SettingsRowConfigure_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsRowConfigure_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsRowConfigure_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsRowConfigure_default as t };
