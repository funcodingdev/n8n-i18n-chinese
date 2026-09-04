import "./src-B255AdRt.js";
//#region src/features/credentials/composables/oauthCallback.ts
var OAUTH_CALLBACK_SUCCESS = "success";
var OAUTH_CALLBACK_ERROR = "error";
/** How long to wait for an OAuth flow to deliver a result before giving up. */
var OAUTH_FLOW_TIMEOUT = 300 * 1e3;
var POPUP_CLOSED_POLL_INTERVAL = 500;
var VERIFY_CONNECTED_INTERVAL = 2e3;
/**
* The OAuth callback page is served by the n8n backend and notifies the editor
* UI that the flow finished. It signals completion over two channels:
*
* - `BroadcastChannel('oauth-callback')` — works when the callback page and the
*   editor share the same origin.
* - `window.opener.postMessage` — needed for embed setups where the editor and
*   the n8n backend are served from different origins, which `BroadcastChannel`
*   cannot bridge.
*
* Because any page can post a message to `window`, the `window` path must be
* validated against the origins we trust (the current page and the configured
* n8n editor base URL) and against the known payloads.
*/
function getTrustedOAuthOrigins(editorBaseUrl) {
	const origins = new Set([window.location.origin]);
	try {
		origins.add(new URL(editorBaseUrl, window.location.origin).origin);
	} catch {}
	return [...origins];
}
/**
* Validate an incoming `window` `message` event and return the OAuth result it
* carries, or `null` when the event should be ignored (untrusted origin or an
* unrelated payload).
*/
function parseOAuthCallbackMessage(event, trustedOrigins) {
	if (!trustedOrigins.includes(event.origin)) return null;
	if (event.data === "success") return OAUTH_CALLBACK_SUCCESS;
	if (event.data === "error") return OAUTH_CALLBACK_ERROR;
	return null;
}
/**
* Whether credential data contains OAuth token data, i.e. an OAuth flow has
* completed for the credential. The backend never exposes the token itself;
* its presence is signalled by a redacted placeholder value.
*/
function isOAuthTokenDataSet(data) {
	if (typeof data !== "object" || data === null || !("oauthTokenData" in data)) return false;
	const { oauthTokenData } = data;
	return Boolean(oauthTokenData) && oauthTokenData !== "__n8n_EMPTY_VALUE_7b1af746-3729-4c60-9b9b-e08eb29e58da";
}
/** `isOAuthTokenDataSet` applied to a fetched credential's `data` field. */
function hasOAuthTokenData(credential) {
	if (typeof credential !== "object" || credential === null || !("data" in credential)) return false;
	return isOAuthTokenDataSet(credential.data);
}
/**
* Wait for an OAuth popup flow to finish and resolve with its outcome.
*
* A popup that reads as closed is NOT treated as failure: for providers that
* respond with `Cross-Origin-Opener-Policy: same-origin` the browser severs
* the opener relationship, after which `popup.closed` reads `true` while the
* window is still open and the user is still authorizing. When the popup
* reads as closed we instead start polling `verifyConnected` (when given) and
* keep listening for callback messages until `timeoutMs` elapses or `signal`
* aborts. Callers can opt into treating this signal as cancellation with
* `abortOnPopupClose`, accepting that COOP-severed popups are indistinguishable
* from popups the user actually closed.
*/
async function waitForOAuthCallback({ popup, trustedOrigins, signal, verifyConnected, timeoutMs = OAUTH_FLOW_TIMEOUT, abortOnPopupClose = false }) {
	return await new Promise((resolve) => {
		const oauthChannel = new BroadcastChannel("oauth-callback");
		let settled = false;
		let verifyTimer;
		let verifyInFlight = false;
		function settle(outcome) {
			if (settled) return;
			settled = true;
			oauthChannel.removeEventListener("message", onChannelMessage);
			oauthChannel.close();
			window.removeEventListener("message", onWindowMessage);
			signal?.removeEventListener("abort", onAbort);
			clearInterval(popupClosedPoll);
			if (verifyTimer !== void 0) clearInterval(verifyTimer);
			clearTimeout(timeoutTimer);
			resolve(outcome);
		}
		function onChannelMessage(event) {
			settle(event.data === "success" ? OAUTH_CALLBACK_SUCCESS : OAUTH_CALLBACK_ERROR);
		}
		function onWindowMessage(event) {
			const result = parseOAuthCallbackMessage(event, trustedOrigins);
			if (result === null) return;
			settle(result);
		}
		function onAbort() {
			settle("aborted");
		}
		async function verify() {
			if (verifyInFlight || settled || !verifyConnected) return;
			verifyInFlight = true;
			try {
				if (await verifyConnected()) settle(OAUTH_CALLBACK_SUCCESS);
				else if (abortOnPopupClose && popup.closed) settle("aborted");
			} catch {} finally {
				verifyInFlight = false;
			}
		}
		const popupClosedPoll = setInterval(() => {
			if (!popup.closed) return;
			clearInterval(popupClosedPoll);
			if (verifyConnected) {
				verify();
				verifyTimer = setInterval(() => {
					verify();
				}, VERIFY_CONNECTED_INTERVAL);
			} else if (abortOnPopupClose) settle("aborted");
		}, POPUP_CLOSED_POLL_INTERVAL);
		const timeoutTimer = setTimeout(() => settle("timeout"), timeoutMs);
		oauthChannel.addEventListener("message", onChannelMessage);
		window.addEventListener("message", onWindowMessage);
		signal?.addEventListener("abort", onAbort);
		if (signal?.aborted) onAbort();
	});
}
//#endregion
export { waitForOAuthCallback as i, hasOAuthTokenData as n, isOAuthTokenDataSet as r, getTrustedOAuthOrigins as t };
