import { Af as init_reactivity_esm_bundler, Bd as createCommentVNode, Kf as unref, Ld as computed, Qd as init_runtime_core_esm_bundler, qd as defineComponent, uf as openBlock, zd as createBlock } from "./vendor-BA8kaY8M.js";
import { Br as AgentPersonalisationIcon_default, FD as N8nIcon_default } from "./app-DbOOaPK6.js";
//#region src/features/agents/n8nChatPage/components/RecentChatIcon.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler();
//#endregion
//#region src/features/agents/n8nChatPage/components/RecentChatIcon.vue
var RecentChatIcon_default = /* @__PURE__ */ defineComponent({
	__name: "RecentChatIcon",
	props: {
		item: { default: void 0 },
		size: { default: 16 }
	},
	setup(__props) {
		const props = __props;
		const assistantIconSize = computed(() => Math.round(props.size * .75));
		return (_ctx, _cache) => {
			return __props.item?.kind === "assistant" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "n8n-assistant",
				size: assistantIconSize.value
			}, null, 8, ["size"])) : __props.item?.kind === "agent" ? (openBlock(), createBlock(AgentPersonalisationIcon_default, {
				key: 1,
				personalisation: __props.item.thread.agent.personalisation,
				size: __props.size
			}, null, 8, ["personalisation", "size"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
export { RecentChatIcon_default as t };
