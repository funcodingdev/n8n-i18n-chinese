import { Ad as vModelText, Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Bf as shallowRef, Bu as useEventListener, Cf as watch, Ef as withDirectives, Eu as onClickOutside, Ff as onScopeDispose, Gd as createVNode, Hd as createSlots, Kf as unref, Ld as computed, Nd as withModifiers, Nf as isRef, Of as effectScope, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Qo as RouterLink, Rd as createBaseVNode, Rf as ref, Sd as Transition, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, Wf as toValue, Wu as useLocalStorage, af as onBeforeUnmount, as as useRoute, cf as onUnmounted, ep as init_shared_esm_bundler, fd as until, ff as renderList, gf as resolveDynamicComponent, hp as normalizeStyle, nf as mergeProps, os as useRouter, pd as useDebounceFn, pf as renderSlot, pp as normalizeClass, qd as defineComponent, rf as nextTick, sf as onMounted, uf as openBlock, vf as useId, vp as toDisplayString, zd as createBlock, zf as shallowReactive, zu as useElementSize } from "./vendor-BA8kaY8M.js";
import { Ds as INSTANCE_AI_VIEW, ED as N8nText_default, Eo as useInstanceAiStore, Es as INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY, FD as N8nIcon_default, Fg as getWorkflow, Hy as useToast, Io as instanceAiResponseNow, Jy as useUsersStore, Kg as getDebounceTime, Ky as useTelemetry, LS as base64EncodedSize, My as DEBOUNCE_TIME, ND as N8nIconButton_default, Nv as LOCAL_STORAGE_INSTANCE_AI_LIMITED_MODE_DISMISSED, OD as N8nTooltip_default, Oi as useAgentsN8nChatFlag, PD as N8nButton_default, QT as N8nSpinner_default, RD as _plugin_vue_export_helper_default, Ss as INSTANCE_AI_SETTINGS_VIEW, Tm as useSourceControlStore, Ts as INSTANCE_AI_THREAD_VIEW, UD as useI18n, Uy as VIEWS, Xl as convertFileToBinaryData, Xo as EMPTY_ASSISTANT_MENTION_COUNTS, Xy as useRootStore, Yg as redactTelemetryText, Yy as useSettingsStore, Zg as TELEMETRY_EVENT, Zo as useInstanceAiSettingsStore, aD as N8nCallout_default, ag as useUIStore, cn as useRecentWorkflowsStore, dp as useExistingWorkflowDocumentStore, ig as listenForModalChanges, ko as mergeNodeSets, l as isContextPreferencesEnabled, lo as clearPendingThreadHandoff, of as usePageRedirectionHelper, op as createWorkflowDocumentId, pm as useWorkflowsListStore, pt as CreditsSettingsDropdown_default, q_ as STICKY_NODE_TYPE, tu as NodeIcon_default, vD as DropdownMenu_default, vs as INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY, wo as USER_TYPED_MESSAGE, ws as INSTANCE_AI_THREADS_VIEW, yE as N8nNodeIcon_default, yp as useNodeTypesStore } from "./app-CfhiRDif.js";
import { a as mergeRecentChats, n as chatItemRoute, o as useAgentN8nChatThreadsStore, r as chatItemTitle, t as agentThreadActions } from "./mergeRecentChats-BYoAkq6w.js";
import { t as RecentChatIcon_default } from "./RecentChatIcon-CpfZ7Fg5.js";
import { t as iconForMcpRegistryServer } from "./mcpRegistryIcon-BDkbIdlc.js";
import { a as InstanceAiResourceChip_default, i as AttachmentPreview_default, n as ChatHistoryDropdown_default, o as AssistantMentionBreadcrumbs_default, r as EXTENDED_PROMPT_MAX_LENGTH, s as ChatInputBase_default, t as ChatHistoryDropdownTrigger_default } from "./ChatHistoryDropdownTrigger-ET5ym4hc.js";
import { t as useMergedChatHistory } from "./useMergedChatHistory-DhfzsEvU.js";
import { t as useInstanceAiMcpStore } from "./instanceAiMcp.store-DQ27RKeS.js";
import { n as useInstanceAiMcpTelemetry, t as useMcpServerConnect } from "./useMcpServerConnect-Dl7qmTu5.js";
import { i as useInstanceAiBrowserUseTelemetry, r as useExtensionDirectConnect, t as beginConnectFlow } from "./useExtensionDirectConnect-DfADmKgc.js";
//#region src/features/ai/instanceAi/components/InstanceAiThreadList.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$3 = ["role"];
var _hoisted_2$1 = ["aria-label", "onBlur"];
var AGENT_ITEM_ID_PREFIX = "agent:";
var InstanceAiThreadList_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadList",
	props: {
		maxHeight: { default: void 0 },
		filter: {
			type: Function,
			default: void 0
		},
		navigate: {
			type: Boolean,
			default: true
		},
		activeThreadId: { default: void 0 },
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"close",
		"select",
		"deleted"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const toast = useToast();
		const isAgentsN8nChatFlag = useAgentsN8nChatFlag();
		const isScoped = computed(() => Boolean(props.filter) || !props.navigate);
		const agentThreadsStore = useAgentN8nChatThreadsStore();
		const showChatIcons = computed(() => isAgentsN8nChatFlag.value && !isScoped.value);
		const activeThreadId = computed(() => props.activeThreadId ?? (typeof route.params.threadId === "string" ? route.params.threadId : void 0));
		const isRecentOnly = computed(() => showChatIcons.value && !store.threadHistory.search);
		const searchesAgentThreads = computed(() => showChatIcons.value && !isRecentOnly.value && activeThreadId.value === void 0);
		const { history, search, sentinelRef, items: mergedItems, hasMore: mergedHasMore, isLoading: mergedIsLoading, error: mergedError, loadMore } = useMergedChatHistory({ enabled: () => searchesAgentThreads.value });
		const menuOpen = ref(false);
		const menuContentId = useId();
		const historyDropdownRef = ref(null);
		const editingThreadId = ref(null);
		const editingTitle = ref("");
		const renameInput = ref(null);
		const threadActions = [{
			id: "rename",
			label: i18n.baseText("instanceAi.sidebar.renameThread"),
			icon: "pencil"
		}, {
			id: "delete",
			label: i18n.baseText("instanceAi.sidebar.deleteThread"),
			icon: "trash-2"
		}];
		const agentActions = agentThreadActions(i18n);
		function itemRowId(item) {
			return item.kind === "assistant" ? item.thread.id : `${AGENT_ITEM_ID_PREFIX}${item.thread.id}`;
		}
		const scopedItems = computed(() => {
			if (isRecentOnly.value) return mergeRecentChats(history.value.threads, agentThreadsStore.knownThreads, {
				limit: 5,
				openThreadId: activeThreadId.value
			});
			if (searchesAgentThreads.value) return mergedItems.value;
			return history.value.threads.filter((thread) => props.filter ? props.filter(thread) : true).map((thread) => ({
				kind: "assistant",
				thread
			}));
		});
		const hasMore = computed(() => {
			if (isRecentOnly.value) return false;
			if (searchesAgentThreads.value) return mergedHasMore.value;
			return history.value.hasMore;
		});
		const isLoading = computed(() => searchesAgentThreads.value ? mergedIsLoading.value : history.value.loading);
		const error = computed(() => searchesAgentThreads.value ? mergedError.value : history.value.error);
		const menuItems = computed(() => scopedItems.value.map((item) => {
			if (item.kind === "assistant") return {
				id: item.thread.id,
				label: item.thread.title,
				disabled: props.disabled,
				testId: "instance-ai-thread-item",
				data: {
					updatedAt: item.thread.updatedAt ?? item.thread.createdAt,
					actions: threadActions
				}
			};
			return {
				id: itemRowId(item),
				label: chatItemTitle(item, i18n),
				disabled: props.disabled,
				testId: "instance-ai-agent-thread-item",
				data: {
					updatedAt: item.thread.updatedAt,
					actions: agentActions
				}
			};
		}));
		const itemsById = computed(() => new Map(scopedItems.value.map((item) => [itemRowId(item), item])));
		const lastVisibleItemId = computed(() => {
			const last = scopedItems.value.at(-1);
			return last ? itemRowId(last) : void 0;
		});
		let restoreTriggerFocus = false;
		watch([() => scopedItems.value.length, () => history.value.search], ([threadCount, searchTerm], [previousThreadCount]) => {
			if (!searchTerm || previousThreadCount !== 0 || threadCount === 0) return;
			nextTick(() => historyDropdownRef.value?.highlightFirstItem());
		});
		function handleMenuOpenChange(open) {
			menuOpen.value = open;
			if (open) {
				restoreTriggerFocus = false;
				if (showChatIcons.value) agentThreadsStore.fetchRecent(10);
				return;
			}
			if (!restoreTriggerFocus) return;
			restoreTriggerFocus = false;
			nextTick(() => historyDropdownRef.value?.focusTrigger());
		}
		function closeMenu() {
			restoreTriggerFocus = true;
			handleMenuOpenChange(false);
		}
		useEventListener(document, "keydown", (event) => {
			if (!menuOpen.value || !(event.target instanceof HTMLElement)) return;
			const menu = event.target.closest("[data-menu-content]");
			if (menu?.id !== menuContentId) return;
			if (event.target === renameInput.value && (event.key === "Enter" || event.key === "Escape")) {
				event.preventDefault();
				event.stopPropagation();
				const threadId = editingThreadId.value;
				if (event.key === "Enter" && threadId) confirmRename(threadId);
				else cancelRename();
				nextTick(() => menu.querySelector("input[type=\"text\"]")?.focus());
				return;
			}
			if (event.key === "Escape") restoreTriggerFocus = true;
		}, { capture: true });
		async function handleDeleteThread(threadId) {
			const wasActive = threadId === activeThreadId.value;
			if (!await store.deleteThread(threadId)) return;
			clearPendingThreadHandoff(threadId);
			if (!wasActive) return;
			if (!props.navigate) {
				emit("deleted", true);
				return;
			}
			if (store.threads.length > 0) router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId: store.threads[0].id }
			});
			else router.push({ name: INSTANCE_AI_VIEW });
		}
		function openAllThreads() {
			closeMenu();
			emit("close");
			router.push({ name: INSTANCE_AI_THREADS_VIEW });
		}
		function setRenameInput(element) {
			renameInput.value = element instanceof HTMLInputElement ? element : null;
		}
		function startRename(threadId) {
			if (props.disabled) return;
			const currentTitle = history.value.threads.find((thread) => thread.id === threadId)?.title;
			if (!currentTitle) return;
			editingThreadId.value = threadId;
			editingTitle.value = currentTitle;
			nextTick(() => {
				renameInput.value?.focus();
				renameInput.value?.select();
			});
		}
		async function confirmRename(threadId) {
			if (editingThreadId.value !== threadId) return;
			editingThreadId.value = null;
			const title = editingTitle.value.trim();
			if (!title || title === history.value.threads.find((t) => t.id === threadId)?.title) return;
			try {
				await store.renameThread(threadId, title);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("instanceAi.threads.renameSuccess")
				});
			} catch (renameError) {
				toast.showError(renameError, i18n.baseText("instanceAi.threads.renameError"));
			}
		}
		function cancelRename() {
			editingThreadId.value = null;
		}
		function handleThreadSelect(threadId) {
			if (props.disabled) return;
			restoreTriggerFocus = true;
			emit("select", threadId);
			if (props.navigate) router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			});
		}
		function handleMenuSelect(itemId) {
			if (props.disabled) return;
			if (!itemId.startsWith(AGENT_ITEM_ID_PREFIX)) {
				handleThreadSelect(itemId);
				return;
			}
			const agentItem = itemsById.value.get(itemId);
			if (agentItem?.kind !== "agent") return;
			restoreTriggerFocus = true;
			router.push(chatItemRoute(agentItem));
		}
		function handleThreadAction(action, itemId) {
			if (props.disabled) return;
			if (itemId.startsWith(AGENT_ITEM_ID_PREFIX)) {
				const item = itemsById.value.get(itemId);
				if (action === "delete" && item?.kind === "agent") agentThreadsStore.deleteThread(item.thread);
				return;
			}
			if (action === "delete") handleDeleteThread(itemId);
			else if (action === "rename") requestAnimationFrame(() => startRename(itemId));
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatHistoryDropdown_default, {
				ref_key: "historyDropdownRef",
				ref: historyDropdownRef,
				"model-value": menuOpen.value,
				items: menuItems.value,
				loading: isLoading.value && scopedItems.value.length === 0,
				"max-height": props.maxHeight,
				"search-placeholder": unref(i18n).baseText("instanceAi.threads.searchPlaceholder"),
				"action-button-label": unref(i18n).baseText("instanceAi.threads.actions"),
				"editing-item-id": editingThreadId.value ?? void 0,
				"actions-disabled": __props.disabled,
				"item-double-click-enabled": "",
				"content-id": unref(menuContentId),
				"content-test-id": "instance-ai-thread-list",
				onSearch: _cache[3] || (_cache[3] = ($event) => search.value = $event),
				onSelect: handleMenuSelect,
				onAction: handleThreadAction,
				onItemDblclick: startRename,
				"onUpdate:modelValue": handleMenuOpenChange
			}, createSlots({
				loading: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.status),
					role: "status"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loading")), 1)]),
					_: 1
				})], 2)]),
				empty: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.empty),
					role: error.value ? "alert" : "status",
					"data-test-id": "instance-ai-thread-list-empty"
				}, [error.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loadError")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "xsmall",
					onClick: unref(loadMore)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				}, 8, ["onClick"])], 64)) : hasMore.value && !isLoading.value && !error.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					ref_key: "sentinelRef",
					ref: sentinelRef,
					class: normalizeClass(_ctx.$style.sentinel),
					"data-test-id": "instance-ai-thread-sentinel"
				}, null, 2)) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(history).search ? "instanceAi.threads.noSearchResults" : "instanceAi.sidebar.noThreads")), 1)]),
					_: 1
				}))], 10, _hoisted_1$3)]),
				"item-edit": withCtx(({ item, ui }) => [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.renameContainer, ui.class]),
					onPointerdown: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
					onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
				}, [withDirectives(createBaseVNode("input", {
					ref: setRenameInput,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingTitle.value = $event),
					class: normalizeClass(_ctx.$style.renameInput),
					type: "text",
					maxlength: "255",
					"aria-label": unref(i18n).baseText("instanceAi.threads.rename"),
					onBlur: ($event) => confirmRename(item.id)
				}, null, 42, _hoisted_2$1), [[vModelText, editingTitle.value]])], 34)]),
				"item-trailing": withCtx(({ item }) => [item.id === lastVisibleItemId.value && hasMore.value && !isLoading.value && !error.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "sentinelRef",
					ref: sentinelRef,
					class: normalizeClass(_ctx.$style.sentinel),
					"data-test-id": "instance-ai-thread-sentinel"
				}, null, 2)) : createCommentVNode("", true)]),
				footer: withCtx(() => [scopedItems.value.length > 0 && (isLoading.value || error.value || __props.navigate) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.footer)
				}, [scopedItems.value.length > 0 && isLoading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.status),
					role: "status"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loading")), 1)]),
					_: 1
				})], 2)) : scopedItems.value.length > 0 && error.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.status),
					role: "alert"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loadError")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "xsmall",
					onClick: unref(loadMore)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				}, 8, ["onClick"])], 2)) : createCommentVNode("", true), __props.navigate ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 2,
					variant: "ghost",
					icon: "list",
					"data-test-id": "instance-ai-view-all-threads",
					class: normalizeClass(_ctx.$style.viewAll),
					onClick: openAllThreads
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.viewAll")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				_: 2
			}, [_ctx.$slots.trigger ? {
				name: "trigger",
				fn: withCtx(() => [renderSlot(_ctx.$slots, "trigger")]),
				key: "0"
			} : void 0, showChatIcons.value ? {
				name: "item-leading",
				fn: withCtx(({ item, ui }) => [createVNode(RecentChatIcon_default, {
					class: normalizeClass(ui.class),
					item: itemsById.value.get(item.id)
				}, null, 8, ["class", "item"])]),
				key: "1"
			} : void 0]), 1032, [
				"model-value",
				"items",
				"loading",
				"max-height",
				"search-placeholder",
				"action-button-label",
				"editing-item-id",
				"actions-disabled",
				"content-id"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	renameContainer: "_renameContainer_mgzdu_1",
	renameInput: "_renameInput_mgzdu_5",
	status: "_status_mgzdu_19",
	empty: "_empty_mgzdu_20",
	sentinel: "_sentinel_mgzdu_33",
	footer: "_footer_mgzdu_37",
	viewAll: "_viewAll_mgzdu_49"
} }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiViewHeader.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var InstanceAiViewHeader_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InstanceAiViewHeader",
	props: {
		title: { default: void 0 },
		threadId: { default: void 0 },
		threadList: { default: void 0 }
	},
	emits: ["select", "deleted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const store = useInstanceAiStore();
		const sourceControlStore = useSourceControlStore();
		const i18n = useI18n();
		const route = useRoute();
		const { goToUpgrade } = usePageRedirectionHelper();
		const isReadOnlyEnvironment = computed(() => sourceControlStore.preferences.branchReadOnly);
		const activeThreadId = computed(() => {
			if (props.threadId) return props.threadId;
			const id = route.params?.threadId;
			return typeof id === "string" ? id : void 0;
		});
		const threadCreditsUsed = computed(() => activeThreadId.value ? store.threadCreditsUsed(activeThreadId.value) : void 0);
		function handleThreadSelect(threadId) {
			emit("select", threadId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadHistory) }, [createVNode(InstanceAiThreadList_default, {
					"max-height": "calc(var(--spacing--5xl) + var(--spacing--4xl) + var(--spacing--3xl))",
					filter: __props.threadList?.filter,
					navigate: __props.threadList?.navigate,
					disabled: __props.threadList?.disabled,
					"active-thread-id": __props.threadId,
					onSelect: handleThreadSelect,
					onDeleted: _cache[0] || (_cache[0] = ($event) => emit("deleted", $event))
				}, {
					trigger: withCtx(() => [createVNode(ChatHistoryDropdownTrigger_default, {
						title: props.title,
						"data-test-id": "instance-ai-sidebar-toggle"
					}, null, 8, ["title"])]),
					_: 1
				}, 8, [
					"filter",
					"navigate",
					"disabled",
					"active-thread-id"
				])], 2),
				renderSlot(_ctx.$slots, "status"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [unref(store).creditsRemaining !== void 0 ? (openBlock(), createBlock(CreditsSettingsDropdown_default, {
					key: 0,
					"credits-remaining": unref(store).creditsRemaining,
					"credits-quota": unref(store).creditsQuota,
					"credits-used": threadCreditsUsed.value,
					"is-low-credits": unref(store).isLowCredits,
					"button-size": "small",
					"icon-size": "large",
					onUpgradeClick: _cache[1] || (_cache[1] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai"))
				}, null, 8, [
					"credits-remaining",
					"credits-quota",
					"credits-used",
					"is-low-credits"
				])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "actions")], 2)
			], 2), isReadOnlyEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "warning",
				icon: "lock",
				class: normalizeClass(_ctx.$style.readOnlyBanner)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.instanceAi.notice")), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 64);
		};
	}
}), [["__cssModules", { "$style": {
	header: "_header_c34fs_1",
	headerActions: "_headerActions_c34fs_10",
	threadHistory: "_threadHistory_c34fs_18",
	readOnlyBanner: "_readOnlyBanner_c34fs_22"
} }]]);
//#endregion
//#region src/features/ai/instanceAi/composables/useCreditWarningBanner.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/**
* Shared credit-warning banner state used by every Instance AI view leaf.
* The banner becomes dismissible the moment credits drop below the warning
* threshold; subsequent push updates within the low-credits zone don't
* re-show a banner the user already dismissed.
*/
function useCreditWarningBanner(isLowCredits) {
	const dismissed = ref(false);
	watch(() => toValue(isLowCredits), (isLow, wasLow) => {
		if (isLow && !wasLow) dismissed.value = false;
	});
	const visible = computed(() => toValue(isLowCredits) && !dismissed.value);
	function dismiss() {
		dismissed.value = true;
	}
	return {
		visible,
		dismiss
	};
}
//#endregion
//#region src/features/ai/instanceAi/emptyStateSuggestions.ts
var isPromptSuggestion = (suggestion) => suggestion.type === "prompt";
var isMenuSuggestion = (suggestion) => suggestion.type === "menu";
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPromptSuggestions.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$2 = [
	"data-test-id",
	"aria-expanded",
	"aria-haspopup",
	"disabled",
	"onClick",
	"onMouseenter",
	"onMouseleave",
	"onFocus",
	"onBlur"
];
var _hoisted_2 = ["aria-label", "disabled"];
var _hoisted_3 = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseenter",
	"onFocus"
];
var InstanceAiPromptSuggestions_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InstanceAiPromptSuggestions",
	props: {
		suggestions: {},
		disabled: { type: Boolean }
	},
	emits: [
		"preview-change",
		"quick-examples-opened",
		"insert-suggestion"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const quickExamplesSuggestion = computed(() => props.suggestions.find(isMenuSuggestion) ?? null);
		const activePreviewPromptKey = ref(null);
		const isQuickExamplesOpen = ref(false);
		const rootRef = ref(null);
		let hoverTimer = null;
		function clearHoverTimer() {
			if (!hoverTimer) return;
			clearTimeout(hoverTimer);
			hoverTimer = null;
		}
		function setPreview(promptKey) {
			activePreviewPromptKey.value = promptKey;
			emit("preview-change", promptKey);
		}
		function closeQuickExamples() {
			clearHoverTimer();
			isQuickExamplesOpen.value = false;
			setPreview(null);
		}
		function getTopLevelPosition(suggestionId) {
			const index = props.suggestions.findIndex((suggestion) => suggestion.id === suggestionId);
			return index >= 0 ? index + 1 : 0;
		}
		function getQuickExamplePosition(exampleId) {
			const quickExamples = quickExamplesSuggestion.value;
			if (!quickExamples) return 0;
			const index = quickExamples.examples.findIndex((example) => example.id === exampleId);
			return index >= 0 ? index + 1 : 0;
		}
		function insertSuggestion(payload) {
			if (props.disabled) return;
			closeQuickExamples();
			emit("insert-suggestion", payload);
		}
		function handleDocumentKeydown(event) {
			if (event.key === "Escape") closeQuickExamples();
		}
		onMounted(() => {
			document.addEventListener("keydown", handleDocumentKeydown);
		});
		onUnmounted(() => {
			document.removeEventListener("keydown", handleDocumentKeydown);
			clearHoverTimer();
		});
		onClickOutside(rootRef, closeQuickExamples);
		function handleSuggestionEnter(suggestion) {
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			clearHoverTimer();
			hoverTimer = setTimeout(() => {
				hoverTimer = null;
				setPreview(suggestion.promptKey);
			}, 300);
		}
		function handleSuggestionLeave(suggestion) {
			clearHoverTimer();
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(null);
		}
		function handleSuggestionFocus(suggestion) {
			clearHoverTimer();
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(suggestion.promptKey);
		}
		function handleSuggestionBlur(suggestion) {
			clearHoverTimer();
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(null);
		}
		function handleSuggestionClick(suggestion) {
			clearHoverTimer();
			if (isPromptSuggestion(suggestion)) {
				insertSuggestion({
					promptKey: suggestion.promptKey,
					suggestionId: suggestion.id,
					suggestionKind: "prompt",
					position: getTopLevelPosition(suggestion.id),
					prefillType: "v1_opener"
				});
				return;
			}
			if (props.disabled) return;
			if (isQuickExamplesOpen.value) {
				closeQuickExamples();
				return;
			}
			setPreview(null);
			isQuickExamplesOpen.value = true;
			emit("quick-examples-opened", {
				suggestionId: suggestion.id,
				position: getTopLevelPosition(suggestion.id)
			});
		}
		function handleQuickExampleEnter(promptKey) {
			if (props.disabled) return;
			setPreview(promptKey);
		}
		function handleQuickExampleLeave() {
			if (props.disabled) return;
			setPreview(null);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "rootRef",
				ref: rootRef,
				class: normalizeClass(_ctx.$style.suggestions)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestionRow) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.suggestions, (suggestion, index) => {
				return openBlock(), createElementBlock("button", {
					key: suggestion.id,
					type: "button",
					class: normalizeClass([
						_ctx.$style.suggestionButton,
						unref(isMenuSuggestion)(suggestion) && _ctx.$style.menuSuggestionButton,
						unref(isMenuSuggestion)(suggestion) && isQuickExamplesOpen.value && _ctx.$style.menuSuggestionButtonActive
					]),
					style: normalizeStyle({ animationDelay: `${index * 50}ms` }),
					"data-test-id": `instance-ai-suggestion-${suggestion.id}`,
					"aria-expanded": unref(isMenuSuggestion)(suggestion) ? isQuickExamplesOpen.value : void 0,
					"aria-haspopup": unref(isMenuSuggestion)(suggestion) ? "dialog" : void 0,
					disabled: props.disabled,
					onClick: ($event) => handleSuggestionClick(suggestion),
					onMouseenter: ($event) => handleSuggestionEnter(suggestion),
					onMouseleave: ($event) => handleSuggestionLeave(suggestion),
					onFocus: ($event) => handleSuggestionFocus(suggestion),
					onBlur: ($event) => handleSuggestionBlur(suggestion)
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: suggestion.icon,
						size: 12,
						class: normalizeClass(_ctx.$style.suggestionIcon)
					}, null, 8, ["icon", "class"]),
					createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(suggestion.labelKey)), 1),
					unref(isMenuSuggestion)(suggestion) ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: isQuickExamplesOpen.value ? "chevron-up" : "chevron-down",
						size: 12,
						class: normalizeClass(_ctx.$style.suggestionChevron)
					}, null, 8, ["icon", "class"])) : createCommentVNode("", true)
				], 46, _hoisted_1$2);
			}), 128))], 2), createVNode(Transition, { name: "quick-examples-fade" }, {
				default: withCtx(() => [isQuickExamplesOpen.value && quickExamplesSuggestion.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.quickExamplesPanel),
					"data-test-id": "instance-ai-quick-examples-panel"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesTitle) }, [createVNode(unref(N8nIcon_default), {
					icon: quickExamplesSuggestion.value.icon,
					size: 14
				}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText(quickExamplesSuggestion.value.labelKey)), 1)], 2), createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.quickExamplesClose),
					"aria-label": unref(i18n).baseText("instanceAi.emptyState.quickExamples.close"),
					disabled: props.disabled,
					onClick: closeQuickExamples
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: 14
				})], 10, _hoisted_2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(quickExamplesSuggestion.value.examples, (example) => {
					return openBlock(), createElementBlock("button", {
						key: example.id,
						type: "button",
						class: normalizeClass([_ctx.$style.quickExampleButton, activePreviewPromptKey.value === example.promptKey && _ctx.$style.quickExampleButtonActive]),
						"data-test-id": `instance-ai-quick-example-${example.id}`,
						disabled: props.disabled,
						onClick: ($event) => insertSuggestion({
							promptKey: example.promptKey,
							suggestionId: example.id,
							suggestionKind: "quick_example",
							position: getQuickExamplePosition(example.id),
							prefillType: "v1_opener"
						}),
						onMouseenter: ($event) => handleQuickExampleEnter(example.promptKey),
						onMouseleave: handleQuickExampleLeave,
						onFocus: ($event) => handleQuickExampleEnter(example.promptKey),
						onBlur: handleQuickExampleLeave
					}, toDisplayString(unref(i18n).baseText(example.labelKey)), 43, _hoisted_3);
				}), 128))], 2)], 2)) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
}), [["__cssModules", { "$style": {
	suggestions: "_suggestions_1o57f_11",
	suggestionRow: "_suggestionRow_1o57f_16",
	suggestionButton: "_suggestionButton_1o57f_24",
	suggestionSlideIn: "_suggestionSlideIn_1o57f_1",
	menuSuggestionButton: "_menuSuggestionButton_1o57f_54",
	menuSuggestionButtonActive: "_menuSuggestionButtonActive_1o57f_58",
	suggestionIcon: "_suggestionIcon_1o57f_65",
	suggestionChevron: "_suggestionChevron_1o57f_74",
	quickExamplesPanel: "_quickExamplesPanel_1o57f_79",
	quickExamplesHeader: "_quickExamplesHeader_1o57f_90",
	quickExamplesTitle: "_quickExamplesTitle_1o57f_99",
	quickExamplesClose: "_quickExamplesClose_1o57f_108",
	quickExamplesList: "_quickExamplesList_1o57f_127",
	quickExampleButton: "_quickExampleButton_1o57f_133",
	quickExampleButtonActive: "_quickExampleButtonActive_1o57f_150"
} }]]);
//#endregion
//#region src/features/ai/instanceAi/composables/useBrowserUseConnection.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
/** Safety net only — the extension answers in milliseconds, or not at all. */
var EXTENSION_REPLY_TIMEOUT_MS = 5e3;
var inFlight = null;
/**
* The one way to get Browser Use connected. Whether the setup modal is needed, and whether
* the extension can connect on its own, is decided here — no call site has to.
*/
function useBrowserUseConnection() {
	const i18n = useI18n();
	const toast = useToast();
	const uiStore = useUIStore();
	const settingsStore = useInstanceAiSettingsStore();
	const telemetry = useInstanceAiBrowserUseTelemetry();
	const { status, isAttempting, attempt } = useExtensionDirectConnect();
	/** Resolves true once the browser is attached, false if the user backed out. */
	async function ensureConnected(source) {
		if (inFlight === null) {
			const endFlow = beginConnectFlow();
			inFlight = run(source).finally(() => {
				inFlight = null;
				endFlow();
			});
		}
		return await inFlight;
	}
	async function run(source) {
		if (settingsStore.browserConnected) return true;
		if (!isAttempting.value) {
			const connectUrl = await settingsStore.fetchBrowserConnectUrl();
			if (connectUrl) {
				telemetry.trackDirectConnectRequested();
				attempt(connectUrl);
			}
		}
		if (isAttempting.value) {
			await until(() => status.value !== "idle").toBe(true, {
				timeout: EXTENSION_REPLY_TIMEOUT_MS,
				throwOnTimeout: false
			});
			if (status.value === "connecting" && await waitForSilentConnect()) return announceConnected();
		}
		telemetry.trackModalOpened(source);
		uiStore.openModal(INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY);
		if (!await waitForConnectedOrDismissed()) return false;
		uiStore.closeModal(INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY);
		return announceConnected();
	}
	/** Not the modal's job: a remembered instance never opens it, so its toast would go unseen. */
	function announceConnected() {
		toast.showMessage({
			type: "success",
			title: i18n.baseText("instanceAi.browserUse.connected"),
			message: i18n.baseText("instanceAi.browserUse.connected.toastMessage")
		});
		return true;
	}
	/**
	* Bounded by the attempt landing on `failed`. Not bounded when the extension reports
	* success but the backend push never arrives — see the follow-up on adding a timeout.
	*/
	async function waitForSilentConnect() {
		await until(() => settingsStore.browserConnected || status.value === "failed").toBe(true, { throwOnTimeout: false });
		return settingsStore.browserConnected;
	}
	async function waitForConnectedOrDismissed() {
		if (settingsStore.browserConnected) return true;
		const listeners = effectScope(true);
		return await new Promise((resolve) => {
			listeners.run(() => {
				const settle = (connected) => {
					listeners.stop();
					resolve(connected);
				};
				watch(() => settingsStore.browserConnected, (connected) => connected && settle(true));
				listenForModalChanges({
					store: uiStore,
					onModalClosed: (name) => {
						if (name === "instanceAiBrowserUseSetup") settle(settingsStore.browserConnected);
					}
				});
			});
		});
	}
	return { ensureConnected };
}
//#endregion
//#region src/features/ai/instanceAi/composables/useInstanceAiInputMenuItems.ts
init_runtime_core_esm_bundler();
function useInstanceAiInputMenuItems(attachFiles) {
	const i18n = useI18n();
	const uiStore = useUIStore();
	const router = useRouter();
	const settingsStore = useInstanceAiSettingsStore();
	const mcpStore = useInstanceAiMcpStore();
	const { ignorePendingConnectResult } = useMcpServerConnect();
	const mcpTelemetry = useInstanceAiMcpTelemetry();
	const { ensureConnected: ensureBrowserConnected } = useBrowserUseConnection();
	settingsStore.fetch();
	watch(() => settingsStore.isMcpAvailable, (isAvailable) => {
		if (isAvailable) mcpStore.fetchConnectionsLazy();
	}, { immediate: true });
	const isBrowserUseAvailable = computed(() => settingsStore.isBrowserUseAvailable);
	function openToolsModal() {
		mcpTelemetry.trackToolsListOpened("input_menu");
		uiStore.openModal(INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY);
	}
	function openPreferenceSettings() {
		window.open(router.resolve({ name: VIEWS.SETTINGS_CONTEXT_PREFERENCES }).href, "_blank");
	}
	function createConnectionItem({ id, status, icon, connectLabel, connectedLabel, connectedTitle, connect, disconnect }) {
		if (status === "none" || status === "connecting") return {
			id,
			label: connectLabel,
			icon: {
				type: "icon",
				value: icon
			},
			data: {
				status,
				action: connect
			}
		};
		if (status === "disconnected") return {
			id,
			label: connectedLabel,
			icon: {
				type: "icon",
				value: icon
			},
			data: { status },
			children: [...connectedTitle ? [{
				id: `${id}-status`,
				label: connectedTitle,
				header: true
			}] : [], {
				id: `${id}-reconnect`,
				label: i18n.baseText("tools.connection.action.reconnect"),
				data: { action: connect }
			}]
		};
		return {
			id,
			label: connectedLabel,
			icon: {
				type: "icon",
				value: icon
			},
			data: { status },
			children: [{
				id: `${id}-status`,
				label: connectedTitle ?? i18n.baseText("instanceAi.inputMenu.status.connected"),
				header: true
			}, {
				id: `${id}-disconnect`,
				label: i18n.baseText("instanceAi.inputMenu.actions.disconnect"),
				data: { action: disconnect }
			}]
		};
	}
	const disconnectedConnectionCount = computed(() => {
		let count = 0;
		if (settingsStore.isMcpAvailable) count += mcpStore.connections.filter(({ status }) => status === "disconnected").length;
		if (isBrowserUseAvailable.value && settingsStore.browserUseConnectionStatus === "disconnected") count++;
		return count;
	});
	return {
		menuItems: computed(() => {
			const items = [{
				id: "attach-files",
				label: i18n.baseText("chatInputBase.button.attach"),
				icon: {
					type: "icon",
					value: "paperclip"
				},
				data: { action: attachFiles }
			}];
			if (settingsStore.isMcpAvailable) {
				const tools = mcpStore.connections.map((connection) => ({
					id: `mcp-${connection.id}`,
					label: connection.serverTitle,
					data: {
						status: connection.status,
						toolIcon: iconForMcpRegistryServer(connection.serverIcons, uiStore.appliedTheme)
					},
					children: [
						{
							id: `mcp-${connection.id}-credential`,
							label: connection.credentialName,
							header: true
						},
						{
							id: `mcp-${connection.id}-setup`,
							label: i18n.baseText("instanceAi.inputMenu.actions.settings"),
							data: { action: () => {
								mcpTelemetry.trackSettingsOpened(connection.serverSlug, "input_menu");
								uiStore.openModalWithData({
									name: INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY,
									data: { connectionId: connection.id }
								});
							} }
						},
						{
							id: `mcp-${connection.id}-disconnect`,
							label: i18n.baseText(connection.status === "disconnected" ? "instanceAi.inputMenu.actions.remove" : "instanceAi.inputMenu.actions.disconnect"),
							divided: true,
							data: { action: async () => {
								ignorePendingConnectResult(connection.serverSlug);
								await mcpStore.disconnect(connection.id);
							} }
						}
					]
				}));
				const toolsStatus = tools.some(({ data }) => data?.status === "connecting") ? "connecting" : tools.some(({ data }) => data?.status === "disconnected") ? "disconnected" : tools.length > 0 ? "connected" : "none";
				const toolsChildren = tools.length > 0 ? [...tools, {
					id: "add-tool",
					label: i18n.baseText("instanceAi.inputMenu.tools.add"),
					icon: {
						type: "icon",
						value: "plus"
					},
					divided: true,
					data: { action: openToolsModal }
				}] : void 0;
				items.push({
					id: "tools",
					label: i18n.baseText(tools.length > 0 ? "instanceAi.inputMenu.tools.connected" : "instanceAi.inputMenu.tools.connect"),
					icon: {
						type: "icon",
						value: "plug"
					},
					data: tools.length > 0 ? { status: toolsStatus } : { action: openToolsModal },
					children: toolsChildren
				});
			}
			if (isBrowserUseAvailable.value) items.push(createConnectionItem({
				id: "browser",
				status: settingsStore.browserUseConnectionStatus,
				icon: "globe",
				connectLabel: i18n.baseText("instanceAi.inputMenu.browser.connect"),
				connectedLabel: i18n.baseText("instanceAi.inputMenu.browser.connected"),
				connectedTitle: settingsStore.browserUseConnectionStatus !== "none" ? i18n.baseText("instanceAi.inputMenu.browser.connectedTitle") : void 0,
				connect: async () => {
					await ensureBrowserConnected("input_menu");
				},
				disconnect: settingsStore.disconnectBrowserUse
			}));
			if (isContextPreferencesEnabled()) items.push({
				id: "preferences",
				label: i18n.baseText("instanceAi.inputMenu.preferences.label"),
				icon: {
					type: "icon",
					value: "brain"
				},
				divided: true,
				data: { action: openPreferenceSettings }
			});
			return items;
		}),
		disconnectedConnectionCount
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiInputMenu.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$1 = ["aria-label"];
var InstanceAiInputMenu_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InstanceAiInputMenu",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		isStreaming: {
			type: Boolean,
			default: false
		}
	},
	emits: ["attachFiles"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const { menuItems, disconnectedConnectionCount } = useInstanceAiInputMenuItems(() => emit("attachFiles"));
		const tooltip = computed(() => {
			if (props.disabled && props.isStreaming) return i18n.baseText("instanceAi.inputMenu.stopResponse");
			const count = disconnectedConnectionCount.value;
			if (count === 0) return i18n.baseText("instanceAi.inputMenu.open");
			if (count === 1) return i18n.baseText("instanceAi.inputMenu.connectionNeedsAttention");
			return i18n.baseText("instanceAi.inputMenu.connectionsNeedAttention", { interpolate: { count: String(count) } });
		});
		const STATUS_LABEL_KEYS = {
			connected: "instanceAi.inputMenu.status.connected",
			connecting: "instanceAi.inputMenu.status.connecting",
			disconnected: "instanceAi.inputMenu.status.disconnected"
		};
		function findMenuItem(items, id) {
			for (const item of items) {
				if (item.id === id) return item;
				const child = item.children ? findMenuItem(item.children, id) : void 0;
				if (child) return child;
			}
		}
		async function handleSelect(id) {
			await findMenuItem(menuItems.value, id)?.data?.action?.();
		}
		function trackInputPlusButtonClick() {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_CLICKED_AI_ASSISTANT_INPUT_PLUS_BUTTON, {});
		}
		function handleUpdateDropdownModelValue(open) {
			if (open) trackInputPlusButtonClick();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: tooltip.value,
				"content-class": _ctx.$style.triggerTooltip,
				placement: "top"
			}, {
				default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
					items: unref(menuItems),
					placement: "top-start",
					disabled: props.disabled,
					"data-test-id": "instance-ai-input-menu",
					onSelect: handleSelect,
					"onUpdate:modelValue": handleUpdateDropdownModelValue
				}, {
					trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "plus",
						variant: "ghost",
						size: "medium",
						"icon-size": "large",
						disabled: props.disabled,
						"aria-label": tooltip.value,
						class: normalizeClass([_ctx.$style.trigger, { [_ctx.$style.triggerWithStatus]: unref(disconnectedConnectionCount) > 0 }])
					}, null, 8, [
						"disabled",
						"aria-label",
						"class"
					])]),
					"item-leading": withCtx(({ item, ui }) => [item.data?.toolIcon ? (openBlock(), createBlock(unref(N8nNodeIcon_default), {
						key: 0,
						type: item.data.toolIcon.type,
						src: item.data.toolIcon.type === "file" ? item.data.toolIcon.src : void 0,
						name: item.data.toolIcon.type === "icon" ? item.data.toolIcon.name : void 0,
						size: 16,
						class: normalizeClass(ui.class)
					}, null, 8, [
						"type",
						"src",
						"name",
						"class"
					])) : item.icon?.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: item.icon.value,
						size: "large",
						class: normalizeClass(ui.class)
					}, null, 8, ["icon", "class"])) : createCommentVNode("", true)]),
					"item-label": withCtx(({ item, ui }) => [createVNode(unref(N8nText_default), {
						size: "medium",
						color: item.disabled ? "text-xlight" : "text-dark",
						class: normalizeClass([
							ui.class,
							_ctx.$style.itemLabel,
							!item.children?.length && _ctx.$style.itemLabelLeaf
						])
					}, {
						default: withCtx(() => [createBaseVNode("span", null, toDisplayString(item.label), 1), item.data?.status && item.data.status !== "none" && !(item.id === "tools" && item.data.status === "connected") ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.statusIndicator),
							"aria-label": unref(i18n).baseText(STATUS_LABEL_KEYS[item.data.status])
						}, [item.data.status === "connecting" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
							key: 0,
							size: "small"
						})) : item.data.status === "connected" ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "check",
							size: "small",
							class: normalizeClass([_ctx.$style.statusIcon, _ctx.$style.connected])
						}, null, 8, ["class"])) : item.id === "tools" ? (openBlock(), createElementBlock("span", {
							key: 2,
							class: normalizeClass([_ctx.$style.statusDot, _ctx.$style.disconnectedDot])
						}, null, 2)) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 3,
							icon: "circle-x",
							size: "small",
							class: normalizeClass([_ctx.$style.statusIcon, _ctx.$style.disconnected])
						}, null, 8, ["class"]))], 10, _hoisted_1$1)) : createCommentVNode("", true)]),
						_: 2
					}, 1032, ["color", "class"])]),
					_: 1
				}, 8, ["items", "disabled"])]),
				_: 1
			}, 8, ["content", "content-class"]);
		};
	}
}), [["__cssModules", { "$style": {
	triggerTooltip: "_triggerTooltip_1qaw9_1",
	trigger: "_trigger_1qaw9_1",
	triggerWithStatus: "_triggerWithStatus_1qaw9_11",
	itemLabel: "_itemLabel_1qaw9_25",
	itemLabelLeaf: "_itemLabelLeaf_1qaw9_32",
	statusDot: "_statusDot_1qaw9_36",
	statusIcon: "_statusIcon_1qaw9_43",
	statusIndicator: "_statusIndicator_1qaw9_47",
	connected: "_connected_1qaw9_57",
	disconnected: "_disconnected_1qaw9_61",
	disconnectedDot: "_disconnectedDot_1qaw9_65"
} }]]);
//#endregion
//#region src/features/ai/assistant-at-mentions/composables/useArtifactMentionIndex.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var MAX_CONCURRENT_WORKFLOW_LOADS = 2;
function projectWorkflowArtifact(workflow) {
	const nodes = workflow.nodes.filter((node) => node.type !== STICKY_NODE_TYPE).map(({ id, name, type, typeVersion }) => ({
		id,
		name,
		type,
		typeVersion
	}));
	const nodesById = new Map(nodes.map((node) => [node.id, node]));
	const groups = (workflow.nodeGroups ?? []).map(({ id, name, nodeIds }) => ({
		id,
		name,
		nodeIds: [...new Set(nodeIds.filter((nodeId) => nodesById.has(nodeId)))]
	})).filter((group) => group.nodeIds.length > 0);
	const groupsById = new Map(groups.map((group) => [group.id, group]));
	const nodeIdToGroupId = /* @__PURE__ */ new Map();
	for (const group of groups) for (const nodeId of group.nodeIds) if (!nodeIdToGroupId.has(nodeId)) nodeIdToGroupId.set(nodeId, group.id);
	return {
		workflowId: workflow.id,
		workflowName: workflow.name,
		versionId: workflow.versionId,
		nodes,
		groups,
		nodesById,
		groupsById,
		nodeIdToGroupId
	};
}
function useArtifactMentionIndex(options) {
	const entries = shallowReactive(/* @__PURE__ */ new Map());
	const revision = ref(0);
	const artifactById = computed(() => new Map(toValue(options.artifacts).map((artifact) => [artifact.id, artifact])));
	const requestGenerations = /* @__PURE__ */ new Map();
	const pendingLoads = /* @__PURE__ */ new Map();
	const loadQueue = [];
	let activeLoadCount = 0;
	let disposed = false;
	const fetchWorkflow = options.fetchWorkflow ?? (async (workflowId) => await getWorkflow(useRootStore().restApiContext, workflowId));
	const getActiveWorkflow = options.getActiveWorkflow ?? ((workflowId) => {
		const store = useExistingWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		if (!store?.hydrated) return void 0;
		return {
			id: workflowId,
			name: store.name,
			versionId: store.versionId,
			nodes: store.allNodes,
			nodeGroups: store.allGroups
		};
	});
	function setEntry(workflowId, entry) {
		entries.set(workflowId, entry);
		revision.value++;
	}
	function removeEntry(workflowId) {
		if (entries.delete(workflowId)) revision.value++;
	}
	function nextGeneration(workflowId) {
		const generation = (requestGenerations.get(workflowId) ?? 0) + 1;
		requestGenerations.set(workflowId, generation);
		return generation;
	}
	function isCurrent(workflowId, generation) {
		return !disposed && artifactById.value.has(workflowId) && requestGenerations.get(workflowId) === generation;
	}
	function getActiveProjection(workflowId) {
		if (toValue(options.activeWorkflowId) !== workflowId) return void 0;
		const workflow = getActiveWorkflow(workflowId);
		return workflow ? projectWorkflowArtifact(workflow) : void 0;
	}
	async function executeLoad(task) {
		if (!isCurrent(task.workflowId, task.generation)) return void 0;
		try {
			const workflow = await fetchWorkflow(task.workflowId);
			if (!isCurrent(task.workflowId, task.generation)) return void 0;
			const activeProjection = getActiveProjection(task.workflowId);
			if (activeProjection) {
				setEntry(task.workflowId, {
					status: "ready",
					source: "active",
					index: activeProjection
				});
				return activeProjection;
			}
			const artifact = artifactById.value.get(task.workflowId);
			const index = projectWorkflowArtifact(artifact ? {
				...workflow,
				name: artifact.name
			} : workflow);
			setEntry(task.workflowId, {
				status: "ready",
				source: "fetched",
				index
			});
			return index;
		} catch (error) {
			if (isCurrent(task.workflowId, task.generation)) {
				const previous = entries.get(task.workflowId);
				setEntry(task.workflowId, {
					status: "error",
					error,
					...previous?.index ? {
						source: previous.source,
						index: previous.index
					} : {}
				});
			}
			return;
		}
	}
	function drainQueue() {
		while (!disposed && activeLoadCount < MAX_CONCURRENT_WORKFLOW_LOADS && loadQueue.length > 0) {
			const task = loadQueue.shift();
			if (!task) return;
			if (!isCurrent(task.workflowId, task.generation)) {
				task.resolve(void 0);
				continue;
			}
			activeLoadCount++;
			executeLoad(task).then((index) => {
				activeLoadCount--;
				task.resolve(index);
				drainQueue();
			});
		}
	}
	function invalidate(workflowId) {
		nextGeneration(workflowId);
		pendingLoads.delete(workflowId);
		if (artifactById.value.has(workflowId)) setEntry(workflowId, { status: "idle" });
		else removeEntry(workflowId);
	}
	async function load(workflowId, options = {}) {
		if (disposed || !artifactById.value.has(workflowId)) return void 0;
		const current = entries.get(workflowId);
		if (current?.status === "ready" && current.source === "active") return current.index;
		const activeProjection = getActiveProjection(workflowId);
		if (activeProjection) {
			nextGeneration(workflowId);
			setEntry(workflowId, {
				status: "ready",
				source: "active",
				index: activeProjection
			});
			return activeProjection;
		}
		if (!options.force) {
			const pending = pendingLoads.get(workflowId);
			if (pending) return await pending;
			if (current?.status === "ready") return current.index;
			if (current?.status === "error") return current.index;
		} else {
			nextGeneration(workflowId);
			pendingLoads.delete(workflowId);
		}
		const generation = nextGeneration(workflowId);
		setEntry(workflowId, {
			status: "loading",
			...current?.index ? {
				source: current.source,
				index: current.index
			} : {}
		});
		const promise = new Promise((resolve) => {
			loadQueue.push({
				workflowId,
				generation,
				resolve
			});
			drainQueue();
		});
		pendingLoads.set(workflowId, promise);
		promise.then(() => {
			if (pendingLoads.get(workflowId) === promise) pendingLoads.delete(workflowId);
		});
		return await promise;
	}
	async function loadAll() {
		const activeWorkflowId = toValue(options.activeWorkflowId);
		const workflowIds = [...artifactById.value.keys()].sort((left, right) => {
			if (left === activeWorkflowId) return -1;
			if (right === activeWorkflowId) return 1;
			return 0;
		});
		await Promise.all(workflowIds.map(async (workflowId) => await load(workflowId)));
	}
	function getEntry(workflowId) {
		return entries.get(workflowId);
	}
	function getIndex(workflowId) {
		return entries.get(workflowId)?.index;
	}
	async function retry(workflowId) {
		return await load(workflowId, { force: true });
	}
	function dispose() {
		if (disposed) return;
		disposed = true;
		for (const workflowId of artifactById.value.keys()) nextGeneration(workflowId);
		for (const task of loadQueue.splice(0)) task.resolve(void 0);
		pendingLoads.clear();
		entries.clear();
		revision.value++;
	}
	watch(() => toValue(options.artifacts).map(({ id, name }) => [id, name]), (artifacts, previousArtifacts = []) => {
		const artifactsChanged = artifacts.length !== previousArtifacts.length || artifacts.some(([workflowId, name], index) => workflowId !== previousArtifacts[index]?.[0] || name !== previousArtifacts[index]?.[1]);
		const revisionBeforeChange = revision.value;
		const nextIds = new Set(artifacts.map(([workflowId]) => workflowId));
		for (const [workflowId, name] of artifacts) {
			const entry = entries.get(workflowId);
			if (!entry?.index || entry.source === "active" || entry.index.workflowName === name) continue;
			setEntry(workflowId, {
				...entry,
				index: {
					...entry.index,
					workflowName: name
				}
			});
		}
		for (const [workflowId] of previousArtifacts) {
			if (nextIds.has(workflowId)) continue;
			nextGeneration(workflowId);
			pendingLoads.delete(workflowId);
			removeEntry(workflowId);
		}
		if (artifactsChanged && revision.value === revisionBeforeChange) revision.value++;
	}, { immediate: true });
	const activeProjection = computed(() => {
		const workflowId = toValue(options.activeWorkflowId);
		if (!workflowId || !artifactById.value.has(workflowId)) return void 0;
		return getActiveProjection(workflowId);
	});
	watch([() => toValue(options.activeWorkflowId), activeProjection], ([workflowId, index], previousValues) => {
		const previousWorkflowId = previousValues?.[0];
		if (previousWorkflowId !== void 0 && previousWorkflowId !== workflowId && entries.get(previousWorkflowId)?.source === "active") {
			invalidate(previousWorkflowId);
			load(previousWorkflowId);
		}
		if (!workflowId || !artifactById.value.has(workflowId)) return;
		if (index) {
			nextGeneration(workflowId);
			setEntry(workflowId, {
				status: "ready",
				source: "active",
				index
			});
		} else if (entries.get(workflowId)?.source === "active") {
			invalidate(workflowId);
			load(workflowId);
		} else if (!entries.has(workflowId)) load(workflowId);
	}, { immediate: true });
	onScopeDispose(dispose);
	return {
		entries,
		revision,
		getEntry,
		getIndex,
		load,
		loadAll,
		invalidate,
		retry,
		dispose
	};
}
function buildMentionKey(kind, workflowId, entityId) {
	return `${kind}:${workflowId}:${entityId}`;
}
function buildWorkflowMentionItem(workflow, source) {
	return {
		key: buildMentionKey("workflow", workflow.id, workflow.id),
		kind: "workflow",
		source,
		label: workflow.name,
		breadcrumbs: [workflow.name],
		workflowId: workflow.id,
		entityId: workflow.id,
		workflowName: workflow.name,
		...workflow.description ? { description: workflow.description } : {}
	};
}
function buildNodeMentionItem(index, nodeId, groupId) {
	const node = index.nodesById.get(nodeId);
	if (!node) return void 0;
	const group = groupId ? index.groupsById.get(groupId) : void 0;
	return {
		key: buildMentionKey("node", index.workflowId, node.id),
		kind: "node",
		source: "artifacts",
		label: node.name,
		breadcrumbs: [
			index.workflowName,
			...group ? [group.name] : [],
			node.name
		],
		workflowId: index.workflowId,
		entityId: node.id,
		workflowName: index.workflowName,
		...group ? {
			groupId: group.id,
			groupName: group.name
		} : {},
		nodeTypeName: node.type,
		nodeTypeVersion: node.typeVersion
	};
}
function buildGroupMentionItem(index, groupId, includeChildren, excludedKeys) {
	const group = index.groupsById.get(groupId);
	if (!group) return void 0;
	const children = includeChildren ? group.nodeIds.map((nodeId) => buildNodeMentionItem(index, nodeId, group.id)).filter((item) => item !== void 0 && !excludedKeys?.has(item.key)) : void 0;
	return {
		key: buildMentionKey("group", index.workflowId, group.id),
		kind: "group",
		source: "artifacts",
		label: group.name,
		breadcrumbs: [index.workflowName, group.name],
		workflowId: index.workflowId,
		entityId: group.id,
		workflowName: index.workflowName,
		groupId: group.id,
		groupName: group.name,
		nodeCount: group.nodeIds.length,
		...includeChildren ? {
			hasChildren: Boolean(children?.length),
			...children ? { children } : {}
		} : {}
	};
}
function buildArtifactWorkflowItem(artifact, index, includeChildren = true, excludedKeys) {
	const workflowName = index?.workflowName ?? artifact.name;
	const children = includeChildren && index ? [...index.groups.map((group) => buildGroupMentionItem(index, group.id, true, excludedKeys)), ...index.nodes.filter((node) => !index.nodeIdToGroupId.has(node.id)).map((node) => buildNodeMentionItem(index, node.id))].filter((item) => item !== void 0 && (!excludedKeys?.has(item.key) || Boolean(item.hasChildren && item.children?.length))) : void 0;
	return {
		key: buildMentionKey("workflow", artifact.id, artifact.id),
		kind: "workflow",
		source: "artifacts",
		label: workflowName,
		breadcrumbs: [workflowName],
		workflowId: artifact.id,
		entityId: artifact.id,
		workflowName,
		...index ? { nodeCount: index.nodes.length } : {},
		...includeChildren ? {
			hasChildren: index ? Boolean(children?.length) : true,
			...children ? { children } : {}
		} : {}
	};
}
function buildArtifactBrowseItems(artifacts, getIndex, excludedKeys) {
	const items = [];
	for (const artifact of artifacts) {
		const item = buildArtifactWorkflowItem(artifact, getIndex(artifact.id), true, excludedKeys);
		if (excludedKeys?.has(item.key) && !item.hasChildren) continue;
		items.push(item);
		if (items.length === 10) break;
	}
	return items;
}
function buildArtifactSearchItems(artifacts, getIndex, excludedKeys) {
	const items = [];
	for (const artifact of artifacts) {
		const index = getIndex(artifact.id);
		const workflowItem = buildArtifactWorkflowItem(artifact, index, false);
		if (!excludedKeys?.has(workflowItem.key)) items.push(workflowItem);
		if (!index) continue;
		for (const group of index.groups) {
			const item = buildGroupMentionItem(index, group.id, false);
			if (item && !excludedKeys?.has(item.key)) items.push(item);
		}
		for (const node of index.nodes) {
			const item = buildNodeMentionItem(index, node.id, index.nodeIdToGroupId.get(node.id));
			if (item && !excludedKeys?.has(item.key)) items.push(item);
		}
	}
	return items;
}
//#endregion
//#region src/features/ai/assistant-at-mentions/utils/searchMentionItems.ts
var MATCH_RANK = {
	exact: 0,
	prefix: 1,
	tokenPrefix: 2,
	substring: 3,
	description: 4
};
var TOKEN_SEPARATOR = /[^\p{L}\p{N}]+/u;
function getMatchRank(item, normalizedQuery) {
	const normalizedName = item.label.trim().toLocaleLowerCase();
	if (normalizedName === normalizedQuery) return MATCH_RANK.exact;
	if (normalizedName.startsWith(normalizedQuery)) return MATCH_RANK.prefix;
	if (normalizedName.split(TOKEN_SEPARATOR).filter(Boolean).some((token) => token.startsWith(normalizedQuery))) return MATCH_RANK.tokenPrefix;
	if (normalizedName.includes(normalizedQuery)) return MATCH_RANK.substring;
	if (item.description?.toLocaleLowerCase().includes(normalizedQuery)) return MATCH_RANK.description;
}
function searchMentionItems(items, query, limit) {
	const normalizedQuery = query.trim().toLocaleLowerCase();
	if (normalizedQuery === "" || limit <= 0) return [];
	const ranked = items.flatMap((item) => {
		const rank = getMatchRank(item, normalizedQuery);
		return rank === void 0 ? [] : [{
			item,
			rank
		}];
	}).sort((left, right) => left.rank - right.rank);
	const bestItemByKey = /* @__PURE__ */ new Map();
	for (const { item } of ranked) if (!bestItemByKey.has(item.key)) bestItemByKey.set(item.key, item);
	return [...bestItemByKey.values()].slice(0, limit);
}
//#endregion
//#region src/features/ai/assistant-at-mentions/composables/useAssistantMentionSources.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
var MAX_WORKFLOW_BROWSE_CANDIDATES = 50;
function createArtifactMentionSourceProvider(options) {
	return {
		id: "artifacts",
		revision: options.artifactIndex.revision,
		async browse() {
			return buildArtifactBrowseItems(toValue(options.artifacts), options.artifactIndex.getIndex, options.excludedKeys ? toValue(options.excludedKeys) : void 0);
		},
		async search(query) {
			await options.artifactIndex.loadAll();
			return searchMentionItems(buildArtifactSearchItems(toValue(options.artifacts), options.artifactIndex.getIndex, options.excludedKeys ? toValue(options.excludedKeys) : void 0), query, 10);
		}
	};
}
function createWorkflowMentionSourceProvider(options) {
	const recentWorkflowsStore = useRecentWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	function toMentionItems(workflows) {
		return workflows.slice(0, 10).map((workflow) => buildWorkflowMentionItem(workflow, "workflows"));
	}
	/**
	* Recently opened workflows of the project, without the excluded ones. A failed
	* lookup yields no workflows instead of an error, so the project backfill can
	* still fill the section.
	*/
	async function resolveRecentWorkflows(projectId, excludedWorkflowIds) {
		try {
			return await recentWorkflowsStore.resolveRecentWorkflows(projectId, excludedWorkflowIds);
		} catch {
			return [];
		}
	}
	/** The most recently updated workflows of the project that are not excluded. */
	async function backfillProjectWorkflows(projectId, excludedIds) {
		return (await workflowsListStore.searchWorkflows({
			projectId,
			isArchived: false,
			select: [
				"id",
				"name",
				"updatedAt"
			],
			options: {
				take: Math.min(10 + excludedIds.size, MAX_WORKFLOW_BROWSE_CANDIDATES),
				skip: 0,
				sortBy: "updatedAt:desc",
				includeScopes: false
			}
		})).filter(({ id }) => !excludedIds.has(id));
	}
	return {
		id: "workflows",
		async browse() {
			const projectId = toValue(options.projectId)?.trim();
			if (!projectId) return [];
			const artifactWorkflowIds = toValue(options.artifactWorkflowIds);
			const excludedWorkflowIds = options.excludedWorkflowIds ? toValue(options.excludedWorkflowIds) : [];
			const recentWorkflows = await resolveRecentWorkflows(projectId, [...artifactWorkflowIds, ...excludedWorkflowIds]);
			if (recentWorkflows.length >= 10) return toMentionItems(recentWorkflows);
			const excludedIds = /* @__PURE__ */ new Set([
				...artifactWorkflowIds,
				...excludedWorkflowIds,
				...recentWorkflows.map(({ id }) => id)
			]);
			try {
				const backfillWorkflows = await backfillProjectWorkflows(projectId, excludedIds);
				return toMentionItems([...recentWorkflows, ...backfillWorkflows]);
			} catch (error) {
				if (recentWorkflows.length === 0) throw error;
				return toMentionItems(recentWorkflows);
			}
		},
		async search(query) {
			const projectId = toValue(options.projectId)?.trim();
			const normalizedQuery = query.trim();
			if (!projectId || !normalizedQuery) return [];
			const excludedWorkflowIds = new Set(options.excludedWorkflowIds ? toValue(options.excludedWorkflowIds) : []);
			return toMentionItems((await workflowsListStore.searchWorkflows({
				projectId,
				query: normalizedQuery,
				isArchived: false,
				select: [
					"id",
					"name",
					"description",
					"updatedAt"
				],
				options: {
					take: Math.min(10 + excludedWorkflowIds.size, MAX_WORKFLOW_BROWSE_CANDIDATES),
					skip: 0,
					sortBy: "updatedAt:desc",
					includeScopes: false
				}
			})).filter(({ id }) => !excludedWorkflowIds.has(id)));
		}
	};
}
function useAssistantMentionSources(providers, options = {}) {
	const browseSections = shallowRef([]);
	const searchResults = shallowRef([]);
	const providerErrors = shallowRef(/* @__PURE__ */ new Map());
	const isBrowsing = ref(false);
	const isSearching = ref(false);
	const browseItemsByProvider = /* @__PURE__ */ new Map();
	const searchItemsByProvider = /* @__PURE__ */ new Map();
	const providerRequestGenerations = /* @__PURE__ */ new Map();
	let latestRequestGeneration = 0;
	let currentQuery = "";
	let currentMode;
	let disposed = false;
	function updateBrowseSections() {
		const excludedKeys = options.excludedKeys ? toValue(options.excludedKeys) : void 0;
		browseSections.value = providers.map((provider) => ({
			id: provider.id,
			items: (browseItemsByProvider.get(provider.id) ?? []).filter((item) => !excludedKeys?.has(item.key) || item.hasChildren).slice(0, 10)
		}));
	}
	function updateSearchResults(query) {
		const excludedKeys = options.excludedKeys ? toValue(options.excludedKeys) : void 0;
		searchResults.value = searchMentionItems(providers.flatMap((provider) => searchItemsByProvider.get(provider.id) ?? []).filter((item) => !excludedKeys?.has(item.key)), query, 10);
	}
	function clearSearchResults() {
		latestRequestGeneration++;
		currentQuery = "";
		currentMode = void 0;
		isBrowsing.value = false;
		isSearching.value = false;
		searchItemsByProvider.clear();
		searchResults.value = [];
	}
	function clearProviderError(providerId) {
		if (!providerErrors.value.has(providerId)) return;
		const nextErrors = new Map(providerErrors.value);
		nextErrors.delete(providerId);
		providerErrors.value = nextErrors;
	}
	function setProviderError(providerId, error) {
		providerErrors.value = new Map(providerErrors.value).set(providerId, error);
	}
	function nextProviderRequestGeneration(providerId) {
		const generation = (providerRequestGenerations.get(providerId) ?? 0) + 1;
		providerRequestGenerations.set(providerId, generation);
		return generation;
	}
	async function loadBrowseProvider(provider, generation) {
		const providerGeneration = nextProviderRequestGeneration(provider.id);
		try {
			const items = await provider.browse();
			if (disposed || generation !== latestRequestGeneration || providerGeneration !== providerRequestGenerations.get(provider.id)) return;
			browseItemsByProvider.set(provider.id, items);
			clearProviderError(provider.id);
			updateBrowseSections();
		} catch (error) {
			if (disposed || generation !== latestRequestGeneration || providerGeneration !== providerRequestGenerations.get(provider.id)) return;
			browseItemsByProvider.set(provider.id, []);
			setProviderError(provider.id, error);
			updateBrowseSections();
		}
	}
	async function browse() {
		const generation = ++latestRequestGeneration;
		currentQuery = "";
		currentMode = "browse";
		isSearching.value = false;
		isBrowsing.value = true;
		searchResults.value = [];
		providerErrors.value = /* @__PURE__ */ new Map();
		browseItemsByProvider.clear();
		updateBrowseSections();
		await Promise.allSettled(providers.map(async (provider) => await loadBrowseProvider(provider, generation)));
		if (!disposed && generation === latestRequestGeneration) isBrowsing.value = false;
	}
	async function loadSearchProvider(provider, query, generation) {
		const providerGeneration = nextProviderRequestGeneration(provider.id);
		try {
			const items = await provider.search(query);
			if (disposed || generation !== latestRequestGeneration || query !== currentQuery || providerGeneration !== providerRequestGenerations.get(provider.id)) return;
			searchItemsByProvider.set(provider.id, items);
			clearProviderError(provider.id);
			updateSearchResults(query);
		} catch (error) {
			if (disposed || generation !== latestRequestGeneration || query !== currentQuery || providerGeneration !== providerRequestGenerations.get(provider.id)) return;
			searchItemsByProvider.set(provider.id, []);
			setProviderError(provider.id, error);
			updateSearchResults(query);
		}
	}
	async function search(query) {
		const generation = ++latestRequestGeneration;
		const normalizedQuery = query.trim();
		currentQuery = normalizedQuery;
		currentMode = normalizedQuery ? "search" : void 0;
		isBrowsing.value = false;
		providerErrors.value = /* @__PURE__ */ new Map();
		searchItemsByProvider.clear();
		searchResults.value = [];
		if (!normalizedQuery) {
			isSearching.value = false;
			return;
		}
		isSearching.value = true;
		await Promise.allSettled(providers.map(async (provider) => await loadSearchProvider(provider, normalizedQuery, generation)));
		if (!disposed && generation === latestRequestGeneration) isSearching.value = false;
	}
	for (const provider of providers) {
		if (!provider.revision) continue;
		watch(provider.revision, () => {
			if (disposed) return;
			if (currentMode === "search" && currentQuery) loadSearchProvider(provider, currentQuery, latestRequestGeneration);
			else if (currentMode === "browse") loadBrowseProvider(provider, latestRequestGeneration);
		});
	}
	function dispose() {
		disposed = true;
		latestRequestGeneration++;
	}
	onScopeDispose(dispose);
	return {
		browseSections,
		searchResults,
		providerErrors,
		isBrowsing,
		isSearching,
		browse,
		search,
		clearSearchResults,
		dispose
	};
}
//#endregion
//#region src/features/ai/assistant-at-mentions/utils/buildMentionAttachment.ts
function buildMentionAttachment(item, index) {
	if (item.kind === "workflow") return {
		item,
		attachment: {
			type: "workflow",
			id: item.workflowId,
			name: item.workflowName
		},
		truncated: false
	};
	if (item.kind === "node") return {
		item,
		attachment: {
			type: "nodes",
			workflowId: item.workflowId,
			workflowName: item.workflowName,
			sets: [{ nodes: [{
				id: item.entityId,
				name: item.label
			}] }]
		},
		truncated: false
	};
	const group = index?.groupsById.get(item.entityId);
	if (!group || !index) return void 0;
	const groupNodes = group.nodeIds.map((nodeId) => index.nodesById.get(nodeId)).filter((node) => node !== void 0);
	const nodes = groupNodes.slice(0, 50).map(({ id, name }) => ({
		id,
		name
	}));
	if (nodes.length === 0) return void 0;
	return {
		item,
		attachment: {
			type: "nodes",
			workflowId: item.workflowId,
			workflowName: item.workflowName,
			sets: [{
				nodes,
				canvasGroupId: group.id,
				canvasGroupName: group.name
			}]
		},
		truncated: groupNodes.length > 50
	};
}
//#endregion
//#region src/features/ai/assistant-at-mentions/AssistantAtMentionPicker.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var RETRY_ITEM_PREFIX = "retry:";
var RETRY_SOURCES_ITEM_ID = "retry-sources";
var ERROR_ITEM_PREFIX = "error:";
var LOADING_ITEM_PREFIX = "loading:";
var AssistantAtMentionPicker_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AssistantAtMentionPicker",
	props: {
		modelValue: { type: Boolean },
		query: {},
		projectId: { default: void 0 },
		artifacts: { default: () => [] },
		activeWorkflowId: { default: void 0 },
		excludedKeys: { default: () => [] },
		excludedWorkflowIds: { default: () => [] },
		inputElement: { default: null },
		reference: { default: null },
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update:modelValue",
		"select",
		"empty-search"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const dropdownRef = ref();
		const referenceElement = computed(() => props.reference);
		const { width: referenceWidth } = useElementSize(referenceElement);
		const menuWidth = computed(() => referenceWidth.value > 0 ? `${referenceWidth.value}px` : void 0);
		const excludedKeys = computed(() => new Set(props.excludedKeys));
		const artifactIndex = useArtifactMentionIndex({
			artifacts: () => props.artifacts,
			activeWorkflowId: () => props.activeWorkflowId
		});
		const sources = useAssistantMentionSources([createArtifactMentionSourceProvider({
			artifacts: () => props.artifacts,
			artifactIndex,
			excludedKeys
		}), createWorkflowMentionSourceProvider({
			projectId: () => props.projectId,
			artifactWorkflowIds: () => props.artifacts.map(({ id }) => id),
			excludedWorkflowIds: () => props.excludedWorkflowIds
		})], { excludedKeys });
		const searchPending = ref(false);
		let highlightedForCurrentOpen = false;
		let submenuOpenCount = 0;
		function isMenuItem(item) {
			return item !== void 0;
		}
		function toMenuItem(item, searchMode) {
			const indexEntry = artifactIndex.getEntry(item.workflowId);
			const isExcluded = excludedKeys.value.has(item.key);
			let children = item.children?.map((child) => toMenuItem(child, false)).filter(isMenuItem);
			if (isExcluded && children?.length === 0) return void 0;
			if (isExcluded && !item.hasChildren) return void 0;
			if (item.hasChildren && !children) children = indexEntry?.status === "error" ? [{
				id: `${ERROR_ITEM_PREFIX}${item.workflowId}`,
				label: i18n.baseText("instanceAi.mentions.loadError"),
				disabled: true
			}, {
				id: `${RETRY_ITEM_PREFIX}${item.workflowId}`,
				label: i18n.baseText("generic.retry"),
				keepOpen: true
			}] : [{
				id: `${LOADING_ITEM_PREFIX}${item.workflowId}`,
				label: i18n.baseText("instanceAi.mentions.loadingWorkflowContents"),
				disabled: true
			}];
			return {
				id: item.key,
				label: searchMode ? item.breadcrumbs.join(" > ") : item.label,
				data: {
					item,
					...item.kind === "node" && item.nodeTypeName ? { nodeType: nodeTypesStore.getNodeType(item.nodeTypeName, item.nodeTypeVersion) } : {}
				},
				selectable: item.hasChildren && !isExcluded ? true : void 0,
				children
			};
		}
		const menuItems = computed(() => {
			if (props.query.trim()) return sources.searchResults.value.map((item) => toMenuItem(item, true)).filter(isMenuItem);
			const sections = sources.browseSections.value.map((section) => ({
				...section,
				hadItems: section.items.length > 0,
				items: section.items.map((item) => toMenuItem(item, false)).filter(isMenuItem)
			}));
			if (!sections.some((section) => section.items.length > 0) && sources.providerErrors.value.size > 0) return [];
			return sections.flatMap((section) => {
				if (section.items.length === 0) {
					if (!(section.id === "workflows" && !section.hadItems && !sources.isBrowsing.value && sources.providerErrors.value.has("workflows"))) return [];
					return [
						{
							id: "section:workflows",
							label: i18n.baseText("instanceAi.mentions.workflowsSection"),
							header: true
						},
						{
							id: "state:workflows-error",
							label: i18n.baseText("instanceAi.mentions.loadError"),
							disabled: true
						},
						{
							id: RETRY_SOURCES_ITEM_ID,
							label: i18n.baseText("generic.retry"),
							keepOpen: true
						}
					];
				}
				return [{
					id: `section:${section.id}`,
					label: i18n.baseText(section.id === "artifacts" ? "instanceAi.mentions.artifactsSection" : "instanceAi.mentions.workflowsSection"),
					header: true
				}, ...section.items];
			});
		});
		const isLoading = computed(() => (props.query.trim() ? sources.searchResults.value.length === 0 : !sources.browseSections.value.some((section) => section.items.length > 0)) && (searchPending.value || sources.isBrowsing.value || sources.isSearching.value));
		const emptyText = computed(() => i18n.baseText(props.query.trim() ? "instanceAi.mentions.noResults" : "instanceAi.mentions.noRecentWorkflows"));
		function getResultPosition(itemId) {
			function find(items) {
				let position = 0;
				for (const item of items) {
					if (item.header) {
						position = 0;
						continue;
					}
					if (item.data) position++;
					if (item.id === itemId && item.data) return position;
					const childPosition = item.children ? find(item.children) : void 0;
					if (childPosition !== void 0) return childPosition;
				}
			}
			return find(menuItems.value);
		}
		const itemsById = computed(() => {
			const items = /* @__PURE__ */ new Map();
			const visit = (menuItemsToVisit) => {
				for (const menuItem of menuItemsToVisit) {
					if (menuItem.data) items.set(menuItem.id, menuItem.data.item);
					if (menuItem.children) visit(menuItem.children);
				}
			};
			visit(menuItems.value);
			return items;
		});
		const runSearch = useDebounceFn(async (query) => {
			if (!props.modelValue || query !== props.query.trim()) return;
			try {
				await sources.search(query);
			} finally {
				if (query === props.query.trim()) searchPending.value = false;
			}
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		watch(() => props.modelValue, (open) => {
			if (open) Promise.resolve(nodeTypesStore.loadNodeTypesIfNotLoaded()).catch(() => void 0);
		}, { immediate: true });
		watch([() => props.modelValue, () => props.query], ([open, query]) => {
			if (!open) {
				searchPending.value = false;
				return;
			}
			highlightedForCurrentOpen = false;
			const normalizedQuery = query.trim();
			if (normalizedQuery) {
				searchPending.value = true;
				sources.clearSearchResults();
				runSearch(normalizedQuery);
			} else {
				searchPending.value = false;
				sources.browse();
				artifactIndex.loadAll();
			}
		}, { immediate: true });
		watch(() => props.modelValue, (open) => {
			highlightedForCurrentOpen = false;
			if (open) submenuOpenCount = 0;
			if (open && menuItems.value.length > 0) {
				highlightedForCurrentOpen = true;
				nextTick(() => dropdownRef.value?.highlightFirstItem());
			}
		});
		const isEmptySearchShown = computed(() => props.modelValue && props.query.trim().length > 0 && !isLoading.value && menuItems.value.length === 0 && sources.providerErrors.value.size === 0);
		const reportedEmptyQueries = /* @__PURE__ */ new Set();
		let pendingEmptyQuery;
		let emptySearchTimer;
		function reportEmptySearch(query) {
			if (reportedEmptyQueries.has(query)) return;
			reportedEmptyQueries.add(query);
			emit("empty-search", query);
		}
		function clearPendingEmptySearch() {
			if (emptySearchTimer !== void 0) clearTimeout(emptySearchTimer);
			emptySearchTimer = void 0;
			pendingEmptyQuery = void 0;
		}
		/** Report an empty state the user is leaving before it settled: they still saw it. */
		function flushEmptySearch() {
			if (pendingEmptyQuery !== void 0) reportEmptySearch(pendingEmptyQuery);
			clearPendingEmptySearch();
		}
		watch([
			() => props.modelValue,
			isEmptySearchShown,
			() => props.query.trim()
		], ([open, shown, query]) => {
			if (!open) {
				flushEmptySearch();
				reportedEmptyQueries.clear();
				return;
			}
			clearPendingEmptySearch();
			if (!shown) return;
			pendingEmptyQuery = query;
			emptySearchTimer = setTimeout(() => {
				emptySearchTimer = void 0;
				pendingEmptyQuery = void 0;
				reportEmptySearch(query);
			}, getDebounceTime(DEBOUNCE_TIME.TELEMETRY.TRACK));
		});
		onBeforeUnmount(flushEmptySearch);
		watch(menuItems, (items) => {
			if (!props.modelValue || highlightedForCurrentOpen || items.length === 0) return;
			highlightedForCurrentOpen = true;
			nextTick(() => dropdownRef.value?.highlightFirstItem());
		});
		function handleSelect(itemId) {
			if (itemId === RETRY_SOURCES_ITEM_ID) {
				retrySources();
				return;
			}
			if (itemId.startsWith(RETRY_ITEM_PREFIX)) {
				artifactIndex.retry(itemId.slice(6));
				return;
			}
			const item = itemsById.value.get(itemId);
			if (!item) return;
			const selection = buildMentionAttachment(item, artifactIndex.getIndex(item.workflowId));
			if (selection) {
				const resultPosition = getResultPosition(itemId);
				emit("select", {
					...selection,
					...resultPosition !== void 0 ? { telemetry: {
						mode: props.query.trim() ? "search" : "browse",
						resultPosition,
						queryLength: props.query.trim().length
					} } : {}
				});
			}
		}
		function retrySources() {
			if (props.query.trim()) sources.search(props.query);
			else sources.browse();
		}
		function handleSubmenuToggle(itemId, open) {
			if (!open) return;
			submenuOpenCount++;
			const item = itemsById.value.get(itemId);
			if (!item || item.kind !== "workflow") return;
			if (artifactIndex.getEntry(item.workflowId)?.status === "error") artifactIndex.retry(item.workflowId);
			else artifactIndex.load(item.workflowId);
		}
		function handleExternalKeydown(event) {
			return dropdownRef.value?.handleExternalKeydown(event) ?? false;
		}
		/**
		* Snapshot of the list for the dismissal telemetry. Read synchronously while the
		* host closes the menu, so it still sees the query and rows the user looked at.
		* Rows sharing a visible label are what the user could not tell apart.
		*/
		function getOpenMetrics() {
			const rows = menuItems.value.filter((item) => item.data !== void 0);
			const labelCounts = /* @__PURE__ */ new Map();
			for (const row of rows) labelCounts.set(row.label, (labelCounts.get(row.label) ?? 0) + 1);
			const query = props.query.trim();
			return {
				mode: query ? "search" : "browse",
				queryLength: query.length,
				resultCount: rows.length,
				ambiguousResultCount: rows.filter((row) => (labelCounts.get(row.label) ?? 0) > 1).length,
				submenuOpenCount
			};
		}
		__expose({
			handleExternalKeydown,
			getOpenMetrics,
			flushEmptySearch
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				"model-value": __props.modelValue,
				items: menuItems.value,
				"external-focus-target": __props.inputElement,
				reference: __props.reference ?? void 0,
				width: menuWidth.value,
				"extra-popper-class": _ctx.$style.menuContent,
				disabled: __props.disabled,
				loading: isLoading.value,
				"loading-item-count": 10,
				"empty-text": emptyText.value,
				"search-placeholder": unref(i18n).baseText("instanceAi.mentions.searchPlaceholder"),
				placement: "top-start",
				searchable: "",
				"search-mode": "external",
				"data-test-id": "instance-ai-mention-menu",
				"content-test-id": "instance-ai-mention-menu-content",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
				onSelect: handleSelect,
				"onSubmenu:toggle": handleSubmenuToggle
			}, createSlots({
				trigger: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					"as-child": "",
					content: unref(i18n).baseText("instanceAi.mentions.buttonLabel"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "at-sign",
						variant: "ghost",
						size: "medium",
						disabled: __props.disabled,
						title: unref(i18n).baseText("instanceAi.mentions.buttonLabel"),
						"aria-label": unref(i18n).baseText("instanceAi.mentions.buttonLabel"),
						"data-test-id": "instance-ai-mention-button"
					}, null, 8, [
						"disabled",
						"title",
						"aria-label"
					])]),
					_: 1
				}, 8, ["content"])]),
				"item-leading": withCtx(({ item, ui }) => [item.data?.item.kind === "workflow" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "workflow",
					size: "large",
					class: normalizeClass(ui.class)
				}, null, 8, ["class"])) : item.data?.item.kind === "group" ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "group",
					size: "large",
					class: normalizeClass(ui.class)
				}, null, 8, ["class"])) : item.data?.item.kind === "node" ? (openBlock(), createBlock(NodeIcon_default, {
					key: 2,
					"node-type": item.data.nodeType,
					size: 16,
					class: normalizeClass(ui.class)
				}, null, 8, ["node-type", "class"])) : createCommentVNode("", true)]),
				"item-label": withCtx(({ item, ui }) => [createVNode(unref(N8nText_default), {
					class: normalizeClass(ui.class),
					title: item.label,
					size: "medium",
					color: item.disabled ? "text-xlight" : "text-dark"
				}, {
					default: withCtx(() => [__props.query.trim() && item.data?.item ? (openBlock(), createBlock(AssistantMentionBreadcrumbs_default, {
						key: 0,
						segments: item.data.item.breadcrumbs
					}, null, 8, ["segments"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(item.label), 1)], 64))]),
					_: 2
				}, 1032, [
					"class",
					"title",
					"color"
				])]),
				"item-trailing": withCtx(({ item, ui }) => [item.data?.item.hasChildren && item.data.item.nodeCount !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(ui.class),
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.data.item.nodeCount), 1)]),
					_: 2
				}, 1032, ["class"])) : createCommentVNode("", true)]),
				_: 2
			}, [unref(sources).providerErrors.value.size > 0 ? {
				name: "empty",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorState) }, [createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.mentions.loadError")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					size: "small",
					variant: "outline",
					onClick: retrySources
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				})], 2)]),
				key: "0"
			} : void 0, __props.query.trim() && menuItems.value.length > 0 && unref(sources).providerErrors.value.size > 0 ? {
				name: "footer",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorState) }, [createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.mentions.loadError")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					size: "small",
					variant: "outline",
					onClick: retrySources
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				})], 2)]),
				key: "1"
			} : void 0]), 1032, [
				"model-value",
				"items",
				"external-focus-target",
				"reference",
				"width",
				"extra-popper-class",
				"disabled",
				"loading",
				"empty-text",
				"search-placeholder"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	menuContent: "_menuContent_ja9kp_1",
	errorState: "_errorState_ja9kp_5"
} }]]);
//#endregion
//#region src/features/ai/assistant-at-mentions/composables/useAssistantAtMentions.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/**
* Characters that open the mention picker when typed. Japanese IMEs, and CJK
* IMEs in full-width mode, emit the fullwidth `＠` (U+FF20) for the `@` key.
*/
var MENTION_TRIGGER_CHARACTERS = /* @__PURE__ */ new Set(["@", "＠"]);
function isMentionTrigger(character) {
	return character !== void 0 && MENTION_TRIGGER_CHARACTERS.has(character);
}
function findLastMentionTriggerIndex(text) {
	for (let index = text.length - 1; index >= 0; index--) if (isMentionTrigger(text[index])) return index;
	return -1;
}
function useAssistantAtMentions(options) {
	const menuOpen = ref(false);
	const query = ref("");
	const activeRange = ref();
	const savedSelection = ref({
		start: 0,
		end: 0
	});
	const dismissedTypedTriggerIndex = ref();
	let updatingTextInternally = false;
	let openSource;
	function updateText(value) {
		updatingTextInternally = true;
		options.text.value = value;
		updatingTextInternally = false;
	}
	function markOpened(source) {
		if (openSource !== void 0) return;
		openSource = source;
		menuOpen.value = true;
		options.onOpened?.(source);
	}
	function close(rememberTypedTrigger = false, reason = "closed_menu") {
		const range = activeRange.value;
		if (rememberTypedTrigger && range?.origin === "typed") dismissedTypedTriggerIndex.value = range.start;
		if (range) options.onClosed?.({
			source: openSource ?? range.origin,
			reason
		});
		openSource = void 0;
		menuOpen.value = false;
		query.value = "";
		activeRange.value = void 0;
	}
	function saveSelection() {
		const input = options.getInputElement();
		if (!input) return;
		savedSelection.value = {
			start: input.selectionStart,
			end: input.selectionEnd
		};
	}
	function openTypedRange(triggerIndex, caret, initialQuery = "") {
		activeRange.value = {
			origin: "typed",
			start: triggerIndex,
			queryStart: triggerIndex + 1,
			end: caret
		};
		dismissedTypedTriggerIndex.value = void 0;
		query.value = initialQuery;
		markOpened("typed");
	}
	function openFromButton() {
		if (!toValue(options.enabled)) return;
		saveSelection();
		activeRange.value = {
			origin: "button",
			start: savedSelection.value.start,
			queryStart: savedSelection.value.start,
			end: savedSelection.value.end
		};
		query.value = "";
		markOpened("button");
	}
	async function handleTextChange(value, caretOverride) {
		updateText(value);
		if (dismissedTypedTriggerIndex.value !== void 0 && !isMentionTrigger(value[dismissedTypedTriggerIndex.value])) dismissedTypedTriggerIndex.value = void 0;
		if (!toValue(options.enabled)) {
			close(false, "unavailable");
			return;
		}
		await nextTick();
		const input = options.getInputElement();
		const caret = caretOverride ?? input?.selectionEnd ?? value.length;
		savedSelection.value = {
			start: caret,
			end: caret
		};
		const valueBeforeCaret = value.slice(0, caret);
		const possibleTriggerIndex = findLastMentionTriggerIndex(valueBeforeCaret);
		const triggerIndex = possibleTriggerIndex === 0 || /\s/.test(valueBeforeCaret[possibleTriggerIndex - 1] ?? "") ? possibleTriggerIndex : -1;
		const range = activeRange.value;
		if (triggerIndex >= 0 && (!range || range.origin !== "typed" || range.start !== triggerIndex)) {
			if (dismissedTypedTriggerIndex.value === triggerIndex && !range) return;
			openTypedRange(triggerIndex, caret, value.slice(triggerIndex + 1, caret));
			return;
		}
		if (range) {
			const triggerExists = range.origin === "button" || isMentionTrigger(value[range.start]);
			const beforeRange = range.origin === "typed" ? caret <= range.start : caret < range.start;
			if (!triggerExists) {
				close(false, "deleted_trigger");
				return;
			}
			if (beforeRange) {
				close(false, "moved_caret");
				return;
			}
			range.end = caret;
			query.value = value.slice(range.queryStart, caret);
			return;
		}
	}
	async function handleCaretMove() {
		await nextTick();
		saveSelection();
		const range = activeRange.value;
		if (!range) return;
		const selection = savedSelection.value;
		if ((range.origin === "typed" ? selection.start <= range.start : selection.start < range.start) || selection.start > range.end || selection.end > range.end) close(false, "moved_caret");
	}
	async function replaceActiveRange(label) {
		const range = activeRange.value;
		const start = range?.start ?? savedSelection.value.start;
		const end = range?.end ?? savedSelection.value.end;
		const insertedText = `"${label}"`;
		updateText(options.text.value.slice(0, start) + insertedText + options.text.value.slice(end));
		close(false, "selected");
		await nextTick();
		const caret = start + insertedText.length;
		const input = options.getInputElement();
		input?.focus({ preventScroll: true });
		input?.setSelectionRange(caret, caret);
		savedSelection.value = {
			start: caret,
			end: caret
		};
	}
	/**
	* Dismissing the menu right after typing `@` would leave a stray trigger in the
	* draft. Remove it, along with any whitespace typed after it, and put the caret
	* back where it was. Returns false when there is nothing to remove: a button
	* range, a query after the trigger, or a trigger the text no longer holds.
	*/
	function removeEmptyTypedTrigger() {
		const range = activeRange.value;
		const text = options.text.value;
		if (!range || range.origin !== "typed" || !isMentionTrigger(text[range.start]) || text.slice(range.queryStart, range.end).trim() !== "") return false;
		updateText(text.slice(0, range.start) + text.slice(range.end));
		close();
		nextTick(() => {
			const input = options.getInputElement();
			if (input && document.activeElement === input) input.setSelectionRange(range.start, range.start);
			savedSelection.value = {
				start: range.start,
				end: range.start
			};
		});
		return true;
	}
	function handleMenuOpenChange(open) {
		if (!open) {
			if (!removeEmptyTypedTrigger()) close(true);
			return;
		}
		if (!activeRange.value) openFromButton();
	}
	watch(() => toValue(options.enabled), (enabled) => {
		if (!enabled) close(false, "unavailable");
	});
	watch(options.text, () => {
		if (!updatingTextInternally) dismissedTypedTriggerIndex.value = void 0;
	}, { flush: "sync" });
	return {
		menuOpen,
		query,
		saveSelection,
		openFromButton,
		handleTextChange,
		handleCaretMove,
		handleMenuOpenChange,
		replaceActiveRange,
		close
	};
}
//#endregion
//#region src/features/ai/assistant-at-mentions/composables/useAssistantMentionAttachments.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
function useAssistantMentionAttachments(options) {
	let referenceSequence = 0;
	const selectedRecords = /* @__PURE__ */ new Map();
	const ownedRecords = /* @__PURE__ */ new Map();
	function addReference(item) {
		const record = {
			item,
			referenceId: `${item.key}:${++referenceSequence}`
		};
		selectedRecords.set(item.key, record);
		ownedRecords.set(record.referenceId, record);
		options.onReferenceAdded({
			referenceId: record.referenceId,
			workflowId: item.workflowId,
			workflowName: item.workflowName
		});
		return record;
	}
	function releaseReference(record) {
		if (!ownedRecords.delete(record.referenceId)) return;
		options.onReferenceRemoved(record.referenceId);
	}
	function setMatchesMention(set, item) {
		if (item.kind === "node") return set.nodes.length === 1 && set.nodes[0]?.id === item.entityId;
		return item.kind === "group" && set.canvasGroupId === item.entityId;
	}
	function attachmentContainsMention(item) {
		if (item.kind === "workflow") return options.resources.value.some((attachment) => attachment.type === "workflow" && attachment.id === item.workflowId);
		return options.resources.value.some((attachment) => attachment.type === "nodes" && attachment.workflowId === item.workflowId && attachment.sets.some((set) => setMatchesMention(set, item)));
	}
	function reconcileSelectedRecords() {
		for (const [mentionKey, record] of selectedRecords) {
			if (attachmentContainsMention(record.item)) continue;
			selectedRecords.delete(mentionKey);
			options.onMentionRemoved?.(record.item.kind);
			releaseReference(record);
		}
	}
	function attachmentAddsResource(attachment) {
		if (attachment.type === "workflow") return !options.resources.value.some((current) => current.type === "workflow" && current.id === attachment.id);
		if (attachment.type === "nodes") return !options.resources.value.some((current) => current.type === "nodes" && current.workflowId === attachment.workflowId);
		return true;
	}
	function addAttachment(attachment) {
		if (attachment.type === "workflow") {
			if (options.resources.value.some((current) => current.type === "workflow" && current.id === attachment.id)) return;
			options.resources.value = [...options.resources.value, attachment];
			return;
		}
		if (attachment.type === "nodes") {
			const index = options.resources.value.findIndex((current) => current.type === "nodes" && current.workflowId === attachment.workflowId);
			if (index !== -1) {
				const current = options.resources.value[index];
				if (current.type !== "nodes") return;
				options.resources.value[index] = {
					...current,
					workflowName: attachment.workflowName ?? current.workflowName,
					sets: mergeNodeSets(current.sets, attachment.sets)
				};
				return;
			}
		}
		options.resources.value = [...options.resources.value, attachment];
	}
	function select(selection) {
		if (selectedRecords.has(selection.item.key)) return {
			status: "duplicate",
			truncated: false
		};
		if (attachmentAddsResource(selection.attachment) && options.files.value.length + options.resources.value.length + toValue(options.reservedAttachmentCount) >= 10) return {
			status: "limit",
			truncated: false
		};
		addAttachment(selection.attachment);
		if (!attachmentContainsMention(selection.item)) return {
			status: "limit",
			truncated: false
		};
		addReference(selection.item);
		return {
			status: "added",
			truncated: selection.truncated
		};
	}
	function updateResource(index, attachment) {
		options.resources.value[index] = attachment;
		reconcileSelectedRecords();
	}
	function removeResource(index) {
		options.resources.value = options.resources.value.filter((_, itemIndex) => itemIndex !== index);
		reconcileSelectedRecords();
	}
	function clearForProjectChange() {
		const records = [...selectedRecords.values()];
		if (records.length === 0) return;
		const nextResources = [];
		for (const attachment of options.resources.value) {
			if (attachment.type === "workflow") {
				if (!records.some(({ item }) => item.kind === "workflow" && item.workflowId === attachment.id)) nextResources.push(attachment);
				continue;
			}
			if (attachment.type !== "nodes") {
				nextResources.push(attachment);
				continue;
			}
			const matchingRecords = records.filter(({ item }) => item.workflowId === attachment.workflowId && item.kind !== "workflow");
			const sets = attachment.sets.filter((set) => !matchingRecords.some(({ item }) => setMatchesMention(set, item)));
			if (sets.length > 0) nextResources.push({
				...attachment,
				sets
			});
		}
		options.resources.value = nextResources;
		selectedRecords.clear();
		for (const record of records) releaseReference(record);
		options.onCleared?.();
	}
	function snapshotSubmission() {
		return [...selectedRecords.values()].map(({ referenceId }) => referenceId);
	}
	function snapshotCounts() {
		const counts = { ...EMPTY_ASSISTANT_MENTION_COUNTS };
		for (const { item } of selectedRecords.values()) {
			counts[item.kind]++;
			counts.total++;
		}
		return counts;
	}
	function snapshotMentionedWorkflowIds() {
		return [...new Set([...selectedRecords.values()].map(({ item }) => item.workflowId))];
	}
	function detachSubmission(referenceIds = snapshotSubmission()) {
		const records = referenceIds.map((referenceId) => ownedRecords.get(referenceId)).filter((record) => record !== void 0);
		for (const record of records) if (selectedRecords.get(record.item.key) === record) selectedRecords.delete(record.item.key);
		let settled = false;
		return {
			accept() {
				if (settled) return;
				settled = true;
				for (const record of records) releaseReference(record);
			},
			restore() {
				if (settled) return;
				settled = true;
				for (const record of records) {
					if (selectedRecords.has(record.item.key)) {
						releaseReference(record);
						continue;
					}
					if (attachmentContainsMention(record.item)) selectedRecords.set(record.item.key, record);
					else releaseReference(record);
				}
			}
		};
	}
	watch(() => toValue(options.projectId), (projectId, previousProjectId) => {
		if (previousProjectId !== void 0 && projectId !== previousProjectId) clearForProjectChange();
	});
	onScopeDispose(() => {
		for (const record of ownedRecords.values()) releaseReference(record);
	});
	return {
		select,
		updateResource,
		removeResource,
		clearForProjectChange,
		snapshotSubmission,
		snapshotCounts,
		snapshotMentionedWorkflowIds,
		detachSubmission
	};
}
//#endregion
//#region src/features/ai/assistant-at-mentions/composables/useAssistantMentionAvailability.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useAssistantMentionAvailability(options) {
	const workflowsListStore = useWorkflowsListStore();
	const hasSavedWorkflow = ref(false);
	const isLoading = ref(false);
	let requestGeneration = 0;
	const hasArtifacts = computed(() => toValue(options.artifacts).length > 0);
	const isAvailable = computed(() => toValue(options.enabled) && (hasArtifacts.value || hasSavedWorkflow.value));
	async function refresh({ reset = false } = {}) {
		const generation = ++requestGeneration;
		const enabled = toValue(options.enabled);
		const projectId = toValue(options.projectId)?.trim();
		if (!enabled || !projectId) {
			hasSavedWorkflow.value = false;
			isLoading.value = false;
			return;
		}
		if (hasArtifacts.value) {
			hasSavedWorkflow.value = false;
			isLoading.value = false;
			return;
		}
		if (reset) hasSavedWorkflow.value = false;
		isLoading.value = true;
		try {
			const workflows = await workflowsListStore.searchWorkflows({
				projectId,
				isArchived: false,
				select: ["id", "updatedAt"],
				options: {
					take: 1,
					skip: 0,
					sortBy: "updatedAt:asc",
					includeScopes: false
				}
			});
			if (generation === requestGeneration) hasSavedWorkflow.value = workflows.length > 0;
		} catch {
			if (reset && generation === requestGeneration) hasSavedWorkflow.value = false;
		} finally {
			if (generation === requestGeneration) isLoading.value = false;
		}
	}
	watch([
		() => toValue(options.enabled),
		() => toValue(options.projectId),
		hasArtifacts
	], async () => await refresh({ reset: true }), { immediate: true });
	useEventListener(window, "focus", async () => await refresh());
	return {
		isAvailable,
		isLoading,
		refresh
	};
}
//#endregion
//#region src/features/ai/assistant-at-mentions/assistantAtMentions.telemetry.ts
init_reactivity_esm_bundler();
function useAssistantAtMentionsTelemetry(options) {
	const telemetry = useTelemetry();
	const nodeTypesStore = useNodeTypesStore();
	const threadId = () => toValue(options.threadId) ?? null;
	let openSource;
	function trackPickerOpened(source) {
		openSource = source;
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_OPENED_AI_ASSISTANT_MENTION_PICKER, {
			thread_id: threadId(),
			source
		});
	}
	function trackPickerDismissed(info, metrics) {
		if (info.reason === "selected") return;
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_DISMISSED_AI_ASSISTANT_MENTION_PICKER, {
			thread_id: threadId(),
			source: info.source,
			reason: info.reason,
			mode: metrics.mode,
			query_length: metrics.queryLength,
			result_count: metrics.resultCount,
			ambiguous_result_count: metrics.ambiguousResultCount,
			submenu_open_count: metrics.submenuOpenCount
		});
	}
	/**
	* The node type a query names outright, e.g. "slack". Search only matches
	* nodes by their instance names, so a hit here reads as the user reaching
	* for a service rather than a node they had named.
	*/
	function findNamedNodeType(query) {
		const wanted = query.toLowerCase();
		return nodeTypesStore.visibleNodeTypes.find((nodeType) => nodeType.displayName.toLowerCase() === wanted)?.name ?? null;
	}
	function trackEmptySearch(query, context) {
		if (!openSource) return;
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_SEARCHED_AI_ASSISTANT_MENTIONS_WITHOUT_RESULTS, {
			thread_id: threadId(),
			source: openSource,
			query: redactTelemetryText(query, { maxLength: 100 }),
			query_length: query.length,
			matched_node_type: findNamedNodeType(query),
			artifact_count: context.artifactCount
		});
	}
	function trackMentionSelected(selection, existingArtifact) {
		if (!selection.telemetry) return;
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_SELECTED_AI_ASSISTANT_MENTION, {
			thread_id: threadId(),
			kind: selection.item.kind,
			mode: selection.telemetry.mode,
			source: selection.item.source,
			result_position: selection.telemetry.resultPosition,
			query_length: selection.telemetry.queryLength,
			already_artifact: existingArtifact !== void 0,
			artifact_origin: existingArtifact?.origin ?? null
		});
	}
	function trackMentionRemoved(kind) {
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.USER_REMOVED_AI_ASSISTANT_MENTION, {
			thread_id: threadId(),
			kind
		});
	}
	return {
		trackPickerOpened,
		trackPickerDismissed,
		trackEmptySearch,
		trackMentionSelected,
		trackMentionRemoved
	};
}
//#endregion
//#region src/features/ai/instanceAi/instanceAiPromptSuggestions.telemetry.ts
var shownImpressionKeys = /* @__PURE__ */ new Set();
var resolveSuggestionCatalogVersion = (context) => context.suggestionCatalogVersion ?? "v1";
var createBasePayload = (context) => {
	const payload = {
		...context.telemetryPayload,
		suggestion_catalog_version: resolveSuggestionCatalogVersion(context)
	};
	if (context.threadId) payload.thread_id = context.threadId;
	return payload;
};
function createInstanceAiPromptSuggestionsTelemetry(telemetry, shownKeys = shownImpressionKeys) {
	return {
		trackSuggestionsShown(context) {
			const impressionKey = (context.threadId || "empty-state") + ":" + resolveSuggestionCatalogVersion(context);
			if (shownKeys.has(impressionKey)) return;
			shownKeys.add(impressionKey);
			telemetry.track("Instance AI prompt suggestions shown", createBasePayload(context));
		},
		trackQuickExamplesOpened(context) {
			telemetry.track("Instance AI quick examples opened", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				position: context.position
			});
		},
		trackSuggestionsCycled(context) {
			telemetry.track("Instance AI prompt suggestions cycled", {
				...context.telemetryPayload,
				suggestion_catalog_version: resolveSuggestionCatalogVersion(context),
				visible_suggestion_ids: context.visibleSuggestionIds,
				cycle_count: context.cycleCount
			});
		},
		trackSuggestionSelected(context) {
			telemetry.track("Instance AI prompt suggestion selected", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				suggestion_kind: context.suggestionKind,
				position: context.position,
				...context.suggestionTitle ? { suggestion_title: context.suggestionTitle } : {}
			});
		},
		trackSuggestionSubmitted(context) {
			telemetry.track("Instance AI prompt suggestion submitted", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				suggestion_kind: context.suggestionKind,
				position: context.position,
				prompt_modified: context.promptModified
			});
		}
	};
}
function useInstanceAiPromptSuggestionsTelemetry() {
	return createInstanceAiPromptSuggestionsTelemetry(useTelemetry());
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiInput.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var DEFAULT_AUTOSIZE_ROWS = 3;
var DEFAULT_MAX_AUTOSIZE_ROWS = 6;
/** The keyCode browsers send while an IME composes text, such as Japanese, Chinese or Korean. */
var IME_COMPOSITION_KEYCODE = 229;
var TYPEWRITER_SPEED_MS = 9;
var InstanceAiInput_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InstanceAiInput",
	props: {
		isStreaming: {
			type: Boolean,
			default: false
		},
		isSubmitting: {
			type: Boolean,
			default: false
		},
		isAwaitingConfirmation: {
			type: Boolean,
			default: false
		},
		currentThreadId: { default: "" },
		amendContext: { default: null },
		contextualSuggestion: { default: null },
		suggestions: {},
		isWorkflowBuilderAvailable: {
			type: Boolean,
			default: true
		},
		suggestionsComponent: {},
		suggestionsComponentProps: {},
		suggestionCatalogVersion: {},
		suggestionTelemetryPayload: {},
		placeholderKey: {},
		placeholder: {},
		previewPromptKey: { default: null },
		fixedRows: { default: null },
		submitLabel: { default: void 0 },
		submitActiveRequiresFocus: {
			type: Boolean,
			default: false
		},
		contextChip: { default: null },
		mentionsEnabled: {
			type: Boolean,
			default: false
		},
		mentionProjectId: { default: void 0 },
		mentionArtifacts: { default: () => [] },
		mentionActiveWorkflowId: { default: void 0 },
		reservedAttachmentCount: { default: 0 },
		isOutOfCredits: {
			type: Boolean,
			default: false
		},
		attachOnlyMimeTypes: {}
	},
	emits: [
		"submit",
		"stop",
		"dismiss-context-chip",
		"workflow-preview",
		"mention-reference-added",
		"mention-reference-removed",
		"mention-workflow-open",
		"content-change"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const SUGGESTIONS_TRANSITION_DURATION = {
			enter: 450,
			leave: 320
		};
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const promptSuggestionsTelemetry = useInstanceAiPromptSuggestionsTelemetry();
		const mentionTelemetry = useAssistantAtMentionsTelemetry({ threadId: () => props.currentThreadId || void 0 });
		const instanceAiStore = useInstanceAiStore();
		const inputText = ref("");
		const attachedFiles = ref([]);
		const attachedResources = ref([]);
		const isPreparingSubmission = ref(false);
		const chatInputRef = ref(null);
		const mentionPickerRef = ref(null);
		const composerRef = ref(null);
		const previewPrompt = ref(null);
		const selectedSuggestionDraft = ref(null);
		/**
		* What pre-filled the composer, so the submit can report who wrote the text.
		* Separate from `selectedSuggestionDraft`, which is scoped to the suggestion
		* experiment; this also covers template examples and hand-off drafts.
		*/
		const activePrefill = ref(null);
		const typedPreview = ref("");
		let typewriterTimer = null;
		function stopTypewriter() {
			if (typewriterTimer) {
				clearInterval(typewriterTimer);
				typewriterTimer = null;
			}
		}
		watch(() => props.previewPromptKey, (key) => {
			stopTypewriter();
			if (!key) {
				typedPreview.value = "";
				return;
			}
			const full = i18n.baseText(key);
			typedPreview.value = "";
			let i = 0;
			typewriterTimer = setInterval(() => {
				i += 1;
				typedPreview.value = full.slice(0, i);
				if (i >= full.length) stopTypewriter();
			}, TYPEWRITER_SPEED_MS);
		}, { immediate: true });
		onBeforeUnmount(stopTypewriter);
		function focus() {
			chatInputRef.value?.focus();
		}
		function appendText(text) {
			inputText.value += text;
			mentions.handleTextChange(inputText.value, inputText.value.length);
		}
		function setText(text) {
			mentions.close();
			inputText.value = text;
		}
		function setTextIfEmpty(text) {
			if (!inputText.value.trim()) inputText.value = text;
		}
		/**
		* Put n8n-authored text in the composer. Pre-fills must come through here
		* rather than `setText` so the submit can attribute them; `setText` and
		* friends stay for restoring a draft the user wrote.
		*/
		function setPrefill(prefill) {
			inputText.value = prefill.text;
			activePrefill.value = { ...prefill };
		}
		function clearTextIfMatches(text) {
			if (inputText.value === text) inputText.value = "";
		}
		function isDirty() {
			return inputText.value.trim().length > 0 || hasAttachments.value;
		}
		__expose({
			focus,
			appendText,
			setText,
			setPrefill,
			setTextIfEmpty,
			clearTextIfMatches,
			isDirty,
			insertSuggestion: handleSuggestionInsert,
			submitSuggestion,
			isPreparingSubmission
		});
		const isBusy = computed(() => props.isStreaming || props.isSubmitting || isPreparingSubmission.value);
		const hasNonWhitespaceDraftText = computed(() => inputText.value.trim().length > 0);
		const isInputVisuallyEmpty = computed(() => inputText.value.length === 0);
		const hasAttachments = computed(() => attachedFiles.value.length > 0 || attachedResources.value.length > 0);
		const excludedMentionContext = computed(() => {
			const keys = /* @__PURE__ */ new Set();
			const workflowIds = /* @__PURE__ */ new Set();
			if (props.contextChip?.type === "workflow-artifact") {
				keys.add(buildMentionKey("workflow", props.contextChip.workflowId, props.contextChip.workflowId));
				workflowIds.add(props.contextChip.workflowId);
			}
			for (const attachment of attachedResources.value) {
				if (attachment.type === "workflow") {
					keys.add(buildMentionKey("workflow", attachment.id, attachment.id));
					workflowIds.add(attachment.id);
					continue;
				}
				if (attachment.type !== "nodes") continue;
				for (const set of attachment.sets) {
					if (set.canvasGroupId) {
						keys.add(buildMentionKey("group", attachment.workflowId, set.canvasGroupId));
						continue;
					}
					for (const node of set.nodes) keys.add(buildMentionKey("node", attachment.workflowId, node.id));
				}
			}
			return {
				keys: [...keys],
				workflowIds: [...workflowIds]
			};
		});
		const attachedEncodedBytes = computed(() => attachedFiles.value.reduce((sum, file) => sum + base64EncodedSize(file.size), 0));
		const isComposerDirty = computed(() => hasNonWhitespaceDraftText.value || hasAttachments.value);
		watch(isComposerDirty, (hasContent) => emit("content-change", hasContent));
		const isGatedBySetup = computed(() => props.isAwaitingConfirmation || !props.isWorkflowBuilderAvailable);
		const showAttach = computed(() => props.attachOnlyMimeTypes === void 0 || props.attachOnlyMimeTypes.length > 0);
		const shouldShowMentions = computed(() => props.mentionsEnabled && Boolean(props.mentionProjectId));
		const mentionAvailability = useAssistantMentionAvailability({
			enabled: shouldShowMentions,
			projectId: () => props.mentionProjectId,
			artifacts: () => props.mentionArtifacts
		});
		const isSubmissionInFlight = computed(() => props.isSubmitting || isPreparingSubmission.value);
		const canUseMentions = computed(() => shouldShowMentions.value && mentionAvailability.isAvailable.value && !isSubmissionInFlight.value && !isGatedBySetup.value);
		const inputElement = computed(() => chatInputRef.value?.getInputElement() ?? null);
		const mentions = useAssistantAtMentions({
			text: inputText,
			enabled: canUseMentions,
			getInputElement: () => inputElement.value ?? void 0,
			onOpened: mentionTelemetry.trackPickerOpened,
			onClosed: (info) => {
				mentionPickerRef.value?.flushEmptySearch();
				const metrics = mentionPickerRef.value?.getOpenMetrics();
				if (metrics) mentionTelemetry.trackPickerDismissed(info, metrics);
			}
		});
		function handleMentionEmptySearch(query) {
			mentionTelemetry.trackEmptySearch(query, { artifactCount: props.mentionArtifacts.length });
		}
		const mentionMenuOpen = mentions.menuOpen;
		const mentionQuery = mentions.query;
		watch(canUseMentions, (enabled, wasEnabled) => {
			if (enabled && !wasEnabled) mentions.handleTextChange(inputText.value);
		});
		const mentionAttachments = useAssistantMentionAttachments({
			files: attachedFiles,
			resources: attachedResources,
			projectId: () => props.mentionProjectId,
			reservedAttachmentCount: () => props.reservedAttachmentCount,
			onReferenceAdded: (reference) => emit("mention-reference-added", reference),
			onReferenceRemoved: (referenceId) => emit("mention-reference-removed", referenceId),
			onMentionRemoved: mentionTelemetry.trackMentionRemoved,
			onCleared: () => mentions.close(false, "unavailable")
		});
		async function handleMentionSelection(selection) {
			const existingArtifact = props.mentionArtifacts.find((artifact) => artifact.id === selection.item.workflowId);
			const result = mentionAttachments.select(selection);
			if (result.status === "limit") {
				toast.showError(new Error(i18n.baseText("instanceAi.mentions.attachmentLimitMessage")), i18n.baseText("instanceAi.mentions.attachmentLimitTitle"));
				return;
			}
			mentionTelemetry.trackMentionSelected(selection, existingArtifact);
			if (result.truncated) toast.showError(new Error(i18n.baseText("instanceAi.nodeContext.truncated.message")), i18n.baseText("instanceAi.nodeContext.truncated.title"));
			emit("mention-workflow-open", selection.item.workflowId);
			await mentions.replaceActiveRange(selection.item.label);
		}
		const canSubmit = computed(() => canSubmitMessage(inputText.value.trim(), attachedFiles.value.length + attachedResources.value.length));
		const canShowSuggestions = computed(() => Boolean(props.suggestions?.length) && !isComposerDirty.value && !isBusy.value && !isGatedBySetup.value);
		const resolvedSuggestionsComponent = computed(() => props.suggestionsComponent ?? InstanceAiPromptSuggestions_default);
		const resolvedSuggestionCatalogVersion = computed(() => props.suggestionCatalogVersion ?? "v1");
		const shouldTrackVisibleSuggestions = computed(() => canShowSuggestions.value);
		const placeholder = computed(() => {
			if (!props.isWorkflowBuilderAvailable) return i18n.baseText("instanceAi.input.workflowBuilderUnavailablePlaceholder");
			if (isGatedBySetup.value) return i18n.baseText("instanceAi.input.suspendedPlaceholder");
			if (props.previewPromptKey && isInputVisuallyEmpty.value) return typedPreview.value;
			if (previewPrompt.value && isInputVisuallyEmpty.value) return previewPrompt.value;
			if (props.amendContext) return i18n.baseText("instanceAi.input.amendPlaceholder", { interpolate: { role: props.amendContext.role } });
			if (props.contextualSuggestion) return props.contextualSuggestion;
			return props.placeholder ?? i18n.baseText(props.placeholderKey ?? "instanceAi.input.placeholder");
		});
		watch([
			shouldTrackVisibleSuggestions,
			resolvedSuggestionCatalogVersion,
			() => props.currentThreadId
		], ([shouldTrackSuggestions, suggestionCatalogVersion, threadId]) => {
			if (shouldTrackSuggestions) {
				promptSuggestionsTelemetry.trackSuggestionsShown({
					threadId: threadId || void 0,
					suggestionCatalogVersion,
					telemetryPayload: props.suggestionTelemetryPayload
				});
				return;
			}
			previewPrompt.value = null;
			emit("workflow-preview", null);
		}, { immediate: true });
		watch(inputText, (text) => {
			if (text.length === 0) {
				selectedSuggestionDraft.value = null;
				activePrefill.value = null;
			}
		});
		function emitSubmittedMessage(message, attachments, restoreDraft, authorship, responseStartedAtEpochMs, acceptDraft, mentionCounts, mentionedWorkflowIds = []) {
			previewPrompt.value = null;
			emit("submit", message, attachments, restoreDraft, authorship, responseStartedAtEpochMs, acceptDraft, mentionCounts, mentionedWorkflowIds);
		}
		/**
		* The composer is the only place that knows whether the text came from a
		* pre-fill, so it resolves authorship for every send that leaves it.
		*/
		function resolveAuthorship(message, prefill) {
			if (!prefill) return USER_TYPED_MESSAGE;
			return {
				kind: "prefill",
				prefillType: prefill.prefillType,
				...prefill.prefillId ? { prefillId: prefill.prefillId } : {},
				promptModified: message !== prefill.text.trim()
			};
		}
		function resetDraftComposer() {
			inputText.value = "";
			attachedFiles.value = [];
			attachedResources.value = [];
		}
		/** The single submission gate — `canSubmit` is this predicate over the draft. */
		function canSubmitMessage(message, attachmentCount = 0) {
			if (props.isOutOfCredits) return false;
			if (isBusy.value || isGatedBySetup.value) return false;
			return message.length > 0 || attachmentCount > 0;
		}
		/**
		* Puts a submitted draft back after a refused send. Returns false when the user
		* has already typed something newer, so the caller knows the draft is gone.
		*
		* The pre-fill snapshot is restored with the text -- always after it, since an
		* empty assignment clears the pre-fill -- so retrying stays attributed to the
		* surface that wrote the draft rather than reporting as user-typed.
		*/
		function restoreSubmittedDraft(message, files, resources, prefill) {
			const restorePrefill = () => {
				activePrefill.value = prefill ? { ...prefill } : null;
			};
			if (isDirty()) {
				if (inputText.value.trim()) return false;
				inputText.value = message;
				restorePrefill();
				return true;
			}
			inputText.value = message;
			restorePrefill();
			attachedFiles.value = [...files];
			attachedResources.value = [...resources];
			return true;
		}
		/**
		* `prefill` is the snapshot its caller took when it read the message, not live
		* state: `handleSubmit` awaits file conversion in between, and the composer can
		* be edited during that await.
		*/
		function submitComposerMessage(message, attachments, prefill, responseStartedAtEpochMs = instanceAiResponseNow(), draftSnapshot) {
			if (!canSubmitMessage(message, attachments?.length ?? 0)) return;
			trackSelectedSuggestionSubmitted(message);
			const submittedFiles = draftSnapshot?.files ?? [...attachedFiles.value];
			const submittedResources = draftSnapshot?.resources ?? [...attachedResources.value];
			const mentionCounts = draftSnapshot?.mentionCounts ?? mentionAttachments.snapshotCounts();
			const mentionedWorkflowIds = draftSnapshot?.mentionedWorkflowIds ?? mentionAttachments.snapshotMentionedWorkflowIds();
			const mentionSubmission = mentionAttachments.detachSubmission(draftSnapshot?.mentionReferenceIds);
			emitSubmittedMessage(message, attachments, () => {
				const restored = restoreSubmittedDraft(message, submittedFiles, submittedResources, prefill);
				mentionSubmission.restore();
				return restored;
			}, resolveAuthorship(message, prefill), responseStartedAtEpochMs, mentionSubmission.accept, mentionCounts, mentionedWorkflowIds);
			resetDraftComposer();
		}
		function submitSuggestion(payload) {
			const prompt = getSuggestionPrompt(payload);
			selectedSuggestionDraft.value = {
				...payload,
				originalPrompt: prompt
			};
			submitComposerMessage(prompt, void 0, {
				text: prompt,
				prefillType: payload.prefillType,
				prefillId: payload.suggestionId
			});
		}
		async function handleSubmit() {
			const text = inputText.value.trim();
			const prefill = activePrefill.value;
			if (!canSubmitMessage(text, attachedFiles.value.length + attachedResources.value.length)) return;
			mentions.close();
			const responseStartedAtEpochMs = instanceAiResponseNow();
			const submittedFiles = [...attachedFiles.value];
			const submittedResources = [...attachedResources.value];
			const mentionReferenceIds = mentionAttachments.snapshotSubmission();
			const mentionCounts = mentionAttachments.snapshotCounts();
			const mentionedWorkflowIds = mentionAttachments.snapshotMentionedWorkflowIds();
			isPreparingSubmission.value = true;
			let fileAttachments;
			try {
				fileAttachments = submittedFiles.length ? (await Promise.all(submittedFiles.map(convertFileToBinaryData))).map((b) => ({
					type: "file",
					data: b.data,
					mimeType: b.mimeType,
					fileName: b.fileName ?? "unnamed"
				})) : [];
			} finally {
				isPreparingSubmission.value = false;
			}
			const attachments = [...fileAttachments, ...submittedResources];
			submitComposerMessage(text, attachments.length ? attachments : void 0, prefill, responseStartedAtEpochMs, {
				files: submittedFiles,
				resources: submittedResources,
				mentionReferenceIds,
				mentionCounts,
				mentionedWorkflowIds
			});
		}
		function removeResource(index) {
			mentionAttachments.removeResource(index);
		}
		watch(() => instanceAiStore.pendingComposerAttachments, (pending) => {
			if (pending.length === 0) return;
			const consumed = instanceAiStore.consumePendingAttachments();
			for (const attachment of consumed) {
				if (attachment.type === "file") continue;
				if (attachment.type === "nodes") {
					const existing = attachedResources.value.find((a) => a.type === "nodes" && a.workflowId === attachment.workflowId);
					if (existing) {
						existing.sets = mergeNodeSets(existing.sets, attachment.sets);
						existing.workflowName = attachment.workflowName ?? existing.workflowName;
						continue;
					}
				}
				attachedResources.value = [...attachedResources.value, attachment];
			}
		}, {
			deep: true,
			immediate: true
		});
		function handleStop() {
			mentions.close();
			emit("stop");
		}
		function handleComposerKeydown(event) {
			if (!mentionMenuOpen.value) return;
			const handled = mentionPickerRef.value?.handleExternalKeydown(event) ?? false;
			const hasModifier = event.shiftKey || event.ctrlKey || event.metaKey || event.altKey;
			const isComposing = event.isComposing || event.keyCode === IME_COMPOSITION_KEYCODE;
			if (handled || event.key !== "Enter" || hasModifier || isComposing) return;
			event.preventDefault();
			event.stopPropagation();
		}
		function handleTabAutocomplete() {
			if (!inputText.value && props.contextualSuggestion) setPrefill({
				text: props.contextualSuggestion,
				prefillType: "contextual_followup"
			});
		}
		function handleFilesSelected(files) {
			attachedFiles.value.push(...files);
		}
		function handleFilesRejected(files) {
			for (const file of files) toast.showMessage({
				type: "error",
				title: i18n.baseText("agents.chat.attachments.unsupportedType", { interpolate: { fileName: file.name } })
			});
		}
		function handleFileRemove(file) {
			const idx = attachedFiles.value.indexOf(file);
			if (idx !== -1) attachedFiles.value.splice(idx, 1);
		}
		function getTelemetryContext(telemetryPayload) {
			return {
				threadId: props.currentThreadId || void 0,
				suggestionCatalogVersion: resolvedSuggestionCatalogVersion.value,
				telemetryPayload: {
					...props.suggestionTelemetryPayload,
					...telemetryPayload
				}
			};
		}
		function getSuggestionPrompt(payload) {
			return payload.prompt ?? i18n.baseText(payload.promptKey);
		}
		function getPreviewPromptText(preview) {
			if (!preview) return null;
			if (typeof preview === "string") return i18n.baseText(preview);
			return preview.prompt;
		}
		function trackSelectedSuggestionSubmitted(message) {
			const selectedSuggestion = selectedSuggestionDraft.value;
			if (!selectedSuggestion) return;
			promptSuggestionsTelemetry.trackSuggestionSubmitted({
				...getTelemetryContext(selectedSuggestion.telemetryPayload),
				suggestionCatalogVersion: selectedSuggestion.suggestionCatalogVersion ?? resolvedSuggestionCatalogVersion.value,
				suggestionId: selectedSuggestion.suggestionId,
				suggestionKind: selectedSuggestion.suggestionKind,
				position: selectedSuggestion.position,
				promptModified: message !== selectedSuggestion.originalPrompt
			});
		}
		function handleQuickExamplesOpened(payload) {
			if (payload.suggestionId !== "quick-examples") return;
			promptSuggestionsTelemetry.trackQuickExamplesOpened({
				...getTelemetryContext(),
				suggestionId: payload.suggestionId,
				position: payload.position
			});
		}
		function trackSuggestionSelected(payload) {
			promptSuggestionsTelemetry.trackSuggestionSelected({
				...getTelemetryContext(payload.telemetryPayload),
				suggestionId: payload.suggestionId,
				suggestionKind: payload.suggestionKind,
				position: payload.position,
				suggestionTitle: payload.suggestionTitle
			});
		}
		function handleSuggestionsCycled(payload) {
			promptSuggestionsTelemetry.trackSuggestionsCycled({
				...getTelemetryContext(payload.telemetryPayload),
				visibleSuggestionIds: payload.visibleSuggestionIds,
				cycleCount: payload.cycleCount
			});
		}
		async function handleSuggestionInsert(payload) {
			trackSuggestionSelected(payload);
			previewPrompt.value = null;
			const prompt = getSuggestionPrompt(payload);
			selectedSuggestionDraft.value = {
				...payload,
				originalPrompt: prompt
			};
			activePrefill.value = {
				text: prompt,
				prefillType: payload.prefillType,
				prefillId: payload.suggestionId
			};
			inputText.value = prompt;
			await nextTick();
			chatInputRef.value?.focus();
		}
		const resizable = computed(() => {
			if (props.fixedRows) return {
				minRows: props.fixedRows,
				maxRows: props.fixedRows
			};
			if (previewPrompt.value) return {
				minRows: DEFAULT_AUTOSIZE_ROWS,
				maxRows: DEFAULT_AUTOSIZE_ROWS
			};
			return {
				minRows: DEFAULT_AUTOSIZE_ROWS,
				maxRows: DEFAULT_MAX_AUTOSIZE_ROWS
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "composerRef",
				ref: composerRef,
				class: normalizeClass(_ctx.$style.composer),
				"data-test-id": "instance-ai-composer",
				onKeydownCapture: handleComposerKeydown,
				onPointerdownCapture: _cache[5] || (_cache[5] = (...args) => unref(mentions).saveSelection && unref(mentions).saveSelection(...args)),
				onClickCapture: _cache[6] || (_cache[6] = (...args) => unref(mentions).handleCaretMove && unref(mentions).handleCaretMove(...args)),
				onKeyupCapture: _cache[7] || (_cache[7] = (...args) => unref(mentions).handleCaretMove && unref(mentions).handleCaretMove(...args)),
				onSelectCapture: _cache[8] || (_cache[8] = (...args) => unref(mentions).handleCaretMove && unref(mentions).handleCaretMove(...args))
			}, [
				createVNode(ChatInputBase_default, {
					ref_key: "chatInputRef",
					ref: chatInputRef,
					"model-value": inputText.value,
					class: normalizeClass(_ctx.$style.inputWrapper),
					placeholder: placeholder.value,
					"is-streaming": props.isStreaming,
					"can-submit": canSubmit.value,
					disabled: isGatedBySetup.value || isPreparingSubmission.value || props.isOutOfCredits,
					autosize: resizable.value,
					"button-label": props.submitLabel,
					"active-requires-focus": props.submitActiveRequiresFocus,
					"max-length": unref(EXTENDED_PROMPT_MAX_LENGTH),
					"show-voice": "",
					"show-attach": showAttach.value,
					"accepted-mime-types": props.attachOnlyMimeTypes,
					"attached-encoded-bytes": attachedEncodedBytes.value,
					"onUpdate:modelValue": unref(mentions).handleTextChange,
					onSubmit: handleSubmit,
					onStop: handleStop,
					onTab: handleTabAutocomplete,
					onFilesSelected: handleFilesSelected,
					onFilesRejected: handleFilesRejected
				}, createSlots({
					attachments: withCtx(() => [props.contextChip || attachedResources.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.attachments)
					}, [props.contextChip ? (openBlock(), createBlock(InstanceAiResourceChip_default, {
						key: 0,
						label: props.contextChip.label,
						icon: props.contextChip.icon ?? "robot",
						"remove-label": unref(i18n).baseText("generic.close"),
						"test-id": props.contextChip.testId ?? "instance-ai-handoff-context-chip",
						"remove-test-id": "instance-ai-handoff-context-chip-dismiss",
						removable: "",
						onRemove: _cache[0] || (_cache[0] = ($event) => emit("dismiss-context-chip"))
					}, null, 8, [
						"label",
						"icon",
						"remove-label",
						"test-id"
					])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(attachedResources.value, (attachment, index) => {
						return openBlock(), createBlock(AttachmentPreview_default, {
							key: `res-${index}`,
							attachment,
							"is-removable": true,
							onRemoveResource: ($event) => removeResource(index),
							"onUpdate:attachment": ($event) => unref(mentionAttachments).updateResource(index, $event)
						}, null, 8, [
							"attachment",
							"onRemoveResource",
							"onUpdate:attachment"
						]);
					}), 128))], 2)) : createCommentVNode("", true), attachedFiles.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.attachments)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachedFiles.value, (file, index) => {
						return openBlock(), createBlock(AttachmentPreview_default, {
							key: index,
							file,
							"is-removable": true,
							onRemove: handleFileRemove
						}, null, 8, ["file"]);
					}), 128))], 2)) : createCommentVNode("", true)]),
					_: 2
				}, [props.attachOnlyMimeTypes === void 0 ? {
					name: "footer-start",
					fn: withCtx(() => [createVNode(InstanceAiInputMenu_default, {
						disabled: isBusy.value || isGatedBySetup.value,
						"is-streaming": props.isStreaming,
						onAttachFiles: _cache[1] || (_cache[1] = ($event) => chatInputRef.value?.openFilePicker())
					}, null, 8, ["disabled", "is-streaming"])]),
					key: "0"
				} : void 0, shouldShowMentions.value ? {
					name: "right-actions",
					fn: withCtx(() => [createVNode(AssistantAtMentionPicker_default, {
						ref_key: "mentionPickerRef",
						ref: mentionPickerRef,
						modelValue: unref(mentionMenuOpen),
						"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => isRef(mentionMenuOpen) ? mentionMenuOpen.value = $event : null), unref(mentions).handleMenuOpenChange],
						query: unref(mentionQuery),
						"project-id": props.mentionProjectId,
						artifacts: props.mentionArtifacts,
						"active-workflow-id": props.mentionActiveWorkflowId,
						"excluded-keys": excludedMentionContext.value.keys,
						"excluded-workflow-ids": excludedMentionContext.value.workflowIds,
						"input-element": inputElement.value,
						reference: composerRef.value,
						disabled: !canUseMentions.value,
						onSelect: handleMentionSelection,
						onEmptySearch: handleMentionEmptySearch
					}, null, 8, [
						"modelValue",
						"query",
						"project-id",
						"artifacts",
						"active-workflow-id",
						"excluded-keys",
						"excluded-workflow-ids",
						"input-element",
						"reference",
						"disabled",
						"onUpdate:modelValue"
					])]),
					key: "1"
				} : void 0]), 1032, [
					"model-value",
					"class",
					"placeholder",
					"is-streaming",
					"can-submit",
					"disabled",
					"autosize",
					"button-label",
					"active-requires-focus",
					"max-length",
					"show-attach",
					"accepted-mime-types",
					"attached-encoded-bytes",
					"onUpdate:modelValue"
				]),
				renderSlot(_ctx.$slots, "footer"),
				renderSlot(_ctx.$slots, "before-suggestions"),
				createVNode(Transition, {
					name: "suggestions-fade",
					duration: SUGGESTIONS_TRANSITION_DURATION
				}, {
					default: withCtx(() => [canShowSuggestions.value && props.suggestions ? (openBlock(), createBlock(resolveDynamicComponent(resolvedSuggestionsComponent.value), mergeProps({
						key: 0,
						class: _ctx.$style.suggestions,
						suggestions: props.suggestions,
						disabled: isBusy.value || isGatedBySetup.value
					}, props.suggestionsComponentProps, {
						onPreviewChange: _cache[3] || (_cache[3] = ($event) => previewPrompt.value = getPreviewPromptText($event)),
						onQuickExamplesOpened: handleQuickExamplesOpened,
						onCycleSuggestions: handleSuggestionsCycled,
						onInsertSuggestion: handleSuggestionInsert,
						onWorkflowPreview: _cache[4] || (_cache[4] = ($event) => emit("workflow-preview", $event))
					}), null, 16, [
						"class",
						"suggestions",
						"disabled"
					])) : createCommentVNode("", true)]),
					_: 1
				})
			], 34);
		};
	}
}), [["__cssModules", { "$style": {
	composer: "_composer_1t1tr_1",
	inputWrapper: "_inputWrapper_1t1tr_9",
	suggestions: "_suggestions_1t1tr_13",
	attachments: "_attachments_1t1tr_17"
} }]]);
//#endregion
//#region src/features/ai/instanceAi/components/WorkflowBuilderUnavailableNotice.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var WorkflowBuilderUnavailableNotice_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "WorkflowBuilderUnavailableNotice",
	setup(__props) {
		const i18n = useI18n();
		const settingsStore = useInstanceAiSettingsStore();
		const descriptionKey = computed(() => settingsStore.isSandboxEnabled ? "instanceAi.workflowBuilderUnavailable.serviceUrlDescription" : "instanceAi.workflowBuilderUnavailable.enableSandboxDescription");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				class: normalizeClass(_ctx.$style.notice),
				theme: "warning",
				"data-test-id": "instance-ai-workflow-builder-unavailable"
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.copy) }, [createBaseVNode("strong", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowBuilderUnavailable.title")), 1), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(descriptionKey.value)), 1)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	notice: "_notice_soy4g_1",
	copy: "_copy_soy4g_5"
} }]]);
//#endregion
//#region src/features/ai/instanceAi/components/LimitedModeNotice.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { key: 1 };
var LimitedModeNotice_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LimitedModeNotice",
	setup(__props) {
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const instanceAiSettingsStore = useInstanceAiSettingsStore();
		const isDismissed = useLocalStorage(() => LOCAL_STORAGE_INSTANCE_AI_LIMITED_MODE_DISMISSED(usersStore.currentUserId ?? ""), false, { writeDefaults: false });
		const isLimited = computed(() => !settingsStore.isAiDataSharingEnabled);
		return (_ctx, _cache) => {
			return isLimited.value && !unref(isDismissed) ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.notice),
				theme: "warning",
				"data-test-id": "instance-ai-limited-mode-notice"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "small",
					"aria-label": unref(i18n).baseText("generic.dismiss"),
					title: unref(i18n).baseText("generic.dismiss"),
					"data-test-id": "instance-ai-limited-mode-dismiss",
					onClick: _cache[0] || (_cache[0] = ($event) => isDismissed.value = true)
				}, null, 8, ["aria-label", "title"])]),
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.copy) }, [
					createBaseVNode("strong", null, toDisplayString(unref(i18n).baseText("instanceAi.limitedMode.title")), 1),
					createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.limitedMode.description")), 1),
					unref(instanceAiSettingsStore).canManageAiUsage ? (openBlock(), createBlock(unref(RouterLink), {
						key: 0,
						to: { name: unref(INSTANCE_AI_SETTINGS_VIEW) },
						"data-test-id": "instance-ai-limited-mode-settings-link"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.limitedMode.settingsLink")), 1)]),
						_: 1
					}, 8, ["to"])) : (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(i18n).baseText("instanceAi.limitedMode.askAdmin")), 1))
				], 2)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
}), [["__cssModules", { "$style": {
	notice: "_notice_soy4g_1",
	copy: "_copy_soy4g_5"
} }]]);
//#endregion
export { useBrowserUseConnection as a, useInstanceAiPromptSuggestionsTelemetry as i, WorkflowBuilderUnavailableNotice_default as n, useCreditWarningBanner as o, InstanceAiInput_default as r, InstanceAiViewHeader_default as s, LimitedModeNotice_default as t };
