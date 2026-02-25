import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Fr as usePostHog, Wc as STORES } from "./users.store-V01ymwEk.js";
import { Uc as SETUP_PANEL } from "./constants-dxedTdnr.js";
import { j as defineStore } from "./_baseOrderBy-D9ro0sYB.js";
const useSetupPanelStore = defineStore(STORES.SETUP_PANEL, () => {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => {
		return posthogStore.getVariant(SETUP_PANEL.name) === SETUP_PANEL.variant;
	}) };
});
export { useSetupPanelStore as t };
