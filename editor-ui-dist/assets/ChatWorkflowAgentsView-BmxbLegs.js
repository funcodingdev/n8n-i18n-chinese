import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { b as useMediaQuery } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as useUsersStore } from "./users.store-BBpeiveu.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import "./constants-CMdL1Kzl.js";
import { d as MOBILE_MEDIA_QUERY } from "./constants-zeVT1Ciq.js";
import { t as useChatStore } from "./chat.store-BOzBynwr.js";
import { s as filterAndSortAgents, w as stringifyModel } from "./chat.utils-yr8r7OPi.js";
import { n as ChatAgentSearchSort_default, r as ChatAgentCard_default, t as SkeletonAgentCard_default } from "./SkeletonAgentCard-23aRSbK2.js";
import { n as useChatCredentials, t as ChatLayout_default } from "./ChatLayout-DHWw99BN.js";
//#region src/features/ai/chatHub/ChatWorkflowAgentsView.vue?vue&type=script&setup=true&lang.ts
var ChatWorkflowAgentsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatWorkflowAgentsView",
	setup(__props) {
		const chatStore = useChatStore();
		const usersStore = useUsersStore();
		const router = useRouter();
		const isMobileDevice = useMediaQuery(MOBILE_MEDIA_QUERY);
		const i18n = useI18n();
		const agentFilter = ref({
			search: "",
			sortBy: "updatedAt"
		});
		const { credentialsByProvider } = useChatCredentials(usersStore.currentUserId ?? "anonymous");
		const readyToShowList = computed(() => chatStore.agentsReady);
		const allModels = computed(() => chatStore.agents.n8n.models);
		const agents = computed(() => filterAndSortAgents(allModels.value, agentFilter.value));
		async function handleEditAgent(model) {
			if (model.provider === "n8n") {
				const routeData = router.resolve({
					name: VIEWS.WORKFLOW,
					params: { workflowId: model.workflowId }
				});
				window.open(routeData.href, "_blank");
				return;
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
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.workflowAgents.title")), 1)]),
						_: 1
					}), createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.workflowAgents.description")), 1)]),
						_: 1
					})], 2)], 2),
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
						default: withCtx(() => [createTextVNode(toDisplayString(allModels.value.length === 0 ? unref(i18n).baseText("chatHub.workflowAgents.empty.noAgents") : unref(i18n).baseText("chatHub.workflowAgents.empty.noMatch")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.agentsGrid)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(agents.value, (agent) => {
						return openBlock(), createBlock(ChatAgentCard_default, {
							key: unref(stringifyModel)(agent.model),
							agent,
							onEdit: ($event) => handleEditAgent(agent.model)
						}, null, 8, ["agent", "onEdit"]);
					}), 128))], 2))
				], 2)]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/ChatWorkflowAgentsView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_4pmud_388";
var menuButton = "_menuButton_4pmud_401";
var isMobileDevice = "_isMobileDevice_4pmud_407";
var header = "_header_4pmud_411";
var headerContent = "_headerContent_4pmud_419";
var empty = "_empty_4pmud_425";
var agentsGrid = "_agentsGrid_4pmud_434";
var shimmer = "_shimmer_4pmud_1";
var spin = "_spin_4pmud_1";
var opacityPulse = "_opacityPulse_4pmud_1";
var popoverIn = "_popoverIn_4pmud_1";
var fadeIn = "_fadeIn_4pmud_1";
var collapsibleSlideDown = "_collapsibleSlideDown_4pmud_1";
var collapsibleSlideUp = "_collapsibleSlideUp_4pmud_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_4pmud_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_4pmud_1";
var blurSwapIn = "_blurSwapIn_4pmud_1";
var blurSwapOut = "_blurSwapOut_4pmud_1";
var pulseGlow = "_pulseGlow_4pmud_1";
var pulseGlowDelayed = "_pulseGlowDelayed_4pmud_1";
var fade = "_fade_4pmud_1";
var fadeInUp = "_fadeInUp_4pmud_1";
var fadeInDown = "_fadeInDown_4pmud_1";
var fadeInLeft = "_fadeInLeft_4pmud_1";
var fadeInRight = "_fadeInRight_4pmud_1";
var fadeOut = "_fadeOut_4pmud_1";
var fadeOutDown = "_fadeOutDown_4pmud_1";
var fadeOutUp = "_fadeOutUp_4pmud_1";
var fadeOutLeft = "_fadeOutLeft_4pmud_1";
var fadeOutRight = "_fadeOutRight_4pmud_1";
var ping = "_ping_4pmud_1";
var blinkBackground = "_blinkBackground_4pmud_1";
var typingBlink = "_typingBlink_4pmud_1";
var ChatWorkflowAgentsView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	menuButton,
	isMobileDevice,
	header,
	headerContent,
	empty,
	agentsGrid,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_4pmud_1",
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
var ChatWorkflowAgentsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatWorkflowAgentsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatWorkflowAgentsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatWorkflowAgentsView_default as default };
