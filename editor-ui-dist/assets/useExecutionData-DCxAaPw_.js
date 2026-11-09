import { Ld as computed, Qd as init_runtime_core_esm_bundler } from "./vendor-BA8kaY8M.js";
import { $f as injectWorkflowExecutionStateStore } from "./app-DbOOaPK6.js";
//#region src/features/execution/executions/composables/useExecutionData.ts
init_runtime_core_esm_bundler();
function useExecutionData({ node }) {
	const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
	const workflowExecution = computed(() => workflowExecutionStateStore.value.activeExecution);
	const workflowRunData = computed(() => workflowExecutionStateStore.value.activeExecutionRunData);
	const nodeRunData = computed(() => node.value ? workflowRunData.value?.[node.value.name] ?? null : null);
	return {
		workflowExecution,
		workflowRunData,
		nodeRunData,
		hasNodeRun: computed(() => nodeRunData.value !== null)
	};
}
//#endregion
export { useExecutionData as t };
