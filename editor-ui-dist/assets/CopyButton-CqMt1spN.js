import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, S as computed, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as useClipboard } from "./useClipboard-FfSvbxpY.js";
//#region src/features/ai/chatHub/components/CopyButton.vue?vue&type=script&setup=true&lang.ts
var CopyButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CopyButton",
	props: { content: {} },
	setup(__props) {
		const i18n = useI18n();
		const clipboard = useClipboard();
		const justCopied = ref(false);
		const copyTooltip = computed(() => {
			return justCopied.value ? i18n.baseText("generic.copied") : i18n.baseText("generic.copy");
		});
		async function handleCopy() {
			await clipboard.copy(__props.content);
			justCopied.value = true;
			setTimeout(() => {
				justCopied.value = false;
			}, 1e3);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: "bottom",
				"show-after": 300
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(copyTooltip.value), 1)]),
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					variant: "ghost",
					icon: justCopied.value ? "check" : "copy",
					size: "small",
					"icon-size": "medium",
					class: normalizeClass(_ctx.$style.button),
					tabindex: "0",
					"aria-label": copyTooltip.value,
					onClick: handleCopy
				}, null, 8, [
					"icon",
					"class",
					"aria-label"
				])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/CopyButton.vue?vue&type=style&index=0&lang.module.scss
var button = "_button_418vi_388";
var shimmer = "_shimmer_418vi_1";
var spin = "_spin_418vi_1";
var opacityPulse = "_opacityPulse_418vi_1";
var popoverIn = "_popoverIn_418vi_1";
var fadeIn = "_fadeIn_418vi_1";
var collapsibleSlideDown = "_collapsibleSlideDown_418vi_1";
var collapsibleSlideUp = "_collapsibleSlideUp_418vi_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_418vi_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_418vi_1";
var blurSwapIn = "_blurSwapIn_418vi_1";
var blurSwapOut = "_blurSwapOut_418vi_1";
var pulseGlow = "_pulseGlow_418vi_1";
var pulseGlowDelayed = "_pulseGlowDelayed_418vi_1";
var fade = "_fade_418vi_1";
var fadeInUp = "_fadeInUp_418vi_1";
var fadeInDown = "_fadeInDown_418vi_1";
var fadeInLeft = "_fadeInLeft_418vi_1";
var fadeInRight = "_fadeInRight_418vi_1";
var fadeOut = "_fadeOut_418vi_1";
var fadeOutDown = "_fadeOutDown_418vi_1";
var fadeOutUp = "_fadeOutUp_418vi_1";
var fadeOutLeft = "_fadeOutLeft_418vi_1";
var fadeOutRight = "_fadeOutRight_418vi_1";
var ping = "_ping_418vi_1";
var blinkBackground = "_blinkBackground_418vi_1";
var typingBlink = "_typingBlink_418vi_1";
var CopyButton_vue_vue_type_style_index_0_lang_module_default = {
	button,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_418vi_1",
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
var CopyButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CopyButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CopyButton_default as t };
