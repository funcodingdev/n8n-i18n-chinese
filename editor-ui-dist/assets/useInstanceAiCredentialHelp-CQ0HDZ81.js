import { Ut as toValue } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { hn as useProjectsStore } from "./workflows.store-Dju5360D.js";
import { t as useInstanceAiAvailable } from "./useInstanceAiAvailability-Br1Z70-r.js";
import { i as buildInstanceAiCredentialQuestion, r as buildInstanceAiCredentialHandoffContext, v as useInstanceAiHandoff } from "./useInstanceAiHandoff-D48Rw1CM.js";
//#region src/features/ai/instanceAi/composables/useInstanceAiCredentialHelp.ts
/**
* Credential setup-help handler for surfaces with no workflow-editor context
* (credentials list, its new-credential dialog, the setup cards' modal): opens
* Instance AI in a new tab and keeps the credential modal open. Returns a
* factory so the project resolves at click time; undefined when Instance AI
* is unavailable, which keeps the help button hidden.
*/
function useInstanceAiCredentialHelp(options = {}) {
	const projectsStore = useProjectsStore();
	const instanceAiAvailable = useInstanceAiAvailable();
	const { startThread } = useInstanceAiHandoff();
	return () => {
		if (!instanceAiAvailable.value) return void 0;
		return async (credential) => {
			const projectId = toValue(options.projectId) ?? projectsStore.currentProject?.id ?? projectsStore.personalProject?.id;
			if (!projectId) return false;
			const serviceName = toValue(options.serviceName);
			const subject = serviceName ? {
				...credential,
				displayName: serviceName
			} : credential;
			await startThread(projectId, buildInstanceAiCredentialQuestion(subject), {
				source: options.source ?? "credentials_list",
				origin: "internal"
			}, void 0, void 0, {
				newTab: true,
				context: buildInstanceAiCredentialHandoffContext(subject)
			});
			return false;
		};
	};
}
//#endregion
export { useInstanceAiCredentialHelp as t };
