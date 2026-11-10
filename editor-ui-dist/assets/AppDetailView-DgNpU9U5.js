import { $d as init_runtime_core_esm_bundler, Hd as createElementBlock, Jd as defineComponent, Kd as createVNode, Rd as computed, df as openBlock, hp as normalizeClass, np as init_shared_esm_bundler, ns as useRouter, ts as useRoute } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, o as PROJECT_APPS } from "./app-DGoK9ugD.js";
import { t as AppView_default } from "./AppView-aZo5FQmV.js";
//#region ../../modules/apps/frontend/src/views/AppDetailView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
var AppDetailView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AppDetailView",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const projectId = computed(() => String(route.params.projectId));
		const appId = computed(() => String(route.params.appId));
		const section = computed({
			get: () => typeof route.query.section === "string" ? route.query.section : "preview",
			set: (value) => {
				router.replace({ query: {
					...route.query,
					section: value === "preview" ? void 0 : value
				} });
			}
		});
		function onDeleted() {
			router.push({
				name: PROJECT_APPS,
				params: { projectId: projectId.value }
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.page) }, [createVNode(AppView_default, {
				section: section.value,
				"onUpdate:section": _cache[0] || (_cache[0] = ($event) => section.value = $event),
				"project-id": projectId.value,
				"app-id": appId.value,
				onDeleted
			}, null, 8, [
				"section",
				"project-id",
				"app-id"
			])], 2);
		};
	}
}), [["__cssModules", { "$style": { page: "_page_dz58o_1" } }]]);
//#endregion
export { AppDetailView_default as default };
