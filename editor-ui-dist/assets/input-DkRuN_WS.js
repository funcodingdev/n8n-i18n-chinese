import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, Jt as NOOP, N as defineComponent, P as getCurrentInstance, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, W as nextTick, X as onMounted, _ as Fragment, an as isFunction, bn as normalizeStyle, bt as withCtx, cn as isObject, ft as useSlots, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, lt as useAttrs$1, mn as isString, p as vShow, st as resolveDynamicComponent, tn as init_shared_esm_bundler, vn as normalizeClass, w as createBlock, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { h as useResizeObserver, m as useEventListener, o as debugWarn, u as isFirefox, y as isClient } from "./style-D4NTVD8o.js";
import { _ as fromPairs, a as buildProps, o as definePropType, p as isNumber, r as useNamespace } from "./use-namespace-BOyjzxct.js";
import { i as isNil } from "./focus-trap-B9RNkCJO.js";
import { b as hide_default, f as circle_close_default, k as view_default, n as withInstall, t as _export_sfc } from "./plugin-vue_export-helper-BwbYAlq0.js";
import { c as ValidateComponentsMap, l as iconPropType, t as ElIcon } from "./icon-a_YnoStc.js";
import { r as UPDATE_MODEL_EVENT } from "./event-DZ9a9VLV.js";
import { r as useSizeProp } from "./use-size-DQ4TyUL1.js";
import { i as useFormSize, n as useFormItemInputId, r as useFormDisabled, t as useFormItem } from "./use-form-item-BbslK5UJ.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/i18n.mjs
var isKorean = (text) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text);
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/utils/typescript.mjs
var mutable = (val) => val;
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-attrs/index.mjs
var DEFAULT_EXCLUDE_KEYS = ["class", "style"];
var LISTENER_PREFIX = /^on[A-Z]/;
var useAttrs = (params = {}) => {
	const { excludeListeners = false, excludeKeys } = params;
	const allExcludeKeys = computed(() => {
		return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
	});
	const instance = getCurrentInstance();
	if (!instance) {
		debugWarn("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function");
		return computed(() => ({}));
	}
	return computed(() => {
		var _a;
		return fromPairs(Object.entries((_a = instance.proxy) == null ? void 0 : _a.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
	});
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-cursor/index.mjs
function useCursor(input) {
	const selectionRef = ref();
	function recordCursor() {
		if (input.value == void 0) return;
		const { selectionStart, selectionEnd, value } = input.value;
		if (selectionStart == null || selectionEnd == null) return;
		selectionRef.value = {
			selectionStart,
			selectionEnd,
			value,
			beforeTxt: value.slice(0, Math.max(0, selectionStart)),
			afterTxt: value.slice(Math.max(0, selectionEnd))
		};
	}
	function setCursor() {
		if (input.value == void 0 || selectionRef.value == void 0) return;
		const { value } = input.value;
		const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
		if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0) return;
		let startPos = value.length;
		if (value.endsWith(afterTxt)) startPos = value.length - afterTxt.length;
		else if (value.startsWith(beforeTxt)) startPos = beforeTxt.length;
		else {
			const beforeLastChar = beforeTxt[selectionStart - 1];
			const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
			if (newIndex !== -1) startPos = newIndex + 1;
		}
		input.value.setSelectionRange(startPos, startPos);
	}
	return [recordCursor, setCursor];
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/hooks/use-focus-controller/index.mjs
init_shared_esm_bundler();
function useFocusController(target, { afterFocus, beforeBlur, afterBlur } = {}) {
	const { emit } = getCurrentInstance();
	const wrapperRef = shallowRef();
	const isFocused = ref(false);
	const handleFocus = (event) => {
		if (isFocused.value) return;
		isFocused.value = true;
		emit("focus", event);
		afterFocus?.();
	};
	const handleBlur = (event) => {
		var _a;
		if ((isFunction(beforeBlur) ? beforeBlur(event) : false) || event.relatedTarget && ((_a = wrapperRef.value) == null ? void 0 : _a.contains(event.relatedTarget))) return;
		isFocused.value = false;
		emit("blur", event);
		afterBlur?.();
	};
	const handleClick = () => {
		var _a;
		(_a = target.value) == null || _a.focus();
	};
	watch(wrapperRef, (el) => {
		if (el) el.setAttribute("tabindex", "-1");
	});
	useEventListener(wrapperRef, "click", handleClick);
	return {
		wrapperRef,
		isFocused,
		handleFocus,
		handleBlur
	};
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/input/src/utils.mjs
var hiddenTextarea = void 0;
var HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  ${isFirefox() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
var CONTEXT_STYLE = [
	"letter-spacing",
	"line-height",
	"padding-top",
	"padding-bottom",
	"font-family",
	"font-weight",
	"font-size",
	"text-rendering",
	"text-transform",
	"width",
	"text-indent",
	"padding-left",
	"padding-right",
	"border-width",
	"box-sizing"
];
function calculateNodeStyling(targetElement) {
	const style = window.getComputedStyle(targetElement);
	const boxSizing = style.getPropertyValue("box-sizing");
	const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
	const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
	return {
		contextStyle: CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";"),
		paddingSize,
		borderSize,
		boxSizing
	};
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
	var _a;
	if (!hiddenTextarea) {
		hiddenTextarea = document.createElement("textarea");
		document.body.appendChild(hiddenTextarea);
	}
	const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
	hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
	hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
	let height = hiddenTextarea.scrollHeight;
	const result = {};
	if (boxSizing === "border-box") height = height + borderSize;
	else if (boxSizing === "content-box") height = height - paddingSize;
	hiddenTextarea.value = "";
	const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
	if (isNumber(minRows)) {
		let minHeight = singleRowHeight * minRows;
		if (boxSizing === "border-box") minHeight = minHeight + paddingSize + borderSize;
		height = Math.max(minHeight, height);
		result.minHeight = `${minHeight}px`;
	}
	if (isNumber(maxRows)) {
		let maxHeight = singleRowHeight * maxRows;
		if (boxSizing === "border-box") maxHeight = maxHeight + paddingSize + borderSize;
		height = Math.min(maxHeight, height);
	}
	result.height = `${height}px`;
	(_a = hiddenTextarea.parentNode) == null || _a.removeChild(hiddenTextarea);
	hiddenTextarea = void 0;
	return result;
}
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/input/src/input.mjs
init_shared_esm_bundler();
var inputProps = buildProps({
	id: {
		type: String,
		default: void 0
	},
	size: useSizeProp,
	disabled: Boolean,
	modelValue: {
		type: definePropType([
			String,
			Number,
			Object
		]),
		default: ""
	},
	type: {
		type: String,
		default: "text"
	},
	resize: {
		type: String,
		values: [
			"none",
			"both",
			"horizontal",
			"vertical"
		]
	},
	autosize: {
		type: definePropType([Boolean, Object]),
		default: false
	},
	autocomplete: {
		type: String,
		default: "off"
	},
	formatter: { type: Function },
	parser: { type: Function },
	placeholder: { type: String },
	form: { type: String },
	readonly: {
		type: Boolean,
		default: false
	},
	clearable: {
		type: Boolean,
		default: false
	},
	showPassword: {
		type: Boolean,
		default: false
	},
	showWordLimit: {
		type: Boolean,
		default: false
	},
	suffixIcon: { type: iconPropType },
	prefixIcon: { type: iconPropType },
	containerRole: {
		type: String,
		default: void 0
	},
	label: {
		type: String,
		default: void 0
	},
	tabindex: {
		type: [String, Number],
		default: 0
	},
	validateEvent: {
		type: Boolean,
		default: true
	},
	inputStyle: {
		type: definePropType([
			Object,
			Array,
			String
		]),
		default: () => mutable({})
	},
	autofocus: {
		type: Boolean,
		default: false
	}
});
var inputEmits = {
	[UPDATE_MODEL_EVENT]: (value) => isString(value),
	input: (value) => isString(value),
	change: (value) => isString(value),
	focus: (evt) => evt instanceof FocusEvent,
	blur: (evt) => evt instanceof FocusEvent,
	clear: () => true,
	mouseleave: (evt) => evt instanceof MouseEvent,
	mouseenter: (evt) => evt instanceof MouseEvent,
	keydown: (evt) => evt instanceof Event,
	compositionstart: (evt) => evt instanceof CompositionEvent,
	compositionupdate: (evt) => evt instanceof CompositionEvent,
	compositionend: (evt) => evt instanceof CompositionEvent
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/input/src/input2.mjs
init_shared_esm_bundler();
var _hoisted_1 = ["role"];
var _hoisted_2 = [
	"id",
	"type",
	"disabled",
	"formatter",
	"parser",
	"readonly",
	"autocomplete",
	"tabindex",
	"aria-label",
	"placeholder",
	"form",
	"autofocus"
];
var _hoisted_3 = [
	"id",
	"tabindex",
	"disabled",
	"readonly",
	"autocomplete",
	"aria-label",
	"placeholder",
	"form",
	"autofocus"
];
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/input/index.mjs
var ElInput = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({
		name: "ElInput",
		inheritAttrs: false
	}),
	props: inputProps,
	emits: inputEmits,
	setup(__props, { expose, emit }) {
		const props = __props;
		const rawAttrs = useAttrs$1();
		const slots = useSlots();
		const containerAttrs = computed(() => {
			const comboBoxAttrs = {};
			if (props.containerRole === "combobox") {
				comboBoxAttrs["aria-haspopup"] = rawAttrs["aria-haspopup"];
				comboBoxAttrs["aria-owns"] = rawAttrs["aria-owns"];
				comboBoxAttrs["aria-expanded"] = rawAttrs["aria-expanded"];
			}
			return comboBoxAttrs;
		});
		const containerKls = computed(() => [
			props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
			nsInput.m(inputSize.value),
			nsInput.is("disabled", inputDisabled.value),
			nsInput.is("exceed", inputExceed.value),
			{
				[nsInput.b("group")]: slots.prepend || slots.append,
				[nsInput.bm("group", "append")]: slots.append,
				[nsInput.bm("group", "prepend")]: slots.prepend,
				[nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
				[nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
				[nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value
			},
			rawAttrs.class
		]);
		const wrapperKls = computed(() => [nsInput.e("wrapper"), nsInput.is("focus", isFocused.value)]);
		const attrs = useAttrs({ excludeKeys: computed(() => {
			return Object.keys(containerAttrs.value);
		}) });
		const { form, formItem } = useFormItem();
		const { inputId } = useFormItemInputId(props, { formItemContext: formItem });
		const inputSize = useFormSize();
		const inputDisabled = useFormDisabled();
		const nsInput = useNamespace("input");
		const nsTextarea = useNamespace("textarea");
		const input = shallowRef();
		const textarea = shallowRef();
		const hovering = ref(false);
		const isComposing = ref(false);
		const passwordVisible = ref(false);
		const countStyle = ref();
		const textareaCalcStyle = shallowRef(props.inputStyle);
		const _ref = computed(() => input.value || textarea.value);
		const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, { afterBlur() {
			var _a;
			if (props.validateEvent) (_a = formItem == null ? void 0 : formItem.validate) == null || _a.call(formItem, "blur").catch((err) => debugWarn(err));
		} });
		const needStatusIcon = computed(() => {
			var _a;
			return (_a = form == null ? void 0 : form.statusIcon) != null ? _a : false;
		});
		const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
		const validateIcon = computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
		const passwordIcon = computed(() => passwordVisible.value ? view_default : hide_default);
		const containerStyle = computed(() => [rawAttrs.style, props.inputStyle]);
		const textareaStyle = computed(() => [
			props.inputStyle,
			textareaCalcStyle.value,
			{ resize: props.resize }
		]);
		const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
		const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (isFocused.value || hovering.value));
		const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (!!nativeInputValue.value || isFocused.value));
		const isWordLimitVisible = computed(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
		const textLength = computed(() => nativeInputValue.value.length);
		const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
		const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
		const [recordCursor, setCursor] = useCursor(input);
		useResizeObserver(textarea, (entries) => {
			onceInitSizeTextarea();
			if (!isWordLimitVisible.value || props.resize !== "both") return;
			const { width } = entries[0].contentRect;
			countStyle.value = { right: `calc(100% - ${width + 15 + 6}px)` };
		});
		const resizeTextarea = () => {
			const { type, autosize } = props;
			if (!isClient || type !== "textarea" || !textarea.value) return;
			if (autosize) {
				const minRows = isObject(autosize) ? autosize.minRows : void 0;
				const maxRows = isObject(autosize) ? autosize.maxRows : void 0;
				const textareaStyle2 = calcTextareaHeight(textarea.value, minRows, maxRows);
				textareaCalcStyle.value = {
					overflowY: "hidden",
					...textareaStyle2
				};
				nextTick(() => {
					textarea.value.offsetHeight;
					textareaCalcStyle.value = textareaStyle2;
				});
			} else textareaCalcStyle.value = { minHeight: calcTextareaHeight(textarea.value).minHeight };
		};
		const createOnceInitResize = (resizeTextarea2) => {
			let isInit = false;
			return () => {
				var _a;
				if (isInit || !props.autosize) return;
				if (!(((_a = textarea.value) == null ? void 0 : _a.offsetParent) === null)) {
					resizeTextarea2();
					isInit = true;
				}
			};
		};
		const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
		const setNativeInputValue = () => {
			const input2 = _ref.value;
			const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
			if (!input2 || input2.value === formatterValue) return;
			input2.value = formatterValue;
		};
		const handleInput = async (event) => {
			recordCursor();
			let { value } = event.target;
			if (props.formatter) value = props.parser ? props.parser(value) : value;
			if (isComposing.value) return;
			if (value === nativeInputValue.value) {
				setNativeInputValue();
				return;
			}
			emit(UPDATE_MODEL_EVENT, value);
			emit("input", value);
			await nextTick();
			setNativeInputValue();
			setCursor();
		};
		const handleChange = (event) => {
			emit("change", event.target.value);
		};
		const handleCompositionStart = (event) => {
			emit("compositionstart", event);
			isComposing.value = true;
		};
		const handleCompositionUpdate = (event) => {
			var _a;
			emit("compositionupdate", event);
			const text = (_a = event.target) == null ? void 0 : _a.value;
			isComposing.value = !isKorean(text[text.length - 1] || "");
		};
		const handleCompositionEnd = (event) => {
			emit("compositionend", event);
			if (isComposing.value) {
				isComposing.value = false;
				handleInput(event);
			}
		};
		const handlePasswordVisible = () => {
			passwordVisible.value = !passwordVisible.value;
			focus();
		};
		const focus = async () => {
			var _a;
			await nextTick();
			(_a = _ref.value) == null || _a.focus();
		};
		const blur = () => {
			var _a;
			return (_a = _ref.value) == null ? void 0 : _a.blur();
		};
		const handleMouseLeave = (evt) => {
			hovering.value = false;
			emit("mouseleave", evt);
		};
		const handleMouseEnter = (evt) => {
			hovering.value = true;
			emit("mouseenter", evt);
		};
		const handleKeydown = (evt) => {
			emit("keydown", evt);
		};
		const select = () => {
			var _a;
			(_a = _ref.value) == null || _a.select();
		};
		const clear = () => {
			emit(UPDATE_MODEL_EVENT, "");
			emit("change", "");
			emit("clear");
			emit("input", "");
		};
		watch(() => props.modelValue, () => {
			var _a;
			nextTick(() => resizeTextarea());
			if (props.validateEvent) (_a = formItem == null ? void 0 : formItem.validate) == null || _a.call(formItem, "change").catch((err) => debugWarn(err));
		});
		watch(nativeInputValue, () => setNativeInputValue());
		watch(() => props.type, async () => {
			await nextTick();
			setNativeInputValue();
			resizeTextarea();
		});
		onMounted(() => {
			if (!props.formatter && props.parser) debugWarn("ElInput", "If you set the parser, you also need to set the formatter.");
			setNativeInputValue();
			nextTick(resizeTextarea);
		});
		expose({
			input,
			textarea,
			ref: _ref,
			textareaStyle,
			autosize: toRef(props, "autosize"),
			focus,
			blur,
			select,
			clear,
			resizeTextarea
		});
		return (_ctx, _cache) => {
			return withDirectives((openBlock(), createElementBlock("div", mergeProps(unref(containerAttrs), {
				class: unref(containerKls),
				style: unref(containerStyle),
				role: _ctx.containerRole,
				onMouseenter: handleMouseEnter,
				onMouseleave: handleMouseLeave
			}), [createCommentVNode(" input "), _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createCommentVNode(" prepend slot "),
				_ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref(nsInput).be("group", "prepend"))
				}, [renderSlot(_ctx.$slots, "prepend")], 2)) : createCommentVNode("v-if", true),
				createBaseVNode("div", {
					ref_key: "wrapperRef",
					ref: wrapperRef,
					class: normalizeClass(unref(wrapperKls))
				}, [
					createCommentVNode(" prefix slot "),
					_ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(unref(nsInput).e("prefix"))
					}, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("prefix-inner")) }, [renderSlot(_ctx.$slots, "prefix"), _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
						key: 0,
						class: normalizeClass(unref(nsInput).e("icon"))
					}, {
						default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("v-if", true)], 2)], 2)) : createCommentVNode("v-if", true),
					createBaseVNode("input", mergeProps({
						id: unref(inputId),
						ref_key: "input",
						ref: input,
						class: unref(nsInput).e("inner")
					}, unref(attrs), {
						type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
						disabled: unref(inputDisabled),
						formatter: _ctx.formatter,
						parser: _ctx.parser,
						readonly: _ctx.readonly,
						autocomplete: _ctx.autocomplete,
						tabindex: _ctx.tabindex,
						"aria-label": _ctx.label,
						placeholder: _ctx.placeholder,
						style: _ctx.inputStyle,
						form: props.form,
						autofocus: props.autofocus,
						onCompositionstart: handleCompositionStart,
						onCompositionupdate: handleCompositionUpdate,
						onCompositionend: handleCompositionEnd,
						onInput: handleInput,
						onFocus: _cache[0] || (_cache[0] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
						onBlur: _cache[1] || (_cache[1] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
						onChange: handleChange,
						onKeydown: handleKeydown
					}), null, 16, _hoisted_2),
					createCommentVNode(" suffix slot "),
					unref(suffixVisible) ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(unref(nsInput).e("suffix"))
					}, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("suffix-inner")) }, [
						!unref(showClear) || !unref(showPwdVisible) || !unref(isWordLimitVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [renderSlot(_ctx.$slots, "suffix"), _ctx.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
							key: 0,
							class: normalizeClass(unref(nsInput).e("icon"))
						}, {
							default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true),
						unref(showClear) ? (openBlock(), createBlock(unref(ElIcon), {
							key: 1,
							class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
							onMousedown: withModifiers(unref(NOOP), ["prevent"]),
							onClick: clear
						}, {
							default: withCtx(() => [createVNode(unref(circle_close_default))]),
							_: 1
						}, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
						unref(showPwdVisible) ? (openBlock(), createBlock(unref(ElIcon), {
							key: 2,
							class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
							onClick: handlePasswordVisible
						}, {
							default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(passwordIcon))))]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("v-if", true),
						unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
							key: 3,
							class: normalizeClass(unref(nsInput).e("count"))
						}, [createBaseVNode("span", { class: normalizeClass(unref(nsInput).e("count-inner")) }, toDisplayString(unref(textLength)) + " / " + toDisplayString(unref(attrs).maxlength), 3)], 2)) : createCommentVNode("v-if", true),
						unref(validateState) && unref(validateIcon) && unref(needStatusIcon) ? (openBlock(), createBlock(unref(ElIcon), {
							key: 4,
							class: normalizeClass([
								unref(nsInput).e("icon"),
								unref(nsInput).e("validateIcon"),
								unref(nsInput).is("loading", unref(validateState) === "validating")
							])
						}, {
							default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(validateIcon))))]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("v-if", true)
					], 2)], 2)) : createCommentVNode("v-if", true)
				], 2),
				createCommentVNode(" append slot "),
				_ctx.$slots.append ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(unref(nsInput).be("group", "append"))
				}, [renderSlot(_ctx.$slots, "append")], 2)) : createCommentVNode("v-if", true)
			], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				createCommentVNode(" textarea "),
				createBaseVNode("textarea", mergeProps({
					id: unref(inputId),
					ref_key: "textarea",
					ref: textarea,
					class: unref(nsTextarea).e("inner")
				}, unref(attrs), {
					tabindex: _ctx.tabindex,
					disabled: unref(inputDisabled),
					readonly: _ctx.readonly,
					autocomplete: _ctx.autocomplete,
					style: unref(textareaStyle),
					"aria-label": _ctx.label,
					placeholder: _ctx.placeholder,
					form: props.form,
					autofocus: props.autofocus,
					onCompositionstart: handleCompositionStart,
					onCompositionupdate: handleCompositionUpdate,
					onCompositionend: handleCompositionEnd,
					onInput: handleInput,
					onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
					onBlur: _cache[3] || (_cache[3] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
					onChange: handleChange,
					onKeydown: handleKeydown
				}), null, 16, _hoisted_3),
				unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
					key: 0,
					style: normalizeStyle(countStyle.value),
					class: normalizeClass(unref(nsInput).e("count"))
				}, toDisplayString(unref(textLength)) + " / " + toDisplayString(unref(attrs).maxlength), 7)) : createCommentVNode("v-if", true)
			], 64))], 16, _hoisted_1)), [[vShow, _ctx.type !== "hidden"]]);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));
//#endregion
export { isKorean as i, useFocusController as n, mutable as r, ElInput as t };
