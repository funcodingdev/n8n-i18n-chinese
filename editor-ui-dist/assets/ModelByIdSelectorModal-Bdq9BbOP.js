import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, X as onMounted, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nFormInput_default } from "./N8nFormInput-C49MRcy5.js";
import { j as PROVIDER_CREDENTIAL_TYPE_MAP } from "./src-DAIlllTg.js";
import { t as Modal_default } from "./Modal-DFINaSSV.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DQ6D8F8q.js";
import { h as providerDisplayNames, i as CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY } from "./constants-zeVT1Ciq.js";
//#region src/features/ai/chatHub/components/ModelByIdSelectorModal.vue?vue&type=script&setup=true&lang.ts
var ModelByIdSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ModelByIdSelectorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const modalBus = ref(createEventBus());
		const modelId = ref(props.data.initialValue);
		const inputRef = ref(null);
		const i18n = useI18n();
		onMounted(() => {
			setTimeout(() => {
				inputRef.value?.inputRef?.select();
				inputRef.value?.inputRef?.focus();
			});
		});
		function onConfirm() {
			if (modelId.value) {
				props.data.onSelect(props.data.provider, modelId.value);
				modalBus.value.emit("close");
			}
		}
		function onCancel() {
			modalBus.value.emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY),
				"event-bus": modalBus.value,
				width: "50%",
				center: true,
				"max-width": "460px",
				"min-height": "250px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(CredentialIcon_default, {
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[__props.data.provider],
					size: 24,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["credential-type-name", "class"]), createVNode(unref(N8nHeading_default), {
					size: "medium",
					tag: "h2",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.title", { interpolate: { provider: unref(providerDisplayNames)[__props.data.provider] } })), 1)]),
					_: 1
				}, 8, ["class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.choose")), 1)]),
					_: 1
				}), createVNode(unref(N8nFormInput_default), {
					ref_key: "inputRef",
					ref: inputRef,
					modelValue: modelId.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelId.value = $event),
					name: "model",
					label: "",
					"max-length": "64",
					"focus-initially": "",
					onEnter: onConfirm
				}, null, 8, ["modelValue"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !modelId.value,
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ModelByIdSelectorModal.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_12lmc_388";
var footer = "_footer_12lmc_395";
var header = "_header_12lmc_402";
var icon = "_icon_12lmc_408";
var shimmer = "_shimmer_12lmc_1";
var spin = "_spin_12lmc_1";
var opacityPulse = "_opacityPulse_12lmc_1";
var popoverIn = "_popoverIn_12lmc_1";
var fadeIn = "_fadeIn_12lmc_1";
var collapsibleSlideDown = "_collapsibleSlideDown_12lmc_1";
var collapsibleSlideUp = "_collapsibleSlideUp_12lmc_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_12lmc_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_12lmc_1";
var blurSwapIn = "_blurSwapIn_12lmc_1";
var blurSwapOut = "_blurSwapOut_12lmc_1";
var pulseGlow = "_pulseGlow_12lmc_1";
var pulseGlowDelayed = "_pulseGlowDelayed_12lmc_1";
var fade = "_fade_12lmc_1";
var fadeInUp = "_fadeInUp_12lmc_1";
var fadeInDown = "_fadeInDown_12lmc_1";
var fadeInLeft = "_fadeInLeft_12lmc_1";
var fadeInRight = "_fadeInRight_12lmc_1";
var fadeOut = "_fadeOut_12lmc_1";
var fadeOutDown = "_fadeOutDown_12lmc_1";
var fadeOutUp = "_fadeOutUp_12lmc_1";
var fadeOutLeft = "_fadeOutLeft_12lmc_1";
var fadeOutRight = "_fadeOutRight_12lmc_1";
var ping = "_ping_12lmc_1";
var blinkBackground = "_blinkBackground_12lmc_1";
var typingBlink = "_typingBlink_12lmc_1";
var ModelByIdSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
	content,
	footer,
	header,
	icon,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_12lmc_1",
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
var ModelByIdSelectorModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ModelByIdSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ModelByIdSelectorModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ModelByIdSelectorModal_default as default };
