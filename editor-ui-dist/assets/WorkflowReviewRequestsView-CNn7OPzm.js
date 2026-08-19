import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, Mt as markRaw, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, X as onMounted, Z as onUnmounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, m as withKeys, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-D_HoWCyo.js";
import { A as N8nUserStack_default, Gi as N8nBadge_default, Gt as N8nCard_default, Jt as N8nCallout_default, Ot as N8nLink_default, Pt as N8nHeading_default, V as N8nTabs_default, Zt as N8nAvatar_default, cn as N8nLoading_default, fo as N8nButton_default, oa as N8nTooltip_default, oo as N8nText_default, po as N8nIcon_default } from "./src-DmjM-ErL.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-BzS-cI7x.js";
import { Xn as ResponseError, dr as defineStore, pr as storeToRefs, t as useRootStore } from "./useRootStore-BSEpDaXx.js";
import { Qi as require_isEqual, ci as deepCopy } from "./src-CZLzAGVt.js";
import { t as useUsersStore } from "./users.store-Dkq-dQTG.js";
import { t as VIEWS } from "./views-Cm6YRZ1u.js";
import { n as useToast } from "./useToast-DLNv8iBz.js";
import "./constants-BqyeOg5z.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DlX0kUPb.js";
import { t as TimeAgo_default } from "./TimeAgo-BnYbFPC-.js";
import { t as REVIEW_INBOX_QUERY_PARAM } from "./constants-C4PnEM9C.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-hjGGnwOO.js";
import { a as fetchWorkflowReviewInbox, o as fetchWorkflowReviewInboxSummary, r as decideWorkflowReviewRequest, s as fetchWorkflowReviewRequestDetail, t as formatUserDisplayName } from "./formatUserDisplayName-vMEhxqT8.js";
import { t as PageViewLayout_default } from "./PageViewLayout-D3HJv226.js";
import { t as useIntersectionObserver } from "./useIntersectionObserver-7q30QZza.js";
import { t as require_omit } from "./omit-Ck8xUxSt.js";
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
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.status")), 1)]),
						_: 1
					})]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.status) }, [createVNode(WorkflowReviewStatusDot_default, {
						state: __props.review.state,
						decision: __props.review.decision
					}, null, 8, ["state", "decision"]), createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(statusSummary.value), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["class"]),
				createVNode(unref(N8nCard_default), {
					class: normalizeClass(_ctx.$style.card),
					"data-test-id": "workflow-review-detail-reviewers-card"
				}, {
					header: withCtx(() => [createVNode(unref(N8nText_default), {
						bold: "",
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.reviewers")), 1)]),
						_: 1
					})]),
					default: withCtx(() => [__props.review.reviewers.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.people)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.review.reviewers, (reviewer) => {
						return openBlock(), createElementBlock("div", {
							key: reviewer.id,
							class: normalizeClass(_ctx.$style.reviewer)
						}, [createVNode(unref(N8nAvatar_default), {
							"first-name": reviewer.firstName,
							"last-name": reviewer.lastName,
							size: "xsmall"
						}, null, 8, ["first-name", "last-name"]), createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(formatUserDisplayName)(reviewer)), 1)]),
							_: 2
						}, 1024)], 2);
					}), 128))], 2)) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-light",
						size: "small",
						"data-test-id": "workflow-review-detail-no-reviewers"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.metadata.noReviewers")), 1)]),
						_: 1
					}))]),
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
						size: "small"
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
							size: "small",
							class: normalizeClass(_ctx.$style.workflow),
							"data-test-id": "workflow-review-detail-workflow-link"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "workflow",
								size: "small",
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
	metadata: "_metadata_1oua1_125",
	card: "_card_1oua1_133",
	status: "_status_1oua1_144",
	people: "_people_1oua1_150",
	workflows: "_workflows_1oua1_151",
	reviewer: "_reviewer_1oua1_158",
	workflow: "_workflow_1oua1_151",
	workflowName: "_workflowName_1oua1_181",
	workflowIcon: "_workflowIcon_1oua1_189"
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
			}, [createVNode(unref(N8nTooltip_default), {
				disabled: !ineligibilityHint.value,
				content: ineligibilityHint.value,
				"show-after": 300
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					size: "small",
					disabled: __props.deciding || !viewerCanDecide.value,
					"data-test-id": "workflow-review-approve-button",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("decide", "approved"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.approve")), 1)]),
					_: 1
				}, 8, ["disabled"])]),
				_: 1
			}, 8, ["disabled", "content"]), createVNode(unref(N8nTooltip_default), {
				disabled: !ineligibilityHint.value,
				content: ineligibilityHint.value,
				"show-after": 300
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					size: "small",
					type: "secondary",
					disabled: __props.deciding || !viewerCanDecide.value,
					"data-test-id": "workflow-review-request-changes-button",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("decide", "changes_requested"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.decision.requestChanges")), 1)]),
					_: 1
				}, 8, ["disabled"])]),
				_: 1
			}, 8, ["disabled", "content"])], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.detailBody) }, [__props.tab === "activity" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.panel),
				"data-test-id": "workflow-review-activity-panel"
			}, [detail.value?.description ? (openBlock(), createBlock(unref(N8nText_default), {
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
				"data-test-id": "workflow-review-no-description"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowReviews.detail.activity.noDescription")), 1)]),
				_: 1
			}))], 2)) : (openBlock(), createElementBlock("div", {
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
	container: "_container_3ww2a_125",
	tabRow: "_tabRow_3ww2a_132",
	detailBody: "_detailBody_3ww2a_139",
	panel: "_panel_3ww2a_147",
	callout: "_callout_3ww2a_153",
	description: "_description_3ww2a_157",
	decisionActions: "_decisionActions_3ww2a_161"
};
var WorkflowReviewDetailTabs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowReviewDetailTabs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowReviewDetailTabs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflow-reviews/components/WorkflowReviewRequestsSidebar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2 = ["title"];
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
					variant: "modern",
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
								}), createBaseVNode("span", null, toDisplayString(item.workflowName), 1)], 10, _hoisted_2)]),
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
	sidebar: "_sidebar_1f71f_125",
	columnTitle: "_columnTitle_1f71f_133",
	header: "_header_1f71f_140",
	list: "_list_1f71f_148",
	card: "_card_1f71f_157",
	cardSelected: "_cardSelected_1f71f_164",
	cardContent: "_cardContent_1f71f_177",
	cardHeader: "_cardHeader_1f71f_186",
	cardTitle: "_cardTitle_1f71f_195",
	cardMeta: "_cardMeta_1f71f_203",
	cardMetaActions: "_cardMetaActions_1f71f_213",
	cardMetaTime: "_cardMetaTime_1f71f_221",
	workflowBadge: "_workflowBadge_1f71f_225",
	workflowBadgeText: "_workflowBadgeText_1f71f_238",
	loadingMore: "_loadingMore_1f71f_253",
	sentinel: "_sentinel_1f71f_257"
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
			const query = { ...route.query };
			if (tab === "changes") query[REVIEW_INBOX_QUERY_PARAM.tab] = tab;
			else delete query[REVIEW_INBOX_QUERY_PARAM.tab];
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
			return openBlock(), createBlock(PageViewLayout_default, {
				"full-width": "",
				"data-test-id": "workflow-review-requests-view"
			}, {
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
