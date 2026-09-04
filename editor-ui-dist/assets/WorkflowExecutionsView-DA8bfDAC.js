import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, at as resolveComponent, bt as withCtx, gt as watch, j as createVNode, q as onBeforeUnmount, r as TransitionGroup, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { r as useWorkflowSaving } from "./builder.store-DisrfU0l.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nActionDropdown_default } from "./N8nActionDropdown-DC_W9Qy-.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter, o as onBeforeRouteLeave } from "./vue-router-DPnGeMd9.js";
import { D as injectWorkflowDocumentStore, Di as isComponentPublicInstance, Kr as getNodeViewTab, o as executionRetryMessage } from "./workflows.store-qP-dtzSs.js";
import { t as N8nSpinner_default } from "./N8nSpinner-Bv5yOPi4.js";
import { t as N8nTags_default } from "./N8nTags-Bw0YQUjA.js";
import { Ea as getResourcePermissions } from "./src-B255AdRt.js";
import "./useRootStore-CLEJA2KF.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjOArG71.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { Rr as MAIN_HEADER_TABS, no as EnterpriseEditionFeature } from "./constants-CMdL1Kzl.js";
import { n as useDebounce } from "./useDebounce-BffpVo23.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-y-0nsqzo.js";
import { t as useExecutionsStore } from "./executions.store-C_bv7G2S.js";
import { t as useInjectWorkflowId } from "./useInjectWorkflowId-DSOde93b.js";
import { a as toTime, i as toDayMonth } from "./dateFormatter-CW32wdc_.js";
import { t as useExecutionHelpers } from "./useExecutionHelpers-DfCMMI3B.js";
import { t as PrivateCredentialIcon_default } from "./PrivateCredentialIcon-DvU9tIXp.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-BvLKOmrY.js";
import { t as WorkflowExecutionsInfoAccordion_default } from "./WorkflowExecutionsInfoAccordion-B9ukQURo.js";
import { i as ConcurrentExecutionsHeader_default, n as ExecutionStopAllText_default, r as ExecutionsFilter_default, t as ExecutionsTime_default } from "./ExecutionsTime-BnpxHBM6.js";
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 2 };
var WorkflowExecutionsCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsCard",
	props: {
		execution: {},
		highlight: { type: Boolean },
		showGap: { type: Boolean },
		workflowPermissions: {}
	},
	emits: ["retryExecution", "mounted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const route = useRoute();
		const locale = useI18n();
		const executionHelpers = useExecutionHelpers();
		const settingsStore = useSettingsStore();
		const isAdvancedExecutionFilterEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
		const isAnnotationEnabled = computed(() => isAdvancedExecutionFilterEnabled.value);
		const workflowId = useInjectWorkflowId();
		const hasPrivateCredentials = computed(() => props.execution.usedPrivateCredentials === true);
		const retryExecutionActions = computed(() => [{
			id: "current-workflow",
			label: locale.baseText("executionsList.retryWithCurrentlySavedWorkflow")
		}, {
			id: "original-workflow",
			label: locale.baseText("executionsList.retryWithOriginalWorkflow")
		}]);
		const executionUIDetails = computed(() => executionHelpers.getUIDetails(props.execution));
		const isActive = computed(() => props.execution.id === route.params.executionId);
		const isRetriable = computed(() => executionHelpers.isExecutionRetriable(props.execution));
		onMounted(() => {
			emit("mounted", props.execution.id);
		});
		function onRetryMenuItemSelect(action) {
			emit("retryExecution", {
				execution: props.execution,
				command: action
			});
		}
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				["execution-card"]: true,
				[_ctx.$style.WorkflowExecutionsCard]: true,
				[_ctx.$style.active]: isActive.value,
				[_ctx.$style[executionUIDetails.value.name]]: true,
				[_ctx.$style.highlight]: __props.highlight,
				[_ctx.$style.showGap]: __props.showGap
			}) }, [createVNode(_component_RouterLink, {
				class: normalizeClass(_ctx.$style.executionLink),
				to: {
					name: unref(VIEWS).EXECUTION_PREVIEW,
					params: {
						workflowId: unref(workflowId),
						executionId: __props.execution.id
					},
					query: unref(route).query
				},
				"data-test-execution-status": executionUIDetails.value.name
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.description) }, [
					executionUIDetails.value.name === "new" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-dark",
						bold: true,
						size: "medium",
						"data-test-id": "execution-time"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(toDayMonth)(executionUIDetails.value.createdAt)) + " - " + toDisplayString(unref(locale).baseText("executionDetails.startingSoon")), 1)]),
						_: 1
					})) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-dark",
						bold: true,
						size: "medium",
						"data-test-id": "execution-time"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.startTime), 1)]),
						_: 1
					})),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.executionStatus) }, [
						executionUIDetails.value.name === "running" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
							key: 0,
							size: "small",
							class: normalizeClass([_ctx.$style.spinner, "mr-4xs"])
						}, null, 8, ["class"])) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.statusLabel),
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.label), 1)]),
							_: 1
						}, 8, ["class"]),
						_cache[0] || (_cache[0] = createTextVNode(" " + toDisplayString(" ") + " ", -1)),
						executionUIDetails.value.name === "running" && !__props.execution.stoppedAt ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							color: isActive.value ? "text-dark" : "text-base",
							size: "small",
							"data-test-id": "execution-time-in-status"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeRunning")) + " ", 1), createVNode(ExecutionsTime_default, { "start-time": __props.execution.startedAt ?? __props.execution.createdAt }, null, 8, ["start-time"])]),
							_: 1
						}, 8, ["color"])) : createCommentVNode("", true),
						executionUIDetails.value.name === "new" && __props.execution.createdAt ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							color: isActive.value ? "text-dark" : "text-base",
							size: "small"
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionDetails.at")) + " " + toDisplayString(unref(toTime)(__props.execution.createdAt)), 1)]),
							_: 1
						}, 8, ["color"])) : executionUIDetails.value.runningTime !== "" ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 3,
							color: isActive.value ? "text-dark" : "text-base",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeFinished", { interpolate: { time: executionUIDetails.value?.runningTime } })), 1)]),
							_: 1
						}, 8, ["color"])) : createCommentVNode("", true)
					], 2),
					__props.execution.mode === "retry" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nText_default), {
						color: isActive.value ? "text-dark" : "text-base",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.retry")) + " #" + toDisplayString(__props.execution.retryOf), 1)]),
						_: 1
					}, 8, ["color"])])) : createCommentVNode("", true),
					isAnnotationEnabled.value ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.annotation)
					}, [__props.execution.annotation?.vote ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.ratingIcon)
					}, [__props.execution.annotation.vote == "up" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.up),
						icon: "thumbs-up"
					}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.down),
						icon: "thumbs-down"
					}, null, 8, ["class"]))], 2)) : createCommentVNode("", true), executionUIDetails.value.tags.length > 0 ? (openBlock(), createBlock(unref(N8nTags_default), {
						key: 1,
						tags: executionUIDetails.value.tags,
						clickable: false
					}, null, 8, ["tags"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.icons) }, [
					isRetriable.value ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
						key: 0,
						class: normalizeClass([_ctx.$style.icon, _ctx.$style.retry]),
						items: retryExecutionActions.value,
						disabled: !__props.workflowPermissions.execute,
						"activator-icon": "redo-2",
						"data-test-id": "retry-execution-button",
						onSelect: onRetryMenuItemSelect
					}, null, 8, [
						"class",
						"items",
						"disabled"
					])) : createCommentVNode("", true),
					hasPrivateCredentials.value ? (openBlock(), createBlock(PrivateCredentialIcon_default, {
						key: 1,
						class: normalizeClass(_ctx.$style.icon),
						"tooltip-text": unref(locale).baseText("executions.privateCredential.tooltip"),
						"data-test-id": "execution-card-private-credential"
					}, null, 8, ["class", "tooltip-text"])) : createCommentVNode("", true),
					__props.execution.mode === "manual" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 2,
						placement: "top"
					}, {
						content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionsList.test")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass([_ctx.$style.icon, _ctx.$style.manual]),
							icon: "flask-conical"
						}, null, 8, ["class"])]),
						_: 1
					})) : createCommentVNode("", true),
					__props.execution.mode === "evaluation" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 3,
						placement: "top"
					}, {
						content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionsList.evaluation")), 1)]),
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass([_ctx.$style.icon, _ctx.$style.evaluation]),
							icon: "check-check"
						}, null, 8, ["class"])]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, [
				"class",
				"to",
				"data-test-execution-status"
			])], 2);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsCard.vue?vue&type=style&index=0&lang.module.scss
var WorkflowExecutionsCard = "_WorkflowExecutionsCard_v1yat_388";
var active = "_active_v1yat_395";
var executionStatus = "_executionStatus_v1yat_398";
var executionLink = "_executionLink_v1yat_401";
var spinner = "_spinner_v1yat_404";
var running = "_running_v1yat_404";
var statusLabel = "_statusLabel_v1yat_411";
var success = "_success_v1yat_416";
var waiting = "_waiting_v1yat_425";
var error = "_error_v1yat_431";
var unknown = "_unknown_v1yat_437";
var annotation = "_annotation_v1yat_440";
var ratingIcon = "_ratingIcon_v1yat_447";
var up = "_up_v1yat_447";
var down = "_down_v1yat_450";
var icon = "_icon_v1yat_467";
var icons = "_icons_v1yat_472";
var retry = "_retry_v1yat_487";
var manual = "_manual_v1yat_490";
var showGap = "_showGap_v1yat_495";
var shimmer$2 = "_shimmer_v1yat_1";
var spin$2 = "_spin_v1yat_404";
var opacityPulse$2 = "_opacityPulse_v1yat_1";
var popoverIn$2 = "_popoverIn_v1yat_1";
var fadeIn$2 = "_fadeIn_v1yat_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_v1yat_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_v1yat_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_v1yat_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_v1yat_1";
var blurSwapIn$2 = "_blurSwapIn_v1yat_1";
var blurSwapOut$2 = "_blurSwapOut_v1yat_1";
var pulseGlow$2 = "_pulseGlow_v1yat_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_v1yat_1";
var fade$2 = "_fade_v1yat_1";
var fadeInUp$2 = "_fadeInUp_v1yat_1";
var fadeInDown$2 = "_fadeInDown_v1yat_1";
var fadeInLeft$2 = "_fadeInLeft_v1yat_1";
var fadeInRight$2 = "_fadeInRight_v1yat_1";
var fadeOut$2 = "_fadeOut_v1yat_1";
var fadeOutDown$2 = "_fadeOutDown_v1yat_1";
var fadeOutUp$2 = "_fadeOutUp_v1yat_1";
var fadeOutLeft$2 = "_fadeOutLeft_v1yat_1";
var fadeOutRight$2 = "_fadeOutRight_v1yat_1";
var ping$2 = "_ping_v1yat_1";
var blinkBackground$2 = "_blinkBackground_v1yat_1";
var typingBlink$2 = "_typingBlink_v1yat_1";
var WorkflowExecutionsCard_vue_vue_type_style_index_0_lang_module_default = {
	WorkflowExecutionsCard,
	active,
	executionStatus,
	executionLink,
	"new": "_new_v1yat_404",
	spinner,
	running,
	statusLabel,
	success,
	waiting,
	error,
	unknown,
	annotation,
	ratingIcon,
	up,
	down,
	icon,
	icons,
	retry,
	manual,
	showGap,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_v1yat_1",
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
var WorkflowExecutionsCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionsCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsSidebar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "mr-l"
};
var _hoisted_2 = {
	key: 4,
	class: "mr-m"
};
var WorkflowExecutionsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsSidebar",
	props: {
		workflow: {},
		executions: {},
		loading: { type: Boolean },
		loadingMore: { type: Boolean },
		hasMore: { type: Boolean },
		temporaryExecution: {}
	},
	emits: [
		"retryExecution",
		"loadMore",
		"filterUpdated",
		"update:autoRefresh",
		"execution:stopMany"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const executionsStore = useExecutionsStore();
		const settingsStore = useSettingsStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const autoScrollDeps = ref({
			activeExecutionSet: false,
			cardsMounted: false,
			scroll: true
		});
		const currentWorkflowExecutionsCardRefs = ref({});
		const executionListRef = ref(null);
		const loadMoreSentinel = ref(null);
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: executionListRef,
			threshold: .01,
			onIntersect: () => emit("loadMore", 20)
		});
		watch([
			loadMoreSentinel,
			() => props.hasMore,
			() => props.loadingMore,
			() => props.executions.length
		], ([sentinel, hasMore, loadingMore]) => {
			if (sentinel && hasMore && !loadingMore) observeForLoadMore(sentinel);
		}, {
			immediate: true,
			flush: "post"
		});
		const workflowPermissions = computed(() => getResourcePermissions(props.workflow?.scopes).workflow);
		const showConcurrencyHeader = computed(() => settingsStore.isConcurrencyEnabled && !settingsStore.isQueueModeEnabled);
		watch(() => route, (to, from) => {
			if (from.name === VIEWS.EXECUTION_PREVIEW && to.name === VIEWS.EXECUTION_HOME) router.go(-1);
		});
		watch(() => executionsStore.activeExecution, (newValue, oldValue) => {
			if (newValue && newValue.id !== oldValue?.id) autoScrollDeps.value.activeExecutionSet = true;
		});
		watch(autoScrollDeps, (updatedDeps) => {
			if (Object.values(updatedDeps).every(Boolean)) scrollToActiveCard();
		}, { deep: true });
		function addCurrentWorkflowExecutionsCardRef(comp, id) {
			if (comp && isComponentPublicInstance(comp) && id) currentWorkflowExecutionsCardRefs.value[id] = comp;
		}
		function onItemMounted(id) {
			if (executionsStore.activeExecution?.id === id) {
				autoScrollDeps.value.activeExecutionSet = true;
				autoScrollDeps.value.cardsMounted = true;
			}
		}
		function onRetryExecution(payload) {
			emit("retryExecution", payload);
		}
		function onFilterChanged(filter) {
			autoScrollDeps.value.activeExecutionSet = false;
			autoScrollDeps.value.cardsMounted = false;
			autoScrollDeps.value.scroll = true;
			emit("filterUpdated", filter);
		}
		function onAutoRefreshChange(enabled) {
			emit("update:autoRefresh", enabled);
		}
		function scrollToActiveCard() {
			if (executionListRef.value && executionsStore.activeExecution && currentWorkflowExecutionsCardRefs.value[executionsStore.activeExecution.id]) {
				const cardRect = currentWorkflowExecutionsCardRefs.value[executionsStore.activeExecution.id].$el.getBoundingClientRect();
				const LIST_HEADER_OFFSET = 200;
				if (cardRect.top > executionListRef.value.offsetHeight) {
					autoScrollDeps.value.scroll = false;
					executionListRef.value.scrollTo({
						top: cardRect.top - LIST_HEADER_OFFSET,
						behavior: "smooth"
					});
				}
			}
		}
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("concurrency", "upgrade-concurrency");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(["executions-sidebar", _ctx.$style.container]),
				"data-test-id": "executions-sidebar"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.heading) }, [
					createVNode(unref(N8nHeading_default), {
						tag: "h2",
						size: "medium",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.executions")), 1)]),
						_: 1
					}),
					showConcurrencyHeader.value ? (openBlock(), createBlock(ConcurrentExecutionsHeader_default, {
						key: 0,
						"running-executions-count": unref(executionsStore).concurrentExecutionsCount,
						"concurrency-cap": unref(settingsStore).concurrency,
						"is-cloud-deployment": unref(settingsStore).isCloudDeployment,
						executions: props.executions,
						"is-initial-load": !unref(executionsStore).initialLoadComplete,
						onGoToUpgrade: goToUpgrade
					}, null, 8, [
						"running-executions-count",
						"concurrency-cap",
						"is-cloud-deployment",
						"executions",
						"is-initial-load"
					])) : createCommentVNode("", true),
					createVNode(ExecutionStopAllText_default, { executions: props.executions }, null, 8, ["executions"])
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.controls) }, [createVNode(unref(Checkbox_default), {
					modelValue: unref(executionsStore).autoRefresh,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => unref(executionsStore).autoRefresh = $event), onAutoRefreshChange],
					"data-test-id": "auto-refresh-checkbox",
					label: unref(i18n).baseText("executionsList.autoRefresh")
				}, null, 8, ["modelValue", "label"]), createVNode(ExecutionsFilter_default, {
					"popover-side": "right",
					"popover-align": "start",
					"workflow-id": props.workflow?.id,
					onFilterChanged
				}, null, 8, ["workflow-id"])], 2),
				createBaseVNode("div", {
					ref_key: "executionListRef",
					ref: executionListRef,
					class: normalizeClass(_ctx.$style.executionList),
					"data-test-id": "current-executions-list"
				}, [
					__props.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), { variant: "rect" })])) : createCommentVNode("", true),
					!__props.loading && __props.executions.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.noResultsContainer),
						"data-test-id": "execution-list-empty"
					}, [createVNode(unref(N8nText_default), {
						color: "text-base",
						size: "medium",
						align: "center"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.noResults")), 1)]),
						_: 1
					})], 2)) : __props.temporaryExecution ? (openBlock(), createBlock(WorkflowExecutionsCard_default, {
						key: 2,
						ref: (el) => addCurrentWorkflowExecutionsCardRef(el, __props.temporaryExecution?.id),
						execution: __props.temporaryExecution,
						"data-test-id": `execution-details-${__props.temporaryExecution.id}`,
						"show-gap": true,
						"workflow-permissions": workflowPermissions.value,
						onRetryExecution
					}, null, 8, [
						"execution",
						"data-test-id",
						"workflow-permissions"
					])) : createCommentVNode("", true),
					createVNode(TransitionGroup, { name: "executions-list" }, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.executions, (execution) => {
							return openBlock(), createBlock(WorkflowExecutionsCard_default, {
								key: execution.id,
								ref_for: true,
								ref: (el) => addCurrentWorkflowExecutionsCardRef(el, execution.id),
								execution,
								"workflow-permissions": workflowPermissions.value,
								"data-test-id": `execution-details-${execution.id}`,
								onRetryExecution,
								onMounted: onItemMounted
							}, null, 8, [
								"execution",
								"workflow-permissions",
								"data-test-id"
							]);
						}), 128))]),
						_: 1
					}),
					__props.executions.length && __props.hasMore ? (openBlock(), createElementBlock("div", {
						key: 3,
						ref_key: "loadMoreSentinel",
						ref: loadMoreSentinel,
						class: normalizeClass(_ctx.$style.loadMoreSentinel),
						"aria-hidden": "true",
						"data-test-id": "executions-load-more-sentinel"
					}, null, 2)) : createCommentVNode("", true),
					__props.loadingMore ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
						variant: "p",
						rows: 1
					})])) : createCommentVNode("", true)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.infoAccordion) }, [createVNode(WorkflowExecutionsInfoAccordion_default, { "initially-expanded": false })], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsSidebar.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_1k5ta_388";
var heading = "_heading_1k5ta_400";
var controls = "_controls_1k5ta_407";
var executionList = "_executionList_1k5ta_415";
var infoAccordion = "_infoAccordion_1k5ta_433";
var noResultsContainer = "_noResultsContainer_1k5ta_446";
var loadMoreSentinel = "_loadMoreSentinel_1k5ta_452";
var shimmer$1 = "_shimmer_1k5ta_1";
var spin$1 = "_spin_1k5ta_1";
var opacityPulse$1 = "_opacityPulse_1k5ta_1";
var popoverIn$1 = "_popoverIn_1k5ta_1";
var fadeIn$1 = "_fadeIn_1k5ta_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1k5ta_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1k5ta_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1k5ta_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1k5ta_1";
var blurSwapIn$1 = "_blurSwapIn_1k5ta_1";
var blurSwapOut$1 = "_blurSwapOut_1k5ta_1";
var pulseGlow$1 = "_pulseGlow_1k5ta_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1k5ta_1";
var fade$1 = "_fade_1k5ta_1";
var fadeInUp$1 = "_fadeInUp_1k5ta_1";
var fadeInDown$1 = "_fadeInDown_1k5ta_1";
var fadeInLeft$1 = "_fadeInLeft_1k5ta_1";
var fadeInRight$1 = "_fadeInRight_1k5ta_1";
var fadeOut$1 = "_fadeOut_1k5ta_1";
var fadeOutDown$1 = "_fadeOutDown_1k5ta_1";
var fadeOutUp$1 = "_fadeOutUp_1k5ta_1";
var fadeOutLeft$1 = "_fadeOutLeft_1k5ta_1";
var fadeOutRight$1 = "_fadeOutRight_1k5ta_1";
var ping$1 = "_ping_1k5ta_1";
var blinkBackground$1 = "_blinkBackground_1k5ta_1";
var typingBlink$1 = "_typingBlink_1k5ta_1";
var WorkflowExecutionsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	heading,
	controls,
	executionList,
	infoAccordion,
	noResultsContainer,
	loadMoreSentinel,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1k5ta_1",
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
var WorkflowExecutionsSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsSidebar_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-45b84926"]]);
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsList.vue?vue&type=script&setup=true&lang.ts
var WorkflowExecutionsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsList",
	props: {
		loading: {
			type: Boolean,
			default: false
		},
		workflow: {},
		executions: { default: () => [] },
		execution: {},
		loadingMore: {
			type: Boolean,
			default: false
		},
		hasMore: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"execution:delete",
		"execution:stop",
		"execution:retry",
		"update:auto-refresh",
		"update:filters",
		"load-more",
		"reload"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { promptSaveUnsavedWorkflowChanges } = useWorkflowSaving({ router: useRouter() });
		const temporaryExecution = computed(() => props.executions.find((execution) => execution.id === props.execution?.id) ? void 0 : props.execution ?? void 0);
		const hidePreview = computed(() => {
			return props.loading || !props.execution && props.executions.length;
		});
		const onDeleteCurrentExecution = () => {
			if (!props.execution?.id) return;
			emit("execution:delete", props.execution.id);
		};
		const onStopExecution = () => {
			if (!props.execution?.id) return;
			emit("execution:stop", props.execution.id);
		};
		const onRetryExecution = (payload) => {
			const loadWorkflow = payload.command === "current-workflow";
			emit("execution:retry", {
				id: payload.execution.id,
				loadWorkflow
			});
		};
		onBeforeRouteLeave(async (to, _, next) => {
			if (getNodeViewTab(to) === MAIN_HEADER_TABS.WORKFLOW) {
				next();
				return;
			}
			await promptSaveUnsavedWorkflowChanges(next);
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(WorkflowExecutionsSidebar_default, {
				executions: __props.executions,
				loading: __props.loading && !__props.executions.length,
				"loading-more": __props.loadingMore,
				"has-more": __props.hasMore,
				"temporary-execution": temporaryExecution.value,
				workflow: __props.workflow,
				"onUpdate:autoRefresh": _cache[0] || (_cache[0] = ($event) => emit("update:auto-refresh", $event)),
				onReloadExecutions: _cache[1] || (_cache[1] = ($event) => emit("reload")),
				onFilterUpdated: _cache[2] || (_cache[2] = ($event) => emit("update:filters", $event)),
				onLoadMore: _cache[3] || (_cache[3] = ($event) => emit("load-more")),
				onRetryExecution
			}, null, 8, [
				"executions",
				"loading",
				"loading-more",
				"has-more",
				"temporary-execution",
				"workflow"
			]), !hidePreview.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.content)
			}, [createVNode(_component_RouterView, {
				name: "executionPreview",
				execution: __props.execution,
				onDeleteCurrentExecution,
				onRetryExecution,
				onStopExecution
			}, null, 8, ["execution"])], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/execution/executions/components/workflow/WorkflowExecutionsList.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1rgrc_388";
var content = "_content_1rgrc_394";
var shimmer = "_shimmer_1rgrc_1";
var spin = "_spin_1rgrc_1";
var opacityPulse = "_opacityPulse_1rgrc_1";
var popoverIn = "_popoverIn_1rgrc_1";
var fadeIn = "_fadeIn_1rgrc_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1rgrc_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1rgrc_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1rgrc_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1rgrc_1";
var blurSwapIn = "_blurSwapIn_1rgrc_1";
var blurSwapOut = "_blurSwapOut_1rgrc_1";
var pulseGlow = "_pulseGlow_1rgrc_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1rgrc_1";
var fade = "_fade_1rgrc_1";
var fadeInUp = "_fadeInUp_1rgrc_1";
var fadeInDown = "_fadeInDown_1rgrc_1";
var fadeInLeft = "_fadeInLeft_1rgrc_1";
var fadeInRight = "_fadeInRight_1rgrc_1";
var fadeOut = "_fadeOut_1rgrc_1";
var fadeOutDown = "_fadeOutDown_1rgrc_1";
var fadeOutUp = "_fadeOutUp_1rgrc_1";
var fadeOutLeft = "_fadeOutLeft_1rgrc_1";
var fadeOutRight = "_fadeOutRight_1rgrc_1";
var ping = "_ping_1rgrc_1";
var blinkBackground = "_blinkBackground_1rgrc_1";
var typingBlink = "_typingBlink_1rgrc_1";
var WorkflowExecutionsList_vue_vue_type_style_index_0_lang_module_default = {
	container,
	content,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1rgrc_1",
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
var WorkflowExecutionsList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionsList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/executions/views/WorkflowExecutionsView.vue
var WorkflowExecutionsView_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionsView",
	setup(__props) {
		const executionsStore = useExecutionsStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const workflowsListStore = useWorkflowsListStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const { callDebounced } = useDebounce();
		const loading = ref(false);
		const loadingMore = ref(false);
		const workflow = ref();
		const workflowId = useInjectWorkflowId();
		const executionId = computed(() => {
			const id = route.params.executionId;
			return typeof id === "string" ? id : void 0;
		});
		const executions = computed(() => workflowId.value ? [...executionsStore.currentExecutionsByWorkflowId[workflowId.value] ?? [], ...executionsStore.executionsByWorkflowId[workflowId.value] ?? []] : []);
		const execution = computed(() => {
			const fromList = executions.value.find((e) => e.id === executionId.value);
			const current = currentExecution.value;
			if (!fromList) return current;
			if (current?.id === fromList.id && current.workflowVersionId) return {
				...fromList,
				workflowVersionId: current.workflowVersionId
			};
			return fromList;
		});
		const currentExecution = ref();
		const isNewWorkflowRoute = computed(() => {
			return route.query.new === "true";
		});
		watch(() => workflowId.value, () => {
			fetchWorkflow();
		});
		watch(() => executionId.value, async () => {
			await fetchExecution();
		});
		onMounted(async () => {
			fetchWorkflow();
			if (workflowId.value) await Promise.all([executionsStore.initialize(workflowId.value), fetchExecution()]);
			await initializeRoute();
			document.addEventListener("visibilitychange", onDocumentVisibilityChange);
		});
		onBeforeUnmount(() => {
			executionsStore.reset();
			document.removeEventListener("visibilitychange", onDocumentVisibilityChange);
		});
		async function fetchExecution() {
			if (!executionId.value) return;
			try {
				currentExecution.value = await executionsStore.fetchExecution(executionId.value);
				executionsStore.activeExecution = currentExecution.value;
			} catch (error) {
				toast.showError(error, i18n.baseText("nodeView.showError.openExecution.title"));
				return;
			}
			if (!currentExecution.value) {
				toast.showMessage({
					type: "error",
					title: i18n.baseText("openExecution.missingExeuctionId.title"),
					message: i18n.baseText("openExecution.missingExeuctionId.message")
				});
				return;
			}
		}
		function onDocumentVisibilityChange() {
			if (document.visibilityState === "hidden") executionsStore.stopAutoRefreshInterval();
			else executionsStore.startAutoRefreshInterval(workflowId.value);
		}
		async function initializeRoute() {
			if (route.name === VIEWS.EXECUTION_HOME && executions.value.length > 0 && workflow.value) await router.replace({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: workflow.value.id,
					executionId: executions.value[0].id
				},
				query: route.query
			}).catch(() => {});
		}
		function fetchWorkflow() {
			if (isNewWorkflowRoute.value || !workflowId.value) {
				workflow.value = workflowDocumentStore.value.getSnapshot();
				return;
			}
			workflow.value = workflowsListStore.workflowsById[workflowId.value] ?? workflowDocumentStore.value.getSnapshot();
		}
		async function onAutoRefreshToggle(value) {
			if (value) await executionsStore.startAutoRefreshInterval(workflowId.value);
			else executionsStore.stopAutoRefreshInterval();
		}
		async function onRefreshData() {
			if (!workflowId.value) return;
			try {
				await executionsStore.fetchExecutions({
					...executionsStore.executionsFilters,
					workflowId: workflowId.value
				});
			} catch (error) {
				if (error.errorCode === 999) toast.showMessage({
					title: i18n.baseText("executionsList.showError.refreshData.title"),
					message: error.message,
					type: "error",
					duration: 3500
				}, false);
				else toast.showError(error, i18n.baseText("executionsList.showError.refreshData.title"));
			}
		}
		async function onUpdateFilters(newFilters) {
			executionsStore.reset();
			executionsStore.setFilters(newFilters);
			await executionsStore.initialize(workflowId.value);
		}
		async function onExecutionStop(id) {
			if (!id) return;
			try {
				await executionsStore.stopCurrentExecution(id);
				toast.showMessage({
					title: i18n.baseText("executionsList.showMessage.stopExecution.title"),
					message: i18n.baseText("executionsList.showMessage.stopExecution.message", { interpolate: { activeExecutionId: id } }),
					type: "success"
				});
				await onRefreshData();
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.stopExecution.title"));
			}
		}
		async function onExecutionDelete(id) {
			if (!id) return;
			loading.value = true;
			try {
				const executionIndex = executions.value.findIndex((e) => e.id === id);
				const nextExecution = executions.value[executionIndex + 1] || executions.value[executionIndex - 1] || executions.value[0];
				await executionsStore.deleteExecutions({ ids: [id] });
				if (workflow.value) if (executions.value.length > 0) await router.replace({
					name: VIEWS.EXECUTION_PREVIEW,
					params: {
						workflowId: workflow.value.id,
						executionId: nextExecution.id
					}
				}).catch(() => {});
				else await router.replace({
					name: VIEWS.EXECUTION_HOME,
					params: { workflowId: workflow.value.id }
				});
			} catch (error) {
				loading.value = false;
				toast.showError(error, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
				return;
			}
			loading.value = false;
			toast.showMessage({
				title: i18n.baseText("executionsList.showMessage.handleDeleteSelected.title"),
				type: "success"
			});
		}
		async function onExecutionRetry(payload) {
			toast.showMessage({
				title: i18n.baseText("executionDetails.runningMessage"),
				type: "info",
				duration: 2e3
			});
			await retryExecution(payload);
			await onRefreshData();
			telemetry.track("User clicked retry execution button", {
				workflow_id: workflow.value?.id,
				execution_id: payload.id,
				retry_type: payload.loadWorkflow ? "current" : "original"
			});
		}
		async function retryExecution(payload) {
			try {
				const retryMessage = executionRetryMessage((await executionsStore.retryExecution(payload.id, payload.loadWorkflow)).status);
				if (retryMessage) toast.showMessage(retryMessage);
			} catch (error) {
				toast.showError(error, i18n.baseText("executionsList.showError.retryExecution.title"));
			}
		}
		async function onLoadMore() {
			if (!loadingMore.value) await callDebounced(loadMore, { debounceTime: 1e3 });
		}
		const hasMore = computed(() => !executionsStore.executionsFilters.status?.includes("running") && executionsStore.hasMoreExecutions);
		async function loadMore() {
			if (!hasMore.value) return;
			loadingMore.value = true;
			let lastId;
			if (executions.value.length !== 0) lastId = executions.value.slice(-1)[0].id;
			try {
				await executionsStore.fetchExecutions(executionsStore.executionsFilters, lastId);
			} catch (error) {
				loadingMore.value = false;
				toast.showError(error, i18n.baseText("executionsList.showError.loadMore.title"));
				return;
			}
			loadingMore.value = false;
		}
		return (_ctx, _cache) => {
			return workflow.value ? (openBlock(), createBlock(WorkflowExecutionsList_default, {
				key: 0,
				executions: executions.value,
				execution: execution.value,
				workflow: workflow.value,
				loading: loading.value,
				"loading-more": loadingMore.value,
				"has-more": hasMore.value,
				"onExecution:stop": onExecutionStop,
				"onExecution:delete": onExecutionDelete,
				"onExecution:retry": onExecutionRetry,
				"onUpdate:filters": onUpdateFilters,
				"onUpdate:autoRefresh": onAutoRefreshToggle,
				onLoadMore,
				onReload: onRefreshData
			}, null, 8, [
				"executions",
				"execution",
				"workflow",
				"loading",
				"loading-more",
				"has-more"
			])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { WorkflowExecutionsView_default as default };
