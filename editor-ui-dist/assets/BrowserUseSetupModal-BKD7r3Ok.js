import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Jd as defineComponent, Jf as unref, Kd as createVNode, df as openBlock, jf as init_reactivity_esm_bundler } from "./vendor-AGzaQJYe.js";
import { Nf as Modal_default, nO as createEventBus } from "./app-MbtXRI_F.js";
import { t as BrowserUseSetupContent_default } from "./BrowserUseSetupContent-Bpcz4Cgd.js";
//#region src/features/ai/instanceAi/components/modals/BrowserUseSetupModal.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/ai/instanceAi/components/modals/BrowserUseSetupModal.vue
var BrowserUseSetupModal_default = /* @__PURE__ */ defineComponent({
	__name: "BrowserUseSetupModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		const modalBus = createEventBus();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				"show-close": true,
				"event-bus": unref(modalBus),
				"custom-class": "instance-ai-browser-use-setup-modal",
				width: "540"
			}, {
				content: withCtx(() => [createVNode(BrowserUseSetupContent_default, {
					"auto-connect": "",
					onClose: _cache[0] || (_cache[0] = ($event) => unref(modalBus).emit("close"))
				})]),
				_: 1
			}, 8, ["name", "event-bus"]);
		};
	}
});
//#endregion
export { BrowserUseSetupModal_default as default };
