import { $ as openBlock, A as createTextVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, X as onMounted, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { n as createFormEventBus, t as N8nFormInputs_default } from "./N8nFormInputs-CpuOJV4S.js";
import { t as Modal_default } from "./Modal-DYw1gJ5H.js";
import { n as CONFIRM_PASSWORD_MODAL_KEY } from "./auth.constants-FYmO-P3M.js";
import { t as confirmPasswordEventBus } from "./auth.eventBus-0_zQt7DZ.js";
//#region src/features/core/auth/components/ConfirmPasswordModal.vue?vue&type=script&setup=true&lang.ts
var ConfirmPasswordModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ConfirmPasswordModal",
	setup(__props) {
		const config = ref(null);
		const formBus = createFormEventBus();
		const loading = ref(false);
		const i18n = useI18n();
		const onSubmit = (data) => {
			const currentPassword = data.currentPassword;
			if (!currentPassword) return;
			loading.value = true;
			confirmPasswordEventBus.emit("close", { currentPassword });
		};
		const onSubmitClick = () => {
			formBus.emit("submit");
		};
		onMounted(() => {
			config.value = [{ currentPassword: {
				name: "currentPassword",
				properties: {
					label: i18n.baseText("auth.confirmPassword.currentPassword"),
					type: "password",
					required: true,
					autocomplete: "current-password",
					capitalize: true,
					focusInitially: true
				}
			} }.currentPassword];
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(CONFIRM_PASSWORD_MODAL_KEY),
				title: unref(i18n).baseText("auth.confirmPassword"),
				center: true,
				width: "460px",
				"event-bus": unref(confirmPasswordEventBus),
				onEnter: onSubmitClick
			}, {
				content: withCtx(() => [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.description),
					tag: "p"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("auth.confirmPassword.confirmPasswordToChangeEmail")), 1)]),
					_: 1
				}, 8, ["class"]), config.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
					key: 0,
					inputs: config.value,
					"event-bus": unref(formBus),
					"column-view": true,
					onSubmit
				}, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true)]),
				footer: withCtx(() => [createVNode(unref(N8nButton_default), {
					loading: loading.value,
					label: unref(i18n).baseText("generic.confirm"),
					float: "right",
					"data-test-id": "confirm-password-button",
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
//#region src/features/core/auth/components/ConfirmPasswordModal.vue?vue&type=style&index=0&lang.module.scss
var description = "_description_1gmad_388";
var shimmer = "_shimmer_1gmad_1";
var spin = "_spin_1gmad_1";
var opacityPulse = "_opacityPulse_1gmad_1";
var popoverIn = "_popoverIn_1gmad_1";
var fadeIn = "_fadeIn_1gmad_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1gmad_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1gmad_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1gmad_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1gmad_1";
var blurSwapIn = "_blurSwapIn_1gmad_1";
var blurSwapOut = "_blurSwapOut_1gmad_1";
var pulseGlow = "_pulseGlow_1gmad_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1gmad_1";
var fade = "_fade_1gmad_1";
var fadeInUp = "_fadeInUp_1gmad_1";
var fadeInDown = "_fadeInDown_1gmad_1";
var fadeInLeft = "_fadeInLeft_1gmad_1";
var fadeInRight = "_fadeInRight_1gmad_1";
var fadeOut = "_fadeOut_1gmad_1";
var fadeOutDown = "_fadeOutDown_1gmad_1";
var fadeOutUp = "_fadeOutUp_1gmad_1";
var fadeOutLeft = "_fadeOutLeft_1gmad_1";
var fadeOutRight = "_fadeOutRight_1gmad_1";
var ping = "_ping_1gmad_1";
var blinkBackground = "_blinkBackground_1gmad_1";
var typingBlink = "_typingBlink_1gmad_1";
var ConfirmPasswordModal_vue_vue_type_style_index_0_lang_module_default = {
	description,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1gmad_1",
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
var ConfirmPasswordModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConfirmPasswordModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConfirmPasswordModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ConfirmPasswordModal_default as default };
