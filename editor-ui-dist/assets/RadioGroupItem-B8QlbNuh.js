import { $ as openBlock, Gt as unref, Ht as toRefs, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { n as isEqual, t as useFormControl } from "./useFormControl-Dgbv-0gl.js";
import { c as useForwardExpose, d as useEventListener, j as createContext, m as useVModel, n as Primitive } from "./VisuallyHidden-OSLEy_KR.js";
import { t as useDirection } from "./useDirection-C9_E-bw1.js";
import { f as handleAndDispatchCustomEvent } from "./PopperContent-CAUwWps2.js";
import { t as RovingFocusGroup_default } from "./RovingFocusGroup-CqmzBffz.js";
import { n as RovingFocusItem_default, t as VisuallyHiddenInput_default } from "./VisuallyHiddenInput-Cv5GCAuE.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/RadioGroup/utils.js
var RADIO_SELECT = "radio.select";
function handleSelect(event, value, callback) {
	handleAndDispatchCustomEvent(RADIO_SELECT, callback, {
		originalEvent: event,
		value
	});
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/RadioGroup/Radio.js
var Radio_default = /* @__PURE__ */ defineComponent({
	__name: "Radio",
	props: {
		id: {
			type: String,
			required: false
		},
		value: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		checked: {
			type: Boolean,
			required: false,
			default: void 0
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
	emits: ["update:checked", "select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const checked = useVModel(props, "checked", emits, { passive: props.checked === void 0 });
		const { value } = toRefs(props);
		const { forwardRef, currentElement: triggerElement } = useForwardExpose();
		const isFormControl = useFormControl(triggerElement);
		const ariaLabel = computed(() => props.id && triggerElement.value ? document.querySelector(`[for="${props.id}"]`)?.innerText ?? props.value : void 0);
		function handleClick(event) {
			if (props.disabled) return;
			handleSelect(event, props.value, (ev) => {
				emits("select", ev);
				if (ev?.defaultPrevented) return;
				checked.value = true;
				if (isFormControl.value) ev.stopPropagation();
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(_ctx.$attrs, {
				id: _ctx.id,
				ref: unref(forwardRef),
				role: "radio",
				type: _ctx.as === "button" ? "button" : void 0,
				as: _ctx.as,
				"aria-checked": unref(checked),
				"aria-label": ariaLabel.value,
				"as-child": _ctx.asChild,
				disabled: _ctx.disabled ? "" : void 0,
				"data-state": unref(checked) ? "checked" : "unchecked",
				"data-disabled": _ctx.disabled ? "" : void 0,
				value: unref(value),
				required: _ctx.required,
				name: _ctx.name,
				onClick: withModifiers(handleClick, ["stop"])
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { checked: unref(checked) }), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
					key: 0,
					type: "radio",
					tabindex: "-1",
					value: unref(value),
					checked: !!unref(checked),
					name: _ctx.name,
					disabled: _ctx.disabled,
					required: _ctx.required
				}, null, 8, [
					"value",
					"checked",
					"name",
					"disabled",
					"required"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			}, 16, [
				"id",
				"type",
				"as",
				"aria-checked",
				"aria-label",
				"as-child",
				"disabled",
				"data-state",
				"data-disabled",
				"value",
				"required",
				"name"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/RadioGroup/RadioGroupRoot.js
var [injectRadioGroupRootContext, provideRadioGroupRootContext] = createContext("RadioGroupRoot");
var RadioGroupRoot_default = /* @__PURE__ */ defineComponent({
	__name: "RadioGroupRoot",
	props: {
		modelValue: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		orientation: {
			type: String,
			required: false,
			default: void 0
		},
		dir: {
			type: String,
			required: false
		},
		loop: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
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
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { forwardRef, currentElement } = useForwardExpose();
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue,
			passive: props.modelValue === void 0
		});
		const { disabled, loop, orientation, name, required, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		const isFormControl = useFormControl(currentElement);
		provideRadioGroupRootContext({
			modelValue,
			changeModelValue: (value) => {
				modelValue.value = value;
			},
			disabled,
			loop,
			orientation,
			name: name?.value,
			required
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RovingFocusGroup_default), {
				"as-child": "",
				orientation: unref(orientation),
				dir: unref(dir),
				loop: unref(loop)
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					role: "radiogroup",
					"data-disabled": unref(disabled) ? "" : void 0,
					"as-child": _ctx.asChild,
					as: _ctx.as,
					"aria-orientation": unref(orientation),
					"aria-required": unref(required),
					dir: unref(dir)
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) }), unref(isFormControl) && unref(name) ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
						key: 0,
						required: unref(required),
						disabled: unref(disabled),
						value: unref(modelValue),
						name: unref(name)
					}, null, 8, [
						"required",
						"disabled",
						"value",
						"name"
					])) : createCommentVNode("v-if", true)]),
					_: 3
				}, 8, [
					"data-disabled",
					"as-child",
					"as",
					"aria-orientation",
					"aria-required",
					"dir"
				])]),
				_: 3
			}, 8, [
				"orientation",
				"dir",
				"loop"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/RadioGroup/RadioGroupItem.js
var [injectRadioGroupItemContext, provideRadiogroupItemContext] = createContext("RadioGroupItem");
var RadioGroupItem_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "RadioGroupItem",
	props: {
		id: {
			type: String,
			required: false
		},
		value: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
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
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { forwardRef, currentElement } = useForwardExpose();
		const rootContext = injectRadioGroupRootContext();
		const disabled = computed(() => rootContext.disabled.value || props.disabled);
		const required = computed(() => rootContext.required.value || props.required);
		const checked = computed(() => isEqual(rootContext.modelValue?.value, props.value));
		provideRadiogroupItemContext({
			disabled,
			checked
		});
		const isArrowKeyPressed = ref(false);
		const ARROW_KEYS = [
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight"
		];
		useEventListener("keydown", (event) => {
			if (ARROW_KEYS.includes(event.key)) isArrowKeyPressed.value = true;
		});
		useEventListener("keyup", () => {
			isArrowKeyPressed.value = false;
		});
		function handleFocus() {
			setTimeout(() => {
				/**
				* Our `RovingFocusGroup` will focus the radio when navigating with arrow keys
				* and we need to 'check' it in that case. We click it to 'check' it (instead
				* of updating `context.value`) so that the radio change event fires.
				*/
				if (isArrowKeyPressed.value) currentElement.value?.click();
			}, 0);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RovingFocusItem_default), {
				checked: checked.value,
				disabled: disabled.value,
				"as-child": "",
				focusable: !disabled.value,
				active: checked.value
			}, {
				default: withCtx(() => [createVNode(Radio_default, mergeProps({
					..._ctx.$attrs,
					...props
				}, {
					ref: unref(forwardRef),
					checked: checked.value,
					required: required.value,
					disabled: disabled.value,
					"onUpdate:checked": _cache[0] || (_cache[0] = ($event) => unref(rootContext).changeModelValue(_ctx.value)),
					onSelect: _cache[1] || (_cache[1] = ($event) => emits("select", $event)),
					onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers(() => {}, ["prevent"]), ["enter"])),
					onFocus: handleFocus
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
						checked: checked.value,
						required: required.value,
						disabled: disabled.value
					})]),
					_: 3
				}, 16, [
					"checked",
					"required",
					"disabled"
				])]),
				_: 3
			}, 8, [
				"checked",
				"disabled",
				"focusable",
				"active"
			]);
		};
	}
});
//#endregion
export { injectRadioGroupRootContext as i, injectRadioGroupItemContext as n, RadioGroupRoot_default as r, RadioGroupItem_default as t };
