import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-a4RL4cTS.js";
import { t as useRootStore } from "./useRootStore-BxA0rNgc.js";
import { n as useToast } from "./useToast-BdIkYyHv.js";
import "./constants-BP1FOJvU.js";
import { D as publishAgent, M as unpublishAgent, O as revertAgentToPublished } from "./useAgentApi-sdUpTCk-.js";
import { n as upsertProjectAgentsListCache } from "./useProjectAgentsList-DGESl4Ch.js";
import { t as useAgentConfirmationModal } from "./useAgentConfirmationModal-ZqNhx_Ks.js";
//#region src/features/agents/composables/useAgentPublish.ts
/**
* Shared publish/unpublish flow used by the builder header button and the list card.
* Owns the confirmation modal, toasts, error handling, and the `publishing` spinner
* state so both call sites stay thin and behave consistently.
*/
function useAgentPublish() {
	const rootStore = useRootStore();
	const locale = useI18n();
	const { showMessage, showError } = useToast();
	const { openAgentConfirmationModal } = useAgentConfirmationModal();
	const publishing = ref(false);
	async function publish(projectId, agentId) {
		if (publishing.value) return null;
		publishing.value = true;
		try {
			const updated = await publishAgent(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			showMessage({
				title: locale.baseText("agents.publish.toast.published"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.publish"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	async function unpublish(projectId, agentId, agentName) {
		if (publishing.value) return null;
		if (await openAgentConfirmationModal({
			title: locale.baseText("agents.unpublish.modal.title", { interpolate: { name: agentName ?? "" } }),
			description: locale.baseText("agents.unpublish.modal.description"),
			confirmButtonText: locale.baseText("agents.unpublish.modal.button.unpublish"),
			cancelButtonText: locale.baseText("generic.cancel")
		}) !== "confirm") return null;
		publishing.value = true;
		try {
			const updated = await unpublishAgent(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			showMessage({
				title: locale.baseText("agents.publish.toast.unpublished"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.unpublish"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	async function revertToPublished(projectId, agentId) {
		if (publishing.value) return null;
		if (await openAgentConfirmationModal({
			title: locale.baseText("agents.revertToPublished.modal.title"),
			description: locale.baseText("agents.revertToPublished.modal.description"),
			confirmButtonText: locale.baseText("agents.revertToPublished.modal.button.revert"),
			cancelButtonText: locale.baseText("generic.cancel")
		}) !== "confirm") return null;
		publishing.value = true;
		try {
			const updated = await revertAgentToPublished(rootStore.restApiContext, projectId, agentId);
			upsertProjectAgentsListCache(projectId, updated);
			showMessage({
				title: locale.baseText("agents.publish.toast.reverted"),
				type: "success"
			});
			return updated;
		} catch (error) {
			showError(error, locale.baseText("agents.publish.error.revert"));
			return null;
		} finally {
			publishing.value = false;
		}
	}
	return {
		publish,
		unpublish,
		revertToPublished,
		publishing
	};
}
//#endregion
export { useAgentPublish as t };
