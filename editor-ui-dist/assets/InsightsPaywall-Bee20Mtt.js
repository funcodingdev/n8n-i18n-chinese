import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, bt as withCtx, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-mu-wA-a0.js";
//#region src/features/execution/insights/components/InsightsPaywall.vue?vue&type=script&setup=true&lang.ts
var InsightsPaywall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsPaywall",
	setup(__props) {
		const pageRedirectionHelper = usePageRedirectionHelper();
		const i18n = useI18n();
		const goToUpgrade = async () => {
			await pageRedirectionHelper.goToUpgrade("insights", "upgrade-insights");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.callout) }, [
				createVNode(unref(N8nIcon_default), {
					icon: "lock",
					size: "xlarge"
				}),
				createVNode(unref(N8nText_default), {
					bold: "",
					tag: "h4",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.title")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.description")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nButton_default), {
					variant: "solid",
					"native-type": "button",
					size: "large",
					onClick: goToUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
					_: 1
				})
			], 2);
		};
	}
});
//#endregion
//#region src/features/execution/insights/components/InsightsPaywall.vue?vue&type=style&index=0&lang.module.scss
var callout = "_callout_myaez_388";
var shimmer = "_shimmer_myaez_1";
var spin = "_spin_myaez_1";
var opacityPulse = "_opacityPulse_myaez_1";
var popoverIn = "_popoverIn_myaez_1";
var fadeIn = "_fadeIn_myaez_1";
var collapsibleSlideDown = "_collapsibleSlideDown_myaez_1";
var collapsibleSlideUp = "_collapsibleSlideUp_myaez_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_myaez_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_myaez_1";
var blurSwapIn = "_blurSwapIn_myaez_1";
var blurSwapOut = "_blurSwapOut_myaez_1";
var pulseGlow = "_pulseGlow_myaez_1";
var pulseGlowDelayed = "_pulseGlowDelayed_myaez_1";
var fade = "_fade_myaez_1";
var fadeInUp = "_fadeInUp_myaez_1";
var fadeInDown = "_fadeInDown_myaez_1";
var fadeInLeft = "_fadeInLeft_myaez_1";
var fadeInRight = "_fadeInRight_myaez_1";
var fadeOut = "_fadeOut_myaez_1";
var fadeOutDown = "_fadeOutDown_myaez_1";
var fadeOutUp = "_fadeOutUp_myaez_1";
var fadeOutLeft = "_fadeOutLeft_myaez_1";
var fadeOutRight = "_fadeOutRight_myaez_1";
var ping = "_ping_myaez_1";
var blinkBackground = "_blinkBackground_myaez_1";
var typingBlink = "_typingBlink_myaez_1";
var InsightsPaywall_vue_vue_type_style_index_0_lang_module_default = {
	callout,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_myaez_1",
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
var InsightsPaywall_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InsightsPaywall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsPaywall_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InsightsPaywall_default as default };
