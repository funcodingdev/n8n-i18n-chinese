import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, at as resolveComponent, bn as normalizeStyle, bt as withCtx, f as vModelText, gt as watch, h as withModifiers, j as createVNode, m as withKeys, n as Transition, rt as renderList, st as resolveDynamicComponent, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-DYHsQBZB.js";
import { s as useI18n } from "./src-xmGSq23Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-D-F0WtqU.js";
import { t as N8nButton_default } from "./N8nButton-IeUuYO4Y.js";
import { t as N8nIcon_default } from "./N8nIcon-CoHAjoPo.js";
import { t as N8nIconButton_default } from "./N8nIconButton-A99ePGGs.js";
import { h as useEventListener, w as useSessionStorage } from "./dist-BKkqSB6h.js";
import { t as N8nText_default } from "./N8nText-Cyh6n6lU.js";
import { t as N8nTooltip_default } from "./N8nTooltip-D8UozEO5.js";
import { t as useMessage } from "./useMessage-CVBZspiQ.js";
import { t as useDeviceSupport } from "./useDeviceSupport-CZosAKtc.js";
import { t as N8nActionDropdown_default } from "./N8nActionDropdown-DC_W9Qy-.js";
import { t as N8nHeading_default } from "./N8nHeading-DtWWbZpM.js";
import { c as useRoute, l as useRouter, n as RouterView, o as onBeforeRouteLeave } from "./vue-router-DPnGeMd9.js";
import { t as PreviewTag_default } from "./PreviewTag-CNFXQpdk.js";
import { n as SettingsRow_default, t as SettingsRowGroup_default } from "./SettingsRowGroup-CYye8n3_.js";
import { t as SettingsRowConfigure_default } from "./SettingsRowConfigure-DOSIsTFU.js";
import { t as N8nResizeWrapper_default } from "./N8nResizeWrapper-C_gNBgTM.js";
import { wt as useCredentialsStore } from "./workflows.store-Bo6ZgF_O.js";
import { t as N8nScrollArea_default } from "./N8nScrollArea-EbE2ruUr.js";
import { t as useRootStore } from "./useRootStore-Bapf3biO.js";
import { t as useSettingsStore } from "./settings.store-1Fkv1cxl.js";
import { t as useUsersStore } from "./users.store-DKz7Lfdh.js";
import { t as useTelemetry } from "./useTelemetry-2P8aHE7m.js";
import { t as VIEWS } from "./views-C9JmlLsL.js";
import { n as useToast } from "./useToast-CWYKHgJh.js";
import "./constants-DPRLSskW.js";
import { n as useUIStore } from "./ui.store-BhVgRazX.js";
import { n as useDocumentTitle, t as claimDocumentTitle } from "./useDocumentTitle-GktmjxG4.js";
import { g as INSTANCE_AI_THREAD_VIEW, v as INSTANCE_AI_VIEW, x as isInstanceAiChatRoute } from "./constants-CGZjWQGx.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BTFjh5TB.js";
import { n as useInstanceAiStore } from "./instanceAi.store-ipVM_i14.js";
import { c as clearPendingThreadHandoff } from "./useInstanceAiHandoff-DxOTAuqN.js";
import { f as getRelativeDate } from "./chat.utils-CBVJCCaJ.js";
import { t as SidebarStateKey } from "./instanceAiLayout-3l6a7Ajp.js";
import { a as INSTANCE_AI_SEARCH_PROVIDERS, i as INSTANCE_AI_MODEL_PROVIDERS, o as useInstanceAiConfiguration, r as useSetupPageViewTelemetry, t as InstanceAiOnboardingWizard_default } from "./InstanceAiOnboardingWizard-BKI-j7HX.js";
//#region src/features/ai/instanceAi/components/InstanceAiThreadList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["onKeydown", "onBlur"];
var InstanceAiThreadList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadList",
	emits: ["collapse"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const router = useRouter();
		const route = useRoute();
		const editingThreadId = ref(null);
		const editingTitle = ref("");
		const renameInput = ref(null);
		const activeThreadId = computed(() => typeof route.params.threadId === "string" ? route.params.threadId : void 0);
		const threadActions = [{
			id: "rename",
			label: i18n.baseText("instanceAi.sidebar.renameThread"),
			icon: "pencil"
		}, {
			id: "delete",
			label: i18n.baseText("instanceAi.sidebar.deleteThread"),
			icon: "trash-2"
		}];
		const dateGroupI18nMap = {
			Today: i18n.baseText("userActivity.today"),
			Yesterday: i18n.baseText("userActivity.yesterday"),
			"This week": i18n.baseText("instanceAi.sidebar.group.thisWeek"),
			Older: i18n.baseText("instanceAi.sidebar.group.older")
		};
		const groupOrder = [
			"Today",
			"Yesterday",
			"This week",
			"Older"
		];
		const groupedThreads = computed(() => {
			const now = /* @__PURE__ */ new Date();
			const groups = /* @__PURE__ */ new Map();
			for (const thread of store.threads) {
				const group = getRelativeDate(now, thread.updatedAt ?? thread.createdAt);
				let threads = groups.get(group);
				if (!threads) {
					threads = [];
					groups.set(group, threads);
				}
				threads.push(thread);
			}
			return groupOrder.flatMap((groupName) => {
				const threads = groups.get(groupName) ?? [];
				return threads.length > 0 ? [{
					label: dateGroupI18nMap[groupName] ?? groupName,
					threads
				}] : [];
			});
		});
		async function handleDeleteThread(threadId) {
			const wasActive = threadId === activeThreadId.value;
			if (!await store.deleteThread(threadId)) return;
			clearPendingThreadHandoff(threadId);
			if (wasActive) if (store.threads.length > 0) router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId: store.threads[0].id }
			});
			else router.push({ name: INSTANCE_AI_VIEW });
		}
		function startRename(threadId, currentTitle) {
			editingThreadId.value = threadId;
			editingTitle.value = currentTitle;
			nextTick(() => {
				renameInput.value?.focus();
				renameInput.value?.select();
			});
		}
		async function confirmRename(threadId) {
			const title = editingTitle.value.trim();
			try {
				if (title && title !== store.threads.find((t) => t.id === threadId)?.title) await store.renameThread(threadId, title);
			} finally {
				editingThreadId.value = null;
			}
		}
		function cancelRename() {
			editingThreadId.value = null;
		}
		function handleThreadAction(action, threadId) {
			if (action === "delete") handleDeleteThread(threadId);
			else if (action === "rename") {
				const thread = store.threads.find((t) => t.id === threadId);
				if (thread) startRename(threadId, thread.title);
			}
		}
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-thread-list"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.title),
				tag: "div",
				size: "medium",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.sidebar.chatHistory")), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [createVNode(unref(N8nTooltip_default), {
				content: unref(i18n).baseText("instanceAi.sidebar.collapse"),
				placement: "bottom",
				"show-after": unref(500)
			}, {
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: "chevrons-left",
					variant: "ghost",
					size: "small",
					"icon-size": "large",
					"aria-label": unref(i18n).baseText("instanceAi.sidebar.collapse"),
					"data-test-id": "instance-ai-sidebar-collapse",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("collapse"))
				}, null, 8, ["aria-label"])]),
				_: 1
			}, 8, ["content", "show-after"]), createVNode(unref(N8nTooltip_default), {
				content: unref(i18n).baseText("instanceAi.thread.new"),
				placement: "bottom",
				"show-after": unref(500)
			}, {
				default: withCtx(() => [createVNode(_component_RouterLink, {
					to: { name: unref(INSTANCE_AI_VIEW) },
					custom: ""
				}, {
					default: withCtx(({ href, navigate }) => [createVNode(unref(N8nIconButton_default), {
						href,
						icon: "plus",
						variant: "ghost",
						size: "small",
						"icon-size": "large",
						"aria-label": unref(i18n).baseText("instanceAi.thread.new"),
						"data-test-id": "instance-ai-new-thread-button",
						onClick: navigate
					}, null, 8, [
						"href",
						"aria-label",
						"onClick"
					])]),
					_: 1
				}, 8, ["to"])]),
				_: 1
			}, 8, ["content", "show-after"])], 2)], 2), createVNode(unref(N8nScrollArea_default), { class: normalizeClass(_ctx.$style.threadList) }, {
				default: withCtx(() => [groupedThreads.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(groupedThreads.value, (group) => {
					return openBlock(), createElementBlock("div", {
						key: group.label,
						class: normalizeClass(_ctx.$style.group)
					}, [createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.groupLabel),
						tag: "div",
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
						_: 2
					}, 1032, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(group.threads, (thread) => {
						return openBlock(), createElementBlock("div", {
							key: thread.id,
							class: normalizeClass([_ctx.$style.threadItem, { [_ctx.$style.active]: thread.id === activeThreadId.value }]),
							"data-test-id": "instance-ai-thread-item"
						}, [editingThreadId.value === thread.id ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.renameContainer)
						}, [withDirectives(createBaseVNode("input", {
							ref_for: true,
							ref_key: "renameInput",
							ref: renameInput,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => editingTitle.value = $event),
							class: normalizeClass(_ctx.$style.renameInput),
							type: "text",
							onKeydown: [withKeys(($event) => confirmRename(thread.id), ["enter"]), withKeys(cancelRename, ["escape"])],
							onBlur: ($event) => confirmRename(thread.id)
						}, null, 42, _hoisted_1$1), [[vModelText, editingTitle.value]])], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(_component_RouterLink, {
							to: {
								name: unref(INSTANCE_AI_THREAD_VIEW),
								params: { threadId: thread.id }
							},
							class: normalizeClass(_ctx.$style.threadLink),
							title: thread.title,
							"active-class": _ctx.$style.threadLinkActive,
							onDblclick: withModifiers(($event) => startRename(thread.id, thread.title), ["prevent"])
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(thread.title), 3)]),
							_: 2
						}, 1032, [
							"to",
							"class",
							"title",
							"active-class",
							"onDblclick"
						]), createVNode(unref(N8nActionDropdown_default), {
							items: threadActions,
							class: normalizeClass(_ctx.$style.actionDropdown),
							placement: "bottom-start",
							onSelect: ($event) => handleThreadAction($event, thread.id),
							onClick: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
						}, {
							activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								variant: "ghost",
								icon: "ellipsis-vertical",
								class: normalizeClass(_ctx.$style.actionTrigger)
							}, null, 8, ["class"])]),
							_: 1
						}, 8, ["class", "onSelect"])], 64))], 2);
					}), 128))], 2);
				}), 128)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.empty)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.sidebar.noThreads")), 1)]),
					_: 1
				})], 2))]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiThreadList.vue?vue&type=style&index=0&lang.module.scss
var container$2 = "_container_moivm_388";
var header = "_header_moivm_395";
var title$1 = "_title_moivm_403";
var headerActions = "_headerActions_moivm_412";
var threadList = "_threadList_moivm_418";
var group = "_group_moivm_424";
var groupLabel = "_groupLabel_moivm_428";
var threadItem = "_threadItem_moivm_436";
var active = "_active_moivm_451";
var threadLink = "_threadLink_moivm_455";
var threadIcon = "_threadIcon_moivm_477";
var threadTitle = "_threadTitle_moivm_482";
var actionDropdown = "_actionDropdown_moivm_491";
var actionTrigger = "_actionTrigger_moivm_502";
var renameContainer = "_renameContainer_moivm_507";
var renameInput = "_renameInput_moivm_512";
var empty = "_empty_moivm_529";
var shimmer$3 = "_shimmer_moivm_1";
var spin$3 = "_spin_moivm_1";
var opacityPulse$3 = "_opacityPulse_moivm_1";
var popoverIn$3 = "_popoverIn_moivm_1";
var fadeIn$3 = "_fadeIn_moivm_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_moivm_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_moivm_1";
var collapsibleSlideDownBlurred$3 = "_collapsibleSlideDownBlurred_moivm_1";
var collapsibleSlideUpBlurred$3 = "_collapsibleSlideUpBlurred_moivm_1";
var blurSwapIn$3 = "_blurSwapIn_moivm_1";
var blurSwapOut$3 = "_blurSwapOut_moivm_1";
var pulseGlow$3 = "_pulseGlow_moivm_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_moivm_1";
var fade$3 = "_fade_moivm_1";
var fadeInUp$3 = "_fadeInUp_moivm_1";
var fadeInDown$3 = "_fadeInDown_moivm_1";
var fadeInLeft$3 = "_fadeInLeft_moivm_1";
var fadeInRight$3 = "_fadeInRight_moivm_1";
var fadeOut$3 = "_fadeOut_moivm_1";
var fadeOutDown$3 = "_fadeOutDown_moivm_1";
var fadeOutUp$3 = "_fadeOutUp_moivm_1";
var fadeOutLeft$3 = "_fadeOutLeft_moivm_1";
var fadeOutRight$3 = "_fadeOutRight_moivm_1";
var ping$3 = "_ping_moivm_1";
var blinkBackground$3 = "_blinkBackground_moivm_1";
var typingBlink$3 = "_typingBlink_moivm_1";
var InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default = {
	container: container$2,
	header,
	title: title$1,
	headerActions,
	threadList,
	group,
	groupLabel,
	threadItem,
	active,
	threadLink,
	threadIcon,
	threadTitle,
	actionDropdown,
	actionTrigger,
	renameContainer,
	renameInput,
	empty,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_moivm_1",
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
var InstanceAiThreadList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/onboarding/InstanceAiOnboardingIntro.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-test-id"];
var InstanceAiOnboardingIntro_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiOnboardingIntro",
	props: {
		incomplete: { type: Boolean },
		connectModelOnly: { type: Boolean },
		returnVisit: { type: Boolean },
		modelValue: {},
		sandboxValue: {},
		searchValue: {}
	},
	emits: [
		"setup",
		"setupLater",
		"openStep",
		"turnOff"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.page),
				"data-test-id": __props.incomplete ? "assistant-setup-incomplete" : "assistant-setup-intro"
			}, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.content, __props.incomplete && _ctx.$style.wide]) }, [
				createVNode(unref(N8nIcon_default), {
					icon: "sparkles",
					size: 32,
					class: normalizeClass(_ctx.$style.heroIcon)
				}, null, 8, ["class"]),
				createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge",
					bold: "",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.title")), 1)]),
					_: 1
				}, 8, ["class"]),
				!__props.incomplete ? (openBlock(), createBlock(unref(PreviewTag_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.preview),
					size: "medium"
				}, null, 8, ["class"])) : createCommentVNode("", true),
				__props.incomplete ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					tag: "p",
					color: "text-base",
					size: "large",
					class: normalizeClass(_ctx.$style.lede)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.incomplete.lede")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				!__props.incomplete ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.benefits)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.benefit) }, [createVNode(unref(N8nIcon_default), {
						icon: "workflow",
						size: "small"
					}), createVNode(unref(N8nText_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.benefit.build")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.benefit) }, [createVNode(unref(N8nIcon_default), {
						icon: "flask-conical",
						size: "small"
					}), createVNode(unref(N8nText_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.benefit.debug")), 1)]),
						_: 1
					})], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.benefit) }, [createVNode(unref(N8nIcon_default), {
						icon: "circle-help",
						size: "small"
					}), createVNode(unref(N8nText_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.onboarding.benefit.help")), 1)]),
						_: 1
					})], 2)
				], 2)) : (openBlock(), createBlock(unref(SettingsRowGroup_default), {
					key: 3,
					class: normalizeClass(_ctx.$style.checklist)
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList([
						{
							id: "model",
							title: unref(i18n).baseText("instanceAi.onboarding.model.label"),
							description: unref(i18n).baseText("instanceAi.onboarding.model.description"),
							value: __props.modelValue
						},
						{
							id: "sandbox",
							title: unref(i18n).baseText("instanceAi.onboarding.sandbox.label"),
							description: unref(i18n).baseText("instanceAi.onboarding.sandbox.description"),
							value: __props.sandboxValue
						},
						{
							id: "search",
							title: unref(i18n).baseText("instanceAi.onboarding.search.label"),
							description: unref(i18n).baseText("instanceAi.onboarding.search.description"),
							value: __props.searchValue
						}
					], (item) => {
						return openBlock(), createBlock(unref(SettingsRow_default), {
							key: item.id,
							title: item.title,
							description: item.description,
							clickable: "",
							"data-test-id": `assistant-setup-checklist-${item.id}`,
							onClick: ($event) => emit("openStep", item.id)
						}, {
							action: withCtx(() => [createVNode(unref(SettingsRowConfigure_default), { value: item.value }, null, 8, ["value"])]),
							_: 2
						}, 1032, [
							"title",
							"description",
							"data-test-id",
							"onClick"
						]);
					}), 128))]),
					_: 1
				}, 8, ["class"])),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "medium",
					"data-test-id": __props.incomplete ? "assistant-finish-setup-cta" : "assistant-setup-cta",
					label: __props.incomplete ? unref(i18n).baseText("instanceAi.onboarding.finishSetup") : __props.connectModelOnly ? unref(i18n).baseText("instanceAi.onboarding.connectModel") : unref(i18n).baseText("instanceAi.onboarding.setUp"),
					onClick: _cache[0] || (_cache[0] = ($event) => emit("setup"))
				}, null, 8, ["data-test-id", "label"]), !__props.returnVisit ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "ghost",
					size: "medium",
					label: unref(i18n).baseText("instanceAi.onboarding.setUpLater"),
					"data-test-id": "assistant-set-up-later",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("setupLater"))
				}, null, 8, ["label"])) : createCommentVNode("", true)], 2),
				__props.returnVisit ? (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass(_ctx.$style.turnOff)
				}, [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "small",
					label: unref(i18n).baseText("instanceAi.onboarding.turnOff.action"),
					class: normalizeClass(_ctx.$style.turnOffButton),
					"data-test-id": "assistant-turn-off",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("turnOff"))
				}, null, 8, ["label", "class"])], 2)) : createCommentVNode("", true)
			], 2)], 10, _hoisted_1);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/onboarding/InstanceAiOnboardingIntro.vue?vue&type=style&index=0&lang.module.scss
var page = "_page_1hxiv_388";
var content = "_content_1hxiv_397";
var fadeInUp$2 = "_fadeInUp_1hxiv_1";
var wide = "_wide_1hxiv_415";
var heroIcon = "_heroIcon_1hxiv_419";
var title = "_title_1hxiv_423";
var preview = "_preview_1hxiv_427";
var lede = "_lede_1hxiv_431";
var benefits = "_benefits_1hxiv_435";
var benefit = "_benefit_1hxiv_435";
var checklist = "_checklist_1hxiv_455";
var actions = "_actions_1hxiv_461";
var turnOff = "_turnOff_1hxiv_470";
var turnOffButton = "_turnOffButton_1hxiv_481";
var shimmer$2 = "_shimmer_1hxiv_1";
var spin$2 = "_spin_1hxiv_1";
var opacityPulse$2 = "_opacityPulse_1hxiv_1";
var popoverIn$2 = "_popoverIn_1hxiv_1";
var fadeIn$2 = "_fadeIn_1hxiv_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_1hxiv_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_1hxiv_1";
var collapsibleSlideDownBlurred$2 = "_collapsibleSlideDownBlurred_1hxiv_1";
var collapsibleSlideUpBlurred$2 = "_collapsibleSlideUpBlurred_1hxiv_1";
var blurSwapIn$2 = "_blurSwapIn_1hxiv_1";
var blurSwapOut$2 = "_blurSwapOut_1hxiv_1";
var pulseGlow$2 = "_pulseGlow_1hxiv_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_1hxiv_1";
var fade$2 = "_fade_1hxiv_1";
var fadeInDown$2 = "_fadeInDown_1hxiv_1";
var fadeInLeft$2 = "_fadeInLeft_1hxiv_1";
var fadeInRight$2 = "_fadeInRight_1hxiv_1";
var fadeOut$2 = "_fadeOut_1hxiv_1";
var fadeOutDown$2 = "_fadeOutDown_1hxiv_1";
var fadeOutUp$2 = "_fadeOutUp_1hxiv_1";
var fadeOutLeft$2 = "_fadeOutLeft_1hxiv_1";
var fadeOutRight$2 = "_fadeOutRight_1hxiv_1";
var ping$2 = "_ping_1hxiv_1";
var blinkBackground$2 = "_blinkBackground_1hxiv_1";
var typingBlink$2 = "_typingBlink_1hxiv_1";
var InstanceAiOnboardingIntro_vue_vue_type_style_index_0_lang_module_default = {
	page,
	content,
	fadeInUp: fadeInUp$2,
	wide,
	heroIcon,
	title,
	preview,
	lede,
	benefits,
	benefit,
	checklist,
	actions,
	turnOff,
	turnOffButton,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_1hxiv_1",
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
var InstanceAiOnboardingIntro_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiOnboardingIntro_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiOnboardingIntro_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/onboarding/useInstanceAiOnboarding.ts
function useInstanceAiOnboarding(configuration) {
	const open = ref(false);
	const step = ref("model");
	const editMode = ref(false);
	const sequence = computed(() => [
		"model",
		...configuration.sandboxConfigured.value ? [] : ["sandbox"],
		...configuration.searchEnvConfigured.value ? [] : ["search"],
		"done"
	]);
	function firstUnmetStep() {
		if (!configuration.modelConfigured.value) return "model";
		if (!configuration.sandboxConfigured.value) return "sandbox";
		if (!configuration.searchDecided.value && !configuration.searchEnvConfigured.value) return "search";
		return "done";
	}
	function start(target = firstUnmetStep(), editing = false) {
		step.value = target;
		editMode.value = editing;
		open.value = true;
	}
	function close() {
		open.value = false;
		editMode.value = false;
	}
	function advance() {
		if (editMode.value) {
			editMode.value = false;
			const nextStep = firstUnmetStep();
			if (nextStep === "done") step.value = nextStep;
			else open.value = false;
			return;
		}
		step.value = firstUnmetStep();
	}
	function back() {
		if (editMode.value) {
			step.value = "done";
			editMode.value = false;
			return;
		}
		const index = sequence.value.indexOf(step.value);
		step.value = sequence.value[Math.max(0, index - 1)] ?? "model";
	}
	return {
		open,
		step,
		editMode,
		sequence,
		firstUnmetStep,
		start,
		close,
		advance,
		back
	};
}
//#endregion
//#region src/features/ai/instanceAi/onboarding/InstanceAiOnboardingView.vue?vue&type=script&setup=true&lang.ts
var INTRO_SEEN_STORAGE_KEY = "instanceAi.onboarding.introSeen";
var InstanceAiOnboardingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiOnboardingView",
	emits: ["completed"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		const message = useMessage();
		const store = useInstanceAiSettingsStore();
		const credentialsStore = useCredentialsStore();
		const configuration = useInstanceAiConfiguration();
		const sandboxEnvConfigured = computed(() => store.settings?.sandboxEnvConfigured === true);
		const searchEnvConfigured = computed(() => store.settings?.searchEnvConfigured === true);
		const searchDecided = computed(() => configuration.searchState.value !== "notset");
		const onboarding = useInstanceAiOnboarding({
			modelConfigured: configuration.modelConfigured,
			sandboxConfigured: configuration.sandboxConfigured,
			searchDecided,
			searchEnvConfigured
		});
		const notSet = computed(() => i18n.baseText("instanceAi.onboarding.notSet"));
		const modelValue = computed(() => {
			if (!configuration.modelConfigured.value) return notSet.value;
			if (store.settings?.modelEnvConfigured) return i18n.baseText("instanceAi.onboarding.foundOnServer");
			const provider = INSTANCE_AI_MODEL_PROVIDERS.find(({ credentialType, id }) => id !== "custom" && credentialType === configuration.modelCredential.value?.type)?.id;
			return provider && store.settings?.modelName ? `${provider}/${store.settings.modelName}` : store.settings?.modelName ?? notSet.value;
		});
		const sandboxValue = computed(() => {
			if (sandboxEnvConfigured.value) return i18n.baseText("instanceAi.onboarding.foundOnServer");
			if (!configuration.sandboxConfigured.value) return notSet.value;
			return store.settings?.sandboxProvider === "daytona" ? "Daytona" : "n8n Sandbox";
		});
		const searchValue = computed(() => {
			if (configuration.searchState.value === "notset") return notSet.value;
			if (configuration.searchState.value === "disabled") return i18n.baseText("instanceAi.onboarding.disabled");
			if (configuration.searchState.value === "env") return i18n.baseText("instanceAi.onboarding.foundOnServer");
			const credentialType = configuration.searchCredential.value?.type;
			return INSTANCE_AI_SEARCH_PROVIDERS.find(({ credentialType: type }) => type === credentialType)?.label ?? i18n.baseText("instanceAi.onboarding.search.label");
		});
		const composeFastPath = computed(() => configuration.sandboxConfigured.value && searchEnvConfigured.value);
		const incomplete = computed(() => configuration.hasSetupProgress.value && !composeFastPath.value);
		function startAt(step) {
			onboarding.start(step ?? onboarding.firstUnmetStep());
		}
		function editStep(step) {
			onboarding.start(step, true);
		}
		function handleWizardOpenChange(open) {
			if (open) return;
			if (configuration.setupCompleted.value) {
				finish();
				return;
			}
			onboarding.close();
		}
		function finish() {
			if (!configuration.setupCompleted.value) {
				onboarding.close();
				return;
			}
			onboarding.close();
			emit("completed");
		}
		const returnVisit = ref(typeof localStorage !== "undefined" && localStorage.getItem(INTRO_SEEN_STORAGE_KEY) === "true");
		async function setUpLater() {
			await router.push({ name: VIEWS.HOMEPAGE });
		}
		async function turnOff() {
			if (await message.confirm(i18n.baseText("instanceAi.onboarding.turnOff.description"), {
				title: i18n.baseText("instanceAi.onboarding.turnOff.title"),
				confirmButtonText: i18n.baseText("instanceAi.onboarding.turnOff.confirm"),
				cancelButtonText: i18n.baseText("generic.cancel")
			}) !== "confirm" || !await store.persistEnabled(false, false)) return;
			toast.showMessage({
				title: i18n.baseText("instanceAi.onboarding.turnOff.toastTitle"),
				message: i18n.baseText("instanceAi.onboarding.turnOff.toastDescription"),
				type: "success"
			});
			await router.push({ name: VIEWS.HOMEPAGE });
		}
		useSetupPageViewTelemetry("onboarding");
		onMounted(async () => {
			if (typeof localStorage !== "undefined") localStorage.setItem(INTRO_SEEN_STORAGE_KEY, "true");
			await Promise.all([store.fetch(), credentialsStore.fetchCredentialTypes(false)]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [!unref(store).isLoading ? (openBlock(), createBlock(InstanceAiOnboardingIntro_default, {
				key: 0,
				incomplete: incomplete.value,
				"connect-model-only": composeFastPath.value,
				"return-visit": returnVisit.value,
				"model-value": modelValue.value,
				"sandbox-value": sandboxValue.value,
				"search-value": searchValue.value,
				onSetup: _cache[0] || (_cache[0] = ($event) => startAt()),
				onSetupLater: setUpLater,
				onOpenStep: editStep,
				onTurnOff: turnOff
			}, null, 8, [
				"incomplete",
				"connect-model-only",
				"return-visit",
				"model-value",
				"sandbox-value",
				"search-value"
			])) : createCommentVNode("", true), createVNode(InstanceAiOnboardingWizard_default, {
				open: unref(onboarding).open.value,
				step: unref(onboarding).step.value,
				"edit-mode": unref(onboarding).editMode.value,
				sequence: unref(onboarding).sequence.value,
				"model-value": modelValue.value,
				"sandbox-value": sandboxValue.value,
				"search-value": searchValue.value,
				"compose-fast-path": composeFastPath.value,
				"onUpdate:open": handleWizardOpenChange,
				onAdvance: unref(onboarding).advance,
				onBack: unref(onboarding).back,
				onEdit: editStep,
				onCompleted: finish
			}, null, 8, [
				"open",
				"step",
				"edit-mode",
				"sequence",
				"model-value",
				"sandbox-value",
				"search-value",
				"compose-fast-path",
				"onAdvance",
				"onBack"
			])], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/onboarding/InstanceAiOnboardingView.vue?vue&type=style&index=0&lang.module.scss
var container$1 = "_container_1szw4_388";
var shimmer$1 = "_shimmer_1szw4_1";
var spin$1 = "_spin_1szw4_1";
var opacityPulse$1 = "_opacityPulse_1szw4_1";
var popoverIn$1 = "_popoverIn_1szw4_1";
var fadeIn$1 = "_fadeIn_1szw4_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_1szw4_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_1szw4_1";
var collapsibleSlideDownBlurred$1 = "_collapsibleSlideDownBlurred_1szw4_1";
var collapsibleSlideUpBlurred$1 = "_collapsibleSlideUpBlurred_1szw4_1";
var blurSwapIn$1 = "_blurSwapIn_1szw4_1";
var blurSwapOut$1 = "_blurSwapOut_1szw4_1";
var pulseGlow$1 = "_pulseGlow_1szw4_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_1szw4_1";
var fade$1 = "_fade_1szw4_1";
var fadeInUp$1 = "_fadeInUp_1szw4_1";
var fadeInDown$1 = "_fadeInDown_1szw4_1";
var fadeInLeft$1 = "_fadeInLeft_1szw4_1";
var fadeInRight$1 = "_fadeInRight_1szw4_1";
var fadeOut$1 = "_fadeOut_1szw4_1";
var fadeOutDown$1 = "_fadeOutDown_1szw4_1";
var fadeOutUp$1 = "_fadeOutUp_1szw4_1";
var fadeOutLeft$1 = "_fadeOutLeft_1szw4_1";
var fadeOutRight$1 = "_fadeOutRight_1szw4_1";
var ping$1 = "_ping_1szw4_1";
var blinkBackground$1 = "_blinkBackground_1szw4_1";
var typingBlink$1 = "_typingBlink_1szw4_1";
var InstanceAiOnboardingView_vue_vue_type_style_index_0_lang_module_default = {
	container: container$1,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_1szw4_1",
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
var InstanceAiOnboardingView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiOnboardingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiOnboardingView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/InstanceAiView.vue?vue&type=script&setup=true&lang.ts
var InstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiView",
	setup(__props) {
		const store = useInstanceAiStore();
		const settingsStore = useInstanceAiSettingsStore();
		const appSettingsStore = useSettingsStore();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const route = useRoute();
		const router = useRouter();
		const uiStore = useUIStore();
		const rootStore = useRootStore();
		const usersStore = useUsersStore();
		const telemetry = useTelemetry();
		const { isCtrlKeyPressed } = useDeviceSupport();
		const setupCompletionState = computed(() => appSettingsStore.moduleSettings["instance-ai"]?.setupCompleted);
		const setupWasIncomplete = setupCompletionState.value === false;
		let setupWasObservedIncomplete = setupWasIncomplete;
		const onboardingCompletionPending = useSessionStorage("instanceAi.onboarding.completionPending", setupWasIncomplete);
		if (setupCompletionState.value === true) onboardingCompletionPending.value = false;
		else if (setupWasIncomplete) onboardingCompletionPending.value = true;
		const onboardingActive = ref(setupCompletionState.value !== true && (setupWasIncomplete || onboardingCompletionPending.value));
		const showOnboarding = computed(() => settingsStore.canManage && !settingsStore.isProxyEnabled && !settingsStore.isCloudManaged && onboardingActive.value);
		watch(setupCompletionState, (setupCompleted) => {
			if (setupCompleted === true) {
				onboardingCompletionPending.value = false;
				if (!setupWasObservedIncomplete) onboardingActive.value = false;
			} else if (setupCompleted === false) {
				setupWasObservedIncomplete = true;
				onboardingCompletionPending.value = true;
				onboardingActive.value = true;
			}
		});
		claimDocumentTitle();
		documentTitle.set(i18n.baseText("instanceAi.view.title"));
		const sidebarCollapsed = useSessionStorage("instanceAi.sidebarCollapsed", true);
		const sidebarWidth = ref(260);
		function toggleSidebarCollapse() {
			sidebarCollapsed.value = !sidebarCollapsed.value;
		}
		function handleSidebarResize({ width }) {
			if (width <= 200) {
				sidebarCollapsed.value = true;
				return;
			}
			sidebarWidth.value = width;
		}
		function handleOnboardingCompleted() {
			onboardingCompletionPending.value = false;
			onboardingActive.value = false;
		}
		provide(SidebarStateKey, {
			collapsed: sidebarCollapsed,
			width: sidebarWidth,
			toggle: toggleSidebarCollapse
		});
		onBeforeRouteLeave((to) => {
			if (!isInstanceAiChatRoute(to.name)) sidebarCollapsed.value = true;
		});
		useEventListener(document, "keydown", (event) => {
			if (event.key.toLowerCase() === "o" && isCtrlKeyPressed(event) && event.shiftKey && !uiStore.isAnyModalOpen) {
				event.preventDefault();
				event.stopPropagation();
				router.push({
					name: INSTANCE_AI_VIEW,
					force: true
				});
			}
		});
		onMounted(() => {
			if (showOnboarding.value && route.name !== "InstanceAi") router.replace({ name: INSTANCE_AI_VIEW });
			usersStore.showPersonalizationSurvey();
			const previousRoute = router.options.history.state.back;
			const sourceUrl = typeof previousRoute === "string" ? previousRoute : document.referrer || null;
			telemetry.track("User viewed AI assistant", {
				instance_id: rootStore.instanceId,
				source_url: sourceUrl
			});
			store.loadThreads();
			store.fetchCredits();
			store.startCreditsPushListener();
			settingsStore.refreshModuleSettings().catch(() => {}).then(async () => await settingsStore.ensurePreferencesLoaded()).catch(() => {}).then(() => {
				const browserUseEnabled = settingsStore.isBrowserUseEnabledByAdmin;
				const computerUseEnabled = !settingsStore.isLocalGatewayDisabledByAdmin;
				if (!browserUseEnabled && !computerUseEnabled) return;
				settingsStore.startGatewayPushListener();
				if (browserUseEnabled) settingsStore.fetchBrowserStatus();
				if (computerUseEnabled && !settingsStore.isLocalGatewayDisabled) settingsStore.fetchGatewayStatus();
			});
		});
		watch(() => settingsStore.isLocalGatewayDisabled, (disabled) => {
			if (disabled) {
				if (settingsStore.isLocalGatewayDisabledByAdmin && !settingsStore.isBrowserUseEnabledByAdmin) settingsStore.stopGatewayPushListener();
			} else {
				settingsStore.startGatewayPushListener();
				settingsStore.fetchGatewayStatus();
				settingsStore.fetchBrowserStatus();
			}
		});
		onUnmounted(() => {
			if (!isInstanceAiChatRoute(route.name)) {
				store.stopCreditsPushListener();
				settingsStore.stopGatewayPushListener();
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-container"
			}, [showOnboarding.value ? (openBlock(), createBlock(InstanceAiOnboardingView_default, {
				key: 0,
				onCompleted: handleOnboardingCompleted
			})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(Transition, { name: "sidebar-slide" }, {
				default: withCtx(() => [!unref(sidebarCollapsed) ? (openBlock(), createBlock(unref(N8nResizeWrapper_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.sidebar),
					width: sidebarWidth.value,
					style: normalizeStyle({ width: `${sidebarWidth.value}px` }),
					"supported-directions": ["right"],
					"is-resizing-enabled": true,
					"min-width": 200,
					"max-width": 400,
					onResize: handleSidebarResize
				}, {
					default: withCtx(() => [createVNode(InstanceAiThreadList_default, { onCollapse: toggleSidebarCollapse })]),
					_: 1
				}, 8, [
					"class",
					"width",
					"style"
				])) : createCommentVNode("", true)]),
				_: 1
			}), createVNode(unref(RouterView), null, {
				default: withCtx(({ Component }) => [(openBlock(), createBlock(resolveDynamicComponent(Component), { key: String(unref(route).params.threadId ?? "empty") }))]),
				_: 1
			})], 64))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/InstanceAiView.vue?vue&type=style&index=0&lang.module.scss
var container = "_container_11sgn_388";
var sidebar = "_sidebar_11sgn_396";
var shimmer = "_shimmer_11sgn_1";
var spin = "_spin_11sgn_1";
var opacityPulse = "_opacityPulse_11sgn_1";
var popoverIn = "_popoverIn_11sgn_1";
var fadeIn = "_fadeIn_11sgn_1";
var collapsibleSlideDown = "_collapsibleSlideDown_11sgn_1";
var collapsibleSlideUp = "_collapsibleSlideUp_11sgn_1";
var collapsibleSlideDownBlurred = "_collapsibleSlideDownBlurred_11sgn_1";
var collapsibleSlideUpBlurred = "_collapsibleSlideUpBlurred_11sgn_1";
var blurSwapIn = "_blurSwapIn_11sgn_1";
var blurSwapOut = "_blurSwapOut_11sgn_1";
var pulseGlow = "_pulseGlow_11sgn_1";
var pulseGlowDelayed = "_pulseGlowDelayed_11sgn_1";
var fade = "_fade_11sgn_1";
var fadeInUp = "_fadeInUp_11sgn_1";
var fadeInDown = "_fadeInDown_11sgn_1";
var fadeInLeft = "_fadeInLeft_11sgn_1";
var fadeInRight = "_fadeInRight_11sgn_1";
var fadeOut = "_fadeOut_11sgn_1";
var fadeOutDown = "_fadeOutDown_11sgn_1";
var fadeOutUp = "_fadeOutUp_11sgn_1";
var fadeOutLeft = "_fadeOutLeft_11sgn_1";
var fadeOutRight = "_fadeOutRight_11sgn_1";
var ping = "_ping_11sgn_1";
var blinkBackground = "_blinkBackground_11sgn_1";
var typingBlink = "_typingBlink_11sgn_1";
var InstanceAiView_vue_vue_type_style_index_0_lang_module_default = {
	container,
	sidebar,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_11sgn_1",
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
var InstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiView_default as default };
