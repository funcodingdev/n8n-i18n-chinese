import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, F as guardReactiveProps, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, ft as useSlots, gt as watch, it as renderSlot, j as createVNode, p as vShow, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { y as useLocalStorage } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nPagination_default } from "./N8nPagination-CqSQsgnT.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { t as N8nDatatable_default } from "./N8nDatatable-DaurMfS4.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nInfoTip_default } from "./N8nInfoTip-BB_z6D-l.js";
import { t as N8nRecycleScroller_default } from "./N8nRecycleScroller-C60eAEpe.js";
import { Fi as isResourceSortableByDate, Li as isSharedResource, Ti as isBaseTextKey } from "./workflows.store-Bo6ZgF_O.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { Ji as LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY } from "./constants-DPRLSskW.js";
import { n as useDebounce } from "./useDebounce-BffpVo23.js";
import { i as useProjectPages } from "./readyToRun.store-CQ0Vr5TN.js";
import { n as isEmptyStateResourceKey, t as ResourcesListEmptyState_default } from "./ResourcesListEmptyState-BIVNOBod.js";
import { t as PageViewLayout_default } from "./PageViewLayout-BIzriqO9.js";
import { t as ResourceFiltersDropdown_default } from "./ResourceFiltersDropdown-yR1mYzes.js";
//#region src/app/components/layouts/PageViewLayoutList.vue?vue&type=script&setup=true&lang.ts
var PageViewLayoutList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PageViewLayoutList",
	props: { overflow: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.wrapper]: true,
				[_ctx.$style.overflow]: __props.overflow
			}) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.list) }, [_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [renderSlot(_ctx.$slots, "default")], 2)], 2)], 2);
		};
	}
});
//#endregion
//#region src/app/components/layouts/PageViewLayoutList.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_ra1b4_388";
var overflow = "_overflow_ra1b4_393";
var list = "_list_ra1b4_393";
var body = "_body_ra1b4_393";
var shimmer$1 = "_shimmer_ra1b4_1";
var spin$1 = "_spin_ra1b4_1";
var opacityPulse$1 = "_opacityPulse_ra1b4_1";
var popoverIn$1 = "_popoverIn_ra1b4_1";
var fadeIn$1 = "_fadeIn_ra1b4_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_ra1b4_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_ra1b4_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_ra1b4_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_ra1b4_1";
var blurSwapIn$1 = "_blurSwapIn_ra1b4_1";
var blurSwapOut$1 = "_blurSwapOut_ra1b4_1";
var pulseGlow$1 = "_pulseGlow_ra1b4_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_ra1b4_1";
var fade$1 = "_fade_ra1b4_1";
var fadeInUp$1 = "_fadeInUp_ra1b4_1";
var fadeInDown$1 = "_fadeInDown_ra1b4_1";
var fadeInLeft$1 = "_fadeInLeft_ra1b4_1";
var fadeInRight$1 = "_fadeInRight_ra1b4_1";
var fadeOut$1 = "_fadeOut_ra1b4_1";
var fadeOutDown$1 = "_fadeOutDown_ra1b4_1";
var fadeOutUp$1 = "_fadeOutUp_ra1b4_1";
var fadeOutLeft$1 = "_fadeOutLeft_ra1b4_1";
var fadeOutRight$1 = "_fadeOutRight_ra1b4_1";
var ping$1 = "_ping_ra1b4_1";
var blinkBackground$1 = "_blinkBackground_ra1b4_1";
var typingBlink$1 = "_typingBlink_ra1b4_1";
var PageViewLayoutList_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	overflow,
	list,
	body,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_ra1b4_1",
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
var PageViewLayoutList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PageViewLayoutList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PageViewLayoutList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/composables/useN8nLocalStorage.ts
/**
* Simple n8n wrapper around vueuse's useLocalStorage.
* Provides util functions to read and write n8n values to local storage.
* Currently only used for workflow list user preferences.
*/
function useN8nLocalStorage() {
	const projectPages = useProjectPages();
	const getProjectKey = (projectId) => {
		return projectPages.isOverviewSubPage ? "home" : projectId;
	};
	const saveProjectPreferencesToLocalStorage = (projectId, tabKey, preferences) => {
		const projectKey = getProjectKey(projectId);
		if (!projectKey) return;
		const localStorage = useLocalStorage(LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY, {});
		if (!localStorage.value[projectKey]) localStorage.value[projectKey] = {};
		localStorage.value[projectKey][tabKey] = {
			...localStorage.value[projectKey][tabKey],
			...preferences
		};
	};
	const loadProjectPreferencesFromLocalStorage = (projectId, tabKey) => {
		const projectKey = getProjectKey(projectId);
		if (!projectKey) return {};
		return useLocalStorage("N8N_WORKFLOWS_LIST_PREFERENCES", {}).value[projectKey]?.[tabKey] || {};
	};
	return {
		saveProjectPreferencesToLocalStorage,
		loadProjectPreferencesFromLocalStorage,
		getProjectKey
	};
}
//#endregion
//#region src/app/composables/useResourcesListI18n.ts
/**
* Composable for handling i18n in ResourcesListLayout with dynamic resource keys
* It provides fallback functionality for translation keys
*/
function useResourcesListI18n(resourceKey) {
	const i18n = useI18n();
	/**
	* Get a translated text with fallback support for dynamic resource keys
	* First tries the specific resource key, then falls back to generic keys
	*/
	const getResourceText = (keySuffix, fallbackKeySuffix, interpolate) => {
		const specificKey = `${resourceKey}.${keySuffix}`;
		const genericKey = `resources.${keySuffix}`;
		const fallbackKey = fallbackKeySuffix ? `resources.${fallbackKeySuffix}` : void 0;
		if (isBaseTextKey(specificKey)) return i18n.baseText(specificKey, { interpolate });
		if (isBaseTextKey(genericKey)) return i18n.baseText(genericKey, { interpolate });
		if (fallbackKey && isBaseTextKey(fallbackKey)) return i18n.baseText(fallbackKey, { interpolate });
		return keySuffix.split(".").pop()?.replace(/([A-Z])/g, " $1").trim() || keySuffix;
	};
	return { getResourceText };
}
//#endregion
//#region src/app/components/layouts/ResourcesListLayout.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "resource-list-loading"
};
var _hoisted_2 = { key: 0 };
var _hoisted_3 = {
	key: 0,
	class: "mt-xs",
	"data-test-id": "resources-list-filters-applied-info"
};
var _hoisted_4 = {
	key: 0,
	class: "resource-list-loading resource-list-loading-instant"
};
var ResourcesListLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourcesListLayout",
	props: {
		resourceKey: {},
		displayName: {
			type: Function,
			default: (resource) => resource.name || ""
		},
		resources: {},
		disabled: { type: Boolean },
		initialize: {
			type: Function,
			default: async () => {}
		},
		filters: { default: () => ({
			search: "",
			homeProject: ""
		}) },
		additionalFiltersHandler: {
			type: Function,
			default: void 0
		},
		shareable: {
			type: Boolean,
			default: true
		},
		sortFns: { default: () => ({}) },
		sortOptions: { default: () => [
			"lastUpdated",
			"lastCreated",
			"nameAsc",
			"nameDesc"
		] },
		type: { default: "list-full" },
		typeProps: { default: () => ({ itemSize: 80 }) },
		loading: {
			type: Boolean,
			default: true
		},
		customPageSize: { default: 25 },
		availablePageSizeOptions: { default: () => [
			10,
			25,
			50,
			100
		] },
		totalItems: { default: 0 },
		resourcesRefreshing: {
			type: Boolean,
			default: false
		},
		dontPerformSortingAndFiltering: {
			type: Boolean,
			default: false
		},
		hasEmptyState: {
			type: Boolean,
			default: true
		},
		uiConfig: { default: () => ({
			searchEnabled: true,
			showFiltersDropdown: true,
			sortEnabled: true
		}) },
		tabKey: { default: "workflows" },
		persistKeyExclusions: { default: () => [] }
	},
	emits: [
		"update:filters",
		"click:add",
		"update:pagination-and-sort",
		"update:search"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const route = useRoute();
		const router = useRouter();
		const { callDebounced } = useDebounce();
		const telemetry = useTelemetry();
		const n8nLocalStorage = useN8nLocalStorage();
		const props = __props;
		const { getResourceText } = useResourcesListI18n(props.resourceKey);
		const sortBy = ref(props.sortOptions[0]);
		const hasFilters = ref(false);
		const currentPage = ref(1);
		const rowsPerPage = ref(props.customPageSize);
		const resettingFilters = ref(false);
		const search = ref(null);
		const listWrapperRef = ref(null);
		const listItemsRef = ref(null);
		const preferredPageSize = ref(props.customPageSize);
		const preferredSort = ref(props.sortOptions[0]);
		const emit = __emit;
		useSlots();
		const filtersModel = computed({
			get: () => props.filters,
			set: (newValue) => emit("update:filters", newValue)
		});
		const showEmptyState = computed(() => {
			return props.hasEmptyState && props.resources.length === 0 && !hasFilters.value && !filtersModel.value.search && !props.resourcesRefreshing;
		});
		const showLoadingState = computed(() => {
			return props.loading || props.resourcesRefreshing && props.resources.length === 0 && !hasFilters.value && !filtersModel.value.search;
		});
		const filterKeys = computed(() => {
			return Object.keys(filtersModel.value);
		});
		const filteredAndSortedResources = computed(() => {
			if (props.dontPerformSortingAndFiltering) return props.resources;
			return props.resources.filter((resource) => {
				let matches = true;
				if (filtersModel.value.homeProject && isSharedResource(resource)) matches = matches && !!("homeProject" in resource && resource.homeProject && resource.homeProject.id === filtersModel.value.homeProject);
				if (filtersModel.value.search) {
					const searchString = filtersModel.value.search.toLowerCase();
					matches = matches && props.displayName(resource).toLowerCase().includes(searchString);
				}
				if (props.additionalFiltersHandler) matches = props.additionalFiltersHandler(resource, filtersModel.value, matches);
				return matches;
			}).sort((a, b) => {
				const sortableByDate = isResourceSortableByDate(a) && isResourceSortableByDate(b);
				switch (sortBy.value) {
					case "lastUpdated":
						if (!sortableByDate) return 0;
						if ("updatedAt" in a && "updatedAt" in b) return props.sortFns.lastUpdated ? props.sortFns.lastUpdated(a, b) : new Date(b.updatedAt ?? "").valueOf() - new Date(a.updatedAt ?? "").valueOf();
						return 0;
					case "lastCreated":
						if (!sortableByDate) return 0;
						if ("createdAt" in a && "createdAt" in b) return props.sortFns.lastCreated ? props.sortFns.lastCreated(a, b) : new Date(b.createdAt ?? "").valueOf() - new Date(a.createdAt ?? "").valueOf();
						return 0;
					case "nameAsc": return props.sortFns.nameAsc ? props.sortFns.nameAsc(a, b) : props.displayName(a).trim().localeCompare(props.displayName(b).trim());
					case "nameDesc": return props.sortFns.nameDesc ? props.sortFns.nameDesc(a, b) : props.displayName(b).trim().localeCompare(props.displayName(a).trim());
					default: return props.sortFns[sortBy.value] ? props.sortFns[sortBy.value](a, b) : 0;
				}
			});
		});
		watch(() => props.filters, (value) => {
			filtersModel.value = value;
			if (hasAppliedFilters()) hasFilters.value = true;
		});
		watch(() => filtersModel.value.homeProject, () => {
			sendFiltersTelemetry("homeProject");
		});
		watch(() => filtersModel.value.tags, () => {
			sendFiltersTelemetry("tags");
		});
		watch(() => filtersModel.value.type, () => {
			sendFiltersTelemetry("type");
		});
		watch(() => filtersModel.value.search, () => callDebounced(sendFiltersTelemetry, {
			debounceTime: 1e3,
			trailing: true
		}, "search"));
		watch(() => filtersModel.value.setupNeeded, () => {
			sendFiltersTelemetry("setupNeeded");
		});
		watch(() => filtersModel.value.incomplete, () => {
			sendFiltersTelemetry("incomplete");
		});
		watch([() => route.params?.projectId, () => route.name], async () => {
			await resetFilters();
			await loadPaginationPreferences();
			await props.initialize();
		});
		onMounted(async () => {
			await loadPaginationPreferences();
			await props.initialize();
			await nextTick();
			if (hasAppliedFilters()) hasFilters.value = true;
			window.addEventListener("keydown", captureSearchHotKey);
		});
		onBeforeUnmount(() => {
			window.removeEventListener("keydown", captureSearchHotKey);
		});
		const captureSearchHotKey = (e) => {
			if (!props.uiConfig.searchEnabled) return;
			if ((e.ctrlKey || e.metaKey) && e.key === "f") {
				e.preventDefault();
				focusSearchInput();
			}
		};
		const focusSearchInput = () => {
			if (search.value) search.value.focus();
		};
		const isFilterApplied = (key) => {
			if (key === "search") return false;
			if (typeof props.filters[key] === "boolean") return props.filters[key];
			if (Array.isArray(props.filters[key])) return props.filters[key].length > 0;
			return props.filters[key] !== "";
		};
		const hasOnlyFiltersThatShowMoreResults = computed(() => {
			const activeFilters = filterKeys.value.filter(isFilterApplied);
			const filtersThatShowMoreResults = ["showArchived"];
			return activeFilters.every((filter) => {
				return filtersThatShowMoreResults.includes(filter);
			});
		});
		const hasAppliedFilters = () => {
			return !!filterKeys.value.find(isFilterApplied);
		};
		const setRowsPerPage = async (numberOfRowsPerPage) => {
			rowsPerPage.value = numberOfRowsPerPage;
			await savePaginationPreferences();
			emit("update:pagination-and-sort", { pageSize: numberOfRowsPerPage });
		};
		const setSorting = async (sort, persistUpdate = true) => {
			sortBy.value = sort;
			if (persistUpdate) {
				await savePaginationPreferences();
				sendSortingTelemetry();
			}
			emit("update:pagination-and-sort", { sort });
		};
		const setCurrentPage = async (page, persistUpdate = true) => {
			currentPage.value = page;
			if (persistUpdate) await savePaginationPreferences();
			emit("update:pagination-and-sort", { page });
		};
		const sendFiltersTelemetry = (source) => {
			if (resettingFilters.value) {
				if (source !== "reset") return;
				setTimeout(() => resettingFilters.value = false, 1500);
			}
			const filters = filtersModel.value;
			const filtersSet = [];
			const filterValues = [];
			Object.keys(filters).forEach((key) => {
				if (filters[key]) {
					filtersSet.push(key);
					filterValues.push(key === "search" ? null : filters[key]);
				}
			});
			telemetry.track(`User set filters in ${props.resourceKey} list`, {
				filters_set: filtersSet,
				filter_values: filterValues,
				[`${props.resourceKey}_total_in_view`]: props.resources.length,
				[`${props.resourceKey}_after_filtering`]: filteredAndSortedResources.value.length
			});
		};
		const onAddButtonClick = (e) => {
			emit("click:add", e);
		};
		const onUpdateFilters = (e) => {
			emit("update:filters", e);
		};
		const resetFilters = async () => {
			Object.keys(filtersModel.value).forEach((key) => {
				filtersModel.value[key] = Array.isArray(filtersModel.value[key]) ? [] : "";
			});
			await setCurrentPage(1, false);
			resettingFilters.value = true;
			hasFilters.value = false;
			sendFiltersTelemetry("reset");
			emit("update:filters", filtersModel.value);
		};
		const itemSize = () => {
			if ("itemSize" in props.typeProps) return props.typeProps.itemSize;
			return 0;
		};
		const getColumns = () => {
			if ("columns" in props.typeProps) return props.typeProps.columns;
			return [];
		};
		const sendSortingTelemetry = () => {
			telemetry.track(`User changed sorting in ${props.resourceKey} list`, { sorting: sortBy.value });
		};
		const onUpdateFiltersLength = (length) => {
			hasFilters.value = length > 0;
		};
		const onSearch = (s) => {
			filtersModel.value.search = s;
			emit("update:search", s);
		};
		const findNearestPageSize = (size) => {
			return props.availablePageSizeOptions.reduce((prev, curr) => Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev);
		};
		/**
		* Saves the current pagination preferences to local storage and updates the URL query parameters.
		*/
		const savePaginationPreferences = async () => {
			if (props.type !== "list-paginated") return;
			const currentQuery = { ...route.query };
			if (currentPage.value !== 1) currentQuery.page = currentPage.value.toString();
			else delete currentQuery.page;
			if (rowsPerPage.value !== preferredPageSize.value) {
				currentQuery.pageSize = rowsPerPage.value.toString();
				preferredPageSize.value = rowsPerPage.value;
			} else delete currentQuery.pageSize;
			if (sortBy.value !== preferredSort.value && !props.persistKeyExclusions.includes(sortBy.value)) {
				currentQuery.sort = sortBy.value;
				preferredSort.value = sortBy.value;
			} else delete currentQuery.sort;
			n8nLocalStorage.saveProjectPreferencesToLocalStorage(route.params.projectId ?? "", props.tabKey, {
				sort: props.persistKeyExclusions.includes(sortBy.value) ? preferredSort.value : sortBy.value,
				pageSize: rowsPerPage.value
			});
			await router.replace({ query: Object.keys(currentQuery).length ? currentQuery : void 0 });
		};
		/**
		* Loads the pagination preferences from local storage or URL query parameter
		* Current page is only saved in the URL query parameters
		* Page size and sort are saved both in local storage and URL query parameters, with query parameters taking precedence
		*/
		const loadPaginationPreferences = async () => {
			if (props.type !== "list-paginated") return;
			const query = route.query;
			const localStorageValues = n8nLocalStorage.loadProjectPreferencesFromLocalStorage(route.params.projectId ?? "", props.tabKey);
			const emitPayload = {};
			if (query.page) {
				const newPage = parseInt(query.page, 10);
				if (newPage > 1) {
					currentPage.value = newPage;
					emitPayload.page = newPage;
				}
			}
			if (query.pageSize ?? localStorageValues.pageSize) {
				const newPageSize = findNearestPageSize(parseInt(query.pageSize || String(localStorageValues.pageSize), 10));
				rowsPerPage.value = newPageSize;
				emitPayload.pageSize = newPageSize;
				preferredPageSize.value = newPageSize;
			} else {
				rowsPerPage.value = props.customPageSize;
				emitPayload.pageSize = props.customPageSize;
			}
			if (query.sort) sortBy.value = emitPayload.sort = preferredSort.value = query.sort;
			else if (localStorageValues.sort) {
				await setSorting(localStorageValues.sort, false);
				emitPayload.sort = localStorageValues.sort;
				preferredSort.value = localStorageValues.sort;
			} else sortBy.value = props.sortOptions[0];
			emit("update:pagination-and-sort", emitPayload);
		};
		const getScrollContainer = () => {
			if (props.type === "list-paginated") return listItemsRef.value ?? null;
			return listWrapperRef.value ?? null;
		};
		__expose({
			currentPage,
			setCurrentPage,
			getScrollContainer
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PageViewLayout_default, null, {
				header: withCtx(() => [renderSlot(_ctx.$slots, "header", {}, void 0, true)]),
				default: withCtx(() => [showLoadingState.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
					rows: 25,
					"shrink-last": false
				})])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [showEmptyState.value ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "empty", {}, () => [unref(isEmptyStateResourceKey)(props.resourceKey) ? (openBlock(), createBlock(ResourcesListEmptyState_default, {
					key: 0,
					"resource-key": props.resourceKey,
					"button-disabled": __props.disabled,
					"onClick:button": onAddButtonClick
				}, null, 8, ["resource-key", "button-disabled"])) : createCommentVNode("", true)], true)])) : (openBlock(), createBlock(PageViewLayoutList_default, { key: 1 }, {
					header: withCtx(() => [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style["filters-row"]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.filters) }, [
							renderSlot(_ctx.$slots, "breadcrumbs", {}, void 0, true),
							props.uiConfig.searchEnabled ? (openBlock(), createBlock(unref(Input_default), {
								key: 0,
								ref_key: "search",
								ref: search,
								"model-value": filtersModel.value.search,
								class: normalizeClass(_ctx.$style.search),
								placeholder: unref(getResourceText)("search.placeholder", "search.placeholder"),
								size: "medium",
								clearable: "",
								"data-test-id": "resources-list-search",
								"onUpdate:modelValue": onSearch
							}, {
								prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
								_: 1
							}, 8, [
								"model-value",
								"class",
								"placeholder"
							])) : createCommentVNode("", true),
							props.uiConfig.sortEnabled ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style["sort-and-filter"])
							}, [createVNode(unref(N8nSelect_default), {
								modelValue: sortBy.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sortBy.value = $event),
								size: "small",
								class: normalizeClass(_ctx.$style.resourceList),
								"data-test-id": "resources-list-sort",
								onChange: _cache[1] || (_cache[1] = ($event) => setSorting(sortBy.value))
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.sortOptions, (sortOption) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: sortOption,
										"data-test-id": "resources-list-sort-item",
										value: sortOption,
										label: unref(getResourceText)(`sort.${sortOption}`, `sort.${sortOption}`)
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, ["modelValue", "class"])], 2)) : createCommentVNode("", true),
							props.uiConfig.showFiltersDropdown ? (openBlock(), createElementBlock("div", {
								key: 2,
								class: normalizeClass(_ctx.$style["sort-and-filter"])
							}, [createVNode(ResourceFiltersDropdown_default, {
								keys: filterKeys.value,
								reset: resetFilters,
								"model-value": filtersModel.value,
								shareable: __props.shareable,
								"just-icon": true,
								"onUpdate:modelValue": onUpdateFilters,
								"onUpdate:filtersLength": onUpdateFiltersLength
							}, {
								default: withCtx((resourceFiltersSlotProps) => [renderSlot(_ctx.$slots, "filters", normalizeProps(guardReactiveProps(resourceFiltersSlotProps)), void 0, true)]),
								_: 3
							}, 8, [
								"keys",
								"model-value",
								"shareable"
							]), renderSlot(_ctx.$slots, "add-button", {}, void 0, true)], 2)) : createCommentVNode("", true)
						], 2)], 2),
						renderSlot(_ctx.$slots, "callout", {}, void 0, true),
						props.uiConfig.showFiltersDropdown ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nInfoTip_default), { bold: false }, {
							default: withCtx(() => [createTextVNode(toDisplayString(hasOnlyFiltersThatShowMoreResults.value ? unref(getResourceText)("filters.active.shortText", "filters.active.shortText") : unref(getResourceText)("filters.active", "filters.active")) + " ", 1), createVNode(unref(N8nLink_default), {
								"data-test-id": "workflows-filter-reset",
								size: "small",
								onClick: resetFilters
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(getResourceText)("filters.active.reset", "filters.active.reset")), 1)]),
								_: 1
							})]),
							_: 1
						})], 512)), [[vShow, hasFilters.value]]) : createCommentVNode("", true),
						_cache[2] || (_cache[2] = createBaseVNode("div", { class: "pb-xs" }, null, -1))
					]),
					default: withCtx(() => [
						renderSlot(_ctx.$slots, "preamble", {}, void 0, true),
						__props.resourcesRefreshing ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(N8nLoading_default), {
							rows: rowsPerPage.value,
							"shrink-last": false
						}, null, 8, ["rows"])])) : filteredAndSortedResources.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							ref_key: "listWrapperRef",
							ref: listWrapperRef,
							"data-test-id": "resources-list-wrapper",
							class: normalizeClass(_ctx.$style.listWrapper)
						}, [__props.type === "list-full" ? (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
							key: 0,
							"data-test-id": "resources-list",
							items: filteredAndSortedResources.value,
							"item-size": itemSize(),
							"item-key": "id"
						}, {
							default: withCtx(({ item, updateItemSize }) => [renderSlot(_ctx.$slots, "default", {
								data: item,
								updateItemSize
							}, void 0, true)]),
							_: 3
						}, 8, ["items", "item-size"])) : __props.type === "list-paginated" ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.paginatedListWrapper),
							"data-test-id": "paginated-list"
						}, [createBaseVNode("div", {
							ref_key: "listItemsRef",
							ref: listItemsRef,
							class: normalizeClass(_ctx.$style.listItems)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.resources, (item, index) => {
							return openBlock(), createElementBlock("div", {
								key: index,
								class: normalizeClass(_ctx.$style.listItem)
							}, [renderSlot(_ctx.$slots, "item", {
								item,
								index
							}, () => [createTextVNode(toDisplayString(item), 1)], true)], 2);
						}), 128))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.listPagination) }, [createVNode(unref(N8nPagination_default), {
							page: currentPage.value,
							"items-per-page": rowsPerPage.value,
							total: __props.totalItems,
							"page-sizes": __props.availablePageSizeOptions,
							"data-test-id": "resources-list-pagination",
							"onUpdate:page": setCurrentPage,
							"onUpdate:itemsPerPage": setRowsPerPage
						}, null, 8, [
							"page",
							"items-per-page",
							"total",
							"page-sizes"
						])], 2)], 2)) : createCommentVNode("", true), __props.type === "datatable" ? (openBlock(), createBlock(unref(N8nDatatable_default), {
							key: 2,
							"data-test-id": "resources-table",
							class: normalizeClass(_ctx.$style.datatable),
							columns: getColumns(),
							rows: filteredAndSortedResources.value,
							"current-page": currentPage.value,
							"rows-per-page": rowsPerPage.value,
							"onUpdate:currentPage": setCurrentPage,
							"onUpdate:rowsPerPage": setRowsPerPage
						}, {
							row: withCtx(({ columns, row }) => [renderSlot(_ctx.$slots, "default", {
								data: row,
								columns
							}, void 0, true)]),
							postdata: withCtx(() => [renderSlot(_ctx.$slots, "postdata", {}, void 0, true)]),
							_: 3
						}, 8, [
							"class",
							"columns",
							"rows",
							"current-page",
							"rows-per-page"
						])) : createCommentVNode("", true)], 2)) : hasAppliedFilters() || filtersModel.value.search !== "" ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							color: "text-base",
							size: "medium",
							"data-test-id": "resources-list-empty"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(getResourceText)("noResults", "noResults")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						renderSlot(_ctx.$slots, "postamble", {}, void 0, true)
					]),
					_: 3
				}))], 64))]),
				_: 3
			});
		};
	}
});
//#endregion
//#region src/app/components/layouts/ResourcesListLayout.vue?vue&type=style&index=0&lang.module.scss
var filters = "_filters_wvf7a_388";
var search = "_search_wvf7a_424";
var listWrapper = "_listWrapper_wvf7a_434";
var paginatedListWrapper = "_paginatedListWrapper_wvf7a_440";
var listItems = "_listItems_wvf7a_448";
var listPagination = "_listPagination_wvf7a_452";
var datatable = "_datatable_wvf7a_467";
var shimmer = "_shimmer_wvf7a_1";
var spin = "_spin_wvf7a_1";
var opacityPulse = "_opacityPulse_wvf7a_1";
var popoverIn = "_popoverIn_wvf7a_1";
var fadeIn = "_fadeIn_wvf7a_1";
var collapsibleSlideDown = "_collapsibleSlideDown_wvf7a_1";
var collapsibleSlideUp = "_collapsibleSlideUp_wvf7a_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_wvf7a_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_wvf7a_1";
var blurSwapIn = "_blurSwapIn_wvf7a_1";
var blurSwapOut = "_blurSwapOut_wvf7a_1";
var pulseGlow = "_pulseGlow_wvf7a_1";
var pulseGlowDelayed = "_pulseGlowDelayed_wvf7a_1";
var fade = "_fade_wvf7a_1";
var fadeInUp = "_fadeInUp_wvf7a_1";
var fadeInDown = "_fadeInDown_wvf7a_1";
var fadeInLeft = "_fadeInLeft_wvf7a_1";
var fadeInRight = "_fadeInRight_wvf7a_1";
var fadeOut = "_fadeOut_wvf7a_1";
var fadeOutDown = "_fadeOutDown_wvf7a_1";
var fadeOutUp = "_fadeOutUp_wvf7a_1";
var fadeOutLeft = "_fadeOutLeft_wvf7a_1";
var fadeOutRight = "_fadeOutRight_wvf7a_1";
var ping = "_ping_wvf7a_1";
var blinkBackground = "_blinkBackground_wvf7a_1";
var typingBlink = "_typingBlink_wvf7a_1";
var ResourcesListLayout_vue_vue_type_style_index_0_lang_module_default = {
	"filters-row": "_filters-row_wvf7a_388",
	filters,
	"sort-and-filter": "_sort-and-filter_wvf7a_406",
	search,
	listWrapper,
	paginatedListWrapper,
	listItems,
	listPagination,
	datatable,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_wvf7a_1",
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
var ResourcesListLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResourcesListLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourcesListLayout_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-725154ed"]]);
//#endregion
export { ResourcesListLayout_default as t };
