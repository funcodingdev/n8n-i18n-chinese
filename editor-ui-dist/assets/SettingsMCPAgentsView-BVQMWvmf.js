import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, dt as useModel, gt as watch, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-CEAOc3R8.js";
import { $t as N8nActionToggle_default, C as N8nDataTableServer_default, Tt as N8nLink_default, an as N8nLoading_default, it as SettingsLayout_default, lo as N8nButton_default, ra as N8nTooltip_default, ro as N8nText_default, rt as SettingsPageHeader_default } from "./src-2q8VSXtx.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as router } from "./router-BDo2Ih6Q.js";
import { _ as useRouter } from "./htmlUtils-Bwndk9_P.js";
import { t as useSettingsStore } from "./settings.store-g-g2FkkM.js";
import "./settings.store-wQLyP2Tj.js";
import { t as useTelemetry } from "./useTelemetry-RqJ9XXte.js";
import { n as useToast } from "./useToast-B_ymsMmy.js";
import { Nr as PROJECT_AGENTS, kr as AGENT_VIEW } from "./constants-DCcvObnS.js";
import { n as TELEMETRY_EVENT } from "./src-asvL48mO.js";
import { n as useUIStore } from "./ui.store-BvDpb-G-.js";
import { t as useDocumentTitle } from "./useDocumentTitle-CXbtNGqv.js";
import { i as MCP_CONNECT_AGENTS_MODAL_KEY, l as MCP_SETTINGS_VIEW, o as MCP_DOCS_PAGE_URL } from "./mcp.constants-Dn1qcOpP.js";
import { t as useMCPStore } from "./mcp.store-C-B2sAhY.js";
import { t as SelectedItemsInfo_default } from "./SelectedItemsInfo-K6Q0KzMR.js";
//#region src/features/ai/mcpAccess/components/tabs/AgentsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 0 };
var AgentsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentsTable",
	props: /* @__PURE__ */ mergeModels({
		agents: {},
		totalCount: {},
		loading: { type: Boolean }
	}, {
		"tableOptions": { default: () => ({
			page: 0,
			itemsPerPage: 10,
			sortBy: []
		}) },
		"tableOptionsModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"removeMcpAccess",
		"bulkRemoveMcpAccess",
		"connectAgents",
		"update:options"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const tableOptions = useModel(__props, "tableOptions");
		const tablePage = computed({
			get: () => tableOptions.value.page,
			set: (page) => {
				tableOptions.value = {
					...tableOptions.value,
					page
				};
			}
		});
		const tableItemsPerPage = computed({
			get: () => tableOptions.value.itemsPerPage,
			set: (itemsPerPage) => {
				tableOptions.value = {
					...tableOptions.value,
					itemsPerPage
				};
			}
		});
		const tableSortBy = computed({
			get: () => tableOptions.value.sortBy,
			set: (sortBy) => {
				tableOptions.value = {
					...tableOptions.value,
					sortBy
				};
			}
		});
		const emit = __emit;
		const i18n = useI18n();
		const itemsLength = computed(() => props.totalCount ?? props.agents.length);
		const selectedAgentIds = ref([]);
		watch(() => props.agents, () => {
			selectedAgentIds.value = [];
		});
		const clearSelection = () => {
			selectedAgentIds.value = [];
		};
		const onBulkRemoveMcpAccess = () => {
			emit("bulkRemoveMcpAccess", selectedAgentIds.value);
		};
		const tableHeaders = ref([
			{
				title: i18n.baseText("settings.mcp.agents.table.column.name"),
				key: "agent",
				width: 300,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("settings.mcp.agents.table.column.location"),
				key: "location",
				width: 300,
				disableSort: true,
				value() {}
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 50,
				disableSort: true,
				value() {}
			}
		]);
		const availableActions = [{
			label: i18n.baseText("settings.mcp.agents.table.action.removeMCPAccess"),
			value: "removeFromMCP"
		}];
		const onAgentAction = (action, agent) => {
			if (action === "removeFromMCP") emit("removeMcpAccess", agent);
		};
		const onConnectClick = () => {
			emit("connectAgents");
		};
		const agentLink = (agent) => router.resolve({
			name: AGENT_VIEW,
			params: {
				projectId: agent.projectId,
				agentId: agent.id
			}
		}).fullPath;
		const projectName = (agent) => agent.project?.type === "personal" ? i18n.baseText("projects.menu.personal") : agent.project?.name ?? "";
		const projectLink = (agent) => router.resolve({
			name: PROJECT_AGENTS,
			params: { projectId: agent.projectId }
		}).fullPath;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "h1",
				class: "mb-l"
			}, null, 8, ["loading"]), createVNode(unref(N8nLoading_default), {
				loading: props.loading,
				variant: "p",
				rows: 5,
				"shrink-last": false
			}, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(["mt-s mb-xl", _ctx.$style["table-container"]])
			}, [createVNode(unref(N8nDataTableServer_default), {
				"sort-by": tableSortBy.value,
				"onUpdate:sortBy": _cache[0] || (_cache[0] = ($event) => tableSortBy.value = $event),
				page: tablePage.value,
				"onUpdate:page": _cache[1] || (_cache[1] = ($event) => tablePage.value = $event),
				"items-per-page": tableItemsPerPage.value,
				"onUpdate:itemsPerPage": _cache[2] || (_cache[2] = ($event) => tableItemsPerPage.value = $event),
				selection: selectedAgentIds.value,
				"onUpdate:selection": _cache[3] || (_cache[3] = ($event) => selectedAgentIds.value = $event),
				class: normalizeClass(_ctx.$style["agent-table"]),
				"data-test-id": "mcp-agent-table",
				headers: tableHeaders.value,
				items: props.agents,
				"items-length": itemsLength.value,
				"page-sizes": [
					10,
					25,
					50
				],
				"show-select": itemsLength.value > 0,
				"onUpdate:options": _cache[4] || (_cache[4] = ($event) => emit("update:options", $event))
			}, createSlots({
				[`item.agent`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["agent-cell"]),
					"data-test-id": "mcp-agent-cell"
				}, [createVNode(unref(N8nLink_default), {
					"data-test-id": "mcp-agent-name-link",
					"new-window": true,
					to: agentLink(item),
					theme: "text",
					class: normalizeClass([_ctx.$style["table-link"], _ctx.$style.truncate])
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "mcp-agent-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
						_: 2
					}, 1032, ["class"])]),
					_: 2
				}, 1032, ["to", "class"])], 2)]),
				[`item.location`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["location-cell"]),
					"data-test-id": "mcp-agent-location-cell"
				}, [createVNode(unref(N8nLink_default), {
					"data-test-id": "mcp-agent-project-link",
					"new-window": true,
					to: projectLink(item),
					theme: "text",
					class: normalizeClass([_ctx.$style["table-link"], _ctx.$style.truncate])
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "mcp-agent-project-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(projectName(item)), 1)]),
						_: 2
					}, 1032, ["class"])]),
					_: 2
				}, 1032, ["to", "class"])], 2)]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(unref(N8nActionToggle_default), {
					class: normalizeClass(_ctx.$style["action-toggle"]),
					"data-test-id": "mcp-agent-action-toggle",
					placement: "bottom",
					actions: availableActions,
					theme: "dark",
					onAction: ($event) => onAgentAction($event, item)
				}, null, 8, ["class", "onAction"])]),
				_: 2
			}, [itemsLength.value === 0 ? {
				name: "cover",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["empty-state"]) }, [
					createVNode(unref(N8nText_default), {
						"data-test-id": "mcp-agent-table-empty-state",
						size: "large",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.agents.table.empty.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						"data-test-id": "mcp-agent-table-empty-state-description",
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.agents.table.empty.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						variant: "solid",
						"data-test-id": "mcp-agent-table-empty-state-button",
						label: unref(i18n).baseText("settings.mcp.connectAgents"),
						onClick: onConnectClick
					}, null, 8, ["label"])
				], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"sort-by",
				"page",
				"items-per-page",
				"selection",
				"class",
				"headers",
				"items",
				"items-length",
				"show-select"
			]), createVNode(SelectedItemsInfo_default, {
				class: normalizeClass(_ctx.$style["selection-bar"]),
				"selected-count": selectedAgentIds.value.length,
				onClearSelection: clearSelection
			}, {
				actions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "mcp-bulk-remove-agent-access-button",
					label: unref(i18n).baseText("settings.mcp.agents.table.action.removeMCPAccess"),
					onClick: onBulkRemoveMcpAccess
				}, null, 8, ["label"])]),
				_: 1
			}, 8, ["class", "selected-count"])], 2))]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/AgentsTable.vue?vue&type=style&index=0&lang.module.scss
var truncate = "_truncate_my516_172";
var AgentsTable_vue_vue_type_style_index_0_lang_module_default = {
	"table-container": "_table-container_my516_125",
	"selection-bar": "_selection-bar_my516_125",
	"agent-table": "_agent-table_my516_134",
	"empty-state": "_empty-state_my516_144",
	"agent-cell": "_agent-cell_my516_154",
	"location-cell": "_location-cell_my516_161",
	"table-link": "_table-link_my516_168",
	truncate
};
var AgentsTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentsTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPAgentsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "mcp-agents-view" };
var SettingsMCPAgentsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsMCPAgentsView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const telemetry = useTelemetry();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const mcpStore = useMCPStore();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const agentsLoading = ref(false);
		const availableAgents = ref([]);
		const availableAgentsTotal = ref(0);
		const agentsTableState = ref({
			page: 0,
			itemsPerPage: 10,
			sortBy: []
		});
		const agentsTableItemsPerPage = ref(agentsTableState.value.itemsPerPage);
		const showConnectAgentsButton = computed(() => availableAgentsTotal.value > 0);
		const showMcpAccessUpdatedToast = (count, enabled) => {
			toast.showMessage({
				type: "success",
				title: i18n.baseText(enabled ? "settings.mcp.agents.enableAccess.success.title" : "settings.mcp.agents.removeAccess.success.title", {
					adjustToNumber: count,
					interpolate: { count: String(count) }
				})
			});
		};
		const fetchAvailableAgents = async () => {
			agentsLoading.value = true;
			try {
				const response = await mcpStore.fetchAgentsAvailableForMCPPage(agentsTableState.value.page + 1, agentsTableState.value.itemsPerPage);
				if (response.page !== agentsTableState.value.page + 1) agentsTableState.value = {
					...agentsTableState.value,
					page: response.page - 1
				};
				availableAgents.value = response.data;
				availableAgentsTotal.value = response.count;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.mcp.agents.list.error.fetching"));
			} finally {
				setTimeout(() => {
					agentsLoading.value = false;
				}, 200);
			}
		};
		const refreshAgentsFromFirstPage = async () => {
			agentsTableState.value = {
				...agentsTableState.value,
				page: 0
			};
			await fetchAvailableAgents();
		};
		const onAgentsTableUpdate = async (options) => {
			const pageSizeChanged = options.itemsPerPage !== agentsTableItemsPerPage.value;
			agentsTableState.value = {
				...options,
				page: pageSizeChanged ? 0 : options.page
			};
			agentsTableItemsPerPage.value = options.itemsPerPage;
			await fetchAvailableAgents();
		};
		const onToggleAgentMCPAccess = async (agentId, isEnabled) => {
			try {
				await mcpStore.toggleAgentMcpAccess(agentId, isEnabled);
				if (isEnabled) await refreshAgentsFromFirstPage();
				else {
					showMcpAccessUpdatedToast(1, false);
					await fetchAvailableAgents();
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.toggleMCP.error.title"));
				throw error;
			}
		};
		const onBulkEnableAgentsMCPAccess = async (agentIds) => {
			try {
				showMcpAccessUpdatedToast((await mcpStore.toggleAgentsMcpAccess({ agentIds }, true)).updatedCount, true);
				await refreshAgentsFromFirstPage();
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.toggleMCP.error.title"));
				throw error;
			}
		};
		const onBulkRemoveAgentsMCPAccess = async (agentIds) => {
			try {
				showMcpAccessUpdatedToast((await mcpStore.toggleAgentsMcpAccess({ agentIds }, false)).updatedCount, false);
				await fetchAvailableAgents();
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.toggleMCP.error.title"));
			}
		};
		const openConnectAgentsModal = () => {
			uiStore.openModalWithData({
				name: MCP_CONNECT_AGENTS_MODAL_KEY,
				data: { onEnableMcpAccess: onBulkEnableAgentsMCPAccess }
			});
			telemetry.track(TELEMETRY_EVENT.AGENTS.USER_CLICKED_CONNECT_AGENTS_FROM_MCP_SETTINGS, {});
		};
		const onBack = () => {
			router.push({ name: MCP_SETTINGS_VIEW });
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp.agentsExposed.page.title"));
			if (!mcpStore.mcpAccessEnabled || !settingsStore.isModuleActive("agents")) {
				await router.replace({ name: MCP_SETTINGS_VIEW });
				return;
			}
			await fetchAvailableAgents();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				"full-width": "",
				"show-back": "",
				"back-label": unref(i18n).baseText("settings.mcp.back"),
				class: normalizeClass(_ctx.$style.layout),
				onBack
			}, {
				default: withCtx(() => [createVNode(unref(SettingsPageHeader_default), {
					title: unref(i18n).baseText("settings.mcp.agentsExposed.page.title"),
					description: unref(i18n).baseText("settings.mcp.agentsExposed.page.description"),
					"docs-url": unref(MCP_DOCS_PAGE_URL)
				}, null, 8, [
					"title",
					"description",
					"docs-url"
				]), createBaseVNode("div", _hoisted_1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [showConnectAgentsButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					label: unref(i18n).baseText("settings.mcp.connectAgents"),
					"data-test-id": "mcp-connect-agents-header-button",
					size: "small",
					onClick: openConnectAgentsModal
				}, null, 8, ["label"])) : createCommentVNode("", true), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.mcp.refresh.tooltip") }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						"icon-only": "",
						"data-test-id": "mcp-agents-refresh-button",
						size: "small",
						icon: "refresh-cw",
						onClick: fetchAvailableAgents
					})]),
					_: 1
				}, 8, ["content"])], 2), createVNode(AgentsTable_default, {
					"table-options": agentsTableState.value,
					"onUpdate:tableOptions": _cache[0] || (_cache[0] = ($event) => agentsTableState.value = $event),
					agents: availableAgents.value,
					"total-count": availableAgentsTotal.value,
					loading: agentsLoading.value,
					onRemoveMcpAccess: _cache[1] || (_cache[1] = (agent) => onToggleAgentMCPAccess(agent.id, false)),
					onBulkRemoveMcpAccess: onBulkRemoveAgentsMCPAccess,
					onConnectAgents: openConnectAgentsModal,
					"onUpdate:options": onAgentsTableUpdate
				}, null, 8, [
					"table-options",
					"agents",
					"total-count",
					"loading"
				])])]),
				_: 1
			}, 8, ["back-label", "class"]);
		};
	}
});
var SettingsMCPAgentsView_vue_vue_type_style_index_0_lang_module_default = {
	layout: "_layout_v7acc_126",
	actions: "_actions_v7acc_139"
};
var SettingsMCPAgentsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsMCPAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPAgentsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsMCPAgentsView_default as default };
