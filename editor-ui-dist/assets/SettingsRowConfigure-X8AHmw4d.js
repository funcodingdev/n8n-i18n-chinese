import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, bt as withCtx, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
//#region ../@n8n/design-system/src/components/N8nSettingsRowConfigure/SettingsRowConfigure.vue?vue&type=script&setup=true&lang.ts
var SettingsRowConfigure_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsRowConfigure",
	__name: "SettingsRowConfigure",
	props: { value: { default: "Configure" } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(_ctx.$style.configure),
				"data-test-id": "settings-row-configure"
			}, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.value),
				size: "small",
				color: "text-dark"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.value), 1)]),
				_: 1
			}, 8, ["class"]), createVNode(unref(N8nIcon_default), {
				class: normalizeClass(_ctx.$style.chevron),
				icon: "chevron-right",
				size: "small"
			}, null, 8, ["class"])], 2);
		};
	}
});
var SettingsRowConfigure_vue_vue_type_style_index_0_lang_module_default = {
	configure: "_configure_gn9rc_125",
	value: "_value_gn9rc_132",
	chevron: "_chevron_gn9rc_139"
};
var SettingsRowConfigure_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsRowConfigure_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsRowConfigure_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsRowConfigure_default as t };
