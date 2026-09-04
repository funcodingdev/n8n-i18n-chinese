import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, m as withKeys, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { x as useNow } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nLogo_default } from "./N8nLogo-Dro1bbAT.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-mMl9vyKw.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import "./constants-CMdL1Kzl.js";
import { n as useUIStore } from "./ui.store-xzfQIfPK.js";
import { t as useTrialIntroModalStore } from "./trialIntroModal.store-BPet01dE.js";
import { t as Modal_default } from "./Modal-DYw1gJ5H.js";
//#region src/experiments/trialIntroModal/useTrialCountdown.ts
var MINUTE_MS = 6e4;
var HOUR_MINUTES = 60;
var DAY_MINUTES = HOUR_MINUTES * 24;
function useTrialCountdown() {
	const cloudPlanStore = useCloudPlanStore();
	const now = useNow({ interval: 3e4 });
	return { countdownText: computed(() => {
		const expirationDate = cloudPlanStore.currentPlanData?.expirationDate;
		if (!expirationDate) return;
		const msLeft = Date.parse(expirationDate) - now.value.getTime();
		if (msLeft <= 0) return;
		const totalMinutes = Math.floor(msLeft / MINUTE_MS);
		const days = Math.floor(totalMinutes / DAY_MINUTES);
		const hours = Math.floor(totalMinutes % DAY_MINUTES / HOUR_MINUTES);
		const minutes = totalMinutes % HOUR_MINUTES;
		const segments = [];
		if (days > 0) segments.push(`${days}d`);
		if (days > 0 || hours > 0) segments.push(`${hours}h`);
		segments.push(`${minutes}m`);
		return segments.join(" ");
	}) };
}
//#endregion
//#region src/experiments/trialIntroModal/components/TrialIntroModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["aria-checked"];
var _hoisted_2 = ["aria-checked"];
var TrialIntroModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TrialIntroModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const toast = useToast();
		const uiStore = useUIStore();
		const cloudPlanStore = useCloudPlanStore();
		const trialIntroModalStore = useTrialIntroModalStore();
		const { countdownText } = useTrialCountdown();
		const modalBus = createEventBus();
		const modalName = computed(() => props.modalName ?? "trialIntroModal");
		const upgradeButtonStyle = {
			"--button--color--background": "var(--color--success)",
			"--button--color--background-hover": "var(--color--success--shade-1)",
			"--button--color--background-active": "var(--color--success--shade-1)",
			"--button--color": "var(--color--neutral-white)",
			"--button--shadow": "0 0 0 1px var(--color--success)",
			"--button--shadow--hover": "0 0 0 1px var(--color--success--shade-1)",
			"--button--shadow--active": "0 0 0 1px var(--color--success--shade-1)",
			"--button--border-color": "var(--color--success)",
			"--button--border-color--hover": "var(--color--success--shade-1)",
			"--button--border-color--active": "var(--color--success--shade-1)"
		};
		const step = ref(1);
		const period = ref("annual");
		watch(step, (value) => trialIntroModalStore.trackModalViewed(value));
		onMounted(() => {
			trialIntroModalStore.trackModalViewed(1);
		});
		onBeforeUnmount(() => {
			trialIntroModalStore.completeModalPresentation();
		});
		const asDisplayableQuota = (value) => value !== void 0 && value >= 0 ? value : void 0;
		const aiCredits = computed(() => asDisplayableQuota(cloudPlanStore.currentPlanData?.licenseFeatures?.["quota:instanceAiCredits"]));
		const executionsLimit = computed(() => asDisplayableQuota(cloudPlanStore.currentPlanData?.monthlyExecutionsLimit));
		const trialDays = computed(() => cloudPlanStore.currentPlanData?.metadata?.trial?.length);
		const starterOffer = computed(() => trialIntroModalStore.starterOffer);
		const starterPrices = computed(() => starterOffer.value?.prices);
		const savingsLabel = computed(() => starterPrices.value ? i18n.baseText("experiments.trialIntroModal.step2.save", { interpolate: { pct: String(starterPrices.value.discountPct) } }) : i18n.baseText("experiments.trialIntroModal.step2.saveFallback"));
		function formatPrice(amount) {
			const currency = trialIntroModalStore.offerCurrency;
			if (!currency) return String(amount);
			return currency.position === "suffix" ? `${amount}${currency.symbol}` : `${currency.symbol}${amount}`;
		}
		function onStartBuilding() {
			trialIntroModalStore.trackModalInteraction("start_building");
			uiStore.closeModal(modalName.value);
		}
		function onUpgradeNow() {
			trialIntroModalStore.trackModalInteraction("upgrade_now");
			step.value = 2;
		}
		function onBack() {
			trialIntroModalStore.trackModalInteraction("back");
			step.value = 1;
		}
		function onClose(closeDialog) {
			trialIntroModalStore.trackModalInteraction("close", { step: step.value });
			closeDialog();
		}
		function onSelectPeriod(value) {
			if (period.value !== value) trialIntroModalStore.trackModalInteraction("period_selected", { period: value });
			period.value = value;
		}
		async function onUpgradeClick() {
			trialIntroModalStore.trackUpgradeCtaClicked(period.value);
			try {
				const link = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath: trialIntroModalStore.buildUpgradeReturnPath(period.value) });
				location.href = link;
			} catch (error) {
				toast.showError(error, i18n.baseText("experiments.trialIntroModal.step2.upgradeError"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: modalName.value,
				width: "560px",
				center: false,
				"overlay-class": _ctx.$style.blurredOverlay,
				"event-bus": unref(modalBus),
				"show-close": false,
				"close-on-click-modal": false,
				"close-on-press-escape": false
			}, {
				header: withCtx(({ closeDialog }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.modalHeader) }, [
					step.value === 1 ? (openBlock(), createBlock(unref(N8nLogo_default), {
						key: 0,
						size: "small",
						collapsed: true,
						class: normalizeClass(_ctx.$style.headerLogo),
						"data-test-id": "trial-intro-logo"
					}, null, 8, ["class"])) : createCommentVNode("", true),
					step.value === 2 ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.headerIconButton),
						variant: "ghost",
						size: "small",
						icon: "arrow-left",
						"icon-only": "",
						"aria-label": unref(i18n).baseText("experiments.trialIntroModal.step2.back"),
						"data-test-id": "trial-intro-back-button",
						onClick: onBack
					}, null, 8, ["class", "aria-label"])) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [step.value === 1 && unref(countdownText) ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.countdownPill),
						"data-test-id": "trial-intro-countdown-pill"
					}, [createVNode(unref(N8nIcon_default), {
						icon: "clock",
						size: "xsmall"
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.endsIn", { interpolate: { time: unref(countdownText) } })), 1)], 2)) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
						class: normalizeClass(_ctx.$style.headerIconButton),
						variant: "ghost",
						size: "small",
						icon: "x",
						"icon-only": "",
						"aria-label": unref(i18n).baseText("generic.close"),
						"data-test-id": "trial-intro-close-button",
						onClick: ($event) => onClose(closeDialog)
					}, null, 8, [
						"class",
						"aria-label",
						"onClick"
					])], 2)
				], 2)]),
				content: withCtx(() => [step.value === 1 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "trial-intro-step-1",
					onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers(() => {}, ["stop"]), ["esc"]))
				}, [
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						color: "text-base",
						class: normalizeClass(_ctx.$style.welcomeLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.eyebrow")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nHeading_default), {
						tag: "h1",
						size: "xlarge",
						bold: true,
						class: normalizeClass(_ctx.$style.trialLead)
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "experiments.trialIntroModal.title",
							tag: "span",
							scope: "global"
						}, {
							highlight: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.titleHighlight) }, toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.titleHighlight")), 3)]),
							_: 1
						})]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						color: "text-base",
						class: normalizeClass(_ctx.$style.subtitle)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.subtitle")), 1)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.statCards) }, [
						aiCredits.value !== void 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.statCard),
							"data-test-id": "trial-intro-stat-ai-credits"
						}, [
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.statIconTile) }, [createVNode(unref(N8nIcon_default), {
								icon: "sparkles",
								size: "medium"
							})], 2),
							createVNode(unref(N8nHeading_default), {
								tag: "div",
								size: "large",
								bold: true
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(aiCredits.value.toLocaleString()), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								tag: "div",
								size: "xsmall",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.stats.aiCredits")), 1)]),
								_: 1
							})
						], 2)) : createCommentVNode("", true),
						executionsLimit.value !== void 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.statCard),
							"data-test-id": "trial-intro-stat-executions"
						}, [
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.statIconTile) }, [createVNode(unref(N8nIcon_default), {
								icon: "play",
								size: "medium"
							})], 2),
							createVNode(unref(N8nHeading_default), {
								tag: "div",
								size: "large",
								bold: true
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(executionsLimit.value.toLocaleString()), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								tag: "div",
								size: "xsmall",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.stats.executions")), 1)]),
								_: 1
							})
						], 2)) : createCommentVNode("", true),
						trialDays.value !== void 0 ? (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.statCard),
							"data-test-id": "trial-intro-stat-days"
						}, [
							createBaseVNode("span", { class: normalizeClass(_ctx.$style.statIconTile) }, [createVNode(unref(N8nIcon_default), {
								icon: "calendar",
								size: "medium"
							})], 2),
							createVNode(unref(N8nHeading_default), {
								tag: "div",
								size: "large",
								bold: true
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(trialDays.value.toLocaleString()), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								tag: "div",
								size: "xsmall",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.stats.days")), 1)]),
								_: 1
							})
						], 2)) : createCommentVNode("", true)
					], 2),
					createVNode(unref(N8nCallout_default), { theme: "warning" }, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.calloutTitle) }, toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.callout.title")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.calloutBody) }, toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.callout.body")), 3)]),
						_: 1
					})
				], 34)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "trial-intro-step-2",
					onKeydown: _cache[7] || (_cache[7] = withKeys(withModifiers(() => {}, ["stop"]), ["esc"]))
				}, [
					createVNode(unref(N8nHeading_default), {
						tag: "h1",
						size: "xlarge",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						color: "text-base",
						class: normalizeClass(_ctx.$style.subtitle)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.subtitle")), 1)]),
						_: 1
					}, 8, ["class"]),
					starterOffer.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.comparisonRows)
					}, [executionsLimit.value !== void 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.comparisonRow),
						"data-test-id": "trial-intro-row-executions"
					}, [
						createVNode(unref(N8nIcon_default), {
							icon: "play",
							size: "small",
							class: normalizeClass(_ctx.$style.rowIcon)
						}, null, 8, ["class"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowLabel) }, toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.executions")), 3),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowOldValue) }, toDisplayString(executionsLimit.value.toLocaleString()), 3),
						createVNode(unref(N8nIcon_default), {
							icon: "arrow-right",
							size: "xsmall",
							class: normalizeClass(_ctx.$style.rowArrow)
						}, null, 8, ["class"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowNewValue) }, [createTextVNode(toDisplayString(starterOffer.value.quotas.monthlyExecutionsLimit.toLocaleString()) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowPerMonth) }, toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.perMonth")), 3)], 2)
					], 2)) : createCommentVNode("", true), aiCredits.value !== void 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.comparisonRow),
						"data-test-id": "trial-intro-row-ai-credits"
					}, [
						createVNode(unref(N8nIcon_default), {
							icon: "sparkles",
							size: "small",
							class: normalizeClass(_ctx.$style.rowIcon)
						}, null, 8, ["class"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowLabel) }, toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.aiCredits")), 3),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowOldValue) }, toDisplayString(aiCredits.value.toLocaleString()), 3),
						createVNode(unref(N8nIcon_default), {
							icon: "arrow-right",
							size: "xsmall",
							class: normalizeClass(_ctx.$style.rowArrow)
						}, null, 8, ["class"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowNewValue) }, [createTextVNode(toDisplayString(starterOffer.value.quotas.instanceAiCredits.toLocaleString()) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.rowPerMonth) }, toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.perMonth")), 3)], 2)
					], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.periodCards),
						role: "radiogroup"
					}, [createBaseVNode("div", {
						role: "radio",
						tabindex: "0",
						"aria-checked": period.value === "annual",
						class: normalizeClass([_ctx.$style.periodCard, period.value === "annual" ? _ctx.$style.periodCardSelected : ""]),
						"data-test-id": "trial-intro-period-annual",
						onClick: _cache[1] || (_cache[1] = ($event) => onSelectPeriod("annual")),
						onKeydown: [_cache[2] || (_cache[2] = withKeys(($event) => onSelectPeriod("annual"), ["enter"])), _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => onSelectPeriod("annual"), ["prevent"]), ["space"]))]
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.radioDot) }, null, 2),
						createVNode(unref(N8nText_default), {
							size: "medium",
							bold: true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.annual")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nBadge_default), {
							theme: "primary",
							bold: true,
							"show-border": false,
							class: normalizeClass(_ctx.$style.savingsBadge),
							"data-test-id": "trial-intro-save-badge"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(savingsLabel.value), 1)]),
							_: 1
						}, 8, ["class"]),
						starterPrices.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.priceBlock),
							"data-test-id": "trial-intro-price-annual"
						}, [
							createVNode(unref(N8nText_default), {
								size: "large",
								bold: true
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(formatPrice(starterPrices.value.yearlyPerMonth)), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								size: "xsmall",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.perMonth")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								tag: "div",
								size: "xsmall",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.billedAnnually")), 1)]),
								_: 1
							})
						], 2)) : createCommentVNode("", true)
					], 42, _hoisted_1), createBaseVNode("div", {
						role: "radio",
						tabindex: "0",
						"aria-checked": period.value === "monthly",
						class: normalizeClass([_ctx.$style.periodCard, period.value === "monthly" ? _ctx.$style.periodCardSelected : ""]),
						"data-test-id": "trial-intro-period-monthly",
						onClick: _cache[4] || (_cache[4] = ($event) => onSelectPeriod("monthly")),
						onKeydown: [_cache[5] || (_cache[5] = withKeys(($event) => onSelectPeriod("monthly"), ["enter"])), _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => onSelectPeriod("monthly"), ["prevent"]), ["space"]))]
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.radioDot) }, null, 2),
						createVNode(unref(N8nText_default), {
							size: "medium",
							bold: true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.monthly")), 1)]),
							_: 1
						}),
						starterPrices.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.priceBlock),
							"data-test-id": "trial-intro-price-monthly"
						}, [createVNode(unref(N8nText_default), {
							size: "large",
							bold: true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(formatPrice(starterPrices.value.monthly)), 1)]),
							_: 1
						}), createVNode(unref(N8nText_default), {
							size: "xsmall",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.perMonth")), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true)
					], 42, _hoisted_2)], 2)
				], 34))]),
				footer: withCtx(() => [step.value === 1 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.footer)
				}, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "trial-intro-start-building-button",
					onClick: onStartBuilding
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.startBuilding")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					style: upgradeButtonStyle,
					"data-test-id": "trial-intro-upgrade-now-button",
					onClick: onUpgradeNow
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.upgradeNow")), 1)]),
					_: 1
				})], 2)) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.ctaButton),
					style: upgradeButtonStyle,
					"data-test-id": "trial-intro-upgrade-cta",
					onClick: onUpgradeClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.trialIntroModal.step2.cta")), 1)]),
					_: 1
				}, 8, ["class"]))]),
				_: 1
			}, 8, [
				"name",
				"overlay-class",
				"event-bus"
			]);
		};
	}
});
//#endregion
//#region src/experiments/trialIntroModal/components/TrialIntroModal.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_r9xea_388";
var modalHeader = "_modalHeader_r9xea_393";
var headerActions = "_headerActions_r9xea_401";
var headerIconButton = "_headerIconButton_r9xea_408";
var welcomeLabel = "_welcomeLabel_r9xea_417";
var countdownPill = "_countdownPill_r9xea_422";
var headerLogo = "_headerLogo_r9xea_436";
var trialLead = "_trialLead_r9xea_441";
var titleHighlight = "_titleHighlight_r9xea_445";
var subtitle = "_subtitle_r9xea_449";
var statCards = "_statCards_r9xea_454";
var statCard = "_statCard_r9xea_454";
var statIconTile = "_statIconTile_r9xea_472";
var blurredOverlay = "_blurredOverlay_r9xea_485";
var calloutTitle = "_calloutTitle_r9xea_489";
var calloutBody = "_calloutBody_r9xea_494";
var comparisonRows = "_comparisonRows_r9xea_498";
var comparisonRow = "_comparisonRow_r9xea_498";
var rowIcon = "_rowIcon_r9xea_517";
var rowLabel = "_rowLabel_r9xea_521";
var rowOldValue = "_rowOldValue_r9xea_525";
var rowArrow = "_rowArrow_r9xea_531";
var rowNewValue = "_rowNewValue_r9xea_535";
var rowPerMonth = "_rowPerMonth_r9xea_540";
var periodCards = "_periodCards_r9xea_546";
var periodCard = "_periodCard_r9xea_546";
var periodCardSelected = "_periodCardSelected_r9xea_567";
var radioDot = "_radioDot_r9xea_575";
var priceBlock = "_priceBlock_r9xea_595";
var savingsBadge = "_savingsBadge_r9xea_600";
var footer = "_footer_r9xea_605";
var ctaButton = "_ctaButton_r9xea_611";
var shimmer = "_shimmer_r9xea_1";
var spin = "_spin_r9xea_1";
var opacityPulse = "_opacityPulse_r9xea_1";
var popoverIn = "_popoverIn_r9xea_1";
var fadeIn = "_fadeIn_r9xea_1";
var collapsibleSlideDown = "_collapsibleSlideDown_r9xea_1";
var collapsibleSlideUp = "_collapsibleSlideUp_r9xea_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_r9xea_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_r9xea_1";
var blurSwapIn = "_blurSwapIn_r9xea_1";
var blurSwapOut = "_blurSwapOut_r9xea_1";
var pulseGlow = "_pulseGlow_r9xea_1";
var pulseGlowDelayed = "_pulseGlowDelayed_r9xea_1";
var fade = "_fade_r9xea_1";
var fadeInUp = "_fadeInUp_r9xea_1";
var fadeInDown = "_fadeInDown_r9xea_1";
var fadeInLeft = "_fadeInLeft_r9xea_1";
var fadeInRight = "_fadeInRight_r9xea_1";
var fadeOut = "_fadeOut_r9xea_1";
var fadeOutDown = "_fadeOutDown_r9xea_1";
var fadeOutUp = "_fadeOutUp_r9xea_1";
var fadeOutLeft = "_fadeOutLeft_r9xea_1";
var fadeOutRight = "_fadeOutRight_r9xea_1";
var ping = "_ping_r9xea_1";
var blinkBackground = "_blinkBackground_r9xea_1";
var typingBlink = "_typingBlink_r9xea_1";
var TrialIntroModal_vue_vue_type_style_index_0_lang_module_default = {
	content,
	modalHeader,
	headerActions,
	headerIconButton,
	welcomeLabel,
	countdownPill,
	headerLogo,
	trialLead,
	titleHighlight,
	subtitle,
	statCards,
	statCard,
	statIconTile,
	blurredOverlay,
	calloutTitle,
	calloutBody,
	comparisonRows,
	comparisonRow,
	rowIcon,
	rowLabel,
	rowOldValue,
	rowArrow,
	rowNewValue,
	rowPerMonth,
	periodCards,
	periodCard,
	periodCardSelected,
	radioDot,
	priceBlock,
	savingsBadge,
	footer,
	ctaButton,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_r9xea_1",
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
var TrialIntroModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TrialIntroModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TrialIntroModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TrialIntroModal_default as default };
