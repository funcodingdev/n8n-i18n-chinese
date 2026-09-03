import { Qn as makeRestApiRequest } from "./useRootStore-Bapf3biO.js";
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
	return await makeRestApiRequest(context, "POST", `/workflow-review-requests/${encodeURIComponent(workflowReviewRequestId)}/update-version`, { ...payload });
}
async function decideWorkflowReviewRequest(context, workflowReviewRequestId, payload) {
	return await makeRestApiRequest(context, "POST", `/workflow-review-requests/${encodeURIComponent(workflowReviewRequestId)}/decision`, { ...payload });
}
async function fetchWorkflowReviewInboxSummary(context) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests/summary");
}
/** Cross-project inbox list. */
async function fetchWorkflowReviewInbox(context, params) {
	return await makeRestApiRequest(context, "GET", "/workflow-review-requests/inbox", params);
}
async function fetchWorkflowReviewRequestDetail(context, workflowReviewRequestId) {
	return await makeRestApiRequest(context, "GET", `/workflow-review-requests/${encodeURIComponent(workflowReviewRequestId)}`);
}
async function fetchWorkflowReviewActivity(context, workflowReviewRequestId, params) {
	return await makeRestApiRequest(context, "GET", `/workflow-review-requests/${encodeURIComponent(workflowReviewRequestId)}/activity`, params);
}
async function createWorkflowReviewComment(context, workflowReviewRequestId, payload) {
	return await makeRestApiRequest(context, "POST", `/workflow-review-requests/${encodeURIComponent(workflowReviewRequestId)}/comments`, { ...payload });
}
//#endregion
//#region src/features/workflow-reviews/workflowReviews.utils.ts
function toError(error) {
	return error instanceof Error ? error : new Error(String(error));
}
function formatUserDisplayName(user) {
	return [user.firstName, user.lastName].filter(Boolean).join(" ") || user.email || "";
}
/** Names whoever produced an activity entry. The fallback is passed in to keep i18n out of here. */
function formatActorName(actor, fallback) {
	return actor ? formatUserDisplayName(actor) : fallback;
}
//#endregion
export { createWorkflowReviewRequest as a, fetchWorkflowReviewActivity as c, fetchWorkflowReviewRequestDetail as d, fetchWorkflowReviewRequests as f, createWorkflowReviewComment as i, fetchWorkflowReviewInbox as l, formatUserDisplayName as n, decideWorkflowReviewRequest as o, updateWorkflowReviewRequestVersion as p, toError as r, fetchEligibleReviewers as s, formatActorName as t, fetchWorkflowReviewInboxSummary as u };
