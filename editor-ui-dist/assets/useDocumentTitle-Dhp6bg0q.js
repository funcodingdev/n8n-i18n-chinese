import { It as ref, Nt as onScopeDispose } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as useSettingsStore } from "./settings.store-DtdxCj3f.js";
//#region ../@n8n/composables/src/useDocumentTitle.ts
var DEFAULT_TITLE = "n8n";
var DEFAULT_TAGLINE = "Workflow Automation";
function useDocumentTitle$1(options = {}) {
	const { releaseChannel, windowRef } = options;
	const suffix = !releaseChannel || releaseChannel === "stable" ? DEFAULT_TITLE : `${DEFAULT_TITLE}[${releaseChannel.toUpperCase()}]`;
	const currentState = ref(void 0);
	const set = (title) => {
		const sections = [title || DEFAULT_TAGLINE, suffix];
		(windowRef?.value?.document ?? document).title = sections.join(" - ");
	};
	const reset = () => {
		currentState.value = void 0;
		set("");
	};
	const setDocumentTitle = (workflowName, status) => {
		currentState.value = status;
		let prefix = "⚠️";
		if (status === "EXECUTING") prefix = "🔄";
		else if (status === "IDLE") prefix = "▶️";
		else if (status === "AI_BUILDING") prefix = "[Building]";
		else if (status === "AI_DONE") prefix = "[Done]";
		set(`${prefix} ${workflowName}`);
	};
	const getDocumentState = () => currentState.value;
	return {
		set,
		reset,
		setDocumentTitle,
		getDocumentState
	};
}
//#endregion
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
