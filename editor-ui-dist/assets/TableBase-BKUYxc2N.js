import { $ as openBlock, C as createBaseVNode, E as createElementBlock, N as defineComponent, S as computed, bn as normalizeStyle, ft as useSlots, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
//#region ../@n8n/design-system/src/components/TableBase/TableBase.vue?vue&type=script&setup=true&lang.ts
/** Must match the row styles below: td height (48px) + 1px border-bottom. */
var ROW_HEIGHT_PX = 49;
/** Must match the header styles below: th height (36px) + 1px border-bottom. */
var HEADER_HEIGHT_PX = 37;
var TableBase_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TableBase",
	props: { maxDisplayedRows: {} },
	setup(__props) {
		const props = __props;
		const slots = useSlots();
		const hasHeader = computed(() => (slots.default?.({}) ?? []).some((vnode) => vnode.type === "thead"));
		const scrollStyle = computed(() => {
			if (!props.maxDisplayedRows) return void 0;
			const headerHeight = hasHeader.value ? HEADER_HEIGHT_PX : 0;
			return { maxHeight: `${props.maxDisplayedRows * ROW_HEIGHT_PX + headerHeight}px` };
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.n8nTable) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.n8nTableScroll),
				style: normalizeStyle(scrollStyle.value),
				"data-test-id": "table-base-scroll"
			}, [createBaseVNode("table", null, [renderSlot(_ctx.$slots, "default")])], 6)], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/TableBase/TableBase.vue?vue&type=style&index=0&lang.module.scss
var n8nTableScroll = "_n8nTableScroll_4l34d_388";
var n8nTable = "_n8nTable_4l34d_388";
var shimmer = "_shimmer_4l34d_1";
var spin = "_spin_4l34d_1";
var opacityPulse = "_opacityPulse_4l34d_1";
var popoverIn = "_popoverIn_4l34d_1";
var fadeIn = "_fadeIn_4l34d_1";
var collapsibleSlideDown = "_collapsibleSlideDown_4l34d_1";
var collapsibleSlideUp = "_collapsibleSlideUp_4l34d_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_4l34d_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_4l34d_1";
var blurSwapIn = "_blurSwapIn_4l34d_1";
var blurSwapOut = "_blurSwapOut_4l34d_1";
var pulseGlow = "_pulseGlow_4l34d_1";
var pulseGlowDelayed = "_pulseGlowDelayed_4l34d_1";
var fade = "_fade_4l34d_1";
var fadeInUp = "_fadeInUp_4l34d_1";
var fadeInDown = "_fadeInDown_4l34d_1";
var fadeInLeft = "_fadeInLeft_4l34d_1";
var fadeInRight = "_fadeInRight_4l34d_1";
var fadeOut = "_fadeOut_4l34d_1";
var fadeOutDown = "_fadeOutDown_4l34d_1";
var fadeOutUp = "_fadeOutUp_4l34d_1";
var fadeOutLeft = "_fadeOutLeft_4l34d_1";
var fadeOutRight = "_fadeOutRight_4l34d_1";
var ping = "_ping_4l34d_1";
var blinkBackground = "_blinkBackground_4l34d_1";
var typingBlink = "_typingBlink_4l34d_1";
var TableBase_vue_vue_type_style_index_0_lang_module_default = {
	n8nTableScroll,
	n8nTable,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_4l34d_1",
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
//#region ../@n8n/design-system/src/components/TableBase/index.ts
var TableBase_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TableBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TableBase_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TableBase_default as t };
