import { $u as useStorage, Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Cf as watch, Ff as onScopeDispose, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, as as useRoute, ep as init_shared_esm_bundler, gf as resolveDynamicComponent, kf as getCurrentScope, os as useRouter, pf as renderSlot, pp as normalizeClass, qd as defineComponent, rf as nextTick, uf as openBlock, vp as toDisplayString, xf as useTemplateRef, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { Bd as useClipboard, Di as useAgentTelemetry, FD as N8nIcon_default, Fs as KeyboardShortcutTooltip_default, Hy as useToast, ND as N8nIconButton_default, OD as N8nTooltip_default, RD as _plugin_vue_export_helper_default, Sh as AGENT_PREVIEW_VIEW, UD as useI18n, Yy as useSettingsStore, ch as CONTINUE_SESSION_ID_PARAM, ec as convertToDisplayDate, fh as NEW_SESSION_PARAM, kD as truncate, na as useKeybindings, pD as useDropdownSearch, ph as OPEN_PREVIEW_PARAM, qT as N8nSwitch_default, vD as DropdownMenu_default, xh as AGENT_BUILDER_VIEW } from "./app-CfhiRDif.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-xhqL8Xkx.js";
import { b as useAgentExecutionUpdates, i as deriveAgentStatus, t as AgentChatPanel_default } from "./AgentChatPanel-BG5Pgj_r.js";
import { n as ChatHistoryDropdown_default, t as ChatHistoryDropdownTrigger_default } from "./ChatHistoryDropdownTrigger-ET5ym4hc.js";
import { n as useAgentSessionsStore, t as useThreadTitle } from "./thread-title-BGZl9rPv.js";
//#region src/features/agents/composables/useAgentBuilderSession.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/**
* Max chars for session-name display in the preview breadcrumb dropdown trigger
* and its menu rows. Long titles otherwise crowd the header actions.
*/
var SESSION_TITLE_MAX_CHARS = 64;
/**
* Owns the preview chat-session state:
*
* - `continueSessionId` — set via the URL query string for shareable deep-links
*   into a specific session. Takes precedence when route backing is enabled.
* - `activeChatSessionId` — the in-tab session selection. Used exclusively
*   when route backing is disabled and as a fallback otherwise.
*
* Plus the session-picker dropdown menu and titles, all driven off the
* `agentSessionsStore` thread list.
*/
function useAgentBuilderSession(options) {
	const selection = useSessionSelection(options.routeBacked);
	return {
		...selection,
		...useSessionMetadata(options, selection.effectiveSessionId),
		...useSessionDeletion(options, selection)
	};
}
function useSessionSelection(routeBacked) {
	const route = useRoute();
	const router = useRouter();
	const activeChatSessionId = ref(null);
	const ephemeralSessionId = ref(null);
	const locallyMintedSessionId = ref(null);
	const { continueSessionId, pendingRouteSessionId } = useSessionRoute(routeBacked, activeChatSessionId, ephemeralSessionId, locallyMintedSessionId);
	const effectiveSessionId = computed(() => (routeBacked.value ? pendingRouteSessionId.value ?? continueSessionId.value : void 0) ?? activeChatSessionId.value ?? void 0);
	const currentSessionIsEphemeral = computed(() => ephemeralSessionId.value !== null && ephemeralSessionId.value === effectiveSessionId.value);
	const currentSessionIsLocallyMinted = computed(() => locallyMintedSessionId.value !== null && locallyMintedSessionId.value === effectiveSessionId.value);
	function selectSession(id, ephemeral = id === ephemeralSessionId.value) {
		activeChatSessionId.value = id;
		ephemeralSessionId.value = ephemeral ? id : null;
		locallyMintedSessionId.value = ephemeral ? id : null;
		if (!routeBacked.value) return;
		pendingRouteSessionId.value = id;
		const query = {
			...route.query,
			[CONTINUE_SESSION_ID_PARAM]: id
		};
		if (ephemeral) delete query[NEW_SESSION_PARAM];
		router.replace({ query });
	}
	function setSessionInUrl(id) {
		selectSession(id);
	}
	function clearContinueSessionParam() {
		if (!routeBacked.value) return;
		const { [CONTINUE_SESSION_ID_PARAM]: _dropped, ...rest } = route.query;
		router.replace({ query: rest });
	}
	function onSessionPick(id) {
		if (id === "__empty__") return;
		selectSession(id);
	}
	function onNewChat() {
		selectSession(crypto.randomUUID(), true);
	}
	function markSessionCreated(sessionId) {
		if (ephemeralSessionId.value === sessionId) ephemeralSessionId.value = null;
	}
	return {
		activeChatSessionId,
		continueSessionId,
		effectiveSessionId,
		currentSessionIsEphemeral,
		currentSessionIsLocallyMinted,
		setSessionInUrl,
		clearContinueSessionParam,
		onSessionPick,
		onNewChat,
		markSessionCreated
	};
}
function useSessionRoute(routeBacked, activeChatSessionId, ephemeralSessionId, locallyMintedSessionId) {
	const route = useRoute();
	const pendingRouteSessionId = ref(null);
	const continueSessionId = computed(() => {
		const raw = route.query[CONTINUE_SESSION_ID_PARAM];
		const value = Array.isArray(raw) ? raw[0] : raw;
		return typeof value === "string" && value.length > 0 ? value : void 0;
	});
	watch([routeBacked, continueSessionId], ([isRouteBacked, routeSessionId]) => {
		if (!isRouteBacked) {
			pendingRouteSessionId.value = null;
			return;
		}
		if (routeSessionId && routeSessionId !== locallyMintedSessionId.value) {
			ephemeralSessionId.value = null;
			locallyMintedSessionId.value = null;
		}
		if (pendingRouteSessionId.value !== null) pendingRouteSessionId.value = null;
		if (routeSessionId) activeChatSessionId.value = routeSessionId;
	}, { immediate: true });
	watch(activeChatSessionId, (sessionId) => {
		if (sessionId === null) {
			pendingRouteSessionId.value = null;
			ephemeralSessionId.value = null;
			locallyMintedSessionId.value = null;
		} else {
			if (locallyMintedSessionId.value !== null && sessionId !== locallyMintedSessionId.value) {
				ephemeralSessionId.value = null;
				locallyMintedSessionId.value = null;
			}
			if (routeBacked.value && sessionId !== continueSessionId.value) pendingRouteSessionId.value = sessionId;
		}
	});
	return {
		continueSessionId,
		pendingRouteSessionId
	};
}
function useSessionMetadata({ projectId, agentId }, effectiveSessionId) {
	const sessionsStore = useAgentSessionsStore();
	const i18n = useI18n();
	const threadTitleOf = useThreadTitle();
	const previewThreads = computed(() => sessionsStore.previewThreads.filter((thread) => thread.canContinueInPreview && thread.projectId === projectId.value && thread.agentId === agentId.value));
	const isCurrentSession = (thread) => thread?.id === effectiveSessionId.value && thread?.projectId === projectId.value && thread?.agentId === agentId.value;
	const currentSession = computed((previous) => previewThreads.value.find(isCurrentSession) ?? sessionsStore.threads.find(isCurrentSession) ?? (isCurrentSession(previous) ? previous : void 0));
	return {
		previewThreads,
		currentSession,
		currentSessionHasMessages: computed(() => Boolean(currentSession.value)),
		currentSessionTitle: computed(() => {
			if (!effectiveSessionId.value) return "";
			if (!currentSession.value) return i18n.baseText("agents.builder.chat.newChat.label");
			return truncate(threadTitleOf(currentSession.value), SESSION_TITLE_MAX_CHARS);
		}),
		sessionMenu: computed(() => previewThreads.value.map((thread) => ({
			id: thread.id,
			title: threadTitleOf(thread),
			label: truncate(threadTitleOf(thread), SESSION_TITLE_MAX_CHARS),
			updatedAt: thread.updatedAt
		})))
	};
}
function useSessionDeletion({ projectId, agentId }, { effectiveSessionId, onNewChat }) {
	const sessionsStore = useAgentSessionsStore();
	const i18n = useI18n();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const toast = useToast();
	const isDeletingSession = ref(false);
	let isDisposed = false;
	if (getCurrentScope()) onScopeDispose(() => isDisposed = true);
	async function deleteSession(sessionId) {
		if (isDisposed || isDeletingSession.value || !sessionId) return false;
		const targetProjectId = projectId.value;
		const targetAgentId = agentId.value;
		if (!targetProjectId || !targetAgentId) return false;
		const isTargetCurrent = () => !isDisposed && projectId.value === targetProjectId && agentId.value === targetAgentId;
		isDeletingSession.value = true;
		try {
			if (await openAgentConfirmationModal({
				title: i18n.baseText("agentSessions.deleteConfirm.headline"),
				description: i18n.baseText("agentSessions.deleteConfirm.message"),
				isDestructive: true,
				confirmButtonText: i18n.baseText("agentSessions.deleteConfirm.confirmButtonText"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm" || !isTargetCurrent()) return false;
			await sessionsStore.deleteThread(targetProjectId, targetAgentId, sessionId);
			if (!isTargetCurrent()) return false;
			toast.showMessage({
				title: i18n.baseText("agentSessions.showMessage.deleted"),
				type: "success"
			});
			if (effectiveSessionId.value === sessionId) onNewChat();
			return true;
		} catch (error) {
			if (isTargetCurrent()) toast.showError(error, i18n.baseText("agentSessions.showError.delete"));
			return false;
		} finally {
			isDeletingSession.value = false;
		}
	}
	return {
		isDeletingSession,
		deleteSession
	};
}
//#endregion
//#region src/features/agents/components/AgentSessionHistoryDropdown.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/agents/components/AgentSessionHistoryDropdown.vue
var AgentSessionHistoryDropdown_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSessionHistoryDropdown",
	props: {
		sessionOptions: {},
		canDeleteSession: {
			type: Boolean,
			default: false
		},
		isDeletingSession: {
			type: Boolean,
			default: false
		}
	},
	emits: ["select", "delete"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const sessionsStore = useAgentSessionsStore();
		const deleteActions = [{
			id: "delete",
			label: i18n.baseText("agentSessions.delete"),
			icon: "trash-2",
			variant: "destructive"
		}];
		const items = computed(() => props.sessionOptions.map((option) => ({
			id: option.id,
			label: option.label ?? option.title,
			disabled: option.disabled,
			data: {
				fullTitle: option.title,
				updatedAt: option.updatedAt,
				actions: !option.disabled && props.canDeleteSession ? deleteActions : void 0
			}
		})));
		const { search, filteredItems, handleSearch } = useDropdownSearch(items, {
			isSearchable: (item) => !item.disabled,
			searchFields: (item) => [item.label, item.data?.fullTitle]
		});
		const emptyText = computed(() => i18n.baseText(search.value.trim() ? "agents.builder.chat.sessionPicker.noMatch" : "agents.builder.chat.sessionPicker.empty"));
		function requestDeletion(actionId, sessionId) {
			if (actionId !== "delete" || !props.canDeleteSession || props.isDeletingSession) return;
			emit("delete", sessionId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatHistoryDropdown_default, {
				items: unref(filteredItems),
				"search-placeholder": unref(i18n).baseText("agents.builder.chat.sessionPicker.searchPlaceholder"),
				"empty-text": emptyText.value,
				loading: unref(sessionsStore).loading,
				"action-button-label": unref(i18n).baseText("agentSessions.actions"),
				"actions-disabled": props.isDeletingSession,
				"content-test-id": "agent-preview-session-list",
				"data-test-id": "agent-preview-session-switcher",
				onSearch: unref(handleSearch),
				onSelect: _cache[0] || (_cache[0] = ($event) => emit("select", $event)),
				onAction: requestDeletion
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "trigger")]),
				_: 3
			}, 8, [
				"items",
				"search-placeholder",
				"empty-text",
				"loading",
				"action-button-label",
				"actions-disabled",
				"onSearch"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentPreviewChatPage.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentPreviewChatPage_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentPreviewChatPage",
	props: {
		visible: {
			type: Boolean,
			default: true
		},
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		effectiveSessionId: {},
		newSession: {
			type: Boolean,
			default: false
		},
		initialPrompt: {},
		canSendToAssistant: { type: Boolean },
		dismissedFixToolCallIds: { default: () => [] },
		beforeSend: {},
		layout: { default: "dock" },
		budgetCards: {
			type: Boolean,
			default: false
		},
		increaseBudget: {
			type: Function,
			default: void 0
		}
	},
	emits: [
		"continue-loaded",
		"usage-updated",
		"session-created",
		"open-build",
		"send-to-assistant",
		"initial-consumed"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const inputDraft = ref("");
		const chatPanel = useTemplateRef("chatPanel");
		function focusInput(options) {
			chatPanel.value?.focusInput(options);
		}
		function getConversationMarkdown() {
			return chatPanel.value?.getConversationMarkdown() ?? "";
		}
		function clearBudgetStops(fields) {
			chatPanel.value?.clearBudgetStops(fields);
		}
		watch([() => props.initialPrompt, chatPanel], ([prompt, panel]) => {
			if (!prompt || !panel) return;
			panel.sendMessageFromOutside(prompt);
		}, {
			immediate: true,
			flush: "post"
		});
		__expose({
			focusInput,
			getConversationMarkdown,
			clearBudgetStops
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.layout === "page" ? "main" : "div"), {
				class: normalizeClass([_ctx.$style.previewPage, { [_ctx.$style.pageLayout]: __props.layout === "page" }]),
				"data-testid": "agent-preview-chat-page"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatFrame) }, [__props.initialized && __props.effectiveSessionId ? (openBlock(), createBlock(AgentChatPanel_default, {
					key: `preview-${__props.effectiveSessionId}`,
					ref_key: "chatPanel",
					ref: chatPanel,
					"input-draft": inputDraft.value,
					"onUpdate:inputDraft": _cache[0] || (_cache[0] = ($event) => inputDraft.value = $event),
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					visible: __props.visible,
					"background-jobs-active": __props.visible,
					mode: "inline",
					"continue-session-id": __props.effectiveSessionId,
					"new-session": __props.newSession,
					"agent-config": __props.localConfig,
					"agent-status": unref(deriveAgentStatus)(__props.agent),
					"connected-triggers": __props.connectedTriggers,
					"can-send-to-assistant": __props.canSendToAssistant,
					"dismissed-fix-tool-call-ids": __props.dismissedFixToolCallIds,
					"before-send": __props.beforeSend,
					"budget-cards": __props.budgetCards,
					"increase-budget": __props.increaseBudget,
					onContinueLoaded: _cache[1] || (_cache[1] = ($event) => emit("continue-loaded", $event)),
					onUsageUpdated: _cache[2] || (_cache[2] = ($event) => emit("usage-updated", $event)),
					onSessionCreated: _cache[3] || (_cache[3] = ($event) => emit("session-created", $event)),
					onInitialConsumed: _cache[4] || (_cache[4] = ($event) => emit("initial-consumed")),
					onOpenBuild: _cache[5] || (_cache[5] = ($event) => emit("open-build")),
					onSendToAssistant: _cache[6] || (_cache[6] = ($event) => emit("send-to-assistant", $event))
				}, null, 8, [
					"input-draft",
					"project-id",
					"agent-id",
					"visible",
					"background-jobs-active",
					"continue-session-id",
					"new-session",
					"agent-config",
					"agent-status",
					"connected-triggers",
					"can-send-to-assistant",
					"dismissed-fix-tool-call-ids",
					"before-send",
					"budget-cards",
					"increase-budget"
				])) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	previewPage: "_previewPage_dda05_1",
	pageLayout: "_pageLayout_dda05_10",
	chatFrame: "_chatFrame_dda05_14"
} }]]);
//#endregion
//#region src/features/agents/composables/useAgentSessionLangSmithExport.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useAgentSessionLangSmithExport() {
	const i18n = useI18n();
	const settingsStore = useSettingsStore();
	const sessionsStore = useAgentSessionsStore();
	const clipboard = useClipboard();
	const { showError, showMessage } = useToast();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const isExporting = ref(false);
	const isEnabled = computed(() => localStorage.getItem("instanceAi.debugMode") === "true" && settingsStore.moduleSettings.agents?.proxyEnabled === true);
	async function sendSession({ projectId, agentId, threadId }) {
		if (!isEnabled.value || isExporting.value) return;
		isExporting.value = true;
		try {
			if (await openAgentConfirmationModal({
				title: i18n.baseText("agentSessions.langsmithExport.confirm.title"),
				description: i18n.baseText("agentSessions.langsmithExport.confirm.body"),
				confirmButtonText: i18n.baseText("agentSessions.langsmithExport.confirm.button"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm") return;
			const { traceId } = await sessionsStore.exportThreadToLangSmith(projectId, agentId, threadId);
			await clipboard.copy(traceId).catch(() => {});
			showMessage({
				title: i18n.baseText("agentSessions.langsmithExport.success"),
				message: i18n.baseText("agentSessions.langsmithExport.successMessage", { interpolate: { traceId } }),
				type: "success"
			});
		} catch (error) {
			showError(error, i18n.baseText("agentSessions.langsmithExport.error"));
		} finally {
			isExporting.value = false;
		}
	}
	return {
		isEnabled,
		isExporting,
		sendSession
	};
}
//#endregion
//#region src/features/agents/utils/agent-usage.ts
/** Hide unavailable usage and avoid rounding a positive cost to zero. */
function formatAgentUsage(totalTokens, cost) {
	if (!Number.isFinite(totalTokens) || totalTokens <= 0) return null;
	const tokens = `${totalTokens.toLocaleString()}t`;
	if (cost === null || cost === void 0 || !Number.isFinite(cost) || cost <= 0) return tokens;
	return `${tokens} (${cost < 1e-4 ? "<$0.0001" : `$${cost.toFixed(4)}`})`;
}
/** Add live execution snapshots only until the saved totals include them. */
function getAgentSessionUsage(detail, updates = {}) {
	let totalTokens = detail.thread.totalPromptTokens + detail.thread.totalCompletionTokens;
	let cost = detail.thread.totalCost;
	let priceKnown = Number.isFinite(cost) && cost >= 0;
	const executions = new Map(detail.executions.map((execution) => [execution.id, execution]));
	for (const execution of detail.executions) if ((execution.totalTokens ?? 0) > 0 && (execution.cost === null || !Number.isFinite(execution.cost) || execution.cost <= 0)) priceKnown = false;
	for (const update of Object.values(updates)) {
		if (update.sessionId !== detail.thread.id || !update.usage) continue;
		const execution = executions.get(update.executionId);
		if (execution && execution.status !== "running") continue;
		totalTokens += update.usage.totalTokens;
		if (update.usage.totalTokens <= 0) continue;
		const liveCost = update.usage.cost;
		if (liveCost === void 0 || !Number.isFinite(liveCost) || liveCost <= 0) priceKnown = false;
		else cost += liveCost;
	}
	return {
		totalTokens,
		cost: priceKnown ? cost : null
	};
}
/** Add server duration snapshots until the saved session total includes them. */
function getAgentSessionDuration(detail, updates) {
	let savedDuration = 0;
	const pending = /* @__PURE__ */ new Map();
	for (const execution of detail.executions) if (execution.status === "running") pending.set(execution.id, execution.duration ?? 0);
	else savedDuration += execution.duration ?? 0;
	const executions = new Map(detail.executions.map((execution) => [execution.id, execution]));
	for (const update of Object.values(updates)) {
		if (update.sessionId !== detail.thread.id) continue;
		const execution = executions.get(update.executionId);
		if (execution && execution.status !== "running") continue;
		if (update.duration === void 0 || !Number.isFinite(update.duration)) continue;
		pending.set(update.executionId, Math.max(pending.get(update.executionId) ?? 0, update.duration));
	}
	let duration = Math.max(detail.thread.totalDuration ?? 0, savedDuration);
	for (const elapsed of pending.values()) duration += elapsed;
	return duration;
}
//#endregion
//#region src/features/agents/composables/useAgentSessionUsage.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useAgentSessionUsage(detail, streamUpdates) {
	const pushedUpdates = ref({});
	const updates = computed(() => {
		const merged = { ...pushedUpdates.value };
		for (const update of Object.values(streamUpdates())) {
			const pushed = merged[update.executionId];
			merged[update.executionId] = {
				...update,
				duration: Math.max(pushed?.duration ?? 0, update.duration ?? 0),
				complete: pushed?.complete === true || update.complete,
				usage: (pushed?.usage?.totalTokens ?? 0) > (update.usage?.totalTokens ?? 0) ? pushed?.usage : update.usage
			};
		}
		return merged;
	});
	const usage = computed(() => {
		const current = detail();
		return current ? getAgentSessionUsage(current, updates.value) : {
			totalTokens: 0,
			cost: null
		};
	});
	const duration = computed(() => {
		const current = detail();
		return current ? getAgentSessionDuration(current, updates.value) : 0;
	});
	function onExecutionUpdated(update) {
		if (!update.usage && update.duration === void 0) return;
		const previous = pushedUpdates.value[update.executionId];
		if (previous?.complete && !update.complete) return;
		pushedUpdates.value[update.executionId] = {
			sessionId: update.threadId,
			executionId: update.executionId,
			usage: (previous?.usage?.totalTokens ?? 0) > (update.usage?.totalTokens ?? 0) ? previous?.usage : update.usage ?? previous?.usage,
			duration: Math.max(previous?.duration ?? 0, update.duration ?? 0),
			complete: previous?.complete === true || update.complete === true
		};
	}
	return {
		usage,
		duration,
		onExecutionUpdated
	};
}
//#endregion
//#region src/features/agents/components/AgentPreviewMoreMenu.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = { key: 0 };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { key: 1 };
var _hoisted_4 = { key: 2 };
var COPY_LINK = "copy-link";
var COPY_CONVERSATION = "copy-conversation";
var OPEN_IN_NEW_TAB = "open-in-new-tab";
var TOGGLE_FULL_WIDTH = "toggle-full-width";
var EXPORT_SESSION = "export-session";
var DELETE_SESSION = "delete-session";
var AgentPreviewMoreMenu_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentPreviewMoreMenu",
	props: {
		projectId: {},
		agentId: {},
		effectiveSessionId: {},
		hasSession: { type: Boolean },
		canDeleteSession: {
			type: Boolean,
			default: false
		},
		isDeletingSession: {
			type: Boolean,
			default: false
		},
		isFullWidth: { type: Boolean },
		isLangSmithExportEnabled: { type: Boolean },
		isExporting: { type: Boolean },
		getConversationMarkdown: {},
		usageUpdates: { default: () => ({}) }
	},
	emits: [
		"toggle-full-width",
		"export-session",
		"delete-session"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const clipboard = useClipboard();
		const toast = useToast();
		const sessionsStore = useAgentSessionsStore();
		const agentTelemetry = useAgentTelemetry();
		const sessionDetail = ref(null);
		const sessionMetadata = computed(() => sessionDetail.value?.thread ?? null);
		const canLinkSession = computed(function canLinkSession() {
			return props.hasSession && Boolean(props.effectiveSessionId);
		});
		const menuItems = computed(() => [
			{
				id: COPY_LINK,
				label: i18n.baseText("agents.builder.preview.more.copyLink"),
				icon: {
					type: "icon",
					value: "link"
				},
				disabled: !canLinkSession.value
			},
			{
				id: COPY_CONVERSATION,
				label: i18n.baseText("agents.builder.preview.more.copyConversation"),
				icon: {
					type: "icon",
					value: "copy"
				},
				disabled: !props.hasSession
			},
			{
				id: OPEN_IN_NEW_TAB,
				label: i18n.baseText("agents.builder.preview.layout.openInNewTab"),
				icon: {
					type: "icon",
					value: "external-link"
				},
				disabled: !canLinkSession.value
			},
			{
				id: TOGGLE_FULL_WIDTH,
				label: i18n.baseText("agents.builder.preview.more.fullWidth"),
				icon: props.isFullWidth ? {
					type: "icon",
					value: "minimize-2"
				} : {
					type: "icon",
					value: "maximize-2"
				},
				keepOpen: true,
				checkbox: true,
				checked: props.isFullWidth
			},
			...props.isLangSmithExportEnabled && props.hasSession && props.effectiveSessionId ? [{
				id: EXPORT_SESSION,
				label: i18n.baseText("agentSessions.langsmithExport.button"),
				icon: {
					type: "icon",
					value: "bug"
				},
				disabled: props.isExporting
			}] : [],
			...props.canDeleteSession ? [{
				id: DELETE_SESSION,
				label: i18n.baseText("agentSessions.delete"),
				icon: {
					type: "icon",
					value: "trash"
				},
				divided: true,
				destructive: true,
				disabled: !props.hasSession || !props.effectiveSessionId || props.isDeletingSession
			}] : []
		]);
		const triggerLabel = computed(() => {
			const source = sessionMetadata.value?.source;
			if (!source || source === "chat" || source === "n8n_chat") return i18n.baseText("agentSessions.origin.preview");
			if (source === "instance-ai") return i18n.baseText("agentSessions.origin.instanceAi");
			if (source === "n8n_chat_production") return i18n.baseText("agentSessions.origin.n8nChat");
			return source.charAt(0).toUpperCase() + source.slice(1);
		});
		const triggerIcon = computed(() => {
			switch (sessionMetadata.value?.source) {
				case "slack":
				case "telegram":
				case "linear":
				case "discord":
				case "whatsapp":
				case "teams":
				case "mcp":
				case "workflow":
				case "webhook": return sessionMetadata.value.source;
				case "instance-ai": return "sparkles";
				case "n8n_chat_production": return "message-square";
				default: return "bolt-filled";
			}
		});
		const { usage, duration, onExecutionUpdated } = useAgentSessionUsage(() => sessionDetail.value, () => props.usageUpdates);
		const tokenSpendLabel = computed(() => formatAgentUsage(usage.value.totalTokens, usage.value.cost));
		const durationLabel = computed(() => {
			if (!Number.isFinite(duration.value) || duration.value <= 0) return "";
			if (duration.value < 1e3) return `${duration.value}ms`;
			return `${(duration.value / 1e3).toFixed(1)}s`;
		});
		useAgentExecutionUpdates({
			projectId: computed(() => props.projectId),
			agentId: computed(() => props.agentId),
			threadId: computed(() => props.effectiveSessionId)
		}, () => loadSessionMetadata(), (update) => {
			if (update.threadId === props.effectiveSessionId) onExecutionUpdated(update);
		});
		const lastMessageLabel = computed(() => {
			const updatedAt = sessionMetadata.value?.updatedAt;
			if (!updatedAt) return "—";
			const { date, time } = convertToDisplayDate(updatedAt);
			return `${date} ${time}`;
		});
		function getSessionRoute() {
			return router.resolve({
				name: AGENT_BUILDER_VIEW,
				params: {
					projectId: props.projectId,
					agentId: props.agentId
				},
				query: {
					[CONTINUE_SESSION_ID_PARAM]: props.effectiveSessionId,
					[OPEN_PREVIEW_PARAM]: "true"
				}
			});
		}
		async function copyLink() {
			try {
				const url = new URL(getSessionRoute().href, window.location.origin).href;
				await clipboard.copy(url);
				toast.showMessage({
					title: i18n.baseText("agents.builder.preview.more.linkCopied"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.builder.preview.more.copyLinkError"));
			}
		}
		async function copyConversation() {
			try {
				const conversation = props.getConversationMarkdown();
				if (!conversation) return;
				await clipboard.copy(conversation);
				toast.showMessage({
					title: i18n.baseText("agents.builder.preview.more.conversationCopied"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.builder.preview.more.copyConversationError"));
			}
		}
		function selectMenuItem(itemId) {
			const item = menuItems.value.find((menuItem) => menuItem.id === itemId);
			if (!item || item.disabled) return;
			agentTelemetry.trackClickedPreviewMoreOption({
				agentId: props.agentId,
				option: item.id
			});
			dispatchMenuAction(item.id);
		}
		function dispatchMenuAction(itemId) {
			switch (itemId) {
				case COPY_LINK:
					copyLink();
					break;
				case COPY_CONVERSATION:
					copyConversation();
					break;
				case OPEN_IN_NEW_TAB: {
					const route = router.resolve({
						name: AGENT_PREVIEW_VIEW,
						params: {
							projectId: props.projectId,
							agentId: props.agentId
						},
						query: { [CONTINUE_SESSION_ID_PARAM]: props.effectiveSessionId }
					});
					window.open(route.href, "_blank", "noopener");
					break;
				}
				case TOGGLE_FULL_WIDTH:
					emit("toggle-full-width");
					break;
				case EXPORT_SESSION:
					emit("export-session");
					break;
				case DELETE_SESSION: emit("delete-session");
			}
		}
		let metadataRequestId = 0;
		async function loadSessionMetadata() {
			const requestId = ++metadataRequestId;
			const sessionId = props.effectiveSessionId;
			if (!sessionId) {
				sessionDetail.value = null;
				return;
			}
			try {
				const detail = await sessionsStore.getThreadDetail(props.projectId, props.agentId, sessionId);
				if (requestId === metadataRequestId) sessionDetail.value = {
					...detail,
					thread: {
						...detail.thread,
						source: detail.executions.find(function hasSource(execution) {
							return execution.source !== null;
						})?.source
					}
				};
			} catch {
				if (requestId === metadataRequestId) sessionDetail.value = null;
			}
		}
		function onMenuOpenChange(isOpen) {
			if (!isOpen) return;
			agentTelemetry.trackClickedPreviewMoreOptions({ agentId: props.agentId });
			loadSessionMetadata();
		}
		watch([
			() => props.projectId,
			() => props.agentId,
			() => props.effectiveSessionId
		], function refreshSessionMetadata() {
			sessionDetail.value = null;
			loadSessionMetadata();
		}, { immediate: true });
		watch(() => Object.values(props.usageUpdates), (updates, previous) => {
			if (updates.length === 0) return;
			const completed = updates.filter((update) => update.complete).length;
			const previouslyCompleted = previous.filter((update) => update.complete).length;
			if (!sessionDetail.value || completed !== previouslyCompleted) loadSessionMetadata();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: "bottom",
				content: unref(i18n).baseText("agents.builder.preview.more.label")
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
					items: menuItems.value,
					placement: "bottom-end",
					"extra-popper-class": _ctx.$style.moreMenu,
					onSelect: selectMenuItem,
					"onUpdate:modelValue": onMenuOpenChange
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "ellipsis",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.preview.more.label"),
						"data-testid": "agent-preview-more-btn"
					}, null, 8, ["aria-label"])]),
					"item-trailing": withCtx(({ item }) => [item.id === TOGGLE_FULL_WIDTH ? (openBlock(), createBlock(unref(N8nSwitch_default), {
						key: 0,
						"model-value": props.isFullWidth,
						size: "small",
						tabindex: "-1",
						"aria-hidden": "true",
						class: normalizeClass(_ctx.$style.layoutSwitch)
					}, null, 8, ["model-value", "class"])) : createCommentVNode("", true)]),
					footer: withCtx(() => [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.sessionMetadata) }, [
						triggerLabel.value ? (openBlock(), createElementBlock("li", _hoisted_1$1, [createVNode(unref(N8nIcon_default), {
							icon: triggerIcon.value,
							size: 12
						}, null, 8, ["icon"]), createTextVNode(toDisplayString(triggerLabel.value), 1)])) : createCommentVNode("", true),
						tokenSpendLabel.value || durationLabel.value ? (openBlock(), createElementBlock("li", {
							key: 1,
							class: normalizeClass(_ctx.$style.metrics)
						}, [
							tokenSpendLabel.value ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(tokenSpendLabel.value), 1)) : createCommentVNode("", true),
							tokenSpendLabel.value && durationLabel.value ? (openBlock(), createElementBlock("span", _hoisted_3, " • ")) : createCommentVNode("", true),
							createTextVNode(toDisplayString(durationLabel.value), 1)
						], 2)) : createCommentVNode("", true),
						sessionMetadata.value?.updatedAt ? (openBlock(), createElementBlock("li", _hoisted_4, toDisplayString(unref(i18n).baseText("agents.builder.preview.more.lastMessageSent", { interpolate: { date: lastMessageLabel.value } })), 1)) : createCommentVNode("", true)
					], 2)]),
					_: 1
				}, 8, ["items", "extra-popper-class"])]),
				_: 1
			}, 8, ["content"]);
		};
	}
}), [["__cssModules", { "$style": {
	moreMenu: "_moreMenu_28k5h_1",
	layoutSwitch: "_layoutSwitch_28k5h_5",
	metrics: "_metrics_28k5h_9",
	sessionMetadata: "_sessionMetadata_28k5h_13"
} }]]);
//#endregion
//#region src/features/agents/components/AgentPreviewDock.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = [
	"aria-label",
	"aria-hidden",
	"inert",
	"data-preview-layout"
];
var AgentPreviewDock_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentPreviewDock",
	props: {
		sessionTitle: {},
		sessionOptions: {},
		hasSession: { type: Boolean },
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		isOpen: { type: Boolean },
		effectiveSessionId: {},
		newSession: {
			type: Boolean,
			default: false
		},
		initialPrompt: {},
		canSendToAssistant: { type: Boolean },
		dismissedFixToolCallIds: { default: () => [] },
		canDeleteSession: {
			type: Boolean,
			default: false
		},
		beforeSend: {},
		isDeletingSession: {
			type: Boolean,
			default: false
		},
		budgetCards: {
			type: Boolean,
			default: false
		},
		increaseBudget: {
			type: Function,
			default: void 0
		}
	},
	emits: [
		"view-trace",
		"new-session",
		"delete-session",
		"session-select",
		"close",
		"continue-loaded",
		"usage-updated",
		"session-created",
		"open-build",
		"send-to-assistant",
		"initial-consumed"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usageUpdates = ref({});
		function onUsageUpdated(update) {
			if (update.sessionId !== props.effectiveSessionId) return;
			const previous = usageUpdates.value[update.executionId];
			usageUpdates.value[update.executionId] = {
				...update,
				usage: update.usage ?? previous?.usage
			};
			emit("usage-updated", usageUpdates.value[update.executionId]);
		}
		const agentTelemetry = useAgentTelemetry();
		const dock = useTemplateRef("dock");
		const { isEnabled: isLangSmithExportEnabled, isExporting, sendSession } = useAgentSessionLangSmithExport();
		const previewChatPage = useTemplateRef("previewChatPage");
		const storedLayout = useStorage("N8N_AGENT_PREVIEW_LAYOUT", "docked");
		const layout = computed(() => storedLayout.value === "fullpage" ? "fullpage" : "docked");
		function requestActiveSessionDeletion() {
			if (!props.canDeleteSession || !props.hasSession || !props.effectiveSessionId || props.isDeletingSession) return;
			emit("delete-session", props.effectiveSessionId);
		}
		function viewTrace() {
			if (!props.hasSession || !props.effectiveSessionId) return;
			/** Dock the chat so it does not cover the session view after navigation. */
			storedLayout.value = "docked";
			emit("view-trace");
		}
		function exportSession() {
			if (!props.hasSession || !props.effectiveSessionId) return;
			sendSession({
				projectId: props.projectId,
				agentId: props.agentId,
				threadId: props.effectiveSessionId
			});
		}
		function createNewSession(source) {
			agentTelemetry.trackClickedNewTestChat({
				agentId: props.agentId,
				source
			});
			emit("new-session");
		}
		function close() {
			emit("close");
		}
		function getConversationMarkdown() {
			return previewChatPage.value?.getConversationMarkdown() ?? "";
		}
		function clearBudgetStops(fields) {
			previewChatPage.value?.clearBudgetStops(fields);
		}
		function toggleFullWidth() {
			storedLayout.value = layout.value === "fullpage" ? "docked" : "fullpage";
		}
		watch([
			() => props.isOpen,
			() => props.initialized,
			() => props.effectiveSessionId
		], async function focusPreviewInput([isOpen, initialized, sessionId]) {
			if (!isOpen || !initialized || !sessionId) return;
			await nextTick();
			/** preventScroll makes sure that the content doesn't jump when transitioning */
			previewChatPage.value?.focusInput({ preventScroll: true });
		}, { flush: "post" });
		/** Handle the escape shortcut locally instead of useKeybindings so it also works while inputs have focus. */
		function handleEscapeKey(event) {
			if (event.defaultPrevented || event.isComposing || event.key !== "Escape") return;
			if (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) return;
			if (!props.isOpen || dock.value?.contains(event.target) !== true || event.target instanceof Element && event.target.closest("[role=\"dialog\"]") !== null) return;
			event.preventDefault();
			event.stopPropagation();
			close();
		}
		useKeybindings({ "ctrl+shift+;": {
			allowInInputs: true,
			disabled: () => !props.isOpen,
			run: () => createNewSession("shortcut")
		} });
		__expose({ clearBudgetStops });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				ref_key: "dock",
				ref: dock,
				class: normalizeClass([_ctx.$style.dock, { [_ctx.$style.open]: props.isOpen }]),
				"aria-label": unref(i18n).baseText("agents.builder.preview.button"),
				"aria-hidden": !props.isOpen,
				inert: !props.isOpen,
				onKeydown: handleEscapeKey,
				"data-preview-layout": layout.value,
				"data-testid": "agent-preview-dock"
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.dockInner, { [_ctx.$style.fullpage]: layout.value === "fullpage" }]) }, [createBaseVNode("header", {
				class: normalizeClass(_ctx.$style.header),
				"data-testid": "agent-preview-dock-header"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sessionHistory) }, [createVNode(AgentSessionHistoryDropdown_default, {
				"session-options": props.sessionOptions,
				"can-delete-session": props.canDeleteSession,
				"is-deleting-session": props.isDeletingSession,
				onSelect: _cache[0] || (_cache[0] = ($event) => emit("session-select", $event)),
				onDelete: _cache[1] || (_cache[1] = ($event) => emit("delete-session", $event))
			}, {
				trigger: withCtx(() => [createVNode(ChatHistoryDropdownTrigger_default, {
					title: props.hasSession ? props.sessionTitle : void 0,
					"data-testid": "agent-preview-history-trigger"
				}, null, 8, ["title"])]),
				_: 1
			}, 8, [
				"session-options",
				"can-delete-session",
				"is-deleting-session"
			])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
				props.hasSession && props.effectiveSessionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("agents.builder.preview.viewSession"),
					placement: "bottom",
					"show-after": unref(500),
					"data-testid": "agent-preview-view-session-tooltip"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "list-tree",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.preview.viewSession"),
						"data-testid": "agent-preview-view-session-btn",
						onClick: viewTrace
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content", "show-after"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: "bottom",
					label: unref(i18n).baseText("agents.builder.chat.newChat.label"),
					shortcut: {
						metaKey: true,
						shiftKey: true,
						keys: [";"]
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "message-circle-plus",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.chat.newChat.label"),
						"data-testid": "agent-preview-new-chat-btn",
						onClick: _cache[2] || (_cache[2] = ($event) => createNewSession("test-panel"))
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(AgentPreviewMoreMenu_default, {
					"project-id": props.projectId,
					"agent-id": props.agentId,
					"effective-session-id": props.effectiveSessionId,
					"has-session": props.hasSession,
					"can-delete-session": props.canDeleteSession,
					"is-deleting-session": props.isDeletingSession,
					"is-full-width": layout.value === "fullpage",
					"is-lang-smith-export-enabled": unref(isLangSmithExportEnabled),
					"is-exporting": unref(isExporting),
					"get-conversation-markdown": getConversationMarkdown,
					"usage-updates": usageUpdates.value,
					onToggleFullWidth: toggleFullWidth,
					onExportSession: exportSession,
					onDeleteSession: requestActiveSessionDeletion
				}, null, 8, [
					"project-id",
					"agent-id",
					"effective-session-id",
					"has-session",
					"can-delete-session",
					"is-deleting-session",
					"is-full-width",
					"is-lang-smith-export-enabled",
					"is-exporting",
					"usage-updates"
				]),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: "bottom",
					label: unref(i18n).baseText("agents.builder.preview.close.ariaLabel"),
					shortcut: {
						metaKey: false,
						shiftKey: false,
						keys: ["esc"]
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "x",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.preview.close.ariaLabel"),
						"data-testid": "agent-preview-close-btn",
						onClick: close
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"])
			], 2)], 2), createVNode(AgentPreviewChatPage_default, {
				ref_key: "previewChatPage",
				ref: previewChatPage,
				visible: props.isOpen,
				initialized: props.initialized,
				"project-id": props.projectId,
				"agent-id": props.agentId,
				agent: props.agent,
				"local-config": props.localConfig,
				"connected-triggers": props.connectedTriggers,
				"effective-session-id": props.effectiveSessionId,
				"new-session": props.newSession,
				"initial-prompt": props.initialPrompt,
				"can-send-to-assistant": props.canSendToAssistant,
				"dismissed-fix-tool-call-ids": props.dismissedFixToolCallIds,
				"before-send": props.beforeSend,
				"budget-cards": props.budgetCards,
				"increase-budget": props.increaseBudget,
				onContinueLoaded: _cache[3] || (_cache[3] = ($event) => emit("continue-loaded", $event)),
				onUsageUpdated,
				onSessionCreated: _cache[4] || (_cache[4] = ($event) => emit("session-created", $event)),
				onOpenBuild: _cache[5] || (_cache[5] = ($event) => emit("open-build")),
				onSendToAssistant: _cache[6] || (_cache[6] = ($event) => emit("send-to-assistant", $event)),
				onInitialConsumed: _cache[7] || (_cache[7] = ($event) => emit("initial-consumed"))
			}, null, 8, [
				"visible",
				"initialized",
				"project-id",
				"agent-id",
				"agent",
				"local-config",
				"connected-triggers",
				"effective-session-id",
				"new-session",
				"initial-prompt",
				"can-send-to-assistant",
				"dismissed-fix-tool-call-ids",
				"before-send",
				"budget-cards",
				"increase-budget"
			])], 2)], 42, _hoisted_1);
		};
	}
}), [["__cssModules", { "$style": {
	dock: "_dock_1pag9_1",
	fullpage: "_fullpage_1pag9_13",
	dockInner: "_dockInner_1pag9_17",
	open: "_open_1pag9_30",
	header: "_header_1pag9_46",
	sessionHistory: "_sessionHistory_1pag9_54",
	actions: "_actions_1pag9_58"
} }]]);
//#endregion
export { AgentPreviewChatPage_default as a, useAgentSessionLangSmithExport as i, useAgentSessionUsage as n, AgentSessionHistoryDropdown_default as o, formatAgentUsage as r, useAgentBuilderSession as s, AgentPreviewDock_default as t };
