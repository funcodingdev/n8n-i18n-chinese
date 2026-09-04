import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, bt as withCtx, gt as watch, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nInlineTextEdit_default } from "./N8nInlineTextEdit-CPP1fNIO.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { yn as useSourceControlStore } from "./workflows.store-qP-dtzSs.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
import { t as N8nBreadcrumbs_default } from "./N8nBreadcrumbs-BKn8F3CR.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { ar as DATA_TABLE_VIEW, pr as PROJECT_DATA_TABLES } from "./constants-CMdL1Kzl.js";
import { i as LOADING_ANIMATION_MIN_DURATION } from "./durations-xVQWCRRO.js";
import { n as useDebounce } from "./useDebounce-BffpVo23.js";
import { n as useDocumentTitle } from "./useDocumentTitle-C48umTvY.js";
import { t as useDataTableStore } from "./dataTable.store-B9aocbop.js";
import { t as sourceControlEventBus } from "./sourceControl.eventBus-Bauy10pr.js";
import { n as telemetry } from "./telemetry-DAR7_pf7.js";
import { t as ProjectBreadcrumb_default } from "./ProjectBreadcrumb-B14vgfgc.js";
import { n as useDependencies, t as DependencyPill_default } from "./DependencyPill-D_F4E04l.js";
import { n as AddColumnButton_default, t as DataTableTable_default } from "./DataTableTable-BSwcmYoW.js";
import { t as DataTableActions_default } from "./DataTableActions-CND10AeB.js";
//#region src/features/core/dataTable/components/DataTableBreadcrumbs.vue?vue&type=script&setup=true&lang.ts
var BREADCRUMBS_SEPARATOR = "/";
var DataTableBreadcrumbs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DataTableBreadcrumbs",
	props: {
		dataTable: {},
		readOnly: { type: Boolean }
	},
	emits: ["imported"],
	setup(__props) {
		const props = __props;
		const renameInput = useTemplateRef("renameInput");
		const dataTableStore = useDataTableStore();
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		const editableName = ref(props.dataTable.name);
		const isRenameDisabled = computed(() => !dataTableStore.projectPermissions.dataTable.update || props.readOnly);
		const project = computed(() => {
			return props.dataTable.project ?? null;
		});
		const breadcrumbs = computed(() => {
			if (!project.value) return [];
			return [{
				id: "datatables",
				label: i18n.baseText("dataTable.dataTables"),
				href: `/projects/${project.value.id}/datatables`
			}];
		});
		const onItemClicked = async (item) => {
			if (item.href) await router.push(item.href);
		};
		const onDelete = async () => {
			await router.push({
				name: PROJECT_DATA_TABLES,
				params: { projectId: props.dataTable.projectId }
			});
		};
		const onRename = async () => {
			await nextTick();
			if (renameInput.value && typeof renameInput.value.forceFocus === "function") renameInput.value.forceFocus();
		};
		const onNameSubmit = async (name) => {
			try {
				if (!await dataTableStore.updateDataTable(props.dataTable.id, name, props.dataTable.projectId)) throw new Error(i18n.baseText("generic.unknownError"));
				editableName.value = name;
				telemetry.track("User renamed data table", {
					data_table_id: props.dataTable.id,
					data_table_project_id: props.dataTable.projectId
				});
			} catch (error) {
				editableName.value = props.dataTable.name;
				toast.showError(error, i18n.baseText("dataTable.rename.error"));
			}
		};
		watch(() => props.dataTable.name, (newName) => {
			editableName.value = newName;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style["data-table-breadcrumbs"]),
				"data-test-id": "data-table-breadcrumbs"
			}, [createVNode(unref(N8nBreadcrumbs_default), {
				items: breadcrumbs.value,
				separator: BREADCRUMBS_SEPARATOR,
				"highlight-last-item": false,
				onItemSelected: onItemClicked
			}, {
				prepend: withCtx(() => [project.value ? (openBlock(), createBlock(ProjectBreadcrumb_default, {
					key: 0,
					"current-project": project.value
				}, null, 8, ["current-project"])) : createCommentVNode("", true)]),
				append: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.separator) }, toDisplayString(BREADCRUMBS_SEPARATOR), 2), createVNode(unref(N8nInlineTextEdit_default), {
					ref_key: "renameInput",
					ref: renameInput,
					modelValue: editableName.value,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => editableName.value = $event), onNameSubmit],
					"data-test-id": "data-table-header-name-input",
					placeholder: unref(i18n).baseText("dataTable.add.input.name.label"),
					class: normalizeClass(_ctx.$style["breadcrumb-current"]),
					"read-only": __props.readOnly,
					disabled: isRenameDisabled.value
				}, null, 8, [
					"modelValue",
					"placeholder",
					"class",
					"read-only",
					"disabled"
				])]),
				_: 1
			}, 8, ["items"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style["data-table-actions"]) }, [createVNode(DataTableActions_default, {
				"data-table": props.dataTable,
				"is-read-only": __props.readOnly,
				location: "breadcrumbs",
				onRename,
				onOnDeleted: onDelete,
				onImported: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("imported"))
			}, null, 8, ["data-table", "is-read-only"])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/core/dataTable/components/DataTableBreadcrumbs.vue?vue&type=style&index=0&lang.module.scss
var separator = "_separator_2fkhv_398";
var shimmer$1 = "_shimmer_2fkhv_1";
var spin$1 = "_spin_2fkhv_1";
var opacityPulse$1 = "_opacityPulse_2fkhv_1";
var popoverIn$1 = "_popoverIn_2fkhv_1";
var fadeIn$1 = "_fadeIn_2fkhv_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_2fkhv_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_2fkhv_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_2fkhv_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_2fkhv_1";
var blurSwapIn$1 = "_blurSwapIn_2fkhv_1";
var blurSwapOut$1 = "_blurSwapOut_2fkhv_1";
var pulseGlow$1 = "_pulseGlow_2fkhv_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_2fkhv_1";
var fade$1 = "_fade_2fkhv_1";
var fadeInUp$1 = "_fadeInUp_2fkhv_1";
var fadeInDown$1 = "_fadeInDown_2fkhv_1";
var fadeInLeft$1 = "_fadeInLeft_2fkhv_1";
var fadeInRight$1 = "_fadeInRight_2fkhv_1";
var fadeOut$1 = "_fadeOut_2fkhv_1";
var fadeOutDown$1 = "_fadeOutDown_2fkhv_1";
var fadeOutUp$1 = "_fadeOutUp_2fkhv_1";
var fadeOutLeft$1 = "_fadeOutLeft_2fkhv_1";
var fadeOutRight$1 = "_fadeOutRight_2fkhv_1";
var ping$1 = "_ping_2fkhv_1";
var blinkBackground$1 = "_blinkBackground_2fkhv_1";
var typingBlink$1 = "_typingBlink_2fkhv_1";
var DataTableBreadcrumbs_vue_vue_type_style_index_0_lang_module_default = {
	"data-table-breadcrumbs": "_data-table-breadcrumbs_2fkhv_388",
	"data-table-actions": "_data-table-actions_2fkhv_393",
	separator,
	"breadcrumb-current": "_breadcrumb-current_2fkhv_404",
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_2fkhv_1",
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
var DataTableBreadcrumbs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DataTableBreadcrumbs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DataTableBreadcrumbs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/core/dataTable/DataTableDetailsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	"data-test-id": "data-table-details-loading"
};
var _hoisted_2 = { key: 1 };
var DataTableDetailsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DataTableDetailsView",
	props: {
		id: {},
		projectId: {}
	},
	setup(__props) {
		const props = __props;
		const toast = useToast();
		const i18n = useI18n();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const dataTableStore = useDataTableStore();
		const sourceControlStore = useSourceControlStore();
		const { fetchDependencyCounts, hasDependencies } = useDependencies();
		const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
		const dataTableHasDependents = computed(() => hasDependencies(props.id));
		const loading = ref(false);
		const saving = ref(false);
		const dataTable = ref(null);
		const dataTableTableRef = ref();
		const searchQuery = ref("");
		const { debounce } = useDebounce();
		const showErrorAndGoBackToList = async (error) => {
			if (!(error instanceof Error)) error = new Error(String(i18n.baseText("dataTable.getDetails.error")));
			toast.showError(error, i18n.baseText("dataTable.getDetails.error"));
			await router.push({
				name: DATA_TABLE_VIEW,
				params: { projectId: props.projectId }
			});
		};
		const initialize = async () => {
			loading.value = true;
			try {
				const response = await dataTableStore.fetchOrFindDataTable(props.id, props.projectId);
				if (response) {
					dataTable.value = response;
					documentTitle.set(`${i18n.baseText("dataTable.dataTables")} > ${response.name}`);
				} else await showErrorAndGoBackToList(new Error(i18n.baseText("dataTable.notFound")));
			} catch (error) {
				await showErrorAndGoBackToList(error);
			} finally {
				loading.value = false;
				fetchDependencyCounts([props.id], "dataTable");
			}
		};
		const debouncedSetSaving = debounce((value) => {
			saving.value = value;
		}, {
			debounceTime: 50,
			trailing: true
		});
		const debouncedHideSaving = debounce(() => {
			saving.value = false;
		}, {
			debounceTime: LOADING_ANIMATION_MIN_DURATION,
			trailing: true
		});
		const onToggleSave = (value) => {
			if (value) debouncedSetSaving(true);
			else debouncedHideSaving();
		};
		const onAddColumn = async (column) => {
			if (!dataTableTableRef.value) return {
				success: false,
				errorMessage: i18n.baseText("dataTable.error.tableNotInitialized")
			};
			return await dataTableTableRef.value.addColumn(column);
		};
		const onCsvImported = async () => {
			await dataTableTableRef.value?.fetchDataTableRows();
		};
		const handleSourceControlPull = async () => {
			loading.value = true;
			try {
				const response = await dataTableStore.fetchDataTableDetails(props.id, props.projectId);
				if (response) {
					dataTable.value = response;
					documentTitle.set(`${i18n.baseText("dataTable.dataTables")} > ${response.name}`);
				} else await showErrorAndGoBackToList(new Error(i18n.baseText("dataTable.notFound")));
			} catch (error) {
				toast.showError(error, i18n.baseText("dataTable.getDetails.error"));
			} finally {
				loading.value = false;
			}
		};
		watch(() => props.id, async () => {
			await initialize();
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("dataTable.dataTables"));
			await initialize();
			sourceControlEventBus.on("pull", handleSourceControlPull);
		});
		onBeforeUnmount(() => {
			sourceControlEventBus.off("pull", handleSourceControlPull);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style["data-table-details-view"]),
				"data-test-id": "data-table-details-view"
			}, [loading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
				variant: "h1",
				loading: true,
				rows: 1,
				"shrink-last": false,
				class: normalizeClass(_ctx.$style["header-loading"])
			}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
				loading: true,
				variant: "h1",
				rows: 10,
				"shrink-last": false
			})])) : dataTable.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
				createVNode(DataTableBreadcrumbs_default, {
					"data-table": dataTable.value,
					"read-only": readOnlyEnv.value,
					onImported: onCsvImported
				}, null, 8, ["data-table", "read-only"]),
				saving.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.saving)
				}, [createVNode(unref(N8nSpinner_default)), createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.saving")) + "...", 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					dataTableHasDependents.value ? (openBlock(), createBlock(DependencyPill_default, {
						key: 0,
						"resource-type": "dataTable",
						"resource-id": __props.id,
						source: "data_table_card",
						"data-test-id": "data-table-details-dependents"
					}, null, 8, ["resource-id"])) : createCommentVNode("", true),
					createVNode(unref(Input_default), {
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
						"data-test-id": "data-table-search-input",
						size: "small",
						class: normalizeClass(_ctx.$style.search),
						placeholder: unref(i18n).baseText("generic.search")
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						suffix: withCtx(() => [createVNode(unref(N8nTooltip_default), { placement: "bottom" }, {
							content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.search.dateSearchInfo")), 1)]),
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.infoIcon) }, [createVNode(unref(N8nIcon_default), {
								icon: "info",
								size: "small"
							})], 2)]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"modelValue",
						"class",
						"placeholder"
					]),
					createVNode(unref(N8nButton_default), {
						"data-test-id": "data-table-header-add-row-button",
						disabled: readOnlyEnv.value,
						onClick: dataTableTableRef.value?.addRow
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.addRow.label")), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"]),
					createVNode(AddColumnButton_default, {
						"use-text-trigger": true,
						"popover-id": "ds-details-add-column-popover",
						params: { onAddColumn },
						disabled: readOnlyEnv.value
					}, null, 8, ["params", "disabled"])
				], 2)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(DataTableTable_default, {
				ref_key: "dataTableTableRef",
				ref: dataTableTableRef,
				"data-table": dataTable.value,
				search: searchQuery.value,
				"read-only": readOnlyEnv.value,
				onToggleSave
			}, null, 8, [
				"data-table",
				"search",
				"read-only"
			])], 2)])) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/core/dataTable/DataTableDetailsView.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_2e4yl_397";
var saving = "_saving_2e4yl_412";
var actions = "_actions_2e4yl_419";
var search = "_search_2e4yl_426";
var infoIcon = "_infoIcon_2e4yl_430";
var shimmer = "_shimmer_2e4yl_1";
var spin = "_spin_2e4yl_1";
var opacityPulse = "_opacityPulse_2e4yl_1";
var popoverIn = "_popoverIn_2e4yl_1";
var fadeIn = "_fadeIn_2e4yl_1";
var collapsibleSlideDown = "_collapsibleSlideDown_2e4yl_1";
var collapsibleSlideUp = "_collapsibleSlideUp_2e4yl_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_2e4yl_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_2e4yl_1";
var blurSwapIn = "_blurSwapIn_2e4yl_1";
var blurSwapOut = "_blurSwapOut_2e4yl_1";
var pulseGlow = "_pulseGlow_2e4yl_1";
var pulseGlowDelayed = "_pulseGlowDelayed_2e4yl_1";
var fade = "_fade_2e4yl_1";
var fadeInUp = "_fadeInUp_2e4yl_1";
var fadeInDown = "_fadeInDown_2e4yl_1";
var fadeInLeft = "_fadeInLeft_2e4yl_1";
var fadeInRight = "_fadeInRight_2e4yl_1";
var fadeOut = "_fadeOut_2e4yl_1";
var fadeOutDown = "_fadeOutDown_2e4yl_1";
var fadeOutUp = "_fadeOutUp_2e4yl_1";
var fadeOutLeft = "_fadeOutLeft_2e4yl_1";
var fadeOutRight = "_fadeOutRight_2e4yl_1";
var ping = "_ping_2e4yl_1";
var blinkBackground = "_blinkBackground_2e4yl_1";
var typingBlink = "_typingBlink_2e4yl_1";
var DataTableDetailsView_vue_vue_type_style_index_0_lang_module_default = {
	"data-table-details-view": "_data-table-details-view_2e4yl_388",
	"header-loading": "_header-loading_2e4yl_397",
	header,
	saving,
	actions,
	search,
	infoIcon,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_2e4yl_1",
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
var DataTableDetailsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DataTableDetailsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DataTableDetailsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DataTableDetailsView_default as default };
