import { Gg as usePostHog, Jy as useUsersStore, Z as MCP_JSON_NUDGE_CALLOUT, _a as useMCPStore, gy as MCP_JSON_NUDGE_EXPERIMENT } from "./app-DbOOaPK6.js";
//#region src/experiments/mcpJsonNudge/composables/useMcpJsonNudgeEligibility.ts
var IMPRESSION_CAP = 2;
function useMcpJsonNudgeEligibility() {
	const mcpStore = useMCPStore();
	const posthogStore = usePostHog();
	const usersStore = useUsersStore();
	/**
	* Every condition except the experiment arm: this user would see the nudge if
	* they were in the enabled arm, which makes them part of the experiment's
	* exposed population, control included. Deliberately does not read the flag,
	* because the trigger reports exposure off this and exposure must not depend
	* on which arm the user landed in.
	*/
	function isEligibleApartFromExperiment() {
		const impressions = usersStore.currentUser?.settings?.mcpJsonNudge?.impressions ?? 0;
		return !mcpStore.mcpAccessEnabled && impressions < IMPRESSION_CAP && !usersStore.isCalloutDismissed("MCP_JSON_NUDGE");
	}
	function canShow() {
		return isEligibleApartFromExperiment() && posthogStore.isVariantEnabled(MCP_JSON_NUDGE_EXPERIMENT.name, MCP_JSON_NUDGE_EXPERIMENT.variant);
	}
	async function recordImpression() {
		const impressions = (usersStore.currentUser?.settings?.mcpJsonNudge?.impressions ?? 0) + 1;
		if (usersStore.currentUser?.settings) usersStore.currentUser.settings.mcpJsonNudge = { impressions };
		await usersStore.updateUserSettings({ mcpJsonNudge: { impressions } });
	}
	async function dismissForever() {
		usersStore.setCalloutDismissed(MCP_JSON_NUDGE_CALLOUT);
		await usersStore.updateUserSettings({ dismissedCallouts: {
			...usersStore.currentUser?.settings?.dismissedCallouts,
			[MCP_JSON_NUDGE_CALLOUT]: true
		} });
	}
	return {
		canShow,
		isEligibleApartFromExperiment,
		recordImpression,
		dismissForever
	};
}
//#endregion
export { useMcpJsonNudgeEligibility as t };
