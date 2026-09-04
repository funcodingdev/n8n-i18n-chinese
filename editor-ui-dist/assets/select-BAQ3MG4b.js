import { $ as openBlock, Bt as toRaw, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, O as createSlots, P as getCurrentInstance, Pt as reactive, R as inject, S as computed, T as createCommentVNode, Tn as toRawType, W as nextTick, Wt as triggerRef, X as onMounted, _ as Fragment, an as isFunction, at as resolveComponent, bn as normalizeStyle, bt as withCtx, cn as isObject, f as vModelText, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, mn as isString, n as Transition, ot as resolveDirective, p as vShow, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, tn as init_shared_esm_bundler, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { r as useTooltipContentProps, s as Ee, t as ElTooltip } from "./tooltip-oYsvce70.js";
import { b as isIOS, h as useResizeObserver, l as escapeStringRegexp, o as debugWarn, y as isClient } from "./style-aw1HwLDr.js";
import { B as Symbol$1, C as Map$1, D as eq, F as isArray, H as freeGlobal, L as isSymbol, M as toSource, N as isFunction$1, P as isObject$1, R as isObjectLike, S as MapCache, T as isKey, V as root, b as toKey, d as isElement, h as isUndefined, j as getNative, k as isIndex, p as isNumber, r as useNamespace, v as get, w as ListCache, x as castPath, y as baseGet, z as baseGetTag } from "./use-namespace-xWWi2xIE.js";
import { r as EVENT_CODE } from "./focus-trap-CIpXr-Z6.js";
import { n as scrollIntoView } from "./scroll-CUg7IegU.js";
import { a as arrow_down_default, f as circle_close_default, i as withNoopInstall, n as withInstall, t as _export_sfc } from "./plugin-vue_export-helper-AbXb0iQc.js";
import { c as ValidateComponentsMap, i as useDeprecated, l as iconPropType, n as useId, t as ElIcon } from "./icon-DEwwsnFu.js";
import { t as isValidComponentSize } from "./validator-_yiJ_ICt.js";
import { r as UPDATE_MODEL_EVENT, t as CHANGE_EVENT } from "./event-BWR2J8pj.js";
import { i as componentSizeMap } from "./use-size-8oGTaPnQ.js";
import { i as isKorean, t as ElInput } from "./input-DcFckfM5.js";
import { a as useLocale } from "./use-z-index-DYH4GP29.js";
import { i as useFormSize, t as useFormItem } from "./use-form-item-CV4_f5CE.js";
import { t as ElScrollbar } from "./scrollbar-XVVlQ2p1.js";
import { n as tagProps, t as ElTag } from "./tag-BtOB2CGC.js";
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;
/**
* Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
* character of `string`.
*
* @private
* @param {string} string The string to inspect.
* @returns {number} Returns the index of the last non-whitespace character.
*/
function trimmedEndIndex(string) {
	var index = string.length;
	while (index-- && reWhitespace.test(string.charAt(index)));
	return index;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTrim.js
/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;
/**
* The base implementation of `_.trim`.
*
* @private
* @param {string} string The string to trim.
* @returns {string} Returns the trimmed string.
*/
function baseTrim(string) {
	return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toNumber.js
/** Used as references for various `Number` constants. */
var NAN = NaN;
/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;
/**
* Converts `value` to a number.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to process.
* @returns {number} Returns the number.
* @example
*
* _.toNumber(3.2);
* // => 3.2
*
* _.toNumber(Number.MIN_VALUE);
* // => 5e-324
*
* _.toNumber(Infinity);
* // => Infinity
*
* _.toNumber('3.2');
* // => 3.2
*/
function toNumber(value) {
	if (typeof value == "number") return value;
	if (isSymbol(value)) return NAN;
	if (isObject$1(value)) {
		var other = typeof value.valueOf == "function" ? value.valueOf() : value;
		value = isObject$1(other) ? other + "" : other;
	}
	if (typeof value != "string") return value === 0 ? value : +value;
	value = baseTrim(value);
	var isBinary = reIsBinary.test(value);
	return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toFinite.js
/** Used as references for various `Number` constants. */
var INFINITY = Infinity, MAX_INTEGER = 17976931348623157e292;
/**
* Converts `value` to a finite number.
*
* @static
* @memberOf _
* @since 4.12.0
* @category Lang
* @param {*} value The value to convert.
* @returns {number} Returns the converted number.
* @example
*
* _.toFinite(3.2);
* // => 3.2
*
* _.toFinite(Number.MIN_VALUE);
* // => 5e-324
*
* _.toFinite(Infinity);
* // => 1.7976931348623157e+308
*
* _.toFinite('3.2');
* // => 3.2
*/
function toFinite(value) {
	if (!value) return value === 0 ? value : 0;
	value = toNumber(value);
	if (value === INFINITY || value === -INFINITY) return (value < 0 ? -1 : 1) * MAX_INTEGER;
	return value === value ? value : 0;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/toInteger.js
/**
* Converts `value` to an integer.
*
* **Note:** This method is loosely based on
* [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to convert.
* @returns {number} Returns the converted integer.
* @example
*
* _.toInteger(3.2);
* // => 3
*
* _.toInteger(Number.MIN_VALUE);
* // => 0
*
* _.toInteger(Infinity);
* // => 1.7976931348623157e+308
*
* _.toInteger('3.2');
* // => 3
*/
function toInteger(value) {
	var result = toFinite(value), remainder = result % 1;
	return result === result ? remainder ? result - remainder : result : 0;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/identity.js
/**
* This method returns the first argument it receives.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Util
* @param {*} value Any value.
* @returns {*} Returns `value`.
* @example
*
* var object = { 'a': 1 };
*
* console.log(_.identity(object) === object);
* // => true
*/
function identity(value) {
	return value;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_WeakMap.js
var WeakMap = getNative(root, "WeakMap");
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseFindIndex.js
/**
* The base implementation of `_.findIndex` and `_.findLastIndex` without
* support for iteratee shorthands.
*
* @private
* @param {Array} array The array to inspect.
* @param {Function} predicate The function invoked per iteration.
* @param {number} fromIndex The index to search from.
* @param {boolean} [fromRight] Specify iterating from right to left.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function baseFindIndex(array, predicate, fromIndex, fromRight) {
	var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
	while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
	return -1;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
* Checks if `value` is a valid array-like length.
*
* **Note:** This method is loosely based on
* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
* @example
*
* _.isLength(3);
* // => true
*
* _.isLength(Number.MIN_VALUE);
* // => false
*
* _.isLength(Infinity);
* // => false
*
* _.isLength('3');
* // => false
*/
function isLength(value) {
	return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArrayLike.js
/**
* Checks if `value` is array-like. A value is considered array-like if it's
* not a function and has a `value.length` that's an integer greater than or
* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
* @example
*
* _.isArrayLike([1, 2, 3]);
* // => true
*
* _.isArrayLike(document.body.children);
* // => true
*
* _.isArrayLike('abc');
* // => true
*
* _.isArrayLike(_.noop);
* // => false
*/
function isArrayLike(value) {
	return value != null && isLength(value.length) && !isFunction$1(value);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
* Checks if `value` is likely a prototype object.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
*/
function isPrototype(value) {
	var Ctor = value && value.constructor;
	return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$1);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseTimes.js
/**
* The base implementation of `_.times` without support for iteratee shorthands
* or max array length checks.
*
* @private
* @param {number} n The number of times to invoke `iteratee`.
* @param {Function} iteratee The function invoked per iteration.
* @returns {Array} Returns the array of results.
*/
function baseTimes(n, iteratee) {
	var index = -1, result = Array(n);
	while (++index < n) result[index] = iteratee(index);
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsArguments.js
/** `Object#toString` result references. */
var argsTag$2 = "[object Arguments]";
/**
* The base implementation of `_.isArguments`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*/
function baseIsArguments(value) {
	return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isArguments.js
/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto.hasOwnProperty;
/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto.propertyIsEnumerable;
/**
* Checks if `value` is likely an `arguments` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*  else `false`.
* @example
*
* _.isArguments(function() { return arguments; }());
* // => true
*
* _.isArguments([1, 2, 3]);
* // => false
*/
var isArguments = baseIsArguments(function() {
	return arguments;
}()) ? baseIsArguments : function(value) {
	return isObjectLike(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubFalse.js
/**
* This method returns `false`.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {boolean} Returns `false`.
* @example
*
* _.times(2, _.stubFalse);
* // => [false, false]
*/
function stubFalse() {
	return false;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isBuffer.js
/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
/** Built-in value references. */
var Buffer = freeModule$1 && freeModule$1.exports === freeExports$1 ? root.Buffer : void 0;
/**
* Checks if `value` is a buffer.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
* @example
*
* _.isBuffer(new Buffer(2));
* // => true
*
* _.isBuffer(new Uint8Array(2));
* // => false
*/
var isBuffer = (Buffer ? Buffer.isBuffer : void 0) || stubFalse;
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsTypedArray.js
/** `Object#toString` result references. */
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
/**
* The base implementation of `_.isTypedArray` without Node.js optimizations.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
*/
function baseIsTypedArray(value) {
	return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseUnary.js
/**
* The base implementation of `_.unary` without support for storing metadata.
*
* @private
* @param {Function} func The function to cap arguments for.
* @returns {Function} Returns the new capped function.
*/
function baseUnary(func) {
	return function(value) {
		return func(value);
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nodeUtil.js
/** Detect free variable `exports`. */
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
/** Detect free variable `process` from Node.js. */
var freeProcess = freeModule && freeModule.exports === freeExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */
var nodeUtil = function() {
	try {
		var types = freeModule && freeModule.require && freeModule.require("util").types;
		if (types) return types;
		return freeProcess && freeProcess.binding && freeProcess.binding("util");
	} catch (e) {}
}();
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
* Checks if `value` is classified as a typed array.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
* @example
*
* _.isTypedArray(new Uint8Array);
* // => true
*
* _.isTypedArray([]);
* // => false
*/
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayLikeKeys.js
/** Used to check objects for own properties. */
var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
/**
* Creates an array of the enumerable property names of the array-like `value`.
*
* @private
* @param {*} value The value to query.
* @param {boolean} inherited Specify returning inherited property names.
* @returns {Array} Returns the array of property names.
*/
function arrayLikeKeys(value, inherited) {
	var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
	for (var key in value) if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_overArg.js
/**
* Creates a unary function that invokes `func` with its argument transformed.
*
* @private
* @param {Function} func The function to wrap.
* @param {Function} transform The argument transform.
* @returns {Function} Returns the new function.
*/
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg(Object.keys, Object);
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseKeys.js
/** Used to check objects for own properties. */
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
/**
* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeys(object) {
	if (!isPrototype(object)) return nativeKeys(object);
	var result = [];
	for (var key in Object(object)) if (hasOwnProperty$2.call(object, key) && key != "constructor") result.push(key);
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/keys.js
/**
* Creates an array of the own enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects. See the
* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* for more details.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keys(new Foo);
* // => ['a', 'b'] (iteration order is not guaranteed)
*
* _.keys('hi');
* // => ['0', '1']
*/
function keys(object) {
	return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayPush.js
/**
* Appends the elements of `values` to `array`.
*
* @private
* @param {Array} array The array to modify.
* @param {Array} values The values to append.
* @returns {Array} Returns `array`.
*/
function arrayPush(array, values) {
	var index = -1, length = values.length, offset = array.length;
	while (++index < length) array[offset + index] = values[index];
	return array;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackClear.js
/**
* Removes all key-value entries from the stack.
*
* @private
* @name clear
* @memberOf Stack
*/
function stackClear() {
	this.__data__ = new ListCache();
	this.size = 0;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackDelete.js
/**
* Removes `key` and its value from the stack.
*
* @private
* @name delete
* @memberOf Stack
* @param {string} key The key of the value to remove.
* @returns {boolean} Returns `true` if the entry was removed, else `false`.
*/
function stackDelete(key) {
	var data = this.__data__, result = data["delete"](key);
	this.size = data.size;
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackGet.js
/**
* Gets the stack value for `key`.
*
* @private
* @name get
* @memberOf Stack
* @param {string} key The key of the value to get.
* @returns {*} Returns the entry value.
*/
function stackGet(key) {
	return this.__data__.get(key);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackHas.js
/**
* Checks if a stack value for `key` exists.
*
* @private
* @name has
* @memberOf Stack
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function stackHas(key) {
	return this.__data__.has(key);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_stackSet.js
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/**
* Sets the stack `key` to `value`.
*
* @private
* @name set
* @memberOf Stack
* @param {string} key The key of the value to set.
* @param {*} value The value to set.
* @returns {Object} Returns the stack cache instance.
*/
function stackSet(key, value) {
	var data = this.__data__;
	if (data instanceof ListCache) {
		var pairs = data.__data__;
		if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
			pairs.push([key, value]);
			this.size = ++data.size;
			return this;
		}
		data = this.__data__ = new MapCache(pairs);
	}
	data.set(key, value);
	this.size = data.size;
	return this;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Stack.js
/**
* Creates a stack cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function Stack(entries) {
	this.size = (this.__data__ = new ListCache(entries)).size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arrayFilter.js
/**
* A specialized version of `_.filter` for arrays without support for
* iteratee shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {Array} Returns the new filtered array.
*/
function arrayFilter(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
	while (++index < length) {
		var value = array[index];
		if (predicate(value, index, array)) result[resIndex++] = value;
	}
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/stubArray.js
/**
* This method returns a new empty array.
*
* @static
* @memberOf _
* @since 4.13.0
* @category Util
* @returns {Array} Returns the new empty array.
* @example
*
* var arrays = _.times(2, _.stubArray);
*
* console.log(arrays);
* // => [[], []]
*
* console.log(arrays[0] === arrays[1]);
* // => false
*/
function stubArray() {
	return [];
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getSymbols.js
/** Built-in value references. */
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
* Creates an array of the own enumerable symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of symbols.
*/
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	if (object == null) return [];
	object = Object(object);
	return arrayFilter(nativeGetSymbols(object), function(symbol) {
		return propertyIsEnumerable.call(object, symbol);
	});
};
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseGetAllKeys.js
/**
* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
* `keysFunc` and `symbolsFunc` to get the enumerable property names and
* symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Function} keysFunc The function to get the keys of `object`.
* @param {Function} symbolsFunc The function to get the symbols of `object`.
* @returns {Array} Returns the array of property names and symbols.
*/
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	var result = keysFunc(object);
	return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getAllKeys.js
/**
* Creates an array of own enumerable property names and symbols of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names and symbols.
*/
function getAllKeys(object) {
	return baseGetAllKeys(object, keys, getSymbols);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_DataView.js
var DataView = getNative(root, "DataView");
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Promise.js
var Promise$1 = getNative(root, "Promise");
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Set.js
var Set = getNative(root, "Set");
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getTag.js
/** `Object#toString` result references. */
var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/**
* Gets the `toStringTag` of `value`.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
var getTag = baseGetTag;
if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$1 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set()) != setTag$1 || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
	var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
	if (ctorString) switch (ctorString) {
		case dataViewCtorString: return dataViewTag$1;
		case mapCtorString: return mapTag$1;
		case promiseCtorString: return promiseTag;
		case setCtorString: return setTag$1;
		case weakMapCtorString: return weakMapTag;
	}
	return result;
};
var _getTag_default = getTag;
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_Uint8Array.js
/** Built-in value references. */
var Uint8Array = root.Uint8Array;
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
* Adds `value` to the array cache.
*
* @private
* @name add
* @memberOf SetCache
* @alias push
* @param {*} value The value to cache.
* @returns {Object} Returns the cache instance.
*/
function setCacheAdd(value) {
	this.__data__.set(value, HASH_UNDEFINED);
	return this;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setCacheHas.js
/**
* Checks if `value` is in the array cache.
*
* @private
* @name has
* @memberOf SetCache
* @param {*} value The value to search for.
* @returns {boolean} Returns `true` if `value` is found, else `false`.
*/
function setCacheHas(value) {
	return this.__data__.has(value);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_SetCache.js
/**
*
* Creates an array cache object to store unique values.
*
* @private
* @constructor
* @param {Array} [values] The values to cache.
*/
function SetCache(values) {
	var index = -1, length = values == null ? 0 : values.length;
	this.__data__ = new MapCache();
	while (++index < length) this.add(values[index]);
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_arraySome.js
/**
* A specialized version of `_.some` for arrays without support for iteratee
* shorthands.
*
* @private
* @param {Array} [array] The array to iterate over.
* @param {Function} predicate The function invoked per iteration.
* @returns {boolean} Returns `true` if any element passes the predicate check,
*  else `false`.
*/
function arraySome(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (predicate(array[index], index, array)) return true;
	return false;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_cacheHas.js
/**
* Checks if a `cache` value for `key` exists.
*
* @private
* @param {Object} cache The cache to query.
* @param {string} key The key of the entry to check.
* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
*/
function cacheHas(cache, key) {
	return cache.has(key);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalArrays.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
/**
* A specialized version of `baseIsEqualDeep` for arrays with support for
* partial deep comparisons.
*
* @private
* @param {Array} array The array to compare.
* @param {Array} other The other array to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `array` and `other` objects.
* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
*/
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
	if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
	var arrStacked = stack.get(array);
	var othStacked = stack.get(other);
	if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
	var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
	stack.set(array, other);
	stack.set(other, array);
	while (++index < arrLength) {
		var arrValue = array[index], othValue = other[index];
		if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
		if (compared !== void 0) {
			if (compared) continue;
			result = false;
			break;
		}
		if (seen) {
			if (!arraySome(other, function(othValue, othIndex) {
				if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
			})) {
				result = false;
				break;
			}
		} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
			result = false;
			break;
		}
	}
	stack["delete"](array);
	stack["delete"](other);
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_mapToArray.js
/**
* Converts `map` to its key-value pairs.
*
* @private
* @param {Object} map The map to convert.
* @returns {Array} Returns the key-value pairs.
*/
function mapToArray(map) {
	var index = -1, result = Array(map.size);
	map.forEach(function(value, key) {
		result[++index] = [key, value];
	});
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_setToArray.js
/**
* Converts `set` to an array of its values.
*
* @private
* @param {Object} set The set to convert.
* @returns {Array} Returns the values.
*/
function setToArray(set) {
	var index = -1, result = Array(set.size);
	set.forEach(function(value) {
		result[++index] = value;
	});
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalByTag.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
/** `Object#toString` result references. */
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
/**
* A specialized version of `baseIsEqualDeep` for comparing objects of
* the same `toStringTag`.
*
* **Note:** This function only supports comparing values with tags of
* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {string} tag The `toStringTag` of the objects to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	switch (tag) {
		case dataViewTag:
			if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
			object = object.buffer;
			other = other.buffer;
		case arrayBufferTag:
			if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
			return true;
		case boolTag:
		case dateTag:
		case numberTag: return eq(+object, +other);
		case errorTag: return object.name == other.name && object.message == other.message;
		case regexpTag:
		case stringTag: return object == other + "";
		case mapTag: var convert = mapToArray;
		case setTag:
			var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
			convert || (convert = setToArray);
			if (object.size != other.size && !isPartial) return false;
			var stacked = stack.get(object);
			if (stacked) return stacked == other;
			bitmask |= COMPARE_UNORDERED_FLAG$2;
			stack.set(object, other);
			var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
			stack["delete"](object);
			return result;
		case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
	}
	return false;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_equalObjects.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;
/** Used to check objects for own properties. */
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
/**
* A specialized version of `baseIsEqualDeep` for objects with support for
* partial deep comparisons.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} stack Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length;
	if (objLength != getAllKeys(other).length && !isPartial) return false;
	var index = objLength;
	while (index--) {
		var key = objProps[index];
		if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) return false;
	}
	var objStacked = stack.get(object);
	var othStacked = stack.get(other);
	if (objStacked && othStacked) return objStacked == other && othStacked == object;
	var result = true;
	stack.set(object, other);
	stack.set(other, object);
	var skipCtor = isPartial;
	while (++index < objLength) {
		key = objProps[index];
		var objValue = object[key], othValue = other[key];
		if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
		if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
			result = false;
			break;
		}
		skipCtor || (skipCtor = key == "constructor");
	}
	if (result && !skipCtor) {
		var objCtor = object.constructor, othCtor = other.constructor;
		if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
	}
	stack["delete"](object);
	stack["delete"](other);
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqualDeep.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;
/** `Object#toString` result references. */
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
* A specialized version of `baseIsEqual` for arrays and objects which performs
* deep comparisons and tracks traversed objects enabling objects with circular
* references to be compared.
*
* @private
* @param {Object} object The object to compare.
* @param {Object} other The other object to compare.
* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
* @param {Function} customizer The function to customize comparisons.
* @param {Function} equalFunc The function to determine equivalents of values.
* @param {Object} [stack] Tracks traversed `object` and `other` objects.
* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
*/
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : _getTag_default(object), othTag = othIsArr ? arrayTag : _getTag_default(other);
	objTag = objTag == argsTag ? objectTag : objTag;
	othTag = othTag == argsTag ? objectTag : othTag;
	var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
	if (isSameTag && isBuffer(object)) {
		if (!isBuffer(other)) return false;
		objIsArr = true;
		objIsObj = false;
	}
	if (isSameTag && !objIsObj) {
		stack || (stack = new Stack());
		return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	}
	if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
		var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
		if (objIsWrapped || othIsWrapped) {
			var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
			stack || (stack = new Stack());
			return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
		}
	}
	if (!isSameTag) return false;
	stack || (stack = new Stack());
	return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsEqual.js
/**
* The base implementation of `_.isEqual` which supports partial comparisons
* and tracks traversed objects.
*
* @private
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @param {boolean} bitmask The bitmask flags.
*  1 - Unordered comparison
*  2 - Partial comparison
* @param {Function} [customizer] The function to customize comparisons.
* @param {Object} [stack] Tracks traversed `value` and `other` objects.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
*/
function baseIsEqual(value, other, bitmask, customizer, stack) {
	if (value === other) return true;
	if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
	return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIsMatch.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
/**
* The base implementation of `_.isMatch` without support for iteratee shorthands.
*
* @private
* @param {Object} object The object to inspect.
* @param {Object} source The object of property values to match.
* @param {Array} matchData The property names, values, and compare flags to match.
* @param {Function} [customizer] The function to customize comparisons.
* @returns {boolean} Returns `true` if `object` is a match, else `false`.
*/
function baseIsMatch(object, source, matchData, customizer) {
	var index = matchData.length, length = index, noCustomizer = !customizer;
	if (object == null) return !length;
	object = Object(object);
	while (index--) {
		var data = matchData[index];
		if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
	}
	while (++index < length) {
		data = matchData[index];
		var key = data[0], objValue = object[key], srcValue = data[1];
		if (noCustomizer && data[2]) {
			if (objValue === void 0 && !(key in object)) return false;
		} else {
			var stack = new Stack();
			if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
			if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) return false;
		}
	}
	return true;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_isStrictComparable.js
/**
* Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` if suitable for strict
*  equality comparisons, else `false`.
*/
function isStrictComparable(value) {
	return value === value && !isObject$1(value);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_getMatchData.js
/**
* Gets the property names, values, and compare flags of `object`.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the match data of `object`.
*/
function getMatchData(object) {
	var result = keys(object), length = result.length;
	while (length--) {
		var key = result[length], value = object[key];
		result[length] = [
			key,
			value,
			isStrictComparable(value)
		];
	}
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_matchesStrictComparable.js
/**
* A specialized version of `matchesProperty` for source values suitable
* for strict equality comparisons, i.e. `===`.
*
* @private
* @param {string} key The key of the property to get.
* @param {*} srcValue The value to match.
* @returns {Function} Returns the new spec function.
*/
function matchesStrictComparable(key, srcValue) {
	return function(object) {
		if (object == null) return false;
		return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMatches.js
/**
* The base implementation of `_.matches` which doesn't clone `source`.
*
* @private
* @param {Object} source The object of property values to match.
* @returns {Function} Returns the new spec function.
*/
function baseMatches(source) {
	var matchData = getMatchData(source);
	if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	return function(object) {
		return object === source || baseIsMatch(object, source, matchData);
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseHasIn.js
/**
* The base implementation of `_.hasIn` without support for deep paths.
*
* @private
* @param {Object} [object] The object to query.
* @param {Array|string} key The key to check.
* @returns {boolean} Returns `true` if `key` exists, else `false`.
*/
function baseHasIn(object, key) {
	return object != null && key in Object(object);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_hasPath.js
/**
* Checks if `path` exists on `object`.
*
* @private
* @param {Object} object The object to query.
* @param {Array|string} path The path to check.
* @param {Function} hasFunc The function to check properties.
* @returns {boolean} Returns `true` if `path` exists, else `false`.
*/
function hasPath(object, path, hasFunc) {
	path = castPath(path, object);
	var index = -1, length = path.length, result = false;
	while (++index < length) {
		var key = toKey(path[index]);
		if (!(result = object != null && hasFunc(object, key))) break;
		object = object[key];
	}
	if (result || ++index != length) return result;
	length = object == null ? 0 : object.length;
	return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/hasIn.js
/**
* Checks if `path` is a direct or inherited property of `object`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Object
* @param {Object} object The object to query.
* @param {Array|string} path The path to check.
* @returns {boolean} Returns `true` if `path` exists, else `false`.
* @example
*
* var object = _.create({ 'a': _.create({ 'b': 2 }) });
*
* _.hasIn(object, 'a');
* // => true
*
* _.hasIn(object, 'a.b');
* // => true
*
* _.hasIn(object, ['a', 'b']);
* // => true
*
* _.hasIn(object, 'b');
* // => false
*/
function hasIn(object, path) {
	return object != null && hasPath(object, path, baseHasIn);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseMatchesProperty.js
/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
* The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
*
* @private
* @param {string} path The path of the property to get.
* @param {*} srcValue The value to match.
* @returns {Function} Returns the new spec function.
*/
function baseMatchesProperty(path, srcValue) {
	if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
	return function(object) {
		var objValue = get(object, path);
		return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseProperty.js
/**
* The base implementation of `_.property` without support for deep paths.
*
* @private
* @param {string} key The key of the property to get.
* @returns {Function} Returns the new accessor function.
*/
function baseProperty(key) {
	return function(object) {
		return object == null ? void 0 : object[key];
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_basePropertyDeep.js
/**
* A specialized version of `baseProperty` which supports deep paths.
*
* @private
* @param {Array|string} path The path of the property to get.
* @returns {Function} Returns the new accessor function.
*/
function basePropertyDeep(path) {
	return function(object) {
		return baseGet(object, path);
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/property.js
/**
* Creates a function that returns the value at `path` of a given object.
*
* @static
* @memberOf _
* @since 2.4.0
* @category Util
* @param {Array|string} path The path of the property to get.
* @returns {Function} Returns the new accessor function.
* @example
*
* var objects = [
*   { 'a': { 'b': 2 } },
*   { 'a': { 'b': 1 } }
* ];
*
* _.map(objects, _.property('a.b'));
* // => [2, 1]
*
* _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
* // => [1, 2]
*/
function property(path) {
	return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/_baseIteratee.js
/**
* The base implementation of `_.iteratee`.
*
* @private
* @param {*} [value=_.identity] The value to convert to an iteratee.
* @returns {Function} Returns the iteratee.
*/
function baseIteratee(value) {
	if (typeof value == "function") return value;
	if (value == null) return identity;
	if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	return property(value);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/now.js
/**
* Gets the timestamp of the number of milliseconds that have elapsed since
* the Unix epoch (1 January 1970 00:00:00 UTC).
*
* @static
* @memberOf _
* @since 2.4.0
* @category Date
* @returns {number} Returns the timestamp.
* @example
*
* _.defer(function(stamp) {
*   console.log(_.now() - stamp);
* }, _.now());
* // => Logs the number of milliseconds it took for the deferred invocation.
*/
var now = function() {
	return root.Date.now();
};
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/debounce.js
/** Error message constants. */
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax$1 = Math.max, nativeMin$1 = Math.min;
/**
* Creates a debounced function that delays invoking `func` until after `wait`
* milliseconds have elapsed since the last time the debounced function was
* invoked. The debounced function comes with a `cancel` method to cancel
* delayed `func` invocations and a `flush` method to immediately invoke them.
* Provide `options` to indicate whether `func` should be invoked on the
* leading and/or trailing edge of the `wait` timeout. The `func` is invoked
* with the last arguments provided to the debounced function. Subsequent
* calls to the debounced function return the result of the last `func`
* invocation.
*
* **Note:** If `leading` and `trailing` options are `true`, `func` is
* invoked on the trailing edge of the timeout only if the debounced function
* is invoked more than once during the `wait` timeout.
*
* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
* until to the next tick, similar to `setTimeout` with a timeout of `0`.
*
* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
* for details over the differences between `_.debounce` and `_.throttle`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Function
* @param {Function} func The function to debounce.
* @param {number} [wait=0] The number of milliseconds to delay.
* @param {Object} [options={}] The options object.
* @param {boolean} [options.leading=false]
*  Specify invoking on the leading edge of the timeout.
* @param {number} [options.maxWait]
*  The maximum time `func` is allowed to be delayed before it's invoked.
* @param {boolean} [options.trailing=true]
*  Specify invoking on the trailing edge of the timeout.
* @returns {Function} Returns the new debounced function.
* @example
*
* // Avoid costly calculations while the window size is in flux.
* jQuery(window).on('resize', _.debounce(calculateLayout, 150));
*
* // Invoke `sendMail` when clicked, debouncing subsequent calls.
* jQuery(element).on('click', _.debounce(sendMail, 300, {
*   'leading': true,
*   'trailing': false
* }));
*
* // Ensure `batchLog` is invoked once after 1 second of debounced calls.
* var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
* var source = new EventSource('/stream');
* jQuery(source).on('message', debounced);
*
* // Cancel the trailing debounced invocation.
* jQuery(window).on('popstate', debounced.cancel);
*/
function debounce(func, wait, options) {
	var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
	if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
	wait = toNumber(wait) || 0;
	if (isObject$1(options)) {
		leading = !!options.leading;
		maxing = "maxWait" in options;
		maxWait = maxing ? nativeMax$1(toNumber(options.maxWait) || 0, wait) : maxWait;
		trailing = "trailing" in options ? !!options.trailing : trailing;
	}
	function invokeFunc(time) {
		var args = lastArgs, thisArg = lastThis;
		lastArgs = lastThis = void 0;
		lastInvokeTime = time;
		result = func.apply(thisArg, args);
		return result;
	}
	function leadingEdge(time) {
		lastInvokeTime = time;
		timerId = setTimeout(timerExpired, wait);
		return leading ? invokeFunc(time) : result;
	}
	function remainingWait(time) {
		var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
		return maxing ? nativeMin$1(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
	}
	function shouldInvoke(time) {
		var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
		return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
	}
	function timerExpired() {
		var time = now();
		if (shouldInvoke(time)) return trailingEdge(time);
		timerId = setTimeout(timerExpired, remainingWait(time));
	}
	function trailingEdge(time) {
		timerId = void 0;
		if (trailing && lastArgs) return invokeFunc(time);
		lastArgs = lastThis = void 0;
		return result;
	}
	function cancel() {
		if (timerId !== void 0) clearTimeout(timerId);
		lastInvokeTime = 0;
		lastArgs = lastCallTime = lastThis = timerId = void 0;
	}
	function flush() {
		return timerId === void 0 ? result : trailingEdge(now());
	}
	function debounced() {
		var time = now(), isInvoking = shouldInvoke(time);
		lastArgs = arguments;
		lastThis = this;
		lastCallTime = time;
		if (isInvoking) {
			if (timerId === void 0) return leadingEdge(lastCallTime);
			if (maxing) {
				clearTimeout(timerId);
				timerId = setTimeout(timerExpired, wait);
				return invokeFunc(lastCallTime);
			}
		}
		if (timerId === void 0) timerId = setTimeout(timerExpired, wait);
		return result;
	}
	debounced.cancel = cancel;
	debounced.flush = flush;
	return debounced;
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/findLastIndex.js
var nativeMax = Math.max, nativeMin = Math.min;
/**
* This method is like `_.findIndex` except that it iterates over elements
* of `collection` from right to left.
*
* @static
* @memberOf _
* @since 2.0.0
* @category Array
* @param {Array} array The array to inspect.
* @param {Function} [predicate=_.identity] The function invoked per iteration.
* @param {number} [fromIndex=array.length-1] The index to search from.
* @returns {number} Returns the index of the found element, else `-1`.
* @example
*
* var users = [
*   { 'user': 'barney',  'active': true },
*   { 'user': 'fred',    'active': false },
*   { 'user': 'pebbles', 'active': false }
* ];
*
* _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
* // => 2
*
* // The `_.matches` iteratee shorthand.
* _.findLastIndex(users, { 'user': 'barney', 'active': true });
* // => 0
*
* // The `_.matchesProperty` iteratee shorthand.
* _.findLastIndex(users, ['active', false]);
* // => 2
*
* // The `_.property` iteratee shorthand.
* _.findLastIndex(users, 'active');
* // => 0
*/
function findLastIndex(array, predicate, fromIndex) {
	var length = array == null ? 0 : array.length;
	if (!length) return -1;
	var index = length - 1;
	if (fromIndex !== void 0) {
		index = toInteger(fromIndex);
		index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
	}
	return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash-es@4.18.1/node_modules/lodash-es/isEqual.js
/**
* Performs a deep comparison between two values to determine if they are
* equivalent.
*
* **Note:** This method supports comparing arrays, array buffers, booleans,
* date objects, error objects, maps, numbers, `Object` objects, regexes,
* sets, strings, symbols, and typed arrays. `Object` objects are compared
* by their own, not inherited, enumerable properties. Functions and DOM
* nodes are compared by strict equality, i.e. `===`.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.isEqual(object, other);
* // => true
*
* object === other;
* // => false
*/
function isEqual(value, other) {
	return baseIsEqual(value, other);
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/vue/size.mjs
var getComponentSize = (size) => {
	return componentSizeMap[size || "default"];
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/directives/click-outside/index.mjs
var nodeList = /* @__PURE__ */ new Map();
var startClick;
if (isClient) {
	document.addEventListener("mousedown", (e) => startClick = e);
	document.addEventListener("mouseup", (e) => {
		for (const handlers of nodeList.values()) for (const { documentHandler } of handlers) documentHandler(e, startClick);
	});
}
function createDocumentHandler(el, binding) {
	let excludes = [];
	if (Array.isArray(binding.arg)) excludes = binding.arg;
	else if (isElement(binding.arg)) excludes.push(binding.arg);
	return function(mouseup, mousedown) {
		const popperRef = binding.instance.popperRef;
		const mouseUpTarget = mouseup.target;
		const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
		const isBound = !binding || !binding.instance;
		const isTargetExists = !mouseUpTarget || !mouseDownTarget;
		const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
		const isSelf = el === mouseUpTarget;
		const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
		const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
		if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) return;
		binding.value(mouseup, mousedown);
	};
}
var ClickOutside = {
	beforeMount(el, binding) {
		if (!nodeList.has(el)) nodeList.set(el, []);
		nodeList.get(el).push({
			documentHandler: createDocumentHandler(el, binding),
			bindingFn: binding.value
		});
	},
	updated(el, binding) {
		if (!nodeList.has(el)) nodeList.set(el, []);
		const handlers = nodeList.get(el);
		const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
		const newHandler = {
			documentHandler: createDocumentHandler(el, binding),
			bindingFn: binding.value
		};
		if (oldHandlerIndex >= 0) handlers.splice(oldHandlerIndex, 1, newHandler);
		else handlers.push(newHandler);
	},
	unmounted(el) {
		nodeList.delete(el);
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/select/src/token.mjs
var selectGroupKey = Symbol("ElSelectGroup");
var selectKey = Symbol("ElSelect");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/select/src/useOption.mjs
init_shared_esm_bundler();
function useOption(props, states) {
	const select = inject(selectKey);
	const selectGroup = inject(selectGroupKey, { disabled: false });
	const isObject$1 = computed(() => isObject(props.value));
	const itemSelected = computed(() => {
		if (!select.props.multiple) return isEqual(props.value, select.props.modelValue);
		else return contains(select.props.modelValue, props.value);
	});
	const limitReached = computed(() => {
		if (select.props.multiple) {
			const modelValue = select.props.modelValue || [];
			return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
		} else return false;
	});
	const currentLabel = computed(() => {
		return props.label || (isObject$1.value ? "" : props.value);
	});
	const currentValue = computed(() => {
		return props.value || props.label || "";
	});
	const isDisabled = computed(() => {
		return props.disabled || states.groupDisabled || limitReached.value;
	});
	const instance = getCurrentInstance();
	const contains = (arr = [], target) => {
		if (!isObject$1.value) return arr && arr.includes(target);
		else {
			const valueKey = select.props.valueKey;
			return arr && arr.some((item) => {
				return toRaw(get(item, valueKey)) === get(target, valueKey);
			});
		}
	};
	const isEqual = (a, b) => {
		if (!isObject$1.value) return a === b;
		else {
			const { valueKey } = select.props;
			return get(a, valueKey) === get(b, valueKey);
		}
	};
	const hoverItem = () => {
		if (!props.disabled && !selectGroup.disabled) select.hoverIndex = select.optionsArray.indexOf(instance.proxy);
	};
	watch(() => currentLabel.value, () => {
		if (!props.created && !select.props.remote) select.setSelected();
	});
	watch(() => props.value, (val, oldVal) => {
		const { remote, valueKey } = select.props;
		if (!Object.is(val, oldVal)) {
			select.onOptionDestroy(oldVal, instance.proxy);
			select.onOptionCreate(instance.proxy);
		}
		if (!props.created && !remote) {
			if (valueKey && isObject(val) && isObject(oldVal) && val[valueKey] === oldVal[valueKey]) return;
			select.setSelected();
		}
	});
	watch(() => selectGroup.disabled, () => {
		states.groupDisabled = selectGroup.disabled;
	}, { immediate: true });
	const { queryChange } = toRaw(select);
	watch(queryChange, (changes) => {
		const { query } = unref(changes);
		states.visible = new RegExp(escapeStringRegexp(query), "i").test(currentLabel.value) || props.created;
		if (!states.visible) select.filteredOptionsCount--;
	}, { immediate: true });
	return {
		select,
		currentLabel,
		currentValue,
		itemSelected,
		isDisabled,
		hoverItem
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/select/src/option.mjs
var _sfc_main$3 = defineComponent({
	name: "ElOption",
	componentName: "ElOption",
	props: {
		value: {
			required: true,
			type: [
				String,
				Number,
				Boolean,
				Object
			]
		},
		label: [String, Number],
		created: Boolean,
		disabled: Boolean
	},
	setup(props) {
		const ns = useNamespace("select");
		const id = useId();
		const containerKls = computed(() => [
			ns.be("dropdown", "item"),
			ns.is("disabled", unref(isDisabled)),
			{
				selected: unref(itemSelected),
				hover: unref(hover)
			}
		]);
		const states = reactive({
			index: -1,
			groupDisabled: false,
			visible: true,
			hitState: false,
			hover: false
		});
		const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption(props, states);
		const { visible, hover } = toRefs(states);
		const vm = getCurrentInstance().proxy;
		select.onOptionCreate(vm);
		onBeforeUnmount(() => {
			const key = vm.value;
			const { selected } = select;
			const doesSelected = (select.props.multiple ? selected : [selected]).some((item) => {
				return item.value === vm.value;
			});
			nextTick(() => {
				if (select.cachedOptions.get(key) === vm && !doesSelected) select.cachedOptions.delete(key);
			});
			select.onOptionDestroy(key, vm);
		});
		function selectOptionClick() {
			if (props.disabled !== true && states.groupDisabled !== true) select.handleOptionSelect(vm);
		}
		return {
			ns,
			id,
			containerKls,
			currentLabel,
			itemSelected,
			isDisabled,
			select,
			hoverItem,
			visible,
			hover,
			selectOptionClick,
			states
		};
	}
});
var _hoisted_1$1 = [
	"id",
	"aria-disabled",
	"aria-selected"
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
	return withDirectives((openBlock(), createElementBlock("li", {
		id: _ctx.id,
		class: normalizeClass(_ctx.containerKls),
		role: "option",
		"aria-disabled": _ctx.isDisabled || void 0,
		"aria-selected": _ctx.itemSelected,
		onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
		onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
	}, [renderSlot(_ctx.$slots, "default", {}, () => [createBaseVNode("span", null, toDisplayString(_ctx.currentLabel), 1)])], 42, _hoisted_1$1)), [[vShow, _ctx.visible]]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/select/src/select-dropdown.mjs
var _sfc_main$2 = defineComponent({
	name: "ElSelectDropdown",
	componentName: "ElSelectDropdown",
	setup() {
		const select = inject(selectKey);
		const ns = useNamespace("select");
		const popperClass = computed(() => select.props.popperClass);
		const isMultiple = computed(() => select.props.multiple);
		const isFitInputWidth = computed(() => select.props.fitInputWidth);
		const minWidth = ref("");
		function updateMinWidth() {
			var _a;
			minWidth.value = `${(_a = select.selectWrapper) == null ? void 0 : _a.offsetWidth}px`;
		}
		onMounted(() => {
			updateMinWidth();
			useResizeObserver(select.selectWrapper, updateMinWidth);
		});
		return {
			ns,
			minWidth,
			popperClass,
			isMultiple,
			isFitInputWidth
		};
	}
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", {
		class: normalizeClass([
			_ctx.ns.b("dropdown"),
			_ctx.ns.is("multiple", _ctx.isMultiple),
			_ctx.popperClass
		]),
		style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
	}, [
		_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: normalizeClass(_ctx.ns.be("dropdown", "header"))
		}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("v-if", true),
		renderSlot(_ctx.$slots, "default"),
		_ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
			key: 1,
			class: normalizeClass(_ctx.ns.be("dropdown", "footer"))
		}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("v-if", true)
	], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/select/src/useSelect.mjs
init_shared_esm_bundler();
function useSelectStates(props) {
	const { t } = useLocale();
	return reactive({
		options: /* @__PURE__ */ new Map(),
		cachedOptions: /* @__PURE__ */ new Map(),
		disabledOptions: /* @__PURE__ */ new Map(),
		createdLabel: null,
		createdSelected: false,
		selected: props.multiple ? [] : {},
		inputLength: 20,
		inputWidth: 0,
		optionsCount: 0,
		filteredOptionsCount: 0,
		visible: false,
		selectedLabel: "",
		hoverIndex: -1,
		query: "",
		previousQuery: null,
		inputHovering: false,
		cachedPlaceHolder: "",
		currentPlaceholder: t("el.select.placeholder"),
		menuVisibleOnFocus: false,
		isOnComposition: false,
		prefixWidth: 11,
		mouseEnter: false,
		focused: false
	});
}
var useSelect = (props, states, ctx) => {
	const { t } = useLocale();
	const ns = useNamespace("select");
	useDeprecated({
		from: "suffixTransition",
		replacement: "override style scheme",
		version: "2.3.0",
		scope: "props",
		ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
	}, computed(() => props.suffixTransition === false));
	const reference = ref(null);
	const input = ref(null);
	const iOSInput = ref(null);
	const tooltipRef = ref(null);
	const tagTooltipRef = ref(null);
	const tags = ref(null);
	const selectWrapper = ref(null);
	const scrollbar = ref(null);
	const hoverOption = ref();
	const queryChange = shallowRef({ query: "" });
	const groupQueryChange = shallowRef("");
	const optionList = ref([]);
	let originClientHeight = 0;
	const { form, formItem } = useFormItem();
	const readonly = computed(() => !props.filterable || props.multiple || !states.visible);
	const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
	const showClose = computed(() => {
		const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
		return props.clearable && !selectDisabled.value && states.inputHovering && hasValue;
	});
	const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
	const iconReverse = computed(() => ns.is("reverse", iconComponent.value && states.visible && props.suffixTransition));
	const showStatusIconAndState = computed(() => (form == null ? void 0 : form.statusIcon) && (formItem == null ? void 0 : formItem.validateState) && ValidateComponentsMap[formItem == null ? void 0 : formItem.validateState]);
	const debounce$1 = computed(() => props.remote ? 300 : 0);
	const emptyText = computed(() => {
		if (props.loading) return props.loadingText || t("el.select.loading");
		else {
			if (props.remote && states.query === "" && states.options.size === 0) return false;
			if (props.filterable && states.query && states.options.size > 0 && states.filteredOptionsCount === 0) return props.noMatchText || t("el.select.noMatch");
			if (states.options.size === 0) return props.noDataText || t("el.select.noData");
		}
		return null;
	});
	const optionsArray = computed(() => {
		const list = Array.from(states.options.values());
		const newList = [];
		optionList.value.forEach((item) => {
			const index = list.findIndex((i) => i.currentLabel === item);
			if (index > -1) newList.push(list[index]);
		});
		return newList.length >= list.length ? newList : list;
	});
	const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
	const showNewOption = computed(() => {
		const hasExistingOption = optionsArray.value.filter((option) => {
			return !option.created;
		}).some((option) => {
			return option.currentLabel === states.query;
		});
		return props.filterable && props.allowCreate && states.query !== "" && !hasExistingOption;
	});
	const selectSize = useFormSize();
	const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
	const dropMenuVisible = computed({
		get() {
			return states.visible && emptyText.value !== false;
		},
		set(val) {
			states.visible = val;
		}
	});
	watch([
		() => selectDisabled.value,
		() => selectSize.value,
		() => form == null ? void 0 : form.size
	], () => {
		nextTick(() => {
			resetInputHeight();
		});
	});
	watch(() => props.placeholder, (val) => {
		states.cachedPlaceHolder = states.currentPlaceholder = val;
		if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) states.currentPlaceholder = "";
	});
	watch(() => props.modelValue, (val, oldVal) => {
		if (props.multiple) {
			resetInputHeight();
			if (val && val.length > 0 || input.value && states.query !== "") states.currentPlaceholder = "";
			else states.currentPlaceholder = states.cachedPlaceHolder;
			if (props.filterable && !props.reserveKeyword) {
				states.query = "";
				handleQueryChange(states.query);
			}
		}
		setSelected();
		if (props.filterable && !props.multiple) states.inputLength = 20;
		if (!isEqual(val, oldVal) && props.validateEvent) formItem?.validate("change").catch((err) => debugWarn(err));
	}, {
		flush: "post",
		deep: true
	});
	watch(() => states.visible, (val) => {
		var _a, _b, _c, _d, _e;
		if (!val) {
			if (props.filterable) {
				if (isFunction(props.filterMethod)) props.filterMethod("");
				if (isFunction(props.remoteMethod)) props.remoteMethod("");
			}
			states.query = "";
			states.previousQuery = null;
			states.selectedLabel = "";
			states.inputLength = 20;
			states.menuVisibleOnFocus = false;
			resetHoverIndex();
			nextTick(() => {
				if (input.value && input.value.value === "" && states.selected.length === 0) states.currentPlaceholder = states.cachedPlaceHolder;
			});
			if (!props.multiple) {
				if (states.selected) {
					if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) states.selectedLabel = states.createdLabel;
					else states.selectedLabel = states.selected.currentLabel;
					if (props.filterable) states.query = states.selectedLabel;
				}
				if (props.filterable) states.currentPlaceholder = states.cachedPlaceHolder;
			}
		} else {
			(_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null || _b.call(_a);
			if (props.filterable) {
				states.filteredOptionsCount = states.optionsCount;
				states.query = props.remote ? "" : states.selectedLabel;
				(_d = (_c = iOSInput.value) == null ? void 0 : _c.focus) == null || _d.call(_c);
				if (props.multiple) (_e = input.value) == null || _e.focus();
				else if (states.selectedLabel) {
					states.currentPlaceholder = `${states.selectedLabel}`;
					states.selectedLabel = "";
				}
				handleQueryChange(states.query);
				if (!props.multiple && !props.remote) {
					queryChange.value.query = "";
					triggerRef(queryChange);
					triggerRef(groupQueryChange);
				}
			}
		}
		ctx.emit("visible-change", val);
	});
	watch(() => states.options.entries(), () => {
		var _a, _b, _c;
		if (!isClient) return;
		(_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null || _b.call(_a);
		if (props.multiple) resetInputHeight();
		const inputs = ((_c = selectWrapper.value) == null ? void 0 : _c.querySelectorAll("input")) || [];
		if (!props.filterable && !props.defaultFirstOption && !isUndefined(props.modelValue) || !Array.from(inputs).includes(document.activeElement)) setSelected();
		if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) checkDefaultFirstOption();
	}, { flush: "post" });
	watch(() => states.hoverIndex, (val) => {
		if (isNumber(val) && val > -1) hoverOption.value = optionsArray.value[val] || {};
		else hoverOption.value = {};
		optionsArray.value.forEach((option) => {
			option.hover = hoverOption.value === option;
		});
	});
	const resetInputHeight = () => {
		nextTick(() => {
			var _a, _b;
			if (!reference.value) return;
			const input2 = reference.value.$el.querySelector("input");
			originClientHeight = originClientHeight || (input2.clientHeight > 0 ? input2.clientHeight + 2 : 0);
			const _tags = tags.value;
			const cssVarOfSelectSize = getComputedStyle(input2).getPropertyValue(ns.cssVarName("input-height"));
			const gotSize = Number.parseFloat(cssVarOfSelectSize) || getComponentSize(selectSize.value || (form == null ? void 0 : form.size));
			const sizeInMap = selectSize.value || gotSize === originClientHeight || originClientHeight <= 0 ? gotSize : originClientHeight;
			!(input2.offsetParent === null) && (input2.style.height = `${(states.selected.length === 0 ? sizeInMap : Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap)) - 2}px`);
			if (states.visible && emptyText.value !== false) (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null || _b.call(_a);
		});
	};
	const handleQueryChange = async (val) => {
		if (states.previousQuery === val || states.isOnComposition) return;
		if (states.previousQuery === null && (isFunction(props.filterMethod) || isFunction(props.remoteMethod))) {
			states.previousQuery = val;
			return;
		}
		states.previousQuery = val;
		nextTick(() => {
			var _a, _b;
			if (states.visible) (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null || _b.call(_a);
		});
		states.hoverIndex = -1;
		if (props.multiple && props.filterable) nextTick(() => {
			if (!selectDisabled.value) {
				const length = input.value.value.length * 15 + 20;
				states.inputLength = props.collapseTags ? Math.min(50, length) : length;
				managePlaceholder();
			}
			resetInputHeight();
		});
		if (props.remote && isFunction(props.remoteMethod)) {
			states.hoverIndex = -1;
			props.remoteMethod(val);
		} else if (isFunction(props.filterMethod)) {
			props.filterMethod(val);
			triggerRef(groupQueryChange);
		} else {
			states.filteredOptionsCount = states.optionsCount;
			queryChange.value.query = val;
			triggerRef(queryChange);
			triggerRef(groupQueryChange);
		}
		if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
			await nextTick();
			checkDefaultFirstOption();
		}
	};
	const managePlaceholder = () => {
		if (states.currentPlaceholder !== "") states.currentPlaceholder = input.value.value ? "" : states.cachedPlaceHolder;
	};
	const checkDefaultFirstOption = () => {
		const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
		const userCreatedOption = optionsInDropdown.find((n) => n.created);
		const firstOriginOption = optionsInDropdown[0];
		states.hoverIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
	};
	const setSelected = () => {
		var _a;
		if (!props.multiple) {
			const option = getOption(props.modelValue);
			if ((_a = option.props) == null ? void 0 : _a.created) {
				states.createdLabel = option.props.value;
				states.createdSelected = true;
			} else states.createdSelected = false;
			states.selectedLabel = option.currentLabel;
			states.selected = option;
			if (props.filterable) states.query = states.selectedLabel;
			return;
		} else states.selectedLabel = "";
		const result = [];
		if (Array.isArray(props.modelValue)) props.modelValue.forEach((value) => {
			result.push(getOption(value));
		});
		states.selected = result;
		nextTick(() => {
			resetInputHeight();
		});
	};
	const getOption = (value) => {
		let option;
		const isObjectValue = toRawType(value).toLowerCase() === "object";
		const isNull = toRawType(value).toLowerCase() === "null";
		const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
		for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
			const cachedOption = cachedOptionsArray.value[i];
			if (isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value) {
				option = {
					value,
					currentLabel: cachedOption.currentLabel,
					isDisabled: cachedOption.isDisabled
				};
				break;
			}
		}
		if (option) return option;
		const newOption = {
			value,
			currentLabel: isObjectValue ? value.label : !isNull && !isUndefined2 ? value : ""
		};
		if (props.multiple) newOption.hitState = false;
		return newOption;
	};
	const resetHoverIndex = () => {
		setTimeout(() => {
			const valueKey = props.valueKey;
			if (!props.multiple) states.hoverIndex = optionsArray.value.findIndex((item) => {
				return getValueKey(item) === getValueKey(states.selected);
			});
			else if (states.selected.length > 0) states.hoverIndex = Math.min.apply(null, states.selected.map((selected) => {
				return optionsArray.value.findIndex((item) => {
					return get(item, valueKey) === get(selected, valueKey);
				});
			}));
			else states.hoverIndex = -1;
		}, 300);
	};
	const handleResize = () => {
		var _a, _b;
		resetInputWidth();
		(_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null || _b.call(_a);
		props.multiple && resetInputHeight();
	};
	const resetInputWidth = () => {
		var _a;
		states.inputWidth = (_a = reference.value) == null ? void 0 : _a.$el.offsetWidth;
	};
	const onInputChange = () => {
		if (props.filterable && states.query !== states.selectedLabel) {
			states.query = states.selectedLabel;
			handleQueryChange(states.query);
		}
	};
	const debouncedOnInputChange = debounce(() => {
		onInputChange();
	}, debounce$1.value);
	const debouncedQueryChange = debounce((e) => {
		handleQueryChange(e.target.value);
	}, debounce$1.value);
	const emitChange = (val) => {
		if (!isEqual(props.modelValue, val)) ctx.emit(CHANGE_EVENT, val);
	};
	const getLastNotDisabledIndex = (value) => findLastIndex(value, (it) => !states.disabledOptions.has(it));
	const deletePrevTag = (e) => {
		if (e.code === EVENT_CODE.delete) return;
		if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
			const value = props.modelValue.slice();
			const lastNotDisabledIndex = getLastNotDisabledIndex(value);
			if (lastNotDisabledIndex < 0) return;
			value.splice(lastNotDisabledIndex, 1);
			ctx.emit(UPDATE_MODEL_EVENT, value);
			emitChange(value);
		}
		if (e.target.value.length === 1 && props.modelValue.length === 0) states.currentPlaceholder = states.cachedPlaceHolder;
	};
	const deleteTag = (event, tag) => {
		const index = states.selected.indexOf(tag);
		if (index > -1 && !selectDisabled.value) {
			const value = props.modelValue.slice();
			value.splice(index, 1);
			ctx.emit(UPDATE_MODEL_EVENT, value);
			emitChange(value);
			ctx.emit("remove-tag", tag.value);
		}
		event.stopPropagation();
		focus();
	};
	const deleteSelected = (event) => {
		event.stopPropagation();
		const value = props.multiple ? [] : "";
		if (!isString(value)) {
			for (const item of states.selected) if (item.isDisabled) value.push(item.value);
		}
		ctx.emit(UPDATE_MODEL_EVENT, value);
		emitChange(value);
		states.hoverIndex = -1;
		states.visible = false;
		ctx.emit("clear");
		focus();
	};
	const handleOptionSelect = (option) => {
		var _a;
		if (props.multiple) {
			const value = (props.modelValue || []).slice();
			const optionIndex = getValueIndex(value, option.value);
			if (optionIndex > -1) value.splice(optionIndex, 1);
			else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) value.push(option.value);
			ctx.emit(UPDATE_MODEL_EVENT, value);
			emitChange(value);
			if (option.created) {
				states.query = "";
				handleQueryChange("");
				states.inputLength = 20;
			}
			if (props.filterable) (_a = input.value) == null || _a.focus();
		} else {
			ctx.emit(UPDATE_MODEL_EVENT, option.value);
			emitChange(option.value);
			states.visible = false;
		}
		setSoftFocus();
		if (states.visible) return;
		nextTick(() => {
			scrollToOption(option);
		});
	};
	const getValueIndex = (arr = [], value) => {
		if (!isObject(value)) return arr.indexOf(value);
		const valueKey = props.valueKey;
		let index = -1;
		arr.some((item, i) => {
			if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
				index = i;
				return true;
			}
			return false;
		});
		return index;
	};
	const setSoftFocus = () => {
		const _input = input.value || reference.value;
		if (_input) _input?.focus();
	};
	const scrollToOption = (option) => {
		var _a, _b, _c, _d, _e;
		const targetOption = Array.isArray(option) ? option[0] : option;
		let target = null;
		if (targetOption == null ? void 0 : targetOption.value) {
			const options = optionsArray.value.filter((item) => item.value === targetOption.value);
			if (options.length > 0) target = options[0].$el;
		}
		if (tooltipRef.value && target) {
			const menu = (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${ns.be("dropdown", "wrap")}`);
			if (menu) scrollIntoView(menu, target);
		}
		(_e = scrollbar.value) == null || _e.handleScroll();
	};
	const onOptionCreate = (vm) => {
		states.optionsCount++;
		states.filteredOptionsCount++;
		states.options.set(vm.value, vm);
		states.cachedOptions.set(vm.value, vm);
		vm.disabled && states.disabledOptions.set(vm.value, vm);
	};
	const onOptionDestroy = (key, vm) => {
		if (states.options.get(key) === vm) {
			states.optionsCount--;
			states.filteredOptionsCount--;
			states.options.delete(key);
		}
	};
	const resetInputState = (e) => {
		if (e.code !== EVENT_CODE.backspace) toggleLastOptionHitState(false);
		states.inputLength = input.value.value.length * 15 + 20;
		resetInputHeight();
	};
	const toggleLastOptionHitState = (hit) => {
		if (!Array.isArray(states.selected)) return;
		const lastNotDisabledIndex = getLastNotDisabledIndex(states.selected.map((it) => it.value));
		const option = states.selected[lastNotDisabledIndex];
		if (!option) return;
		if (hit === true || hit === false) {
			option.hitState = hit;
			return hit;
		}
		option.hitState = !option.hitState;
		return option.hitState;
	};
	const handleComposition = (event) => {
		const text = event.target.value;
		if (event.type === "compositionend") {
			states.isOnComposition = false;
			nextTick(() => handleQueryChange(text));
		} else states.isOnComposition = !isKorean(text[text.length - 1] || "");
	};
	const handleMenuEnter = () => {
		nextTick(() => scrollToOption(states.selected));
	};
	const handleFocus = (event) => {
		if (!states.focused) {
			if (props.automaticDropdown || props.filterable) {
				if (props.filterable && !states.visible) states.menuVisibleOnFocus = true;
				states.visible = true;
			}
			states.focused = true;
			ctx.emit("focus", event);
		}
	};
	const focus = () => {
		var _a, _b;
		if (states.visible) (_a = input.value || reference.value) == null || _a.focus();
		else (_b = reference.value) == null || _b.focus();
	};
	const blur = () => {
		var _a, _b, _c;
		states.visible = false;
		(_a = reference.value) == null || _a.blur();
		(_c = (_b = iOSInput.value) == null ? void 0 : _b.blur) == null || _c.call(_b);
	};
	const handleBlur = (event) => {
		var _a, _b, _c;
		if (((_a = tooltipRef.value) == null ? void 0 : _a.isFocusInsideContent(event)) || ((_b = tagTooltipRef.value) == null ? void 0 : _b.isFocusInsideContent(event)) || ((_c = selectWrapper.value) == null ? void 0 : _c.contains(event.relatedTarget))) return;
		states.visible && handleClose();
		states.focused = false;
		ctx.emit("blur", event);
	};
	const handleClearClick = (event) => {
		deleteSelected(event);
	};
	const handleClose = () => {
		states.visible = false;
	};
	const handleKeydownEscape = (event) => {
		if (states.visible) {
			event.preventDefault();
			event.stopPropagation();
			states.visible = false;
		}
	};
	const toggleMenu = (e) => {
		if (e && !states.mouseEnter) return;
		if (!selectDisabled.value) {
			if (states.menuVisibleOnFocus) states.menuVisibleOnFocus = false;
			else if (!tooltipRef.value || !tooltipRef.value.isFocusInsideContent()) states.visible = !states.visible;
			focus();
		}
	};
	const selectOption = () => {
		if (!states.visible) toggleMenu();
		else if (optionsArray.value[states.hoverIndex]) handleOptionSelect(optionsArray.value[states.hoverIndex]);
	};
	const getValueKey = (item) => {
		return isObject(item.value) ? get(item.value, props.valueKey) : item.value;
	};
	const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
	const showTagList = computed(() => props.multiple ? states.selected.slice(0, props.maxCollapseTags) : []);
	const collapseTagList = computed(() => props.multiple ? states.selected.slice(props.maxCollapseTags) : []);
	const navigateOptions = (direction) => {
		if (!states.visible) {
			states.visible = true;
			return;
		}
		if (states.options.size === 0 || states.filteredOptionsCount === 0) return;
		if (states.isOnComposition) return;
		if (!optionsAllDisabled.value) {
			if (direction === "next") {
				states.hoverIndex++;
				if (states.hoverIndex === states.options.size) states.hoverIndex = 0;
			} else if (direction === "prev") {
				states.hoverIndex--;
				if (states.hoverIndex < 0) states.hoverIndex = states.options.size - 1;
			}
			const option = optionsArray.value[states.hoverIndex];
			if (option.disabled === true || option.states.groupDisabled === true || !option.visible) navigateOptions(direction);
			nextTick(() => scrollToOption(hoverOption.value));
		}
	};
	const handleMouseEnter = () => {
		states.mouseEnter = true;
	};
	const handleMouseLeave = () => {
		states.mouseEnter = false;
	};
	const handleDeleteTooltipTag = (event, tag) => {
		var _a, _b;
		deleteTag(event, tag);
		(_b = (_a = tagTooltipRef.value) == null ? void 0 : _a.updatePopper) == null || _b.call(_a);
	};
	return {
		optionList,
		optionsArray,
		hoverOption,
		selectSize,
		handleResize,
		debouncedOnInputChange,
		debouncedQueryChange,
		deletePrevTag,
		deleteTag,
		deleteSelected,
		handleOptionSelect,
		scrollToOption,
		readonly,
		resetInputHeight,
		showClose,
		iconComponent,
		iconReverse,
		showNewOption,
		collapseTagSize,
		setSelected,
		managePlaceholder,
		selectDisabled,
		emptyText,
		toggleLastOptionHitState,
		resetInputState,
		handleComposition,
		onOptionCreate,
		onOptionDestroy,
		handleMenuEnter,
		handleFocus,
		focus,
		blur,
		handleBlur,
		handleClearClick,
		handleClose,
		handleKeydownEscape,
		toggleMenu,
		selectOption,
		getValueKey,
		navigateOptions,
		handleDeleteTooltipTag,
		dropMenuVisible,
		queryChange,
		groupQueryChange,
		showTagList,
		collapseTagList,
		selectTagsStyle: computed(() => ({
			maxWidth: `${unref(states.inputWidth) - 32 - (showStatusIconAndState.value ? 22 : 0)}px`,
			width: "100%"
		})),
		reference,
		input,
		iOSInput,
		tooltipRef,
		tagTooltipRef,
		tags,
		selectWrapper,
		scrollbar,
		handleMouseEnter,
		handleMouseLeave
	};
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/select/src/options.mjs
init_shared_esm_bundler();
var ElOptions = defineComponent({
	name: "ElOptions",
	emits: ["update-options"],
	setup(_, { slots, emit }) {
		let cachedOptions = [];
		function isSameOptions(a, b) {
			if (a.length !== b.length) return false;
			for (const [index] of a.entries()) if (a[index] != b[index]) return false;
			return true;
		}
		return () => {
			var _a, _b;
			const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
			const filteredOptions = [];
			function filterOptions(children2) {
				if (!Array.isArray(children2)) return;
				children2.forEach((item) => {
					var _a2, _b2, _c, _d;
					const name = (_a2 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a2.name;
					if (name === "ElOptionGroup") filterOptions(!isString(item.children) && !Array.isArray(item.children) && isFunction((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children);
					else if (name === "ElOption") filteredOptions.push((_d = item.props) == null ? void 0 : _d.label);
					else if (Array.isArray(item.children)) filterOptions(item.children);
				});
			}
			if (children.length) filterOptions((_b = children[0]) == null ? void 0 : _b.children);
			if (!isSameOptions(filteredOptions, cachedOptions)) {
				cachedOptions = filteredOptions;
				emit("update-options", filteredOptions);
			}
			return children;
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/select/src/select.mjs
var COMPONENT_NAME = "ElSelect";
var _sfc_main$1 = defineComponent({
	name: COMPONENT_NAME,
	componentName: COMPONENT_NAME,
	components: {
		ElInput,
		ElSelectMenu,
		ElOption: Option,
		ElOptions,
		ElTag,
		ElScrollbar,
		ElTooltip,
		ElIcon
	},
	directives: { ClickOutside },
	props: {
		name: String,
		id: String,
		modelValue: {
			type: [
				Array,
				String,
				Number,
				Boolean,
				Object
			],
			default: void 0
		},
		autocomplete: {
			type: String,
			default: "off"
		},
		automaticDropdown: Boolean,
		size: {
			type: String,
			validator: isValidComponentSize
		},
		effect: {
			type: String,
			default: "light"
		},
		disabled: Boolean,
		clearable: Boolean,
		filterable: Boolean,
		allowCreate: Boolean,
		loading: Boolean,
		popperClass: {
			type: String,
			default: ""
		},
		popperOptions: {
			type: Object,
			default: () => ({})
		},
		remote: Boolean,
		loadingText: String,
		noMatchText: String,
		noDataText: String,
		remoteMethod: Function,
		filterMethod: Function,
		multiple: Boolean,
		multipleLimit: {
			type: Number,
			default: 0
		},
		placeholder: { type: String },
		defaultFirstOption: Boolean,
		reserveKeyword: {
			type: Boolean,
			default: true
		},
		valueKey: {
			type: String,
			default: "value"
		},
		collapseTags: Boolean,
		collapseTagsTooltip: Boolean,
		maxCollapseTags: {
			type: Number,
			default: 1
		},
		teleported: useTooltipContentProps.teleported,
		persistent: {
			type: Boolean,
			default: true
		},
		clearIcon: {
			type: iconPropType,
			default: circle_close_default
		},
		fitInputWidth: Boolean,
		suffixIcon: {
			type: iconPropType,
			default: arrow_down_default
		},
		tagType: {
			...tagProps.type,
			default: "info"
		},
		validateEvent: {
			type: Boolean,
			default: true
		},
		remoteShowSuffix: Boolean,
		suffixTransition: {
			type: Boolean,
			default: true
		},
		placement: {
			type: String,
			values: Ee,
			default: "bottom-start"
		},
		ariaLabel: {
			type: String,
			default: void 0
		}
	},
	emits: [
		UPDATE_MODEL_EVENT,
		CHANGE_EVENT,
		"remove-tag",
		"clear",
		"visible-change",
		"focus",
		"blur"
	],
	setup(props, ctx) {
		const nsSelect = useNamespace("select");
		const nsInput = useNamespace("input");
		const { t } = useLocale();
		const contentId = useId();
		const states = useSelectStates(props);
		const { optionList, optionsArray, hoverOption, selectSize, readonly, handleResize, collapseTagSize, debouncedOnInputChange, debouncedQueryChange, deletePrevTag, deleteTag, deleteSelected, handleOptionSelect, scrollToOption, setSelected, resetInputHeight, managePlaceholder, showClose, selectDisabled, iconComponent, iconReverse, showNewOption, emptyText, toggleLastOptionHitState, resetInputState, handleComposition, onOptionCreate, onOptionDestroy, handleMenuEnter, handleFocus, focus, blur, handleBlur, handleClearClick, handleClose, handleKeydownEscape, toggleMenu, selectOption, getValueKey, navigateOptions, handleDeleteTooltipTag, dropMenuVisible, reference, input, iOSInput, tooltipRef, tagTooltipRef, tags, selectWrapper, scrollbar, queryChange, groupQueryChange, handleMouseEnter, handleMouseLeave, showTagList, collapseTagList, selectTagsStyle } = useSelect(props, states, ctx);
		const { inputWidth, selected, inputLength, filteredOptionsCount, visible, selectedLabel, hoverIndex, query, inputHovering, currentPlaceholder, menuVisibleOnFocus, isOnComposition, options, cachedOptions, optionsCount, prefixWidth } = toRefs(states);
		const wrapperKls = computed(() => {
			const classList = [nsSelect.b()];
			const _selectSize = unref(selectSize);
			if (_selectSize) classList.push(nsSelect.m(_selectSize));
			if (props.disabled) classList.push(nsSelect.m("disabled"));
			return classList;
		});
		const tagsKls = computed(() => [nsSelect.e("tags"), nsSelect.is("disabled", unref(selectDisabled))]);
		const tagWrapperKls = computed(() => [nsSelect.b("tags-wrapper"), { "has-prefix": unref(prefixWidth) && unref(selected).length }]);
		const inputKls = computed(() => [
			nsSelect.e("input"),
			nsSelect.is(unref(selectSize)),
			nsSelect.is("disabled", unref(selectDisabled))
		]);
		const iOSInputKls = computed(() => [
			nsSelect.e("input"),
			nsSelect.is(unref(selectSize)),
			nsSelect.em("input", "iOS")
		]);
		const scrollbarKls = computed(() => [nsSelect.is("empty", !props.allowCreate && Boolean(unref(query)) && unref(filteredOptionsCount) === 0)]);
		const tagTextStyle = computed(() => {
			return { maxWidth: `${unref(inputWidth) > 123 && unref(selected).length > props.maxCollapseTags ? unref(inputWidth) - 123 : unref(inputWidth) - 75}px` };
		});
		const inputStyle = computed(() => ({
			marginLeft: `${unref(prefixWidth)}px`,
			flexGrow: 1,
			width: `${unref(inputLength) / (unref(inputWidth) - 32)}%`,
			maxWidth: `${unref(inputWidth) - 42}px`
		}));
		provide(selectKey, reactive({
			props,
			options,
			optionsArray,
			cachedOptions,
			optionsCount,
			filteredOptionsCount,
			hoverIndex,
			handleOptionSelect,
			onOptionCreate,
			onOptionDestroy,
			selectWrapper,
			selected,
			setSelected,
			queryChange,
			groupQueryChange
		}));
		onMounted(() => {
			states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || (() => t("el.select.placeholder"));
			if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) currentPlaceholder.value = "";
			useResizeObserver(selectWrapper, handleResize);
			if (props.remote && props.multiple) resetInputHeight();
			nextTick(() => {
				const refEl = reference.value && reference.value.$el;
				if (!refEl) return;
				inputWidth.value = refEl.getBoundingClientRect().width;
				if (ctx.slots.prefix) {
					const prefix = refEl.querySelector(`.${nsInput.e("prefix")}`);
					prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 11, 30);
				}
			});
			setSelected();
		});
		if (props.multiple && !Array.isArray(props.modelValue)) ctx.emit(UPDATE_MODEL_EVENT, []);
		if (!props.multiple && Array.isArray(props.modelValue)) ctx.emit(UPDATE_MODEL_EVENT, "");
		const popperPaneRef = computed(() => {
			var _a, _b;
			return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
		});
		const onOptionsRendered = (v) => {
			optionList.value = v;
		};
		return {
			isIOS,
			onOptionsRendered,
			prefixWidth,
			selectSize,
			readonly,
			handleResize,
			collapseTagSize,
			debouncedOnInputChange,
			debouncedQueryChange,
			deletePrevTag,
			deleteTag,
			handleDeleteTooltipTag,
			deleteSelected,
			handleOptionSelect,
			scrollToOption,
			inputWidth,
			selected,
			inputLength,
			filteredOptionsCount,
			visible,
			selectedLabel,
			hoverIndex,
			query,
			inputHovering,
			currentPlaceholder,
			menuVisibleOnFocus,
			isOnComposition,
			options,
			resetInputHeight,
			managePlaceholder,
			showClose,
			selectDisabled,
			iconComponent,
			iconReverse,
			showNewOption,
			emptyText,
			toggleLastOptionHitState,
			resetInputState,
			handleComposition,
			handleMenuEnter,
			handleFocus,
			focus,
			blur,
			handleBlur,
			handleClearClick,
			handleClose,
			handleKeydownEscape,
			toggleMenu,
			selectOption,
			getValueKey,
			navigateOptions,
			dropMenuVisible,
			reference,
			input,
			iOSInput,
			tooltipRef,
			popperPaneRef,
			tags,
			selectWrapper,
			scrollbar,
			wrapperKls,
			tagsKls,
			tagWrapperKls,
			inputKls,
			iOSInputKls,
			scrollbarKls,
			selectTagsStyle,
			nsSelect,
			tagTextStyle,
			inputStyle,
			handleMouseEnter,
			handleMouseLeave,
			showTagList,
			collapseTagList,
			tagTooltipRef,
			contentId,
			hoverOption
		};
	}
});
var _hoisted_1 = [
	"disabled",
	"autocomplete",
	"aria-activedescendant",
	"aria-controls",
	"aria-expanded",
	"aria-label"
];
var _hoisted_2 = ["disabled"];
var _hoisted_3 = { style: {
	"height": "100%",
	"display": "flex",
	"justify-content": "center",
	"align-items": "center"
} };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_el_tag = resolveComponent("el-tag");
	const _component_el_tooltip = resolveComponent("el-tooltip");
	const _component_el_icon = resolveComponent("el-icon");
	const _component_el_input = resolveComponent("el-input");
	const _component_el_option = resolveComponent("el-option");
	const _component_el_options = resolveComponent("el-options");
	const _component_el_scrollbar = resolveComponent("el-scrollbar");
	const _component_el_select_menu = resolveComponent("el-select-menu");
	const _directive_click_outside = resolveDirective("click-outside");
	return withDirectives((openBlock(), createElementBlock("div", {
		ref: "selectWrapper",
		class: normalizeClass(_ctx.wrapperKls),
		onMouseenter: _cache[22] || (_cache[22] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
		onMouseleave: _cache[23] || (_cache[23] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args)),
		onClick: _cache[24] || (_cache[24] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
	}, [createVNode(_component_el_tooltip, {
		ref: "tooltipRef",
		visible: _ctx.dropMenuVisible,
		placement: _ctx.placement,
		teleported: _ctx.teleported,
		"popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
		"popper-options": _ctx.popperOptions,
		"fallback-placements": [
			"bottom-start",
			"top-start",
			"right",
			"left"
		],
		effect: _ctx.effect,
		pure: "",
		trigger: "click",
		transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
		"stop-popper-mouse-event": false,
		"gpu-acceleration": false,
		persistent: _ctx.persistent,
		onShow: _ctx.handleMenuEnter
	}, {
		default: withCtx(() => {
			var _a, _b;
			return [createBaseVNode("div", {
				class: "select-trigger",
				onMouseenter: _cache[20] || (_cache[20] = ($event) => _ctx.inputHovering = true),
				onMouseleave: _cache[21] || (_cache[21] = ($event) => _ctx.inputHovering = false)
			}, [
				_ctx.multiple ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref: "tags",
					tabindex: "-1",
					class: normalizeClass(_ctx.tagsKls),
					style: normalizeStyle(_ctx.selectTagsStyle),
					onClick: _cache[15] || (_cache[15] = (...args) => _ctx.focus && _ctx.focus(...args))
				}, [
					_ctx.collapseTags && _ctx.selected.length ? (openBlock(), createBlock(Transition, {
						key: 0,
						onAfterLeave: _ctx.resetInputHeight
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.tagWrapperKls) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showTagList, (item) => {
							return openBlock(), createBlock(_component_el_tag, {
								key: _ctx.getValueKey(item),
								closable: !_ctx.selectDisabled && !item.isDisabled,
								size: _ctx.collapseTagSize,
								hit: item.hitState,
								type: _ctx.tagType,
								"disable-transitions": "",
								onClose: ($event) => _ctx.deleteTag($event, item)
							}, {
								default: withCtx(() => [createBaseVNode("span", {
									class: normalizeClass(_ctx.nsSelect.e("tags-text")),
									style: normalizeStyle(_ctx.tagTextStyle)
								}, toDisplayString(item.currentLabel), 7)]),
								_: 2
							}, 1032, [
								"closable",
								"size",
								"hit",
								"type",
								"onClose"
							]);
						}), 128)), _ctx.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tag, {
							key: 0,
							closable: false,
							size: _ctx.collapseTagSize,
							type: _ctx.tagType,
							"disable-transitions": ""
						}, {
							default: withCtx(() => [_ctx.collapseTagsTooltip ? (openBlock(), createBlock(_component_el_tooltip, {
								key: 0,
								ref: "tagTooltipRef",
								disabled: _ctx.dropMenuVisible,
								"fallback-placements": [
									"bottom",
									"top",
									"right",
									"left"
								],
								effect: _ctx.effect,
								placement: "bottom",
								teleported: _ctx.teleported
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.nsSelect.e("tags-text")) }, "+ " + toDisplayString(_ctx.selected.length - _ctx.maxCollapseTags), 3)]),
								content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.nsSelect.e("collapse-tags")) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collapseTagList, (item) => {
									return openBlock(), createElementBlock("div", {
										key: _ctx.getValueKey(item),
										class: normalizeClass(_ctx.nsSelect.e("collapse-tag"))
									}, [createVNode(_component_el_tag, {
										class: "in-tooltip",
										closable: !_ctx.selectDisabled && !item.isDisabled,
										size: _ctx.collapseTagSize,
										hit: item.hitState,
										type: _ctx.tagType,
										"disable-transitions": "",
										style: { margin: "2px" },
										onClose: ($event) => _ctx.handleDeleteTooltipTag($event, item)
									}, {
										default: withCtx(() => [createBaseVNode("span", {
											class: normalizeClass(_ctx.nsSelect.e("tags-text")),
											style: normalizeStyle({ maxWidth: _ctx.inputWidth - 75 + "px" })
										}, toDisplayString(item.currentLabel), 7)]),
										_: 2
									}, 1032, [
										"closable",
										"size",
										"hit",
										"type",
										"onClose"
									])], 2);
								}), 128))], 2)]),
								_: 1
							}, 8, [
								"disabled",
								"effect",
								"teleported"
							])) : (openBlock(), createElementBlock("span", {
								key: 1,
								class: normalizeClass(_ctx.nsSelect.e("tags-text"))
							}, "+ " + toDisplayString(_ctx.selected.length - _ctx.maxCollapseTags), 3))]),
							_: 1
						}, 8, ["size", "type"])) : createCommentVNode("v-if", true)], 2)]),
						_: 1
					}, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
					!_ctx.collapseTags ? (openBlock(), createBlock(Transition, {
						key: 1,
						onAfterLeave: _ctx.resetInputHeight
					}, {
						default: withCtx(() => [createBaseVNode("span", {
							class: normalizeClass(_ctx.tagWrapperKls),
							style: normalizeStyle(_ctx.prefixWidth && _ctx.selected.length ? { marginLeft: `${_ctx.prefixWidth}px` } : "")
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected, (item) => {
							return openBlock(), createBlock(_component_el_tag, {
								key: _ctx.getValueKey(item),
								closable: !_ctx.selectDisabled && !item.isDisabled,
								size: _ctx.collapseTagSize,
								hit: item.hitState,
								type: _ctx.tagType,
								"disable-transitions": "",
								onClose: ($event) => _ctx.deleteTag($event, item)
							}, {
								default: withCtx(() => [createBaseVNode("span", {
									class: normalizeClass(_ctx.nsSelect.e("tags-text")),
									style: normalizeStyle({ maxWidth: _ctx.inputWidth - 75 + "px" })
								}, toDisplayString(item.currentLabel), 7)]),
								_: 2
							}, 1032, [
								"closable",
								"size",
								"hit",
								"type",
								"onClose"
							]);
						}), 128))], 6)]),
						_: 1
					}, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
					_ctx.filterable && !_ctx.selectDisabled ? withDirectives((openBlock(), createElementBlock("input", {
						key: 2,
						ref: "input",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.query = $event),
						type: "text",
						class: normalizeClass(_ctx.inputKls),
						disabled: _ctx.selectDisabled,
						autocomplete: _ctx.autocomplete,
						style: normalizeStyle(_ctx.inputStyle),
						role: "combobox",
						"aria-activedescendant": ((_a = _ctx.hoverOption) == null ? void 0 : _a.id) || "",
						"aria-controls": _ctx.contentId,
						"aria-expanded": _ctx.dropMenuVisible,
						"aria-label": _ctx.ariaLabel,
						"aria-autocomplete": "none",
						"aria-haspopup": "listbox",
						onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
						onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
						onKeyup: _cache[3] || (_cache[3] = (...args) => _ctx.managePlaceholder && _ctx.managePlaceholder(...args)),
						onKeydown: [
							_cache[4] || (_cache[4] = (...args) => _ctx.resetInputState && _ctx.resetInputState(...args)),
							_cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])),
							_cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])),
							_cache[7] || (_cache[7] = withKeys((...args) => _ctx.handleKeydownEscape && _ctx.handleKeydownEscape(...args), ["esc"])),
							_cache[8] || (_cache[8] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
							_cache[9] || (_cache[9] = withKeys((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["delete"])),
							_cache[10] || (_cache[10] = withKeys(($event) => _ctx.visible = false, ["tab"]))
						],
						onCompositionstart: _cache[11] || (_cache[11] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
						onCompositionupdate: _cache[12] || (_cache[12] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
						onCompositionend: _cache[13] || (_cache[13] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
						onInput: _cache[14] || (_cache[14] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args))
					}, null, 46, _hoisted_1)), [[vModelText, _ctx.query]]) : createCommentVNode("v-if", true)
				], 6)) : createCommentVNode("v-if", true),
				_ctx.isIOS && !_ctx.multiple && _ctx.filterable && _ctx.readonly ? (openBlock(), createElementBlock("input", {
					key: 1,
					ref: "iOSInput",
					class: normalizeClass(_ctx.iOSInputKls),
					disabled: _ctx.selectDisabled,
					type: "text"
				}, null, 10, _hoisted_2)) : createCommentVNode("v-if", true),
				createVNode(_component_el_input, {
					id: _ctx.id,
					ref: "reference",
					modelValue: _ctx.selectedLabel,
					"onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.selectedLabel = $event),
					type: "text",
					placeholder: typeof _ctx.currentPlaceholder === "function" ? _ctx.currentPlaceholder() : _ctx.currentPlaceholder,
					name: _ctx.name,
					autocomplete: _ctx.autocomplete,
					size: _ctx.selectSize,
					disabled: _ctx.selectDisabled,
					readonly: _ctx.readonly,
					"validate-event": false,
					class: normalizeClass([_ctx.nsSelect.is("focus", _ctx.visible)]),
					tabindex: _ctx.multiple && _ctx.filterable ? -1 : void 0,
					role: "combobox",
					"aria-activedescendant": ((_b = _ctx.hoverOption) == null ? void 0 : _b.id) || "",
					"aria-controls": _ctx.contentId,
					"aria-expanded": _ctx.dropMenuVisible,
					label: _ctx.ariaLabel,
					"aria-autocomplete": "none",
					"aria-haspopup": "listbox",
					onFocus: _ctx.handleFocus,
					onBlur: _ctx.handleBlur,
					onInput: _ctx.debouncedOnInputChange,
					onPaste: _ctx.debouncedOnInputChange,
					onCompositionstart: _ctx.handleComposition,
					onCompositionupdate: _ctx.handleComposition,
					onCompositionend: _ctx.handleComposition,
					onKeydown: [
						_cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
						_cache[18] || (_cache[18] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
						withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
						withKeys(_ctx.handleKeydownEscape, ["esc"]),
						_cache[19] || (_cache[19] = withKeys(($event) => _ctx.visible = false, ["tab"]))
					]
				}, createSlots({
					suffix: withCtx(() => [_ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
						key: 0,
						class: normalizeClass([
							_ctx.nsSelect.e("caret"),
							_ctx.nsSelect.e("icon"),
							_ctx.iconReverse
						])
					}, {
						default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("v-if", true), _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
						key: 1,
						class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
						onClick: _ctx.handleClearClick
					}, {
						default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))]),
						_: 1
					}, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)]),
					_: 2
				}, [_ctx.$slots.prefix ? {
					name: "prefix",
					fn: withCtx(() => [createBaseVNode("div", _hoisted_3, [renderSlot(_ctx.$slots, "prefix")])])
				} : void 0]), 1032, [
					"id",
					"modelValue",
					"placeholder",
					"name",
					"autocomplete",
					"size",
					"disabled",
					"readonly",
					"class",
					"tabindex",
					"aria-activedescendant",
					"aria-controls",
					"aria-expanded",
					"label",
					"onFocus",
					"onBlur",
					"onInput",
					"onPaste",
					"onCompositionstart",
					"onCompositionupdate",
					"onCompositionend",
					"onKeydown"
				])
			], 32)];
		}),
		content: withCtx(() => [createVNode(_component_el_select_menu, null, createSlots({
			default: withCtx(() => [withDirectives(createVNode(_component_el_scrollbar, {
				id: _ctx.contentId,
				ref: "scrollbar",
				tag: "ul",
				"wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
				"view-class": _ctx.nsSelect.be("dropdown", "list"),
				class: normalizeClass(_ctx.scrollbarKls),
				role: "listbox",
				"aria-label": _ctx.ariaLabel,
				"aria-orientation": "vertical"
			}, {
				default: withCtx(() => [_ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
					key: 0,
					value: _ctx.query,
					created: true
				}, null, 8, ["value"])) : createCommentVNode("v-if", true), createVNode(_component_el_options, { onUpdateOptions: _ctx.onOptionsRendered }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, ["onUpdateOptions"])]),
				_: 3
			}, 8, [
				"id",
				"wrap-class",
				"view-class",
				"class",
				"aria-label"
			]), [[vShow, _ctx.options.size > 0 && !_ctx.loading]]), _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [_ctx.$slots.empty ? renderSlot(_ctx.$slots, "empty", { key: 0 }) : (openBlock(), createElementBlock("p", {
				key: 1,
				class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
			}, toDisplayString(_ctx.emptyText), 3))], 64)) : createCommentVNode("v-if", true)]),
			_: 2
		}, [_ctx.$slots.header ? {
			name: "header",
			fn: withCtx(() => [renderSlot(_ctx.$slots, "header")])
		} : void 0, _ctx.$slots.footer ? {
			name: "footer",
			fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")])
		} : void 0]), 1024)]),
		_: 3
	}, 8, [
		"visible",
		"placement",
		"teleported",
		"popper-class",
		"popper-options",
		"effect",
		"transition",
		"persistent",
		"onShow"
	])], 34)), [[
		_directive_click_outside,
		_ctx.handleClose,
		_ctx.popperPaneRef
	]]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/select/src/option-group.mjs
var _sfc_main = defineComponent({
	name: "ElOptionGroup",
	componentName: "ElOptionGroup",
	props: {
		label: String,
		disabled: Boolean
	},
	setup(props) {
		const ns = useNamespace("select");
		const visible = ref(true);
		const instance = getCurrentInstance();
		const children = ref([]);
		provide(selectGroupKey, reactive({ ...toRefs(props) }));
		const select = inject(selectKey);
		onMounted(() => {
			children.value = flattedChildren(instance.subTree);
		});
		const flattedChildren = (node) => {
			const children2 = [];
			if (Array.isArray(node.children)) node.children.forEach((child) => {
				var _a;
				if (child.type && child.type.name === "ElOption" && child.component && child.component.proxy) children2.push(child.component.proxy);
				else if ((_a = child.children) == null ? void 0 : _a.length) children2.push(...flattedChildren(child));
			});
			return children2;
		};
		const { groupQueryChange } = toRaw(select);
		watch(groupQueryChange, () => {
			visible.value = children.value.some((option) => option.visible === true);
		}, { flush: "post" });
		return {
			visible,
			ns
		};
	}
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return withDirectives((openBlock(), createElementBlock("ul", { class: normalizeClass(_ctx.ns.be("group", "wrap")) }, [createBaseVNode("li", { class: normalizeClass(_ctx.ns.be("group", "title")) }, toDisplayString(_ctx.label), 3), createBaseVNode("li", null, [createBaseVNode("ul", { class: normalizeClass(_ctx.ns.b("group")) }, [renderSlot(_ctx.$slots, "default")], 2)])], 2)), [[vShow, _ctx.visible]]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/select/index.mjs
var ElSelect = withInstall(Select, {
	Option,
	OptionGroup
});
var ElOption = withNoopInstall(Option);
var ElOptionGroup = withNoopInstall(OptionGroup);
//#endregion
export { isBuffer as C, identity as D, isArrayLike as E, baseUnary as S, isPrototype as T, keys as _, isEqual as a, isTypedArray as b, hasIn as c, getAllKeys as d, baseGetAllKeys as f, arrayPush as g, Stack as h, ClickOutside as i, Uint8Array as l, stubArray as m, ElOptionGroup as n, debounce as o, getSymbols as p, ElSelect as r, baseIteratee as s, ElOption as t, _getTag_default as u, overArg as v, isArguments as w, nodeUtil as x, arrayLikeKeys as y };
