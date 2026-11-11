import { $d as init_runtime_core_esm_bundler, Bd as createBlock, Ef as withCtx, Fd as Fragment, Gd as createTextVNode, Hd as createElementBlock, Jd as defineComponent, Jf as unref, Kd as createVNode, Ku as useMediaQuery, Rd as computed, Vd as createCommentVNode, bp as toDisplayString, df as openBlock, hp as normalizeClass, jf as init_reactivity_esm_bundler, np as init_shared_esm_bundler, ns as useRouter, pf as renderList, ts as useRoute, wf as watch, zd as createBaseVNode, zf as ref } from "./vendor-AGzaQJYe.js";
import { AO as N8nText_default, Et as filterAndSortAgents, Fn as MOBILE_MEDIA_QUERY, HO as _plugin_vue_export_helper_default, RO as N8nButton_default, Tn as AGENT_EDITOR_MODAL_KEY, Vt as stringifyModel, Yb as useToast, fE as useMessage, qO as useI18n, s_ as useUIStore, tx as useUsersStore, xt as useChatStore } from "./app-MbtXRI_F.js";
import { t as SkeletonAgentCard_default } from "./SkeletonAgentCard-CeimNPZX.js";
import { n as ChatAgentCard_default, t as ChatAgentSearchSort_default } from "./ChatAgentSearchSort-DNqRMcre.js";
import { n as useChatCredentials, t as ChatLayout_default } from "./ChatLayout-20zuEGPo.js";
//#region src/features/ai/chatHub/ChatPersonalAgentsView.vue?vue&type=script&setup=true&lang.ts
init_runtime_core_esm_bundler(), init_reactivity_esm_bundler(), init_shared_esm_bundler();
var ChatPersonalAgentsView_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ChatPersonalAgentsView",
	setup(__props) {
		const chatStore = useChatStore();
		const uiStore = useUIStore();
		const route = useRoute();
		const router = useRouter();
		const toast = useToast();
		const message = useMessage();
		const usersStore = useUsersStore();
		const isMobileDevice = useMediaQuery(MOBILE_MEDIA_QUERY);
		const i18n = useI18n();
		const agentFilter = ref({
			search: "",
			sortBy: "updatedAt"
		});
		const initialAgentId = typeof route.query.agentId === "string" ? route.query.agentId : null;
		const { credentialsByProvider } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		const readyToShowList = computed(() => chatStore.agentsReady);
		const allModels = computed(() => chatStore.agents["custom-agent"].models);
		const agents = computed(() => filterAndSortAgents(allModels.value, agentFilter.value));
		function handleCreateAgent() {
			uiStore.openModalWithData({
				name: AGENT_EDITOR_MODAL_KEY,
				data: { credentials: credentialsByProvider }
			});
		}
		function handleEditAgent(model) {
			if (model.provider === "custom-agent") {
				router.replace({ query: { agentId: model.agentId } });
				uiStore.openModalWithData({
					name: AGENT_EDITOR_MODAL_KEY,
					data: {
						agentId: model.agentId,
						credentials: credentialsByProvider
					}
				});
			}
		}
		watch(credentialsByProvider, (credentials) => {
			if (!credentials || !initialAgentId) return;
			uiStore.openModalWithData({
				name: AGENT_EDITOR_MODAL_KEY,
				data: {
					agentId: initialAgentId,
					credentials
				}
			});
		}, { immediate: true });
		watch(() => uiStore.modalsById[AGENT_EDITOR_MODAL_KEY]?.open, (isOpen) => {
			if (!isOpen && route.query.agentId) router.replace({ query: {} });
		});
		async function handleDeleteAgent(agentId) {
			if (await message.confirm(i18n.baseText("chatHub.agents.delete.confirm.message"), i18n.baseText("chatHub.agents.delete.confirm.title"), {
				confirmButtonText: i18n.baseText("chatHub.agents.delete.confirm.button"),
				cancelButtonText: i18n.baseText("chatHub.agents.delete.cancel.button")
			}) !== "confirm" || !credentialsByProvider.value) return;
			try {
				await chatStore.deleteCustomAgent(agentId, credentialsByProvider.value);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("chatHub.agents.delete.success")
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.agents.delete.error"));
			}
		}
		watch(credentialsByProvider, (credentials) => {
			if (credentials) chatStore.fetchAgents(credentials, { minLoadingTime: 250 });
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatLayout_default, null, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.container, { [_ctx.$style.isMobileDevice]: unref(isMobileDevice) }]) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerContent) }, [createVNode(unref(N8nText_default), {
						tag: "h1",
						size: "xlarge",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.personalAgents.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.personalAgents.description")), 1)]),
						_: 1
					})], 2), createVNode(unref(N8nButton_default), {
						variant: "solid",
						icon: "plus",
						size: "medium",
						onClick: handleCreateAgent
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.agents.button.newAgent")), 1)]),
						_: 1
					})], 2),
					readyToShowList.value && allModels.value.length > 0 ? (openBlock(), createBlock(ChatAgentSearchSort_default, {
						key: 0,
						modelValue: agentFilter.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => agentFilter.value = $event)
					}, null, 8, ["modelValue"])) : createCommentVNode("", true),
					!readyToShowList.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.agentsGrid)
					}, [(openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
						return createVNode(SkeletonAgentCard_default, { key: i });
					}), 64))], 2)) : agents.value.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.empty)
					}, [createVNode(unref(N8nText_default), {
						color: "text-light",
						size: "medium"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(allModels.value.length === 0 ? unref(i18n).baseText("chatHub.personalAgents.empty.noAgents") : unref(i18n).baseText("chatHub.personalAgents.empty.noMatch")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.agentsGrid)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(agents.value, (agent) => {
						return openBlock(), createElementBlock(Fragment, { key: unref(stringifyModel)(agent.model) }, [agent.model.provider === "custom-agent" ? (openBlock(), createBlock(ChatAgentCard_default, {
							key: 0,
							agent,
							onEdit: ($event) => handleEditAgent(agent.model),
							onDelete: ($event) => handleDeleteAgent(agent.model.agentId)
						}, null, 8, [
							"agent",
							"onEdit",
							"onDelete"
						])) : createCommentVNode("", true)], 64);
					}), 128))], 2))
				], 2)]),
				_: 1
			});
		};
	}
}), [["__cssModules", { "$style": {
	container: "_container_clrtw_1",
	header: "_header_clrtw_14",
	headerContent: "_headerContent_clrtw_22",
	empty: "_empty_clrtw_28",
	agentsGrid: "_agentsGrid_clrtw_37"
} }]]);
//#endregion
export { ChatPersonalAgentsView_default as default };
