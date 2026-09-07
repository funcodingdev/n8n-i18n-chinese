import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, _t as watchEffect, bn as normalizeStyle, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { n as clamp, t as useNonce } from "./useNonce-DmggRvZ9.js";
import { D as useDebounceFn, a as useStateMachine, c as useForwardExpose, i as Presence_default, j as createContext, k as watchOnce, n as Primitive, p as useResizeObserver } from "./VisuallyHidden-lv4qVqRn.js";
import { t as useDirection } from "./useDirection-UW3tNAWY.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaRoot.js
var [injectScrollAreaRootContext, provideScrollAreaRootContext] = createContext("ScrollAreaRoot");
var ScrollAreaRoot_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaRoot",
	props: {
		type: {
			type: String,
			required: false,
			default: "hover"
		},
		dir: {
			type: String,
			required: false
		},
		scrollHideDelay: {
			type: Number,
			required: false,
			default: 600
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const cornerWidth = ref(0);
		const cornerHeight = ref(0);
		const viewport = ref();
		const content = ref();
		const scrollbarX = ref();
		const scrollbarY = ref();
		const scrollbarXEnabled = ref(false);
		const scrollbarYEnabled = ref(false);
		const { type, dir: propDir, scrollHideDelay } = toRefs(props);
		const dir = useDirection(propDir);
		function scrollTop() {
			viewport.value?.scrollTo({ top: 0 });
		}
		function scrollTopLeft() {
			viewport.value?.scrollTo({
				top: 0,
				left: 0
			});
		}
		__expose({
			viewport,
			scrollTop,
			scrollTopLeft
		});
		const { forwardRef, currentElement: scrollArea } = useForwardExpose();
		provideScrollAreaRootContext({
			type,
			dir,
			scrollHideDelay,
			scrollArea,
			viewport,
			onViewportChange: (el) => {
				viewport.value = el || void 0;
			},
			content,
			onContentChange: (el) => {
				content.value = el;
			},
			scrollbarX,
			scrollbarXEnabled,
			scrollbarY,
			scrollbarYEnabled,
			onScrollbarXChange: (scrollbar) => {
				scrollbarX.value = scrollbar || void 0;
			},
			onScrollbarYChange: (scrollbar) => {
				scrollbarY.value = scrollbar || void 0;
			},
			onScrollbarXEnabledChange: (rendered) => {
				scrollbarXEnabled.value = rendered;
			},
			onScrollbarYEnabledChange: (rendered) => {
				scrollbarYEnabled.value = rendered;
			},
			onCornerWidthChange: (width) => {
				cornerWidth.value = width;
			},
			onCornerHeightChange: (height) => {
				cornerHeight.value = height;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref: unref(forwardRef),
				"as-child": props.asChild,
				as: _ctx.as,
				dir: unref(dir),
				style: normalizeStyle({
					position: "relative",
					["--reka-scroll-area-corner-width"]: `${cornerWidth.value}px`,
					["--reka-scroll-area-corner-height"]: `${cornerHeight.value}px`
				})
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as-child",
				"as",
				"dir",
				"style"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaCornerImpl.js
var ScrollAreaCornerImpl_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaCornerImpl",
	setup(__props) {
		const rootContext = injectScrollAreaRootContext();
		const width = ref(0);
		const height = ref(0);
		const hasSize = computed(() => !!width.value && !!height.value);
		function setCornerHeight() {
			const offsetHeight = rootContext.scrollbarX.value?.offsetHeight || 0;
			rootContext.onCornerHeightChange(offsetHeight);
			height.value = offsetHeight;
		}
		function setCornerWidth() {
			const offsetWidth = rootContext.scrollbarY.value?.offsetWidth || 0;
			rootContext.onCornerWidthChange(offsetWidth);
			width.value = offsetWidth;
		}
		useResizeObserver(rootContext.scrollbarX.value, setCornerHeight);
		useResizeObserver(rootContext.scrollbarY.value, setCornerWidth);
		watch(() => rootContext.scrollbarX.value, setCornerHeight);
		watch(() => rootContext.scrollbarY.value, setCornerWidth);
		return (_ctx, _cache) => {
			return hasSize.value ? (openBlock(), createBlock(unref(Primitive), mergeProps({
				key: 0,
				style: {
					width: `${width.value}px`,
					height: `${height.value}px`,
					position: "absolute",
					right: unref(rootContext).dir.value === "ltr" ? 0 : void 0,
					left: unref(rootContext).dir.value === "rtl" ? 0 : void 0,
					bottom: 0
				}
			}, _ctx.$parent?.$props), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["style"])) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaCorner.js
var ScrollAreaCorner_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaCorner",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef } = useForwardExpose();
		const rootContext = injectScrollAreaRootContext();
		const hasBothScrollbarsVisible = computed(() => !!rootContext.scrollbarX.value && !!rootContext.scrollbarY.value);
		const hasCorner = computed(() => rootContext.type.value !== "scroll" && hasBothScrollbarsVisible.value);
		return (_ctx, _cache) => {
			return hasCorner.value ? (openBlock(), createBlock(ScrollAreaCornerImpl_default, mergeProps({ key: 0 }, props, { ref: unref(forwardRef) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16)) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/utils.js
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
function getThumbSize(sizes) {
	const ratio = getThumbRatio(sizes.viewport, sizes.content);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
	return Math.max(thumbSize, 18);
}
function getThumbRatio(viewportSize, contentSize) {
	const ratio = viewportSize / contentSize;
	return Number.isNaN(ratio) ? 0 : ratio;
}
function addUnlinkedScrollListener(node, handler = () => {}) {
	let prevPosition = {
		left: node.scrollLeft,
		top: node.scrollTop
	};
	let rAF = 0;
	(function loop() {
		const position = {
			left: node.scrollLeft,
			top: node.scrollTop
		};
		const isHorizontalScroll = prevPosition.left !== position.left;
		const isVerticalScroll = prevPosition.top !== position.top;
		if (isHorizontalScroll || isVerticalScroll) handler();
		prevPosition = position;
		rAF = window.requestAnimationFrame(loop);
	})();
	return () => window.cancelAnimationFrame(rAF);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const scrollbar = sizes.scrollbar.size - scrollbarPadding;
	const maxScrollPos = sizes.content - sizes.viewport;
	const maxThumbPos = scrollbar - thumbSizePx;
	const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
	const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange[0], scrollClampRange[1]);
	return linearScale([0, maxScrollPos], [0, maxThumbPos])(scrollWithoutMomentum);
}
function toInt(value) {
	return value ? Number.parseInt(value, 10) : 0;
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const thumbCenter = thumbSizePx / 2;
	const offset = pointerOffset || thumbCenter;
	const thumbOffsetFromEnd = thumbSizePx - offset;
	const minPointerPos = sizes.scrollbar.paddingStart + offset;
	const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
	const maxScrollPos = sizes.content - sizes.viewport;
	const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
	return linearScale([minPointerPos, maxPointerPos], scrollRange)(pointerPos);
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
	return scrollPos > 0 && scrollPos < maxScrollPos;
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarX.js
var ScrollAreaScrollbarX_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaScrollbarX",
	setup(__props) {
		const rootContext = injectScrollAreaRootContext();
		const scrollbarVisibleContext = injectScrollAreaScrollbarVisibleContext();
		const { forwardRef, currentElement: scrollbarElement } = useForwardExpose();
		onMounted(() => {
			if (scrollbarElement.value) rootContext.onScrollbarXChange(scrollbarElement.value);
		});
		const sizes = computed(() => scrollbarVisibleContext.sizes.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ScrollAreaScrollbarImpl_default, {
				ref: unref(forwardRef),
				"is-horizontal": true,
				"data-orientation": "horizontal",
				style: normalizeStyle({
					bottom: 0,
					left: unref(rootContext).dir.value === "rtl" ? "var(--reka-scroll-area-corner-width)" : 0,
					right: unref(rootContext).dir.value === "ltr" ? "var(--reka-scroll-area-corner-width)" : 0,
					["--reka-scroll-area-thumb-width"]: sizes.value ? `${unref(getThumbSize)(sizes.value)}px` : void 0
				}),
				onOnDragScroll: _cache[0] || (_cache[0] = ($event) => unref(scrollbarVisibleContext).onDragScroll($event.x))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["style"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarY.js
var ScrollAreaScrollbarY_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaScrollbarY",
	setup(__props) {
		const rootContext = injectScrollAreaRootContext();
		const scrollbarVisibleContext = injectScrollAreaScrollbarVisibleContext();
		const { forwardRef, currentElement: scrollbarElement } = useForwardExpose();
		onMounted(() => {
			if (scrollbarElement.value) rootContext.onScrollbarYChange(scrollbarElement.value);
		});
		const sizes = computed(() => scrollbarVisibleContext.sizes.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ScrollAreaScrollbarImpl_default, {
				ref: unref(forwardRef),
				"is-horizontal": false,
				"data-orientation": "vertical",
				style: normalizeStyle({
					top: 0,
					right: unref(rootContext).dir.value === "ltr" ? 0 : void 0,
					left: unref(rootContext).dir.value === "rtl" ? 0 : void 0,
					bottom: "var(--reka-scroll-area-corner-height)",
					["--reka-scroll-area-thumb-height"]: sizes.value ? `${unref(getThumbSize)(sizes.value)}px` : void 0
				}),
				onOnDragScroll: _cache[0] || (_cache[0] = ($event) => unref(scrollbarVisibleContext).onDragScroll($event.y))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["style"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarAuto.js
var ScrollAreaScrollbarAuto_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaScrollbarAuto",
	props: { forceMount: {
		type: Boolean,
		required: false
	} },
	setup(__props) {
		const rootContext = injectScrollAreaRootContext();
		const scrollbarContext = injectScrollAreaScrollbarContext();
		const { forwardRef } = useForwardExpose();
		const visible = ref(false);
		const handleResize = useDebounceFn(() => {
			if (rootContext.viewport.value) {
				const isOverflowX = rootContext.viewport.value.offsetWidth < rootContext.viewport.value.scrollWidth;
				const isOverflowY = rootContext.viewport.value.offsetHeight < rootContext.viewport.value.scrollHeight;
				visible.value = scrollbarContext.isHorizontal.value ? isOverflowX : isOverflowY;
			}
		}, 10);
		onMounted(() => handleResize());
		useResizeObserver(rootContext.viewport, handleResize);
		useResizeObserver(rootContext.content, handleResize);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || visible.value }, {
				default: withCtx(() => [createVNode(ScrollAreaScrollbarVisible_default, mergeProps(_ctx.$attrs, {
					ref: unref(forwardRef),
					"data-state": visible.value ? "visible" : "hidden"
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["data-state"])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarHover.js
var ScrollAreaScrollbarHover_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScrollAreaScrollbarHover",
	props: { forceMount: {
		type: Boolean,
		required: false
	} },
	setup(__props) {
		const rootContext = injectScrollAreaRootContext();
		const { forwardRef } = useForwardExpose();
		let timeout;
		const visible = ref(false);
		function handlePointerEnter() {
			window.clearTimeout(timeout);
			visible.value = true;
		}
		function handlePointerLeave() {
			timeout = window.setTimeout(() => {
				visible.value = false;
			}, rootContext.scrollHideDelay.value);
		}
		onMounted(() => {
			const scrollArea = rootContext.scrollArea.value;
			if (scrollArea) {
				scrollArea.addEventListener("pointerenter", handlePointerEnter);
				scrollArea.addEventListener("pointerleave", handlePointerLeave);
			}
		});
		onUnmounted(() => {
			const scrollArea = rootContext.scrollArea.value;
			if (scrollArea) {
				window.clearTimeout(timeout);
				scrollArea.removeEventListener("pointerenter", handlePointerEnter);
				scrollArea.removeEventListener("pointerleave", handlePointerLeave);
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || visible.value }, {
				default: withCtx(() => [createVNode(ScrollAreaScrollbarAuto_default, mergeProps(_ctx.$attrs, {
					ref: unref(forwardRef),
					"data-state": visible.value ? "visible" : "hidden"
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["data-state"])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarScroll.js
var ScrollAreaScrollbarScroll_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaScrollbarScroll",
	props: { forceMount: {
		type: Boolean,
		required: false
	} },
	setup(__props) {
		const rootContext = injectScrollAreaRootContext();
		const scrollbarContext = injectScrollAreaScrollbarContext();
		const { forwardRef } = useForwardExpose();
		const { state, dispatch } = useStateMachine("hidden", {
			hidden: { SCROLL: "scrolling" },
			scrolling: {
				SCROLL_END: "idle",
				POINTER_ENTER: "interacting"
			},
			interacting: {
				SCROLL: "interacting",
				POINTER_LEAVE: "idle"
			},
			idle: {
				HIDE: "hidden",
				SCROLL: "scrolling",
				POINTER_ENTER: "interacting"
			}
		});
		const visible = computed(() => state.value !== "hidden");
		watchEffect((onCleanup) => {
			if (state.value === "idle") {
				const timeId = window.setTimeout(() => dispatch("HIDE"), rootContext.scrollHideDelay.value);
				onCleanup(() => {
					window.clearTimeout(timeId);
				});
			}
		});
		const debounceScrollEnd = useDebounceFn(() => dispatch("SCROLL_END"), 100);
		watchEffect((onCleanup) => {
			const viewport = rootContext.viewport.value;
			const scrollDirection = scrollbarContext.isHorizontal.value ? "scrollLeft" : "scrollTop";
			if (viewport) {
				let prevScrollPos = viewport[scrollDirection];
				const handleScroll = () => {
					const scrollPos = viewport[scrollDirection];
					if (prevScrollPos !== scrollPos) {
						dispatch("SCROLL");
						debounceScrollEnd();
					}
					prevScrollPos = scrollPos;
				};
				viewport.addEventListener("scroll", handleScroll);
				onCleanup(() => {
					viewport.removeEventListener("scroll", handleScroll);
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || visible.value }, {
				default: withCtx(() => [createVNode(ScrollAreaScrollbarVisible_default, mergeProps(_ctx.$attrs, {
					ref: unref(forwardRef),
					"data-state": visible.value ? "visible" : "hidden"
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["data-state"])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbar.js
var [injectScrollAreaScrollbarContext, provideScrollAreaScrollbarContext] = createContext("ScrollAreaScrollbar");
var ScrollAreaScrollbar_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScrollAreaScrollbar",
	props: {
		orientation: {
			type: String,
			required: false,
			default: "vertical"
		},
		forceMount: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef } = useForwardExpose();
		const rootContext = injectScrollAreaRootContext();
		const isHorizontal = computed(() => props.orientation === "horizontal");
		watch(isHorizontal, () => {
			if (isHorizontal.value) rootContext.onScrollbarXEnabledChange(true);
			else rootContext.onScrollbarYEnabledChange(true);
		}, { immediate: true });
		onUnmounted(() => {
			rootContext.onScrollbarXEnabledChange(false);
			rootContext.onScrollbarYEnabledChange(false);
		});
		const { orientation, forceMount, asChild, as } = toRefs(props);
		provideScrollAreaScrollbarContext({
			orientation,
			forceMount,
			isHorizontal,
			as,
			asChild
		});
		return (_ctx, _cache) => {
			return unref(rootContext).type.value === "hover" ? (openBlock(), createBlock(ScrollAreaScrollbarHover_default, mergeProps({ key: 0 }, _ctx.$attrs, {
				ref: unref(forwardRef),
				"force-mount": unref(forceMount)
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["force-mount"])) : unref(rootContext).type.value === "scroll" ? (openBlock(), createBlock(ScrollAreaScrollbarScroll_default, mergeProps({ key: 1 }, _ctx.$attrs, {
				ref: unref(forwardRef),
				"force-mount": unref(forceMount)
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["force-mount"])) : unref(rootContext).type.value === "auto" ? (openBlock(), createBlock(ScrollAreaScrollbarAuto_default, mergeProps({ key: 2 }, _ctx.$attrs, {
				ref: unref(forwardRef),
				"force-mount": unref(forceMount)
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["force-mount"])) : unref(rootContext).type.value === "always" ? (openBlock(), createBlock(ScrollAreaScrollbarVisible_default, mergeProps({ key: 3 }, _ctx.$attrs, {
				ref: unref(forwardRef),
				"data-state": "visible"
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16)) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarVisible.js
var [injectScrollAreaScrollbarVisibleContext, provideScrollAreaScrollbarVisibleContext] = createContext("ScrollAreaScrollbarVisible");
var ScrollAreaScrollbarVisible_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaScrollbarVisible",
	setup(__props) {
		const rootContext = injectScrollAreaRootContext();
		const scrollbarContext = injectScrollAreaScrollbarContext();
		const { forwardRef } = useForwardExpose();
		const sizes = ref({
			content: 0,
			viewport: 0,
			scrollbar: {
				size: 0,
				paddingStart: 0,
				paddingEnd: 0
			}
		});
		const hasThumb = computed(() => {
			const thumbRatio = getThumbRatio(sizes.value.viewport, sizes.value.content);
			return Boolean(thumbRatio > 0 && thumbRatio < 1);
		});
		const thumbRef = ref();
		const pointerOffset = ref(0);
		function handleWheelScroll(event, payload) {
			if (isShowingScrollbarX.value) {
				const scrollPos = rootContext.viewport.value.scrollLeft + event.deltaY;
				rootContext.viewport.value.scrollLeft = scrollPos;
				if (isScrollingWithinScrollbarBounds(scrollPos, payload)) event.preventDefault();
			} else {
				const scrollPos = rootContext.viewport.value.scrollTop + event.deltaY;
				rootContext.viewport.value.scrollTop = scrollPos;
				if (isScrollingWithinScrollbarBounds(scrollPos, payload)) event.preventDefault();
			}
		}
		function handleThumbDown(event, payload) {
			if (isShowingScrollbarX.value) pointerOffset.value = payload.x;
			else pointerOffset.value = payload.y;
		}
		function handleThumbUp(event) {
			pointerOffset.value = 0;
		}
		function handleSizeChange(payload) {
			sizes.value = payload;
		}
		function getScrollPosition(pointerPos, dir) {
			return getScrollPositionFromPointer(pointerPos, pointerOffset.value, sizes.value, dir);
		}
		const isShowingScrollbarX = computed(() => scrollbarContext.isHorizontal.value);
		function onDragScroll(payload) {
			if (isShowingScrollbarX.value) rootContext.viewport.value.scrollLeft = getScrollPosition(payload, rootContext.dir.value);
			else rootContext.viewport.value.scrollTop = getScrollPosition(payload);
		}
		function onThumbPositionChange() {
			if (isShowingScrollbarX.value) {
				if (rootContext.viewport.value && thumbRef.value) {
					const scrollPos = rootContext.viewport.value.scrollLeft;
					const offset = getThumbOffsetFromScroll(scrollPos, sizes.value, rootContext.dir.value);
					thumbRef.value.style.transform = `translate3d(${offset}px, 0, 0)`;
				}
			} else if (rootContext.viewport.value && thumbRef.value) {
				const scrollPos = rootContext.viewport.value.scrollTop;
				const offset = getThumbOffsetFromScroll(scrollPos, sizes.value);
				thumbRef.value.style.transform = `translate3d(0, ${offset}px, 0)`;
			}
		}
		function onThumbChange(element) {
			thumbRef.value = element;
		}
		provideScrollAreaScrollbarVisibleContext({
			sizes,
			hasThumb,
			handleWheelScroll,
			handleThumbDown,
			handleThumbUp,
			handleSizeChange,
			onThumbPositionChange,
			onThumbChange,
			onDragScroll
		});
		return (_ctx, _cache) => {
			return isShowingScrollbarX.value ? (openBlock(), createBlock(ScrollAreaScrollbarX_default, mergeProps({ key: 0 }, _ctx.$attrs, { ref: unref(forwardRef) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16)) : (openBlock(), createBlock(ScrollAreaScrollbarY_default, mergeProps({ key: 1 }, _ctx.$attrs, { ref: unref(forwardRef) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16));
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarImpl.js
var ScrollAreaScrollbarImpl_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaScrollbarImpl",
	props: { isHorizontal: {
		type: Boolean,
		required: true
	} },
	emits: [
		"onDragScroll",
		"onWheelScroll",
		"onThumbPointerDown"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const rootContext = injectScrollAreaRootContext();
		const scrollbarVisibleContext = injectScrollAreaScrollbarVisibleContext();
		const scrollbarContext = injectScrollAreaScrollbarContext();
		const { forwardRef, currentElement: scrollbar } = useForwardExpose();
		const prevWebkitUserSelectRef = ref("");
		const rectRef = ref();
		function handleDragScroll(event) {
			if (rectRef.value) emit("onDragScroll", {
				x: event.clientX - rectRef.value?.left,
				y: event.clientY - rectRef.value?.top
			});
		}
		function handlePointerDown(event) {
			if (event.button === 0) {
				event.target.setPointerCapture(event.pointerId);
				rectRef.value = scrollbar.value.getBoundingClientRect();
				prevWebkitUserSelectRef.value = document.body.style.webkitUserSelect;
				document.body.style.webkitUserSelect = "none";
				if (rootContext.viewport) rootContext.viewport.value.style.scrollBehavior = "auto";
				handleDragScroll(event);
			}
		}
		function handlePointerMove(event) {
			handleDragScroll(event);
		}
		function handlePointerUp(event) {
			const element = event.target;
			if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
			document.body.style.webkitUserSelect = prevWebkitUserSelectRef.value;
			if (rootContext.viewport) rootContext.viewport.value.style.scrollBehavior = "";
			rectRef.value = void 0;
		}
		function handleWheel(event) {
			const element = event.target;
			const isScrollbarWheel = scrollbar.value?.contains(element);
			const maxScrollPos = scrollbarVisibleContext.sizes.value.content - scrollbarVisibleContext.sizes.value.viewport;
			if (isScrollbarWheel) scrollbarVisibleContext.handleWheelScroll(event, maxScrollPos);
		}
		onMounted(() => {
			document.addEventListener("wheel", handleWheel, { passive: false });
		});
		onUnmounted(() => {
			document.removeEventListener("wheel", handleWheel);
		});
		function handleSizeChange() {
			if (!scrollbar.value) return;
			if (props.isHorizontal) scrollbarVisibleContext.handleSizeChange({
				content: rootContext.viewport.value?.scrollWidth ?? 0,
				viewport: rootContext.viewport.value?.offsetWidth ?? 0,
				scrollbar: {
					size: scrollbar.value.clientWidth ?? 0,
					paddingStart: toInt(getComputedStyle(scrollbar.value).paddingLeft),
					paddingEnd: toInt(getComputedStyle(scrollbar.value).paddingRight)
				}
			});
			else scrollbarVisibleContext.handleSizeChange({
				content: rootContext.viewport.value?.scrollHeight ?? 0,
				viewport: rootContext.viewport.value?.offsetHeight ?? 0,
				scrollbar: {
					size: scrollbar.value?.clientHeight ?? 0,
					paddingStart: toInt(getComputedStyle(scrollbar.value).paddingLeft),
					paddingEnd: toInt(getComputedStyle(scrollbar.value).paddingRight)
				}
			});
		}
		useResizeObserver(scrollbar, handleSizeChange);
		useResizeObserver(rootContext.content, handleSizeChange);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref: unref(forwardRef),
				style: { "position": "absolute" },
				"data-scrollbarimpl": "",
				as: unref(scrollbarContext).as.value,
				"as-child": unref(scrollbarContext).asChild.value,
				onPointerdown: handlePointerDown,
				onPointermove: handlePointerMove,
				onPointerup: handlePointerUp
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["as", "as-child"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaThumb.js
var ScrollAreaThumb_default = /* @__PURE__ */ defineComponent({
	__name: "ScrollAreaThumb",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectScrollAreaRootContext();
		const scrollbarContextVisible = injectScrollAreaScrollbarVisibleContext();
		function handlePointerDown(event) {
			const thumbRect = event.target.getBoundingClientRect();
			const x = event.clientX - thumbRect.left;
			const y = event.clientY - thumbRect.top;
			scrollbarContextVisible.handleThumbDown(event, {
				x,
				y
			});
		}
		function handlePointerUp(event) {
			scrollbarContextVisible.handleThumbUp(event);
		}
		const { forwardRef, currentElement: thumbElement } = useForwardExpose();
		const removeUnlinkedScrollListenerRef = ref();
		const viewport = computed(() => rootContext.viewport.value);
		function handleScroll() {
			if (!removeUnlinkedScrollListenerRef.value) {
				removeUnlinkedScrollListenerRef.value = addUnlinkedScrollListener(viewport.value, scrollbarContextVisible.onThumbPositionChange);
				scrollbarContextVisible.onThumbPositionChange();
			}
		}
		watchOnce(computed(() => scrollbarContextVisible.sizes.value), () => {
			scrollbarContextVisible.onThumbChange(thumbElement.value);
			if (viewport.value) {
				/**
				* We only bind to native scroll event so we know when scroll starts and ends.
				* When scroll starts we start a requestAnimationFrame loop that checks for
				* changes to scroll position. That rAF loop triggers our thumb position change
				* when relevant to avoid scroll-linked effects. We cancel the loop when scroll ends.
				* https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
				*/
				scrollbarContextVisible.onThumbPositionChange();
				viewport.value.addEventListener("scroll", handleScroll);
			}
		});
		onUnmounted(() => {
			viewport.value.removeEventListener("scroll", handleScroll);
			rootContext.viewport.value?.removeEventListener("scroll", handleScroll);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref: unref(forwardRef),
				"data-state": unref(scrollbarContextVisible).hasThumb ? "visible" : "hidden",
				style: {
					width: "var(--reka-scroll-area-thumb-width)",
					height: "var(--reka-scroll-area-thumb-height)"
				},
				"as-child": props.asChild,
				as: _ctx.as,
				onPointerdown: handlePointerDown,
				onPointerup: handlePointerUp
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"data-state",
				"as-child",
				"as"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/ScrollArea/ScrollAreaViewport.js
var ScrollAreaViewport_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ScrollAreaViewport",
	props: {
		nonce: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const { nonce: propNonce } = toRefs(props);
		const nonce = useNonce(propNonce);
		const rootContext = injectScrollAreaRootContext();
		const viewportElement = ref();
		onMounted(() => {
			rootContext.onViewportChange(viewportElement.value);
			rootContext.onContentChange(contentElement.value);
		});
		__expose({ viewportElement });
		const { forwardRef, currentElement: contentElement } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", mergeProps({
				ref_key: "viewportElement",
				ref: viewportElement,
				"data-reka-scroll-area-viewport": "",
				style: {
					overflowX: unref(rootContext).scrollbarXEnabled.value ? "scroll" : "hidden",
					overflowY: unref(rootContext).scrollbarYEnabled.value ? "scroll" : "hidden"
				}
			}, _ctx.$attrs, { tabindex: 0 }), [createVNode(unref(Primitive), {
				ref: unref(forwardRef),
				style: normalizeStyle({ minWidth: unref(rootContext).scrollbarXEnabled.value ? "fit-content" : void 0 }),
				"as-child": props.asChild,
				as: _ctx.as
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"style",
				"as-child",
				"as"
			])], 16), createVNode(unref(Primitive), {
				as: "style",
				nonce: unref(nonce)
			}, {
				default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")])),
				_: 1,
				__: [0]
			}, 8, ["nonce"])], 64);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nScrollArea/N8nScrollArea.vue?vue&type=script&setup=true&lang.ts
var N8nScrollArea_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nScrollArea",
	props: {
		type: { default: "hover" },
		dir: { default: "ltr" },
		scrollHideDelay: { default: 600 },
		maxHeight: { default: void 0 },
		maxWidth: { default: void 0 },
		enableHorizontalScroll: {
			type: Boolean,
			default: false
		},
		enableVerticalScroll: {
			type: Boolean,
			default: true
		},
		asChild: {
			type: Boolean,
			default: false
		}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const rootRef = ref();
		const viewportStyle = computed(() => {
			const style = {};
			if (props.maxHeight) style.maxHeight = props.maxHeight;
			if (props.maxWidth) style.maxWidth = props.maxWidth;
			return style;
		});
		/**
		* Gets the viewport element from the root ref
		*/
		function getViewportElement() {
			if (!rootRef.value?.viewport) return void 0;
			const viewport = rootRef.value.viewport;
			if (typeof viewport === "object" && "value" in viewport) return viewport.value;
			if (viewport instanceof HTMLElement) return viewport;
		}
		/**
		* Scrolls the viewport to the bottom
		* @param options - Options for controlling scroll behavior
		*/
		async function scrollToBottom(options = {}) {
			await nextTick();
			const viewport = getViewportElement();
			if (viewport && typeof viewport.scrollTo === "function") viewport.scrollTo({
				top: viewport.scrollHeight,
				behavior: options.smooth ? "smooth" : "auto"
			});
			else if (viewport) viewport.scrollTop = viewport.scrollHeight;
		}
		/**
		* Scrolls the viewport to the top
		* @param options - Options for controlling scroll behavior
		*/
		async function scrollToTop(options = {}) {
			await nextTick();
			const viewport = getViewportElement();
			if (viewport && typeof viewport.scrollTo === "function") viewport.scrollTo({
				top: 0,
				behavior: options.smooth ? "smooth" : "auto"
			});
			else if (viewport) viewport.scrollTop = 0;
		}
		/**
		* Gets the current scroll position
		*/
		function getScrollPosition() {
			const viewport = getViewportElement();
			if (viewport) return {
				top: viewport.scrollTop,
				left: viewport.scrollLeft,
				height: viewport.scrollHeight,
				width: viewport.scrollWidth
			};
			return null;
		}
		__expose({
			scrollToBottom,
			scrollToTop,
			getScrollPosition
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ScrollAreaRoot_default), {
				ref_key: "rootRef",
				ref: rootRef,
				type: __props.type,
				dir: __props.dir,
				"scroll-hide-delay": __props.scrollHideDelay,
				class: normalizeClass(_ctx.$style.scrollAreaRoot)
			}, {
				default: withCtx(() => [
					createVNode(unref(ScrollAreaViewport_default), {
						"as-child": __props.asChild,
						class: normalizeClass(_ctx.$style.viewport),
						style: normalizeStyle(viewportStyle.value)
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					}, 8, [
						"as-child",
						"class",
						"style"
					]),
					__props.enableVerticalScroll ? (openBlock(), createBlock(unref(ScrollAreaScrollbar_default), {
						key: 0,
						orientation: "vertical",
						class: normalizeClass(_ctx.$style.scrollbar)
					}, {
						default: withCtx(() => [createVNode(unref(ScrollAreaThumb_default), { class: normalizeClass(_ctx.$style.thumb) }, null, 8, ["class"])]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					__props.enableHorizontalScroll ? (openBlock(), createBlock(unref(ScrollAreaScrollbar_default), {
						key: 1,
						orientation: "horizontal",
						class: normalizeClass(_ctx.$style.scrollbar)
					}, {
						default: withCtx(() => [createVNode(unref(ScrollAreaThumb_default), { class: normalizeClass(_ctx.$style.thumb) }, null, 8, ["class"])]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					__props.enableHorizontalScroll && __props.enableVerticalScroll ? (openBlock(), createBlock(unref(ScrollAreaCorner_default), { key: 2 })) : createCommentVNode("", true)
				]),
				_: 3
			}, 8, [
				"type",
				"dir",
				"scroll-hide-delay",
				"class"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nScrollArea/N8nScrollArea.vue?vue&type=style&index=0&lang.module.scss
var scrollAreaRoot = "_scrollAreaRoot_1gi5c_388";
var viewport = "_viewport_1gi5c_396";
var scrollbar = "_scrollbar_1gi5c_403";
var thumb = "_thumb_1gi5c_423";
var shimmer = "_shimmer_1gi5c_1";
var spin = "_spin_1gi5c_1";
var opacityPulse = "_opacityPulse_1gi5c_1";
var popoverIn = "_popoverIn_1gi5c_1";
var fadeIn = "_fadeIn_1gi5c_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1gi5c_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1gi5c_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1gi5c_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1gi5c_1";
var blurSwapIn = "_blurSwapIn_1gi5c_1";
var blurSwapOut = "_blurSwapOut_1gi5c_1";
var pulseGlow = "_pulseGlow_1gi5c_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1gi5c_1";
var fade = "_fade_1gi5c_1";
var fadeInUp = "_fadeInUp_1gi5c_1";
var fadeInDown = "_fadeInDown_1gi5c_1";
var fadeInLeft = "_fadeInLeft_1gi5c_1";
var fadeInRight = "_fadeInRight_1gi5c_1";
var fadeOut = "_fadeOut_1gi5c_1";
var fadeOutDown = "_fadeOutDown_1gi5c_1";
var fadeOutUp = "_fadeOutUp_1gi5c_1";
var fadeOutLeft = "_fadeOutLeft_1gi5c_1";
var fadeOutRight = "_fadeOutRight_1gi5c_1";
var ping = "_ping_1gi5c_1";
var blinkBackground = "_blinkBackground_1gi5c_1";
var typingBlink = "_typingBlink_1gi5c_1";
var N8nScrollArea_vue_vue_type_style_index_0_lang_module_default = {
	scrollAreaRoot,
	viewport,
	scrollbar,
	thumb,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1gi5c_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var N8nScrollArea_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nScrollArea_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nScrollArea_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nScrollArea_default as t };
