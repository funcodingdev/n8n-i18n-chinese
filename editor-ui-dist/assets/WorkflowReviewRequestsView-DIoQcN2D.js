import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, Z as onUnmounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, m as withKeys, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-aHDyP5Mf.js";
import { Hi as N8nBadge_default, Ht as N8nCard_default, O as N8nUserStack_default, an as N8nLoading_default, jt as N8nHeading_default, lo as N8nButton_default, ra as N8nTooltip_default, ro as N8nText_default, uo as N8nIcon_default, z as N8nTabs_default } from "./src-BPgPnOl4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-BREJ7rCe.js";
import { Xn as ResponseError, dr as defineStore, pr as storeToRefs, t as useRootStore } from "./useRootStore-DmWgQ-mr.js";
import { t as useUsersStore } from "./users.store-Cc4RE3YH.js";
import { n as useToast } from "./useToast-BoVkvj1B.js";
import { t as useDocumentTitle } from "./useDocumentTitle-USeHkP4i.js";
import { t as TimeAgo_default } from "./TimeAgo-wXBlbam5.js";
import { t as REVIEW_INBOX_QUERY_PARAM } from "./constants-4TP8jM0d.js";
import { a as fetchWorkflowReviewInboxSummary, i as fetchWorkflowReviewInbox, n as decideWorkflowReviewRequest, o as fetchWorkflowReviewRequestDetail } from "./workflowReviews.api-CCKYMr-4.js";
import { t as PageViewLayout_default } from "./PageViewLayout-BgNC7IGZ.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-DNoon668.js";
//#region src/features/workflow-reviews/components/WorkflowReviewStatusDot.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["aria-label"];
var WorkflowReviewStatusDot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewStatusDot",
	props: {
		state: {},
		decision: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const status = computed(() => {
			if (props.state === "open") return props.decision === "changes_requested" ? {
				variant: "changesRequested",
				label: i18n.baseText("workflowReviews.status.changesRequested")
			} : {
				variant: "pending",
				label: i18n.baseText("workflowReviews.status.pending")
			};
			return props.decision === "approved" ? {
				variant: "approved",
				label: i18n.baseText("workflowReviews.status.approved")
			} : {
				variant: "closed",
				label: i18n.baseText("workflowReviews.status.closed")
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: status.value.label,
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.dot, _ctx.$style[status.value.variant]]),
					"data-test-id": "workflow-review-request-status-dot",
					"aria-label": status.value.label
				}, null, 10, _hoisted_1$2)]),
				_: 1
			}, 8, ["content"]);
		};
	}
});
var WorkflowReviewStatusDot_vue_vue_type_style_index_0_lang_module_default = {
	dot: "_dot_1l040_125",
	pending: "_pending_1l040_132",
	changesRequested: "_changesRequested_1l040_136",
	approved: "_approved_1l040_140",
	closed: "_closed_1l040_144"
};
var WorkflowReviewStatusDot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewStatusDot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewStatusDot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewRequestsSidebar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2$1 = ["title"];
var WorkflowReviewRequestsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequestsSidebar",
	props: {
		items: {},
		activeTab: {},
		openCount: {},
		closedCount: {},
		selectedId: {},
		loading: { type: Boolean },
		loadingMore: { type: Boolean },
		hasMore: { type: Boolean },
		isEmpty: { type: Boolean }
	},
	emits: [
		"select",
		"clear",
		"update:activeTab",
		"loadMore"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const listRef = ref(null);
		const loadMoreSentinel = ref(null);
		const currentUserEmail = computed(() => usersStore.currentUser?.email ?? null);
		function userGroups(item) {
			return {
				[i18n.baseText("workflowReviews.roles.requester")]: item.requester ? [item.requester] : [],
				[i18n.baseText("workflowReviews.roles.reviewers")]: item.reviewers
			};
		}
		const tabOptions = computed(() => [{
			label: i18n.baseText("workflowReviews.sidebar.tabs.open"),
			value: "open",
			tag: String(props.openCount)
		}, {
			label: i18n.baseText("workflowReviews.sidebar.tabs.closed"),
			value: "closed",
			tag: String(props.closedCount)
		}]);
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: listRef,
			threshold: .01,
			onIntersect: () => emit("loadMore")
		});
		watch([
			loadMoreSentinel,
			() => props.hasMore,
			() => props.loadingMore,
			() => props.items.length
		], ([sentinel, hasMore, loadingMore]) => {
			if (sentinel && hasMore && !loadingMore) observeForLoadMore(sentinel);
		}, {
			immediate: true,
			flush: "post"
		});
		function onTabChange(value) {
			emit("update:activeTab", String(value));
		}
		function onListBackgroundClick() {
			if (props.selectedId) emit("clear");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.sidebar),
				"data-test-id": "workflow-reviews-sidebar"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, [createVNode(unref(N8nHeading_default), {
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "workflow-reviews-page-title"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.page.title")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nTabs_default), {
					"model-value": __props.activeTab,
					options: tabOptions.value,
					"data-test-id": "workflow-reviews-tabs",
					"onUpdate:modelValue": onTabChange
				}, null, 8, ["model-value", "options"])], 2),
				createBaseVNode("div", {
					ref_key: "listRef",
					ref: listRef,
					role: "listbox",
					"aria-label": unref(i18n).baseText("workflowReviews.page.title"),
					class: normalizeClass(_ctx.$style.list),
					onClick: withModifiers(onListBackgroundClick, ["self"])
				}, [__props.loading ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 0,
					loading: true,
					rows: 4
				})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					__props.isEmpty ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						size: "small",
						"data-test-id": "workflow-reviews-empty"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`workflowReviews.sidebar.empty.${__props.activeTab}`)), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
						return openBlock(), createBlock(unref(N8nCard_default), {
							key: item.id,
							class: normalizeClass([_ctx.$style.card, { [_ctx.$style.cardSelected]: __props.selectedId === item.id }]),
							"data-test-id": "workflow-review-request-row",
							role: "option",
							tabindex: "0",
							"aria-selected": __props.selectedId === item.id,
							onClick: ($event) => emit("select", item.id),
							onKeydown: [withKeys(withModifiers(($event) => emit("select", item.id), ["prevent"]), ["enter"]), withKeys(withModifiers(($event) => emit("select", item.id), ["prevent"]), ["space"])]
						}, {
							default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createVNode(unref(N8nText_default), {
								bold: "",
								tag: "h3",
								class: normalizeClass(_ctx.$style.cardTitle)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
								_: 2
							}, 1032, ["class"]), createVNode(WorkflowReviewStatusDot_default, {
								state: item.state,
								decision: item.decision
							}, null, 8, ["state", "decision"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardMeta) }, [item.workflowName ? (openBlock(), createBlock(unref(N8nBadge_default), {
								key: 0,
								theme: "tertiary",
								"show-border": false,
								class: normalizeClass(_ctx.$style.workflowBadge),
								"data-test-id": "workflow-review-request-workflow-badge"
							}, {
								default: withCtx(() => [createBaseVNode("span", {
									class: normalizeClass(_ctx.$style.workflowBadgeText),
									title: item.workflowName
								}, [createVNode(unref(N8nIcon_default), {
									icon: "workflow",
									size: "small"
								}), createBaseVNode("span", null, toDisplayString(item.workflowName), 1)], 10, _hoisted_2$1)]),
								_: 2
							}, 1032, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardMetaActions) }, [item.requester || item.reviewers.length > 0 ? (openBlock(), createBlock(unref(N8nUserStack_default), {
								key: 0,
								users: userGroups(item),
								"max-avatars": 3,
								"current-user-email": currentUserEmail.value,
								size: "xsmall",
								"data-test-id": "workflow-review-request-users"
							}, null, 8, ["users", "current-user-email"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
								size: "xsmall",
								color: "text-light",
								class: normalizeClass(_ctx.$style.cardMetaTime),
								"data-test-id": "workflow-review-request-created-at"
							}, {
								default: withCtx(() => [createVNode(TimeAgo_default, { date: item.createdAt }, null, 8, ["date"])]),
								_: 2
							}, 1032, ["class"])], 2)], 2)], 2)]),
							_: 2
						}, 1032, [
							"class",
							"aria-selected",
							"onClick",
							"onKeydown"
						]);
					}), 128)),
					__props.loadingMore ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.loadingMore)
					}, [createVNode(unref(N8nLoading_default), {
						loading: true,
						rows: 1
					})], 2)) : createCommentVNode("", true),
					createBaseVNode("div", {
						ref_key: "loadMoreSentinel",
						ref: loadMoreSentinel,
						class: normalizeClass(_ctx.$style.sentinel)
					}, null, 2)
				], 64))], 10, _hoisted_1$1)
			], 2);
		};
	}
});
var WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sidebar: "_sidebar_70u3w_125",
	columnTitle: "_columnTitle_70u3w_134",
	header: "_header_70u3w_141",
	list: "_list_70u3w_148",
	card: "_card_70u3w_157",
	cardSelected: "_cardSelected_70u3w_164",
	cardContent: "_cardContent_70u3w_177",
	cardHeader: "_cardHeader_70u3w_186",
	cardTitle: "_cardTitle_70u3w_195",
	cardMeta: "_cardMeta_70u3w_203",
	cardMetaActions: "_cardMetaActions_70u3w_213",
	cardMetaTime: "_cardMetaTime_70u3w_221",
	workflowBadge: "_workflowBadge_70u3w_225",
	workflowBadgeText: "_workflowBadgeText_70u3w_238",
	loadingMore: "_loadingMore_70u3w_253",
	sentinel: "_sentinel_70u3w_257"
};
var WorkflowReviewRequestsSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/reviewInbox.store.ts
var DEFAULT_LIMIT = 15;
function toError(error) {
	return error instanceof Error ? error : new Error(String(error));
}
var useReviewInboxStore = defineStore("workflowReviewInbox", () => {
	const rootStore = useRootStore();
	const probeSettled = ref(false);
	const hasAnyReviews = ref(false);
	const openCount = ref(0);
	const closedCount = ref(0);
	const items = ref([]);
	const detail = ref(null);
	const detailLoading = ref(false);
	const detailNotFound = ref(false);
	const activeTab = ref("open");
	const nextCursor = ref(null);
	const hasMore = ref(false);
	const loading = ref(false);
	const loadingMore = ref(false);
	const error = ref(null);
	let listRequestSeq = 0;
	let probeRequestSeq = 0;
	let detailRequestSeq = 0;
	const showSidebar = computed(() => probeSettled.value && hasAnyReviews.value);
	const isEmpty = computed(() => showSidebar.value && !loading.value && error.value === null && items.value.length === 0);
	function applyListResponse(response, { append }) {
		items.value = append ? [...items.value, ...response.data] : response.data;
		nextCursor.value = response.nextCursor;
		hasMore.value = response.hasMore;
	}
	async function requestList(cursor) {
		return await fetchWorkflowReviewInbox(rootStore.restApiContext, {
			state: activeTab.value,
			limit: DEFAULT_LIMIT,
			cursor
		});
	}
	async function probeInbox() {
		const requestSeq = ++probeRequestSeq;
		probeSettled.value = false;
		error.value = null;
		try {
			const summary = await fetchWorkflowReviewInboxSummary(rootStore.restApiContext);
			if (requestSeq !== probeRequestSeq) return;
			openCount.value = summary.open;
			closedCount.value = summary.closed;
			hasAnyReviews.value = summary.open + summary.closed > 0;
			probeSettled.value = true;
			if (hasAnyReviews.value) await fetchList({ reset: true });
		} catch (e) {
			if (requestSeq !== probeRequestSeq) return;
			error.value = toError(e);
			probeSettled.value = true;
			throw e;
		}
	}
	async function fetchList(options = {}) {
		const requestSeq = ++listRequestSeq;
		if (options.reset) {
			items.value = [];
			nextCursor.value = null;
			hasMore.value = false;
			loadingMore.value = false;
		}
		loading.value = true;
		error.value = null;
		try {
			const response = await requestList();
			if (requestSeq !== listRequestSeq) return;
			applyListResponse(response, { append: false });
		} catch (e) {
			if (requestSeq !== listRequestSeq) return;
			error.value = toError(e);
			throw e;
		} finally {
			if (requestSeq === listRequestSeq) loading.value = false;
		}
	}
	async function loadMore() {
		if (loading.value || loadingMore.value || !hasMore.value || !nextCursor.value) return;
		const requestSeq = ++listRequestSeq;
		const cursor = nextCursor.value;
		loadingMore.value = true;
		error.value = null;
		try {
			const response = await requestList(cursor);
			if (requestSeq !== listRequestSeq) return;
			applyListResponse(response, { append: true });
		} catch (e) {
			if (requestSeq !== listRequestSeq) return;
			error.value = toError(e);
			throw e;
		} finally {
			if (requestSeq === listRequestSeq) loadingMore.value = false;
		}
	}
	async function setActiveTab(tab) {
		if (activeTab.value === tab) return;
		activeTab.value = tab;
		await fetchList({ reset: true });
	}
	async function fetchDetail(id) {
		const requestSeq = ++detailRequestSeq;
		detail.value = null;
		detailLoading.value = true;
		detailNotFound.value = false;
		try {
			const response = await fetchWorkflowReviewRequestDetail(rootStore.restApiContext, id);
			if (requestSeq !== detailRequestSeq) return;
			detail.value = response;
		} catch (e) {
			if (requestSeq !== detailRequestSeq) return;
			if (e instanceof ResponseError && e.httpStatusCode === 404) {
				detailNotFound.value = true;
				return;
			}
			throw e;
		} finally {
			if (requestSeq === detailRequestSeq) detailLoading.value = false;
		}
	}
	function clearDetail() {
		detailRequestSeq += 1;
		detail.value = null;
		detailLoading.value = false;
		detailNotFound.value = false;
	}
	/**
	* Submit a decision and patch the affected item in place. Approving closes
	* the request; the closed tab refetches on activation and picks it up there.
	* Returns the response so callers can surface the auto-publish outcome.
	*/
	async function decideOnReview(id, decision) {
		const summary = await decideWorkflowReviewRequest(rootStore.restApiContext, id, { decision });
		const item = items.value.find((candidate) => candidate.id === id);
		if (item) {
			item.decision = summary.decision;
			item.state = summary.state;
			item.updatedAt = summary.updatedAt;
		}
		if (detail.value?.id === id) {
			detail.value.decision = summary.decision;
			detail.value.state = summary.state;
			detail.value.updatedAt = summary.updatedAt;
		}
		if (summary.state === "closed") {
			openCount.value = Math.max(0, openCount.value - 1);
			closedCount.value += 1;
		}
		if (item && item.state !== activeTab.value) items.value = items.value.filter((candidate) => candidate.id !== item.id);
		return summary;
	}
	function reset() {
		probeRequestSeq += 1;
		listRequestSeq += 1;
		detailRequestSeq += 1;
		probeSettled.value = false;
		hasAnyReviews.value = false;
		openCount.value = 0;
		closedCount.value = 0;
		items.value = [];
		detail.value = null;
		detailLoading.value = false;
		detailNotFound.value = false;
		activeTab.value = "open";
		nextCursor.value = null;
		hasMore.value = false;
		loading.value = false;
		loadingMore.value = false;
		error.value = null;
	}
	return {
		probeSettled,
		hasAnyReviews,
		openCount,
		closedCount,
		items,
		detail,
		detailLoading,
		detailNotFound,
		activeTab,
		nextCursor,
		hasMore,
		loading,
		loadingMore,
		error,
		showSidebar,
		isEmpty,
		probeInbox,
		fetchList,
		loadMore,
		setActiveTab,
		fetchDetail,
		clearDetail,
		decideOnReview,
		reset
	};
});
//#endregion
//#region src/features/workflow-reviews/views/WorkflowReviewRequestsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 1,
	"data-test-id": "workflow-review-detail-not-found"
};
var _hoisted_2 = { key: 3 };
var WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequestsView",
	setup(__props) {
		const store = useReviewInboxStore();
		const { probeSettled, showSidebar, items, activeTab, detail, detailLoading, detailNotFound, loading, loadingMore, hasMore, isEmpty, openCount, closedCount } = storeToRefs(store);
		const route = useRoute();
		const router = useRouter();
		function firstParam(value) {
			return (Array.isArray(value) ? value[0] : value) || null;
		}
		const selectedReviewId = computed(() => firstParam(route.params.reviewRequestId));
		function stateFromQuery(value) {
			return value === "closed" ? "closed" : "open";
		}
		store.activeTab = stateFromQuery(route.query[REVIEW_INBOX_QUERY_PARAM.state]);
		const selectedListItem = computed(() => items.value.find((item) => item.id === selectedReviewId.value) ?? null);
		const selectedItem = computed(() => detail.value ?? selectedListItem.value);
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const { showError, showMessage } = useToast();
		documentTitle.set(i18n.baseText("workflowReviews.page.title"));
		let isMounted = false;
		function handleListError(error) {
			if (!isMounted) return;
			showError(error, i18n.baseText("workflowReviews.error.load"));
		}
		watch(selectedReviewId, (id) => {
			if (route.name !== "WorkflowReviewRequestsView") return;
			if (id) store.fetchDetail(id).catch(handleListError);
			else store.clearDetail();
		}, { immediate: true });
		watch(() => route.query[REVIEW_INBOX_QUERY_PARAM.state], (next) => {
			if (route.name !== "WorkflowReviewRequestsView") return;
			store.setActiveTab(stateFromQuery(next)).catch(handleListError);
		});
		function onSelect(id) {
			router.replace({
				params: { reviewRequestId: id },
				query: route.query
			});
		}
		function onClearSelection() {
			router.replace({
				params: { reviewRequestId: "" },
				query: route.query
			});
		}
		function onActiveTabChange(tab) {
			const query = { ...route.query };
			if (tab === "closed") query[REVIEW_INBOX_QUERY_PARAM.state] = tab;
			else delete query[REVIEW_INBOX_QUERY_PARAM.state];
			router.replace({ query });
		}
		async function onLoadMore() {
			try {
				await store.loadMore();
			} catch (error) {
				await handleListError(error);
			}
		}
		const deciding = ref(false);
		function asSentence(message) {
			const trimmed = message.trim();
			return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
		}
		/**
		* A decision that closes the review drops its card from the open list, which
		* would leave the detail on screen with nothing selected in the sidebar. Follow
		* it to the closed tab instead, keeping the selection. The `state` query watcher
		* refetches the list from here.
		*/
		function followClosedReview(id) {
			if (activeTab.value === "closed") return;
			router.replace({
				params: { reviewRequestId: id },
				query: {
					...route.query,
					[REVIEW_INBOX_QUERY_PARAM.state]: "closed"
				}
			});
		}
		async function onDecide(id, decision) {
			deciding.value = true;
			try {
				const { autoPublish, state } = await store.decideOnReview(id, decision);
				if (state === "closed") followClosedReview(id);
				if (autoPublish?.status === "published") showMessage({
					type: "success",
					title: i18n.baseText("workflowReviews.decision.approved.published.title"),
					message: i18n.baseText("workflowReviews.decision.approved.published.message")
				});
				else if (autoPublish?.status === "failed") showMessage({
					type: "warning",
					duration: 0,
					title: i18n.baseText("workflowReviews.decision.approved.publishFailed.title"),
					message: i18n.baseText("workflowReviews.decision.approved.publishFailed.message", { interpolate: { message: asSentence(autoPublish.message) } })
				});
			} catch (error) {
				showError(error, i18n.baseText("workflowReviews.decision.error.title"));
				try {
					await Promise.all([store.fetchList({ reset: true }), selectedReviewId.value ? store.fetchDetail(selectedReviewId.value) : void 0]);
				} catch (refetchError) {
					handleListError(refetchError);
				}
			} finally {
				deciding.value = false;
			}
		}
		onMounted(async () => {
			isMounted = true;
			try {
				await store.probeInbox();
			} catch (error) {
				await handleListError(error);
			}
		});
		onUnmounted(() => {
			isMounted = false;
			store.reset();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PageViewLayout_default, { "data-test-id": "workflow-review-requests-view" }, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [unref(showSidebar) ? (openBlock(), createBlock(WorkflowReviewRequestsSidebar_default, {
					key: 0,
					items: unref(items),
					"active-tab": unref(activeTab),
					"open-count": unref(openCount),
					"closed-count": unref(closedCount),
					"selected-id": selectedReviewId.value,
					loading: unref(loading),
					"loading-more": unref(loadingMore),
					"has-more": unref(hasMore),
					"is-empty": unref(isEmpty),
					onSelect,
					onClear: onClearSelection,
					"onUpdate:activeTab": onActiveTabChange,
					onLoadMore
				}, null, 8, [
					"items",
					"active-tab",
					"open-count",
					"closed-count",
					"selected-id",
					"loading",
					"loading-more",
					"has-more",
					"is-empty"
				])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.main) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, [unref(showSidebar) && selectedItem.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "workflow-review-request-title"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(selectedItem.value.title), 1)]),
					_: 1
				})) : !unref(showSidebar) ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 1,
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "workflow-reviews-page-title"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.page.title")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainBody) }, [!unref(probeSettled) ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 0,
					loading: true,
					rows: 3
				})) : selectedReviewId.value && unref(detailNotFound) ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
					bold: "",
					tag: "h3",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.notFound.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.notFound.body")), 1)]),
					_: 1
				})])) : selectedReviewId.value && unref(detailLoading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 2,
					loading: true,
					rows: 3
				})) : selectedItem.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-review-request-detail-stub"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.placeholder")), 1)]),
					_: 1
				}), selectedItem.value.state === "open" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.decisionActions)
				}, [createVNode(unref(N8nButton_default), {
					disabled: deciding.value,
					"data-test-id": "workflow-review-approve-button",
					onClick: _cache[0] || (_cache[0] = ($event) => onDecide(selectedItem.value.id, "approved"))
				}, {
					default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Approve ", -1)])]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					type: "secondary",
					disabled: deciding.value,
					"data-test-id": "workflow-review-request-changes-button",
					onClick: _cache[1] || (_cache[1] = ($event) => onDecide(selectedItem.value.id, "changes_requested"))
				}, {
					default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Request changes ", -1)])]),
					_: 1
				}, 8, ["disabled"])], 2)) : createCommentVNode("", true)])) : !unref(showSidebar) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 4,
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-reviews-disclaimer"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.disclaimer.body")), 1)]),
					_: 1
				})) : unref(isEmpty) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 5,
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-reviews-empty-state"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`workflowReviews.emptyState.body.${unref(activeTab)}`)), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 6,
					color: "text-light",
					size: "medium",
					"data-test-id": "workflow-reviews-no-selection"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.noSelection.body")), 1)]),
					_: 1
				}))], 2)], 2)], 2)]),
				_: 1
			});
		};
	}
});
var WorkflowReviewRequestsView_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_13zmc_125",
	main: "_main_13zmc_133",
	columnTitle: "_columnTitle_13zmc_143",
	mainBody: "_mainBody_13zmc_150",
	decisionActions: "_decisionActions_13zmc_156"
};
var WorkflowReviewRequestsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowReviewRequestsView_default as default };
