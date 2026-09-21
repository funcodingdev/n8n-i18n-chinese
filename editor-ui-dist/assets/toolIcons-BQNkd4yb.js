import { t as useTelemetry } from "./useTelemetry-CgKpOMtU.js";
import { a as TELEMETRY_EVENT } from "./src-BmGqsjIb.js";
//#region src/features/ai/instanceAi/instanceAiMcp.telemetry.ts
function useInstanceAiMcpTelemetry() {
	const telemetry = useTelemetry();
	return {
		trackToolsListOpened(source) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.TOOLS_LIST_OPENED, { source });
		},
		trackSettingsOpened(serverSlug, source) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_SETTINGS_OPENED, {
				server_slug: serverSlug,
				source
			});
		},
		trackFirstCredentialConnectionStart(serverSlug) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_FIRST_CREDENTIAL_CONNECTION_STARTED, { server_slug: serverSlug });
		},
		trackCredentialDropdownOpened(serverSlug) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_CREDENTIAL_DROPDOWN_OPENED, { server_slug: serverSlug });
		},
		trackExistingCredentialSelected(serverSlug) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_EXISTING_CREDENTIAL_SELECTED, { server_slug: serverSlug });
		},
		trackNewCredentialConnectionStart(serverSlug) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_NEW_CREDENTIAL_CONNECTION_STARTED, { server_slug: serverSlug });
		},
		trackToolFilterSettingsUpdated(serverSlug, inclusionMode) {
			telemetry.track(TELEMETRY_EVENT.INSTANCE_AI.MCP_TOOL_FILTER_SETTINGS_UPDATED, {
				server_slug: serverSlug,
				inclusion_mode: inclusionMode
			});
		}
	};
}
//#endregion
//#region src/features/ai/instanceAi/toolIcons.ts
function pickIconForTheme(icons, appliedTheme) {
	if (icons.length === 0) return null;
	const themed = icons.find((i) => i.theme === appliedTheme);
	if (themed) return themed.src;
	return (icons.find((i) => i.theme === void 0) ?? icons[0]).src;
}
function iconForTool(icons, appliedTheme) {
	const src = pickIconForTheme(icons, appliedTheme);
	return src ? {
		type: "file",
		src
	} : {
		type: "icon",
		name: "mcp"
	};
}
//#endregion
export { useInstanceAiMcpTelemetry as n, iconForTool as t };
