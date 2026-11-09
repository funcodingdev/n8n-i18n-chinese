import { Ld as computed, Qd as init_runtime_core_esm_bundler } from "./vendor-BA8kaY8M.js";
import { bu as useUsageStore } from "./app-DbOOaPK6.js";
//#region src/features/ai/evaluation.ee/composables/useEvaluationsLicense.ts
init_runtime_core_esm_bundler();
var licensePromise = null;
function useEvaluationsLicense() {
	const usageStore = useUsageStore();
	const isLicensed = computed(() => usageStore.workflowsWithEvaluationsLimit !== 0);
	const isResolved = computed(() => usageStore.hasLoadedLicense);
	async function ensureLicenseLoaded() {
		if (!licensePromise) licensePromise = usageStore.getLicenseInfo().catch(() => {
			licensePromise = null;
		});
		await licensePromise;
	}
	return {
		isLicensed,
		isResolved,
		ensureLicenseLoaded
	};
}
//#endregion
export { useEvaluationsLicense as t };
