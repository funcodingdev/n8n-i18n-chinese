//#region src/features/workflow-reviews/constants.ts
var WORKFLOW_REVIEW_REQUESTS_VIEW = "WorkflowReviewRequestsView";
/**
* The review's linked workflows, keyed by workflow id. Provided by the detail surface, read
* by feed entries that mention a workflow. Resolved at read time on purpose: feed payloads
* are immutable and never snapshot names, so a rename shows up everywhere at once. A workflow
* deleted since the entry was written has no row here; the entry copy degrades.
*/
var ReviewLinkedWorkflowsKey = Symbol("reviewLinkedWorkflows");
/**
* Routing contract for the review inbox.
*
* Path: /reviews/:reviewRequestId?
*   - `:reviewRequestId` is the open review (deep-linkable). Absent = inbox
*     with nothing selected. Selection always navigates via router.replace.
*
* Query params hold filter state; adding a filter must not require a routing
* change — reserve the key here, hydrate it in the view, and write it with
* router.replace({ query }) preserving params.
*   - `state`: 'open' | 'closed'. Default 'open' is omitted from the URL.
*   - `tab`: 'activity' | 'changes' — detail-pane tab. Default 'activity' is
*     omitted from the URL.
*   - Reserved for later filters: `q`, `projectId`, `author`, `reviewer`.
*/
var REVIEW_INBOX_QUERY_PARAM = {
	state: "state",
	tab: "tab"
};
//#endregion
export { ReviewLinkedWorkflowsKey as n, WORKFLOW_REVIEW_REQUESTS_VIEW as r, REVIEW_INBOX_QUERY_PARAM as t };
