import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Jd as defineComponent, Jf as unref, Kd as createVNode, Rd as computed, Vd as createCommentVNode, cf as onMounted, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, ns as useRouter } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, GO as useI18n, J as useSSOStore, Jp as useDocumentTitle, Yb as VIEWS, dD as SettingsRowGroup_default, fD as SettingsRowConfigure_default, gD as SettingsLayout_default, hD as SettingsPageHeader_default, lD as SettingsSection_default, pD as SettingsRow_default, rv as AUTHENTICATION_DOCS_URL, tx as useSettingsStore } from "./app-DGoK9ugD.js";
import { t as useUserHelpers } from "./useUserHelpers-CO3-w5oT.js";
//#region src/features/settings/sso/views/SettingsAuthenticationView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var SettingsAuthenticationView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SettingsAuthenticationView",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const settingsStore = useSettingsStore();
		const ssoStore = useSSOStore();
		const { canUserAccessRouteByName } = useUserHelpers(router);
		const canManageSso = computed(() => canUserAccessRouteByName(VIEWS.SSO_SETTINGS));
		const canManageLdap = computed(() => canUserAccessRouteByName(VIEWS.LDAP_SETTINGS));
		const canManagePolicies = computed(() => canUserAccessRouteByName(VIEWS.SECURITY_SETTINGS));
		const activeLabel = i18n.baseText("settings.authentication.status.active");
		const ssoStatus = computed(() => ssoStore.isSamlLoginEnabled || ssoStore.isOidcLoginEnabled ? activeLabel : void 0);
		const ldapStatus = computed(() => ssoStore.isLdapLoginEnabled ? activeLabel : void 0);
		const mfaStatus = computed(() => i18n.baseText(settingsStore.isMFAEnforced ? "settings.authentication.mfa.enforced" : "settings.authentication.mfa.optional"));
		async function openSso() {
			await router.push({ name: VIEWS.SSO_SETTINGS });
		}
		async function openLdap() {
			await router.push({ name: VIEWS.LDAP_SETTINGS });
		}
		async function openPolicies() {
			await router.push({ name: VIEWS.SECURITY_SETTINGS });
		}
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.authentication"));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), {
				class: normalizeClass(_ctx.$style.layout),
				"data-test-id": "settings-authentication-view"
			}, {
				default: withCtx(() => [
					createVNode(unref(SettingsPageHeader_default), {
						title: unref(i18n).baseText("settings.authentication"),
						description: unref(i18n).baseText("settings.authentication.description"),
						"docs-url": unref(AUTHENTICATION_DOCS_URL)
					}, null, 8, [
						"title",
						"description",
						"docs-url"
					]),
					createVNode(unref(SettingsSection_default), {
						title: unref(i18n).baseText("settings.authentication.methods.title"),
						"data-test-id": "settings-authentication-methods"
					}, {
						default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
							default: withCtx(() => [canManageSso.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
								key: 0,
								clickable: "",
								title: unref(i18n).baseText("settings.authentication.sso.title"),
								description: unref(i18n).baseText("settings.authentication.sso.description"),
								"data-test-id": "settings-authentication-sso-row",
								onClick: openSso
							}, {
								action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: ssoStatus.value }, null, 8, ["value"])]),
								_: 1
							}, 8, ["title", "description"])) : createCommentVNode("", true), canManageLdap.value ? (openBlock(), createBlock(unref(SettingsRow_default), {
								key: 1,
								clickable: "",
								title: unref(i18n).baseText("settings.ldap"),
								description: unref(i18n).baseText("settings.authentication.ldap.description"),
								"data-test-id": "settings-authentication-ldap-row",
								onClick: openLdap
							}, {
								action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: ldapStatus.value }, null, 8, ["value"])]),
								_: 1
							}, 8, ["title", "description"])) : createCommentVNode("", true)]),
							_: 1
						})]),
						_: 1
					}, 8, ["title"]),
					canManagePolicies.value ? (openBlock(), createBlock(unref(SettingsSection_default), {
						key: 0,
						title: unref(i18n).baseText("settings.authentication.requirements.title"),
						"data-test-id": "settings-authentication-requirements"
					}, {
						default: withCtx(() => [createVNode(unref(SettingsRowGroup_default), null, {
							default: withCtx(() => [createVNode(unref(SettingsRow_default), {
								clickable: "",
								title: unref(i18n).baseText("settings.authentication.mfa.title"),
								description: unref(i18n).baseText("settings.authentication.mfa.description"),
								"data-test-id": "settings-authentication-mfa-row",
								onClick: openPolicies
							}, {
								action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: mfaStatus.value }, null, 8, ["value"])]),
								_: 1
							}, 8, ["title", "description"])]),
							_: 1
						})]),
						_: 1
					}, 8, ["title"])) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, ["class"]);
		};
	}
}), [["__cssModules", { "$style": { layout: "_layout_121n7_2" } }]]);
//#endregion
export { SettingsAuthenticationView_default as default };
