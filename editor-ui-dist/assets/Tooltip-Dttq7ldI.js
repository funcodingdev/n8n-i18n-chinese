import { o as __toESM, r as __exportAll } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, R as inject, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, _ as Fragment, _t as watchEffect, bn as normalizeStyle, bt as withCtx, ct as toHandlers, ft as useSlots, g as Comment, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, lt as useAttrs, rt as renderList, st as resolveDynamicComponent, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { C as refAutoReset, O as useTimeoutFn, c as useForwardExpose, d as useEventListener, g as createEventHook, i as Presence_default, j as createContext, m as useVModel, n as Primitive, o as useId, s as useForwardProps, t as VisuallyHidden_default } from "./VisuallyHidden-lv4qVqRn.js";
import { a as PopperRoot_default, i as PopperAnchor_default, n as PopperContent_default, o as Teleport_default, s as DismissableLayer_default, u as useForwardPropsEmits } from "./PopperContent-Dajl-5rg.js";
import { t as truncate } from "./truncate-B0m9bkui.js";
import { t as require_sanitize_html } from "./sanitize-html-HcOJCXUs.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/shared/useGraceArea.js
function useGraceArea(triggerElement, containerElement) {
	const isPointerInTransit = refAutoReset(false, 300);
	const pointerGraceArea = ref(null);
	const pointerExit = createEventHook();
	function handleRemoveGraceArea() {
		pointerGraceArea.value = null;
		isPointerInTransit.value = false;
	}
	function handleCreateGraceArea(event, hoverTarget) {
		const currentTarget = event.currentTarget;
		const exitPoint = {
			x: event.clientX,
			y: event.clientY
		};
		const paddedExitPoints = getPaddedExitPoints(exitPoint, getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect()));
		const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
		pointerGraceArea.value = getHull([...paddedExitPoints, ...hoverTargetPoints]);
		isPointerInTransit.value = true;
	}
	watchEffect((cleanupFn) => {
		if (triggerElement.value && containerElement.value) {
			const handleTriggerLeave = (event) => handleCreateGraceArea(event, containerElement.value);
			const handleContentLeave = (event) => handleCreateGraceArea(event, triggerElement.value);
			triggerElement.value.addEventListener("pointerleave", handleTriggerLeave);
			containerElement.value.addEventListener("pointerleave", handleContentLeave);
			cleanupFn(() => {
				triggerElement.value?.removeEventListener("pointerleave", handleTriggerLeave);
				containerElement.value?.removeEventListener("pointerleave", handleContentLeave);
			});
		}
	});
	watchEffect((cleanupFn) => {
		if (pointerGraceArea.value) {
			const handleTrackPointerGrace = (event) => {
				if (!pointerGraceArea.value || !(event.target instanceof HTMLElement)) return;
				const target = event.target;
				const pointerPosition = {
					x: event.clientX,
					y: event.clientY
				};
				const hasEnteredTarget = triggerElement.value?.contains(target) || containerElement.value?.contains(target);
				const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea.value);
				const isAnotherGraceAreaTrigger = !!target.closest("[data-grace-area-trigger]");
				if (hasEnteredTarget) handleRemoveGraceArea();
				else if (isPointerOutsideGraceArea || isAnotherGraceAreaTrigger) {
					handleRemoveGraceArea();
					pointerExit.trigger();
				}
			};
			triggerElement.value?.ownerDocument.addEventListener("pointermove", handleTrackPointerGrace);
			cleanupFn(() => triggerElement.value?.ownerDocument.removeEventListener("pointermove", handleTrackPointerGrace));
		}
	});
	return {
		isPointerInTransit,
		onPointerExit: pointerExit.on
	};
}
function getExitSideFromRect(point, rect) {
	const top = Math.abs(rect.top - point.y);
	const bottom = Math.abs(rect.bottom - point.y);
	const right = Math.abs(rect.right - point.x);
	const left = Math.abs(rect.left - point.x);
	switch (Math.min(top, bottom, right, left)) {
		case left: return "left";
		case right: return "right";
		case top: return "top";
		case bottom: return "bottom";
		default: throw new Error("unreachable");
	}
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
	const paddedExitPoints = [];
	switch (exitSide) {
		case "top":
			paddedExitPoints.push({
				x: exitPoint.x - padding,
				y: exitPoint.y + padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y + padding
			});
			break;
		case "bottom":
			paddedExitPoints.push({
				x: exitPoint.x - padding,
				y: exitPoint.y - padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y - padding
			});
			break;
		case "left":
			paddedExitPoints.push({
				x: exitPoint.x + padding,
				y: exitPoint.y - padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y + padding
			});
			break;
		case "right":
			paddedExitPoints.push({
				x: exitPoint.x - padding,
				y: exitPoint.y - padding
			}, {
				x: exitPoint.x - padding,
				y: exitPoint.y + padding
			});
			break;
	}
	return paddedExitPoints;
}
function getPointsFromRect(rect) {
	const { top, right, bottom, left } = rect;
	return [
		{
			x: left,
			y: top
		},
		{
			x: right,
			y: top
		},
		{
			x: right,
			y: bottom
		},
		{
			x: left,
			y: bottom
		}
	];
}
function isPointInPolygon(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const xi = polygon[i].x;
		const yi = polygon[i].y;
		const xj = polygon[j].x;
		const yj = polygon[j].y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
function getHull(points) {
	const newPoints = points.slice();
	newPoints.sort((a, b) => {
		if (a.x < b.x) return -1;
		else if (a.x > b.x) return 1;
		else if (a.y < b.y) return -1;
		else if (a.y > b.y) return 1;
		else return 0;
	});
	return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
	if (points.length <= 1) return points.slice();
	const upperHull = [];
	for (let i = 0; i < points.length; i++) {
		const p = points[i];
		while (upperHull.length >= 2) {
			const q = upperHull[upperHull.length - 1];
			const r = upperHull[upperHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
			else break;
		}
		upperHull.push(p);
	}
	upperHull.pop();
	const lowerHull = [];
	for (let i = points.length - 1; i >= 0; i--) {
		const p = points[i];
		while (lowerHull.length >= 2) {
			const q = lowerHull[lowerHull.length - 1];
			const r = lowerHull[lowerHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
			else break;
		}
		lowerHull.push(p);
	}
	lowerHull.pop();
	if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
	else return upperHull.concat(lowerHull);
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tooltip/TooltipProvider.js
var [injectTooltipProviderContext, provideTooltipProviderContext] = createContext("TooltipProvider");
var TooltipProvider_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "TooltipProvider",
	props: {
		delayDuration: {
			type: Number,
			required: false,
			default: 700
		},
		skipDelayDuration: {
			type: Number,
			required: false,
			default: 300
		},
		disableHoverableContent: {
			type: Boolean,
			required: false,
			default: false
		},
		disableClosingTrigger: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		ignoreNonKeyboardFocus: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	setup(__props) {
		const { delayDuration, skipDelayDuration, disableHoverableContent, disableClosingTrigger, ignoreNonKeyboardFocus, disabled } = toRefs(__props);
		useForwardExpose();
		const isOpenDelayed = ref(true);
		const isPointerInTransitRef = ref(false);
		const { start: startTimer, stop: clearTimer } = useTimeoutFn(() => {
			isOpenDelayed.value = true;
		}, skipDelayDuration, { immediate: false });
		provideTooltipProviderContext({
			isOpenDelayed,
			delayDuration,
			onOpen() {
				clearTimer();
				isOpenDelayed.value = false;
			},
			onClose() {
				startTimer();
			},
			isPointerInTransitRef,
			disableHoverableContent,
			disableClosingTrigger,
			disabled,
			ignoreNonKeyboardFocus
		});
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tooltip/utils.js
var TOOLTIP_OPEN = "tooltip.open";
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tooltip/TooltipRoot.js
var [injectTooltipRootContext, provideTooltipRootContext] = createContext("TooltipRoot");
var TooltipRoot_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipRoot",
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
		delayDuration: {
			type: Number,
			required: false,
			default: void 0
		},
		disableHoverableContent: {
			type: Boolean,
			required: false,
			default: void 0
		},
		disableClosingTrigger: {
			type: Boolean,
			required: false,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: false,
			default: void 0
		},
		ignoreNonKeyboardFocus: {
			type: Boolean,
			required: false,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		useForwardExpose();
		const providerContext = injectTooltipProviderContext();
		const disableHoverableContent = computed(() => props.disableHoverableContent ?? providerContext.disableHoverableContent.value);
		const disableClosingTrigger = computed(() => props.disableClosingTrigger ?? providerContext.disableClosingTrigger.value);
		const disableTooltip = computed(() => props.disabled ?? providerContext.disabled.value);
		const delayDuration = computed(() => props.delayDuration ?? providerContext.delayDuration.value);
		const ignoreNonKeyboardFocus = computed(() => props.ignoreNonKeyboardFocus ?? providerContext.ignoreNonKeyboardFocus.value);
		const open = useVModel(props, "open", emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		watch(open, (isOpen) => {
			if (!providerContext.onClose) return;
			if (isOpen) {
				providerContext.onOpen();
				document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
			} else providerContext.onClose();
		});
		const wasOpenDelayedRef = ref(false);
		const trigger = ref();
		const stateAttribute = computed(() => {
			if (!open.value) return "closed";
			return wasOpenDelayedRef.value ? "delayed-open" : "instant-open";
		});
		const { start: startTimer, stop: clearTimer } = useTimeoutFn(() => {
			wasOpenDelayedRef.value = true;
			open.value = true;
		}, delayDuration, { immediate: false });
		function handleOpen() {
			clearTimer();
			wasOpenDelayedRef.value = false;
			open.value = true;
		}
		function handleClose() {
			clearTimer();
			open.value = false;
		}
		function handleDelayedOpen() {
			startTimer();
		}
		provideTooltipRootContext({
			contentId: "",
			open,
			stateAttribute,
			trigger,
			onTriggerChange(el) {
				trigger.value = el;
			},
			onTriggerEnter() {
				if (providerContext.isOpenDelayed.value) handleDelayedOpen();
				else handleOpen();
			},
			onTriggerLeave() {
				if (disableHoverableContent.value) handleClose();
				else clearTimer();
			},
			onOpen: handleOpen,
			onClose: handleClose,
			disableHoverableContent,
			disableClosingTrigger,
			disabled: disableTooltip,
			ignoreNonKeyboardFocus
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
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tooltip/TooltipContentImpl.js
var TooltipContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipContentImpl",
	props: {
		ariaLabel: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		side: {
			type: null,
			required: false,
			default: "top"
		},
		sideOffset: {
			type: Number,
			required: false,
			default: 0
		},
		align: {
			type: null,
			required: false,
			default: "center"
		},
		alignOffset: {
			type: Number,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false,
			default: true
		},
		collisionBoundary: {
			type: null,
			required: false,
			default: () => []
		},
		collisionPadding: {
			type: [Number, Object],
			required: false,
			default: 0
		},
		arrowPadding: {
			type: Number,
			required: false,
			default: 0
		},
		sticky: {
			type: String,
			required: false,
			default: "partial"
		},
		hideWhenDetached: {
			type: Boolean,
			required: false,
			default: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		}
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectTooltipRootContext();
		const { forwardRef } = useForwardExpose();
		const slot = useSlots();
		const defaultSlot = computed(() => slot.default?.({}));
		const ariaLabel = computed(() => {
			if (props.ariaLabel) return props.ariaLabel;
			let content = "";
			function recursiveTextSearch(node) {
				if (typeof node.children === "string" && node.type !== Comment) content += node.children;
				else if (Array.isArray(node.children)) node.children.forEach((child) => recursiveTextSearch(child));
			}
			defaultSlot.value?.forEach((node) => recursiveTextSearch(node));
			return content;
		});
		const popperContentProps = computed(() => {
			const { ariaLabel: _, ...restProps } = props;
			return restProps;
		});
		onMounted(() => {
			useEventListener(window, "scroll", (event) => {
				if (event.target?.contains(rootContext.trigger.value)) rootContext.onClose();
			});
			useEventListener(window, TOOLTIP_OPEN, rootContext.onClose);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DismissableLayer_default), {
				"as-child": "",
				"disable-outside-pointer-events": false,
				onEscapeKeyDown: _cache[0] || (_cache[0] = ($event) => emits("escapeKeyDown", $event)),
				onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
					if (unref(rootContext).disableClosingTrigger.value && unref(rootContext).trigger.value?.contains(event.target)) event.preventDefault();
					emits("pointerDownOutside", event);
				}),
				onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"])),
				onDismiss: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onClose())
			}, {
				default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps({
					ref: unref(forwardRef),
					"data-state": unref(rootContext).stateAttribute.value
				}, {
					..._ctx.$attrs,
					...popperContentProps.value
				}, { style: {
					"--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
					"--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
					"--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
					"--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
					"--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
				} }), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(VisuallyHidden_default), {
						id: unref(rootContext).contentId,
						role: "tooltip"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(ariaLabel.value), 1)]),
						_: 1
					}, 8, ["id"])]),
					_: 3
				}, 16, ["data-state"])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tooltip/TooltipContentHoverable.js
var TooltipContentHoverable_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipContentHoverable",
	props: {
		ariaLabel: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
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
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
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
		}
	},
	setup(__props) {
		const forwardedProps = useForwardProps(__props);
		const { forwardRef, currentElement } = useForwardExpose();
		const { trigger, onClose } = injectTooltipRootContext();
		const providerContext = injectTooltipProviderContext();
		const { isPointerInTransit, onPointerExit } = useGraceArea(trigger, currentElement);
		providerContext.isPointerInTransitRef = isPointerInTransit;
		onPointerExit(() => {
			onClose();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TooltipContentImpl_default, mergeProps({ ref: unref(forwardRef) }, unref(forwardedProps)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tooltip/TooltipContent.js
var TooltipContent_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		ariaLabel: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		side: {
			type: null,
			required: false,
			default: "top"
		},
		sideOffset: {
			type: Number,
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
		}
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectTooltipRootContext();
		const forwarded = useForwardPropsEmits(props, emits);
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
				default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(rootContext).disableHoverableContent.value ? TooltipContentImpl_default : TooltipContentHoverable_default), mergeProps({ ref: unref(forwardRef) }, unref(forwarded)), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16))]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tooltip/TooltipPortal.js
var TooltipPortal_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipPortal",
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
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Tooltip/TooltipTrigger.js
var TooltipTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipTrigger",
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
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectTooltipRootContext();
		const providerContext = injectTooltipProviderContext();
		rootContext.contentId ||= useId(void 0, "reka-tooltip-content");
		const { forwardRef, currentElement: triggerElement } = useForwardExpose();
		const isPointerDown = ref(false);
		const hasPointerMoveOpened = ref(false);
		const tooltipListeners = computed(() => {
			if (rootContext.disabled.value) return {};
			return {
				click: handleClick,
				focus: handleFocus,
				pointermove: handlePointerMove,
				pointerleave: handlePointerLeave,
				pointerdown: handlePointerDown,
				blur: handleBlur
			};
		});
		onMounted(() => {
			rootContext.onTriggerChange(triggerElement.value);
		});
		function handlePointerUp() {
			setTimeout(() => {
				isPointerDown.value = false;
			}, 1);
		}
		function handlePointerDown() {
			if (rootContext.open && !rootContext.disableClosingTrigger.value) rootContext.onClose();
			isPointerDown.value = true;
			document.addEventListener("pointerup", handlePointerUp, { once: true });
		}
		function handlePointerMove(event) {
			if (event.pointerType === "touch") return;
			if (!hasPointerMoveOpened.value && !providerContext.isPointerInTransitRef.value) {
				rootContext.onTriggerEnter();
				hasPointerMoveOpened.value = true;
			}
		}
		function handlePointerLeave() {
			rootContext.onTriggerLeave();
			hasPointerMoveOpened.value = false;
		}
		function handleFocus(event) {
			if (isPointerDown.value) return;
			if (rootContext.ignoreNonKeyboardFocus.value && !event.target.matches?.(":focus-visible")) return;
			rootContext.onOpen();
		}
		function handleBlur() {
			rootContext.onClose();
		}
		function handleClick() {
			if (!rootContext.disableClosingTrigger.value) rootContext.onClose();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), {
				"as-child": "",
				reference: _ctx.reference
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					"aria-describedby": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
					"data-state": unref(rootContext).stateAttribute.value,
					as: _ctx.as,
					"as-child": props.asChild,
					"data-grace-area-trigger": ""
				}, toHandlers(tooltipListeners.value)), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"aria-describedby",
					"data-state",
					"as",
					"as-child"
				])]),
				_: 3
			}, 8, ["reference"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/composables/useTooltipAppendTo.ts
var TOOLTIP_APPEND_TO = "TOOLTIP_APPEND_TO";
function useProvideTooltipAppendTo(el) {
	provide(TOOLTIP_APPEND_TO, el);
}
function useInjectTooltipAppendTo() {
	return inject(TOOLTIP_APPEND_TO, computed(() => void 0));
}
//#endregion
//#region ../@n8n/design-system/src/directives/n8n-truncate.ts
/**
* Custom directive `n8nTruncate` to truncate text content of an HTML element.
*
* Usage:
* In your Vue template, use the directive `v-n8n-truncate` with an argument to specify the length to truncate to.
*
* Example:
* <p v-n8n-truncate:10="'Some long text that will be truncated'" />
*
* This will truncate the text content of the paragraph to 10 characters.
*
* Hint: Do not use it on components
* https://vuejs.org/guide/reusability/custom-directives#usage-on-components
*/
var n8nTruncate = (el, binding) => {
	if (binding.value !== binding.oldValue) el.textContent = truncate(binding.value ?? "", Number(binding.arg) || void 0);
};
//#endregion
//#region ../@n8n/design-system/src/directives/n8n-html.ts
var import_sanitize_html = /* @__PURE__ */ __toESM(require_sanitize_html(), 1);
/**
* Custom directive `n8nHtml` to replace v-html from Vue to sanitize content.
*
* Usage:
* In your Vue template, use the directive `v-n8n-html` passing the unsafe HTML.
*
* Example:
* <p v-n8n-html="'<a href="https://site.com" onclick="alert(1)">link</a>'">
*
* Compiles to: <p><a href="https://site.com">link</a></p>
*
* Hint: Do not use it on components
* https://vuejs.org/guide/reusability/custom-directives#usage-on-components
*/
var configuredSanitize = (html) => (0, import_sanitize_html.default)(html, {
	allowedTags: import_sanitize_html.default.defaults.allowedTags.concat(["img", "input"]),
	allowedAttributes: {
		...import_sanitize_html.default.defaults.allowedAttributes,
		input: [
			"type",
			"id",
			"checked"
		],
		code: ["class"],
		a: import_sanitize_html.default.defaults.allowedAttributes.a.concat(["data-*"]),
		div: ["class"]
	}
});
var n8nHtml = (el, binding) => {
	if (binding.value !== binding.oldValue) el.innerHTML = configuredSanitize(binding.value);
};
//#endregion
//#region ../@n8n/design-system/src/directives/index.ts
var directives_exports = /* @__PURE__ */ __exportAll({
	n8nHtml: () => n8nHtml,
	n8nTruncate: () => n8nTruncate
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nTooltip/Tooltip.vue?vue&type=script&setup=true&lang.ts
var Tooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nTooltip",
	inheritAttrs: false,
	__name: "Tooltip",
	props: {
		asChild: {
			type: Boolean,
			default: false
		},
		content: {},
		placement: { default: "top" },
		disabled: { type: Boolean },
		showAfter: { default: 0 },
		visible: { type: Boolean },
		enterable: {
			type: Boolean,
			default: true
		},
		teleported: {
			type: Boolean,
			default: true
		},
		offset: { default: 8 },
		buttons: { default: () => [] },
		justifyButtons: { default: "flex-end" },
		avoidCollisions: {
			type: Boolean,
			default: true
		},
		contentClass: {}
	},
	setup(__props) {
		const attrs = useAttrs();
		const props = __props;
		const injectedAppendTo = useInjectTooltipAppendTo();
		const appendTo = computed(() => injectedAppendTo.value ?? "body");
		const VALID_SIDES = [
			"top",
			"bottom",
			"left",
			"right"
		];
		const VALID_ALIGNS = [
			"start",
			"end",
			"center"
		];
		const isSide = (value) => VALID_SIDES.includes(value);
		const isAlign = (value) => VALID_ALIGNS.includes(value);
		const placementParts = computed(() => {
			const [sideValue, alignValue] = props.placement.split("-");
			return {
				side: isSide(sideValue) ? sideValue : "top",
				align: isAlign(alignValue) ? alignValue : "center"
			};
		});
		const disableHoverableContent = computed(() => !props.enterable);
		const isOpen = ref(false);
		watch(() => props.visible, (newVisible) => {
			if (newVisible !== void 0) isOpen.value = newVisible;
		}, { immediate: true });
		const isControlled = computed(() => props.visible !== void 0);
		const handleOpenChange = (open) => {
			isOpen.value = open;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(TooltipProvider_default), null, {
				default: withCtx(() => [createVNode(unref(TooltipRoot_default), {
					disabled: __props.disabled,
					"delay-duration": __props.showAfter,
					open: isControlled.value ? isOpen.value : void 0,
					"disable-hoverable-content": disableHoverableContent.value,
					"onUpdate:open": handleOpenChange
				}, {
					default: withCtx(() => [__props.asChild ? (openBlock(), createBlock(unref(TooltipTrigger_default), mergeProps({
						key: 0,
						"as-child": ""
					}, unref(attrs), { class: { [_ctx.$style.disabledTrigger]: __props.disabled && !__props.asChild } }), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					}, 16, ["class"])) : (openBlock(), createBlock(unref(TooltipTrigger_default), {
						key: 1,
						as: "span",
						class: normalizeClass({ [_ctx.$style.disabledTrigger]: __props.disabled })
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					}, 8, ["class"])), createVNode(unref(TooltipPortal_default), {
						to: __props.teleported ? appendTo.value : void 0,
						disabled: !__props.teleported
					}, {
						default: withCtx(() => [createVNode(unref(TooltipContent_default), {
							"data-test-id": "tooltip-content",
							class: normalizeClass(["n8n-tooltip", __props.contentClass]),
							side: placementParts.value.side,
							align: placementParts.value.align,
							"side-offset": __props.offset,
							"avoid-collisions": __props.avoidCollisions,
							"collision-padding": 8
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "content", {}, () => [withDirectives(createBaseVNode("span", null, null, 512), [[unref(n8nHtml), __props.content ?? ""]])]), __props.buttons.length ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.buttons),
								style: normalizeStyle({ justifyContent: __props.justifyButtons })
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.buttons, (button) => {
								return openBlock(), createBlock(unref(N8nButton_default), mergeProps({ key: button.attrs.label }, { ref_for: true }, {
									...button.attrs,
									...button.listeners
								}), null, 16);
							}), 128))], 6)) : createCommentVNode("", true)]),
							_: 3
						}, 8, [
							"class",
							"side",
							"align",
							"side-offset",
							"avoid-collisions"
						])]),
						_: 3
					}, 8, ["to", "disabled"])]),
					_: 3
				}, 8, [
					"disabled",
					"delay-duration",
					"open",
					"disable-hoverable-content"
				])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nTooltip/Tooltip.vue?vue&type=style&index=0&lang.module.scss
var buttons = "_buttons_12d7g_388";
var disabledTrigger = "_disabledTrigger_12d7g_395";
var shimmer = "_shimmer_12d7g_1";
var spin = "_spin_12d7g_1";
var opacityPulse = "_opacityPulse_12d7g_1";
var popoverIn = "_popoverIn_12d7g_1";
var fadeIn = "_fadeIn_12d7g_1";
var collapsibleSlideDown = "_collapsibleSlideDown_12d7g_1";
var collapsibleSlideUp = "_collapsibleSlideUp_12d7g_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_12d7g_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_12d7g_1";
var blurSwapIn = "_blurSwapIn_12d7g_1";
var blurSwapOut = "_blurSwapOut_12d7g_1";
var pulseGlow = "_pulseGlow_12d7g_1";
var pulseGlowDelayed = "_pulseGlowDelayed_12d7g_1";
var fade = "_fade_12d7g_1";
var fadeInUp = "_fadeInUp_12d7g_1";
var fadeInDown = "_fadeInDown_12d7g_1";
var fadeInLeft = "_fadeInLeft_12d7g_1";
var fadeInRight = "_fadeInRight_12d7g_1";
var fadeOut = "_fadeOut_12d7g_1";
var fadeOutDown = "_fadeOutDown_12d7g_1";
var fadeOutUp = "_fadeOutUp_12d7g_1";
var fadeOutLeft = "_fadeOutLeft_12d7g_1";
var fadeOutRight = "_fadeOutRight_12d7g_1";
var ping = "_ping_12d7g_1";
var blinkBackground = "_blinkBackground_12d7g_1";
var typingBlink = "_typingBlink_12d7g_1";
var Tooltip_vue_vue_type_style_index_0_lang_module_default = {
	buttons,
	disabledTrigger,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_12d7g_1",
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
var Tooltip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Tooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Tooltip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useGraceArea as i, directives_exports as n, useProvideTooltipAppendTo as r, Tooltip_default as t };
