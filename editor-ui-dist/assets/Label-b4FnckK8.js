import { $ as openBlock, Gt as unref, N as defineComponent, U as mergeProps, bt as withCtx, it as renderSlot, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as useForwardExpose, n as Primitive } from "./VisuallyHidden-lv4qVqRn.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Label/Label.js
var Label_default = /* @__PURE__ */ defineComponent({
	__name: "Label",
	props: {
		for: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "label"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { onMousedown: _cache[0] || (_cache[0] = (event) => {
				if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
			}) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
export { Label_default as t };
