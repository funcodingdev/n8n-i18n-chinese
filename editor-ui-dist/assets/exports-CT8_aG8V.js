//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/debug-build.js
var DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/worldwide.js
var GLOBAL_OBJ = globalThis;
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/version.js
var SDK_VERSION = "10.70.0";
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/carrier.js
function getMainCarrier() {
	getSentryCarrier(GLOBAL_OBJ);
	return GLOBAL_OBJ;
}
function getSentryCarrier(carrier) {
	const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
	__SENTRY__.version = __SENTRY__.version || "10.70.0";
	return __SENTRY__[SDK_VERSION] = __SENTRY__["10.70.0"] || {};
}
function getGlobalSingleton(name, creator, obj = GLOBAL_OBJ) {
	const __SENTRY__ = obj.__SENTRY__ = obj.__SENTRY__ || {};
	const carrier = __SENTRY__[SDK_VERSION] = __SENTRY__["10.70.0"] || {};
	return carrier[name] || (carrier[name] = creator());
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/debug-logger.js
var CONSOLE_LEVELS = [
	"debug",
	"info",
	"warn",
	"error",
	"log",
	"assert",
	"trace"
];
var PREFIX = "Sentry Logger ";
var originalConsoleMethods = {};
function consoleSandbox(callback) {
	if (!("console" in GLOBAL_OBJ)) return callback();
	const console = GLOBAL_OBJ.console;
	const wrappedFuncs = {};
	const wrappedLevels = Object.keys(originalConsoleMethods);
	wrappedLevels.forEach((level) => {
		const originalConsoleMethod = originalConsoleMethods[level];
		wrappedFuncs[level] = console[level];
		console[level] = originalConsoleMethod;
	});
	try {
		return callback();
	} finally {
		wrappedLevels.forEach((level) => {
			console[level] = wrappedFuncs[level];
		});
	}
}
function enable() {
	_getLoggerSettings().enabled = true;
}
function disable() {
	_getLoggerSettings().enabled = false;
}
function isEnabled() {
	return _getLoggerSettings().enabled;
}
function log(...args) {
	_maybeLog("log", ...args);
}
function warn(...args) {
	_maybeLog("warn", ...args);
}
function error(...args) {
	_maybeLog("error", ...args);
}
function _maybeLog(level, ...args) {
	if (!DEBUG_BUILD) return;
	if (isEnabled()) consoleSandbox(() => {
		GLOBAL_OBJ.console[level](`${PREFIX}[${level}]:`, ...args);
	});
}
function _getLoggerSettings() {
	if (!DEBUG_BUILD) return { enabled: false };
	return getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
}
var debug = {
	enable,
	disable,
	isEnabled,
	log,
	warn,
	error
};
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/stacktrace.js
var STACKTRACE_FRAME_LIMIT = 50;
var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
var STRIP_FRAME_REGEXP = /captureMessage|captureException/;
function createStackParser(...parsers) {
	const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
	return (stack, skipFirstLines = 0, framesToPop = 0) => {
		const frames = [];
		const lines = stack.split("\n");
		for (let i = skipFirstLines; i < lines.length; i++) {
			let line = lines[i];
			if (line.length > 1024) line = line.slice(0, 1024);
			const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
			if (cleanedLine.includes("Error: ")) continue;
			for (const parser of sortedParsers) {
				const frame = parser(cleanedLine);
				if (frame) {
					frames.push(frame);
					break;
				}
			}
			if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) break;
		}
		return stripSentryFramesAndReverse(frames.slice(framesToPop));
	};
}
function stackParserFromStackParserOptions(stackParser) {
	if (Array.isArray(stackParser)) return createStackParser(...stackParser);
	return stackParser;
}
function stripSentryFramesAndReverse(stack) {
	if (!stack.length) return [];
	const localStack = Array.from(stack);
	if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) localStack.pop();
	localStack.reverse();
	if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
		localStack.pop();
		if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) localStack.pop();
	}
	return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
		...frame,
		filename: frame.filename || getLastStackFrame(localStack).filename,
		function: frame.function || "?"
	}));
}
function getLastStackFrame(arr) {
	return arr[arr.length - 1] || {};
}
var defaultFunctionName = "<anonymous>";
function getFunctionName(fn) {
	try {
		if (!fn || typeof fn !== "function") return defaultFunctionName;
		return fn.name || defaultFunctionName;
	} catch {
		return defaultFunctionName;
	}
}
function getFramesFromEvent(event) {
	const exception = event.exception;
	if (exception) {
		const frames = [];
		try {
			exception.values.forEach((value) => {
				if (value.stacktrace.frames) frames.push(...value.stacktrace.frames);
			});
			return frames;
		} catch {
			return;
		}
	}
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/is.js
var objectToString = Object.prototype.toString;
function isError(wat) {
	switch (objectToString.call(wat)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
		case "[object WebAssembly.Exception]": return true;
		default: return isInstanceOf(wat, Error);
	}
}
function isBuiltin(wat, className) {
	return objectToString.call(wat) === `[object ${className}]`;
}
function isErrorEvent(wat) {
	return isBuiltin(wat, "ErrorEvent");
}
function isDOMError(wat) {
	return isBuiltin(wat, "DOMError");
}
function isDOMException(wat) {
	return isBuiltin(wat, "DOMException");
}
function isString(wat) {
	return isBuiltin(wat, "String");
}
function isParameterizedString(wat) {
	return typeof wat === "object" && wat !== null && "__sentry_template_string__" in wat && "__sentry_template_values__" in wat;
}
function isPrimitive(wat) {
	return wat === null || isParameterizedString(wat) || typeof wat !== "object" && typeof wat !== "function";
}
function isPlainObject(wat) {
	return isBuiltin(wat, "Object");
}
function isObjectLike(wat) {
	return typeof wat === "object" && wat !== null;
}
function isEvent(wat) {
	return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
function isRegExp(wat) {
	return isBuiltin(wat, "RegExp");
}
function isThenable(wat) {
	return Boolean(wat?.then && typeof wat.then === "function");
}
function isInstanceOf(wat, base) {
	try {
		return wat instanceof base;
	} catch {
		return false;
	}
}
function isRequest(request) {
	return typeof Request !== "undefined" && isInstanceOf(request, Request);
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/object.js
function fill(source, name, replacementFactory) {
	if (!(name in source)) return;
	const original = source[name];
	if (typeof original !== "function") return;
	const wrapped = replacementFactory(original);
	if (typeof wrapped === "function") markFunctionWrapped(wrapped, original);
	try {
		source[name] = wrapped;
	} catch {
		DEBUG_BUILD && debug.log(`Failed to replace method "${name}" in object`, source);
	}
}
function addNonEnumerableProperty(obj, name, value) {
	try {
		Object.defineProperty(obj, name, {
			value,
			writable: true,
			configurable: true
		});
	} catch {
		DEBUG_BUILD && debug.log(`Failed to add non-enumerable property "${String(name)}" to object`, obj);
	}
}
function markFunctionWrapped(wrapped, original) {
	try {
		wrapped.prototype = original.prototype = original.prototype || {};
		addNonEnumerableProperty(wrapped, "__sentry_original__", original);
	} catch {}
}
function getOriginalFunction(func) {
	return func.__sentry_original__;
}
function convertToPlainObject(value) {
	if (isError(value)) return {
		message: value.message,
		name: value.name,
		stack: value.stack,
		...getOwnProperties(value)
	};
	if (isEvent(value)) {
		const { type, target, currentTarget, detail } = value;
		return {
			type,
			target,
			currentTarget,
			...detail ? { detail } : {},
			...getOwnProperties(value)
		};
	}
	return value;
}
function getOwnProperties(obj) {
	if (isObjectLike(obj)) return Object.fromEntries(Object.entries(obj));
	return {};
}
function extractExceptionKeysForMessage(exception) {
	const keys = Object.keys(convertToPlainObject(exception));
	keys.sort();
	return !keys[0] ? "[object has no keys]" : keys.join(", ");
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/randomSafeContext.js
var RESOLVED_RUNNER;
function withRandomSafeContext(cb) {
	if (RESOLVED_RUNNER !== void 0) return RESOLVED_RUNNER ? RESOLVED_RUNNER(cb) : cb();
	const sym = /* @__PURE__ */ Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
	const globalWithSymbol = GLOBAL_OBJ;
	if (sym in globalWithSymbol && typeof globalWithSymbol[sym] === "function") {
		RESOLVED_RUNNER = globalWithSymbol[sym];
		return RESOLVED_RUNNER(cb);
	}
	RESOLVED_RUNNER = null;
	return cb();
}
function safeMathRandom() {
	return withRandomSafeContext(() => Math.random());
}
function safeDateNow() {
	return withRandomSafeContext(() => Date.now());
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/normalizationHints.js
var SENTRY_SKIP_NORMALIZATION = /* @__PURE__ */ Symbol.for("sentry.skipNormalization");
var SENTRY_OVERRIDE_NORMALIZATION_DEPTH = /* @__PURE__ */ Symbol.for("sentry.overrideNormalizationDepth");
function hasSkipNormalizationHint(value) {
	return Boolean(value[SENTRY_SKIP_NORMALIZATION]);
}
function getNormalizationDepthOverrideHint(value) {
	const v = value[SENTRY_OVERRIDE_NORMALIZATION_DEPTH];
	return typeof v === "number" ? v : void 0;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/normalize.js
var stringifier;
function setNormalizeStringifier(newStringifier) {
	stringifier = newStringifier;
}
function normalize(input, depth = 100, maxProperties = Infinity) {
	try {
		return visit("", input, depth, maxProperties);
	} catch (err) {
		return { ERROR: `**non-serializable** (${err})` };
	}
}
function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
	const normalized = normalize(object, depth);
	if (jsonSize(normalized) > maxSize) return normalizeToSize(object, depth - 1, maxSize);
	return normalized;
}
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
	const [memoize, unmemoize] = memo;
	if (value == null || ["boolean", "string"].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) return value;
	const stringified = stringifyValue(key, value);
	if (!stringified.startsWith("[object ")) return stringified;
	if (hasSkipNormalizationHint(value)) return value;
	const overrideDepth = getNormalizationDepthOverrideHint(value);
	const remainingDepth = overrideDepth !== void 0 ? overrideDepth : depth;
	if (remainingDepth === 0) return stringified.replace("object ", "");
	if (memoize(value)) return "[Circular ~]";
	const valueWithToJSON = value;
	if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") try {
		return visit("", valueWithToJSON.toJSON(), remainingDepth - 1, maxProperties, memo);
	} catch {}
	const normalized = Array.isArray(value) ? [] : {};
	let numAdded = 0;
	const visitable = convertToPlainObject(value);
	for (const visitKey in visitable) {
		if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) continue;
		if (numAdded >= maxProperties) {
			normalized[visitKey] = "[MaxProperties ~]";
			break;
		}
		const visitValue = visitable[visitKey];
		normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
		numAdded++;
	}
	unmemoize(value);
	return normalized;
}
function stringifyValue(key, value) {
	try {
		if (stringifier) {
			const stringified = stringifier(value);
			if (stringified) return stringified;
		}
		if (typeof global !== "undefined" && value === global) return "[Global]";
		if (typeof value === "number" && !Number.isFinite(value)) return `[${value}]`;
		if (typeof value === "function") return `[Function: ${getFunctionName(value)}]`;
		if (typeof value === "symbol") return `[${String(value)}]`;
		if (typeof value === "bigint") return `[BigInt: ${String(value)}]`;
		return `[object ${getConstructorName(value)}]`;
	} catch (err) {
		return `**non-serializable** (${err})`;
	}
}
function getConstructorName(value) {
	const prototype = Object.getPrototypeOf(value);
	return prototype?.constructor ? prototype.constructor.name : "null prototype";
}
function utf8Length(value) {
	return ~-encodeURI(value).split(/%..|./).length;
}
function jsonSize(value) {
	return utf8Length(JSON.stringify(value));
}
function memoBuilder() {
	const inner = /* @__PURE__ */ new WeakSet();
	function memoize(obj) {
		if (inner.has(obj)) return true;
		inner.add(obj);
		return false;
	}
	function unmemoize(obj) {
		inner.delete(obj);
	}
	return [memoize, unmemoize];
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/string.js
function truncate(str, max = 0) {
	if (typeof str !== "string" || max === 0) return str;
	return str.length <= max ? str : `${str.slice(0, max)}...`;
}
function safeJoin(input, delimiter) {
	if (!Array.isArray(input)) return "";
	const output = [];
	for (let i = 0; i < input.length; i++) {
		const value = input[i];
		if (isPrimitive(value)) output.push(String(value));
		else if (value instanceof Error) output.push(value.message ? `${value.name}: ${value.message}` : value.name);
		else output.push(stringifyValue(void 0, value));
	}
	return output.join(delimiter);
}
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
	if (!isString(value)) return false;
	if (isRegExp(pattern)) return pattern.test(value);
	if (isString(pattern)) return requireExactStringMatch ? value === pattern : value.includes(pattern);
	if (typeof pattern === "function") return pattern(value);
	return false;
}
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
	for (const pattern of patterns) if (isMatchingPattern(testString, pattern, requireExactStringMatch)) return true;
	return false;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/misc.js
function getCrypto() {
	const gbl = GLOBAL_OBJ;
	return gbl.crypto || gbl.msCrypto;
}
var emptyUuid;
function getRandomByte() {
	return safeMathRandom() * 16;
}
function uuid4(crypto = getCrypto()) {
	try {
		if (crypto?.randomUUID) return withRandomSafeContext(() => crypto.randomUUID()).replace(/-/g, "");
	} catch {}
	if (!emptyUuid) emptyUuid = "10000000100040008000100000000000";
	return emptyUuid.replace(/[018]/g, (c) => (c ^ (getRandomByte() & 15) >> c / 4).toString(16));
}
function getFirstException(event) {
	return event.exception?.values?.[0];
}
function getEventDescription(event) {
	const { message, event_id: eventId } = event;
	if (message) return message;
	const firstException = getFirstException(event);
	if (firstException) {
		if (firstException.type && firstException.value) return `${firstException.type}: ${firstException.value}`;
		return firstException.type || firstException.value || eventId || "<unknown>";
	}
	return eventId || "<unknown>";
}
function addExceptionTypeValue(event, value, type) {
	const exception = event.exception = event.exception || {};
	const values = exception.values = exception.values || [];
	const firstException = values[0] = values[0] || {};
	if (!firstException.value) firstException.value = value || "";
	if (!firstException.type) firstException.type = type || "Error";
}
function addExceptionMechanism(event, newMechanism) {
	const firstException = getFirstException(event);
	if (!firstException) return;
	const defaultMechanism = {
		type: "generic",
		handled: true
	};
	const currentMechanism = firstException.mechanism;
	firstException.mechanism = {
		...defaultMechanism,
		...currentMechanism,
		...newMechanism
	};
	if (newMechanism && "data" in newMechanism) {
		const mergedData = {
			...currentMechanism?.data,
			...newMechanism.data
		};
		firstException.mechanism.data = mergedData;
	}
}
function checkOrSetAlreadyCaught(exception) {
	if (isAlreadyCaptured(exception)) return true;
	try {
		addNonEnumerableProperty(exception, "__sentry_captured__", true);
	} catch {}
	return false;
}
function isAlreadyCaptured(exception) {
	try {
		return exception.__sentry_captured__;
	} catch {}
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/time.js
var ONE_SECOND_IN_MS = 1e3;
function dateTimestampInSeconds() {
	return safeDateNow() / ONE_SECOND_IN_MS;
}
function createUnixTimestampInSecondsFunc() {
	const { performance } = GLOBAL_OBJ;
	if (!performance?.now || !performance.timeOrigin) return dateTimestampInSeconds;
	const timeOrigin = performance.timeOrigin;
	return () => {
		return (timeOrigin + withRandomSafeContext(() => performance.now())) / ONE_SECOND_IN_MS;
	};
}
var _cachedTimestampInSeconds;
function timestampInSeconds() {
	return (_cachedTimestampInSeconds ?? (_cachedTimestampInSeconds = createUnixTimestampInSecondsFunc()))();
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/session.js
function makeSession(context) {
	const startingTime = timestampInSeconds();
	const session = {
		sid: uuid4(),
		init: true,
		timestamp: startingTime,
		started: startingTime,
		duration: 0,
		status: "ok",
		errors: 0,
		ignoreDuration: false,
		toJSON: () => sessionToJSON(session)
	};
	if (context) updateSession(session, context);
	return session;
}
function updateSession(session, context = {}) {
	if (context.user) {
		if (!session.ipAddress && context.user.ip_address) session.ipAddress = context.user.ip_address;
		if (!session.did && !context.did) session.did = context.user.id || context.user.email || context.user.username;
	}
	session.timestamp = context.timestamp || timestampInSeconds();
	if (context.abnormal_mechanism) session.abnormal_mechanism = context.abnormal_mechanism;
	if (context.ignoreDuration) session.ignoreDuration = context.ignoreDuration;
	if (context.sid) session.sid = context.sid.length === 32 ? context.sid : uuid4();
	if (context.init !== void 0) session.init = context.init;
	if (!session.did && context.did) session.did = `${context.did}`;
	if (typeof context.started === "number") session.started = context.started;
	if (session.ignoreDuration) session.duration = void 0;
	else if (typeof context.duration === "number") session.duration = context.duration;
	else {
		const duration = session.timestamp - session.started;
		session.duration = duration >= 0 ? duration : 0;
	}
	if (context.release) session.release = context.release;
	if (context.environment) session.environment = context.environment;
	if (!session.ipAddress && context.ipAddress) session.ipAddress = context.ipAddress;
	if (!session.userAgent && context.userAgent) session.userAgent = context.userAgent;
	if (typeof context.errors === "number") session.errors = context.errors;
	if (context.status) session.status = context.status;
}
function closeSession(session, status) {
	let context = {};
	if (status) context = { status };
	else if (session.status === "ok") context = { status: "exited" };
	updateSession(session, context);
}
function sessionToJSON(session) {
	return {
		sid: `${session.sid}`,
		init: session.init,
		started: (/* @__PURE__ */ new Date(session.started * 1e3)).toISOString(),
		timestamp: (/* @__PURE__ */ new Date(session.timestamp * 1e3)).toISOString(),
		status: session.status,
		errors: session.errors,
		did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
		duration: session.duration,
		abnormal_mechanism: session.abnormal_mechanism,
		attrs: {
			release: session.release,
			environment: session.environment,
			ip_address: session.ipAddress,
			user_agent: session.userAgent
		}
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/merge.js
function merge(initialObj, mergeObj, levels = 2) {
	if (!mergeObj || typeof mergeObj !== "object" || levels <= 0) return mergeObj;
	if (initialObj && Object.keys(mergeObj).length === 0) return initialObj;
	const output = { ...initialObj };
	for (const key in mergeObj) if (Object.prototype.hasOwnProperty.call(mergeObj, key)) output[key] = merge(output[key], mergeObj[key], levels - 1);
	return output;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/propagationContext.js
function generateTraceId() {
	return uuid4();
}
function generateSpanId() {
	return uuid4().substring(16);
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/weakRef.js
function makeWeakRef(value) {
	try {
		const WeakRefImpl = GLOBAL_OBJ.WeakRef;
		if (typeof WeakRefImpl === "function") return new WeakRefImpl(value);
	} catch {}
	return value;
}
function derefWeakRef(ref) {
	if (!ref) return;
	if (typeof ref === "object" && "deref" in ref && typeof ref.deref === "function") try {
		return ref.deref();
	} catch {
		return;
	}
	return ref;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/spanOnScope.js
var SCOPE_SPAN_FIELD = "_sentrySpan";
function _setSpanForScope(scope, span) {
	if (span) addNonEnumerableProperty(scope, SCOPE_SPAN_FIELD, makeWeakRef(span));
	else delete scope[SCOPE_SPAN_FIELD];
}
function _getSpanForScope(scope) {
	return derefWeakRef(scope[SCOPE_SPAN_FIELD]);
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/scope.js
var DEFAULT_MAX_BREADCRUMBS = 100;
var Scope = class Scope {
	constructor() {
		this._notifyingListeners = false;
		this._scopeListeners = [];
		this._eventProcessors = [];
		this._breadcrumbs = [];
		this._attachments = [];
		this._user = {};
		this._tags = {};
		this._attributes = {};
		this._extra = {};
		this._contexts = {};
		this._sdkProcessingMetadata = {};
		this._propagationContext = {
			traceId: generateTraceId(),
			sampleRand: safeMathRandom()
		};
	}
	/**
	* Clone all data from this scope into a new scope.
	*/
	clone() {
		const newScope = new Scope();
		newScope._breadcrumbs = [...this._breadcrumbs];
		newScope._tags = { ...this._tags };
		newScope._attributes = { ...this._attributes };
		newScope._extra = { ...this._extra };
		newScope._contexts = { ...this._contexts };
		if (this._contexts.flags) newScope._contexts.flags = { values: [...this._contexts.flags.values] };
		newScope._user = this._user;
		newScope._level = this._level;
		newScope._session = this._session;
		newScope._transactionName = this._transactionName;
		newScope._fingerprint = this._fingerprint;
		newScope._eventProcessors = [...this._eventProcessors];
		newScope._attachments = [...this._attachments];
		newScope._sdkProcessingMetadata = { ...this._sdkProcessingMetadata };
		newScope._propagationContext = { ...this._propagationContext };
		newScope._client = this._client;
		newScope._lastEventId = this._lastEventId;
		newScope._conversationId = this._conversationId;
		_setSpanForScope(newScope, _getSpanForScope(this));
		return newScope;
	}
	/**
	* Update the client assigned to this scope.
	* Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
	* as well as manually created scopes.
	*/
	setClient(client) {
		this._client = client;
	}
	/**
	* Set the ID of the last captured error event.
	* This is generally only captured on the isolation scope.
	*/
	setLastEventId(lastEventId) {
		this._lastEventId = lastEventId;
	}
	/**
	* Get the client assigned to this scope.
	*/
	getClient() {
		return this._client;
	}
	/**
	* Get the ID of the last captured error event.
	* This is generally only available on the isolation scope.
	*/
	lastEventId() {
		return this._lastEventId;
	}
	/**
	* @inheritDoc
	*/
	addScopeListener(callback) {
		this._scopeListeners.push(callback);
	}
	/**
	* Add an event processor that will be called before an event is sent.
	*/
	addEventProcessor(callback) {
		this._eventProcessors.push(callback);
		return this;
	}
	/**
	* Set the user for this scope.
	* Set to `null` to unset the user.
	*/
	setUser(user) {
		this._user = user || {
			email: void 0,
			id: void 0,
			ip_address: void 0,
			username: void 0
		};
		if (this._session) updateSession(this._session, { user });
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Get the user from this scope.
	*/
	getUser() {
		return this._user;
	}
	/**
	* Set the conversation ID for this scope.
	* Set to `null` to unset the conversation ID.
	*/
	setConversationId(conversationId) {
		this._conversationId = conversationId || void 0;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Set an object that will be merged into existing tags on the scope,
	* and will be sent as tags data with the event.
	*/
	setTags(tags) {
		this._tags = {
			...this._tags,
			...tags
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Set a single tag that will be sent as tags data with the event.
	*/
	setTag(key, value) {
		return this.setTags({ [key]: value });
	}
	/**
	* Sets attributes onto the scope.
	*
	* These attributes are applied to logs, metrics and streamed spans.
	*
	* Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.
	*
	* @param newAttributes - The attributes to set on the scope, as key-value pairs.
	*
	* @example
	* ```typescript
	* scope.setAttributes({
	*   is_admin: true,
	*   payment_selection: 'credit_card',
	*   render_duration: 150,
	* });
	* ```
	*/
	setAttributes(newAttributes) {
		this._attributes = {
			...this._attributes,
			...newAttributes
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets an attribute onto the scope.
	*
	* These attributes are applied to logs, metrics and streamed spans.
	*
	* Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.
	*
	* @param key - The attribute key.
	* @param value - The attribute value.
	*
	* @example
	* ```typescript
	* scope.setAttribute('is_admin', true);
	* scope.setAttribute('render_duration', 150);
	* ```
	*/
	setAttribute(key, value) {
		return this.setAttributes({ [key]: value });
	}
	/**
	* Removes the attribute with the given key from the scope.
	*
	* @param key - The attribute key.
	*
	* @example
	* ```typescript
	* scope.removeAttribute('is_admin');
	* ```
	*/
	removeAttribute(key) {
		if (key in this._attributes) {
			delete this._attributes[key];
			this._notifyScopeListeners();
		}
		return this;
	}
	/**
	* Set an object that will be merged into existing extra on the scope,
	* and will be sent as extra data with the event.
	*/
	setExtras(extras) {
		this._extra = {
			...this._extra,
			...extras
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Set a single key:value extra entry that will be sent as extra data with the event.
	*/
	setExtra(key, extra) {
		this._extra = {
			...this._extra,
			[key]: extra
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets the fingerprint on the scope to send with the events.
	* @param {string[]} fingerprint Fingerprint to group events in Sentry.
	*/
	setFingerprint(fingerprint) {
		this._fingerprint = fingerprint;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets the level on the scope for future events.
	*/
	setLevel(level) {
		this._level = level;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets the transaction name on the scope so that the name of e.g. taken server route or
	* the page location is attached to future events.
	*
	* IMPORTANT: Calling this function does NOT change the name of the currently active
	* root span. If you want to change the name of the active root span, use
	* `Sentry.updateSpanName(rootSpan, 'new name')` instead.
	*
	* By default, the SDK updates the scope's transaction name automatically on sensible
	* occasions, such as a page navigation or when handling a new request on the server.
	*/
	setTransactionName(name) {
		this._transactionName = name;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets context data with the given name.
	* Data passed as context will be normalized. You can also pass `null` to unset the context.
	* Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
	*/
	setContext(key, context) {
		if (context === null) delete this._contexts[key];
		else this._contexts[key] = context;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Set the session for the scope.
	*/
	setSession(session) {
		if (!session) delete this._session;
		else this._session = session;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Get the session from the scope.
	*/
	getSession() {
		return this._session;
	}
	/**
	* Updates the scope with provided data. Can work in three variations:
	* - plain object containing updatable attributes
	* - Scope instance that'll extract the attributes from
	* - callback function that'll receive the current scope as an argument and allow for modifications
	*/
	update(captureContext) {
		if (!captureContext) return this;
		const scopeToMerge = typeof captureContext === "function" ? captureContext(this) : captureContext;
		const { tags, attributes, extra, user, contexts, level, fingerprint = [], propagationContext, conversationId } = (scopeToMerge instanceof Scope ? scopeToMerge.getScopeData() : isPlainObject(scopeToMerge) ? captureContext : void 0) || {};
		this._tags = {
			...this._tags,
			...tags
		};
		this._attributes = {
			...this._attributes,
			...attributes
		};
		this._extra = {
			...this._extra,
			...extra
		};
		this._contexts = {
			...this._contexts,
			...contexts
		};
		if (user && Object.keys(user).length) this._user = user;
		if (level) this._level = level;
		if (fingerprint.length) this._fingerprint = fingerprint;
		if (propagationContext) this._propagationContext = propagationContext;
		if (conversationId) this._conversationId = conversationId;
		return this;
	}
	/**
	* Clears the current scope and resets its properties.
	* Note: The client will not be cleared.
	*/
	clear() {
		this._breadcrumbs = [];
		this._tags = {};
		this._attributes = {};
		this._extra = {};
		this._user = {};
		this._contexts = {};
		this._level = void 0;
		this._transactionName = void 0;
		this._fingerprint = void 0;
		this._session = void 0;
		this._conversationId = void 0;
		_setSpanForScope(this, void 0);
		this._attachments = [];
		this.setPropagationContext({
			traceId: generateTraceId(),
			sampleRand: safeMathRandom()
		});
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Adds a breadcrumb to the scope.
	* By default, the last 100 breadcrumbs are kept.
	*/
	addBreadcrumb(breadcrumb, maxBreadcrumbs) {
		const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
		if (maxCrumbs <= 0) return this;
		const mergedBreadcrumb = {
			timestamp: dateTimestampInSeconds(),
			...breadcrumb,
			message: breadcrumb.message ? truncate(breadcrumb.message, 2048) : breadcrumb.message
		};
		this._breadcrumbs.push(mergedBreadcrumb);
		if (this._breadcrumbs.length > maxCrumbs) {
			this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
			this._client?.recordDroppedEvent("buffer_overflow", "log_item");
		}
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Get the last breadcrumb of the scope.
	*/
	getLastBreadcrumb() {
		return this._breadcrumbs[this._breadcrumbs.length - 1];
	}
	/**
	* Clear all breadcrumbs from the scope.
	*/
	clearBreadcrumbs() {
		this._breadcrumbs = [];
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Add an attachment to the scope.
	*/
	addAttachment(attachment) {
		this._attachments.push(attachment);
		return this;
	}
	/**
	* Clear all attachments from the scope.
	*/
	clearAttachments() {
		this._attachments = [];
		return this;
	}
	/**
	* Get the data of this scope, which should be applied to an event during processing.
	*/
	getScopeData() {
		return {
			breadcrumbs: this._breadcrumbs,
			attachments: this._attachments,
			contexts: this._contexts,
			tags: this._tags,
			attributes: this._attributes,
			extra: this._extra,
			user: this._user,
			level: this._level,
			fingerprint: this._fingerprint || [],
			eventProcessors: this._eventProcessors,
			propagationContext: this._propagationContext,
			sdkProcessingMetadata: this._sdkProcessingMetadata,
			transactionName: this._transactionName,
			span: _getSpanForScope(this),
			conversationId: this._conversationId
		};
	}
	/**
	* Add data which will be accessible during event processing but won't get sent to Sentry.
	*/
	setSDKProcessingMetadata(newData) {
		this._sdkProcessingMetadata = merge(this._sdkProcessingMetadata, newData, 2);
		return this;
	}
	/**
	* Add propagation context to the scope, used for distributed tracing
	*/
	setPropagationContext(context) {
		this._propagationContext = context;
		return this;
	}
	/**
	* Get propagation context from the scope, used for distributed tracing
	*/
	getPropagationContext() {
		return this._propagationContext;
	}
	/**
	* Capture an exception for this scope.
	*
	* @returns {string} The id of the captured Sentry event.
	*/
	captureException(exception, hint) {
		const eventId = hint?.event_id || uuid4();
		if (!this._client) {
			DEBUG_BUILD && debug.warn("No client configured on scope - will not capture exception!");
			return eventId;
		}
		const syntheticException = /* @__PURE__ */ new Error("Sentry syntheticException");
		this._client.captureException(exception, {
			originalException: exception,
			syntheticException,
			...hint,
			event_id: eventId
		}, this);
		return eventId;
	}
	/**
	* Capture a message for this scope.
	*
	* @returns {string} The id of the captured message.
	*/
	captureMessage(message, level, hint) {
		const eventId = hint?.event_id || uuid4();
		if (!this._client) {
			DEBUG_BUILD && debug.warn("No client configured on scope - will not capture message!");
			return eventId;
		}
		const syntheticException = hint?.syntheticException ?? new Error(message);
		this._client.captureMessage(message, level, {
			originalException: message,
			syntheticException,
			...hint,
			event_id: eventId
		}, this);
		return eventId;
	}
	/**
	* Capture a Sentry event for this scope.
	*
	* @returns {string} The id of the captured event.
	*/
	captureEvent(event, hint) {
		const eventId = event.event_id || hint?.event_id || uuid4();
		if (!this._client) {
			DEBUG_BUILD && debug.warn("No client configured on scope - will not capture event!");
			return eventId;
		}
		this._client.captureEvent(event, {
			...hint,
			event_id: eventId
		}, this);
		return eventId;
	}
	/**
	* This will be called on every set call.
	*/
	_notifyScopeListeners() {
		if (!this._notifyingListeners) {
			this._notifyingListeners = true;
			this._scopeListeners.forEach((callback) => {
				callback(this);
			});
			this._notifyingListeners = false;
		}
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/defaultScopes.js
function getDefaultCurrentScope() {
	return getGlobalSingleton("defaultCurrentScope", () => new Scope());
}
function getDefaultIsolationScope() {
	return getGlobalSingleton("defaultIsolationScope", () => new Scope());
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/chain-and-copy-promiselike.js
var isActualPromise = (p) => p instanceof Promise && !p[kChainedCopy];
var kChainedCopy = /* @__PURE__ */ Symbol("chained PromiseLike");
var chainAndCopyPromiseLike = (original, onSuccess, onError) => {
	const chained = original.then((value) => {
		onSuccess(value);
		return value;
	}, (err) => {
		onError(err);
		throw err;
	});
	return isActualPromise(chained) && isActualPromise(original) ? chained : copyProps(original, chained);
};
var copyProps = (original, chained) => {
	if (!chained) return original;
	let mutated = false;
	for (const key in original) {
		if (key in chained) continue;
		mutated = true;
		const value = original[key];
		if (typeof value === "function") Object.defineProperty(chained, key, {
			value: (...args) => value.apply(original, args),
			enumerable: true,
			configurable: true,
			writable: true
		});
		else chained[key] = value;
	}
	if (mutated) Object.assign(chained, { [kChainedCopy]: true });
	return chained;
};
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js
var AsyncContextStack = class {
	constructor(scope, isolationScope) {
		let assignedScope;
		if (!scope) assignedScope = new Scope();
		else assignedScope = scope;
		let assignedIsolationScope;
		if (!isolationScope) assignedIsolationScope = new Scope();
		else assignedIsolationScope = isolationScope;
		this._stack = [{ scope: assignedScope }];
		this._isolationScope = assignedIsolationScope;
	}
	/**
	* Fork a scope for the stack.
	*/
	withScope(callback) {
		const scope = this._pushScope();
		let maybePromiseResult;
		try {
			maybePromiseResult = callback(scope);
		} catch (e) {
			this._popScope();
			throw e;
		}
		if (isThenable(maybePromiseResult)) return chainAndCopyPromiseLike(maybePromiseResult, () => this._popScope(), () => this._popScope());
		this._popScope();
		return maybePromiseResult;
	}
	/**
	* Get the client of the stack.
	*/
	getClient() {
		return this.getStackTop().client;
	}
	/**
	* Returns the scope of the top stack.
	*/
	getScope() {
		return this.getStackTop().scope;
	}
	/**
	* Get the isolation scope for the stack.
	*/
	getIsolationScope() {
		return this._isolationScope;
	}
	/**
	* Returns the topmost scope layer in the order domain > local > process.
	*/
	getStackTop() {
		return this._stack[this._stack.length - 1];
	}
	/**
	* Push a scope to the stack.
	*/
	_pushScope() {
		const scope = this.getScope().clone();
		this._stack.push({
			client: this.getClient(),
			scope
		});
		return scope;
	}
	/**
	* Pop a scope from the stack.
	*/
	_popScope() {
		if (this._stack.length <= 1) return false;
		return !!this._stack.pop();
	}
};
function getAsyncContextStack() {
	const sentry = getSentryCarrier(getMainCarrier());
	return sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope());
}
function withScope$1(callback) {
	return getAsyncContextStack().withScope(callback);
}
function withSetScope(scope, callback) {
	const stack = getAsyncContextStack();
	return stack.withScope(() => {
		stack.getStackTop().scope = scope;
		return callback(scope);
	});
}
function withIsolationScope(callback) {
	return getAsyncContextStack().withScope(() => {
		return callback(getAsyncContextStack().getIsolationScope());
	});
}
function getStackAsyncContextStrategy() {
	return {
		withIsolationScope,
		withScope: withScope$1,
		withSetScope,
		withSetIsolationScope: (_isolationScope, callback) => {
			return withIsolationScope(callback);
		},
		getCurrentScope: () => getAsyncContextStack().getScope(),
		getIsolationScope: () => getAsyncContextStack().getIsolationScope()
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/asyncContext/index.js
function getAsyncContextStrategy(carrier) {
	const sentry = getSentryCarrier(carrier);
	if (sentry.acs) return sentry.acs;
	return getStackAsyncContextStrategy();
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/attributes.js
function isAttributeObject(maybeObj) {
	return typeof maybeObj === "object" && maybeObj != null && !Array.isArray(maybeObj) && Object.keys(maybeObj).includes("value");
}
function attributeValueToTypedAttributeValue(rawValue, useFallback) {
	const { value, unit } = isAttributeObject(rawValue) ? rawValue : {
		value: rawValue,
		unit: void 0
	};
	const attributeValue = getTypedAttributeValue(value);
	const checkedUnit = unit && typeof unit === "string" ? { unit } : {};
	if (attributeValue) return {
		...attributeValue,
		...checkedUnit
	};
	if (!useFallback || useFallback === "skip-undefined" && value === void 0) return;
	let stringValue = "";
	try {
		stringValue = JSON.stringify(value) ?? "";
	} catch {}
	return {
		value: stringValue,
		type: "string",
		...checkedUnit
	};
}
function serializeAttributes(attributes, fallback = false) {
	const serializedAttributes = {};
	for (const [key, value] of Object.entries(attributes ?? {})) {
		const typedValue = attributeValueToTypedAttributeValue(value, fallback);
		if (typedValue) serializedAttributes[key] = typedValue;
	}
	return serializedAttributes;
}
function getTypedAttributeValue(value) {
	if (Array.isArray(value)) return {
		value,
		type: "array"
	};
	const primitiveType = typeof value === "string" ? "string" : typeof value === "boolean" ? "boolean" : typeof value === "number" && !Number.isNaN(value) ? Number.isInteger(value) ? "integer" : "double" : null;
	if (primitiveType) return {
		value,
		type: primitiveType
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/currentScopes.js
var _externalPropagationContextProvider;
function getExternalPropagationContext() {
	return _externalPropagationContextProvider?.();
}
function getCurrentScope() {
	return getAsyncContextStrategy(getMainCarrier()).getCurrentScope();
}
function getIsolationScope() {
	return getAsyncContextStrategy(getMainCarrier()).getIsolationScope();
}
function getGlobalScope() {
	return getGlobalSingleton("globalScope", () => new Scope());
}
function withScope(...rest) {
	const acs = getAsyncContextStrategy(getMainCarrier());
	if (rest.length === 2) {
		const [scope, callback] = rest;
		if (!scope) return acs.withScope(callback);
		return acs.withSetScope(scope, callback);
	}
	return acs.withScope(rest[0]);
}
function getClient() {
	return getCurrentScope().getClient();
}
function getTraceContextFromScope(scope) {
	const externalContext = getExternalPropagationContext();
	if (externalContext) return {
		trace_id: externalContext.traceId,
		span_id: externalContext.spanId
	};
	const { traceId, parentSpanId, propagationSpanId } = scope.getPropagationContext();
	const traceContext = {
		trace_id: traceId,
		span_id: propagationSpanId || generateSpanId()
	};
	if (parentSpanId) traceContext.parent_span_id = parentSpanId;
	return traceContext;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/semanticAttributes.js
var SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source";
var SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate";
var SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op";
var SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin";
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = "sentry.measurement_unit";
var SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = "sentry.measurement_value";
var SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = "sentry.custom_span_name";
var SEMANTIC_ATTRIBUTE_PROFILE_ID = "sentry.profile_id";
var SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = "sentry.exclusive_time";
var GEN_AI_CONVERSATION_ID_ATTRIBUTE = "gen_ai.conversation.id";
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/utils.js
var SCOPE_ON_START_SPAN_FIELD = "_sentryScope";
var ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
var OTEL_SOURCE_INFERENCE_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.otelSourceInference");
var OTEL_SOURCE_EXPLICITLY_SET_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.otelSourceExplicitlySet");
var TRACER_PROVIDER_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.tracerProviderSpan");
function setCapturedScopesOnSpan(span, scope, isolationScope) {
	if (span) {
		addNonEnumerableProperty(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, makeWeakRef(isolationScope));
		addNonEnumerableProperty(span, SCOPE_ON_START_SPAN_FIELD, scope);
	}
}
function getCapturedScopesOnSpan(span) {
	const spanWithScopes = span;
	return {
		scope: spanWithScopes[SCOPE_ON_START_SPAN_FIELD],
		isolationScope: derefWeakRef(spanWithScopes[ISOLATION_SCOPE_ON_START_SPAN_FIELD])
	};
}
function spanShouldInferOtelSource(span) {
	return span[OTEL_SOURCE_INFERENCE_SPAN_FIELD] === true;
}
function markSpanSourceAsExplicit(span) {
	addNonEnumerableProperty(span, OTEL_SOURCE_EXPLICITLY_SET_SPAN_FIELD, true);
}
function spanIsTracerProviderSpan(span) {
	return span[TRACER_PROVIDER_SPAN_FIELD] === true;
}
function baggageHeaderToDynamicSamplingContext(baggageHeader) {
	const baggageObject = parseBaggageHeader(baggageHeader);
	if (!baggageObject) return;
	const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
		if (key.startsWith("sentry-")) {
			const nonPrefixedKey = key.slice(7);
			acc[nonPrefixedKey] = value;
		}
		return acc;
	}, {});
	if (Object.keys(dynamicSamplingContext).length > 0) return dynamicSamplingContext;
	else return;
}
function parseBaggageHeader(baggageHeader) {
	if (!baggageHeader || !isString(baggageHeader) && !Array.isArray(baggageHeader)) return;
	if (Array.isArray(baggageHeader)) return baggageHeader.reduce((acc, curr) => {
		const currBaggageObject = baggageHeaderToObject(curr);
		Object.entries(currBaggageObject).forEach(([key, value]) => {
			acc[key] = value;
		});
		return acc;
	}, {});
	return baggageHeaderToObject(baggageHeader);
}
function baggageHeaderToObject(baggageHeader) {
	return baggageHeader.split(",").map((baggageEntry) => {
		const eqIdx = baggageEntry.indexOf("=");
		if (eqIdx === -1) return [];
		return [baggageEntry.slice(0, eqIdx), baggageEntry.slice(eqIdx + 1)].map((keyOrValue) => {
			try {
				return decodeURIComponent(keyOrValue.trim());
			} catch {
				return;
			}
		});
	}).reduce((acc, [key, value]) => {
		if (key && value) acc[key] = value;
		return acc;
	}, {});
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/dsn.js
var ORG_ID_REGEX = /^o(\d+)\./;
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
	return protocol === "http" || protocol === "https";
}
function dsnToString(dsn, withPassword = false) {
	const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
	return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
function dsnFromString(str) {
	const match = DSN_REGEX.exec(str);
	if (!match) {
		consoleSandbox(() => {
			console.error(`Invalid Sentry Dsn: ${str}`);
		});
		return;
	}
	const [protocol, publicKey, pass = "", host = "", port = "", lastPath = ""] = match.slice(1);
	let path = "";
	let projectId = lastPath;
	const split = projectId.split("/");
	if (split.length > 1) {
		path = split.slice(0, -1).join("/");
		projectId = split.pop();
	}
	if (projectId) {
		const projectMatch = projectId.match(/^\d+/);
		if (projectMatch) projectId = projectMatch[0];
	}
	return dsnFromComponents({
		host,
		pass,
		path,
		projectId,
		port,
		protocol,
		publicKey
	});
}
function dsnFromComponents(components) {
	return {
		protocol: components.protocol,
		publicKey: components.publicKey || "",
		pass: components.pass || "",
		host: components.host,
		port: components.port || "",
		path: components.path || "",
		projectId: components.projectId
	};
}
function validateDsn(dsn) {
	if (!DEBUG_BUILD) return true;
	const { port, projectId, protocol } = dsn;
	if ([
		"protocol",
		"publicKey",
		"host",
		"projectId"
	].find((component) => {
		if (!dsn[component]) {
			debug.error(`Invalid Sentry Dsn: ${component} missing`);
			return true;
		}
		return false;
	})) return false;
	if (!projectId.match(/^\d+$/)) {
		debug.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
		return false;
	}
	if (!isValidProtocol(protocol)) {
		debug.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
		return false;
	}
	if (port && isNaN(parseInt(port, 10))) {
		debug.error(`Invalid Sentry Dsn: Invalid port ${port}`);
		return false;
	}
	return true;
}
function extractOrgIdFromDsnHost(host) {
	return host.match(ORG_ID_REGEX)?.[1];
}
function extractOrgIdFromClient(client) {
	const options = client.getOptions();
	const { host } = client.getDsn() || {};
	let org_id;
	if (options.orgId) org_id = String(options.orgId);
	else if (host) org_id = extractOrgIdFromDsnHost(host);
	return org_id;
}
function makeDsn(from) {
	const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
	if (!components || !validateDsn(components)) return;
	return components;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js
function parseSampleRate(sampleRate) {
	if (typeof sampleRate === "boolean") return Number(sampleRate);
	const rate = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
	if (typeof rate !== "number" || isNaN(rate) || rate < 0 || rate > 1) return;
	return rate;
}
var hasShownSpanDropWarning = false;
function spanToTransactionTraceContext(span) {
	const { spanId: span_id, traceId: trace_id } = span.spanContext();
	const { data, op, parent_span_id, status, origin, links } = spanToJSON(span);
	return {
		parent_span_id,
		span_id,
		trace_id,
		data,
		op,
		status,
		origin,
		links
	};
}
function spanToTraceContext(span) {
	const { spanId, traceId: trace_id, isRemote } = span.spanContext();
	const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
	const scope = getCapturedScopesOnSpan(span).scope;
	return {
		parent_span_id,
		span_id: isRemote ? scope?.getPropagationContext().propagationSpanId || generateSpanId() : spanId,
		trace_id
	};
}
function convertSpanLinksForEnvelope(links) {
	if (links && links.length > 0) return links.map(({ context: { spanId, traceId, traceFlags, ...restContext }, attributes }) => ({
		span_id: spanId,
		trace_id: traceId,
		sampled: traceFlags === 1,
		attributes,
		...restContext
	}));
	else return;
}
function getStreamedSpanLinks(links) {
	if (links?.length) return links.map(({ context: { spanId, traceId, traceFlags }, attributes }) => ({
		span_id: spanId,
		trace_id: traceId,
		sampled: traceFlags === 1,
		attributes
	}));
	else return;
}
function spanTimeInputToSeconds(input) {
	if (typeof input === "number") return ensureTimestampInSeconds(input);
	if (Array.isArray(input)) return input[0] + input[1] / 1e9;
	if (input instanceof Date) return ensureTimestampInSeconds(input.getTime());
	return timestampInSeconds();
}
function ensureTimestampInSeconds(timestamp) {
	return timestamp > 9999999999 ? timestamp / 1e3 : timestamp;
}
function spanToJSON(span) {
	if (spanIsSentrySpan(span)) return span.getSpanJSON();
	const { spanId: span_id, traceId: trace_id } = span.spanContext();
	if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
		const { attributes, startTime, name, endTime, status, links } = span;
		return {
			span_id,
			trace_id,
			data: attributes,
			description: name,
			parent_span_id: getOtelParentSpanId(span),
			start_timestamp: spanTimeInputToSeconds(startTime),
			timestamp: spanTimeInputToSeconds(endTime) || void 0,
			status: getStatusMessage(status),
			op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
			origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
			links: convertSpanLinksForEnvelope(links)
		};
	}
	return {
		span_id,
		trace_id,
		start_timestamp: 0,
		data: {}
	};
}
function getOtelParentSpanId(span) {
	return "parentSpanId" in span ? span.parentSpanId : "parentSpanContext" in span ? span.parentSpanContext?.spanId : void 0;
}
function streamedSpanJsonToSerializedSpan(spanJson) {
	return {
		...spanJson,
		attributes: serializeAttributes(spanJson.attributes),
		links: spanJson.links?.map((link) => ({
			...link,
			attributes: serializeAttributes(link.attributes)
		}))
	};
}
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
	const castSpan = span;
	return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
function spanIsSentrySpan(span) {
	return typeof span.getSpanJSON === "function";
}
function spanIsSampled(span) {
	const { traceFlags } = span.spanContext();
	return traceFlags === 1;
}
function getStatusMessage(status) {
	if (!status || status.code === 0) return;
	if (status.code === 1) return "ok";
	return status.message || "internal_error";
}
function getSimpleStatus(status) {
	return !status || status.code === 1 || status.code === 0 || status.message === "cancelled" ? "ok" : "error";
}
function addStatusMessageAttribute(attributes, status) {
	const statusMessage = getSimpleStatus(status) === "error" ? status?.message : void 0;
	return {
		...statusMessage && { ["sentry.status.message"]: statusMessage },
		...attributes
	};
}
var CHILD_SPANS_FIELD = "_sentryChildSpans";
var ROOT_SPAN_FIELD = "_sentryRootSpan";
function addChildSpanToSpan(span, childSpan) {
	addNonEnumerableProperty(childSpan, ROOT_SPAN_FIELD, span[ROOT_SPAN_FIELD] || span);
	if (span[CHILD_SPANS_FIELD]) span[CHILD_SPANS_FIELD].add(childSpan);
	else addNonEnumerableProperty(span, CHILD_SPANS_FIELD, /* @__PURE__ */ new Set([childSpan]));
}
function getSpanDescendants(span) {
	const resultSet = /* @__PURE__ */ new Set();
	function addSpanChildren(span2) {
		if (resultSet.has(span2)) return;
		else if (spanIsSampled(span2)) {
			resultSet.add(span2);
			const childSpans = span2[CHILD_SPANS_FIELD] ? Array.from(span2[CHILD_SPANS_FIELD]) : [];
			for (const childSpan of childSpans) addSpanChildren(childSpan);
		}
	}
	addSpanChildren(span);
	return Array.from(resultSet);
}
var getRootSpan = INTERNAL_getSegmentSpan;
function INTERNAL_getSegmentSpan(span) {
	return span[ROOT_SPAN_FIELD] || span;
}
function getActiveSpan() {
	const acs = getAsyncContextStrategy(getMainCarrier());
	if (acs.getActiveSpan) return acs.getActiveSpan();
	return _getSpanForScope(getCurrentScope());
}
function showSpanDropWarning() {
	if (!hasShownSpanDropWarning) {
		consoleSandbox(() => {
			console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
		});
		hasShownSpanDropWarning = true;
	}
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js
function hasSpansEnabled(maybeOptions) {
	if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) return false;
	const options = maybeOptions || getClient()?.getOptions();
	return !!options && (options.tracesSampleRate != null || !!options.tracesSampler);
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/should-ignore-span.js
function logIgnoredSpan(droppedSpan) {
	debug.log(`Ignoring span ${droppedSpan.op} - ${droppedSpan.description} because it matches \`ignoreSpans\`.`);
}
function shouldIgnoreSpan(span, ignoreSpans) {
	if (!ignoreSpans?.length) return false;
	for (const pattern of ignoreSpans) {
		if (isStringOrRegExp(pattern)) {
			if (span.description && isMatchingPattern(span.description, pattern)) {
				DEBUG_BUILD && logIgnoredSpan(span);
				return true;
			}
			continue;
		}
		const hasAttributes = !!pattern.attributes && Object.keys(pattern.attributes).length > 0;
		if (!pattern.name && !pattern.op && !hasAttributes) continue;
		const nameMatches = pattern.name ? span.description && isMatchingPattern(span.description, pattern.name) : true;
		const opMatches = pattern.op ? span.op && isMatchingPattern(span.op, pattern.op) : true;
		const attrsMatch = pattern.attributes ? Object.entries(pattern.attributes).every(([key, valuePattern]) => _matchesAttributeValue(span.attributes?.[key], valuePattern)) : true;
		if (nameMatches && opMatches && attrsMatch) {
			DEBUG_BUILD && logIgnoredSpan(span);
			return true;
		}
	}
	return false;
}
function _matchesAttributeValue(actual, pat) {
	if (typeof actual === "string" && (typeof pat === "string" || pat instanceof RegExp)) return isMatchingPattern(actual, pat);
	if (Array.isArray(actual) && Array.isArray(pat)) return actual.length === pat.length && actual.every((v, i) => v === pat[i]);
	return actual === pat;
}
function reparentChildSpans(spans, dropSpan) {
	const droppedSpanParentId = dropSpan.parent_span_id;
	const droppedSpanId = dropSpan.span_id;
	if (!droppedSpanParentId) return;
	for (const span of spans) if (span.parent_span_id === droppedSpanId) span.parent_span_id = droppedSpanParentId;
}
function isStringOrRegExp(value) {
	return typeof value === "string" || value instanceof RegExp;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js
var NON_RECORDING_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.nonRecordingSpan");
var SentryNonRecordingSpan = class {
	constructor(spanContext = {}) {
		this._traceId = spanContext.traceId || generateTraceId();
		this._spanId = spanContext.spanId || generateSpanId();
		this.dropReason = spanContext.dropReason;
		addNonEnumerableProperty(this, NON_RECORDING_SPAN_FIELD, true);
	}
	/** @inheritdoc */
	spanContext() {
		return {
			spanId: this._spanId,
			traceId: this._traceId,
			traceFlags: 0
		};
	}
	/** @inheritdoc */
	end(_timestamp) {}
	/** @inheritdoc */
	setAttribute(_key, _value) {
		return this;
	}
	/** @inheritdoc */
	setAttributes(_values) {
		return this;
	}
	/** @inheritdoc */
	setStatus(_status) {
		return this;
	}
	/** @inheritdoc */
	updateName(_name) {
		return this;
	}
	/** @inheritdoc */
	isRecording() {
		return false;
	}
	/** @inheritdoc */
	addEvent(_name, _attributesOrStartTime, _startTime) {
		return this;
	}
	/** @inheritDoc */
	addLink(_link) {
		return this;
	}
	/** @inheritDoc */
	addLinks(_links) {
		return this;
	}
	/**
	* This should generally not be used,
	* but we need it for being compliant with the OTEL Span interface.
	*
	* @hidden
	* @internal
	*/
	recordException(_exception, _time) {}
};
function spanIsNonRecordingSpan(span) {
	return !!span && span[NON_RECORDING_SPAN_FIELD] === true;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/constants.js
var DEFAULT_ENVIRONMENT = "production";
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
var FROZEN_DSC_FIELD = "_frozenDsc";
function freezeDscOnSpan(span, dsc) {
	addNonEnumerableProperty(span, FROZEN_DSC_FIELD, dsc);
}
function getDynamicSamplingContextFromClient(trace_id, client) {
	const options = client.getOptions();
	const { publicKey: public_key } = client.getDsn() || {};
	const dsc = {
		environment: options.environment || "production",
		release: options.release,
		public_key,
		trace_id,
		org_id: extractOrgIdFromClient(client)
	};
	client.emit("createDsc", dsc);
	return dsc;
}
function getDynamicSamplingContextFromScope(client, scope) {
	const propagationContext = scope.getPropagationContext();
	return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
function getDynamicSamplingContextFromSpan(span) {
	const client = getClient();
	if (!client) return {};
	const rootSpan = getRootSpan(span);
	const rootSpanJson = spanToJSON(rootSpan);
	const rootSpanAttributes = rootSpanJson.data;
	const traceState = rootSpan.spanContext().traceState;
	const rootSpanSampleRate = traceState?.get("sentry.sample_rate") ?? rootSpanAttributes["sentry.sample_rate"] ?? rootSpanAttributes["sentry.previous_trace_sample_rate"];
	function applyLocalSampleRateToDsc(dsc2) {
		if (typeof rootSpanSampleRate === "number" || typeof rootSpanSampleRate === "string") dsc2.sample_rate = `${rootSpanSampleRate}`;
		return dsc2;
	}
	const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
	if (frozenDsc) return applyLocalSampleRateToDsc(frozenDsc);
	const isNonRecordingRoot = spanIsNonRecordingSpan(rootSpan);
	const isIgnoredRoot = isNonRecordingRoot && rootSpan.dropReason === "ignored";
	if (isNonRecordingRoot && (!hasSpansEnabled(client.getOptions()) || isIgnoredRoot)) {
		const capturedScope = getCapturedScopesOnSpan(rootSpan).scope;
		if (capturedScope) {
			const dsc2 = { ...getDynamicSamplingContextFromScope(client, capturedScope) };
			if (isIgnoredRoot) dsc2.sampled = "false";
			return applyLocalSampleRateToDsc(dsc2);
		}
	}
	const traceStateDsc = traceState?.get("sentry.dsc");
	const dscOnTraceState = traceStateDsc && baggageHeaderToDynamicSamplingContext(traceStateDsc);
	if (dscOnTraceState) return applyLocalSampleRateToDsc(dscOnTraceState);
	const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
	const source = rootSpanAttributes["sentry.source"] ?? rootSpanAttributes["sentry.segment.name.source"];
	const name = rootSpanJson.description;
	if (source !== "url" && name) dsc.transaction = name;
	if (hasSpansEnabled()) {
		dsc.sampled = String(spanIsSampled(rootSpan));
		dsc.sample_rand = traceState?.get("sentry.sample_rand") ?? getCapturedScopesOnSpan(rootSpan).scope?.getPropagationContext().sampleRand.toString();
	}
	applyLocalSampleRateToDsc(dsc);
	client.emit("createDsc", dsc, rootSpan);
	return dsc;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/spans/beforeSendSpan.js
function isStreamedBeforeSendSpanCallback(callback) {
	return !!callback && typeof callback === "function" && "_streamed" in callback && !!callback._streamed;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/envelope.js
function createEnvelope(headers, items = []) {
	return [headers, items];
}
function addItemToEnvelope(envelope, newItem) {
	const [headers, items] = envelope;
	return [headers, [...items, newItem]];
}
function forEachEnvelopeItem(envelope, callback) {
	const envelopeItems = envelope[1];
	for (const envelopeItem of envelopeItems) {
		const envelopeItemType = envelopeItem[0].type;
		if (callback(envelopeItem, envelopeItemType)) return true;
	}
	return false;
}
function envelopeContainsItemType(envelope, types) {
	return forEachEnvelopeItem(envelope, (_, type) => types.includes(type));
}
function encodeUTF8(input) {
	const carrier = getSentryCarrier(GLOBAL_OBJ);
	return carrier.encodePolyfill ? carrier.encodePolyfill(input) : new TextEncoder().encode(input);
}
function serializeEnvelope(envelope) {
	const [envHeaders, items] = envelope;
	let parts = JSON.stringify(envHeaders);
	function append(next) {
		if (typeof parts === "string") parts = typeof next === "string" ? parts + next : [encodeUTF8(parts), next];
		else parts.push(typeof next === "string" ? encodeUTF8(next) : next);
	}
	for (const item of items) {
		const [itemHeaders, payload] = item;
		append(`
${JSON.stringify(itemHeaders)}
`);
		if (typeof payload === "string" || payload instanceof Uint8Array) append(payload);
		else {
			let stringifiedPayload;
			try {
				stringifiedPayload = JSON.stringify(payload);
			} catch {
				stringifiedPayload = JSON.stringify(normalize(payload));
			}
			append(stringifiedPayload);
		}
	}
	return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
	const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
	const merged = new Uint8Array(totalLength);
	let offset = 0;
	for (const buffer of buffers) {
		merged.set(buffer, offset);
		offset += buffer.length;
	}
	return merged;
}
function createSpanEnvelopeItem(spanJson) {
	return [{ type: "span" }, spanJson];
}
function createAttachmentEnvelopeItem(attachment) {
	const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data) : attachment.data;
	return [{
		type: "attachment",
		length: buffer.length,
		filename: attachment.filename,
		content_type: attachment.contentType,
		attachment_type: attachment.attachmentType
	}, buffer];
}
var DATA_CATEGORY_OVERRIDES = {
	sessions: "session",
	event: "error",
	client_report: "internal",
	user_report: "default",
	profile_chunk: "profile",
	replay_event: "replay",
	replay_recording: "replay",
	check_in: "monitor",
	raw_security: "security",
	log: "log_item",
	trace_metric: "metric"
};
function _isOverriddenType(type) {
	return type in DATA_CATEGORY_OVERRIDES;
}
function envelopeItemTypeToDataCategory(type) {
	return _isOverriddenType(type) ? DATA_CATEGORY_OVERRIDES[type] : type;
}
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
	if (!metadataOrEvent?.sdk) return;
	const { name, version } = metadataOrEvent.sdk;
	return {
		name,
		version
	};
}
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
	const dynamicSamplingContext = event.sdkProcessingMetadata?.dynamicSamplingContext;
	return {
		event_id: event.event_id,
		sent_at: new Date(safeDateNow()).toISOString(),
		...sdkInfo && { sdk: sdkInfo },
		...!!tunnel && dsn && { dsn: dsnToString(dsn) },
		...dynamicSamplingContext && { trace: dynamicSamplingContext }
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/envelope.js
function _enhanceEventWithSdkInfo(event, newSdkInfo) {
	if (!newSdkInfo) return event;
	const eventSdkInfo = event.sdk || {};
	event.sdk = {
		...eventSdkInfo,
		name: eventSdkInfo.name || newSdkInfo.name,
		version: eventSdkInfo.version || newSdkInfo.version,
		integrations: [...event.sdk?.integrations || [], ...newSdkInfo.integrations || []],
		packages: [...event.sdk?.packages || [], ...newSdkInfo.packages || []],
		settings: event.sdk?.settings || newSdkInfo.settings ? {
			...event.sdk?.settings,
			...newSdkInfo.settings
		} : void 0
	};
	return event;
}
function createSessionEnvelope(session, dsn, metadata, tunnel) {
	const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
	return createEnvelope({
		sent_at: new Date(safeDateNow()).toISOString(),
		...sdkInfo && { sdk: sdkInfo },
		...!!tunnel && dsn && { dsn: dsnToString(dsn) }
	}, ["aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()]]);
}
function createEventEnvelope(event, dsn, metadata, tunnel) {
	const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
	const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
	_enhanceEventWithSdkInfo(event, metadata?.sdk);
	const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
	delete event.sdkProcessingMetadata;
	return createEnvelope(envelopeHeaders, [[{ type: eventType }, event]]);
}
function createSpanEnvelope(spans, client) {
	function dscHasRequiredProps(dsc2) {
		return !!dsc2.trace_id && !!dsc2.public_key;
	}
	const dsc = getDynamicSamplingContextFromSpan(spans[0]);
	const dsn = client?.getDsn();
	const tunnel = client?.getOptions().tunnel;
	const headers = {
		sent_at: new Date(safeDateNow()).toISOString(),
		...dscHasRequiredProps(dsc) && { trace: dsc },
		...!!tunnel && dsn && { dsn: dsnToString(dsn) }
	};
	const { beforeSendSpan, ignoreSpans } = client?.getOptions() || {};
	const filteredSpans = ignoreSpans?.length ? spans.filter((span) => {
		const json = spanToJSON(span);
		return !shouldIgnoreSpan({
			description: json.description,
			op: json.op,
			attributes: json.data
		}, ignoreSpans);
	}) : spans;
	const droppedSpans = spans.length - filteredSpans.length;
	if (droppedSpans) client?.recordDroppedEvent("before_send", "span", droppedSpans);
	const convertToSpanJSON = beforeSendSpan ? (span) => {
		const spanJson = spanToJSON(span);
		const processedSpan = !isStreamedBeforeSendSpanCallback(beforeSendSpan) ? beforeSendSpan(spanJson) : spanJson;
		if (!processedSpan) {
			showSpanDropWarning();
			return spanJson;
		}
		return processedSpan;
	} : spanToJSON;
	const items = [];
	for (const span of filteredSpans) {
		const spanJson = convertToSpanJSON(span);
		if (spanJson) items.push(createSpanEnvelopeItem(spanJson));
	}
	return createEnvelope(headers, items);
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/logSpans.js
function logSpanStart(span) {
	if (!DEBUG_BUILD) return;
	const { description = "< unknown name >", op = "< unknown op >", parent_span_id: parentSpanId } = spanToJSON(span);
	const { spanId } = span.spanContext();
	const sampled = spanIsSampled(span);
	const rootSpan = getRootSpan(span);
	const isRootSpan = rootSpan === span;
	const header = `[Tracing] Starting ${sampled ? "sampled" : "unsampled"} ${isRootSpan ? "root " : ""}span`;
	const infoParts = [
		`op: ${op}`,
		`name: ${description}`,
		`ID: ${spanId}`
	];
	if (parentSpanId) infoParts.push(`parent ID: ${parentSpanId}`);
	if (!isRootSpan) {
		const { op: op2, description: description2 } = spanToJSON(rootSpan);
		infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
		if (op2) infoParts.push(`root op: ${op2}`);
		if (description2) infoParts.push(`root description: ${description2}`);
	}
	debug.log(`${header}
  ${infoParts.join("\n  ")}`);
}
function logSpanEnd(span) {
	if (!DEBUG_BUILD) return;
	const { description = "< unknown name >", op = "< unknown op >" } = spanToJSON(span);
	const { spanId } = span.spanContext();
	const msg = `[Tracing] Finishing "${op}" ${getRootSpan(span) === span ? "root " : ""}span "${description}" with ID ${spanId}`;
	debug.log(msg);
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/measurement.js
function timedEventsToMeasurements(events) {
	if (!events || events.length === 0) return;
	const measurements = {};
	events.forEach((event) => {
		const attributes = event.attributes || {};
		const unit = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
		const value = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
		if (typeof unit === "string" && typeof value === "number") measurements[event.name] = {
			value,
			unit
		};
	});
	return measurements;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/segmentSpanCaptureStrategy.js
function getSegmentSpanCaptureStrategy() {
	return getSentryCarrier(getMainCarrier()).segmentSpanCaptureStrategy;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/spans/hasSpanStreamingEnabled.js
function hasSpanStreamingEnabled(client) {
	return client.getOptions().traceLifecycle === "stream";
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/sentrySpan.js
var MAX_SPAN_COUNT = 1e3;
var SentrySpan = class {
	/**
	* You should never call the constructor manually, always use `Sentry.startSpan()`
	* or other span methods.
	* @internal
	* @hideconstructor
	* @hidden
	*/
	constructor(spanContext = {}) {
		this._traceId = spanContext.traceId || generateTraceId();
		this._spanId = spanContext.spanId || generateSpanId();
		this._startTime = spanContext.startTimestamp || timestampInSeconds();
		this._links = spanContext.links;
		this._attributes = {};
		this.setAttributes({
			[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
			[SEMANTIC_ATTRIBUTE_SENTRY_OP]: spanContext.op,
			...spanContext.attributes
		});
		this._name = spanContext.name;
		if (spanContext.parentSpanId) this._parentSpanId = spanContext.parentSpanId;
		if ("sampled" in spanContext) this._sampled = spanContext.sampled;
		if (spanContext.endTimestamp) this._endTime = spanContext.endTimestamp;
		this._events = [];
		this._isStandaloneSpan = spanContext.isStandalone;
		if (this._endTime) this._onSpanEnded();
	}
	/** @inheritDoc */
	addLink(link) {
		if (this._frozen) return this;
		if (this._links) this._links.push(link);
		else this._links = [link];
		return this;
	}
	/** @inheritDoc */
	addLinks(links) {
		if (this._frozen) return this;
		if (this._links) this._links.push(...links);
		else this._links = links;
		return this;
	}
	/**
	* This should generally not be used,
	* but it is needed for being compliant with the OTEL Span interface.
	*
	* @hidden
	* @internal
	*/
	recordException(_exception, _time) {}
	/** @inheritdoc */
	spanContext() {
		const { _spanId: spanId, _traceId: traceId, _sampled: sampled } = this;
		return {
			spanId,
			traceId,
			traceFlags: sampled ? 1 : 0
		};
	}
	/** @inheritdoc */
	setAttribute(key, value) {
		if (this._frozen) return this;
		if (value === void 0) delete this._attributes[key];
		else this._attributes[key] = value;
		if (key === "sentry.source" && value !== void 0 && spanShouldInferOtelSource(this)) markSpanSourceAsExplicit(this);
		return this;
	}
	/** @inheritdoc */
	setAttributes(attributes) {
		Object.keys(attributes).forEach((key) => this.setAttribute(key, attributes[key]));
		return this;
	}
	/**
	* This should generally not be used,
	* but we need it for browser tracing where we want to adjust the start time afterwards.
	* USE THIS WITH CAUTION!
	*
	* @hidden
	* @internal
	*/
	updateStartTime(timeInput) {
		if (this._frozen) return;
		this._startTime = spanTimeInputToSeconds(timeInput);
	}
	/**
	* @inheritDoc
	*/
	setStatus(value) {
		if (this._frozen) return this;
		this._status = value;
		return this;
	}
	/**
	* @inheritDoc
	*/
	updateName(name) {
		if (this._frozen) return this;
		this._name = name;
		if (!spanShouldInferOtelSource(this)) this.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
		return this;
	}
	/** @inheritdoc */
	end(endTimestamp) {
		if (this._endTime) {
			this._frozen = spanIsTracerProviderSpan(this);
			return;
		}
		this._endTime = spanTimeInputToSeconds(endTimestamp);
		logSpanEnd(this);
		this._onSpanEnded();
		this._frozen = spanIsTracerProviderSpan(this);
	}
	/**
	* Get JSON representation of this span.
	*
	* @hidden
	* @internal This method is purely for internal purposes and should not be used outside
	* of SDK code. If you need to get a JSON representation of a span,
	* use `spanToJSON(span)` instead.
	*/
	getSpanJSON() {
		return {
			data: this._attributes,
			description: this._name,
			op: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
			parent_span_id: this._parentSpanId,
			span_id: this._spanId,
			start_timestamp: this._startTime,
			status: getStatusMessage(this._status),
			timestamp: this._endTime,
			trace_id: this._traceId,
			origin: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
			profile_id: this._attributes[SEMANTIC_ATTRIBUTE_PROFILE_ID],
			exclusive_time: this._attributes[SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
			measurements: timedEventsToMeasurements(this._events),
			is_segment: this._isStandaloneSpan && getRootSpan(this) === this || void 0,
			segment_id: this._isStandaloneSpan ? getRootSpan(this).spanContext().spanId : void 0,
			links: convertSpanLinksForEnvelope(this._links)
		};
	}
	/**
	* Get {@link StreamedSpanJSON} representation of this span.
	*
	* @hidden
	* @internal This method is purely for internal purposes and should not be used outside
	* of SDK code. If you need to get a JSON representation of a span,
	* use `spanToStreamedSpanJSON(span)` instead.
	*/
	getStreamedSpanJSON() {
		return {
			name: this._name ?? "",
			span_id: this._spanId,
			trace_id: this._traceId,
			parent_span_id: this._parentSpanId,
			start_timestamp: this._startTime,
			end_timestamp: this._endTime ?? this._startTime,
			is_segment: this._isStandaloneSpan || this === getRootSpan(this),
			status: getSimpleStatus(this._status),
			attributes: addStatusMessageAttribute(this._attributes, this._status),
			links: getStreamedSpanLinks(this._links)
		};
	}
	/** @inheritdoc */
	isRecording() {
		return !this._endTime && !!this._sampled;
	}
	/**
	* @inheritdoc
	*/
	addEvent(name, attributesOrStartTime, startTime) {
		if (this._frozen) return this;
		DEBUG_BUILD && debug.log("[Tracing] Adding an event to span:", name);
		const time = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || timestampInSeconds();
		const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};
		const event = {
			name,
			time: spanTimeInputToSeconds(time),
			attributes
		};
		this._events.push(event);
		return this;
	}
	/**
	* This method should generally not be used,
	* but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
	* USE THIS WITH CAUTION!
	* @internal
	* @hidden
	* @experimental
	*/
	isStandaloneSpan() {
		return !!this._isStandaloneSpan;
	}
	/** Emit `spanEnd` when the span is ended. */
	_onSpanEnded() {
		const client = getClient();
		if (client) {
			client.emit("spanEnd", this);
			if (!this._isStandaloneSpan) client.emit("afterSpanEnd", this);
		}
		const rootSpan = getRootSpan(this);
		const isSegmentSpan = this._isStandaloneSpan || this === rootSpan;
		if (this._isStandaloneSpan) {
			if (this._sampled) sendSpanEnvelope(createSpanEnvelope([this], client));
			else {
				DEBUG_BUILD && debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
				if (client) client.recordDroppedEvent("sample_rate", "span");
			}
			return;
		}
		if (!isSegmentSpan) {
			const strategy2 = getSegmentSpanCaptureStrategy();
			if (strategy2) {
				const scope2 = getCapturedScopesOnSpan(this).scope || getCurrentScope();
				strategy2.onChildSpanEnded(this, rootSpan, (options) => this._convertSpanToTransaction(options), scope2);
			}
			return;
		}
		if (client && hasSpanStreamingEnabled(client)) {
			client.emit("afterSegmentSpanEnd", this);
			return;
		}
		const scope = getCapturedScopesOnSpan(this).scope || getCurrentScope();
		const strategy = getSegmentSpanCaptureStrategy();
		if (strategy) strategy.onSegmentSpanEnded((options) => this._convertSpanToTransaction(options), scope);
		else {
			const transactionEvent = this._convertSpanToTransaction();
			if (transactionEvent) scope.captureEvent(transactionEvent);
		}
	}
	/**
	* Finish the transaction & prepare the event to send to Sentry.
	*/
	_convertSpanToTransaction(options = {}) {
		if (!isFullFinishedSpan(spanToJSON(this))) return;
		if (!this._name) {
			DEBUG_BUILD && debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
			this._name = "<unlabeled transaction>";
		}
		const { scope: capturedSpanScope, isolationScope: capturedSpanIsolationScope } = getCapturedScopesOnSpan(this);
		const normalizedRequest = capturedSpanScope?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
		if (this._sampled !== true) return;
		options.onSpanCaptured?.(this);
		const spans = [];
		for (const descendant of getSpanDescendants(this)) {
			if (descendant === this || isStandaloneSpan(descendant) || options.isSpanAlreadyCaptured?.(descendant)) continue;
			const spanJSON = spanToJSON(descendant);
			if (!isFullFinishedSpan(spanJSON)) continue;
			options.onSpanCaptured?.(descendant);
			spans.push(spanJSON);
		}
		const source = this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
		delete this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
		let hasGenAiSpans = false;
		spans.forEach((span) => {
			delete span.data[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
			if (span.op?.startsWith("gen_ai.")) hasGenAiSpans = true;
		});
		const transaction = {
			contexts: { trace: spanToTransactionTraceContext(this) },
			spans: spans.length > MAX_SPAN_COUNT ? spans.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans,
			start_timestamp: this._startTime,
			timestamp: this._endTime,
			transaction: this._name,
			type: "transaction",
			sdkProcessingMetadata: {
				capturedSpanScope,
				capturedSpanIsolationScope,
				dynamicSamplingContext: getDynamicSamplingContextFromSpan(this),
				hasGenAiSpans
			},
			request: normalizedRequest,
			...source && { transaction_info: { source } }
		};
		const measurements = timedEventsToMeasurements(this._events);
		if (measurements && Object.keys(measurements).length) {
			DEBUG_BUILD && debug.log("[Measurements] Adding measurements to transaction event", JSON.stringify(measurements, void 0, 2));
			transaction.measurements = measurements;
		}
		return transaction;
	}
};
function isSpanTimeInput(value) {
	return value && typeof value === "number" || value instanceof Date || Array.isArray(value);
}
function isFullFinishedSpan(input) {
	return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
}
function isStandaloneSpan(span) {
	return span instanceof SentrySpan && span.isStandaloneSpan();
}
function sendSpanEnvelope(envelope) {
	const client = getClient();
	if (!client) return;
	const spanItems = envelope[1];
	if (!spanItems || spanItems.length === 0) {
		client.recordDroppedEvent("before_send", "span");
		return;
	}
	client.sendEnvelope(envelope);
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/sampling.js
function sampleSpan(options, samplingContext, sampleRand) {
	if (!hasSpansEnabled(options)) return [false];
	let localSampleRateWasApplied = void 0;
	let sampleRate;
	if (typeof options.tracesSampler === "function") {
		sampleRate = options.tracesSampler({
			...samplingContext,
			inheritOrSampleWith: (fallbackSampleRate) => {
				if (typeof samplingContext.parentSampleRate === "number") return samplingContext.parentSampleRate;
				if (typeof samplingContext.parentSampled === "boolean") return Number(samplingContext.parentSampled);
				return fallbackSampleRate;
			}
		});
		localSampleRateWasApplied = true;
	} else if (samplingContext.parentSampled !== void 0) sampleRate = samplingContext.parentSampled;
	else if (typeof options.tracesSampleRate !== "undefined") {
		sampleRate = options.tracesSampleRate;
		localSampleRateWasApplied = true;
	}
	const parsedSampleRate = parseSampleRate(sampleRate);
	if (parsedSampleRate === void 0) {
		DEBUG_BUILD && debug.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(sampleRate)} of type ${JSON.stringify(typeof sampleRate)}.`);
		return [false];
	}
	if (!parsedSampleRate) {
		DEBUG_BUILD && debug.log(`[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`);
		return [
			false,
			parsedSampleRate,
			localSampleRateWasApplied
		];
	}
	const shouldSample = sampleRand < parsedSampleRate;
	if (!shouldSample) DEBUG_BUILD && debug.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(sampleRate)})`);
	return [
		shouldSample,
		parsedSampleRate,
		localSampleRateWasApplied
	];
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/tracing/trace.js
var SUPPRESS_TRACING_KEY = "__SENTRY_SUPPRESS_TRACING__";
function startInactiveSpan(options) {
	const acs = getAcs();
	if (acs.startInactiveSpan) return acs.startInactiveSpan(options);
	return _startInactiveSpanImpl(options);
}
function _startInactiveSpanImpl(options) {
	const spanArguments = parseSentrySpanArguments(options);
	const { forceTransaction, parentSpan: customParentSpan } = options;
	return (options.scope ? (callback) => withScope(options.scope, callback) : customParentSpan !== void 0 ? (callback) => withActiveSpan(customParentSpan, callback) : (callback) => callback())(() => {
		const scope = getCurrentScope();
		const parentSpan = getParentSpan(scope, customParentSpan);
		const client = getClient();
		if (options.onlyIfParent && !parentSpan) return startMissingRequiredParentSpan(scope, client);
		return createChildOrRootSpan({
			parentSpan,
			spanArguments,
			forceTransaction,
			scope
		});
	});
}
function withActiveSpan(span, callback) {
	const acs = getAcs();
	if (acs.withActiveSpan) return acs.withActiveSpan(span, callback);
	return withScope((scope) => {
		_setSpanForScope(scope, span || void 0);
		return callback(scope);
	});
}
function isTracingSuppressed(scope = getCurrentScope()) {
	const acs = getAcs();
	if (acs.isTracingSuppressed) return acs.isTracingSuppressed(scope);
	return scope.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY] === true;
}
function startMissingRequiredParentSpan(scope, client) {
	client?.recordDroppedEvent("no_parent_span", "span");
	const span = new SentryNonRecordingSpan({ traceId: scope.getPropagationContext().traceId });
	setCapturedScopesOnSpan(span, scope, getIsolationScope());
	return span;
}
function createChildOrRootSpan({ parentSpan, spanArguments, forceTransaction, scope }) {
	const isolationScope = getIsolationScope();
	if (!hasSpansEnabled()) {
		const scopePropagationContext = {
			...isolationScope.getPropagationContext(),
			...scope.getPropagationContext()
		};
		const span2 = new SentryNonRecordingSpan({ traceId: parentSpan ? parentSpan.spanContext().traceId : scopePropagationContext.traceId });
		if (parentSpan && !forceTransaction) addChildSpanToSpan(parentSpan, span2);
		setCapturedScopesOnSpan(span2, scope, isolationScope);
		return span2;
	}
	const client = getClient();
	if (_shouldIgnoreStreamedSpan(client, spanArguments)) {
		if (!isTracingSuppressed(scope)) client?.recordDroppedEvent("ignored", "span");
		const ignoredSpan = new SentryNonRecordingSpan({
			dropReason: "ignored",
			traceId: parentSpan?.spanContext().traceId ?? scope.getPropagationContext().traceId
		});
		if (parentSpan && !forceTransaction) addChildSpanToSpan(parentSpan, ignoredSpan);
		setCapturedScopesOnSpan(ignoredSpan, scope, isolationScope);
		return ignoredSpan;
	}
	let span;
	if (parentSpan && !forceTransaction) {
		span = _startChildSpan(parentSpan, scope, spanArguments, isolationScope);
		addChildSpanToSpan(parentSpan, span);
	} else if (parentSpan) {
		const dsc = getDynamicSamplingContextFromSpan(parentSpan);
		const { traceId, spanId: parentSpanId } = parentSpan.spanContext();
		const parentSampled = spanIsSampled(parentSpan);
		span = _startRootSpan({
			traceId,
			parentSpanId,
			...spanArguments
		}, scope, isolationScope, parentSampled);
		freezeDscOnSpan(span, dsc);
	} else {
		const { traceId, dsc, parentSpanId, sampled: parentSampled } = {
			...isolationScope.getPropagationContext(),
			...scope.getPropagationContext()
		};
		span = _startRootSpan({
			traceId,
			parentSpanId,
			...spanArguments
		}, scope, isolationScope, parentSampled);
		if (dsc) freezeDscOnSpan(span, dsc);
	}
	logSpanStart(span);
	return span;
}
function parseSentrySpanArguments(options) {
	const initialCtx = {
		isStandalone: (options.experimental || {}).standalone,
		...options
	};
	if (options.startTime) {
		const ctx = { ...initialCtx };
		ctx.startTimestamp = spanTimeInputToSeconds(options.startTime);
		delete ctx.startTime;
		return ctx;
	}
	return initialCtx;
}
function getAcs() {
	return getAsyncContextStrategy(getMainCarrier());
}
function _startRootSpan(spanArguments, scope, isolationScope, parentSampled) {
	const client = getClient();
	const options = client?.getOptions() || {};
	const { name = "" } = spanArguments;
	const mutableSpanSamplingData = {
		spanAttributes: { ...spanArguments.attributes },
		spanName: name,
		parentSampled
	};
	client?.emit("beforeSampling", mutableSpanSamplingData, { decision: false });
	const finalParentSampled = mutableSpanSamplingData.parentSampled ?? parentSampled;
	const finalAttributes = mutableSpanSamplingData.spanAttributes;
	const currentPropagationContext = scope.getPropagationContext();
	const _isTracingSuppressed = isTracingSuppressed(scope);
	const [sampled, sampleRate, localSampleRateWasApplied] = _isTracingSuppressed ? [false] : sampleSpan(options, {
		name,
		parentSampled: finalParentSampled,
		attributes: finalAttributes,
		normalizedRequest: isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest,
		parentSampleRate: parseSampleRate(currentPropagationContext.dsc?.sample_rate)
	}, currentPropagationContext.sampleRand);
	const rootSpan = new SentrySpan({
		...spanArguments,
		attributes: {
			[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
			[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate !== void 0 && localSampleRateWasApplied ? sampleRate : void 0,
			...finalAttributes
		},
		sampled
	});
	if (!sampled && client && !_isTracingSuppressed) {
		DEBUG_BUILD && debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled.");
		client.recordDroppedEvent("sample_rate", hasSpanStreamingEnabled(client) ? "span" : "transaction");
	}
	setCapturedScopesOnSpan(rootSpan, scope, isolationScope);
	if (client) client.emit("spanStart", rootSpan);
	return rootSpan;
}
function _startChildSpan(parentSpan, scope, spanArguments, isolationScope) {
	const { spanId, traceId } = parentSpan.spanContext();
	const _isTracingSuppressed = isTracingSuppressed(scope);
	const sampled = _isTracingSuppressed ? false : spanIsSampled(parentSpan);
	const childSpan = sampled ? new SentrySpan({
		...spanArguments,
		parentSpanId: spanId,
		traceId,
		sampled
	}) : new SentryNonRecordingSpan({ traceId });
	addChildSpanToSpan(parentSpan, childSpan);
	setCapturedScopesOnSpan(childSpan, scope, isolationScope);
	const client = getClient();
	if (!client) return childSpan;
	if (hasSpanStreamingEnabled(client) && spanIsNonRecordingSpan(childSpan)) {
		if (spanIsNonRecordingSpan(parentSpan) && parentSpan.dropReason) {
			childSpan.dropReason = parentSpan.dropReason;
			client.recordDroppedEvent(parentSpan.dropReason, "span");
		} else if (!_isTracingSuppressed) {
			childSpan.dropReason = "sample_rate";
			client.recordDroppedEvent("sample_rate", "span");
		}
	}
	client.emit("spanStart", childSpan);
	if (spanArguments.endTimestamp) {
		client.emit("spanEnd", childSpan);
		client.emit("afterSpanEnd", childSpan);
	}
	return childSpan;
}
function getParentSpan(scope, customParentSpan) {
	if (customParentSpan) return customParentSpan;
	if (customParentSpan === null) return;
	const span = _getSpanForScope(scope);
	if (!span) return;
	const client = getClient();
	if ((client ? client.getOptions() : {}).parentSpanIsAlwaysRootSpan) return getRootSpan(span);
	return span;
}
function _shouldIgnoreStreamedSpan(client, spanArguments) {
	const ignoreSpans = client?.getOptions().ignoreSpans;
	if (!client || !hasSpanStreamingEnabled(client) || !ignoreSpans?.length) return false;
	return shouldIgnoreSpan({
		description: spanArguments.name || "",
		op: spanArguments.attributes?.["sentry.op"] || spanArguments.op,
		attributes: spanArguments.attributes
	}, ignoreSpans);
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/scopeData.js
function applyScopeDataToEvent(event, data) {
	const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data;
	applyDataToEvent(event, data);
	if (span) applySpanToEvent(event, span);
	applyFingerprintToEvent(event, fingerprint);
	applyBreadcrumbsToEvent(event, breadcrumbs);
	applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
function mergeScopeData(data, mergeData) {
	const { extra, tags, attributes, user, contexts, level, sdkProcessingMetadata, breadcrumbs, fingerprint, eventProcessors, attachments, propagationContext, transactionName, span } = mergeData;
	mergeAndOverwriteScopeData(data, "extra", extra);
	mergeAndOverwriteScopeData(data, "tags", tags);
	mergeAndOverwriteScopeData(data, "attributes", attributes);
	mergeAndOverwriteScopeData(data, "user", user);
	mergeAndOverwriteScopeData(data, "contexts", contexts);
	data.sdkProcessingMetadata = merge(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
	if (level) data.level = level;
	if (transactionName) data.transactionName = transactionName;
	if (span) data.span = span;
	if (breadcrumbs.length) data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
	if (fingerprint.length) data.fingerprint = [...data.fingerprint, ...fingerprint];
	if (eventProcessors.length) data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
	if (attachments.length) data.attachments = [...data.attachments, ...attachments];
	data.propagationContext = {
		...data.propagationContext,
		...propagationContext
	};
}
function mergeAndOverwriteScopeData(data, prop, mergeVal) {
	data[prop] = merge(data[prop], mergeVal, 1);
}
function getCombinedScopeData(isolationScope, currentScope) {
	const scopeData = getGlobalScope().getScopeData();
	isolationScope && mergeScopeData(scopeData, isolationScope.getScopeData());
	currentScope && mergeScopeData(scopeData, currentScope.getScopeData());
	return scopeData;
}
function applyDataToEvent(event, data) {
	const { extra, tags, user, contexts, level, transactionName } = data;
	if (Object.keys(extra).length) event.extra = {
		...extra,
		...event.extra
	};
	if (Object.keys(tags).length) event.tags = {
		...tags,
		...event.tags
	};
	if (Object.keys(user).length) event.user = {
		...user,
		...event.user
	};
	if (Object.keys(contexts).length) event.contexts = {
		...contexts,
		...event.contexts
	};
	if (level) event.level = level;
	if (transactionName && event.type !== "transaction") event.transaction = transactionName;
}
function applyBreadcrumbsToEvent(event, breadcrumbs) {
	const mergedBreadcrumbs = [...event.breadcrumbs || [], ...breadcrumbs];
	event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
}
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
	event.sdkProcessingMetadata = {
		...event.sdkProcessingMetadata,
		...sdkProcessingMetadata
	};
}
function applySpanToEvent(event, span) {
	event.contexts = {
		trace: spanToTraceContext(span),
		...event.contexts
	};
	event.sdkProcessingMetadata = {
		dynamicSamplingContext: getDynamicSamplingContextFromSpan(span),
		...event.sdkProcessingMetadata
	};
	const transactionName = spanToJSON(getRootSpan(span)).description;
	if (transactionName && !event.transaction && event.type === "transaction") event.transaction = transactionName;
}
function applyFingerprintToEvent(event, fingerprint) {
	event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : [];
	if (fingerprint) event.fingerprint = event.fingerprint.concat(fingerprint);
	if (!event.fingerprint.length) delete event.fingerprint;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/syncpromise.js
var STATE_PENDING = 0;
var STATE_RESOLVED = 1;
var STATE_REJECTED = 2;
function resolvedSyncPromise(value) {
	return new SyncPromise((resolve) => {
		resolve(value);
	});
}
function rejectedSyncPromise(reason) {
	return new SyncPromise((_, reject) => {
		reject(reason);
	});
}
var SyncPromise = class SyncPromise {
	constructor(executor) {
		this._state = STATE_PENDING;
		this._handlers = [];
		this._runExecutor(executor);
	}
	/** @inheritdoc */
	then(onfulfilled, onrejected) {
		return new SyncPromise((resolve, reject) => {
			this._handlers.push([
				false,
				(result) => {
					if (!onfulfilled) resolve(result);
					else try {
						resolve(onfulfilled(result));
					} catch (e) {
						reject(e);
					}
				},
				(reason) => {
					if (!onrejected) reject(reason);
					else try {
						resolve(onrejected(reason));
					} catch (e) {
						reject(e);
					}
				}
			]);
			this._executeHandlers();
		});
	}
	/** @inheritdoc */
	catch(onrejected) {
		return this.then((val) => val, onrejected);
	}
	/** @inheritdoc */
	finally(onfinally) {
		return new SyncPromise((resolve, reject) => {
			let val;
			let isRejected;
			return this.then((value) => {
				isRejected = false;
				val = value;
				if (onfinally) onfinally();
			}, (reason) => {
				isRejected = true;
				val = reason;
				if (onfinally) onfinally();
			}).then(() => {
				if (isRejected) {
					reject(val);
					return;
				}
				resolve(val);
			});
		});
	}
	/** Excute the resolve/reject handlers. */
	_executeHandlers() {
		if (this._state === STATE_PENDING) return;
		const cachedHandlers = this._handlers.slice();
		this._handlers = [];
		cachedHandlers.forEach((handler) => {
			if (handler[0]) return;
			if (this._state === STATE_RESOLVED) handler[1](this._value);
			if (this._state === STATE_REJECTED) handler[2](this._value);
			handler[0] = true;
		});
	}
	/** Run the executor for the SyncPromise. */
	_runExecutor(executor) {
		const setResult = (state, value) => {
			if (this._state !== STATE_PENDING) return;
			if (isThenable(value)) {
				value.then(resolve, reject);
				return;
			}
			this._state = state;
			this._value = value;
			this._executeHandlers();
		};
		const resolve = (value) => {
			setResult(STATE_RESOLVED, value);
		};
		const reject = (reason) => {
			setResult(STATE_REJECTED, reason);
		};
		try {
			executor(resolve, reject);
		} catch (e) {
			reject(e);
		}
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/eventProcessors.js
function notifyEventProcessors(processors, event, hint, index = 0) {
	try {
		const result = _notifyEventProcessors(event, hint, processors, index);
		return isThenable(result) ? result : resolvedSyncPromise(result);
	} catch (error) {
		return rejectedSyncPromise(error);
	}
}
function _notifyEventProcessors(event, hint, processors, index) {
	const processor = processors[index];
	if (!event || !processor) return event;
	const result = processor({ ...event }, hint);
	DEBUG_BUILD && result === null && debug.log(`Event processor "${processor.id || "?"}" dropped event`);
	if (isThenable(result)) return result.then((final) => _notifyEventProcessors(final, hint, processors, index + 1));
	return _notifyEventProcessors(result, hint, processors, index + 1);
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/debug-ids.js
var parsedStackResults;
var lastSentryKeysCount;
var lastNativeKeysCount;
var cachedFilenameDebugIds;
function getFilenameToDebugIdMap(stackParser) {
	const sentryDebugIdMap = GLOBAL_OBJ._sentryDebugIds;
	const nativeDebugIdMap = GLOBAL_OBJ._debugIds;
	if (!sentryDebugIdMap && !nativeDebugIdMap) return {};
	const sentryDebugIdKeys = sentryDebugIdMap ? Object.keys(sentryDebugIdMap) : [];
	const nativeDebugIdKeys = nativeDebugIdMap ? Object.keys(nativeDebugIdMap) : [];
	if (cachedFilenameDebugIds && sentryDebugIdKeys.length === lastSentryKeysCount && nativeDebugIdKeys.length === lastNativeKeysCount) return cachedFilenameDebugIds;
	lastSentryKeysCount = sentryDebugIdKeys.length;
	lastNativeKeysCount = nativeDebugIdKeys.length;
	cachedFilenameDebugIds = {};
	if (!parsedStackResults) parsedStackResults = {};
	const processDebugIds = (debugIdKeys, debugIdMap) => {
		for (const key of debugIdKeys) {
			const debugId = debugIdMap[key];
			const result = parsedStackResults?.[key];
			if (result && cachedFilenameDebugIds && debugId) {
				cachedFilenameDebugIds[result[0]] = debugId;
				if (parsedStackResults) parsedStackResults[key] = [result[0], debugId];
			} else if (debugId) {
				const parsedStack = stackParser(key);
				for (let i = parsedStack.length - 1; i >= 0; i--) {
					const filename = parsedStack[i]?.filename;
					if (filename && cachedFilenameDebugIds && parsedStackResults) {
						cachedFilenameDebugIds[filename] = debugId;
						parsedStackResults[key] = [filename, debugId];
						break;
					}
				}
			}
		}
	};
	if (sentryDebugIdMap) processDebugIds(sentryDebugIdKeys, sentryDebugIdMap);
	if (nativeDebugIdMap) processDebugIds(nativeDebugIdKeys, nativeDebugIdMap);
	return cachedFilenameDebugIds;
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/utils/prepareEvent.js
function prepareEvent(options, event, hint, scope, client, isolationScope) {
	const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
	const prepared = {
		...event,
		event_id: event.event_id || hint.event_id || uuid4(),
		timestamp: event.timestamp || dateTimestampInSeconds()
	};
	const integrations = hint.integrations || options.integrations.map((i) => i.name);
	applyClientOptions(prepared, options);
	applyIntegrationsMetadata(prepared, integrations);
	if (client) client.emit("applyFrameMetadata", event);
	if (event.type === void 0) applyDebugIds(prepared, options.stackParser);
	const finalScope = getFinalScope(scope, hint.captureContext);
	if (hint.mechanism) addExceptionMechanism(prepared, hint.mechanism);
	const clientEventProcessors = client ? client.getEventProcessors() : [];
	const data = getCombinedScopeData(isolationScope, finalScope);
	const attachments = [...hint.attachments || [], ...data.attachments];
	if (attachments.length) hint.attachments = attachments;
	applyScopeDataToEvent(prepared, data);
	const eventProcessors = [...clientEventProcessors, ...data.eventProcessors];
	return (hint.data && hint.data.__sentry__ === true ? resolvedSyncPromise(prepared) : notifyEventProcessors(eventProcessors, prepared, hint)).then((evt) => {
		if (evt) applyDebugMeta(evt);
		if (typeof normalizeDepth === "number" && normalizeDepth > 0) return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
		return evt;
	});
}
function applyClientOptions(event, options) {
	const { environment, release, dist, maxValueLength } = options;
	event.environment = event.environment || environment || "production";
	if (!event.release && release) event.release = release;
	if (!event.dist && dist) event.dist = dist;
	const request = event.request;
	if (request?.url && maxValueLength) request.url = truncate(request.url, maxValueLength);
	if (maxValueLength) event.exception?.values?.forEach((exception) => {
		if (exception.value) exception.value = truncate(exception.value, maxValueLength);
	});
}
function applyDebugIds(event, stackParser) {
	const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
	event.exception?.values?.forEach((exception) => {
		exception.stacktrace?.frames?.forEach((frame) => {
			if (frame.filename) frame.debug_id = filenameDebugIdMap[frame.filename];
		});
	});
}
function applyDebugMeta(event) {
	const filenameDebugIdMap = {};
	event.exception?.values?.forEach((exception) => {
		exception.stacktrace?.frames?.forEach((frame) => {
			if (frame.debug_id) {
				if (frame.abs_path) filenameDebugIdMap[frame.abs_path] = frame.debug_id;
				else if (frame.filename) filenameDebugIdMap[frame.filename] = frame.debug_id;
				delete frame.debug_id;
			}
		});
	});
	if (Object.keys(filenameDebugIdMap).length === 0) return;
	event.debug_meta = event.debug_meta || {};
	event.debug_meta.images = event.debug_meta.images || [];
	const images = event.debug_meta.images;
	Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
		images.push({
			type: "sourcemap",
			code_file: filename,
			debug_id
		});
	});
}
function applyIntegrationsMetadata(event, integrationNames) {
	if (integrationNames.length > 0) {
		event.sdk = event.sdk || {};
		event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
	}
}
function normalizeEvent(event, depth, maxBreadth) {
	if (!event) return null;
	const normalized = {
		...event,
		...event.breadcrumbs && { breadcrumbs: event.breadcrumbs.map((b) => ({
			...b,
			...b.data && { data: normalize(b.data, depth, maxBreadth) }
		})) },
		...event.user && { user: normalize(event.user, depth, maxBreadth) },
		...event.contexts && { contexts: normalize(event.contexts, depth, maxBreadth) },
		...event.extra && { extra: normalize(event.extra, depth, maxBreadth) }
	};
	if (event.contexts?.trace && normalized.contexts) {
		normalized.contexts.trace = event.contexts.trace;
		if (event.contexts.trace.data) normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
	}
	if (event.spans) normalized.spans = event.spans.map((span) => {
		return {
			...span,
			...span.data && { data: normalize(span.data, depth, maxBreadth) }
		};
	});
	if (event.contexts?.flags && normalized.contexts) normalized.contexts.flags = normalize(event.contexts.flags, 3, maxBreadth);
	return normalized;
}
function getFinalScope(scope, captureContext) {
	if (!captureContext) return scope;
	const finalScope = scope ? scope.clone() : new Scope();
	finalScope.update(captureContext);
	return finalScope;
}
function parseEventHintOrCaptureContext(hint) {
	if (!hint) return;
	if (hintIsScopeOrFunction(hint)) return { captureContext: hint };
	if (hintIsScopeContext(hint)) return { captureContext: hint };
	return hint;
}
function hintIsScopeOrFunction(hint) {
	return hint instanceof Scope || typeof hint === "function";
}
var captureContextKeys = [
	"user",
	"level",
	"extra",
	"contexts",
	"tags",
	"fingerprint",
	"propagationContext"
];
function hintIsScopeContext(hint) {
	return Object.keys(hint).some((key) => captureContextKeys.includes(key));
}
//#endregion
//#region ../../../node_modules/.pnpm/@sentry+core@10.70.0/node_modules/@sentry/core/build/esm/exports.js
function captureException(exception, hint) {
	return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
}
function captureMessage(message, captureContext) {
	const level = typeof captureContext === "string" ? captureContext : void 0;
	const hint = typeof captureContext !== "string" ? { captureContext } : void 0;
	return getCurrentScope().captureMessage(message, level, hint);
}
function captureEvent(event, hint) {
	return getCurrentScope().captureEvent(event, hint);
}
function setTag(key, value) {
	getIsolationScope().setTag(key, value);
}
function setUser(user) {
	getIsolationScope().setUser(user);
}
function startSession(context) {
	const isolationScope = getIsolationScope();
	const { user } = getCombinedScopeData(isolationScope, getCurrentScope());
	const { userAgent } = GLOBAL_OBJ.navigator || {};
	const session = makeSession({
		user,
		...userAgent && { userAgent },
		...context
	});
	const currentSession = isolationScope.getSession();
	if (currentSession?.status === "ok") updateSession(currentSession, { status: "exited" });
	endSession();
	isolationScope.setSession(session);
	return session;
}
function endSession() {
	const isolationScope = getIsolationScope();
	const session = getCurrentScope().getSession() || isolationScope.getSession();
	if (session) closeSession(session);
	_sendSessionUpdate();
	isolationScope.setSession();
}
function _sendSessionUpdate() {
	const isolationScope = getIsolationScope();
	const client = getClient();
	const session = isolationScope.getSession();
	if (session && client) client.captureSession(session);
}
function captureSession(end = false) {
	if (end) {
		endSession();
		return;
	}
	_sendSessionUpdate();
}
//#endregion
export { uuid4 as $, spanToJSON as A, originalConsoleMethods as At, getClient as B, getDynamicSamplingContextFromScope as C, createStackParser as Ct, hasSpansEnabled as D, CONSOLE_LEVELS as Dt, shouldIgnoreSpan as E, stackParserFromStackParserOptions as Et, GEN_AI_CONVERSATION_ID_ATTRIBUTE as F, merge as G, getIsolationScope as H, SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME as I, timestampInSeconds as J, updateSession as K, SEMANTIC_ATTRIBUTE_PROFILE_ID as L, parseSampleRate as M, SDK_VERSION as Mt, dsnToString as N, GLOBAL_OBJ as Nt, getActiveSpan as O, consoleSandbox as Ot, makeDsn as P, DEBUG_BUILD as Pt, getEventDescription as Q, SEMANTIC_ATTRIBUTE_SENTRY_OP as R, isStreamedBeforeSendSpanCallback as S, isThenable as St, reparentChildSpans as T, getFunctionName as Tt, getTraceContextFromScope as U, getCurrentScope as V, withScope as W, addExceptionTypeValue as X, addExceptionMechanism as Y, checkOrSetAlreadyCaught as Z, createEnvelope as _, isParameterizedString as _t, setTag as a, safeMathRandom as at, forEachEnvelopeItem as b, isRequest as bt, prepareEvent as c, fill as ct, startInactiveSpan as d, isDOMError as dt, safeJoin as et, hasSpanStreamingEnabled as f, isDOMException as ft, createAttachmentEnvelopeItem as g, isObjectLike as gt, addItemToEnvelope as h, isEvent as ht, captureSession as i, safeDateNow as it, streamedSpanJsonToSerializedSpan as j, getGlobalSingleton as jt, showSpanDropWarning as k, debug as kt, rejectedSyncPromise as l, getOriginalFunction as lt, createSessionEnvelope as m, isErrorEvent as mt, captureException as n, normalizeToSize as nt, setUser as o, addNonEnumerableProperty as ot, createEventEnvelope as p, isError as pt, dateTimestampInSeconds as q, captureMessage as r, setNormalizeStringifier as rt, startSession as s, extractExceptionKeysForMessage as st, captureEvent as t, stringMatchesSomePattern as tt, resolvedSyncPromise as u, markFunctionWrapped as ut, envelopeContainsItemType as v, isPlainObject as vt, DEFAULT_ENVIRONMENT as w, getFramesFromEvent as wt, serializeEnvelope as x, isString as xt, envelopeItemTypeToDataCategory as y, isPrimitive as yt, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN as z };
