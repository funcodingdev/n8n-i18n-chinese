import { S as computed } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { $t as useRouteWorkflowId, T as createWorkflowDocumentId, k as useWorkflowDocumentStore, t as useWorkflowsStore, un as useNDVStore } from "./workflows.store-QD0eo9S6.js";
import { fr as defineStore, lr as STORES, t as useRootStore } from "./useRootStore-CvqfnFUt.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { t as useUsersStore } from "./users.store-C9pohnYN.js";
import { t as setExternalHooks } from "./useExternalHooks-ItRXpQL3.js";
import { n as useUIStore } from "./ui.store-Bnte4owf.js";
//#region src/app/stores/webhooks.store.ts
var useWebhooksStore = defineStore(STORES.WEBHOOKS, () => {
	const routeWorkflowId = useRouteWorkflowId();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(routeWorkflowId.value)));
	const ndvStore = computed(() => useNDVStore(workflowDocumentStore.value.documentId));
	return {
		...useRootStore(),
		...useWorkflowsStore(),
		...useUIStore(),
		...useUsersStore(),
		workflowDocumentStore,
		ndvStore,
		...useSettingsStore()
	};
});
//#endregion
//#region src/app/composables/useExternalHooks.ts
/**
* Concrete runner. Loosely typed to match the `@n8n/composables` contract so it
* can be registered for package-side consumers; the exported {@link runExternalHook}
* wrapper below re-adds per-event type-checking for direct call sites.
*/
async function runExternalHookInternal(eventName, metadata) {
	if (!window.n8nExternalHooks) return;
	const store = useWebhooksStore();
	const [resource, operator] = eventName.split(".");
	const context = window.n8nExternalHooks[resource];
	if (context?.[operator]) {
		const hookMethods = context[operator];
		for (const hookMethod of hookMethods) await hookMethod(store, metadata);
	}
}
async function runExternalHook(eventName, metadata) {
	await runExternalHookInternal(eventName, metadata);
}
setExternalHooks({ run: runExternalHookInternal });
function useExternalHooks() {
	return { run: runExternalHook };
}
//#endregion
export { useExternalHooks as t };
