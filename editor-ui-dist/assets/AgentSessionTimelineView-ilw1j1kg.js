import { $d as inject, Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Bf as shallowRef, Bu as useEventListener, Cf as watch, Fu as useDocumentVisibility, Gd as createVNode, Hf as toRef, Kf as unref, Ld as computed, Md as withKeys, Nd as withModifiers, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Sd as Transition, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, W as VueMarkdown, Wd as createTextVNode, Wf as toValue, af as onBeforeUnmount, as as useRoute, cf as onUnmounted, df as provide, ep as init_shared_esm_bundler, ff as renderList, hp as normalizeStyle, ju as useActiveElement, os as useRouter, pf as renderSlot, pp as normalizeClass, qd as defineComponent, rf as nextTick, sf as onMounted, uf as openBlock, vf as useId, vp as toDisplayString, xf as useTemplateRef, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { Ac as getAgent, Ai as useAgentPermissions, Ch as AGENT_SESSION_DETAIL_VIEW, Di as useAgentTelemetry, ED as N8nText_default, FD as N8nIcon_default, FT as N8nToggle_default, Hy as useToast, Ih as createExecutionDataId, Lh as disposeExecutionDataStore, Lw as UnexpectedError, MD as Input_default, Mw as deepCopy, ND as N8nIconButton_default, OC as isRecord, OD as N8nTooltip_default, OT as N8nBreadcrumbs_default, Oh as shouldIgnoreCanvasShortcut, PD as N8nButton_default, Qf as disposeWorkflowExecutionStateStore, RD as _plugin_vue_export_helper_default, UD as useI18n, UE as N8nEmptyState_default, Ul as usePushConnectionStore, Uy as VIEWS, Wr as useAgentConfig, Xs as RunData_default, Xy as useRootStore, _m as useNDVStore, aD as N8nCallout_default, cp as disposeWorkflowDocumentStore, ec as convertToDisplayDate, ep as useWorkflowExecutionStateStore, fi as formatToolNameForDisplay, fp as useWorkflowDocumentStore, hi as resolveToolNameForDisplay, kD as truncate, kE as N8nHoverCard_default, lh as EXECUTIONS_SECTION_KEY, mm as disposeNDVStore, nE as N8nRecycleScroller_default, ny as WorkflowDocumentStoreKey, op as createWorkflowDocumentId, pi as getToolNameTranslationKey, rT as CodeBlock_default, rd as ChatSymbol, ry as WorkflowIdKey, tD as N8nCard_default, ti as useAgentProjectBreadcrumb, tu as NodeIcon_default, vD as DropdownMenu_default, xD as N8nBadge_default, xh as AGENT_BUILDER_VIEW, yd as useWorkflowNormalization, yp as useNodeTypesStore, zd as useExecutionsStore, zh as useExecutionDataStore } from "./app-DbOOaPK6.js";
import { A as convertDbMessages, C as isBudgetStopCode, M as isDelegateSubAgentTool, N as resolveSubAgentName, P as parseIntegrationActionCard, S as increasedBudgetConfig, _ as backgroundJobTimelineLabelKey, b as useAgentExecutionUpdates, c as AgentBudgetNoticeCard_default, g as backgroundJobResultLabel, j as delegateLabel, k as getThinkingDurationSec, m as AgentChatMessageAttachments_default, p as useSubAgentNames, v as AiThinkingBlock_default, y as AiReasoningBlock_default } from "./AgentChatPanel-DrWq_qEV.js";
import { n as useAgentSessionsStore, r as defaultAgentSessionFilters, t as useThreadTitle } from "./thread-title-QubiBjMS.js";
import { i as useAgentSessionLangSmithExport, n as useAgentSessionUsage, r as formatAgentUsage, s as useAgentBuilderSession, t as AgentPreviewDock_default } from "./AgentPreviewDock-Dgg1HqWn.js";
//#region src/features/agents/components/AgentSessionTimelineHeader.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var AgentSessionTimelineHeader_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelineHeader",
	props: {
		breadcrumbItems: {},
		projectIcon: {},
		sessionTitle: {},
		sessionOptions: {},
		showMetrics: { type: Boolean },
		triggerSource: {},
		triggerIcon: {},
		triggerLabel: {},
		totalTokens: {},
		totalCost: {},
		durationLabel: {},
		showLangsmithExport: { type: Boolean },
		langsmithExportLoading: { type: Boolean },
		isPreviewOpen: {
			type: Boolean,
			default: false
		},
		showPreview: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"breadcrumb-select",
		"session-select",
		"langsmith-export",
		"toggle-preview",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const tokenSpendLabel = computed(() => formatAgentUsage(props.totalTokens, props.totalCost));
		const breadcrumbItems = computed(() => props.breadcrumbItems.map((item, index) => index === 0 ? {
			...item,
			icon: props.projectIcon
		} : item));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.topBar) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.topBarLeft) }, [createVNode(unref(N8nBreadcrumbs_default), {
				items: breadcrumbItems.value,
				theme: "medium",
				onItemSelected: _cache[1] || (_cache[1] = ($event) => emit("breadcrumb-select", $event))
			}, {
				append: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.crumbSeparator),
					"aria-hidden": "true"
				}, "/", 2), createVNode(unref(DropdownMenu_default), {
					items: props.sessionOptions,
					placement: "bottom-start",
					"extra-popper-class": _ctx.$style.sessionDropdownMenu,
					"data-testid": "session-header-switcher",
					onSelect: _cache[0] || (_cache[0] = ($event) => emit("session-select", $event))
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "small",
						class: normalizeClass(_ctx.$style.switcherButton),
						"aria-label": unref(i18n).baseText("agentSessions.sessionName")
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.switcherLabel) }, toDisplayString(props.sessionTitle), 3), createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: 12
						})]),
						_: 1
					}, 8, ["class", "aria-label"])]),
					"item-label": withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sessionDropdownName) }, toDisplayString(item.label), 3)]),
					"item-trailing": withCtx(({ item }) => [item.data?.date ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.sessionDropdownDate)
					}, toDisplayString(item.data.date), 3)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["items", "extra-popper-class"])]),
				_: 1
			}, 8, ["items"])], 2), props.showMetrics || props.showPreview ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.topBarRight)
			}, [
				props.showMetrics && props.showLangsmithExport ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("agentSessions.langsmithExport.button"),
					placement: "bottom",
					"show-after": unref(500)
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "bug",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						loading: props.langsmithExportLoading,
						"aria-label": unref(i18n).baseText("agentSessions.langsmithExport.button"),
						"data-testid": "agent-session-langsmith-export",
						onClick: _cache[2] || (_cache[2] = ($event) => emit("langsmith-export"))
					}, null, 8, ["loading", "aria-label"])]),
					_: 1
				}, 8, ["content", "show-after"])) : createCommentVNode("", true),
				props.showMetrics && props.triggerSource ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.metricItem)
				}, [createVNode(unref(N8nIcon_default), {
					icon: props.triggerIcon,
					size: 12
				}, null, 8, ["icon"]), createBaseVNode("span", null, toDisplayString(props.triggerLabel), 1)], 2)) : createCommentVNode("", true),
				props.showMetrics && props.triggerSource && (tokenSpendLabel.value || props.durationLabel) ? (openBlock(), createElementBlock("span", {
					key: 2,
					class: normalizeClass(_ctx.$style.sep)
				}, " · ", 2)) : createCommentVNode("", true),
				props.showMetrics && tokenSpendLabel.value ? (openBlock(), createElementBlock("span", {
					key: 3,
					class: normalizeClass(_ctx.$style.metricItem)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "circle-dollar-sign",
					size: 12
				}), createBaseVNode("span", null, toDisplayString(tokenSpendLabel.value), 1)], 2)) : createCommentVNode("", true),
				props.showMetrics && tokenSpendLabel.value && props.durationLabel ? (openBlock(), createElementBlock("span", {
					key: 4,
					class: normalizeClass(_ctx.$style.sep)
				}, " · ", 2)) : createCommentVNode("", true),
				props.showMetrics && props.durationLabel ? (openBlock(), createElementBlock("span", {
					key: 5,
					class: normalizeClass(_ctx.$style.metricItem)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "clock",
					size: 12
				}), createBaseVNode("span", null, toDisplayString(props.durationLabel), 1)], 2)) : createCommentVNode("", true),
				props.showPreview ? (openBlock(), createBlock(unref(N8nToggle_default), {
					key: 6,
					"model-value": props.isPreviewOpen,
					variant: "ghost",
					size: "medium",
					icon: "play",
					label: unref(i18n).baseText("agents.builder.preview.button"),
					"data-testid": "agent-session-timeline-preview-btn",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("toggle-preview"))
				}, null, 8, ["model-value", "label"])) : createCommentVNode("", true),
				createVNode(unref(N8nTooltip_default), { content: unref(i18n).baseText("generic.close") }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						"icon-only": "",
						icon: "x",
						size: "medium",
						"aria-label": unref(i18n).baseText("generic.close"),
						"data-testid": "agent-session-timeline-close",
						"data-test-id": "agent-session-timeline-close",
						onClick: _cache[4] || (_cache[4] = ($event) => emit("close"))
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content"])
			], 2)) : createCommentVNode("", true)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	topBar: "_topBar_1g743_1",
	topBarLeft: "_topBarLeft_1g743_12",
	topBarRight: "_topBarRight_1g743_30",
	sep: "_sep_1g743_41",
	metricItem: "_metricItem_1g743_45",
	crumbSeparator: "_crumbSeparator_1g743_53",
	switcherButton: "_switcherButton_1g743_60",
	switcherLabel: "_switcherLabel_1g743_65",
	sessionDropdownMenu: "_sessionDropdownMenu_1g743_73",
	sessionDropdownName: "_sessionDropdownName_1g743_84",
	sessionDropdownDate: "_sessionDropdownDate_1g743_92"
} }]]);
var LOAD_SKILL_TOOL_NAME = "load_skill";
var GUARDRAIL_STOP_MESSAGE_KEYS = {
	"budget.session": "agentSessions.timeline.guardrailStop.session",
	"budget.monthly": "agentSessions.timeline.guardrailStop.monthly",
	"budget.credits": "agentSessions.timeline.guardrailStop.credits",
	"budget.freeCredits": "agentSessions.timeline.guardrailStop.freeCredits"
};
function endTimestampOf(item) {
	return item.endTimestamp ?? item.timestamp;
}
/** A `delegate_subagent` tool call — rendered as a sub-agent (bot icon) rather than a plain tool. */
function isSubAgentTimelineItem(item) {
	return item.kind === "tool" && isDelegateSubAgentTool(item.toolName);
}
function errorTextFromValue(value) {
	if (typeof value === "string" && value.length > 0) return value;
	if (isRecord(value) && typeof value.message === "string" && value.message.length > 0) return value.message;
	return "";
}
/** MCP CallToolResult stores the message in structuredContent.error or text content. */
function mcpErrorMessage(output) {
	if (isRecord(output.structuredContent)) {
		const fromStructured = errorTextFromValue(output.structuredContent.error);
		if (fromStructured) return fromStructured;
	}
	if (!Array.isArray(output.content)) return "";
	for (const block of output.content) {
		if (!isRecord(block) || block.type !== "text" || typeof block.text !== "string") continue;
		const text = block.text.trim();
		if (!text) continue;
		try {
			const parsed = JSON.parse(text);
			if (typeof parsed === "string" && parsed.length > 0) return parsed;
			if (isRecord(parsed)) {
				const fromJson = errorTextFromValue(parsed.error);
				if (fromJson) return fromJson;
			}
		} catch {
			return text;
		}
	}
	return "";
}
/**
* A tool/workflow/node call is failed when the runtime recorded an error
* outcome, or when a built-in tool returned a soft-failure payload instead
* of throwing. In-flight calls without output are not failed.
*/
function isErroredToolCallTimelineItem(item) {
	if (item.kind !== "tool" && item.kind !== "skill" && item.kind !== "workflow" && item.kind !== "node") return false;
	if (item.toolOutcome === "error") return true;
	if (item.toolOutcome === void 0 && item.toolSuccess === false) return true;
	if (!isRecord(item.toolOutput)) return false;
	const { error, status, success, ok, isError } = item.toolOutput;
	return typeof error === "string" && error.length > 0 || isRecord(error) && typeof error.message === "string" && error.message.length > 0 || status === "error" || status === "failed" || success === false || ok === false || isError === true;
}
function isErroredTimelineItem(item) {
	return item.kind === "execution-error" || isErroredToolCallTimelineItem(item);
}
/** Extracts a human-readable error message from a failed item's tool output. */
function timelineItemErrorMessage(item) {
	if (!isErroredToolCallTimelineItem(item)) return "";
	const output = item.toolOutput;
	if (!isRecord(output)) return "";
	return errorTextFromValue(output.error) || mcpErrorMessage(output);
}
var HITL_REQUEST_LABEL_KEYS = {
	approval: "agentSessions.timeline.approvalRequested",
	interaction: "agentSessions.timeline.hitlRequested",
	wait: "agentSessions.timeline.waitRequested"
};
/** Search/filter keys resolved by the label maps in the timeline panel and table. */
var HITL_REQUEST_FILTER_KEYS = {
	approval: "approval-requested",
	interaction: "hitl-requested",
	wait: "wait-requested"
};
/** Label for a suspension row. Legacy items with no request type read as an interaction. */
function hitlRequestLabelKey(requestType) {
	return HITL_REQUEST_LABEL_KEYS[requestType ?? "interaction"];
}
function hitlTimelineNameKey(item) {
	if (item.hitlRequestType !== "approval") return void 0;
	if (item.kind === "suspension") return "agentSessions.timeline.approvalRequestForTool";
	if (item.kind === "hitl-response") return "agentSessions.timeline.approvalResponseForTool";
}
function backgroundJobSignalSummary(item, i18n) {
	const labels = (item.backgroundJobSignal?.tasks ?? []).map((job) => backgroundJobResultLabel(job, i18n));
	return new Intl.ListFormat(i18n.locale, {
		style: "long",
		type: "conjunction"
	}).format(labels);
}
function executionErrorLabel(item, i18n) {
	if (item.guardrailCode) return i18n.baseText("agentSessions.timeline.guardrailStop.label");
	return i18n.baseText(item.executionStatus === "interrupted" ? "agentSessions.timeline.executionInterrupted" : "agentSessions.timeline.executionFailed");
}
function executionErrorMessage(item, i18n) {
	if (item.guardrailCode) return i18n.baseText(GUARDRAIL_STOP_MESSAGE_KEYS[item.guardrailCode] ?? "agentSessions.timeline.guardrailStop.fallback");
	if (item.content) return item.content;
	return i18n.baseText(item.executionStatus === "interrupted" ? "agentSessions.timeline.executionInterruptedFallback" : "agentSessions.timeline.executionFailedFallback");
}
function linkedToolDisplayName(item, i18n) {
	return item.hitlToolDisplayName ?? item.workflowName ?? item.nodeDisplayName ?? resolveToolNameForDisplay(item.toolName, i18n, item.toolOutput);
}
function hitlTimelineName(item, i18n) {
	const toolName = linkedToolDisplayName(item, i18n);
	const nameKey = hitlTimelineNameKey(item);
	return nameKey ? i18n.baseText(nameKey, { interpolate: { toolName } }) : toolName;
}
function timelineItemStatus(item) {
	if (item.kind === "hitl-response") {
		if (item.hitlResponseStatus === "approved") return {
			kind: "hitl-response",
			labelKey: "agentSessions.timeline.approved",
			theme: "success"
		};
		return {
			kind: "hitl-response",
			labelKey: item.hitlResponseStatus === "declined" ? "agentSessions.timeline.declined" : "agentSessions.timeline.responseReceived",
			theme: "outline"
		};
	}
	if (isErroredTimelineItem(item)) return {
		kind: "tool-error",
		labelKey: "agentSessions.timeline.error",
		theme: "danger"
	};
}
function computeIdleRanges(items) {
	const ranges = [];
	for (let i = 0; i < items.length - 1; i++) {
		const a = items[i];
		const b = items[i + 1];
		if (a.kind === "suspension" || b.kind === "suspension") continue;
		const aEnd = endTimestampOf(a);
		if (b.timestamp - aEnd > 6e5) ranges.push({
			start: aEnd,
			end: b.timestamp
		});
	}
	return ranges;
}
function itemFilterKey(item) {
	return item.kind;
}
function itemStatusFilterKey(item) {
	if (isErroredTimelineItem(item)) return "error";
	if (item.kind === "hitl-response" && (item.hitlResponseStatus === "approved" || item.hitlResponseStatus === "declined")) return item.hitlResponseStatus;
}
function matchesTimelineFilters(item, selectedFilters) {
	if (selectedFilters.size === 0 || selectedFilters.has(itemFilterKey(item))) return true;
	const statusKey = itemStatusFilterKey(item);
	return statusKey !== void 0 && selectedFilters.has(statusKey);
}
function searchableValueText(value) {
	if (value === void 0) return void 0;
	if (value === null) return "null";
	if (typeof value === "string") return value;
	if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") return String(value);
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function timelineItemSearchText(item, labelForKey) {
	const parts = [];
	parts.push(labelForKey(itemFilterKey(item)));
	if (item.kind === "execution-error" && item.executionStatus === "interrupted") parts.push(labelForKey("execution-interrupted"));
	if (item.kind === "suspension") parts.push(labelForKey(HITL_REQUEST_FILTER_KEYS[item.hitlRequestType ?? "interaction"]));
	if (item.kind === "hitl-response") parts.push(labelForKey("hitl-response"));
	if (item.hitlResponseStatus) parts.push(labelForKey(item.hitlResponseStatus));
	if (isErroredTimelineItem(item)) parts.push(labelForKey("error"));
	for (const job of item.backgroundJobSignal?.tasks ?? []) parts.push(job.title, labelForKey(`background-task-${job.status}`));
	parts.push(item.content, item.toolName, item.workflowName, item.nodeDisplayName, item.skillName, item.subAgentName, searchableValueText(item.toolInput), searchableValueText(item.toolOutput), searchableValueText(item.hitlRequest), searchableValueText(item.hitlResponse));
	if (item.toolName) parts.push(formatToolNameForDisplay(item.toolName));
	const toolKey = builtinToolLabelKey(item.toolName, item.toolOutput);
	if (toolKey) parts.push(labelForKey(toolKey));
	return parts.filter((part) => typeof part === "string").join(" ").toLowerCase();
}
function matchesSearch(item, query, labelForKey) {
	if (!query) return true;
	return timelineItemSearchText(item, labelForKey).includes(query.toLowerCase());
}
function filteredTimelineItemIndexes(items, visibleKinds, searchQuery, labelForKey) {
	return items.map((item, index) => ({
		item,
		index
	})).filter(({ item }) => matchesTimelineFilters(item, visibleKinds) && matchesSearch(item, searchQuery.trim(), labelForKey)).map(({ index }) => index);
}
function sessionBounds(items) {
	if (items.length === 0) return {
		start: 0,
		end: 1
	};
	let start = Infinity;
	let end = -Infinity;
	for (const item of items) {
		if (item.timestamp < start) start = item.timestamp;
		const e = endTimestampOf(item);
		if (e > end) end = e;
	}
	if (end <= start) end = start + 1;
	return {
		start,
		end
	};
}
var CHART_BLOCK_COLOR_MAP = {
	user: "var(--color--blue-600)",
	agent: "var(--color--purple-600)",
	skill: "var(--color--orange-600)",
	tool: "var(--color--green-600)",
	node: "var(--color--neutral-600)",
	workflow: "var(--color--pink-600)",
	"execution-error": "var(--color--red-600)",
	suspension: "var(--color--yellow-600)",
	"hitl-response": "var(--color--blue-600)",
	"background-task-signal": "var(--color--mint-600)"
};
function chartBlockColor(kind) {
	return CHART_BLOCK_COLOR_MAP[kind];
}
function builtinToolLabelKey(toolName, output) {
	return getToolNameTranslationKey(toolName, output) ?? null;
}
function formatDuration(ms) {
	if (!ms || ms <= 0) return "";
	if (ms < 1e3) return `${ms}ms`;
	if (ms < 6e4) return `${(ms / 1e3).toFixed(1)}s`;
	const minutes = Math.floor(ms / 6e4);
	const seconds = Math.floor(ms % 6e4 / 1e3);
	if (minutes < 60) return seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`;
	const hours = Math.floor(minutes / 60);
	const remMinutes = minutes % 60;
	return remMinutes > 0 ? `${hours}h ${remMinutes}m` : `${hours}h`;
}
/**
* Cast the loose API timeline shape (`Record<string, unknown> & { type }`)
* into the discriminated union used by the renderer. The backend writes
* the same producer schema both layers expect; the API type is loose so
* `useAgentThreadsApi.ts` doesn't have to import the renderer's types.
*/
function timelineEvents(exec) {
	return exec.timeline ?? [];
}
function isDeclinedToolOutput(output) {
	return isRecord(output) && output.declined === true;
}
function isApprovalRequest(value) {
	return isRecord(value) && value.type === "approval";
}
function isIntegrationActionRequest(value) {
	return isRecord(value) && value.type === "integration_action";
}
function isWaitRequest(value) {
	return isRecord(value) && value.type === "workflow_wait";
}
function toolCallOutcome(event) {
	if (event.endTime === 0) return void 0;
	return event.success ? "success" : "error";
}
function isSkillToolCall(event) {
	return event.kind === "skill" || event.name === LOAD_SKILL_TOOL_NAME;
}
function skillNameFromText(value) {
	const name = /^\[Skill: ([^\]]+)\]/m.exec(value)?.[1];
	if (!name) return void 0;
	if (!name.startsWith("\"")) return name;
	if (!name.endsWith("\"")) return name.slice(1);
	try {
		const parsed = JSON.parse(name);
		return typeof parsed === "string" ? parsed : name;
	} catch {
		return name.slice(1, -1);
	}
}
function skillNameFromOutput(output) {
	if (!isRecord(output)) return void 0;
	if (typeof output.name === "string" && output.name.length > 0) return output.name;
	if (!Array.isArray(output.value)) return void 0;
	for (const part of output.value) {
		if (!isRecord(part) || typeof part.text !== "string") continue;
		const name = skillNameFromText(part.text);
		if (name) return name;
	}
}
function skillNameFromEvent(event) {
	const outputName = skillNameFromOutput(event.output);
	if (outputName) return outputName;
	if (!isRecord(event.input)) return void 0;
	if (typeof event.input.name === "string" && event.input.name.length > 0) return event.input.name;
	return typeof event.input.skillId === "string" && event.input.skillId.length > 0 ? event.input.skillId : void 0;
}
function inferHitlRequestType(event, toolCall, legacyApprovalToolCallIds) {
	if (isApprovalRequest(event.suspendPayload)) return "approval";
	if (legacyApprovalToolCallIds.has(event.toolCallId)) return "approval";
	if (isWaitRequest(event.suspendPayload)) return "wait";
	if (event.suspendPayload !== void 0) return "interaction";
	return toolCall?.kind === "node" || toolCall?.kind === "workflow" ? "approval" : "interaction";
}
function collectLegacyApprovalToolCallIds(executions) {
	const toolCallIds = /* @__PURE__ */ new Set();
	for (const exec of executions) for (const event of timelineEvents(exec)) if (event.type === "tool-call" && isDeclinedToolOutput(event.output)) toolCallIds.add(event.toolCallId);
	return toolCallIds;
}
function hitlRequestPayload(event, toolCall, requestType) {
	if (requestType === "approval") return event.suspendPayload ?? {
		type: "approval",
		toolName: event.toolName,
		args: event.input ?? toolCall?.input
	};
	if (event.suspendPayload !== void 0 && !isIntegrationActionRequest(event.suspendPayload)) return event.suspendPayload;
	return event.input ?? toolCall?.input ?? event.suspendPayload;
}
function approvalDisplayName(payload) {
	if (!isRecord(payload) || typeof payload.displayName !== "string") return void 0;
	return payload.displayName;
}
function hitlResponseStatus(requestType, response, isLegacyResponse = false) {
	if (requestType === "approval" && isRecord(response) && typeof response.approved === "boolean") return response.approved ? "approved" : "declined";
	if (isDeclinedToolOutput(response)) return "declined";
	if (isLegacyResponse && requestType === "approval") return "approved";
	return "responded";
}
function mergeResumedToolResult(item, event) {
	if (!item || isDeclinedToolOutput(event.output)) return;
	item.toolOutput = event.output;
	item.toolOutcome = toolCallOutcome(event);
	item.toolSuccess = event.endTime === 0 ? void 0 : event.success;
	if (item.kind === "workflow") item.workflowExecutionId = event.workflowExecutionId;
}
function hitlResponseItem(context, executionId, response, timestamp, isLegacyResponse = false) {
	return {
		kind: "hitl-response",
		executionId,
		toolName: context.toolName,
		toolCallId: context.toolCallId,
		hitlRequestType: context.requestType,
		hitlResponse: response,
		hitlResponseStatus: hitlResponseStatus(context.requestType, response, isLegacyResponse),
		hitlToolDisplayName: context.toolDisplayName,
		timestamp,
		endTimestamp: timestamp,
		workflowName: context.toolCall?.workflowName,
		nodeDisplayName: context.toolCall?.nodeDisplayName
	};
}
function inputTimelineItem(input, executionId, timestamp) {
	const [message] = convertDbMessages([input]);
	if (!message) return void 0;
	return {
		kind: "user",
		executionId,
		content: message.content,
		timestamp,
		...input.author && { authorName: input.author.name },
		attachments: message.attachments?.flatMap(({ fileId, fileName, mimeType, sizeBytes }) => fileId ? [{
			id: fileId,
			fileName,
			mimeType,
			sizeBytes: sizeBytes ?? 0
		}] : [])
	};
}
function flattenExecutionsToTimelineItems(executions) {
	const items = [];
	const initialToolCalls = /* @__PURE__ */ new Map();
	const initialToolItems = /* @__PURE__ */ new Map();
	const hitlContexts = /* @__PURE__ */ new Map();
	const legacyApprovalToolCallIds = collectLegacyApprovalToolCallIds(executions);
	for (const exec of executions) {
		const isResumed = exec.hitlStatus === "resumed";
		let resumedTagUsed = false;
		const events = timelineEvents(exec);
		const timestamp = exec.startedAt ? new Date(exec.startedAt).getTime() : 0;
		let thinkingSegments = [];
		let thinkingItemIndex = items.length;
		const appendAgentItem = (event, insertAt = items.length) => {
			const showResumed = isResumed && !resumedTagUsed;
			if (showResumed) resumedTagUsed = true;
			const startTs = event.timestamp ?? 0;
			items.splice(insertAt, 0, {
				kind: "agent",
				executionId: exec.id,
				content: event.content,
				timestamp: startTs,
				endTimestamp: event.endTime && event.endTime > startTs ? event.endTime : void 0,
				resumed: showResumed,
				...thinkingSegments.length > 0 && { thinkingSegments }
			});
			thinkingSegments = [];
		};
		const flushThinking = () => {
			if (!thinkingSegments.length) return;
			appendAgentItem({
				type: "text",
				content: "",
				timestamp: thinkingSegments[0].startTime ?? timestamp,
				endTime: thinkingSegments.at(-1)?.endTime
			}, thinkingItemIndex);
		};
		if (exec.inputMessages !== void 0) {
			const steeredIds = new Set(events.filter((event) => event.type === "input").map((event) => event.messageId));
			for (const input of exec.inputMessages) {
				if (steeredIds.has(input.id)) continue;
				const item = inputTimelineItem(input, exec.id, timestamp);
				if (item) items.push(item);
			}
		} else if (exec.userMessage || exec.attachments?.length) items.push({
			kind: "user",
			executionId: exec.id,
			content: exec.userMessage ?? "",
			timestamp,
			...exec.author && { authorName: exec.author.name },
			...exec.attachments?.length && { attachments: exec.attachments }
		});
		for (const [eventIndex, event] of events.entries()) if (event.type === "background-task-signal") items.push({
			kind: "background-task-signal",
			executionId: exec.id,
			timestamp: event.timestamp,
			backgroundJobSignal: event.signal
		});
		else if (event.type === "input") {
			flushThinking();
			const input = exec.inputMessages?.find(({ id }) => id === event.messageId);
			if (!input) continue;
			const item = inputTimelineItem(input, exec.id, event.timestamp);
			if (item) items.push(item);
		} else if (event.type === "reasoning") {
			if (!event.content.trim()) continue;
			if (!thinkingSegments.length) thinkingItemIndex = items.length;
			thinkingSegments.push({
				id: `${exec.id}:reasoning:${eventIndex}`,
				content: event.content,
				startTime: event.timestamp,
				endTime: event.endTime
			});
		} else if (event.type === "text") appendAgentItem(event);
		else if (event.type === "tool-call") {
			const hitlContext = hitlContexts.get(event.toolCallId);
			if (hitlContext) {
				mergeResumedToolResult(hitlContext.toolItem, event);
				if (!hitlContext.hasExplicitResponse) items.push(hitlResponseItem(hitlContext, exec.id, event.output, event.startTime, true));
				hitlContexts.delete(event.toolCallId);
				continue;
			}
			const isWorkflow = event.kind === "workflow";
			const isNode = event.kind === "node";
			const isSkill = isSkillToolCall(event);
			if (event.toolCallId) initialToolCalls.set(event.toolCallId, event);
			const item = {
				kind: isWorkflow ? "workflow" : isNode ? "node" : isSkill ? "skill" : "tool",
				executionId: exec.id,
				toolName: event.name,
				skillName: isSkill ? skillNameFromEvent(event) : void 0,
				toolCallId: event.toolCallId,
				toolInput: event.input,
				toolOutput: event.output,
				toolOutcome: toolCallOutcome(event),
				toolSuccess: event.endTime === 0 ? void 0 : event.success,
				timestamp: event.startTime,
				endTimestamp: event.endTime || event.startTime,
				workflowId: isWorkflow ? event.workflowId : void 0,
				workflowName: isWorkflow ? event.workflowName : void 0,
				workflowExecutionId: isWorkflow ? event.workflowExecutionId : void 0,
				workflowTriggerType: isWorkflow ? event.triggerType : void 0,
				nodeType: isNode ? event.nodeType : void 0,
				nodeTypeVersion: isNode ? event.nodeTypeVersion : void 0,
				nodeDisplayName: isNode ? event.nodeDisplayName : void 0,
				nodeParameters: isNode ? event.nodeParameters : void 0
			};
			items.push(item);
			if (event.toolCallId) initialToolItems.set(event.toolCallId, item);
		} else if (event.type === "suspension") {
			const toolCall = initialToolCalls.get(event.toolCallId);
			const requestType = inferHitlRequestType(event, toolCall, legacyApprovalToolCallIds);
			const request = hitlRequestPayload(event, toolCall, requestType);
			const toolDisplayName = approvalDisplayName(request);
			if (event.toolCallId) hitlContexts.set(event.toolCallId, {
				requestType,
				toolName: event.toolName || toolCall?.name || "",
				toolCallId: event.toolCallId,
				toolCall,
				toolItem: initialToolItems.get(event.toolCallId),
				toolDisplayName,
				hasExplicitResponse: false
			});
			items.push({
				kind: "suspension",
				executionId: exec.id,
				toolName: event.toolName,
				toolCallId: event.toolCallId,
				timestamp: event.timestamp ?? 0,
				hitlRequestType: requestType,
				hitlRequest: request,
				hitlToolDisplayName: toolDisplayName,
				workflowName: toolCall?.workflowName,
				nodeDisplayName: toolCall?.nodeDisplayName
			});
		} else if (event.type === "hitl-response") {
			const hitlContext = hitlContexts.get(event.toolCallId);
			if (!hitlContext) continue;
			hitlContext.hasExplicitResponse = true;
			items.push(hitlResponseItem(hitlContext, exec.id, event.response, event.timestamp ?? 0));
		} else if (event.type === "guardrail") items.push({
			kind: "execution-error",
			executionId: exec.id,
			guardrailCode: event.code,
			timestamp: event.timestamp ?? 0
		});
		flushThinking();
		if (exec.status === "error" || exec.status === "interrupted") {
			const terminalTimestamp = exec.stoppedAt ?? exec.startedAt ?? exec.createdAt;
			items.push({
				kind: "execution-error",
				executionId: exec.id,
				executionStatus: exec.status,
				content: exec.error ?? void 0,
				timestamp: terminalTimestamp ? new Date(terminalTimestamp).getTime() : 0
			});
		}
	}
	return items;
}
//#endregion
//#region src/features/agents/session-timeline.styles.ts
function pillColors(kind) {
	switch (kind) {
		case "user": return {
			backgroundColor: "var(--color--blue-200)",
			color: "var(--color--blue-950)"
		};
		case "agent": return {
			backgroundColor: "var(--color--purple-200)",
			color: "var(--color--purple-950)"
		};
		case "skill": return {
			backgroundColor: "var(--color--orange-200)",
			color: "var(--color--orange-950)"
		};
		case "background-task-signal":
		case "subagent": return {
			backgroundColor: "var(--color--mint-200)",
			color: "var(--color--mint-950)"
		};
		case "tool": return {
			backgroundColor: "var(--color--green-200)",
			color: "var(--color--green-950)"
		};
		case "workflow": return {
			backgroundColor: "var(--color--pink-200)",
			color: "var(--color--pink-950)"
		};
		case "node": return {
			backgroundColor: "var(--color--neutral-200)",
			color: "var(--color--neutral-950)"
		};
		case "execution-error": return {
			backgroundColor: "var(--color--red-150)",
			color: "var(--text-color--danger)"
		};
		case "suspension":
		case "idle": return {
			backgroundColor: "var(--color--yellow-200)",
			color: "var(--color--yellow-950)"
		};
		case "hitl-response": return {
			backgroundColor: "var(--color--blue-200)",
			color: "var(--color--blue-950)"
		};
		default: return {
			backgroundColor: "var(--color--neutral-200)",
			color: "var(--color--neutral-950)"
		};
	}
}
/** Chart block colour for a timeline item — sub-agent delegations get a distinct hue. */
function chartBlockStyleForItem(item) {
	return { "--session-timeline-chart-block-color": isSubAgentTimelineItem(item) ? "var(--color--mint-600)" : chartBlockColor(item.kind) };
}
/**
* Background colour for the small filter-dropdown swatch (uses the chart-block
* alpha so the swatch matches the chart's bar treatment).
*/
function swatchBackground(color) {
	return `color-mix(in srgb, ${color} var(--color--session-timeline-block-bg-alpha), transparent)`;
}
//#endregion
//#region src/features/agents/components/SessionTimelinePill.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SessionTimelinePill_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SessionTimelinePill",
	props: {
		kind: {},
		label: { default: "" },
		showLabel: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const icon = computed(() => {
			switch (props.kind) {
				case "background-task-signal": return "list-checks";
				case "user": return "user";
				case "agent":
				case "subagent": return "bot";
				case "skill": return "book-open";
				case "tool": return "wrench";
				case "workflow": return "workflow";
				case "node": return "box";
				case "execution-error": return "circle-x";
				case "suspension":
				case "idle": return "clock";
				case "hitl-response": return "message-square";
				default: return "info";
			}
		});
		const iconStyle = computed(() => pillColors(props.kind));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				class: normalizeClass([_ctx.$style.pill, __props.showLabel && _ctx.$style.withLabel]),
				style: normalizeStyle(iconStyle.value)
			}, [createVNode(unref(N8nIcon_default), {
				icon: icon.value,
				size: "medium"
			}, null, 8, ["icon"]), __props.showLabel && __props.label ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.label)
			}, toDisplayString(__props.label), 3)) : createCommentVNode("", true)], 6);
		};
	}
}), [["__cssModules", { "$style": {
	pill: "_pill_186z4_1",
	withLabel: "_withLabel_186z4_11",
	label: "_label_186z4_17"
} }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineChart.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$4 = ["data-error"];
var _hoisted_2$3 = ["onMouseenter"];
var _hoisted_3$2 = [
	"data-timeline-index",
	"data-error",
	"aria-label",
	"data-selected",
	"onMouseenter",
	"onFocus",
	"onClick"
];
var SCROLL_PADDING$1 = 48;
var INSTANT_MS = 100;
var POPOVER_SHOW_DELAY_MS = 300;
var SessionTimelineChart_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SessionTimelineChart",
	props: {
		items: {},
		idleRanges: {},
		sessionStart: {},
		sessionEnd: {},
		visibleKinds: {},
		selectedIndex: {}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const carouselRef = ref(null);
		const chartRef = ref(null);
		const hasOverflow = ref(false);
		const canScrollLeft = ref(false);
		const canScrollRight = ref(false);
		const activePopover = ref(null);
		const popoverOpen = ref(false);
		const activePopoverStatus = computed(() => {
			const segment = activePopover.value?.segment;
			return segment?.kind === "event" ? timelineItemStatus(segment.item) : void 0;
		});
		let showPopoverTimer = null;
		let resizeObserver = null;
		let hoveredPopover = null;
		let focusedPopover = null;
		const segments = computed(() => {
			const out = [];
			const idles = [...props.idleRanges].sort((a, b) => a.start - b.start);
			let idleIdx = 0;
			for (let i = 0; i < props.items.length; i++) {
				const item = props.items[i];
				while (idleIdx < idles.length && idles[idleIdx].start <= item.timestamp) {
					out.push({
						kind: "idle",
						range: idles[idleIdx]
					});
					idleIdx++;
				}
				const duration = item.endTimestamp ? item.endTimestamp - item.timestamp : INSTANT_MS;
				out.push({
					kind: "event",
					item,
					index: i,
					duration
				});
			}
			while (idleIdx < idles.length) {
				out.push({
					kind: "idle",
					range: idles[idleIdx]
				});
				idleIdx++;
			}
			return out;
		});
		function isDimmed(item) {
			return !matchesTimelineFilters(item, props.visibleKinds);
		}
		function cellStyle(seg) {
			if (seg.kind === "idle") return { flex: "0 0 56px" };
			return { flex: `${Math.max(seg.duration, 1)} 1 0` };
		}
		function eventStyle(item) {
			const style = chartBlockStyleForItem(item);
			if (isDimmed(item)) {
				style.opacity = "0.15";
				style.pointerEvents = "none";
			}
			return style;
		}
		function popoverPillKind(item) {
			return isSubAgentTimelineItem(item) ? "subagent" : item.kind;
		}
		function popoverLabel(item) {
			if (isSubAgentTimelineItem(item)) return i18n.baseText("agentSessions.timeline.subAgent");
			switch (item.kind) {
				case "background-task-signal": return i18n.baseText("agents.chat.backgroundTasks.resultsReceived");
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "skill": return i18n.baseText("agentSessions.timeline.skill");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "execution-error": return executionErrorLabel(item, i18n);
				case "suspension": return i18n.baseText(hitlRequestLabelKey(item.hitlRequestType));
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				default: return "";
			}
		}
		function popoverName(item) {
			if (isSubAgentTimelineItem(item)) return item.subAgentName ?? formatToolNameForDisplay(item.toolName);
			switch (item.kind) {
				case "background-task-signal": return backgroundJobSignalSummary(item, i18n);
				case "user":
				case "agent": return truncate(item.content ?? "", 80);
				case "skill": return item.skillName ?? resolveToolNameForDisplay(item.toolName, i18n, item.toolOutput);
				case "tool": return resolveToolNameForDisplay(item.toolName, i18n, item.toolOutput);
				case "workflow": return item.workflowName ?? formatToolNameForDisplay(item.toolName);
				case "node": return item.nodeDisplayName ?? formatToolNameForDisplay(item.toolName);
				case "execution-error": return executionErrorMessage(item, i18n);
				case "suspension":
				case "hitl-response": return hitlTimelineName(item, i18n);
				default: return "";
			}
		}
		function statusLabel(item) {
			const status = timelineItemStatus(item);
			return status ? i18n.baseText(status.labelKey) : void 0;
		}
		/**
		* Real-event duration for the popover. Returns empty when the item has no
		* `endTimestamp` greater than `timestamp` — point events (user/agent text,
		* memory, suspension) and incomplete tool calls. The chart's `seg.duration`
		* applies a synthetic `INSTANT_MS` floor so point events get a visible block;
		* we deliberately don't use that here, otherwise every popover would read
		* "100ms".
		*/
		function popoverDuration(item) {
			if (!item.endTimestamp || item.endTimestamp <= item.timestamp) return "";
			return formatDuration(item.endTimestamp - item.timestamp);
		}
		function idleDuration(range) {
			return formatDuration(range.end - range.start);
		}
		function popoverTime(item) {
			if (!item.timestamp) return "";
			return convertToDisplayDate(new Date(item.timestamp).toISOString()).time;
		}
		function blockAriaLabel(item) {
			return [
				popoverLabel(item),
				popoverName(item),
				statusLabel(item)
			].filter((part) => Boolean(part)).join(", ");
		}
		function onClick(index, item) {
			if (isDimmed(item)) return;
			emit("select", index);
		}
		function showPopover(segment, event) {
			if (!(event.currentTarget instanceof HTMLElement)) return;
			const target = {
				segment,
				reference: event.currentTarget
			};
			if (event.type === "focus") focusedPopover = target;
			else hoveredPopover = target;
			clearShowPopoverTimer();
			showPopoverTimer = setTimeout(() => {
				activePopover.value = target;
				popoverOpen.value = true;
			}, POPOVER_SHOW_DELAY_MS);
		}
		function clearShowPopoverTimer() {
			if (!showPopoverTimer) return;
			clearTimeout(showPopoverTimer);
			showPopoverTimer = null;
		}
		function scrollSelectedIntoView() {
			const selectedIndex = props.selectedIndex;
			const chart = chartRef.value;
			if (selectedIndex === null || !chart) return;
			const selectedBlock = chart.querySelector(`[data-timeline-index="${selectedIndex}"]`);
			if (!selectedBlock) return;
			const blockLeft = selectedBlock.offsetLeft;
			const blockRight = blockLeft + selectedBlock.offsetWidth;
			const viewportLeft = chart.scrollLeft;
			const viewportRight = viewportLeft + chart.clientWidth;
			if (blockLeft - SCROLL_PADDING$1 < viewportLeft) chart.scrollLeft = Math.max(0, blockLeft - SCROLL_PADDING$1);
			else if (blockRight + SCROLL_PADDING$1 > viewportRight) chart.scrollLeft = blockRight + SCROLL_PADDING$1 - chart.clientWidth;
		}
		function updateScrollState() {
			const chart = chartRef.value;
			if (!chart) {
				hasOverflow.value = false;
				canScrollLeft.value = false;
				canScrollRight.value = false;
				return;
			}
			const availableWidth = carouselRef.value?.clientWidth ?? chart.clientWidth;
			const maxScrollLeft = Math.max(0, chart.scrollWidth - chart.clientWidth);
			hasOverflow.value = chart.scrollWidth - availableWidth > 1;
			canScrollLeft.value = hasOverflow.value && chart.scrollLeft > 1;
			canScrollRight.value = hasOverflow.value && chart.scrollLeft < maxScrollLeft - 1;
		}
		function scrollChart(direction) {
			const chart = chartRef.value;
			if (!chart) return;
			const distance = Math.max(chart.clientWidth - SCROLL_PADDING$1, SCROLL_PADDING$1);
			const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
			chart.scrollBy({
				left: direction * distance,
				top: 0,
				behavior
			});
		}
		function hidePopover(event) {
			if (event.type === "blur") focusedPopover = null;
			else hoveredPopover = null;
			clearShowPopoverTimer();
			const remainingTarget = focusedPopover ?? hoveredPopover;
			if (remainingTarget) {
				activePopover.value = remainingTarget;
				popoverOpen.value = true;
				return;
			}
			popoverOpen.value = false;
			activePopover.value = null;
		}
		watch(() => props.selectedIndex, () => {
			nextTick(scrollSelectedIntoView);
		});
		watch(segments, () => {
			nextTick(updateScrollState);
		});
		onMounted(() => {
			const chart = chartRef.value;
			if (!chart) return;
			chart.addEventListener("scroll", updateScrollState, { passive: true });
			resizeObserver = new ResizeObserver(updateScrollState);
			resizeObserver.observe(chart);
			if (carouselRef.value) resizeObserver.observe(carouselRef.value);
			updateScrollState();
		});
		onBeforeUnmount(() => {
			clearShowPopoverTimer();
			chartRef.value?.removeEventListener("scroll", updateScrollState);
			resizeObserver?.disconnect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "carouselRef",
				ref: carouselRef,
				class: normalizeClass(_ctx.$style.carousel)
			}, [
				hasOverflow.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "chevron-left",
					variant: "ghost",
					size: "small",
					"aria-label": unref(i18n).baseText("agentSessions.timeline.scrollBackward"),
					disabled: !canScrollLeft.value,
					onClick: _cache[0] || (_cache[0] = ($event) => scrollChart(-1))
				}, null, 8, ["aria-label", "disabled"])) : createCommentVNode("", true),
				createBaseVNode("div", {
					ref_key: "chartRef",
					ref: chartRef,
					class: normalizeClass(_ctx.$style.chart)
				}, [createVNode(unref(N8nHoverCard_default), {
					open: popoverOpen.value,
					"hide-trigger": "",
					reference: activePopover.value?.reference,
					side: "top",
					align: "center",
					"side-offset": 8,
					"close-delay": 0,
					"max-width": "none",
					"content-class": _ctx.$style.hoverCardContent
				}, {
					content: withCtx(() => [activePopover.value?.segment.kind === "idle" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.popoverInner)
					}, [createVNode(SessionTimelinePill_default, {
						kind: "idle",
						label: unref(i18n).baseText("agentSessions.timeline.idle"),
						"show-label": ""
					}, null, 8, ["label"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.popoverMeta) }, toDisplayString(idleDuration(activePopover.value.segment.range)), 3)], 2)) : activePopover.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.popoverInner)
					}, [
						createVNode(SessionTimelinePill_default, {
							kind: popoverPillKind(activePopover.value.segment.item),
							label: popoverLabel(activePopover.value.segment.item),
							"show-label": ""
						}, null, 8, ["kind", "label"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.popoverName) }, toDisplayString(popoverName(activePopover.value.segment.item)), 3),
						activePopoverStatus.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
							key: 0,
							variant: activePopoverStatus.value.theme,
							size: "xsmall",
							"data-test-id": activePopoverStatus.value.kind === "hitl-response" ? "timeline-popover-hitl-response-badge" : activePopover.value.segment.item.kind === "execution-error" ? "timeline-popover-execution-error-badge" : "timeline-popover-tool-error-badge"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(activePopoverStatus.value.labelKey)), 1)]),
							_: 1
						}, 8, ["variant", "data-test-id"])) : createCommentVNode("", true),
						popoverDuration(activePopover.value.segment.item) ? (openBlock(), createElementBlock("span", {
							key: 1,
							class: normalizeClass(_ctx.$style.popoverMeta)
						}, toDisplayString(popoverDuration(activePopover.value.segment.item)), 3)) : createCommentVNode("", true),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.popoverMeta) }, toDisplayString(popoverTime(activePopover.value.segment.item)), 3)
					], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"open",
					"reference",
					"content-class"
				]), (openBlock(true), createElementBlock(Fragment, null, renderList(segments.value, (seg, segIdx) => {
					return openBlock(), createElementBlock("div", {
						key: segIdx,
						"data-test-id": "timeline-cell",
						"data-error": seg.kind === "event" && unref(isErroredTimelineItem)(seg.item) ? "true" : void 0,
						class: normalizeClass(_ctx.$style.cell),
						style: normalizeStyle(cellStyle(seg))
					}, [seg.kind === "idle" ? (openBlock(), createElementBlock("div", {
						key: 0,
						"data-test-id": "timeline-idle",
						class: normalizeClass(_ctx.$style.idle),
						onMouseenter: ($event) => showPopover(seg, $event),
						onMouseleave: _cache[1] || (_cache[1] = ($event) => hidePopover($event))
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.idleFill) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")), 3)], 42, _hoisted_2$3)) : (openBlock(), createElementBlock("button", {
						key: 1,
						type: "button",
						"data-test-id": "timeline-block",
						"data-timeline-index": seg.index,
						"data-error": unref(isErroredTimelineItem)(seg.item) ? "true" : void 0,
						"aria-label": blockAriaLabel(seg.item),
						class: normalizeClass([_ctx.$style.block, props.selectedIndex === seg.index && _ctx.$style.selected]),
						"data-selected": props.selectedIndex === seg.index ? "true" : void 0,
						style: normalizeStyle(eventStyle(seg.item)),
						onMouseenter: ($event) => showPopover(seg, $event),
						onMouseleave: _cache[2] || (_cache[2] = ($event) => hidePopover($event)),
						onFocus: ($event) => showPopover(seg, $event),
						onBlur: _cache[3] || (_cache[3] = ($event) => hidePopover($event)),
						onClick: ($event) => onClick(seg.index, seg.item)
					}, null, 46, _hoisted_3$2))], 14, _hoisted_1$4);
				}), 128))], 2),
				hasOverflow.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 1,
					icon: "chevron-right",
					variant: "ghost",
					size: "small",
					"aria-label": unref(i18n).baseText("agentSessions.timeline.scrollForward"),
					disabled: !canScrollRight.value,
					onClick: _cache[4] || (_cache[4] = ($event) => scrollChart(1))
				}, null, 8, ["aria-label", "disabled"])) : createCommentVNode("", true)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	carousel: "_carousel_1olun_2",
	chart: "_chart_1olun_10",
	cell: "_cell_1olun_27",
	block: "_block_1olun_53",
	selected: "_selected_1olun_53",
	idle: "_idle_1olun_57",
	idleFill: "_idleFill_1olun_68",
	hoverCardContent: "_hoverCardContent_1olun_97",
	popoverInner: "_popoverInner_1olun_110",
	popoverName: "_popoverName_1olun_118",
	popoverMeta: "_popoverMeta_1olun_124"
} }]]);
//#endregion
//#region src/features/agents/components/SessionEventFilter.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var RESET_ID = "__reset__";
var EVENTS_HEADER_ID = "__events__";
var STATUS_HEADER_ID = "__status__";
var SessionEventFilter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SessionEventFilter",
	props: {
		available: {},
		selected: {}
	},
	emits: ["update"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const menuItems = computed(() => {
			const eventOptions = props.available.filter((option) => option.presentation === "swatch");
			const statusOptions = props.available.filter((option) => option.presentation === "badge");
			const items = [];
			if (eventOptions.length > 0) {
				items.push({
					id: EVENTS_HEADER_ID,
					label: i18n.baseText("agentSessions.timeline.events"),
					header: true
				});
				items.push(...eventOptions.map(toMenuItem));
			}
			if (statusOptions.length > 0) {
				items.push({
					id: STATUS_HEADER_ID,
					label: i18n.baseText("agentSessions.timeline.status"),
					header: true
				});
				items.push(...statusOptions.map(toMenuItem));
			}
			items.push({
				id: RESET_ID,
				label: i18n.baseText("generic.reset"),
				divided: true,
				disabled: props.selected.size === 0,
				testId: "filter-clear"
			});
			return items;
		});
		function toMenuItem(option) {
			return {
				id: option.key,
				label: option.label,
				checked: props.selected.has(option.key),
				keepOpen: true,
				testId: `filter-option-${option.key}`,
				data: { option }
			};
		}
		function optionColor(option) {
			if (option.presentation === "swatch") return option.color;
			switch (option.key) {
				case "approved": return "var(--color--green-600)";
				case "error": return "var(--color--red-600)";
				default: return "var(--color--neutral-600)";
			}
		}
		function handleSelect(key) {
			if (key === RESET_ID) {
				emit("update", /* @__PURE__ */ new Set());
				return;
			}
			const next = new Set(props.selected);
			if (next.has(key)) next.delete(key);
			else next.add(key);
			emit("update", next);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				items: menuItems.value,
				placement: "bottom-end",
				onSelect: handleSelect
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					"as-child": "",
					content: unref(i18n).baseText("agentSessions.timeline.events"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						icon: "funnel",
						"icon-only": "",
						"aria-label": unref(i18n).baseText("agentSessions.timeline.events"),
						class: normalizeClass(_ctx.$style.trigger),
						"data-test-id": "filter-trigger"
					}, {
						default: withCtx(() => [props.selected.size > 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.activeIndicator),
							"aria-hidden": "true"
						}, null, 2)) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["aria-label", "class"])]),
					_: 1
				}, 8, ["content"])]),
				"item-leading": withCtx(({ item, ui }) => [item.data?.option ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.swatch, ui.class]),
					style: normalizeStyle({ backgroundColor: unref(swatchBackground)(optionColor(item.data.option)) })
				}, null, 6)) : createCommentVNode("", true)]),
				"item-label": withCtx(({ item, ui }) => [createBaseVNode("span", { class: normalizeClass(ui.class) }, [createTextVNode(toDisplayString(item.label) + " ", 1), item.data?.option ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.count)
				}, toDisplayString(item.data.option.count), 3)) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["items"]);
		};
	}
}), [["__cssModules", { "$style": {
	trigger: "_trigger_ek02j_1",
	activeIndicator: "_activeIndicator_ek02j_6",
	swatch: "_swatch_ek02j_18",
	count: "_count_ek02j_24"
} }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineRow.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$3 = ["href"];
var _hoisted_2$2 = { key: 1 };
var SessionTimelineRow_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SessionTimelineRow",
	props: {
		item: {},
		selected: { type: Boolean }
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const router = useRouter();
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const nodeType = computed(() => {
			if (props.item.kind !== "node" || !props.item.nodeType) return null;
			return nodeTypesStore.getNodeType(props.item.nodeType, props.item.nodeTypeVersion) ?? null;
		});
		const isSubAgent = computed(() => isSubAgentTimelineItem(props.item));
		const pillKind = computed(() => isSubAgent.value ? "subagent" : props.item.kind);
		const time = computed(() => {
			if (!props.item.timestamp) return "";
			return convertToDisplayDate(new Date(props.item.timestamp).toISOString()).time;
		});
		const workflowHref = computed(() => {
			if (props.item.kind !== "workflow" || !props.item.workflowId) return "";
			return router.resolve({
				name: VIEWS.WORKFLOW,
				params: { workflowId: props.item.workflowId }
			}).href;
		});
		const infoText = computed(() => {
			const it = props.item;
			switch (it.kind) {
				case "background-task-signal": return backgroundJobSignalSummary(it, i18n);
				case "user":
				case "agent": return truncate(it.content ?? "", 500);
				case "skill": return it.skillName ?? resolveToolNameForDisplay(it.toolName, i18n, it.toolOutput);
				case "tool":
					if (isSubAgent.value) return delegateLabel(i18n, it.subAgentName ?? "");
					return resolveToolNameForDisplay(it.toolName, i18n, it.toolOutput);
				case "workflow": return it.workflowName ?? formatToolNameForDisplay(it.toolName);
				case "node": return it.nodeDisplayName ?? formatToolNameForDisplay(it.toolName);
				case "execution-error": return executionErrorMessage(it, i18n);
				case "suspension":
				case "hitl-response": return hitlTimelineName(it, i18n);
				default: return "";
			}
		});
		const status = computed(() => timelineItemStatus(props.item));
		const attachmentChip = computed(() => {
			const attachments = props.item.attachments;
			if (!attachments?.length) return null;
			const extra = attachments.length - 1;
			return {
				label: extra > 0 ? `${attachments[0].fileName} +${extra}` : attachments[0].fileName,
				tooltip: attachments.map((attachment) => attachment.fileName).join(", ")
			};
		});
		const label = computed(() => {
			if (isSubAgent.value) return i18n.baseText("agentSessions.timeline.subAgent");
			switch (props.item.kind) {
				case "background-task-signal": return i18n.baseText("agents.chat.backgroundTasks.resultsReceived");
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "skill": return i18n.baseText("agentSessions.timeline.skill");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "execution-error": return executionErrorLabel(props.item, i18n);
				case "suspension": return i18n.baseText(hitlRequestLabelKey(props.item.hitlRequestType));
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				default: return "";
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.row, __props.selected && _ctx.$style.selected]),
				role: "gridcell",
				onClick: _cache[1] || (_cache[1] = ($event) => emit("select"))
			}, [
				createVNode(unref(N8nTooltip_default), {
					content: label.value,
					placement: "top"
				}, {
					default: withCtx(() => [nodeType.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.nodeIcon)
					}, [createVNode(NodeIcon_default, {
						"node-type": nodeType.value,
						size: 20
					}, null, 8, ["node-type"])], 2)) : (openBlock(), createBlock(SessionTimelinePill_default, {
						key: 1,
						kind: pillKind.value
					}, null, 8, ["kind"]))]),
					_: 1
				}, 8, ["content"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.info) }, [
					__props.item.kind === "workflow" && workflowHref.value ? (openBlock(), createElementBlock("a", {
						key: 0,
						href: workflowHref.value,
						target: "_blank",
						rel: "noopener",
						class: normalizeClass(_ctx.$style.workflowLink),
						onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
					}, toDisplayString(infoText.value), 11, _hoisted_1$3)) : (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString(infoText.value), 1)),
					status.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 2,
						class: normalizeClass(_ctx.$style.statusBadge),
						variant: status.value.theme,
						size: "xsmall",
						"data-test-id": status.value.kind === "hitl-response" ? "timeline-hitl-response-badge" : __props.item.kind === "execution-error" ? "timeline-execution-error-badge" : "timeline-tool-error-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(status.value.labelKey)), 1)]),
						_: 1
					}, 8, [
						"class",
						"variant",
						"data-test-id"
					])) : createCommentVNode("", true),
					attachmentChip.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 3,
						content: attachmentChip.value.tooltip,
						placement: "top"
					}, {
						default: withCtx(() => [createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.attachmentChip),
							"data-testid": "timeline-attachment-chip"
						}, [createVNode(unref(N8nIcon_default), {
							icon: "paperclip",
							size: "xsmall"
						}), createTextVNode(" " + toDisplayString(attachmentChip.value.label), 1)], 2)]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)
				], 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.time) }, toDisplayString(time.value), 3)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	row: "_row_bvo87_2",
	selected: "_selected_bvo87_17",
	nodeIcon: "_nodeIcon_bvo87_21",
	info: "_info_bvo87_31",
	statusBadge: "_statusBadge_bvo87_42",
	workflowLink: "_workflowLink_bvo87_52",
	attachmentChip: "_attachmentChip_bvo87_57",
	time: "_time_bvo87_74"
} }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineTable.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$2 = ["aria-label"];
var _hoisted_2$1 = [
	"data-timeline-row-id",
	"tabindex",
	"aria-selected",
	"onClick",
	"onKeydown"
];
var _hoisted_3$1 = ["data-timeline-row-id"];
var _hoisted_4$1 = ["data-timeline-row-id"];
var _hoisted_5$1 = [
	"data-timeline-row-id",
	"tabindex",
	"aria-selected",
	"onClick",
	"onKeydown"
];
var _hoisted_6$1 = ["data-timeline-row-id"];
var _hoisted_7$1 = ["data-timeline-row-id"];
var ROW_HEIGHT = 40;
var SCROLL_PADDING = 24;
var VIRTUALIZE_AFTER_ROWS = 100;
var SessionTimelineTable_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SessionTimelineTable",
	props: {
		items: {},
		selectedIndex: {},
		visibleKinds: {},
		searchQuery: {},
		idleRanges: {},
		noticeIndex: {}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const tableRef = ref(null);
		const canScrollUp = ref(false);
		const canScrollDown = ref(false);
		let scrollContainer = null;
		function labelForKey(key) {
			const backgroundJobKey = backgroundJobTimelineLabelKey(key);
			if (backgroundJobKey) return i18n.baseText(backgroundJobKey);
			switch (key) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "skill": return i18n.baseText("agentSessions.timeline.skill");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "execution-error": return i18n.baseText("agentSessions.timeline.executionFailed");
				case "execution-interrupted": return i18n.baseText("agentSessions.timeline.executionInterrupted");
				case "suspension": return i18n.baseText("agentSessions.timeline.hitlRequest");
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				case "approval-requested": return i18n.baseText("agentSessions.timeline.approvalRequested");
				case "hitl-requested": return i18n.baseText("agentSessions.timeline.hitlRequested");
				case "wait-requested": return i18n.baseText("agentSessions.timeline.waitRequested");
				case "approved": return i18n.baseText("agentSessions.timeline.approved");
				case "responded": return i18n.baseText("agentSessions.timeline.responseReceived");
				case "declined": return i18n.baseText("agentSessions.timeline.declined");
				case "error": return i18n.baseText("agentSessions.timeline.error");
				default: return key;
			}
		}
		const rows = computed(() => {
			const events = filteredTimelineItemIndexes(props.items, props.visibleKinds, props.searchQuery ?? "", labelForKey).map((index) => ({
				id: `event-${index}`,
				kind: "event",
				item: props.items[index],
				index,
				sortKey: props.items[index].timestamp
			}));
			const idles = (props.idleRanges ?? []).map((range, index) => ({
				id: `idle-${range.start}-${range.end}-${index}`,
				kind: "idle",
				range,
				sortKey: range.start
			}));
			const sorted = [...events, ...idles].sort((a, b) => a.sortKey - b.sortKey);
			const noticeIndex = props.noticeIndex;
			if (noticeIndex === null || noticeIndex === void 0) return sorted;
			const position = sorted.findIndex((row) => row.kind === "event" && row.index === noticeIndex);
			if (position === -1) return sorted;
			const anchor = sorted[position];
			sorted.splice(position + 1, 0, {
				id: `notice-${noticeIndex}`,
				kind: "notice",
				item: props.items[noticeIndex],
				sortKey: anchor.sortKey
			});
			return sorted;
		});
		const shouldVirtualizeRows = computed(() => rows.value.length > VIRTUALIZE_AFTER_ROWS);
		const tabbableEventIndex = computed(() => {
			const selectedRow = rows.value.find((row) => row.kind === "event" && row.index === props.selectedIndex);
			if (selectedRow?.kind === "event") return selectedRow.index;
			const firstEventRow = rows.value.find((row) => row.kind === "event");
			return firstEventRow?.kind === "event" ? firstEventRow.index : null;
		});
		function updateScrollMask() {
			if (!scrollContainer) {
				canScrollUp.value = false;
				canScrollDown.value = false;
				return;
			}
			canScrollUp.value = scrollContainer.scrollTop > 0;
			canScrollDown.value = scrollContainer.scrollTop + scrollContainer.clientHeight < scrollContainer.scrollHeight - 1;
		}
		function bindScrollContainer() {
			const nextScrollContainer = tableRef.value?.querySelector("[data-timeline-scroll-container]") ?? tableRef.value?.querySelector(".recycle-scroller-wrapper");
			if (nextScrollContainer === scrollContainer) return;
			scrollContainer?.removeEventListener("scroll", updateScrollMask);
			scrollContainer = nextScrollContainer ?? null;
			scrollContainer?.addEventListener("scroll", updateScrollMask, { passive: true });
			updateScrollMask();
		}
		function visibleRowElement(rowId) {
			const visibleRows = tableRef.value?.querySelectorAll("[data-timeline-row-id]");
			return Array.from(visibleRows ?? []).find((element) => element.dataset.timelineRowId === rowId);
		}
		function focusVisibleRow(rowId) {
			const rowElement = visibleRowElement(rowId);
			if (!rowElement) return false;
			rowElement.focus();
			return true;
		}
		function scrollVisibleRowIntoView(rowId) {
			if (!scrollContainer) return false;
			const rowElement = visibleRowElement(rowId);
			if (!rowElement) return false;
			const containerRect = scrollContainer.getBoundingClientRect();
			const rowRect = rowElement.getBoundingClientRect();
			if (rowRect.top - SCROLL_PADDING < containerRect.top) scrollContainer.scrollTop -= containerRect.top - rowRect.top + SCROLL_PADDING;
			else if (rowRect.bottom + SCROLL_PADDING > containerRect.bottom) scrollContainer.scrollTop += rowRect.bottom - containerRect.bottom + SCROLL_PADDING;
			return true;
		}
		function scrollRowIntoView(rowId) {
			if (!scrollContainer) return;
			if (scrollVisibleRowIntoView(rowId)) return;
			const rowIndex = rows.value.findIndex((row) => row.id === rowId);
			if (rowIndex === -1) return;
			const rowTop = rowIndex * ROW_HEIGHT;
			const rowBottom = rowTop + ROW_HEIGHT;
			const viewportTop = scrollContainer.scrollTop;
			const viewportBottom = viewportTop + scrollContainer.clientHeight;
			if (rowTop - SCROLL_PADDING < viewportTop) scrollContainer.scrollTop = Math.max(0, rowTop - SCROLL_PADDING);
			else if (rowBottom + SCROLL_PADDING > viewportBottom) scrollContainer.scrollTop = rowBottom + SCROLL_PADDING - scrollContainer.clientHeight;
			nextTick(() => {
				scrollVisibleRowIntoView(rowId);
				updateScrollMask();
			});
		}
		watch(() => rows.value.length, () => {
			nextTick(() => {
				bindScrollContainer();
				updateScrollMask();
			});
		});
		onMounted(() => {
			nextTick(bindScrollContainer);
		});
		onBeforeUnmount(() => {
			scrollContainer?.removeEventListener("scroll", updateScrollMask);
		});
		watch(() => props.selectedIndex, (selectedIndex) => {
			if (selectedIndex === null) return;
			const activeElement = document.activeElement;
			const shouldMoveFocus = activeElement instanceof HTMLElement && tableRef.value?.contains(activeElement) === true && activeElement.closest("[data-timeline-row-id]") !== null;
			const rowId = `event-${selectedIndex}`;
			nextTick(() => {
				scrollRowIntoView(rowId);
				updateScrollMask();
				if (shouldMoveFocus && !focusVisibleRow(rowId)) nextTick(() => focusVisibleRow(rowId));
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "tableRef",
				ref: tableRef,
				class: normalizeClass([
					_ctx.$style.table,
					canScrollUp.value && _ctx.$style.canScrollUp,
					canScrollDown.value && _ctx.$style.canScrollDown
				]),
				role: "grid",
				"aria-label": unref(i18n).baseText("agentSessions.timeline.events")
			}, [rows.value.length > 0 && !shouldVirtualizeRows.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.directRows),
				"data-timeline-scroll-container": "",
				role: "rowgroup"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row) => {
				return openBlock(), createElementBlock(Fragment, { key: row.id }, [row.kind === "event" ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "timeline-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.rowWrapper),
					role: "row",
					tabindex: tabbableEventIndex.value === row.index ? 0 : -1,
					"aria-selected": props.selectedIndex === row.index,
					onClick: ($event) => emit("select", row.index),
					onKeydown: [withKeys(withModifiers(($event) => emit("select", row.index), ["self", "prevent"]), ["enter"]), withKeys(withModifiers(($event) => emit("select", row.index), ["self", "prevent"]), ["space"])]
				}, [createVNode(SessionTimelineRow_default, {
					item: row.item,
					selected: props.selectedIndex === row.index
				}, null, 8, ["item", "selected"])], 42, _hoisted_2$1)) : row.kind === "notice" ? (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "timeline-notice-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.noticeRow),
					role: "row"
				}, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.noticeCell),
					role: "gridcell"
				}, [renderSlot(_ctx.$slots, "notice", { item: row.item })], 2)], 10, _hoisted_3$1)) : (openBlock(), createElementBlock("div", {
					key: 2,
					"data-test-id": "timeline-idle-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.idleRow),
					role: "row"
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.idlePill),
					role: "gridcell"
				}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")) + " · " + toDisplayString(unref(formatDuration)(row.range.end - row.range.start)), 3)], 10, _hoisted_4$1))], 64);
			}), 128))], 2)) : rows.value.length > 0 ? (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
				key: 1,
				items: rows.value,
				"item-size": ROW_HEIGHT,
				"item-key": "id",
				role: "rowgroup"
			}, {
				default: withCtx(({ item: row }) => [row.kind === "event" ? (openBlock(), createElementBlock("div", {
					key: 0,
					"data-test-id": "timeline-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.rowWrapper),
					role: "row",
					tabindex: tabbableEventIndex.value === row.index ? 0 : -1,
					"aria-selected": props.selectedIndex === row.index,
					onClick: ($event) => emit("select", row.index),
					onKeydown: [withKeys(withModifiers(($event) => emit("select", row.index), ["self", "prevent"]), ["enter"]), withKeys(withModifiers(($event) => emit("select", row.index), ["self", "prevent"]), ["space"])]
				}, [createVNode(SessionTimelineRow_default, {
					item: row.item,
					selected: props.selectedIndex === row.index
				}, null, 8, ["item", "selected"])], 42, _hoisted_5$1)) : row.kind === "notice" ? (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "timeline-notice-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.noticeRow),
					role: "row"
				}, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.noticeCell),
					role: "gridcell"
				}, [renderSlot(_ctx.$slots, "notice", { item: row.item })], 2)], 10, _hoisted_6$1)) : (openBlock(), createElementBlock("div", {
					key: 2,
					"data-test-id": "timeline-idle-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.idleRow),
					role: "row"
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.idlePill),
					role: "gridcell"
				}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")) + " · " + toDisplayString(unref(formatDuration)(row.range.end - row.range.start)), 3)], 10, _hoisted_7$1))]),
				_: 3
			}, 8, ["items"])) : (openBlock(), createElementBlock("div", {
				key: 2,
				"data-test-id": "timeline-empty",
				class: normalizeClass(_ctx.$style.empty)
			}, toDisplayString(unref(i18n).baseText("executionsLandingPage.noResults")), 3))], 10, _hoisted_1$2);
		};
	}
}), [["__cssModules", { "$style": {
	table: "_table_hdk6e_2",
	rowWrapper: "_rowWrapper_hdk6e_8",
	empty: "_empty_hdk6e_12",
	directRows: "_directRows_hdk6e_29",
	canScrollDown: "_canScrollDown_hdk6e_39",
	canScrollUp: "_canScrollUp_hdk6e_43",
	noticeRow: "_noticeRow_hdk6e_63",
	noticeCell: "_noticeCell_hdk6e_67",
	idleRow: "_idleRow_hdk6e_73",
	idlePill: "_idlePill_hdk6e_87"
} }]]);
//#endregion
//#region src/features/agents/components/RichInteractionCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = ["src", "alt"];
var RichInteractionCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "RichInteractionCard",
	props: {
		input: {},
		output: {}
	},
	setup(__props) {
		const props = __props;
		const parsed = computed(() => {
			return {
				input: props.input ?? {},
				output: props.output ?? {}
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.card) }, [
				parsed.value.input.title ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.title)
				}, toDisplayString(parsed.value.input.title), 3)) : createCommentVNode("", true),
				parsed.value.input.message ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.message)
				}, toDisplayString(parsed.value.input.message), 3)) : createCommentVNode("", true),
				parsed.value.input.components ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(parsed.value.input.components, (comp, idx) => {
					return openBlock(), createElementBlock(Fragment, { key: idx }, [comp.type === "section" && comp.text ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.section)
					}, toDisplayString(comp.text), 3)) : comp.type === "divider" ? (openBlock(), createElementBlock("hr", {
						key: 1,
						class: normalizeClass(_ctx.$style.divider)
					}, null, 2)) : comp.type === "button" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.button)
					}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.buttonPill, parsed.value.output.type === "button" && parsed.value.output.value === comp.value && _ctx.$style.buttonSelected]) }, toDisplayString(comp.label ?? comp.value), 3)], 2)) : comp.type === "select" || comp.type === "radio_select" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.selectLabel) }, toDisplayString(comp.label), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(comp.options, (opt) => {
						return openBlock(), createElementBlock("div", {
							key: opt.value,
							class: normalizeClass(_ctx.$style.selectOption)
						}, [
							createBaseVNode("span", { class: normalizeClass([_ctx.$style.optionDot, parsed.value.output.type === "select" && parsed.value.output.value === opt.value && _ctx.$style.optionSelected]) }, null, 2),
							createBaseVNode("span", null, toDisplayString(opt.label), 1),
							opt.description ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.optionDesc)
							}, toDisplayString(opt.description), 3)) : createCommentVNode("", true)
						], 2);
					}), 128))], 2)) : comp.type === "fields" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.fieldsGroup)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(comp.fields ?? comp.items, (f) => {
						return openBlock(), createElementBlock("div", {
							key: f.label,
							class: normalizeClass(_ctx.$style.fieldRow)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.fieldLabel) }, toDisplayString(f.label), 3), createBaseVNode("span", null, toDisplayString(f.value), 1)], 2);
					}), 128))], 2)) : comp.type === "image" && comp.url ? (openBlock(), createElementBlock("img", {
						key: 5,
						src: comp.url,
						alt: comp.alt ?? comp.altText ?? "",
						class: normalizeClass(_ctx.$style.image)
					}, null, 10, _hoisted_1$1)) : createCommentVNode("", true)], 64);
				}), 128)) : createCommentVNode("", true),
				parsed.value.output.value && !parsed.value.output.displayOnly ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.response)
				}, [_cache[0] || (_cache[0] = createTextVNode(" User selected: ", -1)), createBaseVNode("strong", null, toDisplayString(parsed.value.output.value), 1)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	card: "_card_ld1nm_1",
	title: "_title_ld1nm_6",
	message: "_message_ld1nm_11",
	section: "_section_ld1nm_16",
	divider: "_divider_ld1nm_20",
	button: "_button_ld1nm_26",
	buttonPill: "_buttonPill_ld1nm_32",
	buttonSelected: "_buttonSelected_ld1nm_41",
	selectGroup: "_selectGroup_ld1nm_47",
	selectLabel: "_selectLabel_ld1nm_51",
	selectOption: "_selectOption_ld1nm_56",
	optionDot: "_optionDot_ld1nm_63",
	optionSelected: "_optionSelected_ld1nm_71",
	optionDesc: "_optionDesc_ld1nm_76",
	fieldsGroup: "_fieldsGroup_ld1nm_81",
	fieldRow: "_fieldRow_ld1nm_85",
	fieldLabel: "_fieldLabel_ld1nm_91",
	image: "_image_ld1nm_96",
	response: "_response_ld1nm_102"
} }]]);
//#endregion
//#region src/features/ndv/runData/standaloneRunData.ts
var StandaloneRunDataHostKey = Symbol("StandaloneRunDataHost");
//#endregion
//#region src/features/ndv/runData/components/StandaloneRunData.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
//#endregion
//#region src/features/ndv/runData/components/StandaloneRunData.vue
var StandaloneRunData_default = /* @__PURE__ */ defineComponent({
	__name: "StandaloneRunData",
	props: {
		workflowObject: {},
		workflowExecution: { default: void 0 },
		runIndex: {},
		paneType: {},
		node: { default: null },
		overrideOutputs: { default: void 0 }
	},
	setup(__props) {
		if (!inject(StandaloneRunDataHostKey, false)) throw new UnexpectedError("StandaloneRunData must be rendered inside StandaloneRunDataHost");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(RunData_default, {
				node: __props.node,
				"run-index": __props.runIndex,
				"override-outputs": __props.overrideOutputs,
				"workflow-object": __props.workflowObject,
				"workflow-execution": __props.workflowExecution,
				"pane-type": __props.paneType,
				"display-mode": "schema",
				"disable-display-mode-selection": true,
				"disable-run-index-selection": true,
				compact: true,
				"show-actions-on-hover": true,
				"disable-pin": true,
				"disable-edit": true,
				"disable-hover-highlight": true,
				"disable-settings-hint": true,
				"collapsing-table-column-name": null,
				"table-header-bg-color": "light",
				"executing-message": "",
				"no-data-in-branch-message": ""
			}, null, 8, [
				"node",
				"run-index",
				"override-outputs",
				"workflow-object",
				"workflow-execution",
				"pane-type"
			]);
		};
	}
});
//#endregion
//#region src/features/ndv/runData/components/StandaloneRunDataHost.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var StandaloneRunDataHost_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "StandaloneRunDataHost",
	props: { execution: {} },
	emits: ["setupError"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const nodeTypesStore = useNodeTypesStore();
		const { normalizeWorkflowData } = useWorkflowNormalization();
		const hostId = encodeURIComponent(useId());
		const documentStore = shallowRef(null);
		const workflowObject = shallowRef(null);
		const workflowExecution = shallowRef();
		const ready = computed(() => documentStore.value !== null && workflowObject.value !== null);
		provide(WorkflowIdKey, computed(() => documentStore.value?.workflowId ?? props.execution?.workflowData.id ?? ""));
		provide(WorkflowDocumentStoreKey, documentStore);
		provide(ChatSymbol, null);
		provide(StandaloneRunDataHostKey, true);
		let ownedScope = null;
		let generation = 0;
		let latestSetupRequest = 0;
		let unmounted = false;
		function disposeOwnedScope() {
			if (!ownedScope) return;
			disposeNDVStore(ownedScope.ndvStore);
			disposeWorkflowExecutionStateStore(ownedScope.executionStateStore);
			disposeExecutionDataStore(ownedScope.executionDataStore);
			disposeWorkflowDocumentStore(ownedScope.documentStore);
			ownedScope = null;
			documentStore.value = null;
			workflowObject.value = null;
			workflowExecution.value = void 0;
		}
		function installExecution(execution) {
			const documentVersion = `standalone-run-data/${hostId}/${++generation}`;
			const documentId = createWorkflowDocumentId(execution.workflowData.id, documentVersion);
			const scopedDocumentStore = useWorkflowDocumentStore(documentId);
			const scopedExecutionStateStore = useWorkflowExecutionStateStore(documentId);
			const scopedExecutionDataStore = useExecutionDataStore(createExecutionDataId(`${documentId}/execution`));
			ownedScope = {
				documentStore: scopedDocumentStore,
				executionStateStore: scopedExecutionStateStore,
				executionDataStore: scopedExecutionDataStore,
				ndvStore: useNDVStore(documentId)
			};
			const { nodes, connections } = normalizeWorkflowData(execution.workflowData);
			scopedDocumentStore.hydrate({
				...execution.workflowData,
				nodes,
				connections,
				versionId: documentVersion
			});
			const executionSnapshot = deepCopy(execution);
			scopedExecutionDataStore.setExecution(executionSnapshot);
			scopedExecutionStateStore.setDisplayedExecutionId(scopedExecutionDataStore.executionId);
			documentStore.value = scopedDocumentStore;
			workflowObject.value = scopedDocumentStore.getWorkflowObjectAccessorSnapshot();
			workflowExecution.value = executionSnapshot.data;
		}
		async function replaceExecution(execution) {
			const setupRequest = ++latestSetupRequest;
			documentStore.value = null;
			workflowObject.value = null;
			workflowExecution.value = void 0;
			await nextTick();
			disposeOwnedScope();
			if (!execution || unmounted || setupRequest !== latestSetupRequest) return;
			try {
				await nodeTypesStore.loadNodeTypesIfNotLoaded();
				if (unmounted || setupRequest !== latestSetupRequest) return;
				installExecution(execution);
			} catch (error) {
				if (unmounted || setupRequest !== latestSetupRequest) return;
				disposeOwnedScope();
				emit("setupError", error);
			}
		}
		watch(() => props.execution, (execution) => replaceExecution(execution), { immediate: true });
		onBeforeUnmount(() => {
			unmounted = true;
			latestSetupRequest += 1;
			documentStore.value = null;
			workflowObject.value = null;
			workflowExecution.value = void 0;
		});
		onUnmounted(() => {
			disposeOwnedScope();
		});
		return (_ctx, _cache) => {
			return ready.value && workflowObject.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.root)
			}, [renderSlot(_ctx.$slots, "default", {
				workflowObject: workflowObject.value,
				workflowExecution: workflowExecution.value
			})], 2)) : createCommentVNode("", true);
		};
	}
}), [["__cssModules", { "$style": { root: "_root_1dd6a_2" } }]]);
//#endregion
//#region src/features/agents/components/ToolIoView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
/**
* Renders input/output for a single tool/node call using the same RunData
* schema view that the workflow log viewer uses for node I/O — but without
* the surrounding node list, since a tool call is always one logical node.
*
* Synthesizes a fake two-node workflow (an input source + the tool node) so
* RunData's input pane has a previous node to walk back to. The standalone
* host owns the isolated stores needed to render that execution.
*/
var SYNTHETIC_ID = "__tool_io__";
var INPUT_NODE_NAME = "__tool_io_input__";
var ToolIoView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ToolIoView",
	props: {
		name: {},
		input: {},
		output: {},
		nodeParameters: {},
		success: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		function wrap(value) {
			if (value === void 0 || value === null) return [{ json: {} }];
			if (Array.isArray(value)) return value.map((v) => typeof v === "object" && v !== null ? { json: v } : { json: { value: v } });
			if (typeof value === "object") return [{ json: value }];
			return [{ json: { value } }];
		}
		const synthExecution = computed(() => {
			const inputItems = wrap(props.nodeParameters && Object.keys(props.nodeParameters).length > 0 ? props.nodeParameters : props.input);
			const outputItems = wrap(props.output);
			const workflowData = {
				id: SYNTHETIC_ID,
				name: SYNTHETIC_ID,
				active: false,
				isArchived: false,
				nodes: [{
					id: INPUT_NODE_NAME,
					name: INPUT_NODE_NAME,
					type: "n8n-nodes-base.set",
					typeVersion: 1,
					position: [0, 0],
					parameters: {}
				}, {
					id: props.name,
					name: props.name,
					type: "n8n-nodes-base.set",
					typeVersion: 1,
					position: [220, 0],
					parameters: props.nodeParameters ?? {}
				}],
				connections: { [INPUT_NODE_NAME]: { main: [[{
					node: props.name,
					type: "main",
					index: 0
				}]] } },
				settings: {},
				pinData: {},
				versionId: "",
				usedCredentials: [],
				sharedWithProjects: [],
				homeProject: void 0,
				scopes: [],
				tags: [],
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			const runData = {
				[INPUT_NODE_NAME]: [{
					startTime: 0,
					executionIndex: 0,
					executionTime: 0,
					executionStatus: "success",
					source: [],
					data: { main: [inputItems] }
				}],
				[props.name]: [{
					startTime: 0,
					executionIndex: 0,
					executionTime: 0,
					executionStatus: props.success ? "success" : "error",
					source: [{
						previousNode: INPUT_NODE_NAME,
						previousNodeOutput: 0,
						previousNodeRun: 0
					}],
					data: { main: [outputItems] },
					inputOverride: { main: [inputItems] }
				}]
			};
			const now = /* @__PURE__ */ new Date();
			return {
				id: SYNTHETIC_ID,
				finished: true,
				mode: "manual",
				status: "success",
				startedAt: now,
				createdAt: now,
				stoppedAt: now,
				workflowId: SYNTHETIC_ID,
				workflowData,
				data: {
					startData: {},
					resultData: { runData },
					executionData: {
						contextData: {},
						nodeExecutionStack: [],
						metadata: {},
						waitingExecution: {},
						waitingExecutionSource: {}
					}
				}
			};
		});
		const toolNodeUi = computed(() => {
			return synthExecution.value.workflowData.nodes.find((node) => node.name === props.name) ?? null;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(StandaloneRunDataHost_default, { execution: synthExecution.value }, {
				default: withCtx(({ workflowObject, workflowExecution }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.root) }, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.pane),
					"data-test-id": "agent-session-run-data-input"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), (openBlock(), createBlock(StandaloneRunData_default, {
					key: `tool-input-${__props.name}`,
					node: toolNodeUi.value,
					"run-index": 0,
					"workflow-object": workflowObject,
					"workflow-execution": workflowExecution,
					"pane-type": "input"
				}, null, 8, [
					"node",
					"workflow-object",
					"workflow-execution"
				]))], 2), createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.pane),
					"data-test-id": "agent-session-run-data-output"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), (openBlock(), createBlock(StandaloneRunData_default, {
					key: `tool-output-${__props.name}`,
					node: toolNodeUi.value,
					"run-index": 0,
					"workflow-object": workflowObject,
					"workflow-execution": workflowExecution,
					"pane-type": "output"
				}, null, 8, [
					"node",
					"workflow-object",
					"workflow-execution"
				]))], 2)], 2)]),
				_: 1
			}, 8, ["execution"]);
		};
	}
}), [["__cssModules", { "$style": {
	root: "_root_12rsu_1",
	pane: "_pane_12rsu_7",
	paneTitle: "_paneTitle_12rsu_17"
} }]]);
//#endregion
//#region src/features/agents/composables/useWorkflowOutputAccess.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useWorkflowOutputAccess(item) {
	const executionsStore = useExecutionsStore();
	const access = ref("none");
	const resolved = /* @__PURE__ */ new Map();
	const executionId = computed(() => item.value?.kind === "workflow" && item.value.workflowId ? item.value.workflowExecutionId : void 0);
	async function resolveAccess(id) {
		try {
			const execution = await executionsStore.fetchExecution(id);
			if (!execution?.data || execution.dataTooLargeToDisplay) return "unavailable";
			const result = execution.data.redactionInfo?.isRedacted ? "redacted" : "visible";
			resolved.set(id, result);
			return result;
		} catch {
			return "unavailable";
		}
	}
	watch(executionId, async (id) => {
		if (!id) {
			access.value = "none";
			return;
		}
		const cached = resolved.get(id);
		if (cached) {
			access.value = cached;
			return;
		}
		access.value = "loading";
		const result = await resolveAccess(id);
		if (executionId.value === id) access.value = result;
	}, { immediate: true });
	return { access };
}
//#endregion
//#region src/features/agents/components/SessionDetailPanel.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = {
	key: 2,
	"data-test-id": "hitl-request-details"
};
var _hoisted_2 = {
	key: 3,
	"data-test-id": "hitl-response-details"
};
var _hoisted_3 = ["href"];
var _hoisted_4 = {
	key: 0,
	"data-test-id": "workflow-input"
};
var _hoisted_5 = {
	key: 2,
	"data-test-id": "workflow-output"
};
var _hoisted_6 = {
	key: 3,
	"data-test-id": "workflow-input"
};
var _hoisted_7 = { key: 0 };
var SessionDetailPanel_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SessionDetailPanel",
	props: {
		item: {},
		projectId: {},
		agentId: {}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const router = useRouter();
		const props = __props;
		const userAttachments = computed(() => {
			if (props.item?.kind !== "user" || !props.item.attachments) return [];
			return props.item.attachments.map((attachment) => ({
				fileId: attachment.id,
				fileName: attachment.fileName,
				mimeType: attachment.mimeType,
				sizeBytes: attachment.sizeBytes
			}));
		});
		const fullExecutionHref = computed(() => {
			if (props.item?.kind !== "workflow" || !props.item.workflowId || !props.item.workflowExecutionId) return "";
			return router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: props.item.workflowId,
					executionId: props.item.workflowExecutionId
				}
			}).href;
		});
		function openFullExecution() {
			if (fullExecutionHref.value) window.open(fullExecutionHref.value, "_blank", "noopener");
		}
		const emit = __emit;
		function formatTimestamp(ts) {
			if (!ts) return "";
			const { date, time } = convertToDisplayDate(new Date(ts).toISOString());
			return `${date} ${time}`;
		}
		/**
		* Card carried by an integration action tool call (any `<platform>_action`),
		* rendered as the interaction preview instead of raw input/output JSON.
		*/
		const actionCard = computed(() => props.item?.kind === "tool" ? parseIntegrationActionCard(ensureParsed(props.item.toolInput))?.card : void 0);
		function ensureParsed(value) {
			if (typeof value === "string") try {
				return JSON.parse(value);
			} catch {
				return value;
			}
			return value;
		}
		function stringifyJson(value) {
			const parsed = ensureParsed(value);
			if (typeof parsed === "string") return parsed;
			return JSON.stringify(parsed, null, 2) ?? String(parsed);
		}
		function stringField(value, key) {
			const parsed = ensureParsed(value);
			if (!isRecord(parsed)) return "";
			const field = parsed[key];
			return typeof field === "string" ? field : "";
		}
		const toolDisplayName = computed(() => {
			if (!props.item || props.item.kind !== "tool" && props.item.kind !== "skill" && props.item.kind !== "suspension" && props.item.kind !== "hitl-response") return "";
			return resolveToolNameForDisplay(props.item.toolName, i18n, props.item.toolOutput);
		});
		const linkedToolName = computed(() => {
			const item = props.item;
			return item ? linkedToolDisplayName(item, i18n) : "";
		});
		const hitlRequestContent = computed(() => {
			const item = props.item;
			if (!item || item.kind !== "suspension") return void 0;
			const request = ensureParsed(item.hitlRequest);
			if (item.hitlRequestType === "approval" && request !== null && typeof request === "object" && "args" in request) return request.args;
			return request;
		});
		const isSubAgent = computed(() => props.item ? isSubAgentTimelineItem(props.item) : false);
		const subAgentSessionHref = computed(() => {
			if (!isSubAgent.value || !props.projectId || !props.agentId || !props.item) return "";
			const threadId = stringField(props.item.toolOutput, "threadId");
			const requestedAgentId = stringField(props.item.toolInput, "subAgentId");
			if (!threadId || !requestedAgentId) return "";
			return router.resolve({
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: props.projectId,
					agentId: requestedAgentId === "inline" ? props.agentId : requestedAgentId,
					threadId
				}
			}).href;
		});
		const status = computed(() => props.item ? timelineItemStatus(props.item) : void 0);
		/**
		* For an agent (assistant) message the persisted content is the raw response
		* text. When that text is a JSON object/array — i.e. the agent produced
		* structured output — parse it so it can be pretty-printed instead of shown as
		* a raw one-line string. Plain-text answers return `undefined` and keep their
		* markdown rendering.
		*/
		const agentStructuredContent = computed(() => {
			const item = props.item;
			if (!item || item.kind !== "agent") return void 0;
			const content = item.content?.trim();
			if (!content || !content.startsWith("{") && !content.startsWith("[")) return void 0;
			try {
				const parsed = JSON.parse(content);
				return parsed !== null && typeof parsed === "object" ? parsed : void 0;
			} catch {
				return;
			}
		});
		const headerTitle = computed(() => {
			const item = props.item;
			if (!item) return "";
			if (isSubAgent.value) return delegateLabel(i18n, item.subAgentName ?? "");
			if (item.kind === "background-task-signal") return i18n.baseText("agents.chat.backgroundTasks.resultsReceived");
			if (item.kind === "workflow") return item.workflowName ?? formatToolNameForDisplay(item.toolName);
			if (item.kind === "skill") return item.skillName ?? toolDisplayName.value;
			if (item.kind === "tool") return toolDisplayName.value;
			if (item.kind === "node") return item.nodeDisplayName ?? formatToolNameForDisplay(item.toolName);
			if (item.kind === "user") return item.authorName ?? i18n.baseText("agentSessions.timeline.user");
			if (item.kind === "agent") return i18n.baseText("agentSessions.timeline.agent");
			if (item.kind === "execution-error") return executionErrorLabel(item, i18n);
			if (item.kind === "suspension") return item.hitlRequestType === "approval" ? hitlTimelineName(item, i18n) : i18n.baseText(hitlRequestLabelKey(item.hitlRequestType));
			return item.hitlRequestType === "approval" ? hitlTimelineName(item, i18n) : i18n.baseText("agentSessions.timeline.hitlResponse");
		});
		const headerIcon = computed(() => {
			const item = props.item;
			if (!item) return "info";
			if (isSubAgent.value) return "bot";
			if (item.kind === "background-task-signal") return "list-checks";
			if (item.kind === "workflow") return "workflow";
			if (item.kind === "skill") return "book-open";
			if (item.kind === "tool") return "wrench";
			if (item.kind === "node") return "box";
			if (item.kind === "user") return "user";
			if (item.kind === "agent") return "bot";
			if (item.kind === "execution-error") return "circle-x";
			if (item.kind === "hitl-response") return "message-square";
			return "clock";
		});
		const isFailed = computed(() => props.item ? isErroredToolCallTimelineItem(props.item) : false);
		/**
		* Error message for a failed tool/workflow/node call. It surfaces a string,
		* nested `toolOutput.error.message`, or MCP `structuredContent.error` / text
		* content when available. Soft-failure payloads are detected in
		* `isErroredToolCallTimelineItem`.
		*/
		const errorMessage = computed(() => {
			const item = props.item;
			if (!item || !isFailed.value) return "";
			const prefix = i18n.baseText("agentSessions.timeline.toolError");
			const message = timelineItemErrorMessage(item);
			return message ? `${prefix}: ${message}` : prefix;
		});
		const workflowFormOutput = computed(() => {
			const o = props.item?.toolOutput;
			if (typeof o !== "object" || o === null) return null;
			const rec = o;
			if (typeof rec.formUrl !== "string") return null;
			return {
				formUrl: rec.formUrl,
				message: typeof rec.message === "string" ? rec.message : ""
			};
		});
		const { access: workflowOutputAccess } = useWorkflowOutputAccess(toRef(props, "item"));
		/** The workflow tool output, without the execution data when the viewer may not see it. */
		const workflowOutput = computed(() => {
			const output = props.item?.toolOutput;
			if (workflowOutputAccess.value === "visible" || output === void 0) return output;
			const parsed = ensureParsed(output);
			if (!isRecord(parsed)) return void 0;
			const { data: _data, ...rest } = parsed;
			return rest;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [__props.item ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [
				createVNode(unref(N8nIcon_default), {
					icon: headerIcon.value,
					size: 16
				}, null, 8, ["icon"]),
				createVNode(unref(N8nText_default), {
					bold: "",
					class: normalizeClass(_ctx.$style.headerTitleText)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(headerTitle.value), 1)]),
					_: 1
				}, 8, ["class"]),
				subAgentSessionHref.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("agentSessions.subAgent.openSession"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "external-link",
						variant: "ghost",
						size: "small",
						href: subAgentSessionHref.value,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": unref(i18n).baseText("agentSessions.subAgent.openSession"),
						"data-test-id": "open-sub-agent-session"
					}, null, 8, ["href", "aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true),
				status.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 1,
					variant: status.value.theme,
					size: "xsmall",
					"data-test-id": status.value.kind === "hitl-response" ? "detail-hitl-response-badge" : __props.item.kind === "execution-error" ? "detail-execution-error-badge" : "detail-tool-error-badge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(status.value.labelKey)), 1)]),
					_: 1
				}, 8, ["variant", "data-test-id"])) : createCommentVNode("", true)
			], 2), createVNode(unref(N8nIconButton_default), {
				icon: "x",
				variant: "ghost",
				"data-test-id": "detail-close",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nCard_default), null, {
				default: withCtx(() => [
					__props.item.timestamp ? (openBlock(), createElementBlock("dl", {
						key: 0,
						class: normalizeClass(_ctx.$style.infoRow)
					}, [createBaseVNode("dt", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.created")), 3), createBaseVNode("dd", { class: normalizeClass(_ctx.$style.value) }, toDisplayString(formatTimestamp(__props.item.timestamp)), 3)], 2)) : createCommentVNode("", true),
					__props.item.kind === "suspension" || __props.item.kind === "hitl-response" ? (openBlock(), createElementBlock("dl", {
						key: 1,
						class: normalizeClass(_ctx.$style.infoRow)
					}, [createBaseVNode("dt", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.tool")), 3), createBaseVNode("dd", { class: normalizeClass(_ctx.$style.value) }, toDisplayString(linkedToolName.value), 3)], 2)) : createCommentVNode("", true),
					fullExecutionHref.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.executionButton)
					}, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						label: unref(i18n).baseText("agentSessions.workflowLog.openFull"),
						"data-test-id": "open-full-execution",
						onClick: openFullExecution
					}, null, 8, ["label"])], 2)) : createCommentVNode("", true)
				]),
				_: 1
			}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.output) }, [__props.item.kind === "background-task-signal" ? (openBlock(), createElementBlock("ul", {
				key: 0,
				class: normalizeClass(_ctx.$style.backgroundJobs),
				"data-test-id": "background-job-signal-details"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.item.backgroundJobSignal?.tasks, (job) => {
				return openBlock(), createElementBlock("li", { key: job.id }, toDisplayString(unref(backgroundJobResultLabel)(job, unref(i18n))), 1);
			}), 128))], 2)) : __props.item.kind === "execution-error" ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "danger",
				"data-test-id": "execution-error-callout"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(executionErrorMessage)(__props.item, unref(i18n))), 1)]),
				_: 1
			})) : __props.item.kind === "suspension" ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.requestDetails")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(hitlRequestContent.value),
				language: "json"
			}, null, 8, ["code"])])) : __props.item.kind === "hitl-response" ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.response")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.hitlResponse),
				language: "json"
			}, null, 8, ["code"])])) : __props.item.kind === "workflow" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [isFailed.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger",
				"data-test-id": "workflow-error-callout",
				class: normalizeClass(_ctx.$style.errorCallout)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true), __props.item.workflowTriggerType === "form" && workflowFormOutput.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				"data-test-id": "wf-form-card",
				class: normalizeClass(_ctx.$style.formCard)
			}, [createBaseVNode("p", null, toDisplayString(workflowFormOutput.value.message), 1), createBaseVNode("a", {
				href: workflowFormOutput.value.formUrl,
				target: "_blank",
				rel: "noopener",
				class: normalizeClass(_ctx.$style.formLink)
			}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.openForm")), 11, _hoisted_3)], 2)) : __props.item.workflowExecutionId && __props.item.workflowId ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [__props.item.toolInput !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolInput),
				language: "json"
			}, null, 8, ["code"])])) : createCommentVNode("", true), unref(workflowOutputAccess) === "loading" ? (openBlock(), createElementBlock("div", {
				key: 1,
				"data-test-id": "workflow-output-loading",
				class: normalizeClass(_ctx.$style.label)
			}, toDisplayString(unref(i18n).baseText("agentSessions.workflowLog.loading")), 3)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [unref(workflowOutputAccess) === "redacted" ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "info",
				"data-test-id": "workflow-output-redacted"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agentSessions.workflowLog.outputRedacted")), 1)]),
				_: 1
			})) : unref(workflowOutputAccess) === "unavailable" ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "warning",
				"data-test-id": "workflow-output-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agentSessions.workflowLog.outputUnavailable")), 1)]),
				_: 1
			})) : createCommentVNode("", true), workflowOutput.value !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(workflowOutput.value),
				language: "json"
			}, null, 8, ["code"])])) : createCommentVNode("", true)], 64))], 64)) : __props.item.toolSuccess === void 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolInput),
				language: "json",
				copyable: false
			}, null, 8, ["code"])])) : (openBlock(), createElementBlock("div", {
				key: 4,
				"data-test-id": "wf-error-fallback",
				class: normalizeClass(_ctx.$style.errorFallback)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorBanner) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.workflowError")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolOutput),
				language: "json"
			}, null, 8, ["code"])], 2))], 64)) : __props.item.kind === "tool" || __props.item.kind === "skill" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [isFailed.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger",
				"data-test-id": "tool-error-callout",
				class: normalizeClass(_ctx.$style.errorCallout)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true), actionCard.value ? (openBlock(), createBlock(RichInteractionCard_default, {
				key: 1,
				input: actionCard.value,
				output: ensureParsed(__props.item.toolOutput)
			}, null, 8, ["input", "output"])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolInput),
				language: "json"
			}, null, 8, ["code"])]), __props.item.toolOutput !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolOutput),
				language: "json"
			}, null, 8, ["code"])])) : createCommentVNode("", true)], 64))], 64)) : __props.item.kind === "node" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [errorMessage.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger",
				"data-test-id": "node-error-callout"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(errorMessage.value), 1)]),
				_: 1
			})) : createCommentVNode("", true), createVNode(ToolIoView_default, {
				name: (__props.item.nodeDisplayName ?? unref(formatToolNameForDisplay)(__props.item.toolName)) || "node",
				input: __props.item.toolInput,
				output: __props.item.toolOutput,
				"node-parameters": __props.item.nodeParameters,
				success: __props.item.toolOutcome ? __props.item.toolOutcome !== "error" : __props.item.toolSuccess
			}, null, 8, [
				"name",
				"input",
				"output",
				"node-parameters",
				"success"
			])], 64)) : __props.item.kind === "agent" && agentStructuredContent.value !== void 0 ? (openBlock(), createBlock(unref(CodeBlock_default), {
				key: 7,
				code: stringifyJson(agentStructuredContent.value),
				language: "json"
			}, null, 8, ["code"])) : __props.item.kind === "user" || __props.item.kind === "agent" ? (openBlock(), createElementBlock(Fragment, { key: 8 }, [createVNode(unref(VueMarkdown), {
				source: __props.item.content ?? "",
				class: normalizeClass(_ctx.$style.markdown)
			}, null, 8, ["source", "class"]), userAttachments.value.length > 0 && __props.projectId && __props.agentId ? (openBlock(), createBlock(AgentChatMessageAttachments_default, {
				key: 0,
				attachments: userAttachments.value,
				"project-id": __props.projectId,
				"agent-id": __props.agentId
			}, null, 8, [
				"attachments",
				"project-id",
				"agent-id"
			])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true), __props.item.kind === "agent" && __props.item.thinkingSegments?.length ? (openBlock(), createBlock(AiThinkingBlock_default, {
				key: `${__props.item.executionId}:${__props.item.timestamp}`,
				segments: __props.item.thinkingSegments,
				active: false,
				"duration-sec": unref(getThinkingDurationSec)(__props.item.thinkingSegments),
				"test-id": "session-agent-thinking"
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.item.thinkingSegments, (segment) => {
					return openBlock(), createBlock(AiReasoningBlock_default, {
						key: segment.id,
						entry: segment
					}, null, 8, ["entry"]);
				}), 128))]),
				_: 1
			}, 8, ["segments", "duration-sec"])) : createCommentVNode("", true)], 2)], 2)], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.selectItem")), 3))], 2);
		};
	}
}), [["__cssModules", { "$style": {
	backgroundJobs: "_backgroundJobs_14ac9_1",
	panel: "_panel_14ac9_6",
	header: "_header_14ac9_13",
	headerTitle: "_headerTitle_14ac9_25",
	headerTitleText: "_headerTitleText_14ac9_33",
	errorCallout: "_errorCallout_14ac9_40",
	container: "_container_14ac9_44",
	output: "_output_14ac9_56",
	info: "_info_14ac9_62",
	infoRow: "_infoRow_14ac9_70",
	label: "_label_14ac9_77",
	value: "_value_14ac9_82",
	executionButton: "_executionButton_14ac9_88",
	formCard: "_formCard_14ac9_94",
	formLink: "_formLink_14ac9_100",
	errorFallback: "_errorFallback_14ac9_105",
	errorBanner: "_errorBanner_14ac9_111",
	empty: "_empty_14ac9_119",
	markdown: "_markdown_14ac9_125"
} }]]);
//#endregion
//#region src/features/agents/components/AgentSessionTimelinePanel.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var AgentSessionTimelinePanel_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelinePanel",
	props: {
		projectId: {},
		agentId: {},
		threadId: {},
		increaseBudget: { type: Function }
	},
	emits: ["loaded"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const agentTelemetry = useAgentTelemetry();
		const sessionsStore = useAgentSessionsStore();
		const pushStore = usePushConnectionStore();
		const activeElement = useActiveElement();
		const panel = useTemplateRef("panel");
		const documentVisibility = useDocumentVisibility();
		const projectId = computed(() => props.projectId);
		const executions = ref([]);
		const loading = ref(true);
		const selectedIndex = ref(null);
		const highlightedIndex = ref(null);
		const selectedFilters = ref(/* @__PURE__ */ new Set());
		const searchQuery = ref("");
		const resolvedBudgetStopExecutionId = ref(null);
		const budgetIncreasePending = ref(false);
		let threadDetailRequestId = 0;
		let refreshPending = false;
		let removePushListener;
		let activeRequest;
		const baseItems = computed(() => flattenExecutionsToTimelineItems(executions.value));
		const { subAgentNameById } = useSubAgentNames(projectId, () => baseItems.value.some(isSubAgentTimelineItem));
		const items = computed(() => baseItems.value.map((item) => {
			if (!isSubAgentTimelineItem(item)) return item;
			const name = resolveSubAgentName(item.toolInput, subAgentNameById.value);
			return name ? {
				...item,
				subAgentName: name
			} : item;
		}));
		const idleRanges = computed(() => computeIdleRanges(items.value));
		const bounds = computed(() => sessionBounds(items.value));
		const budgetStop = computed(() => {
			const lastExecutionId = executions.value.at(-1)?.id;
			if (!lastExecutionId || lastExecutionId === resolvedBudgetStopExecutionId.value) return null;
			for (let index = items.value.length - 1; index >= 0; index--) {
				const item = items.value[index];
				if (item.executionId !== lastExecutionId || item.kind !== "execution-error") continue;
				if (item.guardrailCode && isBudgetStopCode(item.guardrailCode)) return {
					index,
					executionId: lastExecutionId,
					code: item.guardrailCode
				};
			}
			return null;
		});
		async function onIncreaseBudget(payload) {
			const stopExecutionId = budgetStop.value?.executionId;
			if (!props.increaseBudget || !stopExecutionId || budgetIncreasePending.value) return;
			const identity = threadIdentity();
			budgetIncreasePending.value = true;
			try {
				if (await props.increaseBudget(payload) && identity === threadIdentity()) resolvedBudgetStopExecutionId.value = stopExecutionId;
			} finally {
				budgetIncreasePending.value = false;
			}
		}
		function labelForKey(key) {
			const backgroundJobKey = backgroundJobTimelineLabelKey(key);
			if (backgroundJobKey) return i18n.baseText(backgroundJobKey);
			switch (key) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "skill": return i18n.baseText("agentSessions.timeline.skill");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "execution-error": return i18n.baseText("agentSessions.timeline.executionFailed");
				case "execution-interrupted": return i18n.baseText("agentSessions.timeline.executionInterrupted");
				case "suspension": return i18n.baseText("agentSessions.timeline.hitlRequest");
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				case "approval-requested": return i18n.baseText("agentSessions.timeline.approvalRequested");
				case "hitl-requested": return i18n.baseText("agentSessions.timeline.hitlRequested");
				case "wait-requested": return i18n.baseText("agentSessions.timeline.waitRequested");
				case "approved": return i18n.baseText("agentSessions.timeline.approved");
				case "responded": return i18n.baseText("agentSessions.timeline.responseReceived");
				case "declined": return i18n.baseText("agentSessions.timeline.declined");
				case "error": return i18n.baseText("agentSessions.timeline.error");
				default: return key;
			}
		}
		const STATUS_FILTER_OPTIONS = [
			{
				key: "approved",
				badgeTheme: "success"
			},
			{
				key: "declined",
				badgeTheme: "outline"
			},
			{
				key: "error",
				badgeTheme: "danger"
			}
		];
		const filterOptions = computed(() => {
			const kindCounts = /* @__PURE__ */ new Map();
			const statusCounts = /* @__PURE__ */ new Map();
			for (const item of items.value) {
				if (item.kind !== "execution-error") kindCounts.set(item.kind, (kindCounts.get(item.kind) ?? 0) + 1);
				const statusKey = itemStatusFilterKey(item);
				if (statusKey) statusCounts.set(statusKey, (statusCounts.get(statusKey) ?? 0) + 1);
			}
			return [...Array.from(kindCounts.entries()).map(([key, count]) => ({
				key,
				label: labelForKey(key),
				presentation: "swatch",
				color: chartBlockColor(key),
				count
			})), ...STATUS_FILTER_OPTIONS.flatMap(({ key, badgeTheme }) => {
				const count = statusCounts.get(key);
				if (!count) return [];
				return [{
					key,
					label: labelForKey(key),
					presentation: "badge",
					badgeTheme,
					count
				}];
			})];
		});
		const selectedItem = computed(() => selectedIndex.value !== null ? items.value[selectedIndex.value] ?? null : null);
		const visibleItemIndexes = computed(() => filteredTimelineItemIndexes(items.value, selectedFilters.value, searchQuery.value, labelForKey));
		function moveSelectedIndex(direction) {
			const indexes = visibleItemIndexes.value;
			if (indexes.length === 0) return;
			if (highlightedIndex.value === null || !indexes.includes(highlightedIndex.value)) {
				highlightedIndex.value = direction === 1 ? indexes[0] : indexes[indexes.length - 1];
				return;
			}
			const nextVisibleIndex = indexes.indexOf(highlightedIndex.value) + direction;
			if (nextVisibleIndex < 0 || nextVisibleIndex >= indexes.length) return;
			highlightedIndex.value = indexes[nextVisibleIndex];
		}
		function moveSelectedIndexToBoundary(direction) {
			const indexes = visibleItemIndexes.value;
			if (indexes.length === 0) return;
			highlightedIndex.value = direction === 1 ? indexes[indexes.length - 1] : indexes[0];
		}
		function selectTimelineItem(index) {
			selectedIndex.value = index;
			highlightedIndex.value = index;
		}
		function onTimelineItemSelect(index) {
			selectTimelineItem(index);
			if (index === null) return;
			const item = items.value[index];
			if (!item) return;
			agentTelemetry.trackClickedTraceItem({
				agentId: props.agentId,
				itemType: item.kind
			});
		}
		function shouldHandleShortcut() {
			const element = activeElement.value;
			if (!(element instanceof Element)) return false;
			return panel.value?.contains(element) === true && !shouldIgnoreCanvasShortcut(element);
		}
		function timelineItemKey(item) {
			return `${item.executionId}:${item.kind}:${item.toolCallId ?? item.timestamp}`;
		}
		function onKeyDown(event) {
			if (!shouldHandleShortcut()) return;
			if (event.key === "Escape") {
				if (selectedIndex.value !== null || highlightedIndex.value !== null) {
					event.preventDefault();
					selectTimelineItem(null);
				}
				return;
			}
			if (event.key === "ArrowDown") {
				event.preventDefault();
				if (event.metaKey) moveSelectedIndexToBoundary(1);
				else moveSelectedIndex(1);
			} else if (event.key === "ArrowUp") {
				event.preventDefault();
				if (event.metaKey) moveSelectedIndexToBoundary(-1);
				else moveSelectedIndex(-1);
			}
		}
		useEventListener(document, "keydown", onKeyDown);
		function onKeyUp(event) {
			if (!shouldHandleShortcut()) return;
			if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
			if (highlightedIndex.value === selectedIndex.value) return;
			event.preventDefault();
			onTimelineItemSelect(highlightedIndex.value);
		}
		useEventListener(document, "keyup", onKeyUp);
		function loadThreadDetail() {
			executions.value = [];
			selectedFilters.value = /* @__PURE__ */ new Set();
			searchQuery.value = "";
			resolvedBudgetStopExecutionId.value = null;
			selectTimelineItem(null);
			loading.value = true;
			emit("loaded", null);
			refreshPending = false;
			startThreadDetailRequest(true);
		}
		function threadIdentity() {
			return `${props.projectId}:${props.agentId}:${props.threadId}`;
		}
		async function fetchThreadDetail(initial) {
			const currentProjectId = props.projectId;
			const currentAgentId = props.agentId;
			const currentThreadId = props.threadId;
			const identity = threadIdentity();
			const requestId = ++threadDetailRequestId;
			try {
				const result = await sessionsStore.getThreadDetail(currentProjectId, currentAgentId, currentThreadId);
				if (requestId !== threadDetailRequestId || identity !== threadIdentity()) return;
				const selectedKey = !initial && selectedItem.value ? timelineItemKey(selectedItem.value) : null;
				executions.value = result.executions;
				if (selectedKey) {
					const nextIndex = items.value.findIndex((item) => timelineItemKey(item) === selectedKey);
					selectTimelineItem(nextIndex >= 0 ? nextIndex : null);
				}
				emit("loaded", result);
			} catch (error) {
				if (requestId !== threadDetailRequestId) return;
				if (initial) toast.showError(error, i18n.baseText("agentSessions.showError.load"));
			} finally {
				if (initial && requestId === threadDetailRequestId) loading.value = false;
			}
		}
		function startThreadDetailRequest(initial) {
			const identity = threadIdentity();
			const request = {
				identity,
				promise: fetchThreadDetail(initial)
			};
			activeRequest = request;
			request.promise.finally(() => {
				if (activeRequest !== request) return;
				activeRequest = void 0;
				if (refreshPending && identity === threadIdentity()) {
					refreshPending = false;
					refreshThreadDetail();
				}
			});
		}
		function refreshThreadDetail() {
			if (activeRequest?.identity === threadIdentity()) {
				refreshPending = true;
				return;
			}
			startThreadDetailRequest(false);
		}
		function onPushMessage(event) {
			if (event.type === "agentExecutionUpdated" && event.data.projectId === props.projectId && event.data.agentId === props.agentId && event.data.threadId === props.threadId) refreshThreadDetail();
		}
		watch(documentVisibility, (visibility) => {
			if (visibility === "visible") refreshThreadDetail();
		});
		watch(() => pushStore.isConnected, (isConnected, wasConnected) => {
			if (isConnected && !wasConnected) refreshThreadDetail();
		});
		onMounted(() => {
			pushStore.pushConnect();
			removePushListener = pushStore.addEventListener(onPushMessage);
		});
		onBeforeUnmount(() => {
			threadDetailRequestId++;
			refreshPending = false;
			removePushListener?.();
			pushStore.pushDisconnect();
		});
		watch([
			() => props.projectId,
			() => props.agentId,
			() => props.threadId
		], loadThreadDetail, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "panel",
				ref: panel,
				class: normalizeClass(_ctx.$style.panel)
			}, [
				!loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.subHeader)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.search) }, [createVNode(unref(Input_default), {
					modelValue: searchQuery.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
					size: "medium",
					placeholder: unref(i18n).baseText("agentSessions.timeline.searchPlaceholder"),
					clearable: ""
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "search",
						size: 12
					})]),
					_: 1
				}, 8, ["modelValue", "placeholder"])], 2), createVNode(SessionEventFilter_default, {
					available: filterOptions.value,
					selected: selectedFilters.value,
					onUpdate: _cache[1] || (_cache[1] = (next) => selectedFilters.value = next)
				}, null, 8, ["available", "selected"])], 2)) : createCommentVNode("", true),
				!loading.value && items.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.chartRow)
				}, [createVNode(SessionTimelineChart_default, {
					items: items.value,
					"idle-ranges": idleRanges.value,
					"session-start": bounds.value.start,
					"session-end": bounds.value.end,
					"visible-kinds": selectedFilters.value,
					"selected-index": highlightedIndex.value,
					onSelect: onTimelineItemSelect
				}, null, 8, [
					"items",
					"idle-ranges",
					"session-start",
					"session-end",
					"visible-kinds",
					"selected-index"
				])], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.panels) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tablePanel) }, [loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, toDisplayString(unref(i18n).baseText("generic.loadingEllipsis")), 3)) : (openBlock(), createBlock(SessionTimelineTable_default, {
					key: 1,
					items: items.value,
					"idle-ranges": idleRanges.value,
					"selected-index": highlightedIndex.value,
					"visible-kinds": selectedFilters.value,
					"search-query": searchQuery.value,
					"notice-index": budgetStop.value?.index ?? null,
					onSelect: onTimelineItemSelect
				}, {
					notice: withCtx(() => [budgetStop.value ? (openBlock(), createBlock(AgentBudgetNoticeCard_default, {
						key: 0,
						code: budgetStop.value.code,
						"can-increase": props.increaseBudget !== void 0,
						pending: budgetIncreasePending.value,
						onIncrease: onIncreaseBudget
					}, null, 8, [
						"code",
						"can-increase",
						"pending"
					])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"items",
					"idle-ranges",
					"selected-index",
					"visible-kinds",
					"search-query",
					"notice-index"
				]))], 2), createVNode(Transition, { name: "session-detail-panel" }, {
					default: withCtx(() => [selectedItem.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.detailPanel)
					}, [createVNode(SessionDetailPanel_default, {
						item: selectedItem.value,
						"project-id": props.projectId,
						"agent-id": props.agentId,
						onClose: _cache[2] || (_cache[2] = ($event) => selectTimelineItem(null))
					}, null, 8, [
						"item",
						"project-id",
						"agent-id"
					])], 2)) : createCommentVNode("", true)]),
					_: 1
				})], 2)
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	panel: "_panel_xybfu_14",
	subHeader: "_subHeader_xybfu_27",
	search: "_search_xybfu_37",
	chartRow: "_chartRow_xybfu_42",
	panels: "_panels_xybfu_49",
	tablePanel: "_tablePanel_xybfu_55",
	detailPanel: "_detailPanel_xybfu_63",
	loading: "_loading_xybfu_100"
} }]]);
//#endregion
//#region src/features/agents/composables/useBackOrFallback.ts
init_reactivity_esm_bundler();
/**
* Back within the app when there is somewhere to go back to; otherwise
* navigates to `fallback`. A direct visit (no matched previous route) has
* nowhere to go back to, so it falls through to `fallback` instead.
*/
function useBackOrFallback(fallback) {
	const router = useRouter();
	return function goBackOrFallback() {
		const previousRoute = router.options.history.state.back;
		if ((typeof previousRoute === "string" ? router.resolve(previousRoute) : null)?.matched.length) {
			router.back();
			return;
		}
		router.push(toValue(fallback));
	};
}
//#endregion
//#region src/features/agents/views/AgentSessionTimelineView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentSessionTimelineView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelineView",
	setup(__props) {
		const i18n = useI18n();
		const threadTitleOf = useThreadTitle();
		const route = useRoute();
		const router = useRouter();
		const sessionsStore = useAgentSessionsStore();
		const { isEnabled: isLangSmithExportEnabled, isExporting, sendSession } = useAgentSessionLangSmithExport();
		const rootStore = useRootStore();
		const toast = useToast();
		const { config: localConfig, fetchConfig, updateConfig } = useAgentConfig();
		const projectId = computed(() => route.params.projectId);
		const agentId = computed(() => route.params.agentId);
		const threadId = computed(() => route.params.threadId);
		const thread = ref(null);
		const executions = ref([]);
		const usageUpdates = ref({});
		const agent = ref(null);
		const isPreviewOpen = ref(false);
		const previewInitialized = ref(false);
		const { canUpdate } = useAgentPermissions(projectId);
		const canDeleteSession = computed(() => canUpdate.value);
		const { activeChatSessionId, effectiveSessionId, currentSessionHasMessages, currentSessionIsEphemeral, currentSessionIsLocallyMinted, currentSessionTitle, sessionMenu, isDeletingSession, onSessionPick, onNewChat, markSessionCreated, deleteSession } = useAgentBuilderSession({
			routeBacked: computed(() => false),
			projectId,
			agentId
		});
		/**
		* True while the docked preview sits on a brand-new session that has no thread
		* yet, so this page's thread is no longer what the preview is running. Picking
		* an existing session is excluded: that one has a thread to show right away,
		* and the dock's own trace action navigates to it.
		*/
		const isPreviewSessionStale = computed(() => currentSessionIsLocallyMinted.value && effectiveSessionId.value !== void 0 && effectiveSessionId.value !== threadId.value);
		const triggerSource = computed(() => {
			if (executions.value.length === 0) return null;
			return executions.value[0].source ?? "chat";
		});
		const triggerIcon = computed(() => {
			const source = triggerSource.value;
			if (!source) return "bolt-filled";
			switch (source) {
				case "slack": return "slack";
				case "instance-ai": return "sparkles";
				case "n8n_chat_production": return "message-square";
				default: return "bolt-filled";
			}
		});
		const triggerLabel = computed(() => {
			const source = triggerSource.value;
			if (!source) return "";
			if (source === "chat" || source === "n8n_chat") return i18n.baseText("agentSessions.origin.preview");
			if (source === "instance-ai") return i18n.baseText("agentSessions.origin.instanceAi");
			if (source === "n8n_chat_production") return i18n.baseText("agentSessions.origin.n8nChat");
			return source.charAt(0).toUpperCase() + source.slice(1);
		});
		const sessionTitle = computed(() => {
			if (!thread.value) return "";
			return truncate(threadTitleOf(thread.value), 64);
		});
		const { projectName, projectIcon } = useAgentProjectBreadcrumb(projectId);
		const projectRoute = computed(() => ({
			name: VIEWS.PROJECTS_WORKFLOWS,
			params: { projectId: projectId.value }
		}));
		const agentRoute = computed(() => ({
			name: AGENT_BUILDER_VIEW,
			params: {
				projectId: projectId.value,
				agentId: agentId.value
			}
		}));
		const agentExecutionsRoute = computed(() => ({
			...typeof agentRoute.value === "object" ? agentRoute.value : {},
			query: { section: EXECUTIONS_SECTION_KEY }
		}));
		const breadcrumbItems = computed(() => [{
			id: projectId.value,
			label: projectName.value ?? i18n.baseText("agents.builder.header.projectFallback"),
			href: router.resolve(projectRoute.value).href
		}, {
			id: agentId.value,
			label: thread.value?.agentName ?? "…",
			href: router.resolve(agentRoute.value).href
		}]);
		const sessionOptions = computed(() => {
			const sessions = sessionsStore.threads;
			if (sessions.length === 0) return [{
				id: "__empty__",
				label: i18n.baseText("agentSessions.empty"),
				disabled: true
			}];
			return sessions.map((session) => ({
				id: session.id,
				label: truncate(threadTitleOf(session), 64),
				class: session.id === threadId.value ? "session-dropdown-item-active" : void 0,
				data: {
					date: formatDate(session.updatedAt),
					active: session.id === threadId.value
				}
			}));
		});
		function onUsageUpdated(update) {
			const previous = usageUpdates.value[update.executionId];
			usageUpdates.value[update.executionId] = {
				...update,
				usage: update.usage ?? previous?.usage
			};
		}
		const { usage: sessionUsage, duration, onExecutionUpdated } = useAgentSessionUsage(() => thread.value ? {
			thread: thread.value,
			executions: executions.value
		} : null, () => usageUpdates.value);
		const totalTokens = computed(() => sessionUsage.value.totalTokens);
		const hasLoadedThread = computed(() => thread.value?.id === threadId.value);
		const canPreviewSession = computed(() => currentSessionIsLocallyMinted.value || hasLoadedThread.value && thread.value?.canContinueInPreview === true);
		const previewVisible = computed(() => canPreviewSession.value && isPreviewOpen.value);
		const totalCost = computed(() => sessionUsage.value.cost);
		const durationLabel = computed(() => formatDuration(duration.value));
		/**
		* The dock resolves the live session's title and its trace/export/delete
		* gates by looking it up in the store's thread list. That list holds only the
		* first page fetched on load, so it misses a session started since then and any
		* thread opened by link from outside that page. When the loaded thread is the
		* live session, it is the authoritative answer, so prefer it over the lookup.
		*/
		const dockShowsLoadedThread = computed(() => thread.value !== null && thread.value.id === effectiveSessionId.value);
		const dockSessionTitle = computed(() => dockShowsLoadedThread.value ? sessionTitle.value : currentSessionTitle.value);
		const dockHasSession = computed(() => dockShowsLoadedThread.value || currentSessionHasMessages.value);
		function onPanelLoaded(detail) {
			thread.value = detail?.thread ?? null;
			executions.value = detail?.executions ?? [];
			upsertLoadedPreviewThread(projectId.value, agentId.value);
		}
		function upsertLoadedPreviewThread(targetProjectId, targetAgentId) {
			const loadedThread = thread.value;
			if (loadedThread?.canContinueInPreview && loadedThread.projectId === targetProjectId && loadedThread.agentId === targetAgentId) sessionsStore.upsertThread(loadedThread);
		}
		let previewLoadRequestId = 0;
		/** Load the agent data required by the shared preview dock. */
		watch([projectId, agentId], async ([nextProjectId, nextAgentId]) => {
			const requestId = ++previewLoadRequestId;
			previewInitialized.value = false;
			agent.value = null;
			try {
				const [loadedAgent] = await Promise.all([
					getAgent(rootStore.restApiContext, nextProjectId, nextAgentId),
					fetchConfig(nextProjectId, nextAgentId),
					sessionsStore.fetchThreads(nextProjectId, nextAgentId, { filters: defaultAgentSessionFilters() })
				]);
				if (requestId === previewLoadRequestId) {
					agent.value = loadedAgent;
					upsertLoadedPreviewThread(nextProjectId, nextAgentId);
				}
			} finally {
				if (requestId === previewLoadRequestId) previewInitialized.value = true;
			}
		}, { immediate: true });
		watch(threadId, (nextThreadId) => {
			activeChatSessionId.value = nextThreadId;
		}, { immediate: true });
		/**
		* Clear this thread's data the instant the live preview session moves on, so
		* its error markers/title/metrics don't linger next to a new session.
		*/
		watch(isPreviewSessionStale, (stale) => {
			if (!stale) return;
			thread.value = null;
			executions.value = [];
		});
		/**
		* The new session has no thread to fetch until the backend records its first
		* turn, and that push is the signal it now has one — so re-bind the page to it.
		*/
		useAgentExecutionUpdates({
			projectId,
			agentId,
			threadId: effectiveSessionId
		}, () => {
			if (!isPreviewSessionStale.value || !effectiveSessionId.value) return;
			router.replace({
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: projectId.value,
					agentId: agentId.value,
					threadId: effectiveSessionId.value
				}
			});
		}, onExecutionUpdated);
		function formatDuration(ms) {
			if (!Number.isFinite(ms) || ms <= 0) return "";
			if (ms < 1e3) return `${ms}ms`;
			return `${(ms / 1e3).toFixed(1)}s`;
		}
		function formatDate(fullDate) {
			if (!fullDate) return "";
			const { date, time } = convertToDisplayDate(fullDate);
			return `${date} ${time}`;
		}
		const closeTimeline = useBackOrFallback(agentExecutionsRoute);
		function onBreadcrumbSelect(item) {
			if (item.id === projectId.value) router.push(projectRoute.value);
			else if (item.id === agentId.value) router.push(agentRoute.value);
		}
		function onSessionSelect(nextThreadId) {
			if (nextThreadId === "__empty__" || nextThreadId === threadId.value) return;
			router.push({
				name: AGENT_SESSION_DETAIL_VIEW,
				params: {
					projectId: projectId.value,
					agentId: agentId.value,
					threadId: nextThreadId
				}
			});
		}
		async function onDeletePreviewSession(sessionId) {
			if (!canDeleteSession.value) return;
			if (!await deleteSession(sessionId) || sessionId !== threadId.value) return;
			router.replace(agentExecutionsRoute.value);
		}
		/**
		* Raises a budget cap from the timeline's budget notice. Only a persisted cap
		* counts: a stale or failed save would stop the next run against the old cap.
		*/
		async function onIncreaseBudget(payload) {
			const current = localConfig.value;
			if (!canUpdate.value || !current) return false;
			const update = increasedBudgetConfig(current, payload.field, payload.amount);
			if (!update) return false;
			try {
				const result = await updateConfig(projectId.value, agentId.value, {
					...current,
					...update
				});
				if (result.stale) return false;
				localConfig.value = result.config;
				return true;
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSessions.showError.budget"));
				return false;
			}
		}
		function togglePreview() {
			if (!canPreviewSession.value) return;
			isPreviewOpen.value = !isPreviewOpen.value;
		}
		function viewPreviewTrace() {
			if (!effectiveSessionId.value) return;
			onSessionSelect(effectiveSessionId.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.view) }, [createVNode(AgentSessionTimelineHeader_default, {
				"breadcrumb-items": breadcrumbItems.value,
				"project-icon": unref(projectIcon),
				"session-title": sessionTitle.value,
				"session-options": sessionOptions.value,
				"show-metrics": Boolean(thread.value),
				"trigger-source": triggerSource.value,
				"trigger-icon": triggerIcon.value,
				"trigger-label": triggerLabel.value,
				"total-tokens": totalTokens.value,
				"total-cost": totalCost.value,
				"duration-label": durationLabel.value,
				"show-langsmith-export": unref(isLangSmithExportEnabled) && hasLoadedThread.value,
				"langsmith-export-loading": unref(isExporting),
				"show-preview": canPreviewSession.value,
				"is-preview-open": previewVisible.value,
				onBreadcrumbSelect,
				onSessionSelect,
				onLangsmithExport: _cache[0] || (_cache[0] = ($event) => unref(sendSession)({
					projectId: projectId.value,
					agentId: agentId.value,
					threadId: threadId.value
				})),
				onTogglePreview: togglePreview,
				onClose: unref(closeTimeline)
			}, null, 8, [
				"breadcrumb-items",
				"project-icon",
				"session-title",
				"session-options",
				"show-metrics",
				"trigger-source",
				"trigger-icon",
				"trigger-label",
				"total-tokens",
				"total-cost",
				"duration-label",
				"show-langsmith-export",
				"langsmith-export-loading",
				"show-preview",
				"is-preview-open",
				"onClose"
			]), createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.previewOpen]: previewVisible.value }]) }, [!isPreviewSessionStale.value ? (openBlock(), createBlock(AgentSessionTimelinePanel_default, {
				key: 0,
				"project-id": projectId.value,
				"agent-id": agentId.value,
				"thread-id": threadId.value,
				"increase-budget": unref(canUpdate) ? onIncreaseBudget : void 0,
				onLoaded: onPanelLoaded
			}, null, 8, [
				"project-id",
				"agent-id",
				"thread-id",
				"increase-budget"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.newSessionEmpty)
			}, [createVNode(unref(N8nEmptyState_default), {
				icon: {
					type: "icon",
					value: "message-square"
				},
				heading: unref(i18n).baseText("agentSessions.timeline.emptyState.heading"),
				description: unref(i18n).baseText("agentSessions.timeline.emptyState.description")
			}, null, 8, ["heading", "description"])], 2)), canPreviewSession.value ? (openBlock(), createBlock(AgentPreviewDock_default, {
				key: 2,
				"is-open": previewVisible.value,
				"session-title": dockSessionTitle.value,
				"session-options": unref(sessionMenu),
				"has-session": dockHasSession.value,
				initialized: previewInitialized.value,
				"project-id": projectId.value,
				"agent-id": agentId.value,
				agent: agent.value,
				"local-config": unref(localConfig),
				"connected-triggers": [],
				"effective-session-id": unref(effectiveSessionId),
				"new-session": unref(currentSessionIsEphemeral),
				"can-delete-session": canDeleteSession.value,
				"is-deleting-session": unref(isDeletingSession),
				onViewTrace: viewPreviewTrace,
				onNewSession: unref(onNewChat),
				onDeleteSession: onDeletePreviewSession,
				onSessionSelect: unref(onSessionPick),
				onSessionCreated: unref(markSessionCreated),
				onUsageUpdated,
				onClose: togglePreview
			}, null, 8, [
				"is-open",
				"session-title",
				"session-options",
				"has-session",
				"initialized",
				"project-id",
				"agent-id",
				"agent",
				"local-config",
				"effective-session-id",
				"new-session",
				"can-delete-session",
				"is-deleting-session",
				"onNewSession",
				"onSessionSelect",
				"onSessionCreated"
			])) : createCommentVNode("", true)], 2)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	view: "_view_1lkg6_1",
	content: "_content_1lkg6_8",
	previewOpen: "_previewOpen_1lkg6_17",
	newSessionEmpty: "_newSessionEmpty_1lkg6_26"
} }]]);
//#endregion
export { AgentSessionTimelineView_default as default };
