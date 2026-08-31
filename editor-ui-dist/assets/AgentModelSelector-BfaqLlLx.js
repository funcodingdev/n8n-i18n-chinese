import { $ as openBlock, Gt as unref, It as ref, N as defineComponent, S as computed, Ut as toValue, X as onMounted, bt as withCtx, gt as watch, j as createVNode, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-ChH4gKEU.js";
import { y as useLocalStorage } from "./dist-BKkqSB6h.js";
import { n as truncateBeforeLast } from "./truncate-B0m9bkui.js";
import { t as AiModelSelectorDropdown_default } from "./AiModelSelectorDropdown-DfwRsM19.js";
import { s as useRoute } from "./vue-router-Dl3cOHxO.js";
import { hn as useProjectsStore, vt as useAiGatewayStore, xt as useCredentialsStore } from "./workflows.store-BSTkwdxQ.js";
import { $a as AGENT_MODEL_PROVIDERS, Ca as AI_GATEWAY_MANAGED_TAG, da as getResourcePermissions, no as isAgentModelProvider, to as AGENT_MODEL_STRING_REGEX } from "./src-JwBmTNgK.js";
import { t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as useSettingsStore } from "./settings.store-DOBrq3pG.js";
import { Ti as LOCAL_STORAGE_AGENT_MODEL_CREDENTIALS } from "./constants-BP1FOJvU.js";
import { n as useUIStore } from "./ui.store-CNq-Lj0o.js";
import { t as useAiGateway } from "./useAiGateway-BuVbrm7Q.js";
import { v as getModelCatalog, y as getProviderModels } from "./useAgentApi-sdUpTCk-.js";
import { t as useFreeAiCredits } from "./useFreeAiCredits-BdmV-tNk.js";
import { a as AGENT_MODEL_PROVIDER_DEFINITIONS, i as ModelSelectorTriggerIcon_default, n as parseMenuItemId, o as getProviderCredentialTypes, r as ModelSelectorItemLeadingIcon_default, t as buildMenuItemId } from "./menuItemId-DMD7ilsF.js";
//#region ../@n8n/design-system/src/components/N8nDropdownMenu/composables/useDropdownSearch.ts
function defaultSearchFields(item) {
	return [item.label];
}
function normalizeSearchValue(value) {
	return value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}
function fieldMatches(field, query, normalizedQuery) {
	if (!field) return false;
	const normalizedField = field.toLowerCase();
	return normalizedField.includes(query) || normalizedQuery !== "" && normalizeSearchValue(normalizedField).includes(normalizedQuery);
}
function itemMatches(item, query, normalizedQuery, searchFields) {
	return searchFields(item).some((field) => fieldMatches(field, query, normalizedQuery));
}
function defaultMapResult(item) {
	return item;
}
function filterNestedItems(items, query, options, parentMatched = false) {
	const normalizedQuery = normalizeSearchValue(query);
	return items.flatMap((item) => {
		const children = item.children ?? [];
		const matches = parentMatched || itemMatches(item, query, normalizedQuery, options.searchFields);
		if (children.length === 0) return matches && options.isSearchable(item) ? [options.mapResult(item, [item])] : [];
		const filteredChildren = filterNestedItems(children, query, options, matches && options.includeChildrenWhenParentMatches);
		if (matches && options.isSearchable(item)) return [{
			...options.mapResult(item, [item]),
			children: filteredChildren
		}];
		return filteredChildren.length > 0 ? [{
			...item,
			children: filteredChildren
		}] : [];
	});
}
function flattenItems(items, query, options, path = [], parentMatched = false) {
	const normalizedQuery = normalizeSearchValue(query);
	return items.flatMap((item) => {
		const currentPath = [...path, item];
		const children = item.children ?? [];
		const matches = parentMatched || itemMatches(item, query, normalizedQuery, options.searchFields);
		if (children.length === 0) return matches && options.isSearchable(item) ? [options.mapResult(item, currentPath)] : [];
		return flattenItems(children, query, options, currentPath, matches && options.includeChildrenWhenParentMatches);
	});
}
function useDropdownSearch(items, options = {}) {
	const search = ref("");
	const resolvedOptions = {
		flatList: options.flatList ?? false,
		searchFields: options.searchFields ?? defaultSearchFields,
		isSearchable: options.isSearchable ?? (() => true),
		includeChildrenWhenParentMatches: options.includeChildrenWhenParentMatches ?? true,
		mapResult: options.mapResult ?? defaultMapResult
	};
	const filteredItems = computed(() => {
		const query = search.value.trim().toLowerCase();
		const sourceItems = toValue(items);
		if (!query) return sourceItems;
		return resolvedOptions.flatList ? flattenItems(sourceItems, query, resolvedOptions) : filterNestedItems(sourceItems, query, resolvedOptions);
	});
	const handleSearch = (query) => {
		search.value = query;
	};
	return {
		search,
		filteredItems,
		handleSearch
	};
}
//#endregion
//#region src/features/agents/composables/useAgentProjectId.ts
/**
* Resolves the project an agent belongs to, with a single source of truth:
* an explicit override (e.g. a `projectId` prop) → the route param →
* the user's personal project → empty string.
*
* Centralising this avoids each component re-deriving the project id with
* subtly different fallbacks (which previously caused project-scoped views to
* fall back to personal-project data).
*/
function useAgentProjectId(override) {
	const route = useRoute();
	const projectsStore = useProjectsStore();
	return computed(() => toValue(override) ?? route.params.projectId ?? projectsStore.personalProject?.id ?? "");
}
//#endregion
//#region src/features/agents/composables/useAgentModelCredentials.ts
function parseStoredCredentials(value) {
	try {
		const raw = JSON.parse(value);
		if (typeof raw !== "object" || raw === null) return {};
		const credentials = {};
		for (const [provider, credentialId] of Object.entries(raw)) {
			if (!isAgentModelProvider(provider)) continue;
			if (typeof credentialId !== "string" && credentialId !== null) continue;
			credentials[provider] = credentialId;
		}
		return credentials;
	} catch {
		return {};
	}
}
function useAgentModelCredentials(userId, projectId) {
	const isInitialized = ref(false);
	const credentialsStore = useCredentialsStore();
	const aiGatewayStore = useAiGatewayStore();
	const settingsStore = useSettingsStore();
	function supportsManagedCredits(provider) {
		if (!settingsStore.isAiGatewayEnabled) return false;
		return getProviderCredentialTypes(provider).some((credentialType) => aiGatewayStore.canServeCredentialType(credentialType));
	}
	const selectedCredentials = useLocalStorage(LOCAL_STORAGE_AGENT_MODEL_CREDENTIALS(userId), {}, {
		writeDefaults: false,
		shallow: true,
		serializer: {
			read: parseStoredCredentials,
			write: (value) => JSON.stringify(value)
		}
	});
	const isCredentialsReady = computed(() => isInitialized.value || credentialsStore.allCredentials.length > 0);
	function getCredentialsForProvider(provider) {
		const credentialsById = /* @__PURE__ */ new Map();
		for (const credentialType of getProviderCredentialTypes(provider)) for (const credential of credentialsStore.getCredentialsByType(credentialType)) if (!credentialsById.has(credential.id)) credentialsById.set(credential.id, credential);
		return [...credentialsById.values()].toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
	}
	const credentialsByProvider = computed(() => {
		if (!isCredentialsReady.value) return null;
		const credentials = {};
		for (const provider of AGENT_MODEL_PROVIDERS) {
			const providerCredentials = getCredentialsForProvider(provider);
			const selectedCredentialId = selectedCredentials.value[provider] ?? null;
			credentials[provider] = selectedCredentialId === "__AI_GATEWAY_MANAGED__" && supportsManagedCredits(provider) ? AI_GATEWAY_MANAGED_TAG : selectedCredentialId && providerCredentials.some((credential) => credential.id === selectedCredentialId) ? selectedCredentialId : supportsManagedCredits(provider) ? AI_GATEWAY_MANAGED_TAG : providerCredentials[0]?.id ?? null;
		}
		return credentials;
	});
	function selectCredential(provider, id) {
		selectedCredentials.value = {
			...selectedCredentials.value,
			[provider]: id
		};
	}
	watch(() => toValue(projectId), async (id) => {
		if (!id) return;
		await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchAllCredentialsForWorkflow({ projectId: id })]);
		isInitialized.value = true;
	}, { immediate: true });
	return {
		credentialsByProvider,
		getCredentialsForProvider,
		selectCredential
	};
}
//#endregion
//#region src/features/agents/composables/useModelCatalog.ts
var catalogByProject = ref({});
var fetchPromises = /* @__PURE__ */ new Map();
var loadingProjects = ref(/* @__PURE__ */ new Set());
var verifiedModelsByKey = ref({});
var verifiedDefaultModelsByKey = ref({});
var unavailableByKey = ref({});
var verifiedFetchesInFlight = /* @__PURE__ */ new Set();
function createEmptyModelsResponse() {
	const response = {};
	for (const provider of AGENT_MODEL_PROVIDERS) response[provider] = { models: [] };
	return response;
}
function toAgentModel(provider, model) {
	return {
		provider,
		model: model.id,
		name: model.name,
		description: null,
		createdAt: model.releaseDate ?? null,
		metadata: {
			functionCalling: model.toolCall,
			available: true
		}
	};
}
function useModelCatalog() {
	const rootStore = useRootStore();
	const activeProjectId = ref(null);
	const catalog = computed(() => activeProjectId.value ? catalogByProject.value[activeProjectId.value] ?? {} : {});
	const isLoading = computed(() => activeProjectId.value ? loadingProjects.value.has(activeProjectId.value) : false);
	async function ensureLoaded(projectId) {
		activeProjectId.value = projectId;
		if (catalogByProject.value[projectId]) return;
		let fetchPromise = fetchPromises.get(projectId);
		if (!fetchPromise) {
			loadingProjects.value.add(projectId);
			fetchPromise = getModelCatalog(rootStore.restApiContext, projectId).then((result) => {
				catalogByProject.value = {
					...catalogByProject.value,
					[projectId]: result
				};
			}).catch(() => {
				fetchPromises.delete(projectId);
			}).finally(() => {
				loadingProjects.value.delete(projectId);
			});
			fetchPromises.set(projectId, fetchPromise);
		}
		await fetchPromise;
	}
	function getModelsForProvider(provider) {
		const p = catalog.value[provider];
		if (!p) return [];
		return Object.values(p.models).sort((a, b) => a.name.localeCompare(b.name));
	}
	/**
	* Kick off (once per project+provider+credential) the fetch of the
	* provider-verified model list. Idempotent and guarded, so it is safe to
	* trigger from `getModelsForPicker` — when the response lands, the reactive
	* map updates and computeds re-evaluate with the verified list.
	*/
	function ensureVerifiedModels(projectId, provider, providerCredentialId) {
		const key = `${projectId}|${provider}|${providerCredentialId}`;
		if (key in verifiedModelsByKey.value || verifiedFetchesInFlight.has(key)) return;
		verifiedFetchesInFlight.add(key);
		getProviderModels(rootStore.restApiContext, projectId, provider, providerCredentialId).then((result) => {
			verifiedModelsByKey.value = {
				...verifiedModelsByKey.value,
				[key]: result.verified ? result.models : null
			};
			verifiedDefaultModelsByKey.value = {
				...verifiedDefaultModelsByKey.value,
				[key]: result.defaultModelId ?? null
			};
			unavailableByKey.value = {
				...unavailableByKey.value,
				[key]: result.unavailable === true
			};
		}).catch(() => {
			verifiedModelsByKey.value = {
				...verifiedModelsByKey.value,
				[key]: null
			};
		}).finally(() => {
			verifiedFetchesInFlight.delete(key);
		});
	}
	function getModelsForPicker(credentials) {
		const response = createEmptyModelsResponse();
		for (const provider of AGENT_MODEL_PROVIDERS) {
			const providerCredentialId = credentials?.[provider];
			if (!providerCredentialId) continue;
			let models;
			let unavailable = false;
			const projectId = activeProjectId.value;
			if (projectId) {
				ensureVerifiedModels(projectId, provider, providerCredentialId);
				const key = `${projectId}|${provider}|${providerCredentialId}`;
				models = verifiedModelsByKey.value[key] ?? void 0;
				unavailable = unavailableByKey.value[key] === true;
			}
			if (!models) {
				const providerInfo = catalog.value[provider];
				if (!providerInfo) continue;
				models = Object.values(providerInfo.models);
			}
			response[provider] = {
				models: models.map((model) => toAgentModel(provider, model)).sort((a, b) => a.name.localeCompare(b.name)),
				...unavailable ? { unavailable: true } : {}
			};
		}
		return response;
	}
	function getDefaultModelForPicker(credentials, provider) {
		const credentialId = credentials?.[provider];
		const projectId = activeProjectId.value;
		if (!credentialId || !projectId) return null;
		ensureVerifiedModels(projectId, provider, credentialId);
		const defaultModelId = verifiedDefaultModelsByKey.value[`${projectId}|${provider}|${credentialId}`];
		if (!defaultModelId) return null;
		return getModelsForPicker(credentials)[provider]?.models.find((model) => model.model === defaultModelId) ?? null;
	}
	return {
		catalog,
		isLoading,
		ensureLoaded,
		getModelsForProvider,
		getModelsForPicker,
		getDefaultModelForPicker
	};
}
//#endregion
//#region src/features/agents/utils/model-string.ts
/**
* Model identifier helpers. The canonical storage format is `"<provider>/<name>"`.
* Centralised here because multiple callers (Agent info panel, memory panel,
* sub-agents panel) used to roll their own and drifted on naming + edge cases.
*/
/** Split `"<provider>/<name>"` on the first `/`. Returns null when malformed. */
function parseModelString(model) {
	if (!AGENT_MODEL_STRING_REGEX.test(model)) return null;
	const slashIndex = model.indexOf("/");
	return {
		provider: model.slice(0, slashIndex),
		name: model.slice(slashIndex + 1)
	};
}
/** Build the canonical string. Pass-through for already-string inputs. */
function modelToString(raw) {
	if (!raw) return "";
	if (typeof raw === "string") return raw;
	return `${raw.provider ?? ""}/${raw.name ?? ""}`;
}
/** Read just the provider, accepting either string or object form. */
function parseProvider(raw) {
	if (!raw) return "";
	if (typeof raw === "object") return raw.provider ?? "";
	return parseModelString(raw)?.provider ?? "";
}
/**
* Normalise provider-specific id quirks. Currently only Google's `"models/"`
* prefix is stripped — other providers pass through unchanged.
*/
function sanitizeModelId(provider, modelId) {
	if (provider === "google") return modelId.replace(/^models\//, "");
	return modelId;
}
//#endregion
//#region src/features/agents/components/AgentModelSelector.vue?vue&type=script&setup=true&lang.ts
var MAX_MODEL_NAME_CHARS = 45;
var MAX_SEARCH_RESULTS_PER_PROVIDER = 10;
var FREE_OPENAI_CREDITS_PROVIDER = "openai";
var FREE_OPENAI_CREDITS_MODEL = "gpt-5-mini";
//#endregion
//#region src/features/agents/components/AgentModelSelector.vue
var AgentModelSelector_default = /* @__PURE__ */ defineComponent({
	__name: "AgentModelSelector",
	props: {
		selectedModel: {},
		credentials: {},
		modelsByProvider: {},
		isLoading: { type: Boolean },
		projectId: {},
		warnMissingCredentials: {
			type: Boolean,
			default: false
		},
		boundCredentialId: { default: null },
		disabled: {
			type: Boolean,
			default: false
		},
		credentialModalAppendToBody: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"change",
		"selectCredential",
		"configureCredential"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const dropdownRef = useTemplateRef("dropdownRef");
		const credentialsStore = useCredentialsStore();
		const projectsStore = useProjectsStore();
		const uiStore = useUIStore();
		const aiGateway = useAiGateway();
		const aiGatewayBalancePill = computed(() => {
			const balance = aiGateway.balance.value;
			if (balance === void 0) return void 0;
			const depleted = balance <= 0;
			return {
				text: depleted ? i18n.baseText("aiGateway.wallet.noCredits") : i18n.baseText("aiGateway.wallet.balanceRemaining", { interpolate: { balance: `$${Number(balance).toFixed(2)}` } }),
				type: depleted ? "danger" : "default"
			};
		});
		onMounted(() => {
			aiGateway.fetchConfig();
			if (aiGateway.isEnabled.value) aiGateway.fetchWallet();
		});
		const selectedCredentialId = computed(() => __props.selectedModel ? __props.credentials?.[__props.selectedModel.provider] : void 0);
		const { aiCreditsQuota, userCanClaimOpenAiCredits, claimingCredits, claimCreditsAndGetCredential } = useFreeAiCredits({ hasOpenAiCredential: computed(() => Boolean(__props.credentials?.[FREE_OPENAI_CREDITS_PROVIDER])) });
		const selectedCredential = computed(() => selectedCredentialId.value ? credentialsStore.getCredentialById(selectedCredentialId.value) : null);
		const isManagedCredential = computed(() => selectedCredentialId.value === AI_GATEWAY_MANAGED_TAG);
		const selectedCredentialName = computed(() => isManagedCredential.value ? i18n.baseText("aiGateway.credentialMode.n8nConnect.title") : selectedCredential.value?.name);
		const isCredentialsMissing = computed(() => !isManagedCredential.value && __props.warnMissingCredentials && Boolean(__props.selectedModel?.provider) && !(__props.boundCredentialId && credentialsStore.getCredentialById(__props.boundCredentialId)));
		const selectedLabel = computed(() => __props.selectedModel?.name ?? i18n.baseText("agents.modelSelector.defaultLabel"));
		const triggerCredentialTypeName = computed(() => __props.selectedModel ? getProviderCredentialTypes(__props.selectedModel.provider)[0] : null);
		const projectForPermissions = computed(() => {
			if (__props.projectId) {
				if (projectsStore.currentProject?.id === __props.projectId) return projectsStore.currentProject;
				if (projectsStore.personalProject?.id === __props.projectId) return projectsStore.personalProject;
				return projectsStore.myProjects.find((project) => project.id === __props.projectId) ?? null;
			}
			return projectsStore.currentProject ?? projectsStore.personalProject;
		});
		const createCredentialProjectId = computed(() => projectForPermissions.value?.id ?? __props.projectId ?? projectsStore.personalProject?.id);
		const canCreateCredentials = computed(() => {
			return !!getResourcePermissions(projectForPermissions.value?.scopes).credential.create;
		});
		function getCredentialTypeDisplayName(credentialType) {
			return credentialsStore.getCredentialTypeByName(credentialType)?.displayName ?? credentialType;
		}
		function getCredentialsForProvider(provider) {
			const credentialsById = /* @__PURE__ */ new Map();
			for (const credentialType of getProviderCredentialTypes(provider)) for (const credential of credentialsStore.getCredentialsByType(credentialType)) if (!credentialsById.has(credential.id)) credentialsById.set(credential.id, credential);
			return [...credentialsById.values()].toSorted((a, b) => a.name.localeCompare(b.name));
		}
		const canUseFreeOpenAiCredits = computed(() => __props.credentials !== null && canCreateCredentials.value && userCanClaimOpenAiCredits.value);
		const freeOpenAiCreditsDescription = computed(() => i18n.baseText("agents.modelSelector.freeCredits.description", { interpolate: { credits: aiCreditsQuota.value } }));
		function providerToMenuItem(provider) {
			const definition = AGENT_MODEL_PROVIDER_DEFINITIONS[provider];
			const credentialOptions = getCredentialsForProvider(provider);
			const selectedProviderCredentialId = __props.credentials?.[provider] ?? null;
			const models = __props.modelsByProvider[provider]?.models ?? [];
			const modelsUnavailable = __props.modelsByProvider[provider]?.unavailable === true;
			const credentialTypes = getProviderCredentialTypes(provider);
			const isAiGatewayManagedSelected = selectedProviderCredentialId === AI_GATEWAY_MANAGED_TAG;
			const hasProviderCredential = isAiGatewayManagedSelected || selectedProviderCredentialId !== null && credentialOptions.some((credential) => credential.id === selectedProviderCredentialId);
			const credentialItems = credentialOptions.map((credential) => ({
				id: buildMenuItemId(provider, "select", credential.id),
				label: credential.name,
				disabled: false,
				checked: selectedProviderCredentialId === credential.id,
				keepOpen: true,
				data: { provider }
			}));
			const createCredentialItems = canCreateCredentials.value ? credentialTypes.length === 1 ? [{
				id: buildMenuItemId(provider, "configure", credentialTypes[0]),
				label: i18n.baseText("agents.modelSelector.configureCredentials"),
				disabled: false,
				data: {
					provider,
					leadingIcon: "plus"
				}
			}] : [{
				id: `${provider}::configure`,
				label: i18n.baseText("agents.modelSelector.configureCredentials"),
				disabled: false,
				data: {
					provider,
					leadingIcon: "plus"
				},
				children: credentialTypes.map((credentialType) => ({
					id: buildMenuItemId(provider, "configure", credentialType),
					label: getCredentialTypeDisplayName(credentialType),
					disabled: false,
					data: {
						provider,
						leadingIcon: "plus"
					}
				}))
			}] : [];
			const gatewayServedCredentialType = aiGateway.isEnabled.value ? credentialTypes.find((credentialType) => aiGateway.canServeCredentialType(credentialType)) : void 0;
			const isAiGatewayManagedAvailable = isAiGatewayManagedSelected || gatewayServedCredentialType !== void 0;
			const n8nCreditsItems = isAiGatewayManagedAvailable ? [{
				id: buildMenuItemId(provider, "n8nConnect", gatewayServedCredentialType ?? credentialTypes[0]),
				label: i18n.baseText("aiGateway.credentialMode.n8nConnect.title"),
				disabled: false,
				checked: isAiGatewayManagedSelected,
				keepOpen: true,
				data: {
					provider,
					actionPill: aiGatewayBalancePill.value
				}
			}] : [];
			const freeOpenAiCreditsItems = provider === FREE_OPENAI_CREDITS_PROVIDER && canUseFreeOpenAiCredits.value ? [{
				id: buildMenuItemId(FREE_OPENAI_CREDITS_PROVIDER, "freeCredits", FREE_OPENAI_CREDITS_MODEL),
				icon: {
					type: "icon",
					value: "sparkles"
				},
				label: i18n.baseText("agents.modelSelector.freeCredits.label"),
				disabled: claimingCredits.value,
				data: {
					provider,
					credentialType: credentialTypes[0],
					leadingIcon: "sparkles",
					description: freeOpenAiCreditsDescription.value,
					descriptionTooltipTeleported: false
				}
			}] : [];
			const modelItems = hasProviderCredential ? models.map((model) => ({
				id: buildMenuItemId(provider, "model", model.model),
				label: truncateBeforeLast(model.name, MAX_MODEL_NAME_CHARS),
				disabled: false,
				checked: __props.selectedModel?.provider === provider && __props.selectedModel.model === model.model,
				data: {
					provider,
					description: model.description ?? void 0,
					descriptionTooltipTeleported: false,
					fullName: `${model.name} ${model.model}`,
					credentialType: credentialTypes[0]
				}
			})) : [];
			const statusItems = !hasProviderCredential ? [] : __props.isLoading ? [{
				id: `${provider}::loading`,
				label: i18n.baseText("generic.loadingEllipsis"),
				disabled: true
			}] : modelItems.length === 0 ? [{
				id: `${provider}::empty`,
				label: i18n.baseText(modelsUnavailable ? "agents.modelSelector.modelsUnavailable" : "agents.modelSelector.noModels"),
				disabled: true
			}] : [];
			const connectItems = [
				...freeOpenAiCreditsItems,
				...n8nCreditsItems,
				...credentialItems,
				...createCredentialItems
			];
			const connectHeader = connectItems.length ? [{
				id: `${provider}::header::connect`,
				label: i18n.baseText("agents.modelSelector.connectTo", { interpolate: { provider: definition.displayName } }),
				header: true,
				disabled: true
			}] : [];
			const modelsSection = [...modelItems, ...statusItems];
			const modelsHeader = modelsSection.length ? [{
				id: `${provider}::header::models`,
				label: i18n.baseText("agents.modelSelector.models"),
				header: true,
				disabled: true,
				divided: connectItems.length > 0
			}] : [];
			return {
				id: provider,
				label: definition.displayName,
				data: {
					provider,
					credentialType: credentialTypes[0],
					badgeLabel: provider === FREE_OPENAI_CREDITS_PROVIDER && canUseFreeOpenAiCredits.value ? i18n.baseText("agents.modelSelector.freeCredits.badge") : void 0,
					actionPill: isAiGatewayManagedAvailable ? {
						text: i18n.baseText(aiGateway.creditsLabelKey.value),
						type: aiGateway.creditsLabelKey.value === "generic.freeCredits" ? "default" : "info"
					} : void 0
				},
				children: [
					...connectHeader,
					...connectItems,
					...modelsHeader,
					...modelsSection
				]
			};
		}
		function isAggregatorProvider(provider) {
			return "isAggregator" in AGENT_MODEL_PROVIDER_DEFINITIONS[provider];
		}
		const menu = computed(() => {
			const providers = AGENT_MODEL_PROVIDERS.toSorted((a, b) => {
				return (isAggregatorProvider(a) ? 1 : -1) - (isAggregatorProvider(b) ? 1 : -1);
			});
			let dividerInserted = false;
			return providers.map((provider) => {
				const item = providerToMenuItem(provider);
				if (dividerInserted) return item;
				dividerInserted = true;
				return {
					...item,
					divided: true
				};
			});
		});
		function isSearchableItem(item) {
			return (item.id.includes("::model::") || item.id.includes("::freeCredits::")) && !item.disabled;
		}
		const { search: searchQuery, filteredItems: matchingModelItems, handleSearch } = useDropdownSearch(menu, {
			flatList: true,
			isSearchable: isSearchableItem,
			searchFields: (item) => [item.label, item.data?.fullName],
			mapResult: (item, path) => ({
				...item,
				divided: false,
				data: item.data ? {
					...item.data,
					parts: path.map((pathItem) => pathItem.label),
					descriptionTooltipTeleported: true
				} : void 0
			})
		});
		const filteredMenu = computed(() => {
			if (!searchQuery.value.trim()) return menu.value;
			return menu.value.flatMap((providerItem) => {
				const results = matchingModelItems.value.filter((item) => item.data?.provider === providerItem.id);
				if (results.length <= MAX_SEARCH_RESULTS_PER_PROVIDER) return results;
				return [...results.slice(0, MAX_SEARCH_RESULTS_PER_PROVIDER), {
					...providerItem,
					label: i18n.baseText("agents.modelSelector.moreModels", { interpolate: { provider: providerItem.label } }),
					children: results.slice(MAX_SEARCH_RESULTS_PER_PROVIDER),
					divided: false,
					data: {
						...providerItem.data,
						badgeLabel: void 0,
						actionPill: void 0
					}
				}];
			});
		});
		function openNewCredential(credentialType) {
			if (!__props.disabled && canCreateCredentials.value) uiStore.openNewCredential(credentialType, false, false, createCredentialProjectId.value, void 0, void 0, void 0, {
				hideAskAssistant: true,
				...__props.credentialModalAppendToBody ? { appendToBody: true } : {}
			});
		}
		async function onSelect(id) {
			if (__props.disabled) return;
			const parsed = parseMenuItemId(id);
			if (!parsed || !isAgentModelProvider(parsed.provider)) return;
			const { provider: providerId, action, value } = parsed;
			if (action === "configure") {
				emit("configureCredential", providerId);
				openNewCredential(value);
				return;
			}
			if (action === "select") {
				emit("selectCredential", providerId, value);
				return;
			}
			if (action === "n8nConnect") {
				emit("selectCredential", providerId, AI_GATEWAY_MANAGED_TAG);
				return;
			}
			if (action === "freeCredits" && providerId === FREE_OPENAI_CREDITS_PROVIDER) {
				if (!canUseFreeOpenAiCredits.value) return;
				const credential = await claimCreditsAndGetCredential("agentBuilderModelSelector", createCredentialProjectId.value);
				if (!credential) return;
				emit("selectCredential", providerId, credential.id);
				emit("change", {
					provider: providerId,
					model: value
				});
				return;
			}
			if (action === "model") emit("change", {
				provider: providerId,
				model: value
			});
		}
		__expose({ open: () => {
			if (!__props.disabled) dropdownRef.value?.open();
		} });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AiModelSelectorDropdown_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				items: filteredMenu.value,
				"selected-label": selectedLabel.value,
				"selected-credential-name": selectedCredentialName.value,
				"credentials-missing": isCredentialsMissing.value,
				"no-match-label": unref(i18n).baseText("agents.modelSelector.noMatch"),
				disabled: __props.disabled,
				"data-test-id": "agent-model-selector",
				"credential-data-test-id": "agent-model-selector-credential",
				onSearch: unref(handleSearch),
				onSelect
			}, {
				"trigger-leading": withCtx(({ ui }) => [createVNode(ModelSelectorTriggerIcon_default, {
					"credential-type-name": triggerCredentialTypeName.value,
					class: normalizeClass(ui.class)
				}, null, 8, ["credential-type-name", "class"])]),
				"item-leading": withCtx(({ item, ui }) => [createVNode(ModelSelectorItemLeadingIcon_default, {
					item,
					class: normalizeClass(ui.class)
				}, null, 8, ["item", "class"])]),
				_: 1
			}, 8, [
				"items",
				"selected-label",
				"selected-credential-name",
				"credentials-missing",
				"no-match-label",
				"disabled",
				"onSearch"
			]);
		};
	}
});
//#endregion
export { sanitizeModelId as a, useAgentProjectId as c, parseProvider as i, modelToString as n, useModelCatalog as o, parseModelString as r, useAgentModelCredentials as s, AgentModelSelector_default as t };
