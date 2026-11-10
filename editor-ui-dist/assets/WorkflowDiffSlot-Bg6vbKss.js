import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Jd as defineComponent, Rd as computed, Ud as createSlots, df as openBlock, mf as renderSlot } from "./vendor-AGzaQJYe.js";
import { Ar as WorkflowDiffView_default } from "./app-DGoK9ugD.js";
import { t as toDiffWorkflow } from "./workflowDiff.utils-CgQ-7NSp.js";
//#region src/features/workflows/workflowDiff/WorkflowDiffSlot.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
//#endregion
//#region src/features/workflows/workflowDiff/WorkflowDiffSlot.vue
var WorkflowDiffSlot_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowDiffSlot",
	props: {
		workflowId: {},
		workflowName: {},
		sourceSnapshot: {},
		targetSnapshot: {},
		sourceLabel: {},
		targetLabel: {},
		showFullscreenButton: { type: Boolean },
		canvasIdPrefix: {},
		hideTitle: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		function toWorkflow(snapshot, side) {
			if (!snapshot) return void 0;
			return toDiffWorkflow({
				id: props.workflowId,
				name: props.workflowName,
				versionId: snapshot.versionId ?? side,
				createdAt: snapshot.createdAt,
				nodes: snapshot.nodes,
				connections: snapshot.connections,
				nodeGroups: snapshot.nodeGroups
			});
		}
		const sourceWorkflow = computed(() => toWorkflow(props.sourceSnapshot, "source"));
		const targetWorkflow = computed(() => toWorkflow(props.targetSnapshot, "target"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkflowDiffView_default, {
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": __props.sourceLabel,
				"target-label": __props.targetLabel,
				"show-fullscreen-button": __props.showFullscreenButton,
				"canvas-id-prefix": __props.canvasIdPrefix,
				"hide-title": __props.hideTitle
			}, createSlots({ _: 2 }, [
				_ctx.$slots.sourceLabel ? {
					name: "sourceLabel",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "sourceLabel")]),
					key: "0"
				} : void 0,
				_ctx.$slots.targetLabel ? {
					name: "targetLabel",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "targetLabel")]),
					key: "1"
				} : void 0,
				_ctx.$slots.sourceEmptyText ? {
					name: "sourceEmptyText",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "sourceEmptyText")]),
					key: "2"
				} : void 0
			]), 1032, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label",
				"show-fullscreen-button",
				"canvas-id-prefix",
				"hide-title"
			]);
		};
	}
});
//#endregion
export { WorkflowDiffSlot_default as default };
