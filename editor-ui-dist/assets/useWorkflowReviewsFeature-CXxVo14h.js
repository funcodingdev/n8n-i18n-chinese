import { Ld as computed, Qd as init_runtime_core_esm_bundler } from "./vendor-BA8kaY8M.js";
import { Ey as EnterpriseEditionFeature, Yy as useSettingsStore } from "./app-DbOOaPK6.js";
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
