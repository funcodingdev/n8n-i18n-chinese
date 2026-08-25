import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
//#region ../@n8n/design-system/src/components/N8nSpinner/Spinner.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "n8n-spinner" };
var _hoisted_2 = {
	key: 0,
	class: "lds-ring"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nSpinner/index.ts
var N8nSpinner_default = /* @__PURE__ */ defineComponent({
	name: "N8nSpinner",
	__name: "Spinner",
	props: {
		size: { default: "medium" },
		type: { default: "dots" }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", _hoisted_1, [__props.type === "ring" ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1),
				createBaseVNode("div", null, null, -1)
			])])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "spinner",
				size: __props.size,
				spin: ""
			}, null, 8, ["size"]))]);
		};
	}
});
//#endregion
export { N8nSpinner_default as t };
