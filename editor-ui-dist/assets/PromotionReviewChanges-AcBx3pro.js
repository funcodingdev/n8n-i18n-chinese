import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Hf as shallowRef, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, Vd as createCommentVNode, _p as normalizeStyle, bp as toDisplayString, df as openBlock, ff as provide, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, pf as renderList, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, GO as useI18n, Pc as convertToDisplayDate, SO as N8nLoading_default, WD as N8nEmptyState_default, eD as N8nResizeWrapper_default, nx as useRootStore, oO as N8nCallout_default, tD as useResizablePanel } from "./app-DGoK9ugD.js";
import { f as totalChangeCount, g as getPromotionReviewDetails, h as getPromotionReviewChanges, r as buildSelectionGraph } from "./promotionPreview.selection-BUiLY0T6.js";
import { n as cardOrder, t as buildPreviewTree } from "./promotionPreview.tree-Bgv3vvS0.js";
import { n as defaultActiveWorkflow, o as PromotionAbsentSideLabelsKey, r as hasWorkflowDiff } from "./PromotionWorkflowSideLabel-wUCazxjk.js";
import { i as usePromotionResourceDetails, n as PromotionChangeCards_default, t as PromotionResourceTree_default } from "./PromotionResourceTree-DbgRqwId.js";
import { c as indexBlockers, n as httpUrl } from "./usePromotionPreviewLabels-B8sk2DBQ.js";
//#region src/features/integrations/promotions.ee/components/review/PromotionReviewChanges.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var PromotionReviewChanges_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromotionReviewChanges",
	props: { reviewId: {} },
	emits: ["state"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const noInclusion = {
			included: /* @__PURE__ */ new Set(),
			reasons: /* @__PURE__ */ new Map()
		};
		const noKeys = /* @__PURE__ */ new Set();
		const noBlockers = indexBlockers([]);
		provide(PromotionAbsentSideLabelsKey, {
			before: i18n.baseText("promotions.review.side.added"),
			after: i18n.baseText("promotions.review.side.removed")
		});
		const state = ref("loading");
		const errorMessage = ref();
		const changes = shallowRef(null);
		let generation = 0;
		async function load() {
			const current = ++generation;
			state.value = "loading";
			changes.value = null;
			emit("state", { status: "loading" });
			try {
				const result = await getPromotionReviewChanges(rootStore.restApiContext, props.reviewId);
				if (current !== generation) return;
				changes.value = result;
				state.value = "ready";
				emit("state", result.warnings.length > 0 ? { status: "unavailable" } : {
					status: "ready",
					headCommitSha: result.headCommitSha
				});
			} catch (error) {
				if (current !== generation) return;
				errorMessage.value = error instanceof Error ? error.message : void 0;
				state.value = "error";
				emit("state", { status: "unavailable" });
			}
		}
		const outcome = computed(() => changes.value?.warnings.includes("commitsUnavailable") ? changes.value.outcome : null);
		const outcomeDescription = computed(() => {
			if (!outcome.value) return void 0;
			const { state, at, by } = outcome.value;
			const date = at ? convertToDisplayDate(at).date : null;
			if (by && date) return i18n.baseText(`promotions.review.outcome.${state}.description`, { interpolate: {
				user: by,
				date
			} });
			if (date) return i18n.baseText(`promotions.review.outcome.${state}.descriptionNoUser`, { interpolate: { date } });
			if (by) return i18n.baseText(`promotions.review.outcome.${state}.descriptionNoDate`, { interpolate: { user: by } });
			return i18n.baseText("promotions.review.outcome.description.unknown");
		});
		function openOnHost() {
			const url = httpUrl(outcome.value?.webUrl);
			if (url) window.open(url, "_blank", "noopener,noreferrer");
		}
		const inspectedKey = ref();
		watch(() => props.reviewId, async () => {
			inspectedKey.value = void 0;
			await load();
		}, { immediate: true });
		const graph = computed(() => changes.value ? buildSelectionGraph(changes.value, "promote") : null);
		const tree = computed(() => changes.value ? buildPreviewTree(changes.value, {
			workflows: i18n.baseText("promotions.preview.tree.section.workflows"),
			group: (group) => i18n.baseText(`promotions.preview.tree.group.${group}`)
		}) : []);
		const order = computed(() => graph.value ? cardOrder(tree.value, graph.value.resources) : []);
		const totalChanges = computed(() => graph.value ? totalChangeCount(graph.value) : 0);
		const activeWorkflowKey = ref();
		watch(order, (keys) => {
			if (activeWorkflowKey.value && keys.includes(activeWorkflowKey.value)) return;
			activeWorkflowKey.value = graph.value ? defaultActiveWorkflow(keys, graph.value.resources, inspectedKey.value) : void 0;
		});
		const details = usePromotionResourceDetails(async (keys) => {
			const { baselineCommitSha, headCommitSha } = changes.value ?? {};
			if (!baselineCommitSha || !headCommitSha) return {
				details: [],
				missingKeys: keys
			};
			return await getPromotionReviewDetails(rootStore.restApiContext, props.reviewId, {
				baselineCommitSha,
				headCommitSha,
				keys
			});
		}, changes, graph, activeWorkflowKey);
		const cards = ref(null);
		async function inspect(key) {
			const resource = graph.value?.resources.get(key);
			if (resource && hasWorkflowDiff(resource)) activeWorkflowKey.value = key;
			if (key === inspectedKey.value) await cards.value?.scrollToCard(key);
			else inspectedKey.value = key;
		}
		const panes = ref(null);
		const treeResizer = useResizablePanel({
			container: panes,
			width: {
				localStorageKey: "N8N_PROMOTION_REVIEW_TREE_WIDTH",
				defaultSize: (size) => Math.min(Math.max(size * .28, 240), 360),
				minSize: 200,
				maxSize: (size) => Math.min(size * .5, 640),
				snap: true
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.changes),
				"data-test-id": "promotion-review-changes"
			}, [state.value === "loading" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.state),
				"data-test-id": "promotion-review-loading"
			}, [createVNode(unref(N8nLoading_default), { rows: 6 })], 2)) : state.value === "error" ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 1,
				class: normalizeClass(_ctx.$style.state),
				icon: {
					type: "icon",
					value: "circle-alert"
				},
				heading: unref(i18n).baseText("promotions.review.state.error"),
				description: errorMessage.value,
				"button-text": unref(i18n).baseText("promotions.preview.state.retry"),
				"data-test-id": "promotion-review-error",
				"onClick:button": load
			}, null, 8, [
				"class",
				"heading",
				"description",
				"button-text"
			])) : changes.value && graph.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [outcome.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.state),
				icon: {
					type: "icon",
					value: outcome.value.state === "merged" ? "check" : "circle-check"
				},
				heading: unref(i18n).baseText(`promotions.review.outcome.${outcome.value.state}.title`),
				description: outcomeDescription.value,
				"button-text": unref(i18n).baseText("promotions.review.outcome.openOnHost"),
				"button-variant": "outline",
				"data-test-id": "promotion-review-outcome",
				"onClick:button": openOnHost
			}, {
				description: withCtx(() => [createTextVNode(toDisplayString(outcomeDescription.value), 1)]),
				_: 1
			}, 8, [
				"class",
				"icon",
				"heading",
				"description",
				"button-text"
			])) : changes.value.warnings.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.notices)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(changes.value.warnings, (warning) => {
				return openBlock(), createBlock(unref(N8nCallout_default), {
					key: warning,
					theme: "warning",
					slim: "",
					"data-test-id": "promotion-review-warning"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`promotions.review.warning.${warning}`)), 1)]),
					_: 2
				}, 1024);
			}), 128))], 2)) : totalChanges.value === 0 ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 2,
				class: normalizeClass(_ctx.$style.state),
				icon: {
					type: "icon",
					value: "check"
				},
				heading: unref(i18n).baseText("promotions.review.state.empty.title"),
				description: unref(i18n).baseText("promotions.review.state.empty.description"),
				"data-test-id": "promotion-review-empty"
			}, null, 8, [
				"class",
				"heading",
				"description"
			])) : (openBlock(), createElementBlock("div", {
				key: 3,
				ref_key: "panes",
				ref: panes,
				class: normalizeClass(_ctx.$style.panes)
			}, [createVNode(unref(N8nResizeWrapper_default), {
				class: normalizeClass(_ctx.$style.tree),
				style: normalizeStyle({ width: `${unref(treeResizer).width.value}px` }),
				resizer: unref(treeResizer),
				"supported-directions": ["right"]
			}, {
				default: withCtx(() => [createVNode(PromotionResourceTree_default, {
					tree: tree.value,
					graph: graph.value,
					selected: unref(noKeys),
					inclusion: noInclusion,
					"included-changes": 0,
					"total-changes": totalChanges.value,
					"inspected-key": inspectedKey.value,
					disabled: unref(noKeys),
					locked: true,
					direction: "promote",
					blockers: unref(noBlockers),
					selectable: false,
					onInspect: inspect
				}, null, 8, [
					"tree",
					"graph",
					"selected",
					"total-changes",
					"inspected-key",
					"disabled",
					"blockers"
				])]),
				_: 1
			}, 8, [
				"class",
				"style",
				"resizer"
			]), createBaseVNode("section", { class: normalizeClass(_ctx.$style.cards) }, [createVNode(PromotionChangeCards_default, {
				ref_key: "cards",
				ref: cards,
				"active-workflow": activeWorkflowKey.value,
				"onUpdate:activeWorkflow": _cache[0] || (_cache[0] = ($event) => activeWorkflowKey.value = $event),
				order: order.value,
				graph: graph.value,
				direction: "promote",
				inclusion: noInclusion,
				selected: unref(noKeys),
				disabled: unref(noKeys),
				locked: true,
				entries: unref(details).entries.value,
				"inspected-key": inspectedKey.value,
				blockers: unref(noBlockers),
				selectable: false,
				onRetry: unref(details).retry,
				onRefresh: load,
				onInspect: inspect
			}, null, 8, [
				"active-workflow",
				"order",
				"graph",
				"selected",
				"disabled",
				"entries",
				"inspected-key",
				"blockers",
				"onRetry"
			])], 2)], 2))], 64)) : createCommentVNode("", true)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	changes: "_changes_2d6bz_1",
	state: "_state_2d6bz_8",
	notices: "_notices_2d6bz_14",
	panes: "_panes_2d6bz_21",
	tree: "_tree_2d6bz_27",
	cards: "_cards_2d6bz_35"
} }]]);
//#endregion
export { PromotionReviewChanges_default as default };
