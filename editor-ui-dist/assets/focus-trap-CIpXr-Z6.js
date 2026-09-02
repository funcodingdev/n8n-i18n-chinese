import { Gt as unref, It as ref, N as defineComponent, W as nextTick, X as onMounted, gt as watch, it as renderSlot, mn as isString, q as onBeforeUnmount, tn as init_shared_esm_bundler, tt as provide } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { y as isClient } from "./style-aw1HwLDr.js";
import { t as _export_sfc } from "./plugin-vue_export-helper-AbXb0iQc.js";
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isNil.js
/**
* Checks if `value` is `null` or `undefined`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is nullish, else `false`.
* @example
*
* _.isNil(null);
* // => true
*
* _.isNil(void 0);
* // => true
*
* _.isNil(NaN);
* // => false
*/
function isNil(value) {
	return value == null;
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/constants/aria.mjs
var EVENT_CODE = {
	tab: "Tab",
	enter: "Enter",
	space: "Space",
	left: "ArrowLeft",
	up: "ArrowUp",
	right: "ArrowRight",
	down: "ArrowDown",
	esc: "Escape",
	delete: "Delete",
	backspace: "Backspace",
	numpadEnter: "NumpadEnter",
	pageUp: "PageUp",
	pageDown: "PageDown",
	home: "Home",
	end: "End"
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-escape-keydown/index.mjs
var registeredEscapeHandlers = [];
var cachedHandler = (e) => {
	const event = e;
	if (event.key === EVENT_CODE.esc) registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
};
var useEscapeKeydown = (handler) => {
	onMounted(() => {
		if (registeredEscapeHandlers.length === 0) document.addEventListener("keydown", cachedHandler);
		if (isClient) registeredEscapeHandlers.push(handler);
	});
	onBeforeUnmount(() => {
		registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
		if (registeredEscapeHandlers.length === 0) {
			if (isClient) document.removeEventListener("keydown", cachedHandler);
		}
	});
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/focus-trap/src/tokens.mjs
var FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
var FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
var FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
var FOCUS_AFTER_TRAPPED_OPTS = {
	cancelable: true,
	bubbles: false
};
var FOCUSOUT_PREVENTED_OPTS = {
	cancelable: true,
	bubbles: false
};
var ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
var ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
var FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/focus-trap/src/utils.mjs
var focusReason = ref();
var lastUserFocusTimestamp = ref(0);
var lastAutomatedFocusTimestamp = ref(0);
var focusReasonUserCount = 0;
var obtainAllFocusableElements = (element) => {
	const nodes = [];
	const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
};
var getVisibleElement = (elements, container) => {
	for (const element of elements) if (!isHidden(element, container)) return element;
};
var isHidden = (element, container) => {
	if (getComputedStyle(element).visibility === "hidden") return true;
	while (element) {
		if (container && element === container) return false;
		if (getComputedStyle(element).display === "none") return true;
		element = element.parentElement;
	}
	return false;
};
var getEdges = (container) => {
	const focusable = obtainAllFocusableElements(container);
	return [getVisibleElement(focusable, container), getVisibleElement(focusable.reverse(), container)];
};
var isSelectable = (element) => {
	return element instanceof HTMLInputElement && "select" in element;
};
var tryFocus = (element, shouldSelect) => {
	if (element && element.focus) {
		const prevFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		lastAutomatedFocusTimestamp.value = window.performance.now();
		if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) element.select();
	}
};
function removeFromStack(list, item) {
	const copy = [...list];
	const idx = list.indexOf(item);
	if (idx !== -1) copy.splice(idx, 1);
	return copy;
}
var createFocusableStack = () => {
	let stack = [];
	const push = (layer) => {
		const currentLayer = stack[0];
		if (currentLayer && layer !== currentLayer) currentLayer.pause();
		stack = removeFromStack(stack, layer);
		stack.unshift(layer);
	};
	const remove = (layer) => {
		var _a, _b;
		stack = removeFromStack(stack, layer);
		(_b = (_a = stack[0]) == null ? void 0 : _a.resume) == null || _b.call(_a);
	};
	return {
		push,
		remove
	};
};
var focusFirstDescendant = (elements, shouldSelect = false) => {
	const prevFocusedElement = document.activeElement;
	for (const element of elements) {
		tryFocus(element, shouldSelect);
		if (document.activeElement !== prevFocusedElement) return;
	}
};
var focusableStack = createFocusableStack();
var isFocusCausedByUserEvent = () => {
	return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
};
var notifyFocusReasonPointer = () => {
	focusReason.value = "pointer";
	lastUserFocusTimestamp.value = window.performance.now();
};
var notifyFocusReasonKeydown = () => {
	focusReason.value = "keyboard";
	lastUserFocusTimestamp.value = window.performance.now();
};
var useFocusReason = () => {
	onMounted(() => {
		if (focusReasonUserCount === 0) {
			document.addEventListener("mousedown", notifyFocusReasonPointer);
			document.addEventListener("touchstart", notifyFocusReasonPointer);
			document.addEventListener("keydown", notifyFocusReasonKeydown);
		}
		focusReasonUserCount++;
	});
	onBeforeUnmount(() => {
		focusReasonUserCount--;
		if (focusReasonUserCount <= 0) {
			document.removeEventListener("mousedown", notifyFocusReasonPointer);
			document.removeEventListener("touchstart", notifyFocusReasonPointer);
			document.removeEventListener("keydown", notifyFocusReasonKeydown);
		}
	});
	return {
		focusReason,
		lastUserFocusTimestamp,
		lastAutomatedFocusTimestamp
	};
};
var createFocusOutPreventedEvent = (detail) => {
	return new CustomEvent(FOCUSOUT_PREVENTED, {
		...FOCUSOUT_PREVENTED_OPTS,
		detail
	});
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/focus-trap/src/focus-trap.mjs
init_shared_esm_bundler();
var _sfc_main = defineComponent({
	name: "ElFocusTrap",
	inheritAttrs: false,
	props: {
		loop: Boolean,
		trapped: Boolean,
		focusTrapEl: Object,
		focusStartEl: {
			type: [Object, String],
			default: "first"
		}
	},
	emits: [
		ON_TRAP_FOCUS_EVT,
		ON_RELEASE_FOCUS_EVT,
		"focusin",
		"focusout",
		"focusout-prevented",
		"release-requested"
	],
	setup(props, { emit }) {
		const forwardRef = ref();
		let lastFocusBeforeTrapped;
		let lastFocusAfterTrapped;
		const { focusReason } = useFocusReason();
		useEscapeKeydown((event) => {
			if (props.trapped && !focusLayer.paused) emit("release-requested", event);
		});
		const focusLayer = {
			paused: false,
			pause() {
				this.paused = true;
			},
			resume() {
				this.paused = false;
			}
		};
		const onKeydown = (e) => {
			if (!props.loop && !props.trapped) return;
			if (focusLayer.paused) return;
			const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
			const { loop } = props;
			const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
			const currentFocusingEl = document.activeElement;
			if (isTabbing && currentFocusingEl) {
				const container = currentTarget;
				const [first, last] = getEdges(container);
				if (!(first && last)) {
					if (currentFocusingEl === container) {
						const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason.value });
						emit("focusout-prevented", focusoutPreventedEvent);
						if (!focusoutPreventedEvent.defaultPrevented) e.preventDefault();
					}
				} else if (!shiftKey && currentFocusingEl === last) {
					const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason.value });
					emit("focusout-prevented", focusoutPreventedEvent);
					if (!focusoutPreventedEvent.defaultPrevented) {
						e.preventDefault();
						if (loop) tryFocus(first, true);
					}
				} else if (shiftKey && [first, container].includes(currentFocusingEl)) {
					const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason.value });
					emit("focusout-prevented", focusoutPreventedEvent);
					if (!focusoutPreventedEvent.defaultPrevented) {
						e.preventDefault();
						if (loop) tryFocus(last, true);
					}
				}
			}
		};
		provide(FOCUS_TRAP_INJECTION_KEY, {
			focusTrapRef: forwardRef,
			onKeydown
		});
		watch(() => props.focusTrapEl, (focusTrapEl) => {
			if (focusTrapEl) forwardRef.value = focusTrapEl;
		}, { immediate: true });
		watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
			if (forwardRef2) {
				forwardRef2.addEventListener("keydown", onKeydown);
				forwardRef2.addEventListener("focusin", onFocusIn);
				forwardRef2.addEventListener("focusout", onFocusOut);
			}
			if (oldForwardRef) {
				oldForwardRef.removeEventListener("keydown", onKeydown);
				oldForwardRef.removeEventListener("focusin", onFocusIn);
				oldForwardRef.removeEventListener("focusout", onFocusOut);
			}
		});
		const trapOnFocus = (e) => {
			emit(ON_TRAP_FOCUS_EVT, e);
		};
		const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
		const onFocusIn = (e) => {
			const trapContainer = unref(forwardRef);
			if (!trapContainer) return;
			const target = e.target;
			const relatedTarget = e.relatedTarget;
			const isFocusedInTrap = target && trapContainer.contains(target);
			if (!props.trapped) {
				if (!(relatedTarget && trapContainer.contains(relatedTarget))) lastFocusBeforeTrapped = relatedTarget;
			}
			if (isFocusedInTrap) emit("focusin", e);
			if (focusLayer.paused) return;
			if (props.trapped) if (isFocusedInTrap) lastFocusAfterTrapped = target;
			else tryFocus(lastFocusAfterTrapped, true);
		};
		const onFocusOut = (e) => {
			const trapContainer = unref(forwardRef);
			if (focusLayer.paused || !trapContainer) return;
			if (props.trapped) {
				const relatedTarget = e.relatedTarget;
				if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) setTimeout(() => {
					if (!focusLayer.paused && props.trapped) {
						const focusoutPreventedEvent = createFocusOutPreventedEvent({ focusReason: focusReason.value });
						emit("focusout-prevented", focusoutPreventedEvent);
						if (!focusoutPreventedEvent.defaultPrevented) tryFocus(lastFocusAfterTrapped, true);
					}
				}, 0);
			} else {
				const target = e.target;
				if (!(target && trapContainer.contains(target))) emit("focusout", e);
			}
		};
		async function startTrap() {
			await nextTick();
			const trapContainer = unref(forwardRef);
			if (trapContainer) {
				focusableStack.push(focusLayer);
				const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
				lastFocusBeforeTrapped = prevFocusedElement;
				if (!trapContainer.contains(prevFocusedElement)) {
					const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
					trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
					trapContainer.dispatchEvent(focusEvent);
					if (!focusEvent.defaultPrevented) nextTick(() => {
						let focusStartEl = props.focusStartEl;
						if (!isString(focusStartEl)) {
							tryFocus(focusStartEl);
							if (document.activeElement !== focusStartEl) focusStartEl = "first";
						}
						if (focusStartEl === "first") focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
						if (document.activeElement === prevFocusedElement || focusStartEl === "container") tryFocus(trapContainer);
					});
				}
			}
		}
		function stopTrap() {
			const trapContainer = unref(forwardRef);
			if (trapContainer) {
				trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
				const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
					...FOCUS_AFTER_TRAPPED_OPTS,
					detail: { focusReason: focusReason.value }
				});
				trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
				trapContainer.dispatchEvent(releasedEvent);
				if (!releasedEvent.defaultPrevented && (focusReason.value == "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body);
				trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
				focusableStack.remove(focusLayer);
			}
		}
		onMounted(() => {
			if (props.trapped) startTrap();
			watch(() => props.trapped, (trapped) => {
				if (trapped) startTrap();
				else stopTrap();
			});
		});
		onBeforeUnmount(() => {
			if (props.trapped) stopTrap();
		});
		return { onKeydown };
	}
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
//#endregion
export { isNil as i, FOCUS_TRAP_INJECTION_KEY as n, EVENT_CODE as r, ElFocusTrap as t };
