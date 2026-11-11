import { $d as init_runtime_core_esm_bundler, Ef as withCtx, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler } from "./vendor-AGzaQJYe.js";
import { AO as N8nText_default, Gb as useBasePageRedirectionHelper, HO as _plugin_vue_export_helper_default, RO as N8nButton_default, qO as useI18n, zO as N8nIcon_default } from "./app-MbtXRI_F.js";
//#region ../../modules/insights/frontend/src/components/InsightsPaywall.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var InsightsPaywall_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InsightsPaywall",
	setup(__props) {
		const pageRedirectionHelper = useBasePageRedirectionHelper();
		const i18n = useI18n();
		const goToUpgrade = async () => {
			await pageRedirectionHelper.goToUpgrade("insights", "upgrade-insights");
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.callout) }, [
				createVNode(unref(N8nIcon_default), {
					icon: "lock",
					size: "xlarge"
				}),
				createVNode(unref(N8nText_default), {
					bold: "",
					tag: "h4",
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.title")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.description")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nButton_default), {
					variant: "solid",
					"native-type": "button",
					size: "large",
					onClick: goToUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
					_: 1
				})
			], 2);
		};
	}
}), [["__cssModules", { "$style": { callout: "_callout_1rf5j_1" } }]]);
//#endregion
export { InsightsPaywall_default as default };
