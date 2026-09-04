import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, it as renderSlot, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
//#region src/app/components/common/SelectedItemsInfo.vue?vue&type=script&setup=true&lang.ts
var SelectedItemsInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SelectedItemsInfo",
	props: { selectedCount: {} },
	emits: ["deleteSelected", "clearSelection"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const getSelectedText = () => {
			return i18n.baseText("generic.list.selected", {
				adjustToNumber: props.selectedCount,
				interpolate: { count: `${props.selectedCount}` }
			});
		};
		const getClearSelectionText = () => {
			return i18n.baseText("generic.list.clearSelection");
		};
		const handleDeleteSelected = () => {
			emit("deleteSelected");
		};
		const handleClearSelection = () => {
			emit("clearSelection");
		};
		return (_ctx, _cache) => {
			return __props.selectedCount > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.selectionOptions),
				"data-test-id": `selected-items-info`
			}, [
				createBaseVNode("span", null, toDisplayString(getSelectedText()), 1),
				renderSlot(_ctx.$slots, "actions", {}, () => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "delete-selected-button",
					label: unref(i18n).baseText("generic.delete"),
					class: normalizeClass(_ctx.$style.button),
					onClick: handleDeleteSelected
				}, null, 8, ["label", "class"])]),
				createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "clear-selection-button",
					label: getClearSelectionText(),
					class: normalizeClass(_ctx.$style.button),
					onClick: handleClearSelection
				}, null, 8, ["label", "class"])
			], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/app/components/common/SelectedItemsInfo.vue?vue&type=style&index=0&lang.module.scss
var selectionOptions = "_selectionOptions_plw4x_388";
var button = "_button_plw4x_404";
var shimmer = "_shimmer_plw4x_1";
var spin = "_spin_plw4x_1";
var opacityPulse = "_opacityPulse_plw4x_1";
var popoverIn = "_popoverIn_plw4x_1";
var fadeIn = "_fadeIn_plw4x_1";
var collapsibleSlideDown = "_collapsibleSlideDown_plw4x_1";
var collapsibleSlideUp = "_collapsibleSlideUp_plw4x_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_plw4x_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_plw4x_1";
var blurSwapIn = "_blurSwapIn_plw4x_1";
var blurSwapOut = "_blurSwapOut_plw4x_1";
var pulseGlow = "_pulseGlow_plw4x_1";
var pulseGlowDelayed = "_pulseGlowDelayed_plw4x_1";
var fade = "_fade_plw4x_1";
var fadeInUp = "_fadeInUp_plw4x_1";
var fadeInDown = "_fadeInDown_plw4x_1";
var fadeInLeft = "_fadeInLeft_plw4x_1";
var fadeInRight = "_fadeInRight_plw4x_1";
var fadeOut = "_fadeOut_plw4x_1";
var fadeOutDown = "_fadeOutDown_plw4x_1";
var fadeOutUp = "_fadeOutUp_plw4x_1";
var fadeOutLeft = "_fadeOutLeft_plw4x_1";
var fadeOutRight = "_fadeOutRight_plw4x_1";
var ping = "_ping_plw4x_1";
var blinkBackground = "_blinkBackground_plw4x_1";
var typingBlink = "_typingBlink_plw4x_1";
var SelectedItemsInfo_vue_vue_type_style_index_0_lang_module_default = {
	selectionOptions,
	button,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_plw4x_1",
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
var SelectedItemsInfo_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SelectedItemsInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SelectedItemsInfo_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SelectedItemsInfo_default as t };
