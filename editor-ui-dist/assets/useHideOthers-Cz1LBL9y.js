import { It as ref, S as computed, W as nextTick, Z as onUnmounted, gt as watch } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { A as injectConfigProviderContext, E as tryOnBeforeUnmount, b as isIOS, d as useEventListener, u as unrefElement, v as createSharedComposable, y as isClient } from "./VisuallyHidden-OSLEy_KR.js";
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
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/shared/useBodyScrollLock.js
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
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/shared/useHideOthers.js
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
export { useBodyScrollLock as n, defu as r, useHideOthers as t };
