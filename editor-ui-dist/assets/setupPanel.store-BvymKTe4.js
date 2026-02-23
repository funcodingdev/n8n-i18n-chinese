import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Fr as usePostHog, Wc as STORES } from "./users.store-Cfyj76Cq.js";
import { Uc as SETUP_PANEL } from "./constants-Da_CaOjC.js";
import { j as defineStore } from "./_baseOrderBy-sLFpBNOQ.js";
const useSetupPanelStore = defineStore(STORES.SETUP_PANEL, () => {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => {
		return posthogStore.getVariant(SETUP_PANEL.name) === SETUP_PANEL.variant;
	}) };
});
export { useSetupPanelStore as t };
