import { It as ref } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { ar as STORES, cr as defineStore } from "./useRootStore-CLEJA2KF.js";
//#region ../@n8n/stores/src/notifications.store.ts
/**
* Notification state extracted from `ui.store`: the suppression flags read by
* the toast layer.
*/
var useNotificationsStore = defineStore(STORES.NOTIFICATIONS, () => {
	const areNotificationsSuppressed = ref(false);
	const allowErrorNotificationsWhenSuppressed = ref(false);
	const setNotificationsSuppressed = (suppressed, options) => {
		areNotificationsSuppressed.value = suppressed;
		allowErrorNotificationsWhenSuppressed.value = suppressed && options?.allowErrors === true;
	};
	return {
		areNotificationsSuppressed,
		allowErrorNotificationsWhenSuppressed,
		setNotificationsSuppressed
	};
});
//#endregion
export { useNotificationsStore as t };
