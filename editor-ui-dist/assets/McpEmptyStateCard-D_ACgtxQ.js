import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, T as createCommentVNode, X as onMounted, Z as onUnmounted, bt as withCtx, it as renderSlot, j as createVNode, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { a as vscode_default, c as claude_default, o as openai_default, s as cursor_default } from "./clients.utils-DdGKzU2j.js";
//#region src/features/ai/mcpAccess/components/McpClientLogoCards.vue?vue&type=script&setup=true&lang.ts
var McpClientLogoCards_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpClientLogoCards",
	setup(__props) {
		const CLIENT_ICONS = [
			claude_default,
			cursor_default,
			vscode_default,
			openai_default
		];
		const leftIconIndex = ref(0);
		const rightIconIndex = ref(2);
		const leftFading = ref(false);
		const rightFading = ref(false);
		let animationInterval = null;
		function animateLeft() {
			leftFading.value = true;
			setTimeout(() => {
				leftIconIndex.value = (leftIconIndex.value + 1) % CLIENT_ICONS.length;
				leftFading.value = false;
			}, 300);
		}
		function animateRight() {
			rightFading.value = true;
			setTimeout(() => {
				rightIconIndex.value = (rightIconIndex.value + 1) % CLIENT_ICONS.length;
				rightFading.value = false;
			}, 300);
		}
		onMounted(() => {
			animationInterval = setInterval(() => {
				animateLeft();
				setTimeout(() => {
					animateRight();
				}, 1500);
			}, 3e3);
		});
		onUnmounted(() => {
			if (animationInterval) clearInterval(animationInterval);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.iconCardContainer) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [(openBlock(), createBlock(resolveDynamicComponent(CLIENT_ICONS[leftIconIndex.value]), { class: normalizeClass([_ctx.$style.clientLogo, { [_ctx.$style.fading]: leftFading.value }]) }, null, 8, ["class"]))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [createVNode(unref(N8nIcon_default), {
					icon: "mcp",
					class: normalizeClass(_ctx.$style.mcpIcon)
				}, null, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconCard) }, [(openBlock(), createBlock(resolveDynamicComponent(CLIENT_ICONS[rightIconIndex.value]), { class: normalizeClass([_ctx.$style.clientLogo, { [_ctx.$style.fading]: rightFading.value }]) }, null, 8, ["class"]))], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpClientLogoCards.vue?vue&type=style&index=0&lang.module.scss
var iconCardContainer = "_iconCardContainer_3jz8x_388";
var iconCard = "_iconCard_3jz8x_388";
var clientLogo = "_clientLogo_3jz8x_418";
var mcpIcon = "_mcpIcon_3jz8x_427";
var fading = "_fading_3jz8x_433";
var shimmer$1 = "_shimmer_3jz8x_1";
var spin$1 = "_spin_3jz8x_1";
var opacityPulse$1 = "_opacityPulse_3jz8x_1";
var popoverIn$1 = "_popoverIn_3jz8x_1";
var fadeIn$1 = "_fadeIn_3jz8x_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_3jz8x_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_3jz8x_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_3jz8x_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_3jz8x_1";
var blurSwapIn$1 = "_blurSwapIn_3jz8x_1";
var blurSwapOut$1 = "_blurSwapOut_3jz8x_1";
var pulseGlow$1 = "_pulseGlow_3jz8x_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_3jz8x_1";
var fade$1 = "_fade_3jz8x_1";
var fadeInUp$1 = "_fadeInUp_3jz8x_1";
var fadeInDown$1 = "_fadeInDown_3jz8x_1";
var fadeInLeft$1 = "_fadeInLeft_3jz8x_1";
var fadeInRight$1 = "_fadeInRight_3jz8x_1";
var fadeOut$1 = "_fadeOut_3jz8x_1";
var fadeOutDown$1 = "_fadeOutDown_3jz8x_1";
var fadeOutUp$1 = "_fadeOutUp_3jz8x_1";
var fadeOutLeft$1 = "_fadeOutLeft_3jz8x_1";
var fadeOutRight$1 = "_fadeOutRight_3jz8x_1";
var ping$1 = "_ping_3jz8x_1";
var blinkBackground$1 = "_blinkBackground_3jz8x_1";
var typingBlink$1 = "_typingBlink_3jz8x_1";
var McpClientLogoCards_vue_vue_type_style_index_0_lang_module_default = {
	iconCardContainer,
	iconCard,
	clientLogo,
	mcpIcon,
	fading,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_3jz8x_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var McpClientLogoCards_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpClientLogoCards_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpClientLogoCards_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/mcpAccess/components/McpEmptyStateCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var McpEmptyStateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "McpEmptyStateCard",
	props: {
		title: {},
		description: {},
		surface: {
			type: Boolean,
			default: false
		},
		dataTestId: { default: void 0 }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.card, __props.surface && _ctx.$style.surface]),
				"data-test-id": __props.dataTestId
			}, [
				createVNode(McpClientLogoCards_default, { class: normalizeClass(_ctx.$style.cards) }, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.copy) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "large",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.description), 1)]),
					_: 1
				})], 2),
				_ctx.$slots.actions ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.actions)
				}, [renderSlot(_ctx.$slots, "actions")], 2)) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/ai/mcpAccess/components/McpEmptyStateCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_1lkzd_388";
var surface = "_surface_1lkzd_401";
var cards = "_cards_1lkzd_420";
var copy = "_copy_1lkzd_424";
var actions = "_actions_1lkzd_431";
var shimmer = "_shimmer_1lkzd_1";
var spin = "_spin_1lkzd_1";
var opacityPulse = "_opacityPulse_1lkzd_1";
var popoverIn = "_popoverIn_1lkzd_1";
var fadeIn = "_fadeIn_1lkzd_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1lkzd_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1lkzd_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1lkzd_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1lkzd_1";
var blurSwapIn = "_blurSwapIn_1lkzd_1";
var blurSwapOut = "_blurSwapOut_1lkzd_1";
var pulseGlow = "_pulseGlow_1lkzd_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1lkzd_1";
var fade = "_fade_1lkzd_1";
var fadeInUp = "_fadeInUp_1lkzd_1";
var fadeInDown = "_fadeInDown_1lkzd_1";
var fadeInLeft = "_fadeInLeft_1lkzd_1";
var fadeInRight = "_fadeInRight_1lkzd_1";
var fadeOut = "_fadeOut_1lkzd_1";
var fadeOutDown = "_fadeOutDown_1lkzd_1";
var fadeOutUp = "_fadeOutUp_1lkzd_1";
var fadeOutLeft = "_fadeOutLeft_1lkzd_1";
var fadeOutRight = "_fadeOutRight_1lkzd_1";
var ping = "_ping_1lkzd_1";
var blinkBackground = "_blinkBackground_1lkzd_1";
var typingBlink = "_typingBlink_1lkzd_1";
var McpEmptyStateCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	"mcp-reveal-in": "_mcp-reveal-in_1lkzd_1",
	surface,
	cards,
	copy,
	actions,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1lkzd_1",
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
var McpEmptyStateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(McpEmptyStateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": McpEmptyStateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { McpEmptyStateCard_default as t };
