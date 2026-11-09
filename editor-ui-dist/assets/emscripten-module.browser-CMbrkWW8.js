//#region ../../../node_modules/.pnpm/@jitl+quickjs-wasmfile-debug-asyncify@0.32.0/node_modules/@jitl/quickjs-wasmfile-debug-asyncify/dist/emscripten-module.browser.mjs
async function QuickJSRaw(moduleArg = {}) {
	var moduleRtn;
	(function() {
		function humanReadableVersionToPacked(str) {
			str = str.split("-")[0];
			var vers = str.split(".").slice(0, 3);
			while (vers.length < 3) vers.push("00");
			vers = vers.map((n, i, arr) => n.padStart(2, "0"));
			return vers.join("");
		}
		var packedVersionToHumanReadable = (n) => [
			n / 1e4 | 0,
			(n / 100 | 0) % 100,
			n % 100
		].join(".");
		var TARGET_NOT_SUPPORTED = 2147483647;
		var currentNodeVersion = typeof process !== "undefined" && process.versions?.node ? humanReadableVersionToPacked(process.versions.node) : TARGET_NOT_SUPPORTED;
		if (currentNodeVersion < TARGET_NOT_SUPPORTED) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
		if (currentNodeVersion < 2147483647) throw new Error(`This emscripten-generated code requires node v${packedVersionToHumanReadable(2147483647)} (detected v${packedVersionToHumanReadable(currentNodeVersion)})`);
		var userAgent = typeof navigator !== "undefined" && navigator.userAgent;
		if (!userAgent) return;
		var currentSafariVersion = userAgent.includes("Safari/") && !userAgent.includes("Chrome/") && userAgent.match(/Version\/(\d+\.?\d*\.?\d*)/) ? humanReadableVersionToPacked(userAgent.match(/Version\/(\d+\.?\d*\.?\d*)/)[1]) : TARGET_NOT_SUPPORTED;
		if (currentSafariVersion < 15e4) throw new Error(`This emscripten-generated code requires Safari v${packedVersionToHumanReadable(15e4)} (detected v${currentSafariVersion})`);
		var currentFirefoxVersion = userAgent.match(/Firefox\/(\d+(?:\.\d+)?)/) ? parseFloat(userAgent.match(/Firefox\/(\d+(?:\.\d+)?)/)[1]) : TARGET_NOT_SUPPORTED;
		if (currentFirefoxVersion < 79) throw new Error(`This emscripten-generated code requires Firefox v79 (detected v${currentFirefoxVersion})`);
		var currentChromeVersion = userAgent.match(/Chrome\/(\d+(?:\.\d+)?)/) ? parseFloat(userAgent.match(/Chrome\/(\d+(?:\.\d+)?)/)[1]) : TARGET_NOT_SUPPORTED;
		if (currentChromeVersion < 85) throw new Error(`This emscripten-generated code requires Chrome v85 (detected v${currentChromeVersion})`);
	})();
	var Module = moduleArg;
	var ENVIRONMENT_IS_WEB = !!globalThis.window;
	var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
	var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
	var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
	function quickjsEmscriptenInit(debugLog) {
		const extension = { log: debugLog || function() {} };
		for (const init of quickjsEmscriptenInit.inits) init(extension);
		Module["quickJSEmscriptenExtensions"] = extension;
		return extension;
	}
	quickjsEmscriptenInit.inits = [];
	Module["quickjsEmscriptenInit"] = quickjsEmscriptenInit;
	quickjsEmscriptenInit.inits.push((extension) => {
		if (typeof receiveSourceMapJSON !== "undefined") extension["receiveSourceMapJSON"] = (data) => {
			if (typeof wasmSourceMap === "undefined") {
				extension.log("receiveSourceMapJSON: received", data);
				return receiveSourceMapJSON(data);
			} else extension.log("receiveSourceMapJSON: already have data:", wasmSourceMap, "ignoring", data);
		};
	});
	quickjsEmscriptenInit.inits.push((extension) => {
		if (typeof WasmOffsetConverter !== "undefined") {
			extension["WasmOffsetConverter"] = WasmOffsetConverter;
			try {
				extension["existingWasmOffsetConverter"] = wasmOffsetConverter;
				extension["receiveWasmOffsetConverter"] = function(wasmBinary, wasmModule) {
					if (!wasmOffsetConverter) {
						extension.log("wasmOffsetConverter set");
						wasmOffsetConverter = new WasmOffsetConverter(wasmBinary, wasmModule);
					} else extension.log("wasmOffsetConverter already set, ignored");
				};
			} catch (error) {
				extension["receiveWasmOffsetConverter"] = function() {
					extension.log("wasmOffsetConverter variable not defined, this is a no-op");
				};
			}
		}
	});
	quickjsEmscriptenInit.inits.push((extension) => {
		extension["getWasmMemory"] = function() {
			return wasmMemory;
		};
	});
	var quit_ = (status, toThrow) => {
		throw toThrow;
	};
	var _scriptName = import.meta.url;
	var scriptDirectory = "";
	function locateFile(path) {
		if (Module["locateFile"]) return Module["locateFile"](path, scriptDirectory);
		return scriptDirectory + path;
	}
	var readAsync, readBinary;
	if (ENVIRONMENT_IS_SHELL) {} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
		try {
			scriptDirectory = new URL(".", _scriptName).href;
		} catch {}
		if (!(globalThis.window || globalThis.WorkerGlobalScope)) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
		if (ENVIRONMENT_IS_WORKER) readBinary = (url) => {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, false);
			xhr.responseType = "arraybuffer";
			xhr.send(null);
			return new Uint8Array(xhr.response);
		};
		readAsync = async (url) => {
			assert(!isFileURI(url), "readAsync does not work with file:// URLs");
			var response = await fetch(url, { credentials: "same-origin" });
			if (response.ok) return response.arrayBuffer();
			throw new Error(response.status + " : " + response.url);
		};
	} else throw new Error("environment detection error");
	var out = console.log.bind(console);
	var err = console.error.bind(console);
	assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable.");
	assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");
	var wasmBinary;
	if (!globalThis.WebAssembly) err("no native wasm support detected");
	var ABORT = false;
	var EXITSTATUS;
	function assert(condition, text) {
		if (!condition) abort("Assertion failed" + (text ? ": " + text : ""));
	}
	var isFileURI = (filename) => filename.startsWith("file://");
	function writeStackCookie() {
		var max = _emscripten_stack_get_end();
		assert((max & 3) == 0);
		if (max == 0) max += 4;
		HEAPU32[max >> 2] = 34821223;
		HEAPU32[max + 4 >> 2] = 2310721022;
		HEAPU32[0] = 1668509029;
	}
	function checkStackCookie() {
		if (ABORT) return;
		var max = _emscripten_stack_get_end();
		if (max == 0) max += 4;
		var cookie1 = HEAPU32[max >> 2];
		var cookie2 = HEAPU32[max + 4 >> 2];
		if (cookie1 != 34821223 || cookie2 != 2310721022) abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
		if (HEAPU32[0] != 1668509029) abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
	}
	(() => {
		var h16 = /* @__PURE__ */ new Int16Array(1);
		var h8 = new Int8Array(h16.buffer);
		h16[0] = 25459;
		if (h8[0] !== 115 || h8[1] !== 99) abort("Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)");
	})();
	function consumedModuleProp(prop) {
		if (!Object.getOwnPropertyDescriptor(Module, prop)) Object.defineProperty(Module, prop, {
			configurable: true,
			set() {
				abort(`Attempt to set \`Module.${prop}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`);
			}
		});
	}
	function makeInvalidEarlyAccess(name) {
		return () => assert(false, `call to '${name}' via reference taken before Wasm module initialization`);
	}
	function ignoredModuleProp(prop) {
		if (Object.getOwnPropertyDescriptor(Module, prop)) abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
	}
	function isExportedByForceFilesystem(name) {
		return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_preloadFile" || name === "FS_unlink" || name === "addRunDependency" || name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
	}
	function missingLibrarySymbol(sym) {
		unexportedRuntimeSymbol(sym);
	}
	function unexportedRuntimeSymbol(sym) {
		if (!Object.getOwnPropertyDescriptor(Module, sym)) Object.defineProperty(Module, sym, {
			configurable: true,
			get() {
				var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
				if (isExportedByForceFilesystem(sym)) msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
				abort(msg);
			}
		});
	}
	var readyPromiseResolve, readyPromiseReject, HEAP8, HEAPU8, HEAP32, HEAPU32;
	var runtimeInitialized = false;
	function updateMemoryViews() {
		var b = wasmMemory.buffer;
		Module["HEAP8"] = HEAP8 = new Int8Array(b);
		new Int16Array(b);
		Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
		new Uint16Array(b);
		HEAP32 = new Int32Array(b);
		HEAPU32 = new Uint32Array(b);
		new Float32Array(b);
		new Float64Array(b);
		new BigInt64Array(b);
		new BigUint64Array(b);
	}
	function initMemory() {
		if (Module["wasmMemory"]) wasmMemory = Module["wasmMemory"];
		else {
			var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
			assert(INITIAL_MEMORY >= 5242880, "INITIAL_MEMORY should be larger than STACK_SIZE, was " + INITIAL_MEMORY + "! (STACK_SIZE=5242880)");
			wasmMemory = new WebAssembly.Memory({
				initial: INITIAL_MEMORY / 65536,
				maximum: 32768
			});
		}
		updateMemoryViews();
	}
	assert(globalThis.Int32Array && globalThis.Float64Array && Int32Array.prototype.subarray && Int32Array.prototype.set, "JS engine does not provide full typed array support");
	function preRun() {
		if (Module["preRun"]) {
			if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
			while (Module["preRun"].length) addOnPreRun(Module["preRun"].shift());
		}
		consumedModuleProp("preRun");
		callRuntimeCallbacks(onPreRuns);
	}
	function initRuntime() {
		assert(!runtimeInitialized);
		runtimeInitialized = true;
		checkStackCookie();
		wasmExports["__wasm_call_ctors"]();
	}
	function postRun() {
		checkStackCookie();
		if (Module["postRun"]) {
			if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
			while (Module["postRun"].length) addOnPostRun(Module["postRun"].shift());
		}
		consumedModuleProp("postRun");
		callRuntimeCallbacks(onPostRuns);
	}
	function abort(what) {
		Module["onAbort"]?.(what);
		what = "Aborted(" + what + ")";
		err(what);
		ABORT = true;
		if (what.search(/RuntimeError: [Uu]nreachable/) >= 0) what += ". \"unreachable\" may be due to ASYNCIFY_STACK_SIZE not being large enough (try increasing it)";
		var e = new WebAssembly.RuntimeError(what);
		readyPromiseReject?.(e);
		throw e;
	}
	var FS = {
		error() {
			abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
		},
		init() {
			FS.error();
		},
		createDataFile() {
			FS.error();
		},
		createPreloadedFile() {
			FS.error();
		},
		createLazyFile() {
			FS.error();
		},
		open() {
			FS.error();
		},
		mkdev() {
			FS.error();
		},
		registerDevice() {
			FS.error();
		},
		analyzePath() {
			FS.error();
		},
		ErrnoError() {
			FS.error();
		}
	};
	function createExportWrapper(name, nargs) {
		return (...args) => {
			assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
			var f = wasmExports[name];
			assert(f, `exported native function \`${name}\` not found`);
			assert(args.length <= nargs, `native function \`${name}\` called with ${args.length} args but expects ${nargs}`);
			return f(...args);
		};
	}
	var wasmBinaryFile;
	function findWasmBinary() {
		if (Module["locateFile"]) return locateFile("emscripten-module.wasm");
		return new URL("/%7B%7BBASE_PATH%7D%7D/assets/emscripten-module-DHbYPfAp.wasm", "" + import.meta.url).href;
	}
	function getBinarySync(file) {
		if (file == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
		if (readBinary) return readBinary(file);
		throw "both async and sync fetching of the wasm failed";
	}
	async function getWasmBinary(binaryFile) {
		if (!wasmBinary) try {
			var response = await readAsync(binaryFile);
			return new Uint8Array(response);
		} catch {}
		return getBinarySync(binaryFile);
	}
	async function instantiateArrayBuffer(binaryFile, imports) {
		try {
			var binary = await getWasmBinary(binaryFile);
			return await WebAssembly.instantiate(binary, imports);
		} catch (reason) {
			err(`failed to asynchronously prepare wasm: ${reason}`);
			if (isFileURI(binaryFile)) err(`warning: Loading from a file URI (${binaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
			abort(reason);
		}
	}
	async function instantiateAsync(binary, binaryFile, imports) {
		if (!binary) try {
			var response = fetch(binaryFile, { credentials: "same-origin" });
			return await WebAssembly.instantiateStreaming(response, imports);
		} catch (reason) {
			err(`wasm streaming compile failed: ${reason}`);
			err("falling back to ArrayBuffer instantiation");
		}
		return instantiateArrayBuffer(binaryFile, imports);
	}
	function getWasmImports() {
		Asyncify.instrumentWasmImports(wasmImports);
		return {
			env: wasmImports,
			wasi_snapshot_preview1: wasmImports
		};
	}
	async function createWasm() {
		function receiveInstance(instance, module) {
			wasmExports = instance.exports;
			wasmExports = Asyncify.instrumentWasmExports(wasmExports);
			assignWasmExports(wasmExports);
			return wasmExports;
		}
		var trueModule = Module;
		function receiveInstantiationResult(result) {
			assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
			trueModule = null;
			return receiveInstance(result["instance"]);
		}
		var info = getWasmImports();
		if (Module["instantiateWasm"]) return new Promise((resolve, reject) => {
			try {
				Module["instantiateWasm"](info, (inst, mod) => {
					resolve(receiveInstance(inst, mod));
				});
			} catch (e) {
				err(`Module.instantiateWasm callback failed with error: ${e}`);
				reject(e);
			}
		});
		wasmBinaryFile ??= findWasmBinary();
		return receiveInstantiationResult(await instantiateAsync(wasmBinary, wasmBinaryFile, info));
	}
	class ExitStatus {
		name = "ExitStatus";
		constructor(status) {
			this.message = `Program terminated with exit(${status})`;
			this.status = status;
		}
	}
	var callRuntimeCallbacks = (callbacks) => {
		while (callbacks.length > 0) callbacks.shift()(Module);
	};
	var onPostRuns = [];
	var addOnPostRun = (cb) => onPostRuns.push(cb);
	var onPreRuns = [];
	var addOnPreRun = (cb) => onPreRuns.push(cb);
	var dynCalls = {};
	var noExitRuntime = true;
	var ptrToString = (ptr) => {
		assert(typeof ptr === "number", `ptrToString expects a number, got ${typeof ptr}`);
		ptr >>>= 0;
		return "0x" + ptr.toString(16).padStart(8, "0");
	};
	var stackRestore = (val) => __emscripten_stack_restore(val);
	var stackSave = () => _emscripten_stack_get_current();
	var warnOnce = (text) => {
		warnOnce.shown ||= {};
		if (!warnOnce.shown[text]) {
			warnOnce.shown[text] = 1;
			err(text);
		}
	};
	var wasmMemory;
	var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();
	var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
		var maxIdx = idx + maxBytesToRead;
		if (ignoreNul) return maxIdx;
		while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
		return idx;
	};
	var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
		var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
		if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
		var str = "";
		while (idx < endPtr) {
			var u0 = heapOrArray[idx++];
			if (!(u0 & 128)) {
				str += String.fromCharCode(u0);
				continue;
			}
			var u1 = heapOrArray[idx++] & 63;
			if ((u0 & 224) == 192) {
				str += String.fromCharCode((u0 & 31) << 6 | u1);
				continue;
			}
			var u2 = heapOrArray[idx++] & 63;
			if ((u0 & 240) == 224) u0 = (u0 & 15) << 12 | u1 << 6 | u2;
			else {
				if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
				u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
			}
			if (u0 < 65536) str += String.fromCharCode(u0);
			else {
				var ch = u0 - 65536;
				str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
			}
		}
		return str;
	};
	var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
		assert(typeof ptr == "number", `UTF8ToString expects a number (got ${typeof ptr})`);
		return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : "";
	};
	var ___assert_fail = (condition, filename, line, func) => abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [
		filename ? UTF8ToString(filename) : "unknown filename",
		line,
		func ? UTF8ToString(func) : "unknown function"
	]);
	var __abort_js = () => abort("native code called abort()");
	var isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
	var MONTH_DAYS_LEAP_CUMULATIVE = [
		0,
		31,
		60,
		91,
		121,
		152,
		182,
		213,
		244,
		274,
		305,
		335
	];
	var MONTH_DAYS_REGULAR_CUMULATIVE = [
		0,
		31,
		59,
		90,
		120,
		151,
		181,
		212,
		243,
		273,
		304,
		334
	];
	var ydayFromDate = (date) => {
		return (isLeapYear(date.getFullYear()) ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE)[date.getMonth()] + date.getDate() - 1;
	};
	var INT53_MAX = 9007199254740992;
	var INT53_MIN = -9007199254740992;
	var bigintToI53Checked = (num) => num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
	function __localtime_js(time, tmPtr) {
		time = bigintToI53Checked(time);
		var date = /* @__PURE__ */ new Date(time * 1e3);
		HEAP32[tmPtr >> 2] = date.getSeconds();
		HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
		HEAP32[tmPtr + 8 >> 2] = date.getHours();
		HEAP32[tmPtr + 12 >> 2] = date.getDate();
		HEAP32[tmPtr + 16 >> 2] = date.getMonth();
		HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
		HEAP32[tmPtr + 24 >> 2] = date.getDay();
		var yday = ydayFromDate(date) | 0;
		HEAP32[tmPtr + 28 >> 2] = yday;
		HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
		var start = new Date(date.getFullYear(), 0, 1);
		var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
		var winterOffset = start.getTimezoneOffset();
		var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
		HEAP32[tmPtr + 32 >> 2] = dst;
	}
	var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
		assert(typeof str === "string", `stringToUTF8Array expects a string (got ${typeof str})`);
		if (!(maxBytesToWrite > 0)) return 0;
		var startIdx = outIdx;
		var endIdx = outIdx + maxBytesToWrite - 1;
		for (var i = 0; i < str.length; ++i) {
			var u = str.codePointAt(i);
			if (u <= 127) {
				if (outIdx >= endIdx) break;
				heap[outIdx++] = u;
			} else if (u <= 2047) {
				if (outIdx + 1 >= endIdx) break;
				heap[outIdx++] = 192 | u >> 6;
				heap[outIdx++] = 128 | u & 63;
			} else if (u <= 65535) {
				if (outIdx + 2 >= endIdx) break;
				heap[outIdx++] = 224 | u >> 12;
				heap[outIdx++] = 128 | u >> 6 & 63;
				heap[outIdx++] = 128 | u & 63;
			} else {
				if (outIdx + 3 >= endIdx) break;
				if (u > 1114111) warnOnce("Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
				heap[outIdx++] = 240 | u >> 18;
				heap[outIdx++] = 128 | u >> 12 & 63;
				heap[outIdx++] = 128 | u >> 6 & 63;
				heap[outIdx++] = 128 | u & 63;
				i++;
			}
		}
		heap[outIdx] = 0;
		return outIdx - startIdx;
	};
	var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
		assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
		return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
	};
	var lengthBytesUTF8 = (str) => {
		var len = 0;
		for (var i = 0; i < str.length; ++i) {
			var c = str.charCodeAt(i);
			if (c <= 127) len++;
			else if (c <= 2047) len += 2;
			else if (c >= 55296 && c <= 57343) {
				len += 4;
				++i;
			} else len += 3;
		}
		return len;
	};
	var __tzset_js = (timezone, daylight, std_name, dst_name) => {
		var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
		var winter = new Date(currentYear, 0, 1);
		var summer = new Date(currentYear, 6, 1);
		var winterOffset = winter.getTimezoneOffset();
		var summerOffset = summer.getTimezoneOffset();
		var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
		HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
		HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
		var extractZone = (timezoneOffset) => {
			var sign = timezoneOffset >= 0 ? "-" : "+";
			var absOffset = Math.abs(timezoneOffset);
			return `UTC${sign}${String(Math.floor(absOffset / 60)).padStart(2, "0")}${String(absOffset % 60).padStart(2, "0")}`;
		};
		var winterName = extractZone(winterOffset);
		var summerName = extractZone(summerOffset);
		assert(winterName);
		assert(summerName);
		assert(lengthBytesUTF8(winterName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${winterName})`);
		assert(lengthBytesUTF8(summerName) <= 16, `timezone name truncated to fit in TZNAME_MAX (${summerName})`);
		if (summerOffset < winterOffset) {
			stringToUTF8(winterName, std_name, 17);
			stringToUTF8(summerName, dst_name, 17);
		} else {
			stringToUTF8(winterName, dst_name, 17);
			stringToUTF8(summerName, std_name, 17);
		}
	};
	var _emscripten_date_now = () => Date.now();
	var getHeapMax = () => 2147483648;
	var alignMemory = (size, alignment) => {
		assert(alignment, "alignment argument is required");
		return Math.ceil(size / alignment) * alignment;
	};
	var growMemory = (size) => {
		var oldHeapSize = wasmMemory.buffer.byteLength;
		var pages = (size - oldHeapSize + 65535) / 65536 | 0;
		try {
			wasmMemory.grow(pages);
			updateMemoryViews();
			return 1;
		} catch (e) {
			err(`growMemory: Attempted to grow heap from ${oldHeapSize} bytes to ${size} bytes, but got error: ${e}`);
		}
	};
	var _emscripten_resize_heap = (requestedSize) => {
		var oldSize = HEAPU8.length;
		requestedSize >>>= 0;
		assert(requestedSize > oldSize);
		var maxHeapSize = getHeapMax();
		if (requestedSize > maxHeapSize) {
			err(`Cannot enlarge memory, requested ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`);
			return false;
		}
		for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
			var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
			overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
			var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
			if (growMemory(newSize)) return true;
		}
		err(`Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`);
		return false;
	};
	var _fd_close = (fd) => {
		abort("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM");
	};
	function _fd_seek(fd, offset, whence, newOffset) {
		offset = bigintToI53Checked(offset);
		return 70;
	}
	var printCharBuffers = [
		null,
		[],
		[]
	];
	var printChar = (stream, curr) => {
		var buffer = printCharBuffers[stream];
		assert(buffer);
		if (curr === 0 || curr === 10) {
			(stream === 1 ? out : err)(UTF8ArrayToString(buffer));
			buffer.length = 0;
		} else buffer.push(curr);
	};
	var flush_NO_FILESYSTEM = () => {
		_fflush(0);
		if (printCharBuffers[1].length) printChar(1, 10);
		if (printCharBuffers[2].length) printChar(2, 10);
	};
	var _fd_write = (fd, iov, iovcnt, pnum) => {
		var num = 0;
		for (var i = 0; i < iovcnt; i++) {
			var ptr = HEAPU32[iov >> 2];
			var len = HEAPU32[iov + 4 >> 2];
			iov += 8;
			for (var j = 0; j < len; j++) printChar(fd, HEAPU8[ptr + j]);
			num += len;
		}
		HEAPU32[pnum >> 2] = num;
		return 0;
	};
	var runAndAbortIfError = (func) => {
		try {
			return func();
		} catch (e) {
			abort(e);
		}
	};
	var handleException = (e) => {
		if (e instanceof ExitStatus || e == "unwind") return EXITSTATUS;
		checkStackCookie();
		if (e instanceof WebAssembly.RuntimeError) {
			if (_emscripten_stack_get_current() <= 0) err("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 5242880)");
		}
		quit_(1, e);
	};
	var runtimeKeepaliveCounter = 0;
	var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
	var _proc_exit = (code) => {
		EXITSTATUS = code;
		if (!keepRuntimeAlive()) {
			Module["onExit"]?.(code);
			ABORT = true;
		}
		quit_(code, new ExitStatus(code));
	};
	var exitJS = (status, implicit) => {
		EXITSTATUS = status;
		checkUnflushedContent();
		if (keepRuntimeAlive() && !implicit) {
			var msg = `program exited (with status: ${status}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
			readyPromiseReject?.(msg);
			err(msg);
		}
		_proc_exit(status);
	};
	var _exit = exitJS;
	var maybeExit = () => {
		if (!keepRuntimeAlive()) try {
			_exit(EXITSTATUS);
		} catch (e) {
			handleException(e);
		}
	};
	var callUserCallback = (func) => {
		if (ABORT) {
			err("user callback triggered after runtime exited or application aborted.  Ignoring.");
			return;
		}
		try {
			return func();
		} catch (e) {
			handleException(e);
		} finally {
			maybeExit();
		}
	};
	var createNamedFunction = (name, func) => Object.defineProperty(func, "name", { value: name });
	var runtimeKeepalivePush = () => {
		runtimeKeepaliveCounter += 1;
	};
	var runtimeKeepalivePop = () => {
		assert(runtimeKeepaliveCounter > 0);
		runtimeKeepaliveCounter -= 1;
	};
	var Asyncify = {
		instrumentWasmImports(imports) {
			var importPattern = /^(qts_host_call_function|qts_host_load_module_source|qts_host_normalize_module|invoke_.*|__asyncjs__.*)$/;
			for (let [x, original] of Object.entries(imports)) if (typeof original == "function") {
				let isAsyncifyImport = original.isAsync || importPattern.test(x);
				imports[x] = (...args) => {
					var originalAsyncifyState = Asyncify.state;
					try {
						return original(...args);
					} finally {
						var changedToDisabled = originalAsyncifyState === Asyncify.State.Normal && Asyncify.state === Asyncify.State.Disabled;
						var ignoredInvoke = x.startsWith("invoke_") && true;
						if (Asyncify.state !== originalAsyncifyState && !isAsyncifyImport && !changedToDisabled && !ignoredInvoke) abort(`import ${x} was not in ASYNCIFY_IMPORTS, but changed the state`);
					}
				};
			}
		},
		instrumentFunction(original) {
			var wrapper = (...args) => {
				Asyncify.exportCallStack.push(original);
				try {
					return original(...args);
				} finally {
					if (!ABORT) {
						assert(Asyncify.exportCallStack.pop() === original);
						Asyncify.maybeStopUnwind();
					}
				}
			};
			Asyncify.funcWrappers.set(original, wrapper);
			wrapper = createNamedFunction(`__asyncify_wrapper_${original.name}`, wrapper);
			return wrapper;
		},
		instrumentWasmExports(exports) {
			var ret = {};
			for (let [x, original] of Object.entries(exports)) if (typeof original == "function") ret[x] = Asyncify.instrumentFunction(original);
			else ret[x] = original;
			return ret;
		},
		State: {
			Normal: 0,
			Unwinding: 1,
			Rewinding: 2,
			Disabled: 3
		},
		state: 0,
		StackSize: 81920,
		currData: null,
		handleSleepReturnValue: 0,
		exportCallStack: [],
		callstackFuncToId: /* @__PURE__ */ new Map(),
		callStackIdToFunc: /* @__PURE__ */ new Map(),
		funcWrappers: /* @__PURE__ */ new Map(),
		callStackId: 0,
		asyncPromiseHandlers: null,
		sleepCallbacks: [],
		getCallStackId(func) {
			assert(func);
			if (!Asyncify.callstackFuncToId.has(func)) {
				var id = Asyncify.callStackId++;
				Asyncify.callstackFuncToId.set(func, id);
				Asyncify.callStackIdToFunc.set(id, func);
			}
			return Asyncify.callstackFuncToId.get(func);
		},
		maybeStopUnwind() {
			if (Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0) {
				Asyncify.state = Asyncify.State.Normal;
				runAndAbortIfError(_asyncify_stop_unwind);
				if (typeof Fibers != "undefined") Fibers.trampoline();
			}
		},
		whenDone() {
			assert(Asyncify.currData, "Tried to wait for an async operation when none is in progress.");
			assert(!Asyncify.asyncPromiseHandlers, "Cannot have multiple async operations in flight at once");
			return new Promise((resolve, reject) => {
				Asyncify.asyncPromiseHandlers = {
					resolve,
					reject
				};
			});
		},
		allocateData() {
			var ptr = _malloc(12 + Asyncify.StackSize);
			Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
			Asyncify.setDataRewindFunc(ptr);
			return ptr;
		},
		setDataHeader(ptr, stack, stackSize) {
			HEAPU32[ptr >> 2] = stack;
			HEAPU32[ptr + 4 >> 2] = stack + stackSize;
		},
		setDataRewindFunc(ptr) {
			var bottomOfCallStack = Asyncify.exportCallStack[0];
			assert(bottomOfCallStack, "exportCallStack is empty");
			var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
			HEAP32[ptr + 8 >> 2] = rewindId;
		},
		getDataRewindFunc(ptr) {
			var id = HEAP32[ptr + 8 >> 2];
			var func = Asyncify.callStackIdToFunc.get(id);
			assert(func, `id ${id} not found in callStackIdToFunc`);
			return func;
		},
		doRewind(ptr) {
			var original = Asyncify.getDataRewindFunc(ptr);
			var func = Asyncify.funcWrappers.get(original);
			assert(original);
			assert(func);
			return callUserCallback(func);
		},
		handleSleep(startAsync) {
			assert(Asyncify.state !== Asyncify.State.Disabled, "Asyncify cannot be done during or after the runtime exits");
			if (ABORT) return;
			if (Asyncify.state === Asyncify.State.Normal) {
				var reachedCallback = false;
				var reachedAfterCallback = false;
				startAsync((handleSleepReturnValue = 0) => {
					assert([
						"undefined",
						"number",
						"boolean",
						"bigint"
					].includes(typeof handleSleepReturnValue), `invalid type for handleSleepReturnValue: '${typeof handleSleepReturnValue}'`);
					if (ABORT) return;
					Asyncify.handleSleepReturnValue = handleSleepReturnValue;
					reachedCallback = true;
					if (!reachedAfterCallback) return;
					assert(!Asyncify.exportCallStack.length, "Waking up (starting to rewind) must be done from JS, without compiled code on the stack.");
					Asyncify.state = Asyncify.State.Rewinding;
					runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
					if (typeof MainLoop != "undefined" && MainLoop.func) MainLoop.resume();
					var asyncWasmReturnValue, isError = false;
					try {
						asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
					} catch (err) {
						asyncWasmReturnValue = err;
						isError = true;
					}
					var handled = false;
					if (!Asyncify.currData) {
						var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
						if (asyncPromiseHandlers) {
							Asyncify.asyncPromiseHandlers = null;
							(isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
							handled = true;
						}
					}
					if (isError && !handled) throw asyncWasmReturnValue;
				});
				reachedAfterCallback = true;
				if (!reachedCallback) {
					Asyncify.state = Asyncify.State.Unwinding;
					Asyncify.currData = Asyncify.allocateData();
					if (typeof MainLoop != "undefined" && MainLoop.func) MainLoop.pause();
					runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData));
				}
			} else if (Asyncify.state === Asyncify.State.Rewinding) {
				Asyncify.state = Asyncify.State.Normal;
				runAndAbortIfError(_asyncify_stop_rewind);
				_free(Asyncify.currData);
				Asyncify.currData = null;
				Asyncify.sleepCallbacks.forEach(callUserCallback);
			} else abort(`invalid state: ${Asyncify.state}`);
			return Asyncify.handleSleepReturnValue;
		},
		handleAsync: (startAsync) => Asyncify.handleSleep(async (wakeUp) => {
			wakeUp(await startAsync());
		})
	};
	var getCFunc = (ident) => {
		var func = Module["_" + ident];
		assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
		return func;
	};
	var writeArrayToMemory = (array, buffer) => {
		assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
		HEAP8.set(array, buffer);
	};
	var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
	var stringToUTF8OnStack = (str) => {
		var size = lengthBytesUTF8(str) + 1;
		var ret = stackAlloc(size);
		stringToUTF8(str, ret, size);
		return ret;
	};
	var ccall = (ident, returnType, argTypes, args, opts) => {
		var toC = {
			string: (str) => {
				var ret = 0;
				if (str !== null && str !== void 0 && str !== 0) ret = stringToUTF8OnStack(str);
				return ret;
			},
			array: (arr) => {
				var ret = stackAlloc(arr.length);
				writeArrayToMemory(arr, ret);
				return ret;
			}
		};
		function convertReturnValue(ret) {
			if (returnType === "string") return UTF8ToString(ret);
			if (returnType === "boolean") return Boolean(ret);
			return ret;
		}
		var func = getCFunc(ident);
		var cArgs = [];
		var stack = 0;
		assert(returnType !== "array", "Return type should not be \"array\".");
		if (args) for (var i = 0; i < args.length; i++) {
			var converter = toC[argTypes[i]];
			if (converter) {
				if (stack === 0) stack = stackSave();
				cArgs[i] = converter(args[i]);
			} else cArgs[i] = args[i];
		}
		var previousAsync = Asyncify.currData;
		var ret = func(...cArgs);
		function onDone(ret) {
			runtimeKeepalivePop();
			if (stack !== 0) stackRestore(stack);
			return convertReturnValue(ret);
		}
		var asyncMode = opts?.async;
		runtimeKeepalivePush();
		if (Asyncify.currData != previousAsync) {
			assert(!(previousAsync && Asyncify.currData), "We cannot start an async operation when one is already in flight");
			assert(!(previousAsync && !Asyncify.currData), "We cannot stop an async operation in flight");
			assert(asyncMode, "The call to " + ident + " is running asynchronously. If this was intended, add the async option to the ccall/cwrap call.");
			return Asyncify.whenDone().then(onDone);
		}
		ret = onDone(ret);
		if (asyncMode) return Promise.resolve(ret);
		return ret;
	};
	var cwrap = (ident, returnType, argTypes, opts) => (...args) => ccall(ident, returnType, argTypes, args, opts);
	initMemory();
	if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
	if (Module["print"]) out = Module["print"];
	if (Module["printErr"]) err = Module["printErr"];
	if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
	Module["FS_createDataFile"] = FS.createDataFile;
	Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
	checkIncomingModuleAPI();
	if (Module["arguments"]) Module["arguments"];
	if (Module["thisProgram"]) Module["thisProgram"];
	assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
	assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
	assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
	assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
	assert(typeof Module["read"] == "undefined", "Module.read option was removed");
	assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
	assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
	assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)");
	assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
	assert(typeof Module["ENVIRONMENT"] == "undefined", "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
	assert(typeof Module["STACK_SIZE"] == "undefined", "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
	if (Module["preInit"]) {
		if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
		while (Module["preInit"].length > 0) Module["preInit"].shift()();
	}
	consumedModuleProp("preInit");
	Module["cwrap"] = cwrap;
	Module["UTF8ToString"] = UTF8ToString;
	Module["stringToUTF8"] = stringToUTF8;
	Module["lengthBytesUTF8"] = lengthBytesUTF8;
	Module["Asyncify"] = Asyncify;
	[
		"writeI53ToI64",
		"writeI53ToI64Clamped",
		"writeI53ToI64Signaling",
		"writeI53ToU64Clamped",
		"writeI53ToU64Signaling",
		"readI53FromI64",
		"readI53FromU64",
		"convertI32PairToI53",
		"convertI32PairToI53Checked",
		"convertU32PairToI53",
		"getTempRet0",
		"setTempRet0",
		"zeroMemory",
		"withStackSave",
		"strError",
		"inetPton4",
		"inetNtop4",
		"inetPton6",
		"inetNtop6",
		"readSockaddr",
		"writeSockaddr",
		"readEmAsmArgs",
		"jstoi_q",
		"getExecutableName",
		"autoResumeAudioContext",
		"getDynCaller",
		"asyncLoad",
		"asmjsMangle",
		"mmapAlloc",
		"HandleAllocator",
		"getUniqueRunDependency",
		"addRunDependency",
		"removeRunDependency",
		"addOnInit",
		"addOnPostCtor",
		"addOnPreMain",
		"addOnExit",
		"STACK_SIZE",
		"STACK_ALIGN",
		"POINTER_SIZE",
		"ASSERTIONS",
		"convertJsFunctionToWasm",
		"getEmptyTableSlot",
		"updateTableMap",
		"getFunctionAddress",
		"addFunction",
		"removeFunction",
		"intArrayFromString",
		"intArrayToString",
		"AsciiToString",
		"stringToAscii",
		"UTF16ToString",
		"stringToUTF16",
		"lengthBytesUTF16",
		"UTF32ToString",
		"stringToUTF32",
		"lengthBytesUTF32",
		"stringToNewUTF8",
		"registerKeyEventCallback",
		"maybeCStringToJsString",
		"findEventTarget",
		"getBoundingClientRect",
		"fillMouseEventData",
		"registerMouseEventCallback",
		"registerWheelEventCallback",
		"registerUiEventCallback",
		"registerFocusEventCallback",
		"fillDeviceOrientationEventData",
		"registerDeviceOrientationEventCallback",
		"fillDeviceMotionEventData",
		"registerDeviceMotionEventCallback",
		"screenOrientation",
		"fillOrientationChangeEventData",
		"registerOrientationChangeEventCallback",
		"fillFullscreenChangeEventData",
		"registerFullscreenChangeEventCallback",
		"JSEvents_requestFullscreen",
		"JSEvents_resizeCanvasForFullscreen",
		"registerRestoreOldStyle",
		"hideEverythingExceptGivenElement",
		"restoreHiddenElements",
		"setLetterbox",
		"softFullscreenResizeWebGLRenderTarget",
		"doRequestFullscreen",
		"fillPointerlockChangeEventData",
		"registerPointerlockChangeEventCallback",
		"registerPointerlockErrorEventCallback",
		"requestPointerLock",
		"fillVisibilityChangeEventData",
		"registerVisibilityChangeEventCallback",
		"registerTouchEventCallback",
		"fillGamepadEventData",
		"registerGamepadEventCallback",
		"registerBeforeUnloadEventCallback",
		"fillBatteryEventData",
		"registerBatteryEventCallback",
		"setCanvasElementSize",
		"getCanvasElementSize",
		"jsStackTrace",
		"getCallstack",
		"convertPCtoSourceLocation",
		"getEnvStrings",
		"checkWasiClock",
		"wasiRightsToMuslOFlags",
		"wasiOFlagsToMuslOFlags",
		"initRandomFill",
		"randomFill",
		"safeSetTimeout",
		"setImmediateWrapped",
		"safeRequestAnimationFrame",
		"clearImmediateWrapped",
		"registerPostMainLoop",
		"registerPreMainLoop",
		"getPromise",
		"makePromise",
		"idsToPromises",
		"makePromiseCallback",
		"Browser_asyncPrepareDataCounter",
		"arraySum",
		"addDays",
		"getSocketFromFD",
		"getSocketAddress",
		"FS_createPreloadedFile",
		"FS_preloadFile",
		"FS_modeStringToFlags",
		"FS_getMode",
		"FS_stdin_getChar",
		"FS_mkdirTree",
		"_setNetworkCallback",
		"ALLOC_NORMAL",
		"ALLOC_STACK",
		"allocate",
		"writeStringToMemory",
		"writeAsciiToMemory",
		"allocateUTF8",
		"allocateUTF8OnStack",
		"stackTrace",
		"getNativeTypeSize"
	].forEach(missingLibrarySymbol);
	[
		"run",
		"out",
		"err",
		"callMain",
		"abort",
		"wasmExports",
		"HEAPF32",
		"HEAPF64",
		"HEAP16",
		"HEAPU16",
		"HEAP32",
		"HEAPU32",
		"HEAP64",
		"HEAPU64",
		"writeStackCookie",
		"checkStackCookie",
		"INT53_MAX",
		"INT53_MIN",
		"bigintToI53Checked",
		"stackSave",
		"stackRestore",
		"stackAlloc",
		"createNamedFunction",
		"ptrToString",
		"exitJS",
		"getHeapMax",
		"growMemory",
		"ENV",
		"ERRNO_CODES",
		"DNS",
		"Protocols",
		"Sockets",
		"timers",
		"warnOnce",
		"readEmAsmArgsArray",
		"dynCallLegacy",
		"dynCall",
		"handleException",
		"keepRuntimeAlive",
		"runtimeKeepalivePush",
		"runtimeKeepalivePop",
		"callUserCallback",
		"maybeExit",
		"alignMemory",
		"wasmTable",
		"wasmMemory",
		"noExitRuntime",
		"addOnPreRun",
		"addOnPostRun",
		"ccall",
		"freeTableIndexes",
		"functionsInTableMap",
		"setValue",
		"getValue",
		"PATH",
		"PATH_FS",
		"UTF8Decoder",
		"UTF8ArrayToString",
		"stringToUTF8Array",
		"UTF16Decoder",
		"stringToUTF8OnStack",
		"writeArrayToMemory",
		"JSEvents",
		"specialHTMLTargets",
		"findCanvasEventTarget",
		"currentFullscreenStrategy",
		"restoreOldWindowedStyle",
		"UNWIND_CACHE",
		"ExitStatus",
		"flush_NO_FILESYSTEM",
		"emSetImmediate",
		"emClearImmediate_deps",
		"emClearImmediate",
		"promiseMap",
		"Browser",
		"requestFullscreen",
		"requestFullScreen",
		"setCanvasSize",
		"getUserMedia",
		"createContext",
		"getPreloadedImageData__data",
		"wget",
		"MONTH_DAYS_REGULAR",
		"MONTH_DAYS_LEAP",
		"MONTH_DAYS_REGULAR_CUMULATIVE",
		"MONTH_DAYS_LEAP_CUMULATIVE",
		"isLeapYear",
		"ydayFromDate",
		"SYSCALLS",
		"preloadPlugins",
		"FS_stdin_getChar_buffer",
		"FS_unlink",
		"FS_createPath",
		"FS_createDevice",
		"FS_readFile",
		"FS",
		"FS_root",
		"FS_mounts",
		"FS_devices",
		"FS_streams",
		"FS_nextInode",
		"FS_nameTable",
		"FS_currentPath",
		"FS_initialized",
		"FS_ignorePermissions",
		"FS_filesystems",
		"FS_syncFSRequests",
		"FS_lookupPath",
		"FS_getPath",
		"FS_hashName",
		"FS_hashAddNode",
		"FS_hashRemoveNode",
		"FS_lookupNode",
		"FS_createNode",
		"FS_destroyNode",
		"FS_isRoot",
		"FS_isMountpoint",
		"FS_isFile",
		"FS_isDir",
		"FS_isLink",
		"FS_isChrdev",
		"FS_isBlkdev",
		"FS_isFIFO",
		"FS_isSocket",
		"FS_flagsToPermissionString",
		"FS_nodePermissions",
		"FS_mayLookup",
		"FS_mayCreate",
		"FS_mayDelete",
		"FS_mayOpen",
		"FS_checkOpExists",
		"FS_nextfd",
		"FS_getStreamChecked",
		"FS_getStream",
		"FS_createStream",
		"FS_closeStream",
		"FS_dupStream",
		"FS_doSetAttr",
		"FS_chrdev_stream_ops",
		"FS_major",
		"FS_minor",
		"FS_makedev",
		"FS_registerDevice",
		"FS_getDevice",
		"FS_getMounts",
		"FS_syncfs",
		"FS_mount",
		"FS_unmount",
		"FS_lookup",
		"FS_mknod",
		"FS_statfs",
		"FS_statfsStream",
		"FS_statfsNode",
		"FS_create",
		"FS_mkdir",
		"FS_mkdev",
		"FS_symlink",
		"FS_rename",
		"FS_rmdir",
		"FS_readdir",
		"FS_readlink",
		"FS_stat",
		"FS_fstat",
		"FS_lstat",
		"FS_doChmod",
		"FS_chmod",
		"FS_lchmod",
		"FS_fchmod",
		"FS_doChown",
		"FS_chown",
		"FS_lchown",
		"FS_fchown",
		"FS_doTruncate",
		"FS_truncate",
		"FS_ftruncate",
		"FS_utime",
		"FS_open",
		"FS_close",
		"FS_isClosed",
		"FS_llseek",
		"FS_read",
		"FS_write",
		"FS_mmap",
		"FS_msync",
		"FS_ioctl",
		"FS_writeFile",
		"FS_cwd",
		"FS_chdir",
		"FS_createDefaultDirectories",
		"FS_createDefaultDevices",
		"FS_createSpecialDirectories",
		"FS_createStandardStreams",
		"FS_staticInit",
		"FS_init",
		"FS_quit",
		"FS_findObject",
		"FS_analyzePath",
		"FS_createFile",
		"FS_createDataFile",
		"FS_forceLoadFile",
		"FS_createLazyFile",
		"FS_absolutePath",
		"FS_createFolder",
		"FS_createLink",
		"FS_joinPath",
		"FS_mmapAlloc",
		"FS_standardizePath",
		"MEMFS",
		"TTY",
		"PIPEFS",
		"SOCKFS",
		"runAndAbortIfError",
		"Fibers",
		"print",
		"printErr",
		"jstoi_s"
	].forEach(unexportedRuntimeSymbol);
	function checkIncomingModuleAPI() {
		ignoredModuleProp("fetchSettings");
		ignoredModuleProp("logReadFiles");
		ignoredModuleProp("loadSplitModule");
	}
	function set_asyncify_stack_size(size, default_size) {
		Asyncify.StackSize = size || default_size;
	}
	function qts_host_ref_free(rt, id) {
		Module["callbacks"]["freeHostRef"](void 0, rt, id);
	}
	function qts_host_call_function(ctx, this_ptr, argc, argv, host_ref_id) {
		const asyncify = { ["handleSleep"]: Asyncify.handleSleep };
		return Module["callbacks"]["callFunction"](asyncify, ctx, this_ptr, argc, argv, host_ref_id);
	}
	function qts_host_interrupt_handler(rt) {
		return Module["callbacks"]["shouldInterrupt"](void 0, rt);
	}
	function qts_host_load_module_source(rt, ctx, module_name) {
		const asyncify = { ["handleSleep"]: Asyncify.handleSleep };
		const moduleNameString = UTF8ToString(module_name);
		return Module["callbacks"]["loadModuleSource"](asyncify, rt, ctx, moduleNameString);
	}
	function qts_host_normalize_module(rt, ctx, module_base_name, module_name) {
		const asyncify = { ["handleSleep"]: Asyncify.handleSleep };
		const moduleBaseNameString = UTF8ToString(module_base_name);
		const moduleNameString = UTF8ToString(module_name);
		return Module["callbacks"]["normalizeModule"](asyncify, rt, ctx, moduleBaseNameString, moduleNameString);
	}
	var _malloc = Module["_malloc"] = makeInvalidEarlyAccess("_malloc");
	Module["_QTS_Throw"] = makeInvalidEarlyAccess("_QTS_Throw");
	Module["_QTS_NewError"] = makeInvalidEarlyAccess("_QTS_NewError");
	Module["_QTS_RuntimeSetMemoryLimit"] = makeInvalidEarlyAccess("_QTS_RuntimeSetMemoryLimit");
	Module["_QTS_RuntimeComputeMemoryUsage"] = makeInvalidEarlyAccess("_QTS_RuntimeComputeMemoryUsage");
	Module["_QTS_RuntimeDumpMemoryUsage"] = makeInvalidEarlyAccess("_QTS_RuntimeDumpMemoryUsage");
	Module["_QTS_RecoverableLeakCheck"] = makeInvalidEarlyAccess("_QTS_RecoverableLeakCheck");
	Module["_QTS_BuildIsSanitizeLeak"] = makeInvalidEarlyAccess("_QTS_BuildIsSanitizeLeak");
	Module["_QTS_RuntimeSetMaxStackSize"] = makeInvalidEarlyAccess("_QTS_RuntimeSetMaxStackSize");
	Module["_QTS_GetUndefined"] = makeInvalidEarlyAccess("_QTS_GetUndefined");
	Module["_QTS_GetNull"] = makeInvalidEarlyAccess("_QTS_GetNull");
	Module["_QTS_GetFalse"] = makeInvalidEarlyAccess("_QTS_GetFalse");
	Module["_QTS_GetTrue"] = makeInvalidEarlyAccess("_QTS_GetTrue");
	Module["_QTS_NewHostRef"] = makeInvalidEarlyAccess("_QTS_NewHostRef");
	Module["_QTS_GetHostRefId"] = makeInvalidEarlyAccess("_QTS_GetHostRefId");
	Module["_QTS_NewRuntime"] = makeInvalidEarlyAccess("_QTS_NewRuntime");
	Module["_QTS_FreeRuntime"] = makeInvalidEarlyAccess("_QTS_FreeRuntime");
	var _free = Module["_free"] = makeInvalidEarlyAccess("_free");
	Module["_QTS_NewContext"] = makeInvalidEarlyAccess("_QTS_NewContext");
	Module["_QTS_FreeContext"] = makeInvalidEarlyAccess("_QTS_FreeContext");
	Module["_QTS_FreeValuePointer"] = makeInvalidEarlyAccess("_QTS_FreeValuePointer");
	Module["_QTS_FreeValuePointerRuntime"] = makeInvalidEarlyAccess("_QTS_FreeValuePointerRuntime");
	Module["_QTS_FreeVoidPointer"] = makeInvalidEarlyAccess("_QTS_FreeVoidPointer");
	Module["_QTS_FreeCString"] = makeInvalidEarlyAccess("_QTS_FreeCString");
	Module["_QTS_DupValuePointer"] = makeInvalidEarlyAccess("_QTS_DupValuePointer");
	Module["_QTS_NewObject"] = makeInvalidEarlyAccess("_QTS_NewObject");
	Module["_QTS_NewObjectProto"] = makeInvalidEarlyAccess("_QTS_NewObjectProto");
	Module["_QTS_NewArray"] = makeInvalidEarlyAccess("_QTS_NewArray");
	Module["_QTS_NewArrayBuffer"] = makeInvalidEarlyAccess("_QTS_NewArrayBuffer");
	Module["_QTS_NewFloat64"] = makeInvalidEarlyAccess("_QTS_NewFloat64");
	Module["_QTS_GetFloat64"] = makeInvalidEarlyAccess("_QTS_GetFloat64");
	Module["_QTS_NewString"] = makeInvalidEarlyAccess("_QTS_NewString");
	Module["_QTS_GetString"] = makeInvalidEarlyAccess("_QTS_GetString");
	Module["_QTS_GetArrayBuffer"] = makeInvalidEarlyAccess("_QTS_GetArrayBuffer");
	Module["_QTS_GetArrayBufferLength"] = makeInvalidEarlyAccess("_QTS_GetArrayBufferLength");
	Module["_QTS_NewSymbol"] = makeInvalidEarlyAccess("_QTS_NewSymbol");
	Module["_QTS_GetSymbolDescriptionOrKey"] = makeInvalidEarlyAccess("_QTS_GetSymbolDescriptionOrKey");
	Module["_QTS_IsGlobalSymbol"] = makeInvalidEarlyAccess("_QTS_IsGlobalSymbol");
	Module["_QTS_IsJobPending"] = makeInvalidEarlyAccess("_QTS_IsJobPending");
	Module["_QTS_ExecutePendingJob"] = makeInvalidEarlyAccess("_QTS_ExecutePendingJob");
	Module["_QTS_GetProp"] = makeInvalidEarlyAccess("_QTS_GetProp");
	Module["_QTS_GetPropNumber"] = makeInvalidEarlyAccess("_QTS_GetPropNumber");
	Module["_QTS_SetProp"] = makeInvalidEarlyAccess("_QTS_SetProp");
	Module["_QTS_DefineProp"] = makeInvalidEarlyAccess("_QTS_DefineProp");
	Module["_QTS_GetOwnPropertyNames"] = makeInvalidEarlyAccess("_QTS_GetOwnPropertyNames");
	Module["_QTS_Call"] = makeInvalidEarlyAccess("_QTS_Call");
	Module["_QTS_ResolveException"] = makeInvalidEarlyAccess("_QTS_ResolveException");
	Module["_QTS_Dump"] = makeInvalidEarlyAccess("_QTS_Dump");
	Module["_QTS_Eval"] = makeInvalidEarlyAccess("_QTS_Eval");
	Module["_QTS_GetModuleNamespace"] = makeInvalidEarlyAccess("_QTS_GetModuleNamespace");
	Module["_QTS_Typeof"] = makeInvalidEarlyAccess("_QTS_Typeof");
	Module["_QTS_GetLength"] = makeInvalidEarlyAccess("_QTS_GetLength");
	Module["_QTS_IsEqual"] = makeInvalidEarlyAccess("_QTS_IsEqual");
	Module["_QTS_GetGlobalObject"] = makeInvalidEarlyAccess("_QTS_GetGlobalObject");
	Module["_QTS_NewPromiseCapability"] = makeInvalidEarlyAccess("_QTS_NewPromiseCapability");
	Module["_QTS_PromiseState"] = makeInvalidEarlyAccess("_QTS_PromiseState");
	Module["_QTS_PromiseResult"] = makeInvalidEarlyAccess("_QTS_PromiseResult");
	Module["_QTS_TestStringArg"] = makeInvalidEarlyAccess("_QTS_TestStringArg");
	Module["_QTS_GetDebugLogEnabled"] = makeInvalidEarlyAccess("_QTS_GetDebugLogEnabled");
	Module["_QTS_SetDebugLogEnabled"] = makeInvalidEarlyAccess("_QTS_SetDebugLogEnabled");
	Module["_QTS_BuildIsDebug"] = makeInvalidEarlyAccess("_QTS_BuildIsDebug");
	Module["_QTS_BuildIsAsyncify"] = makeInvalidEarlyAccess("_QTS_BuildIsAsyncify");
	Module["_QTS_NewFunction"] = makeInvalidEarlyAccess("_QTS_NewFunction");
	Module["_QTS_ArgvGetJSValueConstPointer"] = makeInvalidEarlyAccess("_QTS_ArgvGetJSValueConstPointer");
	Module["_QTS_RuntimeEnableInterruptHandler"] = makeInvalidEarlyAccess("_QTS_RuntimeEnableInterruptHandler");
	Module["_QTS_RuntimeDisableInterruptHandler"] = makeInvalidEarlyAccess("_QTS_RuntimeDisableInterruptHandler");
	Module["_QTS_RuntimeEnableModuleLoader"] = makeInvalidEarlyAccess("_QTS_RuntimeEnableModuleLoader");
	Module["_QTS_RuntimeDisableModuleLoader"] = makeInvalidEarlyAccess("_QTS_RuntimeDisableModuleLoader");
	Module["_QTS_bjson_encode"] = makeInvalidEarlyAccess("_QTS_bjson_encode");
	Module["_QTS_bjson_decode"] = makeInvalidEarlyAccess("_QTS_bjson_decode");
	var _fflush = makeInvalidEarlyAccess("_fflush");
	var _emscripten_stack_init = makeInvalidEarlyAccess("_emscripten_stack_init");
	var _emscripten_stack_get_end = makeInvalidEarlyAccess("_emscripten_stack_get_end");
	var __emscripten_stack_restore = makeInvalidEarlyAccess("__emscripten_stack_restore");
	var __emscripten_stack_alloc = makeInvalidEarlyAccess("__emscripten_stack_alloc");
	var _emscripten_stack_get_current = makeInvalidEarlyAccess("_emscripten_stack_get_current");
	var _asyncify_start_unwind = makeInvalidEarlyAccess("_asyncify_start_unwind");
	var _asyncify_stop_unwind = makeInvalidEarlyAccess("_asyncify_stop_unwind");
	var _asyncify_start_rewind = makeInvalidEarlyAccess("_asyncify_start_rewind");
	var _asyncify_stop_rewind = makeInvalidEarlyAccess("_asyncify_stop_rewind");
	function assignWasmExports(wasmExports) {
		assert(typeof wasmExports["malloc"] != "undefined", "missing Wasm export: malloc");
		assert(typeof wasmExports["QTS_Throw"] != "undefined", "missing Wasm export: QTS_Throw");
		assert(typeof wasmExports["QTS_NewError"] != "undefined", "missing Wasm export: QTS_NewError");
		assert(typeof wasmExports["QTS_RuntimeSetMemoryLimit"] != "undefined", "missing Wasm export: QTS_RuntimeSetMemoryLimit");
		assert(typeof wasmExports["QTS_RuntimeComputeMemoryUsage"] != "undefined", "missing Wasm export: QTS_RuntimeComputeMemoryUsage");
		assert(typeof wasmExports["QTS_RuntimeDumpMemoryUsage"] != "undefined", "missing Wasm export: QTS_RuntimeDumpMemoryUsage");
		assert(typeof wasmExports["QTS_RecoverableLeakCheck"] != "undefined", "missing Wasm export: QTS_RecoverableLeakCheck");
		assert(typeof wasmExports["QTS_BuildIsSanitizeLeak"] != "undefined", "missing Wasm export: QTS_BuildIsSanitizeLeak");
		assert(typeof wasmExports["QTS_RuntimeSetMaxStackSize"] != "undefined", "missing Wasm export: QTS_RuntimeSetMaxStackSize");
		assert(typeof wasmExports["QTS_GetUndefined"] != "undefined", "missing Wasm export: QTS_GetUndefined");
		assert(typeof wasmExports["QTS_GetNull"] != "undefined", "missing Wasm export: QTS_GetNull");
		assert(typeof wasmExports["QTS_GetFalse"] != "undefined", "missing Wasm export: QTS_GetFalse");
		assert(typeof wasmExports["QTS_GetTrue"] != "undefined", "missing Wasm export: QTS_GetTrue");
		assert(typeof wasmExports["QTS_NewHostRef"] != "undefined", "missing Wasm export: QTS_NewHostRef");
		assert(typeof wasmExports["QTS_GetHostRefId"] != "undefined", "missing Wasm export: QTS_GetHostRefId");
		assert(typeof wasmExports["QTS_NewRuntime"] != "undefined", "missing Wasm export: QTS_NewRuntime");
		assert(typeof wasmExports["QTS_FreeRuntime"] != "undefined", "missing Wasm export: QTS_FreeRuntime");
		assert(typeof wasmExports["free"] != "undefined", "missing Wasm export: free");
		assert(typeof wasmExports["QTS_NewContext"] != "undefined", "missing Wasm export: QTS_NewContext");
		assert(typeof wasmExports["QTS_FreeContext"] != "undefined", "missing Wasm export: QTS_FreeContext");
		assert(typeof wasmExports["QTS_FreeValuePointer"] != "undefined", "missing Wasm export: QTS_FreeValuePointer");
		assert(typeof wasmExports["QTS_FreeValuePointerRuntime"] != "undefined", "missing Wasm export: QTS_FreeValuePointerRuntime");
		assert(typeof wasmExports["QTS_FreeVoidPointer"] != "undefined", "missing Wasm export: QTS_FreeVoidPointer");
		assert(typeof wasmExports["QTS_FreeCString"] != "undefined", "missing Wasm export: QTS_FreeCString");
		assert(typeof wasmExports["QTS_DupValuePointer"] != "undefined", "missing Wasm export: QTS_DupValuePointer");
		assert(typeof wasmExports["QTS_NewObject"] != "undefined", "missing Wasm export: QTS_NewObject");
		assert(typeof wasmExports["QTS_NewObjectProto"] != "undefined", "missing Wasm export: QTS_NewObjectProto");
		assert(typeof wasmExports["QTS_NewArray"] != "undefined", "missing Wasm export: QTS_NewArray");
		assert(typeof wasmExports["QTS_NewArrayBuffer"] != "undefined", "missing Wasm export: QTS_NewArrayBuffer");
		assert(typeof wasmExports["QTS_NewFloat64"] != "undefined", "missing Wasm export: QTS_NewFloat64");
		assert(typeof wasmExports["QTS_GetFloat64"] != "undefined", "missing Wasm export: QTS_GetFloat64");
		assert(typeof wasmExports["QTS_NewString"] != "undefined", "missing Wasm export: QTS_NewString");
		assert(typeof wasmExports["QTS_GetString"] != "undefined", "missing Wasm export: QTS_GetString");
		assert(typeof wasmExports["QTS_GetArrayBuffer"] != "undefined", "missing Wasm export: QTS_GetArrayBuffer");
		assert(typeof wasmExports["QTS_GetArrayBufferLength"] != "undefined", "missing Wasm export: QTS_GetArrayBufferLength");
		assert(typeof wasmExports["QTS_NewSymbol"] != "undefined", "missing Wasm export: QTS_NewSymbol");
		assert(typeof wasmExports["QTS_GetSymbolDescriptionOrKey"] != "undefined", "missing Wasm export: QTS_GetSymbolDescriptionOrKey");
		assert(typeof wasmExports["QTS_IsGlobalSymbol"] != "undefined", "missing Wasm export: QTS_IsGlobalSymbol");
		assert(typeof wasmExports["QTS_IsJobPending"] != "undefined", "missing Wasm export: QTS_IsJobPending");
		assert(typeof wasmExports["QTS_ExecutePendingJob"] != "undefined", "missing Wasm export: QTS_ExecutePendingJob");
		assert(typeof wasmExports["QTS_GetProp"] != "undefined", "missing Wasm export: QTS_GetProp");
		assert(typeof wasmExports["QTS_GetPropNumber"] != "undefined", "missing Wasm export: QTS_GetPropNumber");
		assert(typeof wasmExports["QTS_SetProp"] != "undefined", "missing Wasm export: QTS_SetProp");
		assert(typeof wasmExports["QTS_DefineProp"] != "undefined", "missing Wasm export: QTS_DefineProp");
		assert(typeof wasmExports["QTS_GetOwnPropertyNames"] != "undefined", "missing Wasm export: QTS_GetOwnPropertyNames");
		assert(typeof wasmExports["QTS_Call"] != "undefined", "missing Wasm export: QTS_Call");
		assert(typeof wasmExports["QTS_ResolveException"] != "undefined", "missing Wasm export: QTS_ResolveException");
		assert(typeof wasmExports["QTS_Dump"] != "undefined", "missing Wasm export: QTS_Dump");
		assert(typeof wasmExports["QTS_Eval"] != "undefined", "missing Wasm export: QTS_Eval");
		assert(typeof wasmExports["QTS_GetModuleNamespace"] != "undefined", "missing Wasm export: QTS_GetModuleNamespace");
		assert(typeof wasmExports["QTS_Typeof"] != "undefined", "missing Wasm export: QTS_Typeof");
		assert(typeof wasmExports["QTS_GetLength"] != "undefined", "missing Wasm export: QTS_GetLength");
		assert(typeof wasmExports["QTS_IsEqual"] != "undefined", "missing Wasm export: QTS_IsEqual");
		assert(typeof wasmExports["QTS_GetGlobalObject"] != "undefined", "missing Wasm export: QTS_GetGlobalObject");
		assert(typeof wasmExports["QTS_NewPromiseCapability"] != "undefined", "missing Wasm export: QTS_NewPromiseCapability");
		assert(typeof wasmExports["QTS_PromiseState"] != "undefined", "missing Wasm export: QTS_PromiseState");
		assert(typeof wasmExports["QTS_PromiseResult"] != "undefined", "missing Wasm export: QTS_PromiseResult");
		assert(typeof wasmExports["QTS_TestStringArg"] != "undefined", "missing Wasm export: QTS_TestStringArg");
		assert(typeof wasmExports["QTS_GetDebugLogEnabled"] != "undefined", "missing Wasm export: QTS_GetDebugLogEnabled");
		assert(typeof wasmExports["QTS_SetDebugLogEnabled"] != "undefined", "missing Wasm export: QTS_SetDebugLogEnabled");
		assert(typeof wasmExports["QTS_BuildIsDebug"] != "undefined", "missing Wasm export: QTS_BuildIsDebug");
		assert(typeof wasmExports["QTS_BuildIsAsyncify"] != "undefined", "missing Wasm export: QTS_BuildIsAsyncify");
		assert(typeof wasmExports["QTS_NewFunction"] != "undefined", "missing Wasm export: QTS_NewFunction");
		assert(typeof wasmExports["QTS_ArgvGetJSValueConstPointer"] != "undefined", "missing Wasm export: QTS_ArgvGetJSValueConstPointer");
		assert(typeof wasmExports["QTS_RuntimeEnableInterruptHandler"] != "undefined", "missing Wasm export: QTS_RuntimeEnableInterruptHandler");
		assert(typeof wasmExports["QTS_RuntimeDisableInterruptHandler"] != "undefined", "missing Wasm export: QTS_RuntimeDisableInterruptHandler");
		assert(typeof wasmExports["QTS_RuntimeEnableModuleLoader"] != "undefined", "missing Wasm export: QTS_RuntimeEnableModuleLoader");
		assert(typeof wasmExports["QTS_RuntimeDisableModuleLoader"] != "undefined", "missing Wasm export: QTS_RuntimeDisableModuleLoader");
		assert(typeof wasmExports["QTS_bjson_encode"] != "undefined", "missing Wasm export: QTS_bjson_encode");
		assert(typeof wasmExports["QTS_bjson_decode"] != "undefined", "missing Wasm export: QTS_bjson_decode");
		assert(typeof wasmExports["fflush"] != "undefined", "missing Wasm export: fflush");
		assert(typeof wasmExports["strerror"] != "undefined", "missing Wasm export: strerror");
		assert(typeof wasmExports["emscripten_stack_init"] != "undefined", "missing Wasm export: emscripten_stack_init");
		assert(typeof wasmExports["emscripten_stack_get_free"] != "undefined", "missing Wasm export: emscripten_stack_get_free");
		assert(typeof wasmExports["emscripten_stack_get_base"] != "undefined", "missing Wasm export: emscripten_stack_get_base");
		assert(typeof wasmExports["emscripten_stack_get_end"] != "undefined", "missing Wasm export: emscripten_stack_get_end");
		assert(typeof wasmExports["_emscripten_stack_restore"] != "undefined", "missing Wasm export: _emscripten_stack_restore");
		assert(typeof wasmExports["_emscripten_stack_alloc"] != "undefined", "missing Wasm export: _emscripten_stack_alloc");
		assert(typeof wasmExports["emscripten_stack_get_current"] != "undefined", "missing Wasm export: emscripten_stack_get_current");
		assert(typeof wasmExports["dynCall_viii"] != "undefined", "missing Wasm export: dynCall_viii");
		assert(typeof wasmExports["dynCall_jijiiii"] != "undefined", "missing Wasm export: dynCall_jijiiii");
		assert(typeof wasmExports["dynCall_iii"] != "undefined", "missing Wasm export: dynCall_iii");
		assert(typeof wasmExports["dynCall_iiiii"] != "undefined", "missing Wasm export: dynCall_iiiii");
		assert(typeof wasmExports["dynCall_iiii"] != "undefined", "missing Wasm export: dynCall_iiii");
		assert(typeof wasmExports["dynCall_vij"] != "undefined", "missing Wasm export: dynCall_vij");
		assert(typeof wasmExports["dynCall_ii"] != "undefined", "missing Wasm export: dynCall_ii");
		assert(typeof wasmExports["dynCall_jijjiii"] != "undefined", "missing Wasm export: dynCall_jijjiii");
		assert(typeof wasmExports["dynCall_vii"] != "undefined", "missing Wasm export: dynCall_vii");
		assert(typeof wasmExports["dynCall_jijiii"] != "undefined", "missing Wasm export: dynCall_jijiii");
		assert(typeof wasmExports["dynCall_jiii"] != "undefined", "missing Wasm export: dynCall_jiii");
		assert(typeof wasmExports["dynCall_jijii"] != "undefined", "missing Wasm export: dynCall_jijii");
		assert(typeof wasmExports["dynCall_jijiiiii"] != "undefined", "missing Wasm export: dynCall_jijiiiii");
		assert(typeof wasmExports["dynCall_jijj"] != "undefined", "missing Wasm export: dynCall_jijj");
		assert(typeof wasmExports["dynCall_viji"] != "undefined", "missing Wasm export: dynCall_viji");
		assert(typeof wasmExports["dynCall_jij"] != "undefined", "missing Wasm export: dynCall_jij");
		assert(typeof wasmExports["dynCall_jiji"] != "undefined", "missing Wasm export: dynCall_jiji");
		assert(typeof wasmExports["dynCall_iijijjji"] != "undefined", "missing Wasm export: dynCall_iijijjji");
		assert(typeof wasmExports["dynCall_iiiji"] != "undefined", "missing Wasm export: dynCall_iiiji");
		assert(typeof wasmExports["dynCall_iiji"] != "undefined", "missing Wasm export: dynCall_iiji");
		assert(typeof wasmExports["dynCall_iiiij"] != "undefined", "missing Wasm export: dynCall_iiiij");
		assert(typeof wasmExports["dynCall_jijij"] != "undefined", "missing Wasm export: dynCall_jijij");
		assert(typeof wasmExports["dynCall_iijijji"] != "undefined", "missing Wasm export: dynCall_iijijji");
		assert(typeof wasmExports["dynCall_iijj"] != "undefined", "missing Wasm export: dynCall_iijj");
		assert(typeof wasmExports["dynCall_iij"] != "undefined", "missing Wasm export: dynCall_iij");
		assert(typeof wasmExports["dynCall_jiiii"] != "undefined", "missing Wasm export: dynCall_jiiii");
		assert(typeof wasmExports["dynCall_dd"] != "undefined", "missing Wasm export: dynCall_dd");
		assert(typeof wasmExports["dynCall_ddd"] != "undefined", "missing Wasm export: dynCall_ddd");
		assert(typeof wasmExports["dynCall_jii"] != "undefined", "missing Wasm export: dynCall_jii");
		assert(typeof wasmExports["dynCall_iidiiii"] != "undefined", "missing Wasm export: dynCall_iidiiii");
		assert(typeof wasmExports["asyncify_start_unwind"] != "undefined", "missing Wasm export: asyncify_start_unwind");
		assert(typeof wasmExports["asyncify_stop_unwind"] != "undefined", "missing Wasm export: asyncify_stop_unwind");
		assert(typeof wasmExports["asyncify_start_rewind"] != "undefined", "missing Wasm export: asyncify_start_rewind");
		assert(typeof wasmExports["asyncify_stop_rewind"] != "undefined", "missing Wasm export: asyncify_stop_rewind");
		assert(typeof wasmExports["__indirect_function_table"] != "undefined", "missing Wasm export: __indirect_function_table");
		_malloc = Module["_malloc"] = createExportWrapper("malloc", 1);
		Module["_QTS_Throw"] = createExportWrapper("QTS_Throw", 2);
		Module["_QTS_NewError"] = createExportWrapper("QTS_NewError", 1);
		Module["_QTS_RuntimeSetMemoryLimit"] = createExportWrapper("QTS_RuntimeSetMemoryLimit", 2);
		Module["_QTS_RuntimeComputeMemoryUsage"] = createExportWrapper("QTS_RuntimeComputeMemoryUsage", 2);
		Module["_QTS_RuntimeDumpMemoryUsage"] = createExportWrapper("QTS_RuntimeDumpMemoryUsage", 1);
		Module["_QTS_RecoverableLeakCheck"] = createExportWrapper("QTS_RecoverableLeakCheck", 0);
		Module["_QTS_BuildIsSanitizeLeak"] = createExportWrapper("QTS_BuildIsSanitizeLeak", 0);
		Module["_QTS_RuntimeSetMaxStackSize"] = createExportWrapper("QTS_RuntimeSetMaxStackSize", 2);
		Module["_QTS_GetUndefined"] = createExportWrapper("QTS_GetUndefined", 0);
		Module["_QTS_GetNull"] = createExportWrapper("QTS_GetNull", 0);
		Module["_QTS_GetFalse"] = createExportWrapper("QTS_GetFalse", 0);
		Module["_QTS_GetTrue"] = createExportWrapper("QTS_GetTrue", 0);
		Module["_QTS_NewHostRef"] = createExportWrapper("QTS_NewHostRef", 2);
		Module["_QTS_GetHostRefId"] = createExportWrapper("QTS_GetHostRefId", 1);
		Module["_QTS_NewRuntime"] = createExportWrapper("QTS_NewRuntime", 0);
		Module["_QTS_FreeRuntime"] = createExportWrapper("QTS_FreeRuntime", 1);
		_free = Module["_free"] = createExportWrapper("free", 1);
		Module["_QTS_NewContext"] = createExportWrapper("QTS_NewContext", 2);
		Module["_QTS_FreeContext"] = createExportWrapper("QTS_FreeContext", 1);
		Module["_QTS_FreeValuePointer"] = createExportWrapper("QTS_FreeValuePointer", 2);
		Module["_QTS_FreeValuePointerRuntime"] = createExportWrapper("QTS_FreeValuePointerRuntime", 2);
		Module["_QTS_FreeVoidPointer"] = createExportWrapper("QTS_FreeVoidPointer", 2);
		Module["_QTS_FreeCString"] = createExportWrapper("QTS_FreeCString", 2);
		Module["_QTS_DupValuePointer"] = createExportWrapper("QTS_DupValuePointer", 2);
		Module["_QTS_NewObject"] = createExportWrapper("QTS_NewObject", 1);
		Module["_QTS_NewObjectProto"] = createExportWrapper("QTS_NewObjectProto", 2);
		Module["_QTS_NewArray"] = createExportWrapper("QTS_NewArray", 1);
		Module["_QTS_NewArrayBuffer"] = createExportWrapper("QTS_NewArrayBuffer", 3);
		Module["_QTS_NewFloat64"] = createExportWrapper("QTS_NewFloat64", 2);
		Module["_QTS_GetFloat64"] = createExportWrapper("QTS_GetFloat64", 2);
		Module["_QTS_NewString"] = createExportWrapper("QTS_NewString", 2);
		Module["_QTS_GetString"] = createExportWrapper("QTS_GetString", 2);
		Module["_QTS_GetArrayBuffer"] = createExportWrapper("QTS_GetArrayBuffer", 2);
		Module["_QTS_GetArrayBufferLength"] = createExportWrapper("QTS_GetArrayBufferLength", 2);
		Module["_QTS_NewSymbol"] = createExportWrapper("QTS_NewSymbol", 3);
		Module["_QTS_GetSymbolDescriptionOrKey"] = createExportWrapper("QTS_GetSymbolDescriptionOrKey", 2);
		Module["_QTS_IsGlobalSymbol"] = createExportWrapper("QTS_IsGlobalSymbol", 2);
		Module["_QTS_IsJobPending"] = createExportWrapper("QTS_IsJobPending", 1);
		Module["_QTS_ExecutePendingJob"] = createExportWrapper("QTS_ExecutePendingJob", 3);
		Module["_QTS_GetProp"] = createExportWrapper("QTS_GetProp", 3);
		Module["_QTS_GetPropNumber"] = createExportWrapper("QTS_GetPropNumber", 3);
		Module["_QTS_SetProp"] = createExportWrapper("QTS_SetProp", 4);
		Module["_QTS_DefineProp"] = createExportWrapper("QTS_DefineProp", 9);
		Module["_QTS_GetOwnPropertyNames"] = createExportWrapper("QTS_GetOwnPropertyNames", 5);
		Module["_QTS_Call"] = createExportWrapper("QTS_Call", 5);
		Module["_QTS_ResolveException"] = createExportWrapper("QTS_ResolveException", 2);
		Module["_QTS_Dump"] = createExportWrapper("QTS_Dump", 2);
		Module["_QTS_Eval"] = createExportWrapper("QTS_Eval", 6);
		Module["_QTS_GetModuleNamespace"] = createExportWrapper("QTS_GetModuleNamespace", 2);
		Module["_QTS_Typeof"] = createExportWrapper("QTS_Typeof", 2);
		Module["_QTS_GetLength"] = createExportWrapper("QTS_GetLength", 3);
		Module["_QTS_IsEqual"] = createExportWrapper("QTS_IsEqual", 4);
		Module["_QTS_GetGlobalObject"] = createExportWrapper("QTS_GetGlobalObject", 1);
		Module["_QTS_NewPromiseCapability"] = createExportWrapper("QTS_NewPromiseCapability", 2);
		Module["_QTS_PromiseState"] = createExportWrapper("QTS_PromiseState", 2);
		Module["_QTS_PromiseResult"] = createExportWrapper("QTS_PromiseResult", 2);
		Module["_QTS_TestStringArg"] = createExportWrapper("QTS_TestStringArg", 1);
		Module["_QTS_GetDebugLogEnabled"] = createExportWrapper("QTS_GetDebugLogEnabled", 1);
		Module["_QTS_SetDebugLogEnabled"] = createExportWrapper("QTS_SetDebugLogEnabled", 2);
		Module["_QTS_BuildIsDebug"] = createExportWrapper("QTS_BuildIsDebug", 0);
		Module["_QTS_BuildIsAsyncify"] = createExportWrapper("QTS_BuildIsAsyncify", 0);
		Module["_QTS_NewFunction"] = createExportWrapper("QTS_NewFunction", 5);
		Module["_QTS_ArgvGetJSValueConstPointer"] = createExportWrapper("QTS_ArgvGetJSValueConstPointer", 2);
		Module["_QTS_RuntimeEnableInterruptHandler"] = createExportWrapper("QTS_RuntimeEnableInterruptHandler", 1);
		Module["_QTS_RuntimeDisableInterruptHandler"] = createExportWrapper("QTS_RuntimeDisableInterruptHandler", 1);
		Module["_QTS_RuntimeEnableModuleLoader"] = createExportWrapper("QTS_RuntimeEnableModuleLoader", 2);
		Module["_QTS_RuntimeDisableModuleLoader"] = createExportWrapper("QTS_RuntimeDisableModuleLoader", 1);
		Module["_QTS_bjson_encode"] = createExportWrapper("QTS_bjson_encode", 2);
		Module["_QTS_bjson_decode"] = createExportWrapper("QTS_bjson_decode", 2);
		_fflush = createExportWrapper("fflush", 1);
		_emscripten_stack_init = wasmExports["emscripten_stack_init"];
		wasmExports["emscripten_stack_get_free"];
		wasmExports["emscripten_stack_get_base"];
		_emscripten_stack_get_end = wasmExports["emscripten_stack_get_end"];
		__emscripten_stack_restore = wasmExports["_emscripten_stack_restore"];
		__emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"];
		_emscripten_stack_get_current = wasmExports["emscripten_stack_get_current"];
		dynCalls["viii"] = createExportWrapper("dynCall_viii", 4);
		dynCalls["jijiiii"] = createExportWrapper("dynCall_jijiiii", 7);
		dynCalls["iii"] = createExportWrapper("dynCall_iii", 3);
		dynCalls["iiiii"] = createExportWrapper("dynCall_iiiii", 5);
		dynCalls["iiii"] = createExportWrapper("dynCall_iiii", 4);
		dynCalls["vij"] = createExportWrapper("dynCall_vij", 3);
		dynCalls["ii"] = createExportWrapper("dynCall_ii", 2);
		dynCalls["jijjiii"] = createExportWrapper("dynCall_jijjiii", 7);
		dynCalls["vii"] = createExportWrapper("dynCall_vii", 3);
		dynCalls["jijiii"] = createExportWrapper("dynCall_jijiii", 6);
		dynCalls["jiii"] = createExportWrapper("dynCall_jiii", 4);
		dynCalls["jijii"] = createExportWrapper("dynCall_jijii", 5);
		dynCalls["jijiiiii"] = createExportWrapper("dynCall_jijiiiii", 8);
		dynCalls["jijj"] = createExportWrapper("dynCall_jijj", 4);
		dynCalls["viji"] = createExportWrapper("dynCall_viji", 4);
		dynCalls["jij"] = createExportWrapper("dynCall_jij", 3);
		dynCalls["jiji"] = createExportWrapper("dynCall_jiji", 4);
		dynCalls["iijijjji"] = createExportWrapper("dynCall_iijijjji", 8);
		dynCalls["iiiji"] = createExportWrapper("dynCall_iiiji", 5);
		dynCalls["iiji"] = createExportWrapper("dynCall_iiji", 4);
		dynCalls["iiiij"] = createExportWrapper("dynCall_iiiij", 5);
		dynCalls["jijij"] = createExportWrapper("dynCall_jijij", 5);
		dynCalls["iijijji"] = createExportWrapper("dynCall_iijijji", 7);
		dynCalls["iijj"] = createExportWrapper("dynCall_iijj", 4);
		dynCalls["iij"] = createExportWrapper("dynCall_iij", 3);
		dynCalls["jiiii"] = createExportWrapper("dynCall_jiiii", 5);
		dynCalls["dd"] = createExportWrapper("dynCall_dd", 2);
		dynCalls["ddd"] = createExportWrapper("dynCall_ddd", 3);
		dynCalls["jii"] = createExportWrapper("dynCall_jii", 3);
		dynCalls["iidiiii"] = createExportWrapper("dynCall_iidiiii", 7);
		_asyncify_start_unwind = createExportWrapper("asyncify_start_unwind", 1);
		_asyncify_stop_unwind = createExportWrapper("asyncify_stop_unwind", 0);
		_asyncify_start_rewind = createExportWrapper("asyncify_start_rewind", 1);
		_asyncify_stop_rewind = createExportWrapper("asyncify_stop_rewind", 0);
		wasmExports["__indirect_function_table"];
	}
	var wasmImports = {
		__assert_fail: ___assert_fail,
		_abort_js: __abort_js,
		_localtime_js: __localtime_js,
		_tzset_js: __tzset_js,
		emscripten_date_now: _emscripten_date_now,
		emscripten_resize_heap: _emscripten_resize_heap,
		fd_close: _fd_close,
		fd_seek: _fd_seek,
		fd_write: _fd_write,
		memory: wasmMemory,
		qts_host_call_function,
		qts_host_interrupt_handler,
		qts_host_load_module_source,
		qts_host_normalize_module,
		qts_host_ref_free,
		set_asyncify_stack_size
	};
	var calledRun;
	function stackCheckInit() {
		_emscripten_stack_init();
		writeStackCookie();
	}
	function run() {
		stackCheckInit();
		preRun();
		function doRun() {
			assert(!calledRun);
			calledRun = true;
			Module["calledRun"] = true;
			if (ABORT) return;
			initRuntime();
			readyPromiseResolve?.(Module);
			Module["onRuntimeInitialized"]?.();
			consumedModuleProp("onRuntimeInitialized");
			assert(!Module["_main"], "compiled without a main, but one is present. if you added it from JS, use Module[\"onRuntimeInitialized\"]");
			postRun();
		}
		if (Module["setStatus"]) {
			Module["setStatus"]("Running...");
			setTimeout(() => {
				setTimeout(() => Module["setStatus"](""), 1);
				doRun();
			}, 1);
		} else doRun();
		checkStackCookie();
	}
	function checkUnflushedContent() {
		var oldOut = out;
		var oldErr = err;
		var has = false;
		out = err = (x) => {
			has = true;
		};
		try {
			flush_NO_FILESYSTEM();
		} catch (e) {}
		out = oldOut;
		err = oldErr;
		if (has) {
			warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.");
			warnOnce("(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)");
		}
	}
	var wasmExports = await createWasm();
	run();
	if (runtimeInitialized) moduleRtn = Module;
	else moduleRtn = new Promise((resolve, reject) => {
		readyPromiseResolve = resolve;
		readyPromiseReject = reject;
	});
	for (const prop of Object.keys(Module)) if (!(prop in moduleArg)) Object.defineProperty(moduleArg, prop, {
		configurable: true,
		get() {
			abort(`Access to module property ('${prop}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`);
		}
	});
	return moduleRtn;
}
//#endregion
export { QuickJSRaw as default };
