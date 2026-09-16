import { er as makeRestApiRequest } from "./useRootStore-CmulcDGX.js";
//#region src/features/integrations/promotions.ee/promotions.api.ts
var MOCK_DATA = [
	{
		id: "wf-001",
		name: "Email summary",
		type: "workflow",
		status: "modified",
		version: 14,
		updatedAt: (/* @__PURE__ */ new Date(Date.now() - 7200 * 1e3)).toISOString(),
		updatedBy: "user-001",
		dependencyCount: 7
	},
	{
		id: "wf-002",
		name: "Payment handler",
		type: "workflow",
		status: "archived",
		version: 3,
		updatedAt: (/* @__PURE__ */ new Date(Date.now() - 10800 * 1e3)).toISOString(),
		updatedBy: "user-002",
		dependencyCount: 1
	},
	{
		id: "wf-003",
		name: "Legacy invoice sync",
		type: "workflow",
		status: "deleted",
		version: null,
		updatedAt: (/* @__PURE__ */ new Date(Date.now() - 14400 * 1e3)).toISOString(),
		updatedBy: null,
		dependencyCount: 0
	}
];
async function getPromotableChanges(context, projectId, options) {
	{
		let results = [...MOCK_DATA];
		if (options?.search) {
			const term = options.search.toLowerCase();
			results = results.filter((r) => r.name.toLowerCase().includes(term));
		}
		return results;
	}
	return await makeRestApiRequest(context, "GET", `/promotions/${projectId}/changes`, options);
}
async function promoteChanges(context, projectId, request) {
	return { branchName: `promote/${(/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace(/[T:]/g, "-")}` };
}
//#endregion
export { promoteChanges as n, getPromotableChanges as t };
