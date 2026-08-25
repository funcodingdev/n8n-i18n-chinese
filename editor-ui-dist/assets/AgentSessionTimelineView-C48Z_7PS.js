import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, R as inject, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, n as Transition, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, tt as provide, ut as useId, vn as normalizeClass, w as createBlock, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-a4RL4cTS.js";
import { t as useI18n$1 } from "./useI18n-CBepoSka.js";
import { i as NodeErrorView_default, t as RunData_default } from "./RunData-BkCrECJa.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nIconButton_default } from "./N8nIconButton-CMP0ih80.js";
import { D as useStorage, S as useResizeObserver, d as useDocumentVisibility, h as useEventListener, s as useActiveElement } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-CkIGinhL.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as DropdownMenu_default } from "./DropdownMenu-DPWQUABM.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { n as N8nToggle_default } from "./MarkdownEditor-BLoHOXEC.js";
import { t as N8nPopover_default } from "./N8nPopover-KufkLzBT.js";
import { t as N8nHoverCard_default } from "./N8nHoverCard-DIcwK7cm.js";
import { t as truncate } from "./truncate-B0m9bkui.js";
import { t as N8nCallout_default } from "./N8nCallout-DqmF6S4S.js";
import { t as N8nBadge_default } from "./N8nBadge-DOliSzFF.js";
import { t as ElNotification } from "./notification-C-SzoWln.js";
import { t as N8nCard_default } from "./N8nCard-CEpSF4gP.js";
import { c as useRouter, s as useRoute } from "./vue-router-Dl3cOHxO.js";
import { t as N8nRecycleScroller_default } from "./N8nRecycleScroller-C40uNXfM.js";
import { C as disposeWorkflowDocumentStore, E as useWorkflowDocumentStore, R as useNodeTypesStore, S as createWorkflowDocumentId, Tr as shouldIgnoreCanvasShortcut, Yt as useWorkflowHelpers, _ as disposeWorkflowExecutionStateStore, _i as useExecutionDataStore, hi as disposeExecutionDataStore, hn as useProjectsStore, in as disposeNDVStore, mi as createExecutionDataId, sn as useNDVStore, y as useWorkflowExecutionStateStore } from "./workflows.store-DHQ2sN1t.js";
import { c as delegateLabel, d as useSubAgentNames, i as AgentChatMessageAttachments_default, l as isDelegateSubAgentTool, n as useAgentSessionLangSmithExport, o as parseIntegrationActionCard, p as useAgentBuilderSession, t as AgentPreviewDock_default, u as resolveSubAgentName } from "./AgentPreviewDock-BWMArk1S.js";
import { t as N8nBreadcrumbs_default } from "./N8nBreadcrumbs-eMM3cHCx.js";
import { It as Workflow, di as deepCopy, wi as UnexpectedError } from "./src-JwBmTNgK.js";
import { t as core_default } from "./core-DzQ0sTSt.js";
import { t as json } from "./json-D0asYzzw.js";
import { a as python, i as typescript } from "./xml-C25YAwwQ.js";
import { t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as VIEWS } from "./views-o5a97N_l.js";
import { n as useToast } from "./useToast-BdIkYyHv.js";
import { Sr as AGENT_SESSION_DETAIL_VIEW, gr as AGENT_BUILDER_VIEW, ha as WorkflowIdKey, jr as EXECUTIONS_SECTION_KEY, ma as WorkflowDocumentStoreKey } from "./constants-BP1FOJvU.js";
import { t as useExecutionsStore } from "./executions.store-CxeMRclH.js";
import { F as useWorkflowNormalization, w as ChatSymbol } from "./useCanvasOperations-Z676Ce9K.js";
import { t as VueMarkdown } from "./VueMarkdown-H0C41E9_.js";
import { t as usePushConnectionStore } from "./pushConnection.store-Yi-lPmAk.js";
import { d as getAgent } from "./useAgentApi-sdUpTCk-.js";
import { t as convertToDisplayDate } from "./dateFormatter-k-XwVUWb.js";
import { t as isRecord } from "./is-record-DY9wcq5G.js";
import { n as getToolNameTranslationKey, r as resolveToolNameForDisplay, t as formatToolNameForDisplay } from "./toolDisplayName-Bc8yUCGO.js";
import { t as useAgentConfig } from "./useAgentConfig-Ca-tyIpA.js";
import { d as flattenLogEntries, g as getSubtreeTotalConsumedTokens, o as createLogTree, t as LogsOverviewRow_default, w as isNodeLog } from "./LogsOverviewRow-CP_wfWKM.js";
import { n as useAgentSessionsStore, t as useThreadTitle } from "./thread-title-FruGLeEH.js";
//#region ../@n8n/design-system/src/components/N8nCodeBlock/CodeBlock.types.ts
var CODE_BLOCK_LANGUAGES = [
	"json",
	"python",
	"typescript"
];
//#endregion
//#region ../@n8n/design-system/src/components/N8nCodeBlock/CodeBlock.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["aria-label", "tabindex"];
var _hoisted_2$5 = ["innerHTML"];
var CodeBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CodeBlock",
	props: /* @__PURE__ */ mergeModels({
		code: {},
		language: { default: "auto" },
		copyable: {
			type: Boolean,
			default: true
		},
		maxHeight: { default: 280 },
		ariaLabel: { default: void 0 }
	}, {
		"collapsed": {
			type: Boolean,
			default: true
		},
		"collapsedModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["copy"], ["update:collapsed"]),
	setup(__props, { emit: __emit }) {
		core_default.registerLanguage("json", json);
		core_default.registerLanguage("python", python);
		core_default.registerLanguage("typescript", typescript);
		const props = __props;
		const emit = __emit;
		const collapsed = useModel(__props, "collapsed");
		const preRef = useTemplateRef("pre");
		const explicitHeight = ref();
		const isCollapsible = ref(false);
		const { t } = useI18n$1();
		const highlightedCode = computed(() => {
			if (props.language === "auto") return core_default.highlightAuto(props.code, [...CODE_BLOCK_LANGUAGES]).value;
			return core_default.highlight(props.code, {
				language: props.language,
				ignoreIllegals: true
			}).value;
		});
		const heightStyle = computed(() => {
			if (explicitHeight.value) return { height: explicitHeight.value };
			return collapsed.value ? { maxHeight: `${props.maxHeight}px` } : void 0;
		});
		const expandButtonLabel = computed(() => collapsed.value ? t("codeBlock.expand") : t("codeBlock.collapse"));
		const expandButtonIcon = computed(() => collapsed.value ? "arrow-down" : "arrow-up");
		const isClipboardAvailable = typeof navigator !== "undefined" && typeof navigator.clipboard?.writeText === "function";
		/** Here we check if the collapsible control is needed.
		* Only if we exceed the maxHeight (default: 280px) do we show the Expand/Collapse toggle
		*/
		function measureCollapsibility() {
			const element = preRef.value;
			isCollapsible.value = element ? element.scrollHeight - props.maxHeight > 1 : false;
		}
		useResizeObserver(preRef, measureCollapsibility);
		watch(() => [
			preRef.value,
			props.code,
			props.maxHeight
		], measureCollapsibility, {
			flush: "post",
			immediate: true
		});
		async function copyCode() {
			try {
				await navigator.clipboard.writeText(props.code);
				ElNotification({
					title: t("codeBlock.copiedToClipboard"),
					type: "success",
					position: "bottom-right"
				});
				emit("copy", props.code);
			} catch {
				ElNotification({
					title: t("codeBlock.copyFailed"),
					type: "error",
					position: "bottom-right"
				});
			}
		}
		async function toggleCollapsed() {
			const element = preRef.value;
			if (!element) return;
			explicitHeight.value = `${element.getBoundingClientRect().height}px`;
			await nextTick();
			/** Force layout so browser re-registers the transitions starting height.
			* Prevents accidental batch into a single frame.
			*/
			element.offsetHeight;
			collapsed.value = !collapsed.value;
			await nextTick();
			const contentHeight = element.scrollHeight;
			explicitHeight.value = `${collapsed.value ? Math.min(contentHeight, props.maxHeight) : contentHeight}px`;
		}
		function onHeightTransitionEnd(event) {
			if (event.propertyName === "height" && event.target === preRef.value) explicitHeight.value = void 0;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.codeBlock) }, [
				createBaseVNode("pre", {
					ref: "pre",
					class: normalizeClass([_ctx.$style.pre, { [_ctx.$style.isExpanded]: !collapsed.value }]),
					style: normalizeStyle(heightStyle.value),
					"aria-label": __props.ariaLabel,
					tabindex: __props.ariaLabel ? 0 : void 0,
					onTransitionend: onHeightTransitionEnd
				}, [createBaseVNode("code", {
					class: "hljs",
					innerHTML: highlightedCode.value
				}, null, 8, _hoisted_2$5)], 46, _hoisted_1$6),
				__props.copyable && unref(isClipboardAvailable) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.actions)
				}, [createVNode(unref(N8nTooltip_default), { content: unref(t)("codeBlock.copy") }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						icon: "copy",
						"icon-only": "",
						"icon-size": "medium",
						size: "small",
						variant: "ghost",
						"aria-label": unref(t)("codeBlock.copy"),
						title: unref(t)("codeBlock.copy"),
						onClick: copyCode
					}, null, 8, ["aria-label", "title"])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true),
				isCollapsible.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.expandButtonContainer)
				}, [createVNode(unref(N8nTooltip_default), { content: expandButtonLabel.value }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "small",
						icon: expandButtonIcon.value,
						"icon-only": "",
						"icon-size": "medium",
						variant: "subtle",
						class: normalizeClass(_ctx.$style.expandButton),
						"aria-label": expandButtonLabel.value,
						onClick: toggleCollapsed
					}, null, 8, [
						"icon",
						"class",
						"aria-label"
					])]),
					_: 1
				}, 8, ["content"])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nCodeBlock/CodeBlock.vue?vue&type=style&index=0&lang.module.scss
var codeBlock = "_codeBlock_17nba_390";
var pre = "_pre_17nba_397";
var actions = "_actions_17nba_402";
var isExpanded = "_isExpanded_17nba_441";
var expandButtonContainer = "_expandButtonContainer_17nba_445";
var expandButton = "_expandButton_17nba_445";
var shimmer = "_shimmer_17nba_1";
var spin = "_spin_17nba_1";
var opacityPulse = "_opacityPulse_17nba_1";
var popoverIn = "_popoverIn_17nba_1";
var fadeIn = "_fadeIn_17nba_1";
var collapsibleSlideDown = "_collapsibleSlideDown_17nba_1";
var collapsibleSlideUp = "_collapsibleSlideUp_17nba_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_17nba_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_17nba_1";
var blurSwapIn = "_blurSwapIn_17nba_1";
var blurSwapOut = "_blurSwapOut_17nba_1";
var pulseGlow = "_pulseGlow_17nba_1";
var pulseGlowDelayed = "_pulseGlowDelayed_17nba_1";
var fade = "_fade_17nba_1";
var fadeInUp = "_fadeInUp_17nba_1";
var fadeInDown = "_fadeInDown_17nba_1";
var fadeInLeft = "_fadeInLeft_17nba_1";
var fadeInRight = "_fadeInRight_17nba_1";
var fadeOut = "_fadeOut_17nba_1";
var fadeOutDown = "_fadeOutDown_17nba_1";
var fadeOutUp = "_fadeOutUp_17nba_1";
var fadeOutLeft = "_fadeOutLeft_17nba_1";
var fadeOutRight = "_fadeOutRight_17nba_1";
var ping = "_ping_17nba_1";
var blinkBackground = "_blinkBackground_17nba_1";
var typingBlink = "_typingBlink_17nba_1";
var CodeBlock_vue_vue_type_style_index_0_lang_module_default = {
	codeBlock,
	pre,
	actions,
	isExpanded,
	expandButtonContainer,
	expandButton,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_17nba_1",
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
var CodeBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CodeBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CodeBlock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentSessionTimelineHeader.vue?vue&type=script&setup=true&lang.ts
var AgentSessionTimelineHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelineHeader",
	props: {
		breadcrumbItems: {},
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.topBar) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.topBarLeft) }, [createVNode(unref(N8nBreadcrumbs_default), {
				items: props.breadcrumbItems,
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
			}, 8, ["items"])], 2), props.showMetrics ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.topBarRight)
			}, [
				props.showLangsmithExport ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
				props.triggerSource ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.metricItem)
				}, [createVNode(unref(N8nIcon_default), {
					icon: props.triggerIcon,
					size: 12
				}, null, 8, ["icon"]), createBaseVNode("span", null, toDisplayString(props.triggerLabel), 1)], 2)) : createCommentVNode("", true),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.sep) }, "·", 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.metricItem) }, [createVNode(unref(N8nIcon_default), {
					icon: "circle-dollar-sign",
					size: 12
				}), createBaseVNode("span", null, toDisplayString(props.totalTokens.toLocaleString()) + "t ($" + toDisplayString(props.totalCost.toFixed(4)) + ")", 1)], 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.sep) }, "·", 2),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.metricItem) }, [createVNode(unref(N8nIcon_default), {
					icon: "clock",
					size: 12
				}), createBaseVNode("span", null, toDisplayString(props.durationLabel), 1)], 2),
				createVNode(unref(N8nToggle_default), {
					"model-value": props.isPreviewOpen,
					variant: "ghost",
					size: "medium",
					icon: "play",
					label: unref(i18n).baseText("agents.builder.preview.button"),
					"data-testid": "agent-session-timeline-preview-btn",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("toggle-preview"))
				}, null, 8, ["model-value", "label"]),
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
});
var AgentSessionTimelineHeader_vue_vue_type_style_index_0_lang_module_default = {
	topBar: "_topBar_1gdns_125",
	topBarLeft: "_topBarLeft_1gdns_136",
	topBarRight: "_topBarRight_1gdns_154",
	sep: "_sep_1gdns_165",
	metricItem: "_metricItem_1gdns_169",
	crumbSeparator: "_crumbSeparator_1gdns_176",
	switcherButton: "_switcherButton_1gdns_183",
	switcherLabel: "_switcherLabel_1gdns_188",
	sessionDropdownMenu: "_sessionDropdownMenu_1gdns_196",
	sessionDropdownName: "_sessionDropdownName_1gdns_207",
	sessionDropdownDate: "_sessionDropdownDate_1gdns_215"
};
var AgentSessionTimelineHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionTimelineHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionTimelineHeader_vue_vue_type_style_index_0_lang_module_default }]]);
function endTimestampOf(item) {
	return item.endTimestamp ?? item.timestamp;
}
/** A `delegate_subagent` tool call — rendered as a sub-agent (bot icon) rather than a plain tool. */
function isSubAgentTimelineItem(item) {
	return item.kind === "tool" && isDelegateSubAgentTool(item.toolName);
}
function isErroredToolCallTimelineItem(item) {
	if (item.kind !== "tool" && item.kind !== "node" && item.kind !== "workflow") return false;
	return item.toolOutcome === "error" || item.toolOutcome === void 0 && item.toolSuccess === false || item.kind === "workflow" && isRecord(item.toolOutput) && item.toolOutput.status === "error";
}
function hitlTimelineNameKey(item) {
	if (item.hitlRequestType !== "approval") return void 0;
	if (item.kind === "suspension") return "agentSessions.timeline.approvalRequestForTool";
	if (item.kind === "hitl-response") return "agentSessions.timeline.approvalResponseForTool";
}
function linkedToolDisplayName(item, i18n) {
	return item.hitlToolDisplayName ?? item.workflowName ?? item.nodeDisplayName ?? resolveToolNameForDisplay(item.toolName, i18n);
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
			theme: "default"
		};
	}
	if (isErroredToolCallTimelineItem(item)) return {
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
	if (isErroredToolCallTimelineItem(item)) return "error";
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
	if (item.kind === "suspension") parts.push(labelForKey(item.hitlRequestType === "approval" ? "approval-requested" : "hitl-requested"));
	if (item.kind === "hitl-response") parts.push(labelForKey("hitl-response"));
	if (item.hitlResponseStatus) parts.push(labelForKey(item.hitlResponseStatus));
	if (isErroredToolCallTimelineItem(item)) parts.push(labelForKey("error"));
	parts.push(item.content, item.toolName, item.workflowName, item.nodeDisplayName, item.subAgentName, searchableValueText(item.toolInput), searchableValueText(item.toolOutput), searchableValueText(item.hitlRequest), searchableValueText(item.hitlResponse));
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
	tool: "var(--color--green-600)",
	node: "var(--color--neutral-600)",
	workflow: "var(--color--orange-600)",
	suspension: "var(--color--yellow-600)",
	"hitl-response": "var(--color--blue-600)"
};
function chartBlockColor(kind) {
	return CHART_BLOCK_COLOR_MAP[kind];
}
function builtinToolLabelKey(toolName, _output) {
	return getToolNameTranslationKey(toolName) ?? null;
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
function toolCallOutcome(event) {
	if (event.endTime === 0) return void 0;
	return event.success ? "success" : "error";
}
function inferHitlRequestType(event, toolCall, legacyApprovalToolCallIds) {
	if (isApprovalRequest(event.suspendPayload)) return "approval";
	if (legacyApprovalToolCallIds.has(event.toolCallId)) return "approval";
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
function flattenExecutionsToTimelineItems(executions) {
	const items = [];
	const initialToolCalls = /* @__PURE__ */ new Map();
	const initialToolItems = /* @__PURE__ */ new Map();
	const hitlContexts = /* @__PURE__ */ new Map();
	const legacyApprovalToolCallIds = collectLegacyApprovalToolCallIds(executions);
	for (const exec of executions) {
		const isResumed = exec.hitlStatus === "resumed";
		let resumedTagUsed = false;
		if (exec.userMessage || exec.attachments?.length) items.push({
			kind: "user",
			executionId: exec.id,
			content: exec.userMessage ?? "",
			timestamp: exec.startedAt ? new Date(exec.startedAt).getTime() : 0,
			...exec.attachments?.length && { attachments: exec.attachments }
		});
		for (const event of timelineEvents(exec)) if (event.type === "text") {
			const showResumed = isResumed && !resumedTagUsed;
			if (showResumed) resumedTagUsed = true;
			const startTs = event.timestamp ?? 0;
			items.push({
				kind: "agent",
				executionId: exec.id,
				content: event.content,
				timestamp: startTs,
				endTimestamp: event.endTime && event.endTime > startTs ? event.endTime : void 0,
				resumed: showResumed
			});
		} else if (event.type === "tool-call") {
			const hitlContext = hitlContexts.get(event.toolCallId);
			if (hitlContext) {
				mergeResumedToolResult(hitlContext.toolItem, event);
				if (!hitlContext.hasExplicitResponse) items.push(hitlResponseItem(hitlContext, exec.id, event.output, event.startTime, true));
				hitlContexts.delete(event.toolCallId);
				continue;
			}
			const isWorkflow = event.kind === "workflow";
			const isNode = event.kind === "node";
			if (event.toolCallId) initialToolCalls.set(event.toolCallId, event);
			const item = {
				kind: isWorkflow ? "workflow" : isNode ? "node" : "tool",
				executionId: exec.id,
				toolName: event.name,
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
		case "subagent": return {
			backgroundColor: "var(--color--mint-200)",
			color: "var(--color--mint-950)"
		};
		case "tool": return {
			backgroundColor: "var(--color--green-200)",
			color: "var(--color--green-950)"
		};
		case "workflow": return {
			backgroundColor: "var(--color--orange-200)",
			color: "var(--color--orange-950)"
		};
		case "node": return {
			backgroundColor: "var(--color--neutral-200)",
			color: "var(--color--neutral-950)"
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
var SessionTimelinePill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
				case "user": return "user";
				case "agent":
				case "subagent": return "bot";
				case "tool": return "wrench";
				case "workflow": return "workflow";
				case "node": return "box";
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
				size: "small"
			}, null, 8, ["icon"]), __props.showLabel && __props.label ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.label)
			}, toDisplayString(__props.label), 3)) : createCommentVNode("", true)], 6);
		};
	}
});
var SessionTimelinePill_vue_vue_type_style_index_0_lang_module_default = {
	pill: "_pill_lnlqj_125",
	withLabel: "_withLabel_lnlqj_135",
	label: "_label_lnlqj_141"
};
var SessionTimelinePill_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelinePill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelinePill_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineChart.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["onMouseenter"];
var _hoisted_2$4 = [
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
var SessionTimelineChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "suspension": return i18n.baseText(item.hitlRequestType === "approval" ? "agentSessions.timeline.approvalRequested" : "agentSessions.timeline.hitlRequested");
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				default: return "";
			}
		}
		function popoverName(item) {
			if (isSubAgentTimelineItem(item)) return item.subAgentName ?? formatToolNameForDisplay(item.toolName);
			switch (item.kind) {
				case "user":
				case "agent": return truncate(item.content ?? "", 80);
				case "tool": return resolveToolNameForDisplay(item.toolName, i18n);
				case "workflow": return item.workflowName ?? formatToolNameForDisplay(item.toolName);
				case "node": return item.nodeDisplayName ?? formatToolNameForDisplay(item.toolName);
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
							theme: activePopoverStatus.value.theme,
							size: "xsmall",
							"data-test-id": activePopoverStatus.value.kind === "hitl-response" ? "timeline-popover-hitl-response-badge" : "timeline-popover-tool-error-badge"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(activePopoverStatus.value.labelKey)), 1)]),
							_: 1
						}, 8, ["theme", "data-test-id"])) : createCommentVNode("", true),
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
						class: normalizeClass(_ctx.$style.cell),
						style: normalizeStyle(cellStyle(seg))
					}, [seg.kind === "idle" ? (openBlock(), createElementBlock("div", {
						key: 0,
						"data-test-id": "timeline-idle",
						class: normalizeClass(_ctx.$style.idle),
						onMouseenter: ($event) => showPopover(seg, $event),
						onMouseleave: _cache[1] || (_cache[1] = ($event) => hidePopover($event))
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.idleFill) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")), 3)], 42, _hoisted_1$5)) : (openBlock(), createElementBlock("button", {
						key: 1,
						type: "button",
						"data-test-id": "timeline-block",
						"data-timeline-index": seg.index,
						"data-error": unref(isErroredToolCallTimelineItem)(seg.item) ? "true" : void 0,
						"aria-label": blockAriaLabel(seg.item),
						class: normalizeClass([
							_ctx.$style.block,
							props.selectedIndex === seg.index && _ctx.$style.selected,
							unref(isErroredToolCallTimelineItem)(seg.item) && _ctx.$style.error
						]),
						"data-selected": props.selectedIndex === seg.index ? "true" : void 0,
						style: normalizeStyle(eventStyle(seg.item)),
						onMouseenter: ($event) => showPopover(seg, $event),
						onMouseleave: _cache[2] || (_cache[2] = ($event) => hidePopover($event)),
						onFocus: ($event) => showPopover(seg, $event),
						onBlur: _cache[3] || (_cache[3] = ($event) => hidePopover($event)),
						onClick: ($event) => onClick(seg.index, seg.item)
					}, null, 46, _hoisted_2$4))], 6);
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
});
var SessionTimelineChart_vue_vue_type_style_index_0_lang_module_default = {
	carousel: "_carousel_6vbsa_126",
	chart: "_chart_6vbsa_134",
	cell: "_cell_6vbsa_151",
	block: "_block_6vbsa_163",
	selected: "_selected_6vbsa_163",
	idle: "_idle_6vbsa_167",
	idleFill: "_idleFill_6vbsa_178",
	error: "_error_6vbsa_211",
	hoverCardContent: "_hoverCardContent_6vbsa_225",
	popoverInner: "_popoverInner_6vbsa_238",
	popoverName: "_popoverName_6vbsa_246",
	popoverMeta: "_popoverMeta_6vbsa_252"
};
var SessionTimelineChart_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelineChart_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelineChart_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionEventFilter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { key: 0 };
var _hoisted_2$3 = ["data-test-id"];
var _hoisted_3$2 = ["checked", "onChange"];
var SessionEventFilter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		const open = ref(false);
		function toggle(key, checked) {
			const next = new Set(props.selected);
			if (checked) next.add(key);
			else next.delete(key);
			emit("update", next);
		}
		function clearAll() {
			emit("update", /* @__PURE__ */ new Set());
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: open.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => open.value = $event),
				side: "bottom",
				align: "end",
				"content-class": _ctx.$style.panel
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					icon: "funnel",
					"data-test-id": "filter-trigger"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("agentSessions.timeline.events")), 1), props.selected.size > 0 ? (openBlock(), createElementBlock("span", _hoisted_1$4, "\xA0(" + toDisplayString(props.selected.size) + ")", 1)) : createCommentVNode("", true)]),
					_: 1
				})]),
				content: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.available, (opt) => {
					return openBlock(), createElementBlock("label", {
						key: opt.key,
						"data-test-id": `filter-option-${opt.key}`,
						class: normalizeClass(_ctx.$style.option)
					}, [
						createBaseVNode("input", {
							type: "checkbox",
							checked: props.selected.has(opt.key),
							onChange: ($event) => toggle(opt.key, $event.target.checked)
						}, null, 40, _hoisted_3$2),
						opt.presentation === "badge" ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.label)
						}, [createVNode(unref(N8nBadge_default), {
							theme: opt.badgeTheme,
							size: "xsmall",
							"data-test-id": `filter-status-pill-${opt.key}`
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(opt.label), 1)]),
							_: 2
						}, 1032, ["theme", "data-test-id"])], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.swatch),
							style: normalizeStyle({ backgroundColor: unref(swatchBackground)(opt.color) })
						}, null, 6), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(opt.label), 3)], 64)),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.count) }, toDisplayString(opt.count), 3)
					], 10, _hoisted_2$3);
				}), 128)), props.selected.size > 0 ? (openBlock(), createElementBlock("button", {
					key: 0,
					type: "button",
					"data-test-id": "filter-clear",
					class: normalizeClass(_ctx.$style.clear),
					onClick: clearAll
				}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.clearFilter")), 3)) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["open", "content-class"]);
		};
	}
});
var SessionEventFilter_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_adhj3_125",
	option: "_option_adhj3_129",
	swatch: "_swatch_adhj3_138",
	label: "_label_adhj3_144",
	count: "_count_adhj3_148",
	clear: "_clear_adhj3_152"
};
var SessionEventFilter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionEventFilter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionEventFilter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["href"];
var _hoisted_2$2 = { key: 1 };
var SessionTimelineRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
				case "user":
				case "agent": return truncate(it.content ?? "", 500);
				case "tool":
					if (isSubAgent.value) return delegateLabel(i18n, it.subAgentName ?? "");
					return resolveToolNameForDisplay(it.toolName, i18n);
				case "workflow": return it.workflowName ?? formatToolNameForDisplay(it.toolName);
				case "node": return it.nodeDisplayName ?? formatToolNameForDisplay(it.toolName);
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
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "suspension": return i18n.baseText(props.item.hitlRequestType === "approval" ? "agentSessions.timeline.approvalRequested" : "agentSessions.timeline.hitlRequested");
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
					default: withCtx(() => [createVNode(SessionTimelinePill_default, { kind: pillKind.value }, null, 8, ["kind"])]),
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
						theme: status.value.theme,
						size: "xsmall",
						"data-test-id": status.value.kind === "hitl-response" ? "timeline-hitl-response-badge" : "timeline-tool-error-badge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(status.value.labelKey)), 1)]),
						_: 1
					}, 8, [
						"class",
						"theme",
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
});
var SessionTimelineRow_vue_vue_type_style_index_0_lang_module_default = {
	row: "_row_15bjw_126",
	selected: "_selected_15bjw_141",
	info: "_info_15bjw_145",
	statusBadge: "_statusBadge_15bjw_156",
	workflowLink: "_workflowLink_15bjw_166",
	attachmentChip: "_attachmentChip_15bjw_171",
	time: "_time_15bjw_188"
};
var SessionTimelineRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelineRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelineRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionTimelineTable.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["aria-label"];
var _hoisted_2$1 = [
	"data-timeline-row-id",
	"tabindex",
	"aria-selected",
	"onClick",
	"onKeydown"
];
var _hoisted_3$1 = ["data-timeline-row-id"];
var _hoisted_4$1 = [
	"data-timeline-row-id",
	"tabindex",
	"aria-selected",
	"onClick",
	"onKeydown"
];
var _hoisted_5$1 = ["data-timeline-row-id"];
var ROW_HEIGHT = 40;
var SCROLL_PADDING = 24;
var VIRTUALIZE_AFTER_ROWS = 100;
var SessionTimelineTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SessionTimelineTable",
	props: {
		items: {},
		selectedIndex: {},
		visibleKinds: {},
		searchQuery: {},
		idleRanges: {}
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
			switch (key) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "suspension": return i18n.baseText("agentSessions.timeline.hitlRequest");
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				case "approval-requested": return i18n.baseText("agentSessions.timeline.approvalRequested");
				case "hitl-requested": return i18n.baseText("agentSessions.timeline.hitlRequested");
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
			return [...events, ...idles].sort((a, b) => a.sortKey - b.sortKey);
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
				}, null, 8, ["item", "selected"])], 42, _hoisted_2$1)) : (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "timeline-idle-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.idleRow),
					role: "row"
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.idlePill),
					role: "gridcell"
				}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")) + " · " + toDisplayString(unref(formatDuration)(row.range.end - row.range.start)), 3)], 10, _hoisted_3$1))], 64);
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
				}, null, 8, ["item", "selected"])], 42, _hoisted_4$1)) : (openBlock(), createElementBlock("div", {
					key: 1,
					"data-test-id": "timeline-idle-row",
					"data-timeline-row-id": row.id,
					class: normalizeClass(_ctx.$style.idleRow),
					role: "row"
				}, [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.idlePill),
					role: "gridcell"
				}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.idle")) + " · " + toDisplayString(unref(formatDuration)(row.range.end - row.range.start)), 3)], 10, _hoisted_5$1))]),
				_: 1
			}, 8, ["items"])) : (openBlock(), createElementBlock("div", {
				key: 2,
				"data-test-id": "timeline-empty",
				class: normalizeClass(_ctx.$style.empty)
			}, toDisplayString(unref(i18n).baseText("executionsLandingPage.noResults")), 3))], 10, _hoisted_1$2);
		};
	}
});
var SessionTimelineTable_vue_vue_type_style_index_0_lang_module_default = {
	table: "_table_15wmh_126",
	rowWrapper: "_rowWrapper_15wmh_132",
	empty: "_empty_15wmh_136",
	directRows: "_directRows_15wmh_153",
	canScrollDown: "_canScrollDown_15wmh_163",
	canScrollUp: "_canScrollUp_15wmh_167",
	idleRow: "_idleRow_15wmh_187",
	idlePill: "_idlePill_15wmh_201"
};
var SessionTimelineTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionTimelineTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionTimelineTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/RichInteractionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["src", "alt"];
var RichInteractionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
});
var RichInteractionCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_7baby_125",
	title: "_title_7baby_130",
	message: "_message_7baby_135",
	section: "_section_7baby_140",
	divider: "_divider_7baby_144",
	button: "_button_7baby_150",
	buttonPill: "_buttonPill_7baby_156",
	buttonSelected: "_buttonSelected_7baby_165",
	selectGroup: "_selectGroup_7baby_171",
	selectLabel: "_selectLabel_7baby_175",
	selectOption: "_selectOption_7baby_180",
	optionDot: "_optionDot_7baby_187",
	optionSelected: "_optionSelected_7baby_195",
	optionDesc: "_optionDesc_7baby_200",
	fieldsGroup: "_fieldsGroup_7baby_205",
	fieldRow: "_fieldRow_7baby_209",
	fieldLabel: "_fieldLabel_7baby_215",
	image: "_image_7baby_220",
	response: "_response_7baby_226"
};
var RichInteractionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RichInteractionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RichInteractionCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ndv/runData/standaloneRunData.ts
var StandaloneRunDataHostKey = Symbol("StandaloneRunDataHost");
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
var StandaloneRunDataHost_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
});
var StandaloneRunDataHost_vue_vue_type_style_index_0_lang_module_default = { root: "_root_1dd6a_2" };
var StandaloneRunDataHost_default = /* @__PURE__ */ _plugin_vue_export_helper_default(StandaloneRunDataHost_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": StandaloneRunDataHost_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/WorkflowExecutionLogViewer.vue?vue&type=script&setup=true&lang.ts
var WorkflowExecutionLogViewer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowExecutionLogViewer",
	props: {
		workflowId: {},
		workflowExecutionId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const executionsStore = useExecutionsStore();
		const workflowHelpers = useWorkflowHelpers();
		const nodeTypesStore = useNodeTypesStore();
		const loading = ref(true);
		const errorMessage = ref(null);
		const execution = ref(null);
		const expanded = ref({});
		const selected = ref(null);
		const workflow = computed(() => {
			if (!execution.value?.workflowData) return null;
			try {
				return new Workflow({
					...execution.value.workflowData,
					nodeTypes: workflowHelpers.getNodeTypes()
				});
			} catch {
				return null;
			}
		});
		const entries = computed(() => {
			if (!workflow.value || !execution.value) return [];
			return createLogTree(workflow.value, execution.value);
		});
		const flatEntries = computed(() => flattenLogEntries(entries.value, expanded.value));
		const latestNodeInfo = computed(() => {
			const map = {};
			if (!workflow.value) return map;
			for (const node of Object.values(workflow.value.nodes ?? {})) map[node.id] = {
				deleted: false,
				disabled: !!node.disabled,
				name: node.name
			};
			return map;
		});
		const shouldShowTokenCountColumn = computed(() => entries.value.some((entry) => getSubtreeTotalConsumedTokens(entry, true).totalTokens > 0));
		const statusBanner = computed(() => {
			const s = execution.value?.status;
			if (s === "running" || s === "new") return i18n.baseText("agentSessions.workflowLog.stillRunning");
			if (s === "waiting") return i18n.baseText("agentSessions.workflowLog.waiting");
			return "";
		});
		function toggleExpanded(entry) {
			expanded.value = {
				...expanded.value,
				[entry.id]: !expanded.value[entry.id]
			};
		}
		function toggleSelected(entry) {
			selected.value = selected.value?.id === entry.id ? null : entry;
		}
		function handleRunDataSetupError() {
			errorMessage.value = i18n.baseText("agentSessions.workflowLog.unavailable");
		}
		const selectedNode = computed(() => selected.value?.type === "node" ? selected.value : null);
		function getLatestInfo(entry) {
			return isNodeLog(entry) ? latestNodeInfo.value[entry.node.id] : void 0;
		}
		const isTriggerSelected = computed(() => {
			const node = selectedNode.value?.node;
			if (!node) return false;
			return nodeTypesStore.getNodeType(node.type, node.typeVersion)?.group?.includes("trigger") ?? false;
		});
		const inputBinding = computed(() => {
			const entry = selectedNode.value;
			if (!entry) return null;
			const source = entry.runData?.source?.[0];
			if (!source) return null;
			const prevNode = entry.workflow.getNode(source.previousNode);
			if (!prevNode) return null;
			return {
				node: {
					...prevNode,
					disabled: false
				},
				runIndex: source.previousNodeRun ?? 0,
				overrideOutputs: [source.previousNodeOutput ?? 0]
			};
		});
		const selectedError = computed(() => {
			const err = selectedNode.value?.runData?.error;
			if (!err || typeof err !== "object") return null;
			return err;
		});
		let unmounted = false;
		onMounted(async () => {
			try {
				const result = await executionsStore.fetchExecution(props.workflowExecutionId);
				if (unmounted) return;
				if (!result) errorMessage.value = i18n.baseText("agentSessions.workflowLog.unavailable");
				else {
					execution.value = result;
					const first = flatEntries.value[0];
					if (first) selected.value = first;
				}
			} catch {
				if (unmounted) return;
				errorMessage.value = i18n.baseText("agentSessions.workflowLog.unavailable");
			} finally {
				if (!unmounted) loading.value = false;
			}
		});
		onBeforeUnmount(() => {
			unmounted = true;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [loading.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.loading)
			}, toDisplayString(unref(i18n).baseText("agentSessions.workflowLog.loading")), 3)) : errorMessage.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.errorBanner)
			}, toDisplayString(errorMessage.value), 3)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
				statusBanner.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.banner)
				}, toDisplayString(statusBanner.value), 3)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.rows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(flatEntries.value, (entry) => {
					return openBlock(), createBlock(LogsOverviewRow_default, {
						key: entry.id,
						"data-test-id": "log-node-row",
						data: entry,
						"is-selected": selected.value?.id === entry.id,
						"is-read-only": true,
						"should-show-token-count-column": shouldShowTokenCountColumn.value,
						"is-compact": true,
						"latest-info": getLatestInfo(entry),
						expanded: !!expanded.value[entry.id],
						"can-open-ndv": false,
						onToggleExpanded: ($event) => toggleExpanded(entry),
						onToggleSelected: ($event) => toggleSelected(entry)
					}, null, 8, [
						"data",
						"is-selected",
						"should-show-token-count-column",
						"latest-info",
						"expanded",
						"onToggleExpanded",
						"onToggleSelected"
					]);
				}), 128))], 2),
				selectedNode.value && execution.value ? (openBlock(), createBlock(StandaloneRunDataHost_default, {
					key: 1,
					execution: execution.value,
					onSetupError: handleRunDataSetupError
				}, {
					default: withCtx(({ workflowObject, workflowExecution }) => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.detail) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.detailHeader) }, toDisplayString(selectedNode.value.node.name), 3),
						!isTriggerSelected.value && inputBinding.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.pane),
							"data-test-id": "agent-session-run-data-input"
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), (openBlock(), createBlock(StandaloneRunData_default, {
							key: `input-${selectedNode.value.id}`,
							node: inputBinding.value.node,
							"run-index": inputBinding.value.runIndex,
							"override-outputs": inputBinding.value.overrideOutputs,
							"workflow-object": workflowObject,
							"workflow-execution": workflowExecution,
							"pane-type": "input"
						}, null, 8, [
							"node",
							"run-index",
							"override-outputs",
							"workflow-object",
							"workflow-execution"
						]))], 2)) : createCommentVNode("", true),
						createBaseVNode("div", {
							class: normalizeClass(_ctx.$style.pane),
							"data-test-id": "agent-session-run-data-output"
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.paneTitle) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), selectedError.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.errorPaneBody),
							"data-test-id": "node-error-card"
						}, [createVNode(NodeErrorView_default, {
							error: selectedError.value,
							compact: true,
							"show-details": ""
						}, null, 8, ["error"])], 2)) : (openBlock(), createBlock(StandaloneRunData_default, {
							key: `output-${selectedNode.value.id}`,
							node: selectedNode.value.node,
							"run-index": selectedNode.value.runIndex,
							"workflow-object": workflowObject,
							"workflow-execution": workflowExecution,
							"pane-type": "output"
						}, null, 8, [
							"node",
							"run-index",
							"workflow-object",
							"workflow-execution"
						]))], 2)
					], 2)]),
					_: 1
				}, 8, ["execution"])) : createCommentVNode("", true)
			], 64))], 2);
		};
	}
});
var WorkflowExecutionLogViewer_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1g97q_126",
	loading: "_loading_1g97q_132",
	banner: "_banner_1g97q_137",
	errorBanner: "_errorBanner_1g97q_145",
	rows: "_rows_1g97q_153",
	detail: "_detail_1g97q_158",
	detailHeader: "_detailHeader_1g97q_166",
	pane: "_pane_1g97q_171",
	paneTitle: "_paneTitle_1g97q_181",
	errorPaneBody: "_errorPaneBody_1g97q_198",
	openButton: "_openButton_1g97q_216"
};
var WorkflowExecutionLogViewer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowExecutionLogViewer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowExecutionLogViewer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/ToolIoView.vue?vue&type=script&setup=true&lang.ts
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
var ToolIoView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
});
var ToolIoView_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1qea9_125",
	pane: "_pane_1qea9_131",
	paneTitle: "_paneTitle_1qea9_141"
};
var ToolIoView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolIoView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolIoView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/SessionDetailPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	"data-test-id": "hitl-request-details"
};
var _hoisted_2 = {
	key: 1,
	"data-test-id": "hitl-response-details"
};
var _hoisted_3 = ["href"];
var _hoisted_4 = {
	key: 2,
	"data-test-id": "workflow-input"
};
var _hoisted_5 = { key: 0 };
var SessionDetailPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		const toolDisplayName = computed(() => {
			if (!props.item || props.item.kind !== "tool" && props.item.kind !== "suspension" && props.item.kind !== "hitl-response") return "";
			return resolveToolNameForDisplay(props.item.toolName, i18n);
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
			if (item.kind === "workflow") return item.workflowName ?? formatToolNameForDisplay(item.toolName);
			if (item.kind === "tool") return toolDisplayName.value;
			if (item.kind === "node") return item.nodeDisplayName ?? formatToolNameForDisplay(item.toolName);
			if (item.kind === "user") return i18n.baseText("agentSessions.timeline.user");
			if (item.kind === "agent") return i18n.baseText("agentSessions.timeline.agent");
			if (item.kind === "suspension") return item.hitlRequestType === "approval" ? hitlTimelineName(item, i18n) : i18n.baseText("agentSessions.timeline.hitlRequested");
			return item.hitlRequestType === "approval" ? hitlTimelineName(item, i18n) : i18n.baseText("agentSessions.timeline.hitlResponse");
		});
		const headerIcon = computed(() => {
			const item = props.item;
			if (!item) return "info";
			if (isSubAgent.value) return "bot";
			if (item.kind === "workflow") return "workflow";
			if (item.kind === "tool") return "wrench";
			if (item.kind === "node") return "box";
			if (item.kind === "user") return "user";
			if (item.kind === "agent") return "bot";
			if (item.kind === "hitl-response") return "message-square";
			return "clock";
		});
		const nodeErrorMessage = computed(() => {
			const item = props.item;
			if (!item || item.kind !== "node" || item.toolOutcome !== "error" && !(item.toolOutcome === void 0 && item.toolSuccess === false)) return "";
			const prefix = i18n.baseText("agentSessions.timeline.nodeError");
			const output = item.toolOutput;
			if (output && typeof output === "object" && "error" in output) {
				const err = output.error;
				if (typeof err === "string" && err.length > 0) return `${prefix}: ${err}`;
			}
			return prefix;
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [__props.item ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [
				createVNode(unref(N8nIcon_default), {
					icon: headerIcon.value,
					size: 16
				}, null, 8, ["icon"]),
				createVNode(unref(N8nText_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(headerTitle.value), 1)]),
					_: 1
				}),
				status.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
					key: 0,
					theme: status.value.theme,
					size: "xsmall",
					"data-test-id": status.value.kind === "hitl-response" ? "detail-hitl-response-badge" : "detail-tool-error-badge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(status.value.labelKey)), 1)]),
					_: 1
				}, 8, ["theme", "data-test-id"])) : createCommentVNode("", true)
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
			}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.output) }, [__props.item.kind === "suspension" ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.requestDetails")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(hitlRequestContent.value),
				language: "json"
			}, null, 8, ["code"])])) : __props.item.kind === "hitl-response" ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.response")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.hitlResponse),
				language: "json"
			}, null, 8, ["code"])])) : __props.item.kind === "workflow" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [__props.item.workflowExecutionId && __props.item.workflowId ? (openBlock(), createBlock(WorkflowExecutionLogViewer_default, {
				key: `${__props.item.workflowId}:${__props.item.workflowExecutionId}`,
				"workflow-id": __props.item.workflowId,
				"workflow-execution-id": __props.item.workflowExecutionId
			}, null, 8, ["workflow-id", "workflow-execution-id"])) : __props.item.workflowTriggerType === "form" && workflowFormOutput.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				"data-test-id": "wf-form-card",
				class: normalizeClass(_ctx.$style.formCard)
			}, [createBaseVNode("p", null, toDisplayString(workflowFormOutput.value.message), 1), createBaseVNode("a", {
				href: workflowFormOutput.value.formUrl,
				target: "_blank",
				rel: "noopener",
				class: normalizeClass(_ctx.$style.formLink)
			}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.openForm")), 11, _hoisted_3)], 2)) : __props.item.toolSuccess === void 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolInput),
				language: "json",
				copyable: false
			}, null, 8, ["code"])])) : (openBlock(), createElementBlock("div", {
				key: 3,
				"data-test-id": "wf-error-fallback",
				class: normalizeClass(_ctx.$style.errorFallback)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorBanner) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.workflowError")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolOutput),
				language: "json"
			}, null, 8, ["code"])], 2))], 64)) : __props.item.kind === "tool" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [actionCard.value ? (openBlock(), createBlock(RichInteractionCard_default, {
				key: 0,
				input: actionCard.value,
				output: ensureParsed(__props.item.toolOutput)
			}, null, 8, ["input", "output"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolInput),
				language: "json"
			}, null, 8, ["code"])]), __props.item.toolOutput !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createVNode(unref(CodeBlock_default), {
				code: stringifyJson(__props.item.toolOutput),
				language: "json"
			}, null, 8, ["code"])])) : createCommentVNode("", true)], 64))], 64)) : __props.item.kind === "node" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [nodeErrorMessage.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger",
				"data-test-id": "node-error-callout"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(nodeErrorMessage.value), 1)]),
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
				key: 5,
				code: stringifyJson(agentStructuredContent.value),
				language: "json"
			}, null, 8, ["code"])) : __props.item.kind === "user" || __props.item.kind === "agent" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [userAttachments.value.length > 0 && __props.projectId && __props.agentId ? (openBlock(), createBlock(AgentChatMessageAttachments_default, {
				key: 0,
				attachments: userAttachments.value,
				"project-id": __props.projectId,
				"agent-id": __props.agentId
			}, null, 8, [
				"attachments",
				"project-id",
				"agent-id"
			])) : createCommentVNode("", true), createVNode(unref(VueMarkdown), {
				source: __props.item.content ?? "",
				class: normalizeClass(_ctx.$style.markdown)
			}, null, 8, ["source", "class"])], 64)) : createCommentVNode("", true)], 2)], 2)], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, toDisplayString(unref(i18n).baseText("agentSessions.timeline.selectItem")), 3))], 2);
		};
	}
});
var SessionDetailPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_2pxrd_125",
	header: "_header_2pxrd_132",
	headerTitle: "_headerTitle_2pxrd_144",
	container: "_container_2pxrd_159",
	output: "_output_2pxrd_171",
	info: "_info_2pxrd_177",
	infoRow: "_infoRow_2pxrd_185",
	label: "_label_2pxrd_192",
	value: "_value_2pxrd_197",
	executionButton: "_executionButton_2pxrd_203",
	formCard: "_formCard_2pxrd_209",
	formLink: "_formLink_2pxrd_215",
	errorFallback: "_errorFallback_2pxrd_220",
	errorBanner: "_errorBanner_2pxrd_226",
	empty: "_empty_2pxrd_234",
	markdown: "_markdown_2pxrd_240"
};
var SessionDetailPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SessionDetailPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SessionDetailPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentSessionTimelinePanel.vue?vue&type=script&setup=true&lang.ts
var AgentSessionTimelinePanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelinePanel",
	props: {
		projectId: {},
		agentId: {},
		threadId: {}
	},
	emits: ["loaded"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
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
		function labelForKey(key) {
			switch (key) {
				case "user": return i18n.baseText("agentSessions.timeline.user");
				case "agent": return i18n.baseText("agentSessions.timeline.agent");
				case "tool": return i18n.baseText("agentSessions.timeline.tool");
				case "workflow": return i18n.baseText("agentSessions.timeline.workflow");
				case "node": return i18n.baseText("agentSessions.timeline.node");
				case "suspension": return i18n.baseText("agentSessions.timeline.hitlRequest");
				case "hitl-response": return i18n.baseText("agentSessions.timeline.hitlResponse");
				case "approval-requested": return i18n.baseText("agentSessions.timeline.approvalRequested");
				case "hitl-requested": return i18n.baseText("agentSessions.timeline.hitlRequested");
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
				badgeTheme: "default"
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
				kindCounts.set(item.kind, (kindCounts.get(item.kind) ?? 0) + 1);
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
			selectTimelineItem(highlightedIndex.value);
		}
		useEventListener(document, "keyup", onKeyUp);
		function loadThreadDetail() {
			executions.value = [];
			selectedFilters.value = /* @__PURE__ */ new Set();
			searchQuery.value = "";
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
					onSelect: selectTimelineItem
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
					onSelect: selectTimelineItem
				}, null, 8, [
					"items",
					"idle-ranges",
					"selected-index",
					"visible-kinds",
					"search-query"
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
});
var AgentSessionTimelinePanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_28b61_138",
	subHeader: "_subHeader_28b61_147",
	search: "_search_28b61_157",
	chartRow: "_chartRow_28b61_162",
	panels: "_panels_28b61_169",
	tablePanel: "_tablePanel_28b61_175",
	detailPanel: "_detailPanel_28b61_183",
	loading: "_loading_28b61_220"
};
var AgentSessionTimelinePanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionTimelinePanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionTimelinePanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/views/AgentSessionTimelineView.vue?vue&type=script&setup=true&lang.ts
var AgentSessionTimelineView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionTimelineView",
	setup(__props) {
		const i18n = useI18n();
		const threadTitleOf = useThreadTitle();
		const route = useRoute();
		const router = useRouter();
		const sessionsStore = useAgentSessionsStore();
		const projectsStore = useProjectsStore();
		const { isEnabled: isLangSmithExportEnabled, isExporting, sendSession } = useAgentSessionLangSmithExport();
		const rootStore = useRootStore();
		const { config: localConfig, fetchConfig } = useAgentConfig();
		const projectId = computed(() => route.params.projectId);
		const agentId = computed(() => route.params.agentId);
		const threadId = computed(() => route.params.threadId);
		const previewOpenStorageKey = computed(function getPreviewOpenStorageKey() {
			return `N8N_AGENT_PREVIEW_OPEN:${projectId.value}:${agentId.value}`;
		});
		const thread = ref(null);
		const executions = ref([]);
		const agent = ref(null);
		const isPreviewOpen = useStorage(previewOpenStorageKey, false);
		const previewInitialized = ref(false);
		const { activeChatSessionId, effectiveSessionId, currentSessionHasMessages, currentSessionTitle, sessionMenu, onSessionPick, onNewChat } = useAgentBuilderSession({ routeBacked: computed(() => false) });
		const triggerSource = computed(() => {
			if (executions.value.length === 0) return null;
			const first = executions.value[0];
			/** Relabel InstanceAI to AI Assistant for the UI */
			if (first.source === "instance-ai") return "AI Assistant";
			return first.source ?? "chat";
		});
		const triggerIcon = computed(() => {
			const source = triggerSource.value;
			if (!source) return "bolt-filled";
			switch (source) {
				case "slack": return "slack";
				case "AI Assistant": return "sparkles";
				default: return "bolt-filled";
			}
		});
		const triggerLabel = computed(() => {
			const source = triggerSource.value;
			if (!source) return "";
			return source.charAt(0).toUpperCase() + source.slice(1);
		});
		const sessionTitle = computed(() => {
			if (!thread.value) return "";
			return truncate(threadTitleOf(thread.value), 64);
		});
		const projectName = computed(() => {
			if (projectsStore.personalProject?.id === projectId.value) return i18n.baseText("projects.menu.personal");
			const current = projectsStore.currentProject;
			if (current && current.id === projectId.value) return current.name ?? null;
			return projectsStore.myProjects.find((p) => p.id === projectId.value)?.name ?? null;
		});
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
		const totalTokens = computed(() => {
			if (!thread.value) return 0;
			return thread.value.totalPromptTokens + thread.value.totalCompletionTokens;
		});
		const hasLoadedThread = computed(() => thread.value?.id === threadId.value);
		const totalCost = computed(() => thread.value?.totalCost ?? 0);
		const durationLabel = computed(() => formatDuration(thread.value?.totalDuration ?? 0));
		function onPanelLoaded(detail) {
			thread.value = detail?.thread ?? null;
			executions.value = detail?.executions ?? [];
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
					sessionsStore.fetchThreads(nextProjectId, nextAgentId)
				]);
				if (requestId === previewLoadRequestId) agent.value = loadedAgent;
			} finally {
				if (requestId === previewLoadRequestId) previewInitialized.value = true;
			}
		}, { immediate: true });
		watch(threadId, (nextThreadId) => {
			activeChatSessionId.value = nextThreadId;
		}, { immediate: true });
		function formatDuration(ms) {
			if (!ms || ms <= 0) return "0ms";
			if (ms < 1e3) return `${ms}ms`;
			return `${(ms / 1e3).toFixed(1)}s`;
		}
		function formatDate(fullDate) {
			if (!fullDate) return "";
			const { date, time } = convertToDisplayDate(fullDate);
			return `${date} ${time}`;
		}
		function closeTimeline() {
			/**
			* Get the last visited route from Vue router so we return to the correct starting point (e.g Preview)
			* If no state is available, it's most likey because the link was visited directly.
			* Here we fallback to default Agents view.
			*/
			const previousRoute = router.options.history.state.back;
			if ((typeof previousRoute === "string" ? router.resolve(previousRoute) : null)?.matched.length) {
				router.back();
				return;
			}
			router.push(agentExecutionsRoute.value);
		}
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
		function togglePreview() {
			isPreviewOpen.value = !isPreviewOpen.value;
		}
		function viewPreviewTrace() {
			if (!effectiveSessionId.value) return;
			onSessionSelect(effectiveSessionId.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.view) }, [createVNode(AgentSessionTimelineHeader_default, {
				"breadcrumb-items": breadcrumbItems.value,
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
				"is-preview-open": unref(isPreviewOpen),
				onBreadcrumbSelect,
				onSessionSelect,
				onLangsmithExport: _cache[0] || (_cache[0] = ($event) => unref(sendSession)({
					projectId: projectId.value,
					agentId: agentId.value,
					threadId: threadId.value
				})),
				onTogglePreview: togglePreview,
				onClose: closeTimeline
			}, null, 8, [
				"breadcrumb-items",
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
				"is-preview-open"
			]), createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.previewOpen]: unref(isPreviewOpen) }]) }, [createVNode(AgentSessionTimelinePanel_default, {
				"project-id": projectId.value,
				"agent-id": agentId.value,
				"thread-id": threadId.value,
				onLoaded: onPanelLoaded
			}, null, 8, [
				"project-id",
				"agent-id",
				"thread-id"
			]), createVNode(AgentPreviewDock_default, {
				"is-open": unref(isPreviewOpen),
				"session-title": unref(currentSessionTitle),
				"session-options": unref(sessionMenu),
				"has-session": unref(currentSessionHasMessages),
				initialized: previewInitialized.value,
				"project-id": projectId.value,
				"agent-id": agentId.value,
				agent: agent.value,
				"local-config": unref(localConfig),
				"connected-triggers": [],
				"effective-session-id": unref(effectiveSessionId),
				onViewTrace: viewPreviewTrace,
				onNewSession: unref(onNewChat),
				onSessionSelect: unref(onSessionPick),
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
				"onNewSession",
				"onSessionSelect"
			])], 2)], 2);
		};
	}
});
var AgentSessionTimelineView_vue_vue_type_style_index_0_lang_module_default = {
	view: "_view_tspy5_125",
	content: "_content_tspy5_132",
	previewOpen: "_previewOpen_tspy5_141"
};
var AgentSessionTimelineView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionTimelineView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionTimelineView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSessionTimelineView_default as default };
