import { $ as openBlock, It as ref, N as defineComponent, Pt as reactive, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-aHDyP5Mf.js";
import { Ot as createPasswordRules } from "./src-BPgPnOl4.js";
import { _ as useRouter } from "./htmlUtils-BREJ7rCe.js";
import { t as useSettingsStore } from "./settings.store-BDHsgqqf.js";
import "./settings.store-DzBUtpSv.js";
import { t as useUsersStore } from "./users.store-Cc4RE3YH.js";
import { t as VIEWS } from "./views-DcCKen6o.js";
import { n as useToast } from "./useToast-BoVkvj1B.js";
import "./constants-Bgf3Pq_r.js";
import { t as AuthView_default } from "./AuthView-m4n4cvfe.js";
//#endregion
//#region src/features/core/auth/views/SetupView.vue
var SetupView_default = /* @__PURE__ */ defineComponent({
	__name: "SetupView",
	setup(__props) {
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const toast = useToast();
		const locale = useI18n();
		const router = useRouter();
		const passwordMinLength = settingsStore.userManagement.passwordMinLength ?? 8;
		const loading = ref(false);
		const formConfig = reactive({
			title: locale.baseText("auth.setup.setupOwner"),
			buttonText: locale.baseText("auth.setup.next"),
			inputs: [
				{
					name: "email",
					properties: {
						label: locale.baseText("auth.email"),
						type: "email",
						required: true,
						validationRules: [{ name: "VALID_EMAIL" }],
						autocomplete: "email",
						capitalize: true
					}
				},
				{
					name: "firstName",
					properties: {
						label: locale.baseText("auth.firstName"),
						maxlength: 32,
						required: true,
						autocomplete: "given-name",
						capitalize: true
					}
				},
				{
					name: "lastName",
					properties: {
						label: locale.baseText("auth.lastName"),
						maxlength: 32,
						required: true,
						autocomplete: "family-name",
						capitalize: true
					}
				},
				{
					name: "password",
					properties: {
						label: locale.baseText("auth.password"),
						type: "password",
						required: true,
						validationRules: [createPasswordRules(passwordMinLength)],
						infoText: locale.baseText("auth.defaultPasswordRequirements", { interpolate: { minimum: passwordMinLength } }),
						autocomplete: "new-password",
						capitalize: true
					}
				},
				{
					name: "agree",
					properties: {
						label: locale.baseText("auth.agreement.label"),
						type: "checkbox"
					}
				}
			]
		});
		const onSubmit = async (values) => {
			try {
				const forceRedirectedHere = settingsStore.showSetupPage;
				loading.value = true;
				await usersStore.createOwner(values);
				if (values.agree === true) try {
					await usersStore.submitContactEmail(values.email.toString(), values.agree);
				} catch {}
				if (forceRedirectedHere) await router.push("/");
				else await router.push({ name: VIEWS.USERS_SETTINGS });
			} catch (error) {
				toast.showError(error, locale.baseText("auth.setup.settingUpOwnerError"));
			}
			loading.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AuthView_default, {
				form: formConfig,
				"form-loading": loading.value,
				"data-test-id": "setup-form",
				onSubmit
			}, null, 8, ["form", "form-loading"]);
		};
	}
});
//#endregion
export { SetupView_default as default };
