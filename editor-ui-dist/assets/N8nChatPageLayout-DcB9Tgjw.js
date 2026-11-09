import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Gd as createVNode, Kf as unref, Pd as Fragment, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Vd as createElementBlock, Wd as createTextVNode, ep as init_shared_esm_bundler, os as useRouter, pf as renderSlot, pp as normalizeClass, qd as defineComponent, uf as openBlock, vp as toDisplayString } from "./vendor-BA8kaY8M.js";
import { Ds as INSTANCE_AI_VIEW, FD as N8nIcon_default, RD as _plugin_vue_export_helper_default, UD as useI18n } from "./app-DbOOaPK6.js";
//#region src/features/agents/n8nChatPage/components/N8nChatPageLayout.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var N8nChatPageLayout_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "N8nChatPageLayout",
	props: { fill: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		function goBack() {
			router.push({ name: INSTANCE_AI_VIEW });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.page, { [_ctx.$style.fill]: __props.fill }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.topRow) }, [createBaseVNode("button", {
				type: "button",
				class: normalizeClass(_ctx.$style.backLink),
				"data-testid": "n8n-chat-back",
				onClick: goBack
			}, [createVNode(unref(N8nIcon_default), {
				icon: "arrow-left",
				size: "small"
			}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.back")), 1)], 2), _ctx.$slots.leading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", {
				class: normalizeClass(_ctx.$style.divider),
				"aria-hidden": "true"
			}, null, 2), renderSlot(_ctx.$slots, "leading")], 64)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, { [_ctx.$style.fill]: __props.fill }]) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
}), [["__cssModules", { "$style": {
	page: "_page_1tew7_1",
	fill: "_fill_1tew7_10",
	topRow: "_topRow_1tew7_14",
	backLink: "_backLink_1tew7_21",
	divider: "_divider_1tew7_36",
	content: "_content_1tew7_42"
} }]]);
//#endregion
export { N8nChatPageLayout_default as t };
