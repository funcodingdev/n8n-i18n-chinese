import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Tf as withCtx, ep as init_shared_esm_bundler, os as useRouter, pp as normalizeClass, qd as defineComponent, sf as onMounted, uf as openBlock, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { RD as _plugin_vue_export_helper_default, UD as useI18n, Uy as VIEWS, Yy as useSettingsStore, cE as SettingsSection_default, dE as SettingsRowConfigure_default, e_ as AUTHENTICATION_DOCS_URL, fE as SettingsRow_default, hE as SettingsLayout_default, mE as SettingsPageHeader_default, np as useDocumentTitle, rt as useSSOStore, uE as SettingsRowGroup_default } from "./app-CfhiRDif.js";
import { t as useUserHelpers } from "./useUserHelpers-COdg9Rgf.js";
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
