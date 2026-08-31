import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, U as mergeProps, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as ElInputNumber } from "./input-number-Byldw46t.js";
//#region ../@n8n/design-system/src/components/N8nInputNumber/InputNumber.vue?vue&type=script&setup=true&lang.ts
var InputNumber_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InputNumber",
	props: {
		size: { default: void 0 },
		min: { default: -Infinity },
		max: { default: Infinity },
		step: { default: 1 },
		precision: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const sizeMap = {
			mini: "small",
			small: "small",
			medium: "default",
			large: "large",
			xlarge: "large"
		};
		const resolvedSize = computed(() => props.size ? sizeMap[props.size] : void 0);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElInputNumber), mergeProps({
				size: resolvedSize.value,
				min: __props.min,
				max: __props.max,
				step: __props.step,
				precision: __props.precision,
				class: _ctx.$style.inputNumber
			}, _ctx.$attrs), null, 16, [
				"size",
				"min",
				"max",
				"step",
				"precision",
				"class"
			]);
		};
	}
});
var InputNumber_vue_vue_type_style_index_0_lang_module_default = { inputNumber: "_inputNumber_1y0pn_125" };
//#endregion
//#region ../@n8n/design-system/src/components/N8nInputNumber/index.ts
var N8nInputNumber_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InputNumber_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InputNumber_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { N8nInputNumber_default as t };
