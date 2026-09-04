import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-BmOzgrKG.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { I as refDebounced } from "./dist-BKkqSB6h.js";
import { t as Input_default } from "./Input-8wJB3rdZ.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as Select_default } from "./Select-Oh0j1SpO.js";
import { t as N8nActionDropdown_default } from "./N8nActionDropdown-DC_W9Qy-.js";
import { t as RouterLink } from "./vue-router-DPnGeMd9.js";
import { d as getAgentRoute } from "./chat.utils-yr8r7OPi.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-DatALJwb.js";
//#region src/features/ai/chatHub/components/ChatAgentCard.vue?vue&type=script&setup=true&lang.ts
var ChatAgentCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentCard",
	props: { agent: {} },
	emits: ["edit", "delete"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const menuItems = computed(() => {
			return __props.agent.model.provider === "custom-agent" ? [{
				id: "delete",
				label: i18n.baseText("chatHub.agent.card.menu.delete")
			}] : [];
		});
		const canEdit = computed(() => __props.agent.model.provider === "custom-agent" || __props.agent.model.provider === "n8n" && __props.agent.metadata.scopes?.includes("workflow:read"));
		function handleSelectMenu(action) {
			switch (action) {
				case "delete":
					emit("delete");
					return;
				case "edit": emit("edit");
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RouterLink), {
				to: unref(getAgentRoute)(__props.agent.model),
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "chat-agent-card"
			}, {
				default: withCtx(() => [
					createVNode(ChatAgentAvatar_default, {
						agent: __props.agent,
						size: "lg"
					}, null, 8, ["agent"]),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
						tag: "h3",
						size: "medium",
						bold: "",
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.agent.name), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.agent.description || unref(i18n).baseText("chatHub.agent.card.noDescription")), 1)]),
						_: 1
					}, 8, ["class"])], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [canEdit.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						variant: "subtle",
						icon: "pen",
						size: "medium",
						title: unref(i18n).baseText("chatHub.agent.card.button.edit"),
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("edit"), ["prevent"]))
					}, null, 8, ["title"])) : createCommentVNode("", true), menuItems.value.length > 0 ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
						key: 1,
						items: menuItems.value,
						placement: "bottom-end",
						onSelect: handleSelectMenu,
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop", "prevent"]))
					}, {
						activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							icon: "ellipsis-vertical",
							size: "medium",
							title: unref(i18n).baseText("chatHub.agent.card.button.moreOptions"),
							class: normalizeClass(_ctx.$style.actionDropdownTrigger)
						}, null, 8, ["title", "class"])]),
						_: 1
					}, 8, ["items"])) : createCommentVNode("", true)], 2)
				]),
				_: 1
			}, 8, ["to", "class"]);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatAgentCard.vue?vue&type=style&index=0&lang.module.scss
var card$1 = "_card_8wk54_388";
var avatar$1 = "_avatar_8wk54_404";
var content$1 = "_content_8wk54_408";
var badge = "_badge_8wk54_416";
var title$1 = "_title_8wk54_420";
var description$1 = "_description_8wk54_426";
var actions = "_actions_8wk54_432";
var actionDropdownTrigger = "_actionDropdownTrigger_8wk54_438";
var shimmer$2 = "_shimmer_8wk54_1";
var spin$2 = "_spin_8wk54_1";
var opacityPulse$2 = "_opacityPulse_8wk54_1";
var popoverIn$2 = "_popoverIn_8wk54_1";
var fadeIn$2 = "_fadeIn_8wk54_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_8wk54_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_8wk54_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_8wk54_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_8wk54_1";
var blurSwapIn$2 = "_blurSwapIn_8wk54_1";
var blurSwapOut$2 = "_blurSwapOut_8wk54_1";
var pulseGlow$2 = "_pulseGlow_8wk54_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_8wk54_1";
var fade$2 = "_fade_8wk54_1";
var fadeInUp$2 = "_fadeInUp_8wk54_1";
var fadeInDown$2 = "_fadeInDown_8wk54_1";
var fadeInLeft$2 = "_fadeInLeft_8wk54_1";
var fadeInRight$2 = "_fadeInRight_8wk54_1";
var fadeOut$2 = "_fadeOut_8wk54_1";
var fadeOutDown$2 = "_fadeOutDown_8wk54_1";
var fadeOutUp$2 = "_fadeOutUp_8wk54_1";
var fadeOutLeft$2 = "_fadeOutLeft_8wk54_1";
var fadeOutRight$2 = "_fadeOutRight_8wk54_1";
var ping$2 = "_ping_8wk54_1";
var blinkBackground$2 = "_blinkBackground_8wk54_1";
var typingBlink$2 = "_typingBlink_8wk54_1";
var ChatAgentCard_vue_vue_type_style_index_0_lang_module_default = {
	card: card$1,
	avatar: avatar$1,
	content: content$1,
	badge,
	title: title$1,
	description: description$1,
	actions,
	actionDropdownTrigger,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_8wk54_1",
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
var ChatAgentCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatAgentCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatAgentSearchSort.vue?vue&type=script&setup=true&lang.ts
var ChatAgentSearchSort_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentSearchSort",
	props: { modelValue: {} },
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const sortOptions = computed(() => [{
			label: i18n.baseText("chatHub.agents.sort.updatedAt"),
			value: "updatedAt"
		}, {
			label: i18n.baseText("chatHub.agents.sort.createdAt"),
			value: "createdAt"
		}]);
		const localSearch = ref(props.modelValue.search);
		const debouncedSearch = refDebounced(localSearch, 300);
		watch(() => props.modelValue.search, (newSearch) => {
			if (newSearch !== localSearch.value) localSearch.value = newSearch;
		});
		watch(debouncedSearch, (newSearch) => {
			if (newSearch !== props.modelValue.search) emit("update:modelValue", {
				...props.modelValue,
				search: newSearch
			});
		});
		function updateSortBy(value) {
			emit("update:modelValue", {
				...props.modelValue,
				sortBy: value
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.controls) }, [createVNode(unref(Input_default), {
				modelValue: localSearch.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localSearch.value = $event),
				class: normalizeClass(_ctx.$style.search),
				size: "medium",
				placeholder: unref(i18n).baseText("chatHub.agents.search.placeholder"),
				clearable: ""
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				_: 1
			}, 8, [
				"modelValue",
				"class",
				"placeholder"
			]), createVNode(unref(Select_default), {
				size: "medium",
				"model-value": __props.modelValue.sortBy,
				class: normalizeClass(_ctx.$style.sort),
				items: sortOptions.value,
				"onUpdate:modelValue": updateSortBy
			}, null, 8, [
				"model-value",
				"class",
				"items"
			])], 2);
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatAgentSearchSort.vue?vue&type=style&index=0&lang.module.scss
var controls = "_controls_z4g76_388";
var search = "_search_z4g76_394";
var sort = "_sort_z4g76_399";
var shimmer$1 = "_shimmer_z4g76_1";
var spin$1 = "_spin_z4g76_1";
var opacityPulse$1 = "_opacityPulse_z4g76_1";
var popoverIn$1 = "_popoverIn_z4g76_1";
var fadeIn$1 = "_fadeIn_z4g76_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_z4g76_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_z4g76_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_z4g76_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_z4g76_1";
var blurSwapIn$1 = "_blurSwapIn_z4g76_1";
var blurSwapOut$1 = "_blurSwapOut_z4g76_1";
var pulseGlow$1 = "_pulseGlow_z4g76_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_z4g76_1";
var fade$1 = "_fade_z4g76_1";
var fadeInUp$1 = "_fadeInUp_z4g76_1";
var fadeInDown$1 = "_fadeInDown_z4g76_1";
var fadeInLeft$1 = "_fadeInLeft_z4g76_1";
var fadeInRight$1 = "_fadeInRight_z4g76_1";
var fadeOut$1 = "_fadeOut_z4g76_1";
var fadeOutDown$1 = "_fadeOutDown_z4g76_1";
var fadeOutUp$1 = "_fadeOutUp_z4g76_1";
var fadeOutLeft$1 = "_fadeOutLeft_z4g76_1";
var fadeOutRight$1 = "_fadeOutRight_z4g76_1";
var ping$1 = "_ping_z4g76_1";
var blinkBackground$1 = "_blinkBackground_z4g76_1";
var typingBlink$1 = "_typingBlink_z4g76_1";
var ChatAgentSearchSort_vue_vue_type_style_index_0_lang_module_default = {
	controls,
	search,
	sort,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_z4g76_1",
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
var ChatAgentSearchSort_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatAgentSearchSort_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentSearchSort_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/SkeletonAgentCard.vue?vue&type=style&index=0&lang.module.scss
var card = "_card_1rfd4_388";
var skeleton = "_skeleton_1rfd4_398";
var avatar = "_avatar_1rfd4_414";
var content = "_content_1rfd4_431";
var title = "_title_1rfd4_439";
var description = "_description_1rfd4_444";
var actionButton = "_actionButton_1rfd4_449";
var shimmer = "_shimmer_1rfd4_1";
var spin = "_spin_1rfd4_1";
var opacityPulse = "_opacityPulse_1rfd4_1";
var popoverIn = "_popoverIn_1rfd4_1";
var fadeIn = "_fadeIn_1rfd4_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1rfd4_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1rfd4_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_1rfd4_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_1rfd4_1";
var blurSwapIn = "_blurSwapIn_1rfd4_1";
var blurSwapOut = "_blurSwapOut_1rfd4_1";
var pulseGlow = "_pulseGlow_1rfd4_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1rfd4_1";
var fade = "_fade_1rfd4_1";
var fadeInUp = "_fadeInUp_1rfd4_1";
var fadeInDown = "_fadeInDown_1rfd4_1";
var fadeInLeft = "_fadeInLeft_1rfd4_1";
var fadeInRight = "_fadeInRight_1rfd4_1";
var fadeOut = "_fadeOut_1rfd4_1";
var fadeOutDown = "_fadeOutDown_1rfd4_1";
var fadeOutUp = "_fadeOutUp_1rfd4_1";
var fadeOutLeft = "_fadeOutLeft_1rfd4_1";
var fadeOutRight = "_fadeOutRight_1rfd4_1";
var ping = "_ping_1rfd4_1";
var blinkBackground = "_blinkBackground_1rfd4_1";
var typingBlink = "_typingBlink_1rfd4_1";
var SkeletonAgentCard_vue_vue_type_style_index_0_lang_module_default = {
	card,
	skeleton,
	"skeleton-pulse": "_skeleton-pulse_1rfd4_1",
	avatar,
	content,
	title,
	description,
	actionButton,
	shimmer,
	spin,
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
//#endregion
//#region src/features/ai/chatHub/components/SkeletonAgentCard.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.card) }, [
		createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, null, 2),
		createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.title]) }, null, 2), createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.description]) }, null, 2)], 2),
		createBaseVNode("div", { class: normalizeClass([_ctx.$style.skeleton, _ctx.$style.actionButton]) }, null, 2)
	], 2);
}
var SkeletonAgentCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": SkeletonAgentCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { ChatAgentSearchSort_default as n, ChatAgentCard_default as r, SkeletonAgentCard_default as t };
