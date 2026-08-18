import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { dr as defineStore } from "./useRootStore-D6sIVZY4.js";
import { t as STORES } from "./constants2-JUBWMnBE.js";
import { t as usePostHog } from "./posthog.store-BjJmKYGV.js";
import { Qa as SETUP_PANEL } from "./constants-CV_3h7tS.js";
import { n as useDebounce } from "./useDebounce-B_F2S9d6.js";
//#region src/features/setupPanel/setupPanel.store.ts
var HIGHLIGHT_CLEAR_DEBOUNCE_MS = 300;
var useSetupPanelStore = defineStore(STORES.SETUP_PANEL, () => {
	const posthogStore = usePostHog();
	const { debounce } = useDebounce();
	const isFeatureEnabled = computed(() => {
		return posthogStore.getVariant(SETUP_PANEL.name) === SETUP_PANEL.variant;
	});
	const highlightedNodeIds = ref(/* @__PURE__ */ new Set());
	const isHighlightActive = computed(() => highlightedNodeIds.value.size > 0);
	const debouncedClear = debounce(() => {
		highlightedNodeIds.value = /* @__PURE__ */ new Set();
	}, {
		debounceTime: HIGHLIGHT_CLEAR_DEBOUNCE_MS,
		trailing: true
	});
	function setHighlightedNodes(nodeIds) {
		debouncedClear.cancel();
		highlightedNodeIds.value = new Set(nodeIds);
	}
	function clearHighlightedNodes() {
		debouncedClear();
	}
	return {
		isFeatureEnabled,
		highlightedNodeIds,
		isHighlightActive,
		setHighlightedNodes,
		clearHighlightedNodes
	};
});
//#endregion
export { useSetupPanelStore as t };
