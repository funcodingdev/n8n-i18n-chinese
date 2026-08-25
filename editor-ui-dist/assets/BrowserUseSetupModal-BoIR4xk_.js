import { $ as openBlock, Gt as unref, N as defineComponent, bt as withCtx, j as createVNode, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as createEventBus } from "./event-bus-CWhIcyjm.js";
import { t as Modal_default } from "./Modal-dWz6heAg.js";
import { t as BrowserUseSetupContent_default } from "./BrowserUseSetupContent-DE9hQWQE.js";
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
