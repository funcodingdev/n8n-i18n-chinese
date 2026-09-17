import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { er as makeRestApiRequest, t as useRootStore } from "./useRootStore-CmulcDGX.js";
//#region src/app/api/workflow-dependencies.ts
async function getResourceDependencyCounts(context, resourceIds, resourceType) {
	return await makeRestApiRequest(context, "POST", "/workflow-dependencies/counts", {
		resourceIds,
		resourceType
	});
}
async function getResourceDependencies(context, resourceIds, resourceType) {
	return await makeRestApiRequest(context, "POST", "/workflow-dependencies/details", {
		resourceIds,
		resourceType
	});
}
//#endregion
//#region src/app/composables/useDependencies.ts
var dependenciesMap = ref({});
var countsMap = ref({});
var BATCH_SIZE = 100;
function toBatches(resourceIds) {
	const batches = [];
	for (let i = 0; i < resourceIds.length; i += BATCH_SIZE) batches.push(resourceIds.slice(i, i + BATCH_SIZE));
	return batches;
}
function useDependencies() {
	const rootStore = useRootStore();
	/** Fetch lightweight dependency counts for resource cards (no name resolution). */
	async function fetchDependencyCounts(resourceIds, resourceType) {
		await Promise.all(toBatches(resourceIds).map(async (batch) => {
			try {
				const result = await getResourceDependencyCounts(rootStore.restApiContext, batch, resourceType);
				for (const [id, counts] of Object.entries(result)) countsMap.value[id] = counts;
			} catch {}
		}));
	}
	/** Fetch full resolved dependencies for any resource type. */
	async function fetchDependencies(resourceIds, resourceType) {
		await Promise.all(toBatches(resourceIds).map(async (batch) => {
			try {
				const result = await getResourceDependencies(rootStore.restApiContext, batch, resourceType);
				for (const [id, entry] of Object.entries(result)) dependenciesMap.value[id] = entry;
			} catch {}
		}));
	}
	function getDependencies(resourceId) {
		return dependenciesMap.value[resourceId];
	}
	function getDependencyCounts(resourceId) {
		return countsMap.value[resourceId];
	}
	function getTotalCount(resourceId) {
		const counts = countsMap.value[resourceId];
		if (!counts) return 0;
		return Object.values(counts).reduce((sum, n) => sum + n, 0);
	}
	function hasDependencies(resourceId) {
		const entry = dependenciesMap.value[resourceId];
		if (entry !== void 0) return entry.dependencies.length > 0 || entry.inaccessibleCount > 0;
		return getTotalCount(resourceId) > 0;
	}
	function clearCache() {
		dependenciesMap.value = {};
		countsMap.value = {};
	}
	return {
		fetchDependencyCounts,
		fetchDependencies,
		getDependencies,
		getDependencyCounts,
		getTotalCount,
		hasDependencies,
		clearCache
	};
}
//#endregion
export { useDependencies as t };
