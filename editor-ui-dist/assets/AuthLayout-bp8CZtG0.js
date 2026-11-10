import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Jd as defineComponent, Kd as createVNode, df as openBlock, hf as resolveComponent } from "./vendor-AGzaQJYe.js";
import { rE as BaseLayout_default } from "./app-DGoK9ugD.js";
//#region src/app/layouts/AuthLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
//#endregion
//#region src/app/layouts/AuthLayout.vue
var AuthLayout_default = /* @__PURE__ */ defineComponent({
	__name: "AuthLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
//#endregion
export { AuthLayout_default as default };
