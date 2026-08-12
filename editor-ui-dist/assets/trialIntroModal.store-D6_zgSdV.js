import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { T as updateCurrentUserSettings, dr as defineStore, t as useRootStore, zn as getUpgradeOffer } from "./useRootStore-o9aJBslg.js";
import { t as STORES } from "./constants2-C4Gtqhrx.js";
import { t as useSettingsStore } from "./settings.store-D3X9CFvx.js";
import "./settings.store--Wug2Dl9.js";
import { t as useUsersStore } from "./users.store-0eMK7FpE.js";
import { t as useTelemetry } from "./useTelemetry-RqJ9XXte.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-C12vD-ss.js";
import { t as usePostHog } from "./posthog.store-uzI2DQdt.js";
import { lo as TRIAL_INTRO_MODAL_EXPERIMENT, yi as TRIAL_INTRO_MODAL_KEY } from "./constants-CVrJhq7z.js";
import { n as useUIStore } from "./ui.store-BIkhwCpO.js";
import { n as getExperimentTelemetryPayload } from "./utils-B9WRc48p.js";
//#region src/experiments/trialIntroModal/constants.ts
var TRIAL_INTRO_SEEN_CALLOUT = "101_trial_intro_modal";
var TRIAL_INTRO_UPGRADE_SOURCE = "trial-welcome-modal";
//#endregion
//#region src/experiments/trialIntroModal/stores/trialIntroModal.store.ts
function isUpgradeOffer(response) {
	return "slug" in response && Boolean(response.slug);
}
var TRIAL_INTRO_INTERACTION_EVENTS = {
	upgrade_now: "User clicked upgrade now in trial welcome modal",
	start_building: "User clicked start building in trial welcome modal",
	back: "User clicked back in trial welcome modal",
	close: "User closed trial welcome modal",
	period_selected: "User selected billing period in trial welcome modal"
};
var useTrialIntroModalStore = defineStore(STORES.EXPERIMENT_TRIAL_INTRO_MODAL, () => {
	const posthogStore = usePostHog();
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const cloudPlanStore = useCloudPlanStore();
	const usersStore = useUsersStore();
	const settingsStore = useSettingsStore();
	const uiStore = useUIStore();
	const currentVariant = computed(() => posthogStore.getVariant(TRIAL_INTRO_MODAL_EXPERIMENT.name));
	const isVariantEnabled = computed(() => currentVariant.value === TRIAL_INTRO_MODAL_EXPERIMENT.variant);
	const isEligible = computed(() => settingsStore.isCloudDeployment && cloudPlanStore.userIsTrialing && !cloudPlanStore.trialExpired && usersStore.isInstanceOwner && !usersStore.isCalloutDismissed("101_trial_intro_modal"));
	const shouldShowModal = computed(() => isVariantEnabled.value && isEligible.value);
	const hasAttemptedModalOpen = ref(false);
	const isModalPresentationActive = ref(false);
	const shouldSuppressTrialBackground = computed(() => isModalPresentationActive.value || shouldShowModal.value && !hasAttemptedModalOpen.value && !uiStore.isAnyModalOpen);
	const upgradeOffer = ref();
	const hasFetchedUpgradeOffer = ref(false);
	const starterOffer = computed(() => upgradeOffer.value);
	const offerCurrency = computed(() => starterOffer.value?.currency);
	const markSeen = async () => {
		usersStore.setCalloutDismissed(TRIAL_INTRO_SEEN_CALLOUT);
		try {
			await updateCurrentUserSettings(rootStore.restApiContext, { dismissedCallouts: {
				...usersStore.currentUser?.settings?.dismissedCallouts,
				[TRIAL_INTRO_SEEN_CALLOUT]: true
			} });
		} catch {}
	};
	const fetchUpgradeOfferOnce = async () => {
		if (hasFetchedUpgradeOffer.value) return;
		hasFetchedUpgradeOffer.value = true;
		try {
			const response = await getUpgradeOffer(rootStore.restApiContext);
			if (isUpgradeOffer(response)) upgradeOffer.value = response;
		} catch {}
	};
	function openIfEligible() {
		if (!shouldShowModal.value) return false;
		if (uiStore.isAnyModalOpen) return false;
		hasAttemptedModalOpen.value = true;
		isModalPresentationActive.value = true;
		uiStore.openModal(TRIAL_INTRO_MODAL_KEY);
		markSeen();
		fetchUpgradeOfferOnce();
		return true;
	}
	function completeModalPresentation() {
		isModalPresentationActive.value = false;
	}
	const trackModalViewed = (step) => {
		telemetry.track("User viewed trial welcome modal", getExperimentTelemetryPayload(TRIAL_INTRO_MODAL_EXPERIMENT, currentVariant.value, {
			step,
			trial_days_left: cloudPlanStore.trialDaysLeft,
			executions_limit: cloudPlanStore.currentPlanData?.monthlyExecutionsLimit,
			ai_credits: cloudPlanStore.currentPlanData?.licenseFeatures?.["quota:instanceAiCredits"]
		}));
	};
	const trackModalInteraction = (action, extra = {}) => {
		const onPricingStep = action === "back" || action === "period_selected" || extra.step === 2;
		telemetry.track(TRIAL_INTRO_INTERACTION_EVENTS[action], getExperimentTelemetryPayload(TRIAL_INTRO_MODAL_EXPERIMENT, currentVariant.value, {
			...onPricingStep ? { has_prices: Boolean(starterOffer.value?.prices) } : {},
			...extra
		}));
	};
	const trackUpgradeCtaClicked = (period) => {
		telemetry.track("User clicked upgrade CTA", getExperimentTelemetryPayload(TRIAL_INTRO_MODAL_EXPERIMENT, currentVariant.value, {
			source: TRIAL_INTRO_UPGRADE_SOURCE,
			isTrial: cloudPlanStore.userIsTrialing,
			deploymentType: settingsStore.deploymentType,
			trialDaysLeft: cloudPlanStore.trialDaysLeft,
			executionsLeft: cloudPlanStore.usageLeft.executionsLeft,
			workflowsLeft: cloudPlanStore.usageLeft.workflowsLeft,
			period,
			has_prices: Boolean(starterOffer.value?.prices)
		}));
	};
	const buildUpgradeReturnPath = (period) => `/account/change-plan?plan=starter&period=${period}&checkout=open&source=${TRIAL_INTRO_UPGRADE_SOURCE}`;
	return {
		isVariantEnabled,
		isEligible,
		shouldShowModal,
		shouldSuppressTrialBackground,
		starterOffer,
		offerCurrency,
		markSeen,
		openIfEligible,
		completeModalPresentation,
		fetchUpgradeOfferOnce,
		trackModalViewed,
		trackModalInteraction,
		trackUpgradeCtaClicked,
		buildUpgradeReturnPath
	};
});
//#endregion
export { useTrialIntroModalStore as t };
