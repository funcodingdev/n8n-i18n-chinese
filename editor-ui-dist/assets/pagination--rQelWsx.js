import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, I as h, It as ref, N as defineComponent, P as getCurrentInstance, R as inject, S as computed, T as createCommentVNode, _ as Fragment, _t as watchEffect, bt as withCtx, gt as watch, j as createVNode, m as withKeys, rt as renderList, st as resolveDynamicComponent, tt as provide, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { o as debugWarn } from "./style-D4NTVD8o.js";
import { a as buildProps, o as definePropType, p as isNumber, r as useNamespace } from "./use-namespace-BOyjzxct.js";
import { a as isEqual, r as ElSelect, t as ElOption } from "./select-4-hSfAxQ.js";
import { T as more_filled_default, _ as d_arrow_right_default, g as d_arrow_left_default, n as withInstall, o as arrow_left_default, s as arrow_right_default, t as _export_sfc } from "./plugin-vue_export-helper-BwbYAlq0.js";
import { l as iconPropType, t as ElIcon } from "./icon-a_YnoStc.js";
import { a as componentSizes } from "./use-size-DQ4TyUL1.js";
import { r as mutable, t as ElInput } from "./input-DkRuN_WS.js";
import { a as useLocale } from "./use-z-index-CSLBKraN.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/constants.mjs
var elPaginationKey = Symbol("elPaginationKey");
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/prev.mjs
var paginationPrevProps = buildProps({
	disabled: Boolean,
	currentPage: {
		type: Number,
		default: 1
	},
	prevText: { type: String },
	prevIcon: { type: iconPropType }
});
var paginationPrevEmits = { click: (evt) => evt instanceof MouseEvent };
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/prev2.mjs
var _hoisted_1$4 = [
	"disabled",
	"aria-label",
	"aria-disabled"
];
var _hoisted_2$2 = { key: 0 };
var Prev = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElPaginationPrev" }),
	props: paginationPrevProps,
	emits: paginationPrevEmits,
	setup(__props) {
		const props = __props;
		const { t } = useLocale();
		const internalDisabled = computed(() => props.disabled || props.currentPage <= 1);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: "btn-prev",
				disabled: unref(internalDisabled),
				"aria-label": _ctx.prevText || unref(t)("el.pagination.prev"),
				"aria-disabled": unref(internalDisabled),
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
			}, [_ctx.prevText ? (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString(_ctx.prevText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
				default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.prevIcon)))]),
				_: 1
			}))], 8, _hoisted_1$4);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/next.mjs
var paginationNextProps = buildProps({
	disabled: Boolean,
	currentPage: {
		type: Number,
		default: 1
	},
	pageCount: {
		type: Number,
		default: 50
	},
	nextText: { type: String },
	nextIcon: { type: iconPropType }
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/next2.mjs
var _hoisted_1$3 = [
	"disabled",
	"aria-label",
	"aria-disabled"
];
var _hoisted_2$1 = { key: 0 };
var Next = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElPaginationNext" }),
	props: paginationNextProps,
	emits: ["click"],
	setup(__props) {
		const props = __props;
		const { t } = useLocale();
		const internalDisabled = computed(() => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: "btn-next",
				disabled: unref(internalDisabled),
				"aria-label": _ctx.nextText || unref(t)("el.pagination.next"),
				"aria-disabled": unref(internalDisabled),
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
			}, [_ctx.nextText ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.nextText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
				default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.nextIcon)))]),
				_: 1
			}))], 8, _hoisted_1$3);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/usePagination.mjs
var usePagination = () => inject(elPaginationKey, {});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/sizes.mjs
var paginationSizesProps = buildProps({
	pageSize: {
		type: Number,
		required: true
	},
	pageSizes: {
		type: definePropType(Array),
		default: () => mutable([
			10,
			20,
			30,
			40,
			50,
			100
		])
	},
	popperClass: { type: String },
	disabled: Boolean,
	teleported: Boolean,
	size: {
		type: String,
		values: componentSizes
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/sizes2.mjs
var Sizes = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElPaginationSizes" }),
	props: paginationSizesProps,
	emits: ["page-size-change"],
	setup(__props, { emit }) {
		const props = __props;
		const { t } = useLocale();
		const ns = useNamespace("pagination");
		const pagination = usePagination();
		const innerPageSize = ref(props.pageSize);
		watch(() => props.pageSizes, (newVal, oldVal) => {
			if (isEqual(newVal, oldVal)) return;
			if (Array.isArray(newVal)) emit("page-size-change", newVal.includes(props.pageSize) ? props.pageSize : props.pageSizes[0]);
		});
		watch(() => props.pageSize, (newVal) => {
			innerPageSize.value = newVal;
		});
		const innerPageSizes = computed(() => props.pageSizes);
		function handleChange(val) {
			var _a;
			if (val !== innerPageSize.value) {
				innerPageSize.value = val;
				(_a = pagination.handleSizeChange) == null || _a.call(pagination, Number(val));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(unref(ns).e("sizes")) }, [createVNode(unref(ElSelect), {
				"model-value": innerPageSize.value,
				disabled: _ctx.disabled,
				"popper-class": _ctx.popperClass,
				size: _ctx.size,
				teleported: _ctx.teleported,
				"validate-event": false,
				onChange: handleChange
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(innerPageSizes), (item) => {
					return openBlock(), createBlock(unref(ElOption), {
						key: item,
						value: item,
						label: item + unref(t)("el.pagination.pagesize")
					}, null, 8, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, [
				"model-value",
				"disabled",
				"popper-class",
				"size",
				"teleported"
			])], 2);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/jumper.mjs
var paginationJumperProps = buildProps({ size: {
	type: String,
	values: componentSizes
} });
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/jumper2.mjs
var _hoisted_1$2 = ["disabled"];
var Jumper = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElPaginationJumper" }),
	props: paginationJumperProps,
	setup(__props) {
		const { t } = useLocale();
		const ns = useNamespace("pagination");
		const { pageCount, disabled, currentPage, changeEvent } = usePagination();
		const userInput = ref();
		const innerValue = computed(() => {
			var _a;
			return (_a = userInput.value) != null ? _a : currentPage == null ? void 0 : currentPage.value;
		});
		function handleInput(val) {
			userInput.value = val ? +val : "";
		}
		function handleChange(val) {
			val = Math.trunc(+val);
			changeEvent?.(val);
			userInput.value = void 0;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(unref(ns).e("jump")),
				disabled: unref(disabled)
			}, [
				createBaseVNode("span", { class: normalizeClass([unref(ns).e("goto")]) }, toDisplayString(unref(t)("el.pagination.goto")), 3),
				createVNode(unref(ElInput), {
					size: _ctx.size,
					class: normalizeClass([unref(ns).e("editor"), unref(ns).is("in-pagination")]),
					min: 1,
					max: unref(pageCount),
					disabled: unref(disabled),
					"model-value": unref(innerValue),
					"validate-event": false,
					label: unref(t)("el.pagination.page"),
					type: "number",
					"onUpdate:modelValue": handleInput,
					onChange: handleChange
				}, null, 8, [
					"size",
					"class",
					"max",
					"disabled",
					"model-value",
					"label"
				]),
				createBaseVNode("span", { class: normalizeClass([unref(ns).e("classifier")]) }, toDisplayString(unref(t)("el.pagination.pageClassifier")), 3)
			], 10, _hoisted_1$2);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/total.mjs
var paginationTotalProps = buildProps({ total: {
	type: Number,
	default: 1e3
} });
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/total2.mjs
var _hoisted_1$1 = ["disabled"];
var Total = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElPaginationTotal" }),
	props: paginationTotalProps,
	setup(__props) {
		const { t } = useLocale();
		const ns = useNamespace("pagination");
		const { disabled } = usePagination();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(unref(ns).e("total")),
				disabled: unref(disabled)
			}, toDisplayString(unref(t)("el.pagination.total", { total: _ctx.total })), 11, _hoisted_1$1);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/pager.mjs
var paginationPagerProps = buildProps({
	currentPage: {
		type: Number,
		default: 1
	},
	pageCount: {
		type: Number,
		required: true
	},
	pagerCount: {
		type: Number,
		default: 7
	},
	disabled: Boolean
});
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/components/pager2.mjs
var _hoisted_1 = ["onKeyup"];
var _hoisted_2 = [
	"aria-current",
	"aria-label",
	"tabindex"
];
var _hoisted_3 = ["tabindex", "aria-label"];
var _hoisted_4 = [
	"aria-current",
	"aria-label",
	"tabindex"
];
var _hoisted_5 = ["tabindex", "aria-label"];
var _hoisted_6 = [
	"aria-current",
	"aria-label",
	"tabindex"
];
var Pager = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElPaginationPager" }),
	props: paginationPagerProps,
	emits: ["change"],
	setup(__props, { emit }) {
		const props = __props;
		const nsPager = useNamespace("pager");
		const nsIcon = useNamespace("icon");
		const { t } = useLocale();
		const showPrevMore = ref(false);
		const showNextMore = ref(false);
		const quickPrevHover = ref(false);
		const quickNextHover = ref(false);
		const quickPrevFocus = ref(false);
		const quickNextFocus = ref(false);
		const pagers = computed(() => {
			const pagerCount = props.pagerCount;
			const halfPagerCount = (pagerCount - 1) / 2;
			const currentPage = Number(props.currentPage);
			const pageCount = Number(props.pageCount);
			let showPrevMore2 = false;
			let showNextMore2 = false;
			if (pageCount > pagerCount) {
				if (currentPage > pagerCount - halfPagerCount) showPrevMore2 = true;
				if (currentPage < pageCount - halfPagerCount) showNextMore2 = true;
			}
			const array = [];
			if (showPrevMore2 && !showNextMore2) {
				const startPage = pageCount - (pagerCount - 2);
				for (let i = startPage; i < pageCount; i++) array.push(i);
			} else if (!showPrevMore2 && showNextMore2) for (let i = 2; i < pagerCount; i++) array.push(i);
			else if (showPrevMore2 && showNextMore2) {
				const offset = Math.floor(pagerCount / 2) - 1;
				for (let i = currentPage - offset; i <= currentPage + offset; i++) array.push(i);
			} else for (let i = 2; i < pageCount; i++) array.push(i);
			return array;
		});
		const prevMoreKls = computed(() => [
			"more",
			"btn-quickprev",
			nsIcon.b(),
			nsPager.is("disabled", props.disabled)
		]);
		const nextMoreKls = computed(() => [
			"more",
			"btn-quicknext",
			nsIcon.b(),
			nsPager.is("disabled", props.disabled)
		]);
		const tabindex = computed(() => props.disabled ? -1 : 0);
		watchEffect(() => {
			const halfPagerCount = (props.pagerCount - 1) / 2;
			showPrevMore.value = false;
			showNextMore.value = false;
			if (props.pageCount > props.pagerCount) {
				if (props.currentPage > props.pagerCount - halfPagerCount) showPrevMore.value = true;
				if (props.currentPage < props.pageCount - halfPagerCount) showNextMore.value = true;
			}
		});
		function onMouseEnter(forward = false) {
			if (props.disabled) return;
			if (forward) quickPrevHover.value = true;
			else quickNextHover.value = true;
		}
		function onFocus(forward = false) {
			if (forward) quickPrevFocus.value = true;
			else quickNextFocus.value = true;
		}
		function onEnter(e) {
			const target = e.target;
			if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
				const newPage = Number(target.textContent);
				if (newPage !== props.currentPage) emit("change", newPage);
			} else if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("more")) onPagerClick(e);
		}
		function onPagerClick(event) {
			const target = event.target;
			if (target.tagName.toLowerCase() === "ul" || props.disabled) return;
			let newPage = Number(target.textContent);
			const pageCount = props.pageCount;
			const currentPage = props.currentPage;
			const pagerCountOffset = props.pagerCount - 2;
			if (target.className.includes("more")) {
				if (target.className.includes("quickprev")) newPage = currentPage - pagerCountOffset;
				else if (target.className.includes("quicknext")) newPage = currentPage + pagerCountOffset;
			}
			if (!Number.isNaN(+newPage)) {
				if (newPage < 1) newPage = 1;
				if (newPage > pageCount) newPage = pageCount;
			}
			if (newPage !== currentPage) emit("change", newPage);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("ul", {
				class: normalizeClass(unref(nsPager).b()),
				onClick: onPagerClick,
				onKeyup: withKeys(onEnter, ["enter"])
			}, [
				_ctx.pageCount > 0 ? (openBlock(), createElementBlock("li", {
					key: 0,
					class: normalizeClass([[unref(nsPager).is("active", _ctx.currentPage === 1), unref(nsPager).is("disabled", _ctx.disabled)], "number"]),
					"aria-current": _ctx.currentPage === 1,
					"aria-label": unref(t)("el.pagination.currentPage", { pager: 1 }),
					tabindex: unref(tabindex)
				}, " 1 ", 10, _hoisted_2)) : createCommentVNode("v-if", true),
				showPrevMore.value ? (openBlock(), createElementBlock("li", {
					key: 1,
					class: normalizeClass(unref(prevMoreKls)),
					tabindex: unref(tabindex),
					"aria-label": unref(t)("el.pagination.prevPages", { pager: _ctx.pagerCount - 2 }),
					onMouseenter: _cache[0] || (_cache[0] = ($event) => onMouseEnter(true)),
					onMouseleave: _cache[1] || (_cache[1] = ($event) => quickPrevHover.value = false),
					onFocus: _cache[2] || (_cache[2] = ($event) => onFocus(true)),
					onBlur: _cache[3] || (_cache[3] = ($event) => quickPrevFocus.value = false)
				}, [(quickPrevHover.value || quickPrevFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_left_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))], 42, _hoisted_3)) : createCommentVNode("v-if", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(unref(pagers), (pager) => {
					return openBlock(), createElementBlock("li", {
						key: pager,
						class: normalizeClass([[unref(nsPager).is("active", _ctx.currentPage === pager), unref(nsPager).is("disabled", _ctx.disabled)], "number"]),
						"aria-current": _ctx.currentPage === pager,
						"aria-label": unref(t)("el.pagination.currentPage", { pager }),
						tabindex: unref(tabindex)
					}, toDisplayString(pager), 11, _hoisted_4);
				}), 128)),
				showNextMore.value ? (openBlock(), createElementBlock("li", {
					key: 2,
					class: normalizeClass(unref(nextMoreKls)),
					tabindex: unref(tabindex),
					"aria-label": unref(t)("el.pagination.nextPages", { pager: _ctx.pagerCount - 2 }),
					onMouseenter: _cache[4] || (_cache[4] = ($event) => onMouseEnter()),
					onMouseleave: _cache[5] || (_cache[5] = ($event) => quickNextHover.value = false),
					onFocus: _cache[6] || (_cache[6] = ($event) => onFocus()),
					onBlur: _cache[7] || (_cache[7] = ($event) => quickNextFocus.value = false)
				}, [(quickNextHover.value || quickNextFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_right_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))], 42, _hoisted_5)) : createCommentVNode("v-if", true),
				_ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
					key: 3,
					class: normalizeClass([[unref(nsPager).is("active", _ctx.currentPage === _ctx.pageCount), unref(nsPager).is("disabled", _ctx.disabled)], "number"]),
					"aria-current": _ctx.currentPage === _ctx.pageCount,
					"aria-label": unref(t)("el.pagination.currentPage", { pager: _ctx.pageCount }),
					tabindex: unref(tabindex)
				}, toDisplayString(_ctx.pageCount), 11, _hoisted_6)) : createCommentVNode("v-if", true)
			], 42, _hoisted_1);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/src/pagination.mjs
var isAbsent = (v) => typeof v !== "number";
var paginationProps = buildProps({
	pageSize: Number,
	defaultPageSize: Number,
	total: Number,
	pageCount: Number,
	pagerCount: {
		type: Number,
		validator: (value) => {
			return isNumber(value) && Math.trunc(value) === value && value > 4 && value < 22 && value % 2 === 1;
		},
		default: 7
	},
	currentPage: Number,
	defaultCurrentPage: Number,
	layout: {
		type: String,
		default: [
			"prev",
			"pager",
			"next",
			"jumper",
			"->",
			"total"
		].join(", ")
	},
	pageSizes: {
		type: definePropType(Array),
		default: () => mutable([
			10,
			20,
			30,
			40,
			50,
			100
		])
	},
	popperClass: {
		type: String,
		default: ""
	},
	prevText: {
		type: String,
		default: ""
	},
	prevIcon: {
		type: iconPropType,
		default: () => arrow_left_default
	},
	nextText: {
		type: String,
		default: ""
	},
	nextIcon: {
		type: iconPropType,
		default: () => arrow_right_default
	},
	teleported: {
		type: Boolean,
		default: true
	},
	small: Boolean,
	background: Boolean,
	disabled: Boolean,
	hideOnSinglePage: Boolean
});
var paginationEmits = {
	"update:current-page": (val) => isNumber(val),
	"update:page-size": (val) => isNumber(val),
	"size-change": (val) => isNumber(val),
	"current-change": (val) => isNumber(val),
	"prev-click": (val) => isNumber(val),
	"next-click": (val) => isNumber(val)
};
var componentName = "ElPagination";
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/pagination/index.mjs
var ElPagination = withInstall(defineComponent({
	name: componentName,
	props: paginationProps,
	emits: paginationEmits,
	setup(props, { emit, slots }) {
		const { t } = useLocale();
		const ns = useNamespace("pagination");
		const vnodeProps = getCurrentInstance().vnode.props || {};
		const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onUpdate:current-page" in vnodeProps || "onCurrentChange" in vnodeProps;
		const hasPageSizeListener = "onUpdate:pageSize" in vnodeProps || "onUpdate:page-size" in vnodeProps || "onSizeChange" in vnodeProps;
		const assertValidUsage = computed(() => {
			if (isAbsent(props.total) && isAbsent(props.pageCount)) return false;
			if (!isAbsent(props.currentPage) && !hasCurrentPageListener) return false;
			if (props.layout.includes("sizes")) {
				if (!isAbsent(props.pageCount)) {
					if (!hasPageSizeListener) return false;
				} else if (!isAbsent(props.total)) {
					if (!isAbsent(props.pageSize)) {
						if (!hasPageSizeListener) return false;
					}
				}
			}
			return true;
		});
		const innerPageSize = ref(isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize);
		const innerCurrentPage = ref(isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage);
		const pageSizeBridge = computed({
			get() {
				return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize;
			},
			set(v) {
				if (isAbsent(props.pageSize)) innerPageSize.value = v;
				if (hasPageSizeListener) {
					emit("update:page-size", v);
					emit("size-change", v);
				}
			}
		});
		const pageCountBridge = computed(() => {
			let pageCount = 0;
			if (!isAbsent(props.pageCount)) pageCount = props.pageCount;
			else if (!isAbsent(props.total)) pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
			return pageCount;
		});
		const currentPageBridge = computed({
			get() {
				return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage;
			},
			set(v) {
				let newCurrentPage = v;
				if (v < 1) newCurrentPage = 1;
				else if (v > pageCountBridge.value) newCurrentPage = pageCountBridge.value;
				if (isAbsent(props.currentPage)) innerCurrentPage.value = newCurrentPage;
				if (hasCurrentPageListener) {
					emit("update:current-page", newCurrentPage);
					emit("current-change", newCurrentPage);
				}
			}
		});
		watch(pageCountBridge, (val) => {
			if (currentPageBridge.value > val) currentPageBridge.value = val;
		});
		function handleCurrentChange(val) {
			currentPageBridge.value = val;
		}
		function handleSizeChange(val) {
			pageSizeBridge.value = val;
			const newPageCount = pageCountBridge.value;
			if (currentPageBridge.value > newPageCount) currentPageBridge.value = newPageCount;
		}
		function prev() {
			if (props.disabled) return;
			currentPageBridge.value -= 1;
			emit("prev-click", currentPageBridge.value);
		}
		function next() {
			if (props.disabled) return;
			currentPageBridge.value += 1;
			emit("next-click", currentPageBridge.value);
		}
		function addClass(element, cls) {
			if (element) {
				if (!element.props) element.props = {};
				element.props.class = [element.props.class, cls].join(" ");
			}
		}
		provide(elPaginationKey, {
			pageCount: pageCountBridge,
			disabled: computed(() => props.disabled),
			currentPage: currentPageBridge,
			changeEvent: handleCurrentChange,
			handleSizeChange
		});
		return () => {
			var _a, _b;
			if (!assertValidUsage.value) {
				debugWarn(componentName, t("el.pagination.deprecationWarning"));
				return null;
			}
			if (!props.layout) return null;
			if (props.hideOnSinglePage && pageCountBridge.value <= 1) return null;
			const rootChildren = [];
			const rightWrapperChildren = [];
			const rightWrapperRoot = h("div", { class: ns.e("rightwrapper") }, rightWrapperChildren);
			const TEMPLATE_MAP = {
				prev: h(Prev, {
					disabled: props.disabled,
					currentPage: currentPageBridge.value,
					prevText: props.prevText,
					prevIcon: props.prevIcon,
					onClick: prev
				}),
				jumper: h(Jumper, { size: props.small ? "small" : "default" }),
				pager: h(Pager, {
					currentPage: currentPageBridge.value,
					pageCount: pageCountBridge.value,
					pagerCount: props.pagerCount,
					onChange: handleCurrentChange,
					disabled: props.disabled
				}),
				next: h(Next, {
					disabled: props.disabled,
					currentPage: currentPageBridge.value,
					pageCount: pageCountBridge.value,
					nextText: props.nextText,
					nextIcon: props.nextIcon,
					onClick: next
				}),
				sizes: h(Sizes, {
					pageSize: pageSizeBridge.value,
					pageSizes: props.pageSizes,
					popperClass: props.popperClass,
					disabled: props.disabled,
					teleported: props.teleported,
					size: props.small ? "small" : "default"
				}),
				slot: (_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : null,
				total: h(Total, { total: isAbsent(props.total) ? 0 : props.total })
			};
			const components = props.layout.split(",").map((item) => item.trim());
			let haveRightWrapper = false;
			components.forEach((c) => {
				if (c === "->") {
					haveRightWrapper = true;
					return;
				}
				if (!haveRightWrapper) rootChildren.push(TEMPLATE_MAP[c]);
				else rightWrapperChildren.push(TEMPLATE_MAP[c]);
			});
			addClass(rootChildren[0], ns.is("first"));
			addClass(rootChildren[rootChildren.length - 1], ns.is("last"));
			if (haveRightWrapper && rightWrapperChildren.length > 0) {
				addClass(rightWrapperChildren[0], ns.is("first"));
				addClass(rightWrapperChildren[rightWrapperChildren.length - 1], ns.is("last"));
				rootChildren.push(rightWrapperRoot);
			}
			return h("div", { class: [
				ns.b(),
				ns.is("background", props.background),
				{ [ns.m("small")]: props.small }
			] }, rootChildren);
		};
	}
}));
//#endregion
export { paginationProps as n, ElPagination as t };
