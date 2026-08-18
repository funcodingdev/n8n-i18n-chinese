import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-BvbMD63z.js";
import { R as useNodeTypesStore, ct as SampleTemplates, dt as getTutorialTemplates, ft as isTutorialTemplateId, lt as getRagStarterWorkflowJson, mn as useProjectsStore, t as useWorkflowsStore, ut as getSampleWorkflowByTemplateId } from "./workflows.store-By74034z.js";
import { T as updateCurrentUserSettings, t as useRootStore } from "./useRootStore-D6sIVZY4.js";
import { t as useUsersStore } from "./users.store-DVFfe_nY.js";
import { t as useTelemetry } from "./useTelemetry-CZKoOy4G.js";
import { t as VIEWS } from "./views-Cm6YRZ1u.js";
import "./constants-CV_3h7tS.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-DYug6ITG.js";
//#region src/app/composables/useCalloutHelpers.ts
function useCalloutHelpers() {
	const route = useRoute();
	const router = useRouter();
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const usersStore = useUsersStore();
	const nodeTypesStore = useNodeTypesStore();
	const projectsStore = useProjectsStore();
	const isRagStarterCalloutVisible = computed(() => {
		const template = getRagStarterWorkflowJson();
		const routeTemplateId = route.query.templateId;
		const workflow = workflowsListStore.getWorkflowById(workflowsStore.workflowId);
		if ((routeTemplateId ?? workflow?.meta?.templateId) === template.meta.templateId) return false;
		return true;
	});
	const getTutorialTemplatesNodeCreatorItems = () => {
		return getTutorialTemplates().map((template) => {
			return {
				key: template.template.meta.templateId,
				type: "openTemplate",
				properties: {
					templateId: template.template.meta.templateId,
					title: template.name,
					description: template.description,
					nodes: template.nodes.flatMap((node) => {
						const nodeType = nodeTypesStore.getNodeType(node.name, node.version);
						if (!nodeType) return [];
						return nodeType;
					})
				}
			};
		});
	};
	const openSampleWorkflowTemplate = (templateId, options) => {
		if (templateId === SampleTemplates.RagStarterTemplate) telemetry.track("User clicked on RAG callout", { node_type: options.telemetry.nodeType ?? null });
		else if (isTutorialTemplateId(templateId)) telemetry.track("User inserted tutorial template", {
			template: templateId,
			source: options.telemetry.source,
			node_type: options.telemetry.nodeType ?? null,
			section: options.telemetry.section ?? null
		});
		const template = getSampleWorkflowByTemplateId(templateId);
		if (!template) return;
		const { href } = router.resolve({
			name: VIEWS.TEMPLATE_IMPORT,
			params: { id: template.meta.templateId },
			query: {
				fromJson: "true",
				parentFolderId: route.params.folderId,
				projectId: projectsStore.currentProjectId
			}
		});
		window.open(href, "_blank");
	};
	const isCalloutDismissed = (callout) => {
		return usersStore.isCalloutDismissed(callout);
	};
	const dismissCallout = async (callout) => {
		usersStore.setCalloutDismissed(callout);
		await updateCurrentUserSettings(rootStore.restApiContext, { dismissedCallouts: {
			...usersStore.currentUser?.settings?.dismissedCallouts,
			[callout]: true
		} });
	};
	return {
		openSampleWorkflowTemplate,
		getTutorialTemplatesNodeCreatorItems,
		isRagStarterCalloutVisible,
		isCalloutDismissed,
		dismissCallout
	};
}
//#endregion
export { useCalloutHelpers as t };
