import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Jd as defineComponent, Kd as createVNode, df as openBlock, hf as resolveComponent } from "./vendor-AGzaQJYe.js";
import { rE as BaseLayout_default } from "./app-DGoK9ugD.js";
import { t as AppSidebar_default } from "./AppSidebar-Xcgw8LTO.js";
//#region src/app/layouts/DefaultLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
//#endregion
//#region src/app/layouts/DefaultLayout.vue
var DefaultLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(AppSidebar_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
//#endregion
export { DefaultLayout_default as default };
