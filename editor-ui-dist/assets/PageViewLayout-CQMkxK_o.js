import { $d as init_runtime_core_esm_bundler, Hd as createElementBlock, Jd as defineComponent, df as openBlock, hp as normalizeClass, mf as renderSlot, np as init_shared_esm_bundler, zd as createBaseVNode } from "./vendor-AGzaQJYe.js";
import { HO as _plugin_vue_export_helper_default } from "./app-MbtXRI_F.js";
//#region src/app/components/layouts/PageViewLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
var PageViewLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PageViewLayout",
	props: { fullWidth: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.wrapper, __props.fullWidth ? _ctx.$style.fullWidth : ""]) }, [renderSlot(_ctx.$slots, "header"), createBaseVNode("main", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	wrapper: "_wrapper_172vb_113",
	fullWidth: "_fullWidth_172vb_129",
	content: "_content_172vb_134"
} }]]);
//#endregion
export { PageViewLayout_default as t };
