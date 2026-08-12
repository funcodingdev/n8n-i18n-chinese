import { Mr as NEW_AGENT_VIEW } from "./constants-CVrJhq7z.js";
import { a as INSTANCE_AI_PENDING_AGENT_ID_STATE, s as INSTANCE_AI_PROJECT_ID_QUERY } from "./constants-RUxxjnrw.js";
//#region src/features/ai/instanceAi/createAgentRoute.ts
/**
* `agentId` lets a caller that reports the click pin the agent the click will
* eventually produce. Omit it and the new-agent view mints its own.
*/
function instanceAiCreateAgentRoute(projectId, agentId) {
	return {
		name: NEW_AGENT_VIEW,
		query: { [INSTANCE_AI_PROJECT_ID_QUERY]: projectId },
		...agentId ? { state: { [INSTANCE_AI_PENDING_AGENT_ID_STATE]: agentId } } : {}
	};
}
//#endregion
export { instanceAiCreateAgentRoute as t };
