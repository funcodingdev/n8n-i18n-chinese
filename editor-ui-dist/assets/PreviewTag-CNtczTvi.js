import { $ as openBlock, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-CBepoSka.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/PreviewTag/PreviewTag.vue?vue&type=script&setup=true&lang.ts
var PreviewTag_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PreviewTag",
	props: {
		size: { default: "small" },
		text: { default: void 0 }
	},
	setup(__props) {
		const { t } = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.preview, _ctx.$style[__props.size]]) }, toDisplayString(__props.text ?? unref(t)("previewTag.preview")), 3);
		};
	}
});
var PreviewTag_vue_vue_type_style_index_0_lang_module_default = {
	preview: "_preview_19yxk_125",
	small: "_small_19yxk_133",
	medium: "_medium_19yxk_138"
};
var PreviewTag_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PreviewTag_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PreviewTag_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PreviewTag_default as t };
