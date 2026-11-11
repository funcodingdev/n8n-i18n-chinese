import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Gd as createTextVNode, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { $b as useTelemetry, AO as N8nText_default, HO as _plugin_vue_export_helper_default, Nf as Modal_default, Qa as CredentialPicker_default, RO as N8nButton_default, cd as CredentialIcon_default, nO as createEventBus, qD as N8nHeading_default, qO as useI18n } from "./app-MbtXRI_F.js";
//#region src/features/ai/components/CredentialSelectorModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var CredentialSelectorModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
					variant: "outline",
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
}), [["__cssModules", { "$style": {
	content: "_content_1e9vo_1",
	footer: "_footer_1e9vo_8",
	header: "_header_1e9vo_16",
	icon: "_icon_1e9vo_22",
	credentialContainer: "_credentialContainer_1e9vo_27",
	credentialPicker: "_credentialPicker_1e9vo_34",
	credentialSelectorModal: "_credentialSelectorModal_1e9vo_38"
} }]]);
//#endregion
export { CredentialSelectorModal_default as default };
