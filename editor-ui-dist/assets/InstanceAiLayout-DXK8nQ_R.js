import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Jd as defineComponent, Kd as createVNode, Rd as computed, Ud as createSlots, cf as onMounted, df as openBlock, hf as resolveComponent, of as onBeforeUnmount, ts as useRoute, wf as watch } from "./vendor-AGzaQJYe.js";
import { Iu as usePushConnectionStore, Rd as useLogsStore, Ro as useInstanceAiStore, aE as BaseLayout_default } from "./app-MbtXRI_F.js";
import { t as AppSidebar_default } from "./AppSidebar-CDUA5P29.js";
//#region src/app/layouts/InstanceAiLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler();
var isLogsPanelOpenInArtifact = false;
//#endregion
//#region src/app/layouts/InstanceAiLayout.vue
var InstanceAiLayout_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLayout",
	setup(__props) {
		const pushConnectionStore = usePushConnectionStore();
		const logsStore = useLogsStore();
		const route = useRoute();
		const instanceAiStore = useInstanceAiStore();
		const showSidebar = computed(() => !instanceAiStore.isOnboardingChromeHidden(String(route.params.threadId ?? "")));
		logsStore.toggleOpen(isLogsPanelOpenInArtifact);
		watch(() => logsStore.isOpen, (isOpen) => {
			isLogsPanelOpenInArtifact = isOpen;
		}, { flush: "sync" });
		onMounted(() => {
			pushConnectionStore.pushConnect();
		});
		onBeforeUnmount(() => {
			pushConnectionStore.pushDisconnect();
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, createSlots({
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 2
			}, [showSidebar.value ? {
				name: "sidebar",
				fn: withCtx(() => [createVNode(AppSidebar_default)]),
				key: "0"
			} : void 0]), 1024);
		};
	}
});
//#endregion
export { InstanceAiLayout_default as default };
