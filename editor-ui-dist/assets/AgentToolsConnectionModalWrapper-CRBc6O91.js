import { $ as openBlock, It as ref, N as defineComponent, S as computed, Ut as toValue, X as onMounted, gt as watch, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { G as filterAndSearchNodes, V as useNodeTypesStore, bt as stripToolSuffix, et as isNodePreviewKey, it as removePreviewToken, t as useWorkflowsStore, vn as useProjectsStore, yn as useSourceControlStore } from "./workflows.store-Bo6ZgF_O.js";
import { H as INCOMPATIBLE_WORKFLOW_TOOL_BODY_NODE_TYPES, bi as isCommunityPackageName, di as NodeConnectionTypes, oa as v4, va as getResourcePermissions } from "./src-C3aqUyDp.js";
import { t as useRootStore } from "./useRootStore-Bapf3biO.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import { Dr as AGENT_TOOL_CONFIG_MODAL_KEY, n as DEFAULT_NEW_WORKFLOW_NAME } from "./constants-DPRLSskW.js";
import { a as TELEMETRY_EVENT } from "./src-CZRYnvxl.js";
import { s as getWorkflow } from "./workflowsList.store-AYTNm4a5.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { n as getNodeIconSource } from "./nodeIcon-DmLvF6tm.js";
import { t as useInstallNode } from "./useInstallNode-B_EX3buj.js";
import { n as SAMPLE_SUBWORKFLOW_TRIGGER_ID, r as SAMPLE_SUBWORKFLOW_WORKFLOW } from "./samples-DKkeclIo.js";
import { a as getExistingToolNames, i as nodeTypeToNewMcpServer, n as mcpServerToNode, o as nodeTypeToNewToolRef, s as toolRefToNode, t as isMcpRelatedNodeType, u as workflowToNewToolRef } from "./useMcpServerAdapter-BruLAmiw.js";
import { n as toolCategoryForNodeType, r as useAgentToolCatalog, t as hasInputs } from "./useAgentToolCatalog-9UC7gKZg.js";
import { a as hasToolConnection } from "./ToolIcon-7GUB4TfR.js";
import { t as ToolsConnectionModal_default } from "./ToolsConnectionModal-CAeFUB0M.js";
//#region src/features/agents/composables/useAgentToolTelemetry.ts
/** Identifier payload — node_type for node tools, workflow name for workflow tools. */
function identityProps(ref) {
	if (ref.type === "node") return { node_type: ref.node?.nodeType };
	if (ref.type === "workflow") return { workflow: ref.workflow };
	return { custom_id: ref.id };
}
function useAgentToolTelemetry(agentId) {
	const telemetry = useTelemetry();
	function agentProps() {
		const resolvedAgentId = toValue(agentId);
		return resolvedAgentId ? { agent_id: resolvedAgentId } : {};
	}
	/** Fired when the user clicks Connect on an Available row — a new-ref flow begins. */
	function trackAddStarted(toolType) {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_STARTED_ADDING_AGENT_TOOL, {
			tool_type: toolType,
			source: "manual",
			...agentProps()
		});
	}
	/** Fired when an existing tool's config is saved. */
	function trackEdited(ref) {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_EDITED_AGENT_TOOL, {
			tool_type: ref.type,
			...identityProps(ref),
			...agentProps()
		});
	}
	return {
		trackAddStarted,
		trackEdited
	};
}
//#endregion
//#region src/features/agents/utils/toolIconSource.ts
/** Map a node type description to the shared tools-connection icon shape. */
function toToolIconSource(nodeType) {
	const source = getNodeIconSource(nodeType, null, null);
	if (!source) return void 0;
	const { badge: _badge, ...rest } = source;
	return rest;
}
//#endregion
//#region src/features/agents/components/AgentToolsConnectionModalWrapper.vue
var AgentToolsConnectionModalWrapper_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "AgentToolsConnectionModalWrapper",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const CATEGORIES = [
			"all",
			"mcp",
			"n8n",
			"app-action",
			"workflows"
		];
		const incompatibleWorkflowToolBodyNodeTypes = new Set(INCOMPATIBLE_WORKFLOW_TOOL_BODY_NODE_TYPES);
		const props = __props;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
		const rootStore = useRootStore();
		const router = useRouter();
		const toast = useToast();
		const workflowsStore = useWorkflowsStore();
		const projectsStore = useProjectsStore();
		const sourceControlStore = useSourceControlStore();
		const toolTelemetry = useAgentToolTelemetry(props.data.agentId);
		const { availableToolTypes, availableWorkflows, incompatibleWorkflows, loadWorkflows, resolveToolNodeType } = useAgentToolCatalog();
		const { installNode: installCommunityNode } = useInstallNode();
		const usersStore = useUsersStore();
		const searchQuery = ref("");
		const installingToolName = ref(null);
		const isCreatingWorkflow = ref(false);
		const canCreateWorkflow = computed(() => {
			if (!props.data.projectId || sourceControlStore.preferences.branchReadOnly) return false;
			const projectScopes = projectsStore.myProjects.find((project) => project.id === props.data.projectId)?.scopes;
			const projectPermission = getResourcePermissions(projectScopes).workflow.create;
			const globalPermission = getResourcePermissions(usersStore.currentUser?.globalScopes).workflow.create;
			return Boolean(globalPermission ?? projectPermission);
		});
		function toWorkingToolEntries(tools, existingEntries = []) {
			return tools.map((ref, index) => ({
				localId: existingEntries[index]?.localId ?? v4(),
				ref
			}));
		}
		function toWorkingMcpServerEntries(servers, existingEntries = []) {
			return servers.map((server, index) => ({
				localId: existingEntries[index]?.localId ?? v4(),
				server
			}));
		}
		const workingToolEntries = ref(toWorkingToolEntries(props.data.tools));
		watch(() => props.data.tools, (tools) => {
			workingToolEntries.value = toWorkingToolEntries(tools, workingToolEntries.value);
		});
		const workingMcpServerEntries = ref(toWorkingMcpServerEntries(props.data.mcpServers ?? []));
		watch(() => props.data.mcpServers ?? [], (servers) => {
			workingMcpServerEntries.value = toWorkingMcpServerEntries(servers, workingMcpServerEntries.value);
		});
		const workingTools = computed(() => workingToolEntries.value.map(({ ref }) => ref));
		const workingMcpServers = computed(() => workingMcpServerEntries.value.map(({ server }) => server));
		const isConfigModalOpen = computed(() => uiStore.modalsById[AGENT_TOOL_CONFIG_MODAL_KEY]?.open === true);
		/**
		* The two dialogs are sequential rather than stacked: connecting a tool hands
		* over to the config modal, and this one steps aside. It stays open in the
		* store rather than closing, so cancelling the config brings the list back with
		* its search and scroll position intact.
		*/
		const isOpen = computed({
			get: () => uiStore.modalsById[props.modalName]?.open === true && !isConfigModalOpen.value,
			set: (value) => {
				if (!value) uiStore.closeModal(props.modalName);
			}
		});
		function openConfigModal(data) {
			uiStore.openModalWithData({
				name: AGENT_TOOL_CONFIG_MODAL_KEY,
				data
			});
		}
		onMounted(() => {
			loadWorkflows(props.data.projectId);
			nodeTypesStore.fetchCommunityNodePreviews();
		});
		function hasRequiredCredentials(nodeType) {
			return (nodeType.credentials ?? []).some((credential) => credential.required !== false);
		}
		function isConfigurableParameter(parameter) {
			return parameter.type !== "notice" && parameter.type !== "hidden";
		}
		function needsSetup(nodeType) {
			return hasRequiredCredentials(nodeType) || (nodeType.properties ?? []).some(isConfigurableParameter);
		}
		function makeUniqueName(baseName, existingNames, format) {
			const defaultFormat = (name, counter) => `${name} (${counter})`;
			const formatFn = format ?? defaultFormat;
			if (!existingNames.includes(baseName)) return baseName;
			let counter = 1;
			while (existingNames.includes(formatFn(baseName, counter))) counter++;
			return formatFn(baseName, counter);
		}
		function resolveMcpNodeType(server) {
			const preferredTypeName = server.metadata?.nodeTypeName ?? "@n8n/n8n-nodes-langchain.mcpClientTool";
			return nodeTypesStore.getNodeType(preferredTypeName) ?? nodeTypesStore.getNodeType("@n8n/n8n-nodes-langchain.mcpClientTool");
		}
		function getExistingMcpServerNames(servers, exclude) {
			return servers.filter((server) => server !== exclude).map((server) => server.name);
		}
		function commit() {
			props.data.onConfirm({
				tools: workingTools.value,
				mcpServers: workingMcpServers.value
			});
		}
		function addToolRef(savedRef) {
			workingToolEntries.value = [...workingToolEntries.value, {
				localId: v4(),
				ref: savedRef
			}];
			commit();
			uiStore.closeModal(props.modalName);
			toast.showMessage({
				title: i18n.baseText("agents.tools.added"),
				type: "success"
			});
		}
		function addMcpServer(savedServer) {
			workingMcpServerEntries.value = [...workingMcpServerEntries.value, {
				localId: v4(),
				server: savedServer
			}];
			commit();
			uiStore.closeModal(props.modalName);
			toast.showMessage({
				title: i18n.baseText("agents.tools.mcp.added"),
				type: "success"
			});
		}
		function openConfigForNewRef(newRef) {
			openConfigModal({
				toolRef: newRef,
				projectId: props.data.projectId,
				agentId: props.data.agentId,
				supportsToolApproval: props.data.supportsToolApproval,
				existingToolNames: getExistingToolNames(workingTools.value),
				onConfirm: (savedRef) => {
					addToolRef(savedRef);
				}
			});
		}
		function openConfigForNewMcpServer(server, nodeType) {
			openConfigModal({
				kind: "mcpServer",
				mcpServer: server,
				initialNode: mcpServerToNode(server, nodeType),
				projectId: props.data.projectId,
				agentId: props.data.agentId,
				supportsToolApproval: props.data.supportsToolApproval,
				existingToolNames: getExistingMcpServerNames(workingMcpServers.value),
				onConfirm: (savedServer) => {
					addMcpServer(savedServer);
				}
			});
		}
		function handleAddMcpServer(nodeType) {
			const newServer = nodeTypeToNewMcpServer(nodeType);
			newServer.name = makeUniqueName(newServer.name, getExistingMcpServerNames(workingMcpServers.value), (name, counter) => `${name}-${counter}`);
			openConfigForNewMcpServer(newServer, nodeType);
		}
		function isCommunityPreviewTool(nodeType) {
			if (!isNodePreviewKey(nodeType.name)) return false;
			return !!nodeTypesStore.communityNodeType(stripToolSuffix(nodeType.name));
		}
		/** Reviewed and approved by n8n, whether or not it is installed yet. */
		function isVerifiedCommunityTool(nodeType) {
			return isCommunityPackageName(nodeType.name) && !!nodeTypesStore.communityNodeType(stripToolSuffix(nodeType.name))?.isOfficialNode;
		}
		function communityPackageNameFor(nodeType) {
			const baseName = stripToolSuffix(nodeType.name);
			return nodeTypesStore.communityNodeType(baseName)?.packageName ?? removePreviewToken(nodeType.name.split(".")[0] ?? nodeType.name);
		}
		async function installAndAddCommunityPreview(nodeType) {
			installingToolName.value = nodeType.name;
			try {
				if (!(await installCommunityNode({
					type: "verified",
					packageName: communityPackageNameFor(nodeType),
					nodeType: stripToolSuffix(nodeType.name),
					telemetry: {
						source: "agent builder tools",
						hasQuickConnect: false
					}
				})).success) return;
				const installedName = removePreviewToken(nodeType.name);
				const installed = nodeTypesStore.getNodeType(installedName);
				if (!installed) {
					toast.showError(new Error(i18n.baseText("agents.tools.install.unresolved.message")), i18n.baseText("agents.tools.install.unresolved.title"));
					return;
				}
				addNodeTool(installed);
			} finally {
				installingToolName.value = null;
			}
		}
		async function handleAddTool(nodeType) {
			if (isMcpRelatedNodeType(nodeType.name)) {
				handleAddMcpServer(nodeType);
				return;
			}
			if (isCommunityPreviewTool(nodeType)) {
				await installAndAddCommunityPreview(nodeType);
				return;
			}
			addNodeTool(nodeType);
		}
		function addNodeTool(nodeType) {
			toolTelemetry.trackAddStarted("node");
			const newRef = nodeTypeToNewToolRef(nodeType);
			if (needsSetup(nodeType)) {
				openConfigForNewRef(newRef);
				return;
			}
			if (newRef.type === "node") addToolRef({
				...newRef,
				name: makeUniqueName(newRef.name ?? nodeType.displayName, getExistingToolNames(workingTools.value))
			});
			else addToolRef({ ...newRef });
		}
		async function handleAddWorkflow(workflow) {
			toolTelemetry.trackAddStarted("workflow");
			let full;
			try {
				full = await getWorkflow(rootStore.restApiContext, workflow.id);
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.tools.workflow.fetchFailed.title"), { message: i18n.baseText("agents.tools.workflow.fetchFailed.message") });
				return;
			}
			const incompatible = (full.nodes ?? []).filter((node) => incompatibleWorkflowToolBodyNodeTypes.has(node.type));
			if (incompatible.length > 0) {
				const nodeNames = incompatible.map((n) => n.name).join(", ");
				toast.showError(new Error(i18n.baseText("agents.tools.workflow.incompatible.message", { interpolate: {
					name: workflow.name,
					nodes: nodeNames
				} })), i18n.baseText("agents.tools.workflow.incompatible.title"));
				return;
			}
			openConfigForNewRef(workflowToNewToolRef(workflow));
		}
		async function handleCreateWorkflow() {
			const projectId = props.data.projectId;
			if (!projectId || !canCreateWorkflow.value || isCreatingWorkflow.value) return;
			isCreatingWorkflow.value = true;
			toolTelemetry.trackAddStarted("workflow");
			try {
				const sampleName = DEFAULT_NEW_WORKFLOW_NAME;
				const matchingWorkflows = availableWorkflows.value.filter((workflow) => workflow.name?.startsWith(sampleName));
				const newWorkflow = await workflowsStore.createNewWorkflow({
					...SAMPLE_SUBWORKFLOW_WORKFLOW,
					name: `${sampleName} ${matchingWorkflows.length + 1}`,
					projectId
				});
				const newRef = workflowToNewToolRef(newWorkflow);
				openConfigForNewRef({
					...newRef,
					name: makeUniqueName(newRef.name ?? newWorkflow.name, getExistingToolNames(workingTools.value))
				});
				const { href } = router.resolve({
					name: VIEWS.WORKFLOW,
					params: {
						workflowId: newWorkflow.id,
						nodeId: SAMPLE_SUBWORKFLOW_TRIGGER_ID
					}
				});
				window.open(href, "_blank");
			} catch (error) {
				toast.showError(error, i18n.baseText("agents.tools.workflow.createFailed.title"), { message: i18n.baseText("agents.tools.workflow.createFailed.message") });
			} finally {
				isCreatingWorkflow.value = false;
			}
		}
		function openConfigForToolEntry(entry) {
			const toolRef = entry.ref;
			openConfigModal({
				toolRef,
				projectId: props.data.projectId,
				agentId: props.data.agentId,
				supportsToolApproval: props.data.supportsToolApproval,
				existingToolNames: getExistingToolNames(workingTools.value, toolRef),
				onConfirm: (updatedRef) => {
					workingToolEntries.value = workingToolEntries.value.map((e) => e.localId === entry.localId ? {
						...e,
						ref: updatedRef
					} : e);
					toolTelemetry.trackEdited(updatedRef);
					commit();
					uiStore.closeModal(props.modalName);
				},
				onRemove: () => {
					workingToolEntries.value = workingToolEntries.value.filter((e) => e.localId !== entry.localId);
					commit();
				}
			});
		}
		function openConfigForMcpEntry(entry) {
			const nodeType = resolveMcpNodeType(entry.server);
			if (!nodeType) return;
			openConfigModal({
				kind: "mcpServer",
				mcpServer: entry.server,
				initialNode: mcpServerToNode(entry.server, nodeType),
				projectId: props.data.projectId,
				agentId: props.data.agentId,
				supportsToolApproval: props.data.supportsToolApproval,
				existingToolNames: getExistingMcpServerNames(workingMcpServers.value, entry.server),
				onConfirm: (updatedServer) => {
					workingMcpServerEntries.value = workingMcpServerEntries.value.map((e) => e.localId === entry.localId ? {
						...e,
						server: updatedServer
					} : e);
					commit();
					uiStore.closeModal(props.modalName);
				},
				onRemove: () => {
					workingMcpServerEntries.value = workingMcpServerEntries.value.filter((e) => e.localId !== entry.localId);
					commit();
				}
			});
		}
		function credentialsFromNode(node) {
			return Object.entries(node.credentials ?? {}).flatMap(([authType, cred]) => cred.id ? [{
				authType,
				credentialId: cred.id
			}] : []);
		}
		function credentialSubtitle(node) {
			const creds = node.credentials ?? {};
			return Object.values(creds)[0]?.name;
		}
		function connectedToolItem(entry) {
			const { localId, ref } = entry;
			if (ref.type === "workflow") {
				const workflowRef = ref;
				return {
					id: `tool:${localId}`,
					kind: "workflow",
					category: "workflows",
					workflowId: workflowRef.workflowId ?? workflowRef.workflow,
					title: workflowRef.name ?? workflowRef.workflow,
					description: workflowRef.description,
					status: "connected",
					credentials: []
				};
			}
			if (ref.type !== "node") return null;
			const node = toolRefToNode(ref);
			if (!node) return null;
			const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
			if (!nodeType) return null;
			return {
				id: `tool:${localId}`,
				kind: "node",
				category: toolCategoryForNodeType(nodeType),
				nodeTypeName: nodeType.name,
				title: node.name,
				description: credentialSubtitle(node) ?? nodeType.description,
				longDescription: nodeType.description,
				status: "connected",
				iconSource: toToolIconSource(nodeType),
				credentials: credentialsFromNode(node),
				verified: isVerifiedCommunityTool(nodeType)
			};
		}
		function connectedMcpItem(entry) {
			const nodeType = resolveMcpNodeType(entry.server);
			if (!nodeType) return null;
			const node = mcpServerToNode(entry.server, nodeType);
			return {
				id: `mcp:${entry.localId}`,
				kind: "node",
				category: "mcp",
				nodeTypeName: nodeType.name,
				title: entry.server.name,
				description: credentialSubtitle(node) ?? nodeType.description,
				longDescription: nodeType.description,
				status: "connected",
				iconSource: toToolIconSource(nodeType),
				credentials: credentialsFromNode(node)
			};
		}
		function availableNodeItem(nodeType) {
			const communityPreview = isCommunityPreviewTool(nodeType);
			return {
				id: `nodeType:${nodeType.name}`,
				kind: "node",
				category: toolCategoryForNodeType(nodeType),
				nodeTypeName: nodeType.name,
				title: nodeType.displayName.replace(/ Tool$/, ""),
				description: nodeType.description,
				longDescription: nodeType.description,
				status: "none",
				iconSource: toToolIconSource(nodeType),
				credentials: [],
				verified: isVerifiedCommunityTool(nodeType),
				communityPreview,
				installing: installingToolName.value === nodeType.name,
				installDisabled: communityPreview && !usersStore.isAdminOrOwner
			};
		}
		function availableWorkflowItem(workflow) {
			return {
				id: `workflow:${workflow.id}`,
				kind: "workflow",
				category: "workflows",
				workflowId: workflow.id,
				title: workflow.name,
				description: workflow.description ?? void 0,
				status: "none",
				credentials: []
			};
		}
		function disabledWorkflowItem(workflow, reason) {
			return {
				id: `workflow-disabled:${workflow.id}`,
				kind: "workflow",
				category: "workflows",
				workflowId: workflow.id,
				title: workflow.name,
				description: workflow.description ?? void 0,
				status: "none",
				credentials: [],
				disabled: true,
				disabledReason: disabledWorkflowReasonText(reason)
			};
		}
		function disabledWorkflowReasonText(reason) {
			if (reason.reason === "incompatible_nodes") return i18n.baseText("agents.tools.workflow.disabled.incompatibleNodes");
			return i18n.baseText("agents.tools.workflow.disabled.noSupportedTrigger");
		}
		/**
		* Canvas parity: unofficial verified community tools are not in the AiTool name
		* index, so they surface only while searching, via the same path NodesMode uses
		* for "More from community".
		*/
		const communitySearchToolTypes = computed(() => {
			if (!searchQuery.value) return [];
			const hits = filterAndSearchNodes(nodeTypesStore.communityNodesAndActions.mergedNodes, searchQuery.value, {
				isAiSubcategory: true,
				aiConnectionType: NodeConnectionTypes.AiTool
			});
			const seen = new Set(availableToolTypes.value.map((nodeType) => nodeType.name));
			const previews = [];
			for (const hit of hits) {
				if (hit.type !== "node") continue;
				const resolved = resolveToolNodeType(hit.key) ?? resolveToolNodeType(hit.properties.name);
				if (!resolved || seen.has(resolved.name) || resolved.hidden || hasInputs(resolved)) continue;
				seen.add(resolved.name);
				previews.push(resolved);
			}
			return previews;
		});
		const items = computed(() => {
			const out = [];
			for (const entry of workingMcpServerEntries.value) {
				const item = connectedMcpItem(entry);
				if (item) out.push(item);
			}
			for (const entry of workingToolEntries.value) {
				const item = connectedToolItem(entry);
				if (item) out.push(item);
			}
			for (const nodeType of availableToolTypes.value) out.push(availableNodeItem(nodeType));
			for (const nodeType of communitySearchToolTypes.value) out.push(availableNodeItem(nodeType));
			for (const workflow of availableWorkflows.value) out.push(availableWorkflowItem(workflow));
			for (const { workflow, reason } of incompatibleWorkflows.value) out.push(disabledWorkflowItem(workflow, reason));
			return out;
		});
		function handleRowActivate(item) {
			if (item.disabled) return;
			if (item.status === "connecting") return;
			if (hasToolConnection(item.status)) {
				if (item.id.startsWith("mcp:")) {
					const localId = item.id.slice(4);
					const entry = workingMcpServerEntries.value.find((e) => e.localId === localId);
					if (entry) openConfigForMcpEntry(entry);
					return;
				}
				if (item.id.startsWith("tool:")) {
					const localId = item.id.slice(5);
					const entry = workingToolEntries.value.find((e) => e.localId === localId);
					if (entry) openConfigForToolEntry(entry);
				}
				return;
			}
			if (item.installDisabled || item.installing) return;
			if (item.kind === "workflow" && item.id.startsWith("workflow:")) {
				const workflowId = item.id.slice(9);
				const workflow = availableWorkflows.value.find((wf) => wf.id === workflowId);
				if (workflow) handleAddWorkflow(workflow);
				return;
			}
			if (item.kind === "node" && item.id.startsWith("nodeType:")) {
				const nodeTypeName = item.id.slice(9);
				const nodeType = [...availableToolTypes.value, ...communitySearchToolTypes.value].find((nt) => nt.name === nodeTypeName);
				if (nodeType) handleAddTool(nodeType);
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ToolsConnectionModal_default, {
				open: isOpen.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isOpen.value = $event),
				items: items.value,
				categories: CATEGORIES,
				"detail-item": null,
				"allow-workflow-creation": canCreateWorkflow.value,
				"workflow-creation-loading": isCreatingWorkflow.value,
				"onUpdate:searchQuery": _cache[1] || (_cache[1] = ($event) => searchQuery.value = $event),
				onConnect: handleRowActivate,
				onOpenDetail: handleRowActivate,
				onCreateWorkflow: handleCreateWorkflow
			}, null, 8, [
				"open",
				"items",
				"allow-workflow-creation",
				"workflow-creation-loading"
			]);
		};
	}
});
//#endregion
export { AgentToolsConnectionModalWrapper_default as default };
