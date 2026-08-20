import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as usePostHog } from "./posthog.store-sQ4V5spV.js";
import { Ba as INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT, Ra as INSTANCE_AI_BROWSER_USE_EXPERIMENT, za as INSTANCE_AI_COMPUTER_USE_EXPERIMENT } from "./constants-Cre_5Rj2.js";
//#region src/experiments/instanceAiMcpConnections/useInstanceAiMcpConnectionsExperiment.ts
function useInstanceAiMcpConnectionsExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.name) === INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiComputerUse/useInstanceAiComputerUseExperiment.ts
function useInstanceAiComputerUseExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_COMPUTER_USE_EXPERIMENT.name) === INSTANCE_AI_COMPUTER_USE_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiBrowserUse/useInstanceAiBrowserUseExperiment.ts
function useInstanceAiBrowserUseExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_BROWSER_USE_EXPERIMENT.name) === INSTANCE_AI_BROWSER_USE_EXPERIMENT.variant) };
}
//#endregion
export { useInstanceAiComputerUseExperiment as n, useInstanceAiMcpConnectionsExperiment as r, useInstanceAiBrowserUseExperiment as t };
