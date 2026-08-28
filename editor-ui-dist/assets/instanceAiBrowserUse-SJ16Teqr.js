import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { n as require_es5 } from "./settings.store-ClBf6TZq.js";
import { t as usePostHog } from "./posthog.store-D_drhJKO.js";
import { Na as INSTANCE_AI_BROWSER_USE_EXPERIMENT } from "./constants-BP1FOJvU.js";
//#region src/experiments/instanceAiBrowserUse/useInstanceAiBrowserUseExperiment.ts
var import_es5 = /* @__PURE__ */ __toESM(require_es5(), 1);
/**
* Browser extensions don't exist on phones and tablets
*/
function isBrowserUseSupportedOnDevice() {
	const { platform } = import_es5.default.parse(navigator.userAgent);
	return platform.type !== "mobile" && platform.type !== "tablet";
}
/**
* Browser Use only supports Chromium through n8n Browser Use Chrome extension
*/
function isBrowserUseSupportedForBrowser() {
	return import_es5.default.parse(navigator.userAgent).engine.name === "Blink";
}
function useInstanceAiBrowserUseExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => isBrowserUseSupportedOnDevice() && posthogStore.getVariant(INSTANCE_AI_BROWSER_USE_EXPERIMENT.name) === INSTANCE_AI_BROWSER_USE_EXPERIMENT.variant) };
}
//#endregion
export { useInstanceAiBrowserUseExperiment as n, isBrowserUseSupportedForBrowser as t };
