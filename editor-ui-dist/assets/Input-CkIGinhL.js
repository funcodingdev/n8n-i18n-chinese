import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, W as nextTick, X as onMounted, c as useCssModule, ft as useSlots, gt as watch, it as renderSlot, j as createVNode, lt as useAttrs, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as Icon_default } from "./Icon-D-jZgYpP.js";
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
var Input_vue_vue_type_style_index_0_lang_module_default = {
	inputContainer: "_inputContainer_9q01u_125",
	xlarge: "_xlarge_9q01u_145",
	large: "_large_9q01u_150",
	medium: "_medium_9q01u_155",
	small: "_small_9q01u_160",
	mini: "_mini_9q01u_166",
	inputWrapper: "_inputWrapper_9q01u_173",
	disabled: "_disabled_9q01u_194",
	isTextarea: "_isTextarea_9q01u_205",
	readonly: "_readonly_9q01u_214",
	hasPrepend: "_hasPrepend_9q01u_218",
	hasAppend: "_hasAppend_9q01u_223",
	input: "_input_9q01u_125",
	textarea: "_textarea_9q01u_254",
	masked: "_masked_9q01u_284",
	prefix: "_prefix_9q01u_288",
	suffix: "_suffix_9q01u_289",
	clearButton: "_clearButton_9q01u_302",
	prepend: "_prepend_9q01u_324",
	append: "_append_9q01u_325"
};
var Input_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Input_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Input_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Input_default as t };
