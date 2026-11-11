import { $d as init_runtime_core_esm_bundler, Zd as h } from "./vendor-AGzaQJYe.js";
import { qO as useI18n } from "./app-MbtXRI_F.js";
import { i as isContainer } from "./promotionPreview.tree-Bgv3vvS0.js";
//#region src/features/integrations/promotions.ee/promotionOperation.ts
/**
* The request and the blockers of a promote or an apply from the preview page.
*/
/** The workflows that users selected. The server adds their dependencies. */
function toOperationRequest(graph, selected) {
	const workflowIds = /* @__PURE__ */ new Set();
	for (const key of selected) {
		const resource = graph.resources.get(key);
		if (resource?.type === "workflow") workflowIds.add(resource.id);
	}
	return { workflowIds: [...workflowIds].sort() };
}
var isBlocking = ({ kind }) => kind !== "destructive" && kind !== "warning";
var workflowKey = (id) => `workflow:${id}`;
function variableKey(name, scope) {
	const encoded = encodeURIComponent(name);
	return scope.kind === "global" ? `variable:global:${encoded}` : `variable:project:${scope.project.id}:${encoded}`;
}
var consumerKeys = (consumers) => consumers.flatMap(({ workflows }) => workflows.map(({ id }) => workflowKey(id)));
/**
* Keeps the blockers of workflows that the preview lists. The check also covers unchanged
* workflows, which users cannot select, so their blockers stop nothing on the page.
*/
function scopeCheck(check, graph) {
	const listed = (id) => graph.resources.has(workflowKey(id));
	const scope = (entries) => entries.flatMap((entry) => {
		const consumers = entry.consumers.flatMap((consumer) => {
			const workflows = consumer.workflows.filter(({ id }) => listed(id));
			return workflows.length > 0 ? [{
				...consumer,
				workflows
			}] : [];
		});
		return consumers.length > 0 ? [{
			...entry,
			consumers
		}] : [];
	});
	return {
		...check,
		missingBindings: scope(check.missingBindings),
		accessRequirements: scope(check.accessRequirements),
		conflicts: check.conflicts.flatMap((conflict) => {
			if ("consumers" in conflict) return scope([conflict]);
			if (conflict.code === "project-not-team") return conflict.workflows.some(({ id }) => listed(id)) ? [conflict] : [];
			return [conflict];
		}),
		warnings: scope(check.warnings),
		movedWorkflows: check.movedWorkflows.filter(({ id }) => listed(id)),
		movedFolders: check.movedFolders
	};
}
/** The blockers of the check. A project-wide conflict blocks every workflow in `listedWorkflowKeys`. */
function listBlockers({ missingBindings, accessRequirements, conflicts, warnings, movedWorkflows, movedFolders }, listedWorkflowKeys) {
	const blockers = [];
	for (const binding of missingBindings) blockers.push({
		kind: "missing",
		resourceKey: binding.kind === "credential" ? `credential:${binding.sourceId}` : variableKey(binding.name, binding.scope),
		workflowKeys: consumerKeys(binding.consumers)
	});
	for (const access of accessRequirements) blockers.push({
		kind: "access",
		resourceKey: `credential:${access.sourceId}`,
		workflowKeys: consumerKeys(access.consumers)
	});
	for (const conflict of conflicts) {
		if (conflict.code === "moved") continue;
		if (conflict.code === "destructive-change") blockers.push({
			kind: "destructive",
			resourceKey: `dataTable:${conflict.id}`,
			workflowKeys: consumerKeys(conflict.consumers)
		});
		else if (conflict.code === "project-not-team") blockers.push({
			kind: "conflict",
			resourceKey: `project:${conflict.project.id}`,
			workflowKeys: conflict.workflows.map(({ id }) => workflowKey(id))
		});
		else if (conflict.kind === "credential") blockers.push({
			kind: "conflict",
			resourceKey: conflict.sourceId === null ? null : `credential:${conflict.sourceId}`,
			workflowKeys: consumerKeys(conflict.consumers)
		});
		else if (conflict.kind === "variable" || conflict.kind === "workflow") blockers.push({
			kind: "conflict",
			resourceKey: null,
			workflowKeys: consumerKeys(conflict.consumers)
		});
		else if (conflict.kind === "data-table" || conflict.kind === "tag") {
			const type = conflict.kind === "tag" ? "tag" : "dataTable";
			blockers.push({
				kind: "conflict",
				resourceKey: conflict.id === void 0 ? null : `${type}:${conflict.id}`,
				workflowKeys: consumerKeys(conflict.consumers)
			});
		} else if (conflict.code !== "project-deletion") blockers.push({
			kind: "conflict",
			resourceKey: `project:${conflict.project.id}`,
			workflowKeys: listedWorkflowKeys
		});
	}
	for (const warning of warnings) blockers.push({
		kind: "warning",
		resourceKey: variableKey(warning.name, warning.scope),
		workflowKeys: consumerKeys(warning.consumers)
	});
	for (const { id } of movedWorkflows) blockers.push({
		kind: "moved",
		resourceKey: workflowKey(id),
		workflowKeys: [workflowKey(id)]
	});
	for (const { id } of movedFolders) blockers.push({
		kind: "moved",
		resourceKey: `folder:${id}`,
		workflowKeys: []
	});
	return blockers;
}
/** Workflows that moved between projects on this instance, in either direction. Promote refuses them. */
function crossProjectMoveBlockers(graph) {
	return [...graph.resources.values()].flatMap(({ key, movedToProject, movedFromProject }) => movedToProject || movedFromProject ? [{
		kind: "moved",
		resourceKey: key,
		workflowKeys: [key]
	}] : []);
}
function push(map, key, blocker) {
	const list = map.get(key);
	if (!list) map.set(key, [blocker]);
	else if (!list.includes(blocker)) list.push(blocker);
}
function indexBlockers(blockers) {
	const byWorkflow = /* @__PURE__ */ new Map();
	const byResource = /* @__PURE__ */ new Map();
	const blocked = /* @__PURE__ */ new Set();
	for (const blocker of blockers) {
		if (blocker.resourceKey !== null) push(byResource, blocker.resourceKey, blocker);
		for (const key of blocker.workflowKeys) {
			push(byWorkflow, key, blocker);
			if (isBlocking(blocker)) blocked.add(key);
		}
	}
	return {
		byWorkflow,
		byResource,
		blocked
	};
}
/** The blockers that a tree row or a card shows: a workflow shows what stops it. */
var blockersOf = (index, { key, type }) => type === "workflow" ? index.byWorkflow.get(key) : index.byResource.get(key);
/** True when the apply of these workflows removes data table values. */
function touchesDestructiveChange(index, keys) {
	for (const key of keys) if (index.byWorkflow.get(key)?.some(({ kind }) => kind === "destructive")) return true;
	return false;
}
//#endregion
//#region src/features/integrations/promotions.ee/promotionResult.ts
init_runtime_core_esm_bundler();
/** Returns the URL when it uses http or https. */
function httpUrl(value) {
	if (!value) return void 0;
	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:" ? url.href : void 0;
	} catch {
		return;
	}
}
/** Renders the translated sentence when the warning has a safe link. */
function warningSegments(warning, reviewNotRecorded) {
	const url = httpUrl(warning.linkUrl);
	if (!url) return [{
		kind: "text",
		text: warning.message
	}];
	const [before, after = ""] = reviewNotRecorded.split("%%url%%");
	return [
		...before ? [{
			kind: "text",
			text: before
		}] : [],
		{
			kind: "link",
			url
		},
		...after ? [{
			kind: "text",
			text: after
		}] : []
	];
}
var externalLink = (href, label) => h("a", {
	href,
	target: "_blank",
	rel: "noopener noreferrer"
}, label);
/** Toast body for a selection promote. A link or a warning keeps the toast open. */
function promoteSuccessToast(result, text) {
	const warnings = result.warnings ?? [];
	const mergeRequestUrl = httpUrl(result.review?.webUrl);
	if (!mergeRequestUrl && warnings.length === 0) return { message: text.pushed };
	const summary = mergeRequestUrl ? externalLink(mergeRequestUrl, text.viewMergeRequest) : text.pushed;
	return {
		message: h("div", [h("div", [summary]), ...warnings.map((warning) => h("div", warningNodes(warning, text.reviewNotRecorded)))]),
		duration: 0
	};
}
var warningNodes = (warning, reviewNotRecorded) => warningSegments(warning, reviewNotRecorded).map((segment) => segment.kind === "link" ? externalLink(segment.url, segment.url) : segment.text);
/**
* Appends how many workflows and folders an Apply moved within their projects, and how many
* folders it renamed, so prod does not change without notice. Moved workflows are part of the
* updated count.
*/
function withMoveAndRenameNote(i18n, message, { workflows, folders }) {
	const folderCount = (count) => i18n.baseText("promotions.applied.moved.folders", {
		adjustToNumber: count,
		interpolate: { count: String(count) }
	});
	const notes = [message];
	if (workflows.moved + folders.moved > 0) notes.push(i18n.baseText("promotions.applied.moved", { interpolate: {
		workflows: i18n.baseText("promotions.applied.moved.workflows", {
			adjustToNumber: workflows.moved,
			interpolate: { count: String(workflows.moved) }
		}),
		folders: folderCount(folders.moved)
	} }));
	if (folders.renamed > 0) notes.push(i18n.baseText("promotions.applied.renamed", { interpolate: { folders: folderCount(folders.renamed) } }));
	return notes.join(" ");
}
//#endregion
//#region src/features/integrations/promotions.ee/composables/usePromotionPreviewLabels.ts
/** Apply keeps these resources as they are on the instance. It does not create them. */
var KEPT_BY_APPLY = /* @__PURE__ */ new Set(["credential", "variable"]);
var MOVED_DETAIL = {
	workflow: {
		existing: "promotions.preview.blockers.movedWorkflow",
		newProject: "promotions.preview.blockers.movedWorkflow.newProject"
	},
	folder: {
		existing: "promotions.preview.blockers.movedFolder",
		newProject: "promotions.preview.blockers.movedFolder.newProject"
	}
};
/** Labels for change details and blockers in the promotion preview. */
function usePromotionPreviewLabels() {
	const i18n = useI18n();
	function changeLabel(resource, direction) {
		switch (resource.change) {
			case "added": return direction === "apply" && KEPT_BY_APPLY.has(resource.type) ? i18n.baseText("promotions.preview.side.notOnInstance") : i18n.baseText("promotions.preview.change.added");
			case "archived": return i18n.baseText("promotions.preview.change.archived");
			case "deleted": return i18n.baseText("promotions.preview.change.deleted");
			case "modified":
				if (resource.previousParentKey !== void 0) return i18n.baseText("promotions.preview.change.moved");
				if (resource.previousId !== void 0) return i18n.baseText("promotions.preview.change.linked");
				if (resource.previousName !== void 0) return i18n.baseText("promotions.preview.change.renamed");
				return i18n.baseText("promotions.preview.change.modified");
			case "unchanged": return;
		}
	}
	/** Why the resource stops the operation. `undefined` when it does not. */
	function blockerMessage(resource, blockers = []) {
		const blocking = blockers.filter(isBlocking);
		if (blocking.length === 0) return void 0;
		if (resource.type === "workflow") {
			if (resource.movedToProject) return i18n.baseText("promotions.preview.marker.movedOut", { interpolate: { project: resource.movedToProject.name ?? i18n.baseText("promotions.preview.personalProject") } });
			if (resource.movedFromProject) return i18n.baseText("promotions.preview.marker.movedIn", { interpolate: { project: resource.movedFromProject.name } });
			return i18n.baseText("promotions.preview.marker.workflow", {
				adjustToNumber: blocking.length,
				interpolate: { count: String(blocking.length) }
			});
		}
		const [first] = blocking;
		if (first.kind === "moved" && resource.type === "folder") return i18n.baseText("promotions.preview.marker.movedFolder");
		const count = new Set(blocking.flatMap(({ workflowKeys }) => workflowKeys)).size;
		const options = {
			adjustToNumber: count,
			interpolate: { count: String(count) }
		};
		if (first.kind === "access") return i18n.baseText("promotions.preview.marker.access", options);
		if (first.kind === "missing" && resource.type === "credential") return i18n.baseText("promotions.preview.marker.missingCredential", options);
		if (first.kind === "missing" && resource.type === "variable") return i18n.baseText("promotions.preview.marker.missingVariable", options);
		return i18n.baseText("promotions.preview.marker.conflict", options);
	}
	/** The checkbox of a project or folder selects the workflows inside it. */
	function selectLabel(resource) {
		const interpolate = { name: resource.name };
		return isContainer(resource) ? i18n.baseText("promotions.preview.selectContainer", { interpolate }) : i18n.baseText("promotions.preview.select", { interpolate });
	}
	/** Names both projects of a move between projects, and how to fix it. */
	function moveDetail(type, move) {
		return i18n.baseText(MOVED_DETAIL[type][move.projectExists ? "existing" : "newProject"], { interpolate: {
			project: move.project.name,
			instanceProject: move.instanceProject.name ?? i18n.baseText("promotions.preview.personalProject")
		} });
	}
	return {
		changeLabel,
		blockerMessage,
		selectLabel,
		moveDetail
	};
}
//#endregion
export { withMoveAndRenameNote as a, indexBlockers as c, scopeCheck as d, toOperationRequest as f, warningSegments as i, isBlocking as l, httpUrl as n, blockersOf as o, touchesDestructiveChange as p, promoteSuccessToast as r, crossProjectMoveBlockers as s, usePromotionPreviewLabels as t, listBlockers as u };
