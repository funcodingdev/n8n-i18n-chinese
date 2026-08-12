import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, Gt as unref, It as ref, N as defineComponent, S as computed, X as onMounted, bt as withCtx, j as createVNode, q as onBeforeUnmount, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { S as I18nT, x as useI18n } from "./_MapCache-CEAOc3R8.js";
import { Tt as N8nLink_default, jt as N8nHeading_default, lo as N8nButton_default, ro as N8nText_default } from "./src-2q8VSXtx.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as createEventBus } from "./event-bus-DAq0yaAJ.js";
import { n as useUIStore } from "./ui.store-BvDpb-G-.js";
import { t as Modal_default } from "./Modal-BSo6vNwD.js";
import { n as SURFACE_MCP_ONBOARDING_MODAL_KEY } from "./constants-CSndyE8e.js";
import { l as MCP_SETTINGS_VIEW } from "./mcp.constants-Dn1qcOpP.js";
import { t as useSurfaceMcpToNewCloudUsersStore } from "./surfaceMcpToNewCloudUsers.store-DYis6uch.js";
import { t as SurfaceMcpBridgeGraphic_default } from "./SurfaceMcpBridgeGraphic-CKHX1Ojm.js";
//#region src/experiments/surfaceMcpToNewCloudUsers/components/SurfaceMcpFirstOpenIntroModal.vue?vue&type=script&setup=true&lang.ts
var SurfaceMcpFirstOpenIntroModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SurfaceMcpFirstOpenIntroModal",
	props: { modalName: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const surfaceMcpStore = useSurfaceMcpToNewCloudUsersStore();
		const modalBus = createEventBus();
		const exitMode = ref("none");
		const modalName = computed(() => props.modalName ?? "surfaceMcpFirstOpenIntroModal");
		function dismissExperiment() {
			surfaceMcpStore.dismissFirstOpenModal();
			surfaceMcpStore.trackDismissed("first_open_modal");
		}
		function handleSkip() {
			if (exitMode.value !== "none") return;
			exitMode.value = "skip";
			dismissExperiment();
			uiStore.closeModal(modalName.value);
		}
		function handleTryIt() {
			if (exitMode.value !== "none") return;
			exitMode.value = "try";
			uiStore.closeModal(modalName.value);
			uiStore.openModalWithData({
				name: SURFACE_MCP_ONBOARDING_MODAL_KEY,
				data: { surface: "first_open_modal" }
			});
		}
		function handleClosed() {
			if (exitMode.value !== "none") return;
			exitMode.value = "skip";
			dismissExperiment();
		}
		onMounted(() => {
			modalBus.on("closed", handleClosed);
		});
		onBeforeUnmount(() => {
			modalBus.off("closed", handleClosed);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: modalName.value,
				width: "640px",
				"event-bus": unref(modalBus),
				"close-on-click-modal": true,
				"close-on-press-escape": true,
				center: false,
				"custom-class": _ctx.$style.modal
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.hero) }, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.heroBackdrop),
					"aria-hidden": "true"
				}, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.heroGraphic) }, [createVNode(SurfaceMcpBridgeGraphic_default, { size: "hero" })], 2)], 2)]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.content),
					"data-test-id": "surface-mcp-intro-content"
				}, [
					createVNode(unref(N8nText_default), {
						size: "xsmall",
						color: "primary",
						bold: true,
						class: normalizeClass(_ctx.$style.eyebrow)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.eyebrow")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nHeading_default), {
						tag: "h1",
						size: "xlarge",
						bold: true,
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.title")), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "p",
						size: "medium",
						color: "text-base",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.description")) + " " + toDisplayString(" ") + " ", 1), createVNode(unref(I18nT), {
							keypath: "experiments.surfaceMcpToNewCloudUsers.onboarding.intro.settingsHint",
							tag: "span",
							scope: "global"
						}, {
							settingsLink: withCtx(() => [createVNode(unref(N8nLink_default), {
								to: { name: unref(MCP_SETTINGS_VIEW) },
								size: "medium",
								"data-test-id": "surface-mcp-intro-settings-link"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.settingsLink")), 1)]),
								_: 1
							}, 8, ["to"])]),
							_: 1
						})]),
						_: 1
					}, 8, ["class"])
				], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					"data-test-id": "surface-mcp-intro-skip-button",
					onClick: handleSkip
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.skip")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					"data-test-id": "surface-mcp-intro-try-button",
					class: normalizeClass(_ctx.$style.tryButton),
					onClick: handleTryIt
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("experiments.surfaceMcpToNewCloudUsers.onboarding.intro.tryIt")), 1)]),
					_: 1
				}, 8, ["class"])], 2)]),
				_: 1
			}, 8, [
				"name",
				"event-bus",
				"custom-class"
			]);
		};
	}
});
//#endregion
//#region src/experiments/surfaceMcpToNewCloudUsers/components/SurfaceMcpFirstOpenIntroModal.vue?vue&type=style&index=0&lang.module.scss
var modal = "_modal_18sec_390";
var hero = "_hero_18sec_401";
var heroBackdrop = "_heroBackdrop_18sec_414";
var heroGraphic = "_heroGraphic_18sec_421";
var fadeInUp = "_fadeInUp_18sec_1";
var content = "_content_18sec_434";
var eyebrow = "_eyebrow_18sec_445";
var title = "_title_18sec_451";
var description = "_description_18sec_455";
var footer = "_footer_18sec_460";
var tryButton = "_tryButton_18sec_467";
var shimmer = "_shimmer_18sec_1";
var spin = "_spin_18sec_1";
var opacityPulse = "_opacityPulse_18sec_1";
var popoverIn = "_popoverIn_18sec_1";
var fadeIn = "_fadeIn_18sec_1";
var collapsibleSlideDown = "_collapsibleSlideDown_18sec_1";
var collapsibleSlideUp = "_collapsibleSlideUp_18sec_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_18sec_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_18sec_1";
var blurSwapIn = "_blurSwapIn_18sec_1";
var blurSwapOut = "_blurSwapOut_18sec_1";
var pulseGlow = "_pulseGlow_18sec_1";
var pulseGlowDelayed = "_pulseGlowDelayed_18sec_1";
var fade = "_fade_18sec_1";
var fadeInDown = "_fadeInDown_18sec_1";
var fadeInLeft = "_fadeInLeft_18sec_1";
var fadeInRight = "_fadeInRight_18sec_1";
var fadeOut = "_fadeOut_18sec_1";
var fadeOutDown = "_fadeOutDown_18sec_1";
var fadeOutUp = "_fadeOutUp_18sec_1";
var fadeOutLeft = "_fadeOutLeft_18sec_1";
var fadeOutRight = "_fadeOutRight_18sec_1";
var ping = "_ping_18sec_1";
var blinkBackground = "_blinkBackground_18sec_1";
var typingBlink = "_typingBlink_18sec_1";
var SurfaceMcpFirstOpenIntroModal_vue_vue_type_style_index_0_lang_module_default = {
	modal,
	hero,
	heroBackdrop,
	heroGraphic,
	fadeInUp,
	content,
	eyebrow,
	title,
	description,
	footer,
	tryButton,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_18sec_1",
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
var SurfaceMcpFirstOpenIntroModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SurfaceMcpFirstOpenIntroModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SurfaceMcpFirstOpenIntroModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SurfaceMcpFirstOpenIntroModal_default as default };
