import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, P as getCurrentInstance, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, h as withModifiers, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as DropdownMenu_default } from "./DropdownMenu-Dut73qNY.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
//#region ../@n8n/design-system/src/components/N8nActionToggle/ActionToggle.vue?vue&type=script&setup=true&lang.ts
var ActionToggle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nActionToggle",
	__name: "ActionToggle",
	props: {
		actions: { default: () => [] },
		placement: { default: "bottom" },
		theme: { default: "default" },
		iconOrientation: { default: "vertical" },
		loading: {
			type: Boolean,
			default: false
		},
		loadingRowCount: { default: 3 },
		disabled: {
			type: Boolean,
			default: false
		},
		popperClass: {},
		trigger: { default: "click" }
	},
	emits: [
		"action",
		"visible-change",
		"update:modelValue",
		"item-mouseup"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const dropdownRef = ref(null);
		const dropdownId = `n8n-action-toggle-dropdown-${getCurrentInstance()?.uid ?? 0}`;
		const items = computed(() => {
			return props.actions.map((action) => ({
				id: action.id ?? action.value,
				testId: `action-${String(action.id ?? action.value)}`,
				label: action.label,
				disabled: action.disabled,
				data: action
			}));
		});
		const onAction = (value) => emit("action", value);
		const onOpenChange = (open) => {
			emit("visible-change", open);
			emit("update:modelValue", open);
		};
		const onItemMouseUp = (item) => {
			if (item.data ?? props.actions.find((candidate) => (candidate.id ?? candidate.value) === item.id)) emit("item-mouseup", item);
			dropdownRef.value?.close();
		};
		const openActionToggle = (isOpen) => {
			if (props.disabled) return;
			if (isOpen) dropdownRef.value?.open();
			else dropdownRef.value?.close();
		};
		__expose({ openActionToggle });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass(["action-toggle", _ctx.$style.container]),
				"data-test-id": "action-toggle",
				onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop", "prevent"]))
			}, [createVNode(DropdownMenu_default, {
				id: dropdownId,
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: items.value,
				"content-test-id": "action-toggle-dropdown",
				modal: false,
				placement: __props.placement,
				disabled: __props.disabled,
				trigger: __props.trigger,
				loading: __props.loading,
				"loading-item-count": __props.loadingRowCount,
				"extra-popper-class": __props.popperClass,
				onSelect: onAction,
				"onUpdate:modelValue": onOpenChange,
				onItemMouseup: onItemMouseUp
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createVNode(unref(N8nIconButton_default), {
					variant: "ghost",
					class: normalizeClass(_ctx.$style[__props.theme]),
					icon: __props.iconOrientation === "horizontal" ? "ellipsis" : "ellipsis-vertical",
					size: "small",
					disabled: __props.disabled,
					role: "button",
					"aria-controls": dropdownId
				}, null, 8, [
					"class",
					"icon",
					"disabled"
				])])]),
				loading: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.loadingRowCount, (i) => {
					return openBlock(), createBlock(unref(N8nLoading_default), {
						key: i,
						class: normalizeClass(_ctx.$style["loading-item"]),
						animated: "",
						variant: "text"
					}, null, 8, ["class"]);
				}), 128))]),
				"item-label": withCtx((slotProps) => [slotProps.item.data?.tooltip ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: slotProps.item.data.tooltip,
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(slotProps.ui?.class),
						color: slotProps.item.disabled ? "text-xlight" : "text-dark",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(slotProps.item.label), 1)]),
						_: 2
					}, 1032, ["class", "color"])]),
					_: 2
				}, 1032, ["content"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(slotProps.ui?.class),
					title: slotProps.item.label.length >= 20 ? slotProps.item.label : void 0,
					color: slotProps.item.disabled ? "text-xlight" : "text-dark",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(slotProps.item.label), 1)]),
					_: 2
				}, 1032, [
					"class",
					"title",
					"color"
				]))]),
				"item-trailing": withCtx((slotProps) => [slotProps.item.data?.type === "external-link" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "external-link",
					size: "xsmall",
					color: "text-base"
				})) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"items",
				"placement",
				"disabled",
				"trigger",
				"loading",
				"loading-item-count",
				"extra-popper-class"
			])], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nActionToggle/ActionToggle.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1icyx_388";
var trigger = "_trigger_1icyx_392";
var dark = "_dark_1icyx_399";
var shimmer = "_shimmer_1icyx_1";
var spin = "_spin_1icyx_1";
var opacityPulse = "_opacityPulse_1icyx_1";
var popoverIn = "_popoverIn_1icyx_1";
var fadeIn = "_fadeIn_1icyx_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1icyx_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1icyx_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1icyx_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1icyx_1";
var blurSwapIn = "_blurSwapIn_1icyx_1";
var blurSwapOut = "_blurSwapOut_1icyx_1";
var pulseGlow = "_pulseGlow_1icyx_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1icyx_1";
var fade = "_fade_1icyx_1";
var fadeInUp = "_fadeInUp_1icyx_1";
var fadeInDown = "_fadeInDown_1icyx_1";
var fadeInLeft = "_fadeInLeft_1icyx_1";
var fadeInRight = "_fadeInRight_1icyx_1";
var fadeOut = "_fadeOut_1icyx_1";
var fadeOutDown = "_fadeOutDown_1icyx_1";
var fadeOutUp = "_fadeOutUp_1icyx_1";
var fadeOutLeft = "_fadeOutLeft_1icyx_1";
var fadeOutRight = "_fadeOutRight_1icyx_1";
var ping = "_ping_1icyx_1";
var blinkBackground = "_blinkBackground_1icyx_1";
var typingBlink = "_typingBlink_1icyx_1";
var ActionToggle_vue_vue_type_style_index_0_lang_module_default = {
	container,
	trigger,
	dark,
	"loading-item": "_loading-item_1icyx_406",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1icyx_1",
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
//#region ../@n8n/design-system/src/components/N8nActionToggle/index.ts
var N8nActionToggle_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ActionToggle_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionToggle_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nActionToggle_default as t };
