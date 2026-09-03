import { Gt as unref, It as ref, P as getCurrentInstance, R as inject, S as computed, tt as provide } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { o as debugWarn } from "./style-aw1HwLDr.js";
import { l as keysOf, r as useNamespace, t as namespaceContextKey } from "./use-namespace-xWWi2xIE.js";
import { t as SIZE_INJECTION_KEY } from "./use-size-8oGTaPnQ.js";
import { a as useLocale, i as localeContextKey, n as useZIndex, r as zIndexContextKey } from "./use-z-index-DYH4GP29.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/config-provider/src/constants.mjs
var configProviderContextKey = Symbol();
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/config-provider/src/hooks/use-global-config.mjs
var globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
	const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
	if (key) return computed(() => {
		var _a, _b;
		return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
	});
	else return config;
}
function useGlobalComponentSettings(block, sizeFallback) {
	const config = useGlobalConfig();
	const ns = useNamespace(block, computed(() => {
		var _a;
		return ((_a = config.value) == null ? void 0 : _a.namespace) || "el";
	}));
	const locale = useLocale(computed(() => {
		var _a;
		return (_a = config.value) == null ? void 0 : _a.locale;
	}));
	const zIndex = useZIndex(computed(() => {
		var _a;
		return ((_a = config.value) == null ? void 0 : _a.zIndex) || 2e3;
	}));
	const size = computed(() => {
		var _a;
		return unref(sizeFallback) || ((_a = config.value) == null ? void 0 : _a.size) || "";
	});
	provideGlobalConfig(computed(() => unref(config) || {}));
	return {
		ns,
		locale,
		zIndex,
		size
	};
}
var provideGlobalConfig = (config, app, global = false) => {
	var _a;
	const inSetup = !!getCurrentInstance();
	const oldConfig = inSetup ? useGlobalConfig() : void 0;
	const provideFn = (_a = app == null ? void 0 : app.provide) != null ? _a : inSetup ? provide : void 0;
	if (!provideFn) {
		debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
		return;
	}
	const context = computed(() => {
		const cfg = unref(config);
		if (!(oldConfig == null ? void 0 : oldConfig.value)) return cfg;
		return mergeConfig(oldConfig.value, cfg);
	});
	provideFn(configProviderContextKey, context);
	provideFn(localeContextKey, computed(() => context.value.locale));
	provideFn(namespaceContextKey, computed(() => context.value.namespace));
	provideFn(zIndexContextKey, computed(() => context.value.zIndex));
	provideFn(SIZE_INJECTION_KEY, { size: computed(() => context.value.size || "") });
	if (global || !globalConfig.value) globalConfig.value = context.value;
	return context;
};
var mergeConfig = (a, b) => {
	var _a;
	const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
	const obj = {};
	for (const key of keys) obj[key] = (_a = b[key]) != null ? _a : a[key];
	return obj;
};
//#endregion
export { useGlobalConfig as n, useGlobalComponentSettings as t };
