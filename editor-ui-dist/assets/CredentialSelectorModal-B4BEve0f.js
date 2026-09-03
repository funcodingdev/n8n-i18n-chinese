import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, S as computed, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as createEventBus } from "./event-bus-D6BxR6-6.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as Modal_default } from "./Modal-BrJJYGMr.js";
import { t as CredentialIcon_default } from "./CredentialIcon-T9rabh9H.js";
import { t as CredentialPicker_default } from "./CredentialPicker-cIxD8v8x.js";
//#region src/features/ai/components/CredentialSelectorModal.vue?vue&type=script&setup=true&lang.ts
var CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CredentialSelectorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const modalBus = ref(createEventBus());
		const selectedCredentialId = ref(props.data.initialValue);
		const displayName = computed(() => props.data.displayName);
		const title = computed(() => props.data.title ?? i18n.baseText("chatHub.credentials.selector.title", { interpolate: { provider: displayName.value } }));
		const description = computed(() => props.data.description ?? i18n.baseText("chatHub.credentials.selector.chooseOrCreate", { interpolate: { provider: displayName.value } }));
		function onCredentialSelect(credentialId) {
			selectedCredentialId.value = credentialId;
		}
		function onCredentialDeselect() {
			selectedCredentialId.value = null;
		}
		function onDeleteCredential(credentialId) {
			if (!selectedCredentialId.value || credentialId !== selectedCredentialId.value) return;
			selectedCredentialId.value = null;
			if (credentialId === props.data.initialValue) props.data.onSelect(null);
		}
		function onCredentialModalOpened(credentialId) {
			telemetry.track("User opened Credential modal", {
				credential_type: props.data.credentialType,
				source: props.data.source ?? "chat",
				new_credential: !credentialId,
				workflow_id: null
			});
		}
		function onConfirm() {
			if (selectedCredentialId.value) {
				props.data.onSelect(selectedCredentialId.value);
				modalBus.value.emit("close");
			}
		}
		function onCancel() {
			modalBus.value.emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: __props.modalName,
				"event-bus": modalBus.value,
				"custom-class": _ctx.$style.credentialSelectorModal,
				width: "50%",
				center: true,
				"max-width": "460px",
				"min-height": "250px",
				"append-to-body": __props.data.appendToBody
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(CredentialIcon_default, {
					"credential-type-name": __props.data.credentialType,
					size: 24,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["credential-type-name", "class"]), createVNode(unref(N8nHeading_default), {
					size: "medium",
					tag: "h2",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
					_: 1
				}, 8, ["class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(description.value), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialContainer) }, [createVNode(CredentialPicker_default, {
					class: normalizeClass(_ctx.$style.credentialPicker),
					"app-name": displayName.value,
					"credential-type": __props.data.credentialType,
					"selected-credential-id": selectedCredentialId.value,
					"show-delete": __props.data.showDelete ?? true,
					"hide-create-new": __props.data.hideCreateNew ?? true,
					"data-testid": __props.data.pickerDataTestId,
					teleported: "",
					"credential-modal-append-to-body": __props.data.appendToBody,
					onCredentialSelected: onCredentialSelect,
					onCredentialDeselected: onCredentialDeselect,
					onCredentialDeleted: onDeleteCredential,
					onCredentialModalOpened
				}, null, 8, [
					"class",
					"app-name",
					"credential-type",
					"selected-credential-id",
					"show-delete",
					"hide-create-new",
					"data-testid",
					"credential-modal-append-to-body"
				])], 2)], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.data.cancelLabel ?? unref(i18n).baseText("chatHub.credentials.selector.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !selectedCredentialId.value,
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.data.confirmLabel ?? unref(i18n).baseText("chatHub.credentials.selector.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, [
				"name",
				"event-bus",
				"custom-class",
				"append-to-body"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/components/CredentialSelectorModal.vue?vue&type=style&index=0&lang.module.scss
var content = "_content_y477s_388";
var footer = "_footer_y477s_395";
var header = "_header_y477s_403";
var icon = "_icon_y477s_409";
var credentialContainer = "_credentialContainer_y477s_414";
var credentialPicker = "_credentialPicker_y477s_421";
var credentialSelectorModal = "_credentialSelectorModal_y477s_425";
var shimmer = "_shimmer_y477s_1";
var spin = "_spin_y477s_1";
var opacityPulse = "_opacityPulse_y477s_1";
var popoverIn = "_popoverIn_y477s_1";
var fadeIn = "_fadeIn_y477s_1";
var collapsibleSlideDown = "_collapsibleSlideDown_y477s_1";
var collapsibleSlideUp = "_collapsibleSlideUp_y477s_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_y477s_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_y477s_1";
var blurSwapIn = "_blurSwapIn_y477s_1";
var blurSwapOut = "_blurSwapOut_y477s_1";
var pulseGlow = "_pulseGlow_y477s_1";
var pulseGlowDelayed = "_pulseGlowDelayed_y477s_1";
var fade = "_fade_y477s_1";
var fadeInUp = "_fadeInUp_y477s_1";
var fadeInDown = "_fadeInDown_y477s_1";
var fadeInLeft = "_fadeInLeft_y477s_1";
var fadeInRight = "_fadeInRight_y477s_1";
var fadeOut = "_fadeOut_y477s_1";
var fadeOutDown = "_fadeOutDown_y477s_1";
var fadeOutUp = "_fadeOutUp_y477s_1";
var fadeOutLeft = "_fadeOutLeft_y477s_1";
var fadeOutRight = "_fadeOutRight_y477s_1";
var ping = "_ping_y477s_1";
var blinkBackground = "_blinkBackground_y477s_1";
var typingBlink = "_typingBlink_y477s_1";
var CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default = {
	content,
	footer,
	header,
	icon,
	credentialContainer,
	credentialPicker,
	credentialSelectorModal,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_y477s_1",
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
var CredentialSelectorModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CredentialSelectorModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CredentialSelectorModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CredentialSelectorModal_default as default };
