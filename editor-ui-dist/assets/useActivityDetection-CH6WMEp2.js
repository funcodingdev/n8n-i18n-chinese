import { Cf as watch, Qd as init_runtime_core_esm_bundler, cf as onUnmounted, pd as useDebounceFn, sf as onMounted } from "./vendor-BA8kaY8M.js";
import { Kg as getDebounceTime, My as DEBOUNCE_TIME } from "./app-CfhiRDif.js";
//#region src/app/composables/useActivityDetection.ts
init_runtime_core_esm_bundler();
function useActivityDetection(store) {
	const recordActivity = useDebounceFn(() => {
		store.recordActivity();
	}, getDebounceTime(DEBOUNCE_TIME.COLLABORATION.ACTIVITY));
	const events = [
		"mousedown",
		"keydown",
		"touchstart"
	];
	const attachListeners = () => {
		events.forEach((event) => {
			document.addEventListener(event, recordActivity, { passive: true });
		});
	};
	const detachListeners = () => {
		events.forEach((event) => {
			document.removeEventListener(event, recordActivity);
		});
	};
	watch(() => store.isCurrentTabWriter, (isWriter) => {
		if (isWriter) attachListeners();
		else detachListeners();
	});
	onMounted(() => {
		if (store.isCurrentTabWriter) attachListeners();
	});
	onUnmounted(() => {
		detachListeners();
	});
	return { recordActivity };
}
//#endregion
export { useActivityDetection as t };
