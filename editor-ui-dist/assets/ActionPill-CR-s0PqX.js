import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, It as ref, N as defineComponent, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nActionPill/ActionPill.vue?vue&type=script&setup=true&lang.ts
var ActionPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nActionPill",
	__name: "ActionPill",
	props: {
		text: { default: void 0 },
		hoverText: { default: void 0 },
		clickable: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" },
		type: { default: "default" }
	},
	emits: ["click"],
	setup(__props) {
		/**
		* A small pill-shaped label that can optionally act as a button.
		* Use for inline status indicators, counts, or any short contextual label
		*/
		const hovered = ref(false);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass([
					_ctx.$style.root,
					__props.size === "small" && _ctx.$style.small,
					__props.type === "danger" && _ctx.$style.danger,
					__props.type === "info" && _ctx.$style.info,
					__props.clickable && _ctx.$style.clickable,
					__props.hoverText && hovered.value && _ctx.$style.pressed
				]),
				onMouseenter: _cache[0] || (_cache[0] = ($event) => __props.hoverText && (hovered.value = true)),
				onMouseleave: _cache[1] || (_cache[1] = ($event) => __props.hoverText && (hovered.value = false)),
				onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("click", $event))
			}, [__props.hoverText ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.labelGrid)
			}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.label, hovered.value && _ctx.$style.labelHidden]) }, [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.text), 1)])], 2), createBaseVNode("span", { class: normalizeClass([_ctx.$style.label, !hovered.value && _ctx.$style.labelHidden]) }, toDisplayString(__props.hoverText), 3)], 2)) : renderSlot(_ctx.$slots, "default", { key: 1 }, () => [createTextVNode(toDisplayString(__props.text), 1)])], 34);
		};
	}
});
var ActionPill_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1dyuh_125",
	small: "_small_1dyuh_141",
	danger: "_danger_1dyuh_146",
	clickable: "_clickable_1dyuh_150",
	info: "_info_1dyuh_155",
	pressed: "_pressed_1dyuh_173",
	labelGrid: "_labelGrid_1dyuh_178",
	label: "_label_1dyuh_178",
	labelHidden: "_labelHidden_1dyuh_188"
};
var ActionPill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ActionPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionPill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ActionPill_default as t };
