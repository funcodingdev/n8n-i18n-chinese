import { $ as openBlock, N as defineComponent, S as computed, U as mergeProps, bt as withCtx, c as useCssModule, it as renderSlot, st as resolveDynamicComponent, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nText/Text.vue?vue&type=script&setup=true&lang.ts
var Text_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nText",
	__name: "Text",
	props: {
		bold: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" },
		step: {},
		color: {},
		align: {},
		compact: {
			type: Boolean,
			default: false
		},
		tag: { default: "span" }
	},
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => {
			const applied = [];
			if (props.align) applied.push(`align-${props.align}`);
			if (props.color) applied.push(props.color);
			if (props.compact) applied.push("compact");
			if (props.step) applied.push(`step-${props.step}`);
			else applied.push(`size-${props.size}`);
			applied.push(props.bold ? "bold" : "regular");
			return applied.map((c) => $style[c]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({ class: ["n8n-text", ...classes.value] }, _ctx.$attrs), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nText/Text.vue?vue&type=style&index=0&lang.module.scss
var bold = "_bold_3zc3u_388";
var regular = "_regular_3zc3u_392";
var compact = "_compact_3zc3u_475";
var primary = "_primary_3zc3u_479";
var secondary = "_secondary_3zc3u_483";
var danger = "_danger_3zc3u_503";
var success = "_success_3zc3u_507";
var warning = "_warning_3zc3u_511";
var shimmer = "_shimmer_3zc3u_1";
var spin = "_spin_3zc3u_1";
var opacityPulse = "_opacityPulse_3zc3u_1";
var popoverIn = "_popoverIn_3zc3u_1";
var fadeIn = "_fadeIn_3zc3u_1";
var collapsibleSlideDown = "_collapsibleSlideDown_3zc3u_1";
var collapsibleSlideUp = "_collapsibleSlideUp_3zc3u_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_3zc3u_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_3zc3u_1";
var blurSwapIn = "_blurSwapIn_3zc3u_1";
var blurSwapOut = "_blurSwapOut_3zc3u_1";
var pulseGlow = "_pulseGlow_3zc3u_1";
var pulseGlowDelayed = "_pulseGlowDelayed_3zc3u_1";
var fade = "_fade_3zc3u_1";
var fadeInUp = "_fadeInUp_3zc3u_1";
var fadeInDown = "_fadeInDown_3zc3u_1";
var fadeInLeft = "_fadeInLeft_3zc3u_1";
var fadeInRight = "_fadeInRight_3zc3u_1";
var fadeOut = "_fadeOut_3zc3u_1";
var fadeOutDown = "_fadeOutDown_3zc3u_1";
var fadeOutUp = "_fadeOutUp_3zc3u_1";
var fadeOutLeft = "_fadeOutLeft_3zc3u_1";
var fadeOutRight = "_fadeOutRight_3zc3u_1";
var ping = "_ping_3zc3u_1";
var blinkBackground = "_blinkBackground_3zc3u_1";
var typingBlink = "_typingBlink_3zc3u_1";
var Text_vue_vue_type_style_index_0_lang_module_default = {
	bold,
	regular,
	"size-xlarge": "_size-xlarge_3zc3u_396",
	"size-large": "_size-large_3zc3u_401",
	"size-medium": "_size-medium_3zc3u_406",
	"size-small": "_size-small_3zc3u_411",
	"size-xsmall": "_size-xsmall_3zc3u_416",
	"step-4xs": "_step-4xs_3zc3u_421",
	"step-3xs": "_step-3xs_3zc3u_427",
	"step-2xs": "_step-2xs_3zc3u_433",
	"step-xs": "_step-xs_3zc3u_439",
	"step-sm": "_step-sm_3zc3u_445",
	"step-md": "_step-md_3zc3u_451",
	"step-lg": "_step-lg_3zc3u_457",
	"step-xl": "_step-xl_3zc3u_463",
	"step-2xl": "_step-2xl_3zc3u_469",
	compact,
	primary,
	secondary,
	"text-dark": "_text-dark_3zc3u_487",
	"text-base": "_text-base_3zc3u_491",
	"text-light": "_text-light_3zc3u_495",
	"text-xlight": "_text-xlight_3zc3u_499",
	danger,
	success,
	warning,
	"foreground-dark": "_foreground-dark_3zc3u_515",
	"foreground-xdark": "_foreground-xdark_3zc3u_519",
	"align-left": "_align-left_3zc3u_523",
	"align-right": "_align-right_3zc3u_527",
	"align-center": "_align-center_3zc3u_531",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_3zc3u_1",
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
var Text_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Text_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Text_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nText/index.ts
var N8nText_default = Text_default;
//#endregion
export { Text_default as n, N8nText_default as t };
