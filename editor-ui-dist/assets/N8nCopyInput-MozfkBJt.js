import { $ as openBlock, C as createBaseVNode, Gt as unref, It as ref, N as defineComponent, S as computed, bt as withCtx, j as createVNode, n as Transition, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { l as useClipboard } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-CkIGinhL.js";
//#region ../@n8n/design-system/src/components/N8nCopyInput/CopyInput.vue?vue&type=script&setup=true&lang.ts
var CopyInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nCopyInput",
	__name: "CopyInput",
	props: {
		value: {},
		displayValue: { default: void 0 },
		size: { default: "large" },
		copyLabel: { default: "Copy" },
		copiedLabel: { default: "Copied to clipboard" },
		feedbackDurationMs: { default: 2e3 }
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const clipboard = useClipboard({ legacy: true });
		const showCopiedFeedback = ref(false);
		let feedbackTimer;
		onBeforeUnmount(() => clearTimeout(feedbackTimer));
		async function onCopyClick() {
			await clipboard.copy(props.value);
			emit("copy", props.value);
			showCopiedFeedback.value = true;
			clearTimeout(feedbackTimer);
			feedbackTimer = setTimeout(() => {
				showCopiedFeedback.value = false;
			}, props.feedbackDurationMs);
		}
		const buttonSize = computed(() => {
			switch (props.size) {
				case "mini":
				case "small": return "small";
				case "large":
				case "xlarge": return "large";
				default: return "medium";
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Input_default), {
				"model-value": __props.displayValue ?? __props.value,
				size: __props.size,
				readonly: "",
				class: normalizeClass(_ctx.$style.copyInput)
			}, {
				append: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: buttonSize.value,
					"icon-only": "",
					"aria-label": showCopiedFeedback.value ? __props.copiedLabel : __props.copyLabel,
					"data-test-id": "copy-input-button",
					onClick: onCopyClick
				}, {
					icon: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconSwap) }, [createVNode(Transition, {
						"enter-active-class": _ctx.$style.swapEnterActive,
						"leave-active-class": _ctx.$style.swapLeaveActive
					}, {
						default: withCtx(() => [showCopiedFeedback.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: "check",
							icon: "check",
							size: buttonSize.value
						}, null, 8, ["size"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: "copy",
							icon: "copy",
							size: buttonSize.value
						}, null, 8, ["size"]))]),
						_: 1
					}, 8, ["enter-active-class", "leave-active-class"])], 2)]),
					_: 1
				}, 8, ["size", "aria-label"])]),
				_: 1
			}, 8, [
				"model-value",
				"size",
				"class"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nCopyInput/CopyInput.vue?vue&type=style&index=0&lang.module.scss
var copyInput = "_copyInput_zeps1_400";
var iconSwap = "_iconSwap_zeps1_424";
var swapEnterActive = "_swapEnterActive_zeps1_432";
var blurSwapIn = "_blurSwapIn_zeps1_1";
var swapLeaveActive = "_swapLeaveActive_zeps1_441";
var blurSwapOut = "_blurSwapOut_zeps1_1";
var shimmer = "_shimmer_zeps1_1";
var spin = "_spin_zeps1_1";
var opacityPulse = "_opacityPulse_zeps1_1";
var popoverIn = "_popoverIn_zeps1_1";
var fadeIn = "_fadeIn_zeps1_1";
var collapsibleSlideDown = "_collapsibleSlideDown_zeps1_1";
var collapsibleSlideUp = "_collapsibleSlideUp_zeps1_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_zeps1_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_zeps1_1";
var pulseGlow = "_pulseGlow_zeps1_1";
var pulseGlowDelayed = "_pulseGlowDelayed_zeps1_1";
var fade = "_fade_zeps1_1";
var fadeInUp = "_fadeInUp_zeps1_1";
var fadeInDown = "_fadeInDown_zeps1_1";
var fadeInLeft = "_fadeInLeft_zeps1_1";
var fadeInRight = "_fadeInRight_zeps1_1";
var fadeOut = "_fadeOut_zeps1_1";
var fadeOutDown = "_fadeOutDown_zeps1_1";
var fadeOutUp = "_fadeOutUp_zeps1_1";
var fadeOutLeft = "_fadeOutLeft_zeps1_1";
var fadeOutRight = "_fadeOutRight_zeps1_1";
var ping = "_ping_zeps1_1";
var blinkBackground = "_blinkBackground_zeps1_1";
var typingBlink = "_typingBlink_zeps1_1";
var CopyInput_vue_vue_type_style_index_0_lang_module_default = {
	copyInput,
	iconSwap,
	swapEnterActive,
	blurSwapIn,
	swapLeaveActive,
	blurSwapOut,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_zeps1_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
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
//#region ../@n8n/design-system/src/components/N8nCopyInput/index.ts
var N8nCopyInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CopyInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nCopyInput_default as t };
