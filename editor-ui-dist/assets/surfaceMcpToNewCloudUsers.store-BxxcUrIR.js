import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { dr as defineStore } from "./useRootStore-CDIOxWm8.js";
import { t as STORES } from "./constants2-JUBWMnBE.js";
import { t as useTelemetry } from "./useTelemetry-CZKoOy4G.js";
import { t as usePostHog } from "./posthog.store-Dzu7fgwf.js";
import { eo as SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT } from "./constants-nNF8vqjl.js";
import { n as getExperimentTelemetryPayload } from "./utils-7fcGeBZ0.js";
//#region src/experiments/surfaceMcpToNewCloudUsers/stores/surfaceMcpToNewCloudUsers.store.ts
var useSurfaceMcpToNewCloudUsersStore = defineStore(STORES.EXPERIMENT_SURFACE_MCP_TO_NEW_CLOUD_USERS, () => {
	const posthogStore = usePostHog();
	const telemetry = useTelemetry();
	const currentVariant = computed(() => posthogStore.getVariant(SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT.name));
	const isTileVariant = computed(() => {
		const variant = currentVariant.value;
		return variant === SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT.variant1 || variant === SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT.variant2;
	});
	const isEnabled = computed(() => Boolean(currentVariant.value));
	const getTelemetryPayload = (payload = {}) => getExperimentTelemetryPayload(SURFACE_MCP_TO_NEW_CLOUD_USERS_EXPERIMENT, currentVariant.value, payload);
	function trackEntryPointViewed(surface, entryPoint, mcpAccessEnabled) {
		telemetry.track("MCP onboarding entry point viewed", getTelemetryPayload({
			surface,
			entry_point: entryPoint,
			mcp_access_enabled: mcpAccessEnabled
		}));
	}
	function trackOpportunityViewed(surface, entryPoint, surfaceAvailable, suppressedBy, mcpAccessEnabled) {
		telemetry.track("MCP onboarding opportunity viewed", getTelemetryPayload({
			surface,
			entry_point: entryPoint,
			eligible: true,
			surface_available: surfaceAvailable,
			suppressed_by: suppressedBy,
			mcp_access_enabled: mcpAccessEnabled
		}));
	}
	function trackOpened(surface, payload = {}) {
		telemetry.track("MCP onboarding opened", getTelemetryPayload({
			surface,
			...payload.entryPoint ? { entry_point: payload.entryPoint } : {},
			...payload.mcpAccessEnabled !== void 0 ? { mcp_access_enabled: payload.mcpAccessEnabled } : {}
		}));
	}
	function trackDismissed(surface, payload = {}) {
		telemetry.track("MCP onboarding dismissed", getTelemetryPayload({
			surface,
			...payload.activeClient ? { active_client: payload.activeClient } : {},
			...payload.enabledDuringThisOpen !== void 0 ? { enabled_during_this_open: payload.enabledDuringThisOpen } : {},
			...payload.mcpAccessEnabled !== void 0 ? { mcp_access_enabled: payload.mcpAccessEnabled } : {}
		}));
	}
	function trackEnableClicked(surface) {
		telemetry.track("MCP onboarding enable clicked", getTelemetryPayload({ surface }));
	}
	function trackEnabled(surface) {
		telemetry.track("MCP onboarding enabled", getTelemetryPayload({ surface }));
	}
	function trackEnableFailed(surface, errorType) {
		telemetry.track("MCP onboarding enable failed", getTelemetryPayload({
			surface,
			error_type: errorType
		}));
	}
	function trackClientSelected(surface, client) {
		telemetry.track("MCP onboarding client selected", getTelemetryPayload({
			surface,
			client
		}));
	}
	function trackSetupShown(surface, client, setupType) {
		telemetry.track("MCP onboarding setup shown", getTelemetryPayload({
			surface,
			client,
			setup_type: setupType
		}));
	}
	function trackCopiedParameter(surface, client, parameter) {
		telemetry.track("MCP onboarding copied parameter", getTelemetryPayload({
			surface,
			client,
			parameter
		}));
	}
	return {
		currentVariant,
		isEnabled,
		isTileVariant,
		trackEntryPointViewed,
		trackOpportunityViewed,
		trackOpened,
		trackDismissed,
		trackEnableClicked,
		trackEnabled,
		trackEnableFailed,
		trackClientSelected,
		trackSetupShown,
		trackCopiedParameter
	};
});
//#endregion
export { useSurfaceMcpToNewCloudUsersStore as t };
