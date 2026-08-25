import { Et as effectScope, It as ref, Pt as reactive, S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { i as i18n } from "./src-a4RL4cTS.js";
import { bt as listenForCredentialChanges, xt as useCredentialsStore } from "./workflows.store-DHQ2sN1t.js";
import { Qn as makeRestApiRequest, fr as defineStore, t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { n as useToast } from "./useToast-BdIkYyHv.js";
import { n as useUIStore, t as listenForModalChanges } from "./ui.store-C5cG2quo.js";
import { t as useCredentialOAuth } from "./useCredentialOAuth-Dr5YuL4z.js";
//#region src/features/ai/instanceAi/instanceAi.mcp.api.ts
async function fetchMcpRegistryServers(context) {
	return await makeRestApiRequest(context, "GET", "/mcp-registry/servers");
}
async function fetchMcpConnections(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/mcp/connections");
}
async function fetchMcpConnectionTools(context, id) {
	return await makeRestApiRequest(context, "GET", `/instance-ai/mcp/connections/${encodeURIComponent(id)}/tools`);
}
async function createMcpConnection(context, body) {
	return await makeRestApiRequest(context, "POST", "/instance-ai/mcp/connections", body);
}
async function updateMcpConnection(context, id, body) {
	return await makeRestApiRequest(context, "PATCH", `/instance-ai/mcp/connections/${encodeURIComponent(id)}`, body);
}
async function deleteMcpConnection(context, id) {
	await makeRestApiRequest(context, "DELETE", `/instance-ai/mcp/connections/${encodeURIComponent(id)}`);
}
//#endregion
//#region src/features/ai/instanceAi/instanceAiMcp.store.ts
var useInstanceAiMcpStore = defineStore("instanceAiMcp", () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const credentialsStore = useCredentialsStore();
	const connections = ref([]);
	let connectionsLoad = null;
	const catalog = ref(null);
	let catalogLoad = null;
	const connectionToolsById = reactive(/* @__PURE__ */ new Map());
	const isLoadingConnections = ref(false);
	const isLoadingCatalog = ref(false);
	const inFlightConnectionToolsById = /* @__PURE__ */ new Map();
	const connectionsByServerSlug = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const connection of connections.value) {
			const list = map.get(connection.serverSlug) ?? [];
			list.push(connection);
			map.set(connection.serverSlug, list);
		}
		return map;
	});
	async function fetchConnections() {
		connectionsLoad ??= loadConnections();
		await connectionsLoad;
	}
	async function loadConnections() {
		isLoadingConnections.value = true;
		try {
			connections.value = await fetchMcpConnections(rootStore.restApiContext);
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.fetchConnections"));
		} finally {
			connectionsLoad = null;
			isLoadingConnections.value = false;
		}
	}
	async function fetchCatalogLazy() {
		catalogLoad ??= loadCatalog();
		await catalogLoad;
	}
	async function loadCatalog() {
		isLoadingCatalog.value = true;
		try {
			catalog.value = await fetchMcpRegistryServers(rootStore.restApiContext);
		} catch (error) {
			catalogLoad = null;
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.fetchCatalog"));
		} finally {
			isLoadingCatalog.value = false;
		}
	}
	function clearConnectionTools(id) {
		connectionToolsById.delete(id);
		inFlightConnectionToolsById.delete(id);
	}
	async function fetchConnectionToolsLazy(id) {
		if (connectionToolsById.has(id)) return;
		const inFlight = inFlightConnectionToolsById.get(id);
		if (inFlight) {
			await inFlight.catch(() => void 0);
			return;
		}
		const promise = fetchMcpConnectionTools(rootStore.restApiContext, id);
		const isCurrent = () => inFlightConnectionToolsById.get(id) === promise;
		inFlightConnectionToolsById.set(id, promise);
		try {
			const tools = await promise;
			if (isCurrent()) connectionToolsById.set(id, tools);
		} catch (error) {
			if (isCurrent()) toast.showError(error, i18n.baseText("instanceAi.mcp.error.fetchTools"));
		} finally {
			if (isCurrent()) inFlightConnectionToolsById.delete(id);
		}
	}
	async function connect(body) {
		try {
			const created = await createMcpConnection(rootStore.restApiContext, body);
			connections.value = [...connections.value, created];
			return created;
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.connect"));
			return null;
		}
	}
	async function updateConnection(id, body) {
		try {
			const updated = await updateMcpConnection(rootStore.restApiContext, id, body);
			connections.value = connections.value.map((c) => c.id === id ? updated : c);
			if (body.credentialId) {
				clearConnectionTools(id);
				fetchConnectionToolsLazy(id);
			}
			return updated;
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.updateSettings"));
			return null;
		}
	}
	async function disconnect(id) {
		try {
			await deleteMcpConnection(rootStore.restApiContext, id);
			connections.value = connections.value.filter((c) => c.id !== id);
			clearConnectionTools(id);
			return true;
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.disconnect"));
			return false;
		}
	}
	listenForCredentialChanges({
		store: credentialsStore,
		onCredentialDeleted: (deletedCredentialId) => {
			const orphaned = connections.value.filter((c) => c.credentialId === deletedCredentialId);
			if (orphaned.length === 0) return;
			connections.value = connections.value.filter((c) => c.credentialId !== deletedCredentialId);
			for (const connection of orphaned) clearConnectionTools(connection.id);
		}
	});
	function reset() {
		connections.value = [];
		connectionsLoad = null;
		catalog.value = null;
		catalogLoad = null;
		connectionToolsById.clear();
		inFlightConnectionToolsById.clear();
	}
	return {
		connections,
		catalog,
		connectionToolsById,
		isLoadingConnections,
		isLoadingCatalog,
		connectionsByServerSlug,
		fetchConnections,
		fetchCatalogLazy,
		fetchConnectionToolsLazy,
		connect,
		updateConnection,
		disconnect,
		reset
	};
});
//#endregion
//#region src/features/ai/instanceAi/instanceAiMcp.telemetry.ts
function useInstanceAiMcpTelemetry() {
	const telemetry = useTelemetry();
	return {
		trackToolsListOpened() {
			telemetry.track("Instance AI tools list opened");
		},
		trackSettingsOpened(serverSlug) {
			telemetry.track("Instance AI mcp settings opened", { server_slug: serverSlug });
		},
		trackFirstCredentialConnectionStart(serverSlug) {
			telemetry.track("Instance AI mcp first credential connection start", { server_slug: serverSlug });
		},
		trackCredentialDropdownOpened(serverSlug) {
			telemetry.track("Instance AI mcp credential dropdown opened", { server_slug: serverSlug });
		},
		trackExistingCredentialSelected(serverSlug) {
			telemetry.track("Instance AI mcp existing credential selected", { server_slug: serverSlug });
		},
		trackNewCredentialConnectionStart(serverSlug) {
			telemetry.track("Instance AI mcp new credential connection start", { server_slug: serverSlug });
		},
		trackToolFilterSettingsUpdated(serverSlug, inclusionMode) {
			telemetry.track("Instance AI mcp tool filter settings updated", {
				server_slug: serverSlug,
				inclusion_mode: inclusionMode
			});
		}
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useMcpServerConnect.ts
var inFlightConnectsByServerSlug = /* @__PURE__ */ new Map();
/**
* The credential half of connecting an MCP server, shared by the tools
* connection modal and the inline chat card. Connection state itself stays in
* `useInstanceAiMcpStore`; this only drives the flow that fills it.
*/
function useMcpServerConnect() {
	const mcpStore = useInstanceAiMcpStore();
	const uiStore = useUIStore();
	const credentialsStore = useCredentialsStore();
	const toast = useToast();
	const { canOAuthCredentialQuickConnect, createAndAuthorize } = useCredentialOAuth();
	/**
	* Patches the existing connection instead of creating a second one — the
	* backend allows only one per server. Null when nothing changed or failed.
	*/
	async function connectWithCredential(serverSlug, credentialId) {
		const existing = mcpStore.connections.find((c) => c.serverSlug === serverSlug);
		if (!existing) {
			const created = await mcpStore.connect({
				serverSlug,
				credentialId
			});
			if (!created) return null;
			toast.showMessage({
				type: "success",
				title: i18n.baseText("instanceAi.mcp.success.connect")
			});
			return created.id;
		}
		if (existing.credentialId === credentialId) return null;
		const updated = await mcpStore.updateConnection(existing.id, { credentialId });
		if (!updated) return null;
		toast.showMessage({
			type: "success",
			title: i18n.baseText("instanceAi.mcp.success.changeCredential")
		});
		return updated.id;
	}
	/**
	* Connects a server the user has no credential for yet: OAuth types needing no
	* manual input are authorized in place, the rest go through the credential edit
	* modal. Resolves once the user is done, with null if they backed out.
	*/
	async function connectServer(server) {
		const inFlight = inFlightConnectsByServerSlug.get(server.slug);
		if (inFlight) return await inFlight;
		const attempt = startConnect(server);
		inFlightConnectsByServerSlug.set(server.slug, attempt);
		try {
			return await attempt;
		} finally {
			inFlightConnectsByServerSlug.delete(server.slug);
		}
	}
	async function startConnect(server) {
		if (canOAuthCredentialQuickConnect(server.credentialType)) {
			const credential = await createAndAuthorize(server.credentialType);
			return credential ? await connectWithCredential(server.slug, credential.id) : null;
		}
		return await connectViaCredentialModal(server);
	}
	/**
	* Opens the credential edit modal for the server and connects whatever
	* credential the user created there once they close it. Nothing is listening
	* outside an attempt, so unrelated credential edits stay free.
	*/
	async function connectViaCredentialModal(server) {
		return await new Promise((settle) => {
			let createdCredentialId = null;
			const listeners = effectScope(true);
			listeners.run(() => {
				listenForCredentialChanges({
					store: credentialsStore,
					onCredentialCreated: (credential) => {
						if (credential.type === server.credentialType) createdCredentialId = credential.id;
					}
				});
				listenForModalChanges({
					store: uiStore,
					onModalClosed: (modalName) => {
						if (modalName !== "editCredential") return;
						listeners.stop();
						if (createdCredentialId === null) {
							settle(null);
							return;
						}
						connectWithCredential(server.slug, createdCredentialId).catch(() => null).then(settle);
					}
				});
			});
			try {
				uiStore.openNewCredential(server.credentialType);
			} catch (error) {
				listeners.stop();
				throw error;
			}
		});
	}
	/**
	* The adapter `ToolCredentialPicker` injects. Only the "create a new
	* credential" leg differs per surface, so callers pass just that.
	*/
	function createCredentialAdapter(openNewCredential) {
		return {
			getCredentialsByType: (authType) => credentialsStore.getCredentialsByType(authType).map((credential) => ({
				id: credential.id,
				name: credential.name,
				type: credential.type
			})),
			openNewCredential,
			openExistingCredential: (credentialId) => uiStore.openExistingCredential(credentialId)
		};
	}
	return {
		connectServer,
		connectWithCredential,
		createCredentialAdapter
	};
}
//#endregion
//#region src/features/ai/instanceAi/toolIcons.ts
function pickIconForTheme(icons, appliedTheme) {
	if (icons.length === 0) return null;
	const themed = icons.find((i) => i.theme === appliedTheme);
	if (themed) return themed.src;
	return (icons.find((i) => i.theme === void 0) ?? icons[0]).src;
}
function iconForTool(icons, appliedTheme) {
	const src = pickIconForTheme(icons, appliedTheme);
	return src ? {
		type: "file",
		src
	} : {
		type: "icon",
		name: "mcp"
	};
}
//#endregion
export { useInstanceAiMcpStore as i, useMcpServerConnect as n, useInstanceAiMcpTelemetry as r, iconForTool as t };
