import { $d as init_runtime_core_esm_bundler, Lf as reactive, Rd as computed, jf as init_reactivity_esm_bundler } from "./vendor-AGzaQJYe.js";
import { Kc as getErrorMessage, ZS as getResourcePermissions, ex as useUsersStore, nx as useRootStore } from "./app-DGoK9ugD.js";
import { a as connectPromotionCheckout } from "./useInstancePromotionConnection-BK6nkefC.js";
//#region src/features/integrations/promotions.ee/composables/usePromotionCheckout.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/** The API does not store connect errors, so they live until the page reloads. */
var connectErrors = reactive(/* @__PURE__ */ new Map());
function usePromotionCheckout() {
	const rootStore = useRootStore();
	const usersStore = useUsersStore();
	const permissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).promotions);
	const canConnect = computed(() => !!permissions.value.connect);
	async function connect(environmentId) {
		try {
			await connectPromotionCheckout(rootStore.publicApiContext, environmentId);
			connectErrors.delete(environmentId);
			return true;
		} catch (error) {
			connectErrors.set(environmentId, getErrorMessage(error));
			return false;
		}
	}
	return {
		connectErrors,
		permissions,
		canConnect,
		connect
	};
}
//#endregion
export { usePromotionCheckout as t };
