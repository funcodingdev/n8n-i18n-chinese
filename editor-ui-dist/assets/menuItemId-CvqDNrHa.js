import { $ as openBlock, Gt as unref, N as defineComponent, T as createCommentVNode, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as N8nIcon_default } from "./N8nIcon-CGSLc2wv.js";
import { eo as AGENT_MODEL_PROVIDER_CREDENTIAL_TYPES } from "./src-JwBmTNgK.js";
import { t as CredentialIcon_default } from "./CredentialIcon-j0fHvGTB.js";
//#region src/features/agents/model-providers.ts
/**
* Presentation only. The provider's credential types live in
* `AGENT_MODEL_PROVIDER_CREDENTIAL_TYPES` (`@n8n/api-types`) so the backend's
* n8n Connect gate and this picker cannot drift apart.
*/
var AGENT_MODEL_PROVIDER_DEFINITIONS = {
	openai: { displayName: "OpenAI" },
	anthropic: { displayName: "Anthropic" },
	google: { displayName: "Google" },
	"azure-openai": { displayName: "Azure OpenAI" },
	"aws-bedrock": {
		displayName: "AWS Bedrock",
		isAggregator: true
	},
	xai: { displayName: "xAI" },
	groq: { displayName: "Groq" },
	openrouter: {
		displayName: "OpenRouter",
		isAggregator: true
	},
	deepseek: { displayName: "DeepSeek" },
	cohere: { displayName: "Cohere" },
	mistral: { displayName: "Mistral" },
	vercel: {
		displayName: "Vercel AI Gateway",
		isAggregator: true
	},
	nvidia: { displayName: "NVIDIA" }
};
function getProviderCredentialTypes(provider) {
	return AGENT_MODEL_PROVIDER_CREDENTIAL_TYPES[provider];
}
//#endregion
//#region src/features/agents/components/model-selector/ModelSelectorTriggerIcon.vue
var ModelSelectorTriggerIcon_default = /* @__PURE__ */ defineComponent({
	__name: "ModelSelectorTriggerIcon",
	props: { credentialTypeName: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.credentialTypeName ? (openBlock(), createBlock(CredentialIcon_default, {
				key: 0,
				"credential-type-name": __props.credentialTypeName,
				size: 18
			}, null, 8, ["credential-type-name"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 1,
				icon: "bot",
				size: "medium"
			}));
		};
	}
});
//#endregion
//#region src/features/agents/components/model-selector/ModelSelectorItemLeadingIcon.vue
var ModelSelectorItemLeadingIcon_default = /* @__PURE__ */ defineComponent({
	__name: "ModelSelectorItemLeadingIcon",
	props: { item: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return __props.item.data?.leadingIcon ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: __props.item.data.leadingIcon,
				size: "large"
			}, null, 8, ["icon"])) : __props.item.data?.credentialType ? (openBlock(), createBlock(CredentialIcon_default, {
				key: 1,
				"credential-type-name": __props.item.data.credentialType,
				size: 16
			}, null, 8, ["credential-type-name"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/agents/components/model-selector/menuItemId.ts
/**
* Model selector dropdown item ids encode `provider::action::value`, e.g.
* "openai::model::gpt-5-mini" or "anthropic::credential::abc123".
*/
function buildMenuItemId(provider, action, value) {
	return `${provider}::${action}::${encodeURIComponent(value)}`;
}
function parseMenuItemId(id) {
	const [provider, action, rawValue] = id.split("::");
	if (!provider || !action || !rawValue) return null;
	return {
		provider,
		action,
		value: decodeURIComponent(rawValue)
	};
}
//#endregion
export { AGENT_MODEL_PROVIDER_DEFINITIONS as a, ModelSelectorTriggerIcon_default as i, parseMenuItemId as n, getProviderCredentialTypes as o, ModelSelectorItemLeadingIcon_default as r, buildMenuItemId as t };
