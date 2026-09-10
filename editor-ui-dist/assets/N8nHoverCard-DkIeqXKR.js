import { $ as openBlock, E as createElementBlock, F as guardReactiveProps, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, X as onMounted, Z as onUnmounted, _t as watchEffect, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { c as useForwardExpose, i as Presence_default, j as createContext, m as useVModel, n as Primitive, s as useForwardProps, w as syncRef } from "./VisuallyHidden-lv4qVqRn.js";
import { g as DismissableLayer_default, h as Teleport_default, m as PopperRoot_default, n as PopperContent_default, p as PopperAnchor_default, y as useForwardPropsEmits } from "./PopperContent-Bf5nvYvk.js";
import { i as useGraceArea } from "./Tooltip-d7PzmaQH.js";
import { n as PopperArrow_default } from "./N8nPopover-Br48TFHh.js";
import { t as N8nScrollArea_default } from "./N8nScrollArea-CgfdbaTF.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/HoverCard/HoverCardArrow.js
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
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/HoverCard/HoverCardRoot.js
var [injectHoverCardRootContext, provideHoverCardRootContext] = createContext("HoverCardRoot");
var HoverCardRoot_default = /* @__PURE__ */ defineComponent({
	__name: "HoverCardRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: false,
			default: false
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		openDelay: {
			type: Number,
			required: false,
			default: 700
		},
		closeDelay: {
			type: Number,
			required: false,
			default: 300
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { openDelay, closeDelay } = toRefs(props);
		useForwardExpose();
		const open = useVModel(props, "open", emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		const openTimerRef = ref(0);
		const closeTimerRef = ref(0);
		const hasSelectionRef = ref(false);
		const isPointerDownOnContentRef = ref(false);
		const isPointerInTransitRef = ref(false);
		const triggerElement = ref();
		function handleOpen() {
			clearTimeout(closeTimerRef.value);
			openTimerRef.value = window.setTimeout(() => open.value = true, openDelay.value);
		}
		function handleClose() {
			clearTimeout(openTimerRef.value);
			if (!hasSelectionRef.value && !isPointerDownOnContentRef.value) closeTimerRef.value = window.setTimeout(() => open.value = false, closeDelay.value);
		}
		function handleDismiss() {
			open.value = false;
		}
		provideHoverCardRootContext({
			open,
			onOpenChange(value) {
				open.value = value;
			},
			onOpen: handleOpen,
			onClose: handleClose,
			onDismiss: handleDismiss,
			hasSelectionRef,
			isPointerDownOnContentRef,
			isPointerInTransitRef,
			triggerElement
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/HoverCard/utils.js
function excludeTouch(eventHandler) {
	return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
/**
* Returns a list of nodes that can be in the tab sequence.
* @see: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
*/
function getTabbableNodes(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/HoverCard/HoverCardContentImpl.js
var HoverCardContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "HoverCardContentImpl",
	props: {
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardProps(props);
		const { forwardRef, currentElement: contentElement } = useForwardExpose();
		const rootContext = injectHoverCardRootContext();
		const { isPointerInTransit, onPointerExit } = useGraceArea(rootContext.triggerElement, contentElement);
		syncRef(rootContext.isPointerInTransitRef, isPointerInTransit, { direction: "rtl" });
		onPointerExit(() => {
			rootContext.onClose();
		});
		const containSelection = ref(false);
		let originalBodyUserSelect;
		watchEffect((cleanupFn) => {
			if (containSelection.value) {
				const body = document.body;
				originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
				body.style.userSelect = "none";
				body.style.webkitUserSelect = "none";
				cleanupFn(() => {
					body.style.userSelect = originalBodyUserSelect;
					body.style.webkitUserSelect = originalBodyUserSelect;
				});
			}
		});
		function handlePointerUp() {
			containSelection.value = false;
			rootContext.isPointerDownOnContentRef.value = false;
			nextTick(() => {
				if (document.getSelection()?.toString() !== "") rootContext.hasSelectionRef.value = true;
			});
		}
		onMounted(() => {
			if (contentElement.value) {
				document.addEventListener("pointerup", handlePointerUp);
				getTabbableNodes(contentElement.value).forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
			}
		});
		onUnmounted(() => {
			document.removeEventListener("pointerup", handlePointerUp);
			rootContext.hasSelectionRef.value = false;
			rootContext.isPointerDownOnContentRef.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DismissableLayer_default), {
				"as-child": "",
				"disable-outside-pointer-events": false,
				onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
				onPointerDownOutside: _cache[2] || (_cache[2] = ($event) => emits("pointerDownOutside", $event)),
				onFocusOutside: _cache[3] || (_cache[3] = withModifiers(($event) => emits("focusOutside", $event), ["prevent"])),
				onDismiss: unref(rootContext).onDismiss
			}, {
				default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps({
					...unref(forwarded),
					..._ctx.$attrs
				}, {
					ref: unref(forwardRef),
					"data-state": unref(rootContext).open.value ? "open" : "closed",
					style: {
						"userSelect": containSelection.value ? "text" : void 0,
						"WebkitUserSelect": containSelection.value ? "text" : void 0,
						"--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)",
						"--reka-hover-card-content-available-width": "var(--reka-popper-available-width)",
						"--reka-hover-card-content-available-height": "var(--reka-popper-available-height)",
						"--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)",
						"--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)"
					},
					onPointerdown: _cache[0] || (_cache[0] = (event) => {
						if (event.currentTarget.contains(event.target)) containSelection.value = true;
						unref(rootContext).hasSelectionRef.value = false;
						unref(rootContext).isPointerDownOnContentRef.value = true;
					})
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["data-state", "style"])]),
				_: 3
			}, 8, ["onDismiss"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/HoverCard/HoverCardContent.js
var HoverCardContent_default = /* @__PURE__ */ defineComponent({
	__name: "HoverCardContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		const { forwardRef } = useForwardExpose();
		const rootContext = injectHoverCardRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
				default: withCtx(() => [createVNode(HoverCardContentImpl_default, mergeProps(unref(forwarded), {
					ref: unref(forwardRef),
					onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event))
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16)]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/HoverCard/HoverCardPortal.js
var HoverCardPortal_default = /* @__PURE__ */ defineComponent({
	__name: "HoverCardPortal",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/HoverCard/HoverCardTrigger.js
var HoverCardTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "HoverCardTrigger",
	props: {
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "a"
		}
	},
	setup(__props) {
		const { forwardRef, currentElement } = useForwardExpose();
		const rootContext = injectHoverCardRootContext();
		rootContext.triggerElement = currentElement;
		function handleLeave() {
			setTimeout(() => {
				if (!rootContext.isPointerInTransitRef.value && !rootContext.open.value) rootContext.onClose();
			}, 0);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), {
				"as-child": "",
				reference: _ctx.reference
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					"as-child": _ctx.asChild,
					as: _ctx.as,
					"data-state": unref(rootContext).open.value ? "open" : "closed",
					"data-grace-area-trigger": "",
					onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event)),
					onPointerleave: _cache[1] || (_cache[1] = ($event) => unref(excludeTouch)(handleLeave)($event)),
					onFocus: _cache[2] || (_cache[2] = ($event) => unref(rootContext).onOpen()),
					onBlur: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onClose())
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"as-child",
					"as",
					"data-state"
				])]),
				_: 3
			}, 8, ["reference"]);
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
var hiddenTrigger = "_hiddenTrigger_1ml0i_388";
var hoverCardArrow = "_hoverCardArrow_1ml0i_392";
var hoverCardContent = "_hoverCardContent_1ml0i_399";
var popoverIn = "_popoverIn_1ml0i_1";
var shimmer = "_shimmer_1ml0i_1";
var spin = "_spin_1ml0i_1";
var opacityPulse = "_opacityPulse_1ml0i_1";
var fadeIn = "_fadeIn_1ml0i_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ml0i_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ml0i_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ml0i_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ml0i_1";
var blurSwapIn = "_blurSwapIn_1ml0i_1";
var blurSwapOut = "_blurSwapOut_1ml0i_1";
var pulseGlow = "_pulseGlow_1ml0i_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ml0i_1";
var fade = "_fade_1ml0i_1";
var fadeInUp = "_fadeInUp_1ml0i_1";
var fadeInDown = "_fadeInDown_1ml0i_1";
var fadeInLeft = "_fadeInLeft_1ml0i_1";
var fadeInRight = "_fadeInRight_1ml0i_1";
var fadeOut = "_fadeOut_1ml0i_1";
var fadeOutDown = "_fadeOutDown_1ml0i_1";
var fadeOutUp = "_fadeOutUp_1ml0i_1";
var fadeOutLeft = "_fadeOutLeft_1ml0i_1";
var fadeOutRight = "_fadeOutRight_1ml0i_1";
var ping = "_ping_1ml0i_1";
var blinkBackground = "_blinkBackground_1ml0i_1";
var typingBlink = "_typingBlink_1ml0i_1";
var HoverCard_vue_vue_type_style_index_0_lang_module_default = {
	hiddenTrigger,
	hoverCardArrow,
	hoverCardContent,
	popoverIn,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ml0i_1",
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
export { HoverCardRoot_default as a, HoverCardContent_default as i, HoverCardTrigger_default as n, HoverCardPortal_default as r, N8nHoverCard_default as t };
