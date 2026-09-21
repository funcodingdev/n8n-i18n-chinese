import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { sr as STORES, ur as defineStore } from "./useRootStore-B-A2Ktsc.js";
import { t as useTelemetry } from "./useTelemetry-CgKpOMtU.js";
import { t as usePostHog } from "./posthog.store-CdFgmqeY.js";
import { Aa as EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT } from "./constants-Bwbcx8Ih.js";
import { n as getExperimentTelemetryPayload } from "./utils-B3L-9sRF.js";
//#region src/experiments/exposeAllWorkflowsToMcp/stores/exposeAllWorkflowsToMcp.store.ts
var useExposeAllWorkflowsToMcpStore = defineStore(STORES.EXPERIMENT_EXPOSE_ALL_WORKFLOWS_TO_MCP, () => {
	const posthogStore = usePostHog();
	const telemetry = useTelemetry();
	const currentVariant = computed(() => posthogStore.getVariant(EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT.name));
	const isEnabled = computed(() => posthogStore.isVariantEnabled(EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT.name, EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT.variant));
	const getTelemetryPayload = () => getExperimentTelemetryPayload(EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT, currentVariant.value);
	function trackConfirmed() {
		telemetry.track("MCP expose all workflows confirmed", getTelemetryPayload());
	}
	function trackDeclined() {
		telemetry.track("MCP expose all workflows declined", getTelemetryPayload());
	}
	function trackDismissed() {
		telemetry.track("MCP expose all workflows modal dismissed", getTelemetryPayload());
	}
	return {
		currentVariant,
		isEnabled,
		trackConfirmed,
		trackDeclined,
		trackDismissed
	};
});
//#endregion
export { useExposeAllWorkflowsToMcpStore as t };
