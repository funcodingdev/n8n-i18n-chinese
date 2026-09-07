import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, P as getCurrentInstance, S as computed, T as createCommentVNode, U as mergeProps, _ as Fragment, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-B6I8WRBF.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { n as Primitive } from "./VisuallyHidden-lv4qVqRn.js";
import { t as DropdownMenu_default } from "./DropdownMenu-Dut73qNY.js";
import { n as truncateBeforeLast } from "./truncate-B0m9bkui.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as ActionPill_default } from "./ActionPill-2pTxKMMA.js";
//#region ../@n8n/design-system/src/components/N8nAiModelSelectorDropdown/AiModelSelectorDropdown.vue?vue&type=script&setup=true&lang.ts
var MAX_SELECTED_NAME_CHARS = 30;
/**
* Model lists are long, so the provider sub-menus get twice the shared cap.
* Applies to every consumer of this dropdown, which is why it is set here
* rather than passed in per call site.
*/
var SUB_MENU_MAX_HEIGHT = "calc(var(--spacing--5xl) * 2)";
var AiModelSelectorDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiModelSelectorDropdown",
	props: {
		items: {},
		selectedLabel: {},
		selectedCredentialName: {},
		credentialsMissing: {
			type: Boolean,
			default: false
		},
		credentialsMissingLabel: {},
		noMatchLabel: {},
		showBorder: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		dataTestId: {},
		credentialDataTestId: {}
	},
	emits: ["select", "search"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const dropdownRef = useTemplateRef("dropdownRef");
		const $style = useCssModule();
		const instance = getCurrentInstance();
		const { t } = useI18n();
		const resolvedCredentialsMissingLabel = computed(() => __props.credentialsMissingLabel ?? t("aiModelSelector.credentialsMissing"));
		const hasSearchListener = computed(() => Boolean(instance?.vnode.props?.onSearch));
		const searchListenerAttrs = computed(() => hasSearchListener.value && !__props.disabled ? { onSearch: (query) => emit("search", query) } : {});
		function handleSelect(id) {
			if (__props.disabled) return;
			emit("select", id);
		}
		__expose({ open: () => {
			if (!__props.disabled) dropdownRef.value?.open();
		} });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(DropdownMenu_default, mergeProps({
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: __props.items,
				"empty-text": __props.noMatchLabel
			}, searchListenerAttrs.value, {
				placement: "bottom-start",
				teleported: "",
				searchable: "",
				width: "var(--reka-dropdown-menu-trigger-width)",
				"sub-menu-max-height": SUB_MENU_MAX_HEIGHT,
				onSelect: handleSelect
			}), {
				trigger: withCtx(() => [createVNode(unref(Primitive), {
					as: "button",
					class: normalizeClass([unref($style).dropdownButton, !__props.showBorder && unref($style).dropdownButtonBorderless]),
					disabled: __props.disabled,
					"data-test-id": __props.dataTestId
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).selected) }, [renderSlot(_ctx.$slots, "trigger-leading", { ui: { class: unref($style).icon } }), createBaseVNode("div", { class: normalizeClass(unref($style).selectedLabel) }, [createVNode(unref(N8nText_default), {
						bold: "",
						truncate: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(__props.selectedLabel, MAX_SELECTED_NAME_CHARS)), 1)]),
						_: 1
					}), __props.credentialsMissing ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						theme: "danger",
						size: "small",
						class: normalizeClass(unref($style).credsBadge)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(resolvedCredentialsMissingLabel.value), 1)]),
						_: 1
					}, 8, ["class"])) : __props.selectedCredentialName ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						bold: "",
						color: "text-light",
						"data-test-id": __props.credentialDataTestId
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(truncateBeforeLast)(__props.selectedCredentialName, MAX_SELECTED_NAME_CHARS)), 1)]),
						_: 1
					}, 8, ["data-test-id"])) : createCommentVNode("", true)], 2)], 2), createVNode(unref(N8nIcon_default), {
						class: normalizeClass(unref($style).chevron),
						icon: "chevron-down",
						size: "medium"
					}, null, 8, ["class"])]),
					_: 3
				}, 8, [
					"class",
					"disabled",
					"data-test-id"
				])]),
				"item-leading": withCtx(({ item, ui }) => [renderSlot(_ctx.$slots, "item-leading", {
					item,
					ui
				}), !item.data && item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: item.icon.value,
					class: normalizeClass(ui.class),
					color: "text-light",
					size: "large"
				}, null, 8, ["icon", "class"])) : !item.data && item.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass([unref($style).emoji, ui.class])
				}, toDisplayString(item.icon.value), 3)) : createCommentVNode("", true)]),
				"item-label": withCtx(({ item, ui }) => [item.data?.parts ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([unref($style).flattenedLabel, ui.class])
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.data.parts, (part, index) => {
					return openBlock(), createElementBlock(Fragment, { key: index }, [index > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						class: normalizeClass(unref($style).separator)
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-right",
							size: "small"
						})]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
						size: "medium",
						color: index === item.data.parts.length - 1 ? "text-dark" : "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(part), 1)]),
						_: 2
					}, 1032, ["color"])], 64);
				}), 128))], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([unref($style).labelWithBadge, ui.class])
				}, [
					createVNode(unref(N8nText_default), {
						size: "medium",
						color: item.disabled ? "text-xlight" : "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
						_: 2
					}, 1032, ["color"]),
					item.data?.badgeLabel ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(unref($style).badge),
						theme: "secondary",
						size: "xsmall",
						"show-border": false
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.data.badgeLabel), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true),
					item.data?.actionPill ? (openBlock(), createBlock(ActionPill_default, {
						key: 1,
						size: "small",
						type: item.data.actionPill.type ?? "default",
						text: item.data.actionPill.text
					}, null, 8, ["type", "text"])) : createCommentVNode("", true)
				], 2))]),
				"item-trailing": withCtx(({ item, ui }) => [item.data?.description ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(truncateBeforeLast)(item.data.description, 320, 0),
					class: normalizeClass(ui.class),
					placement: "right",
					teleported: ""
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "info",
						size: "medium",
						color: "text-light",
						class: normalizeClass(unref($style).infoIcon)
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content", "class"])) : createCommentVNode("", true)]),
				_: 3
			}, 16, ["items", "empty-text"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiModelSelectorDropdown/AiModelSelectorDropdown.vue?vue&type=style&index=0&lang.module.scss
var dropdownButton = "_dropdownButton_z9pta_388";
var dropdownButtonBorderless = "_dropdownButtonBorderless_z9pta_419";
var selected = "_selected_z9pta_427";
var selectedLabel = "_selectedLabel_z9pta_438";
var chevron = "_chevron_z9pta_448";
var icon = "_icon_z9pta_452";
var infoIcon = "_infoIcon_z9pta_457";
var emoji = "_emoji_z9pta_462";
var flattenedLabel = "_flattenedLabel_z9pta_467";
var separator = "_separator_z9pta_476";
var labelWithBadge = "_labelWithBadge_z9pta_482";
var badge = "_badge_z9pta_495";
var credsBadge = "_credsBadge_z9pta_499";
var shimmer = "_shimmer_z9pta_1";
var spin = "_spin_z9pta_1";
var opacityPulse = "_opacityPulse_z9pta_1";
var popoverIn = "_popoverIn_z9pta_1";
var fadeIn = "_fadeIn_z9pta_1";
var collapsibleSlideDown = "_collapsibleSlideDown_z9pta_1";
var collapsibleSlideUp = "_collapsibleSlideUp_z9pta_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_z9pta_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_z9pta_1";
var blurSwapIn = "_blurSwapIn_z9pta_1";
var blurSwapOut = "_blurSwapOut_z9pta_1";
var pulseGlow = "_pulseGlow_z9pta_1";
var pulseGlowDelayed = "_pulseGlowDelayed_z9pta_1";
var fade = "_fade_z9pta_1";
var fadeInUp = "_fadeInUp_z9pta_1";
var fadeInDown = "_fadeInDown_z9pta_1";
var fadeInLeft = "_fadeInLeft_z9pta_1";
var fadeInRight = "_fadeInRight_z9pta_1";
var fadeOut = "_fadeOut_z9pta_1";
var fadeOutDown = "_fadeOutDown_z9pta_1";
var fadeOutUp = "_fadeOutUp_z9pta_1";
var fadeOutLeft = "_fadeOutLeft_z9pta_1";
var fadeOutRight = "_fadeOutRight_z9pta_1";
var ping = "_ping_z9pta_1";
var blinkBackground = "_blinkBackground_z9pta_1";
var typingBlink = "_typingBlink_z9pta_1";
var AiModelSelectorDropdown_vue_vue_type_style_index_0_lang_module_default = {
	dropdownButton,
	dropdownButtonBorderless,
	selected,
	selectedLabel,
	chevron,
	icon,
	infoIcon,
	emoji,
	flattenedLabel,
	separator,
	labelWithBadge,
	badge,
	credsBadge,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_z9pta_1",
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
var AiModelSelectorDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiModelSelectorDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiModelSelectorDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AiModelSelectorDropdown_default as t };
