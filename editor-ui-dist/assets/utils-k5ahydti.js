import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-CrUlorrl.js";
import { t as usePostHog } from "./posthog.store-D_drhJKO.js";
import { Oa as EXTRA_TEMPLATE_LINKS_EXPERIMENT } from "./constants-BP1FOJvU.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-6Bsu-Vve.js";
//#region src/experiments/utils.ts
var getExperimentTelemetryPayload = (experiment, variant, payload = {}) => {
	if (typeof variant !== "string") return payload;
	return {
		...payload,
		variant,
		[`$feature/${experiment.name}`]: variant
	};
};
var isExtraTemplateLinksExperimentEnabled = () => {
	return usePostHog().getVariant(EXTRA_TEMPLATE_LINKS_EXPERIMENT.name) === EXTRA_TEMPLATE_LINKS_EXPERIMENT.variant && useCloudPlanStore().userIsTrialing;
};
var TemplateClickSource = /* @__PURE__ */ function(TemplateClickSource) {
	TemplateClickSource["emptyWorkflowLink"] = "empty_workflow_link";
	TemplateClickSource["emptyInstanceCard"] = "empty_instance_card";
	TemplateClickSource["sidebarButton"] = "sidebar_button";
	TemplateClickSource["instanceAiSplitEmptyState"] = "instance_ai_split_empty_state";
	return TemplateClickSource;
}({});
var getTemplatePathByRole = (role) => {
	if (!role) return "";
	switch (role) {
		case "Executive/Owner":
		case "Product & Design": return "categories/ai/";
		case "Support": return "categories/support/";
		case "Sales": return "categories/sales/";
		case "IT":
		case "Engineering": return "categories/it-ops/";
		case "Marketing": return "categories/marketing/";
		case "Other": return "categories/other/";
		default: return "";
	}
};
var trackTemplatesClick = (source) => {
	useTelemetry().track("User clicked on templates", {
		role: useCloudPlanStore().currentUserCloudInfo?.role,
		active_workflow_count: useWorkflowsListStore().activeWorkflows.length,
		source
	});
};
//#endregion
export { trackTemplatesClick as a, isExtraTemplateLinksExperimentEnabled as i, getExperimentTelemetryPayload as n, getTemplatePathByRole as r, TemplateClickSource as t };
