import { $ as openBlock, N as defineComponent, S as computed, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { $a as AGENT_VECTOR_STORE_CREDENTIAL_TYPES } from "./src-C3aqUyDp.js";
import { t as CredentialsDropdown_default } from "./CredentialsDropdown-Xwidm8CT.js";
//#region src/features/agents/vector-stores.ts
var AGENT_VECTOR_STORE_PROVIDER_DEFINITIONS = {
	pinecone: {
		displayName: "Pinecone",
		credentialType: AGENT_VECTOR_STORE_CREDENTIAL_TYPES.pinecone
	},
	supabase: {
		displayName: "Supabase",
		credentialType: AGENT_VECTOR_STORE_CREDENTIAL_TYPES.supabase
	},
	qdrant: {
		displayName: "Qdrant",
		credentialType: AGENT_VECTOR_STORE_CREDENTIAL_TYPES.qdrant
	},
	postgres: {
		displayName: "Postgres",
		credentialType: AGENT_VECTOR_STORE_CREDENTIAL_TYPES.postgres
	}
};
var AGENT_EMBEDDING_MODEL_OPTIONS = [
	{
		model: "openai/text-embedding-3-small",
		dimensions: 1536
	},
	{
		model: "openai/text-embedding-3-large",
		dimensions: 3072
	},
	{
		model: "openai/text-embedding-ada-002",
		dimensions: 1536
	},
	{
		model: "google/gemini-embedding-001",
		dimensions: 3072
	},
	{
		model: "google/text-embedding-004",
		dimensions: 768
	},
	{
		model: "mistral/mistral-embed",
		dimensions: 1024
	},
	{
		model: "cohere/embed-english-v3.0",
		dimensions: 1024
	},
	{
		model: "cohere/embed-multilingual-v3.0",
		dimensions: 1024
	}
];
var AGENT_EMBEDDING_PROVIDERS = [
	"openai",
	"google",
	"mistral",
	"cohere"
];
function isAgentEmbeddingProvider(value) {
	return AGENT_EMBEDDING_PROVIDERS.some((provider) => provider === value);
}
function getEmbeddingModelProvider(model) {
	const prefix = model.split("/")[0];
	return isAgentEmbeddingProvider(prefix) ? prefix : null;
}
function getEmbeddingModelsForProvider(provider) {
	return AGENT_EMBEDDING_MODEL_OPTIONS.filter((option) => getEmbeddingModelProvider(option.model) === provider);
}
//#endregion
//#region src/features/agents/components/AgentCredentialSelect.vue?vue&type=script&setup=true&lang.ts
var AgentCredentialSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentCredentialSelect",
	props: {
		modelValue: {},
		credentials: {},
		placeholder: {},
		dataTestId: {},
		credentialPermissions: {},
		loading: { type: Boolean },
		disabled: { type: Boolean },
		size: { default: "small" }
	},
	emits: ["update:modelValue", "create"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const credentialOptions = computed(() => [...props.credentials].sort((a, b) => {
			const byName = a.name.localeCompare(b.name, void 0, { sensitivity: "base" });
			return byName === 0 ? a.id.localeCompare(b.id) : byName;
		}).map((credential) => ({
			id: credential.id,
			name: credential.name,
			typeDisplayName: credential.typeDisplayName,
			homeProject: credential.homeProject
		})));
		function onCredentialSelected(credentialId) {
			emit("update:modelValue", credentialId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(CredentialsDropdown_default, {
				class: normalizeClass(_ctx.$style[props.size]),
				"credential-options": credentialOptions.value,
				"selected-credential-id": __props.modelValue ?? null,
				permissions: __props.credentialPermissions,
				placeholder: __props.placeholder,
				loading: __props.loading,
				disabled: __props.disabled,
				"data-test-id": __props.dataTestId,
				onCredentialSelected,
				onNewCredential: _cache[0] || (_cache[0] = ($event) => emit("create"))
			}, null, 8, [
				"class",
				"credential-options",
				"selected-credential-id",
				"permissions",
				"placeholder",
				"loading",
				"disabled",
				"data-test-id"
			]);
		};
	}
});
//#endregion
//#region src/features/agents/components/AgentCredentialSelect.vue?vue&type=style&index=0&lang.module.scss
var xlarge = "_xlarge_1xf0i_388";
var large = "_large_1xf0i_393";
var medium = "_medium_1xf0i_398";
var small = "_small_1xf0i_403";
var mini = "_mini_1xf0i_408";
var shimmer = "_shimmer_1xf0i_1";
var spin = "_spin_1xf0i_1";
var opacityPulse = "_opacityPulse_1xf0i_1";
var popoverIn = "_popoverIn_1xf0i_1";
var fadeIn = "_fadeIn_1xf0i_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1xf0i_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1xf0i_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1xf0i_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1xf0i_1";
var blurSwapIn = "_blurSwapIn_1xf0i_1";
var blurSwapOut = "_blurSwapOut_1xf0i_1";
var pulseGlow = "_pulseGlow_1xf0i_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1xf0i_1";
var fade = "_fade_1xf0i_1";
var fadeInUp = "_fadeInUp_1xf0i_1";
var fadeInDown = "_fadeInDown_1xf0i_1";
var fadeInLeft = "_fadeInLeft_1xf0i_1";
var fadeInRight = "_fadeInRight_1xf0i_1";
var fadeOut = "_fadeOut_1xf0i_1";
var fadeOutDown = "_fadeOutDown_1xf0i_1";
var fadeOutUp = "_fadeOutUp_1xf0i_1";
var fadeOutLeft = "_fadeOutLeft_1xf0i_1";
var fadeOutRight = "_fadeOutRight_1xf0i_1";
var ping = "_ping_1xf0i_1";
var blinkBackground = "_blinkBackground_1xf0i_1";
var typingBlink = "_typingBlink_1xf0i_1";
var AgentCredentialSelect_vue_vue_type_style_index_0_lang_module_default = {
	xlarge,
	large,
	medium,
	small,
	mini,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1xf0i_1",
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
var AgentCredentialSelect_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentCredentialSelect_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentCredentialSelect_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { getEmbeddingModelsForProvider as a, getEmbeddingModelProvider as i, AGENT_EMBEDDING_PROVIDERS as n, isAgentEmbeddingProvider as o, AGENT_VECTOR_STORE_PROVIDER_DEFINITIONS as r, AgentCredentialSelect_default as t };
