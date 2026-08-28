import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, Gt as unref, N as defineComponent, U as mergeProps, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { n as paginationProps, t as ElPagination } from "./pagination--rQelWsx.js";
//#endregion
//#region ../@n8n/design-system/src/components/N8nPagination/index.ts
var N8nPagination_default = /* @__PURE__ */ defineComponent({
	__name: "Pagination",
	props: { ...paginationProps },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElPagination), mergeProps({
				class: "is-background",
				layout: "prev, pager, next"
			}, {
				..._ctx.$props,
				..._ctx.$attrs
			}), null, 16);
		};
	}
});
//#endregion
export { N8nPagination_default as t };
