import { o as __toESM, t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { It as ref, S as computed, W as nextTick } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BjbSP7dI.js";
import { t as createEventBus } from "./event-bus-CWhIcyjm.js";
import { $ as groupItemsInSections, A as useWorkflowDocumentStore, Ct as useAiGatewayStore, G as extractAiGatewaySection, Gi as isVueFlowConnection, H as useNodeTypesStore, J as flattenCreateElements, O as injectWorkflowDocumentStore, Q as getSendAndWaitNodes, T as createWorkflowDocumentId, Xi as CanvasConnectionMode, Y as getAiTemplatesCallout, at as prepareCommunityNodeDetailsViewStack, br as createCanvasConnectionHandleString, dt as subcategorizeItems, et as isAINode, fn as useNDVStore, ft as transformNodeType, it as nodeTypesToCreateElements, kr as parseCanvasConnectionHandleString, lt as showsAiGatewaySection, q as finalizeItems, rt as mapToolSubcategoryIcon, st as searchNodes, tn as useRouteWorkflowId, tr as getThemedValue, ut as sortNodeCreateElements } from "./workflows.store-BO9owX3m.js";
import { E as require__baseUnary, d as require_isArrayLikeObject, r as require__baseRest } from "./merge-DTabss4r.js";
import { Ci as isCommunityPackageName, Jt as require__createCompounder, Nr as getNodeInputs, Oo as require_toString, Pt as require__baseFlatten, Wr as isHitlToolType, Yi as EVALUATION_TRIGGER_NODE_TYPE, _a as require__SetCache, fn as require__arrayIncludesWith, ga as require__cacheHas, ko as require__arrayMap, mi as NodeConnectionTypes, pn as require__arrayIncludes, ua as v4, wo as require_get } from "./src-B2jBAc9z.js";
import { fr as defineStore, lr as STORES } from "./useRootStore-B4L7-X8D.js";
import { t as useSettingsStore } from "./settings.store-CT5GOXKB.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { $ as AI_CATEGORY_TEXT_SPLITTERS, $t as FILTER_NODE_TYPE, Bn as SPLIT_IN_BATCHES_NODE_TYPE, Bt as CRYPTO_NODE_TYPE, Dt as AI_MCP_TOOL_NODE_TYPE, Fn as SET_NODE_TYPE, Ft as COMPRESSION_NODE_TYPE, Gt as EDIT_IMAGE_NODE_TYPE, H as AI_CATEGORY_CHAINS, Ht as DATA_TABLE_NODE_TYPE, It as CONVERT_TO_FILE_NODE_TYPE, J as AI_CATEGORY_MEMORY, K as AI_CATEGORY_LANGUAGE_MODELS, Kt as EMAIL_IMAP_NODE_TYPE, Nn as RSS_READ_NODE_TYPE, Nt as CHAT_TRIGGER_NODE_TYPE, Ot as AI_TRANSFORM_NODE_TYPE$1, Pn as SCHEDULE_TRIGGER_NODE_TYPE, Pt as CODE_NODE_TYPE, Q as AI_CATEGORY_ROOT_NODES, Qn as XML_NODE_TYPE, Qt as EXTRACT_FROM_FILE_NODE_TYPE, St as TRIGGER_NODE_CREATOR_VIEW, Tt as AGGREGATE_NODE_TYPE, U as AI_CATEGORY_DOCUMENT_LOADERS, Un as SUMMARIZE_NODE_TYPE, Ut as DATETIME_NODE_TYPE, V as AI_CATEGORY_AGENTS, Vn as SPLIT_OUT_NODE_TYPE, W as AI_CATEGORY_EMBEDDING, X as AI_CATEGORY_OUTPUTPARSER, Y as AI_CATEGORY_OTHER_TOOLS, Yn as WEBHOOK_NODE_TYPE, Z as AI_CATEGORY_RETRIEVERS, Zt as EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE, an as IF_NODE_TYPE, bt as TEMPLATE_CATEGORY_AI, cn as LIMIT_NODE_TYPE, dn as MANUAL_TRIGGER_NODE_TYPE, dt as HELPERS_SUBCATEGORY, et as AI_CATEGORY_TOOLS, fn as MARKDOWN_NODE_TYPE, ft as HITL_SUBCATEGORY, gt as OTHER_TRIGGER_NODES_SUBCATEGORY, hn as MESSAGE_AN_AGENT_NODE_TYPE, ht as NODE_CREATOR_OPEN_SOURCES, it as AI_OTHERS_NODE_CREATOR_VIEW, jn as REMOVE_DUPLICATES_NODE_TYPE, lt as CORE_NODES_CATEGORY, mn as MERGE_NODE_TYPE, mt as NEW_TOOL_CATEGORIES, nn as HTML_NODE_TYPE, nt as AI_CODE_TOOL_LANGCHAIN_NODE_TYPE, ot as AI_UNCATEGORIZED_CATEGORY, pt as HUMAN_IN_THE_LOOP_CATEGORY, q as AI_CATEGORY_MCP_NODES, qt as EMAIL_SEND_NODE_TYPE, rn as HTTP_REQUEST_NODE_TYPE, st as AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, tn as FORM_TRIGGER_NODE_TYPE, tt as AI_CATEGORY_VECTOR_STORES, ut as FLOWS_CONTROL_SUBCATEGORY, vt as REGULAR_NODE_CREATOR_VIEW, xt as TRANSFORM_DATA_SUBCATEGORY } from "./constants-DOw6b_w2.js";
import { n as useUIStore } from "./ui.store-DmJK9WGf.js";
import { s as require_upperFirst, t as useEvaluationStore } from "./evaluation.store-CDDLv7e9.js";
import { t as useExternalHooks } from "./useExternalHooks-Bqgi4PzB.js";
import { t as useTemplatesStore } from "./templates.store-DkeMwSPF.js";
import { n as getNodeIconSource } from "./nodeIcon-D48sEF3m.js";
//#region src/features/shared/nodeCreator/composables/useGetNodeCreatorFilter.ts
function useGetNodeCreatorFilter() {
	const nodeTypesStore = useNodeTypesStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	function getNodeCreatorFilter(nodeName, outputType, sourceNode) {
		let filter;
		const workflowNode = workflowDocumentStore.value.getNodeByName(nodeName);
		if (!workflowNode) return { nodes: [] };
		const nodeType = nodeTypesStore.getNodeType(workflowNode?.type, workflowNode.typeVersion) ?? nodeTypesStore.communityNodeType(workflowNode?.type)?.nodeDescription;
		const expression = workflowDocumentStore.value.getExpressionHandler();
		if (nodeType && expression) {
			const filterFound = getNodeInputs({ expression }, workflowNode, nodeType).filter((input) => {
				if (typeof input === "string" || input.type !== outputType || !input.filter) return false;
				return true;
			});
			if (filterFound.length) filter = filterFound[0].filter;
		}
		if (outputType === NodeConnectionTypes.AiTool) {
			const isConnectionToAgent = sourceNode.type === "@n8n/n8n-nodes-langchain.agent" || sourceNode.type === "@n8n/n8n-nodes-langchain.agentTool";
			const conditions = [(node) => isConnectionToAgent ? true : !isHitlToolType(node.key)];
			filter = {
				...filter,
				conditions
			};
		}
		return filter;
	}
	return { getNodeCreatorFilter };
}
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/_baseDifference.js
var require__baseDifference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SetCache = require__SetCache(), arrayIncludes = require__arrayIncludes(), arrayIncludesWith = require__arrayIncludesWith(), arrayMap = require__arrayMap(), baseUnary = require__baseUnary(), cacheHas = require__cacheHas();
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	/**
	* The base implementation of methods like `_.difference` without support
	* for excluding multiple arrays or iteratee shorthands.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {Array} values The values to exclude.
	* @param {Function} [iteratee] The iteratee invoked per element.
	* @param {Function} [comparator] The comparator invoked per element.
	* @returns {Array} Returns the new array of filtered values.
	*/
	function baseDifference(array, values, iteratee, comparator) {
		var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
		if (!length) return result;
		if (iteratee) values = arrayMap(values, baseUnary(iteratee));
		if (comparator) {
			includes = arrayIncludesWith;
			isCommon = false;
		} else if (values.length >= LARGE_ARRAY_SIZE) {
			includes = cacheHas;
			isCommon = false;
			values = new SetCache(values);
		}
		outer: while (++index < length) {
			var value = array[index], computed = iteratee == null ? value : iteratee(value);
			value = comparator || value !== 0 ? value : 0;
			if (isCommon && computed === computed) {
				var valuesIndex = valuesLength;
				while (valuesIndex--) if (values[valuesIndex] === computed) continue outer;
				result.push(value);
			} else if (!includes(values, computed, comparator)) result.push(value);
		}
		return result;
	}
	module.exports = baseDifference;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/difference.js
var require_difference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseDifference = require__baseDifference(), baseFlatten = require__baseFlatten(), baseRest = require__baseRest(), isArrayLikeObject = require_isArrayLikeObject();
	module.exports = baseRest(function(array, values) {
		return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
	});
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/capitalize.js
var require_capitalize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toString = require_toString(), upperFirst = require_upperFirst();
	/**
	* Converts the first character of `string` to upper case and the remaining
	* to lower case.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to capitalize.
	* @returns {string} Returns the capitalized string.
	* @example
	*
	* _.capitalize('FRED');
	* // => 'Fred'
	*/
	function capitalize(string) {
		return upperFirst(toString(string).toLowerCase());
	}
	module.exports = capitalize;
}));
//#endregion
//#region ../../../node_modules/.pnpm/lodash@4.18.1_patch_hash=81ead1b07fc8efda87bd2724dbd876ab49f4a0aa03f96c3770060b2ea47d9e0b/node_modules/lodash/camelCase.js
var require_camelCase = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var capitalize = require_capitalize();
	module.exports = require__createCompounder()(function(result, word, index) {
		word = word.toLowerCase();
		return result + (index ? capitalize(word) : word);
	});
}));
//#endregion
//#region src/features/shared/nodeCreator/views/viewsData.ts
var import_camelCase = /* @__PURE__ */ __toESM(require_camelCase(), 1);
function getNodeView(node) {
	return {
		key: node.name,
		type: "node",
		properties: {
			group: [],
			name: node.name,
			displayName: node.displayName,
			title: node.displayName,
			description: node.description,
			icon: node.icon,
			iconUrl: node.iconUrl
		}
	};
}
function getAiNodesBySubcategory(nodes, subcategory) {
	return nodes.filter((node) => !node.hidden && node.codex?.subcategories?.["AI"]?.includes(subcategory)).map(getNodeView).sort((a, b) => a.properties.displayName.localeCompare(b.properties.displayName));
}
function getEvaluationNode(nodeTypesStore, isEvaluationVariantEnabled) {
	const evaluationNodeStore = nodeTypesStore.getNodeType("n8n-nodes-base.evaluation");
	if (!isEvaluationVariantEnabled || !evaluationNodeStore) return [];
	const evaluationNode = getNodeView(evaluationNodeStore);
	return [{
		...evaluationNode,
		properties: {
			...evaluationNode.properties,
			defaults: {
				name: "Evaluation",
				color: "#c3c9d5"
			}
		}
	}];
}
function getMessageAnAgentNode(nodeTypesStore, settingsStore) {
	if (!settingsStore.isModuleActive("agents")) return [];
	const node = nodeTypesStore.getNodeType(MESSAGE_AN_AGENT_NODE_TYPE);
	if (!node) return [];
	return [getNodeView(node)];
}
function AIView(_nodes) {
	const i18n = useI18n();
	const nodeTypesStore = useNodeTypesStore();
	const settingsStore = useSettingsStore();
	const templatesStore = useTemplatesStore();
	const isEvaluationEnabled = useEvaluationStore().isEvaluationEnabled;
	const evaluationNode = getEvaluationNode(nodeTypesStore, isEvaluationEnabled);
	const chainNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_CHAINS);
	const agentNodes = getAiNodesBySubcategory(nodeTypesStore.allLatestNodeTypes, AI_CATEGORY_AGENTS);
	const messageAnAgentNode = getMessageAnAgentNode(nodeTypesStore, settingsStore);
	const websiteCategoryURLParams = new URLSearchParams(templatesStore.websiteTemplateRepositoryParameters);
	websiteCategoryURLParams.set("utm_user_role", "AdvancedAI");
	const aiTemplatesURL = templatesStore.constructTemplateRepositoryURL(websiteCategoryURLParams, TEMPLATE_CATEGORY_AI);
	const callouts = settingsStore.isCanvasOnly ? [] : [getAiTemplatesCallout(aiTemplatesURL)];
	return {
		value: "AI",
		title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
		subtitle: i18n.baseText("nodeCreator.aiPanel.selectAiNode"),
		items: [
			...callouts,
			...messageAnAgentNode,
			...agentNodes,
			...chainNodes,
			...evaluationNode,
			{
				key: AI_OTHERS_NODE_CREATOR_VIEW,
				type: "view",
				properties: {
					title: i18n.baseText("nodeCreator.aiPanel.aiOtherNodes"),
					icon: "robot",
					description: i18n.baseText("nodeCreator.aiPanel.aiOtherNodesDescription")
				}
			}
		]
	};
}
function AINodesView(_nodes) {
	const i18n = useI18n();
	function getAISubcategoryProperties(nodeConnectionType) {
		return {
			connectionType: nodeConnectionType,
			iconProps: { color: `var(--node-type-${nodeConnectionType}-color)` },
			panelClass: `nodes-list-panel-${nodeConnectionType}`
		};
	}
	function getSubcategoryInfo(subcategory) {
		const localeKey = `nodeCreator.subcategoryInfos.${(0, import_camelCase.default)(subcategory)}`;
		const info = i18n.baseText(localeKey);
		if (info === localeKey) return void 0;
		return info;
	}
	return {
		value: AI_OTHERS_NODE_CREATOR_VIEW,
		title: i18n.baseText("nodeCreator.aiPanel.aiOtherNodes"),
		subtitle: i18n.baseText("nodeCreator.aiPanel.selectAiNode"),
		items: [
			{
				key: AI_CATEGORY_DOCUMENT_LOADERS,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_DOCUMENT_LOADERS,
					info: getSubcategoryInfo(AI_CATEGORY_DOCUMENT_LOADERS),
					icon: "file-input",
					...getAISubcategoryProperties(NodeConnectionTypes.AiDocument)
				}
			},
			{
				key: AI_CATEGORY_LANGUAGE_MODELS,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_LANGUAGE_MODELS,
					info: getSubcategoryInfo(AI_CATEGORY_LANGUAGE_MODELS),
					icon: "language",
					...getAISubcategoryProperties(NodeConnectionTypes.AiLanguageModel)
				}
			},
			{
				key: AI_CATEGORY_MEMORY,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_MEMORY,
					info: getSubcategoryInfo(AI_CATEGORY_MEMORY),
					icon: "brain",
					...getAISubcategoryProperties(NodeConnectionTypes.AiMemory)
				}
			},
			{
				key: AI_CATEGORY_OUTPUTPARSER,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_OUTPUTPARSER,
					info: getSubcategoryInfo(AI_CATEGORY_OUTPUTPARSER),
					icon: "list",
					...getAISubcategoryProperties(NodeConnectionTypes.AiOutputParser)
				}
			},
			{
				key: AI_CATEGORY_RETRIEVERS,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_RETRIEVERS,
					info: getSubcategoryInfo(AI_CATEGORY_RETRIEVERS),
					icon: "search",
					...getAISubcategoryProperties(NodeConnectionTypes.AiRetriever)
				}
			},
			{
				key: AI_CATEGORY_TEXT_SPLITTERS,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_TEXT_SPLITTERS,
					info: getSubcategoryInfo(AI_CATEGORY_TEXT_SPLITTERS),
					icon: "grip-lines-vertical",
					...getAISubcategoryProperties(NodeConnectionTypes.AiTextSplitter)
				}
			},
			{
				type: "subcategory",
				key: AI_CATEGORY_TOOLS,
				category: CORE_NODES_CATEGORY,
				properties: {
					title: AI_CATEGORY_TOOLS,
					info: getSubcategoryInfo(AI_CATEGORY_TOOLS),
					icon: "tools",
					...getAISubcategoryProperties(NodeConnectionTypes.AiTool),
					sections: [{
						key: "popular",
						title: i18n.baseText("nodeCreator.sectionNames.popular"),
						items: [AI_WORKFLOW_TOOL_LANGCHAIN_NODE_TYPE, AI_CODE_TOOL_LANGCHAIN_NODE_TYPE]
					}]
				}
			},
			{
				key: AI_CATEGORY_EMBEDDING,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_EMBEDDING,
					info: getSubcategoryInfo(AI_CATEGORY_EMBEDDING),
					icon: "vector-square",
					...getAISubcategoryProperties(NodeConnectionTypes.AiEmbedding)
				}
			},
			{
				key: AI_CATEGORY_VECTOR_STORES,
				type: "subcategory",
				properties: {
					title: AI_CATEGORY_VECTOR_STORES,
					info: getSubcategoryInfo(AI_CATEGORY_VECTOR_STORES),
					icon: "waypoints",
					...getAISubcategoryProperties(NodeConnectionTypes.AiVectorStore)
				}
			},
			{
				key: AI_UNCATEGORIZED_CATEGORY,
				type: "subcategory",
				properties: {
					title: AI_UNCATEGORIZED_CATEGORY,
					icon: "code"
				}
			}
		]
	};
}
function TriggerView() {
	const i18n = useI18n();
	const evaluationTriggerNode = useEvaluationStore().isEvaluationEnabled ? {
		key: EVALUATION_TRIGGER_NODE_TYPE,
		type: "node",
		category: [CORE_NODES_CATEGORY],
		properties: {
			group: [],
			name: EVALUATION_TRIGGER_NODE_TYPE,
			displayName: "When running evaluation",
			description: "Run a dataset through your workflow to test performance",
			icon: "fa:check-double",
			defaults: {
				name: "Evaluation",
				color: "#c3c9d5"
			}
		}
	} : null;
	return {
		value: TRIGGER_NODE_CREATOR_VIEW,
		title: i18n.baseText("nodeCreator.triggerHelperPanel.selectATrigger"),
		subtitle: i18n.baseText("nodeCreator.triggerHelperPanel.selectATriggerDescription"),
		items: [
			{
				key: MANUAL_TRIGGER_NODE_TYPE,
				type: "node",
				category: [CORE_NODES_CATEGORY],
				properties: {
					group: [],
					name: MANUAL_TRIGGER_NODE_TYPE,
					displayName: i18n.baseText("nodeCreator.triggerHelperPanel.manualTriggerDisplayName"),
					description: i18n.baseText("nodeCreator.triggerHelperPanel.manualTriggerDescription"),
					icon: "fa:mouse-pointer"
				}
			},
			{
				key: "*",
				type: "subcategory",
				properties: {
					forceIncludeNodes: [WEBHOOK_NODE_TYPE, EMAIL_IMAP_NODE_TYPE],
					title: "App Trigger Nodes",
					icon: "satellite-dish"
				}
			},
			{
				key: SCHEDULE_TRIGGER_NODE_TYPE,
				type: "node",
				category: [CORE_NODES_CATEGORY],
				properties: {
					group: [],
					name: SCHEDULE_TRIGGER_NODE_TYPE,
					displayName: i18n.baseText("nodeCreator.triggerHelperPanel.scheduleTriggerDisplayName"),
					description: i18n.baseText("nodeCreator.triggerHelperPanel.scheduleTriggerDescription"),
					icon: "fa:clock"
				}
			},
			{
				key: WEBHOOK_NODE_TYPE,
				type: "node",
				category: [CORE_NODES_CATEGORY],
				properties: {
					group: [],
					name: WEBHOOK_NODE_TYPE,
					displayName: i18n.baseText("nodeCreator.triggerHelperPanel.webhookTriggerDisplayName"),
					description: i18n.baseText("nodeCreator.triggerHelperPanel.webhookTriggerDescription"),
					icon: "node:webhook"
				}
			},
			{
				key: FORM_TRIGGER_NODE_TYPE,
				type: "node",
				category: [CORE_NODES_CATEGORY],
				properties: {
					group: [],
					name: FORM_TRIGGER_NODE_TYPE,
					displayName: i18n.baseText("nodeCreator.triggerHelperPanel.formTriggerDisplayName"),
					description: i18n.baseText("nodeCreator.triggerHelperPanel.formTriggerDescription"),
					icon: "node:form-trigger"
				}
			},
			{
				key: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
				type: "node",
				category: [CORE_NODES_CATEGORY],
				properties: {
					group: [],
					name: EXECUTE_WORKFLOW_TRIGGER_NODE_TYPE,
					displayName: i18n.baseText("nodeCreator.triggerHelperPanel.workflowTriggerDisplayName"),
					description: i18n.baseText("nodeCreator.triggerHelperPanel.workflowTriggerDescription"),
					icon: "fa:sign-out-alt"
				}
			},
			{
				key: CHAT_TRIGGER_NODE_TYPE,
				type: "node",
				category: [CORE_NODES_CATEGORY],
				properties: {
					group: [],
					name: CHAT_TRIGGER_NODE_TYPE,
					displayName: i18n.baseText("nodeCreator.triggerHelperPanel.chatTriggerDisplayName"),
					description: i18n.baseText("nodeCreator.triggerHelperPanel.chatTriggerDescription"),
					icon: "fa:comments"
				}
			},
			...evaluationTriggerNode ? [evaluationTriggerNode] : [],
			{
				type: "subcategory",
				key: OTHER_TRIGGER_NODES_SUBCATEGORY,
				category: CORE_NODES_CATEGORY,
				properties: {
					title: OTHER_TRIGGER_NODES_SUBCATEGORY,
					icon: "folder-open"
				}
			}
		]
	};
}
function RegularView(nodes) {
	const i18n = useI18n();
	const popularItemsSubcategory = [
		SET_NODE_TYPE,
		CODE_NODE_TYPE,
		DATA_TABLE_NODE_TYPE,
		DATETIME_NODE_TYPE,
		AI_TRANSFORM_NODE_TYPE$1
	];
	const view = {
		value: REGULAR_NODE_CREATOR_VIEW,
		title: i18n.baseText("nodeCreator.triggerHelperPanel.whatHappensNext"),
		items: [
			{
				key: "*",
				type: "subcategory",
				properties: {
					title: "App Regular Nodes",
					icon: "globe",
					forceIncludeNodes: [RSS_READ_NODE_TYPE, EMAIL_SEND_NODE_TYPE]
				}
			},
			{
				type: "subcategory",
				key: TRANSFORM_DATA_SUBCATEGORY,
				category: CORE_NODES_CATEGORY,
				properties: {
					title: TRANSFORM_DATA_SUBCATEGORY,
					icon: "pen",
					sections: [
						{
							key: "popular",
							title: i18n.baseText("nodeCreator.sectionNames.popular"),
							items: popularItemsSubcategory
						},
						{
							key: "addOrRemove",
							title: i18n.baseText("nodeCreator.sectionNames.transform.addOrRemove"),
							items: [
								FILTER_NODE_TYPE,
								REMOVE_DUPLICATES_NODE_TYPE,
								SPLIT_OUT_NODE_TYPE,
								LIMIT_NODE_TYPE
							]
						},
						{
							key: "combine",
							title: i18n.baseText("nodeCreator.sectionNames.transform.combine"),
							items: [
								SUMMARIZE_NODE_TYPE,
								AGGREGATE_NODE_TYPE,
								MERGE_NODE_TYPE
							]
						},
						{
							key: "convert",
							title: i18n.baseText("nodeCreator.sectionNames.transform.convert"),
							items: [
								HTML_NODE_TYPE,
								MARKDOWN_NODE_TYPE,
								XML_NODE_TYPE,
								CRYPTO_NODE_TYPE,
								EXTRACT_FROM_FILE_NODE_TYPE,
								CONVERT_TO_FILE_NODE_TYPE,
								COMPRESSION_NODE_TYPE,
								EDIT_IMAGE_NODE_TYPE
							]
						}
					]
				}
			},
			{
				type: "subcategory",
				key: FLOWS_CONTROL_SUBCATEGORY,
				category: CORE_NODES_CATEGORY,
				properties: {
					title: FLOWS_CONTROL_SUBCATEGORY,
					icon: "git-branch",
					sections: [{
						key: "popular",
						title: i18n.baseText("nodeCreator.sectionNames.popular"),
						items: [
							FILTER_NODE_TYPE,
							IF_NODE_TYPE,
							SPLIT_IN_BATCHES_NODE_TYPE,
							MERGE_NODE_TYPE
						]
					}]
				}
			},
			{
				type: "subcategory",
				key: HELPERS_SUBCATEGORY,
				category: CORE_NODES_CATEGORY,
				properties: {
					title: HELPERS_SUBCATEGORY,
					icon: "toolbox",
					sections: [{
						key: "popular",
						title: i18n.baseText("nodeCreator.sectionNames.popular"),
						items: [
							HTTP_REQUEST_NODE_TYPE,
							WEBHOOK_NODE_TYPE,
							CODE_NODE_TYPE,
							DATA_TABLE_NODE_TYPE
						]
					}]
				}
			},
			{
				type: "subcategory",
				key: HITL_SUBCATEGORY,
				category: HUMAN_IN_THE_LOOP_CATEGORY,
				properties: {
					title: HITL_SUBCATEGORY,
					icon: "badge-check",
					sections: [{
						key: "sendAndWait",
						title: i18n.baseText("nodeCreator.sectionNames.sendAndWait"),
						items: getSendAndWaitNodes(nodes)
					}]
				}
			}
		]
	};
	if ((nodes ?? []).some((node) => node.codex?.categories?.includes("AI"))) view.items.unshift({
		key: "AI",
		type: "view",
		properties: {
			title: i18n.baseText("nodeCreator.aiPanel.langchainAiNodes"),
			icon: "robot",
			description: i18n.baseText("nodeCreator.aiPanel.nodesForAi"),
			borderless: true
		}
	});
	view.items.push({
		key: TRIGGER_NODE_CREATOR_VIEW,
		type: "view",
		properties: {
			title: i18n.baseText("nodeCreator.triggerHelperPanel.addAnotherTrigger"),
			icon: "bolt-filled",
			description: i18n.baseText("nodeCreator.triggerHelperPanel.addAnotherTriggerDescription")
		}
	});
	return view;
}
function HitlToolView(nodes) {
	const i18n = useI18n();
	const hitlToolNodes = nodes.filter((node) => isHitlToolType(node.name)).map(getNodeView).sort((a, b) => a.properties.displayName.localeCompare(b.properties.displayName));
	return {
		value: HUMAN_IN_THE_LOOP_CATEGORY,
		title: i18n.baseText("nodeCreator.subcategoryNames.humanInTheLoop"),
		items: hitlToolNodes,
		nodeIcon: {
			type: "icon",
			name: "badge-check"
		}
	};
}
var WATCHED_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"Enter",
	"Escape"
];
var useKeyboardNavigation = defineStore("nodeCreatorKeyboardNavigation", () => {
	const selectableItems = ref([]);
	const activeItemId = ref(null);
	const keysHooks = ref({});
	function shouldAllowNativeInputBehavior(target, key) {
		if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return false;
		const hasContent = target.value.length > 0;
		if (key === "ArrowLeft" && hasContent) return true;
		if (key === "ArrowRight" && hasContent) return !((target.selectionStart || 0) >= target.value.length);
		return false;
	}
	function getItemType(element) {
		return element?.getAttribute("data-keyboard-nav-type");
	}
	function getElementId(element) {
		return element?.getAttribute("data-keyboard-nav-id") || void 0;
	}
	const pendingRefreshes = /* @__PURE__ */ new Set();
	async function refreshSelectableItems() {
		return await new Promise((resolve) => {
			cleanupSelectableItems();
			const timer = setTimeout(() => {
				pendingRefreshes.delete(timer);
				selectableItems.value = Array.from(document.querySelectorAll("[data-keyboard-nav-type]")).map((el) => new WeakRef(el));
				resolve();
			}, 0);
			pendingRefreshes.add(timer);
		});
	}
	function executeKeyHooks(keyboardKey, activeItem) {
		Object.values(keysHooks.value).filter((hook) => hook.keyboardKeys.includes(keyboardKey)).forEach((hook) => {
			if (!activeItemId.value) return;
			if ((hook.condition === void 0 || hook.condition(getItemType(activeItem) || "", activeItemId.value)) && activeItemId.value) hook.handler(activeItemId.value, keyboardKey);
		});
	}
	async function onKeyDown(e) {
		if (e.target instanceof Element && e.target.classList.contains("ignore-key-press-node-creator")) return;
		const pressedKey = e.key;
		if (!WATCHED_KEYS.includes(pressedKey)) return;
		if (shouldAllowNativeInputBehavior(e.target, pressedKey)) return;
		e.preventDefault();
		e.stopPropagation();
		await refreshSelectableItems();
		const activeItemIndex = selectableItems.value.findIndex((item) => getElementId(item?.deref()) === activeItemId.value);
		const activeItem = selectableItems.value[activeItemIndex]?.deref();
		const isArrowDown = pressedKey === "ArrowDown";
		const isArrowUp = pressedKey === "ArrowUp";
		if (!activeItem) return;
		if (isArrowDown) {
			const nextItemIndex = activeItemIndex < selectableItems.value.length - 1 ? activeItemIndex + 1 : 0;
			setActiveItem(selectableItems.value[nextItemIndex]?.deref());
		}
		if (isArrowUp) {
			const previousIndex = activeItemIndex > 0 ? activeItemIndex - 1 : selectableItems.value.length - 1;
			setActiveItem(selectableItems.value[previousIndex]?.deref());
		}
		executeKeyHooks(pressedKey, activeItem);
	}
	function setActiveItemId(id) {
		activeItemId.value = id;
	}
	function setActiveItem(item) {
		const itemId = getElementId(item);
		if (!itemId) return;
		setActiveItemId(itemId);
		if (item?.scrollIntoView) item?.scrollIntoView({ block: "center" });
	}
	async function setActiveItemIndex(index) {
		await refreshSelectableItems();
		setActiveItem(selectableItems.value[index]?.deref());
	}
	function attachKeydownEvent() {
		document.addEventListener("keydown", onKeyDown, { capture: true });
	}
	function detachKeydownEvent() {
		for (const timer of pendingRefreshes) clearTimeout(timer);
		pendingRefreshes.clear();
		cleanupSelectableItems();
		document.removeEventListener("keydown", onKeyDown, { capture: true });
	}
	function registerKeyHook(name, hook) {
		hook.keyboardKeys.forEach((keyboardKey) => {
			if (WATCHED_KEYS.includes(keyboardKey)) keysHooks.value = {
				...keysHooks.value,
				[name]: hook
			};
			else throw new Error(`Key ${keyboardKey} is not supported`);
		});
	}
	function cleanupSelectableItems() {
		selectableItems.value = [];
	}
	function getActiveItemIndex() {
		return selectableItems.value.findIndex((item) => getElementId(item?.deref()) === activeItemId.value);
	}
	return {
		activeItemId,
		attachKeydownEvent,
		refreshSelectableItems,
		detachKeydownEvent,
		registerKeyHook,
		getActiveItemIndex,
		setActiveItemId,
		setActiveItemIndex
	};
});
//#endregion
//#region \0virtual:node-popularity-data
var _virtual_node_popularity_data_default = [
	{
		"id": "n8n-nodes-base.manualTrigger",
		"popularity": .987
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agent",
		"popularity": .972
	},
	{
		"id": "n8n-nodes-base.httpRequest",
		"popularity": .984
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chatTrigger",
		"popularity": .936
	},
	{
		"id": "n8n-nodes-base.code",
		"popularity": 1
	},
	{
		"id": "n8n-nodes-base.set",
		"popularity": .968
	},
	{
		"id": "n8n-nodes-base.webhook",
		"popularity": .924
	},
	{
		"id": "n8n-nodes-base.if",
		"popularity": .955
	},
	{
		"id": "n8n-nodes-base.scheduleTrigger",
		"popularity": .903
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
		"popularity": .924
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
		"popularity": .914
	},
	{
		"id": "n8n-nodes-base.googleSheets",
		"popularity": .957
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleGemini",
		"popularity": .912
	},
	{
		"id": "@n8n/n8n-nodes-langchain.openAi",
		"popularity": .874
	},
	{
		"id": "n8n-nodes-base.gmail",
		"popularity": .921
	},
	{
		"id": "n8n-nodes-base.noOp",
		"popularity": .856
	},
	{
		"id": "n8n-nodes-base.formTrigger",
		"popularity": .876
	},
	{
		"id": "n8n-nodes-base.merge",
		"popularity": .861
	},
	{
		"id": "n8n-nodes-base.telegram",
		"popularity": .9
	},
	{
		"id": "n8n-nodes-base.telegramTrigger",
		"popularity": .863
	},
	{
		"id": "n8n-nodes-base.switch",
		"popularity": .86
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainLlm",
		"popularity": .864
	},
	{
		"id": "n8n-nodes-base.splitInBatches",
		"popularity": .83
	},
	{
		"id": "@n8n/n8n-nodes-langchain.googleGemini",
		"popularity": .84
	},
	{
		"id": "n8n-nodes-base.wait",
		"popularity": .828
	},
	{
		"id": "n8n-nodes-base.respondToWebhook",
		"popularity": .844
	},
	{
		"id": "n8n-nodes-base.splitOut",
		"popularity": .806
	},
	{
		"id": "n8n-nodes-base.filter",
		"popularity": .831
	},
	{
		"id": "n8n-nodes-base.googleDrive",
		"popularity": .843
	},
	{
		"id": "@n8n/n8n-nodes-langchain.agentTool",
		"popularity": .798
	},
	{
		"id": "n8n-nodes-base.extractFromFile",
		"popularity": .8
	},
	{
		"id": "n8n-nodes-base.googleSheetsTool",
		"popularity": .854
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserStructured",
		"popularity": .803
	},
	{
		"id": "n8n-nodes-base.aggregate",
		"popularity": .78
	},
	{
		"id": "n8n-nodes-base.gmailTrigger",
		"popularity": .807
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOpenRouter",
		"popularity": .821
	},
	{
		"id": "n8n-nodes-base.readWriteFile",
		"popularity": .793
	},
	{
		"id": "n8n-nodes-base.httpRequestTool",
		"popularity": .793
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chat",
		"popularity": .774
	},
	{
		"id": "n8n-nodes-base.dataTable",
		"popularity": .861
	},
	{
		"id": "n8n-nodes-base.convertToFile",
		"popularity": .766
	},
	{
		"id": "n8n-nodes-base.executeWorkflowTrigger",
		"popularity": .797
	},
	{
		"id": "n8n-nodes-base.emailSend",
		"popularity": .767
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
		"popularity": .779
	},
	{
		"id": "n8n-nodes-base.googleSheetsTrigger",
		"popularity": .772
	},
	{
		"id": "n8n-nodes-base.whatsApp",
		"popularity": .782
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatOllama",
		"popularity": .781
	},
	{
		"id": "n8n-nodes-base.whatsAppTrigger",
		"popularity": .78
	},
	{
		"id": "n8n-nodes-base.executeWorkflow",
		"popularity": .802
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWorkflow",
		"popularity": .771
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGroq",
		"popularity": .815
	},
	{
		"id": "n8n-nodes-base.limit",
		"popularity": .77
	},
	{
		"id": "n8n-nodes-base.gmailTool",
		"popularity": .797
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatDeepSeek",
		"popularity": .728
	},
	{
		"id": "n8n-nodes-base.postgres",
		"popularity": .827
	},
	{
		"id": "n8n-nodes-base.googleCalendarTool",
		"popularity": .775
	},
	{
		"id": "n8n-nodes-base.slack",
		"popularity": .751
	},
	{
		"id": "n8n-nodes-base.html",
		"popularity": .716
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryPostgresChat",
		"popularity": .702
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCode",
		"popularity": .711
	},
	{
		"id": "n8n-nodes-base.rssFeedRead",
		"popularity": .752
	},
	{
		"id": "n8n-nodes-base.supabase",
		"popularity": .791
	},
	{
		"id": "n8n-nodes-base.googleDriveTrigger",
		"popularity": .719
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClientTool",
		"popularity": .679
	},
	{
		"id": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
		"popularity": .734
	},
	{
		"id": "n8n-nodes-base.airtable",
		"popularity": .783
	},
	{
		"id": "n8n-nodes-base.googleDocs",
		"popularity": .717
	},
	{
		"id": "@n8n/n8n-nodes-langchain.informationExtractor",
		"popularity": .695
	},
	{
		"id": "@n8n/n8n-nodes-langchain.ollama",
		"popularity": .701
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
		"popularity": .74
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpTrigger",
		"popularity": .7
	},
	{
		"id": "n8n-nodes-base.googleCalendar",
		"popularity": .734
	},
	{
		"id": "n8n-nodes-base.form",
		"popularity": .726
	},
	{
		"id": "n8n-nodes-base.microsoftOutlook",
		"popularity": .714
	},
	{
		"id": "n8n-nodes-base.emailReadImap",
		"popularity": .698
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserAutofixing",
		"popularity": .652
	},
	{
		"id": "n8n-nodes-base.gmailHitlTool",
		"popularity": .744
	},
	{
		"id": "n8n-nodes-base.executionData",
		"popularity": .619
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSerpApi",
		"popularity": .254
	},
	{
		"id": "@n8n/n8n-nodes-langchain.anthropic",
		"popularity": .719
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textClassifier",
		"popularity": .703
	},
	{
		"id": "n8n-nodes-base.errorTrigger",
		"popularity": .696
	},
	{
		"id": "n8n-nodes-base.microsoftExcel",
		"popularity": .678
	},
	{
		"id": "n8n-nodes-base.notion",
		"popularity": .728
	},
	{
		"id": "n8n-nodes-base.discord",
		"popularity": .701
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolCalculator",
		"popularity": .694
	},
	{
		"id": "n8n-nodes-base.summarize",
		"popularity": .668
	},
	{
		"id": "@n8n/n8n-nodes-langchain.outputParserItemList",
		"popularity": .59
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreInMemory",
		"popularity": .702
	},
	{
		"id": "n8n-nodes-base.stopAndError",
		"popularity": .662
	},
	{
		"id": "n8n-nodes-base.youTube",
		"popularity": .653
	},
	{
		"id": "n8n-nodes-base.aiTransform",
		"popularity": .548
	},
	{
		"id": "n8n-nodes-base.dateTime",
		"popularity": .665
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
		"popularity": .7
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePinecone",
		"popularity": .711
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryRedisChat",
		"popularity": .617
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatXAiGrok",
		"popularity": .62
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMongoDbChat",
		"popularity": .64
	},
	{
		"id": "@n8n/n8n-nodes-langchain.modelSelector",
		"popularity": .614
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTrigger",
		"popularity": .632
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainRetrievalQa",
		"popularity": .619
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini",
		"popularity": .7
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi",
		"popularity": .608
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter",
		"popularity": .643
	},
	{
		"id": "n8n-nodes-base.markdown",
		"popularity": .607
	},
	{
		"id": "n8n-nodes-base.googleDocsTool",
		"popularity": .639
	},
	{
		"id": "@apify/n8n-nodes-apify.apify",
		"popularity": .677
	},
	{
		"id": "n8n-nodes-base.facebookGraphApi",
		"popularity": .656
	},
	{
		"id": "n8n-nodes-base.removeDuplicates",
		"popularity": .671
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTrigger",
		"popularity": .63
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryManager",
		"popularity": .605
	},
	{
		"id": "n8n-nodes-base.slackTrigger",
		"popularity": .637
	},
	{
		"id": "n8n-nodes-base.googleDriveTool",
		"popularity": .629
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOllama",
		"popularity": .636
	},
	{
		"id": "n8n-nodes-base.mySql",
		"popularity": .677
	},
	{
		"id": "@n8n/n8n-nodes-langchain.mcpClient",
		"popularity": .643
	},
	{
		"id": "n8n-nodes-base.ssh",
		"popularity": .636
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatGoogleVertex",
		"popularity": .606
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolThink",
		"popularity": .571
	},
	{
		"id": "n8n-nodes-base.sort",
		"popularity": .644
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWikipedia",
		"popularity": .643
	},
	{
		"id": "n8n-nodes-base.executeCommand",
		"popularity": .692
	},
	{
		"id": "n8n-nodes-base.microsoftTeams",
		"popularity": .611
	},
	{
		"id": "n8n-nodes-base.twilio",
		"popularity": .621
	},
	{
		"id": "n8n-nodes-base.telegramTool",
		"popularity": .618
	},
	{
		"id": "n8n-nodes-base.linkedIn",
		"popularity": .625
	},
	{
		"id": "n8n-nodes-base.redis",
		"popularity": .64
	},
	{
		"id": "n8n-nodes-base.facebookTrigger",
		"popularity": .601
	},
	{
		"id": "n8n-nodes-base.xml",
		"popularity": .613
	},
	{
		"id": "n8n-nodes-base.dataTableTool",
		"popularity": .647
	},
	{
		"id": "n8n-nodes-base.n8n",
		"popularity": .583
	},
	{
		"id": "@tavily/n8n-nodes-tavily.tavily",
		"popularity": .582
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolVectorStore",
		"popularity": .579
	},
	{
		"id": "n8n-nodes-base.supabaseTool",
		"popularity": .608
	},
	{
		"id": "@elevenlabs/n8n-nodes-elevenlabs.elevenLabs",
		"popularity": .62
	},
	{
		"id": "n8n-nodes-base.evaluationTrigger",
		"popularity": .651
	},
	{
		"id": "n8n-nodes-base.perplexity",
		"popularity": .455
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryMotorhead",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.openWeatherMap",
		"popularity": .65
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatMistralCloud",
		"popularity": .626
	},
	{
		"id": "@mookielianhd/n8n-nodes-instagram.instagram",
		"popularity": .591
	},
	{
		"id": "n8n-nodes-base.editImage",
		"popularity": .627
	},
	{
		"id": "n8n-nodes-base.telegramHitlTool",
		"popularity": .607
	},
	{
		"id": "n8n-nodes-base.microsoftOneDrive",
		"popularity": .631
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsOllama",
		"popularity": .624
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStorePGVector",
		"popularity": .592
	},
	{
		"id": "n8n-nodes-whatsable.whatsAble",
		"popularity": .564
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreQdrant",
		"popularity": .633
	},
	{
		"id": "n8n-nodes-base.compareDatasets",
		"popularity": .566
	},
	{
		"id": "n8n-nodes-base.microsoftSharePoint",
		"popularity": .606
	},
	{
		"id": "n8n-nodes-base.hubspot",
		"popularity": .642
	},
	{
		"id": "@n8n/n8n-nodes-langchain.sentimentAnalysis",
		"popularity": .57
	},
	{
		"id": "n8n-nodes-base.jira",
		"popularity": .601
	},
	{
		"id": "n8n-nodes-base.crypto",
		"popularity": .595
	},
	{
		"id": "n8n-nodes-base.airtableTrigger",
		"popularity": .591
	},
	{
		"id": "n8n-nodes-base.wordpress",
		"popularity": .58
	},
	{
		"id": "n8n-nodes-base.dateTimeTool",
		"popularity": .628
	},
	{
		"id": "n8n-nodes-base.postgresTool",
		"popularity": .615
	},
	{
		"id": "n8n-nodes-base.openWeatherMapTool",
		"popularity": .593
	},
	{
		"id": "n8n-nodes-base.github",
		"popularity": .592
	},
	{
		"id": "n8n-nodes-base.airtableTool",
		"popularity": .628
	},
	{
		"id": "n8n-nodes-base.whatsAppTool",
		"popularity": .54
	},
	{
		"id": "@n8n/n8n-nodes-langchain.chainSummarization",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.twitter",
		"popularity": .533
	},
	{
		"id": "@n8n/n8n-nodes-langchain.guardrails",
		"popularity": .561
	},
	{
		"id": "n8n-nodes-base.microsoftSql",
		"popularity": .626
	},
	{
		"id": "n8n-nodes-base.evaluation",
		"popularity": .57
	},
	{
		"id": "n8n-nodes-base.whatsAppHitlTool",
		"popularity": .555
	},
	{
		"id": "n8n-nodes-base.perplexityTool",
		"popularity": .495
	},
	{
		"id": "n8n-nodes-base.ftp",
		"popularity": .565
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference",
		"popularity": .52
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverVectorStore",
		"popularity": .545
	},
	{
		"id": "n8n-nodes-base.notionTrigger",
		"popularity": .541
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatAwsBedrock",
		"popularity": .534
	},
	{
		"id": "n8n-nodes-base.compression",
		"popularity": .549
	},
	{
		"id": "n8n-nodes-base.googleChat",
		"popularity": .539
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerDatastore",
		"popularity": .649
	},
	{
		"id": "n8n-nodes-base.hackerNews",
		"popularity": .607
	},
	{
		"id": "@mendable/n8n-nodes-firecrawl.firecrawl",
		"popularity": .582
	},
	{
		"id": "n8n-nodes-htmlcsstopdf.htmlcsstopdf",
		"popularity": .532
	},
	{
		"id": "@blotato/n8n-nodes-blotato.blotato",
		"popularity": .472
	},
	{
		"id": "n8n-nodes-base.microsoftExcelTool",
		"popularity": .559
	},
	{
		"id": "@n8n/n8n-nodes-langchain.memoryXata",
		"popularity": .539
	},
	{
		"id": "n8n-nodes-base.notionTool",
		"popularity": .528
	},
	{
		"id": "n8n-nodes-base.clickUp",
		"popularity": .586
	},
	{
		"id": "n8n-nodes-base.linkedInTool",
		"popularity": .547
	},
	{
		"id": "n8n-nodes-base.googleCalendarTrigger",
		"popularity": .549
	},
	{
		"id": "n8n-nodes-base.facebookLeadAdsTrigger",
		"popularity": .538
	},
	{
		"id": "n8n-nodes-cronlytic.cronlyticTrigger",
		"popularity": .248
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterCharacterTextSplitter",
		"popularity": .514
	},
	{
		"id": "n8n-nodes-serpapi.serpApi",
		"popularity": .566
	},
	{
		"id": "@brave/n8n-nodes-brave-search.braveSearch",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-base.postgresTrigger",
		"popularity": .536
	},
	{
		"id": "n8n-nodes-base.mistralAi",
		"popularity": .502
	},
	{
		"id": "n8n-nodes-base.debugHelper",
		"popularity": .448
	},
	{
		"id": "n8n-nodes-base.emailSendHitlTool",
		"popularity": .537
	},
	{
		"id": "n8n-nodes-base.mongoDb",
		"popularity": .555
	},
	{
		"id": "n8n-nodes-base.renameKeys",
		"popularity": .543
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTrigger",
		"popularity": .501
	},
	{
		"id": "n8n-nodes-base.twilioTrigger",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.line",
		"popularity": .51
	},
	{
		"id": "n8n-nodes-base.rssFeedReadTool",
		"popularity": .514
	},
	{
		"id": "n8n-nodes-base.shopify",
		"popularity": .542
	},
	{
		"id": "n8n-nodes-base.s3",
		"popularity": .524
	},
	{
		"id": "n8n-nodes-base.salesforce",
		"popularity": .587
	},
	{
		"id": "n8n-nodes-base.nasa",
		"popularity": .533
	},
	{
		"id": "n8n-nodes-base.awsS3",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.n8nTrainingCustomerMessenger",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookTool",
		"popularity": .525
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsHuggingFaceInference",
		"popularity": .525
	},
	{
		"id": "n8n-nodes-base.filemaker",
		"popularity": .449
	},
	{
		"id": "@n8n/n8n-nodes-langchain.rerankerCohere",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-base.emailSendTool",
		"popularity": .463
	},
	{
		"id": "n8n-nodes-base.typeformTrigger",
		"popularity": .526
	},
	{
		"id": "n8n-nodes-base.odoo",
		"popularity": .574
	},
	{
		"id": "n8n-nodes-base.n8nTrigger",
		"popularity": .49
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatCohere",
		"popularity": .536
	},
	{
		"id": "n8n-nodes-base.mySqlTool",
		"popularity": .517
	},
	{
		"id": "n8n-nodes-base.youTubeTool",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-base.githubTrigger",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-base.slackTool",
		"popularity": .476
	},
	{
		"id": "n8n-nodes-base.sseTrigger",
		"popularity": .505
	},
	{
		"id": "n8n-nodes-base.nocoDb",
		"popularity": .59
	},
	{
		"id": "@aotoki/n8n-nodes-line-messaging.lineMessaging",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.highLevel",
		"popularity": .51
	},
	{
		"id": "n8n-nodes-base.reddit",
		"popularity": .46
	},
	{
		"id": "n8n-nodes-base.googleBigQuery",
		"popularity": .545
	},
	{
		"id": "n8n-nodes-base.dropbox",
		"popularity": .526
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsGoogleVertex",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-cloudinary.cloudinary",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.timeSaved",
		"popularity": .473
	},
	{
		"id": "n8n-nodes-base.googleSlides",
		"popularity": .499
	},
	{
		"id": "n8n-nodes-base.quickChart",
		"popularity": .459
	},
	{
		"id": "n8n-nodes-base.jiraTool",
		"popularity": .486
	},
	{
		"id": "n8n-nodes-base.hubspotTrigger",
		"popularity": .504
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTrigger",
		"popularity": .466
	},
	{
		"id": "n8n-nodes-base.jiraTrigger",
		"popularity": .481
	},
	{
		"id": "n8n-nodes-base.baserow",
		"popularity": .578
	},
	{
		"id": "n8n-nodes-base.googleTasks",
		"popularity": .486
	},
	{
		"id": "n8n-nodes-base.microsoftOutlookHitlTool",
		"popularity": .514
	},
	{
		"id": "n8n-nodes-base.trello",
		"popularity": .565
	},
	{
		"id": "n8n-nodes-base.mondayCom",
		"popularity": .554
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsCohere",
		"popularity": .542
	},
	{
		"id": "n8n-nodes-pdfco.PDFco Api",
		"popularity": .452
	},
	{
		"id": "n8n-nodes-tallyforms.tallyTrigger",
		"popularity": .536
	},
	{
		"id": "n8n-nodes-base.googleContacts",
		"popularity": .5
	},
	{
		"id": "@n8n/n8n-nodes-langchain.textSplitterTokenSplitter",
		"popularity": .433
	},
	{
		"id": "n8n-nodes-base.formIoTrigger",
		"popularity": .632
	},
	{
		"id": "n8n-nodes-base.marketstackTool",
		"popularity": .637
	},
	{
		"id": "n8n-nodes-base.shopifyTrigger",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-qdrant.qdrant",
		"popularity": .483
	},
	{
		"id": "n8n-nodes-base.calendlyTrigger",
		"popularity": .497
	},
	{
		"id": "n8n-nodes-base.pipedrive",
		"popularity": .575
	},
	{
		"id": "n8n-nodes-base.githubTool",
		"popularity": .504
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverContextualCompression",
		"popularity": .459
	},
	{
		"id": "n8n-nodes-base.todoist",
		"popularity": .447
	},
	{
		"id": "n8n-nodes-base.postBin",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.sendInBlue",
		"popularity": .506
	},
	{
		"id": "n8n-nodes-base.homeAssistant",
		"popularity": .49
	},
	{
		"id": "@searchapi/n8n-nodes-searchapi.searchApi",
		"popularity": .478
	},
	{
		"id": "n8n-nodes-base.calTrigger",
		"popularity": .493
	},
	{
		"id": "n8n-nodes-base.googleChatHitlTool",
		"popularity": .512
	},
	{
		"id": "n8n-nodes-base.googleTasksTool",
		"popularity": .502
	},
	{
		"id": "n8n-nodes-base.hunter",
		"popularity": .438
	},
	{
		"id": "n8n-nodes-base.googleAds",
		"popularity": .458
	},
	{
		"id": "n8n-nodes-base.asana",
		"popularity": .516
	},
	{
		"id": "n8n-nodes-base.wooCommerce",
		"popularity": .511
	},
	{
		"id": "n8n-nodes-base.zohoCrm",
		"popularity": .541
	},
	{
		"id": "n8n-nodes-base.clickUpTrigger",
		"popularity": .467
	},
	{
		"id": "n8n-nodes-base.slackHitlTool",
		"popularity": .471
	},
	{
		"id": "n8n-nodes-base.actionNetwork",
		"popularity": .429
	},
	{
		"id": "n8n-nodes-base.graphql",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.philipsHueTool",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.discordTool",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-base.googleTranslate",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-base.nextCloud",
		"popularity": .523
	},
	{
		"id": "@cloudconvert/n8n-nodes-cloudconvert.cloudConvert",
		"popularity": .444
	},
	{
		"id": "n8n-nodes-base.stripeTrigger",
		"popularity": .441
	},
	{
		"id": "n8n-nodes-upload-post.uploadPost",
		"popularity": .483
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.jotFormTrigger",
		"popularity": .457
	},
	{
		"id": "n8n-nodes-base.facebookGraphApiTool",
		"popularity": .433
	},
	{
		"id": "n8n-nodes-base.googleAnalytics",
		"popularity": .45
	},
	{
		"id": "n8n-nodes-base.togglTrigger",
		"popularity": .381
	},
	{
		"id": "n8n-nodes-aiscraper.aiScraper",
		"popularity": .351
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
		"popularity": .432
	},
	{
		"id": "n8n-nodes-base.oracleDatabase",
		"popularity": .49
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmLemonade",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestore",
		"popularity": .465
	},
	{
		"id": "n8n-nodes-base.localFileTrigger",
		"popularity": .461
	},
	{
		"id": "n8n-nodes-base.spotify",
		"popularity": .479
	},
	{
		"id": "n8n-nodes-base.discordHitlTool",
		"popularity": .453
	},
	{
		"id": "n8n-nodes-base.stripe",
		"popularity": .403
	},
	{
		"id": "n8n-nodes-base.snowflake",
		"popularity": .498
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverWorkflow",
		"popularity": .401
	},
	{
		"id": "@n8n/n8n-nodes-langchain.retrieverMultiQuery",
		"popularity": .422
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas",
		"popularity": .409
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmChatLemonade",
		"popularity": .411
	},
	{
		"id": "n8n-nodes-base.pushover",
		"popularity": .553
	},
	{
		"id": "@n8n/n8n-nodes-langchain.code",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.sendGrid",
		"popularity": .4
	},
	{
		"id": "n8n-nodes-base.jwt",
		"popularity": .456
	},
	{
		"id": "n8n-nodes-base.googleCloudStorage",
		"popularity": .43
	},
	{
		"id": "n8n-nodes-base.googleContactsTool",
		"popularity": .482
	},
	{
		"id": "n8n-nodes-base.microsoftSqlTool",
		"popularity": .445
	},
	{
		"id": "n8n-nodes-google-search-console.googleSearchConsole",
		"popularity": .451
	},
	{
		"id": "n8n-nodes-base.wordpressTool",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.pushoverTool",
		"popularity": .526
	},
	{
		"id": "n8n-nodes-base.salesforceTrigger",
		"popularity": .432
	},
	{
		"id": "n8n-nodes-pdf4me.PDF4me",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.shopifyTool",
		"popularity": .446
	},
	{
		"id": "n8n-nodes-base.microsoftSharePointTool",
		"popularity": .412
	},
	{
		"id": "n8n-nodes-base.jinaAi",
		"popularity": .36
	},
	{
		"id": "n8n-nodes-base.git",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.hubspotTool",
		"popularity": .404
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsMistralCloud",
		"popularity": .457
	},
	{
		"id": "n8n-nodes-base.microsoftOneDriveTool",
		"popularity": .414
	},
	{
		"id": "n8n-nodes-base.zendesk",
		"popularity": .451
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreChromaDB",
		"popularity": .477
	},
	{
		"id": "n8n-nodes-syncmate.whatsAuto",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.twilioTool",
		"popularity": .398
	},
	{
		"id": "n8n-nodes-base.gitlab",
		"popularity": .417
	},
	{
		"id": "n8n-nodes-linked-api.linkedApi",
		"popularity": .36
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreAzureAISearch",
		"popularity": .387
	},
	{
		"id": "n8n-nodes-base.mqttTrigger",
		"popularity": .443
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolSearXng",
		"popularity": .49
	},
	{
		"id": "n8n-nodes-base.dhl",
		"popularity": .344
	},
	{
		"id": "n8n-nodes-base.airtop",
		"popularity": .455
	},
	{
		"id": "n8n-nodes-base.redisTool",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfile",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-base.quickbooks",
		"popularity": .492
	},
	{
		"id": "n8n-nodes-base.hackerNewsTool",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsHitlTool",
		"popularity": .39
	},
	{
		"id": "n8n-nodes-base.mailgun",
		"popularity": .394
	},
	{
		"id": "n8n-nodes-base.mongoDbTool",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.zoom",
		"popularity": .415
	},
	{
		"id": "n8n-nodes-base.gitlabTrigger",
		"popularity": .393
	},
	{
		"id": "n8n-nodes-base.wooCommerceTrigger",
		"popularity": .42
	},
	{
		"id": "n8n-nodes-base.microsoftTeamsTool",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.twitterTool",
		"popularity": .335
	},
	{
		"id": "@pdfgeneratorapi/n8n-nodes-pdf-generator-api.pdfGeneratorApi",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.deepL",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-powerbi.powerBi",
		"popularity": .424
	},
	{
		"id": "n8n-nodes-base.activeCampaign",
		"popularity": .44
	},
	{
		"id": "n8n-nodes-base.mqtt",
		"popularity": .408
	},
	{
		"id": "n8n-nodes-base.redisTrigger",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.clickUpTool",
		"popularity": .369
	},
	{
		"id": "n8n-nodes-base.trelloTrigger",
		"popularity": .442
	},
	{
		"id": "@pinecone-database/n8n-nodes-pinecone-assistant.pineconeAssistant",
		"popularity": .399
	},
	{
		"id": "n8n-nodes-base.totp",
		"popularity": .329
	},
	{
		"id": "@firefliesai/n8n-nodes-fireflies.fireflies",
		"popularity": .384
	},
	{
		"id": "n8n-nodes-htmlcsstoimage.htmlCssToImage",
		"popularity": .387
	},
	{
		"id": "n8n-nodes-instantly.instantly",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.homeAssistantTool",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-base.mattermost",
		"popularity": .407
	},
	{
		"id": "n8n-nodes-assemblyai.assemblyAi",
		"popularity": .413
	},
	{
		"id": "n8n-nodes-base.azureStorage",
		"popularity": .387
	},
	{
		"id": "n8n-nodes-base.mailchimp",
		"popularity": .4
	},
	{
		"id": "n8n-nodes-base.todoistTool",
		"popularity": .385
	},
	{
		"id": "n8n-nodes-base.microsoftEntra",
		"popularity": .405
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.linear",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.webflow",
		"popularity": .387
	},
	{
		"id": "n8n-nodes-base.awsLambda",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-pdfvector.pdfVector",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.rabbitmqTrigger",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-base.asanaTrigger",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.rabbitmq",
		"popularity": .395
	},
	{
		"id": "@n8n/n8n-nodes-langchain.lmCohere",
		"popularity": .362
	},
	{
		"id": "@apify/n8n-nodes-apify.apifyTrigger",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.gSuiteAdmin",
		"popularity": .417
	},
	{
		"id": "n8n-nodes-base.formstackTrigger",
		"popularity": .446
	},
	{
		"id": "n8n-nodes-base.googleTranslateTool",
		"popularity": .318
	},
	{
		"id": "n8n-nodes-base.spotifyTool",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTrigger",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-veed.veed",
		"popularity": .293
	},
	{
		"id": "n8n-nodes-base.acuitySchedulingTrigger",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.metabase",
		"popularity": .409
	},
	{
		"id": "n8n-nodes-base.pipedriveTrigger",
		"popularity": .36
	},
	{
		"id": "n8n-nodes-base.phantombuster",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-base.microsoftToDo",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-base.kafkaTrigger",
		"popularity": .336
	},
	{
		"id": "n8n-nodes-base.serviceNow",
		"popularity": .426
	},
	{
		"id": "n8n-nodes-base.customerIoTool",
		"popularity": .427
	},
	{
		"id": "n8n-nodes-base.googleSlidesTool",
		"popularity": .354
	},
	{
		"id": "n8n-nodes-base.figmaTrigger",
		"popularity": .349
	},
	{
		"id": "n8n-nodes-base.zohoCrmTool",
		"popularity": .361
	},
	{
		"id": "n8n-nodes-base.wooCommerceTool",
		"popularity": .383
	},
	{
		"id": "n8n-nodes-browserbase.browserbase",
		"popularity": .406
	},
	{
		"id": "n8n-nodes-base.googleChatTool",
		"popularity": .365
	},
	{
		"id": "n8n-nodes-base.freshdesk",
		"popularity": .372
	},
	{
		"id": "n8n-nodes-base.highLevelTool",
		"popularity": .307
	},
	{
		"id": "n8n-nodes-base.trelloTool",
		"popularity": .394
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreRedis",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-base.matrix",
		"popularity": .423
	},
	{
		"id": "n8n-nodes-base.ldap",
		"popularity": .405
	},
	{
		"id": "n8n-nodes-base.mistralAiTool",
		"popularity": .323
	},
	{
		"id": "n8n-nodes-base.quickbooksTool",
		"popularity": .376
	},
	{
		"id": "n8n-nodes-base.kafka",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.messageBird",
		"popularity": .379
	},
	{
		"id": "n8n-nodes-linkupapi.linkup",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.salesforceTool",
		"popularity": .359
	},
	{
		"id": "n8n-nodes-base.odooTool",
		"popularity": .358
	},
	{
		"id": "n8n-nodes-base.xero",
		"popularity": .431
	},
	{
		"id": "n8n-nodes-base.bitbucketTrigger",
		"popularity": .335
	},
	{
		"id": "@custom-js/n8n-nodes-pdf-toolkit-v2.pdfToolkit",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.googleAnalyticsTool",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.pipedriveTool",
		"popularity": .457
	},
	{
		"id": "n8n-nodes-base.mailcheck",
		"popularity": .314
	},
	{
		"id": "n8n-nodes-base.googleBigQueryTool",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.elasticsearch",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-base.actionNetworkTool",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-browseract.browserAct",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.grafana",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-base.jinaAiTool",
		"popularity": .331
	},
	{
		"id": "n8n-nodes-base.linearTrigger",
		"popularity": .367
	},
	{
		"id": "n8n-nodes-base.awsTextract",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-base.emailReadImapTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-autocalls.autocalls",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.baserowTool",
		"popularity": .374
	},
	{
		"id": "n8n-nodes-base.awsSes",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.gitlabTool",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-postiz.postiz",
		"popularity": .372
	},
	{
		"id": "n8n-nodes-base.nocoDbTool",
		"popularity": .372
	},
	{
		"id": "n8n-nodes-base.redditTool",
		"popularity": .301
	},
	{
		"id": "n8n-nodes-base.affinity",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-base.executeCommandTool",
		"popularity": .386
	},
	{
		"id": "n8n-nodes-pdfmonkey.pdfMonkey",
		"popularity": .339
	},
	{
		"id": "n8n-nodes-aimlapi.aimlApi",
		"popularity": .306
	},
	{
		"id": "n8n-nodes-documentero.documentero",
		"popularity": .344
	},
	{
		"id": "n8n-nodes-base.coinGecko",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-base.apiTemplateIo",
		"popularity": .343
	},
	{
		"id": "n8n-nodes-base.adalo",
		"popularity": .331
	},
	{
		"id": "n8n-nodes-scrapfly.Scrapfly",
		"popularity": .241
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreMilvus",
		"popularity": .32
	},
	{
		"id": "n8n-nodes-base.zendeskTrigger",
		"popularity": .348
	},
	{
		"id": "n8n-nodes-base.googleAdsTool",
		"popularity": .324
	},
	{
		"id": "n8n-nodes-base.agileCrm",
		"popularity": .334
	},
	{
		"id": "n8n-nodes-base.strava",
		"popularity": .349
	},
	{
		"id": "@fal-ai/n8n-nodes-fal.falAi",
		"popularity": .39
	},
	{
		"id": "n8n-nodes-base.nextCloudTool",
		"popularity": .346
	},
	{
		"id": "@nskha/n8n-nodes-scrappey.scrappey",
		"popularity": .282
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreZep",
		"popularity": .334
	},
	{
		"id": "n8n-nodes-scrapingbee.ScrapingBee",
		"popularity": .245
	},
	{
		"id": "@brightdata/n8n-nodes-brightdata.brightData",
		"popularity": .339
	},
	{
		"id": "@n8n/n8n-nodes-langchain.microsoftAgent365Trigger",
		"popularity": .425
	},
	{
		"id": "n8n-nodes-base.oracleDatabaseTool",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-base.bubble",
		"popularity": .346
	},
	{
		"id": "n8n-nodes-base.urlScanIo",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.erpNext",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.stravaTrigger",
		"popularity": .318
	},
	{
		"id": "n8n-nodes-base.awsTranscribe",
		"popularity": .29
	},
	{
		"id": "n8n-nodes-base.awsDynamoDb",
		"popularity": .345
	},
	{
		"id": "n8n-nodes-base.webflowTool",
		"popularity": .234
	},
	{
		"id": "@n8n/n8n-nodes-langchain.vectorStoreWeaviate",
		"popularity": .328
	},
	{
		"id": "n8n-nodes-base.dropboxTool",
		"popularity": .316
	},
	{
		"id": "n8n-nodes-postfast.postFast",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.box",
		"popularity": .366
	},
	{
		"id": "n8n-nodes-outscraper.outscraper",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-browserflow.browserflow",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.webflowTrigger",
		"popularity": .365
	},
	{
		"id": "@n8n/n8n-nodes-langchain.embeddingsLemonade",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-dataforseo.dataForSeo",
		"popularity": .344
	},
	{
		"id": "n8n-nodes-base.cloudflare",
		"popularity": .324
	},
	{
		"id": "n8n-nodes-base.vonage",
		"popularity": .3
	},
	{
		"id": "n8n-nodes-scrape-creators.scrapeCreators",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.humanticAiTool",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.zammad",
		"popularity": .422
	},
	{
		"id": "n8n-nodes-tmpfiles.tmpfiles",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.eventbriteTrigger",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.googleCloudStorageTool",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.googleFirebaseCloudFirestoreTool",
		"popularity": .293
	},
	{
		"id": "n8n-nodes-base.lemlist",
		"popularity": .34
	},
	{
		"id": "n8n-nodes-base.awsS3Tool",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-triggercmd.triggercmd",
		"popularity": .319
	},
	{
		"id": "n8n-nodes-base.awsTextractTool",
		"popularity": .208
	},
	{
		"id": "@respond-io/n8n-nodes-respond-io.respondio",
		"popularity": .444
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabaseTool",
		"popularity": .278
	},
	{
		"id": "n8n-nodes-resend.resend",
		"popularity": .467
	},
	{
		"id": "n8n-nodes-base.asanaTool",
		"popularity": .321
	},
	{
		"id": "n8n-nodes-zohozeptomail.zohoZeptomail",
		"popularity": .349
	},
	{
		"id": "n8n-nodes-base.bannerbear",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.googleFirebaseRealtimeDatabase",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-base.mautic",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-pdforge.pdforge",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.mailjet",
		"popularity": .327
	},
	{
		"id": "n8n-nodes-base.cloudflareTool",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-base.jenkins",
		"popularity": .304
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurityTool",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-olostep.olostepScrape",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.quickChartTool",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.microsoftToDoTool",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.cryptoTool",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-anchorbrowser.anchorBrowser",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.payPal",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.activeCampaignTrigger",
		"popularity": .326
	},
	{
		"id": "n8n-nodes-base.gong",
		"popularity": .282
	},
	{
		"id": "@2chat/n8n-nodes-twochat.twoChat",
		"popularity": .381
	},
	{
		"id": "n8n-nodes-base.elasticsearchTool",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-get-transcribe.getTranscribe",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.airtopTool",
		"popularity": .321
	},
	{
		"id": "n8n-nodes-base.gotify",
		"popularity": .369
	},
	{
		"id": "n8n-nodes-avatartalk.avatarTalk",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-scrapegraphai.scrapegraphAi",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.medium",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.mailerLite",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.travisCiTool",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-ticktick.tickTick",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.rocketchat",
		"popularity": .35
	},
	{
		"id": "n8n-nodes-base.seaTable",
		"popularity": .402
	},
	{
		"id": "n8n-nodes-llmlayer.llmLayer",
		"popularity": .338
	},
	{
		"id": "n8n-nodes-docugenerate.docuGenerate",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.lineTool",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguageTool",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.grist",
		"popularity": .388
	},
	{
		"id": "n8n-nodes-botnoi-voice.botnoitts",
		"popularity": .138
	},
	{
		"id": "@videodb/n8n-nodes-videodb.videoDb",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-base.mondayComTool",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.oneSimpleApiTool",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.intercom",
		"popularity": .315
	},
	{
		"id": "n8n-nodes-base.awsSqs",
		"popularity": .293
	},
	{
		"id": "n8n-nodes-base.zoomTool",
		"popularity": .342
	},
	{
		"id": "n8n-nodes-superchat.superchat",
		"popularity": .325
	},
	{
		"id": "@directus/n8n-nodes-directus.directus",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-base.clockify",
		"popularity": .282
	},
	{
		"id": "n8n-nodes-base.googleCloudNaturalLanguage",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-opnform.opnformTrigger",
		"popularity": .341
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrm",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.gSuiteAdminTool",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-heyreach.heyReach",
		"popularity": .352
	},
	{
		"id": "n8n-nodes-base.freshservice",
		"popularity": .353
	},
	{
		"id": "n8n-nodes-scraperapi-official.scraperApi",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-base.coinGeckoTool",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.stripeTool",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.deepLTool",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-base.filemakerTool",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.googleBusinessProfileTool",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-exa-official.exa",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-fillout.filloutTrigger",
		"popularity": .391
	},
	{
		"id": "n8n-nodes-base.zendeskTool",
		"popularity": .291
	},
	{
		"id": "n8n-nodes-base.linearTool",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.awsTranscribeTool",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-supadata.supadata",
		"popularity": .333
	},
	{
		"id": "n8n-nodes-base.messageBirdTool",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.gitTool",
		"popularity": .227
	},
	{
		"id": "@langfuse/n8n-nodes-langfuse.langfuse",
		"popularity": .351
	},
	{
		"id": "n8n-nodes-base.payPalTrigger",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.flow",
		"popularity": .269
	},
	{
		"id": "n8n-nodes-1shot.oneShot",
		"popularity": .356
	},
	{
		"id": "n8n-nodes-base.s3Tool",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.mindee",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.coda",
		"popularity": .347
	},
	{
		"id": "n8n-nodes-base.sentryIo",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.invoiceNinja",
		"popularity": .33
	},
	{
		"id": "n8n-nodes-base.apiTemplateIoTool",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-base.marketstack",
		"popularity": .364
	},
	{
		"id": "n8n-nodes-base.gumroadTrigger",
		"popularity": .274
	},
	{
		"id": "n8n-nodes-base.bitwarden",
		"popularity": .267
	},
	{
		"id": "@promptlayer/n8n-nodes-promptlayer-runagent.promptLayerRunAgent",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-chat-data.chatData",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-late.late",
		"popularity": .378
	},
	{
		"id": "n8n-nodes-base.microsoftGraphSecurity",
		"popularity": .254
	},
	{
		"id": "n8n-nodes-base.activeCampaignTool",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-base.getResponse",
		"popularity": .31
	},
	{
		"id": "n8n-nodes-base.grafanaTool",
		"popularity": .269
	},
	{
		"id": "n8n-nodes-base.magento2",
		"popularity": .264
	},
	{
		"id": "@lusha-org/n8n-nodes-lusha.lusha",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-oxylabs-ai-studio.oxylabsAiStudio",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.philipsHue",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-pdf-api-hub.pdfSplitMerge",
		"popularity": .288
	},
	{
		"id": "n8n-nodes-base.sendInBlueTool",
		"popularity": .269
	},
	{
		"id": "n8n-nodes-base.stravaTool",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-templated.templated",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.amqpTrigger",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.amqp",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.splunk",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-vikunja.vikunja",
		"popularity": .389
	},
	{
		"id": "n8n-nodes-base.phantombusterTool",
		"popularity": .085
	},
	{
		"id": "@cloudsway-ai/n8n-nodes-cloudsway.smartSearch",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.graphqlTool",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-unstract.llmWhisperer",
		"popularity": .231
	},
	{
		"id": "@gotohuman/n8n-nodes-gotohuman.gotoHuman",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-base.hunterTool",
		"popularity": .311
	},
	{
		"id": "n8n-nodes-human-in-the-loop.hitlNode",
		"popularity": .301
	},
	{
		"id": "n8n-nodes-base.mailchimpTool",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-base.microsoftEntraTool",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.ciscoWebex",
		"popularity": .286
	},
	{
		"id": "n8n-nodes-base.affinityTrigger",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.convertKitTool",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-base.bambooHr",
		"popularity": .324
	},
	{
		"id": "n8n-nodes-base.dhlTool",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-base.strapi",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.sendInBlueTrigger",
		"popularity": .269
	},
	{
		"id": "@razorpay/n8n-nodes-razorpay.razorpay",
		"popularity": .295
	},
	{
		"id": "n8n-nodes-base.lemlistTrigger",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-softr.softr",
		"popularity": .363
	},
	{
		"id": "n8n-nodes-base.okta",
		"popularity": .284
	},
	{
		"id": "@servicem8/n8n-nodes-servicem8.serviceM8",
		"popularity": .395
	},
	{
		"id": "n8n-nodes-base.wise",
		"popularity": .238
	},
	{
		"id": "n8n-nodes-base.customerIo",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.compressionTool",
		"popularity": .278
	},
	{
		"id": "n8n-nodes-screenshotbase.screenshotBase",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.azureCosmosDb",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.bitly",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-sourcegeek.sourcegeek",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.getResponseTool",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-base.serviceNowTool",
		"popularity": .329
	},
	{
		"id": "n8n-nodes-base.snowflakeTool",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTool",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-base.metabaseTool",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.freshserviceTool",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-onenote.onenote",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.affinityTool",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-base.nasaTool",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-hostinger-api.hostingerApi",
		"popularity": .238
	},
	{
		"id": "n8n-nodes-base.postHog",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-base.sms77",
		"popularity": .335
	},
	{
		"id": "n8n-nodes-verifiemail.verifiEmail",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-placid.placid",
		"popularity": .325
	},
	{
		"id": "n8n-nodes-base.mailchimpTrigger",
		"popularity": .254
	},
	{
		"id": "@urlbox/n8n-nodes-urlbox.urlbox",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.convertKit",
		"popularity": .284
	},
	{
		"id": "n8n-nodes-base.pushbullet",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.ghost",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.microsoftDynamicsCrmTool",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.awsSnsTrigger",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-base.npm",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-fullenrich.fullEnrich",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-wpforms.wpformsTrigger",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-emailvalidation.emailValidation",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.boxTrigger",
		"popularity": .238
	},
	{
		"id": "@n8n/n8n-nodes-langchain.toolWolframAlpha",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-airparser.airparser",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.jenkinsTool",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-ada.ada",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-chat-data.chatDataTrigger",
		"popularity": .282
	},
	{
		"id": "@zerobounce/n8n-nodes-zerobounce.zeroBounce",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-scrapeless.scrapeless",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-base.upleadTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-carbone.carbone",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-craftmypdf.craftMyPdf",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-base.freshworksCrm",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.clearbit",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.awsIam",
		"popularity": .223
	},
	{
		"id": "@easysoftware/n8n-nodes-easy-redmine.easyRedmine",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectDatacenterTool",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-base.matrixTool",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-docuprox.docuProx",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-base.haloPSA",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-addtowallet.addToWallet",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-base.awsLambdaTool",
		"popularity": .238
	},
	{
		"id": "n8n-nodes-mallabe-images.mallabeImages",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-kipps.kippsAiChatbot",
		"popularity": 0
	},
	{
		"id": "@solution25/n8n-nodes-shopware.shopware",
		"popularity": .241
	},
	{
		"id": "@heygenofficial/n8n-nodes-heygen-official.heygenNode",
		"popularity": .396
	},
	{
		"id": "n8n-nodes-base.autopilotTool",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-base.pagerDuty",
		"popularity": .29
	},
	{
		"id": "n8n-nodes-base.freshdeskTool",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.mattermostTool",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.raindrop",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.harvest",
		"popularity": .251
	},
	{
		"id": "n8n-nodes-smstools.smstools",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-ipgeolocation.ipgeolocation",
		"popularity": .213
	},
	{
		"id": "@decodo/n8n-nodes-decodo.decodo",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.awsRekognition",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-inoreader.inoreader",
		"popularity": .269
	},
	{
		"id": "n8n-nodes-base.agileCrmTool",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.mailerLiteTrigger",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-base.intercomTool",
		"popularity": .177
	},
	{
		"id": "@wix/n8n-nodes-wix.wix",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-shortio.Shortio",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.awsComprehend",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.bubbleTool",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-base.bitwardenTool",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-neverbounce-email-verification.nbEmailVerification",
		"popularity": .267
	},
	{
		"id": "n8n-nodes-base.zulip",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.clockifyTool",
		"popularity": .245
	},
	{
		"id": "n8n-nodes-base.awsSns",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.adaloTool",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-base.rabbitmqTool",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.theHiveProject",
		"popularity": .316
	},
	{
		"id": "n8n-nodes-base.msg91",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-base.googleBooksTool",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-base.Brandfetch",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-base.rundeck",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-base.clockifyTrigger",
		"popularity": .223
	},
	{
		"id": "@serphouse/n8n-nodes-serphouse.serphouse",
		"popularity": .227
	},
	{
		"id": "n8n-nodes-parallel.parallel",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-base.xeroTool",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-base.urlScanIoTool",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.uproc",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-base.mediumTool",
		"popularity": .107
	},
	{
		"id": "@docuseal/n8n-nodes-docuseal.docuseal",
		"popularity": .245
	},
	{
		"id": "@digitalocean/n8n-nodes-digitalocean-gradient-serverless-inference.digitalOceanGradientServerlessInference",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-abyssale.abyssale",
		"popularity": .241
	},
	{
		"id": "n8n-nodes-base.amqpTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.oura",
		"popularity": .15
	},
	{
		"id": "@infobip/n8n-nodes-infobip-api.infobipApi",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTrigger",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.zammadTool",
		"popularity": .271
	},
	{
		"id": "n8n-nodes-base.contentful",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.pushcut",
		"popularity": .238
	},
	{
		"id": "n8n-nodes-base.surveyMonkeyTrigger",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-base.ciscoWebexTool",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-base.oneSimpleApi",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.misp",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.contentfulTool",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-converthub.converthub",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-nimbasms.nimbaSMS",
		"popularity": .085
	},
	{
		"id": "@scrapeops/n8n-nodes-scrapeops.ScrapeOps",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.seaTableTool",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.jwtTool",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-contextualai.contextualAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.invoiceNinjaTrigger",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-skyvern.skyvern",
		"popularity": .245
	},
	{
		"id": "n8n-nodes-base.mandrill",
		"popularity": .282
	},
	{
		"id": "@jetbrains/n8n-nodes-youtrack.youtrack",
		"popularity": .303
	},
	{
		"id": "n8n-nodes-base.cortex",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.mqttTool",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-base.erpNextTool",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-dust.dust",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.helpScout",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.wufooTrigger",
		"popularity": .231
	},
	{
		"id": "n8n-nodes-docsautomator.docsAutomator",
		"popularity": .218
	},
	{
		"id": "n8n-nodes-base.awsCertificateManager",
		"popularity": .124
	},
	{
		"id": "@tehw0lf/n8n-nodes-toon.toon",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-vikunja.vikunjaTrigger",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.strapiTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.gristTool",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-mailtrap.mailtrap",
		"popularity": .257
	},
	{
		"id": "n8n-nodes-base.mailcheckTool",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.codaTool",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-yepcode.yepCode",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-awork.awork",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-base.BrandfetchTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.dropcontact",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-base.awsCognito",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-murf.murf",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-base.humanticAi",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.autopilot",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-clipboardgenie.clipboardGenie",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.mailgunTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.sendGridTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.workableTrigger",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-base.yourls",
		"popularity": .15
	},
	{
		"id": "@globalping/n8n-nodes-globalping.globalping",
		"popularity": .15
	},
	{
		"id": "@seranking/n8n-nodes-seranking.seRanking",
		"popularity": .234
	},
	{
		"id": "@datafix/n8n-nodes-exact-online.exactOnline",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-docuwriter-ai.docuWriter",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-alive5.alive5",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-base.postmarkTrigger",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.loneScaleTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.netlify",
		"popularity": .259
	},
	{
		"id": "n8n-nodes-base.splunkTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.ldapTool",
		"popularity": .223
	},
	{
		"id": "n8n-nodes-fluentc.fluentCTranslate",
		"popularity": 0
	},
	{
		"id": "@cometapi-dev/n8n-nodes-cometapi.cometApi",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.uptimeRobot",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.magento2Tool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.keap",
		"popularity": .262
	},
	{
		"id": "n8n-nodes-base.rocketchatTool",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.openThesaurus",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.seaTableTrigger",
		"popularity": .218
	},
	{
		"id": "@telnyx/n8n-nodes-telnyx-ai.telnyxAi",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-parsio.parsio",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.bambooHrTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.iterable",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-base.freshworksCrmTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.npmTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-solapi.solapi",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.postHogTool",
		"popularity": .16
	},
	{
		"id": "@onlyfansapi/n8n-nodes-onlyfansapi.onlyFans",
		"popularity": .177
	},
	{
		"id": "@fibery/n8n-nodes-fibery.fibery",
		"popularity": .248
	},
	{
		"id": "n8n-nodes-bookoly.bookoly",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.lemlistTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloudTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.totpTool",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-mallabe-barcodes.mallabeBarcodes",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.gongTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-agencii.agencii",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.googleBooks",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.chargebeeTrigger",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-pushinator.pushinator",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.googlePerspectiveTool",
		"popularity": .107
	},
	{
		"id": "@apaleo/n8n-nodes-apaleo-official.apaleo",
		"popularity": .238
	},
	{
		"id": "n8n-nodes-base.plivo",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-base.kafkaTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.securityScorecardTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-jsonpost.jsonPostTrigger",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-base.pagerDutyTool",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-base.ghostTool",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.autopilotTrigger",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-aimfox.aimfox",
		"popularity": .264
	},
	{
		"id": "n8n-nodes-base.wiseTrigger",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-csvbox.csvboxTrigger",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.elasticSecurity",
		"popularity": .197
	},
	{
		"id": "@neosapience/n8n-nodes-typecast.typecast",
		"popularity": .177
	},
	{
		"id": "@picsart/n8n-nodes-picsart-creative-apis.picsartImage",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.copper",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-base.circleCi",
		"popularity": .085
	},
	{
		"id": "@thingsboard/n8n-nodes-thingsboard.thingsBoard",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.sentryIoTool",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.driftTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.uplead",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-base.mauticTrigger",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-base.flowTrigger",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-base.storyblok",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-base.clearbitTool",
		"popularity": .053
	},
	{
		"id": "@nvoip/n8n-nodes-nvoip.nvoip",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.unleashedSoftwareTool",
		"popularity": .053
	},
	{
		"id": "@zohomail/n8n-nodes-zohocalendar.zohoCalendar",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-base.peekalinkTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.monicaCrm",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.helpScoutTrigger",
		"popularity": .124
	},
	{
		"id": "@thelifeofrishi/n8n-nodes-orshot.orshot",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.uptimeRobotTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.dropcontactTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.sms77Tool",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-klicktipp.klicktipp",
		"popularity": .227
	},
	{
		"id": "@postpulse/n8n-nodes-postpulse.postPulse",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-straico-official.straicoOfficial",
		"popularity": 0
	},
	{
		"id": "@nexlev/n8n-nodes-nexlev.nexlev",
		"popularity": .234
	},
	{
		"id": "n8n-nodes-bookstack.bookstack",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-gleanclient.gleanClient",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.peekalink",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.googlePerspective",
		"popularity": .085
	},
	{
		"id": "@local-falcon/n8n-nodes-localfalcon.localFalcon",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.koBoToolbox",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.yourlsTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.paddleTool",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-parseur.parseur",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.timescaleDb",
		"popularity": .191
	},
	{
		"id": "n8n-nodes-cyberpulse-compliance-dev.cyberPulseCompliance",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-blooio.blooioMessaging",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.chargebeeTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-dumplingai.dumplingAi",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.timescaleDbTool",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-base.netlifyTrigger",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-base.chargebee",
		"popularity": .107
	},
	{
		"id": "@oregister/n8n-nodes-openregister.openRegister",
		"popularity": .15
	},
	{
		"id": "@exploriumai/n8n-nodes-explorium-ai.exploriumApiNode",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.iterableTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.openThesaurusTool",
		"popularity": .085
	},
	{
		"id": "@woztell-sanuker/n8n-nodes-woztell-sanuker.woztellTrigger",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.stackby",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.currents",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.helpScoutTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-mrscraper.mrscraper",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.awsSesTool",
		"popularity": .124
	},
	{
		"id": "@decisionrules/n8n-nodes-decisionrules.decisionRules",
		"popularity": .197
	},
	{
		"id": "@sendpulse/n8n-nodes-sendpulse.sendPulseA360",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-base.taiga",
		"popularity": .276
	},
	{
		"id": "n8n-nodes-base.segment",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.cockpitTool",
		"popularity": .053
	},
	{
		"id": "@reportei/n8n-nodes-reportei.reportei",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-base.oktaTool",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-scraping-dog.scrapingDog",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.crateDb",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-digital-ocean.digitalOcean",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.pushbulletTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.mauticTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.awsElb",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-seo-content-machine.seoContentMachine",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-zohoteaminbox.zohoTeamInbox",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.syncroMsp",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-base.goToWebinar",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-base.quickbase",
		"popularity": .208
	},
	{
		"id": "n8n-nodes-outgrow.outgrowTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-videotoblog.videoToBlog",
		"popularity": 0
	},
	{
		"id": "@enginemailer/n8n-nodes-enginemailer.enginemailer",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.vonageTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.crateDbTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.lingvaNex",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.questDb",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-atriomail-email.atriomail",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.paddle",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-meetgeek.meetGeek",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.signl4",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-itop.iTop",
		"popularity": .053
	},
	{
		"id": "@alipeople/n8n-nodes-sendon.sendon",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-pubnub.pubNub",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.emeliaTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-raia.raia",
		"popularity": .185
	},
	{
		"id": "@copicake/n8n-nodes-copicake.copicake",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-peek-pro.peekPro",
		"popularity": .28
	},
	{
		"id": "n8n-nodes-base.wekan",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-caspioofficial.caspio",
		"popularity": 0
	},
	{
		"id": "@musixmatch/n8n-nodes-musixmatch.musixmatch",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.unleashedSoftware",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-base.keapTrigger",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.ouraTool",
		"popularity": .124
	},
	{
		"id": "@waapi/n8n-nodes-waalaxy.waalaxy",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-base.harvestTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.bitlyTool",
		"popularity": .16
	},
	{
		"id": "n8n-nodes-base.netlifyTool",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.demio",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.koBoToolboxTrigger",
		"popularity": .213
	},
	{
		"id": "n8n-nodes-bounceban.bounceban",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-crossmint.crossmintWallets",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-diviup-connect.diviUpConnect",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.plivoTool",
		"popularity": 0
	},
	{
		"id": "@klardaten/n8n-nodes-datevconnect.masterData",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-dart.dart",
		"popularity": .053
	},
	{
		"id": "@securevector/n8n-nodes-securevector.secureVector",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.discourse",
		"popularity": .191
	},
	{
		"id": "@vlm-run/n8n-nodes-vlmrun.vlmRun",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.questDbTool",
		"popularity": .107
	},
	{
		"id": "@xano/n8n-nodes-xano.xano",
		"popularity": 0
	},
	{
		"id": "@predictleads/n8n-nodes-predictleads.predictLeads",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-tubelab.tubeLab",
		"popularity": .138
	},
	{
		"id": "@netgsm/n8n-nodes-netgsm.netgsm",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.theHiveTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.monicaCrmTool",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-parseur.parseurTrigger",
		"popularity": .15
	},
	{
		"id": "n8n-nodes-infranodus.infranodus",
		"popularity": 0
	},
	{
		"id": "@paloaltonetworks/n8n-nodes-prisma-airs.prismaAirs",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-extruct.extruct",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.customerIoTrigger",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.sendy",
		"popularity": .107
	},
	{
		"id": "@nuelink/n8n-nodes-nuelink.nuelink",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.mailjetTrigger",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.discourseTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.salesmate",
		"popularity": .138
	},
	{
		"id": "n8n-nodes-base.mailerLiteTool",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.wekanTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-nedzo.nedzo",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.zulipTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.segmentTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-jetapi.jetapi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-nele-ai.neleAi",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.convertKitTrigger",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.signl4Tool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-zenlayer.zenlayer",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.sendyTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-businessmap.businessmap",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-binalyze-air.air",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.theHiveProjectTrigger",
		"popularity": .203
	},
	{
		"id": "n8n-nodes-hedy.hedy",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-chartmogul.chartmogul",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twist",
		"popularity": .138
	},
	{
		"id": "@handelsregister/n8n-nodes-handelsregister-ai.handelsregisterAi",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.twake",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-pagepixels-screenshots.pagePixelsScreenshots",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.getResponseTrigger",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.circleCiTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.elasticSecurityTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.demioTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-contentdrips.contentdrips",
		"popularity": 0
	},
	{
		"id": "@wizaco/n8n-nodes-wiza.wiza",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-visualping.visualpingTrigger",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-groner.groner",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-checkmk.checkmk",
		"popularity": .177
	},
	{
		"id": "n8n-nodes-pagbank-connect.pagBank",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.syncroMspTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.gotifyTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-base.securityScorecard",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-twittershots.twitterShots",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.goToWebinarTool",
		"popularity": .085
	},
	{
		"id": "n8n-nodes-base.copperTrigger",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.theHive",
		"popularity": .15
	},
	{
		"id": "@port-labs/n8n-nodes-portio-experimental.portApiAi",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-anny.anny",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-air.air",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-famulor.famulor",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.pushcutTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-craft.craft",
		"popularity": .053
	},
	{
		"id": "@algolia/n8n-nodes-algolia.algolia",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.taigaTrigger",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-beyondpresence.beyondPresence",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-joggai.joggAiNode",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-velatir.velatir",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-featherless.featherless",
		"popularity": .197
	},
	{
		"id": "n8n-nodes-presenton.presenton",
		"popularity": .053
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-prospectpro.prospectpro",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.copperTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.beeminderTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.awsSnsTool",
		"popularity": 0
	},
	{
		"id": "@orq-ai/n8n-nodes-orq.orqDeployment",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-magnetite.magnetite",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-streak-crm.streak",
		"popularity": .169
	},
	{
		"id": "n8n-nodes-base.storyblokTool",
		"popularity": .107
	},
	{
		"id": "n8n-nodes-itglue.iTGlue",
		"popularity": .124
	},
	{
		"id": "n8n-nodes-base.raindropTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-roam.roam",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.cockpit",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.tapfiliateTool",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.venafiTlsProtectCloud",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-swiftgum-trigger.swiftgumTrigger",
		"popularity": .107
	},
	{
		"id": "@ekyte/n8n-nodes-ekyte.eKyteAction",
		"popularity": 0
	},
	{
		"id": "@starhunter/n8n-nodes-graphql.starhunter",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-logsnag.LogSnag",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.twistTool",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-base.haloPSATool",
		"popularity": .107
	},
	{
		"id": "@bedrijfsdatanl/n8n-nodes-bedrijfsdata.bedrijfsdata",
		"popularity": .053
	},
	{
		"id": "n8n-nodes-base.msg91Tool",
		"popularity": .085
	},
	{
		"id": "@goperigon/n8n-nodes-perigon.perigon",
		"popularity": .053
	},
	{
		"id": "@reka-ai/n8n-nodes-reka.rekaVision",
		"popularity": .185
	},
	{
		"id": "n8n-nodes-base.beeminder",
		"popularity": 0
	},
	{
		"id": "@asyncai/n8n-nodes-asyncai.asyncAi",
		"popularity": 0
	},
	{
		"id": "n8n-nodes-docutray.docutray",
		"popularity": .085
	}
];
//#endregion
//#region src/features/shared/nodeCreator/composables/useViewStacks.ts
var import_difference = /* @__PURE__ */ __toESM(require_difference(), 1);
var nodePopularityMap = Object.values(_virtual_node_popularity_data_default).reduce((acc, node) => {
	return {
		...acc,
		[node.id]: node.popularity * 100
	};
}, {});
var useViewStacks = defineStore("nodeCreatorViewStacks", () => {
	const nodeCreatorStore = useNodeCreatorStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const { getActiveItemIndex } = useKeyboardNavigation();
	const i18n = useI18n();
	const settingsStore = useSettingsStore();
	const viewStacks = ref([]);
	const activeStackItems = computed(() => {
		const stack = getLastActiveStack();
		if (!stack?.baselineItems) return stack.items ? finalizeItems(stack.items) : [];
		if (stack.search && searchBaseItems.value) {
			let searchBase = searchBaseItems.value;
			const canvasHasAINodes = workflowDocumentStore.value.aiNodes.length > 0;
			if (searchBaseItems.value.length === 0) searchBase = flattenCreateElements(stack.baselineItems ?? []);
			if (!(isAiRootView(stack) || canvasHasAINodes) || ["plus_endpoint", "node_connection_drop"].includes(nodeCreatorStore.openSource) && !isAiSubcategoryView(stack)) searchBase = filterOutAiNodes(searchBase);
			const searchResults = finalizeItems(searchNodes(stack.search || "", searchBase, { popularity: nodePopularityMap }));
			const groupedNodes = groupIfAiNodes(searchResults, stack, false) ?? searchResults;
			stack.activeIndex = groupedNodes.some((node) => node.type === "section") ? 1 : 0;
			return groupedNodes;
		}
		if (showsAiGatewaySection(stack)) {
			const extracted = extractAiGatewaySection(stack.baselineItems);
			if (extracted) return finalizeItems([extracted.section, ...groupIfAiNodes(extracted.rest, stack, true)]);
		}
		return finalizeItems(groupIfAiNodes(stack.baselineItems, stack, true));
	});
	const activeViewStack = computed(() => {
		const stack = getLastActiveStack();
		if (!stack) return {};
		const flatBaselineItems = flattenCreateElements(stack.baselineItems ?? []);
		return {
			...stack,
			items: activeStackItems.value,
			hasSearch: stack?.hasSearch ?? flatBaselineItems.length > 8
		};
	});
	const activeViewStackMode = computed(() => activeViewStack.value.mode ?? "Trigger");
	const searchBaseItems = computed(() => {
		const stack = getLastActiveStack();
		if (!stack?.searchItems) return [];
		return stack.searchItems.map((item) => transformNodeType(item, stack.subcategory));
	});
	function isAiSubcategoryView(stack) {
		return stack.rootView === AI_OTHERS_NODE_CREATOR_VIEW;
	}
	function isHitlSubcategoryView(stack) {
		return stack.rootView === HUMAN_IN_THE_LOOP_CATEGORY;
	}
	function getLastActiveStack() {
		return viewStacks.value[viewStacks.value.length - 1];
	}
	function getAllNodeCreateElements() {
		return nodeCreatorStore.mergedNodes.map((item) => transformNodeType(item));
	}
	const globalSearchItemsDiff = computed(() => {
		const stack = getLastActiveStack();
		if (!stack?.search || isAiSubcategoryView(stack) || isHitlSubcategoryView(stack)) return [];
		const allNodes = getAllNodeCreateElements();
		const filteredNodes = isAiRootView(stack) ? allNodes : filterOutAiNodes(allNodes);
		let globalSearchResult = finalizeItems(searchNodes(stack.search || "", filteredNodes, { popularity: nodePopularityMap }));
		if (isAiRootView(stack)) globalSearchResult = groupIfAiNodes(globalSearchResult, stack, false);
		return globalSearchResult.filter((item) => {
			return !activeStackItems.value.find((activeItem) => {
				if (activeItem.type === "section") return activeItem.children.some((sectionItem) => sectionItem.key === item.key);
				return activeItem.key === item.key;
			});
		}).filter((item) => {
			if (item.type === "section") return item.children.some((child) => activeStackItems.value.some((filteredItem) => filteredItem.key === child.key));
			return true;
		});
	});
	const itemsBySubcategory = computed(() => subcategorizeItems(nodeCreatorStore.mergedNodes));
	function isAiRootView(stack) {
		return stack.rootView === "AI";
	}
	function filterAiRootNodes(items) {
		return items.filter((node) => {
			if (node.type !== "node") return false;
			const subcategories = node.properties.codex?.subcategories?.["AI"] ?? [];
			return subcategories.includes("Root Nodes") && !subcategories?.includes("Tools");
		});
	}
	const createActionFilter = computed(() => (connectionType) => {
		return (items) => {
			if (items.some((item) => item.outputConnectionType)) return items.filter((item) => item.outputConnectionType === connectionType);
			return items;
		};
	});
	const TOOL_SUBCATEGORY_ORDER = [
		AI_CATEGORY_OTHER_TOOLS,
		AI_CATEGORY_MCP_NODES,
		AI_CATEGORY_VECTOR_STORES
	];
	function toolSubcategoryRank(item) {
		if (item.type === "section") return -1;
		const idx = TOOL_SUBCATEGORY_ORDER.indexOf(item.key);
		return idx === -1 ? TOOL_SUBCATEGORY_ORDER.length : idx;
	}
	function withMcpClientToolFirst(items) {
		const clientTool = items.find((item) => item.key === AI_MCP_TOOL_NODE_TYPE);
		if (!clientTool) return items;
		const rest = items.filter((item) => item.key !== AI_MCP_TOOL_NODE_TYPE);
		return [{
			type: "section",
			key: AI_MCP_TOOL_NODE_TYPE,
			title: "",
			children: [clientTool],
			showSeparator: true,
			hideHeader: true
		}, ...rest];
	}
	function groupIfAiNodes(items, stack, sortAlphabetically) {
		const aiNodes = items.filter((node) => isAINode(node));
		const canvasHasAINodes = workflowDocumentStore.value.aiNodes.length > 0;
		const isVectorStoresCategory = stack?.title === AI_CATEGORY_VECTOR_STORES;
		const isToolsCategory = stack?.title === AI_CATEGORY_TOOLS;
		if (aiNodes.length > 0 && (canvasHasAINodes || isAiRootView(getLastActiveStack()) || isVectorStoresCategory)) {
			const sectionsMap = /* @__PURE__ */ new Map();
			const aiRootNodes = filterAiRootNodes(aiNodes);
			const aiSubNodes = (0, import_difference.default)(aiNodes, aiRootNodes);
			aiSubNodes.forEach((node) => {
				const subcategories = node.properties.codex?.subcategories ?? {};
				const section = subcategories["AI"]?.[0];
				if (section) {
					const subSection = section === "Vector Stores" && stack?.title === "Tools" ? void 0 : subcategories[section]?.[0];
					const sectionKey = subSection ?? section;
					const currentItems = sectionsMap.get(sectionKey)?.items ?? [];
					const isSubnodesSection = !(subcategories["AI"].includes("Root Nodes") || subcategories["AI"].includes("Model Context Protocol"));
					let title = section;
					if (isSubnodesSection) title = `${section} (${i18n.baseText("nodeCreator.subnodes")})`;
					if (subSection) title = subSection;
					sectionsMap.set(sectionKey, {
						key: sectionKey,
						title,
						items: [...currentItems, node.key]
					});
				}
			});
			const nonAiNodes = (0, import_difference.default)(items, aiNodes);
			const sections = Array.from(sectionsMap.values());
			if (isToolsCategory && !stack?.search) {
				const actionsFilter = createActionFilter.value(NodeConnectionTypes.AiTool);
				return sections.map((section) => {
					if (section.key === "Recommended Tools") return {
						type: "section",
						key: section.key,
						title: section.title,
						children: nodeTypesToCreateElements(section.items, aiSubNodes),
						showSeparator: true
					};
					const subcategoryItems = nodeTypesToCreateElements(section.items, aiSubNodes);
					return {
						type: "subcategory",
						key: section.key,
						properties: {
							title: section.title,
							icon: mapToolSubcategoryIcon(section.key),
							items: section.key === "Model Context Protocol" ? withMcpClientToolFirst(subcategoryItems) : subcategoryItems,
							new: NEW_TOOL_CATEGORIES.includes(section.key),
							actionsFilter,
							hideActions: true
						}
					};
				}).sort((a, b) => toolSubcategoryRank(a) - toolSubcategoryRank(b));
			}
			return [
				...nonAiNodes,
				...aiRootNodes,
				...groupItemsInSections(aiSubNodes, sections, sortAlphabetically)
			];
		}
		return items;
	}
	function filterOutAiNodes(items) {
		return items.filter((item) => {
			if (item.type === "node") {
				if (!(item.properties.codex?.categories?.includes("AI") === true)) return true;
				return item.properties.codex?.subcategories?.["AI"]?.includes(AI_CATEGORY_ROOT_NODES);
			}
			return true;
		});
	}
	async function gotoCompatibleConnectionView(connectionType, isOutput, filter) {
		let nodesByConnectionType;
		let relatedAIView;
		if (isOutput === true) {
			nodesByConnectionType = useNodeTypesStore().visibleNodeTypesByInputConnectionTypeNames;
			relatedAIView = { properties: {
				title: i18n.baseText("nodeCreator.aiPanel.aiNodes"),
				icon: "robot"
			} };
		} else {
			nodesByConnectionType = useNodeTypesStore().visibleNodeTypesByOutputConnectionTypeNames;
			relatedAIView = AINodesView([]).items.find((item) => item.properties.connectionType === connectionType);
		}
		let extendedInfo = {};
		if (!filter?.nodes?.length && relatedAIView?.properties.info) extendedInfo = { info: relatedAIView?.properties.info };
		await nextTick();
		const iconName = getThemedValue(relatedAIView?.properties.icon, useUIStore().appliedTheme);
		pushViewStack({
			title: relatedAIView?.properties.title,
			...extendedInfo,
			rootView: AI_OTHERS_NODE_CREATOR_VIEW,
			mode: "nodes",
			items: nodeCreatorStore.allNodeCreatorNodes,
			nodeIcon: iconName ? {
				type: "icon",
				name: iconName,
				color: relatedAIView?.properties.iconProps?.color
			} : void 0,
			panelClass: relatedAIView?.properties.panelClass,
			connectionType,
			baseFilter: (i) => {
				if (i.key === "@n8n/n8n-nodes-langchain.code") return false;
				const displayNode = nodesByConnectionType[connectionType].includes(i.key);
				if (displayNode) {
					const isIncluded = filter?.nodes?.length ? filter?.nodes?.includes(i.key) : true;
					const isExcluded = filter?.excludedNodes?.length ? filter?.excludedNodes?.includes(i.key) : false;
					const isConditionMet = filter?.conditions?.length ? filter?.conditions?.every((condition) => condition(i)) : true;
					return isIncluded && !isExcluded && isConditionMet;
				}
				return displayNode;
			},
			itemsMapper(item) {
				return {
					...item,
					subcategory: connectionType
				};
			},
			actionsFilter: createActionFilter.value(connectionType),
			hideActions: true,
			preventBack: true
		}, { resetStacks: true });
	}
	function setStackBaselineItems() {
		const stack = getLastActiveStack();
		if (!stack || !activeViewStack.value.uuid) return;
		let stackItems = stack?.items ?? [];
		if (!stack?.items) {
			const subcategory = stack?.subcategory ?? "*";
			let itemsInSubcategory = itemsBySubcategory.value[subcategory];
			if (!settingsStore.isAskAiEnabled) itemsInSubcategory = itemsInSubcategory?.filter((item) => item.key !== "n8n-nodes-base.aiTransform") ?? [];
			const sections = stack.sections;
			if (sections) stackItems = groupItemsInSections(itemsInSubcategory, sections);
			else stackItems = itemsInSubcategory;
		}
		if ((stack.forceIncludeNodes ?? []).length > 0) {
			const matchedNodes = nodeCreatorStore.mergedNodes.filter((item) => stack.forceIncludeNodes?.includes(item.name)).map((item) => transformNodeType(item, stack.subcategory));
			stackItems.push(...matchedNodes);
		}
		if (stack.baseFilter) stackItems = stackItems.filter(stack.baseFilter);
		if (stack.itemsMapper) stackItems = stackItems.map(stack.itemsMapper);
		if (!stack.items) stackItems = sortNodeCreateElements(stackItems);
		updateCurrentViewStack({ baselineItems: stackItems });
	}
	function pushViewStack(stack, options = {}) {
		if (options.resetStacks) resetViewStacks();
		if (activeViewStack.value.uuid) updateCurrentViewStack({ activeIndex: getActiveItemIndex() });
		const newStackUuid = v4();
		viewStacks.value.push({
			...stack,
			uuid: newStackUuid,
			transitionDirection: options.transitionDirection ?? "in",
			activeIndex: 0
		});
		setStackBaselineItems();
	}
	function popViewStack() {
		if (activeViewStack.value.uuid) {
			viewStacks.value.pop();
			updateCurrentViewStack({ transitionDirection: "out" });
		}
	}
	function updateCurrentViewStack(stack) {
		const currentStack = getLastActiveStack();
		const matchedIndex = viewStacks.value.findIndex((s) => s.uuid === currentStack.uuid);
		if (!currentStack) return;
		Object.keys(stack).forEach((key) => {
			const typedKey = key;
			viewStacks.value[matchedIndex] = {
				...viewStacks.value[matchedIndex],
				[key]: stack[typedKey]
			};
		});
	}
	function resetViewStacks() {
		viewStacks.value = [];
	}
	return {
		viewStacks,
		activeViewStack,
		activeViewStackMode,
		globalSearchItemsDiff,
		isAiSubcategoryView,
		gotoCompatibleConnectionView,
		resetViewStacks,
		updateCurrentViewStack,
		pushViewStack,
		popViewStack,
		getAllNodeCreateElements,
		isHitlSubcategoryView
	};
});
//#endregion
//#region src/features/shared/nodeCreator/nodeCreator.store.ts
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
var useNodeCreatorStore = defineStore(STORES.NODE_CREATOR, () => {
	const routeWorkflowId = useRouteWorkflowId();
	const ndvStore = computed(() => useNDVStore(createWorkflowDocumentId(routeWorkflowId.value)));
	const uiStore = useUIStore();
	const nodeTypesStore = useNodeTypesStore();
	const telemetry = useTelemetry();
	const externalHooks = useExternalHooks();
	const { getNodeCreatorFilter } = useGetNodeCreatorFilter();
	const selectedView = ref(TRIGGER_NODE_CREATOR_VIEW);
	const mergedNodes = ref([]);
	const actions = ref({});
	const openSource = ref("");
	const isCreateNodeActive = ref(false);
	const openingContext = ref(null);
	const pendingInitialViewStack = ref(null);
	const nodePanelSessionId = ref("");
	const allNodeCreatorNodes = computed(() => Object.values(mergedNodes.value).map((i) => transformNodeType(i)));
	function setMergeNodes(nodes) {
		mergedNodes.value = nodes;
	}
	function removeNodeFromMergedNodes(nodeName) {
		mergedNodes.value = mergedNodes.value.filter((n) => n.name !== nodeName);
	}
	function setActions(nodes) {
		actions.value = nodes;
	}
	function setSelectedView(view) {
		selectedView.value = view;
	}
	function setOpenSource(view) {
		openSource.value = view;
	}
	function openSelectiveNodeCreator({ connectionType, node, creatorView, connectionIndex = 0, workflowId }) {
		const nodeName = node ?? ndvStore.value.activeNodeName;
		const nodeData = nodeName ? useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).getNodeByName(nodeName) ?? null : null;
		ndvStore.value.unsetActiveNodeName();
		setTimeout(() => {
			if (creatorView) setNodeCreatorState({
				createNodeActive: true,
				nodeCreatorView: creatorView,
				connectionType,
				workflowId
			});
			else if (connectionType && nodeData) openNodeCreatorForConnectingNode({
				connection: {
					source: nodeData.id,
					sourceHandle: createCanvasConnectionHandleString({
						mode: "inputs",
						type: connectionType,
						index: connectionIndex
					})
				},
				eventSource: NODE_CREATOR_OPEN_SOURCES.NOTICE_ERROR_MESSAGE,
				workflowId
			});
		});
	}
	function setNodeCreatorState({ source, createNodeActive, nodeCreatorView, connectionType, workflowId }) {
		if (!nodeCreatorView) nodeCreatorView = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).workflowTriggerNodes.length > 0 ? REGULAR_NODE_CREATOR_VIEW : TRIGGER_NODE_CREATOR_VIEW;
		setSelectedView(nodeCreatorView);
		isCreateNodeActive.value = createNodeActive;
		if (createNodeActive && source) setOpenSource(source);
		externalHooks.run("nodeView.createNodeActiveChanged", {
			source,
			mode: getMode(nodeCreatorView),
			connectionType,
			createNodeActive
		});
		if (createNodeActive) onCreatorOpened({
			source,
			mode: getMode(nodeCreatorView),
			connectionType,
			workflow_id: workflowId
		});
	}
	function openNodeCreatorForConnectingNode({ connection, eventSource, nodeCreatorView, workflowId }) {
		const sourceNode = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).getNodeById(connection.source);
		if (!sourceNode) return;
		const { type, mode } = parseCanvasConnectionHandleString(connection.sourceHandle);
		uiStore.lastSelectedNode = sourceNode.name;
		if (isVueFlowConnection(connection)) uiStore.lastInteractedWithNodeConnection = connection;
		uiStore.lastInteractedWithNodeHandle = connection.sourceHandle ?? null;
		uiStore.lastInteractedWithNodeId = sourceNode.id;
		const isOutput = mode === CanvasConnectionMode.Output;
		const isScopedConnection = type !== NodeConnectionTypes.Main && !nodeCreatorView;
		setNodeCreatorState({
			source: eventSource,
			createNodeActive: true,
			nodeCreatorView: isScopedConnection ? AI_UNCATEGORIZED_CATEGORY : nodeCreatorView,
			connectionType: type,
			workflowId
		});
		if (isScopedConnection) useViewStacks().gotoCompatibleConnectionView(type, isOutput, getNodeCreatorFilter(sourceNode.name, type, sourceNode)).catch(() => {});
	}
	async function openNodeCreatorWithNode(workflowId, nodeName) {
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		const nodeData = nodeName ? workflowDocumentStore.getNodeByName(nodeName) ?? null : null;
		if (!nodeData) return;
		ndvStore.value.unsetActiveNodeName();
		const nodeType = nodeTypesStore.getNodeType(nodeData?.type) ?? nodeTypesStore.communityNodeType(nodeData?.type)?.nodeDescription;
		if (!nodeType) return;
		setNodeCreatorState({
			workflowId,
			createNodeActive: true
		});
		await nextTick();
		const nodeActions = actions.value[nodeType.name];
		const viewStack = prepareCommunityNodeDetailsViewStack({
			key: nodeType.name,
			properties: nodeType,
			type: "node",
			subcategory: "*"
		}, getNodeIconSource(nodeType.name, null, workflowDocumentStore.getExpressionHandler()), "Regular", nodeActions ?? []);
		useViewStacks().pushViewStack(viewStack, { resetStacks: true });
	}
	function openNodeCreatorForTriggerNodes(workflowId, source) {
		ndvStore.value.unsetActiveNodeName();
		setSelectedView(TRIGGER_NODE_CREATOR_VIEW);
		setNodeCreatorState({
			workflowId,
			source,
			createNodeActive: true,
			nodeCreatorView: TRIGGER_NODE_CREATOR_VIEW
		});
	}
	function openNodeCreatorForRegularNodes(workflowId, source) {
		ndvStore.value.unsetActiveNodeName();
		setSelectedView(REGULAR_NODE_CREATOR_VIEW);
		setNodeCreatorState({
			workflowId,
			source,
			createNodeActive: true,
			nodeCreatorView: REGULAR_NODE_CREATOR_VIEW
		});
	}
	function openNodeCreatorForActions(workflowId, node, eventSource) {
		const actionNode = allNodeCreatorNodes.value.find((i) => i.key === node);
		if (!actionNode) return;
		const transformedActions = actions.value[actionNode.key]?.map((a) => transformNodeType(a, actionNode.properties.displayName, "action"));
		ndvStore.value.unsetActiveNodeName();
		setSelectedView(REGULAR_NODE_CREATOR_VIEW);
		pendingInitialViewStack.value = {
			subcategory: "*",
			title: actionNode.properties.displayName,
			nodeIcon: {
				type: "icon",
				name: "check-check"
			},
			rootView: "Regular",
			mode: "actions",
			items: transformedActions
		};
		setNodeCreatorState({
			workflowId,
			source: eventSource,
			createNodeActive: true,
			nodeCreatorView: REGULAR_NODE_CREATOR_VIEW
		});
	}
	function consumePendingInitialViewStack() {
		const stack = pendingInitialViewStack.value;
		pendingInitialViewStack.value = null;
		return stack;
	}
	function resetNodesPanelSession() {
		nodePanelSessionId.value = `nodes_panel_session_${(/* @__PURE__ */ new Date()).valueOf()}`;
	}
	function trackNodeCreatorEvent(event, properties = {}) {
		telemetry.track(event, {
			...properties,
			nodes_panel_session_id: nodePanelSessionId.value
		});
	}
	function onCreatorOpened({ source, mode, connectionType, workflow_id }) {
		resetNodesPanelSession();
		if (useSettingsStore().isAiGatewayEnabled) {
			const aiGatewayStore = useAiGatewayStore();
			aiGatewayStore.fetchConfig();
			aiGatewayStore.fetchWallet();
		}
		trackNodeCreatorEvent("User opened nodes panel", {
			source,
			mode,
			connectionType,
			workflow_id
		});
	}
	function onNodeFilterChanged({ newValue, filteredNodes, filterMode, subcategory, title }) {
		if (!newValue.length) return;
		const { results_count, trigger_count, regular_count, community_count } = filteredNodes.reduce((accu, node) => {
			if (!("properties" in node)) return accu;
			if ("actionKey" in node.properties && node.properties.actionKey === "__CUSTOM_API_CALL__") return accu;
			const isTrigger = node.key.includes("Trigger");
			const nodeName = (0, import_get.default)(node, "properties.name", null);
			const isCommunityNode = nodeName && isCommunityPackageName(nodeName);
			return {
				results_count: accu.results_count + 1,
				trigger_count: accu.trigger_count + (isTrigger ? 1 : 0),
				regular_count: accu.regular_count + (isTrigger ? 0 : 1),
				community_count: accu.community_count + (isCommunityNode ? 1 : 0)
			};
		}, {
			results_count: 0,
			trigger_count: 0,
			regular_count: 0,
			community_count: 0
		});
		trackNodeCreatorEvent("User entered nodes panel search term", {
			search_string: newValue,
			filter_mode: getMode(filterMode),
			category_name: subcategory,
			results_count,
			trigger_count,
			regular_count,
			community_count,
			title
		});
	}
	function onCategoryExpanded(properties) {
		trackNodeCreatorEvent("User viewed node category", {
			...properties,
			is_subcategory: false
		});
	}
	function onViewActions(properties) {
		trackNodeCreatorEvent("User viewed node actions", properties);
	}
	function onActionsCustomAPIClicked(properties) {
		trackNodeCreatorEvent("User clicked custom API from node actions", properties);
	}
	function onSubcategorySelected(properties) {
		trackNodeCreatorEvent("User viewed node category", {
			category_name: properties.subcategory,
			is_subcategory: true
		});
	}
	function onAgentPanelOptionSelected(properties) {
		trackNodeCreatorEvent("User selected agent in node creator panel", properties);
	}
	function onNodeAddedToCanvas(properties) {
		trackNodeCreatorEvent("User added node to workflow canvas", properties);
	}
	function getMode(mode) {
		if (mode === "AI" || mode === "AI Other") return "ai";
		if (mode === "Trigger") return "trigger";
		return "regular";
	}
	return {
		isCreateNodeActive,
		openingContext,
		openSource,
		selectedView,
		mergedNodes,
		actions,
		allNodeCreatorNodes,
		setSelectedView,
		setOpenSource,
		setActions,
		setMergeNodes,
		removeNodeFromMergedNodes,
		setNodeCreatorState,
		openSelectiveNodeCreator,
		openNodeCreatorForConnectingNode,
		openNodeCreatorForTriggerNodes,
		openNodeCreatorForRegularNodes,
		openNodeCreatorForActions,
		consumePendingInitialViewStack,
		onCreatorOpened,
		onNodeFilterChanged,
		onCategoryExpanded,
		onActionsCustomAPIClicked,
		onViewActions,
		onSubcategorySelected,
		onAgentPanelOptionSelected,
		onNodeAddedToCanvas,
		openNodeCreatorWithNode
	};
});
//#endregion
//#region src/features/workflows/canvas/canvas.eventBus.ts
var canvasEventBus = createEventBus();
//#endregion
export { useKeyboardNavigation as a, HitlToolView as c, require_camelCase as d, require_capitalize as f, _virtual_node_popularity_data_default as i, RegularView as l, useNodeCreatorStore as n, AINodesView as o, useViewStacks as r, AIView as s, canvasEventBus as t, TriggerView as u };
