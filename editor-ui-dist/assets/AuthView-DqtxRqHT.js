import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, U as mergeProps, bt as withCtx, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { n as createFormEventBus, t as N8nFormInputs_default } from "./N8nFormInputs-CpuOJV4S.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nLogo_default } from "./N8nLogo-Dro1bbAT.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { n as useSSOStore } from "./sso.store-DHU_Tm-K.js";
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nFormBox/FormBox.vue?vue&type=style&index=0&lang.module.scss
var heading = "_heading_1akj9_388";
var container$1 = "_container_1akj9_394";
var inputsContainer = "_inputsContainer_1akj9_402";
var actionContainer = "_actionContainer_1akj9_406";
var buttonsContainer = "_buttonsContainer_1akj9_411 _actionContainer_1akj9_406";
var secondaryButtonContainer = "_secondaryButtonContainer_1akj9_416";
var withLabel = "_withLabel_1akj9_422";
var shimmer$2 = "_shimmer_1akj9_1";
var spin$2 = "_spin_1akj9_1";
var opacityPulse$2 = "_opacityPulse_1akj9_1";
var popoverIn$2 = "_popoverIn_1akj9_1";
var fadeIn$2 = "_fadeIn_1akj9_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1akj9_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1akj9_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1akj9_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1akj9_1";
var blurSwapIn$2 = "_blurSwapIn_1akj9_1";
var blurSwapOut$2 = "_blurSwapOut_1akj9_1";
var pulseGlow$2 = "_pulseGlow_1akj9_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1akj9_1";
var fade$2 = "_fade_1akj9_1";
var fadeInUp$2 = "_fadeInUp_1akj9_1";
var fadeInDown$2 = "_fadeInDown_1akj9_1";
var fadeInLeft$2 = "_fadeInLeft_1akj9_1";
var fadeInRight$2 = "_fadeInRight_1akj9_1";
var fadeOut$2 = "_fadeOut_1akj9_1";
var fadeOutDown$2 = "_fadeOutDown_1akj9_1";
var fadeOutUp$2 = "_fadeOutUp_1akj9_1";
var fadeOutLeft$2 = "_fadeOutLeft_1akj9_1";
var fadeOutRight$2 = "_fadeOutRight_1akj9_1";
var ping$2 = "_ping_1akj9_1";
var blinkBackground$2 = "_blinkBackground_1akj9_1";
var typingBlink$2 = "_typingBlink_1akj9_1";
var FormBox_vue_vue_type_style_index_0_lang_module_default = {
	heading,
	container: container$1,
	inputsContainer,
	actionContainer,
	buttonsContainer,
	secondaryButtonContainer,
	withLabel,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1akj9_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
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
//#endregion
//#region src/features/settings/sso/components/SSOLogin.vue?vue&type=style&index=0&lang.module.scss
var ssoLogin = "_ssoLogin_su3dm_388";
var divider = "_divider_su3dm_396";
var shimmer$1 = "_shimmer_su3dm_1";
var spin$1 = "_spin_su3dm_1";
var opacityPulse$1 = "_opacityPulse_su3dm_1";
var popoverIn$1 = "_popoverIn_su3dm_1";
var fadeIn$1 = "_fadeIn_su3dm_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_su3dm_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_su3dm_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_su3dm_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_su3dm_1";
var blurSwapIn$1 = "_blurSwapIn_su3dm_1";
var blurSwapOut$1 = "_blurSwapOut_su3dm_1";
var pulseGlow$1 = "_pulseGlow_su3dm_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_su3dm_1";
var fade$1 = "_fade_su3dm_1";
var fadeInUp$1 = "_fadeInUp_su3dm_1";
var fadeInDown$1 = "_fadeInDown_su3dm_1";
var fadeInLeft$1 = "_fadeInLeft_su3dm_1";
var fadeInRight$1 = "_fadeInRight_su3dm_1";
var fadeOut$1 = "_fadeOut_su3dm_1";
var fadeOutDown$1 = "_fadeOutDown_su3dm_1";
var fadeOutUp$1 = "_fadeOutUp_su3dm_1";
var fadeOutLeft$1 = "_fadeOutLeft_su3dm_1";
var fadeOutRight$1 = "_fadeOutRight_su3dm_1";
var ping$1 = "_ping_su3dm_1";
var blinkBackground$1 = "_blinkBackground_su3dm_1";
var typingBlink$1 = "_typingBlink_su3dm_1";
var SSOLogin_vue_vue_type_style_index_0_lang_module_default = {
	ssoLogin,
	divider,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_su3dm_1",
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
//#endregion
//#region src/features/core/auth/views/AuthView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1ihl8_392";
var textContainer = "_textContainer_1ihl8_402";
var formContainer = "_formContainer_1ihl8_406";
var shimmer = "_shimmer_1ihl8_1";
var spin = "_spin_1ihl8_1";
var opacityPulse = "_opacityPulse_1ihl8_1";
var popoverIn = "_popoverIn_1ihl8_1";
var fadeIn = "_fadeIn_1ihl8_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1ihl8_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1ihl8_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1ihl8_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1ihl8_1";
var blurSwapIn = "_blurSwapIn_1ihl8_1";
var blurSwapOut = "_blurSwapOut_1ihl8_1";
var pulseGlow = "_pulseGlow_1ihl8_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1ihl8_1";
var fade = "_fade_1ihl8_1";
var fadeInUp = "_fadeInUp_1ihl8_1";
var fadeInDown = "_fadeInDown_1ihl8_1";
var fadeInLeft = "_fadeInLeft_1ihl8_1";
var fadeInRight = "_fadeInRight_1ihl8_1";
var fadeOut = "_fadeOut_1ihl8_1";
var fadeOutDown = "_fadeOutDown_1ihl8_1";
var fadeOutUp = "_fadeOutUp_1ihl8_1";
var fadeOutLeft = "_fadeOutLeft_1ihl8_1";
var fadeOutRight = "_fadeOutRight_1ihl8_1";
var ping = "_ping_1ihl8_1";
var blinkBackground = "_blinkBackground_1ihl8_1";
var typingBlink = "_typingBlink_1ihl8_1";
var AuthView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	textContainer,
	formContainer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1ihl8_1",
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
var AuthView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AuthView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AuthView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { AuthView_default as t };
