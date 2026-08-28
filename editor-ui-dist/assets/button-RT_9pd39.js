import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, R as inject, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, _ as Fragment, b as Text, bt as withCtx, ft as useSlots, it as renderSlot, st as resolveDynamicComponent, tt as provide, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { a as buildProps, o as definePropType, r as useNamespace } from "./use-namespace-BOyjzxct.js";
import { S as loading_default, i as withNoopInstall, n as withInstall, t as _export_sfc } from "./plugin-vue_export-helper-BwbYAlq0.js";
import { i as useDeprecated, l as iconPropType, t as ElIcon } from "./icon-a_YnoStc.js";
import { r as useSizeProp } from "./use-size-DQ4TyUL1.js";
import { i as useFormSize, r as useFormDisabled, t as useFormItem } from "./use-form-item-BbslK5UJ.js";
import { n as useGlobalConfig } from "./use-global-config-H0dsywia.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/button/src/constants.mjs
var buttonGroupContextKey = Symbol("buttonGroupContextKey");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/button/src/use-button.mjs
var useButton = (props, emit) => {
	useDeprecated({
		from: "type.text",
		replacement: "link",
		version: "3.0.0",
		scope: "props",
		ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
	}, computed(() => props.type === "text"));
	const buttonGroupContext = inject(buttonGroupContextKey, void 0);
	const globalConfig = useGlobalConfig("button");
	const { form } = useFormItem();
	const _size = useFormSize(computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
	const _disabled = useFormDisabled();
	const _ref = ref();
	const slots = useSlots();
	const _type = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
	const autoInsertSpace = computed(() => {
		var _a, _b, _c;
		return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
	});
	const _props = computed(() => {
		if (props.tag === "button") return {
			ariaDisabled: _disabled.value || props.loading,
			disabled: _disabled.value || props.loading,
			autofocus: props.autofocus,
			type: props.nativeType
		};
		return {};
	});
	const shouldAddSpace = computed(() => {
		var _a;
		const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
		if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
			const slot = defaultSlot[0];
			if ((slot == null ? void 0 : slot.type) === Text) {
				const text = slot.children;
				return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
			}
		}
		return false;
	});
	const handleClick = (evt) => {
		if (props.nativeType === "reset") form?.resetFields();
		emit("click", evt);
	};
	return {
		_disabled,
		_size,
		_type,
		_ref,
		_props,
		shouldAddSpace,
		handleClick
	};
};
var buttonProps = buildProps({
	size: useSizeProp,
	disabled: Boolean,
	type: {
		type: String,
		values: [
			"default",
			"primary",
			"success",
			"warning",
			"info",
			"danger",
			"text",
			""
		],
		default: ""
	},
	icon: { type: iconPropType },
	nativeType: {
		type: String,
		values: [
			"button",
			"submit",
			"reset"
		],
		default: "button"
	},
	loading: Boolean,
	loadingIcon: {
		type: iconPropType,
		default: () => loading_default
	},
	plain: Boolean,
	text: Boolean,
	link: Boolean,
	bg: Boolean,
	autofocus: Boolean,
	round: Boolean,
	circle: Boolean,
	color: String,
	dark: Boolean,
	autoInsertSpace: {
		type: Boolean,
		default: void 0
	},
	tag: {
		type: definePropType([String, Object]),
		default: "button"
	}
});
var buttonEmits = { click: (evt) => evt instanceof MouseEvent };
//#endregion
//#region ../../../node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/util.js
/**
* Take input from [0, n] and return it as [0, 1]
* @hidden
*/
function bound01(n, max) {
	if (isOnePointZero(n)) n = "100%";
	var isPercent = isPercentage(n);
	n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
	if (isPercent) n = parseInt(String(n * max), 10) / 100;
	if (Math.abs(n - max) < 1e-6) return 1;
	if (max === 360) n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
	else n = n % max / parseFloat(String(max));
	return n;
}
/**
* Force a number between 0 and 1
* @hidden
*/
function clamp01(val) {
	return Math.min(1, Math.max(0, val));
}
/**
* Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
* <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
* @hidden
*/
function isOnePointZero(n) {
	return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
/**
* Check to see if string passed in is a percentage
* @hidden
*/
function isPercentage(n) {
	return typeof n === "string" && n.indexOf("%") !== -1;
}
/**
* Return a valid alpha value [0,1] with all invalid values being set to 1
* @hidden
*/
function boundAlpha(a) {
	a = parseFloat(a);
	if (isNaN(a) || a < 0 || a > 1) a = 1;
	return a;
}
/**
* Replace a decimal with it's percentage value
* @hidden
*/
function convertToPercentage(n) {
	if (n <= 1) return "".concat(Number(n) * 100, "%");
	return n;
}
/**
* Force a hex value to have 2 characters
* @hidden
*/
function pad2(c) {
	return c.length === 1 ? "0" + c : String(c);
}
//#endregion
//#region ../../../node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/conversion.js
/**
* Handle bounds / percentage checking to conform to CSS color spec
* <http://www.w3.org/TR/css3-color/>
* *Assumes:* r, g, b in [0, 255] or [0, 1]
* *Returns:* { r, g, b } in [0, 255]
*/
function rgbToRgb(r, g, b) {
	return {
		r: bound01(r, 255) * 255,
		g: bound01(g, 255) * 255,
		b: bound01(b, 255) * 255
	};
}
/**
* Converts an RGB color value to HSL.
* *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
* *Returns:* { h, s, l } in [0,1]
*/
function rgbToHsl(r, g, b) {
	r = bound01(r, 255);
	g = bound01(g, 255);
	b = bound01(b, 255);
	var max = Math.max(r, g, b);
	var min = Math.min(r, g, b);
	var h = 0;
	var s = 0;
	var l = (max + min) / 2;
	if (max === min) {
		s = 0;
		h = 0;
	} else {
		var d = max - min;
		s = l > .5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
			default: break;
		}
		h /= 6;
	}
	return {
		h,
		s,
		l
	};
}
function hue2rgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * (6 * t);
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
/**
* Converts an HSL color value to RGB.
*
* *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
* *Returns:* { r, g, b } in the set [0, 255]
*/
function hslToRgb(h, s, l) {
	var r;
	var g;
	var b;
	h = bound01(h, 360);
	s = bound01(s, 100);
	l = bound01(l, 100);
	if (s === 0) {
		g = l;
		b = l;
		r = l;
	} else {
		var q = l < .5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}
	return {
		r: r * 255,
		g: g * 255,
		b: b * 255
	};
}
/**
* Converts an RGB color value to HSV
*
* *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
* *Returns:* { h, s, v } in [0,1]
*/
function rgbToHsv(r, g, b) {
	r = bound01(r, 255);
	g = bound01(g, 255);
	b = bound01(b, 255);
	var max = Math.max(r, g, b);
	var min = Math.min(r, g, b);
	var h = 0;
	var v = max;
	var d = max - min;
	var s = max === 0 ? 0 : d / max;
	if (max === min) h = 0;
	else {
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
			default: break;
		}
		h /= 6;
	}
	return {
		h,
		s,
		v
	};
}
/**
* Converts an HSV color value to RGB.
*
* *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
* *Returns:* { r, g, b } in the set [0, 255]
*/
function hsvToRgb(h, s, v) {
	h = bound01(h, 360) * 6;
	s = bound01(s, 100);
	v = bound01(v, 100);
	var i = Math.floor(h);
	var f = h - i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);
	var mod = i % 6;
	var r = [
		v,
		q,
		p,
		p,
		t,
		v
	][mod];
	var g = [
		t,
		v,
		v,
		q,
		p,
		p
	][mod];
	var b = [
		p,
		p,
		t,
		v,
		v,
		q
	][mod];
	return {
		r: r * 255,
		g: g * 255,
		b: b * 255
	};
}
/**
* Converts an RGB color to hex
*
* Assumes r, g, and b are contained in the set [0, 255]
* Returns a 3 or 6 character hex
*/
function rgbToHex(r, g, b, allow3Char) {
	var hex = [
		pad2(Math.round(r).toString(16)),
		pad2(Math.round(g).toString(16)),
		pad2(Math.round(b).toString(16))
	];
	if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
	return hex.join("");
}
/**
* Converts an RGBA color plus alpha transparency to hex
*
* Assumes r, g, b are contained in the set [0, 255] and
* a in [0, 1]. Returns a 4 or 8 character rgba hex
*/
function rgbaToHex(r, g, b, a, allow4Char) {
	var hex = [
		pad2(Math.round(r).toString(16)),
		pad2(Math.round(g).toString(16)),
		pad2(Math.round(b).toString(16)),
		pad2(convertDecimalToHex(a))
	];
	if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
	return hex.join("");
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
	return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
	return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
	return parseInt(val, 16);
}
function numberInputToObject(color) {
	return {
		r: color >> 16,
		g: (color & 65280) >> 8,
		b: color & 255
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
/**
* @hidden
*/
var names = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkgrey: "#a9a9a9",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkslategrey: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	goldenrod: "#daa520",
	gold: "#ffd700",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	grey: "#808080",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	indianred: "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	lavenderblush: "#fff0f5",
	lavender: "#e6e6fa",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrodyellow: "#fafad2",
	lightgray: "#d3d3d3",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#db7093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	rebeccapurple: "#663399",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32"
};
//#endregion
//#region ../../../node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/format-input.js
/**
* Given a string or object, convert that input to RGB
*
* Possible string inputs:
* ```
* "red"
* "#f00" or "f00"
* "#ff0000" or "ff0000"
* "#ff000000" or "ff000000"
* "rgb 255 0 0" or "rgb (255, 0, 0)"
* "rgb 1.0 0 0" or "rgb (1, 0, 0)"
* "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
* "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
* "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
* "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
* "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
* ```
*/
function inputToRGB(color) {
	var rgb = {
		r: 0,
		g: 0,
		b: 0
	};
	var a = 1;
	var s = null;
	var v = null;
	var l = null;
	var ok = false;
	var format = false;
	if (typeof color === "string") color = stringInputToObject(color);
	if (typeof color === "object") {
		if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
			rgb = rgbToRgb(color.r, color.g, color.b);
			ok = true;
			format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
		} else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
			s = convertToPercentage(color.s);
			v = convertToPercentage(color.v);
			rgb = hsvToRgb(color.h, s, v);
			ok = true;
			format = "hsv";
		} else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
			s = convertToPercentage(color.s);
			l = convertToPercentage(color.l);
			rgb = hslToRgb(color.h, s, l);
			ok = true;
			format = "hsl";
		}
		if (Object.prototype.hasOwnProperty.call(color, "a")) a = color.a;
	}
	a = boundAlpha(a);
	return {
		ok,
		format: color.format || format,
		r: Math.min(255, Math.max(rgb.r, 0)),
		g: Math.min(255, Math.max(rgb.g, 0)),
		b: Math.min(255, Math.max(rgb.b, 0)),
		a
	};
}
var CSS_UNIT = "(?:".concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:").concat("[-\\+]?\\d+%?", ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
	CSS_UNIT: new RegExp(CSS_UNIT),
	rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
	rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
	hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
	hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
	hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
	hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
	hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
/**
* Permissive string parsing.  Take in a number of formats, and output an object
* based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
*/
function stringInputToObject(color) {
	color = color.trim().toLowerCase();
	if (color.length === 0) return false;
	var named = false;
	if (names[color]) {
		color = names[color];
		named = true;
	} else if (color === "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var match = matchers.rgb.exec(color);
	if (match) return {
		r: match[1],
		g: match[2],
		b: match[3]
	};
	match = matchers.rgba.exec(color);
	if (match) return {
		r: match[1],
		g: match[2],
		b: match[3],
		a: match[4]
	};
	match = matchers.hsl.exec(color);
	if (match) return {
		h: match[1],
		s: match[2],
		l: match[3]
	};
	match = matchers.hsla.exec(color);
	if (match) return {
		h: match[1],
		s: match[2],
		l: match[3],
		a: match[4]
	};
	match = matchers.hsv.exec(color);
	if (match) return {
		h: match[1],
		s: match[2],
		v: match[3]
	};
	match = matchers.hsva.exec(color);
	if (match) return {
		h: match[1],
		s: match[2],
		v: match[3],
		a: match[4]
	};
	match = matchers.hex8.exec(color);
	if (match) return {
		r: parseIntFromHex(match[1]),
		g: parseIntFromHex(match[2]),
		b: parseIntFromHex(match[3]),
		a: convertHexToDecimal(match[4]),
		format: named ? "name" : "hex8"
	};
	match = matchers.hex6.exec(color);
	if (match) return {
		r: parseIntFromHex(match[1]),
		g: parseIntFromHex(match[2]),
		b: parseIntFromHex(match[3]),
		format: named ? "name" : "hex"
	};
	match = matchers.hex4.exec(color);
	if (match) return {
		r: parseIntFromHex(match[1] + match[1]),
		g: parseIntFromHex(match[2] + match[2]),
		b: parseIntFromHex(match[3] + match[3]),
		a: convertHexToDecimal(match[4] + match[4]),
		format: named ? "name" : "hex8"
	};
	match = matchers.hex3.exec(color);
	if (match) return {
		r: parseIntFromHex(match[1] + match[1]),
		g: parseIntFromHex(match[2] + match[2]),
		b: parseIntFromHex(match[3] + match[3]),
		format: named ? "name" : "hex"
	};
	return false;
}
/**
* Check to see if it looks like a CSS unit
* (see `matchers` above for definition).
*/
function isValidCSSUnit(color) {
	return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
//#endregion
//#region ../../../node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/index.js
var TinyColor = function() {
	function TinyColor(color, opts) {
		if (color === void 0) color = "";
		if (opts === void 0) opts = {};
		var _a;
		if (color instanceof TinyColor) return color;
		if (typeof color === "number") color = numberInputToObject(color);
		this.originalInput = color;
		var rgb = inputToRGB(color);
		this.originalInput = color;
		this.r = rgb.r;
		this.g = rgb.g;
		this.b = rgb.b;
		this.a = rgb.a;
		this.roundA = Math.round(100 * this.a) / 100;
		this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
		this.gradientType = opts.gradientType;
		if (this.r < 1) this.r = Math.round(this.r);
		if (this.g < 1) this.g = Math.round(this.g);
		if (this.b < 1) this.b = Math.round(this.b);
		this.isValid = rgb.ok;
	}
	TinyColor.prototype.isDark = function() {
		return this.getBrightness() < 128;
	};
	TinyColor.prototype.isLight = function() {
		return !this.isDark();
	};
	/**
	* Returns the perceived brightness of the color, from 0-255.
	*/
	TinyColor.prototype.getBrightness = function() {
		var rgb = this.toRgb();
		return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
	};
	/**
	* Returns the perceived luminance of a color, from 0-1.
	*/
	TinyColor.prototype.getLuminance = function() {
		var rgb = this.toRgb();
		var R;
		var G;
		var B;
		var RsRGB = rgb.r / 255;
		var GsRGB = rgb.g / 255;
		var BsRGB = rgb.b / 255;
		if (RsRGB <= .03928) R = RsRGB / 12.92;
		else R = Math.pow((RsRGB + .055) / 1.055, 2.4);
		if (GsRGB <= .03928) G = GsRGB / 12.92;
		else G = Math.pow((GsRGB + .055) / 1.055, 2.4);
		if (BsRGB <= .03928) B = BsRGB / 12.92;
		else B = Math.pow((BsRGB + .055) / 1.055, 2.4);
		return .2126 * R + .7152 * G + .0722 * B;
	};
	/**
	* Returns the alpha value of a color, from 0-1.
	*/
	TinyColor.prototype.getAlpha = function() {
		return this.a;
	};
	/**
	* Sets the alpha value on the current color.
	*
	* @param alpha - The new alpha value. The accepted range is 0-1.
	*/
	TinyColor.prototype.setAlpha = function(alpha) {
		this.a = boundAlpha(alpha);
		this.roundA = Math.round(100 * this.a) / 100;
		return this;
	};
	/**
	* Returns whether the color is monochrome.
	*/
	TinyColor.prototype.isMonochrome = function() {
		return this.toHsl().s === 0;
	};
	/**
	* Returns the object as a HSVA object.
	*/
	TinyColor.prototype.toHsv = function() {
		var hsv = rgbToHsv(this.r, this.g, this.b);
		return {
			h: hsv.h * 360,
			s: hsv.s,
			v: hsv.v,
			a: this.a
		};
	};
	/**
	* Returns the hsva values interpolated into a string with the following format:
	* "hsva(xxx, xxx, xxx, xx)".
	*/
	TinyColor.prototype.toHsvString = function() {
		var hsv = rgbToHsv(this.r, this.g, this.b);
		var h = Math.round(hsv.h * 360);
		var s = Math.round(hsv.s * 100);
		var v = Math.round(hsv.v * 100);
		return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
	};
	/**
	* Returns the object as a HSLA object.
	*/
	TinyColor.prototype.toHsl = function() {
		var hsl = rgbToHsl(this.r, this.g, this.b);
		return {
			h: hsl.h * 360,
			s: hsl.s,
			l: hsl.l,
			a: this.a
		};
	};
	/**
	* Returns the hsla values interpolated into a string with the following format:
	* "hsla(xxx, xxx, xxx, xx)".
	*/
	TinyColor.prototype.toHslString = function() {
		var hsl = rgbToHsl(this.r, this.g, this.b);
		var h = Math.round(hsl.h * 360);
		var s = Math.round(hsl.s * 100);
		var l = Math.round(hsl.l * 100);
		return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
	};
	/**
	* Returns the hex value of the color.
	* @param allow3Char will shorten hex value to 3 char if possible
	*/
	TinyColor.prototype.toHex = function(allow3Char) {
		if (allow3Char === void 0) allow3Char = false;
		return rgbToHex(this.r, this.g, this.b, allow3Char);
	};
	/**
	* Returns the hex value of the color -with a # prefixed.
	* @param allow3Char will shorten hex value to 3 char if possible
	*/
	TinyColor.prototype.toHexString = function(allow3Char) {
		if (allow3Char === void 0) allow3Char = false;
		return "#" + this.toHex(allow3Char);
	};
	/**
	* Returns the hex 8 value of the color.
	* @param allow4Char will shorten hex value to 4 char if possible
	*/
	TinyColor.prototype.toHex8 = function(allow4Char) {
		if (allow4Char === void 0) allow4Char = false;
		return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
	};
	/**
	* Returns the hex 8 value of the color -with a # prefixed.
	* @param allow4Char will shorten hex value to 4 char if possible
	*/
	TinyColor.prototype.toHex8String = function(allow4Char) {
		if (allow4Char === void 0) allow4Char = false;
		return "#" + this.toHex8(allow4Char);
	};
	/**
	* Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
	* @param allowShortChar will shorten hex value to 3 or 4 char if possible
	*/
	TinyColor.prototype.toHexShortString = function(allowShortChar) {
		if (allowShortChar === void 0) allowShortChar = false;
		return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
	};
	/**
	* Returns the object as a RGBA object.
	*/
	TinyColor.prototype.toRgb = function() {
		return {
			r: Math.round(this.r),
			g: Math.round(this.g),
			b: Math.round(this.b),
			a: this.a
		};
	};
	/**
	* Returns the RGBA values interpolated into a string with the following format:
	* "RGBA(xxx, xxx, xxx, xx)".
	*/
	TinyColor.prototype.toRgbString = function() {
		var r = Math.round(this.r);
		var g = Math.round(this.g);
		var b = Math.round(this.b);
		return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
	};
	/**
	* Returns the object as a RGBA object.
	*/
	TinyColor.prototype.toPercentageRgb = function() {
		var fmt = function(x) {
			return "".concat(Math.round(bound01(x, 255) * 100), "%");
		};
		return {
			r: fmt(this.r),
			g: fmt(this.g),
			b: fmt(this.b),
			a: this.a
		};
	};
	/**
	* Returns the RGBA relative values interpolated into a string
	*/
	TinyColor.prototype.toPercentageRgbString = function() {
		var rnd = function(x) {
			return Math.round(bound01(x, 255) * 100);
		};
		return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
	};
	/**
	* The 'real' name of the color -if there is one.
	*/
	TinyColor.prototype.toName = function() {
		if (this.a === 0) return "transparent";
		if (this.a < 1) return false;
		var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
		for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
			var _b = _a[_i], key = _b[0];
			if (hex === _b[1]) return key;
		}
		return false;
	};
	TinyColor.prototype.toString = function(format) {
		var formatSet = Boolean(format);
		format = format !== null && format !== void 0 ? format : this.format;
		var formattedString = false;
		var hasAlpha = this.a < 1 && this.a >= 0;
		if (!formatSet && hasAlpha && (format.startsWith("hex") || format === "name")) {
			if (format === "name" && this.a === 0) return this.toName();
			return this.toRgbString();
		}
		if (format === "rgb") formattedString = this.toRgbString();
		if (format === "prgb") formattedString = this.toPercentageRgbString();
		if (format === "hex" || format === "hex6") formattedString = this.toHexString();
		if (format === "hex3") formattedString = this.toHexString(true);
		if (format === "hex4") formattedString = this.toHex8String(true);
		if (format === "hex8") formattedString = this.toHex8String();
		if (format === "name") formattedString = this.toName();
		if (format === "hsl") formattedString = this.toHslString();
		if (format === "hsv") formattedString = this.toHsvString();
		return formattedString || this.toHexString();
	};
	TinyColor.prototype.toNumber = function() {
		return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
	};
	TinyColor.prototype.clone = function() {
		return new TinyColor(this.toString());
	};
	/**
	* Lighten the color a given amount. Providing 100 will always return white.
	* @param amount - valid between 1-100
	*/
	TinyColor.prototype.lighten = function(amount) {
		if (amount === void 0) amount = 10;
		var hsl = this.toHsl();
		hsl.l += amount / 100;
		hsl.l = clamp01(hsl.l);
		return new TinyColor(hsl);
	};
	/**
	* Brighten the color a given amount, from 0 to 100.
	* @param amount - valid between 1-100
	*/
	TinyColor.prototype.brighten = function(amount) {
		if (amount === void 0) amount = 10;
		var rgb = this.toRgb();
		rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
		rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
		rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
		return new TinyColor(rgb);
	};
	/**
	* Darken the color a given amount, from 0 to 100.
	* Providing 100 will always return black.
	* @param amount - valid between 1-100
	*/
	TinyColor.prototype.darken = function(amount) {
		if (amount === void 0) amount = 10;
		var hsl = this.toHsl();
		hsl.l -= amount / 100;
		hsl.l = clamp01(hsl.l);
		return new TinyColor(hsl);
	};
	/**
	* Mix the color with pure white, from 0 to 100.
	* Providing 0 will do nothing, providing 100 will always return white.
	* @param amount - valid between 1-100
	*/
	TinyColor.prototype.tint = function(amount) {
		if (amount === void 0) amount = 10;
		return this.mix("white", amount);
	};
	/**
	* Mix the color with pure black, from 0 to 100.
	* Providing 0 will do nothing, providing 100 will always return black.
	* @param amount - valid between 1-100
	*/
	TinyColor.prototype.shade = function(amount) {
		if (amount === void 0) amount = 10;
		return this.mix("black", amount);
	};
	/**
	* Desaturate the color a given amount, from 0 to 100.
	* Providing 100 will is the same as calling greyscale
	* @param amount - valid between 1-100
	*/
	TinyColor.prototype.desaturate = function(amount) {
		if (amount === void 0) amount = 10;
		var hsl = this.toHsl();
		hsl.s -= amount / 100;
		hsl.s = clamp01(hsl.s);
		return new TinyColor(hsl);
	};
	/**
	* Saturate the color a given amount, from 0 to 100.
	* @param amount - valid between 1-100
	*/
	TinyColor.prototype.saturate = function(amount) {
		if (amount === void 0) amount = 10;
		var hsl = this.toHsl();
		hsl.s += amount / 100;
		hsl.s = clamp01(hsl.s);
		return new TinyColor(hsl);
	};
	/**
	* Completely desaturates a color into greyscale.
	* Same as calling `desaturate(100)`
	*/
	TinyColor.prototype.greyscale = function() {
		return this.desaturate(100);
	};
	/**
	* Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	* Values outside of this range will be wrapped into this range.
	*/
	TinyColor.prototype.spin = function(amount) {
		var hsl = this.toHsl();
		var hue = (hsl.h + amount) % 360;
		hsl.h = hue < 0 ? 360 + hue : hue;
		return new TinyColor(hsl);
	};
	/**
	* Mix the current color a given amount with another color, from 0 to 100.
	* 0 means no mixing (return current color).
	*/
	TinyColor.prototype.mix = function(color, amount) {
		if (amount === void 0) amount = 50;
		var rgb1 = this.toRgb();
		var rgb2 = new TinyColor(color).toRgb();
		var p = amount / 100;
		return new TinyColor({
			r: (rgb2.r - rgb1.r) * p + rgb1.r,
			g: (rgb2.g - rgb1.g) * p + rgb1.g,
			b: (rgb2.b - rgb1.b) * p + rgb1.b,
			a: (rgb2.a - rgb1.a) * p + rgb1.a
		});
	};
	TinyColor.prototype.analogous = function(results, slices) {
		if (results === void 0) results = 6;
		if (slices === void 0) slices = 30;
		var hsl = this.toHsl();
		var part = 360 / slices;
		var ret = [this];
		for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
			hsl.h = (hsl.h + part) % 360;
			ret.push(new TinyColor(hsl));
		}
		return ret;
	};
	/**
	* taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
	*/
	TinyColor.prototype.complement = function() {
		var hsl = this.toHsl();
		hsl.h = (hsl.h + 180) % 360;
		return new TinyColor(hsl);
	};
	TinyColor.prototype.monochromatic = function(results) {
		if (results === void 0) results = 6;
		var hsv = this.toHsv();
		var h = hsv.h;
		var s = hsv.s;
		var v = hsv.v;
		var res = [];
		var modification = 1 / results;
		while (results--) {
			res.push(new TinyColor({
				h,
				s,
				v
			}));
			v = (v + modification) % 1;
		}
		return res;
	};
	TinyColor.prototype.splitcomplement = function() {
		var hsl = this.toHsl();
		var h = hsl.h;
		return [
			this,
			new TinyColor({
				h: (h + 72) % 360,
				s: hsl.s,
				l: hsl.l
			}),
			new TinyColor({
				h: (h + 216) % 360,
				s: hsl.s,
				l: hsl.l
			})
		];
	};
	/**
	* Compute how the color would appear on a background
	*/
	TinyColor.prototype.onBackground = function(background) {
		var fg = this.toRgb();
		var bg = new TinyColor(background).toRgb();
		var alpha = fg.a + bg.a * (1 - fg.a);
		return new TinyColor({
			r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
			g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
			b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
			a: alpha
		});
	};
	/**
	* Alias for `polyad(3)`
	*/
	TinyColor.prototype.triad = function() {
		return this.polyad(3);
	};
	/**
	* Alias for `polyad(4)`
	*/
	TinyColor.prototype.tetrad = function() {
		return this.polyad(4);
	};
	/**
	* Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
	* monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
	*/
	TinyColor.prototype.polyad = function(n) {
		var hsl = this.toHsl();
		var h = hsl.h;
		var result = [this];
		var increment = 360 / n;
		for (var i = 1; i < n; i++) result.push(new TinyColor({
			h: (h + i * increment) % 360,
			s: hsl.s,
			l: hsl.l
		}));
		return result;
	};
	/**
	* compare color vs current color
	*/
	TinyColor.prototype.equals = function(color) {
		return this.toRgbString() === new TinyColor(color).toRgbString();
	};
	return TinyColor;
}();
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/button/src/button-custom.mjs
function darken(color, amount = 20) {
	return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
	const _disabled = useFormDisabled();
	const ns = useNamespace("button");
	return computed(() => {
		let styles = {};
		const buttonColor = props.color;
		if (buttonColor) {
			const color = new TinyColor(buttonColor);
			const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
			if (props.plain) {
				styles = ns.cssVarBlock({
					"bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
					"text-color": buttonColor,
					"border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
					"hover-text-color": `var(${ns.cssVarName("color-white")})`,
					"hover-bg-color": buttonColor,
					"hover-border-color": buttonColor,
					"active-bg-color": activeBgColor,
					"active-text-color": `var(${ns.cssVarName("color-white")})`,
					"active-border-color": activeBgColor
				});
				if (_disabled.value) {
					styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
					styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
					styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
				}
			} else {
				const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
				const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
				styles = ns.cssVarBlock({
					"bg-color": buttonColor,
					"text-color": textColor,
					"border-color": buttonColor,
					"hover-bg-color": hoverBgColor,
					"hover-text-color": textColor,
					"hover-border-color": hoverBgColor,
					"active-bg-color": activeBgColor,
					"active-border-color": activeBgColor
				});
				if (_disabled.value) {
					const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
					styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
					styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
					styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
				}
			}
		}
		return styles;
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/button/src/button2.mjs
var Button = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElButton" }),
	props: buttonProps,
	emits: buttonEmits,
	setup(__props, { expose, emit }) {
		const props = __props;
		const buttonStyle = useButtonCustomStyle(props);
		const ns = useNamespace("button");
		const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } = useButton(props, emit);
		expose({
			ref: _ref,
			size: _size,
			type: _type,
			disabled: _disabled,
			shouldAddSpace
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
				ref_key: "_ref",
				ref: _ref
			}, unref(_props), {
				class: [
					unref(ns).b(),
					unref(ns).m(unref(_type)),
					unref(ns).m(unref(_size)),
					unref(ns).is("disabled", unref(_disabled)),
					unref(ns).is("loading", _ctx.loading),
					unref(ns).is("plain", _ctx.plain),
					unref(ns).is("round", _ctx.round),
					unref(ns).is("circle", _ctx.circle),
					unref(ns).is("text", _ctx.text),
					unref(ns).is("link", _ctx.link),
					unref(ns).is("has-bg", _ctx.bg)
				],
				style: unref(buttonStyle),
				onClick: unref(handleClick)
			}), {
				default: withCtx(() => [_ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
					key: 1,
					class: normalizeClass(unref(ns).is("loading"))
				}, {
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.loadingIcon)))]),
					_: 1
				}, 8, ["class"]))], 64)) : _ctx.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
					default: withCtx(() => [_ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })]),
					_: 3
				})) : createCommentVNode("v-if", true), _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
					key: 2,
					class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
				}, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("v-if", true)]),
				_: 3
			}, 16, [
				"class",
				"style",
				"onClick"
			]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/button/src/button-group.mjs
var buttonGroupProps = {
	size: buttonProps.size,
	type: buttonProps.type
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/button/src/button-group2.mjs
var ButtonGroup = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElButtonGroup" }),
	props: buttonGroupProps,
	setup(__props) {
		const props = __props;
		provide(buttonGroupContextKey, reactive({
			size: toRef(props, "size"),
			type: toRef(props, "type")
		}));
		const ns = useNamespace("button");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(`${unref(ns).b("group")}`) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/button/index.mjs
var ElButton = withInstall(Button, { ButtonGroup });
withNoopInstall(ButtonGroup);
//#endregion
export { TinyColor as n, ElButton as t };
