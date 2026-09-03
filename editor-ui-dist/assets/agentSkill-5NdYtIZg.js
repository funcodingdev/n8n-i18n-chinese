import { $ as openBlock, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
//#region src/features/agents/components/AgentChipButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["disabled"];
var AgentChipButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChipButton",
	props: {
		icon: {},
		disabled: {
			type: Boolean,
			default: false
		},
		variant: { default: "default" },
		active: {
			type: Boolean,
			default: false
		},
		invalid: {
			type: Boolean,
			default: false
		},
		invalidReasons: { default: () => [] },
		clickable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				type: "button",
				class: normalizeClass([
					_ctx.$style.chip,
					props.variant === "suggestion" ? _ctx.$style.suggestion : _ctx.$style.default,
					{
						[_ctx.$style.active]: props.active,
						[_ctx.$style.invalid]: props.invalid,
						[_ctx.$style.nonClickable]: !props.clickable
					}
				]),
				disabled: props.disabled,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
			}, [
				props.icon || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.iconWrapper)
				}, [renderSlot(_ctx.$slots, "icon", {}, () => [props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: props.icon,
					size: 16,
					class: normalizeClass([_ctx.$style.icon, { [_ctx.$style.suggestionIcon]: props.variant === "suggestion" }])
				}, null, 8, ["icon", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.text)
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, ["class"]),
				props.invalid ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					disabled: props.invalidReasons.length === 0,
					placement: "top"
				}, {
					content: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.invalidReasons, (reason) => {
						return openBlock(), createElementBlock("div", { key: reason }, toDisplayString(reason), 1);
					}), 128))]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: 14,
						class: normalizeClass(_ctx.$style.invalidIcon),
						"data-testid": "agent-chip-invalid-icon"
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChipButton.vue?vue&type=style&index=0&lang.module.scss
var chip = "_chip_1g0y8_388";
var invalid = "_invalid_1g0y8_415";
var invalidIcon = "_invalidIcon_1g0y8_419";
var nonClickable = "_nonClickable_1g0y8_423";
var suggestion = "_suggestion_1g0y8_427";
var suggestionSlideIn = "_suggestionSlideIn_1g0y8_1";
var active = "_active_1g0y8_441";
var iconWrapper = "_iconWrapper_1g0y8_455";
var icon = "_icon_1g0y8_455";
var suggestionIcon = "_suggestionIcon_1g0y8_465";
var text = "_text_1g0y8_477";
var shimmer = "_shimmer_1g0y8_1";
var spin = "_spin_1g0y8_1";
var opacityPulse = "_opacityPulse_1g0y8_1";
var popoverIn = "_popoverIn_1g0y8_1";
var fadeIn = "_fadeIn_1g0y8_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1g0y8_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1g0y8_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1g0y8_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1g0y8_1";
var blurSwapIn = "_blurSwapIn_1g0y8_1";
var blurSwapOut = "_blurSwapOut_1g0y8_1";
var pulseGlow = "_pulseGlow_1g0y8_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1g0y8_1";
var fade = "_fade_1g0y8_1";
var fadeInUp = "_fadeInUp_1g0y8_1";
var fadeInDown = "_fadeInDown_1g0y8_1";
var fadeInLeft = "_fadeInLeft_1g0y8_1";
var fadeInRight = "_fadeInRight_1g0y8_1";
var fadeOut = "_fadeOut_1g0y8_1";
var fadeOutDown = "_fadeOutDown_1g0y8_1";
var fadeOutUp = "_fadeOutUp_1g0y8_1";
var fadeOutLeft = "_fadeOutLeft_1g0y8_1";
var fadeOutRight = "_fadeOutRight_1g0y8_1";
var ping = "_ping_1g0y8_1";
var blinkBackground = "_blinkBackground_1g0y8_1";
var typingBlink = "_typingBlink_1g0y8_1";
var AgentChipButton_vue_vue_type_style_index_0_lang_module_default = {
	chip,
	"default": "_default_1g0y8_406",
	invalid,
	invalidIcon,
	nonClickable,
	suggestion,
	suggestionSlideIn,
	active,
	iconWrapper,
	icon,
	suggestionIcon,
	text,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1g0y8_1",
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
var AgentChipButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChipButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChipButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/utils/agentSkill.ts
function normalizeAgentSkillForSave(skill, availableToolNames) {
	if (!availableToolNames || !skill.allowedTools?.length) return skill;
	const available = new Set(availableToolNames);
	const allowedTools = skill.allowedTools.filter((toolName) => available.has(toolName));
	const { allowedTools: _allowedTools, ...skillWithoutAllowedTools } = skill;
	return allowedTools.length > 0 ? {
		...skill,
		allowedTools
	} : skillWithoutAllowedTools;
}
//#endregion
export { AgentChipButton_default as n, normalizeAgentSkillForSave as t };
