import { Af as init_reactivity_esm_bundler, Pf as markRaw } from "./vendor-BA8kaY8M.js";
import { Mw as deepCopy } from "./app-DbOOaPK6.js";
//#region src/features/workflows/workflowDiff/workflowDiff.utils.ts
init_reactivity_esm_bundler();
/**
* Builds a detached, non-reactive workflow for the diff viewer. A reactive source makes the
* viewer hydrate and dispose its workflow documents in a loop.
*/
function toDiffWorkflow(input) {
	const createdAt = input.createdAt ?? "";
	return markRaw(deepCopy({
		id: input.id,
		name: input.name,
		active: false,
		isArchived: input.isArchived ?? false,
		createdAt,
		updatedAt: createdAt,
		versionId: input.versionId,
		activeVersionId: null,
		nodes: input.nodes,
		connections: input.connections,
		nodeGroups: input.nodeGroups,
		settings: {
			...input.settings ?? {},
			executionOrder: input.settings?.executionOrder ?? "v0"
		},
		tags: input.tags
	}));
}
//#endregion
export { toDiffWorkflow as t };
