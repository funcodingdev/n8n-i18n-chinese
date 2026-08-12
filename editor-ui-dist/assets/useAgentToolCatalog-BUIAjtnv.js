import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { R as useNodeTypesStore } from "./workflows.store-CEslMXyQ.js";
import { B as SUPPORTED_WORKFLOW_TOOL_TRIGGERS, Ci as isCommunityPackageName, I as AGENT_BUILDER_HIDDEN_AVAILABLE_TOOL_NODE_TYPES, R as INCOMPATIBLE_WORKFLOW_TOOL_BODY_NODE_TYPES, mi as NodeConnectionTypes } from "./src-D3mf01t5.js";
import { at as AI_SECTION_RECOMMENDED_TOOLS } from "./constants-DCcvObnS.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-CDZ4Ng2p.js";
import { i as _virtual_node_popularity_data_default } from "./canvas.eventBus-Cl7BHw7A.js";
import { t as isMcpRelatedNodeType } from "./useMcpServerAdapter-DSXj0OiH.js";
//#region src/features/agents/composables/useAgentToolCatalog.ts
var nodePopularityMap = new Map(_virtual_node_popularity_data_default.map((node) => [node.id, node.popularity]));
var supportedWorkflowToolTriggerTypes = new Set(SUPPORTED_WORKFLOW_TOOL_TRIGGERS);
var incompatibleWorkflowToolBodyNodeTypes = new Set(INCOMPATIBLE_WORKFLOW_TOOL_BODY_NODE_TYPES);
var hiddenAvailableToolNodeTypes = new Set(AGENT_BUILDER_HIDDEN_AVAILABLE_TOOL_NODE_TYPES);
function hasInputs(nodeType) {
	const { inputs } = nodeType;
	if (Array.isArray(inputs)) return inputs.length > 0;
	return true;
}
function isHiddenAvailableToolType(nodeType) {
	return hiddenAvailableToolNodeTypes.has(nodeType.name);
}
function hasToolsSubcategory(nodeType, subcategory) {
	return nodeType.codex?.subcategories?.Tools?.includes(subcategory) ?? false;
}
function isAvailableN8nToolType(nodeType) {
	return hasToolsSubcategory(nodeType, AI_SECTION_RECOMMENDED_TOOLS);
}
function isWorkflowCompatibleWithAgentTools(workflow) {
	const nodes = workflow.nodes ?? [];
	const hasSupportedTrigger = nodes.some((node) => supportedWorkflowToolTriggerTypes.has(node.type));
	const hasIncompatibleBodyNode = nodes.some((node) => incompatibleWorkflowToolBodyNodeTypes.has(node.type));
	return hasSupportedTrigger && !hasIncompatibleBodyNode;
}
/**
* Tab a node type belongs to in the tools connection modal.
*
* Community packages list alongside first-party ones in the app-action tab, but
* are still matched first, by provenance rather than install state: that stops a
* third-party package claiming the n8n tab through a self-declared "Recommended
* Tools" codex subcategory. Nothing is taken from the MCP tab, which only
* matches first-party names.
*/
function toolCategoryForNodeType(nodeType) {
	if (isCommunityPackageName(nodeType.name)) return "app-action";
	if (isMcpRelatedNodeType(nodeType.name)) return "mcp";
	if (isAvailableN8nToolType(nodeType)) return "n8n";
	return "app-action";
}
/**
* Ordering within a tab, derived from the category so there is one source of
* truth. Every category `toolCategoryForNodeType` can return must appear here:
* `indexOf` returns -1 for a missing one, which would sort it ahead of the rest.
*/
var NODE_CATEGORY_ORDER = [
	"mcp",
	"n8n",
	"app-action"
];
function nodeTypeOrderRank(nodeType) {
	return NODE_CATEGORY_ORDER.indexOf(toolCategoryForNodeType(nodeType));
}
/**
* Catalog of node types and project workflows eligible as agent tools.
* Node types are sorted by category first, then popularity, so each category
* tab lists its most-used tools first.
*/
function useAgentToolCatalog() {
	const nodeTypesStore = useNodeTypesStore();
	const workflowsListStore = useWorkflowsListStore();
	/**
	* Fetched workflows kept local — do NOT write into workflowsListStore's
	* shared cache (would clobber the Workflows list page).
	*/
	const projectWorkflows = ref([]);
	/**
	* Falls back to the community preview description so uninstalled verified
	* community tools (already in the AiTool name index via visibleNodeTypes)
	* are not dropped — same catalog the canvas Tools picker uses.
	*/
	function resolveToolNodeType(name) {
		return nodeTypesStore.getNodeType(name) ?? nodeTypesStore.communityNodeType(name)?.nodeDescription ?? null;
	}
	const availableToolTypes = computed(() => {
		const names = nodeTypesStore.visibleNodeTypesByOutputConnectionTypeNames[NodeConnectionTypes.AiTool] ?? [];
		return [...new Set(names)].map((name) => resolveToolNodeType(name)).filter((nt) => nt !== null && !nt.hidden && !isHiddenAvailableToolType(nt) && !hasInputs(nt)).sort((a, b) => {
			const rankDiff = nodeTypeOrderRank(a) - nodeTypeOrderRank(b);
			if (rankDiff !== 0) return rankDiff;
			const popA = nodePopularityMap.get(a.name) ?? 0;
			return (nodePopularityMap.get(b.name) ?? 0) - popA;
		});
	});
	const availableWorkflows = computed(() => projectWorkflows.value.filter((workflow) => !workflow.isArchived && isWorkflowCompatibleWithAgentTools(workflow)));
	async function loadWorkflows(projectId) {
		try {
			projectWorkflows.value = await workflowsListStore.searchWorkflows({
				projectId,
				triggerNodeTypes: [...SUPPORTED_WORKFLOW_TOOL_TRIGGERS],
				select: [
					"id",
					"name",
					"description",
					"isArchived",
					"nodes",
					"updatedAt"
				]
			});
		} catch (error) {
			console.warn("[useAgentToolCatalog] failed to load workflows for project", error);
		}
	}
	return {
		availableToolTypes,
		availableWorkflows,
		projectWorkflows,
		loadWorkflows,
		resolveToolNodeType
	};
}
//#endregion
export { toolCategoryForNodeType as n, useAgentToolCatalog as r, hasInputs as t };
