import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Gd as createTextVNode, Jd as defineComponent, Jf as unref, Kd as createVNode, bp as toDisplayString, cf as onMounted, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, FD as N8nFormInput_default, GD as N8nHeading_default, GO as useI18n, IO as N8nButton_default, Nf as Modal_default, OO as N8nText_default, On as CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY, cd as CredentialIcon_default, eO as createEventBus, rS as PROVIDER_CREDENTIAL_TYPE_MAP, zn as providerDisplayNames } from "./app-DGoK9ugD.js";
//#region src/features/ai/chatHub/components/ModelByIdSelectorModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var ModelByIdSelectorModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ModelByIdSelectorModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const modalBus = ref(createEventBus());
		const modelId = ref(props.data.initialValue);
		const inputRef = ref(null);
		const i18n = useI18n();
		onMounted(() => {
			setTimeout(() => {
				inputRef.value?.inputRef?.select();
				inputRef.value?.inputRef?.focus();
			});
		});
		function onConfirm() {
			if (modelId.value) {
				props.data.onSelect(props.data.provider, modelId.value);
				modalBus.value.emit("close");
			}
		}
		function onCancel() {
			modalBus.value.emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: unref(CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY),
				"event-bus": modalBus.value,
				width: "50%",
				center: true,
				"max-width": "460px",
				"min-height": "250px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(CredentialIcon_default, {
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[__props.data.provider],
					size: 24,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["credential-type-name", "class"]), createVNode(unref(N8nHeading_default), {
					size: "medium",
					tag: "h2",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.title", { interpolate: { provider: unref(providerDisplayNames)[__props.data.provider] } })), 1)]),
					_: 1
				}, 8, ["class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.choose")), 1)]),
					_: 1
				}), createVNode(unref(N8nFormInput_default), {
					ref_key: "inputRef",
					ref: inputRef,
					modelValue: modelId.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelId.value = $event),
					name: "model",
					label: "",
					"max-length": "64",
					"focus-initially": "",
					onEnter: onConfirm
				}, null, 8, ["modelValue"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !modelId.value,
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.models.byIdSelector.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_e87ec_1",
	footer: "_footer_e87ec_8",
	header: "_header_e87ec_15",
	icon: "_icon_e87ec_21"
} }]]);
//#endregion
export { ModelByIdSelectorModal_default as default };
