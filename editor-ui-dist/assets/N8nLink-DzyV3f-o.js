import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, U as mergeProps, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as RouterLink } from "./vue-router-Dl3cOHxO.js";
//#region ../@n8n/design-system/src/components/N8nRoute/Route.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"href",
	"target",
	"title",
	"data-test-id"
];
//#endregion
//#region ../@n8n/design-system/src/components/N8nRoute/index.ts
var N8nRoute_default = /* @__PURE__ */ defineComponent({
	name: "N8nRoute",
	__name: "Route",
	props: {
		to: {},
		newWindow: { type: Boolean },
		title: {},
		dataTestId: {}
	},
	setup(__props) {
		const props = __props;
		const useRouterLink = computed(() => {
			if (props.newWindow) return false;
			if (typeof props.to === "string") return props.to.startsWith("/");
			return props.to !== void 0;
		});
		const openNewWindow = computed(() => !useRouterLink.value);
		return (_ctx, _cache) => {
			return useRouterLink.value && __props.to ? (openBlock(), createBlock(unref(RouterLink), mergeProps({
				key: 0,
				to: __props.to,
				role: "link"
			}, _ctx.$attrs, { "data-test-id": __props.dataTestId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["to", "data-test-id"])) : (openBlock(), createElementBlock("a", mergeProps({
				key: 1,
				href: __props.to ? `${__props.to}` : void 0,
				target: openNewWindow.value ? "_blank" : "_self"
			}, _ctx.$attrs, {
				title: __props.title,
				"data-test-id": __props.dataTestId
			}), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1));
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nLink/Link.vue?vue&type=script&setup=true&lang.ts
var Link_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nLink",
	__name: "Link",
	props: {
		to: { default: void 0 },
		size: { default: void 0 },
		newWindow: { type: Boolean },
		bold: {
			type: Boolean,
			default: false
		},
		underline: {
			type: Boolean,
			default: false
		},
		theme: { default: "primary" },
		title: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nRoute_default), mergeProps({
				to: __props.to,
				title: __props.title,
				"new-window": __props.newWindow
			}, _ctx.$attrs, { class: "n8n-link" }), {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style[`${__props.underline ? `${__props.theme}-underline` : __props.theme}`]) }, [createVNode(unref(N8nText_default), {
					size: __props.size,
					bold: __props.bold
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, ["size", "bold"])], 2)]),
				_: 3
			}, 16, [
				"to",
				"title",
				"new-window"
			]);
		};
	}
});
var Link_vue_vue_type_style_index_0_lang_module_default = {
	primary: "_primary_k9aq4_125",
	text: "_text_k9aq4_132",
	danger: "_danger_k9aq4_142",
	secondary: "_secondary_k9aq4_149",
	"primary-underline": "_primary-underline_k9aq4_156 _primary_k9aq4_125",
	"text-underline": "_text-underline_k9aq4_161 _text_k9aq4_132",
	"danger-underline": "_danger-underline_k9aq4_166 _danger_k9aq4_142",
	"secondary-underline": "_secondary-underline_k9aq4_171 _secondary_k9aq4_149"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nLink/index.ts
var N8nLink_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Link_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Link_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nRoute_default as n, N8nLink_default as t };
