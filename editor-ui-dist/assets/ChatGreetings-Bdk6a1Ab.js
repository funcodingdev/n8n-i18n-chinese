import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, K as onBeforeMount, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock, y as Teleport } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { C as useScroll, E as useSpeechSynthesis, T as useSpeechRecognition, m as useElementSize } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as truncate } from "./truncate-B0m9bkui.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nChatInput_default } from "./N8nChatInput-DRzszglJ.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as useDeviceSupport } from "./useDeviceSupport-CZosAKtc.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as useWorkflowsStore } from "./workflows.store-qP-dtzSs.js";
import { t as useRootStore } from "./useRootStore-CLEJA2KF.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import "./constants-CMdL1Kzl.js";
import { t as usePushConnectionStore } from "./pushConnection.store-C5GWoa5X.js";
import { h as providerDisplayNames } from "./constants-zeVT1Ciq.js";
import { o as buildChatAttachmentUrl, t as useChatStore } from "./chat.store-BOzBynwr.js";
import { C as splitMarkdownIntoChunks, T as unflattenModel, b as isRegenerable, g as isFileAcceptedByAccept, h as isEditable, o as enrichMimeTypesWithExtensions, v as isLlmProviderModel, x as isWaitingForApproval } from "./chat.utils-yr8r7OPi.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-DatALJwb.js";
import { t as ChatFile_default } from "./ChatFile-C2sStvps.js";
import { t as ToolsSelector_default } from "./ToolsSelector-E4zum1zq.js";
import { t as CopyButton_default } from "./CopyButton-CqMt1spN.js";
import { t as ChatMarkdownChunk_default } from "./ChatMarkdownChunk-07aWqAvb.js";
//#region src/features/ai/chatHub/composables/useChatPushHandler.ts
/**
* Composable for handling chat stream messages received via WebSocket Push
*/
function useChatPushHandler() {
	const pushStore = usePushConnectionStore();
	const chatStore = useChatStore();
	const activeStreams = ref(/* @__PURE__ */ new Map());
	const removeEventListener = ref(null);
	const stopReconnectWatcher = ref(null);
	/**
	* Handle a chat execution begin event (whole streaming session starts)
	*/
	function handleExecutionBegin(event) {
		const { sessionId } = event.data;
		chatStore.handleWebSocketExecutionBegin({ sessionId });
	}
	/**
	* Handle a chat execution end event (whole streaming session ends)
	*/
	function handleExecutionEnd(event) {
		const { sessionId, status } = event.data;
		activeStreams.value.delete(sessionId);
		chatStore.handleWebSocketExecutionEnd({
			sessionId,
			status
		});
	}
	/**
	* Handle a chat stream begin event
	*/
	function handleStreamBegin(event) {
		const { sessionId, messageId, sequenceNumber, previousMessageId, retryOfMessageId } = event.data;
		activeStreams.value.set(sessionId, {
			sessionId,
			messageId,
			lastSequenceNumber: sequenceNumber,
			content: ""
		});
		if (chatStore.streaming?.sessionId === sessionId) {
			if (chatStore.streaming.messageId !== messageId) chatStore.streaming.messageId = messageId;
		}
		chatStore.handleWebSocketStreamBegin({
			sessionId,
			messageId,
			previousMessageId,
			retryOfMessageId
		});
	}
	/**
	* Handle a chat stream chunk event
	*/
	function handleStreamChunk(event) {
		const { sessionId, messageId, sequenceNumber, content } = event.data;
		const streamState = activeStreams.value.get(sessionId);
		if (!streamState || streamState.messageId !== messageId) return;
		if (sequenceNumber <= streamState.lastSequenceNumber) return;
		streamState.lastSequenceNumber = sequenceNumber;
		streamState.content += content;
		chatStore.handleWebSocketStreamChunk({
			sessionId,
			messageId,
			content
		});
	}
	/**
	* Handle a chat stream end event
	*/
	function handleStreamEnd(event) {
		const { sessionId, messageId, status } = event.data;
		activeStreams.value.delete(sessionId);
		chatStore.handleWebSocketStreamEnd({
			sessionId,
			messageId,
			status
		});
	}
	/**
	* Handle a chat stream error event
	*/
	function handleStreamError(event) {
		const { sessionId, messageId, error } = event.data;
		activeStreams.value.delete(sessionId);
		chatStore.handleWebSocketStreamError({
			sessionId,
			messageId,
			error
		});
	}
	/**
	* Handle a human message created event
	*/
	function handleHumanMessageCreated(event) {
		chatStore.handleHumanMessageCreated(event.data);
	}
	/**
	* Handle a message edited event
	*/
	function handleMessageEdited(event) {
		chatStore.handleMessageEdited(event.data);
	}
	/**
	* Handle WebSocket reconnection by catching up all active streams
	*/
	async function handleReconnect() {
		for (const [sessionId, streamState] of activeStreams.value.entries()) {
			const result = await chatStore.reconnectToStream(sessionId, streamState.lastSequenceNumber);
			if (result?.pendingChunks?.length) {
				for (const chunk of result.pendingChunks) if (chunk.sequenceNumber > streamState.lastSequenceNumber) streamState.lastSequenceNumber = chunk.sequenceNumber;
			}
		}
	}
	/**
	* Process a push message if it's a chat stream event
	*/
	function processMessage(event) {
		switch (event.type) {
			case "chatHubHumanMessageCreated":
				handleHumanMessageCreated(event);
				break;
			case "chatHubMessageEdited":
				handleMessageEdited(event);
				break;
			case "chatHubExecutionBegin":
				handleExecutionBegin(event);
				break;
			case "chatHubExecutionEnd":
				handleExecutionEnd(event);
				break;
			case "chatHubStreamBegin":
				handleStreamBegin(event);
				break;
			case "chatHubStreamChunk":
				handleStreamChunk(event);
				break;
			case "chatHubStreamEnd":
				handleStreamEnd(event);
				break;
			case "chatHubStreamError":
				handleStreamError(event);
				break;
		}
	}
	/**
	* Initialize the push handler and connect to WebSocket
	*/
	function initialize() {
		if (removeEventListener.value) return;
		pushStore.pushConnect();
		removeEventListener.value = pushStore.addEventListener(processMessage);
		stopReconnectWatcher.value = watch(() => pushStore.isConnected, async (isConnected, wasConnected) => {
			if (isConnected && !wasConnected) await handleReconnect();
		});
	}
	/**
	* Terminate the push handler and disconnect from WebSocket
	*/
	function terminate() {
		if (stopReconnectWatcher.value) {
			stopReconnectWatcher.value();
			stopReconnectWatcher.value = null;
		}
		if (removeEventListener.value) {
			removeEventListener.value();
			removeEventListener.value = null;
		}
		activeStreams.value.clear();
		pushStore.pushDisconnect();
	}
	/**
	* Get the current stream state for a session
	*/
	function getStreamState(sessionId) {
		return activeStreams.value.get(sessionId);
	}
	/**
	* Check if a session has an active stream
	*/
	function hasActiveStream(sessionId) {
		return !!activeStreams.value.get(sessionId);
	}
	/**
	* Initialize stream state for reconnection after page refresh.
	* This allows the push handler to receive future chunks for an existing stream.
	*/
	function initializeStreamState(sessionId, messageId, lastSequenceNumber) {
		activeStreams.value.set(sessionId, {
			sessionId,
			messageId,
			lastSequenceNumber,
			content: ""
		});
	}
	/**
	* Get the last received sequence number for a session
	*/
	function getLastSequenceNumber(sessionId) {
		return activeStreams.value.get(sessionId)?.lastSequenceNumber ?? 0;
	}
	return {
		activeStreams,
		initialize,
		terminate,
		getStreamState,
		hasActiveStream,
		getLastSequenceNumber,
		initializeStreamState
	};
}
//#endregion
//#region src/features/ai/chatHub/composables/useChatSession.ts
function useChatSession(options) {
	const { sessionId, scrollableRef, extendMessagingState, shouldSkipScroll } = options;
	const chatStore = useChatStore();
	const chatPushHandler = useChatPushHandler();
	onBeforeMount(() => {
		chatPushHandler.initialize();
	});
	onBeforeUnmount(() => {
		chatPushHandler.terminate();
	});
	const chatMessages = computed(() => chatStore.getActiveMessages(sessionId.value));
	const isResponding = computed(() => chatStore.isResponding(sessionId.value));
	const isNewSession = options.isNewSession ?? computed(() => chatMessages.value.length === 0);
	const messagingState = computed(() => {
		if (chatStore.streaming?.sessionId === sessionId.value) return chatStore.streaming.messageId ? "receiving" : "waitingFirstChunk";
		if (isWaitingForApproval(chatStore.lastMessage(sessionId.value))) return "waitingForApproval";
		if (extendMessagingState) {
			const extended = extendMessagingState();
			if (extended !== null) return extended;
		}
		return "idle";
	});
	const scrollContainerRef = computed(() => scrollableRef.value?.parentElement ?? null);
	const { arrivedState, measure } = useScroll(scrollContainerRef, {
		throttle: 100,
		offset: { bottom: 100 }
	});
	function scrollToBottom(smooth) {
		scrollContainerRef.value?.scrollTo({
			top: scrollableRef.value?.scrollHeight,
			behavior: smooth ? "smooth" : "instant"
		});
	}
	function scrollToMessage(messageId) {
		scrollableRef.value?.querySelector(`[data-message-id="${messageId}"]`)?.scrollIntoView({ behavior: "smooth" });
	}
	/**
	* Fetch messages for a session and reconnect to any active stream.
	* Throws on failure so callers can handle errors differently.
	*/
	async function loadSession(targetSessionId) {
		if (!chatStore.getConversation(targetSessionId)) await chatStore.fetchMessages(targetSessionId);
		const result = await chatStore.reconnectToStream(targetSessionId, 0);
		if (result?.hasActiveStream && result.currentMessageId) chatPushHandler.initializeStreamState(targetSessionId, result.currentMessageId, result.lastSequenceNumber);
	}
	watch(() => chatMessages.value[chatMessages.value.length - 1]?.id, (lastMessageId) => {
		if (!lastMessageId) return;
		if (shouldSkipScroll?.()) return;
		nextTick(measure);
		if (chatStore.streaming?.sessionId === sessionId.value) {
			scrollToMessage(chatStore.streaming.promptId);
			return;
		}
		scrollToBottom(false);
	}, {
		immediate: true,
		flush: "post"
	});
	return {
		chatMessages,
		isResponding,
		isNewSession,
		messagingState,
		scrollContainerRef,
		arrivedState,
		scrollToBottom,
		scrollToMessage,
		loadSession
	};
}
//#endregion
//#region src/features/ai/chatHub/components/ChatTypingIndicator.vue?vue&type=style&index=0&lang.module.scss
var typing = "_typing_6udid_388";
var typingBlink$7 = "_typingBlink_6udid_1";
var shimmer$7 = "_shimmer_6udid_1";
var spin$7 = "_spin_6udid_1";
var opacityPulse$7 = "_opacityPulse_6udid_1";
var popoverIn$7 = "_popoverIn_6udid_1";
var fadeIn$7 = "_fadeIn_6udid_1";
var collapsibleSlideDown$7 = "_collapsibleSlideDown_6udid_1";
var collapsibleSlideUp$7 = "_collapsibleSlideUp_6udid_1";
var collapsibleSlideDownBlurred$7 = "_collapsibleSlideDownBlurred_6udid_1";
var collapsibleSlideUpBlurred$7 = "_collapsibleSlideUpBlurred_6udid_1";
var blurSwapIn$7 = "_blurSwapIn_6udid_1";
var blurSwapOut$7 = "_blurSwapOut_6udid_1";
var pulseGlow$7 = "_pulseGlow_6udid_1";
var pulseGlowDelayed$7 = "_pulseGlowDelayed_6udid_1";
var fade$7 = "_fade_6udid_1";
var fadeInUp$7 = "_fadeInUp_6udid_1";
var fadeInDown$7 = "_fadeInDown_6udid_1";
var fadeInLeft$7 = "_fadeInLeft_6udid_1";
var fadeInRight$7 = "_fadeInRight_6udid_1";
var fadeOut$7 = "_fadeOut_6udid_1";
var fadeOutDown$7 = "_fadeOutDown_6udid_1";
var fadeOutUp$7 = "_fadeOutUp_6udid_1";
var fadeOutLeft$7 = "_fadeOutLeft_6udid_1";
var fadeOutRight$7 = "_fadeOutRight_6udid_1";
var ping$7 = "_ping_6udid_1";
var blinkBackground$7 = "_blinkBackground_6udid_1";
var ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing,
	typingBlink: typingBlink$7,
	shimmer: shimmer$7,
	spin: spin$7,
	"skeleton-pulse": "_skeleton-pulse_6udid_1",
	opacityPulse: opacityPulse$7,
	popoverIn: popoverIn$7,
	fadeIn: fadeIn$7,
	collapsibleSlideDown: collapsibleSlideDown$7,
	collapsibleSlideUp: collapsibleSlideUp$7,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$7,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$7,
	blurSwapIn: blurSwapIn$7,
	blurSwapOut: blurSwapOut$7,
	pulseGlow: pulseGlow$7,
	pulseGlowDelayed: pulseGlowDelayed$7,
	fade: fade$7,
	fadeInUp: fadeInUp$7,
	fadeInDown: fadeInDown$7,
	fadeInLeft: fadeInLeft$7,
	fadeInRight: fadeInRight$7,
	fadeOut: fadeOut$7,
	fadeOutDown: fadeOutDown$7,
	fadeOutUp: fadeOutUp$7,
	fadeOutLeft: fadeOutLeft$7,
	fadeOutRight: fadeOutRight$7,
	ping: ping$7,
	blinkBackground: blinkBackground$7
};
//#endregion
//#region src/features/ai/chatHub/components/ChatTypingIndicator.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(_ctx.$style.typing),
		"data-test-id": "chat-typing-indicator"
	}, [..._cache[0] || (_cache[0] = [
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1)
	])], 2);
}
var ChatTypingIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatMessageActions.vue?vue&type=script&setup=true&lang.ts
var ChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessageActions",
	props: {
		message: {},
		isSpeechSynthesisAvailable: { type: Boolean },
		isSpeaking: { type: Boolean },
		hasSessionStreaming: { type: Boolean }
	},
	emits: [
		"edit",
		"regenerate",
		"switchAlternative",
		"readAloud"
	],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const router = useRouter();
		const workflowsStore = useWorkflowsStore();
		const emit = __emit;
		const currentAlternativeIndex = computed(() => {
			return __props.message.alternatives.findIndex((id) => id === __props.message.id);
		});
		const text = computed(() => __props.message.content.map((c) => c.content).join("\n\n"));
		const executionUrl = computed(() => {
			if (workflowsStore.canViewWorkflows && __props.message.type === "ai" && __props.message.provider === "n8n" && __props.message.executionId) return router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					workflowId: __props.message.workflowId,
					executionId: __props.message.executionId
				}
			}).href;
		});
		const canEdit = computed(() => isEditable(__props.message));
		const canRegenerate = computed(() => isRegenerable(__props.message));
		function handleEdit() {
			emit("edit");
		}
		function handleRegenerate() {
			emit("regenerate");
		}
		function handleReadAloud() {
			emit("readAloud");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.actions),
				"data-test-id": "chat-message-actions"
			}, [
				createVNode(CopyButton_default, {
					content: text.value,
					"data-test-id": "chat-message-copy"
				}, null, 8, ["content"]),
				__props.isSpeechSynthesisAvailable && __props.message.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(__props.isSpeaking ? unref(i18n).baseText("chatHub.message.actions.stopReading") : unref(i18n).baseText("chatHub.message.actions.readAloud")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: __props.isSpeaking ? "volume-x" : "volume-2",
						size: "medium",
						onClick: handleReadAloud
					}, null, 8, ["icon"])]),
					_: 1
				})) : createCommentVNode("", true),
				canEdit.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.actions.edit")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "pen",
						size: "medium",
						"data-test-id": "chat-message-edit",
						disabled: __props.hasSessionStreaming,
						onClick: handleEdit
					}, null, 8, ["disabled"])]),
					_: 1
				})) : createCommentVNode("", true),
				canRegenerate.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.actions.regenerate")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "refresh-cw",
						size: "medium",
						"data-test-id": "chat-message-regenerate",
						disabled: __props.hasSessionStreaming,
						onClick: handleRegenerate
					}, null, 8, ["disabled"])]),
					_: 1
				})) : createCommentVNode("", true),
				executionUrl.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 3,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.actions.executionId")) + ": ", 1), createVNode(unref(N8nLink_default), {
						to: executionUrl.value,
						"new-window": true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.message.executionId), 1)]),
						_: 1
					}, 8, ["to"])]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "info",
						size: "medium",
						"data-test-id": "chat-message-info"
					})]),
					_: 1
				})) : createCommentVNode("", true),
				__props.message.alternatives.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
					createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "chevron-left",
						size: "medium",
						disabled: __props.hasSessionStreaming || currentAlternativeIndex.value === 0,
						"data-test-id": "chat-message-prev-alternative",
						onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("switchAlternative", __props.message.alternatives[currentAlternativeIndex.value - 1]))
					}, null, 8, ["disabled"]),
					createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(`${currentAlternativeIndex.value + 1}/${__props.message.alternatives.length}`), 1)]),
						_: 1
					}),
					createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "chevron-right",
						size: "medium",
						disabled: __props.hasSessionStreaming || currentAlternativeIndex.value === __props.message.alternatives.length - 1,
						"data-test-id": "chat-message-next-alternative",
						onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("switchAlternative", __props.message.alternatives[currentAlternativeIndex.value + 1]))
					}, null, 8, ["disabled"])
				], 64)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatMessageActions.vue?vue&type=style&index=0&lang.module.scss
var actions$1 = "_actions_u8p9r_388";
var shimmer$6 = "_shimmer_u8p9r_1";
var spin$6 = "_spin_u8p9r_1";
var opacityPulse$6 = "_opacityPulse_u8p9r_1";
var popoverIn$6 = "_popoverIn_u8p9r_1";
var fadeIn$6 = "_fadeIn_u8p9r_1";
var collapsibleSlideDown$6 = "_collapsibleSlideDown_u8p9r_1";
var collapsibleSlideUp$6 = "_collapsibleSlideUp_u8p9r_1";
var collapsibleSlideDownBlurred$6 = "_collapsibleSlideDownBlurred_u8p9r_1";
var collapsibleSlideUpBlurred$6 = "_collapsibleSlideUpBlurred_u8p9r_1";
var blurSwapIn$6 = "_blurSwapIn_u8p9r_1";
var blurSwapOut$6 = "_blurSwapOut_u8p9r_1";
var pulseGlow$6 = "_pulseGlow_u8p9r_1";
var pulseGlowDelayed$6 = "_pulseGlowDelayed_u8p9r_1";
var fade$6 = "_fade_u8p9r_1";
var fadeInUp$6 = "_fadeInUp_u8p9r_1";
var fadeInDown$6 = "_fadeInDown_u8p9r_1";
var fadeInLeft$6 = "_fadeInLeft_u8p9r_1";
var fadeInRight$6 = "_fadeInRight_u8p9r_1";
var fadeOut$6 = "_fadeOut_u8p9r_1";
var fadeOutDown$6 = "_fadeOutDown_u8p9r_1";
var fadeOutUp$6 = "_fadeOutUp_u8p9r_1";
var fadeOutLeft$6 = "_fadeOutLeft_u8p9r_1";
var fadeOutRight$6 = "_fadeOutRight_u8p9r_1";
var ping$6 = "_ping_u8p9r_1";
var blinkBackground$6 = "_blinkBackground_u8p9r_1";
var typingBlink$6 = "_typingBlink_u8p9r_1";
var ChatMessageActions_vue_vue_type_style_index_0_lang_module_default = {
	actions: actions$1,
	shimmer: shimmer$6,
	spin: spin$6,
	"skeleton-pulse": "_skeleton-pulse_u8p9r_1",
	opacityPulse: opacityPulse$6,
	popoverIn: popoverIn$6,
	fadeIn: fadeIn$6,
	collapsibleSlideDown: collapsibleSlideDown$6,
	collapsibleSlideUp: collapsibleSlideUp$6,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$6,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$6,
	blurSwapIn: blurSwapIn$6,
	blurSwapOut: blurSwapOut$6,
	pulseGlow: pulseGlow$6,
	pulseGlowDelayed: pulseGlowDelayed$6,
	fade: fade$6,
	fadeInUp: fadeInUp$6,
	fadeInDown: fadeInDown$6,
	fadeInLeft: fadeInLeft$6,
	fadeInRight: fadeInRight$6,
	fadeOut: fadeOut$6,
	fadeOutDown: fadeOutDown$6,
	fadeOutUp: fadeOutUp$6,
	fadeOutLeft: fadeOutLeft$6,
	fadeOutRight: fadeOutRight$6,
	ping: ping$6,
	blinkBackground: blinkBackground$6,
	typingBlink: typingBlink$6
};
var ChatMessageActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessageActions_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-1effe526"]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["data-message-id", "data-test-id"];
var _hoisted_2 = ["accept"];
var _hoisted_3 = { key: 1 };
var ChatMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessage",
	props: {
		message: {},
		compact: { type: Boolean },
		isEditing: { type: Boolean },
		isEditSubmitting: { type: Boolean },
		hasSessionStreaming: { type: Boolean },
		cachedAgentDisplayName: {},
		cachedAgentIcon: {},
		acceptedMimeTypes: {},
		minHeight: {}
	},
	emits: [
		"startEdit",
		"cancelEdit",
		"update",
		"regenerate",
		"switchAlternative",
		"openArtifact"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const chatStore = useChatStore();
		const rootStore = useRootStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		const i18n = useI18n();
		const editedText = ref("");
		const newFiles = ref([]);
		const removedExistingIndices = ref(/* @__PURE__ */ new Set());
		const fileInputRef = useTemplateRef("fileInputRef");
		const textareaRef = useTemplateRef("textarea");
		const attachmentsRef = useTemplateRef("attachmentsRef");
		const attachmentsElSize = useElementSize(attachmentsRef, void 0, { box: "border-box" });
		const markdownChunkRefs = useTemplateRef("markdownChunk");
		const activeCodeBlockTeleport = computed(() => {
			const refs = markdownChunkRefs.value;
			if (!refs || !Array.isArray(refs)) return null;
			for (const chunkRef of refs) if (chunkRef?.hoveredCodeBlockActions) {
				const content = chunkRef.getHoveredCodeBlockContent();
				if (content) return {
					target: chunkRef.hoveredCodeBlockActions,
					content
				};
			}
			return null;
		});
		const messageChunks = computed(() => __props.message.content.flatMap((chunk, index, arr) => {
			if (chunk.type === "hidden") return [];
			if (chunk.type === "with-buttons") return [chunk];
			if (chunk.type === "artifact-create" || chunk.type === "artifact-edit") {
				const prev = arr[index - 1];
				return prev?.type === chunk.type && prev.command.title === chunk.command.title ? [] : [chunk];
			}
			if (__props.message.status === "error" && !chunk.content) return [{
				type: "text",
				content: i18n.baseText("chatHub.message.error.unknown")
			}];
			if (/\[\^[^\]]+\]/.test(chunk.content)) return [{
				type: "text",
				content: chunk.content
			}];
			return splitMarkdownIntoChunks(chunk.content).flatMap((content) => content.trim() === "" ? [] : [{
				type: "text",
				content
			}]);
		}));
		const text = computed(() => messageChunks.value.flatMap((chunk) => chunk.type === "text" ? [chunk.content] : []).join(""));
		const speech = useSpeechSynthesis(text, {
			pitch: 1,
			rate: 1,
			volume: 1
		});
		const agent = computed(() => {
			const model = unflattenModel(__props.message);
			if (!model) return null;
			return chatStore.getAgent(model, {
				name: __props.cachedAgentDisplayName,
				icon: __props.cachedAgentIcon
			});
		});
		const attachments = computed(() => __props.message.attachments.map(({ fileName, mimeType }, index) => ({
			file: new File([], fileName ?? "file", { type: mimeType }),
			downloadUrl: buildChatAttachmentUrl(rootStore.restApiContext, __props.message.sessionId, __props.message.id, index)
		})));
		const mergedAttachments = computed(() => [...attachments.value.flatMap(({ downloadUrl, file }, idx) => removedExistingIndices.value.has(idx) ? [] : [{
			isNew: false,
			file,
			index: idx,
			downloadUrl
		}]), ...newFiles.value.map((file, index) => ({
			isNew: true,
			file,
			index
		}))]);
		const enrichedAcceptedMimeTypes = computed(() => enrichMimeTypesWithExtensions(__props.acceptedMimeTypes));
		const hideMessage = computed(() => {
			return __props.message.status === "success" && text.value === "" && !__props.message.content.some((c) => c.type === "with-buttons");
		});
		const shouldShowTypingIndicator = computed(() => __props.message.status === "running");
		function handleEdit() {
			emit("startEdit");
		}
		function handleCancelEdit() {
			emit("cancelEdit");
		}
		function handleConfirmEdit() {
			if (!editedText.value.trim()) return;
			const keptAttachmentIndices = __props.message.attachments.map((_, idx) => idx).filter((idx) => !removedExistingIndices.value.has(idx));
			emit("update", editedText.value, keptAttachmentIndices, newFiles.value);
		}
		function handleAttachClick() {
			fileInputRef.value?.click();
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			for (const file of Array.from(files)) newFiles.value.push(file);
			if (target) target.value = "";
		}
		function handleRemoveFile(file) {
			if (file.isNew) {
				newFiles.value = newFiles.value.filter((_, idx) => idx !== file.index);
				return;
			}
			removedExistingIndices.value.add(file.index);
		}
		function addFiles(files) {
			for (const file of files) newFiles.value.push(file);
		}
		__expose({ addFiles });
		function handleKeydownTextarea(e) {
			if (e.key === "Escape") {
				emit("cancelEdit");
				return;
			}
			const trimmed = editedText.value.trim();
			if (e.key === "Enter" && isCtrlKeyPressed(e) && !e.isComposing && trimmed) {
				e.preventDefault();
				handleConfirmEdit();
			}
		}
		function handleRegenerate() {
			emit("regenerate", __props.message);
		}
		function handleReadAloud() {
			if (speech.isSupported.value) if (speech.isPlaying.value) speech.stop();
			else speech.speak();
		}
		function handleSwitchAlternative(messageId) {
			emit("switchAlternative", messageId);
		}
		watch(() => __props.isEditing, (editing) => {
			editedText.value = editing ? text.value : "";
			newFiles.value = [];
			removedExistingIndices.value = /* @__PURE__ */ new Set();
		}, { immediate: true });
		watch(textareaRef, async (textarea) => {
			if (textarea) {
				await new Promise((r) => setTimeout(r, 0));
				textarea.focus();
				textarea.$el.scrollIntoView({ block: "nearest" });
			}
		}, {
			immediate: true,
			flush: "post"
		});
		onBeforeMount(() => {
			speech.stop();
		});
		return (_ctx, _cache) => {
			return !hideMessage.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([
					_ctx.$style.message,
					__props.message.type === "human" ? _ctx.$style.user : _ctx.$style.assistant,
					{ [_ctx.$style.compact]: __props.compact }
				]),
				style: normalizeStyle({ minHeight: __props.minHeight ? `${__props.minHeight}px` : void 0 }),
				"data-message-id": __props.message.id,
				"data-test-id": `chat-message-${__props.message.id}`
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, [__props.message.type === "human" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "user",
				width: "20",
				height: "20"
			})) : (openBlock(), createBlock(ChatAgentAvatar_default, {
				key: 1,
				agent: agent.value,
				size: "md",
				tooltip: ""
			}, null, 8, ["agent"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [__props.message.type === "human" ? (openBlock(), createElementBlock("input", {
				key: 0,
				ref_key: "fileInputRef",
				ref: fileInputRef,
				type: "file",
				"data-test-id": "message-edit-file-input",
				class: normalizeClass(_ctx.$style.fileInput),
				accept: enrichedAcceptedMimeTypes.value,
				multiple: "",
				onChange: handleFileSelect
			}, null, 42, _hoisted_2)) : createCommentVNode("", true), __props.isEditing ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.editContainer),
				style: normalizeStyle({ "--attachments--height": `${unref(attachmentsElSize).height.value}px` })
			}, [
				__props.message.type === "human" && mergedAttachments.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "attachmentsRef",
					ref: attachmentsRef,
					class: normalizeClass(_ctx.$style.attachments)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(mergedAttachments.value, (attachment, index) => {
					return openBlock(), createBlock(ChatFile_default, {
						key: index,
						file: attachment.file,
						"is-removable": "",
						href: attachment.isNew ? void 0 : attachment.downloadUrl,
						onRemove: ($event) => handleRemoveFile(attachment)
					}, null, 8, [
						"file",
						"href",
						"onRemove"
					]);
				}), 128))], 2)) : createCommentVNode("", true),
				createVNode(unref(Input_default), {
					ref: "textarea",
					modelValue: editedText.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editedText.value = $event),
					type: "textarea",
					autosize: {
						minRows: 1,
						maxRows: 20
					},
					class: normalizeClass(_ctx.$style.textarea),
					onKeydown: handleKeydownTextarea
				}, null, 8, ["modelValue", "class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.editFooter) }, [__props.message.type === "human" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					variant: "ghost",
					icon: "paperclip",
					onClick: withModifiers(handleAttachClick, ["stop"])
				})) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.editActions) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					onClick: handleCancelEdit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.edit.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					disabled: !editedText.value.trim() || __props.isEditSubmitting,
					loading: __props.isEditSubmitting,
					onClick: handleConfirmEdit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.edit.send")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])], 2)], 2)
			], 6)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", {
				"data-test-id": "chat-message-content",
				class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.errorMessage]: __props.message.status === "error" }])
			}, [attachments.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.attachments)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments.value, (attachment, index) => {
				return openBlock(), createBlock(ChatFile_default, {
					key: index,
					file: attachment.file,
					"is-removable": false,
					href: attachment.downloadUrl
				}, null, 8, ["file", "href"]);
			}), 128))], 2)) : createCommentVNode("", true), __props.message.type === "human" ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(text.value), 1)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.markdownContent)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(messageChunks.value, (chunk, index) => {
				return openBlock(), createBlock(ChatMarkdownChunk_default, {
					ref_for: true,
					ref: "markdownChunk",
					key: index,
					source: chunk,
					"is-buttons-disabled": __props.message.status !== "waiting",
					onOpenArtifact: _cache[1] || (_cache[1] = ($event) => emit("openArtifact", $event))
				}, null, 8, ["source", "is-buttons-disabled"]);
			}), 128)), activeCodeBlockTeleport.value ? (openBlock(), createBlock(Teleport, {
				key: 0,
				to: activeCodeBlockTeleport.value.target
			}, [createVNode(CopyButton_default, { content: activeCodeBlockTeleport.value.content }, null, 8, ["content"])], 8, ["to"])) : createCommentVNode("", true)], 2))], 2), shouldShowTypingIndicator.value ? (openBlock(), createBlock(ChatTypingIndicator_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.typingIndicator)
			}, null, 8, ["class"])) : (openBlock(), createBlock(ChatMessageActions_default, {
				key: 1,
				"is-speech-synthesis-available": unref(speech).isSupported.value,
				"is-speaking": unref(speech).isPlaying.value,
				class: normalizeClass(_ctx.$style.actions),
				message: __props.message,
				"has-session-streaming": __props.hasSessionStreaming,
				onEdit: handleEdit,
				onRegenerate: handleRegenerate,
				onReadAloud: handleReadAloud,
				onSwitchAlternative: handleSwitchAlternative
			}, null, 8, [
				"is-speech-synthesis-available",
				"is-speaking",
				"class",
				"message",
				"has-session-streaming"
			]))], 64))], 2)], 14, _hoisted_1$2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatMessage.vue?vue&type=style&index=0&lang.module.scss
var message = "_message_mth14_388";
var markdownContent = "_markdownContent_mth14_393";
var avatar = "_avatar_mth14_409";
var compact = "_compact_mth14_422";
var content = "_content_mth14_428";
var actions = "_actions_mth14_434";
var attachments$1 = "_attachments_mth14_440";
var chatMessage = "_chatMessage_mth14_445";
var editContainer = "_editContainer_mth14_448";
var user = "_user_mth14_464";
var errorMessage = "_errorMessage_mth14_475";
var textarea = "_textarea_mth14_507";
var fileInput$2 = "_fileInput_mth14_520";
var editFooter = "_editFooter_mth14_524";
var editActions = "_editActions_mth14_538";
var typingIndicator = "_typingIndicator_mth14_544";
var shimmer$5 = "_shimmer_mth14_1";
var spin$5 = "_spin_mth14_1";
var opacityPulse$5 = "_opacityPulse_mth14_1";
var popoverIn$5 = "_popoverIn_mth14_1";
var fadeIn$5 = "_fadeIn_mth14_1";
var collapsibleSlideDown$5 = "_collapsibleSlideDown_mth14_1";
var collapsibleSlideUp$5 = "_collapsibleSlideUp_mth14_1";
var collapsibleSlideDownBlurred$5 = "_collapsibleSlideDownBlurred_mth14_1";
var collapsibleSlideUpBlurred$5 = "_collapsibleSlideUpBlurred_mth14_1";
var blurSwapIn$5 = "_blurSwapIn_mth14_1";
var blurSwapOut$5 = "_blurSwapOut_mth14_1";
var pulseGlow$5 = "_pulseGlow_mth14_1";
var pulseGlowDelayed$5 = "_pulseGlowDelayed_mth14_1";
var fade$5 = "_fade_mth14_1";
var fadeInUp$5 = "_fadeInUp_mth14_1";
var fadeInDown$5 = "_fadeInDown_mth14_1";
var fadeInLeft$5 = "_fadeInLeft_mth14_1";
var fadeInRight$5 = "_fadeInRight_mth14_1";
var fadeOut$5 = "_fadeOut_mth14_1";
var fadeOutDown$5 = "_fadeOutDown_mth14_1";
var fadeOutUp$5 = "_fadeOutUp_mth14_1";
var fadeOutLeft$5 = "_fadeOutLeft_mth14_1";
var fadeOutRight$5 = "_fadeOutRight_mth14_1";
var ping$5 = "_ping_mth14_1";
var blinkBackground$5 = "_blinkBackground_mth14_1";
var typingBlink$5 = "_typingBlink_mth14_1";
var ChatMessage_vue_vue_type_style_index_0_lang_module_default = {
	message,
	markdownContent,
	avatar,
	compact,
	content,
	actions,
	attachments: attachments$1,
	chatMessage,
	editContainer,
	user,
	errorMessage,
	textarea,
	fileInput: fileInput$2,
	editFooter,
	editActions,
	typingIndicator,
	shimmer: shimmer$5,
	spin: spin$5,
	"skeleton-pulse": "_skeleton-pulse_mth14_1",
	opacityPulse: opacityPulse$5,
	popoverIn: popoverIn$5,
	fadeIn: fadeIn$5,
	collapsibleSlideDown: collapsibleSlideDown$5,
	collapsibleSlideUp: collapsibleSlideUp$5,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$5,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$5,
	blurSwapIn: blurSwapIn$5,
	blurSwapOut: blurSwapOut$5,
	pulseGlow: pulseGlow$5,
	pulseGlowDelayed: pulseGlowDelayed$5,
	fade: fade$5,
	fadeInUp: fadeInUp$5,
	fadeInDown: fadeInDown$5,
	fadeInLeft: fadeInLeft$5,
	fadeInRight: fadeInRight$5,
	fadeOut: fadeOut$5,
	fadeOutDown: fadeOutDown$5,
	fadeOutUp: fadeOutUp$5,
	fadeOutLeft: fadeOutLeft$5,
	fadeOutRight: fadeOutRight$5,
	ping: ping$5,
	blinkBackground: blinkBackground$5,
	typingBlink: typingBlink$5
};
var ChatMessage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatPromptCallouts.vue?vue&type=script&setup=true&lang.ts
var ChatPromptCallouts_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPromptCallouts",
	props: {
		showMissingAgentCallout: { type: Boolean },
		showMissingCredentialsCallout: { type: Boolean },
		showDynamicCredentialsMissingCallout: { type: Boolean },
		showCreditsClaimedCallout: { type: Boolean },
		isNewSession: { type: Boolean },
		llmProvider: {},
		aiCreditsQuota: {},
		compact: { type: Boolean }
	},
	emits: [
		"selectModel",
		"setCredentials",
		"dismissCreditsCallout",
		"openDynamicCredentials"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return __props.showMissingAgentCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				icon: "info",
				theme: "secondary",
				class: normalizeClass([_ctx.$style.callout, { [_ctx.$style.calloutCompact]: __props.compact }])
			}, {
				default: withCtx(() => [createVNode(unref(I18nT), {
					keypath: __props.isNewSession ? "chatHub.chat.prompt.callout.selectModel.new" : "chatHub.chat.prompt.callout.selectModel.existing",
					tag: "span",
					scope: "global"
				}, {
					link: withCtx(() => [createBaseVNode("a", {
						href: "",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("selectModel"), ["prevent"]))
					}, toDisplayString(unref(i18n).baseText(__props.isNewSession ? "chatHub.chat.prompt.callout.selectModel.new.link" : "chatHub.chat.prompt.callout.selectModel.existing.link")), 1)]),
					_: 1
				}, 8, ["keypath"])]),
				_: 1
			}, 8, ["class"])) : __props.showMissingCredentialsCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				icon: "info",
				theme: "secondary",
				class: normalizeClass([_ctx.$style.callout, { [_ctx.$style.calloutCompact]: __props.compact }])
			}, {
				default: withCtx(() => [createVNode(unref(I18nT), {
					keypath: __props.isNewSession ? "chatHub.chat.prompt.callout.setCredentials.new" : "chatHub.chat.prompt.callout.setCredentials.existing",
					tag: "span",
					scope: "global"
				}, {
					link: withCtx(() => [createBaseVNode("a", {
						href: "",
						onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("setCredentials", __props.llmProvider), ["prevent"]))
					}, toDisplayString(unref(i18n).baseText(__props.isNewSession ? "chatHub.chat.prompt.callout.setCredentials.new.link" : "chatHub.chat.prompt.callout.setCredentials.existing.link")), 1)]),
					provider: withCtx(() => [createTextVNode(toDisplayString(unref(providerDisplayNames)[__props.llmProvider]), 1)]),
					_: 1
				}, 8, ["keypath"])]),
				_: 1
			}, 8, ["class"])) : __props.showDynamicCredentialsMissingCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "warning",
				class: normalizeClass([_ctx.$style.callout, { [_ctx.$style.calloutCompact]: __props.compact }]),
				"data-testid": "dynamic-credentials-missing-callout"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "warning",
					"native-type": "button",
					size: "small",
					"data-testid": "dynamic-credentials-connect-button",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("openDynamicCredentials"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.prompt.callout.dynamicCredentials.missing.button")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.isNewSession ? "chatHub.chat.prompt.callout.dynamicCredentials.missing" : "chatHub.chat.prompt.callout.dynamicCredentials.expired")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["class"])) : __props.showCreditsClaimedCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 3,
				icon: "info",
				theme: "secondary",
				class: normalizeClass([_ctx.$style.callout, { [_ctx.$style.calloutCompact]: __props.compact }])
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "x",
					title: "Dismiss",
					size: "medium",
					type: "secondary",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("dismissCreditsCallout"))
				})]),
				default: withCtx(() => [
					createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.chatHub.beginning")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), { bold: "" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.chatHub.credits", { interpolate: { amount: __props.aiCreditsQuota } })), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.chatHub.end")), 1)]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatPromptCallouts.vue?vue&type=style&index=0&lang.module.scss
var callout = "_callout_sj0kb_388";
var calloutCompact = "_calloutCompact_sj0kb_394";
var shimmer$4 = "_shimmer_sj0kb_1";
var spin$4 = "_spin_sj0kb_1";
var opacityPulse$4 = "_opacityPulse_sj0kb_1";
var popoverIn$4 = "_popoverIn_sj0kb_1";
var fadeIn$4 = "_fadeIn_sj0kb_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_sj0kb_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_sj0kb_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_sj0kb_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_sj0kb_1";
var blurSwapIn$4 = "_blurSwapIn_sj0kb_1";
var blurSwapOut$4 = "_blurSwapOut_sj0kb_1";
var pulseGlow$4 = "_pulseGlow_sj0kb_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_sj0kb_1";
var fade$4 = "_fade_sj0kb_1";
var fadeInUp$4 = "_fadeInUp_sj0kb_1";
var fadeInDown$4 = "_fadeInDown_sj0kb_1";
var fadeInLeft$4 = "_fadeInLeft_sj0kb_1";
var fadeInRight$4 = "_fadeInRight_sj0kb_1";
var fadeOut$4 = "_fadeOut_sj0kb_1";
var fadeOutDown$4 = "_fadeOutDown_sj0kb_1";
var fadeOutUp$4 = "_fadeOutUp_sj0kb_1";
var fadeOutLeft$4 = "_fadeOutLeft_sj0kb_1";
var fadeOutRight$4 = "_fadeOutRight_sj0kb_1";
var ping$4 = "_ping_sj0kb_1";
var blinkBackground$4 = "_blinkBackground_sj0kb_1";
var typingBlink$4 = "_typingBlink_sj0kb_1";
var ChatPromptCallouts_vue_vue_type_style_index_0_lang_module_default = {
	callout,
	calloutCompact,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_sj0kb_1",
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
var ChatPromptCallouts_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatPromptCallouts_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPromptCallouts_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatPromptCompact.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["accept"];
var ChatPromptCompact_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPromptCompact",
	props: {
		message: {},
		attachments: {},
		placeholder: {},
		messagingState: {},
		acceptedMimeTypes: {},
		canUploadFiles: { type: Boolean },
		isSpeechSupported: { type: Boolean },
		isListening: { type: Boolean }
	},
	emits: [
		"submit",
		"update:message",
		"fileSelect",
		"attach",
		"mic",
		"stop",
		"removeAttachment"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		__expose({
			inputRef,
			fileInputRef
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("form", {
				class: normalizeClass(_ctx.$style.prompt),
				onSubmit: _cache[7] || (_cache[7] = withModifiers(($event) => emit("submit"), ["prevent"]))
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWrap) }, [
				renderSlot(_ctx.$slots, "callouts"),
				createBaseVNode("input", {
					ref_key: "fileInputRef",
					ref: fileInputRef,
					type: "file",
					class: normalizeClass(_ctx.$style.fileInput),
					accept: __props.acceptedMimeTypes,
					multiple: "",
					onChange: _cache[0] || (_cache[0] = ($event) => emit("fileSelect", $event))
				}, null, 42, _hoisted_1$1),
				createVNode(unref(N8nChatInput_default), {
					ref_key: "inputRef",
					ref: inputRef,
					"model-value": props.message,
					placeholder: __props.placeholder,
					streaming: __props.messagingState === "receiving",
					disabled: __props.messagingState !== "idle",
					"submit-disabled": __props.messagingState !== "idle" || !__props.message.trim(),
					autosize: {
						minRows: 1,
						maxRows: 3
					},
					"send-button-test-id": "chat-hub-send-message-button",
					"stop-button-test-id": "chat-hub-send-message-button",
					autofocus: "",
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => emit("update:message", $event)),
					onSubmit: _cache[5] || (_cache[5] = ($event) => emit("submit")),
					onStop: _cache[6] || (_cache[6] = ($event) => emit("stop"))
				}, {
					leading: withCtx(() => [__props.attachments.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.compactAttachments)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.attachments, (file, index) => {
						return openBlock(), createBlock(ChatFile_default, {
							key: index,
							file,
							"is-previewable": true,
							"is-removable": __props.messagingState === "idle",
							onRemove: _cache[1] || (_cache[1] = ($event) => emit("removeAttachment", $event))
						}, null, 8, ["file", "is-removable"]);
					}), 128))], 2)) : createCommentVNode("", true)]),
					"right-actions": withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: !__props.canUploadFiles ? unref(i18n).baseText("chatHub.chat.prompt.button.attach.disabled") : unref(i18n).baseText("chatHub.chat.prompt.button.attach"),
						disabled: __props.canUploadFiles && __props.messagingState === "idle",
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							disabled: __props.messagingState !== "idle" || !__props.canUploadFiles,
							icon: "paperclip",
							"icon-size": "large",
							onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("attach"), ["stop"]))
						}, null, 8, ["disabled"])]),
						_: 1
					}, 8, ["content", "disabled"]), __props.isSpeechSupported ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("chatHub.chat.prompt.button.voiceInput"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							disabled: __props.messagingState !== "idle",
							icon: __props.isListening ? "square" : "mic",
							class: normalizeClass({ [_ctx.$style.recording]: __props.isListening }),
							"icon-size": "large",
							onClick: _cache[3] || (_cache[3] = withModifiers(($event) => emit("mic"), ["stop"]))
						}, null, 8, [
							"disabled",
							"icon",
							"class"
						])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"model-value",
					"placeholder",
					"streaming",
					"disabled",
					"submit-disabled"
				])
			], 2)], 34);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatPromptCompact.vue?vue&type=style&index=0&lang.module.scss
var prompt$1 = "_prompt_gp2e7_388";
var inputWrap = "_inputWrap_gp2e7_389";
var fileInput$1 = "_fileInput_gp2e7_393";
var compactAttachments = "_compactAttachments_gp2e7_397";
var recording$1 = "_recording_gp2e7_403";
var shimmer$3 = "_shimmer_gp2e7_1";
var spin$3 = "_spin_gp2e7_1";
var opacityPulse$3 = "_opacityPulse_gp2e7_1";
var popoverIn$3 = "_popoverIn_gp2e7_1";
var fadeIn$3 = "_fadeIn_gp2e7_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_gp2e7_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_gp2e7_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_gp2e7_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_gp2e7_1";
var blurSwapIn$3 = "_blurSwapIn_gp2e7_1";
var blurSwapOut$3 = "_blurSwapOut_gp2e7_1";
var pulseGlow$3 = "_pulseGlow_gp2e7_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_gp2e7_1";
var fade$3 = "_fade_gp2e7_1";
var fadeInUp$3 = "_fadeInUp_gp2e7_1";
var fadeInDown$3 = "_fadeInDown_gp2e7_1";
var fadeInLeft$3 = "_fadeInLeft_gp2e7_1";
var fadeInRight$3 = "_fadeInRight_gp2e7_1";
var fadeOut$3 = "_fadeOut_gp2e7_1";
var fadeOutDown$3 = "_fadeOutDown_gp2e7_1";
var fadeOutUp$3 = "_fadeOutUp_gp2e7_1";
var fadeOutLeft$3 = "_fadeOutLeft_gp2e7_1";
var fadeOutRight$3 = "_fadeOutRight_gp2e7_1";
var ping$3 = "_ping_gp2e7_1";
var blinkBackground$3 = "_blinkBackground_gp2e7_1";
var typingBlink$3 = "_typingBlink_gp2e7_1";
var ChatPromptCompact_vue_vue_type_style_index_0_lang_module_default = {
	prompt: prompt$1,
	inputWrap,
	fileInput: fileInput$1,
	compactAttachments,
	recording: recording$1,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_gp2e7_1",
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
	fadeInUp: fadeInUp$3,
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
var ChatPromptCompact_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatPromptCompact_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPromptCompact_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatPromptFull.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["accept"];
var ChatPromptFull_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPromptFull",
	props: {
		message: {},
		attachments: {},
		placeholder: {},
		messagingState: {},
		acceptedMimeTypes: {},
		canUploadFiles: { type: Boolean },
		isSpeechSupported: { type: Boolean },
		isListening: { type: Boolean },
		checkedToolIds: {},
		customAgentId: {},
		isToolsSelectable: { type: Boolean },
		selectedModel: {}
	},
	emits: [
		"submit",
		"update:message",
		"fileSelect",
		"attach",
		"mic",
		"stop",
		"removeAttachment",
		"toolToggle"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		__expose({
			inputRef,
			fileInputRef
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("form", {
				class: normalizeClass(_ctx.$style.prompt),
				onSubmit: _cache[8] || (_cache[8] = withModifiers(($event) => emit("submit"), ["prevent"]))
			}, [
				createBaseVNode("input", {
					ref_key: "fileInputRef",
					ref: fileInputRef,
					type: "file",
					class: normalizeClass(_ctx.$style.fileInput),
					accept: __props.acceptedMimeTypes,
					multiple: "",
					onChange: _cache[0] || (_cache[0] = ($event) => emit("fileSelect", $event))
				}, null, 42, _hoisted_1),
				renderSlot(_ctx.$slots, "callouts"),
				createVNode(unref(N8nChatInput_default), {
					ref_key: "inputRef",
					ref: inputRef,
					"model-value": props.message,
					placeholder: __props.placeholder,
					streaming: __props.messagingState === "receiving",
					disabled: __props.messagingState !== "idle",
					"submit-disabled": __props.messagingState !== "idle" || !__props.message.trim(),
					autosize: {
						minRows: 1,
						maxRows: 6
					},
					"send-button-test-id": "chat-hub-send-message-button",
					"stop-button-test-id": "chat-hub-send-message-button",
					autofocus: "",
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => emit("update:message", $event)),
					onSubmit: _cache[6] || (_cache[6] = ($event) => emit("submit")),
					onStop: _cache[7] || (_cache[7] = ($event) => emit("stop"))
				}, {
					leading: withCtx(() => [__props.attachments.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.attachments)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.attachments, (file, index) => {
						return openBlock(), createBlock(ChatFile_default, {
							key: index,
							file,
							"is-previewable": true,
							"is-removable": __props.messagingState === "idle",
							onRemove: _cache[1] || (_cache[1] = ($event) => emit("removeAttachment", $event))
						}, null, 8, ["file", "is-removable"]);
					}), 128))], 2)) : createCommentVNode("", true)]),
					"left-actions": withCtx(() => [createVNode(ToolsSelector_default, {
						class: normalizeClass(_ctx.$style.toolsButton),
						"checked-tool-ids": __props.checkedToolIds,
						"custom-agent-id": __props.customAgentId,
						disabled: __props.messagingState !== "idle" || !__props.isToolsSelectable,
						"disabled-tooltip": __props.isToolsSelectable ? void 0 : __props.selectedModel ? unref(i18n).baseText("chatHub.tools.selector.disabled.tooltip") : unref(i18n).baseText("chatHub.tools.selector.disabled.noModel.tooltip"),
						onToggle: _cache[2] || (_cache[2] = ($event) => emit("toolToggle", $event))
					}, null, 8, [
						"class",
						"checked-tool-ids",
						"custom-agent-id",
						"disabled",
						"disabled-tooltip"
					])]),
					"right-actions": withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: !__props.canUploadFiles ? unref(i18n).baseText("chatHub.chat.prompt.button.attach.disabled") : unref(i18n).baseText("chatHub.chat.prompt.button.attach"),
						disabled: __props.canUploadFiles && __props.messagingState === "idle",
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							disabled: __props.messagingState !== "idle" || !__props.canUploadFiles,
							icon: "paperclip",
							"icon-size": "large",
							onClick: _cache[3] || (_cache[3] = withModifiers(($event) => emit("attach"), ["stop"]))
						}, null, 8, ["disabled"])]),
						_: 1
					}, 8, ["content", "disabled"]), __props.isSpeechSupported ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("chatHub.chat.prompt.button.voiceInput"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							disabled: __props.messagingState !== "idle",
							icon: __props.isListening ? "square" : "mic",
							class: normalizeClass({ [_ctx.$style.recording]: __props.isListening }),
							"icon-size": "large",
							onClick: _cache[4] || (_cache[4] = withModifiers(($event) => emit("mic"), ["stop"]))
						}, null, 8, [
							"disabled",
							"icon",
							"class"
						])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"model-value",
					"placeholder",
					"streaming",
					"disabled",
					"submit-disabled"
				])
			], 34);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatPromptFull.vue?vue&type=style&index=0&lang.module.scss
var prompt = "_prompt_27kr4_388";
var fileInput = "_fileInput_27kr4_392";
var toolsButton = "_toolsButton_27kr4_396";
var attachments = "_attachments_27kr4_401";
var recording = "_recording_27kr4_407";
var shimmer$2 = "_shimmer_27kr4_1";
var spin$2 = "_spin_27kr4_1";
var opacityPulse$2 = "_opacityPulse_27kr4_1";
var popoverIn$2 = "_popoverIn_27kr4_1";
var fadeIn$2 = "_fadeIn_27kr4_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_27kr4_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_27kr4_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_27kr4_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_27kr4_1";
var blurSwapIn$2 = "_blurSwapIn_27kr4_1";
var blurSwapOut$2 = "_blurSwapOut_27kr4_1";
var pulseGlow$2 = "_pulseGlow_27kr4_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_27kr4_1";
var fade$2 = "_fade_27kr4_1";
var fadeInUp$2 = "_fadeInUp_27kr4_1";
var fadeInDown$2 = "_fadeInDown_27kr4_1";
var fadeInLeft$2 = "_fadeInLeft_27kr4_1";
var fadeInRight$2 = "_fadeInRight_27kr4_1";
var fadeOut$2 = "_fadeOut_27kr4_1";
var fadeOutDown$2 = "_fadeOutDown_27kr4_1";
var fadeOutUp$2 = "_fadeOutUp_27kr4_1";
var fadeOutLeft$2 = "_fadeOutLeft_27kr4_1";
var fadeOutRight$2 = "_fadeOutRight_27kr4_1";
var ping$2 = "_ping_27kr4_1";
var blinkBackground$2 = "_blinkBackground_27kr4_1";
var typingBlink$2 = "_typingBlink_27kr4_1";
var ChatPromptFull_vue_vue_type_style_index_0_lang_module_default = {
	prompt,
	fileInput,
	toolsButton,
	attachments,
	recording,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_27kr4_1",
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
var ChatPromptFull_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatPromptFull_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPromptFull_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatPrompt.vue
var ChatPrompt_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPrompt",
	props: {
		messagingState: {},
		isNewSession: { type: Boolean },
		isToolsSelectable: { type: Boolean },
		selectedModel: {},
		checkedToolIds: {},
		sessionId: {},
		customAgentId: {},
		showCreditsClaimedCallout: { type: Boolean },
		showDynamicCredentialsMissingCallout: { type: Boolean },
		aiCreditsQuota: {},
		compact: { type: Boolean },
		placeholder: {}
	},
	emits: [
		"submit",
		"stop",
		"selectModel",
		"setCredentials",
		"editAgent",
		"dismissCreditsCallout",
		"openDynamicCredentials"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const chatStore = useChatStore();
		const emit = __emit;
		const activePromptRef = ref();
		const message = ref("");
		const committedSpokenMessage = ref("");
		const attachments = ref([]);
		const toast = useToast();
		const i18n = useI18n();
		const speechInput = useSpeechRecognition({
			continuous: true,
			interimResults: true,
			lang: navigator.language
		});
		const placeholder = computed(() => {
			if (props.placeholder) return props.placeholder;
			if (props.selectedModel) return i18n.baseText("chatHub.chat.prompt.placeholder.withModel", { interpolate: { model: props.selectedModel.name ?? "a model" } });
			return i18n.baseText("chatHub.chat.prompt.placeholder.selectModel");
		});
		const llmProvider = computed(() => isLlmProviderModel(props.selectedModel?.model) ? props.selectedModel?.model.provider : void 0);
		const acceptedMimeTypes = computed(() => enrichMimeTypesWithExtensions(props.selectedModel?.metadata.allowedFilesMimeTypes ?? ""));
		const canUploadFiles = computed(() => props.selectedModel?.metadata.allowFileUploads ?? false);
		const showMissingAgentCallout = computed(() => props.messagingState === "missingAgent");
		const showMissingCredentialsCallout = computed(() => props.messagingState === "missingCredentials" && !!llmProvider.value);
		function onMic() {
			committedSpokenMessage.value = message.value;
			if (speechInput.isListening.value) speechInput.stop();
			else speechInput.start();
		}
		function onStop() {
			emit("stop");
		}
		function onAttach() {
			activePromptRef.value?.fileInputRef?.click();
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			const allowed = acceptedMimeTypes.value;
			const accepted = [];
			const rejected = [];
			for (const file of Array.from(files)) if (isFileAcceptedByAccept(file.name, file.type, allowed)) accepted.push(file);
			else rejected.push(file);
			for (const file of accepted) attachments.value.push(file);
			for (const file of rejected) toast.showMessage({
				type: "warning",
				title: i18n.baseText("chatHub.chat.attachments.unsupported.title"),
				message: i18n.baseText("chatHub.chat.attachments.unsupported.toast", { interpolate: { fileName: file.name } })
			});
			if (target) target.value = "";
			activePromptRef.value?.inputRef?.focusInput();
		}
		function removeAttachment(removed) {
			attachments.value = attachments.value.filter((attachment) => attachment !== removed);
		}
		function handleSubmitForm() {
			const trimmed = message.value.trim();
			if (trimmed) {
				speechInput.stop();
				emit("submit", trimmed, attachments.value);
			}
		}
		watch(speechInput.result, (spoken) => {
			message.value = committedSpokenMessage.value + " " + spoken.trimStart();
		});
		watch(speechInput.isFinal, (final) => {
			if (final) committedSpokenMessage.value = message.value;
		}, { flush: "post" });
		watch(speechInput.error, (event) => {
			const errorCode = event && "error" in event ? event.error : void 0;
			if (errorCode === "not-allowed") {
				toast.showError(new Error(i18n.baseText("chatHub.chat.prompt.microphone.accessDenied")), i18n.baseText("chatHub.chat.prompt.microphone.allowAccess"));
				return;
			}
			if (errorCode === "no-speech") toast.showMessage({
				title: i18n.baseText("chatHub.chat.prompt.microphone.noSpeech"),
				type: "warning"
			});
		});
		async function handleToolToggle(toolId) {
			if (props.customAgentId) {
				await chatStore.toggleCustomAgentTool(props.customAgentId, toolId);
				return;
			}
			if (props.sessionId) {
				await chatStore.toggleSessionTool(props.sessionId, toolId);
				return;
			}
			const tool = chatStore.configuredTools.find((t) => t.definition.id === toolId);
			if (tool) await chatStore.toggleToolEnabled(toolId, !tool.enabled);
		}
		__expose({
			focus: () => activePromptRef.value?.inputRef?.focusInput(),
			reset: () => {
				message.value = "";
				committedSpokenMessage.value = "";
				attachments.value = [];
			},
			setText: (text) => {
				message.value = text;
			},
			appendText: (text) => {
				message.value += text;
			},
			addAttachments: (files) => {
				attachments.value.push(...files);
				activePromptRef.value?.inputRef?.focusInput();
			}
		});
		return (_ctx, _cache) => {
			return __props.compact ? (openBlock(), createBlock(ChatPromptCompact_default, {
				key: 0,
				ref_key: "activePromptRef",
				ref: activePromptRef,
				message: message.value,
				"onUpdate:message": _cache[4] || (_cache[4] = ($event) => message.value = $event),
				attachments: attachments.value,
				placeholder: placeholder.value,
				"messaging-state": __props.messagingState,
				"accepted-mime-types": acceptedMimeTypes.value,
				"can-upload-files": canUploadFiles.value,
				"is-speech-supported": unref(speechInput).isSupported.value,
				"is-listening": unref(speechInput).isListening.value,
				onSubmit: handleSubmitForm,
				onFileSelect: handleFileSelect,
				onAttach,
				onMic,
				onStop,
				onRemoveAttachment: removeAttachment
			}, {
				callouts: withCtx(() => [createVNode(ChatPromptCallouts_default, {
					"show-missing-agent-callout": showMissingAgentCallout.value,
					"show-missing-credentials-callout": showMissingCredentialsCallout.value,
					"show-dynamic-credentials-missing-callout": __props.showDynamicCredentialsMissingCallout,
					"show-credits-claimed-callout": __props.showCreditsClaimedCallout,
					"is-new-session": __props.isNewSession,
					"llm-provider": llmProvider.value,
					"ai-credits-quota": __props.aiCreditsQuota,
					compact: "",
					onSelectModel: _cache[0] || (_cache[0] = ($event) => emit("selectModel")),
					onSetCredentials: _cache[1] || (_cache[1] = ($event) => emit("setCredentials", $event)),
					onDismissCreditsCallout: _cache[2] || (_cache[2] = ($event) => emit("dismissCreditsCallout")),
					onOpenDynamicCredentials: _cache[3] || (_cache[3] = ($event) => emit("openDynamicCredentials"))
				}, null, 8, [
					"show-missing-agent-callout",
					"show-missing-credentials-callout",
					"show-dynamic-credentials-missing-callout",
					"show-credits-claimed-callout",
					"is-new-session",
					"llm-provider",
					"ai-credits-quota"
				])]),
				_: 1
			}, 8, [
				"message",
				"attachments",
				"placeholder",
				"messaging-state",
				"accepted-mime-types",
				"can-upload-files",
				"is-speech-supported",
				"is-listening"
			])) : (openBlock(), createBlock(ChatPromptFull_default, {
				key: 1,
				ref_key: "activePromptRef",
				ref: activePromptRef,
				message: message.value,
				"onUpdate:message": _cache[9] || (_cache[9] = ($event) => message.value = $event),
				attachments: attachments.value,
				placeholder: placeholder.value,
				"messaging-state": __props.messagingState,
				"accepted-mime-types": acceptedMimeTypes.value,
				"can-upload-files": canUploadFiles.value,
				"is-speech-supported": unref(speechInput).isSupported.value,
				"is-listening": unref(speechInput).isListening.value,
				"checked-tool-ids": __props.checkedToolIds,
				"custom-agent-id": __props.customAgentId,
				"is-tools-selectable": __props.isToolsSelectable,
				"selected-model": __props.selectedModel,
				onSubmit: handleSubmitForm,
				onFileSelect: handleFileSelect,
				onAttach,
				onMic,
				onStop,
				onRemoveAttachment: removeAttachment,
				onToolToggle: handleToolToggle
			}, {
				callouts: withCtx(() => [createVNode(ChatPromptCallouts_default, {
					"show-missing-agent-callout": showMissingAgentCallout.value,
					"show-missing-credentials-callout": showMissingCredentialsCallout.value,
					"show-dynamic-credentials-missing-callout": __props.showDynamicCredentialsMissingCallout,
					"show-credits-claimed-callout": __props.showCreditsClaimedCallout,
					"is-new-session": __props.isNewSession,
					"llm-provider": llmProvider.value,
					"ai-credits-quota": __props.aiCreditsQuota,
					onSelectModel: _cache[5] || (_cache[5] = ($event) => emit("selectModel")),
					onSetCredentials: _cache[6] || (_cache[6] = ($event) => emit("setCredentials", $event)),
					onDismissCreditsCallout: _cache[7] || (_cache[7] = ($event) => emit("dismissCreditsCallout")),
					onOpenDynamicCredentials: _cache[8] || (_cache[8] = ($event) => emit("openDynamicCredentials"))
				}, null, 8, [
					"show-missing-agent-callout",
					"show-missing-credentials-callout",
					"show-dynamic-credentials-missing-callout",
					"show-credits-claimed-callout",
					"is-new-session",
					"llm-provider",
					"ai-credits-quota"
				])]),
				_: 1
			}, 8, [
				"message",
				"attachments",
				"placeholder",
				"messaging-state",
				"accepted-mime-types",
				"can-upload-files",
				"is-speech-supported",
				"is-listening",
				"checked-tool-ids",
				"custom-agent-id",
				"is-tools-selectable",
				"selected-model"
			]));
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatSuggestedPrompts.vue?vue&type=script&setup=true&lang.ts
var DEFAULT_PROMPT_ICON = "message-circle";
var ChatSuggestedPrompts_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSuggestedPrompts",
	props: { prompts: {} },
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		function getIconName(icon) {
			if (icon?.type === "emoji") return void 0;
			return icon?.value ?? DEFAULT_PROMPT_ICON;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.prompts, (prompt) => {
				return openBlock(), createBlock(unref(N8nButton_default), {
					key: prompt.text,
					variant: "outline",
					size: "small",
					icon: getIconName(prompt.icon),
					"icon-size": "large",
					class: normalizeClass(_ctx.$style.chip),
					onClick: ($event) => emit("select", prompt.text)
				}, createSlots({
					default: withCtx(() => [createTextVNode(" " + toDisplayString(prompt.text), 1)]),
					_: 2
				}, [prompt.icon?.type === "emoji" ? {
					name: "icon",
					fn: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.emoji) }, toDisplayString(prompt.icon.value), 3)]),
					key: "0"
				} : void 0]), 1032, [
					"icon",
					"class",
					"onClick"
				]);
			}), 128))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatSuggestedPrompts.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_hcgqn_388";
var chip = "_chip_hcgqn_395";
var emoji = "_emoji_hcgqn_402";
var shimmer$1 = "_shimmer_hcgqn_1";
var spin$1 = "_spin_hcgqn_1";
var opacityPulse$1 = "_opacityPulse_hcgqn_1";
var popoverIn$1 = "_popoverIn_hcgqn_1";
var fadeIn$1 = "_fadeIn_hcgqn_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_hcgqn_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_hcgqn_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_hcgqn_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_hcgqn_1";
var blurSwapIn$1 = "_blurSwapIn_hcgqn_1";
var blurSwapOut$1 = "_blurSwapOut_hcgqn_1";
var pulseGlow$1 = "_pulseGlow_hcgqn_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_hcgqn_1";
var fade$1 = "_fade_hcgqn_1";
var fadeInUp$1 = "_fadeInUp_hcgqn_1";
var fadeInDown$1 = "_fadeInDown_hcgqn_1";
var fadeInLeft$1 = "_fadeInLeft_hcgqn_1";
var fadeInRight$1 = "_fadeInRight_hcgqn_1";
var fadeOut$1 = "_fadeOut_hcgqn_1";
var fadeOutDown$1 = "_fadeOutDown_hcgqn_1";
var fadeOutUp$1 = "_fadeOutUp_hcgqn_1";
var fadeOutLeft$1 = "_fadeOutLeft_hcgqn_1";
var fadeOutRight$1 = "_fadeOutRight_hcgqn_1";
var ping$1 = "_ping_hcgqn_1";
var blinkBackground$1 = "_blinkBackground_hcgqn_1";
var typingBlink$1 = "_typingBlink_hcgqn_1";
var ChatSuggestedPrompts_vue_vue_type_style_index_0_lang_module_default = {
	container,
	chip,
	emoji,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_hcgqn_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
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
var ChatSuggestedPrompts_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSuggestedPrompts_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSuggestedPrompts_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatGreetings.vue?vue&type=script&setup=true&lang.ts
var ChatGreetings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatGreetings",
	props: {
		selectedAgent: {},
		loading: { type: Boolean }
	},
	emits: ["select-prompt"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const isAgentModel = computed(() => props.selectedAgent && !isLlmProviderModel(props.selectedAgent.model));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				key: "greetings",
				class: normalizeClass(_ctx.$style.greetings)
			}, [isAgentModel.value && __props.selectedAgent ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.agentCard)
			}, [__props.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nLoading_default), { variant: "circle" }), createVNode(unref(N8nLoading_default), {
				rows: 1,
				variant: "p",
				class: normalizeClass(_ctx.$style.skeletonName)
			}, null, 8, ["class"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(ChatAgentAvatar_default, {
				agent: __props.selectedAgent,
				size: "xl"
			}, null, 8, ["agent"]), createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "xlarge",
				class: normalizeClass(_ctx.$style.agentName)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(truncate)(__props.selectedAgent.name, 40)), 1)]),
				_: 1
			}, 8, ["class"])], 64)), __props.loading ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nLoading_default), {
				rows: 3,
				variant: "p",
				"shrink-last": false,
				class: normalizeClass(_ctx.$style.skeletonDescription)
			}, null, 8, ["class"]), createBaseVNode("div", { class: normalizeClass([_ctx.$style.suggestions, _ctx.$style.skeletonPrompts]) }, [createVNode(unref(N8nLoading_default), {
				rows: 1,
				variant: "p",
				class: normalizeClass(_ctx.$style.skeletonChip)
			}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
				rows: 1,
				variant: "p",
				class: normalizeClass(_ctx.$style.skeletonChip)
			}, null, 8, ["class"])], 2)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [__props.selectedAgent.description ? (openBlock(), createElementBlock("p", {
				key: 0,
				class: normalizeClass(_ctx.$style.agentDescription)
			}, toDisplayString(__props.selectedAgent.description), 3)) : createCommentVNode("", true), __props.selectedAgent.suggestedPrompts?.length ? (openBlock(), createBlock(ChatSuggestedPrompts_default, {
				key: 1,
				class: normalizeClass(_ctx.$style.suggestions),
				prompts: __props.selectedAgent.suggestedPrompts,
				onSelect: _cache[0] || (_cache[0] = ($event) => emit("select-prompt", $event))
			}, null, 8, ["class", "prompts"])) : createCommentVNode("", true)], 64))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.header)
			}, [__props.selectedAgent ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createVNode(unref(N8nHeading_default), { tag: "h2" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.greeting")), 1)]),
					_: 1
				}),
				createVNode(ChatAgentAvatar_default, {
					agent: __props.selectedAgent,
					size: "md",
					class: normalizeClass(_ctx.$style.inlineIcon)
				}, null, 8, ["agent", "class"]),
				createVNode(unref(N8nHeading_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(truncate)(__props.selectedAgent.name, 40)), 1)]),
					_: 1
				})
			], 64)) : (openBlock(), createBlock(unref(N8nHeading_default), {
				key: 1,
				tag: "h2"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.greeting.fallback")), 1)]),
				_: 1
			}))], 2))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatGreetings.vue?vue&type=style&index=0&lang.module.scss
var greetings = "_greetings_154y6_388";
var agentCard = "_agentCard_154y6_395";
var agentName = "_agentName_154y6_403";
var agentDescription = "_agentDescription_154y6_411";
var suggestions = "_suggestions_154y6_421";
var skeletonName = "_skeletonName_154y6_425";
var skeletonDescription = "_skeletonDescription_154y6_430";
var skeletonPrompts = "_skeletonPrompts_154y6_435";
var skeletonChip = "_skeletonChip_154y6_441";
var header = "_header_154y6_445";
var inlineIcon = "_inlineIcon_154y6_451";
var shimmer = "_shimmer_154y6_1";
var spin = "_spin_154y6_1";
var opacityPulse = "_opacityPulse_154y6_1";
var popoverIn = "_popoverIn_154y6_1";
var fadeIn = "_fadeIn_154y6_1";
var collapsibleSlideDown = "_collapsibleSlideDown_154y6_1";
var collapsibleSlideUp = "_collapsibleSlideUp_154y6_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_154y6_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_154y6_1";
var blurSwapIn = "_blurSwapIn_154y6_1";
var blurSwapOut = "_blurSwapOut_154y6_1";
var pulseGlow = "_pulseGlow_154y6_1";
var pulseGlowDelayed = "_pulseGlowDelayed_154y6_1";
var fade = "_fade_154y6_1";
var fadeInUp = "_fadeInUp_154y6_1";
var fadeInDown = "_fadeInDown_154y6_1";
var fadeInLeft = "_fadeInLeft_154y6_1";
var fadeInRight = "_fadeInRight_154y6_1";
var fadeOut = "_fadeOut_154y6_1";
var fadeOutDown = "_fadeOutDown_154y6_1";
var fadeOutUp = "_fadeOutUp_154y6_1";
var fadeOutLeft = "_fadeOutLeft_154y6_1";
var fadeOutRight = "_fadeOutRight_154y6_1";
var ping = "_ping_154y6_1";
var blinkBackground = "_blinkBackground_154y6_1";
var typingBlink = "_typingBlink_154y6_1";
var ChatGreetings_vue_vue_type_style_index_0_lang_module_default = {
	greetings,
	agentCard,
	agentName,
	agentDescription,
	suggestions,
	skeletonName,
	skeletonDescription,
	skeletonPrompts,
	skeletonChip,
	header,
	inlineIcon,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_154y6_1",
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
	blinkBackground,
	typingBlink
};
var ChatGreetings_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatGreetings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatGreetings_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useChatSession as i, ChatPrompt_default as n, ChatMessage_default as r, ChatGreetings_default as t };
