import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, U as mergeProps, Vt as toRef, X as onMounted, _ as Fragment, gt as watch, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { a as buildProps, r as useNamespace } from "./use-namespace-xWWi2xIE.js";
import { T as picture_filled_default, i as withNoopInstall, n as withInstall, t as _export_sfc } from "./plugin-vue_export-helper-AbXb0iQc.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-throttle-render/index.mjs
var useThrottleRender = (loading, throttle = 0) => {
	if (throttle === 0) return loading;
	const throttled = ref(false);
	let timeoutHandle = 0;
	const dispatchThrottling = () => {
		if (timeoutHandle) clearTimeout(timeoutHandle);
		timeoutHandle = window.setTimeout(() => {
			throttled.value = loading.value;
		}, throttle);
	};
	onMounted(dispatchThrottling);
	watch(() => loading.value, (val) => {
		if (val) dispatchThrottling();
		else throttled.value = val;
	});
	return throttled;
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/skeleton/src/skeleton.mjs
var skeletonProps = buildProps({
	animated: {
		type: Boolean,
		default: false
	},
	count: {
		type: Number,
		default: 1
	},
	rows: {
		type: Number,
		default: 3
	},
	loading: {
		type: Boolean,
		default: true
	},
	throttle: { type: Number }
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/skeleton/src/skeleton-item.mjs
var skeletonItemProps = buildProps({ variant: {
	type: String,
	values: [
		"circle",
		"rect",
		"h1",
		"h3",
		"text",
		"caption",
		"p",
		"image",
		"button"
	],
	default: "text"
} });
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/skeleton/src/skeleton-item2.mjs
var SkeletonItem = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElSkeletonItem" }),
	props: skeletonItemProps,
	setup(__props) {
		const ns = useNamespace("skeleton");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([unref(ns).e("item"), unref(ns).e(_ctx.variant)]) }, [_ctx.variant === "image" ? (openBlock(), createBlock(unref(picture_filled_default), { key: 0 })) : createCommentVNode("v-if", true)], 2);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/skeleton/index.mjs
var ElSkeleton = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElSkeleton" }),
	props: skeletonProps,
	setup(__props, { expose }) {
		const props = __props;
		const ns = useNamespace("skeleton");
		const uiLoading = useThrottleRender(toRef(props, "loading"), props.throttle);
		expose({ uiLoading });
		return (_ctx, _cache) => {
			return unref(uiLoading) ? (openBlock(), createElementBlock("div", mergeProps({
				key: 0,
				class: [unref(ns).b(), unref(ns).is("animated", _ctx.animated)]
			}, _ctx.$attrs), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.count, (i) => {
				return openBlock(), createElementBlock(Fragment, { key: i }, [_ctx.loading ? renderSlot(_ctx.$slots, "template", { key: i }, () => [createVNode(SkeletonItem, {
					class: normalizeClass(unref(ns).is("first")),
					variant: "p"
				}, null, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (item) => {
					return openBlock(), createBlock(SkeletonItem, {
						key: item,
						class: normalizeClass([unref(ns).e("paragraph"), unref(ns).is("last", item === _ctx.rows && _ctx.rows > 1)]),
						variant: "p"
					}, null, 8, ["class"]);
				}), 128))]) : createCommentVNode("v-if", true)], 64);
			}), 128))], 16)) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)));
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]), { SkeletonItem });
var ElSkeletonItem = withNoopInstall(SkeletonItem);
//#endregion
export { ElSkeletonItem as n, ElSkeleton as t };
