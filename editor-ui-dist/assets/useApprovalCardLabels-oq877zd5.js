import { $d as init_runtime_core_esm_bundler, Rd as computed } from "./vendor-AGzaQJYe.js";
import { GO as useI18n } from "./app-DGoK9ugD.js";
//#region src/app/composables/useApprovalCardLabels.ts
init_runtime_core_esm_bundler();
function useApprovalCardLabels() {
	const i18n = useI18n();
	return computed(() => ({
		alwaysAllow: i18n.baseText("instanceAi.confirmation.alwaysAllow"),
		alwaysAllowSuffix: i18n.baseText("instanceAi.confirmation.alwaysAllowSuffix"),
		allowOnce: i18n.baseText("instanceAi.confirmation.approve"),
		deny: i18n.baseText("instanceAi.confirmation.deny"),
		allowed: i18n.baseText("instanceAi.confirmation.approved"),
		denied: i18n.baseText("instanceAi.confirmation.denied"),
		args: i18n.baseText("instanceAi.toolCall.input")
	}));
}
//#endregion
export { useApprovalCardLabels as t };
