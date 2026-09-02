import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bn as normalizeStyle, bt as withCtx, j as createVNode, n as Transition, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { r as onClickOutside } from "./dist-BKkqSB6h.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Cx8feVUd.js";
import { a as TELEMETRY_EVENT } from "./src-iAlvhgF-.js";
//#region src/features/ai/assistant/components/Agent/creditFormatting.ts
/** Round a (possibly decimal) credit value to 2 decimal places for display. */
function round2(value) {
	return Math.round(value * 100) / 100;
}
//#endregion
//#region src/features/ai/assistant/components/Agent/CreditsSettingsDropdown.vue?vue&type=script&setup=true&lang.ts
var CreditsSettingsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CreditsSettingsDropdown",
	props: {
		creditsRemaining: {},
		creditsQuota: {},
		isLowCredits: { type: Boolean },
		buttonSize: { default: "large" },
		creditsUsed: {}
	},
	emits: ["upgrade-click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const isOpen = ref(false);
		const dropdownRef = ref();
		onClickOutside(dropdownRef, () => {
			isOpen.value = false;
		}, { ignore: [".n8n-tooltip"] });
		const hasCredits = computed(() => {
			return props.creditsQuota !== void 0 && props.creditsRemaining !== void 0;
		});
		const creditsRemainingDisplay = computed(() => Math.max(0, props.creditsRemaining ?? 0));
		const creditsLeftText = computed(() => {
			if (props.creditsRemaining === void 0) return "";
			return i18n.baseText("aiAssistant.builder.settings.creditsLeft", { interpolate: { count: String(round2(creditsRemainingDisplay.value)) } });
		});
		const showThreadCreditsUsed = computed(() => props.creditsUsed !== void 0 && round2(props.creditsUsed) > 0);
		const threadCreditsUsedText = computed(() => {
			if (props.creditsUsed === void 0) return "";
			return i18n.baseText("aiAssistant.builder.settings.threadCreditsUsed", { interpolate: { count: String(round2(props.creditsUsed)) } });
		});
		const progressPercentage = computed(() => {
			if (props.creditsQuota === void 0 || props.creditsRemaining === void 0 || props.creditsQuota === 0) return 0;
			return creditsRemainingDisplay.value / props.creditsQuota * 100;
		});
		const getNextMonth = () => {
			const now = /* @__PURE__ */ new Date();
			return new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		};
		const tooltipContent = computed(() => {
			const date = getNextMonth();
			return i18n.baseText("aiAssistant.builder.settings.creditsTooltip", { interpolate: {
				renewalDate: date,
				expiryDate: date
			} });
		});
		function toggleDropdown() {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_CLICKED_AI_CREDIT_BALANCE, {});
			isOpen.value = !isOpen.value;
		}
		function onGetMoreCredits() {
			emit("upgrade-click");
			isOpen.value = false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				class: normalizeClass(_ctx.$style.wrapper)
			}, [createVNode(unref(N8nButton_default), {
				icon: "circle-dollar-sign",
				variant: "ghost",
				size: props.buttonSize,
				"icon-only": "",
				class: normalizeClass({ [_ctx.$style.active]: isOpen.value }),
				"data-test-id": "credits-dropdown-button",
				onClick: toggleDropdown
			}, null, 8, ["size", "class"]), createVNode(Transition, { name: "dropdown" }, {
				default: withCtx(() => [isOpen.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.dropdown),
					"data-test-id": "credits-dropdown"
				}, [hasCredits.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.creditsSection)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.creditsHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.creditsLabel) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("aiAssistant.builder.settings.credits")), 1), createVNode(unref(N8nTooltip_default), {
						content: tooltipContent.value,
						placement: "bottom",
						"show-after": 300
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "info",
							size: "small",
							class: normalizeClass(_ctx.$style.infoIcon)
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.creditsCount) }, toDisplayString(creditsLeftText.value), 3)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.progressBar) }, [createBaseVNode("div", {
						class: normalizeClass([_ctx.$style.progressFill, { [_ctx.$style.low]: __props.isLowCredits }]),
						style: normalizeStyle({ width: `${progressPercentage.value}%` })
					}, null, 6)], 2),
					showThreadCreditsUsed.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.threadCreditsUsed),
						"data-test-id": "credits-thread-used"
					}, toDisplayString(threadCreditsUsedText.value), 3)) : createCommentVNode("", true),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						class: normalizeClass(_ctx.$style.getMoreButton),
						"data-test-id": "credits-get-more",
						onClick: onGetMoreCredits
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.settings.getMoreCredits")), 1)]),
						_: 1
					}, 8, ["class"])
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
//#endregion
//#region src/features/ai/assistant/components/Agent/CreditsSettingsDropdown.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_1hg6w_388";
var dropdown = "_dropdown_1hg6w_394";
var creditsSection = "_creditsSection_1hg6w_406";
var creditsHeader = "_creditsHeader_1hg6w_415";
var creditsLabel = "_creditsLabel_1hg6w_422";
var infoIcon$1 = "_infoIcon_1hg6w_431";
var creditsCount = "_creditsCount_1hg6w_437";
var threadCreditsUsed = "_threadCreditsUsed_1hg6w_444";
var progressBar = "_progressBar_1hg6w_449";
var progressFill = "_progressFill_1hg6w_457";
var low = "_low_1hg6w_463";
var active = "_active_1hg6w_467";
var getMoreButton = "_getMoreButton_1hg6w_471";
var shimmer$1 = "_shimmer_1hg6w_1";
var spin$1 = "_spin_1hg6w_1";
var opacityPulse$1 = "_opacityPulse_1hg6w_1";
var popoverIn$1 = "_popoverIn_1hg6w_1";
var fadeIn$1 = "_fadeIn_1hg6w_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1hg6w_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1hg6w_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1hg6w_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1hg6w_1";
var blurSwapIn$1 = "_blurSwapIn_1hg6w_1";
var blurSwapOut$1 = "_blurSwapOut_1hg6w_1";
var pulseGlow$1 = "_pulseGlow_1hg6w_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1hg6w_1";
var fade$1 = "_fade_1hg6w_1";
var fadeInUp$1 = "_fadeInUp_1hg6w_1";
var fadeInDown$1 = "_fadeInDown_1hg6w_1";
var fadeInLeft$1 = "_fadeInLeft_1hg6w_1";
var fadeInRight$1 = "_fadeInRight_1hg6w_1";
var fadeOut$1 = "_fadeOut_1hg6w_1";
var fadeOutDown$1 = "_fadeOutDown_1hg6w_1";
var fadeOutUp$1 = "_fadeOutUp_1hg6w_1";
var fadeOutLeft$1 = "_fadeOutLeft_1hg6w_1";
var fadeOutRight$1 = "_fadeOutRight_1hg6w_1";
var ping$1 = "_ping_1hg6w_1";
var blinkBackground$1 = "_blinkBackground_1hg6w_1";
var typingBlink$1 = "_typingBlink_1hg6w_1";
var CreditsSettingsDropdown_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	dropdown,
	creditsSection,
	creditsHeader,
	creditsLabel,
	infoIcon: infoIcon$1,
	creditsCount,
	threadCreditsUsed,
	progressBar,
	progressFill,
	low,
	active,
	getMoreButton,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1hg6w_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var CreditsSettingsDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CreditsSettingsDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CreditsSettingsDropdown_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-7f074283"]]);
//#endregion
//#region src/features/ai/assistant/components/Agent/CreditWarningBanner.vue?vue&type=script&setup=true&lang.ts
var CreditWarningBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CreditWarningBanner",
	props: {
		creditsRemaining: {},
		creditsQuota: {},
		variant: {},
		amountsHidden: { type: Boolean }
	},
	emits: ["upgrade-click", "dismiss"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const cloudPlanStore = useCloudPlanStore();
		const bannerText = computed(() => {
			if (props.amountsHidden) return i18n.baseText("aiAssistant.builder.creditBanner.limitReachedText");
			const key = cloudPlanStore.userIsTrialing ? "aiAssistant.builder.creditBanner.trialText" : "aiAssistant.builder.creditBanner.text";
			return i18n.baseText(key, { interpolate: {
				remaining: String(round2(props.creditsRemaining ?? 0)),
				total: String(round2(props.creditsQuota ?? 0))
			} });
		});
		const ctaLabel = computed(() => i18n.baseText(props.amountsHidden ? "aiAssistant.builder.creditBanner.upgrade" : "aiAssistant.builder.creditBanner.getMore"));
		const getNextMonth = () => {
			const now = /* @__PURE__ */ new Date();
			return new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		};
		const tooltipContent = computed(() => {
			const date = getNextMonth();
			return i18n.baseText("aiAssistant.builder.settings.creditsTooltip", { interpolate: {
				renewalDate: date,
				expiryDate: date
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.banner, { [_ctx.$style.standalone]: props.variant === "standalone" }]),
				"data-test-id": "credit-warning-banner"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.text, { [_ctx.$style.wrapping]: props.amountsHidden }]) }, toDisplayString(bannerText.value), 3), !props.amountsHidden ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: tooltipContent.value,
					placement: "top",
					"show-after": 300
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "info",
						size: "small",
						class: normalizeClass(_ctx.$style.infoIcon),
						"data-test-id": "credit-banner-renewal-info"
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)], 2),
				createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "xsmall",
					"data-test-id": "credit-banner-get-more",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("upgrade-click"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(ctaLabel.value), 1)]),
					_: 1
				}),
				createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: "small",
					class: normalizeClass(_ctx.$style.closeIcon),
					"data-test-id": "credit-banner-dismiss",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("dismiss"))
				}, null, 8, ["class"])
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/assistant/components/Agent/CreditWarningBanner.vue?vue&type=style&index=0&lang.module.scss
var banner = "_banner_juuxq_388";
var standalone = "_standalone_juuxq_401";
var content = "_content_juuxq_407";
var text = "_text_juuxq_415";
var wrapping = "_wrapping_juuxq_423";
var infoIcon = "_infoIcon_juuxq_428";
var closeIcon = "_closeIcon_juuxq_434";
var shimmer = "_shimmer_juuxq_1";
var spin = "_spin_juuxq_1";
var opacityPulse = "_opacityPulse_juuxq_1";
var popoverIn = "_popoverIn_juuxq_1";
var fadeIn = "_fadeIn_juuxq_1";
var collapsibleSlideDown = "_collapsibleSlideDown_juuxq_1";
var collapsibleSlideUp = "_collapsibleSlideUp_juuxq_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_juuxq_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_juuxq_1";
var blurSwapIn = "_blurSwapIn_juuxq_1";
var blurSwapOut = "_blurSwapOut_juuxq_1";
var pulseGlow = "_pulseGlow_juuxq_1";
var pulseGlowDelayed = "_pulseGlowDelayed_juuxq_1";
var fade = "_fade_juuxq_1";
var fadeInUp = "_fadeInUp_juuxq_1";
var fadeInDown = "_fadeInDown_juuxq_1";
var fadeInLeft = "_fadeInLeft_juuxq_1";
var fadeInRight = "_fadeInRight_juuxq_1";
var fadeOut = "_fadeOut_juuxq_1";
var fadeOutDown = "_fadeOutDown_juuxq_1";
var fadeOutUp = "_fadeOutUp_juuxq_1";
var fadeOutLeft = "_fadeOutLeft_juuxq_1";
var fadeOutRight = "_fadeOutRight_juuxq_1";
var ping = "_ping_juuxq_1";
var blinkBackground = "_blinkBackground_juuxq_1";
var typingBlink = "_typingBlink_juuxq_1";
var CreditWarningBanner_vue_vue_type_style_index_0_lang_module_default = {
	banner,
	standalone,
	content,
	text,
	wrapping,
	infoIcon,
	closeIcon,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_juuxq_1",
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
var CreditWarningBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CreditWarningBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CreditWarningBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CreditsSettingsDropdown_default as n, CreditWarningBanner_default as t };
