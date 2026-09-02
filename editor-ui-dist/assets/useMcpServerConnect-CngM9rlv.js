import { Et as effectScope } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { i as i18n } from "./src-95uC3wI4.js";
import { Ct as listenForCredentialChanges, wt as useCredentialsStore } from "./workflows.store-QD0eo9S6.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { n as useUIStore, t as listenForModalChanges } from "./ui.store-Bnte4owf.js";
import { t as useCredentialOAuth } from "./useCredentialOAuth-DOx1XX9P.js";
import { r as useInstanceAiMcpStore } from "./toolIcons-JASjGTnD.js";
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
export { useMcpServerConnect as t };
