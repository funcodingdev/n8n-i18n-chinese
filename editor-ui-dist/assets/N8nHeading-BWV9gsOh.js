import { $ as openBlock, N as defineComponent, S as computed, U as mergeProps, bt as withCtx, c as useCssModule, it as renderSlot, st as resolveDynamicComponent, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/N8nHeading/Heading.vue?vue&type=script&setup=true&lang.ts
var Heading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nHeading",
	__name: "Heading",
	props: {
		tag: { default: "span" },
		bold: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" },
		step: {},
		color: {},
		align: {}
	},
	setup(__props) {
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => {
			const applied = [];
			if (props.align) applied.push(`align-${props.align}`);
			if (props.color) applied.push(props.color);
			if (props.step) applied.push(`step-${props.step}`);
			else applied.push(`size-${props.size}`);
			applied.push(props.bold ? "bold" : "regular");
			return applied.map((c) => $style[c]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.tag), mergeProps({ class: ["n8n-heading", ...classes.value] }, _ctx.$attrs), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nHeading/Heading.vue?vue&type=style&index=0&lang.module.scss
var bold = "_bold_8kitt_125";
var regular = "_regular_8kitt_129";
var primary = "_primary_8kitt_212";
var danger = "_danger_8kitt_232";
var Heading_vue_vue_type_style_index_0_lang_module_default = {
	bold,
	regular,
	"size-2xlarge": "_size-2xlarge_8kitt_133",
	"size-xlarge": "_size-xlarge_8kitt_138",
	"size-large": "_size-large_8kitt_143",
	"size-medium": "_size-medium_8kitt_148",
	"size-small": "_size-small_8kitt_153",
	"step-4xs": "_step-4xs_8kitt_158",
	"step-3xs": "_step-3xs_8kitt_164",
	"step-2xs": "_step-2xs_8kitt_170",
	"step-xs": "_step-xs_8kitt_176",
	"step-sm": "_step-sm_8kitt_182",
	"step-md": "_step-md_8kitt_188",
	"step-lg": "_step-lg_8kitt_194",
	"step-xl": "_step-xl_8kitt_200",
	"step-2xl": "_step-2xl_8kitt_206",
	primary,
	"text-dark": "_text-dark_8kitt_216",
	"text-base": "_text-base_8kitt_220",
	"text-light": "_text-light_8kitt_224",
	"text-xlight": "_text-xlight_8kitt_228",
	danger,
	"align-left": "_align-left_8kitt_236",
	"align-right": "_align-right_8kitt_240",
	"align-center": "_align-center_8kitt_244"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nHeading/index.ts
var N8nHeading_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Heading_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Heading_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nHeading_default as t };
