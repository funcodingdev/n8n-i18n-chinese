import { $ as openBlock, N as defineComponent, S as computed, U as mergeProps, bt as withCtx, c as useCssModule, it as renderSlot, st as resolveDynamicComponent, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nText/Text.vue?vue&type=script&setup=true&lang.ts
var Text_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nText",
	__name: "Text",
	props: {
		bold: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" },
		step: {},
		color: {},
		align: {},
		compact: {
			type: Boolean,
			default: false
		},
		tag: { default: "span" }
	},
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => {
			const applied = [];
			if (props.align) applied.push(`align-${props.align}`);
			if (props.color) applied.push(props.color);
			if (props.compact) applied.push("compact");
			if (props.step) applied.push(`step-${props.step}`);
			else applied.push(`size-${props.size}`);
			applied.push(props.bold ? "bold" : "regular");
			return applied.map((c) => $style[c]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({ class: ["n8n-text", ...classes.value] }, _ctx.$attrs), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nText/Text.vue?vue&type=style&index=0&lang.module.scss
var bold = "_bold_ssy63_125";
var regular = "_regular_ssy63_129";
var compact = "_compact_ssy63_212";
var primary = "_primary_ssy63_216";
var secondary = "_secondary_ssy63_220";
var danger = "_danger_ssy63_240";
var success = "_success_ssy63_244";
var warning = "_warning_ssy63_248";
var Text_vue_vue_type_style_index_0_lang_module_default = {
	bold,
	regular,
	"size-xlarge": "_size-xlarge_ssy63_133",
	"size-large": "_size-large_ssy63_138",
	"size-medium": "_size-medium_ssy63_143",
	"size-small": "_size-small_ssy63_148",
	"size-xsmall": "_size-xsmall_ssy63_153",
	"step-4xs": "_step-4xs_ssy63_158",
	"step-3xs": "_step-3xs_ssy63_164",
	"step-2xs": "_step-2xs_ssy63_170",
	"step-xs": "_step-xs_ssy63_176",
	"step-sm": "_step-sm_ssy63_182",
	"step-md": "_step-md_ssy63_188",
	"step-lg": "_step-lg_ssy63_194",
	"step-xl": "_step-xl_ssy63_200",
	"step-2xl": "_step-2xl_ssy63_206",
	compact,
	primary,
	secondary,
	"text-dark": "_text-dark_ssy63_224",
	"text-base": "_text-base_ssy63_228",
	"text-light": "_text-light_ssy63_232",
	"text-xlight": "_text-xlight_ssy63_236",
	danger,
	success,
	warning,
	"foreground-dark": "_foreground-dark_ssy63_252",
	"foreground-xdark": "_foreground-xdark_ssy63_256",
	"align-left": "_align-left_ssy63_260",
	"align-right": "_align-right_ssy63_264",
	"align-center": "_align-center_ssy63_268"
};
var Text_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Text_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Text_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nText/index.ts
var N8nText_default = Text_default;
//#endregion
export { Text_default as n, N8nText_default as t };
