import { $d as init_runtime_core_esm_bundler, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler } from "./vendor-AGzaQJYe.js";
import { HO as _plugin_vue_export_helper_default, wO as N8nLoading_default } from "./app-MbtXRI_F.js";
//#region src/app/components/layouts/ResourcesListSkeleton.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
//#endregion
//#region src/app/components/layouts/ResourcesListSkeleton.vue
var ResourcesListSkeleton_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ResourcesListSkeleton",
	props: {
		rows: { default: 25 },
		immediate: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["resource-list-loading", { "resource-list-loading-instant": __props.immediate }]) }, [createVNode(unref(N8nLoading_default), {
				rows: __props.rows,
				"shrink-last": false
			}, null, 8, ["rows"])], 2);
		};
	}
}), [["__scopeId", "data-v-7c36ef5f"]]);
//#endregion
export { ResourcesListSkeleton_default as t };
