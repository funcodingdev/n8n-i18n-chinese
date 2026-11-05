import { Af as init_reactivity_esm_bundler, Ld as computed, Qd as init_runtime_core_esm_bundler, Rf as ref } from "./vendor-BA8kaY8M.js";
import { Xy as useRootStore, xb as request, yb as ResponseError } from "./app-CfhiRDif.js";
//#region src/features/integrations/promotions.ee/promotionsSettings.api.ts
var promotionsApiRoot = "/promotions";
var fetchPromotionRepositories = async (context, providerId, query = {}) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers/${encodeURIComponent(providerId)}/repositories`,
	data: query
});
var fetchPromotionBranches = async (context, providerId, repositoryId, query = {}) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers/${encodeURIComponent(providerId)}/repositories/${encodeURIComponent(repositoryId)}/branches`,
	data: query
});
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
var fetchPromotionProvider = async (context, id) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers/${id}`
});
var createPromotionProvider = async (context, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers`,
	data: payload
});
var updatePromotionProvider = async (context, id, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/providers/${id}`,
	data: payload
});
var deletePromotionProvider = async (context, id) => {
	await request({
		method: "DELETE",
		baseURL: context.baseUrl,
		endpoint: `${promotionsApiRoot}/providers/${id}`
	});
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
var fetchPromotionEnvironments = async (context, filter = {}) => await fetchAllPages(async (cursor) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/environments`,
	data: {
		...filter,
		cursor
	}
}));
/** Fetches live checkout state with the stored environment fields. */
var fetchPromotionEnvironment = async (context, id) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/environments/${encodeURIComponent(id)}`
});
var createPromotionEnvironment = async (context, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/environments`,
	data: payload
});
var updatePromotionEnvironment = async (context, id, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/environments/${id}`,
	data: payload
});
var deletePromotionEnvironment = async (context, id) => {
	await request({
		method: "DELETE",
		baseURL: context.baseUrl,
		endpoint: `${promotionsApiRoot}/environments/${id}`
	});
};
/** Connects the environment on the instance. For Git, this clones its branch. Safe to repeat. */
var connectPromotionCheckout = async (context, environmentId) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/environments/${environmentId}/connect`
});
/** Promotes the whole instance through its instance Promote environment. */
var promotePackage = async (context, environmentId, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/environments/${environmentId}/promote`,
	data: payload
});
var applyPromotion = async (context, environmentId, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/environments/${environmentId}/apply`,
	data: payload
});
/** Resumes an apply that paused on unresolved bindings, once they are created. */
var continueApplyPromotion = async (context, environmentId, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/environments/${environmentId}/apply/continue`,
	data: payload
});
/** Applies only the chosen workflows into the destination project. */
var applyProjectSelection = async (context, projectId, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/projects/${projectId}/apply`,
	data: payload
});
/** Resumes a selective apply that paused on unresolved bindings, once they are created. */
var continueApplyProjectSelection = async (context, projectId, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: `${promotionsApiRoot}/projects/${projectId}/apply/continue`,
	data: payload
});
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
export { promotePackage as _, connectPromotionCheckout as a, createPromotionEnvironment as c, deleteProviderIfUnused as d, fetchPromotionBranches as f, fetchPromotionRepositories as g, fetchPromotionProvider as h, applyPromotion as i, createPromotionProvider as l, fetchPromotionEnvironments as m, useInstancePromotionConnection as n, continueApplyProjectSelection as o, fetchPromotionEnvironment as p, applyProjectSelection as r, continueApplyPromotion as s, invalidateInstancePromotionConnection as t, deletePromotionEnvironment as u, updatePromotionEnvironment as v, updatePromotionProvider as y };
