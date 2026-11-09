import { Ad as vModelText, Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Ef as withDirectives, Gd as createVNode, Kf as unref, Md as withKeys, Nd as withModifiers, Nf as isRef, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, ep as init_shared_esm_bundler, ff as renderList, mf as resolveComponent, os as useRouter, pp as normalizeClass, qd as defineComponent, rf as nextTick, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { ED as N8nText_default, Eo as useInstanceAiStore, FD as N8nIcon_default, Hy as useToast, MD as Input_default, ND as N8nIconButton_default, Oi as useAgentsN8nChatFlag, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, UD as useI18n, WE as N8nHeading_default, hD as N8nActionDropdown_default, lo as clearPendingThreadHandoff, nc as formatTimeAgo, np as useDocumentTitle } from "./app-DbOOaPK6.js";
import { n as chatItemRoute, o as useAgentN8nChatThreadsStore, r as chatItemTitle, t as agentThreadActions } from "./mergeRecentChats-B_j46rka.js";
import { t as RecentChatIcon_default } from "./RecentChatIcon-8LU1jypU.js";
import { t as PageViewLayout_default } from "./PageViewLayout-_uqvgyW7.js";
import { t as useMergedChatHistory } from "./useMergedChatHistory-BlPzd3-j.js";
//#region src/features/ai/instanceAi/InstanceAiThreadsView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = ["onKeydown", "onBlur"];
var InstanceAiThreadsView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadsView",
	setup(__props) {
		const store = useInstanceAiStore();
		const agentThreadsStore = useAgentN8nChatThreadsStore();
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		const isAgentsN8nChatFlag = useAgentsN8nChatFlag();
		useDocumentTitle().set(i18n.baseText("instanceAi.sidebar.chatHistory"));
		const { items: mergedThreads, hasMore, history, isLoading, error, search, listRef, sentinelRef, loadMore } = useMergedChatHistory();
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
		function itemTitle(item) {
			return chatItemTitle(item, i18n);
		}
		const itemRoute = chatItemRoute;
		function startRename(thread) {
			editingThreadId.value = thread.id;
			editingTitle.value = thread.title;
			nextTick(() => {
				renameInput.value?.focus();
				renameInput.value?.select();
			});
		}
		function setRenameInput(element) {
			renameInput.value = element instanceof HTMLInputElement ? element : null;
		}
		async function confirmRename(thread) {
			if (editingThreadId.value !== thread.id) return;
			editingThreadId.value = null;
			const title = editingTitle.value.trim();
			if (!title || title === thread.title) return;
			try {
				await store.renameThread(thread.id, title);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("instanceAi.threads.renameSuccess")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("instanceAi.threads.renameError"));
			}
		}
		async function handleThreadAction(action, thread) {
			if (action === "rename") startRename(thread);
			if (action === "delete" && await store.deleteThread(thread.id)) clearPendingThreadHandoff(thread.id);
		}
		async function handleAgentThreadAction(action, thread) {
			if (action === "delete") await agentThreadsStore.deleteThread(thread);
		}
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createBlock(PageViewLayout_default, {
				"full-width": "",
				"data-test-id": "instance-ai-threads-view"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.page) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(unref(N8nIconButton_default), {
						icon: "arrow-left",
						variant: "ghost",
						"aria-label": unref(i18n).baseText("instanceAi.threads.backToAssistant"),
						onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push({ name: unref("InstanceAi") }))
					}, null, 8, ["aria-label"]),
					createVNode(unref(N8nHeading_default), {
						class: normalizeClass(_ctx.$style.heading),
						tag: "h1",
						size: "xlarge",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.sidebar.chatHistory")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(Input_default), {
						modelValue: unref(search),
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(search) ? search.value = $event : null),
						class: normalizeClass(_ctx.$style.search),
						size: "small",
						clearable: "",
						maxlength: 500,
						placeholder: unref(i18n).baseText("instanceAi.threads.searchPlaceholder"),
						"data-test-id": "instance-ai-threads-search"
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "search",
							size: "small"
						})]),
						_: 1
					}, 8, [
						"modelValue",
						"class",
						"placeholder"
					]),
					createVNode(unref(N8nButton_default), {
						size: "small",
						icon: "plus",
						onClick: _cache[2] || (_cache[2] = ($event) => unref(router).push({ name: unref("InstanceAi") }))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.thread.new")), 1)]),
						_: 1
					})
				], 2), createBaseVNode("div", {
					ref_key: "listRef",
					ref: listRef,
					class: normalizeClass(_ctx.$style.list)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(mergedThreads), (item) => {
					return openBlock(), createElementBlock("div", {
						key: item.thread.id,
						class: normalizeClass(_ctx.$style.row),
						"data-test-id": "instance-ai-history-thread"
					}, [item.kind === "assistant" && editingThreadId.value === item.thread.id ? withDirectives((openBlock(), createElementBlock("input", {
						key: 0,
						ref_for: true,
						ref: setRenameInput,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => editingTitle.value = $event),
						class: normalizeClass(_ctx.$style.renameInput),
						type: "text",
						maxlength: "255",
						onKeydown: [withKeys(($event) => confirmRename(item.thread), ["enter"]), _cache[4] || (_cache[4] = withKeys(($event) => editingThreadId.value = null, ["escape"]))],
						onBlur: ($event) => confirmRename(item.thread)
					}, null, 42, _hoisted_1)), [[vModelText, editingTitle.value]]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						createVNode(_component_RouterLink, {
							to: unref(itemRoute)(item),
							class: normalizeClass(_ctx.$style.link),
							title: itemTitle(item),
							onDblclick: withModifiers(($event) => item.kind === "assistant" && startRename(item.thread), ["prevent"])
						}, {
							default: withCtx(() => [unref(isAgentsN8nChatFlag) ? (openBlock(), createBlock(RecentChatIcon_default, {
								key: 0,
								class: normalizeClass(_ctx.$style.icon),
								item,
								size: 20
							}, null, 8, ["class", "item"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								class: normalizeClass(_ctx.$style.icon),
								icon: "message-circle",
								size: "medium"
							}, null, 8, ["class"])), createVNode(unref(N8nText_default), {
								class: normalizeClass(_ctx.$style.title),
								size: "medium"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(itemTitle(item)), 1)]),
								_: 2
							}, 1032, ["class"])]),
							_: 2
						}, 1032, [
							"to",
							"class",
							"title",
							"onDblclick"
						]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(formatTimeAgo)(item.thread.updatedAt)), 1)]),
							_: 2
						}, 1024),
						item.kind === "assistant" ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
							key: 0,
							items: threadActions,
							class: normalizeClass(_ctx.$style.actions),
							placement: "bottom-end",
							onSelect: ($event) => handleThreadAction($event, item.thread)
						}, {
							activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								variant: "ghost",
								icon: "ellipsis",
								"aria-label": unref(i18n).baseText("instanceAi.threads.actions")
							}, null, 8, ["aria-label"])]),
							_: 1
						}, 8, ["class", "onSelect"])) : (openBlock(), createBlock(unref(N8nActionDropdown_default), {
							key: 1,
							items: unref(agentActions),
							class: normalizeClass(_ctx.$style.actions),
							placement: "bottom-end",
							onSelect: ($event) => handleAgentThreadAction($event, item.thread)
						}, {
							activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								variant: "ghost",
								icon: "ellipsis",
								"aria-label": unref(i18n).baseText("instanceAi.threads.actions")
							}, null, 8, ["aria-label"])]),
							_: 1
						}, 8, [
							"items",
							"class",
							"onSelect"
						]))
					], 64))], 2);
				}), 128)), unref(isLoading) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.status),
					role: "status"
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loading")), 1)]),
					_: 1
				})], 2)) : unref(error) ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.status),
					role: "alert"
				}, [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.threads.loadError")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					"data-test-id": "instance-ai-threads-retry",
					onClick: unref(loadMore)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				}, 8, ["onClick"])], 2)) : unref(hasMore) ? (openBlock(), createElementBlock("div", {
					key: 2,
					ref_key: "sentinelRef",
					ref: sentinelRef,
					class: normalizeClass(_ctx.$style.sentinel)
				}, null, 2)) : unref(mergedThreads).length === 0 ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.status)
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(history).search ? "instanceAi.threads.noSearchResults" : "instanceAi.sidebar.noThreads")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true)], 2)], 2)]),
				_: 1
			});
		};
	}
}), [["__cssModules", { "$style": {
	page: "_page_1s7fz_1",
	header: "_header_1s7fz_11",
	heading: "_heading_1s7fz_18",
	search: "_search_1s7fz_23",
	list: "_list_1s7fz_27",
	row: "_row_1s7fz_33",
	actions: "_actions_1s7fz_43",
	link: "_link_1s7fz_47",
	icon: "_icon_1s7fz_57",
	title: "_title_1s7fz_62",
	renameInput: "_renameInput_1s7fz_78",
	status: "_status_1s7fz_92",
	sentinel: "_sentinel_1s7fz_100"
} }]]);
//#endregion
export { InstanceAiThreadsView_default as default };
