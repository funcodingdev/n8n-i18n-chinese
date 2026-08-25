import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
//#region ../@n8n/design-system/src/components/N8nInfoTip/InfoTip.vue?vue&type=script&setup=true&lang.ts
var InfoTip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nInfoTip",
	__name: "InfoTip",
	props: {
		theme: { default: "info" },
		type: { default: "note" },
		bold: {
			type: Boolean,
			default: true
		},
		tooltipPlacement: { default: "top" },
		enterable: {
			type: Boolean,
			default: true
		},
		size: { default: void 0 }
	},
	setup(__props) {
		const ICON_MAP = {
			info: "info",
			"info-light": "info",
			warning: "triangle-alert",
			"warning-light": "triangle",
			danger: "triangle-alert",
			success: "circle-check"
		};
		const COLOR_MAP = {
			info: "text-base",
			"info-light": "text-base",
			warning: "warning",
			"warning-light": "warning",
			danger: "danger",
			success: "success"
		};
		const props = __props;
		const iconData = computed(() => {
			return {
				icon: ICON_MAP[props.theme],
				color: COLOR_MAP[props.theme]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				"n8n-info-tip": true,
				[_ctx.$style.infoTip]: true,
				[_ctx.$style[__props.theme]]: true,
				[_ctx.$style[__props.type]]: true,
				[_ctx.$style.bold]: __props.bold
			}) }, [__props.type === "tooltip" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: __props.tooltipPlacement,
				"content-class": _ctx.$style.tooltipContent,
				disabled: __props.type !== "tooltip",
				enterable: __props.enterable
			}, {
				content: withCtx(() => [createBaseVNode("span", null, [renderSlot(_ctx.$slots, "default")])]),
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconText) }, [createVNode(unref(N8nIcon_default), {
					icon: iconData.value.icon,
					color: iconData.value.color,
					size: __props.size
				}, null, 8, [
					"icon",
					"color",
					"size"
				])], 2)]),
				_: 3
			}, 8, [
				"placement",
				"content-class",
				"disabled",
				"enterable"
			])) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.iconText)
			}, [createVNode(unref(N8nIcon_default), {
				icon: iconData.value.icon,
				color: iconData.value.color,
				size: __props.size
			}, null, 8, [
				"icon",
				"color",
				"size"
			]), createBaseVNode("span", null, [renderSlot(_ctx.$slots, "default")])], 2))], 2);
		};
	}
});
var InfoTip_vue_vue_type_style_index_0_lang_module_default = {
	infoTip: "_infoTip_1jo3f_125",
	base: "_base_1jo3f_129",
	bold: "_bold_1jo3f_140",
	note: "_note_1jo3f_144 _base_1jo3f_129",
	tooltipContent: "_tooltipContent_1jo3f_151 _base_1jo3f_129",
	iconText: "_iconText_1jo3f_156"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nInfoTip/index.ts
var N8nInfoTip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InfoTip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InfoTip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nInfoTip_default as t };
