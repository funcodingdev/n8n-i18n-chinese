import { $d as init_runtime_core_esm_bundler, Gu as useLocalStorage, Hd as createElementBlock, Jd as defineComponent, Rd as computed, Vu as useEventListener, ao as recordType, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, mf as renderSlot, np as init_shared_esm_bundler, ns as useRouter, oo as stringType, ro as objectType, to as nullType, wf as watch, zf as ref } from "./vendor-AGzaQJYe.js";
import { Ft as isLlmProvider, HO as _plugin_vue_export_helper_default, It as isLlmProviderModel, Mn as CHAT_VIEW, Sh as useProjectsStore, eh as useCredentialsStore, iS as PROVIDER_CREDENTIAL_TYPE_MAP, ky as LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, lS as chatHubProviderSchema, nx as useSettingsStore, oS as agentIconOrEmojiSchema, sS as chatHubConversationModelSchema, s_ as useUIStore, xO as useDeviceSupport } from "./app-MbtXRI_F.js";
//#region src/features/ai/chatHub/chat.types.ts
var credentialsMapSchema = recordType(chatHubProviderSchema, stringType().or(nullType()));
var chatHubConversationModelWithCachedDisplayNameSchema = chatHubConversationModelSchema.and(objectType({
	cachedDisplayName: stringType().optional(),
	cachedIcon: agentIconOrEmojiSchema.optional()
})).transform((value) => ({
	...value,
	cachedDisplayName: value.cachedDisplayName || (isLlmProviderModel(value) ? value.model : "")
}));
//#endregion
//#region src/features/ai/chatHub/composables/useChatCredentials.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
/**
* Composable for managing chat credentials including auto-selection and user selection.
*/
function useChatCredentials(userId) {
	const isInitialized = ref(false);
	const credentialsStore = useCredentialsStore();
	const settingsStore = useSettingsStore();
	const projectStore = useProjectsStore();
	const selectedCredentials = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_CREDENTIALS(userId), {}, {
		writeDefaults: false,
		shallow: true,
		serializer: {
			read: (value) => {
				try {
					return credentialsMapSchema.parse(JSON.parse(value));
				} catch (error) {
					return {};
				}
			},
			write: (value) => JSON.stringify(value)
		}
	});
	const isCredentialsReady = computed(() => isInitialized.value || credentialsStore.allCredentials.length > 0);
	const autoSelectCredentials = computed(() => Object.fromEntries(chatHubProviderSchema.options.map((provider) => {
		if (!isLlmProvider(provider)) return [provider, null];
		const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
		if (!credentialType) return [provider, null];
		const availableCredentials = credentialsStore.getCredentialsByType(credentialType);
		const settings = settingsStore.moduleSettings?.["chat-hub"]?.providers[provider];
		if (settings?.credentialId && availableCredentials.some((c) => c.id === settings.credentialId)) return [provider, settings.credentialId];
		return [provider, availableCredentials.toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0]?.id ?? null];
	})));
	const credentialsByProvider = computed(() => isCredentialsReady.value ? chatHubProviderSchema.options.reduce((acc, provider) => {
		const cred = selectedCredentials.value[provider] ?? null;
		acc[provider] = cred && credentialsStore.allCredentials.some((c) => c.id === cred) ? cred : autoSelectCredentials.value[provider];
		return acc;
	}, {}) : null);
	function selectCredential(provider, id) {
		selectedCredentials.value = {
			...selectedCredentials.value,
			[provider]: id
		};
	}
	watch(() => projectStore.personalProject, async (personalProject) => {
		if (personalProject) {
			await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchUsableCredentials({ projectId: personalProject.id })]);
			isInitialized.value = true;
		}
	}, { immediate: true });
	return {
		credentialsByProvider,
		selectCredential
	};
}
//#endregion
//#region src/features/ai/chatHub/components/ChatLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler();
var ChatLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ChatLayout",
	setup(__props) {
		const router = useRouter();
		const uiStore = useUIStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		useEventListener(document, "keydown", (event) => {
			if (event.key.toLowerCase() === "o" && isCtrlKeyPressed(event) && event.shiftKey && !uiStore.isAnyModalOpen) {
				event.preventDefault();
				event.stopPropagation();
				router.push({
					name: CHAT_VIEW,
					force: true
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
}), [["__cssModules", { "$style": { component: "_component_1ujic_1" } }]]);
//#endregion
export { useChatCredentials as n, chatHubConversationModelWithCachedDisplayNameSchema as r, ChatLayout_default as t };
