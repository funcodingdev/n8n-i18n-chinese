import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DxozP3cY.js";
//#region src/app/views/ErrorView.vue?vue&type=script&setup=true&lang.ts
var ErrorView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ErrorView",
	props: {
		messageKey: {},
		errorCode: {},
		redirectTextKey: {},
		redirectPage: {}
	},
	setup(__props) {
		const router = useRouter();
		const props = __props;
		const i18n = useI18n();
		function onButtonClick() {
			router.push({ name: props.redirectPage ?? VIEWS.HOMEPAGE });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.message) }, [createBaseVNode("div", null, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.messageKey)), 1)]),
					_: 1
				})]), createBaseVNode("div", null, [__props.errorCode ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.errorCode) + " " + toDisplayString(unref(i18n).baseText("error")), 1)]),
					_: 1
				})) : createCommentVNode("", true)])], 2),
				createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText(__props.redirectTextKey),
					onClick: onButtonClick
				}, null, 8, ["label"])
			], 2);
		};
	}
});
//#endregion
//#region src/app/views/ErrorView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1oftu_388";
var icon = "_icon_1oftu_397";
var message = "_message_1oftu_404";
var shimmer = "_shimmer_1oftu_1";
var spin = "_spin_1oftu_1";
var opacityPulse = "_opacityPulse_1oftu_1";
var popoverIn = "_popoverIn_1oftu_1";
var fadeIn = "_fadeIn_1oftu_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1oftu_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1oftu_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1oftu_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1oftu_1";
var blurSwapIn = "_blurSwapIn_1oftu_1";
var blurSwapOut = "_blurSwapOut_1oftu_1";
var pulseGlow = "_pulseGlow_1oftu_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1oftu_1";
var fade = "_fade_1oftu_1";
var fadeInUp = "_fadeInUp_1oftu_1";
var fadeInDown = "_fadeInDown_1oftu_1";
var fadeInLeft = "_fadeInLeft_1oftu_1";
var fadeInRight = "_fadeInRight_1oftu_1";
var fadeOut = "_fadeOut_1oftu_1";
var fadeOutDown = "_fadeOutDown_1oftu_1";
var fadeOutUp = "_fadeOutUp_1oftu_1";
var fadeOutLeft = "_fadeOutLeft_1oftu_1";
var fadeOutRight = "_fadeOutRight_1oftu_1";
var ping = "_ping_1oftu_1";
var blinkBackground = "_blinkBackground_1oftu_1";
var typingBlink = "_typingBlink_1oftu_1";
var ErrorView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	icon,
	message,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1oftu_1",
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
var ErrorView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ErrorView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ErrorView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ErrorView_default as default };
