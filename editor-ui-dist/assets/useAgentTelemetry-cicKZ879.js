import { t as useRootStore } from "./useRootStore-D6sIVZY4.js";
import { t as useTelemetry } from "./useTelemetry-CZKoOy4G.js";
import { n as TELEMETRY_EVENT } from "./src-BxAg6gba.js";
//#region src/features/agents/composables/useAgentTelemetry.ts
function useAgentTelemetry() {
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const common = () => ({ session_id: rootStore.pushRef });
	function safeTrack(event, props) {
		try {
			telemetry.track(event, props);
		} catch {}
	}
	function trackClickedNewAgent(source, agentId) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_CLICKED_NEW_AGENT, {
			source,
			agent_id: agentId,
			...common()
		});
	}
	function trackSubmittedMessage(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_SUBMITTED_MESSAGE_TO_AGENT, {
			agent_id: params.agentId,
			mode: "test",
			status: params.status,
			agent_config: params.agentConfig,
			...common()
		});
	}
	function trackAddedTrigger(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_ADDED_TRIGGER_TO_AGENT, {
			agent_id: params.agentId,
			trigger_type: params.triggerType,
			triggers: params.triggers,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackOpenedToolFromList(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_OPENED_AGENT_TOOL, {
			agent_id: params.agentId,
			tool_type: params.toolType,
			...common()
		});
	}
	function trackOpenedSkillFromList(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_OPENED_AGENT_SKILL, {
			agent_id: params.agentId,
			skill_id: params.skillId,
			...common()
		});
	}
	function trackOpenedAddSkillModal(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_OPENED_ADD_SKILL_MODAL, {
			agent_id: params.agentId,
			...common()
		});
	}
	function trackImportedSkill(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_IMPORTED_AGENT_SKILL, {
			agent_id: params.agentId,
			source: params.source,
			status: params.status,
			reference_count: params.referenceCount ?? 0,
			...params.error ? { error: params.error } : {},
			...common()
		});
	}
	return {
		trackClickedNewAgent,
		trackSubmittedMessage,
		trackAddedTrigger,
		trackOpenedToolFromList,
		trackOpenedSkillFromList,
		trackOpenedAddSkillModal,
		trackImportedSkill
	};
}
//#endregion
export { useAgentTelemetry as t };
