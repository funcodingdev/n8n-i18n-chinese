import { s as useI18n } from "./src-CNBJaijc.js";
import { c as useRouter } from "./vue-router-Dl3cOHxO.js";
import { hn as useProjectsStore } from "./workflows.store-CV9fQhc2.js";
import { $i as v4, Ba as instanceAiAgentAttachmentSchema } from "./src-JwBmTNgK.js";
import { t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { n as useToast } from "./useToast-D5wqhIPz.js";
import { a as INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY, g as INSTANCE_AI_THREAD_VIEW, s as INSTANCE_AI_AGENT_PREVIEW_VIEW_METADATA_KEY } from "./constants-BLqhkQAv.js";
import { n as useInstanceAiStore } from "./instanceAi.store-xX8Oiogt.js";
//#region src/features/ai/instanceAi/composables/useInstanceAiHandoff.ts
/** The existing credential id, when known, so the agent can act on it directly. */
function existingCredentialNote(credential) {
	return credential.id ? ` The existing credential id is \`${credential.id}\`.` : "";
}
/**
* A recipe-created credential arrives pre-filled, so the visible question only
* asks where to find the values — this text renders as the user's own message;
* the paste-only steering travels invisibly in the handoff context.
*/
function templatedValuesQuestion(credential) {
	const titles = (credential.placeholderTitles ?? []).map((title) => `"${title}"`);
	return `Where do I find the ${titles.length > 1 ? `${titles.slice(0, -1).join(", ")} and ${titles[titles.length - 1]} values` : titles[0]} for my "${credential.displayName}" credential?`;
}
/**
* Opening question for a new-tab credential hand-off (credentials list, editor):
* the new thread carries no workflow, so it names the credential setup modal as
* the user's context. The node isn't carried into the new tab, so it isn't named.
*/
function buildInstanceAiCredentialQuestion(credential) {
	if (credential.placeholderTitles?.length) return templatedValuesQuestion(credential);
	return `How do I set up the credentials for ${credential.displayName}?${existingCredentialNote(credential)} I'm looking at the credential setup modal.`;
}
/**
* Opening question for an in-thread credential hand-off (the workflow artifact):
* the workflow is already the thread's subject, so it names the node and omits
* the modal context.
*/
function buildInstanceAiArtifactCredentialQuestion(credential) {
	const node = credential.nodeName ? ` It's for the "${credential.nodeName}" node.` : "";
	if (credential.placeholderTitles?.length) return `${templatedValuesQuestion(credential)}${node}`;
	return `How do I set up the credentials for ${credential.displayName}?${node}${existingCredentialNote(credential)}`;
}
var pendingFirstMessageKey = (threadId) => `n8n-instance-ai-first-message:${threadId}`;
var pendingHandoffContextKey = (threadId) => `n8n-instance-ai-handoff-context:${threadId}`;
var pendingComposerDraftKey = (threadId) => `n8n-instance-ai-composer-draft:${threadId}`;
var pendingAgentAttachmentKey = (threadId) => `n8n-instance-ai-agent-attachment:${threadId}`;
function buildInstanceAiCredentialHandoffContext(credential) {
	return {
		source: "credential-modal",
		credential: {
			credentialType: credential.credentialType,
			displayName: credential.displayName,
			...credential.id ? { id: credential.id } : {},
			...credential.nodeName ? { nodeName: credential.nodeName } : {},
			...credential.nodeType ? { nodeType: credential.nodeType } : {},
			...credential.placeholderTitles?.length ? { placeholderTitles: credential.placeholderTitles } : {},
			...credential.docsUrl ? { docsUrl: credential.docsUrl } : {},
			...credential.documentationUrl ? { documentationUrl: credential.documentationUrl } : {},
			...credential.oauthRedirectUrl ? { oauthRedirectUrl: credential.oauthRedirectUrl } : {}
		}
	};
}
function buildInstanceAiAgentPreviewHandoffContext(params) {
	return {
		source: "agent-preview",
		agentId: params.agentId,
		threadId: params.threadId,
		...params.agentName ? { agentName: params.agentName } : {},
		...params.agentIcon ? { agentIcon: params.agentIcon } : {},
		...params.sessionTitle ? { sessionTitle: params.sessionTitle } : {},
		...params.executionId ? { executionId: params.executionId } : {}
	};
}
/**
* Stash the opening message for a thread the current context can't send itself
* (a new tab, a router guard). The destination thread view consumes it after
* hydration + SSE connect (see consumePendingFirstMessage) and sends it there.
*/
function stashPendingFirstMessage(threadId, payload) {
	localStorage.setItem(pendingFirstMessageKey(threadId), JSON.stringify(payload));
}
/**
* Consume the opening message a new-tab hand-off stashed here. A separate window
* can't send it (the destination loads before the BE persists it), so it does.
*/
function consumePendingFirstMessage(threadId) {
	const raw = localStorage.getItem(pendingFirstMessageKey(threadId));
	if (!raw) return null;
	localStorage.removeItem(pendingFirstMessageKey(threadId));
	try {
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function stashPendingHandoffContext(threadId, context) {
	localStorage.setItem(pendingHandoffContextKey(threadId), JSON.stringify(context));
}
function getPendingHandoffContext(threadId) {
	const raw = localStorage.getItem(pendingHandoffContextKey(threadId));
	if (!raw) return null;
	try {
		return JSON.parse(raw);
	} catch {
		clearPendingHandoffContext(threadId);
		return null;
	}
}
function clearPendingHandoffContext(threadId) {
	localStorage.removeItem(pendingHandoffContextKey(threadId));
}
function stashPendingComposerDraft(threadId, draft) {
	localStorage.setItem(pendingComposerDraftKey(threadId), draft);
}
function getPendingComposerDraft(threadId) {
	const draft = localStorage.getItem(pendingComposerDraftKey(threadId));
	if (!draft) return null;
	return draft;
}
function clearPendingComposerDraft(threadId) {
	localStorage.removeItem(pendingComposerDraftKey(threadId));
}
function stashPendingAgentAttachment(threadId, attachment) {
	localStorage.setItem(pendingAgentAttachmentKey(threadId), JSON.stringify(attachment));
}
function getPendingAgentAttachment(threadId) {
	const raw = localStorage.getItem(pendingAgentAttachmentKey(threadId));
	if (!raw) return null;
	try {
		const parsed = instanceAiAgentAttachmentSchema.safeParse(JSON.parse(raw));
		return parsed.success ? parsed.data : null;
	} catch {
		return null;
	}
}
function clearPendingAgentAttachment(threadId) {
	localStorage.removeItem(pendingAgentAttachmentKey(threadId));
}
function clearPendingThreadHandoff(threadId) {
	clearPendingHandoffContext(threadId);
	clearPendingComposerDraft(threadId);
	clearPendingAgentAttachment(threadId);
}
/** Resolve the personal project a launched thread binds to, loading it on first use. */
async function ensurePersonalProjectId() {
	const projectsStore = useProjectsStore();
	if (!projectsStore.personalProject) try {
		await projectsStore.getPersonalProject();
	} catch {
		return null;
	}
	return projectsStore.personalProject?.id ?? null;
}
/**
* Provision a launched thread the destination view will send for: mint the id,
* persist it, and stash the opening message. Shared by the deep-link router
* guard and the new-tab hand-off, which both hand off delivery to the view.
* Returns the thread id, or null if persistence failed.
*/
async function provisionLaunchedThread(projectId, payload, launch) {
	const threadId = v4();
	try {
		await useInstanceAiStore().syncThread(threadId, projectId, launch);
	} catch {
		return null;
	}
	stashPendingFirstMessage(threadId, payload);
	return threadId;
}
async function provisionContextOnlyThread(projectId, context, launch, initialDraft) {
	const threadId = v4();
	try {
		await useInstanceAiStore().syncThread(threadId, projectId, launch);
	} catch {
		return null;
	}
	stashPendingHandoffContext(threadId, context);
	if (initialDraft) stashPendingComposerDraft(threadId, initialDraft);
	return threadId;
}
var handoffInFlight = false;
/**
* Create a thread, optionally seed its runtime (`prepare`), send the opening turn,
* and navigate to it. Shared by the capability adapters and the credentials list.
*/
function useInstanceAiHandoff() {
	const instanceAiStore = useInstanceAiStore();
	const rootStore = useRootStore();
	const router = useRouter();
	const toast = useToast();
	const i18n = useI18n();
	function showOpenFailed() {
		toast.showError(new Error(i18n.baseText("instanceAi.handoff.openFailed.message")), i18n.baseText("instanceAi.handoff.openFailed.title"));
	}
	async function openAgentArtifactThread(attachment, launch, options) {
		if (handoffInFlight) return false;
		handoffInFlight = true;
		try {
			const threadId = v4();
			try {
				await instanceAiStore.syncThread(threadId, attachment.projectId, launch);
			} catch {
				showOpenFailed();
				return false;
			}
			try {
				await instanceAiStore.updateThreadMetadata(threadId, {
					[INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY]: {
						agentId: attachment.id,
						projectId: attachment.projectId,
						...attachment.name ? { name: attachment.name } : {}
					},
					...options?.context?.source === "agent-preview" ? { [INSTANCE_AI_AGENT_PREVIEW_VIEW_METADATA_KEY]: {
						agentId: options.context.agentId,
						threadId: options.context.threadId
					} } : {}
				});
			} catch {
				await instanceAiStore.deleteThread(threadId);
				showOpenFailed();
				return false;
			}
			stashPendingAgentAttachment(threadId, attachment);
			if (options?.context) stashPendingHandoffContext(threadId, options.context);
			if (options?.initialDraft) stashPendingComposerDraft(threadId, options.initialDraft);
			try {
				if (await router.push({
					name: "InstanceAiThread",
					params: { threadId }
				})) throw new Error("Navigation failed");
			} catch {
				clearPendingThreadHandoff(threadId);
				await instanceAiStore.deleteThread(threadId);
				showOpenFailed();
				return false;
			}
			return true;
		} finally {
			handoffInFlight = false;
		}
	}
	async function openThreadWithContext(projectId, context, launch, options) {
		if (handoffInFlight) return false;
		handoffInFlight = true;
		try {
			const tab = options?.newTab ? window.open("", "_blank") : null;
			const threadId = await provisionContextOnlyThread(projectId, context, launch, options?.initialDraft);
			if (!threadId) {
				tab?.close();
				showOpenFailed();
				return false;
			}
			const route = {
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			};
			if (tab) tab.location.href = router.resolve(route).href;
			else await router.push(route);
			return true;
		} finally {
			handoffInFlight = false;
		}
	}
	async function startThread(projectId, message, launch, attachments, prepare, options) {
		if (handoffInFlight) return;
		handoffInFlight = true;
		try {
			if (options?.newTab) {
				const tab = window.open("", "_blank");
				const threadId = await provisionLaunchedThread(projectId, {
					message,
					attachments,
					context: options?.context
				}, launch);
				if (!threadId) {
					tab?.close();
					showOpenFailed();
					return;
				}
				const route = {
					name: INSTANCE_AI_THREAD_VIEW,
					params: { threadId }
				};
				if (tab) tab.location.href = router.resolve(route).href;
				else await router.push(route);
				return;
			}
			const threadId = v4();
			try {
				await instanceAiStore.syncThread(threadId, projectId, launch);
			} catch {
				showOpenFailed();
				return;
			}
			const thread = instanceAiStore.getOrCreateRuntime(threadId, projectId);
			prepare?.(threadId);
			thread.sendMessage(message, attachments, rootStore.pushRef, options?.context);
			await router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			});
		} finally {
			handoffInFlight = false;
		}
	}
	return {
		startThread,
		openThreadWithContext,
		openAgentArtifactThread
	};
}
//#endregion
export { stashPendingHandoffContext as _, clearPendingAgentAttachment as a, clearPendingThreadHandoff as c, getPendingAgentAttachment as d, getPendingComposerDraft as f, stashPendingComposerDraft as g, stashPendingAgentAttachment as h, buildInstanceAiCredentialQuestion as i, consumePendingFirstMessage as l, provisionLaunchedThread as m, buildInstanceAiArtifactCredentialQuestion as n, clearPendingComposerDraft as o, getPendingHandoffContext as p, buildInstanceAiCredentialHandoffContext as r, clearPendingHandoffContext as s, buildInstanceAiAgentPreviewHandoffContext as t, ensurePersonalProjectId as u, useInstanceAiHandoff as v };
