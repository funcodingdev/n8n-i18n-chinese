import { s as useI18n } from "./src-BSOIQONc.js";
import { t as useUsersStore } from "./users.store-Dg4HfgY2.js";
import { t as useTelemetry } from "./useTelemetry-CgKpOMtU.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-CN2UwSiM.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-DZqDP6LS.js";
import { n as useToast } from "./useToast-UkKTWN-J.js";
import { Wr as AI_GATEWAY_TOP_UP_MODAL_KEY, l as CLOUD_N8N_CONNECT_TOP_UP_PATH } from "./constants-fjCaLPtD.js";
import { n as useUIStore } from "./ui.store-Bnmdd9D-.js";
//#region src/app/composables/useAiGatewayTopUp.ts
function useAiGatewayTopUp() {
	const uiStore = useUIStore();
	const usersStore = useUsersStore();
	const cloudPlanStore = useCloudPlanStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const { goToCloudDashboard } = usePageRedirectionHelper();
	function resolveVariant() {
		if (usersStore.isInstanceOwner && cloudPlanStore.userIsTrialing) return "ownerTrial";
		if (cloudPlanStore.userIsTrialing) return "memberTrial";
		return "member";
	}
	async function openTopUp(options) {
		telemetry.track("User clicked ai gateway top up", {
			source: options.source,
			credential_type: options.credentialType
		});
		if (usersStore.isInstanceOwner && !cloudPlanStore.userIsTrialing) {
			try {
				await goToCloudDashboard({
					redirectionPath: CLOUD_N8N_CONNECT_TOP_UP_PATH,
					mode: "open"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("aiGateway.topUp.modal.cta.openAdminPanelError"));
			}
			return;
		}
		uiStore.openModalWithData({
			name: AI_GATEWAY_TOP_UP_MODAL_KEY,
			data: { variant: resolveVariant() }
		});
	}
	return { openTopUp };
}
//#endregion
export { useAiGatewayTopUp as t };
