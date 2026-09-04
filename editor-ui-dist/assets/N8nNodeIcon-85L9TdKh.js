import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bn as normalizeStyle, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { i as isSupportedIconName } from "./Icon-C4YMOb-m.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
//#region ../@n8n/design-system/src/components/N8nNodeIcon/IconContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["src"];
var IconContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "IconContent",
	props: {
		type: {},
		src: {},
		name: {},
		nodeTypeName: {},
		size: {},
		badge: {}
	},
	setup(__props) {
		const props = __props;
		const badgeSize = computed(() => {
			switch (props.size) {
				case 40: return 18;
				case 24: return 10;
				default: return 12;
			}
		});
		const fontStyleData = computed(() => {
			if (!props.size) return {};
			return { "max-width": `${props.size}px` };
		});
		const badgeStyleData = computed(() => {
			const size = badgeSize.value;
			return {
				padding: `${Math.floor(size / 4)}px`,
				right: `-${Math.floor(size / 2)}px`,
				bottom: `-${Math.floor(size / 2)}px`
			};
		});
		const supportedIconName = computed(() => {
			return isSupportedIconName(props.name) ? props.name : void 0;
		});
		return (_ctx, _cache) => {
			return __props.type !== "unknown" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.icon)
			}, [__props.type === "file" ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: __props.src,
				referrerpolicy: "no-referrer",
				class: normalizeClass(_ctx.$style.nodeIconImage)
			}, null, 10, _hoisted_1)) : supportedIconName.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: supportedIconName.value,
				style: normalizeStyle(fontStyleData.value)
			}, null, 8, ["icon", "style"])) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.nodeIconPlaceholder)
			}, toDisplayString(__props.nodeTypeName ? __props.nodeTypeName.charAt(0) : "?"), 3)), __props.badge ? (openBlock(), createElementBlock("div", {
				key: 3,
				class: normalizeClass(_ctx.$style.badge),
				style: normalizeStyle(badgeStyleData.value)
			}, [__props.badge.tooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: "top"
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.badge.tooltip), 1)]),
				default: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: __props.badge.type,
					src: __props.badge.src,
					name: __props.badge.name,
					size: badgeSize.value
				}, null, 8, [
					"type",
					"src",
					"name",
					"size"
				])]),
				_: 1
			})) : (openBlock(), createBlock(unref(N8nNodeIcon_default), {
				key: 1,
				type: __props.badge.type,
				src: __props.badge.src,
				name: __props.badge.name,
				size: badgeSize.value
			}, null, 8, [
				"type",
				"src",
				"name",
				"size"
			]))], 6)) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.nodeIconPlaceholder)
			}, toDisplayString(__props.nodeTypeName ? __props.nodeTypeName.charAt(0) : "?"), 3));
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nNodeIcon/IconContent.vue?vue&type=style&index=0&lang.module.scss
var icon = "_icon_113i4_388";
var nodeIconPlaceholder = "_nodeIconPlaceholder_113i4_405";
var nodeIconImage = "_nodeIconImage_113i4_409";
var badge = "_badge_113i4_416";
var shimmer$1 = "_shimmer_113i4_1";
var spin$1 = "_spin_113i4_1";
var opacityPulse$1 = "_opacityPulse_113i4_1";
var popoverIn$1 = "_popoverIn_113i4_1";
var fadeIn$1 = "_fadeIn_113i4_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_113i4_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_113i4_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_113i4_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_113i4_1";
var blurSwapIn$1 = "_blurSwapIn_113i4_1";
var blurSwapOut$1 = "_blurSwapOut_113i4_1";
var pulseGlow$1 = "_pulseGlow_113i4_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_113i4_1";
var fade$1 = "_fade_113i4_1";
var fadeInUp$1 = "_fadeInUp_113i4_1";
var fadeInDown$1 = "_fadeInDown_113i4_1";
var fadeInLeft$1 = "_fadeInLeft_113i4_1";
var fadeInRight$1 = "_fadeInRight_113i4_1";
var fadeOut$1 = "_fadeOut_113i4_1";
var fadeOutDown$1 = "_fadeOutDown_113i4_1";
var fadeOutUp$1 = "_fadeOutUp_113i4_1";
var fadeOutLeft$1 = "_fadeOutLeft_113i4_1";
var fadeOutRight$1 = "_fadeOutRight_113i4_1";
var ping$1 = "_ping_113i4_1";
var blinkBackground$1 = "_blinkBackground_113i4_1";
var typingBlink$1 = "_typingBlink_113i4_1";
var IconContent_vue_vue_type_style_index_0_lang_module_default = {
	icon,
	nodeIconPlaceholder,
	nodeIconImage,
	badge,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_113i4_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var IconContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(IconContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": IconContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nNodeIcon/NodeIcon.vue?vue&type=script&setup=true&lang.ts
var NodeIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeIcon",
	props: {
		type: {},
		src: {},
		name: {},
		nodeTypeName: {},
		size: {},
		disabled: { type: Boolean },
		circle: { type: Boolean },
		color: {},
		showTooltip: { type: Boolean },
		tooltipPosition: { default: "top" },
		badge: {}
	},
	setup(__props) {
		const props = __props;
		const iconStyleData = computed(() => {
			if (!props.size) return { color: props.color || "" };
			return {
				color: props.color || "",
				width: `${props.size}px`,
				height: `${props.size}px`,
				"font-size": `${props.size}px`,
				"line-height": `${props.size}px`
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: "n8n-node-icon" }, _ctx.$attrs), [createBaseVNode("div", {
				class: normalizeClass({
					[_ctx.$style.nodeIconWrapper]: true,
					[_ctx.$style.circle]: __props.circle,
					[_ctx.$style.disabled]: __props.disabled
				}),
				style: normalizeStyle(iconStyleData.value)
			}, [__props.showTooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: __props.tooltipPosition,
				disabled: !__props.showTooltip
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.nodeTypeName), 1)]),
				default: withCtx(() => [createVNode(IconContent_default, {
					type: __props.type,
					src: __props.src,
					name: __props.name,
					"node-type-name": __props.nodeTypeName,
					size: __props.size,
					badge: __props.badge
				}, null, 8, [
					"type",
					"src",
					"name",
					"node-type-name",
					"size",
					"badge"
				])]),
				_: 1
			}, 8, ["placement", "disabled"])) : (openBlock(), createBlock(IconContent_default, {
				key: 1,
				type: __props.type,
				src: __props.src,
				name: __props.name,
				"node-type-name": __props.nodeTypeName,
				size: __props.size,
				badge: __props.badge
			}, null, 8, [
				"type",
				"src",
				"name",
				"node-type-name",
				"size",
				"badge"
			]))], 6)], 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nNodeIcon/NodeIcon.vue?vue&type=style&index=0&lang.module.scss
var nodeIconWrapper = "_nodeIconWrapper_1wlvk_388";
var circle = "_circle_1wlvk_400";
var disabled = "_disabled_1wlvk_404";
var shimmer = "_shimmer_1wlvk_1";
var spin = "_spin_1wlvk_1";
var opacityPulse = "_opacityPulse_1wlvk_1";
var popoverIn = "_popoverIn_1wlvk_1";
var fadeIn = "_fadeIn_1wlvk_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1wlvk_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1wlvk_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1wlvk_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1wlvk_1";
var blurSwapIn = "_blurSwapIn_1wlvk_1";
var blurSwapOut = "_blurSwapOut_1wlvk_1";
var pulseGlow = "_pulseGlow_1wlvk_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1wlvk_1";
var fade = "_fade_1wlvk_1";
var fadeInUp = "_fadeInUp_1wlvk_1";
var fadeInDown = "_fadeInDown_1wlvk_1";
var fadeInLeft = "_fadeInLeft_1wlvk_1";
var fadeInRight = "_fadeInRight_1wlvk_1";
var fadeOut = "_fadeOut_1wlvk_1";
var fadeOutDown = "_fadeOutDown_1wlvk_1";
var fadeOutUp = "_fadeOutUp_1wlvk_1";
var fadeOutLeft = "_fadeOutLeft_1wlvk_1";
var fadeOutRight = "_fadeOutRight_1wlvk_1";
var ping = "_ping_1wlvk_1";
var blinkBackground = "_blinkBackground_1wlvk_1";
var typingBlink = "_typingBlink_1wlvk_1";
var NodeIcon_vue_vue_type_style_index_0_lang_module_default = {
	nodeIconWrapper,
	circle,
	disabled,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1wlvk_1",
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
//#region ../@n8n/design-system/src/components/N8nNodeIcon/index.ts
var N8nNodeIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nNodeIcon_default as t };
