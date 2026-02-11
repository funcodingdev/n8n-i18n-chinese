const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-C6fKNDlH.js","assets/_plugin-vue_export-helper-DltO58Gh.js","assets/src-y1U2VbqR.js","assets/CalendarDate-DpJ94D5y.js","assets/_MapCache-0tqKZ63u.js","assets/vue.runtime.esm-bundler-XtMkEjzB.js","assets/chunk-r2Y0G7H8.js","assets/sanitize-html-DjneYy0u.js","assets/en-J5yUMMPs.js","assets/src-D0aMGSdN.css","assets/nodeCreator.store-DQcZpKBd.js","assets/constants-Cf-1GDJg.js","assets/merge-ZzFu8YvX.js","assets/users.store-ACeMu33y.js","assets/_baseOrderBy-BBXzPM_B.js","assets/dateformat-Bc6vycUF.js","assets/useDebounce-Di-EYAP3.js","assets/nodeIcon-BEBhQ4Ga.js","assets/canvas.utils-mi2pDTnY.js","assets/exports-K2R0sMZo.js","assets/useCanvasOperations-CEJGjxXj.js","assets/core-VADtcMBO.js","assets/core-XmFv11t6.js","assets/xml-BMqNMrYo.js","assets/VueMarkdown-BAtN2bel.js","assets/usePinnedData-B-b-xNbo.js","assets/folders.store-Cb-OxJuh.js","assets/executions.store-D1pRj1S6.js","assets/useCanvasOperations-BGIelHPw.css","assets/semver-BBmuZ-mr.js","assets/banners.store-tJ_D2yAt.js","assets/banners-CXsyom4e.css","assets/assistant.store-fSdyqRSP.js","assets/NodeIcon-CxAnFHRw.js","assets/NodeIcon-DYIwbj2N.css","assets/SlideTransition-CDhMPqmr.js","assets/SlideTransition-LHRZQ5f_.css","assets/useCalloutHelpers-CY5SYcB5.js","assets/chatPanel.store-D5s21RKD.js","assets/CommunityNodeUpdateInfo-DHqp6H3d.js","assets/CommunityNodeUpdateInfo-CrGD09Mo.css","assets/useActions-eTimZ0sw.js","assets/NodeCreator-27ohRh_P.css"])))=>i.map(i=>d[i]);
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-0tqKZ63u.js";
import { Wi as __vitePreload, ki as N8nIconButton_default, li as AskAssistantIcon_default, wi as N8nTooltip_default, zi as N8nButton_default } from "./src-y1U2VbqR.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { An as getMidCanvasPosition, Nt as useTelemetry, fn as useFocusPanelStore, hs as useSettingsStore, on as useBuilderStore, r as useUIStore } from "./users.store-ACeMu33y.js";
import { H as DEFAULT_STICKY_HEIGHT, U as DEFAULT_STICKY_WIDTH, mr as STICKY_NODE_TYPE, wt as NODE_CREATOR_OPEN_SOURCES } from "./constants-Cf-1GDJg.js";
import "./merge-ZzFu8YvX.js";
import "./_baseOrderBy-BBXzPM_B.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Di-EYAP3.js";
import { t as useAssistantStore } from "./assistant.store-fSdyqRSP.js";
import { t as useChatPanelStore } from "./chatPanel.store-D5s21RKD.js";
import "./nodeIcon-BEBhQ4Ga.js";
import "./canvas.utils-mi2pDTnY.js";
import "./nodeCreator.store-DQcZpKBd.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-Bz3HCEhu.js";
import { t as useActions } from "./useActions-eTimZ0sw.js";
var NodeCreation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreation",
	props: {
		nodeViewScale: {},
		createNodeActive: {
			type: Boolean,
			default: false
		},
		focusPanelActive: { type: Boolean }
	},
	emits: [
		"addNodes",
		"toggleNodeCreator",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-C6fKNDlH.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const builderStore = useBuilderStore();
		const chatPanelStore = useChatPanelStore();
		const settingsStore = useSettingsStore();
		const { getAddedNodesAndConnections } = useActions();
		const allowSendingParameterValues = computed(() => settingsStore.settings.ai.allowSendingParameterValues);
		function openNodeCreator() {
			emit("toggleNodeCreator", {
				source: NODE_CREATOR_OPEN_SOURCES.ADD_NODE_BUTTON,
				createNodeActive: true
			});
		}
		function addStickyNote() {
			if (document.activeElement) document.activeElement.blur();
			const offset = [...uiStore.nodeViewOffsetPosition];
			const position = getMidCanvasPosition(props.nodeViewScale, offset);
			position[0] -= 240 / 2;
			position[1] -= 160 / 2;
			emit("addNodes", getAddedNodesAndConnections([{
				type: STICKY_NODE_TYPE,
				position
			}]));
		}
		function closeNodeCreator(hasAddedNodes = false) {
			if (props.createNodeActive) emit("toggleNodeCreator", {
				createNodeActive: false,
				hasAddedNodes
			});
			emit("close");
		}
		function nodeTypeSelected(value) {
			emit("addNodes", getAddedNodesAndConnections(value));
			closeNodeCreator(true);
		}
		function toggleFocusPanel() {
			focusPanelStore.toggleFocusPanel();
			telemetry.track(focusPanelStore.focusPanelActive ? "User opened focus panel" : "User closed focus panel", {
				source: "canvasButton",
				parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
			});
		}
		async function onAskAssistantButtonClick() {
			if (builderStore.isAIBuilderEnabled && allowSendingParameterValues.value) await chatPanelStore.toggle({ mode: "builder" });
			else await chatPanelStore.toggle({ mode: "assistant" });
			if (chatPanelStore.isOpen) assistantStore.trackUserOpenedAssistant({
				source: "canvas",
				task: "placeholder",
				has_existing_session: !assistantStore.isSessionEnded
			});
		}
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [!__props.createNodeActive ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
			}, [
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openNodesPanel"),
					shortcut: { keys: ["Tab"] },
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						icon: "plus",
						type: "tertiary",
						"data-test-id": "node-creator-plus-button",
						onClick: openNodeCreator
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						icon: "search",
						type: "tertiary",
						"data-test-id": "command-bar-button",
						onClick: openCommandBar
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.addStickyHint"),
					shortcut: {
						keys: ["s"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "large",
						type: "tertiary",
						icon: "sticky-note",
						"data-test-id": "add-sticky-button",
						onClick: addStickyNote
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openFocusPanel"),
					shortcut: {
						keys: ["f"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						type: "tertiary",
						size: "large",
						icon: "panel-right",
						class: normalizeClass(__props.focusPanelActive ? _ctx.$style.activeButton : ""),
						active: __props.focusPanelActive,
						"data-test-id": "toggle-focus-panel-button",
						onClick: toggleFocusPanel
					}, null, 8, ["class", "active"])]),
					_: 1
				}, 8, ["label"]),
				unref(chatPanelStore).canShowAiButtonOnCanvas ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "left"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						type: "tertiary",
						size: "large",
						square: "",
						class: normalizeClass(_ctx.$style.icon),
						"data-test-id": "ask-assistant-canvas-action-button",
						onClick: onAskAssistantButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
				default: withCtx(() => [createVNode(unref(LazyNodeCreator), {
					active: __props.createNodeActive,
					onNodeTypeSelected: nodeTypeSelected,
					onCloseNodeCreator: closeNodeCreator
				}, null, 8, ["active"])]),
				_: 1
			}))], 64);
		};
	}
});
var NodeCreation_vue_vue_type_style_index_0_lang_module_default = {
	nodeButtonsWrapper: "_nodeButtonsWrapper_sbzmg_125",
	icon: "_icon_sbzmg_136",
	activeButton: "_activeButton_sbzmg_145"
};
var NodeCreation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeCreation_default as default };
