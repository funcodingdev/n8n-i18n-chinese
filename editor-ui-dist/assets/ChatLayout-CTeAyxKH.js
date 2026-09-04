import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, O as createSlots, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, _ as Fragment, at as resolveComponent, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { n as BottomMenu_default, t as MainSidebarHeader_default } from "./MainSidebarHeader-DQHTDcOr.js";
import { t as N8nActionDropdown_default } from "./N8nActionDropdown-DC_W9Qy-.js";
import { c as useRoute, l as useRouter } from "./vue-router-DPnGeMd9.js";
import { t as N8nMenuItem_default } from "./N8nMenuItem-n3_H9HM4.js";
import { t as N8nResizeWrapper_default } from "./N8nResizeWrapper-C_gNBgTM.js";
import { wt as useCredentialsStore } from "./workflows.store-qP-dtzSs.js";
import { t as N8nScrollArea_default } from "./N8nScrollArea-EbE2ruUr.js";
import { t as BaseLayout_default } from "./BaseLayout-91CqLUrG.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-Dfjb2Avx.js";
import "./constants-CMdL1Kzl.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-BwuCrno4.js";
import { t as useKeybindings } from "./useKeybindings-D1nqZgLZ.js";
import { a as CHAT_PERSONAL_AGENTS_VIEW, c as CHAT_VIEW, l as CHAT_WORKFLOW_AGENTS_VIEW, n as CHAT_CONVERSATION_VIEW } from "./constants-zeVT1Ciq.js";
import { t as useChatStore } from "./chat.store-BOzBynwr.js";
import { T as unflattenModel, p as groupConversationsByDate } from "./chat.utils-yr8r7OPi.js";
import { t as useSettingsItems } from "./useSettingsItems-CSGhE01e.js";
import { t as useSidebarLayout } from "./useSidebarLayout-DhQ5W7C_.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-DatALJwb.js";
//#region src/features/ai/chatHub/components/ChatSidebarLink.vue?vue&type=script&setup=true&lang.ts
var ChatSidebarLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebarLink",
	props: {
		active: {
			type: Boolean,
			default: false
		},
		to: {},
		label: {},
		title: {},
		menuItems: { default: () => [] },
		icon: {},
		compact: { type: Boolean }
	},
	emits: ["actionSelect", "click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.menuItem, { [_ctx.$style.active]: __props.active }]) }, [_ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(_component_RouterLink, {
				to: __props.to,
				class: normalizeClass([_ctx.$style.menuItemLink, { [_ctx.$style.compact]: __props.compact }]),
				title: __props.title,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "icon", {}, () => [__props.icon ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					size: "large",
					icon: __props.icon
				}, null, 8, ["icon"])) : createCommentVNode("", true)]), !__props.compact ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.textContainer)
				}, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.label),
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.label), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.title),
					size: "medium",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}, 8, ["class"])], 2)) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"to",
				"class",
				"title"
			]), !__props.compact && __props.menuItems.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
				key: 0,
				items: __props.menuItems,
				class: normalizeClass(_ctx.$style.actionDropdown),
				placement: "bottom-start",
				onSelect: _cache[1] || (_cache[1] = ($event) => emit("actionSelect", $event)),
				onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
			}, {
				activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					variant: "ghost",
					icon: "ellipsis-vertical",
					class: normalizeClass(_ctx.$style.actionDropdownTrigger)
				}, null, 8, ["class"])]),
				_: 1
			}, 8, ["items", "class"])) : createCommentVNode("", true)], 64))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatSidebarLink.vue?vue&type=style&index=0&lang.module.scss
var menuItem = "_menuItem_ji5qh_388";
var active = "_active_ji5qh_394";
var menuItemLink = "_menuItemLink_ji5qh_398";
var compact = "_compact_ji5qh_410";
var textContainer = "_textContainer_ji5qh_417";
var label = "_label_ji5qh_423";
var title = "_title_ji5qh_432";
var actionDropdown = "_actionDropdown_ji5qh_441";
var actionDropdownTrigger = "_actionDropdownTrigger_ji5qh_452";
var shimmer$4 = "_shimmer_ji5qh_1";
var spin$4 = "_spin_ji5qh_1";
var opacityPulse$4 = "_opacityPulse_ji5qh_1";
var popoverIn$4 = "_popoverIn_ji5qh_1";
var fadeIn$4 = "_fadeIn_ji5qh_1";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_ji5qh_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_ji5qh_1";
var collapsibleSlideDownBlurred$4 = "_collapsibleSlideDownBlurred_ji5qh_1";
var collapsibleSlideUpBlurred$4 = "_collapsibleSlideUpBlurred_ji5qh_1";
var blurSwapIn$4 = "_blurSwapIn_ji5qh_1";
var blurSwapOut$4 = "_blurSwapOut_ji5qh_1";
var pulseGlow$4 = "_pulseGlow_ji5qh_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_ji5qh_1";
var fade$4 = "_fade_ji5qh_1";
var fadeInUp$4 = "_fadeInUp_ji5qh_1";
var fadeInDown$4 = "_fadeInDown_ji5qh_1";
var fadeInLeft$4 = "_fadeInLeft_ji5qh_1";
var fadeInRight$4 = "_fadeInRight_ji5qh_1";
var fadeOut$4 = "_fadeOut_ji5qh_1";
var fadeOutDown$4 = "_fadeOutDown_ji5qh_1";
var fadeOutUp$4 = "_fadeOutUp_ji5qh_1";
var fadeOutLeft$4 = "_fadeOutLeft_ji5qh_1";
var fadeOutRight$4 = "_fadeOutRight_ji5qh_1";
var ping$4 = "_ping_ji5qh_1";
var blinkBackground$4 = "_blinkBackground_ji5qh_1";
var typingBlink$4 = "_typingBlink_ji5qh_1";
var ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default = {
	menuItem,
	active,
	menuItemLink,
	compact,
	textContainer,
	label,
	title,
	actionDropdown,
	actionDropdownTrigger,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_ji5qh_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$4,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$4,
	blurSwapIn: blurSwapIn$4,
	blurSwapOut: blurSwapOut$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var ChatSidebarLink_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSidebarLink_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarLink_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatSessionMenuItem.vue?vue&type=script&setup=true&lang.ts
var ChatSessionMenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSessionMenuItem",
	props: {
		session: {},
		isRenaming: { type: Boolean },
		active: { type: Boolean },
		compact: { type: Boolean }
	},
	emits: [
		"startRename",
		"cancelRename",
		"confirmRename",
		"delete"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const input = useTemplateRef("input");
		const editedLabel = ref("");
		const chatStore = useChatStore();
		const i18n = useI18n();
		const agent = computed(() => {
			const model = unflattenModel(__props.session);
			if (!model) return null;
			return chatStore.getAgent(model, {
				name: __props.session.agentName,
				icon: __props.session.agentIcon
			});
		});
		const dropdownItems = computed(() => [{
			id: "rename",
			label: i18n.baseText("chatHub.session.actions.rename"),
			icon: "pencil"
		}, {
			id: "delete",
			label: i18n.baseText("chatHub.session.actions.delete"),
			icon: "trash-2"
		}]);
		function handleActionSelect(action) {
			if (action === "rename") {
				editedLabel.value = __props.session.title;
				emit("startRename", __props.session.id);
			} else if (action === "delete") emit("delete", __props.session.id);
		}
		function handleBlur() {
			const trimmed = editedLabel.value.trim();
			if (trimmed && trimmed !== __props.session.title) emit("confirmRename", __props.session.id, trimmed);
			else emit("cancelRename");
		}
		function handleKeyDown(e) {
			if (e.key === "Escape") {
				emit("cancelRename");
				return;
			}
			if (e.key === "Enter" && !e.isComposing) handleBlur();
		}
		watch(() => __props.isRenaming, async (renaming) => {
			if (renaming) {
				editedLabel.value = __props.session.title;
				await nextTick();
				input.value?.focus();
				input.value?.select();
			} else editedLabel.value = "";
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatSidebarLink_default, {
				to: {
					name: unref(CHAT_CONVERSATION_VIEW),
					params: { id: __props.session.id }
				},
				active: __props.active,
				compact: __props.compact,
				"menu-items": dropdownItems.value,
				label: __props.session.agentName,
				title: __props.session.title,
				onActionSelect: handleActionSelect
			}, createSlots({
				icon: withCtx(() => [createVNode(ChatAgentAvatar_default, {
					agent: agent.value,
					size: "sm",
					class: normalizeClass(_ctx.$style.avatar)
				}, null, 8, ["agent", "class"])]),
				_: 2
			}, [__props.isRenaming ? {
				name: "default",
				fn: withCtx(() => [createVNode(unref(Input_default), {
					ref_key: "input",
					ref: input,
					modelValue: editedLabel.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editedLabel.value = $event),
					size: "large",
					onBlur: handleBlur,
					onKeydown: handleKeyDown
				}, null, 8, ["modelValue"])]),
				key: "0"
			} : void 0]), 1032, [
				"to",
				"active",
				"compact",
				"menu-items",
				"label",
				"title"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatSessionMenuItem.vue?vue&type=style&index=0&lang.module.scss
var avatar = "_avatar_xh3fh_388";
var shimmer$3 = "_shimmer_xh3fh_1";
var spin$3 = "_spin_xh3fh_1";
var opacityPulse$3 = "_opacityPulse_xh3fh_1";
var popoverIn$3 = "_popoverIn_xh3fh_1";
var fadeIn$3 = "_fadeIn_xh3fh_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_xh3fh_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_xh3fh_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_xh3fh_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_xh3fh_1";
var blurSwapIn$3 = "_blurSwapIn_xh3fh_1";
var blurSwapOut$3 = "_blurSwapOut_xh3fh_1";
var pulseGlow$3 = "_pulseGlow_xh3fh_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_xh3fh_1";
var fade$3 = "_fade_xh3fh_1";
var fadeInUp$3 = "_fadeInUp_xh3fh_1";
var fadeInDown$3 = "_fadeInDown_xh3fh_1";
var fadeInLeft$3 = "_fadeInLeft_xh3fh_1";
var fadeInRight$3 = "_fadeInRight_xh3fh_1";
var fadeOut$3 = "_fadeOut_xh3fh_1";
var fadeOutDown$3 = "_fadeOutDown_xh3fh_1";
var fadeOutUp$3 = "_fadeOutUp_xh3fh_1";
var fadeOutLeft$3 = "_fadeOutLeft_xh3fh_1";
var fadeOutRight$3 = "_fadeOutRight_xh3fh_1";
var ping$3 = "_ping_xh3fh_1";
var blinkBackground$3 = "_blinkBackground_xh3fh_1";
var typingBlink$3 = "_typingBlink_xh3fh_1";
var ChatSessionMenuItem_vue_vue_type_style_index_0_lang_module_default = {
	avatar,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_xh3fh_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$3,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$3,
	blurSwapIn: blurSwapIn$3,
	blurSwapOut: blurSwapOut$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var ChatSessionMenuItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSessionMenuItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSessionMenuItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/SkeletonMenuItem.vue?vue&type=style&index=0&lang.module.scss
var skeletonItem = "_skeletonItem_5zvu6_388";
var skeletonAvatar = "_skeletonAvatar_5zvu6_397";
var skeletonText = "_skeletonText_5zvu6_398";
var shimmer$2 = "_shimmer_5zvu6_1";
var spin$2 = "_spin_5zvu6_1";
var opacityPulse$2 = "_opacityPulse_5zvu6_1";
var popoverIn$2 = "_popoverIn_5zvu6_1";
var fadeIn$2 = "_fadeIn_5zvu6_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_5zvu6_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_5zvu6_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_5zvu6_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_5zvu6_1";
var blurSwapIn$2 = "_blurSwapIn_5zvu6_1";
var blurSwapOut$2 = "_blurSwapOut_5zvu6_1";
var pulseGlow$2 = "_pulseGlow_5zvu6_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_5zvu6_1";
var fade$2 = "_fade_5zvu6_1";
var fadeInUp$2 = "_fadeInUp_5zvu6_1";
var fadeInDown$2 = "_fadeInDown_5zvu6_1";
var fadeInLeft$2 = "_fadeInLeft_5zvu6_1";
var fadeInRight$2 = "_fadeInRight_5zvu6_1";
var fadeOut$2 = "_fadeOut_5zvu6_1";
var fadeOutDown$2 = "_fadeOutDown_5zvu6_1";
var fadeOutUp$2 = "_fadeOutUp_5zvu6_1";
var fadeOutLeft$2 = "_fadeOutLeft_5zvu6_1";
var fadeOutRight$2 = "_fadeOutRight_5zvu6_1";
var ping$2 = "_ping_5zvu6_1";
var blinkBackground$2 = "_blinkBackground_5zvu6_1";
var typingBlink$2 = "_typingBlink_5zvu6_1";
var SkeletonMenuItem_vue_vue_type_style_index_0_lang_module_default = {
	skeletonItem,
	skeletonAvatar,
	skeletonText,
	"skeleton-pulse": "_skeleton-pulse_5zvu6_1",
	shimmer: shimmer$2,
	spin: spin$2,
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$2,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$2,
	blurSwapIn: blurSwapIn$2,
	blurSwapOut: blurSwapOut$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
//#endregion
//#region src/features/ai/chatHub/components/SkeletonMenuItem.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.skeletonItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.skeletonAvatar) }, null, 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.skeletonText) }, null, 2)], 2);
}
var SkeletonMenuItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": SkeletonMenuItem_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatSidebarContent.vue?vue&type=script&setup=true&lang.ts
var ChatSidebarContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebarContent",
	props: { isCollapsed: { type: Boolean } },
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const chatStore = useChatStore();
		const toast = useToast();
		const message = useMessage();
		const credentialsStore = useCredentialsStore();
		const telemetry = useTelemetry();
		const readyToShowSessions = computed(() => chatStore.sessionsReady && credentialsStore.allCredentialTypes.length > 0);
		const i18n = useI18n();
		const renamingSessionId = ref();
		const currentSessionId = computed(() => typeof route.params.id === "string" ? route.params.id : void 0);
		const groupedConversations = computed(() => groupConversationsByDate((chatStore.sessions.ids ?? []).reduce((acc, id) => {
			const session = chatStore.sessions.byId[id];
			if (session && session.type !== "manual") acc.push(session);
			return acc;
		}, [])));
		const newChat = computed(() => ({
			id: "new-chat",
			label: i18n.baseText("chatHub.sidebar.link.newChat"),
			icon: "plus",
			route: { to: {
				name: CHAT_VIEW,
				force: true
			} }
		}));
		const personalAgents = computed(() => ({
			id: "personal-agents",
			label: i18n.baseText("chatHub.sidebar.link.personalAgents"),
			icon: "message-square",
			route: { to: { name: CHAT_PERSONAL_AGENTS_VIEW } }
		}));
		const workflowAgents = computed(() => ({
			id: "workflow-agents",
			label: i18n.baseText("chatHub.sidebar.link.workflowAgents"),
			icon: "robot",
			route: { to: { name: CHAT_WORKFLOW_AGENTS_VIEW } }
		}));
		function handleStartRename(sessionId) {
			renamingSessionId.value = sessionId;
		}
		function handleCancelRename() {
			renamingSessionId.value = void 0;
		}
		async function handleConfirmRename(sessionId, newLabel) {
			try {
				await chatStore.renameSession(sessionId, newLabel);
				renamingSessionId.value = void 0;
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.session.updateTitle.error"));
			}
		}
		async function handleDeleteSession(sessionId) {
			if (await message.confirm(i18n.baseText("chatHub.session.delete.confirm.message"), i18n.baseText("chatHub.session.delete.confirm.title"), {
				confirmButtonText: i18n.baseText("chatHub.session.delete.confirm.button"),
				cancelButtonText: i18n.baseText("chatHub.session.delete.cancel.button")
			}) !== "confirm") return;
			try {
				await chatStore.deleteSession(sessionId);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("chatHub.session.delete.success")
				});
				if (sessionId === currentSessionId.value) router.push({ name: CHAT_VIEW });
			} catch (error) {
				toast.showError(error, i18n.baseText("chatHub.session.delete.error"));
			}
		}
		function handleNewChatClick() {
			telemetry.track("User clicked new chat button", { source: "chat_hub" });
		}
		onMounted(() => {
			chatStore.fetchSessions(true, {
				minLoadingTime: 250,
				type: "production"
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [createBaseVNode("div", { class: normalizeClass({
				[_ctx.$style.links]: true,
				[_ctx.$style.collapsed]: __props.isCollapsed
			}) }, [
				createVNode(KeyboardShortcutTooltip_default, {
					placement: "right",
					label: unref(i18n).baseText("chatHub.sidebar.link.newChat"),
					"show-after": 500,
					shortcut: {
						keys: ["o"],
						metaKey: true,
						shiftKey: true
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
						item: newChat.value,
						compact: __props.isCollapsed,
						active: unref(route).name === unref(CHAT_VIEW),
						onClick: handleNewChatClick
					}, null, 8, [
						"item",
						"compact",
						"active"
					])]),
					_: 1
				}, 8, ["label"]),
				createVNode(unref(N8nMenuItem_default), {
					item: personalAgents.value,
					compact: __props.isCollapsed,
					active: unref(route).name === unref(CHAT_PERSONAL_AGENTS_VIEW)
				}, null, 8, [
					"item",
					"compact",
					"active"
				]),
				createVNode(unref(N8nMenuItem_default), {
					item: workflowAgents.value,
					compact: __props.isCollapsed,
					active: unref(route).name === unref(CHAT_WORKFLOW_AGENTS_VIEW)
				}, null, 8, [
					"item",
					"compact",
					"active"
				])
			], 2), createVNode(unref(N8nScrollArea_default), {
				"as-child": "",
				type: "scroll"
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.historySections, { [_ctx.$style.collapsed]: __props.isCollapsed }]),
					"data-test-id": "chat-conversation-list"
				}, [!readyToShowSessions.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.group)
				}, [(openBlock(), createElementBlock(Fragment, null, renderList(10, (i) => {
					return createVNode(SkeletonMenuItem_default, { key: `loading-${i}` });
				}), 64))], 2)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(groupedConversations.value, (group, index) => {
					return openBlock(), createElementBlock("div", {
						key: group.group,
						class: normalizeClass(_ctx.$style.group)
					}, [
						!__props.isCollapsed ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.groupHeader),
							size: "small",
							bold: "",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(group.group), 1)]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true),
						(openBlock(true), createElementBlock(Fragment, null, renderList(group.sessions, (session) => {
							return openBlock(), createBlock(ChatSessionMenuItem_default, {
								key: session.id,
								session,
								compact: __props.isCollapsed,
								active: currentSessionId.value === session.id,
								"is-renaming": renamingSessionId.value === session.id,
								onStartRename: handleStartRename,
								onCancelRename: handleCancelRename,
								onConfirmRename: handleConfirmRename,
								onDelete: handleDeleteSession
							}, null, 8, [
								"session",
								"compact",
								"active",
								"is-renaming"
							]);
						}), 128)),
						index === groupedConversations.value.length - 1 && unref(chatStore).sessions.hasMore && !unref(chatStore).sessionsLoading ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: 1,
							item: {
								id: "load-more-sessions",
								label: unref(i18n).baseText("chatHub.sidebar.loadMoreSessions"),
								icon: "circle-ellipsis"
							},
							compact: __props.isCollapsed,
							onClick: _cache[0] || (_cache[0] = () => unref(chatStore).fetchMoreSessions({ minLoadingTime: 250 }))
						}, null, 8, ["item", "compact"])) : createCommentVNode("", true),
						index === groupedConversations.value.length - 1 && unref(chatStore).sessionsLoading ? (openBlock(), createElementBlock(Fragment, { key: 2 }, renderList(10, (i) => {
							return createVNode(SkeletonMenuItem_default, { key: i });
						}), 64)) : createCommentVNode("", true)
					], 2);
				}), 128))], 2)]),
				_: 1
			})], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatSidebarContent.vue?vue&type=style&index=0&lang.module.scss
var logoContainer = "_logoContainer_d5n25_388";
var component = "_component_d5n25_394";
var header = "_header_d5n25_400";
var logo = "_logo_d5n25_388";
var links = "_links_d5n25_416";
var collapsed = "_collapsed_d5n25_421";
var historySections = "_historySections_d5n25_425";
var group = "_group_d5n25_435";
var groupHeader = "_groupHeader_d5n25_441";
var loading = "_loading_d5n25_445";
var empty = "_empty_d5n25_446";
var shimmer$1 = "_shimmer_d5n25_1";
var spin$1 = "_spin_d5n25_1";
var opacityPulse$1 = "_opacityPulse_d5n25_1";
var popoverIn$1 = "_popoverIn_d5n25_1";
var fadeIn$1 = "_fadeIn_d5n25_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_d5n25_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_d5n25_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_d5n25_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_d5n25_1";
var blurSwapIn$1 = "_blurSwapIn_d5n25_1";
var blurSwapOut$1 = "_blurSwapOut_d5n25_1";
var pulseGlow$1 = "_pulseGlow_d5n25_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_d5n25_1";
var fade$1 = "_fade_d5n25_1";
var fadeInUp$1 = "_fadeInUp_d5n25_1";
var fadeInDown$1 = "_fadeInDown_d5n25_1";
var fadeInLeft$1 = "_fadeInLeft_d5n25_1";
var fadeInRight$1 = "_fadeInRight_d5n25_1";
var fadeOut$1 = "_fadeOut_d5n25_1";
var fadeOutDown$1 = "_fadeOutDown_d5n25_1";
var fadeOutUp$1 = "_fadeOutUp_d5n25_1";
var fadeOutLeft$1 = "_fadeOutLeft_d5n25_1";
var fadeOutRight$1 = "_fadeOutRight_d5n25_1";
var ping$1 = "_ping_d5n25_1";
var blinkBackground$1 = "_blinkBackground_d5n25_1";
var typingBlink$1 = "_typingBlink_d5n25_1";
var ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default = {
	logoContainer,
	component,
	header,
	logo,
	links,
	collapsed,
	historySections,
	group,
	groupHeader,
	loading,
	empty,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_d5n25_1",
	opacityPulse: opacityPulse$1,
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	collapsibleSlideDownBlurred: collapsibleSlideDownBlurred$1,
	collapsibleSlideUpBlurred: collapsibleSlideUpBlurred$1,
	blurSwapIn: blurSwapIn$1,
	blurSwapOut: blurSwapOut$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	ping: ping$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var ChatSidebarContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSidebarContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebarContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatSidebar.vue?vue&type=script&setup=true&lang.ts
var ChatSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebar",
	setup(__props) {
		const i18n = useI18n();
		const router = useRouter();
		const { isCollapsed, isResizing, sidebarWidth, onResizeStart, onResize, onResizeEnd, toggleCollapse } = useSidebarLayout();
		function openCommandBar(event) {
			event.stopPropagation();
			nextTick(() => {
				const keyboardEvent = new KeyboardEvent("keydown", {
					key: "k",
					code: "KeyK",
					metaKey: true,
					bubbles: true,
					cancelable: true
				});
				document.dispatchEvent(keyboardEvent);
			});
		}
		const { settingsItems, handleSettingsItemSelect } = useSettingsItems();
		const mainMenuItems = computed(() => [{
			id: "settings",
			label: i18n.baseText("mainSidebar.settings"),
			icon: "settings",
			available: true,
			children: settingsItems.value
		}]);
		const visibleMenuItems = computed(() => mainMenuItems.value.filter((item) => item.available !== false));
		useKeybindings({ ["bracketleft"]: () => toggleCollapse() });
		const onLogout = () => {
			router.push({ name: VIEWS.SIGNOUT });
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nResizeWrapper_default), {
				id: "side-menu",
				class: normalizeClass({
					[_ctx.$style.sideMenu]: true,
					[_ctx.$style.sideMenuCollapsed]: unref(isCollapsed),
					[_ctx.$style.sideMenuResizing]: unref(isResizing)
				}),
				width: unref(sidebarWidth),
				style: normalizeStyle(unref(isCollapsed) ? {} : { width: `${unref(sidebarWidth)}px` }),
				"supported-directions": ["right"],
				"min-width": unref(200),
				"max-width": unref(500),
				"grid-size": 8,
				onResizestart: unref(onResizeStart),
				onResize: unref(onResize),
				onResizeend: unref(onResizeEnd)
			}, {
				default: withCtx(() => [createVNode(MainSidebarHeader_default, {
					"hide-create": "",
					"is-collapsed": unref(isCollapsed),
					onCollapse: unref(toggleCollapse),
					onOpenCommandBar: openCommandBar
				}, null, 8, ["is-collapsed", "onCollapse"]), createVNode(unref(N8nScrollArea_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.scrollArea) }, [createVNode(ChatSidebarContent_default, { "is-collapsed": unref(isCollapsed) }, null, 8, ["is-collapsed"]), createVNode(BottomMenu_default, {
						items: visibleMenuItems.value,
						"is-collapsed": unref(isCollapsed),
						onSelect: unref(handleSettingsItemSelect),
						onLogout
					}, null, 8, [
						"items",
						"is-collapsed",
						"onSelect"
					])], 2)]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"class",
				"width",
				"style",
				"min-width",
				"max-width",
				"onResizestart",
				"onResize",
				"onResizeend"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatSidebar.vue?vue&type=style&index=0&lang.module.scss
var sideMenu = "_sideMenu_1dis5_388";
var sideMenuCollapsed = "_sideMenuCollapsed_1dis5_398";
var sideMenuResizing = "_sideMenuResizing_1dis5_402";
var scrollArea = "_scrollArea_1dis5_406";
var shimmer = "_shimmer_1dis5_1";
var spin = "_spin_1dis5_1";
var opacityPulse = "_opacityPulse_1dis5_1";
var popoverIn = "_popoverIn_1dis5_1";
var fadeIn = "_fadeIn_1dis5_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1dis5_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1dis5_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1dis5_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1dis5_1";
var blurSwapIn = "_blurSwapIn_1dis5_1";
var blurSwapOut = "_blurSwapOut_1dis5_1";
var pulseGlow = "_pulseGlow_1dis5_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1dis5_1";
var fade = "_fade_1dis5_1";
var fadeInUp = "_fadeInUp_1dis5_1";
var fadeInDown = "_fadeInDown_1dis5_1";
var fadeInLeft = "_fadeInLeft_1dis5_1";
var fadeInRight = "_fadeInRight_1dis5_1";
var fadeOut = "_fadeOut_1dis5_1";
var fadeOutDown = "_fadeOutDown_1dis5_1";
var fadeOutUp = "_fadeOutUp_1dis5_1";
var fadeOutLeft = "_fadeOutLeft_1dis5_1";
var fadeOutRight = "_fadeOutRight_1dis5_1";
var ping = "_ping_1dis5_1";
var blinkBackground = "_blinkBackground_1dis5_1";
var typingBlink = "_typingBlink_1dis5_1";
var ChatSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sideMenu,
	sideMenuCollapsed,
	sideMenuResizing,
	scrollArea,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1dis5_1",
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
var ChatSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/layouts/ChatLayout.vue
var ChatLayout_default = /* @__PURE__ */ defineComponent({
	__name: "ChatLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(ChatSidebar_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
//#endregion
export { ChatLayout_default as default };
