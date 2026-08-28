import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, Ut as toValue, Vt as toRef, W as nextTick, X as onMounted, bn as normalizeStyle, bt as withCtx, f as vModelText, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useI18n } from "./useI18n-CBepoSka.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { h as useEventListener, s as useActiveElement } from "./dist-BKkqSB6h.js";
import { t as useAutosizeTextarea } from "./useAutosizeTextarea-DfiUCd-R.js";
import { n as Tooltip_default } from "./N8nTooltip-DborXEyr.js";
import { n as Callout_default } from "./N8nCallout-DqmF6S4S.js";
//#region ../@n8n/design-system/src/composables/useCharacterLimit.ts
function useCharacterLimit({ value, maxLength }) {
	const characterCount = computed(() => value.value.length);
	return {
		characterCount,
		remainingCharacters: computed(() => maxLength.value - characterCount.value),
		isOverLimit: computed(() => characterCount.value > maxLength.value),
		isAtLimit: computed(() => characterCount.value >= maxLength.value)
	};
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nSendStopButton/index.ts
var N8nSendStopButton_default = /* @__PURE__ */ defineComponent({
	__name: "N8nSendStopButton",
	props: {
		streaming: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		size: { default: "medium" },
		label: { default: void 0 },
		sendButtonTestId: { default: "send-message-button" },
		stopButtonTestId: { default: "send-message-button" }
	},
	emits: ["send", "stop"],
	setup(__props, { emit: __emit }) {
		const { t } = useI18n();
		const emit = __emit;
		function handleSend() {
			emit("send");
		}
		function handleStop() {
			emit("stop");
		}
		return (_ctx, _cache) => {
			return __props.streaming ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				variant: "solid",
				"icon-only": "",
				"aria-label": unref(t)("sendStopButton.stop"),
				size: __props.size,
				icon: "filled-square",
				"icon-size": "small",
				"data-test-id": __props.stopButtonTestId,
				onClick: handleStop
			}, null, 8, [
				"aria-label",
				"size",
				"data-test-id"
			])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: "solid",
				size: __props.size,
				"icon-size": "large",
				"icon-only": !__props.label,
				icon: __props.label ? void 0 : "arrow-up",
				"aria-label": __props.label ? void 0 : unref(t)("sendStopButton.send"),
				disabled: __props.disabled,
				"data-test-id": __props.sendButtonTestId,
				onClick: handleSend
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
				_: 1
			}, 8, [
				"size",
				"icon-only",
				"icon",
				"aria-label",
				"disabled",
				"data-test-id"
			]));
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nChatInput/ChatInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"placeholder",
	"disabled",
	"maxlength"
];
var INFINITE_CREDITS = -1;
var ChatInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nChatInput",
	inheritAttrs: false,
	__name: "ChatInput",
	props: {
		modelValue: { default: "" },
		placeholder: { default: "" },
		maxLength: { default: 5e3 },
		maxLinesBeforeScroll: { default: 10 },
		streaming: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		disabledTooltip: { default: void 0 },
		creditsQuota: { default: void 0 },
		creditsRemaining: { default: void 0 },
		showAskOwnerTooltip: {
			type: Boolean,
			default: false
		},
		refocusAfterSend: {
			type: Boolean,
			default: false
		},
		autofocus: {
			type: Boolean,
			default: false
		},
		buttonLabel: { default: void 0 },
		layout: { default: "multiline" },
		autosize: {
			type: [Boolean, Object],
			default: true
		},
		submitDisabled: {
			type: Boolean,
			default: void 0
		},
		sendButtonTestId: { default: "send-message-button" },
		stopButtonTestId: { default: "send-message-button" }
	},
	emits: [
		"update:modelValue",
		"submit",
		"stop",
		"focus",
		"blur",
		"upgrade-click"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { t } = useI18n();
		const textareaRef = ref();
		const isFocused = ref(false);
		const textValue = ref(props.modelValue || "");
		const autosizeRows = computed(() => typeof props.autosize === "object" ? props.autosize : {
			minRows: 1,
			maxRows: props.maxLinesBeforeScroll
		});
		const isAutosizeEnabled = computed(() => props.layout !== "single-line" && props.autosize !== false);
		const { textareaStyles, calculateTextareaHeight, clearTextareaHeight } = useAutosizeTextarea({
			textarea: textareaRef,
			enabled: isAutosizeEnabled,
			rows: autosizeRows
		});
		const { characterCount, isOverLimit, isAtLimit } = useCharacterLimit({
			value: textValue,
			maxLength: toRef(props, "maxLength")
		});
		const showWarningBanner = computed(() => isAtLimit.value);
		const sendDisabled = computed(() => props.submitDisabled ?? (!textValue.value.trim() || props.streaming || props.disabled || isOverLimit.value || props.creditsRemaining === 0));
		const containerStyle = computed(() => {
			return props.layout === "single-line" ? void 0 : { minHeight: "80px" };
		});
		const hasNoCredits = computed(() => {
			return props.creditsQuota !== void 0 && props.creditsRemaining !== void 0 && props.creditsQuota !== INFINITE_CREDITS && props.creditsRemaining === 0;
		});
		const textareaStyle = computed(() => isAutosizeEnabled.value ? textareaStyles.value : void 0);
		function adjustHeight() {
			if (!isAutosizeEnabled.value) {
				clearTextareaHeight();
				return;
			}
			calculateTextareaHeight();
		}
		watch(() => props.modelValue, async (newValue) => {
			textValue.value = newValue || "";
			await nextTick();
			if (props.layout === "single-line" || props.autosize === false) return;
			await new Promise(requestAnimationFrame);
			adjustHeight();
		});
		watch([() => props.layout, () => props.autosize], ([layout, autosize]) => {
			if (layout === "single-line" || autosize === false) {
				clearTextareaHeight();
				return;
			}
			nextTick(() => adjustHeight());
		});
		watch(textValue, (newValue, oldValue) => {
			emit("update:modelValue", newValue);
			if (props.layout === "single-line" || props.autosize === false) return;
			if (newValue !== oldValue) nextTick(() => adjustHeight());
		});
		async function refocusTextArea() {
			await nextTick();
			await new Promise(requestAnimationFrame);
			focusInput();
		}
		async function handleSubmit() {
			emit("submit");
			if (props.refocusAfterSend) await refocusTextArea();
		}
		async function handleStop() {
			emit("stop");
			if (props.refocusAfterSend) await refocusTextArea();
		}
		async function handleKeyDown(event) {
			if (props.layout === "single-line" && event.key === "Enter" && !event.isComposing) {
				event.preventDefault();
				if (!sendDisabled.value) await handleSubmit();
				return;
			}
			const hasModifier = event.ctrlKey || event.metaKey;
			const isPrintableChar = event.key.length === 1 && !hasModifier;
			const isDeletionKey = event.key === "Backspace" || event.key === "Delete";
			const atMaxLength = characterCount.value >= props.maxLength;
			const isSubmitKey = event.key === "Enter" && !event.shiftKey && !event.isComposing;
			const isNewlineKey = event.key === "Enter" && event.shiftKey;
			if (atMaxLength && isPrintableChar && !isDeletionKey) {
				event.preventDefault();
				return;
			}
			if (isSubmitKey) {
				event.preventDefault();
				if (!sendDisabled.value) await handleSubmit();
			}
			if (isNewlineKey) {
				event.preventDefault();
				const textarea = event.target;
				const start = textarea.selectionStart;
				const end = textarea.selectionEnd;
				textValue.value = textValue.value.substring(0, start) + "\n" + textValue.value.substring(end);
				await nextTick();
				if (textareaRef.value) textareaRef.value.selectionStart = textareaRef.value.selectionEnd = start + 1;
			}
		}
		function handleFocus(event) {
			isFocused.value = true;
			emit("focus", event);
		}
		function handleBlur(event) {
			isFocused.value = false;
			emit("blur", event);
		}
		function handleContainerClick() {
			if (isFocused.value || props.disabled || hasNoCredits.value) return;
			focusInput();
		}
		function handleFocusableRegionClick(event) {
			if (event.target !== event.currentTarget) return;
			handleContainerClick();
		}
		function focusInput(options) {
			textareaRef.value?.focus(options);
		}
		onMounted(() => {
			nextTick(() => adjustHeight());
			if (props.autofocus) focusInput();
		});
		__expose({ focusInput });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Tooltip_default, {
				disabled: !__props.disabled || !__props.disabledTooltip,
				content: __props.disabledTooltip,
				placement: "top"
			}, {
				default: withCtx(() => [createBaseVNode("div", mergeProps(_ctx.$attrs, { class: _ctx.$style.wrapper }), [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.container, {
						[_ctx.$style.focused]: isFocused.value,
						[_ctx.$style.disabled]: __props.disabled || hasNoCredits.value,
						[_ctx.$style.singleLineContainer]: __props.layout === "single-line"
					}]),
					style: normalizeStyle(containerStyle.value),
					onClick: withModifiers(handleContainerClick, ["self"])
				}, [
					renderSlot(_ctx.$slots, "leading"),
					showWarningBanner.value ? (openBlock(), createBlock(Callout_default, {
						key: 0,
						slim: "",
						icon: "info",
						theme: "warning"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("assistantChat.characterLimit", { limit: __props.maxLength.toString() })), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					withDirectives(createBaseVNode("textarea", {
						ref_key: "textareaRef",
						ref: textareaRef,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => textValue.value = $event),
						class: normalizeClass([
							_ctx.$style.textarea,
							{ [_ctx.$style.singleLineTextarea]: __props.layout === "single-line" },
							"ignore-key-press-node-creator",
							"ignore-key-press-canvas"
						]),
						style: normalizeStyle(textareaStyle.value),
						placeholder: hasNoCredits.value ? "" : __props.placeholder,
						disabled: __props.disabled || hasNoCredits.value,
						maxlength: __props.maxLength,
						onKeydown: handleKeyDown,
						onFocus: handleFocus,
						onBlur: handleBlur,
						onInput: _cache[1] || (_cache[1] = ($event) => __props.layout === "single-line" || __props.autosize === false ? void 0 : adjustHeight),
						onClick: handleFocusableRegionClick
					}, null, 46, _hoisted_1), [[vModelText, textValue.value]]),
					createBaseVNode("div", {
						class: normalizeClass([_ctx.$style.bottomActions, { [_ctx.$style.singleLineActions]: __props.layout === "single-line" }]),
						onClick: handleFocusableRegionClick
					}, [_ctx.$slots["left-actions"] || _ctx.$slots.actions || _ctx.$slots["extra-actions"] ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.leftActions),
						onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
					}, [renderSlot(_ctx.$slots, "left-actions", {}, () => [renderSlot(_ctx.$slots, "actions", {}, () => [renderSlot(_ctx.$slots, "extra-actions")])])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.rightActions) }, [_ctx.$slots["right-actions"] ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.actionsContent),
						onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
					}, [renderSlot(_ctx.$slots, "right-actions")], 2)) : createCommentVNode("", true), createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.actionsContent),
						onClick: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
					}, [createVNode(unref(N8nSendStopButton_default), {
						streaming: __props.streaming,
						disabled: sendDisabled.value,
						label: __props.buttonLabel,
						"send-button-test-id": __props.sendButtonTestId,
						"stop-button-test-id": __props.stopButtonTestId,
						onSend: handleSubmit,
						onStop: handleStop
					}, null, 8, [
						"streaming",
						"disabled",
						"label",
						"send-button-test-id",
						"stop-button-test-id"
					])], 2)], 2)], 2)
				], 6), _ctx.$slots.trailing && __props.layout !== "single-line" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.trailing)
				}, [renderSlot(_ctx.$slots, "trailing")], 2)) : createCommentVNode("", true)], 16)]),
				_: 3
			}, 8, ["disabled", "content"]);
		};
	}
});
var ChatInput_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_cfb2m_125",
	container: "_container_cfb2m_132",
	focused: "_focused_cfb2m_141",
	disabled: "_disabled_cfb2m_145",
	singleLineContainer: "_singleLineContainer_cfb2m_154",
	textarea: "_textarea_cfb2m_159",
	singleLineTextarea: "_singleLineTextarea_cfb2m_175",
	bottomActions: "_bottomActions_cfb2m_189",
	leftActions: "_leftActions_cfb2m_197",
	rightActions: "_rightActions_cfb2m_198",
	actionsContent: "_actionsContent_cfb2m_199",
	characterCount: "_characterCount_cfb2m_209",
	overLimit: "_overLimit_cfb2m_214",
	singleLineActions: "_singleLineActions_cfb2m_223",
	leading: "_leading_cfb2m_227"
};
var ChatInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nChatInput/useChatInputAutoFocus.ts
var DEFAULT_RESERVED_KEYS = ["["];
function isEditableElement(element) {
	if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) return !element.readOnly && !element.disabled;
	if (element instanceof HTMLSelectElement) return !element.disabled;
	return element instanceof HTMLElement && element.isContentEditable;
}
function hasModifierKey(event) {
	return event.ctrlKey || event.metaKey || event.altKey;
}
function isPrintableKey(event) {
	return event.key.length === 1;
}
function useChatInputAutoFocus(inputRef, options = {}) {
	const activeElement = useActiveElement();
	const isDisabled = computed(() => toValue(options.disabled) ?? false);
	const reservedKeys = computed(() => toValue(options.reservedKeys) ?? DEFAULT_RESERVED_KEYS);
	function onKeyDown(event) {
		if (isDisabled.value) return;
		if (event.defaultPrevented) return;
		if (event.isComposing) return;
		if (event.repeat) return;
		if (hasModifierKey(event)) return;
		if (!isPrintableKey(event)) return;
		if (reservedKeys.value.includes(event.key)) return;
		if (activeElement.value && isEditableElement(activeElement.value)) return;
		const input = inputRef.value;
		if (!input) return;
		event.preventDefault();
		input.appendText?.(event.key);
		input.focus();
	}
	useEventListener(document, "keydown", onKeyDown);
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nChatInput/index.ts
var N8nChatInput_default = ChatInput_default;
//#endregion
export { useChatInputAutoFocus as n, N8nSendStopButton_default as r, N8nChatInput_default as t };
