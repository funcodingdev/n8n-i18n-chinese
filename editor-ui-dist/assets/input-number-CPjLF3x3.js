import { $ as openBlock, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, Q as onUpdated, S as computed, T as createCommentVNode, X as onMounted, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, m as withKeys, mn as isString, tn as init_shared_esm_bundler, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { o as debugWarn, s as throwError } from "./style-aw1HwLDr.js";
import { a as buildProps, h as isUndefined, p as isNumber, r as useNamespace } from "./use-namespace-xWWi2xIE.js";
import { i as isNil } from "./focus-trap-CIpXr-Z6.js";
import { C as minus_default, E as plus_default, a as arrow_down_default, c as arrow_up_default, n as withInstall, t as _export_sfc } from "./plugin-vue_export-helper-AbXb0iQc.js";
import { t as ElIcon } from "./icon-DEwwsnFu.js";
import { n as INPUT_EVENT, r as UPDATE_MODEL_EVENT, t as CHANGE_EVENT } from "./event-BWR2J8pj.js";
import { r as useSizeProp } from "./use-size-8oGTaPnQ.js";
import { t as ElInput } from "./input-DcFckfM5.js";
import { a as useLocale } from "./use-z-index-DYH4GP29.js";
import { i as useFormSize, r as useFormDisabled, t as useFormItem } from "./use-form-item-CV4_f5CE.js";
import { t as vRepeatClick } from "./repeat-click-BBWrkIio.js";
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/input-number/src/input-number.mjs
var inputNumberProps = buildProps({
	id: {
		type: String,
		default: void 0
	},
	step: {
		type: Number,
		default: 1
	},
	stepStrictly: Boolean,
	max: {
		type: Number,
		default: Number.POSITIVE_INFINITY
	},
	min: {
		type: Number,
		default: Number.NEGATIVE_INFINITY
	},
	modelValue: Number,
	readonly: Boolean,
	disabled: Boolean,
	size: useSizeProp,
	controls: {
		type: Boolean,
		default: true
	},
	controlsPosition: {
		type: String,
		default: "",
		values: ["", "right"]
	},
	valueOnClear: {
		type: [
			String,
			Number,
			null
		],
		validator: (val) => val === null || isNumber(val) || ["min", "max"].includes(val),
		default: null
	},
	name: String,
	label: String,
	placeholder: String,
	precision: {
		type: Number,
		validator: (val) => val >= 0 && val === Number.parseInt(`${val}`, 10)
	},
	validateEvent: {
		type: Boolean,
		default: true
	}
});
var inputNumberEmits = {
	[CHANGE_EVENT]: (cur, prev) => prev !== cur,
	blur: (e) => e instanceof FocusEvent,
	focus: (e) => e instanceof FocusEvent,
	[INPUT_EVENT]: (val) => isNumber(val) || isNil(val),
	[UPDATE_MODEL_EVENT]: (val) => isNumber(val) || isNil(val)
};
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/input-number/src/input-number2.mjs
init_shared_esm_bundler();
var _hoisted_1 = ["aria-label", "onKeydown"];
var _hoisted_2 = ["aria-label", "onKeydown"];
//#endregion
//#region ../../../node_modules/.pnpm/element-plus@2.4.3_patch_hash=fbab57fe3750e430abd5d5e7c04cbf1b6a8f9f1c9676b14c73b77d3e0_ad2671a9dc4701bd91b53b83324d31e0/node_modules/element-plus/es/components/input-number/index.mjs
var ElInputNumber = withInstall(/* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	...defineComponent({ name: "ElInputNumber" }),
	props: inputNumberProps,
	emits: inputNumberEmits,
	setup(__props, { expose, emit }) {
		const props = __props;
		const { t } = useLocale();
		const ns = useNamespace("input-number");
		const input = ref();
		const data = reactive({
			currentValue: props.modelValue,
			userInput: null
		});
		const { formItem } = useFormItem();
		const minDisabled = computed(() => isNumber(props.modelValue) && props.modelValue <= props.min);
		const maxDisabled = computed(() => isNumber(props.modelValue) && props.modelValue >= props.max);
		const numPrecision = computed(() => {
			const stepPrecision = getPrecision(props.step);
			if (!isUndefined(props.precision)) {
				if (stepPrecision > props.precision) debugWarn("InputNumber", "precision should not be less than the decimal places of step");
				return props.precision;
			} else return Math.max(getPrecision(props.modelValue), stepPrecision);
		});
		const controlsAtRight = computed(() => {
			return props.controls && props.controlsPosition === "right";
		});
		const inputNumberSize = useFormSize();
		const inputNumberDisabled = useFormDisabled();
		const displayValue = computed(() => {
			if (data.userInput !== null) return data.userInput;
			let currentValue = data.currentValue;
			if (isNil(currentValue)) return "";
			if (isNumber(currentValue)) {
				if (Number.isNaN(currentValue)) return "";
				if (!isUndefined(props.precision)) currentValue = currentValue.toFixed(props.precision);
			}
			return currentValue;
		});
		const toPrecision = (num, pre) => {
			if (isUndefined(pre)) pre = numPrecision.value;
			if (pre === 0) return Math.round(num);
			let snum = String(num);
			const pointPos = snum.indexOf(".");
			if (pointPos === -1) return num;
			if (!snum.replace(".", "").split("")[pointPos + pre]) return num;
			const length = snum.length;
			if (snum.charAt(length - 1) === "5") snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
			return Number.parseFloat(Number(snum).toFixed(pre));
		};
		const getPrecision = (value) => {
			if (isNil(value)) return 0;
			const valueString = value.toString();
			const dotPosition = valueString.indexOf(".");
			let precision = 0;
			if (dotPosition !== -1) precision = valueString.length - dotPosition - 1;
			return precision;
		};
		const ensurePrecision = (val, coefficient = 1) => {
			if (!isNumber(val)) return data.currentValue;
			return toPrecision(val + props.step * coefficient);
		};
		const increase = () => {
			if (props.readonly || inputNumberDisabled.value || maxDisabled.value) return;
			setCurrentValue(ensurePrecision(Number(displayValue.value) || 0));
			emit(INPUT_EVENT, data.currentValue);
		};
		const decrease = () => {
			if (props.readonly || inputNumberDisabled.value || minDisabled.value) return;
			setCurrentValue(ensurePrecision(Number(displayValue.value) || 0, -1));
			emit(INPUT_EVENT, data.currentValue);
		};
		const verifyValue = (value, update) => {
			const { max, min, step, precision, stepStrictly, valueOnClear } = props;
			if (max < min) throwError("InputNumber", "min should not be greater than max.");
			let newVal = Number(value);
			if (isNil(value) || Number.isNaN(newVal)) return null;
			if (value === "") {
				if (valueOnClear === null) return null;
				newVal = isString(valueOnClear) ? {
					min,
					max
				}[valueOnClear] : valueOnClear;
			}
			if (stepStrictly) newVal = toPrecision(Math.round(newVal / step) * step, precision);
			if (!isUndefined(precision)) newVal = toPrecision(newVal, precision);
			if (newVal > max || newVal < min) {
				newVal = newVal > max ? max : min;
				update && emit("update:modelValue", newVal);
			}
			return newVal;
		};
		const setCurrentValue = (value, emitChange = true) => {
			var _a;
			const oldVal = data.currentValue;
			const newVal = verifyValue(value);
			if (!emitChange) {
				emit(UPDATE_MODEL_EVENT, newVal);
				return;
			}
			if (oldVal === newVal) return;
			data.userInput = null;
			emit(UPDATE_MODEL_EVENT, newVal);
			emit(CHANGE_EVENT, newVal, oldVal);
			if (props.validateEvent) (_a = formItem == null ? void 0 : formItem.validate) == null || _a.call(formItem, "change").catch((err) => debugWarn(err));
			data.currentValue = newVal;
		};
		const handleInput = (value) => {
			data.userInput = value;
			const newVal = value === "" ? null : Number(value);
			emit(INPUT_EVENT, newVal);
			setCurrentValue(newVal, false);
		};
		const handleInputChange = (value) => {
			const newVal = value !== "" ? Number(value) : "";
			if (isNumber(newVal) && !Number.isNaN(newVal) || value === "") setCurrentValue(newVal);
			data.userInput = null;
		};
		const focus = () => {
			var _a, _b;
			(_b = (_a = input.value) == null ? void 0 : _a.focus) == null || _b.call(_a);
		};
		const blur = () => {
			var _a, _b;
			(_b = (_a = input.value) == null ? void 0 : _a.blur) == null || _b.call(_a);
		};
		const handleFocus = (event) => {
			emit("focus", event);
		};
		const handleBlur = (event) => {
			var _a;
			emit("blur", event);
			if (props.validateEvent) (_a = formItem == null ? void 0 : formItem.validate) == null || _a.call(formItem, "blur").catch((err) => debugWarn(err));
		};
		watch(() => props.modelValue, (value) => {
			const userInput = verifyValue(data.userInput);
			const newValue = verifyValue(value, true);
			if (!isNumber(userInput) && (!userInput || userInput !== newValue)) {
				data.currentValue = newValue;
				data.userInput = null;
			}
		}, { immediate: true });
		onMounted(() => {
			var _a;
			const { min, max, modelValue } = props;
			const innerInput = (_a = input.value) == null ? void 0 : _a.input;
			innerInput.setAttribute("role", "spinbutton");
			if (Number.isFinite(max)) innerInput.setAttribute("aria-valuemax", String(max));
			else innerInput.removeAttribute("aria-valuemax");
			if (Number.isFinite(min)) innerInput.setAttribute("aria-valuemin", String(min));
			else innerInput.removeAttribute("aria-valuemin");
			innerInput.setAttribute("aria-valuenow", data.currentValue || data.currentValue === 0 ? String(data.currentValue) : "");
			innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
			if (!isNumber(modelValue) && modelValue != null) {
				let val = Number(modelValue);
				if (Number.isNaN(val)) val = null;
				emit(UPDATE_MODEL_EVENT, val);
			}
		});
		onUpdated(() => {
			var _a, _b;
			((_a = input.value) == null ? void 0 : _a.input)?.setAttribute("aria-valuenow", `${(_b = data.currentValue) != null ? _b : ""}`);
		});
		expose({
			focus,
			blur
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([
					unref(ns).b(),
					unref(ns).m(unref(inputNumberSize)),
					unref(ns).is("disabled", unref(inputNumberDisabled)),
					unref(ns).is("without-controls", !_ctx.controls),
					unref(ns).is("controls-right", unref(controlsAtRight))
				]),
				onDragstart: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"]))
			}, [
				_ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
					key: 0,
					role: "button",
					"aria-label": unref(t)("el.inputNumber.decrease"),
					class: normalizeClass([unref(ns).e("decrease"), unref(ns).is("disabled", unref(minDisabled))]),
					onKeydown: withKeys(decrease, ["enter"])
				}, [createVNode(unref(ElIcon), null, {
					default: withCtx(() => [unref(controlsAtRight) ? (openBlock(), createBlock(unref(arrow_down_default), { key: 0 })) : (openBlock(), createBlock(unref(minus_default), { key: 1 }))]),
					_: 1
				})], 42, _hoisted_1)), [[unref(vRepeatClick), decrease]]) : createCommentVNode("v-if", true),
				_ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
					key: 1,
					role: "button",
					"aria-label": unref(t)("el.inputNumber.increase"),
					class: normalizeClass([unref(ns).e("increase"), unref(ns).is("disabled", unref(maxDisabled))]),
					onKeydown: withKeys(increase, ["enter"])
				}, [createVNode(unref(ElIcon), null, {
					default: withCtx(() => [unref(controlsAtRight) ? (openBlock(), createBlock(unref(arrow_up_default), { key: 0 })) : (openBlock(), createBlock(unref(plus_default), { key: 1 }))]),
					_: 1
				})], 42, _hoisted_2)), [[unref(vRepeatClick), increase]]) : createCommentVNode("v-if", true),
				createVNode(unref(ElInput), {
					id: _ctx.id,
					ref_key: "input",
					ref: input,
					type: "number",
					step: _ctx.step,
					"model-value": unref(displayValue),
					placeholder: _ctx.placeholder,
					readonly: _ctx.readonly,
					disabled: unref(inputNumberDisabled),
					size: unref(inputNumberSize),
					max: _ctx.max,
					min: _ctx.min,
					name: _ctx.name,
					label: _ctx.label,
					"validate-event": false,
					onWheel: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"])),
					onKeydown: [withKeys(withModifiers(increase, ["prevent"]), ["up"]), withKeys(withModifiers(decrease, ["prevent"]), ["down"])],
					onBlur: handleBlur,
					onFocus: handleFocus,
					onInput: handleInput,
					onChange: handleInputChange
				}, null, 8, [
					"id",
					"step",
					"model-value",
					"placeholder",
					"readonly",
					"disabled",
					"size",
					"max",
					"min",
					"name",
					"label",
					"onKeydown"
				])
			], 34);
		};
	}
}), [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));
//#endregion
export { ElInputNumber as t };
