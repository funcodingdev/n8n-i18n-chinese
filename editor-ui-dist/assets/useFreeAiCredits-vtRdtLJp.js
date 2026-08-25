import { It as ref, S as computed, Ut as toValue } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-CNBJaijc.js";
import { hn as useProjectsStore, xt as useCredentialsStore } from "./workflows.store-CV9fQhc2.js";
import { Ji as OPEN_AI_API_CREDENTIAL_TYPE } from "./src-JwBmTNgK.js";
import { t as useSettingsStore } from "./settings.store-DtdxCj3f.js";
import { t as useUsersStore } from "./users.store-BWk82WBM.js";
import { t as useTelemetry } from "./useTelemetry-CyENOfVO.js";
import { n as useToast } from "./useToast-D5wqhIPz.js";
//#region src/app/composables/useFreeAiCredits.ts
var showSuccessCallout = ref(false);
function useFreeAiCredits(options = {}) {
	const credentialsStore = useCredentialsStore();
	const projectsStore = useProjectsStore();
	const settingsStore = useSettingsStore();
	const usersStore = useUsersStore();
	const telemetry = useTelemetry();
	const toast = useToast();
	const i18n = useI18n();
	const claimingCredits = ref(false);
	const isAiCreditsEnabled = computed(() => settingsStore.isAiCreditsEnabled);
	const aiCreditsQuota = computed(() => settingsStore.aiCreditsQuota);
	const userHasOpenAiCredentialAlready = computed(() => {
		if (options.hasOpenAiCredential !== void 0) return toValue(options.hasOpenAiCredential);
		return credentialsStore.allCredentials.some((credential) => credential.type === OPEN_AI_API_CREDENTIAL_TYPE);
	});
	const userHasClaimedAiCreditsAlready = computed(() => !!usersStore.currentUser?.settings?.userClaimedAiCredits);
	const userCanClaimOpenAiCredits = computed(() => isAiCreditsEnabled.value && !settingsStore.isAiGatewayEnabled && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value);
	async function claimCreditsAndGetCredential(source, projectId = projectsStore.currentProject?.id) {
		if (!userCanClaimOpenAiCredits.value) return null;
		claimingCredits.value = true;
		try {
			const credential = await credentialsStore.claimFreeAiCredits(projectId);
			if (usersStore?.currentUser?.settings) usersStore.currentUser.settings.userClaimedAiCredits = true;
			showSuccessCallout.value = true;
			telemetry.track("User claimed OpenAI credits", { source });
			return credential;
		} catch (e) {
			toast.showError(e, i18n.baseText("freeAi.credits.showError.claim.title"), { message: i18n.baseText("freeAi.credits.showError.claim.message") });
			return null;
		} finally {
			claimingCredits.value = false;
		}
	}
	async function claimCredits(source) {
		return await claimCreditsAndGetCredential(source) !== null;
	}
	return {
		isAiCreditsEnabled,
		aiCreditsQuota,
		userCanClaimOpenAiCredits,
		claimingCredits,
		showSuccessCallout,
		claimCredits,
		claimCreditsAndGetCredential
	};
}
//#endregion
export { useFreeAiCredits as t };
