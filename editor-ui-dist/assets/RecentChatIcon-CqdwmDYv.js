import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Jd as defineComponent, Jf as unref, Rd as computed, Vd as createCommentVNode, df as openBlock, ho as defineStore, jf as init_reactivity_esm_bundler, zf as ref } from "./vendor-AGzaQJYe.js";
import { KO as i18n, Nl as getSystemAgentThread, Ns as ASSISTANT_AGENT_ID, Ws as rememberAssistantAgentThread, Xl as renameSystemAgentThread, Xr as AgentPersonalisationIcon_default, Yb as useToast, ql as listSystemAgentThreads, rx as useRootStore, ul as deleteSystemAgentThread, zO as N8nIcon_default, zs as forgetAssistantAgentThread } from "./app-MbtXRI_F.js";
//#region src/features/ai/instanceAi/assistantAgent/assistantAgentThreads.store.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/** The thread with its title from a rename in this session, if any. */
function withRenamedTitle(thread, renamedTitles) {
	const title = renamedTitles.get(thread.id);
	return title === void 0 ? thread : {
		...thread,
		title
	};
}
/**
* The user's own Assistant agent threads for the recent chats. The chat history
* pages through them with {@link usePagedAssistantAgentThreads}. Every thread
* that it loads is remembered as an Assistant agent thread, so opening it needs
* no lookup.
*/
var useAssistantAgentThreadsStore = defineStore("assistantAgentThreads", () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const recentThreads = ref([]);
	const openedThreads = ref([]);
	/** Ids deleted in this session, so every mounted list filters the row out. */
	const deletedThreadIds = ref(/* @__PURE__ */ new Set());
	/**
	* Titles renamed in this session, so every mounted list shows the new title. A
	* response that a rename overtook can still hold the old title.
	*/
	const renamedTitles = ref(/* @__PURE__ */ new Map());
	const threadsById = computed(() => new Map([...openedThreads.value, ...recentThreads.value].filter((thread) => !deletedThreadIds.value.has(thread.id)).map((thread) => [thread.id, withRenamedTitle(thread, renamedTitles.value)])));
	/** Every known thread, newest `updatedAt` first. */
	const knownThreads = computed(() => [...threadsById.value.values()].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)));
	function remember(threads) {
		for (const thread of threads) if (!deletedThreadIds.value.has(thread.id)) rememberAssistantAgentThread(thread.id, thread.projectId);
	}
	let requestVersion = 0;
	async function fetchRecent(limit = 10) {
		const version = ++requestVersion;
		try {
			const result = await listSystemAgentThreads(rootStore.restApiContext, ASSISTANT_AGENT_ID, { limit });
			if (version !== requestVersion) return;
			remember(result.data);
			recentThreads.value = result.data;
		} catch (error) {
			if (version !== requestVersion) return;
			console.error("Failed to load Assistant agent threads", error);
		}
	}
	/** Adds a thread that the recent list does not hold, for example one opened by URL. */
	function addOpenedThread(thread) {
		if (threadsById.value.has(thread.id) || deletedThreadIds.value.has(thread.id)) return;
		remember([thread]);
		openedThreads.value.push(thread);
	}
	/** Loads and adds a thread that the store does not hold yet. */
	async function loadThread(threadId) {
		if (threadsById.value.has(threadId)) return;
		try {
			addOpenedThread(await getSystemAgentThread(rootStore.restApiContext, ASSISTANT_AGENT_ID, threadId));
		} catch (error) {
			console.error("Failed to load Assistant agent thread", error);
		}
	}
	async function deleteThread(thread) {
		try {
			await deleteSystemAgentThread(rootStore.restApiContext, ASSISTANT_AGENT_ID, thread.id);
		} catch (error) {
			toast.showError(error, i18n.baseText("agentSessions.showError.delete"));
			return false;
		}
		recentThreads.value = recentThreads.value.filter((t) => t.id !== thread.id);
		openedThreads.value = openedThreads.value.filter((t) => t.id !== thread.id);
		deletedThreadIds.value.add(thread.id);
		forgetAssistantAgentThread(thread.id);
		return true;
	}
	const renameVersions = /* @__PURE__ */ new Map();
	/** Shows the new title at once, and restores the old one when the request fails. */
	async function renameThread(threadId, title) {
		const previous = renamedTitles.value.get(threadId);
		const version = (renameVersions.get(threadId) ?? 0) + 1;
		renameVersions.set(threadId, version);
		renamedTitles.value.set(threadId, title);
		try {
			await renameSystemAgentThread(rootStore.restApiContext, ASSISTANT_AGENT_ID, threadId, title);
		} catch (error) {
			if (renameVersions.get(threadId) === version) {
				if (previous === void 0) renamedTitles.value.delete(threadId);
				else renamedTitles.value.set(threadId, previous);
			}
			throw error;
		}
	}
	return {
		recentThreads,
		openedThreads,
		threadsById,
		knownThreads,
		deletedThreadIds,
		renamedTitles,
		remember,
		fetchRecent,
		addOpenedThread,
		loadThread,
		deleteThread,
		renameThread
	};
});
//#endregion
//#region src/features/agents/n8nChatPage/components/RecentChatIcon.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/agents/n8nChatPage/components/RecentChatIcon.vue
var RecentChatIcon_default = /* @__PURE__ */ defineComponent({
	__name: "RecentChatIcon",
	props: {
		item: { default: void 0 },
		size: { default: 16 }
	},
	setup(__props) {
		const props = __props;
		const assistantIconSize = computed(() => Math.round(props.size * .75));
		return (_ctx, _cache) => {
			return __props.item?.kind === "assistant" || __props.item?.kind === "assistant-agent" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "n8n-assistant",
				size: assistantIconSize.value
			}, null, 8, ["size"])) : __props.item?.kind === "agent" ? (openBlock(), createBlock(AgentPersonalisationIcon_default, {
				key: 1,
				personalisation: __props.item.thread.agent.personalisation,
				size: __props.size
			}, null, 8, ["personalisation", "size"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { useAssistantAgentThreadsStore as n, withRenamedTitle as r, RecentChatIcon_default as t };
