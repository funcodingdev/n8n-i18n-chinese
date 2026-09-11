import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, h as withModifiers, j as createVNode, m as withKeys, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BjbSP7dI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-CK49ozr4.js";
import { t as N8nIcon_default } from "./N8nIcon-Cb6ivP-y.js";
import { t as Input_default } from "./Input-BuISsKX4.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { r as DialogHeader_default, t as DialogTitle_default } from "./DialogTitle-DyYrwuxL.js";
import { t as N8nTooltip_default } from "./N8nTooltip-CXMYm6HE.js";
import { t as useMessage } from "./useMessage-DCTUTqlg.js";
import { t as N8nCard_default } from "./N8nCard-Bo_W3SAE.js";
import { n as N8nOption_default, t as N8nSelect_default } from "./N8nSelect-Cx0g_EXp.js";
import { t as N8nCopyInput_default } from "./N8nCopyInput-CDxptlrj.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-DM0PkVAZ.js";
import { t as N8nInputLabel_default } from "./N8nInputLabel-X00cTB2P.js";
import { t as SettingsLayout_default } from "./SettingsLayout-Dd4iRVbL.js";
import { t as SettingsPageHeader_default } from "./SettingsPageHeader-DcHBQ01u.js";
import { n as SettingsRow_default, t as SettingsRowGroup_default } from "./SettingsRowGroup-DvSj6uZO.js";
import { t as SettingsRowConfigure_default } from "./SettingsRowConfigure-CtZiRJ_g.js";
import { t as SettingsSection_default } from "./SettingsSection-DovQkzoJ.js";
import { t as Dialog_default } from "./Dialog-Yirsm277.js";
import { t as DialogFooter_default } from "./DialogFooter-CwhrJT9T.js";
import { t as Loading_default } from "./Loading-NecomKfq.js";
import { er as request, t as useRootStore } from "./useRootStore-B4L7-X8D.js";
import { n as useToast } from "./useToast-DD-gkdwx.js";
import "./constants-DOw6b_w2.js";
import { n as useDocumentTitle } from "./useDocumentTitle-zNE0FpVb.js";
//#region src/features/integrations/gitConnections.ee/gitConnections.api.ts
var gitConnectionsApiRoot = "/git-connections";
var fetchGitConnections = async (context) => {
	return (await request({
		method: "GET",
		baseURL: context.baseUrl,
		endpoint: gitConnectionsApiRoot
	})).data;
};
var fetchGitConnection = async (context, id) => await request({
	method: "GET",
	baseURL: context.baseUrl,
	endpoint: `${gitConnectionsApiRoot}/${id}`
});
var createGitConnection = async (context, payload) => await request({
	method: "POST",
	baseURL: context.baseUrl,
	endpoint: gitConnectionsApiRoot,
	data: payload
});
var updateGitConnection = async (context, id, payload) => await request({
	method: "PUT",
	baseURL: context.baseUrl,
	endpoint: `${gitConnectionsApiRoot}/${id}`,
	data: payload
});
var deleteGitConnection = async (context, id) => {
	await request({
		method: "DELETE",
		baseURL: context.baseUrl,
		endpoint: `${gitConnectionsApiRoot}/${id}`
	});
};
//#endregion
//#region src/features/integrations/gitConnections.ee/gitConnections.utils.ts
function buildCreatePayload(form) {
	const payload = {
		name: form.name.trim(),
		repositoryUrl: form.repositoryUrl.trim(),
		connectionType: form.connectionType
	};
	const branchName = form.branchName.trim();
	if (branchName) payload.branchName = branchName;
	if (form.connectionType === "ssh") payload.keyGeneratorType = form.keyGeneratorType;
	else {
		payload.username = form.username.trim();
		payload.password = form.password;
	}
	return payload;
}
function buildUpdatePayload(form, current) {
	const payload = {};
	const name = form.name.trim();
	if (name !== current.name) payload.name = name;
	const repositoryUrl = form.repositoryUrl.trim();
	if (repositoryUrl !== current.repositoryUrl) payload.repositoryUrl = repositoryUrl;
	const branchName = form.branchName.trim();
	if (branchName && branchName !== current.branchName) payload.branchName = branchName;
	if (form.connectionType !== current.connectionType) payload.connectionType = form.connectionType;
	if (form.connectionType === "ssh") {
		if (current.connectionType !== "ssh") payload.keyGeneratorType = form.keyGeneratorType;
	} else if (form.username.trim() && form.password.trim()) {
		payload.username = form.username.trim();
		payload.password = form.password;
	}
	return payload;
}
//#endregion
//#region src/features/integrations/gitConnections.ee/components/GitConnectionDialog.vue?vue&type=script&setup=true&lang.ts
var CREDENTIALS_HINT_ID = "git-connection-credentials-hint";
var GitConnectionDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GitConnectionDialog",
	props: {
		open: { type: Boolean },
		connectionId: {}
	},
	emits: [
		"update:open",
		"saved",
		"delete"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const toast = useToast();
		const rootStore = useRootStore();
		const form = reactive({
			name: "",
			repositoryUrl: "",
			branchName: "",
			connectionType: "ssh",
			keyGeneratorType: "ed25519",
			username: "",
			password: ""
		});
		const step = ref(props.connectionId === void 0 ? "type" : "form");
		const current = ref(null);
		const isLoading = ref(false);
		const isSubmitting = ref(false);
		const newPublicKey = ref(null);
		const nameInput = useTemplateRef("nameInput");
		const typeCard = useTemplateRef("typeCard");
		const doneButton = useTemplateRef("doneButton");
		const isEdit = computed(() => props.connectionId !== void 0);
		const title = computed(() => {
			if (step.value === "type") return i18n.baseText("settings.gitConnections.dialog.title.selectType");
			if (step.value === "key") return i18n.baseText("settings.gitConnections.dialog.title.deployKey");
			return i18n.baseText(isEdit.value ? "settings.gitConnections.dialog.title.edit" : "settings.gitConnections.dialog.title.create");
		});
		const ariaDescription = computed(() => {
			if (step.value === "type") return i18n.baseText("settings.gitConnections.dialog.selectType.ariaDescription");
			if (step.value === "key") return i18n.baseText("settings.gitConnections.dialog.deployKey.ariaDescription");
			return i18n.baseText("settings.gitConnections.dialog.ariaDescription");
		});
		const credentialsRequired = computed(() => form.connectionType === "https" && current.value?.connectionType !== "https");
		const hasUsername = computed(() => form.username.trim().length > 0);
		const hasPassword = computed(() => form.password.trim().length > 0);
		const areCredentialsIncomplete = computed(() => form.connectionType === "https" && (credentialsRequired.value || !!form.username || !!form.password) && !(hasUsername.value && hasPassword.value));
		const isKeyTypeDisabled = computed(() => current.value?.connectionType === "ssh");
		const existingPublicKey = computed(() => form.connectionType === "ssh" && current.value?.connectionType === "ssh" ? current.value.publicKey : null);
		const hasChanges = computed(() => !current.value || Object.keys(buildUpdatePayload(form, current.value)).length > 0);
		const credentialsMessage = computed(() => i18n.baseText(credentialsRequired.value ? "settings.gitConnections.form.credentials.required" : "settings.gitConnections.form.credentials.pairOnly"));
		const saveDisabledReason = computed(() => {
			if (!form.name.trim() || !form.repositoryUrl.trim()) return i18n.baseText("settings.gitConnections.form.incomplete");
			if (areCredentialsIncomplete.value) return credentialsMessage.value;
			if (!hasChanges.value) return i18n.baseText("settings.gitConnections.form.noChanges");
		});
		const isSaveDisabled = computed(() => isSubmitting.value || isLoading.value || saveDisabledReason.value !== void 0);
		onMounted(async () => {
			if (props.connectionId === void 0) return;
			isLoading.value = true;
			try {
				const connection = await fetchGitConnection(rootStore.publicApiContext, props.connectionId);
				current.value = connection;
				form.name = connection.name;
				form.repositoryUrl = connection.repositoryUrl;
				form.branchName = connection.branchName ?? "";
				form.connectionType = connection.connectionType;
				form.keyGeneratorType = connection.keyGeneratorType ?? "ed25519";
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.gitConnections.toast.error.load"));
				close();
			} finally {
				isLoading.value = false;
				focusStep();
			}
		});
		function close() {
			emit("update:open", false);
		}
		function onOpenChange(value) {
			if (value || isSubmitting.value) return;
			close();
		}
		function focusStep() {
			nextTick(() => {
				if (step.value === "type") typeCard.value?.$el?.focus();
				else if (step.value === "key") doneButton.value?.$el?.focus();
				else nameInput.value?.focus();
			});
		}
		function onOpenAutoFocus(event) {
			event.preventDefault();
			focusStep();
		}
		function onCloseAutoFocus(event) {
			event.preventDefault();
		}
		function selectGit() {
			step.value = "form";
			focusStep();
		}
		async function submit() {
			if (isSaveDisabled.value) return;
			const existing = current.value;
			isSubmitting.value = true;
			try {
				let saved;
				if (existing) {
					const payload = buildUpdatePayload(form, existing);
					saved = await updateGitConnection(rootStore.publicApiContext, existing.id, payload);
				} else saved = await createGitConnection(rootStore.publicApiContext, buildCreatePayload(form));
				toast.showMessage({
					title: i18n.baseText(existing ? "settings.gitConnections.toast.updated" : "settings.gitConnections.toast.created"),
					type: "success"
				});
				emit("saved", saved.id);
				if (saved.publicKey && saved.publicKey !== existing?.publicKey) {
					newPublicKey.value = saved.publicKey;
					step.value = "key";
					focusStep();
				} else close();
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.gitConnections.toast.error.save"));
			} finally {
				isSubmitting.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"aria-description": ariaDescription.value,
				onOpenAutoFocus,
				onCloseAutoFocus,
				"onUpdate:open": onOpenChange
			}, {
				default: withCtx(() => [createVNode(unref(DialogHeader_default), null, {
					default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
						_: 1
					})]),
					_: 1
				}), step.value === "type" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.form),
					"data-test-id": "git-connection-type-step"
				}, [
					createVNode(unref(N8nText_default), {
						color: "text-base",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.gitConnections.dialog.selectType.description")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nCard_default), {
						ref_key: "typeCard",
						ref: typeCard,
						class: normalizeClass(_ctx.$style.typeCard),
						role: "button",
						tabindex: "0",
						"data-test-id": "git-connection-type-git",
						onClick: selectGit,
						onKeydown: [withKeys(selectGit, ["enter"]), withKeys(withModifiers(selectGit, ["prevent"]), ["space"])]
					}, {
						prepend: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "git-branch",
							color: "text-dark",
							size: 20
						})]),
						header: withCtx(() => [createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.gitConnections.connectorType.git")), 1)]),
							_: 1
						})]),
						append: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-right",
							color: "text-light"
						})]),
						default: withCtx(() => [createVNode(unref(N8nText_default), {
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.gitConnections.connectorType.git.description")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["class", "onKeydown"]),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							type: "button",
							variant: "outline",
							"data-test-id": "git-connection-type-cancel-button",
							onClick: close
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
							_: 1
						})]),
						_: 1
					})
				], 2)) : step.value === "key" && newPublicKey.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.form),
					"data-test-id": "git-connection-key-step"
				}, [createVNode(unref(N8nInputLabel_default), { label: unref(i18n).baseText("settings.gitConnections.publicKey.label") }, {
					default: withCtx(() => [createVNode(unref(N8nCopyInput_default), {
						value: newPublicKey.value,
						"copy-label": unref(i18n).baseText("settings.gitConnections.publicKey.copy"),
						"copied-label": unref(i18n).baseText("generic.copiedToClipboard")
					}, null, 8, [
						"value",
						"copy-label",
						"copied-label"
					]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.gitConnections.publicKey.hint")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, ["label"]), createVNode(unref(DialogFooter_default), null, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						ref_key: "doneButton",
						ref: doneButton,
						"data-test-id": "git-connection-done-button",
						onClick: close
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.gitConnections.publicKey.done")), 1)]),
						_: 1
					}, 512)]),
					_: 1
				})], 2)) : (openBlock(), createElementBlock("form", {
					key: 2,
					class: normalizeClass(_ctx.$style.form),
					"data-test-id": "git-connection-form-step",
					onSubmit: withModifiers(submit, ["prevent"])
				}, [
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "git-connection-name",
						label: unref(i18n).baseText("settings.gitConnections.form.name"),
						required: ""
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "git-connection-name",
							ref_key: "nameInput",
							ref: nameInput,
							modelValue: form.name,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.name = $event),
							disabled: isLoading.value,
							"data-test-id": "git-connection-name-input"
						}, null, 8, ["modelValue", "disabled"])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "git-connection-repository-url",
						label: unref(i18n).baseText("settings.gitConnections.form.repositoryUrl"),
						required: ""
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "git-connection-repository-url",
							modelValue: form.repositoryUrl,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.repositoryUrl = $event),
							disabled: isLoading.value,
							"data-test-id": "git-connection-repository-url-input"
						}, null, 8, ["modelValue", "disabled"])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "git-connection-branch",
						label: unref(i18n).baseText("settings.gitConnections.form.branchName")
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							id: "git-connection-branch",
							modelValue: form.branchName,
							"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.branchName = $event),
							disabled: isLoading.value,
							"data-test-id": "git-connection-branch-input"
						}, null, 8, ["modelValue", "disabled"])]),
						_: 1
					}, 8, ["label"]),
					createVNode(unref(N8nInputLabel_default), {
						"input-name": "git-connection-type",
						label: unref(i18n).baseText("settings.gitConnections.form.connectionType")
					}, {
						default: withCtx(() => [createVNode(unref(N8nSelect_default), {
							id: "git-connection-type",
							modelValue: form.connectionType,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.connectionType = $event),
							teleported: false,
							disabled: isLoading.value,
							"data-test-id": "git-connection-type-select"
						}, {
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "ssh",
								label: "SSH"
							}), createVNode(unref(N8nOption_default), {
								value: "https",
								label: "HTTPS"
							})]),
							_: 1
						}, 8, ["modelValue", "disabled"])]),
						_: 1
					}, 8, ["label"]),
					form.connectionType === "ssh" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nInputLabel_default), {
						"input-name": "git-connection-key-type",
						label: unref(i18n).baseText("settings.gitConnections.form.keyType")
					}, {
						default: withCtx(() => [createVNode(unref(N8nSelect_default), {
							id: "git-connection-key-type",
							modelValue: form.keyGeneratorType,
							"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.keyGeneratorType = $event),
							teleported: false,
							disabled: isLoading.value || isKeyTypeDisabled.value,
							"data-test-id": "git-connection-key-type-select"
						}, {
							default: withCtx(() => [createVNode(unref(N8nOption_default), {
								value: "ed25519",
								label: "ED25519"
							}), createVNode(unref(N8nOption_default), {
								value: "rsa",
								label: "RSA"
							})]),
							_: 1
						}, 8, ["modelValue", "disabled"])]),
						_: 1
					}, 8, ["label"]), existingPublicKey.value ? (openBlock(), createBlock(unref(N8nInputLabel_default), {
						key: 0,
						label: unref(i18n).baseText("settings.gitConnections.publicKey.label")
					}, {
						default: withCtx(() => [createVNode(unref(N8nCopyInput_default), {
							value: existingPublicKey.value,
							"copy-label": unref(i18n).baseText("settings.gitConnections.publicKey.copy"),
							"copied-label": unref(i18n).baseText("generic.copiedToClipboard")
						}, null, 8, [
							"value",
							"copy-label",
							"copied-label"
						])]),
						_: 1
					}, 8, ["label"])) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						createVNode(unref(N8nInputLabel_default), {
							"input-name": "git-connection-username",
							label: unref(i18n).baseText("settings.gitConnections.form.username"),
							required: areCredentialsIncomplete.value
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								id: "git-connection-username",
								modelValue: form.username,
								"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.username = $event),
								autocomplete: "off",
								disabled: isLoading.value,
								"aria-required": credentialsRequired.value,
								"aria-invalid": areCredentialsIncomplete.value,
								"aria-describedby": areCredentialsIncomplete.value ? CREDENTIALS_HINT_ID : void 0,
								placeholder: areCredentialsIncomplete.value ? "" : unref(i18n).baseText("settings.gitConnections.form.credentials.keepPlaceholder"),
								"data-test-id": "git-connection-username-input"
							}, null, 8, [
								"modelValue",
								"disabled",
								"aria-required",
								"aria-invalid",
								"aria-describedby",
								"placeholder"
							])]),
							_: 1
						}, 8, ["label", "required"]),
						createVNode(unref(N8nInputLabel_default), {
							"input-name": "git-connection-password",
							label: unref(i18n).baseText("settings.gitConnections.form.password"),
							required: areCredentialsIncomplete.value
						}, {
							default: withCtx(() => [createVNode(unref(Input_default), {
								id: "git-connection-password",
								modelValue: form.password,
								"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.password = $event),
								type: "password",
								autocomplete: "new-password",
								disabled: isLoading.value,
								"aria-required": credentialsRequired.value,
								"aria-invalid": areCredentialsIncomplete.value,
								"aria-describedby": areCredentialsIncomplete.value ? CREDENTIALS_HINT_ID : void 0,
								placeholder: areCredentialsIncomplete.value ? "" : unref(i18n).baseText("settings.gitConnections.form.credentials.keepPlaceholder"),
								"data-test-id": "git-connection-password-input"
							}, null, 8, [
								"modelValue",
								"disabled",
								"aria-required",
								"aria-invalid",
								"aria-describedby",
								"placeholder"
							])]),
							_: 1
						}, 8, ["label", "required"]),
						areCredentialsIncomplete.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							id: CREDENTIALS_HINT_ID,
							size: "small",
							color: "danger"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(credentialsMessage.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					], 64)),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [
							__props.connectionId ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								type: "button",
								variant: "destructive",
								class: normalizeClass(_ctx.$style.deleteButton),
								disabled: isSubmitting.value || isLoading.value,
								"data-test-id": "git-connection-delete-button",
								onClick: _cache[7] || (_cache[7] = ($event) => emit("delete", __props.connectionId))
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.delete")), 1)]),
								_: 1
							}, 8, ["class", "disabled"])) : createCommentVNode("", true),
							createVNode(unref(N8nButton_default), {
								type: "button",
								variant: "outline",
								disabled: isSubmitting.value,
								"data-test-id": "git-connection-cancel-button",
								onClick: close
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
								_: 1
							}, 8, ["disabled"]),
							createVNode(unref(N8nTooltip_default), {
								disabled: !saveDisabledReason.value,
								content: saveDisabledReason.value
							}, {
								default: withCtx(() => [createVNode(unref(N8nButton_default), {
									type: "submit",
									loading: isSubmitting.value,
									disabled: isSaveDisabled.value,
									"data-test-id": "git-connection-save-button"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.save")), 1)]),
									_: 1
								}, 8, ["loading", "disabled"])]),
								_: 1
							}, 8, ["disabled", "content"])
						]),
						_: 1
					})
				], 34))]),
				_: 1
			}, 8, ["open", "aria-description"]);
		};
	}
});
//#endregion
//#region src/features/integrations/gitConnections.ee/components/GitConnectionDialog.vue?vue&type=style&index=0&lang.module.scss
var typeCard = "_typeCard_1orve_388";
var form = "_form_1orve_401";
var deleteButton = "_deleteButton_1orve_408";
var shimmer$1 = "_shimmer_1orve_1";
var spin$1 = "_spin_1orve_1";
var opacityPulse$1 = "_opacityPulse_1orve_1";
var popoverIn$1 = "_popoverIn_1orve_1";
var fadeIn$1 = "_fadeIn_1orve_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1orve_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1orve_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1orve_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1orve_1";
var blurSwapIn$1 = "_blurSwapIn_1orve_1";
var blurSwapOut$1 = "_blurSwapOut_1orve_1";
var pulseGlow$1 = "_pulseGlow_1orve_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1orve_1";
var fade$1 = "_fade_1orve_1";
var fadeInUp$1 = "_fadeInUp_1orve_1";
var fadeInDown$1 = "_fadeInDown_1orve_1";
var fadeInLeft$1 = "_fadeInLeft_1orve_1";
var fadeInRight$1 = "_fadeInRight_1orve_1";
var fadeOut$1 = "_fadeOut_1orve_1";
var fadeOutDown$1 = "_fadeOutDown_1orve_1";
var fadeOutUp$1 = "_fadeOutUp_1orve_1";
var fadeOutLeft$1 = "_fadeOutLeft_1orve_1";
var fadeOutRight$1 = "_fadeOutRight_1orve_1";
var ping$1 = "_ping_1orve_1";
var blinkBackground$1 = "_blinkBackground_1orve_1";
var typingBlink$1 = "_typingBlink_1orve_1";
var GitConnectionDialog_vue_vue_type_style_index_0_lang_module_default = {
	typeCard,
	form,
	deleteButton,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1orve_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var GitConnectionDialog_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GitConnectionDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GitConnectionDialog_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/integrations/gitConnections.ee/views/GitConnectionsView.vue?vue&type=script&setup=true&lang.ts
var DOCS_URL = "#";
var GitConnectionsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GitConnectionsView",
	setup(__props) {
		const i18n = useI18n();
		const toast = useToast();
		const message = useMessage();
		const rootStore = useRootStore();
		const documentTitle = useDocumentTitle();
		const connections = ref([]);
		const isInitialLoading = ref(true);
		const isFetching = ref(false);
		const loadError = ref(false);
		const dialogOpen = ref(false);
		const editingId = ref(void 0);
		const connectionToFocus = ref(void 0);
		const addRow = useTemplateRef("addRow");
		const list = useTemplateRef("list");
		const page = useTemplateRef("page");
		const canAddConnection = computed(() => !isFetching.value && connections.value.length === 0);
		function describe(connection) {
			return `${i18n.baseText("settings.gitConnections.connectorRow.provider")} \u00b7 ${connection.branchName ? `${connection.repositoryUrl} @ ${connection.branchName}` : connection.repositoryUrl}`;
		}
		let hasLoaded = false;
		let pendingLoad = Promise.resolve();
		async function load() {
			isInitialLoading.value = !hasLoaded;
			isFetching.value = true;
			loadError.value = false;
			try {
				connections.value = await fetchGitConnections(rootStore.publicApiContext);
			} catch (error) {
				loadError.value = true;
				connections.value = [];
				toast.showError(error, i18n.baseText("settings.gitConnections.error.title"));
			} finally {
				isInitialLoading.value = false;
				isFetching.value = false;
				hasLoaded = true;
			}
		}
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.gitConnections.title"));
			await load();
		});
		function openCreateDialog() {
			if (!canAddConnection.value) return;
			editingId.value = void 0;
			connectionToFocus.value = void 0;
			dialogOpen.value = true;
		}
		function openEditDialog(id) {
			editingId.value = id;
			connectionToFocus.value = id;
			dialogOpen.value = true;
		}
		function onSaved(id) {
			connectionToFocus.value = id;
			pendingLoad = load();
		}
		async function focusConnection(id) {
			await nextTick();
			((id ? list.value?.querySelector(`[data-connection-id="${id}"]`) : void 0) ?? addRow.value?.$el ?? page.value?.$el)?.focus();
		}
		async function onDialogOpenChange(open) {
			dialogOpen.value = open;
			if (open) return;
			await pendingLoad;
			await focusConnection(connectionToFocus.value);
		}
		async function onDelete(id) {
			if (await message.confirm(i18n.baseText("settings.gitConnections.delete.confirm.message"), i18n.baseText("settings.gitConnections.delete.confirm.title"), {
				confirmButtonText: i18n.baseText("settings.gitConnections.delete.confirm.button"),
				customClass: "el-message-box--destructive",
				showClose: true
			}) !== "confirm") return;
			try {
				await deleteGitConnection(rootStore.publicApiContext, id);
				toast.showMessage({
					title: i18n.baseText("settings.gitConnections.toast.deleted"),
					type: "success"
				});
				connectionToFocus.value = void 0;
				dialogOpen.value = false;
				await load();
				await focusConnection(void 0);
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.gitConnections.toast.error.delete"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				ref_key: "page",
				ref: page,
				class: normalizeClass(_ctx.$style.layout),
				tabindex: "-1"
			}, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.gitConnections.title"),
						description: unref(i18n).baseText("settings.gitConnections.description"),
						"docs-url": DOCS_URL
					}, null, 8, ["title", "description"]),
					createVNode(unref(SettingsSection_default), {
						title: unref(i18n).baseText("settings.gitConnections.connectors.title"),
						description: unref(i18n).baseText("settings.gitConnections.connectors.description")
					}, {
						default: withCtx(() => [isInitialLoading.value ? (openBlock(), createBlock(unref(Loading_default), {
							key: 0,
							rows: 2,
							"shrink-last": false
						})) : loadError.value ? (openBlock(), createBlock(unref(N8nEmptyState_default), {
							key: 1,
							heading: unref(i18n).baseText("settings.gitConnections.error.title"),
							description: unref(i18n).baseText("settings.gitConnections.error.description"),
							"button-text": unref(i18n).baseText("generic.retry"),
							"data-test-id": "git-connections-load-error",
							"onClick:button": load
						}, null, 8, [
							"heading",
							"description",
							"button-text"
						])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", {
							ref_key: "list",
							ref: list,
							class: normalizeClass(_ctx.$style.list)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(connections.value, (connection) => {
							return openBlock(), createBlock(unref(SettingsRowGroup_default), { key: connection.id }, {
								default: withCtx(() => [createVNode(unref(SettingsRow_default), {
									clickable: "",
									title: connection.name,
									description: describe(connection),
									"data-connection-id": connection.id,
									"data-test-id": "git-connection-row",
									onClick: ($event) => openEditDialog(connection.id)
								}, {
									visual: withCtx(() => [createVNode(unref(N8nIcon_default), {
										icon: "git-branch",
										color: "text-dark",
										size: 20
									})]),
									action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: unref(i18n).baseText("settings.gitConnections.scope.instance") }, null, 8, ["value"])]),
									_: 1
								}, 8, [
									"title",
									"description",
									"data-connection-id",
									"onClick"
								])]),
								_: 2
							}, 1024);
						}), 128))], 2), canAddConnection.value ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 0 }, {
							default: withCtx(() => [createVNode(unref(SettingsRow_default), {
								ref_key: "addRow",
								ref: addRow,
								clickable: "",
								title: unref(i18n).baseText("settings.gitConnections.addConnector"),
								description: unref(i18n).baseText("settings.gitConnections.addConnector.description"),
								"data-test-id": "git-connections-add",
								onClick: openCreateDialog
							}, {
								visual: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: "plus",
									color: "text-dark",
									size: 20
								})]),
								action: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: "chevron-right",
									color: "text-light",
									size: "small"
								})]),
								_: 1
							}, 8, ["title", "description"])]),
							_: 1
						})) : createCommentVNode("", true)], 64))]),
						_: 1
					}, 8, ["title", "description"]),
					dialogOpen.value ? (openBlock(), createBlock(GitConnectionDialog_default, {
						key: editingId.value ?? "new",
						open: dialogOpen.value,
						"connection-id": editingId.value,
						"onUpdate:open": onDialogOpenChange,
						onSaved,
						onDelete
					}, null, 8, ["open", "connection-id"])) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/integrations/gitConnections.ee/views/GitConnectionsView.vue?vue&type=style&index=0&lang.module.scss
var layout = "_layout_1u8pg_388";
var list = "_list_1u8pg_395";
var shimmer = "_shimmer_1u8pg_1";
var spin = "_spin_1u8pg_1";
var opacityPulse = "_opacityPulse_1u8pg_1";
var popoverIn = "_popoverIn_1u8pg_1";
var fadeIn = "_fadeIn_1u8pg_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1u8pg_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1u8pg_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1u8pg_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1u8pg_1";
var blurSwapIn = "_blurSwapIn_1u8pg_1";
var blurSwapOut = "_blurSwapOut_1u8pg_1";
var pulseGlow = "_pulseGlow_1u8pg_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1u8pg_1";
var fade = "_fade_1u8pg_1";
var fadeInUp = "_fadeInUp_1u8pg_1";
var fadeInDown = "_fadeInDown_1u8pg_1";
var fadeInLeft = "_fadeInLeft_1u8pg_1";
var fadeInRight = "_fadeInRight_1u8pg_1";
var fadeOut = "_fadeOut_1u8pg_1";
var fadeOutDown = "_fadeOutDown_1u8pg_1";
var fadeOutUp = "_fadeOutUp_1u8pg_1";
var fadeOutLeft = "_fadeOutLeft_1u8pg_1";
var fadeOutRight = "_fadeOutRight_1u8pg_1";
var ping = "_ping_1u8pg_1";
var blinkBackground = "_blinkBackground_1u8pg_1";
var typingBlink = "_typingBlink_1u8pg_1";
var GitConnectionsView_vue_vue_type_style_index_0_lang_module_default = {
	layout,
	list,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1u8pg_1",
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
var GitConnectionsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GitConnectionsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GitConnectionsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { GitConnectionsView_default as default };
