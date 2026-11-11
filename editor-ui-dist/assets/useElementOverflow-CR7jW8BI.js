import { $d as init_runtime_core_esm_bundler, cf as onMounted, jf as init_reactivity_esm_bundler, of as onBeforeUnmount, wf as watch, zf as ref } from "./vendor-AGzaQJYe.js";
//#region ../@n8n/composables/src/useElementOverflow.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/** Whether the content is clipped along one axis. Re-checks on resize and when `sources` change. */
function useElementOverflow(element, axis, sources = []) {
	const isOverflowing = ref(false);
	let observer = null;
	const update = () => {
		const el = element.value;
		if (!el) return;
		isOverflowing.value = axis === "x" ? el.scrollWidth > el.clientWidth : el.scrollHeight > el.clientHeight;
	};
	onMounted(() => {
		update();
		if (element.value && typeof ResizeObserver !== "undefined") {
			observer = new ResizeObserver(update);
			observer.observe(element.value);
		}
	});
	if (sources.length > 0) watch(sources, update, { flush: "post" });
	onBeforeUnmount(() => {
		observer?.disconnect();
	});
	return {
		isOverflowing,
		update
	};
}
//#endregion
export { useElementOverflow as t };
