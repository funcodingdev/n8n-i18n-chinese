import { Af as init_reactivity_esm_bundler, Gd as createVNode, Kf as unref, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, ep as init_shared_esm_bundler, qd as defineComponent, sf as onMounted, uf as openBlock, vp as toDisplayString } from "./vendor-BA8kaY8M.js";
import { UD as useI18n, WE as N8nHeading_default, np as useDocumentTitle } from "./app-DbOOaPK6.js";
import { t as LogStreamingPaywall_default } from "./LogStreamingPaywall-CBrTZX4F.js";
//#region src/features/integrations/logStreaming.ee/views/LogStreamingPlaceholderView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = { class: "mb-2xl" };
//#endregion
//#region src/features/integrations/logStreaming.ee/views/LogStreamingPlaceholderView.vue
var LogStreamingPlaceholderView_default = /* @__PURE__ */ defineComponent({
	__name: "LogStreamingPlaceholderView",
	setup(__props) {
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		onMounted(() => {
			documentTitle.set(i18n.baseText("settings.log-streaming.heading"));
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nHeading_default), { size: "2xlarge" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.log-streaming.heading")), 1)]),
				_: 1
			})]), createVNode(LogStreamingPaywall_default)]);
		};
	}
});
//#endregion
export { LogStreamingPlaceholderView_default as default };
