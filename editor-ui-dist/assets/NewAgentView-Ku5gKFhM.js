import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { ma as v4 } from "./src-B255AdRt.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { Pr as PROJECT_AGENTS, gr as AGENT_BUILDER_VIEW, mr as AGENTS_LIST_VIEW } from "./constants-CMdL1Kzl.js";
import { t as useInstanceAiAvailable } from "./useInstanceAiAvailability-wJnFHv6T.js";
import { d as INSTANCE_AI_PENDING_AGENT_ID_STATE, f as INSTANCE_AI_PENDING_AGENT_METADATA_KEY, g as INSTANCE_AI_THREAD_VIEW } from "./constants-CM4MaaDd.js";
import { n as useInstanceAiStore } from "./instanceAi.store-BX7pMcbn.js";
import { h as stashPendingAgentAttachment } from "./useInstanceAiHandoff-BMkUZu9J.js";
import { t as generateNanoId } from "./generate-nano-id-D-uepEwq.js";
//#endregion
//#region src/features/agents/views/NewAgentView.vue
var NewAgentView_default = /* @__PURE__ */ defineComponent({
	__name: "NewAgentView",
	setup(__props) {
		const MINTED_AGENT_ID = /^[0-9A-Za-z]{16}$/;
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const toast = useToast();
		const instanceAiAvailable = useInstanceAiAvailable();
		const instanceAiStore = useInstanceAiStore();
		/**
		* Opens an unpersisted agent draft in Instance AI when available, or directly
		* in the manual builder otherwise. Both paths persist only after the first
		* configuration change and use the id minted by the entry point.
		*/
		onMounted(async () => {
			const projectId = route.query.projectId;
			if (typeof projectId !== "string" || !projectId) {
				const errorMessage = i18n.baseText("agentSelector.createAgentFailed");
				toast.showError(new Error(errorMessage), errorMessage);
				await router.replace({ name: AGENTS_LIST_VIEW });
				return;
			}
			const clickedAgentId = history.state[INSTANCE_AI_PENDING_AGENT_ID_STATE];
			const agentId = typeof clickedAgentId === "string" && MINTED_AGENT_ID.test(clickedAgentId) ? clickedAgentId : generateNanoId();
			try {
				if (!instanceAiAvailable.value) {
					await router.replace({
						name: AGENT_BUILDER_VIEW,
						params: {
							projectId,
							agentId
						},
						state: { [INSTANCE_AI_PENDING_AGENT_ID_STATE]: agentId }
					});
					return;
				}
				const threadId = v4();
				await instanceAiStore.syncThread(threadId, projectId, {
					source: "agent_builder_page",
					origin: "internal",
					sourceContext: { agentId }
				});
				await instanceAiStore.updateThreadMetadata(threadId, { [INSTANCE_AI_PENDING_AGENT_METADATA_KEY]: {
					projectId,
					agentId
				} });
				stashPendingAgentAttachment(threadId, {
					type: "agent",
					id: agentId,
					name: i18n.baseText("agents.new.defaultName"),
					projectId,
					pending: true
				});
				await router.replace({
					name: INSTANCE_AI_THREAD_VIEW,
					params: { threadId }
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSelector.createAgentFailed"));
				await router.replace({
					name: PROJECT_AGENTS,
					params: { projectId }
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
//#endregion
export { NewAgentView_default as default };
