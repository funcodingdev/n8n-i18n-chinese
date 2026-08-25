import { $ as openBlock, E as createElementBlock, F as guardReactiveProps, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bn as normalizeStyle, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { c as useForwardExpose, n as Primitive } from "./VisuallyHidden-OSLEy_KR.js";
import { r as injectPopperContentContext } from "./PopperContent-CAUwWps2.js";
import { i as PopoverRoot_default, n as PopoverPortal_default, r as PopoverContent_default, t as PopoverTrigger_default } from "./PopoverTrigger-B_Pj26-3.js";
import { t as N8nScrollArea_default } from "./N8nScrollArea-BUTJVqzV.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/component/Arrow.js
var _hoisted_1 = {
	key: 0,
	d: "M0 0L6 6L12 0"
};
var _hoisted_2 = {
	key: 1,
	d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var Arrow_default = /* @__PURE__ */ defineComponent({
	__name: "Arrow",
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
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				width: _ctx.width,
				height: _ctx.height,
				viewBox: _ctx.asChild ? void 0 : "0 0 12 6",
				preserveAspectRatio: _ctx.asChild ? void 0 : "none"
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [!_ctx.rounded ? (openBlock(), createElementBlock("path", _hoisted_1)) : (openBlock(), createElementBlock("path", _hoisted_2))])]),
				_: 3
			}, 16, [
				"width",
				"height",
				"viewBox",
				"preserveAspectRatio"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Popper/PopperArrow.js
var OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
};
var PopperArrow_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PopperArrow",
	props: {
		width: {
			type: Number,
			required: false
		},
		height: {
			type: Number,
			required: false
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
		const { forwardRef } = useForwardExpose();
		const contentContext = injectPopperContentContext();
		const baseSide = computed(() => OPPOSITE_SIDE[contentContext.placedSide.value]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				ref: (el) => {
					unref(contentContext).onArrowChange(el);
				},
				style: normalizeStyle({
					position: "absolute",
					left: unref(contentContext).arrowX?.value ? `${unref(contentContext).arrowX?.value}px` : void 0,
					top: unref(contentContext).arrowY?.value ? `${unref(contentContext).arrowY?.value}px` : void 0,
					[baseSide.value]: 0,
					transformOrigin: {
						top: "",
						right: "0 0",
						bottom: "center 0",
						left: "100% 0"
					}[unref(contentContext).placedSide.value],
					transform: {
						top: "translateY(100%)",
						right: "translateY(50%) rotate(90deg) translateX(-50%)",
						bottom: `rotate(180deg)`,
						left: "translateY(50%) rotate(-90deg) translateX(50%)"
					}[unref(contentContext).placedSide.value],
					visibility: unref(contentContext).shouldHideArrow.value ? "hidden" : void 0
				})
			}, [createVNode(Arrow_default, mergeProps(_ctx.$attrs, {
				ref: unref(forwardRef),
				style: { display: "block" },
				as: _ctx.as,
				"as-child": _ctx.asChild,
				rounded: _ctx.rounded,
				width: _ctx.width,
				height: _ctx.height
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"rounded",
				"width",
				"height"
			])], 4);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Popover/PopoverArrow.js
var PopoverArrow_default = /* @__PURE__ */ defineComponent({
	__name: "PopoverArrow",
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
//#region ../@n8n/design-system/src/components/N8nPopover/Popover.vue?vue&type=script&setup=true&lang.ts
var Popover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nPopover",
	__name: "Popover",
	props: {
		enableScrolling: {
			type: Boolean,
			default: true
		},
		forceMount: {
			type: Boolean,
			default: false
		},
		enableSlideIn: {
			type: Boolean,
			default: true
		},
		suppressAutoFocus: {
			type: Boolean,
			default: false
		},
		scrollType: { default: "hover" },
		width: { default: void 0 },
		zIndex: { default: 999 },
		maxHeight: { default: void 0 },
		contentClass: {},
		showArrow: {
			type: Boolean,
			default: false
		},
		teleported: {
			type: Boolean,
			default: true
		},
		side: {},
		align: { default: "start" },
		sideFlip: {
			type: Boolean,
			default: void 0
		},
		sideOffset: { default: 4 },
		reference: {},
		positionStrategy: { default: void 0 },
		collisionPadding: { default: 5 },
		open: {
			type: Boolean,
			default: void 0
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
		function handleOpenAutoFocus(e) {
			if (props.suppressAutoFocus) e.preventDefault();
		}
		function handleCloseAutoFocus(e) {
			if (props.suppressAutoFocus) e.preventDefault();
		}
		/**
		* Handles outside interaction events to prevent Reka UI from interfering
		* with Element Plus dropdown selections. Element Plus teleports dropdowns
		* to the body, so Reka UI's DismissableLayer detects clicks on them as
		* "outside" clicks, which would otherwise prevent proper selection.
		*
		* TODO: This workaround can be removed once N8nSelect is migrated to Reka UI.
		*/
		function handleOutsideInteraction(e) {
			if (e.target?.closest(".el-popper, .el-select-dropdown")) e.preventDefault();
		}
		watch(() => props.open, (newOpen, oldOpen) => {
			if (newOpen && !oldOpen) emit("before-enter");
			else if (!newOpen && oldOpen) emit("after-leave");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopoverRoot_default), {
				open: __props.open,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": true }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "trigger")]),
					_: 3
				}), createVNode(unref(PopoverPortal_default), { disabled: !__props.teleported }, {
					default: withCtx(() => [createVNode(unref(PopoverContent_default), {
						role: "dialog",
						side: __props.side,
						"side-flip": __props.sideFlip,
						align: __props.align,
						"side-offset": __props.sideOffset,
						"collision-padding": __props.collisionPadding,
						class: normalizeClass([
							_ctx.$style.popoverContent,
							__props.contentClass,
							{ [_ctx.$style.enableSlideIn]: __props.enableSlideIn }
						]),
						style: normalizeStyle({
							width: __props.width,
							zIndex: __props.zIndex
						}),
						reference: __props.reference,
						"force-mount": __props.forceMount,
						"position-strategy": __props.positionStrategy,
						onOpenAutoFocus: handleOpenAutoFocus,
						onCloseAutoFocus: handleCloseAutoFocus,
						onPointerDownOutside: handleOutsideInteraction,
						onInteractOutside: handleOutsideInteraction
					}, {
						default: withCtx(() => [__props.enableScrolling ? (openBlock(), createBlock(N8nScrollArea_default, {
							key: 0,
							"max-height": __props.maxHeight,
							type: __props.scrollType,
							"enable-vertical-scroll": true,
							"enable-horizontal-scroll": false
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "content", { close: () => emit("update:open", false) })]),
							_: 3
						}, 8, ["max-height", "type"])) : renderSlot(_ctx.$slots, "content", {
							key: 1,
							close: () => emit("update:open", false)
						}), __props.showArrow ? (openBlock(), createBlock(unref(PopoverArrow_default), {
							key: 2,
							class: normalizeClass(_ctx.$style.popoverArrow)
						}, null, 8, ["class"])) : createCommentVNode("", true)]),
						_: 3
					}, 8, [
						"side",
						"side-flip",
						"align",
						"side-offset",
						"collision-padding",
						"class",
						"style",
						"reference",
						"force-mount",
						"position-strategy"
					])]),
					_: 3
				}, 8, ["disabled"])]),
				_: 3
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nPopover/Popover.vue?vue&type=style&index=0&lang.module.scss
var popoverContent = "_popoverContent_1vhpg_390";
var enableSlideIn = "_enableSlideIn_1vhpg_403";
var popoverIn = "_popoverIn_1vhpg_1";
var popoverArrow = "_popoverArrow_1vhpg_459";
var shimmer = "_shimmer_1vhpg_1";
var spin = "_spin_1vhpg_1";
var opacityPulse = "_opacityPulse_1vhpg_1";
var fadeIn = "_fadeIn_1vhpg_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1vhpg_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1vhpg_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1vhpg_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1vhpg_1";
var blurSwapIn = "_blurSwapIn_1vhpg_1";
var blurSwapOut = "_blurSwapOut_1vhpg_1";
var pulseGlow = "_pulseGlow_1vhpg_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1vhpg_1";
var fade = "_fade_1vhpg_1";
var fadeInUp = "_fadeInUp_1vhpg_1";
var fadeInDown = "_fadeInDown_1vhpg_1";
var fadeInLeft = "_fadeInLeft_1vhpg_1";
var fadeInRight = "_fadeInRight_1vhpg_1";
var fadeOut = "_fadeOut_1vhpg_1";
var fadeOutDown = "_fadeOutDown_1vhpg_1";
var fadeOutUp = "_fadeOutUp_1vhpg_1";
var fadeOutLeft = "_fadeOutLeft_1vhpg_1";
var fadeOutRight = "_fadeOutRight_1vhpg_1";
var ping = "_ping_1vhpg_1";
var blinkBackground = "_blinkBackground_1vhpg_1";
var typingBlink = "_typingBlink_1vhpg_1";
var Popover_vue_vue_type_style_index_0_lang_module_default = {
	popoverContent,
	enableSlideIn,
	popoverIn,
	popoverArrow,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1vhpg_1",
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
//#region ../@n8n/design-system/src/components/N8nPopover/index.ts
var N8nPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Popover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Popover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PopperArrow_default as n, N8nPopover_default as t };
