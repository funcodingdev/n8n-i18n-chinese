import { Gd as createVNode, Qd as init_runtime_core_esm_bundler, Tf as withCtx, mf as resolveComponent, qd as defineComponent, uf as openBlock, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { nT as BaseLayout_default } from "./app-DbOOaPK6.js";
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
