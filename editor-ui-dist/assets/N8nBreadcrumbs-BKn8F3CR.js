import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
//#region ../@n8n/design-system/src/components/N8nBreadcrumbs/Breadcrumbs.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "hidden-items-tooltip" };
var _hoisted_2 = [
	"title",
	"data-resourceid",
	"onClick",
	"onMouseenter",
	"onMouseup"
];
var Breadcrumbs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nBreadcrumbs",
	__name: "Breadcrumbs",
	props: {
		items: {},
		hiddenItems: { default: () => new Array() },
		theme: { default: "medium" },
		showBorder: {
			type: Boolean,
			default: false
		},
		loadingSkeletonRows: { default: 3 },
		separator: { default: "/" },
		highlightLastItem: {
			type: Boolean,
			default: true
		},
		hiddenItemsTrigger: { default: "click" },
		pathTruncated: {
			type: Boolean,
			default: false
		},
		dragActive: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"tooltipOpened",
		"tooltipClosed",
		"hiddenItemsLoadingError",
		"itemSelected",
		"itemHover",
		"itemDrop"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const loadedHiddenItems = ref([]);
		const isLoadingHiddenItems = ref(false);
		const currentPromise = ref(null);
		const hasHiddenItems = computed(() => {
			return Array.isArray(props.hiddenItems) ? props.hiddenItems.length > 0 : props.hiddenItems !== void 0;
		});
		const showEllipsis = computed(() => {
			return props.items.length && (hasHiddenItems.value || props.pathTruncated);
		});
		const dropdownDisabled = computed(() => {
			return props.pathTruncated && !hasHiddenItems.value;
		});
		const hiddenItemActions = computed(() => {
			return loadedHiddenItems.value.map((item) => ({
				id: item.id,
				label: item.label,
				disabled: false
			}));
		});
		const getHiddenItems = async () => {
			if (loadedHiddenItems.value.length > 0 && props.hiddenItems === currentPromise.value) return;
			if (Array.isArray(props.hiddenItems)) {
				loadedHiddenItems.value = props.hiddenItems;
				return;
			}
			isLoadingHiddenItems.value = true;
			try {
				currentPromise.value = props.hiddenItems;
				loadedHiddenItems.value = await props.hiddenItems;
			} catch (error) {
				loadedHiddenItems.value = [];
				emit("hiddenItemsLoadingError", error);
			} finally {
				isLoadingHiddenItems.value = false;
			}
		};
		watch(() => props.hiddenItems, (_newValue) => {
			getHiddenItems();
		});
		const onHiddenMenuVisibleChange = async (visible) => {
			if (visible) {
				emit("tooltipOpened");
				await getHiddenItems();
			} else emit("tooltipClosed");
		};
		const emitItemSelected = (id, event) => {
			const item = [...props.items, ...loadedHiddenItems.value].find((i) => i.id === id);
			if (!item) return;
			if (event && (event.ctrlKey || event.metaKey || event.shiftKey || event.button === 1)) return;
			if (event && item.href) event.preventDefault();
			emit("itemSelected", item);
		};
		const emitItemHover = (id) => {
			const item = [...props.items, ...loadedHiddenItems.value].find((i) => i.id === id);
			if (!item) return;
			emit("itemHover", item);
		};
		const onHiddenItemMouseUp = (item) => {
			const pathItem = [...props.items, ...loadedHiddenItems.value].find((i) => i.id === item.id);
			if (!pathItem || !props.dragActive) return;
			emit("itemDrop", pathItem);
		};
		const onItemMouseUp = (item) => {
			if (!props.dragActive) return;
			emit("itemDrop", item);
		};
		const handleTooltipShow = async () => {
			emit("tooltipOpened");
			await getHiddenItems();
		};
		const handleTooltipClose = () => {
			emit("tooltipClosed");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.container]: true,
				[_ctx.$style.border]: props.showBorder,
				[_ctx.$style[props.theme]]: true,
				["n8n-breadcrumbs"]: true
			}) }, [
				renderSlot(_ctx.$slots, "prepend"),
				createBaseVNode("ul", { class: normalizeClass(_ctx.$style.list) }, [
					_ctx.$slots.prepend && __props.items.length ? (openBlock(), createElementBlock("li", {
						key: 0,
						class: normalizeClass(_ctx.$style.separator)
					}, toDisplayString(__props.separator), 3)) : createCommentVNode("", true),
					showEllipsis.value ? (openBlock(), createElementBlock("li", {
						key: 1,
						class: normalizeClass({
							[_ctx.$style.ellipsis]: true,
							[_ctx.$style.disabled]: dropdownDisabled.value
						}),
						"data-test-id": "ellipsis"
					}, [props.theme !== "small" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style["hidden-items-menu"])
					}, [createVNode(unref(N8nActionToggle_default), {
						actions: hiddenItemActions.value,
						loading: isLoadingHiddenItems.value,
						"loading-row-count": __props.loadingSkeletonRows,
						disabled: dropdownDisabled.value,
						class: normalizeClass(_ctx.$style["action-toggle"]),
						"popper-class": `${_ctx.$style["hidden-items-menu-popper"]} ${__props.dragActive ? _ctx.$style.dragging : ""}`,
						trigger: __props.hiddenItemsTrigger,
						theme: "dark",
						placement: "bottom",
						size: "small",
						"icon-orientation": "horizontal",
						"data-test-id": "hidden-items-menu",
						onVisibleChange: onHiddenMenuVisibleChange,
						onAction: emitItemSelected,
						onItemMouseup: onHiddenItemMouseUp
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), {
							bold: true,
							class: normalizeClass(_ctx.$style.dots)
						}, {
							default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("...", -1)])]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}, 8, [
						"actions",
						"loading",
						"loading-row-count",
						"disabled",
						"class",
						"popper-class",
						"trigger"
					])], 2)) : (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						"popper-class": _ctx.$style.tooltip,
						disabled: dropdownDisabled.value,
						trigger: __props.hiddenItemsTrigger,
						placement: "bottom",
						onBeforeShow: handleTooltipShow,
						onHide: handleTooltipClose
					}, {
						content: withCtx(() => [isLoadingHiddenItems.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style["tooltip-loading"])
						}, [createVNode(unref(N8nLoading_default), {
							rows: 1,
							loading: isLoadingHiddenItems.value,
							animated: "",
							variant: "p",
							"shrink-last": false
						}, null, 8, ["loading"])], 2)) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.tooltipContent)
						}, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nText_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(loadedHiddenItems.value.map((item) => item.label).join(" / ")), 1)]),
							_: 1
						})])], 2))]),
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style["tooltip-ellipsis"]) }, "...", 2)]),
						_: 1
					}, 8, [
						"popper-class",
						"disabled",
						"trigger"
					]))], 2)) : createCommentVNode("", true),
					showEllipsis.value ? (openBlock(), createElementBlock("li", {
						key: 2,
						class: normalizeClass(_ctx.$style.separator)
					}, toDisplayString(__props.separator), 3)) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
						return openBlock(), createElementBlock(Fragment, { key: item.id }, [createBaseVNode("li", {
							class: normalizeClass({
								[_ctx.$style.item]: true,
								[_ctx.$style.current]: props.highlightLastItem && __props.items.length > 1 && index === __props.items.length - 1,
								[_ctx.$style.dragging]: props.dragActive
							}),
							title: item.label,
							"data-resourceid": item.id,
							"data-test-id": "breadcrumbs-item",
							"data-target": "folder-breadcrumb-item",
							onClick: (event) => emitItemSelected(item.id, event),
							onMouseenter: ($event) => emitItemHover(item.id),
							onMouseup: ($event) => onItemMouseUp(item)
						}, [item.href ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 0,
							to: item.href,
							theme: "text"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
							_: 2
						}, 1032, ["to"])) : (openBlock(), createBlock(unref(N8nText_default), { key: 1 }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
							_: 2
						}, 1024))], 42, _hoisted_2), index !== __props.items.length - 1 ? (openBlock(), createElementBlock("li", {
							key: 0,
							class: normalizeClass(_ctx.$style.separator)
						}, toDisplayString(__props.separator), 3)) : createCommentVNode("", true)], 64);
					}), 128))
				], 2),
				renderSlot(_ctx.$slots, "append")
			], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nBreadcrumbs/Breadcrumbs.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_16eie_388";
var small = "_small_16eie_392";
var border = "_border_16eie_396";
var list = "_list_16eie_401";
var item = "_item_16eie_407";
var dragging = "_dragging_16eie_412";
var current = "_current_16eie_428";
var ellipsis = "_ellipsis_16eie_432";
var dots = "_dots_16eie_432";
var disabled = "_disabled_16eie_438";
var tooltip = "_tooltip_16eie_433";
var separator = "_separator_16eie_523";
var medium = "_medium_16eie_528";
var shimmer = "_shimmer_16eie_1";
var spin = "_spin_16eie_1";
var opacityPulse = "_opacityPulse_16eie_1";
var popoverIn = "_popoverIn_16eie_1";
var fadeIn = "_fadeIn_16eie_1";
var collapsibleSlideDown = "_collapsibleSlideDown_16eie_1";
var collapsibleSlideUp = "_collapsibleSlideUp_16eie_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_16eie_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_16eie_1";
var blurSwapIn = "_blurSwapIn_16eie_1";
var blurSwapOut = "_blurSwapOut_16eie_1";
var pulseGlow = "_pulseGlow_16eie_1";
var pulseGlowDelayed = "_pulseGlowDelayed_16eie_1";
var fade = "_fade_16eie_1";
var fadeInUp = "_fadeInUp_16eie_1";
var fadeInDown = "_fadeInDown_16eie_1";
var fadeInLeft = "_fadeInLeft_16eie_1";
var fadeInRight = "_fadeInRight_16eie_1";
var fadeOut = "_fadeOut_16eie_1";
var fadeOutDown = "_fadeOutDown_16eie_1";
var fadeOutUp = "_fadeOutUp_16eie_1";
var fadeOutLeft = "_fadeOutLeft_16eie_1";
var fadeOutRight = "_fadeOutRight_16eie_1";
var ping = "_ping_16eie_1";
var blinkBackground = "_blinkBackground_16eie_1";
var typingBlink = "_typingBlink_16eie_1";
var Breadcrumbs_vue_vue_type_style_index_0_lang_module_default = {
	container,
	small,
	border,
	list,
	item,
	dragging,
	current,
	ellipsis,
	dots,
	"tooltip-ellipsis": "_tooltip-ellipsis_16eie_433",
	disabled,
	"hidden-items-menu": "_hidden-items-menu_16eie_450",
	"hidden-items-menu-popper": "_hidden-items-menu-popper_16eie_455",
	"tooltip-loading": "_tooltip-loading_16eie_471",
	tooltip,
	separator,
	medium,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_16eie_1",
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
//#region ../@n8n/design-system/src/components/N8nBreadcrumbs/index.ts
var N8nBreadcrumbs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Breadcrumbs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Breadcrumbs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nBreadcrumbs_default as t };
