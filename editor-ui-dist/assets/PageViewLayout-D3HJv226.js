import { $ as openBlock, C as createBaseVNode, E as createElementBlock, N as defineComponent, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/app/components/layouts/PageViewLayout.vue?vue&type=script&setup=true&lang.ts
var PageViewLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
});
var PageViewLayout_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_8iay6_125",
	fullWidth: "_fullWidth_8iay6_141",
	content: "_content_8iay6_146"
};
var PageViewLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PageViewLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PageViewLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PageViewLayout_default as t };
