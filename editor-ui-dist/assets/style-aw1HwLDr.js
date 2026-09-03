import { Dt as getCurrentScope, Ft as readonly, Gt as unref, It as ref, Nt as onScopeDispose, P as getCurrentInstance, S as computed, W as nextTick, X as onMounted, Xt as capitalize$1, Yt as camelize, _t as watchEffect, gt as watch, mn as isString$1, tn as init_shared_esm_bundler, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import "./lib-CcMDH-kD.js";
import { m as isStringNumber, p as isNumber } from "./use-namespace-xWWi2xIE.js";
//#region ../../../node_modules/.pnpm/@vueuse+shared@9.13.0_vue@3.5.26_typescript@6.0.2_/node_modules/@vueuse/shared/index.mjs
var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp$b.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
	if (__getOwnPropSymbols$b) {
		for (var prop of __getOwnPropSymbols$b(b)) if (__propIsEnum$b.call(b, prop)) __defNormalProp$9(a, prop, b[prop]);
	}
	return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function computedEager(fn, options) {
	var _a;
	const result = shallowRef();
	watchEffect(() => {
		result.value = fn();
	}, __spreadProps$6(__spreadValues$9({}, options), { flush: (_a = options == null ? void 0 : options.flush) != null ? _a : "sync" }));
	return readonly(result);
}
var _a;
var isClient = typeof window !== "undefined";
var isDef = (val) => typeof val !== "undefined";
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var noop = () => {};
var isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
	return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
	return arg;
}
function tryOnScopeDispose(fn) {
	if (getCurrentScope()) {
		onScopeDispose(fn);
		return true;
	}
	return false;
}
function tryOnMounted(fn, sync = true) {
	if (getCurrentInstance()) onMounted(fn);
	else if (sync) fn();
	else nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
	const { immediate = true } = options;
	const isPending = ref(false);
	let timer = null;
	function clear() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}
	function stop() {
		isPending.value = false;
		clear();
	}
	function start(...args) {
		clear();
		isPending.value = true;
		timer = setTimeout(() => {
			isPending.value = false;
			timer = null;
			cb(...args);
		}, resolveUnref(interval));
	}
	if (immediate) {
		isPending.value = true;
		if (isClient) start();
	}
	tryOnScopeDispose(stop);
	return {
		isPending: readonly(isPending),
		start,
		stop
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@vueuse+core@9.13.0_vue@3.5.26_typescript@6.0.2_/node_modules/@vueuse/core/index.mjs
function unrefElement(elRef) {
	var _a;
	const plain = resolveUnref(elRef);
	return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
isClient && window.navigator;
isClient && window.location;
function useEventListener(...args) {
	let target;
	let events;
	let listeners;
	let options;
	if (isString(args[0]) || Array.isArray(args[0])) {
		[events, listeners, options] = args;
		target = defaultWindow;
	} else [target, events, listeners, options] = args;
	if (!target) return noop;
	if (!Array.isArray(events)) events = [events];
	if (!Array.isArray(listeners)) listeners = [listeners];
	const cleanups = [];
	const cleanup = () => {
		cleanups.forEach((fn) => fn());
		cleanups.length = 0;
	};
	const register = (el, event, listener, options2) => {
		el.addEventListener(event, listener, options2);
		return () => el.removeEventListener(event, listener, options2);
	};
	const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
		cleanup();
		if (!el) return;
		cleanups.push(...events.flatMap((event) => {
			return listeners.map((listener) => register(el, event, listener, options2));
		}));
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		stopWatch();
		cleanup();
	};
	tryOnScopeDispose(stop);
	return stop;
}
var _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
	const { window = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
	if (!window) return;
	if (isIOS && !_iOSWorkaround) {
		_iOSWorkaround = true;
		Array.from(window.document.body.children).forEach((el) => el.addEventListener("click", noop));
	}
	let shouldListen = true;
	const shouldIgnore = (event) => {
		return ignore.some((target2) => {
			if (typeof target2 === "string") return Array.from(window.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
			else {
				const el = unrefElement(target2);
				return el && (event.target === el || event.composedPath().includes(el));
			}
		});
	};
	const listener = (event) => {
		const el = unrefElement(target);
		if (!el || el === event.target || event.composedPath().includes(el)) return;
		if (event.detail === 0) shouldListen = !shouldIgnore(event);
		if (!shouldListen) {
			shouldListen = true;
			return;
		}
		handler(event);
	};
	const cleanup = [
		useEventListener(window, "click", listener, {
			passive: true,
			capture
		}),
		useEventListener(window, "pointerdown", (e) => {
			const el = unrefElement(target);
			if (el) shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
		}, { passive: true }),
		detectIframe && useEventListener(window, "blur", (event) => {
			var _a;
			const el = unrefElement(target);
			if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement))) handler(event);
		})
	].filter(Boolean);
	const stop = () => cleanup.forEach((fn) => fn());
	return stop;
}
function useSupported(callback, sync = false) {
	const isSupported = ref();
	const update = () => isSupported.value = Boolean(callback());
	update();
	tryOnMounted(update, sync);
	return isSupported;
}
function cloneFnJSON(source) {
	return JSON.parse(JSON.stringify(source));
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useDocumentVisibility({ document = defaultDocument } = {}) {
	if (!document) return ref("visible");
	const visibility = ref(document.visibilityState);
	useEventListener(document, "visibilitychange", () => {
		visibility.value = document.visibilityState;
	});
	return visibility;
}
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
	var target = {};
	for (var prop in source) if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
	if (source != null && __getOwnPropSymbols$g) {
		for (var prop of __getOwnPropSymbols$g(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop)) target[prop] = source[prop];
	}
	return target;
};
function useResizeObserver(target, callback, options = {}) {
	const _a = options, { window = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
	let observer;
	const isSupported = useSupported(() => window && "ResizeObserver" in window);
	const cleanup = () => {
		if (observer) {
			observer.disconnect();
			observer = void 0;
		}
	};
	const stopWatch = watch(() => unrefElement(target), (el) => {
		cleanup();
		if (isSupported.value && window && el) {
			observer = new ResizeObserver(callback);
			observer.observe(el, observerOptions);
		}
	}, {
		immediate: true,
		flush: "post"
	});
	const stop = () => {
		cleanup();
		stopWatch();
	};
	tryOnScopeDispose(stop);
	return {
		isSupported,
		stop
	};
}
var SwipeDirection;
(function(SwipeDirection2) {
	SwipeDirection2["UP"] = "UP";
	SwipeDirection2["RIGHT"] = "RIGHT";
	SwipeDirection2["DOWN"] = "DOWN";
	SwipeDirection2["LEFT"] = "LEFT";
	SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	}
	return a;
};
__spreadValues({ linear: identity }, {
	easeInSine: [
		.12,
		0,
		.39,
		0
	],
	easeOutSine: [
		.61,
		1,
		.88,
		1
	],
	easeInOutSine: [
		.37,
		0,
		.63,
		1
	],
	easeInQuad: [
		.11,
		0,
		.5,
		0
	],
	easeOutQuad: [
		.5,
		1,
		.89,
		1
	],
	easeInOutQuad: [
		.45,
		0,
		.55,
		1
	],
	easeInCubic: [
		.32,
		0,
		.67,
		0
	],
	easeOutCubic: [
		.33,
		1,
		.68,
		1
	],
	easeInOutCubic: [
		.65,
		0,
		.35,
		1
	],
	easeInQuart: [
		.5,
		0,
		.75,
		0
	],
	easeOutQuart: [
		.25,
		1,
		.5,
		1
	],
	easeInOutQuart: [
		.76,
		0,
		.24,
		1
	],
	easeInQuint: [
		.64,
		0,
		.78,
		0
	],
	easeOutQuint: [
		.22,
		1,
		.36,
		1
	],
	easeInOutQuint: [
		.83,
		0,
		.17,
		1
	],
	easeInExpo: [
		.7,
		0,
		.84,
		0
	],
	easeOutExpo: [
		.16,
		1,
		.3,
		1
	],
	easeInOutExpo: [
		.87,
		0,
		.13,
		1
	],
	easeInCirc: [
		.55,
		0,
		1,
		.45
	],
	easeOutCirc: [
		0,
		.55,
		.45,
		1
	],
	easeInOutCirc: [
		.85,
		0,
		.15,
		1
	],
	easeInBack: [
		.36,
		0,
		.66,
		-.56
	],
	easeOutBack: [
		.34,
		1.56,
		.64,
		1
	],
	easeInOutBack: [
		.68,
		-.6,
		.32,
		1.6
	]
});
function useVModel(props, key, emit, options = {}) {
	var _a, _b, _c;
	const { clone = false, passive = false, eventName, deep = false, defaultValue } = options;
	const vm = getCurrentInstance();
	const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
	let event = eventName;
	if (!key) key = "modelValue";
	event = eventName || event || `update:${key.toString()}`;
	const cloneFn = (val) => !clone ? val : isFunction(clone) ? clone(val) : cloneFnJSON(val);
	const getValue = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
	if (passive) {
		const proxy = ref(getValue());
		watch(() => props[key], (v) => proxy.value = cloneFn(v));
		watch(proxy, (v) => {
			if (v !== props[key] || deep) _emit(event, v);
		}, { deep });
		return proxy;
	} else return computed({
		get() {
			return getValue();
		},
		set(value) {
			_emit(event, value);
		}
	});
}
function useWindowFocus({ window = defaultWindow } = {}) {
	if (!window) return ref(false);
	const focused = ref(window.document.hasFocus());
	useEventListener(window, "blur", () => {
		focused.value = false;
	});
	useEventListener(window, "focus", () => {
		focused.value = true;
	});
	return focused;
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/browser.mjs
var isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/strings.mjs
init_shared_esm_bundler();
var escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
var capitalize = (str) => capitalize$1(str);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/error.mjs
var ElementPlusError = class extends Error {
	constructor(m) {
		super(m);
		this.name = "ElementPlusError";
	}
};
function throwError(scope, m) {
	throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/dom/style.mjs
init_shared_esm_bundler();
var SCOPE = "utils/dom/style";
var classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
var hasClass = (el, cls) => {
	if (!el || !cls) return false;
	if (cls.includes(" ")) throw new Error("className should not contain space.");
	return el.classList.contains(cls);
};
var addClass = (el, cls) => {
	if (!el || !cls.trim()) return;
	el.classList.add(...classNameToArray(cls));
};
var removeClass = (el, cls) => {
	if (!el || !cls.trim()) return;
	el.classList.remove(...classNameToArray(cls));
};
var getStyle = (element, styleName) => {
	var _a;
	if (!isClient || !element || !styleName) return "";
	let key = camelize(styleName);
	if (key === "float") key = "cssFloat";
	try {
		const style = element.style[key];
		if (style) return style;
		const computed = (_a = document.defaultView) == null ? void 0 : _a.getComputedStyle(element, "");
		return computed ? computed[key] : "";
	} catch (e) {
		return element.style[key];
	}
};
function addUnit(value, defaultUnit = "px") {
	if (!value) return "";
	if (isNumber(value) || isStringNumber(value)) return `${value}${defaultUnit}`;
	else if (isString$1(value)) return value;
	debugWarn(SCOPE, "binding value must be a string or number");
}
//#endregion
export { useTimeoutFn as S, useWindowFocus as _, removeClass as a, isIOS as b, capitalize as c, onClickOutside as d, unrefElement as f, useVModel as g, useResizeObserver as h, hasClass as i, escapeStringRegexp as l, useEventListener as m, addUnit as n, debugWarn as o, useDocumentVisibility as p, getStyle as r, throwError as s, addClass as t, isFirefox as u, computedEager as v, tryOnScopeDispose as x, isClient as y };
