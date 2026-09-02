import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, dt as useModel, gt as watch, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as SettingsLayout_default } from "./SettingsLayout-DHeGpvCA.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-C2J-ZIx7.js";
import { t as N8nDataTableServer_default } from "./N8nDataTableServer-CQSFfSXf.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { Pr as PROJECT_AGENTS, kr as AGENT_VIEW } from "./constants-DxozP3cY.js";
import { a as TELEMETRY_EVENT } from "./src-iAlvhgF-.js";
import { n as useUIStore } from "./ui.store-Bnte4owf.js";
import { n as useDocumentTitle } from "./useDocumentTitle-DIC12kgr.js";
import { t as router } from "./router-CV0B_luQ.js";
import { i as MCP_CONNECT_AGENTS_MODAL_KEY, l as MCP_SETTINGS_VIEW, o as MCP_DOCS_PAGE_URL } from "./mcp.constants-DyvBgGQm.js";
import { t as useMCPStore } from "./mcp.store-B52pSxBk.js";
import { t as SelectedItemsInfo_default } from "./SelectedItemsInfo-DKO9OyZy.js";
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
var truncate = "_truncate_whete_435";
var shimmer$1 = "_shimmer_whete_1";
var spin$1 = "_spin_whete_1";
var opacityPulse$1 = "_opacityPulse_whete_1";
var popoverIn$1 = "_popoverIn_whete_1";
var fadeIn$1 = "_fadeIn_whete_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_whete_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_whete_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_whete_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_whete_1";
var blurSwapIn$1 = "_blurSwapIn_whete_1";
var blurSwapOut$1 = "_blurSwapOut_whete_1";
var pulseGlow$1 = "_pulseGlow_whete_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_whete_1";
var fade$1 = "_fade_whete_1";
var fadeInUp$1 = "_fadeInUp_whete_1";
var fadeInDown$1 = "_fadeInDown_whete_1";
var fadeInLeft$1 = "_fadeInLeft_whete_1";
var fadeInRight$1 = "_fadeInRight_whete_1";
var fadeOut$1 = "_fadeOut_whete_1";
var fadeOutDown$1 = "_fadeOutDown_whete_1";
var fadeOutUp$1 = "_fadeOutUp_whete_1";
var fadeOutLeft$1 = "_fadeOutLeft_whete_1";
var fadeOutRight$1 = "_fadeOutRight_whete_1";
var ping$1 = "_ping_whete_1";
var blinkBackground$1 = "_blinkBackground_whete_1";
var typingBlink$1 = "_typingBlink_whete_1";
var AgentsTable_vue_vue_type_style_index_0_lang_module_default = {
	"table-container": "_table-container_whete_388",
	"selection-bar": "_selection-bar_whete_388",
	"agent-table": "_agent-table_whete_397",
	"empty-state": "_empty-state_whete_407",
	"agent-cell": "_agent-cell_whete_417",
	"location-cell": "_location-cell_whete_424",
	"table-link": "_table-link_whete_431",
	truncate,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_whete_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
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
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPAgentsView.vue?vue&type=style&index=0&lang.module.scss
var layout = "_layout_125b0_389";
var actions = "_actions_125b0_402";
var shimmer = "_shimmer_125b0_1";
var spin = "_spin_125b0_1";
var opacityPulse = "_opacityPulse_125b0_1";
var popoverIn = "_popoverIn_125b0_1";
var fadeIn = "_fadeIn_125b0_1";
var collapsibleSlideDown = "_collapsibleSlideDown_125b0_1";
var collapsibleSlideUp = "_collapsibleSlideUp_125b0_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_125b0_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_125b0_1";
var blurSwapIn = "_blurSwapIn_125b0_1";
var blurSwapOut = "_blurSwapOut_125b0_1";
var pulseGlow = "_pulseGlow_125b0_1";
var pulseGlowDelayed = "_pulseGlowDelayed_125b0_1";
var fade = "_fade_125b0_1";
var fadeInUp = "_fadeInUp_125b0_1";
var fadeInDown = "_fadeInDown_125b0_1";
var fadeInLeft = "_fadeInLeft_125b0_1";
var fadeInRight = "_fadeInRight_125b0_1";
var fadeOut = "_fadeOut_125b0_1";
var fadeOutDown = "_fadeOutDown_125b0_1";
var fadeOutUp = "_fadeOutUp_125b0_1";
var fadeOutLeft = "_fadeOutLeft_125b0_1";
var fadeOutRight = "_fadeOutRight_125b0_1";
var ping = "_ping_125b0_1";
var blinkBackground = "_blinkBackground_125b0_1";
var typingBlink = "_typingBlink_125b0_1";
var SettingsMCPAgentsView_vue_vue_type_style_index_0_lang_module_default = {
	layout,
	actions,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_125b0_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var SettingsMCPAgentsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsMCPAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPAgentsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsMCPAgentsView_default as default };
