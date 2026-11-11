import { $d as init_runtime_core_esm_bundler, Rd as computed, jf as init_reactivity_esm_bundler, zf as ref } from "./vendor-AGzaQJYe.js";
import { Dx as ResponseError, kx as makePublicApiRequest, rx as useRootStore } from "./app-MbtXRI_F.js";
//#region src/features/integrations/promotions.ee/promotionsSettings.api.ts
var promotionsApiRoot = "/promotions";
var fetchPromotionRepositories = async (context, providerId, query = {}) => await makePublicApiRequest(context, "GET", `${promotionsApiRoot}/providers/${encodeURIComponent(providerId)}/repositories`, query);
var fetchPromotionBranches = async (context, providerId, repositoryId, query = {}) => await makePublicApiRequest(context, "GET", `${promotionsApiRoot}/providers/${encodeURIComponent(providerId)}/repositories/${encodeURIComponent(repositoryId)}/branches`, query);
async function fetchAllPages(fetchPage) {
	const items = [];
	let cursor;
	do {
		const page = await fetchPage(cursor);
		items.push(...page.data);
		cursor = page.nextCursor ?? void 0;
	} while (cursor);
	return items;
}
var fetchPromotionProvider = async (context, id) => await makePublicApiRequest(context, "GET", `${promotionsApiRoot}/providers/${id}`);
var createPromotionProvider = async (context, payload) => await makePublicApiRequest(context, "POST", `${promotionsApiRoot}/providers`, payload);
var updatePromotionProvider = async (context, id, payload) => await makePublicApiRequest(context, "PUT", `${promotionsApiRoot}/providers/${id}`, payload);
var deletePromotionProvider = async (context, id) => {
	await makePublicApiRequest(context, "DELETE", `${promotionsApiRoot}/providers/${id}`);
};
/** The API refuses to delete a provider that an environment still uses, in any scope. */
var deleteProviderIfUnused = async (context, id) => {
	try {
		await deletePromotionProvider(context, id);
	} catch (error) {
		if (error instanceof ResponseError && (error.httpStatusCode === 404 || error.httpStatusCode === 409)) return;
		throw error;
	}
};
var fetchPromotionEnvironments = async (context, filter = {}) => await fetchAllPages(async (cursor) => await makePublicApiRequest(context, "GET", `${promotionsApiRoot}/environments`, {
	...filter,
	cursor
}));
/** Fetches live checkout state with the stored environment fields. */
var fetchPromotionEnvironment = async (context, id) => await makePublicApiRequest(context, "GET", `${promotionsApiRoot}/environments/${encodeURIComponent(id)}`);
/** Projects in the Apply package whose IDs do not exist on this instance. */
var fetchMissingPromotionProjects = async (context, environmentId) => await makePublicApiRequest(context, "GET", `${promotionsApiRoot}/environments/${encodeURIComponent(environmentId)}/missing-projects`);
var createPromotionEnvironment = async (context, payload) => await makePublicApiRequest(context, "POST", `${promotionsApiRoot}/environments`, payload);
var updatePromotionEnvironment = async (context, id, payload) => await makePublicApiRequest(context, "PUT", `${promotionsApiRoot}/environments/${id}`, payload);
var deletePromotionEnvironment = async (context, id) => {
	await makePublicApiRequest(context, "DELETE", `${promotionsApiRoot}/environments/${id}`);
};
/** Connects the environment on the instance. For Git, this clones its branch. Safe to repeat. */
var connectPromotionCheckout = async (context, environmentId) => await makePublicApiRequest(context, "POST", `${promotionsApiRoot}/environments/${environmentId}/connect`);
/** Promotes the whole instance through its instance Promote environment. */
var promotePackage = async (context, environmentId, payload) => await makePublicApiRequest(context, "POST", `${promotionsApiRoot}/environments/${environmentId}/promote`, payload);
var applyPromotion = async (context, environmentId, payload) => await makePublicApiRequest(context, "POST", `${promotionsApiRoot}/environments/${environmentId}/apply`, payload);
/** Resumes an apply that paused on unresolved bindings, once they are created. */
var continueApplyPromotion = async (context, environmentId, payload) => await makePublicApiRequest(context, "POST", `${promotionsApiRoot}/environments/${environmentId}/apply/continue`, payload);
/** Applies only the chosen workflows into the destination project. */
var applyProjectSelection = async (context, projectId, payload) => await makePublicApiRequest(context, "POST", `${promotionsApiRoot}/projects/${projectId}/apply`, payload);
/** Resumes a selective apply that paused on unresolved bindings, once they are created. */
var continueApplyProjectSelection = async (context, projectId, payload) => await makePublicApiRequest(context, "POST", `${promotionsApiRoot}/projects/${projectId}/apply/continue`, payload);
//#endregion
//#region src/features/integrations/promotions.ee/composables/useInstancePromotionConnection.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var instanceEnvironments;
function invalidateInstancePromotionConnection() {
	instanceEnvironments = void 0;
}
/** The instance environments and their directions, so callers only ask for those. */
function useInstancePromotionConnection() {
	const rootStore = useRootStore();
	const environments = ref([]);
	/** True when the last lookup failed, so a caller can tell it apart from "no environment". */
	const failed = ref(false);
	async function load() {
		instanceEnvironments ??= fetchPromotionEnvironments(rootStore.publicApiContext, { scope: "instance" }).then((found) => ({
			environments: found,
			failed: false
		})).catch(() => {
			invalidateInstancePromotionConnection();
			return {
				environments: [],
				failed: true
			};
		});
		const lookup = await instanceEnvironments;
		environments.value = lookup.environments;
		failed.value = lookup.failed;
	}
	return {
		environments,
		failed,
		hasPromoteConfig: computed(() => environments.value.some(({ direction }) => direction === "promote")),
		hasApplyConfig: computed(() => environments.value.some(({ direction }) => direction === "apply")),
		load
	};
}
//#endregion
export { fetchPromotionRepositories as _, connectPromotionCheckout as a, updatePromotionProvider as b, createPromotionEnvironment as c, deleteProviderIfUnused as d, fetchMissingPromotionProjects as f, fetchPromotionProvider as g, fetchPromotionEnvironments as h, applyPromotion as i, createPromotionProvider as l, fetchPromotionEnvironment as m, useInstancePromotionConnection as n, continueApplyProjectSelection as o, fetchPromotionBranches as p, applyProjectSelection as r, continueApplyPromotion as s, invalidateInstancePromotionConnection as t, deletePromotionEnvironment as u, promotePackage as v, updatePromotionEnvironment as y };
