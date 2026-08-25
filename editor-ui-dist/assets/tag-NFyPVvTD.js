import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bn as normalizeStyle, bt as withCtx, h as withModifiers, it as renderSlot, j as createVNode, n as Transition, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { a as buildProps, r as useNamespace } from "./use-namespace-BOyjzxct.js";
import { h as close_default, n as withInstall, t as _export_sfc } from "./plugin-vue_export-helper-BwbYAlq0.js";
import { t as ElIcon } from "./icon-a_YnoStc.js";
import { a as componentSizes } from "./use-size-DQ4TyUL1.js";
import { i as useFormSize } from "./use-form-item-BbslK5UJ.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tag/src/tag.mjs
var tagProps = buildProps({
	type: {
		type: String,
		values: [
			"success",
			"info",
			"warning",
			"danger",
			""
		],
		default: ""
	},
	closable: Boolean,
	disableTransitions: Boolean,
	hit: Boolean,
	color: {
		type: String,
		default: ""
	},
	size: {
		type: String,
		values: componentSizes,
		default: ""
	},
	effect: {
		type: String,
		values: [
			"dark",
			"light",
			"plain"
		],
		default: "light"
	},
	round: Boolean
});
var tagEmits = {
	close: (evt) => evt instanceof MouseEvent,
	click: (evt) => evt instanceof MouseEvent
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/tag/index.mjs
var ElTag = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElTag" }),
	props: tagProps,
	emits: tagEmits,
	setup(__props, { emit }) {
		const props = __props;
		const tagSize = useFormSize();
		const ns = useNamespace("tag");
		const containerKls = computed(() => {
			const { type, hit, effect, closable, round } = props;
			return [
				ns.b(),
				ns.is("closable", closable),
				ns.m(type),
				ns.m(tagSize.value),
				ns.m(effect),
				ns.is("hit", hit),
				ns.is("round", round)
			];
		});
		const handleClose = (event) => {
			emit("close", event);
		};
		const handleClick = (event) => {
			emit("click", event);
		};
		return (_ctx, _cache) => {
			return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(unref(containerKls)),
				style: normalizeStyle({ backgroundColor: _ctx.color }),
				onClick: handleClick
			}, [createBaseVNode("span", { class: normalizeClass(unref(ns).e("content")) }, [renderSlot(_ctx.$slots, "default")], 2), _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
				key: 0,
				class: normalizeClass(unref(ns).e("close")),
				onClick: withModifiers(handleClose, ["stop"])
			}, {
				default: withCtx(() => [createVNode(unref(close_default))]),
				_: 1
			}, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)], 6)) : (openBlock(), createBlock(Transition, {
				key: 1,
				name: `${unref(ns).namespace.value}-zoom-in-center`,
				appear: ""
			}, {
				default: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(unref(containerKls)),
					style: normalizeStyle({ backgroundColor: _ctx.color }),
					onClick: handleClick
				}, [createBaseVNode("span", { class: normalizeClass(unref(ns).e("content")) }, [renderSlot(_ctx.$slots, "default")], 2), _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
					key: 0,
					class: normalizeClass(unref(ns).e("close")),
					onClick: withModifiers(handleClose, ["stop"])
				}, {
					default: withCtx(() => [createVNode(unref(close_default))]),
					_: 1
				}, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)], 6)]),
				_: 3
			}, 8, ["name"]));
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));
//#endregion
export { tagProps as n, ElTag as t };
