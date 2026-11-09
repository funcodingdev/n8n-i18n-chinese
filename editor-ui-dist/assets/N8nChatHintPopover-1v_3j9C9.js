import { Af as init_reactivity_esm_bundler, Cf as watch, Gd as createVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, Rd as createBaseVNode, Tf as withCtx, Wd as createTextVNode, ep as init_shared_esm_bundler, pf as renderSlot, pp as normalizeClass, qd as defineComponent, uf as openBlock, vp as toDisplayString, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { Di as useAgentTelemetry, ED as N8nText_default, PD as N8nButton_default, RD as _plugin_vue_export_helper_default, UD as useI18n, Wy as useStorage, dh as N8N_CHAT_HINT_DISMISSED_STORAGE_KEYS, oE as N8nPopover_default } from "./app-DbOOaPK6.js";
//#region src/features/agents/components/N8nChatHintPopover.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_shared_esm_bundler(), init_reactivity_esm_bundler();
var _hoisted_1 = ["data-test-id"];
var N8nChatHintPopover_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "N8nChatHintPopover",
	props: {
		hint: {},
		active: { type: Boolean },
		title: {},
		body: {},
		agentId: { default: void 0 },
		side: { default: "bottom" },
		align: { default: "start" }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const agentTelemetry = useAgentTelemetry();
		const dismissed = useStorage(N8N_CHAT_HINT_DISMISSED_STORAGE_KEYS[props.hint]);
		const open = computed(() => props.active && dismissed.value !== "true");
		let viewTracked = false;
		watch(open, (isOpen) => {
			if (!isOpen || viewTracked) return;
			viewTracked = true;
			agentTelemetry.trackViewedN8nChatHint({
				hint: props.hint,
				agentId: props.agentId
			});
		}, { immediate: true });
		function dismiss() {
			if (!open.value) return;
			dismissed.value = "true";
			agentTelemetry.trackDismissedN8nChatHint({
				hint: props.hint,
				agentId: props.agentId
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: open.value,
				side: props.side,
				align: props.align,
				"show-arrow": "",
				"enable-scrolling": false,
				"suppress-auto-focus": "",
				width: "calc(var(--spacing--5xl) + var(--spacing--3xl))"
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				content: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.hint),
					"data-test-id": `n8n-chat-hint-${props.hint}`
				}, [
					createVNode(unref(N8nText_default), {
						bold: "",
						size: "medium",
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.title), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.body), 1)]),
						_: 1
					}),
					createVNode(unref(N8nButton_default), {
						size: "small",
						variant: "outline",
						label: unref(i18n).baseText("agents.n8nChatHint.gotIt"),
						"data-test-id": `n8n-chat-hint-${props.hint}-got-it`,
						onClick: dismiss
					}, null, 8, ["label", "data-test-id"])
				], 10, _hoisted_1)]),
				_: 3
			}, 8, [
				"open",
				"side",
				"align"
			]);
		};
	}
}), [["__cssModules", { "$style": { hint: "_hint_1x8pa_1" } }]]);
//#endregion
export { N8nChatHintPopover_default as t };
