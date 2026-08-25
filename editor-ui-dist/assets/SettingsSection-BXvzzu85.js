import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, ft as useSlots, it as renderSlot, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nHeading_default } from "./N8nHeading-BWV9gsOh.js";
//#region ../@n8n/design-system/src/components/N8nSettingsSection/SettingsSection.vue?vue&type=script&setup=true&lang.ts
var SettingsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nSettingsSection",
	__name: "SettingsSection",
	props: {
		title: { default: void 0 },
		description: { default: void 0 },
		headingTag: { default: "h2" }
	},
	setup(__props) {
		const props = __props;
		const slots = useSlots();
		const hasHeader = computed(() => Boolean(props.title || props.description || slots.title || slots.description));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", { class: normalizeClass(_ctx.$style.section) }, [hasHeader.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [renderSlot(_ctx.$slots, "title", {}, () => [__props.title ? (openBlock(), createBlock(unref(N8nHeading_default), {
				key: 0,
				tag: __props.headingTag,
				step: "md",
				color: "text-dark"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
				_: 1
			}, 8, ["tag"])) : createCommentVNode("", true)]), renderSlot(_ctx.$slots, "description", {}, () => [__props.description ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
				_: 1
			})) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.groups) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
});
var SettingsSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_1m5j2_126",
	header: "_header_1m5j2_143",
	groups: "_groups_1m5j2_149"
};
var SettingsSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsSection_default as t };
