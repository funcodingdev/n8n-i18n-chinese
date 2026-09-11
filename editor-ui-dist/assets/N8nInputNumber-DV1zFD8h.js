import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, bt as withCtx, c as useCssModule, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, lt as useAttrs, m as withKeys, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-a4QAfELR.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as Icon_default } from "./Icon-820OBjWt.js";
import { F as reactiveOmit, I as reactivePick, s as unrefElement } from "./dist-CYNfKCbA.js";
import { n as usePrimitiveElement, r as useFormControl } from "./Collection-CV7FjEVf.js";
import { n as snapValueToStep, t as clamp } from "./clamp-fc5a1laa.js";
import { d as useEventListener, g as createEventHook, j as createContext, m as useVModel, n as Primitive, u as unrefElement$1, x as reactiveComputed, y as isClient } from "./VisuallyHidden-lv4qVqRn.js";
import { n as getActiveElement } from "./useDirection-UW3tNAWY.js";
import { y as useForwardPropsEmits } from "./PopperContent-Bf5nvYvk.js";
import { t as isNullish } from "./nullish-DsACEi3N.js";
import { t as useLocale } from "./useLocale-NoxszNkz.js";
import { t as VisuallyHiddenInput_default } from "./VisuallyHiddenInput-BJy-siPx.js";
//#region ../../../node_modules/.pnpm/@internationalized+number@3.6.2/node_modules/@internationalized/number/dist/NumberFormatter.mjs
var $488c6ddbf4ef74c2$var$formatterCache = /* @__PURE__ */ new Map();
var $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
	$488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay === "exceptZero";
} catch {}
var $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
	$488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat("de-DE", {
		style: "unit",
		unit: "degree"
	}).resolvedOptions().style === "unit";
} catch {}
var $488c6ddbf4ef74c2$var$UNITS = { degree: { narrow: {
	default: "°",
	"ja-JP": " 度",
	"zh-TW": "度",
	"sl-SI": " °"
} } };
var $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 = class {
	/** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
		let res = "";
		if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
		else res = this.numberFormatter.format(value);
		if (this.options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
			var _UNITS_unit;
			let { unit, unitDisplay = "short", locale } = this.resolvedOptions();
			if (!unit) return res;
			let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
			res += values[locale] || values.default;
		}
		return res;
	}
	/** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
		return this.numberFormatter.formatToParts(value);
	}
	/** Formats a number range as a string. */ formatRange(start, end) {
		if (typeof this.numberFormatter.formatRange === "function") return this.numberFormatter.formatRange(start, end);
		if (end < start) throw new RangeError("End date must be >= start date");
		return `${this.format(start)} \u{2013} ${this.format(end)}`;
	}
	/** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
		if (typeof this.numberFormatter.formatRangeToParts === "function") return this.numberFormatter.formatRangeToParts(start, end);
		if (end < start) throw new RangeError("End date must be >= start date");
		let startParts = this.numberFormatter.formatToParts(start);
		let endParts = this.numberFormatter.formatToParts(end);
		return [
			...startParts.map((p) => ({
				...p,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...endParts.map((p) => ({
				...p,
				source: "endRange"
			}))
		];
	}
	/** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
		let options = this.numberFormatter.resolvedOptions();
		if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
			...options,
			signDisplay: this.options.signDisplay
		};
		if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === "unit") options = {
			...options,
			style: "unit",
			unit: this.options.unit,
			unitDisplay: this.options.unitDisplay
		};
		return options;
	}
	constructor(locale, options = {}) {
		this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
		this.options = options;
	}
};
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
	let { numberingSystem } = options;
	if (numberingSystem && locale.includes("-nu-")) {
		if (!locale.includes("-u-")) locale += "-u-";
		locale += `-nu-${numberingSystem}`;
	}
	if (options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
		var _UNITS_unit;
		let { unit, unitDisplay = "short" } = options;
		if (!unit) throw new Error("unit option must be provided with style: \"unit\"");
		if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
		options = {
			...options,
			style: "decimal"
		};
	}
	let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
	if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
	let numberFormatter = new Intl.NumberFormat(locale, options);
	$488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
	return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
	if (signDisplay === "auto") return numberFormat.format(num);
	else if (signDisplay === "never") return numberFormat.format(Math.abs(num));
	else {
		let needsPositiveSign = false;
		if (signDisplay === "always") needsPositiveSign = num > 0 || Object.is(num, 0);
		else if (signDisplay === "exceptZero") if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
		else needsPositiveSign = num > 0;
		if (needsPositiveSign) {
			let negative = numberFormat.format(-num);
			let noSign = numberFormat.format(num);
			let minus = negative.replace(noSign, "").replace(/\u200e|\u061C/, "");
			if ([...minus].length !== 1) console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case");
			return negative.replace(noSign, "!!!").replace(minus, "+").replace("!!!", noSign);
		} else return numberFormat.format(num);
	}
}
//#endregion
//#region ../../../node_modules/.pnpm/@internationalized+number@3.6.2/node_modules/@internationalized/number/dist/NumberParser.mjs
var $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX = /* @__PURE__ */ new RegExp("^.*\\(.*\\).*$");
var $6c7bd7858deea686$var$NUMBERING_SYSTEMS = [
	"latn",
	"arab",
	"hanidec",
	"deva",
	"beng"
];
var $6c7bd7858deea686$export$cd11ab140839f11d = class {
	/**
	* Parses the given string to a number. Returns NaN if a valid number could not be parsed.
	*/ parse(value) {
		return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
	}
	/**
	* Returns whether the given string could potentially be a valid number. This should be used to
	* validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
	* of the minus/plus sign characters can be checked.
	*/ isValidPartialNumber(value, minValue, maxValue) {
		return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
	}
	/**
	* Returns a numbering system for which the given string is valid in the current locale.
	* If no numbering system could be detected, the default numbering system for the current
	* locale is returned.
	*/ getNumberingSystem(value) {
		return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
	}
	constructor(locale, options = {}) {
		this.locale = locale;
		this.options = options;
	}
};
var $6c7bd7858deea686$var$numberParserCache = /* @__PURE__ */ new Map();
function $6c7bd7858deea686$var$getNumberParserImpl(locale, options, value) {
	let defaultParser = $6c7bd7858deea686$var$getCachedNumberParser(locale, options);
	if (!locale.includes("-nu-") && !defaultParser.isValidPartialNumber(value)) {
		for (let numberingSystem of $6c7bd7858deea686$var$NUMBERING_SYSTEMS) if (numberingSystem !== defaultParser.options.numberingSystem) {
			let parser = $6c7bd7858deea686$var$getCachedNumberParser(locale + (locale.includes("-u-") ? "-nu-" : "-u-nu-") + numberingSystem, options);
			if (parser.isValidPartialNumber(value)) return parser;
		}
	}
	return defaultParser;
}
function $6c7bd7858deea686$var$getCachedNumberParser(locale, options) {
	let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
	let parser = $6c7bd7858deea686$var$numberParserCache.get(cacheKey);
	if (!parser) {
		parser = new $6c7bd7858deea686$var$NumberParserImpl(locale, options);
		$6c7bd7858deea686$var$numberParserCache.set(cacheKey, parser);
	}
	return parser;
}
var $6c7bd7858deea686$var$NumberParserImpl = class {
	parse(value) {
		let fullySanitizedValue = this.sanitize(value);
		if (this.symbols.group) fullySanitizedValue = $6c7bd7858deea686$var$replaceAll(fullySanitizedValue, this.symbols.group, "");
		if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, ".");
		if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, "-");
		fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
		if (this.options.style === "percent") {
			let isNegative = fullySanitizedValue.indexOf("-");
			fullySanitizedValue = fullySanitizedValue.replace("-", "");
			let index = fullySanitizedValue.indexOf(".");
			if (index === -1) index = fullySanitizedValue.length;
			fullySanitizedValue = fullySanitizedValue.replace(".", "");
			if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
			else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
			else if (index - 2 === -2) fullySanitizedValue = "0.00";
			else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
			if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
		}
		let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
		if (isNaN(newValue)) return NaN;
		if (this.options.style === "percent") {
			var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
			let options = {
				...this.options,
				style: "decimal",
				minimumFractionDigits: Math.min(((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) + 2, 20),
				maximumFractionDigits: Math.min(((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) + 2, 20)
			};
			return new $6c7bd7858deea686$export$cd11ab140839f11d(this.locale, options).parse(new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(this.locale, options).format(newValue));
		}
		if (this.options.currencySign === "accounting" && $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
		return newValue;
	}
	sanitize(value) {
		value = value.replace(this.symbols.literals, "");
		if (this.symbols.minusSign) value = value.replace("-", this.symbols.minusSign);
		if (this.options.numberingSystem === "arab") {
			if (this.symbols.decimal) {
				value = value.replace(",", this.symbols.decimal);
				value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
			}
			if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, ".", this.symbols.group);
		}
		if (this.options.locale === "fr-FR" && this.symbols.group) {
			value = $6c7bd7858deea686$var$replaceAll(value, " ", this.symbols.group);
			value = $6c7bd7858deea686$var$replaceAll(value, /\u00A0/g, this.symbols.group);
		}
		return value;
	}
	isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
		value = this.sanitize(value);
		if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
		else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
		if (this.symbols.group && value.startsWith(this.symbols.group)) return false;
		if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
		if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, this.symbols.group, "");
		value = value.replace(this.symbols.numeral, "");
		if (this.symbols.decimal) value = value.replace(this.symbols.decimal, "");
		return value.length === 0;
	}
	constructor(locale, options = {}) {
		this.locale = locale;
		if (options.roundingIncrement !== 1 && options.roundingIncrement != null) {
			if (options.maximumFractionDigits == null && options.minimumFractionDigits == null) {
				options.maximumFractionDigits = 0;
				options.minimumFractionDigits = 0;
			} else if (options.maximumFractionDigits == null) options.maximumFractionDigits = options.minimumFractionDigits;
			else if (options.minimumFractionDigits == null) options.minimumFractionDigits = options.maximumFractionDigits;
		}
		this.formatter = new Intl.NumberFormat(locale, options);
		this.options = this.formatter.resolvedOptions();
		this.symbols = $6c7bd7858deea686$var$getSymbols(locale, this.formatter, this.options, options);
		var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
		if (this.options.style === "percent" && (((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) > 18 || ((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) > 18)) console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
	}
};
var $6c7bd7858deea686$var$nonLiteralParts = new Set([
	"decimal",
	"fraction",
	"integer",
	"minusSign",
	"plusSign",
	"group"
]);
var $6c7bd7858deea686$var$pluralNumbers = [
	0,
	4,
	2,
	1,
	11,
	20,
	3,
	7,
	100,
	21,
	.1,
	1.1
];
function $6c7bd7858deea686$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
	var _allParts_find, _posAllParts_find, _decimalParts_find, _allParts_find1;
	let symbolFormatter = new Intl.NumberFormat(locale, {
		...intlOptions,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: "auto",
		roundingMode: "halfExpand"
	});
	let allParts = symbolFormatter.formatToParts(-10000.111);
	let posAllParts = symbolFormatter.formatToParts(10000.111);
	let pluralParts = $6c7bd7858deea686$var$pluralNumbers.map((n) => symbolFormatter.formatToParts(n));
	var _allParts_find_value;
	let minusSign = (_allParts_find_value = (_allParts_find = allParts.find((p) => p.type === "minusSign")) === null || _allParts_find === void 0 ? void 0 : _allParts_find.value) !== null && _allParts_find_value !== void 0 ? _allParts_find_value : "-";
	let plusSign = (_posAllParts_find = posAllParts.find((p) => p.type === "plusSign")) === null || _posAllParts_find === void 0 ? void 0 : _posAllParts_find.value;
	if (!plusSign && ((originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === "exceptZero" || (originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === "always")) plusSign = "+";
	let decimal = (_decimalParts_find = new Intl.NumberFormat(locale, {
		...intlOptions,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((p) => p.type === "decimal")) === null || _decimalParts_find === void 0 ? void 0 : _decimalParts_find.value;
	let group = (_allParts_find1 = allParts.find((p) => p.type === "group")) === null || _allParts_find1 === void 0 ? void 0 : _allParts_find1.value;
	let allPartsLiterals = allParts.filter((p) => !$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p) => $6c7bd7858deea686$var$escapeRegex(p.value));
	let pluralPartsLiterals = pluralParts.flatMap((p) => p.filter((p) => !$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p) => $6c7bd7858deea686$var$escapeRegex(p.value)));
	let sortedLiterals = [...new Set([...allPartsLiterals, ...pluralPartsLiterals])].sort((a, b) => b.length - a.length);
	let literals = sortedLiterals.length === 0 ? /* @__PURE__ */ new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${sortedLiterals.join("|")}|[\\p{White_Space}]`, "gu");
	let numerals = [...new Intl.NumberFormat(intlOptions.locale, { useGrouping: false }).format(9876543210)].reverse();
	let indexes = new Map(numerals.map((d, i) => [d, i]));
	let numeral = new RegExp(`[${numerals.join("")}]`, "g");
	let index = (d) => String(indexes.get(d));
	return {
		minusSign,
		plusSign,
		decimal,
		group,
		literals,
		numeral,
		index
	};
}
function $6c7bd7858deea686$var$replaceAll(str, find, replace) {
	if (str.replaceAll) return str.replaceAll(find, replace);
	return str.split(find).join(replace);
}
function $6c7bd7858deea686$var$escapeRegex(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/NumberField/utils.js
function usePressedHold(options) {
	const { disabled } = options;
	const timeout = ref();
	const triggerHook = createEventHook();
	const resetTimeout = () => window.clearTimeout(timeout.value);
	const onIncrementPressStart = (delay) => {
		resetTimeout();
		if (disabled.value) return;
		triggerHook.trigger();
		timeout.value = window.setTimeout(() => {
			onIncrementPressStart(60);
		}, delay);
	};
	const handlePressStart = () => {
		onIncrementPressStart(400);
	};
	const handlePressEnd = () => {
		resetTimeout();
	};
	const isPressed = ref(false);
	const target = computed(() => unrefElement$1(options.target));
	const onPressStart = (event) => {
		if (event.button !== 0 || isPressed.value) return;
		event.preventDefault();
		isPressed.value = true;
		handlePressStart();
	};
	const onPressRelease = () => {
		isPressed.value = false;
		handlePressEnd();
	};
	if (isClient) {
		useEventListener(target || window, "pointerdown", onPressStart);
		useEventListener(window, "pointerup", onPressRelease);
		useEventListener(window, "pointercancel", onPressRelease);
	}
	return {
		isPressed,
		onTrigger: triggerHook.on
	};
}
function useNumberFormatter(locale, options = ref({})) {
	return reactiveComputed(() => new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(locale.value, options.value));
}
function useNumberParser(locale, options = ref({})) {
	return reactiveComputed(() => new $6c7bd7858deea686$export$cd11ab140839f11d(locale.value, options.value));
}
function handleDecimalOperation(operator, value1, value2) {
	let result = operator === "+" ? value1 + value2 : value1 - value2;
	if (value1 % 1 !== 0 || value2 % 1 !== 0) {
		const value1Decimal = value1.toString().split(".");
		const value2Decimal = value2.toString().split(".");
		const value1DecimalLength = value1Decimal[1] && value1Decimal[1].length || 0;
		const value2DecimalLength = value2Decimal[1] && value2Decimal[1].length || 0;
		const multiplier = 10 ** Math.max(value1DecimalLength, value2DecimalLength);
		value1 = Math.round(value1 * multiplier);
		value2 = Math.round(value2 * multiplier);
		result = operator === "+" ? value1 + value2 : value1 - value2;
		result /= multiplier;
	}
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/NumberField/NumberFieldRoot.js
var [injectNumberFieldRootContext, provideNumberFieldRootContext] = createContext("NumberFieldRoot");
var NumberFieldRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "NumberFieldRoot",
	props: {
		defaultValue: {
			type: Number,
			required: false,
			default: void 0
		},
		modelValue: {
			type: [Number, null],
			required: false
		},
		min: {
			type: Number,
			required: false
		},
		max: {
			type: Number,
			required: false
		},
		step: {
			type: Number,
			required: false,
			default: 1
		},
		stepSnapping: {
			type: Boolean,
			required: false,
			default: true
		},
		formatOptions: {
			type: null,
			required: false
		},
		locale: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		readonly: {
			type: Boolean,
			required: false
		},
		disableWheelChange: {
			type: Boolean,
			required: false
		},
		invertWheelChange: {
			type: Boolean,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { disabled, readonly, disableWheelChange, invertWheelChange, min, max, step, stepSnapping, formatOptions, id, locale: propLocale } = toRefs(props);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue,
			passive: props.modelValue === void 0
		});
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const locale = useLocale(propLocale);
		const isFormControl = useFormControl(currentElement);
		const inputEl = ref();
		const isDecreaseDisabled = computed(() => !isNullish(modelValue.value) && (clampInputValue(modelValue.value) === min.value || min.value && !isNaN(modelValue.value) ? handleDecimalOperation("-", modelValue.value, step.value) < min.value : false));
		const isIncreaseDisabled = computed(() => !isNullish(modelValue.value) && (clampInputValue(modelValue.value) === max.value || max.value && !isNaN(modelValue.value) ? handleDecimalOperation("+", modelValue.value, step.value) > max.value : false));
		function handleChangingValue(type, multiplier = 1) {
			inputEl.value?.focus();
			if (props.disabled || props.readonly) return;
			const currentInputValue = numberParser.parse(inputEl.value?.value ?? "");
			if (isNaN(currentInputValue)) modelValue.value = min.value ?? 0;
			else if (type === "increase") modelValue.value = clampInputValue(currentInputValue + (step.value ?? 1) * multiplier);
			else modelValue.value = clampInputValue(currentInputValue - (step.value ?? 1) * multiplier);
		}
		function handleIncrease(multiplier = 1) {
			handleChangingValue("increase", multiplier);
		}
		function handleDecrease(multiplier = 1) {
			handleChangingValue("decrease", multiplier);
		}
		function handleMinMaxValue(type) {
			if (type === "min" && min.value !== void 0) modelValue.value = clampInputValue(min.value);
			else if (type === "max" && max.value !== void 0) modelValue.value = clampInputValue(max.value);
		}
		const numberFormatter = useNumberFormatter(locale, formatOptions);
		const numberParser = useNumberParser(locale, formatOptions);
		const inputMode = computed(() => {
			return numberFormatter.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric";
		});
		const textValueFormatter = useNumberFormatter(locale, formatOptions);
		const textValue = computed(() => isNullish(modelValue.value) || isNaN(modelValue.value) ? "" : textValueFormatter.format(modelValue.value));
		function validate(val) {
			return numberParser.isValidPartialNumber(val, min.value, max.value);
		}
		function setInputValue(val) {
			if (inputEl.value) inputEl.value.value = val;
		}
		function clampInputValue(val) {
			let clampedValue;
			if (step.value === void 0 || isNaN(step.value) || !stepSnapping.value) clampedValue = clamp(val, min.value, max.value);
			else clampedValue = snapValueToStep(val, min.value, max.value, step.value);
			clampedValue = numberParser.parse(numberFormatter.format(clampedValue));
			return clampedValue;
		}
		function applyInputValue(val) {
			const parsedValue = numberParser.parse(val);
			modelValue.value = isNaN(parsedValue) ? void 0 : clampInputValue(parsedValue);
			if (!val.length) return setInputValue(val);
			if (isNaN(parsedValue)) return setInputValue(textValue.value);
			return setInputValue(textValue.value);
		}
		provideNumberFieldRootContext({
			modelValue,
			handleDecrease,
			handleIncrease,
			handleMinMaxValue,
			inputMode,
			inputEl,
			onInputElement: (el) => inputEl.value = el,
			textValue,
			validate,
			applyInputValue,
			disabled,
			readonly,
			disableWheelChange,
			invertWheelChange,
			max,
			min,
			isDecreaseDisabled,
			isIncreaseDisabled,
			id
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(_ctx.$attrs, {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				role: "group",
				as: _ctx.as,
				"as-child": _ctx.asChild,
				"data-disabled": unref(disabled) ? "" : void 0,
				"data-readonly": unref(readonly) ? "" : void 0
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					textValue: textValue.value
				}), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
					key: 0,
					type: "text",
					value: unref(modelValue),
					name: _ctx.name,
					disabled: unref(disabled),
					readonly: unref(readonly),
					required: _ctx.required
				}, null, 8, [
					"value",
					"name",
					"disabled",
					"readonly",
					"required"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"data-disabled",
				"data-readonly"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/NumberField/NumberFieldDecrement.js
var NumberFieldDecrement_default = /* @__PURE__ */ defineComponent({
	__name: "NumberFieldDecrement",
	props: {
		disabled: {
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
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectNumberFieldRootContext();
		const isDisabled = computed(() => rootContext.disabled?.value || rootContext.readonly.value || props.disabled || rootContext.isDecreaseDisabled.value);
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const { isPressed, onTrigger } = usePressedHold({
			target: currentElement,
			disabled: isDisabled
		});
		onTrigger(() => {
			rootContext.handleDecrease();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				tabindex: "-1",
				"aria-label": "Decrease",
				type: _ctx.as === "button" ? "button" : void 0,
				style: { userSelect: unref(isPressed) ? "none" : void 0 },
				disabled: isDisabled.value ? "" : void 0,
				"data-disabled": isDisabled.value ? "" : void 0,
				"data-pressed": unref(isPressed) ? "true" : void 0,
				onContextmenu: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"]))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"type",
				"style",
				"disabled",
				"data-disabled",
				"data-pressed"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/NumberField/NumberFieldIncrement.js
var NumberFieldIncrement_default = /* @__PURE__ */ defineComponent({
	__name: "NumberFieldIncrement",
	props: {
		disabled: {
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
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectNumberFieldRootContext();
		const isDisabled = computed(() => rootContext.disabled?.value || rootContext.readonly.value || props.disabled || rootContext.isIncreaseDisabled.value);
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const { isPressed, onTrigger } = usePressedHold({
			target: currentElement,
			disabled: isDisabled
		});
		onTrigger(() => {
			rootContext.handleIncrease();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				tabindex: "-1",
				"aria-label": "Increase",
				type: _ctx.as === "button" ? "button" : void 0,
				style: { userSelect: unref(isPressed) ? "none" : void 0 },
				disabled: isDisabled.value ? "" : void 0,
				"data-disabled": isDisabled.value ? "" : void 0,
				"data-pressed": unref(isPressed) ? "true" : void 0,
				onContextmenu: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"]))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"type",
				"style",
				"disabled",
				"data-disabled",
				"data-pressed"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/NumberField/NumberFieldInput.js
var NumberFieldInput_default = /* @__PURE__ */ defineComponent({
	__name: "NumberFieldInput",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "input"
		}
	},
	setup(__props) {
		const props = __props;
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const rootContext = injectNumberFieldRootContext();
		function handleWheelEvent(event) {
			if (rootContext.disableWheelChange.value) return;
			if (event.target !== getActiveElement()) return;
			if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
			event.preventDefault();
			if (event.deltaY > 0) rootContext.invertWheelChange.value ? rootContext.handleDecrease() : rootContext.handleIncrease();
			else if (event.deltaY < 0) rootContext.invertWheelChange.value ? rootContext.handleIncrease() : rootContext.handleDecrease();
		}
		onMounted(() => {
			rootContext.onInputElement(currentElement.value);
		});
		const inputValue = ref(rootContext.textValue.value);
		watch(() => rootContext.textValue.value, () => {
			inputValue.value = rootContext.textValue.value;
		}, {
			immediate: true,
			deep: true
		});
		function handleChange() {
			requestAnimationFrame(() => {
				inputValue.value = rootContext.textValue.value;
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				id: unref(rootContext).id.value,
				ref_key: "primitiveElement",
				ref: primitiveElement,
				value: inputValue.value,
				role: "spinbutton",
				type: "text",
				tabindex: "0",
				inputmode: unref(rootContext).inputMode.value,
				disabled: unref(rootContext).disabled.value ? "" : void 0,
				"data-disabled": unref(rootContext).disabled.value ? "" : void 0,
				readonly: unref(rootContext).readonly.value ? "" : void 0,
				"data-readonly": unref(rootContext).readonly.value ? "" : void 0,
				autocomplete: "off",
				autocorrect: "off",
				spellcheck: "false",
				"aria-roledescription": "Number field",
				"aria-valuenow": unref(rootContext).modelValue.value,
				"aria-valuemin": unref(rootContext).min.value,
				"aria-valuemax": unref(rootContext).max.value,
				onKeydown: [
					_cache[0] || (_cache[0] = withKeys(withModifiers(($event) => unref(rootContext).handleIncrease(), ["prevent"]), ["up"])),
					_cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(rootContext).handleDecrease(), ["prevent"]), ["down"])),
					_cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(rootContext).handleIncrease(10), ["prevent"]), ["page-up"])),
					_cache[3] || (_cache[3] = withKeys(withModifiers(($event) => unref(rootContext).handleDecrease(10), ["prevent"]), ["page-down"])),
					_cache[4] || (_cache[4] = withKeys(withModifiers(($event) => unref(rootContext).handleMinMaxValue("min"), ["prevent"]), ["home"])),
					_cache[5] || (_cache[5] = withKeys(withModifiers(($event) => unref(rootContext).handleMinMaxValue("max"), ["prevent"]), ["end"])),
					_cache[8] || (_cache[8] = withKeys(($event) => unref(rootContext).applyInputValue($event.target?.value), ["enter"]))
				],
				onWheel: handleWheelEvent,
				onBeforeinput: _cache[6] || (_cache[6] = (event) => {
					const target = event.target;
					let nextValue = target.value.slice(0, target.selectionStart ?? void 0) + (event.data ?? "") + target.value.slice(target.selectionEnd ?? void 0);
					if (!unref(rootContext).validate(nextValue)) event.preventDefault();
				}),
				onInput: _cache[7] || (_cache[7] = (event) => {
					inputValue.value = event.target.value;
				}),
				onChange: handleChange,
				onBlur: _cache[9] || (_cache[9] = ($event) => unref(rootContext).applyInputValue($event.target?.value))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"value",
				"inputmode",
				"disabled",
				"data-disabled",
				"readonly",
				"data-readonly",
				"aria-valuenow",
				"aria-valuemin",
				"aria-valuemax"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nInputNumber/InputNumber.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-label"];
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = ["aria-label"];
var _hoisted_4 = ["aria-label"];
var InputNumber_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nInputNumber",
	inheritAttrs: false,
	__name: "InputNumber",
	props: {
		defaultValue: {},
		modelValue: {},
		min: {},
		max: {},
		step: { default: 1 },
		stepSnapping: {
			type: Boolean,
			default: false
		},
		locale: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		disableWheelChange: { type: Boolean },
		invertWheelChange: { type: Boolean },
		id: {},
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		size: { default: "medium" },
		precision: {},
		controls: {
			type: Boolean,
			default: true
		},
		controlsPosition: { default: "right" },
		placeholder: {}
	},
	emits: [
		"update:modelValue",
		"focus",
		"blur"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const attrs = useAttrs();
		const rootClass = computed(() => attrs.class);
		const rootAttrs = computed(() => reactiveOmit(attrs, ["class"]));
		const $style = useCssModule();
		const { t } = useI18n();
		const props = __props;
		const isControlsRight = computed(() => props.controls && props.controlsPosition === "right");
		const isControlsBoth = computed(() => props.controls && props.controlsPosition === "both");
		const emit = __emit;
		const inputRef = useTemplateRef("inputRef");
		function getInput() {
			const el = unrefElement(inputRef);
			return el instanceof HTMLInputElement ? el : null;
		}
		const focus = () => getInput()?.focus();
		const blur = () => getInput()?.blur();
		const select = () => getInput()?.select();
		__expose({
			focus,
			blur,
			select
		});
		const formatOptions = computed(() => props.precision !== void 0 ? {
			maximumFractionDigits: props.precision,
			minimumFractionDigits: props.precision
		} : { maximumFractionDigits: 20 });
		const rootProps = useForwardPropsEmits(reactivePick(props, "modelValue", "defaultValue", "min", "max", "step", "stepSnapping", "disabled", "readonly", "disableWheelChange", "invertWheelChange", "id", "name", "required", "locale"), emit);
		function onFocus(event) {
			emit("focus", event);
		}
		/** Select all only on direct input click — not when controls focus the field. */
		function onInputClick(event) {
			const target = event.target;
			if (target instanceof HTMLInputElement) target.select();
		}
		function nextInputValue(target, inserted) {
			return target.value.slice(0, target.selectionStart ?? 0) + inserted + target.value.slice(target.selectionEnd ?? 0);
		}
		function exceedsMax(value) {
			if (props.max === void 0) return false;
			const parsed = Number(value);
			return !Number.isNaN(parsed) && parsed > props.max;
		}
		/**
		* Reka's beforeinput validator only checks that characters form a number, not min/max.
		* Reject complete values above max while typing; below-min values still clamp on blur
		* so the user can type a larger number (e.g. 1 → 15 when min is 10).
		*
		* Paste is handled separately: `insertFromPaste` often has `event.data === null`.
		*/
		function onBeforeInput(event) {
			if (event.defaultPrevented || props.max === void 0) return;
			if (event.inputType.startsWith("delete") || event.inputType.startsWith("history")) return;
			const target = event.target;
			if (!(target instanceof HTMLInputElement)) return;
			if (exceedsMax(nextInputValue(target, event.data ?? ""))) event.preventDefault();
		}
		/**
		* Paste `beforeinput` may not include the clipboard text (`event.data` is null).
		* Read `clipboardData` here and reject over-max values before they land in the field.
		* Do not stop the event — consumers (e.g. expression paste) still need the bubble.
		*/
		function onPaste(event) {
			if (event.defaultPrevented || props.max === void 0) return;
			const target = event.target;
			if (!(target instanceof HTMLInputElement)) return;
			if (exceedsMax(nextInputValue(target, event.clipboardData?.getData("text") ?? ""))) event.preventDefault();
		}
		const sizes = {
			mini: $style.mini,
			small: $style.small,
			medium: $style.medium,
			large: $style.large,
			xlarge: $style.xlarge
		};
		const sizeClass = computed(() => sizes[props.size ?? "medium"]);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(NumberFieldRoot_default), mergeProps({ "data-test-id": "input-number" }, {
				...unref(rootProps),
				...rootAttrs.value,
				formatOptions: formatOptions.value
			}, {
				min: props.min,
				max: props.max,
				class: [
					unref($style).inputNumber,
					sizeClass.value,
					rootClass.value,
					{
						[unref($style).isDisabled]: props.disabled,
						[unref($style).isControlsBoth]: isControlsBoth.value
					}
				]
			}), {
				default: withCtx(() => [
					isControlsBoth.value ? (openBlock(), createBlock(unref(NumberFieldDecrement_default), {
						key: 0,
						"as-child": ""
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "decrement", { ui: { class: [unref($style).button, unref($style).buttonDecrement].join(" ") } }, () => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass([unref($style).button, unref($style).buttonDecrement]),
							"aria-label": unref(t)("nds.inputNumber.decrease")
						}, [createVNode(Icon_default, {
							icon: "minus",
							size: "small"
						})], 10, _hoisted_1)])]),
						_: 3
					})) : createCommentVNode("", true),
					createVNode(unref(NumberFieldInput_default), {
						ref_key: "inputRef",
						ref: inputRef,
						class: normalizeClass(unref($style).input),
						placeholder: __props.placeholder,
						onFocus,
						onClick: onInputClick,
						onBeforeinput: onBeforeInput,
						onPaste,
						onBlur: _cache[0] || (_cache[0] = ($event) => emit("blur", $event))
					}, null, 8, ["class", "placeholder"]),
					isControlsBoth.value ? (openBlock(), createBlock(unref(NumberFieldIncrement_default), {
						key: 1,
						"as-child": ""
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "increment", { ui: { class: [unref($style).button, unref($style).buttonIncrement].join(" ") } }, () => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass([unref($style).button, unref($style).buttonIncrement]),
							"aria-label": unref(t)("nds.inputNumber.increase")
						}, [createVNode(Icon_default, {
							icon: "plus",
							size: "small"
						})], 10, _hoisted_2)])]),
						_: 3
					})) : createCommentVNode("", true),
					isControlsRight.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(unref($style).controlsWrapper)
					}, [createVNode(unref(NumberFieldIncrement_default), { "as-child": "" }, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "increment", { ui: { class: [unref($style).button, unref($style).buttonUp].join(" ") } }, () => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass([unref($style).button, unref($style).buttonUp]),
							"aria-label": unref(t)("nds.inputNumber.increase")
						}, [createVNode(Icon_default, {
							icon: "chevron-up",
							size: "xsmall"
						})], 10, _hoisted_3)])]),
						_: 3
					}), createVNode(unref(NumberFieldDecrement_default), { "as-child": "" }, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "decrement", { ui: { class: [unref($style).button, unref($style).buttonDown].join(" ") } }, () => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass([unref($style).button, unref($style).buttonDown]),
							"aria-label": unref(t)("nds.inputNumber.decrease")
						}, [createVNode(Icon_default, {
							icon: "chevron-down",
							size: "xsmall"
						})], 10, _hoisted_4)])]),
						_: 3
					})], 2)) : createCommentVNode("", true)
				]),
				_: 3
			}, 16, [
				"min",
				"max",
				"class"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nInputNumber/InputNumber.vue?vue&type=style&index=0&lang.module.scss
var inputNumber = "_inputNumber_lfqtw_388";
var isDisabled = "_isDisabled_lfqtw_420";
var input = "_input_lfqtw_388";
var isControlsBoth = "_isControlsBoth_lfqtw_451";
var button = "_button_lfqtw_456";
var buttonDecrement = "_buttonDecrement_lfqtw_475";
var buttonIncrement = "_buttonIncrement_lfqtw_484";
var controlsWrapper = "_controlsWrapper_lfqtw_493";
var buttonUp = "_buttonUp_lfqtw_501";
var buttonDown = "_buttonDown_lfqtw_506";
var mini = "_mini_lfqtw_519";
var small = "_small_lfqtw_526";
var medium = "_medium_lfqtw_533";
var large = "_large_lfqtw_540";
var xlarge = "_xlarge_lfqtw_547";
var shimmer = "_shimmer_lfqtw_1";
var spin = "_spin_lfqtw_1";
var opacityPulse = "_opacityPulse_lfqtw_1";
var popoverIn = "_popoverIn_lfqtw_1";
var fadeIn = "_fadeIn_lfqtw_1";
var collapsibleSlideDown = "_collapsibleSlideDown_lfqtw_1";
var collapsibleSlideUp = "_collapsibleSlideUp_lfqtw_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_lfqtw_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_lfqtw_1";
var blurSwapIn = "_blurSwapIn_lfqtw_1";
var blurSwapOut = "_blurSwapOut_lfqtw_1";
var pulseGlow = "_pulseGlow_lfqtw_1";
var pulseGlowDelayed = "_pulseGlowDelayed_lfqtw_1";
var fade = "_fade_lfqtw_1";
var fadeInUp = "_fadeInUp_lfqtw_1";
var fadeInDown = "_fadeInDown_lfqtw_1";
var fadeInLeft = "_fadeInLeft_lfqtw_1";
var fadeInRight = "_fadeInRight_lfqtw_1";
var fadeOut = "_fadeOut_lfqtw_1";
var fadeOutDown = "_fadeOutDown_lfqtw_1";
var fadeOutUp = "_fadeOutUp_lfqtw_1";
var fadeOutLeft = "_fadeOutLeft_lfqtw_1";
var fadeOutRight = "_fadeOutRight_lfqtw_1";
var ping = "_ping_lfqtw_1";
var blinkBackground = "_blinkBackground_lfqtw_1";
var typingBlink = "_typingBlink_lfqtw_1";
var InputNumber_vue_vue_type_style_index_0_lang_module_default = {
	inputNumber,
	isDisabled,
	input,
	isControlsBoth,
	button,
	buttonDecrement,
	buttonIncrement,
	controlsWrapper,
	buttonUp,
	buttonDown,
	mini,
	small,
	medium,
	large,
	xlarge,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_lfqtw_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nInputNumber/index.ts
var N8nInputNumber_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InputNumber_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InputNumber_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nInputNumber_default as t };
