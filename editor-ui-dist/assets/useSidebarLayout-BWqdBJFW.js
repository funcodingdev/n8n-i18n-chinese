import { $d as init_runtime_core_esm_bundler, Rd as computed, jf as init_reactivity_esm_bundler, zf as ref } from "./vendor-AGzaQJYe.js";
import { s_ as useUIStore } from "./app-DGoK9ugD.js";
//#region src/app/composables/useSidebarLayout.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
function useSidebarLayout() {
	const uiStore = useUIStore();
	const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed ?? false);
	const sidebarWidth = computed({
		get: () => {
			const width = uiStore.sidebarWidth;
			if (!Number.isFinite(width)) return 200;
			return Math.min(Math.max(width, 200), 500);
		},
		set: (width) => {
			uiStore.sidebarWidth = width;
		}
	});
	const toggleCollapse = () => {
		uiStore.toggleSidebarMenuCollapse();
	};
	const isResizing = ref(false);
	function onResizeStart() {
		isResizing.value = true;
	}
	function onResize(event) {
		if (isCollapsed.value && event.x > 100) {
			toggleCollapse();
			return;
		}
		if (isCollapsed.value) return;
		if (event.x < 100 && !isCollapsed.value) {
			toggleCollapse();
			return;
		}
		sidebarWidth.value = event.width;
	}
	function onResizeEnd() {
		isResizing.value = false;
	}
	return {
		isCollapsed,
		toggleCollapse,
		sidebarWidth,
		isResizing,
		onResizeStart,
		onResize,
		onResizeEnd
	};
}
//#endregion
export { useSidebarLayout as t };
