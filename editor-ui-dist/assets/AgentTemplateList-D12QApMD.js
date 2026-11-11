import { $d as init_runtime_core_esm_bundler, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, If as onScopeDispose, Jd as defineComponent, Jf as unref, Kd as createVNode, _p as normalizeStyle, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, pf as renderList, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { $l as revertAgentToPublished, AO as N8nText_default, Bi as useAgentsN8nChatFlag, Cl as getAgentVersion, HO as _plugin_vue_export_helper_default, Jl as publishAgent, LC as N8N_CHAT_INTEGRATION_TYPE, Wi as upsertProjectAgentsListCache, Xr as AgentPersonalisationIcon_default, Yb as useToast, Zb as useStorage, iu as unpublishAgent, ng as AGENT_PUBLISHED_MODAL_KEY, pl as getAgent, qO as useI18n, rx as useRootStore, s_ as useUIStore, sg as AGENT_VERSION_METADATA_MODAL_KEY, zO as N8nIcon_default, zi as useAgentTelemetry } from "./app-MbtXRI_F.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-BcQ9o4Kn.js";
//#region src/features/agents/agentTemplates.ts
/** Distinct from the home-screen suggestion catalog (`v1`). */
var AGENT_TEMPLATE_SUGGESTIONS_VERSION = "agent-templates-v1";
function isAgentStarter(value) {
	if (typeof value !== "object" || value === null) return false;
	const starter = value;
	if (starter.kind === "prompt") return typeof starter.text === "string" && starter.text.trim() !== "";
	if (starter.kind === "template") return typeof starter.templateId === "string" && starter.templateId !== "";
	return false;
}
var AGENT_TEMPLATES = [
	{
		id: "morning-news-brief",
		labelKey: "agents.builder.templates.morningNewsBrief.label",
		descriptionKey: "agents.builder.templates.morningNewsBrief.description",
		icon: "sun",
		gradient: {
			from: "#F5A524",
			to: "#FF5A1F",
			angle: 160,
			fromStop: 8,
			toStop: 92
		},
		config: {
			name: "Morning News Brief",
			instructions: "You are a news brief agent. Every morning at 9am, search the web for today’s top headlines and compile a concise summary. For each story include a headline, a one-sentence summary, and a source link. Limit the brief to five stories.",
			config: { webSearch: {
				enabled: true,
				provider: "native"
			} }
		},
		tasks: [{
			name: "Morning news brief",
			objective: "Search the web for today’s top headlines and compile a concise summary. For each story include a headline, a one-sentence summary, and a source link. Limit the brief to five stories.",
			cronExpression: "0 9 * * *"
		}]
	},
	{
		id: "process-incoming-emails",
		labelKey: "agents.builder.templates.processIncomingEmails.label",
		descriptionKey: "agents.builder.templates.processIncomingEmails.description",
		icon: "mail",
		gradient: {
			from: "#2563EB",
			to: "#7C3AED",
			angle: 135,
			fromStop: 0,
			toStop: 100
		},
		config: {
			name: "Process Incoming Emails",
			instructions: "You are an email processing agent. Read new emails from Gmail, identify action items, and update the user’s Google Calendar with any meetings, deadlines, or follow-ups mentioned. Summarize each email and flag urgent items.",
			tools: [{
				type: "node",
				name: "Gmail",
				description: "Read and send emails through Gmail.",
				node: {
					nodeType: "n8n-nodes-base.gmail",
					nodeTypeVersion: 2,
					nodeParameters: {
						resource: "message",
						operation: "getAll"
					},
					credentials: { gmailOAuth2: {
						id: "",
						name: "gmailOAuth2"
					} }
				}
			}, {
				type: "node",
				name: "Google Calendar",
				description: "Create and update calendar events.",
				node: {
					nodeType: "n8n-nodes-base.googleCalendar",
					nodeTypeVersion: 1,
					nodeParameters: {
						resource: "event",
						operation: "create",
						start: "={{ $fromAI('start', 'Event start time', 'string') }}",
						end: "={{ $fromAI('end', 'Event end time', 'string') }}"
					},
					credentials: { googleCalendarOAuth2Api: {
						id: "",
						name: "googleCalendarOAuth2Api"
					} }
				}
			}]
		}
	},
	{
		id: "qualify-new-leads",
		labelKey: "agents.builder.templates.qualifyNewLeads.label",
		descriptionKey: "agents.builder.templates.qualifyNewLeads.description",
		icon: "users",
		gradient: {
			from: "#059669",
			to: "#84CC16",
			angle: 120,
			fromStop: 4,
			toStop: 88
		},
		config: {
			name: "Qualify New Leads",
			instructions: "You are a lead qualification agent. Score new leads from the CRM based on their profile, activity, and engagement. Route high-scoring leads to sales for immediate follow-up, and nurture low-scoring leads with relevant content."
		}
	},
	{
		id: "propose-meeting-times",
		labelKey: "agents.builder.templates.proposeMeetingTimes.label",
		descriptionKey: "agents.builder.templates.proposeMeetingTimes.description",
		icon: "calendar",
		gradient: {
			from: "#0F766E",
			to: "#2DD4BF",
			angle: 150,
			fromStop: 4,
			toStop: 96
		},
		config: {
			name: "Propose Meeting Times",
			instructions: "You are a scheduling agent. Find open slots on the user’s Google Calendar and suggest a few meeting times. Match the requested duration and time window. Do not book a meeting until the user confirms a time.",
			tools: [{
				type: "node",
				name: "Google Calendar",
				description: "Find open slots on Google Calendar.",
				node: {
					nodeType: "n8n-nodes-base.googleCalendar",
					nodeTypeVersion: 1.3,
					nodeParameters: {
						resource: "calendar",
						operation: "availability",
						timeMin: "={{ $fromAI('timeMin', 'Start of the interval to check', 'string') }}",
						timeMax: "={{ $fromAI('timeMax', 'End of the interval to check', 'string') }}"
					},
					credentials: { googleCalendarOAuth2Api: {
						id: "",
						name: "googleCalendarOAuth2Api"
					} }
				}
			}]
		}
	}
];
var isN8nChat = (integration) => integration.type === N8N_CHAT_INTEGRATION_TYPE;
/**
* A blank agent: no instructions, no tools, and no channel integrations.
* `name` and `model` are ignored — both are seeded on every new agent, so a
* default name or model does not count as content the user would lose by
* applying a template. n8n Chat is ignored for the same reason.
*/
function isAgentConfigBlank(config) {
	return config.instructions.trim() === "" && (config.tools?.length ?? 0) === 0 && (config.integrations ?? []).every(isN8nChat);
}
/**
* Returns the config with the template written onto it, or `null` when the
* agent already has content (instructions or tools). `name` is only replaced
* while it still equals `defaultName` (the seeded "Untitled"), so a renamed
* agent keeps its name. The template icon and gradient replace the
* personalisation. `model`, a default n8n Chat channel and every other field
* are preserved.
*/
function applyAgentTemplate(config, template, defaultName) {
	if (!isAgentConfigBlank(config)) return null;
	return {
		...config,
		name: config.name === defaultName ? template.config.name : config.name,
		instructions: template.config.instructions,
		tools: template.config.tools ?? [],
		integrations: [...(config.integrations ?? []).filter(isN8nChat), ...(template.config.integrations ?? []).filter((integration) => !isN8nChat(integration))],
		config: {
			...config.config,
			...template.config.config
		},
		personalisation: {
			icon: template.icon,
			gradient: { ...template.gradient }
		}
	};
}
//#endregion
//#region src/features/agents/composables/useAgentVersionMetadataModal.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
function useAgentVersionMetadataModal() {
	const uiStore = useUIStore();
	let cancelPending;
	let disposed = false;
	onScopeDispose(() => {
		disposed = true;
		cancelPending?.();
	}, true);
	async function openVersionMetadata({ isCurrent = () => true, ...options }) {
		if (disposed || !isCurrent()) return false;
		cancelPending?.();
		return await new Promise((resolve) => {
			let closed = false;
			const stopWatching = watch(isCurrent, (current) => {
				if (!current) cancelPending?.();
			}, { flush: "sync" });
			const finish = (saved) => {
				if (closed) return;
				closed = true;
				stopWatching();
				cancelPending = void 0;
				resolve(saved);
			};
			cancelPending = () => {
				uiStore.closeModal(AGENT_VERSION_METADATA_MODAL_KEY);
				finish(false);
			};
			uiStore.openModalWithData({
				name: AGENT_VERSION_METADATA_MODAL_KEY,
				data: {
					...options,
					onSubmit: async (metadata) => {
						if (closed || !isCurrent()) return false;
						const saved = await options.onSubmit(metadata);
						return !closed && saved;
					},
					onClose: finish
				}
			});
		});
	}
	return { openVersionMetadata };
}
//#endregion
//#region src/features/agents/composables/useAgentPublish.ts
init_reactivity_esm_bundler();
/**
* Opens the "Agent published" confirmation modal after a successful publish,
* unless the user opted out with "Don't show again". Shared by the
* header/list publish flow and the version-history republish flow (AGENT-1102).
*/
function showAgentPublishedConfirmation(agent) {
	if (useStorage("N8N_HIDE_AGENT_PUBLISHED_CONFIRMATION").value === "true") return;
	const n8nChatLive = useAgentsN8nChatFlag().value && (agent.activeVersion?.schema?.integrations ?? []).some(({ type }) => type === "n8n_chat");
	useUIStore().openModalWithData({
		name: AGENT_PUBLISHED_MODAL_KEY,
		data: {
			agentId: agent.id,
			projectId: agent.projectId,
			n8nChatLive
		}
	});
}
/**
* Shared publish/unpublish flow used by the builder header button and the list card.
* Owns the confirmation modal, toasts, error handling, and the `publishing` spinner
* state so both call sites stay thin and behave consistently.
*/
function useAgentPublish() {
	const rootStore = useRootStore();
	const locale = useI18n();
	const { showMessage, showError } = useToast();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const { trackRevertedChangesOnAgent } = useAgentTelemetry();
	const publishing = ref(false);
	const { openVersionMetadata } = useAgentVersionMetadataModal();
	async function publish(projectId, agentId, versionId, isCurrent = () => true) {
		if (publishing.value) return null;
		publishing.value = true;
		try {
			const selectedId = versionId ?? (await getAgent(rootStore.restApiContext, projectId, agentId)).versionId;
			if (!selectedId) return null;
			const version = await getAgentVersion(rootStore.restApiContext, projectId, agentId, selectedId);
			if (!isCurrent()) return null;
			let updated = null;
			if (await openVersionMetadata({
				mode: "publish",
				isCurrent,
				name: version.name,
				description: version.description,
				onSubmit: async (metadata) => {
					try {
						updated = await publishAgent(rootStore.restApiContext, projectId, agentId, selectedId, metadata);
						upsertProjectAgentsListCache(projectId, updated);
						showMessage({
							title: locale.baseText("agents.publish.toast.published"),
							type: "success"
						});
						return true;
					} catch (error) {
						showError(error, locale.baseText("agents.publish.error.publish"));
						return false;
					}
				}
			}) && updated && isCurrent()) showAgentPublishedConfirmation(updated);
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.publish"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	async function unpublish(projectId, agentId, agentName) {
		if (publishing.value) return null;
		if (await openAgentConfirmationModal({
			title: locale.baseText("agents.unpublish.modal.title", { interpolate: { name: agentName ?? "" } }),
			description: locale.baseText("agents.unpublish.modal.description"),
			confirmButtonText: locale.baseText("agents.unpublish.modal.button.unpublish"),
			cancelButtonText: locale.baseText("generic.cancel")
		}) !== "confirm") return null;
		publishing.value = true;
		try {
			const updated = await unpublishAgent(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			showMessage({
				title: locale.baseText("agents.publish.toast.unpublished"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.unpublish"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	async function revertToPublished(projectId, agentId) {
		if (publishing.value) return null;
		if (await openAgentConfirmationModal({
			title: locale.baseText("agents.revertToPublished.modal.title"),
			description: locale.baseText("agents.revertToPublished.modal.description"),
			confirmButtonText: locale.baseText("agents.revertToPublished.modal.button.revert"),
			cancelButtonText: locale.baseText("generic.cancel")
		}) !== "confirm") return null;
		publishing.value = true;
		try {
			const updated = await revertAgentToPublished(rootStore.restApiContext, projectId, agentId);
			trackRevertedChangesOnAgent({ agentId });
			upsertProjectAgentsListCache(projectId, updated);
			showMessage({
				title: locale.baseText("agents.publish.toast.reverted"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.revert"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	return {
		publish,
		unpublish,
		revertToPublished,
		publishing
	};
}
//#endregion
//#region src/features/agents/components/AgentTemplateList.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["data-test-id"];
var _hoisted_2 = ["onClick"];
var _hoisted_3 = ["data-test-id"];
var AgentTemplateList_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentTemplateList",
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("ul", { class: normalizeClass(_ctx.$style.examples) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(AGENT_TEMPLATES), (template, index) => {
				return openBlock(), createElementBlock("li", {
					key: template.id,
					class: normalizeClass(_ctx.$style.example),
					style: normalizeStyle({ "--intro-index": index + 1 }),
					"data-test-id": `agent-template-${template.id}`
				}, [createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.exampleButton),
					onClick: ($event) => emit("select", template)
				}, [
					createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.exampleIcon),
						"data-test-id": `agent-template-icon-${template.id}`
					}, [createVNode(AgentPersonalisationIcon_default, {
						personalisation: {
							icon: template.icon,
							gradient: template.gradient
						},
						size: 40
					}, null, 8, ["personalisation"])], 10, _hoisted_3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.exampleText) }, [createVNode(unref(N8nText_default), { class: normalizeClass(_ctx.$style.exampleLabel) }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(template.labelKey)), 1)]),
						_: 2
					}, 1032, ["class"]), createVNode(unref(N8nText_default), {
						color: "text-light",
						class: normalizeClass(_ctx.$style.exampleDescription),
						title: unref(i18n).baseText(template.descriptionKey)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(template.descriptionKey)), 1)]),
						_: 2
					}, 1032, ["class", "title"])], 2),
					createVNode(unref(N8nIcon_default), {
						icon: "arrow-right",
						color: "text-light",
						size: "medium",
						class: normalizeClass(_ctx.$style.exampleArrow)
					}, null, 8, ["class"])
				], 10, _hoisted_2)], 14, _hoisted_1);
			}), 128))], 2);
		};
	}
}), [["__cssModules", { "$style": {
	examples: "_examples_1g82h_452",
	example: "_example_1g82h_452",
	fadeInUp: "_fadeInUp_1g82h_1",
	exampleButton: "_exampleButton_1g82h_474",
	exampleArrow: "_exampleArrow_1g82h_493",
	exampleIcon: "_exampleIcon_1g82h_502",
	exampleText: "_exampleText_1g82h_507",
	exampleLabel: "_exampleLabel_1g82h_514",
	exampleDescription: "_exampleDescription_1g82h_518",
	shimmer: "_shimmer_1g82h_1",
	spin: "_spin_1g82h_1",
	"skeleton-pulse": "_skeleton-pulse_1g82h_1",
	opacityPulse: "_opacityPulse_1g82h_1",
	popoverIn: "_popoverIn_1g82h_1",
	fadeIn: "_fadeIn_1g82h_1",
	collapsibleSlideDown: "_collapsibleSlideDown_1g82h_1",
	collapsibleSlideUp: "_collapsibleSlideUp_1g82h_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_1g82h_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_1g82h_1",
	blurSwapIn: "_blurSwapIn_1g82h_1",
	blurSwapOut: "_blurSwapOut_1g82h_1",
	pulse: "_pulse_1g82h_1",
	pulseGlow: "_pulseGlow_1g82h_1",
	pulseGlowDelayed: "_pulseGlowDelayed_1g82h_1",
	fade: "_fade_1g82h_1",
	fadeInDown: "_fadeInDown_1g82h_1",
	fadeInLeft: "_fadeInLeft_1g82h_1",
	fadeInRight: "_fadeInRight_1g82h_1",
	fadeOut: "_fadeOut_1g82h_1",
	fadeOutDown: "_fadeOutDown_1g82h_1",
	fadeOutUp: "_fadeOutUp_1g82h_1",
	fadeOutLeft: "_fadeOutLeft_1g82h_1",
	fadeOutRight: "_fadeOutRight_1g82h_1",
	ping: "_ping_1g82h_1",
	blinkBackground: "_blinkBackground_1g82h_1",
	typingBlink: "_typingBlink_1g82h_1"
} }]]);
//#endregion
export { AGENT_TEMPLATE_SUGGESTIONS_VERSION as a, isAgentStarter as c, AGENT_TEMPLATES as i, useAgentPublish as n, applyAgentTemplate as o, useAgentVersionMetadataModal as r, isAgentConfigBlank as s, AgentTemplateList_default as t };
