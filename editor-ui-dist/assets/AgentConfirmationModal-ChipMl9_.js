import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Gd as createTextVNode, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { AO as N8nText_default, HO as _plugin_vue_export_helper_default, RO as N8nButton_default, s_ as useUIStore, zO as N8nIcon_default } from "./app-MbtXRI_F.js";
import { t as AgentModal_default } from "./AgentModal-BgUIj5uv.js";
//#region src/features/agents/components/AgentConfirmationModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AgentConfirmationModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AgentConfirmationModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const uiStore = useUIStore();
		const modalOpen = computed(() => uiStore.modalsById[props.modalName]?.open === true);
		const submitting = ref(false);
		function closeModal() {
			uiStore.closeModal(props.modalName);
		}
		async function onCancel() {
			await props.data.onCancel?.();
			closeModal();
		}
		async function onConfirm() {
			submitting.value = true;
			try {
				if (await props.data.onConfirm?.() !== false) closeModal();
			} catch {} finally {
				submitting.value = false;
			}
		}
		async function onOpenChange(open) {
			if (open) return;
			if (await props.data.onClose?.() !== false) closeModal();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(AgentModal_default, {
				open: modalOpen.value,
				title: props.data.title,
				busy: submitting.value,
				"show-cancel": false,
				size: "large",
				"data-testid": "agent-confirmation-modal",
				"onUpdate:open": onOpenChange
			}, {
				footerActions: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "medium",
					disabled: submitting.value,
					onClick: onCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.cancelButtonText), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					variant: props.data.isDestructive ? "destructive" : "solid",
					size: "medium",
					loading: submitting.value,
					onClick: onConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.confirmButtonText), 1)]),
					_: 1
				}, 8, ["variant", "loading"])]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: "triangle-alert",
					color: "warning",
					size: "xlarge"
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), { size: "medium" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.data.description), 1)]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, [
				"open",
				"title",
				"busy"
			]);
		};
	}
}), [["__cssModules", { "$style": {
	content: "_content_1l0k1_1",
	icon: "_icon_1l0k1_8"
} }]]);
//#endregion
export { AgentConfirmationModal_default as default };
