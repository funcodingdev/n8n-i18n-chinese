import { Af as init_reactivity_esm_bundler, Cf as watch, Ld as computed, Qd as init_runtime_core_esm_bundler, Rf as ref, Wf as toValue, af as onBeforeUnmount, cd as refDebounced, sf as onMounted } from "./vendor-BA8kaY8M.js";
import { Eo as useInstanceAiStore, Kg as getDebounceTime, My as DEBOUNCE_TIME, Oi as useAgentsN8nChatFlag } from "./app-CfhiRDif.js";
import { i as mergeChatHistoryPages } from "./mergeRecentChats-BYoAkq6w.js";
import { t as usePagedN8nChatThreads } from "./usePagedN8nChatThreads-C1EOIJBo.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-itMycRf5.js";
import "./useIntersectionObserver-DXZ2_xyb.js";
//#region src/features/ai/instanceAi/composables/useInstanceAiThreadHistory.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/**
* Server-side searched, cursor-paged chat list for one mounted list at a time.
* Bind `search` to the input, `listRef` to the scroll container and `sentinelRef` to an
* element after the last row. Loads on mount and clears the store state on unmount.
*/
function useInstanceAiThreadHistory(options) {
	const store = useInstanceAiStore();
	const history = computed(() => store.threadHistory);
	const search = ref("");
	const listRef = ref(null);
	const sentinelRef = ref(null);
	function loadMore() {
		store.loadThreadHistoryPage();
	}
	const debouncedSearch = refDebounced(search, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
	watch(debouncedSearch, (value) => {
		store.resetThreadHistory(value.trim());
		loadMore();
	});
	const { observe } = useIntersectionObserver({
		root: listRef,
		onIntersect: options?.onSentinelLoadMore ?? loadMore
	});
	watch([
		sentinelRef,
		() => history.value.loading,
		() => options?.isExtraSourceLoading?.() ?? false
	], ([sentinel, loading, extraLoading]) => {
		if (sentinel && !loading && !extraLoading) observe(sentinel);
	}, { flush: "post" });
	onMounted(loadMore);
	onBeforeUnmount(() => store.resetThreadHistory());
	return {
		history,
		search,
		listRef,
		sentinelRef,
		loadMore
	};
}
//#endregion
//#region src/features/agents/n8nChatPage/useMergedChatHistory.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/**
* Loads both chat history sources and merges them into one recency-ordered,
* infinite-scrolled list. Assistant paging stays in {@link useInstanceAiThreadHistory};
* agent paging is the shared {@link usePagedN8nChatThreads}.
*/
function useMergedChatHistory(options) {
	const isAgentsN8nChatFlag = useAgentsN8nChatFlag();
	const instanceAiStore = useInstanceAiStore();
	const enabled = computed(() => toValue(options?.enabled ?? isAgentsN8nChatFlag));
	const agent = usePagedN8nChatThreads({
		pageSize: 30,
		enabled,
		search: () => enabled.value ? instanceAiStore.threadHistory.search || void 0 : void 0
	});
	const assistant = useInstanceAiThreadHistory({
		onSentinelLoadMore: () => loadMore(),
		isExtraSourceLoading: () => enabled.value && agent.isLoading.value
	});
	const agentLoaded = ref(false);
	watch(agent.isLoading, (loading) => {
		if (!loading) agentLoaded.value = true;
	});
	watch(() => instanceAiStore.threadHistory.search, () => {
		agentLoaded.value = false;
	});
	const items = computed(() => {
		const assistantItems = assistant.history.value.threads.map((thread) => ({
			kind: "assistant",
			thread
		}));
		if (!enabled.value) return assistantItems;
		const agentItems = agent.items.value.map((thread) => ({
			kind: "agent",
			thread
		}));
		return mergeChatHistoryPages([{
			items: assistantItems,
			hasMore: assistant.history.value.hasMore && !assistant.history.value.error && assistantItems.length > 0
		}, {
			items: agentItems,
			hasMore: agentLoaded.value && agent.hasMore.value
		}]);
	});
	const hasMore = computed(() => assistant.history.value.hasMore || enabled.value && agent.hasMore.value);
	const isLoading = computed(() => assistant.history.value.loading || enabled.value && agent.isLoading.value);
	const error = computed(() => assistant.history.value.error || enabled.value && agent.error.value);
	function loadMore() {
		assistant.loadMore();
		agent.loadNext();
	}
	watch(enabled, (active) => {
		if (active && !agentLoaded.value) agent.loadNext();
	});
	onMounted(() => agent.loadNext());
	return {
		items,
		hasMore,
		isLoading,
		error,
		history: assistant.history,
		search: assistant.search,
		listRef: assistant.listRef,
		sentinelRef: assistant.sentinelRef,
		loadMore
	};
}
//#endregion
export { useMergedChatHistory as t };
