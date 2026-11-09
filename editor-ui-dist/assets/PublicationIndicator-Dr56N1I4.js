import { Af as init_reactivity_esm_bundler, Gd as createVNode, Kf as unref, Qd as init_runtime_core_esm_bundler, Tf as withCtx, Wd as createTextVNode, ep as init_shared_esm_bundler, nf as mergeProps, qd as defineComponent, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { OD as N8nTooltip_default, RD as _plugin_vue_export_helper_default, ZT as N8nStatusDot_default, xD as N8nBadge_default } from "./app-DbOOaPK6.js";
//#region src/app/components/PublicationIndicator.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var PublicationIndicator_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PublicationIndicator",
	props: {
		label: {},
		variant: { default: "success" },
		tooltip: { default: null }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.tooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: "top",
				"as-child": ""
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.tooltip), 1)]),
				default: withCtx(() => [createVNode(unref(N8nBadge_default), mergeProps(_ctx.$attrs, {
					class: _ctx.$style.indicator,
					tabindex: "0"
				}), {
					leading: withCtx(() => [createVNode(unref(N8nStatusDot_default), { variant: __props.variant }, null, 8, ["variant"])]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(__props.label), 1)]),
					_: 1
				}, 16, ["class"])]),
				_: 1
			})) : (openBlock(), createBlock(unref(N8nBadge_default), mergeProps({ key: 1 }, _ctx.$attrs, { class: _ctx.$style.indicator }), {
				leading: withCtx(() => [createVNode(unref(N8nStatusDot_default), { variant: __props.variant }, null, 8, ["variant"])]),
				default: withCtx(() => [createTextVNode(" " + toDisplayString(__props.label), 1)]),
				_: 1
			}, 16, ["class"]));
		};
	}
}), [["__cssModules", { "$style": { indicator: "_indicator_6a55n_3" } }]]);
//#endregion
export { PublicationIndicator_default as t };
