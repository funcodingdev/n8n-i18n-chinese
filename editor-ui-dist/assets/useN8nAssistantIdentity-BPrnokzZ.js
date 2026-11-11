import { $d as init_runtime_core_esm_bundler, Rd as computed } from "./vendor-AGzaQJYe.js";
import { qO as useI18n } from "./app-MbtXRI_F.js";
//#region src/features/agents/n8nChatPage/composables/useN8nAssistantIdentity.ts
init_runtime_core_esm_bundler();
var N8N_ASSISTANT_PERSONALISATION = {
	icon: "n8n-assistant",
	gradient: {
		from: "var(--assistant--color--highlight-1)",
		to: "var(--assistant--color--highlight-3)",
		angle: 135,
		fromStop: 0,
		toStop: 100
	}
};
/** How n8n Assistant shows up next to agents in the n8n Chat picker and library. */
function useN8nAssistantIdentity() {
	const i18n = useI18n();
	return {
		name: computed(() => i18n.baseText("instanceAi.view.title")),
		description: computed(() => i18n.baseText("agents.n8nChatPage.picker.assistantDescription")),
		personalisation: N8N_ASSISTANT_PERSONALISATION
	};
}
//#endregion
export { useN8nAssistantIdentity as t };
