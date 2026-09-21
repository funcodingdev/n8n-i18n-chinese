import { $ as openBlock, Gt as unref, N as defineComponent, U as mergeProps, bt as withCtx, ct as toHandlers, it as renderSlot, n as Transition, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { r as useNamespace } from "./use-namespace-xWWi2xIE.js";
import { t as _export_sfc } from "./plugin-vue_export-helper-AbXb0iQc.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/collapse-transition/src/collapse-transition.mjs
var CollapseTransition = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElCollapseTransition" }),
	setup(__props) {
		const ns = useNamespace("collapse-transition");
		const reset = (el) => {
			el.style.maxHeight = "";
			el.style.overflow = el.dataset.oldOverflow;
			el.style.paddingTop = el.dataset.oldPaddingTop;
			el.style.paddingBottom = el.dataset.oldPaddingBottom;
		};
		const on = {
			beforeEnter(el) {
				if (!el.dataset) el.dataset = {};
				el.dataset.oldPaddingTop = el.style.paddingTop;
				el.dataset.oldPaddingBottom = el.style.paddingBottom;
				el.style.maxHeight = 0;
				el.style.paddingTop = 0;
				el.style.paddingBottom = 0;
			},
			enter(el) {
				el.dataset.oldOverflow = el.style.overflow;
				if (el.scrollHeight !== 0) el.style.maxHeight = `${el.scrollHeight}px`;
				else el.style.maxHeight = 0;
				el.style.paddingTop = el.dataset.oldPaddingTop;
				el.style.paddingBottom = el.dataset.oldPaddingBottom;
				el.style.overflow = "hidden";
			},
			afterEnter(el) {
				el.style.maxHeight = "";
				el.style.overflow = el.dataset.oldOverflow;
			},
			enterCancelled(el) {
				reset(el);
			},
			beforeLeave(el) {
				if (!el.dataset) el.dataset = {};
				el.dataset.oldPaddingTop = el.style.paddingTop;
				el.dataset.oldPaddingBottom = el.style.paddingBottom;
				el.dataset.oldOverflow = el.style.overflow;
				el.style.maxHeight = `${el.scrollHeight}px`;
				el.style.overflow = "hidden";
			},
			leave(el) {
				if (el.scrollHeight !== 0) {
					el.style.maxHeight = 0;
					el.style.paddingTop = 0;
					el.style.paddingBottom = 0;
				}
			},
			afterLeave(el) {
				reset(el);
			},
			leaveCancelled(el) {
				reset(el);
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Transition, mergeProps({ name: unref(ns).b() }, toHandlers(on)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["name"]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/collapse-transition/index.mjs
CollapseTransition.install = (app) => {
	app.component(CollapseTransition.name, CollapseTransition);
};
var _CollapseTransition = CollapseTransition;
var ElCollapseTransition = _CollapseTransition;
//#endregion
export { _CollapseTransition as n, ElCollapseTransition as t };
