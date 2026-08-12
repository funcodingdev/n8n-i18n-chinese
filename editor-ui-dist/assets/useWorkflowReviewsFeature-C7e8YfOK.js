import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { F as useEnvFeatureFlag } from "./workflows.store-CEslMXyQ.js";
import { t as useSettingsStore } from "./settings.store-g-g2FkkM.js";
import "./settings.store-wQLyP2Tj.js";
import { do as EnterpriseEditionFeature } from "./constants-DCcvObnS.js";
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
