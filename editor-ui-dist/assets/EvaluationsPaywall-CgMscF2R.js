import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as useSettingsStore } from "./settings.store-1Fkv1cxl.js";
import { t as usePostHog } from "./posthog.store-CnmkBX62.js";
import { Ta as EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT } from "./constants-DPRLSskW.js";
import { _ as COMMUNITY_PLUS_ENROLLMENT_MODAL, n as useUIStore } from "./ui.store-BhVgRazX.js";
//#region src/experiments/evaluationsWizardSidepanel/useEvaluationsWizardSidepanelExperiment.ts
function useEvaluationsWizardSidepanelExperiment() {
	const posthogStore = usePostHog();
	const settingsStore = useSettingsStore();
	return { isFeatureEnabled: computed(() => settingsStore.settings.evaluation?.configEvalsEnabled === true || posthogStore.getVariant(EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT.name) === EVALUATIONS_WIZARD_SIDEPANEL_EXPERIMENT.variant) };
}
//#endregion
//#region src/features/ai/evaluation.ee/components/Paywall/EvaluationsPaywall.vue
var EvaluationsPaywall_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsPaywall",
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const goToUpgrade = async () => {
			uiStore.openModalWithData({
				name: COMMUNITY_PLUS_ENROLLMENT_MODAL,
				data: { customHeading: void 0 }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nEmptyState_default), {
				"data-test-id": "evaluations-unlicensed",
				heading: unref(i18n).baseText("evaluations.paywall.title"),
				description: unref(i18n).baseText("evaluations.paywall.description"),
				"button-text": unref(i18n).baseText("evaluations.paywall.cta"),
				onClick: goToUpgrade
			}, null, 8, [
				"heading",
				"description",
				"button-text"
			]);
		};
	}
});
//#endregion
export { useEvaluationsWizardSidepanelExperiment as n, EvaluationsPaywall_default as t };
