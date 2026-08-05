import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-BtLoUoWY.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-C28WcRnH.js";
import { t as useToast } from "./useToast-C83jlYXD.js";
import { $i as v4 } from "./src-hynCfw14.js";
import { t as useRootStore } from "./useRootStore-DquTAyRZ.js";
import { Fr as PROJECT_AGENTS, hr as AGENTS_LIST_VIEW } from "./constants-DK2Y4nDe.js";
import { cn as TELEMETRY_EVENT, n as useTelemetry } from "./posthog.store-CFNDS4GL.js";
import { r as createAgent } from "./useAgentApi-C2ET3m0Y.js";
import { c as INSTANCE_AI_THREAD_VIEW, r as INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY } from "./constants-Cz7CyRuo.js";
import { n as useInstanceAiStore } from "./instanceAi.store-ZOaOByXD.js";
import { d as stashPendingAgentAttachment } from "./useInstanceAiHandoff-BRJP8Ngb.js";
import { n as upsertProjectAgentsListCache } from "./useProjectAgentsList-C2N42mRV.js";
//#endregion
//#region src/features/agents/views/NewAgentView.vue
var NewAgentView_default = /* @__PURE__ */ defineComponent({
	__name: "NewAgentView",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const rootStore = useRootStore();
		const telemetry = useTelemetry();
		const toast = useToast();
		const instanceAiStore = useInstanceAiStore();
		onMounted(async () => {
			const projectId = route.query.projectId;
			if (typeof projectId !== "string" || !projectId) {
				const errorMessage = i18n.baseText("agentSelector.createAgentFailed");
				toast.showError(new Error(errorMessage), errorMessage);
				await router.replace({ name: AGENTS_LIST_VIEW });
				return;
			}
			try {
				const agent = await createAgent(rootStore.restApiContext, projectId, i18n.baseText("agents.new.defaultName"));
				upsertProjectAgentsListCache(projectId, agent);
				telemetry.track(TELEMETRY_EVENT.AGENTS.USER_CREATED_AGENT, {
					agent_id: agent.id,
					source: "create_blank"
				});
				const threadId = v4();
				await instanceAiStore.syncThread(threadId, projectId, {
					source: "agent_builder_page",
					origin: "internal",
					sourceContext: { agentId: agent.id }
				});
				await instanceAiStore.updateThreadMetadata(threadId, { [INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY]: {
					agentId: agent.id,
					projectId,
					name: agent.name
				} });
				stashPendingAgentAttachment(threadId, {
					type: "agent",
					id: agent.id,
					name: agent.name,
					projectId
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
