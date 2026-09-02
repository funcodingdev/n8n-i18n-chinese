const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pushConnection.store--fbwW_k3.js","assets/pushConnection.store-DMq01WHG.js","assets/src-DAIlllTg.js","assets/chunk-CC9Q-vWm.js","assets/preload-helper-CMc80dNB.js","assets/lib-BC5w3MlX.js","assets/merge-I1kuvuLK.js","assets/isObject-CUkREaNL.js","assets/isSymbol-DAI9oII0.js","assets/expression-runtime-stub-DHA3RX1a.js","assets/__vite-browser-external-CTj19RIp.js","assets/vue.runtime.esm-bundler-DYHsQBZB.js","assets/useRootStore-CvqfnFUt.js","assets/lib-CcMDH-kD.js","assets/assert-BgZvUjbv.js","assets/settings.store-BikmCGla.js","assets/src-95uC3wI4.js","assets/useDebounce-BffpVo23.js","assets/durations-xVQWCRRO.js"])))=>i.map(i=>d[i]);
import { It as ref, S as computed, W as nextTick } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as __vitePreload } from "./preload-helper-CMc80dNB.js";
import { c as useRoute } from "./vue-router-DPnGeMd9.js";
import { Jr as getNodesWithNormalizedPosition, T as createWorkflowDocumentId, k as useWorkflowDocumentStore, n as buildExecutionResponseFromSchema, t as useWorkflowsStore, vn as useProjectsStore, wt as useCredentialsStore, y as useWorkflowExecutionStateStore } from "./workflows.store-QD0eo9S6.js";
import { t as useRootStore } from "./useRootStore-CvqfnFUt.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import "./constants-DxozP3cY.js";
import { _ as useCanvasStore, t as useNodeHelpers } from "./useNodeHelpers-DzvNUJ5Q.js";
import { t as useExternalHooks } from "./useExternalHooks-BlrUXQBD.js";
import { t as useExecutionsStore } from "./executions.store-CfEMaMtQ.js";
import { t as useCanvasOperations } from "./useCanvasOperations-BiLeYOkw.js";
import { t as canvasEventBus } from "./canvas.eventBus-BRuynQ7a.js";
import { t as useNotificationsStore } from "./notifications.store-Chm5Xi_B.js";
import { t as isPostMessageOriginAllowed } from "./postMessageUtils-PNI15PqU.js";
//#region src/app/composables/useWorkflowImport.ts
function useWorkflowImport(currentWorkflowDocumentStore) {
	const route = useRoute();
	const { resetWorkspace, initializeWorkspace, fitView } = useCanvasOperations();
	const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
	async function importWorkflowExact({ workflow: workflowData }) {
		if (!workflowData.nodes || !workflowData.connections) throw new Error("Invalid workflow object");
		resetWorkspace();
		const { workflowDocumentStore } = await initializeWorkspace({
			...workflowData,
			nodes: getNodesWithNormalizedPosition(workflowData.nodes)
		});
		currentWorkflowDocumentStore.value = workflowDocumentStore;
		if (isDemoRoute.value) {
			workflowDocumentStore.setConnections({});
			canvasEventBus.emit("setConnections:onNodesInit", workflowData.connections);
			canvasEventBus.emit("fitView:onNodesInit");
		} else fitView();
	}
	return { importWorkflowExact };
}
//#endregion
//#region src/app/composables/usePostMessageHandler.ts
var canOpenNDV = ref(true);
function usePostMessageControls() {
	return { canOpenNDV };
}
function canOpenNDVFromRouteQuery(queryValue) {
	return queryValue !== "false";
}
function usePostMessageHandler({ currentWorkflowDocumentStore }) {
	const i18n = useI18n();
	const toast = useToast();
	const canvasStore = useCanvasStore();
	const notificationsStore = useNotificationsStore();
	const projectsStore = useProjectsStore();
	const executionsStore = useExecutionsStore();
	const credentialsStore = useCredentialsStore();
	const rootStore = useRootStore();
	const externalHooks = useExternalHooks();
	const telemetry = useTelemetry();
	const nodeHelpers = useNodeHelpers();
	const route = useRoute();
	const workflowsStore = useWorkflowsStore();
	const { resetWorkspace, openExecution, fitView } = useCanvasOperations();
	const { importWorkflowExact } = useWorkflowImport(currentWorkflowDocumentStore);
	function emitPostMessageReady() {
		if (window.parent) window.parent.postMessage(JSON.stringify({
			command: "n8nReady",
			version: rootStore.versionCli,
			pushRef: rootStore.pushRef
		}), "*");
	}
	function reportErrorToParent(message) {
		if (window.top) window.top.postMessage(JSON.stringify({
			command: "error",
			message
		}), "*");
	}
	async function handleOpenWorkflow(json) {
		canOpenNDV.value = canOpenNDVFromRouteQuery(route.query.canOpenNDV) && json.canOpenNDV !== false;
		notificationsStore.setNotificationsSuppressed(json.suppressNotifications === true, { allowErrors: json.allowErrorNotifications === true });
		if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
		if (route.name === VIEWS.DEMO && route.query.canExecute !== "true") json.workflow.id = "demo";
		await importWorkflowExact(json);
		if (window !== window.parent && route.query.canExecute !== "true") {
			const workflowDocumentStore = currentWorkflowDocumentStore.value;
			if (workflowDocumentStore) useWorkflowExecutionStateStore(workflowDocumentStore.documentId).setActiveExecutionId(null);
		}
		if (json.tidyUp === true) canvasEventBus.emit("tidyUp", { source: "import-workflow-data" });
	}
	async function handleOpenExecution(json) {
		if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
		nodeHelpers.isProductionExecutionPreview.value = json.executionMode !== "manual" && json.executionMode !== "evaluation";
		canvasStore.startLoading();
		resetWorkspace();
		const data = await openExecution(json.executionId, json.nodeId);
		if (!data) return;
		await credentialsStore.fetchUsableCredentials({ workflowId: data.workflowData.id });
		const wfId = workflowsStore.workflowId;
		if (wfId) currentWorkflowDocumentStore.value = useWorkflowDocumentStore(createWorkflowDocumentId(wfId));
		nextTick(() => {
			nodeHelpers.updateNodesInputIssues();
			nodeHelpers.updateNodesCredentialsIssues();
		});
		canvasStore.stopLoading();
		fitView();
		canvasEventBus.emit("open:execution", data);
		externalHooks.run("execution.open", {
			workflowId: data.workflowData.id,
			workflowName: data.workflowData.name,
			executionId: json.executionId
		});
		telemetry.track("User opened read-only execution", {
			workflow_id: data.workflowData.id,
			execution_mode: data.mode,
			execution_finished: data.finished
		});
	}
	async function handleOpenExecutionPreview(json) {
		canvasStore.startLoading();
		const workflow = json.workflow;
		if (!workflow?.nodes || !workflow?.connections) {
			canvasStore.stopLoading();
			throw new Error("Invalid workflow object");
		}
		if (window !== window.parent) json.workflow.id = "demo";
		if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
		const data = buildExecutionResponseFromSchema({
			workflow,
			nodeExecutionSchema: json.nodeExecutionSchema,
			executionStatus: json.executionStatus,
			executionError: json.executionError,
			lastNodeExecuted: json.lastNodeExecuted
		});
		await importWorkflowExact(json);
		const workflowDocumentStore = currentWorkflowDocumentStore.value;
		if (workflowDocumentStore) {
			useWorkflowExecutionStateStore(workflowDocumentStore.documentId).setWorkflowExecutionData(data);
			workflowDocumentStore.setPinData({});
		}
		canvasStore.stopLoading();
		canvasEventBus.emit("open:execution", data);
	}
	async function onPostMessageReceived(messageEvent) {
		if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"") || !isPostMessageOriginAllowed(messageEvent.origin)) return;
		try {
			const json = JSON.parse(messageEvent.data);
			if (json && json.command === "openWorkflow") try {
				await handleOpenWorkflow(json);
			} catch (e) {
				reportErrorToParent(i18n.baseText("openWorkflow.workflowImportError"));
				toast.showError(e, i18n.baseText("openWorkflow.workflowImportError"));
			}
			else if (json && json.command === "openExecution") try {
				await handleOpenExecution(json);
			} catch (e) {
				reportErrorToParent(i18n.baseText("nodeView.showError.openExecution.title"));
				toast.showMessage({
					title: i18n.baseText("nodeView.showError.openExecution.title"),
					message: e.message,
					type: "error"
				});
			}
			else if (json && json.command === "openExecutionPreview") try {
				await handleOpenExecutionPreview(json);
			} catch (e) {
				reportErrorToParent(i18n.baseText("nodeView.showError.openExecution.title"));
				toast.showMessage({
					title: i18n.baseText("nodeView.showError.openExecution.title"),
					message: e.message,
					type: "error"
				});
			}
			else if (json?.command === "resetWorkflow") resetWorkspace();
			else if (json?.command === "setActiveExecution") executionsStore.activeExecution = await executionsStore.fetchExecution(json.executionId);
			else if (json?.command === "fitView") canvasEventBus.emit("fitView");
			else if (json?.command === "executionEvent") {
				const { usePushConnectionStore } = await __vitePreload(async () => {
					const { usePushConnectionStore } = await import("./pushConnection.store--fbwW_k3.js");
					return { usePushConnectionStore };
				}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]));
				const pushStore = usePushConnectionStore();
				for (const handler of pushStore.onMessageReceivedHandlers) handler(json.event);
			}
		} catch {}
	}
	function setup() {
		canOpenNDV.value = canOpenNDVFromRouteQuery(route.query.canOpenNDV);
		window.addEventListener("message", onPostMessageReceived);
		emitPostMessageReady();
	}
	function cleanup() {
		window.removeEventListener("message", onPostMessageReceived);
		canOpenNDV.value = true;
	}
	return {
		setup,
		cleanup
	};
}
//#endregion
export { usePostMessageHandler as n, usePostMessageControls as t };
