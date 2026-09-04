import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { pn as ResourceType, vn as useProjectsStore, yn as useSourceControlStore } from "./workflows.store-qP-dtzSs.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { $n as ADD_DATA_TABLE_MODAL_KEY, pr as PROJECT_DATA_TABLES, rr as DATA_TABLE_DETAILS } from "./constants-CMdL1Kzl.js";
import { t as DEBOUNCE_TIME } from "./durations-xVQWCRRO.js";
import { n as useDebounce, r as require_debounce, t as getDebounceTime } from "./useDebounce-BffpVo23.js";
import { n as useUIStore } from "./ui.store-xzfQIfPK.js";
import { n as useDocumentTitle } from "./useDocumentTitle-C48umTvY.js";
import { t as useDataTableStore } from "./dataTable.store-B9aocbop.js";
import { t as ProjectCardBadge_default } from "./ProjectCardBadge-BCpomwUO.js";
import { t as TimeAgo_default } from "./TimeAgo-Cy63DsBn.js";
import { i as useProjectPages } from "./readyToRun.store-BjW1hyJA.js";
import { t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-Ci5qEhs7.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-1a_FMdK8.js";
import { t as ProjectHeader_default } from "./ProjectHeader-CObcN8Yo.js";
import { n as useDependencies, t as DependencyPill_default } from "./DependencyPill-D_F4E04l.js";
import { t as useInsightsStore } from "./insights.store-Dav_RGlI.js";
import { t as InsightsSummary_default } from "./InsightsSummary-VpZm9BYD.js";
import "./insights-CovcRVjB.js";
import { t as DataTableActions_default } from "./DataTableActions-CND10AeB.js";
//#region src/features/core/dataTable/components/DataTableCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "data-table-card" };
var DataTableCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DataTableCard",
	props: {
		dataTable: {},
		readOnly: {
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
		const dataTableHasDependents = computed(() => hasDependencies(props.dataTable.id));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLink_default), {
				to: dataTableRoute.value,
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
					}), props.readOnly ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: "ml-3xs",
						theme: "tertiary",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.readonly")), 1)]),
						_: 1
					})) : createCommentVNode("", true)], 2)]),
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
							"is-read-only": props.readOnly,
							location: "card"
						}, null, 8, ["data-table", "is-read-only"])
					], 2)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["to"])]);
		};
	}
});
//#endregion
//#region src/features/core/dataTable/components/DataTableCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_j6w3b_388";
var shimmer = "_shimmer_j6w3b_1";
var spin = "_spin_j6w3b_1";
var opacityPulse = "_opacityPulse_j6w3b_1";
var popoverIn = "_popoverIn_j6w3b_1";
var fadeIn = "_fadeIn_j6w3b_1";
var collapsibleSlideDown = "_collapsibleSlideDown_j6w3b_1";
var collapsibleSlideUp = "_collapsibleSlideUp_j6w3b_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_j6w3b_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_j6w3b_1";
var blurSwapIn = "_blurSwapIn_j6w3b_1";
var blurSwapOut = "_blurSwapOut_j6w3b_1";
var pulseGlow = "_pulseGlow_j6w3b_1";
var pulseGlowDelayed = "_pulseGlowDelayed_j6w3b_1";
var fade = "_fade_j6w3b_1";
var fadeInUp = "_fadeInUp_j6w3b_1";
var fadeInDown = "_fadeInDown_j6w3b_1";
var fadeInLeft = "_fadeInLeft_j6w3b_1";
var fadeInRight = "_fadeInRight_j6w3b_1";
var fadeOut = "_fadeOut_j6w3b_1";
var fadeOutDown = "_fadeOutDown_j6w3b_1";
var fadeOutUp = "_fadeOutUp_j6w3b_1";
var fadeOutLeft = "_fadeOutLeft_j6w3b_1";
var fadeOutRight = "_fadeOutRight_j6w3b_1";
var ping = "_ping_j6w3b_1";
var blinkBackground = "_blinkBackground_j6w3b_1";
var typingBlink = "_typingBlink_j6w3b_1";
var DataTableCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	"card-icon": "_card-icon_j6w3b_396",
	"card-header": "_card-header_j6w3b_403",
	"card-footer": "_card-footer_j6w3b_411",
	"info-cell": "_info-cell_j6w3b_415",
	"card-actions": "_card-actions_j6w3b_420",
	"card-badge": "_card-badge_j6w3b_431",
	"info-cell--created": "_info-cell--created_j6w3b_439",
	"info-cell--column-count": "_info-cell--column-count_j6w3b_440",
	"info-cell--size": "_info-cell--size_j6w3b_441",
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_j6w3b_1",
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
var DataTableCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DataTableCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DataTableCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/core/dataTable/DataTableView.vue?vue&type=script&setup=true&lang.ts
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
				fetchDependencyCounts(dataTableStore.dataTables.map((dt) => dt.id), "dataTable");
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
		});
		watch(() => route.params.new, () => {
			if (route.params.new === "new") uiStore.openModal(ADD_DATA_TABLE_MODAL_KEY);
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
					"read-only": readOnlyEnv.value
				}, null, 8, [
					"data-table",
					"show-ownership-badge",
					"read-only"
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
