import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-95uC3wI4.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as N8nLoading_default } from "./N8nLoading-CTQpzw6C.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { t as N8nNotice_default } from "./N8nNotice-7yTs7YRW.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { V as useNodeTypesStore } from "./workflows.store-QD0eo9S6.js";
import { t as useSettingsStore } from "./settings.store-BikmCGla.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { n as useToast } from "./useToast-B-bdF7at.js";
import { S as NPM_PACKAGE_DOCS_BASE_URL } from "./constants-DxozP3cY.js";
import { A as COMMUNITY_PACKAGE_MANAGE_ACTIONS, E as COMMUNITY_NODES_INSTALLATION_DOCS_URL, k as COMMUNITY_PACKAGE_INSTALL_MODAL_KEY, n as useUIStore } from "./ui.store-Bnte4owf.js";
import { n as useDocumentTitle } from "./useDocumentTitle-DIC12kgr.js";
import { t as useExternalHooks } from "./useExternalHooks-BlrUXQBD.js";
import { t as useCommunityNodesStore } from "./communityNodes.store-D6Hwg27X.js";
import { t as require_semver } from "./semver-5EnF4HBn.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DMq01WHG.js";
import { t as usePushConnection } from "./usePushConnection-BCBBMlEh.js";
import "./usePushConnection-pkhaOZwn.js";
//#region src/features/settings/communityNodes/components/CommunityPackageCard.vue?vue&type=script&setup=true&lang.ts
var import_semver = /* @__PURE__ */ __toESM(require_semver(), 1);
var _hoisted_1 = { key: 0 };
var CommunityPackageCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CommunityPackageCard",
	props: {
		communityPackage: { default: null },
		loading: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const { openCommunityPackageUpdateConfirmModal, openCommunityPackageUninstallConfirmModal } = useUIStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const settingsStore = useSettingsStore();
		const nodeTypesStore = useNodeTypesStore();
		const latestVerifiedVersion = ref();
		const currVersion = computed(() => props.communityPackage?.installedVersion || "");
		const isManagedByEnv = computed(() => settingsStore.settings.communityNodesManagedByEnv ?? false);
		const hasUnverifiedPackagesUpdate = computed(() => {
			return !isManagedByEnv.value && settingsStore.isUnverifiedPackagesEnabled && props.communityPackage?.updateAvailable;
		});
		const hasVerifiedPackageUpdate = computed(() => {
			if (isManagedByEnv.value) return false;
			const canUpdate = latestVerifiedVersion.value && import_semver.default.gt(latestVerifiedVersion.value || "", currVersion.value);
			return settingsStore.isCommunityNodesFeatureEnabled && canUpdate;
		});
		const packageActions = computed(() => {
			const actions = [{
				label: i18n.baseText("settings.communityNodes.viewDocsAction.label"),
				value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS,
				type: "external-link"
			}];
			if (!isManagedByEnv.value) actions.push({
				label: i18n.baseText("settings.communityNodes.uninstallAction.label"),
				value: COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL
			});
			return actions;
		});
		async function onAction(value) {
			if (!props.communityPackage) return;
			switch (value) {
				case COMMUNITY_PACKAGE_MANAGE_ACTIONS.VIEW_DOCS:
					telemetry.track("user clicked to browse the cnr package documentation", {
						package_name: props.communityPackage.packageName,
						package_version: props.communityPackage.installedVersion
					});
					window.open(`${NPM_PACKAGE_DOCS_BASE_URL}${props.communityPackage.packageName}`, "_blank");
					break;
				case COMMUNITY_PACKAGE_MANAGE_ACTIONS.UNINSTALL:
					openCommunityPackageUninstallConfirmModal(props.communityPackage.packageName);
					break;
				default: break;
			}
		}
		function onUpdateClick() {
			if (!props.communityPackage) return;
			openCommunityPackageUpdateConfirmModal(props.communityPackage.packageName, "instance settings");
		}
		watch(() => props.communityPackage?.packageName, async (packageName) => {
			if (packageName) {
				await nodeTypesStore.loadNodeTypesIfNotLoaded();
				const nodeType = nodeTypesStore.visibleNodeTypes.find((node) => node.name.includes(packageName));
				const attributes = await nodeTypesStore.getCommunityNodeAttributes(nodeType?.name || "");
				if (attributes?.npmVersion) latestVerifiedVersion.value = attributes.npmVersion;
			}
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.cardContainer),
				"data-test-id": "community-package-card"
			}, [__props.loading ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.cardSkeleton)
			}, [createVNode(unref(N8nLoading_default), {
				class: normalizeClass(_ctx.$style.loader),
				variant: "p",
				rows: 1
			}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
				class: normalizeClass(_ctx.$style.loader),
				variant: "p",
				rows: 1
			}, null, 8, ["class"])], 2)) : __props.communityPackage ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.packageCard)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardInfoContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardTitle) }, [createVNode(unref(N8nText_default), {
				bold: true,
				size: "large"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.communityPackage.packageName), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardSubtitle) }, [createVNode(unref(N8nText_default), {
				bold: true,
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes.packageNodes.label", { adjustToNumber: __props.communityPackage.installedNodes.length })) + ":\xA0 ", 1)]),
				_: 1
			}), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.communityPackage.installedNodes, (node, index) => {
					return openBlock(), createElementBlock("span", { key: node.name }, [createTextVNode(toDisplayString(node.name), 1), index != __props.communityPackage.installedNodes.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_1, ",")) : createCommentVNode("", true)]);
				}), 128))]),
				_: 1
			})], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardControlsContainer) }, [
				createVNode(unref(N8nText_default), {
					bold: true,
					size: "large",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(" v" + toDisplayString(__props.communityPackage.installedVersion), 1)]),
					_: 1
				}),
				__props.communityPackage.failedLoading === true ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.failedToLoad.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						color: "danger",
						size: "large"
					})]),
					_: 1
				})) : hasUnverifiedPackagesUpdate.value || hasVerifiedPackageUpdate.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.updateAvailable.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						label: "Update",
						onClick: onUpdateClick
					})]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					placement: "top"
				}, {
					content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(i18n).baseText("settings.communityNodes.upToDate.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "circle-check",
						color: "text-light",
						size: "large"
					})]),
					_: 1
				})),
				packageActions.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.cardActions)
				}, [createVNode(unref(N8nActionToggle_default), {
					actions: packageActions.value,
					onAction
				}, null, 8, ["actions"])], 2)) : createCommentVNode("", true)
			], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/components/CommunityPackageCard.vue?vue&type=style&index=0&lang.module.scss
var cardContainer = "_cardContainer_nluna_388";
var packageCard = "_packageCard_nluna_396";
var cardSkeleton = "_cardSkeleton_nluna_397";
var loader = "_loader_nluna_411";
var cardInfoContainer = "_cardInfoContainer_nluna_422";
var cardTitle = "_cardTitle_nluna_427";
var cardSubtitle = "_cardSubtitle_nluna_434";
var cardControlsContainer = "_cardControlsContainer_nluna_439";
var cardActions = "_cardActions_nluna_445";
var shimmer$1 = "_shimmer_nluna_1";
var spin$1 = "_spin_nluna_1";
var opacityPulse$1 = "_opacityPulse_nluna_1";
var popoverIn$1 = "_popoverIn_nluna_1";
var fadeIn$1 = "_fadeIn_nluna_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_nluna_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_nluna_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_nluna_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_nluna_1";
var blurSwapIn$1 = "_blurSwapIn_nluna_1";
var blurSwapOut$1 = "_blurSwapOut_nluna_1";
var pulseGlow$1 = "_pulseGlow_nluna_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_nluna_1";
var fade$1 = "_fade_nluna_1";
var fadeInUp$1 = "_fadeInUp_nluna_1";
var fadeInDown$1 = "_fadeInDown_nluna_1";
var fadeInLeft$1 = "_fadeInLeft_nluna_1";
var fadeInRight$1 = "_fadeInRight_nluna_1";
var fadeOut$1 = "_fadeOut_nluna_1";
var fadeOutDown$1 = "_fadeOutDown_nluna_1";
var fadeOutUp$1 = "_fadeOutUp_nluna_1";
var fadeOutLeft$1 = "_fadeOutLeft_nluna_1";
var fadeOutRight$1 = "_fadeOutRight_nluna_1";
var ping$1 = "_ping_nluna_1";
var blinkBackground$1 = "_blinkBackground_nluna_1";
var typingBlink$1 = "_typingBlink_nluna_1";
var CommunityPackageCard_vue_vue_type_style_index_0_lang_module_default = {
	cardContainer,
	packageCard,
	cardSkeleton,
	loader,
	cardInfoContainer,
	cardTitle,
	cardSubtitle,
	cardControlsContainer,
	cardActions,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_nluna_1",
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
var CommunityPackageCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CommunityPackageCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CommunityPackageCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/communityNodes/views/SettingsCommunityNodesView.vue?vue&type=script&setup=true&lang.ts
var PACKAGE_COUNT_THRESHOLD = 31;
var SettingsCommunityNodesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsCommunityNodesView",
	setup(__props) {
		const loading = ref(false);
		const pushConnection = usePushConnection({ router: useRouter() });
		const pushStore = usePushConnectionStore();
		const externalHooks = useExternalHooks();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const communityNodesStore = useCommunityNodesStore();
		const uiStore = useUIStore();
		const settingsStore = useSettingsStore();
		const isManagedByEnv = computed(() => {
			return settingsStore.settings.communityNodesManagedByEnv ?? false;
		});
		const canInstall = computed(() => {
			return settingsStore.isUnverifiedPackagesEnabled && !isManagedByEnv.value;
		});
		const getEmptyStateTitle = computed(() => {
			if (!settingsStore.isUnverifiedPackagesEnabled) return i18n.baseText("settings.communityNodes.empty.verified.only.title");
			return i18n.baseText("settings.communityNodes.empty.title");
		});
		const getEmptyStateDescription = computed(() => {
			if (!settingsStore.isUnverifiedPackagesEnabled) return i18n.baseText("settings.communityNodes.empty.verified.only.description");
			const packageCount = communityNodesStore.availablePackageCount;
			return packageCount < PACKAGE_COUNT_THRESHOLD ? i18n.baseText("settings.communityNodes.empty.description.no-packages", { interpolate: { docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL } }) : i18n.baseText("settings.communityNodes.empty.description", { interpolate: {
				docURL: COMMUNITY_NODES_INSTALLATION_DOCS_URL,
				count: (Math.floor(packageCount / 10) * 10).toString()
			} });
		});
		const getEmptyStateButtonText = computed(() => {
			if (!canInstall.value) return "";
			return i18n.baseText("settings.communityNodes.empty.installPackageLabel");
		});
		const actionBoxConfig = computed(() => {
			return {
				calloutText: "",
				calloutTheme: void 0,
				hideButton: false
			};
		});
		const onClickEmptyStateButton = () => {
			openInstallModal();
		};
		const openInstallModal = () => {
			const telemetryPayload = { is_empty_state: communityNodesStore.getInstalledPackages.length === 0 };
			telemetry.track("user clicked cnr install button", telemetryPayload);
			externalHooks.run("settingsCommunityNodesView.openInstallModal", telemetryPayload);
			uiStore.openModal(COMMUNITY_PACKAGE_INSTALL_MODAL_KEY);
		};
		onBeforeMount(() => {
			pushConnection.initialize();
			pushStore.pushConnect();
		});
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.communityNodes"));
			try {
				loading.value = true;
				await communityNodesStore.fetchInstalledPackages();
				const installedPackages = communityNodesStore.getInstalledPackages;
				const packagesToUpdate = installedPackages.filter((p) => p.updateAvailable);
				telemetry.track("user viewed cnr settings page", {
					num_of_packages_installed: installedPackages.length,
					installed_packages: installedPackages.map((p) => {
						return {
							package_name: p.packageName,
							package_version: p.installedVersion,
							package_nodes: p.installedNodes.map((node) => `${node.name}-v${node.latestVersion}`),
							is_update_available: p.updateAvailable !== void 0
						};
					}),
					packages_to_update: packagesToUpdate.map((p) => {
						return {
							package_name: p.packageName,
							package_version_current: p.installedVersion,
							package_version_available: p.updateAvailable
						};
					}),
					number_of_updates_available: packagesToUpdate.length
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("settings.communityNodes.fetchError.title"), { message: i18n.baseText("settings.communityNodes.fetchError.message") });
			} finally {
				loading.value = false;
			}
			try {
				await communityNodesStore.fetchAvailableCommunityPackageCount();
			} finally {
				loading.value = false;
			}
		});
		onBeforeUnmount(() => {
			pushStore.pushDisconnect();
			pushConnection.terminate();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.headingContainer) }, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.communityNodes")), 1)]),
					_: 1
				}), canInstall.value && unref(communityNodesStore).getInstalledPackages.length > 0 && !loading.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					label: unref(i18n).baseText("settings.communityNodes.installModal.installButton.label"),
					size: "large",
					onClick: openInstallModal
				}, null, 8, ["label"])) : createCommentVNode("", true)], 2),
				isManagedByEnv.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
					key: 0,
					class: "mb-l",
					content: unref(i18n).baseText("settings.communityNodes.managedByEnv"),
					"data-test-id": "community-nodes-managed-by-env"
				}, null, 8, ["content"])) : createCommentVNode("", true),
				loading.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.cardsContainer)
				}, [(openBlock(), createElementBlock(Fragment, null, renderList(2, (n) => {
					return createVNode(CommunityPackageCard_default, {
						key: "index-" + n,
						loading: true
					});
				}), 64))], 2)) : unref(communityNodesStore).getInstalledPackages.length === 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.actionBoxContainer)
				}, [createVNode(unref(N8nEmptyState_default), {
					heading: getEmptyStateTitle.value,
					description: getEmptyStateDescription.value,
					"button-text": getEmptyStateButtonText.value,
					"button-disabled": !unref(settingsStore).isUnverifiedPackagesEnabled,
					"callout-text": actionBoxConfig.value.calloutText,
					"callout-theme": actionBoxConfig.value.calloutTheme,
					"onClick:button": onClickEmptyStateButton
				}, null, 8, [
					"heading",
					"description",
					"button-text",
					"button-disabled",
					"callout-text",
					"callout-theme"
				])], 2)) : (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.cardsContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(communityNodesStore).getInstalledPackages, (communityPackage) => {
					return openBlock(), createBlock(CommunityPackageCard_default, {
						key: communityPackage.packageName,
						"community-package": communityPackage
					}, null, 8, ["community-package"]);
				}), 128))], 2))
			], 2);
		};
	}
});
//#endregion
//#region src/features/settings/communityNodes/views/SettingsCommunityNodesView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_pt8ej_388";
var headingContainer = "_headingContainer_pt8ej_396";
var loadingContainer = "_loadingContainer_pt8ej_401";
var actionBoxContainer = "_actionBoxContainer_pt8ej_406";
var cardsContainer = "_cardsContainer_pt8ej_410";
var shimmer = "_shimmer_pt8ej_1";
var spin = "_spin_pt8ej_1";
var opacityPulse = "_opacityPulse_pt8ej_1";
var popoverIn = "_popoverIn_pt8ej_1";
var fadeIn = "_fadeIn_pt8ej_1";
var collapsibleSlideDown = "_collapsibleSlideDown_pt8ej_1";
var collapsibleSlideUp = "_collapsibleSlideUp_pt8ej_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_pt8ej_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_pt8ej_1";
var blurSwapIn = "_blurSwapIn_pt8ej_1";
var blurSwapOut = "_blurSwapOut_pt8ej_1";
var pulseGlow = "_pulseGlow_pt8ej_1";
var pulseGlowDelayed = "_pulseGlowDelayed_pt8ej_1";
var fade = "_fade_pt8ej_1";
var fadeInUp = "_fadeInUp_pt8ej_1";
var fadeInDown = "_fadeInDown_pt8ej_1";
var fadeInLeft = "_fadeInLeft_pt8ej_1";
var fadeInRight = "_fadeInRight_pt8ej_1";
var fadeOut = "_fadeOut_pt8ej_1";
var fadeOutDown = "_fadeOutDown_pt8ej_1";
var fadeOutUp = "_fadeOutUp_pt8ej_1";
var fadeOutLeft = "_fadeOutLeft_pt8ej_1";
var fadeOutRight = "_fadeOutRight_pt8ej_1";
var ping = "_ping_pt8ej_1";
var blinkBackground = "_blinkBackground_pt8ej_1";
var typingBlink = "_typingBlink_pt8ej_1";
var SettingsCommunityNodesView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	headingContainer,
	loadingContainer,
	actionBoxContainer,
	cardsContainer,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_pt8ej_1",
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
var SettingsCommunityNodesView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SettingsCommunityNodesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsCommunityNodesView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { SettingsCommunityNodesView_default as default };
