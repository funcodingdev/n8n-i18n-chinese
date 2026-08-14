import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { F as useEnvFeatureFlag } from "./workflows.store-qPELvTeV.js";
import { t as useSettingsStore } from "./settings.store-BDHsgqqf.js";
import "./settings.store-DzBUtpSv.js";
import { do as EnterpriseEditionFeature } from "./constants-Bgf3Pq_r.js";
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
