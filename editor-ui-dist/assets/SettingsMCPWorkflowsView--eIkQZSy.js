import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, dt as useModel, gt as watch, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as SettingsLayout_default } from "./SettingsLayout-DHeGpvCA.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-C2J-ZIx7.js";
import { t as N8nDataTableServer_default } from "./N8nDataTableServer-Bq1VQvhC.js";
import { va as getResourcePermissions } from "./src-C3aqUyDp.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import { mi as WORKFLOW_DESCRIPTION_MODAL_KEY } from "./constants-DPRLSskW.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { n as useDocumentTitle } from "./useDocumentTitle-GktmjxG4.js";
import { t as router } from "./router-D_gZGXDQ.js";
import { a as MCP_CONNECT_WORKFLOWS_MODAL_KEY, l as MCP_SETTINGS_VIEW, o as MCP_DOCS_PAGE_URL } from "./mcp.constants-DyvBgGQm.js";
import { t as useMCPStore } from "./mcp.store-Bn07AaYQ.js";
import { t as SelectedItemsInfo_default } from "./SelectedItemsInfo-zJKnMfvy.js";
import { t as WorkflowLocation_default } from "./WorkflowLocation-BBI8u59j.js";
//#region src/features/ai/mcpAccess/components/tabs/WorkflowsTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 0 };
var _hoisted_2 = ["onClick"];
var WorkflowsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowsTable",
	props: /* @__PURE__ */ mergeModels({
		workflows: {},
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
		"connectWorkflows",
		"updateDescription",
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
		const itemsLength = computed(() => props.totalCount ?? props.workflows.length);
		const selectedWorkflowIds = ref([]);
		watch(() => props.workflows, () => {
			selectedWorkflowIds.value = [];
		});
		const isRowSelectable = (workflow) => !!getResourcePermissions(workflow.scopes).workflow.update;
		const clearSelection = () => {
			selectedWorkflowIds.value = [];
		};
		const onBulkRemoveMcpAccess = () => {
			emit("bulkRemoveMcpAccess", selectedWorkflowIds.value);
		};
		const tableHeaders = ref([
			{
				title: i18n.baseText("settings.mcp.workflows.table.column.name"),
				key: "workflow",
				width: 150,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("settings.mcp.workflows.table.column.location"),
				key: "location",
				width: 200,
				disableSort: true,
				value() {}
			},
			{
				title: i18n.baseText("generic.description"),
				key: "description",
				width: 350,
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
		const getAvailableActions = (workflow) => {
			const permissions = getResourcePermissions(workflow.scopes);
			return [{
				label: i18n.baseText("settings.mcp.workflows.table.action.removeMCPAccess"),
				value: "removeFromMCP",
				disabled: !permissions.workflow.update
			}, {
				label: i18n.baseText("settings.mcp.workflows.table.action.updateDescription"),
				value: "updateDescription",
				disabled: !permissions.workflow.update
			}];
		};
		const onWorkflowAction = (action, workflow) => {
			switch (action) {
				case "removeFromMCP":
					emit("removeMcpAccess", workflow);
					break;
				case "updateDescription":
					emit("updateDescription", workflow);
					break;
				default: break;
			}
		};
		const onConnectClick = () => {
			emit("connectWorkflows");
		};
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
				selection: selectedWorkflowIds.value,
				"onUpdate:selection": _cache[3] || (_cache[3] = ($event) => selectedWorkflowIds.value = $event),
				class: normalizeClass(_ctx.$style["workflow-table"]),
				"data-test-id": "mcp-workflow-table",
				headers: tableHeaders.value,
				items: props.workflows,
				"items-length": itemsLength.value,
				"page-sizes": [
					10,
					25,
					50
				],
				"show-select": itemsLength.value > 0,
				"item-selectable": isRowSelectable,
				"onUpdate:options": _cache[4] || (_cache[4] = ($event) => emit("update:options", $event))
			}, createSlots({
				[`item.workflow`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["workflow-cell"]),
					"data-test-id": "mcp-workflow-cell"
				}, [createVNode(unref(N8nLink_default), {
					"data-test-id": "mcp-workflow-name-link",
					"new-window": true,
					to: unref(router).resolve({
						name: unref(VIEWS).WORKFLOW,
						params: { workflowId: item.id }
					}).fullPath,
					theme: "text",
					class: normalizeClass([_ctx.$style["table-link"], _ctx.$style.truncate])
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.truncate),
						"data-test-id": "mcp-workflow-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
						_: 2
					}, 1032, ["class"])]),
					_: 2
				}, 1032, ["to", "class"])], 2)]),
				[`item.location`]: withCtx(({ item }) => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["location-cell"]),
					"data-test-id": "mcp-workflow-location-cell"
				}, [createVNode(WorkflowLocation_default, {
					"workflow-id": item.id,
					"home-project": item.homeProject,
					"parent-folder": item.parentFolder,
					"as-links": true
				}, null, 8, [
					"workflow-id",
					"home-project",
					"parent-folder"
				])], 2)]),
				[`item.description`]: withCtx(({ item }) => [createVNode(unref(N8nTooltip_default), {
					content: item.description ? unref(i18n).baseText("settings.mcp.workflows.table.column.description.editTooltip") : unref(i18n).baseText("settings.mcp.workflows.table.column.description.emptyTooltip"),
					"show-after": unref(100),
					"as-child": ""
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						"data-test-id": "mcp-workflow-description-cell",
						class: normalizeClass(_ctx.$style["description-cell"]),
						onClick: ($event) => emit("updateDescription", item)
					}, [item.description ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style["description-text"]),
						"data-test-id": "mcp-workflow-description"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
						_: 2
					}, 1032, ["class"])) : (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style["empty-description"])
					}, [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: 14,
						color: "warning",
						class: "mr-2xs"
					}), createVNode(unref(N8nText_default), { "data-test-id": "mcp-workflow-description-empty" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.workflows.table.column.description.emptyContent")), 1)]),
						_: 1
					})], 2))], 10, _hoisted_2)]),
					_: 2
				}, 1032, ["content", "show-after"])]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(unref(N8nActionToggle_default), {
					class: normalizeClass(_ctx.$style["action-toggle"]),
					"data-test-id": "mcp-workflow-action-toggle",
					placement: "bottom",
					actions: getAvailableActions(item),
					theme: "dark",
					onAction: ($event) => onWorkflowAction($event, item)
				}, null, 8, [
					"class",
					"actions",
					"onAction"
				])]),
				_: 2
			}, [itemsLength.value === 0 ? {
				name: "cover",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["empty-state"]) }, [
					createVNode(unref(N8nText_default), {
						"data-test-id": "mcp-workflow-table-empty-state",
						size: "large",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.workflows.table.empty.title")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						"data-test-id": "mcp-workflow-table-empty-state-description",
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.mcp.workflows.table.empty.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						variant: "solid",
						"data-test-id": "mcp-workflow-table-empty-state-button",
						label: unref(i18n).baseText("settings.mcp.connectWorkflows"),
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
				"selected-count": selectedWorkflowIds.value.length,
				onClearSelection: clearSelection
			}, {
				actions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "mcp-bulk-remove-access-button",
					label: unref(i18n).baseText("settings.mcp.workflows.table.action.removeMCPAccess"),
					onClick: onBulkRemoveMcpAccess
				}, null, 8, ["label"])]),
				_: 1
			}, 8, ["class", "selected-count"])], 2))]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/tabs/WorkflowsTable.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_19c5u_388";
var truncate = "_truncate_19c5u_463";
var shimmer$1 = "_shimmer_19c5u_1";
var spin$1 = "_spin_19c5u_1";
var opacityPulse$1 = "_opacityPulse_19c5u_1";
var popoverIn$1 = "_popoverIn_19c5u_1";
var fadeIn$1 = "_fadeIn_19c5u_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_19c5u_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_19c5u_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_19c5u_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_19c5u_1";
var blurSwapIn$1 = "_blurSwapIn_19c5u_1";
var blurSwapOut$1 = "_blurSwapOut_19c5u_1";
var pulseGlow$1 = "_pulseGlow_19c5u_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_19c5u_1";
var fade$1 = "_fade_19c5u_1";
var fadeInUp$1 = "_fadeInUp_19c5u_1";
var fadeInDown$1 = "_fadeInDown_19c5u_1";
var fadeInLeft$1 = "_fadeInLeft_19c5u_1";
var fadeInRight$1 = "_fadeInRight_19c5u_1";
var fadeOut$1 = "_fadeOut_19c5u_1";
var fadeOutDown$1 = "_fadeOutDown_19c5u_1";
var fadeOutUp$1 = "_fadeOutUp_19c5u_1";
var fadeOutLeft$1 = "_fadeOutLeft_19c5u_1";
var fadeOutRight$1 = "_fadeOutRight_19c5u_1";
var ping$1 = "_ping_19c5u_1";
var blinkBackground$1 = "_blinkBackground_19c5u_1";
var typingBlink$1 = "_typingBlink_19c5u_1";
var WorkflowsTable_vue_vue_type_style_index_0_lang_module_default = {
	header,
	"table-container": "_table-container_19c5u_394",
	"selection-bar": "_selection-bar_19c5u_394",
	"workflow-table": "_workflow-table_19c5u_403",
	"empty-state": "_empty-state_19c5u_413",
	"workflow-cell": "_workflow-cell_19c5u_423",
	"location-cell": "_location-cell_19c5u_430",
	"description-cell": "_description-cell_19c5u_434",
	"description-text": "_description-text_19c5u_445",
	"empty-description": "_empty-description_19c5u_454",
	"table-link": "_table-link_19c5u_459",
	truncate,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_19c5u_1",
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
var WorkflowsTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowsTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPWorkflowsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "mcp-workflows-view" };
var SettingsMCPWorkflowsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsMCPWorkflowsView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const telemetry = useTelemetry();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const mcpStore = useMCPStore();
		const uiStore = useUIStore();
		const workflowsLoading = ref(false);
		const availableWorkflows = ref([]);
		const availableWorkflowsTotal = ref(0);
		const workflowsTableState = ref({
			page: 0,
			itemsPerPage: 10,
			sortBy: []
		});
		const workflowsTableItemsPerPage = ref(workflowsTableState.value.itemsPerPage);
		const showConnectWorkflowsButton = computed(() => availableWorkflowsTotal.value > 0);
		const showMcpAccessUpdatedToast = (count, enabled) => {
			toast.showMessage({
				type: "success",
				title: i18n.baseText(enabled ? "settings.mcp.workflows.enableAccess.success.title" : "settings.mcp.workflows.removeAccess.success.title", {
					adjustToNumber: count,
					interpolate: { count: String(count) }
				})
			});
		};
		const fetchAvailableWorkflows = async () => {
			workflowsLoading.value = true;
			try {
				const response = await mcpStore.fetchWorkflowsAvailableForMCPPage(workflowsTableState.value.page + 1, workflowsTableState.value.itemsPerPage);
				if (response.page !== workflowsTableState.value.page + 1) workflowsTableState.value = {
					...workflowsTableState.value,
					page: response.page - 1
				};
				availableWorkflows.value = response.data;
				availableWorkflowsTotal.value = response.count;
			} catch (error) {
				toast.showError(error, i18n.baseText("workflows.list.error.fetching"));
			} finally {
				setTimeout(() => {
					workflowsLoading.value = false;
				}, 200);
			}
		};
		const refreshWorkflowsFromFirstPage = async () => {
			workflowsTableState.value = {
				...workflowsTableState.value,
				page: 0
			};
			await fetchAvailableWorkflows();
		};
		const onWorkflowsTableUpdate = async (options) => {
			const pageSizeChanged = options.itemsPerPage !== workflowsTableItemsPerPage.value;
			workflowsTableState.value = {
				...options,
				page: pageSizeChanged ? 0 : options.page
			};
			workflowsTableItemsPerPage.value = options.itemsPerPage;
			await fetchAvailableWorkflows();
		};
		const onToggleWorkflowMCPAccess = async (workflowId, isEnabled) => {
			try {
				await mcpStore.toggleWorkflowMcpAccess(workflowId, isEnabled);
				if (isEnabled) await refreshWorkflowsFromFirstPage();
				else {
					showMcpAccessUpdatedToast(1, false);
					await fetchAvailableWorkflows();
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("workflowSettings.toggleMCP.error.title"));
				throw error;
			}
		};
		const onBulkEnableWorkflowsMCPAccess = async (workflowIds) => {
			try {
				showMcpAccessUpdatedToast((await mcpStore.toggleWorkflowsMcpAccess({ workflowIds }, true)).updatedCount, true);
				await refreshWorkflowsFromFirstPage();
			} catch (error) {
				toast.showError(error, i18n.baseText("workflowSettings.toggleMCP.error.title"));
				throw error;
			}
		};
		const onBulkRemoveWorkflowsMCPAccess = async (workflowIds) => {
			try {
				showMcpAccessUpdatedToast((await mcpStore.toggleWorkflowsMcpAccess({ workflowIds }, false)).updatedCount, false);
				await fetchAvailableWorkflows();
			} catch (error) {
				toast.showError(error, i18n.baseText("workflowSettings.toggleMCP.error.title"));
			}
		};
		const onUpdateDescription = (workflow) => {
			uiStore.openModalWithData({
				name: WORKFLOW_DESCRIPTION_MODAL_KEY,
				data: {
					workflowId: workflow.id,
					workflowName: workflow.name,
					workflowDescription: workflow.description ?? "",
					onSave: (updatedDescription) => {
						const index = availableWorkflows.value.findIndex((w) => w.id === workflow.id);
						if (index !== -1) availableWorkflows.value[index] = {
							...availableWorkflows.value[index],
							description: updatedDescription ?? void 0
						};
					}
				}
			});
		};
		const openConnectWorkflowsModal = () => {
			uiStore.openModalWithData({
				name: MCP_CONNECT_WORKFLOWS_MODAL_KEY,
				data: { onEnableMcpAccess: onBulkEnableWorkflowsMCPAccess }
			});
			telemetry.track("User clicked connect workflows from mcp settings");
		};
		const onBack = () => {
			router.push({ name: MCP_SETTINGS_VIEW });
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.mcp.workflowsExposed.page.title"));
			if (!mcpStore.mcpAccessEnabled) {
				await router.replace({ name: MCP_SETTINGS_VIEW });
				return;
			}
			await fetchAvailableWorkflows();
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
					title: unref(i18n).baseText("settings.mcp.workflowsExposed.page.title"),
					description: unref(i18n).baseText("settings.mcp.workflowsExposed.page.description"),
					"docs-url": unref(MCP_DOCS_PAGE_URL)
				}, null, 8, [
					"title",
					"description",
					"docs-url"
				]), createBaseVNode("div", _hoisted_1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [showConnectWorkflowsButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "solid",
					label: unref(i18n).baseText("settings.mcp.connectWorkflows"),
					"data-test-id": "mcp-connect-workflows-header-button",
					size: "small",
					onClick: openConnectWorkflowsModal
				}, null, 8, ["label"])) : createCommentVNode("", true), createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.mcp.refresh.tooltip") }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						iconOnly: "",
						"data-test-id": "mcp-workflows-refresh-button",
						size: "small",
						icon: "refresh-cw",
						onClick: fetchAvailableWorkflows
					})]),
					_: 1
				}, 8, ["content"])], 2), createVNode(WorkflowsTable_default, {
					"table-options": workflowsTableState.value,
					"onUpdate:tableOptions": _cache[0] || (_cache[0] = ($event) => workflowsTableState.value = $event),
					workflows: availableWorkflows.value,
					"total-count": availableWorkflowsTotal.value,
					loading: workflowsLoading.value,
					onRemoveMcpAccess: _cache[1] || (_cache[1] = (workflow) => onToggleWorkflowMCPAccess(workflow.id, false)),
					onBulkRemoveMcpAccess: onBulkRemoveWorkflowsMCPAccess,
					onConnectWorkflows: openConnectWorkflowsModal,
					onUpdateDescription,
					"onUpdate:options": onWorkflowsTableUpdate,
					onRefresh: fetchAvailableWorkflows
				}, null, 8, [
					"table-options",
					"workflows",
					"total-count",
					"loading"
				])])]),
				_: 1
			}, 8, ["back-label", "class"]);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/SettingsMCPWorkflowsView.vue?vue&type=style&index=0&lang.module.scss
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
var SettingsMCPWorkflowsView_vue_vue_type_style_index_0_lang_module_default = {
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
var SettingsMCPWorkflowsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsMCPWorkflowsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsMCPWorkflowsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsMCPWorkflowsView_default as default };
