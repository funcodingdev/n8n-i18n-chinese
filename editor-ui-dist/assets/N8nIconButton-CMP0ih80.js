import { $ as openBlock, F as guardReactiveProps, Gt as unref, N as defineComponent, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconButton/IconButton.vue
var IconButton_default = /* @__PURE__ */ defineComponent({
	name: "N8nIconButton",
	__name: "IconButton",
	props: {
		icon: {},
		variant: {},
		size: { default: "medium" },
		href: {},
		loading: {
			type: Boolean,
			default: false
		},
		iconOnly: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		class: { type: [
			Array,
			Object,
			String,
			Number,
			null,
			Boolean
		] },
		iconSize: {},
		label: {}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nButton_default), normalizeProps(guardReactiveProps({
				..._ctx.$attrs,
				...props
			})), null, 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nIconButton/index.ts
var N8nIconButton_default = IconButton_default;
//#endregion
export { IconButton_default as n, N8nIconButton_default as t };
