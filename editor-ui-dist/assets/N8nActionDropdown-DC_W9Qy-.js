import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, It as ref, N as defineComponent, O as createSlots, P as getCurrentInstance, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, c as useCssModule, h as withModifiers, it as renderSlot, j as createVNode, lt as useAttrs, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as DropdownMenu_default } from "./DropdownMenu-Dut73qNY.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as N8nKeyboardShortcut_default } from "./N8nKeyboardShortcut-DZFKzw3w.js";
//#region ../@n8n/design-system/src/components/N8nActionDropdown/ActionDropdown.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var ActionDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ActionDropdown",
	props: {
		items: {},
		placement: { default: "bottom" },
		activatorIcon: { default: "ellipsis" },
		activatorSize: { default: "medium" },
		activatorIconSize: {},
		iconSize: { default: "medium" },
		trigger: { default: "click" },
		teleported: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		extraPopperClass: {},
		maxHeight: { default: "" },
		width: {},
		modal: {
			type: Boolean,
			default: true
		}
	},
	emits: [
		"select",
		"visibleChange",
		"badge-click"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const { t } = useI18n();
		const props = __props;
		const $style = useCssModule();
		const attrs = useAttrs();
		const dropdownTestId = computed(() => {
			const testId = attrs["data-test-id"];
			return typeof testId === "string" ? testId : void 0;
		});
		const containerAttrs = computed(() => {
			const { "data-test-id": _dataTestId, ...rest } = attrs;
			return rest;
		});
		const getItemTestId = (id) => {
			if (dropdownTestId.value) return `${dropdownTestId.value}-item-${id}`;
			return `action-${id}`;
		};
		const toMenuItem = (item) => ({
			id: item.id,
			testId: item.testId ?? getItemTestId(item.id),
			label: item.label,
			icon: item.icon ? {
				type: "icon",
				value: item.icon
			} : void 0,
			disabled: item.disabled,
			divided: item.divided,
			class: getItemClasses(item),
			data: item,
			children: item.children?.map(toMenuItem)
		});
		const items = computed(() => {
			return props.items.map(toMenuItem);
		});
		const emit = __emit;
		const onSelect = (action) => emit("select", action);
		const onOpenChange = (open) => emit("visibleChange", open);
		const onBadgeClick = (action) => emit("badge-click", action);
		const dropdownRef = ref(null);
		const dropdownId = `n8n-action-dropdown-${getCurrentInstance()?.uid ?? 0}`;
		const open = () => dropdownRef.value?.open();
		const close = () => dropdownRef.value?.close();
		__expose({
			open,
			close
		});
		const getItemClasses = (item) => {
			return {
				[$style.itemContainer]: true,
				[$style.disabled]: !!item.disabled,
				[$style.destructive]: item.variant === "destructive",
				[$style.hasCustomStyling]: item.customClass !== void 0,
				...item.customClass !== void 0 ? { [item.customClass]: true } : {}
			};
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps(containerAttrs.value, { class: ["action-dropdown-container", unref($style).actionDropdownContainer] }), [createVNode(DropdownMenu_default, {
				id: dropdownId,
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: items.value,
				"data-test-id": dropdownTestId.value,
				"content-test-id": dropdownTestId.value,
				placement: __props.placement,
				trigger: __props.trigger,
				disabled: __props.disabled,
				teleported: __props.teleported,
				modal: __props.modal,
				"extra-popper-class": `${__props.extraPopperClass ?? ""}`,
				"max-height": __props.maxHeight,
				width: __props.width,
				onSelect,
				"onUpdate:modelValue": onOpenChange
			}, createSlots({
				trigger: withCtx(() => [_ctx.$slots.activator ? renderSlot(_ctx.$slots, "activator", { key: 0 }) : (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 1,
					variant: "ghost",
					class: normalizeClass(unref($style).activator),
					size: __props.activatorSize,
					"icon-size": __props.activatorIconSize,
					icon: __props.activatorIcon,
					disabled: __props.disabled,
					"aria-label": unref(t)("actionDropdown.activator"),
					"aria-controls": dropdownId
				}, null, 8, [
					"class",
					"size",
					"icon-size",
					"icon",
					"disabled",
					"aria-label"
				]))]),
				"item-leading": withCtx((slotProps) => [slotProps.item.icon?.type === "icon" ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([slotProps.ui.class, unref($style).icon])
				}, [createVNode(unref(N8nIcon_default), {
					icon: slotProps.item.icon.value,
					size: __props.iconSize
				}, null, 8, ["icon", "size"])], 2)) : createCommentVNode("", true)]),
				"item-label": withCtx((slotProps) => [createBaseVNode("span", { class: normalizeClass([slotProps.ui.class, unref($style).label]) }, [renderSlot(_ctx.$slots, "menuItem", normalizeProps(guardReactiveProps(slotProps.item.data)), () => [createTextVNode(toDisplayString(slotProps.item.data?.label ?? slotProps.item.label), 1)])], 2)]),
				"item-trailing": withCtx((slotProps) => [createBaseVNode("span", { class: normalizeClass(slotProps.ui.class) }, [
					slotProps.item.data?.checked ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						class: normalizeClass(unref($style).checkIcon),
						icon: "check",
						size: __props.iconSize
					}, null, 8, ["class", "size"])) : createCommentVNode("", true),
					slotProps.item.data?.badge ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass({ [unref($style).clickableBadge]: !!slotProps.item.data?.disabled }),
						onClick: withModifiers(($event) => slotProps.item.data?.disabled && onBadgeClick(slotProps.item.id), ["stop"])
					}, [createVNode(unref(N8nBadge_default), mergeProps({
						theme: "primary",
						size: "xsmall"
					}, slotProps.item.data.badgeProps), {
						default: withCtx(() => [createTextVNode(toDisplayString(slotProps.item.data.badge), 1)]),
						_: 2
					}, 1040)], 10, _hoisted_1)) : createCommentVNode("", true),
					slotProps.item.data?.shortcut ? (openBlock(), createBlock(unref(N8nKeyboardShortcut_default), mergeProps({ key: 2 }, slotProps.item.data.shortcut, { class: unref($style).shortcut }), null, 16, ["class"])) : createCommentVNode("", true)
				], 2)]),
				_: 2
			}, [_ctx.$slots.footer ? {
				name: "footer",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
				key: "0"
			} : void 0]), 1032, [
				"items",
				"data-test-id",
				"content-test-id",
				"placement",
				"trigger",
				"disabled",
				"teleported",
				"modal",
				"extra-popper-class",
				"max-height",
				"width"
			])], 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nActionDropdown/ActionDropdown.vue?vue&type=style&index=0&lang.module.scss
var actionDropdownContainer = "_actionDropdownContainer_1ng35_388";
var activator = "_activator_1ng35_392";
var itemContainer = "_itemContainer_1ng35_396";
var disabled = "_disabled_1ng35_408";
var shortcut = "_shortcut_1ng35_408";
var destructive = "_destructive_1ng35_418";
var icon = "_icon_1ng35_422";
var label = "_label_1ng35_432";
var checkIcon = "_checkIcon_1ng35_437";
var clickableBadge = "_clickableBadge_1ng35_446";
var shimmer = "_shimmer_1ng35_1";
var spin = "_spin_1ng35_1";
var opacityPulse = "_opacityPulse_1ng35_1";
var popoverIn = "_popoverIn_1ng35_1";
var fadeIn = "_fadeIn_1ng35_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ng35_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ng35_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ng35_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ng35_1";
var blurSwapIn = "_blurSwapIn_1ng35_1";
var blurSwapOut = "_blurSwapOut_1ng35_1";
var pulseGlow = "_pulseGlow_1ng35_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ng35_1";
var fade = "_fade_1ng35_1";
var fadeInUp = "_fadeInUp_1ng35_1";
var fadeInDown = "_fadeInDown_1ng35_1";
var fadeInLeft = "_fadeInLeft_1ng35_1";
var fadeInRight = "_fadeInRight_1ng35_1";
var fadeOut = "_fadeOut_1ng35_1";
var fadeOutDown = "_fadeOutDown_1ng35_1";
var fadeOutUp = "_fadeOutUp_1ng35_1";
var fadeOutLeft = "_fadeOutLeft_1ng35_1";
var fadeOutRight = "_fadeOutRight_1ng35_1";
var ping = "_ping_1ng35_1";
var blinkBackground = "_blinkBackground_1ng35_1";
var typingBlink = "_typingBlink_1ng35_1";
var ActionDropdown_vue_vue_type_style_index_0_lang_module_default = {
	actionDropdownContainer,
	activator,
	itemContainer,
	disabled,
	shortcut,
	destructive,
	icon,
	label,
	checkIcon,
	clickableBadge,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ng35_1",
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
//#region ../@n8n/design-system/src/components/N8nActionDropdown/index.ts
var N8nActionDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ActionDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nActionDropdown_default as t };
