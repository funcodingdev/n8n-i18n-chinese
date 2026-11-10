const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/module-ES6BEMUI-C1ArExx3.js","assets/chunk-V2S4ZYJR-Bg0_qLoS.js","assets/dist-COoiWvn4.js","assets/module-asyncify-2EFITU5U-D1fUHtCk.js","assets/chunk-TAV5CUKK-BqGy-4e2.js","assets/ffi-C4N6ZYTA.js","assets/ffi-Byn0AhEQ.js"])))=>i.map(i=>d[i]);
import { VO as __vitePreload } from "./app-DGoK9ugD.js";
import { a as JSPromiseStateEnum, i as IsEqualOp, n as GetOwnPropertyNamesFlags, o as assertSync, r as IntrinsicsFlags, t as EvalFlags } from "./dist-COoiWvn4.js";
import { S as errors_exports, T as setDebugMode, _ as WeakLifetime, a as Lifetime, b as createDisposableArray, c as QuickJSEmscriptenModuleError, f as QuickJSRuntime, g as UsingDisposable, h as StaticLifetime, i as DisposableSuccess, l as QuickJSMemoryLeakDetected, m as Scope, n as DisposableFail, o as QuickJSContext, p as QuickJSWASMModule, r as DisposableResult, s as QuickJSDeferredPromise, t as DefaultIntrinsics, x as debugLog } from "./chunk-V2S4ZYJR-Bg0_qLoS.js";
import { n as QuickJSAsyncRuntime, r as QuickJSAsyncWASMModule, t as QuickJSAsyncContext } from "./chunk-TAV5CUKK-BqGy-4e2.js";
//#region ../../../node_modules/.pnpm/quickjs-emscripten-core@0.32.0/node_modules/quickjs-emscripten-core/dist/index.mjs
async function newQuickJSWASMModuleFromVariant(variantOrPromise) {
	let variant = smartUnwrap(await variantOrPromise), [wasmModuleLoader, QuickJSFFI, { QuickJSWASMModule: QuickJSWASMModule2 }] = await Promise.all([
		variant.importModuleLoader().then(smartUnwrap),
		variant.importFFI(),
		__vitePreload(() => import("./module-ES6BEMUI-C1ArExx3.js").then(smartUnwrap), __vite__mapDeps([0,1,2]))
	]), wasmModule = await wasmModuleLoader();
	wasmModule.type = "sync";
	return new QuickJSWASMModule2(wasmModule, new QuickJSFFI(wasmModule));
}
async function newQuickJSAsyncWASMModuleFromVariant(variantOrPromise) {
	let variant = smartUnwrap(await variantOrPromise), [wasmModuleLoader, QuickJSAsyncFFI, { QuickJSAsyncWASMModule: QuickJSAsyncWASMModule2 }] = await Promise.all([
		variant.importModuleLoader().then(smartUnwrap),
		variant.importFFI(),
		__vitePreload(() => import("./module-asyncify-2EFITU5U-D1fUHtCk.js").then(smartUnwrap), __vite__mapDeps([3,4,1,2]))
	]), wasmModule = await wasmModuleLoader();
	wasmModule.type = "async";
	return new QuickJSAsyncWASMModule2(wasmModule, new QuickJSAsyncFFI(wasmModule));
}
function memoizePromiseFactory(fn) {
	let promise;
	return () => promise ?? (promise = fn());
}
function smartUnwrap(val) {
	return val && "default" in val && val.default ? val.default && "default" in val.default && val.default.default ? val.default.default : val.default : val;
}
function newVariant(baseVariant, options) {
	return {
		...baseVariant,
		async importModuleLoader() {
			let moduleLoader = smartUnwrap(await baseVariant.importModuleLoader());
			return async function() {
				let moduleLoaderArg = options.emscriptenModule ? { ...options.emscriptenModule } : {}, log = options.log ?? ((...args) => debugLog("newVariant moduleLoader:", ...args)), tapValue = (message, val) => (log(...message, val), val), force = (val) => typeof val == "function" ? val() : val;
				(options.wasmLocation || options.wasmSourceMapLocation || options.locateFile) && (moduleLoaderArg.locateFile = (fileName, relativeTo) => {
					let args = {
						fileName,
						relativeTo
					};
					if (fileName.endsWith(".wasm") && options.wasmLocation !== void 0) return tapValue(["locateFile .wasm: provide wasmLocation", args], options.wasmLocation);
					if (fileName.endsWith(".map")) {
						if (options.wasmSourceMapLocation !== void 0) return tapValue(["locateFile .map: provide wasmSourceMapLocation", args], options.wasmSourceMapLocation);
						if (options.wasmLocation && !options.locateFile) return tapValue(["locateFile .map: infer from wasmLocation", args], options.wasmLocation + ".map");
					}
					return options.locateFile ? tapValue(["locateFile: use provided fn", args], options.locateFile(fileName, relativeTo)) : tapValue(["locateFile: unhandled, passthrough", args], fileName);
				}), options.wasmBinary && (moduleLoaderArg.wasmBinary = await force(options.wasmBinary)), options.wasmMemory && (moduleLoaderArg.wasmMemory = await force(options.wasmMemory));
				let optionsWasmModule = options.wasmModule, modulePromise;
				optionsWasmModule && (moduleLoaderArg.instantiateWasm = async (imports, onSuccess) => {
					modulePromise ?? (modulePromise = Promise.resolve(force(optionsWasmModule)));
					let wasmModule = await modulePromise;
					if (!wasmModule) throw new QuickJSEmscriptenModuleError(`options.wasmModule returned ${String(wasmModule)}`);
					let instance = await WebAssembly.instantiate(wasmModule, imports);
					return onSuccess(instance), instance.exports;
				}), moduleLoaderArg.monitorRunDependencies = (left) => {
					log("monitorRunDependencies:", left);
				}, moduleLoaderArg.quickjsEmscriptenInit = () => newMockExtensions(log);
				let resultPromise = moduleLoader(moduleLoaderArg), extensions = moduleLoaderArg.quickjsEmscriptenInit?.(log);
				if (optionsWasmModule && extensions?.receiveWasmOffsetConverter && !extensions.existingWasmOffsetConverter) {
					let wasmBinary = await force(options.wasmBinary) ?? /* @__PURE__ */ new ArrayBuffer(0);
					modulePromise ?? (modulePromise = Promise.resolve(force(optionsWasmModule)));
					let wasmModule = await modulePromise;
					if (!wasmModule) throw new QuickJSEmscriptenModuleError(`options.wasmModule returned ${String(wasmModule)}`);
					extensions.receiveWasmOffsetConverter(wasmBinary, wasmModule);
				}
				if (extensions?.receiveSourceMapJSON) {
					let loadedSourceMapData = await force(options.wasmSourceMapData);
					typeof loadedSourceMapData == "string" ? extensions.receiveSourceMapJSON(JSON.parse(loadedSourceMapData)) : loadedSourceMapData ? extensions.receiveSourceMapJSON(loadedSourceMapData) : extensions.receiveSourceMapJSON({
						version: 3,
						names: [],
						sources: [],
						mappings: ""
					});
				}
				return resultPromise;
			};
		}
	};
}
function newMockExtensions(log) {
	let mockMessage = "mock called, emscripten module may not be initialized yet";
	return {
		mock: !0,
		removeRunDependency(name) {
			log(`${mockMessage}: removeRunDependency called:`, name);
		},
		receiveSourceMapJSON(data) {
			log(`${mockMessage}: receiveSourceMapJSON called:`, data);
		},
		WasmOffsetConverter: void 0,
		receiveWasmOffsetConverter(bytes, mod) {
			log(`${mockMessage}: receiveWasmOffsetConverter called:`, bytes, mod);
		}
	};
}
function isSuccess(successOrFail) {
	return !("error" in successOrFail);
}
function isFail(successOrFail) {
	return "error" in successOrFail;
}
function shouldInterruptAfterDeadline(deadline) {
	let deadlineAsNumber = typeof deadline == "number" ? deadline : deadline.getTime();
	return function() {
		return Date.now() > deadlineAsNumber;
	};
}
var TestQuickJSWASMModule = class {
	constructor(parent) {
		this.parent = parent;
		this.contexts = /* @__PURE__ */ new Set();
		this.runtimes = /* @__PURE__ */ new Set();
	}
	newRuntime(options) {
		let runtime = this.parent.newRuntime({
			...options,
			ownedLifetimes: [new Lifetime(void 0, void 0, () => this.runtimes.delete(runtime)), ...options?.ownedLifetimes ?? []]
		});
		return this.runtimes.add(runtime), runtime;
	}
	newContext(options) {
		let context = this.parent.newContext({
			...options,
			ownedLifetimes: [new Lifetime(void 0, void 0, () => this.contexts.delete(context)), ...options?.ownedLifetimes ?? []]
		});
		return this.contexts.add(context), context;
	}
	evalCode(code, options) {
		return this.parent.evalCode(code, options);
	}
	disposeAll() {
		let allDisposables = [...this.contexts, ...this.runtimes];
		this.runtimes.clear(), this.contexts.clear(), allDisposables.forEach((d) => {
			d.alive && d.dispose();
		});
	}
	assertNoMemoryAllocated() {
		if (this.getFFI().QTS_RecoverableLeakCheck()) throw new QuickJSMemoryLeakDetected("Leak sanitizer detected un-freed memory");
		if (this.contexts.size > 0) throw new QuickJSMemoryLeakDetected(`${this.contexts.size} contexts leaked`);
		if (this.runtimes.size > 0) throw new QuickJSMemoryLeakDetected(`${this.runtimes.size} runtimes leaked`);
	}
	getWasmMemory() {
		return this.parent.getWasmMemory();
	}
	getFFI() {
		return this.parent.getFFI();
	}
};
//#endregion
//#region ../../../node_modules/.pnpm/@jitl+quickjs-wasmfile-debug-sync@0.32.0/node_modules/@jitl/quickjs-wasmfile-debug-sync/dist/index.mjs
var src_default$1 = {
	type: "sync",
	importFFI: () => __vitePreload(() => import("./ffi-xHsNCK5e.js").then((mod) => mod.QuickJSFFI), []),
	importModuleLoader: () => __vitePreload(() => import("./emscripten-module.browser-CqB2csOj.js").then((mod) => mod.default), [])
};
//#endregion
//#region ../../../node_modules/.pnpm/@jitl+quickjs-wasmfile-release-sync@0.32.0/node_modules/@jitl/quickjs-wasmfile-release-sync/dist/index.mjs
var src_default$3 = {
	type: "sync",
	importFFI: () => __vitePreload(() => import("./ffi-B7mhNP0h.js").then((mod) => mod.QuickJSFFI), []),
	importModuleLoader: () => __vitePreload(() => import("./emscripten-module.browser-CwHHkanx.js").then((mod) => mod.default), [])
};
//#endregion
//#region ../../../node_modules/.pnpm/@jitl+quickjs-wasmfile-debug-asyncify@0.32.0/node_modules/@jitl/quickjs-wasmfile-debug-asyncify/dist/index.mjs
var src_default = {
	type: "async",
	importFFI: () => __vitePreload(() => import("./ffi-C4N6ZYTA.js").then((mod) => mod.QuickJSAsyncFFI), __vite__mapDeps([5,2])),
	importModuleLoader: () => __vitePreload(() => import("./emscripten-module.browser-CMbrkWW8.js").then((mod) => mod.default), [])
};
//#endregion
//#region ../../../node_modules/.pnpm/@jitl+quickjs-wasmfile-release-asyncify@0.32.0/node_modules/@jitl/quickjs-wasmfile-release-asyncify/dist/index.mjs
var src_default$2 = {
	type: "async",
	importFFI: () => __vitePreload(() => import("./ffi-Byn0AhEQ.js").then((mod) => mod.QuickJSAsyncFFI), __vite__mapDeps([6,2])),
	importModuleLoader: () => __vitePreload(() => import("./emscripten-module.browser-BRLtIYBs.js").then((mod) => mod.default), [])
};
//#endregion
//#region ../../../node_modules/.pnpm/quickjs-emscripten@0.32.0/node_modules/quickjs-emscripten/dist/chunk-OHAYRCBA.mjs
async function newQuickJSWASMModule(variantOrPromise = src_default$3) {
	return newQuickJSWASMModuleFromVariant(variantOrPromise);
}
async function newQuickJSAsyncWASMModule(variantOrPromise = src_default$2) {
	return newQuickJSAsyncWASMModuleFromVariant(variantOrPromise);
}
//#endregion
//#region ../../../node_modules/.pnpm/quickjs-emscripten@0.32.0/node_modules/quickjs-emscripten/dist/index.mjs
var singleton;
var singletonPromise;
async function getQuickJS() {
	return singletonPromise ?? (singletonPromise = newQuickJSWASMModule().then((instance) => (singleton = instance, instance))), await singletonPromise;
}
function getQuickJSSync() {
	if (!singleton) throw new Error("QuickJS not initialized. Await getQuickJS() at least once.");
	return singleton;
}
async function newAsyncRuntime(options) {
	return (await newQuickJSAsyncWASMModule()).newRuntime(options);
}
async function newAsyncContext(options) {
	return (await newQuickJSAsyncWASMModule()).newContext(options);
}
//#endregion
export { src_default as DEBUG_ASYNC, src_default$1 as DEBUG_SYNC, DefaultIntrinsics, DisposableFail, DisposableResult, DisposableSuccess, EvalFlags, GetOwnPropertyNamesFlags, IntrinsicsFlags, IsEqualOp, JSPromiseStateEnum, Lifetime, QuickJSAsyncContext, QuickJSAsyncRuntime, QuickJSAsyncWASMModule, QuickJSContext, QuickJSDeferredPromise, QuickJSRuntime, QuickJSWASMModule, src_default$2 as RELEASE_ASYNC, src_default$3 as RELEASE_SYNC, Scope, StaticLifetime, TestQuickJSWASMModule, UsingDisposable, WeakLifetime, assertSync, createDisposableArray, debugLog, errors_exports as errors, getQuickJS, getQuickJSSync, isFail, isSuccess, memoizePromiseFactory, newAsyncContext, newAsyncRuntime, newQuickJSAsyncWASMModule, newQuickJSAsyncWASMModuleFromVariant, newQuickJSWASMModule, newQuickJSWASMModuleFromVariant, newVariant, setDebugMode, shouldInterruptAfterDeadline };
