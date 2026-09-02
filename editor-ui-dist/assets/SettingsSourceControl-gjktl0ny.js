import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, Pt as reactive, S as computed, T as createCommentVNode, U as mergeProps, X as onMounted, bt as withCtx, gt as watch, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as Checkbox_default } from "./Checkbox-BwRbb-sX.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as ElColorPicker } from "./color-picker-BATD1YTp.js";
import { t as useLoadingService } from "./useLoadingService-BVqb-OPD.js";
import { n as uid, t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as N8nFormInput_default } from "./N8nFormInput-C49MRcy5.js";
import { yn as useSourceControlStore } from "./workflows.store-QD0eo9S6.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-Dx1UCP52.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import "./constants-DxozP3cY.js";
import { n as useDocumentTitle } from "./useDocumentTitle-DIC12kgr.js";
import { t as CopyInput_default } from "./CopyInput-bsL2JkqQ.js";
//#region ../@n8n/design-system/src/components/N8nColorPicker/ColorPicker.vue?vue&type=script&setup=true&lang.ts
var ColorPicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nColorPicker",
	__name: "ColorPicker",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		size: { default: "large" },
		showAlpha: {
			type: Boolean,
			default: false
		},
		colorFormat: { default: "hex" },
		popperClass: { default: "" },
		predefine: { default: void 0 },
		modelValue: { default: void 0 },
		showInput: {
			type: Boolean,
			default: true
		},
		name: { default: uid("color-picker") }
	},
	emits: [
		"update:modelValue",
		"change",
		"active-change"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const color = ref(props.modelValue);
		const colorPickerProps = computed(() => {
			const { showInput, modelValue, size, ...rest } = props;
			return rest;
		});
		const emit = __emit;
		const onChange = (value) => {
			emit("change", value);
		};
		const onInput = (value) => {
			color.value = value;
		};
		const onActiveChange = (value) => {
			emit("active-change", value);
		};
		const onColorSelect = (value) => {
			emit("update:modelValue", value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", { class: normalizeClass(["n8n-color-picker", _ctx.$style.component]) }, [createVNode(unref(ElColorPicker), mergeProps(colorPickerProps.value, {
				"model-value": __props.modelValue,
				size: props.size,
				onChange,
				onActiveChange,
				"onUpdate:modelValue": onColorSelect
			}), null, 16, ["model-value", "size"]), __props.showInput ? (openBlock(), createBlock(unref(Input_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.input),
				disabled: props.disabled,
				size: props.size,
				"model-value": color.value,
				name: __props.name,
				type: "text",
				"onUpdate:modelValue": onInput
			}, null, 8, [
				"class",
				"disabled",
				"size",
				"model-value",
				"name"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nColorPicker/ColorPicker.vue?vue&type=style&index=0&lang.module.scss
var component = "_component_1ad0g_388";
var input = "_input_1ad0g_393";
var shimmer$1 = "_shimmer_1ad0g_1";
var spin$1 = "_spin_1ad0g_1";
var opacityPulse$1 = "_opacityPulse_1ad0g_1";
var popoverIn$1 = "_popoverIn_1ad0g_1";
var fadeIn$1 = "_fadeIn_1ad0g_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1ad0g_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1ad0g_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1ad0g_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1ad0g_1";
var blurSwapIn$1 = "_blurSwapIn_1ad0g_1";
var blurSwapOut$1 = "_blurSwapOut_1ad0g_1";
var pulseGlow$1 = "_pulseGlow_1ad0g_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1ad0g_1";
var fade$1 = "_fade_1ad0g_1";
var fadeInUp$1 = "_fadeInUp_1ad0g_1";
var fadeInDown$1 = "_fadeInDown_1ad0g_1";
var fadeInLeft$1 = "_fadeInLeft_1ad0g_1";
var fadeInRight$1 = "_fadeInRight_1ad0g_1";
var fadeOut$1 = "_fadeOut_1ad0g_1";
var fadeOutDown$1 = "_fadeOutDown_1ad0g_1";
var fadeOutUp$1 = "_fadeOutUp_1ad0g_1";
var fadeOutLeft$1 = "_fadeOutLeft_1ad0g_1";
var fadeOutRight$1 = "_fadeOutRight_1ad0g_1";
var ping$1 = "_ping_1ad0g_1";
var blinkBackground$1 = "_blinkBackground_1ad0g_1";
var typingBlink$1 = "_typingBlink_1ad0g_1";
var ColorPicker_vue_vue_type_style_index_0_lang_module_default = {
	component,
	input,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1ad0g_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nColorPicker/index.ts
var N8nColorPicker_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ColorPicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ColorPicker_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-45a4ea58"]]);
//#endregion
//#region src/features/integrations/sourceControl.ee/views/SettingsSourceControl.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	"data-test-id": "source-control-content-licensed"
};
var _hoisted_2 = ["href"];
var _hoisted_3 = { for: "connectionType" };
var _hoisted_4 = { for: "repoUrl" };
var _hoisted_5 = { for: "httpsUsername" };
var _hoisted_6 = { for: "httpsPassword" };
var _hoisted_7 = ["href"];
var _hoisted_8 = {
	key: 5,
	"data-test-id": "source-control-connected-content"
};
var _hoisted_9 = ["href"];
var SettingsSourceControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSourceControl",
	setup(__props) {
		const locale = useI18n();
		const sourceControlStore = useSourceControlStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const toast = useToast();
		const message = useMessage();
		const documentTitle = useDocumentTitle();
		const loadingService = useLoadingService();
		const isInitializing = ref(true);
		const isConnected = ref(false);
		const connectionType = ref("ssh");
		const httpsUsername = ref("");
		const httpsPassword = ref("");
		const branchNameOptions = computed(() => sourceControlStore.preferences.branches.map((branch) => ({
			value: branch,
			label: branch
		})));
		const connectionTypeOptions = [{
			value: "ssh",
			label: "SSH"
		}, {
			value: "https",
			label: "HTTPS"
		}];
		const onConnect = async () => {
			loadingService.startLoading();
			loadingService.setLoadingText(locale.baseText("settings.sourceControl.loading.connecting"));
			try {
				const connectionData = {
					repositoryUrl: sourceControlStore.preferences.repositoryUrl,
					connectionType: connectionType.value
				};
				if (connectionType.value === "https") {
					connectionData.httpsUsername = httpsUsername.value;
					connectionData.httpsPassword = httpsPassword.value;
				}
				await sourceControlStore.savePreferences(connectionData);
				await sourceControlStore.getBranches();
				isConnected.value = true;
				toast.showMessage({
					title: locale.baseText("settings.sourceControl.toast.connected.title"),
					message: locale.baseText("settings.sourceControl.toast.connected.message"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.toast.connected.error"));
			}
			loadingService.stopLoading();
		};
		const onDisconnect = async () => {
			try {
				if (await message.confirm(locale.baseText("settings.sourceControl.modals.disconnect.message"), locale.baseText("settings.sourceControl.modals.disconnect.title"), {
					confirmButtonText: locale.baseText("settings.sourceControl.modals.disconnect.confirm"),
					cancelButtonText: locale.baseText("settings.sourceControl.modals.disconnect.cancel")
				}) === "confirm") {
					loadingService.startLoading();
					await sourceControlStore.disconnect(true);
					isConnected.value = false;
					httpsUsername.value = "";
					httpsPassword.value = "";
					toast.showMessage({
						title: locale.baseText("settings.sourceControl.toast.disconnected.title"),
						message: locale.baseText("settings.sourceControl.toast.disconnected.message"),
						type: "success"
					});
				}
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.toast.disconnected.error"));
			}
			loadingService.stopLoading();
		};
		const onSave = async () => {
			loadingService.startLoading();
			try {
				await sourceControlStore.updatePreferences({
					branchName: sourceControlStore.preferences.branchName,
					branchReadOnly: sourceControlStore.preferences.branchReadOnly,
					branchColor: sourceControlStore.preferences.branchColor
				});
				toast.showMessage({
					title: locale.baseText("settings.sourceControl.saved.title"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.saved.error"));
			}
			loadingService.stopLoading();
		};
		const onSelect = (b) => {
			if (b === sourceControlStore.preferences.branchName) return;
			sourceControlStore.preferences.branchName = b;
		};
		const goToUpgrade = () => {
			pageRedirectionHelper.goToUpgrade("source-control", "upgrade-source-control");
		};
		const initialize = async () => {
			await sourceControlStore.getPreferences();
			if (sourceControlStore.preferences.connected) {
				isConnected.value = true;
				connectionType.value = sourceControlStore.preferences.connectionType || "ssh";
				sourceControlStore.getBranches();
			}
		};
		onMounted(async () => {
			documentTitle.set(locale.baseText("settings.sourceControl.title"));
			if (!sourceControlStore.isEnterpriseSourceControlEnabled) {
				isInitializing.value = false;
				return;
			}
			try {
				await initialize();
			} finally {
				isInitializing.value = false;
			}
		});
		const formValidationStatus = reactive({
			repoUrl: false,
			keyGeneratorType: false,
			httpsUsername: false,
			httpsPassword: false
		});
		function onValidate(key, value) {
			formValidationStatus[key] = value;
		}
		const repoUrlValidationRules = computed(() => {
			const baseRules = [{ name: "REQUIRED" }];
			if (connectionType.value === "ssh") baseRules.push({
				name: "MATCH_REGEX",
				config: {
					regex: /^(?:git@|ssh:\/\/git@|[\w.-]+@)(?:[\w.-]+|\[[0-9a-fA-F:]+])(?::\d+)?[:\/][\w\-~.]+(?:\/[\w\-~.]+)*(?:\.git)?(?:\/.*)?$/,
					message: locale.baseText("settings.sourceControl.repoUrlInvalid")
				}
			});
			else baseRules.push({
				name: "MATCH_REGEX",
				config: {
					regex: /^https:\/\/.+$/,
					message: locale.baseText("settings.sourceControl.enterValidHttpsUrl")
				}
			});
			return baseRules;
		});
		const keyGeneratorTypeValidationRules = [{ name: "REQUIRED" }];
		const httpsCredentialValidationRules = [{ name: "REQUIRED" }];
		const validForConnection = computed(() => {
			if (connectionType.value === "ssh") return formValidationStatus.repoUrl;
			else return formValidationStatus.repoUrl && formValidationStatus.httpsUsername && formValidationStatus.httpsPassword;
		});
		const branchNameValidationRules = [{ name: "REQUIRED" }];
		async function refreshSshKey() {
			try {
				if (await message.confirm(locale.baseText("settings.sourceControl.modals.refreshSshKey.message"), locale.baseText("settings.sourceControl.modals.refreshSshKey.title"), {
					confirmButtonText: locale.baseText("settings.sourceControl.modals.refreshSshKey.confirm"),
					cancelButtonText: locale.baseText("settings.sourceControl.modals.refreshSshKey.cancel")
				}) === "confirm") {
					await sourceControlStore.generateKeyPair(sourceControlStore.preferences.keyGeneratorType);
					toast.showMessage({
						title: locale.baseText("settings.sourceControl.refreshSshKey.successful.title"),
						type: "success"
					});
				}
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.refreshSshKey.error.title"));
			}
		}
		const refreshBranches = async () => {
			try {
				await sourceControlStore.getBranches();
				toast.showMessage({
					title: locale.baseText("settings.sourceControl.refreshBranches.success"),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, locale.baseText("settings.sourceControl.refreshBranches.error"));
			}
		};
		const onSelectSshKeyType = (value) => {
			const sshKeyType = value;
			if (sshKeyType === sourceControlStore.preferences.keyGeneratorType) return;
			sourceControlStore.preferences.keyGeneratorType = sshKeyType;
		};
		watch(connectionType, () => {
			formValidationStatus.repoUrl = false;
			formValidationStatus.httpsUsername = false;
			formValidationStatus.httpsPassword = false;
			if (!isConnected.value) sourceControlStore.preferences.repositoryUrl = "";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nHeading_default), {
				size: "2xlarge",
				tag: "h1"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.title")), 1)]),
				_: 1
			}), unref(sourceControlStore).isEnterpriseSourceControlEnabled ? (openBlock(), createElementBlock("div", _hoisted_1, [
				createVNode(unref(N8nCallout_default), {
					theme: "secondary",
					icon: "info",
					class: "mt-2xl mb-l"
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "settings.sourceControl.description",
						tag: "span",
						scope: "global"
					}, {
						link: withCtx(() => [createBaseVNode("a", {
							href: unref(locale).baseText("settings.sourceControl.docs.url"),
							target: "_blank"
						}, toDisplayString(unref(locale).baseText("settings.sourceControl.description.link")), 9, _hoisted_2)]),
						_: 1
					})]),
					_: 1
				}),
				createVNode(unref(N8nHeading_default), {
					size: "xlarge",
					tag: "h2",
					class: "mb-s"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.gitConfig")), 1)]),
					_: 1
				}),
				!isConnected.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.group)
				}, [createBaseVNode("label", _hoisted_3, toDisplayString(unref(locale).baseText("settings.sourceControl.connectionType")), 1), createVNode(unref(N8nFormInput_default), {
					id: "connectionType",
					modelValue: connectionType.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => connectionType.value = $event),
					label: "",
					type: "select",
					name: "connectionType",
					options: connectionTypeOptions,
					"data-test-id": "source-control-connection-type-select"
				}, null, 8, ["modelValue"])], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
					createBaseVNode("label", _hoisted_4, toDisplayString(connectionType.value === "ssh" ? unref(locale).baseText("settings.sourceControl.sshRepoUrl") : unref(locale).baseText("settings.sourceControl.httpsRepoUrl")), 1),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.groupFlex) }, [createVNode(unref(N8nFormInput_default), {
						id: "repoUrl",
						modelValue: unref(sourceControlStore).preferences.repositoryUrl,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(sourceControlStore).preferences.repositoryUrl = $event),
						label: "",
						class: "ml-0",
						name: "repoUrl",
						"validate-on-blur": "",
						"validation-rules": repoUrlValidationRules.value,
						disabled: isInitializing.value || isConnected.value,
						placeholder: connectionType.value === "ssh" ? unref(locale).baseText("settings.sourceControl.sshRepoUrlPlaceholder") : unref(locale).baseText("settings.sourceControl.httpsRepoUrlPlaceholder"),
						onValidate: _cache[2] || (_cache[2] = (value) => onValidate("repoUrl", value))
					}, null, 8, [
						"modelValue",
						"validation-rules",
						"disabled",
						"placeholder"
					]), isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "subtle",
						class: normalizeClass(_ctx.$style.disconnectButton),
						size: "large",
						icon: "trash-2",
						"data-test-id": "source-control-disconnect-button",
						onClick: onDisconnect
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.disconnect")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)], 2),
					!isConnected.value && connectionType.value === "ssh" ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 0,
						type: "info",
						class: "mt-s"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.sshFormatNotice")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					!isConnected.value && connectionType.value === "https" ? (openBlock(), createBlock(unref(N8nNotice_default), {
						key: 1,
						type: "info",
						class: "mt-s"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.httpsFormatNotice")), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2),
				connectionType.value === "https" && !isConnected.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.group)
				}, [createBaseVNode("label", _hoisted_5, toDisplayString(unref(locale).baseText("settings.sourceControl.httpsUsername")), 1), createVNode(unref(N8nFormInput_default), {
					id: "httpsUsername",
					modelValue: httpsUsername.value,
					"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => httpsUsername.value = $event),
					label: "",
					name: "httpsUsername",
					type: "text",
					"validate-on-blur": "",
					"validation-rules": httpsCredentialValidationRules,
					placeholder: unref(locale).baseText("settings.sourceControl.httpsUsernamePlaceholder"),
					onValidate: _cache[4] || (_cache[4] = (value) => onValidate("httpsUsername", value))
				}, null, 8, ["modelValue", "placeholder"])], 2)) : createCommentVNode("", true),
				connectionType.value === "https" && !isConnected.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.group)
				}, [
					createBaseVNode("label", _hoisted_6, toDisplayString(unref(locale).baseText("settings.sourceControl.httpsPersonalAccessToken")), 1),
					createVNode(unref(N8nFormInput_default), {
						id: "httpsPassword",
						modelValue: httpsPassword.value,
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => httpsPassword.value = $event),
						label: "",
						name: "httpsPassword",
						type: "password",
						"validate-on-blur": "",
						"validation-rules": httpsCredentialValidationRules,
						placeholder: unref(locale).baseText("settings.sourceControl.httpsPersonalAccessTokenPlaceholder"),
						onValidate: _cache[6] || (_cache[6] = (value) => onValidate("httpsPassword", value))
					}, null, 8, ["modelValue", "placeholder"]),
					createVNode(unref(N8nNotice_default), {
						type: "warning",
						class: "mt-s"
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "settings.sourceControl.httpsWarningNotice",
							tag: "span",
							scope: "global"
						}, {
							strong: withCtx(() => [createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("settings.sourceControl.httpsWarningNotice.strong")), 1)]),
							repo: withCtx(() => [..._cache[11] || (_cache[11] = [createBaseVNode("code", null, "repo", -1)])]),
							publicRepo: withCtx(() => [..._cache[12] || (_cache[12] = [createBaseVNode("code", null, "public_repo", -1)])]),
							_: 1
						})]),
						_: 1
					})
				], 2)) : createCommentVNode("", true),
				connectionType.value === "ssh" && unref(sourceControlStore).preferences.publicKey ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.group)
				}, [
					createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.sshKey")), 1),
					createBaseVNode("div", { class: normalizeClass({ [_ctx.$style.sshInput]: !isConnected.value }) }, [
						!isConnected.value ? (openBlock(), createBlock(unref(N8nFormInput_default), {
							key: 0,
							id: "keyGeneratorType",
							class: normalizeClass(_ctx.$style.sshKeyTypeSelect),
							label: "",
							type: "select",
							name: "keyGeneratorType",
							"data-test-id": "source-control-ssh-key-type-select",
							"validate-on-blur": "",
							"validation-rules": keyGeneratorTypeValidationRules,
							options: unref(sourceControlStore).sshKeyTypesWithLabel,
							"model-value": unref(sourceControlStore).preferences.keyGeneratorType,
							disabled: isInitializing.value,
							onValidate: _cache[7] || (_cache[7] = (value) => onValidate("keyGeneratorType", value)),
							"onUpdate:modelValue": onSelectSshKeyType
						}, null, 8, [
							"class",
							"options",
							"model-value",
							"disabled"
						])) : createCommentVNode("", true),
						createVNode(CopyInput_default, {
							class: normalizeClass(_ctx.$style.copyInput),
							collapse: "",
							size: "medium",
							value: unref(sourceControlStore).preferences.publicKey,
							"copy-button-text": unref(locale).baseText("generic.clickToCopy")
						}, null, 8, [
							"class",
							"value",
							"copy-button-text"
						]),
						!isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "subtle",
							size: "large",
							icon: "refresh-cw",
							"data-test-id": "source-control-refresh-ssh-key-button",
							disabled: isInitializing.value,
							onClick: refreshSshKey
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.refreshSshKey")), 1)]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true)
					], 2),
					createVNode(unref(N8nNotice_default), {
						type: "info",
						class: "mt-s"
					}, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: "settings.sourceControl.sshKeyDescription",
							tag: "span",
							scope: "global"
						}, {
							link: withCtx(() => [createBaseVNode("a", {
								href: unref(locale).baseText("settings.sourceControl.docs.setup.ssh.url"),
								target: "_blank"
							}, toDisplayString(unref(locale).baseText("settings.sourceControl.sshKeyDescriptionLink")), 9, _hoisted_7)]),
							_: 1
						})]),
						_: 1
					})
				], 2)) : createCommentVNode("", true),
				!isConnected.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 4,
					size: "large",
					disabled: isInitializing.value || !validForConnection.value,
					class: normalizeClass(_ctx.$style.connect),
					"data-test-id": "source-control-connect-button",
					onClick: onConnect
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.connect")), 1)]),
					_: 1
				}, 8, ["disabled", "class"])) : createCommentVNode("", true),
				isConnected.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [
						_cache[13] || (_cache[13] = createBaseVNode("hr", null, null, -1)),
						createVNode(unref(N8nHeading_default), {
							size: "xlarge",
							tag: "h2",
							class: "mb-s"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.instanceSettings")), 1)]),
							_: 1
						}),
						createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.branches")), 1),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.branchSelection) }, [createVNode(unref(N8nFormInput_default), {
							id: "branchName",
							label: "",
							type: "select",
							name: "branchName",
							class: "mb-s",
							"data-test-id": "source-control-branch-select",
							"validate-on-blur": "",
							"validation-rules": branchNameValidationRules,
							options: branchNameOptions.value,
							"model-value": unref(sourceControlStore).preferences.branchName,
							onValidate: _cache[8] || (_cache[8] = (value) => onValidate("branchName", value)),
							"onUpdate:modelValue": onSelect
						}, null, 8, ["options", "model-value"]), createVNode(unref(N8nTooltip_default), { placement: "top" }, {
							content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("settings.sourceControl.refreshBranches.tooltip")), 1)]),
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								variant: "subtle",
								iconOnly: "",
								size: "xlarge",
								icon: "refresh-cw",
								"aria-label": unref(locale).baseText("generic.refresh"),
								"data-test-id": "source-control-refresh-branches-button",
								class: normalizeClass(_ctx.$style.refreshBranches),
								onClick: refreshBranches
							}, null, 8, ["aria-label", "class"])]),
							_: 1
						})], 2),
						createVNode(unref(Checkbox_default), {
							modelValue: unref(sourceControlStore).preferences.branchReadOnly,
							"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(sourceControlStore).preferences.branchReadOnly = $event),
							class: normalizeClass(_ctx.$style.readOnly),
							"data-test-id": "source-control-read-only-checkbox"
						}, {
							label: withCtx(() => [createVNode(unref(I18nT), {
								keypath: "settings.sourceControl.protected",
								tag: "span",
								scope: "global"
							}, {
								bold: withCtx(() => [createBaseVNode("strong", null, toDisplayString(unref(locale).baseText("settings.sourceControl.protected.bold")), 1)]),
								_: 1
							})]),
							_: 1
						}, 8, ["modelValue", "class"])
					], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.group) }, [createBaseVNode("label", null, toDisplayString(unref(locale).baseText("settings.sourceControl.color")), 1), createBaseVNode("div", null, [createVNode(unref(N8nColorPicker_default), {
						modelValue: unref(sourceControlStore).preferences.branchColor,
						"onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(sourceControlStore).preferences.branchColor = $event),
						size: "small"
					}, null, 8, ["modelValue"])])], 2),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.group, "pt-s"]) }, [createVNode(unref(N8nButton_default), {
						size: "large",
						disabled: !unref(sourceControlStore).preferences.branchName,
						"data-test-id": "source-control-save-settings-button",
						onClick: onSave
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.button.save")), 1)]),
						_: 1
					}, 8, ["disabled"])], 2)
				])) : createCommentVNode("", true)
			])) : (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 1,
				"data-test-id": "source-control-content-unlicensed",
				class: normalizeClass(_ctx.$style.actionBox),
				description: unref(locale).baseText("settings.sourceControl.actionBox.description"),
				"button-text": unref(locale).baseText("settings.sourceControl.actionBox.buttonText"),
				"onClick:button": goToUpgrade
			}, {
				heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.title")), 1)]),
				description: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.description")) + " ", 1), createBaseVNode("a", {
					href: unref(locale).baseText("settings.sourceControl.docs.url"),
					target: "_blank"
				}, toDisplayString(unref(locale).baseText("settings.sourceControl.actionBox.description.link")), 9, _hoisted_9)]),
				_: 1
			}, 8, [
				"class",
				"description",
				"button-text"
			]))]);
		};
	}
});
//#endregion
//#region src/features/integrations/sourceControl.ee/views/SettingsSourceControl.vue?vue&type=style&index=0&lang.module.scss
var group = "_group_df7k4_388";
var readOnly = "_readOnly_df7k4_409";
var groupFlex = "_groupFlex_df7k4_413";
var connect = "_connect_df7k4_427";
var disconnectButton = "_disconnectButton_df7k4_431";
var actionBox = "_actionBox_df7k4_436";
var sshInput = "_sshInput_df7k4_440";
var copyInput = "_copyInput_df7k4_451";
var sshKeyTypeSelect = "_sshKeyTypeSelect_df7k4_455";
var branchSelection = "_branchSelection_df7k4_463";
var refreshBranches = "_refreshBranches_df7k4_472";
var shimmer = "_shimmer_df7k4_1";
var spin = "_spin_df7k4_1";
var opacityPulse = "_opacityPulse_df7k4_1";
var popoverIn = "_popoverIn_df7k4_1";
var fadeIn = "_fadeIn_df7k4_1";
var collapsibleSlideDown = "_collapsibleSlideDown_df7k4_1";
var collapsibleSlideUp = "_collapsibleSlideUp_df7k4_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_df7k4_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_df7k4_1";
var blurSwapIn = "_blurSwapIn_df7k4_1";
var blurSwapOut = "_blurSwapOut_df7k4_1";
var pulseGlow = "_pulseGlow_df7k4_1";
var pulseGlowDelayed = "_pulseGlowDelayed_df7k4_1";
var fade = "_fade_df7k4_1";
var fadeInUp = "_fadeInUp_df7k4_1";
var fadeInDown = "_fadeInDown_df7k4_1";
var fadeInLeft = "_fadeInLeft_df7k4_1";
var fadeInRight = "_fadeInRight_df7k4_1";
var fadeOut = "_fadeOut_df7k4_1";
var fadeOutDown = "_fadeOutDown_df7k4_1";
var fadeOutUp = "_fadeOutUp_df7k4_1";
var fadeOutLeft = "_fadeOutLeft_df7k4_1";
var fadeOutRight = "_fadeOutRight_df7k4_1";
var ping = "_ping_df7k4_1";
var blinkBackground = "_blinkBackground_df7k4_1";
var typingBlink = "_typingBlink_df7k4_1";
var SettingsSourceControl_vue_vue_type_style_index_0_lang_module_default = {
	group,
	readOnly,
	groupFlex,
	connect,
	disconnectButton,
	actionBox,
	sshInput,
	copyInput,
	sshKeyTypeSelect,
	branchSelection,
	refreshBranches,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_df7k4_1",
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
var SettingsSourceControl_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSourceControl_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsSourceControl_default as default };
