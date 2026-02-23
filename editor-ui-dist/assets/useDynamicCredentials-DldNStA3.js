import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { xs as useSettingsStore } from "./users.store-C9ftYS5u.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-BW8IVa75.js";
const useDynamicCredentials = () => {
	const settingsStore = useSettingsStore();
	const { check } = useEnvFeatureFlag();
	return { isEnabled: computed(() => settingsStore.isModuleActive("dynamic-credentials") && check.value("DYNAMIC_CREDENTIALS")) };
};
export { useDynamicCredentials as t };
