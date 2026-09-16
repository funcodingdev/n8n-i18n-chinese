import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region src/app/utils/stringUtils.ts
/**
* Split given text by the search term
*
* @param text Text to split
* @param search The search term
* @returns An array containing splitted text, each containing text fragment and the match flag.
*/
function splitTextBySearch(text, search) {
	if (!search) return [{
		isMatched: false,
		content: text
	}];
	const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const pattern = new RegExp(`(${escapeRegExp(search)})`, "i");
	return text.split(pattern).map((part) => ({
		isMatched: pattern.test(part),
		content: part
	})).filter((part) => part.content !== "");
}
//#endregion
//#region src/features/ndv/runData/components/TextWithHighlights.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var _hoisted_2 = ["textContent"];
var TextWithHighlights_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TextWithHighlights",
	props: {
		content: { type: [
			String,
			Object,
			Number,
			Boolean,
			null
		] },
		search: {}
	},
	setup(__props) {
		const props = __props;
		const parts = computed(() => {
			return props.search && typeof props.content === "string" ? splitTextBySearch(props.content, props.search) : [];
		});
		return (_ctx, _cache) => {
			return parts.value.length && typeof props.content === "string" ? (openBlock(), createElementBlock("span", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(parts.value, (part, index) => {
				return openBlock(), createElementBlock(Fragment, null, [part.isMatched && part.content ? (openBlock(), createElementBlock("mark", { key: `mark-${index}` }, toDisplayString(part.content), 1)) : part.content ? (openBlock(), createElementBlock("span", { key: `span-${index}` }, toDisplayString(part.content), 1)) : createCommentVNode("", true)], 64);
			}), 256))])) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.content)
			}, [typeof props.content === "string" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(props.content.split("\n"), (line, index) => {
				return openBlock(), createElementBlock("span", { key: `line-${index}` }, [index > 0 ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.newLine)
				}, "\\n", 2)) : createCommentVNode("", true), createTextVNode(toDisplayString(line), 1)]);
			}), 128)) : (openBlock(), createElementBlock("span", {
				key: 1,
				textContent: toDisplayString(props.content)
			}, null, 8, _hoisted_2))], 2));
		};
	}
});
//#endregion
//#region src/features/ndv/runData/components/TextWithHighlights.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_bxplm_388";
var newLine = "_newLine_bxplm_388";
var shimmer = "_shimmer_bxplm_1";
var spin = "_spin_bxplm_1";
var opacityPulse = "_opacityPulse_bxplm_1";
var popoverIn = "_popoverIn_bxplm_1";
var fadeIn = "_fadeIn_bxplm_1";
var collapsibleSlideDown = "_collapsibleSlideDown_bxplm_1";
var collapsibleSlideUp = "_collapsibleSlideUp_bxplm_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_bxplm_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_bxplm_1";
var blurSwapIn = "_blurSwapIn_bxplm_1";
var blurSwapOut = "_blurSwapOut_bxplm_1";
var pulseGlow = "_pulseGlow_bxplm_1";
var pulseGlowDelayed = "_pulseGlowDelayed_bxplm_1";
var fade = "_fade_bxplm_1";
var fadeInUp = "_fadeInUp_bxplm_1";
var fadeInDown = "_fadeInDown_bxplm_1";
var fadeInLeft = "_fadeInLeft_bxplm_1";
var fadeInRight = "_fadeInRight_bxplm_1";
var fadeOut = "_fadeOut_bxplm_1";
var fadeOutDown = "_fadeOutDown_bxplm_1";
var fadeOutUp = "_fadeOutUp_bxplm_1";
var fadeOutLeft = "_fadeOutLeft_bxplm_1";
var fadeOutRight = "_fadeOutRight_bxplm_1";
var ping = "_ping_bxplm_1";
var blinkBackground = "_blinkBackground_bxplm_1";
var typingBlink = "_typingBlink_bxplm_1";
var TextWithHighlights_vue_vue_type_style_index_0_lang_module_default = {
	content,
	newLine,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_bxplm_1",
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
var TextWithHighlights_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TextWithHighlights_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TextWithHighlights_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { splitTextBySearch as n, TextWithHighlights_default as t };
