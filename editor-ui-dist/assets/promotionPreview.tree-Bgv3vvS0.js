//#region src/features/integrations/promotions.ee/promotionPreview.tree.ts
/**
* Sub-workflows come first, next to the workflows. The others follow the project tabs:
* credentials, variables, data tables. Tags come last.
*/
var GROUP_ORDER = [
	"subWorkflow",
	"credential",
	"variable",
	"dataTable",
	"tag"
];
var RESOURCE_ICONS = {
	project: "layers",
	folder: "folder",
	workflow: "workflow",
	credential: "key-round",
	dataTable: "table",
	variable: "variable",
	tag: "tags"
};
function resourceIcon(type) {
	return RESOURCE_ICONS[type];
}
/** Projects and folders hold other resources. */
var isContainer = (resource) => resource.type === "project" || resource.type === "folder";
/** Projects and folders without a change only give structure. They get no change card. */
function hasCard(resource) {
	return !isContainer(resource) || resource.change !== "unchanged";
}
/** The dependency group of a resource, or `null` when it belongs to the project hierarchy. */
function groupOf(resource) {
	switch (resource.type) {
		case "project":
		case "folder": return null;
		case "workflow": return resource.parentKey === null ? "subWorkflow" : null;
		default: return resource.type;
	}
}
function byFolderThenName(a, b) {
	return Number(b.type === "folder") - Number(a.type === "folder") || a.name.localeCompare(b.name) || a.key.localeCompare(b.key);
}
function toItem(resource, children) {
	return {
		id: resource.key,
		label: resource.name,
		icon: resourceIcon(resource.type),
		kind: "resource",
		...children && children.length > 0 ? { children } : {}
	};
}
function hierarchyItems(resources) {
	const keys = new Set(resources.map((resource) => resource.key));
	const childrenOf = /* @__PURE__ */ new Map();
	for (const resource of resources) {
		const parentKey = resource.parentKey !== null && keys.has(resource.parentKey) ? resource.parentKey : null;
		const siblings = childrenOf.get(parentKey) ?? [];
		siblings.push(resource);
		childrenOf.set(parentKey, siblings);
	}
	const build = (parentKey) => (childrenOf.get(parentKey) ?? []).sort(byFolderThenName).map((resource) => toItem(resource, build(resource.key)));
	return build(null);
}
function buildPreviewTree(preview, labels) {
	const hierarchy = [];
	const groups = /* @__PURE__ */ new Map();
	for (const resource of preview.resources) {
		const group = groupOf(resource);
		if (group === null) hierarchy.push(resource);
		else {
			const members = groups.get(group) ?? [];
			members.push(resource);
			groups.set(group, members);
		}
	}
	const sections = [];
	const workflows = hierarchyItems(hierarchy);
	if (workflows.length > 0) sections.push({
		id: "section:workflows",
		label: labels.workflows,
		kind: "section",
		children: workflows
	});
	for (const group of GROUP_ORDER) {
		const members = groups.get(group);
		if (!members) continue;
		sections.push({
			id: `group:${group}`,
			label: labels.group(group),
			kind: "section",
			children: [...members].sort(byFolderThenName).map((resource) => toItem(resource))
		});
	}
	return sections;
}
/** The order of the change cards. It follows the tree, so the tree and the cards agree. */
function cardOrder(items, resources) {
	return flattenPreviewTree(items).map(({ item }) => item).filter((item) => {
		const resource = resources.get(item.id);
		return item.kind === "resource" && resource !== void 0 && hasCard(resource);
	}).map((item) => item.id);
}
/** The rows of the tree, top to bottom. */
function flattenPreviewTree(items, indent = 0) {
	return items.flatMap((item) => [{
		item,
		indent
	}, ...item.children ? flattenPreviewTree(item.children, item.kind === "resource" ? indent + 1 : indent) : []]);
}
//#endregion
export { resourceIcon as a, isContainer as i, cardOrder as n, flattenPreviewTree as r, buildPreviewTree as t };
