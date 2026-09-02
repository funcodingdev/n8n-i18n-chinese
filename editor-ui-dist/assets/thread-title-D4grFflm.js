import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { Qn as makeRestApiRequest, fr as defineStore, t as useRootStore } from "./useRootStore-CvqfnFUt.js";
//#region src/features/agents/composables/useAgentThreadsApi.ts
function defaultAgentSessionFilters() {
	return {
		status: "all",
		origin: "all",
		startDate: "",
		endDate: ""
	};
}
var listThreads = async (context, projectId, agentId, options) => {
	const params = new URLSearchParams({ limit: String(options.limit) });
	if (options.cursor) params.set("cursor", options.cursor);
	const { filters } = options;
	if (filters?.status && filters.status !== "all") params.set("status", filters.status);
	if (filters?.origin && filters.origin !== "all") params.set("origin", filters.origin);
	if (filters?.startDate) params.set("updatedAfter", new Date(filters.startDate).toISOString());
	if (filters?.endDate) params.set("updatedBefore", new Date(filters.endDate).toISOString());
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/threads?${params.toString()}`);
};
var getThreadDetail = async (context, projectId, agentId, threadId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/threads/${threadId}`);
};
var deleteThread = async (context, projectId, agentId, threadId) => {
	return await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/agents/v2/${agentId}/threads/${threadId}`);
};
var exportThreadToLangSmith = async (context, projectId, agentId, threadId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/threads/${threadId}/langsmith-export`);
};
//#endregion
//#region src/features/agents/agentSessions.store.ts
var ITEMS_PER_PAGE = 20;
var AUTO_REFRESH_INTERVAL_MS = 5e3;
var useAgentSessionsStore = defineStore("agentSessions", () => {
	const threads = ref([]);
	const nextCursor = ref(null);
	const loading = ref(false);
	const autoRefresh = ref(true);
	const filters = ref(defaultAgentSessionFilters());
	let refreshTimer = null;
	let currentProjectId = null;
	let currentAgentId = null;
	let autoRefreshActive = false;
	let latestRefreshId = 0;
	function keyFor(projectId, agentId, value) {
		return `${projectId}:${agentId}:${JSON.stringify(value)}`;
	}
	let latestKey = null;
	async function fetchThreads(projectId, agentId, options = {}) {
		currentProjectId = projectId;
		currentAgentId = agentId;
		const requestedFilters = options.filters ?? filters.value;
		const key = keyFor(projectId, agentId, requestedFilters);
		latestKey = key;
		loading.value = true;
		try {
			const page = await listThreads(useRootStore().restApiContext, projectId, agentId, {
				limit: ITEMS_PER_PAGE,
				filters: requestedFilters
			});
			if (latestKey !== key) return;
			threads.value = page.threads;
			nextCursor.value = page.nextCursor;
		} finally {
			if (latestKey === key) loading.value = false;
		}
	}
	/**
	* Background refresh used by the polling timer and visibility-change
	* handler. Unlike `fetchThreads` it:
	*   - Does not flip `loading` (avoids flashing the "Load more" button's
	*     spinner on every tick).
	*   - Re-fetches the currently loaded range so filters are re-evaluated
	*     without collapsing the list back to its first page.
	*/
	async function refreshThreads(projectId, agentId) {
		const requestedFilters = filters.value;
		const key = keyFor(projectId, agentId, requestedFilters);
		if (latestKey !== null && latestKey !== key) return;
		const refreshId = ++latestRefreshId;
		const threadCount = threads.value.length;
		const cursor = nextCursor.value;
		try {
			const rootStore = useRootStore();
			const limit = Math.max(threads.value.length, ITEMS_PER_PAGE);
			let page = await listThreads(rootStore.restApiContext, projectId, agentId, {
				limit,
				filters: requestedFilters
			});
			if (latestKey !== key || refreshId !== latestRefreshId) return;
			const refreshed = [...page.threads];
			const seen = new Set(refreshed.map(({ id }) => id));
			while (refreshed.length < limit && page.nextCursor) {
				page = await listThreads(rootStore.restApiContext, projectId, agentId, {
					limit: limit - refreshed.length,
					cursor: page.nextCursor,
					filters: requestedFilters
				});
				if (latestKey !== key || refreshId !== latestRefreshId) return;
				refreshed.push(...page.threads.filter(({ id }) => !seen.has(id)));
				for (const { id } of page.threads) seen.add(id);
			}
			if (loading.value || threads.value.length !== threadCount || nextCursor.value !== cursor) return;
			threads.value = refreshed;
			nextCursor.value = page.nextCursor;
		} catch {}
	}
	async function loadMore(projectId, agentId) {
		if (!nextCursor.value || loading.value) return;
		const key = keyFor(projectId, agentId, filters.value);
		if (latestKey !== null && latestKey !== key) return;
		loading.value = true;
		try {
			const page = await listThreads(useRootStore().restApiContext, projectId, agentId, {
				limit: ITEMS_PER_PAGE,
				cursor: nextCursor.value,
				filters: filters.value
			});
			if (latestKey !== key) return;
			const seen = new Set(threads.value.map((t) => t.id));
			const fresh = page.threads.filter((t) => !seen.has(t.id));
			threads.value.push(...fresh);
			nextCursor.value = page.nextCursor;
		} finally {
			if (latestKey === key) loading.value = false;
		}
	}
	async function getThreadDetail$1(projectId, agentId, threadId) {
		return await getThreadDetail(useRootStore().restApiContext, projectId, agentId, threadId);
	}
	function upsertThread(thread) {
		const index = threads.value.findIndex(({ id }) => id === thread.id);
		if (index === -1) {
			threads.value.push(thread);
			return;
		}
		threads.value.splice(index, 1, thread);
	}
	async function deleteThread$1(projectId, agentId, threadId) {
		await deleteThread(useRootStore().restApiContext, projectId, agentId, threadId);
		threads.value = threads.value.filter((t) => t.id !== threadId);
	}
	async function exportThreadToLangSmith$1(projectId, agentId, threadId) {
		return await exportThreadToLangSmith(useRootStore().restApiContext, projectId, agentId, threadId);
	}
	async function setFilters(projectId, agentId, value) {
		if (JSON.stringify(filters.value) === JSON.stringify(value)) return;
		filters.value = { ...value };
		threads.value = [];
		nextCursor.value = null;
		await fetchThreads(projectId, agentId);
	}
	function scheduleAutoRefresh() {
		if (!autoRefreshActive || !autoRefresh.value || !currentProjectId || !currentAgentId) return;
		refreshTimer = setTimeout(async () => {
			refreshTimer = null;
			if (currentProjectId && currentAgentId && !document.hidden) await refreshThreads(currentProjectId, currentAgentId);
			if (autoRefreshActive) scheduleAutoRefresh();
		}, AUTO_REFRESH_INTERVAL_MS);
	}
	function startAutoRefresh() {
		stopAutoRefresh();
		if (!autoRefresh.value || !currentProjectId || !currentAgentId) return;
		autoRefreshActive = true;
		scheduleAutoRefresh();
	}
	function stopAutoRefresh() {
		autoRefreshActive = false;
		if (refreshTimer) {
			clearTimeout(refreshTimer);
			refreshTimer = null;
		}
	}
	function reset() {
		stopAutoRefresh();
		threads.value = [];
		nextCursor.value = null;
		loading.value = false;
		currentProjectId = null;
		currentAgentId = null;
		latestKey = null;
		filters.value = defaultAgentSessionFilters();
	}
	return {
		threads,
		nextCursor,
		loading,
		autoRefresh,
		filters,
		fetchThreads,
		refreshThreads,
		loadMore,
		getThreadDetail: getThreadDetail$1,
		upsertThread,
		deleteThread: deleteThread$1,
		exportThreadToLangSmith: exportThreadToLangSmith$1,
		setFilters,
		startAutoRefresh,
		stopAutoRefresh,
		reset
	};
});
//#endregion
//#region src/features/agents/utils/thread-title.ts
/** Cap the inline preview so a paragraph-long first message doesn't blow up dropdown rows. */
var PREVIEW_MAX_CHARS = 60;
function previewFromFirstMessage(text) {
	const trimmed = text.replace(/\s+/g, " ").trim();
	if (!trimmed) return "";
	if (trimmed.length <= PREVIEW_MAX_CHARS) return trimmed;
	return `${trimmed.slice(0, PREVIEW_MAX_CHARS - 1).trimEnd()}…`;
}
/**
* Display title for a chat thread, in fallback order:
*
* 1. `title` — LLM-generated summary, set after the first turn completes.
* 2. `firstMessage` preview — what the user actually typed, available as soon
*    as the thread is persisted. Distinguishes untitled sessions in lists.
* 3. `fallbackLabel` — the i18n "New chat" string for empty / brand-new sessions.
*/
function formatThreadTitle(thread, fallbackLabel) {
	if (thread.title) return thread.title;
	if (thread.firstMessage) {
		const preview = previewFromFirstMessage(thread.firstMessage);
		if (preview) return preview;
	}
	return fallbackLabel;
}
function useThreadTitle() {
	const i18n = useI18n();
	return (thread) => formatThreadTitle(thread, i18n.baseText("agents.builder.chat.newChat.label"));
}
//#endregion
export { useAgentSessionsStore as n, defaultAgentSessionFilters as r, useThreadTitle as t };
