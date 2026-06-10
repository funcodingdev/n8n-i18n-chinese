import { S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { j as useEnvFeatureFlag } from "./workflows.store-Cc2IYz8o.js";
import "./useRootStore-BOF8LYEF.js";
import "./settings.store-D_uIyAbF.js";
//#region src/features/redaction-enforcement/composables/useRedactionEnforcementFeatureFlag.ts
var useRedactionEnforcementFeatureFlag = () => {
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => check.value("REDACTION_ENFORCEMENT")) };
};
//#endregion
export { useRedactionEnforcementFeatureFlag as t };
