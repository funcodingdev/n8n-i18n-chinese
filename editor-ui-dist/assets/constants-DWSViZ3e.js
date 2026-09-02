import { Fa as INSTANCE_AI_THREAD_SOURCES } from "./src-DAIlllTg.js";
//#region src/features/ai/instanceAi/constants.ts
var INSTANCE_AI_VIEW = "InstanceAi";
var INSTANCE_AI_THREAD_VIEW = "InstanceAiThread";
var INSTANCE_AI_SETTINGS_VIEW = "InstanceAiSettings";
var INSTANCE_AI_PROJECT_ID_QUERY = "projectId";
/**
* History-state key for the agent id minted at the click. Carried to the
* new-agent view so the "clicked" and "created" events share a join key even
* though no agent exists yet. Kept out of the URL so a hand-authored query
* cannot force the view to adopt an arbitrary id.
*/
var INSTANCE_AI_PENDING_AGENT_ID_STATE = "instanceAiPendingAgentId";
/** Entry-point source carried into the empty view when a hand-off can't create a thread yet. */
var INSTANCE_AI_SOURCE_QUERY = "source";
/** Brand names, deliberately not translated; single source for dialogs and settings rows. */
var SANDBOX_PROVIDER_LABELS = {
	daytona: "Daytona",
	"n8n-sandbox": "n8n Sandbox Service"
};
var INSTANCE_AI_NEW_VIEW = "InstanceAiNew";
var INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY = "instanceAiAgentBuilderTarget";
var INSTANCE_AI_AGENT_PREVIEW_VIEW_METADATA_KEY = "instanceAiAgentPreviewView";
/** Mirrors `AGENT_PREVIEW_SESSION_METADATA_KEY` in `@n8n/instance-ai`. */
var INSTANCE_AI_AGENT_PREVIEW_SESSION_METADATA_KEY = "instanceAiAgentPreviewSession";
/**
* A new-agent artifact the user opened but has not configured yet, so no agent
* row exists. Carries the id minted for it, which whichever path persists the
* agent first creates it under. Mirrors `PENDING_AGENT_METADATA_KEY` in
* `@n8n/instance-ai`.
*/
var INSTANCE_AI_PENDING_AGENT_METADATA_KEY = "instanceAiPendingAgentTarget";
var NEW_CONVERSATION_TITLE = "New conversation";
var BROWSER_USE_CONNECTION_TYPE = "browser-use";
var COMPUTER_USE_CONNECTION_TYPE = "computer-use";
var BROWSER_USE_EXTENSION_ID = "cegmdpndekdfpnafgacidejijecomlhh";
var CHROME_EXTENSION_URL = `https://chromewebstore.google.com/detail/n8n-browser-use/${BROWSER_USE_EXTENSION_ID}`;
var INSTANCE_AI_THREAD_SOURCE_SET = new Set(INSTANCE_AI_THREAD_SOURCES);
function isInstanceAiThreadSource(value) {
	return typeof value === "string" && INSTANCE_AI_THREAD_SOURCE_SET.has(value);
}
var INSTANCE_AI_CHAT_ROUTE_NAMES = new Set([
	INSTANCE_AI_VIEW,
	INSTANCE_AI_THREAD_VIEW,
	INSTANCE_AI_NEW_VIEW
]);
/**
* True while the route stays inside the chat module. Teardown hooks check this
* because entering the module can transiently remount its layout, and a remount
* must not be mistaken for a real route exit.
*/
function isInstanceAiChatRoute(name) {
	return typeof name === "string" && INSTANCE_AI_CHAT_ROUTE_NAMES.has(name);
}
var INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY = "instanceAiComputerUseSetup";
var INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY = "instanceAiBrowserUseSetup";
var INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY = "instanceAiToolsConnection";
//#endregion
export { isInstanceAiThreadSource as S, INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY as _, INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY as a, SANDBOX_PROVIDER_LABELS as b, INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY as c, INSTANCE_AI_PENDING_AGENT_ID_STATE as d, INSTANCE_AI_PENDING_AGENT_METADATA_KEY as f, INSTANCE_AI_THREAD_VIEW as g, INSTANCE_AI_SOURCE_QUERY as h, COMPUTER_USE_CONNECTION_TYPE as i, INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY as l, INSTANCE_AI_SETTINGS_VIEW as m, BROWSER_USE_EXTENSION_ID as n, INSTANCE_AI_AGENT_PREVIEW_SESSION_METADATA_KEY as o, INSTANCE_AI_PROJECT_ID_QUERY as p, CHROME_EXTENSION_URL as r, INSTANCE_AI_AGENT_PREVIEW_VIEW_METADATA_KEY as s, BROWSER_USE_CONNECTION_TYPE as t, INSTANCE_AI_NEW_VIEW as u, INSTANCE_AI_VIEW as v, isInstanceAiChatRoute as x, NEW_CONVERSATION_TITLE as y };
