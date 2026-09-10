import { It as ref, S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { fr as defineStore, lr as STORES } from "./useRootStore-B4L7-X8D.js";
import { t as useUsersStore } from "./users.store-Cu8bVoPw.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as usePostHog } from "./posthog.store-n2tlavls.js";
import { Ga as OPEN_WORKFLOW_IN_ASSISTANT_EXPERIMENT } from "./constants-DOw6b_w2.js";
import { a as TELEMETRY_EVENT } from "./src-BfDzHX9f.js";
import { n as useUIStore } from "./ui.store-BJFbRV2F.js";
import { n as getExperimentTelemetryPayload } from "./utils-Cci2L2Sa.js";
import { t as useInstanceAiAvailable } from "./useInstanceAiAvailability-DhJiYikT.js";
import { n as useInstanceAiStore } from "./instanceAi.store-D9ClL9I0.js";
//#region src/experiments/openWorkflowInAssistant/stores/openWorkflowInAssistant.store.ts
var OPEN_IN_ASSISTANT_CALLOUT_KEY = "open-workflows-in-assistant";
var OPEN_IN_ASSISTANT_OPT_OUT_KEY = "open-workflows-in-assistant-opt-out";
var useOpenWorkflowInAssistantStore = defineStore(STORES.EXPERIMENT_OPEN_WORKFLOW_IN_ASSISTANT, () => {
	const posthogStore = usePostHog();
	const usersStore = useUsersStore();
	const uiStore = useUIStore();
	const telemetry = useTelemetry();
	const instanceAiAvailable = useInstanceAiAvailable();
	const currentVariant = computed(() => posthogStore.getVariant(OPEN_WORKFLOW_IN_ASSISTANT_EXPERIMENT.name));
	const isTreatment = computed(() => posthogStore.isVariantEnabled(OPEN_WORKFLOW_IN_ASSISTANT_EXPERIMENT.name, OPEN_WORKFLOW_IN_ASSISTANT_EXPERIMENT.variant));
	const optedOut = computed(() => usersStore.isCalloutDismissed(OPEN_IN_ASSISTANT_OPT_OUT_KEY));
	const resolvedDefaultEditor = computed(() => optedOut.value ? "manual" : "assistant");
	const opensInAssistant = computed(() => isTreatment.value && instanceAiAvailable.value && !optedOut.value);
	const showsOptedOutCardButton = computed(() => isTreatment.value && instanceAiAvailable.value && optedOut.value);
	function experimentPayload(payload) {
		return getExperimentTelemetryPayload(OPEN_WORKFLOW_IN_ASSISTANT_EXPERIMENT, currentVariant.value === OPEN_WORKFLOW_IN_ASSISTANT_EXPERIMENT.variant ? OPEN_WORKFLOW_IN_ASSISTANT_EXPERIMENT.variant : OPEN_WORKFLOW_IN_ASSISTANT_EXPERIMENT.control, payload);
	}
	const notificationThreadId = ref(null);
	function isNotificationVisibleFor(threadId) {
		return notificationThreadId.value === threadId;
	}
	/**
	* Called by the thread view right after it consumes and sends a stashed
	* first message. That one-shot consumption is the only reliable "fresh
	* redirect landing" signal — the thread's metadata source persists
	* forever and would re-fire on every revisit of an old thread.
	*/
	function handleRedirectLanding(threadId) {
		if (!isTreatment.value) return;
		const metadata = useInstanceAiStore().getThreadMetadata(threadId);
		if (metadata?.source !== "workflow_list_auto") return;
		uiStore.sidebarMenuCollapsed = true;
		if (usersStore.isCalloutDismissed("open-workflows-in-assistant")) return;
		const context = metadata.sourceContext;
		const workflowId = context !== null && typeof context === "object" && "workflowId" in context && typeof context.workflowId === "string" ? context.workflowId : null;
		notificationThreadId.value = threadId;
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.OPEN_BY_DEFAULT_NOTIFICATION_SHOWN, experimentPayload({ workflow_id: workflowId }));
	}
	function closeNotification(method) {
		notificationThreadId.value = null;
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.OPEN_BY_DEFAULT_NOTIFICATION_ACTION, experimentPayload({ method }));
	}
	async function neverShowAgain() {
		notificationThreadId.value = null;
		usersStore.setCalloutDismissed(OPEN_IN_ASSISTANT_CALLOUT_KEY);
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.OPEN_BY_DEFAULT_NOTIFICATION_ACTION, experimentPayload({ method: "never_show_again" }));
		await usersStore.updateUserSettings({ dismissedCallouts: {
			...usersStore.currentUser?.settings?.dismissedCallouts,
			[OPEN_IN_ASSISTANT_CALLOUT_KEY]: true
		} });
	}
	const settingHighlightRequested = ref(false);
	function requestSettingHighlight() {
		settingHighlightRequested.value = true;
	}
	function consumeSettingHighlight() {
		const requested = settingHighlightRequested.value;
		settingHighlightRequested.value = false;
		return requested;
	}
	async function saveDefaultEditor(value) {
		await usersStore.updateUserSettings({ dismissedCallouts: {
			...usersStore.currentUser?.settings?.dismissedCallouts,
			[OPEN_IN_ASSISTANT_OPT_OUT_KEY]: value === "manual"
		} });
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.DEFAULT_EDITOR_PREFERENCE_CHANGED, experimentPayload({ value }));
	}
	function trackManualEditorOpened(workflowId, threadId) {
		telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MANUAL_EDITOR_OPENED, experimentPayload({
			workflow_id: workflowId,
			thread_id: threadId
		}));
	}
	return {
		isTreatment,
		resolvedDefaultEditor,
		opensInAssistant,
		showsOptedOutCardButton,
		isNotificationVisibleFor,
		handleRedirectLanding,
		closeNotification,
		neverShowAgain,
		requestSettingHighlight,
		consumeSettingHighlight,
		saveDefaultEditor,
		trackManualEditorOpened
	};
});
//#endregion
export { useOpenWorkflowInAssistantStore as t };
