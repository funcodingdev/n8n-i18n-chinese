import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as useSettingsStore } from "./settings.store-CYQk6rCS.js";
import "./settings.store-iCnxkLnT.js";
import { po as EnterpriseEditionFeature } from "./constants-CQOOvzhs.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-Cfp67doM.js";
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
