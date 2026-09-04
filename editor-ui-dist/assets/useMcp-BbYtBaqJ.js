import { _t as getMcpClientBrand, vt as getMcpClientType } from "./src-B255AdRt.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { a as TELEMETRY_EVENT } from "./src-CRk-YGAD.js";
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
	const trackConnectClientClicked = (source) => {
		telemetry.track(TELEMETRY_EVENT.MCP.USER_CLICKED_CONNECT_CLIENT, { source });
	};
	const trackViewedAllClients = () => {
		telemetry.track(TELEMETRY_EVENT.MCP.USER_VIEWED_ALL_MCP_CLIENTS, {});
	};
	const trackClientAccessRevoked = ({ clientId, clientName, revokedForOther }) => {
		telemetry.track(TELEMETRY_EVENT.MCP.USER_REVOKED_MCP_CLIENT_ACCESS, {
			client_id: clientId,
			client_brand: getMcpClientBrand(clientName),
			client_type: getMcpClientType(clientName),
			revoked_for_other: revokedForOther
		});
	};
	return {
		trackMcpAccessEnabledForWorkflow,
		trackMcpAccessEnabledForAgent,
		trackUserToggledMcpAccess,
		trackAutoExposeToggled,
		trackConnectClientClicked,
		trackViewedAllClients,
		trackClientAccessRevoked
	};
}
//#endregion
export { useMcp as t };
