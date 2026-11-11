import { $d as init_runtime_core_esm_bundler, Rd as computed } from "./vendor-AGzaQJYe.js";
import { fd as useUsageStore } from "./app-MbtXRI_F.js";
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
