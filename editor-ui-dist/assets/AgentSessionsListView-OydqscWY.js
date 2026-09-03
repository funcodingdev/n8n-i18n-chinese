import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nPopover_default } from "./N8nPopover-C7WJvH2j.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as ElDatePicker } from "./date-picker-COP7YYI0.js";
import { n as ElSkeletonItem } from "./skeleton-CXSk42nF.js";
import { t as N8nActionDropdown_default } from "./N8nActionDropdown-DC_W9Qy-.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-C9wXZOiK.js";
import { t as TableBase_default } from "./TableBase-BhnVYm7H.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import { Sr as AGENT_SESSION_DETAIL_VIEW } from "./constants-DPRLSskW.js";
import { t as convertToDisplayDate } from "./dateFormatter-DIyJ5alr.js";
import { n as useAgentSessionsStore, r as defaultAgentSessionFilters, t as useThreadTitle } from "./thread-title-BweB5C81.js";
//#region src/features/agents/components/AgentSessionsFilter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "agent-sessions-filter-form" };
var _hoisted_2$1 = { for: "agent-sessions-filter-status" };
var _hoisted_3$1 = { for: "agent-sessions-filter-origin" };
var _hoisted_4$1 = { for: "agent-sessions-filter-start-date" };
var DATE_TIME_MASK = "YYYY-MM-DD HH:mm";
var AgentSessionsFilter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionsFilter",
	props: { modelValue: {} },
	emits: ["filterChanged"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const statuses = [
			{
				id: "all",
				name: i18n.baseText("agentSessions.filters.anyStatus")
			},
			{
				id: "running",
				name: i18n.baseText("agentSessions.status.running")
			},
			{
				id: "succeeded",
				name: i18n.baseText("agentSessions.status.succeeded")
			},
			{
				id: "error",
				name: i18n.baseText("agentSessions.status.error")
			},
			{
				id: "cancelled",
				name: i18n.baseText("agentSessions.status.cancelled")
			},
			{
				id: "interrupted",
				name: i18n.baseText("agentSessions.status.interrupted")
			}
		];
		const origins = [
			{
				id: "all",
				name: i18n.baseText("agentSessions.filters.anyOrigin")
			},
			{
				id: "preview",
				name: i18n.baseText("agentSessions.origin.preview")
			},
			{
				id: "instance-ai",
				name: i18n.baseText("agentSessions.origin.instanceAi")
			},
			{
				id: "mcp",
				name: i18n.baseText("agentSessions.origin.mcp")
			},
			{
				id: "sub-agent",
				name: i18n.baseText("agentSessions.origin.subAgent")
			},
			{
				id: "schedule",
				name: i18n.baseText("agentSessions.origin.schedule")
			},
			{
				id: "workflow",
				name: i18n.baseText("agentSessions.origin.workflow")
			},
			{
				id: "slack",
				name: i18n.baseText("agentSessions.origin.slack")
			},
			{
				id: "telegram",
				name: i18n.baseText("agentSessions.origin.telegram")
			},
			{
				id: "linear",
				name: i18n.baseText("agentSessions.origin.linear")
			},
			{
				id: "discord",
				name: i18n.baseText("agentSessions.origin.discord")
			}
		];
		const activeFilterCount = computed(() => [
			props.modelValue.status !== "all",
			props.modelValue.origin !== "all",
			Boolean(props.modelValue.startDate),
			Boolean(props.modelValue.endDate)
		].filter(Boolean).length);
		function updateFilter(value) {
			emit("filterChanged", {
				...props.modelValue,
				...value
			});
		}
		function reset() {
			emit("filterChanged", defaultAgentSessionFilters());
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				side: "bottom",
				align: "end",
				"position-strategy": "absolute",
				width: "calc(var(--spacing--5xl) + var(--spacing--4xl))",
				"content-class": _ctx.$style.popoverContent,
				"show-arrow": ""
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"icon-only": "",
					icon: "funnel",
					size: "medium",
					"aria-label": unref(i18n).baseText("forms.resourceFiltersDropdown.filters"),
					active: activeFilterCount.value > 0,
					"data-test-id": "agent-sessions-filter-button",
					class: normalizeClass(_ctx.$style.filterButton)
				}, createSlots({ _: 2 }, [activeFilterCount.value > 0 ? {
					name: "default",
					fn: withCtx(() => [createVNode(unref(N8nBadge_default), {
						theme: "primary",
						class: normalizeClass(_ctx.$style.filterBadge),
						"data-test-id": "agent-sessions-filter-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(activeFilterCount.value), 1)]),
						_: 1
					}, 8, ["class"])]),
					key: "0"
				} : void 0]), 1032, [
					"aria-label",
					"active",
					"class"
				])]),
				content: withCtx(() => [createBaseVNode("div", _hoisted_1$1, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createBaseVNode("label", _hoisted_2$1, toDisplayString(unref(i18n).baseText("agentSessions.filters.status")), 1), createVNode(unref(N8nSelect_default), {
						id: "agent-sessions-filter-status",
						"model-value": props.modelValue.status,
						"data-test-id": "agent-sessions-filter-status",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => updateFilter({ status: $event }))
					}, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(statuses, (status) => {
							return createVNode(unref(N8nOption_default), {
								key: status.id,
								label: status.name,
								value: status.id
							}, null, 8, ["label", "value"]);
						}), 64))]),
						_: 1
					}, 8, ["model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createBaseVNode("label", _hoisted_3$1, toDisplayString(unref(i18n).baseText("agentSessions.filters.origin")), 1), createVNode(unref(N8nSelect_default), {
						id: "agent-sessions-filter-origin",
						"model-value": props.modelValue.origin,
						"data-test-id": "agent-sessions-filter-origin",
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => updateFilter({ origin: $event }))
					}, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(origins, (origin) => {
							return createVNode(unref(N8nOption_default), {
								key: origin.id,
								label: origin.name,
								value: origin.id
							}, null, 8, ["label", "value"]);
						}), 64))]),
						_: 1
					}, 8, ["model-value"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createBaseVNode("label", _hoisted_4$1, toDisplayString(unref(i18n).baseText("agentSessions.filters.lastActivity")), 1), createBaseVNode("div", { class: normalizeClass(_ctx.$style.dates) }, [
						createVNode(unref(ElDatePicker), {
							id: "agent-sessions-filter-start-date",
							"model-value": props.modelValue.startDate,
							type: "datetime",
							format: DATE_TIME_MASK,
							placeholder: unref(i18n).baseText("agentSessions.filters.earliest"),
							"data-test-id": "agent-sessions-filter-start-date",
							onChange: _cache[2] || (_cache[2] = ($event) => updateFilter({ startDate: $event ?? "" }))
						}, null, 8, ["model-value", "placeholder"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.divider) }, toDisplayString(unref(i18n).baseText("agentSessions.filters.to")), 3),
						createVNode(unref(ElDatePicker), {
							id: "agent-sessions-filter-end-date",
							"model-value": props.modelValue.endDate,
							type: "datetime",
							format: DATE_TIME_MASK,
							placeholder: unref(i18n).baseText("agentSessions.filters.latest"),
							"data-test-id": "agent-sessions-filter-end-date",
							onChange: _cache[3] || (_cache[3] = ($event) => updateFilter({ endDate: $event ?? "" }))
						}, null, 8, ["model-value", "placeholder"])
					], 2)], 2),
					activeFilterCount.value > 0 ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "ghost",
						size: "large",
						class: normalizeClass(_ctx.$style.resetButton),
						"data-test-id": "agent-sessions-filter-reset",
						onClick: reset
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agentSessions.filters.reset")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				])]),
				_: 1
			}, 8, ["content-class"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentSessionsFilter.vue?vue&type=style&index=0&lang.module.scss
var group = "_group_59kkn_388";
var dates = "_dates_59kkn_395";
var divider = "_divider_59kkn_403";
var resetButton = "_resetButton_59kkn_408";
var filterButton = "_filterButton_59kkn_413";
var filterBadge = "_filterBadge_59kkn_417";
var popoverContent = "_popoverContent_59kkn_424";
var shimmer$1 = "_shimmer_59kkn_1";
var spin$1 = "_spin_59kkn_1";
var opacityPulse$1 = "_opacityPulse_59kkn_1";
var popoverIn$1 = "_popoverIn_59kkn_1";
var fadeIn$1 = "_fadeIn_59kkn_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_59kkn_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_59kkn_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_59kkn_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_59kkn_1";
var blurSwapIn$1 = "_blurSwapIn_59kkn_1";
var blurSwapOut$1 = "_blurSwapOut_59kkn_1";
var pulseGlow$1 = "_pulseGlow_59kkn_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_59kkn_1";
var fade$1 = "_fade_59kkn_1";
var fadeInUp$1 = "_fadeInUp_59kkn_1";
var fadeInDown$1 = "_fadeInDown_59kkn_1";
var fadeInLeft$1 = "_fadeInLeft_59kkn_1";
var fadeInRight$1 = "_fadeInRight_59kkn_1";
var fadeOut$1 = "_fadeOut_59kkn_1";
var fadeOutDown$1 = "_fadeOutDown_59kkn_1";
var fadeOutUp$1 = "_fadeOutUp_59kkn_1";
var fadeOutLeft$1 = "_fadeOutLeft_59kkn_1";
var fadeOutRight$1 = "_fadeOutRight_59kkn_1";
var ping$1 = "_ping_59kkn_1";
var blinkBackground$1 = "_blinkBackground_59kkn_1";
var typingBlink$1 = "_typingBlink_59kkn_1";
var AgentSessionsFilter_vue_vue_type_style_index_0_lang_module_default = {
	group,
	dates,
	divider,
	resetButton,
	filterButton,
	filterBadge,
	popoverContent,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_59kkn_1",
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
var AgentSessionsFilter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionsFilter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionsFilter_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-f9ba0336"]]);
//#endregion
//#region src/features/agents/views/AgentSessionsListView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-status", "onClick"];
var _hoisted_2 = {
	colspan: 5,
	style: {
		"text-align": "center",
		"padding": "var(--spacing--lg)"
	}
};
var _hoisted_3 = {
	key: 0,
	"data-test-id": "agent-sessions-empty"
};
var _hoisted_4 = { colspan: 5 };
var AgentSessionsListView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionsListView",
	props: {
		embedded: {
			type: Boolean,
			default: false
		},
		projectId: { default: void 0 },
		agentId: { default: void 0 },
		manageStoreLifecycle: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const threadTitleOf = useThreadTitle();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const message = useMessage();
		const sessionsStore = useAgentSessionsStore();
		let disposed = false;
		let managesStoreLifecycle = false;
		const projectId = computed(() => props.projectId ?? route.params.projectId);
		const agentId = computed(() => props.agentId ?? route.params.agentId);
		const hasActiveFilters = computed(() => {
			const { status, origin, startDate, endDate } = sessionsStore.filters;
			return status !== "all" || origin !== "all" || Boolean(startDate) || Boolean(endDate);
		});
		function onVisibilityChange() {
			if (document.visibilityState !== "visible" || !sessionsStore.autoRefresh) return;
			if (!projectId.value || !agentId.value) return;
			sessionsStore.refreshThreads(projectId.value, agentId.value);
		}
		onMounted(async () => {
			if (!props.manageStoreLifecycle) return;
			managesStoreLifecycle = true;
			document.addEventListener("visibilitychange", onVisibilityChange);
			if (projectId.value && agentId.value) try {
				await sessionsStore.fetchThreads(projectId.value, agentId.value);
				if (disposed) return;
				sessionsStore.startAutoRefresh();
			} catch (error) {
				if (disposed) return;
				toast.showError(error, i18n.baseText("agentSessions.showError.load"));
			}
		});
		onBeforeUnmount(() => {
			disposed = true;
			if (!managesStoreLifecycle) return;
			document.removeEventListener("visibilitychange", onVisibilityChange);
			sessionsStore.stopAutoRefresh();
		});
		function formatDate(fullDate) {
			const { date, time } = convertToDisplayDate(fullDate);
			return `${date} ${time}`;
		}
		function formatDuration(ms) {
			if (ms < 1e3) return `${ms}ms`;
			const seconds = ms / 1e3;
			return Number.isInteger(seconds) ? `${seconds}s` : `${seconds.toFixed(1)}s`;
		}
		function statusColor(status) {
			if (status === "succeeded") return "success";
			if (status === "error") return "danger";
			if (status === "running") return "text-base";
			return "warning";
		}
		function statusLabel(status) {
			switch (status) {
				case "running": return i18n.baseText("agentSessions.status.running");
				case "succeeded": return i18n.baseText("agentSessions.status.succeeded");
				case "error": return i18n.baseText("agentSessions.status.error");
				case "cancelled": return i18n.baseText("agentSessions.status.cancelled");
				case "interrupted": return i18n.baseText("agentSessions.status.interrupted");
			}
		}
		function originPresentation(thread) {
			const rawSource = thread.source?.trim();
			const source = rawSource ? rawSource.toLowerCase() : void 0;
			if (thread.parentThreadId || source === "subagent" || source === "sub-agent") return {
				icon: "bot",
				label: i18n.baseText("agentSessions.origin.subAgent")
			};
			if (thread.taskId || source === "task") return {
				icon: "clock",
				label: i18n.baseText("agentSessions.origin.schedule")
			};
			switch (source) {
				case "instance-ai": return {
					icon: "flask-conical",
					label: i18n.baseText("agentSessions.origin.instanceAi")
				};
				case "mcp": return {
					icon: "flask-conical",
					label: i18n.baseText("agentSessions.origin.mcp")
				};
				case "workflow": return {
					icon: "workflow",
					label: i18n.baseText("agentSessions.origin.workflow")
				};
				case "slack":
				case "telegram":
				case "linear":
				case "discord": return {
					icon: source,
					label: source.charAt(0).toUpperCase() + source.slice(1)
				};
				case "chat":
				case "n8n_chat":
				case void 0: return {
					icon: "flask-conical",
					label: i18n.baseText("agentSessions.origin.preview")
				};
				default: return {
					icon: "plug",
					label: rawSource ? rawSource.charAt(0).toUpperCase() + rawSource.slice(1) : ""
				};
			}
		}
		function rowActions(thread) {
			const actions = [];
			if (thread.parentThreadId && thread.parentAgentId) actions.push({
				id: "goToParentRun",
				label: i18n.baseText("agentSessions.goToParentRun"),
				icon: "arrow-up-right"
			});
			actions.push({
				id: "delete",
				label: i18n.baseText("generic.delete"),
				icon: "trash-2",
				divided: actions.length > 0
			});
			return actions;
		}
		function onViewTrace(target) {
			const routeTarget = {
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: projectId.value,
					agentId: target.agentId,
					threadId: target.threadId
				}
			};
			router.push(routeTarget);
		}
		async function onAction(actionId, thread) {
			if (actionId === "goToParentRun") {
				if (!thread.parentAgentId || !thread.parentThreadId) return;
				onViewTrace({
					agentId: thread.parentAgentId,
					threadId: thread.parentThreadId
				});
				return;
			}
			if (actionId !== "delete") return;
			if (await message.confirm(i18n.baseText("agentSessions.deleteConfirm.message"), i18n.baseText("agentSessions.deleteConfirm.headline"), {
				type: "warning",
				confirmButtonText: i18n.baseText("agentSessions.deleteConfirm.confirmButtonText"),
				cancelButtonText: ""
			}) !== "confirm") return;
			try {
				await sessionsStore.deleteThread(projectId.value, agentId.value, thread.id);
				toast.showMessage({
					title: i18n.baseText("agentSessions.showMessage.deleted"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSessions.showError.delete"));
			}
		}
		async function loadMore() {
			try {
				await sessionsStore.loadMore(projectId.value, agentId.value);
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSessions.showError.load"));
			}
		}
		function onAutoRefreshChange(enabled) {
			if (enabled) sessionsStore.startAutoRefresh();
			else sessionsStore.stopAutoRefresh();
		}
		async function onFiltersChange(value) {
			try {
				await sessionsStore.setFilters(projectId.value, agentId.value, value);
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSessions.showError.load"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.wrapper, { [_ctx.$style.embedded]: props.embedded }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.filters) }, [createVNode(unref(Checkbox_default), {
				modelValue: unref(sessionsStore).autoRefresh,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => unref(sessionsStore).autoRefresh = $event), onAutoRefreshChange],
				"data-test-id": "agent-sessions-auto-refresh-checkbox",
				label: unref(i18n).baseText("executionsList.autoRefresh")
			}, null, 8, ["modelValue", "label"]), createVNode(AgentSessionsFilter_default, {
				"model-value": unref(sessionsStore).filters,
				onFilterChanged: onFiltersChange
			}, null, 8, ["model-value"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableContainer) }, [createVNode(unref(TableBase_default), { class: normalizeClass(_ctx.$style.sessionsTable) }, {
				default: withCtx(() => [createBaseVNode("tbody", null, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(unref(sessionsStore).threads, (thread) => {
						return openBlock(), createElementBlock("tr", {
							key: thread.id,
							class: normalizeClass(_ctx.$style.clickableRow),
							"data-status": thread.status,
							"data-test-id": "agent-session-list-item",
							onClick: ($event) => onViewTrace({
								agentId: agentId.value,
								threadId: thread.id
							})
						}, [
							createBaseVNode("td", { class: normalizeClass(_ctx.$style.titleCell) }, [createBaseVNode("button", {
								type: "button",
								class: normalizeClass(_ctx.$style.sessionOpen),
								"data-test-id": "agent-session-open"
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sessionTitleRow) }, [createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.sessionTitle),
								"data-test-id": "agent-session-title"
							}, toDisplayString(unref(threadTitleOf)(thread)), 3), thread.status ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.statusRow)
							}, [createVNode(unref(N8nText_default), {
								color: statusColor(thread.status),
								size: "small",
								"data-testid": "agent-session-status-indicator"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(statusLabel(thread.status)), 1)]),
								_: 2
							}, 1032, ["color"]), thread.status !== "running" ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								color: "text-base",
								size: "small",
								"data-testid": "agent-session-status-duration"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.runningTimeFinished", { interpolate: { time: formatDuration(thread.totalDuration) } })), 1)]),
								_: 2
							}, 1024)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2)], 2)], 2),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.originCell),
								"data-test-id": "agent-session-origin"
							}, [createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.originPill),
								"data-test-id": "agent-session-origin-pill"
							}, [createVNode(unref(N8nIcon_default), {
								icon: originPresentation(thread).icon,
								size: "large"
							}, null, 8, ["icon"]), createBaseVNode("span", null, toDisplayString(originPresentation(thread).label), 1)], 2)], 2),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.dateCell),
								"data-test-id": "agent-session-updated-at"
							}, toDisplayString(formatDate(thread.updatedAt)), 3),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.tokenCell),
								"data-test-id": "agent-session-token-usage"
							}, toDisplayString((thread.totalPromptTokens + thread.totalCompletionTokens).toLocaleString()) + "t ", 3),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.actionCell),
								onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
							}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionGroup) }, [createVNode(unref(N8nActionDropdown_default), {
								items: rowActions(thread),
								"activator-icon": "ellipsis",
								"data-test-id": "agent-session-actions",
								onSelect: ($event) => onAction($event, thread)
							}, null, 8, ["items", "onSelect"])], 2)], 2)
						], 10, _hoisted_1);
					}), 128)),
					unref(sessionsStore).loading && !unref(sessionsStore).threads.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(5, (item) => {
						return createBaseVNode("tr", {
							key: item,
							class: normalizeClass(_ctx.$style.skeletonRow)
						}, [(openBlock(), createElementBlock(Fragment, null, renderList(5, (col) => {
							return createBaseVNode("td", { key: col }, [createVNode(unref(ElSkeletonItem))]);
						}), 64))], 2);
					}), 64)) : createCommentVNode("", true),
					!unref(sessionsStore).loading && !unref(sessionsStore).threads.length ? (openBlock(), createElementBlock("tr", {
						key: 1,
						class: normalizeClass(_ctx.$style.lastRow)
					}, [createBaseVNode("td", _hoisted_2, [!unref(sessionsStore).threads.length && !unref(sessionsStore).loading ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText(hasActiveFilters.value ? "agentSessions.emptyWithFilters" : "agentSessions.empty")), 1)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
					unref(sessionsStore).nextCursor ? (openBlock(), createElementBlock("tr", {
						key: 2,
						class: normalizeClass(_ctx.$style.lastRow)
					}, [createBaseVNode("td", _hoisted_4, [createVNode(unref(N8nButton_default), {
						icon: "refresh-cw",
						variant: "ghost",
						title: unref(i18n).baseText("agentSessions.loadMore"),
						label: unref(i18n).baseText("agentSessions.loadMore"),
						loading: unref(sessionsStore).loading,
						"data-test-id": "agent-sessions-load-more",
						onClick: _cache[2] || (_cache[2] = ($event) => loadMore())
					}, null, 8, [
						"title",
						"label",
						"loading"
					])])], 2)) : createCommentVNode("", true)
				])]),
				_: 1
			}, 8, ["class"])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/agents/views/AgentSessionsListView.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_1ppm3_388";
var embedded = "_embedded_1ppm3_400";
var tableContainer = "_tableContainer_1ppm3_406";
var sessionsTable = "_sessionsTable_1ppm3_413";
var filters = "_filters_1ppm3_434";
var titleCell = "_titleCell_1ppm3_440";
var sessionTitle = "_sessionTitle_1ppm3_446";
var sessionTitleRow = "_sessionTitleRow_1ppm3_457";
var statusRow = "_statusRow_1ppm3_465";
var sessionOpen = "_sessionOpen_1ppm3_472";
var originCell = "_originCell_1ppm3_489";
var dateCell = "_dateCell_1ppm3_490";
var tokenCell = "_tokenCell_1ppm3_491";
var originPill = "_originPill_1ppm3_496";
var actionCell = "_actionCell_1ppm3_517";
var actionGroup = "_actionGroup_1ppm3_524";
var clickableRow = "_clickableRow_1ppm3_531";
var skeletonRow = "_skeletonRow_1ppm3_557";
var lastRow = "_lastRow_1ppm3_561";
var shimmer = "_shimmer_1ppm3_1";
var spin = "_spin_1ppm3_1";
var opacityPulse = "_opacityPulse_1ppm3_1";
var popoverIn = "_popoverIn_1ppm3_1";
var fadeIn = "_fadeIn_1ppm3_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ppm3_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ppm3_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ppm3_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ppm3_1";
var blurSwapIn = "_blurSwapIn_1ppm3_1";
var blurSwapOut = "_blurSwapOut_1ppm3_1";
var pulseGlow = "_pulseGlow_1ppm3_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ppm3_1";
var fade = "_fade_1ppm3_1";
var fadeInUp = "_fadeInUp_1ppm3_1";
var fadeInDown = "_fadeInDown_1ppm3_1";
var fadeInLeft = "_fadeInLeft_1ppm3_1";
var fadeInRight = "_fadeInRight_1ppm3_1";
var fadeOut = "_fadeOut_1ppm3_1";
var fadeOutDown = "_fadeOutDown_1ppm3_1";
var fadeOutUp = "_fadeOutUp_1ppm3_1";
var fadeOutLeft = "_fadeOutLeft_1ppm3_1";
var fadeOutRight = "_fadeOutRight_1ppm3_1";
var ping = "_ping_1ppm3_1";
var blinkBackground = "_blinkBackground_1ppm3_1";
var typingBlink = "_typingBlink_1ppm3_1";
var AgentSessionsListView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	embedded,
	tableContainer,
	sessionsTable,
	filters,
	titleCell,
	sessionTitle,
	sessionTitleRow,
	statusRow,
	sessionOpen,
	originCell,
	dateCell,
	tokenCell,
	originPill,
	actionCell,
	actionGroup,
	clickableRow,
	skeletonRow,
	lastRow,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ppm3_1",
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
var AgentSessionsListView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionsListView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionsListView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSessionsListView_default as t };
