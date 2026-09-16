import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { z as useEnvFeatureFlag } from "./workflows.store-OYoVPKbB.js";
import { t as useSettingsStore } from "./settings.store-CPQK_mLj.js";
//#region src/features/integrations/promotions.ee/promotions.constants.ts
var PROMOTION_SELECT_MODAL_KEY = "promotionSelect";
//#endregion
//#region src/features/shared/promotions/usePromotionsEnabled.ts
/**
* Gates all workflow-promotion surfaces. Enabled only when the `git-connections`
* module is active and the `N8N_ENV_FEAT_PROMOTIONS` rollout flag is on.
*/
var usePromotionsEnabled = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("git-connections") && check.value("PROMOTIONS")) };
};
//#endregion
export { PROMOTION_SELECT_MODAL_KEY as n, usePromotionsEnabled as t };
