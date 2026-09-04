import { $ as openBlock, C as createBaseVNode, Gt as unref, It as ref, Mt as markRaw, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, ft as useSlots, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nMarkdown_default } from "./N8nMarkdown-Coqw_pnO.js";
import { P as dismissBannerPermanently, Xn as get, ar as STORES, cr as defineStore, t as useRootStore } from "./useRootStore-CLEJA2KF.js";
import { t as useSettingsStore } from "./settings.store-DUJm-Uks.js";
import { t as useUsersStore } from "./users.store-BBpeiveu.js";
//#region ../@n8n/rest-api-client/src/api/dynamic-banners.ts
async function getDynamicBanners(endpoint, filters) {
	return await get(endpoint, "", filters);
}
//#endregion
//#region src/features/shared/banners/components/banners/BaseBanner.vue?vue&type=script&setup=true&lang.ts
var BaseBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BaseBanner",
	props: {
		name: {},
		theme: { default: "info" },
		customIcon: { default: void 0 },
		iconTooltip: { default: void 0 },
		dismissible: {
			type: Boolean,
			default: true
		},
		dismissPermanently: {
			type: Boolean,
			default: false
		}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const bannersStore = useBannersStore();
		const slots = useSlots();
		const props = __props;
		const emit = __emit;
		const hasTrailingContent = computed(() => {
			return !!slots.trailingContent;
		});
		async function onCloseClick() {
			await bannersStore.dismissBanner(props.name, props.dismissPermanently ? "permanent" : "temporary");
			emit("close");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				class: normalizeClass(_ctx.$style.callout),
				theme: props.theme,
				icon: props.customIcon,
				"icon-tooltip": props.iconTooltip,
				"icon-size": "medium",
				"round-corners": false,
				"data-test-id": `banners-${props.name}`,
				"only-bottom-border": true
			}, {
				trailingContent: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.trailingContent) }, [renderSlot(_ctx.$slots, "trailingContent"), __props.dismissible ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					size: "small",
					icon: "x",
					title: unref(i18n).baseText("generic.dismiss"),
					class: "clickable",
					"data-test-id": `banner-${props.name}-close`,
					onClick: onCloseClick
				}, null, 8, ["title", "data-test-id"])) : createCommentVNode("", true)], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.mainContent, !hasTrailingContent.value ? _ctx.$style.keepSpace : ""]) }, [renderSlot(_ctx.$slots, "mainContent")], 2)]),
				_: 3
			}, 8, [
				"class",
				"theme",
				"icon",
				"icon-tooltip",
				"data-test-id"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/banners/components/banners/BaseBanner.vue?vue&type=style&index=0&lang.module.scss
var callout = "_callout_pcvtc_388";
var mainContent = "_mainContent_pcvtc_392";
var keepSpace = "_keepSpace_pcvtc_397";
var trailingContent = "_trailingContent_pcvtc_401";
var shimmer$1 = "_shimmer_pcvtc_1";
var spin$1 = "_spin_pcvtc_1";
var opacityPulse$1 = "_opacityPulse_pcvtc_1";
var popoverIn$1 = "_popoverIn_pcvtc_1";
var fadeIn$1 = "_fadeIn_pcvtc_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_pcvtc_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_pcvtc_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_pcvtc_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_pcvtc_1";
var blurSwapIn$1 = "_blurSwapIn_pcvtc_1";
var blurSwapOut$1 = "_blurSwapOut_pcvtc_1";
var pulseGlow$1 = "_pulseGlow_pcvtc_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_pcvtc_1";
var fade$1 = "_fade_pcvtc_1";
var fadeInUp$1 = "_fadeInUp_pcvtc_1";
var fadeInDown$1 = "_fadeInDown_pcvtc_1";
var fadeInLeft$1 = "_fadeInLeft_pcvtc_1";
var fadeInRight$1 = "_fadeInRight_pcvtc_1";
var fadeOut$1 = "_fadeOut_pcvtc_1";
var fadeOutDown$1 = "_fadeOutDown_pcvtc_1";
var fadeOutUp$1 = "_fadeOutUp_pcvtc_1";
var fadeOutLeft$1 = "_fadeOutLeft_pcvtc_1";
var fadeOutRight$1 = "_fadeOutRight_pcvtc_1";
var ping$1 = "_ping_pcvtc_1";
var blinkBackground$1 = "_blinkBackground_pcvtc_1";
var typingBlink$1 = "_typingBlink_pcvtc_1";
var BaseBanner_vue_vue_type_style_index_0_lang_module_default = {
	callout,
	mainContent,
	keepSpace,
	trailingContent,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_pcvtc_1",
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
var BaseBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BaseBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BaseBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/banners/components/banners/DynamicBanner.vue?vue&type=script&setup=true&lang.ts
var DynamicBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DynamicBanner",
	props: {
		name: {},
		content: {},
		theme: {},
		isDismissible: { type: Boolean },
		dismissPermanently: { type: [Boolean, null] }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(BaseBanner_default, {
				name: props.name,
				theme: props.theme,
				dismissible: props.isDismissible,
				"dismiss-permanently": props.dismissPermanently ?? false
			}, {
				mainContent: withCtx(() => [createVNode(unref(N8nMarkdown_default), {
					content: props.content,
					class: normalizeClass(_ctx.$style.markdown)
				}, null, 8, ["content", "class"])]),
				_: 1
			}, 8, [
				"name",
				"theme",
				"dismissible",
				"dismiss-permanently"
			]);
		};
	}
});
//#endregion
//#region src/features/shared/banners/components/banners/DynamicBanner.vue?vue&type=style&index=0&lang.module.scss
var markdown = "_markdown_odmlw_388";
var shimmer = "_shimmer_odmlw_1";
var spin = "_spin_odmlw_1";
var opacityPulse = "_opacityPulse_odmlw_1";
var popoverIn = "_popoverIn_odmlw_1";
var fadeIn = "_fadeIn_odmlw_1";
var collapsibleSlideDown = "_collapsibleSlideDown_odmlw_1";
var collapsibleSlideUp = "_collapsibleSlideUp_odmlw_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_odmlw_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_odmlw_1";
var blurSwapIn = "_blurSwapIn_odmlw_1";
var blurSwapOut = "_blurSwapOut_odmlw_1";
var pulseGlow = "_pulseGlow_odmlw_1";
var pulseGlowDelayed = "_pulseGlowDelayed_odmlw_1";
var fade = "_fade_odmlw_1";
var fadeInUp = "_fadeInUp_odmlw_1";
var fadeInDown = "_fadeInDown_odmlw_1";
var fadeInLeft = "_fadeInLeft_odmlw_1";
var fadeInRight = "_fadeInRight_odmlw_1";
var fadeOut = "_fadeOut_odmlw_1";
var fadeOutDown = "_fadeOutDown_odmlw_1";
var fadeOutUp = "_fadeOutUp_odmlw_1";
var fadeOutLeft = "_fadeOutLeft_odmlw_1";
var fadeOutRight = "_fadeOutRight_odmlw_1";
var ping = "_ping_odmlw_1";
var blinkBackground = "_blinkBackground_odmlw_1";
var typingBlink = "_typingBlink_odmlw_1";
var DynamicBanner_vue_vue_type_style_index_0_lang_module_default = {
	markdown,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_odmlw_1",
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
var DynamicBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DynamicBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DynamicBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/shared/banners/banners.store.ts
var useBannersStore = defineStore(STORES.BANNERS, () => {
	const settingsStore = useSettingsStore();
	const usersStore = useUsersStore();
	const rootStore = useRootStore();
	const dynamicBanners = ref([]);
	const bannerStack = ref([]);
	const bannersHeight = ref(0);
	const mapDeploymentTypeValue = (deploymentType) => {
		return deploymentType === "cloud" ? "cloud" : "self-hosted";
	};
	async function fetchDynamicBanners() {
		if (!settingsStore.settings.dynamicBanners.endpoint || !settingsStore.settings.dynamicBanners.enabled) return [];
		const version = settingsStore.settings.versionCli;
		const deploymentType = mapDeploymentTypeValue(settingsStore.settings.deployment?.type ?? "default");
		try {
			dynamicBanners.value = (await getDynamicBanners(settingsStore.settings.dynamicBanners.endpoint, {
				version,
				deploymentType,
				instanceId: settingsStore.settings.instanceId,
				planName: settingsStore.settings.license?.planName,
				userId: usersStore.currentUser?.id,
				userCreatedAt: usersStore.currentUser?.createdAt,
				isOwner: usersStore.currentUser?.isOwner,
				role: usersStore.currentUser?.role,
				publishedWorkflowCount: settingsStore.settings.dynamicBanners.filters.publishedWorkflowCount
			})).map((item) => ({
				...item,
				id: `dynamic-banner-${item.id}`,
				component: markRaw(DynamicBanner_default)
			}));
			return dynamicBanners.value;
		} catch (e) {
			console.error("Failed to fetch dynamic banners:", e);
			return [];
		}
	}
	const dynamicBannersMap = computed(() => {
		return dynamicBanners.value.reduce((acc, item) => {
			acc[item.id] = item;
			return acc;
		}, {});
	});
	const removeBannerFromStack = (name) => {
		bannerStack.value = bannerStack.value.filter((bannerName) => bannerName !== name);
	};
	const dismissBanner = async (name, type = "temporary") => {
		if (type === "permanent") {
			await dismissBannerPermanently(rootStore.restApiContext, {
				bannerName: name,
				dismissedBanners: settingsStore.permanentlyDismissedBanners
			});
			removeBannerFromStack(name);
			return;
		}
		removeBannerFromStack(name);
	};
	const updateBannersHeight = (newHeight) => {
		bannersHeight.value = newHeight;
	};
	const pushBannerToStack = (name) => {
		if (bannerStack.value.includes(name)) return;
		bannerStack.value.push(name);
	};
	const clearBannerStack = () => {
		bannerStack.value = [];
	};
	const loadStaticBanners = (options) => {
		options.banners.forEach(pushBannerToStack);
	};
	const loadDynamicBanners = async () => {
		(await fetchDynamicBanners())?.filter((banner) => !settingsStore.permanentlyDismissedBanners.includes(banner.id)).forEach((banner) => pushBannerToStack(banner.id));
	};
	return {
		dynamicBanners,
		bannerStack,
		bannersHeight,
		dynamicBannersMap,
		dismissBanner,
		updateBannersHeight,
		pushBannerToStack,
		removeBannerFromStack,
		clearBannerStack,
		loadStaticBanners,
		loadDynamicBanners
	};
});
//#endregion
export { BaseBanner_default as n, useBannersStore as t };
