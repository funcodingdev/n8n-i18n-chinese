import { $ as openBlock, Cn as toDisplayString, E as createElementBlock, Ft as readonly, Gt as unref, It as ref, J as onDeactivated, Jt as NOOP, K as onBeforeMount, N as defineComponent, P as getCurrentInstance, R as inject, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, X as onMounted, _ as Fragment, an as isFunction, b as Text, bn as normalizeStyle, bt as withCtx, cn as isObject, g as Comment, gt as watch, it as renderSlot, j as createVNode, n as Transition, nn as isArray, p as vShow, q as onBeforeUnmount, tn as init_shared_esm_bundler, tt as provide, vn as normalizeClass, w as createBlock, x as cloneVNode, xt as withDirectives, y as Teleport, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { d as onClickOutside, f as unrefElement, o as debugWarn, x as tryOnScopeDispose, y as isClient } from "./style-D4NTVD8o.js";
import { _ as fromPairs, a as buildProps, d as isElement, i as buildProp, n as useGetDerivedNamespace, o as definePropType, p as isNumber, r as useNamespace, u as isBoolean } from "./use-namespace-BOyjzxct.js";
import { i as isNil, r as EVENT_CODE, t as ElFocusTrap } from "./focus-trap-B9RNkCJO.js";
import { t as isUndefined } from "./isUndefined-CCVluCw5.js";
import { n as withInstall, t as _export_sfc } from "./plugin-vue_export-helper-BwbYAlq0.js";
import { n as useId, r as useIdInjection } from "./icon-a_YnoStc.js";
import { n as useZIndex } from "./use-z-index-CSLBKraN.js";
import { a as formItemContextKey } from "./use-form-item-BbslK5UJ.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/dom/event.mjs
var composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
	const handleEvent = (event) => {
		const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
		if (checkForDefaultPrevented === false || !shouldPrevent) return oursHandler == null ? void 0 : oursHandler(event);
	};
	return handleEvent;
};
var whenMouse = (handler) => {
	return (e) => e.pointerType === "mouse" ? handler(e) : void 0;
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-model-toggle/index.mjs
init_shared_esm_bundler();
var _prop = buildProp({
	type: definePropType(Boolean),
	default: null
});
var _event = buildProp({ type: definePropType(Function) });
var createModelToggleComposable = (name) => {
	const updateEventKey = `update:${name}`;
	const updateEventKeyRaw = `onUpdate:${name}`;
	const useModelToggleEmits2 = [updateEventKey];
	const useModelToggleProps2 = {
		[name]: _prop,
		[updateEventKeyRaw]: _event
	};
	const useModelToggle2 = ({ indicator, toggleReason, shouldHideWhenRouteChanges, shouldProceed, onShow, onHide }) => {
		const instance = getCurrentInstance();
		const { emit } = instance;
		const props = instance.props;
		const hasUpdateHandler = computed(() => isFunction(props[updateEventKeyRaw]));
		const isModelBindingAbsent = computed(() => props[name] === null);
		const doShow = (event) => {
			if (indicator.value === true) return;
			indicator.value = true;
			if (toggleReason) toggleReason.value = event;
			if (isFunction(onShow)) onShow(event);
		};
		const doHide = (event) => {
			if (indicator.value === false) return;
			indicator.value = false;
			if (toggleReason) toggleReason.value = event;
			if (isFunction(onHide)) onHide(event);
		};
		const show = (event) => {
			if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed()) return;
			const shouldEmit = hasUpdateHandler.value && isClient;
			if (shouldEmit) emit(updateEventKey, true);
			if (isModelBindingAbsent.value || !shouldEmit) doShow(event);
		};
		const hide = (event) => {
			if (props.disabled === true || !isClient) return;
			const shouldEmit = hasUpdateHandler.value && isClient;
			if (shouldEmit) emit(updateEventKey, false);
			if (isModelBindingAbsent.value || !shouldEmit) doHide(event);
		};
		const onChange = (val) => {
			if (!isBoolean(val)) return;
			if (props.disabled && val) {
				if (hasUpdateHandler.value) emit(updateEventKey, false);
			} else if (indicator.value !== val) if (val) doShow();
			else doHide();
		};
		const toggle = () => {
			if (indicator.value) hide();
			else show();
		};
		watch(() => props[name], onChange);
		if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) watch(() => ({ ...instance.proxy.$route }), () => {
			if (shouldHideWhenRouteChanges.value && indicator.value) hide();
		});
		onMounted(() => {
			onChange(props[name]);
		});
		return {
			hide,
			show,
			toggle,
			hasUpdateHandler
		};
	};
	return {
		useModelToggle: useModelToggle2,
		useModelToggleProps: useModelToggleProps2,
		useModelToggleEmits: useModelToggleEmits2
	};
};
var { useModelToggle, useModelToggleProps, useModelToggleEmits } = createModelToggleComposable("modelValue"), W = "bottom", T = "right", P = "left", me = "auto", Q = [
	"top",
	W,
	T,
	P
], Y = "start", Ye = "clippingParents", je = "viewport", ee = "popper", Ge = "reference", De = Q.reduce(function(e, t) {
	return e.concat([t + "-" + Y, t + "-end"]);
}, []), Ee = [].concat(Q, [me]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + Y,
		t + "-end"
	]);
}, []), it = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
function V(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
function B(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
function G(e) {
	return e instanceof B(e).Element || e instanceof Element;
}
function R(e) {
	return e instanceof B(e).HTMLElement || e instanceof HTMLElement;
}
function Ae(e) {
	if (typeof ShadowRoot == "undefined") return !1;
	return e instanceof B(e).ShadowRoot || e instanceof ShadowRoot;
}
function Tt(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(n) {
		var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
		!R(a) || !V(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(c) {
			var s = o[c];
			s === !1 ? a.removeAttribute(c) : a.setAttribute(c, s === !0 ? "" : s);
		}));
	});
}
function Bt(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
		Object.keys(t.elements).forEach(function(r) {
			var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]).reduce(function(i, f) {
				return i[f] = "", i;
			}, {});
			!R(o) || !V(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(i) {
				o.removeAttribute(i);
			}));
		});
	};
}
var ke = {
	name: "applyStyles",
	enabled: !0,
	phase: "write",
	fn: Tt,
	effect: Bt,
	requires: ["computeStyles"]
};
function C(e) {
	return e.split("-")[0];
}
var J = Math.max, ve = Math.min, te = Math.round;
function Le() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
		return t.brand + "/" + t.version;
	}).join(" ") : navigator.userAgent;
}
function at() {
	return !/^((?!chrome|android).)*safari/i.test(Le());
}
function ne(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), o = 1, a = 1;
	t && R(e) && (o = e.offsetWidth > 0 && te(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && te(r.height) / e.offsetHeight || 1);
	var s = (G(e) ? B(e) : window).visualViewport, i = !at() && n, f = (r.left + (i && s ? s.offsetLeft : 0)) / o, u = (r.top + (i && s ? s.offsetTop : 0)) / a, m = r.width / o, h = r.height / a;
	return {
		width: m,
		height: h,
		top: u,
		right: f + m,
		bottom: u + h,
		left: f,
		x: f,
		y: u
	};
}
function Pe(e) {
	var t = ne(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
function st(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Ae(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
function I(e) {
	return B(e).getComputedStyle(e);
}
function Rt(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(V(e)) >= 0;
}
function N(e) {
	return ((G(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ye(e) {
	return V(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ae(e) ? e.host : null) || N(e);
}
function ft(e) {
	return !R(e) || I(e).position === "fixed" ? null : e.offsetParent;
}
function Ht(e) {
	var t = /firefox/i.test(Le());
	if (/Trident/i.test(Le()) && R(e)) {
		if (I(e).position === "fixed") return null;
	}
	var o = ye(e);
	for (Ae(o) && (o = o.host); R(o) && ["html", "body"].indexOf(V(o)) < 0;) {
		var a = I(o);
		if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
		o = o.parentNode;
	}
	return null;
}
function se(e) {
	for (var t = B(e), n = ft(e); n && Rt(n) && I(n).position === "static";) n = ft(n);
	return n && (V(n) === "html" || V(n) === "body" && I(n).position === "static") ? t : n || Ht(e) || t;
}
function Me(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fe(e, t, n) {
	return J(e, ve(t, n));
}
function St(e, t, n) {
	var r = fe(e, t, n);
	return r > n ? n : r;
}
function ct() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
function ut(e) {
	return Object.assign({}, ct(), e);
}
function pt(e, t) {
	return t.reduce(function(n, r) {
		return n[r] = e, n;
	}, {});
}
var Vt = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ut(typeof e != "number" ? e : pt(e, Q));
};
function Ct(e) {
	var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, c = n.modifiersData.popperOffsets, s = C(n.placement), i = Me(s), u = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !c)) {
		var m = Vt(o.padding, n), h = Pe(a), l = i === "y" ? "top" : P, g = i === "y" ? W : T, p = n.rects.reference[u] + n.rects.reference[i] - c[i] - n.rects.popper[u], y = c[i] - n.rects.reference[i], b = se(a), x = b ? i === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, O = p / 2 - y / 2, d = m[l], v = x - h[u] - m[g], w = x / 2 - h[u] / 2 + O, $ = fe(d, w, v), j = i;
		n.modifiersData[r] = (t = {}, t[j] = $, t.centerOffset = $ - w, t);
	}
}
function qt(e) {
	var t = e.state, r = e.options.element, o = r === void 0 ? "[data-popper-arrow]" : r;
	o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || st(t.elements.popper, o) && (t.elements.arrow = o));
}
var lt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Ct,
	effect: qt,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
function re(e) {
	return e.split("-")[1];
}
var It = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function Nt(e, t) {
	var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
	return {
		x: te(n * o) / o || 0,
		y: te(r * o) / o || 0
	};
}
function dt(e) {
	var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, c = e.offsets, s = e.position, i = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, m = e.isFixed, h = c.x, l = h === void 0 ? 0 : h, g = c.y, p = g === void 0 ? 0 : g, y = typeof u == "function" ? u({
		x: l,
		y: p
	}) : {
		x: l,
		y: p
	};
	l = y.x, p = y.y;
	var b = c.hasOwnProperty("x"), x = c.hasOwnProperty("y"), O = P, d = "top", v = window;
	if (f) {
		var w = se(n), $ = "clientHeight", j = "clientWidth";
		if (w === B(n) && (w = N(n), I(w).position !== "static" && s === "absolute" && ($ = "scrollHeight", j = "scrollWidth")), w = w, o === "top" || (o === "left" || o === "right") && a === "end") {
			d = W;
			var D = m && w === v && v.visualViewport ? v.visualViewport.height : w[$];
			p -= D - r.height, p *= i ? 1 : -1;
		}
		if (o === "left" || (o === "top" || o === "bottom") && a === "end") {
			O = T;
			var E = m && w === v && v.visualViewport ? v.visualViewport.width : w[j];
			l -= E - r.width, l *= i ? 1 : -1;
		}
	}
	var A = Object.assign({ position: s }, f && It), H = u === !0 ? Nt({
		x: l,
		y: p
	}, B(n)) : {
		x: l,
		y: p
	};
	if (l = H.x, p = H.y, i) {
		var k;
		return Object.assign({}, A, (k = {}, k[d] = x ? "0" : "", k[O] = b ? "0" : "", k.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + p + "px)" : "translate3d(" + l + "px, " + p + "px, 0)", k));
	}
	return Object.assign({}, A, (t = {}, t[d] = x ? p + "px" : "", t[O] = b ? l + "px" : "", t.transform = "", t));
}
function Ft(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, c = a === void 0 ? !0 : a, s = n.roundOffsets, i = s === void 0 ? !0 : s, f = {
		placement: C(t.placement),
		variation: re(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: o,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, dt(Object.assign({}, f, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: c,
		roundOffsets: i
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, dt(Object.assign({}, f, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: i
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var We = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Ft,
	data: {}
}, ge = { passive: !0 };
function Ut(e) {
	var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, c = r.resize, s = c === void 0 ? !0 : c, i = B(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && f.forEach(function(u) {
		u.addEventListener("scroll", n.update, ge);
	}), s && i.addEventListener("resize", n.update, ge), function() {
		a && f.forEach(function(u) {
			u.removeEventListener("scroll", n.update, ge);
		}), s && i.removeEventListener("resize", n.update, ge);
	};
}
var Te = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: Ut,
	data: {}
}, _t = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function be(e) {
	return e.replace(/left|right|bottom|top/g, function(t) {
		return _t[t];
	});
}
var zt = {
	start: "end",
	end: "start"
};
function ht(e) {
	return e.replace(/start|end/g, function(t) {
		return zt[t];
	});
}
function Be(e) {
	var t = B(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
function Re(e) {
	return ne(N(e)).left + Be(e).scrollLeft;
}
function Xt(e, t) {
	var n = B(e), r = N(e), o = n.visualViewport, a = r.clientWidth, c = r.clientHeight, s = 0, i = 0;
	if (o) {
		a = o.width, c = o.height;
		var f = at();
		(f || !f && t === "fixed") && (s = o.offsetLeft, i = o.offsetTop);
	}
	return {
		width: a,
		height: c,
		x: s + Re(e),
		y: i
	};
}
function Yt(e) {
	var t, n = N(e), r = Be(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = J(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), c = J(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Re(e), i = -r.scrollTop;
	return I(o || n).direction === "rtl" && (s += J(n.clientWidth, o ? o.clientWidth : 0) - a), {
		width: a,
		height: c,
		x: s,
		y: i
	};
}
function He(e) {
	var t = I(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function mt(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(V(e)) >= 0 ? e.ownerDocument.body : R(e) && He(e) ? e : mt(ye(e));
}
function ce(e, t) {
	var n;
	t === void 0 && (t = []);
	var r = mt(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = B(r), c = o ? [a].concat(a.visualViewport || [], He(r) ? r : []) : r, s = t.concat(c);
	return o ? s : s.concat(ce(ye(c)));
}
function Se(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
function Gt(e, t) {
	var n = ne(e, !1, t === "fixed");
	return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function vt(e, t, n) {
	return t === "viewport" ? Se(Xt(e, n)) : G(t) ? Gt(t, n) : Se(Yt(N(e)));
}
function Jt(e) {
	var t = ce(ye(e)), r = ["absolute", "fixed"].indexOf(I(e).position) >= 0 && R(e) ? se(e) : e;
	return G(r) ? t.filter(function(o) {
		return G(o) && st(o, r) && V(o) !== "body";
	}) : [];
}
function Kt(e, t, n, r) {
	var o = t === "clippingParents" ? Jt(e) : [].concat(t), a = [].concat(o, [n]), c = a[0], s = a.reduce(function(i, f) {
		var u = vt(e, f, r);
		return i.top = J(u.top, i.top), i.right = ve(u.right, i.right), i.bottom = ve(u.bottom, i.bottom), i.left = J(u.left, i.left), i;
	}, vt(e, c, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function yt(e) {
	var t = e.reference, n = e.element, r = e.placement, o = r ? C(r) : null, a = r ? re(r) : null, c = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, i;
	switch (o) {
		case "top":
			i = {
				x: c,
				y: t.y - n.height
			};
			break;
		case W:
			i = {
				x: c,
				y: t.y + t.height
			};
			break;
		case T:
			i = {
				x: t.x + t.width,
				y: s
			};
			break;
		case P:
			i = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: i = {
			x: t.x,
			y: t.y
		};
	}
	var f = o ? Me(o) : null;
	if (f != null) {
		var u = f === "y" ? "height" : "width";
		switch (a) {
			case Y:
				i[f] = i[f] - (t[u] / 2 - n[u] / 2);
				break;
			case "end":
				i[f] = i[f] + (t[u] / 2 - n[u] / 2);
				break;
		}
	}
	return i;
}
function oe(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, c = a === void 0 ? e.strategy : a, s = n.boundary, i = s === void 0 ? Ye : s, f = n.rootBoundary, u = f === void 0 ? je : f, m = n.elementContext, h = m === void 0 ? ee : m, l = n.altBoundary, g = l === void 0 ? !1 : l, p = n.padding, y = p === void 0 ? 0 : p, b = ut(typeof y != "number" ? y : pt(y, Q)), x = h === "popper" ? Ge : ee, O = e.rects.popper, d = e.elements[g ? x : h], v = Kt(G(d) ? d : d.contextElement || N(e.elements.popper), i, u, c), w = ne(e.elements.reference), $ = yt({
		reference: w,
		element: O,
		placement: o
	}), j = Se(Object.assign({}, O, $)), D = h === "popper" ? j : w, E = {
		top: v.top - D.top + b.top,
		bottom: D.bottom - v.bottom + b.bottom,
		left: v.left - D.left + b.left,
		right: D.right - v.right + b.right
	}, A = e.modifiersData.offset;
	if (h === "popper" && A) {
		var H = A[o];
		Object.keys(E).forEach(function(k) {
			var F = ["right", "bottom"].indexOf(k) >= 0 ? 1 : -1, U = ["top", "bottom"].indexOf(k) >= 0 ? "y" : "x";
			E[k] += H[U] * F;
		});
	}
	return E;
}
function Qt(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, c = n.padding, s = n.flipVariations, i = n.allowedAutoPlacements, f = i === void 0 ? Ee : i, u = re(r), m = u ? s ? De : De.filter(function(g) {
		return re(g) === u;
	}) : Q, h = m.filter(function(g) {
		return f.indexOf(g) >= 0;
	});
	h.length === 0 && (h = m);
	var l = h.reduce(function(g, p) {
		return g[p] = oe(e, {
			placement: p,
			boundary: o,
			rootBoundary: a,
			padding: c
		})[C(p)], g;
	}, {});
	return Object.keys(l).sort(function(g, p) {
		return l[g] - l[p];
	});
}
function Zt(e) {
	if (C(e) === "auto") return [];
	var t = be(e);
	return [
		ht(e),
		t,
		ht(t)
	];
}
function en(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var o = n.mainAxis, a = o === void 0 ? !0 : o, c = n.altAxis, s = c === void 0 ? !0 : c, i = n.fallbackPlacements, f = n.padding, u = n.boundary, m = n.rootBoundary, h = n.altBoundary, l = n.flipVariations, g = l === void 0 ? !0 : l, p = n.allowedAutoPlacements, y = t.options.placement, x = C(y) === y, O = i || (x || !g ? [be(y)] : Zt(y)), d = [y].concat(O).reduce(function(z, q) {
			return z.concat(C(q) === "auto" ? Qt(t, {
				placement: q,
				boundary: u,
				rootBoundary: m,
				padding: f,
				flipVariations: g,
				allowedAutoPlacements: p
			}) : q);
		}, []), v = t.rects.reference, w = t.rects.popper, $ = /* @__PURE__ */ new Map(), j = !0, D = d[0], E = 0; E < d.length; E++) {
			var A = d[E], H = C(A), k = re(A) === Y, F = ["top", W].indexOf(H) >= 0, U = F ? "width" : "height", M = oe(t, {
				placement: A,
				boundary: u,
				rootBoundary: m,
				altBoundary: h,
				padding: f
			}), S = F ? k ? T : P : k ? W : "top";
			v[U] > w[U] && (S = be(S));
			var ue = be(S), _ = [];
			if (a && _.push(M[H] <= 0), s && _.push(M[S] <= 0, M[ue] <= 0), _.every(function(z) {
				return z;
			})) {
				D = A, j = !1;
				break;
			}
			$.set(A, _);
		}
		if (j) {
			for (var pe = g ? 3 : 1, xe = function(z) {
				var q = d.find(function(de) {
					var ae = $.get(de);
					if (ae) return ae.slice(0, z).every(function(K) {
						return K;
					});
				});
				if (q) return D = q, "break";
			}, ie = pe; ie > 0; ie--) if (xe(ie) === "break") break;
		}
		t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
	}
}
var gt = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: en,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
function bt(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function wt(e) {
	return [
		"top",
		T,
		W,
		P
	].some(function(t) {
		return e[t] >= 0;
	});
}
function tn(e) {
	var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, c = oe(t, { elementContext: "reference" }), s = oe(t, { altBoundary: !0 }), i = bt(c, r), f = bt(s, o, a), u = wt(i), m = wt(f);
	t.modifiersData[n] = {
		referenceClippingOffsets: i,
		popperEscapeOffsets: f,
		isReferenceHidden: u,
		hasPopperEscaped: m
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": m
	});
}
var xt = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: tn
};
function nn(e, t, n) {
	var r = C(e), o = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, c = a[0], s = a[1];
	return c = c || 0, s = (s || 0) * o, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: c
	} : {
		x: c,
		y: s
	};
}
function rn(e) {
	var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, c = Ee.reduce(function(u, m) {
		return u[m] = nn(m, t.rects, a), u;
	}, {}), s = c[t.placement], i = s.x, f = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c;
}
var Ot = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: rn
};
function on(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = yt({
		reference: t.rects.reference,
		element: t.rects.popper,
		placement: t.placement
	});
}
var Ve = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: on,
	data: {}
};
function an(e) {
	return e === "x" ? "y" : "x";
}
function sn(e) {
	var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, c = n.altAxis, s = c === void 0 ? !1 : c, i = n.boundary, f = n.rootBoundary, u = n.altBoundary, m = n.padding, h = n.tether, l = h === void 0 ? !0 : h, g = n.tetherOffset, p = g === void 0 ? 0 : g, y = oe(t, {
		boundary: i,
		rootBoundary: f,
		padding: m,
		altBoundary: u
	}), b = C(t.placement), x = re(t.placement), O = !x, d = Me(b), v = an(d), w = t.modifiersData.popperOffsets, $ = t.rects.reference, j = t.rects.popper, D = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p, E = typeof D == "number" ? {
		mainAxis: D,
		altAxis: D
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, D), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, H = {
		x: 0,
		y: 0
	};
	if (w) {
		if (a) {
			var k, F = d === "y" ? "top" : P, U = d === "y" ? W : T, M = d === "y" ? "height" : "width", S = w[d], ue = S + y[F], _ = S - y[U], pe = l ? -j[M] / 2 : 0, xe = x === "start" ? $[M] : j[M], ie = x === "start" ? -j[M] : -$[M], le = t.elements.arrow, z = l && le ? Pe(le) : {
				width: 0,
				height: 0
			}, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ct(), de = q[F], ae = q[U], K = fe(0, $[M], z[M]), Et = O ? $[M] / 2 - pe - K - de - E.mainAxis : xe - K - de - E.mainAxis, At = O ? -$[M] / 2 + pe + K + ae + E.mainAxis : ie + K + ae + E.mainAxis, Oe = t.elements.arrow && se(t.elements.arrow), kt = Oe ? d === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Ce = (k = A == null ? void 0 : A[d]) != null ? k : 0, Lt = S + Et - Ce - kt, Pt = S + At - Ce, qe = fe(l ? ve(ue, Lt) : ue, S, l ? J(_, Pt) : _);
			w[d] = qe, H[d] = qe - S;
		}
		if (s) {
			var Ie, Mt = d === "x" ? "top" : P, Wt = d === "x" ? W : T, X = w[v], he = v === "y" ? "height" : "width", Ne = X + y[Mt], Fe = X - y[Wt], $e = ["top", P].indexOf(b) !== -1, Ue = (Ie = A == null ? void 0 : A[v]) != null ? Ie : 0, _e = $e ? Ne : X - $[he] - j[he] - Ue + E.altAxis, ze = $e ? X + $[he] + j[he] - Ue - E.altAxis : Fe, Xe = l && $e ? St(_e, X, ze) : fe(l ? _e : Ne, X, l ? ze : Fe);
			w[v] = Xe, H[v] = Xe - X;
		}
		t.modifiersData[r] = H;
	}
}
var $t = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: sn,
	requiresIfExists: ["offset"]
};
function fn(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
function cn(e) {
	return e === B(e) || !R(e) ? Be(e) : fn(e);
}
function un(e) {
	var t = e.getBoundingClientRect(), n = te(t.width) / e.offsetWidth || 1, r = te(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function pn(e, t, n) {
	n === void 0 && (n = !1);
	var r = R(t), o = R(t) && un(t), a = N(t), c = ne(e, o, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, i = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((V(t) !== "body" || He(a)) && (s = cn(t)), R(t) ? (i = ne(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : a && (i.x = Re(a))), {
		x: c.left + s.scrollLeft - i.x,
		y: c.top + s.scrollTop - i.y,
		width: c.width,
		height: c.height
	};
}
function ln(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(a) {
		t.set(a.name, a);
	});
	function o(a) {
		n.add(a.name);
		[].concat(a.requires || [], a.requiresIfExists || []).forEach(function(s) {
			if (!n.has(s)) {
				var i = t.get(s);
				i && o(i);
			}
		}), r.push(a);
	}
	return e.forEach(function(a) {
		n.has(a.name) || o(a);
	}), r;
}
function dn(e) {
	var t = ln(e);
	return it.reduce(function(n, r) {
		return n.concat(t.filter(function(o) {
			return o.phase === r;
		}));
	}, []);
}
function hn(e) {
	var t;
	return function() {
		return t || (t = new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		})), t;
	};
}
function mn(e) {
	var t = e.reduce(function(n, r) {
		var o = n[r.name];
		return n[r.name] = o ? Object.assign({}, o, r, {
			options: Object.assign({}, o.options, r.options),
			data: Object.assign({}, o.data, r.data)
		}) : r, n;
	}, {});
	return Object.keys(t).map(function(n) {
		return t[n];
	});
}
var jt = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function Dt() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	return !t.some(function(r) {
		return !(r && typeof r.getBoundingClientRect == "function");
	});
}
function we(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? jt : o;
	return function(c, s, i) {
		i === void 0 && (i = a);
		var f = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, jt, a),
			modifiersData: {},
			elements: {
				reference: c,
				popper: s
			},
			attributes: {},
			styles: {}
		}, u = [], m = !1, h = {
			state: f,
			setOptions: function(p) {
				var y = typeof p == "function" ? p(f.options) : p;
				g(), f.options = Object.assign({}, a, f.options, y), f.scrollParents = {
					reference: G(c) ? ce(c) : c.contextElement ? ce(c.contextElement) : [],
					popper: ce(s)
				};
				var b = dn(mn([].concat(r, f.options.modifiers)));
				return f.orderedModifiers = b.filter(function(x) {
					return x.enabled;
				}), l(), h.update();
			},
			forceUpdate: function() {
				if (!m) {
					var p = f.elements, y = p.reference, b = p.popper;
					if (Dt(y, b)) {
						f.rects = {
							reference: pn(y, se(b), f.options.strategy === "fixed"),
							popper: Pe(b)
						}, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(j) {
							return f.modifiersData[j.name] = Object.assign({}, j.data);
						});
						for (var x = 0; x < f.orderedModifiers.length; x++) {
							if (f.reset === !0) {
								f.reset = !1, x = -1;
								continue;
							}
							var O = f.orderedModifiers[x], d = O.fn, v = O.options, w = v === void 0 ? {} : v, $ = O.name;
							typeof d == "function" && (f = d({
								state: f,
								options: w,
								name: $,
								instance: h
							}) || f);
						}
					}
				}
			},
			update: hn(function() {
				return new Promise(function(p) {
					h.forceUpdate(), p(f);
				});
			}),
			destroy: function() {
				g(), m = !0;
			}
		};
		if (!Dt(c, s)) return h;
		h.setOptions(i).then(function(p) {
			!m && i.onFirstUpdate && i.onFirstUpdate(p);
		});
		function l() {
			f.orderedModifiers.forEach(function(p) {
				var y = p.name, b = p.options, x = b === void 0 ? {} : b, O = p.effect;
				if (typeof O == "function") {
					var d = O({
						state: f,
						name: y,
						instance: h,
						options: x
					}), v = function() {};
					u.push(d || v);
				}
			});
		}
		function g() {
			u.forEach(function(p) {
				return p();
			}), u = [];
		}
		return h;
	};
}
we();
we({ defaultModifiers: [
	Te,
	Ve,
	We,
	ke
] });
var wn = we({ defaultModifiers: [
	Te,
	Ve,
	We,
	ke,
	Ot,
	gt,
	$t,
	lt,
	xt
] });
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-popper/index.mjs
var usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
	const stateUpdater = {
		name: "updateState",
		enabled: true,
		phase: "write",
		fn: ({ state }) => {
			const derivedState = deriveState(state);
			Object.assign(states.value, derivedState);
		},
		requires: ["computeStyles"]
	};
	const options = computed(() => {
		const { onFirstUpdate, placement, strategy, modifiers } = unref(opts);
		return {
			onFirstUpdate,
			placement: placement || "bottom",
			strategy: strategy || "absolute",
			modifiers: [
				...modifiers || [],
				stateUpdater,
				{
					name: "applyStyles",
					enabled: false
				}
			]
		};
	});
	const instanceRef = shallowRef();
	const states = ref({
		styles: {
			popper: {
				position: unref(options).strategy,
				left: "0",
				top: "0"
			},
			arrow: { position: "absolute" }
		},
		attributes: {}
	});
	const destroy = () => {
		if (!instanceRef.value) return;
		instanceRef.value.destroy();
		instanceRef.value = void 0;
	};
	watch(options, (newOptions) => {
		const instance = unref(instanceRef);
		if (instance) instance.setOptions(newOptions);
	}, { deep: true });
	watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
		destroy();
		if (!referenceElement || !popperElement) return;
		instanceRef.value = wn(referenceElement, popperElement, unref(options));
	});
	onBeforeUnmount(() => {
		destroy();
	});
	return {
		state: computed(() => {
			var _a;
			return { ...((_a = unref(instanceRef)) == null ? void 0 : _a.state) || {} };
		}),
		styles: computed(() => unref(states).styles),
		attributes: computed(() => unref(states).attributes),
		update: () => {
			var _a;
			return (_a = unref(instanceRef)) == null ? void 0 : _a.update();
		},
		forceUpdate: () => {
			var _a;
			return (_a = unref(instanceRef)) == null ? void 0 : _a.forceUpdate();
		},
		instanceRef: computed(() => unref(instanceRef))
	};
};
function deriveState(state) {
	const elements = Object.keys(state.elements);
	return {
		styles: fromPairs(elements.map((element) => [element, state.styles[element] || {}])),
		attributes: fromPairs(elements.map((element) => [element, state.attributes[element]]))
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-timeout/index.mjs
function useTimeout() {
	let timeoutHandle;
	const registerTimeout = (fn, delay) => {
		cancelTimeout();
		timeoutHandle = window.setTimeout(fn, delay);
	};
	const cancelTimeout = () => window.clearTimeout(timeoutHandle);
	tryOnScopeDispose(() => cancelTimeout());
	return {
		registerTimeout,
		cancelTimeout
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-popper-container/index.mjs
var cachedContainer;
var usePopperContainerId = () => {
	const namespace = useGetDerivedNamespace();
	const idInjection = useIdInjection();
	const id = computed(() => {
		return `${namespace.value}-popper-container-${idInjection.prefix}`;
	});
	return {
		id,
		selector: computed(() => `#${id.value}`)
	};
};
var createContainer = (id) => {
	const container = document.createElement("div");
	container.id = id;
	document.body.appendChild(container);
	return container;
};
var usePopperContainer = () => {
	const { id, selector } = usePopperContainerId();
	onBeforeMount(() => {
		if (!isClient) return;
		if (!cachedContainer && !document.body.querySelector(selector.value)) cachedContainer = createContainer(id.value);
	});
	return {
		id,
		selector
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-delayed-toggle/index.mjs
var useDelayedToggleProps = buildProps({
	showAfter: {
		type: Number,
		default: 0
	},
	hideAfter: {
		type: Number,
		default: 200
	},
	autoClose: {
		type: Number,
		default: 0
	}
});
var useDelayedToggle = ({ showAfter, hideAfter, autoClose, open, close }) => {
	const { registerTimeout } = useTimeout();
	const { registerTimeout: registerTimeoutForAutoClose, cancelTimeout: cancelTimeoutForAutoClose } = useTimeout();
	const onOpen = (event) => {
		registerTimeout(() => {
			open(event);
			const _autoClose = unref(autoClose);
			if (isNumber(_autoClose) && _autoClose > 0) registerTimeoutForAutoClose(() => {
				close(event);
			}, _autoClose);
		}, unref(showAfter));
	};
	const onClose = (event) => {
		cancelTimeoutForAutoClose();
		registerTimeout(() => {
			close(event);
		}, unref(hideAfter));
	};
	return {
		onOpen,
		onClose
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-forward-ref/index.mjs
var FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
var useForwardRef = (forwardRef) => {
	const setForwardRef = (el) => {
		forwardRef.value = el;
	};
	provide(FORWARD_REF_INJECTION_KEY, { setForwardRef });
};
var useForwardRefDirective = (setForwardRef) => {
	return {
		mounted(el) {
			setForwardRef(el);
		},
		updated(el) {
			setForwardRef(el);
		},
		unmounted() {
			setForwardRef(null);
		}
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/constants.mjs
var POPPER_INJECTION_KEY = Symbol("popper");
var POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
var popperProps = buildProps({ role: {
	type: String,
	values: [
		"dialog",
		"grid",
		"group",
		"listbox",
		"menu",
		"navigation",
		"tooltip",
		"tree"
	],
	default: "tooltip"
} });
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/popper2.mjs
var Popper = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({
		name: "ElPopper",
		inheritAttrs: false
	}),
	props: popperProps,
	setup(__props, { expose }) {
		const props = __props;
		const popperProvides = {
			triggerRef: ref(),
			popperInstanceRef: ref(),
			contentRef: ref(),
			referenceRef: ref(),
			role: computed(() => props.role)
		};
		expose(popperProvides);
		provide(POPPER_INJECTION_KEY, popperProvides);
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/arrow.mjs
var popperArrowProps = buildProps({ arrowOffset: {
	type: Number,
	default: 5
} });
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/arrow2.mjs
var ElPopperArrow = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({
		name: "ElPopperArrow",
		inheritAttrs: false
	}),
	props: popperArrowProps,
	setup(__props, { expose }) {
		const props = __props;
		const ns = useNamespace("popper");
		const { arrowOffset, arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
		watch(() => props.arrowOffset, (val) => {
			arrowOffset.value = val;
		});
		onBeforeUnmount(() => {
			arrowRef.value = void 0;
		});
		expose({ arrowRef });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				ref_key: "arrowRef",
				ref: arrowRef,
				class: normalizeClass(unref(ns).e("arrow")),
				style: normalizeStyle(unref(arrowStyle)),
				"data-popper-arrow": ""
			}, null, 6);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/slot/src/only-child.mjs
init_shared_esm_bundler();
var NAME = "ElOnlyChild";
var OnlyChild = defineComponent({
	name: NAME,
	setup(_, { slots, attrs }) {
		var _a;
		const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
		const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : NOOP);
		return () => {
			var _a2;
			const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
			if (!defaultSlot) return null;
			if (defaultSlot.length > 1) {
				debugWarn(NAME, "requires exact only one valid child.");
				return null;
			}
			const firstLegitNode = findFirstLegitChild(defaultSlot);
			if (!firstLegitNode) {
				debugWarn(NAME, "no valid child node found");
				return null;
			}
			return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
		};
	}
});
function findFirstLegitChild(node) {
	if (!node) return null;
	const children = node;
	for (const child of children) {
		if (isObject(child)) switch (child.type) {
			case Comment: continue;
			case Text:
			case "svg": return wrapTextContent(child);
			case Fragment: return findFirstLegitChild(child.children);
			default: return child;
		}
		return wrapTextContent(child);
	}
	return null;
}
function wrapTextContent(s) {
	const ns = useNamespace("only-child");
	return createVNode("span", { "class": ns.e("content") }, [s]);
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/trigger.mjs
var popperTriggerProps = buildProps({
	virtualRef: { type: definePropType(Object) },
	virtualTriggering: Boolean,
	onMouseenter: { type: definePropType(Function) },
	onMouseleave: { type: definePropType(Function) },
	onClick: { type: definePropType(Function) },
	onKeydown: { type: definePropType(Function) },
	onFocus: { type: definePropType(Function) },
	onBlur: { type: definePropType(Function) },
	onContextmenu: { type: definePropType(Function) },
	id: String,
	open: Boolean
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/trigger2.mjs
var ElPopperTrigger = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({
		name: "ElPopperTrigger",
		inheritAttrs: false
	}),
	props: popperTriggerProps,
	setup(__props, { expose }) {
		const props = __props;
		const { role, triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
		useForwardRef(triggerRef);
		const ariaControls = computed(() => {
			return ariaHaspopup.value ? props.id : void 0;
		});
		const ariaDescribedby = computed(() => {
			if (role && role.value === "tooltip") return props.open && props.id ? props.id : void 0;
		});
		const ariaHaspopup = computed(() => {
			if (role && role.value !== "tooltip") return role.value;
		});
		const ariaExpanded = computed(() => {
			return ariaHaspopup.value ? `${props.open}` : void 0;
		});
		let virtualTriggerAriaStopWatch = void 0;
		onMounted(() => {
			watch(() => props.virtualRef, (virtualEl) => {
				if (virtualEl) triggerRef.value = unrefElement(virtualEl);
			}, { immediate: true });
			watch(triggerRef, (el, prevEl) => {
				virtualTriggerAriaStopWatch?.();
				virtualTriggerAriaStopWatch = void 0;
				if (isElement(el)) {
					[
						"onMouseenter",
						"onMouseleave",
						"onClick",
						"onKeydown",
						"onFocus",
						"onBlur",
						"onContextmenu"
					].forEach((eventName) => {
						var _a;
						const handler = props[eventName];
						if (handler) {
							el.addEventListener(eventName.slice(2).toLowerCase(), handler);
							(_a = prevEl == null ? void 0 : prevEl.removeEventListener) == null || _a.call(prevEl, eventName.slice(2).toLowerCase(), handler);
						}
					});
					virtualTriggerAriaStopWatch = watch([
						ariaControls,
						ariaDescribedby,
						ariaHaspopup,
						ariaExpanded
					], (watches) => {
						[
							"aria-controls",
							"aria-describedby",
							"aria-haspopup",
							"aria-expanded"
						].forEach((key, idx) => {
							isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
						});
					}, { immediate: true });
				}
				if (isElement(prevEl)) [
					"aria-controls",
					"aria-describedby",
					"aria-haspopup",
					"aria-expanded"
				].forEach((key) => prevEl.removeAttribute(key));
			}, { immediate: true });
		});
		onBeforeUnmount(() => {
			virtualTriggerAriaStopWatch?.();
			virtualTriggerAriaStopWatch = void 0;
		});
		expose({ triggerRef });
		return (_ctx, _cache) => {
			return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
				"aria-controls": unref(ariaControls),
				"aria-describedby": unref(ariaDescribedby),
				"aria-expanded": unref(ariaExpanded),
				"aria-haspopup": unref(ariaHaspopup)
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"aria-controls",
				"aria-describedby",
				"aria-expanded",
				"aria-haspopup"
			])) : createCommentVNode("v-if", true);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
var popperContentProps = buildProps({
	...buildProps({
		boundariesPadding: {
			type: Number,
			default: 0
		},
		fallbackPlacements: {
			type: definePropType(Array),
			default: void 0
		},
		gpuAcceleration: {
			type: Boolean,
			default: true
		},
		offset: {
			type: Number,
			default: 12
		},
		placement: {
			type: String,
			values: Ee,
			default: "bottom"
		},
		popperOptions: {
			type: definePropType(Object),
			default: () => ({})
		},
		strategy: {
			type: String,
			values: ["fixed", "absolute"],
			default: "absolute"
		}
	}),
	id: String,
	style: { type: definePropType([
		String,
		Array,
		Object
	]) },
	className: { type: definePropType([
		String,
		Array,
		Object
	]) },
	effect: {
		type: String,
		default: "dark"
	},
	visible: Boolean,
	enterable: {
		type: Boolean,
		default: true
	},
	pure: Boolean,
	focusOnShow: {
		type: Boolean,
		default: false
	},
	trapping: {
		type: Boolean,
		default: false
	},
	popperClass: { type: definePropType([
		String,
		Array,
		Object
	]) },
	popperStyle: { type: definePropType([
		String,
		Array,
		Object
	]) },
	referenceEl: { type: definePropType(Object) },
	triggerTargetEl: { type: definePropType(Object) },
	stopPopperMouseEvent: {
		type: Boolean,
		default: true
	},
	ariaLabel: {
		type: String,
		default: void 0
	},
	virtualTriggering: Boolean,
	zIndex: Number
});
var popperContentEmits = {
	mouseenter: (evt) => evt instanceof MouseEvent,
	mouseleave: (evt) => evt instanceof MouseEvent,
	focus: () => true,
	blur: () => true,
	close: () => true
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/utils.mjs
var buildPopperOptions = (props, modifiers = []) => {
	const { placement, strategy, popperOptions } = props;
	const options = {
		placement,
		strategy,
		...popperOptions,
		modifiers: [...genModifiers(props), ...modifiers]
	};
	deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
	return options;
};
var unwrapMeasurableEl = ($el) => {
	if (!isClient) return;
	return unrefElement($el);
};
function genModifiers(options) {
	const { offset, gpuAcceleration, fallbackPlacements } = options;
	return [
		{
			name: "offset",
			options: { offset: [0, offset != null ? offset : 12] }
		},
		{
			name: "preventOverflow",
			options: { padding: {
				top: 2,
				bottom: 2,
				left: 5,
				right: 5
			} }
		},
		{
			name: "flip",
			options: {
				padding: 5,
				fallbackPlacements
			}
		},
		{
			name: "computeStyles",
			options: { gpuAcceleration }
		}
	];
}
function deriveExtraModifiers(options, modifiers) {
	if (modifiers) options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/composables/use-content.mjs
var DEFAULT_ARROW_OFFSET = 0;
var usePopperContent = (props) => {
	const { popperInstanceRef, contentRef, triggerRef, role } = inject(POPPER_INJECTION_KEY, void 0);
	const arrowRef = ref();
	const arrowOffset = ref();
	const eventListenerModifier = computed(() => {
		return {
			name: "eventListeners",
			enabled: !!props.visible
		};
	});
	const arrowModifier = computed(() => {
		var _a;
		const arrowEl = unref(arrowRef);
		const offset = (_a = unref(arrowOffset)) != null ? _a : DEFAULT_ARROW_OFFSET;
		return {
			name: "arrow",
			enabled: !isUndefined(arrowEl),
			options: {
				element: arrowEl,
				padding: offset
			}
		};
	});
	const options = computed(() => {
		return {
			onFirstUpdate: () => {
				update();
			},
			...buildPopperOptions(props, [unref(arrowModifier), unref(eventListenerModifier)])
		};
	});
	const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef));
	const { attributes, state, styles, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
	watch(instanceRef, (instance) => popperInstanceRef.value = instance);
	onMounted(() => {
		watch(() => {
			var _a;
			return (_a = unref(computedReference)) == null ? void 0 : _a.getBoundingClientRect();
		}, () => {
			update();
		});
	});
	return {
		attributes,
		arrowRef,
		contentRef,
		instanceRef,
		state,
		styles,
		role,
		forceUpdate,
		update
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/composables/use-content-dom.mjs
var usePopperContentDOM = (props, { attributes, styles, role }) => {
	const { nextZIndex } = useZIndex();
	const ns = useNamespace("popper");
	const contentAttrs = computed(() => unref(attributes).popper);
	const contentZIndex = ref(isNumber(props.zIndex) ? props.zIndex : nextZIndex());
	const contentClass = computed(() => [
		ns.b(),
		ns.is("pure", props.pure),
		ns.is(props.effect),
		props.popperClass
	]);
	const contentStyle = computed(() => {
		return [
			{ zIndex: unref(contentZIndex) },
			unref(styles).popper,
			props.popperStyle || {}
		];
	});
	const ariaModal = computed(() => role.value === "dialog" ? "false" : void 0);
	const arrowStyle = computed(() => unref(styles).arrow || {});
	const updateZIndex = () => {
		contentZIndex.value = isNumber(props.zIndex) ? props.zIndex : nextZIndex();
	};
	return {
		ariaModal,
		arrowStyle,
		contentAttrs,
		contentClass,
		contentStyle,
		contentZIndex,
		updateZIndex
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/composables/use-focus-trap.mjs
var usePopperContentFocusTrap = (props, emit) => {
	const trapped = ref(false);
	const focusStartRef = ref();
	const onFocusAfterTrapped = () => {
		emit("focus");
	};
	const onFocusAfterReleased = (event) => {
		var _a;
		if (((_a = event.detail) == null ? void 0 : _a.focusReason) !== "pointer") {
			focusStartRef.value = "first";
			emit("blur");
		}
	};
	const onFocusInTrap = (event) => {
		if (props.visible && !trapped.value) {
			if (event.target) focusStartRef.value = event.target;
			trapped.value = true;
		}
	};
	const onFocusoutPrevented = (event) => {
		if (!props.trapping) {
			if (event.detail.focusReason === "pointer") event.preventDefault();
			trapped.value = false;
		}
	};
	const onReleaseRequested = () => {
		trapped.value = false;
		emit("close");
	};
	return {
		focusStartRef,
		trapped,
		onFocusAfterReleased,
		onFocusAfterTrapped,
		onFocusInTrap,
		onFocusoutPrevented,
		onReleaseRequested
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/src/content2.mjs
init_shared_esm_bundler();
var ElPopperContent = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElPopperContent" }),
	props: popperContentProps,
	emits: popperContentEmits,
	setup(__props, { expose, emit }) {
		const props = __props;
		const { focusStartRef, trapped, onFocusAfterReleased, onFocusAfterTrapped, onFocusInTrap, onFocusoutPrevented, onReleaseRequested } = usePopperContentFocusTrap(props, emit);
		const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } = usePopperContent(props);
		const { ariaModal, arrowStyle, contentAttrs, contentClass, contentStyle, updateZIndex } = usePopperContentDOM(props, {
			styles,
			attributes,
			role
		});
		const formItemContext = inject(formItemContextKey, void 0);
		provide(POPPER_CONTENT_INJECTION_KEY, {
			arrowStyle,
			arrowRef,
			arrowOffset: ref()
		});
		if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) provide(formItemContextKey, {
			...formItemContext,
			addInputId: NOOP,
			removeInputId: NOOP
		});
		let triggerTargetAriaStopWatch = void 0;
		const updatePopper = (shouldUpdateZIndex = true) => {
			update();
			shouldUpdateZIndex && updateZIndex();
		};
		const togglePopperAlive = () => {
			updatePopper(false);
			if (props.visible && props.focusOnShow) trapped.value = true;
			else if (props.visible === false) trapped.value = false;
		};
		onMounted(() => {
			watch(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
				triggerTargetAriaStopWatch?.();
				triggerTargetAriaStopWatch = void 0;
				const el = unref(triggerTargetEl || contentRef.value);
				const prevEl = unref(prevTriggerTargetEl || contentRef.value);
				if (isElement(el)) triggerTargetAriaStopWatch = watch([
					role,
					() => props.ariaLabel,
					ariaModal,
					() => props.id
				], (watches) => {
					[
						"role",
						"aria-label",
						"aria-modal",
						"id"
					].forEach((key, idx) => {
						isNil(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
					});
				}, { immediate: true });
				if (prevEl !== el && isElement(prevEl)) [
					"role",
					"aria-label",
					"aria-modal",
					"id"
				].forEach((key) => {
					prevEl.removeAttribute(key);
				});
			}, { immediate: true });
			watch(() => props.visible, togglePopperAlive, { immediate: true });
		});
		onBeforeUnmount(() => {
			triggerTargetAriaStopWatch?.();
			triggerTargetAriaStopWatch = void 0;
		});
		expose({
			popperContentRef: contentRef,
			popperInstanceRef: instanceRef,
			updatePopper,
			contentStyle
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({
				ref_key: "contentRef",
				ref: contentRef
			}, unref(contentAttrs), {
				style: unref(contentStyle),
				class: unref(contentClass),
				tabindex: "-1",
				onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
				onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
			}), [createVNode(unref(ElFocusTrap), {
				trapped: unref(trapped),
				"trap-on-focus-in": true,
				"focus-trap-el": unref(contentRef),
				"focus-start-el": unref(focusStartRef),
				onFocusAfterTrapped: unref(onFocusAfterTrapped),
				onFocusAfterReleased: unref(onFocusAfterReleased),
				onFocusin: unref(onFocusInTrap),
				onFocusoutPrevented: unref(onFocusoutPrevented),
				onReleaseRequested: unref(onReleaseRequested)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"trapped",
				"focus-trap-el",
				"focus-start-el",
				"onFocusAfterTrapped",
				"onFocusAfterReleased",
				"onFocusin",
				"onFocusoutPrevented",
				"onReleaseRequested"
			])], 16);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/popper/index.mjs
var ElPopper = withInstall(Popper);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tooltip/src/constants.mjs
var TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tooltip/src/content.mjs
var useTooltipContentProps = buildProps({
	...useDelayedToggleProps,
	...popperContentProps,
	appendTo: { type: definePropType([String, Object]) },
	content: {
		type: String,
		default: ""
	},
	rawContent: {
		type: Boolean,
		default: false
	},
	persistent: Boolean,
	ariaLabel: String,
	visible: {
		type: definePropType(Boolean),
		default: null
	},
	transition: String,
	teleported: {
		type: Boolean,
		default: true
	},
	disabled: Boolean
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tooltip/src/trigger.mjs
var useTooltipTriggerProps = buildProps({
	...popperTriggerProps,
	disabled: Boolean,
	trigger: {
		type: definePropType([String, Array]),
		default: "hover"
	},
	triggerKeys: {
		type: definePropType(Array),
		default: () => [EVENT_CODE.enter, EVENT_CODE.space]
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tooltip/src/tooltip.mjs
var { useModelToggleProps: useTooltipModelToggleProps, useModelToggleEmits: useTooltipModelToggleEmits, useModelToggle: useTooltipModelToggle } = createModelToggleComposable("visible");
var useTooltipProps = buildProps({
	...popperProps,
	...useTooltipModelToggleProps,
	...useTooltipContentProps,
	...useTooltipTriggerProps,
	...popperArrowProps,
	showArrow: {
		type: Boolean,
		default: true
	}
});
var tooltipEmits = [
	...useTooltipModelToggleEmits,
	"before-show",
	"before-hide",
	"show",
	"hide",
	"open",
	"close"
];
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tooltip/src/utils.mjs
init_shared_esm_bundler();
var isTriggerType = (trigger, type) => {
	if (isArray(trigger)) return trigger.includes(type);
	return trigger === type;
};
var whenTrigger = (trigger, type, handler) => {
	return (e) => {
		isTriggerType(unref(trigger), type) && handler(e);
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tooltip/src/trigger2.mjs
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElTooltipTrigger" }),
	props: useTooltipTriggerProps,
	setup(__props, { expose }) {
		const props = __props;
		const ns = useNamespace("tooltip");
		const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
		const triggerRef = ref(null);
		const stopWhenControlledOrDisabled = () => {
			if (unref(controlled) || props.disabled) return true;
		};
		const trigger = toRef(props, "trigger");
		const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
		const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
		const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
			if (e.button === 0) onToggle(e);
		}));
		const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
		const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
		const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
			e.preventDefault();
			onToggle(e);
		}));
		const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
			const { code } = e;
			if (props.triggerKeys.includes(code)) {
				e.preventDefault();
				onToggle(e);
			}
		});
		expose({ triggerRef });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElPopperTrigger), {
				id: unref(id),
				"virtual-ref": _ctx.virtualRef,
				open: unref(open),
				"virtual-triggering": _ctx.virtualTriggering,
				class: normalizeClass(unref(ns).e("trigger")),
				onBlur: unref(onBlur),
				onClick: unref(onClick),
				onContextmenu: unref(onContextMenu),
				onFocus: unref(onFocus),
				onMouseenter: unref(onMouseenter),
				onMouseleave: unref(onMouseleave),
				onKeydown: unref(onKeydown)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"id",
				"virtual-ref",
				"open",
				"virtual-triggering",
				"class",
				"onBlur",
				"onClick",
				"onContextmenu",
				"onFocus",
				"onMouseenter",
				"onMouseleave",
				"onKeydown"
			]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tooltip/src/content2.mjs
var ElTooltipContent = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({
		name: "ElTooltipContent",
		inheritAttrs: false
	}),
	props: useTooltipContentProps,
	setup(__props, { expose }) {
		const props = __props;
		const { selector } = usePopperContainerId();
		const ns = useNamespace("tooltip");
		const contentRef = ref(null);
		const destroyed = ref(false);
		const { controlled, id, open, trigger, onClose, onOpen, onShow, onHide, onBeforeShow, onBeforeHide } = inject(TOOLTIP_INJECTION_KEY, void 0);
		const transitionClass = computed(() => {
			return props.transition || `${ns.namespace.value}-fade-in-linear`;
		});
		const persistentRef = computed(() => {
			return props.persistent;
		});
		onBeforeUnmount(() => {
			destroyed.value = true;
		});
		const shouldRender = computed(() => {
			return unref(persistentRef) ? true : unref(open);
		});
		const shouldShow = computed(() => {
			return props.disabled ? false : unref(open);
		});
		const appendTo = computed(() => {
			return props.appendTo || selector.value;
		});
		const contentStyle = computed(() => {
			var _a;
			return (_a = props.style) != null ? _a : {};
		});
		const ariaHidden = computed(() => !unref(open));
		const onTransitionLeave = () => {
			onHide();
		};
		const stopWhenControlled = () => {
			if (unref(controlled)) return true;
		};
		const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
			if (props.enterable && unref(trigger) === "hover") onOpen();
		});
		const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
			if (unref(trigger) === "hover") onClose();
		});
		const onBeforeEnter = () => {
			var _a, _b;
			(_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null || _b.call(_a);
			onBeforeShow?.();
		};
		const onBeforeLeave = () => {
			onBeforeHide?.();
		};
		const onAfterShow = () => {
			onShow();
			stopHandle = onClickOutside(computed(() => {
				var _a;
				return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
			}), () => {
				if (unref(controlled)) return;
				if (unref(trigger) !== "hover") onClose();
			});
		};
		const onBlur = () => {
			if (!props.virtualTriggering) onClose();
		};
		let stopHandle;
		watch(() => unref(open), (val) => {
			if (!val) stopHandle?.();
		}, { flush: "post" });
		watch(() => props.content, () => {
			var _a, _b;
			(_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null || _b.call(_a);
		});
		expose({ contentRef });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Teleport, {
				disabled: !_ctx.teleported,
				to: unref(appendTo)
			}, [createVNode(Transition, {
				name: unref(transitionClass),
				onAfterLeave: onTransitionLeave,
				onBeforeEnter,
				onAfterEnter: onAfterShow,
				onBeforeLeave
			}, {
				default: withCtx(() => [unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
					key: 0,
					id: unref(id),
					ref_key: "contentRef",
					ref: contentRef
				}, _ctx.$attrs, {
					"aria-label": _ctx.ariaLabel,
					"aria-hidden": unref(ariaHidden),
					"boundaries-padding": _ctx.boundariesPadding,
					"fallback-placements": _ctx.fallbackPlacements,
					"gpu-acceleration": _ctx.gpuAcceleration,
					offset: _ctx.offset,
					placement: _ctx.placement,
					"popper-options": _ctx.popperOptions,
					strategy: _ctx.strategy,
					effect: _ctx.effect,
					enterable: _ctx.enterable,
					pure: _ctx.pure,
					"popper-class": _ctx.popperClass,
					"popper-style": [_ctx.popperStyle, unref(contentStyle)],
					"reference-el": _ctx.referenceEl,
					"trigger-target-el": _ctx.triggerTargetEl,
					visible: unref(shouldShow),
					"z-index": _ctx.zIndex,
					onMouseenter: unref(onContentEnter),
					onMouseleave: unref(onContentLeave),
					onBlur,
					onClose: unref(onClose)
				}), {
					default: withCtx(() => [!destroyed.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)]),
					_: 3
				}, 16, [
					"id",
					"aria-label",
					"aria-hidden",
					"boundaries-padding",
					"fallback-placements",
					"gpu-acceleration",
					"offset",
					"placement",
					"popper-options",
					"strategy",
					"effect",
					"enterable",
					"pure",
					"popper-class",
					"popper-style",
					"reference-el",
					"trigger-target-el",
					"visible",
					"z-index",
					"onMouseenter",
					"onMouseleave",
					"onClose"
				])), [[vShow, unref(shouldShow)]]) : createCommentVNode("v-if", true)]),
				_: 3
			}, 8, ["name"])], 8, ["disabled", "to"]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tooltip/src/tooltip2.mjs
var _hoisted_1 = ["innerHTML"];
var _hoisted_2 = { key: 1 };
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tooltip/index.mjs
var ElTooltip = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElTooltip" }),
	props: useTooltipProps,
	emits: tooltipEmits,
	setup(__props, { expose, emit }) {
		const props = __props;
		usePopperContainer();
		const id = useId();
		const popperRef = ref();
		const contentRef = ref();
		const updatePopper = () => {
			var _a;
			const popperComponent = unref(popperRef);
			if (popperComponent) (_a = popperComponent.popperInstanceRef) == null || _a.update();
		};
		const open = ref(false);
		const toggleReason = ref();
		const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
			indicator: open,
			toggleReason
		});
		const { onOpen, onClose } = useDelayedToggle({
			showAfter: toRef(props, "showAfter"),
			hideAfter: toRef(props, "hideAfter"),
			autoClose: toRef(props, "autoClose"),
			open: show,
			close: hide
		});
		provide(TOOLTIP_INJECTION_KEY, {
			controlled: computed(() => isBoolean(props.visible) && !hasUpdateHandler.value),
			id,
			open: readonly(open),
			trigger: toRef(props, "trigger"),
			onOpen: (event) => {
				onOpen(event);
			},
			onClose: (event) => {
				onClose(event);
			},
			onToggle: (event) => {
				if (unref(open)) onClose(event);
				else onOpen(event);
			},
			onShow: () => {
				emit("show", toggleReason.value);
			},
			onHide: () => {
				emit("hide", toggleReason.value);
			},
			onBeforeShow: () => {
				emit("before-show", toggleReason.value);
			},
			onBeforeHide: () => {
				emit("before-hide", toggleReason.value);
			},
			updatePopper
		});
		watch(() => props.disabled, (disabled) => {
			if (disabled && open.value) open.value = false;
		});
		const isFocusInsideContent = (event) => {
			var _a, _b;
			const popperContent = (_b = (_a = contentRef.value) == null ? void 0 : _a.contentRef) == null ? void 0 : _b.popperContentRef;
			const activeElement = (event == null ? void 0 : event.relatedTarget) || document.activeElement;
			return popperContent && popperContent.contains(activeElement);
		};
		onDeactivated(() => open.value && hide());
		expose({
			popperRef,
			contentRef,
			isFocusInsideContent,
			updatePopper,
			onOpen,
			onClose,
			hide
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElPopper), {
				ref_key: "popperRef",
				ref: popperRef,
				role: _ctx.role
			}, {
				default: withCtx(() => [createVNode(ElTooltipTrigger, {
					disabled: _ctx.disabled,
					trigger: _ctx.trigger,
					"trigger-keys": _ctx.triggerKeys,
					"virtual-ref": _ctx.virtualRef,
					"virtual-triggering": _ctx.virtualTriggering
				}, {
					default: withCtx(() => [_ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)]),
					_: 3
				}, 8, [
					"disabled",
					"trigger",
					"trigger-keys",
					"virtual-ref",
					"virtual-triggering"
				]), createVNode(ElTooltipContent, {
					ref_key: "contentRef",
					ref: contentRef,
					"aria-label": _ctx.ariaLabel,
					"boundaries-padding": _ctx.boundariesPadding,
					content: _ctx.content,
					disabled: _ctx.disabled,
					effect: _ctx.effect,
					enterable: _ctx.enterable,
					"fallback-placements": _ctx.fallbackPlacements,
					"hide-after": _ctx.hideAfter,
					"gpu-acceleration": _ctx.gpuAcceleration,
					offset: _ctx.offset,
					persistent: _ctx.persistent,
					"popper-class": _ctx.popperClass,
					"popper-style": _ctx.popperStyle,
					placement: _ctx.placement,
					"popper-options": _ctx.popperOptions,
					pure: _ctx.pure,
					"raw-content": _ctx.rawContent,
					"reference-el": _ctx.referenceEl,
					"trigger-target-el": _ctx.triggerTargetEl,
					"show-after": _ctx.showAfter,
					strategy: _ctx.strategy,
					teleported: _ctx.teleported,
					transition: _ctx.transition,
					"virtual-triggering": _ctx.virtualTriggering,
					"z-index": _ctx.zIndex,
					"append-to": _ctx.appendTo
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "content", {}, () => [_ctx.rawContent ? (openBlock(), createElementBlock("span", {
						key: 0,
						innerHTML: _ctx.content
					}, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.content), 1))]), _ctx.showArrow ? (openBlock(), createBlock(unref(ElPopperArrow), {
						key: 0,
						"arrow-offset": _ctx.arrowOffset
					}, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)]),
					_: 3
				}, 8, [
					"aria-label",
					"boundaries-padding",
					"content",
					"disabled",
					"effect",
					"enterable",
					"fallback-placements",
					"hide-after",
					"gpu-acceleration",
					"offset",
					"persistent",
					"popper-class",
					"popper-style",
					"placement",
					"popper-options",
					"pure",
					"raw-content",
					"reference-el",
					"trigger-target-el",
					"show-after",
					"strategy",
					"teleported",
					"transition",
					"virtual-triggering",
					"z-index",
					"append-to"
				])]),
				_: 3
			}, 8, ["role"]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]));
//#endregion
export { OnlyChild as a, wn as c, TOOLTIP_INJECTION_KEY as i, composeEventHandlers as l, useTooltipTriggerProps as n, useDelayedToggle as o, useTooltipContentProps as r, Ee as s, ElTooltip as t, whenMouse as u };
