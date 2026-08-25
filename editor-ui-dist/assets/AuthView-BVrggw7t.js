import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, U as mergeProps, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-CNBJaijc.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-BNSG8N0P.js";
import { t as N8nText_default } from "./N8nText-MUZN9Sd-.js";
import { n as createFormEventBus, t as N8nFormInputs_default } from "./N8nFormInputs-Ci6Sk7OU.js";
import { t as N8nHeading_default } from "./N8nHeading-BWV9gsOh.js";
import { s as useRoute } from "./vue-router-Dl3cOHxO.js";
import { t as N8nLink_default } from "./N8nLink-DzyV3f-o.js";
import { t as N8nLogo_default } from "./N8nLogo-CadhsNjD.js";
import { t as useSettingsStore } from "./settings.store-DtdxCj3f.js";
import { n as useToast } from "./useToast-D5wqhIPz.js";
import { n as useSSOStore } from "./sso.store-Cfo2Mbm2.js";
//#region ../@n8n/design-system/src/components/N8nFormBox/FormBox.vue?vue&type=script&setup=true&lang.ts
var FormBox_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "N8nFormBox",
	__name: "FormBox",
	props: {
		title: { default: "" },
		inputs: { default: () => [] },
		buttonText: {},
		buttonLoading: {
			type: Boolean,
			default: false
		},
		secondaryButtonText: {},
		redirectText: { default: "" },
		redirectLink: { default: "" }
	},
	emits: [
		"submit",
		"update",
		"secondaryClick"
	],
	setup(__props, { emit: __emit }) {
		const formBus = createFormEventBus();
		const emit = __emit;
		const onUpdateModelValue = (e) => emit("update", e);
		const onSubmit = (e) => emit("submit", e);
		const onButtonClick = () => formBus.emit("submit");
		const onSecondaryButtonClick = (event) => emit("secondaryClick", event);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["n8n-form-box", _ctx.$style.container]) }, [
				__props.title ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.heading)
				}, [createVNode(unref(N8nHeading_default), { size: "xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputsContainer) }, [createVNode(unref(N8nFormInputs_default), {
					inputs: __props.inputs,
					"event-bus": unref(formBus),
					"column-view": true,
					onUpdate: onUpdateModelValue,
					onSubmit
				}, null, 8, ["inputs", "event-bus"])], 2),
				__props.secondaryButtonText || __props.buttonText ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.buttonsContainer)
				}, [__props.secondaryButtonText ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.secondaryButtonContainer)
				}, [createVNode(unref(N8nLink_default), {
					size: "medium",
					theme: "text",
					onClick: onSecondaryButtonClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.secondaryButtonText), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true), __props.buttonText ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					label: __props.buttonText,
					loading: __props.buttonLoading,
					"data-test-id": "form-submit-button",
					size: "large",
					onClick: onButtonClick
				}, null, 8, ["label", "loading"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionContainer) }, [__props.redirectText && __props.redirectLink ? (openBlock(), createBlock(unref(N8nLink_default), {
					key: 0,
					to: __props.redirectLink
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.redirectText), 1)]),
					_: 1
				}, 8, ["to"])) : createCommentVNode("", true)], 2),
				renderSlot(_ctx.$slots, "default")
			], 2);
		};
	}
});
var FormBox_vue_vue_type_style_index_0_lang_module_default = {
	heading: "_heading_mygmb_125",
	container: "_container_mygmb_131",
	inputsContainer: "_inputsContainer_mygmb_139",
	actionContainer: "_actionContainer_mygmb_143",
	buttonsContainer: "_buttonsContainer_mygmb_148 _actionContainer_mygmb_143",
	secondaryButtonContainer: "_secondaryButtonContainer_mygmb_153",
	withLabel: "_withLabel_mygmb_159"
};
//#endregion
//#region ../@n8n/design-system/src/components/N8nFormBox/index.ts
var N8nFormBox_default = /* @__PURE__ */ _plugin_vue_export_helper_default(FormBox_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": FormBox_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/sso/components/SSOLogin.vue?vue&type=script&setup=true&lang.ts
var SSOLogin_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SSOLogin",
	setup(__props) {
		const i18n = useI18n();
		const ssoStore = useSSOStore();
		const toast = useToast();
		const route = useRoute();
		const onSSOLogin = async () => {
			try {
				const redirectUrl = ssoStore.isDefaultAuthenticationSaml ? await ssoStore.getSSORedirectUrl(typeof route.query?.redirect === "string" ? route.query.redirect : "") : ssoStore.oidc.loginUrl;
				window.location.href = redirectUrl ?? "";
			} catch (error) {
				toast.showError(error, "Error", { message: error.message });
			}
		};
		return (_ctx, _cache) => {
			return unref(ssoStore).showSsoLoginButton ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.ssoLogin)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.divider) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("sso.login.divider")), 1)], 2), createVNode(unref(N8nButton_default), {
				variant: "outline",
				size: "large",
				label: unref(i18n).baseText("sso.login.button"),
				onClick: onSSOLogin
			}, null, 8, ["label"])], 2)) : createCommentVNode("", true);
		};
	}
});
var SSOLogin_vue_vue_type_style_index_0_lang_module_default = {
	ssoLogin: "_ssoLogin_16f3z_125",
	divider: "_divider_16f3z_133"
};
var SSOLogin_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SSOLogin_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SSOLogin_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/core/auth/views/AuthView.vue?vue&type=script&setup=true&lang.ts
var AuthView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AuthView",
	props: {
		form: {},
		formLoading: {
			type: Boolean,
			default: false
		},
		subtitle: {},
		withSso: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"update",
		"submit",
		"secondaryClick"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const onUpdate = (e) => {
			emit("update", e);
		};
		const onSubmit = (data) => {
			emit("submit", data);
		};
		const onSecondaryClick = () => {
			emit("secondaryClick");
		};
		const { settings: { releaseChannel } } = useSettingsStore();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nLogo_default), {
					size: "large",
					"release-channel": unref(releaseChannel)
				}, null, 8, ["release-channel"]),
				__props.subtitle ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.textContainer)
				}, [createVNode(unref(N8nText_default), { size: "large" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.subtitle), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.formContainer) }, [createVNode(unref(N8nFormBox_default), mergeProps(__props.form, {
					"data-test-id": "auth-form",
					"button-loading": __props.formLoading,
					onSecondaryClick,
					onSubmit,
					onUpdate
				}), {
					default: withCtx(() => [__props.withSso ? (openBlock(), createBlock(SSOLogin_default, { key: 0 })) : createCommentVNode("", true)]),
					_: 1
				}, 16, ["button-loading"])], 2)
			], 2);
		};
	}
});
var AuthView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_fdp0w_129",
	textContainer: "_textContainer_fdp0w_139",
	formContainer: "_formContainer_fdp0w_143"
};
var AuthView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AuthView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AuthView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AuthView_default as t };
