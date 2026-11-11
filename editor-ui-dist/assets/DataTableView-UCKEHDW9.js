import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ed as init_runtime_dom_esm_bundler, Ef as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Pd as withModifiers, Rd as computed, Vd as createCommentVNode, bp as toDisplayString, cf as onMounted, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, ns as useRouter, of as onBeforeUnmount, ts as useRoute, ui as require_debounce, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { AO as N8nText_default, BD as N8nLink_default, Ff as useDataTableStore, HO as _plugin_vue_export_helper_default, J_ as getDebounceTime, Jp as useDocumentTitle, Lf as ADD_DATA_TABLE_MODAL_KEY, Sh as useProjectsStore, Vf as DATA_TABLE_DETAILS, Xf as PROJECT_DATA_TABLES, Y_ as useDebounce, Yb as useToast, _c as useDependencies, bc as TimeAgo_default, iO as N8nCard_default, pd as ProjectCardBadge_default, ph as ResourceType, qO as useI18n, s_ as useUIStore, wh as useSourceControlStore, zO as N8nIcon_default, zb as DEBOUNCE_TIME } from "./app-MbtXRI_F.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-CeMt5MUN.js";
import { t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-arZxL-zm.js";
import { t as useProjectPages } from "./useProjectPages-mjtDH2SX.js";
import { t as promotionEventBus } from "./promotions.eventBus-DzItr_kq.js";
import { t as ProjectHeader_default } from "./ProjectHeader-BnIQLjRx.js";
import { t as DependencyPill_default } from "./DependencyPill-DZYGe6Uu.js";
import { t as useInsightsStore } from "./insights.store-CuD8kWWi.js";
import { t as InsightsSummary_default } from "./InsightsSummary-BJGB7TL1.js";
import "./src-CICjsQI4.js";
import { t as DataTableActions_default } from "./DataTableActions-LtFbJXDl.js";
//#region src/features/core/dataTable/components/DataTableCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = { "data-test-id": "data-table-card" };
var DataTableCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "DataTableCard",
	props: {
		dataTable: {},
		schemaReadOnly: {
			type: Boolean,
			default: false
		},
		showOwnershipBadge: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const i18n = useI18n();
		const dataTableStore = useDataTableStore();
		const projectsStore = useProjectsStore();
		const { hasDependencies } = useDependencies();
		const props = __props;
		const dataTableRoute = computed(() => {
			return {
				name: DATA_TABLE_DETAILS,
				params: {
					projectId: props.dataTable.projectId,
					id: props.dataTable.id
				}
			};
		});
		const getDataTableSize = computed(() => {
			return dataTableStore.dataTableSizes[props.dataTable.id] ?? 0;
		});
		const dataTableHasDependents = computed(() => hasDependencies(props.dataTable.id, "dataTable"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLink_default), {
				to: dataTableRoute.value,
				underline: false,
				class: "data-table-card",
				"data-test-id": "data-table-card-link"
			}, {
				default: withCtx(() => [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
					prepend: withCtx(() => [createVNode(unref(N8nIcon_default), {
						"data-test-id": "data-table-card-icon",
						class: normalizeClass(_ctx.$style["card-icon"]),
						icon: "table",
						size: "xlarge",
						"stroke-width": 1.5
					}, null, 8, ["class"])]),
					header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["card-header"]) }, [createVNode(unref(N8nText_default), {
						tag: "h2",
						bold: "",
						"data-test-id": "data-table-card-name"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.dataTable.name), 1)]),
						_: 1
					})], 2)]),
					footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["card-footer"]) }, [
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--size"]]),
							"data-test-id": "data-table-card-size"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.card.size", { interpolate: { size: getDataTableSize.value } })), 1)]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--column-count"]]),
							"data-test-id": "data-table-card-column-count"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.card.column.count", { interpolate: { count: props.dataTable.columns.length + 1 } })), 1)]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--updated"]]),
							"data-test-id": "data-table-card-last-updated"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " ", 1), createVNode(TimeAgo_default, { date: String(props.dataTable.updatedAt) }, null, 8, ["date"])]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--created"]]),
							"data-test-id": "data-table-card-created"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.created")) + " ", 1), createVNode(TimeAgo_default, { date: String(props.dataTable.createdAt) }, null, 8, ["date"])]),
							_: 1
						}, 8, ["class"])
					], 2)]),
					append: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style["card-actions"]),
						onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
					}, [
						dataTableHasDependents.value ? (openBlock(), createBlock(DependencyPill_default, {
							key: 0,
							"resource-type": "dataTable",
							"resource-id": props.dataTable.id,
							source: "data_table_card",
							"data-test-id": "data-table-card-dependents"
						}, null, 8, ["resource-id"])) : createCommentVNode("", true),
						props.showOwnershipBadge ? (openBlock(), createBlock(ProjectCardBadge_default, {
							key: 1,
							class: normalizeClass(_ctx.$style["card-badge"]),
							resource: __props.dataTable,
							"resource-type": unref(ResourceType).DataTable,
							"resource-type-label": "Data Table",
							"personal-project": unref(projectsStore).personalProject,
							"show-badge-border": false
						}, null, 8, [
							"class",
							"resource",
							"resource-type",
							"personal-project"
						])) : createCommentVNode("", true),
						createVNode(DataTableActions_default, {
							"data-table": props.dataTable,
							"schema-read-only": props.schemaReadOnly,
							location: "card"
						}, null, 8, ["data-table", "schema-read-only"])
					], 2)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["to"])]);
		};
	}
}), [["__cssModules", { "$style": {
	card: "_card_1i0pw_113",
	"card-icon": "_card-icon_1i0pw_121",
	"card-header": "_card-header_1i0pw_128",
	"card-footer": "_card-footer_1i0pw_136",
	"info-cell": "_info-cell_1i0pw_140",
	"card-actions": "_card-actions_1i0pw_145",
	"card-badge": "_card-badge_1i0pw_156",
	"info-cell--created": "_info-cell--created_1i0pw_164",
	"info-cell--column-count": "_info-cell--column-count_1i0pw_165",
	"info-cell--size": "_info-cell--size_1i0pw_166"
} }]]);
//#endregion
//#region src/features/core/dataTable/DataTableView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
//#endregion
//#region src/features/core/dataTable/DataTableView.vue
var DataTableView_default = /* @__PURE__ */ defineComponent({
	__name: "DataTableView",
	setup(__props) {
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const projectPages = useProjectPages();
		const { callDebounced } = useDebounce();
		const documentTitle = useDocumentTitle();
		const toast = useToast();
		const dataTableStore = useDataTableStore();
		const insightsStore = useInsightsStore();
		const projectsStore = useProjectsStore();
		const sourceControlStore = useSourceControlStore();
		const uiStore = useUIStore();
		const { fetchDependencyCounts } = useDependencies();
		const loading = ref(true);
		const currentPage = ref(1);
		const pageSize = ref(10);
		const SEARCH_DEBOUNCE_TIME = getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH);
		const PERSIST_KEY_EXCLUSIONS = ["sizeAsc", "sizeDesc"];
		const filters = ref({
			search: "",
			homeProject: ""
		});
		const dataTableResources = computed(() => dataTableStore.dataTables.map((ds) => {
			return {
				...ds,
				resourceType: "dataTable"
			};
		}));
		const totalCount = computed(() => dataTableStore.totalCount);
		const currentProject = computed(() => {
			if (projectPages.isOverviewSubPage) return projectsStore.personalProject;
			return projectsStore.currentProject;
		});
		const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
		const addDataTableDisabled = computed(() => readOnlyEnv.value || !dataTableStore.projectPermissions.dataTable.create);
		const addDataTableDisabledTooltip = computed(() => readOnlyEnv.value ? i18n.baseText("readOnlyEnv.cantAdd.any") : i18n.baseText("dataTable.empty.button.disabled.tooltip"));
		const DATA_TABLE_SORT_MAP = {
			lastUpdated: "updatedAt:desc",
			lastCreated: "createdAt:desc",
			nameAsc: "name:asc",
			nameDesc: "name:desc",
			sizeAsc: "size:asc",
			sizeDesc: "size:desc"
		};
		const currentSort = ref("updatedAt:desc");
		const delayedLoading = (0, import_debounce.default)(() => {
			loading.value = true;
		}, 300);
		const fetchDataTables = async () => {
			const projectIdFilter = projectPages.isOverviewSubPage ? "" : projectsStore.currentProjectId;
			try {
				delayedLoading();
				await dataTableStore.fetchDataTables(projectIdFilter ?? "", currentPage.value, pageSize.value, {
					name: filters.value.search === "" ? void 0 : filters.value.search,
					projectId: filters.value.homeProject === "" ? void 0 : filters.value.homeProject
				}, currentSort.value);
			} catch (error) {
				toast.showError(error, "Error loading data tables");
			} finally {
				delayedLoading.cancel();
				loading.value = false;
				const dataTableIds = dataTableStore.dataTables.map((dt) => dt.id);
				fetchDependencyCounts(dataTableIds, "dataTable");
			}
		};
		const onPaginationUpdate = async (payload) => {
			if (payload.page) currentPage.value = payload.page;
			if (payload.pageSize) pageSize.value = payload.pageSize;
			if (payload.sort) currentSort.value = DATA_TABLE_SORT_MAP[payload.sort] ?? "updatedAt:desc";
			if (!loading.value) await callDebounced(fetchDataTables, {
				debounceTime: 200,
				trailing: true
			});
		};
		const onAddModalClick = () => {
			router.push({
				name: PROJECT_DATA_TABLES,
				params: {
					projectId: currentProject.value?.id,
					new: "new"
				}
			});
		};
		const onSearchUpdated = async (search) => {
			currentPage.value = 1;
			filters.value.search = search;
			if (search) await callDebounced(fetchDataTables, {
				debounceTime: SEARCH_DEBOUNCE_TIME,
				trailing: true
			});
			else await fetchDataTables();
		};
		onMounted(() => {
			documentTitle.set(i18n.baseText("dataTable.dataTables"));
			promotionEventBus.on("applied", fetchDataTables);
		});
		onBeforeUnmount(() => {
			promotionEventBus.off("applied", fetchDataTables);
		});
		const shouldOpenCreateModal = computed(() => route.params.new === "new" && !addDataTableDisabled.value);
		watch(shouldOpenCreateModal, (open) => {
			if (open) uiStore.openModal(ADD_DATA_TABLE_MODAL_KEY);
			else uiStore.closeModal(ADD_DATA_TABLE_MODAL_KEY);
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
				ref: "layout",
				"resource-key": "dataTable",
				type: "list-paginated",
				resources: dataTableResources.value,
				initialize: fetchDataTables,
				"type-props": { itemSize: 80 },
				loading: false,
				disabled: false,
				"total-items": totalCount.value,
				"resources-refreshing": loading.value,
				"sort-options": Object.keys(DATA_TABLE_SORT_MAP),
				"dont-perform-sorting-and-filtering": true,
				"ui-config": {
					searchEnabled: true,
					showFiltersDropdown: false,
					sortEnabled: true
				},
				"tab-key": "dataTable",
				"persist-key-exclusions": PERSIST_KEY_EXCLUSIONS,
				"onUpdate:search": onSearchUpdated,
				"onUpdate:paginationAndSort": onPaginationUpdate
			}, {
				header: withCtx(() => [createVNode(ProjectHeader_default, { "main-button": "dataTable" }, {
					default: withCtx(() => [unref(projectPages).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(unref(InsightsSummary_default), {
						key: 0,
						loading: unref(insightsStore).weeklySummary.isLoading,
						summary: unref(insightsStore).weeklySummary.state,
						"time-range": "week"
					}, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
					_: 1
				})]),
				empty: withCtx(() => [createVNode(ResourcesListEmptyState_default, {
					"resource-key": "dataTable",
					"button-disabled": addDataTableDisabled.value,
					"disabled-tooltip-text": addDataTableDisabled.value ? addDataTableDisabledTooltip.value : void 0,
					"onClick:button": onAddModalClick
				}, null, 8, ["button-disabled", "disabled-tooltip-text"])]),
				item: withCtx(({ item: data }) => [createVNode(DataTableCard_default, {
					class: "mb-2xs",
					"data-table": data,
					"show-ownership-badge": unref(projectPages).isOverviewSubPage,
					"schema-read-only": readOnlyEnv.value
				}, null, 8, [
					"data-table",
					"show-ownership-badge",
					"schema-read-only"
				])]),
				_: 1
			}, 8, [
				"resources",
				"total-items",
				"resources-refreshing",
				"sort-options"
			]);
		};
	}
});
//#endregion
export { DataTableView_default as default };
