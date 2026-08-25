import { $ as openBlock, E as createElementBlock, Gt as unref, N as defineComponent, P as getCurrentInstance, R as inject, S as computed, U as mergeProps, gt as watch, it as renderSlot } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { n as addUnit, o as debugWarn, y as isClient } from "./style-D4NTVD8o.js";
import { a as buildProps, h as isUndefined, n as useGetDerivedNamespace, o as definePropType, r as useNamespace } from "./use-namespace-BOyjzxct.js";
import { A as warning_filled_default, O as success_filled_default, S as loading_default, d as circle_check_default, f as circle_close_default, h as close_default, n as withInstall, p as circle_close_filled_default, t as _export_sfc, x as info_filled_default } from "./plugin-vue_export-helper-BwbYAlq0.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/vue/icon.mjs
var iconPropType = definePropType([
	String,
	Object,
	Function
]);
var CloseComponents = { Close: close_default };
var TypeComponents = {
	Close: close_default,
	SuccessFilled: success_filled_default,
	InfoFilled: info_filled_default,
	WarningFilled: warning_filled_default,
	CircleCloseFilled: circle_close_filled_default
};
var TypeComponentsMap = {
	success: success_filled_default,
	warning: warning_filled_default,
	error: circle_close_filled_default,
	info: info_filled_default
};
var ValidateComponentsMap = {
	validating: loading_default,
	success: circle_check_default,
	error: circle_close_default
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-deprecated/index.mjs
var useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
	watch(() => unref(condition), (val) => {
		if (val) debugWarn(scope, `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref}
`);
	}, { immediate: true });
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-id/index.mjs
var defaultIdInjection = {
	prefix: Math.floor(Math.random() * 1e4),
	current: 0
};
var ID_INJECTION_KEY = Symbol("elIdInjection");
var useIdInjection = () => {
	return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
var useId = (deterministicId) => {
	const idInjection = useIdInjection();
	if (!isClient && idInjection === defaultIdInjection) debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
	const namespace = useGetDerivedNamespace();
	return computed(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/icon/src/icon.mjs
var iconProps = buildProps({
	size: { type: definePropType([Number, String]) },
	color: { type: String }
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/icon/index.mjs
var ElIcon = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({
		name: "ElIcon",
		inheritAttrs: false
	}),
	props: iconProps,
	setup(__props) {
		const props = __props;
		const ns = useNamespace("icon");
		const style = computed(() => {
			const { size, color } = props;
			if (!size && !color) return {};
			return {
				fontSize: isUndefined(size) ? void 0 : addUnit(size),
				"--color": color
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("i", mergeProps({
				class: unref(ns).b(),
				style: unref(style)
			}, _ctx.$attrs), [renderSlot(_ctx.$slots, "default")], 16);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]));
//#endregion
export { CloseComponents as a, ValidateComponentsMap as c, useDeprecated as i, iconPropType as l, useId as n, TypeComponents as o, useIdInjection as r, TypeComponentsMap as s, ElIcon as t };
