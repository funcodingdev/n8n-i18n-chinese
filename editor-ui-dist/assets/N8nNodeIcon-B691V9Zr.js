import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bn as normalizeStyle, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { i as isSupportedIconName } from "./Icon-D-jZgYpP.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
//#region ../@n8n/design-system/src/components/N8nNodeIcon/IconContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["src"];
var IconContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "IconContent",
	props: {
		type: {},
		src: {},
		name: {},
		nodeTypeName: {},
		size: {},
		badge: {}
	},
	setup(__props) {
		const props = __props;
		const badgeSize = computed(() => {
			switch (props.size) {
				case 40: return 18;
				case 24: return 10;
				default: return 12;
			}
		});
		const fontStyleData = computed(() => {
			if (!props.size) return {};
			return { "max-width": `${props.size}px` };
		});
		const badgeStyleData = computed(() => {
			const size = badgeSize.value;
			return {
				padding: `${Math.floor(size / 4)}px`,
				right: `-${Math.floor(size / 2)}px`,
				bottom: `-${Math.floor(size / 2)}px`
			};
		});
		const supportedIconName = computed(() => {
			return isSupportedIconName(props.name) ? props.name : void 0;
		});
		return (_ctx, _cache) => {
			return __props.type !== "unknown" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.icon)
			}, [__props.type === "file" ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: __props.src,
				referrerpolicy: "no-referrer",
				class: normalizeClass(_ctx.$style.nodeIconImage)
			}, null, 10, _hoisted_1)) : supportedIconName.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: supportedIconName.value,
				style: normalizeStyle(fontStyleData.value)
			}, null, 8, ["icon", "style"])) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.nodeIconPlaceholder)
			}, toDisplayString(__props.nodeTypeName ? __props.nodeTypeName.charAt(0) : "?"), 3)), __props.badge ? (openBlock(), createElementBlock("div", {
				key: 3,
				class: normalizeClass(_ctx.$style.badge),
				style: normalizeStyle(badgeStyleData.value)
			}, [__props.badge.tooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: "top"
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.badge.tooltip), 1)]),
				default: withCtx(() => [createVNode(unref(N8nNodeIcon_default), {
					type: __props.badge.type,
					src: __props.badge.src,
					name: __props.badge.name,
					size: badgeSize.value
				}, null, 8, [
					"type",
					"src",
					"name",
					"size"
				])]),
				_: 1
			})) : (openBlock(), createBlock(unref(N8nNodeIcon_default), {
				key: 1,
				type: __props.badge.type,
				src: __props.badge.src,
				name: __props.badge.name,
				size: badgeSize.value
			}, null, 8, [
				"type",
				"src",
				"name",
				"size"
			]))], 6)) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.nodeIconPlaceholder)
			}, toDisplayString(__props.nodeTypeName ? __props.nodeTypeName.charAt(0) : "?"), 3));
		};
	}
});
var IconContent_vue_vue_type_style_index_0_lang_module_default = {
	icon: "_icon_vxrp8_125",
	nodeIconPlaceholder: "_nodeIconPlaceholder_vxrp8_142",
	nodeIconImage: "_nodeIconImage_vxrp8_146",
	badge: "_badge_vxrp8_153"
};
var IconContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(IconContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": IconContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nNodeIcon/NodeIcon.vue?vue&type=script&setup=true&lang.ts
var NodeIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeIcon",
	props: {
		type: {},
		src: {},
		name: {},
		nodeTypeName: {},
		size: {},
		disabled: { type: Boolean },
		circle: { type: Boolean },
		color: {},
		showTooltip: { type: Boolean },
		tooltipPosition: { default: "top" },
		badge: {}
	},
	setup(__props) {
		const props = __props;
		const iconStyleData = computed(() => {
			if (!props.size) return { color: props.color || "" };
			return {
				color: props.color || "",
				width: `${props.size}px`,
				height: `${props.size}px`,
				"font-size": `${props.size}px`,
				"line-height": `${props.size}px`
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: "n8n-node-icon" }, _ctx.$attrs), [createBaseVNode("div", {
				class: normalizeClass({
					[_ctx.$style.nodeIconWrapper]: true,
					[_ctx.$style.circle]: __props.circle,
					[_ctx.$style.disabled]: __props.disabled
				}),
				style: normalizeStyle(iconStyleData.value)
			}, [__props.showTooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				placement: __props.tooltipPosition,
				disabled: !__props.showTooltip
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.nodeTypeName), 1)]),
				default: withCtx(() => [createVNode(IconContent_default, {
					type: __props.type,
					src: __props.src,
					name: __props.name,
					"node-type-name": __props.nodeTypeName,
					size: __props.size,
					badge: __props.badge
				}, null, 8, [
					"type",
					"src",
					"name",
					"node-type-name",
					"size",
					"badge"
				])]),
				_: 1
			}, 8, ["placement", "disabled"])) : (openBlock(), createBlock(IconContent_default, {
				key: 1,
				type: __props.type,
				src: __props.src,
				name: __props.name,
				"node-type-name": __props.nodeTypeName,
				size: __props.size,
				badge: __props.badge
			}, null, 8, [
				"type",
				"src",
				"name",
				"node-type-name",
				"size",
				"badge"
			]))], 6)], 16);
		};
	}
});
var NodeIcon_vue_vue_type_style_index_0_lang_module_default = {
	nodeIconWrapper: "_nodeIconWrapper_mwfbl_125",
	circle: "_circle_mwfbl_137",
	disabled: "_disabled_mwfbl_141"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nNodeIcon/index.ts
var N8nNodeIcon_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeIcon_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nNodeIcon_default as t };
