import { $ as openBlock, C as createBaseVNode, E as createElementBlock, N as defineComponent, S as computed, bn as normalizeStyle, ft as useSlots, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/TableBase/TableBase.vue?vue&type=script&setup=true&lang.ts
/** Must match the row styles below: td height (48px) + 1px border-bottom. */
var ROW_HEIGHT_PX = 49;
/** Must match the header styles below: th height (36px) + 1px border-bottom. */
var HEADER_HEIGHT_PX = 37;
var TableBase_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TableBase",
	props: { maxDisplayedRows: {} },
	setup(__props) {
		const props = __props;
		const slots = useSlots();
		const hasHeader = computed(() => (slots.default?.({}) ?? []).some((vnode) => vnode.type === "thead"));
		const scrollStyle = computed(() => {
			if (!props.maxDisplayedRows) return void 0;
			const headerHeight = hasHeader.value ? HEADER_HEIGHT_PX : 0;
			return { maxHeight: `${props.maxDisplayedRows * ROW_HEIGHT_PX + headerHeight}px` };
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.n8nTable) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.n8nTableScroll),
				style: normalizeStyle(scrollStyle.value),
				"data-test-id": "table-base-scroll"
			}, [createBaseVNode("table", null, [renderSlot(_ctx.$slots, "default")])], 6)], 2);
		};
	}
});
var TableBase_vue_vue_type_style_index_0_lang_module_default = {
	n8nTableScroll: "_n8nTableScroll_sxj77_125",
	n8nTable: "_n8nTable_sxj77_125"
};
//#endregion
//#region ../@n8n/design-system/src/components/TableBase/index.ts
var TableBase_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TableBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TableBase_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TableBase_default as t };
