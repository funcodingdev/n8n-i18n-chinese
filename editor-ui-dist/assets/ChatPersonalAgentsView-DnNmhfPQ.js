import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { b as useMediaQuery } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import "./constants-DPRLSskW.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { d as MOBILE_MEDIA_QUERY, t as AGENT_EDITOR_MODAL_KEY } from "./constants-zeVT1Ciq.js";
import { t as useChatStore } from "./chat.store-DoBcmeo2.js";
import { s as filterAndSortAgents, w as stringifyModel } from "./chat.utils-CBVJCCaJ.js";
import { n as ChatAgentSearchSort_default, r as ChatAgentCard_default, t as SkeletonAgentCard_default } from "./SkeletonAgentCard-LWTzhnwL.js";
import { n as useChatCredentials, t as ChatLayout_default } from "./ChatLayout-2rvbTHV3.js";
//#region src/features/ai/chatHub/ChatPersonalAgentsView.vue?vue&type=script&setup=true&lang.ts
var ChatPersonalAgentsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
});
//#endregion
//#region src/features/ai/chatHub/ChatPersonalAgentsView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_xuryp_388";
var header = "_header_xuryp_401";
var headerContent = "_headerContent_xuryp_409";
var empty = "_empty_xuryp_415";
var agentsGrid = "_agentsGrid_xuryp_424";
var shimmer = "_shimmer_xuryp_1";
var spin = "_spin_xuryp_1";
var opacityPulse = "_opacityPulse_xuryp_1";
var popoverIn = "_popoverIn_xuryp_1";
var fadeIn = "_fadeIn_xuryp_1";
var collapsibleSlideDown = "_collapsibleSlideDown_xuryp_1";
var collapsibleSlideUp = "_collapsibleSlideUp_xuryp_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_xuryp_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_xuryp_1";
var blurSwapIn = "_blurSwapIn_xuryp_1";
var blurSwapOut = "_blurSwapOut_xuryp_1";
var pulseGlow = "_pulseGlow_xuryp_1";
var pulseGlowDelayed = "_pulseGlowDelayed_xuryp_1";
var fade = "_fade_xuryp_1";
var fadeInUp = "_fadeInUp_xuryp_1";
var fadeInDown = "_fadeInDown_xuryp_1";
var fadeInLeft = "_fadeInLeft_xuryp_1";
var fadeInRight = "_fadeInRight_xuryp_1";
var fadeOut = "_fadeOut_xuryp_1";
var fadeOutDown = "_fadeOutDown_xuryp_1";
var fadeOutUp = "_fadeOutUp_xuryp_1";
var fadeOutLeft = "_fadeOutLeft_xuryp_1";
var fadeOutRight = "_fadeOutRight_xuryp_1";
var ping = "_ping_xuryp_1";
var blinkBackground = "_blinkBackground_xuryp_1";
var typingBlink = "_typingBlink_xuryp_1";
var ChatPersonalAgentsView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	header,
	headerContent,
	empty,
	agentsGrid,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_xuryp_1",
	opacityPulse,
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	collapsibleSlideDownBlurred,
	collapsibleSlideUpBlurred,
	blurSwapIn,
	blurSwapOut,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	ping,
	blinkBackground,
	typingBlink
};
var ChatPersonalAgentsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatPersonalAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPersonalAgentsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatPersonalAgentsView_default as default };
