import { Af as init_reactivity_esm_bundler, Ef as withDirectives, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Tf as withCtx, Vd as createElementBlock, Wd as createTextVNode, ep as init_shared_esm_bundler, hf as resolveDirective, pf as renderSlot, qd as defineComponent, uf as openBlock, vp as toDisplayString } from "./vendor-BA8kaY8M.js";
import { ED as N8nText_default, FD as N8nIcon_default, OD as N8nTooltip_default, RD as _plugin_vue_export_helper_default, UD as useI18n, Ul as usePushConnectionStore, yf as useBackendConnectionStore } from "./app-DbOOaPK6.js";
//#region src/app/components/ConnectionTracker.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var _hoisted_1 = {
	key: 0,
	class: "connection-lost"
};
var _hoisted_2 = { class: "connection-lost-content" };
//#endregion
//#region src/app/components/ConnectionTracker.vue
var ConnectionTracker_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ConnectionTracker",
	setup(__props) {
		const pushConnectionStore = usePushConnectionStore();
		const backendConnectionStore = useBackendConnectionStore();
		const i18n = useI18n();
		const connectionStatus = computed(() => {
			if (!backendConnectionStore.isOnline) return {
				hasError: true,
				message: "network.error.message",
				tooltip: "network.error.tooltip"
			};
			if (pushConnectionStore.isConnectionRequested && !pushConnectionStore.isConnected && !pushConnectionStore.isConnecting) return {
				hasError: true,
				message: "pushConnection.error.message",
				tooltip: "pushConnection.error.tooltip"
			};
			return {
				hasError: false,
				message: null,
				tooltip: null
			};
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("span", null, [connectionStatus.value.hasError ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nTooltip_default), { placement: "bottom-end" }, {
				content: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText(connectionStatus.value.tooltip)]])]),
				default: withCtx(() => [createBaseVNode("span", _hoisted_2, [createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					color: "warning"
				}), createVNode(unref(N8nText_default), { size: "small" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(connectionStatus.value.message)), 1)]),
					_: 1
				})])]),
				_: 1
			})])) : renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)]);
		};
	}
}), [["__scopeId", "data-v-6825e866"]]);
//#endregion
export { ConnectionTracker_default as t };
