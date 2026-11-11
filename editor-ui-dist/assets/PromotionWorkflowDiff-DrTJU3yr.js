import { $d as init_runtime_core_esm_bundler, Ef as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, bp as toDisplayString, cf as onMounted, df as openBlock, ef as inject, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler } from "./vendor-AGzaQJYe.js";
import { AO as N8nText_default, Ar as WorkflowDiffView_default, HO as _plugin_vue_export_helper_default, ah as useTagsStore, qO as useI18n } from "./app-MbtXRI_F.js";
import { t as toDiffWorkflow } from "./workflowDiff.utils-CW52TpqM.js";
import { a as toPromotionDiffSide, i as isBranchSide, o as PromotionAbsentSideLabelsKey, t as PromotionWorkflowSideLabel_default } from "./PromotionWorkflowSideLabel-B_g7-Dkb.js";
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
