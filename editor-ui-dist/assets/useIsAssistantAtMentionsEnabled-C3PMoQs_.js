import { $d as init_runtime_core_esm_bundler, Rd as computed } from "./vendor-AGzaQJYe.js";
import { lC as AI_ASSISTANT_AT_MENTIONS_FLAG, q_ as usePostHog } from "./app-MbtXRI_F.js";
//#region src/features/ai/assistant-at-mentions/composables/useIsAssistantAtMentionsEnabled.ts
init_runtime_core_esm_bundler();
function useIsAssistantAtMentionsEnabled() {
	const posthog = usePostHog();
	return computed(() => posthog.isFeatureEnabled(AI_ASSISTANT_AT_MENTIONS_FLAG));
}
//#endregion
export { useIsAssistantAtMentionsEnabled as t };
