import { $_ as TELEMETRY_EVENT, Qb as useTelemetry, U as MCP_JSON_NUDGE_MODAL_KEY, q_ as usePostHog, s_ as useUIStore, xb as MCP_JSON_NUDGE_EXPERIMENT } from "./app-DGoK9ugD.js";
import { t as useMcpJsonNudgeEligibility } from "./useMcpJsonNudgeEligibility-G00ExNoT.js";
//#region src/experiments/mcpJsonNudge/composables/useMcpJsonNudgeTrigger.ts
function useMcpJsonNudgeTrigger() {
	const uiStore = useUIStore();
	const eligibility = useMcpJsonNudgeEligibility();
	const telemetry = useTelemetry();
	const posthogStore = usePostHog();
	/**
	* Runs `action` (the export or import) behind the nudge. When the nudge is
	* eligible, the modal opens and the action is deferred to its `onContinue`
	* (Skip / dismiss); Connect abandons it. Otherwise the action runs right away.
	*/
	async function gate(surface, action) {
		if (uiStore.isModalActiveById["mcpJsonNudgeModal"]) {
			await action();
			return;
		}
		if (eligibility.isEligibleApartFromExperiment()) posthogStore.trackExposure(MCP_JSON_NUDGE_EXPERIMENT.name);
		if (!eligibility.canShow()) {
			await action();
			return;
		}
		uiStore.openModalWithData({
			name: MCP_JSON_NUDGE_MODAL_KEY,
			data: {
				surface,
				onContinue: action
			}
		});
		telemetry.track(TELEMETRY_EVENT.MCP.MCP_NUDGE_VIEWED, { surface });
		eligibility.recordImpression();
	}
	return { gate };
}
//#endregion
export { useMcpJsonNudgeTrigger as t };
