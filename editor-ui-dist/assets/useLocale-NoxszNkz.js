import { It as ref, S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { A as injectConfigProviderContext } from "./VisuallyHidden-lv4qVqRn.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_patch_hash=f1cec654cb01a5751dfc1de06604bb22f9518860ea9c72fb685e770509923a_8bfd31862bb4e8c13f88fc52583372b4/node_modules/reka-ui/dist/shared/useLocale.js
function useLocale(locale) {
	const context = injectConfigProviderContext({ locale: ref("en") });
	return computed(() => locale?.value || context.locale?.value || "en");
}
//#endregion
export { useLocale as t };
