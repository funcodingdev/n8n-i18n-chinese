import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, m as withKeys, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { S as I18nT, x as useI18n } from "./_MapCache-aHDyP5Mf.js";
import { Gt as N8nCallout_default, Hi as N8nBadge_default, ht as N8nLogo_default, jt as N8nHeading_default, lo as N8nButton_default, ro as N8nText_default, uo as N8nIcon_default } from "./src-BPgPnOl4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { x as useNow } from "./dist-BkE9aYmt.js";
import { t as createEventBus } from "./event-bus-DAq0yaAJ.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-DZ_ak3XV.js";
import { n as useToast } from "./useToast-BoVkvj1B.js";
import "./constants-Bgf3Pq_r.js";
import { n as useUIStore } from "./ui.store-BHVXHgyY.js";
import { t as useTrialIntroModalStore } from "./trialIntroModal.store-CJRoNCGs.js";
import { t as Modal_default } from "./Modal-DcdET6EX.js";
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
var TrialIntroModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1qyuc_125",
	modalHeader: "_modalHeader_1qyuc_130",
	headerActions: "_headerActions_1qyuc_138",
	headerIconButton: "_headerIconButton_1qyuc_145",
	welcomeLabel: "_welcomeLabel_1qyuc_154",
	countdownPill: "_countdownPill_1qyuc_159",
	headerLogo: "_headerLogo_1qyuc_173",
	trialLead: "_trialLead_1qyuc_178",
	titleHighlight: "_titleHighlight_1qyuc_182",
	subtitle: "_subtitle_1qyuc_186",
	statCards: "_statCards_1qyuc_191",
	statCard: "_statCard_1qyuc_191",
	statIconTile: "_statIconTile_1qyuc_209",
	blurredOverlay: "_blurredOverlay_1qyuc_222",
	calloutTitle: "_calloutTitle_1qyuc_226",
	calloutBody: "_calloutBody_1qyuc_231",
	comparisonRows: "_comparisonRows_1qyuc_235",
	comparisonRow: "_comparisonRow_1qyuc_235",
	rowIcon: "_rowIcon_1qyuc_254",
	rowLabel: "_rowLabel_1qyuc_258",
	rowOldValue: "_rowOldValue_1qyuc_262",
	rowArrow: "_rowArrow_1qyuc_268",
	rowNewValue: "_rowNewValue_1qyuc_272",
	rowPerMonth: "_rowPerMonth_1qyuc_277",
	periodCards: "_periodCards_1qyuc_283",
	periodCard: "_periodCard_1qyuc_283",
	periodCardSelected: "_periodCardSelected_1qyuc_304",
	radioDot: "_radioDot_1qyuc_312",
	priceBlock: "_priceBlock_1qyuc_332",
	savingsBadge: "_savingsBadge_1qyuc_337",
	footer: "_footer_1qyuc_342",
	ctaButton: "_ctaButton_1qyuc_348"
};
var TrialIntroModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TrialIntroModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TrialIntroModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TrialIntroModal_default as default };
