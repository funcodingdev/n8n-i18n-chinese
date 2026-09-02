import { $ as openBlock, C as createBaseVNode, Gt as unref, It as ref, N as defineComponent, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { n as createFormEventBus, t as N8nFormInputs_default } from "./N8nFormInputs-CpuOJV4S.js";
import { sa as validate } from "./src-DAIlllTg.js";
import { t as Modal_default } from "./Modal-DFINaSSV.js";
import { i as PROMPT_MFA_CODE_MODAL_KEY } from "./auth.constants-FYmO-P3M.js";
import { r as promptMfaCodeBus } from "./auth.eventBus-0_zQt7DZ.js";
//#region src/features/core/auth/components/PromptMfaCodeModal.vue?vue&type=script&setup=true&lang.ts
var PromptMfaCodeModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PromptMfaCodeModal",
	setup(__props) {
		const i18n = useI18n();
		const formBus = createFormEventBus();
		const readyToSubmit = ref(false);
		const formFields = [{
			name: "mfaCodeOrMfaRecoveryCode",
			initialValue: "",
			properties: {
				label: i18n.baseText("mfa.code.recovery.input.label"),
				placeholder: i18n.baseText("mfa.code.recovery.input.placeholder"),
				focusInitially: true,
				capitalize: true,
				required: true
			}
		}];
		function onSubmit(values) {
			if (!("mfaCodeOrMfaRecoveryCode" in values && typeof values.mfaCodeOrMfaRecoveryCode === "string")) return;
			if (validate(values.mfaCodeOrMfaRecoveryCode)) {
				promptMfaCodeBus.emit("close", { mfaRecoveryCode: values.mfaCodeOrMfaRecoveryCode });
				return;
			}
			promptMfaCodeBus.emit("close", { mfaCode: values.mfaCodeOrMfaRecoveryCode });
		}
		function onClickSave() {
			formBus.emit("submit");
		}
		function onFormReady(isReady) {
			readyToSubmit.value = isReady;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				width: "500px",
				height: "300px",
				"max-height": "640px",
				title: unref(i18n).baseText("mfa.prompt.code.modal.title"),
				"event-bus": unref(promptMfaCodeBus),
				name: unref(PROMPT_MFA_CODE_MODAL_KEY),
				center: true
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.formContainer]) }, [createVNode(unref(N8nFormInputs_default), {
					"data-test-id": "mfa-code-or-recovery-code-input",
					inputs: formFields,
					"event-bus": unref(formBus),
					onSubmit,
					onReady: onFormReady
				}, null, 8, ["event-bus"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
					float: "right",
					disabled: !readyToSubmit.value,
					label: unref(i18n).baseText("settings.personal.save"),
					size: "large",
					"data-test-id": "mfa-save-button",
					onClick: onClickSave
				}, null, 8, ["disabled", "label"])])]),
				_: 1
			}, 8, [
				"title",
				"event-bus",
				"name"
			]);
		};
	}
});
//#endregion
//#region src/features/core/auth/components/PromptMfaCodeModal.vue?vue&type=style&index=0&lang.module.scss
var formContainer = "_formContainer_1h9au_388";
var shimmer = "_shimmer_1h9au_1";
var spin = "_spin_1h9au_1";
var opacityPulse = "_opacityPulse_1h9au_1";
var popoverIn = "_popoverIn_1h9au_1";
var fadeIn = "_fadeIn_1h9au_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1h9au_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1h9au_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1h9au_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1h9au_1";
var blurSwapIn = "_blurSwapIn_1h9au_1";
var blurSwapOut = "_blurSwapOut_1h9au_1";
var pulseGlow = "_pulseGlow_1h9au_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1h9au_1";
var fade = "_fade_1h9au_1";
var fadeInUp = "_fadeInUp_1h9au_1";
var fadeInDown = "_fadeInDown_1h9au_1";
var fadeInLeft = "_fadeInLeft_1h9au_1";
var fadeInRight = "_fadeInRight_1h9au_1";
var fadeOut = "_fadeOut_1h9au_1";
var fadeOutDown = "_fadeOutDown_1h9au_1";
var fadeOutUp = "_fadeOutUp_1h9au_1";
var fadeOutLeft = "_fadeOutLeft_1h9au_1";
var fadeOutRight = "_fadeOutRight_1h9au_1";
var ping = "_ping_1h9au_1";
var blinkBackground = "_blinkBackground_1h9au_1";
var typingBlink = "_typingBlink_1h9au_1";
var PromptMfaCodeModal_vue_vue_type_style_index_0_lang_module_default = {
	formContainer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1h9au_1",
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
var PromptMfaCodeModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromptMfaCodeModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromptMfaCodeModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PromptMfaCodeModal_default as default };
