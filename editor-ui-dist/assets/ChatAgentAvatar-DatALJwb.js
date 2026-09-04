import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, bt as withCtx, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { wt as useCredentialsStore } from "./workflows.store-qP-dtzSs.js";
import { j as PROVIDER_CREDENTIAL_TYPE_MAP } from "./src-B255AdRt.js";
import { t as CredentialIcon_default } from "./CredentialIcon-Bu4Lu15x.js";
import { E as workflowAgentDefaultIcon, S as personalAgentDefaultIcon, v as isLlmProviderModel } from "./chat.utils-yr8r7OPi.js";
//#region src/features/ai/chatHub/components/ChatAgentAvatar.vue?vue&type=script&setup=true&lang.ts
var ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentAvatar",
	props: {
		agent: {},
		size: {},
		tooltip: { type: Boolean }
	},
	setup(__props) {
		const credentialsStore = useCredentialsStore();
		const isCredentialsIconReady = computed(() => credentialsStore.allCredentialTypes.length > 0);
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"show-after": 100,
				placement: "left",
				disabled: !__props.tooltip
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.agent?.name || unref(i18n).baseText("chatHub.agent.unavailableAgent")), 1)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.container, _ctx.$attrs.class]) }, [__props.agent?.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.emoji, _ctx.$style[__props.size]])
				}, toDisplayString(__props.agent.icon.value), 3)) : !__props.agent || !unref(isLlmProviderModel)(__props.agent.model) ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					color: __props.size === "sm" ? "text-base" : "text-light",
					class: normalizeClass([_ctx.$style.n8nIcon, _ctx.$style[__props.size]]),
					icon: __props.agent?.icon?.value ?? (__props.agent?.model.provider === "n8n" ? unref(workflowAgentDefaultIcon) : unref(personalAgentDefaultIcon)).value,
					size: __props.size === "xl" ? "xxlarge" : __props.size === "lg" ? "xxlarge" : __props.size === "sm" ? "large" : "xlarge"
				}, null, 8, [
					"color",
					"class",
					"icon",
					"size"
				])) : (openBlock(), createBlock(CredentialIcon_default, {
					key: 2,
					class: normalizeClass([_ctx.$style.credentialsIcon, { [_ctx.$style.isReady]: isCredentialsIconReady.value }]),
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[__props.agent.model.provider],
					size: __props.size === "xl" ? 40 : __props.size === "sm" ? 16 : __props.size === "lg" ? 40 : 20
				}, null, 8, [
					"class",
					"credential-type-name",
					"size"
				]))], 2)]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatAgentAvatar.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_xe5w2_388";
var n8nIcon = "_n8nIcon_xe5w2_395";
var lg = "_lg_xe5w2_398";
var xl = "_xl_xe5w2_405";
var emoji = "_emoji_xe5w2_410";
var sm = "_sm_xe5w2_415";
var md = "_md_xe5w2_419";
var credentialsIcon = "_credentialsIcon_xe5w2_435";
var isReady = "_isReady_xe5w2_438";
var shimmer = "_shimmer_xe5w2_1";
var spin = "_spin_xe5w2_1";
var opacityPulse = "_opacityPulse_xe5w2_1";
var popoverIn = "_popoverIn_xe5w2_1";
var fadeIn = "_fadeIn_xe5w2_1";
var collapsibleSlideDown = "_collapsibleSlideDown_xe5w2_1";
var collapsibleSlideUp = "_collapsibleSlideUp_xe5w2_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_xe5w2_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_xe5w2_1";
var blurSwapIn = "_blurSwapIn_xe5w2_1";
var blurSwapOut = "_blurSwapOut_xe5w2_1";
var pulseGlow = "_pulseGlow_xe5w2_1";
var pulseGlowDelayed = "_pulseGlowDelayed_xe5w2_1";
var fade = "_fade_xe5w2_1";
var fadeInUp = "_fadeInUp_xe5w2_1";
var fadeInDown = "_fadeInDown_xe5w2_1";
var fadeInLeft = "_fadeInLeft_xe5w2_1";
var fadeInRight = "_fadeInRight_xe5w2_1";
var fadeOut = "_fadeOut_xe5w2_1";
var fadeOutDown = "_fadeOutDown_xe5w2_1";
var fadeOutUp = "_fadeOutUp_xe5w2_1";
var fadeOutLeft = "_fadeOutLeft_xe5w2_1";
var fadeOutRight = "_fadeOutRight_xe5w2_1";
var ping = "_ping_xe5w2_1";
var blinkBackground = "_blinkBackground_xe5w2_1";
var typingBlink = "_typingBlink_xe5w2_1";
var ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default = {
	container,
	n8nIcon,
	lg,
	xl,
	emoji,
	sm,
	md,
	credentialsIcon,
	isReady,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_xe5w2_1",
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
var ChatAgentAvatar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatAgentAvatar_default as t };
