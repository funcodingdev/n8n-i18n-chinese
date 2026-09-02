import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, S as computed, T as createCommentVNode, X as onMounted, Z as onUnmounted, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { z as toRefs } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { t as N8nFormInputs_default } from "./N8nFormInputs-CpuOJV4S.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as AuthView_default } from "./AuthView-DqtxRqHT.js";
import { t as N8nLogo_default } from "./N8nLogo-Dro1bbAT.js";
import "./src-DAIlllTg.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { t as useUsersStore } from "./users.store-C9pohnYN.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { oo as MFA_FORM } from "./constants-DxozP3cY.js";
import { n as useSSOStore } from "./sso.store-DHU_Tm-K.js";
import { t as useNotificationsStore } from "./notifications.store-Chm5Xi_B.js";
import { n as mfaEventBus } from "./auth.eventBus-0_zQt7DZ.js";
//#region src/features/core/auth/views/MfaView.vue?vue&type=script&setup=true&lang.ts
var MfaView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MfaView",
	props: { reportError: { type: Boolean } },
	emits: [
		"onFormChanged",
		"onBackClick",
		"submit"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const hasAnyChanges = ref(false);
		const formBus = ref(mfaEventBus);
		const formInputs = ref(null);
		const showRecoveryCodeForm = ref(false);
		const verifyingMfaCode = ref(false);
		const formError = ref("");
		const { reportError } = toRefs(props);
		const mfaFormRef = ref(null);
		const i18 = useI18n();
		const emit = __emit;
		const formField = (name, label, placeholder, maxlength, focus = true, autocomplete = "off") => {
			return {
				name,
				initialValue: "",
				properties: {
					label,
					placeholder,
					maxlength,
					capitalize: true,
					validateOnBlur: false,
					focusInitially: focus,
					autocomplete
				}
			};
		};
		const onRecoveryCodeClick = () => {
			formError.value = "";
			showRecoveryCodeForm.value = true;
			hasAnyChanges.value = false;
			formInputs.value = [mfaRecoveryCodeFieldWithDefaults()];
			emit("onFormChanged", MFA_FORM.MFA_RECOVERY_CODE);
		};
		const onBackClick = () => {
			if (!showRecoveryCodeForm.value) {
				emit("onBackClick", MFA_FORM.MFA_TOKEN);
				return;
			}
			showRecoveryCodeForm.value = false;
			hasAnyChanges.value = true;
			formInputs.value = [mfaCodeFieldWithDefaults()];
			emit("onBackClick", MFA_FORM.MFA_RECOVERY_CODE);
			focusMfaCodeAfterPasswordManager();
		};
		const onSubmit = (formData) => {
			const data = formData;
			formError.value = !showRecoveryCodeForm.value ? i18.baseText("mfa.code.invalid") : i18.baseText("mfa.recovery.invalid");
			emit("submit", data);
		};
		const focusMfaCodeAfterPasswordManager = () => {
			setTimeout(() => {
				if (mfaFormRef.value) {
					const container = mfaFormRef.value.$el;
					if (!container) return;
					const inputElement = container.querySelector("input[name=\"mfaCode\"]");
					if (inputElement) inputElement.focus();
				}
			}, 200);
		};
		const onInput = ({ target: { value, name } }) => {
			const isSubmittingMfaCode = name === "mfaCode";
			const inputValidLength = isSubmittingMfaCode ? 6 : 36;
			if (value.length !== inputValidLength) {
				hasAnyChanges.value = false;
				return;
			}
			verifyingMfaCode.value = true;
			hasAnyChanges.value = true;
			const dataToSubmit = isSubmittingMfaCode ? {
				mfaCode: value,
				mfaRecoveryCode: ""
			} : {
				mfaCode: "",
				mfaRecoveryCode: value
			};
			try {
				onSubmit(dataToSubmit);
			} catch (e) {} finally {
				verifyingMfaCode.value = false;
			}
		};
		const mfaRecoveryCodeFieldWithDefaults = () => {
			return formField("mfaRecoveryCode", i18.baseText("mfa.recovery.input.label"), i18.baseText("mfa.recovery.input.placeholder"), 36);
		};
		const mfaCodeFieldWithDefaults = () => {
			return formField("mfaCode", i18.baseText("mfa.code.input.label"), i18.baseText("mfa.code.input.placeholder"), 6, false, "one-time-code");
		};
		const onSaveClick = () => {
			formBus.value.emit("submit");
		};
		const { settings: { releaseChannel } } = useSettingsStore();
		onMounted(() => {
			formInputs.value = [mfaCodeFieldWithDefaults()];
			focusMfaCodeAfterPasswordManager();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nLogo_default), {
				size: "large",
				"release-channel": unref(releaseChannel)
			}, null, 8, ["release-channel"]), createVNode(unref(N8nCard_default), null, {
				default: withCtx(() => [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContainer) }, [createVNode(unref(N8nHeading_default), {
						size: "xlarge",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.modal.title") : unref(i18).baseText("mfa.code.modal.title")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.formContainer, unref(reportError) ? _ctx.$style.formError : ""]) }, [formInputs.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
						key: 0,
						ref_key: "mfaFormRef",
						ref: mfaFormRef,
						"data-test-id": "mfa-login-form",
						inputs: formInputs.value,
						"event-bus": formBus.value,
						onInput,
						onSubmit
					}, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.infoBox) }, [!showRecoveryCodeForm.value && !unref(reportError) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-base",
						bold: false
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18).baseText("mfa.code.input.info")) + " ", 1), createBaseVNode("a", {
							"data-test-id": "mfa-enter-recovery-code-button",
							onClick: onRecoveryCodeClick
						}, toDisplayString(unref(i18).baseText("mfa.code.input.info.action")), 1)]),
						_: 1
					})) : createCommentVNode("", true), unref(reportError) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "danger",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(formError.value) + " ", 1), !showRecoveryCodeForm.value ? (openBlock(), createElementBlock("a", {
							key: 0,
							class: normalizeClass(_ctx.$style.recoveryCodeLink),
							onClick: onRecoveryCodeClick
						}, toDisplayString(unref(i18).baseText("mfa.recovery.input.info.action")), 3)) : createCommentVNode("", true)]),
						_: 1
					})) : createCommentVNode("", true)], 2)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						float: "left",
						label: unref(i18).baseText("mfa.button.back"),
						size: "large",
						onClick: onBackClick
					}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
						float: "right",
						loading: verifyingMfaCode.value,
						label: showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.button.verify") : unref(i18).baseText("mfa.code.button.continue"),
						size: "large",
						disabled: !hasAnyChanges.value,
						onClick: onSaveClick
					}, null, 8, [
						"loading",
						"label",
						"disabled"
					])], 2)
				]),
				_: 1
			})], 2);
		};
	}
});
//#endregion
//#region src/features/core/auth/views/MfaView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_887aw_392";
var formContainer = "_formContainer_887aw_402";
var footer = "_footer_887aw_406";
var headerContainer = "_headerContainer_887aw_412";
var formError = "_formError_887aw_417";
var recoveryCodeLink = "_recoveryCodeLink_887aw_421";
var infoBox = "_infoBox_887aw_425";
var shimmer = "_shimmer_887aw_1";
var spin = "_spin_887aw_1";
var opacityPulse = "_opacityPulse_887aw_1";
var popoverIn = "_popoverIn_887aw_1";
var fadeIn = "_fadeIn_887aw_1";
var collapsibleSlideDown = "_collapsibleSlideDown_887aw_1";
var collapsibleSlideUp = "_collapsibleSlideUp_887aw_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_887aw_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_887aw_1";
var blurSwapIn = "_blurSwapIn_887aw_1";
var blurSwapOut = "_blurSwapOut_887aw_1";
var pulseGlow = "_pulseGlow_887aw_1";
var pulseGlowDelayed = "_pulseGlowDelayed_887aw_1";
var fade = "_fade_887aw_1";
var fadeInUp = "_fadeInUp_887aw_1";
var fadeInDown = "_fadeInDown_887aw_1";
var fadeInLeft = "_fadeInLeft_887aw_1";
var fadeInRight = "_fadeInRight_887aw_1";
var fadeOut = "_fadeOut_887aw_1";
var fadeOutDown = "_fadeOutDown_887aw_1";
var fadeOutUp = "_fadeOutUp_887aw_1";
var fadeOutLeft = "_fadeOutLeft_887aw_1";
var fadeOutRight = "_fadeOutRight_887aw_1";
var ping = "_ping_887aw_1";
var blinkBackground = "_blinkBackground_887aw_1";
var typingBlink = "_typingBlink_887aw_1";
var MfaView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	formContainer,
	footer,
	headerContainer,
	formError,
	recoveryCodeLink,
	infoBox,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_887aw_1",
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
var MfaView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MfaView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MfaView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/core/auth/views/SigninView.vue
var SigninView_default = /* @__PURE__ */ defineComponent({
	__name: "SigninView",
	setup(__props) {
		const usersStore = useUsersStore();
		const settingsStore = useSettingsStore();
		const ssoStore = useSSOStore();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const locale = useI18n();
		const telemetry = useTelemetry();
		const loading = ref(false);
		const showMfaView = ref(false);
		const emailOrLdapLoginId = ref("");
		const password = ref("");
		const reportError = ref(false);
		const notificationsStore = useNotificationsStore();
		const showAuthViewMessage = (messageData) => {
			notificationsStore.setNotificationsSuppressed(false);
			toast.showMessage(messageData);
			notificationsStore.setNotificationsSuppressed(true);
		};
		onMounted(() => {
			if (route.query["ssoError"] === "access-denied") {
				showAuthViewMessage({
					title: locale.baseText("auth.signin.accessDenied.title"),
					message: locale.baseText("auth.signin.accessDenied"),
					type: "error",
					duration: 0
				});
				return;
			}
			if (route.query.sessionExpired !== "true") return;
			showAuthViewMessage({
				title: locale.baseText("auth.signin.sessionExpired.title"),
				message: locale.baseText("auth.signin.sessionExpired"),
				type: "info"
			});
		});
		onUnmounted(() => {
			notificationsStore.setNotificationsSuppressed(false);
		});
		const ldapLoginLabel = computed(() => ssoStore.ldapLoginLabel);
		const isLdapLoginEnabled = computed(() => ssoStore.isLdapLoginEnabled);
		const emailLabel = computed(() => {
			let label = locale.baseText("auth.email");
			if (isLdapLoginEnabled.value && ldapLoginLabel.value) label = ldapLoginLabel.value;
			return label;
		});
		const formConfig = reactive({
			title: locale.baseText("auth.signin"),
			buttonText: locale.baseText("auth.signin"),
			redirectText: locale.baseText("forgotPassword"),
			redirectLink: "/forgot-password",
			inputs: [{
				name: "emailOrLdapLoginId",
				properties: {
					label: emailLabel.value,
					type: "email",
					required: true,
					...!isLdapLoginEnabled.value && { validationRules: [{ name: "VALID_EMAIL" }] },
					showRequiredAsterisk: false,
					validateOnBlur: false,
					autocomplete: "email",
					capitalize: true,
					focusInitially: true
				}
			}, {
				name: "password",
				properties: {
					label: locale.baseText("auth.password"),
					type: "password",
					required: true,
					showRequiredAsterisk: false,
					validateOnBlur: false,
					autocomplete: "current-password",
					capitalize: true
				}
			}]
		});
		const onMFASubmitted = async (form) => {
			await login({
				emailOrLdapLoginId: emailOrLdapLoginId.value,
				password: password.value,
				mfaCode: form.mfaCode,
				mfaRecoveryCode: form.mfaRecoveryCode
			});
		};
		const onEmailPasswordSubmitted = async (form) => {
			await login(form);
		};
		const isRedirectSafe = () => {
			const redirect = getRedirectQueryParameter();
			if (redirect.startsWith("/")) return true;
			try {
				return new URL(redirect).origin === window.location.origin;
			} catch {
				return false;
			}
		};
		const getRedirectQueryParameter = () => {
			let redirect = "";
			if (typeof route.query?.redirect === "string") redirect = decodeURIComponent(route.query?.redirect);
			return redirect;
		};
		const login = async (form) => {
			notificationsStore.setNotificationsSuppressed(false);
			try {
				loading.value = true;
				await usersStore.loginWithCreds({
					emailOrLdapLoginId: form.emailOrLdapLoginId,
					password: form.password,
					mfaCode: form.mfaCode,
					mfaRecoveryCode: form.mfaRecoveryCode
				});
				loading.value = false;
				await settingsStore.getSettings();
				toast.clearAllStickyNotifications();
				if (settingsStore.isMFAEnforced && !usersStore.currentUser?.mfaAuthenticated) {
					await router.push({ name: VIEWS.PERSONAL_SETTINGS });
					return;
				}
				telemetry.track("User attempted to login", { result: showMfaView.value ? "mfa_success" : "success" });
				if (isRedirectSafe()) {
					const redirect = getRedirectQueryParameter();
					if (redirect.startsWith("http")) {
						window.location.href = redirect;
						return;
					}
					router.push(redirect);
					return;
				}
				await router.push({ name: VIEWS.HOMEPAGE });
			} catch (error) {
				if (error.errorCode === 998) {
					showMfaView.value = true;
					cacheCredentials(form);
					return;
				}
				telemetry.track("User attempted to login", { result: showMfaView.value ? "mfa_token_rejected" : "credentials_error" });
				if (!showMfaView.value) {
					toast.showError(error, locale.baseText("auth.signin.error"));
					loading.value = false;
					return;
				}
				reportError.value = true;
			}
		};
		const onBackClick = (fromForm) => {
			reportError.value = false;
			if (fromForm === MFA_FORM.MFA_TOKEN) {
				showMfaView.value = false;
				loading.value = false;
			}
		};
		const onFormChanged = (toForm) => {
			if (toForm === MFA_FORM.MFA_RECOVERY_CODE) reportError.value = false;
		};
		const cacheCredentials = (form) => {
			emailOrLdapLoginId.value = form.emailOrLdapLoginId;
			password.value = form.password;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [!showMfaView.value ? (openBlock(), createBlock(AuthView_default, {
				key: 0,
				form: formConfig,
				"form-loading": loading.value,
				"with-sso": true,
				"data-test-id": "signin-form",
				onSubmit: onEmailPasswordSubmitted
			}, null, 8, ["form", "form-loading"])) : createCommentVNode("", true), showMfaView.value ? (openBlock(), createBlock(MfaView_default, {
				key: 1,
				"report-error": reportError.value,
				onSubmit: onMFASubmitted,
				onOnBackClick: onBackClick,
				onOnFormChanged: onFormChanged
			}, null, 8, ["report-error"])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
export { SigninView_default as default };
