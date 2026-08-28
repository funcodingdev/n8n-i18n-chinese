import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, It as ref, N as defineComponent, O as createSlots, P as getCurrentInstance, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, c as useCssModule, h as withModifiers, it as renderSlot, j as createVNode, lt as useAttrs, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-CBepoSka.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nIconButton_default } from "./N8nIconButton-CMP0ih80.js";
import { t as DropdownMenu_default } from "./DropdownMenu-DPWQUABM.js";
import { t as N8nBadge_default } from "./N8nBadge-DOliSzFF.js";
import { t as N8nKeyboardShortcut_default } from "./N8nKeyboardShortcut-vmE479wm.js";
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
var ActionDropdown_vue_vue_type_style_index_0_lang_module_default = {
	actionDropdownContainer: "_actionDropdownContainer_184ya_125",
	activator: "_activator_184ya_129",
	itemContainer: "_itemContainer_184ya_133",
	disabled: "_disabled_184ya_145",
	shortcut: "_shortcut_184ya_145",
	destructive: "_destructive_184ya_155",
	icon: "_icon_184ya_159",
	label: "_label_184ya_169",
	checkIcon: "_checkIcon_184ya_174",
	clickableBadge: "_clickableBadge_184ya_183"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nActionDropdown/index.ts
var N8nActionDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ActionDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ActionDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nActionDropdown_default as t };
