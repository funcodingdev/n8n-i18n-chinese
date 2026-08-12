import { $n as makeRestApiRequest, Zn as get } from "./useRootStore-o9aJBslg.js";
//#region ../@n8n/rest-api-client/dist/api/breaking-changes.mjs
async function getReport(context, query) {
	return (await get(context.baseUrl, "/breaking-changes/report", query)).data;
}
async function refreshReport(context, query) {
	return await makeRestApiRequest(context, "POST", query?.version ? `/breaking-changes/report/refresh?version=${query.version}` : "/breaking-changes/report/refresh");
}
async function getReportForRule(context, ruleId) {
	return (await get(context.baseUrl, `/breaking-changes/report/${ruleId}`)).data;
}
async function migrateWorkflowForRule(context, ruleId, workflowId) {
	return await makeRestApiRequest(context, "POST", `/breaking-changes/report/${ruleId}/workflows/${workflowId}/migrate`);
}
//#endregion
export { refreshReport as i, getReportForRule as n, migrateWorkflowForRule as r, getReport as t };
