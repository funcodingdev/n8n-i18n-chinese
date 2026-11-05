import { $d as inject, Af as init_reactivity_esm_bundler, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, ep as init_shared_esm_bundler, pp as normalizeClass, qd as defineComponent, sf as onMounted, uf as openBlock, vp as toDisplayString } from "./vendor-BA8kaY8M.js";
import { ED as N8nText_default, RD as _plugin_vue_export_helper_default, UD as useI18n, br as WorkflowDiffView_default, fm as useTagsStore } from "./app-CfhiRDif.js";
import { t as toDiffWorkflow } from "./workflowDiff.utils--oo6v62S.js";
import { a as toPromotionDiffSide, i as isBranchSide, o as PromotionAbsentSideLabelsKey, t as PromotionWorkflowSideLabel_default } from "./PromotionWorkflowSideLabel-fjuEtlXs.js";
//#region src/features/integrations/promotions.ee/components/preview/PromotionWorkflowDiff.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var PromotionWorkflowDiff_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "PromotionWorkflowDiff",
	props: {
		detail: {},
		resourceKey: {},
		direction: {},
		graph: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const absentLabels = inject(PromotionAbsentSideLabelsKey, void 0);
		const tagsStore = useTagsStore();
		onMounted(async () => {
			try {
				await tagsStore.fetchAll();
			} catch {}
		});
		function tagNameOf(side) {
			return (id) => {
				const resource = props.graph.resources.get(`tag:${id}`);
				if (!resource) return tagsStore.tagsById[id]?.name ?? id;
				return side === "before" ? resource.previousName ?? resource.name : resource.name;
			};
		}
		function workflowOf(side) {
			const state = toPromotionDiffSide(props.detail, side, tagNameOf(side));
			return state.kind === "content" ? toDiffWorkflow(state.content) : void 0;
		}
		const source = computed(() => workflowOf("before"));
		const target = computed(() => workflowOf("after"));
		function emptyTextOf(side) {
			return absentLabels?.[side] ?? i18n.baseText(isBranchSide(side, props.direction) ? "promotions.preview.side.notOnBranch" : "promotions.preview.side.notOnInstance");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.diff),
				"data-test-id": "promotion-preview-workflow-diff"
			}, [createVNode(WorkflowDiffView_default, {
				"source-workflow": source.value,
				"target-workflow": target.value,
				"canvas-id-prefix": __props.resourceKey,
				"show-fullscreen-button": "",
				"require-canvas-focus": "",
				"hide-title": ""
			}, {
				sourceLabel: withCtx(() => [createVNode(PromotionWorkflowSideLabel_default, { side: "before" })]),
				targetLabel: withCtx(() => [createVNode(PromotionWorkflowSideLabel_default, { side: "after" })]),
				sourceEmptyText: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyTextOf("before")), 1)]),
					_: 1
				})]),
				targetEmptyText: withCtx(() => [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyTextOf("after")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"source-workflow",
				"target-workflow",
				"canvas-id-prefix"
			])], 2);
		};
	}
}), [["__cssModules", { "$style": { diff: "_diff_gmfmp_1" } }]]);
//#endregion
export { PromotionWorkflowDiff_default as default };
