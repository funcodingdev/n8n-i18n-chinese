import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, O as createSlots, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { n as ElSkeletonItem, t as ElSkeleton } from "./skeleton-CXSk42nF.js";
//#region ../@n8n/design-system/src/components/N8nLoading/Loading.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 0 };
var _hoisted_2 = { key: 1 };
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
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElSkeleton), {
				loading: __props.loading,
				animated: __props.animated,
				class: normalizeClass(["n8n-loading", `n8n-loading-${__props.variant}`])
			}, createSlots({ _: 2 }, [__props.cols ? {
				name: "template",
				fn: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.cols, (i) => {
					return openBlock(), createBlock(unref(ElSkeletonItem), { key: i });
				}), 128))]),
				key: "0"
			} : {
				name: "template",
				fn: withCtx(() => [__props.variant === "h1" ? (openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (item, index) => {
					return openBlock(), createElementBlock("div", {
						key: index,
						class: normalizeClass({ [_ctx.$style.h1Last]: item === __props.rows && __props.rows > 1 && __props.shrinkLast })
					}, [createVNode(unref(ElSkeletonItem), { variant: __props.variant }, null, 8, ["variant"])], 2);
				}), 128))])) : __props.variant === "p" ? (openBlock(), createElementBlock("div", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.rows, (item, index) => {
					return openBlock(), createElementBlock("div", {
						key: index,
						class: normalizeClass({ [_ctx.$style.pLast]: item === __props.rows && __props.rows > 1 && __props.shrinkLast })
					}, [createVNode(unref(ElSkeletonItem), { variant: __props.variant }, null, 8, ["variant"])], 2);
				}), 128))])) : __props.variant === "custom" ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.custom)
				}, [createVNode(unref(ElSkeletonItem))], 2)) : (openBlock(), createBlock(unref(ElSkeletonItem), {
					key: 3,
					variant: __props.variant
				}, null, 8, ["variant"]))]),
				key: "1"
			}]), 1032, [
				"loading",
				"animated",
				"class"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nLoading/Loading.vue?vue&type=style&index=0&lang.module.scss
var h1Last = "_h1Last_1ou0u_388";
var pLast = "_pLast_1ou0u_392";
var custom = "_custom_1ou0u_396";
var shimmer = "_shimmer_1ou0u_1";
var spin = "_spin_1ou0u_1";
var opacityPulse = "_opacityPulse_1ou0u_1";
var popoverIn = "_popoverIn_1ou0u_1";
var fadeIn = "_fadeIn_1ou0u_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ou0u_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ou0u_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ou0u_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ou0u_1";
var blurSwapIn = "_blurSwapIn_1ou0u_1";
var blurSwapOut = "_blurSwapOut_1ou0u_1";
var pulseGlow = "_pulseGlow_1ou0u_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ou0u_1";
var fade = "_fade_1ou0u_1";
var fadeInUp = "_fadeInUp_1ou0u_1";
var fadeInDown = "_fadeInDown_1ou0u_1";
var fadeInLeft = "_fadeInLeft_1ou0u_1";
var fadeInRight = "_fadeInRight_1ou0u_1";
var fadeOut = "_fadeOut_1ou0u_1";
var fadeOutDown = "_fadeOutDown_1ou0u_1";
var fadeOutUp = "_fadeOutUp_1ou0u_1";
var fadeOutLeft = "_fadeOutLeft_1ou0u_1";
var fadeOutRight = "_fadeOutRight_1ou0u_1";
var ping = "_ping_1ou0u_1";
var blinkBackground = "_blinkBackground_1ou0u_1";
var typingBlink = "_typingBlink_1ou0u_1";
var Loading_vue_vue_type_style_index_0_lang_module_default = {
	h1Last,
	pLast,
	custom,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ou0u_1",
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
//#region ../@n8n/design-system/src/components/N8nLoading/index.ts
var N8nLoading_default = Loading_default;
//#endregion
export { Loading_default as n, N8nLoading_default as t };
