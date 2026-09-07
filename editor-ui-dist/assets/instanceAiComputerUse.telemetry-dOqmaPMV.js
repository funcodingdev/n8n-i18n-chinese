import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { a as TELEMETRY_EVENT } from "./src-CRk-YGAD.js";
//#region src/features/ai/instanceAi/instanceAiComputerUse.telemetry.ts
function useInstanceAiComputerUseTelemetry() {
	const telemetry = useTelemetry();
	return {
		trackModalOpened(isConnected, source) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.COMPUTER_USE_MODAL_OPENED, {
				is_connected: isConnected,
				source
			});
		},
		trackCommandCopied(os) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.COMPUTER_USE_CONNECTION_COMMAND_COPIED, { os });
		}
	};
}
//#endregion
export { useInstanceAiComputerUseTelemetry as t };
