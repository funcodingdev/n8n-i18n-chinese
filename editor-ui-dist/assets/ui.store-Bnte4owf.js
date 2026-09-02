import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { It as ref, Lt as shallowReactive, S as computed, gt as watch } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { b as useMediaQuery, y as useLocalStorage } from "./dist-BKkqSB6h.js";
import { o as require_identity } from "./merge-I1kuvuLK.js";
import { fr as defineStore, lr as STORES } from "./useRootStore-CvqfnFUt.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { t as PERSONALIZATION_MODAL_KEY } from "./users-CZp_IfxF.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { $r as IMPORT_CURL_MODAL_KEY, Br as ABOUT_MODAL_KEY, Ci as WORKFLOW_SHARE_MODAL_KEY, Gi as LOCAL_STORAGE_SIDEBAR_WIDTH, Gr as CHAT_EMBED_MODAL_KEY, Hr as AI_BUILDER_DIFF_MODAL_KEY, Jr as DUPLICATE_MODAL_KEY, Kr as CREDENTIAL_RESOLVER_EDIT_MODAL_KEY, Qr as FROM_AI_PARAMETERS_MODAL_KEY, Si as WORKFLOW_SETTINGS_MODAL_KEY, Ur as AI_GATEWAY_TOP_UP_MODAL_KEY, Vr as ADD_EXECUTION_TO_DATASET_MODAL_KEY, Wr as BINARY_DATA_VIEW_MODAL_KEY, Xr as EXPERIMENT_TEMPLATE_RECO_V3_KEY, Yr as EXPERIMENT_TEMPLATE_RECO_V2_KEY, Zr as EXTERNAL_SECRETS_PROVIDER_MODAL_KEY, _i as WORKFLOW_HISTORY_DIFF_MODAL_KEY, bi as WORKFLOW_HISTORY_VERSION_UNPUBLISH, ci as SECRETS_PROVIDER_CONNECTION_MODAL_KEY, di as TRIAL_INTRO_MODAL_KEY, ei as IMPORT_WORKFLOW_URL_MODAL_KEY, fi as WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY, fo as VERSIONS_MODAL_KEY, gi as WORKFLOW_EXTRACTION_NAME_MODAL_KEY, h as DOCS_DOMAIN, hi as WORKFLOW_DIFF_MODAL_KEY, li as SETUP_CREDENTIALS_MODAL_KEY, mi as WORKFLOW_DESCRIPTION_MODAL_KEY, ni as MIGRATE_WORKFLOW_MODAL_KEY, oi as NEW_ASSISTANT_SESSION_MODAL, pi as WORKFLOW_ACTIVE_MODAL_KEY, po as WHATS_NEW_MODAL_KEY, qi as LOCAL_STORAGE_THEME, qr as DELETE_SECRETS_PROVIDER_MODAL_KEY, si as NPS_SURVEY_MODAL_KEY, ti as LOG_STREAM_MODAL_KEY, ui as STOP_MANY_EXECUTIONS_MODAL_KEY, vi as WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY, xi as WORKFLOW_PUBLISH_MODAL_KEY, yi as WORKFLOW_HISTORY_PUBLISH_MODAL_KEY } from "./constants-DxozP3cY.js";
//#region src/features/credentials/credentials.constants.ts
var CREDENTIAL_EDIT_MODAL_KEY = "editCredential";
var CREDENTIAL_SELECT_MODAL_KEY = "selectCredential";
//#endregion
//#region src/features/settings/users/users.constants.ts
var DELETE_USER_MODAL_KEY = "deleteUser";
var INVITE_USER_MODAL_KEY = "inviteUser";
var COMPANY_TYPE_KEY = "companyType";
var SAAS_COMPANY_TYPE = "saas";
var ECOMMERCE_COMPANY_TYPE = "ecommerce";
var EDUCATION_TYPE = "education";
var DIGITAL_AGENCY_COMPANY_TYPE = "digital-agency";
var SYSTEMS_INTEGRATOR_COMPANY_TYPE = "systems-integrator";
var OTHER_COMPANY_TYPE = "other";
var PERSONAL_COMPANY_TYPE = "personal";
var COMPANY_INDUSTRY_EXTENDED_KEY = "companyIndustryExtended";
var OTHER_COMPANY_INDUSTRY_EXTENDED_KEY = "otherCompanyIndustryExtended";
var PHYSICAL_RETAIL_OR_SERVICES = "physical-retail-or-services";
var REAL_ESTATE_OR_CONSTRUCTION = "real-estate-or-construction";
var GOVERNMENT_INDUSTRY = "government";
var LEGAL_INDUSTRY = "legal-industry";
var MARKETING_INDUSTRY = "marketing-industry";
var MEDIA_INDUSTRY = "media-industry";
var MANUFACTURING_INDUSTRY = "manufacturing-industry";
var HEALTHCARE_INDUSTRY = "healthcare";
var FINANCE_INSURANCE_INDUSTRY = "finance-insurance-industry";
var IT_INDUSTRY = "it-industry";
var SECURITY_INDUSTRY = "security-industry";
var TELECOMS_INDUSTRY = "telecoms";
var OTHER_INDUSTRY_OPTION = "other";
var COMPANY_SIZE_KEY = "companySize";
var COMPANY_SIZE_20_99 = "20-99";
var COMPANY_SIZE_100_499 = "100-499";
var COMPANY_SIZE_500_999 = "500-999";
var COMPANY_SIZE_1000_OR_MORE = "1000+";
var COMPANY_SIZE_PERSONAL_USE = "personalUser";
var MARKETING_AUTOMATION_GOAL_KEY = "automationGoalSm";
var MARKETING_AUTOMATION_LEAD_GENERATION_GOAL = "lead-generation";
var MARKETING_AUTOMATION_CUSTOMER_COMMUNICATION = "customer-communication";
var MARKETING_AUTOMATION_ACTIONS = "actions";
var MARKETING_AUTOMATION_AD_CAMPAIGN = "ad-campaign";
var MARKETING_AUTOMATION_REPORTING = "reporting";
var MARKETING_AUTOMATION_DATA_SYNCHING = "data-syncing";
var MARKETING_AUTOMATION_OTHER = "other";
var OTHER_MARKETING_AUTOMATION_GOAL_KEY = "automationGoalSmOther";
var AUTOMATION_BENEFICIARY_KEY = "automationBeneficiary";
var AUTOMATION_BENEFICIARY_SELF = "myself";
var AUTOMATION_BENEFICIARY_MY_TEAM = "my-team";
var AUTOMATION_BENEFICIARY_OTHER_TEAMS = "other-teams";
var REPORTED_SOURCE_KEY = "reportedSource";
var REPORTED_SOURCE_OTHER_KEY = "reportedSourceOther";
var REPORTED_SOURCE_GOOGLE = "google";
var REPORTED_SOURCE_TWITTER = "twitter";
var REPORTED_SOURCE_LINKEDIN = "linkedin";
var REPORTED_SOURCE_YOUTUBE = "youtube";
var REPORTED_SOURCE_FRIEND = "friend";
var REPORTED_SOURCE_PODCAST = "podcast";
var REPORTED_SOURCE_EVENT = "event";
var REPORTED_SOURCE_OTHER = "other";
var DEVOPS_AUTOMATION_GOAL_KEY = "automationGoalDevops";
var DEVOPS_AUTOMATION_GOAL_OTHER_KEY = "automationGoalDevopsOther";
var DEVOPS_AUTOMATION_OTHER = "other";
var DEVOPS_AUTOMATION_CI_CD_GOAL = "ci-cd";
var DEVOPS_AUTOMATION_CLOUD_INFRASTRUCTURE_ORCHESTRATION_GOAL = "cloud-infrastructure-orchestration";
var DEVOPS_AUTOMATION_DATA_SYNCING_GOAL = "data-syncing";
var DEVOPS_INCIDENT_RESPONSE_GOAL = "incident-response";
var DEVOPS_MONITORING_AND_ALERTING_GOAL = "monitoring-alerting";
var DEVOPS_REPORTING_GOAL = "reporting";
var DEVOPS_TICKETING_SYSTEMS_INTEGRATIONS_GOAL = "ticketing-systems-integrations";
var OTHER_AUTOMATION_GOAL = "other";
var ROLE_KEY = "role";
var ROLE_OTHER_KEY = "roleOther";
var ROLE_BUSINESS_OWNER = "business-owner";
var ROLE_CUSTOMER_SUPPORT = "customer-support";
var ROLE_DATA_SCIENCE = "data-science";
var ROLE_DEVOPS = "devops";
var ROLE_ENGINEERING = "engineering";
var ROLE_SALES_AND_MARKETING = "sales-and-marketing";
var ROLE_SECURITY = "security";
var ROLE_OTHER = "other";
/** END OF PERSONALIZATION SURVEY */
//#endregion
//#region src/features/core/folders/folders.constants.ts
var ILLEGAL_FOLDER_CHARACTERS = [
	"[",
	"]",
	"^",
	"\\",
	"/",
	":",
	"*",
	"?",
	"\"",
	"<",
	">",
	"|"
];
var FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX = new RegExp(`[${ILLEGAL_FOLDER_CHARACTERS.map((char) => {
	return char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}).join("")}]`);
var FOLDER_NAME_ONLY_DOTS_REGEX = /^\.+$/;
var DELETE_FOLDER_MODAL_KEY = "deleteFolder";
var MOVE_FOLDER_MODAL_KEY = "moveFolder";
var FOLDER_LIST_ITEM_ACTIONS = {
	OPEN: "open",
	CREATE: "create",
	CREATE_WORKFLOW: "create_workflow",
	RENAME: "rename",
	MOVE: "move",
	CHOWN: "change_owner",
	TAGS: "manage_tags",
	DELETE: "delete",
	TOGGLE_FAVORITE: "toggleFavorite"
};
var MCP_ACCESS_ACTIONS = {
	MANAGE: "manageMcpAccess",
	ENABLE: "enableMcpAccess",
	DISABLE: "disableMcpAccess"
};
//#endregion
//#region src/features/settings/communityNodes/communityNodes.constants.ts
var COMMUNITY_PACKAGE_INSTALL_MODAL_KEY = "communityPackageInstall";
var COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY = "communityPackageManageConfirm";
var COMMUNITY_NODES_INSTALLATION_DOCS_URL = `https://${DOCS_DOMAIN}/integrations/community-nodes/installation/gui-install/`;
var COMMUNITY_NODES_RISKS_DOCS_URL = `https://${DOCS_DOMAIN}/integrations/community-nodes/risks/`;
`${DOCS_DOMAIN}`;
var NPM_KEYWORD_SEARCH_URL = "https://www.npmjs.com/search?q=keywords%3An8n-community-node-package";
var COMMUNITY_PACKAGE_MANAGE_ACTIONS = {
	UNINSTALL: "uninstall",
	UPDATE: "update",
	VIEW_DOCS: "view-documentation"
};
//#endregion
//#region src/app/stores/ui.utils.ts
function applyThemeToBody(theme, window_) {
	if (theme === "system") (window_ ?? window).document.body.removeAttribute("data-theme");
	else (window_ ?? window).document.body.setAttribute?.("data-theme", theme);
}
function isValidTheme(theme) {
	return !!theme && ["light", "dark"].includes(theme);
}
function getThemeOverride() {
	const override = getQueryParam("theme") ?? localStorage.getItem("N8N_THEME");
	return isValidTheme(override) ? override : null;
}
function getQueryParam(paramName) {
	return new URLSearchParams(window.location.search).get(paramName);
}
//#endregion
//#region src/features/collaboration/projects/projects.constants.ts
var PROJECT_MOVE_RESOURCE_MODAL = "projectMoveResourceModal";
var DEFAULT_PROJECT_ICON = {
	type: "icon",
	value: "layers"
};
//#endregion
//#region src/features/execution/executions/executions.constants.ts
var DEBUG_PAYWALL_MODAL_KEY = "debugPaywall";
/** Execution statuses that are in progress and can be stopped from the executions list. */
var CANCELLABLE_EXECUTION_STATUSES = [
	"new",
	"running",
	"waiting"
];
//#endregion
//#region src/features/settings/apiKeys/apiKeys.constants.ts
var API_KEY_CREATE_OR_EDIT_MODAL_KEY = "createOrEditApiKey";
var API_KEY_SCOPE_GROUPS = [
	{
		key: "workflowsAndExecutions",
		resources: [
			"workflow",
			"execution",
			"workflowTags",
			"executionTags"
		]
	},
	{
		key: "credentialsAndVariables",
		resources: ["credential", "variable"]
	},
	{
		key: "dataTables",
		resources: [
			"dataTable",
			"dataTableRow",
			"dataTableColumn"
		]
	},
	{
		key: "projects",
		resources: ["project"]
	},
	{
		key: "foldersTags",
		resources: ["folder", "tag"]
	},
	{
		key: "members",
		resources: ["user"]
	},
	{
		key: "instanceOperations",
		resources: [
			"securityAudit",
			"sourceControl",
			"communityPackage",
			"insights"
		]
	}
];
var READ_SCOPE_ACTIONS = [
	"read",
	"list",
	"export"
];
//#endregion
//#region src/features/settings/environments.ee/environments.constants.ts
var VARIABLE_MODAL_KEY = "variableModal";
//#endregion
//#region src/features/settings/usage/usage.constants.ts
var COMMUNITY_PLUS_ENROLLMENT_MODAL = "communityPlusEnrollment";
var COMMUNITY_PLUS_DOCS_URL = "https://docs.n8n.io/hosting/community-edition-features/#registered-community-edition";
//#endregion
//#region src/features/integrations/sourceControl.ee/sourceControl.constants.ts
var SOURCE_CONTROL_PUSH_MODAL_KEY = "sourceControlPush";
var SOURCE_CONTROL_PULL_MODAL_KEY = "sourceControlPull";
var SOURCE_CONTROL_PULL_RESULT_MODAL_KEY = "sourceControlPullResult";
//#endregion
//#region src/features/shared/tags/tags.constants.ts
var TAGS_MANAGER_MODAL_KEY = "tagsManager";
var ANNOTATION_TAGS_MANAGER_MODAL_KEY = "annotationTagsManager";
//#endregion
//#region src/app/stores/defaults/modals.ts
/**
* Modal definitions still owned by the shell: the key and the state it starts in.
*
* Every entry here is rendered by a hand-written `<ModalRoot>` in `Modals.vue`
* — `ui.store.registration.spec.ts` holds those two in sync. Module-owned modals
* are not here; they register their definition through `modalRegistry` and render
* through `DynamicModalLoader`.
*
* This catalogue shrinks by one entry per modal moved onto the registry, and is
* empty when the inversion is complete. Nothing else should be added to it.
*/
var SHELL_MODAL_INITIAL_STATE = Object.freeze({
	[ABOUT_MODAL_KEY]: { open: false },
	[ADD_EXECUTION_TO_DATASET_MODAL_KEY]: {
		open: false,
		data: {}
	},
	[AI_BUILDER_DIFF_MODAL_KEY]: { open: false },
	[AI_GATEWAY_TOP_UP_MODAL_KEY]: { open: false },
	[ANNOTATION_TAGS_MANAGER_MODAL_KEY]: { open: false },
	[API_KEY_CREATE_OR_EDIT_MODAL_KEY]: {
		open: false,
		data: {
			activeId: null,
			mode: ""
		}
	},
	[BINARY_DATA_VIEW_MODAL_KEY]: { open: false },
	[CHAT_EMBED_MODAL_KEY]: { open: false },
	[COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY]: {
		open: false,
		mode: "",
		activeId: null
	},
	[COMMUNITY_PACKAGE_INSTALL_MODAL_KEY]: { open: false },
	[COMMUNITY_PLUS_ENROLLMENT_MODAL]: {
		open: false,
		data: { customHeading: void 0 }
	},
	[CREDENTIAL_EDIT_MODAL_KEY]: {
		open: false,
		mode: "",
		activeId: null,
		showAuthSelector: false,
		closeOnSave: false
	},
	[CREDENTIAL_RESOLVER_EDIT_MODAL_KEY]: { open: false },
	[CREDENTIAL_SELECT_MODAL_KEY]: { open: false },
	[DEBUG_PAYWALL_MODAL_KEY]: { open: false },
	[DELETE_FOLDER_MODAL_KEY]: {
		open: false,
		activeId: null,
		data: {
			workflowListEventBus: void 0,
			content: {
				workflowCount: 0,
				subFolderCount: 0
			}
		}
	},
	[DELETE_SECRETS_PROVIDER_MODAL_KEY]: { open: false },
	[DELETE_USER_MODAL_KEY]: {
		open: false,
		activeId: null
	},
	[DUPLICATE_MODAL_KEY]: { open: false },
	[EXPERIMENT_TEMPLATE_RECO_V2_KEY]: {
		open: false,
		data: { nodeName: "" }
	},
	[EXPERIMENT_TEMPLATE_RECO_V3_KEY]: { open: false },
	[EXTERNAL_SECRETS_PROVIDER_MODAL_KEY]: { open: false },
	[FROM_AI_PARAMETERS_MODAL_KEY]: {
		open: false,
		data: { nodeName: void 0 }
	},
	[IMPORT_CURL_MODAL_KEY]: {
		open: false,
		data: { curlCommands: {} }
	},
	[IMPORT_WORKFLOW_URL_MODAL_KEY]: {
		open: false,
		data: { url: "" }
	},
	[INVITE_USER_MODAL_KEY]: { open: false },
	[LOG_STREAM_MODAL_KEY]: {
		open: false,
		data: void 0
	},
	[MIGRATE_WORKFLOW_MODAL_KEY]: { open: false },
	[MOVE_FOLDER_MODAL_KEY]: {
		open: false,
		activeId: null,
		data: { workflowListEventBus: void 0 }
	},
	[NEW_ASSISTANT_SESSION_MODAL]: { open: false },
	[NPS_SURVEY_MODAL_KEY]: { open: false },
	[PERSONALIZATION_MODAL_KEY]: { open: false },
	[PROJECT_MOVE_RESOURCE_MODAL]: { open: false },
	[SECRETS_PROVIDER_CONNECTION_MODAL_KEY]: { open: false },
	[SETUP_CREDENTIALS_MODAL_KEY]: { open: false },
	[SOURCE_CONTROL_PULL_MODAL_KEY]: { open: false },
	[SOURCE_CONTROL_PULL_RESULT_MODAL_KEY]: { open: false },
	[SOURCE_CONTROL_PUSH_MODAL_KEY]: { open: false },
	[STOP_MANY_EXECUTIONS_MODAL_KEY]: {
		open: false,
		data: {}
	},
	[TAGS_MANAGER_MODAL_KEY]: { open: false },
	[TRIAL_INTRO_MODAL_KEY]: { open: false },
	[VARIABLE_MODAL_KEY]: { open: false },
	[VERSIONS_MODAL_KEY]: { open: false },
	[WHATS_NEW_MODAL_KEY]: {
		open: false,
		data: { articleId: void 0 }
	},
	[WORKFLOW_ACTIVATION_CONFLICTING_WEBHOOK_MODAL_KEY]: {
		open: false,
		data: {
			triggerType: "",
			workflowName: "",
			workflowId: "",
			webhookPath: "",
			node: ""
		}
	},
	[WORKFLOW_ACTIVE_MODAL_KEY]: { open: false },
	[WORKFLOW_DESCRIPTION_MODAL_KEY]: { open: false },
	[WORKFLOW_DIFF_MODAL_KEY]: { open: false },
	[WORKFLOW_EXTRACTION_NAME_MODAL_KEY]: {
		open: false,
		data: { workflowName: "" }
	},
	[WORKFLOW_HISTORY_DIFF_MODAL_KEY]: { open: false },
	[WORKFLOW_HISTORY_NAME_VERSION_MODAL_KEY]: { open: false },
	[WORKFLOW_HISTORY_PUBLISH_MODAL_KEY]: { open: false },
	[WORKFLOW_HISTORY_VERSION_UNPUBLISH]: { open: false },
	[WORKFLOW_PUBLISH_MODAL_KEY]: { open: false },
	[WORKFLOW_SETTINGS_MODAL_KEY]: { open: false },
	[WORKFLOW_SHARE_MODAL_KEY]: { open: false }
});
//#endregion
//#region ../@n8n/frontend-module-sdk/src/routeNames.ts
var SHELL_OWNER = "the app shell";
function* declaredRouteNames(routes) {
	for (const route of routes) {
		if (route.name !== void 0 && route.name !== null) yield route.name;
		if (route.children) yield* declaredRouteNames(route.children);
	}
}
/**
* Throws when a module claims a route name that is already taken, by the shell
* or by another module.
*
* Route names are global to the router, and `router.addRoute` replaces a
* duplicate without warning — the losing route simply stops resolving. A central
* `VIEWS` enum kept every name unique, shell and module alike, because they were
* all members of one enum. Module-owned name constants are the better contract,
* but they scatter that check, so it is restored here.
*
* Call this before registering any module route. The shell's names are read from
* `router`, so a module route added earlier would be counted as pre-existing
* rather than reported.
*/
function assertUniqueRouteNames(modules, router) {
	const owners = /* @__PURE__ */ new Map();
	for (const { name } of router.getRoutes()) if (name !== void 0 && name !== null) owners.set(name, SHELL_OWNER);
	for (const module of modules) {
		if (!module.routes) continue;
		for (const name of declaredRouteNames(module.routes)) {
			const owner = owners.get(name);
			if (owner !== void 0) throw new Error(`Duplicate route name "${String(name)}" declared by module "${module.id}" — already taken by ${owner}.`);
			owners.set(name, `module "${module.id}"`);
		}
	}
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/modalRegistry.ts
/**
* Shallow-reactive so consumers can derive from the registry with a plain
* `computed` instead of mirroring it through a subscription. Shallow on purpose:
* a definition's `component` must not be turned into a reactive object.
*/
var modals = shallowReactive(/* @__PURE__ */ new Map());
var listeners$1 = /* @__PURE__ */ new Set();
/** Declarations, not registrations — deliberately not emptied by `clear()`. */
var adHocKeyPrefixes = /* @__PURE__ */ new Set();
function getAll$1() {
	return new Map(modals);
}
function notifyListeners$1() {
	listeners$1.forEach((listener) => listener(getAll$1()));
}
function register$2(modal) {
	const existing = modals.get(modal.key);
	if (existing) {
		if (existing !== modal) console.warn(`Modal with key "${modal.key}" is already registered. Skipping.`);
		return;
	}
	modals.set(modal.key, modal);
	notifyListeners$1();
}
/**
* Declare that keys starting with `prefix` are minted at runtime and will never
* be registered, so the unknown-key warning can tell them apart from a modal
* whose registration was forgotten.
*/
function declareAdHocKeyPrefix(prefix) {
	adHocKeyPrefixes.add(prefix);
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/resourceRegistry.ts
var resources = /* @__PURE__ */ new Map();
/**
* Register a new resource type
*/
function registerResource(metadata) {
	resources.set(metadata.key, metadata);
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/pushHandlerRegistry.ts
var handlers = /* @__PURE__ */ new Map();
function register$1(type, handler) {
	const existing = handlers.get(type);
	if (existing) {
		if (existing !== handler) console.warn(`Push handler for type "${type}" is already registered. Skipping.`);
		return;
	}
	handlers.set(type, handler);
}
/**
* Register every handler in a module's `pushHandlers` map. Centralises the one
* cast needed to erase the per-type event narrowing: each handler is stored
* against its own key, so it only ever receives an event of that type.
*/
function registerAll(pushHandlers) {
	for (const type of Object.keys(pushHandlers)) {
		const handler = pushHandlers[type];
		if (handler) register$1(type, handler);
	}
}
function get(type) {
	return handlers.get(type);
}
//#endregion
//#region ../@n8n/frontend-module-sdk/src/registries/commandRegistry.ts
var commands = /* @__PURE__ */ new Map();
var listeners = /* @__PURE__ */ new Set();
function getAll() {
	return Array.from(commands.values());
}
function notifyListeners() {
	const snapshot = getAll();
	listeners.forEach((listener) => listener(snapshot));
}
function register(command) {
	const existing = commands.get(command.id);
	if (existing) {
		if (existing !== command) console.warn(`Command with id "${command.id}" is already registered. Skipping.`);
		return;
	}
	commands.set(command.id, command);
	notifyListeners();
}
//#endregion
//#region src/app/stores/ui.store.ts
var import_identity = /* @__PURE__ */ __toESM(require_identity(), 1);
var savedTheme = "system";
try {
	const value = getThemeOverride();
	if (value !== null) {
		savedTheme = value;
		applyThemeToBody(value);
	}
} catch (e) {}
/** State a modal key resolves to while it is not registered. */
var CLOSED_MODAL_STATE = Object.freeze({ open: false });
/**
* Read-only view of `source` in which an unknown key reads as `fallback` instead
* of `undefined`. Modals register at different points in the boot sequence (shell
* keys eagerly, module keys post-login), so a reader can legitimately run before
* its key exists — it should see a closed modal, not throw.
*/
function withFallback(source, fallback) {
	return new Proxy(source, { get: (target, key) => typeof key === "string" ? target[key] ?? fallback : Reflect.get(target, key) });
}
/**
* Definitions (the key and the state it starts in) for every modal the app knows
* about: the shell's own catalogue plus whatever modules have registered.
*
* The registry is shallow-reactive, so reading it here is enough to make callers
* re-derive when a module registers or unregisters a modal — the store keeps no
* mirror of it.
*
* `shellDefaults` is the caller's own copy of the catalogue (see `ownedCopyOf`) —
* a definition resolved from here is handed straight to components, and several
* of them still write to modal state in place.
*/
function modalDefinitionsById(shellDefaults) {
	const definitions = { ...shellDefaults };
	for (const [key, definition] of getAll$1()) definitions[key] = definition.initialState ?? CLOSED_MODAL_STATE;
	return definitions;
}
/**
* Deep copy of the initial-state catalogue, so nothing the store resolves is a
* reference into a module-level constant that outlives every store instance.
* `structuredClone` preserves shared references within the input, so the entries
* that share a closed-state object still share one copy.
*/
function ownedCopyOf(catalogue) {
	return structuredClone(catalogue);
}
var useUIStore = defineStore(STORES.UI, () => {
	const telemetry = useTelemetry();
	const activeActions = ref([]);
	const activeCredentialType = ref(null);
	const theme = useLocalStorage(LOCAL_STORAGE_THEME, savedTheme, {
		writeDefaults: false,
		serializer: {
			read: (value) => isValidTheme(value) ? value : savedTheme,
			write: import_identity.default
		}
	});
	/** This store instance's copy of the shell catalogue (`ownedCopyOf`). */
	const shellModalDefaults = ownedCopyOf(SHELL_MODAL_INITIAL_STATE);
	/**
	* Runtime modal state, keyed by modal key — only the keys actually touched at
	* runtime (opened, closed, given data) are present. It is deliberately NOT a
	* mirror of the definitions: those live in `modalRegistry` (module modals) and
	* `shellModalDefaults` (shell modals), and `modalsById` below resolves the two
	* together.
	*/
	const modalStateById = ref({});
	const modalStack = ref([]);
	const sidebarMenuCollapsed = useLocalStorage("sidebar.collapsed", null, { serializer: {
		read: (v) => v === "null" ? null : v === "true",
		write: (v) => String(v)
	} });
	const sidebarWidth = useLocalStorage(LOCAL_STORAGE_SIDEBAR_WIDTH, 200);
	const currentView = ref("");
	const stateIsDirty = ref(false);
	const hasUnsavedWorkflowChanges = ref(false);
	const dirtyStateSetCount = ref(0);
	const lastSelectedNode = ref(null);
	const nodeViewOffsetPosition = ref([0, 0]);
	const nodeViewInitialized = ref(false);
	const addFirstStepOnLoad = ref(false);
	const addFirstStepOnLoadSource = ref();
	const processingExecutionResults = ref(false);
	const isBlankRedirect = ref(false);
	/**
	* Modules can register their ProjectHeader tabs here
	* Since these tabs are specific to the page they are on,
	* we add them to separate arrays so pages can pick the right ones
	* at render time.
	* Module name is also added to the key so that we can check if the module is active
	* when tabs are rendered.\
	* @example
	* uiStore.registerCustomTabs('overview', 'data-table', [
	*   {
	*     label: 'Data table',
	*     value: 'data-table',
	*     to: { name: 'data-table' },
	*   },
	* ]);
	*/
	const moduleTabs = ref({
		overview: {},
		project: {},
		shared: {}
	});
	/**
	* Settings sidebar items registry per module.
	* Modules can register items and SettingsSidebar will render them
	* when the corresponding module is active.
	*/
	const registeredSettingsPages = ref({});
	const appGridDimensions = ref({
		width: 0,
		height: 0
	});
	const lastInteractedWithNodeConnection = ref();
	const lastInteractedWithNodeHandle = ref(null);
	const lastInteractedWithNodeId = ref();
	const lastCancelledConnectionPosition = ref();
	const settingsStore = useSettingsStore();
	const isDarkThemePreferred = useMediaQuery("(prefers-color-scheme: dark)");
	const preferredSystemTheme = computed(() => isDarkThemePreferred.value ? "dark" : "light");
	const appliedTheme = computed(() => {
		return theme.value === "system" ? preferredSystemTheme.value : theme.value;
	});
	const contextBasedTranslationKeys = computed(() => {
		const deploymentType = settingsStore.deploymentType;
		let contextKey = "";
		if (deploymentType === "cloud") contextKey = ".cloud";
		return {
			feature: { unavailable: { title: `contextual.feature.unavailable.title${contextKey}` } },
			credentials: { sharing: { unavailable: {
				title: `contextual.credentials.sharing.unavailable.title${contextKey}`,
				description: `contextual.credentials.sharing.unavailable.description${contextKey}`,
				action: `contextual.credentials.sharing.unavailable.action${contextKey}`,
				button: `contextual.credentials.sharing.unavailable.button${contextKey}`
			} } },
			workflows: { sharing: {
				title: "contextual.workflows.sharing.title",
				unavailable: {
					title: `contextual.workflows.sharing.unavailable.title${contextKey}`,
					description: {
						modal: `contextual.workflows.sharing.unavailable.description.modal${contextKey}`,
						tooltip: `contextual.workflows.sharing.unavailable.description.tooltip${contextKey}`
					},
					action: `contextual.workflows.sharing.unavailable.action${contextKey}`,
					button: `contextual.workflows.sharing.unavailable.button${contextKey}`
				}
			} },
			variables: { unavailable: {
				title: `contextual.variables.unavailable.title${contextKey}`,
				description: "contextual.variables.unavailable.description",
				action: `contextual.variables.unavailable.action${contextKey}`,
				button: `contextual.variables.unavailable.button${contextKey}`
			} },
			users: { settings: { unavailable: {
				title: `contextual.users.settings.unavailable.title${contextKey}`,
				description: `contextual.users.settings.unavailable.description${contextKey}`,
				button: `contextual.users.settings.unavailable.button${contextKey}`
			} } }
		};
	});
	/**
	* The public read surface: every known modal key resolved to its current state
	* — its definition's initial state with whatever runtime state has accumulated
	* on top. An unknown key reads as closed rather than `undefined`, so a reader
	* that runs before its modal registers renders nothing instead of throwing.
	*
	* This is the single derivation that replaced the store's copy of the registry;
	* writes go to `modalStateById` through the actions below.
	*/
	const modalsById = computed(() => {
		const resolved = modalDefinitionsById(shellModalDefaults);
		for (const [key, runtimeState] of Object.entries(modalStateById.value)) resolved[key] = key in resolved ? {
			...resolved[key],
			...runtimeState
		} : runtimeState;
		return withFallback(resolved, CLOSED_MODAL_STATE);
	});
	const isModalActiveById = computed(() => withFallback(Object.keys(modalsById.value).reduce((acc, name) => {
		acc[name] = name === modalStack.value[0];
		return acc;
	}, {}), false));
	const activeModals = computed(() => modalStack.value.map((modalName) => modalName));
	const settingsSidebarItems = computed(() => {
		const items = [];
		Object.entries(registeredSettingsPages.value).forEach(([moduleName, moduleItems]) => {
			if (settingsStore.isModuleActive(moduleName)) items.push(...moduleItems.map((item) => ({
				available: true,
				...item
			})));
		});
		return items;
	});
	const isReadOnlyView = computed(() => {
		return ![
			VIEWS.WORKFLOW.toString(),
			VIEWS.NEW_WORKFLOW.toString(),
			VIEWS.EXECUTION_DEBUG.toString()
		].includes(currentView.value);
	});
	const isActionActive = computed(() => activeActions.value.reduce((acc, action) => {
		acc[action] = true;
		return acc;
	}, {}));
	const headerHeight = computed(() => {
		const style = getComputedStyle(document.body);
		return Number(style.getPropertyValue("--header--height"));
	});
	const isAnyModalOpen = computed(() => {
		return modalStack.value.length > 0;
	});
	/**
	* Whether we are currently in the process of fetching and deserializing
	* the full execution data and loading it to the store.
	*/
	const isProcessingExecutionResults = computed(() => processingExecutionResults.value);
	const setTheme = (newTheme) => {
		theme.value = newTheme;
		applyThemeToBody(newTheme);
	};
	/**
	* Materialize a modal's runtime state on first touch. Only the fields written
	* at runtime are stored; the rest is resolved from the definition on read, so
	* a key that was never registered still works (dataTable builds per-row keys).
	*/
	const patchModalState = (name, patch) => {
		modalStateById.value[name] = {
			...modalStateById.value[name],
			...patch
		};
	};
	/** Discard everything runtime has accumulated for a key, open or not. */
	const forgetModalState = (name) => {
		delete modalStateById.value[name];
		modalStack.value = modalStack.value.filter((openModalName) => name !== openModalName);
	};
	/**
	* Runtime state lives exactly as long as the definition it accumulated under:
	* a modal unregistered while open must not stay open, and must come back in its
	* declared initial state if it registers again.
	*
	* Ad-hoc keys are told apart from unregistered ones by the registry itself —
	* only a key that was in it can be taken out of it. dataTable's per-row keys are
	* never registered, so they never appear in `previouslyRegistered` and are never
	* swept. Same for the shell catalogue, whose definitions are static.
	*/
	watch(() => new Set(getAll$1().keys()), (registered, previouslyRegistered) => {
		for (const key of previouslyRegistered) if (!registered.has(key)) forgetModalState(key);
	}, { flush: "sync" });
	const setMode = (name, mode) => {
		patchModalState(name, { mode });
	};
	const setActiveId = (name, activeId) => {
		patchModalState(name, { activeId });
	};
	const setShowAuthSelector = (name, showAuthSelector) => {
		patchModalState(name, { showAuthSelector });
	};
	const setModalData = (payload) => {
		patchModalState(payload.name, { data: payload.data });
	};
	/**
	* An unknown key resolves to a closed state instead of throwing, so a forgotten
	* registration reads as "it just doesn't open". This makes that visible, and it
	* belongs on the open path: by then the key has no `<ModalRoot>` and
	* `DynamicModalLoader` only walks registered keys, so nothing reads it. Needs
	* the click, so a modal nobody opens in dev stays silent.
	*/
	const warnIfUnknownModalKey = (name) => {};
	const openModal = (name) => {
		warnIfUnknownModalKey(name);
		patchModalState(name, { open: true });
		modalStack.value = [name].concat(modalStack.value);
	};
	const openModalWithData = (payload) => {
		setModalData(payload);
		openModal(payload.name);
	};
	const closeModal = (name) => {
		patchModalState(name, { open: false });
		modalStack.value = modalStack.value.filter((openModalName) => name !== openModalName);
	};
	const closeAllModals = () => {
		for (const name of modalStack.value) modalsById.value[name] = {
			...modalsById.value[name],
			open: false
		};
		modalStack.value = [];
	};
	const openDeleteUserModal = (id) => {
		setActiveId(DELETE_USER_MODAL_KEY, id);
		openModal(DELETE_USER_MODAL_KEY);
	};
	const openExistingCredential = (id, options = {}) => {
		setActiveId(CREDENTIAL_EDIT_MODAL_KEY, id);
		setMode(CREDENTIAL_EDIT_MODAL_KEY, "edit");
		patchModalState(CREDENTIAL_EDIT_MODAL_KEY, {
			projectId: void 0,
			contextNode: void 0,
			closeOnSave: false,
			hideAskAssistant: options.hideAskAssistant,
			appendToBody: options.appendToBody,
			instanceAiCredentialHelp: options.instanceAiCredentialHelp
		});
		openModal(CREDENTIAL_EDIT_MODAL_KEY);
	};
	const openNewCredential = (type, showAuthOptions = false, forceManualMode = false, projectId, suggestedName, nodeName, contextNode, options = {}) => {
		setActiveId(CREDENTIAL_EDIT_MODAL_KEY, type);
		setShowAuthSelector(CREDENTIAL_EDIT_MODAL_KEY, showAuthOptions);
		patchModalState(CREDENTIAL_EDIT_MODAL_KEY, {
			forceManualMode,
			closeOnSave: options.closeOnSave ?? false,
			projectId,
			suggestedName,
			nodeName,
			contextNode,
			hideAskAssistant: options.hideAskAssistant,
			appendToBody: options.appendToBody,
			instanceAiCredentialHelp: options.instanceAiCredentialHelp,
			usageScope: options.usageScope,
			credentialSetupHint: options.credentialSetupHint
		});
		setMode(CREDENTIAL_EDIT_MODAL_KEY, "new");
		openModal(CREDENTIAL_EDIT_MODAL_KEY);
	};
	const openCommunityPackageUninstallConfirmModal = (packageName) => {
		setMode(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL);
		setActiveId(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, packageName);
		openModal(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY);
	};
	const openCommunityPackageUpdateConfirmModal = (packageName, source) => {
		telemetry.track("User clicked to open community node update modal", {
			source,
			package_name: packageName
		});
		setMode(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, COMMUNITY_PACKAGE_MANAGE_ACTIONS.UPDATE);
		setActiveId(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY, packageName);
		openModal(COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY);
	};
	const openDeleteFolderModal = (id, workflowListEventBus, content) => {
		setActiveId(DELETE_FOLDER_MODAL_KEY, id);
		openModalWithData({
			name: DELETE_FOLDER_MODAL_KEY,
			data: {
				workflowListEventBus,
				content
			}
		});
	};
	const openMoveToFolderModal = (resourceType, resource, workflowListEventBus) => {
		openModalWithData({
			name: MOVE_FOLDER_MODAL_KEY,
			data: {
				resourceType,
				resource,
				workflowListEventBus
			}
		});
	};
	const addActiveAction = (action) => {
		if (!activeActions.value.includes(action)) activeActions.value.push(action);
	};
	const removeActiveAction = (action) => {
		const actionIndex = activeActions.value.indexOf(action);
		if (actionIndex !== -1) activeActions.value.splice(actionIndex, 1);
	};
	const toggleSidebarMenuCollapse = () => {
		sidebarMenuCollapsed.value = !sidebarMenuCollapsed.value;
		telemetry.track("User toggled sidebar", { expanded: !sidebarMenuCollapsed.value });
	};
	function resetLastInteractedWith() {
		lastInteractedWithNodeConnection.value = void 0;
		lastInteractedWithNodeHandle.value = null;
		lastInteractedWithNodeId.value = void 0;
		lastCancelledConnectionPosition.value = void 0;
	}
	const registerCustomTabs = (page, moduleName, tabs) => {
		if (!moduleTabs.value[page]) throw new Error(`Invalid page type: ${page}`);
		moduleTabs.value[page][moduleName] = tabs;
	};
	const registerSettingsPages = (moduleName, items) => {
		registeredSettingsPages.value[moduleName] = items;
	};
	/**
	* Set whether we are currently in the process of fetching and deserializing
	* the full execution data and loading it to the store.
	*/
	const setProcessingExecutionResults = (value) => {
		processingExecutionResults.value = value;
	};
	const markStateDirty = (type = "workflow") => {
		dirtyStateSetCount.value++;
		stateIsDirty.value = true;
		if (type === "workflow") hasUnsavedWorkflowChanges.value = true;
	};
	const markStateClean = () => {
		stateIsDirty.value = false;
		hasUnsavedWorkflowChanges.value = false;
	};
	return {
		appGridDimensions,
		settingsSidebarItems,
		appliedTheme,
		contextBasedTranslationKeys,
		isModalActiveById,
		isReadOnlyView,
		isActionActive,
		activeActions,
		headerHeight,
		dirtyStateSetCount: computed(() => dirtyStateSetCount.value),
		stateIsDirty: computed(() => stateIsDirty.value),
		hasUnsavedWorkflowChanges: computed(() => hasUnsavedWorkflowChanges.value),
		isBlankRedirect,
		activeCredentialType,
		lastSelectedNode,
		lastInteractedWithNodeConnection,
		lastInteractedWithNodeHandle,
		lastInteractedWithNodeId,
		lastCancelledConnectionPosition,
		nodeViewOffsetPosition,
		nodeViewInitialized,
		addFirstStepOnLoad,
		addFirstStepOnLoadSource,
		sidebarMenuCollapsed,
		sidebarWidth,
		theme: computed(() => theme.value),
		modalsById,
		modalStateById,
		currentView,
		isAnyModalOpen,
		activeModals,
		isProcessingExecutionResults,
		setTheme,
		setModalData,
		openModalWithData,
		openModal,
		closeModal,
		closeAllModals,
		openDeleteUserModal,
		openExistingCredential,
		openNewCredential,
		openCommunityPackageUninstallConfirmModal,
		openCommunityPackageUpdateConfirmModal,
		addActiveAction,
		removeActiveAction,
		toggleSidebarMenuCollapse,
		resetLastInteractedWith,
		setProcessingExecutionResults,
		markStateDirty,
		markStateClean,
		openDeleteFolderModal,
		openMoveToFolderModal,
		moduleTabs,
		registerCustomTabs,
		registerSettingsPages
	};
});
/**
* Listen for modals opening and closing.
*
* Derived from which modals are open, not from which actions were called: there
* is more than one way a modal closes — `closeModal`, and its definition being
* unregistered — and an observer keyed on action names sees only the first. That
* shape breaks silently, with no type error, every time a close path is added.
*
* Returns a stop handle, and is owned by the effect scope it is created in, so a
* caller inside `effectScope()` disposes it by stopping that scope.
*/
var listenForModalChanges = (opts) => {
	const { store, onModalClosed, onModalOpened } = opts;
	return watch(() => store.activeModals, (openList, previouslyOpenList) => {
		const open = new Set(openList);
		const previouslyOpen = new Set(previouslyOpenList);
		for (const name of open) if (!previouslyOpen.has(name)) onModalOpened?.(name);
		for (const name of previouslyOpen) if (!open.has(name)) onModalClosed?.(name);
	}, { flush: "sync" });
};
//#endregion
export { DEVOPS_AUTOMATION_CLOUD_INFRASTRUCTURE_ORCHESTRATION_GOAL as $, ROLE_OTHER_KEY as $t, COMMUNITY_PACKAGE_MANAGE_ACTIONS as A, OTHER_COMPANY_TYPE as At, AUTOMATION_BENEFICIARY_MY_TEAM as B, REPORTED_SOURCE_LINKEDIN as Bt, DEBUG_PAYWALL_MODAL_KEY as C, MARKETING_AUTOMATION_LEAD_GENERATION_GOAL as Ct, COMMUNITY_NODES_RISKS_DOCS_URL as D, MEDIA_INDUSTRY as Dt, COMMUNITY_NODES_INSTALLATION_DOCS_URL as E, MARKETING_INDUSTRY as Et, FOLDER_NAME_ONLY_DOTS_REGEX as F, REAL_ESTATE_OR_CONSTRUCTION as Ft, COMPANY_SIZE_100_499 as G, REPORTED_SOURCE_YOUTUBE as Gt, AUTOMATION_BENEFICIARY_SELF as H, REPORTED_SOURCE_OTHER_KEY as Ht, ILLEGAL_FOLDER_CHARACTERS as I, REPORTED_SOURCE_EVENT as It, COMPANY_SIZE_KEY as J, ROLE_DATA_SCIENCE as Jt, COMPANY_SIZE_20_99 as K, ROLE_BUSINESS_OWNER as Kt, MCP_ACCESS_ACTIONS as L, REPORTED_SOURCE_FRIEND as Lt, DELETE_FOLDER_MODAL_KEY as M, OTHER_MARKETING_AUTOMATION_GOAL_KEY as Mt, FOLDER_LIST_ITEM_ACTIONS as N, PERSONAL_COMPANY_TYPE as Nt, COMMUNITY_PACKAGE_CONFIRM_MODAL_KEY as O, OTHER_AUTOMATION_GOAL as Ot, FOLDER_NAME_ILLEGAL_CHARACTERS_REGEX as P, PHYSICAL_RETAIL_OR_SERVICES as Pt, DEVOPS_AUTOMATION_CI_CD_GOAL as Q, ROLE_OTHER as Qt, MOVE_FOLDER_MODAL_KEY as R, REPORTED_SOURCE_GOOGLE as Rt, CANCELLABLE_EXECUTION_STATUSES as S, MARKETING_AUTOMATION_GOAL_KEY as St, PROJECT_MOVE_RESOURCE_MODAL as T, MARKETING_AUTOMATION_REPORTING as Tt, COMPANY_INDUSTRY_EXTENDED_KEY as U, REPORTED_SOURCE_PODCAST as Ut, AUTOMATION_BENEFICIARY_OTHER_TEAMS as V, REPORTED_SOURCE_OTHER as Vt, COMPANY_SIZE_1000_OR_MORE as W, REPORTED_SOURCE_TWITTER as Wt, COMPANY_TYPE_KEY as X, ROLE_ENGINEERING as Xt, COMPANY_SIZE_PERSONAL_USE as Y, ROLE_DEVOPS as Yt, DELETE_USER_MODAL_KEY as Z, ROLE_KEY as Zt, COMMUNITY_PLUS_ENROLLMENT_MODAL as _, MANUFACTURING_INDUSTRY as _t, registerAll as a, TELECOMS_INDUSTRY as an, DEVOPS_MONITORING_AND_ALERTING_GOAL as at, API_KEY_SCOPE_GROUPS as b, MARKETING_AUTOMATION_CUSTOMER_COMMUNICATION as bt, getAll$1 as c, DIGITAL_AGENCY_COMPANY_TYPE as ct, ANNOTATION_TAGS_MANAGER_MODAL_KEY as d, FINANCE_INSURANCE_INDUSTRY as dt, ROLE_SALES_AND_MARKETING as en, DEVOPS_AUTOMATION_DATA_SYNCING_GOAL as et, TAGS_MANAGER_MODAL_KEY as f, GOVERNMENT_INDUSTRY as ft, COMMUNITY_PLUS_DOCS_URL as g, LEGAL_INDUSTRY as gt, SOURCE_CONTROL_PUSH_MODAL_KEY as h, IT_INDUSTRY as ht, get as i, SYSTEMS_INTEGRATOR_COMPANY_TYPE as in, DEVOPS_INCIDENT_RESPONSE_GOAL as it, NPM_KEYWORD_SEARCH_URL as j, OTHER_INDUSTRY_OPTION as jt, COMMUNITY_PACKAGE_INSTALL_MODAL_KEY as k, OTHER_COMPANY_INDUSTRY_EXTENDED_KEY as kt, register$2 as l, ECOMMERCE_COMPANY_TYPE as lt, SOURCE_CONTROL_PULL_RESULT_MODAL_KEY as m, INVITE_USER_MODAL_KEY as mt, useUIStore as n, SAAS_COMPANY_TYPE as nn, DEVOPS_AUTOMATION_GOAL_OTHER_KEY as nt, registerResource as o, CREDENTIAL_EDIT_MODAL_KEY as on, DEVOPS_REPORTING_GOAL as ot, SOURCE_CONTROL_PULL_MODAL_KEY as p, HEALTHCARE_INDUSTRY as pt, COMPANY_SIZE_500_999 as q, ROLE_CUSTOMER_SUPPORT as qt, register as r, SECURITY_INDUSTRY as rn, DEVOPS_AUTOMATION_OTHER as rt, declareAdHocKeyPrefix as s, CREDENTIAL_SELECT_MODAL_KEY as sn, DEVOPS_TICKETING_SYSTEMS_INTEGRATIONS_GOAL as st, listenForModalChanges as t, ROLE_SECURITY as tn, DEVOPS_AUTOMATION_GOAL_KEY as tt, assertUniqueRouteNames as u, EDUCATION_TYPE as ut, VARIABLE_MODAL_KEY as v, MARKETING_AUTOMATION_ACTIONS as vt, DEFAULT_PROJECT_ICON as w, MARKETING_AUTOMATION_OTHER as wt, READ_SCOPE_ACTIONS as x, MARKETING_AUTOMATION_DATA_SYNCHING as xt, API_KEY_CREATE_OR_EDIT_MODAL_KEY as y, MARKETING_AUTOMATION_AD_CAMPAIGN as yt, AUTOMATION_BENEFICIARY_KEY as z, REPORTED_SOURCE_KEY as zt };
