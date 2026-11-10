import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Nu as useAsyncState, Rd as computed, Vd as createCommentVNode, bf as useModel, bp as toDisplayString, df as openBlock, hp as normalizeClass, if as nextTick, jf as init_reactivity_esm_bundler, k as require_orderBy, md as useDebounceFn, nf as mergeModels, np as init_shared_esm_bundler, ns as useRouter, pf as renderList, rf as mergeProps, ts as useRoute, wf as watch, xd as I18nT, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { AO as N8nTooltip_default, BD as Checkbox_default, BO as _plugin_vue_export_helper_default, CE as DialogTitle_default, CO as N8nBadge_default, Eh as useRBACStore, FO as N8nIconButton_default, GO as useI18n, Gn as getWorkflowOwnerCandidates, ID as N8nSelect_default, IO as N8nButton_default, J_ as getDebounceTime, Jb as useToast, Jn as unassignWorkflowOwner, Jp as useDocumentTitle, Kn as notifyFindingOwners, LD as N8nOption_default, LO as N8nIcon_default, Lb as TIME, OD as N8nInfoTip_default, OE as N8nDataTableServer_default, OO as N8nText_default, PO as Input_default, Pp as useWorkflowsStore, QE as N8nStatusDot_default, RD as N8nLink_default, Rb as DEBOUNCE_TIME, SE as Dialog_default, SO as N8nLoading_default, Vn as assignWorkflowOwner, Wn as getReportForRule, Xn as updateFindingStatuses, YD as Select_default, Yb as VIEWS, Yn as updateFindingStatus, _D as N8nSelectedItemsInfo_default, bE as DialogBody_default, bc as TimeAgo_default, dy as MIGRATE_WORKFLOW_MODAL_KEY, eO as createEventBus, ex as useUsersStore, gD as SettingsLayout_default, gO as N8nActionToggle_default, hD as SettingsPageHeader_default, iD as N8nSegmentControl_default, jE as N8nUserSelect_default, md as ProjectIcon_default, nx as useRootStore, oO as N8nCallout_default, sD as N8nPopover_default, s_ as useUIStore, tx as useSettingsStore, wE as DialogHeader_default, yE as DialogFooter_default } from "./app-DGoK9ugD.js";
import { r as TARGET_VERSION_DISPLAY, t as ImpactTag_default } from "./ImpactTag-BbnkxbZH.js";
//#region src/features/settings/migrationReport/components/FindingStateSelect.vue?vue&type=script&setup=true&lang.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var FindingStateSelect_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "FindingStateSelect",
	__name: "FindingStateSelect",
	props: {
		modelValue: {},
		disabled: { type: Boolean }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const stateOptions = computed(() => [
			{
				value: "open",
				label: i18n.baseText("settings.migrationReport.detail.state.open"),
				description: i18n.baseText("settings.migrationReport.detail.state.open.description")
			},
			...props.modelValue === "notified" ? [{
				value: "notified",
				label: i18n.baseText("settings.migrationReport.detail.state.notified"),
				description: i18n.baseText("settings.migrationReport.detail.state.notified.description"),
				disabled: true
			}] : [],
			...props.modelValue === "fixed_unpublished" ? [{
				value: "fixed_unpublished",
				label: i18n.baseText("settings.migrationReport.detail.state.fixedUnpublished"),
				description: i18n.baseText("settings.migrationReport.detail.state.fixedUnpublished.description"),
				disabled: true
			}] : [],
			{
				value: "wont_fix",
				label: i18n.baseText("settings.migrationReport.detail.state.wontFix"),
				description: i18n.baseText("settings.migrationReport.detail.state.wontFix.description")
			}
		]);
		function findOption(value) {
			return stateOptions.value.find((option) => option.value === value);
		}
		function onSelect(value) {
			const option = findOption(value);
			if (option && (option.value === "open" || option.value === "wont_fix")) emit("update:modelValue", option.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Select_default), {
				items: stateOptions.value,
				"model-value": __props.modelValue,
				disabled: __props.disabled ?? false,
				size: "small",
				"aria-label": unref(i18n).baseText("settings.migrationReport.detail.table.state"),
				"data-test-id": "migration-finding-state-select",
				"onUpdate:modelValue": onSelect
			}, {
				"item-label": withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.itemStack) }, [createVNode(unref(N8nText_default), {
					tag: "span",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
					_: 2
				}, 1024), createVNode(unref(N8nText_default), {
					tag: "span",
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(findOption(item.value)?.description), 1)]),
					_: 2
				}, 1024)], 2)]),
				_: 1
			}, 8, [
				"items",
				"model-value",
				"disabled",
				"aria-label"
			]);
		};
	}
}), [["__cssModules", { "$style": { itemStack: "_itemStack_16fpv_1" } }]]);
//#endregion
//#region src/features/settings/migrationReport/components/HowToFixPanel.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var HowToFixPanel_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "HowToFixPanel",
	__name: "HowToFixPanel",
	props: {
		recommendations: {},
		documentationUrl: {},
		migratable: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const fallbackDocumentationUrl = computed(() => props.documentationUrl ?? "https://docs.n8n.io/changelog/v30-breaking-changes");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				theme: "info",
				icon: "lightbulb",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "migration-rule-how-to-fix"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
					createVNode(unref(N8nText_default), {
						tag: "h3",
						size: "small",
						bold: "",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.howToFix.title")), 1)]),
						_: 1
					}),
					__props.recommendations.length ? (openBlock(), createElementBlock("ul", {
						key: 0,
						class: normalizeClass(_ctx.$style.list)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.recommendations, (rec, index) => {
						return openBlock(), createElementBlock("li", {
							key: index,
							class: normalizeClass(_ctx.$style.item)
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							bold: "",
							color: "text-dark"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(rec.action), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(rec.description), 1)]),
							_: 2
						}, 1024)], 2);
					}), 128))], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "settings.migrationReport.detail.howToFix.fallback",
							tag: "span",
							scope: "global"
						}, {
							link: withCtx(() => [createVNode(unref(N8nLink_default), {
								theme: "text",
								href: fallbackDocumentationUrl.value,
								target: "_blank",
								rel: "noopener noreferrer",
								"data-test-id": "migration-rule-how-to-fix-docs-link"
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.underlinedText) }, toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.howToFix.fallback.link")), 3)]),
								_: 1
							}, 8, ["href"])]),
							_: 1
						})]),
						_: 1
					})),
					__props.migratable ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						size: "small",
						color: "text-base",
						"data-test-id": "migration-rule-how-to-fix-migratable"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.howToFix.migratable")), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	callout: "_callout_1gzib_1",
	body: "_body_1gzib_5",
	list: "_list_1gzib_11",
	item: "_item_1gzib_18",
	underlinedText: "_underlinedText_1gzib_23"
} }]]);
//#endregion
//#region src/features/settings/migrationReport/workflowFilters.ts
var DEFAULT_WORKFLOW_FILTERS = {
	lastRun: "any",
	lastUpdated: "any",
	executions: "any",
	published: "any",
	owner: "any",
	project: "any",
	state: "any",
	showArchived: false
};
var UNASSIGNED_OWNER = "unassigned";
var PERSONAL_PROJECTS = "personal";
/** The number of filters that differ from the default. */
function countActiveFilters(filters) {
	return Object.keys(DEFAULT_WORKFLOW_FILTERS).filter((key) => filters[key] !== DEFAULT_WORKFLOW_FILTERS[key]).length;
}
function matchesAge(date, filter, now) {
	if (filter === "any") return true;
	if (!date) return false;
	const age = now - new Date(date).getTime();
	if (filter === "under30Days") return age < 30 * TIME.DAY;
	if (filter === "under6Months") return age < 182 * TIME.DAY;
	return age > 365 * TIME.DAY;
}
function matchesExecutions(count, filter) {
	if (filter === "none") return count === 0;
	if (filter === "under100") return count < 100;
	if (filter === "over1000") return count > 1e3;
	return true;
}
function matchesOwner(workflow, filter) {
	if (filter === "any") return true;
	if (filter === "unassigned") return !workflow.owner;
	return workflow.owner?.id === filter;
}
function matchesProject(workflow, filter) {
	if (filter === "any") return true;
	if (filter === "personal") return workflow.homeProjectType === "personal";
	return workflow.homeProjectId === filter;
}
/**
* A notified finding still needs a fix, and so does a fix that is not published,
* so both count as open.
*/
function isUnresolvedState(state) {
	return state === "open" || state === "notified" || state === "fixed_unpublished";
}
function matchesState(state, filter) {
	if (filter === "any") return true;
	return filter === "open" ? isUnresolvedState(state) : state === filter;
}
/**
* `state` is the state that the page shows. A migrated row shows as `migrated`,
* so it matches no state filter.
*/
function matchesWorkflowFilters(workflow, filters, now = Date.now(), state = workflow.status) {
	return matchesState(state, filters.state) && matchesAge(workflow.lastExecutedAt, filters.lastRun, now) && matchesAge(workflow.lastUpdatedAt, filters.lastUpdated, now) && matchesExecutions(workflow.numberOfExecutions, filters.executions) && (filters.published === "any" || workflow.active === (filters.published === "published")) && matchesOwner(workflow, filters.owner) && matchesProject(workflow, filters.project) && (filters.showArchived || !workflow.isArchived);
}
//#endregion
//#region src/features/settings/migrationReport/components/WorkflowFiltersPopover.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var WorkflowFiltersPopover_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WorkflowFiltersPopover",
	props: /*@__PURE__*/ mergeModels({
		owners: {},
		projects: {},
		currentUserId: {},
		counts: {}
	}, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const filters = useModel(__props, "modelValue");
		const i18n = useI18n();
		const open = ref(false);
		const activeCount = computed(() => countActiveFilters(filters.value));
		function setFilter(key, value) {
			filters.value = {
				...filters.value,
				[key]: value
			};
		}
		function toggleFilter(key, value) {
			setFilter(key, filters.value[key] === value ? DEFAULT_WORKFLOW_FILTERS[key] : value);
		}
		function quickFilterLabel(key, count) {
			return i18n.baseText(key, { interpolate: { count: String(count) } });
		}
		const anyLabel = computed(() => i18n.baseText("settings.migrationReport.detail.filters.any"));
		const ageOptions = computed(() => [
			{
				value: "any",
				label: anyLabel.value
			},
			{
				value: "under30Days",
				label: i18n.baseText("settings.migrationReport.detail.filters.age.under30Days")
			},
			{
				value: "under6Months",
				label: i18n.baseText("settings.migrationReport.detail.filters.age.under6Months")
			},
			{
				value: "over12Months",
				label: i18n.baseText("settings.migrationReport.detail.filters.age.over12Months")
			}
		]);
		const executionsOptions = computed(() => [
			{
				value: "any",
				label: anyLabel.value
			},
			{
				value: "none",
				label: i18n.baseText("settings.migrationReport.detail.filters.executions.none")
			},
			{
				value: "under100",
				label: i18n.baseText("settings.migrationReport.detail.filters.executions.under100")
			},
			{
				value: "over1000",
				label: i18n.baseText("settings.migrationReport.detail.filters.executions.over1000")
			}
		]);
		const stateOptions = computed(() => [
			{
				value: "any",
				label: anyLabel.value
			},
			{
				value: "open",
				label: i18n.baseText("settings.migrationReport.detail.state.open")
			},
			{
				value: "wont_fix",
				label: i18n.baseText("settings.migrationReport.detail.state.wontFix")
			}
		]);
		const publishedOptions = computed(() => [
			{
				value: "any",
				label: anyLabel.value
			},
			{
				value: "published",
				label: i18n.baseText("settings.migrationReport.detail.table.published")
			},
			{
				value: "notPublished",
				label: i18n.baseText("settings.migrationReport.detail.table.notPublished")
			}
		]);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: open.value,
				"onUpdate:open": _cache[14] || (_cache[14] = ($event) => open.value = $event),
				width: "420px",
				"max-height": "var(--reka-popover-content-available-height)",
				align: "end"
			}, {
				trigger: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.trigger) }, [createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("settings.migrationReport.detail.filters.button") }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						icon: "funnel",
						"icon-only": activeCount.value === 0,
						"aria-label": unref(i18n).baseText("settings.migrationReport.detail.filters.button"),
						"data-test-id": "migration-rule-filters"
					}, {
						default: withCtx(() => [activeCount.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							variant: "primary",
							"data-test-id": "migration-rule-filters-count"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(activeCount.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["icon-only", "aria-label"])]),
					_: 1
				}, 8, ["content"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "migration-rule-filters-content"
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.quickFilters")), 1)]),
						_: 1
					}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickFilters) }, [
						__props.currentUserId ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: filters.value.owner === __props.currentUserId ? "solid" : "outline",
							size: "small",
							icon: "user",
							"aria-pressed": filters.value.owner === __props.currentUserId,
							"data-test-id": "migration-rule-quick-filter-mine",
							onClick: _cache[0] || (_cache[0] = ($event) => toggleFilter("owner", __props.currentUserId))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(quickFilterLabel("settings.migrationReport.detail.quickFilter.assignedToMe", __props.counts.assignedToMe)), 1)]),
							_: 1
						}, 8, ["variant", "aria-pressed"])) : createCommentVNode("", true),
						createVNode(unref(N8nButton_default), {
							variant: filters.value.state === "open" ? "solid" : "outline",
							size: "small",
							"aria-pressed": filters.value.state === "open",
							"data-test-id": "migration-rule-quick-filter-open",
							onClick: _cache[1] || (_cache[1] = ($event) => toggleFilter("state", "open"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(quickFilterLabel("settings.migrationReport.detail.quickFilter.open", __props.counts.open)), 1)]),
							_: 1
						}, 8, ["variant", "aria-pressed"]),
						createVNode(unref(N8nButton_default), {
							variant: filters.value.state === "wont_fix" ? "solid" : "outline",
							size: "small",
							"aria-pressed": filters.value.state === "wont_fix",
							"data-test-id": "migration-rule-quick-filter-wont-fix",
							onClick: _cache[2] || (_cache[2] = ($event) => toggleFilter("state", "wont_fix"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(quickFilterLabel("settings.migrationReport.detail.quickFilter.wontFix", __props.counts.wontFix)), 1)]),
							_: 1
						}, 8, ["variant", "aria-pressed"]),
						createVNode(unref(N8nButton_default), {
							variant: filters.value.owner === unref("unassigned") ? "solid" : "outline",
							size: "small",
							"aria-pressed": filters.value.owner === unref(UNASSIGNED_OWNER),
							"data-test-id": "migration-rule-quick-filter-unassigned",
							onClick: _cache[3] || (_cache[3] = ($event) => toggleFilter("owner", unref("unassigned")))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(quickFilterLabel("settings.migrationReport.detail.quickFilter.unassigned", __props.counts.unassigned)), 1)]),
							_: 1
						}, 8, ["variant", "aria-pressed"])
					], 2)], 2),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.group, _ctx.$style.allFilters]) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.state")), 1)]),
						_: 1
					}), createVNode(unref(N8nSegmentControl_default), {
						size: "small",
						options: stateOptions.value,
						"model-value": filters.value.state,
						"data-test-id": "migration-rule-filter-state",
						"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => setFilter("state", $event))
					}, null, 8, ["options", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.lastRun")), 1)]),
						_: 1
					}), createVNode(unref(N8nSegmentControl_default), {
						size: "small",
						options: ageOptions.value,
						"model-value": filters.value.lastRun,
						"data-test-id": "migration-rule-filter-last-run",
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => setFilter("lastRun", $event))
					}, null, 8, ["options", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.lastUpdated")), 1)]),
						_: 1
					}), createVNode(unref(N8nSegmentControl_default), {
						size: "small",
						options: ageOptions.value,
						"model-value": filters.value.lastUpdated,
						"data-test-id": "migration-rule-filter-last-updated",
						"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => setFilter("lastUpdated", $event))
					}, null, 8, ["options", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.executions")), 1)]),
						_: 1
					}), createVNode(unref(N8nSegmentControl_default), {
						size: "small",
						options: executionsOptions.value,
						"model-value": filters.value.executions,
						"data-test-id": "migration-rule-filter-executions",
						"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => setFilter("executions", $event))
					}, null, 8, ["options", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.status")), 1)]),
						_: 1
					}), createVNode(unref(N8nSegmentControl_default), {
						size: "small",
						options: publishedOptions.value,
						"model-value": filters.value.published,
						"data-test-id": "migration-rule-filter-status",
						"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => setFilter("published", $event))
					}, null, 8, ["options", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.owner")), 1)]),
						_: 1
					}), createVNode(unref(N8nSelect_default), {
						size: "small",
						filterable: "",
						class: normalizeClass(_ctx.$style.select),
						"model-value": filters.value.owner,
						"data-test-id": "migration-rule-filter-owner",
						"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => setFilter("owner", $event))
					}, {
						default: withCtx(() => [
							createVNode(unref(N8nOption_default), {
								value: "any",
								label: anyLabel.value
							}, null, 8, ["label"]),
							createVNode(unref(N8nOption_default), {
								value: unref(UNASSIGNED_OWNER),
								label: unref(i18n).baseText("settings.migrationReport.detail.table.unassigned")
							}, null, 8, ["value", "label"]),
							(openBlock(true), createElementBlock(Fragment, null, renderList(__props.owners, (owner) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: owner.id,
									value: owner.id,
									label: owner.label
								}, null, 8, ["value", "label"]);
							}), 128))
						]),
						_: 1
					}, 8, ["class", "model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.project")), 1)]),
						_: 1
					}), createVNode(unref(N8nSelect_default), {
						size: "small",
						filterable: "",
						class: normalizeClass(_ctx.$style.select),
						"model-value": filters.value.project,
						"data-test-id": "migration-rule-filter-project",
						"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => setFilter("project", $event))
					}, {
						default: withCtx(() => [createVNode(unref(N8nOption_default), {
							value: "any",
							label: anyLabel.value
						}, null, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.projects, (project) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: project.id,
								value: project.id,
								label: project.label,
								"data-test-id": "migration-rule-filter-project-item"
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 1
					}, 8, ["class", "model-value"])], 2),
					createVNode(unref(Checkbox_default), {
						label: unref(i18n).baseText("settings.migrationReport.detail.filters.showArchived"),
						"model-value": filters.value.showArchived,
						"data-test-id": "migration-rule-filter-show-archived",
						"onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => setFilter("showArchived", $event))
					}, null, 8, ["label", "model-value"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						disabled: activeCount.value === 0,
						"data-test-id": "migration-rule-filters-clear",
						onClick: _cache[12] || (_cache[12] = ($event) => filters.value = { ...unref(DEFAULT_WORKFLOW_FILTERS) })
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.clearAll")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						size: "small",
						onClick: _cache[13] || (_cache[13] = ($event) => open.value = false)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.filters.done")), 1)]),
						_: 1
					})], 2)
				], 2)]),
				_: 1
			}, 8, ["open"]);
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_1ywtg_2",
	group: "_group_1ywtg_9",
	trigger: "_trigger_1ywtg_16",
	quickFilters: "_quickFilters_1ywtg_24",
	allFilters: "_allFilters_1ywtg_31",
	select: "_select_1ywtg_36",
	footer: "_footer_1ywtg_40"
} }]]);
//#endregion
//#region src/features/settings/migrationReport/components/SplitButton.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SplitButton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SplitButton",
	props: {
		label: {},
		toggleLabel: {},
		disabled: { type: Boolean },
		actions: {}
	},
	emits: ["click", "action"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nButton_default), mergeProps({
				variant: "outline",
				label: __props.label,
				disabled: __props.disabled,
				class: _ctx.$style.main
			}, _ctx.$attrs, { onClick: _cache[0] || (_cache[0] = ($event) => emit("click")) }), null, 16, [
				"label",
				"disabled",
				"class"
			]), createVNode(unref(N8nActionToggle_default), {
				actions: __props.actions,
				disabled: __props.disabled,
				placement: "bottom-end",
				onAction: _cache[1] || (_cache[1] = ($event) => emit("action", $event))
			}, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					variant: "outline",
					icon: "chevron-down",
					"aria-label": __props.toggleLabel,
					disabled: __props.disabled,
					class: normalizeClass(_ctx.$style.toggle),
					"data-test-id": "split-button-toggle"
				}, null, 8, [
					"aria-label",
					"disabled",
					"class"
				])]),
				_: 1
			}, 8, ["actions", "disabled"])], 2);
		};
	}
}), [["__cssModules", { "$style": {
	group: "_group_dn1km_1",
	main: "_main_dn1km_6",
	toggle: "_toggle_dn1km_7"
} }]]);
//#endregion
//#region src/features/settings/migrationReport/ArchiveWorkflowsModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var ArchiveWorkflowsModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ArchiveWorkflowsModal",
	props: {
		mode: {},
		workflows: {}
	},
	emits: ["close", "confirm"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const isPrompt = computed(() => props.mode === "prompt");
		const published = computed(() => props.workflows.filter((workflow) => workflow.active));
		const title = computed(() => {
			if (isPrompt.value) return i18n.baseText("settings.migrationReport.detail.wontFix.archive.prompt.title", { interpolate: { name: props.workflows[0]?.name ?? "" } });
			const count = props.workflows.length;
			return i18n.baseText("settings.migrationReport.detail.wontFix.archive.confirm.title", {
				adjustToNumber: count,
				interpolate: { count: String(count) }
			});
		});
		const publishedNote = computed(() => {
			if (published.value.length === 0) return "";
			if (props.workflows.length === 1) return i18n.baseText("settings.migrationReport.detail.wontFix.archive.published");
			const count = published.value.length;
			return i18n.baseText("settings.migrationReport.detail.wontFix.archive.confirm.published", {
				adjustToNumber: count,
				interpolate: { count: String(count) }
			});
		});
		const cancelLabel = computed(() => isPrompt.value ? i18n.baseText("settings.migrationReport.detail.wontFix.archive.prompt.keep") : i18n.baseText("generic.cancel"));
		const confirmLabel = computed(() => isPrompt.value ? i18n.baseText("settings.migrationReport.detail.wontFix.archive.prompt.archive") : i18n.baseText("settings.migrationReport.detail.bulk.wontFixAndArchive"));
		function confirm() {
			emit("confirm");
			emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: true,
				"onUpdate:open": _cache[1] || (_cache[1] = (open) => !open && emit("close"))
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(DialogBody_default), null, {
						default: withCtx(() => [createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.content),
							"data-test-id": "archive-workflows-modal"
						}, [
							isPrompt.value ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								color: "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.wontFix.archive.prompt.description", { interpolate: { version: unref(TARGET_VERSION_DISPLAY) } })), 1)]),
								_: 1
							})) : createCommentVNode("", true),
							publishedNote.value ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 1,
								color: "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(publishedNote.value), 1)]),
								_: 1
							})) : createCommentVNode("", true),
							!isPrompt.value ? (openBlock(), createElementBlock("ul", {
								key: 2,
								class: normalizeClass(_ctx.$style.list),
								"data-test-id": "archive-workflows-modal-list"
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(published.value, (workflow) => {
								return openBlock(), createElementBlock("li", {
									key: workflow.id,
									class: normalizeClass(_ctx.$style.row)
								}, [createVNode(unref(N8nText_default), {
									color: "text-dark",
									class: normalizeClass(_ctx.$style.name)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(workflow.name), 1)]),
									_: 2
								}, 1032, ["class"]), createVNode(unref(N8nText_default), {
									size: "small",
									color: "text-light"
								}, {
									default: withCtx(() => [workflow.lastExecutedAt ? (openBlock(), createBlock(unref(I18nT), {
										key: 0,
										keypath: "settings.migrationReport.detail.table.lastRun",
										tag: "span",
										scope: "global"
									}, {
										time: withCtx(() => [createVNode(TimeAgo_default, { date: workflow.lastExecutedAt.toString() }, null, 8, ["date"])]),
										_: 2
									}, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.table.neverRun")), 1)], 64))]),
									_: 2
								}, 1024)], 2);
							}), 128))], 2)) : createCommentVNode("", true)
						], 2)]),
						_: 1
					}),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
							variant: "outline",
							label: cancelLabel.value,
							"data-test-id": "archive-workflows-modal-cancel-button",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
						}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
							label: confirmLabel.value,
							"data-test-id": "archive-workflows-modal-confirm-button",
							onClick: confirm
						}, null, 8, ["label"])], 2)]),
						_: 1
					})
				]),
				_: 1
			});
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_np1jn_1",
	list: "_list_np1jn_7",
	row: "_row_np1jn_14",
	name: "_name_np1jn_25",
	actions: "_actions_np1jn_31"
} }]]);
//#endregion
//#region src/features/settings/migrationReport/MigrationRuleDetail.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "mb-2xs" };
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = ["title"];
var MigrationRuleDetail_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "MigrationRuleDetail",
	props: { migrationRuleId: {} },
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const rootStore = useRootStore();
		const rbacStore = useRBACStore();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		const workflowsStore = useWorkflowsStore();
		useDocumentTitle().set(i18n.baseText("settings.migrationReport"));
		const props = __props;
		const router = useRouter();
		const route = useRoute();
		const canNotify = computed(() => rbacStore.hasScope("breakingChanges:migrate") && settingsStore.isSmtpSetup);
		const { state, isLoading } = useAsyncState(async () => {
			return await getReportForRule(rootStore.restApiContext, props.migrationRuleId);
		}, {
			ruleId: "",
			ruleTitle: "",
			ruleDescription: "",
			ruleImpact: "capabilityRemoved",
			affectedWorkflows: [],
			recommendations: [],
			migratable: false
		});
		const isLoadingUsers = ref(false);
		const activeWorkflowId = ref();
		const memberOptions = ref([]);
		function userOption(user) {
			const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ");
			return {
				id: user.id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				fullName: fullName || void 0
			};
		}
		const incomingOwners = ref(/* @__PURE__ */ new Map());
		/** The candidates for the row's workflow, plus the row's owner so the picker never shows a bare id. */
		function ownerOptionsFor(workflow) {
			const options = workflow.id === activeWorkflowId.value ? [...memberOptions.value] : [];
			for (const owner of [workflow.owner, incomingOwners.value.get(workflow.id)]) if (owner?.email && !options.some((option) => option.id === owner.id)) options.push(userOption(owner));
			return options;
		}
		let memberRequestSequence = 0;
		async function loadMembers(workflowId) {
			const sequence = ++memberRequestSequence;
			isLoadingUsers.value = true;
			try {
				const candidates = await getWorkflowOwnerCandidates(rootStore.restApiContext, workflowId);
				if (sequence !== memberRequestSequence) return;
				memberOptions.value = candidates.filter((user) => user.email).map(userOption);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.migrationReport.detail.owner.search.error.title"));
			} finally {
				if (sequence === memberRequestSequence) isLoadingUsers.value = false;
			}
		}
		function onOwnerPickerFocus(workflow) {
			if (activeWorkflowId.value === workflow.id && memberOptions.value.length > 0) return;
			activeWorkflowId.value = workflow.id;
			memberOptions.value = [];
			loadMembers(workflow.id);
		}
		const ownerRequestSequence = /* @__PURE__ */ new Map();
		async function onOwnerChange(workflow, userId) {
			const sequence = (ownerRequestSequence.get(workflow.id) ?? 0) + 1;
			ownerRequestSequence.set(workflow.id, sequence);
			try {
				const { owner } = userId ? await assignWorkflowOwner(rootStore.restApiContext, workflow.id, userId) : await unassignWorkflowOwner(rootStore.restApiContext, workflow.id);
				if (ownerRequestSequence.get(workflow.id) !== sequence) return;
				if (owner) {
					incomingOwners.value = new Map(incomingOwners.value).set(workflow.id, owner);
					await nextTick();
				}
				state.value = {
					...state.value,
					affectedWorkflows: state.value.affectedWorkflows.map((row) => row.id === workflow.id ? {
						...row,
						owner: owner ?? void 0
					} : row)
				};
				const remaining = new Map(incomingOwners.value);
				remaining.delete(workflow.id);
				incomingOwners.value = remaining;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.migrationReport.detail.owner.error.title"));
			}
		}
		function ownerLabel(workflow) {
			const owner = workflow.owner;
			return [owner?.firstName, owner?.lastName].filter(Boolean).join(" ") || owner?.email || i18n.baseText("settings.migrationReport.detail.table.unassigned");
		}
		const showMigrate = computed(() => state.value.migratable);
		/** Rule descriptions arrive with or without a trailing period; the header copy always ends in one. */
		const ruleDescription = computed(() => {
			const description = state.value.ruleDescription;
			if (!description) return "";
			return description.endsWith(".") ? description : `${description}.`;
		});
		const tableHeaders = computed(() => {
			const headers = [
				{
					title: i18n.baseText("settings.migrationReport.detail.table.name"),
					key: "name",
					width: 240
				},
				{
					title: i18n.baseText("settings.migrationReport.detail.table.nodesAffected"),
					key: "issues",
					width: 200,
					disableSort: true
				},
				{
					title: i18n.baseText("settings.migrationReport.detail.table.usage"),
					key: "numberOfExecutions",
					width: 160
				},
				{
					title: i18n.baseText("settings.migrationReport.detail.table.owner"),
					key: "owner",
					value: ownerLabel,
					width: 220
				},
				{
					title: i18n.baseText("settings.migrationReport.detail.table.state"),
					key: "status",
					width: 150
				}
			];
			if (showMigrate.value || canNotify.value) headers.push({
				title: "",
				key: "actions",
				value: () => "",
				width: (showMigrate.value ? 160 : 0) + (canNotify.value ? 110 : 0),
				disableSort: true
			});
			return headers;
		});
		const STALE_WORKFLOW_AFTER = 90 * TIME.DAY;
		function isStale(workflow) {
			if (!workflow.lastExecutedAt) return false;
			return Date.now() - new Date(workflow.lastExecutedAt).getTime() > STALE_WORKFLOW_AFTER;
		}
		function runCountLabel(workflow) {
			return i18n.baseText("settings.migrationReport.detail.table.runs", {
				adjustToNumber: workflow.numberOfExecutions,
				interpolate: { count: workflow.numberOfExecutions.toLocaleString(rootStore.defaultLocale) }
			});
		}
		const migratedWorkflowIds = ref(/* @__PURE__ */ new Set());
		const migrateModalBus = createEventBus();
		migrateModalBus.on("migrated", ({ workflowId }) => {
			migratedWorkflowIds.value = new Set(migratedWorkflowIds.value).add(workflowId);
			selectedWorkflowIds.value = selectedWorkflowIds.value.filter((selectedId) => selectedId !== workflowId);
		});
		function openMigrateModal(workflows) {
			uiStore.openModalWithData({
				name: MIGRATE_WORKFLOW_MODAL_KEY,
				data: {
					ruleId: props.migrationRuleId,
					workflows,
					recommendations: state.value.recommendations,
					eventBus: migrateModalBus
				}
			});
		}
		const openCount = computed(() => state.value.affectedWorkflows.filter((workflow) => isUnresolved(workflow)).length);
		const savingWorkflowIds = ref(/* @__PURE__ */ new Set());
		const notifyingWorkflowIds = ref(/* @__PURE__ */ new Set());
		function isBusy(workflow) {
			return notifyingWorkflowIds.value.has(workflow.id) || savingWorkflowIds.value.has(workflow.id);
		}
		function setFindingStatuses(statuses) {
			state.value = {
				...state.value,
				affectedWorkflows: state.value.affectedWorkflows.map((workflow) => {
					const status = statuses.get(workflow.id);
					if (!status) return workflow;
					return status === "open" ? {
						...workflow,
						status,
						notifiedAt: void 0
					} : {
						...workflow,
						status
					};
				})
			};
		}
		function restoreWorkflows(rows) {
			const byId = new Map(rows.map((row) => [row.id, row]));
			state.value = {
				...state.value,
				affectedWorkflows: state.value.affectedWorkflows.map((row) => byId.get(row.id) ?? row)
			};
		}
		function setSaving(workflowIds, saving) {
			const next = new Set(savingWorkflowIds.value);
			for (const workflowId of workflowIds) if (saving) next.add(workflowId);
			else next.delete(workflowId);
			savingWorkflowIds.value = next;
		}
		async function onFindingStatusChange(workflow, status) {
			if (status === workflow.status || isBusy(workflow)) return;
			setFindingStatuses(/* @__PURE__ */ new Map([[workflow.id, status]]));
			setSaving([workflow.id], true);
			try {
				await updateFindingStatus(rootStore.restApiContext, props.migrationRuleId, workflow.id, status);
				if (status === "wont_fix") promptToArchive(workflow);
			} catch (error) {
				restoreWorkflows([workflow]);
				toast.showError(error, i18n.baseText("settings.migrationReport.detail.state.error.title"));
			} finally {
				setSaving([workflow.id], false);
			}
		}
		const selectedWorkflowIds = ref([]);
		const selectedWorkflows = computed(() => {
			const selected = new Set(selectedWorkflowIds.value);
			return state.value.affectedWorkflows.filter((workflow) => selected.has(workflow.id));
		});
		function isSelectable(workflow) {
			return !migratedWorkflowIds.value.has(workflow.id);
		}
		/**
		* The selected rows that a bulk change to `status` would change. A notified
		* row counts as changeable to open, like in the row's own select: reopening
		* drops the notified mark.
		*/
		function bulkTargets(status) {
			return selectedWorkflows.value.filter((workflow) => findingState(workflow) !== status && isSelectable(workflow) && !isBusy(workflow));
		}
		/** Changes the state of all `workflows` in one request. Returns false when the request fails. */
		async function changeFindingStatuses(workflows, status) {
			const workflowIds = workflows.map((workflow) => workflow.id);
			setFindingStatuses(new Map(workflowIds.map((workflowId) => [workflowId, status])));
			setSaving(workflowIds, true);
			try {
				await updateFindingStatuses(rootStore.restApiContext, props.migrationRuleId, workflowIds, status);
				return true;
			} catch (error) {
				restoreWorkflows(workflows);
				toast.showError(error, i18n.baseText("settings.migrationReport.detail.state.error.title"));
				return false;
			} finally {
				setSaving(workflowIds, false);
			}
		}
		async function onBulkStatusChange(status) {
			const workflows = bulkTargets(status);
			if (workflows.length === 0) return;
			if (!await changeFindingStatuses(workflows, status)) return;
			const changed = new Set(workflows.map((workflow) => workflow.id));
			selectedWorkflowIds.value = selectedWorkflowIds.value.filter((workflowId) => !changed.has(workflowId));
		}
		const UNUSED_WORKFLOW_FILTERS = {
			...DEFAULT_WORKFLOW_FILTERS,
			state: "open",
			lastRun: "over12Months"
		};
		const unusedOpenWorkflows = computed(() => {
			const now = Date.now();
			return state.value.affectedWorkflows.filter((workflow) => !isBusy(workflow) && matchesWorkflowFilters(workflow, UNUSED_WORKFLOW_FILTERS, now, findingState(workflow)));
		});
		function canNotifyRow(workflow) {
			return canNotify.value && !!workflow.owner?.email && isUnresolved(workflow);
		}
		const skipReasonKeys = {
			no_owner: "settings.migrationReport.detail.notify.skipped.noOwner",
			no_finding: "settings.migrationReport.detail.notify.skipped.noFinding",
			send_failed: "settings.migrationReport.detail.notify.skipped.sendFailed",
			recently_notified: "settings.migrationReport.detail.notify.skipped.recentlyNotified"
		};
		/**
		* Emails the owners of `workflows` in one request and marks the notified rows.
		* Returns undefined when the request fails.
		*/
		async function notifyOwners(workflows) {
			const workflowIds = workflows.map((workflow) => workflow.id);
			setNotifying(workflowIds, true);
			try {
				const result = await notifyFindingOwners(rootStore.restApiContext, props.migrationRuleId, workflowIds);
				const notified = new Set(result.notifiedWorkflowIds);
				const notifiedAt = /* @__PURE__ */ new Date();
				state.value = {
					...state.value,
					affectedWorkflows: state.value.affectedWorkflows.map((row) => notified.has(row.id) && row.status !== "fixed_unpublished" ? {
						...row,
						status: "notified",
						notifiedAt
					} : row)
				};
				return result;
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.migrationReport.detail.notify.error.title"));
				return;
			} finally {
				setNotifying(workflowIds, false);
			}
		}
		function setNotifying(workflowIds, notifying) {
			const next = new Set(notifyingWorkflowIds.value);
			for (const workflowId of workflowIds) if (notifying) next.add(workflowId);
			else next.delete(workflowId);
			notifyingWorkflowIds.value = next;
		}
		/** Emails the owner of one workflow. A second call on a notified row is a reminder. */
		async function onNotify(workflow) {
			if (isBusy(workflow)) return;
			const result = await notifyOwners([workflow]);
			if (!result) return;
			const skipped = result.skipped.find((entry) => entry.workflowId === workflow.id);
			if (skipped) {
				toast.showMessage({
					type: "error",
					title: i18n.baseText("settings.migrationReport.detail.notify.error.title"),
					message: i18n.baseText(skipReasonKeys[skipped.reason])
				});
				return;
			}
			toast.showMessage({
				type: "success",
				title: i18n.baseText("settings.migrationReport.detail.notify.success.title"),
				message: i18n.baseText("settings.migrationReport.detail.notify.success.message", { interpolate: {
					owner: ownerLabel(workflow),
					name: workflow.name
				} })
			});
		}
		const bulkNotifyTargets = computed(() => selectedWorkflows.value.filter((workflow) => canNotifyRow(workflow) && !isBusy(workflow)));
		const bulkNotifyOwnerCount = computed(() => new Set(bulkNotifyTargets.value.map((workflow) => workflow.owner?.id)).size);
		const bulkNotifyLabel = computed(() => bulkNotifyOwnerCount.value > 0 ? i18n.baseText("settings.migrationReport.detail.bulk.notifyOwnerCount", {
			adjustToNumber: bulkNotifyOwnerCount.value,
			interpolate: { count: String(bulkNotifyOwnerCount.value) }
		}) : i18n.baseText("settings.migrationReport.detail.bulk.notifyOwners"));
		const isBulkNotifying = computed(() => selectedWorkflows.value.some((workflow) => notifyingWorkflowIds.value.has(workflow.id)));
		const selectedWithoutOwnerCount = computed(() => selectedWorkflows.value.filter((workflow) => !workflow.owner?.email).length);
		async function onBulkNotify() {
			const workflows = bulkNotifyTargets.value;
			if (workflows.length === 0) return;
			const result = await notifyOwners(workflows);
			if (!result) return;
			const notifiedCount = result.notifiedWorkflowIds.length;
			if (result.skipped.length > 0) {
				const reasons = new Set(result.skipped.map((entry) => entry.reason));
				toast.showMessage({
					type: "warning",
					title: i18n.baseText("settings.migrationReport.detail.bulk.notify.partial.title", { interpolate: {
						notified: String(notifiedCount),
						total: String(workflows.length)
					} }),
					message: [...reasons].map((reason) => i18n.baseText(skipReasonKeys[reason])).join(". ")
				});
			} else toast.showMessage({
				type: "success",
				title: i18n.baseText("settings.migrationReport.detail.bulk.notify.success.title", {
					adjustToNumber: notifiedCount,
					interpolate: { count: String(notifiedCount) }
				})
			});
			const notified = new Set(result.notifiedWorkflowIds);
			selectedWorkflowIds.value = selectedWorkflowIds.value.filter((workflowId) => !notified.has(workflowId));
		}
		function reviewUnusedWorkflows() {
			searchInput.value = "";
			searchQuery.value = "";
			workflowFilters.value = { ...UNUSED_WORKFLOW_FILTERS };
		}
		const archiveDialog = ref();
		function onArchiveDialogConfirm() {
			if (!archiveDialog.value) return;
			const { mode, workflows } = archiveDialog.value;
			mode === "prompt" ? archiveWorkflows(workflows) : markWontFixAndArchive(workflows);
		}
		/**
		* On a rule whose executions will fail, a won't fix usually means the workflow is
		* not needed. So a won't fix from the row asks to archive it too. On other rules
		* the workflow often keeps running, so the row does not ask.
		*/
		function promptToArchive(workflow) {
			if (state.value.ruleImpact !== "executionsFail" || workflow.isArchived) return;
			archiveDialog.value = {
				mode: "prompt",
				workflows: [workflow]
			};
		}
		const bulkArchiveTargets = computed(() => selectedWorkflows.value.filter((workflow) => isSelectable(workflow) && !isBusy(workflow) && !workflow.isArchived));
		const bulkWontFixActions = computed(() => [{
			label: i18n.baseText("settings.migrationReport.detail.bulk.wontFixAndArchive"),
			value: "wontFixAndArchive",
			disabled: bulkArchiveTargets.value.length === 0
		}]);
		function onBulkWontFixAndArchive() {
			const workflows = bulkArchiveTargets.value;
			if (workflows.length === 0) return;
			if (!workflows.some((workflow) => workflow.active)) {
				markWontFixAndArchive(workflows);
				return;
			}
			archiveDialog.value = {
				mode: "confirm",
				workflows
			};
		}
		async function markWontFixAndArchive(workflows) {
			const toMark = workflows.filter((workflow) => findingState(workflow) !== "wont_fix");
			if (toMark.length > 0 && !await changeFindingStatuses(toMark, "wont_fix")) return;
			const done = new Set(workflows.map((workflow) => workflow.id));
			selectedWorkflowIds.value = selectedWorkflowIds.value.filter((id) => !done.has(id));
			await archiveWorkflows(workflows);
		}
		async function archiveWorkflows(workflows) {
			const count = workflows.length;
			const archivedIds = /* @__PURE__ */ new Set();
			for (const workflow of workflows) try {
				await workflowsStore.archiveWorkflow(workflow.id);
				archivedIds.add(workflow.id);
			} catch {}
			state.value = {
				...state.value,
				affectedWorkflows: state.value.affectedWorkflows.map((workflow) => archivedIds.has(workflow.id) ? {
					...workflow,
					isArchived: true,
					active: false
				} : workflow)
			};
			if (archivedIds.size === count) toast.showMessage({
				type: "success",
				title: i18n.baseText("settings.migrationReport.detail.wontFix.archive.success.title", {
					adjustToNumber: count,
					interpolate: { count: String(count) }
				})
			});
			else toast.showMessage({
				type: "warning",
				title: i18n.baseText("settings.migrationReport.detail.wontFix.archive.partial.title", { interpolate: {
					archived: String(archivedIds.size),
					total: String(count)
				} }),
				message: i18n.baseText("settings.migrationReport.detail.wontFix.archive.partial.message")
			});
		}
		async function markUnusedWorkflowsAsWontFix() {
			const workflows = unusedOpenWorkflows.value;
			if (workflows.length === 0) return;
			await changeFindingStatuses(workflows, "wont_fix");
		}
		function workflowUrl(workflow) {
			return router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: workflow.id }
			}).href;
		}
		const sortBy = ref([{
			id: "numberOfExecutions",
			desc: true
		}]);
		const sortOptions = computed(() => [
			{
				value: "mostRuns",
				id: "numberOfExecutions",
				desc: true,
				label: i18n.baseText("settings.migrationReport.detail.sort.mostRuns")
			},
			{
				value: "fewestRuns",
				id: "numberOfExecutions",
				desc: false,
				label: i18n.baseText("settings.migrationReport.detail.sort.fewestRuns")
			},
			{
				value: "lastRun",
				id: "lastExecutedAt",
				desc: true,
				label: i18n.baseText("settings.migrationReport.detail.sort.lastRun")
			},
			{
				value: "lastUpdated",
				id: "lastUpdatedAt",
				desc: true,
				label: i18n.baseText("settings.migrationReport.detail.sort.lastUpdated")
			},
			{
				value: "nameAsc",
				id: "name",
				desc: false,
				label: i18n.baseText("settings.migrationReport.detail.sort.nameAsc")
			},
			{
				value: "nameDesc",
				id: "name",
				desc: true,
				label: i18n.baseText("settings.migrationReport.detail.sort.nameDesc")
			}
		]);
		const sortOption = computed(() => {
			const current = sortBy.value[0];
			if (!current) return void 0;
			return sortOptions.value.find((option) => option.id === current.id && option.desc === current.desc)?.value;
		});
		function onSortChange(value) {
			const option = sortOptions.value.find((candidate) => candidate.value === value);
			if (option) sortBy.value = [{
				id: option.id,
				desc: option.desc
			}];
		}
		const searchInput = ref("");
		const searchQuery = ref("");
		const workflowFilters = ref({
			...DEFAULT_WORKFLOW_FILTERS,
			...route.query.owner === "me" && usersStore.currentUserId ? { owner: usersStore.currentUserId } : {}
		});
		const debouncedSearch = useDebounceFn((value) => {
			searchQuery.value = value;
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const onSearchInput = (value) => {
			searchInput.value = value;
			debouncedSearch(value);
		};
		function findingState(workflow) {
			return migratedWorkflowIds.value.has(workflow.id) ? "migrated" : workflow.status;
		}
		function isUnresolved(workflow) {
			return isUnresolvedState(findingState(workflow));
		}
		const wontFixCount = computed(() => state.value.affectedWorkflows.filter((workflow) => findingState(workflow) === "wont_fix").length);
		const unassignedCount = computed(() => state.value.affectedWorkflows.filter((workflow) => !workflow.owner).length);
		const currentUserId = computed(() => usersStore.currentUserId ?? void 0);
		const assignedToMeCount = computed(() => state.value.affectedWorkflows.filter((workflow) => workflow.owner?.id === currentUserId.value).length);
		const quickFilterCounts = computed(() => ({
			assignedToMe: assignedToMeCount.value,
			open: openCount.value,
			wontFix: wontFixCount.value,
			unassigned: unassignedCount.value
		}));
		const ownerFilterOptions = computed(() => {
			const owners = /* @__PURE__ */ new Map();
			for (const workflow of state.value.affectedWorkflows) if (workflow.owner) owners.set(workflow.owner.id, ownerLabel(workflow));
			return (0, import_orderBy.default)([...owners].map(([id, label]) => ({
				id,
				label
			})), [(owner) => owner.label.toLowerCase()]);
		});
		function projectLabel(workflow) {
			if (workflow.homeProjectType === "personal") return i18n.baseText("settings.migrationReport.detail.filters.project.personal");
			return workflow.homeProjectName ?? "—";
		}
		const projectFilterOptions = computed(() => {
			const projects = /* @__PURE__ */ new Map();
			let hasPersonal = false;
			for (const workflow of state.value.affectedWorkflows) if (workflow.homeProjectType === "personal") hasPersonal = true;
			else if (workflow.homeProjectType === "team" && workflow.homeProjectId) projects.set(workflow.homeProjectId, workflow.homeProjectName ?? workflow.homeProjectId);
			const teamOptions = (0, import_orderBy.default)([...projects].map(([id, label]) => ({
				id,
				label
			})), [(project) => project.label.toLowerCase()]);
			if (!hasPersonal) return teamOptions;
			return [{
				id: PERSONAL_PROJECTS,
				label: i18n.baseText("settings.migrationReport.detail.filters.project.personal")
			}, ...teamOptions];
		});
		const filteredWorkflows = computed(() => {
			const query = searchQuery.value.toLowerCase();
			const now = Date.now();
			return state.value.affectedWorkflows.filter((workflow) => (!query || workflow.name.toLowerCase().includes(query)) && matchesWorkflowFilters(workflow, workflowFilters.value, now, findingState(workflow)));
		});
		watch(filteredWorkflows, (workflows) => {
			const visible = new Set(workflows.map((workflow) => workflow.id));
			const kept = selectedWorkflowIds.value.filter((workflowId) => visible.has(workflowId));
			if (kept.length !== selectedWorkflowIds.value.length) selectedWorkflowIds.value = kept;
		});
		const sortValues = {
			owner: ownerLabel,
			lastExecutedAt: (workflow) => workflow.lastExecutedAt ? new Date(workflow.lastExecutedAt).getTime() : 0,
			lastUpdatedAt: (workflow) => new Date(workflow.lastUpdatedAt).getTime(),
			name: (workflow) => workflow.name.toLowerCase()
		};
		const sortedWorkflows = computed(() => {
			if (!sortBy.value.length) return filteredWorkflows.value;
			const { id, desc } = sortBy.value[0];
			return (0, import_orderBy.default)(filteredWorkflows.value, [sortValues[id] ?? id], [desc ? "desc" : "asc"]);
		});
		const page = ref(0);
		const itemsPerPage = ref(25);
		const pagedWorkflows = computed(() => sortedWorkflows.value.slice(page.value * itemsPerPage.value, (page.value + 1) * itemsPerPage.value));
		watch([
			searchQuery,
			workflowFilters,
			sortBy
		], () => {
			page.value = 0;
		});
		watch(() => sortedWorkflows.value.length, (length) => {
			const lastPage = Math.max(0, Math.ceil(length / itemsPerPage.value) - 1);
			if (page.value > lastPage) page.value = lastPage;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				"full-width": "",
				"show-back": "",
				"back-label": unref(i18n).baseText("generic.back"),
				onBack: _cache[10] || (_cache[10] = ($event) => unref(router).push({ name: unref(VIEWS).MIGRATION_REPORT }))
			}, {
				default: withCtx(() => [
					unref(isLoading) ? (openBlock(), createElementBlock("header", {
						key: 0,
						class: normalizeClass(_ctx.$style.pageHeader)
					}, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nLoading_default), { variant: "h1" })]), createBaseVNode("div", null, [createVNode(unref(N8nLoading_default), {
						variant: "p",
						rows: 2
					})])], 2)) : (openBlock(), createBlock(unref(SettingsPageHeader_default), {
						key: 1,
						title: unref(state).ruleTitle,
						description: ruleDescription.value,
						"show-docs-link": Boolean(unref(state).ruleDocumentationUrl),
						"docs-url": unref(state).ruleDocumentationUrl,
						"docs-label": unref(i18n).baseText("settings.migrationReport.documentation"),
						"docs-leading-text": ""
					}, {
						titleTrailing: withCtx(() => [createVNode(ImpactTag_default, { impact: unref(state).ruleImpact }, null, 8, ["impact"]), createVNode(unref(N8nBadge_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.affectedTag", { interpolate: { count: String(openCount.value) } })), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"title",
						"description",
						"show-docs-link",
						"docs-url",
						"docs-label"
					])),
					!unref(isLoading) ? (openBlock(), createBlock(HowToFixPanel_default, {
						key: 2,
						class: normalizeClass(_ctx.$style.howToFix),
						recommendations: unref(state).recommendations,
						"documentation-url": unref(state).ruleDocumentationUrl,
						migratable: unref(state).migratable
					}, null, 8, [
						"class",
						"recommendations",
						"documentation-url",
						"migratable"
					])) : createCommentVNode("", true),
					!unref(isLoading) && unusedOpenWorkflows.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.unusedCallout),
						"data-test-id": "migration-rule-unused-callout"
					}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.unusedCallout.message", {
							adjustToNumber: unusedOpenWorkflows.value.length,
							interpolate: { count: String(unusedOpenWorkflows.value.length) }
						})), 1)]),
						_: 1
					}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.unusedCalloutActions) }, [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						"data-test-id": "migration-rule-unused-review",
						onClick: reviewUnusedWorkflows
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.unusedCallout.review")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						size: "small",
						"data-test-id": "migration-rule-unused-mark-all",
						onClick: markUnusedWorkflowsAsWontFix
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.unusedCallout.markAll", { interpolate: { count: String(unusedOpenWorkflows.value.length) } })), 1)]),
						_: 1
					})], 2)], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [
						createVNode(unref(Input_default), {
							"model-value": searchInput.value,
							placeholder: unref(i18n).baseText("settings.migrationReport.detail.search.placeholder"),
							size: "small",
							clearable: "",
							class: normalizeClass(_ctx.$style.search),
							"data-test-id": "migration-rule-search",
							"onUpdate:modelValue": onSearchInput
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"model-value",
							"placeholder",
							"class"
						]),
						createVNode(unref(N8nSelect_default), {
							"model-value": sortOption.value,
							size: "small",
							placeholder: unref(i18n).baseText("settings.migrationReport.detail.sort.none"),
							class: normalizeClass(_ctx.$style.sort),
							"data-test-id": "migration-rule-sort",
							"onUpdate:modelValue": onSortChange
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortOptions.value, (option) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: option.value,
									value: option.value,
									label: option.label,
									"data-test-id": "migration-rule-sort-item"
								}, null, 8, ["value", "label"]);
							}), 128))]),
							_: 1
						}, 8, [
							"model-value",
							"placeholder",
							"class"
						]),
						createVNode(WorkflowFiltersPopover_default, {
							modelValue: workflowFilters.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => workflowFilters.value = $event),
							owners: ownerFilterOptions.value,
							projects: projectFilterOptions.value,
							"current-user-id": currentUserId.value,
							counts: quickFilterCounts.value
						}, null, 8, [
							"modelValue",
							"owners",
							"projects",
							"current-user-id",
							"counts"
						])
					], 2),
					(openBlock(), createBlock(unref(N8nDataTableServer_default), {
						key: String(unref(state).migratable),
						"sort-by": sortBy.value,
						"onUpdate:sortBy": _cache[1] || (_cache[1] = ($event) => sortBy.value = $event),
						selection: selectedWorkflowIds.value,
						"onUpdate:selection": _cache[2] || (_cache[2] = ($event) => selectedWorkflowIds.value = $event),
						page: page.value,
						"onUpdate:page": _cache[3] || (_cache[3] = ($event) => page.value = $event),
						"items-per-page": itemsPerPage.value,
						"onUpdate:itemsPerPage": _cache[4] || (_cache[4] = ($event) => itemsPerPage.value = $event),
						"show-select": "",
						"item-selectable": isSelectable,
						items: pagedWorkflows.value,
						"items-length": sortedWorkflows.value.length,
						headers: tableHeaders.value,
						loading: unref(isLoading)
					}, {
						[`item.name`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cellStack) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.nameRow) }, [item.active ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							content: unref(i18n).baseText("settings.migrationReport.detail.table.published")
						}, {
							default: withCtx(() => [createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.publishedDot),
								role: "img",
								"aria-label": unref(i18n).baseText("settings.migrationReport.detail.table.published"),
								"data-test-id": "migration-workflow-published"
							}, [createVNode(unref(N8nStatusDot_default), { variant: "success" })], 10, _hoisted_2)]),
							_: 1
						}, 8, ["content"])) : createCommentVNode("", true), createVNode(unref(N8nLink_default), {
							theme: "text",
							to: workflowUrl(item),
							"new-window": "",
							title: item.name,
							class: normalizeClass([_ctx.$style.truncate, _ctx.$style.workflowName]),
							"data-test-id": "migration-workflow-name-link"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
							_: 2
						}, 1032, [
							"to",
							"title",
							"class"
						])], 2), createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass(_ctx.$style.nameDetails)
						}, {
							default: withCtx(() => [createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.project),
								title: projectLabel(item),
								"data-test-id": "migration-workflow-project"
							}, [createVNode(ProjectIcon_default, {
								icon: {
									type: "icon",
									value: item.homeProjectType === "personal" ? "user" : "layers"
								},
								"border-less": "",
								size: "mini"
							}, null, 8, ["icon"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.truncate) }, toDisplayString(projectLabel(item)), 3)], 10, _hoisted_3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.updated) }, [_cache[11] || (_cache[11] = createTextVNode(" · ", -1)), createVNode(unref(I18nT), {
								keypath: "settings.migrationReport.detail.table.updated",
								tag: "span",
								scope: "global"
							}, {
								time: withCtx(() => [createVNode(TimeAgo_default, { date: item.lastUpdatedAt.toString() }, null, 8, ["date"])]),
								_: 2
							}, 1024)], 2)]),
							_: 2
						}, 1032, ["class"])], 2)]),
						[`item.issues`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.truncate, _ctx.$style.nodeNames]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.issues, (issue, index) => {
							return openBlock(), createElementBlock(Fragment, { key: issue.nodeId }, [createVNode(unref(N8nLink_default), {
								theme: "text",
								to: `/workflow/${item.id}/${issue.nodeId}`,
								"new-window": ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(issue.nodeName), 1)]),
								_: 2
							}, 1032, ["to"]), index < item.issues.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(", ")], 64)) : createCommentVNode("", true)], 64);
						}), 128))], 2)]),
						[`item.numberOfExecutions`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cellStack) }, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(runCountLabel(item)), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), {
							size: "small",
							color: isStale(item) ? "danger" : "text-light",
							"data-test-id": "migration-workflow-last-run"
						}, {
							default: withCtx(() => [item.lastExecutedAt ? (openBlock(), createBlock(unref(I18nT), {
								key: 0,
								keypath: "settings.migrationReport.detail.table.lastRun",
								tag: "span",
								scope: "global"
							}, {
								time: withCtx(() => [createVNode(TimeAgo_default, { date: item.lastExecutedAt.toString() }, null, 8, ["date"])]),
								_: 2
							}, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.table.neverRun")), 1)], 64))]),
							_: 2
						}, 1032, ["color"])], 2)]),
						[`item.owner`]: withCtx(({ item }) => [createVNode(unref(N8nUserSelect_default), {
							size: "small",
							users: ownerOptionsFor(item),
							"hide-email-in-label": "",
							"show-avatar": "",
							borderless: "",
							"model-value": item.owner?.id ?? "",
							placeholder: unref(i18n).baseText("settings.migrationReport.detail.table.unassigned"),
							loading: isLoadingUsers.value,
							clearable: "",
							"data-test-id": "migration-owner-select",
							onFocus: ($event) => onOwnerPickerFocus(item),
							"onUpdate:modelValue": (userId) => onOwnerChange(item, userId)
						}, null, 8, [
							"users",
							"model-value",
							"placeholder",
							"loading",
							"onFocus",
							"onUpdate:modelValue"
						])]),
						[`item.status`]: withCtx(({ item }) => [createVNode(FindingStateSelect_default, {
							"model-value": item.status,
							disabled: savingWorkflowIds.value.has(item.id) || notifyingWorkflowIds.value.has(item.id) || migratedWorkflowIds.value.has(item.id),
							"onUpdate:modelValue": ($event) => onFindingStatusChange(item, $event)
						}, null, 8, [
							"model-value",
							"disabled",
							"onUpdate:modelValue"
						])]),
						[`item.actions`]: withCtx(({ item }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
							canNotifyRow(item) ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								variant: "outline",
								size: "small",
								loading: notifyingWorkflowIds.value.has(item.id),
								label: unref(i18n).baseText(item.notifiedAt ? "settings.migrationReport.detail.notify.remind" : "settings.migrationReport.detail.notify.button"),
								"data-test-id": "migration-notify-owner-button",
								onClick: ($event) => onNotify(item)
							}, null, 8, [
								"loading",
								"label",
								"onClick"
							])) : createCommentVNode("", true),
							item.notifiedAt ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
								key: 1,
								type: "tooltip",
								theme: "info",
								bold: false,
								"data-test-id": "migration-workflow-notified-at"
							}, {
								default: withCtx(() => [createVNode(unref(I18nT), {
									keypath: "settings.migrationReport.detail.table.notifiedAt",
									tag: "span",
									scope: "global"
								}, {
									time: withCtx(() => [createVNode(TimeAgo_default, { date: item.notifiedAt.toString() }, null, 8, ["date"])]),
									_: 2
								}, 1024)]),
								_: 2
							}, 1024)) : createCommentVNode("", true),
							showMigrate.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [migratedWorkflowIds.value.has(item.id) ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								color: "text-light",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.migrate.migrated")), 1)]),
								_: 1
							})) : (openBlock(), createBlock(unref(N8nButton_default), {
								key: 1,
								size: "small",
								label: unref(i18n).baseText("settings.migrationReport.detail.migrate.button"),
								"data-test-id": "migrate-workflow-button",
								onClick: ($event) => openMigrateModal([item])
							}, null, 8, ["label", "onClick"]))], 64)) : createCommentVNode("", true)
						], 2)]),
						_: 2
					}, 1032, [
						"sort-by",
						"selection",
						"page",
						"items-per-page",
						"items",
						"items-length",
						"headers",
						"loading"
					])),
					selectedWorkflowIds.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.selectionBar)
					}, [createVNode(unref(N8nSelectedItemsInfo_default), {
						"selected-count": selectedWorkflowIds.value.length,
						onClearSelection: _cache[8] || (_cache[8] = ($event) => selectedWorkflowIds.value = [])
					}, {
						actions: withCtx(() => [
							showMigrate.value ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								variant: "outline",
								label: unref(i18n).baseText("settings.migrationReport.detail.bulk.migrate"),
								"data-test-id": "migration-bulk-migrate-button",
								onClick: _cache[5] || (_cache[5] = ($event) => openMigrateModal(selectedWorkflows.value))
							}, null, 8, ["label"])) : createCommentVNode("", true),
							canNotify.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nTooltip_default), {
								content: unref(i18n).baseText("settings.migrationReport.detail.bulk.notify.tooltip"),
								disabled: bulkNotifyOwnerCount.value === 0
							}, {
								default: withCtx(() => [createVNode(unref(N8nButton_default), {
									variant: "outline",
									label: bulkNotifyLabel.value,
									disabled: bulkNotifyTargets.value.length === 0,
									loading: isBulkNotifying.value,
									"data-test-id": "migration-bulk-notify-button",
									onClick: onBulkNotify
								}, null, 8, [
									"label",
									"disabled",
									"loading"
								])]),
								_: 1
							}, 8, ["content", "disabled"]), selectedWithoutOwnerCount.value > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								size: "small",
								color: "text-light",
								"data-test-id": "migration-bulk-notify-no-owner"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.bulk.notify.noOwner", { interpolate: { count: String(selectedWithoutOwnerCount.value) } })), 1)]),
								_: 1
							})) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
							createVNode(SplitButton_default, {
								label: unref(i18n).baseText("settings.migrationReport.detail.bulk.wontFix"),
								disabled: bulkTargets("wont_fix").length === 0,
								actions: bulkWontFixActions.value,
								"toggle-label": unref(i18n).baseText("settings.migrationReport.detail.bulk.wontFixMore"),
								"data-test-id": "migration-bulk-wont-fix-button",
								onClick: _cache[6] || (_cache[6] = ($event) => onBulkStatusChange("wont_fix")),
								onAction: onBulkWontFixAndArchive
							}, null, 8, [
								"label",
								"disabled",
								"actions",
								"toggle-label"
							]),
							createVNode(unref(N8nButton_default), {
								variant: "outline",
								label: unref(i18n).baseText("settings.migrationReport.detail.bulk.reopen"),
								disabled: bulkTargets("open").length === 0,
								"data-test-id": "migration-bulk-reopen-button",
								onClick: _cache[7] || (_cache[7] = ($event) => onBulkStatusChange("open"))
							}, null, 8, ["label", "disabled"])
						]),
						_: 1
					}, 8, ["selected-count"])], 2)) : createCommentVNode("", true),
					archiveDialog.value ? (openBlock(), createBlock(ArchiveWorkflowsModal_default, {
						key: 5,
						mode: archiveDialog.value.mode,
						workflows: archiveDialog.value.workflows,
						onConfirm: onArchiveDialogConfirm,
						onClose: _cache[9] || (_cache[9] = ($event) => archiveDialog.value = void 0)
					}, null, 8, ["mode", "workflows"])) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["back-label"]);
		};
	}
}), [["__cssModules", { "$style": {
	pageHeader: "_pageHeader_16y5w_4",
	howToFix: "_howToFix_16y5w_10",
	unusedCallout: "_unusedCallout_16y5w_14",
	unusedCalloutActions: "_unusedCalloutActions_16y5w_26",
	cellStack: "_cellStack_16y5w_32",
	truncate: "_truncate_16y5w_39",
	workflowName: "_workflowName_16y5w_46",
	nameRow: "_nameRow_16y5w_51",
	publishedDot: "_publishedDot_16y5w_58",
	nameDetails: "_nameDetails_16y5w_63",
	project: "_project_16y5w_70",
	updated: "_updated_16y5w_77",
	nodeNames: "_nodeNames_16y5w_81",
	actions: "_actions_16y5w_85",
	selectionBar: "_selectionBar_16y5w_95",
	toolbar: "_toolbar_16y5w_102",
	search: "_search_16y5w_111",
	sort: "_sort_16y5w_115"
} }]]);
//#endregion
export { MigrationRuleDetail_default as default };
