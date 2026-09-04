import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, Vt as toRef, W as nextTick, X as onMounted, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { c as I18nT, s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nCallout_default } from "./N8nCallout-cgEP2-Dy.js";
import { t as N8nActionToggle_default } from "./N8nActionToggle-BgeouQMM.js";
import { t as N8nCard_default } from "./N8nCard-W7SwOQs6.js";
import { t as N8nEmptyState_default } from "./N8nEmptyState-CFzO-VaC.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { Ai as isDateObject } from "./workflows.store-qP-dtzSs.js";
import { vi as DateTime } from "./src-B255AdRt.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjOArG71.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import { Zr as EXTERNAL_SECRETS_PROVIDER_MODAL_KEY } from "./constants-CMdL1Kzl.js";
import { n as useUIStore } from "./ui.store-xzfQIfPK.js";
import { n as useDocumentTitle } from "./useDocumentTitle-C48umTvY.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-C6J5Ddz3.js";
import { n as ExternalSecretsProviderImage_ee_default, r as useExternalSecretsProvider, t as ExternalSecretsProviderConnectionSwitch_ee_default } from "./ExternalSecretsProviderConnectionSwitch.ee-ChcTWDaT.js";
//#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderCard.ee.vue?vue&type=script&setup=true&lang.ts
var ExternalSecretsProviderCard_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ExternalSecretsProviderCard.ee",
	props: { provider: {} },
	setup(__props) {
		const props = __props;
		const externalSecretsStore = useExternalSecretsStore();
		const i18n = useI18n();
		const uiStore = useUIStore();
		const toast = useToast();
		const provider = toRef(props, "provider");
		const providerData = computed(() => provider.value.data ?? {});
		const { connectionState, testConnection, setConnectionState } = useExternalSecretsProvider(provider, providerData);
		const actionDropdownOptions = computed(() => [{
			value: "setup",
			label: i18n.baseText("settings.externalSecrets.card.actionDropdown.setup")
		}, ...props.provider.connected ? [{
			value: "reload",
			label: i18n.baseText("settings.externalSecrets.card.actionDropdown.reload")
		}] : []]);
		const canConnect = computed(() => {
			return props.provider.connected || Object.keys(providerData.value).length > 0;
		});
		const formattedDate = computed(() => {
			return DateTime.fromISO(isDateObject(provider.value.connectedAt) ? provider.value.connectedAt.toISOString() : provider.value.connectedAt || (/* @__PURE__ */ new Date()).toISOString()).toFormat("dd LLL yyyy");
		});
		onMounted(() => {
			setConnectionState(props.provider.state);
		});
		async function onBeforeConnectionUpdate() {
			if (props.provider.connected) return true;
			await externalSecretsStore.getProvider(props.provider.name);
			await nextTick();
			return await testConnection() !== "error";
		}
		function openExternalSecretProvider() {
			uiStore.openModalWithData({
				name: EXTERNAL_SECRETS_PROVIDER_MODAL_KEY,
				data: { name: props.provider.name }
			});
		}
		async function reloadProvider() {
			try {
				await externalSecretsStore.reloadProvider(props.provider.name);
				toast.showMessage({
					title: i18n.baseText("settings.externalSecrets.card.reload.success.title"),
					message: i18n.baseText("settings.externalSecrets.card.reload.success.description", { interpolate: { provider: props.provider.displayName } }),
					type: "success"
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("error"));
			}
		}
		async function onActionDropdownClick(id) {
			switch (id) {
				case "setup":
					openExternalSecretProvider();
					break;
				case "reload":
					await reloadProvider();
					break;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [
					createVNode(ExternalSecretsProviderImage_ee_default, {
						class: normalizeClass(_ctx.$style.cardImage),
						provider: provider.value
					}, null, 8, ["class", "provider"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [createVNode(unref(N8nText_default), { bold: "" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(provider.value.displayName), 1)]),
						_: 1
					}), provider.value.connected ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						color: "text-light",
						size: "small"
					}, {
						default: withCtx(() => [
							createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.secretsCount", {
								interpolate: { count: unref(externalSecretsStore).secrets[provider.value.name]?.length ?? 0 },
								adjustToNumber: unref(externalSecretsStore).secrets[provider.value.name]?.length ?? 0
							})), 1),
							_cache[1] || (_cache[1] = createTextVNode(" | ", -1)),
							createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.connectedAt", { interpolate: { date: formattedDate.value } })), 1)
						]),
						_: 1
					})) : createCommentVNode("", true)], 2),
					canConnect.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.cardActions)
					}, [createVNode(ExternalSecretsProviderConnectionSwitch_ee_default, {
						provider: provider.value,
						"before-update": onBeforeConnectionUpdate,
						disabled: unref(connectionState) === "error" && !provider.value.connected
					}, null, 8, ["provider", "disabled"]), createVNode(unref(N8nActionToggle_default), {
						class: "ml-s",
						theme: "dark",
						actions: actionDropdownOptions.value,
						onAction: onActionDropdownClick
					}, null, 8, ["actions"])], 2)) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						variant: "subtle",
						onClick: _cache[0] || (_cache[0] = ($event) => openExternalSecretProvider())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.card.setUp")), 1)]),
						_: 1
					}))
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
//#endregion
//#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderCard.ee.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_9nox8_388";
var cardImage = "_cardImage_9nox8_393";
var cardBody = "_cardBody_9nox8_398";
var cardContent = "_cardContent_9nox8_404";
var cardActions = "_cardActions_9nox8_411";
var shimmer = "_shimmer_9nox8_1";
var spin = "_spin_9nox8_1";
var opacityPulse = "_opacityPulse_9nox8_1";
var popoverIn = "_popoverIn_9nox8_1";
var fadeIn = "_fadeIn_9nox8_1";
var collapsibleSlideDown = "_collapsibleSlideDown_9nox8_1";
var collapsibleSlideUp = "_collapsibleSlideUp_9nox8_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_9nox8_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_9nox8_1";
var blurSwapIn = "_blurSwapIn_9nox8_1";
var blurSwapOut = "_blurSwapOut_9nox8_1";
var pulseGlow = "_pulseGlow_9nox8_1";
var pulseGlowDelayed = "_pulseGlowDelayed_9nox8_1";
var fade = "_fade_9nox8_1";
var fadeInUp = "_fadeInUp_9nox8_1";
var fadeInDown = "_fadeInDown_9nox8_1";
var fadeInLeft = "_fadeInLeft_9nox8_1";
var fadeInRight = "_fadeInRight_9nox8_1";
var fadeOut = "_fadeOut_9nox8_1";
var fadeOutDown = "_fadeOutDown_9nox8_1";
var fadeOutUp = "_fadeOutUp_9nox8_1";
var fadeOutLeft = "_fadeOutLeft_9nox8_1";
var fadeOutRight = "_fadeOutRight_9nox8_1";
var ping = "_ping_9nox8_1";
var blinkBackground = "_blinkBackground_9nox8_1";
var typingBlink = "_typingBlink_9nox8_1";
var ExternalSecretsProviderCard_ee_vue_vue_type_style_index_0_lang_module_default = {
	card,
	cardImage,
	cardBody,
	cardContent,
	cardActions,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_9nox8_1",
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
var ExternalSecretsProviderCard_ee_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ExternalSecretsProviderCard_ee_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ExternalSecretsProviderCard_ee_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/integrations/externalSecrets.ee/views/SettingsExternalSecrets.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pb-3xl" };
var _hoisted_2 = {
	key: 0,
	"data-test-id": "external-secrets-content-licensed"
};
var _hoisted_3 = {
	href: "https://docs.n8n.io/external-secrets/",
	target: "_blank"
};
var _hoisted_4 = {
	href: "https://docs.n8n.io/external-secrets/",
	target: "_blank"
};
//#endregion
//#region src/features/integrations/externalSecrets.ee/views/SettingsExternalSecrets.vue
var SettingsExternalSecrets_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsExternalSecrets",
	setup(__props) {
		const i18n = useI18n();
		const externalSecretsStore = useExternalSecretsStore();
		const toast = useToast();
		const documentTitle = useDocumentTitle();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const sortedProviders = computed(() => {
			return [...externalSecretsStore.providers].sort((a, b) => {
				return b.name.localeCompare(a.name);
			});
		});
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.externalSecrets.title"));
			if (!externalSecretsStore.isEnterpriseExternalSecretsEnabled) return;
			try {
				externalSecretsStore.fetchGlobalSecrets();
				externalSecretsStore.getProviders();
			} catch (error) {
				toast.showError(error, i18n.baseText("error"));
			}
		});
		function goToUpgrade() {
			pageRedirectionHelper.goToUpgrade("external-secrets", "upgrade-external-secrets");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.title")), 1)]),
				_: 1
			}), unref(externalSecretsStore).isEnterpriseExternalSecretsEnabled ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nCallout_default), {
				theme: "secondary",
				class: "mt-2xl mb-l"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.externalSecrets.info")) + " ", 1), createBaseVNode("a", _hoisted_3, toDisplayString(unref(i18n).baseText("settings.externalSecrets.info.link")), 1)]),
				_: 1
			}), (openBlock(true), createElementBlock(Fragment, null, renderList(sortedProviders.value, (provider) => {
				return openBlock(), createBlock(ExternalSecretsProviderCard_ee_default, {
					key: provider.name,
					provider
				}, null, 8, ["provider"]);
			}), 128))])) : (openBlock(), createBlock(unref(N8nEmptyState_default), {
				key: 1,
				class: "mt-2xl mb-l",
				"data-test-id": "external-secrets-content-unlicensed",
				"button-text": unref(i18n).baseText("settings.externalSecrets.actionBox.buttonText"),
				onClick: goToUpgrade
			}, {
				heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.title")), 1)]),
				description: withCtx(() => [createVNode(unref(I18nT), {
					keypath: "settings.externalSecrets.actionBox.description",
					scope: "global"
				}, {
					link: withCtx(() => [createBaseVNode("a", _hoisted_4, toDisplayString(unref(i18n).baseText("settings.externalSecrets.actionBox.description.link")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["button-text"]))]);
		};
	}
});
//#endregion
export { SettingsExternalSecrets_default as default };
