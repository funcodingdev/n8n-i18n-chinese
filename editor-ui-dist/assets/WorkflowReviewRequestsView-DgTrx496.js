import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, Mt as markRaw, N as defineComponent, O as createSlots, R as inject, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, Z as onUnmounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, jt as isRef, m as withKeys, rt as renderList, st as resolveDynamicComponent, tt as provide, ut as useId, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { y as useLocalStorage } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nPopover_default } from "./N8nPopover-C7WJvH2j.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nChatInput_default } from "./N8nChatInput-DRzszglJ.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nBadge_default } from "./N8nBadge-BU9PsSq6.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nAvatar_default } from "./N8nAvatar-BN7Hde99.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nTabs_default } from "./N8nTabs-DzWB_-Ms.js";
import { ca as require_isEqual, dt as WORKFLOW_REVIEW_TEXT_MAX_LENGTH, vi as deepCopy } from "./src-DAIlllTg.js";
import { Yn as ResponseError, fr as defineStore, mr as storeToRefs, t as useRootStore } from "./useRootStore-CvqfnFUt.js";
import { t as useUsersStore } from "./users.store-C9pohnYN.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { Yi as LOCAL_STORAGE_WORKFLOW_REVIEW_INBOX_COLLAPSED_SECTIONS } from "./constants-DxozP3cY.js";
import { n as useDocumentTitle } from "./useDocumentTitle-DIC12kgr.js";
import { t as TimeAgo_default } from "./TimeAgo-h3ZAv_Jr.js";
import { o as getVersionLabel } from "./utils-BjE-UlL-.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-Ck48SXNd.js";
import { n as ReviewLinkedWorkflowsKey, r as WORKFLOW_REVIEW_REQUESTS_VIEW, t as REVIEW_INBOX_QUERY_PARAM } from "./constants-552-xuTF.js";
import { c as fetchWorkflowReviewActivity, d as fetchWorkflowReviewRequestDetail, i as createWorkflowReviewComment, l as fetchWorkflowReviewInbox, n as formatUserDisplayName, o as decideWorkflowReviewRequest, r as toError, t as formatActorName, u as fetchWorkflowReviewInboxSummary } from "./workflowReviews.utils-BsBkefNZ.js";
import { t as PageViewLayout_default } from "./PageViewLayout-BIzriqO9.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-BvLKOmrY.js";
import { t as require_omit } from "./omit-CIYQiFqN.js";
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
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityActorAvatar.vue?vue&type=script&setup=true&lang.ts
/**
* The avatar column of a feed entry that names a person: the actor's avatar, or a person
* silhouette when the actor was deleted.
*/
var WorkflowReviewActivityActorAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityActorAvatar",
	props: { actor: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.actor ? (openBlock(), createBlock(unref(N8nAvatar_default), {
				key: 0,
				size: "xxsmall",
				class: normalizeClass(_ctx.$style.avatar),
				"first-name": __props.actor.firstName,
				"last-name": __props.actor.lastName
			}, null, 8, [
				"class",
				"first-name",
				"last-name"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.deletedActor),
				"aria-hidden": "true",
				"data-test-id": "workflow-review-activity-deleted-actor"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "circle-user-round",
				size: 16,
				color: "text-light"
			})], 2));
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityActorAvatar.vue?vue&type=style&index=0&lang.module.scss
var avatar = "_avatar_1xtbx_397";
var deletedActor = "_deletedActor_1xtbx_403";
var shimmer$13 = "_shimmer_1xtbx_1";
var spin$13 = "_spin_1xtbx_1";
var opacityPulse$13 = "_opacityPulse_1xtbx_1";
var popoverIn$13 = "_popoverIn_1xtbx_1";
var fadeIn$13 = "_fadeIn_1xtbx_1";
var collapsibleSlideDown$13 = "_collapsibleSlideDown_1xtbx_1";
var collapsibleSlideUp$13 = "_collapsibleSlideUp_1xtbx_1";
var collapsibleSlideDownBlurred$13 = "_collapsibleSlideDownBlurred_1xtbx_1";
var collapsibleSlideUpBlurred$13 = "_collapsibleSlideUpBlurred_1xtbx_1";
var blurSwapIn$13 = "_blurSwapIn_1xtbx_1";
var blurSwapOut$13 = "_blurSwapOut_1xtbx_1";
var pulseGlow$13 = "_pulseGlow_1xtbx_1";
var pulseGlowDelayed$13 = "_pulseGlowDelayed_1xtbx_1";
var fade$13 = "_fade_1xtbx_1";
var fadeInUp$13 = "_fadeInUp_1xtbx_1";
var fadeInDown$13 = "_fadeInDown_1xtbx_1";
var fadeInLeft$13 = "_fadeInLeft_1xtbx_1";
var fadeInRight$13 = "_fadeInRight_1xtbx_1";
var fadeOut$13 = "_fadeOut_1xtbx_1";
var fadeOutDown$13 = "_fadeOutDown_1xtbx_1";
var fadeOutUp$13 = "_fadeOutUp_1xtbx_1";
var fadeOutLeft$13 = "_fadeOutLeft_1xtbx_1";
var fadeOutRight$13 = "_fadeOutRight_1xtbx_1";
var ping$13 = "_ping_1xtbx_1";
var blinkBackground$13 = "_blinkBackground_1xtbx_1";
var typingBlink$13 = "_typingBlink_1xtbx_1";
var WorkflowReviewActivityActorAvatar_vue_vue_type_style_index_0_lang_module_default = {
	avatar,
	deletedActor,
	shimmer: shimmer$13,
	spin: spin$13,
	"skeleton-pulse": "_skeleton-pulse_1xtbx_1",
	opacityPulse: opacityPulse$13,
	popoverIn: popoverIn$13,
	fadeIn: fadeIn$13,
	collapsibleSlideDown: collapsibleSlideDown$13,
	collapsibleSlideUp: collapsibleSlideUp$13,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$13,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$13,
	blurSwapIn: blurSwapIn$13,
	blurSwapOut: blurSwapOut$13,
	pulseGlow: pulseGlow$13,
	pulseGlowDelayed: pulseGlowDelayed$13,
	fade: fade$13,
	fadeInUp: fadeInUp$13,
	fadeInDown: fadeInDown$13,
	fadeInLeft: fadeInLeft$13,
	fadeInRight: fadeInRight$13,
	fadeOut: fadeOut$13,
	fadeOutDown: fadeOutDown$13,
	fadeOutUp: fadeOutUp$13,
	fadeOutLeft: fadeOutLeft$13,
	fadeOutRight: fadeOutRight$13,
	ping: ping$13,
	blinkBackground: blinkBackground$13,
	typingBlink: typingBlink$13
};
var WorkflowReviewActivityActorAvatar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityActorAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityActorAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityComment.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["datetime"];
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
				}, [createVNode(WorkflowReviewActivityActorAvatar_default, { actor: message.createdBy }, null, 8, ["actor"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
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
					}, [createVNode(TimeAgo_default, { date: message.createdAt }, null, 8, ["date"])], 10, _hoisted_1$4)]),
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
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityComment.vue?vue&type=style&index=0&lang.module.scss
var entry$2 = "_entry_1nuxx_398";
var message = "_message_1nuxx_408";
var content$3 = "_content_1nuxx_414";
var header$2 = "_header_1nuxx_421";
var line$2 = "_line_1nuxx_428";
var timeStamp$1 = "_timeStamp_1nuxx_432";
var body$1 = "_body_1nuxx_436";
var deleted = "_deleted_1nuxx_441";
var shimmer$12 = "_shimmer_1nuxx_1";
var spin$12 = "_spin_1nuxx_1";
var opacityPulse$12 = "_opacityPulse_1nuxx_1";
var popoverIn$12 = "_popoverIn_1nuxx_1";
var fadeIn$12 = "_fadeIn_1nuxx_1";
var collapsibleSlideDown$12 = "_collapsibleSlideDown_1nuxx_1";
var collapsibleSlideUp$12 = "_collapsibleSlideUp_1nuxx_1";
var collapsibleSlideDownBlurred$12 = "_collapsibleSlideDownBlurred_1nuxx_1";
var collapsibleSlideUpBlurred$12 = "_collapsibleSlideUpBlurred_1nuxx_1";
var blurSwapIn$12 = "_blurSwapIn_1nuxx_1";
var blurSwapOut$12 = "_blurSwapOut_1nuxx_1";
var pulseGlow$12 = "_pulseGlow_1nuxx_1";
var pulseGlowDelayed$12 = "_pulseGlowDelayed_1nuxx_1";
var fade$12 = "_fade_1nuxx_1";
var fadeInUp$12 = "_fadeInUp_1nuxx_1";
var fadeInDown$12 = "_fadeInDown_1nuxx_1";
var fadeInLeft$12 = "_fadeInLeft_1nuxx_1";
var fadeInRight$12 = "_fadeInRight_1nuxx_1";
var fadeOut$12 = "_fadeOut_1nuxx_1";
var fadeOutDown$12 = "_fadeOutDown_1nuxx_1";
var fadeOutUp$12 = "_fadeOutUp_1nuxx_1";
var fadeOutLeft$12 = "_fadeOutLeft_1nuxx_1";
var fadeOutRight$12 = "_fadeOutRight_1nuxx_1";
var ping$12 = "_ping_1nuxx_1";
var blinkBackground$12 = "_blinkBackground_1nuxx_1";
var typingBlink$12 = "_typingBlink_1nuxx_1";
var WorkflowReviewActivityComment_vue_vue_type_style_index_0_lang_module_default = {
	entry: entry$2,
	message,
	content: content$3,
	header: header$2,
	line: line$2,
	timeStamp: timeStamp$1,
	body: body$1,
	deleted,
	shimmer: shimmer$12,
	spin: spin$12,
	"skeleton-pulse": "_skeleton-pulse_1nuxx_1",
	opacityPulse: opacityPulse$12,
	popoverIn: popoverIn$12,
	fadeIn: fadeIn$12,
	collapsibleSlideDown: collapsibleSlideDown$12,
	collapsibleSlideUp: collapsibleSlideUp$12,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$12,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$12,
	blurSwapIn: blurSwapIn$12,
	blurSwapOut: blurSwapOut$12,
	pulseGlow: pulseGlow$12,
	pulseGlowDelayed: pulseGlowDelayed$12,
	fade: fade$12,
	fadeInUp: fadeInUp$12,
	fadeInDown: fadeInDown$12,
	fadeInLeft: fadeInLeft$12,
	fadeInRight: fadeInRight$12,
	fadeOut: fadeOut$12,
	fadeOutDown: fadeOutDown$12,
	fadeOutUp: fadeOutUp$12,
	fadeOutLeft: fadeOutLeft$12,
	fadeOutRight: fadeOutRight$12,
	ping: ping$12,
	blinkBackground: blinkBackground$12,
	typingBlink: typingBlink$12
};
var WorkflowReviewActivityComment_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityComment_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityComment_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityFallback.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewActivityFallback_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "WorkflowReviewActivityFallback",
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.entry) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.icon),
				"aria-hidden": "true"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "circle-help",
				size: 16,
				color: "text-light"
			})], 2), createVNode(unref(N8nText_default), {
				size: "medium",
				color: "text-light",
				class: normalizeClass(_ctx.$style.line),
				"data-test-id": "workflow-review-activity-unknown"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.unknownEntry")), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityFallback.vue?vue&type=style&index=0&lang.module.scss
var entry$1 = "_entry_16pdl_397";
var icon$1 = "_icon_16pdl_403";
var line$1 = "_line_16pdl_413";
var shimmer$11 = "_shimmer_16pdl_1";
var spin$11 = "_spin_16pdl_1";
var opacityPulse$11 = "_opacityPulse_16pdl_1";
var popoverIn$11 = "_popoverIn_16pdl_1";
var fadeIn$11 = "_fadeIn_16pdl_1";
var collapsibleSlideDown$11 = "_collapsibleSlideDown_16pdl_1";
var collapsibleSlideUp$11 = "_collapsibleSlideUp_16pdl_1";
var collapsibleSlideDownBlurred$11 = "_collapsibleSlideDownBlurred_16pdl_1";
var collapsibleSlideUpBlurred$11 = "_collapsibleSlideUpBlurred_16pdl_1";
var blurSwapIn$11 = "_blurSwapIn_16pdl_1";
var blurSwapOut$11 = "_blurSwapOut_16pdl_1";
var pulseGlow$11 = "_pulseGlow_16pdl_1";
var pulseGlowDelayed$11 = "_pulseGlowDelayed_16pdl_1";
var fade$11 = "_fade_16pdl_1";
var fadeInUp$11 = "_fadeInUp_16pdl_1";
var fadeInDown$11 = "_fadeInDown_16pdl_1";
var fadeInLeft$11 = "_fadeInLeft_16pdl_1";
var fadeInRight$11 = "_fadeInRight_16pdl_1";
var fadeOut$11 = "_fadeOut_16pdl_1";
var fadeOutDown$11 = "_fadeOutDown_16pdl_1";
var fadeOutUp$11 = "_fadeOutUp_16pdl_1";
var fadeOutLeft$11 = "_fadeOutLeft_16pdl_1";
var fadeOutRight$11 = "_fadeOutRight_16pdl_1";
var ping$11 = "_ping_16pdl_1";
var blinkBackground$11 = "_blinkBackground_16pdl_1";
var typingBlink$11 = "_typingBlink_16pdl_1";
var WorkflowReviewActivityFallback_vue_vue_type_style_index_0_lang_module_default = {
	entry: entry$1,
	icon: icon$1,
	line: line$1,
	shimmer: shimmer$11,
	spin: spin$11,
	"skeleton-pulse": "_skeleton-pulse_16pdl_1",
	opacityPulse: opacityPulse$11,
	popoverIn: popoverIn$11,
	fadeIn: fadeIn$11,
	collapsibleSlideDown: collapsibleSlideDown$11,
	collapsibleSlideUp: collapsibleSlideUp$11,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$11,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$11,
	blurSwapIn: blurSwapIn$11,
	blurSwapOut: blurSwapOut$11,
	pulseGlow: pulseGlow$11,
	pulseGlowDelayed: pulseGlowDelayed$11,
	fade: fade$11,
	fadeInUp: fadeInUp$11,
	fadeInDown: fadeInDown$11,
	fadeInLeft: fadeInLeft$11,
	fadeInRight: fadeInRight$11,
	fadeOut: fadeOut$11,
	fadeOutDown: fadeOutDown$11,
	fadeOutUp: fadeOutUp$11,
	fadeOutLeft: fadeOutLeft$11,
	fadeOutRight: fadeOutRight$11,
	ping: ping$11,
	blinkBackground: blinkBackground$11,
	typingBlink: typingBlink$11
};
var WorkflowReviewActivityFallback_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityFallback_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityFallback_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityWorkflowLink.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewActivityWorkflowLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityWorkflowLink",
	props: {
		workflowId: {},
		workflowName: {},
		version: {}
	},
	setup(__props) {
		const props = __props;
		const label = computed(() => props.version ? `${props.workflowName} ${props.version}` : props.workflowName);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nLink_default), {
				to: {
					name: unref(VIEWS).WORKFLOW,
					params: { workflowId: __props.workflowId }
				},
				theme: "text",
				size: "medium",
				"data-test-id": "workflow-review-activity-workflow-link"
			}, {
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "workflow",
					size: "medium",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["class"]), createTextVNode(toDisplayString(label.value), 1)]),
				_: 1
			}, 8, ["to"]);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityWorkflowLink.vue?vue&type=style&index=0&lang.module.scss
var icon = "_icon_iicw2_389";
var shimmer$10 = "_shimmer_iicw2_1";
var spin$10 = "_spin_iicw2_1";
var opacityPulse$10 = "_opacityPulse_iicw2_1";
var popoverIn$10 = "_popoverIn_iicw2_1";
var fadeIn$10 = "_fadeIn_iicw2_1";
var collapsibleSlideDown$10 = "_collapsibleSlideDown_iicw2_1";
var collapsibleSlideUp$10 = "_collapsibleSlideUp_iicw2_1";
var collapsibleSlideDownBlurred$10 = "_collapsibleSlideDownBlurred_iicw2_1";
var collapsibleSlideUpBlurred$10 = "_collapsibleSlideUpBlurred_iicw2_1";
var blurSwapIn$10 = "_blurSwapIn_iicw2_1";
var blurSwapOut$10 = "_blurSwapOut_iicw2_1";
var pulseGlow$10 = "_pulseGlow_iicw2_1";
var pulseGlowDelayed$10 = "_pulseGlowDelayed_iicw2_1";
var fade$10 = "_fade_iicw2_1";
var fadeInUp$10 = "_fadeInUp_iicw2_1";
var fadeInDown$10 = "_fadeInDown_iicw2_1";
var fadeInLeft$10 = "_fadeInLeft_iicw2_1";
var fadeInRight$10 = "_fadeInRight_iicw2_1";
var fadeOut$10 = "_fadeOut_iicw2_1";
var fadeOutDown$10 = "_fadeOutDown_iicw2_1";
var fadeOutUp$10 = "_fadeOutUp_iicw2_1";
var fadeOutLeft$10 = "_fadeOutLeft_iicw2_1";
var fadeOutRight$10 = "_fadeOutRight_iicw2_1";
var ping$10 = "_ping_iicw2_1";
var blinkBackground$10 = "_blinkBackground_iicw2_1";
var typingBlink$10 = "_typingBlink_iicw2_1";
var WorkflowReviewActivityWorkflowLink_vue_vue_type_style_index_0_lang_module_default = {
	icon,
	shimmer: shimmer$10,
	spin: spin$10,
	"skeleton-pulse": "_skeleton-pulse_iicw2_1",
	opacityPulse: opacityPulse$10,
	popoverIn: popoverIn$10,
	fadeIn: fadeIn$10,
	collapsibleSlideDown: collapsibleSlideDown$10,
	collapsibleSlideUp: collapsibleSlideUp$10,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$10,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$10,
	blurSwapIn: blurSwapIn$10,
	blurSwapOut: blurSwapOut$10,
	pulseGlow: pulseGlow$10,
	pulseGlowDelayed: pulseGlowDelayed$10,
	fade: fade$10,
	fadeInUp: fadeInUp$10,
	fadeInDown: fadeInDown$10,
	fadeInLeft: fadeInLeft$10,
	fadeInRight: fadeInRight$10,
	fadeOut: fadeOut$10,
	fadeOutDown: fadeOutDown$10,
	fadeOutUp: fadeOutUp$10,
	fadeOutLeft: fadeOutLeft$10,
	fadeOutRight: fadeOutRight$10,
	ping: ping$10,
	blinkBackground: blinkBackground$10,
	typingBlink: typingBlink$10
};
var WorkflowReviewActivityWorkflowLink_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityWorkflowLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityWorkflowLink_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityEventEntry.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["datetime"];
var _hoisted_2$1 = ["datetime"];
var WorkflowReviewActivityEventEntry_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewActivityEventEntry",
	props: { entry: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const linkedWorkflows = inject(ReviewLinkedWorkflowsKey, computed(() => /* @__PURE__ */ new Map()));
		const closedReasonKeys = { "no-reviewable-workflows": "workflowReviews.detail.closedCallout.noReviewableWorkflows" };
		/**
		* A lifecycle close concludes the feed, so it renders as a callout rather than one more
		* sentence. The body is a keypath, and the stored reason, so there is nothing to fall back to.
		*/
		const closedCallout = computed(() => {
			const entry = props.entry;
			if (entry.type !== "review.closed" || !entry.data) return null;
			return {
				title: i18n.baseText("workflowReviews.detail.closedCallout.title"),
				bodyKey: closedReasonKeys[entry.data.reason]
			};
		});
		const causeKeys = {
			"workflow.archived": {
				user: "workflowReviews.detail.activity.workflowArchived.user",
				userNamed: "workflowReviews.detail.activity.workflowArchived.user.named",
				system: "workflowReviews.detail.activity.workflowArchived.system",
				systemNamed: "workflowReviews.detail.activity.workflowArchived.system.named",
				testId: "workflow-review-activity-workflow-archived"
			},
			"workflow.deleted": {
				user: "workflowReviews.detail.activity.workflowDeleted.user",
				userNamed: "workflowReviews.detail.activity.workflowDeleted.user.named",
				system: "workflowReviews.detail.activity.workflowDeleted.system",
				systemNamed: "workflowReviews.detail.activity.workflowDeleted.system.named",
				testId: "workflow-review-activity-workflow-deleted"
			},
			"workflow.moved": {
				user: "workflowReviews.detail.activity.workflowMoved.user",
				userNamed: "workflowReviews.detail.activity.workflowMoved.user.named",
				system: "workflowReviews.detail.activity.workflowMoved.system",
				systemNamed: "workflowReviews.detail.activity.workflowMoved.system.named",
				testId: "workflow-review-activity-workflow-moved"
			}
		};
		/**
		* The sentence for one entry: an i18n key plus its placeholder values, one case per type.
		* `null` means "no sentence" — `review.closed` renders as a callout instead, and a
		* `workflow.published` entry with an unreadable payload has nothing to say. Other types
		* survive a bad payload with a reduced sentence: a decision loses its note, a cause event
		* its actor.
		*
		* `workflow` is set only when the workflow still exists.
		*
		* `namesActor` comes from the entry itself, never from `createdBy` — that is also null for
		* deleted users, whose actions must still read as a person's.
		*/
		const content = computed(() => {
			const entry = props.entry;
			const workflowId = entry.data && "workflowId" in entry.data ? entry.data.workflowId : null;
			const linked = workflowId === null ? void 0 : linkedWorkflows.value.get(workflowId);
			const workflow = workflowId !== null && linked ? {
				id: workflowId,
				name: linked.workflowName
			} : void 0;
			switch (entry.type) {
				case "review.opened": return {
					key: "workflowReviews.detail.activity.opened",
					note: null,
					testId: "workflow-review-activity-opened",
					namesActor: true
				};
				case "review.changes_requested": return {
					key: "workflowReviews.detail.activity.changesRequested",
					note: entry.data?.note ?? null,
					testId: "workflow-review-activity-changes-requested",
					namesActor: true
				};
				case "review.approved": return {
					key: "workflowReviews.detail.activity.approved",
					note: entry.data?.note ?? null,
					testId: "workflow-review-activity-approved",
					namesActor: true
				};
				case "review.version_updated": return {
					key: workflow ? "workflowReviews.detail.activity.versionUpdated.named" : "workflowReviews.detail.activity.versionUpdated",
					workflow,
					note: null,
					testId: "workflow-review-activity-version-updated",
					namesActor: true
				};
				case "review.closed": return null;
				case "workflow.archived":
				case "workflow.deleted":
				case "workflow.moved": {
					const keys = causeKeys[entry.type];
					const namesActor = entry.data?.actorKind === "user";
					return {
						key: namesActor ? workflow ? keys.userNamed : keys.user : workflow ? keys.systemNamed : keys.system,
						workflow,
						note: null,
						testId: keys.testId,
						namesActor
					};
				}
				case "workflow.published": {
					if (!entry.data) return null;
					const versionName = linked?.pinnedVersionId === entry.data.workflowVersionId ? linked.pinnedVersionName : null;
					return {
						key: "workflowReviews.detail.activity.workflowPublished",
						workflow,
						version: getVersionLabel({ workflowHistory: {
							versionId: entry.data.workflowVersionId,
							name: versionName
						} }),
						note: null,
						testId: "workflow-review-activity-workflow-published",
						namesActor: true
					};
				}
			}
		});
		const actorName = computed(() => formatActorName(props.entry.createdBy, i18n.baseText("workflowReviews.detail.activity.unknownAuthor")));
		return (_ctx, _cache) => {
			return closedCallout.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "secondary",
				class: normalizeClass(_ctx.$style.closedCallout),
				"data-test-id": "workflow-review-activity-closed"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.closedCalloutContent) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(closedCallout.value.title), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: closedCallout.value.bodyKey,
						scope: "global"
					}, {
						timestamp: withCtx(() => [createBaseVNode("time", { datetime: __props.entry.createdAt }, [createVNode(TimeAgo_default, { date: __props.entry.createdAt }, null, 8, ["date"])], 8, _hoisted_1$3)]),
						_: 1
					}, 8, ["keypath"])]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["class"])) : content.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass([_ctx.$style.entry, content.value.note && _ctx.$style.boxed])
			}, [content.value.namesActor ? (openBlock(), createBlock(WorkflowReviewActivityActorAvatar_default, {
				key: 0,
				actor: __props.entry.createdBy
			}, null, 8, ["actor"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.systemIcon),
				"aria-hidden": "true",
				"data-test-id": "workflow-review-activity-system-icon"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "info",
				size: 16,
				color: "text-light"
			})], 2)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headline) }, [
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
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: content.value.key,
						scope: "global"
					}, createSlots({ _: 2 }, [content.value.workflow ? {
						name: "workflowName",
						fn: withCtx(() => [createVNode(WorkflowReviewActivityWorkflowLink_default, {
							"workflow-id": content.value.workflow.id,
							"workflow-name": content.value.workflow.name,
							version: content.value.version
						}, null, 8, [
							"workflow-id",
							"workflow-name",
							"version"
						])]),
						key: "0"
					} : content.value.version ? {
						name: "workflowName",
						fn: withCtx(() => [createBaseVNode("i", { class: normalizeClass(_ctx.$style.unknownWorkflow) }, toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.unknownWorkflow")), 3), createTextVNode(" " + toDisplayString(content.value.version), 1)]),
						key: "1"
					} : void 0]), 1032, ["keypath"])]),
					_: 1
				}, 8, ["class", "data-test-id"]),
				createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.timeStamp)
				}, {
					default: withCtx(() => [createBaseVNode("time", { datetime: __props.entry.createdAt }, [createVNode(TimeAgo_default, { date: __props.entry.createdAt }, null, 8, ["date"])], 8, _hoisted_2$1)]),
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
			}, 8, ["class"])) : createCommentVNode("", true)], 2)], 2)) : (openBlock(), createBlock(WorkflowReviewActivityFallback_default, { key: 2 }));
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/activity-entries/WorkflowReviewActivityEventEntry.vue?vue&type=style&index=0&lang.module.scss
var entry = "_entry_12ebo_397";
var systemIcon = "_systemIcon_12ebo_403";
var content$2 = "_content_12ebo_413";
var headline = "_headline_12ebo_421";
var separator = "_separator_12ebo_428";
var unknownWorkflow = "_unknownWorkflow_12ebo_432";
var timeStamp = "_timeStamp_12ebo_436";
var boxed = "_boxed_12ebo_441";
var closedCallout$1 = "_closedCallout_12ebo_449";
var closedCalloutContent$1 = "_closedCalloutContent_12ebo_453";
var line = "_line_12ebo_460";
var body = "_body_12ebo_464";
var shimmer$9 = "_shimmer_12ebo_1";
var spin$9 = "_spin_12ebo_1";
var opacityPulse$9 = "_opacityPulse_12ebo_1";
var popoverIn$9 = "_popoverIn_12ebo_1";
var fadeIn$9 = "_fadeIn_12ebo_1";
var collapsibleSlideDown$9 = "_collapsibleSlideDown_12ebo_1";
var collapsibleSlideUp$9 = "_collapsibleSlideUp_12ebo_1";
var collapsibleSlideDownBlurred$9 = "_collapsibleSlideDownBlurred_12ebo_1";
var collapsibleSlideUpBlurred$9 = "_collapsibleSlideUpBlurred_12ebo_1";
var blurSwapIn$9 = "_blurSwapIn_12ebo_1";
var blurSwapOut$9 = "_blurSwapOut_12ebo_1";
var pulseGlow$9 = "_pulseGlow_12ebo_1";
var pulseGlowDelayed$9 = "_pulseGlowDelayed_12ebo_1";
var fade$9 = "_fade_12ebo_1";
var fadeInUp$9 = "_fadeInUp_12ebo_1";
var fadeInDown$9 = "_fadeInDown_12ebo_1";
var fadeInLeft$9 = "_fadeInLeft_12ebo_1";
var fadeInRight$9 = "_fadeInRight_12ebo_1";
var fadeOut$9 = "_fadeOut_12ebo_1";
var fadeOutDown$9 = "_fadeOutDown_12ebo_1";
var fadeOutUp$9 = "_fadeOutUp_12ebo_1";
var fadeOutLeft$9 = "_fadeOutLeft_12ebo_1";
var fadeOutRight$9 = "_fadeOutRight_12ebo_1";
var ping$9 = "_ping_12ebo_1";
var blinkBackground$9 = "_blinkBackground_12ebo_1";
var typingBlink$9 = "_typingBlink_12ebo_1";
var WorkflowReviewActivityEventEntry_vue_vue_type_style_index_0_lang_module_default = {
	entry,
	systemIcon,
	content: content$2,
	headline,
	separator,
	unknownWorkflow,
	timeStamp,
	boxed,
	closedCallout: closedCallout$1,
	closedCalloutContent: closedCalloutContent$1,
	line,
	body,
	shimmer: shimmer$9,
	spin: spin$9,
	"skeleton-pulse": "_skeleton-pulse_12ebo_1",
	opacityPulse: opacityPulse$9,
	popoverIn: popoverIn$9,
	fadeIn: fadeIn$9,
	collapsibleSlideDown: collapsibleSlideDown$9,
	collapsibleSlideUp: collapsibleSlideUp$9,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$9,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$9,
	blurSwapIn: blurSwapIn$9,
	blurSwapOut: blurSwapOut$9,
	pulseGlow: pulseGlow$9,
	pulseGlowDelayed: pulseGlowDelayed$9,
	fade: fade$9,
	fadeInUp: fadeInUp$9,
	fadeInDown: fadeInDown$9,
	fadeInLeft: fadeInLeft$9,
	fadeInRight: fadeInRight$9,
	fadeOut: fadeOut$9,
	fadeOutDown: fadeOutDown$9,
	fadeOutUp: fadeOutUp$9,
	fadeOutLeft: fadeOutLeft$9,
	fadeOutRight: fadeOutRight$9,
	ping: ping$9,
	blinkBackground: blinkBackground$9,
	typingBlink: typingBlink$9
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
	"review.closed": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.archived": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.deleted": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.moved": { 1: WorkflowReviewActivityEventEntry_default },
	"workflow.published": { 1: WorkflowReviewActivityEventEntry_default }
};
function resolveActivityComponent(entry) {
	return registry[entry.type]?.[entry.typeVersion] ?? WorkflowReviewActivityFallback_default;
}
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewActivityFeed.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["aria-label"];
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
				color: "danger",
				size: "small"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.error.load")), 1)]),
				_: 1
			}), createVNode(unref(N8nButton_default), {
				size: "mini",
				variant: "subtle",
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
					color: "danger",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.error.load")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					size: "mini",
					variant: "subtle",
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
				}), 128)), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
					key: 0,
					role: "listitem",
					class: normalizeClass(_ctx.$style.item)
				}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)], 10, _hoisted_1$2)
			], 64))], 2);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewActivityFeed.vue?vue&type=style&index=0&lang.module.scss
var feed = "_feed_66vtt_388";
var header$1 = "_header_66vtt_407";
var list$1 = "_list_66vtt_412";
var item = "_item_66vtt_427";
var errorRow = "_errorRow_66vtt_445";
var sentinel$1 = "_sentinel_66vtt_452";
var shimmer$8 = "_shimmer_66vtt_1";
var spin$8 = "_spin_66vtt_1";
var opacityPulse$8 = "_opacityPulse_66vtt_1";
var popoverIn$8 = "_popoverIn_66vtt_1";
var fadeIn$8 = "_fadeIn_66vtt_1";
var collapsibleSlideDown$8 = "_collapsibleSlideDown_66vtt_1";
var collapsibleSlideUp$8 = "_collapsibleSlideUp_66vtt_1";
var collapsibleSlideDownBlurred$8 = "_collapsibleSlideDownBlurred_66vtt_1";
var collapsibleSlideUpBlurred$8 = "_collapsibleSlideUpBlurred_66vtt_1";
var blurSwapIn$8 = "_blurSwapIn_66vtt_1";
var blurSwapOut$8 = "_blurSwapOut_66vtt_1";
var pulseGlow$8 = "_pulseGlow_66vtt_1";
var pulseGlowDelayed$8 = "_pulseGlowDelayed_66vtt_1";
var fade$8 = "_fade_66vtt_1";
var fadeInUp$8 = "_fadeInUp_66vtt_1";
var fadeInDown$8 = "_fadeInDown_66vtt_1";
var fadeInLeft$8 = "_fadeInLeft_66vtt_1";
var fadeInRight$8 = "_fadeInRight_66vtt_1";
var fadeOut$8 = "_fadeOut_66vtt_1";
var fadeOutDown$8 = "_fadeOutDown_66vtt_1";
var fadeOutUp$8 = "_fadeOutUp_66vtt_1";
var fadeOutLeft$8 = "_fadeOutLeft_66vtt_1";
var fadeOutRight$8 = "_fadeOutRight_66vtt_1";
var ping$8 = "_ping_66vtt_1";
var blinkBackground$8 = "_blinkBackground_66vtt_1";
var typingBlink$8 = "_typingBlink_66vtt_1";
var WorkflowReviewActivityFeed_vue_vue_type_style_index_0_lang_module_default = {
	feed,
	header: header$1,
	list: list$1,
	item,
	errorRow,
	sentinel: sentinel$1,
	shimmer: shimmer$8,
	spin: spin$8,
	"skeleton-pulse": "_skeleton-pulse_66vtt_1",
	opacityPulse: opacityPulse$8,
	popoverIn: popoverIn$8,
	fadeIn: fadeIn$8,
	collapsibleSlideDown: collapsibleSlideDown$8,
	collapsibleSlideUp: collapsibleSlideUp$8,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$8,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$8,
	blurSwapIn: blurSwapIn$8,
	blurSwapOut: blurSwapOut$8,
	pulseGlow: pulseGlow$8,
	pulseGlowDelayed: pulseGlowDelayed$8,
	fade: fade$8,
	fadeInUp: fadeInUp$8,
	fadeInDown: fadeInDown$8,
	fadeInLeft: fadeInLeft$8,
	fadeInRight: fadeInRight$8,
	fadeOut: fadeOut$8,
	fadeOutDown: fadeOutDown$8,
	fadeOutUp: fadeOutUp$8,
	fadeOutLeft: fadeOutLeft$8,
	fadeOutRight: fadeOutRight$8,
	ping: ping$8,
	blinkBackground: blinkBackground$8,
	typingBlink: typingBlink$8
};
var WorkflowReviewActivityFeed_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewActivityFeed_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewActivityFeed_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewChangesSection.vue?vue&type=script&setup=true&lang.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_omit = /* @__PURE__ */ __toESM(require_omit(), 1);
var WorkflowReviewChangesSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewChangesSection",
	props: {
		workflow: {},
		state: {},
		decision: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isApproved = computed(() => props.state === "closed" && props.decision === "approved");
		const isClosedWithoutApproval = computed(() => props.state === "closed" && props.decision !== "approved");
		/**
		* Label each side the way version history does, falling back to a short id.
		* Falsy rather than nullish: the publish endpoints accept `name: ""`.
		*/
		const versionLabel = (snapshot) => getVersionLabel({ workflowHistory: snapshot });
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
		const sourceDotClass = computed(() => isApproved.value ? "statusDotSuperseded" : "statusDotPublished");
		const targetDotClass = computed(() => isApproved.value ? "statusDotPublished" : "statusDotInReview");
		const noChangesText = computed(() => i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.noChanges" : "workflowReviews.changes.noChanges"));
		const sourceEmptyText = computed(() => i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.firstPublish.sourceEmpty" : "workflowReviews.changes.firstPublish.sourceEmpty"));
		const sourceLabel = computed(() => props.workflow.baselineVersion ? i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.sourceLabel" : "workflowReviews.changes.sourceLabel", { interpolate: { version: versionLabel(props.workflow.baselineVersion) } }) : void 0);
		const targetLabel = computed(() => props.workflow.pinnedVersion ? i18n.baseText(isApproved.value ? "workflowReviews.changes.closed.targetLabel" : "workflowReviews.changes.targetLabel", { interpolate: { version: versionLabel(props.workflow.pinnedVersion) } }) : void 0);
		return (_ctx, _cache) => {
			return isClosedWithoutApproval.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "info",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-closed-without-approval"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.closedWithoutApproval")), 1)]),
				_: 1
			}, 8, ["class"])) : !__props.workflow.pinnedVersion ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-version-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.versionUnavailable.body")), 1)]),
				_: 1
			}, 8, ["class"])) : !hasChanges.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "info",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-no-changes"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(noChangesText.value), 1)]),
				_: 1
			}, 8, ["class"])) : (openBlock(), createElementBlock("div", {
				key: 3,
				class: normalizeClass(_ctx.$style.diff),
				"data-test-id": "workflow-review-changes-diff"
			}, [createVNode(WorkflowDiffView_default, {
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": sourceLabel.value,
				"target-label": targetLabel.value,
				"show-fullscreen-button": ""
			}, createSlots({
				targetLabel: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.versionBadge),
					"data-test-id": "workflow-review-changes-target-label"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style[targetDotClass.value]]) }, null, 2), createVNode(unref(N8nText_default), {
					color: "text-dark",
					size: "small",
					compact: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(targetLabel.value), 1)]),
					_: 1
				})], 2)]),
				sourceEmptyText: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(sourceEmptyText.value), 1)]),
					_: 1
				})]),
				_: 2
			}, [__props.workflow.baselineVersion ? {
				name: "sourceLabel",
				fn: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.versionBadge),
					"data-test-id": "workflow-review-changes-source-label"
				}, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusDot, _ctx.$style[sourceDotClass.value]]) }, null, 2), createVNode(unref(N8nText_default), {
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
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewChangesSection.vue?vue&type=style&index=0&lang.module.scss
var callout$1 = "_callout_6j9j0_388";
var versionBadge = "_versionBadge_6j9j0_393 _sourceBadge_1jo27_3";
var statusDot = "_statusDot_6j9j0_397";
var statusDotPublished = "_statusDotPublished_6j9j0_405";
var statusDotInReview = "_statusDotInReview_6j9j0_409";
var statusDotSuperseded = "_statusDotSuperseded_6j9j0_413";
var diff = "_diff_6j9j0_417";
var shimmer$7 = "_shimmer_6j9j0_1";
var spin$7 = "_spin_6j9j0_1";
var opacityPulse$7 = "_opacityPulse_6j9j0_1";
var popoverIn$7 = "_popoverIn_6j9j0_1";
var fadeIn$7 = "_fadeIn_6j9j0_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_6j9j0_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_6j9j0_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_6j9j0_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_6j9j0_1";
var blurSwapIn$7 = "_blurSwapIn_6j9j0_1";
var blurSwapOut$7 = "_blurSwapOut_6j9j0_1";
var pulseGlow$7 = "_pulseGlow_6j9j0_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_6j9j0_1";
var fade$7 = "_fade_6j9j0_1";
var fadeInUp$7 = "_fadeInUp_6j9j0_1";
var fadeInDown$7 = "_fadeInDown_6j9j0_1";
var fadeInLeft$7 = "_fadeInLeft_6j9j0_1";
var fadeInRight$7 = "_fadeInRight_6j9j0_1";
var fadeOut$7 = "_fadeOut_6j9j0_1";
var fadeOutDown$7 = "_fadeOutDown_6j9j0_1";
var fadeOutUp$7 = "_fadeOutUp_6j9j0_1";
var fadeOutLeft$7 = "_fadeOutLeft_6j9j0_1";
var fadeOutRight$7 = "_fadeOutRight_6j9j0_1";
var ping$7 = "_ping_6j9j0_1";
var blinkBackground$7 = "_blinkBackground_6j9j0_1";
var typingBlink$7 = "_typingBlink_6j9j0_1";
var WorkflowReviewChangesSection_vue_vue_type_style_index_0_lang_module_default = {
	callout: callout$1,
	versionBadge,
	statusDot,
	statusDotPublished,
	statusDotInReview,
	statusDotSuperseded,
	diff,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_6j9j0_1",
	opacityPulse: opacityPulse$7,
	popoverIn: popoverIn$7,
	fadeIn: fadeIn$7,
	collapsibleSlideDown: collapsibleSlideDown$7,
	collapsibleSlideUp: collapsibleSlideUp$7,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$7,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$7,
	blurSwapIn: blurSwapIn$7,
	blurSwapOut: blurSwapOut$7,
	pulseGlow: pulseGlow$7,
	pulseGlowDelayed: pulseGlowDelayed$7,
	fade: fade$7,
	fadeInUp: fadeInUp$7,
	fadeInDown: fadeInDown$7,
	fadeInLeft: fadeInLeft$7,
	fadeInRight: fadeInRight$7,
	fadeOut: fadeOut$7,
	fadeOutDown: fadeOutDown$7,
	fadeOutUp: fadeOutUp$7,
	fadeOutLeft: fadeOutLeft$7,
	fadeOutRight: fadeOutRight$7,
	ping: ping$7,
	blinkBackground: blinkBackground$7,
	typingBlink: typingBlink$7
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
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewCommentComposer.vue?vue&type=style&index=0&lang.module.scss
var composer = "_composer_1k6rs_388";
var srOnly = "_srOnly_1k6rs_395";
var shimmer$6 = "_shimmer_1k6rs_1";
var spin$6 = "_spin_1k6rs_1";
var opacityPulse$6 = "_opacityPulse_1k6rs_1";
var popoverIn$6 = "_popoverIn_1k6rs_1";
var fadeIn$6 = "_fadeIn_1k6rs_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_1k6rs_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_1k6rs_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_1k6rs_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_1k6rs_1";
var blurSwapIn$6 = "_blurSwapIn_1k6rs_1";
var blurSwapOut$6 = "_blurSwapOut_1k6rs_1";
var pulseGlow$6 = "_pulseGlow_1k6rs_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_1k6rs_1";
var fade$6 = "_fade_1k6rs_1";
var fadeInUp$6 = "_fadeInUp_1k6rs_1";
var fadeInDown$6 = "_fadeInDown_1k6rs_1";
var fadeInLeft$6 = "_fadeInLeft_1k6rs_1";
var fadeInRight$6 = "_fadeInRight_1k6rs_1";
var fadeOut$6 = "_fadeOut_1k6rs_1";
var fadeOutDown$6 = "_fadeOutDown_1k6rs_1";
var fadeOutUp$6 = "_fadeOutUp_1k6rs_1";
var fadeOutLeft$6 = "_fadeOutLeft_1k6rs_1";
var fadeOutRight$6 = "_fadeOutRight_1k6rs_1";
var ping$6 = "_ping_1k6rs_1";
var blinkBackground$6 = "_blinkBackground_1k6rs_1";
var typingBlink$6 = "_typingBlink_1k6rs_1";
var WorkflowReviewCommentComposer_vue_vue_type_style_index_0_lang_module_default = {
	composer,
	srOnly,
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_1k6rs_1",
	opacityPulse: opacityPulse$6,
	popoverIn: popoverIn$6,
	fadeIn: fadeIn$6,
	collapsibleSlideDown: collapsibleSlideDown$6,
	collapsibleSlideUp: collapsibleSlideUp$6,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$6,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$6,
	blurSwapIn: blurSwapIn$6,
	blurSwapOut: blurSwapOut$6,
	pulseGlow: pulseGlow$6,
	pulseGlowDelayed: pulseGlowDelayed$6,
	fade: fade$6,
	fadeInUp: fadeInUp$6,
	fadeInDown: fadeInDown$6,
	fadeInLeft: fadeInLeft$6,
	fadeInRight: fadeInRight$6,
	fadeOut: fadeOut$6,
	fadeOutDown: fadeOutDown$6,
	fadeOutUp: fadeOutUp$6,
	fadeOutLeft: fadeOutLeft$6,
	fadeOutRight: fadeOutRight$6,
	ping: ping$6,
	blinkBackground: blinkBackground$6,
	typingBlink: typingBlink$6
};
var WorkflowReviewCommentComposer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewCommentComposer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewCommentComposer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewDecisionPopover.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 0 };
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
				trigger: withCtx(() => [__props.ineligibilityHint ? (openBlock(), createElementBlock("span", _hoisted_1$1, [createVNode(unref(N8nTooltip_default), {
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
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewDecisionPopover.vue?vue&type=style&index=0&lang.module.scss
var popover = "_popover_1c2lc_388";
var content$1 = "_content_1c2lc_392";
var actions = "_actions_1c2lc_398";
var shimmer$5 = "_shimmer_1c2lc_1";
var spin$5 = "_spin_1c2lc_1";
var opacityPulse$5 = "_opacityPulse_1c2lc_1";
var popoverIn$5 = "_popoverIn_1c2lc_1";
var fadeIn$5 = "_fadeIn_1c2lc_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_1c2lc_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_1c2lc_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_1c2lc_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_1c2lc_1";
var blurSwapIn$5 = "_blurSwapIn_1c2lc_1";
var blurSwapOut$5 = "_blurSwapOut_1c2lc_1";
var pulseGlow$5 = "_pulseGlow_1c2lc_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_1c2lc_1";
var fade$5 = "_fade_1c2lc_1";
var fadeInUp$5 = "_fadeInUp_1c2lc_1";
var fadeInDown$5 = "_fadeInDown_1c2lc_1";
var fadeInLeft$5 = "_fadeInLeft_1c2lc_1";
var fadeInRight$5 = "_fadeInRight_1c2lc_1";
var fadeOut$5 = "_fadeOut_1c2lc_1";
var fadeOutDown$5 = "_fadeOutDown_1c2lc_1";
var fadeOutUp$5 = "_fadeOutUp_1c2lc_1";
var fadeOutLeft$5 = "_fadeOutLeft_1c2lc_1";
var fadeOutRight$5 = "_fadeOutRight_1c2lc_1";
var ping$5 = "_ping_1c2lc_1";
var blinkBackground$5 = "_blinkBackground_1c2lc_1";
var typingBlink$5 = "_typingBlink_1c2lc_1";
var WorkflowReviewDecisionPopover_vue_vue_type_style_index_0_lang_module_default = {
	popover,
	content: content$1,
	actions,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_1c2lc_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInUp: fadeInUp$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var WorkflowReviewDecisionPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDecisionPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDecisionPopover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/workflowReviewStatus.utils.ts
/**
* The one mapping from review state/decision to what users see — card badge,
* detail status card, and status dot all render from here so their labels and
* colors cannot drift apart. A closed review that never got a decision reads
* `No decision`, not `Waiting for review`: nobody is waiting anymore.
*/
function getWorkflowReviewStatusDisplay(i18n, state, decision) {
	const decisionKey = state === "closed" && decision === "pending" ? "workflowReviews.decision.noDecision" : `workflowReviews.decision.${decision}`;
	const decisionLabel = i18n.baseText(decisionKey);
	return {
		label: i18n.baseText("workflowReviews.status.combinedLabel", { interpolate: {
			state: i18n.baseText(`workflowReviews.status.${state}`),
			decision: decisionLabel
		} }),
		decisionLabel,
		colorClass: state === "open" ? decision === "changes_requested" ? "changesRequested" : decision === "approved" ? "approved" : "pending" : decision === "approved" ? "approved" : "closed"
	};
}
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewStatusDot.vue?vue&type=script&setup=true&lang.ts
var WorkflowReviewStatusDot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewStatusDot",
	props: {
		state: {},
		decision: {},
		size: { default: "medium" },
		decorative: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const status = computed(() => getWorkflowReviewStatusDisplay(i18n, props.state, props.decision));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({
				class: [
					_ctx.$style.dot,
					_ctx.$style[status.value.colorClass],
					__props.size === "small" && _ctx.$style.small
				],
				"data-test-id": "workflow-review-request-status-dot"
			}, __props.decorative ? { "aria-hidden": "true" } : {
				role: "img",
				"aria-label": status.value.label
			}), null, 16);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewStatusDot.vue?vue&type=style&index=0&lang.module.scss
var dot = "_dot_1hwbc_388";
var small = "_small_1hwbc_395";
var pending = "_pending_1hwbc_400";
var changesRequested = "_changesRequested_1hwbc_404";
var approved = "_approved_1hwbc_408";
var closed = "_closed_1hwbc_412";
var shimmer$4 = "_shimmer_1hwbc_1";
var spin$4 = "_spin_1hwbc_1";
var opacityPulse$4 = "_opacityPulse_1hwbc_1";
var popoverIn$4 = "_popoverIn_1hwbc_1";
var fadeIn$4 = "_fadeIn_1hwbc_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_1hwbc_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_1hwbc_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_1hwbc_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_1hwbc_1";
var blurSwapIn$4 = "_blurSwapIn_1hwbc_1";
var blurSwapOut$4 = "_blurSwapOut_1hwbc_1";
var pulseGlow$4 = "_pulseGlow_1hwbc_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_1hwbc_1";
var fade$4 = "_fade_1hwbc_1";
var fadeInUp$4 = "_fadeInUp_1hwbc_1";
var fadeInDown$4 = "_fadeInDown_1hwbc_1";
var fadeInLeft$4 = "_fadeInLeft_1hwbc_1";
var fadeInRight$4 = "_fadeInRight_1hwbc_1";
var fadeOut$4 = "_fadeOut_1hwbc_1";
var fadeOutDown$4 = "_fadeOutDown_1hwbc_1";
var fadeOutUp$4 = "_fadeOutUp_1hwbc_1";
var fadeOutLeft$4 = "_fadeOutLeft_1hwbc_1";
var fadeOutRight$4 = "_fadeOutRight_1hwbc_1";
var ping$4 = "_ping_1hwbc_1";
var blinkBackground$4 = "_blinkBackground_1hwbc_1";
var typingBlink$4 = "_typingBlink_1hwbc_1";
var WorkflowReviewStatusDot_vue_vue_type_style_index_0_lang_module_default = {
	dot,
	small,
	pending,
	changesRequested,
	approved,
	closed,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_1hwbc_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
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
		const statusSummary = computed(() => getWorkflowReviewStatusDisplay(i18n, props.review.state, props.review.decision).label);
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
						decision: __props.review.decision,
						decorative: ""
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
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewDetailMetadata.vue?vue&type=style&index=0&lang.module.scss
var metadata = "_metadata_3x6cr_388";
var card$1 = "_card_3x6cr_397";
var status = "_status_3x6cr_408";
var section$1 = "_section_3x6cr_414";
var workflows = "_workflows_3x6cr_415";
var peopleCard = "_peopleCard_3x6cr_422";
var person = "_person_3x6cr_426";
var workflow = "_workflow_3x6cr_415";
var workflowName = "_workflowName_3x6cr_446";
var workflowIcon = "_workflowIcon_3x6cr_453";
var shimmer$3 = "_shimmer_3x6cr_1";
var spin$3 = "_spin_3x6cr_1";
var opacityPulse$3 = "_opacityPulse_3x6cr_1";
var popoverIn$3 = "_popoverIn_3x6cr_1";
var fadeIn$3 = "_fadeIn_3x6cr_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_3x6cr_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_3x6cr_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_3x6cr_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_3x6cr_1";
var blurSwapIn$3 = "_blurSwapIn_3x6cr_1";
var blurSwapOut$3 = "_blurSwapOut_3x6cr_1";
var pulseGlow$3 = "_pulseGlow_3x6cr_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_3x6cr_1";
var fade$3 = "_fade_3x6cr_1";
var fadeInUp$3 = "_fadeInUp_3x6cr_1";
var fadeInDown$3 = "_fadeInDown_3x6cr_1";
var fadeInLeft$3 = "_fadeInLeft_3x6cr_1";
var fadeInRight$3 = "_fadeInRight_3x6cr_1";
var fadeOut$3 = "_fadeOut_3x6cr_1";
var fadeOutDown$3 = "_fadeOutDown_3x6cr_1";
var fadeOutUp$3 = "_fadeOutUp_3x6cr_1";
var fadeOutLeft$3 = "_fadeOutLeft_3x6cr_1";
var fadeOutRight$3 = "_fadeOutRight_3x6cr_1";
var ping$3 = "_ping_3x6cr_1";
var blinkBackground$3 = "_blinkBackground_3x6cr_1";
var typingBlink$3 = "_typingBlink_3x6cr_1";
var WorkflowReviewDetailMetadata_vue_vue_type_style_index_0_lang_module_default = {
	metadata,
	card: card$1,
	status,
	section: section$1,
	workflows,
	peopleCard,
	person,
	workflow,
	workflowName,
	workflowIcon,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_3x6cr_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
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
		provide(ReviewLinkedWorkflowsKey, computed(() => new Map((detail.value?.workflows ?? []).map((workflow) => [workflow.workflowId, {
			workflowName: workflow.workflowName,
			pinnedVersionId: workflow.workflowVersionId,
			pinnedVersionName: workflow.pinnedVersion?.name ?? null
		}]))));
		const ineligibilityHint = computed(() => {
			if (!detail.value || detail.value.viewerCanDecide) return "";
			return detail.value.viewerDecisionIneligibilityReason === "author" ? i18n.baseText("workflowReviews.detail.decision.ineligible.author") : i18n.baseText("generic.missing.permissions");
		});
		/**
		* Whether to append the approved-and-published summary below the feed. Derived at read
		* time from the live published pointer, not from a `workflow.published` entry: an entry
		* can sit on an unfetched feed page, and it would keep the summary up after a newer
		* version replaced this one. The pointer cannot claim a publication that isn't live —
		* a failed publish either left the pin unpublished (no summary) or never touched a pin
		* that was already live (summary true) — and it is the signal the canvas banner trusts,
		* so the two cannot disagree. A lifecycle close needs no summary here: its
		* `review.closed` entry renders as a callout.
		*/
		const showApprovedAndPublished = computed(() => {
			const review = detail.value;
			if (!review || review.state !== "closed" || review.decision !== "approved") return false;
			return review.workflows.length > 0 && review.workflows.every((workflow) => workflow.workflowVersionId !== null && workflow.publishedVersionId === workflow.workflowVersionId);
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
			}, [(openBlock(), createBlock(WorkflowReviewActivityFeed_default, { key: __props.review.id }, createSlots({
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
				_: 2
			}, [showApprovedAndPublished.value ? {
				name: "footer",
				fn: withCtx(() => [createVNode(unref(N8nCallout_default), {
					theme: "success",
					class: normalizeClass(_ctx.$style.closedCallout),
					"data-test-id": "workflow-review-closed-callout"
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.closedCalloutContent) }, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.closedCallout.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.closedCallout.approvedAndPublished")), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["class"])]),
				key: "0"
			} : void 0]), 1024)), __props.review.state === "open" ? (openBlock(), createBlock(WorkflowReviewCommentComposer_default, {
				key: 0,
				"can-comment": viewerCanComment.value
			}, null, 8, ["can-comment"])) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.panel),
				"data-test-id": "workflow-review-changes-panel"
			}, [!detail.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.unavailable")), 1)]),
				_: 1
			}, 8, ["class"])) : detail.value.workflows.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(detail.value.workflows, (workflow) => {
				return openBlock(), createBlock(WorkflowReviewChangesSection_default, {
					key: workflow.workflowId,
					workflow,
					state: detail.value.state,
					decision: detail.value.decision
				}, null, 8, [
					"workflow",
					"state",
					"decision"
				]);
			}), 128)) : (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "warning",
				class: normalizeClass(_ctx.$style.callout),
				"data-test-id": "workflow-review-changes-workflow-unavailable"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.changes.workflowUnavailable")), 1)]),
				_: 1
			}, 8, ["class"]))], 2)), createVNode(WorkflowReviewDetailMetadata_default, { review: __props.review }, null, 8, ["review"])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewDetailTabs.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1pczh_397";
var tabRow = "_tabRow_1pczh_406";
var detailBody = "_detailBody_1pczh_416";
var panel = "_panel_1pczh_424";
var activityPanel = "_activityPanel_1pczh_432";
var descriptionCard = "_descriptionCard_1pczh_442";
var callout = "_callout_1pczh_452";
var closedCallout = "_closedCallout_1pczh_457";
var closedCalloutContent = "_closedCalloutContent_1pczh_461";
var description = "_description_1pczh_442";
var noDescription = "_noDescription_1pczh_474";
var decisionActions = "_decisionActions_1pczh_478";
var shimmer$2 = "_shimmer_1pczh_1";
var spin$2 = "_spin_1pczh_1";
var opacityPulse$2 = "_opacityPulse_1pczh_1";
var popoverIn$2 = "_popoverIn_1pczh_1";
var fadeIn$2 = "_fadeIn_1pczh_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1pczh_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1pczh_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1pczh_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1pczh_1";
var blurSwapIn$2 = "_blurSwapIn_1pczh_1";
var blurSwapOut$2 = "_blurSwapOut_1pczh_1";
var pulseGlow$2 = "_pulseGlow_1pczh_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1pczh_1";
var fade$2 = "_fade_1pczh_1";
var fadeInUp$2 = "_fadeInUp_1pczh_1";
var fadeInDown$2 = "_fadeInDown_1pczh_1";
var fadeInLeft$2 = "_fadeInLeft_1pczh_1";
var fadeInRight$2 = "_fadeInRight_1pczh_1";
var fadeOut$2 = "_fadeOut_1pczh_1";
var fadeOutDown$2 = "_fadeOutDown_1pczh_1";
var fadeOutUp$2 = "_fadeOutUp_1pczh_1";
var fadeOutLeft$2 = "_fadeOutLeft_1pczh_1";
var fadeOutRight$2 = "_fadeOutRight_1pczh_1";
var ping$2 = "_ping_1pczh_1";
var blinkBackground$2 = "_blinkBackground_1pczh_1";
var typingBlink$2 = "_typingBlink_1pczh_1";
var WorkflowReviewDetailTabs_vue_vue_type_style_index_0_lang_module_default = {
	container,
	tabRow,
	detailBody,
	panel,
	activityPanel,
	descriptionCard,
	callout,
	closedCallout,
	closedCalloutContent,
	description,
	noDescription,
	decisionActions,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1pczh_1",
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
var _hoisted_1 = [
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
		loading: { type: Boolean },
		initialLoadFailed: { type: Boolean },
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
		"retry",
		"retryActiveTab"
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
		const listRef = ref(null);
		const loadMoreSentinel = ref(null);
		function countTag(count) {
			return count === null ? void 0 : String(count);
		}
		const tabOptions = computed(() => [{
			label: i18n.baseText("workflowReviews.sidebar.tabs.open"),
			value: "open",
			tag: countTag(props.openCount)
		}, {
			label: i18n.baseText("workflowReviews.sidebar.tabs.closed"),
			value: "closed",
			tag: countTag(props.closedCount)
		}]);
		function isCollapsibleSection(key) {
			return key !== "closed";
		}
		const hasUsableRows = computed(() => props.sections.some((section) => section.items.length > 0));
		const showInitialLoadError = computed(() => props.initialLoadFailed && !hasUsableRows.value);
		const groups = computed(() => props.sections.map((section) => {
			const collapsibleKey = isCollapsibleSection(section.key) ? section.key : null;
			return {
				key: section.key,
				section,
				collapsible: collapsibleKey !== null,
				title: collapsibleKey ? sectionTitle(collapsibleKey) : null,
				collapsed: collapsibleKey !== null && isCollapsed(collapsibleKey),
				headerId: `workflow-review-section-header-${section.key}`,
				groupId: `workflow-review-section-group-${section.key}`,
				visible: section.error !== null || section.items.length > 0 || section.hasMore
			};
		}).filter((group) => group.visible && !props.loading && !showInitialLoadError.value));
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
				}, [
					__props.loading ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 0,
						loading: true,
						rows: 3,
						"data-test-id": "workflow-review-list-skeleton"
					})) : showInitialLoadError.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.sectionError),
						"data-test-id": "workflow-review-list-error"
					}, [createVNode(unref(N8nText_default), {
						color: "danger",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.sidebar.error")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "mini",
						label: unref(i18n).baseText("generic.retry"),
						"data-test-id": "workflow-review-list-retry",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("retryActiveTab"))
					}, null, 8, ["label"])], 2)) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group) => {
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
							}, 1024)], 10, _hoisted_1)) : createCommentVNode("", true),
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
								group.section.loadingMore ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.loadingMore)
								}, [createVNode(unref(N8nLoading_default), {
									loading: true,
									rows: 1
								})], 2)) : createCommentVNode("", true),
								group.section.error ? (openBlock(), createElementBlock("div", {
									key: 1,
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
									label: unref(i18n).baseText("generic.retry"),
									"data-section": group.key,
									"data-test-id": "workflow-review-section-retry",
									onClick: ($event) => emit("retry", group.key)
								}, null, 8, [
									"label",
									"data-section",
									"onClick"
								])], 10, _hoisted_4)) : createCommentVNode("", true),
								group.collapsible && group.section.hasMore ? (openBlock(), createBlock(unref(N8nButton_default), {
									key: 2,
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
					}), 128)),
					closedSentinelActive.value && !__props.loading && !showInitialLoadError.value ? (openBlock(), createElementBlock("div", {
						key: 2,
						ref_key: "loadMoreSentinel",
						ref: loadMoreSentinel,
						class: normalizeClass(_ctx.$style.sentinel)
					}, null, 2)) : createCommentVNode("", true)
				], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewRequestsSidebar.vue?vue&type=style&index=0&lang.module.scss
var sidebar = "_sidebar_1vryz_388";
var columnTitle$1 = "_columnTitle_1vryz_399";
var header = "_header_1vryz_406";
var list = "_list_1vryz_414";
var section = "_section_1vryz_424";
var group = "_group_1vryz_431";
var sectionHeader = "_sectionHeader_1vryz_438";
var chevron = "_chevron_1vryz_457";
var chevronCollapsed = "_chevronCollapsed_1vryz_462";
var sectionError = "_sectionError_1vryz_466";
var card = "_card_1vryz_474";
var cardSelected = "_cardSelected_1vryz_481";
var cardContent = "_cardContent_1vryz_494";
var cardHeader = "_cardHeader_1vryz_503";
var cardTitle = "_cardTitle_1vryz_512";
var cardMeta = "_cardMeta_1vryz_520";
var cardMetaActions = "_cardMetaActions_1vryz_529";
var cardMetaTime = "_cardMetaTime_1vryz_537";
var workflowBadge = "_workflowBadge_1vryz_541";
var workflowBadgeText = "_workflowBadgeText_1vryz_553";
var loadMoreButton = "_loadMoreButton_1vryz_568";
var loadingMore = "_loadingMore_1vryz_572";
var sentinel = "_sentinel_1vryz_576";
var shimmer$1 = "_shimmer_1vryz_1";
var spin$1 = "_spin_1vryz_1";
var opacityPulse$1 = "_opacityPulse_1vryz_1";
var popoverIn$1 = "_popoverIn_1vryz_1";
var fadeIn$1 = "_fadeIn_1vryz_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1vryz_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1vryz_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1vryz_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1vryz_1";
var blurSwapIn$1 = "_blurSwapIn_1vryz_1";
var blurSwapOut$1 = "_blurSwapOut_1vryz_1";
var pulseGlow$1 = "_pulseGlow_1vryz_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1vryz_1";
var fade$1 = "_fade_1vryz_1";
var fadeInUp$1 = "_fadeInUp_1vryz_1";
var fadeInDown$1 = "_fadeInDown_1vryz_1";
var fadeInLeft$1 = "_fadeInLeft_1vryz_1";
var fadeInRight$1 = "_fadeInRight_1vryz_1";
var fadeOut$1 = "_fadeOut_1vryz_1";
var fadeOutDown$1 = "_fadeOutDown_1vryz_1";
var fadeOutUp$1 = "_fadeOutUp_1vryz_1";
var fadeOutLeft$1 = "_fadeOutLeft_1vryz_1";
var fadeOutRight$1 = "_fadeOutRight_1vryz_1";
var ping$1 = "_ping_1vryz_1";
var blinkBackground$1 = "_blinkBackground_1vryz_1";
var typingBlink$1 = "_typingBlink_1vryz_1";
var WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sidebar,
	columnTitle: columnTitle$1,
	header,
	list,
	section,
	group,
	sectionHeader,
	chevron,
	chevronCollapsed,
	sectionError,
	card,
	cardSelected,
	cardContent,
	cardHeader,
	cardTitle,
	cardMeta,
	cardMetaActions,
	cardMetaTime,
	workflowBadge,
	workflowBadgeText,
	loadMoreButton,
	loadingMore,
	sentinel,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1vryz_1",
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
var WorkflowReviewRequestsSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/reviewInbox.store.ts
var DEFAULT_LIMIT = 15;
/** One keyset-paginated list with its own pagination and load-more state. */
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
		initialLoadFailed: computed(() => failedRequest.value === "list"),
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
	const openCount = ref(null);
	const closedCount = ref(null);
	const detail = ref(null);
	const detailLoading = ref(false);
	const detailNotFound = ref(false);
	const activeTab = ref("open");
	let summaryRequestSeq = 0;
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
	const activeSlices = computed(() => activeTab.value === "closed" ? [sections.closed] : [sections.waiting, sections.authored]);
	const hasItemsInActiveTab = computed(() => activeSlices.value.some((slice) => slice.items.value.length > 0));
	const isLoadingActiveTab = computed(() => activeSlices.value.some((slice) => slice.loading.value));
	const activeTabInitialLoadFailed = computed(() => activeSlices.value.some((slice) => slice.initialLoadFailed.value));
	const isEmpty = computed(() => activeSlices.value.every((slice) => slice.isEmpty.value));
	/**
	* Both open sections start together and settle before the tab is rendered.
	* Each slice still owns its pagination state after the initial load.
	*/
	async function fetchActiveTab() {
		if (activeTab.value === "closed") {
			await sections.closed.fetchList();
			return;
		}
		await Promise.all([sections.waiting.fetchList(), sections.authored.fetchList()]);
	}
	async function fetchSummary() {
		const requestSeq = ++summaryRequestSeq;
		try {
			const summary = await fetchWorkflowReviewInboxSummary(rootStore.restApiContext);
			if (requestSeq !== summaryRequestSeq) return;
			openCount.value = summary.open;
			closedCount.value = summary.closed;
		} catch {}
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
		if (detail.value?.id !== id) {
			detail.value = null;
			detailLoading.value = true;
			detailNotFound.value = false;
		}
		try {
			const response = await fetchWorkflowReviewRequestDetail(rootStore.restApiContext, id);
			if (requestSeq !== detailRequestSeq) return;
			detail.value = response;
			detailNotFound.value = false;
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
			if (openCount.value !== null) openCount.value = Math.max(0, openCount.value - 1);
			if (closedCount.value !== null) closedCount.value += 1;
		}
		if (item && item.state !== activeTab.value) for (const slice of allSlices) slice.removeItem(id);
		return summary;
	}
	function reset() {
		summaryRequestSeq += 1;
		detailRequestSeq += 1;
		openCount.value = null;
		closedCount.value = null;
		detail.value = null;
		detailLoading.value = false;
		detailNotFound.value = false;
		activeTab.value = "open";
		for (const slice of allSlices) slice.reset();
	}
	return {
		openCount,
		closedCount,
		sections,
		detail,
		detailLoading,
		detailNotFound,
		activeTab,
		isEmpty,
		isLoadingActiveTab,
		activeTabInitialLoadFailed,
		hasItemsInActiveTab,
		fetchSummary,
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
var WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowReviewRequestsView",
	setup(__props) {
		const store = useReviewInboxStore();
		const activityStore = useReviewActivityStore();
		const { activeTab, detail, detailLoading, detailNotFound, isEmpty, isLoadingActiveTab, activeTabInitialLoadFailed, hasItemsInActiveTab, openCount, closedCount } = storeToRefs(store);
		function toSidebarSection(key) {
			const slice = store.sections[key];
			return {
				key,
				items: slice.items,
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
		store.reset();
		activityStore.reset();
		store.activeTab = stateFromQuery(route.query[REVIEW_INBOX_QUERY_PARAM.state]);
		const selectedListItem = computed(() => selectedReviewId.value ? store.findItemById(selectedReviewId.value) : null);
		const selectedItem = computed(() => detail.value ?? selectedListItem.value);
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const { showError, showMessage } = useToast();
		documentTitle.set(i18n.baseText("workflowReviews.page.title"));
		const reviewsIcon = {
			type: "cards",
			center: "message-square-text",
			sides: [
				"file-diff",
				"git-branch",
				"circle-check",
				"list",
				"message-square"
			]
		};
		const alertIcon = {
			type: "icon",
			value: "circle-alert"
		};
		const noSelectionHeading = computed(() => {
			const count = activeTab.value === "closed" ? closedCount.value : openCount.value;
			if (count === null) return activeTab.value === "closed" ? i18n.baseText("workflowReviews.closedReviews") : i18n.baseText("workflowReviews.openReviews");
			return i18n.baseText(`workflowReviews.noSelection.title.${activeTab.value}`, {
				adjustToNumber: count,
				interpolate: { count: String(count) }
			});
		});
		let isMounted = false;
		function handleLoadError(error) {
			if (!isMounted) return;
			showError(error, i18n.baseText("workflowReviews.error.load"));
		}
		watch(selectedReviewId, (id) => {
			if (!isOnInbox()) return;
			if (id) {
				store.fetchDetail(id).catch(handleLoadError);
				activityStore.fetchFeed(id);
			} else {
				store.clearDetail();
				activityStore.reset();
			}
		}, { immediate: true });
		watch(() => route.query[REVIEW_INBOX_QUERY_PARAM.state], (next) => {
			if (!isOnInbox()) return;
			store.setActiveTab(stateFromQuery(next));
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
		function onLoadMore(section) {
			store.loadMore(section);
		}
		function onRetrySection(section) {
			store.retry(section);
		}
		function onRetryActiveTab() {
			store.fetchActiveTab();
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
					if (state === "closed") {
						store.fetchDetail(id).catch(handleLoadError);
						followClosedReview(id);
					}
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
					handleLoadError(refetchError);
				}
				if (selectedReviewId.value === id) activityStore.fetchFeed(id);
			} finally {
				deciding.value = false;
			}
		}
		onMounted(() => {
			isMounted = true;
			store.fetchSummary();
			store.fetchActiveTab();
		});
		onUnmounted(() => {
			isMounted = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PageViewLayout_default, {
				"full-width": "",
				"data-test-id": "workflow-review-requests-view"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(WorkflowReviewRequestsSidebar_default, {
					sections: sidebarSections.value,
					loading: unref(isLoadingActiveTab),
					"initial-load-failed": unref(activeTabInitialLoadFailed),
					"active-tab": unref(activeTab),
					"open-count": unref(openCount),
					"closed-count": unref(closedCount),
					"selected-id": selectedReviewId.value,
					onSelect,
					onClear: onClearSelection,
					"onUpdate:activeTab": onActiveTabChange,
					onLoadMore,
					onRetry: onRetrySection,
					onRetryActiveTab
				}, null, 8, [
					"sections",
					"loading",
					"initial-load-failed",
					"active-tab",
					"open-count",
					"closed-count",
					"selected-id"
				]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.main) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.columnTitle) }, [selectedItem.value ? (openBlock(), createElementBlock("div", {
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
				})], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainBody) }, [selectedReviewId.value && unref(detailNotFound) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.emptyStateWrapper),
					"data-test-id": "workflow-review-detail-not-found"
				}, [createVNode(unref(N8nEmptyState_default), {
					class: normalizeClass(_ctx.$style.emptyState),
					icon: alertIcon,
					heading: unref(i18n).baseText("workflowReviews.detail.notFound.title"),
					description: unref(i18n).baseText("workflowReviews.detail.notFound.body")
				}, null, 8, [
					"class",
					"heading",
					"description"
				])], 2)) : selectedReviewId.value && unref(detailLoading) ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.detailSkeleton)
				}, [createVNode(unref(N8nLoading_default), {
					loading: true,
					rows: 3
				})], 2)) : selectedItem.value ? (openBlock(), createBlock(WorkflowReviewDetailTabs_default, {
					key: 2,
					review: selectedItem.value,
					tab: detailTab.value,
					deciding: deciding.value,
					"onUpdate:tab": onDetailTabChange,
					onDecide: _cache[0] || (_cache[0] = ($event) => onDecide(selectedItem.value.id, $event))
				}, null, 8, [
					"review",
					"tab",
					"deciding"
				])) : unref(isLoadingActiveTab) ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 3,
					loading: true,
					rows: 3
				})) : unref(activeTabInitialLoadFailed) && !unref(hasItemsInActiveTab) ? (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass(_ctx.$style.emptyStateWrapper),
					"data-test-id": "workflow-reviews-load-error"
				}, [createVNode(unref(N8nEmptyState_default), {
					class: normalizeClass(_ctx.$style.emptyState),
					icon: alertIcon,
					heading: unref(i18n).baseText("workflowReviews.error.load"),
					"button-text": unref(i18n).baseText("generic.retry"),
					"onClick:button": onRetryActiveTab
				}, null, 8, [
					"class",
					"heading",
					"button-text"
				])], 2)) : unref(isEmpty) ? (openBlock(), createElementBlock("div", {
					key: 5,
					class: normalizeClass(_ctx.$style.emptyStateWrapper),
					"data-test-id": "workflow-reviews-empty-state"
				}, [createVNode(unref(N8nEmptyState_default), {
					class: normalizeClass(_ctx.$style.emptyState),
					icon: reviewsIcon,
					heading: unref(i18n).baseText(`workflowReviews.emptyState.title.${unref(activeTab)}`),
					description: unref(i18n).baseText(`workflowReviews.emptyState.body.${unref(activeTab)}`)
				}, null, 8, [
					"class",
					"heading",
					"description"
				])], 2)) : unref(hasItemsInActiveTab) ? (openBlock(), createElementBlock("div", {
					key: 6,
					class: normalizeClass(_ctx.$style.emptyStateWrapper),
					"data-test-id": "workflow-reviews-no-selection"
				}, [createVNode(unref(N8nEmptyState_default), {
					class: normalizeClass(_ctx.$style.emptyState),
					icon: reviewsIcon,
					heading: noSelectionHeading.value,
					description: unref(i18n).baseText("workflowReviews.noSelection.body")
				}, null, 8, [
					"class",
					"heading",
					"description"
				])], 2)) : createCommentVNode("", true)], 2)], 2)], 2)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/workflow-reviews/views/WorkflowReviewRequestsView.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_12ivf_388";
var main = "_main_12ivf_401";
var columnTitle = "_columnTitle_12ivf_411";
var reviewTitle = "_reviewTitle_12ivf_418";
var mainBody = "_mainBody_12ivf_425";
var detailSkeleton = "_detailSkeleton_12ivf_431";
var emptyStateWrapper = "_emptyStateWrapper_12ivf_435";
var emptyState = "_emptyState_12ivf_435";
var shimmer = "_shimmer_12ivf_1";
var spin = "_spin_12ivf_1";
var opacityPulse = "_opacityPulse_12ivf_1";
var popoverIn = "_popoverIn_12ivf_1";
var fadeIn = "_fadeIn_12ivf_1";
var collapsibleSlideDown = "_collapsibleSlideDown_12ivf_1";
var collapsibleSlideUp = "_collapsibleSlideUp_12ivf_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_12ivf_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_12ivf_1";
var blurSwapIn = "_blurSwapIn_12ivf_1";
var blurSwapOut = "_blurSwapOut_12ivf_1";
var pulseGlow = "_pulseGlow_12ivf_1";
var pulseGlowDelayed = "_pulseGlowDelayed_12ivf_1";
var fade = "_fade_12ivf_1";
var fadeInUp = "_fadeInUp_12ivf_1";
var fadeInDown = "_fadeInDown_12ivf_1";
var fadeInLeft = "_fadeInLeft_12ivf_1";
var fadeInRight = "_fadeInRight_12ivf_1";
var fadeOut = "_fadeOut_12ivf_1";
var fadeOutDown = "_fadeOutDown_12ivf_1";
var fadeOutUp = "_fadeOutUp_12ivf_1";
var fadeOutLeft = "_fadeOutLeft_12ivf_1";
var fadeOutRight = "_fadeOutRight_12ivf_1";
var ping = "_ping_12ivf_1";
var blinkBackground = "_blinkBackground_12ivf_1";
var typingBlink = "_typingBlink_12ivf_1";
var WorkflowReviewRequestsView_vue_vue_type_style_index_0_lang_module_default = {
	content,
	main,
	columnTitle,
	reviewTitle,
	mainBody,
	detailSkeleton,
	emptyStateWrapper,
	emptyState,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_12ivf_1",
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
var WorkflowReviewRequestsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewRequestsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewRequestsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { WorkflowReviewRequestsView_default as default };
