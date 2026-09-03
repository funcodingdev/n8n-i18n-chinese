import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
//#region src/features/resolvers/components/PrivateCredentialIcon.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var PrivateCredentialIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PrivateCredentialIcon",
	props: {
		tooltip: {
			type: Boolean,
			default: true
		},
		tooltipTitle: { default: void 0 },
		tooltipText: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const body = computed(() => props.tooltipText ?? i18n.baseText("credentials.private.tooltip"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"as-child": "",
				disabled: !__props.tooltip,
				placement: "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [__props.tooltipTitle ? (openBlock(), createElementBlock("strong", _hoisted_1, toDisplayString(__props.tooltipTitle), 1)) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(body.value), 1)], 2)]),
				default: withCtx(() => [createVNode(unref(N8nIcon_default), mergeProps(_ctx.$attrs, {
					"data-test-id": "private-credential-icon",
					icon: "user-round-key"
				}), null, 16)]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
//#endregion
//#region src/features/resolvers/components/PrivateCredentialIcon.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_1a86q_388";
var shimmer = "_shimmer_1a86q_1";
var spin = "_spin_1a86q_1";
var opacityPulse = "_opacityPulse_1a86q_1";
var popoverIn = "_popoverIn_1a86q_1";
var fadeIn = "_fadeIn_1a86q_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1a86q_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1a86q_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1a86q_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1a86q_1";
var blurSwapIn = "_blurSwapIn_1a86q_1";
var blurSwapOut = "_blurSwapOut_1a86q_1";
var pulseGlow = "_pulseGlow_1a86q_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1a86q_1";
var fade = "_fade_1a86q_1";
var fadeInUp = "_fadeInUp_1a86q_1";
var fadeInDown = "_fadeInDown_1a86q_1";
var fadeInLeft = "_fadeInLeft_1a86q_1";
var fadeInRight = "_fadeInRight_1a86q_1";
var fadeOut = "_fadeOut_1a86q_1";
var fadeOutDown = "_fadeOutDown_1a86q_1";
var fadeOutUp = "_fadeOutUp_1a86q_1";
var fadeOutLeft = "_fadeOutLeft_1a86q_1";
var fadeOutRight = "_fadeOutRight_1a86q_1";
var ping = "_ping_1a86q_1";
var blinkBackground = "_blinkBackground_1a86q_1";
var typingBlink = "_typingBlink_1a86q_1";
var PrivateCredentialIcon_vue_vue_type_style_index_0_lang_module_default = {
	content,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1a86q_1",
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
var PrivateCredentialIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PrivateCredentialIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PrivateCredentialIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PrivateCredentialIcon_default as t };
