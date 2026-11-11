import { Jh as AGENT_CONFIRMATION_MODAL_KEY, hy as MODAL_CONFIRM, my as MODAL_CLOSE, py as MODAL_CANCEL, s_ as useUIStore } from "./app-MbtXRI_F.js";
//#region src/features/agents/composables/useAgentConfirmationModal.ts
function useAgentConfirmationModal() {
	const uiStore = useUIStore();
	async function openAgentConfirmationModal(options) {
		return await new Promise((resolve) => {
			uiStore.openModalWithData({
				name: AGENT_CONFIRMATION_MODAL_KEY,
				data: {
					...options,
					onConfirm: () => {
						resolve(MODAL_CONFIRM);
					},
					onCancel: () => {
						resolve(MODAL_CANCEL);
					},
					onClose: () => {
						resolve(MODAL_CLOSE);
					}
				}
			});
		});
	}
	return { openAgentConfirmationModal };
}
//#endregion
export { useAgentConfirmationModal as t };
