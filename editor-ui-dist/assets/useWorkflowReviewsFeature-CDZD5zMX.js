import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useSettingsStore } from "./settings.store-1Fkv1cxl.js";
import { no as EnterpriseEditionFeature } from "./constants-DPRLSskW.js";
//#region src/features/workflow-reviews/composables/useWorkflowReviewsFeature.ts
var useWorkflowReviewsFeature = () => {
	const settingsStore = useSettingsStore();
	const isWorkflowReviewsAvailable = computed(() => {
		return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.WorkflowReviews] ?? false;
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
