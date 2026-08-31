import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bn as normalizeStyle, bt as withCtx, j as createVNode, n as Transition, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-ChH4gKEU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { r as onClickOutside } from "./dist-BKkqSB6h.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Ci-5Sk3_.js";
import { n as TELEMETRY_EVENT } from "./src-WHIExFVW.js";
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
var CreditsSettingsDropdown_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_mk5d4_125",
	dropdown: "_dropdown_mk5d4_131",
	creditsSection: "_creditsSection_mk5d4_143",
	creditsHeader: "_creditsHeader_mk5d4_152",
	creditsLabel: "_creditsLabel_mk5d4_159",
	infoIcon: "_infoIcon_mk5d4_168",
	creditsCount: "_creditsCount_mk5d4_174",
	threadCreditsUsed: "_threadCreditsUsed_mk5d4_181",
	progressBar: "_progressBar_mk5d4_186",
	progressFill: "_progressFill_mk5d4_194",
	low: "_low_mk5d4_200",
	active: "_active_mk5d4_204",
	getMoreButton: "_getMoreButton_mk5d4_208"
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
var CreditWarningBanner_vue_vue_type_style_index_0_lang_module_default = {
	banner: "_banner_or0ui_125",
	standalone: "_standalone_or0ui_138",
	content: "_content_or0ui_144",
	text: "_text_or0ui_152",
	wrapping: "_wrapping_or0ui_160",
	infoIcon: "_infoIcon_or0ui_165",
	closeIcon: "_closeIcon_or0ui_171"
};
var CreditWarningBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CreditWarningBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CreditWarningBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CreditsSettingsDropdown_default as n, CreditWarningBanner_default as t };
