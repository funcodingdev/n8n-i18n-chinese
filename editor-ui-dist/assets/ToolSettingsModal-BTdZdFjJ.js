import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nInlineTextEdit_default } from "./N8nInlineTextEdit-CPP1fNIO.js";
import { n as useUIStore } from "./ui.store-Bnte4owf.js";
import { t as Modal_default } from "./Modal-DFINaSSV.js";
import { t as NodeIcon_default } from "./NodeIcon-D58U7cBX.js";
import { t as NodeToolSettingsContent_default } from "./NodeToolSettingsContent-CIGdd9FT.js";
//#region src/features/ai/chatHub/components/ToolSettingsModal.vue?vue&type=script&setup=true&lang.ts
var ToolSettingsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolSettingsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const contentRef = ref(null);
		const isValid = ref(false);
		const nodeName = ref(props.data.node?.name ?? "");
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		function handleConfirm() {
			const currentNode = contentRef.value?.node;
			if (!currentNode) return;
			props.data.onConfirm(currentNode);
			closeDialog();
		}
		function handleCancel() {
			closeDialog();
		}
		function handleChangeName(name) {
			contentRef.value?.handleChangeName(name);
		}
		function handleValidUpdate(valid) {
			isValid.value = valid;
		}
		function handleNodeNameUpdate(name) {
			nodeName.value = name;
		}
		return (_ctx, _cache) => {
			return __props.data.node ? (openBlock(), createBlock(Modal_default, {
				key: 0,
				name: __props.modalName,
				width: "780px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [contentRef.value?.nodeTypeDescription ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					"node-type": contentRef.value.nodeTypeDescription,
					size: 24,
					circle: true,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["node-type", "class"])) : createCommentVNode("", true), createVNode(unref(N8nInlineTextEdit_default), {
					"model-value": nodeName.value,
					"max-width": 400,
					class: normalizeClass(_ctx.$style.title),
					"onUpdate:modelValue": handleChangeName
				}, null, 8, ["model-value", "class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [createVNode(NodeToolSettingsContent_default, {
					ref_key: "contentRef",
					ref: contentRef,
					"initial-node": __props.data.node,
					"existing-tool-names": __props.data.existingToolNames,
					"onUpdate:valid": handleValidUpdate,
					"onUpdate:nodeName": handleNodeNameUpdate
				}, null, 8, ["initial-node", "existing-tool-names"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: handleCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !isValid.value,
					onClick: handleConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ToolSettingsModal.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_1dyip_388";
var icon = "_icon_1dyip_395";
var title = "_title_1dyip_400";
var footer = "_footer_1dyip_409";
var contentWrapper = "_contentWrapper_1dyip_415";
var shimmer = "_shimmer_1dyip_1";
var spin = "_spin_1dyip_1";
var opacityPulse = "_opacityPulse_1dyip_1";
var popoverIn = "_popoverIn_1dyip_1";
var fadeIn = "_fadeIn_1dyip_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1dyip_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1dyip_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1dyip_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1dyip_1";
var blurSwapIn = "_blurSwapIn_1dyip_1";
var blurSwapOut = "_blurSwapOut_1dyip_1";
var pulseGlow = "_pulseGlow_1dyip_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1dyip_1";
var fade = "_fade_1dyip_1";
var fadeInUp = "_fadeInUp_1dyip_1";
var fadeInDown = "_fadeInDown_1dyip_1";
var fadeInLeft = "_fadeInLeft_1dyip_1";
var fadeInRight = "_fadeInRight_1dyip_1";
var fadeOut = "_fadeOut_1dyip_1";
var fadeOutDown = "_fadeOutDown_1dyip_1";
var fadeOutUp = "_fadeOutUp_1dyip_1";
var fadeOutLeft = "_fadeOutLeft_1dyip_1";
var fadeOutRight = "_fadeOutRight_1dyip_1";
var ping = "_ping_1dyip_1";
var blinkBackground = "_blinkBackground_1dyip_1";
var typingBlink = "_typingBlink_1dyip_1";
var ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default = {
	header,
	icon,
	title,
	footer,
	contentWrapper,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1dyip_1",
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
var ToolSettingsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolSettingsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ToolSettingsModal_default as default };
