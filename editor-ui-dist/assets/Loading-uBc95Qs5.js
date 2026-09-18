import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { n as Primitive } from "./VisuallyHidden-lv4qVqRn.js";
//#region ../@n8n/design-system/src/v2/components/Loading/Loading.vue?vue&type=script&setup=true&lang.ts
var Loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Loading",
	props: {
		animated: {
			type: Boolean,
			default: true
		},
		loading: {
			type: Boolean,
			default: true
		},
		rows: { default: 1 },
		cols: { default: 0 },
		shrinkLast: {
			type: Boolean,
			default: true
		},
		variant: { default: "p" }
	},
	setup(__props) {
		const props = __props;
		const isLastRowShrunk = computed(() => props.shrinkLast && props.rows > 1);
		const showH1Layout = computed(() => props.variant === "h1" && !props.cols);
		const showPLayout = computed(() => props.variant === "p" && !props.cols);
		const showCustomLayout = computed(() => props.variant === "custom" && !props.cols);
		const showColsLayout = computed(() => props.cols > 0);
		const showDefaultLayout = computed(() => !showH1Layout.value && !showPLayout.value && !showCustomLayout.value && !showColsLayout.value);
		function isLastRow(index, total) {
			return index === total - 1;
		}
		return (_ctx, _cache) => {
			return __props.loading ? (openBlock(), createBlock(unref(Primitive), {
				key: 0,
				as: "div",
				class: normalizeClass([
					"n8n-loading",
					`n8n-loading-${__props.variant}`,
					"el-skeleton",
					_ctx.$style.loading
				]),
				"aria-hidden": "true"
			}, {
				default: withCtx(() => [showColsLayout.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.cols, (i) => {
					return openBlock(), createElementBlock("div", {
						key: `col-${i}`,
						class: normalizeClass([
							_ctx.$style.item,
							_ctx.$style[__props.variant],
							{ [_ctx.$style.animated]: __props.animated }
						])
					}, null, 2);
				}), 128)) : showH1Layout.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.rowContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (_, index) => {
					return openBlock(), createElementBlock("div", {
						key: `h1-${index}`,
						class: normalizeClass({ [_ctx.$style.h1Last]: isLastRow(index, __props.rows) && isLastRowShrunk.value })
					}, [createBaseVNode("div", { class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style.h1,
						{ [_ctx.$style.animated]: __props.animated }
					]) }, null, 2)], 2);
				}), 128))], 2)) : showPLayout.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.rowContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (_, index) => {
					return openBlock(), createElementBlock("div", {
						key: `p-${index}`,
						class: normalizeClass({ [_ctx.$style.pLast]: isLastRow(index, __props.rows) && isLastRowShrunk.value })
					}, [createBaseVNode("div", { class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style.p,
						{ [_ctx.$style.animated]: __props.animated }
					]) }, null, 2)], 2);
				}), 128))], 2)) : showCustomLayout.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style.custom,
						{ [_ctx.$style.animated]: __props.animated }
					])
				}, null, 2)) : showDefaultLayout.value ? (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass([
						_ctx.$style.item,
						_ctx.$style[__props.variant],
						{ [_ctx.$style.animated]: __props.animated }
					])
				}, null, 2)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/v2/components/Loading/Loading.vue?vue&type=style&index=0&lang.module.scss
var loading = "_loading_1ooe7_388";
var rowContainer = "_rowContainer_1ooe7_392";
var item = "_item_1ooe7_397";
var animated = "_animated_1ooe7_402";
var p = "_p_1ooe7_412";
var h1 = "_h1_1ooe7_417";
var h3 = "_h3_1ooe7_422";
var text = "_text_1ooe7_426";
var caption = "_caption_1ooe7_431";
var button = "_button_1ooe7_435";
var image = "_image_1ooe7_441";
var circle = "_circle_1ooe7_446";
var rect = "_rect_1ooe7_452";
var custom = "_custom_1ooe7_457";
var h1Last = "_h1Last_1ooe7_462";
var pLast = "_pLast_1ooe7_466";
var shimmer = "_shimmer_1ooe7_1";
var spin = "_spin_1ooe7_1";
var opacityPulse = "_opacityPulse_1ooe7_1";
var popoverIn = "_popoverIn_1ooe7_1";
var fadeIn = "_fadeIn_1ooe7_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ooe7_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ooe7_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ooe7_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ooe7_1";
var blurSwapIn = "_blurSwapIn_1ooe7_1";
var blurSwapOut = "_blurSwapOut_1ooe7_1";
var pulseGlow = "_pulseGlow_1ooe7_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ooe7_1";
var fade = "_fade_1ooe7_1";
var fadeInUp = "_fadeInUp_1ooe7_1";
var fadeInDown = "_fadeInDown_1ooe7_1";
var fadeInLeft = "_fadeInLeft_1ooe7_1";
var fadeInRight = "_fadeInRight_1ooe7_1";
var fadeOut = "_fadeOut_1ooe7_1";
var fadeOutDown = "_fadeOutDown_1ooe7_1";
var fadeOutUp = "_fadeOutUp_1ooe7_1";
var fadeOutLeft = "_fadeOutLeft_1ooe7_1";
var fadeOutRight = "_fadeOutRight_1ooe7_1";
var ping = "_ping_1ooe7_1";
var blinkBackground = "_blinkBackground_1ooe7_1";
var typingBlink = "_typingBlink_1ooe7_1";
var Loading_vue_vue_type_style_index_0_lang_module_default = {
	loading,
	rowContainer,
	item,
	animated,
	"skeleton-pulse": "_skeleton-pulse_1ooe7_1",
	p,
	h1,
	h3,
	text,
	caption,
	button,
	image,
	circle,
	rect,
	custom,
	h1Last,
	pLast,
	shimmer,
	spin,
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
var Loading_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Loading_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Loading_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Loading_default as t };
