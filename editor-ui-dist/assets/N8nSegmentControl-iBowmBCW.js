import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, U as mergeProps, W as nextTick, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, lt as useAttrs, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { P as reactiveOmit } from "./dist-BKkqSB6h.js";
import { r as RadioGroupRoot_default, t as RadioGroupItem_default } from "./RadioGroupItem-B8QlbNuh.js";
//#region ../@n8n/design-system/src/components/N8nSegmentControl/SegmentControlItem.vue?vue&type=script&setup=true&lang.ts
var SegmentControlItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SegmentControlItem",
	props: {
		label: {},
		value: {},
		disabled: {
			type: Boolean,
			default: false
		},
		square: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RadioGroupItem_default), {
				value: __props.value,
				disabled: __props.disabled,
				"aria-label": __props.label,
				class: normalizeClass({
					"n8n-segment-control-item": true,
					[_ctx.$style.item]: true,
					[_ctx.$style.square]: __props.square
				})
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.label), 1)])]),
				_: 3
			}, 8, [
				"value",
				"disabled",
				"aria-label",
				"class"
			]);
		};
	}
});
var SegmentControlItem_vue_vue_type_style_index_0_lang_module_default = {
	item: "_item_gpwa2_125",
	square: "_square_gpwa2_181"
};
var SegmentControlItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SegmentControlItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SegmentControlItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/design-system/src/components/N8nSegmentControl/SegmentControl.vue?vue&type=script&setup=true&lang.ts
var SegmentControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SegmentControl",
	props: {
		name: {},
		required: { type: Boolean },
		loop: {
			type: Boolean,
			default: true
		},
		dir: {},
		modelValue: {},
		defaultValue: {},
		options: {},
		size: { default: "default" },
		disabled: {
			type: Boolean,
			default: false
		},
		squareButtons: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const attrs = useAttrs();
		const rootClass = computed(() => attrs.class);
		const rootAttrs = computed(() => reactiveOmit(attrs, "class"));
		/** Last pointer event, so consumers can read ctrl/meta (e.g. open-in-new-tab). */
		const lastPointerEvent = ref();
		/**
		* reka-ui selects on arrow keys via a window keydown listener. That is blocked
		* when keydown doesn't reach window — e.g. our stopPropagation below (so canvas
		* node-nav / editor shortcuts don't also fire), or an ancestor @keydown.stop
		* (modals, keybinding wrappers). RovingFocus still moves focus; we click the
		* focused radio after nextTick to complete selection.
		*
		* Stop all arrows (canvas also binds Up/Down). Only Left/Right drive selection
		* in this horizontal control.
		*/
		const ARROW_KEYS_STOP = [
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight"
		];
		const ARROW_KEYS_SELECT = ["ArrowLeft", "ArrowRight"];
		function optionKey(value) {
			return `${typeof value}:${String(value)}`;
		}
		function toRadioValue(value) {
			if (value === void 0 || !props.options?.some((option) => option.value === value)) return;
			return optionKey(value);
		}
		function findOptionByRadioValue(raw) {
			if (typeof raw !== "string") return;
			return props.options?.find((option) => optionKey(option.value) === raw);
		}
		function onKeyDown(event) {
			if (!ARROW_KEYS_STOP.includes(event.key)) return;
			event.stopPropagation();
			if (props.disabled || !ARROW_KEYS_SELECT.includes(event.key)) return;
			const group = event.currentTarget;
			if (!(group instanceof HTMLElement)) return;
			nextTick(() => {
				const active = document.activeElement;
				if (!(active instanceof HTMLElement) || !group.contains(active)) return;
				if (active.getAttribute("role") !== "radio") return;
				if (active.getAttribute("data-state") === "checked") return;
				active.click();
			});
		}
		function onItemClickCapture(event) {
			const target = event.target;
			if (!(target instanceof HTMLElement)) return;
			if (target.closest("[role=\"radio\"]")) lastPointerEvent.value = event;
		}
		function onUpdate(raw) {
			const option = findOptionByRadioValue(raw);
			if (!option || props.disabled || option.disabled) return;
			const event = lastPointerEvent.value ?? new MouseEvent("click");
			lastPointerEvent.value = void 0;
			emit("update:modelValue", option.value, event);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				"n8n-segment-control",
				_ctx.$style.segmentControl,
				_ctx.$style[__props.size],
				__props.disabled && _ctx.$style.isDisabled,
				rootClass.value
			]) }, [createVNode(unref(RadioGroupRoot_default), mergeProps(rootAttrs.value, {
				name: __props.name,
				required: __props.required,
				loop: __props.loop,
				dir: __props.dir,
				"model-value": toRadioValue(__props.modelValue),
				"default-value": toRadioValue(__props.defaultValue),
				disabled: __props.disabled,
				orientation: "horizontal",
				class: _ctx.$style.group,
				"onUpdate:modelValue": onUpdate,
				onKeydown: onKeyDown,
				onClickCapture: onItemClickCapture
			}), {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
					return openBlock(), createBlock(SegmentControlItem_default, {
						key: optionKey(option.value),
						label: option.label,
						value: optionKey(option.value),
						"data-test-id": `radio-button-${option.value}`,
						disabled: __props.disabled || option.disabled,
						square: __props.squareButtons
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "option", mergeProps({ ref_for: true }, option), () => [createTextVNode(toDisplayString(option.label), 1)])]),
						_: 2
					}, 1032, [
						"label",
						"value",
						"data-test-id",
						"disabled",
						"square"
					]);
				}), 128))]),
				_: 3
			}, 16, [
				"name",
				"required",
				"loop",
				"dir",
				"model-value",
				"default-value",
				"disabled",
				"class"
			])], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSegmentControl/SegmentControl.vue?vue&type=style&index=0&lang.module.scss
var segmentControl = "_segmentControl_vfh8n_125";
var mini = "_mini_vfh8n_143";
var small = "_small_vfh8n_152";
var large = "_large_vfh8n_170";
var xlarge = "_xlarge_vfh8n_179";
var group = "_group_vfh8n_188";
var isDisabled = "_isDisabled_vfh8n_196";
var SegmentControl_vue_vue_type_style_index_0_lang_module_default = {
	segmentControl,
	mini,
	small,
	"default": "_default_vfh8n_161",
	large,
	xlarge,
	group,
	isDisabled
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nSegmentControl/index.ts
var N8nSegmentControl_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SegmentControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SegmentControl_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nSegmentControl_default as t };
