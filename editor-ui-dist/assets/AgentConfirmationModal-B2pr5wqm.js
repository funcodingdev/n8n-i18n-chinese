import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { n as useUIStore } from "./ui.store-xzfQIfPK.js";
import { t as Modal_default } from "./Modal-DYw1gJ5H.js";
//#region src/features/agents/components/AgentConfirmationModal.vue?vue&type=script&setup=true&lang.ts
var AgentConfirmationModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentConfirmationModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const uiStore = useUIStore();
		const submitting = ref(false);
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		async function onCancel() {
			await props.data.onCancel?.();
			closeModal();
		}
		async function onConfirm() {
			submitting.value = true;
			try {
				if (await props.data.onConfirm?.() !== false) closeModal();
			} catch {} finally {
				submitting.value = false;
			}
		}
		async function onBeforeClose() {
			return await props.data.onClose?.() !== false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				width: "500px",
				name: props.modalName,
				"before-close": onBeforeClose
			}, {
				header: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h2",
					size: "xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.title), 1)]),
					_: 1
				})]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: "triangle-alert",
					color: "warning",
					size: "xlarge"
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.description), 1)]),
					_: 1
				})], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "medium",
					disabled: submitting.value,
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.cancelButtonText), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "medium",
					loading: submitting.value,
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.confirmButtonText), 1)]),
					_: 1
				}, 8, ["loading"])], 2)]),
				_: 1
			}, 8, ["name"]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentConfirmationModal.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_1aawc_388";
var icon = "_icon_1aawc_395";
var footer = "_footer_1aawc_400";
var shimmer = "_shimmer_1aawc_1";
var spin = "_spin_1aawc_1";
var opacityPulse = "_opacityPulse_1aawc_1";
var popoverIn = "_popoverIn_1aawc_1";
var fadeIn = "_fadeIn_1aawc_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1aawc_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1aawc_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1aawc_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1aawc_1";
var blurSwapIn = "_blurSwapIn_1aawc_1";
var blurSwapOut = "_blurSwapOut_1aawc_1";
var pulseGlow = "_pulseGlow_1aawc_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1aawc_1";
var fade = "_fade_1aawc_1";
var fadeInUp = "_fadeInUp_1aawc_1";
var fadeInDown = "_fadeInDown_1aawc_1";
var fadeInLeft = "_fadeInLeft_1aawc_1";
var fadeInRight = "_fadeInRight_1aawc_1";
var fadeOut = "_fadeOut_1aawc_1";
var fadeOutDown = "_fadeOutDown_1aawc_1";
var fadeOutUp = "_fadeOutUp_1aawc_1";
var fadeOutLeft = "_fadeOutLeft_1aawc_1";
var fadeOutRight = "_fadeOutRight_1aawc_1";
var ping = "_ping_1aawc_1";
var blinkBackground = "_blinkBackground_1aawc_1";
var typingBlink = "_typingBlink_1aawc_1";
var AgentConfirmationModal_vue_vue_type_style_index_0_lang_module_default = {
	content,
	icon,
	footer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1aawc_1",
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
var AgentConfirmationModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentConfirmationModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentConfirmationModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AgentConfirmationModal_default as default };
