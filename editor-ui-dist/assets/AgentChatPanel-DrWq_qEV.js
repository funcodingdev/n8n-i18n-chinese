import { o as __toESM } from "./rolldown-runtime-EITvVbkG.js";
import { $d as inject, Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Bf as shallowRef, Cf as watch, Fc as HoverCardPortal_default, Ff as onScopeDispose, Fu as useDocumentVisibility, Gd as createVNode, Hd as createSlots, Hf as toRef, Ic as HoverCardContent_default, If as reactive, Ja as discriminatedUnionType, Kf as unref, Lc as HoverCardRoot_default, Ld as computed, Lf as readonly, Nd as withModifiers, Pc as HoverCardTrigger_default, Pd as Fragment, Qa as literalType, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Sd as Transition, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Ua as arrayType, Vd as createElementBlock, Wa as booleanType, Wd as createTextVNode, Wf as toValue, Xu as useSessionStorage, Ya as enumType, Yd as guardReactiveProps, af as onBeforeUnmount, ao as stringType, b as draggableComponent, cf as onUnmounted, co as unionType, df as provide, ep as init_shared_esm_bundler, ff as renderList, fu as CollapsibleRoot_default, gf as resolveDynamicComponent, ja as require_isEqual, ks as ElRadio, md as useIntervalFn, mf as resolveComponent, mp as normalizeProps, nf as mergeProps, no as objectType, os as useRouter, pf as renderSlot, pp as normalizeClass, qd as defineComponent, rf as nextTick, sf as onMounted, to as numberType, uf as openBlock, uu as CollapsibleTrigger_default, vf as useId, vp as toDisplayString, xf as useTemplateRef, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { BT as AiActivityStepChevron_default, Bc as getChatAttachmentUrl, Br as AgentPersonalisationIcon_default, Ch as AGENT_SESSION_DETAIL_VIEW, DD as ChatActions_default, Di as useAgentTelemetry, ED as N8nText_default, EE as N8nInputNumber_default, FD as N8nIcon_default, FE as N8nSelect_default, GS as N8N_CHAT_ACTION_TOOL_NAME, Hy as useToast, IE as N8nOption_default, IT as AiActivityStep_default, Kc as getTestChatMessages, LE as N8nLink_default, ND as N8nIconButton_default, NT as N8nScrollArea_default, Nc as getAgentChatQueue, Ni as useProjectAgentsList, OC as isRecord, OD as N8nTooltip_default, PD as N8nButton_default, Ql as resolveFileMimeType, Qp as getViolationVerdict, RD as _plugin_vue_export_helper_default, RT as AiActivityStepGroup_default, UD as useI18n, Ul as usePushConnectionStore, Vc as getChatMessages, Wp as getPolicyViolations, Xg as scrubSecretsInText, Xl as convertFileToBinaryData, Xy as useRootStore, Zp as getRestrictionMessage, _D as useDeviceSupport, _c as cancelAgentChatExecution, _h as CHAT_MESSAGE_STATUS, _x as emptyChildTrace, aD as N8nCallout_default, al as reorderAgentQueuedMessage, bh as TOOL_CALL_STATE, cx as WORKFLOW_WAIT_SUSPEND_TYPE, em as useRestrictionContact, en as isFileAcceptedByAccept, fx as acceptedMimeTypesFromCapabilities, gT as VisuallyHidden_default, gc as agentChatBaseUrl, gh as CHAT_MESSAGE_ROLE, gx as applyForwardedChildChunk, hC as isDraftIntegration, hi as resolveToolNameForDisplay, iT as MarkdownEditor_default, il as removeAgentQueuedMessage, ix as APPROVAL_TOOL_NAME, jc as getAgentBackgroundJobs, jw as hasPolicyRefusalMarker, jy as TIME, kE as N8nHoverCard_default, lC as SUB_AGENT_TASK_DIFFICULTIES, ll as steerAgentQueuedMessage, lx as richCardComponentSchema, mi as isCompactToolName, ml as updateAgentQueuedMessage, mx as getProviderAttachmentCapabilities, nm as SCOPE_LABEL_KEY, ol as resumeAgentBackgroundJob, ox as AGENT_CHAT_ERROR_CODES, ph as OPEN_PREVIEW_PARAM, qp as ContactAdminModal_default, sm as useCredentialsStore, sx as WAIT_TOOL_NAME, tD as N8nCard_default, uD as ApprovalCard_default$1, ul as stopAgentBackgroundJobs, ux as richMessageSchema, vc as cancelAgentChatRun, vh as HOST_EVENT_PLACEMENT, wC as sha256, wE as N8nMarkdown_default, yc as clearTestChatMessages, yh as INTERACTION_EXTENSION_TOOL_NAME, yp as useNodeTypesStore, zT as AnimatedCollapsibleContent_default } from "./app-DbOOaPK6.js";
import { a as InstanceAiResourceChip_default, i as AttachmentPreview_default, r as EXTENDED_PROMPT_MAX_LENGTH, s as ChatInputBase_default } from "./ChatHistoryDropdownTrigger-DLN7yRUE.js";
import { t as formatBytes } from "./bytes-l84tG2YY.js";
import { t as require_omit } from "./omit-CKGYz0m_.js";
//#region src/features/agents/utils/errors.ts
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var EMPTY_MODEL_RESPONSE_ERROR = "The model finished without returning an answer. Try again or use another model.";
var MODEL_STREAM_STALL_ERROR = /^The model stream stalled: no data received for \d+ seconds\. This is usually a transient connection issue — please try again\.$/;
/** Live errors and saved history carry the server's error text without a retry code. */
function isRetryableChatError(message) {
	return message?.role === CHAT_MESSAGE_ROLE.ASSISTANT && message.status === CHAT_MESSAGE_STATUS.ERROR && (EMPTY_MODEL_RESPONSE_ERROR === message.content || MODEL_STREAM_STALL_ERROR.test(message.content));
}
/** True for a `ResponseError`-shaped 404, as the agent REST endpoints throw it. */
function isNotFoundError(error) {
	return typeof error === "object" && error !== null && "httpStatusCode" in error && error.httpStatusCode === 404;
}
//#endregion
//#region src/features/ai/shared/components/ChatCollapsibleContainer.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$8 = ["data-expanded"];
var _hoisted_2$4 = [
	"aria-expanded",
	"aria-label",
	"aria-controls",
	"disabled"
];
var _hoisted_3$3 = ["id", "inert"];
var ChatCollapsibleContainer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ChatCollapsibleContainer",
	props: {
		expanded: { type: Boolean },
		collapsible: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		},
		label: {}
	},
	emits: ["update:expanded"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const contentId = useId();
		const isOpen = computed(() => !props.collapsible || props.expanded);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.outerContainer) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-expanded": __props.collapsible && __props.expanded
			}, [__props.collapsible ? (openBlock(), createElementBlock("button", {
				key: 0,
				type: "button",
				class: normalizeClass([_ctx.$style.toggle, { [_ctx.$style.toggleExpanded]: isOpen.value }]),
				"aria-expanded": isOpen.value,
				"aria-label": __props.label,
				"aria-controls": unref(contentId),
				disabled: __props.disabled,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("update:expanded", !__props.expanded))
			}, [renderSlot(_ctx.$slots, "header", {}, () => [createTextVNode(toDisplayString(__props.label), 1)]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.trailing) }, [renderSlot(_ctx.$slots, "header-trailing"), createVNode(unref(N8nIcon_default), {
				icon: isOpen.value ? "chevron-up" : "chevron-down",
				size: "small",
				color: "text-light",
				"aria-hidden": "true"
			}, null, 8, ["icon"])], 2)], 10, _hoisted_2$4)) : createCommentVNode("", true), createBaseVNode("div", {
				id: unref(contentId),
				class: normalizeClass([_ctx.$style.content, {
					[_ctx.$style.contentOpen]: isOpen.value,
					[_ctx.$style.contentStatic]: !__props.collapsible
				}]),
				inert: !isOpen.value
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentInner) }, [renderSlot(_ctx.$slots, "default")], 2)], 10, _hoisted_3$3)], 10, _hoisted_1$8)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	outerContainer: "_outerContainer_zi55f_276",
	container: "_container_zi55f_283",
	toggle: "_toggle_zi55f_308",
	toggleExpanded: "_toggleExpanded_zi55f_330",
	trailing: "_trailing_zi55f_334",
	content: "_content_zi55f_343",
	contentOpen: "_contentOpen_zi55f_356",
	contentStatic: "_contentStatic_zi55f_360",
	contentInner: "_contentInner_zi55f_365",
	shimmer: "_shimmer_zi55f_1",
	spin: "_spin_zi55f_1",
	"skeleton-pulse": "_skeleton-pulse_zi55f_1",
	opacityPulse: "_opacityPulse_zi55f_1",
	popoverIn: "_popoverIn_zi55f_1",
	fadeIn: "_fadeIn_zi55f_1",
	collapsibleSlideDown: "_collapsibleSlideDown_zi55f_1",
	collapsibleSlideUp: "_collapsibleSlideUp_zi55f_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_zi55f_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_zi55f_1",
	blurSwapIn: "_blurSwapIn_zi55f_1",
	blurSwapOut: "_blurSwapOut_zi55f_1",
	pulseGlow: "_pulseGlow_zi55f_1",
	pulseGlowDelayed: "_pulseGlowDelayed_zi55f_1",
	fade: "_fade_zi55f_1",
	fadeInUp: "_fadeInUp_zi55f_1",
	fadeInDown: "_fadeInDown_zi55f_1",
	fadeInLeft: "_fadeInLeft_zi55f_1",
	fadeInRight: "_fadeInRight_zi55f_1",
	fadeOut: "_fadeOut_zi55f_1",
	fadeOutDown: "_fadeOutDown_zi55f_1",
	fadeOutUp: "_fadeOutUp_zi55f_1",
	fadeOutLeft: "_fadeOutLeft_zi55f_1",
	fadeOutRight: "_fadeOutRight_zi55f_1",
	ping: "_ping_zi55f_1",
	blinkBackground: "_blinkBackground_zi55f_1",
	typingBlink: "_typingBlink_zi55f_1"
} }]]);
//#endregion
//#region src/features/ai/shared/components/ChatMessageQueue.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$7 = ["data-queue-id"];
var _hoisted_2$3 = ["title"];
var _hoisted_3$2 = ["aria-label"];
var _hoisted_4$1 = ["aria-label", "tabindex"];
var ChatMessageQueue_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ChatMessageQueue",
	props: {
		displayedItems: {},
		expanded: { type: Boolean },
		isReordering: { type: Boolean },
		canEdit: { type: Boolean },
		steerAction: {},
		canSteer: { type: Boolean },
		canDragQueueItem: { type: Function },
		isQueueItemBusy: { type: Function },
		canDropQueueItem: { type: Function }
	},
	emits: [
		"update:expanded",
		"drag-start",
		"drag-end",
		"steer",
		"edit",
		"remove"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const expanded = computed({
			get: () => props.expanded,
			set: (value) => emit("update:expanded", value)
		});
		let keyboardHandle;
		function onQueueHandleKeydown(event, index) {
			if (props.isReordering || !["ArrowUp", "ArrowDown"].includes(event.key)) return;
			event.preventDefault();
			event.stopPropagation();
			const futureIndex = index + (event.key === "ArrowUp" ? -1 : 1);
			if (!props.canDragQueueItem(index) || !props.displayedItems[futureIndex] || !props.canDropQueueItem({ draggedContext: {
				index,
				futureIndex
			} })) return;
			if (event.currentTarget instanceof HTMLButtonElement) keyboardHandle = event.currentTarget;
			emit("drag-start");
			emit("drag-end", {
				oldIndex: index,
				newIndex: futureIndex
			});
		}
		watch(() => props.isReordering, async (isReordering) => {
			if (isReordering || !keyboardHandle) return;
			await nextTick();
			keyboardHandle?.focus();
			keyboardHandle = void 0;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.messageQueueEntrance) }, [createVNode(ChatCollapsibleContainer_default, {
				expanded: expanded.value,
				"onUpdate:expanded": _cache[2] || (_cache[2] = ($event) => expanded.value = $event),
				collapsible: __props.displayedItems.length > 1,
				disabled: __props.isReordering,
				label: unref(locale).baseText("chat.messageQueue.title", {
					adjustToNumber: __props.displayedItems.length,
					interpolate: { count: __props.displayedItems.length }
				}),
				class: normalizeClass(_ctx.$style.messageQueue),
				"data-testid": "chat-message-queue"
			}, {
				header: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "list-end",
					size: "medium",
					color: "text-light",
					"aria-hidden": "true"
				}), createVNode(unref(N8nText_default), {
					bold: "",
					step: "xs",
					class: normalizeClass({ [_ctx.$style.queueLabelPending]: !expanded.value })
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("chat.messageQueue.title", {
						adjustToNumber: __props.displayedItems.length,
						interpolate: { count: __props.displayedItems.length }
					})), 1)]),
					_: 1
				}, 8, ["class"])]),
				default: withCtx(() => [createVNode(unref(N8nScrollArea_default), {
					"as-child": "",
					type: "hover",
					"max-height": "calc(var(--height--lg) * 5)",
					class: normalizeClass(_ctx.$style.queueScrollArea)
				}, {
					default: withCtx(() => [createVNode(unref(draggableComponent), {
						"model-value": __props.displayedItems,
						"item-key": "id",
						tag: "ul",
						class: normalizeClass([_ctx.$style.backgroundJobList, _ctx.$style.queueList]),
						handle: `.${_ctx.$style.queueDragHandle}:not(:disabled)`,
						disabled: __props.isReordering,
						move: __props.canDropQueueItem,
						"ghost-class": _ctx.$style.queueGhost,
						"drag-class": _ctx.$style.queueDragging,
						onStart: _cache[0] || (_cache[0] = ($event) => emit("drag-start")),
						onEnd: _cache[1] || (_cache[1] = ($event) => emit("drag-end", $event))
					}, {
						item: withCtx(({ element: item, index }) => [createBaseVNode("li", {
							"data-queue-id": item.id,
							"data-testid": "chat-queued-message"
						}, [
							__props.displayedItems.length > 1 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
								key: 0,
								content: unref(locale).baseText("chat.messageQueue.reorderTooltip"),
								disabled: !__props.canDragQueueItem(index),
								placement: "top"
							}, {
								default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
									icon: "grip-vertical",
									variant: "ghost",
									"icon-size": "medium",
									size: "xsmall",
									class: normalizeClass(_ctx.$style.queueDragHandle),
									disabled: !__props.canDragQueueItem(index),
									"aria-label": unref(locale).baseText("chat.messageQueue.reorder", { interpolate: {
										position: index + 1,
										count: __props.displayedItems.length
									} }),
									"aria-keyshortcuts": "ArrowUp ArrowDown",
									"data-testid": "chat-queue-drag-handle",
									onKeydown: ($event) => onQueueHandleKeydown($event, index)
								}, null, 8, [
									"class",
									"disabled",
									"aria-label",
									"onKeydown"
								])]),
								_: 2
							}, 1032, ["content", "disabled"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: "list-end",
								size: "medium",
								color: "text-light",
								"aria-hidden": "true",
								class: normalizeClass(_ctx.$style.queueIcon)
							}, null, 8, ["class"])),
							createBaseVNode("div", {
								class: normalizeClass(_ctx.$style.queuePreview),
								title: item.message
							}, [item.message ? (openBlock(), createBlock(unref(N8nText_default), {
								key: 0,
								bold: "",
								step: "xs",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.message), 1)]),
								_: 2
							}, 1024)) : createCommentVNode("", true)], 10, _hoisted_2$3),
							item.attachmentNames?.length ? (openBlock(), createBlock(unref(N8nHoverCard_default), {
								key: 2,
								side: "top"
							}, {
								trigger: withCtx(() => [createBaseVNode("span", {
									class: normalizeClass(_ctx.$style.queueIndicator),
									"aria-label": item.attachmentNames?.join(", "),
									role: "img",
									tabindex: "0"
								}, [createVNode(unref(N8nIcon_default), {
									icon: "paperclip",
									size: "small",
									color: "text-light"
								})], 10, _hoisted_3$2)]),
								content: withCtx(() => [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.queueAttachmentList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.attachmentNames, (fileName, index) => {
									return openBlock(), createElementBlock("li", { key: index }, [createVNode(unref(N8nText_default), { size: "small" }, {
										default: withCtx(() => [createTextVNode(toDisplayString(fileName), 1)]),
										_: 2
									}, 1024)]);
								}), 128))], 2)]),
								_: 2
							}, 1024)) : createCommentVNode("", true),
							createVNode(unref(N8nTooltip_default), {
								content: item.notice,
								disabled: !item.notice,
								placement: "top",
								"as-child": ""
							}, {
								default: withCtx(() => [createBaseVNode("div", {
									class: normalizeClass([_ctx.$style.queueActions, { [_ctx.$style.queueActionsWithNotice]: item.notice }]),
									"aria-label": item.notice,
									tabindex: item.notice ? 0 : void 0,
									role: "group"
								}, [
									__props.steerAction && !item.notice ? (openBlock(), createBlock(unref(N8nTooltip_default), {
										key: 0,
										content: __props.steerAction.tooltip,
										disabled: !__props.canSteer || __props.isQueueItemBusy(item),
										placement: "left"
									}, {
										default: withCtx(() => [createVNode(unref(N8nButton_default), {
											variant: "ghost",
											size: "xsmall",
											icon: __props.steerAction.icon,
											"icon-size": "medium",
											disabled: !__props.canSteer || __props.isQueueItemBusy(item),
											"aria-label": __props.steerAction.label,
											onClick: ($event) => emit("steer", item.id)
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(__props.steerAction.label), 1)]),
											_: 1
										}, 8, [
											"icon",
											"disabled",
											"aria-label",
											"onClick"
										])]),
										_: 2
									}, 1032, ["content", "disabled"])) : createCommentVNode("", true),
									createVNode(unref(N8nTooltip_default), {
										content: unref(locale).baseText("generic.edit"),
										disabled: !__props.canEdit || __props.isQueueItemBusy(item),
										placement: "left"
									}, {
										default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
											icon: "pencil",
											variant: "ghost",
											size: "xsmall",
											"icon-size": "medium",
											disabled: !__props.canEdit || __props.isQueueItemBusy(item),
											"aria-label": unref(locale).baseText("generic.edit"),
											onClick: ($event) => emit("edit", item.id)
										}, null, 8, [
											"disabled",
											"aria-label",
											"onClick"
										])]),
										_: 2
									}, 1032, ["content", "disabled"]),
									createVNode(unref(N8nTooltip_default), {
										content: unref(locale).baseText("generic.delete"),
										disabled: __props.isQueueItemBusy(item),
										placement: "left"
									}, {
										default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
											icon: "trash-2",
											variant: "ghost",
											size: "xsmall",
											"icon-size": "medium",
											disabled: __props.isQueueItemBusy(item),
											"aria-label": unref(locale).baseText("generic.delete"),
											onClick: ($event) => emit("remove", item.id)
										}, null, 8, [
											"disabled",
											"aria-label",
											"onClick"
										])]),
										_: 2
									}, 1032, ["content", "disabled"])
								], 10, _hoisted_4$1)]),
								_: 2
							}, 1032, ["content", "disabled"])
						], 8, _hoisted_1$7)]),
						_: 1
					}, 8, [
						"model-value",
						"class",
						"handle",
						"disabled",
						"move",
						"ghost-class",
						"drag-class"
					])]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, [
				"expanded",
				"collapsible",
				"disabled",
				"label",
				"class"
			])], 2);
		};
	}
}), [["__cssModules", { "$style": {
	messageQueueEntrance: "_messageQueueEntrance_qohtv_396",
	fadeInUp: "_fadeInUp_qohtv_1",
	queueScrollArea: "_queueScrollArea_qohtv_405",
	backgroundJobList: "_backgroundJobList_qohtv_411",
	queueIcon: "_queueIcon_qohtv_433",
	queueLabelPending: "_queueLabelPending_qohtv_437",
	shimmer: "_shimmer_qohtv_1",
	queueActions: "_queueActions_qohtv_454",
	queueDragHandle: "_queueDragHandle_qohtv_465",
	queueGhost: "_queueGhost_qohtv_479",
	queueDragging: "_queueDragging_qohtv_483",
	queueActionsWithNotice: "_queueActionsWithNotice_qohtv_489",
	queueIndicator: "_queueIndicator_qohtv_493",
	queueAttachmentList: "_queueAttachmentList_qohtv_499",
	queuePreview: "_queuePreview_qohtv_506",
	spin: "_spin_qohtv_1",
	"skeleton-pulse": "_skeleton-pulse_qohtv_1",
	opacityPulse: "_opacityPulse_qohtv_1",
	popoverIn: "_popoverIn_qohtv_1",
	fadeIn: "_fadeIn_qohtv_1",
	collapsibleSlideDown: "_collapsibleSlideDown_qohtv_1",
	collapsibleSlideUp: "_collapsibleSlideUp_qohtv_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_qohtv_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_qohtv_1",
	blurSwapIn: "_blurSwapIn_qohtv_1",
	blurSwapOut: "_blurSwapOut_qohtv_1",
	pulseGlow: "_pulseGlow_qohtv_1",
	pulseGlowDelayed: "_pulseGlowDelayed_qohtv_1",
	fade: "_fade_qohtv_1",
	fadeInDown: "_fadeInDown_qohtv_1",
	fadeInLeft: "_fadeInLeft_qohtv_1",
	fadeInRight: "_fadeInRight_qohtv_1",
	fadeOut: "_fadeOut_qohtv_1",
	fadeOutDown: "_fadeOutDown_qohtv_1",
	fadeOutUp: "_fadeOutUp_qohtv_1",
	fadeOutLeft: "_fadeOutLeft_qohtv_1",
	fadeOutRight: "_fadeOutRight_qohtv_1",
	ping: "_ping_qohtv_1",
	blinkBackground: "_blinkBackground_qohtv_1",
	typingBlink: "_typingBlink_qohtv_1"
} }]]);
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
var INTERACTIVE_COMPONENT_TYPES = /* @__PURE__ */ new Set([
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
* Suspend payload of a workflow tool parked on a Wait node — the same card the
* chat platforms render, so it goes through the same card renderer here.
*
* @see buildWaitCard in packages/cli/src/modules/agents/tools/workflow-tool-factory.ts
*/
var waitSuspendPayloadSchema = objectType({
	type: literalType(WORKFLOW_WAIT_SUSPEND_TYPE),
	title: stringType(),
	components: arrayType(richCardComponentSchema).min(1)
});
/** Parse a Wait-node suspend payload into a renderable card, or undefined. */
function parseWaitSuspendPayload(payload) {
	const parsed = waitSuspendPayloadSchema.safeParse(payload);
	if (!parsed.success) return void 0;
	return { card: {
		title: parsed.data.title,
		components: parsed.data.components
	} };
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
function summariseToolCall(toolName, output, input) {
	if (!isRecord(output)) return void 0;
	if (toolName === "chat_action") {
		const resume = n8nChatResumeValueSchema.safeParse(output);
		if (!resume.success) return void 0;
		const parsed = parseN8nChatActionInput(input);
		if (!parsed) return resume.data.value;
		return cardChoiceLabel(parsed.card, resume.data);
	}
}
//#endregion
//#region src/features/ai/shared/agentsChat/toolPolicyRefusal.ts
/** A tool output in the serialized policy-refusal shape, the one executions also store. */
function parseToolPolicyRefusal(output) {
	if (!hasPolicyRefusalMarker(output)) return void 0;
	const [first, ...rest] = getPolicyViolations(output) ?? [];
	return first ? { violations: [first, ...rest] } : void 0;
}
function isPolicyRefusedToolOutput(output) {
	return parseToolPolicyRefusal(output) !== void 0;
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
/**
* The open interactive on the last turn, which is the one that owns the chat
* input and any steering. A parked run is always the tail of the transcript, so
* an unresolved card further up belongs to a turn the conversation already moved
* past — `findOpenInteractive` returns those too, and acting on them would
* answer or cancel the wrong tool call.
*/
function findTailOpenInteractive(messages) {
	const tail = messages[messages.length - 1];
	if (!tail) return void 0;
	return getMessageInteractives(tail).find((payload) => payload.resolvedAt === void 0);
}
/**
* The open interactive on the last turn that a steering message is allowed to
* cancel. A waiting card is never one: the workflow resumes it by itself, so
* cancelling it because the user typed would abandon a run they never asked to
* stop and leave the sub-workflow finishing into a checkpoint nobody reads.
* Stopping a wait is a deliberate act — the card's own button, or Stop.
*/
function findTailSteerableInteractive(messages) {
	const tail = messages[messages.length - 1];
	if (!tail) return void 0;
	return getMessageInteractives(tail).find((payload) => payload.resolvedAt === void 0 && payload.toolName !== "wait");
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
		...value.supportsSessionApproval === true && { supportsSessionApproval: true },
		...typeof value.displayName === "string" && value.displayName.length > 0 && { displayName: value.displayName },
		args: value.args
	};
}
function isDeclinedToolOutput(value) {
	return isRecord(value) && value.declined === true;
}
/**
* Given a tool call belonging to one of the interactive tools still rendered
* in agents chat (`approval`, `chat_action`) — or a workflow tool parked on a
* Wait node — reconstruct an `InteractivePayload` for it. The result is:
*
* - **resolved**: when `output` is present.
* - **open**: when `output` is absent — the card renders as an active
*   awaiting-user prompt. Used when a refresh during a suspension restored the
*   suspended assistant turn from the open checkpoint.
*
* Host extensions are tried after all built-in cards, so a host cannot take
* over an approval, a Wait node or a `chat_action` call. Without extensions, no
* extension card is mapped. Extensions without `parse` have no card, so the
* mapper skips them.
*
* Returns `undefined` when the tool name isn't interactive or input parsing fails.
*/
function rebuildInteractiveFromHistory(tc, extensions = []) {
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
	const waitInput = parseWaitSuspendPayload(tc.suspendPayload);
	if (waitInput) {
		const resolved = tc.output !== void 0 ? n8nChatResumeValueSchema.safeParse(tc.output) : null;
		return {
			toolCallId: tc.toolCallId,
			...tc.output !== void 0 && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: WAIT_TOOL_NAME,
			input: waitInput,
			...tc.canceled !== true && resolved?.success && { resolvedValue: resolved.data }
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
	for (const extension of extensions) {
		const input = extension.parse?.(tc);
		if (input === void 0) continue;
		return {
			toolCallId: tc.toolCallId,
			...tc.output !== void 0 && { resolvedAt: 1 },
			...tc.canceled === true && { cancelled: true },
			toolName: INTERACTION_EXTENSION_TOOL_NAME,
			extensionKey: extension.key,
			input
		};
	}
}
/**
* Convert persisted agent messages into the frontend ChatMessage format.
*
* Whenever a tool call is interactive, we attach a reconstructed
* `InteractivePayload` so the UI re-renders the card in either its open
* (awaiting user) or resolved (disabled) state. `extensions` are the card
* types of the chat host (see `rebuildInteractiveFromHistory`).
*/
function convertDbMessages(dbMessages, extensions = []) {
	const result = [];
	for (const msg of dbMessages) {
		if (!msg.role || !Array.isArray(msg.content)) continue;
		const role = msg.role === CHAT_MESSAGE_ROLE.USER ? "user" : msg.role === CHAT_MESSAGE_ROLE.ASSISTANT ? "assistant" : null;
		if (role === null) continue;
		let text = "";
		let thinking = "";
		const thinkingSegments = [];
		const toolCalls = [];
		const renderParts = [];
		const interactives = [];
		const attachments = [];
		const hostEvents = [];
		let status;
		const failed = msg.executionStatus === "error" || msg.executionStatus === "interrupted";
		if (failed) status = CHAT_MESSAGE_STATUS.ERROR;
		else if (msg.executionStatus === "running") status = CHAT_MESSAGE_STATUS.STREAMING;
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
		else if (part.type === "host-event" && typeof part.name === "string" && part.name) hostEvents.push({
			id: `${msg.id}:host-event:${partIndex}`,
			name: part.name,
			...typeof part.key === "string" && part.key ? { key: part.key } : {},
			payload: part.payload ?? null
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
				else if (isFailedDelegateOutput(part.toolName, part.output) || isPolicyRefusedToolOutput(part.output)) state = TOOL_CALL_STATE.ERROR;
				else state = TOOL_CALL_STATE.DONE;
			} else if (part.state === "rejected") {
				state = TOOL_CALL_STATE.ERROR;
				output = part.error;
			} else if (failed) {
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
			const rebuilt = rebuildInteractiveFromHistory(toolCall, extensions);
			if (!rebuilt) continue;
			if (rebuilt.resolvedAt === void 0 && !failed && msg.executionStatus !== "running") {
				toolCall.state = TOOL_CALL_STATE.SUSPENDED;
				status = CHAT_MESSAGE_STATUS.AWAITING_USER;
			}
			interactives.push(rebuilt);
			renderParts.push({
				type: "interactive",
				toolCallId: rebuilt.toolCallId
			});
		}
		const createdAt = msg.createdAt ? Date.parse(msg.createdAt) : NaN;
		const chatMessage = {
			id: msg.id ?? crypto.randomUUID(),
			role,
			content: text,
			...msg.author && { author: msg.author },
			...renderParts.length > 0 && { renderParts },
			thinking: thinking || void 0,
			...thinkingSegments.length > 0 && { thinkingSegments },
			toolCalls: toolCalls.length > 0 ? toolCalls : void 0,
			...attachments.length > 0 && { attachments },
			...role === CHAT_MESSAGE_ROLE.ASSISTANT && hostEvents.length > 0 && { hostEvents },
			...status && { status },
			...msg.executionId ? { executionId: msg.executionId } : {},
			...role === CHAT_MESSAGE_ROLE.ASSISTANT && msg.backgroundTaskSignal ? { backgroundJobSignal: msg.backgroundTaskSignal } : {},
			...Number.isFinite(createdAt) && { createdAt }
		};
		setMessageInteractives(chatMessage, interactives);
		result.push(chatMessage);
		if (msg.executionError) result.push({
			id: `${chatMessage.id}:error`,
			role: "assistant",
			content: msg.executionError,
			toolCalls: [],
			status: CHAT_MESSAGE_STATUS.ERROR,
			...msg.executionId ? { executionId: msg.executionId } : {}
		});
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
* for ergonomic chaining. `extensions` are the card types of the chat host.
*/
function applyOpenSuspensions(chat, suspensions, extensions = []) {
	const byToolCallId = new Map(suspensions.map((s) => [s.toolCallId, s]));
	for (const msg of chat) {
		let hasOpenToolCall = false;
		for (const toolCall of msg.toolCalls ?? []) {
			if (toolCall.state === TOOL_CALL_STATE.DONE || toolCall.state === TOOL_CALL_STATE.ERROR || toolCall.state === TOOL_CALL_STATE.CANCELLED) continue;
			const suspension = byToolCallId.get(toolCall.toolCallId);
			if (suspension) {
				toolCall.state = TOOL_CALL_STATE.SUSPENDED;
				toolCall.runId = suspension.runId;
				if (suspension.suspendPayload !== void 0) toolCall.suspendPayload = suspension.suspendPayload;
				const rebuilt = rebuildInteractiveFromHistory(toolCall, extensions);
				if (rebuilt) {
					rebuilt.runId = suspension.runId;
					upsertMessageInteractive(msg, rebuilt);
				}
				hasOpenToolCall = true;
			} else if (msg.status === CHAT_MESSAGE_STATUS.ERROR) toolCall.state = TOOL_CALL_STATE.ERROR;
			else if (msg.status !== CHAT_MESSAGE_STATUS.STREAMING) {
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
//#region src/features/agents/utils/budget-config.ts
var ALERT_STEP = 10;
var ALERT_MIN = 10;
var ALERT_MAX = 100;
var ALERT_DEFAULT = 80;
/** Maps a saved percent onto the slider steps of 10. */
function snapAlertPercent(value) {
	if (!Number.isFinite(value)) return ALERT_DEFAULT;
	const stepped = Math.round(value / ALERT_STEP) * ALERT_STEP;
	return Math.min(ALERT_MAX, Math.max(ALERT_MIN, stepped));
}
function formatBudgetUsd(amount) {
	const hasCents = Math.round(amount * 100) % 100 !== 0;
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: hasCents ? 2 : 0,
		maximumFractionDigits: 2
	}).format(amount);
}
/** A budget must be greater than 0. Empty, 0, and negative amounts are unset. */
function parseBudgetAmount(value) {
	if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) return void 0;
	return value;
}
function buildBudget(monthly, session, alert) {
	const enabled = monthly !== void 0 || session !== void 0;
	const budget = { enabled };
	if (monthly !== void 0) budget.monthlyBudgetUsd = monthly;
	if (session !== void 0) budget.sessionCostCapUsd = session;
	if (enabled && monthly !== void 0 && alert.enabled) budget.alertThresholdPercent = snapAlertPercent(alert.percent);
	return budget;
}
function withBudget(config, budget) {
	return { config: {
		...config?.config,
		guardrails: {
			...config?.config?.guardrails,
			budget
		}
	} };
}
function monthlyBudgetSave(config, monthlyInput, alert) {
	const current = config?.config?.guardrails?.budget;
	return withBudget(config, buildBudget(parseBudgetAmount(monthlyInput), parseBudgetAmount(current?.sessionCostCapUsd), alert));
}
function sessionCapSave(config, sessionInput) {
	const current = config?.config?.guardrails?.budget;
	return withBudget(config, buildBudget(parseBudgetAmount(current?.monthlyBudgetUsd), parseBudgetAmount(sessionInput), {
		enabled: current?.alertThresholdPercent !== void 0,
		percent: current?.alertThresholdPercent ?? ALERT_DEFAULT
	}));
}
/**
* Writes one raised cap and keeps the other saved amounts. Increase-only:
* rejects an empty or negative amount, and one at or below the current cap —
* saving it would lift the stop only for the next run to stop again.
*/
function increasedBudgetConfig(config, field, amount) {
	const next = parseBudgetAmount(amount);
	if (next === void 0) return void 0;
	const current = config?.config?.guardrails?.budget;
	const currentValue = current?.[field];
	if (currentValue !== void 0 && next <= currentValue) return void 0;
	const monthly = field === "monthlyBudgetUsd" ? next : current?.monthlyBudgetUsd;
	const session = field === "sessionCostCapUsd" ? next : current?.sessionCostCapUsd;
	return withBudget(config, buildBudget(parseBudgetAmount(monthly), parseBudgetAmount(session), {
		enabled: current?.alertThresholdPercent !== void 0,
		percent: current?.alertThresholdPercent ?? ALERT_DEFAULT
	}));
}
/**
* Caps whose raise or removal lifts a budget stop. A lowered or unchanged cap
* keeps the stop: the next run would stop against it again.
*/
function raisedBudgetCaps(before, after) {
	const raised = [];
	for (const field of ["monthlyBudgetUsd", "sessionCostCapUsd"]) {
		const prev = before?.[field];
		const next = after?.[field];
		if (next === void 0 ? prev !== void 0 : prev !== void 0 && next > prev) raised.push(field);
	}
	return raised;
}
function isBudgetStopCode(code) {
	return code === "budget.monthly" || code === "budget.session";
}
/** Notice codes a persisted change to one cap resolves. The alert rides with the monthly cap. */
function budgetNoticeCodesForField(field) {
	return field === "sessionCostCapUsd" ? ["budget.session"] : ["budget.monthly", "budget.alert"];
}
//#endregion
//#region src/features/agents/composables/useAgentExecutionUpdates.ts
init_reactivity_esm_bundler();
/**
* Refresh saved execution data after a push. Apply live usage in
* `onInvalidate` before the refresh.
*
* Connects the shared push client but never disconnects it — the editor has one
* connection, and tearing it down here would cut off everything else on it.
*/
function useAgentExecutionUpdates(target, onUpdate, onInvalidate) {
	const pushStore = usePushConnectionStore();
	function matches(event) {
		if (event.type !== "agentExecutionUpdated") return false;
		if (event.data.projectId !== target.projectId.value) return false;
		if (event.data.agentId !== target.agentId.value) return false;
		const threadId = target.threadId?.value;
		return !threadId || event.data.threadId === threadId;
	}
	let inFlight;
	let queued = false;
	let disposed = false;
	function run() {
		if (disposed) return;
		if (inFlight) {
			queued = true;
			return;
		}
		inFlight = Promise.resolve().then(async () => {
			if (!disposed) await onUpdate();
		}).catch(() => {}).finally(() => {
			inFlight = void 0;
			if (queued) {
				queued = false;
				run();
			}
		});
	}
	const removeListener = pushStore.addEventListener((event) => {
		if (matches(event)) {
			onInvalidate?.(event.data);
			run();
		}
	});
	pushStore.pushConnect();
	onScopeDispose(() => {
		disposed = true;
		removeListener();
	});
	return run;
}
//#endregion
//#region src/features/agents/composables/useAgentChatStream.ts
init_reactivity_esm_bundler(), init_runtime_core_esm_bundler();
var STOP_ACCEPTANCE_TIMEOUT_MS = 30 * TIME.SECOND;
var MAX_WAITING_STREAMS = 2;
var MAX_START_VALIDATION_ATTEMPTS = 3;
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
	const extensions = params.interactionExtensions ?? [];
	const locale = useI18n();
	const { showError } = useToast();
	const channel = params.channel ?? ref("chat");
	/**
	* What the current channel supports. n8n Chat has no single default thread
	* to fall back to like the builder's test chat — `previewHistory` gates
	* that fallback.
	*/
	const capabilities = computed(() => ({
		previewHistory: channel.value !== "n8n-chat",
		/** n8n Chat has no session detail view to link a background job's trace to. */
		traceLinks: channel.value !== "n8n-chat"
	}));
	const messages = ref([]);
	const isStreamOpen = ref(false);
	const isSubmitting = ref(false);
	const queuedMessages = ref([]);
	const removingQueueIds = ref(/* @__PURE__ */ new Set());
	const steeringQueueIds = ref(/* @__PURE__ */ new Set());
	const isReorderingQueue = ref(false);
	const consumedQueueIds = /* @__PURE__ */ new Set();
	const steerableExecutionId = ref(null);
	const streams = /* @__PURE__ */ new Map();
	/**
	* Budget notices attached by streams that already ended, bucketed by the
	* target (project, agent, session) that produced them, then keyed by
	* execution id (or message id before `done`). The history read that
	* follows `done` consumes its own target's bucket once; a later refresh
	* must not reinsert a stop card and block Send again, and a refresh for
	* another target must not inherit it.
	*/
	const pendingBudgetNotices = /* @__PURE__ */ new Map();
	let queueVersion = 0;
	let submissionVersion = 0;
	const activeExecutionId = ref(null);
	const acceptedSessionId = ref();
	const isRecovering = ref(false);
	const isStreaming = computed(() => isStreamOpen.value || activeExecutionId.value !== null || isRecovering.value);
	const isCancelling = ref(false);
	const canSteer = computed(() => !!steerableExecutionId.value && steerableExecutionId.value === activeExecutionId.value && !isCancelling.value && !isLoadingHistory.value && !findTailOpenInteractive(messages.value));
	let stopTargetId;
	const abortController = ref(null);
	const streamSettlements = /* @__PURE__ */ new WeakMap();
	const historyLoaded = ref(false);
	const isLoadingHistory = ref(false);
	const pushStore = usePushConnectionStore();
	const visibility = useDocumentVisibility();
	let disposed = false;
	let historyVersion = 0;
	let streamVersion = 0;
	let ownershipVersion = 0;
	let refreshAfterStream = false;
	let retryCount = 0;
	let retryTimer;
	let stopAcceptanceTimer;
	let acknowledgedSessionId;
	const targetKey = () => JSON.stringify([
		params.projectId.value,
		params.agentId.value,
		params.continueSessionId?.value
	]);
	function acknowledgeSessionCreation(sessionId = params.continueSessionId?.value) {
		if (!sessionId || params.newSession?.value !== true || sessionId !== params.continueSessionId?.value || sessionId === acknowledgedSessionId) return;
		acknowledgedSessionId = sessionId;
		params.onSessionCreated?.(sessionId);
	}
	/**
	* Set when the backend rejects the stream because the agent itself is
	* misconfigured (missing instructions / model / credential). Cleared when the
	* next execution starts so users can retry without a manual dismiss.
	*/
	const fatalError = ref(null);
	/**
	* Non-fatal warnings emitted during a run (e.g. an MCP server that failed to
	* connect, so its tools were skipped). The run continues; these are shown to
	* the user as a warning callout. Visible warnings clear when the next execution starts;
	* explicitly dismissed warnings stay hidden for this composable instance.
	*/
	const warnings = ref([]);
	const dismissedWarningKeys = /* @__PURE__ */ new Set();
	const messagingState = computed(() => {
		if (!isStreaming.value) return "idle";
		const lastMsg = messages.value[messages.value.length - 1];
		if (!lastMsg || lastMsg.role === CHAT_MESSAGE_ROLE.USER) return "waitingFirstChunk";
		return "receiving";
	});
	async function refreshHistory({ clearOnNotFound = false, silent = false } = {}) {
		if (disposed) return false;
		const continueId = params.continueSessionId?.value ?? acceptedSessionId.value;
		const target = targetKey();
		const version = ++historyVersion;
		const streamAtStart = streamVersion;
		const isCurrent = () => !disposed && target === targetKey() && version === historyVersion;
		try {
			let dbMessages;
			let openSuspensions = [];
			let runningExecutionId;
			if (continueId) {
				const envelope = await getChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value, continueId, channel.value);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
				runningExecutionId = envelope.activeExecutionId;
			} else if (!capabilities.value.previewHistory) {
				dbMessages = [];
				runningExecutionId = null;
			} else {
				const envelope = await getTestChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value);
				dbMessages = envelope.messages;
				openSuspensions = envelope.openSuspensions;
				runningExecutionId = envelope.activeExecutionId;
			}
			if (!isCurrent()) return false;
			if (continueId) acknowledgeSessionCreation(continueId);
			retryCount = 0;
			clearTimeout(retryTimer);
			if (!isStreamOpen.value && streamAtStart === streamVersion) {
				messages.value = restoreBudgetNotices(applyOpenSuspensions(convertDbMessages(dbMessages, extensions), openSuspensions, extensions));
				isRecovering.value = false;
				if (runningExecutionId !== void 0) activeExecutionId.value = runningExecutionId;
				if (isCancelling.value) reconcileStop();
			} else if (isStreamOpen.value) refreshAfterStream = true;
			else refreshHistoryFromPush();
			return true;
		} catch (error) {
			if (!isCurrent()) return false;
			if (error?.httpStatusCode === 404) {
				if (!isStreamOpen.value && streamAtStart === streamVersion && !activeExecutionId.value) {
					isRecovering.value = false;
					isCancelling.value = false;
				}
				if (clearOnNotFound && !activeExecutionId.value && !isStreamOpen.value && streamAtStart === streamVersion) messages.value = [];
				return clearOnNotFound;
			} else if (!silent) showError(error, locale.baseText("agents.chat.loadHistory.error"));
			if (retryCount < 2) {
				clearTimeout(retryTimer);
				retryTimer = setTimeout(() => refreshHistoryFromPush(), TIME.SECOND * 2 ** retryCount++);
			}
			return false;
		}
	}
	async function loadHistory() {
		if (historyLoaded.value) return;
		isLoadingHistory.value = true;
		isRecovering.value = true;
		const queue = refreshQueue();
		const loaded = await refreshHistory({ clearOnNotFound: true });
		await queue;
		historyLoaded.value = true;
		isLoadingHistory.value = false;
		if (loaded && (messages.value.length > 0 || !isStreaming.value)) params.onHistoryLoaded?.(messages.value.length);
	}
	const refreshHistoryFromPush = useAgentExecutionUpdates({
		projectId: params.projectId,
		agentId: params.agentId,
		...params.continueSessionId ? { threadId: params.continueSessionId } : {}
	}, async () => {
		await refreshQueue();
		if (isStreamOpen.value) {
			refreshAfterStream = true;
			return;
		}
		await refreshHistory({ silent: true });
	}, () => {
		historyVersion++;
		retryCount = 0;
		clearTimeout(retryTimer);
	});
	async function refreshQueue() {
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (!threadId || disposed) return;
		const target = targetKey();
		const version = ++queueVersion;
		try {
			const result = await getAgentChatQueue(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId, channel.value);
			if (!disposed && target === targetKey() && version === queueVersion) {
				queuedMessages.value = result.items.filter((item) => !consumedQueueIds.has(item.id));
				steerableExecutionId.value = result.steerableExecutionId ?? null;
			}
		} catch (error) {
			if (!disposed && target === targetKey() && version === queueVersion) showError(error, locale.baseText("agents.chat.queue.loadError"));
		}
	}
	async function updateQueuedMessage(queueId, message) {
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (!threadId || disposed) return "failed";
		const target = targetKey();
		try {
			await updateAgentQueuedMessage(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId, queueId, { message }, channel.value);
			if (disposed || target !== targetKey()) return "failed";
			queueVersion++;
			queuedMessages.value = queuedMessages.value.map((item) => item.id === queueId ? {
				...item,
				message: message.trim()
			} : item);
			return "updated";
		} catch (error) {
			if (disposed || target !== targetKey()) return "failed";
			const status = isRecord(error) ? error.httpStatusCode : void 0;
			if (status === 404 || status === 409) return "unavailable";
			showError(error, locale.baseText("agents.chat.queue.editError"));
			return "failed";
		} finally {
			if (!disposed && target === targetKey()) refreshHistoryFromPush();
		}
	}
	async function reorderQueuedMessage(queueId, targetQueueId, expectedQueueIds) {
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (!threadId || disposed || isReorderingQueue.value) return;
		const target = targetKey();
		isReorderingQueue.value = true;
		try {
			await reorderAgentQueuedMessage(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId, queueId, {
				targetQueueId,
				expectedQueueIds
			}, channel.value);
		} catch (error) {
			if (!disposed && target === targetKey()) {
				const status = isRecord(error) ? error.httpStatusCode : void 0;
				const key = status === 404 || status === 409 ? "agents.chat.queue.reorderUnavailable" : "agents.chat.queue.reorderError";
				showError(error, locale.baseText(key));
			}
		} finally {
			if (!disposed && target === targetKey()) {
				await refreshQueue();
				if (!disposed && target === targetKey()) isReorderingQueue.value = false;
			}
		}
	}
	async function steerQueuedMessage(queueId) {
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		const executionId = steerableExecutionId.value;
		if (!threadId || !executionId || !canSteer.value || steeringQueueIds.value.has(queueId)) return;
		const target = targetKey();
		steeringQueueIds.value.add(queueId);
		try {
			await steerAgentQueuedMessage(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId, queueId, { executionId }, channel.value);
			if (disposed || target !== targetKey()) return;
			queuedMessages.value = queuedMessages.value.map((item) => item.id === queueId ? {
				...item,
				steeringExecutionId: executionId
			} : item);
		} catch (error) {
			if (!disposed && target === targetKey()) showError(error, locale.baseText("agents.chat.queue.steerError"));
		} finally {
			if (!disposed && target === targetKey()) {
				queueVersion++;
				await refreshQueue();
				steeringQueueIds.value.delete(queueId);
			}
		}
	}
	async function removeQueuedMessage(queueId) {
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (!threadId || removingQueueIds.value.has(queueId)) return "failed";
		const target = targetKey();
		removingQueueIds.value.add(queueId);
		try {
			await removeAgentQueuedMessage(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId, queueId, channel.value);
			if (disposed || target !== targetKey()) return "failed";
			queueVersion++;
			queuedMessages.value = queuedMessages.value.filter((item) => item.id !== queueId);
			for (const [controller, session] of streams) if (session.queueId === queueId && !session.executionId) controller.abort();
			return "removed";
		} catch (error) {
			if (!disposed && target === targetKey()) showError(error, locale.baseText("agents.chat.queue.removeError"));
			return "failed";
		} finally {
			if (target === targetKey()) {
				removingQueueIds.value.delete(queueId);
				refreshHistoryFromPush();
			}
		}
	}
	const removeQueueListener = pushStore.addEventListener((event) => {
		if (event.type === "agentMessageQueueUpdated" && event.data.projectId === params.projectId.value && event.data.agentId === params.agentId.value && event.data.threadId === (params.continueSessionId?.value ?? acceptedSessionId.value)) {
			queueVersion++;
			refreshHistoryFromPush();
		}
	});
	function refresh() {
		retryCount = 0;
		clearTimeout(retryTimer);
		refreshHistoryFromPush();
	}
	watch([activeExecutionId, abortController], () => {
		ownershipVersion++;
	}, { flush: "sync" });
	watch(() => pushStore.isConnected, (connected) => {
		if (connected) refresh();
	});
	watch(visibility, (value) => {
		if (value === "visible") refresh();
	});
	watch(targetKey, () => {
		detachStream();
		messages.value = [];
		queuedMessages.value = [];
		removingQueueIds.value.clear();
		steeringQueueIds.value.clear();
		isReorderingQueue.value = false;
		consumedQueueIds.clear();
		steerableExecutionId.value = null;
		queueVersion++;
		activeExecutionId.value = null;
		acceptedSessionId.value = void 0;
		isRecovering.value = true;
		isCancelling.value = false;
		stopTargetId = void 0;
		historyVersion++;
		streamVersion++;
		refresh();
	});
	onScopeDispose(() => {
		disposed = true;
		removeQueueListener();
		detachStream();
		clearTimeout(retryTimer);
	});
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
			status: CHAT_MESSAGE_STATUS.STREAMING,
			executionId: session.executionId
		});
		messages.value.push(msg);
		session.current = msg;
		session.minted.add(msg);
		return msg;
	}
	/** Owner-aware notice identity: same code and same budget owner. */
	function sameBudgetNotice(a, b) {
		return a.code === b.code && a.agentId === b.agentId;
	}
	function attachBudgetNotice(session, code, agentId) {
		const msg = ensureCurrent(session);
		const notices = msg.budgetNotices ?? [];
		const matchesNotice = (notice) => sameBudgetNotice(notice, {
			code,
			agentId
		});
		if (notices.some(matchesNotice)) return;
		msg.budgetNotices = [...notices, {
			id: crypto.randomUUID(),
			code,
			...agentId !== void 0 ? { agentId } : {}
		}];
		const key = session.executionId ?? msg.id;
		let forTarget = pendingBudgetNotices.get(session.target);
		if (!forTarget) {
			forTarget = /* @__PURE__ */ new Map();
			pendingBudgetNotices.set(session.target, forTarget);
		}
		const entry = forTarget.get(key) ?? {
			notices: [],
			source: msg
		};
		if (!entry.notices.some(matchesNotice)) entry.notices.push({
			id: crypto.randomUUID(),
			code,
			...agentId !== void 0 ? { agentId } : {}
		});
		forTarget.set(key, entry);
	}
	/**
	* Budget cards are live-stream only: the stream attaches them to the
	* minted bubble, and every history read replaces the transcript wholesale.
	* Carry them forward from the messages being replaced — plus the bucket of
	* the streams that just ended — so a trailing refresh cannot wipe a card
	* nobody dismissed. Only an explicit clear (cap raised) drops them. A stop
	* before any assistant text has no persisted message to land on.
	*/
	function restoreBudgetNotices(next) {
		const pending = /* @__PURE__ */ new Map();
		const sources = /* @__PURE__ */ new Map();
		const collect = (key, notices, source) => {
			const merged = pending.get(key) ?? [];
			for (const notice of notices) if (!merged.some((item) => sameBudgetNotice(item, notice))) merged.push(notice);
			pending.set(key, merged);
			if (!sources.has(key)) sources.set(key, source);
		};
		for (const message of messages.value) if (message.budgetNotices?.length) collect(message.executionId ?? message.id, message.budgetNotices, message);
		const forTarget = pendingBudgetNotices.get(targetKey());
		if (forTarget) {
			pendingBudgetNotices.delete(targetKey());
			for (const [key, entry] of forTarget) collect(key, entry.notices, entry.source);
		}
		if (pending.size === 0) return next;
		const restored = next.map((message) => ({ ...message }));
		for (let index = restored.length - 1; index >= 0; index--) {
			const message = restored[index];
			if (message.role !== CHAT_MESSAGE_ROLE.ASSISTANT || message.executionId === void 0) continue;
			const notices = pending.get(message.executionId);
			if (!notices) continue;
			message.budgetNotices = notices;
			pending.delete(message.executionId);
		}
		for (const [key, notices] of pending) {
			const source = sources.get(key);
			if (!source) continue;
			const anchor = source.executionId === void 0 ? -1 : restored.findLastIndex((message) => message.executionId === source.executionId);
			restored.splice(anchor === -1 ? restored.length : anchor + 1, 0, {
				...source,
				budgetNotices: notices
			});
		}
		return restored;
	}
	/**
	* Drops the given notice codes from the live messages AND from the current
	* target's pending bucket. Both copies must go: the bucket is consumed by
	* the next history refresh and would otherwise re-attach a notice already
	* cleared from the messages. Other codes stay buffered so that refresh
	* still restores them; buckets of other targets are untouched.
	*/
	function clearBudgetNotices(codes) {
		messages.value = messages.value.map((message) => {
			if (!message.budgetNotices?.some((notice) => codes.has(notice.code))) return message;
			return {
				...message,
				budgetNotices: message.budgetNotices.filter((notice) => !codes.has(notice.code))
			};
		});
		const forTarget = pendingBudgetNotices.get(targetKey());
		if (!forTarget) return;
		for (const [key, entry] of forTarget) {
			const kept = entry.notices.filter((notice) => !codes.has(notice.code));
			if (kept.length === entry.notices.length) continue;
			if (kept.length === 0) forTarget.delete(key);
			else forTarget.set(key, {
				...entry,
				notices: kept
			});
		}
		if (forTarget.size === 0) pendingBudgetNotices.delete(targetKey());
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
		const interactive = findTailOpenInteractive(messages.value) ?? findOpenInteractive(messages.value);
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
		if (msg.status !== CHAT_MESSAGE_STATUS.AWAITING_USER && msg.status !== CHAT_MESSAGE_STATUS.STREAMING) return;
		if (!getMessageInteractives(msg).some((payload) => payload.resolvedAt === void 0) && !msg.toolCalls?.some(isToolCallInFlight)) msg.status = CHAT_MESSAGE_STATUS.SUCCESS;
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
	/**
	* Replace the payload of the keyed host event that a message of this turn
	* already has. Returns false when the turn has no such event.
	*/
	function replaceKeyedHostEvent(session, event) {
		for (const msg of session.minted) {
			const index = msg.hostEvents?.findIndex((existing) => existing.name === event.name && existing.key === event.key) ?? -1;
			if (index === -1 || !msg.hostEvents) continue;
			msg.hostEvents = msg.hostEvents.map((existing, i) => i === index ? {
				...existing,
				payload: event.payload
			} : existing);
			return true;
		}
		return false;
	}
	function dropOrphanMintedBubbles(session) {
		for (const msg of session.minted) if (!msg.content && (msg.toolCalls?.length ?? 0) === 0 && getMessageThinkingSegments(msg).length === 0 && !msg.hostEvents?.length) {
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
	function applySteeredMessage(event, session) {
		if (event.executionId !== session.executionId || consumedQueueIds.has(event.queueId)) return;
		consumedQueueIds.add(event.queueId);
		queueVersion++;
		queuedMessages.value = queuedMessages.value.filter((item) => item.id !== event.queueId);
		for (const [controller, waiting] of streams) if (waiting.queueId === event.queueId && !waiting.executionId) controller.abort();
		if (!messages.value.some((message) => message.id === event.message.id)) {
			settleOpenReasoning(session);
			if (session.current) markMessageSuccessIfSettled(session.current);
			session.current = void 0;
			messages.value.push(...convertDbMessages([event.message], extensions));
		}
	}
	function handleEvent(event, session) {
		if (session.controller.signal.aborted) return { done: true };
		if (session.executionId && abortController.value !== session.controller) {
			finalizeStream(session);
			return { done: true };
		}
		if (event.type !== "error") acknowledgeSessionCreation();
		switch (event.type) {
			case "message-queued":
				session.queueId = event.queueId;
				acceptedSessionId.value = event.sessionId;
				detachExcessWaitingStreams();
				session.onAccepted?.(event.queueId);
				session.onAccepted = void 0;
				if (consumedQueueIds.has(event.queueId)) {
					session.controller.abort();
					return { done: true };
				}
				queueVersion++;
				refreshHistoryFromPush();
				break;
			case "message-steered":
				applySteeredMessage(event, session);
				break;
			case "execution-started":
				if (session.userMessage) {
					const inputMessageId = event.inputMessageIds?.[0];
					if (inputMessageId) session.userMessage.id = inputMessageId;
				}
				for (const [controller, other] of streams) {
					if (controller === session.controller) continue;
					if (other.executionId) {
						finalizeStream(other);
						controller.abort();
					} else other.needsStartValidation = true;
				}
				abortController.value = session.controller;
				isStreamOpen.value = true;
				streamVersion++;
				fatalError.value = null;
				warnings.value = [];
				if (session.userMessage) {
					if (!messages.value.some((message) => message.role === CHAT_MESSAGE_ROLE.USER && message.executionId === event.executionId)) messages.value.push({
						...session.userMessage,
						content: event.message ?? session.userMessage.content,
						executionId: event.executionId
					});
				}
				queueVersion++;
				queuedMessages.value = queuedMessages.value.filter((item) => item.id !== session.queueId);
				refreshQueue();
				clearTimeout(stopAcceptanceTimer);
				session.executionId = event.executionId;
				session.sessionId = event.sessionId;
				notifyUsage(session);
				activeExecutionId.value = event.executionId;
				acceptedSessionId.value = event.sessionId;
				session.onAccepted?.();
				session.onAccepted = void 0;
				if (isCancelling.value) reconcileStop();
				break;
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
					const failed = event.isError || isFailedDelegateOutput(found.tc.tool, event.output) || isPolicyRefusedToolOutput(event.output);
					found.tc.state = failed ? TOOL_CALL_STATE.ERROR : toolResultEvent.canceled === true ? TOOL_CALL_STATE.CANCELLED : TOOL_CALL_STATE.DONE;
					found.tc.canceled = toolResultEvent.canceled === true;
					found.tc.displaySummary = summariseToolCall(found.tc.tool, event.output, found.tc.input);
					const currentInteractive = getMessageInteractive(found.msg, event.toolCallId);
					const updated = rebuildInteractiveFromHistory(found.tc, extensions);
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
				}, extensions);
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
			case "host-event": {
				if (event.key !== void 0 && replaceKeyedHostEvent(session, event)) break;
				const msg = ensureCurrent(session);
				msg.hostEvents = [...msg.hostEvents ?? [], {
					id: crypto.randomUUID(),
					name: event.name,
					...event.key !== void 0 ? { key: event.key } : {},
					payload: event.payload
				}];
				break;
			}
			case "message": break;
			case "usage":
				notifyUsage(session, event.usage);
				break;
			case "finish": {
				if (event.usage) notifyUsage(session, event.usage);
				if (!params.budgetCards || event.finishReason !== "guardrail") break;
				const code = event.guardrail?.code;
				if (code !== void 0 && isBudgetStopCode(code)) attachBudgetNotice(session, code);
				break;
			}
			case "budget-notice":
				if (params.budgetCards) attachBudgetNotice(session, event.code, event.agentId);
				break;
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
				if (event.errorCode === AGENT_CHAT_ERROR_CODES.turnAlreadyRunning) {
					session.busy = true;
					isCancelling.value = false;
					stopTargetId = void 0;
					isRecovering.value = true;
					return { done: true };
				}
				settleOpenReasoning(session);
				dropOrphanMintedBubbles(session);
				markInFlightStateFailed(session);
				if (event.errorCode === AGENT_CHAT_ERROR_CODES.agentMisconfigured) fatalError.value = {
					message: event.message,
					missing: event.missing ?? []
				};
				else if (event.errorCode === AGENT_CHAT_ERROR_CODES.agentUnavailable) params.onAgentUnavailable?.();
				else if (session.userMessage && !session.executionId) showError(new Error(event.message), locale.baseText("agents.chat.queue.sendError"));
				else messages.value.push(reactive({
					id: crypto.randomUUID(),
					role: "assistant",
					content: event.message,
					toolCalls: [],
					status: CHAT_MESSAGE_STATUS.ERROR
				}));
				session.terminalEventReceived = true;
				notifyUsage(session, void 0, true);
				break;
			case "done":
				notifyUsage(session, void 0, true);
				if (event.executionId === activeExecutionId.value) activeExecutionId.value = null;
				settleOpenReasoning(session);
				if (event.executionId) {
					for (const msg of session.minted) msg.executionId = event.executionId;
					const forTarget = pendingBudgetNotices.get(session.target);
					if (forTarget) for (const msg of session.minted) {
						const entry = forTarget.get(msg.id);
						if (!entry) continue;
						forTarget.delete(msg.id);
						forTarget.set(event.executionId, entry);
					}
				}
				session.terminalEventReceived = true;
				return { done: true };
		}
	}
	function notifyUsage(session, usage, complete = false) {
		const sessionId = session.sessionId;
		if (!sessionId || !session.executionId) return;
		if (complete) session.usageComplete = true;
		params.onUsageUpdated?.({
			sessionId,
			executionId: session.executionId,
			usage,
			complete: session.usageComplete === true
		});
	}
	function detachExcessWaitingStreams() {
		let waiting = 0;
		for (const [controller, session] of streams) {
			if (!session.queueId || session.executionId || controller.signal.aborted) continue;
			if (++waiting > MAX_WAITING_STREAMS) controller.abort();
		}
	}
	async function handleDelayedExecutionStart(event, session) {
		const isCurrent = () => !disposed && !session.controller.signal.aborted && session.target === targetKey();
		for (let attempt = 0; attempt < MAX_START_VALIDATION_ATTEMPTS && isCurrent(); attempt++) {
			const ownershipAtStart = ownershipVersion;
			const history = await getChatMessages(rootStore.restApiContext, params.projectId.value, params.agentId.value, event.sessionId).catch(() => void 0);
			if (!isCurrent()) break;
			if (ownershipAtStart !== ownershipVersion) continue;
			if (history?.activeExecutionId !== event.executionId) break;
			messages.value = messages.value.filter((message) => message.executionId !== event.executionId);
			return handleEvent(event, session);
		}
		session.controller.abort();
		return { done: true };
	}
	async function consumeStream(response, session, signal) {
		if (!response.body) return;
		const reader = response.body.getReader();
		const decoder = new TextDecoder();
		let buffer = "";
		try {
			readerLoop: while (true) {
				const { done, value } = await reader.read();
				if (done || signal.aborted || disposed || session.target !== targetKey()) break;
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
					if ((event.type === "execution-started" && session.needsStartValidation ? await handleDelayedExecutionStart(event, session) : handleEvent(event, session))?.done) break readerLoop;
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
	async function postAndConsume(url, body, onAccepted, userMessage) {
		const controller = new AbortController();
		const session = {
			controller,
			userMessage,
			target: targetKey(),
			onAccepted,
			errorEmitted: false,
			terminalEventReceived: false,
			minted: /* @__PURE__ */ new Set(),
			reasoningStartedAt: /* @__PURE__ */ new Map(),
			openReasoning: /* @__PURE__ */ new Map()
		};
		streams.set(controller, session);
		if (!userMessage) {
			isStreamOpen.value = true;
			streamVersion++;
			abortController.value = controller;
		}
		let settleStream;
		streamSettlements.set(controller, new Promise((resolve) => {
			settleStream = resolve;
		}));
		const isCurrent = () => !disposed && session.target === targetKey();
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
			if (!isCurrent() || controller.signal.aborted) return { outcome: "aborted" };
			if (!response.ok || !response.body) {
				handleEvent({
					type: "error",
					message: response.statusText || "Failed to reach agent"
				}, session);
				return { outcome: "failed" };
			}
			await consumeStream(response, session, controller.signal);
			if (!isCurrent() || controller.signal.aborted) return { outcome: "aborted" };
			if (session.busy) return { outcome: "busy" };
			if (!session.terminalEventReceived) {
				if (session.userMessage && !session.queueId && !session.executionId) showError(/* @__PURE__ */ new Error("Stream closed before acceptance"), locale.baseText("agents.chat.queue.sendError"));
				if (abortController.value === controller) isRecovering.value = true;
				return { outcome: "detached" };
			}
			finalizeStream(session);
			if (!session.errorEmitted) session.onAccepted?.();
			return { outcome: session.errorEmitted ? "failed" : "completed" };
		} catch (error) {
			if (!isCurrent() || controller.signal.aborted) return { outcome: "aborted" };
			if (session.errorEmitted) return { outcome: "failed" };
			if (session.userMessage && !session.queueId && !session.executionId) showError(error, locale.baseText("agents.chat.queue.sendError"));
			if (abortController.value === controller) isRecovering.value = true;
			return { outcome: "detached" };
		} finally {
			streams.delete(controller);
			if (abortController.value === controller) {
				if (session.terminalEventReceived && session.executionId === activeExecutionId.value) activeExecutionId.value = null;
				clearTimeout(stopAcceptanceTimer);
				abortController.value = null;
				isStreamOpen.value = false;
			}
			streamSettlements.delete(controller);
			settleStream?.();
			if (isCurrent()) {
				if (session.executionId) streamVersion++;
				if (session.userMessage || session.executionId || refreshAfterStream || isRecovering.value) {
					refreshAfterStream = false;
					refreshHistoryFromPush();
				} else if (isCancelling.value && !activeExecutionId.value) isCancelling.value = false;
			}
		}
	}
	async function streamChat(message, files, onAccepted, userMessage, clientContext) {
		const target = targetKey();
		const url = agentChatBaseUrl(rootStore.restApiContext, params.projectId.value, params.agentId.value, channel.value);
		const body = { message };
		const sessionId = params.continueSessionId?.value ?? acceptedSessionId.value;
		const newSession = params.newSession?.value === true && sessionId !== acknowledgedSessionId;
		if (sessionId) {
			body.sessionId = sessionId;
			body.messageId = userMessage?.id;
			if (newSession) body.newSession = true;
		}
		if (clientContext) body.clientContext = clientContext;
		if (files?.length) body.attachments = await Promise.all(files.map(async (file) => {
			const encoded = await convertFileToBinaryData(file);
			return {
				fileName: file.name,
				mimeType: encoded.mimeType || "application/octet-stream",
				data: encoded.data
			};
		}));
		if (disposed || target !== targetKey()) return { outcome: "aborted" };
		const result = await postAndConsume(url, body, onAccepted, userMessage);
		if (newSession && params.newSession?.value === true && sessionId && sessionId === params.continueSessionId?.value && sessionId !== acknowledgedSessionId) await refreshHistory({ silent: true });
		return result;
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
	async function resume(payload, onAccepted) {
		if (isStreaming.value || isCancelling.value) return "busy";
		const isCancellation = "cancelled" in payload;
		const text = isCancellation ? payload.text.trim() : "";
		if (isCancellation && !text) return "busy";
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
				const updated = rebuildInteractiveFromHistory(found.tc, extensions);
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
				status: "success",
				createdAt: Date.now()
			});
		}
		const { outcome } = await postAndConsume(`${agentChatBaseUrl(rootStore.restApiContext, params.projectId.value, params.agentId.value, channel.value)}/resume`, {
			runId: payload.runId,
			toolCallId: payload.toolCallId,
			resumeData
		}, onAccepted);
		let reconciled = false;
		if (outcome === "failed" || outcome === "busy") reconciled = await refreshHistory();
		if ((outcome === "failed" || outcome === "busy") && !reconciled && !activeExecutionId.value && snapshot) {
			snapshot.tc.state = snapshot.prevState;
			snapshot.tc.output = snapshot.prevOutput;
			snapshot.tc.canceled = snapshot.prevCanceled;
			snapshot.tc.displaySummary = snapshot.prevSummary;
			snapshot.msg.status = snapshot.prevStatus;
			if (snapshot.prevInteractives) setMessageInteractives(snapshot.msg, snapshot.prevInteractives);
			else if (snapshot.prevInteractive) setMessageInteractives(snapshot.msg, [snapshot.prevInteractive]);
			else setMessageInteractives(snapshot.msg, []);
		}
		if (optimisticUserMessageId && (outcome === "busy" || outcome === "failed" && !reconciled && !activeExecutionId.value)) messages.value = messages.value.filter((m) => m.id !== optimisticUserMessageId);
		return outcome === "busy" ? "busy" : "sent";
	}
	async function cancelAndSteer(text, onAccepted) {
		const openInteractive = findTailSteerableInteractive(messages.value);
		if (!openInteractive?.runId) return "busy";
		return await resume({
			runId: openInteractive.runId,
			toolCallId: openInteractive.toolCallId,
			cancelled: true,
			text
		}, onAccepted);
	}
	/**
	* `clientContext` is per-message context that a system agent's provider reads.
	* The request body carries it only when it is set.
	*/
	async function sendMessage(text, files, onAccepted, clientContext) {
		const trimmed = text.trim();
		if (!trimmed && !files?.length || isSubmitting.value || isLoadingHistory.value) return "busy";
		isSubmitting.value = true;
		const submission = ++submissionVersion;
		const target = targetKey();
		const userMessage = {
			id: crypto.randomUUID(),
			role: "user",
			content: trimmed,
			status: "success",
			createdAt: Date.now(),
			attachments: files?.map((file) => ({
				fileName: file.name,
				mimeType: resolveFileMimeType(file.name, file.type) || "application/octet-stream",
				sizeBytes: file.size,
				file
			}))
		};
		return await new Promise((resolve) => {
			let released = false;
			const release = (outcome = "sent") => {
				if (released) return;
				released = true;
				if (submission === submissionVersion) isSubmitting.value = false;
				resolve(outcome);
			};
			streamChat(trimmed, files, (queueId) => {
				onAccepted?.(queueId);
				release();
			}, userMessage, clientContext).then(({ outcome }) => {
				release(outcome === "busy" ? "busy" : "sent");
			}).catch((error) => {
				if (!disposed && target === targetKey()) showError(error, locale.baseText("agents.chat.queue.sendError"));
			}).finally(release);
		});
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
	function detachStream() {
		clearTimeout(stopAcceptanceTimer);
		abortController.value = null;
		isStreamOpen.value = false;
		isSubmitting.value = false;
		submissionVersion++;
		for (const controller of streams.keys()) controller.abort();
	}
	function retainStopUntilAcceptance() {
		isCancelling.value = true;
		const controller = abortController.value;
		if (!controller) return;
		stopAcceptanceTimer = setTimeout(() => {
			if (controller !== abortController.value || !isCancelling.value || activeExecutionId.value) return;
			isRecovering.value = true;
			detachStream();
		}, STOP_ACCEPTANCE_TIMEOUT_MS);
	}
	function reconcileStop() {
		const executionId = activeExecutionId.value;
		if (!executionId || stopTargetId && stopTargetId !== executionId) {
			isCancelling.value = false;
			stopTargetId = void 0;
			return;
		}
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (threadId) requestExecutionStop(executionId, threadId);
	}
	async function requestExecutionStop(executionId, threadId) {
		if (stopTargetId === executionId) return;
		stopTargetId = executionId;
		const target = targetKey();
		try {
			const { cancelRequested } = await cancelAgentChatExecution(rootStore.restApiContext, params.projectId.value, params.agentId.value, threadId, executionId, channel.value);
			if (!cancelRequested && target === targetKey() && stopTargetId === executionId) {
				isCancelling.value = false;
				stopTargetId = void 0;
			}
		} catch (error) {
			if (!disposed && target === targetKey() && stopTargetId === executionId) {
				isCancelling.value = false;
				stopTargetId = void 0;
				showError(error, locale.baseText("agents.chat.stop.error"));
			}
		} finally {
			if (!disposed && target === targetKey()) refreshHistoryFromPush();
		}
	}
	async function stopGenerating() {
		if (isCancelling.value) return;
		const executionId = activeExecutionId.value;
		const threadId = params.continueSessionId?.value ?? acceptedSessionId.value;
		if (executionId && threadId) {
			isCancelling.value = true;
			await requestExecutionStop(executionId, threadId);
			return;
		}
		const openSuspension = findOpenSuspension();
		if (!openSuspension) {
			if (isStreaming.value) retainStopUntilAcceptance();
			else settleStaleInFlightToolCalls();
			return;
		}
		isCancelling.value = true;
		const controller = abortController.value;
		const settlement = controller ? streamSettlements.get(controller) : void 0;
		try {
			const { cancelled } = await cancelAgentChatRun(rootStore.restApiContext, params.projectId.value, params.agentId.value, openSuspension.runId, channel.value);
			if (cancelled) markRunCancelled(openSuspension.runId);
			else await refreshHistory();
		} catch (error) {
			await refreshHistory();
			showError(error, locale.baseText("agents.chat.stop.error"));
		} finally {
			controller?.abort();
			await settlement;
			isCancelling.value = false;
		}
	}
	return {
		capabilities,
		queuedMessages,
		canSteer,
		steeringQueueIds,
		steerQueuedMessage,
		removingQueueIds,
		removeQueuedMessage,
		updateQueuedMessage,
		isReorderingQueue,
		reorderQueuedMessage,
		isSubmitting,
		isLoadingHistory,
		messages,
		isStreaming,
		activeExecutionId,
		isCancelling,
		messagingState,
		fatalError,
		warnings,
		loadHistory,
		refresh,
		clearHistory,
		clearBudgetNotices,
		sendMessage,
		stopGenerating,
		detachStream,
		resume,
		cancelAndSteer,
		dismissFatalError,
		dismissWarning
	};
}
//#endregion
//#region src/features/ai/shared/agentsChat/interactionRegistry.ts
/** The extensions of the chat panel, for the interactive cards that it renders. */
var AGENTS_CHAT_INTERACTION_EXTENSIONS = Symbol("agentsChatInteractionExtensions");
function findInteractionRenderer(payload, renderers) {
	return renderers.find((renderer) => renderer.matches(payload));
}
/**
* `tool-execution-end` and the stream finalizer set `DONE` before the output
* arrives, so a call without output is not finished yet.
*/
function isFinishedToolCall(toolCall) {
	return toolCall.state === TOOL_CALL_STATE.DONE && toolCall.canceled !== true && toolCall.output !== void 0;
}
/**
* The first host extension that renders the result of `toolCall`, or
* `undefined` when the chat shows the default tool step. Calls that run, wait
* for the user, fail, were canceled or have no output yet always use the
* default tool step.
*/
function findToolResultRenderer(toolCall, extensions) {
	if (!isFinishedToolCall(toolCall)) return void 0;
	for (const extension of extensions) {
		if (!extension.resultComponent || !extension.matchToolResult?.(toolCall)) continue;
		return {
			key: extension.key,
			component: extension.resultComponent
		};
	}
}
/**
* The first host extension that renders `event`, or `undefined` when no
* extension renders it. The chat shows nothing for an unhandled event.
*/
function findHostEventRenderer(event, extensions) {
	const extension = extensions.find((ext) => ext.hostEventComponent && ext.matchHostEvent?.(event));
	if (!extension?.hostEventComponent) return void 0;
	return {
		component: extension.hostEventComponent,
		placement: extension.hostEventPlacement ?? HOST_EVENT_PLACEMENT.START
	};
}
/**
* A string that stays the same when a host event updates. Keyed events use
* `name` and `key`, because an update in a later message gets a new `id`.
* Events without a key never update, so they use `id`.
*/
function hostEventIdentity(event) {
	return event.key === void 0 ? JSON.stringify(["id", event.id]) : JSON.stringify([
		"key",
		event.name,
		event.key
	]);
}
/**
* Appends the host events of `message` to `existing`. An event with the same
* identity replaces the earlier event in place: a keyed re-emit, or a turn
* that history stores twice (on suspend and on completion).
*/
function appendHostEventSources(existing, message) {
	const merged = [...existing];
	const indexByIdentity = new Map(merged.map((source, index) => [hostEventIdentity(source.event), index]));
	for (const event of message.hostEvents ?? []) {
		const identity = hostEventIdentity(event);
		const index = indexByIdentity.get(identity);
		if (index === void 0) {
			indexByIdentity.set(identity, merged.length);
			merged.push({
				event,
				message
			});
		} else merged[index] = {
			event,
			message
		};
	}
	return merged;
}
/**
* Sorts host events into the slots of an assistant message, in arrival order.
* `transient` events are kept only when `showTransient` is true. Unhandled
* events are dropped.
*/
function getHostEventItems(sources, extensions, showTransient) {
	const items = {
		start: [],
		end: [],
		transient: []
	};
	for (const source of sources) {
		const renderer = findHostEventRenderer(source.event, extensions);
		if (renderer) items[renderer.placement].push({
			...source,
			...renderer
		});
	}
	return {
		start: items.start,
		end: showTransient ? [...items.end, ...items.transient] : items.end
	};
}
//#endregion
//#region src/features/agents/components/AgentChatEmptyState.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var AgentChatEmptyState_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
}), [["__cssModules", { "$style": {
	emptyState: "_emptyState_dov2t_276",
	fadeInUp: "_fadeInUp_dov2t_1",
	icon: "_icon_dov2t_302",
	shimmer: "_shimmer_dov2t_1",
	spin: "_spin_dov2t_1",
	"skeleton-pulse": "_skeleton-pulse_dov2t_1",
	opacityPulse: "_opacityPulse_dov2t_1",
	popoverIn: "_popoverIn_dov2t_1",
	fadeIn: "_fadeIn_dov2t_1",
	collapsibleSlideDown: "_collapsibleSlideDown_dov2t_1",
	collapsibleSlideUp: "_collapsibleSlideUp_dov2t_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_dov2t_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_dov2t_1",
	blurSwapIn: "_blurSwapIn_dov2t_1",
	blurSwapOut: "_blurSwapOut_dov2t_1",
	pulseGlow: "_pulseGlow_dov2t_1",
	pulseGlowDelayed: "_pulseGlowDelayed_dov2t_1",
	fade: "_fade_dov2t_1",
	fadeInDown: "_fadeInDown_dov2t_1",
	fadeInLeft: "_fadeInLeft_dov2t_1",
	fadeInRight: "_fadeInRight_dov2t_1",
	fadeOut: "_fadeOut_dov2t_1",
	fadeOutDown: "_fadeOutDown_dov2t_1",
	fadeOutUp: "_fadeOutUp_dov2t_1",
	fadeOutLeft: "_fadeOutLeft_dov2t_1",
	fadeOutRight: "_fadeOutRight_dov2t_1",
	ping: "_ping_dov2t_1",
	blinkBackground: "_blinkBackground_dov2t_1",
	typingBlink: "_typingBlink_dov2t_1"
} }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/displayGroups.ts
/** Values of the `kind` tag that tells the `DisplayGroup` variants apart. */
var DISPLAY_GROUP_KIND = {
	/** A notice about background jobs of the agent that came to an end. */
	BACKGROUND_JOB_SIGNAL: "backgroundJobSignal",
	/** One user or assistant message that the list does not fold. */
	MESSAGE: "message",
	/** Consecutive tool-only assistant messages folded into one block. */
	TOOL_RUN: "toolRun"
};
function isGroupable(message) {
	return message.role === CHAT_MESSAGE_ROLE.ASSISTANT && !!message.toolCalls?.length && !message.content.trim();
}
function isAssistantGroup(group) {
	return group.kind === DISPLAY_GROUP_KIND.TOOL_RUN || group.kind === DISPLAY_GROUP_KIND.MESSAGE && group.message.role === CHAT_MESSAGE_ROLE.ASSISTANT;
}
function executionIdForGroup(group) {
	return group.kind === DISPLAY_GROUP_KIND.TOOL_RUN ? group.executionId : group.message.executionId;
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
function appendBudgetNotices(existing, next) {
	if (!next?.length) return existing;
	const merged = [...existing];
	for (const notice of next) if (!merged.some((item) => item.code === notice.code)) merged.push(notice);
	return merged;
}
function appendHostEvents(group, message) {
	if (!message.hostEvents?.length) return;
	group.hostEvents = appendHostEventSources(group.hostEvents ?? [], message);
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
		if (message.role === CHAT_MESSAGE_ROLE.ASSISTANT && message.backgroundJobSignal) {
			groups.push({
				kind: DISPLAY_GROUP_KIND.BACKGROUND_JOB_SIGNAL,
				id: `${message.executionId ?? message.id}:background-job-signal`,
				signal: message.backgroundJobSignal
			});
			if (!message.content && !message.toolCalls?.length && !getMessageThinkingSegments(message).length && !getMessageInteractives(message).length && !message.attachments?.length && !message.hostEvents?.length) continue;
		}
		if (isGroupable(message)) {
			const last = groups[groups.length - 1];
			if (last?.kind === DISPLAY_GROUP_KIND.TOOL_RUN && canAppendToToolRun(last, message)) {
				last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls ?? []);
				last.thinkingSegments.push(...getMessageThinkingSegments(message));
				last.active ||= message.status === "streaming";
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				last.budgetNotices = appendBudgetNotices(last.budgetNotices, message.budgetNotices);
				last.awaitingInput = last.interactives.some((payload) => payload.resolvedAt === void 0);
				last.executionId ??= message.executionId;
				appendHostEvents(last, message);
				continue;
			}
			const group = {
				kind: DISPLAY_GROUP_KIND.TOOL_RUN,
				id: message.id,
				thinkingSegments: getMessageThinkingSegments(message),
				active: message.status === "streaming",
				awaitingInput: message.status === "awaitingUser",
				toolCalls: [...message.toolCalls ?? []],
				interactives: getMessageInteractives(message),
				budgetNotices: appendBudgetNotices([], message.budgetNotices),
				...message.executionId ? { executionId: message.executionId } : {}
			};
			appendHostEvents(group, message);
			groups.push(group);
			continue;
		}
		if (message.role === CHAT_MESSAGE_ROLE.ASSISTANT) {
			const last = groups[groups.length - 1];
			if (last?.kind === DISPLAY_GROUP_KIND.TOOL_RUN && canAppendToToolRun(last, message)) {
				last.finalMessage = message;
				last.executionId ??= message.executionId;
				last.thinkingSegments.push(...getMessageThinkingSegments(message));
				last.active ||= message.status === "streaming";
				if (message.toolCalls?.length) last.toolCalls = appendToolCalls(last.toolCalls, message.toolCalls);
				last.interactives = appendInteractivePayloads(last.interactives, getMessageInteractives(message));
				last.budgetNotices = appendBudgetNotices(last.budgetNotices, message.budgetNotices);
				last.awaitingInput = last.interactives.some((payload) => payload.resolvedAt === void 0);
				appendHostEvents(last, message);
				continue;
			}
		}
		groups.push({
			kind: DISPLAY_GROUP_KIND.MESSAGE,
			id: message.id,
			message,
			thinkingSegments: message.role === CHAT_MESSAGE_ROLE.ASSISTANT ? getMessageThinkingSegments(message) : []
		});
	}
	moveThinkingToRunTail(groups);
	return groups;
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
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var AiReasoningBlock_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
}), [["__cssModules", { "$style": {
	reasoningPanel: "_reasoningPanel_1yb61_1",
	reasoningScroll: "_reasoningScroll_1yb61_10",
	reasoningContent: "_reasoningContent_1yb61_20"
} }]]);
//#endregion
//#region src/features/ai/shared/components/AiThinkingBlock.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1$6 = ["aria-expanded"];
var AiThinkingBlock_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
						], 10, _hoisted_1$6)]),
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
}), [["__cssModules", { "$style": {
	header: "_header_hfmv1_276",
	title: "_title_hfmv1_295",
	headerElapsed: "_headerElapsed_hfmv1_303",
	sublineElapsed: "_sublineElapsed_hfmv1_304",
	subline: "_subline_hfmv1_304",
	sublineLabel: "_sublineLabel_hfmv1_319",
	shimmer: "_shimmer_hfmv1_1",
	content: "_content_hfmv1_346",
	spin: "_spin_hfmv1_1",
	"skeleton-pulse": "_skeleton-pulse_hfmv1_1",
	opacityPulse: "_opacityPulse_hfmv1_1",
	popoverIn: "_popoverIn_hfmv1_1",
	fadeIn: "_fadeIn_hfmv1_1",
	collapsibleSlideDown: "_collapsibleSlideDown_hfmv1_1",
	collapsibleSlideUp: "_collapsibleSlideUp_hfmv1_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_hfmv1_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_hfmv1_1",
	blurSwapIn: "_blurSwapIn_hfmv1_1",
	blurSwapOut: "_blurSwapOut_hfmv1_1",
	pulseGlow: "_pulseGlow_hfmv1_1",
	pulseGlowDelayed: "_pulseGlowDelayed_hfmv1_1",
	fade: "_fade_hfmv1_1",
	fadeInUp: "_fadeInUp_hfmv1_1",
	fadeInDown: "_fadeInDown_hfmv1_1",
	fadeInLeft: "_fadeInLeft_hfmv1_1",
	fadeInRight: "_fadeInRight_hfmv1_1",
	fadeOut: "_fadeOut_hfmv1_1",
	fadeOutDown: "_fadeOutDown_hfmv1_1",
	fadeOutUp: "_fadeOutUp_hfmv1_1",
	fadeOutLeft: "_fadeOutLeft_hfmv1_1",
	fadeOutRight: "_fadeOutRight_hfmv1_1",
	ping: "_ping_hfmv1_1",
	blinkBackground: "_blinkBackground_hfmv1_1",
	typingBlink: "_typingBlink_hfmv1_1"
} }], ["__scopeId", "data-v-8a894310"]]);
//#endregion
//#region src/features/agents/components/AgentChatMemoryUsed.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var memoriesCountLabelKey = "agents.builder.quickActions.memoriesUsed.count";
var keyMemoryLabelKey = "agents.builder.quickActions.memoriesUsed.keyMemory";
var AgentChatMemoryUsed_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
}), [["__cssModules", { "$style": {
	popoverContent: "_popoverContent_10ui0_277",
	popoverIn: "_popoverIn_10ui0_1",
	panel: "_panel_10ui0_346",
	trigger: "_trigger_10ui0_358",
	keyMemoryList: "_keyMemoryList_10ui0_370",
	memorySection: "_memorySection_10ui0_383",
	keyMemory: "_keyMemory_10ui0_370",
	shimmer: "_shimmer_10ui0_1",
	spin: "_spin_10ui0_1",
	"skeleton-pulse": "_skeleton-pulse_10ui0_1",
	opacityPulse: "_opacityPulse_10ui0_1",
	fadeIn: "_fadeIn_10ui0_1",
	collapsibleSlideDown: "_collapsibleSlideDown_10ui0_1",
	collapsibleSlideUp: "_collapsibleSlideUp_10ui0_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_10ui0_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_10ui0_1",
	blurSwapIn: "_blurSwapIn_10ui0_1",
	blurSwapOut: "_blurSwapOut_10ui0_1",
	pulseGlow: "_pulseGlow_10ui0_1",
	pulseGlowDelayed: "_pulseGlowDelayed_10ui0_1",
	fade: "_fade_10ui0_1",
	fadeInUp: "_fadeInUp_10ui0_1",
	fadeInDown: "_fadeInDown_10ui0_1",
	fadeInLeft: "_fadeInLeft_10ui0_1",
	fadeInRight: "_fadeInRight_10ui0_1",
	fadeOut: "_fadeOut_10ui0_1",
	fadeOutDown: "_fadeOutDown_10ui0_1",
	fadeOutUp: "_fadeOutUp_10ui0_1",
	fadeOutLeft: "_fadeOutLeft_10ui0_1",
	fadeOutRight: "_fadeOutRight_10ui0_1",
	ping: "_ping_10ui0_1",
	blinkBackground: "_blinkBackground_10ui0_1",
	typingBlink: "_typingBlink_10ui0_1"
} }]]);
//#endregion
//#region src/features/agents/utils/background-job-labels.ts
var BACKGROUND_JOB_STATUS_LABEL_KEYS = {
	completed: "agents.chat.backgroundTasks.status.completed",
	failed: "agents.chat.backgroundTasks.status.failed",
	cancelled: "agents.chat.backgroundTasks.status.cancelled"
};
function backgroundJobTimelineLabelKey(key) {
	switch (key) {
		case "background-task-signal": return "agents.chat.backgroundTasks.resultsReceived";
		case "background-task-completed": return BACKGROUND_JOB_STATUS_LABEL_KEYS.completed;
		case "background-task-failed": return BACKGROUND_JOB_STATUS_LABEL_KEYS.failed;
		case "background-task-cancelled": return BACKGROUND_JOB_STATUS_LABEL_KEYS.cancelled;
		default: return;
	}
}
function backgroundJobResultLabel(job, i18n) {
	return i18n.baseText("agents.chat.backgroundTasks.result", { interpolate: {
		title: job.title,
		status: i18n.baseText(BACKGROUND_JOB_STATUS_LABEL_KEYS[job.status])
	} });
}
//#endregion
//#region src/features/agents/components/AgentChatBackgroundJobSignal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentChatBackgroundJobSignal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentChatBackgroundJobSignal",
	props: { signal: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AiActivityStep_default), {
				label: unref(i18n).baseText("agents.chat.backgroundTasks.resultsReceived"),
				"wrap-content": "",
				"data-testid": "agent-chat-background-job-signal"
			}, {
				default: withCtx(() => [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.jobs) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.signal.tasks, (job) => {
					return openBlock(), createElementBlock("li", {
						key: job.id,
						class: normalizeClass(_ctx.$style.job)
					}, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-dark",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(job.title), 1)]),
						_: 2
					}, 1032, ["class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.outcome) }, [createVNode(unref(N8nIcon_default), {
						icon: job.status === "completed" ? "circle-check" : "circle-x",
						class: normalizeClass(_ctx.$style.statusIcon),
						"data-status": job.status,
						size: "small"
					}, null, 8, [
						"icon",
						"class",
						"data-status"
					]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(BACKGROUND_JOB_STATUS_LABEL_KEYS)[job.status])), 1)]),
						_: 2
					}, 1024)], 2)], 2);
				}), 128))], 2)]),
				_: 1
			}, 8, ["label"]);
		};
	}
}), [["__cssModules", { "$style": {
	jobs: "_jobs_dolzd_276",
	job: "_job_dolzd_276",
	title: "_title_dolzd_291",
	outcome: "_outcome_dolzd_295",
	statusIcon: "_statusIcon_dolzd_302",
	fadeIn: "_fadeIn_dolzd_1",
	shimmer: "_shimmer_dolzd_1",
	spin: "_spin_dolzd_1",
	"skeleton-pulse": "_skeleton-pulse_dolzd_1",
	opacityPulse: "_opacityPulse_dolzd_1",
	popoverIn: "_popoverIn_dolzd_1",
	collapsibleSlideDown: "_collapsibleSlideDown_dolzd_1",
	collapsibleSlideUp: "_collapsibleSlideUp_dolzd_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_dolzd_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_dolzd_1",
	blurSwapIn: "_blurSwapIn_dolzd_1",
	blurSwapOut: "_blurSwapOut_dolzd_1",
	pulseGlow: "_pulseGlow_dolzd_1",
	pulseGlowDelayed: "_pulseGlowDelayed_dolzd_1",
	fade: "_fade_dolzd_1",
	fadeInUp: "_fadeInUp_dolzd_1",
	fadeInDown: "_fadeInDown_dolzd_1",
	fadeInLeft: "_fadeInLeft_dolzd_1",
	fadeInRight: "_fadeInRight_dolzd_1",
	fadeOut: "_fadeOut_dolzd_1",
	fadeOutDown: "_fadeOutDown_dolzd_1",
	fadeOutUp: "_fadeOutUp_dolzd_1",
	fadeOutLeft: "_fadeOutLeft_dolzd_1",
	fadeOutRight: "_fadeOutRight_dolzd_1",
	ping: "_ping_dolzd_1",
	blinkBackground: "_blinkBackground_dolzd_1",
	typingBlink: "_typingBlink_dolzd_1"
} }]]);
//#endregion
//#region src/features/agents/components/AgentChatHostEvents.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1$5 = { key: 0 };
var _hoisted_2$2 = ["data-placement"];
//#endregion
//#region src/features/agents/components/AgentChatHostEvents.vue
var AgentChatHostEvents_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatHostEvents",
	props: { items: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.items.length ? (openBlock(), createElementBlock("div", _hoisted_1$5, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
				return openBlock(), createElementBlock("div", {
					key: unref(hostEventIdentity)(item.event),
					"data-testid": "agent-chat-host-event",
					"data-placement": item.placement
				}, [(openBlock(), createBlock(resolveDynamicComponent(item.component), {
					event: item.event,
					message: item.message
				}, null, 8, ["event", "message"]))], 8, _hoisted_2$2);
			}), 128))])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatMessageActions.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/agents/components/AgentChatMessageActions.vue
var AgentChatMessageActions_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageActions",
	props: {
		content: {},
		canSendToAssistant: { type: Boolean }
	},
	emits: ["sendToAssistant"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ChatActions_default), {
				content: props.content,
				"data-test-id": "agent-chat-message-actions",
				"copy-test-id": "agent-chat-message-copy",
				"read-aloud-test-id": "agent-chat-message-read-aloud"
			}, {
				default: withCtx(() => [__props.canSendToAssistant ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "bottom",
					"show-after": 300,
					content: unref(i18n).baseText("agents.builder.preview.sendToAssistant")
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "square-arrow-out-up-right",
						size: "small",
						"icon-size": "medium",
						"data-test-id": "agent-chat-message-send-to-assistant",
						"aria-label": unref(i18n).baseText("agents.builder.preview.sendToAssistant"),
						onClick: _cache[0] || (_cache[0] = ($event) => emit("sendToAssistant"))
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "extra-actions")]),
				_: 3
			}, 8, ["content"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/agentChatInjectionKeys.ts
/** Provided by `AgentChatPanel` so attachments don't need `projectId`/`agentId`/`channel` props. */
var AGENT_ATTACHMENT_URL_KEY = Symbol("agentAttachmentUrl");
/**
* Sub-agent id → name map from the n8n Chat agent route. Chat-only members lack
* `agent:list`, so `useSubAgentNames` uses this instead of the project agent list.
*/
var AGENT_SUB_AGENT_NAMES_KEY = Symbol("agentSubAgentNames");
//#endregion
//#region src/features/agents/components/AgentChatMessageAttachments.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1$4 = ["title"];
var _hoisted_2$1 = [
	"href",
	"title",
	"onClick"
];
var _hoisted_3$1 = [
	"src",
	"alt",
	"onError"
];
var AgentChatMessageAttachments_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
		const attachmentUrlBuilder = inject(AGENT_ATTACHMENT_URL_KEY, null);
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
			if (attachmentUrlBuilder) return attachmentUrlBuilder(attachment.fileId);
			return getChatAttachmentUrl(rootStore.restApiContext, props.projectId, props.agentId, attachment.fileId);
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
				], 10, _hoisted_1$4)) : item.imageSrc ? (openBlock(), createElementBlock("a", {
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
				}, null, 42, _hoisted_3$1)], 10, _hoisted_2$1)) : (openBlock(), createBlock(resolveDynamicComponent(item.href ? "a" : "span"), {
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
}), [["__cssModules", { "$style": {
	attachments: "_attachments_1w7v2_1",
	thumbnailLink: "_thumbnailLink_1w7v2_9",
	notClickable: "_notClickable_1w7v2_19",
	thumbnail: "_thumbnail_1w7v2_9",
	fileChip: "_fileChip_1w7v2_30",
	fileName: "_fileName_1w7v2_44",
	fileSize: "_fileSize_1w7v2_51",
	unavailable: "_unavailable_1w7v2_56"
} }]]);
//#endregion
//#region src/features/agents/composables/useSubAgentNames.ts
init_runtime_core_esm_bundler();
function useSubAgentNames(projectId, isNeeded) {
	const provided = inject(AGENT_SUB_AGENT_NAMES_KEY, void 0);
	if (provided) return { subAgentNameById: provided };
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
//#region src/features/agents/utils/agent-plan.ts
var import_omit = /* @__PURE__ */ __toESM(require_omit(), 1);
var itemFields = {
	id: stringType().uuid(),
	title: stringType().min(1),
	description: stringType().optional(),
	resultSummary: stringType().optional(),
	status: enumType([
		"pending",
		"in_progress",
		"done",
		"failed",
		"cancelled"
	])
};
var taskSchema = objectType({
	...itemFields,
	kind: literalType("task")
});
var groupSchema = objectType({
	...itemFields,
	kind: literalType("group"),
	tasks: arrayType(taskSchema)
});
var planSchema = objectType({
	planId: stringType().uuid(),
	revision: numberType().int().positive(),
	closed: booleanType(),
	startedAt: stringType().datetime().nullable().optional(),
	closedAt: stringType().datetime().nullable().optional(),
	document: objectType({
		title: stringType().min(1),
		presentation: objectType({
			label: stringType().trim().min(1),
			detail: stringType().trim().min(1).optional()
		}).optional(),
		items: arrayType(discriminatedUnionType("kind", [taskSchema, groupSchema]))
	})
});
var planToolNames = /* @__PURE__ */ new Set([
	"create_plan",
	"read_plan",
	"update_plan",
	"close_plan"
]);
var planErrorSchema = unionType([stringType(), objectType({ error: stringType() })]);
function isRecoverablePlanError(call) {
	if (!planToolNames.has(call.tool) || call.tool === "read_plan" || call.canceled || call.state !== TOOL_CALL_STATE.ERROR && call.state !== TOOL_CALL_STATE.DONE) return false;
	const result = planErrorSchema.safeParse(call.output);
	if (!result.success) return false;
	if (typeof result.data !== "string" && ["invalid_plan", "conflict"].includes(result.data.error)) return true;
	if (call.state !== TOOL_CALL_STATE.ERROR) return false;
	return (typeof result.data === "string" ? result.data : result.data.error).replace(/^Error: /, "").startsWith(`AI_InvalidToolInputError: Invalid input for tool ${call.tool}:`);
}
var comparisonDocumentSchema = planSchema.shape.document.passthrough().extend({ items: arrayType(discriminatedUnionType("kind", [taskSchema.passthrough(), groupSchema.passthrough().extend({ tasks: arrayType(taskSchema.passthrough()) })])) });
var comparisonPlanSchema = planSchema.extend({ document: comparisonDocumentSchema });
var taskUpdateSchema = taskSchema.partial().required({ id: true }).passthrough().extend({ resultSummary: stringType().nullable().optional() });
var itemUpdateSchema = taskUpdateSchema.extend({
	kind: enumType(["task", "group"]).optional(),
	tasks: arrayType(taskUpdateSchema).optional()
});
var updateInputSchema = objectType({
	planId: stringType().uuid(),
	expectedRevision: numberType().int().positive(),
	document: comparisonDocumentSchema.partial().extend({
		presentation: planSchema.shape.document.shape.presentation.unwrap().partial().extend({ detail: stringType().trim().min(1).nullable().optional() }).strict().nullable().optional(),
		items: arrayType(itemUpdateSchema).optional()
	}),
	removeItemIds: arrayType(stringType().uuid()).optional()
}).strict();
var progressFields = [
	"title",
	"status",
	"resultSummary",
	"startedAt",
	"endedAt"
];
function planSubstance(document) {
	return {
		...(0, import_omit.default)(document, ["presentation", "items"]),
		items: document.items.map((item) => ({
			...(0, import_omit.default)(item, progressFields),
			...item.kind === "group" ? { tasks: item.tasks.map((task) => (0, import_omit.default)(task, progressFields)) } : {}
		}))
	};
}
function itemsHaveOnlyProgressUpdates(items, updates) {
	const previousItems = new Map(items.map((item) => [item.id, item]));
	const updatedIds = /* @__PURE__ */ new Set();
	return updates.every((update) => {
		const previous = previousItems.get(update.id);
		if (!previous || updatedIds.has(update.id)) return false;
		updatedIds.add(update.id);
		if (!Object.entries((0, import_omit.default)(update, [...progressFields, "tasks"])).every(([field, value]) => (0, import_isEqual.default)(previous[field], value))) return false;
		return update.tasks === void 0 || previous.kind === "group" && itemsHaveOnlyProgressUpdates(previous.tasks, update.tasks);
	});
}
function isProgressUpdate(previous, update) {
	return !update.removeItemIds?.length && Object.entries((0, import_omit.default)(update.document, ["presentation", "items"])).every(([field, value]) => (0, import_isEqual.default)(previous[field], value)) && itemsHaveOnlyProgressUpdates(previous.items, update.document.items ?? []);
}
function buildAgentPlanDisplayGroups(messages) {
	const plans = /* @__PURE__ */ new Map();
	const hiddenCalls = /* @__PURE__ */ new Set();
	for (const message of messages) for (const call of message.toolCalls ?? []) {
		if (!planToolNames.has(call.tool)) continue;
		hiddenCalls.delete(call.toolCallId);
		if (call.canceled) continue;
		if (call.state === TOOL_CALL_STATE.DONE && call.output !== void 0) {
			if (call.tool === "read_plan" && call.output === null) plans.clear();
			const result = comparisonPlanSchema.safeParse(call.output);
			if (!result.success) continue;
			const current = result.data;
			const revisions = plans.get(current.planId) ?? /* @__PURE__ */ new Map();
			const previous = revisions.get(current.revision - 1);
			if (call.tool === "update_plan" && previous && !previous.closed && !current.closed && (0, import_isEqual.default)(planSubstance(previous.document), planSubstance(current.document))) hiddenCalls.add(call.toolCallId);
			revisions.set(current.revision, current);
			plans.set(current.planId, revisions);
		} else if (call.tool === "update_plan" && (call.state === TOOL_CALL_STATE.PENDING || call.state === TOOL_CALL_STATE.RUNNING || call.state === TOOL_CALL_STATE.DONE && call.output === void 0)) {
			const input = updateInputSchema.safeParse(call.input);
			if (!input.success) continue;
			const previous = plans.get(input.data.planId)?.get(input.data.expectedRevision);
			if (previous && !previous.closed && isProgressUpdate(previous.document, input.data)) hiddenCalls.add(call.toolCallId);
		}
	}
	return buildDisplayGroups(messages).flatMap((group) => {
		if (group.kind === DISPLAY_GROUP_KIND.BACKGROUND_JOB_SIGNAL) return [group];
		if (group.kind === DISPLAY_GROUP_KIND.MESSAGE) return [{
			...group,
			message: {
				...group.message,
				toolCalls: group.message.toolCalls?.filter((call) => !hiddenCalls.has(call.toolCallId))
			}
		}];
		const toolCalls = group.toolCalls.filter((call) => !hiddenCalls.has(call.toolCallId));
		if (!toolCalls.length && !group.active && !group.finalMessage?.content.trim() && !group.finalMessage?.attachments?.length && !group.finalMessage?.renderParts?.length && !group.thinkingSegments.length && !group.budgetNotices.length && !group.interactives.length && !group.hostEvents?.length) return [];
		return [{
			...group,
			toolCalls
		}];
	});
}
function selectLatestAgentPlan(messages) {
	const plans = /* @__PURE__ */ new Map();
	let current = null;
	for (const message of messages) for (const call of message.toolCalls ?? []) {
		if (!planToolNames.has(call.tool) || call.state !== TOOL_CALL_STATE.DONE || call.canceled) continue;
		if (call.tool === "read_plan" && call.output === null) {
			current = null;
			plans.clear();
			continue;
		}
		const result = planSchema.safeParse(call.output);
		if (!result.success) continue;
		const previous = plans.get(result.data.planId);
		current = previous && previous.revision >= result.data.revision ? previous : result.data;
		plans.set(current.planId, current);
	}
	return current;
}
//#endregion
//#region src/features/agents/composables/useToolPolicyRefusalText.ts
var TOOL_SUFFIX = "Tool";
var REASON_KEY = {
	instance: "agents.chat.toolPolicyRefusal.reason",
	project: "agents.chat.toolPolicyRefusal.reason.project",
	optIn: "agents.chat.toolPolicyRefusal.reason.optIn",
	generic: "agents.chat.toolPolicyRefusal.reason"
};
function useToolPolicyRefusalText() {
	const i18n = useI18n();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	function nodeTypeName(type) {
		if (type.endsWith(TOOL_SUFFIX)) {
			const base = nodeTypesStore.getNodeType(type.slice(0, -4));
			if (base?.usableAsTool) return base.displayName;
		}
		return nodeTypesStore.getNodeType(type)?.displayName;
	}
	/** Undefined until the types are loaded, so callers show a readable fallback, not a type id. */
	function subjectName(violation) {
		const { subject, subjectType } = violation;
		if (!subject) return void 0;
		return subjectType === "credentialType" ? credentialsStore.getCredentialTypeByName(subject)?.displayName : nodeTypeName(subject);
	}
	/** The agent builder does not load node or credential types up front. */
	async function loadSubjectTypes(refusal) {
		const types = new Set(refusal.violations.map((v) => v.subjectType));
		await Promise.all([types.has("credentialType") ? credentialsStore.fetchCredentialTypes(false) : void 0, types.has("nodeType") ? nodeTypesStore.loadNodeTypesIfNotLoaded() : void 0]);
	}
	function reason(violation, fallbackName) {
		const message = getRestrictionMessage(getViolationVerdict(violation), violation.projectId);
		return i18n.baseText(REASON_KEY[message], { interpolate: { name: subjectName(violation) ?? fallbackName } });
	}
	return {
		subjectName,
		reason,
		loadSubjectTypes
	};
}
//#endregion
//#region src/features/agents/components/AgentChatToolPolicyRefusal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$3 = { "data-test-id": "agent-chat-tool-policy-refusal" };
//#endregion
//#region src/features/agents/components/AgentChatToolPolicyRefusal.vue
var AgentChatToolPolicyRefusal_default = /* @__PURE__ */ defineComponent({
	__name: "AgentChatToolPolicyRefusal",
	props: {
		refusal: {},
		fallbackName: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const { subjectName, reason, loadSubjectTypes } = useToolPolicyRefusalText();
		const isContactAdminOpen = ref(false);
		const reasonText = computed(() => [...new Set(props.refusal.violations.map((v) => reason(v, props.fallbackName)))].join(" "));
		const firstViolation = computed(() => props.refusal.violations[0]);
		const adminSubject = computed(() => subjectName(firstViolation.value) ?? props.fallbackName);
		const adminSubjectKind = computed(() => firstViolation.value.subjectType === "credentialType" ? "credential" : "node");
		const { copy: contactCopy } = useRestrictionContact(() => getViolationVerdict(firstViolation.value), () => firstViolation.value.projectId);
		onMounted(() => {
			loadSubjectTypes(props.refusal).catch(() => void 0);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", _hoisted_1$3, [
				createTextVNode(toDisplayString(reasonText.value) + " ", 1),
				createVNode(unref(N8nLink_default), {
					underline: "",
					size: "small",
					"data-test-id": "agent-chat-tool-policy-refusal-contact-admin",
					onClick: _cache[0] || (_cache[0] = withModifiers(($event) => isContactAdminOpen.value = true, ["prevent"]))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(unref(contactCopy).action)), 1)]),
					_: 1
				}),
				createVNode(unref(ContactAdminModal_default), {
					open: isContactAdminOpen.value,
					"onUpdate:open": _cache[1] || (_cache[1] = ($event) => isContactAdminOpen.value = $event),
					"node-type-name": adminSubject.value,
					kind: adminSubjectKind.value,
					audience: unref(contactCopy).audience
				}, null, 8, [
					"open",
					"node-type-name",
					"kind",
					"audience"
				])
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatToolSteps.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var AgentChatToolSteps_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentChatToolSteps",
	props: {
		toolCalls: {},
		projectId: {},
		canFixWithAssistant: { type: Boolean },
		dismissedToolCallIds: {},
		executionId: {}
	},
	emits: ["fixWithAssistant"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const showFix = computed(() => Boolean(props.canFixWithAssistant && props.executionId));
		const dismissedToolCallIds = computed(() => new Set(props.dismissedToolCallIds ?? []));
		const fixableFailures = computed(() => {
			if (!showFix.value) return [];
			const dismissed = dismissedToolCallIds.value;
			const failures = [];
			for (const toolCall of props.toolCalls) {
				if (dismissed.has(toolCall.toolCallId)) continue;
				if (toolCall.state !== TOOL_CALL_STATE.ERROR) continue;
				if (isRecoverablePlanError(toolCall)) continue;
				if (toolStepRefusal(toolCall)) continue;
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
		function getToolDisplayName(toolName, output) {
			return resolveToolNameForDisplay(toolName, i18n, output);
		}
		function toolStepLabel(tc, isCompact = false) {
			if (isDelegateSubAgentTool(tc.tool)) return i18n.baseText("agents.chat.delegate.labelFallback");
			if (isWriteTodosTool(tc.tool)) return writeTodosLabel(i18n);
			return getToolDisplayName(tc.tool, isCompact ? tc.output : void 0);
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
			const isCompact = tc.state === TOOL_CALL_STATE.DONE && isCompactToolName(tc.tool, tc.output);
			const details = isCompact ? "" : getToolCallDetails(tc, i18n, subAgentNameById.value) ?? "";
			const metadata = toolStepMetadata(tc);
			const hasChildProgress = Boolean(tc.childProgress);
			return {
				label: [toolStepLabel(tc, isCompact), ...metadata].join(" · "),
				details,
				hasRawData: !isCompact && details.length === 0 && hasToolData(tc) && !hasChildProgress,
				expandable: !isCompact && (details.length > 0 || hasToolData(tc) || hasChildProgress)
			};
		}
		function toolStepRefusal(tc) {
			if (tc.state !== TOOL_CALL_STATE.ERROR) return void 0;
			return parseToolPolicyRefusal(tc.output);
		}
		function toolStepError(tc) {
			if (isRecoverablePlanError(tc)) return i18n.baseText("agents.chat.plan.error.rejected");
			if (tc.state !== TOOL_CALL_STATE.ERROR) return void 0;
			const refusal = toolStepRefusal(tc);
			if (refusal) {
				const { scope } = getViolationVerdict(refusal.violations[0]);
				return i18n.baseText(SCOPE_LABEL_KEY[scope ?? "instance"]);
			}
			if (isEmptyToolErrorPayload(tc.output)) return i18n.baseText("agents.chat.toolError.generic");
			return formatToolData(tc.output);
		}
		function hideToolErrorCallout(tc) {
			if (toolStepRefusal(tc)) return false;
			return isRecoverablePlanError(tc) || showFix.value && tc.state === TOOL_CALL_STATE.ERROR;
		}
		/** The refusal payload is for the model; the callout explains it to the user. */
		function showToolOutput(tc) {
			return tc.output !== void 0 && !toolStepRefusal(tc);
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
							"error-icon": toolStepRefusal(tc) ? "lock" : void 0,
							"hide-error-callout": hideToolErrorCallout(tc),
							"has-content": view.expandable
						}, createSlots({
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
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), showToolOutput(tc) ? (openBlock(), createElementBlock("div", {
									key: 1,
									class: normalizeClass(_ctx.$style.toolDataSection)
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
							]),
							_: 2
						}, [toolStepRefusal(tc) ? {
							name: "errorCallout",
							fn: withCtx(() => [createVNode(AgentChatToolPolicyRefusal_default, {
								refusal: toolStepRefusal(tc),
								"fallback-name": toolStepLabel(tc)
							}, null, 8, ["refusal", "fallback-name"])]),
							key: "0"
						} : void 0]), 1032, [
							"label",
							"loading",
							"error",
							"error-icon",
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
					"error-icon": toolStepRefusal(tc) ? "lock" : void 0,
					"hide-error-callout": hideToolErrorCallout(tc),
					"has-content": toolStepView(tc).expandable
				}, createSlots({
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
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.input")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.input)), 3)], 2)) : createCommentVNode("", true), showToolOutput(tc) ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.toolDataSection)
							}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolDataLabel) }, toDisplayString(unref(i18n).baseText("agentSessions.timeline.output")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.toolDataContent) }, toDisplayString(formatToolData(tc.output)), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
						], 64);
					}), 128))]),
					_: 2
				}, [toolStepRefusal(tc) ? {
					name: "errorCallout",
					fn: withCtx(() => [createVNode(AgentChatToolPolicyRefusal_default, {
						refusal: toolStepRefusal(tc),
						"fallback-name": toolStepLabel(tc)
					}, null, 8, ["refusal", "fallback-name"])]),
					key: "0"
				} : void 0]), 1032, [
					"label",
					"loading",
					"error",
					"error-icon",
					"hide-error-callout",
					"has-content"
				]);
			}), 128)), createVNode(Transition, { name: "fix-callout" }, {
				default: withCtx(() => [fixableErrorTexts.value.length > 0 ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "danger",
					class: normalizeClass(_ctx.$style.fixCallout),
					"data-test-id": "agent-chat-tool-fix-with-assistant-callout"
				}, {
					trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "small",
						variant: "outline",
						class: normalizeClass(_ctx.$style.fixCalloutButton),
						"data-test-id": "agent-chat-tool-fix-with-assistant",
						onClick: emitFixWithAssistant
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "sparkles",
							size: "small"
						})]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.preview.fixWithAssistant")), 1)]),
						_: 1
					}, 8, ["class"])]),
					default: withCtx(() => [fixableErrorTexts.value.length === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(fixableErrorTexts.value[0]), 1)], 64)) : (openBlock(), createElementBlock("ul", {
						key: 1,
						class: normalizeClass(_ctx.$style.errorList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(fixableErrorTexts.value, (error) => {
						return openBlock(), createElementBlock("li", { key: error }, toDisplayString(error), 1);
					}), 128))], 2))]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
}), [["__cssModules", { "$style": {
	toolSteps: "_toolSteps_cccc2_2",
	fixCallout: "_fixCallout_cccc2_6",
	fixCalloutButton: "_fixCalloutButton_cccc2_21",
	errorList: "_errorList_cccc2_26",
	childProgress: "_childProgress_cccc2_35",
	answer: "_answer_cccc2_48",
	toolDataList: "_toolDataList_cccc2_58",
	toolDataSection: "_toolDataSection_cccc2_66",
	toolDataLabel: "_toolDataLabel_cccc2_74",
	toolDataContent: "_toolDataContent_cccc2_82"
} }]]);
//#endregion
//#region src/features/agents/components/AgentChatRetryError.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var AgentChatRetryError_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentChatRetryError",
	props: {
		message: {},
		retryMessageId: {},
		retryDisabled: { type: Boolean }
	},
	emits: ["retry"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				theme: "danger",
				class: normalizeClass(_ctx.$style.callout),
				"data-testid": "agent-chat-retry-error"
			}, createSlots({
				default: withCtx(() => [createTextVNode(toDisplayString(__props.message) + " ", 1)]),
				_: 2
			}, [__props.retryMessageId ? {
				name: "trailingContent",
				fn: withCtx(() => [createVNode(unref(N8nButton_default), {
					size: "small",
					variant: "outline",
					class: normalizeClass(_ctx.$style.retryButton),
					disabled: __props.retryDisabled,
					"data-testid": "agent-chat-retry",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("retry", __props.retryMessageId))
				}, {
					icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "refresh-cw",
						size: "small"
					})]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.chat.retry")), 1)]),
					_: 1
				}, 8, ["class", "disabled"])]),
				key: "0"
			} : void 0]), 1032, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	callout: "_callout_c24ha_2",
	retryButton: "_retryButton_c24ha_17"
} }]]);
//#endregion
//#region src/features/agents/utils/agentPreviewUrl.ts
var AGENT_PREVIEW_PATH = /^\/projects\/([^/]+)\/agents\/([^/]+)\/preview\/?$/;
var AGENT_BUILDER_PATH = /^\/projects\/([^/]+)\/agents\/([^/]+)\/?$/;
var ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+.-]*:/i;
function decodePathSegment(value) {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}
function buildAgentPreviewHref(projectId, agentId, queryParams) {
	const searchParams = new URLSearchParams(queryParams);
	searchParams.set(OPEN_PREVIEW_PARAM, "true");
	return `/projects/${encodeURIComponent(projectId)}/agents/${encodeURIComponent(agentId)}?${searchParams.toString()}`;
}
function resolveAgentPreviewLink(href, origin = window.location.origin) {
	const isRootRelative = href.startsWith("/") && !href.startsWith("//");
	const isAbsolute = ABSOLUTE_URL_PATTERN.test(href);
	if (!isRootRelative && !isAbsolute) return void 0;
	try {
		const url = new URL(href, origin);
		if (url.origin !== origin) return void 0;
		const match = AGENT_PREVIEW_PATH.exec(url.pathname) ?? (url.searchParams.get("openPreview") === "true" ? AGENT_BUILDER_PATH.exec(url.pathname) : null);
		if (!match) return void 0;
		const searchParams = new URLSearchParams(url.search);
		searchParams.set(OPEN_PREVIEW_PARAM, "true");
		return {
			projectId: decodePathSegment(match[1]),
			agentId: decodePathSegment(match[2]),
			href: `/projects/${match[1]}/agents/${match[2]}?${searchParams.toString()}`
		};
	} catch {
		return;
	}
}
//#endregion
//#region src/features/agents/components/AgentMarkdownChunk.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/agents/components/AgentMarkdownChunk.vue
var AgentMarkdownChunk_default = /* @__PURE__ */ defineComponent({
	__name: "AgentMarkdownChunk",
	props: { source: {} },
	setup(__props) {
		const router = useRouter();
		const openAgentChatPreview = inject("openAgentChatPreview", void 0);
		function handleLinkClick(event) {
			if (!(event.target instanceof Element)) return;
			const link = event.target.closest("a");
			if (!link) return;
			const href = link.getAttribute("href");
			if (!href) return;
			const previewTarget = resolveAgentPreviewLink(href);
			if (!previewTarget) return;
			link.setAttribute("href", previewTarget.href);
			if (openAgentChatPreview) {
				event.preventDefault();
				openAgentChatPreview(previewTarget.agentId, previewTarget.projectId);
				return;
			}
			if (event.metaKey || event.ctrlKey) return;
			event.preventDefault();
			router.push(previewTarget.href);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nMarkdown_default), {
				content: __props.source,
				onClick: handleLinkClick
			}, null, 8, ["content"]);
		};
	}
});
var AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing: "_typing_z5zfd_276",
	typingBlink: "_typingBlink_z5zfd_1",
	shimmer: "_shimmer_z5zfd_1",
	spin: "_spin_z5zfd_1",
	"skeleton-pulse": "_skeleton-pulse_z5zfd_1",
	opacityPulse: "_opacityPulse_z5zfd_1",
	popoverIn: "_popoverIn_z5zfd_1",
	fadeIn: "_fadeIn_z5zfd_1",
	collapsibleSlideDown: "_collapsibleSlideDown_z5zfd_1",
	collapsibleSlideUp: "_collapsibleSlideUp_z5zfd_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_z5zfd_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_z5zfd_1",
	blurSwapIn: "_blurSwapIn_z5zfd_1",
	blurSwapOut: "_blurSwapOut_z5zfd_1",
	pulseGlow: "_pulseGlow_z5zfd_1",
	pulseGlowDelayed: "_pulseGlowDelayed_z5zfd_1",
	fade: "_fade_z5zfd_1",
	fadeInUp: "_fadeInUp_z5zfd_1",
	fadeInDown: "_fadeInDown_z5zfd_1",
	fadeInLeft: "_fadeInLeft_z5zfd_1",
	fadeInRight: "_fadeInRight_z5zfd_1",
	fadeOut: "_fadeOut_z5zfd_1",
	fadeOutDown: "_fadeOutDown_z5zfd_1",
	fadeOutUp: "_fadeOutUp_z5zfd_1",
	fadeOutLeft: "_fadeOutLeft_z5zfd_1",
	fadeOutRight: "_fadeOutRight_z5zfd_1",
	ping: "_ping_z5zfd_1",
	blinkBackground: "_blinkBackground_z5zfd_1"
};
//#endregion
//#region src/features/agents/components/AgentTypingIndicator.vue
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
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
var AgentTypingIndicator_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": AgentTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/agents/components/AgentBudgetNoticeCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentBudgetNoticeCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentBudgetNoticeCard",
	props: {
		code: {},
		canIncrease: {
			type: Boolean,
			default: false
		},
		pending: {
			type: Boolean,
			default: false
		}
	},
	emits: ["increase"],
	setup(__props, { emit: __emit }) {
		const COPY = {
			"budget.monthly": {
				title: "agents.chat.budget.monthly.title",
				message: "agents.chat.budget.monthly.message",
				input: "agents.chat.budget.monthly.input",
				dismissed: "agents.chat.budget.monthly.dismissed"
			},
			"budget.session": {
				title: "agents.chat.budget.session.title",
				message: "agents.chat.budget.session.message",
				input: "agents.chat.budget.session.input",
				dismissed: "agents.chat.budget.session.dismissed"
			},
			"budget.alert": {
				title: "agents.chat.budget.alert.title",
				message: "agents.chat.budget.alert.message",
				input: "agents.chat.budget.alert.input",
				dismissed: "agents.chat.budget.alert.dismissed"
			}
		};
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const dismissed = ref(false);
		const amount = ref();
		const copy = computed(() => COPY[props.code]);
		const field = computed(() => props.code === "budget.session" ? "sessionCostCapUsd" : "monthlyBudgetUsd");
		function onAmount(value) {
			amount.value = parseBudgetAmount(value);
		}
		function increase() {
			const value = amount.value;
			if (value === void 0 || props.pending) return;
			emit("increase", {
				field: field.value,
				amount: value
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.card),
				"data-testid": "agent-budget-notice-card"
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
					createVNode(unref(N8nText_default), {
						tag: "p",
						bold: "",
						class: normalizeClass(_ctx.$style.title),
						"data-testid": "agent-budget-notice-title"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(copy.value.title)), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "small",
						class: normalizeClass(_ctx.$style.message)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(copy.value.message)), 1)]),
						_: 1
					}, 8, ["class"]),
					dismissed.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						"data-testid": "agent-budget-notice-dismissed"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(copy.value.dismissed)), 1)]),
						_: 1
					})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [__props.canIncrease ? (openBlock(), createElementBlock("label", {
						key: 0,
						class: normalizeClass(_ctx.$style.amount)
					}, [createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(copy.value.input)), 1)]),
						_: 1
					}), createVNode(unref(N8nInputNumber_default), {
						"model-value": amount.value,
						min: 0,
						controls: false,
						disabled: __props.pending,
						"data-testid": "agent-budget-notice-amount",
						"onUpdate:modelValue": onAmount
					}, {
						prefix: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.budget.currencyPrefix")), 1)]),
						_: 1
					}, 8, ["model-value", "disabled"])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						disabled: __props.pending,
						"data-testid": "agent-budget-notice-not-now",
						onClick: _cache[0] || (_cache[0] = ($event) => dismissed.value = true)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.budget.notNow")), 1)]),
						_: 1
					}, 8, ["disabled"]), __props.canIncrease ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						size: "medium",
						loading: __props.pending,
						"data-testid": "agent-budget-notice-increase",
						onClick: increase
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.chat.budget.increase")), 1)]),
						_: 1
					}, 8, ["loading"])) : createCommentVNode("", true)], 2)], 64))
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": {
	card: "_card_uq9pg_1",
	body: "_body_uq9pg_7",
	title: "_title_uq9pg_13",
	message: "_message_uq9pg_14",
	amount: "_amount_uq9pg_22",
	actions: "_actions_uq9pg_28"
} }]]);
//#endregion
//#region src/features/ai/shared/agentsChat/components/InteractionRenderer.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
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
//#region src/features/agents/components/interactive/N8nChatActionCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1$2 = ["src", "alt"];
var N8nChatActionCard_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
					}, null, 10, _hoisted_1$2)) : createCommentVNode("", true)], 64))], 64);
				}), 128))
			], 2);
		};
	}
}), [["__cssModules", { "$style": {
	card: "_card_1wrhr_2",
	title: "_title_1wrhr_11",
	message: "_message_1wrhr_15",
	section: "_section_1wrhr_19",
	sectionButton: "_sectionButton_1wrhr_26",
	divider: "_divider_1wrhr_30",
	buttonRow: "_buttonRow_1wrhr_36",
	selectGroup: "_selectGroup_1wrhr_42",
	selectLabel: "_selectLabel_1wrhr_48",
	radio: "_radio_1wrhr_52",
	fieldsGroup: "_fieldsGroup_1wrhr_56",
	fieldRow: "_fieldRow_1wrhr_62",
	image: "_image_1wrhr_67"
} }]]);
//#endregion
//#region src/features/agents/components/interactive/InteractiveCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
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
		const builtInRenderers = [{
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
		}, {
			key: "wait",
			component: N8nChatActionCard_default,
			matches: (payload) => payload.toolName === WAIT_TOOL_NAME,
			getProps: (payload) => {
				if (payload.toolName !== "wait") return {};
				return {
					input: payload.input,
					resolvedValue: payload.resolvedValue
				};
			}
		}];
		const extensions = inject(AGENTS_CHAT_INTERACTION_EXTENSIONS, void 0);
		/**
		* The host extensions of the chat render their own cards, keyed by
		* `extensionKey`. A card without a matching extension renders nothing.
		* Extensions without `component` have no card, so they add no renderer.
		*/
		const interactiveRenderers = computed(() => [...builtInRenderers, ...(extensions?.value ?? []).flatMap((extension) => {
			const { component } = extension;
			if (!component) return [];
			return [{
				key: extension.key,
				component,
				matches: (payload) => payload.toolName === "interaction_extension" && payload.extensionKey === extension.key,
				getProps: (payload) => extension.getProps?.(payload.input) ?? { input: payload.input }
			}];
		})]);
		function onSubmit(resumeData) {
			emit("submit", resumeData);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(InteractionRenderer_default, {
				payload: __props.payload,
				renderers: interactiveRenderers.value,
				disabled: disabled.value,
				onSubmit
			}, null, 8, [
				"payload",
				"renderers",
				"disabled"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/utils/fix-with-assistant.ts
var MAX_FIX_WITH_ASSISTANT_DRAFT_LENGTH = Math.min(16e3, EXTENDED_PROMPT_MAX_LENGTH);
var MAX_ERROR_LENGTH = 4e3;
var MAX_ERROR_DETAILS_TOTAL_LENGTH = 1e4;
var MAX_METADATA_VALUE_LENGTH = 160;
var MAX_TOOL_CALLS_PER_ERROR = 8;
var UNTRUSTED_DATA_CLOSE_TAG_PATTERN = /<\/untrusted_data/gi;
var SERVICE_CONTEXT_TAG_PATTERN = /<(\/?(?:thread-context|thread-artifacts|current-date-time|project-context))/gi;
var INVISIBLE_UNICODE_PATTERN = /[\u200B-\u200F\u2028-\u202F\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB\u00AD\u034F\u061C\u180E\u{E0001}\u{E0020}-\u{E007F}]/gu;
function truncate(value, maxLength, suffix) {
	if (value.length <= maxLength) return {
		value,
		truncated: false
	};
	const contentLength = Math.max(0, maxLength - suffix.length);
	return {
		value: `${value.slice(0, contentLength).trimEnd()}${suffix}`,
		truncated: true
	};
}
/** Neutralises prompt-injection markers before a value is embedded in a draft. */
function sanitizeDiagnosticText(value) {
	return value.replace(/<!--[\s\S]*?-->/g, "").replace(INVISIBLE_UNICODE_PATTERN, "").replace(UNTRUSTED_DATA_CLOSE_TAG_PATTERN, "&lt;/untrusted_data").replace(SERVICE_CONTEXT_TAG_PATTERN, "&lt;$1");
}
function metadataValue(value) {
	return truncate(sanitizeDiagnosticText(value).replaceAll(/\s+/g, " ").trim(), MAX_METADATA_VALUE_LENGTH, "…").value;
}
function formatTimestamp(timestamp) {
	if (timestamp === void 0 || !Number.isFinite(timestamp)) return void 0;
	const date = new Date(timestamp);
	if (Number.isNaN(date.getTime())) return void 0;
	return date.toISOString();
}
function groupFailures(failures) {
	const byError = /* @__PURE__ */ new Map();
	for (const failure of failures) {
		const error = scrubSecretsInText(sanitizeDiagnosticText(failure.error.trim()));
		if (!error) continue;
		const group = byError.get(error);
		if (group) {
			if (!failure.toolCallId || !group.failures.some(({ toolCallId }) => toolCallId === failure.toolCallId)) group.failures.push(failure);
		} else byError.set(error, {
			error,
			failures: [failure]
		});
	}
	return [...byError.values()];
}
function buildToolCallDiagnostic(failure) {
	const startedAt = formatTimestamp(failure.startedAt);
	const endedAt = formatTimestamp(failure.endedAt);
	const durationMs = failure.startedAt !== void 0 && failure.endedAt !== void 0 && Number.isFinite(failure.startedAt) && Number.isFinite(failure.endedAt) && failure.endedAt >= failure.startedAt ? failure.endedAt - failure.startedAt : void 0;
	return {
		toolDisplayName: metadataValue(failure.toolDisplayName || failure.toolName),
		toolName: metadataValue(failure.toolName),
		toolCallId: metadataValue(failure.toolCallId),
		...startedAt ? { startedAt } : {},
		...endedAt ? { endedAt } : {},
		...durationMs !== void 0 ? { durationMs } : {}
	};
}
function buildFailureDiagnostic(group, maxErrorLength) {
	const displayedFailures = group.failures.slice(0, MAX_TOOL_CALLS_PER_ERROR);
	const omittedToolCallCount = group.failures.length - displayedFailures.length;
	const error = truncate(group.error.replaceAll("\r\n", "\n"), maxErrorLength, "…");
	const diagnostic = {
		error: error.value,
		toolCalls: displayedFailures.map(buildToolCallDiagnostic)
	};
	if (error.truncated) diagnostic.errorTruncated = true;
	if (omittedToolCallCount > 0) diagnostic.omittedToolCallCount = omittedToolCallCount;
	return diagnostic;
}
function buildDiagnosticContext(context) {
	return {
		projectId: metadataValue(context.projectId),
		agentId: metadataValue(context.agentId),
		...context.agentName ? { agentName: metadataValue(context.agentName) } : {},
		sessionId: metadataValue(context.threadId),
		...context.sessionTitle ? { sessionTitle: metadataValue(context.sessionTitle) } : {},
		...context.sessionNumber !== void 0 ? { sessionNumber: context.sessionNumber } : {},
		executionId: metadataValue(context.executionId)
	};
}
function buildDiagnosticPayload(context, failures, omittedErrorCount, allErrorDetailsUnavailable) {
	return {
		context,
		failures,
		...omittedErrorCount > 0 ? { omittedErrorCount } : {},
		...allErrorDetailsUnavailable ? { errorDetailsUnavailable: true } : {}
	};
}
var BODY_SENTINEL = "__N8N_ASSISTANT_DRAFT_BODY__";
/**
* Put caller-supplied text into an assistant draft template. The body goes in
* via a sentinel so `baseText` can never interpolate it a second time, and via
* a replacer function so `$&` and `$1` in it stay literal.
*/
function renderAssistantDraft(i18n, templateKey, placeholder, body) {
	return i18n.baseText(templateKey, { interpolate: { [placeholder]: BODY_SENTINEL } }).replaceAll(BODY_SENTINEL, () => body);
}
function renderPrompt(payload, i18n) {
	return renderAssistantDraft(i18n, "agents.builder.preview.fixWithAssistantPrompt.template", "diagnostics", [
		"<untrusted_data source=\"agent-preview-tool-errors\">",
		JSON.stringify(payload, null, 2),
		"</untrusted_data>"
	].join("\n"));
}
function buildAgentFixWithAssistantPrompt(context, i18n) {
	const groups = groupFailures(context.failures);
	const maxErrorLength = Math.min(MAX_ERROR_LENGTH, Math.max(250, Math.floor(MAX_ERROR_DETAILS_TOTAL_LENGTH / Math.max(groups.length, 1))));
	const diagnosticContext = buildDiagnosticContext(context);
	const failureDiagnostics = [];
	let omittedErrorCount = 0;
	for (const [index, group] of groups.entries()) {
		const failure = buildFailureDiagnostic(group, maxErrorLength);
		const remainingErrorCount = groups.length - index - 1;
		if (renderPrompt(buildDiagnosticPayload(diagnosticContext, [...failureDiagnostics, failure], remainingErrorCount, false), i18n).length > MAX_FIX_WITH_ASSISTANT_DRAFT_LENGTH) {
			omittedErrorCount = groups.length - index;
			break;
		}
		failureDiagnostics.push(failure);
	}
	return renderPrompt(buildDiagnosticPayload(diagnosticContext, failureDiagnostics, omittedErrorCount, groups.length === 0), i18n);
}
//#endregion
//#region src/features/agents/utils/agent-change-request.ts
/**
* Detects preview-chat messages that ask the agent to change itself. A match
* shows a hand-off note that points to the n8n Assistant for setup changes.
*
* ponytail: English keyword heuristic. Swap for a classifier if it misses too
* much, e.g. for non-English messages.
*/
/** Setup nouns that read as the agent's own even without "your". */
var CORE_ASPECT = "instructions?|system prompts?|tools?|skills?|integrations?|channels?|guardrails?|mcp(?: servers?)?|sub-?agents?|vector stores?|evals?|evaluations?|knowledge(?: base)?|triggers?|schedules?|credentials?|models?|persona(?:lity)?";
/** Everyday words — they only mean the agent's setup when tied to the agent. */
var OWNED_ASPECT = `${CORE_ASPECT}|names?|prompts?|behaviou?rs?|settings?|configuration|config|descriptions?|icons?|rules?|temperature|memor(?:y|ies)`;
var CHANGE_VERB = "add|adjust|attach|change|configure|connect|delete|disable|drop|edit|enable|give|hook up|improve|install|modify|remove|rename|replace|set up|setup|swap|tweak|update";
/** Apostrophes included so "the agent's description" counts as two words, not three. */
var WORD = "[\\w']+";
/** Keeps someone else's things out: "improve my sales skills" is not a setup change. */
var NOT_THEIRS = "(?!(?:my|his|her|its|our|their)\\b)";
var AGENT_POSSESSIVE = "(?:your|yourself|(?:the|this) agent(?:'s)?)";
var ASPECT_PHRASE = `(?:(?:${CORE_ASPECT})|${AGENT_POSSESSIVE}\\s+(?:${WORD}\\s+){0,2}(?:${OWNED_ASPECT}))`;
/**
* A change verb and part of the setup, close together, in either order:
* "add a tool", "connect a Slack channel", "your instructions need an update".
* They have to be near each other, or a stray verb turns a plain question
* ("summarise your knowledge base") into a change request.
*/
var CHANGE_REQUEST_RE = new RegExp(`\\b(?:(?:${CHANGE_VERB})\\b(?:\\s+${NOT_THEIRS}${WORD}){0,3}\\s+${NOT_THEIRS}${ASPECT_PHRASE}|${AGENT_POSSESSIVE}\\s+(?:${WORD}\\s+){0,3}(?:${OWNED_ASPECT})\\b(?:\\s+${WORD}){0,3}\\s+(?:${CHANGE_VERB}))\\b`, "i");
/** Bounded to what the hand-off would actually send, so a pasted log stays cheap. */
var MAX_CHANGE_REQUEST_LENGTH = 4e3;
function looksLikeAgentChangeRequest(text) {
	return CHANGE_REQUEST_RE.test(text.slice(0, MAX_CHANGE_REQUEST_LENGTH));
}
/**
* Draft that hands a preview-chat change request to the n8n Assistant. The user
* wrote this sentence themselves and sees it in the composer, so it goes across
* as plain text — no fencing, no "treat this as data" preamble. It is still
* scrubbed, because a pasted secret should not travel to another surface.
*/
function buildAgentChangeRequestPrompt(changeRequest, i18n) {
	return renderAssistantDraft(i18n, "agents.builder.preview.editRequest.prompt.template", "request", scrubSecretsInText(sanitizeDiagnosticText(changeRequest.trim())).slice(0, MAX_CHANGE_REQUEST_LENGTH));
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
/**
* Label for a ChatGPT-style timestamp divider above a chat message:
*
*   - same local day      → "Today at {time}"
*   - previous local day  → "Yesterday at {time}"
*   - older                → "{weekday}, {month} {day} at {time}"
*
* Time and date formatting are left to the viewer's locale (12h/24h, date order).
*/
function formatChatDividerTimestamp(date, i18n, now = /* @__PURE__ */ new Date()) {
	const past = new Date(date);
	const time = past.toLocaleTimeString(void 0, {
		hour: "2-digit",
		minute: "2-digit"
	});
	if (isSameLocalDay(past, now)) return i18n.today(time);
	if (isYesterdayLocal(past, now)) return i18n.yesterday(time);
	const dateLabel = past.toLocaleDateString(void 0, {
		weekday: "short",
		month: "short",
		day: "numeric"
	});
	return i18n.date(dateLabel, time);
}
function useChatDividerTimestamp() {
	const i18n = useI18n();
	const strings = {
		today: (time) => i18n.baseText("agents.chat.timestamp.today", { interpolate: { time } }),
		yesterday: (time) => i18n.baseText("agents.chat.timestamp.yesterday", { interpolate: { time } }),
		date: (date, time) => i18n.baseText("agents.chat.timestamp.date", { interpolate: {
			date,
			time
		} })
	};
	return (date) => formatChatDividerTimestamp(date, strings);
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
//#region src/features/agents/components/AgentChatMessageList.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var SCROLL_STICK_THRESHOLD_PX = 80;
var AgentChatMessageList_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentChatMessageList",
	props: {
		messages: {},
		messagingState: {},
		projectId: {},
		agentId: {},
		sessionId: {},
		canSendToAssistant: { type: Boolean },
		dismissedFixToolCallIds: {},
		canIncreaseBudget: { type: Boolean },
		budgetIncreasePending: { type: Boolean },
		retryMessageId: {},
		retryDisabled: { type: Boolean }
	},
	emits: [
		"retry",
		"resume",
		"sendToAssistant",
		"increase-budget"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const canSendToAssistant = computed(() => Boolean(props.canSendToAssistant && props.agentId && props.sessionId));
		function onFixWithAssistant(group, failures) {
			if (group.kind === DISPLAY_GROUP_KIND.BACKGROUND_JOB_SIGNAL) return;
			const executionId = group.kind === DISPLAY_GROUP_KIND.TOOL_RUN ? group.executionId : group.message.executionId;
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
		* Tool approvals replace the composer. Answered chat cards collapse into
		* their tool-step summary. Display-only cards remain in the conversation.
		*/
		function shouldRenderInteractive(payload) {
			if (payload.toolName === "approval") return false;
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
		const interactionExtensions = inject(AGENTS_CHAT_INTERACTION_EXTENSIONS, void 0);
		const scrollRef = useTemplateRef("scrollRef");
		/** True when the bubble of `message` shows something besides host events. */
		function hasBubbleContent(message) {
			return !!(message.content.trim() || message.renderParts?.length || message.toolCalls?.length || message.thinkingSegments?.length || message.thinking || message.interactive || message.interactives?.length || message.attachments?.length || message.budgetNotices?.length);
		}
		/**
		* Keeps only the host events that an extension renders: on assistant messages,
		* and `transient` events only while the turn runs or waits for the user. A
		* message that then shows nothing is dropped, so no empty bubble shows. A
		* streaming message stays for the typing indicator.
		*/
		const visibleMessages = computed(() => {
			if (!props.messages.some((message) => message.hostEvents?.length)) return props.messages;
			const extensions = interactionExtensions?.value ?? [];
			return props.messages.flatMap((message) => {
				if (!message.hostEvents?.length) return [message];
				const live = message.status === CHAT_MESSAGE_STATUS.STREAMING || message.status === CHAT_MESSAGE_STATUS.AWAITING_USER;
				const hostEvents = message.role === CHAT_MESSAGE_ROLE.ASSISTANT ? message.hostEvents.filter((event) => {
					const renderer = findHostEventRenderer(event, extensions);
					if (!renderer) return false;
					return renderer.placement !== HOST_EVENT_PLACEMENT.TRANSIENT || live;
				}) : [];
				if (hostEvents.length === message.hostEvents.length) return [message];
				return hostEvents.length > 0 || hasBubbleContent(message) || !!message.backgroundJobSignal || message.status === CHAT_MESSAGE_STATUS.STREAMING ? [{
					...message,
					hostEvents: hostEvents.length ? hostEvents : void 0
				}] : [];
			});
		});
		const displayGroups = computed(() => buildAgentPlanDisplayGroups(visibleMessages.value));
		const NO_GROUP_TOOL_CALLS = {
			steps: [],
			hostResults: []
		};
		/**
		* The tool calls of each group, split into default steps and host results.
		* History can hold the same `toolCallId` twice (suspended, then resolved), so
		* each group checks its own copy of the call.
		*/
		const toolCallsByGroupId = computed(() => {
			const extensions = interactionExtensions?.value ?? [];
			const byGroupId = /* @__PURE__ */ new Map();
			for (const group of displayGroups.value) {
				if (group.kind === DISPLAY_GROUP_KIND.BACKGROUND_JOB_SIGNAL) continue;
				const toolCalls = group.kind === DISPLAY_GROUP_KIND.TOOL_RUN ? group.toolCalls : group.message.toolCalls ?? [];
				const split = {
					steps: [],
					hostResults: []
				};
				for (const toolCall of toolCalls) {
					const renderer = extensions.length > 0 ? findToolResultRenderer(toolCall, extensions) : void 0;
					if (renderer) split.hostResults.push({
						toolCall,
						renderer
					});
					else split.steps.push(toolCall);
				}
				byGroupId.set(group.id, split);
			}
			return byGroupId;
		});
		function getGroupToolCalls(groupId) {
			return toolCallsByGroupId.value.get(groupId) ?? NO_GROUP_TOOL_CALLS;
		}
		const retryErrorMessageId = computed(() => {
			const message = props.messages.at(-1);
			return props.retryMessageId && isRetryableChatError(message) ? message?.id : void 0;
		});
		const EMPTY_HOST_EVENT_ITEMS = {
			start: [],
			end: []
		};
		/** Host event components of each assistant group. `transient` events show only before text. */
		const hostEventItems = computed(() => {
			const itemsByGroupId = /* @__PURE__ */ new Map();
			const extensions = interactionExtensions?.value ?? [];
			for (const group of displayGroups.value) switch (group.kind) {
				case DISPLAY_GROUP_KIND.TOOL_RUN: {
					if (!group.hostEvents) break;
					const showTransient = !group.finalMessage?.content.trim();
					itemsByGroupId.set(group.id, getHostEventItems(group.hostEvents, extensions, showTransient));
					break;
				}
				case DISPLAY_GROUP_KIND.MESSAGE: {
					const { message } = group;
					if (!message.hostEvents) break;
					const sources = appendHostEventSources([], message);
					const showTransient = !message.content.trim();
					itemsByGroupId.set(group.id, getHostEventItems(sources, extensions, showTransient));
					break;
				}
				case DISPLAY_GROUP_KIND.BACKGROUND_JOB_SIGNAL:
			}
			return itemsByGroupId;
		});
		function getGroupHostEventItems(groupId) {
			return hostEventItems.value.get(groupId) ?? EMPTY_HOST_EVENT_ITEMS;
		}
		const streamingGroupId = computed(() => props.messages.at(-1)?.status === CHAT_MESSAGE_STATUS.STREAMING ? displayGroups.value.at(-1)?.id : void 0);
		const formatChatDividerTimestamp = useChatDividerTimestamp();
		/**
		* Divider label by group id: the first user message gets one, and so does any
		* later user message whose gap since the previous one exceeds the window above.
		* Messages without a `createdAt` (older history) are skipped and never become
		* the "previous" reference.
		*/
		const dividerLabels = computed(() => {
			const labels = /* @__PURE__ */ new Map();
			let previousUserCreatedAt;
			for (const group of displayGroups.value) {
				if (group.kind !== DISPLAY_GROUP_KIND.MESSAGE || group.message.role !== CHAT_MESSAGE_ROLE.USER) continue;
				const createdAt = group.message.createdAt;
				if (createdAt === void 0) continue;
				if (previousUserCreatedAt === void 0 || createdAt - previousUserCreatedAt > TIME.HOUR || !isSameLocalDay(new Date(createdAt), new Date(previousUserCreatedAt))) labels.set(group.id, formatChatDividerTimestamp(createdAt));
				previousUserCreatedAt = createdAt;
			}
			return labels;
		});
		/**
		* Dismissing the note silences it for the rest of this preview chat, so a user
		* who does not want the hand-off is not asked again on every request in the
		* conversation. A new chat asks again.
		*/
		const changeNoteDismissedKey = computed(function getChangeNoteDismissedKey() {
			return `N8N_AGENT_PREVIEW_CHANGE_NOTE_DISMISSED:${props.sessionId ?? ""}`;
		});
		const changeNoteDismissed = useSessionStorage(changeNoteDismissedKey, false);
		/**
		* Newest user message that reads as a request to change the agent itself. Only
		* the newest one carries the hand-off note, so a chat full of such asks doesn't
		* repeat the same banner.
		*/
		const changeRequestGroupId = computed(() => canSendToAssistant.value && !changeNoteDismissed.value ? displayGroups.value.findLast((group) => group.kind === DISPLAY_GROUP_KIND.MESSAGE && group.message.role === CHAT_MESSAGE_ROLE.USER && looksLikeAgentChangeRequest(group.message.content))?.id : void 0);
		function onEditWithAssistant(changeRequest) {
			emit("sendToAssistant", { changeRequest });
		}
		function isThinkingActive(message) {
			return message.status === CHAT_MESSAGE_STATUS.STREAMING || message.status === CHAT_MESSAGE_STATUS.AWAITING_USER;
		}
		function getAssistantGroupContent(group) {
			if (group.kind === DISPLAY_GROUP_KIND.BACKGROUND_JOB_SIGNAL) return "";
			if (group.kind === DISPLAY_GROUP_KIND.TOOL_RUN) return group.finalMessage?.content ?? "";
			return group.message.role === CHAT_MESSAGE_ROLE.ASSISTANT ? group.message.content : "";
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
		function canIncreaseForNotice(notice) {
			return props.canIncreaseBudget && (notice.agentId === void 0 || notice.agentId === props.agentId);
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
			if (group.kind === DISPLAY_GROUP_KIND.BACKGROUND_JOB_SIGNAL) return false;
			if (group.kind === DISPLAY_GROUP_KIND.TOOL_RUN) return group.finalMessage !== void 0 && group.finalMessage.status !== CHAT_MESSAGE_STATUS.STREAMING && group.finalMessage.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
			return group.message.role === CHAT_MESSAGE_ROLE.ASSISTANT && group.message.status !== CHAT_MESSAGE_STATUS.STREAMING && group.message.status !== CHAT_MESSAGE_STATUS.AWAITING_USER;
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
				const toolCalls = group.kind === DISPLAY_GROUP_KIND.TOOL_RUN ? group.toolCalls : group.message.toolCalls ?? [];
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
		onMounted(() => {
			if (props.messages.length > 0) scrollToBottom();
		});
		watch(() => props.messages.length, (newLen, oldLen) => {
			if ((oldLen ?? 0) < newLen) {
				if (props.messages[newLen - 1]?.role === CHAT_MESSAGE_ROLE.USER) {
					scrollToBottom();
					return;
				}
			}
			autoScrollIfSticky();
		}, { flush: "post" });
		watch(() => props.messagingState, autoScrollIfSticky, { flush: "post" });
		watch([() => {
			const last = props.messages[props.messages.length - 1];
			if (!last) return "";
			const thinking = getMessageThinkingSegments(last).map((segment) => segment.content).join("");
			return `${last.content}|${last.toolCalls?.length ?? 0}|${getMessageInteractives(last).length}|${thinking}`;
		}, () => props.messages.at(-1)?.hostEvents], autoScrollIfSticky, { flush: "post" });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "scrollRef",
				ref: scrollRef,
				class: normalizeClass(_ctx.$style.messages),
				onScrollPassive: onScroll
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayGroups.value, (group) => {
				return openBlock(), createElementBlock(Fragment, { key: group.id }, [dividerLabels.value.has(group.id) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.timestampDivider),
					"data-testid": "agent-chat-timestamp-divider"
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(dividerLabels.value.get(group.id)), 1)]),
					_: 2
				}, 1024)], 2)) : createCommentVNode("", true), group.kind === unref(DISPLAY_GROUP_KIND).BACKGROUND_JOB_SIGNAL ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass([_ctx.$style.message, _ctx.$style.assistant])
				}, [createVNode(AgentChatBackgroundJobSignal_default, {
					class: normalizeClass(_ctx.$style.content),
					signal: group.signal
				}, null, 8, ["class", "signal"])], 2)) : group.kind === unref(DISPLAY_GROUP_KIND).TOOL_RUN ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass([_ctx.$style.message, _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createVNode(AgentChatHostEvents_default, { items: getGroupHostEventItems(group.id).start }, null, 8, ["items"]),
					getGroupToolCalls(group.id).steps.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 0,
						"tool-calls": getGroupToolCalls(group.id).steps,
						"project-id": __props.projectId,
						"can-fix-with-assistant": canSendToAssistant.value,
						"dismissed-tool-call-ids": __props.dismissedFixToolCallIds,
						"execution-id": group.executionId,
						onFixWithAssistant: ($event) => onFixWithAssistant(group, $event)
					}, null, 8, [
						"tool-calls",
						"project-id",
						"can-fix-with-assistant",
						"dismissed-tool-call-ids",
						"execution-id",
						"onFixWithAssistant"
					])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(getGroupToolCalls(group.id).hostResults, (result) => {
						return openBlock(), createElementBlock("div", {
							key: `result-${result.toolCall.toolCallId}`,
							class: normalizeClass(_ctx.$style.toolResult),
							"data-testid": "agent-chat-host-tool-result"
						}, [(openBlock(), createBlock(resolveDynamicComponent(result.renderer.component), { "tool-call": result.toolCall }, null, 8, ["tool-call"]))], 2);
					}), 128)),
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
					group.finalMessage && unref(isRetryableChatError)(group.finalMessage) ? (openBlock(), createBlock(AgentChatRetryError_default, {
						key: 2,
						message: group.finalMessage.content,
						"retry-message-id": group.finalMessage.id === retryErrorMessageId.value ? __props.retryMessageId : void 0,
						"retry-disabled": __props.retryDisabled,
						onRetry: _cache[0] || (_cache[0] = ($event) => emit("retry", $event))
					}, null, 8, [
						"message",
						"retry-message-id",
						"retry-disabled"
					])) : group.finalMessage?.content ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.chatMessageError]: group.finalMessage.status === "error" }])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.markdownContent) }, [createVNode(AgentMarkdownChunk_default, { source: group.finalMessage.content }, null, 8, ["source"])], 2)], 2)) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(group.budgetNotices, (notice) => {
						return openBlock(), createBlock(AgentBudgetNoticeCard_default, {
							key: notice.id,
							code: notice.code,
							"can-increase": canIncreaseForNotice(notice),
							pending: __props.budgetIncreasePending,
							onIncrease: _cache[1] || (_cache[1] = ($event) => emit("increase-budget", $event))
						}, null, 8, [
							"code",
							"can-increase",
							"pending"
						]);
					}), 128)),
					createVNode(AgentChatHostEvents_default, { items: getGroupHostEventItems(group.id).end }, null, 8, ["items"]),
					group.thinkingSegments.length ? (openBlock(), createBlock(AiThinkingBlock_default, {
						key: 4,
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
						key: 5,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"]), getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"can-send-to-assistant": canSendToAssistant.value,
						onSendToAssistant: _cache[2] || (_cache[2] = ($event) => emit("sendToAssistant"))
					}, createSlots({ _: 2 }, [group.finalMessage ? {
						name: "extra-actions",
						fn: withCtx(() => [renderSlot(_ctx.$slots, "message-actions", {
							message: group.finalMessage,
							executionId: group.executionId ?? group.finalMessage.executionId
						})]),
						key: "0"
					} : void 0]), 1032, ["content", "can-send-to-assistant"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					group.id === streamingGroupId.value && !group.finalMessage?.content && !group.toolCalls.length && !group.thinkingSegments.length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 6,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass([_ctx.$style.message, group.message.role === unref(CHAT_MESSAGE_ROLE).USER ? _ctx.$style.user : _ctx.$style.assistant])
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
					createVNode(AgentChatHostEvents_default, { items: getGroupHostEventItems(group.id).start }, null, 8, ["items"]),
					getGroupToolCalls(group.id).steps.length ? (openBlock(), createBlock(AgentChatToolSteps_default, {
						key: 0,
						"tool-calls": getGroupToolCalls(group.id).steps,
						"project-id": __props.projectId,
						"can-fix-with-assistant": canSendToAssistant.value,
						"dismissed-tool-call-ids": __props.dismissedFixToolCallIds,
						"execution-id": group.message.executionId,
						onFixWithAssistant: ($event) => onFixWithAssistant(group, $event)
					}, null, 8, [
						"tool-calls",
						"project-id",
						"can-fix-with-assistant",
						"dismissed-tool-call-ids",
						"execution-id",
						"onFixWithAssistant"
					])) : createCommentVNode("", true),
					(openBlock(true), createElementBlock(Fragment, null, renderList(getGroupToolCalls(group.id).hostResults, (result) => {
						return openBlock(), createElementBlock("div", {
							key: `result-${result.toolCall.toolCallId}`,
							class: normalizeClass(_ctx.$style.toolResult),
							"data-testid": "agent-chat-host-tool-result"
						}, [(openBlock(), createBlock(resolveDynamicComponent(result.renderer.component), { "tool-call": result.toolCall }, null, 8, ["tool-call"]))], 2);
					}), 128)),
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
					group.message.role === unref(CHAT_MESSAGE_ROLE).USER && group.message.author ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						size: "xsmall",
						color: "text-light",
						class: normalizeClass(_ctx.$style.author),
						"data-testid": "agent-chat-message-author"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(group.message.author.name), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true),
					group.message.role === unref(CHAT_MESSAGE_ROLE).USER && group.message.content ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass([_ctx.$style.chatMessage, _ctx.$style.chatMessageUser])
					}, toDisplayString(group.message.content), 3)) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [unref(isRetryableChatError)(group.message) ? (openBlock(), createBlock(AgentChatRetryError_default, {
						key: 0,
						message: group.message.content,
						"retry-message-id": group.message.id === retryErrorMessageId.value ? __props.retryMessageId : void 0,
						"retry-disabled": __props.retryDisabled,
						onRetry: _cache[3] || (_cache[3] = ($event) => emit("retry", $event))
					}, null, 8, [
						"message",
						"retry-message-id",
						"retry-disabled"
					])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(getMessageRenderItems(group.message), (item) => {
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
					}), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(group.message.budgetNotices ?? [], (notice) => {
						return openBlock(), createBlock(AgentBudgetNoticeCard_default, {
							key: notice.id,
							code: notice.code,
							"can-increase": canIncreaseForNotice(notice),
							pending: __props.budgetIncreasePending,
							onIncrease: _cache[4] || (_cache[4] = ($event) => emit("increase-budget", $event))
						}, null, 8, [
							"code",
							"can-increase",
							"pending"
						]);
					}), 128))], 64)),
					createVNode(AgentChatHostEvents_default, { items: getGroupHostEventItems(group.id).end }, null, 8, ["items"]),
					group.id === changeRequestGroupId.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 5,
						theme: "info",
						icon: "wand-sparkles",
						slim: "",
						class: normalizeClass(_ctx.$style.changeRequestNote),
						"data-testid": "agent-preview-change-request-note"
					}, {
						actions: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							icon: "x",
							variant: "ghost",
							size: "xsmall",
							class: normalizeClass(_ctx.$style.changeRequestDismiss),
							"aria-label": unref(i18n).baseText("generic.dismiss"),
							title: unref(i18n).baseText("generic.dismiss"),
							"data-testid": "agent-preview-change-request-dismiss",
							onClick: _cache[5] || (_cache[5] = ($event) => changeNoteDismissed.value = true)
						}, null, 8, [
							"class",
							"aria-label",
							"title"
						])]),
						trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
							size: "small",
							variant: "outline",
							class: normalizeClass(_ctx.$style.changeRequestAction),
							"data-testid": "agent-preview-change-request-link",
							onClick: ($event) => onEditWithAssistant(group.message.content)
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "sparkles",
								size: "small"
							})]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("agents.builder.preview.editRequest.action")), 1)]),
							_: 1
						}, 8, ["class", "onClick"])]),
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("agents.builder.preview.editRequest.note")) + " ", 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true),
					group.thinkingSegments.length ? (openBlock(), createBlock(AiThinkingBlock_default, {
						key: 6,
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
						key: 7,
						class: normalizeClass([_ctx.$style.messageFooter, { [_ctx.$style.messageFooterVisible]: openMemoryFooterGroupId.value === group.id }])
					}, [getAssistantRunContent(group.id) ? (openBlock(), createBlock(AgentChatMessageActions_default, {
						key: 0,
						content: getAssistantRunContent(group.id),
						"can-send-to-assistant": canSendToAssistant.value,
						onSendToAssistant: _cache[6] || (_cache[6] = ($event) => emit("sendToAssistant"))
					}, {
						"extra-actions": withCtx(() => [renderSlot(_ctx.$slots, "message-actions", {
							message: group.message,
							executionId: group.message.executionId
						})]),
						_: 2
					}, 1032, ["content", "can-send-to-assistant"])) : createCommentVNode("", true), createVNode(AgentChatMemoryUsed_default, {
						memories: getMemoriesUsedInAssistantRun(group.id),
						"onUpdate:open": ($event) => setMemoryFooterOpen(group.id, $event)
					}, null, 8, ["memories", "onUpdate:open"])], 2)) : createCommentVNode("", true),
					group.message.role === unref(CHAT_MESSAGE_ROLE).ASSISTANT && group.message.status === unref(CHAT_MESSAGE_STATUS).STREAMING && !group.message.content && !group.message.toolCalls?.length && !unref(getMessageThinkingSegments)(group.message).length ? (openBlock(), createBlock(AgentTypingIndicator_default, {
						key: 8,
						class: normalizeClass(_ctx.$style.typingIndicator)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)], 2))], 64);
			}), 128)), __props.messagingState === "waitingFirstChunk" ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.message)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(AgentTypingIndicator_default, { class: normalizeClass(_ctx.$style.typingIndicator) }, null, 8, ["class"])], 2)], 2)) : createCommentVNode("", true)], 34);
		};
	}
}), [["__cssModules", { "$style": {
	messages: "_messages_1k12z_1",
	message: "_message_1k12z_1",
	timestampDivider: "_timestampDivider_1k12z_24",
	content: "_content_1k12z_29",
	messageFooter: "_messageFooter_1k12z_35",
	assistant: "_assistant_1k12z_44",
	messageFooterVisible: "_messageFooterVisible_1k12z_48",
	user: "_user_1k12z_52",
	interactives: "_interactives_1k12z_62",
	toolResult: "_toolResult_1k12z_71",
	changeRequestNote: "_changeRequestNote_1k12z_80",
	changeRequestDismiss: "_changeRequestDismiss_1k12z_88",
	changeRequestAction: "_changeRequestAction_1k12z_94",
	chatMessage: "_chatMessage_1k12z_98",
	chatMessageUser: "_chatMessageUser_1k12z_107",
	author: "_author_1k12z_116",
	chatMessageError: "_chatMessageError_1k12z_120",
	markdownContent: "_markdownContent_1k12z_128",
	typingIndicator: "_typingIndicator_1k12z_140"
} }]]);
//#endregion
//#region src/features/agents/utils/agent-elapsed-time.ts
function formatAgentElapsedTime(milliseconds) {
	const seconds = Number.isFinite(milliseconds) ? Math.max(0, Math.floor(milliseconds / TIME.SECOND)) : 0;
	const minutes = Math.floor(seconds / 60);
	const remainder = String(seconds % 60).padStart(2, "0");
	return minutes < 60 ? `${minutes}:${remainder}` : `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}:${remainder}`;
}
//#endregion
//#region src/features/agents/components/AgentChatPlan.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1$1 = { role: "status" };
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = [
	"aria-label",
	"title",
	"data-status"
];
var _hoisted_4 = [
	"aria-label",
	"title",
	"data-status"
];
var AgentChatPlan_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentChatPlan",
	props: {
		plan: {},
		traceRoute: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const expanded = ref(false);
		watch(() => props.plan.planId, () => {
			expanded.value = false;
		});
		const now = ref(Date.now());
		const documentVisibility = useDocumentVisibility();
		const startTime = computed(() => Date.parse(props.plan.startedAt ?? ""));
		const { pause, resume } = useIntervalFn(() => {
			now.value = Date.now();
		}, TIME.SECOND, { immediate: false });
		watch(() => Number.isFinite(startTime.value) && !props.plan.closed && documentVisibility.value === "visible", (active) => {
			if (active) {
				now.value = Date.now();
				resume();
			} else pause();
		}, { immediate: true });
		const elapsed = computed(() => {
			const endTime = props.plan.closed ? Date.parse(props.plan.closedAt ?? "") : now.value;
			if (!Number.isFinite(startTime.value) || !Number.isFinite(endTime)) return null;
			return formatAgentElapsedTime(endTime - startTime.value);
		});
		const label = computed(() => props.plan.closed ? props.plan.document.presentation?.detail ?? props.plan.document.title : props.plan.document.presentation?.label ?? i18n.baseText("agents.chat.plan.title", { interpolate: { title: props.plan.document.title } }));
		const isRunning = computed(() => !props.plan.closed && props.plan.document.items.some((item) => item.status === "in_progress" || item.kind === "group" && item.tasks.some((task) => task.status === "in_progress")));
		const statusLabels = {
			pending: "agents.chat.plan.status.pending",
			in_progress: "agents.chat.plan.status.inProgress",
			done: "agents.chat.plan.status.done",
			failed: "agents.chat.plan.status.failed",
			cancelled: "agents.chat.plan.status.canceled"
		};
		const statusIcons = {
			pending: "circle",
			in_progress: "loader",
			done: "check",
			failed: "x",
			cancelled: "x"
		};
		const statusIconColors = {
			pending: "text-light",
			in_progress: "text-light",
			done: "success",
			failed: "danger",
			cancelled: "text-xlight"
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.plan),
				"data-testid": "agent-chat-plan"
			}, [createVNode(unref(VisuallyHidden_default), { "as-child": "" }, {
				default: withCtx(() => [createBaseVNode("span", _hoisted_1$1, toDisplayString(label.value), 1)]),
				_: 1
			}), (openBlock(), createBlock(ChatCollapsibleContainer_default, {
				key: __props.plan.planId,
				expanded: expanded.value,
				"onUpdate:expanded": _cache[0] || (_cache[0] = ($event) => expanded.value = $event),
				label: label.value,
				title: __props.plan.closed || __props.plan.document.presentation ? label.value : __props.plan.document.title
			}, createSlots({
				header: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: isRunning.value ? "loader-circle" : "list-checks",
					spin: isRunning.value,
					class: normalizeClass({ [_ctx.$style.running]: isRunning.value }),
					size: "medium",
					color: "text-light",
					"aria-hidden": "true",
					"data-testid": "agent-chat-plan-indicator"
				}, null, 8, [
					"icon",
					"spin",
					"class"
				]), createVNode(unref(N8nText_default), {
					bold: "",
					step: "xs",
					class: normalizeClass([_ctx.$style.label, { [_ctx.$style.inProgress]: isRunning.value }])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(label.value), 1)]),
					_: 1
				}, 8, ["class"])]),
				default: withCtx(() => [createVNode(unref(N8nScrollArea_default), {
					"as-child": "",
					type: "hover",
					"max-height": "20vh",
					class: normalizeClass(_ctx.$style.details),
					role: "region",
					"aria-label": __props.plan.document.title,
					tabindex: "0",
					"data-testid": "agent-chat-plan-details"
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [!__props.plan.closed && __props.plan.document.presentation?.detail ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.detail),
						title: __props.plan.document.presentation.detail
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.plan.document.presentation.detail), 1)]),
						_: 1
					}, 8, ["class", "title"])) : createCommentVNode("", true), createBaseVNode("ul", {
						class: normalizeClass(_ctx.$style.items),
						"aria-label": __props.plan.document.title,
						"data-testid": "agent-chat-plan-items"
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.plan.document.items, (item) => {
						return openBlock(), createElementBlock("li", {
							key: item.id,
							class: normalizeClass([_ctx.$style.parentItem, { [_ctx.$style.hasChildren]: item.kind === "group" && item.tasks.length > 0 }])
						}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.row, { [_ctx.$style.group]: item.kind === "group" }]) }, [createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.parentIcon),
							role: "img",
							"aria-label": unref(i18n).baseText(statusLabels[item.status]),
							title: unref(i18n).baseText(statusLabels[item.status]),
							"data-status": item.status
						}, [createVNode(unref(N8nIcon_default), {
							icon: statusIcons[item.status],
							spin: item.status === "in_progress",
							color: statusIconColors[item.status],
							size: "medium",
							"aria-hidden": "true"
						}, null, 8, [
							"icon",
							"spin",
							"color"
						])], 10, _hoisted_3), createVNode(unref(N8nText_default), {
							bold: "",
							step: "xs",
							color: item.status === "done" ? void 0 : "text-light",
							class: normalizeClass([_ctx.$style.itemTitle, { [_ctx.$style.inProgress]: item.status === "in_progress" }]),
							title: item.title
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.title), 1)]),
							_: 2
						}, 1032, [
							"color",
							"class",
							"title"
						])], 2), item.kind === "group" ? (openBlock(), createElementBlock("ul", {
							key: 0,
							class: normalizeClass(_ctx.$style.children)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.tasks, (task) => {
							return openBlock(), createElementBlock("li", {
								key: task.id,
								class: normalizeClass(_ctx.$style.row)
							}, [
								(openBlock(), createElementBlock("svg", {
									class: normalizeClass(_ctx.$style.treeBranch),
									viewBox: "0 0 16 8",
									preserveAspectRatio: "none",
									fill: "none",
									stroke: "currentColor",
									"aria-hidden": "true"
								}, [..._cache[1] || (_cache[1] = [createBaseVNode("path", { d: "M0 0Q0 4 4 4H16" }, null, -1)])], 2)),
								createBaseVNode("span", {
									role: "img",
									"aria-label": unref(i18n).baseText(statusLabels[task.status]),
									title: unref(i18n).baseText(statusLabels[task.status]),
									"data-status": task.status
								}, [createVNode(unref(N8nIcon_default), {
									icon: statusIcons[task.status],
									color: statusIconColors[task.status],
									spin: task.status === "in_progress",
									size: "medium",
									"aria-hidden": "true"
								}, null, 8, [
									"icon",
									"color",
									"spin"
								])], 8, _hoisted_4),
								createVNode(unref(N8nText_default), {
									bold: "",
									step: "xs",
									color: task.status === "done" ? void 0 : "text-light",
									class: normalizeClass([_ctx.$style.itemTitle, { [_ctx.$style.inProgress]: task.status === "in_progress" }]),
									title: task.title
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(task.title), 1)]),
									_: 2
								}, 1032, [
									"color",
									"class",
									"title"
								])
							], 2);
						}), 128))], 2)) : createCommentVNode("", true)], 2);
					}), 128))], 10, _hoisted_2)])]),
					_: 1
				}, 8, ["class", "aria-label"])]),
				_: 2
			}, [elapsed.value !== null ? {
				name: "header-trailing",
				fn: withCtx(() => [createVNode(unref(N8nText_default), {
					step: "xs",
					bold: "",
					color: "text-xlight",
					"aria-live": "off",
					class: normalizeClass(_ctx.$style.timer),
					"data-testid": "agent-chat-plan-timer"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(elapsed.value), 1)]),
					_: 1
				}, 8, ["class"])]),
				key: "0"
			} : void 0]), 1032, [
				"expanded",
				"label",
				"title"
			]))], 2);
		};
	}
}), [["__cssModules", { "$style": {
	label: "_label_aaswv_396",
	footer: "_footer_aaswv_402",
	timer: "_timer_aaswv_406",
	details: "_details_aaswv_411",
	items: "_items_aaswv_420",
	detail: "_detail_aaswv_411",
	itemTitle: "_itemTitle_aaswv_440",
	inProgress: "_inProgress_aaswv_447",
	shimmer: "_shimmer_aaswv_1",
	running: "_running_aaswv_464",
	parentItem: "_parentItem_aaswv_468",
	hasChildren: "_hasChildren_aaswv_483",
	parentIcon: "_parentIcon_aaswv_487",
	children: "_children_aaswv_497",
	row: "_row_aaswv_502",
	treeBranch: "_treeBranch_aaswv_506",
	group: "_group_aaswv_533",
	status: "_status_aaswv_537",
	fadeIn: "_fadeIn_aaswv_1",
	spin: "_spin_aaswv_1",
	"skeleton-pulse": "_skeleton-pulse_aaswv_1",
	opacityPulse: "_opacityPulse_aaswv_1",
	popoverIn: "_popoverIn_aaswv_1",
	collapsibleSlideDown: "_collapsibleSlideDown_aaswv_1",
	collapsibleSlideUp: "_collapsibleSlideUp_aaswv_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_aaswv_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_aaswv_1",
	blurSwapIn: "_blurSwapIn_aaswv_1",
	blurSwapOut: "_blurSwapOut_aaswv_1",
	pulseGlow: "_pulseGlow_aaswv_1",
	pulseGlowDelayed: "_pulseGlowDelayed_aaswv_1",
	fade: "_fade_aaswv_1",
	fadeInUp: "_fadeInUp_aaswv_1",
	fadeInDown: "_fadeInDown_aaswv_1",
	fadeInLeft: "_fadeInLeft_aaswv_1",
	fadeInRight: "_fadeInRight_aaswv_1",
	fadeOut: "_fadeOut_aaswv_1",
	fadeOutDown: "_fadeOutDown_aaswv_1",
	fadeOutUp: "_fadeOutUp_aaswv_1",
	fadeOutLeft: "_fadeOutLeft_aaswv_1",
	fadeOutRight: "_fadeOutRight_aaswv_1",
	ping: "_ping_aaswv_1",
	blinkBackground: "_blinkBackground_aaswv_1",
	typingBlink: "_typingBlink_aaswv_1"
} }]]);
//#endregion
//#region src/features/agents/utils/composer-attachments.ts
/**
* Merges the client context for one message. `base` (the client context from the
* panel prop) comes first, then the patches of the staged chips, in the order
* the host added them. Array values for the same key are joined, so that two
* chips that each add `{ attachments: [x] }` send both attachments. For other
* values, the last patch wins. Returns undefined when there is no base and no
* patch adds a key.
*/
function mergeClientContextPatches(attachments, base) {
	const merged = new Map(base ? Object.entries(base) : []);
	let hasContext = base !== void 0;
	for (const { clientContextPatch } of attachments) for (const [key, value] of Object.entries(clientContextPatch ?? {})) {
		const current = merged.get(key);
		merged.set(key, Array.isArray(current) && Array.isArray(value) ? [...current, ...value] : value);
		hasContext = true;
	}
	return hasContext ? Object.fromEntries(merged) : void 0;
}
//#endregion
//#region src/features/agents/composables/agentTelemetry.utils.ts
/**
* Internal helper used to compute a stable 16-char hex `config_version` join
* key. Not a privacy mechanism — agent payloads carry the raw config fields.
*/
async function sha256Hex16(input) {
	return (await sha256(input)).slice(0, 16);
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
	const configuredTriggers = /* @__PURE__ */ new Set([...(config?.integrations ?? []).filter((integration) => !isDraftIntegration(integration)).map((integration) => integration.type), ...additionalConfiguredTriggers]);
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
//#region src/features/agents/composables/useAgentBackgroundJobs.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
var MAX_RETRIES = 2;
function useAgentBackgroundJobs(target) {
	const rootStore = useRootStore();
	const pushStore = usePushConnectionStore();
	const visibility = useDocumentVisibility();
	const group = ref({ tasks: [] });
	const isStopping = ref(false);
	const jobs = computed(() => {
		const received = new Map(toValue(target.receivedJobs)?.map((job) => [job.id, job]));
		const current = group.value.tasks.map((job) => ({
			...job,
			status: received.get(job.id)?.status ?? job.status
		}));
		if (current.some((job) => job.status === "running" || job.status === "suspended")) return current;
		return group.value.pendingTaskIds?.some((id) => !received.has(id)) ? current : [];
	});
	const active = computed(() => toValue(target.active) && visibility.value === "visible");
	let generation = 0;
	let disposed = false;
	let inFlight;
	let queued = false;
	let scheduled = false;
	let retries = 0;
	let retryTimer;
	function clearRetry() {
		clearTimeout(retryTimer);
		retryTimer = void 0;
	}
	async function fetchJobs() {
		scheduled = false;
		const projectId = toValue(target.projectId);
		const agentId = toValue(target.agentId);
		const threadId = toValue(target.threadId);
		if (disposed || !active.value || !threadId) return;
		if (inFlight || isStopping.value) {
			queued = true;
			return;
		}
		const requestGeneration = generation;
		const request = { generation: requestGeneration };
		inFlight = request;
		const isCurrent = () => !disposed && active.value && generation === requestGeneration && projectId === toValue(target.projectId) && agentId === toValue(target.agentId) && threadId === toValue(target.threadId);
		try {
			const result = await getAgentBackgroundJobs(rootStore.restApiContext, projectId, agentId, threadId, toValue(target.channel));
			if (isCurrent()) {
				group.value = {
					...result,
					tasks: [...result.tasks].sort((a, b) => a.startedAt.localeCompare(b.startedAt) || a.id.localeCompare(b.id))
				};
				retries = 0;
			}
		} catch {
			if (isCurrent() && !queued && retries < MAX_RETRIES) retryTimer = setTimeout(() => {
				retryTimer = void 0;
				scheduleRefresh();
			}, TIME.SECOND * 2 ** retries++);
		} finally {
			if (inFlight === request) {
				inFlight = void 0;
				if (queued) {
					queued = false;
					scheduleRefresh();
				}
			}
		}
	}
	function scheduleRefresh() {
		if (disposed || !active.value || scheduled) return;
		clearRetry();
		scheduled = true;
		Promise.resolve().then(fetchJobs);
	}
	function refresh() {
		retries = 0;
		scheduleRefresh();
	}
	async function respondToApproval(payload) {
		const threadId = toValue(target.threadId);
		if (!threadId) return;
		const requestGeneration = generation;
		try {
			await resumeAgentBackgroundJob(rootStore.restApiContext, toValue(target.projectId), toValue(target.agentId), threadId, payload, toValue(target.channel));
			if (generation === requestGeneration) {
				for (const job of group.value.tasks) if (job.approval?.runId === payload.runId && job.approval.toolCallId === payload.toolCallId) delete job.approval;
			}
		} finally {
			refresh();
		}
	}
	async function stopAll() {
		const threadId = toValue(target.threadId);
		if (!threadId || !active.value || isStopping.value) return;
		const requestGeneration = ++generation;
		isStopping.value = true;
		clearRetry();
		try {
			const result = await stopAgentBackgroundJobs(rootStore.restApiContext, toValue(target.projectId), toValue(target.agentId), threadId, toValue(target.channel));
			if (!disposed && generation === requestGeneration) group.value = result;
		} catch (error) {
			if (!disposed && generation === requestGeneration) throw error;
		} finally {
			if (generation === requestGeneration) isStopping.value = false;
			refresh();
		}
	}
	const removeListener = pushStore.addEventListener((event) => {
		if (event.type === "agentBackgroundTasksUpdated" && event.data.projectId === toValue(target.projectId) && event.data.agentId === toValue(target.agentId) && event.data.threadId === toValue(target.threadId)) refresh();
	});
	watch([
		() => toValue(target.projectId),
		() => toValue(target.agentId),
		() => toValue(target.threadId)
	], () => {
		generation++;
		isStopping.value = false;
		inFlight = void 0;
		queued = false;
		group.value = { tasks: [] };
		clearRetry();
		refresh();
	}, { flush: "sync" });
	watch(active, (enabled) => {
		generation++;
		isStopping.value = false;
		inFlight = void 0;
		queued = false;
		clearRetry();
		if (enabled) refresh();
	}, { immediate: true });
	watch(() => pushStore.isConnected, (connected) => {
		if (connected) refresh();
	});
	onScopeDispose(() => {
		disposed = true;
		clearRetry();
		removeListener();
	});
	return {
		jobs,
		respondToApproval,
		stopAll,
		isStopping
	};
}
//#endregion
//#region src/app/composables/useApprovalCardLabels.ts
init_runtime_core_esm_bundler();
function useApprovalCardLabels() {
	const i18n = useI18n();
	return computed(() => ({
		alwaysAllow: i18n.baseText("instanceAi.confirmation.alwaysAllow"),
		alwaysAllowSuffix: i18n.baseText("instanceAi.confirmation.alwaysAllowSuffix"),
		allowOnce: i18n.baseText("instanceAi.confirmation.approve"),
		deny: i18n.baseText("instanceAi.confirmation.deny"),
		allowed: i18n.baseText("instanceAi.confirmation.approved"),
		denied: i18n.baseText("instanceAi.confirmation.denied"),
		args: i18n.baseText("instanceAi.toolCall.input")
	}));
}
//#endregion
//#region src/features/agents/components/interactive/ApprovalCard.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/agents/components/interactive/ApprovalCard.vue
var ApprovalCard_default = /* @__PURE__ */ defineComponent({
	__name: "ApprovalCard",
	props: {
		input: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const approvalLabels = useApprovalCardLabels();
		const toolLabel = computed(() => props.input.displayName ?? props.input.toolName);
		function submit(key) {
			if (props.disabled) return;
			if (key === "always-allow") {
				emit("submit", {
					approved: true,
					scope: "session"
				});
				return;
			}
			if (key === "allow-once" || key === "deny") emit("submit", { approved: key === "allow-once" });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ApprovalCard_default$1), {
				title: unref(i18n).baseText("agents.chat.approval.title"),
				labels: unref(approvalLabels),
				description: unref(i18n).baseText("agents.chat.approval.description", { interpolate: { toolName: toolLabel.value } }),
				args: __props.input.args,
				"supports-session-approval": __props.input.supportsSessionApproval,
				disabled: __props.disabled,
				"data-testid": "agent-approval-card",
				onSelect: submit
			}, null, 8, [
				"title",
				"labels",
				"description",
				"args",
				"supports-session-approval",
				"disabled"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentChatPanel.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1 = [
	"aria-label",
	"title",
	"data-status"
];
var AgentChatPanel_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
		newSession: {
			type: Boolean,
			default: false
		},
		agentConfig: {},
		attachmentCapabilities: {},
		agentStatus: {},
		connectedTriggers: {},
		canSendToAssistant: {
			type: Boolean,
			default: false
		},
		dismissedFixToolCallIds: { default: () => [] },
		beforeSend: {
			type: Function,
			default: void 0
		},
		inputDraft: { default: void 0 },
		backgroundJobsActive: {
			type: Boolean,
			default: false
		},
		channel: { default: "chat" },
		centerEmptyState: {
			type: Boolean,
			default: false
		},
		budgetCards: {
			type: Boolean,
			default: false
		},
		increaseBudget: {
			type: Function,
			default: void 0
		},
		clientContext: {
			type: Function,
			default: void 0
		},
		placeholder: { default: void 0 },
		showAttachButton: {
			type: Boolean,
			default: true
		},
		interactionExtensions: { default: () => [] }
	},
	emits: [
		"update:streaming",
		"update:inputDraft",
		"continue-loaded",
		"usage-updated",
		"session-created",
		"initial-consumed",
		"back",
		"open-build",
		"send-to-assistant",
		"first-user-message",
		"agent-unavailable",
		"message-accepted"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const { isMacOs } = useDeviceSupport();
		const rootStore = useRootStore();
		const agentTelemetry = useAgentTelemetry();
		const toast = useToast();
		const { capabilities, messages, queuedMessages, removingQueueIds, steeringQueueIds, canSteer, steerQueuedMessage, removeQueuedMessage, reorderQueuedMessage, isReorderingQueue, isSubmitting, isLoadingHistory, isStreaming, refresh, isCancelling, messagingState, fatalError, warnings, loadHistory, sendMessage, stopGenerating, detachStream, resume, cancelAndSteer, dismissFatalError, dismissWarning, clearBudgetNotices } = useAgentChatStream({
			projectId: toRef(props, "projectId"),
			agentId: toRef(props, "agentId"),
			continueSessionId: toRef(props, "continueSessionId"),
			newSession: toRef(props, "newSession"),
			channel: toRef(props, "channel"),
			onHistoryLoaded: (count) => {
				if (props.continueSessionId) emit("continue-loaded", {
					sessionId: props.continueSessionId,
					count
				});
			},
			onSessionCreated: (sessionId) => emit("session-created", sessionId),
			onUsageUpdated: (update) => emit("usage-updated", update),
			onAgentUnavailable: () => emit("agent-unavailable"),
			budgetCards: props.budgetCards,
			interactionExtensions: props.interactionExtensions
		});
		provide(AGENTS_CHAT_INTERACTION_EXTENSIONS, computed(() => props.interactionExtensions));
		const currentPlan = computed(() => selectLatestAgentPlan(messages.value));
		const editingQueueId = ref();
		provide(AGENT_ATTACHMENT_URL_KEY, (attachmentId) => getChatAttachmentUrl(rootStore.restApiContext, props.projectId, props.agentId, attachmentId, props.channel));
		const firstMessagePreview = ref();
		const previewQueueId = ref();
		const isPreviewingFirstMessage = computed(() => !!firstMessagePreview.value && messages.value.length === 0);
		const queueRows = computed(() => isPreviewingFirstMessage.value ? queuedMessages.value.filter((item) => item.id !== previewQueueId.value) : queuedMessages.value);
		const queueExpanded = ref(false);
		const queueOrder = shallowRef();
		const displayedQueueRows = computed(() => queueOrder.value ?? queueRows.value);
		const queueDisplayItems = computed(() => displayedQueueRows.value.map((item) => ({
			id: item.id,
			message: item.message,
			attachmentNames: item.attachments?.map((attachment) => attachment.fileName),
			notice: item.steeringExecutionId ? locale.baseText("agents.chat.queue.steering") : void 0
		})));
		const queueSteerAction = computed(() => ({
			label: locale.baseText("agents.chat.queue.steer"),
			tooltip: locale.baseText("agents.chat.queue.steerTooltip"),
			icon: "corner-down-right"
		}));
		function isDisplayedQueueItemBusy(item) {
			const queuedItem = displayedQueueRows.value.find((entry) => entry.id === item.id);
			return !queuedItem || isQueueItemBusy(queuedItem);
		}
		function editQueuedMessage(id) {
			const item = queuedMessages.value.find((entry) => entry.id === id);
			if (item) startQueueEdit(item);
		}
		async function loadChatAttachmentFile(attachment) {
			if (attachment.file) return attachment.file;
			if (!attachment.fileId) throw new Error("Attachment is unavailable");
			const url = getChatAttachmentUrl(rootStore.restApiContext, props.projectId, props.agentId, attachment.fileId, props.channel);
			const response = await fetch(url, { credentials: "include" });
			if (!response.ok) throw new Error(`Attachment download failed: ${response.status}`);
			return new File([await response.blob()], attachment.fileName, { type: attachment.mimeType });
		}
		async function startQueueEdit(item) {
			if (hasDraft.value || isQueueItemBusy(item) || isSubmissionBlocked.value) return;
			queueExpanded.value = true;
			const target = {
				projectId: props.projectId,
				agentId: props.agentId,
				continueSessionId: props.continueSessionId
			};
			function isCurrentTarget() {
				return !disposed && props.projectId === target.projectId && props.agentId === target.agentId && props.continueSessionId === target.continueSessionId;
			}
			editingQueueId.value = item.id;
			try {
				/** Load attachments before removal so a failed download leaves the message queued. */
				const files = await Promise.all((item.attachments ?? []).map((attachment) => loadChatAttachmentFile({
					...attachment,
					fileId: attachment.id
				})));
				if (!isCurrentTarget() || hasDraft.value) return;
				if (await removeQueuedMessage(item.id) !== "removed" || !isCurrentTarget()) return;
				inputText.value = item.message;
				attachedFiles.value = files;
				editingQueueId.value = void 0;
				await nextTick();
				if (isCurrentTarget()) focusInput();
			} catch (error) {
				if (isCurrentTarget()) toast.showError(error, locale.baseText("agents.chat.queue.removeError"));
			} finally {
				if (isCurrentTarget()) editingQueueId.value = void 0;
			}
		}
		/** Allows Option/Alt + Up to edit the last sent queued message */
		function onChatInputKeydown(event) {
			if (!(event.target instanceof HTMLTextAreaElement) || event.key !== "ArrowUp" || !event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.isComposing || event.repeat || hasDraft.value || isSubmissionBlocked.value) return;
			const item = queuedMessages.value.at(-1);
			if (!item || isQueueItemBusy(item)) return;
			event.preventDefault();
			event.stopPropagation();
			startQueueEdit(item);
		}
		function isQueueItemBusy(item) {
			return !!editingQueueId.value || isReorderingQueue.value || !!item.steeringExecutionId || steeringQueueIds.value.has(item.id) || removingQueueIds.value.has(item.id);
		}
		function canMoveQueueItem(items, from, to) {
			if (editingQueueId.value || from === to || !items[from] || !items[to]) return false;
			if (isPreviewingFirstMessage.value && previewQueueId.value) return false;
			return !items.slice(Math.min(from, to), Math.max(from, to) + 1).some(isQueueItemBusy);
		}
		function canDragQueueItem(index) {
			const items = displayedQueueRows.value;
			return canMoveQueueItem(items, index, index - 1) || canMoveQueueItem(items, index, index + 1);
		}
		function startQueueDrag() {
			queueOrder.value = [...queueRows.value];
			queueExpanded.value = true;
		}
		function canDropQueueItem(event) {
			const { index, futureIndex } = event.draggedContext;
			return canMoveQueueItem(displayedQueueRows.value, index, futureIndex);
		}
		function endQueueDrag(event) {
			const items = queueOrder.value;
			queueOrder.value = void 0;
			if (items && event.oldIndex !== void 0 && event.newIndex !== void 0) moveQueueItem(items, event.oldIndex, event.newIndex);
		}
		async function moveQueueItem(items, from, to) {
			if (!canMoveQueueItem(items, from, to)) return;
			const item = items[from];
			const reordered = [...items];
			reordered.splice(from, 1);
			reordered.splice(to, 0, item);
			queueOrder.value = reordered;
			queueExpanded.value = true;
			await reorderQueuedMessage(item.id, items[to].id, items.filter((entry) => !entry.steeringExecutionId).map((entry) => entry.id));
			if (queueOrder.value !== reordered) return;
			queueOrder.value = void 0;
		}
		const { jobs: backgroundJobs, respondToApproval, stopAll, isStopping } = useAgentBackgroundJobs({
			projectId: () => props.projectId,
			agentId: () => props.agentId,
			threadId: () => props.continueSessionId,
			active: () => props.backgroundJobsActive,
			channel: () => props.channel,
			receivedJobs: () => messages.value.flatMap((message) => message.backgroundJobSignal?.tasks ?? [])
		});
		const canStopBackgroundJobs = computed(() => backgroundJobs.value.some((job) => job.status === "running" || job.status === "suspended"));
		const backgroundStoppingIds = computed(() => new Set(backgroundJobs.value.filter((job) => (job.status === "running" || job.status === "suspended") && (isStopping.value || job.pauseRequested)).map((job) => job.id)));
		async function stopBackgroundJobs(event) {
			const button = event.currentTarget;
			const restoreFocus = button === document.activeElement;
			const threadId = props.continueSessionId;
			try {
				await stopAll();
			} catch (error) {
				toast.showError(error, locale.baseText("agents.chat.backgroundTasks.stopError"));
			}
			await nextTick();
			if (!restoreFocus || disposed || !props.visible || props.continueSessionId !== threadId || hasPendingApprovals.value || document.activeElement !== document.body) return;
			if (button instanceof HTMLElement && button.isConnected) button.focus({ preventScroll: true });
			else focusInput({ preventScroll: true });
		}
		const backgroundRunningCount = computed(() => backgroundJobs.value.filter((job) => job.status === "running").length);
		const backgroundInProgress = computed(() => backgroundRunningCount.value > 0 || backgroundStoppingIds.value.size > 0);
		const backgroundTitle = computed(() => {
			const stoppingCount = backgroundStoppingIds.value.size;
			if (stoppingCount > 0) return locale.baseText("agents.chat.backgroundTasks.stoppingCount", {
				adjustToNumber: stoppingCount,
				interpolate: { count: stoppingCount }
			});
			if (backgroundJobs.value.some((job) => job.status === "suspended")) return locale.baseText("agents.chat.backgroundTasks.status.suspended");
			const count = backgroundRunningCount.value;
			if (count === 0) return locale.baseText("agents.chat.backgroundTasks.finished", { adjustToNumber: backgroundJobs.value.length });
			return locale.baseText("agents.chat.backgroundTasks.runningCount", {
				adjustToNumber: count,
				interpolate: { count }
			});
		});
		const backgroundTraceRoute = computed(() => ({
			name: AGENT_SESSION_DETAIL_VIEW,
			params: {
				projectId: props.projectId,
				agentId: props.agentId,
				threadId: props.continueSessionId
			}
		}));
		const backgroundJobStatuses = computed(() => ({
			stopping: {
				icon: "loader-circle",
				label: locale.baseText("agents.chat.backgroundTasks.status.stopping")
			},
			paused: {
				icon: "circle-pause",
				label: locale.baseText("agents.chat.backgroundTasks.status.paused")
			},
			running: {
				icon: "loader-circle",
				label: locale.baseText("agents.chat.backgroundTasks.status.running")
			},
			completed: {
				icon: "circle-check",
				label: locale.baseText("agents.chat.backgroundTasks.status.completed")
			},
			failed: {
				icon: "circle-x",
				label: locale.baseText("agents.chat.backgroundTasks.status.failed")
			},
			cancelled: {
				icon: "circle-x",
				label: locale.baseText("agents.chat.backgroundTasks.status.cancelled")
			},
			waiting: {
				icon: "circle",
				label: locale.baseText("agents.chat.backgroundTasks.status.waiting")
			},
			suspended: {
				icon: "circle-pause",
				label: locale.baseText("agents.chat.backgroundTasks.status.suspended")
			}
		}));
		const backgroundApproval = computed(() => {
			if (!props.backgroundJobsActive) return void 0;
			for (const job of backgroundJobs.value) {
				if (job.status !== "suspended" || !job.approval) continue;
				const input = parseApprovalInput(job.approval.suspendPayload);
				if (input) return {
					id: job.id,
					title: job.title,
					approval: job.approval,
					input
				};
			}
		});
		const pendingApproval = computed(() => {
			const tail = messages.value.at(-1);
			if (!tail) return void 0;
			for (const payload of getMessageInteractives(tail)) {
				if (payload.toolName !== "approval" || payload.resolvedAt !== void 0 || !payload.runId) continue;
				return {
					runId: payload.runId,
					toolCallId: payload.toolCallId,
					input: payload.input
				};
			}
		});
		const hasPendingApprovals = computed(() => pendingApproval.value !== void 0 || backgroundApproval.value !== void 0);
		const pendingBackgroundResponses = ref(/* @__PURE__ */ new Set());
		async function respondToBackgroundApproval(approval, resumeData) {
			if (pendingBackgroundResponses.value.has(approval.toolCallId)) return;
			pendingBackgroundResponses.value.add(approval.toolCallId);
			const target = {
				projectId: props.projectId,
				agentId: props.agentId,
				continueSessionId: props.continueSessionId
			};
			try {
				await respondToApproval({
					runId: approval.runId,
					toolCallId: approval.toolCallId,
					resumeData
				});
			} catch (error) {
				if (disposed || !props.visible || props.projectId !== target.projectId || props.agentId !== target.agentId || props.continueSessionId !== target.continueSessionId) return;
				toast.showError(error, locale.baseText("agents.chat.backgroundTasks.approvalError"));
			} finally {
				pendingBackgroundResponses.value.delete(approval.toolCallId);
			}
		}
		const backgroundJobRows = computed(() => backgroundJobs.value.map((job) => {
			const stopping = backgroundStoppingIds.value.has(job.id);
			const stopped = job.status === "paused" || job.kind === "workflow" && job.status === "cancelled" && job.pauseRequested;
			let indicator = backgroundJobStatuses.value[job.status];
			if (stopping) indicator = backgroundJobStatuses.value.stopping;
			else if (stopped) indicator = backgroundJobStatuses.value.paused;
			else if (job.kind === "workflow" && job.status === "running") indicator = backgroundJobStatuses.value.waiting;
			return {
				...job,
				stopping,
				stopped,
				label: locale.baseText(job.kind === "workflow" ? "agents.chat.backgroundTasks.workflow" : "agents.chat.backgroundTasks.subagent", { interpolate: { title: job.title } }),
				indicator
			};
		}));
		const now = ref(Date.now());
		const documentVisibility = useDocumentVisibility();
		const { pause: pauseTimer, resume: resumeTimer } = useIntervalFn(() => {
			now.value = Date.now();
		}, TIME.SECOND, { immediate: false });
		watch(() => props.backgroundJobsActive && backgroundInProgress.value && documentVisibility.value === "visible", (active) => {
			if (active) {
				now.value = Date.now();
				resumeTimer();
			} else pauseTimer();
		}, { immediate: true });
		const backgroundElapsed = computed(() => {
			const startedAt = backgroundJobs.value[0]?.startedAt;
			const start = startedAt ? Date.parse(startedAt) : now.value;
			return formatAgentElapsedTime((backgroundInProgress.value ? now.value : Math.max(...backgroundJobs.value.map((job) => Date.parse(job.settledAt ?? "") || now.value))) - start);
		});
		const attachedFiles = ref([]);
		const composerAttachments = ref([]);
		const composerChips = computed(() => composerAttachments.value.map(({ chip }) => chip));
		const chatInput = useTemplateRef("chatInput");
		const backgroundJobCard = useTemplateRef("backgroundJobCard");
		const backgroundJobStopButton = useTemplateRef("backgroundJobStopButton");
		const approvalCards = useTemplateRef("approvalCards");
		const showBackgroundJobs = computed(() => props.backgroundJobsActive && backgroundJobs.value.length > 0);
		function focusInput(options) {
			chatInput.value?.focus(options);
		}
		watch([
			showBackgroundJobs,
			canStopBackgroundJobs,
			hasPendingApprovals,
			() => props.projectId,
			() => props.agentId,
			() => props.continueSessionId,
			() => props.visible
		], async ([shown, stopShown, approvalsShown, ...target], [wasShown, stopWasShown, approvalsWereShown, ...previousTarget], onCleanup) => {
			if (!(!shown && wasShown && backgroundJobCard.value?.contains(document.activeElement) || !stopShown && stopWasShown && backgroundJobStopButton.value?.$el === document.activeElement || !approvalsShown && approvalsWereShown && approvalCards.value?.contains(document.activeElement)) || !props.visible || target.some((value, index) => value !== previousTarget[index])) return;
			let cancelled = false;
			onCleanup(() => {
				cancelled = true;
			});
			await nextTick();
			if (cancelled || disposed || !props.visible || hasPendingApprovals.value || document.activeElement !== document.body) return;
			focusInput({ preventScroll: true });
		});
		const attachmentCapabilities = computed(() => {
			if (props.attachmentCapabilities) return props.attachmentCapabilities;
			const provider = props.agentConfig?.model?.split("/")[0];
			return provider ? getProviderAttachmentCapabilities(provider) : void 0;
		});
		const showAttach = computed(() => {
			const capabilities = attachmentCapabilities.value;
			return !!capabilities && (capabilities.image || capabilities.pdf || capabilities.audio);
		});
		const acceptedMimeTypes = computed(() => {
			const capabilities = attachmentCapabilities.value;
			return capabilities ? acceptedMimeTypesFromCapabilities(capabilities) : void 0;
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
				if (!showAttach.value || !isFileAcceptedByAccept(file.name, resolveFileMimeType(file.name, file.type), acceptedMimeTypes.value ?? "")) {
					toast.showMessage({
						type: "error",
						title: locale.baseText("agents.chat.attachments.unsupportedType", { interpolate: { fileName: file.name } })
					});
					continue;
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
		const hasDraft = computed(() => inputText.value.trim().length > 0 || attachedFiles.value.length > 0);
		const isPreparingToSend = ref(false);
		let disposed = false;
		let queuedExternalMessage;
		let submittingQueuedExternalMessage = false;
		let handoffPreview;
		let externalAttachedFiles = [];
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
		/**
		* Only the last turn can hold the input. A parked run is always the tail of the
		* transcript, so anything after it — a resumed answer, a later turn — means that
		* suspension is history. Reading the tail rather than the first open card
		* anywhere keeps one abandoned card from wedging the chat for good, and keeps it
		* from hiding a real question on the current turn.
		*/
		const openInteractive = computed(() => findTailOpenInteractive(messages.value));
		const hasOpenInteraction = computed(() => openInteractive.value !== void 0);
		const hasOpenApproval = computed(() => openInteractive.value?.toolName === APPROVAL_TOOL_NAME);
		const hasOpenWaitCard = computed(() => openInteractive.value?.toolName === WAIT_TOOL_NAME);
		const hasOpenInteractiveQuestion = computed(() => hasOpenInteraction.value && !hasOpenApproval.value && !hasOpenWaitCard.value);
		/**
		* The resume for the open card when its extension answers it with the composer
		* text, or `undefined` to keep cancel-and-steer. Only extension cards can do
		* this, so the built-in cards keep their composer behavior.
		*/
		function getExtensionComposerResume(text) {
			const payload = openInteractive.value;
			if (payload?.toolName !== "interaction_extension" || !payload.runId) return void 0;
			const resumeData = props.interactionExtensions.find(({ key }) => key === payload.extensionKey)?.composerResumeData?.(payload.input, text);
			if (resumeData === void 0) return void 0;
			return {
				runId: payload.runId,
				toolCallId: payload.toolCallId,
				resumeData
			};
		}
		const hasOpenSuspension = computed(() => messages.value[messages.value.length - 1]?.toolCalls?.some((toolCall) => toolCall.state === TOOL_CALL_STATE.SUSPENDED && toolCall.runId) ?? false);
		const hasBudgetStop = computed(() => messages.value.some((message) => message.budgetNotices?.some((notice) => isBudgetStopCode(notice.code))));
		const canIncreaseBudget = computed(() => props.increaseBudget !== void 0);
		const budgetIncreasePending = ref(false);
		const isRetrying = ref(false);
		const isSubmissionBlocked = computed(() => isRetrying.value || !!editingQueueId.value || isPreparingToSend.value || isSubmitting.value || isLoadingHistory.value || hasBudgetStop.value);
		const retryMessageId = computed(() => {
			if (!isRetryableChatError(messages.value.at(-1))) return void 0;
			return messages.value.findLast((message) => message.role === CHAT_MESSAGE_ROLE.USER)?.id;
		});
		const retryDisabled = computed(() => isSubmissionBlocked.value || hasDraft.value || showStop.value || queuedMessages.value.length > 0);
		async function retryMessage(messageId) {
			if (retryDisabled.value || retryMessageId.value !== messageId) return;
			const message = messages.value.find((entry) => entry.id === messageId);
			if (!message) return;
			const target = {
				projectId: props.projectId,
				agentId: props.agentId,
				continueSessionId: props.continueSessionId
			};
			const isCurrentTarget = () => !disposed && target.projectId === props.projectId && target.agentId === props.agentId && target.continueSessionId === props.continueSessionId;
			isRetrying.value = true;
			try {
				const files = await Promise.all((message.attachments ?? []).map(loadChatAttachmentFile));
				if (!isCurrentTarget() || hasDraft.value || retryMessageId.value !== messageId) return;
				isRetrying.value = false;
				if (retryDisabled.value) return;
				inputText.value = message.content;
				attachedFiles.value = files;
				await submitDraft(message.content.trim(), files);
			} catch (error) {
				if (isCurrentTarget()) toast.showError(error, locale.baseText("agents.chat.retry.error"));
			} finally {
				isRetrying.value = false;
			}
		}
		const hasInFlightToolCalls = computed(() => messages.value.some((message) => message.toolCalls?.some((toolCall) => toolCall.state === TOOL_CALL_STATE.PENDING || toolCall.state === TOOL_CALL_STATE.RUNNING)));
		const showStop = computed(() => !hasDraft.value && !isLoadingHistory.value && (isStreaming.value || isCancelling.value || hasOpenInteraction.value || hasOpenSuspension.value || hasInFlightToolCalls.value));
		const chatPlaceholder = computed(() => {
			if (hasOpenInteractiveQuestion.value) return locale.baseText("agents.chat.answerQuestionPlaceholder");
			if (queuedMessages.value.length > 0) return locale.baseText(isMacOs ? "agents.chat.input.placeholder.withQueue.mac" : "agents.chat.input.placeholder.withQueue.other");
			if (props.placeholder) return props.placeholder;
			const agentName = props.agentConfig?.name?.trim();
			return agentName ? locale.baseText("agents.chat.input.placeholder.withAgent", { interpolate: { agentName } }) : locale.baseText("agents.chat.input.placeholder");
		});
		/**
		* Installs the first-message bubble and returns it. Returns undefined when a bubble
		* already shows: a second send before the first run starts must not replace it.
		*/
		function previewFirstMessage(text, files = []) {
			if (!props.centerEmptyState || messages.value.length > 0 || firstMessagePreview.value) return;
			firstMessagePreview.value = {
				id: "first-message-preview",
				role: "user",
				content: text,
				status: "success",
				createdAt: Date.now(),
				attachments: files.map((file) => ({
					fileName: file.name,
					mimeType: resolveFileMimeType(file.name, file.type) || "application/octet-stream",
					sizeBytes: file.size,
					file
				}))
			};
			previewQueueId.value = void 0;
			return firstMessagePreview.value;
		}
		watch([() => messages.value.length, fatalError], ([count, error]) => {
			if (count > 0 || error) firstMessagePreview.value = void 0;
		});
		const displayedMessages = computed(() => isPreviewingFirstMessage.value && firstMessagePreview.value ? [firstMessagePreview.value] : messages.value);
		const displayedMessagingState = computed(() => isPreviewingFirstMessage.value ? "waitingFirstChunk" : messagingState.value);
		const isCenteredEmpty = computed(() => props.centerEmptyState && props.newSession && displayedMessages.value.length === 0 && !isStreaming.value);
		watch(isStreaming, (v) => emit("update:streaming", v));
		watch(() => messages.value.find((message) => message.role === CHAT_MESSAGE_ROLE.USER)?.content, (text) => emit("first-user-message", text), { immediate: true });
		watch(isSubmissionBlocked, (blocked) => {
			if (!blocked) submitQueuedExternalMessage();
		});
		watch(() => props.visible, (visible) => {
			if (visible) refresh();
		});
		watch(() => [
			props.projectId,
			props.agentId,
			props.continueSessionId
		], () => {
			queuedExternalMessage = void 0;
			handoffPreview = void 0;
			editingQueueId.value = void 0;
			queueExpanded.value = false;
			queueOrder.value = void 0;
			firstMessagePreview.value = void 0;
			if (externalAttachedFiles.length) {
				attachedFiles.value = attachedFiles.value.filter((file) => !externalAttachedFiles.includes(file));
				externalAttachedFiles = [];
			}
		});
		function consumeQueuedExternalMessage(message) {
			if (queuedExternalMessage !== message) return;
			queuedExternalMessage = void 0;
			emit("initial-consumed");
		}
		/**
		* Call this when a message is accepted, on both the normal send path and the
		* cancel-and-steer path (answering an open question card). It is the single
		* place that needs to track a send on the n8n Chat channel.
		*/
		function trackSentToN8nChat(hadNoMessagesBeforeSend) {
			if (props.channel !== "n8n-chat" || !props.continueSessionId) return;
			agentTelemetry.trackSentMessageToN8nChatAgent({
				agentId: props.agentId,
				threadId: props.continueSessionId,
				isNewThread: hadNoMessagesBeforeSend
			});
		}
		async function onSubmit() {
			return await submitDraft(inputText.value.trim(), [...attachedFiles.value]);
		}
		async function submitDraft(text, files) {
			if (!text && files.length === 0) return "rejected";
			if (isSubmissionBlocked.value) return "busy";
			const ownedHandoffPreview = submittingQueuedExternalMessage ? handoffPreview : void 0;
			if (ownedHandoffPreview) handoffPreview = void 0;
			const hadNoMessagesBeforeSend = messages.value.length === 0;
			const target = {
				projectId: props.projectId,
				agentId: props.agentId,
				continueSessionId: props.continueSessionId
			};
			const isCurrentTarget = () => !disposed && props.projectId === target.projectId && props.agentId === target.agentId && props.continueSessionId === target.continueSessionId;
			const composerResume = text ? getExtensionComposerResume(text) : void 0;
			if (composerResume) return await resume(composerResume, () => {
				if (!isCurrentTarget()) return;
				if (inputText.value.trim() === text) inputText.value = "";
				consumeQueuedExternalMessage(text);
				trackSentToN8nChat(hadNoMessagesBeforeSend);
			}) === "busy" ? "busy" : "sent";
			if (hasOpenInteractiveQuestion.value) {
				if (!text) return "rejected";
				return await cancelAndSteer(text, () => {
					if (!isCurrentTarget()) return;
					if (inputText.value.trim() === text) inputText.value = "";
					consumeQueuedExternalMessage(text);
					trackSentToN8nChat(hadNoMessagesBeforeSend);
				}) === "busy" ? "busy" : "sent";
			}
			isPreparingToSend.value = true;
			try {
				try {
					await props.beforeSend?.();
				} catch {
					return "rejected";
				}
				if (!isCurrentTarget()) return "rejected";
				const fingerprint = props.channel === "chat" ? await buildAgentConfigFingerprint(props.agentConfig, props.connectedTriggers) : void 0;
				if (!isCurrentTarget()) return "rejected";
				const installedPreview = previewFirstMessage(text, files) ?? ownedHandoffPreview;
				let accepted = false;
				const sentAttachments = [...composerAttachments.value];
				const clientContext = mergeClientContextPatches(sentAttachments, props.clientContext?.());
				const sentFiles = files.length > 0 ? files : void 0;
				const onAccepted = (queueId) => {
					accepted = true;
					if (!isCurrentTarget()) return;
					emit("message-accepted", {
						text,
						files,
						clientContext
					});
					if (installedPreview && firstMessagePreview.value === installedPreview) previewQueueId.value = queueId;
					if (fingerprint) agentTelemetry.trackSubmittedMessage({
						agentId: props.agentId,
						status: props.agentStatus,
						agentConfig: fingerprint
					});
					if (inputText.value.trim() === text) inputText.value = "";
					attachedFiles.value = attachedFiles.value.filter((file) => !files.includes(file));
					composerAttachments.value = composerAttachments.value.filter((attachment) => !sentAttachments.includes(attachment));
					externalAttachedFiles = [];
					queueExpanded.value = false;
					consumeQueuedExternalMessage(text);
					trackSentToN8nChat(hadNoMessagesBeforeSend);
				};
				const sending = sendMessage(text, sentFiles, onAccepted, clientContext);
				isPreparingToSend.value = false;
				const result = await sending;
				if (!accepted && firstMessagePreview.value === installedPreview) firstMessagePreview.value = void 0;
				if (result === "busy") return "busy";
				return "sent";
			} finally {
				isPreparingToSend.value = false;
			}
		}
		/**
		* Drops the stop notices a persisted cap change resolves. Call only after the
		* new cap is saved: a failed or skipped save must keep the stop card up and
		* Send blocked, because the next run would stop against the old cap again.
		*/
		function clearBudgetStops(fields) {
			clearBudgetNotices(new Set(fields.flatMap(budgetNoticeCodesForField)));
		}
		async function onIncreaseBudget(payload) {
			if (!props.increaseBudget || budgetIncreasePending.value) return;
			const target = {
				projectId: props.projectId,
				agentId: props.agentId,
				continueSessionId: props.continueSessionId
			};
			budgetIncreasePending.value = true;
			try {
				const saved = await props.increaseBudget(payload);
				const stillCurrent = !disposed && props.projectId === target.projectId && props.agentId === target.agentId && props.continueSessionId === target.continueSessionId;
				if (!saved || !stillCurrent) return;
				clearBudgetStops([payload.field]);
			} finally {
				budgetIncreasePending.value = false;
			}
		}
		function sendMessageFromOutside(message, files) {
			queuedExternalMessage = message;
			externalAttachedFiles = files ?? [];
			if (files?.length) handleFilesSelected(files);
			handoffPreview = previewFirstMessage(message, attachedFiles.value);
			if (!firstMessagePreview.value) inputText.value = message;
			submitQueuedExternalMessage();
		}
		async function submitQueuedExternalMessage() {
			const message = queuedExternalMessage;
			if (message === void 0 || submittingQueuedExternalMessage || isSubmissionBlocked.value) return;
			submittingQueuedExternalMessage = true;
			let result = "rejected";
			try {
				inputText.value = message;
				result = await onSubmit();
			} finally {
				submittingQueuedExternalMessage = false;
			}
			if ((result === "rejected" || result === "busy") && queuedExternalMessage === message) {
				queuedExternalMessage = void 0;
				firstMessagePreview.value = void 0;
				externalAttachedFiles = [];
			}
			if (queuedExternalMessage !== void 0 && queuedExternalMessage !== message && !isSubmissionBlocked.value) {
				await nextTick();
				submitQueuedExternalMessage();
			}
		}
		function getConversationMarkdown() {
			return messages.value.filter((message) => message.content.trim().length > 0).map((message) => {
				return `**${message.role === CHAT_MESSAGE_ROLE.USER ? "User" : "Agent"}:**\n\n${message.content.trim()}`;
			}).join("\n\n---\n\n");
		}
		/** True when the composer has text, staged files or staged chips. */
		function isDirty() {
			return hasDraft.value || composerAttachments.value.length > 0;
		}
		/** Puts text into the composer without sending it. */
		function setDraft(text) {
			inputText.value = text;
		}
		function openFilePicker() {
			chatInput.value?.openFilePicker();
		}
		/** Returns the composer textarea while it is mounted, for example to anchor a picker. */
		function getInputElement() {
			return chatInput.value?.getInputElement();
		}
		/**
		* Inserts text at the composer caret and replaces the selected text. Without a
		* mounted composer, appends the text to the draft.
		*/
		async function insertText(text) {
			const current = inputText.value;
			const element = getInputElement();
			const start = element ? Math.min(element.selectionStart, current.length) : current.length;
			const end = element ? Math.min(Math.max(element.selectionEnd, start), current.length) : start;
			inputText.value = current.slice(0, start) + text + current.slice(end);
			await nextTick();
			const caret = start + text.length;
			const updated = getInputElement();
			if (!updated) return;
			updated.focus();
			updated.setSelectionRange(caret, caret);
		}
		/**
		* Stages a host chip in the composer. `clientContextPatch` goes with the next
		* message that the server accepts, then the chip is removed. Answers to an
		* open card do not send it. Chips belong to the draft: like the composer text,
		* they stay when the session changes. Remove a chip that belongs to one session.
		*/
		function addComposerAttachment(chip, clientContextPatch) {
			const attachment = {
				chip,
				clientContextPatch
			};
			const index = composerAttachments.value.findIndex((item) => item.chip.id === chip.id);
			if (index === -1) {
				composerAttachments.value = [...composerAttachments.value, attachment];
				return;
			}
			composerAttachments.value = composerAttachments.value.map((item, itemIndex) => itemIndex === index ? attachment : item);
		}
		function removeComposerAttachment(id) {
			composerAttachments.value = composerAttachments.value.filter((item) => item.chip.id !== id);
		}
		__expose({
			focusInput,
			getConversationMarkdown,
			sendMessageFromOutside,
			clearBudgetStops,
			isDirty,
			setDraft,
			openFilePicker,
			getInputElement,
			insertText,
			addComposerAttachment,
			removeComposerAttachment,
			messages: readonly(messages),
			isStreaming: computed(() => isStreaming.value),
			isLoadingHistory: computed(() => isLoadingHistory.value)
		});
		onMounted(() => {
			loadHistory();
		});
		onBeforeUnmount(() => {
			disposed = true;
			detachStream();
		});
		return (_ctx, _cache) => {
			return __props.visible ? (openBlock(), createElementBlock("aside", {
				key: 0,
				class: normalizeClass([__props.mode === "inline" ? _ctx.$style.inlinePanel : _ctx.$style.panel, { [_ctx.$style.centeredEmpty]: isCenteredEmpty.value }])
			}, [
				unref(fatalError) ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 0,
					theme: "danger",
					class: normalizeClass(_ctx.$style.errorBanner),
					slim: ""
				}, {
					trailingContent: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: unref(locale).baseText("agents.chat.misconfigured.dismiss"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							"icon-only": "",
							variant: "ghost",
							size: "xsmall",
							"aria-label": unref(locale).baseText("agents.chat.misconfigured.dismiss"),
							onClick: unref(dismissFatalError)
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "x",
								size: "xsmall",
								"aria-hidden": "true"
							})]),
							_: 1
						}, 8, ["aria-label", "onClick"])]),
						_: 1
					}, 8, ["content"])]),
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
						trailingContent: withCtx(() => [createVNode(unref(N8nTooltip_default), {
							content: unref(locale).baseText("agents.chat.warning.dismiss"),
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								"icon-only": "",
								variant: "ghost",
								size: "xsmall",
								"aria-label": unref(locale).baseText("agents.chat.warning.dismiss"),
								onClick: ($event) => unref(dismissWarning)(index)
							}, {
								icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: "x",
									size: "xsmall",
									"aria-hidden": "true"
								})]),
								_: 1
							}, 8, ["aria-label", "onClick"])]),
							_: 2
						}, 1032, ["content"])]),
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.warningBannerBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.warningBannerTitle) }, toDisplayString(unref(locale).baseText("agents.chat.warning.mcp.title")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.warningBannerDetail) }, toDisplayString(warning.server ? unref(locale).baseText("agents.chat.warning.mcp.detail", { interpolate: {
							server: warning.server,
							error: warning.message
						} }) : warning.message), 3)], 2)]),
						_: 2
					}, 1032, ["data-test-id"])], 2);
				}), 128)),
				displayedMessages.value.length === 0 && !unref(isStreaming) ? renderSlot(_ctx.$slots, "empty-state", { key: 1 }, () => [createVNode(AgentChatEmptyState_default, { "agent-config": __props.agentConfig }, null, 8, ["agent-config"])]) : (openBlock(), createBlock(AgentChatMessageList_default, {
					key: 2,
					messages: displayedMessages.value,
					"messaging-state": displayedMessagingState.value,
					"project-id": __props.projectId,
					"agent-id": __props.agentId,
					"session-id": __props.continueSessionId,
					"can-send-to-assistant": __props.canSendToAssistant,
					"dismissed-fix-tool-call-ids": __props.dismissedFixToolCallIds,
					"can-increase-budget": canIncreaseBudget.value,
					"budget-increase-pending": budgetIncreasePending.value,
					"retry-message-id": retryMessageId.value,
					"retry-disabled": retryDisabled.value,
					onRetry: retryMessage,
					onResume: unref(resume),
					onSendToAssistant: _cache[0] || (_cache[0] = ($event) => emit("send-to-assistant", $event)),
					onIncreaseBudget
				}, createSlots({ _: 2 }, [_ctx.$slots["message-actions"] ? {
					name: "message-actions",
					fn: withCtx((actionProps) => [renderSlot(_ctx.$slots, "message-actions", normalizeProps(guardReactiveProps(actionProps)))]),
					key: "0"
				} : void 0]), 1032, [
					"messages",
					"messaging-state",
					"project-id",
					"agent-id",
					"session-id",
					"can-send-to-assistant",
					"dismissed-fix-tool-call-ids",
					"can-increase-budget",
					"budget-increase-pending",
					"retry-message-id",
					"retry-disabled",
					"onResume"
				])),
				renderSlot(_ctx.$slots, "inline-offers"),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputArea) }, [
					renderSlot(_ctx.$slots, "above-input"),
					showBackgroundJobs.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						ref_key: "backgroundJobCard",
						ref: backgroundJobCard,
						class: normalizeClass(_ctx.$style.backgroundJobs),
						"data-testid": "agent-background-jobs"
					}, [(openBlock(), createBlock(unref(AiActivityStepGroup_default), {
						key: __props.continueSessionId,
						label: backgroundTitle.value,
						"full-width": "",
						"content-position": "above"
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: backgroundInProgress.value ? "loader-circle" : "circle",
							spin: backgroundInProgress.value,
							size: "small",
							class: normalizeClass({ [_ctx.$style.jobSpinner]: backgroundInProgress.value }),
							"aria-hidden": "true"
						}, null, 8, [
							"icon",
							"spin",
							"class"
						])]),
						"header-trailing": withCtx(() => [createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.jobTimer),
							"aria-live": "off",
							"data-testid": "agent-background-jobs-timer"
						}, toDisplayString(backgroundElapsed.value), 3)]),
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.backgroundJobDetails) }, [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.backgroundJobList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(backgroundJobRows.value, (job) => {
							return openBlock(), createElementBlock("li", { key: job.id }, [
								createBaseVNode("span", {
									role: "img",
									"aria-label": job.indicator.label,
									title: job.indicator.label,
									class: normalizeClass([_ctx.$style.jobStatus, { [_ctx.$style.jobWaiting]: job.indicator.icon === "circle" }]),
									"data-status": job.status
								}, [createVNode(unref(N8nIcon_default), {
									icon: job.indicator.icon,
									spin: job.indicator.icon === "loader-circle",
									size: "small",
									class: normalizeClass({ [_ctx.$style.jobSpinner]: job.indicator.icon === "loader-circle" })
								}, null, 8, [
									"icon",
									"spin",
									"class"
								])], 10, _hoisted_1),
								createBaseVNode("span", { class: normalizeClass(_ctx.$style.jobLabel) }, toDisplayString(job.label), 3),
								job.stopping || job.stopped ? (openBlock(), createBlock(unref(N8nText_default), {
									key: 0,
									class: normalizeClass(_ctx.$style.jobProgress),
									size: "small",
									color: "text-light",
									"aria-hidden": "true"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(job.indicator.label), 1)]),
									_: 2
								}, 1032, ["class"])) : createCommentVNode("", true)
							]);
						}), 128))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.backgroundJobActions) }, [__props.continueSessionId && unref(capabilities).traceLinks ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 0,
							to: backgroundTraceRoute.value,
							theme: "text",
							size: "small",
							underline: "",
							"data-testid": "agent-background-jobs-trace"
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.jobTraceLabel) }, [createVNode(unref(N8nIcon_default), {
								icon: "arrow-right",
								size: "small",
								"aria-hidden": "true"
							}), createTextVNode(" " + toDisplayString(unref(locale).baseText("agents.chat.backgroundTasks.viewTrace")), 1)], 2)]),
							_: 1
						}, 8, ["to"])) : createCommentVNode("", true), canStopBackgroundJobs.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							ref_key: "backgroundJobStopButton",
							ref: backgroundJobStopButton,
							variant: "ghost",
							size: "small",
							class: normalizeClass(_ctx.$style.jobStopButton),
							disabled: unref(isStopping),
							"data-testid": "agent-background-jobs-stop",
							onClick: stopBackgroundJobs
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.jobTraceLabel) }, [createVNode(unref(N8nIcon_default), {
								icon: "filled-square",
								size: "small",
								"aria-hidden": "true"
							}), createTextVNode(" " + toDisplayString(unref(locale).baseText("agents.chat.backgroundTasks.stopAll")), 1)], 2)]),
							_: 1
						}, 8, ["class", "disabled"])) : createCommentVNode("", true)], 2)], 2)]),
						_: 1
					}, 8, ["label"]))], 2)) : createCommentVNode("", true),
					hasPendingApprovals.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						ref_key: "approvalCards",
						ref: approvalCards,
						"data-testid": "agent-chat-approvals"
					}, [pendingApproval.value ? (openBlock(), createBlock(ApprovalCard_default, {
						key: pendingApproval.value.toolCallId,
						input: pendingApproval.value.input,
						onSubmit: _cache[1] || (_cache[1] = ($event) => unref(resume)({
							runId: pendingApproval.value.runId,
							toolCallId: pendingApproval.value.toolCallId,
							resumeData: $event
						}))
					}, null, 8, ["input"])) : backgroundApproval.value ? (openBlock(), createElementBlock("div", {
						key: `${backgroundApproval.value.id}:${backgroundApproval.value.approval.toolCallId}`,
						class: normalizeClass(_ctx.$style.backgroundApproval)
					}, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("agents.chat.backgroundTasks.approvalFor", { interpolate: { title: backgroundApproval.value.title } })), 1)]),
						_: 1
					}), createVNode(ApprovalCard_default, {
						input: backgroundApproval.value.input,
						disabled: pendingBackgroundResponses.value.has(backgroundApproval.value.approval.toolCallId),
						onSubmit: _cache[2] || (_cache[2] = ($event) => respondToBackgroundApproval(backgroundApproval.value.approval, $event))
					}, null, 8, ["input", "disabled"])], 2)) : createCommentVNode("", true)], 512)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.composer)
					}, [createVNode(ChatInputBase_default, {
						ref_key: "chatInput",
						ref: chatInput,
						modelValue: inputText.value,
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => inputText.value = $event),
						"block-canvas-shortcuts": false,
						placeholder: chatPlaceholder.value,
						"is-streaming": false,
						"show-stop-button": showStop.value,
						"show-voice": "",
						"show-attach": showAttach.value,
						"show-attach-button": false,
						"accepted-mime-types": acceptedMimeTypes.value,
						"can-submit": !isSubmissionBlocked.value && hasDraft.value,
						disabled: isPreparingToSend.value || !!editingQueueId.value,
						"data-testid": "chat-input",
						onSubmit,
						onStop: unref(stopGenerating),
						onFilesSelected: handleFilesSelected,
						onKeydown: onChatInputKeydown
					}, createSlots({
						above: withCtx(() => [displayedQueueRows.value.length ? (openBlock(), createBlock(ChatMessageQueue_default, {
							key: 0,
							"displayed-items": queueDisplayItems.value,
							expanded: queueExpanded.value,
							"is-reordering": unref(isReorderingQueue),
							"can-edit": !hasDraft.value && !isSubmissionBlocked.value,
							"steer-action": queueSteerAction.value,
							"can-steer": unref(canSteer),
							"can-drag-queue-item": canDragQueueItem,
							"is-queue-item-busy": isDisplayedQueueItemBusy,
							"can-drop-queue-item": canDropQueueItem,
							"onUpdate:expanded": _cache[3] || (_cache[3] = ($event) => queueExpanded.value = $event),
							onDragStart: startQueueDrag,
							onDragEnd: endQueueDrag,
							onSteer: unref(steerQueuedMessage),
							onEdit: editQueuedMessage,
							onRemove: unref(removeQueuedMessage)
						}, null, 8, [
							"displayed-items",
							"expanded",
							"is-reordering",
							"can-edit",
							"steer-action",
							"can-steer",
							"onSteer",
							"onRemove"
						])) : currentPlan.value ? (openBlock(), createBlock(AgentChatPlan_default, {
							key: `${__props.agentId}:${__props.continueSessionId ?? ""}:${currentPlan.value.planId}`,
							plan: currentPlan.value,
							"trace-route": __props.continueSessionId && unref(capabilities).traceLinks ? backgroundTraceRoute.value : void 0
						}, null, 8, ["plan", "trace-route"])) : createCommentVNode("", true)]),
						"footer-start": withCtx(() => [showAttach.value && __props.showAttachButton ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							content: unref(locale).baseText("chatInputBase.button.attach"),
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								variant: "ghost",
								icon: "paperclip",
								"icon-size": "large",
								disabled: isPreparingToSend.value || !!editingQueueId.value,
								"aria-label": unref(locale).baseText("chatInputBase.button.attach"),
								"data-test-id": "chat-input-attach-button",
								onClick: _cache[4] || (_cache[4] = withModifiers(($event) => chatInput.value?.openFilePicker(), ["stop"]))
							}, null, 8, ["disabled", "aria-label"])]),
							_: 1
						}, 8, ["content"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "footer-start")]),
						_: 2
					}, [attachedFiles.value.length > 0 || composerAttachments.value.length > 0 || _ctx.$slots["composer-attachments"] ? {
						name: "attachments",
						fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.attachmentsStrip) }, [renderSlot(_ctx.$slots, "composer-attachments", {
							chips: composerChips.value,
							removeChip: removeComposerAttachment
						}, () => [(openBlock(true), createElementBlock(Fragment, null, renderList(composerChips.value, (chip) => {
							return openBlock(), createBlock(InstanceAiResourceChip_default, {
								key: chip.id,
								label: chip.label,
								icon: chip.icon,
								removable: "",
								"remove-label": unref(locale).baseText("agents.chat.composer.removeChip", { interpolate: { label: chip.label } }),
								"test-id": "agent-chat-composer-chip",
								"remove-test-id": "agent-chat-composer-chip-remove",
								onRemove: ($event) => removeComposerAttachment(chip.id)
							}, null, 8, [
								"label",
								"icon",
								"remove-label",
								"onRemove"
							]);
						}), 128))]), (openBlock(true), createElementBlock(Fragment, null, renderList(attachedFiles.value, (file, index) => {
							return openBlock(), createBlock(AttachmentPreview_default, {
								key: `${file.name}-${index}`,
								file,
								"is-removable": "",
								onRemove: handleFileRemove
							}, null, 8, ["file"]);
						}), 128))], 2)]),
						key: "0"
					} : void 0, _ctx.$slots["composer-actions"] ? {
						name: "right-actions",
						fn: withCtx(() => [renderSlot(_ctx.$slots, "composer-actions")]),
						key: "1"
					} : void 0]), 1032, [
						"modelValue",
						"placeholder",
						"show-stop-button",
						"show-attach",
						"accepted-mime-types",
						"can-submit",
						"disabled",
						"onStop"
					]), renderSlot(_ctx.$slots, "input-footer")], 2))
				], 2)
			], 2)) : createCommentVNode("", true);
		};
	}
}), [["__cssModules", { "$style": {
	panel: "_panel_doq0t_276",
	inlinePanel: "_inlinePanel_doq0t_285",
	centeredEmpty: "_centeredEmpty_doq0t_294",
	composer: "_composer_doq0t_298",
	inputArea: "_inputArea_doq0t_303",
	backgroundJobs: "_backgroundJobs_doq0t_314",
	backgroundJobDetails: "_backgroundJobDetails_doq0t_325",
	backgroundApproval: "_backgroundApproval_doq0t_335",
	backgroundJobList: "_backgroundJobList_doq0t_341",
	jobLabel: "_jobLabel_doq0t_360",
	jobProgress: "_jobProgress_doq0t_365",
	jobStatus: "_jobStatus_doq0t_370",
	fadeIn: "_fadeIn_doq0t_1",
	jobWaiting: "_jobWaiting_doq0t_389",
	jobTraceLabel: "_jobTraceLabel_doq0t_393",
	backgroundJobActions: "_backgroundJobActions_doq0t_399",
	jobStopButton: "_jobStopButton_doq0t_406",
	jobSpinner: "_jobSpinner_doq0t_422",
	jobTimer: "_jobTimer_doq0t_427",
	attachmentsStrip: "_attachmentsStrip_doq0t_433",
	errorBanner: "_errorBanner_doq0t_440",
	errorBannerBody: "_errorBannerBody_doq0t_445",
	errorBannerTitle: "_errorBannerTitle_doq0t_453",
	errorBannerDetail: "_errorBannerDetail_doq0t_457",
	warningBanner: "_warningBanner_doq0t_462",
	warningBannerBody: "_warningBannerBody_doq0t_467",
	warningBannerTitle: "_warningBannerTitle_doq0t_475",
	warningBannerDetail: "_warningBannerDetail_doq0t_479",
	shimmer: "_shimmer_doq0t_1",
	spin: "_spin_doq0t_1",
	"skeleton-pulse": "_skeleton-pulse_doq0t_1",
	opacityPulse: "_opacityPulse_doq0t_1",
	popoverIn: "_popoverIn_doq0t_1",
	collapsibleSlideDown: "_collapsibleSlideDown_doq0t_1",
	collapsibleSlideUp: "_collapsibleSlideUp_doq0t_1",
	collapsibleSlideDownBlurred: "_collapsibleSlideDownBlurred_doq0t_1",
	collapsibleSlideUpBlurred: "_collapsibleSlideUpBlurred_doq0t_1",
	blurSwapIn: "_blurSwapIn_doq0t_1",
	blurSwapOut: "_blurSwapOut_doq0t_1",
	pulseGlow: "_pulseGlow_doq0t_1",
	pulseGlowDelayed: "_pulseGlowDelayed_doq0t_1",
	fade: "_fade_doq0t_1",
	fadeInUp: "_fadeInUp_doq0t_1",
	fadeInDown: "_fadeInDown_doq0t_1",
	fadeInLeft: "_fadeInLeft_doq0t_1",
	fadeInRight: "_fadeInRight_doq0t_1",
	fadeOut: "_fadeOut_doq0t_1",
	fadeOutDown: "_fadeOutDown_doq0t_1",
	fadeOutUp: "_fadeOutUp_doq0t_1",
	fadeOutLeft: "_fadeOutLeft_doq0t_1",
	fadeOutRight: "_fadeOutRight_doq0t_1",
	ping: "_ping_doq0t_1",
	blinkBackground: "_blinkBackground_doq0t_1",
	typingBlink: "_typingBlink_doq0t_1"
} }]]);
//#endregion
export { convertDbMessages as A, isBudgetStopCode as C, sessionCapSave as D, raisedBudgetCaps as E, isNotFoundError as F, isDelegateSubAgentTool as M, resolveSubAgentName as N, snapAlertPercent as O, parseIntegrationActionCard as P, increasedBudgetConfig as S, parseBudgetAmount as T, backgroundJobTimelineLabelKey as _, useRelativeTimestamp as a, useAgentExecutionUpdates as b, AgentBudgetNoticeCard_default as c, resolveAgentPreviewLink as d, AgentChatToolSteps_default as f, backgroundJobResultLabel as g, AGENT_SUB_AGENT_NAMES_KEY as h, deriveAgentStatus as i, delegateLabel as j, getThinkingDurationSec as k, AgentMarkdownChunk_default as l, AgentChatMessageAttachments_default as m, useApprovalCardLabels as n, buildAgentChangeRequestPrompt as o, useSubAgentNames as p, buildAgentConfigFingerprint as r, buildAgentFixWithAssistantPrompt as s, AgentChatPanel_default as t, buildAgentPreviewHref as u, AiThinkingBlock_default as v, monthlyBudgetSave as w, formatBudgetUsd as x, AiReasoningBlock_default as y };
