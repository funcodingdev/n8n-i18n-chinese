import { $ as openBlock, E as createElementBlock, F as guardReactiveProps, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bn as normalizeStyle, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { c as useForwardExpose } from "./VisuallyHidden-OSLEy_KR.js";
import { n as PopperArrow_default } from "./N8nPopover-KufkLzBT.js";
import { i as HoverCardRoot_default, n as HoverCardPortal_default, r as HoverCardContent_default, t as HoverCardTrigger_default } from "./HoverCardTrigger-CLcxpVvf.js";
import { t as N8nScrollArea_default } from "./N8nScrollArea-BUTJVqzV.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/HoverCard/HoverCardArrow.js
var HoverCardArrow_default = /* @__PURE__ */ defineComponent({
	__name: "HoverCardArrow",
	props: {
		width: {
			type: Number,
			required: false,
			default: 10
		},
		height: {
			type: Number,
			required: false,
			default: 5
		},
		rounded: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "svg"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nHoverCard/HoverCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	"aria-hidden": "true"
};
var HoverCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nHoverCard",
	__name: "HoverCard",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		reference: { default: void 0 },
		maxWidth: { default: void 0 },
		maxHeight: { default: void 0 },
		enableScrolling: {
			type: Boolean,
			default: false
		},
		showArrow: {
			type: Boolean,
			default: false
		},
		teleported: {
			type: Boolean,
			default: true
		},
		contentClass: { default: void 0 },
		triggerClass: { default: void 0 },
		triggerAsChild: {
			type: Boolean,
			default: true
		},
		hideTrigger: {
			type: Boolean,
			default: false
		},
		open: {
			type: Boolean,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			default: void 0
		},
		openDelay: { default: 600 },
		closeDelay: { default: 0 },
		side: { default: "bottom" },
		align: { default: "center" },
		sideOffset: { default: 4 },
		alignOffset: { default: void 0 },
		avoidCollisions: {
			type: Boolean,
			default: true
		},
		collisionPadding: { default: 5 },
		sideFlip: {
			type: Boolean,
			default: void 0
		},
		forceMount: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update:open",
		"before-enter",
		"after-leave"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const rootOpen = computed(() => props.disabled ? false : props.open);
		const contentStyle = computed(() => ({
			maxWidth: props.maxWidth,
			zIndex: 999
		}));
		function handleOpenUpdate(open) {
			if (props.disabled && open) return;
			emit("update:open", open);
		}
		function close() {
			emit("update:open", false);
		}
		watch(() => rootOpen.value, (newOpen, oldOpen) => {
			if (newOpen && !oldOpen) emit("before-enter");
			else if (!newOpen && oldOpen) emit("after-leave");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(HoverCardRoot_default), {
				open: rootOpen.value,
				"default-open": __props.defaultOpen,
				"open-delay": __props.openDelay,
				"close-delay": __props.closeDelay,
				"onUpdate:open": handleOpenUpdate
			}, {
				default: withCtx(() => [createVNode(unref(HoverCardTrigger_default), {
					"as-child": __props.triggerAsChild && !__props.hideTrigger,
					class: normalizeClass([__props.triggerClass, { [_ctx.$style.hiddenTrigger]: __props.hideTrigger }])
				}, {
					default: withCtx(() => [__props.hideTrigger ? (openBlock(), createElementBlock("span", _hoisted_1)) : renderSlot(_ctx.$slots, "trigger", { key: 1 })]),
					_: 3
				}, 8, ["as-child", "class"]), createVNode(unref(HoverCardPortal_default), { disabled: !__props.teleported }, {
					default: withCtx(() => [createVNode(unref(HoverCardContent_default), {
						side: __props.side,
						align: __props.align,
						"side-offset": __props.sideOffset,
						"align-offset": __props.alignOffset,
						"avoid-collisions": __props.avoidCollisions,
						"collision-padding": __props.collisionPadding,
						"side-flip": __props.sideFlip,
						reference: __props.reference,
						"force-mount": __props.forceMount,
						class: normalizeClass([_ctx.$style.hoverCardContent, __props.contentClass]),
						style: normalizeStyle(contentStyle.value)
					}, {
						default: withCtx(() => [__props.enableScrolling ? (openBlock(), createBlock(N8nScrollArea_default, {
							key: 0,
							"max-height": __props.maxHeight,
							type: "hover",
							"enable-vertical-scroll": true,
							"enable-horizontal-scroll": false
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "content", { close })]),
							_: 3
						}, 8, ["max-height"])) : renderSlot(_ctx.$slots, "content", {
							key: 1,
							close
						}), __props.showArrow ? (openBlock(), createBlock(unref(HoverCardArrow_default), {
							key: 2,
							class: normalizeClass(_ctx.$style.hoverCardArrow)
						}, null, 8, ["class"])) : createCommentVNode("", true)]),
						_: 3
					}, 8, [
						"side",
						"align",
						"side-offset",
						"align-offset",
						"avoid-collisions",
						"collision-padding",
						"side-flip",
						"reference",
						"force-mount",
						"class",
						"style"
					])]),
					_: 3
				}, 8, ["disabled"])]),
				_: 3
			}, 8, [
				"open",
				"default-open",
				"open-delay",
				"close-delay"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nHoverCard/HoverCard.vue?vue&type=style&index=0&lang.module.scss
var hiddenTrigger = "_hiddenTrigger_erc5y_390";
var hoverCardArrow = "_hoverCardArrow_erc5y_394";
var hoverCardContent = "_hoverCardContent_erc5y_401";
var popoverIn = "_popoverIn_erc5y_1";
var shimmer = "_shimmer_erc5y_1";
var spin = "_spin_erc5y_1";
var opacityPulse = "_opacityPulse_erc5y_1";
var fadeIn = "_fadeIn_erc5y_1";
var collapsibleSlideDown = "_collapsibleSlideDown_erc5y_1";
var collapsibleSlideUp = "_collapsibleSlideUp_erc5y_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_erc5y_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_erc5y_1";
var blurSwapIn = "_blurSwapIn_erc5y_1";
var blurSwapOut = "_blurSwapOut_erc5y_1";
var pulseGlow = "_pulseGlow_erc5y_1";
var pulseGlowDelayed = "_pulseGlowDelayed_erc5y_1";
var fade = "_fade_erc5y_1";
var fadeInUp = "_fadeInUp_erc5y_1";
var fadeInDown = "_fadeInDown_erc5y_1";
var fadeInLeft = "_fadeInLeft_erc5y_1";
var fadeInRight = "_fadeInRight_erc5y_1";
var fadeOut = "_fadeOut_erc5y_1";
var fadeOutDown = "_fadeOutDown_erc5y_1";
var fadeOutUp = "_fadeOutUp_erc5y_1";
var fadeOutLeft = "_fadeOutLeft_erc5y_1";
var fadeOutRight = "_fadeOutRight_erc5y_1";
var ping = "_ping_erc5y_1";
var blinkBackground = "_blinkBackground_erc5y_1";
var typingBlink = "_typingBlink_erc5y_1";
var HoverCard_vue_vue_type_style_index_0_lang_module_default = {
	hiddenTrigger,
	hoverCardArrow,
	hoverCardContent,
	popoverIn,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_erc5y_1",
	opacityPulse,
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
//#region ../@n8n/design-system/src/components/N8nHoverCard/index.ts
var N8nHoverCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(HoverCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": HoverCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nHoverCard_default as t };
