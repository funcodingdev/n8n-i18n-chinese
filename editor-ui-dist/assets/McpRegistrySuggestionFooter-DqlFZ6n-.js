import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as usePostHog } from "./posthog.store-BwYzuzzF.js";
import { bt as SUGGEST_SERVICE_FORM_URL_REMOTE_CONFIG_KEY } from "./constants-C8twx5N6.js";
//#region src/app/components/SuggestionFooter.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["href"];
var SuggestionFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SuggestionFooter",
	props: {
		prompt: {},
		action: {},
		url: {}
	},
	setup(__props) {
		const props = __props;
		const suggestionUrl = computed(() => {
			if (!props.url) return void 0;
			try {
				return new URL(props.url).protocol === "https:" ? props.url : void 0;
			} catch {
				return;
			}
		});
		return (_ctx, _cache) => {
			return suggestionUrl.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.footer),
				"data-test-id": "suggest-tool-footer"
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.prompt), 1)]),
				_: 1
			}), createBaseVNode("a", {
				class: normalizeClass([_ctx.$style.link, "ignore-key-press-node-creator"]),
				href: suggestionUrl.value,
				target: "_blank",
				rel: "noopener noreferrer"
			}, toDisplayString(__props.action), 11, _hoisted_1)], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/app/components/SuggestionFooter.vue?vue&type=style&index=0&lang.module.scss
var footer = "_footer_1u9xr_389";
var link = "_link_1u9xr_397";
var shimmer = "_shimmer_1u9xr_1";
var spin = "_spin_1u9xr_1";
var opacityPulse = "_opacityPulse_1u9xr_1";
var popoverIn = "_popoverIn_1u9xr_1";
var fadeIn = "_fadeIn_1u9xr_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1u9xr_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1u9xr_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1u9xr_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1u9xr_1";
var blurSwapIn = "_blurSwapIn_1u9xr_1";
var blurSwapOut = "_blurSwapOut_1u9xr_1";
var pulseGlow = "_pulseGlow_1u9xr_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1u9xr_1";
var fade = "_fade_1u9xr_1";
var fadeInUp = "_fadeInUp_1u9xr_1";
var fadeInDown = "_fadeInDown_1u9xr_1";
var fadeInLeft = "_fadeInLeft_1u9xr_1";
var fadeInRight = "_fadeInRight_1u9xr_1";
var fadeOut = "_fadeOut_1u9xr_1";
var fadeOutDown = "_fadeOutDown_1u9xr_1";
var fadeOutUp = "_fadeOutUp_1u9xr_1";
var fadeOutLeft = "_fadeOutLeft_1u9xr_1";
var fadeOutRight = "_fadeOutRight_1u9xr_1";
var ping = "_ping_1u9xr_1";
var blinkBackground = "_blinkBackground_1u9xr_1";
var typingBlink = "_typingBlink_1u9xr_1";
var SuggestionFooter_vue_vue_type_style_index_0_lang_module_default = {
	footer,
	link,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1u9xr_1",
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
var SuggestionFooter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SuggestionFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SuggestionFooter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/McpRegistrySuggestionFooter.vue
var McpRegistrySuggestionFooter_default = /* @__PURE__ */ defineComponent({
	__name: "McpRegistrySuggestionFooter",
	props: {
		prompt: {},
		action: {}
	},
	setup(__props) {
		const posthogStore = usePostHog();
		const suggestionUrl = computed(() => {
			const payload = posthogStore.getFeatureFlagPayload(SUGGEST_SERVICE_FORM_URL_REMOTE_CONFIG_KEY);
			return typeof payload === "string" ? payload : void 0;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(SuggestionFooter_default, {
				prompt: __props.prompt,
				action: __props.action,
				url: suggestionUrl.value
			}, null, 8, [
				"prompt",
				"action",
				"url"
			]);
		};
	}
});
//#endregion
export { SuggestionFooter_default as n, McpRegistrySuggestionFooter_default as t };
