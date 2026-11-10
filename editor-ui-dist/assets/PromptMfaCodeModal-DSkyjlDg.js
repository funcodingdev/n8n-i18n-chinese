import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ed as init_runtime_dom_esm_bundler, Ef as withCtx, Gd as createTextVNode, Jd as defineComponent, Jf as unref, Kd as createVNode, Nd as withKeys, Rd as computed, Vd as createCommentVNode, bp as toDisplayString, df as openBlock, hp as normalizeClass, ja as validate, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { B as PROMPT_MFA_CODE_MODAL_KEY, BO as _plugin_vue_export_helper_default, Ex as ResponseError, GO as useI18n, IO as N8nButton_default, Jb as useToast, OO as N8nText_default, PO as Input_default, SE as Dialog_default, bE as DialogBody_default, s_ as useUIStore, xE as DialogDescription_default, yE as DialogFooter_default, zD as N8nInputLabel_default } from "./app-DGoK9ugD.js";
import { r as promptMfaCodeBus } from "./auth.eventBus-C8w4wn4f.js";
//#region src/features/core/auth/components/PromptMfaCodeModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler(), init_runtime_dom_esm_bundler();
var PromptMfaCodeModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PromptMfaCodeModal",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const MFA_CODE_PATTERN = /^\d{6}$/;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const { showError } = useToast();
		const code = ref("");
		const codeInput = ref(null);
		const isSubmitting = ref(false);
		const showFormatError = ref(false);
		const rejection = ref();
		const isChangingEmail = computed(() => props.data?.purpose === "changeEmail");
		const trimmedCode = computed(() => code.value.trim());
		/** The code to send, once it has the shape of a 2FA code or (when allowed) a recovery code. */
		const credentials = computed(() => {
			const value = trimmedCode.value;
			if (MFA_CODE_PATTERN.test(value)) return { mfaCode: value };
			if (!isChangingEmail.value && validate(value)) return { mfaRecoveryCode: value };
		});
		const copy = computed(() => isChangingEmail.value ? {
			title: i18n.baseText("mfa.prompt.changeEmail.title"),
			description: i18n.baseText("mfa.prompt.changeEmail.description"),
			label: i18n.baseText("mfa.prompt.changeEmail.input.label"),
			placeholder: i18n.baseText("mfa.prompt.changeEmail.input.placeholder"),
			formatError: i18n.baseText("mfa.prompt.error.format.code"),
			confirm: i18n.baseText("mfa.prompt.changeEmail.button"),
			failure: i18n.baseText("settings.personal.personalSettingsUpdatedError")
		} : {
			title: i18n.baseText("mfa.prompt.disable.title"),
			description: i18n.baseText("mfa.prompt.disable.description"),
			label: i18n.baseText("mfa.prompt.disable.input.label"),
			placeholder: i18n.baseText("mfa.prompt.disable.input.placeholder"),
			formatError: i18n.baseText("mfa.prompt.error.format.codeOrRecoveryCode"),
			confirm: i18n.baseText("mfa.prompt.disable.button"),
			failure: i18n.baseText("settings.personal.mfa.toast.disabledMfa.error.message")
		});
		const rejectionMessages = computed(() => ({
			wrongMfaCode: i18n.baseText("mfa.prompt.error.wrongCode"),
			wrongRecoveryCode: i18n.baseText("mfa.prompt.error.wrongRecoveryCode"),
			tooManyAttempts: i18n.baseText("mfa.prompt.error.tooManyAttempts")
		}));
		const error = computed(() => {
			if (rejection.value) return rejectionMessages.value[rejection.value];
			if (showFormatError.value && trimmedCode.value && !credentials.value) return copy.value.formatError;
		});
		watch(code, () => {
			if (!rejection.value) return;
			rejection.value = void 0;
			showFormatError.value = false;
		});
		const close = (payload) => {
			if (isSubmitting.value) return;
			uiStore.closeModal(PROMPT_MFA_CODE_MODAL_KEY);
			promptMfaCodeBus.emit("closed", payload);
		};
		const onOpenChange = (open) => {
			if (!open) close();
		};
		const onOpenAutoFocus = (event) => {
			event.preventDefault();
			codeInput.value?.focus();
		};
		function toRejection(e, sent) {
			if (!(e instanceof ResponseError)) return void 0;
			if (e.httpStatusCode === 429) return "tooManyAttempts";
			if (e.httpStatusCode === 403) return sent.mfaRecoveryCode ? "wrongRecoveryCode" : "wrongMfaCode";
		}
		const onConfirm = async () => {
			showFormatError.value = true;
			const sent = credentials.value;
			if (!sent || rejection.value || isSubmitting.value) return;
			isSubmitting.value = true;
			try {
				await props.data?.submit(sent);
			} catch (e) {
				rejection.value = toRejection(e, sent);
				if (rejection.value) {
					codeInput.value?.focus();
					codeInput.value?.select();
					return;
				}
				showError(e, copy.value.failure);
			} finally {
				isSubmitting.value = false;
			}
			close(sent);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: true,
				header: copy.value.title,
				size: "medium",
				"onUpdate:open": onOpenChange,
				onOpenAutoFocus
			}, {
				default: withCtx(() => [createVNode(unref(DialogBody_default), null, {
					default: withCtx(() => [createVNode(unref(DialogDescription_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(copy.value.description), 1)]),
						_: 1
					}), createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.body),
						"data-test-id": "prompt-mfa-code-modal"
					}, [createVNode(unref(N8nInputLabel_default), {
						"input-name": "mfa-prompt-code",
						label: copy.value.label
					}, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.field, { [_ctx.$style.fieldInvalid]: error.value }]) }, [createVNode(unref(Input_default), {
							id: "mfa-prompt-code",
							ref_key: "codeInput",
							ref: codeInput,
							modelValue: code.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => code.value = $event),
							name: "mfaCodeOrMfaRecoveryCode",
							size: "medium",
							autocomplete: "one-time-code",
							maxlength: isChangingEmail.value ? unref(6) : void 0,
							placeholder: copy.value.placeholder,
							"aria-invalid": Boolean(error.value),
							"aria-describedby": error.value ? "mfa-prompt-code-error" : void 0,
							"data-test-id": "mfa-code-or-recovery-code-input",
							onBlur: _cache[1] || (_cache[1] = ($event) => showFormatError.value = true),
							onKeydown: withKeys(onConfirm, ["enter"])
						}, null, 8, [
							"modelValue",
							"maxlength",
							"placeholder",
							"aria-invalid",
							"aria-describedby"
						]), error.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							id: "mfa-prompt-code-error",
							size: "small",
							color: "danger",
							role: "alert",
							"data-test-id": "mfa-code-error"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)], 2)]),
						_: 1
					}, 8, ["label"])], 2)]),
					_: 1
				}), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						disabled: isSubmitting.value,
						"data-test-id": "mfa-code-cancel-button",
						onClick: _cache[2] || (_cache[2] = ($event) => close())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
						_: 1
					}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						variant: isChangingEmail.value ? "solid" : "destructive",
						disabled: !credentials.value || Boolean(rejection.value),
						loading: isSubmitting.value,
						"data-test-id": "mfa-code-confirm-button",
						onClick: onConfirm
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(copy.value.confirm), 1)]),
						_: 1
					}, 8, [
						"variant",
						"disabled",
						"loading"
					])]),
					_: 1
				})]),
				_: 1
			}, 8, ["header"]);
		};
	}
}), [["__cssModules", { "$style": {
	body: "_body_1uloc_1",
	field: "_field_1uloc_5",
	fieldInvalid: "_fieldInvalid_1uloc_12"
} }]]);
//#endregion
export { PromptMfaCodeModal_default as default };
