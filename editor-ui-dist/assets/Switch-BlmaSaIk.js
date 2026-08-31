import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, Gt as unref, H as mergeModels, Ht as toRefs, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, dt as useModel, ft as useSlots, h as withModifiers, it as renderSlot, j as createVNode, lt as useAttrs, m as withKeys, ut as useId, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { F as reactivePick } from "./dist-BKkqSB6h.js";
import { t as useFormControl } from "./useFormControl-Dgbv-0gl.js";
import { c as useForwardExpose, j as createContext, m as useVModel, n as Primitive, s as useForwardProps } from "./VisuallyHidden-OSLEy_KR.js";
import { t as VisuallyHiddenInput_default } from "./VisuallyHiddenInput-Cv5GCAuE.js";
import { t as Label_default } from "./Label-B12lTHpA.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Switch/SwitchRoot.js
var [injectSwitchRootContext, provideSwitchRootContext] = createContext("SwitchRoot");
var SwitchRoot_default = /* @__PURE__ */ defineComponent({
	__name: "SwitchRoot",
	props: {
		defaultValue: {
			type: Boolean,
			required: false
		},
		modelValue: {
			type: [Boolean, null],
			required: false,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		value: {
			type: String,
			required: false,
			default: "on"
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
		const emit = __emit;
		const { disabled } = toRefs(props);
		const modelValue = useVModel(props, "modelValue", emit, {
			defaultValue: props.defaultValue,
			passive: props.modelValue === void 0
		});
		function toggleCheck() {
			if (disabled.value) return;
			modelValue.value = !modelValue.value;
		}
		const { forwardRef, currentElement } = useForwardExpose();
		const isFormControl = useFormControl(currentElement);
		const ariaLabel = computed(() => props.id && currentElement.value ? document.querySelector(`[for="${props.id}"]`)?.innerText : void 0);
		provideSwitchRootContext({
			modelValue,
			toggleCheck,
			disabled
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(_ctx.$attrs, {
				id: _ctx.id,
				ref: unref(forwardRef),
				role: "switch",
				type: _ctx.as === "button" ? "button" : void 0,
				value: _ctx.value,
				"aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
				"aria-checked": unref(modelValue),
				"aria-required": _ctx.required,
				"data-state": unref(modelValue) ? "checked" : "unchecked",
				"data-disabled": unref(disabled) ? "" : void 0,
				"as-child": _ctx.asChild,
				as: _ctx.as,
				disabled: unref(disabled),
				onClick: toggleCheck,
				onKeydown: withKeys(withModifiers(toggleCheck, ["prevent"]), ["enter"])
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) }), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
					key: 0,
					type: "checkbox",
					name: _ctx.name,
					disabled: unref(disabled),
					required: _ctx.required,
					value: _ctx.value,
					checked: !!unref(modelValue)
				}, null, 8, [
					"name",
					"disabled",
					"required",
					"value",
					"checked"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			}, 16, [
				"id",
				"type",
				"value",
				"aria-label",
				"aria-checked",
				"aria-required",
				"data-state",
				"data-disabled",
				"as-child",
				"as",
				"disabled",
				"onKeydown"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Switch/SwitchThumb.js
var SwitchThumb_default = /* @__PURE__ */ defineComponent({
	__name: "SwitchThumb",
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
		const rootContext = injectSwitchRootContext();
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				"data-state": unref(rootContext).modelValue?.value ? "checked" : "unchecked",
				"data-disabled": unref(rootContext).disabled.value ? "" : void 0,
				"as-child": _ctx.asChild,
				as: _ctx.as
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"data-state",
				"data-disabled",
				"as-child",
				"as"
			]);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSwitch/Switch.vue?vue&type=script&setup=true&lang.ts
var Switch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "Switch",
	props: /* @__PURE__ */ mergeModels({
		disabled: { type: Boolean },
		required: { type: Boolean },
		name: {},
		value: {},
		id: {},
		defaultValue: { type: Boolean },
		as: {},
		label: {},
		size: { default: "small" }
	}, {
		"modelValue": {
			type: Boolean,
			default: void 0
		},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const slots = useSlots();
		const uuid = computed(() => props.id ?? useId());
		const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
		const modelValue = useModel(__props, "modelValue");
		const attrs = useAttrs();
		const getRootAttrs = () => {
			const rootAttrs = { ...attrs };
			delete rootAttrs.class;
			return rootAttrs;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: __props.as,
				class: normalizeClass([
					_ctx.$style.switch,
					_ctx.$style[__props.size],
					unref(attrs).class
				]),
				"data-disabled": __props.disabled ? "" : void 0
			}, {
				default: withCtx(() => [createVNode(unref(SwitchRoot_default), mergeProps({ id: uuid.value }, {
					...unref(rootProps),
					...getRootAttrs()
				}, {
					modelValue: modelValue.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
					name: __props.name,
					disabled: __props.disabled,
					class: _ctx.$style.switchRoot,
					"aria-labelledby": __props.label ? uuid.value : void 0,
					"aria-label": !__props.label && "Toggle"
				}), {
					default: withCtx(() => [createVNode(unref(SwitchThumb_default), { class: normalizeClass(_ctx.$style.switchThumb) }, null, 8, ["class"])]),
					_: 1
				}, 16, [
					"id",
					"modelValue",
					"name",
					"disabled",
					"class",
					"aria-labelledby",
					"aria-label"
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nSwitch/Switch.vue?vue&type=style&index=0&lang.module.css
var switchRoot = "_switchRoot_13wop_15";
var switchThumb = "_switchThumb_13wop_40";
var label = "_label_13wop_60";
var small = "_small_13wop_76";
var large = "_large_13wop_109";
var Switch_vue_vue_type_style_index_0_lang_module_default = {
	"switch": "_switch_13wop_2",
	switchRoot,
	switchThumb,
	label,
	small,
	large
};
var Switch_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Switch_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Switch_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { Switch_default as t };
