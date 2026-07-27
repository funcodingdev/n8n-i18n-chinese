const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-y9Gbja7n.js","assets/_plugin-vue_export-helper-Da88TEg1.js","assets/chunk-CC9Q-vWm.js","assets/src-WqI77c9U.js","assets/get-BXEQ0kDX.js","assets/_MapCache-BeWUUn5x.js","assets/vue.runtime.esm-bundler-Bs4WIMNP.js","assets/CalendarDate-DaCb8yxn.js","assets/core-CwilVY9-.js","assets/sanitize-html-Z9mSNZC_.js","assets/__vite-browser-external-Byz2CIkm.js","assets/en-B10_Mv1Q.js","assets/src-C8GGG7Cv.css","assets/exports-BwHJv2Fm.js","assets/workflowDocument.store-BPKGO1X6.js","assets/constants-CSBjw1Ht.js","assets/merge-CFboPyjf.js","assets/expression-runtime-stub-9w2ZHVM3.js","assets/useRootStore-hyBq4XlJ.js","assets/settings.store-C5bX9q6f.js","assets/_baseOrderBy-C5IGnJzy.js","assets/useDebounce-DTqDXiDI.js","assets/useDocumentTitle-BaE0TfJz.js","assets/users.store-ChR9lgr2.js","assets/workflowsList.store-BqyGU592.js","assets/dateformat-DrkL5gws.js","assets/canvas.eventBus-D4HM4PKa.js","assets/_virtual_node-popularity-data-CPZAcP99.js","assets/useExternalHooks-BapQ7D9I.js","assets/nodeIcon-T5pSDHPI.js","assets/templates.store-CBVxwi5P.js","assets/cloudPlan.store-DXI9-xx_.js","assets/utils-CgEBofz8.js","assets/useInstanceAiAvailability-DyXxxcFV.js","assets/banners.store-CETHACgm.js","assets/banners-CXsyom4e.css","assets/NodeIcon-QAODXpBm.js","assets/NodeIcon-Cpjg6_2Z.css","assets/useAiGateway-JFs45WTB.js","assets/builder.store-wgfIhdns.js","assets/useMessage-Wa-DyVSm.js","assets/overlay-D_YGp4V5.js","assets/useToast-B0ltXEdD.js","assets/useStyles-BSXodgMN.js","assets/FileSaver.min-CLnCRYvN.js","assets/useCodeDiff-I9nxfBBF.js","assets/event-bus-Bx6ROQKl.js","assets/useNodeHelpers-DMmO02Gr.js","assets/useLoadingService-CfzXK0OI.js","assets/usePrivateCredentials-0ornWtcs.js","assets/focusPanel.store-C8dNISH_.js","assets/useCalloutHelpers-BkAB4PzT.js","assets/usePinnedData-DLJ-V2NK.js","assets/chatPanel.store-BGHcoPyC.js","assets/assistant.store-B3qEmgjT.js","assets/CommunityNodeUpdateInfo-DIAepR2Z.js","assets/semver-RvlDsr0P.js","assets/communityNodes.store-CnWvIV3_.js","assets/CommunityNodeUpdateInfo-BKXtPPI4.css","assets/useQuickConnect-DDeP-x2Q.js","assets/useCredentialOAuth-Fe9ywDBN.js","assets/ContactAdministratorToInstall-oraakeR2.js","assets/useCanvasOperations-C8WoHDj-.js","assets/core-BMbouP5r.js","assets/core-Cra4UmGe.js","assets/xml-BVzDSG_x.js","assets/VueMarkdown-Dt9xGiv4.js","assets/executions.store-DyPCT8NI.js","assets/setupPanel.store-S4izNeW_.js","assets/templateTransforms-hRUa_oiU.js","assets/useCanvasOperations-BGIelHPw.css","assets/ContactAdministratorToInstall-JoRxYxA6.css","assets/useActions-TDgB4p50.js","assets/shield-alt-DBaqJQz_.js","assets/NodeCreator-C0MN1f4J.css"])))=>i.map(i=>d[i]);
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, M as defineAsyncComponent, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, v as Suspense, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CwilVY9-.js";
import { $i as N8nIconButton_default, J as N8nPopover_default, Ji as N8nTooltip_default, Li as AskAssistantIcon_default, no as N8nButton_default } from "./src-WqI77c9U.js";
import { d as __vitePreload } from "./get-BXEQ0kDX.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { ur as STICKY_NODE_TYPE, vt as NODE_CREATOR_OPEN_SOURCES } from "./constants-CSBjw1Ht.js";
import { It as useWorkflowId, Kr as getMidCanvasPosition } from "./workflowDocument.store-BPKGO1X6.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-ChR9lgr2.js";
import { t as useFocusPanelStore } from "./focusPanel.store-C8dNISH_.js";
import { t as useAssistantStore } from "./assistant.store-B3qEmgjT.js";
import { t as useChatPanelStore } from "./chatPanel.store-BGHcoPyC.js";
import { t as useSetupPanelStore } from "./setupPanel.store-S4izNeW_.js";
import { t as useEditorContext } from "./useEditorContext-BHgdQhTR.js";
import { n as useInstanceAiEditorCapability } from "./useInstanceAiEditorCapability-BsLjiNSF.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-8BUMYnpM.js";
import { n as useNodeCreatorShortcutCoachmark } from "./useNodeCreatorShortcutCoachmark-CYgJ5moj.js";
import { t as useActions } from "./useActions-TDgB4p50.js";
//#region src/features/shared/nodeCreator/components/NodeCreatorShortcutCoachmark.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "node-creator-shortcut-coachmark__header" };
var _hoisted_2 = { class: "node-creator-shortcut-coachmark__title" };
var _hoisted_3 = { class: "node-creator-shortcut-coachmark__body" };
var _hoisted_4 = { class: "node-creator-shortcut-coachmark__footer" };
//#endregion
//#region src/features/shared/nodeCreator/components/NodeCreatorShortcutCoachmark.vue
var NodeCreatorShortcutCoachmark_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreatorShortcutCoachmark",
	props: { visible: { type: Boolean } },
	emits: ["dismiss"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nPopover_default), {
				open: __props.visible,
				"show-arrow": true,
				"enable-scrolling": false,
				"suppress-auto-focus": true,
				side: "left",
				align: "center",
				"side-offset": 8,
				"z-index": 2200,
				"content-class": "node-creator-shortcut-coachmark"
			}, {
				trigger: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				content: withCtx(() => [
					createBaseVNode("div", _hoisted_1, [createBaseVNode("span", _hoisted_2, toDisplayString(unref(i18n).baseText("nodeCreator.shortcutCoachmark.title")), 1)]),
					createBaseVNode("p", _hoisted_3, toDisplayString(unref(i18n).baseText("nodeCreator.shortcutCoachmark.body")), 1),
					createBaseVNode("div", _hoisted_4, [createVNode(unref(N8nButton_default), {
						size: "small",
						label: unref(i18n).baseText("nodeCreator.shortcutCoachmark.gotIt"),
						class: "node-creator-shortcut-coachmark__button",
						onClick: _cache[0] || (_cache[0] = ($event) => emit("dismiss"))
					}, null, 8, ["label"])])
				]),
				_: 3
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/features/shared/nodeCreator/views/NodeCreation.vue?vue&type=script&setup=true&lang.ts
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
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-y9Gbja7n.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const setupPanelStore = useSetupPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const chatPanelStore = useChatPanelStore();
		const workflowId = useWorkflowId();
		const { getAddedNodesAndConnections } = useActions();
		const { shouldShowCoachmark, onDismissCoachmark } = useNodeCreatorShortcutCoachmark();
		const sidePanelTooltip = computed(() => {
			if (setupPanelStore.isFeatureEnabled) return i18n.baseText("nodeView.openSidePanel");
			return i18n.baseText("nodeView.openFocusPanel");
		});
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
		const { aiAssistant, aiBuilder, instanceAi } = useEditorContext();
		const instanceAiCapability = useInstanceAiEditorCapability();
		async function onInstanceAiCanvasActionClick() {
			await instanceAiCapability.openWorkflow?.("canvas_action_button");
		}
		async function onAskAssistantButtonClick() {
			if (aiBuilder.value) await chatPanelStore.toggle({ mode: "builder" });
			else await chatPanelStore.toggle({ mode: "assistant" });
			if (chatPanelStore.isOpen) assistantStore.trackUserOpenedAssistant({
				source: "canvas",
				task: "placeholder",
				has_existing_session: !assistantStore.isSessionEnded,
				workflowId: workflowId.value
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
				createVNode(NodeCreatorShortcutCoachmark_default, {
					visible: unref(shouldShowCoachmark),
					onDismiss: unref(onDismissCoachmark)
				}, {
					default: withCtx(() => [createVNode(KeyboardShortcutTooltip_default, {
						label: unref(i18n).baseText("nodeView.openNodesPanel"),
						shortcut: { keys: ["N"] },
						placement: "left"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "subtle",
							size: "large",
							icon: "plus",
							"aria-label": unref(i18n).baseText("nodeView.openNodesPanel"),
							"data-test-id": "node-creator-plus-button",
							onClick: openNodeCreator
						}, null, 8, ["aria-label"])]),
						_: 1
					}, 8, ["label"])]),
					_: 1
				}, 8, ["visible", "onDismiss"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "search",
						"aria-label": unref(i18n).baseText("nodeView.openCommandBar"),
						"data-test-id": "command-bar-button",
						onClick: openCommandBar
					}, null, 8, ["aria-label"])]),
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
						variant: "subtle",
						size: "large",
						icon: "sticky-note",
						"aria-label": unref(i18n).baseText("nodeView.addStickyHint"),
						"data-test-id": "add-sticky-button",
						onClick: addStickyNote
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: sidePanelTooltip.value,
					shortcut: {
						keys: ["f"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "panel-right",
						"aria-label": sidePanelTooltip.value,
						active: __props.focusPanelActive,
						"data-test-id": "toggle-focus-panel-button",
						onClick: toggleFocusPanel
					}, null, 8, ["aria-label", "active"])]),
					_: 1
				}, 8, ["label"]),
				unref(chatPanelStore).isEditableCanvasView && unref(instanceAi) && !!unref(instanceAiCapability).openWorkflow ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					"icon-only": "",
					size: "large",
					"aria-label": unref(i18n).baseText("aiAssistant.tooltip"),
					class: normalizeClass({ [_ctx.$style.icon]: true }),
					"data-test-id": "instance-ai-canvas-action-button",
					onClick: onInstanceAiCanvasActionClick
				}, {
					default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
					_: 1
				}, 8, ["aria-label", "class"])) : createCommentVNode("", true),
				unref(chatPanelStore).isEditableCanvasView && (unref(aiAssistant) || unref(aiBuilder)) && !unref(instanceAi) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "left"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						iconOnly: "",
						size: "large",
						"aria-label": unref(i18n).baseText("aiAssistant.tooltip"),
						class: normalizeClass(_ctx.$style.icon),
						"data-test-id": "ask-assistant-canvas-action-button",
						onClick: onAskAssistantButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
						_: 1
					}, 8, ["aria-label", "class"])]),
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
	nodeButtonsWrapper: "_nodeButtonsWrapper_mt5fk_125",
	icon: "_icon_mt5fk_136"
};
var NodeCreation_default = /* @__PURE__ */ _plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { NodeCreation_default as default };
