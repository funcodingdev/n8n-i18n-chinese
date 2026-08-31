import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
//#region ../@n8n/design-system/src/components/N8nCallout/Callout.vue?vue&type=script&setup=true&lang.ts
var Callout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nCallout",
	__name: "Callout",
	props: {
		theme: {},
		icon: {},
		iconTooltip: { default: void 0 },
		iconSize: { default: "medium" },
		iconless: { type: Boolean },
		slim: { type: Boolean },
		roundCorners: {
			type: Boolean,
			default: true
		},
		onlyBottomBorder: { type: Boolean }
	},
	setup(__props) {
		const CALLOUT_DEFAULT_ICONS = {
			info: "info",
			success: "circle-check",
			warning: "triangle-alert",
			danger: "triangle-alert"
		};
		const props = __props;
		const $style = useCssModule();
		const classes = computed(() => [
			"n8n-callout",
			$style.callout,
			$style[props.theme],
			props.slim ? $style.slim : "",
			props.roundCorners ? $style.round : "",
			props.onlyBottomBorder ? $style.onlyBottomBorder : ""
		]);
		const getIcon = computed(() => props.icon ?? CALLOUT_DEFAULT_ICONS?.[props.theme] ?? CALLOUT_DEFAULT_ICONS.info);
		const getIconSize = computed(() => {
			if (props.iconSize) return props.iconSize;
			if (props.theme === "secondary") return "medium";
			return "large";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(classes.value),
				role: "alert"
			}, [createBaseVNode("div", { class: normalizeClass(unref($style).messageSection) }, [
				!__props.iconless ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref($style).icon)
				}, [__props.iconTooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: __props.iconTooltip
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: getIcon.value,
						size: getIconSize.value
					}, null, 8, ["icon", "size"])]),
					_: 1
				}, 8, ["content"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: getIcon.value,
					size: getIconSize.value
				}, null, 8, ["icon", "size"]))], 2)) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}),
				_cache[0] || (_cache[0] = createTextVNode(" \xA0 ", -1)),
				renderSlot(_ctx.$slots, "actions")
			], 2), renderSlot(_ctx.$slots, "trailingContent")], 2);
		};
	}
});
var Callout_vue_vue_type_style_index_0_lang_module_default = {
	callout: "_callout_i8e16_125",
	slim: "_slim_i8e16_137",
	round: "_round_i8e16_152",
	onlyBottomBorder: "_onlyBottomBorder_i8e16_156",
	messageSection: "_messageSection_i8e16_162",
	info: "_info_i8e16_167",
	custom: "_custom_i8e16_168",
	icon: "_icon_i8e16_173",
	success: "_success_i8e16_178",
	warning: "_warning_i8e16_187",
	danger: "_danger_i8e16_196",
	secondary: "_secondary_i8e16_210"
};
var Callout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Callout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Callout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nCallout/index.ts
var N8nCallout_default = Callout_default;
//#endregion
export { Callout_default as n, N8nCallout_default as t };
