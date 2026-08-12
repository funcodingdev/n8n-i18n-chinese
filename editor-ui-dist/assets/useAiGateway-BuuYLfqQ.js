import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { _ as useRouter } from "./htmlUtils-BeB2si0b.js";
import { vt as useAiGatewayStore } from "./workflows.store-0pNLCdEH.js";
import { t as useSettingsStore } from "./settings.store-D3X9CFvx.js";
import "./settings.store--Wug2Dl9.js";
import { r as useWorkflowSaving } from "./builder.store-Be-4a2eM.js";
//#region src/app/composables/useAiGateway.ts
function useAiGateway() {
	const settingsStore = useSettingsStore();
	const { saveCurrentWorkflow } = useWorkflowSaving({ router: useRouter() });
	const aiGatewayStore = useAiGatewayStore();
	const balance = computed(() => aiGatewayStore.balance);
	const budget = computed(() => aiGatewayStore.budget);
	const fetchError = computed(() => aiGatewayStore.fetchError);
	const isEnabled = computed(() => settingsStore.isAiGatewayEnabled);
	async function fetchWallet() {
		if (!isEnabled.value) return;
		await aiGatewayStore.fetchWallet();
	}
	const isCredentialTypeSupported = (credentialType) => aiGatewayStore.isCredentialTypeSupported(credentialType);
	const canServeCredentialType = (credentialType) => aiGatewayStore.canServeCredentialType(credentialType);
	const isActionSupported = (nodeName, resource, operation) => aiGatewayStore.isActionSupported(nodeName, resource, operation);
	const isNodeTypeVersionSupported = (nodeName, typeVersion) => aiGatewayStore.isNodeTypeVersionSupported(nodeName, typeVersion);
	const isActionOptionVisible = (node, parameterName, optionValue) => aiGatewayStore.isActionOptionVisible(node, parameterName, optionValue);
	const isNodePropertyHidden = (node, propertyName) => aiGatewayStore.isNodePropertyHidden(node, propertyName);
	async function fetchConfig() {
		if (!isEnabled.value) return;
		await aiGatewayStore.fetchConfig();
	}
	async function saveAfterToggle() {
		await saveCurrentWorkflow({}, false, false, true);
	}
	return {
		isEnabled,
		balance,
		budget,
		fetchError,
		fetchConfig,
		fetchWallet,
		isCredentialTypeSupported,
		canServeCredentialType,
		isActionSupported,
		isActionOptionVisible,
		isNodeTypeVersionSupported,
		isNodePropertyHidden,
		saveAfterToggle
	};
}
//#endregion
export { useAiGateway as t };
