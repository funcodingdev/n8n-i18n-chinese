import { Gt as unref, R as inject, S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { i as buildProp } from "./use-namespace-xWWi2xIE.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/constants/size.mjs
var componentSizes = [
	"",
	"default",
	"small",
	"large"
];
var componentSizeMap = {
	large: 40,
	default: 32,
	small: 24
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-size/index.mjs
var useSizeProp = buildProp({
	type: String,
	values: componentSizes,
	required: false
});
var SIZE_INJECTION_KEY = Symbol("size");
var useGlobalSize = () => {
	const injectedSize = inject(SIZE_INJECTION_KEY, {});
	return computed(() => {
		return unref(injectedSize.size) || "";
	});
};
//#endregion
export { componentSizes as a, componentSizeMap as i, useGlobalSize as n, useSizeProp as r, SIZE_INJECTION_KEY as t };
