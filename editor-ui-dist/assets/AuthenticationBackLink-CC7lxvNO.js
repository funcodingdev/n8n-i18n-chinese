import { $d as init_runtime_core_esm_bundler, Ef as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, ns as useRouter } from "./vendor-AGzaQJYe.js";
import { BO as _plugin_vue_export_helper_default, GO as useI18n, IO as N8nButton_default, LO as N8nIcon_default, Yb as VIEWS } from "./app-DGoK9ugD.js";
//#region src/features/settings/sso/components/AuthenticationBackLink.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var AuthenticationBackLink_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "AuthenticationBackLink",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		async function goBack() {
			await router.push({ name: VIEWS.AUTHENTICATION_SETTINGS });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.backRow) }, [createVNode(unref(N8nButton_default), {
				variant: "ghost",
				size: "small",
				class: normalizeClass(_ctx.$style.backButton),
				"data-test-id": "settings-authentication-back",
				onClick: goBack
			}, {
				icon: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "arrow-left" })]),
				default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("settings.authentication.back")), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
}), [["__cssModules", { "$style": {
	backRow: "_backRow_icycf_1",
	backButton: "_backButton_icycf_6"
} }]]);
//#endregion
export { AuthenticationBackLink_default as t };
