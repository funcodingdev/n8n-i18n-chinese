import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-DfC8UPAP.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-BeB2si0b.js";
import { la as v4 } from "./src-7oOw7OxE.js";
import { n as useToast } from "./useToast-BM9XurQG.js";
import { Nr as PROJECT_AGENTS, mr as AGENTS_LIST_VIEW } from "./constants-CVrJhq7z.js";
import { a as INSTANCE_AI_PENDING_AGENT_ID_STATE, o as INSTANCE_AI_PENDING_AGENT_METADATA_KEY, u as INSTANCE_AI_THREAD_VIEW } from "./constants-RUxxjnrw.js";
import { n as useInstanceAiStore } from "./instanceAi.store-CYGZmJvq.js";
import { t as generateNanoId } from "./generate-nano-id-Dm5waGrg.js";
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
		const instanceAiStore = useInstanceAiStore();
		/**
		* Opens a new-agent artifact without persisting anything. The agent id is
		* minted here and carried on the thread so both paths that can create the
		* agent — a config edit in the artifact, or an agent-building chat request —
		* create it under the same id. Nothing reaches the database until one of them
		* happens, so abandoning the thread leaves no empty agent behind.
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
			const threadId = v4();
			try {
				await instanceAiStore.syncThread(threadId, projectId, {
					source: "agent_builder_page",
					origin: "internal",
					sourceContext: { agentId }
				});
				await instanceAiStore.updateThreadMetadata(threadId, { [INSTANCE_AI_PENDING_AGENT_METADATA_KEY]: {
					projectId,
					agentId
				} });
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
