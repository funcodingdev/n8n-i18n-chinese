import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { It as ref, Pt as reactive, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { v as i18n } from "./_MapCache-CveP8-Y8.js";
import { bt as listenForCredentialChanges, xt as useCredentialsStore } from "./workflows.store-CE9to9ba.js";
import { $n as makeRestApiRequest, dr as defineStore, t as useRootStore } from "./useRootStore-DW1e2yEy.js";
import { Ht as require_escapeRegExp, fi as jsonParse } from "./src-B7RBhJEE.js";
import { t as useTelemetry } from "./useTelemetry-CZKoOy4G.js";
import { n as useToast } from "./useToast-l0SD6t_F.js";
import { o as require_startCase } from "./evaluation.store-CDYiGu-d.js";
//#region src/features/credentials/templatedAuth.utils.ts
var import_escapeRegExp = /* @__PURE__ */ __toESM(require_escapeRegExp(), 1);
var import_startCase = /* @__PURE__ */ __toESM(require_startCase(), 1);
/**
* Helpers for Templated Custom Auth (`httpTemplatedCustomAuth`) credentials:
* the template's `{{marker}}`s are the source of truth for which inputs a
* simple view renders; placeholder defs only contribute labels and masking.
*
* Markers are NOT n8n expressions: they are plain named placeholders that the
* server substitutes per JSON leaf with stored values, never evaluated (an
* agent/user-supplied template must not become an eval surface). Expressions
* only appear as placeholder *values* (e.g. `={{ $secrets.vault.key }}`),
* where the platform's expression handling applies.
*/
var TEMPLATED_CUSTOM_AUTH_CREDENTIAL_TYPE = "httpTemplatedCustomAuth";
var PLACEHOLDER_MARKER_REGEX = /\{\{\s*([\w.-]+)\s*\}\}/g;
/** Parse a credential's JSON-string field, tolerating blanks and garbage. */
function parseTemplatedAuthField(raw, fallback) {
	if (typeof raw !== "string" || raw.trim() === "") return fallback;
	return jsonParse(raw, { fallbackValue: fallback });
}
/**
* Same shape rule as the server resolver (assertTemplatedAuthParts in
* packages/nodes-base/utils/templated-auth.ts): the template must be an
* object whose headers/body/qs parts, when present, are objects too — a
* parseable but wrong-shaped template would only fail at resolve time.
*/
function isValidTemplateShape(template) {
	if (typeof template !== "object" || template === null || Array.isArray(template)) return false;
	return [
		"headers",
		"body",
		"qs"
	].every((part) => {
		const value = template[part];
		return value === void 0 || typeof value === "object" && value !== null && !Array.isArray(value);
	});
}
/** All string leaves of a parsed template, in depth-first encounter order. */
function stringLeaves(value) {
	if (typeof value === "string") return [value];
	if (Array.isArray(value)) return value.flatMap(stringLeaves);
	if (typeof value === "object" && value !== null) return Object.values(value).flatMap(stringLeaves);
	return [];
}
/** All `{{marker}}` names in the template, deduplicated in encounter order. */
function extractTemplateMarkers(template) {
	return [...new Set(stringLeaves(template).flatMap((leaf) => [...leaf.matchAll(PLACEHOLDER_MARKER_REGEX)].map((match) => match[1])))];
}
/**
* Static template text directly before a `{{marker}}` in the same string
* (e.g. `Key ` in `Key {{api_key}}`), used to strip a pasted duplicate of
* that prefix (some dashboards copy `Key abc…` including the scheme word).
*/
function markerPrefix(template, name) {
	const marker = new RegExp(`\\{\\{\\s*${(0, import_escapeRegExp.default)(name)}\\s*\\}\\}`);
	for (const leaf of stringLeaves(template)) {
		const match = marker.exec(leaf);
		if (match && match.index > 0) return leaf.slice(0, match.index);
	}
	return "";
}
/**
* Normalize a value emitted by a guided-form input back to what should be
* stored: the displayed blanking mask (bare, or '='-prefixed by the expression
* toggle, which re-emits the displayed value) maps back to the `***` sentinel,
* so the mask itself can never be saved over the real secret.
*/
function storedPlaceholderValue(displayed) {
	const bare = displayed.startsWith("=") ? displayed.slice(1) : displayed;
	return bare === "__n8n_BLANK_VALUE_e5362baf-c777-4d57-a609-6eaf1f9e87f6" || bare === "***" ? "***" : displayed;
}
/** Trim a pasted value and strip a duplicated template prefix. Expressions
*  (external-secrets references) pass through untouched. */
function cleanPlaceholderValue(template, name, value) {
	if (value.startsWith("=")) return value;
	let cleaned = value.trim();
	const prefix = markerPrefix(template, name);
	if (prefix && cleaned.startsWith(prefix)) cleaned = cleaned.slice(prefix.length).trim();
	return cleaned;
}
function parsePlaceholderDefs(raw) {
	const parsed = parseTemplatedAuthField(raw, []);
	if (!Array.isArray(parsed)) return [];
	return parsed.filter((def) => typeof def?.name === "string");
}
function parsePlaceholderValues(raw) {
	const parsed = parseTemplatedAuthField(raw, {});
	if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return {};
	return Object.fromEntries(Object.entries(parsed).filter((entry) => typeof entry[1] === "string"));
}
/**
* "fal.ai API Key" + user → "fal.ai API Key (Jan D)". Suffixes the creator so
* same-recipe credentials stay tellable-apart in shared projects.
*/
function composeCredentialNameWithUser(base, user) {
	const first = user?.firstName?.trim();
	if (!first) return base;
	const lastInitial = user?.lastName?.trim().charAt(0) ?? "";
	return `${base} (${first}${lastInitial ? ` ${lastInitial}` : ""})`;
}
/**
* Human service identity for labels: the recipe's suggested credential name
* ("fal.ai API Key").
*/
function deriveServiceName(setupHint) {
	return setupHint?.suggestedName?.trim() || void 0;
}
/** A stored URL only when it parses as http(s) — junk must not reach the
*  handoff context's strict url() validation. */
function parseHttpUrl(value) {
	if (typeof value !== "string" || !/^https?:\/\//i.test(value)) return void 0;
	try {
		new URL(value);
		return value;
	} catch {
		return;
	}
}
/**
* The guided form's input labels, one per template marker — what the user
* actually pastes into a recipe-created credential.
*/
function listPlaceholderTitles(credentialData) {
	const template = parseTemplatedAuthField(credentialData.template, {});
	const defsByName = new Map(parsePlaceholderDefs(credentialData.placeholderDefs).map((def) => [def.name, def]));
	return extractTemplateMarkers(template).map((marker) => defsByName.get(marker)?.title || (0, import_startCase.default)(marker));
}
//#endregion
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
	const catalog = ref(null);
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
		isLoadingConnections.value = true;
		try {
			connections.value = await fetchMcpConnections(rootStore.restApiContext);
		} catch (error) {
			toast.showError(error, i18n.baseText("instanceAi.mcp.error.fetchConnections"));
		} finally {
			isLoadingConnections.value = false;
		}
	}
	async function fetchCatalogLazy() {
		if (catalog.value !== null) return;
		isLoadingCatalog.value = true;
		try {
			catalog.value = await fetchMcpRegistryServers(rootStore.restApiContext);
		} catch (error) {
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
		catalog.value = null;
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
export { cleanPlaceholderValue as a, extractTemplateMarkers as c, parseHttpUrl as d, parsePlaceholderDefs as f, storedPlaceholderValue as h, TEMPLATED_CUSTOM_AUTH_CREDENTIAL_TYPE as i, isValidTemplateShape as l, parseTemplatedAuthField as m, useInstanceAiMcpTelemetry as n, composeCredentialNameWithUser as o, parsePlaceholderValues as p, useInstanceAiMcpStore as r, deriveServiceName as s, iconForTool as t, listPlaceholderTitles as u };
