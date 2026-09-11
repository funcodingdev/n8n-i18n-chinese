import { L as hasInjectionContext, R as inject } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
//#region ../@n8n/composables/src/registries/telemetryRegistry.ts
/**
* Injection key for the telemetry instance. The application provides it at
* bootstrap; components may override it (e.g. a pop-out window with its own
* instance). `useTelemetry` reads it when called inside an injection context.
*/
var TelemetryKey = Symbol("Telemetry");
var registeredTelemetry;
/**
* Register the application's telemetry instance. Called once at bootstrap by
* the editor-ui telemetry plugin so package-side `useTelemetry` can return it
* from any context, including outside of component setup.
*/
function setTelemetry(instance) {
	registeredTelemetry = instance;
}
/** The instance registered via {@link setTelemetry}, if bootstrap has run. */
function getRegisteredTelemetry() {
	return registeredTelemetry;
}
//#endregion
//#region ../@n8n/composables/src/useTelemetry.ts
/**
* Null-object telemetry used when no instance has been registered (e.g. in
* tests that never install the plugin). Telemetry is best-effort and must never
* throw or break the UI, so every method is a no-op. Any registered instance
* (via `setTelemetry` or `TelemetryKey`) takes precedence.
*
* A plain object literal (not a `Proxy`) so method identity is stable, spies
* attach, `'track' in noopTelemetry` holds, and there is no accidental `then`
* that would make `await useTelemetry()` hang.
*/
var noopTelemetry = {
	init() {},
	identify() {},
	track() {},
	page() {},
	reset() {},
	flushPageEvents() {},
	trackAskAI() {},
	trackAiTransform() {},
	trackNodeParametersValuesChange() {}
};
/**
* Returns the active telemetry instance. Resolution order: a component-provided
* instance (via `TelemetryKey`), then the app-registered singleton (via
* `setTelemetry`), then a no-op fallback.
*/
function useTelemetry() {
	const instance = (hasInjectionContext() ? inject(TelemetryKey, null) : null) ?? getRegisteredTelemetry();
	if (instance) return instance;
	return noopTelemetry;
}
//#endregion
export { TelemetryKey as n, setTelemetry as r, useTelemetry as t };
