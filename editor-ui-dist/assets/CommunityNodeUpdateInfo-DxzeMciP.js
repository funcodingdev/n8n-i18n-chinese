import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, Ut as toValue, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, ot as resolveDirective, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { i as i18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nLink_default } from "./N8nLink-ldFmybi4.js";
import { V as useNodeTypesStore } from "./workflows.store-Bo6ZgF_O.js";
import { bi as isCommunityPackageName } from "./src-C3aqUyDp.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-DPRLSskW.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { n as captureException } from "./exports-kkeZrzev.js";
import { t as useCommunityNodesStore } from "./communityNodes.store-DTA5rQFV.js";
import { t as require_semver } from "./semver-5EnF4HBn.js";
//#region src/features/credentials/quickConnect/components/QuickConnectBanner.vue?vue&type=script&setup=true&lang.ts
var QuickConnectBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "QuickConnectBanner",
	props: {
		text: {},
		disclaimer: {}
	},
	setup(__props) {
		const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
		const disclaimerHtml = computed(() => {
			if (!__props.disclaimer) return "";
			const label = escapeHtml(__props.disclaimer.linkLabel ?? "here");
			const link = `<a href="${escapeHtml(__props.disclaimer.linkUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
			return __props.disclaimer.text.split("{link}").map(escapeHtml).join(link);
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return __props.text || __props.disclaimer ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "quick-connect-banner"
			}, [__props.text ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "secondary",
				iconless: ""
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, __props.text]])]),
				_: 1
			})) : createCommentVNode("", true), __props.disclaimer ? withDirectives((openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.disclaimer),
				"data-test-id": "quick-connect-banner-disclaimer"
			}, null, 2)), [[_directive_n8n_html, disclaimerHtml.value]]) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/credentials/quickConnect/components/QuickConnectBanner.vue?vue&type=style&index=0&lang.module.scss
var wrapper = "_wrapper_ulud4_388";
var disclaimer = "_disclaimer_ulud4_394";
var shimmer$1 = "_shimmer_ulud4_1";
var spin$1 = "_spin_ulud4_1";
var opacityPulse$1 = "_opacityPulse_ulud4_1";
var popoverIn$1 = "_popoverIn_ulud4_1";
var fadeIn$1 = "_fadeIn_ulud4_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_ulud4_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_ulud4_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_ulud4_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_ulud4_1";
var blurSwapIn$1 = "_blurSwapIn_ulud4_1";
var blurSwapOut$1 = "_blurSwapOut_ulud4_1";
var pulseGlow$1 = "_pulseGlow_ulud4_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_ulud4_1";
var fade$1 = "_fade_ulud4_1";
var fadeInUp$1 = "_fadeInUp_ulud4_1";
var fadeInDown$1 = "_fadeInDown_ulud4_1";
var fadeInLeft$1 = "_fadeInLeft_ulud4_1";
var fadeInRight$1 = "_fadeInRight_ulud4_1";
var fadeOut$1 = "_fadeOut_ulud4_1";
var fadeOutDown$1 = "_fadeOutDown_ulud4_1";
var fadeOutUp$1 = "_fadeOutUp_ulud4_1";
var fadeOutLeft$1 = "_fadeOutLeft_ulud4_1";
var fadeOutRight$1 = "_fadeOutRight_ulud4_1";
var ping$1 = "_ping_ulud4_1";
var blinkBackground$1 = "_blinkBackground_ulud4_1";
var typingBlink$1 = "_typingBlink_ulud4_1";
var QuickConnectBanner_vue_vue_type_style_index_0_lang_module_default = {
	wrapper,
	disclaimer,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_ulud4_1",
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
var QuickConnectBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(QuickConnectBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": QuickConnectBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/communityNodes/communityNodes.utils.ts
var import_semver = /* @__PURE__ */ __toESM(require_semver(), 1);
async function fetchInstalledPackageInfo(packageName) {
	const installedPackage = await useCommunityNodesStore().getInstalledPackage(packageName);
	const communityNodeType = useNodeTypesStore().communityNodeType(packageName);
	if (!installedPackage) return;
	const checkIsUnverifiedUpdate = () => {
		if (!installedPackage?.updateAvailable || !communityNodeType) return false;
		return import_semver.default.gt(installedPackage.updateAvailable, communityNodeType.npmVersion);
	};
	return {
		...installedPackage,
		unverifiedUpdate: checkIsUnverifiedUpdate()
	};
}
//#endregion
//#region src/features/settings/communityNodes/composables/useInstalledCommunityPackage.ts
function useInstalledCommunityPackage(nodeTypeName) {
	const communityNodesStore = useCommunityNodesStore();
	const usersStore = useUsersStore();
	const installedPackage = ref(void 0);
	const packageName = computed(() => toValue(nodeTypeName)?.split(".")[0] ?? "");
	const isCommunityNode = computed(() => {
		const nodeType = toValue(nodeTypeName);
		if (nodeType) return isCommunityPackageName(nodeType);
		return false;
	});
	const initInstalledPackage = async () => {
		if (!packageName.value || !isCommunityNode.value) return void 0;
		installedPackage.value = await fetchInstalledPackageInfo(packageName.value);
		return installedPackage.value;
	};
	watch(() => communityNodesStore.installedPackages[packageName.value], async (changedPackage) => {
		if (!packageName.value || !changedPackage) return;
		await initInstalledPackage();
	}, { deep: true });
	onMounted(async () => {
		if (!packageName.value || !isCommunityNode.value) return;
		await initInstalledPackage();
	});
	return {
		installedPackage,
		isUpdateCheckAvailable: computed(() => {
			return isCommunityNode.value && usersStore.isAdminOrOwner && !installedPackage.value?.unverifiedUpdate;
		}),
		isCommunityNode,
		initInstalledPackage
	};
}
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeFooter.vue?vue&type=script&setup=true&lang.ts
var CommunityNodeFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeFooter",
	props: {
		packageName: {},
		showManage: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const router = useRouter();
		const bugsUrl = ref(`https://registry.npmjs.org/${props.packageName}`);
		const { installedPackage } = useInstalledCommunityPackage(props.packageName);
		async function openSettingsPage() {
			await router.push({ name: VIEWS.COMMUNITY_NODES });
		}
		async function openIssuesPage() {
			if (bugsUrl.value) window.open(bugsUrl.value, "_blank");
		}
		async function getBugsUrl(packageName) {
			const url = `https://registry.npmjs.org/${packageName}`;
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error("Could not get metadata for package");
				const data = await response.json();
				if (data.bugs?.url) bugsUrl.value = data.bugs.url;
			} catch (error) {
				captureException(error);
			}
		}
		onMounted(async () => {
			if (props.packageName) await getBugsUrl(props.packageName);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.separator) }, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [
				unref(installedPackage) ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light",
					style: { "margin-right": "auto" }
				}, {
					default: withCtx(() => [createTextVNode(" Package version " + toDisplayString(unref(installedPackage).installedVersion) + " (" + toDisplayString(unref(installedPackage).updateAvailable && !unref(installedPackage).unverifiedUpdate ? unref(i18n).baseText("communityNodeFooter.legacy") : unref(i18n).baseText("nodeSettings.latest")) + ") ", 1)]),
					_: 1
				})) : createCommentVNode("", true),
				props.showManage ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nLink_default), {
					theme: "text",
					onClick: openSettingsPage
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "primary",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeFooter.manage")), 1)]),
						_: 1
					})]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					style: { "color": "var(--color--foreground)" },
					bold: ""
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("|", -1)])]),
					_: 1
				})], 64)) : createCommentVNode("", true),
				createVNode(unref(N8nLink_default), {
					theme: "text",
					onClick: openIssuesPage
				}, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "primary",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeFooter.reportIssue")), 1)]),
						_: 1
					})]),
					_: 1
				})
			], 2)]);
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeFooter.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_1i2qz_388";
var separator = "_separator_1i2qz_396";
var shimmer = "_shimmer_1i2qz_1";
var spin = "_spin_1i2qz_1";
var opacityPulse = "_opacityPulse_1i2qz_1";
var popoverIn = "_popoverIn_1i2qz_1";
var fadeIn = "_fadeIn_1i2qz_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1i2qz_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1i2qz_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1i2qz_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1i2qz_1";
var blurSwapIn = "_blurSwapIn_1i2qz_1";
var blurSwapOut = "_blurSwapOut_1i2qz_1";
var pulseGlow = "_pulseGlow_1i2qz_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1i2qz_1";
var fade = "_fade_1i2qz_1";
var fadeInUp = "_fadeInUp_1i2qz_1";
var fadeInDown = "_fadeInDown_1i2qz_1";
var fadeInLeft = "_fadeInLeft_1i2qz_1";
var fadeInRight = "_fadeInRight_1i2qz_1";
var fadeOut = "_fadeOut_1i2qz_1";
var fadeOutDown = "_fadeOutDown_1i2qz_1";
var fadeOutUp = "_fadeOutUp_1i2qz_1";
var fadeOutLeft = "_fadeOutLeft_1i2qz_1";
var fadeOutRight = "_fadeOutRight_1i2qz_1";
var ping = "_ping_1i2qz_1";
var blinkBackground = "_blinkBackground_1i2qz_1";
var typingBlink = "_typingBlink_1i2qz_1";
var CommunityNodeFooter_vue_vue_type_style_index_0_lang_module_default = {
	container,
	separator,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1i2qz_1",
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
var CommunityNodeFooter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CommunityNodeFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityNodeFooter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/communityNodes/components/nodeCreator/CommunityNodeUpdateInfo.vue
var CommunityNodeUpdateInfo_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityNodeUpdateInfo",
	props: {
		packageName: {},
		source: {}
	},
	setup(__props) {
		const props = __props;
		const { openCommunityPackageUpdateConfirmModal } = useUIStore();
		const onUpdate = () => {
			if (!props.packageName) return;
			openCommunityPackageUpdateConfirmModal(props.packageName, props.source);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCallout_default), {
				theme: "secondary",
				iconless: true,
				style: { "margin-bottom": "var(--spacing--sm)" }
			}, createSlots({
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("communityNodeUpdateInfo.available")) + " ", 1)]),
				_: 2
			}, [props.packageName ? {
				name: "trailingContent",
				fn: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: onUpdate
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.update")), 1)]),
					_: 1
				})]),
				key: "0"
			} : void 0]), 1024);
		};
	}
});
//#endregion
export { QuickConnectBanner_default as i, CommunityNodeFooter_default as n, useInstalledCommunityPackage as r, CommunityNodeUpdateInfo_default as t };
