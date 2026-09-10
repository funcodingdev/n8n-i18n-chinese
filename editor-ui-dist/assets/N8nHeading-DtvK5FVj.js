import { $ as openBlock, N as defineComponent, S as computed, U as mergeProps, bt as withCtx, c as useCssModule, it as renderSlot, st as resolveDynamicComponent, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nHeading/Heading.vue?vue&type=script&setup=true&lang.ts
var Heading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nHeading",
	__name: "Heading",
	props: {
		tag: { default: "span" },
		bold: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" },
		step: {},
		color: {},
		align: {}
	},
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => {
			const applied = [];
			if (props.align) applied.push(`align-${props.align}`);
			if (props.color) applied.push(props.color);
			if (props.step) applied.push(`step-${props.step}`);
			else applied.push(`size-${props.size}`);
			applied.push(props.bold ? "bold" : "regular");
			return applied.map((c) => $style[c]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({ class: ["n8n-heading", ...classes.value] }, _ctx.$attrs), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nHeading/Heading.vue?vue&type=style&index=0&lang.module.scss
var bold = "_bold_15yzt_388";
var regular = "_regular_15yzt_392";
var primary = "_primary_15yzt_475";
var danger = "_danger_15yzt_495";
var shimmer = "_shimmer_15yzt_1";
var spin = "_spin_15yzt_1";
var opacityPulse = "_opacityPulse_15yzt_1";
var popoverIn = "_popoverIn_15yzt_1";
var fadeIn = "_fadeIn_15yzt_1";
var collapsibleSlideDown = "_collapsibleSlideDown_15yzt_1";
var collapsibleSlideUp = "_collapsibleSlideUp_15yzt_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_15yzt_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_15yzt_1";
var blurSwapIn = "_blurSwapIn_15yzt_1";
var blurSwapOut = "_blurSwapOut_15yzt_1";
var pulseGlow = "_pulseGlow_15yzt_1";
var pulseGlowDelayed = "_pulseGlowDelayed_15yzt_1";
var fade = "_fade_15yzt_1";
var fadeInUp = "_fadeInUp_15yzt_1";
var fadeInDown = "_fadeInDown_15yzt_1";
var fadeInLeft = "_fadeInLeft_15yzt_1";
var fadeInRight = "_fadeInRight_15yzt_1";
var fadeOut = "_fadeOut_15yzt_1";
var fadeOutDown = "_fadeOutDown_15yzt_1";
var fadeOutUp = "_fadeOutUp_15yzt_1";
var fadeOutLeft = "_fadeOutLeft_15yzt_1";
var fadeOutRight = "_fadeOutRight_15yzt_1";
var ping = "_ping_15yzt_1";
var blinkBackground = "_blinkBackground_15yzt_1";
var typingBlink = "_typingBlink_15yzt_1";
var Heading_vue_vue_type_style_index_0_lang_module_default = {
	bold,
	regular,
	"size-2xlarge": "_size-2xlarge_15yzt_396",
	"size-xlarge": "_size-xlarge_15yzt_401",
	"size-large": "_size-large_15yzt_406",
	"size-medium": "_size-medium_15yzt_411",
	"size-small": "_size-small_15yzt_416",
	"step-4xs": "_step-4xs_15yzt_421",
	"step-3xs": "_step-3xs_15yzt_427",
	"step-2xs": "_step-2xs_15yzt_433",
	"step-xs": "_step-xs_15yzt_439",
	"step-sm": "_step-sm_15yzt_445",
	"step-md": "_step-md_15yzt_451",
	"step-lg": "_step-lg_15yzt_457",
	"step-xl": "_step-xl_15yzt_463",
	"step-2xl": "_step-2xl_15yzt_469",
	primary,
	"text-dark": "_text-dark_15yzt_479",
	"text-base": "_text-base_15yzt_483",
	"text-light": "_text-light_15yzt_487",
	"text-xlight": "_text-xlight_15yzt_491",
	danger,
	"align-left": "_align-left_15yzt_499",
	"align-right": "_align-right_15yzt_503",
	"align-center": "_align-center_15yzt_507",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_15yzt_1",
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
//#region ../@n8n/design-system/src/components/N8nHeading/index.ts
var N8nHeading_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Heading_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Heading_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nHeading_default as t };
