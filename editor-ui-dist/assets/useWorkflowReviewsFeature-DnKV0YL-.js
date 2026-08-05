import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as useSettingsStore } from "./settings.store-BoQTH7B9.js";
import "./settings.store-DrfcPrQs.js";
import { po as EnterpriseEditionFeature } from "./constants-DK2Y4nDe.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-Dec2HVAX.js";
//#region src/features/workflow-reviews/composables/useWorkflowReviewsFeature.ts
var useWorkflowReviewsFeature = () => {
	const settingsStore = useSettingsStore();
	const { check: checkEnvFeatureFlag } = useEnvFeatureFlag();
	const isWorkflowReviewsAvailable = computed(() => {
		return (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.WorkflowReviews] ?? false) && checkEnvFeatureFlag.value("WORKFLOW_REVIEWS");
	});
	return {
		isWorkflowReviewsAvailable,
		isWorkflowReviewsEnabled: computed(() => {
			return isWorkflowReviewsAvailable.value && settingsStore.settings.workflowReviews?.enabled === true;
		})
	};
};
//#endregion
export { useWorkflowReviewsFeature as t };
