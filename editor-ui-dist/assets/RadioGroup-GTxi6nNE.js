import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, R as inject, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, dt as useModel, ft as useSlots, it as renderSlot, j as createVNode, lt as useAttrs, tt as provide, ut as useId, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { F as reactivePick, P as reactiveOmit } from "./dist-BKkqSB6h.js";
import { c as useForwardExpose, i as Presence_default, n as Primitive, s as useForwardProps } from "./VisuallyHidden-OSLEy_KR.js";
import { t as Label_default } from "./Label-B12lTHpA.js";
import { i as injectRadioGroupRootContext, n as injectRadioGroupItemContext, r as RadioGroupRoot_default, t as RadioGroupItem_default$1 } from "./RadioGroupItem-B8QlbNuh.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/RadioGroup/RadioGroupIndicator.js
var RadioGroupIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "RadioGroupIndicator",
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
		const itemContext = injectRadioGroupItemContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(itemContext).checked.value }, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					"data-state": unref(itemContext).checked.value ? "checked" : "unchecked",
					"data-disabled": unref(itemContext).disabled.value ? "" : void 0,
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
//#region ../@n8n/design-system/src/v2/components/RadioGroup/radio-group-context.ts
var radioGroupArrowKeyPressedKey = Symbol("radioGroupArrowKeyPressed");
var RADIO_GROUP_ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
//#endregion
//#region ../@n8n/design-system/src/v2/components/RadioGroup/RadioGroupItem.vue?vue&type=script&setup=true&lang.ts
var RadioGroupItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "RadioGroupItem",
	props: {
		id: {},
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		value: {},
		label: {},
		description: {}
	},
	setup(__props) {
		const props = __props;
		const slots = useSlots();
		const attrs = useAttrs();
		const generatedId = useId();
		const uuid = computed(() => props.id ?? generatedId);
		const groupContext = injectRadioGroupRootContext(null);
		const arrowKeyPressed = inject(radioGroupArrowKeyPressedKey, null);
		const isVertical = computed(() => (groupContext?.orientation.value ?? "vertical") === "vertical");
		function onItemFocusIn(event) {
			if (!arrowKeyPressed?.value) return;
			const target = event.target;
			if (target instanceof HTMLElement && target.getAttribute("role") === "radio") target.click();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.item, isVertical.value && _ctx.$style.itemVertical]),
				onFocusin: onItemFocusIn
			}, [createVNode(unref(RadioGroupItem_default$1), mergeProps({ id: uuid.value }, unref(attrs), {
				value: __props.value,
				disabled: __props.disabled,
				class: _ctx.$style.control
			}), {
				default: withCtx(() => [createVNode(unref(RadioGroupIndicator_default), { class: normalizeClass(_ctx.$style.dot) }, null, 8, ["class"])]),
				_: 1
			}, 16, [
				"id",
				"value",
				"disabled",
				"class"
			]), __props.label || __props.description || !!slots.label ? (openBlock(), createBlock(unref(Label_default), {
				key: 0,
				for: uuid.value,
				class: normalizeClass(_ctx.$style.content),
				"data-disabled": __props.disabled ? "" : void 0
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "label", {
					label: __props.label,
					description: __props.description
				}, () => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(__props.label), 3), __props.description ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.description)
				}, toDisplayString(__props.description), 3)) : createCommentVNode("", true)])]),
				_: 3
			}, 8, [
				"for",
				"class",
				"data-disabled"
			])) : createCommentVNode("", true)], 34);
		};
	}
});
var RadioGroupItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_1oba1_125",
	description: "_description_1oba1_131",
	control: "_control_1oba1_134",
	itemVertical: "_itemVertical_1oba1_138",
	dot: "_dot_1oba1_177",
	content: "_content_1oba1_188",
	label: "_label_1oba1_200"
};
var RadioGroupItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RadioGroupItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RadioGroupItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/v2/components/RadioGroup/RadioGroup.vue?vue&type=script&setup=true&lang.ts
var RadioGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "RadioGroup",
	props: /* @__PURE__ */ mergeModels({
		disabled: {
			type: Boolean,
			default: false
		},
		orientation: { default: "vertical" },
		dir: {},
		loop: { type: Boolean },
		asChild: { type: Boolean },
		as: {},
		name: {},
		required: { type: Boolean },
		defaultValue: {}
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const attrs = useAttrs();
		const rootClass = computed(() => attrs.class);
		const rootAttrs = computed(() => reactiveOmit(attrs, ["class"]));
		const props = __props;
		const modelValue = useModel(__props, "modelValue");
		const rootProps = useForwardProps(reactivePick(props, "disabled", "orientation", "name", "required", "loop", "dir", "defaultValue"));
		const arrowKeyPressed = ref(false);
		provide(radioGroupArrowKeyPressedKey, arrowKeyPressed);
		function onKeyDownCapture(event) {
			if (RADIO_GROUP_ARROW_KEYS.includes(event.key)) arrowKeyPressed.value = true;
		}
		function onKeyUp() {
			arrowKeyPressed.value = false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RadioGroupRoot_default), mergeProps({
				...unref(rootProps),
				...rootAttrs.value
			}, {
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				class: [
					_ctx.$style.root,
					_ctx.$style[__props.orientation],
					rootClass.value
				],
				onKeydownCapture: onKeyDownCapture,
				onKeyup: onKeyUp
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["modelValue", "class"]);
		};
	}
});
var RadioGroup_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1e5zq_2",
	vertical: "_vertical_1e5zq_7",
	horizontal: "_horizontal_1e5zq_12"
};
var RadioGroup_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RadioGroup_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RadioGroup_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RadioGroupItem_default as n, RadioGroup_default as t };
