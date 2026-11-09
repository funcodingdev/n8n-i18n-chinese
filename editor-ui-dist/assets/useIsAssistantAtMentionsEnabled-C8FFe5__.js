import { Ld as computed, Qd as init_runtime_core_esm_bundler } from "./vendor-BA8kaY8M.js";
import { AS as AI_ASSISTANT_AT_MENTIONS_FLAG, Gg as usePostHog } from "./app-DbOOaPK6.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
init_runtime_core_esm_bundler();
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };
