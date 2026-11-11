import { W as EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY, ka as useMCPStore, nx as useSettingsStore, s_ as useUIStore, t as useExposeAllWorkflowsToMcpStore } from "./app-MbtXRI_F.js";
//#region src/experiments/exposeAllWorkflowsToMcp/composables/useExposeAllWorkflowsToMcpOffer.ts
function useExposeAllWorkflowsToMcpOffer() {
	const experimentStore = useExposeAllWorkflowsToMcpStore();
	const mcpStore = useMCPStore();
	const settingsStore = useSettingsStore();
	const uiStore = useUIStore();
	/**
	* Opens the expose-all modal for enrolled users with at least one eligible
	* workflow or agent. Failures of the eligibility probe are swallowed — the
	* offer is best-effort and must not disturb the flow that triggered it.
	* Returns whether the modal was opened, so callers can decide whether to
	* fall back to their own post-enable behavior instead.
	*/
	async function offerToExposeAllWorkflows(onExposed) {
		if (!experimentStore.isEnabled) return false;
		try {
			const [eligibleWorkflows, eligibleAgents] = await Promise.all([mcpStore.getMcpEligibleWorkflows({ take: 1 }), settingsStore.isAgentsEnabled ? mcpStore.getMcpEligibleAgents({ take: 1 }) : Promise.resolve({ count: 0 })]);
			if (eligibleWorkflows.count === 0 && eligibleAgents.count === 0) return false;
		} catch {
			return false;
		}
		uiStore.openModalWithData({
			name: EXPOSE_ALL_WORKFLOWS_TO_MCP_MODAL_KEY,
			data: { onExposed }
		});
		return true;
	}
	return { offerToExposeAllWorkflows };
}
//#endregion
export { useExposeAllWorkflowsToMcpOffer };
