import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, Mt as markRaw, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, Z as onUnmounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, jt as isRef, m as withKeys, rt as renderList, st as resolveDynamicComponent, ut as useId, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-ChH4gKEU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { y as useLocalStorage } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-CkIGinhL.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { t as N8nPopover_default } from "./N8nPopover-KufkLzBT.js";
import { t as N8nChatInput_default } from "./N8nChatInput-BOMwSAey.js";
import { t as N8nCallout_default } from "./N8nCallout-DqmF6S4S.js";
import { t as N8nBadge_default } from "./N8nBadge-DOliSzFF.js";
import { t as N8nLoading_default } from "./N8nLoading-COb2kWGg.js";
import { t as N8nAvatar_default } from "./N8nAvatar-Dfrs4IJZ.js";
import { t as N8nCard_default } from "./N8nCard-CEpSF4gP.js";
import { t as N8nHeading_default } from "./N8nHeading-BWV9gsOh.js";
import { c as useRouter, s as useRoute } from "./vue-router-Dl3cOHxO.js";
import { t as N8nLink_default } from "./N8nLink-DzyV3f-o.js";
import { t as N8nTabs_default } from "./N8nTabs-D1Q6GI32.js";
import { ct as WORKFLOW_REVIEW_TEXT_MAX_LENGTH, di as deepCopy, ta as require_isEqual } from "./src-JwBmTNgK.js";
import { Yn as ResponseError, fr as defineStore, mr as storeToRefs, t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as useUsersStore } from "./users.store-De0JUnse.js";
import { t as VIEWS } from "./views-o5a97N_l.js";
import { n as useToast } from "./useToast-D3cREU6j.js";
import { Yi as LOCAL_STORAGE_WORKFLOW_REVIEW_INBOX_COLLAPSED_SECTIONS } from "./constants-BP1FOJvU.js";
import { n as useDocumentTitle } from "./useDocumentTitle-dnwMqthf.js";
import { t as TimeAgo_default } from "./TimeAgo-BBRMVtfD.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-D_z8O5YL.js";
import { n as WORKFLOW_REVIEW_REQUESTS_VIEW, t as REVIEW_INBOX_QUERY_PARAM } from "./constants-D0jqx1AA.js";
import { c as fetchWorkflowReviewActivity, d as fetchWorkflowReviewRequestDetail, i as createWorkflowReviewComment, l as fetchWorkflowReviewInbox, n as formatUserDisplayName, o as decideWorkflowReviewRequest, r as toError, t as formatActorName, u as fetchWorkflowReviewInboxSummary } from "./workflowReviews.utils-C3-6v4Lh.js";
import { t as PageViewLayout_default } from "./PageViewLayout-DgTpx0Nu.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-BeOpgIu_.js";
import { t as require_omit } from "./omit-CHl8c-la.js";
//#region src/features/workflow-reviews/reviewActivity.store.ts
var DEFAULT_LIMIT$1 = 25;
/**
* The activity feed of one review. `entries` is ascending by id: the backend pages
* backwards, so `loadMore` prepends older pages and `postComment` appends.
*/
var useReviewActivityStore = defineStore("workflowReviewActivity", () => {
	const rootStore = useRootStore();
	const currentReviewId = ref(null);
	const entries = ref([]);
	const nextCursor = ref(null);
	const hasMore = ref(false);
	const loading = ref(false);
	const loadingMore = ref(false);
	const posting = ref(false);
	const error = ref(null);
	const draft = ref("");
	const decisionNote = ref("");
	let feedRequestSeq = 0;
	let postSeq = 0;
	async function fetchFeed(reviewId) {
		const requestSeq = ++feedRequestSeq;
		const switchedReview = currentReviewId.value !== reviewId;
		currentReviewId.value = reviewId;
		nextCursor.value = null;
		hasMore.value = false;
		loadingMore.value = false;
		loading.value = true;
		error.value = null;
		if (switchedReview) {
			entries.value = [];
			posting.value = false;
			draft.value = "";
			decisionNote.value = "";
		}
		try {
			const response = await fetchWorkflowReviewActivity(rootStore.restApiContext, reviewId, { limit: DEFAULT_LIMIT$1 });
			if (requestSeq !== feedRequestSeq) return;
			const newestInPage = Number(response.data.at(-1)?.id ?? 0);
			entries.value = [...response.data, ...entries.value.filter((entry) => Number(entry.id) > newestInPage)];
			nextCursor.value = response.nextCursor;
			hasMore.value = response.hasMore;
		} catch (e) {
			if (requestSeq !== feedRequestSeq) return;
			error.value = toError(e);
		} finally {
			if (requestSeq === feedRequestSeq) loading.value = false;
		}
	}
	async function loadMore() {
		const reviewId = currentReviewId.value;
		const cursor = nextCursor.value;
		if (!reviewId || !cursor || loading.value || loadingMore.value) return;
		const requestSeq = ++feedRequestSeq;
		loadingMore.value = true;
		error.value = null;
		try {
			const response = await fetchWorkflowReviewActivity(rootStore.restApiContext, reviewId, {
				limit: DEFAULT_LIMIT$1,
				cursor
			});
			if (requestSeq !== feedRequestSeq || currentReviewId.value !== reviewId) return;
			entries.value = [...response.data, ...entries.value];
			nextCursor.value = response.nextCursor;
			hasMore.value = response.hasMore && response.data.length > 0;
		} catch (e) {
			if (requestSeq !== feedRequestSeq || currentReviewId.value !== reviewId) return;
			error.value = toError(e);
		} finally {
			if (requestSeq === feedRequestSeq) loadingMore.value = false;
		}
	}
	/**
	* Resolves `false` when the viewer moved to another review while the post was in flight:
	* the comment was written, but nothing about it belongs on the review they are reading now.
	*/
	async function postComment(body) {
		const reviewId = currentReviewId.value;
		if (!reviewId) throw new Error("Cannot post a comment without a selected review");
		const requestSeq = ++postSeq;
		posting.value = true;
		try {
			const entry = await createWorkflowReviewComment(rootStore.restApiContext, reviewId, { body });
			if (currentReviewId.value !== reviewId) return false;
			entries.value = [...entries.value.filter((existing) => existing.id !== entry.id), entry];
			return true;
		} finally {
			if (requestSeq === postSeq) posting.value = false;
		}
	}
	/**
	* Clears the decision note, unless the viewer typed something else since the submit
	* `expected` came from — both callers await a request first.
	*/
	function clearDecisionNote(expected) {
		if (decisionNote.value.trim() === expected) decisionNote.value = "";
	}
	function reset() {
		feedRequestSeq += 1;
		currentReviewId.value = null;
		entries.value = [];
		nextCursor.value = null;
		hasMore.value = false;
		loading.value = false;
		loadingMore.value = false;
		posting.value = false;
		error.value = null;
		draft.value = "";
		decisionNote.value = "";
	}
	return {
		currentReviewId,
		entries,
		nextCursor,
		hasMore,
		loading,
		loadingMore,
		posting,
		error,
		draft,
		decisionNote,
		fetchFeed,
		loadMore,
		postComment,
		clearDecisionNote,
		reset
	};
});
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityComment.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["datetime"];
var WorkflowReviewActivityComment_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityComment",
	props: { entry: {} },
	setup(__props) {
		const i18n = useI18n();
		function authorName(message) {
			return formatActorName(message.createdBy, i18n.baseText("workflowReviews.detail.activity.unknownAuthor"));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.entry) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.entry.messages, (message) => {
				return openBlock(), createElementBlock("div", {
					key: message.id,
					class: normalizeClass(_ctx.$style.message)
				}, [createVNode(unref(N8nAvatar_default), {
					size: "xxsmall",
					class: normalizeClass(_ctx.$style.avatar),
					"first-name": message.createdBy?.firstName,
					"last-name": message.createdBy?.lastName
				}, null, 8, [
					"class",
					"first-name",
					"last-name"
				]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-base",
					class: normalizeClass(_ctx.$style.line),
					"data-test-id": "workflow-review-activity-comment-author"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(authorName(message)), 1)]),
					_: 2
				}, 1032, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createBaseVNode("time", {
						datetime: message.createdAt,
						"data-test-id": "workflow-review-activity-comment-time",
						class: normalizeClass(_ctx.$style.timeStamp)
					}, [createVNode(TimeAgo_default, { date: message.createdAt }, null, 8, ["date"])], 10, _hoisted_1$6)]),
					_: 2
				}, 1024)], 2), message.deletedAt ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.deleted),
					"data-test-id": "workflow-review-activity-comment-deleted"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.comment.deleted")), 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "medium",
					color: "text-light",
					class: normalizeClass([_ctx.$style.body, _ctx.$style.line]),
					"data-test-id": "workflow-review-activity-comment-body"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(message.body), 1)]),
					_: 2
				}, 1032, ["class"]))], 2)], 2);
			}), 128))], 2);
		};
	}
});
var WorkflowReviewActivityComment_vue_vue_type_style_index_0_lang_module_default = {
	entry: "_entry_3mpdd_135",
	message: "_message_3mpdd_145",
	avatar: "_avatar_3mpdd_151",
	content: "_content_3mpdd_156",
	header: "_header_3mpdd_163",
	line: "_line_3mpdd_170",
	timeStamp: "_timeStamp_3mpdd_174",
	body: "_body_3mpdd_178",
	deleted: "_deleted_3mpdd_183"
};
var WorkflowReviewActivityComment_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityComment_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityComment_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityFallback.vue
var WorkflowReviewActivityFallback_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "WorkflowReviewActivityFallback",
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nText_default), {
				size: "small",
				color: "text-light",
				"data-test-id": "workflow-review-activity-unknown"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.unknownEntry")), 1)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityEventEntry.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["datetime"];
var WorkflowReviewActivityEventEntry_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityEventEntry",
	props: { entry: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const closedReasonKeys = {
			"workflow-archived": "workflowReviews.detail.activity.closed.archived",
			"workflow-moved": "workflowReviews.detail.activity.closed.moved",
			"workflow-deleted": "workflowReviews.detail.activity.closed.deleted"
		};
		/**
		* Everything that varies by type, so a new type is one case rather than several. `null` only for
		* `review.closed`, whose sentence *is* the stored reason and so has nothing to fall back to. The
		* rest say what happened from the type alone, and an unreadable payload costs them only the note.
		*
		* `namesActor` follows the type, not a missing `createdBy`: that is also null for a decision
		* whose author was deleted, which must still read as that person's decision.
		*/
		const content = computed(() => {
			const entry = props.entry;
			switch (entry.type) {
				case "review.opened": return {
					text: i18n.baseText("workflowReviews.detail.activity.opened"),
					note: null,
					testId: "workflow-review-activity-opened",
					namesActor: true
				};
				case "review.changes_requested": return {
					text: i18n.baseText("workflowReviews.detail.activity.changesRequested"),
					note: entry.data?.note ?? null,
					testId: "workflow-review-activity-changes-requested",
					namesActor: true
				};
				case "review.approved": return {
					text: i18n.baseText("workflowReviews.detail.activity.approved"),
					note: entry.data?.note ?? null,
					testId: "workflow-review-activity-approved",
					namesActor: true
				};
				case "review.version_updated": return {
					text: i18n.baseText("workflowReviews.detail.activity.versionUpdated"),
					note: null,
					testId: "workflow-review-activity-version-updated",
					namesActor: true
				};
				case "review.closed":
					if (!entry.data) return null;
					return {
						text: i18n.baseText(closedReasonKeys[entry.data.reason]),
						note: null,
						testId: "workflow-review-activity-closed",
						namesActor: false
					};
			}
		});
		const actorName = computed(() => formatActorName(props.entry.createdBy, i18n.baseText("workflowReviews.detail.activity.unknownAuthor")));
		return (_ctx, _cache) => {
			return content.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.entry, content.value.note && _ctx.$style.boxed])
			}, [content.value.namesActor ? (openBlock(), createBlock(unref(N8nAvatar_default), {
				key: 0,
				size: "xxsmall",
				class: normalizeClass(_ctx.$style.avatar),
				"first-name": __props.entry.createdBy?.firstName,
				"last-name": __props.entry.createdBy?.lastName
			}, null, 8, [
				"class",
				"first-name",
				"last-name"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.avatarSpacer)
			}, null, 2)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headline) }, [
				content.value.namesActor ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "medium",
					color: "text-base",
					class: normalizeClass(_ctx.$style.line),
					"data-test-id": "workflow-review-activity-actor"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(actorName.value) + " ", 1), createBaseVNode("span", {
						"aria-hidden": "true",
						class: normalizeClass(_ctx.$style.separator)
					}, "|", 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					size: "medium",
					color: "text-base",
					class: normalizeClass(_ctx.$style.line),
					"data-test-id": content.value.testId
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(content.value.text), 1)]),
					_: 1
				}, 8, ["class", "data-test-id"]),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass([_ctx.$style.line, _ctx.$style.timeStamp])
				}, {
					default: withCtx(() => [createBaseVNode("time", { datetime: __props.entry.createdAt }, [createVNode(TimeAgo_default, { date: __props.entry.createdAt }, null, 8, ["date"])], 8, _hoisted_1$5)]),
					_: 1
				}, 8, ["class"])
			], 2), content.value.note ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				size: "medium",
				color: "text-light",
				class: normalizeClass([_ctx.$style.body, _ctx.$style.line]),
				"data-test-id": "workflow-review-activity-note"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(content.value.note), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2)], 2)) : (openBlock(), createBlock(WorkflowReviewActivityFallback_default, { key: 1 }));
		};
	}
});
var WorkflowReviewActivityEventEntry_vue_vue_type_style_index_0_lang_module_default = {
	entry: "_entry_b54kk_134",
	avatar: "_avatar_b54kk_140",
	avatarSpacer: "_avatarSpacer_b54kk_145",
	content: "_content_b54kk_150",
	headline: "_headline_b54kk_158",
	separator: "_separator_b54kk_165",
	timeStamp: "_timeStamp_b54kk_169",
	boxed: "_boxed_b54kk_174",
	line: "_line_b54kk_182",
	body: "_body_b54kk_186"
};
var WorkflowReviewActivityEventEntry_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityEventEntry_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityEventEntry_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activityEntryRegistry.ts
var registry = {
	"comment.created": { 1: WorkflowReviewActivityComment_default },
	"review.opened": { 1: WorkflowReviewActivityEventEntry_default },
	"review.changes_requested": { 1: WorkflowReviewActivityEventEntry_default },
	"review.approved": { 1: WorkflowReviewActivityEventEntry_default },
	"review.version_updated": { 1: WorkflowReviewActivityEventEntry_default },
	"review.closed": { 1: WorkflowReviewActivityEventEntry_default }
};
function resolveActivityComponent(entry) {
	return registry[entry.type]?.[entry.typeVersion] ?? WorkflowReviewActivityFallback_default;
}
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewActivityFeed.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["aria-label"];
var WorkflowReviewActivityFeed_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityFeed",
	setup(__props) {
		const i18n = useI18n();
		const store = useReviewActivityStore();
		const { entries, loading, loadingMore, hasMore, error } = storeToRefs(store);
		const scrollContainer = ref(null);
		const list = ref(null);
		const sentinel = ref(null);
		const initialScrollApplied = ref(false);
		let prependAnchor = null;
		function scrollToBottom() {
			const container = scrollContainer.value;
			if (container) container.scrollTop = container.scrollHeight;
		}
		const { observe } = useIntersectionObserver({
			root: scrollContainer,
			threshold: .01,
			onIntersect: () => {
				const element = list.value?.firstElementChild ?? null;
				prependAnchor = element ? {
					element,
					top: element.getBoundingClientRect().top
				} : null;
				store.loadMore();
			}
		});
		watch([
			sentinel,
			hasMore,
			loadingMore,
			() => entries.value.length
		], ([sentinelElement, moreToLoad, isLoadingMore]) => {
			if (sentinelElement && moreToLoad && !isLoadingMore) observe(sentinelElement);
		}, {
			immediate: true,
			flush: "post"
		});
		watch(entries, (next, previous) => {
			const anchor = prependAnchor?.element.isConnected === true ? prependAnchor : null;
			prependAnchor = null;
			if (next.length === 0) return;
			if (!previous || previous.length === 0) {
				scrollToBottom();
				return;
			}
			if (next[0]?.id !== previous[0]?.id) {
				const container = scrollContainer.value;
				if (!container || !anchor) {
					scrollToBottom();
					return;
				}
				container.scrollTop += anchor.element.getBoundingClientRect().top - anchor.top;
				return;
			}
			if (next.at(-1)?.id !== previous.at(-1)?.id) scrollToBottom();
		}, { flush: "post" });
		function retry() {
			if (!store.nextCursor) {
				if (store.currentReviewId) store.fetchFeed(store.currentReviewId);
				return;
			}
			store.loadMore();
		}
		onMounted(() => {
			if (entries.value.length > 0) scrollToBottom();
			initialScrollApplied.value = true;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "scrollContainer",
				ref: scrollContainer,
				class: normalizeClass(_ctx.$style.feed),
				"data-test-id": "workflow-review-activity-feed"
			}, [_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true), unref(loading) && unref(entries).length === 0 ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 1,
				loading: true,
				rows: 3
			})) : unref(error) && unref(entries).length === 0 ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.errorRow),
				"data-test-id": "workflow-review-activity-error"
			}, [createVNode(unref(N8nText_default), {
				color: "text-light",
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.error.load")), 1)]),
				_: 1
			}), createVNode(unref(N8nButton_default), {
				size: "mini",
				variant: "ghost",
				"data-test-id": "workflow-review-activity-retry",
				onClick: _cache[0] || (_cache[0] = ($event) => retry())
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
				initialScrollApplied.value && unref(hasMore) && !unref(error) ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "sentinel",
					ref: sentinel,
					class: normalizeClass(_ctx.$style.sentinel),
					"data-test-id": "workflow-review-activity-load-more-sentinel"
				}, null, 2)) : createCommentVNode("", true),
				unref(loadingMore) || unref(loading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 1,
					loading: true,
					rows: 1
				})) : createCommentVNode("", true),
				unref(error) ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.errorRow)
				}, [createVNode(unref(N8nText_default), {
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.error.load")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					size: "mini",
					variant: "ghost",
					"data-test-id": "workflow-review-activity-load-more-retry",
					onClick: _cache[1] || (_cache[1] = ($event) => retry())
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.retry")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createVNode(unref(N8nText_default), {
					bold: "",
					color: "text-light",
					size: "medium",
					class: normalizeClass(_ctx.$style.header)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.tabs.activity")), 1)]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", {
					ref_key: "list",
					ref: list,
					role: "list",
					"aria-label": unref(i18n).baseText("workflowReviews.detail.activity.listLabel"),
					class: normalizeClass(_ctx.$style.list)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(entries), (entry) => {
					return openBlock(), createElementBlock("div", {
						key: entry.id,
						role: "listitem",
						class: normalizeClass(_ctx.$style.item),
						"data-test-id": "workflow-review-activity-entry"
					}, [(openBlock(), createBlock(resolveDynamicComponent(unref(resolveActivityComponent)(entry)), { entry }, null, 8, ["entry"]))], 2);
				}), 128))], 10, _hoisted_1$4)
			], 64))], 2);
		};
	}
});
var WorkflowReviewActivityFeed_vue_vue_type_style_index_0_lang_module_default = {
	feed: "_feed_13hu8_125",
	header: "_header_13hu8_144",
	list: "_list_13hu8_149",
	item: "_item_13hu8_164",
	errorRow: "_errorRow_13hu8_182",
	sentinel: "_sentinel_13hu8_189"
};
var WorkflowReviewActivityFeed_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityFeed_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityFeed_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewChangesSection.vue?vue&type=script&setup=true&lang.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_omit = /* @__PURE__ */ __toESM(require_omit(), 1);
var WorkflowReviewChangesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewChangesSection",
	props: { workflow: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		/**
		* Label each side the way version history does, falling back to a short id.
		* Falsy rather than nullish: the publish endpoints accept `name: ""`.
		*/
		const versionLabel = (snapshot) => snapshot.name || snapshot.versionId.slice(0, 8);
		/**
		* A snapshot minus its identity and metadata — i.e. everything the diff renders.
		* Derived by omission rather than an explicit field list to avoid drift; renaming
		* a version must not read as a change.
		*/
		function contentOf(snapshot) {
			return (0, import_omit.default)(snapshot, [
				"versionId",
				"name",
				"createdAt"
			]);
		}
		const hasChanges = computed(() => {
			const { pinnedVersion, baselineVersion } = props.workflow;
			if (!pinnedVersion) return false;
			if (!baselineVersion) return true;
			if (pinnedVersion.versionId === baselineVersion.versionId) return false;
			return !(0, import_isEqual.default)(contentOf(baselineVersion), contentOf(pinnedVersion));
		});
		function snapshotToWorkflow(snapshot) {
			return markRaw(deepCopy({
				id: props.workflow.workflowId,
				name: props.workflow.workflowName,
				active: false,
				isArchived: false,
				createdAt: snapshot.createdAt,
				updatedAt: snapshot.createdAt,
				versionId: snapshot.versionId,
				activeVersionId: null,
				nodes: snapshot.nodes,
				connections: snapshot.connections,
				nodeGroups: snapshot.nodeGroups
			}));
		}
		const sourceWorkflow = computed(() => props.workflow.baselineVersion ? snapshotToWorkflow(props.workflow.baselineVersion) : void 0);
		const targetWorkflow = computed(() => props.workflow.pinnedVersion ? snapshotToWorkflow(props.workflow.pinnedVersion) : void 0);
		const sourceLabel = computed(() => props.workflow.baselineVersion ? i18n.baseText("workflowReviews.changes.sourceLabel", { interpolate: { version: versionLabel(props.workflow.baselineVersion) } }) : void 0);
		const targetLabel = computed(() => props.workflow.pinnedVersion ? i18n.baseText("workflowReviews.changes.targetLabel", { interpolate: { version: versionLabel(props.workflow.pinnedVersion) } }) : void 0);
		return (_ctx, _cache) => {
			return !__props.workflow.pinnedVersion ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-version-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.versionUnavailable.body")), 1)]),
				_: 1
			}, 8, ["class"])) : !hasChanges.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "info",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-no-changes"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.noChanges")), 1)]),
				_: 1
			}, 8, ["class"])) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.diff),
				"data-test-id": "workflow-review-changes-diff"
			}, [createVNode(WorkflowDiffView_default, {
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": sourceLabel.value,
				"target-label": targetLabel.value
			}, createSlots({
				targetLabel: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.versionBadge),
					"data-test-id": "workflow-review-changes-target-label"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style.statusDotInReview]) }, null, 2), createVNode(unref(N8nText_default), {
					color: "text-dark",
					size: "small",
					compact: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(targetLabel.value), 1)]),
					_: 1
				})], 2)]),
				sourceEmptyText: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.firstPublish.sourceEmpty")), 1)]),
				_: 2
			}, [__props.workflow.baselineVersion ? {
				name: "sourceLabel",
				fn: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.versionBadge),
					"data-test-id": "workflow-review-changes-source-label"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style.statusDotPublished]) }, null, 2), createVNode(unref(N8nText_default), {
					color: "text-dark",
					size: "small",
					compact: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sourceLabel.value), 1)]),
					_: 1
				})], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label"
			])], 2));
		};
	}
});
var WorkflowReviewChangesSection_vue_vue_type_style_index_0_lang_module_default = {
	callout: "_callout_1n3ai_125",
	versionBadge: "_versionBadge_1n3ai_129 _sourceBadge_1jo27_3",
	statusDot: "_statusDot_1n3ai_133",
	statusDotPublished: "_statusDotPublished_1n3ai_141",
	statusDotInReview: "_statusDotInReview_1n3ai_145",
	diff: "_diff_1n3ai_149"
};
var WorkflowReviewChangesSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewChangesSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewChangesSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewCommentComposer.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewCommentComposer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewCommentComposer",
	props: { canComment: { type: Boolean } },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const { showError } = useToast();
		const store = useReviewActivityStore();
		const { posting, draft } = storeToRefs(store);
		const submitDisabled = computed(() => posting.value || draft.value.trim().length === 0 || draft.value.length > 1e4 || !props.canComment);
		async function onSubmit() {
			const submitted = draft.value;
			const body = submitted.trim();
			if (!body) return;
			try {
				if (await store.postComment(body) && draft.value === submitted) draft.value = "";
			} catch (error) {
				showError(error, i18n.baseText("workflowReviews.detail.activity.error.post"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("label", { class: normalizeClass(_ctx.$style.composer) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.srOnly) }, toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.composer.label")), 3), createVNode(unref(N8nChatInput_default), {
				modelValue: unref(draft),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(draft) ? draft.value = $event : null),
				"max-length": unref(WORKFLOW_REVIEW_TEXT_MAX_LENGTH),
				placeholder: unref(i18n).baseText("workflowReviews.detail.activity.composer.placeholder"),
				"refocus-after-send": "",
				disabled: !__props.canComment,
				"disabled-tooltip": unref(i18n).baseText("workflowReviews.detail.activity.composer.notAllowed"),
				"submit-disabled": submitDisabled.value,
				"data-test-id": "workflow-review-comment-composer",
				onSubmit
			}, null, 8, [
				"modelValue",
				"max-length",
				"placeholder",
				"disabled",
				"disabled-tooltip",
				"submit-disabled"
			])], 2);
		};
	}
});
var WorkflowReviewCommentComposer_vue_vue_type_style_index_0_lang_module_default = {
	composer: "_composer_15urq_125",
	srOnly: "_srOnly_15urq_132"
};
var WorkflowReviewCommentComposer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewCommentComposer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewCommentComposer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewDecisionPopover.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { key: 0 };
var WorkflowReviewDecisionPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDecisionPopover",
	props: {
		deciding: { type: Boolean },
		viewerCanDecide: { type: Boolean },
		viewerCanComment: { type: Boolean },
		ineligibilityHint: {}
	},
	emits: ["decide", "comment-posted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const { showError } = useToast();
		const store = useReviewActivityStore();
		const { posting, decisionNote } = storeToRefs(store);
		const isOpen = ref(false);
		const noteInputId = useId();
		const note = computed(() => decisionNote.value.trim());
		const commentDisabled = computed(() => posting.value || props.deciding || note.value.length === 0 || !props.viewerCanComment);
		const decisionDisabled = computed(() => props.deciding || posting.value);
		function submitDecision(input) {
			isOpen.value = false;
			emit("decide", input);
		}
		function onRequestChanges() {
			submitDecision({
				decision: "changes_requested",
				note: note.value
			});
		}
		function onApprove() {
			submitDecision(note.value ? {
				decision: "approved",
				note: note.value
			} : { decision: "approved" });
		}
		async function onComment() {
			const body = note.value;
			isOpen.value = false;
			try {
				if (!await store.postComment(body)) return;
				store.clearDecisionNote(body);
				emit("comment-posted");
			} catch (error) {
				showError(error, i18n.baseText("workflowReviews.detail.activity.error.post"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: isOpen.value,
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => isOpen.value = $event),
				side: "bottom",
				align: "end",
				width: "480px",
				"enable-scrolling": false,
				"content-class": _ctx.$style.popover
			}, {
				trigger: withCtx(() => [__props.ineligibilityHint ? (openBlock(), createElementBlock("span", _hoisted_1$3, [createVNode(unref(N8nTooltip_default), {
					content: __props.ineligibilityHint,
					"show-after": 300
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "small",
						disabled: __props.deciding || !__props.viewerCanDecide,
						"data-test-id": "workflow-review-decision-trigger"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.trigger")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "chevron-down" })]),
						_: 1
					}, 8, ["disabled"])]),
					_: 1
				}, 8, ["content"])])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					size: "small",
					disabled: __props.deciding || !__props.viewerCanDecide,
					"data-test-id": "workflow-review-decision-trigger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.trigger")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "chevron-down" })]),
					_: 1
				}, 8, ["disabled"]))]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "workflow-review-decision-popover"
				}, [createVNode(unref(Input_default), {
					id: unref(noteInputId),
					"aria-label": unref(i18n).baseText("workflowReviews.detail.decision.note.label"),
					modelValue: unref(decisionNote),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(decisionNote) ? decisionNote.value = $event : null),
					type: "textarea",
					rows: 3,
					maxlength: unref(WORKFLOW_REVIEW_TEXT_MAX_LENGTH),
					placeholder: unref(i18n).baseText("workflowReviews.detail.activity.composer.placeholder"),
					"data-test-id": "workflow-review-decision-note"
				}, null, 8, [
					"id",
					"aria-label",
					"modelValue",
					"maxlength",
					"placeholder"
				]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						disabled: commentDisabled.value,
						"data-test-id": "workflow-review-decision-comment-button",
						onClick: onComment
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "message-square" })]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.comment")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					createVNode(unref(N8nTooltip_default), {
						disabled: !!note.value,
						content: unref(i18n).baseText("workflowReviews.detail.decision.note.required"),
						"show-after": 300
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "small",
							disabled: !note.value || decisionDisabled.value,
							"data-test-id": "workflow-review-decision-request-changes-button",
							onClick: onRequestChanges
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "refresh-cw" })]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.requestChanges")), 1)]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["disabled", "content"]),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						disabled: decisionDisabled.value,
						"data-test-id": "workflow-review-decision-approve-button",
						onClick: onApprove
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "check" })]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.approveAndPublish")), 1)]),
						_: 1
					}, 8, ["disabled"])
				], 2)], 2)]),
				_: 1
			}, 8, ["open", "content-class"]);
		};
	}
});
var WorkflowReviewDecisionPopover_vue_vue_type_style_index_0_lang_module_default = {
	popover: "_popover_2tx4s_125",
	content: "_content_2tx4s_129",
	actions: "_actions_2tx4s_135"
};
var WorkflowReviewDecisionPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDecisionPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDecisionPopover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
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
			const variant = props.state === "open" ? props.decision : props.decision === "approved" ? "approved" : "closed";
			const label = variant === "closed" ? i18n.baseText("workflowReviews.status.closed") : i18n.baseText(`workflowReviews.decision.${variant}`);
			return {
				colorClass: variant === "changes_requested" ? "changesRequested" : variant,
				label
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				content: status.value.label,
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.dot, _ctx.$style[status.value.colorClass]]),
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
//#region src/features/workflow-reviews/components/WorkflowReviewDetailMetadata.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewDetailMetadata_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDetailMetadata",
	props: { review: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const detail = computed(() => "workflows" in props.review ? props.review : null);
		const otherAuthors = computed(() => props.review.authors.filter((author) => author.id !== props.review.requester?.id));
		const statusSummary = computed(() => {
			const { state, decision } = props.review;
			return i18n.baseText("workflowReviews.detail.metadata.state.combinedLabel", { interpolate: {
				state: i18n.baseText(`workflowReviews.status.${state}`),
				status: i18n.baseText(`workflowReviews.decision.${decision}`)
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass(_ctx.$style.metadata),
				"data-test-id": "workflow-review-detail-metadata"
			}, [
				createVNode(unref(N8nCard_default), {
					class: normalizeClass(_ctx.$style.card),
					"data-test-id": "workflow-review-detail-status-card"
				}, {
					header: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.status")), 1)]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.status) }, [createVNode(WorkflowReviewStatusDot_default, {
						state: __props.review.state,
						decision: __props.review.decision
					}, null, 8, ["state", "decision"]), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(statusSummary.value), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nCard_default), {
					class: normalizeClass([_ctx.$style.card, _ctx.$style.peopleCard]),
					"data-test-id": "workflow-review-detail-people-card"
				}, {
					default: withCtx(() => [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createVNode(unref(N8nText_default), {
							bold: "",
							color: "text-light",
							size: "medium"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.requestedBy")), 1)]),
							_: 1
						}), __props.review.requester ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.person)
						}, [createVNode(unref(N8nAvatar_default), {
							"first-name": __props.review.requester.firstName,
							"last-name": __props.review.requester.lastName,
							size: "xsmall"
						}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(__props.review.requester)), 1)]),
							_: 1
						})], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
							key: 1,
							color: "text-light",
							size: "medium",
							"data-test-id": "workflow-review-detail-requester-deleted"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.requesterDeleted")), 1)]),
							_: 1
						}))], 2),
						otherAuthors.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.section),
							"data-test-id": "workflow-review-detail-other-authors"
						}, [createVNode(unref(N8nText_default), {
							bold: "",
							color: "text-light",
							size: "medium"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.otherAuthors")), 1)]),
							_: 1
						}), (openBlock(true), createElementBlock(Fragment, null, renderList(otherAuthors.value, (author) => {
							return openBlock(), createElementBlock("div", {
								key: author.id,
								class: normalizeClass(_ctx.$style.person)
							}, [createVNode(unref(N8nAvatar_default), {
								"first-name": author.firstName,
								"last-name": author.lastName,
								size: "xsmall"
							}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "medium" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(author)), 1)]),
								_: 2
							}, 1024)], 2);
						}), 128))], 2)) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [
							createVNode(unref(N8nText_default), {
								bold: "",
								color: "text-light",
								size: "medium"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.reviewers")), 1)]),
								_: 1
							}),
							(openBlock(true), createElementBlock(Fragment, null, renderList(__props.review.reviewers, (reviewer) => {
								return openBlock(), createElementBlock("div", {
									key: reviewer.id,
									class: normalizeClass(_ctx.$style.person)
								}, [createVNode(unref(N8nAvatar_default), {
									"first-name": reviewer.firstName,
									"last-name": reviewer.lastName,
									size: "xsmall"
								}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "medium" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(reviewer)), 1)]),
									_: 2
								}, 1024)], 2);
							}), 128)),
							__props.review.reviewers.length === 0 ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								color: "text-light",
								size: "medium",
								"data-test-id": "workflow-review-detail-no-reviewers"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.noReviewers")), 1)]),
								_: 1
							})) : createCommentVNode("", true)
						], 2)
					]),
					_: 1
				}, 8, ["class"]),
				detail.value?.workflows.length ? (openBlock(), createBlock(unref(N8nCard_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.card),
					"data-test-id": "workflow-review-detail-changes-card"
				}, {
					header: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.workflow")), 1)]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.workflows) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(detail.value.workflows, (workflow) => {
						return openBlock(), createBlock(unref(N8nLink_default), {
							key: workflow.workflowId,
							to: {
								name: unref(VIEWS).WORKFLOW,
								params: { workflowId: workflow.workflowId }
							},
							theme: "text",
							size: "medium",
							class: normalizeClass(_ctx.$style.workflow),
							"data-test-id": "workflow-review-detail-workflow-link"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "workflow",
								size: "medium",
								class: normalizeClass(_ctx.$style.workflowIcon)
							}, null, 8, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.workflowName) }, toDisplayString(workflow.workflowName), 3)]),
							_: 2
						}, 1032, ["to", "class"]);
					}), 128))], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var WorkflowReviewDetailMetadata_vue_vue_type_style_index_0_lang_module_default = {
	metadata: "_metadata_2ho9i_125",
	card: "_card_2ho9i_134",
	status: "_status_2ho9i_145",
	section: "_section_2ho9i_151",
	workflows: "_workflows_2ho9i_152",
	peopleCard: "_peopleCard_2ho9i_159",
	person: "_person_2ho9i_163",
	workflow: "_workflow_2ho9i_152",
	workflowName: "_workflowName_2ho9i_183",
	workflowIcon: "_workflowIcon_2ho9i_190"
};
var WorkflowReviewDetailMetadata_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDetailMetadata_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDetailMetadata_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewDetailTabs.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewDetailTabs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewDetailTabs",
	props: {
		review: {},
		tab: {},
		deciding: { type: Boolean }
	},
	emits: ["update:tab", "decide"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const detail = computed(() => "workflows" in props.review ? props.review : null);
		const viewerCanDecide = computed(() => detail.value?.viewerCanDecide ?? false);
		const viewerCanComment = computed(() => detail.value?.viewerCanComment ?? false);
		const ineligibilityHint = computed(() => {
			if (!detail.value || detail.value.viewerCanDecide) return "";
			return detail.value.viewerDecisionIneligibilityReason === "author" ? i18n.baseText("workflowReviews.detail.decision.ineligible.author") : i18n.baseText("generic.missing.permissions");
		});
		const tabOptions = computed(() => [{
			label: i18n.baseText("workflowReviews.detail.tabs.activity"),
			value: "activity"
		}, {
			label: i18n.baseText("workflowReviews.detail.tabs.changes"),
			value: "changes"
		}]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "workflow-review-detail-tabs"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabRow) }, [createVNode(unref(N8nTabs_default), {
				"model-value": __props.tab,
				options: tabOptions.value,
				variant: "modern",
				"data-test-id": "workflow-review-detail-tab-bar",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:tab", $event))
			}, null, 8, ["model-value", "options"]), detail.value?.state === "open" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.decisionActions)
			}, [createVNode(WorkflowReviewDecisionPopover_default, {
				deciding: __props.deciding,
				"viewer-can-decide": viewerCanDecide.value,
				"viewer-can-comment": viewerCanComment.value,
				"ineligibility-hint": ineligibilityHint.value,
				onDecide: _cache[1] || (_cache[1] = ($event) => emit("decide", $event)),
				onCommentPosted: _cache[2] || (_cache[2] = ($event) => emit("update:tab", "activity"))
			}, null, 8, [
				"deciding",
				"viewer-can-decide",
				"viewer-can-comment",
				"ineligibility-hint"
			])], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.detailBody) }, [__props.tab === "activity" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.activityPanel),
				"data-test-id": "workflow-review-activity-panel"
			}, [(openBlock(), createBlock(WorkflowReviewActivityFeed_default, { key: __props.review.id }, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.descriptionCard) }, [createVNode(unref(N8nText_default), {
					tag: "h3",
					bold: "",
					color: "text-light",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.description")), 1)]),
					_: 1
				}), detail.value?.description ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "text-base",
					size: "medium",
					class: normalizeClass(_ctx.$style.description),
					"data-test-id": "workflow-review-description"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(detail.value.description), 1)]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-light",
					size: "medium",
					class: normalizeClass(_ctx.$style.noDescription),
					"data-test-id": "workflow-review-no-description"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.noDescription")), 1)]),
					_: 1
				}, 8, ["class"]))], 2)]),
				_: 1
			})), createVNode(WorkflowReviewCommentComposer_default, { "can-comment": viewerCanComment.value }, null, 8, ["can-comment"])], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.panel),
				"data-test-id": "workflow-review-changes-panel"
			}, [__props.review.state === "closed" ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "info",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-closed"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.closed.body")), 1)]),
				_: 1
			}, 8, ["class"])) : !detail.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.unavailable")), 1)]),
				_: 1
			}, 8, ["class"])) : detail.value.workflows.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(detail.value.workflows, (workflow) => {
				return openBlock(), createBlock(WorkflowReviewChangesSection_default, {
					key: workflow.workflowId,
					workflow
				}, null, 8, ["workflow"]);
			}), 128)) : (openBlock(), createBlock(unref(N8nText_default), {
				key: 3,
				color: "text-light",
				size: "medium",
				"data-test-id": "workflow-review-changes-empty"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.empty")), 1)]),
				_: 1
			}))], 2)), createVNode(WorkflowReviewDetailMetadata_default, { review: __props.review }, null, 8, ["review"])], 2)], 2);
		};
	}
});
var WorkflowReviewDetailTabs_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1hdgf_134",
	tabRow: "_tabRow_1hdgf_141",
	detailBody: "_detailBody_1hdgf_148",
	panel: "_panel_1hdgf_156",
	activityPanel: "_activityPanel_1hdgf_164",
	descriptionCard: "_descriptionCard_1hdgf_174",
	callout: "_callout_1hdgf_184",
	description: "_description_1hdgf_174",
	noDescription: "_noDescription_1hdgf_195",
	decisionActions: "_decisionActions_1hdgf_199"
};
var WorkflowReviewDetailTabs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDetailTabs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDetailTabs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/composables/useReviewInboxSectionCollapse.ts
var DEFAULT_COLLAPSED = {
	waiting: false,
	authored: false
};
/**
* Which inbox sections are collapsed, persisted per user. Collapsing only hides
* rows — the store keeps the loaded items and their cursors, so re-expanding
* never refetches.
*/
var useReviewInboxSectionCollapse = () => {
	const userId = useUsersStore().currentUserId;
	const collapsedSections = userId ? useLocalStorage(LOCAL_STORAGE_WORKFLOW_REVIEW_INBOX_COLLAPSED_SECTIONS(userId), { ...DEFAULT_COLLAPSED }, { writeDefaults: false }) : ref({ ...DEFAULT_COLLAPSED });
	function isCollapsed(section) {
		return collapsedSections.value[section] ?? false;
	}
	function toggleSection(section) {
		collapsedSections.value = {
			...collapsedSections.value,
			[section]: !isCollapsed(section)
		};
	}
	return {
		collapsedSections,
		isCollapsed,
		toggleSection
	};
};
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewRequestsSidebar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = [
	"id",
	"aria-expanded",
	"aria-controls",
	"data-section",
	"onClick"
];
var _hoisted_2 = [
	"id",
	"aria-labelledby",
	"aria-label"
];
var _hoisted_3 = ["title"];
var _hoisted_4 = ["data-section"];
var WorkflowReviewRequestsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequestsSidebar",
	props: {
		sections: {},
		activeTab: {},
		openCount: {},
		closedCount: {},
		selectedId: {}
	},
	emits: [
		"select",
		"clear",
		"update:activeTab",
		"loadMore",
		"retry"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const usersStore = useUsersStore();
		const { isCollapsed, toggleSection } = useReviewInboxSectionCollapse();
		/**
		* Admins see every review, including ones nobody assigned them, so "Waiting for
		* your review" would wrongly claim they are blocking.
		*/
		const usesImpersonalWaitingLabels = computed(() => usersStore.isAdminOrOwner);
		function sectionTitle(key) {
			return key === "waiting" && usesImpersonalWaitingLabels.value ? i18n.baseText("workflowReviews.sidebar.section.waiting.titleAdmin") : i18n.baseText(`workflowReviews.sidebar.section.${key}.title`);
		}
		function sectionEmptyText(key) {
			return key === "waiting" && usesImpersonalWaitingLabels.value ? i18n.baseText("workflowReviews.sidebar.section.waiting.emptyAdmin") : i18n.baseText(`workflowReviews.sidebar.section.${key}.empty`);
		}
		const listRef = ref(null);
		const loadMoreSentinel = ref(null);
		const tabOptions = computed(() => [{
			label: i18n.baseText("workflowReviews.sidebar.tabs.open"),
			value: "open",
			tag: String(props.openCount)
		}, {
			label: i18n.baseText("workflowReviews.sidebar.tabs.closed"),
			value: "closed",
			tag: String(props.closedCount)
		}]);
		function isCollapsibleSection(key) {
			return key !== "closed";
		}
		const groups = computed(() => props.sections.map((section) => {
			const collapsibleKey = isCollapsibleSection(section.key) ? section.key : null;
			return {
				key: section.key,
				section,
				collapsible: collapsibleKey !== null,
				title: collapsibleKey ? sectionTitle(collapsibleKey) : null,
				emptyText: collapsibleKey ? sectionEmptyText(collapsibleKey) : i18n.baseText("workflowReviews.sidebar.empty.closed"),
				collapsed: collapsibleKey !== null && isCollapsed(collapsibleKey),
				headerId: `workflow-review-section-header-${section.key}`,
				groupId: `workflow-review-section-group-${section.key}`,
				isEmpty: !section.loading && section.error === null && section.items.length === 0
			};
		}));
		/** The closed tab keeps infinite scroll; the open tab loads more explicitly. */
		const closedSentinelActive = computed(() => props.sections.length === 1 && props.sections[0].key === "closed");
		const { observe: observeForLoadMore } = useIntersectionObserver({
			root: listRef,
			threshold: .01,
			onIntersect: () => emit("loadMore", "closed")
		});
		watch([
			loadMoreSentinel,
			closedSentinelActive,
			() => props.sections[0]?.hasMore,
			() => props.sections[0]?.loadingMore,
			() => props.sections[0]?.items.length
		], ([sentinel, sentinelActive, hasMore, loadingMore]) => {
			if (sentinel && sentinelActive && hasMore && !loadingMore) observeForLoadMore(sentinel);
		}, {
			immediate: true,
			flush: "post"
		});
		function onTabChange(value) {
			emit("update:activeTab", String(value));
		}
		function onSectionHeaderClick(key) {
			if (isCollapsibleSection(key)) toggleSection(key);
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
					variant: "modern",
					"data-test-id": "workflow-reviews-tabs",
					"onUpdate:modelValue": onTabChange
				}, null, 8, ["model-value", "options"])], 2),
				createBaseVNode("div", {
					ref_key: "listRef",
					ref: listRef,
					class: normalizeClass(_ctx.$style.list),
					onClick: withModifiers(onListBackgroundClick, ["self"])
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group) => {
					return openBlock(), createElementBlock("div", {
						key: group.key,
						class: normalizeClass(_ctx.$style.section)
					}, [
						group.title ? (openBlock(), createElementBlock("button", {
							key: 0,
							id: group.headerId,
							type: "button",
							class: normalizeClass(_ctx.$style.sectionHeader),
							"aria-expanded": !group.collapsed,
							"aria-controls": group.groupId,
							"data-section": group.key,
							"data-test-id": "workflow-review-section-header",
							onClick: ($event) => onSectionHeaderClick(group.key)
						}, [createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							size: "small",
							class: normalizeClass([_ctx.$style.chevron, { [_ctx.$style.chevronCollapsed]: group.collapsed }])
						}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
							bold: "",
							size: "small",
							color: "text-base"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(group.title), 1)]),
							_: 2
						}, 1024)], 10, _hoisted_1$1)) : createCommentVNode("", true),
						createBaseVNode("div", {
							id: group.groupId,
							role: "listbox",
							class: normalizeClass(_ctx.$style.group),
							"aria-labelledby": group.title ? group.headerId : void 0,
							"aria-label": group.title ? void 0 : unref(i18n).baseText("workflowReviews.sidebar.tabs.closed")
						}, [!group.collapsed ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(group.section.items, (item) => {
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
									}), createBaseVNode("span", null, toDisplayString(item.workflowName), 1)], 10, _hoisted_3)]),
									_: 2
								}, 1032, ["class"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardMetaActions) }, [createVNode(unref(N8nText_default), {
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
						}), 128)) : createCommentVNode("", true)], 10, _hoisted_2),
						!group.collapsed ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
							group.section.loading ? (openBlock(), createBlock(unref(N8nLoading_default), {
								key: 0,
								loading: true,
								rows: 3,
								"data-section": group.key,
								"data-test-id": "workflow-review-section-skeleton"
							}, null, 8, ["data-section"])) : group.isEmpty ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 1,
								color: "text-light",
								size: "small",
								"data-section": group.key,
								"data-test-id": "workflow-review-section-empty"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(group.emptyText), 1)]),
								_: 2
							}, 1032, ["data-section"])) : createCommentVNode("", true),
							group.section.loadingMore ? (openBlock(), createElementBlock("div", {
								key: 2,
								class: normalizeClass(_ctx.$style.loadingMore)
							}, [createVNode(unref(N8nLoading_default), {
								loading: true,
								rows: 1
							})], 2)) : createCommentVNode("", true),
							group.section.error ? (openBlock(), createElementBlock("div", {
								key: 3,
								class: normalizeClass(_ctx.$style.sectionError),
								"data-section": group.key,
								"data-test-id": "workflow-review-section-error"
							}, [createVNode(unref(N8nText_default), {
								color: "danger",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.sidebar.error")), 1)]),
								_: 1
							}), createVNode(unref(N8nButton_default), {
								variant: "subtle",
								size: "mini",
								label: unref(i18n).baseText("workflowReviews.sidebar.retry"),
								"data-section": group.key,
								"data-test-id": "workflow-review-section-retry",
								onClick: ($event) => emit("retry", group.key)
							}, null, 8, [
								"label",
								"data-section",
								"onClick"
							])], 10, _hoisted_4)) : createCommentVNode("", true),
							group.collapsible && group.section.hasMore ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 4,
								variant: "subtle",
								size: "small",
								class: normalizeClass(_ctx.$style.loadMoreButton),
								label: unref(i18n).baseText("workflowReviews.sidebar.loadMore"),
								loading: group.section.loadingMore,
								"data-section": group.key,
								"data-test-id": "workflow-review-section-load-more",
								onClick: ($event) => emit("loadMore", group.key)
							}, null, 8, [
								"class",
								"label",
								"loading",
								"data-section",
								"onClick"
							])) : createCommentVNode("", true)
						], 64)) : createCommentVNode("", true)
					], 2);
				}), 128)), closedSentinelActive.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "loadMoreSentinel",
					ref: loadMoreSentinel,
					class: normalizeClass(_ctx.$style.sentinel)
				}, null, 2)) : createCommentVNode("", true)], 2)
			], 2);
		};
	}
});
var WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sidebar: "_sidebar_1xnbf_125",
	columnTitle: "_columnTitle_1xnbf_136",
	header: "_header_1xnbf_143",
	list: "_list_1xnbf_151",
	section: "_section_1xnbf_161",
	group: "_group_1xnbf_168",
	sectionHeader: "_sectionHeader_1xnbf_175",
	chevron: "_chevron_1xnbf_194",
	chevronCollapsed: "_chevronCollapsed_1xnbf_199",
	sectionError: "_sectionError_1xnbf_203",
	card: "_card_1xnbf_211",
	cardSelected: "_cardSelected_1xnbf_218",
	cardContent: "_cardContent_1xnbf_231",
	cardHeader: "_cardHeader_1xnbf_240",
	cardTitle: "_cardTitle_1xnbf_249",
	cardMeta: "_cardMeta_1xnbf_257",
	cardMetaActions: "_cardMetaActions_1xnbf_266",
	cardMetaTime: "_cardMetaTime_1xnbf_274",
	workflowBadge: "_workflowBadge_1xnbf_278",
	workflowBadgeText: "_workflowBadgeText_1xnbf_290",
	loadMoreButton: "_loadMoreButton_1xnbf_305",
	loadingMore: "_loadingMore_1xnbf_309",
	sentinel: "_sentinel_1xnbf_313"
};
var WorkflowReviewRequestsSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/reviewInbox.store.ts
var DEFAULT_LIMIT = 15;
/**
* One keyset-paginated list. State is per slice on purpose: a section that fails
* or is still loading must not blank out its sibling.
*/
function createInboxListSlice(requestPage) {
	const items = ref([]);
	const nextCursor = ref(null);
	const hasMore = ref(false);
	const loading = ref(false);
	const loadingMore = ref(false);
	const error = ref(null);
	const failedRequest = ref(null);
	let requestSeq = 0;
	function applyResponse(response, { append }) {
		items.value = append ? [...items.value, ...response.data] : response.data;
		nextCursor.value = response.nextCursor;
		hasMore.value = response.hasMore;
	}
	async function fetchList() {
		const seq = ++requestSeq;
		items.value = [];
		nextCursor.value = null;
		hasMore.value = false;
		loadingMore.value = false;
		loading.value = true;
		error.value = null;
		failedRequest.value = null;
		try {
			const response = await requestPage();
			if (seq !== requestSeq) return;
			applyResponse(response, { append: false });
		} catch (e) {
			if (seq !== requestSeq) return;
			error.value = toError(e);
			failedRequest.value = "list";
			throw e;
		} finally {
			if (seq === requestSeq) loading.value = false;
		}
	}
	async function loadMore() {
		if (loading.value || loadingMore.value || !hasMore.value || !nextCursor.value) return;
		const seq = ++requestSeq;
		const cursor = nextCursor.value;
		loadingMore.value = true;
		error.value = null;
		failedRequest.value = null;
		try {
			const response = await requestPage(cursor);
			if (seq !== requestSeq) return;
			applyResponse(response, { append: true });
		} catch (e) {
			if (seq !== requestSeq) return;
			error.value = toError(e);
			failedRequest.value = "loadMore";
			throw e;
		} finally {
			if (seq === requestSeq) loadingMore.value = false;
		}
	}
	async function retry() {
		if (failedRequest.value === "loadMore") {
			await loadMore();
			return;
		}
		await fetchList();
	}
	function findItem(id) {
		return items.value.find((candidate) => candidate.id === id) ?? null;
	}
	function removeItem(id) {
		items.value = items.value.filter((candidate) => candidate.id !== id);
	}
	function reset() {
		requestSeq += 1;
		items.value = [];
		nextCursor.value = null;
		hasMore.value = false;
		loading.value = false;
		loadingMore.value = false;
		error.value = null;
		failedRequest.value = null;
	}
	return {
		items,
		nextCursor,
		hasMore,
		loading,
		loadingMore,
		error,
		isEmpty: computed(() => !loading.value && error.value === null && items.value.length === 0),
		fetchList,
		loadMore,
		retry,
		findItem,
		removeItem,
		reset
	};
}
var useReviewInboxStore = defineStore("workflowReviewInbox", () => {
	const rootStore = useRootStore();
	const probeSettled = ref(false);
	const hasAnyReviews = ref(false);
	const openCount = ref(0);
	const closedCount = ref(0);
	const detail = ref(null);
	const detailLoading = ref(false);
	const detailNotFound = ref(false);
	const activeTab = ref("open");
	let probeRequestSeq = 0;
	let detailRequestSeq = 0;
	function requestPage(state, category) {
		return async (cursor) => await fetchWorkflowReviewInbox(rootStore.restApiContext, {
			state,
			category,
			limit: DEFAULT_LIMIT,
			cursor
		});
	}
	/**
	* Plain object of slices, not a `ref`/`reactive` wrapper: the slice internals
	* stay refs and Pinia unwraps them on access, so consumers read
	* `store.sections.waiting.items` directly. `storeToRefs` does not reach into
	* this object.
	*/
	const sections = {
		waiting: createInboxListSlice(requestPage("open", "waiting")),
		authored: createInboxListSlice(requestPage("open", "authored")),
		closed: createInboxListSlice(requestPage("closed"))
	};
	const allSlices = [
		sections.waiting,
		sections.authored,
		sections.closed
	];
	const showSidebar = computed(() => probeSettled.value && hasAnyReviews.value);
	const isEmpty = computed(() => {
		if (!showSidebar.value) return false;
		return activeTab.value === "closed" ? sections.closed.isEmpty.value : sections.waiting.isEmpty.value && sections.authored.isEmpty.value;
	});
	/**
	* Both open sections start together but apply independently — one settling
	* never waits on the other. The rejection is still surfaced so the view can
	* toast, while each slice keeps its own error for its own retry control.
	*/
	async function fetchActiveTab() {
		if (activeTab.value === "closed") {
			await sections.closed.fetchList();
			return;
		}
		const failure = (await Promise.allSettled([sections.waiting.fetchList(), sections.authored.fetchList()])).find((result) => result.status === "rejected");
		if (failure?.status === "rejected") throw failure.reason;
	}
	async function probeInbox() {
		const requestSeq = ++probeRequestSeq;
		probeSettled.value = false;
		try {
			const summary = await fetchWorkflowReviewInboxSummary(rootStore.restApiContext);
			if (requestSeq !== probeRequestSeq) return;
			openCount.value = summary.open;
			closedCount.value = summary.closed;
			hasAnyReviews.value = summary.open + summary.closed > 0;
			probeSettled.value = true;
		} catch (e) {
			if (requestSeq !== probeRequestSeq) return;
			probeSettled.value = true;
			throw e;
		}
		if (hasAnyReviews.value) await fetchActiveTab();
	}
	async function loadMore(section) {
		await sections[section].loadMore();
	}
	async function retry(section) {
		await sections[section].retry();
	}
	async function setActiveTab(tab) {
		if (activeTab.value === tab) return;
		activeTab.value = tab;
		await fetchActiveTab();
	}
	function findItemById(id) {
		for (const slice of allSlices) {
			const item = slice.findItem(id);
			if (item) return item;
		}
		return null;
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
	* Decisions never change authorship, so an item never moves between the
	* waiting and authored sections. Returns the response so callers can surface
	* the auto-publish outcome.
	*/
	async function decideOnReview(id, input) {
		const summary = await decideWorkflowReviewRequest(rootStore.restApiContext, id, input);
		const item = findItemById(id);
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
		if (item && item.state !== activeTab.value) for (const slice of allSlices) slice.removeItem(id);
		return summary;
	}
	function reset() {
		probeRequestSeq += 1;
		detailRequestSeq += 1;
		probeSettled.value = false;
		hasAnyReviews.value = false;
		openCount.value = 0;
		closedCount.value = 0;
		detail.value = null;
		detailLoading.value = false;
		detailNotFound.value = false;
		activeTab.value = "open";
		for (const slice of allSlices) slice.reset();
	}
	return {
		probeSettled,
		hasAnyReviews,
		openCount,
		closedCount,
		sections,
		detail,
		detailLoading,
		detailNotFound,
		activeTab,
		showSidebar,
		isEmpty,
		probeInbox,
		fetchActiveTab,
		loadMore,
		retry,
		setActiveTab,
		findItemById,
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
var WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequestsView",
	setup(__props) {
		const store = useReviewInboxStore();
		const activityStore = useReviewActivityStore();
		const { probeSettled, showSidebar, activeTab, detail, detailLoading, detailNotFound, isEmpty, openCount, closedCount } = storeToRefs(store);
		function toSidebarSection(key) {
			const slice = store.sections[key];
			return {
				key,
				items: slice.items,
				loading: slice.loading,
				loadingMore: slice.loadingMore,
				hasMore: slice.hasMore,
				error: slice.error
			};
		}
		const sidebarSections = computed(() => activeTab.value === "closed" ? [toSidebarSection("closed")] : [toSidebarSection("waiting"), toSidebarSection("authored")]);
		const route = useRoute();
		const router = useRouter();
		function firstParam(value) {
			return (Array.isArray(value) ? value[0] : value) || null;
		}
		const selectedReviewId = computed(() => firstParam(route.params.reviewRequestId));
		/**
		* Watchers and resolved requests below both reach this view after the viewer may have left it,
		* where the query params it writes mean something else entirely.
		*/
		function isOnInbox() {
			return route.name === WORKFLOW_REVIEW_REQUESTS_VIEW;
		}
		function stateFromQuery(value) {
			return value === "closed" ? "closed" : "open";
		}
		store.activeTab = stateFromQuery(route.query[REVIEW_INBOX_QUERY_PARAM.state]);
		const selectedListItem = computed(() => selectedReviewId.value ? store.findItemById(selectedReviewId.value) : null);
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
			if (!isOnInbox()) return;
			if (id) {
				store.fetchDetail(id).catch(handleListError);
				activityStore.fetchFeed(id);
			} else {
				store.clearDetail();
				activityStore.reset();
			}
		}, { immediate: true });
		watch(() => route.query[REVIEW_INBOX_QUERY_PARAM.state], (next) => {
			if (!isOnInbox()) return;
			store.setActiveTab(stateFromQuery(next)).catch(handleListError);
		});
		function onSelect(id) {
			const query = { ...route.query };
			if (id !== selectedReviewId.value) delete query[REVIEW_INBOX_QUERY_PARAM.tab];
			router.replace({
				params: { reviewRequestId: id },
				query
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
		const detailTab = computed(() => route.query[REVIEW_INBOX_QUERY_PARAM.tab] === "changes" ? "changes" : "activity");
		function onDetailTabChange(tab) {
			if (!isOnInbox()) return;
			const query = { ...route.query };
			if (tab === "changes") query[REVIEW_INBOX_QUERY_PARAM.tab] = tab;
			else delete query[REVIEW_INBOX_QUERY_PARAM.tab];
			router.replace({ query });
		}
		async function onLoadMore(section) {
			try {
				await store.loadMore(section);
			} catch (error) {
				handleListError(error);
			}
		}
		async function onRetrySection(section) {
			try {
				await store.retry(section);
			} catch (error) {
				handleListError(error);
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
			if (!isOnInbox()) return;
			if (activeTab.value === "closed") return;
			router.replace({
				params: { reviewRequestId: id },
				query: {
					...route.query,
					[REVIEW_INBOX_QUERY_PARAM.state]: "closed"
				}
			});
		}
		async function onDecide(id, input) {
			deciding.value = true;
			try {
				const { autoPublish, state } = await store.decideOnReview(id, input);
				if (selectedReviewId.value === id) {
					activityStore.clearDecisionNote(input.note ?? "");
					activityStore.fetchFeed(id);
					if (state === "closed") followClosedReview(id);
				}
				if (!isMounted) return;
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
				if (!isMounted) return;
				showError(error, i18n.baseText("workflowReviews.decision.error.title"));
				try {
					await Promise.all([store.fetchActiveTab(), selectedReviewId.value ? store.fetchDetail(selectedReviewId.value) : void 0]);
				} catch (refetchError) {
					handleListError(refetchError);
				}
				if (selectedReviewId.value === id) activityStore.fetchFeed(id);
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
			activityStore.reset();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PageViewLayout_default, {
				"full-width": "",
				"data-test-id": "workflow-review-requests-view"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [unref(showSidebar) ? (openBlock(), createBlock(WorkflowReviewRequestsSidebar_default, {
					key: 0,
					sections: sidebarSections.value,
					"active-tab": unref(activeTab),
					"open-count": unref(openCount),
					"closed-count": unref(closedCount),
					"selected-id": selectedReviewId.value,
					onSelect,
					onClear: onClearSelection,
					"onUpdate:activeTab": onActiveTabChange,
					onLoadMore,
					onRetry: onRetrySection
				}, null, 8, [
					"sections",
					"active-tab",
					"open-count",
					"closed-count",
					"selected-id"
				])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.main) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, [unref(showSidebar) && selectedItem.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.reviewTitle),
					"data-test-id": "workflow-review-request-title-row"
				}, [createVNode(WorkflowReviewStatusDot_default, {
					state: selectedItem.value.state,
					decision: selectedItem.value.decision
				}, null, 8, ["state", "decision"]), createVNode(unref(N8nHeading_default), {
					bold: "",
					tag: "h2",
					size: "xlarge",
					"data-test-id": "workflow-review-request-title"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(selectedItem.value.title), 1)]),
					_: 1
				})], 2)) : !unref(showSidebar) ? (openBlock(), createBlock(unref(N8nHeading_default), {
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
				})) : selectedItem.value ? (openBlock(), createBlock(WorkflowReviewDetailTabs_default, {
					key: 3,
					review: selectedItem.value,
					tab: detailTab.value,
					deciding: deciding.value,
					"onUpdate:tab": onDetailTabChange,
					onDecide: _cache[0] || (_cache[0] = ($event) => onDecide(selectedItem.value.id, $event))
				}, null, 8, [
					"review",
					"tab",
					"deciding"
				])) : !unref(showSidebar) ? (openBlock(), createBlock(unref(N8nText_default), {
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
	content: "_content_11t00_125",
	main: "_main_11t00_137",
	columnTitle: "_columnTitle_11t00_147",
	reviewTitle: "_reviewTitle_11t00_154",
	mainBody: "_mainBody_11t00_161"
};
var WorkflowReviewRequestsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowReviewRequestsView_default as default };
