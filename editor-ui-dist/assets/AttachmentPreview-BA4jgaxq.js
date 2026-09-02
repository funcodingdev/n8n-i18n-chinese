import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { T as useSpeechRecognition } from "./dist-BKkqSB6h.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nChatInput_default } from "./N8nChatInput-DRzszglJ.js";
import { Ga as formatAttachmentSizeLimit, Ka as formatTotalAttachmentSizeLimit, Wa as exceedsAttachmentSizeLimit, za as base64EncodedSize } from "./src-DAIlllTg.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { t as ChatFile_default } from "./ChatFile-C2sStvps.js";
//#region src/features/ai/shared/components/ChatInputBase.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["accept"];
var ChatInputBase_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatInputBase",
	props: {
		modelValue: {},
		placeholder: { default: void 0 },
		isStreaming: { type: Boolean },
		canSubmit: { type: Boolean },
		disabled: { type: Boolean },
		showVoice: { type: Boolean },
		showAttach: { type: Boolean },
		showAttachButton: {
			type: Boolean,
			default: true
		},
		acceptedMimeTypes: { default: void 0 },
		attachedEncodedBytes: { default: 0 },
		autosize: {
			type: [Boolean, Object],
			default: () => ({
				minRows: 2,
				maxRows: 6
			})
		},
		buttonLabel: { default: void 0 },
		activeRequiresFocus: {
			type: Boolean,
			default: false
		},
		maxLength: { default: void 0 }
	},
	emits: [
		"update:modelValue",
		"submit",
		"stop",
		"tab",
		"files-selected"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		const isFocused = ref(false);
		const submitMuted = computed(() => props.activeRequiresFocus && !isFocused.value);
		const committedSpokenMessage = ref("");
		const speechInput = useSpeechRecognition({
			continuous: true,
			interimResults: true,
			lang: navigator.language
		});
		watch(speechInput.result, (spoken) => {
			if (props.showVoice) {
				const prefix = committedSpokenMessage.value;
				emit("update:modelValue", prefix + (prefix.length > 0 ? " " : "") + spoken.trimStart());
			}
		});
		watch(speechInput.isFinal, (final) => {
			if (final && props.showVoice) committedSpokenMessage.value = props.modelValue;
		}, { flush: "post" });
		function handleMic() {
			committedSpokenMessage.value = props.modelValue;
			if (speechInput.isListening.value) speechInput.stop();
			else speechInput.start();
		}
		function handleAttach() {
			fileInputRef.value?.click();
		}
		function focusInput(options) {
			inputRef.value?.focusInput(options);
		}
		/**
		* Keep the files the backend will accept and warn about the rest.
		*
		* Checked here only so the user finds out before uploading megabytes — the backend
		* enforces the same limits authoritatively. Both checks convert to the encoded size
		* first: the limits are denominated in base64 bytes, so comparing `File.size` against
		* them directly would admit files ~4/3 too large.
		*/
		function withinSizeLimit(files) {
			const oversized = files.filter((file) => exceedsAttachmentSizeLimit(file.size));
			if (oversized.length > 0) toast.showError(new Error(i18n.baseText("chat.attachment.tooLarge.message", { interpolate: {
				fileNames: oversized.map((file) => file.name).join(", "),
				limit: formatAttachmentSizeLimit()
			} })), i18n.baseText("chat.attachment.tooLarge.title"));
			let usedBytes = props.attachedEncodedBytes;
			const accepted = [];
			let droppedForBudget = false;
			for (const file of files) {
				if (exceedsAttachmentSizeLimit(file.size)) continue;
				const encoded = base64EncodedSize(file.size);
				if (usedBytes + encoded > 16777216) {
					droppedForBudget = true;
					continue;
				}
				usedBytes += encoded;
				accepted.push(file);
			}
			if (droppedForBudget) toast.showError(new Error(i18n.baseText("chat.attachment.totalTooLarge.message", { interpolate: { limit: formatTotalAttachmentSizeLimit() } })), i18n.baseText("chat.attachment.totalTooLarge.title"));
			return accepted;
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			const accepted = withinSizeLimit(Array.from(files));
			if (accepted.length > 0) emit("files-selected", accepted);
			target.value = "";
			focusInput();
		}
		function handlePaste(e) {
			if (!props.showAttach || !e.clipboardData?.files.length) return;
			const files = Array.from(e.clipboardData.files);
			if (files.length > 0) {
				e.preventDefault();
				const accepted = withinSizeLimit(files);
				if (accepted.length > 0) emit("files-selected", accepted);
			}
		}
		function handleKeydown(e) {
			if (e.key === "Tab" && !e.shiftKey) {
				e.preventDefault();
				emit("tab");
			}
		}
		function handleSubmit() {
			if (!props.canSubmit) return;
			speechInput.stop();
			emit("submit");
		}
		__expose({
			focus: focusInput,
			openFilePicker: handleAttach
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.inputWrapper, {
					[_ctx.$style.focusGatedSubmit]: __props.activeRequiresFocus,
					[_ctx.$style.submitMuted]: submitMuted.value
				}]),
				onPaste: handlePaste,
				onKeydownCapture: handleKeydown
			}, [__props.showAttach ? (openBlock(), createElementBlock("input", {
				key: 0,
				ref_key: "fileInputRef",
				ref: fileInputRef,
				type: "file",
				class: normalizeClass(_ctx.$style.fileInput),
				accept: __props.acceptedMimeTypes,
				multiple: "",
				onChange: handleFileSelect
			}, null, 42, _hoisted_1$1)) : createCommentVNode("", true), createVNode(unref(N8nChatInput_default), {
				ref_key: "inputRef",
				ref: inputRef,
				"model-value": __props.modelValue,
				placeholder: __props.placeholder,
				streaming: __props.isStreaming,
				disabled: __props.disabled,
				"submit-disabled": !__props.canSubmit,
				"button-label": props.buttonLabel,
				"send-button-test-id": "instance-ai-send-button",
				"stop-button-test-id": "instance-ai-stop-button",
				autosize: __props.autosize,
				layout: __props.autosize === false ? "single-line" : "multiline",
				"max-length": __props.maxLength,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
				onSubmit: handleSubmit,
				onStop: _cache[1] || (_cache[1] = ($event) => emit("stop")),
				onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
				onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false)
			}, {
				leading: withCtx(() => [renderSlot(_ctx.$slots, "attachments")]),
				"left-actions": withCtx(() => [renderSlot(_ctx.$slots, "footer-start")]),
				"right-actions": withCtx(() => [__props.showAttach && __props.showAttachButton ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(i18n).baseText("chatInputBase.button.attach"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						disabled: __props.disabled || __props.isStreaming,
						icon: "paperclip",
						"icon-size": "large",
						"data-test-id": "chat-input-attach-button",
						onClick: withModifiers(handleAttach, ["stop"])
					}, null, 8, ["disabled"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true), __props.showVoice && unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					content: unref(i18n).baseText("chatInputBase.button.dictate"),
					placement: "top"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						disabled: __props.disabled || __props.isStreaming,
						icon: unref(speechInput).isListening.value ? "square" : "mic",
						class: normalizeClass({ [_ctx.$style.recording]: unref(speechInput).isListening.value }),
						"icon-size": "large",
						"data-test-id": "chat-input-voice-button",
						onClick: withModifiers(handleMic, ["stop"])
					}, null, 8, [
						"disabled",
						"icon",
						"class"
					])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"model-value",
				"placeholder",
				"streaming",
				"disabled",
				"submit-disabled",
				"button-label",
				"autosize",
				"layout",
				"max-length"
			])], 34);
		};
	}
});
//#endregion
//#region src/features/ai/shared/components/ChatInputBase.vue?vue&type=style&index=0&lang.module.scss
var inputWrapper = "_inputWrapper_1tohw_389";
var fileInput = "_fileInput_1tohw_393";
var recording = "_recording_1tohw_397";
var focusGatedSubmit = "_focusGatedSubmit_1tohw_403";
var submitMuted = "_submitMuted_1tohw_407";
var shimmer$1 = "_shimmer_1tohw_1";
var spin$1 = "_spin_1tohw_1";
var opacityPulse$1 = "_opacityPulse_1tohw_1";
var popoverIn$1 = "_popoverIn_1tohw_1";
var fadeIn$1 = "_fadeIn_1tohw_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1tohw_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1tohw_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1tohw_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1tohw_1";
var blurSwapIn$1 = "_blurSwapIn_1tohw_1";
var blurSwapOut$1 = "_blurSwapOut_1tohw_1";
var pulseGlow$1 = "_pulseGlow_1tohw_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1tohw_1";
var fade$1 = "_fade_1tohw_1";
var fadeInUp$1 = "_fadeInUp_1tohw_1";
var fadeInDown$1 = "_fadeInDown_1tohw_1";
var fadeInLeft$1 = "_fadeInLeft_1tohw_1";
var fadeInRight$1 = "_fadeInRight_1tohw_1";
var fadeOut$1 = "_fadeOut_1tohw_1";
var fadeOutDown$1 = "_fadeOutDown_1tohw_1";
var fadeOutUp$1 = "_fadeOutUp_1tohw_1";
var fadeOutLeft$1 = "_fadeOutLeft_1tohw_1";
var fadeOutRight$1 = "_fadeOutRight_1tohw_1";
var ping$1 = "_ping_1tohw_1";
var blinkBackground$1 = "_blinkBackground_1tohw_1";
var typingBlink$1 = "_typingBlink_1tohw_1";
var ChatInputBase_vue_vue_type_style_index_0_lang_module_default = {
	inputWrapper,
	fileInput,
	recording,
	focusGatedSubmit,
	submitMuted,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1tohw_1",
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
var ChatInputBase_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatInputBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatInputBase_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AttachmentPreview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["src", "alt"];
var AttachmentPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AttachmentPreview",
	props: {
		file: {},
		attachment: {},
		isRemovable: { type: Boolean }
	},
	emits: ["remove"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const loading = ref(true);
		const workflowAttachment = computed(() => props.attachment?.type === "workflow" ? props.attachment : void 0);
		const agentAttachment = computed(() => props.attachment?.type === "agent" ? props.attachment : void 0);
		const fileAttachment = computed(() => props.attachment?.type === "file" ? props.attachment : void 0);
		const mimeType = computed(() => props.file?.type ?? fileAttachment.value?.mimeType ?? "");
		const fileName = computed(() => props.file?.name ?? fileAttachment.value?.fileName ?? "");
		const isImage = computed(() => mimeType.value.startsWith("image/"));
		const objectUrl = computed(() => {
			if (props.file && isImage.value) return URL.createObjectURL(props.file);
			return null;
		});
		const thumbnailSrc = computed(() => {
			if (objectUrl.value) return objectUrl.value;
			if (fileAttachment.value && isImage.value) return `data:${fileAttachment.value.mimeType};base64,${fileAttachment.value.data}`;
			return null;
		});
		const fallbackFile = computed(() => {
			if (props.file) return props.file;
			if (fileAttachment.value) return new File([], fileAttachment.value.fileName, { type: fileAttachment.value.mimeType });
			return new File([], "unknown");
		});
		function handleLoad() {
			loading.value = false;
		}
		function handleRemove() {
			if (props.file) emit("remove", props.file);
		}
		onBeforeUnmount(() => {
			if (objectUrl.value) URL.revokeObjectURL(objectUrl.value);
		});
		return (_ctx, _cache) => {
			return workflowAttachment.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.resourceChip),
				"data-test-id": "attachment-preview-resource"
			}, [
				createVNode(unref(N8nIcon_default), {
					icon: "workflow",
					size: "small"
				}),
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.resourceName) }, toDisplayString(workflowAttachment.value.name ?? "Workflow"), 3),
				workflowAttachment.value.executionId ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "play",
					size: "xsmall"
				})) : createCommentVNode("", true)
			], 2)) : agentAttachment.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.resourceChip),
				"data-test-id": "attachment-preview-resource"
			}, [createVNode(unref(N8nIcon_default), {
				icon: "robot",
				size: "small"
			}), createBaseVNode("span", { class: normalizeClass(_ctx.$style.resourceName) }, toDisplayString(agentAttachment.value.name ?? "Agent"), 3)], 2)) : isImage.value && thumbnailSrc.value ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.thumbnailWrapper)
			}, [
				loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loadingSkeleton)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					spin: "",
					size: "small"
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("img", {
					src: thumbnailSrc.value,
					alt: fileName.value,
					class: normalizeClass(_ctx.$style.thumbnail),
					onLoad: handleLoad
				}, null, 42, _hoisted_1),
				__props.isRemovable ? (openBlock(), createElementBlock("button", {
					key: 1,
					class: normalizeClass(_ctx.$style.removeBtn),
					"data-test-id": "attachment-preview-remove",
					onClick: withModifiers(handleRemove, ["stop"])
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: "small"
				})], 2)) : createCommentVNode("", true)
			], 2)) : (openBlock(), createBlock(ChatFile_default, {
				key: 3,
				file: fallbackFile.value,
				"is-removable": __props.isRemovable ?? false,
				onRemove: _cache[0] || (_cache[0] = ($event) => emit("remove", $event))
			}, null, 8, ["file", "is-removable"]));
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/AttachmentPreview.vue?vue&type=style&index=0&lang.module.scss
var resourceChip = "_resourceChip_1u8q7_388";
var resourceName = "_resourceName_1u8q7_401";
var thumbnailWrapper = "_thumbnailWrapper_1u8q7_408";
var thumbnail = "_thumbnail_1u8q7_408";
var loadingSkeleton = "_loadingSkeleton_1u8q7_425";
var removeBtn = "_removeBtn_1u8q7_435";
var shimmer = "_shimmer_1u8q7_1";
var spin = "_spin_1u8q7_1";
var opacityPulse = "_opacityPulse_1u8q7_1";
var popoverIn = "_popoverIn_1u8q7_1";
var fadeIn = "_fadeIn_1u8q7_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1u8q7_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1u8q7_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1u8q7_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1u8q7_1";
var blurSwapIn = "_blurSwapIn_1u8q7_1";
var blurSwapOut = "_blurSwapOut_1u8q7_1";
var pulseGlow = "_pulseGlow_1u8q7_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1u8q7_1";
var fade = "_fade_1u8q7_1";
var fadeInUp = "_fadeInUp_1u8q7_1";
var fadeInDown = "_fadeInDown_1u8q7_1";
var fadeInLeft = "_fadeInLeft_1u8q7_1";
var fadeInRight = "_fadeInRight_1u8q7_1";
var fadeOut = "_fadeOut_1u8q7_1";
var fadeOutDown = "_fadeOutDown_1u8q7_1";
var fadeOutUp = "_fadeOutUp_1u8q7_1";
var fadeOutLeft = "_fadeOutLeft_1u8q7_1";
var fadeOutRight = "_fadeOutRight_1u8q7_1";
var ping = "_ping_1u8q7_1";
var blinkBackground = "_blinkBackground_1u8q7_1";
var typingBlink = "_typingBlink_1u8q7_1";
var AttachmentPreview_vue_vue_type_style_index_0_lang_module_default = {
	resourceChip,
	resourceName,
	thumbnailWrapper,
	thumbnail,
	loadingSkeleton,
	removeBtn,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1u8q7_1",
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
var AttachmentPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AttachmentPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AttachmentPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatInputBase_default as n, AttachmentPreview_default as t };
