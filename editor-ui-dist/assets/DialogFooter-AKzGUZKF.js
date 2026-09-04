import { $ as openBlock, E as createElementBlock, N as defineComponent, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nDialog/DialogFooter.vue?vue&type=script&setup=true&lang.ts
var DialogFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DialogFooter",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("footer", { class: normalizeClass(_ctx.$style.footer) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var DialogFooter_vue_vue_type_style_index_0_lang_module_default = { footer: "_footer_wiyfb_2" };
var DialogFooter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DialogFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DialogFooter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DialogFooter_default as t };
