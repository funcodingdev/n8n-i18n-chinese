import { $d as init_runtime_core_esm_bundler, Rd as computed } from "./vendor-AGzaQJYe.js";
import { Mb as EnterpriseEditionFeature, nx as useSettingsStore } from "./app-MbtXRI_F.js";
//#region src/features/workflow-reviews/composables/useWorkflowReviewsFeature.ts
init_runtime_core_esm_bundler();
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
