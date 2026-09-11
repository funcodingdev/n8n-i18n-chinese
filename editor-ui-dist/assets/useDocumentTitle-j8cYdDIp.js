import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
//#region ../@n8n/composables/src/useDocumentTitle.ts
var DEFAULT_TITLE = "n8n";
var DEFAULT_TAGLINE = "Workflow Automation";
function useDocumentTitle(options = {}) {
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
export { useDocumentTitle as t };
