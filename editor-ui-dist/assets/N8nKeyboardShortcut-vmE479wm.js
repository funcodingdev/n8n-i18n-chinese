import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, N as defineComponent, S as computed, _ as Fragment, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as useDeviceSupport } from "./useDeviceSupport-BhC254gi.js";
//#region ../@n8n/design-system/src/components/N8nKeyboardShortcut/N8nKeyboardShortcut.vue?vue&type=script&setup=true&lang.ts
var N8nKeyboardShortcut_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nKeyboardShortcut",
	props: {
		metaKey: { type: Boolean },
		altKey: { type: Boolean },
		shiftKey: { type: Boolean },
		keys: {}
	},
	setup(__props) {
		const props = __props;
		const { isMacOs, controlKeyText } = useDeviceSupport();
		const keys = computed(() => {
			const allKeys = [];
			if (props.metaKey) allKeys.push(controlKeyText.value);
			if (props.shiftKey) allKeys.push("⇧");
			if (props.altKey) allKeys.push(isMacOs ? "⌥" : "Alt");
			allKeys.push(...props.keys.map((key) => key.charAt(0).toUpperCase() + key.slice(1)));
			return allKeys;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.shortcut) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(keys.value, (key) => {
				return openBlock(), createElementBlock("div", {
					key,
					class: normalizeClass(_ctx.$style.keyWrapper)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.key) }, toDisplayString(key), 3)], 2);
			}), 128))], 2);
		};
	}
});
var N8nKeyboardShortcut_vue_vue_type_style_index_0_lang_module_default = {
	shortcut: "_shortcut_1yl0p_125",
	keyWrapper: "_keyWrapper_1yl0p_131",
	key: "_key_1yl0p_131"
};
var N8nKeyboardShortcut_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nKeyboardShortcut_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nKeyboardShortcut_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nKeyboardShortcut_default as t };
