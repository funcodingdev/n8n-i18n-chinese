import { It as ref, S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { A as injectConfigProviderContext } from "./VisuallyHidden-OSLEy_KR.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/shared/useLocale.js
function useLocale(locale) {
	const context = injectConfigProviderContext({ locale: ref("en") });
	return computed(() => locale?.value || context.locale?.value || "en");
}
//#endregion
export { useLocale as t };
