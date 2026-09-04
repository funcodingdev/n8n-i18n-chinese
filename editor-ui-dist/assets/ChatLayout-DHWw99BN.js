import { $ as openBlock, E as createElementBlock, It as ref, N as defineComponent, S as computed, gt as watch, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { h as useEventListener, y as useLocalStorage } from "./dist-BKkqSB6h.js";
import { t as useDeviceSupport } from "./useDeviceSupport-CZosAKtc.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { vn as useProjectsStore, wt as useCredentialsStore } from "./workflows.store-qP-dtzSs.js";
import { Co as nullType, Do as stringType, Eo as recordType, L as chatHubProviderSchema, N as agentIconOrEmojiSchema, P as chatHubConversationModelSchema, To as objectType, j as PROVIDER_CREDENTIAL_TYPE_MAP } from "./src-B255AdRt.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { ki as LOCAL_STORAGE_CHAT_HUB_CREDENTIALS } from "./constants-CMdL1Kzl.js";
import { n as useUIStore } from "./ui.store-xzfQIfPK.js";
import { c as CHAT_VIEW } from "./constants-zeVT1Ciq.js";
import { _ as isLlmProvider, v as isLlmProviderModel } from "./chat.utils-yr8r7OPi.js";
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
var ChatLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
});
//#endregion
//#region src/features/ai/chatHub/components/ChatLayout.vue?vue&type=style&index=0&lang.module.scss
var component = "_component_47cxj_388";
var shimmer = "_shimmer_47cxj_1";
var spin = "_spin_47cxj_1";
var opacityPulse = "_opacityPulse_47cxj_1";
var popoverIn = "_popoverIn_47cxj_1";
var fadeIn = "_fadeIn_47cxj_1";
var collapsibleSlideDown = "_collapsibleSlideDown_47cxj_1";
var collapsibleSlideUp = "_collapsibleSlideUp_47cxj_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_47cxj_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_47cxj_1";
var blurSwapIn = "_blurSwapIn_47cxj_1";
var blurSwapOut = "_blurSwapOut_47cxj_1";
var pulseGlow = "_pulseGlow_47cxj_1";
var pulseGlowDelayed = "_pulseGlowDelayed_47cxj_1";
var fade = "_fade_47cxj_1";
var fadeInUp = "_fadeInUp_47cxj_1";
var fadeInDown = "_fadeInDown_47cxj_1";
var fadeInLeft = "_fadeInLeft_47cxj_1";
var fadeInRight = "_fadeInRight_47cxj_1";
var fadeOut = "_fadeOut_47cxj_1";
var fadeOutDown = "_fadeOutDown_47cxj_1";
var fadeOutUp = "_fadeOutUp_47cxj_1";
var fadeOutLeft = "_fadeOutLeft_47cxj_1";
var fadeOutRight = "_fadeOutRight_47cxj_1";
var ping = "_ping_47cxj_1";
var blinkBackground = "_blinkBackground_47cxj_1";
var typingBlink = "_typingBlink_47cxj_1";
var ChatLayout_vue_vue_type_style_index_0_lang_module_default = {
	component,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_47cxj_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var ChatLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useChatCredentials as n, chatHubConversationModelWithCachedDisplayNameSchema as r, ChatLayout_default as t };
