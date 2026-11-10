import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, Vd as createCommentVNode, Wf as toRef, bp as toDisplayString, cf as onMounted, df as openBlock, hp as normalizeClass, if as nextTick, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, pa as DateTime, pf as renderList, xd as I18nT, zd as createBaseVNode } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, Cf as useExternalSecretsStore, GD as N8nHeading_default, GO as useI18n, IO as N8nButton_default, Jb as useToast, Jp as useDocumentTitle, OO as N8nText_default, Qf as usePageRedirectionHelper, WD as N8nEmptyState_default, co as useExternalSecretsProvider, cy as EXTERNAL_SECRETS_PROVIDER_MODAL_KEY, gO as N8nActionToggle_default, nO as N8nCard_default, oO as N8nCallout_default, oo as ExternalSecretsProviderConnectionSwitch_ee_default, qg as isDateObject, s_ as useUIStore, so as ExternalSecretsProviderImage_ee_default } from "./app-DGoK9ugD.js";
//#region src/features/integrations/externalSecrets.ee/components/ExternalSecretsProviderCard.ee.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var ExternalSecretsProviderCard_ee_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
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
				case "reload": await reloadProvider();
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
						variant: "outline",
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
}), [["__cssModules", { "$style": {
	card: "_card_97l0w_1",
	cardImage: "_cardImage_97l0w_6",
	cardBody: "_cardBody_97l0w_11",
	cardContent: "_cardContent_97l0w_17",
	cardActions: "_cardActions_97l0w_24"
} }]]);
//#endregion
//#region src/features/integrations/externalSecrets.ee/views/SettingsExternalSecrets.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
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
