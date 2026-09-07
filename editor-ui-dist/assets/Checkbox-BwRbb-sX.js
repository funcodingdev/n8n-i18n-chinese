import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, Gt as unref, H as mergeModels, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, dt as useModel, ft as useSlots, h as withModifiers, it as renderSlot, j as createVNode, lt as useAttrs, m as withKeys, st as resolveDynamicComponent, ut as useId, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as Icon_default } from "./Icon-C4YMOb-m.js";
import { F as reactivePick } from "./dist-BKkqSB6h.js";
import { i as isEqual, r as useFormControl } from "./Collection-CV7FjEVf.js";
import { c as useForwardExpose, i as Presence_default, j as createContext, m as useVModel, n as Primitive, s as useForwardProps } from "./VisuallyHidden-lv4qVqRn.js";
import { t as isNullish } from "./nullish-DsACEi3N.js";
import { t as isValueEqualOrExist } from "./isValueEqualOrExist-BiFXY21j.js";
import { n as RovingFocusItem_default, t as VisuallyHiddenInput_default } from "./VisuallyHiddenInput-BJy-siPx.js";
import { t as Label_default } from "./Label-b4FnckK8.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Checkbox/CheckboxGroupRoot.js
var [injectCheckboxGroupRootContext, provideCheckboxGroupRootContext] = createContext("CheckboxGroupRoot");
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Checkbox/utils.js
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Checkbox/CheckboxRoot.js
var [injectCheckboxRootContext, provideCheckboxRootContext] = createContext("CheckboxRoot");
var CheckboxRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "CheckboxRoot",
	props: {
		defaultValue: {
			type: [Boolean, String],
			required: false
		},
		modelValue: {
			type: [
				Boolean,
				String,
				null
			],
			required: false,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: false
		},
		value: {
			type: null,
			required: false,
			default: "on"
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
			default: "button"
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { forwardRef, currentElement } = useForwardExpose();
		const checkboxGroupContext = injectCheckboxGroupRootContext(null);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue,
			passive: props.modelValue === void 0
		});
		const disabled = computed(() => checkboxGroupContext?.disabled.value || props.disabled);
		const checkboxState = computed(() => {
			if (!isNullish(checkboxGroupContext?.modelValue.value)) return isValueEqualOrExist(checkboxGroupContext.modelValue.value, props.value);
			else return modelValue.value === "indeterminate" ? "indeterminate" : modelValue.value;
		});
		function handleClick() {
			if (!isNullish(checkboxGroupContext?.modelValue.value)) {
				const modelValueArray = [...checkboxGroupContext.modelValue.value || []];
				if (isValueEqualOrExist(modelValueArray, props.value)) {
					const index = modelValueArray.findIndex((i) => isEqual(i, props.value));
					modelValueArray.splice(index, 1);
				} else modelValueArray.push(props.value);
				checkboxGroupContext.modelValue.value = modelValueArray;
			} else modelValue.value = isIndeterminate(modelValue.value) ? true : !modelValue.value;
		}
		const isFormControl = useFormControl(currentElement);
		const ariaLabel = computed(() => props.id && currentElement.value ? document.querySelector(`[for="${props.id}"]`)?.innerText : void 0);
		provideCheckboxRootContext({
			disabled,
			state: checkboxState
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(unref(checkboxGroupContext)?.rovingFocus.value ? unref(RovingFocusItem_default) : unref(Primitive)), mergeProps(_ctx.$attrs, {
				id: _ctx.id,
				ref: unref(forwardRef),
				role: "checkbox",
				"as-child": _ctx.asChild,
				as: _ctx.as,
				type: _ctx.as === "button" ? "button" : void 0,
				"aria-checked": unref(isIndeterminate)(checkboxState.value) ? "mixed" : checkboxState.value,
				"aria-required": _ctx.required,
				"aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
				"data-state": unref(getState)(checkboxState.value),
				"data-disabled": disabled.value ? "" : void 0,
				disabled: disabled.value,
				focusable: unref(checkboxGroupContext)?.rovingFocus.value ? !disabled.value : void 0,
				onKeydown: withKeys(withModifiers(() => {}, ["prevent"]), ["enter"]),
				onClick: handleClick
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					state: checkboxState.value
				}), unref(isFormControl) && _ctx.name && !unref(checkboxGroupContext) ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
					key: 0,
					type: "checkbox",
					checked: !!checkboxState.value,
					name: _ctx.name,
					value: _ctx.value,
					disabled: disabled.value,
					required: _ctx.required
				}, null, 8, [
					"checked",
					"name",
					"value",
					"disabled",
					"required"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			}, 16, [
				"id",
				"as-child",
				"as",
				"type",
				"aria-checked",
				"aria-required",
				"aria-label",
				"data-state",
				"data-disabled",
				"disabled",
				"focusable",
				"onKeydown"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/Checkbox/CheckboxIndicator.js
var CheckboxIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "CheckboxIndicator",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
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
		const { forwardRef } = useForwardExpose();
		const rootContext = injectCheckboxRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(isIndeterminate)(unref(rootContext).state.value) || unref(rootContext).state.value === true }, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					"data-state": unref(getState)(unref(rootContext).state.value),
					"data-disabled": unref(rootContext).disabled.value ? "" : void 0,
					style: { pointerEvents: "none" },
					"as-child": _ctx.asChild,
					as: _ctx.as
				}, _ctx.$attrs), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"data-state",
					"data-disabled",
					"as-child",
					"as"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/v2/components/Checkbox/Checkbox.vue?vue&type=script&setup=true&lang.ts
var Checkbox_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "Checkbox",
	props: /* @__PURE__ */ mergeModels({
		disabled: { type: Boolean },
		required: { type: Boolean },
		name: {},
		value: {},
		id: {},
		defaultValue: { type: [Boolean, String] },
		as: {},
		label: {},
		indeterminate: { type: Boolean }
	}, {
		"modelValue": {
			type: Boolean,
			default: void 0
		},
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const slots = useSlots();
		const emit = __emit;
		const uuid = computed(() => props.id ?? useId());
		const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
		const modelValue = useModel(__props, "modelValue");
		const computedValue = computed(() => props.indeterminate ? "indeterminate" : modelValue.value);
		const attrs = useAttrs();
		const getRootAttrs = () => {
			const rootAttrs = { ...attrs };
			delete rootAttrs.class;
			return rootAttrs;
		};
		function onUpdate(value) {
			emit("change", new Event("change", { target: { value } }));
			modelValue.value = value === "indeterminate" ? false : value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: __props.as,
				class: normalizeClass([_ctx.$style.checkbox, unref(attrs).class]),
				"data-disabled": __props.disabled ? "" : void 0
			}, {
				default: withCtx(() => [createVNode(unref(CheckboxRoot_default), mergeProps({ id: uuid.value }, {
					...unref(rootProps),
					...getRootAttrs()
				}, {
					"model-value": computedValue.value,
					name: __props.name,
					disabled: __props.disabled,
					class: _ctx.$style.checkboxRoot,
					"onUpdate:modelValue": onUpdate
				}), {
					default: withCtx(() => [createVNode(unref(CheckboxIndicator_default), { class: normalizeClass(_ctx.$style.checkboxIndicator) }, {
						default: withCtx(() => [__props.indeterminate ? (openBlock(), createBlock(Icon_default, {
							key: 0,
							icon: "minus",
							size: "small"
						})) : (openBlock(), createBlock(Icon_default, {
							key: 1,
							icon: "check",
							size: "small"
						}))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 16, [
					"id",
					"model-value",
					"name",
					"disabled",
					"class"
				]), __props.label || !!slots.label ? (openBlock(), createBlock(unref(Label_default), {
					key: 0,
					for: uuid.value,
					class: normalizeClass(_ctx.$style.label),
					"data-disabled": __props.disabled ? "" : void 0
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [createTextVNode(toDisplayString(__props.label), 1)])]),
					_: 3
				}, 8, [
					"for",
					"class",
					"data-disabled"
				])) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"as",
				"class",
				"data-disabled"
			]);
		};
	}
});
var Checkbox_vue_vue_type_style_index_0_lang_module_default = {
	checkbox: "_checkbox_1sdxs_2",
	checkboxRoot: "_checkboxRoot_1sdxs_13",
	checkboxIndicator: "_checkboxIndicator_1sdxs_45",
	label: "_label_1sdxs_52"
};
var Checkbox_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Checkbox_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Checkbox_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Checkbox_default as t };
