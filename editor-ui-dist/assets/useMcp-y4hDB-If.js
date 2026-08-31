import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { n as TELEMETRY_EVENT } from "./src-WHIExFVW.js";
//#region src/features/ai/mcpAccess/composables/useMcp.ts
function useMcp() {
	const telemetry = useTelemetry();
	const trackMcpAccessEnabledForWorkflow = (workflowId) => {
		telemetry.track(TELEMETRY_EVENT.MCP.USER_GAVE_MCP_ACCESS_TO_WORKFLOW, { workflow_id: workflowId });
	};
	const trackMcpAccessEnabledForAgent = (agentId) => {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_GAVE_MCP_ACCESS_TO_AGENT, { agent_id: agentId });
	};
	const trackUserToggledMcpAccess = (enabled) => {
		telemetry.track(TELEMETRY_EVENT.MCP.USER_TOGGLED_MCP_ACCESS, { state: enabled });
	};
	const trackAutoExposeToggled = ({ enabled, source }) => {
		telemetry.track(TELEMETRY_EVENT.MCP.AUTO_EXPOSE_NEW_WORKFLOWS_TOGGLED, {
			enabled,
			source
		});
	};
	return {
		trackMcpAccessEnabledForWorkflow,
		trackMcpAccessEnabledForAgent,
		trackUserToggledMcpAccess,
		trackAutoExposeToggled
	};
}
//#endregion
export { useMcp as t };
