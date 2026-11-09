import { Cf as watch, Gd as createVNode, Hd as createSlots, Ld as computed, Qd as init_runtime_core_esm_bundler, Tf as withCtx, af as onBeforeUnmount, as as useRoute, mf as resolveComponent, qd as defineComponent, sf as onMounted, uf as openBlock, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { Eo as useInstanceAiStore, Ku as useLogsStore, Ul as usePushConnectionStore, nT as BaseLayout_default } from "./app-DbOOaPK6.js";
import { t as AppSidebar_default } from "./AppSidebar-Bw96gmQT.js";
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
