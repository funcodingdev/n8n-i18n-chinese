import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { n as CollapsibleContent_default, r as CollapsibleRoot_default, t as CollapsibleTrigger_default } from "./CollapsibleTrigger-DKE_Sw72.js";
//#region ../@n8n/design-system/src/components/N8nCollapsiblePanel/CollapsiblePanel.vue?vue&type=script&setup=true&lang.ts
var CollapsiblePanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CollapsiblePanel",
	props: {
		title: { default: "" },
		modelValue: {
			type: Boolean,
			default: true
		},
		showActionsOnHover: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		disableAnimation: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const isOpen = computed({
			get: () => props.modelValue,
			set: (value) => emit("update:modelValue", value)
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), {
				open: isOpen.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isOpen.value = $event),
				disabled: __props.disabled,
				"unmount-on-hide": false,
				class: normalizeClass(_ctx.$style.collapsiblePanel)
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(CollapsibleTrigger_default), { class: normalizeClass(_ctx.$style.trigger) }, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "chevron-down",
						size: 14,
						class: normalizeClass([_ctx.$style.chevron, { [_ctx.$style.chevronOpen]: isOpen.value }])
					}, null, 8, ["class"]), __props.title || _ctx.$slots.title ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.title)
					}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(__props.title), 1)])], 2)) : createCommentVNode("", true)]),
					_: 3
				}, 8, ["class"]), _ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.actions, { [_ctx.$style.actionsAlwaysVisible]: !__props.showActionsOnHover }])
				}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)], 2), createVNode(unref(CollapsibleContent_default), { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.noAnimation]: __props.disableAnimation }]) }, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, ["class"])]),
				_: 3
			}, 8, [
				"open",
				"disabled",
				"class"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nCollapsiblePanel/CollapsiblePanel.vue?vue&type=style&index=0&lang.module.scss
var collapsiblePanel = "_collapsiblePanel_1p6fn_388";
var chevron = "_chevron_1p6fn_404";
var chevronOpen = "_chevronOpen_1p6fn_412";
var header = "_header_1p6fn_416";
var trigger = "_trigger_1p6fn_424";
var title = "_title_1p6fn_439";
var actions = "_actions_1p6fn_448";
var actionsAlwaysVisible = "_actionsAlwaysVisible_1p6fn_460";
var dangerAction = "_dangerAction_1p6fn_467";
var content = "_content_1p6fn_487";
var collapsibleSlideDown = "_collapsibleSlideDown_1p6fn_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1p6fn_1";
var noAnimation = "_noAnimation_1p6fn_513";
var shimmer = "_shimmer_1p6fn_1";
var spin = "_spin_1p6fn_1";
var opacityPulse = "_opacityPulse_1p6fn_1";
var popoverIn = "_popoverIn_1p6fn_1";
var fadeIn = "_fadeIn_1p6fn_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1p6fn_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1p6fn_1";
var blurSwapIn = "_blurSwapIn_1p6fn_1";
var blurSwapOut = "_blurSwapOut_1p6fn_1";
var pulseGlow = "_pulseGlow_1p6fn_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1p6fn_1";
var fade = "_fade_1p6fn_1";
var fadeInUp = "_fadeInUp_1p6fn_1";
var fadeInDown = "_fadeInDown_1p6fn_1";
var fadeInLeft = "_fadeInLeft_1p6fn_1";
var fadeInRight = "_fadeInRight_1p6fn_1";
var fadeOut = "_fadeOut_1p6fn_1";
var fadeOutDown = "_fadeOutDown_1p6fn_1";
var fadeOutUp = "_fadeOutUp_1p6fn_1";
var fadeOutLeft = "_fadeOutLeft_1p6fn_1";
var fadeOutRight = "_fadeOutRight_1p6fn_1";
var ping = "_ping_1p6fn_1";
var blinkBackground = "_blinkBackground_1p6fn_1";
var typingBlink = "_typingBlink_1p6fn_1";
var CollapsiblePanel_vue_vue_type_style_index_0_lang_module_default = {
	collapsiblePanel,
	chevron,
	chevronOpen,
	header,
	trigger,
	title,
	actions,
	actionsAlwaysVisible,
	dangerAction,
	content,
	collapsibleSlideDown,
	collapsibleSlideUp,
	noAnimation,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1p6fn_1",
	opacityPulse,
	popoverIn,
	fadeIn,
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
//#region ../@n8n/design-system/src/components/N8nCollapsiblePanel/index.ts
var N8nCollapsiblePanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CollapsiblePanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CollapsiblePanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nCollapsiblePanel_default as t };
