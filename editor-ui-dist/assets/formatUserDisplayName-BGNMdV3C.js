import { $n as makeRestApiRequest } from "./useRootStore-CDIOxWm8.js";
//#region src/features/workflow-reviews/workflowReviews.api.ts
/** Workflow-scoped list used by the review status sync (toggle + canvas banner). */
async function fetchWorkflowReviewRequests(context, query) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests", { ...query });
}
async function fetchEligibleReviewers(context, query) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests/eligible-reviewers", { ...query });
}
async function createWorkflowReviewRequest(context, payload) {
	return await makeRestApiRequest(context, "POST", "/workflow-review-requests", { ...payload });
}
async function updateWorkflowReviewRequestVersion(context, workflowReviewRequestId, payload) {
	return await makeRestApiRequest(context, "POST", `/workflow-review-requests/${workflowReviewRequestId}/update-version`, { ...payload });
}
async function decideWorkflowReviewRequest(context, workflowReviewRequestId, payload) {
	return await makeRestApiRequest(context, "POST", `/workflow-review-requests/${workflowReviewRequestId}/decision`, { ...payload });
}
async function fetchWorkflowReviewInboxSummary(context) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests/summary");
}
/** Cross-project inbox list. */
async function fetchWorkflowReviewInbox(context, params) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests/inbox", params);
}
async function fetchWorkflowReviewRequestDetail(context, workflowReviewRequestId) {
	return await makeRestApiRequest(context, "GET", `/workflow-review-requests/${workflowReviewRequestId}`);
}
//#endregion
//#region src/features/workflow-reviews/formatUserDisplayName.ts
function formatUserDisplayName(user) {
	return [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email || "";
}
//#endregion
export { fetchWorkflowReviewInbox as a, fetchWorkflowReviewRequests as c, fetchEligibleReviewers as i, updateWorkflowReviewRequestVersion as l, createWorkflowReviewRequest as n, fetchWorkflowReviewInboxSummary as o, decideWorkflowReviewRequest as r, fetchWorkflowReviewRequestDetail as s, formatUserDisplayName as t };
