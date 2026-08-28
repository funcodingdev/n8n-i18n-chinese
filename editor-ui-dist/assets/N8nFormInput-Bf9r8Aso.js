import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t } from "./locale-C_sFEysA.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as Input_default } from "./Input-CkIGinhL.js";
import { t as Checkbox_default } from "./Checkbox-BmLJVGTK.js";
import { t as ElSwitch } from "./switch-Bo2McIde.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-CKqMFO_n.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BOzu5C3w.js";
import { t as N8nLink_default } from "./N8nLink-DzyV3f-o.js";
//#region ../@n8n/design-system/src/components/N8nFormInput/validators.ts
var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var requiredValidator = { validate: (value) => {
	if (typeof value === "string" && !!value.trim()) return false;
	if (typeof value === "number" || typeof value === "boolean") return false;
	return { messageKey: "formInput.validator.fieldRequired" };
} };
var minLengthValidator = { validate: (value, config) => {
	if (typeof value === "string" && value.length < config.minimum) return {
		messageKey: "formInput.validator.minCharactersRequired",
		options: config
	};
	return false;
} };
var maxLengthValidator = { validate: (value, config) => {
	if (typeof value === "string" && value.length > config.maximum) return {
		messageKey: "formInput.validator.maxCharactersRequired",
		options: config
	};
	return false;
} };
var containsNumberValidator = { validate: (value, config) => {
	if (typeof value !== "string") return false;
	if ((value.match(/\d/g) || []).length < config.minimum) return {
		messageKey: "formInput.validator.numbersRequired",
		options: config
	};
	return false;
} };
var emailValidator = { validate: (value) => {
	if (!emailRegex.test(String(value).trim().toLowerCase())) return { messageKey: "formInput.validator.validEmailRequired" };
	return false;
} };
var containsUpperCaseValidator = { validate: (value, config) => {
	if (typeof value !== "string") return false;
	if ((value.match(/[A-Z]/g) || []).length < config.minimum) return {
		messageKey: "formInput.validator.uppercaseCharsRequired",
		options: config
	};
	return false;
} };
var matchRegex = { validate: (value, config) => {
	if (!config.regex.test(`${value}`)) return {
		message: config.message,
		options: config
	};
	return false;
} };
var createPasswordRules = (minLength = 8) => ({ rules: [{
	rules: [
		{
			name: "MIN_LENGTH",
			config: { minimum: minLength }
		},
		{
			name: "CONTAINS_NUMBER",
			config: { minimum: 1 }
		},
		{
			name: "CONTAINS_UPPERCASE",
			config: { minimum: 1 }
		}
	],
	defaultError: {
		messageKey: "formInput.validator.defaultPasswordRequirements",
		options: { minimum: minLength }
	}
}, {
	name: "MAX_LENGTH",
	config: { maximum: 64 }
}] });
var VALIDATORS = {
	REQUIRED: requiredValidator,
	MIN_LENGTH: minLengthValidator,
	MAX_LENGTH: maxLengthValidator,
	CONTAINS_NUMBER: containsNumberValidator,
	VALID_EMAIL: emailValidator,
	CONTAINS_UPPERCASE: containsUpperCaseValidator,
	DEFAULT_PASSWORD_RULES: createPasswordRules(8),
	MATCH_REGEX: matchRegex
};
var getValidationError = (value, validators, validator, config) => {
	if (validator.hasOwnProperty("rules")) {
		const rules = validator.rules;
		for (let i = 0; i < rules.length; i++) {
			if (rules[i].hasOwnProperty("rules")) {
				const error = getValidationError(value, validators, rules[i], config);
				if (error) return error;
			}
			if (rules[i].hasOwnProperty("name")) {
				const rule = rules[i];
				if (!validators[rule.name]) continue;
				const error = getValidationError(value, validators, validators[rule.name], rule.config);
				if (error && "defaultError" in validator && validator.defaultError) return validator.defaultError;
				else if (error) return error;
			}
		}
	} else if (validator.hasOwnProperty("validate")) return validator.validate(value, config);
	return false;
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nFormInput/FormInput.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onKeydown"];
var _hoisted_2 = ["textContent"];
var _hoisted_3 = ["textContent"];
var FormInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FormInput",
	props: {
		modelValue: { type: [
			String,
			Number,
			Boolean,
			null
		] },
		label: {},
		infoText: {},
		required: { type: Boolean },
		showRequiredAsterisk: {
			type: Boolean,
			default: true
		},
		type: { default: "text" },
		placeholder: {},
		tooltipText: {},
		showValidationWarnings: { type: Boolean },
		validateOnBlur: {
			type: Boolean,
			default: true
		},
		documentationUrl: {},
		documentationText: { default: "Open docs" },
		validationRules: {},
		validators: {},
		maxlength: {},
		options: {},
		autocomplete: {},
		name: {},
		focusInitially: { type: Boolean },
		labelSize: { default: "medium" },
		disabled: { type: Boolean },
		activeLabel: {},
		activeColor: {},
		inactiveLabel: {},
		inactiveColor: {},
		teleported: {
			type: Boolean,
			default: true
		},
		tagSize: { default: "large" },
		autosize: {
			type: [Boolean, Object],
			default: false
		}
	},
	emits: [
		"validate",
		"update:modelValue",
		"focus",
		"blur",
		"enter"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const state = reactive({
			hasBlurred: false,
			isTyping: false
		});
		const inputRef = ref(null);
		function getInputValidationError() {
			const rules = props.validationRules || [];
			const validators = {
				...VALIDATORS,
				...props.validators || {}
			};
			if (props.required) {
				const error = getValidationError(props.modelValue, validators, validators.REQUIRED);
				if (error) return error;
			}
			for (let i = 0; i < rules.length; i++) {
				if (rules[i].hasOwnProperty("name")) {
					const rule = rules[i];
					if (validators[rule.name]) {
						const error = getValidationError(props.modelValue, validators, validators[rule.name], rule.config);
						if (error) return error;
					}
				}
				if (rules[i].hasOwnProperty("rules")) {
					const rule = rules[i];
					const error = getValidationError(props.modelValue, validators, rule);
					if (error) return error;
				}
			}
			return null;
		}
		function onBlur() {
			state.hasBlurred = true;
			state.isTyping = false;
			emit("blur");
		}
		function onUpdateModelValue(value) {
			state.isTyping = true;
			emit("update:modelValue", value);
		}
		function onFocus() {
			emit("focus");
		}
		function onEnter(event) {
			event.stopPropagation();
			event.preventDefault();
			emit("enter");
		}
		const validationError = computed(() => {
			const error = getInputValidationError();
			if (error) if ("messageKey" in error) return { message: t(error.messageKey, error.options) };
			else return { message: error.message };
			return null;
		});
		const showErrors = computed(() => !!validationError.value && (props.validateOnBlur && state.hasBlurred && !state.isTyping || props.showValidationWarnings));
		onMounted(() => {
			emit("validate", !validationError.value);
			if (props.focusInitially && inputRef.value) inputRef.value.focus();
		});
		watch(validationError, (error) => emit("validate", !error));
		__expose({ inputRef });
		return (_ctx, _cache) => {
			return __props.type === "checkbox" ? (openBlock(), createBlock(Checkbox_default, {
				key: 0,
				ref_key: "inputRef",
				ref: inputRef,
				label: __props.label,
				disabled: __props.disabled,
				"model-value": __props.modelValue,
				"onUpdate:modelValue": onUpdateModelValue,
				onFocus
			}, null, 8, [
				"label",
				"disabled",
				"model-value"
			])) : __props.type === "toggle" ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
				key: 1,
				"input-name": __props.name,
				label: __props.label,
				"tooltip-text": __props.tooltipText,
				required: __props.required && __props.showRequiredAsterisk,
				size: __props.labelSize
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.tooltipText), 1)]),
				default: withCtx(() => [createVNode(unref(ElSwitch), {
					id: __props.name,
					"model-value": __props.modelValue,
					"active-color": __props.activeColor,
					"inactive-color": __props.inactiveColor,
					"onUpdate:modelValue": onUpdateModelValue
				}, null, 8, [
					"id",
					"model-value",
					"active-color",
					"inactive-color"
				])]),
				_: 1
			}, 8, [
				"input-name",
				"label",
				"tooltip-text",
				"required",
				"size"
			])) : (openBlock(), createBlock(unref(N8nInputLabel_default), {
				key: 2,
				"input-name": __props.name,
				label: __props.label,
				"tooltip-text": __props.tooltipText,
				required: __props.required && __props.showRequiredAsterisk,
				size: __props.labelSize
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(showErrors.value ? _ctx.$style.errorInput : ""),
					onKeydown: [_cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])), withKeys(withModifiers(onEnter, ["exact"]), ["enter"])]
				}, [_ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : __props.type === "select" || __props.type === "multi-select" ? (openBlock(), createBlock(unref(N8nSelect_default), {
					key: 1,
					id: __props.name,
					ref_key: "inputRef",
					ref: inputRef,
					class: normalizeClass({ [_ctx.$style.multiSelectSmallTags]: __props.tagSize === "small" }),
					"model-value": __props.modelValue,
					placeholder: __props.placeholder,
					multiple: __props.type === "multi-select",
					disabled: __props.disabled,
					name: __props.name,
					teleported: __props.teleported,
					size: __props.tagSize,
					"onUpdate:modelValue": onUpdateModelValue,
					onFocus,
					onBlur
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options || [], (option) => {
						return openBlock(), createBlock(unref(N8nOption_default), {
							key: option.value,
							value: option.value,
							label: option.label,
							disabled: !!option.disabled,
							size: "small"
						}, null, 8, [
							"value",
							"label",
							"disabled"
						]);
					}), 128))]),
					_: 1
				}, 8, [
					"id",
					"class",
					"model-value",
					"placeholder",
					"multiple",
					"disabled",
					"name",
					"teleported",
					"size"
				])) : (openBlock(), createBlock(unref(Input_default), {
					key: 2,
					id: __props.name,
					ref_key: "inputRef",
					ref: inputRef,
					name: __props.name,
					type: __props.type,
					placeholder: __props.placeholder,
					"model-value": __props.modelValue,
					maxlength: __props.maxlength,
					autocomplete: __props.autocomplete,
					disabled: __props.disabled,
					size: __props.tagSize,
					autosize: __props.autosize,
					"onUpdate:modelValue": onUpdateModelValue,
					onBlur,
					onFocus
				}, null, 8, [
					"id",
					"name",
					"type",
					"placeholder",
					"model-value",
					"maxlength",
					"autocomplete",
					"disabled",
					"size",
					"autosize"
				]))], 42, _hoisted_1), showErrors.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.errors)
				}, [createBaseVNode("span", { textContent: toDisplayString(validationError.value?.message) }, null, 8, _hoisted_2), __props.documentationUrl && __props.documentationText ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					to: __props.documentationUrl,
					"new-window": true,
					size: "small",
					theme: "danger"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.documentationText), 1)]),
					_: 1
				}, 8, ["to"])) : createCommentVNode("", true)], 2)) : __props.infoText ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.infoText)
				}, [createBaseVNode("span", {
					size: "small",
					textContent: toDisplayString(__props.infoText)
				}, null, 8, _hoisted_3)], 2)) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"input-name",
				"label",
				"tooltip-text",
				"required",
				"size"
			]));
		};
	}
});
var FormInput_vue_vue_type_style_index_0_lang_module_default = {
	infoText: "_infoText_yn0ga_125",
	errors: "_errors_yn0ga_132 _infoText_yn0ga_125",
	errorInput: "_errorInput_yn0ga_137",
	multiSelectSmallTags: "_multiSelectSmallTags_yn0ga_141"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nFormInput/index.ts
var N8nFormInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(FormInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": FormInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { createPasswordRules as n, N8nFormInput_default as t };
