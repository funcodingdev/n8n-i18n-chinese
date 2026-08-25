import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, Q as onUpdated, R as inject, S as computed, T as createCommentVNode, Vt as toRef, W as nextTick, X as onMounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, cn as isObject, gt as watch, it as renderSlot, j as createVNode, n as Transition, p as vShow, q as onBeforeUnmount, st as resolveDynamicComponent, tn as init_shared_esm_bundler, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { h as useResizeObserver, m as useEventListener, n as addUnit, o as debugWarn, s as throwError, y as isClient } from "./style-D4NTVD8o.js";
import { a as buildProps, o as definePropType, p as isNumber, r as useNamespace } from "./use-namespace-BOyjzxct.js";
import { n as withInstall, t as _export_sfc } from "./plugin-vue_export-helper-BwbYAlq0.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/scrollbar/src/util.mjs
var BAR_MAP = {
	vertical: {
		offset: "offsetHeight",
		scroll: "scrollTop",
		scrollSize: "scrollHeight",
		size: "height",
		key: "vertical",
		axis: "Y",
		client: "clientY",
		direction: "top"
	},
	horizontal: {
		offset: "offsetWidth",
		scroll: "scrollLeft",
		scrollSize: "scrollWidth",
		size: "width",
		key: "horizontal",
		axis: "X",
		client: "clientX",
		direction: "left"
	}
};
var renderThumbStyle = ({ move, size, bar }) => ({
	[bar.size]: size,
	transform: `translate${bar.axis}(${move}%)`
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/scrollbar/src/constants.mjs
var scrollbarContextKey = Symbol("scrollbarContextKey");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/scrollbar/src/thumb.mjs
var thumbProps = buildProps({
	vertical: Boolean,
	size: String,
	move: Number,
	ratio: {
		type: Number,
		required: true
	},
	always: Boolean
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/scrollbar/src/thumb2.mjs
var COMPONENT_NAME$1 = "Thumb";
var Thumb = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	__name: "thumb",
	props: thumbProps,
	setup(__props) {
		const props = __props;
		const scrollbar = inject(scrollbarContextKey);
		const ns = useNamespace("scrollbar");
		if (!scrollbar) throwError(COMPONENT_NAME$1, "can not inject scrollbar context");
		const instance = ref();
		const thumb = ref();
		const thumbState = ref({});
		const visible = ref(false);
		let cursorDown = false;
		let cursorLeave = false;
		let originalOnSelectStart = isClient ? document.onselectstart : null;
		const bar = computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
		const thumbStyle = computed(() => renderThumbStyle({
			size: props.size,
			move: props.move,
			bar: bar.value
		}));
		const offsetRatio = computed(() => instance.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
		const clickThumbHandler = (e) => {
			var _a;
			e.stopPropagation();
			if (e.ctrlKey || [1, 2].includes(e.button)) return;
			(_a = window.getSelection()) == null || _a.removeAllRanges();
			startDrag(e);
			const el = e.currentTarget;
			if (!el) return;
			thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
		};
		const clickTrackHandler = (e) => {
			if (!thumb.value || !instance.value || !scrollbar.wrapElement) return;
			const thumbPositionPercentage = (Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) - thumb.value[bar.value.offset] / 2) * 100 * offsetRatio.value / instance.value[bar.value.offset];
			scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
		};
		const startDrag = (e) => {
			e.stopImmediatePropagation();
			cursorDown = true;
			document.addEventListener("mousemove", mouseMoveDocumentHandler);
			document.addEventListener("mouseup", mouseUpDocumentHandler);
			originalOnSelectStart = document.onselectstart;
			document.onselectstart = () => false;
		};
		const mouseMoveDocumentHandler = (e) => {
			if (!instance.value || !thumb.value) return;
			if (cursorDown === false) return;
			const prevPage = thumbState.value[bar.value.axis];
			if (!prevPage) return;
			const thumbPositionPercentage = ((instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1 - (thumb.value[bar.value.offset] - prevPage)) * 100 * offsetRatio.value / instance.value[bar.value.offset];
			scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
		};
		const mouseUpDocumentHandler = () => {
			cursorDown = false;
			thumbState.value[bar.value.axis] = 0;
			document.removeEventListener("mousemove", mouseMoveDocumentHandler);
			document.removeEventListener("mouseup", mouseUpDocumentHandler);
			restoreOnselectstart();
			if (cursorLeave) visible.value = false;
		};
		const mouseMoveScrollbarHandler = () => {
			cursorLeave = false;
			visible.value = !!props.size;
		};
		const mouseLeaveScrollbarHandler = () => {
			cursorLeave = true;
			visible.value = cursorDown;
		};
		onBeforeUnmount(() => {
			restoreOnselectstart();
			document.removeEventListener("mouseup", mouseUpDocumentHandler);
		});
		const restoreOnselectstart = () => {
			if (document.onselectstart !== originalOnSelectStart) document.onselectstart = originalOnSelectStart;
		};
		useEventListener(toRef(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
		useEventListener(toRef(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Transition, {
				name: unref(ns).b("fade"),
				persisted: ""
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("div", {
					ref_key: "instance",
					ref: instance,
					class: normalizeClass([unref(ns).e("bar"), unref(ns).is(unref(bar).key)]),
					onMousedown: clickTrackHandler
				}, [createBaseVNode("div", {
					ref_key: "thumb",
					ref: thumb,
					class: normalizeClass(unref(ns).e("thumb")),
					style: normalizeStyle(unref(thumbStyle)),
					onMousedown: clickThumbHandler
				}, null, 38)], 34), [[vShow, _ctx.always || visible.value]])]),
				_: 1
			}, 8, ["name"]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/scrollbar/src/bar2.mjs
var Bar = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	__name: "bar",
	props: buildProps({
		always: {
			type: Boolean,
			default: true
		},
		width: String,
		height: String,
		ratioX: {
			type: Number,
			default: 1
		},
		ratioY: {
			type: Number,
			default: 1
		}
	}),
	setup(__props, { expose }) {
		const props = __props;
		const moveX = ref(0);
		const moveY = ref(0);
		const handleScroll = (wrap) => {
			if (wrap) {
				const offsetHeight = wrap.offsetHeight - 4;
				const offsetWidth = wrap.offsetWidth - 4;
				moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
				moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
			}
		};
		expose({ handleScroll });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(Thumb, {
				move: moveX.value,
				ratio: _ctx.ratioX,
				size: _ctx.width,
				always: _ctx.always
			}, null, 8, [
				"move",
				"ratio",
				"size",
				"always"
			]), createVNode(Thumb, {
				move: moveY.value,
				ratio: _ctx.ratioY,
				size: _ctx.height,
				vertical: "",
				always: _ctx.always
			}, null, 8, [
				"move",
				"ratio",
				"size",
				"always"
			])], 64);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/scrollbar/src/scrollbar.mjs
var scrollbarProps = buildProps({
	height: {
		type: [String, Number],
		default: ""
	},
	maxHeight: {
		type: [String, Number],
		default: ""
	},
	native: {
		type: Boolean,
		default: false
	},
	wrapStyle: {
		type: definePropType([
			String,
			Object,
			Array
		]),
		default: ""
	},
	wrapClass: {
		type: [String, Array],
		default: ""
	},
	viewClass: {
		type: [String, Array],
		default: ""
	},
	viewStyle: {
		type: [
			String,
			Array,
			Object
		],
		default: ""
	},
	noresize: Boolean,
	tag: {
		type: String,
		default: "div"
	},
	always: Boolean,
	minSize: {
		type: Number,
		default: 20
	},
	id: String,
	role: String,
	ariaLabel: String,
	ariaOrientation: {
		type: String,
		values: ["horizontal", "vertical"]
	}
});
var scrollbarEmits = { scroll: ({ scrollTop, scrollLeft }) => [scrollTop, scrollLeft].every(isNumber) };
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/scrollbar/src/scrollbar2.mjs
init_shared_esm_bundler();
var COMPONENT_NAME = "ElScrollbar";
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/scrollbar/index.mjs
var ElScrollbar = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: COMPONENT_NAME }),
	props: scrollbarProps,
	emits: scrollbarEmits,
	setup(__props, { expose, emit }) {
		const props = __props;
		const ns = useNamespace("scrollbar");
		let stopResizeObserver = void 0;
		let stopResizeListener = void 0;
		const scrollbarRef = ref();
		const wrapRef = ref();
		const resizeRef = ref();
		const sizeWidth = ref("0");
		const sizeHeight = ref("0");
		const barRef = ref();
		const ratioY = ref(1);
		const ratioX = ref(1);
		const wrapStyle = computed(() => {
			const style = {};
			if (props.height) style.height = addUnit(props.height);
			if (props.maxHeight) style.maxHeight = addUnit(props.maxHeight);
			return [props.wrapStyle, style];
		});
		const wrapKls = computed(() => {
			return [
				props.wrapClass,
				ns.e("wrap"),
				{ [ns.em("wrap", "hidden-default")]: !props.native }
			];
		});
		const resizeKls = computed(() => {
			return [ns.e("view"), props.viewClass];
		});
		const handleScroll = () => {
			var _a;
			if (wrapRef.value) {
				(_a = barRef.value) == null || _a.handleScroll(wrapRef.value);
				emit("scroll", {
					scrollTop: wrapRef.value.scrollTop,
					scrollLeft: wrapRef.value.scrollLeft
				});
			}
		};
		function scrollTo(arg1, arg2) {
			if (isObject(arg1)) wrapRef.value.scrollTo(arg1);
			else if (isNumber(arg1) && isNumber(arg2)) wrapRef.value.scrollTo(arg1, arg2);
		}
		const setScrollTop = (value) => {
			if (!isNumber(value)) {
				debugWarn(COMPONENT_NAME, "value must be a number");
				return;
			}
			wrapRef.value.scrollTop = value;
		};
		const setScrollLeft = (value) => {
			if (!isNumber(value)) {
				debugWarn(COMPONENT_NAME, "value must be a number");
				return;
			}
			wrapRef.value.scrollLeft = value;
		};
		const update = () => {
			if (!wrapRef.value) return;
			const offsetHeight = wrapRef.value.offsetHeight - 4;
			const offsetWidth = wrapRef.value.offsetWidth - 4;
			const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight;
			const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth;
			const height = Math.max(originalHeight, props.minSize);
			const width = Math.max(originalWidth, props.minSize);
			ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
			ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
			sizeHeight.value = height + 4 < offsetHeight ? `${height}px` : "";
			sizeWidth.value = width + 4 < offsetWidth ? `${width}px` : "";
		};
		watch(() => props.noresize, (noresize) => {
			if (noresize) {
				stopResizeObserver?.();
				stopResizeListener?.();
			} else {
				({stop: stopResizeObserver} = useResizeObserver(resizeRef, update));
				stopResizeListener = useEventListener("resize", update);
			}
		}, { immediate: true });
		watch(() => [props.maxHeight, props.height], () => {
			if (!props.native) nextTick(() => {
				var _a;
				update();
				if (wrapRef.value) (_a = barRef.value) == null || _a.handleScroll(wrapRef.value);
			});
		});
		provide(scrollbarContextKey, reactive({
			scrollbarElement: scrollbarRef,
			wrapElement: wrapRef
		}));
		onMounted(() => {
			if (!props.native) nextTick(() => {
				update();
			});
		});
		onUpdated(() => update());
		expose({
			wrapRef,
			update,
			scrollTo,
			setScrollTop,
			setScrollLeft,
			handleScroll
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "scrollbarRef",
				ref: scrollbarRef,
				class: normalizeClass(unref(ns).b())
			}, [createBaseVNode("div", {
				ref_key: "wrapRef",
				ref: wrapRef,
				class: normalizeClass(unref(wrapKls)),
				style: normalizeStyle(unref(wrapStyle)),
				onScroll: handleScroll
			}, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
				id: _ctx.id,
				ref_key: "resizeRef",
				ref: resizeRef,
				class: normalizeClass(unref(resizeKls)),
				style: normalizeStyle(_ctx.viewStyle),
				role: _ctx.role,
				"aria-label": _ctx.ariaLabel,
				"aria-orientation": _ctx.ariaOrientation
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"id",
				"class",
				"style",
				"role",
				"aria-label",
				"aria-orientation"
			]))], 38), !_ctx.native ? (openBlock(), createBlock(Bar, {
				key: 0,
				ref_key: "barRef",
				ref: barRef,
				height: sizeHeight.value,
				width: sizeWidth.value,
				always: _ctx.always,
				"ratio-x": ratioX.value,
				"ratio-y": ratioY.value
			}, null, 8, [
				"height",
				"width",
				"always",
				"ratio-x",
				"ratio-y"
			])) : createCommentVNode("v-if", true)], 2);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]));
//#endregion
export { ElScrollbar as t };
