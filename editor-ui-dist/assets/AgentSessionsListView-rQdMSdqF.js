import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-a4RL4cTS.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as useMessage } from "./useMessage-B2KuXuge.js";
import { n as ElSkeletonItem } from "./skeleton-BVii2a9g.js";
import { t as N8nActionDropdown_default } from "./N8nActionDropdown-gxR3IoWA.js";
import { t as TableBase_default } from "./TableBase-BJZN4_ld.js";
import { c as useRouter, s as useRoute } from "./vue-router-Dl3cOHxO.js";
import { n as useToast } from "./useToast-BdIkYyHv.js";
import { Sr as AGENT_SESSION_DETAIL_VIEW } from "./constants-BP1FOJvU.js";
import { t as convertToDisplayDate } from "./dateFormatter-k-XwVUWb.js";
import { n as useAgentSessionsStore, t as useThreadTitle } from "./thread-title-FruGLeEH.js";
//#region src/features/agents/views/AgentSessionsListView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var _hoisted_2 = {
	colspan: 6,
	style: {
		"text-align": "center",
		"padding": "var(--spacing--lg)"
	}
};
var _hoisted_3 = {
	key: 0,
	"data-test-id": "agent-sessions-empty"
};
var _hoisted_4 = { colspan: 6 };
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
		function onVisibilityChange() {
			if (document.visibilityState !== "visible") return;
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.wrapper, { [_ctx.$style.embedded]: props.embedded }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tableContainer) }, [createVNode(unref(TableBase_default), null, {
				default: withCtx(() => [createBaseVNode("tbody", null, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(unref(sessionsStore).threads, (thread) => {
						return openBlock(), createElementBlock("tr", {
							key: thread.id,
							class: normalizeClass(_ctx.$style.clickableRow),
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
							}, [createBaseVNode("span", {
								class: normalizeClass(_ctx.$style.sessionTitle),
								"data-test-id": "agent-session-title"
							}, toDisplayString(unref(threadTitleOf)(thread)), 3)], 2)], 2),
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
								class: normalizeClass(_ctx.$style.durationCell),
								"data-test-id": "agent-session-duration"
							}, toDisplayString(formatDuration(thread.totalDuration)), 3),
							createBaseVNode("td", {
								class: normalizeClass(_ctx.$style.actionCell),
								onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
							}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionGroup) }, [createVNode(unref(N8nActionDropdown_default), {
								items: rowActions(thread),
								"activator-icon": "ellipsis",
								"data-test-id": "agent-session-actions",
								onSelect: ($event) => onAction($event, thread)
							}, null, 8, ["items", "onSelect"])], 2)], 2)
						], 10, _hoisted_1);
					}), 128)),
					unref(sessionsStore).loading && !unref(sessionsStore).threads.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(5, (item) => {
						return createBaseVNode("tr", { key: item }, [(openBlock(), createElementBlock(Fragment, null, renderList(6, (col) => {
							return createBaseVNode("td", { key: col }, [createVNode(unref(ElSkeletonItem))]);
						}), 64))]);
					}), 64)) : createCommentVNode("", true),
					!unref(sessionsStore).loading && !unref(sessionsStore).threads.length ? (openBlock(), createElementBlock("tr", {
						key: 1,
						class: normalizeClass(_ctx.$style.lastRow)
					}, [createBaseVNode("td", _hoisted_2, [!unref(sessionsStore).threads.length && !unref(sessionsStore).loading ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(i18n).baseText("agentSessions.empty")), 1)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
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
						onClick: _cache[1] || (_cache[1] = ($event) => loadMore())
					}, null, 8, [
						"title",
						"label",
						"loading"
					])])], 2)) : createCommentVNode("", true)
				])]),
				_: 1
			})], 2)], 2);
		};
	}
});
var AgentSessionsListView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1pnkl_125",
	embedded: "_embedded_1pnkl_137",
	tableContainer: "_tableContainer_1pnkl_143",
	titleCell: "_titleCell_1pnkl_150",
	sessionTitle: "_sessionTitle_1pnkl_156",
	sessionOpen: "_sessionOpen_1pnkl_167",
	originCell: "_originCell_1pnkl_184",
	dateCell: "_dateCell_1pnkl_185",
	tokenCell: "_tokenCell_1pnkl_186",
	durationCell: "_durationCell_1pnkl_187",
	originPill: "_originPill_1pnkl_192",
	actionCell: "_actionCell_1pnkl_214",
	actionGroup: "_actionGroup_1pnkl_221",
	clickableRow: "_clickableRow_1pnkl_228",
	lastRow: "_lastRow_1pnkl_241"
};
var AgentSessionsListView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSessionsListView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSessionsListView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentSessionsListView_default as t };
