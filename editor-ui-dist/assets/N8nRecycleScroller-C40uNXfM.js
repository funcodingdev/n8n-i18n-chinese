import { $ as openBlock, C as createBaseVNode, E as createElementBlock, It as ref, K as onBeforeMount, N as defineComponent, S as computed, W as nextTick, X as onMounted, _ as Fragment, bn as normalizeStyle, gt as watch, it as renderSlot, rt as renderList } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
//#endregion
//#region ../@n8n/design-system/src/components/N8nRecycleScroller/index.ts
var N8nRecycleScroller_default = /* @__PURE__ */ defineComponent({
	__name: "RecycleScroller",
	props: {
		itemSize: {},
		items: {},
		itemKey: {},
		offset: { default: 2 }
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const wrapperRef = ref(null);
		const scrollerRef = ref(null);
		const itemsRef = ref(null);
		const itemRefs = ref({});
		const scrollTop = ref(0);
		const wrapperHeight = ref(0);
		const windowHeight = ref(0);
		/** Cache */
		const itemSizeCache = ref({});
		const itemPositionCache = computed(() => {
			return props.items.reduce((acc, item, index) => {
				const key = item[props.itemKey];
				const prevItem = props.items[index - 1];
				acc[key] = (prevItem ? acc[prevItem[props.itemKey]] : 0) + (prevItem ? itemSizeCache.value[prevItem[props.itemKey]] ?? props.itemSize : 0);
				return acc;
			}, {});
		});
		/** Indexes */
		const startIndex = computed(() => {
			const index = props.items.findIndex((item) => {
				return itemPositionCache.value[item[props.itemKey]] >= scrollTop.value;
			}) - 1 - props.offset;
			return index < 0 ? 0 : index;
		});
		const endIndex = computed(() => {
			const foundIndex = props.items.findIndex((item) => {
				return itemPositionCache.value[item[props.itemKey]] + (itemSizeCache.value[item[props.itemKey]] ?? props.itemSize) >= scrollTop.value + wrapperHeight.value;
			});
			const index = foundIndex + props.offset;
			return foundIndex === -1 ? props.items.length - 1 : index;
		});
		const visibleItems = computed(() => {
			return props.items.slice(startIndex.value, endIndex.value + 1);
		});
		watch(() => visibleItems.value, (currentValue, previousValue) => {
			const difference = currentValue.filter((currentItem) => !previousValue.find((previousItem) => previousItem[props.itemKey] === currentItem[props.itemKey]));
			if (difference.length > 0) updateItemSizeCache(difference);
		});
		/** Computed sizes and styles */
		const scrollerHeight = computed(() => {
			const lastItem = props.items[props.items.length - 1];
			return (lastItem ? itemPositionCache.value[lastItem[props.itemKey]] : 0) + (lastItem ? itemSizeCache.value[lastItem[props.itemKey]] ?? props.itemSize : props.itemSize);
		});
		const scrollerStyles = computed(() => ({ height: `${scrollerHeight.value}px` }));
		const itemsStyles = computed(() => {
			return { transform: `translateY(${itemPositionCache.value[props.items[startIndex.value][props.itemKey]]}px)` };
		});
		/** Lifecycle hooks */
		onBeforeMount(() => {
			initializeItemSizeCache();
		});
		onMounted(() => {
			if (wrapperRef.value) {
				wrapperRef.value.addEventListener("scroll", onScroll);
				updateItemSizeCache(visibleItems.value);
			}
			window.addEventListener("resize", onWindowResize);
			onWindowResize();
		});
		/** Event handlers */
		function initializeItemSizeCache() {
			props.items.forEach((item) => {
				itemSizeCache.value = {
					...itemSizeCache.value,
					[item[props.itemKey]]: props.itemSize
				};
			});
		}
		function updateItemSizeCache(items) {
			for (const item of items) onUpdateItemSize(item);
		}
		function onUpdateItemSize(item) {
			nextTick(() => {
				const itemId = item[props.itemKey];
				const itemRef = itemRefs.value[itemId];
				const previousSize = itemSizeCache.value[itemId] ?? props.itemSize;
				const size = itemRef ? itemRef.offsetHeight : props.itemSize;
				const difference = size - previousSize;
				itemSizeCache.value = {
					...itemSizeCache.value,
					[item[props.itemKey]]: size
				};
				if (wrapperRef.value && scrollTop.value) {
					wrapperRef.value.scrollTop = wrapperRef.value.scrollTop + difference;
					scrollTop.value = wrapperRef.value.scrollTop;
				}
			});
		}
		function onWindowResize() {
			if (wrapperRef.value) {
				wrapperHeight.value = wrapperRef.value.offsetHeight;
				nextTick(() => {
					updateItemSizeCache(visibleItems.value);
				});
			}
			windowHeight.value = window.innerHeight;
		}
		function onScroll() {
			if (!wrapperRef.value) return;
			scrollTop.value = wrapperRef.value.scrollTop;
		}
		function scrollTo(position) {
			if (!wrapperRef.value) return;
			wrapperRef.value.scrollTop = position;
			scrollTop.value = wrapperRef.value.scrollTop;
		}
		function scrollToKey(key) {
			const position = itemPositionCache.value[key];
			if (position === void 0) return;
			scrollTo(position);
		}
		__expose({
			scrollToKey,
			scrollTo,
			scrollTop
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "wrapperRef",
				ref: wrapperRef,
				class: "recycle-scroller-wrapper"
			}, [createBaseVNode("div", {
				ref_key: "scrollerRef",
				ref: scrollerRef,
				class: "recycle-scroller",
				style: normalizeStyle(scrollerStyles.value)
			}, [createBaseVNode("div", {
				ref_key: "itemsRef",
				ref: itemsRef,
				class: "recycle-scroller-items-wrapper",
				style: normalizeStyle(itemsStyles.value)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleItems.value, (item) => {
				return openBlock(), createElementBlock("div", {
					key: item[__props.itemKey],
					ref_for: true,
					ref: (element) => itemRefs.value[`${item[__props.itemKey]}`] = element,
					class: "recycle-scroller-item"
				}, [renderSlot(_ctx.$slots, "default", {
					item,
					updateItemSize: onUpdateItemSize
				})]);
			}), 128))], 4)], 4)], 512);
		};
	}
});
//#endregion
export { N8nRecycleScroller_default as t };
