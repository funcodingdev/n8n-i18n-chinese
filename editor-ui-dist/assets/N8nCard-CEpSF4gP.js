import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, c as useCssModule, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nCard/Card.vue?vue&type=script&setup=true&lang.ts
var Card_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nCard",
	__name: "Card",
	props: { hoverable: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => ({
			card: true,
			[$style.card]: true,
			[$style.hoverable]: props.hoverable
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: classes.value }, _ctx.$attrs), [
				_ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "card-prepend",
					class: normalizeClass(unref($style).icon)
				}, [renderSlot(_ctx.$slots, "prepend")], 2)) : createCommentVNode("", true),
				createBaseVNode("div", {
					class: normalizeClass(unref($style).content),
					"data-test-id": "card-content"
				}, [
					_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(unref($style).header)
					}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true),
					_ctx.$slots.default ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(unref($style).body)
					}, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("", true),
					_ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(unref($style).footer)
					}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)
				], 2),
				_ctx.$slots.append ? (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "card-append",
					class: normalizeClass([unref($style).append, "n8n-card-append"])
				}, [renderSlot(_ctx.$slots, "append")], 2)) : createCommentVNode("", true)
			], 16);
		};
	}
});
var Card_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_o9zts_125",
	header: "_header_o9zts_136",
	footer: "_footer_o9zts_137",
	content: "_content_o9zts_144",
	body: "_body_o9zts_152",
	icon: "_icon_o9zts_161",
	hoverable: "_hoverable_o9zts_169",
	append: "_append_o9zts_180"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nCard/index.ts
var N8nCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Card_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Card_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nCard_default as t };
