import { C as computed, It as ref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-BeTg2SLq.js";
import "./src-Dq1PgKJG.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-C0ZrWWly.js";
import "./icon-BZmmo3dP.js";
import "./empty-C2SrrehM.js";
import { Ho as useSettingsStore, nr as useUsersStore } from "./useTelemetry-CoXPwd1O.js";
import { t as useToast } from "./useToast-CiTWVxuS.js";
import "./sanitize-html-B9msDoKc.js";
import "./CalendarDate-DxkU3CHY.js";
import "./path-browserify-BnEsEkpq.js";
import "./constants-KkYd5iUv.js";
import "./merge-Ad7Lg676.js";
import "./_baseOrderBy-CqDCB2Jl.js";
import "./dateformat-CMLc6OKJ.js";
import "./useDebounce-C0tYxqZn.js";
import "./useExternalHooks-D7tUrTse.js";
import "./useStyles-DhM0cpS7.js";
import "./sso.store-CI88wpN9.js";
import { t as AuthView_default } from "./AuthView-CPwdz0p_.js";
var ForgotMyPasswordView_default = /* @__PURE__ */ defineComponent({
	__name: "ForgotMyPasswordView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		const locale = useI18n();
		const loading = ref(false);
		const formConfig = computed(() => {
			const EMAIL_INPUTS = [{
				name: "email",
				properties: {
					label: locale.baseText("auth.email"),
					type: "email",
					required: true,
					validationRules: [{ name: "VALID_EMAIL" }],
					autocomplete: "email",
					capitalize: true,
					focusInitially: true
				}
			}];
			const NO_SMTP_INPUTS = [{
				name: "no-smtp-warning",
				properties: {
					label: locale.baseText("forgotPassword.noSMTPToSendEmailWarning"),
					type: "info"
				}
			}];
			const DEFAULT_FORM_CONFIG = {
				title: locale.baseText("forgotPassword.recoverPassword"),
				redirectText: locale.baseText("forgotPassword.returnToSignIn"),
				redirectLink: "/signin"
			};
			if (settingsStore.isSmtpSetup) return {
				...DEFAULT_FORM_CONFIG,
				buttonText: locale.baseText("forgotPassword.getRecoveryLink"),
				inputs: EMAIL_INPUTS
			};
			return {
				...DEFAULT_FORM_CONFIG,
				inputs: NO_SMTP_INPUTS
			};
		});
		const isFormWithEmail = (values) => {
			return "email" in values;
		};
		const onSubmit = async (values) => {
			if (!isFormWithEmail(values)) return;
			try {
				loading.value = true;
				await usersStore.sendForgotPasswordEmail(values);
				toast.showMessage({
					type: "success",
					title: locale.baseText("forgotPassword.recoveryEmailSent"),
					message: locale.baseText("forgotPassword.emailSentIfExists", { interpolate: { email: values.email } })
				});
			} catch (error) {
				let message = locale.baseText("forgotPassword.smtpErrorContactAdministrator");
				if (error.httpStatusCode) {
					const { httpStatusCode: status } = error;
					if (status === 429) message = locale.baseText("forgotPassword.tooManyRequests");
					else if (error.httpStatusCode === 422) message = locale.baseText(error.message);
					toast.showMessage({
						type: "error",
						title: locale.baseText("forgotPassword.sendingEmailError"),
						message
					});
				}
			}
			loading.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AuthView_default, {
				form: formConfig.value,
				"form-loading": loading.value,
				onSubmit
			}, null, 8, ["form", "form-loading"]);
		};
	}
});
export { ForgotMyPasswordView_default as default };
