import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, K as onBeforeMount, N as defineComponent, O as createSlots, Pt as reactive, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, i as i18n, s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nPopover_default } from "./N8nPopover-C7WJvH2j.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as ElDatePicker } from "./date-picker-COP7YYI0.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { d as hasCancellableExecutions } from "./workflows.store-Bo6ZgF_O.js";
import { Qn as makeRestApiRequest, t as useRootStore } from "./useRootStore-Bapf3biO.js";
import { t as useSettingsStore } from "./settings.store-1Fkv1cxl.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-mu-wA-a0.js";
import { no as EnterpriseEditionFeature, ui as STOP_MANY_EXECUTIONS_MODAL_KEY } from "./constants-DPRLSskW.js";
import { n as useDebounce } from "./useDebounce-BffpVo23.js";
import { c as isEmpty } from "./typesUtils-D4N0bsbb.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { t as convertToDisplayDate } from "./dateFormatter-DIyJ5alr.js";
import { t as AnnotationTagsDropdown_ee_default } from "./AnnotationTagsDropdown.ee-ByWkBQeo.js";
//#region src/features/execution/executions/components/ConcurrentExecutionsHeader.vue?vue&type=script&setup=true&lang.ts
var ConcurrentExecutionsHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConcurrentExecutionsHeader",
	props: {
		runningExecutionsCount: {},
		concurrencyCap: {},
		isCloudDeployment: { type: Boolean },
		executions: {},
		isInitialLoad: { type: Boolean }
	},
	emits: ["goToUpgrade"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const tooltipText = computed(() => {
			let text = i18n.baseText("executionsList.activeExecutions.tooltip", { interpolate: {
				running: props.runningExecutionsCount,
				cap: props.concurrencyCap
			} });
			text += "\n" + i18n.baseText("executionsList.activeExecutions.evaluationNote");
			return text;
		});
		const shouldShowHeader = computed(() => {
			if (props.isInitialLoad) return false;
			return props.runningExecutionsCount > 0 || !hasCancellableExecutions(props.executions);
		});
		const headerText = computed(() => {
			if (props.runningExecutionsCount === 0) return i18n.baseText("executionsList.activeExecutions.none");
			return i18n.baseText("executionsList.activeExecutions.header", { interpolate: {
				running: props.runningExecutionsCount,
				cap: props.concurrencyCap
			} });
		});
		return (_ctx, _cache) => {
			return shouldShowHeader.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				"data-test-id": "concurrent-executions-header",
				class: normalizeClass(_ctx.$style.concurrentExecutionHeader)
			}, [createVNode(unref(N8nText_default), null, {
				default: withCtx(() => [createTextVNode(toDisplayString(headerText.value), 1)]),
				_: 1
			}), createVNode(unref(N8nTooltip_default), null, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tooltip) }, [createTextVNode(toDisplayString(tooltipText.value) + " ", 1), props.isCloudDeployment ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					bold: "",
					size: "small",
					class: normalizeClass(_ctx.$style.link),
					onClick: _cache[0] || (_cache[0] = ($event) => emit("goToUpgrade"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgradeNow")), 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nLink_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.link),
					href: unref(i18n).baseText("executions.concurrency.docsLink"),
					target: "_blank"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.viewDocs")), 1)]),
					_: 1
				}, 8, ["class", "href"]))], 2)]),
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "info",
					class: "ml-2xs"
				})]),
				_: 1
			})], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/ConcurrentExecutionsHeader.vue?vue&type=style&index=0&lang.module.scss
var tooltip = "_tooltip_1d5er_388";
var link = "_link_1d5er_393";
var concurrentExecutionHeader = "_concurrentExecutionHeader_1d5er_397";
var shimmer$2 = "_shimmer_1d5er_1";
var spin$2 = "_spin_1d5er_1";
var opacityPulse$2 = "_opacityPulse_1d5er_1";
var popoverIn$2 = "_popoverIn_1d5er_1";
var fadeIn$2 = "_fadeIn_1d5er_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1d5er_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1d5er_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1d5er_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1d5er_1";
var blurSwapIn$2 = "_blurSwapIn_1d5er_1";
var blurSwapOut$2 = "_blurSwapOut_1d5er_1";
var pulseGlow$2 = "_pulseGlow_1d5er_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1d5er_1";
var fade$2 = "_fade_1d5er_1";
var fadeInUp$2 = "_fadeInUp_1d5er_1";
var fadeInDown$2 = "_fadeInDown_1d5er_1";
var fadeInLeft$2 = "_fadeInLeft_1d5er_1";
var fadeInRight$2 = "_fadeInRight_1d5er_1";
var fadeOut$2 = "_fadeOut_1d5er_1";
var fadeOutDown$2 = "_fadeOutDown_1d5er_1";
var fadeOutUp$2 = "_fadeOutUp_1d5er_1";
var fadeOutLeft$2 = "_fadeOutLeft_1d5er_1";
var fadeOutRight$2 = "_fadeOutRight_1d5er_1";
var ping$2 = "_ping_1d5er_1";
var blinkBackground$2 = "_blinkBackground_1d5er_1";
var typingBlink$2 = "_typingBlink_1d5er_1";
var ConcurrentExecutionsHeader_vue_vue_type_style_index_0_lang_module_default = {
	tooltip,
	link,
	concurrentExecutionHeader,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1d5er_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var ConcurrentExecutionsHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConcurrentExecutionsHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConcurrentExecutionsHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/components/ExecutionsFilter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { "data-test-id": "execution-filter-form" };
var _hoisted_2 = { for: "execution-filter-workflows" };
var _hoisted_3 = { for: "execution-filter-status" };
var _hoisted_4 = { for: "execution-filter-start-date" };
var _hoisted_5 = { for: "execution-filter-annotation-tags" };
var _hoisted_6 = { for: "execution-filter-annotation-vote" };
var _hoisted_7 = { for: "execution-filter-saved-data-key" };
var _hoisted_8 = { for: "execution-filter-saved-data-value" };
var DATE_TIME_MASK = "YYYY-MM-DD HH:mm";
var ExecutionsFilter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ExecutionsFilter",
	props: {
		workflows: { default: () => [] },
		workflowId: {},
		popoverSide: { default: "bottom" },
		popoverAlign: { default: "center" },
		teleported: {
			type: Boolean,
			default: true
		}
	},
	emits: ["filterChanged"],
	setup(__props, { emit: __emit }) {
		const settingsStore = useSettingsStore();
		const rootStore = useRootStore();
		const { debounce } = useDebounce();
		const telemetry = useTelemetry();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const props = __props;
		const emit = __emit;
		const debouncedEmit = debounce(emit, { debounceTime: 500 });
		const isCustomDataFilterTracked = ref(false);
		const isAdvancedExecutionFilterEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
		const isAnnotationFiltersEnabled = computed(() => isAdvancedExecutionFilterEnabled.value);
		const getDefaultFilter = () => ({
			status: "all",
			workflowId: "all",
			annotationTags: [],
			startDate: "",
			endDate: "",
			metadata: [{
				key: "",
				value: "",
				exactMatch: false
			}],
			vote: "all",
			workflowVersionId: "all"
		});
		const filter = reactive(getDefaultFilter());
		const workflowVersions = ref([]);
		const isLoadingVersions = ref(false);
		const hasFetchedVersions = ref(false);
		const versionFilterOptions = computed(() => {
			const options = [{
				id: "all",
				name: i18n.baseText("executionsFilter.version.all")
			}];
			for (const version of workflowVersions.value) {
				const name = version.name ?? i18n.baseText("executionDetails.versionAutosave");
				const { date, time } = convertToDisplayDate(version.createdAt);
				options.push({
					id: version.versionId,
					name: i18n.baseText("executionsFilter.version.label", { interpolate: {
						name,
						date: `${date} ${time}`
					} })
				});
			}
			return options;
		});
		function fetchVersions() {
			const workflowId = props.workflowId;
			if (!workflowId || hasFetchedVersions.value || isLoadingVersions.value) return;
			isLoadingVersions.value = true;
			makeRestApiRequest(rootStore.restApiContext, "GET", `/executions/versions/${workflowId}`).then((versions) => {
				workflowVersions.value = versions;
				hasFetchedVersions.value = true;
			}).catch(() => {}).finally(() => {
				isLoadingVersions.value = false;
			});
		}
		watch(filter, (newFilter) => {
			if (newFilter.startDate || newFilter.endDate) debouncedEmit("filterChanged", newFilter);
			else emit("filterChanged", newFilter);
		}, {
			deep: true,
			immediate: false
		});
		const statuses = computed(() => [
			{
				id: "all",
				name: i18n.baseText("executionsList.anyStatus")
			},
			{
				id: "error",
				name: i18n.baseText("executionsList.error")
			},
			{
				id: "canceled",
				name: i18n.baseText("executionsList.canceled")
			},
			{
				id: "new",
				name: i18n.baseText("executionsList.new")
			},
			{
				id: "running",
				name: i18n.baseText("executionsList.running")
			},
			{
				id: "success",
				name: i18n.baseText("executionsList.success")
			},
			{
				id: "waiting",
				name: i18n.baseText("executionsList.waiting")
			}
		]);
		const voteFilterOptions = computed(() => [
			{
				id: "all",
				name: i18n.baseText("executionsFilter.annotation.rating.all")
			},
			{
				id: "up",
				name: i18n.baseText("executionsFilter.annotation.rating.good")
			},
			{
				id: "down",
				name: i18n.baseText("executionsFilter.annotation.rating.bad")
			}
		]);
		const countSelectedFilterProps = computed(() => {
			return [
				filter.status !== "all",
				filter.workflowId !== "all" && props.workflows.length,
				!isEmpty(filter.annotationTags),
				filter.vote !== "all",
				filter.workflowVersionId !== "all",
				!isEmpty(filter.metadata),
				!!filter.startDate,
				!!filter.endDate
			].filter(Boolean).length;
		});
		const onFilterMetaChange = (index, prop, value) => {
			if (!filter.metadata[index]) filter.metadata[index] = {
				key: "",
				value: "",
				exactMatch: false
			};
			filter.metadata[index][prop] = value;
			if (!isCustomDataFilterTracked.value) {
				telemetry.track("User filtered executions with custom data");
				isCustomDataFilterTracked.value = true;
			}
			debouncedEmit("filterChanged", filter);
		};
		const onAnnotationTagsChange = () => {
			emit("filterChanged", filter);
		};
		const onFilterReset = () => {
			Object.assign(filter, getDefaultFilter());
		};
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("custom-data-filter", "upgrade-custom-data-filter");
		};
		const onExactMatchChange = (e) => {
			if (typeof e === "boolean") onFilterMetaChange(0, "exactMatch", e);
		};
		onBeforeMount(() => {
			isCustomDataFilterTracked.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				side: props.popoverSide,
				align: props.popoverAlign,
				"position-strategy": "absolute",
				width: "440px",
				"content-class": _ctx.$style["popover-content"],
				"show-arrow": "",
				"onUpdate:open": _cache[9] || (_cache[9] = ($event) => $event && fetchVersions())
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					iconOnly: "",
					icon: "funnel",
					size: "medium",
					"aria-label": unref(i18n).baseText("forms.resourceFiltersDropdown.filters"),
					active: !!countSelectedFilterProps.value,
					"data-test-id": "executions-filter-button",
					class: normalizeClass(_ctx.$style.filterButton)
				}, createSlots({ _: 2 }, [!!countSelectedFilterProps.value ? {
					name: "default",
					fn: withCtx(() => [createVNode(unref(N8nBadge_default), {
						theme: "primary",
						class: normalizeClass(["mr-4xs", _ctx.$style.filterBadge]),
						"data-test-id": "execution-filter-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(countSelectedFilterProps.value), 1)]),
						_: 1
					}, 8, ["class"])]),
					key: "0"
				} : void 0]), 1032, [
					"aria-label",
					"active",
					"class"
				])]),
				content: withCtx(() => [createBaseVNode("div", _hoisted_1, [
					__props.workflows && __props.workflows.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.group)
					}, [createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("workflows.heading")), 1), createVNode(unref(N8nSelect_default), {
						id: "execution-filter-workflows",
						modelValue: filter.workflowId,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filter.workflowId = $event),
						placeholder: unref(i18n).baseText("executionsFilter.selectWorkflow"),
						filterable: "",
						"data-test-id": "executions-filter-workflows-select",
						teleported: __props.teleported
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.workflows, (item, idx) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: idx,
								label: item.name,
								value: item.id
							}, null, 8, ["label", "value"]);
						}), 128))])]),
						_: 1
					}, 8, [
						"modelValue",
						"placeholder",
						"teleported"
					])], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createBaseVNode("label", _hoisted_3, toDisplayString(unref(i18n).baseText("executionsList.status")), 1), createVNode(unref(N8nSelect_default), {
						id: "execution-filter-status",
						modelValue: filter.status,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filter.status = $event),
						placeholder: unref(i18n).baseText("executionsFilter.selectStatus"),
						filterable: "",
						"data-test-id": "executions-filter-status-select",
						teleported: __props.teleported
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(statuses.value, (item, idx) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: idx,
								label: item.name,
								value: item.id
							}, null, 8, ["label", "value"]);
						}), 128))]),
						_: 1
					}, 8, [
						"modelValue",
						"placeholder",
						"teleported"
					])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createBaseVNode("label", _hoisted_4, toDisplayString(unref(i18n).baseText("executionsFilter.start")), 1), createBaseVNode("div", { class: normalizeClass(_ctx.$style.dates) }, [
						createVNode(unref(ElDatePicker), {
							id: "execution-filter-start-date",
							modelValue: filter.startDate,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filter.startDate = $event),
							type: "datetime",
							teleported: __props.teleported,
							format: DATE_TIME_MASK,
							placeholder: unref(i18n).baseText("executionsFilter.startDate"),
							"data-test-id": "executions-filter-start-date-picker"
						}, null, 8, [
							"modelValue",
							"teleported",
							"placeholder"
						]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.divider) }, "to", 2),
						createVNode(unref(ElDatePicker), {
							id: "execution-filter-end-date",
							modelValue: filter.endDate,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filter.endDate = $event),
							type: "datetime",
							teleported: __props.teleported,
							format: DATE_TIME_MASK,
							placeholder: unref(i18n).baseText("executionsFilter.endDate"),
							"data-test-id": "executions-filter-end-date-picker"
						}, null, 8, [
							"modelValue",
							"teleported",
							"placeholder"
						])
					], 2)], 2),
					isAnnotationFiltersEnabled.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.group)
					}, [createBaseVNode("label", _hoisted_5, toDisplayString(unref(i18n).baseText("executionsFilter.annotation.tags")), 1), createVNode(AnnotationTagsDropdown_ee_default, {
						id: "execution-filter-annotation-tags",
						modelValue: filter.annotationTags,
						"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => filter.annotationTags = $event), onAnnotationTagsChange],
						placeholder: unref(i18n).baseText("workflowOpen.filterWorkflows"),
						"create-enabled": false,
						"data-test-id": "executions-filter-annotation-tags-select"
					}, null, 8, ["modelValue", "placeholder"])], 2)) : createCommentVNode("", true),
					props.workflowId ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.group)
					}, [createVNode(unref(N8nTooltip_default), { placement: "right" }, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsFilter.version.hint")), 1)]),
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass([_ctx.$style.label, _ctx.$style.savedDataLabel]) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("executionsFilter.version")), 1), createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.tooltipIcon),
							icon: "circle-help",
							size: "medium"
						}, null, 8, ["class"])], 2)]),
						_: 1
					}), createVNode(unref(N8nTooltip_default), {
						disabled: isLoadingVersions.value || versionFilterOptions.value.length > 1,
						placement: "top"
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsFilter.version.noVersions")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nSelect_default), {
							id: "execution-filter-version",
							modelValue: filter.workflowVersionId,
							"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => filter.workflowVersionId = $event),
							placeholder: unref(i18n).baseText("executionsFilter.version.select"),
							filterable: "",
							disabled: isLoadingVersions.value || versionFilterOptions.value.length <= 1,
							"data-test-id": "executions-filter-version-select",
							teleported: __props.teleported
						}, createSlots({
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(versionFilterOptions.value, (item, idx) => {
								return openBlock(), createBlock(unref(N8nOption_default), {
									key: idx,
									label: item.name,
									value: item.id
								}, null, 8, ["label", "value"]);
							}), 128))]),
							_: 2
						}, [isLoadingVersions.value ? {
							name: "prefix",
							fn: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "spinner",
								spin: ""
							})]),
							key: "0"
						} : void 0]), 1032, [
							"modelValue",
							"placeholder",
							"disabled",
							"teleported"
						])]),
						_: 1
					}, 8, ["disabled"])], 2)) : createCommentVNode("", true),
					isAnnotationFiltersEnabled.value ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.group)
					}, [createBaseVNode("label", _hoisted_6, toDisplayString(unref(i18n).baseText("executionsFilter.annotation.rating")), 1), createVNode(unref(N8nSelect_default), {
						id: "execution-filter-annotation-vote",
						modelValue: filter.vote,
						"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => filter.vote = $event),
						placeholder: unref(i18n).baseText("executionsFilter.annotation.selectVoteFilter"),
						filterable: "",
						"data-test-id": "executions-filter-annotation-vote-select",
						teleported: __props.teleported
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(voteFilterOptions.value, (item, idx) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: idx,
								label: item.name,
								value: item.id
							}, null, 8, ["label", "value"]);
						}), 128))]),
						_: 1
					}, 8, [
						"modelValue",
						"placeholder",
						"teleported"
					])], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createVNode(unref(N8nTooltip_default), { placement: "right" }, {
						content: withCtx(() => [createVNode(unref(I18nT), {
							tag: "span",
							keypath: "executionsFilter.customData.docsTooltip",
							scope: "global"
						})]),
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass([_ctx.$style.label, _ctx.$style.savedDataLabel]) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("executionsFilter.savedData")), 1), createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.tooltipIcon),
							icon: "circle-help",
							size: "medium"
						}, null, 8, ["class"])], 2)]),
						_: 1
					}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.subGroup) }, [
						createBaseVNode("label", _hoisted_7, toDisplayString(unref(i18n).baseText("executionsFilter.savedDataKey")), 1),
						createVNode(unref(N8nTooltip_default), {
							disabled: isAdvancedExecutionFilterEnabled.value,
							placement: "top"
						}, {
							content: withCtx(() => [createVNode(unref(I18nT), {
								tag: "span",
								keypath: "executionsFilter.customData.inputTooltip",
								scope: "global"
							}, {
								link: withCtx(() => [createBaseVNode("a", {
									href: "#",
									"data-test-id": "executions-filter-view-plans-link",
									onClick: withModifiers(goToUpgrade, ["prevent"])
								}, toDisplayString(unref(i18n).baseText("executionsFilter.customData.inputTooltip.link")), 1)]),
								_: 1
							})]),
							default: withCtx(() => [createVNode(unref(Input_default), {
								id: "execution-filter-saved-data-key",
								name: "execution-filter-saved-data-key",
								type: "text",
								disabled: !isAdvancedExecutionFilterEnabled.value,
								placeholder: unref(i18n).baseText("executionsFilter.savedDataKeyPlaceholder"),
								"model-value": filter.metadata[0]?.key,
								"data-test-id": "execution-filter-saved-data-key-input",
								"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => onFilterMetaChange(0, "key", $event))
							}, null, 8, [
								"disabled",
								"placeholder",
								"model-value"
							])]),
							_: 1
						}, 8, ["disabled"]),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.checkboxWrapper) }, [createVNode(unref(N8nTooltip_default), {
							disabled: isAdvancedExecutionFilterEnabled.value,
							placement: "top"
						}, {
							content: withCtx(() => [createVNode(unref(I18nT), {
								tag: "span",
								keypath: "executionsFilter.customData.inputTooltip",
								scope: "global"
							}, {
								link: withCtx(() => [createBaseVNode("a", {
									href: "#",
									onClick: withModifiers(goToUpgrade, ["prevent"])
								}, toDisplayString(unref(i18n).baseText("executionsFilter.customData.inputTooltip.link")), 1)]),
								_: 1
							})]),
							default: withCtx(() => [createVNode(unref(Checkbox_default), {
								label: unref(i18n).baseText("executionsFilter.savedDataExactMatch"),
								"model-value": filter.metadata[0]?.exactMatch,
								disabled: !isAdvancedExecutionFilterEnabled.value,
								"data-test-id": "execution-filter-saved-data-exact-match-checkbox",
								"onUpdate:modelValue": onExactMatchChange
							}, null, 8, [
								"label",
								"model-value",
								"disabled"
							])]),
							_: 1
						}, 8, ["disabled"])], 2),
						createBaseVNode("label", _hoisted_8, toDisplayString(unref(i18n).baseText("executionsFilter.savedDataValue")), 1),
						createVNode(unref(N8nTooltip_default), {
							disabled: isAdvancedExecutionFilterEnabled.value,
							placement: "top"
						}, {
							content: withCtx(() => [createVNode(unref(I18nT), {
								tag: "span",
								keypath: "executionsFilter.customData.inputTooltip",
								scope: "global"
							}, {
								link: withCtx(() => [createBaseVNode("a", {
									href: "#",
									onClick: withModifiers(goToUpgrade, ["prevent"])
								}, toDisplayString(unref(i18n).baseText("executionsFilter.customData.inputTooltip.link")), 1)]),
								_: 1
							})]),
							default: withCtx(() => [createVNode(unref(Input_default), {
								id: "execution-filter-saved-data-value",
								name: "execution-filter-saved-data-value",
								type: "text",
								disabled: !isAdvancedExecutionFilterEnabled.value,
								placeholder: unref(i18n).baseText("executionsFilter.savedDataValuePlaceholder"),
								"model-value": filter.metadata[0]?.value,
								"data-test-id": "execution-filter-saved-data-value-input",
								"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => onFilterMetaChange(0, "value", $event))
							}, null, 8, [
								"disabled",
								"placeholder",
								"model-value"
							])]),
							_: 1
						}, 8, ["disabled"])
					], 2)], 2),
					!!countSelectedFilterProps.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 4,
						variant: "ghost",
						class: normalizeClass(_ctx.$style.resetBtn),
						size: "large",
						"data-test-id": "executions-filter-reset-button",
						onClick: onFilterReset
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsFilter.reset")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				])]),
				_: 1
			}, 8, [
				"side",
				"align",
				"content-class"
			]);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/ExecutionsFilter.vue?vue&type=style&index=0&lang.module.scss
var group = "_group_p4iib_388";
var label = "_label_p4iib_389";
var savedDataLabel = "_savedDataLabel_p4iib_396";
var subGroup = "_subGroup_p4iib_404";
var checkboxWrapper = "_checkboxWrapper_p4iib_412";
var dates = "_dates_p4iib_420";
var divider = "_divider_p4iib_428";
var resetBtn = "_resetBtn_p4iib_433";
var tooltipIcon = "_tooltipIcon_p4iib_438";
var filterButton = "_filterButton_p4iib_442";
var filterBadge = "_filterBadge_p4iib_445";
var shimmer$1 = "_shimmer_p4iib_1";
var spin$1 = "_spin_p4iib_1";
var opacityPulse$1 = "_opacityPulse_p4iib_1";
var popoverIn$1 = "_popoverIn_p4iib_1";
var fadeIn$1 = "_fadeIn_p4iib_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_p4iib_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_p4iib_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_p4iib_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_p4iib_1";
var blurSwapIn$1 = "_blurSwapIn_p4iib_1";
var blurSwapOut$1 = "_blurSwapOut_p4iib_1";
var pulseGlow$1 = "_pulseGlow_p4iib_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_p4iib_1";
var fade$1 = "_fade_p4iib_1";
var fadeInUp$1 = "_fadeInUp_p4iib_1";
var fadeInDown$1 = "_fadeInDown_p4iib_1";
var fadeInLeft$1 = "_fadeInLeft_p4iib_1";
var fadeInRight$1 = "_fadeInRight_p4iib_1";
var fadeOut$1 = "_fadeOut_p4iib_1";
var fadeOutDown$1 = "_fadeOutDown_p4iib_1";
var fadeOutUp$1 = "_fadeOutUp_p4iib_1";
var fadeOutLeft$1 = "_fadeOutLeft_p4iib_1";
var fadeOutRight$1 = "_fadeOutRight_p4iib_1";
var ping$1 = "_ping_p4iib_1";
var blinkBackground$1 = "_blinkBackground_p4iib_1";
var typingBlink$1 = "_typingBlink_p4iib_1";
var ExecutionsFilter_vue_vue_type_style_index_0_lang_module_default = {
	group,
	label,
	savedDataLabel,
	subGroup,
	checkboxWrapper,
	dates,
	divider,
	resetBtn,
	tooltipIcon,
	filterButton,
	filterBadge,
	"popover-content": "_popover-content_p4iib_452",
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_p4iib_1",
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
var ExecutionsFilter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ExecutionsFilter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExecutionsFilter_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-90d91e6b"]]);
//#endregion
//#region src/features/execution/executions/components/ExecutionStopAllText.vue?vue&type=script&setup=true&lang.ts
var ExecutionStopAllText_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ExecutionStopAllText",
	props: { executions: {} },
	setup(__props) {
		const props = __props;
		const uiStore = useUIStore();
		const i18n = useI18n();
		const hasCancellableExecution = computed(() => hasCancellableExecutions(props.executions));
		const telemetry = useTelemetry();
		function onStopManyExecutions() {
			telemetry.track("User initiated stop many executions");
			uiStore.openModal(STOP_MANY_EXECUTIONS_MODAL_KEY);
		}
		return (_ctx, _cache) => {
			return hasCancellableExecution.value ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.stopAll),
				size: "small",
				color: "text-base",
				onClick: onStopManyExecutions
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.stopAll")), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/ExecutionStopAllText.vue?vue&type=style&index=0&lang.module.scss
var stopAll = "_stopAll_2dfxx_388";
var shimmer = "_shimmer_2dfxx_1";
var spin = "_spin_2dfxx_1";
var opacityPulse = "_opacityPulse_2dfxx_1";
var popoverIn = "_popoverIn_2dfxx_1";
var fadeIn = "_fadeIn_2dfxx_1";
var collapsibleSlideDown = "_collapsibleSlideDown_2dfxx_1";
var collapsibleSlideUp = "_collapsibleSlideUp_2dfxx_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_2dfxx_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_2dfxx_1";
var blurSwapIn = "_blurSwapIn_2dfxx_1";
var blurSwapOut = "_blurSwapOut_2dfxx_1";
var pulseGlow = "_pulseGlow_2dfxx_1";
var pulseGlowDelayed = "_pulseGlowDelayed_2dfxx_1";
var fade = "_fade_2dfxx_1";
var fadeInUp = "_fadeInUp_2dfxx_1";
var fadeInDown = "_fadeInDown_2dfxx_1";
var fadeInLeft = "_fadeInLeft_2dfxx_1";
var fadeInRight = "_fadeInRight_2dfxx_1";
var fadeOut = "_fadeOut_2dfxx_1";
var fadeOutDown = "_fadeOutDown_2dfxx_1";
var fadeOutUp = "_fadeOutUp_2dfxx_1";
var fadeOutLeft = "_fadeOutLeft_2dfxx_1";
var fadeOutRight = "_fadeOutRight_2dfxx_1";
var ping = "_ping_2dfxx_1";
var blinkBackground = "_blinkBackground_2dfxx_1";
var typingBlink = "_typingBlink_2dfxx_1";
var ExecutionStopAllText_vue_vue_type_style_index_0_lang_module_default = {
	stopAll,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_2dfxx_1",
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
var ExecutionStopAllText_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ExecutionStopAllText_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExecutionStopAllText_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/components/ExecutionsTime.vue
var ExecutionsTime_default = /* @__PURE__ */ defineComponent({
	__name: "ExecutionsTime",
	props: { startTime: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const nowTime = ref(-1);
		const intervalTimer = ref(null);
		const time = computed(() => {
			if (!props.startTime) return "...";
			const msPassed = nowTime.value - new Date(props.startTime).getTime();
			return i18n.displayTimer(msPassed);
		});
		onMounted(() => {
			setNow();
			intervalTimer.value = setInterval(() => {
				setNow();
			}, 1e3);
		});
		onBeforeUnmount(() => {
			if (intervalTimer.value !== null) clearInterval(intervalTimer.value);
		});
		function setNow() {
			nowTime.value = (/* @__PURE__ */ new Date()).getTime();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", null, toDisplayString(time.value), 1);
		};
	}
});
//#endregion
export { ConcurrentExecutionsHeader_default as i, ExecutionStopAllText_default as n, ExecutionsFilter_default as r, ExecutionsTime_default as t };
