import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, E as createElementBlock, F as guardReactiveProps, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, U as mergeProps, bt as withCtx, it as renderSlot, j as createVNode, lt as useAttrs, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { r as ElSelect, t as ElOption } from "./select-BAQ3MG4b.js";
//#region ../@n8n/design-system/src/utils/typeguards.ts
function isEventBindingElementAttribute(_attributeValue, attributeName) {
	return /^on[A-Z]/.test(attributeName);
}
//#endregion
//#region ../@n8n/design-system/src/components/N8nOption/index.ts
var N8nOption_default = /* @__PURE__ */ defineComponent({
	__name: "Option",
	props: {
		value: { type: [
			String,
			Number,
			Boolean,
			Object
		] },
		label: {},
		disabled: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElOption), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSelect/Select.vue?vue&type=script&setup=true&lang.ts
var Select_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Select",
	props: {
		...ElSelect.props,
		modelValue: {},
		size: {
			type: String,
			default: "large"
		},
		placeholder: { type: String },
		disabled: { type: Boolean },
		filterable: { type: Boolean },
		defaultFirstOption: { type: Boolean },
		multiple: { type: Boolean },
		multipleLimit: {
			type: Number,
			default: 0
		},
		filterMethod: { type: Function },
		loading: { type: Boolean },
		loadingText: { type: String },
		popperClass: { type: String },
		popperAppendToBody: { type: Boolean },
		limitPopperWidth: { type: Boolean },
		noDataText: { type: String }
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const attrs = useAttrs();
		const innerSelect = ref(null);
		/**
		* Assigned via a function ref rather than `ref="innerSelect"`. A string ref
		* registers in vue-tsc's `__VLS_TemplateRefs`, which materialises element-plus'
		* full ElSelect instance type — too large for the compiler to serialize, so the
		* declaration for this component was silently skipped (TS7056).
		*/
		const setInnerSelect = (el) => {
			innerSelect.value = el ?? null;
		};
		const listeners = computed(() => {
			return Object.entries(attrs).reduce((acc, [key, value]) => {
				if (isEventBindingElementAttribute(value, key)) acc[key] = value;
				return acc;
			}, {});
		});
		const computedSize = computed(() => {
			if (props.size === "mini") return "small";
			if (props.size === "medium") return "default";
			if (props.size === "xlarge") return;
			return props.size;
		});
		const classes = computed(() => {
			return props.size === "xlarge" ? "xlarge" : "";
		});
		const focus = () => {
			innerSelect.value?.focus();
		};
		const blur = () => {
			innerSelect.value?.blur();
		};
		const focusOnInput = () => {
			if (!innerSelect.value) return;
			const inputRef = innerSelect.value.$refs.selectWrapper;
			const inputElement = inputRef?.querySelector("input");
			if (inputElement) inputElement.focus();
			else inputRef?.focus();
		};
		__expose({
			focus,
			blur,
			focusOnInput,
			get innerSelect() {
				return innerSelect.value;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				"n8n-select": true,
				[_ctx.$style.container]: true,
				[_ctx.$style.withPrepend]: !!_ctx.$slots.prepend
			}) }, [_ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.prepend)
			}, [renderSlot(_ctx.$slots, "prepend")], 2)) : createCommentVNode("", true), createVNode(unref(ElSelect), mergeProps({
				..._ctx.$props,
				...listeners.value
			}, {
				ref: setInnerSelect,
				"multiple-limit": props.multipleLimit,
				"model-value": props.modelValue ?? void 0,
				size: computedSize.value,
				"popper-class": props.popperClass,
				class: _ctx.$style[classes.value]
			}), createSlots({
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 2
			}, [
				_ctx.$slots.prefix ? {
					name: "prefix",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "prefix")]),
					key: "0"
				} : void 0,
				_ctx.$slots.suffix ? {
					name: "suffix",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "suffix")]),
					key: "1"
				} : void 0,
				_ctx.$slots.footer ? {
					name: "footer",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "footer")]),
					key: "2"
				} : void 0,
				_ctx.$slots.empty ? {
					name: "empty",
					fn: withCtx(() => [renderSlot(_ctx.$slots, "empty")]),
					key: "3"
				} : void 0
			]), 1040, [
				"multiple-limit",
				"model-value",
				"size",
				"popper-class",
				"class"
			])], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nSelect/Select.vue?vue&type=style&index=0&lang.module.scss
var xlarge = "_xlarge_13hyu_388";
var container = "_container_13hyu_395";
var withPrepend = "_withPrepend_13hyu_401";
var prepend = "_prepend_13hyu_411";
var shimmer = "_shimmer_13hyu_1";
var spin = "_spin_13hyu_1";
var opacityPulse = "_opacityPulse_13hyu_1";
var popoverIn = "_popoverIn_13hyu_1";
var fadeIn = "_fadeIn_13hyu_1";
var collapsibleSlideDown = "_collapsibleSlideDown_13hyu_1";
var collapsibleSlideUp = "_collapsibleSlideUp_13hyu_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_13hyu_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_13hyu_1";
var blurSwapIn = "_blurSwapIn_13hyu_1";
var blurSwapOut = "_blurSwapOut_13hyu_1";
var pulseGlow = "_pulseGlow_13hyu_1";
var pulseGlowDelayed = "_pulseGlowDelayed_13hyu_1";
var fade = "_fade_13hyu_1";
var fadeInUp = "_fadeInUp_13hyu_1";
var fadeInDown = "_fadeInDown_13hyu_1";
var fadeInLeft = "_fadeInLeft_13hyu_1";
var fadeInRight = "_fadeInRight_13hyu_1";
var fadeOut = "_fadeOut_13hyu_1";
var fadeOutDown = "_fadeOutDown_13hyu_1";
var fadeOutUp = "_fadeOutUp_13hyu_1";
var fadeOutLeft = "_fadeOutLeft_13hyu_1";
var fadeOutRight = "_fadeOutRight_13hyu_1";
var ping = "_ping_13hyu_1";
var blinkBackground = "_blinkBackground_13hyu_1";
var typingBlink = "_typingBlink_13hyu_1";
var Select_vue_vue_type_style_index_0_lang_module_default = {
	xlarge,
	container,
	withPrepend,
	prepend,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_13hyu_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nSelect/index.ts
var N8nSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Select_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": Select_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nOption_default as n, N8nSelect_default as t };
