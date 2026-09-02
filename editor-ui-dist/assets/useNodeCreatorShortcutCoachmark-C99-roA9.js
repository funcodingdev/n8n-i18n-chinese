import { $ as openBlock, E as createElementBlock, It as ref, N as defineComponent, Nt as onScopeDispose, S as computed, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as canvasEventBus } from "./canvas.eventBus-BRuynQ7a.js";
import { t as useCalloutHelpers } from "./useCalloutHelpers-K1d8fpHe.js";
//#region ../@n8n/design-system/src/components/N8nButtonList/ButtonList.vue?vue&type=script&setup=true&lang.ts
var ButtonList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ButtonList",
	props: { orientation: { default: "horizontal" } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.root, __props.orientation === "vertical" ? _ctx.$style.vertical : _ctx.$style.horizontal]),
				role: "group"
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region ../@n8n/design-system/src/components/N8nButtonList/ButtonList.vue?vue&type=style&index=0&lang.module.scss
var root = "_root_ekdgg_388";
var horizontal = "_horizontal_ekdgg_394";
var vertical = "_vertical_ekdgg_399";
var shimmer = "_shimmer_ekdgg_1";
var spin = "_spin_ekdgg_1";
var opacityPulse = "_opacityPulse_ekdgg_1";
var popoverIn = "_popoverIn_ekdgg_1";
var fadeIn = "_fadeIn_ekdgg_1";
var collapsibleSlideDown = "_collapsibleSlideDown_ekdgg_1";
var collapsibleSlideUp = "_collapsibleSlideUp_ekdgg_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_ekdgg_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_ekdgg_1";
var blurSwapIn = "_blurSwapIn_ekdgg_1";
var blurSwapOut = "_blurSwapOut_ekdgg_1";
var pulseGlow = "_pulseGlow_ekdgg_1";
var pulseGlowDelayed = "_pulseGlowDelayed_ekdgg_1";
var fade = "_fade_ekdgg_1";
var fadeInUp = "_fadeInUp_ekdgg_1";
var fadeInDown = "_fadeInDown_ekdgg_1";
var fadeInLeft = "_fadeInLeft_ekdgg_1";
var fadeInRight = "_fadeInRight_ekdgg_1";
var fadeOut = "_fadeOut_ekdgg_1";
var fadeOutDown = "_fadeOutDown_ekdgg_1";
var fadeOutUp = "_fadeOutUp_ekdgg_1";
var fadeOutLeft = "_fadeOutLeft_ekdgg_1";
var fadeOutRight = "_fadeOutRight_ekdgg_1";
var ping = "_ping_ekdgg_1";
var blinkBackground = "_blinkBackground_ekdgg_1";
var typingBlink = "_typingBlink_ekdgg_1";
var ButtonList_vue_vue_type_style_index_0_lang_module_default = {
	root,
	horizontal,
	vertical,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_ekdgg_1",
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
//#endregion
//#region ../@n8n/design-system/src/components/N8nButtonList/index.ts
var N8nButtonList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ButtonList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ButtonList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/nodeCreator/composables/useNodeCreatorShortcutCoachmark.ts
var NODE_CREATOR_SHORTCUT_COACHMARK_KEY = "node-creator-shortcut-coachmark";
function useNodeCreatorShortcutCoachmark() {
	const { isCalloutDismissed, dismissCallout } = useCalloutHelpers();
	const isTabPressed = ref(false);
	const shouldShowCoachmark = computed(() => {
		return isTabPressed.value && !isCalloutDismissed("node-creator-shortcut-coachmark");
	});
	function onDeprecatedTabShortcut() {
		isTabPressed.value = true;
	}
	canvasEventBus.on("deprecated:tab-shortcut", onDeprecatedTabShortcut);
	onScopeDispose(() => {
		canvasEventBus.off("deprecated:tab-shortcut", onDeprecatedTabShortcut);
	});
	async function onDismissCoachmark() {
		isTabPressed.value = false;
		await dismissCallout(NODE_CREATOR_SHORTCUT_COACHMARK_KEY);
	}
	return {
		shouldShowCoachmark,
		onDismissCoachmark
	};
}
//#endregion
export { useNodeCreatorShortcutCoachmark as n, N8nButtonList_default as r, NODE_CREATOR_SHORTCUT_COACHMARK_KEY as t };
