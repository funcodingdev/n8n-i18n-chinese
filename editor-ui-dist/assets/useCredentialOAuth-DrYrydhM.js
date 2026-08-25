import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-CNBJaijc.js";
import { hn as useProjectsStore, t as useWorkflowsStore, xt as useCredentialsStore } from "./workflows.store-CV9fQhc2.js";
import { Br as mergeNodeProperties, Lt as createResultError, Rt as createResultOk, br as displayParameter } from "./src-JwBmTNgK.js";
import { t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { n as useToast } from "./useToast-D5wqhIPz.js";
import { i as waitForOAuthCallback, n as hasOAuthTokenData, t as getTrustedOAuthOrigins } from "./oauthCallback-B9ZNfDo3.js";
//#region src/features/credentials/composables/useCredentialOAuth.ts
/**
* Composable for OAuth credential type detection and authorization.
* Used by NodeCredentials for the quick connect OAuth flow.
*/
function useCredentialOAuth() {
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const workflowsStore = useWorkflowsStore();
	const rootStore = useRootStore();
	const toast = useToast();
	const i18n = useI18n();
	const telemetry = useTelemetry();
	const oauthAbortController = ref(null);
	const pendingCredentialId = ref(null);
	/**
	* Get parent types for a credential type (e.g., googleSheetsOAuth2Api extends googleOAuth2Api extends oAuth2Api).
	*/
	function getParentTypes(credentialTypeName, visited = /* @__PURE__ */ new Set()) {
		if (visited.has(credentialTypeName)) return [];
		visited.add(credentialTypeName);
		const type = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (type?.extends === void 0) return [];
		const types = [];
		for (const typeName of type.extends) {
			types.push(typeName);
			types.push(...getParentTypes(typeName, visited));
		}
		return types;
	}
	/**
	* Check if a credential type is an OAuth type (extends oAuth2Api or oAuth1Api).
	*/
	function isOAuthCredentialType(credentialTypeName) {
		const parentTypes = getParentTypes(credentialTypeName);
		return credentialTypeName === "oAuth2Api" || credentialTypeName === "oAuth1Api" || parentTypes.includes("oAuth2Api") || parentTypes.includes("oAuth1Api");
	}
	/**
	* Check if a credential type is Google OAuth (extends googleOAuth2Api).
	*/
	function isGoogleOAuthType(credentialTypeName) {
		const parentTypes = getParentTypes(credentialTypeName);
		return credentialTypeName === "googleOAuth2Api" || parentTypes.includes("googleOAuth2Api");
	}
	/**
	* Check if an OAuth credential type has all required fields managed/overwritten.
	* This indicates the credential can be used with quick connect (just OAuth flow, no manual config).
	* Reuses logic patterns from CredentialEdit.vue (credentialProperties + requiredPropertiesFilled).
	*/
	function canOAuthCredentialQuickConnect(credentialTypeName) {
		if (!isOAuthCredentialType(credentialTypeName)) return false;
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return false;
		if (credentialType.__skipManagedCreation) return false;
		const overwrittenProperties = credentialType.__overwrittenProperties ?? [];
		const nonOverwrittenConfigurableProperties = getManuallyConfigurableProperties(credentialType).filter((prop) => !overwrittenProperties.includes(prop.name));
		if (nonOverwrittenConfigurableProperties.length === 0) return true;
		if (overwrittenProperties.length === 0) return false;
		return nonOverwrittenConfigurableProperties.every((prop) => prop.required !== true || prop.type !== "string" && prop.type !== "number");
	}
	/**
	* Returns properties the user must fill in. Walks the extends chain so
	* inherited fields (e.g. `clientId`/`clientSecret` from `oAuth2Api`) are
	* considered, and applies `displayOptions` against the effective defaults
	* — matching the credential edit modal's `credentialProperties` /
	* `displayCredentialParameter` logic.
	*/
	function getManuallyConfigurableProperties(credentialType) {
		const mergedProperties = getMergedCredentialProperties(credentialType.name);
		const defaults = {};
		for (const prop of mergedProperties) defaults[prop.name] = prop.default;
		return mergedProperties.filter((prop) => {
			if (prop.type === "hidden" || prop.type === "notice") return false;
			return displayParameter(defaults, prop, null, null);
		});
	}
	function getMergedCredentialProperties(credentialTypeName, visited = /* @__PURE__ */ new Set()) {
		if (visited.has(credentialTypeName)) return [];
		visited.add(credentialTypeName);
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return [];
		if (credentialType.extends === void 0) return credentialType.properties;
		const merged = [];
		for (const parentName of credentialType.extends) mergeNodeProperties(merged, getMergedCredentialProperties(parentName, visited));
		mergeNodeProperties(merged, credentialType.properties);
		return merged;
	}
	function hasManualCredentialInputFields(credentialType) {
		return getManuallyConfigurableProperties(credentialType).length > 0;
	}
	async function getOAuthAuthorizationUrl(credential) {
		const parentTypes = getParentTypes(credential.type);
		try {
			if (credential.type === "oAuth2Api" || parentTypes.includes("oAuth2Api")) return createResultOk(await credentialsStore.oAuth2Authorize(credential));
			if (credential.type === "oAuth1Api" || parentTypes.includes("oAuth1Api")) return createResultOk(await credentialsStore.oAuth1Authorize(credential));
		} catch (error) {
			toast.showError(error, i18n.baseText("credentialEdit.credentialEdit.showError.generateAuthorizationUrl.title"));
			return createResultError("api-error");
		}
		return createResultError("no-url");
	}
	function isValidHttpUrl(url) {
		try {
			const parsed = new URL(url);
			return ["http:", "https:"].includes(parsed.protocol);
		} catch {
			return false;
		}
	}
	function showOAuthUrlError() {
		toast.showError(new Error(i18n.baseText("credentialEdit.credentialEdit.showError.invalidOAuthUrl.message")), i18n.baseText("credentialEdit.credentialEdit.showError.invalidOAuthUrl.title"));
	}
	function showPopupBlockedError() {
		toast.showError(new Error(i18n.baseText("credentialEdit.credentialEdit.showError.oauthPopupBlocked.message")), i18n.baseText("credentialEdit.credentialEdit.showError.oauthPopupBlocked.title"));
	}
	function openOAuthPopup(url, signal) {
		const popup = window.open(url, "OAuth Authorization", "scrollbars=no,resizable=yes,status=no,titlebar=no,location=no,toolbar=no,menubar=no,width=500,height=700");
		signal?.addEventListener("abort", () => {
			popup?.close();
		});
		return popup;
	}
	async function isConnected(credentialId) {
		try {
			return hasOAuthTokenData(await credentialsStore.getCredentialData({ id: credentialId }));
		} catch {
			return false;
		}
	}
	/**
	* Authorize OAuth credentials by opening a popup and listening for callback.
	* Returns true if OAuth was successful, false if cancelled or failed.
	*
	* Must be called synchronously from the click handler (or be given a popup
	* that was opened synchronously from it, see `preopenedPopup`).
	*/
	async function authorize(credential, signal, options = {}) {
		const popup = options.preopenedPopup ?? openOAuthPopup("about:blank", signal);
		if (!popup) {
			showPopupBlockedError();
			return false;
		}
		const canVerifyConnected = !credential.isResolvable && !await isConnected(credential.id);
		const urlResult = await getOAuthAuthorizationUrl(credential);
		if (!urlResult.ok) {
			popup.close();
			if (urlResult.error === "no-url") showOAuthUrlError();
			return false;
		}
		if (!isValidHttpUrl(urlResult.result)) {
			popup.close();
			showOAuthUrlError();
			return false;
		}
		popup.location.href = urlResult.result;
		let outcome = await waitForOAuthCallback({
			popup,
			trustedOrigins: getTrustedOAuthOrigins(rootStore.urlBaseEditor),
			signal,
			verifyConnected: canVerifyConnected ? async () => await isConnected(credential.id) : void 0,
			abortOnPopupClose: options.abortOnPopupClose
		});
		if ((outcome === "timeout" || outcome === "aborted") && canVerifyConnected && await isConnected(credential.id)) outcome = "success";
		popup.close();
		if (outcome === "success") toast.showMessage({
			title: i18n.baseText("nodeCredentials.oauth.accountConnected"),
			type: "success"
		});
		else if (outcome !== "aborted") toast.showMessage({
			title: i18n.baseText("nodeCredentials.oauth.accountConnectionFailed"),
			type: "error"
		});
		return outcome === "success";
	}
	/**
	* Authorize a credential that was just created. Keeps it out of the store
	* until OAuth succeeds and removes it when authorization is not completed.
	*/
	async function authorizeNewCredential(credential, options = {}) {
		const controller = new AbortController();
		oauthAbortController.value = controller;
		let success = false;
		try {
			success = await authorize(credential, controller.signal, options);
			if (success) credentialsStore.upsertCredential(credential);
			return success;
		} finally {
			oauthAbortController.value = null;
			if (!success) await credentialsStore.deleteCredential({ id: credential.id }).catch(() => {});
		}
	}
	/**
	* Create a new OAuth credential and run the full authorization flow.
	* Returns the credential on success, null on failure (cleans up automatically).
	*/
	async function createAndAuthorize(credentialTypeName, nodeType) {
		const credentialType = credentialsStore.getCredentialTypeByName(credentialTypeName);
		if (!credentialType) return null;
		const controller = new AbortController();
		oauthAbortController.value = controller;
		const popup = openOAuthPopup("about:blank", controller.signal);
		if (!popup) {
			showPopupBlockedError();
			oauthAbortController.value = null;
			return null;
		}
		const data = {};
		const allowedHttpRequestDomainsProperty = credentialType.properties.find((prop) => prop.name === "allowedHttpRequestDomains");
		if (!allowedHttpRequestDomainsProperty || allowedHttpRequestDomainsProperty.type !== "hidden") data.allowedHttpRequestDomains = "none";
		let credential;
		try {
			const name = await credentialsStore.getNewCredentialName({
				credentialTypeName,
				fallbackName: credentialType.displayName
			});
			credential = await credentialsStore.createNewCredential({
				id: "",
				name,
				type: credentialTypeName,
				data
			}, projectsStore.currentProject?.id, void 0, { skipStoreUpdate: true });
			telemetry.track("User created credentials", {
				credential_type: credential.type,
				credential_id: credential.id,
				workflow_id: workflowsStore.workflowId
			});
		} catch (error) {
			popup.close();
			oauthAbortController.value = null;
			toast.showError(error, i18n.baseText("nodeCredentials.showMessage.title"));
			return null;
		}
		pendingCredentialId.value = credential.id;
		const success = await authorize(credential, controller.signal, { preopenedPopup: popup });
		oauthAbortController.value = null;
		pendingCredentialId.value = null;
		const trackProperties = {
			credential_type: credentialTypeName,
			workflow_id: workflowsStore.workflowId ?? null,
			credential_id: credential.id,
			is_complete: true,
			is_new: true,
			is_valid: success,
			uses_external_secrets: false
		};
		if (nodeType) trackProperties.node_type = nodeType;
		telemetry.track("User saved credentials", trackProperties);
		if (success) {
			credentialsStore.upsertCredential(credential);
			return credential;
		}
		credentialsStore.deleteCredential({ id: credential.id });
		return null;
	}
	/**
	* Cancel any in-progress OAuth authorization and clean up the pending credential.
	*/
	function cancelAuthorize() {
		if (oauthAbortController.value) oauthAbortController.value.abort();
		const credentialId = pendingCredentialId.value;
		if (!credentialId) return;
		isConnected(credentialId).then((connected) => {
			if (connected) credentialsStore.fetchAllCredentials();
			else credentialsStore.deleteCredential({ id: credentialId });
		});
	}
	return {
		getParentTypes,
		isOAuthCredentialType,
		isGoogleOAuthType,
		canOAuthCredentialQuickConnect,
		hasManualCredentialInputFields,
		authorize,
		authorizeNewCredential,
		createAndAuthorize,
		cancelAuthorize
	};
}
//#endregion
export { useCredentialOAuth as t };
