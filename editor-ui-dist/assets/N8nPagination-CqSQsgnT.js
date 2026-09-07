import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, _ as Fragment, bt as withCtx, c as useCssModule, f as vModelText, gt as watch, it as renderSlot, j as createVNode, lt as useAttrs, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { n as Button_default } from "./N8nButton-IeUuYO4Y.js";
import { F as reactivePick, P as reactiveOmit } from "./dist-BKkqSB6h.js";
import { c as useForwardExpose, j as createContext, m as useVModel, n as Primitive, s as useForwardProps } from "./VisuallyHidden-lv4qVqRn.js";
import { t as Tooltip_default } from "./Tooltip-Dttq7ldI.js";
import { t as Select_default } from "./Select-Oh0j1SpO.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Pagination/PaginationEllipsis.js
var PaginationEllipsis_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationEllipsis",
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
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "data-type": "ellipsis" }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[0] || (_cache[0] = createTextVNode("…"))])]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Pagination/PaginationRoot.js
var [injectPaginationRootContext, providePaginationRootContext] = createContext("PaginationRoot");
var PaginationRoot_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationRoot",
	props: {
		page: {
			type: Number,
			required: false
		},
		defaultPage: {
			type: Number,
			required: false,
			default: 1
		},
		itemsPerPage: {
			type: Number,
			required: true
		},
		total: {
			type: Number,
			required: false,
			default: 0
		},
		siblingCount: {
			type: Number,
			required: false,
			default: 2
		},
		disabled: {
			type: Boolean,
			required: false
		},
		showEdges: {
			type: Boolean,
			required: false,
			default: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "nav"
		}
	},
	emits: ["update:page"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { siblingCount, disabled, showEdges } = toRefs(props);
		useForwardExpose();
		const page = useVModel(props, "page", emits, {
			defaultValue: props.defaultPage,
			passive: props.page === void 0
		});
		const pageCount = computed(() => Math.max(1, Math.ceil(props.total / (props.itemsPerPage || 1))));
		providePaginationRootContext({
			page,
			onPageChange(value) {
				page.value = value;
			},
			pageCount,
			siblingCount,
			disabled,
			showEdges
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: _ctx.as,
				"as-child": _ctx.asChild
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					page: unref(page),
					pageCount: pageCount.value
				})]),
				_: 3
			}, 8, ["as", "as-child"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Pagination/utils.js
function range(start, end) {
	const length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
}
function transform(items) {
	return items.map((value) => {
		if (typeof value === "number") return {
			type: "page",
			value
		};
		return { type: "ellipsis" };
	});
}
var ELLIPSIS = "ellipsis";
function getRange(currentPage, pageCount, siblingCount, showEdges) {
	const firstPageIndex = 1;
	const lastPageIndex = pageCount;
	const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPageIndex);
	const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPageIndex);
	if (showEdges) {
		const itemCount = Math.min(2 * siblingCount + 5, pageCount) - 2;
		const showLeftEllipsis = leftSiblingIndex > firstPageIndex + 2 && Math.abs(lastPageIndex - itemCount - firstPageIndex + 1) > 2 && Math.abs(leftSiblingIndex - firstPageIndex) > 2;
		const showRightEllipsis = rightSiblingIndex < lastPageIndex - 2 && Math.abs(lastPageIndex - itemCount) > 2 && Math.abs(lastPageIndex - rightSiblingIndex) > 2;
		if (!showLeftEllipsis && showRightEllipsis) return [
			...range(1, itemCount),
			ELLIPSIS,
			lastPageIndex
		];
		if (showLeftEllipsis && !showRightEllipsis) return [
			firstPageIndex,
			ELLIPSIS,
			...range(lastPageIndex - itemCount + 1, lastPageIndex)
		];
		if (showLeftEllipsis && showRightEllipsis) return [
			firstPageIndex,
			ELLIPSIS,
			...range(leftSiblingIndex, rightSiblingIndex),
			ELLIPSIS,
			lastPageIndex
		];
		return range(firstPageIndex, lastPageIndex);
	} else {
		const itemCount = siblingCount * 2 + 1;
		if (pageCount < itemCount) return range(1, lastPageIndex);
		else if (currentPage <= siblingCount + 1) return range(firstPageIndex, itemCount);
		else if (pageCount - currentPage <= siblingCount) return range(pageCount - itemCount + 1, lastPageIndex);
		else return range(leftSiblingIndex, rightSiblingIndex);
	}
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Pagination/PaginationList.js
var PaginationList_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationList",
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
		useForwardExpose();
		const rootContext = injectPaginationRootContext();
		const transformedRange = computed(() => {
			return transform(getRange(rootContext.page.value, rootContext.pageCount.value, rootContext.siblingCount.value, rootContext.showEdges.value));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { items: transformedRange.value })]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Pagination/PaginationListItem.js
var PaginationListItem_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationListItem",
	props: {
		value: {
			type: Number,
			required: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const rootContext = injectPaginationRootContext();
		const isSelected = computed(() => rootContext.page.value === props.value);
		const disabled = computed(() => rootContext.disabled.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"data-type": "page",
				"aria-label": `Page ${_ctx.value}`,
				"aria-current": isSelected.value ? "page" : void 0,
				"data-selected": isSelected.value ? "true" : void 0,
				disabled: disabled.value,
				type: _ctx.as === "button" ? "button" : void 0,
				onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && unref(rootContext).onPageChange(_ctx.value))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(_ctx.value), 1)])]),
				_: 3
			}, 16, [
				"aria-label",
				"aria-current",
				"data-selected",
				"disabled",
				"type"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Pagination/PaginationNext.js
var PaginationNext_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationNext",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const rootContext = injectPaginationRootContext();
		const disabled = computed(() => rootContext.page.value === rootContext.pageCount.value || rootContext.disabled.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"aria-label": "Next Page",
				type: _ctx.as === "button" ? "button" : void 0,
				disabled: disabled.value,
				onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && unref(rootContext).onPageChange(unref(rootContext).page.value + 1))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = createTextVNode("Next page"))])]),
				_: 3
			}, 16, ["type", "disabled"]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Pagination/PaginationPrev.js
var PaginationPrev_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationPrev",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const rootContext = injectPaginationRootContext();
		const disabled = computed(() => rootContext.page.value === 1 || rootContext.disabled.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"aria-label": "Previous Page",
				type: _ctx.as === "button" ? "button" : void 0,
				disabled: disabled.value,
				onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && unref(rootContext).onPageChange(unref(rootContext).page.value - 1))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = createTextVNode("Prev page"))])]),
				_: 3
			}, 16, ["type", "disabled"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nPagination/Pagination.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["disabled", "aria-label"];
var Pagination_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "Pagination",
	props: {
		page: {},
		defaultPage: { default: 1 },
		siblingCount: { default: 1 },
		disabled: {
			type: Boolean,
			default: false
		},
		showEdges: {
			type: Boolean,
			default: true
		},
		total: {},
		itemsPerPage: {},
		defaultItemsPerPage: { default: 10 },
		pageSizes: { default: () => [
			10,
			20,
			30,
			40,
			50,
			100
		] },
		showTotal: {
			type: Boolean,
			default: true
		},
		showSizes: {
			type: Boolean,
			default: true
		},
		showJumper: {
			type: Boolean,
			default: false
		},
		hideOnSinglePage: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" }
	},
	emits: ["update:page", "update:itemsPerPage"],
	setup(__props, { emit: __emit }) {
		const attrs = useAttrs();
		const rootClass = computed(() => attrs.class);
		const rootAttrs = computed(() => reactiveOmit(attrs, ["class"]));
		const $style = useCssModule();
		const props = __props;
		const emit = __emit;
		const { t } = useI18n();
		const rootProps = useForwardProps(reactivePick(props, "disabled", "showEdges", "siblingCount"));
		function resolveItemsPerPageDefault(value) {
			return typeof value === "number" && Number.isFinite(value) ? value : 10;
		}
		const isPageControlled = computed(() => props.page !== void 0);
		const uncontrolledPage = ref(props.defaultPage);
		const currentPage = computed(() => {
			if (props.page !== void 0) return props.page;
			return uncontrolledPage.value;
		});
		const isItemsPerPageControlled = computed(() => props.itemsPerPage !== void 0);
		const uncontrolledItemsPerPage = ref(resolveItemsPerPageDefault(props.defaultItemsPerPage));
		const currentItemsPerPage = computed(() => {
			if (props.itemsPerPage !== void 0) return props.itemsPerPage;
			return uncontrolledItemsPerPage.value;
		});
		const jumperValue = ref(String(currentPage.value));
		const jumperInputRef = useTemplateRef("jumperInput");
		watch(currentPage, (page) => {
			jumperValue.value = String(page);
		});
		function syncJumperInputWidth() {
			const input = jumperInputRef.value;
			if (!input) return;
			input.style.width = "0px";
			input.style.width = `${Math.max(input.scrollWidth, 1) + 1}px`;
		}
		watch(jumperValue, async (value) => {
			const digitsOnly = value.replace(/\D/g, "");
			if (digitsOnly !== value) {
				jumperValue.value = digitsOnly;
				return;
			}
			await nextTick();
			syncJumperInputWidth();
		});
		watch(() => props.showJumper, async (show) => {
			if (!show) return;
			await nextTick();
			syncJumperInputWidth();
		}, { immediate: true });
		function resolvedPageCount() {
			if (!props.total || !currentItemsPerPage.value) return 1;
			return Math.ceil(props.total / currentItemsPerPage.value);
		}
		function shouldHide() {
			return props.hideOnSinglePage && resolvedPageCount() <= 1;
		}
		function isPrevDisabled(page) {
			return props.disabled || page <= 1;
		}
		function isNextDisabled(page, pageCount) {
			return props.disabled || page >= pageCount;
		}
		function pageSizeItems() {
			return props.pageSizes.map((s) => ({
				value: String(s),
				label: t("pagination.pageSizeOption", { size: s })
			}));
		}
		function handlePageUpdate(newPage) {
			if (props.disabled) return;
			if (!isPageControlled.value) uncontrolledPage.value = newPage;
			emit("update:page", newPage);
		}
		function handleItemsPerPageUpdate(newSize) {
			if (props.disabled) return;
			const size = typeof newSize === "string" ? parseInt(newSize, 10) : newSize;
			if (!isItemsPerPageControlled.value) uncontrolledItemsPerPage.value = size;
			emit("update:itemsPerPage", size);
			handlePageUpdate(1);
		}
		function commitJumperValue() {
			if (props.disabled) return;
			const parsed = parseInt(jumperValue.value, 10);
			if (Number.isNaN(parsed)) {
				jumperValue.value = String(currentPage.value);
				return;
			}
			const targetPage = Math.min(Math.max(parsed, 1), resolvedPageCount());
			if (targetPage === currentPage.value) {
				jumperValue.value = String(currentPage.value);
				return;
			}
			handlePageUpdate(targetPage);
			if (isPageControlled.value) jumperValue.value = String(currentPage.value);
		}
		function onJumperKeydown(event) {
			if (event.key !== "Enter") return;
			if (!(event.target instanceof HTMLInputElement)) return;
			event.target.blur();
		}
		function onJumperFocus(event) {
			if (!(event.target instanceof HTMLInputElement)) return;
			const input = event.target;
			input.select();
			const listeners = {
				onMouseUp: (mouseEvent) => {
					mouseEvent.preventDefault();
					input.select();
					input.removeEventListener("mouseup", listeners.onMouseUp);
					input.removeEventListener("blur", listeners.onBlur);
				},
				onBlur: () => {
					input.removeEventListener("mouseup", listeners.onMouseUp);
					input.removeEventListener("blur", listeners.onBlur);
				}
			};
			input.addEventListener("mouseup", listeners.onMouseUp);
			input.addEventListener("blur", listeners.onBlur);
		}
		function handlePagerKeydown(event) {
			if (props.disabled) return;
			if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
			const list = event.currentTarget;
			if (!(list instanceof HTMLElement)) return;
			const buttons = Array.from(list.querySelectorAll("button:not(:disabled)"));
			if (buttons.length === 0) return;
			const active = document.activeElement;
			const currentIndex = buttons.findIndex((button) => button === active || button.contains(active));
			if (currentIndex === -1) return;
			const nextIndex = event.key === "ArrowRight" ? Math.min(currentIndex + 1, buttons.length - 1) : Math.max(currentIndex - 1, 0);
			if (nextIndex === currentIndex) return;
			event.preventDefault();
			buttons[nextIndex]?.focus();
		}
		return (_ctx, _cache) => {
			return !shouldHide() ? (openBlock(), createElementBlock("div", mergeProps({
				key: 0,
				class: [
					"n8n-pagination",
					unref($style).paginationContainer,
					unref($style)[__props.size],
					{ [unref($style).isDisabled]: __props.disabled },
					rootClass.value
				],
				"data-test-id": "pagination"
			}, rootAttrs.value), [
				__props.showTotal ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref($style).total),
					"data-test-id": "pagination-total"
				}, toDisplayString(unref(t)("pagination.total", { total: __props.total })), 3)) : createCommentVNode("", true),
				createVNode(unref(PaginationRoot_default), mergeProps(unref(rootProps), {
					page: currentPage.value,
					"items-per-page": currentItemsPerPage.value,
					total: __props.total,
					"onUpdate:page": handlePageUpdate
				}), {
					default: withCtx(({ page: rootPage, pageCount: rootPageCount }) => [createVNode(unref(PaginationList_default), {
						class: normalizeClass(unref($style).paginationList),
						"data-test-id": "pagination-list",
						onKeydown: handlePagerKeydown
					}, {
						default: withCtx(({ items }) => [
							createVNode(Tooltip_default, {
								content: unref(t)("pagination.previousPage"),
								disabled: !!_ctx.$slots.prev || isPrevDisabled(rootPage)
							}, {
								default: withCtx(() => [createVNode(unref(PaginationPrev_default), { "as-child": "" }, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "prev", { disabled: isPrevDisabled(rootPage) }, () => [createVNode(Button_default, {
										variant: "ghost",
										"icon-only": "",
										icon: "chevron-left",
										size: __props.size,
										disabled: isPrevDisabled(rootPage),
										"aria-label": unref(t)("pagination.previousPage"),
										"data-test-id": "pagination-prev"
									}, null, 8, [
										"size",
										"disabled",
										"aria-label"
									])])]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["content", "disabled"]),
							(openBlock(true), createElementBlock(Fragment, null, renderList(items, (item, index) => {
								return openBlock(), createElementBlock(Fragment, { key: item.type === "ellipsis" ? `ellipsis-${index}` : item.value }, [item.type === "ellipsis" ? (openBlock(), createBlock(unref(PaginationEllipsis_default), {
									key: 0,
									index,
									class: normalizeClass(unref($style).paginationEllipsis),
									"data-test-id": "pagination-ellipsis"
								}, {
									default: withCtx(() => [..._cache[1] || (_cache[1] = [createBaseVNode("span", { "aria-hidden": "true" }, "…", -1)])]),
									_: 1
								}, 8, ["index", "class"])) : (openBlock(), createBlock(unref(PaginationListItem_default), {
									key: 1,
									value: item.value,
									class: normalizeClass(unref($style).paginationItem),
									"data-test-id": "pagination-item"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
									_: 2
								}, 1032, ["value", "class"]))], 64);
							}), 128)),
							createVNode(Tooltip_default, {
								content: unref(t)("pagination.nextPage"),
								disabled: !!_ctx.$slots.next || isNextDisabled(rootPage, rootPageCount)
							}, {
								default: withCtx(() => [createVNode(unref(PaginationNext_default), { "as-child": "" }, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "next", { disabled: isNextDisabled(rootPage, rootPageCount) }, () => [createVNode(Button_default, {
										variant: "ghost",
										"icon-only": "",
										icon: "chevron-right",
										size: __props.size,
										disabled: isNextDisabled(rootPage, rootPageCount),
										"aria-label": unref(t)("pagination.nextPage"),
										"data-test-id": "pagination-next"
									}, null, 8, [
										"size",
										"disabled",
										"aria-label"
									])])]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1032, ["content", "disabled"])
						]),
						_: 2
					}, 1032, ["class"])]),
					_: 3
				}, 16, [
					"page",
					"items-per-page",
					"total"
				]),
				__props.showSizes ? (openBlock(), createBlock(Select_default, {
					key: 1,
					class: normalizeClass(unref($style).pageSizes),
					"model-value": String(currentItemsPerPage.value),
					items: pageSizeItems(),
					size: __props.size,
					disabled: __props.disabled,
					"aria-label": unref(t)("pagination.pageSize"),
					"data-test-id": "pagination-sizes",
					"onUpdate:modelValue": handleItemsPerPageUpdate
				}, null, 8, [
					"class",
					"model-value",
					"items",
					"size",
					"disabled",
					"aria-label"
				])) : createCommentVNode("", true),
				__props.showJumper ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(unref($style).jumper),
					"data-test-id": "pagination-jumper"
				}, [createBaseVNode("span", { class: normalizeClass(unref($style).jumperPrefix) }, toDisplayString(unref(t)("pagination.goTo")), 3), withDirectives(createBaseVNode("input", {
					ref: "jumperInput",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => jumperValue.value = $event),
					type: "text",
					inputmode: "numeric",
					pattern: "[0-9]*",
					autocomplete: "off",
					class: normalizeClass(unref($style).jumperInput),
					disabled: __props.disabled,
					"aria-label": unref(t)("pagination.goToPage"),
					"data-test-id": "pagination-jumper-input",
					onFocus: onJumperFocus,
					onBlur: commitJumperValue,
					onKeydown: onJumperKeydown
				}, null, 42, _hoisted_1), [[vModelText, jumperValue.value]])], 2)) : createCommentVNode("", true)
			], 16)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nPagination/Pagination.vue?vue&type=style&index=0&lang.module.scss
var paginationContainer = "_paginationContainer_uiwr6_388";
var medium = "_medium_uiwr6_394";
var paginationItem = "_paginationItem_uiwr6_394";
var paginationEllipsis = "_paginationEllipsis_uiwr6_395";
var total = "_total_uiwr6_399";
var jumper = "_jumper_uiwr6_402";
var pageSizes = "_pageSizes_uiwr6_408";
var small = "_small_uiwr6_413";
var isDisabled = "_isDisabled_uiwr6_436";
var paginationList = "_paginationList_uiwr6_448";
var jumperPrefix = "_jumperPrefix_uiwr6_478";
var jumperInput = "_jumperInput_uiwr6_483";
var shimmer = "_shimmer_uiwr6_1";
var spin = "_spin_uiwr6_1";
var opacityPulse = "_opacityPulse_uiwr6_1";
var popoverIn = "_popoverIn_uiwr6_1";
var fadeIn = "_fadeIn_uiwr6_1";
var collapsibleSlideDown = "_collapsibleSlideDown_uiwr6_1";
var collapsibleSlideUp = "_collapsibleSlideUp_uiwr6_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_uiwr6_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_uiwr6_1";
var blurSwapIn = "_blurSwapIn_uiwr6_1";
var blurSwapOut = "_blurSwapOut_uiwr6_1";
var pulseGlow = "_pulseGlow_uiwr6_1";
var pulseGlowDelayed = "_pulseGlowDelayed_uiwr6_1";
var fade = "_fade_uiwr6_1";
var fadeInUp = "_fadeInUp_uiwr6_1";
var fadeInDown = "_fadeInDown_uiwr6_1";
var fadeInLeft = "_fadeInLeft_uiwr6_1";
var fadeInRight = "_fadeInRight_uiwr6_1";
var fadeOut = "_fadeOut_uiwr6_1";
var fadeOutDown = "_fadeOutDown_uiwr6_1";
var fadeOutUp = "_fadeOutUp_uiwr6_1";
var fadeOutLeft = "_fadeOutLeft_uiwr6_1";
var fadeOutRight = "_fadeOutRight_uiwr6_1";
var ping = "_ping_uiwr6_1";
var blinkBackground = "_blinkBackground_uiwr6_1";
var typingBlink = "_typingBlink_uiwr6_1";
var Pagination_vue_vue_type_style_index_0_lang_module_default = {
	paginationContainer,
	medium,
	paginationItem,
	paginationEllipsis,
	total,
	jumper,
	pageSizes,
	small,
	isDisabled,
	paginationList,
	jumperPrefix,
	jumperInput,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_uiwr6_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nPagination/index.ts
var N8nPagination_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Pagination_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Pagination_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nPagination_default as t };
