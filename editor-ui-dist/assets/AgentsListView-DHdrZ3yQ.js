import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-ChH4gKEU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { t as N8nBadge_default } from "./N8nBadge-DOliSzFF.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-1S4CtkrK.js";
import { t as N8nCard_default } from "./N8nCard-CEpSF4gP.js";
import { c as useRouter, s as useRoute } from "./vue-router-Dl3cOHxO.js";
import { hn as useProjectsStore } from "./workflows.store-BSTkwdxQ.js";
import { t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as useSettingsStore } from "./settings.store-DOBrq3pG.js";
import { n as useToast } from "./useToast-D3cREU6j.js";
import { Nr as NEW_SESSION_PARAM, br as AGENT_PREVIEW_VIEW, gr as AGENT_BUILDER_VIEW } from "./constants-BP1FOJvU.js";
import { t as DEBOUNCE_TIME } from "./durations-nXrTS7zD.js";
import { n as useDebounce, r as require_debounce, t as getDebounceTime } from "./useDebounce-Bcd_ZnT1.js";
import { t as require_dateformat } from "./dateformat-C4T67FBC.js";
import { n as useFavoritesStore } from "./workflowsList.store-6Bsu-Vve.js";
import { n as useDocumentTitle } from "./useDocumentTitle-dnwMqthf.js";
import { E as listAgentsPageGlobal, T as listAgentsPage, s as deleteAgent } from "./useAgentApi-sdUpTCk-.js";
import { t as TimeAgo_default } from "./TimeAgo-BBRMVtfD.js";
import { t as useMcp } from "./useMcp-y4hDB-If.js";
import { t as removeProjectAgentFromListCache } from "./useProjectAgentsList-DGESl4Ch.js";
import { t as generateNanoId } from "./generate-nano-id-CiQpTNFU.js";
import { t as instanceAiCreateAgentRoute } from "./createAgentRoute-D6wcszZv.js";
import { t as useInsightsStore } from "./insights.store-tvKZIYMi.js";
import { i as useProjectPages } from "./readyToRun.store-2D0Iog9S.js";
import { t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-BQi6YZv0.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-3rzbBBk1.js";
import { t as ProjectHeader_default } from "./ProjectHeader-CF7cIo7k.js";
import { t as useAgentPermissions } from "./useAgentPermissions-vaaE83uz.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-CeEGMD3w.js";
import { t as useMCPStore } from "./mcp.store-Cx0Z1NKA.js";
import { t as InsightsSummary_default } from "./InsightsSummary-D-Ialx5n.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-CB-I3DCC.js";
import { t as useAgentPublish } from "./useAgentPublish-B1bjmXlC.js";
//#region src/features/agents/components/AgentCard.vue?vue&type=script&setup=true&lang.ts
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var _hoisted_1 = { key: 0 };
var AgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCard",
	props: {
		agent: {},
		projectId: {}
	},
	emits: [
		"select",
		"published",
		"unpublished",
		"deleted",
		"new-chat"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const mcpStore = useMCPStore();
		const mcp = useMcp();
		const { openAgentConfirmationModal } = useAgentConfirmationModal();
		const { publish, unpublish } = useAgentPublish();
		const { canUpdate, canDelete, canPublish, canUnpublish } = useAgentPermissions(() => props.projectId);
		const isPublished = computed(() => props.agent.activeVersionId !== null);
		const isMcpEnabled = computed(() => settingsStore.isModuleActive("mcp") && !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
		const mcpToggleStatus = ref(null);
		const isAvailableInMCP = computed(() => mcpToggleStatus.value ?? props.agent.availableInMCP ?? false);
		watch([() => props.agent, () => props.agent.availableInMCP], () => {
			mcpToggleStatus.value = null;
		});
		const showMcpIndicator = computed(() => isMcpEnabled.value && isAvailableInMCP.value);
		const favoriteStore = useFavoritesStore();
		const isFavorite = computed(() => favoriteStore.isFavorite(props.agent.id, "agent"));
		const actions = computed(() => {
			const items = [{
				value: "newChat",
				label: locale.baseText("agents.list.actions.newChat")
			}];
			if (isPublished.value && canUnpublish.value) items.push({
				value: "unpublish",
				label: locale.baseText("agents.list.actions.unpublish"),
				divided: true
			});
			else if (!isPublished.value && canPublish.value) items.push({
				value: "publish",
				label: locale.baseText("agents.list.actions.publish"),
				divided: true
			});
			items.push({
				value: "toggleFavorite",
				label: locale.baseText(isFavorite.value ? "favorites.remove" : "favorites.add"),
				divided: !isPublished.value ? !canPublish.value : !canUnpublish.value
			});
			if (isMcpEnabled.value && canUpdate.value) items.push({
				value: "toggleMCPAccess",
				label: locale.baseText(isAvailableInMCP.value ? "agents.list.actions.disableMCPAccess" : "agents.list.actions.enableMCPAccess")
			});
			if (canDelete.value) items.push({
				value: "delete",
				label: locale.baseText("agents.list.actions.delete"),
				divided: items.length > 0
			});
			return items;
		});
		const showActions = computed(() => actions.value.length > 0);
		const formattedCreatedAtDate = computed(() => {
			const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
			return (0, import_dateformat.default)(props.agent.createdAt, `d mmmm${String(props.agent.createdAt).startsWith(currentYear) ? "" : ", yyyy"}`);
		});
		async function onAction(action) {
			if (action === "newChat") emit("new-chat", props.agent.id, props.projectId);
			else if (action === "publish") {
				const updated = await publish(props.projectId, props.agent.id);
				if (updated) emit("published", updated);
			} else if (action === "unpublish") {
				const updated = await unpublish(props.projectId, props.agent.id, props.agent.name);
				if (updated) emit("unpublished", updated);
			} else if (action === "toggleFavorite") await favoriteStore.toggleFavorite(props.agent.id, "agent");
			else if (action === "toggleMCPAccess") await toggleMCPAccess(!isAvailableInMCP.value);
			else if (action === "delete") {
				if (await openAgentConfirmationModal({
					title: locale.baseText("agents.delete.modal.title", { interpolate: { name: props.agent.name } }),
					description: locale.baseText("agents.delete.modal.description", { interpolate: { name: props.agent.name } }),
					confirmButtonText: locale.baseText("agents.delete.modal.button.delete"),
					cancelButtonText: locale.baseText("generic.cancel")
				}) !== "confirm") return;
				await deleteAgent(rootStore.restApiContext, props.projectId, props.agent.id);
				removeProjectAgentFromListCache(props.projectId, props.agent.id);
				favoriteStore.removeFavoriteLocally(props.agent.id, "agent");
				emit("deleted", props.agent.id);
			}
		}
		async function toggleMCPAccess(enabled) {
			try {
				await mcpStore.toggleAgentMcpAccess(props.agent.id, enabled);
				mcpToggleStatus.value = enabled;
				if (enabled) mcp.trackMcpAccessEnabledForAgent(props.agent.id);
			} catch (error) {
				toast.showError(error, locale.baseText("agents.toggleMCP.error.title"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.cardLink),
				"data-test-id": "agent-card",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("select", __props.agent.id))
			}, {
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "h2",
					bold: "",
					class: normalizeClass(_ctx.$style.cardHeading),
					"data-test-id": "agent-card-name"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.agent.name) + " ", 1), !unref(canUpdate) ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.readonlyBadge),
						theme: "tertiary",
						bold: "",
						"data-test-id": "agent-card-readonly-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.list.readonly")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["class"])]),
				append: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.cardActions),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [isPublished.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.publishIndicator),
					"data-test-id": "agent-card-publish-indicator"
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.publishIndicatorDot) }, null, 2), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.list.published")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true), showActions.value ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
					key: 1,
					actions: actions.value,
					theme: "dark",
					"data-test-id": "agent-card-actions",
					onAction
				}, null, 8, ["actions"])) : createCommentVNode("", true)], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardDescription) }, [
					createBaseVNode("span", null, [
						createTextVNode(toDisplayString(unref(locale).baseText("agents.list.updated")) + " ", 1),
						createVNode(TimeAgo_default, { date: String(__props.agent.updatedAt) }, null, 8, ["date"]),
						_cache[2] || (_cache[2] = createTextVNode(" | ", -1))
					]),
					createBaseVNode("span", null, toDisplayString(unref(locale).baseText("agents.list.created")) + " " + toDisplayString(formattedCreatedAtDate.value), 1),
					showMcpIndicator.value ? (openBlock(), createElementBlock("span", _hoisted_1, "|")) : createCommentVNode("", true),
					showMcpIndicator.value ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.mcpIndicator),
						"data-test-id": "agent-card-mcp"
					}, [createVNode(unref(N8nTooltip_default), {
						placement: "right",
						content: unref(locale).baseText("agents.list.availableInMCP")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "mcp",
							size: "medium"
						})]),
						_: 1
					}, 8, ["content"])], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AgentCard_vue_vue_type_style_index_0_lang_module_default = {
	cardLink: "_cardLink_hytax_125",
	cardHeading: "_cardHeading_hytax_135",
	readonlyBadge: "_readonlyBadge_hytax_143",
	cardDescription: "_cardDescription_hytax_147",
	mcpIndicator: "_mcpIndicator_hytax_157",
	cardActions: "_cardActions_hytax_162",
	publishIndicator: "_publishIndicator_hytax_173",
	publishIndicatorDot: "_publishIndicatorDot_hytax_185"
};
var AgentCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentsListView.vue
var AgentsListView_default = /* @__PURE__ */ defineComponent({
	__name: "AgentsListView",
	setup(__props) {
		function isAgentResource(value) {
			return typeof value === "object" && value !== null && "id" in value;
		}
		const AGENTS_SORT_MAP = {
			lastUpdated: "updatedAt:desc",
			lastCreated: "createdAt:desc",
			nameAsc: "name:asc",
			nameDesc: "name:desc"
		};
		const locale = useI18n();
		const documentTitle = useDocumentTitle();
		const route = useRoute();
		const router = useRouter();
		const rootStore = useRootStore();
		const projectsStore = useProjectsStore();
		const insightsStore = useInsightsStore();
		const projectPages = useProjectPages();
		const agentTelemetry = useAgentTelemetry();
		const { callDebounced } = useDebounce();
		const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
		const { canCreate: canCreateAgent } = useAgentPermissions(() => projectId.value ?? homeProject.value?.id);
		const allAgents = ref([]);
		const filters = ref({
			search: "",
			homeProject: ""
		});
		const currentPage = ref(1);
		const pageSize = ref(50);
		const currentSort = ref("updatedAt:desc");
		const totalAgents = ref(0);
		const loading = ref(true);
		const projectId = computed(() => route.params.projectId);
		const sortFns = {
			lastUpdated: (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
			lastCreated: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			nameAsc: (a, b) => a.name.localeCompare(b.name),
			nameDesc: (a, b) => b.name.localeCompare(a.name)
		};
		async function fetchAgents() {
			const shouldDelayLoading = allAgents.value.length > 0;
			const delayedLoading = (0, import_debounce.default)(() => {
				loading.value = true;
			}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
			if (shouldDelayLoading) delayedLoading();
			else loading.value = true;
			try {
				const fetchOptions = {
					skip: (currentPage.value - 1) * pageSize.value,
					take: pageSize.value,
					sortBy: currentSort.value,
					filter: filters.value.search ? { query: filters.value.search } : void 0
				};
				const { count, data } = projectId.value ? await listAgentsPage(rootStore.restApiContext, projectId.value, fetchOptions) : await listAgentsPageGlobal(rootStore.restApiContext, fetchOptions);
				allAgents.value = data;
				totalAgents.value = count;
			} finally {
				delayedLoading.cancel();
				loading.value = false;
			}
		}
		function onSelectAgent(agentId, agentProjectId) {
			router.push({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: agentProjectId,
					agentId
				}
			});
		}
		function onNewAgentChat(agentId, agentProjectId) {
			router.push({
				name: AGENT_PREVIEW_VIEW,
				params: {
					projectId: agentProjectId,
					agentId
				},
				query: { [NEW_SESSION_PARAM]: "true" }
			});
		}
		function onAgentPublished(updated) {
			allAgents.value = allAgents.value.map((a) => a.id === updated.id ? updated : a);
			fetchAgents();
		}
		function onAgentUnpublished(updated) {
			allAgents.value = allAgents.value.map((a) => a.id === updated.id ? updated : a);
			fetchAgents();
		}
		function onAgentDeleted(agentId) {
			allAgents.value = allAgents.value.filter((a) => a.id !== agentId);
			totalAgents.value = Math.max(0, totalAgents.value - 1);
			if (allAgents.value.length === 0 && currentPage.value > 1) currentPage.value -= 1;
			fetchAgents();
		}
		async function onSearchUpdated(search) {
			filters.value = {
				...filters.value,
				search
			};
			currentPage.value = 1;
			if (search) await callDebounced(fetchAgents, {
				debounceTime: DEBOUNCE_TIME.INPUT.SEARCH,
				trailing: true
			});
			else await fetchAgents();
		}
		async function setPaginationAndSort(payload) {
			if (payload.page) currentPage.value = payload.page;
			if (payload.pageSize) pageSize.value = payload.pageSize;
			if (payload.sort) currentSort.value = AGENTS_SORT_MAP[payload.sort] ?? "updatedAt:desc";
			if (!loading.value) await callDebounced(fetchAgents, {
				debounceTime: DEBOUNCE_TIME.API.RESOURCE_SEARCH,
				trailing: true
			});
		}
		function onCreateAgentClick() {
			const agentId = generateNanoId();
			agentTelemetry.trackClickedNewAgent("button", agentId);
			const targetProjectId = projectId.value ?? projectsStore.personalProject?.id ?? "";
			router.push(instanceAiCreateAgentRoute(targetProjectId, agentId));
		}
		onMounted(async () => {
			documentTitle.set(locale.baseText("agents.heading"));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
				filters: filters.value,
				"onUpdate:filters": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
				"resource-key": "agents",
				type: "list-paginated",
				resources: allAgents.value,
				initialize: fetchAgents,
				loading: false,
				"resources-refreshing": loading.value,
				disabled: false,
				"sort-fns": sortFns,
				"sort-options": [
					"lastUpdated",
					"lastCreated",
					"nameAsc",
					"nameDesc"
				],
				"type-props": { itemSize: 80 },
				"custom-page-size": unref(50),
				"total-items": totalAgents.value,
				"dont-perform-sorting-and-filtering": true,
				shareable: false,
				"ui-config": {
					searchEnabled: true,
					showFiltersDropdown: false,
					sortEnabled: true
				},
				"display-name": (agent) => agent.name,
				"tab-key": "agents",
				"onUpdate:search": onSearchUpdated,
				"onUpdate:paginationAndSort": setPaginationAndSort
			}, {
				header: withCtx(() => [createVNode(ProjectHeader_default, { "main-button": "agent" }, {
					default: withCtx(() => [unref(projectPages).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				empty: withCtx(() => [createVNode(ResourcesListEmptyState_default, {
					"resource-key": "agents",
					"button-disabled": !unref(canCreateAgent),
					"onClick:button": onCreateAgentClick
				}, null, 8, ["button-disabled"])]),
				item: withCtx(({ item: data }) => [isAgentResource(data) ? (openBlock(), createBlock(AgentCard_default, {
					key: 0,
					class: "mb-2xs",
					agent: data,
					"project-id": data.projectId,
					onSelect: ($event) => onSelectAgent(data.id, data.projectId),
					onNewChat: onNewAgentChat,
					onPublished: onAgentPublished,
					onUnpublished: onAgentUnpublished,
					onDeleted: onAgentDeleted
				}, null, 8, [
					"agent",
					"project-id",
					"onSelect"
				])) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"filters",
				"resources",
				"resources-refreshing",
				"custom-page-size",
				"total-items",
				"display-name"
			]);
		};
	}
});
//#endregion
export { AgentsListView_default as default };
