import { s as useI18n } from "./src-CNBJaijc.js";
import { t as useBuilderStore } from "./builder.store-eNgOSeel.js";
import { t as useMessage } from "./useMessage-B2KuXuge.js";
import { t as useSettingsStore } from "./settings.store-DtdxCj3f.js";
import { t as useUsersStore } from "./users.store-BWk82WBM.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-D7xkxr_P.js";
import "./constants-BP1FOJvU.js";
import { t as useVersionsStore } from "./versions.store-BKNPgGFT.js";
//#region ../@n8n/frontend-constants/src/urls.ts
/** Public n8n pricing page — the upgrade destination for non-cloud deployments. */
var N8N_PRICING_PAGE_URL = "https://n8n.io/pricing";
//#endregion
//#region ../@n8n/stores/src/composables/useBasePageRedirectionHelper.ts
/**
* Injectable page-redirection composable. The app-facing `usePageRedirectionHelper`
* wraps this and supplies the guard, which keeps this base free of any feature
* dependency.
*
* It lives in `@n8n/stores` rather than `@n8n/composables` because its body is
* store orchestration end to end — all four stores it reads are in this package,
* and `@n8n/composables` sits *below* the stores tier (see that package's
* `packageBoundary.test.ts`), so it cannot reach them.
*/
function useBasePageRedirectionHelper({ guard }) {
	const usersStore = useUsersStore();
	const cloudPlanStore = useCloudPlanStore();
	const versionsStore = useVersionsStore();
	const telemetry = useTelemetry();
	const settingsStore = useSettingsStore();
	/**
	* If the user is an instance owner in the cloud, it generates an auto-login link to the
	* cloud dashboard that redirects the user to the /manage page where they can upgrade to a new n8n version.
	* Otherwise, it redirect them to our docs.
	*/
	const goToVersions = async () => {
		if (usersStore.isInstanceOwner && settingsStore.isCloudDeployment) {
			location.href = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath: "/manage" });
			return;
		}
		window.open(versionsStore.infoUrl, "_blank", "noopener");
	};
	const goToDashboard = async () => {
		if (usersStore.isInstanceOwner && settingsStore.isCloudDeployment) {
			const dashboardLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath: "/dashboard" });
			location.href = dashboardLink;
		}
	};
	/**
	* If the user is an instance owner in the cloud, it generates an auto-login link to the
	* cloud dashboard that redirects the user to the /account/change-plan page where they upgrade/downgrade the current plan.
	* Otherwise, it redirect them our website.
	*/
	const goToUpgrade = async (source, utm_campaign, mode = "open") => {
		if (!await guard()) return;
		const { usageLeft, trialDaysLeft, userIsTrialing } = cloudPlanStore;
		const { executionsLeft, workflowsLeft } = usageLeft;
		const deploymentType = settingsStore.deploymentType;
		telemetry.track("User clicked upgrade CTA", {
			source,
			isTrial: userIsTrialing,
			deploymentType,
			trialDaysLeft,
			executionsLeft,
			workflowsLeft
		});
		const upgradeLink = await generateUpgradeLink(source, utm_campaign);
		if (mode === "open") window.open(upgradeLink, "_blank");
		else location.href = upgradeLink;
	};
	const generateUpgradeLink = async (source, utm_campaign) => {
		let upgradeLink = N8N_PRICING_PAGE_URL;
		if (usersStore.isInstanceOwner && settingsStore.isCloudDeployment) upgradeLink = await cloudPlanStore.generateCloudDashboardAutoLoginLink({ redirectionPath: "/account/change-plan" });
		const url = new URL(upgradeLink);
		if (utm_campaign) url.searchParams.set("utm_campaign", utm_campaign);
		if (source) url.searchParams.set("source", source);
		return url.toString();
	};
	return {
		goToDashboard,
		goToVersions,
		goToUpgrade
	};
}
//#endregion
//#region src/features/ai/assistant/composables/useBuilderStreamingGuard.ts
/**
* Shows a confirmation dialog if the AI builder is currently streaming.
* Returns `true` if the caller should proceed (not streaming, or user confirmed).
* Returns `false` if the user cancelled and the caller should abort.
*
* When the user confirms, streaming is aborted before returning.
*/
async function confirmIfBuilderStreaming() {
	const builderStore = useBuilderStore();
	if (!builderStore.streaming) return true;
	const { confirm } = useMessage();
	const i18n = useI18n();
	if (await confirm(i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.message"), {
		title: i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.title"),
		type: "warning",
		confirmButtonText: i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.confirmButtonText"),
		cancelButtonText: i18n.baseText("aiAssistant.builder.upgradeWhileStreaming.cancelButtonText"),
		showClose: true
	}) !== "confirm") return false;
	builderStore.abortStreaming();
	return true;
}
//#endregion
//#region src/app/composables/usePageRedirectionHelper.ts
/**
* App-facing `usePageRedirectionHelper`, pre-bound with the AI builder streaming
* guard so every upgrade CTA confirms before discarding an in-flight build.
*
* This wrapper is permanent, not a migration shim: the guard lives in the feature
* layer, and `@n8n/stores` — where the base composable now lives — must not reach
* into `features/ai/assistant`. Binding it here is what keeps that boundary clean.
*/
function usePageRedirectionHelper() {
	return useBasePageRedirectionHelper({ guard: confirmIfBuilderStreaming });
}
//#endregion
export { usePageRedirectionHelper as t };
