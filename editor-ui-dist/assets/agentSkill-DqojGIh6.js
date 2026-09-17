import { $ as openBlock, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-6YtyWN3Q.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-B3IH6E0U.js";
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
		warning: {
			type: Boolean,
			default: false
		},
		warningReasons: { default: () => [] },
		clickable: {
			type: Boolean,
			default: true
		}
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const reasons = computed(() => props.invalid ? props.invalidReasons : props.warningReasons);
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
						[_ctx.$style.warning]: props.warning && !props.invalid,
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
				props.invalid || props.warning ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					disabled: reasons.value.length === 0,
					placement: "top"
				}, {
					content: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(reasons.value, (reason) => {
						return openBlock(), createElementBlock("div", { key: reason }, toDisplayString(reason), 1);
					}), 128))]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: 14,
						class: normalizeClass([_ctx.$style.alertIcon, { [_ctx.$style.warningIcon]: !props.invalid }]),
						"data-testid": props.invalid ? "agent-chip-invalid-icon" : "agent-chip-warning-icon"
					}, null, 8, ["class", "data-testid"])]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChipButton.vue?vue&type=style&index=0&lang.module.scss
var chip = "_chip_knqly_388";
var invalid = "_invalid_knqly_415";
var warning = "_warning_knqly_419";
var alertIcon = "_alertIcon_knqly_423";
var warningIcon = "_warningIcon_knqly_427";
var nonClickable = "_nonClickable_knqly_431";
var suggestion = "_suggestion_knqly_435";
var suggestionSlideIn = "_suggestionSlideIn_knqly_1";
var active = "_active_knqly_449";
var iconWrapper = "_iconWrapper_knqly_463";
var icon = "_icon_knqly_463";
var suggestionIcon = "_suggestionIcon_knqly_473";
var text = "_text_knqly_485";
var shimmer = "_shimmer_knqly_1";
var spin = "_spin_knqly_1";
var opacityPulse = "_opacityPulse_knqly_1";
var popoverIn = "_popoverIn_knqly_1";
var fadeIn = "_fadeIn_knqly_1";
var collapsibleSlideDown = "_collapsibleSlideDown_knqly_1";
var collapsibleSlideUp = "_collapsibleSlideUp_knqly_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_knqly_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_knqly_1";
var blurSwapIn = "_blurSwapIn_knqly_1";
var blurSwapOut = "_blurSwapOut_knqly_1";
var pulseGlow = "_pulseGlow_knqly_1";
var pulseGlowDelayed = "_pulseGlowDelayed_knqly_1";
var fade = "_fade_knqly_1";
var fadeInUp = "_fadeInUp_knqly_1";
var fadeInDown = "_fadeInDown_knqly_1";
var fadeInLeft = "_fadeInLeft_knqly_1";
var fadeInRight = "_fadeInRight_knqly_1";
var fadeOut = "_fadeOut_knqly_1";
var fadeOutDown = "_fadeOutDown_knqly_1";
var fadeOutUp = "_fadeOutUp_knqly_1";
var fadeOutLeft = "_fadeOutLeft_knqly_1";
var fadeOutRight = "_fadeOutRight_knqly_1";
var ping = "_ping_knqly_1";
var blinkBackground = "_blinkBackground_knqly_1";
var typingBlink = "_typingBlink_knqly_1";
var AgentChipButton_vue_vue_type_style_index_0_lang_module_default = {
	chip,
	"default": "_default_knqly_406",
	invalid,
	warning,
	alertIcon,
	warningIcon,
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
	"skeleton-pulse": "_skeleton-pulse_knqly_1",
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
