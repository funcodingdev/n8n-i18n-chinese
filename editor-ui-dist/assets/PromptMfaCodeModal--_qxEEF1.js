import { $ as openBlock, C as createBaseVNode, Gt as unref, It as ref, N as defineComponent, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-a4RL4cTS.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { n as createFormEventBus, t as N8nFormInputs_default } from "./N8nFormInputs-Ci6Sk7OU.js";
import { ea as validate } from "./src-JwBmTNgK.js";
import { t as Modal_default } from "./Modal-aTLtcfM7.js";
import { i as PROMPT_MFA_CODE_MODAL_KEY } from "./auth.constants-mgqLBEql.js";
import { r as promptMfaCodeBus } from "./auth.eventBus-Oz2wgmcs.js";
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
var PromptMfaCodeModal_vue_vue_type_style_index_0_lang_module_default = { formContainer: "_formContainer_1rysb_125" };
var PromptMfaCodeModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PromptMfaCodeModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PromptMfaCodeModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PromptMfaCodeModal_default as default };
