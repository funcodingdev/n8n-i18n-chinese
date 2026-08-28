import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, Pt as reactive, R as inject, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, at as resolveComponent, bt as withCtx, gt as watch, it as renderSlot, j as createVNode, n as Transition, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, st as resolveDynamicComponent, tt as provide, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-CcR38nth.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { t as N8nIconButton_default } from "./N8nIconButton-CMP0ih80.js";
import { D as useStorage, E as useSpeechSynthesis } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { t as DropdownMenu_default } from "./DropdownMenu-DPWQUABM.js";
import { t as N8nTooltip_default } from "./N8nTooltip-DborXEyr.js";
import { r as CollapsibleRoot_default, t as CollapsibleTrigger_default } from "./CollapsibleTrigger-BXwADwHH.js";
import { t as MarkdownEditor_default } from "./MarkdownEditor-BLoHOXEC.js";
import { i as HoverCardRoot_default, n as HoverCardPortal_default, r as HoverCardContent_default, t as HoverCardTrigger_default } from "./HoverCardTrigger-CLcxpVvf.js";
import { t as truncate } from "./truncate-B0m9bkui.js";
import { r as N8nSendStopButton_default } from "./N8nChatInput-BOMwSAey.js";
import { t as N8nCallout_default } from "./N8nCallout-DqmF6S4S.js";
import { t as ElRadio } from "./radio-DN3mswyO.js";
import { t as N8nCard_default } from "./N8nCard-CEpSF4gP.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-CKqMFO_n.js";
import { c as useRouter, s as useRoute } from "./vue-router-Dl3cOHxO.js";
import { t as AnimatedCollapsibleContent_default } from "./AnimatedCollapsibleContent-o4TsrbRB.js";
import { $ as emptyChildTrace, H as N8N_CHAT_ACTION_TOOL_NAME, Q as applyForwardedChildChunk, R as APPROVAL_TOOL_NAME, W as richMessageSchema, Xa as SUB_AGENT_TASK_DIFFICULTIES, Y as PROVIDER_CAPABILITIES, ao as enumType, co as numberType, do as stringType, io as arrayType, lo as objectType, oo as literalType, ro as isDraftIntegration } from "./src-JwBmTNgK.js";
import { t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { t as useSettingsStore } from "./settings.store-ClBf6TZq.js";
import { n as useToast } from "./useToast-pp0Nt2mU.js";
import { Ar as CONTINUE_SESSION_ID_PARAM, Fr as CHAT_MESSAGE_STATUS, Ir as TOOL_CALL_STATE, Nr as NEW_SESSION_PARAM, br as AGENT_PREVIEW_VIEW } from "./constants-BP1FOJvU.js";
import { o as formatBytes } from "./typesUtils-DlQYqvHF.js";
import { t as useClipboard } from "./useClipboard-1pSyfErQ.js";
import { t as VueMarkdown } from "./VueMarkdown-H0C41E9_.js";
import { t as convertFileToBinaryData } from "./fileUtils-tQhnAWOl.js";
import { b as getTestChatMessages, g as getChatMessages, n as clearTestChatMessages, t as cancelAgentChatRun } from "./useAgentApi-sdUpTCk-.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-D0LoRFri.js";
import { t as isRecord } from "./is-record-DY9wcq5G.js";
import { t as useKeybindings } from "./useKeybindings-C7G1W-jX.js";
import { r as useProjectAgentsList } from "./useProjectAgentsList-DGESl4Ch.js";
import { r as resolveToolNameForDisplay } from "./toolDisplayName-Bc8yUCGO.js";
import { t as AgentPersonalisationIcon_default } from "./AgentPersonalisationIcon-v_afZ6dP.js";
import { t as CopyButton_default } from "./CopyButton-q0YRnNe9.js";
import { t as useAgentTelemetry } from "./useAgentTelemetry-CeEGMD3w.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-BKGvBqXP.js";
import { n as useAgentSessionsStore, t as useThreadTitle } from "./thread-title-Cu3m8Vz8.js";
import { n as ChatInputBase_default, t as AttachmentPreview_default } from "./AttachmentPreview-DWtLk_Rg.js";
//#region ../@n8n/design-system/src/components/N8nAiActivityStepButton/AiActivityStepButton.vue?vue&type=script&setup=true&lang.ts
var AiActivityStepButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiActivityStepButton",
	props: {
		size: { default: "small" },
		loading: {
			type: Boolean,
			default: false
		},
		interactive: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		function handleClick(event) {
			if (!props.interactive) {
				event.preventDefault();
				event.stopPropagation();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nButton_default), {
				variant: "ghost",
				size: props.size,
				class: normalizeClass([_ctx.$style.button, !props.interactive && _ctx.$style.nonInteractive]),
				onClick: handleClick
			}, {
				default: withCtx(() => [
					renderSlot(_ctx.$slots, "prefix"),
					createBaseVNode("span", { class: normalizeClass({
						[_ctx.$style.label]: true,
						[_ctx.$style.shimmer]: props.loading
					}) }, [renderSlot(_ctx.$slots, "default")], 2),
					renderSlot(_ctx.$slots, "icon"),
					renderSlot(_ctx.$slots, "suffix")
				]),
				_: 3
			}, 8, ["size", "class"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepButton/AiActivityStepButton.vue?vue&type=style&index=0&lang.module.scss
var button = "_button_1h8u3_390";
var nonInteractive = "_nonInteractive_1h8u3_405";
var label = "_label_1h8u3_420";
var shimmer$4 = "_shimmer_1h8u3_428";
var spin$4 = "_spin_1h8u3_1";
var opacityPulse$4 = "_opacityPulse_1h8u3_1";
var popoverIn$4 = "_popoverIn_1h8u3_1";
var fadeIn$4 = "_fadeIn_1h8u3_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_1h8u3_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_1h8u3_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_1h8u3_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_1h8u3_1";
var blurSwapIn$4 = "_blurSwapIn_1h8u3_1";
var blurSwapOut$4 = "_blurSwapOut_1h8u3_1";
var pulseGlow$4 = "_pulseGlow_1h8u3_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_1h8u3_1";
var fade$4 = "_fade_1h8u3_1";
var fadeInUp$4 = "_fadeInUp_1h8u3_1";
var fadeInDown$4 = "_fadeInDown_1h8u3_1";
var fadeInLeft$4 = "_fadeInLeft_1h8u3_1";
var fadeInRight$4 = "_fadeInRight_1h8u3_1";
var fadeOut$4 = "_fadeOut_1h8u3_1";
var fadeOutDown$4 = "_fadeOutDown_1h8u3_1";
var fadeOutUp$4 = "_fadeOutUp_1h8u3_1";
var fadeOutLeft$4 = "_fadeOutLeft_1h8u3_1";
var fadeOutRight$4 = "_fadeOutRight_1h8u3_1";
var ping$4 = "_ping_1h8u3_1";
var blinkBackground$4 = "_blinkBackground_1h8u3_1";
var typingBlink$4 = "_typingBlink_1h8u3_1";
var AiActivityStepButton_vue_vue_type_style_index_0_lang_module_default = {
	button,
	nonInteractive,
	label,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_1h8u3_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var AiActivityStepButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiActivityStepButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiActivityStepButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepChevron/AiActivityStepChevron.vue?vue&type=script&setup=true&lang.ts
var AiActivityStepChevron_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiActivityStepChevron",
	props: { open: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nIcon_default), {
				icon: "chevron-right",
				size: "large",
				class: normalizeClass([_ctx.$style.chevron, __props.open && _ctx.$style.open])
			}, null, 8, ["class"]);
		};
	}
});
var AiActivityStepChevron_vue_vue_type_style_index_0_lang_module_default = {
	chevron: "_chevron_ltx7a_125",
	open: "_open_ltx7a_130"
};
var AiActivityStepChevron_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiActivityStepChevron_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiActivityStepChevron_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStep/context.ts
var aiActivityStepGroupContext = Symbol("aiActivityStepGroupContext");
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepGroup/AiActivityStepGroup.vue
var AiActivityStepGroup_default = /* @__PURE__ */ defineComponent({
	__name: "AiActivityStepGroup",
	props: {
		label: {},
		size: { default: "medium" },
		loading: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		provide(aiActivityStepGroupContext, true);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), null, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(unref(AiActivityStepButton_default), {
						size: __props.size,
						loading: __props.loading
					}, {
						suffix: withCtx(() => [createVNode(unref(AiActivityStepChevron_default), { open: isOpen }, null, 8, ["open"])]),
						default: withCtx(() => [createTextVNode(toDisplayString(__props.label) + " ", 1)]),
						_: 2
					}, 1032, ["size", "loading"])]),
					_: 2
				}, 1024), createVNode(unref(AnimatedCollapsibleContent_default), null, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				})]),
				_: 3
			});
		};
	}
});
var AiActivityStepResultSection_vue_vue_type_style_index_0_lang_module_default = { resultSection: "_resultSection_y6cwe_125" };
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStepResultSection/AiActivityStepResultSection.vue
var _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.resultSection) }, [renderSlot(_ctx.$slots, "default")], 2);
}
var AiActivityStepResultSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1], ["__cssModules", { "$style": AiActivityStepResultSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nAiActivityStep/AiActivityStep.vue?vue&type=script&setup=true&lang.ts
var MAX_ERROR_TOOLTIP_LENGTH = 160;
var AiActivityStep_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiActivityStep",
	props: {
		label: {},
		loading: {
			type: Boolean,
			default: false
		},
		error: { default: void 0 },
		hasContent: {
			type: Boolean,
			default: true
		},
		wrapContent: {
			type: Boolean,
			default: false
		},
		hideErrorCallout: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const isNested = inject(aiActivityStepGroupContext, false);
		const errorTooltip = computed(() => props.error ? truncate(props.error, MAX_ERROR_TOOLTIP_LENGTH) : "");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({ [_ctx.$style.nestedRow]: unref(isNested) }) }, [unref(isNested) ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.rail)
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.railDot) }, null, 2)], 2)) : createCommentVNode("", true), props.hasContent ? (openBlock(), createBlock(unref(CollapsibleRoot_default), { key: 1 }, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(unref(AiActivityStepButton_default), {
						size: "small",
						loading: props.loading
					}, {
						icon: withCtx(() => [props.error ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							placement: "top"
						}, {
							content: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.errorTooltip) }, toDisplayString(errorTooltip.value), 3)]),
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "triangle-alert",
								color: "danger",
								size: "small",
								class: normalizeClass(_ctx.$style.activityErrorIcon)
							}, null, 8, ["class"])]),
							_: 1
						})) : createCommentVNode("", true)]),
						suffix: withCtx(() => [createVNode(unref(AiActivityStepChevron_default), { open: isOpen }, null, 8, ["open"])]),
						default: withCtx(() => [createTextVNode(toDisplayString(props.label) + " ", 1)]),
						_: 2
					}, 1032, ["loading"])]),
					_: 2
				}, 1024), createVNode(unref(AnimatedCollapsibleContent_default), null, {
					default: withCtx(() => [props.wrapContent ? (openBlock(), createBlock(unref(AiActivityStepResultSection_default), { key: 0 }, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					})) : renderSlot(_ctx.$slots, "default", { key: 1 }), props.error !== void 0 && !props.hideErrorCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 2,
						theme: "danger",
						class: normalizeClass(_ctx.$style.errorCallout)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.error), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 3
				})]),
				_: 3
			})) : (openBlock(), createBlock(unref(AiActivityStepButton_default), {
				key: 2,
				size: "small",
				loading: props.loading,
				interactive: false
			}, {
				icon: withCtx(() => [props.error ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.errorTooltip) }, toDisplayString(errorTooltip.value), 3)]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						color: "danger",
						size: "small",
						class: normalizeClass(_ctx.$style.activityErrorIcon)
					}, null, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)]),
				default: withCtx(() => [createTextVNode(toDisplayString(props.label) + " ", 1)]),
				_: 1
			}, 8, ["loading"]))], 2);
		};
	}
});
var AiActivityStep_vue_vue_type_style_index_0_lang_module_default = {
	nestedRow: "_nestedRow_g7dmv_125",
	rail: "_rail_g7dmv_132",
	railDot: "_railDot_g7dmv_165",
	errorTooltip: "_errorTooltip_g7dmv_175",
	errorCallout: "_errorCallout_g7dmv_179",
	activityErrorIcon: "_activityErrorIcon_g7dmv_184"
};
var AiActivityStep_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiActivityStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiActivityStep_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/agentTelemetry.utils.ts
/**
* Internal helper used to compute a stable 16-char hex `config_version` join
* key. Not a privacy mechanism — agent payloads carry the raw config fields.
*/
async function sha256Hex16(input) {
	const bytes = new TextEncoder().encode(input);
	const digest = await crypto.subtle.digest("SHA-256", bytes);
	return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 16);
}
function toolIdentifier(ref) {
	if (ref.type === "custom") return ref.id ?? "";
	if (ref.type === "workflow") return ref.name ?? ref.workflow ?? "";
	return ref.name ?? ref.node?.nodeType ?? "";
}
function toolIdentifiersFromConfig(config) {
	return (config?.tools ?? []).map(toolIdentifier).filter(Boolean).sort();
}
function skillIdentifiersFromConfig(config) {
	return (config?.skills ?? []).map((ref) => ref.id).filter(Boolean).sort();
}
function taskIdentifiersFromConfig(config) {
	return Array.from(new Set((config?.tasks ?? []).map((ref) => ref.id).filter(Boolean))).sort();
}
async function buildAgentConfigFingerprint(config, connectedTriggers, additionalConfiguredTriggers = []) {
	const instructions = config?.instructions ?? "";
	const tools = toolIdentifiersFromConfig(config);
	const skills = skillIdentifiersFromConfig(config);
	const tasks = taskIdentifiersFromConfig(config);
	const configuredTriggers = new Set([...(config?.integrations ?? []).filter((integration) => !isDraftIntegration(integration)).map((integration) => integration.type), ...additionalConfiguredTriggers]);
	const triggers = connectedTriggers.filter((trigger) => configuredTriggers.has(trigger)).sort();
	const vectorStores = (config?.vectorStores ?? []).map((store) => `${store.provider}:${store.name}`).sort();
	const memory = config?.memory ? {
		enabled: config.memory.enabled,
		storage: config.memory.storage
	} : null;
	const model = config?.model ?? null;
	return {
		instructions,
		tools,
		skills,
		tasks,
		triggers,
		vector_stores: vectorStores,
		memory,
		model,
		config_version: await sha256Hex16(JSON.stringify({
			instructions,
			tools,
			skills,
			tasks,
			triggers,
			vector_stores: vectorStores,
			memory,
			model
		}))
	};
}
function deriveAgentStatus(agent) {
	if (!agent?.activeVersionId) return "draft";
	return agent.versionId === agent.activeVersionId ? "production" : "draft";
}
//#endregion
//#region src/features/agents/utils/relative-time.ts
var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
/**
* Returns a short, recognisable description of when something happened:
*
*   - within 5s   → "just now"
*   - within 1m   → "Ns ago"
*   - within 1h   → "Nm ago"
*   - within 24h  → "Nh ago"
*   - calendar day = previous local day → "Yesterday"
*   - older       → short locale date, e.g. "Oct 3" / "3 Oct"
*
* The shared `app/components/TimeAgo.vue` (timeago.js-based) also exists, but
* it walks the full seconds→years ladder with no "Yesterday" step and never
* falls back to an absolute date — wrong shape for a chat-history list where
* old sessions should drop to a date so the dropdown stays scannable.
*/
function formatRelativeTimestamp(date, i18n, now = /* @__PURE__ */ new Date()) {
	const past = date instanceof Date ? date : new Date(date);
	const diff = now.getTime() - past.getTime();
	if (diff < 5 * SECOND) return i18n.justNow;
	if (diff < MINUTE) return i18n.secondsAgo(Math.floor(diff / SECOND));
	if (diff < HOUR) return i18n.minutesAgo(Math.floor(diff / MINUTE));
	if (isSameLocalDay(past, now)) return i18n.hoursAgo(Math.floor(diff / HOUR));
	if (isYesterdayLocal(past, now)) return i18n.yesterday;
	return past.toLocaleDateString(void 0, {
		month: "short",
		day: "numeric"
	});
}
function isSameLocalDay(a, b) {
	return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isYesterdayLocal(past, now) {
	const yesterday = new Date(now);
	yesterday.setDate(now.getDate() - 1);
	return isSameLocalDay(past, yesterday);
}
function useRelativeTimestamp() {
	const i18n = useI18n();
	const strings = {
		justNow: i18n.baseText("agents.relativeTime.justNow"),
		secondsAgo: (n) => i18n.baseText("agents.relativeTime.secondsAgo", { interpolate: { count: String(n) } }),
		minutesAgo: (n) => i18n.baseText("agents.relativeTime.minutesAgo", { interpolate: { count: String(n) } }),
		hoursAgo: (n) => i18n.baseText("agents.relativeTime.hoursAgo", { interpolate: { count: String(n) } }),
		yesterday: i18n.baseText("agents.relativeTime.yesterday")
	};
	return (date) => formatRelativeTimestamp(date, strings);
}
//#endregion
//#region src/features/agents/composables/useAgentBuilderSession.ts
/**
* Max chars for session-name display in the preview breadcrumb dropdown trigger
* and its menu rows. Long titles otherwise crowd the header actions.
*/
var SESSION_TITLE_MAX_CHARS = 64;
/**
* Owns the preview chat-session state:
*
* - `continueSessionId` — set via the URL query string for shareable deep-links
*   into a specific session. Takes precedence when route backing is enabled.
* - `activeChatSessionId` — the in-tab session selection. Used exclusively
*   when route backing is disabled and as a fallback otherwise.
*
* Plus the session-picker dropdown menu and titles, all driven off the
* `agentSessionsStore` thread list.
*/
function useAgentBuilderSession({ routeBacked }) {
	const route = useRoute();
	const router = useRouter();
	const i18n = useI18n();
	const sessionsStore = useAgentSessionsStore();
	const threadTitleOf = useThreadTitle();
	const relativeTimeOf = useRelativeTimestamp();
	const activeChatSessionId = ref(null);
	const pendingRouteSessionId = ref(null);
	const ephemeralSessionId = ref(null);
	const continueSessionId = computed(() => {
		const raw = route.query[CONTINUE_SESSION_ID_PARAM];
		const value = Array.isArray(raw) ? raw[0] : raw;
		return typeof value === "string" && value.length > 0 ? value : void 0;
	});
	const effectiveSessionId = computed(() => (routeBacked.value ? pendingRouteSessionId.value ?? continueSessionId.value : void 0) ?? activeChatSessionId.value ?? void 0);
	watch([routeBacked, continueSessionId], ([isRouteBacked, routeSessionId]) => {
		if (!isRouteBacked) {
			pendingRouteSessionId.value = null;
			return;
		}
		if (routeSessionId && routeSessionId !== ephemeralSessionId.value) ephemeralSessionId.value = null;
		if (pendingRouteSessionId.value !== null) pendingRouteSessionId.value = null;
		if (routeSessionId) activeChatSessionId.value = routeSessionId;
	}, { immediate: true });
	watch(activeChatSessionId, (sessionId) => {
		if (sessionId === null) {
			pendingRouteSessionId.value = null;
			ephemeralSessionId.value = null;
		} else {
			if (ephemeralSessionId.value !== null && sessionId !== ephemeralSessionId.value) ephemeralSessionId.value = null;
			if (routeBacked.value && sessionId !== continueSessionId.value) pendingRouteSessionId.value = sessionId;
		}
	});
	const currentSessionIsEphemeral = computed(() => ephemeralSessionId.value !== null && ephemeralSessionId.value === effectiveSessionId.value);
	/**
	* The current session is "empty" until it's been persisted as a thread —
	* a freshly minted `activeChatSessionId` doesn't show up in `threads` until
	* the user sends the first message.
	*/
	const currentSessionHasMessages = computed(() => {
		const id = effectiveSessionId.value;
		if (!id) return false;
		return (sessionsStore.threads ?? []).some((t) => t.id === id);
	});
	const currentSessionTitle = computed(() => {
		const id = effectiveSessionId.value;
		if (!id) return "";
		const thread = (sessionsStore.threads ?? []).find((t) => t.id === id);
		if (!thread) return i18n.baseText("agents.builder.chat.newChat.label");
		return truncate(threadTitleOf(thread), SESSION_TITLE_MAX_CHARS);
	});
	const sessionMenu = computed(() => {
		const threads = sessionsStore.threads ?? [];
		if (threads.length === 0) return [{
			id: "__empty__",
			title: i18n.baseText("agents.builder.chat.sessionPicker.empty"),
			disabled: true
		}];
		return threads.map((thread) => ({
			id: thread.id,
			title: "",
			label: truncate(threadTitleOf(thread), SESSION_TITLE_MAX_CHARS),
			when: relativeTimeOf(thread.updatedAt)
		}));
	});
	function selectSession(id, ephemeral = false) {
		activeChatSessionId.value = id;
		ephemeralSessionId.value = ephemeral ? id : null;
		if (!routeBacked.value) return;
		pendingRouteSessionId.value = id;
		const query = {
			...route.query,
			[CONTINUE_SESSION_ID_PARAM]: id
		};
		if (ephemeral) delete query[NEW_SESSION_PARAM];
		router.replace({ query });
	}
	function setSessionInUrl(id) {
		selectSession(id);
	}
	function clearContinueSessionParam() {
		if (!routeBacked.value) return;
		const { [CONTINUE_SESSION_ID_PARAM]: _dropped, ...rest } = route.query;
		router.replace({ query: rest });
	}
	function onSessionPick(id) {
		if (id === "__empty__") return;
		selectSession(id);
	}
	function onNewChat() {
		selectSession(crypto.randomUUID(), true);
	}
	return {
		activeChatSessionId,
		continueSessionId,
		effectiveSessionId,
		currentSessionHasMessages,
		currentSessionTitle,
		currentSessionIsEphemeral,
		sessionMenu,
		setSessionInUrl,
		clearContinueSessionParam,
		onSessionPick,
		onNewChat
	};
}
//#endregion
//#region src/features/ai/shared/thinking.utils.ts
/** First sentence of streamed markdown-like text, for thinking status lines. */
function firstSentence(content) {
	const plain = content.replace(/[*_`#]/g, "").trim();
	const match = plain.match(/^.*?[.!?](?=\s|$)/s);
	return (match ? match[0] : plain).trim();
}
//#endregion
//#region src/features/ai/shared/components/AiReasoningBlock.vue?vue&type=script&setup=true&lang.ts
var AiReasoningBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiReasoningBlock",
	props: {
		entry: {},
		streaming: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const label = computed(() => firstSentence(props.entry.content) || i18n.baseText("ai.reasoning"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AiActivityStep_default), {
				label: label.value,
				loading: props.streaming
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.reasoningPanel) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.reasoningScroll) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.reasoningContent) }, toDisplayString(props.entry.content), 3)], 2)], 2)]),
				_: 1
			}, 8, ["label", "loading"]);
		};
	}
});
var AiReasoningBlock_vue_vue_type_style_index_0_lang_module_default = {
	reasoningPanel: "_reasoningPanel_nxblu_125",
	reasoningScroll: "_reasoningScroll_nxblu_134",
	reasoningContent: "_reasoningContent_nxblu_144"
};
var AiReasoningBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiReasoningBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiReasoningBlock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useSubAgentNames.ts
/**
* Resolves sub-agent ids → friendly names for delegate labels. Wraps the
* cached/deduped project agents list and loads it lazily — only once the caller
* signals (via `isNeeded`) that the current content actually contains
* delegations. Shared by the chat tool step and the session timeline.
*/
function useSubAgentNames(projectId, isNeeded) {
	const { list, ensureLoaded } = useProjectAgentsList(projectId);
	const subAgentNameById = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const agent of list.value ?? []) map.set(agent.id, agent.name);
		return map;
	});
	watch([isNeeded, projectId], ([needed, id]) => {
		if (needed && id) ensureLoaded().catch(() => {});
	}, { immediate: true });
	return { subAgentNameById };
}
//#endregion
//#region src/features/ai/shared/agentsChat/delegateTool.ts
/**
* Name of the SDK tool a parent agent calls to hand a task to a sub-agent.
* Mirrors `DELEGATE_SUB_AGENT_TOOL_NAME` in `@n8n/agents` (not FE-importable),
* so the chat can special-case the tool call and render it as an expandable
* tool step.
*/
var DELEGATE_SUB_AGENT_TOOL_NAME = "delegate_subagent";
/** Mirrors `DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE` in `@n8n/agents`. */
var DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE = "agents.chat.delegate.childSuspendUnsupported";
var delegateInputSchema = objectType({
	subAgentId: stringType().min(1),
	taskName: stringType().optional(),
	difficulty: enumType(SUB_AGENT_TASK_DIFFICULTIES).optional()
});
var delegateOutputSchema = objectType({
	status: enumType([
		"completed",
		"failed",
		"suspended"
	]).optional(),
	answer: stringType().optional(),
	error: stringType().optional(),
	model: stringType().optional()
});
var SUB_AGENT_DIFFICULTY_I18N_KEY = {
	low: "agents.chat.difficulty.low",
	medium: "agents.chat.difficulty.medium",
	high: "agents.chat.difficulty.high"
};
function isDelegateSubAgentTool(toolName) {
	return toolName === DELEGATE_SUB_AGENT_TOOL_NAME;
}
/** Parse a delegate tool-call input; returns `undefined` when it isn't an object. */
function parseDelegateInput(input) {
	const result = delegateInputSchema.safeParse(input);
	return result.success ? result.data : void 0;
}
/**
* Parse a delegate tool-call output; returns `undefined` when it isn't an object
* (e.g. a rejected tool call whose output is the raw error string).
*/
function parseDelegateOutput(output) {
	const result = delegateOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function getDelegateDifficulty(input) {
	return parseDelegateInput(input)?.difficulty;
}
/** One-line localized difficulty label for a delegate tool call. */
function getDelegateDifficultySummary(input, i18n) {
	const difficulty = getDelegateDifficulty(input);
	return difficulty ? i18n.baseText(SUB_AGENT_DIFFICULTY_I18N_KEY[difficulty]) : void 0;
}
/** Localize a delegate tool error when it is a known i18n key. */
function formatDelegateError(error, i18n) {
	if (i18n && error === "agents.chat.delegate.childSuspendUnsupported") return i18n.baseText(DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE);
	return error;
}
/**
* True when a `delegate_subagent` call resolved with a failed result. Such a
* call settles successfully at the tool layer, so its step must be flipped to an
* error state explicitly (both live and on reload).
*/
function isFailedDelegateOutput(toolName, output) {
	if (!isDelegateSubAgentTool(toolName)) return false;
	return parseDelegateOutput(output)?.status === "failed";
}
/** Humanize a snake/kebab task name, e.g. `research_api` → `Research api`. */
function humanizeTaskName(taskName) {
	const normalized = taskName?.trim().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	if (!normalized) return "";
	return normalized.charAt(0).toLocaleUpperCase() + normalized.slice(1);
}
/** Friendly label for a raw sub-agent id (delegate hints, todo delegateHint, etc.). */
function resolveSubAgentIdForDisplay(subAgentId, nameById) {
	if (subAgentId === "inline") return humanizeTaskName("inline");
	const resolved = nameById.get(subAgentId)?.trim();
	if (resolved) return resolved;
	return humanizeTaskName(subAgentId) || subAgentId;
}
function resolveSubAgentName(input, nameById) {
	const parsed = parseDelegateInput(input);
	const resolved = parsed?.subAgentId && parsed.subAgentId !== "inline" ? nameById.get(parsed.subAgentId)?.trim() : void 0;
	if (resolved) return resolved;
	return humanizeTaskName(parsed?.taskName);
}
/**
* Format a delegate label: `Sub-agent · <name>` when a name resolved, otherwise
* the bare `Sub-agent` fallback. Takes the i18n instance (rather than resolving
* keys at the call site) so the chat, timeline row, and detail panel stay in
* sync.
*/
function delegateLabel(i18n, name) {
	return name ? i18n.baseText("agents.chat.delegate.label", { interpolate: { name } }) : i18n.baseText("agents.chat.delegate.labelFallback");
}
//#endregion
//#region src/features/agents/utils/write-todos-tool.ts
/**
* Name of the SDK tool the parent agent calls to maintain a structured task list.
* Mirrors `WRITE_TODOS_TOOL_NAME` in `@n8n/agents` (not FE-importable).
*/
var WRITE_TODOS_TOOL_NAME = "write_todos";
var todoStatusSchema = enumType([
	"pending",
	"in_progress",
	"completed",
	"blocked",
	"cancelled"
]);
var todoDifficultySchema = enumType(SUB_AGENT_TASK_DIFFICULTIES);
var todoItemSchema = objectType({
	id: stringType().min(1),
	content: stringType().min(1),
	status: todoStatusSchema,
	difficulty: todoDifficultySchema.optional(),
	delegateHint: objectType({
		subAgentId: stringType().optional(),
		expectedOutput: stringType().optional()
	}).optional()
});
var writeTodosOutputSchema = objectType({
	status: literalType("ok"),
	todoCount: numberType(),
	todos: arrayType(todoItemSchema)
});
var writeTodosFailedOutputSchema = objectType({
	status: literalType("failed"),
	error: stringType()
});
var STATUS_I18N_KEY = {
	in_progress: "agents.chat.writeTodos.status.inProgress",
	pending: "agents.chat.writeTodos.status.pending",
	completed: "agents.chat.writeTodos.status.completed",
	blocked: "agents.chat.writeTodos.status.blocked",
	cancelled: "agents.chat.writeTodos.status.cancelled"
};
var STATUS_ORDER = [
	"in_progress",
	"pending",
	"completed",
	"blocked",
	"cancelled"
];
function isWriteTodosTool(toolName) {
	return toolName === WRITE_TODOS_TOOL_NAME;
}
function parseWriteTodosOutput(output) {
	const result = writeTodosOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function parseWriteTodosFailedOutput(output) {
	const result = writeTodosFailedOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function formatWriteTodosErrorText(output) {
	const failed = parseWriteTodosFailedOutput(output);
	if (failed) {
		const error = failed.error.trim();
		return error.length > 0 ? error : void 0;
	}
	if (typeof output === "string") {
		const trimmed = output.trim();
		return trimmed.length > 0 ? trimmed : void 0;
	}
}
function writeTodosLabel(i18n) {
	return i18n.baseText("agents.chat.writeTodos.label");
}
function countIncompleteTodos(todos) {
	return todos.filter((todo) => todo.status !== "completed").length;
}
function writeTodosSummaryLabel(i18n, incompleteTodoCount) {
	if (incompleteTodoCount === 0) return i18n.baseText("agents.chat.writeTodos.summary.done");
	const key = incompleteTodoCount === 1 ? "agents.chat.writeTodos.summary.one" : "agents.chat.writeTodos.summary.other";
	return i18n.baseText(key, { interpolate: { count: String(incompleteTodoCount) } });
}
function writeTodosStatusLabel(i18n, status) {
	return i18n.baseText(STATUS_I18N_KEY[status]);
}
function writeTodosDifficultyLabel(i18n, difficulty) {
	return i18n.baseText(SUB_AGENT_DIFFICULTY_I18N_KEY[difficulty]);
}
function formatTodoItem(todo, i18n, subAgentNameById) {
	const hints = [];
	if (todo.difficulty) hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.difficulty")}: ${writeTodosDifficultyLabel(i18n, todo.difficulty)}`);
	if (todo.delegateHint?.subAgentId) {
		const displayName = resolveSubAgentIdForDisplay(todo.delegateHint.subAgentId, subAgentNameById ?? /* @__PURE__ */ new Map());
		hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.subAgent")}: ${displayName}`);
	}
	if (todo.delegateHint?.expectedOutput) hints.push(`${i18n.baseText("agents.chat.writeTodos.hint.expectedOutput")}: ${todo.delegateHint.expectedOutput}`);
	const suffix = hints.length > 0 ? ` _(${hints.join("; ")})_` : "";
	return `- ${todo.content}${suffix}`;
}
/** Format parsed write_todos output as Markdown for the expandable details panel. */
function formatWriteTodosMarkdown(output, i18n, subAgentNameById) {
	const errorText = formatWriteTodosErrorText(output);
	if (errorText) return errorText;
	const parsed = parseWriteTodosOutput(output);
	if (!parsed || !i18n || parsed.todos.length === 0) return void 0;
	const sections = [];
	for (const status of STATUS_ORDER) {
		const items = parsed.todos.filter((todo) => todo.status === status);
		if (items.length === 0) continue;
		sections.push(`**${writeTodosStatusLabel(i18n, status)}**`);
		sections.push(items.map((todo) => formatTodoItem(todo, i18n, subAgentNameById)).join("\n"));
	}
	return sections.join("\n\n");
}
//#endregion
//#region src/features/agents/utils/tool-call-details.ts
function isSettledState(state) {
	return state === TOOL_CALL_STATE.DONE || state === TOOL_CALL_STATE.ERROR;
}
function formatDelegateDetails(output, i18n) {
	const parsed = parseDelegateOutput(output);
	if (!parsed) return void 0;
	const answer = parsed.answer?.trim();
	if (answer) return answer;
	const error = parsed.error?.trim();
	if (error) return formatDelegateError(error, i18n);
}
function formatExpandableDetails(toolName, output, i18n, subAgentNameById) {
	if (isDelegateSubAgentTool(toolName)) return formatDelegateDetails(output, i18n);
	if (isWriteTodosTool(toolName)) return formatWriteTodosMarkdown(output, i18n, subAgentNameById);
}
/**
* Returns Markdown/text for the expandable tool-call details panel.
* Only `delegate_subagent` and `write_todos` have purpose-built detail views;
* other tools are not expandable until their UX is designed.
*/
function getToolCallDetails(tc, i18n, subAgentNameById) {
	if (!isSettledState(tc.state)) return void 0;
	return formatExpandableDetails(tc.tool, tc.output, i18n, subAgentNameById);
}
//#endregion
//#region src/features/agents/components/AgentChatToolSteps.vue?vue&type=script&setup=true&lang.ts
var AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatToolSteps",
	props: {
		toolCalls: {},
		projectId: {},
		canFixWithAssistant: { type: Boolean },
		executionId: {}
	},
	emits: ["fixWithAssistant"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const showFix = computed(() => Boolean(props.canFixWithAssistant && props.executionId));
		const fixableFailures = computed(() => {
			if (!showFix.value) return [];
			const failures = [];
			for (const toolCall of props.toolCalls) {
				if (toolCall.state !== TOOL_CALL_STATE.ERROR) continue;
				const error = toolStepError(toolCall)?.trim();
				if (!error) continue;
				failures.push({
					toolCallId: toolCall.toolCallId,
					toolName: toolCall.tool,
					toolDisplayName: toolStepLabel(toolCall),
					error,
					...toolCall.startTime !== void 0 ? { startedAt: toolCall.startTime } : {},
					...toolCall.endTime !== void 0 ? { endedAt: toolCall.endTime } : {}
				});
			}
			return failures;
		});
		const fixableErrorTexts = computed(() => {
			return [...new Set(fixableFailures.value.map(({ error }) => error))];
		});
		function toolCallsNeedSubAgentNames(toolCalls) {
			return toolCalls.some((tc) => {
				if (isDelegateSubAgentTool(tc.tool)) return true;
				if (!isWriteTodosTool(tc.tool)) return false;
				return parseWriteTodosOutput(tc.output)?.todos.some((todo) => Boolean(todo.delegateHint?.subAgentId)) ?? false;
			});
		}
		const { subAgentNameById } = useSubAgentNames(toRef(() => props.projectId ?? ""), () => toolCallsNeedSubAgentNames(props.toolCalls));
		function getToolDisplayName(toolName) {
			return resolveToolNameForDisplay(toolName, i18n);
		}
		function toolStepLabel(tc) {
			if (isDelegateSubAgentTool(tc.tool)) return i18n.baseText("agents.chat.delegate.labelFallback");
			if (isWriteTodosTool(tc.tool)) return writeTodosLabel(i18n);
			return getToolDisplayName(tc.tool);
		}
		function toolStepMetadata(tc) {
			if (isDelegateSubAgentTool(tc.tool)) return [resolveSubAgentName(tc.input, subAgentNameById.value), getDelegateDifficultySummary(tc.input, i18n)].filter((part) => Boolean(part));
			if (isWriteTodosTool(tc.tool)) {
				const parsed = parseWriteTodosOutput(tc.output);
				if (parsed) return [writeTodosSummaryLabel(i18n, countIncompleteTodos(parsed.todos))];
			}
			if (tc.displaySummary) return [tc.displaySummary];
			return [];
		}
		function hasToolData(tc) {
			return tc.input !== void 0 || tc.output !== void 0;
		}
		/** Render a delegated child's live steps through this same component, so they look
		*  identical to the parent's own tool steps. */
		function childToolCalls(steps) {
			return steps.map((step) => ({
				tool: step.toolName,
				toolCallId: step.toolCallId,
				state: step.running ? TOOL_CALL_STATE.RUNNING : TOOL_CALL_STATE.DONE
			}));
		}
		/** Traces recorded before empty segments were dropped can still carry reasoning
		*  the provider never revealed, which would render as blank rows. */
		function childReasoningSegments(childProgress) {
			return childProgress.reasoningSegments.filter((segment) => segment.content.length > 0);
		}
		function formatToolData(value) {
			if (typeof value === "string") return value;
			return JSON.stringify(value, null, 2) ?? String(value);
		}
		function isEmptyToolErrorPayload(value) {
			if (value === void 0 || value === null) return true;
			if (typeof value === "string") return value.trim().length === 0;
			if (typeof value === "object" && !Array.isArray(value)) return Object.keys(value).length === 0;
			return false;
		}
		function toolStepView(tc) {
			const details = getToolCallDetails(tc, i18n, subAgentNameById.value) ?? "";
			const metadata = toolStepMetadata(tc);
			const hasChildProgress = Boolean(tc.childProgress);
			return {
				label: [toolStepLabel(tc), ...metadata].join(" · "),
				details,
				hasRawData: details.length === 0 && hasToolData(tc) && !hasChildProgress,
				expandable: details.length > 0 || hasToolData(tc) || hasChildProgress
			};
		}
		function toolStepError(tc) {
			if (tc.state !== TOOL_CALL_STATE.ERROR) return void 0;
			if (isEmptyToolErrorPayload(tc.output)) return i18n.baseText("agents.chat.toolError.generic");
			return formatToolData(tc.output);
		}
		function emitFixWithAssistant() {
			if (fixableFailures.value.length === 0) return;
			emit("fixWithAssistant", fixableFailures.value);
		}
		function isToolStepLoading(tc) {
			return tc.state === TOOL_CALL_STATE.PENDING || tc.state === TOOL_CALL_STATE.RUNNING || tc.state === TOOL_CALL_STATE.SUSPENDED;
		}
		function groupLabel() {
			return i18n.baseText("instanceAi.activitySummary.toolCalls", {
				adjustToNumber: props.toolCalls.length,
				interpolate: { count: String(props.toolCalls.length) }
			});
		}
		function hasActiveToolCall() {
			return props.toolCalls.some((tc) => tc.state === TOOL_CALL_STATE.PENDING || tc.state === TOOL_CALL_STATE.RUNNING);
		}
		return (_ctx, _cache) => {
			const _component_AgentChatToolSteps = resolveComponent("AgentChatToolSteps", true);
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.toolSteps) }, [__props.toolCalls.length > 1 ? (openBlock(), createBlock(unref(AiActivityStepGroup_default), {
				key: 0,
				label: groupLabel(),
				size: "small",
				loading: hasActiveToolCall()
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.toolCalls, (tc) => {
					return openBlock(), createElementBlock(Fragment, { key: tc.toolCallId }, [(openBlock(true), createElementBlock(Fragment, null, renderList([toolStepView(tc)], (view) => {
						return openBlock(), createBlock(unref(AiActivityStep_default), {
							key: `${tc.toolCallId}-${view.label}`,
							label: view.label,
							loading: isToolStepLoading(tc),
							error: toolStepError(tc),
							"hide-error-callout": showFix.value && tc.state === unref(TOOL_CALL_STATE).ERROR,
							"has-content": view.expandable
						}, {
							default: withCtx(() => [
								tc.childProgress ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.childProgress),
									"data-test-id": "agent-chat-delegate-child-progress"
								}, [
									tc.childProgress.steps.length > 0 ? (openBlock(), createBlock(_component_AgentChatToolSteps, {
										key: 0,
										"tool-calls": childToolCalls(tc.childProgress.steps),
										"project-id": __props.projectId
									}, null, 8, ["tool-calls", "project-id"])) : createCommentVNode("", true),
									(openBlock(true), createElementBlock(Fragment, null, renderList(childReasoningSegments(tc.childProgress), (segment) => {
										return openBlock(), createBlock(AiReasoningBlock_default, {
											key: segment.id,
											entry: segment,
											streaming: segment.endTime === void 0
										}, null, 8, ["entry", "streaming"]);
									}), 128)),
									tc.childProgress.text && !view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
										key: 1,
										"model-value": tc.childProgress.text,
										readonly: "",
										variant: "ghost",
										"show-toolbar": "never",
										"max-height": "240px",
										class: normalizeClass(_ctx.$style.answer)
									}, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
								], 2)) : createCommentVNode("", true),
								view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
									key: 1,
									"model-value": view.details,
									readonly: "",
									variant: "ghost",
									"show-toolbar": "never",
									"max-height": "240px",
									class: normalizeClass(_ctx.$style.answer)
								}, null, 8, ["model-value", "class"])) : createCommentVNode("", true),
								view.hasRawData ? (openBlock(), createElementBlock("div", {
									key: 2,
									class: normalizeClass(_ctx.$style.toolDataList)
								}, [tc.input !== void 0 ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.toolDataSection)
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), tc.output !== void 0 ? (openBlock(), createElementBlock("div", {
									key: 1,
									class: normalizeClass(_ctx.$style.toolDataSection)
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
							]),
							_: 2
						}, 1032, [
							"label",
							"loading",
							"error",
							"hide-error-callout",
							"has-content"
						]);
					}), 128))], 64);
				}), 128))]),
				_: 1
			}, 8, ["label", "loading"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.toolCalls, (tc) => {
				return openBlock(), createBlock(unref(AiActivityStep_default), {
					key: tc.toolCallId,
					label: toolStepView(tc).label,
					loading: isToolStepLoading(tc),
					error: toolStepError(tc),
					"hide-error-callout": showFix.value && tc.state === unref(TOOL_CALL_STATE).ERROR,
					"has-content": toolStepView(tc).expandable
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList([toolStepView(tc)], (view) => {
						return openBlock(), createElementBlock(Fragment, { key: view.label }, [
							tc.childProgress ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.childProgress),
								"data-test-id": "agent-chat-delegate-child-progress"
							}, [
								tc.childProgress.steps.length > 0 ? (openBlock(), createBlock(_component_AgentChatToolSteps, {
									key: 0,
									"tool-calls": childToolCalls(tc.childProgress.steps),
									"project-id": __props.projectId
								}, null, 8, ["tool-calls", "project-id"])) : createCommentVNode("", true),
								(openBlock(true), createElementBlock(Fragment, null, renderList(childReasoningSegments(tc.childProgress), (segment) => {
									return openBlock(), createBlock(AiReasoningBlock_default, {
										key: segment.id,
										entry: segment,
										streaming: segment.endTime === void 0
									}, null, 8, ["entry", "streaming"]);
								}), 128)),
								tc.childProgress.text && !view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
									key: 1,
									"model-value": tc.childProgress.text,
									readonly: "",
									variant: "ghost",
									"show-toolbar": "never",
									"max-height": "240px",
									class: normalizeClass(_ctx.$style.answer)
								}, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
							], 2)) : createCommentVNode("", true),
							view.details ? (openBlock(), createBlock(unref(MarkdownEditor_default), {
								key: 1,
								"model-value": view.details,
								readonly: "",
								variant: "ghost",
								"show-toolbar": "never",
								"max-height": "240px",
								class: normalizeClass(_ctx.$style.answer)
							}, null, 8, ["model-value", "class"])) : createCommentVNode("", true),
							view.hasRawData ? (openBlock(), createElementBlock("div", {
								key: 2,
								class: normalizeClass(_ctx.$style.toolDataList)
							}, [tc.input !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.toolDataSection)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), tc.output !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.toolDataSection)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
						], 64);
					}), 128))]),
					_: 2
				}, 1032, [
					"label",
					"loading",
					"error",
					"hide-error-callout",
					"has-content"
				]);
			}), 128)), fixableErrorTexts.value.length > 0 ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "danger",
				"data-test-id": "agent-chat-tool-fix-with-assistant-callout"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					size: "small",
					variant: "subtle",
					"data-test-id": "agent-chat-tool-fix-with-assistant",
					onClick: emitFixWithAssistant
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "sparkles",
						size: "small"
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.preview.fixWithAssistant")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [fixableErrorTexts.value.length === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(fixableErrorTexts.value[0]), 1)], 64)) : (openBlock(), createElementBlock("ul", {
					key: 1,
					class: normalizeClass(_ctx.$style.errorList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(fixableErrorTexts.value, (error) => {
					return openBlock(), createElementBlock("li", { key: error }, toDisplayString(error), 1);
				}), 128))], 2))]),
				_: 1
			})) : createCommentVNode("", true)], 2);
		};
	}
});
var AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default = {
	toolSteps: "_toolSteps_brv5u_2",
	errorList: "_errorList_brv5u_6",
	childProgress: "_childProgress_brv5u_15",
	answer: "_answer_brv5u_28",
	toolDataList: "_toolDataList_brv5u_38",
	toolDataSection: "_toolDataSection_brv5u_46",
	toolDataLabel: "_toolDataLabel_brv5u_54",
	toolDataContent: "_toolDataContent_brv5u_62"
};
var AgentChatToolSteps_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatToolSteps_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatToolSteps_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/n8nChatInteraction.ts
/**
* Single-operation integration action tool input — any `<platform>_action`
* tool's `{ action, input: { message: { text?, card? } } }` shape, with the
* message validated against the SAME `richMessageSchema` the backend tool
* boundary uses (`@n8n/api-types/agents/rich-card.schema.ts`). Batch inputs
* (`actions: [...]`) never suspend and don't match this schema; they fall
* back to raw JSON rendering.
*/
var actionToolInputSchema = objectType({
	action: stringType(),
	input: objectType({ message: richMessageSchema }).passthrough()
}).passthrough();
/** Resume payload shape shared with the platform card path (component-mapper / bridge). */
var n8nChatResumeValueSchema = objectType({
	type: enumType(["button", "select"]),
	value: stringType(),
	id: stringType().optional()
}).passthrough();
var INTERACTIVE_COMPONENT_TYPES = new Set([
	"button",
	"select",
	"radio_select"
]);
/**
* Mirrors the backend's shouldAwaitResponse: explicit flag or interactive components.
*
* @see shouldAwaitResponse in packages/cli/src/modules/agents/integrations/integration-tool-execution.ts
*/
function isAwaitingCard(card) {
	if (card.awaitResponse === true) return true;
	return card.components.some((component) => INTERACTIVE_COMPONENT_TYPES.has(component.type) || component.type === "section" && component.button !== void 0);
}
/**
* Parse any integration action tool input (slack_action, chat_action, …)
* into its renderable card, or undefined when it carries none. Used for the
* live n8n chat cards and for session-log card previews of every integration.
*/
function parseIntegrationActionCard(input) {
	const parsed = actionToolInputSchema.safeParse(input);
	if (!parsed.success) return void 0;
	const { message } = parsed.data.input;
	if (!message.card) return void 0;
	return {
		text: message.text,
		card: message.card
	};
}
/** Parse a persisted/live chat_action tool input into a renderable card, or undefined. */
function parseN8nChatActionInput(input) {
	return parseIntegrationActionCard(input);
}
/**
* Human-readable label for a card's resume value: the clicked button's label
* or the chosen option's label, falling back to the raw value. Used for the
* tool-step summary once an answered card clears from the chat.
*/
function cardChoiceLabel(card, resume) {
	if (resume.type === "button") {
		for (const component of card.components) {
			const candidates = component.type === "button" ? [component] : component.type === "section" && component.button ? [component.button] : [];
			for (const button of candidates) if (button.value === resume.value) return button.label ?? button.text ?? resume.value;
		}
		return resume.value;
	}
	for (const component of card.components) {
		if (component.type !== "select" && component.type !== "radio_select") continue;
		if (resume.id !== void 0 && component.id !== void 0 && component.id !== resume.id) continue;
		const option = component.options.find((candidate) => candidate.value === resume.value);
		if (option) return option.label;
	}
	return resume.value;
}
//#endregion
//#region src/features/ai/shared/agentsChat/interactiveSummary.ts
/**
* Build a one-line human-readable label for a resolved interactive tool call.
* Used by `AgentChatToolSteps` to show the user's answer beside the tool name
* (e.g. "→ n8n_chat_action · Approve & Send") so resolved cards leave a compact
* trace in scrollback instead of vanishing.
*
* Returns `undefined` for non-interactive tools or when the output isn't
* shaped as expected — callers fall back to rendering just the tool name.
*/
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function summariseToolCall(toolName, output, input) {
	if (!isPlainObject(output)) return void 0;
	if (toolName === "chat_action") {
		const resume = n8nChatResumeValueSchema.safeParse(output);
		if (!resume.success) return void 0;
		const parsed = parseN8nChatActionInput(input);
		if (!parsed) return resume.data.value;
		return cardChoiceLabel(parsed.card, resume.data);
	}
}
//#endregion
//#region src/features/ai/shared/agentsChat/messageMappers.ts
function syncLegacyInteractive(message) {
	const interactives = message.interactives;
	if (!interactives?.length) {
		delete message.interactive;
		return;
	}
	message.interactive = interactives.find((payload) => payload.resolvedAt === void 0) ?? interactives[0];
}
function getMessageInteractives(message) {
	if (message.interactives?.length) return message.interactives;
	return message.interactive ? [message.interactive] : [];
}
function setMessageInteractives(message, interactives) {
	if (interactives.length === 0) {
		delete message.interactives;
		delete message.interactive;
		return;
	}
	message.interactives = interactives;
	syncLegacyInteractive(message);
}
function upsertMessageInteractive(message, interactive) {
	const interactives = [...getMessageInteractives(message)];
	const index = interactives.findIndex((payload) => payload.toolCallId === interactive.toolCallId);
	if (index === -1) interactives.push(interactive);
	else interactives[index] = interactive;
	setMessageInteractives(message, interactives);
}
function getMessageInteractive(message, toolCallId) {
	return getMessageInteractives(message).find((payload) => payload.toolCallId === toolCallId);
}
function findOpenInteractive(messages) {
	for (const message of messages) {
		const open = getMessageInteractives(message).find((payload) => payload.resolvedAt === void 0);
		if (open) return open;
	}
}
/** True when a suspend payload is the approval tool's renderable input. */
function isApprovalSuspendInput(value) {
	return parseApprovalInput(value) !== void 0;
}
function parseApprovalInput(value) {
	if (!isRecord(value)) return void 0;
	if (value.type !== "approval") return void 0;
	if (typeof value.toolName !== "string" || value.toolName.length === 0) return void 0;
	return {
		type: "approval",
		toolName: value.toolName,
		...typeof value.displayName === "string" && value.displayName.length > 0 && { displayName: value.displayName },
		args: value.args,
		...value.details !== void 0 && { details: value.details }
	};
}
function preserveApprovalDetails(next, previous) {
	const nextApproval = parseApprovalInput(next);
	const previousApproval = parseApprovalInput(previous);
	if (!nextApproval || nextApproval.details !== void 0 || previousApproval?.details === void 0) return next;
	return {
		...nextApproval,
		details: previousApproval.details
	};
}
function isDeclinedToolOutput(value) {
	return isRecord(value) && value.declined === true;
}
/**
* Given a tool call belonging to one of the interactive tools still rendered
* in agents chat (`approval`, `chat_action`), reconstruct an
* `InteractivePayload` for it. The result is:
*
* - **resolved**: when `output` is present.
* - **open**: when `output` is absent — the card renders as an active
*   awaiting-user prompt. Used when a refresh during a suspension restored the
*   suspended assistant turn from the open checkpoint.
*
* Returns `undefined` when the tool name isn't interactive or input parsing fails.
*/
function rebuildInteractiveFromHistory(tc) {
	const approvalInput = parseApprovalInput(tc.suspendPayload) ?? parseApprovalInput(tc.input);
	if (approvalInput) {
		const resolved = tc.output !== void 0;
		return {
			toolCallId: tc.toolCallId,
			...resolved && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: APPROVAL_TOOL_NAME,
			input: approvalInput,
			...resolved && tc.canceled !== true && !isDelegateSubAgentTool(tc.tool) && { resolvedValue: { approved: !isDeclinedToolOutput(tc.output) } }
		};
	}
	if (tc.tool === "chat_action") {
		const input = parseN8nChatActionInput(tc.input);
		if (!input) return void 0;
		if (tc.output === void 0 && !isAwaitingCard(input.card)) return void 0;
		const resolved = tc.output !== void 0 ? n8nChatResumeValueSchema.safeParse(tc.output) : null;
		return {
			toolCallId: tc.toolCallId,
			...tc.output !== void 0 && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: N8N_CHAT_ACTION_TOOL_NAME,
			input,
			...tc.canceled !== true && resolved?.success && { resolvedValue: resolved.data }
		};
	}
}
/**
* Convert persisted agent messages into the frontend ChatMessage format.
*
* Whenever a tool call is interactive, we attach a reconstructed
* `InteractivePayload` so the UI re-renders the card in either its open
* (awaiting user) or resolved (disabled) state.
*/
function convertDbMessages(dbMessages) {
	const result = [];
	for (const msg of dbMessages) {
		if (!msg.role || !Array.isArray(msg.content)) continue;
		const role = msg.role === "user" ? "user" : msg.role === "assistant" ? "assistant" : null;
		if (role === null) continue;
		let text = "";
		let thinking = "";
		const thinkingSegments = [];
		const toolCalls = [];
		const renderParts = [];
		const interactives = [];
		const attachments = [];
		let status = msg.executionStatus === "error" ? CHAT_MESSAGE_STATUS.ERROR : void 0;
		for (const [partIndex, part] of msg.content.entries()) if (part.type === "text" && part.text) {
			text += part.text;
			renderParts.push({
				type: "text",
				text: part.text
			});
		} else if (part.type === "file" && part.fileId) attachments.push({
			fileId: part.fileId,
			fileName: part.fileName ?? "attachment",
			mimeType: part.mimeType ?? "application/octet-stream",
			sizeBytes: part.sizeBytes
		});
		else if (part.type === "reasoning" && part.text) {
			thinking += part.text;
			thinkingSegments.push({
				id: `${msg.id}:reasoning:${partIndex}`,
				content: part.text,
				...part.startTime !== void 0 && { startTime: part.startTime },
				...part.endTime !== void 0 && { endTime: part.endTime }
			});
		} else if (part.type === "tool-call" && part.toolName) {
			let state;
			let output;
			const canceled = part.canceled === true;
			if (part.state === "resolved") {
				output = part.output;
				if (canceled) state = TOOL_CALL_STATE.CANCELLED;
				else if (isFailedDelegateOutput(part.toolName, part.output)) state = TOOL_CALL_STATE.ERROR;
				else state = TOOL_CALL_STATE.DONE;
			} else if (part.state === "rejected") {
				state = TOOL_CALL_STATE.ERROR;
				output = part.error;
			} else if (msg.executionStatus === "error") {
				state = TOOL_CALL_STATE.ERROR;
				output = part.error;
			} else {
				state = TOOL_CALL_STATE.RUNNING;
				output = void 0;
			}
			const toolCall = {
				tool: part.toolName,
				toolCallId: part.toolCallId ?? "",
				input: part.input,
				...output !== void 0 && { output },
				...canceled && { canceled },
				state,
				...part.startTime !== void 0 && { startTime: part.startTime },
				...part.endTime !== void 0 && { endTime: part.endTime },
				...part.suspendPayload !== void 0 && { suspendPayload: part.suspendPayload },
				...part.childTrace && { childProgress: part.childTrace },
				displaySummary: summariseToolCall(part.toolName, output, part.input)
			};
			toolCalls.push(toolCall);
			const rebuilt = rebuildInteractiveFromHistory(toolCall);
			if (!rebuilt) continue;
			if (rebuilt.resolvedAt === void 0 && msg.executionStatus !== "error") {
				toolCall.state = TOOL_CALL_STATE.SUSPENDED;
				status = CHAT_MESSAGE_STATUS.AWAITING_USER;
			}
			interactives.push(rebuilt);
			renderParts.push({
				type: "interactive",
				toolCallId: rebuilt.toolCallId
			});
		}
		const chatMessage = {
			id: msg.id ?? crypto.randomUUID(),
			role,
			content: text,
			...renderParts.length > 0 && { renderParts },
			thinking: thinking || void 0,
			...thinkingSegments.length > 0 && { thinkingSegments },
			toolCalls: toolCalls.length > 0 ? toolCalls : void 0,
			...attachments.length > 0 && { attachments },
			...status && { status },
			...msg.executionId ? { executionId: msg.executionId } : {}
		};
		setMessageInteractives(chatMessage, interactives);
		result.push(chatMessage);
	}
	return result;
}
/**
* Reconcile unfinished tool calls and interactive cards with the suspensions
* still open on the backend. The sidecar comes from chat history
* (`openSuspensions`) — raw persisted messages don't carry runIds or enough
* information to distinguish a live suspension from an interrupted run.
*
* Mutates `chat` in place (history-load happens before reactivity wraps the
* messages, so this is safe and avoids an extra deep clone) and returns it
* for ergonomic chaining.
*/
function applyOpenSuspensions(chat, suspensions) {
	const byToolCallId = new Map(suspensions.map((s) => [s.toolCallId, s]));
	for (const msg of chat) {
		let hasOpenToolCall = false;
		for (const toolCall of msg.toolCalls ?? []) {
			if (toolCall.state === TOOL_CALL_STATE.DONE || toolCall.state === TOOL_CALL_STATE.ERROR || toolCall.state === TOOL_CALL_STATE.CANCELLED) continue;
			const suspension = byToolCallId.get(toolCall.toolCallId);
			if (suspension) {
				toolCall.state = TOOL_CALL_STATE.SUSPENDED;
				toolCall.runId = suspension.runId;
				if (suspension.suspendPayload !== void 0) toolCall.suspendPayload = preserveApprovalDetails(suspension.suspendPayload, toolCall.suspendPayload);
				const rebuilt = rebuildInteractiveFromHistory(toolCall);
				if (rebuilt) {
					rebuilt.runId = suspension.runId;
					upsertMessageInteractive(msg, rebuilt);
				}
				hasOpenToolCall = true;
			} else if (msg.status === CHAT_MESSAGE_STATUS.ERROR) toolCall.state = TOOL_CALL_STATE.ERROR;
			else {
				toolCall.state = TOOL_CALL_STATE.CANCELLED;
				toolCall.canceled = true;
			}
		}
		const interactives = getMessageInteractives(msg);
		const retained = [];
		for (const interactive of interactives) {
			if (interactive.resolvedAt !== void 0) {
				retained.push(interactive);
				continue;
			}
			const suspension = byToolCallId.get(interactive.toolCallId);
			if (suspension) {
				interactive.runId = suspension.runId;
				retained.push(interactive);
			}
		}
		setMessageInteractives(msg, retained);
		if (hasOpenToolCall) msg.status = CHAT_MESSAGE_STATUS.AWAITING_USER;
		else if (msg.status === CHAT_MESSAGE_STATUS.AWAITING_USER) msg.status = msg.toolCalls?.some((tc) => tc.state === TOOL_CALL_STATE.ERROR) ? CHAT_MESSAGE_STATUS.ERROR : CHAT_MESSAGE_STATUS.SUCCESS;
	}
	return chat;
}
//#endregion
//#region src/features/ai/shared/agentsChat/thinking.ts
function getMessageThinkingSegments(message) {
	if (message.thinkingSegments?.length) return message.thinkingSegments.filter((segment) => segment.content.trim().length > 0);
	if (!message.thinking?.trim()) return [];
	return [{
		id: `${message.id}:reasoning`,
		content: message.thinking
	}];
}
function getThinkingDurationSec(segments) {
	let startTime;
	let endTime;
	for (const segment of segments) {
		if (segment.startTime !== void 0) startTime = startTime === void 0 ? segment.startTime : Math.min(startTime, segment.startTime);
		if (segment.endTime !== void 0) endTime = endTime === void 0 ? segment.endTime : Math.max(endTime, segment.endTime);
	}
	if (startTime === void 0 || endTime === void 0 || endTime < startTime) return void 0;
	return Math.max(1, Math.round((endTime - startTime) / 1e3));
}
//#endregion
//#region src/features/agents/composables/useAgentChatStream.ts
function getApprovalDecision(value) {
	if (!isRecord(value) || typeof value.approved !== "boolean") return void 0;
	return value.approved;
}
function warningKey(warning) {
	return JSON.stringify([
		warning.code ?? "",
		warning.server ?? "",
		warning.message
	]);
}
function useAgentChatStream(params) {
	const rootStore = useRootStore();
	const locale = useI18n();
	const { showError } = useToast();
	const messages = ref([]);
	const isStreaming = ref(false);
	const isCancelling = ref(false);
	const abortController = ref(null);
	const streamSettlements = /* @__PURE__ */ new WeakMap();
	const preserveTerminalStateOnAbort = /* @__PURE__ */ new WeakSet();
	const historyLoaded = ref(false);
	/**
	* Set when the backend rejects the stream because the agent itself is
	* misconfigured (missing instructions / model / credential). Cleared on the
	* next send so users can fix the config and retry without a manual dismiss.
	*/
	const fatalError = ref(null);
	/**
	* Non-fatal warnings emitted during a run (e.g. an MCP server that failed to
	* connect, so its tools were skipped). The run continues; these are shown to
	* the user as a warning callout. Visible warnings clear on the next send;
	* explicitly dismissed warnings stay hidden for this composable instance.
	*/
	const warnings = ref([]);
	const dismissedWarningKeys = /* @__PURE__ */ new Set();
	const messagingState = computed(() => {
		if (!isStreaming.value) return "idle";
		const lastMsg = messages.value[messages.value.length - 1];
		if (!lastMsg || lastMsg.role === "user") return "waitingFirstChunk";
		return "receiving";
	});
	async function refreshHistory({ clearOnNotFound = false } = {}) {
		const continueId = params.continueSessionId?.value;
		try {
			let dbMessages;
			let openSuspensions = [];
			if (continueId) {
				const envelope = await getChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value, continueId);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
			} else {
				const envelope = await getTestChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
			}
			messages.value = applyOpenSuspensions(convertDbMessages(dbMessages), openSuspensions);
			return true;
		} catch (error) {
			if (error?.httpStatusCode === 404) {
				if (clearOnNotFound) messages.value = [];
				return clearOnNotFound;
			} else showError(error, locale.baseText("agents.chat.loadHistory.error"));
			return false;
		}
	}
	async function loadHistory() {
		if (historyLoaded.value) return;
		await refreshHistory({ clearOnNotFound: true });
		historyLoaded.value = true;
		params.onHistoryLoaded?.(messages.value.length);
	}
	async function clearHistory() {
		try {
			await clearTestChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
			messages.value = [];
		} catch (error) {
			showError(error, locale.baseText("agents.chat.clearHistory.error"));
		}
	}
	/**
	* Lazily mint a ChatMessage when the next text/reasoning/tool event needs
	* one. The id is FE-issued (used as a v-for key) — the wire format no
	* longer carries a server-minted messageId.
	*/
	function ensureCurrent(session) {
		if (session.current) return session.current;
		const msg = reactive({
			id: crypto.randomUUID(),
			role: "assistant",
			content: "",
			toolCalls: [],
			status: CHAT_MESSAGE_STATUS.STREAMING
		});
		messages.value.push(msg);
		session.current = msg;
		session.minted.add(msg);
		return msg;
	}
	function ensureReasoningSegment(session, id) {
		const existing = session.openReasoning.get(id);
		if (existing) return existing;
		const msg = ensureCurrent(session);
		const segment = reactive({
			id,
			content: "",
			startTime: session.reasoningStartedAt.get(id) ?? Date.now()
		});
		msg.thinkingSegments = [...msg.thinkingSegments ?? [], segment];
		session.openReasoning.set(id, segment);
		return segment;
	}
	function settleReasoning(session, id, endTime = Date.now()) {
		const segment = session.openReasoning.get(id);
		if (segment) segment.endTime = endTime;
		session.openReasoning.delete(id);
		session.reasoningStartedAt.delete(id);
	}
	function settleOpenReasoning(session) {
		const endTime = Date.now();
		for (const id of session.openReasoning.keys()) settleReasoning(session, id, endTime);
		session.reasoningStartedAt.clear();
	}
	/**
	* Find a ToolCall by its `toolCallId`, walking from the latest ChatMessage
	* backwards. Tool results / execution-start events arrive in fresh LLM
	* iterations after the tool-call message has been closed by `finish-step`,
	* so we cannot rely on the cursor — only the natural id.
	*/
	function findToolCallById(toolCallId) {
		for (let i = messages.value.length - 1; i >= 0; i--) {
			const m = messages.value[i];
			const found = m.toolCalls?.find((t) => t.toolCallId === toolCallId);
			if (found) return {
				msg: m,
				tc: found
			};
		}
		return null;
	}
	function findOpenSuspension() {
		const interactive = findOpenInteractive(messages.value);
		if (interactive?.runId) return {
			runId: interactive.runId,
			toolCallId: interactive.toolCallId
		};
		for (const message of messages.value) {
			const toolCall = message.toolCalls?.find((tc) => tc.state === TOOL_CALL_STATE.SUSPENDED && tc.runId);
			if (toolCall?.runId) return {
				runId: toolCall.runId,
				toolCallId: toolCall.toolCallId
			};
		}
	}
	function markMessageSuccessIfSettled(msg) {
		if (msg.status !== CHAT_MESSAGE_STATUS.AWAITING_USER) return;
		if (!getMessageInteractives(msg).some((payload) => payload.resolvedAt === void 0)) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
	}
	function isToolCallInFlight(toolCall) {
		return toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING || toolCall.state === TOOL_CALL_STATE.SUSPENDED;
	}
	function markRunCancelled(runId) {
		for (const message of messages.value) {
			if (!message.toolCalls?.some((toolCall) => toolCall.runId === runId)) continue;
			let changed = false;
			for (const toolCall of message.toolCalls ?? []) {
				if (toolCall.runId !== runId && !isToolCallInFlight(toolCall)) continue;
				toolCall.state = TOOL_CALL_STATE.CANCELLED;
				toolCall.canceled = true;
				changed = true;
				const interactive = getMessageInteractive(message, toolCall.toolCallId);
				if (interactive) upsertMessageInteractive(message, {
					...interactive,
					resolvedAt: Date.now(),
					cancelled: true
				});
			}
			if (changed) markMessageSuccessIfSettled(message);
		}
	}
	function dropOrphanMintedBubbles(session) {
		for (const msg of session.minted) if (!msg.content && (msg.toolCalls?.length ?? 0) === 0 && getMessageThinkingSegments(msg).length === 0) {
			messages.value = messages.value.filter((m) => m !== msg);
			session.minted.delete(msg);
		}
	}
	function markInFlightStateFailed(session) {
		for (const msg of session.minted) {
			if (msg.status === CHAT_MESSAGE_STATUS.STREAMING || msg.status === CHAT_MESSAGE_STATUS.AWAITING_USER) msg.status = CHAT_MESSAGE_STATUS.ERROR;
			for (const toolCall of msg.toolCalls ?? []) if (isToolCallInFlight(toolCall)) toolCall.state = TOOL_CALL_STATE.ERROR;
			setMessageInteractives(msg, getMessageInteractives(msg).filter((interactive) => interactive.resolvedAt !== void 0));
		}
	}
	function markStreamInterrupted(session) {
		settleOpenReasoning(session);
		dropOrphanMintedBubbles(session);
		markInFlightStateFailed(session);
		messages.value.push(reactive({
			id: crypto.randomUUID(),
			role: "assistant",
			content: locale.baseText("agents.chat.streamInterrupted"),
			toolCalls: [],
			status: CHAT_MESSAGE_STATUS.ERROR
		}));
	}
	/**
	* Settle tool calls left `pending`/`running` after the stream ended (their
	* terminal events never arrived). Used by `stopGenerating` to recover the
	* desync where the chat is idle and responsive but tool steps keep pulsing.
	* Suspended tools are left untouched — they have a `runId` and are still
	* resolvable through the normal resume/cancel flow.
	*/
	function settleStaleInFlightToolCalls() {
		for (const message of messages.value) {
			let changed = false;
			for (const toolCall of message.toolCalls ?? []) if (toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING) {
				toolCall.state = TOOL_CALL_STATE.CANCELLED;
				toolCall.canceled = true;
				changed = true;
			}
			if (changed) markMessageSuccessIfSettled(message);
		}
	}
	function handleEvent(event, session) {
		switch (event.type) {
			case "start-step":
			case "finish-step":
				session.current = void 0;
				break;
			case "text-start":
			case "text-end": break;
			case "reasoning-start":
				session.reasoningStartedAt.set(event.id, Date.now());
				break;
			case "text-delta": {
				const msg = ensureCurrent(session);
				msg.content += event.delta;
				break;
			}
			case "reasoning-delta": {
				const msg = ensureCurrent(session);
				const segment = ensureReasoningSegment(session, event.id);
				segment.content += event.delta;
				msg.thinking = (msg.thinking ?? "") + event.delta;
				break;
			}
			case "reasoning-end":
				settleReasoning(session, event.id);
				break;
			case "tool-input-start": {
				const msg = ensureCurrent(session);
				if (msg.content && !msg.content.endsWith("\n")) msg.content += "\n";
				msg.toolCalls = msg.toolCalls ?? [];
				if (!msg.toolCalls.find((t) => t.toolCallId === event.toolCallId)) msg.toolCalls.push({
					tool: event.toolName,
					toolCallId: event.toolCallId,
					state: TOOL_CALL_STATE.PENDING
				});
				break;
			}
			case "tool-input-delta": break;
			case "tool-call": {
				const msg = ensureCurrent(session);
				msg.toolCalls = msg.toolCalls ?? [];
				const existing = msg.toolCalls.find((t) => t.toolCallId === event.toolCallId);
				if (!existing) msg.toolCalls.push({
					tool: event.toolName,
					toolCallId: event.toolCallId,
					input: event.input,
					state: TOOL_CALL_STATE.PENDING,
					displaySummary: summariseToolCall(event.toolName, void 0, event.input)
				});
				else {
					existing.input = event.input;
					existing.displaySummary = summariseToolCall(existing.tool, existing.output, existing.input);
					if (existing.state !== TOOL_CALL_STATE.RUNNING && existing.state !== TOOL_CALL_STATE.DONE && existing.state !== TOOL_CALL_STATE.CANCELLED) existing.state = TOOL_CALL_STATE.PENDING;
				}
				break;
			}
			case "tool-execution-start": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					found.tc.startTime = event.startTime;
					if (found.tc.state !== TOOL_CALL_STATE.DONE && found.tc.state !== TOOL_CALL_STATE.ERROR && found.tc.state !== TOOL_CALL_STATE.CANCELLED) found.tc.state = TOOL_CALL_STATE.RUNNING;
				}
				break;
			}
			case "tool-execution-end": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					if (found.tc.state !== TOOL_CALL_STATE.DONE && found.tc.state !== TOOL_CALL_STATE.ERROR && found.tc.state !== TOOL_CALL_STATE.SUSPENDED) found.tc.state = event.isError ? TOOL_CALL_STATE.ERROR : TOOL_CALL_STATE.DONE;
					found.tc.endTime = event.endTime;
				}
				break;
			}
			case "tool-result": {
				const found = findToolCallById(event.toolCallId);
				if (found) {
					const toolResultEvent = event;
					found.tc.output = event.output;
					const failed = event.isError || isFailedDelegateOutput(found.tc.tool, event.output);
					found.tc.state = failed ? TOOL_CALL_STATE.ERROR : toolResultEvent.canceled === true ? TOOL_CALL_STATE.CANCELLED : TOOL_CALL_STATE.DONE;
					found.tc.canceled = toolResultEvent.canceled === true;
					found.tc.displaySummary = summariseToolCall(found.tc.tool, event.output, found.tc.input);
					const currentInteractive = getMessageInteractive(found.msg, event.toolCallId);
					const updated = rebuildInteractiveFromHistory(found.tc);
					if (updated && currentInteractive?.resolvedAt === void 0) upsertMessageInteractive(found.msg, updated);
					markMessageSuccessIfSettled(found.msg);
				}
				break;
			}
			case "tool-call-suspended": {
				const { payload } = event;
				const found = findToolCallById(payload.toolCallId);
				const suspendIsRenderableInput = isApprovalSuspendInput(payload.input);
				let msg;
				let tc;
				if (found) {
					msg = found.msg;
					tc = found.tc;
					tc.state = TOOL_CALL_STATE.SUSPENDED;
					tc.canceled = false;
					tc.output = void 0;
					tc.endTime = void 0;
					tc.displaySummary = void 0;
					tc.runId = payload.runId;
					tc.suspendPayload = payload.input;
				} else {
					msg = ensureCurrent(session);
					tc = {
						tool: payload.toolName,
						toolCallId: payload.toolCallId,
						state: TOOL_CALL_STATE.SUSPENDED,
						runId: payload.runId,
						...suspendIsRenderableInput ? { input: payload.input } : { suspendPayload: payload.input }
					};
					msg.toolCalls = [...msg.toolCalls ?? [], tc];
				}
				const interactive = rebuildInteractiveFromHistory({
					...tc,
					output: void 0
				});
				if (interactive) {
					interactive.runId = payload.runId;
					upsertMessageInteractive(msg, interactive);
					msg.status = CHAT_MESSAGE_STATUS.AWAITING_USER;
				}
				session.terminalEventReceived = true;
				break;
			}
			case "subagent-chunk": {
				const found = findToolCallById(event.parentToolCallId);
				if (!found) break;
				found.tc.childProgress ??= emptyChildTrace();
				applyForwardedChildChunk(found.tc.childProgress, event.chunk);
				break;
			}
			case "message": break;
			case "warning": {
				const warning = {
					message: event.message,
					...event.server !== void 0 && { server: event.server },
					...event.code !== void 0 && { code: event.code }
				};
				if (!dismissedWarningKeys.has(warningKey(warning))) warnings.value.push(warning);
				break;
			}
			case "error":
				session.errorEmitted = true;
				settleOpenReasoning(session);
				dropOrphanMintedBubbles(session);
				markInFlightStateFailed(session);
				if (event.errorCode === "agent_misconfigured") fatalError.value = {
					message: event.message,
					missing: event.missing ?? []
				};
				else messages.value.push(reactive({
					id: crypto.randomUUID(),
					role: "assistant",
					content: event.message,
					toolCalls: [],
					status: CHAT_MESSAGE_STATUS.ERROR
				}));
				session.terminalEventReceived = true;
				break;
			case "done":
				settleOpenReasoning(session);
				if (event.executionId) for (const msg of session.minted) msg.executionId = event.executionId;
				session.terminalEventReceived = true;
				return { done: true };
			default: break;
		}
	}
	async function consumeStream(response, session) {
		if (!response.body) return;
		const reader = response.body.getReader();
		const decoder = new TextDecoder();
		let buffer = "";
		try {
			readerLoop: while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				buffer += decoder.decode(value, { stream: true });
				const lines = buffer.split("\n");
				buffer = lines.pop() ?? "";
				for (const line of lines) {
					if (!line.startsWith("data: ")) continue;
					const raw = line.slice(6);
					let event;
					try {
						event = JSON.parse(raw);
					} catch {
						continue;
					}
					if (handleEvent(event, session)?.done) break readerLoop;
				}
			}
		} finally {
			reader.releaseLock();
		}
	}
	function finalizeStream(session) {
		settleOpenReasoning(session);
		for (const msg of session.minted) {
			if (msg.status === CHAT_MESSAGE_STATUS.STREAMING) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
			for (const toolCall of msg.toolCalls ?? []) if (isToolCallInFlight(toolCall) && toolCall.state !== TOOL_CALL_STATE.SUSPENDED) toolCall.state = TOOL_CALL_STATE.DONE;
		}
	}
	async function postAndConsume(url, body) {
		const session = {
			errorEmitted: false,
			terminalEventReceived: false,
			minted: /* @__PURE__ */ new Set(),
			reasoningStartedAt: /* @__PURE__ */ new Map(),
			openReasoning: /* @__PURE__ */ new Map()
		};
		isStreaming.value = true;
		const controller = new AbortController();
		abortController.value = controller;
		let settleStream;
		const streamSettlement = new Promise((resolve) => {
			settleStream = resolve;
		});
		streamSettlements.set(controller, streamSettlement);
		let transportFailed = false;
		try {
			const browserId = localStorage.getItem("n8n-browserId") ?? "";
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"browser-id": browserId
				},
				credentials: "include",
				body: JSON.stringify(body),
				signal: controller.signal
			});
			if (!response.ok || !response.body) {
				transportFailed = true;
				const errorMsg = {
					id: crypto.randomUUID(),
					role: "assistant",
					content: `Error: ${response.statusText || "Failed to reach agent"}`,
					status: "error"
				};
				messages.value.push(errorMsg);
				return { outcome: "failed" };
			}
			await consumeStream(response, session);
			if (!session.terminalEventReceived) {
				transportFailed = true;
				markStreamInterrupted(session);
				return { outcome: "failed" };
			}
			finalizeStream(session);
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				dropOrphanMintedBubbles(session);
				if (preserveTerminalStateOnAbort.has(controller) && session.terminalEventReceived) finalizeStream(session);
				else markInFlightStateFailed(session);
				return { outcome: "aborted" };
			}
			if (session.terminalEventReceived) finalizeStream(session);
			else {
				transportFailed = true;
				markStreamInterrupted(session);
			}
		} finally {
			if (abortController.value === controller) {
				abortController.value = null;
				isStreaming.value = false;
			}
			preserveTerminalStateOnAbort.delete(controller);
			streamSettlements.delete(controller);
			settleStream?.();
		}
		return { outcome: !transportFailed && !session.errorEmitted ? "completed" : "failed" };
	}
	async function streamChat(message, files) {
		const { baseUrl } = rootStore.restApiContext;
		const url = `${baseUrl}/projects/${params.projectId.value}/agents/v2/${params.agentId.value}/chat`;
		const body = { message };
		if (params.continueSessionId?.value) body.sessionId = params.continueSessionId.value;
		if (files?.length) body.attachments = await Promise.all(files.map(async (file) => {
			const encoded = await convertFileToBinaryData(file);
			return {
				fileName: file.name,
				mimeType: file.type || "application/octet-stream",
				data: encoded.data
			};
		}));
		await postAndConsume(url, body);
	}
	/**
	* Resume a suspended interaction via `chat/resume`, re-entering the same
	* SSE handler. The `runId` is required — it comes from the original
	* `tool-call-suspended` chunk (live) or from the `openSuspensions` sidecar
	* applied during history reload.
	*
	* The UI updates optimistically, then reconciles with persisted history if
	* the resume fails, falling back to the previous card state if history is unavailable.
	*/
	async function resume(payload) {
		if (isCancelling.value) return;
		const isCancellation = "cancelled" in payload;
		const text = isCancellation ? payload.text.trim() : "";
		if (isCancellation && !text) return;
		const found = findToolCallById(payload.toolCallId);
		const snapshot = found ? {
			tc: found.tc,
			prevState: found.tc.state,
			prevOutput: found.tc.output,
			prevCanceled: found.tc.canceled,
			prevSummary: found.tc.displaySummary,
			msg: found.msg,
			prevStatus: found.msg.status,
			prevInteractive: found.msg.interactive,
			prevInteractives: found.msg.interactives ? [...found.msg.interactives] : void 0
		} : null;
		let optimisticUserMessageId;
		if (found) {
			if (isCancellation) {
				found.tc.state = TOOL_CALL_STATE.CANCELLED;
				found.tc.canceled = true;
				const interactive = getMessageInteractive(found.msg, payload.toolCallId);
				if (interactive) upsertMessageInteractive(found.msg, {
					...interactive,
					resolvedAt: Date.now(),
					cancelled: true
				});
			} else {
				found.tc.state = TOOL_CALL_STATE.DONE;
				found.tc.canceled = false;
				found.tc.output = payload.resumeData;
				found.tc.displaySummary = summariseToolCall(found.tc.tool, payload.resumeData, found.tc.input);
				const updated = rebuildInteractiveFromHistory(found.tc);
				if (updated?.toolName === "approval") {
					const approved = getApprovalDecision(payload.resumeData);
					if (approved !== void 0) updated.resolvedValue = { approved };
				}
				if (updated) upsertMessageInteractive(found.msg, updated);
			}
			markMessageSuccessIfSettled(found.msg);
		}
		const resumeData = isCancellation ? {
			_type: "agent.cancellation",
			message: text
		} : payload.resumeData;
		if (isCancellation) {
			optimisticUserMessageId = crypto.randomUUID();
			fatalError.value = null;
			messages.value.push({
				id: optimisticUserMessageId,
				role: "user",
				content: text,
				status: "success"
			});
		}
		const { baseUrl } = rootStore.restApiContext;
		const { outcome } = await postAndConsume(`${baseUrl}/projects/${params.projectId.value}/agents/v2/${params.agentId.value}/chat/resume`, {
			runId: payload.runId,
			toolCallId: payload.toolCallId,
			resumeData
		});
		let reconciled = false;
		if (outcome === "failed") reconciled = await refreshHistory();
		if (outcome === "failed" && !reconciled && snapshot) {
			snapshot.tc.state = snapshot.prevState;
			snapshot.tc.output = snapshot.prevOutput;
			snapshot.tc.canceled = snapshot.prevCanceled;
			snapshot.tc.displaySummary = snapshot.prevSummary;
			snapshot.msg.status = snapshot.prevStatus;
			if (snapshot.prevInteractives) setMessageInteractives(snapshot.msg, snapshot.prevInteractives);
			else if (snapshot.prevInteractive) setMessageInteractives(snapshot.msg, [snapshot.prevInteractive]);
			else setMessageInteractives(snapshot.msg, []);
		}
		if (outcome === "failed" && !reconciled && optimisticUserMessageId) messages.value = messages.value.filter((m) => m.id !== optimisticUserMessageId);
	}
	async function cancelAndSteer(text) {
		const openInteractive = findOpenInteractive(messages.value);
		if (!openInteractive?.runId) return;
		await resume({
			runId: openInteractive.runId,
			toolCallId: openInteractive.toolCallId,
			cancelled: true,
			text
		});
	}
	async function sendMessage(text, files) {
		const trimmed = text.trim();
		if (!trimmed && !files?.length || isStreaming.value || isCancelling.value) return;
		fatalError.value = null;
		warnings.value = [];
		messages.value.push({
			id: crypto.randomUUID(),
			role: "user",
			content: trimmed,
			status: "success",
			...files?.length && { attachments: files.map((file) => ({
				fileName: file.name,
				mimeType: file.type || "application/octet-stream",
				sizeBytes: file.size,
				file
			})) }
		});
		await streamChat(trimmed, files);
	}
	function dismissFatalError() {
		fatalError.value = null;
	}
	function dismissWarning(index) {
		const warning = warnings.value[index];
		if (!warning) return;
		const dismissedKey = warningKey(warning);
		dismissedWarningKeys.add(dismissedKey);
		warnings.value = warnings.value.filter((item) => warningKey(item) !== dismissedKey);
	}
	async function stopGenerating() {
		if (isCancelling.value) return;
		const openSuspension = findOpenSuspension();
		const activeController = abortController.value;
		const activeStreamSettlement = activeController ? streamSettlements.get(activeController) : void 0;
		if (!openSuspension) {
			activeController?.abort();
			await activeStreamSettlement;
			if (!isStreaming.value) settleStaleInFlightToolCalls();
			return;
		}
		isCancelling.value = true;
		let preserveTerminalState = false;
		try {
			const { cancelled } = await cancelAgentChatRun(rootStore.restApiContext, params.projectId.value, params.agentId.value, openSuspension.runId);
			if (cancelled) {
				markRunCancelled(openSuspension.runId);
				preserveTerminalState = true;
				return;
			}
			preserveTerminalState = !await refreshHistory();
		} catch (error) {
			preserveTerminalState = !await refreshHistory();
			showError(error, locale.baseText("agents.chat.stop.error"));
		} finally {
			if (activeController && preserveTerminalState) preserveTerminalStateOnAbort.add(activeController);
			activeController?.abort();
			await activeStreamSettlement;
			isCancelling.value = false;
		}
	}
	return {
		messages,
		isStreaming,
		isCancelling,
		messagingState,
		fatalError,
		warnings,
		loadHistory,
		clearHistory,
		sendMessage,
		stopGenerating,
		resume,
		cancelAndSteer,
		dismissFatalError,
		dismissWarning
	};
}
//#endregion
//#region src/features/agents/components/AgentChatEmptyState.vue?vue&type=script&setup=true&lang.ts
var AgentChatEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatEmptyState",
	props: { agentConfig: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.emptyState) }, [
				createVNode(AgentPersonalisationIcon_default, {
					personalisation: __props.agentConfig?.personalisation,
					class: normalizeClass(_ctx.$style.icon),
					size: 64
				}, null, 8, ["personalisation", "class"]),
				createVNode(unref(N8nText_default), {
					tag: "h3",
					step: "xl",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.agentConfig?.name), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), {
					step: "sm",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.emptyState.description")), 1)]),
					_: 1
				})
			], 2);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatEmptyState.vue?vue&type=style&index=0&lang.module.scss
var emptyState = "_emptyState_edp4c_390";
var fadeInUp$3 = "_fadeInUp_edp4c_1";
var icon = "_icon_edp4c_416";
var shimmer$3 = "_shimmer_edp4c_1";
var spin$3 = "_spin_edp4c_1";
var opacityPulse$3 = "_opacityPulse_edp4c_1";
var popoverIn$3 = "_popoverIn_edp4c_1";
var fadeIn$3 = "_fadeIn_edp4c_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_edp4c_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_edp4c_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_edp4c_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_edp4c_1";
var blurSwapIn$3 = "_blurSwapIn_edp4c_1";
var blurSwapOut$3 = "_blurSwapOut_edp4c_1";
var pulseGlow$3 = "_pulseGlow_edp4c_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_edp4c_1";
var fade$3 = "_fade_edp4c_1";
var fadeInDown$3 = "_fadeInDown_edp4c_1";
var fadeInLeft$3 = "_fadeInLeft_edp4c_1";
var fadeInRight$3 = "_fadeInRight_edp4c_1";
var fadeOut$3 = "_fadeOut_edp4c_1";
var fadeOutDown$3 = "_fadeOutDown_edp4c_1";
var fadeOutUp$3 = "_fadeOutUp_edp4c_1";
var fadeOutLeft$3 = "_fadeOutLeft_edp4c_1";
var fadeOutRight$3 = "_fadeOutRight_edp4c_1";
var ping$3 = "_ping_edp4c_1";
var blinkBackground$3 = "_blinkBackground_edp4c_1";
var typingBlink$3 = "_typingBlink_edp4c_1";
var AgentChatEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	emptyState,
	fadeInUp: fadeInUp$3,
	icon,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_edp4c_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var AgentChatEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/displayGroups.ts
function isGroupable(message) {
	return message.role === "assistant" && !!message.toolCalls?.length && !message.content.trim();
}
function isAssistantGroup(group) {
	return group.kind === "toolRun" || group.message.role === "assistant";
}
function executionIdForGroup(group) {
	return group.kind === "toolRun" ? group.executionId : group.message.executionId;
}
/** Keep one reasoning block at the tail of each assistant run, below its final output. */
function moveThinkingToRunTail(groups) {
	let run = [];
	let executionId;
	const flush = () => {
		if (run.length === 0) return;
		const segments = run.flatMap((group) => group.thinkingSegments);
		for (const group of run) group.thinkingSegments = [];
		run[run.length - 1].thinkingSegments = segments;
		run = [];
		executionId = void 0;
	};
	for (const group of groups) {
		if (!isAssistantGroup(group)) {
			flush();
			continue;
		}
		const groupExecutionId = executionIdForGroup(group);
		if (executionId !== void 0 && groupExecutionId !== void 0 && executionId !== groupExecutionId) flush();
		run.push(group);
		executionId ??= groupExecutionId;
	}
	flush();
}
/**
* Whether `message` may join an open toolRun. Same-turn live streams often
* lack executionId until `done`; those still fold. Distinct defined ids
* (suspended vs resumed HITL executions) must stay separate so Fix CTA
* handoff uses the turn that owns the errored tool.
*/
function canAppendToToolRun(last, message) {
	if (last.finalMessage) return false;
	if (last.executionId !== void 0 && message.executionId !== void 0 && last.executionId !== message.executionId) return false;
	return true;
}
/**
* Merge two records of the same tool call: messages are now stored both when a
* stream suspends and again on completion, so history can carry the same
* toolCallId twice (open, then resolved). Ported from master's undrained-stream
* fix (#32119).
*/
function mergeToolCall(previous, next) {
	const merged = {
		...previous,
		...next,
		input: next.input ?? previous.input,
		startTime: previous.startTime ?? next.startTime,
		endTime: next.endTime ?? previous.endTime,
		canceled: next.canceled ?? previous.canceled
	};
	return {
		...merged,
		displaySummary: summariseToolCall(merged.tool, merged.output, merged.input)
	};
}
function appendToolCalls(existing, next) {
	const merged = [...existing];
	const indexByToolCallId = /* @__PURE__ */ new Map();
	for (const [index, toolCall] of merged.entries()) if (toolCall.toolCallId) indexByToolCallId.set(toolCall.toolCallId, index);
	for (const toolCall of next) {
		if (!toolCall.toolCallId) {
			merged.push(toolCall);
			continue;
		}
		const index = indexByToolCallId.get(toolCall.toolCallId);
		if (index === void 0) {
			indexByToolCallId.set(toolCall.toolCallId, merged.length);
			merged.push(toolCall);
			continue;
		}
		merged[index] = mergeToolCall(merged[index], toolCall);
	}
	return merged;
}
function appendInteractivePayloads(existing, next) {
	let merged = existing;
	for (const payload of next) {
		const index = merged.findIndex((existingPayload) => existingPayload.toolCallId === payload.toolCallId);
		if (index === -1) merged = [...merged, payload];
		else merged = merged.map((existingPayload, i) => i === index ? payload : existingPayload);
	}
	return merged;
}
function buildDisplayGroups(messages) {
	const groups = [];
	for (const message of messages) {
		if (isGroupable(message)) {
			const last = groups[groups.length - 1];
			if (last?.kind === "toolRun" && canAppendToToolRun(last, message)) {
				last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls ?? []);
				last.thinkingSegments.push(...getMessageThinkingSegments(message));
				last.active ||= message.status === "streaming";
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				last.awaitingInput = last.interactives.some((payload) => payload.resolvedAt === void 0);
				last.executionId ??= message.executionId;
				continue;
			}
			groups.push({
				kind: "toolRun",
				id: message.id,
				thinkingSegments: getMessageThinkingSegments(message),
				active: message.status === "streaming",
				awaitingInput: message.status === "awaitingUser",
				toolCalls: [...message.toolCalls ?? []],
				interactives: getMessageInteractives(message),
				...message.executionId ? { executionId: message.executionId } : {}
			});
			continue;
		}
		if (message.role === "assistant") {
			const last = groups[groups.length - 1];
			if (last?.kind === "toolRun" && canAppendToToolRun(last, message)) {
				last.finalMessage = message;
				last.executionId ??= message.executionId;
				last.thinkingSegments.push(...getMessageThinkingSegments(message));
				last.active ||= message.status === "streaming";
				if (message.toolCalls?.length) last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls);
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				last.awaitingInput = last.interactives.some((payload) => payload.resolvedAt === void 0);
				continue;
			}
		}
		groups.push({
			kind: "message",
			id: message.id,
			message,
			thinkingSegments: message.role === "assistant" ? getMessageThinkingSegments(message) : []
		});
	}
	moveThinkingToRunTail(groups);
	return groups;
}
//#endregion
//#region src/features/ai/shared/components/AiThinkingBlock.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["aria-expanded"];
var AiThinkingBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiThinkingBlock",
	props: {
		segments: {},
		active: { type: Boolean },
		awaitingInput: {
			type: Boolean,
			default: false
		},
		activityLabel: { default: void 0 },
		durationSec: { default: void 0 },
		testId: { default: "ai-thinking-block" }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const userToggled = ref(null);
		const expanded = computed(() => userToggled.value ?? false);
		watch(() => props.active, () => {
			userToggled.value = null;
		});
		const nowMs = ref(Date.now());
		const activeSinceMs = ref(null);
		const settledElapsedSec = ref(0);
		let ticker = null;
		const elapsedSec = computed(() => {
			const live = activeSinceMs.value === null ? 0 : Math.max(0, Math.floor((nowMs.value - activeSinceMs.value) / 1e3));
			return settledElapsedSec.value + live;
		});
		const isCounting = computed(() => props.active && !props.awaitingInput);
		watch(isCounting, (counting) => {
			if (counting) {
				nowMs.value = Date.now();
				activeSinceMs.value = Date.now();
				ticker ??= setInterval(() => {
					nowMs.value = Date.now();
				}, 1e3);
				return;
			}
			settledElapsedSec.value = props.awaitingInput ? 0 : elapsedSec.value;
			activeSinceMs.value = null;
			if (ticker) {
				clearInterval(ticker);
				ticker = null;
			}
		}, { immediate: true });
		onUnmounted(() => {
			if (ticker) clearInterval(ticker);
		});
		function formatDuration(totalSec) {
			if (totalSec < 60) return `${totalSec}s`;
			return `${Math.floor(totalSec / 60)}m ${totalSec % 60}s`;
		}
		const elapsedLabel = computed(() => {
			return elapsedSec.value >= 1 ? formatDuration(elapsedSec.value) : void 0;
		});
		const title = computed(() => {
			if (!props.active) {
				const observed = settledElapsedSec.value >= 1 ? settledElapsedSec.value : void 0;
				const duration = props.durationSec === void 0 ? observed : observed === void 0 ? props.durationSec : Math.max(props.durationSec, observed);
				return {
					key: "done",
					text: duration === void 0 ? i18n.baseText("ai.thinking.doneFallback") : i18n.baseText("ai.thinking.done", { interpolate: { duration: formatDuration(duration) } })
				};
			}
			if (props.awaitingInput) return {
				key: "waiting",
				text: i18n.baseText("ai.thinking.waitingForInput")
			};
			for (let index = props.segments.length - 1; index >= 0; index--) {
				const sentence = firstSentence(props.segments[index].content);
				if (sentence) return {
					key: `segment-${index}`,
					text: sentence
				};
			}
			return {
				key: "active",
				text: i18n.baseText("ai.thinking.active")
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), {
				open: expanded.value,
				"data-test-id": props.testId,
				"onUpdate:open": _cache[0] || (_cache[0] = (value) => userToggled.value = value)
			}, {
				default: withCtx(() => [
					createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass(_ctx.$style.header),
							"aria-expanded": expanded.value,
							"data-test-id": "thinking-block-header"
						}, [
							createVNode(Transition, {
								name: "thinking-title",
								mode: "out-in"
							}, {
								default: withCtx(() => [(openBlock(), createElementBlock("span", {
									key: title.value.key,
									class: normalizeClass(_ctx.$style.title)
								}, toDisplayString(title.value.text), 3))]),
								_: 1
							}),
							expanded.value && isCounting.value && elapsedLabel.value ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(_ctx.$style.headerElapsed)
							}, toDisplayString(elapsedLabel.value), 3)) : createCommentVNode("", true),
							createVNode(unref(AiActivityStepChevron_default), { open: expanded.value }, null, 8, ["open"])
						], 10, _hoisted_1$4)]),
						_: 1
					}),
					props.active && !props.awaitingInput && !expanded.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.subline),
						"data-test-id": "thinking-block-subline"
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sublineLabel) }, toDisplayString(props.activityLabel ?? unref(i18n).baseText("ai.thinking.active")), 3), elapsedLabel.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.sublineElapsed)
					}, " · " + toDisplayString(elapsedLabel.value), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					createVNode(unref(AnimatedCollapsibleContent_default), null, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default", {}, void 0, true)], 2)]),
						_: 3
					})
				]),
				_: 3
			}, 8, ["open", "data-test-id"]);
		};
	}
});
//#endregion
//#region src/features/ai/shared/components/AiThinkingBlock.vue?vue&type=style&index=1&lang.module.scss
var header$1 = "_header_19gs0_390";
var title$2 = "_title_19gs0_409";
var headerElapsed = "_headerElapsed_19gs0_417";
var sublineElapsed = "_sublineElapsed_19gs0_418";
var subline = "_subline_19gs0_418";
var sublineLabel = "_sublineLabel_19gs0_433";
var shimmer$2 = "_shimmer_19gs0_1";
var content$1 = "_content_19gs0_460";
var spin$2 = "_spin_19gs0_1";
var opacityPulse$2 = "_opacityPulse_19gs0_1";
var popoverIn$2 = "_popoverIn_19gs0_1";
var fadeIn$2 = "_fadeIn_19gs0_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_19gs0_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_19gs0_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_19gs0_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_19gs0_1";
var blurSwapIn$2 = "_blurSwapIn_19gs0_1";
var blurSwapOut$2 = "_blurSwapOut_19gs0_1";
var pulseGlow$2 = "_pulseGlow_19gs0_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_19gs0_1";
var fade$2 = "_fade_19gs0_1";
var fadeInUp$2 = "_fadeInUp_19gs0_1";
var fadeInDown$2 = "_fadeInDown_19gs0_1";
var fadeInLeft$2 = "_fadeInLeft_19gs0_1";
var fadeInRight$2 = "_fadeInRight_19gs0_1";
var fadeOut$2 = "_fadeOut_19gs0_1";
var fadeOutDown$2 = "_fadeOutDown_19gs0_1";
var fadeOutUp$2 = "_fadeOutUp_19gs0_1";
var fadeOutLeft$2 = "_fadeOutLeft_19gs0_1";
var fadeOutRight$2 = "_fadeOutRight_19gs0_1";
var ping$2 = "_ping_19gs0_1";
var blinkBackground$2 = "_blinkBackground_19gs0_1";
var typingBlink$2 = "_typingBlink_19gs0_1";
var AiThinkingBlock_vue_vue_type_style_index_1_lang_module_default = {
	header: header$1,
	title: title$2,
	headerElapsed,
	sublineElapsed,
	subline,
	sublineLabel,
	shimmer: shimmer$2,
	content: content$1,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_19gs0_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var AiThinkingBlock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AiThinkingBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiThinkingBlock_vue_vue_type_style_index_1_lang_module_default }], ["__scopeId", "data-v-7a487bde"]]);
//#endregion
//#region src/features/agents/components/AgentChatMemoryUsed.vue?vue&type=script&setup=true&lang.ts
var memoriesCountLabelKey = "agents.builder.quickActions.memoriesUsed.count";
var keyMemoryLabelKey = "agents.builder.quickActions.memoriesUsed.keyMemory";
var AgentChatMemoryUsed_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMemoryUsed",
	props: { memories: {} },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const memories = computed(() => props.memories);
		const isOpen = ref(false);
		function onOpenChange(open) {
			isOpen.value = open;
			emit("update:open", open);
		}
		function splitKeyMemory(text) {
			return text.split(/(?<=[.!?])\s+/).filter((part) => part.length > 0);
		}
		return (_ctx, _cache) => {
			return memories.value.length > 0 ? (openBlock(), createBlock(unref(HoverCardRoot_default), {
				key: 0,
				open: isOpen.value,
				"onUpdate:open": [_cache[0] || (_cache[0] = ($event) => isOpen.value = $event), onOpenChange],
				"open-delay": 400,
				"close-delay": 0
			}, {
				default: withCtx(() => [createVNode(unref(HoverCardTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.trigger) }, [createVNode(unref(N8nIcon_default), {
						icon: "brain",
						size: "small"
					}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(memoriesCountLabelKey, {
						adjustToNumber: memories.value.length,
						interpolate: { count: String(memories.value.length) }
					})), 1)], 2)]),
					_: 1
				}), createVNode(unref(HoverCardPortal_default), null, {
					default: withCtx(() => [createVNode(unref(HoverCardContent_default), {
						side: "bottom",
						align: "end",
						"side-offset": 8,
						class: normalizeClass([_ctx.$style.popoverContent, _ctx.$style.panel])
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(memories.value, (memory) => {
							return openBlock(), createElementBlock("div", {
								key: memory.id,
								class: normalizeClass(_ctx.$style.memorySection)
							}, [createVNode(unref(N8nText_default), {
								step: "sm",
								bold: "",
								class: normalizeClass(_ctx.$style.label)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(keyMemoryLabelKey)), 1)]),
								_: 1
							}, 8, ["class"]), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.keyMemoryList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(splitKeyMemory(memory.keyMemory), (sentence, sentenceIndex) => {
								return openBlock(), createElementBlock("li", { key: `${memory.id}-${sentenceIndex}` }, [createVNode(unref(N8nText_default), {
									step: "sm",
									tag: "p",
									class: normalizeClass(_ctx.$style.keyMemory)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(sentence), 1)]),
									_: 2
								}, 1032, ["class"])]);
							}), 128))], 2)], 2);
						}), 128))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMemoryUsed.vue?vue&type=style&index=0&lang.module.scss
var popoverContent = "_popoverContent_174ty_391";
var popoverIn$1 = "_popoverIn_174ty_1";
var panel$1 = "_panel_174ty_460";
var trigger = "_trigger_174ty_472";
var keyMemoryList = "_keyMemoryList_174ty_484";
var memorySection = "_memorySection_174ty_497";
var keyMemory = "_keyMemory_174ty_484";
var shimmer$1 = "_shimmer_174ty_1";
var spin$1 = "_spin_174ty_1";
var opacityPulse$1 = "_opacityPulse_174ty_1";
var fadeIn$1 = "_fadeIn_174ty_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_174ty_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_174ty_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_174ty_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_174ty_1";
var blurSwapIn$1 = "_blurSwapIn_174ty_1";
var blurSwapOut$1 = "_blurSwapOut_174ty_1";
var pulseGlow$1 = "_pulseGlow_174ty_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_174ty_1";
var fade$1 = "_fade_174ty_1";
var fadeInUp$1 = "_fadeInUp_174ty_1";
var fadeInDown$1 = "_fadeInDown_174ty_1";
var fadeInLeft$1 = "_fadeInLeft_174ty_1";
var fadeInRight$1 = "_fadeInRight_174ty_1";
var fadeOut$1 = "_fadeOut_174ty_1";
var fadeOutDown$1 = "_fadeOutDown_174ty_1";
var fadeOutUp$1 = "_fadeOutUp_174ty_1";
var fadeOutLeft$1 = "_fadeOutLeft_174ty_1";
var fadeOutRight$1 = "_fadeOutRight_174ty_1";
var ping$1 = "_ping_174ty_1";
var blinkBackground$1 = "_blinkBackground_174ty_1";
var typingBlink$1 = "_typingBlink_174ty_1";
var AgentChatMemoryUsed_vue_vue_type_style_index_0_lang_module_default = {
	popoverContent,
	popoverIn: popoverIn$1,
	panel: panel$1,
	trigger,
	keyMemoryList,
	memorySection,
	keyMemory,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_174ty_1",
	opacityPulse: opacityPulse$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var AgentChatMemoryUsed_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMemoryUsed_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMemoryUsed_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatMessageActions.vue?vue&type=script&setup=true&lang.ts
var AgentChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageActions",
	props: {
		content: {},
		isSpeechSynthesisAvailable: { type: Boolean },
		isSpeaking: { type: Boolean },
		canSendToAssistant: { type: Boolean }
	},
	emits: ["readAloud", "sendToAssistant"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.actions),
				"data-test-id": "agent-chat-message-actions"
			}, [
				createVNode(CopyButton_default, {
					content: __props.content,
					"data-test-id": "agent-chat-message-copy"
				}, null, 8, ["content"]),
				__props.canSendToAssistant ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.preview.sendToAssistant")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "square-arrow-out-up-right",
						size: "small",
						"icon-size": "medium",
						"data-test-id": "agent-chat-message-send-to-assistant",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("sendToAssistant"))
					})]),
					_: 1
				})) : createCommentVNode("", true),
				__props.isSpeechSynthesisAvailable ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(__props.isSpeaking ? unref(i18n).baseText("chatHub.message.actions.stopReading") : unref(i18n).baseText("chatHub.message.actions.readAloud")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: __props.isSpeaking ? "volume-x" : "volume-2",
						size: "small",
						"icon-size": "medium",
						"data-test-id": "agent-chat-message-read-aloud",
						onClick: _cache[1] || (_cache[1] = ($event) => emit("readAloud"))
					}, null, 8, ["icon"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var AgentChatMessageActions_vue_vue_type_style_index_0_lang_module_default = { actions: "_actions_4px68_125" };
var AgentChatMessageActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageActions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatMessageAttachments.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["title"];
var _hoisted_2 = [
	"href",
	"title",
	"onClick"
];
var _hoisted_3 = [
	"src",
	"alt",
	"onError"
];
var AgentChatMessageAttachments_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageAttachments",
	props: {
		attachments: {},
		projectId: {},
		agentId: {}
	},
	setup(__props) {
		const props = __props;
		const rootStore = useRootStore();
		const i18n = useI18n();
		const unavailableKeys = reactive(/* @__PURE__ */ new Set());
		const objectUrlsByFile = /* @__PURE__ */ new Map();
		function objectUrlFor(file) {
			let url = objectUrlsByFile.get(file);
			if (!url) {
				url = URL.createObjectURL(file);
				objectUrlsByFile.set(file, url);
			}
			return url;
		}
		function downloadUrl(attachment) {
			if (!attachment.fileId) return void 0;
			const { baseUrl } = rootStore.restApiContext;
			return `${baseUrl}/projects/${encodeURIComponent(props.projectId)}/agents/v2/${encodeURIComponent(props.agentId)}/chat/attachments/${encodeURIComponent(attachment.fileId)}`;
		}
		function isImage(attachment) {
			return attachment.mimeType.startsWith("image/");
		}
		const items = computed(() => props.attachments.map((attachment, index) => {
			const href = downloadUrl(attachment);
			let imageSrc;
			if (isImage(attachment)) {
				if (href) imageSrc = href;
				else if (attachment.file) imageSrc = objectUrlFor(attachment.file);
			}
			return {
				key: attachment.fileId ?? `local-${index}`,
				attachment,
				imageSrc,
				href
			};
		}));
		onBeforeUnmount(() => {
			for (const url of objectUrlsByFile.values()) URL.revokeObjectURL(url);
			objectUrlsByFile.clear();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.attachments),
				"data-testid": "agent-chat-message-attachments"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item) => {
				return openBlock(), createElementBlock(Fragment, { key: item.key }, [unavailableKeys.has(item.key) ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.fileChip, _ctx.$style.unavailable]),
					title: item.attachment.fileName,
					"data-testid": "agent-chat-attachment-unavailable"
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: "small"
					}),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileName) }, toDisplayString(item.attachment.fileName), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileSize) }, toDisplayString(unref(i18n).baseText("agents.chat.attachments.unavailable")), 3)
				], 10, _hoisted_1$3)) : item.imageSrc ? (openBlock(), createElementBlock("a", {
					key: 1,
					href: item.href,
					target: "_blank",
					rel: "noopener noreferrer",
					class: normalizeClass([_ctx.$style.thumbnailLink, { [_ctx.$style.notClickable]: !item.href }]),
					title: item.attachment.fileName,
					onClick: ($event) => !item.href && $event.preventDefault()
				}, [createBaseVNode("img", {
					src: item.imageSrc,
					alt: item.attachment.fileName,
					class: normalizeClass(_ctx.$style.thumbnail),
					onError: ($event) => item.href && unavailableKeys.add(item.key)
				}, null, 42, _hoisted_3)], 10, _hoisted_2)) : (openBlock(), createBlock(resolveDynamicComponent(item.href ? "a" : "span"), {
					key: 2,
					href: item.href,
					download: item.href ? item.attachment.fileName : void 0,
					class: normalizeClass(_ctx.$style.fileChip),
					title: item.attachment.fileName
				}, {
					default: withCtx(() => [
						createVNode(unref(N8nIcon_default), {
							icon: "paperclip",
							size: "small"
						}),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.fileName) }, toDisplayString(item.attachment.fileName), 3),
						item.attachment.sizeBytes !== void 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.fileSize)
						}, toDisplayString(unref(formatBytes)(item.attachment.sizeBytes)), 3)) : createCommentVNode("", true)
					]),
					_: 2
				}, 1032, [
					"href",
					"download",
					"class",
					"title"
				]))], 64);
			}), 128))], 2);
		};
	}
});
var AgentChatMessageAttachments_vue_vue_type_style_index_0_lang_module_default = {
	attachments: "_attachments_1788v_125",
	thumbnailLink: "_thumbnailLink_1788v_133",
	notClickable: "_notClickable_1788v_143",
	thumbnail: "_thumbnail_1788v_133",
	fileChip: "_fileChip_1788v_154",
	fileName: "_fileName_1788v_168",
	fileSize: "_fileSize_1788v_175",
	unavailable: "_unavailable_1788v_180"
};
var AgentChatMessageAttachments_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageAttachments_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageAttachments_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentMarkdownChunk.vue?vue&type=script&setup=true&lang.ts
var AgentMarkdownChunk_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentMarkdownChunk",
	props: { source: {} },
	setup(__props) {
		const router = useRouter();
		const AGENT_PREVIEW_PATH = /^\/projects\/[^/]+\/agents\/[^/]+\/preview\/?$/;
		function handleLinkClick(event) {
			if (event.metaKey || event.ctrlKey || !(event.target instanceof Element)) return;
			const href = event.target.closest("a")?.getAttribute("href");
			if (!href || !AGENT_PREVIEW_PATH.test(href)) return;
			event.preventDefault();
			router.push(href);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(VueMarkdown), {
				source: __props.source,
				class: normalizeClass(_ctx.$style.markdown),
				onClick: handleLinkClick
			}, null, 8, ["source", "class"]);
		};
	}
});
var AgentMarkdownChunk_vue_vue_type_style_index_0_lang_module_default = { markdown: "_markdown_7aefu_125" };
var AgentMarkdownChunk_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentMarkdownChunk_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentMarkdownChunk_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentTypingIndicator.vue?vue&type=style&index=0&lang.module.scss
var typing = "_typing_nu3ij_390";
var typingBlink = "_typingBlink_nu3ij_1";
var shimmer = "_shimmer_nu3ij_1";
var spin = "_spin_nu3ij_1";
var opacityPulse = "_opacityPulse_nu3ij_1";
var popoverIn = "_popoverIn_nu3ij_1";
var fadeIn = "_fadeIn_nu3ij_1";
var collapsibleSlideDown = "_collapsibleSlideDown_nu3ij_1";
var collapsibleSlideUp = "_collapsibleSlideUp_nu3ij_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_nu3ij_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_nu3ij_1";
var blurSwapIn = "_blurSwapIn_nu3ij_1";
var blurSwapOut = "_blurSwapOut_nu3ij_1";
var pulseGlow = "_pulseGlow_nu3ij_1";
var pulseGlowDelayed = "_pulseGlowDelayed_nu3ij_1";
var fade = "_fade_nu3ij_1";
var fadeInUp = "_fadeInUp_nu3ij_1";
var fadeInDown = "_fadeInDown_nu3ij_1";
var fadeInLeft = "_fadeInLeft_nu3ij_1";
var fadeInRight = "_fadeInRight_nu3ij_1";
var fadeOut = "_fadeOut_nu3ij_1";
var fadeOutDown = "_fadeOutDown_nu3ij_1";
var fadeOutUp = "_fadeOutUp_nu3ij_1";
var fadeOutLeft = "_fadeOutLeft_nu3ij_1";
var fadeOutRight = "_fadeOutRight_nu3ij_1";
var ping = "_ping_nu3ij_1";
var blinkBackground = "_blinkBackground_nu3ij_1";
var AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing,
	typingBlink,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_nu3ij_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground
};
//#endregion
//#region src/features/agents/components/AgentTypingIndicator.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(_ctx.$style.typing),
		"data-test-id": "agent-typing-indicator"
	}, [..._cache[0] || (_cache[0] = [
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1)
	])], 2);
}
var AgentTypingIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/interactionRegistry.ts
function findInteractionRenderer(payload, renderers) {
	return renderers.find((renderer) => renderer.matches(payload));
}
//#endregion
//#region src/features/ai/shared/agentsChat/components/InteractionRenderer.vue
var InteractionRenderer_default = /* @__PURE__ */ defineComponent({
	__name: "InteractionRenderer",
	props: {
		payload: {},
		renderers: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const renderer = computed(() => findInteractionRenderer(props.payload, props.renderers));
		const rendererProps = computed(() => {
			if (!renderer.value?.getProps) return { payload: props.payload };
			return renderer.value.getProps(props.payload);
		});
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return renderer.value ? (openBlock(), createBlock(resolveDynamicComponent(renderer.value.component), mergeProps({ key: 0 }, rendererProps.value, {
				disabled: __props.disabled,
				onSubmit
			}), null, 16, ["disabled"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/interactive/ApprovalCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = {
	key: 0,
	"data-testid": "agent-approval-tool-details"
};
var ApprovalCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApprovalCard",
	props: {
		input: {},
		disabled: { type: Boolean },
		resolvedValue: {}
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toolLabel = computed(() => props.input.displayName ?? props.input.toolName);
		const detailsText = computed(() => {
			const details = props.input.details ?? props.input.args;
			if (details === void 0) return "";
			try {
				return JSON.stringify(details, null, 2) ?? "";
			} catch {
				return String(details);
			}
		});
		function submit(approved) {
			if (props.disabled) return;
			emit("submit", { approved });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass([_ctx.$style.card, __props.disabled && _ctx.$style.disabled]),
				"data-testid": "agent-approval-card"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [
					createVNode(unref(N8nText_default), {
						tag: "p",
						bold: "",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.title")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.description", { interpolate: { toolName: toolLabel.value } })), 1)]),
						_: 1
					}, 8, ["class"]),
					detailsText.value ? (openBlock(), createElementBlock("details", _hoisted_1$2, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.detailsSummary) }, [createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.viewToolDetails")), 1)]),
						_: 1
					})], 2), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.args) }, toDisplayString(detailsText.value), 3)])) : createCommentVNode("", true),
					__props.disabled && __props.resolvedValue ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.resolved)
					}, [createVNode(unref(N8nIcon_default), {
						icon: __props.resolvedValue.approved ? "circle-check" : "circle-x",
						size: "small",
						color: __props.resolvedValue.approved ? "success" : "danger"
					}, null, 8, ["icon", "color"]), createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.resolvedValue.approved ? "agents.chat.approval.approved" : "agents.chat.approval.rejected")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.actions)
					}, [createVNode(unref(N8nButton_default), {
						size: "medium",
						disabled: __props.disabled,
						"data-testid": "agent-approval-approve",
						onClick: _cache[0] || (_cache[0] = ($event) => submit(true))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.approve")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						size: "medium",
						variant: "outline",
						disabled: __props.disabled,
						"data-testid": "agent-approval-reject",
						onClick: _cache[1] || (_cache[1] = ($event) => submit(false))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.approval.reject")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2))
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var ApprovalCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1nmjc_125",
	disabled: "_disabled_1nmjc_131",
	cardBody: "_cardBody_1nmjc_135",
	resolved: "_resolved_1nmjc_141",
	actions: "_actions_1nmjc_142",
	title: "_title_1nmjc_148",
	description: "_description_1nmjc_149",
	args: "_args_1nmjc_157",
	detailsSummary: "_detailsSummary_1nmjc_170"
};
var ApprovalCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApprovalCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApprovalCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/N8nChatActionCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["src", "alt"];
var N8nChatActionCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "N8nChatActionCard",
	props: {
		input: {},
		resolvedValue: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const blocks = computed(() => {
			const result = [];
			for (const component of props.input.card.components) if (component.type === "button") {
				const last = result[result.length - 1];
				if (last?.kind === "buttons") last.buttons.push(component);
				else result.push({
					kind: "buttons",
					buttons: [component]
				});
			} else result.push({
				kind: "component",
				component
			});
			return result;
		});
		const fallbackSummary = computed(() => {
			if (props.input.card.title || props.input.card.message) return void 0;
			const text = props.input.text?.trim();
			return text ? text : void 0;
		});
		/**
		* Map the card's button style to a design-system button variant, mirroring
		* how the platform mappers treat them: `primary` = emphasized, `danger` =
		* destructive, `default`/unset = neutral.
		*/
		function buttonVariant(btn) {
			if (btn.style === "primary") return "solid";
			if (btn.style === "danger") return "destructive";
			return "outline";
		}
		function submitButton(btn) {
			if (props.disabled) return;
			emit("submit", {
				type: "button",
				value: btn.value
			});
		}
		function submitOption(component, value) {
			if (props.disabled) return;
			emit("submit", {
				type: "select",
				...component.id && { id: component.id },
				value
			});
		}
		function isButtonSelected(btn) {
			return props.resolvedValue?.type === "button" && props.resolvedValue.value === btn.value;
		}
		function isOptionSelected(component, value) {
			return props.resolvedValue?.type === "select" && props.resolvedValue.value === value && (props.resolvedValue.id === void 0 || props.resolvedValue.id === component.id);
		}
		/** Chosen value for a select/radio_select group: the resolved answer, if any. */
		function selectedOptionValue(component) {
			return component.options.find((option) => isOptionSelected(component, option.value))?.value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				"data-testid": "n8n-chat-action-card"
			}, [
				__props.input.card.title ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.title),
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.card.title), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				__props.input.card.message ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass(_ctx.$style.message),
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.input.card.message), 1)]),
					_: 1
				}, 8, ["class"])) : fallbackSummary.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					class: normalizeClass(_ctx.$style.title),
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(fallbackSummary.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(blocks.value, (block, blockIdx) => {
					return openBlock(), createElementBlock(Fragment, { key: blockIdx }, [block.kind === "buttons" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.buttonRow),
						"data-testid": "n8n-chat-card-button-row"
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(block.buttons, (button, buttonIdx) => {
						return openBlock(), createBlock(unref(N8nButton_default), {
							key: buttonIdx,
							size: "small",
							variant: buttonVariant(button),
							disabled: __props.disabled && !isButtonSelected(button),
							"data-testid": "n8n-chat-card-button",
							onClick: ($event) => submitButton(button)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(button.label ?? button.text ?? button.value), 1)]),
							_: 2
						}, 1032, [
							"variant",
							"disabled",
							"onClick"
						]);
					}), 128))], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [block.component.type === "section" && (block.component.text || block.component.button) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.section)
					}, [block.component.text ? (openBlock(), createBlock(unref(N8nText_default), { key: 0 }, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.text), 1)]),
						_: 2
					}, 1024)) : createCommentVNode("", true), block.component.button ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.sectionButton),
						size: "small",
						variant: buttonVariant(block.component.button),
						disabled: __props.disabled && !isButtonSelected(block.component.button),
						"data-testid": "n8n-chat-card-section-button",
						onClick: ($event) => submitButton(block.component.button)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.button.label ?? block.component.button.text ?? block.component.button.value), 1)]),
						_: 2
					}, 1032, [
						"class",
						"variant",
						"disabled",
						"onClick"
					])) : createCommentVNode("", true)], 2)) : block.component.type === "divider" ? (openBlock(), createElementBlock("hr", {
						key: 1,
						class: normalizeClass(_ctx.$style.divider)
					}, null, 2)) : block.component.type === "radio_select" ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [block.component.label ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.selectLabel),
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.label), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(block.component.options ?? [], (option) => {
						return openBlock(), createBlock(unref(ElRadio), {
							key: option.value,
							class: normalizeClass(_ctx.$style.radio),
							"model-value": selectedOptionValue(block.component) ?? "",
							label: option.value,
							disabled: __props.disabled,
							"data-testid": "n8n-chat-card-radio",
							"onUpdate:modelValue": ($event) => submitOption(block.component, option.value)
						}, {
							default: withCtx(() => [createBaseVNode("span", null, toDisplayString(option.label), 1), option.description ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								size: "xsmall",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(option.description), 1)]),
								_: 2
							}, 1024)) : createCommentVNode("", true)]),
							_: 2
						}, 1032, [
							"class",
							"model-value",
							"label",
							"disabled",
							"onUpdate:modelValue"
						]);
					}), 128))], 2)) : block.component.type === "select" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.selectGroup)
					}, [block.component.label ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.selectLabel),
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(block.component.label), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nSelect_default), {
						"model-value": selectedOptionValue(block.component),
						size: "small",
						disabled: __props.disabled,
						placeholder: block.component.placeholder,
						"data-testid": "n8n-chat-card-select",
						"onUpdate:modelValue": ($event) => submitOption(block.component, $event)
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(block.component.options ?? [], (option) => {
							return openBlock(), createBlock(unref(N8nOption_default), {
								key: option.value,
								value: option.value,
								label: option.label
							}, null, 8, ["value", "label"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"model-value",
						"disabled",
						"placeholder",
						"onUpdate:modelValue"
					])], 2)) : block.component.type === "fields" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.fieldsGroup)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(block.component.fields ?? block.component.items ?? [], (field) => {
						return openBlock(), createElementBlock("div", {
							key: field.label,
							class: normalizeClass(_ctx.$style.fieldRow)
						}, [createVNode(unref(N8nText_default), {
							size: "small",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.label), 1)]),
							_: 2
						}, 1024), createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(field.value), 1)]),
							_: 2
						}, 1024)], 2);
					}), 128))], 2)) : block.component.type === "image" && block.component.url ? (openBlock(), createElementBlock("img", {
						key: 5,
						src: block.component.url,
						alt: block.component.alt ?? block.component.altText ?? "",
						class: normalizeClass(_ctx.$style.image)
					}, null, 10, _hoisted_1$1)) : createCommentVNode("", true)], 64))], 64);
				}), 128))
			], 2);
		};
	}
});
var N8nChatActionCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_p2s4l_126",
	title: "_title_p2s4l_135",
	message: "_message_p2s4l_139",
	section: "_section_p2s4l_143",
	sectionButton: "_sectionButton_p2s4l_150",
	divider: "_divider_p2s4l_154",
	buttonRow: "_buttonRow_p2s4l_160",
	selectGroup: "_selectGroup_p2s4l_166",
	selectLabel: "_selectLabel_p2s4l_172",
	radio: "_radio_p2s4l_176",
	fieldsGroup: "_fieldsGroup_p2s4l_180",
	fieldRow: "_fieldRow_p2s4l_186",
	image: "_image_p2s4l_191"
};
var N8nChatActionCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(N8nChatActionCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": N8nChatActionCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/interactive/InteractiveCard.vue
var InteractiveCard_default = /* @__PURE__ */ defineComponent({
	__name: "InteractiveCard",
	props: { payload: {} },
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		/**
		* Disabled when the card is already resolved OR when it's still open but has
		* no `runId` to resume against. The latter happens when a stale interactive
		* card from the open checkpoint can't be matched to a backend suspension —
		* normally an after-effect of expired or pruned checkpoint state.
		*/
		const disabled = computed(() => !!props.payload.resolvedAt || !props.payload.runId);
		const interactiveRenderers = [{
			key: "approval",
			component: ApprovalCard_default,
			matches: (payload) => payload.toolName === APPROVAL_TOOL_NAME,
			getProps: (payload) => {
				if (payload.toolName !== "approval") return {};
				return {
					input: payload.input,
					resolvedValue: payload.resolvedValue
				};
			}
		}, {
			key: "chat_action",
			component: N8nChatActionCard_default,
			matches: (payload) => payload.toolName === N8N_CHAT_ACTION_TOOL_NAME,
			getProps: (payload) => {
				if (payload.toolName !== "chat_action") return {};
				return {
					input: payload.input,
					resolvedValue: payload.resolvedValue
				};
			}
		}];
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(InteractionRenderer_default, {
				payload: __props.payload,
				renderers: interactiveRenderers,
				disabled: disabled.value,
				onSubmit
			}, null, 8, ["payload", "disabled"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMessageList.vue?vue&type=script&setup=true&lang.ts
var SCROLL_STICK_THRESHOLD_PX = 80;
/**
* True when the user is (or was last) near the bottom of the chat and wants
* incoming stream chunks to keep scrolling into view. Flipped to false when
* the user scrolls up away from the bottom, and back to true when they
* scroll back down or send a new message.
*/
var AgentChatMessageList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageList",
	props: {
		messages: {},
		messagingState: {},
		projectId: {},
		agentId: {},
		sessionId: {},
		canSendToAssistant: { type: Boolean }
	},
	emits: ["resume", "sendToAssistant"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const canSendToAssistant = computed(() => Boolean(props.canSendToAssistant && props.agentId && props.sessionId));
		function onFixWithAssistant(group, failures) {
			const executionId = group.kind === "toolRun" ? group.executionId : group.message.executionId;
			if (!executionId || failures.length === 0) return;
			emit("sendToAssistant", {
				executionId,
				failures
			});
		}
		function onInteractiveSubmit(payload, resumeData) {
			if (!payload.runId) return;
			emit("resume", {
				runId: payload.runId,
				toolCallId: payload.toolCallId,
				resumeData
			});
		}
		function isIntegrationActionSuspend(value) {
			return isRecord(value) && value.type === "integration_action";
		}
		/**
		* Returns a display name for the external platform a tool call is waiting on,
		* or `undefined` when the tool call either isn't suspended or renders its own
		* interactive card. n8n_chat_action carries the integration_action sidecar
		* but is excluded explicitly because it renders its own interactive card in
		* the chat.
		*/
		function externalWaitPlatform(tc) {
			if (tc.state !== TOOL_CALL_STATE.SUSPENDED) return void 0;
			if (tc.tool === "chat_action") return void 0;
			if (!isIntegrationActionSuspend(tc.suspendPayload)) return void 0;
			const base = tc.tool.replace(/_action$/, "").replace(/_\d+$/, "");
			return base.charAt(0).toUpperCase() + base.slice(1);
		}
		/**
		* Open cards always render. Once resolved, answered interactive cards clear
		* from the chat (both approval and n8n chat cards collapse into their
		* tool-step summary) — but display-only n8n chat cards persist: they are
		* content, and being born resolved they would otherwise never render at all.
		*/
		function shouldRenderInteractive(payload) {
			if (!payload.resolvedAt) return !!payload.runId;
			return payload.toolName === "chat_action" && !isAwaitingCard(payload.input.card);
		}
		function getRenderableInteractives(message) {
			return getMessageInteractives(message).filter(shouldRenderInteractive);
		}
		function getMessageRenderItems(message) {
			const renderableInteractives = getRenderableInteractives(message);
			const renderableByToolCallId = new Map(renderableInteractives.map((payload) => [payload.toolCallId, payload]));
			if (!message.renderParts?.length) return [...message.content ? [{
				type: "text",
				key: "text",
				text: message.content
			}] : [], ...renderableInteractives.map((payload) => ({
				type: "interactive",
				key: `interactive-${payload.toolCallId}`,
				payload
			}))];
			const items = [];
			const renderedInteractiveIds = /* @__PURE__ */ new Set();
			for (const [index, part] of message.renderParts.entries()) {
				if (part.type === "text") {
					if (part.text) items.push({
						type: "text",
						key: `text-${index}`,
						text: part.text
					});
					continue;
				}
				const payload = renderableByToolCallId.get(part.toolCallId);
				if (!payload) continue;
				renderedInteractiveIds.add(payload.toolCallId);
				items.push({
					type: "interactive",
					key: `interactive-${payload.toolCallId}`,
					payload
				});
			}
			for (const payload of renderableInteractives) {
				if (renderedInteractiveIds.has(payload.toolCallId)) continue;
				items.push({
					type: "interactive",
					key: `interactive-${payload.toolCallId}`,
					payload
				});
			}
			return items;
		}
		const scrollRef = useTemplateRef("scrollRef");
		const displayGroups = computed(() => buildDisplayGroups(props.messages));
		function isThinkingActive(message) {
			return message.status === CHAT_MESSAGE_STATUS.STREAMING || message.status === CHAT_MESSAGE_STATUS.AWAITING_USER;
		}
		function getAssistantGroupContent(group) {
			if (group.kind === "toolRun") return group.finalMessage?.content ?? "";
			return group.message.role === "assistant" ? group.message.content : "";
		}
		function isAssistantGroup(group) {
			return group.kind === "toolRun" || group.message.role === "assistant";
		}
		function getAssistantRunContent(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return "";
			const lines = [];
			for (let i = index; i >= 0; i--) {
				const group = displayGroups.value[i];
				if (!isAssistantGroup(group)) break;
				const content = getAssistantGroupContent(group).trim();
				if (content) lines.unshift(content);
			}
			return lines.join("\n\n");
		}
		function getRecallMemoryEntries(output) {
			if (!output || typeof output !== "object") return [];
			if (!("entries" in output) || !Array.isArray(output.entries)) return [];
			const entries = [];
			for (const [index, entry] of output.entries.entries()) {
				if (!entry || typeof entry !== "object") continue;
				if (!("content" in entry) || typeof entry.content !== "string") continue;
				const id = "id" in entry && typeof entry.id === "string" ? entry.id : "createdAt" in entry && typeof entry.createdAt === "string" ? entry.createdAt : `${entry.content}:${index}`;
				entries.push({
					id,
					content: entry.content
				});
			}
			return entries;
		}
		function parseMemoryOutput(output) {
			return getRecallMemoryEntries(output).map((entry) => ({
				id: entry.id,
				keyMemory: entry.content.trim(),
				evidence: []
			})).filter((memory) => memory.keyMemory.length > 0);
		}
		function isCompletedAssistantGroup(group) {
			if (group.kind === "toolRun") return group.finalMessage !== void 0 && group.finalMessage.status !== CHAT_MESSAGE_STATUS.STREAMING && group.finalMessage.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
			return group.message.role === "assistant" && group.message.status !== CHAT_MESSAGE_STATUS.STREAMING && group.message.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
		}
		function shouldShowAssistantFooter(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return false;
			const group = displayGroups.value[index];
			if (!isAssistantGroup(group) || !isCompletedAssistantGroup(group)) return false;
			const nextGroup = displayGroups.value[index + 1];
			return !nextGroup || !isAssistantGroup(nextGroup);
		}
		function getMemoriesUsedInAssistantRun(groupId) {
			const index = displayGroups.value.findIndex((group) => group.id === groupId);
			if (index === -1) return [];
			const memories = [];
			const memoryIds = /* @__PURE__ */ new Set();
			for (let i = index; i >= 0; i--) {
				const group = displayGroups.value[i];
				if (!isAssistantGroup(group)) break;
				const toolCalls = group.kind === "toolRun" ? group.toolCalls : group.message.toolCalls ?? [];
				for (let j = toolCalls.length - 1; j >= 0; j--) {
					const toolCall = toolCalls[j];
					if (toolCall.tool !== "recall_memory") continue;
					const uniqueMemories = parseMemoryOutput(toolCall.output).filter((memory) => {
						if (memoryIds.has(memory.id)) return false;
						memoryIds.add(memory.id);
						return true;
					});
					memories.unshift(...uniqueMemories);
				}
			}
			return memories;
		}
		const openMemoryFooterGroupId = ref(null);
		function setMemoryFooterOpen(groupId, open) {
			openMemoryFooterGroupId.value = open ? groupId : openMemoryFooterGroupId.value === groupId ? null : openMemoryFooterGroupId.value;
		}
		const spokenMessageId = ref(null);
		const spokenText = computed(() => {
			if (!spokenMessageId.value) return "";
			return getAssistantRunContent(spokenMessageId.value);
		});
		const speech = useSpeechSynthesis(spokenText, {
			pitch: 1,
			rate: 1,
			volume: 1
		});
		const isSpeechSynthesisAvailable = computed(() => speech.isSupported.value);
		const isStickToBottom = ref(true);
		function isNearBottom() {
			const el = scrollRef.value;
			if (!el) return true;
			return el.scrollHeight - el.scrollTop - el.clientHeight <= SCROLL_STICK_THRESHOLD_PX;
		}
		function onScroll() {
			isStickToBottom.value = isNearBottom();
		}
		function scrollToBottom() {
			nextTick(() => {
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						if (scrollRef.value) {
							scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
							isStickToBottom.value = true;
						}
					});
				});
			});
		}
		function autoScrollIfSticky() {
			if (isStickToBottom.value) scrollToBottom();
		}
		function isSpeakingMessage(messageId) {
			return spokenMessageId.value === messageId && speech.status.value === "play";
		}
		function toggleReadAloud(messageId) {
			if (!isSpeechSynthesisAvailable.value) return;
			if (spokenMessageId.value === messageId && speech.status.value === "play") {
				speech.stop();
				spokenMessageId.value = null;
				return;
			}
			speech.stop();
			spokenMessageId.value = messageId;
			speech.speak();
		}
		onMounted(() => {
			if (props.messages.length > 0) scrollToBottom();
		});
		watch(() => props.messages.length, (newLen, oldLen) => {
			if ((oldLen ?? 0) < newLen) {
				if (props.messages[newLen - 1]?.role === "user") {
					scrollToBottom();
					return;
				}
			}
			autoScrollIfSticky();
		}, { flush: "post" });
		watch(() => props.messagingState, autoScrollIfSticky, { flush: "post" });
		watch(() => {
			const last = props.messages[props.messages.length - 1];
			if (!last) return "";
			const thinking = getMessageThinkingSegments(last).map((segment) => segment.content).join("");
			return `${last.content}|${last.toolCalls?.length ?? 0}|${getMessageInteractives(last).length}|${thinking}`;
		}, autoScrollIfSticky, { flush: "post" });
		watch(() => speech.status.value, (status) => {
			if (status === "end") spokenMessageId.value = null;
		});
		watch(spokenText, (value) => {
			if (!value && spokenMessageId.value) {
				speech.stop();
				spokenMessageId.value = null;
			}
		});
		onBeforeUnmount(() => {
			speech.stop();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "scrollRef",
				ref: scrollRef,
				class: normalizeClass(_ctx.$style.messages),
				onScrollPassive: onScroll
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayGroups.value, (group) => {
				return openBlock(), createElementBlock(Fragment, { key: group.id }, [group.kind === "toolRun" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.message, _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					group.toolCalls.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 0,
						"tool-calls": group.toolCalls,
						"project-id": __props.projectId,
						"can-fix-with-assistant": canSendToAssistant.value,
						"execution-id": group.executionId,
						onFixWithAssistant: ($event) => onFixWithAssistant(group, $event)
					}, null, 8, [
						"tool-calls",
						"project-id",
						"can-fix-with-assistant",
						"execution-id",
						"onFixWithAssistant"
					])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(group.toolCalls, (tc) => {
						return openBlock(), createElementBlock(Fragment, { key: `wait-${tc.toolCallId}` }, [externalWaitPlatform(tc) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							"data-testid": "agent-chat-external-wait"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.waitingExternal", { interpolate: { platform: externalWaitPlatform(tc) } })), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)], 64);
					}), 128)),
					group.interactives.some(shouldRenderInteractive) ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.interactives)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(group.interactives.filter(shouldRenderInteractive), (payload) => {
						return openBlock(), createBlock(InteractiveCard_default, {
							key: payload.toolCallId,
							payload,
							onSubmit: ($event) => onInteractiveSubmit(payload, $event)
						}, null, 8, ["payload", "onSubmit"]);
					}), 128))], 2)) : createCommentVNode("", true),
					group.finalMessage?.content ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.finalMessage.status === "error" }])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(AgentMarkdownChunk_default, { source: group.finalMessage.content }, null, 8, ["source"])], 2)], 2)) : createCommentVNode("", true),
					group.thinkingSegments.length ? (openBlock(), createBlock(AiThinkingBlock_default, {
						key: 3,
						segments: group.thinkingSegments,
						active: group.active || group.awaitingInput,
						"awaiting-input": group.awaitingInput,
						"duration-sec": unref(getThinkingDurationSec)(group.thinkingSegments),
						"test-id": "agent-chat-thinking-block"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(group.thinkingSegments, (segment) => {
							return openBlock(), createBlock(AiReasoningBlock_default, {
								key: segment.id,
								entry: segment,
								streaming: group.active && segment.endTime === void 0
							}, null, 8, ["entry", "streaming"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"segments",
						"active",
						"awaiting-input",
						"duration-sec"
					])) : createCommentVNode("", true),
					shouldShowAssistantFooter(group.id) ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"]), getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"is-speech-synthesis-available": isSpeechSynthesisAvailable.value,
						"is-speaking": isSpeakingMessage(group.id),
						"can-send-to-assistant": canSendToAssistant.value,
						onReadAloud: ($event) => toggleReadAloud(group.id),
						onSendToAssistant: _cache[0] || (_cache[0] = ($event) => emit("sendToAssistant"))
					}, null, 8, [
						"content",
						"is-speech-synthesis-available",
						"is-speaking",
						"can-send-to-assistant",
						"onReadAloud"
					])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					group.finalMessage?.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.finalMessage.content && !group.toolCalls.length && !group.thinkingSegments.length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 5,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.message, group.message.role === "user" ? _ctx.$style.user : _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					group.message.toolCalls?.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 0,
						"tool-calls": group.message.toolCalls,
						"project-id": __props.projectId,
						"can-fix-with-assistant": canSendToAssistant.value,
						"execution-id": group.message.executionId,
						onFixWithAssistant: ($event) => onFixWithAssistant(group, $event)
					}, null, 8, [
						"tool-calls",
						"project-id",
						"can-fix-with-assistant",
						"execution-id",
						"onFixWithAssistant"
					])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(group.message.toolCalls ?? [], (tc) => {
						return openBlock(), createElementBlock(Fragment, { key: `wait-${tc.toolCallId}` }, [externalWaitPlatform(tc) ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							"data-testid": "agent-chat-external-wait"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.waitingExternal", { interpolate: { platform: externalWaitPlatform(tc) } })), 1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true)], 64);
					}), 128)),
					group.message.attachments?.length && __props.projectId && __props.agentId ? (openBlock(), createBlock(AgentChatMessageAttachments_default, {
						key: 1,
						attachments: group.message.attachments,
						"project-id": __props.projectId,
						"agent-id": __props.agentId
					}, null, 8, [
						"attachments",
						"project-id",
						"agent-id"
					])) : createCommentVNode("", true),
					group.message.role === "user" && group.message.content ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass([_ctx.$style.chatMessage, _ctx.$style.chatMessageUser])
					}, toDisplayString(group.message.content), 3)) : (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(getMessageRenderItems(group.message), (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.key }, [item.type === "text" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.message.status === "error" }])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(AgentMarkdownChunk_default, { source: item.text }, null, 8, ["source"])], 2)], 2)) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.interactives)
						}, [createVNode(InteractiveCard_default, {
							payload: item.payload,
							onSubmit: ($event) => onInteractiveSubmit(item.payload, $event)
						}, null, 8, ["payload", "onSubmit"])], 2))], 64);
					}), 128)),
					group.thinkingSegments.length ? (openBlock(), createBlock(AiThinkingBlock_default, {
						key: 4,
						segments: group.thinkingSegments,
						active: isThinkingActive(group.message),
						"awaiting-input": group.message.status === unref(CHAT_MESSAGE_STATUS).AWAITING_USER,
						"duration-sec": unref(getThinkingDurationSec)(group.thinkingSegments),
						"test-id": "agent-chat-thinking-block"
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(group.thinkingSegments, (segment) => {
							return openBlock(), createBlock(AiReasoningBlock_default, {
								key: segment.id,
								entry: segment,
								streaming: group.message.status === unref(CHAT_MESSAGE_STATUS).STREAMING && segment.endTime === void 0
							}, null, 8, ["entry", "streaming"]);
						}), 128))]),
						_: 2
					}, 1032, [
						"segments",
						"active",
						"awaiting-input",
						"duration-sec"
					])) : createCommentVNode("", true),
					shouldShowAssistantFooter(group.id) ? (openBlock(), createElementBlock("div", {
						key: 5,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"is-speech-synthesis-available": isSpeechSynthesisAvailable.value,
						"is-speaking": isSpeakingMessage(group.id),
						"can-send-to-assistant": canSendToAssistant.value,
						onReadAloud: ($event) => toggleReadAloud(group.id),
						onSendToAssistant: _cache[1] || (_cache[1] = ($event) => emit("sendToAssistant"))
					}, null, 8, [
						"content",
						"is-speech-synthesis-available",
						"is-speaking",
						"can-send-to-assistant",
						"onReadAloud"
					])) : createCommentVNode("", true), createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"])], 2)) : createCommentVNode("", true),
					group.message.role === "assistant" && group.message.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.message.content && !group.message.toolCalls?.length && !unref(getMessageThinkingSegments)(group.message).length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 6,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2))], 64);
			}), 128)), __props.messagingState === "waitingFirstChunk" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.message)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(AgentTypingIndicator_default, { class: normalizeClass(_ctx.$style.typingIndicator) }, null, 8, ["class"])], 2)], 2)) : createCommentVNode("", true)], 34);
		};
	}
});
var AgentChatMessageList_vue_vue_type_style_index_0_lang_module_default = {
	messages: "_messages_3beqn_125",
	message: "_message_3beqn_125",
	content: "_content_3beqn_148",
	messageFooter: "_messageFooter_3beqn_154",
	assistant: "_assistant_3beqn_163",
	messageFooterVisible: "_messageFooterVisible_3beqn_167",
	user: "_user_3beqn_171",
	interactives: "_interactives_3beqn_181",
	chatMessage: "_chatMessage_3beqn_189",
	chatMessageUser: "_chatMessageUser_3beqn_195",
	chatMessageError: "_chatMessageError_3beqn_204",
	markdownContent: "_markdownContent_3beqn_212",
	typingIndicator: "_typingIndicator_3beqn_224"
};
var AgentChatMessageList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatMessageList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatMessageList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentChatPanel.vue?vue&type=script&setup=true&lang.ts
var AgentChatPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatPanel",
	props: {
		visible: {
			type: Boolean,
			default: true
		},
		projectId: {},
		agentId: {},
		mode: { default: "panel" },
		continueSessionId: { default: void 0 },
		agentConfig: {},
		agentStatus: {},
		connectedTriggers: {},
		canEditAgent: {
			type: Boolean,
			default: true
		},
		canSendToAssistant: {
			type: Boolean,
			default: false
		},
		beforeSend: {
			type: Function,
			default: void 0
		},
		inputDraft: { default: void 0 }
	},
	emits: [
		"update:streaming",
		"update:inputDraft",
		"continue-loaded",
		"initial-consumed",
		"back",
		"open-build",
		"send-to-assistant"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const agentTelemetry = useAgentTelemetry();
		const toast = useToast();
		const attachedFiles = ref([]);
		const chatInput = useTemplateRef("chatInput");
		function focusInput(options) {
			chatInput.value?.focus(options);
		}
		const attachmentCapabilities = computed(() => {
			const provider = props.agentConfig?.model?.split("/")[0];
			return provider ? PROVIDER_CAPABILITIES[provider]?.attachments : void 0;
		});
		const showAttach = computed(() => {
			const capabilities = attachmentCapabilities.value;
			return !!capabilities && (capabilities.image || capabilities.pdf || capabilities.audio);
		});
		const acceptedMimeTypes = computed(() => {
			const capabilities = attachmentCapabilities.value;
			if (!capabilities) return void 0;
			return [
				capabilities.image ? "image/*" : null,
				capabilities.pdf ? "application/pdf" : null,
				capabilities.audio ? "audio/*" : null
			].filter((entry) => entry !== null).join(",");
		});
		function handleFilesSelected(files) {
			for (const file of files) {
				if (attachedFiles.value.length >= 10) {
					toast.showMessage({
						type: "error",
						title: locale.baseText("agents.chat.attachments.tooMany", { interpolate: { limit: String(10) } })
					});
					break;
				}
				if (file.size > 10485760) {
					toast.showMessage({
						type: "error",
						title: locale.baseText("agents.chat.attachments.tooLarge", { interpolate: {
							fileName: file.name,
							limit: String(10)
						} })
					});
					continue;
				}
				attachedFiles.value.push(file);
			}
		}
		function handleFileRemove(file) {
			attachedFiles.value = attachedFiles.value.filter((f) => f !== file);
		}
		const internalInputText = ref(props.inputDraft ?? "");
		const inputText = computed({
			get: () => props.inputDraft !== void 0 ? props.inputDraft : internalInputText.value,
			set: (value) => {
				if (props.inputDraft !== void 0) emit("update:inputDraft", value);
				else internalInputText.value = value;
			}
		});
		const isPreparingToSend = ref(false);
		let disposed = false;
		const { messages, isStreaming, isCancelling, messagingState, fatalError, warnings, loadHistory, sendMessage, stopGenerating, resume, cancelAndSteer, dismissFatalError, dismissWarning } = useAgentChatStream({
			projectId: toRef(props, "projectId"),
			agentId: toRef(props, "agentId"),
			continueSessionId: toRef(props, "continueSessionId"),
			onHistoryLoaded: (count) => {
				if (props.continueSessionId) emit("continue-loaded", {
					sessionId: props.continueSessionId,
					count
				});
			}
		});
		const RUNTIME_ISSUE_PATH_PREFIXES = [
			{
				prefix: "tools.",
				key: "agents.chat.misconfigured.missing.tools"
			},
			{
				prefix: "mcpServers.",
				key: "agents.chat.misconfigured.missing.mcpServers"
			},
			{
				prefix: "subAgents.agents.",
				key: "agents.chat.misconfigured.missing.subAgents.agents"
			}
		];
		function humaniseMissingField(field) {
			if (field.startsWith("skill:")) return locale.baseText("agents.chat.misconfigured.missing.skill", { interpolate: { id: field.slice(6) } });
			const exactKey = `agents.chat.misconfigured.missing.${field}`;
			const exactTranslation = locale.baseText(exactKey);
			if (exactTranslation !== exactKey) return exactTranslation;
			for (const { prefix, key } of RUNTIME_ISSUE_PATH_PREFIXES) if (field.startsWith(prefix)) return locale.baseText(key);
			return field;
		}
		const missingFields = computed(() => {
			if (!fatalError.value) return "";
			return fatalError.value.missing.map(humaniseMissingField).join(", ");
		});
		const openInteractive = computed(() => findOpenInteractive(messages.value));
		const hasOpenInteraction = computed(() => openInteractive.value !== void 0);
		const hasOpenApproval = computed(() => openInteractive.value?.toolName === APPROVAL_TOOL_NAME);
		const hasOpenInteractiveQuestion = computed(() => hasOpenInteraction.value && !hasOpenApproval.value);
		const hasOpenSuspension = computed(() => messages.value.some((message) => message.toolCalls?.some((toolCall) => toolCall.state === TOOL_CALL_STATE.SUSPENDED && toolCall.runId)));
		const hasInFlightToolCalls = computed(() => messages.value.some((message) => message.toolCalls?.some((toolCall) => toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING)));
		const showSuspensionStopAlongsideSend = computed(() => hasOpenInteractiveQuestion.value && !isStreaming.value && !isCancelling.value);
		const showStopAsPrimaryAction = computed(() => isStreaming.value || isCancelling.value || hasOpenApproval.value || hasOpenSuspension.value && !hasOpenInteractiveQuestion.value || !isStreaming.value && hasInFlightToolCalls.value);
		const chatPlaceholder = computed(() => {
			if (hasOpenApproval.value) return locale.baseText("agents.chat.approval.inputPlaceholder");
			if (hasOpenInteractiveQuestion.value) return locale.baseText("agents.chat.answerQuestionPlaceholder");
			const agentName = props.agentConfig?.name?.trim();
			return agentName ? locale.baseText("agents.chat.input.placeholder.withAgent", { interpolate: { agentName } }) : locale.baseText("agents.chat.input.placeholder");
		});
		watch(isStreaming, (v) => emit("update:streaming", v));
		async function onSubmit() {
			const text = inputText.value.trim();
			const files = attachedFiles.value;
			if (!text && files.length === 0 || isStreaming.value || isCancelling.value || isPreparingToSend.value || hasOpenApproval.value) return;
			if (hasOpenInteractiveQuestion.value) {
				if (!text) return;
				inputText.value = "";
				await cancelAndSteer(text);
				return;
			}
			isPreparingToSend.value = true;
			try {
				const target = {
					projectId: props.projectId,
					agentId: props.agentId,
					continueSessionId: props.continueSessionId
				};
				const isCurrentTarget = () => !disposed && props.projectId === target.projectId && props.agentId === target.agentId && props.continueSessionId === target.continueSessionId;
				try {
					await props.beforeSend?.();
				} catch {
					return;
				}
				if (!isCurrentTarget()) return;
				const fingerprint = await buildAgentConfigFingerprint(props.agentConfig, props.connectedTriggers);
				if (!isCurrentTarget()) return;
				inputText.value = "";
				attachedFiles.value = [];
				agentTelemetry.trackSubmittedMessage({
					agentId: props.agentId,
					status: props.agentStatus,
					agentConfig: fingerprint
				});
				if (files.length > 0) await sendMessage(text, files);
				else await sendMessage(text);
			} finally {
				isPreparingToSend.value = false;
			}
		}
		function sendMessageFromOutside(message) {
			if (hasOpenApproval.value) return;
			inputText.value = message;
			onSubmit();
		}
		__expose({
			focusInput,
			sendMessageFromOutside
		});
		onMounted(() => {
			loadHistory();
		});
		onBeforeUnmount(() => {
			disposed = true;
			if (isStreaming.value) stopGenerating();
		});
		return (_ctx, _cache) => {
			return __props.visible ? (openBlock(), createElementBlock("aside", {
				key: 0,
				class: normalizeClass([__props.mode === "inline" ? _ctx.$style.inlinePanel : _ctx.$style.panel])
			}, [
				unref(fatalError) ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "danger",
					class: normalizeClass(_ctx.$style.errorBanner),
					slim: ""
				}, {
					trailingContent: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "x",
						variant: "ghost",
						size: "xsmall",
						"aria-label": unref(locale).baseText("agents.chat.misconfigured.dismiss"),
						title: unref(locale).baseText("agents.chat.misconfigured.dismiss"),
						onClick: unref(dismissFatalError)
					}, null, 8, [
						"aria-label",
						"title",
						"onClick"
					])]),
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorBannerBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.errorBannerTitle) }, toDisplayString(unref(locale).baseText("agents.chat.misconfigured.title")), 3), missingFields.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.errorBannerDetail)
					}, toDisplayString(unref(locale).baseText("agents.chat.misconfigured.issuesPrefix")) + " " + toDisplayString(missingFields.value), 3)) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(unref(warnings), (warning, index) => {
					return openBlock(), createElementBlock("div", {
						key: `${warning.code ?? "mcp"}-${index}`,
						class: normalizeClass(_ctx.$style.warningBanner)
					}, [createVNode(unref(N8nCallout_default), {
						theme: "warning",
						slim: "",
						"data-test-id": `agent-chat-warning-${index}`
					}, {
						trailingContent: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "x",
							variant: "ghost",
							size: "xsmall",
							"aria-label": unref(locale).baseText("agents.chat.warning.dismiss"),
							title: unref(locale).baseText("agents.chat.warning.dismiss"),
							onClick: ($event) => unref(dismissWarning)(index)
						}, null, 8, [
							"aria-label",
							"title",
							"onClick"
						])]),
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.warningBannerBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.warningBannerTitle) }, toDisplayString(unref(locale).baseText("agents.chat.warning.mcp.title")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.warningBannerDetail) }, toDisplayString(warning.server ? unref(locale).baseText("agents.chat.warning.mcp.detail", { interpolate: {
							server: warning.server,
							error: warning.message
						} }) : warning.message), 3)], 2)]),
						_: 2
					}, 1032, ["data-test-id"])], 2);
				}), 128)),
				unref(messages).length === 0 && !unref(isStreaming) ? (openBlock(), createBlock(AgentChatEmptyState_default, {
					key: 1,
					"agent-config": __props.agentConfig
				}, null, 8, ["agent-config"])) : (openBlock(), createBlock(AgentChatMessageList_default, {
					key: 2,
					messages: unref(messages),
					"messaging-state": unref(messagingState),
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"session-id": __props.continueSessionId,
					"can-send-to-assistant": __props.canSendToAssistant,
					onResume: unref(resume),
					onSendToAssistant: _cache[0] || (_cache[0] = ($event) => emit("send-to-assistant", $event))
				}, null, 8, [
					"messages",
					"messaging-state",
					"project-id",
					"agent-id",
					"session-id",
					"can-send-to-assistant",
					"onResume"
				])),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputArea) }, [createVNode(ChatInputBase_default, {
					ref_key: "chatInput",
					ref: chatInput,
					modelValue: inputText.value,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputText.value = $event),
					placeholder: chatPlaceholder.value,
					"is-streaming": showStopAsPrimaryAction.value,
					"show-voice": "",
					"show-attach": showAttach.value,
					"accepted-mime-types": acceptedMimeTypes.value,
					"can-submit": !hasOpenApproval.value && !unref(isStreaming) && !unref(isCancelling) && !isPreparingToSend.value && (inputText.value.trim().length > 0 || attachedFiles.value.length > 0),
					disabled: hasOpenApproval.value || unref(isCancelling) || isPreparingToSend.value || unref(isStreaming) && unref(messagingState) !== "receiving",
					"data-testid": "chat-input",
					onSubmit,
					onStop: unref(stopGenerating),
					onFilesSelected: handleFilesSelected
				}, createSlots({
					"footer-start": withCtx(() => [renderSlot(_ctx.$slots, "footer-start"), showSuspensionStopAlongsideSend.value ? (openBlock(), createBlock(unref(N8nSendStopButton_default), {
						key: 0,
						streaming: "",
						"stop-button-test-id": "agent-chat-suspended-stop-button",
						onStop: unref(stopGenerating)
					}, null, 8, ["onStop"])) : createCommentVNode("", true)]),
					_: 2
				}, [attachedFiles.value.length > 0 ? {
					name: "attachments",
					fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.attachmentsStrip) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachedFiles.value, (file, index) => {
						return openBlock(), createBlock(AttachmentPreview_default, {
							key: `${file.name}-${index}`,
							file,
							"is-removable": "",
							onRemove: handleFileRemove
						}, null, 8, ["file"]);
					}), 128))], 2)]),
					key: "0"
				} : void 0]), 1032, [
					"modelValue",
					"placeholder",
					"is-streaming",
					"show-attach",
					"accepted-mime-types",
					"can-submit",
					"disabled",
					"onStop"
				])], 2)
			], 2)) : createCommentVNode("", true);
		};
	}
});
var AgentChatPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1g47r_125",
	inlinePanel: "_inlinePanel_1g47r_134",
	inputArea: "_inputArea_1g47r_143",
	attachmentsStrip: "_attachmentsStrip_1g47r_153",
	errorBanner: "_errorBanner_1g47r_160",
	errorBannerBody: "_errorBannerBody_1g47r_165",
	errorBannerTitle: "_errorBannerTitle_1g47r_173",
	errorBannerDetail: "_errorBannerDetail_1g47r_177",
	warningBanner: "_warningBanner_1g47r_182",
	warningBannerBody: "_warningBannerBody_1g47r_187",
	warningBannerTitle: "_warningBannerTitle_1g47r_195",
	warningBannerDetail: "_warningBannerDetail_1g47r_199"
};
var AgentChatPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentChatPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentChatPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentPreviewChatPage.vue?vue&type=script&setup=true&lang.ts
var AgentPreviewChatPage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPreviewChatPage",
	props: {
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		effectiveSessionId: {},
		initialPrompt: {},
		canSendToAssistant: { type: Boolean },
		beforeSend: {},
		layout: { default: "page" }
	},
	emits: [
		"continue-loaded",
		"open-build",
		"send-to-assistant"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const inputDraft = ref("");
		const chatPanel = useTemplateRef("chatPanel");
		function focusInput(options) {
			chatPanel.value?.focusInput(options);
		}
		__expose({ focusInput });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(__props.layout === "dock" ? "div" : "main"), {
				class: normalizeClass([_ctx.$style.previewPage, { [_ctx.$style.dockLayout]: __props.layout === "dock" }]),
				"data-testid": "agent-preview-chat-page"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatFrame) }, [__props.initialized && __props.effectiveSessionId ? (openBlock(), createBlock(AgentChatPanel_default, {
					key: `preview-${__props.effectiveSessionId}`,
					ref_key: "chatPanel",
					ref: chatPanel,
					"input-draft": inputDraft.value,
					"onUpdate:inputDraft": _cache[0] || (_cache[0] = ($event) => inputDraft.value = $event),
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					mode: "inline",
					"continue-session-id": __props.effectiveSessionId,
					"agent-config": __props.localConfig,
					"agent-status": unref(deriveAgentStatus)(__props.agent),
					"connected-triggers": __props.connectedTriggers,
					"can-send-to-assistant": __props.canSendToAssistant,
					"before-send": __props.beforeSend,
					onContinueLoaded: _cache[1] || (_cache[1] = ($event) => emit("continue-loaded", $event)),
					onOpenBuild: _cache[2] || (_cache[2] = ($event) => emit("open-build")),
					onSendToAssistant: _cache[3] || (_cache[3] = ($event) => emit("send-to-assistant", $event))
				}, null, 8, [
					"input-draft",
					"project-id",
					"agent-id",
					"continue-session-id",
					"agent-config",
					"agent-status",
					"connected-triggers",
					"can-send-to-assistant",
					"before-send"
				])) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var AgentPreviewChatPage_vue_vue_type_style_index_0_lang_module_default = {
	previewPage: "_previewPage_gi2us_125",
	chatFrame: "_chatFrame_gi2us_134",
	dockLayout: "_dockLayout_gi2us_140"
};
var AgentPreviewChatPage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPreviewChatPage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPreviewChatPage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/composables/useAgentSessionLangSmithExport.ts
function useAgentSessionLangSmithExport() {
	const i18n = useI18n();
	const settingsStore = useSettingsStore();
	const sessionsStore = useAgentSessionsStore();
	const clipboard = useClipboard();
	const { showError, showMessage } = useToast();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const isExporting = ref(false);
	const isEnabled = computed(() => localStorage.getItem("instanceAi.debugMode") === "true" && settingsStore.moduleSettings.agents?.proxyEnabled === true);
	async function sendSession({ projectId, agentId, threadId }) {
		if (!isEnabled.value || isExporting.value) return;
		isExporting.value = true;
		try {
			if (await openAgentConfirmationModal({
				title: i18n.baseText("agentSessions.langsmithExport.confirm.title"),
				description: i18n.baseText("agentSessions.langsmithExport.confirm.body"),
				confirmButtonText: i18n.baseText("agentSessions.langsmithExport.confirm.button"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm") return;
			const { traceId } = await sessionsStore.exportThreadToLangSmith(projectId, agentId, threadId);
			await clipboard.copy(traceId).catch(() => {});
			showMessage({
				title: i18n.baseText("agentSessions.langsmithExport.success"),
				message: i18n.baseText("agentSessions.langsmithExport.successMessage", { interpolate: { traceId } }),
				type: "success"
			});
		} catch (error) {
			showError(error, i18n.baseText("agentSessions.langsmithExport.error"));
		} finally {
			isExporting.value = false;
		}
	}
	return {
		isEnabled,
		isExporting,
		sendSession
	};
}
//#endregion
//#region src/features/agents/components/AgentPreviewDock.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"aria-label",
	"aria-hidden",
	"inert",
	"data-preview-layout"
];
var PreviewLayout = /* @__PURE__ */ function(PreviewLayout) {
	PreviewLayout["Docked"] = "docked";
	PreviewLayout["Fullpage"] = "fullpage";
	return PreviewLayout;
}(PreviewLayout || {});
var OPEN_IN_NEW_TAB = "open-in-new-tab";
var AgentPreviewDock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentPreviewDock",
	props: {
		sessionTitle: {},
		sessionOptions: {},
		hasSession: { type: Boolean },
		initialized: { type: Boolean },
		projectId: {},
		agentId: {},
		agent: {},
		localConfig: {},
		connectedTriggers: {},
		isOpen: { type: Boolean },
		effectiveSessionId: {},
		initialPrompt: {},
		canSendToAssistant: { type: Boolean },
		beforeSend: { type: Function }
	},
	emits: [
		"view-trace",
		"new-session",
		"session-select",
		"close",
		"continue-loaded",
		"open-build",
		"send-to-assistant"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const dock = useTemplateRef("dock");
		const { isEnabled: isLangSmithExportEnabled, isExporting, sendSession } = useAgentSessionLangSmithExport();
		const previewChatPage = useTemplateRef("previewChatPage");
		const storedLayout = useStorage("N8N_AGENT_PREVIEW_LAYOUT", PreviewLayout.Docked);
		const layout = computed(() => storedLayout.value === PreviewLayout.Fullpage ? PreviewLayout.Fullpage : PreviewLayout.Docked);
		const sessionDropdownOptions = computed(() => props.sessionOptions.map((option) => ({
			id: option.id,
			label: option.label ?? option.title,
			disabled: option.disabled,
			data: { when: option.when }
		})));
		const layoutOptions = computed(() => [
			{
				id: PreviewLayout.Docked,
				label: i18n.baseText("agents.builder.preview.layout.docked"),
				checked: layout.value === PreviewLayout.Docked,
				icon: {
					type: "icon",
					value: "panel-right"
				}
			},
			{
				id: PreviewLayout.Fullpage,
				label: i18n.baseText("agents.builder.preview.layout.fullpage"),
				checked: layout.value === PreviewLayout.Fullpage,
				icon: {
					type: "icon",
					value: "maximize-2"
				}
			},
			{
				id: OPEN_IN_NEW_TAB,
				label: i18n.baseText("agents.builder.preview.layout.openInNewTab"),
				icon: {
					type: "icon",
					value: "external-link"
				},
				divided: true
			}
		]);
		function getLayoutIcon() {
			return layout.value === PreviewLayout.Fullpage ? "maximize-2" : "panel-right";
		}
		function getLayoutAriaLabel() {
			if (layout.value === PreviewLayout.Fullpage) return i18n.baseText("agents.builder.preview.layout.fullpage.ariaLabel");
			return i18n.baseText("agents.builder.preview.layout.docked.ariaLabel");
		}
		function viewTrace() {
			if (!props.hasSession || !props.effectiveSessionId) return;
			emit("view-trace");
		}
		function exportSession() {
			if (!props.hasSession || !props.effectiveSessionId) return;
			sendSession({
				projectId: props.projectId,
				agentId: props.agentId,
				threadId: props.effectiveSessionId
			});
		}
		function createNewSession() {
			emit("new-session");
		}
		function close() {
			emit("close");
		}
		function setLayout(nextLayout) {
			if (nextLayout === OPEN_IN_NEW_TAB) {
				const route = router.resolve({
					name: AGENT_PREVIEW_VIEW,
					params: {
						projectId: props.projectId,
						agentId: props.agentId
					},
					query: { [CONTINUE_SESSION_ID_PARAM]: props.effectiveSessionId }
				});
				window.open(route.href, "_blank", "noopener");
			} else if (nextLayout === PreviewLayout.Docked || nextLayout === PreviewLayout.Fullpage) storedLayout.value = nextLayout;
		}
		function isFocusWithinDock() {
			return dock.value?.contains(document.activeElement) === true;
		}
		watch([
			() => props.isOpen,
			() => props.initialized,
			() => props.effectiveSessionId
		], async function focusPreviewInput([isOpen, initialized, sessionId]) {
			if (!isOpen || !initialized || !sessionId) return;
			await nextTick();
			/** preventScroll makes sure that the content doesn't jump when transitioning */
			previewChatPage.value?.focusInput({ preventScroll: true });
		}, { flush: "post" });
		useKeybindings({
			"ctrl+shift+;": createNewSession,
			Escape: {
				disabled: () => !isFocusWithinDock(),
				run: close
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				ref_key: "dock",
				ref: dock,
				class: normalizeClass([_ctx.$style.dock, { [_ctx.$style.open]: props.isOpen }]),
				"aria-label": unref(i18n).baseText("agents.builder.preview.button"),
				"aria-hidden": !props.isOpen,
				inert: !props.isOpen,
				"data-preview-layout": layout.value,
				"data-testid": "agent-preview-dock"
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.dockInner, { [_ctx.$style.fullpage]: layout.value === PreviewLayout.Fullpage }]) }, [createBaseVNode("header", {
				class: normalizeClass(_ctx.$style.header),
				"data-testid": "agent-preview-dock-header"
			}, [createVNode(unref(DropdownMenu_default), {
				items: sessionDropdownOptions.value,
				placement: "bottom-start",
				"extra-popper-class": _ctx.$style.sessionDropdownMenu,
				"data-testid": "agent-preview-session-switcher",
				onSelect: _cache[0] || (_cache[0] = ($event) => emit("session-select", $event))
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					class: normalizeClass(_ctx.$style.sessionTitle),
					"aria-label": unref(i18n).baseText("agentSessions.sessionName"),
					"data-testid": "agent-preview-session-title"
				}, {
					default: withCtx(() => [
						createVNode(AgentPersonalisationIcon_default, {
							personalisation: props.localConfig?.personalisation ?? props.agent?.schema?.personalisation,
							size: 20
						}, null, 8, ["personalisation"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.sessionTitleLabel) }, toDisplayString(props.sessionTitle), 3),
						createVNode(unref(N8nIcon_default), {
							icon: "chevron-down",
							color: "text-light",
							size: 12
						})
					]),
					_: 1
				}, 8, ["class", "aria-label"])]),
				"item-label": withCtx(({ item }) => [createVNode(unref(N8nText_default), {
					bold: "",
					class: normalizeClass(_ctx.$style.sessionDropdownName)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
					_: 2
				}, 1032, ["class"])]),
				"item-trailing": withCtx(({ item }) => [item.data?.when ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.sessionDropdownDate)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.data.when), 1)]),
					_: 2
				}, 1032, ["class"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["items", "extra-popper-class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
				props.hasSession && props.effectiveSessionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("agents.builder.preview.viewSession"),
					placement: "bottom",
					"show-after": unref(500),
					"data-testid": "agent-preview-view-session-tooltip"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "list-tree",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.preview.viewSession"),
						"data-testid": "agent-preview-view-session-btn",
						onClick: viewTrace
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content", "show-after"])) : createCommentVNode("", true),
				unref(isLangSmithExportEnabled) && props.hasSession && props.effectiveSessionId ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					content: unref(i18n).baseText("agentSessions.langsmithExport.button"),
					placement: "bottom",
					"show-after": unref(500),
					"data-testid": "agent-preview-langsmith-export-tooltip"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "bug",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						loading: unref(isExporting),
						"aria-label": unref(i18n).baseText("agentSessions.langsmithExport.button"),
						"data-testid": "agent-preview-langsmith-export-btn",
						onClick: exportSession
					}, null, 8, ["loading", "aria-label"])]),
					_: 1
				}, 8, ["content", "show-after"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: "bottom",
					label: unref(i18n).baseText("agents.builder.chat.newChat.label"),
					shortcut: {
						metaKey: true,
						shiftKey: true,
						keys: [";"]
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "message-circle-plus",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("agents.builder.chat.newChat.label"),
						"data-testid": "agent-preview-new-chat-btn",
						onClick: createNewSession
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(unref(N8nTooltip_default), {
					placement: "bottom",
					content: unref(i18n).baseText("agents.builder.preview.layout.change")
				}, {
					default: withCtx(() => [createVNode(unref(DropdownMenu_default), {
						items: layoutOptions.value,
						placement: "bottom-end",
						onSelect: setLayout
					}, {
						trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: getLayoutIcon(),
							variant: "ghost",
							size: "small",
							"icon-size": "large",
							"aria-label": getLayoutAriaLabel(),
							"data-testid": "agent-preview-layout-btn"
						}, null, 8, ["icon", "aria-label"])]),
						_: 1
					}, 8, ["items"])]),
					_: 1
				}, 8, ["content"])
			], 2)], 2), createVNode(AgentPreviewChatPage_default, {
				ref_key: "previewChatPage",
				ref: previewChatPage,
				initialized: props.initialized,
				"project-id": props.projectId,
				"agent-id": props.agentId,
				agent: props.agent,
				"local-config": props.localConfig,
				"connected-triggers": props.connectedTriggers,
				"effective-session-id": props.effectiveSessionId,
				"initial-prompt": props.initialPrompt,
				"can-send-to-assistant": props.canSendToAssistant,
				"before-send": props.beforeSend,
				layout: "dock",
				onContinueLoaded: _cache[1] || (_cache[1] = ($event) => emit("continue-loaded", $event)),
				onOpenBuild: _cache[2] || (_cache[2] = ($event) => emit("open-build")),
				onSendToAssistant: _cache[3] || (_cache[3] = ($event) => emit("send-to-assistant", $event))
			}, null, 8, [
				"initialized",
				"project-id",
				"agent-id",
				"agent",
				"local-config",
				"connected-triggers",
				"effective-session-id",
				"initial-prompt",
				"can-send-to-assistant",
				"before-send"
			])], 2)], 10, _hoisted_1);
		};
	}
});
var AgentPreviewDock_vue_vue_type_style_index_0_lang_module_default = {
	dock: "_dock_xplr0_125",
	fullpage: "_fullpage_xplr0_137",
	dockInner: "_dockInner_xplr0_141",
	open: "_open_xplr0_154",
	header: "_header_xplr0_170",
	sessionTitle: "_sessionTitle_xplr0_178",
	sessionTitleLabel: "_sessionTitleLabel_xplr0_185",
	sessionDropdownName: "_sessionDropdownName_xplr0_186",
	sessionDropdownMenu: "_sessionDropdownMenu_xplr0_194",
	sessionDropdownDate: "_sessionDropdownDate_xplr0_202",
	actions: "_actions_xplr0_210"
};
var AgentPreviewDock_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentPreviewDock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentPreviewDock_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AiActivityStep_default as _, AiThinkingBlock_default as a, AiActivityStepButton_default as b, delegateLabel as c, useSubAgentNames as d, AiReasoningBlock_default as f, deriveAgentStatus as g, buildAgentConfigFingerprint as h, AgentChatMessageAttachments_default as i, isDelegateSubAgentTool as l, useRelativeTimestamp as m, useAgentSessionLangSmithExport as n, parseIntegrationActionCard as o, useAgentBuilderSession as p, AgentPreviewChatPage_default as r, AgentChatToolSteps_default as s, AgentPreviewDock_default as t, resolveSubAgentName as u, AiActivityStepResultSection_default as v, AiActivityStepChevron_default as y };
