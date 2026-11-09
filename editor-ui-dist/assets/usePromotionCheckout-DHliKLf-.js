import { Af as init_reactivity_esm_bundler, If as reactive, Ld as computed, Qd as init_runtime_core_esm_bundler } from "./vendor-BA8kaY8M.js";
import { Jy as useUsersStore, Xy as useRootStore, qs as getErrorMessage, zx as getResourcePermissions } from "./app-DbOOaPK6.js";
import { a as connectPromotionCheckout } from "./useInstancePromotionConnection-D03GmHF-.js";
//#region src/features/integrations/promotions.ee/composables/usePromotionCheckout.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/** The API does not store connect errors, so they live until the page reloads. */
var connectErrors = reactive(/* @__PURE__ */ new Map());
function usePromotionCheckout() {
	const rootStore = useRootStore();
	const usersStore = useUsersStore();
	const permissions = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).gitConnection);
	const canClone = computed(() => !!permissions.value.clone);
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
		canClone,
		connect
	};
}
//#endregion
export { usePromotionCheckout as t };
