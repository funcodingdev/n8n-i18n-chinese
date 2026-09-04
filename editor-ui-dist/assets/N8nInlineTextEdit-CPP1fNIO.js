import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, X as onMounted, _t as watchEffect, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, pt as useTemplateRef, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { m as useElementSize } from "./dist-BKkqSB6h.js";
import { n as usePrimitiveElement, r as useFormControl } from "./Collection-CV7FjEVf.js";
import { j as createContext, m as useVModel, n as Primitive } from "./VisuallyHidden-lv4qVqRn.js";
import { t as useDirection } from "./useDirection-UW3tNAWY.js";
import { c as useFocusOutside, l as usePointerDownOutside } from "./PopperContent-Dajl-5rg.js";
import { t as useKbd } from "./useKbd-CNop2v9G.js";
import { t as VisuallyHiddenInput_default } from "./VisuallyHiddenInput-BJy-siPx.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Editable/EditableRoot.js
var [injectEditableRootContext, provideEditableRootContext] = createContext("EditableRoot");
var EditableRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "EditableRoot",
	props: {
		defaultValue: {
			type: String,
			required: false
		},
		modelValue: {
			type: [String, null],
			required: false
		},
		placeholder: {
			type: [String, Object],
			required: false,
			default: "Enter text..."
		},
		dir: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		readonly: {
			type: Boolean,
			required: false
		},
		activationMode: {
			type: String,
			required: false,
			default: "focus"
		},
		selectOnFocus: {
			type: Boolean,
			required: false,
			default: false
		},
		submitMode: {
			type: String,
			required: false,
			default: "blur"
		},
		startWithEditMode: {
			type: Boolean,
			required: false
		},
		maxLength: {
			type: Number,
			required: false
		},
		autoResize: {
			type: Boolean,
			required: false,
			default: false
		},
		id: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	emits: [
		"update:modelValue",
		"submit",
		"update:state"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { id, name, defaultValue, startWithEditMode, placeholder: propPlaceholder, maxLength, disabled, dir: propDir, submitMode, activationMode, selectOnFocus, readonly, autoResize, required } = toRefs(props);
		const inputRef = ref();
		const dir = useDirection(propDir);
		const isEditing = ref(startWithEditMode.value ?? false);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: defaultValue.value ?? "",
			passive: props.modelValue === void 0
		});
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const isFormControl = useFormControl(currentElement);
		const placeholder = computed(() => {
			return typeof propPlaceholder.value === "string" ? {
				edit: propPlaceholder.value,
				preview: propPlaceholder.value
			} : propPlaceholder.value;
		});
		const inputValue = ref(modelValue.value);
		watch(() => modelValue.value, () => {
			inputValue.value = modelValue.value;
		}, {
			immediate: true,
			deep: true
		});
		function cancel() {
			isEditing.value = false;
			emits("update:state", "cancel");
		}
		function edit() {
			isEditing.value = true;
			inputValue.value = modelValue.value;
			emits("update:state", "edit");
		}
		function submit() {
			modelValue.value = inputValue.value;
			isEditing.value = false;
			emits("update:state", "submit");
			emits("submit", modelValue.value);
		}
		function handleDismiss() {
			if (isEditing.value) if (submitMode.value === "blur" || submitMode.value === "both") submit();
			else cancel();
		}
		const pointerDownOutside = usePointerDownOutside(() => handleDismiss(), currentElement, isEditing);
		const focusOutside = useFocusOutside(() => handleDismiss(), currentElement, isEditing);
		const isEmpty = computed(() => modelValue.value === "");
		__expose({
			submit,
			cancel,
			edit
		});
		provideEditableRootContext({
			id,
			name,
			disabled,
			isEditing,
			maxLength,
			modelValue,
			inputValue,
			placeholder,
			edit,
			cancel,
			submit,
			activationMode,
			submitMode,
			selectOnFocus,
			inputRef,
			startWithEditMode,
			isEmpty,
			readonly,
			autoResize
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(_ctx.$attrs, {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				as: _ctx.as,
				"as-child": _ctx.asChild,
				dir: unref(dir),
				"data-dismissable-layer": "",
				onFocusCapture: unref(focusOutside).onFocusCapture,
				onBlurCapture: unref(focusOutside).onBlurCapture,
				onPointerdownCapture: unref(pointerDownOutside).onPointerDownCapture
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					isEditing: isEditing.value,
					isEmpty: isEmpty.value,
					submit,
					cancel,
					edit
				}), unref(isFormControl) && unref(name) ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
					key: 0,
					type: "text",
					value: unref(modelValue),
					name: unref(name),
					disabled: unref(disabled),
					required: unref(required)
				}, null, 8, [
					"value",
					"name",
					"disabled",
					"required"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"dir",
				"onFocusCapture",
				"onBlurCapture",
				"onPointerdownCapture"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Editable/EditableArea.js
var EditableArea_default = /* @__PURE__ */ defineComponent({
	__name: "EditableArea",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	setup(__props) {
		const props = __props;
		const context = injectEditableRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"data-placeholder-shown": unref(context).isEditing.value ? void 0 : "",
				"data-focus": unref(context).isEditing.value ? "" : void 0,
				"data-focused": unref(context).isEditing.value ? "" : void 0,
				"data-empty": unref(context).isEmpty.value ? "" : void 0,
				"data-readonly": unref(context).readonly.value ? "" : void 0,
				"data-disabled": unref(context).disabled.value ? "" : void 0,
				style: unref(context).autoResize.value ? { display: "inline-grid" } : void 0
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"data-placeholder-shown",
				"data-focus",
				"data-focused",
				"data-empty",
				"data-readonly",
				"data-disabled",
				"style"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Editable/EditableInput.js
var EditableInput_default = /* @__PURE__ */ defineComponent({
	__name: "EditableInput",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "input"
		}
	},
	setup(__props) {
		const props = __props;
		const kbd = useKbd();
		const context = injectEditableRootContext();
		const disabled = computed(() => context.disabled.value);
		const placeholder = computed(() => context.placeholder.value?.edit);
		const { primitiveElement, currentElement: inputRef } = usePrimitiveElement();
		onMounted(() => {
			context.inputRef.value = inputRef.value;
			if (context.startWithEditMode.value) {
				context.inputRef.value?.focus({ preventScroll: true });
				if (context.selectOnFocus.value) context.inputRef.value?.select();
			}
		});
		watch(context.isEditing, (value) => {
			if (value) nextTick(() => {
				context.inputRef.value?.focus({ preventScroll: true });
				if (context.selectOnFocus.value) context.inputRef.value?.select();
			});
		});
		function handleSubmitKeyDown(event) {
			if ((context.submitMode.value === "enter" || context.submitMode.value === "both") && event.key === kbd.ENTER && !event.shiftKey && !event.metaKey) context.submit();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({
				ref_key: "primitiveElement",
				ref: primitiveElement
			}, props, {
				value: unref(context).inputValue.value,
				placeholder: placeholder.value,
				disabled: disabled.value,
				maxlength: unref(context).maxLength.value,
				"data-disabled": disabled.value ? "" : void 0,
				"data-readonly": unref(context).readonly.value ? "" : void 0,
				readonly: unref(context).readonly.value,
				"aria-label": "editable input",
				hidden: unref(context).autoResize.value ? void 0 : !unref(context).isEditing.value,
				style: unref(context).autoResize.value ? {
					all: "unset",
					gridArea: "1 / 1 / auto / auto",
					visibility: !unref(context).isEditing.value ? "hidden" : void 0
				} : void 0,
				onInput: _cache[0] || (_cache[0] = ($event) => unref(context).inputValue.value = $event.target.value),
				onKeydown: [withKeys(handleSubmitKeyDown, ["enter", "space"]), withKeys(unref(context).cancel, ["esc"])]
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"value",
				"placeholder",
				"disabled",
				"maxlength",
				"data-disabled",
				"data-readonly",
				"readonly",
				"hidden",
				"style",
				"onKeydown"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Editable/EditablePreview.js
var EditablePreview_default = /* @__PURE__ */ defineComponent({
	__name: "EditablePreview",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const props = __props;
		const context = injectEditableRootContext();
		const placeholder = computed(() => context.placeholder.value?.preview);
		function handleFocus() {
			if (context.activationMode.value === "focus") context.edit();
		}
		function handleDoubleClick() {
			if (context.activationMode.value === "dblclick") context.edit();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				tabindex: "0",
				"data-placeholder-shown": unref(context).isEditing.value ? void 0 : "",
				hidden: unref(context).autoResize.value ? void 0 : unref(context).isEditing.value,
				style: unref(context).autoResize.value ? {
					whiteSpace: "pre",
					userSelect: "none",
					gridArea: "1 / 1 / auto / auto",
					visibility: unref(context).isEditing.value ? "hidden" : void 0,
					overflow: "hidden",
					textOverflow: "ellipsis"
				} : void 0,
				onFocusin: handleFocus,
				onDblclick: handleDoubleClick
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(unref(context).modelValue.value || placeholder.value), 1)])]),
				_: 3
			}, 16, [
				"data-placeholder-shown",
				"hidden",
				"style"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nInlineTextEdit/InlineTextEdit.vue?vue&type=script&setup=true&lang.ts
var InlineTextEdit_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InlineTextEdit",
	props: {
		modelValue: {},
		readOnly: {
			type: Boolean,
			default: false
		},
		maxLength: { default: 100 },
		maxWidth: { default: 200 },
		minWidth: { default: 64 },
		placeholder: { default: "Enter text..." },
		disabled: { type: Boolean }
	},
	emits: ["update:model-value"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const editableRoot = useTemplateRef("editableRoot");
		const measureSpan = useTemplateRef("measureSpan");
		const editingValue = ref(props.modelValue);
		const displayContent = computed(() => editingValue.value || props.placeholder);
		watchEffect(() => {
			editingValue.value = props.modelValue;
		});
		const { width: measuredWidth } = useElementSize(measureSpan);
		const maxWidth = computed(() => typeof props.maxWidth === "number" ? `${props.maxWidth}px` : props.maxWidth);
		const inputWidth = computed(() => {
			const measuredContentWidth = `${measuredWidth.value + 1}px`;
			if (typeof props.maxWidth === "number") return `${Math.max(props.minWidth, Math.min(measuredWidth.value + 1, props.maxWidth))}px`;
			return `clamp(${props.minWidth}px, ${measuredContentWidth}, ${props.maxWidth})`;
		});
		const computedInlineStyles = computed(() => ({
			width: inputWidth.value,
			maxWidth: maxWidth.value,
			zIndex: 1
		}));
		const computedContentStyles = {
			width: "100%",
			maxWidth: "100%",
			zIndex: 1
		};
		function forceFocus() {
			if (editableRoot.value && !props.readOnly && !props.disabled) editableRoot.value.edit();
		}
		function forceCancel() {
			if (editableRoot.value) {
				editingValue.value = props.modelValue;
				editableRoot.value.cancel();
			}
		}
		function onSubmit() {
			const trimmed = editingValue.value.trim();
			if (!trimmed) {
				editingValue.value = props.modelValue;
				return;
			}
			if (trimmed !== props.modelValue) emit("update:model-value", trimmed);
		}
		function onInput(value) {
			editingValue.value = value;
		}
		function onStateChange(state) {
			if (state === "cancel") editingValue.value = props.modelValue;
		}
		__expose({
			forceFocus,
			forceCancel
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(EditableRoot_default), {
				ref_key: "editableRoot",
				ref: editableRoot,
				placeholder: __props.placeholder,
				"model-value": editingValue.value,
				"submit-mode": "both",
				class: normalizeClass(_ctx.$style.inlineRenameRoot),
				title: props.modelValue,
				disabled: __props.disabled,
				"max-length": __props.maxLength,
				readonly: __props.readOnly,
				"select-on-focus": "",
				"auto-resize": "",
				onClick: forceFocus,
				onSubmit,
				"onUpdate:modelValue": onInput,
				"onUpdate:state": onStateChange
			}, {
				default: withCtx(() => [createVNode(unref(EditableArea_default), {
					style: normalizeStyle(computedInlineStyles.value),
					class: normalizeClass(_ctx.$style.inlineRenameArea),
					"data-test-id": "inline-editable-area"
				}, {
					default: withCtx(() => [
						createBaseVNode("span", {
							ref_key: "measureSpan",
							ref: measureSpan,
							class: normalizeClass(_ctx.$style.measureSpan)
						}, toDisplayString(displayContent.value), 3),
						createVNode(unref(EditablePreview_default), {
							"data-test-id": "inline-edit-preview",
							class: normalizeClass(_ctx.$style.inlineRenamePreview),
							style: computedContentStyles
						}, null, 8, ["class"]),
						createVNode(unref(EditableInput_default), {
							ref: "input",
							size: 1,
							class: normalizeClass(_ctx.$style.inlineRenameInput),
							"data-test-id": "inline-edit-input",
							style: computedContentStyles,
							onInput: _cache[0] || (_cache[0] = ($event) => onInput($event.target.value)),
							onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {}, ["stop"]), ["space"]))
						}, null, 8, ["class"])
					]),
					_: 1
				}, 8, ["style", "class"])]),
				_: 1
			}, 8, [
				"placeholder",
				"model-value",
				"class",
				"title",
				"disabled",
				"max-length",
				"readonly"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nInlineTextEdit/InlineTextEdit.vue?vue&type=style&index=0&lang.module.scss
var inlineRenameArea = "_inlineRenameArea_47jsw_388";
var inlineRenamePreview = "_inlineRenamePreview_47jsw_424";
var measureSpan = "_measureSpan_47jsw_433";
var shimmer = "_shimmer_47jsw_1";
var spin = "_spin_47jsw_1";
var opacityPulse = "_opacityPulse_47jsw_1";
var popoverIn = "_popoverIn_47jsw_1";
var fadeIn = "_fadeIn_47jsw_1";
var collapsibleSlideDown = "_collapsibleSlideDown_47jsw_1";
var collapsibleSlideUp = "_collapsibleSlideUp_47jsw_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_47jsw_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_47jsw_1";
var blurSwapIn = "_blurSwapIn_47jsw_1";
var blurSwapOut = "_blurSwapOut_47jsw_1";
var pulseGlow = "_pulseGlow_47jsw_1";
var pulseGlowDelayed = "_pulseGlowDelayed_47jsw_1";
var fade = "_fade_47jsw_1";
var fadeInUp = "_fadeInUp_47jsw_1";
var fadeInDown = "_fadeInDown_47jsw_1";
var fadeInLeft = "_fadeInLeft_47jsw_1";
var fadeInRight = "_fadeInRight_47jsw_1";
var fadeOut = "_fadeOut_47jsw_1";
var fadeOutDown = "_fadeOutDown_47jsw_1";
var fadeOutUp = "_fadeOutUp_47jsw_1";
var fadeOutLeft = "_fadeOutLeft_47jsw_1";
var fadeOutRight = "_fadeOutRight_47jsw_1";
var ping = "_ping_47jsw_1";
var blinkBackground = "_blinkBackground_47jsw_1";
var typingBlink = "_typingBlink_47jsw_1";
var InlineTextEdit_vue_vue_type_style_index_0_lang_module_default = {
	inlineRenameArea,
	inlineRenamePreview,
	measureSpan,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_47jsw_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nInlineTextEdit/index.ts
var N8nInlineTextEdit_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InlineTextEdit_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InlineTextEdit_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nInlineTextEdit_default as t };
