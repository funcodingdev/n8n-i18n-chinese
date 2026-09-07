import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, S as computed, U as mergeProps, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, it as renderSlot, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { t as N8nFormInput_default } from "./N8nFormInput-C49MRcy5.js";
//#region ../@n8n/design-system/src/utils/form-event-bus.ts
/**
* Creates a new event bus to be used with the `FormInputs` component.
*/
var createFormEventBus = createEventBus;
//#endregion
//#region ../@n8n/design-system/src/components/ResizeObserver/index.ts
var ResizeObserver_default = /* @__PURE__ */ defineComponent({
	__name: "ResizeObserver",
	props: {
		enabled: {
			type: Boolean,
			default: true
		},
		breakpoints: { default: () => [] }
	},
	setup(__props) {
		const props = __props;
		const observer = ref(null);
		const breakpoint = ref("");
		const root = ref(null);
		const sortedBreakpoints = computed(() => [...props.breakpoints].sort((a, b) => a.width - b.width));
		const getBreakpointFromWidth = (width) => {
			return sortedBreakpoints.value.find((sortedBreakpoint) => width < sortedBreakpoint.width)?.bp ?? "default";
		};
		onMounted(() => {
			if (!props.enabled) return;
			if (!root.value) return;
			breakpoint.value = getBreakpointFromWidth(root.value.offsetWidth);
			observer.value = new ResizeObserver((entries) => {
				entries.forEach((entry) => {
					requestAnimationFrame(() => {
						breakpoint.value = getBreakpointFromWidth(entry.contentRect.width);
					});
				});
			});
			observer.value.observe(root.value);
		});
		onBeforeUnmount(() => {
			if (observer.value) observer.value.disconnect();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "root",
				ref: root
			}, [renderSlot(_ctx.$slots, "default", { bp: breakpoint.value })], 512);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nFormInputs/FormInputs.vue?vue&type=script&setup=true&lang.ts
var FormInputs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "FormInputs",
	props: {
		inputs: {},
		eventBus: { default: createFormEventBus },
		columnView: {
			type: Boolean,
			default: false
		},
		verticalSpacing: { default: "" },
		teleported: {
			type: Boolean,
			default: true
		},
		tagSize: {}
	},
	emits: [
		"update",
		"update:modelValue",
		"submit",
		"ready"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const showValidationWarnings = ref(false);
		const values = reactive({});
		const validity = ref({});
		const filteredInputs = computed(() => {
			return props.inputs.filter((input) => typeof input.shouldDisplay === "function" ? input.shouldDisplay(values) : true);
		});
		const metadataMap = computed(() => {
			return props.inputs.reduce((acc, input) => {
				if (input.metadata) acc[input.name] = input.metadata;
				return acc;
			}, {});
		});
		const isReadyToSubmit = computed(() => {
			return Object.values(validity.value).every((valid) => !!valid);
		});
		watch(isReadyToSubmit, (ready) => {
			emit("ready", ready);
		});
		watch(() => props.inputs, (newInputs, oldInputs) => {
			const newFields = new Set(newInputs.map((input) => input.name));
			const oldFields = new Set(oldInputs.map((input) => input.name));
			clearValues(Array.from(oldFields).filter((field) => !newFields.has(field)));
		});
		function onUpdateModelValue(name, value) {
			values[name] = value;
			emit("update", {
				name,
				value,
				metadata: metadataMap.value[name]
			});
			emit("update:modelValue", values);
		}
		function onValidate(name, isValid) {
			validity.value = {
				...validity.value,
				[name]: isValid
			};
		}
		function getValues() {
			return { ...values };
		}
		function getValuesWithMetadata() {
			return filteredInputs.value.reduce((acc, input) => {
				acc[input.name] = {
					value: values[input.name],
					metadata: metadataMap.value[input.name]
				};
				return acc;
			}, {});
		}
		function clearValues(fieldNames) {
			for (const fieldName of fieldNames) delete values[fieldName];
			emit("update:modelValue", values);
		}
		__expose({
			getValues,
			getValuesWithMetadata,
			clearValues
		});
		function onSubmit() {
			showValidationWarnings.value = true;
			if (!isReadyToSubmit.value) return;
			emit("submit", filteredInputs.value.reduce((valuesToSubmit, input) => {
				if (values[input.name]) valuesToSubmit[input.name] = values[input.name];
				return valuesToSubmit;
			}, {}));
		}
		onMounted(() => {
			for (const input of props.inputs) if ("initialValue" in input) values[input.name] = input.initialValue;
			if (props.eventBus) props.eventBus.on("submit", onSubmit);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ResizeObserver_default), { breakpoints: [{
				bp: "md",
				width: 500
			}] }, {
				default: withCtx(({ bp }) => [createBaseVNode("div", { class: normalizeClass(bp === "md" || __props.columnView ? _ctx.$style.grid : _ctx.$style.gridMulti) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredInputs.value, (input, index) => {
					return openBlock(), createElementBlock("div", {
						key: input.name,
						class: normalizeClass({ [`mt-${__props.verticalSpacing}`]: __props.verticalSpacing && index > 0 })
					}, [input.properties.type === "info" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-base",
						tag: "div",
						size: input.properties.labelSize,
						align: input.properties.labelAlignment,
						class: "form-text"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(input.properties.label), 1)]),
						_: 2
					}, 1032, ["size", "align"])) : (openBlock(), createBlock(unref(N8nFormInput_default), mergeProps({
						key: 1,
						ref_for: true
					}, input.properties, {
						name: input.name,
						label: input.properties.label || "",
						"tag-size": input.properties.tagSize ?? __props.tagSize,
						"model-value": values[input.name],
						"data-test-id": input.name,
						"show-validation-warnings": showValidationWarnings.value,
						teleported: __props.teleported,
						"onUpdate:modelValue": (value) => onUpdateModelValue(input.name, value),
						onValidate: (value) => onValidate(input.name, value),
						onEnter: onSubmit
					}), null, 16, [
						"name",
						"label",
						"tag-size",
						"model-value",
						"data-test-id",
						"show-validation-warnings",
						"teleported",
						"onUpdate:modelValue",
						"onValidate"
					]))], 2);
				}), 128))], 2)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nFormInputs/FormInputs.vue?vue&type=style&index=0&lang.module.scss
var grid = "_grid_lvq03_388";
var gridMulti = "_gridMulti_lvq03_394 _grid_lvq03_388";
var shimmer = "_shimmer_lvq03_1";
var spin = "_spin_lvq03_1";
var opacityPulse = "_opacityPulse_lvq03_1";
var popoverIn = "_popoverIn_lvq03_1";
var fadeIn = "_fadeIn_lvq03_1";
var collapsibleSlideDown = "_collapsibleSlideDown_lvq03_1";
var collapsibleSlideUp = "_collapsibleSlideUp_lvq03_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_lvq03_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_lvq03_1";
var blurSwapIn = "_blurSwapIn_lvq03_1";
var blurSwapOut = "_blurSwapOut_lvq03_1";
var pulseGlow = "_pulseGlow_lvq03_1";
var pulseGlowDelayed = "_pulseGlowDelayed_lvq03_1";
var fade = "_fade_lvq03_1";
var fadeInUp = "_fadeInUp_lvq03_1";
var fadeInDown = "_fadeInDown_lvq03_1";
var fadeInLeft = "_fadeInLeft_lvq03_1";
var fadeInRight = "_fadeInRight_lvq03_1";
var fadeOut = "_fadeOut_lvq03_1";
var fadeOutDown = "_fadeOutDown_lvq03_1";
var fadeOutUp = "_fadeOutUp_lvq03_1";
var fadeOutLeft = "_fadeOutLeft_lvq03_1";
var fadeOutRight = "_fadeOutRight_lvq03_1";
var ping = "_ping_lvq03_1";
var blinkBackground = "_blinkBackground_lvq03_1";
var typingBlink = "_typingBlink_lvq03_1";
var FormInputs_vue_vue_type_style_index_0_lang_module_default = {
	grid,
	gridMulti,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_lvq03_1",
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
//#region ../@n8n/design-system/src/components/N8nFormInputs/index.ts
var N8nFormInputs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(FormInputs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": FormInputs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { createFormEventBus as n, N8nFormInputs_default as t };
