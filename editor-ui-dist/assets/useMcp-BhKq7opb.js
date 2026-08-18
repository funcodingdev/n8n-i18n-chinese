import { t as useTelemetry } from "./useTelemetry-CZKoOy4G.js";
import { n as TELEMETRY_EVENT } from "./src-BxAg6gba.js";
//#region src/features/ai/mcpAccess/composables/useMcp.ts
function useMcp() {
	const telemetry = useTelemetry();
	const trackMcpAccessEnabledForWorkflow = (workflowId) => {
		telemetry.track("User gave MCP access to workflow", { workflow_id: workflowId });
	};
	const trackMcpAccessEnabledForAgent = (agentId) => {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_GAVE_MCP_ACCESS_TO_AGENT, { agent_id: agentId });
	};
	const trackUserToggledMcpAccess = (enabled) => {
		telemetry.track("User toggled MCP access", { state: enabled });
	};
	return {
		trackMcpAccessEnabledForWorkflow,
		trackMcpAccessEnabledForAgent,
		trackUserToggledMcpAccess
	};
}
//#endregion
export { useMcp as t };
