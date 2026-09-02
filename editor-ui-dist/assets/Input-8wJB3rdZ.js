import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, X as onMounted, c as useCssModule, ft as useSlots, gt as watch, it as renderSlot, j as createVNode, lt as useAttrs, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as Icon_default } from "./Icon-C4YMOb-m.js";
import { t as useAutosizeTextarea } from "./useAutosizeTextarea-DfiUCd-R.js";
//#region ../@n8n/design-system/src/components/N8nInput/Input.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = [
	"type",
	"value",
	"placeholder",
	"disabled",
	"readonly",
	"required",
	"maxlength",
	"autocomplete",
	"name"
];
var _hoisted_2 = [
	"value",
	"placeholder",
	"disabled",
	"readonly",
	"required",
	"rows",
	"maxlength",
	"autocomplete",
	"name"
];
var Input_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nInput",
	inheritAttrs: false,
	__name: "Input",
	props: {
		modelValue: { default: "" },
		type: { default: "text" },
		size: { default: "large" },
		placeholder: { default: "" },
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		clearable: {
			type: Boolean,
			default: false
		},
		rows: { default: 2 },
		masked: {
			type: Boolean,
			default: false
		},
		maxlength: { default: void 0 },
		autosize: {
			type: [Boolean, Object],
			default: false
		},
		autofocus: {
			type: Boolean,
			default: false
		},
		autocomplete: { default: "off" },
		name: { default: void 0 }
	},
	emits: [
		"update:modelValue",
		"input",
		"focus",
		"blur",
		"keydown",
		"mousedown"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const $style = useCssModule();
		const slots = useSlots();
		const props = __props;
		const emit = __emit;
		const attrs = useAttrs();
		const inputRef = ref(null);
		const isInputAttr = (key) => key === "id" || key === "title" || key.startsWith("data-") || key.startsWith("aria-") || key.startsWith("on");
		const inputAttrs = computed(() => {
			const result = {};
			for (const [key, value] of Object.entries(attrs)) if (isInputAttr(key)) result[key] = value;
			return result;
		});
		const containerAttrs = computed(() => {
			const result = {};
			for (const [key, value] of Object.entries(attrs)) if (!isInputAttr(key)) result[key] = value;
			return result;
		});
		const sizes = {
			xlarge: $style.xlarge,
			large: $style.large,
			medium: $style.medium,
			small: $style.small,
			mini: $style.mini
		};
		const sizeClass = computed(() => sizes[props.size]);
		const isTextarea = computed(() => props.type === "textarea");
		const containerClasses = computed(() => [
			"n8n-input",
			$style.inputContainer,
			sizeClass.value,
			{
				[$style.disabled]: props.disabled,
				[$style.readonly]: props.readonly,
				[$style.hasPrepend]: !!slots.prepend,
				[$style.hasAppend]: !!slots.append,
				[$style.isTextarea]: isTextarea.value,
				"ph-no-capture": props.type === "password" || props.masked
			}
		]);
		const inputWrapperClasses = computed(() => [
			"n8n-input__wrapper",
			$style.inputWrapper,
			{
				[$style.disabled]: props.disabled,
				[$style.readonly]: props.readonly,
				[$style.isTextarea]: isTextarea.value
			}
		]);
		const isFocused = ref(false);
		const onInput = (event) => {
			const target = event.target;
			emit("update:modelValue", target.value);
			emit("input", target.value);
		};
		const onBlur = (event) => {
			isFocused.value = false;
			emit("blur", event);
		};
		const onFocus = (event) => {
			isFocused.value = true;
			emit("focus", event);
		};
		const onKeydown = (event) => {
			emit("keydown", event);
		};
		const onMousedown = (event) => {
			emit("mousedown", event);
		};
		const onClear = () => {
			emit("update:modelValue", "");
			focus();
		};
		const showClearButton = computed(() => {
			return props.clearable && !props.disabled && props.modelValue !== "" && props.modelValue !== null;
		});
		const autosizeRows = computed(() => typeof props.autosize === "object" ? {
			minRows: props.autosize.minRows,
			maxRows: props.autosize.maxRows
		} : void 0);
		const { textareaStyles, calculateTextareaHeight } = useAutosizeTextarea({
			textarea: computed(() => inputRef.value instanceof HTMLTextAreaElement ? inputRef.value : null),
			enabled: computed(() => props.type === "textarea" && Boolean(props.autosize)),
			rows: autosizeRows
		});
		watch(() => props.modelValue, () => {
			if (props.type === "textarea" && props.autosize) nextTick(calculateTextareaHeight);
		});
		onMounted(() => {
			if (props.autofocus) focus();
			if (props.type === "textarea" && props.autosize) nextTick(calculateTextareaHeight);
		});
		const focus = () => inputRef.value?.focus();
		const blur = () => inputRef.value?.blur();
		const select = () => inputRef.value?.select();
		__expose({
			focus,
			blur,
			select
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: containerClasses.value }, containerAttrs.value), [
				_ctx.$slots.prepend ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(unref($style).prepend)
				}, [renderSlot(_ctx.$slots, "prepend")], 2)) : createCommentVNode("", true),
				createBaseVNode("div", {
					class: normalizeClass(inputWrapperClasses.value),
					onClick: focus
				}, [
					_ctx.$slots.prefix ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(unref($style).prefix)
					}, [renderSlot(_ctx.$slots, "prefix")], 2)) : createCommentVNode("", true),
					__props.type !== "textarea" ? (openBlock(), createElementBlock("input", mergeProps({
						key: 1,
						ref_key: "inputRef",
						ref: inputRef,
						type: __props.type,
						value: __props.modelValue ?? "",
						class: unref($style).input,
						placeholder: __props.placeholder,
						disabled: __props.disabled,
						readonly: __props.readonly,
						required: __props.required,
						maxlength: __props.maxlength,
						autocomplete: __props.autocomplete,
						name: __props.name
					}, inputAttrs.value, {
						onInput,
						onBlur,
						onFocus,
						onKeydown,
						onMousedown
					}), null, 16, _hoisted_1)) : (openBlock(), createElementBlock("textarea", mergeProps({
						key: 2,
						ref_key: "inputRef",
						ref: inputRef,
						value: __props.modelValue ?? "",
						class: [
							unref($style).input,
							unref($style).textarea,
							{ [unref($style).masked]: __props.masked }
						],
						placeholder: __props.placeholder,
						disabled: __props.disabled,
						readonly: __props.readonly,
						required: __props.required,
						rows: __props.autosize ? void 0 : __props.rows,
						maxlength: __props.maxlength,
						autocomplete: __props.autocomplete,
						name: __props.name,
						style: __props.autosize ? {
							...unref(textareaStyles),
							resize: "none",
							overflow: "auto"
						} : void 0
					}, inputAttrs.value, {
						onInput,
						onBlur,
						onFocus,
						onKeydown,
						onMousedown
					}), null, 16, _hoisted_2)),
					_ctx.$slots.suffix ? (openBlock(), createElementBlock("span", {
						key: 3,
						class: normalizeClass(unref($style).suffix)
					}, [renderSlot(_ctx.$slots, "suffix")], 2)) : createCommentVNode("", true),
					showClearButton.value ? (openBlock(), createElementBlock("button", {
						key: 4,
						type: "button",
						class: normalizeClass(unref($style).clearButton),
						tabindex: "-1",
						onClick: onClear
					}, [createVNode(Icon_default, {
						icon: "x",
						size: "small"
					})], 2)) : createCommentVNode("", true)
				], 2),
				_ctx.$slots.append ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(unref($style).append)
				}, [renderSlot(_ctx.$slots, "append")], 2)) : createCommentVNode("", true)
			], 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nInput/Input.vue?vue&type=style&index=0&lang.module.scss
var inputContainer = "_inputContainer_ucnlc_388";
var xlarge = "_xlarge_ucnlc_413";
var large = "_large_ucnlc_419";
var medium = "_medium_ucnlc_425";
var small = "_small_ucnlc_431";
var mini = "_mini_ucnlc_437";
var inputWrapper = "_inputWrapper_ucnlc_444";
var disabled = "_disabled_ucnlc_465";
var isTextarea = "_isTextarea_ucnlc_476";
var readonly = "_readonly_ucnlc_485";
var hasPrepend = "_hasPrepend_ucnlc_489";
var hasAppend = "_hasAppend_ucnlc_494";
var input = "_input_ucnlc_388";
var textarea = "_textarea_ucnlc_528";
var masked = "_masked_ucnlc_561";
var prefix = "_prefix_ucnlc_565";
var suffix = "_suffix_ucnlc_566";
var clearButton = "_clearButton_ucnlc_579";
var prepend = "_prepend_ucnlc_601";
var append = "_append_ucnlc_602";
var shimmer = "_shimmer_ucnlc_1";
var spin = "_spin_ucnlc_1";
var opacityPulse = "_opacityPulse_ucnlc_1";
var popoverIn = "_popoverIn_ucnlc_1";
var fadeIn = "_fadeIn_ucnlc_1";
var collapsibleSlideDown = "_collapsibleSlideDown_ucnlc_1";
var collapsibleSlideUp = "_collapsibleSlideUp_ucnlc_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_ucnlc_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_ucnlc_1";
var blurSwapIn = "_blurSwapIn_ucnlc_1";
var blurSwapOut = "_blurSwapOut_ucnlc_1";
var pulseGlow = "_pulseGlow_ucnlc_1";
var pulseGlowDelayed = "_pulseGlowDelayed_ucnlc_1";
var fade = "_fade_ucnlc_1";
var fadeInUp = "_fadeInUp_ucnlc_1";
var fadeInDown = "_fadeInDown_ucnlc_1";
var fadeInLeft = "_fadeInLeft_ucnlc_1";
var fadeInRight = "_fadeInRight_ucnlc_1";
var fadeOut = "_fadeOut_ucnlc_1";
var fadeOutDown = "_fadeOutDown_ucnlc_1";
var fadeOutUp = "_fadeOutUp_ucnlc_1";
var fadeOutLeft = "_fadeOutLeft_ucnlc_1";
var fadeOutRight = "_fadeOutRight_ucnlc_1";
var ping = "_ping_ucnlc_1";
var blinkBackground = "_blinkBackground_ucnlc_1";
var typingBlink = "_typingBlink_ucnlc_1";
var Input_vue_vue_type_style_index_0_lang_module_default = {
	inputContainer,
	xlarge,
	large,
	medium,
	small,
	mini,
	inputWrapper,
	disabled,
	isTextarea,
	readonly,
	hasPrepend,
	hasAppend,
	input,
	textarea,
	masked,
	prefix,
	suffix,
	clearButton,
	prepend,
	append,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_ucnlc_1",
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
var Input_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Input_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Input_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Input_default as t };
