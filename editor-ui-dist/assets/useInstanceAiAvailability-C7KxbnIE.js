import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as useSettingsStore } from "./settings.store-C7bZgKnf.js";
import { t as hasPermission } from "./permissions-DxB9pevK.js";
//#region src/features/ai/instanceAi/instanceAiPermissions.ts
/** Instance AI settings and opt-in flows require this scope. */
function canManageInstanceAi() {
	return hasPermission(["rbac"], { rbac: { scope: "instanceAi:manage" } });
}
/** Sending messages to Instance AI (and reaching the chat view) requires this scope. */
function canMessageInstanceAi() {
	return hasPermission(["rbac"], { rbac: { scope: "instanceAi:message" } });
}
//#endregion
//#region src/features/ai/instanceAi/composables/useInstanceAiAvailability.ts
/**
* Whether Instance AI can be used right now: the module is active, enabled,
* ready for members (or the user can finish admin setup), and the user can
* message it. This is the canonical gate for Instance AI entry points.
*/
function useInstanceAiAvailable() {
	const settingsStore = useSettingsStore();
	return computed(() => settingsStore.isModuleActive("instance-ai") && settingsStore.moduleSettings["instance-ai"]?.enabled !== false && (settingsStore.moduleSettings["instance-ai"]?.setupCompleted === true || canManageInstanceAi()) && canMessageInstanceAi());
}
//#endregion
export { canManageInstanceAi as n, canMessageInstanceAi as r, useInstanceAiAvailable as t };
