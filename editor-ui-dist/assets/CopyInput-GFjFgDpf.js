import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-BmYlbe2o.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import { t as useClipboard } from "./useClipboard-FfSvbxpY.js";
//#region src/app/components/CopyInput.vue?vue&type=script&setup=true&lang.ts
var CopyInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CopyInput",
	props: {
		label: { default: "" },
		hint: { default: "" },
		value: { default: "" },
		copyButtonText: { default: useI18n().baseText("generic.copy") },
		toastTitle: { default: useI18n().baseText("generic.copiedToClipboard") },
		toastMessage: {},
		size: { default: "medium" },
		collapse: { type: Boolean },
		redactValue: { type: Boolean },
		disableCopy: {
			type: Boolean,
			default: false
		}
	},
	emits: ["copy"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const clipboard = useClipboard();
		const { showMessage } = useToast();
		function copy() {
			if (props.disableCopy) return;
			emit("copy");
			clipboard.copy(props.value ?? "");
			showMessage({
				title: props.toastTitle,
				message: props.toastMessage,
				type: "success"
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nInputLabel_default), { label: __props.label }, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass({
						[_ctx.$style.copyText]: true,
						[_ctx.$style[__props.size]]: true,
						[_ctx.$style.collapsed]: __props.collapse,
						[_ctx.$style.noHover]: __props.disableCopy,
						"ph-no-capture": __props.redactValue
					}),
					"data-test-id": "copy-input",
					onClick: copy
				}, [createBaseVNode("span", { ref: "copyInputValue" }, toDisplayString(__props.value), 513), !__props.disableCopy ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.copyButton)
				}, [createBaseVNode("span", null, toDisplayString(__props.copyButtonText), 1)], 2)) : createCommentVNode("", true)], 2)]),
				_: 1
			}, 8, ["label"]), __props.hint ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.hint)
			}, toDisplayString(__props.hint), 3)) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/app/components/CopyInput.vue?vue&type=style&index=0&lang.module.scss
var copyText = "_copyText_gntki_388";
var noHover = "_noHover_gntki_408";
var large = "_large_gntki_412";
var medium = "_medium_gntki_417";
var collapsed = "_collapsed_gntki_422";
var copyButton = "_copyButton_gntki_427";
var hint = "_hint_gntki_443";
var shimmer = "_shimmer_gntki_1";
var spin = "_spin_gntki_1";
var opacityPulse = "_opacityPulse_gntki_1";
var popoverIn = "_popoverIn_gntki_1";
var fadeIn = "_fadeIn_gntki_1";
var collapsibleSlideDown = "_collapsibleSlideDown_gntki_1";
var collapsibleSlideUp = "_collapsibleSlideUp_gntki_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_gntki_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_gntki_1";
var blurSwapIn = "_blurSwapIn_gntki_1";
var blurSwapOut = "_blurSwapOut_gntki_1";
var pulseGlow = "_pulseGlow_gntki_1";
var pulseGlowDelayed = "_pulseGlowDelayed_gntki_1";
var fade = "_fade_gntki_1";
var fadeInUp = "_fadeInUp_gntki_1";
var fadeInDown = "_fadeInDown_gntki_1";
var fadeInLeft = "_fadeInLeft_gntki_1";
var fadeInRight = "_fadeInRight_gntki_1";
var fadeOut = "_fadeOut_gntki_1";
var fadeOutDown = "_fadeOutDown_gntki_1";
var fadeOutUp = "_fadeOutUp_gntki_1";
var fadeOutLeft = "_fadeOutLeft_gntki_1";
var fadeOutRight = "_fadeOutRight_gntki_1";
var ping = "_ping_gntki_1";
var blinkBackground = "_blinkBackground_gntki_1";
var typingBlink = "_typingBlink_gntki_1";
var CopyInput_vue_vue_type_style_index_0_lang_module_default = {
	copyText,
	noHover,
	large,
	medium,
	collapsed,
	copyButton,
	hint,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_gntki_1",
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
var CopyInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CopyInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CopyInput_default as t };
