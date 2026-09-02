import { $ as openBlock, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, X as onMounted, bt as withCtx, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { n as createFormEventBus, t as N8nFormInputs_default } from "./N8nFormInputs-CpuOJV4S.js";
import { n as createPasswordRules } from "./N8nFormInput-C49MRcy5.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { t as useUsersStore } from "./users.store-C9pohnYN.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { t as Modal_default } from "./Modal-DFINaSSV.js";
import { t as CHANGE_PASSWORD_MODAL_KEY } from "./auth.constants-FYmO-P3M.js";
//#endregion
//#region src/features/core/auth/components/ChangePasswordModal.vue
var ChangePasswordModal_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ChangePasswordModal",
	setup(__props) {
		const config = ref(null);
		const formBus = createFormEventBus();
		const modalBus = createEventBus();
		const password = ref("");
		const loading = ref(false);
		const i18n = useI18n();
		const { showMessage, showError } = useToast();
		const usersStore = useUsersStore();
		const passwordMinLength = useSettingsStore().userManagement.passwordMinLength ?? 8;
		const passwordsMatch = (value) => {
			if (typeof value !== "string") return false;
			if (value !== password.value) return { messageKey: "auth.changePassword.passwordsMustMatchError" };
			return false;
		};
		const onInput = (e) => {
			if (e.name === "password" && typeof e.value === "string") password.value = e.value;
		};
		const onSubmit = async (data) => {
			const values = data;
			try {
				loading.value = true;
				await usersStore.updateCurrentUserPassword({
					currentPassword: values.currentPassword,
					newPassword: values.password,
					mfaCode: values.mfaCode
				});
				showMessage({
					type: "success",
					title: i18n.baseText("auth.changePassword.passwordUpdated"),
					message: i18n.baseText("auth.changePassword.passwordUpdatedMessage")
				});
				modalBus.emit("close");
			} catch (error) {
				showError(error, i18n.baseText("auth.changePassword.error"));
			} finally {
				loading.value = false;
			}
		};
		const onSubmitClick = () => {
			formBus.emit("submit");
		};
		onMounted(() => {
			const inputs = {
				currentPassword: {
					name: "currentPassword",
					properties: {
						label: i18n.baseText("auth.changePassword.currentPassword"),
						type: "password",
						required: true,
						autocomplete: "current-password",
						capitalize: true,
						focusInitially: true
					}
				},
				mfaCode: {
					name: "mfaCode",
					properties: {
						label: i18n.baseText("auth.changePassword.mfaCode"),
						type: "text",
						required: true,
						capitalize: true
					}
				},
				newPassword: {
					name: "password",
					properties: {
						label: i18n.baseText("auth.newPassword"),
						type: "password",
						required: true,
						validationRules: [createPasswordRules(passwordMinLength)],
						infoText: i18n.baseText("auth.defaultPasswordRequirements", { interpolate: { minimum: passwordMinLength } }),
						autocomplete: "new-password",
						capitalize: true
					}
				},
				newPasswordAgain: {
					name: "password2",
					properties: {
						label: i18n.baseText("auth.changePassword.reenterNewPassword"),
						type: "password",
						required: true,
						validators: { TWO_PASSWORDS_MATCH: { validate: passwordsMatch } },
						validationRules: [{ name: "TWO_PASSWORDS_MATCH" }],
						autocomplete: "new-password",
						capitalize: true
					}
				}
			};
			const { currentUser } = usersStore;
			config.value = currentUser?.mfaEnabled ? [
				inputs.currentPassword,
				inputs.mfaCode,
				inputs.newPassword,
				inputs.newPasswordAgain
			] : [
				inputs.currentPassword,
				inputs.newPassword,
				inputs.newPasswordAgain
			];
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(CHANGE_PASSWORD_MODAL_KEY),
				title: unref(i18n).baseText("auth.changePassword"),
				center: true,
				width: "460px",
				"event-bus": unref(modalBus),
				onEnter: onSubmitClick
			}, {
				content: withCtx(() => [config.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
					key: 0,
					inputs: config.value,
					"event-bus": unref(formBus),
					"column-view": true,
					onUpdate: onInput,
					onSubmit
				}, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true)]),
				footer: withCtx(() => [createVNode(unref(N8nButton_default), {
					loading: loading.value,
					label: unref(i18n).baseText("auth.changePassword"),
					float: "right",
					"data-test-id": "change-password-button",
					onClick: onSubmitClick
				}, null, 8, ["loading", "label"])]),
				_: 1
			}, 8, [
				"name",
				"title",
				"event-bus"
			]);
		};
	}
});
//#endregion
export { ChangePasswordModal_default as default };
