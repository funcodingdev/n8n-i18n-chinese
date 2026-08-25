import { It as ref, S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { i as i18n } from "./src-CNBJaijc.js";
import { Bi as isWorkflowListItem, E as useWorkflowDocumentStore, S as createWorkflowDocumentId } from "./workflows.store-CV9fQhc2.js";
import { Qn as makeRestApiRequest, Zn as getFullApiResponse, fr as defineStore, t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as useSettingsStore } from "./settings.store-DtdxCj3f.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-6Bsu-Vve.js";
import "./mcp.constants-CtGlan57.js";
import { t as EMPTY_OAUTH_CLIENT_FILTERS } from "./clients.utils-CRRqDZhO.js";
//#region src/features/ai/mcpAccess/mcp.api.ts
async function updateMcpSettings(context, settings) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/settings", settings);
}
async function fetchApiKey(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/api-key");
}
async function rotateApiKey(context) {
	return await makeRestApiRequest(context, "POST", "/mcp/api-key/rotate");
}
async function getAllowedRedirectUris(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/oauth/allowed-redirect-uris");
}
async function updateAllowedRedirectUris(context, uris) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/oauth/allowed-redirect-uris", { uris });
}
/**
* Bulk-toggles MCP availability for a set of workflows scoped by either an
* explicit id list, a project, a folder (+ its descendants), or all
* workflows the user can update.
*/
async function toggleWorkflowsMcpAccessApi(context, target, availableInMCP) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/workflows/toggle-access", {
		availableInMCP,
		...target
	});
}
async function fetchOAuthClients(context, options = {}) {
	const params = Object.fromEntries(Object.entries(options).filter(([, value]) => value !== void 0));
	return await makeRestApiRequest(context, "GET", "/mcp/oauth-clients", Object.keys(params).length > 0 ? params : void 0);
}
async function fetchInstanceMcpClientStats(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/oauth-clients/instance-stats");
}
async function deleteOAuthClient(context, clientId, userId) {
	return await makeRestApiRequest(context, "DELETE", `/mcp/oauth-clients/${encodeURIComponent(clientId)}`, userId ? { userId } : void 0);
}
async function fetchMcpEligibleWorkflows(context, options) {
	const params = {};
	if (options?.take !== void 0) params.take = options.take;
	if (options?.skip !== void 0) params.skip = options.skip;
	if (options?.query) params.filter = JSON.stringify({ query: options.query });
	return await getFullApiResponse(context, "GET", "/mcp/workflows", params);
}
/**
* Bulk-toggles MCP availability for a set of agents scoped by either an
* explicit id list, a project, or all agents the user can update.
*/
async function toggleAgentsMcpAccessApi(context, target, availableInMCP) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/agents/toggle-access", {
		availableInMCP,
		...target
	});
}
async function fetchMcpAgents(context, options) {
	const params = {};
	const query = options?.query?.trim();
	const filter = {
		...query ? { query } : {},
		...options?.availableInMCP !== void 0 ? { availableInMCP: options.availableInMCP } : {}
	};
	if (options?.take !== void 0) params.take = options.take;
	if (options?.skip !== void 0) params.skip = options.skip;
	if (Object.keys(filter).length > 0) params.filter = JSON.stringify(filter);
	return await getFullApiResponse(context, "GET", "/mcp/agents", params);
}
//#endregion
//#region src/features/ai/mcpAccess/mcp.store.ts
var useMCPStore = defineStore("mcp", () => {
	const workflowsListStore = useWorkflowsListStore();
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const currentUserMCPKey = ref(null);
	const oauthClients = ref([]);
	const oauthClientScopeTools = ref(void 0);
	const oauthClientsOwnership = ref("mine");
	const oauthClientTotals = ref({ mine: 0 });
	const oauthClientsPage = ref(0);
	const oauthClientsPageSize = ref(10);
	const oauthClientsFilters = ref({ ...EMPTY_OAUTH_CLIENT_FILTERS });
	/** Total rows matching the filters (across all pages) for the current ownership. */
	const oauthClientsCount = ref(0);
	/** Distinct consent owners for the "Connected by" filter (managers only). */
	const oauthClientOwners = ref([]);
	/** Monotonic token so a slow in-flight list fetch can't overwrite a newer one. */
	let oauthClientsRequestSeq = 0;
	const allowedRedirectUris = ref([]);
	const instanceClientStats = ref(null);
	const connectPopoverOpen = ref(false);
	const mcpAccessEnabled = computed(() => !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
	const mcpManagedByEnv = computed(() => !!settingsStore.moduleSettings.mcp?.mcpManagedByEnv);
	const autoExposeNewWorkflows = computed(() => !!settingsStore.moduleSettings.mcp?.autoExposeNewWorkflows);
	const serverUrl = computed(() => settingsStore.moduleSettings.mcp?.serverUrl ?? `${rootStore.urlBaseEditor}mcp-server/http`);
	async function fetchWorkflowsAvailableForMCP(page = 1, pageSize = 50) {
		const { data, count } = await workflowsListStore.fetchWorkflowsPageWithCount(void 0, page, pageSize, "updatedAt:desc", {
			isArchived: false,
			availableInMCP: true
		}, false, false);
		return {
			data: data.filter(isWorkflowListItem),
			count
		};
	}
	/**
	* Runs a page fetch, clamping to the last non-empty page when the requested
	* one shrank away (e.g. after removing access). Returns the effective 1-based
	* page so callers can sync their table state.
	*/
	async function clampToLastPage(fetchPage, page, pageSize) {
		const response = await fetchPage(page, pageSize);
		if (response.data.length === 0 && response.count > 0 && page > 1) {
			const maxPage = Math.max(1, Math.ceil(response.count / pageSize));
			return {
				...await fetchPage(maxPage, pageSize),
				page: maxPage
			};
		}
		return {
			...response,
			page
		};
	}
	async function fetchWorkflowsAvailableForMCPPage(page, pageSize) {
		return await clampToLastPage(fetchWorkflowsAvailableForMCP, page, pageSize);
	}
	async function fetchAgentsAvailableForMCP(page = 1, pageSize = 50) {
		const { data, count } = await fetchMcpAgents(rootStore.restApiContext, {
			skip: (page - 1) * pageSize,
			take: pageSize,
			availableInMCP: true
		});
		return {
			data,
			count
		};
	}
	async function fetchAgentsAvailableForMCPPage(page, pageSize) {
		return await clampToLastPage(fetchAgentsAvailableForMCP, page, pageSize);
	}
	function applyMcpSettingsResponse(response) {
		settingsStore.moduleSettings.mcp = {
			mcpManagedByEnv: false,
			...settingsStore.moduleSettings.mcp ?? {},
			mcpAccessEnabled: response.mcpAccessEnabled,
			autoExposeNewWorkflows: response.autoExposeNewWorkflows
		};
	}
	async function setMcpAccessEnabled(enabled) {
		const response = await updateMcpSettings(rootStore.restApiContext, { mcpAccessEnabled: enabled });
		applyMcpSettingsResponse(response);
		return response.mcpAccessEnabled;
	}
	async function setAutoExposeNewWorkflows(enabled) {
		const response = await updateMcpSettings(rootStore.restApiContext, { autoExposeNewWorkflows: enabled });
		applyMcpSettingsResponse(response);
		return response.autoExposeNewWorkflows;
	}
	function applyAvailableInMCPToLocalStores(workflowId, availableInMCP) {
		const existing = workflowsListStore.workflowsById[workflowId];
		if (existing) if (existing.settings) existing.settings.availableInMCP = availableInMCP;
		else existing.settings = { availableInMCP };
		useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).mergeSettings({ availableInMCP });
	}
	async function toggleWorkflowMcpAccess(workflowId, availableInMCP) {
		const response = await toggleWorkflowsMcpAccessApi(rootStore.restApiContext, { workflowIds: [workflowId] }, availableInMCP);
		if (!new Set([...response.updatedIds ?? [], ...response.unchangedIds ?? []]).has(workflowId)) throw new Error(i18n.baseText("workflowSettings.toggleMCP.updateSkippedError", { interpolate: { workflowId } }));
		applyAvailableInMCPToLocalStores(workflowId, availableInMCP);
		return response;
	}
	/**
	* Bulk-toggle MCP availability, scoped by an id list, a project,
	* or a folder (+ descendants)
	*/
	async function toggleWorkflowsMcpAccess(target, availableInMCP) {
		const response = await toggleWorkflowsMcpAccessApi(rootStore.restApiContext, target, availableInMCP);
		const confirmedIds = new Set([...response.updatedIds ?? [], ...response.unchangedIds ?? []]);
		for (const id of confirmedIds) applyAvailableInMCPToLocalStores(id, availableInMCP);
		return response;
	}
	async function toggleAgentMcpAccess(agentId, availableInMCP) {
		const response = await toggleAgentsMcpAccessApi(rootStore.restApiContext, { agentIds: [agentId] }, availableInMCP);
		if (!new Set([...response.updatedIds ?? [], ...response.unchangedIds ?? []]).has(agentId)) throw new Error(i18n.baseText("agents.toggleMCP.updateSkippedError", { interpolate: { agentId } }));
		return response;
	}
	/** Bulk-toggle MCP availability for agents, scoped by an id list, a project, or all agents. */
	async function toggleAgentsMcpAccess(target, availableInMCP) {
		return await toggleAgentsMcpAccessApi(rootStore.restApiContext, target, availableInMCP);
	}
	async function getOrCreateApiKey() {
		const apiKey = await fetchApiKey(rootStore.restApiContext);
		currentUserMCPKey.value = apiKey;
		return apiKey;
	}
	async function generateNewApiKey() {
		const apiKey = await rotateApiKey(rootStore.restApiContext);
		currentUserMCPKey.value = apiKey;
		return apiKey;
	}
	function resetCurrentUserMCPKey() {
		currentUserMCPKey.value = null;
	}
	async function getAllOAuthClients() {
		const seq = ++oauthClientsRequestSeq;
		const filters = oauthClientsFilters.value;
		const response = await fetchOAuthClients(rootStore.restApiContext, {
			ownership: oauthClientsOwnership.value,
			skip: oauthClientsPage.value * oauthClientsPageSize.value,
			take: oauthClientsPageSize.value,
			name: filters.search.trim() || void 0,
			ownerId: filters.ownerId ?? void 0,
			type: filters.type ?? void 0,
			connected: filters.connected ?? void 0
		});
		if (seq !== oauthClientsRequestSeq) return response.data;
		if (response.data.length === 0 && response.count > 0 && oauthClientsPage.value > 0) {
			oauthClientsPage.value = Math.max(0, Math.ceil(response.count / oauthClientsPageSize.value) - 1);
			return await getAllOAuthClients();
		}
		oauthClients.value = response.data;
		oauthClientScopeTools.value = response.scopeTools;
		oauthClientTotals.value = response.totals;
		oauthClientsCount.value = response.count;
		oauthClientOwners.value = response.owners ?? [];
		return response.data;
	}
	async function setOAuthClientsOwnership(ownership) {
		oauthClientsOwnership.value = ownership;
		oauthClientsPage.value = 0;
		oauthClientsFilters.value = { ...EMPTY_OAUTH_CLIENT_FILTERS };
		await getAllOAuthClients();
	}
	async function setOAuthClientsFilters(filters) {
		oauthClientsFilters.value = filters;
		oauthClientsPage.value = 0;
		await getAllOAuthClients();
	}
	async function setOAuthClientsPagination(page, pageSize) {
		oauthClientsPage.value = pageSize === oauthClientsPageSize.value ? page : 0;
		oauthClientsPageSize.value = pageSize;
		await getAllOAuthClients();
	}
	async function getInstanceClientStats() {
		try {
			const stats = await fetchInstanceMcpClientStats(rootStore.restApiContext);
			instanceClientStats.value = stats;
			return stats;
		} catch {
			instanceClientStats.value = null;
			return null;
		}
	}
	async function removeOAuthClient(clientId, userId) {
		const response = await deleteOAuthClient(rootStore.restApiContext, clientId, userId);
		try {
			await getAllOAuthClients();
		} catch {}
		return response;
	}
	async function getMcpEligibleWorkflows(options) {
		return await fetchMcpEligibleWorkflows(rootStore.restApiContext, options);
	}
	async function getMcpEligibleAgents(options) {
		return await fetchMcpAgents(rootStore.restApiContext, options);
	}
	function openConnectPopover() {
		connectPopoverOpen.value = true;
	}
	function closeConnectPopover() {
		connectPopoverOpen.value = false;
	}
	async function fetchAllowedRedirectUris() {
		const response = await getAllowedRedirectUris(rootStore.restApiContext);
		allowedRedirectUris.value = response.uris;
		return response.uris;
	}
	async function setAllowedRedirectUris(uris) {
		await updateAllowedRedirectUris(rootStore.restApiContext, uris);
		allowedRedirectUris.value = uris;
	}
	return {
		mcpAccessEnabled,
		mcpManagedByEnv,
		autoExposeNewWorkflows,
		serverUrl,
		fetchWorkflowsAvailableForMCP,
		fetchWorkflowsAvailableForMCPPage,
		fetchAgentsAvailableForMCP,
		fetchAgentsAvailableForMCPPage,
		setMcpAccessEnabled,
		setAutoExposeNewWorkflows,
		toggleWorkflowMcpAccess,
		toggleWorkflowsMcpAccess,
		toggleAgentMcpAccess,
		toggleAgentsMcpAccess,
		currentUserMCPKey,
		getOrCreateApiKey,
		generateNewApiKey,
		resetCurrentUserMCPKey,
		oauthClients,
		oauthClientsOwnership,
		oauthClientTotals,
		oauthClientOwners,
		oauthClientsPage,
		oauthClientsPageSize,
		oauthClientsFilters,
		oauthClientsCount,
		setOAuthClientsOwnership,
		setOAuthClientsFilters,
		setOAuthClientsPagination,
		instanceClientStats,
		getAllOAuthClients,
		oauthClientScopeTools,
		getInstanceClientStats,
		removeOAuthClient,
		getMcpEligibleWorkflows,
		getMcpEligibleAgents,
		allowedRedirectUris,
		fetchAllowedRedirectUris,
		setAllowedRedirectUris,
		connectPopoverOpen,
		openConnectPopover,
		closeConnectPopover
	};
});
//#endregion
export { useMCPStore as t };
