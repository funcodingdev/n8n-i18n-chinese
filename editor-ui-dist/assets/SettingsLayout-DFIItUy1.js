import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, bt as withCtx, it as renderSlot, j as createVNode, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
//#region ../@n8n/design-system/src/components/N8nSettingsLayout/SettingsLayout.vue?vue&type=script&setup=true&lang.ts
var SettingsLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsLayout",
	__name: "SettingsLayout",
	props: {
		tag: { default: "div" },
		showBack: {
			type: Boolean,
			default: false
		},
		backLabel: { default: "Back" },
		fullWidth: {
			type: Boolean,
			default: false
		}
	},
	emits: ["back"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), { class: normalizeClass(_ctx.$style.layout) }, {
				default: withCtx(() => [__props.showBack || _ctx.$slots.back ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.backRow)
				}, [renderSlot(_ctx.$slots, "back", {}, () => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					class: normalizeClass(_ctx.$style.backButton),
					"data-test-id": "settings-back-button",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("back"))
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "arrow-left" })]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(__props.backLabel), 1)]),
					_: 1
				}, 8, ["class"])])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.fullWidth]: __props.fullWidth }]) }, [renderSlot(_ctx.$slots, "default")], 2)]),
				_: 3
			}, 8, ["class"]);
		};
	}
});
var SettingsLayout_vue_vue_type_style_index_0_lang_module_default = {
	layout: "_layout_dt33d_126",
	backRow: "_backRow_dt33d_138",
	backButton: "_backButton_dt33d_143",
	content: "_content_dt33d_148",
	fullWidth: "_fullWidth_dt33d_182"
};
var SettingsLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsLayout_default as t };
