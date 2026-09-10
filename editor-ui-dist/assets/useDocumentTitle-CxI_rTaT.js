import { It as ref, Nt as onScopeDispose } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useSettingsStore } from "./settings.store-CEDVctza.js";
import { t as useDocumentTitle$1 } from "./useDocumentTitle-j8cYdDIp.js";
//#region src/app/composables/useDocumentTitle.ts
var titleClaims = ref(0);
function claimDocumentTitle() {
	titleClaims.value++;
	onScopeDispose(() => titleClaims.value--);
}
function useDocumentTitle(windowRef) {
	const { releaseChannel } = useSettingsStore().settings;
	const base = useDocumentTitle$1({
		releaseChannel,
		windowRef
	});
	return {
		...base,
		setDocumentTitle: (workflowName, status) => {
			if (titleClaims.value > 0) return;
			base.setDocumentTitle(workflowName, status);
		}
	};
}
//#endregion
export { useDocumentTitle as n, claimDocumentTitle as t };
