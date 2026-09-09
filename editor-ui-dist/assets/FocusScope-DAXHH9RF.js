import { $ as openBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, S as computed, W as nextTick, Z as onUnmounted, _t as watchEffect, bt as withCtx, gt as watch, it as renderSlot, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { A as injectConfigProviderContext, E as tryOnBeforeUnmount, _ as createGlobalState, b as isIOS, c as useForwardExpose, d as useEventListener, n as Primitive, u as unrefElement, v as createSharedComposable, y as isClient } from "./VisuallyHidden-lv4qVqRn.js";
import { n as getActiveElement } from "./useDirection-UW3tNAWY.js";
//#region ../../../node_modules/.pnpm/defu@6.1.5/node_modules/defu/dist/defu.mjs
function isPlainObject(value) {
	if (value === null || typeof value !== "object") return false;
	const prototype = Object.getPrototypeOf(value);
	if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) return false;
	if (Symbol.iterator in value) return false;
	if (Symbol.toStringTag in value) return Object.prototype.toString.call(value) === "[object Module]";
	return true;
}
function _defu(baseObject, defaults, namespace = ".", merger) {
	if (!isPlainObject(defaults)) return _defu(baseObject, {}, namespace, merger);
	const object = { ...defaults };
	for (const key of Object.keys(baseObject)) {
		if (key === "__proto__" || key === "constructor") continue;
		const value = baseObject[key];
		if (value === null || value === void 0) continue;
		if (merger && merger(object, key, value, namespace)) continue;
		if (Array.isArray(value) && Array.isArray(object[key])) object[key] = [...value, ...object[key]];
		else if (isPlainObject(value) && isPlainObject(object[key])) object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
		else object[key] = value;
	}
	return object;
}
function createDefu(merger) {
	return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
var defu = createDefu();
createDefu((object, key, currentValue) => {
	if (object[key] !== void 0 && typeof currentValue === "function") {
		object[key] = currentValue(object[key]);
		return true;
	}
});
createDefu((object, key, currentValue) => {
	if (Array.isArray(object[key]) && typeof currentValue === "function") {
		object[key] = currentValue(object[key]);
		return true;
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/shared/useBodyScrollLock.js
var useBodyLockStackCount = createSharedComposable(() => {
	const map = ref(/* @__PURE__ */ new Map());
	const initialOverflow = ref();
	const locked = computed(() => {
		for (const value of map.value.values()) if (value) return true;
		return false;
	});
	const context = injectConfigProviderContext({ scrollBody: ref(true) });
	let stopTouchMoveListener = null;
	const resetBodyStyle = () => {
		document.body.style.paddingRight = "";
		document.body.style.marginRight = "";
		document.body.style.pointerEvents = "";
		document.documentElement.style.removeProperty("--scrollbar-width");
		document.body.style.overflow = initialOverflow.value ?? "";
		isIOS && stopTouchMoveListener?.();
		initialOverflow.value = void 0;
	};
	watch(locked, (val, oldVal) => {
		if (!isClient) return;
		if (!val) {
			if (oldVal) resetBodyStyle();
			return;
		}
		if (initialOverflow.value === void 0) initialOverflow.value = document.body.style.overflow;
		const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		const defaultConfig = {
			padding: verticalScrollbarWidth,
			margin: 0
		};
		const config = context.scrollBody?.value ? typeof context.scrollBody.value === "object" ? defu({
			padding: context.scrollBody.value.padding === true ? verticalScrollbarWidth : context.scrollBody.value.padding,
			margin: context.scrollBody.value.margin === true ? verticalScrollbarWidth : context.scrollBody.value.margin
		}, defaultConfig) : defaultConfig : {
			padding: 0,
			margin: 0
		};
		if (verticalScrollbarWidth > 0) {
			document.body.style.paddingRight = typeof config.padding === "number" ? `${config.padding}px` : String(config.padding);
			document.body.style.marginRight = typeof config.margin === "number" ? `${config.margin}px` : String(config.margin);
			document.documentElement.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
			document.body.style.overflow = "hidden";
		}
		if (isIOS) stopTouchMoveListener = useEventListener(document, "touchmove", (e) => preventDefault(e), { passive: false });
		nextTick(() => {
			document.body.style.pointerEvents = "none";
			document.body.style.overflow = "hidden";
		});
	}, {
		immediate: true,
		flush: "sync"
	});
	return map;
});
function useBodyScrollLock(initialState) {
	const id = Math.random().toString(36).substring(2, 7);
	const map = useBodyLockStackCount();
	map.value.set(id, initialState ?? false);
	const locked = computed({
		get: () => map.value.get(id) ?? false,
		set: (value) => map.value.set(id, value)
	});
	tryOnBeforeUnmount(() => {
		map.value.delete(id);
	});
	return locked;
}
function checkOverflowScroll(ele) {
	const style = window.getComputedStyle(ele);
	if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
	else {
		const parent = ele.parentNode;
		if (!(parent instanceof Element) || parent.tagName === "BODY") return false;
		return checkOverflowScroll(parent);
	}
}
function preventDefault(rawEvent) {
	const e = rawEvent || window.event;
	const _target = e.target;
	if (_target instanceof Element && checkOverflowScroll(_target)) return false;
	if (e.touches.length > 1) return true;
	if (e.preventDefault && e.cancelable) e.preventDefault();
	return false;
}
//#endregion
//#region ../../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
	if (typeof document === "undefined") return null;
	return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
	return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
	return targets.map(function(target) {
		if (parent.contains(target)) return target;
		var correctedTarget = unwrapHost(target);
		if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
		console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
		return null;
	}).filter(function(x) {
		return Boolean(x);
	});
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @param {String} [controlAttribute] - html Attribute to control
* @return {Undo} undo command
*/
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
	var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
	var markerCounter = markerMap[markerName];
	var hiddenNodes = [];
	var elementsToKeep = /* @__PURE__ */ new Set();
	var elementsToStop = new Set(targets);
	var keep = function(el) {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		keep(el.parentNode);
	};
	targets.forEach(keep);
	var deep = function(parent) {
		if (!parent || elementsToStop.has(parent)) return;
		Array.prototype.forEach.call(parent.children, function(node) {
			if (elementsToKeep.has(node)) deep(node);
			else try {
				var attr = node.getAttribute(controlAttribute);
				var alreadyHidden = attr !== null && attr !== "false";
				var counterValue = (counterMap.get(node) || 0) + 1;
				var markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenNodes.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
				if (markerValue === 1) node.setAttribute(markerName, "true");
				if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
			} catch (e) {
				console.error("aria-hidden: cannot operate on ", node, e);
			}
		});
	};
	deep(parentNode);
	elementsToKeep.clear();
	lockCount++;
	return function() {
		hiddenNodes.forEach(function(node) {
			var counterValue = counterMap.get(node) - 1;
			var markerValue = markerCounter.get(node) - 1;
			counterMap.set(node, counterValue);
			markerCounter.set(node, markerValue);
			if (!counterValue) {
				if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
				uncontrolledNodes.delete(node);
			}
			if (!markerValue) node.removeAttribute(markerName);
		});
		lockCount--;
		if (!lockCount) {
			counterMap = /* @__PURE__ */ new WeakMap();
			counterMap = /* @__PURE__ */ new WeakMap();
			uncontrolledNodes = /* @__PURE__ */ new WeakMap();
			markerMap = {};
		}
	};
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @return {Undo} undo command
*/
var hideOthers = function(originalTarget, parentNode, markerName) {
	if (markerName === void 0) markerName = "data-aria-hidden";
	var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	var activeParentNode = parentNode || getDefaultParent(originalTarget);
	if (!activeParentNode) return function() {
		return null;
	};
	targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
	return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/shared/useHideOthers.js
/**
* The `useHideOthers` function is a TypeScript function that takes a target element reference and
* hides all other elements in ARIA when the target element is present, and restores the visibility of the
* hidden elements when the target element is removed.
* @param {MaybeElementRef} target - The `target` parameter is a reference to the element that you want
* to hide other elements when it is clicked or focused.
*/
function useHideOthers(target) {
	let undo;
	watch(() => unrefElement(target), (el) => {
		if (el) undo = hideOthers(el);
		else if (undo) undo();
	});
	onUnmounted(() => {
		if (undo) undo();
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/FocusScope/stack.js
var useFocusStackState = createGlobalState(() => {
	return ref([]);
});
function createFocusScopesStack() {
	/** A stack of focus scopes, with the active one at the top */
	const stack = useFocusStackState();
	return {
		add(focusScope) {
			const activeFocusScope = stack.value[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack.value = arrayRemove(stack.value, focusScope);
			stack.value.unshift(focusScope);
		},
		remove(focusScope) {
			stack.value = arrayRemove(stack.value, focusScope);
			stack.value[0]?.resume();
		}
	};
}
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/FocusScope/utils.js
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
/**
* Attempts focusing the first element in a list of candidates.
* Stops when focus has actually moved.
*/
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = getActiveElement();
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (getActiveElement() !== previouslyFocusedElement) return true;
	}
}
/**
* Returns the first and last tabbable elements inside a container.
*/
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
/**
* Returns a list of potential tabbable candidates.
*
* NOTE: This is only a close approximation. For example it doesn't take into account cases like when
* elements are not visible. This cannot be worked out easily by just reading a property, but rather
* necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
*
* See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
* Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
*/
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
/**
* Returns the first visible element in a list.
* NOTE: Only checks visibility up to the `container`.
*/
function findVisible(elements, container) {
	for (const element of elements) if (!isHidden(element, { upTo: container })) return element;
}
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = getActiveElement();
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/FocusScope/FocusScope.js
var FocusScope_default = /* @__PURE__ */ defineComponent({
	__name: "FocusScope",
	props: {
		loop: {
			type: Boolean,
			required: false,
			default: false
		},
		trapped: {
			type: Boolean,
			required: false,
			default: false
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
	emits: ["mountAutoFocus", "unmountAutoFocus"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { currentRef, currentElement } = useForwardExpose();
		const lastFocusedElementRef = ref(null);
		const focusScopesStack = createFocusScopesStack();
		const focusScope = reactive({
			paused: false,
			pause() {
				this.paused = true;
			},
			resume() {
				this.paused = false;
			}
		});
		watchEffect((cleanupFn) => {
			if (!isClient) return;
			const container = currentElement.value;
			if (!props.trapped) return;
			function handleFocusIn(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.value = target;
				else focus(lastFocusedElementRef.value, { select: true });
			}
			function handleFocusOut(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.value, { select: true });
			}
			function handleMutations(mutations) {
				if (!container.contains(lastFocusedElementRef.value)) focus(container);
			}
			document.addEventListener("focusin", handleFocusIn);
			document.addEventListener("focusout", handleFocusOut);
			const mutationObserver = new MutationObserver(handleMutations);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			cleanupFn(() => {
				document.removeEventListener("focusin", handleFocusIn);
				document.removeEventListener("focusout", handleFocusOut);
				mutationObserver.disconnect();
			});
		});
		watchEffect(async (cleanupFn) => {
			const container = currentElement.value;
			await nextTick();
			if (!container) return;
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = getActiveElement();
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, (ev) => emits("mountAutoFocus", ev));
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
					if (getActiveElement() === previouslyFocusedElement) focus(container);
				}
			}
			cleanupFn(() => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, (ev) => emits("mountAutoFocus", ev));
				const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
				const unmountEventHandler = (ev) => {
					emits("unmountAutoFocus", ev);
				};
				container.addEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
				container.dispatchEvent(unmountEvent);
				setTimeout(() => {
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
					focusScopesStack.remove(focusScope);
				}, 0);
			});
		});
		function handleKeyDown(event) {
			if (!props.loop && !props.trapped) return;
			if (focusScope.paused) return;
			const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
			const focusedElement = getActiveElement();
			if (isTabKey && focusedElement) {
				const container = event.currentTarget;
				const [first, last] = getTabbableEdges(container);
				if (!(first && last)) {
					if (focusedElement === container) event.preventDefault();
				} else if (!event.shiftKey && focusedElement === last) {
					event.preventDefault();
					if (props.loop) focus(first, { select: true });
				} else if (event.shiftKey && focusedElement === first) {
					event.preventDefault();
					if (props.loop) focus(last, { select: true });
				}
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref_key: "currentRef",
				ref: currentRef,
				tabindex: "-1",
				"as-child": _ctx.asChild,
				as: _ctx.as,
				onKeydown: handleKeyDown
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["as-child", "as"]);
		};
	}
});
//#endregion
export { defu as i, useHideOthers as n, useBodyScrollLock as r, FocusScope_default as t };
