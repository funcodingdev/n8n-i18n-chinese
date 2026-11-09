import { $d as inject, Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Bu as useEventListener, Cf as watch, Gd as createVNode, Hd as createSlots, Id as Teleport, Kf as unref, Ld as computed, Nd as withModifiers, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Rf as ref, Td as init_runtime_dom_esm_bundler, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, Yd as guardReactiveProps, Zu as useSpeechRecognition, af as onBeforeUnmount, bf as useSlots, ep as init_shared_esm_bundler, ff as renderList, hp as normalizeStyle, mf as resolveComponent, mp as normalizeProps, nf as mergeProps, pf as renderSlot, pp as normalizeClass, qd as defineComponent, rf as nextTick, uf as openBlock, vf as useId, vp as toDisplayString, xf as useTemplateRef, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { BS as formatAttachmentSizeLimit, Bt as getRelativeDate, ED as N8nText_default, FD as N8nIcon_default, Hy as useToast, LS as base64EncodedSize, ND as N8nIconButton_default, OD as N8nTooltip_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, UD as useI18n, VS as formatTotalAttachmentSizeLimit, en as isFileAcceptedByAccept, fp as useWorkflowDocumentStore, hD as N8nActionDropdown_default, js as isNodeChipRemovalKey, op as createWorkflowDocumentId, ry as WorkflowIdKey, tu as NodeIcon_default, vD as DropdownMenu_default, wD as N8nChatInput_default, yp as useNodeTypesStore, zS as exceedsAttachmentSizeLimit } from "./app-DbOOaPK6.js";
import { t as ChatFile_default } from "./ChatFile-DMdn4Wyg.js";
import { t as useFileDrop } from "./useFileDrop-CjgkrBUK.js";
//#region src/features/ai/shared/components/ChatInputBase.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$4 = ["accept"];
var ChatInputBase_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ChatInputBase",
	props: {
		blockCanvasShortcuts: {
			type: Boolean,
			default: true
		},
		modelValue: {},
		placeholder: { default: void 0 },
		isStreaming: { type: Boolean },
		showStopButton: {
			type: Boolean,
			default: void 0
		},
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
		"files-selected",
		"files-rejected"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		const isFocused = ref(false);
		const canAcceptFiles = computed(() => Boolean(props.showAttach && !props.disabled && !props.isStreaming));
		const acceptedMimeTypeList = computed(() => (props.acceptedMimeTypes ?? "").split(",").map((type) => type.trim()).filter(Boolean));
		const fileDrop = useFileDrop(canAcceptFiles, handleFiles, acceptedMimeTypeList);
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
				const separator = prefix.length > 0 ? " " : "";
				emit("update:modelValue", prefix + separator + spoken.trimStart());
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
		/** Returns the native textarea while the component is mounted. */
		function getInputElement() {
			return inputRef.value?.getInputElement();
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
		function handleFiles(files) {
			const acceptedByType = files.filter((file) => isFileAcceptedByAccept(file.name, file.type, props.acceptedMimeTypes ?? ""));
			const rejected = files.filter((file) => !acceptedByType.includes(file));
			if (rejected.length > 0) emit("files-rejected", rejected);
			const accepted = withinSizeLimit(acceptedByType);
			if (accepted.length > 0) emit("files-selected", accepted);
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			handleFiles(Array.from(files));
			target.value = "";
			focusInput();
		}
		function handleKeydown(e) {
			const isTextareaFocused = e.target?.tagName === "TEXTAREA";
			if (e.key === "Tab" && !e.shiftKey && isTextareaFocused) {
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
			getInputElement,
			openFilePicker: handleAttach
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.inputWrapper, {
					[_ctx.$style.focusGatedSubmit]: __props.activeRequiresFocus,
					[_ctx.$style.submitMuted]: submitMuted.value
				}]),
				onDragenter: _cache[4] || (_cache[4] = (...args) => unref(fileDrop).handleDragEnter && unref(fileDrop).handleDragEnter(...args)),
				onDragleave: _cache[5] || (_cache[5] = (...args) => unref(fileDrop).handleDragLeave && unref(fileDrop).handleDragLeave(...args)),
				onDragover: _cache[6] || (_cache[6] = (...args) => unref(fileDrop).handleDragOver && unref(fileDrop).handleDragOver(...args)),
				onDrop: _cache[7] || (_cache[7] = (...args) => unref(fileDrop).handleDrop && unref(fileDrop).handleDrop(...args)),
				onPaste: _cache[8] || (_cache[8] = (...args) => unref(fileDrop).handlePaste && unref(fileDrop).handlePaste(...args)),
				onKeydownCapture: handleKeydown
			}, [
				renderSlot(_ctx.$slots, "above"),
				unref(fileDrop).isDragging.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.dropOverlay),
					"data-test-id": "chat-input-drop-overlay"
				}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatInputBase.dropOverlay")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				__props.showAttach ? (openBlock(), createElementBlock("input", {
					key: 1,
					ref_key: "fileInputRef",
					ref: fileInputRef,
					type: "file",
					class: normalizeClass(_ctx.$style.fileInput),
					accept: __props.acceptedMimeTypes,
					multiple: "",
					onChange: handleFileSelect
				}, null, 42, _hoisted_1$4)) : createCommentVNode("", true),
				createVNode(unref(N8nChatInput_default), {
					ref_key: "inputRef",
					ref: inputRef,
					"block-canvas-shortcuts": __props.blockCanvasShortcuts,
					"model-value": __props.modelValue,
					placeholder: __props.placeholder,
					streaming: __props.showStopButton ?? __props.isStreaming,
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
					leading: withCtx(() => [renderSlot(_ctx.$slots, "header"), renderSlot(_ctx.$slots, "attachments")]),
					"left-actions": withCtx(() => [renderSlot(_ctx.$slots, "footer-start")]),
					"right-actions": withCtx(() => [
						renderSlot(_ctx.$slots, "right-actions"),
						__props.showAttach && __props.showAttachButton && __props.acceptedMimeTypes !== void 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							content: unref(i18n).baseText("chatInputBase.button.attach"),
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								variant: "ghost",
								disabled: __props.disabled || __props.isStreaming,
								icon: "paperclip",
								"icon-size": "large",
								"aria-label": unref(i18n).baseText("chatInputBase.button.attach"),
								"data-test-id": "chat-input-attach-button",
								onClick: withModifiers(handleAttach, ["stop"])
							}, null, 8, ["disabled", "aria-label"])]),
							_: 1
						}, 8, ["content"])) : createCommentVNode("", true),
						__props.showVoice && unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 1,
							content: unref(i18n).baseText(__props.isStreaming ? "chatInputBase.button.dictate.stopResponse" : "chatInputBase.button.dictate"),
							placement: "top"
						}, {
							default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								variant: "ghost",
								disabled: __props.disabled || __props.isStreaming,
								icon: unref(speechInput).isListening.value ? "square" : "mic",
								class: normalizeClass({ [_ctx.$style.recording]: unref(speechInput).isListening.value }),
								"icon-size": "large",
								"aria-label": unref(i18n).baseText("chatInputBase.button.dictate"),
								"data-test-id": "chat-input-voice-button",
								onClick: withModifiers(handleMic, ["stop"])
							}, null, 8, [
								"disabled",
								"icon",
								"class",
								"aria-label"
							])]),
							_: 1
						}, 8, ["content"])) : createCommentVNode("", true)
					]),
					_: 3
				}, 8, [
					"block-canvas-shortcuts",
					"model-value",
					"placeholder",
					"streaming",
					"disabled",
					"submit-disabled",
					"button-label",
					"autosize",
					"layout",
					"max-length"
				])
			], 34);
		};
	}
}), [["__cssModules", { "$style": {
	inputWrapper: "_inputWrapper_1mwrv_2",
	dropOverlay: "_dropOverlay_1mwrv_7",
	fileInput: "_fileInput_1mwrv_21",
	recording: "_recording_1mwrv_25",
	focusGatedSubmit: "_focusGatedSubmit_1mwrv_31",
	submitMuted: "_submitMuted_1mwrv_35"
} }]]);
//#endregion
//#region src/features/ai/assistant-at-mentions/AssistantMentionBreadcrumbs.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
var AssistantMentionBreadcrumbs_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	name: "AssistantMentionBreadcrumbs",
	__name: "AssistantMentionBreadcrumbs",
	props: {
		segments: {},
		ancestor: {
			type: Boolean,
			default: false
		},
		wrap: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const parents = computed(() => props.segments.slice(0, -1));
		const current = computed(() => props.segments[props.segments.length - 1] ?? "");
		return (_ctx, _cache) => {
			const _component_AssistantMentionBreadcrumbs = resolveComponent("AssistantMentionBreadcrumbs", true);
			return openBlock(), createElementBlock("span", { class: normalizeClass([_ctx.$style.breadcrumbs, { [_ctx.$style.wrap]: __props.wrap }]) }, [parents.value.length > 0 ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.parents)
			}, [createVNode(_component_AssistantMentionBreadcrumbs, {
				segments: parents.value,
				ancestor: ""
			}, null, 8, ["segments"]), createBaseVNode("span", { class: normalizeClass([_ctx.$style.separator, _ctx.$style.breadcrumbAncestor]) }, " > ", 2)], 2)) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass([_ctx.$style.segment, { [_ctx.$style.breadcrumbAncestor]: __props.ancestor }]) }, toDisplayString(current.value), 3)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	breadcrumbs: "_breadcrumbs_m5r43_1",
	wrap: "_wrap_m5r43_6",
	parents: "_parents_m5r43_8",
	segment: "_segment_m5r43_9",
	separator: "_separator_m5r43_10",
	breadcrumbAncestor: "_breadcrumbAncestor_m5r43_40"
} }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiResourceChip.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$3 = ["data-test-id"];
var _hoisted_2$1 = ["aria-label", "data-test-id"];
var InstanceAiResourceChip_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "InstanceAiResourceChip",
	props: {
		label: {},
		breadcrumbs: {},
		icon: {},
		trailingIcon: {},
		removable: { type: Boolean },
		removeLabel: {},
		testId: {},
		removeTestId: {}
	},
	emits: ["remove"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const rootRef = useTemplateRef("root");
		const tooltipSegments = computed(() => props.breadcrumbs ?? [props.label]);
		__expose({ focus: () => rootRef.value?.focus() });
		function handleRemoveKeydown(event) {
			if (event.key !== "Escape") event.stopPropagation();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"as-child": "",
				"show-after": unref(500),
				"content-class": _ctx.$style.tooltip
			}, {
				content: withCtx(() => [createVNode(AssistantMentionBreadcrumbs_default, {
					segments: tooltipSegments.value,
					wrap: ""
				}, null, 8, ["segments"])]),
				default: withCtx(() => [createBaseVNode("div", mergeProps({ ref: "root" }, _ctx.$attrs, {
					class: _ctx.$style.resourceChip,
					"data-test-id": props.testId
				}), [
					props.removable || _ctx.$slots.icon || props.icon ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.leading)
					}, [renderSlot(_ctx.$slots, "icon", {}, () => [props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: props.icon,
						size: "small"
					}, null, 8, ["icon"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(props.label), 3),
					props.trailingIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: props.trailingIcon,
						size: "xsmall"
					}, null, 8, ["icon"])) : createCommentVNode("", true),
					props.removable ? (openBlock(), createElementBlock("button", {
						key: 2,
						type: "button",
						class: normalizeClass(_ctx.$style.remove),
						"aria-label": props.removeLabel,
						"data-test-id": props.removeTestId,
						onKeydown: handleRemoveKeydown,
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("remove"), ["stop"]))
					}, [createVNode(unref(N8nIcon_default), {
						icon: "x",
						size: "large"
					})], 42, _hoisted_2$1)) : createCommentVNode("", true)
				], 16, _hoisted_1$3)]),
				_: 3
			}, 8, ["show-after", "content-class"]);
		};
	}
}), [["__cssModules", { "$style": {
	tooltip: "_tooltip_18kfh_1",
	resourceChip: "_resourceChip_18kfh_6",
	leading: "_leading_18kfh_24",
	label: "_label_18kfh_33",
	remove: "_remove_18kfh_41"
} }]]);
//#endregion
//#region src/features/ai/instanceAi/components/NodeChip.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var NodeChip_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "NodeChip",
	props: {
		label: {},
		breadcrumbs: {},
		nodeType: {},
		testid: {},
		icon: {},
		removable: { type: Boolean },
		expanded: { type: [Boolean, null] }
	},
	emits: [
		"remove",
		"toggle-expand",
		"enter-panel"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const rootRef = useTemplateRef("root");
		__expose({ focus: () => rootRef.value?.focus() });
		function handleKeydown(event) {
			const isExpandable = props.expanded !== null && props.expanded !== void 0;
			if (event.key === "Enter" && isExpandable) {
				event.preventDefault();
				event.stopPropagation();
				emit("toggle-expand");
				return;
			}
			if (event.key === "Escape" && props.expanded === true) {
				event.preventDefault();
				event.stopPropagation();
				emit("toggle-expand");
				return;
			}
			if (event.key === "ArrowDown" && isExpandable) {
				event.preventDefault();
				event.stopPropagation();
				emit("enter-panel");
				return;
			}
			if (isNodeChipRemovalKey(event.key) && props.removable) {
				event.preventDefault();
				event.stopPropagation();
				emit("remove");
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(InstanceAiResourceChip_default, {
				ref: "root",
				class: normalizeClass({ [_ctx.$style.expandable]: __props.expanded != null }),
				label: __props.label,
				breadcrumbs: __props.breadcrumbs,
				removable: __props.removable,
				"remove-label": unref(i18n).baseText("generic.delete"),
				"test-id": __props.testid,
				"remove-test-id": "nodes-chip-remove",
				tabindex: "0",
				role: "group",
				"aria-label": __props.label,
				onKeydown: handleKeydown,
				onClick: _cache[0] || (_cache[0] = ($event) => __props.expanded != null && emit("toggle-expand")),
				onRemove: _cache[1] || (_cache[1] = ($event) => emit("remove"))
			}, {
				icon: withCtx(() => [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: __props.icon,
					size: "small"
				}, null, 8, ["icon"])) : __props.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
					key: 1,
					"node-type": __props.nodeType,
					size: 12
				}, null, 8, ["node-type"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 2,
					icon: "crosshair",
					size: "small"
				}))]),
				_: 1
			}, 8, [
				"class",
				"label",
				"breadcrumbs",
				"removable",
				"remove-label",
				"test-id",
				"aria-label"
			]);
		};
	}
}), [["__cssModules", { "$style": { expandable: "_expandable_19t4f_1" } }]]);
//#endregion
//#region src/features/ai/instanceAi/components/NodesAttachmentChips.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$2 = ["onFocusout"];
var _hoisted_2 = ["onFocusout"];
var _hoisted_3 = ["aria-label", "onKeydown"];
var _hoisted_4 = ["aria-label", "onClick"];
var NODE_BUNDLE_THRESHOLD = 2;
var COLLAPSE_CHIP_THRESHOLD = 6;
var NodesAttachmentChips_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "NodesAttachmentChips",
	props: {
		attachment: {},
		isRemovable: { type: Boolean }
	},
	emits: ["update:attachment", "remove-all"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const injectedWorkflowId = inject(WorkflowIdKey, computed(() => ""));
		const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(props.attachment.workflowId || injectedWorkflowId.value || "unknown")));
		function resolveAttachedNode(node) {
			const store = workflowDocumentStore.value;
			const workflowNode = store.getNodeById(node.id) ?? (node.name ? store.getNodeByName(node.name) : void 0) ?? null;
			const nodeType = workflowNode ? nodeTypesStore.getNodeType(workflowNode.type, workflowNode.typeVersion) : null;
			return {
				id: node.id,
				name: node.name ?? workflowNode?.name ?? "",
				nodeType,
				workflowNode
			};
		}
		const workflowName = computed(() => props.attachment.workflowName || workflowDocumentStore.value.name || void 0);
		function toBreadcrumbs(label) {
			return workflowName.value ? [workflowName.value, label] : [label];
		}
		function bundleLabel(count) {
			return i18n.baseText("instanceAi.nodeContext.nodesBundle", { interpolate: { count } });
		}
		const chips = computed(() => {
			return props.attachment.sets.map((set, setIndex) => {
				if (set.canvasGroupId) {
					const label = set.canvasGroupName || bundleLabel(set.nodes.length);
					return {
						key: `set-${setIndex}`,
						testid: "nodes-chip-group",
						label,
						breadcrumbs: toBreadcrumbs(label),
						icon: "group",
						setIndex
					};
				}
				if (set.nodes.length >= NODE_BUNDLE_THRESHOLD) {
					const label = bundleLabel(set.nodes.length);
					return {
						key: `set-${setIndex}`,
						testid: "nodes-chip-bundle",
						label,
						breadcrumbs: toBreadcrumbs(label),
						icon: "layers",
						setIndex,
						panel: set.nodes.map((node) => resolveAttachedNode(node))
					};
				}
				const resolved = resolveAttachedNode(set.nodes[0]);
				return {
					key: `set-${setIndex}`,
					testid: "nodes-chip-node",
					label: resolved.name,
					breadcrumbs: toBreadcrumbs(resolved.name),
					nodeType: resolved.nodeType,
					setIndex
				};
			});
		});
		function removeSet(index) {
			const sets = props.attachment.sets.filter((_, i) => i !== index);
			if (expandedSetIndex.value !== null) {
				if (expandedSetIndex.value === index) expandedSetIndex.value = null;
				else if (expandedSetIndex.value > index) expandedSetIndex.value -= 1;
			}
			if (!sets.length) {
				emit("remove-all");
				return;
			}
			emit("update:attachment", {
				...props.attachment,
				sets
			});
		}
		function removeNode(setIndex, nodeIndex) {
			const nodes = props.attachment.sets[setIndex].nodes.filter((_, i) => i !== nodeIndex);
			if (!nodes.length) {
				removeSet(setIndex);
				return;
			}
			const sets = props.attachment.sets.map((s, i) => i === setIndex ? {
				...s,
				nodes,
				inputNode: void 0,
				outputNode: void 0
			} : s);
			emit("update:attachment", {
				...props.attachment,
				sets
			});
		}
		function removeChip(chip) {
			if (chip.nodeIndex !== void 0) removeNode(chip.setIndex, chip.nodeIndex);
			else removeSet(chip.setIndex);
		}
		function handlePanelRowKeydown(setIndex, nodeIndex, event) {
			if (isNodeChipRemovalKey(event.key)) {
				event.preventDefault();
				event.stopPropagation();
				removeNode(setIndex, nodeIndex);
				focusPanelRowAfterRemoval(nodeIndex);
				return;
			}
			if (event.key === "ArrowDown" || event.key === "ArrowUp") {
				event.preventDefault();
				event.stopPropagation();
				const direction = event.key === "ArrowDown" ? 1 : -1;
				focusAdjacentPanelRow(event.currentTarget, direction);
				return;
			}
			if (event.key === "Escape") {
				event.preventDefault();
				event.stopPropagation();
				closePanel();
			}
		}
		function focusAdjacentPanelRow(currentRow, direction) {
			const rows = Array.from(currentRow.parentElement?.children ?? []);
			rows[rows.indexOf(currentRow) + direction]?.focus();
		}
		async function focusPanelRowAfterRemoval(removedIndex) {
			await nextTick();
			const rows = Array.from(panelRef.value?.querySelectorAll("[role=\"option\"]") ?? []);
			if (!rows.length) return;
			rows[Math.min(removedIndex, rows.length - 1)]?.focus();
		}
		function closePanel() {
			expandedSetIndex.value = null;
			openChipRef.value?.focus();
		}
		function handlePanelFocusOut(setIndex) {
			if (expandedSetIndex.value !== setIndex) return;
			setTimeout(() => {
				if (expandedSetIndex.value !== setIndex) return;
				const active = document.activeElement;
				if (openChipAnchor.value?.contains(active) || panelRef.value?.contains(active)) return;
				expandedSetIndex.value = null;
			}, 0);
		}
		const expandedSetIndex = ref(null);
		const panelRef = ref(null);
		const chipAnchors = /* @__PURE__ */ new Map();
		const openChipAnchor = ref(null);
		const chipRefs = /* @__PURE__ */ new Map();
		const openChipRef = ref(null);
		const panelStyle = ref({});
		function setChipAnchor(setIndex, el) {
			if (el) chipAnchors.set(setIndex, el);
			else chipAnchors.delete(setIndex);
		}
		function setChipRef(setIndex, instance) {
			if (instance) chipRefs.set(setIndex, instance);
			else chipRefs.delete(setIndex);
		}
		function positionPanel(setIndex) {
			const anchor = chipAnchors.get(setIndex) ?? null;
			openChipAnchor.value = anchor;
			openChipRef.value = chipRefs.get(setIndex) ?? null;
			if (!anchor) return;
			const rect = anchor.getBoundingClientRect();
			const maxHeight = Math.max(0, window.innerHeight - rect.bottom - 12);
			panelStyle.value = {
				top: `${rect.bottom + 4}px`,
				left: `${rect.left}px`,
				maxHeight: `${maxHeight}px`
			};
		}
		function toggleExpanded(index) {
			if (expandedSetIndex.value === index) {
				expandedSetIndex.value = null;
				return;
			}
			positionPanel(index);
			expandedSetIndex.value = index;
		}
		async function enterPanel(setIndex) {
			positionPanel(setIndex);
			expandedSetIndex.value = setIndex;
			await nextTick();
			panelRef.value?.querySelector("[role=\"option\"]")?.focus();
		}
		const isCollapsed = ref(false);
		const showCollapseToggle = computed(() => chips.value.length > COLLAPSE_CHIP_THRESHOLD);
		const totalNodeCount = computed(() => props.attachment.sets.reduce((sum, set) => sum + set.nodes.length, 0));
		const collapsedLabel = computed(() => bundleLabel(totalNodeCount.value));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [isCollapsed.value ? (openBlock(), createBlock(NodeChip_default, {
				key: 0,
				testid: "nodes-chips-collapsed-summary",
				label: collapsedLabel.value,
				breadcrumbs: toBreadcrumbs(collapsedLabel.value),
				icon: "layers",
				removable: __props.isRemovable,
				expanded: null,
				onRemove: _cache[0] || (_cache[0] = ($event) => emit("remove-all"))
			}, null, 8, [
				"label",
				"breadcrumbs",
				"removable"
			])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(chips.value, (chip) => {
				return openBlock(), createElementBlock("span", {
					key: chip.key,
					ref_for: true,
					ref: (el) => setChipAnchor(chip.setIndex, el),
					class: normalizeClass(_ctx.$style.chipAnchor),
					onFocusout: ($event) => handlePanelFocusOut(chip.setIndex)
				}, [createVNode(NodeChip_default, {
					ref_for: true,
					ref: (el) => setChipRef(chip.setIndex, el),
					label: chip.label,
					breadcrumbs: chip.breadcrumbs,
					testid: chip.testid,
					icon: chip.icon,
					"node-type": chip.nodeType,
					removable: __props.isRemovable,
					expanded: chip.panel ? expandedSetIndex.value === chip.setIndex : null,
					onRemove: ($event) => removeChip(chip),
					onToggleExpand: ($event) => toggleExpanded(chip.setIndex),
					onEnterPanel: ($event) => enterPanel(chip.setIndex)
				}, null, 8, [
					"label",
					"breadcrumbs",
					"testid",
					"icon",
					"node-type",
					"removable",
					"expanded",
					"onRemove",
					"onToggleExpand",
					"onEnterPanel"
				]), (openBlock(), createBlock(Teleport, { to: "body" }, [chip.panel && expandedSetIndex.value === chip.setIndex ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_for: true,
					ref: (el) => panelRef.value = el,
					class: normalizeClass(_ctx.$style.panel),
					style: normalizeStyle(panelStyle.value),
					"data-test-id": "nodes-chip-panel",
					onFocusout: ($event) => handlePanelFocusOut(chip.setIndex)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(chip.panel, (node, nodeIndex) => {
					return openBlock(), createElementBlock("div", {
						key: node.id,
						class: normalizeClass(_ctx.$style.panelRow),
						"data-test-id": "nodes-chip-panel-row",
						tabindex: "-1",
						role: "option",
						"aria-label": node.name,
						onKeydown: ($event) => handlePanelRowKeydown(chip.setIndex, nodeIndex, $event)
					}, [__props.isRemovable ? (openBlock(), createElementBlock("button", {
						key: 0,
						type: "button",
						class: normalizeClass(_ctx.$style.panelRemove),
						"data-test-id": "nodes-chip-panel-remove",
						tabindex: "-1",
						"aria-label": unref(i18n).baseText("generic.delete"),
						onClick: withModifiers(($event) => removeNode(chip.setIndex, nodeIndex), ["stop"])
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.panelRemoveX) }, [createVNode(unref(N8nIcon_default), {
						icon: "x",
						size: "large"
					})], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.panelRowLeadingIcon) }, [node.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
						key: 0,
						"node-type": node.nodeType,
						node: node.workflowNode ?? void 0,
						size: 16
					}, null, 8, ["node-type", "node"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "crosshair",
						size: "large"
					}))], 2)], 10, _hoisted_4)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [node.nodeType ? (openBlock(), createBlock(NodeIcon_default, {
						key: 0,
						"node-type": node.nodeType,
						node: node.workflowNode ?? void 0,
						size: 16,
						class: normalizeClass(_ctx.$style.panelRowIcon)
					}, null, 8, [
						"node-type",
						"node",
						"class"
					])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "crosshair",
						size: "xsmall"
					}))], 64)), createBaseVNode("span", { class: normalizeClass(_ctx.$style.panelRowName) }, toDisplayString(node.name), 3)], 42, _hoisted_3);
				}), 128))], 46, _hoisted_2)) : createCommentVNode("", true)]))], 42, _hoisted_1$2);
			}), 128)), showCollapseToggle.value ? (openBlock(), createElementBlock("button", {
				key: 2,
				type: "button",
				class: normalizeClass(_ctx.$style.collapseToggle),
				"data-test-id": "nodes-chips-collapse",
				onClick: _cache[1] || (_cache[1] = withModifiers(($event) => isCollapsed.value = !isCollapsed.value, ["stop"]))
			}, toDisplayString(isCollapsed.value ? unref(i18n).baseText("instanceAi.nodeContext.expand") : unref(i18n).baseText("instanceAi.nodeContext.collapse")), 3)) : createCommentVNode("", true)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	container: "_container_txypu_1",
	chipAnchor: "_chipAnchor_txypu_8",
	panel: "_panel_txypu_13",
	panelRow: "_panelRow_txypu_25",
	panelRowIcon: "_panelRowIcon_txypu_38",
	panelRowName: "_panelRowName_txypu_42",
	panelRemove: "_panelRemove_txypu_51",
	panelRemoveX: "_panelRemoveX_txypu_66",
	panelRowLeadingIcon: "_panelRowLeadingIcon_txypu_67",
	collapseToggle: "_collapseToggle_txypu_88"
} }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AttachmentPreview.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler(), init_runtime_dom_esm_bundler();
var _hoisted_1$1 = ["src", "alt"];
var AttachmentPreview_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AttachmentPreview",
	props: {
		file: {},
		attachment: {},
		isRemovable: { type: Boolean }
	},
	emits: [
		"remove",
		"remove-resource",
		"update:attachment"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const i18n = useI18n();
		const emit = __emit;
		const loading = ref(true);
		const nodesAttachment = computed(() => props.attachment?.type === "nodes" ? props.attachment : void 0);
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
			return nodesAttachment.value ? (openBlock(), createBlock(NodesAttachmentChips_default, {
				key: 0,
				attachment: nodesAttachment.value,
				"is-removable": __props.isRemovable ?? false,
				"onUpdate:attachment": _cache[0] || (_cache[0] = ($event) => emit("update:attachment", $event)),
				onRemoveAll: _cache[1] || (_cache[1] = ($event) => emit("remove-resource"))
			}, null, 8, ["attachment", "is-removable"])) : workflowAttachment.value ? (openBlock(), createBlock(InstanceAiResourceChip_default, {
				key: 1,
				label: workflowAttachment.value.name ?? "Workflow",
				icon: "workflow",
				"trailing-icon": workflowAttachment.value.executionId ? "play" : void 0,
				removable: __props.isRemovable,
				"remove-label": unref(i18n).baseText("instanceAi.mentions.removeWorkflow"),
				"test-id": "attachment-preview-resource",
				"remove-test-id": "attachment-preview-remove-resource",
				onRemove: _cache[2] || (_cache[2] = ($event) => emit("remove-resource"))
			}, null, 8, [
				"label",
				"trailing-icon",
				"removable",
				"remove-label"
			])) : agentAttachment.value ? (openBlock(), createBlock(InstanceAiResourceChip_default, {
				key: 2,
				label: agentAttachment.value.name ?? "Agent",
				icon: "robot",
				"test-id": "attachment-preview-resource"
			}, null, 8, ["label"])) : isImage.value && thumbnailSrc.value ? (openBlock(), createElementBlock("div", {
				key: 3,
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
				}, null, 42, _hoisted_1$1),
				__props.isRemovable ? (openBlock(), createElementBlock("button", {
					key: 1,
					class: normalizeClass(_ctx.$style.removeBtn),
					"data-test-id": "attachment-preview-remove",
					onClick: withModifiers(handleRemove, ["stop"])
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: "small"
				})], 2)) : createCommentVNode("", true)
			], 2)) : props.file || fileAttachment.value ? (openBlock(), createBlock(ChatFile_default, {
				key: 4,
				file: fallbackFile.value,
				"is-removable": __props.isRemovable ?? false,
				onRemove: _cache[3] || (_cache[3] = ($event) => emit("remove", $event))
			}, null, 8, ["file", "is-removable"])) : createCommentVNode("", true);
		};
	}
}), [["__cssModules", { "$style": {
	thumbnailWrapper: "_thumbnailWrapper_vk8sn_1",
	thumbnail: "_thumbnail_vk8sn_1",
	loadingSkeleton: "_loadingSkeleton_vk8sn_18",
	removeBtn: "_removeBtn_vk8sn_28"
} }]]);
//#endregion
//#region src/features/ai/shared/constants.ts
/** Raised character limit for chat surfaces where users paste long, externally-drafted prompts (agent builder, instance AI). */
var EXTENDED_PROMPT_MAX_LENGTH = 25e3;
//#endregion
//#region src/features/ai/shared/components/ChatHistoryDropdown.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var DOUBLE_CLICK_DELAY = 300;
var ChatHistoryDropdown_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ChatHistoryDropdown",
	props: {
		items: {},
		searchPlaceholder: {},
		contentTestId: {},
		contentId: { default: void 0 },
		actionButtonLabel: {},
		modelValue: {
			type: Boolean,
			default: void 0
		},
		dataTestId: { default: void 0 },
		maxHeight: { default: void 0 },
		loading: {
			type: Boolean,
			default: false
		},
		emptyText: { default: void 0 },
		editingItemId: { default: void 0 },
		actionsDisabled: {
			type: Boolean,
			default: false
		},
		itemDoubleClickEnabled: {
			type: Boolean,
			default: false
		},
		leadingItem: { default: void 0 }
	},
	emits: [
		"update:modelValue",
		"search",
		"select",
		"action",
		"item-dblclick"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const slots = useSlots();
		const i18n = useI18n();
		const generatedContentId = useId();
		const contentId = computed(() => props.contentId ?? generatedContentId);
		const dropdownRef = ref(null);
		let pendingItemClick;
		const groupOrder = [
			"Today",
			"Yesterday",
			"This week",
			"Older"
		];
		const groupLabels = {
			Today: i18n.baseText("userActivity.today"),
			Yesterday: i18n.baseText("userActivity.yesterday"),
			"This week": i18n.baseText("instanceAi.sidebar.group.thisWeek"),
			Older: i18n.baseText("instanceAi.sidebar.group.older")
		};
		const groupedItems = computed(() => {
			if (props.leadingItem && props.loading) return [props.leadingItem, {
				id: "__chat-history-loading__",
				label: i18n.baseText("generic.loadingEllipsis"),
				header: true
			}];
			const groups = /* @__PURE__ */ new Map();
			const undated = [];
			const now = /* @__PURE__ */ new Date();
			for (const item of props.items) {
				if (!item.data?.updatedAt) {
					undated.push(item);
					continue;
				}
				const relativeDate = getRelativeDate(now, item.data.updatedAt);
				const group = groupOrder.find((name) => name === relativeDate) ?? "Older";
				const items = groups.get(group) ?? [];
				items.push(item);
				groups.set(group, items);
			}
			const dated = [...groupOrder.flatMap((group) => {
				const items = (groups.get(group) ?? []).sort((a, b) => Date.parse(b.data?.updatedAt ?? "") - Date.parse(a.data?.updatedAt ?? ""));
				return items.length > 0 ? [{
					id: `group-${group}`,
					label: groupLabels[group],
					header: true
				}, ...items] : [];
			}), ...undated];
			if (!props.leadingItem) return dated;
			const body = dated.length === 0 && props.emptyText ? [{
				id: "__chat-history-empty__",
				label: props.emptyText,
				header: true
			}] : dated;
			return [props.leadingItem, ...body];
		});
		const cancelPendingItemClick = () => {
			if (pendingItemClick) clearTimeout(pendingItemClick);
			pendingItemClick = void 0;
		};
		const handleItemClick = (event, item) => {
			if (!props.itemDoubleClickEnabled || item.disabled) return;
			event.stopPropagation();
			cancelPendingItemClick();
			if (event.detail > 1) return;
			pendingItemClick = setTimeout(() => {
				pendingItemClick = void 0;
				emit("select", item.id);
				dropdownRef.value?.close();
			}, DOUBLE_CLICK_DELAY);
		};
		const handleItemDoubleClick = (item) => {
			if (item.disabled) return;
			cancelPendingItemClick();
			emit("item-dblclick", item.id);
		};
		onBeforeUnmount(cancelPendingItemClick);
		useEventListener(document, "keydown", (event) => {
			if (!(event.target instanceof HTMLElement)) return;
			const menu = event.target.closest("[data-menu-content]");
			if (menu?.id !== contentId.value) return;
			if (event.key === "Tab") {
				const focusableElements = [...menu.querySelectorAll("*")].filter((element) => element.tabIndex >= 0 && !element.matches(":disabled, [aria-disabled=\"true\"]"));
				const currentIndex = focusableElements.indexOf(event.target);
				const nextIndex = currentIndex + (event.shiftKey ? -1 : 1);
				if (currentIndex >= 0 && focusableElements[nextIndex]) event.stopPropagation();
				return;
			}
			if (event.key === "Enter" && event.target.closest("button")) event.stopPropagation();
		}, { capture: true });
		const highlightFirstItem = () => {
			dropdownRef.value?.highlightFirstItem();
		};
		const focusTrigger = () => {
			dropdownRef.value?.focusTrigger();
		};
		__expose({
			highlightFirstItem,
			focusTrigger
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DropdownMenu_default), {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				id: contentId.value,
				"model-value": props.modelValue,
				items: groupedItems.value,
				loading: !props.leadingItem && props.loading,
				"max-height": props.maxHeight,
				"data-test-id": props.dataTestId,
				"content-test-id": props.contentTestId,
				"search-placeholder": props.searchPlaceholder,
				"empty-text": props.emptyText,
				"extra-popper-class": _ctx.$style.menuContent,
				width: "calc(var(--spacing--5xl) + var(--spacing--3xl) + var(--spacing--xl))",
				placement: "bottom-start",
				searchable: "",
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit("update:modelValue", $event)),
				onSearch: _cache[2] || (_cache[2] = ($event) => emit("search", $event)),
				onSelect: _cache[3] || (_cache[3] = ($event) => emit("select", $event))
			}, createSlots({
				"item-label": withCtx(({ item, ui }) => [item.data && props.editingItemId === item.id ? renderSlot(_ctx.$slots, "item-edit", {
					key: 0,
					item,
					ui
				}) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					class: normalizeClass([ui.class, _ctx.$style.itemLabel]),
					title: item.label,
					size: "medium",
					color: item.disabled ? "text-xlight" : "text-dark",
					onClick: ($event) => handleItemClick($event, item),
					onDblclick: withModifiers(($event) => handleItemDoubleClick(item), ["stop"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
					_: 2
				}, 1032, [
					"class",
					"title",
					"color",
					"onClick",
					"onDblclick"
				]))]),
				"item-trailing": withCtx(({ item, ui }) => [item.data && (slots["item-trailing"] || item.data.actions?.length) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([ui.class, _ctx.$style.itemTrailing]),
					onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
				}, [renderSlot(_ctx.$slots, "item-trailing", { item }), item.data.actions?.length ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
					key: 0,
					items: item.data.actions,
					class: normalizeClass(_ctx.$style.actionDropdown),
					placement: "bottom-start",
					disabled: props.actionsDisabled || item.disabled,
					"suppress-close-auto-focus": "",
					onSelect: ($event) => emit("action", $event, item.id)
				}, {
					activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "ellipsis",
						disabled: props.actionsDisabled || item.disabled,
						"aria-label": props.actionButtonLabel
					}, null, 8, ["disabled", "aria-label"])]),
					_: 2
				}, 1032, [
					"items",
					"class",
					"disabled",
					"onSelect"
				])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				_: 2
			}, [
				slots.trigger ? {
					name: "trigger",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "trigger")]),
					key: "0"
				} : void 0,
				slots.loading ? {
					name: "loading",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "loading")]),
					key: "1"
				} : void 0,
				slots.empty ? {
					name: "empty",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "empty")]),
					key: "2"
				} : void 0,
				slots["item-leading"] ? {
					name: "item-leading",
					fn: withCtx((slotProps) => [renderSlot(_ctx.$slots, "item-leading", normalizeProps(guardReactiveProps(slotProps)))]),
					key: "3"
				} : void 0,
				slots.footer ? {
					name: "footer",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
					key: "4"
				} : void 0
			]), 1032, [
				"id",
				"model-value",
				"items",
				"loading",
				"max-height",
				"data-test-id",
				"content-test-id",
				"search-placeholder",
				"empty-text",
				"extra-popper-class"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	menuContent: "_menuContent_zhgg1_1",
	itemLabel: "_itemLabel_zhgg1_5",
	itemTrailing: "_itemTrailing_zhgg1_13",
	actionDropdown: "_actionDropdown_zhgg1_19"
} }]]);
//#endregion
//#region src/features/ai/shared/components/ChatHistoryDropdownTrigger.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = ["title"];
var ChatHistoryDropdownTrigger_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ChatHistoryDropdownTrigger",
	props: { title: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const label = computed(() => props.title || i18n.baseText("instanceAi.sidebar.chatHistory"));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"as-child": "",
				content: unref(i18n).baseText("instanceAi.sidebar.chatHistory"),
				disabled: !props.title,
				placement: "bottom",
				"show-after": unref(500)
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), mergeProps(_ctx.$attrs, {
					variant: "ghost",
					size: "small",
					icon: "history",
					"icon-size": "large",
					class: _ctx.$style.button,
					"aria-label": label.value
				}), {
					default: withCtx(() => [createBaseVNode("span", {
						class: normalizeClass(_ctx.$style.label),
						title: props.title
					}, toDisplayString(label.value), 11, _hoisted_1)]),
					_: 1
				}, 16, ["class", "aria-label"])]),
				_: 1
			}, 8, [
				"content",
				"disabled",
				"show-after"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	button: "_button_1mpn1_1",
	label: "_label_1mpn1_13"
} }]]);
//#endregion
export { InstanceAiResourceChip_default as a, AttachmentPreview_default as i, ChatHistoryDropdown_default as n, AssistantMentionBreadcrumbs_default as o, EXTENDED_PROMPT_MAX_LENGTH as r, ChatInputBase_default as s, ChatHistoryDropdownTrigger_default as t };
