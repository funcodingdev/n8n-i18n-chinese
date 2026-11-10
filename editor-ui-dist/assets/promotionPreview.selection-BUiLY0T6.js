import { Ox as makePublicApiRequest, kx as makeRestApiRequest } from "./app-DGoK9ugD.js";
import { i as isContainer } from "./promotionPreview.tree-Bgv3vvS0.js";
//#region src/features/integrations/promotions.ee/promotions.api.ts
async function getPromotionPreview(context, projectId, direction) {
	return await makeRestApiRequest(context, "GET", `/promotions/${projectId}/changes/${direction}`);
}
async function getPromotionResourceDetails(context, projectId, direction, payload) {
	return await makeRestApiRequest(context, "POST", `/promotions/${projectId}/changes/${direction}/details`, payload);
}
async function getPromotionReviewChanges(context, reviewId) {
	return await makeRestApiRequest(context, "GET", `/promotions/reviews/${reviewId}/changes`);
}
async function getPromotionReviewDetails(context, reviewId, payload) {
	return await makeRestApiRequest(context, "POST", `/promotions/reviews/${reviewId}/changes/details`, payload);
}
async function promoteProjectSelection(context, projectId, payload) {
	return await makePublicApiRequest(context, "POST", `/promotions/projects/${projectId}/promote`, payload);
}
//#endregion
//#region src/features/integrations/promotions.ee/promotionPreview.selection.ts
var initialSelectionState = {
	mode: "default",
	selected: /* @__PURE__ */ new Set()
};
var noKeys = /* @__PURE__ */ new Set();
function addTo(map, key, value) {
	const list = map.get(key);
	if (!list) map.set(key, [value]);
	else if (!list.includes(value)) list.push(value);
}
function buildSelectionGraph(preview, direction) {
	const resources = new Map(preview.resources.map((resource) => [resource.key, resource]));
	const requires = /* @__PURE__ */ new Map();
	const requiredBy = /* @__PURE__ */ new Map();
	const calls = /* @__PURE__ */ new Map();
	const calledBy = /* @__PURE__ */ new Map();
	for (const { workflowKey, resourceKey, included } of preview.dependencies) {
		if (!resources.has(workflowKey) || !resources.has(resourceKey)) continue;
		if (included) {
			addTo(requires, workflowKey, resourceKey);
			addTo(requiredBy, resourceKey, workflowKey);
		} else {
			addTo(calls, workflowKey, resourceKey);
			addTo(calledBy, resourceKey, workflowKey);
		}
	}
	return {
		direction,
		resources,
		requires,
		requiredBy,
		calls,
		calledBy
	};
}
function canSelect(graph, key) {
	return graph.resources.get(key)?.selectable === true;
}
function selectableKeys(graph) {
	return [...graph.resources.values()].filter((resource) => resource.selectable).map((resource) => resource.key);
}
/** The selectable resources that users can add now. */
function availableKeys(graph, disabled = noKeys) {
	return selectableKeys(graph).filter((key) => !disabled.has(key));
}
/** Projects and folders above the resource, nearest first. */
function ancestorsOf(graph, key) {
	const ancestors = [];
	const seen = /* @__PURE__ */ new Set([key]);
	let parentKey = graph.resources.get(key)?.parentKey ?? null;
	while (parentKey !== null && !seen.has(parentKey) && graph.resources.has(parentKey)) {
		ancestors.push(parentKey);
		seen.add(parentKey);
		parentKey = graph.resources.get(parentKey)?.parentKey ?? null;
	}
	return ancestors;
}
/** Resources that `key` needs, directly or through other required resources. */
function requiredClosure(graph, key) {
	const reached = [];
	const seen = /* @__PURE__ */ new Set([key]);
	const queue = [key];
	for (let index = 0; index < queue.length; index++) for (const next of graph.requires.get(queue[index]) ?? []) {
		if (seen.has(next)) continue;
		seen.add(next);
		reached.push(next);
		queue.push(next);
	}
	return reached;
}
function resolveInclusion(graph, selected) {
	const reasons = /* @__PURE__ */ new Map();
	const required = /* @__PURE__ */ new Map();
	const containers = /* @__PURE__ */ new Map();
	const called = /* @__PURE__ */ new Map();
	for (const key of selected) {
		if (!graph.resources.has(key)) continue;
		reasons.set(key, { kind: "selected" });
		for (const dependency of requiredClosure(graph, key)) addTo(required, dependency, key);
		for (const ancestor of ancestorsOf(graph, key)) if (graph.resources.get(ancestor)?.change !== "unchanged") addTo(containers, ancestor, key);
		for (const reference of graph.calls.get(key) ?? []) addTo(called, reference, key);
	}
	if (graph.direction === "apply" && reasons.size > 0) {
		for (const { key, type, change } of graph.resources.values()) if (type === "folder" && change === "added" && !containers.has(key)) containers.set(key, []);
	}
	for (const [key, by] of required) if (!reasons.has(key)) reasons.set(key, {
		kind: "required",
		by
	});
	for (const [key, by] of containers) if (!reasons.has(key)) reasons.set(key, {
		kind: "container",
		by
	});
	for (const [key, by] of called) if (!reasons.has(key)) reasons.set(key, {
		kind: "calledOnly",
		by
	});
	return {
		included: new Set([...reasons].filter(([, reason]) => reason.kind !== "calledOnly").map(([key]) => key)),
		reasons
	};
}
/** Included resources that the operation changes. */
function includedChangeCount(graph, { included }) {
	return [...included].filter((key) => graph.resources.get(key)?.change !== "unchanged").length;
}
/** The included changes when every selectable resource is selected. */
function totalChangeCount(graph) {
	return includedChangeCount(graph, resolveInclusion(graph, new Set(selectableKeys(graph))));
}
function toggleSelection(state, graph, key, disabled = noKeys) {
	if (!canSelect(graph, key)) return state;
	const selected = new Set(state.selected);
	if (selected.has(key)) selected.delete(key);
	else if (disabled.has(key)) return state;
	else selected.add(key);
	return {
		mode: "custom",
		selected
	};
}
/** The selectable resources inside a project or folder, at any depth. */
function selectableDescendants(graph, containerKey) {
	return selectableKeys(graph).filter((key) => ancestorsOf(graph, key).includes(containerKey));
}
/**
* A project or folder shows the state of the selectable resources inside it. A disabled
* resource counts only while it is selected, because users cannot add it.
*/
function containerCheckState(graph, selected, containerKey, disabled = noKeys) {
	const keys = selectableDescendants(graph, containerKey).filter((key) => !disabled.has(key) || selected.has(key));
	const count = keys.filter((key) => selected.has(key)).length;
	if (count === 0) return "unchecked";
	return count === keys.length ? "checked" : "indeterminate";
}
/**
* The checkbox of a resource in the tree and on its change card. Workflows toggle themselves,
* projects and folders toggle the workflows inside them, and dependencies stay read-only: they
* are checked while a selected workflow needs them.
*/
function selectionCheck(graph, resource, state) {
	const { selected, inclusion, disabled, locked } = state;
	if (resource.selectable) {
		const checked = selected.has(resource.key);
		return {
			checked,
			indeterminate: false,
			disabled: locked || !checked && disabled.has(resource.key)
		};
	}
	if (isContainer(resource)) {
		const check = containerCheckState(graph, selected, resource.key, disabled);
		const canAdd = selectableDescendants(graph, resource.key).some((key) => !disabled.has(key));
		return {
			checked: check === "checked",
			indeterminate: check === "indeterminate",
			disabled: locked || !canAdd && check === "unchecked"
		};
	}
	return {
		checked: inclusion.included.has(resource.key),
		indeterminate: false,
		disabled: true
	};
}
/**
* Selects every resource inside a project or folder that users can add, or clears them all when
* those are selected. The container itself never becomes selected; it only gives structure.
*/
function toggleContainer(state, graph, containerKey, disabled = noKeys) {
	const keys = selectableDescendants(graph, containerKey);
	const available = keys.filter((key) => !disabled.has(key));
	const selected = new Set(state.selected);
	if (available.every((key) => selected.has(key))) for (const key of keys) selected.delete(key);
	else for (const key of available) selected.add(key);
	return {
		mode: "custom",
		selected
	};
}
/** Adds every resource that users can add. Selected disabled resources stay selected. */
function selectAll(state, graph, disabled = noKeys) {
	const kept = [...state.selected].filter((key) => canSelect(graph, key));
	return {
		mode: "custom",
		selected: /* @__PURE__ */ new Set([...kept, ...availableKeys(graph, disabled)])
	};
}
function clearSelection() {
	return {
		mode: "custom",
		selected: /* @__PURE__ */ new Set()
	};
}
/**
* Applies a newly loaded preview. A default selection follows the preview: it holds every
* resource that users can add, and keeps a selected resource that became disabled, so the page
* never removes a selected workflow on its own. A custom selection keeps the keys that are still
* selectable and reports the others.
*/
function applyPreview(state, graph, disabled = noKeys) {
	if (state.mode === "default") {
		const selected = selectableKeys(graph).filter((key) => !disabled.has(key) || state.selected.has(key));
		return {
			state: {
				mode: "default",
				selected: new Set(selected)
			},
			dropped: []
		};
	}
	const kept = [...state.selected].filter((key) => canSelect(graph, key));
	const dropped = [...state.selected].filter((key) => !canSelect(graph, key));
	return {
		state: {
			mode: "custom",
			selected: new Set(kept)
		},
		dropped
	};
}
//#endregion
export { promoteProjectSelection as _, includedChangeCount as a, selectAll as c, toggleSelection as d, totalChangeCount as f, getPromotionReviewDetails as g, getPromotionReviewChanges as h, clearSelection as i, selectionCheck as l, getPromotionResourceDetails as m, availableKeys as n, initialSelectionState as o, getPromotionPreview as p, buildSelectionGraph as r, resolveInclusion as s, applyPreview as t, toggleContainer as u };
