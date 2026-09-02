import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, X as onMounted, _ as Fragment, at as resolveComponent, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { t as N8nMenuItem_default } from "./N8nMenuItem-n3_H9HM4.js";
import { Ii as isRouteLocationRaw } from "./workflows.store-QD0eo9S6.js";
import { t as BaseLayout_default } from "./BaseLayout-91CqLUrG.js";
import { t as useRootStore } from "./useRootStore-CvqfnFUt.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DxozP3cY.js";
import { n as useUIStore } from "./ui.store-Bnte4owf.js";
import { t as useAiGateway } from "./useAiGateway-D2lKBWoG.js";
import { t as useSettingsItems } from "./useSettingsItems-CRyuiPuZ.js";
//#region src/app/components/SettingsSidebar.vue?vue&type=script&setup=true&lang.ts
var SettingsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsSidebar",
	emits: ["return"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const rootStore = useRootStore();
		const uiStore = useUIStore();
		const { settingsItems, handleSettingsItemSelect } = useSettingsItems();
		const { fetchWallet, isEnabled } = useAiGateway();
		onMounted(() => {
			if (isEnabled.value) fetchWallet();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.returnButton),
					"data-test-id": "settings-back",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("return"))
				}, [createBaseVNode("i", null, [createVNode(unref(N8nIcon_default), { icon: "arrow-left" })]), createVNode(unref(N8nText_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings")), 1)]),
					_: 1
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.items) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(settingsItems), (item) => {
					return openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: item.id,
						item,
						onClick: ($event) => unref(handleSettingsItemSelect)(item.id)
					}, null, 8, ["item", "onClick"]);
				}), 128))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.versionContainer) }, [createVNode(unref(N8nLink_default), {
					size: "small",
					onClick: _cache[1] || (_cache[1] = ($event) => unref(uiStore).openModal(unref("about")))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.version")) + " " + toDisplayString(unref(rootStore).versionCli), 1)]),
					_: 1
				})], 2)
			], 2);
		};
	}
});
//#endregion
//#region src/app/components/SettingsSidebar.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1ny49_388";
var returnButton = "_returnButton_1ny49_397";
var items = "_items_1ny49_408";
var versionContainer = "_versionContainer_1ny49_414";
var shimmer$1 = "_shimmer_1ny49_1";
var spin$1 = "_spin_1ny49_1";
var opacityPulse$1 = "_opacityPulse_1ny49_1";
var popoverIn$1 = "_popoverIn_1ny49_1";
var fadeIn$1 = "_fadeIn_1ny49_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1ny49_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1ny49_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1ny49_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1ny49_1";
var blurSwapIn$1 = "_blurSwapIn_1ny49_1";
var blurSwapOut$1 = "_blurSwapOut_1ny49_1";
var pulseGlow$1 = "_pulseGlow_1ny49_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1ny49_1";
var fade$1 = "_fade_1ny49_1";
var fadeInUp$1 = "_fadeInUp_1ny49_1";
var fadeInDown$1 = "_fadeInDown_1ny49_1";
var fadeInLeft$1 = "_fadeInLeft_1ny49_1";
var fadeInRight$1 = "_fadeInRight_1ny49_1";
var fadeOut$1 = "_fadeOut_1ny49_1";
var fadeOutDown$1 = "_fadeOutDown_1ny49_1";
var fadeOutUp$1 = "_fadeOutUp_1ny49_1";
var fadeOutLeft$1 = "_fadeOutLeft_1ny49_1";
var fadeOutRight$1 = "_fadeOutRight_1ny49_1";
var ping$1 = "_ping_1ny49_1";
var blinkBackground$1 = "_blinkBackground_1ny49_1";
var typingBlink$1 = "_typingBlink_1ny49_1";
var SettingsSidebar_vue_vue_type_style_index_0_lang_module_default = {
	container,
	returnButton,
	items,
	versionContainer,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1ny49_1",
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
var SettingsSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/layouts/SettingsLayout.vue?vue&type=script&setup=true&lang.ts
var SettingsLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsLayout",
	setup(__props) {
		const router = useRouter();
		const previousRoute = ref();
		function onReturn() {
			const resolvedSettingsRoute = router.resolve({ name: VIEWS.SETTINGS });
			const resolvedPreviousRoute = isRouteLocationRaw(previousRoute.value) ? router.resolve(previousRoute.value) : null;
			const backRoute = !resolvedPreviousRoute || resolvedPreviousRoute.path.startsWith(resolvedSettingsRoute.path) ? { name: VIEWS.HOMEPAGE } : resolvedPreviousRoute;
			router.push(backRoute);
		}
		onMounted(() => {
			previousRoute.value = router.options.history.state.back;
		});
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(SettingsSidebar_default, { onReturn })]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(_component_RouterView)], 2)], 2)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/app/layouts/SettingsLayout.vue?vue&type=style&index=0&lang.module.scss
var contentContainer = "_contentContainer_bb4hh_388";
var content = "_content_bb4hh_388";
var shimmer = "_shimmer_bb4hh_1";
var spin = "_spin_bb4hh_1";
var opacityPulse = "_opacityPulse_bb4hh_1";
var popoverIn = "_popoverIn_bb4hh_1";
var fadeIn = "_fadeIn_bb4hh_1";
var collapsibleSlideDown = "_collapsibleSlideDown_bb4hh_1";
var collapsibleSlideUp = "_collapsibleSlideUp_bb4hh_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_bb4hh_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_bb4hh_1";
var blurSwapIn = "_blurSwapIn_bb4hh_1";
var blurSwapOut = "_blurSwapOut_bb4hh_1";
var pulseGlow = "_pulseGlow_bb4hh_1";
var pulseGlowDelayed = "_pulseGlowDelayed_bb4hh_1";
var fade = "_fade_bb4hh_1";
var fadeInUp = "_fadeInUp_bb4hh_1";
var fadeInDown = "_fadeInDown_bb4hh_1";
var fadeInLeft = "_fadeInLeft_bb4hh_1";
var fadeInRight = "_fadeInRight_bb4hh_1";
var fadeOut = "_fadeOut_bb4hh_1";
var fadeOutDown = "_fadeOutDown_bb4hh_1";
var fadeOutUp = "_fadeOutUp_bb4hh_1";
var fadeOutLeft = "_fadeOutLeft_bb4hh_1";
var fadeOutRight = "_fadeOutRight_bb4hh_1";
var ping = "_ping_bb4hh_1";
var blinkBackground = "_blinkBackground_bb4hh_1";
var typingBlink = "_typingBlink_bb4hh_1";
var SettingsLayout_vue_vue_type_style_index_0_lang_module_default = {
	contentContainer,
	content,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_bb4hh_1",
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
var SettingsLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsLayout_default as default };
